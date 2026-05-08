#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const draftPath = process.argv[2];

if (!draftPath) {
  fail('Usage: node scripts/validate_resource_draft.mjs <resource-links.json>');
}

const draft = readJson(path.resolve(draftPath));
const errors = [];
const warnings = [];

if (!['zh', 'en', 'zh-Hant'].includes(draft.locale)) {
  errors.push('locale must be one of zh, en, zh-Hant.');
}

const reviewStatuses = [
  'pending-codex-review',
  'merged',
  'rejected',
  'needs-revision',
];

if (!reviewStatuses.includes(draft.review?.status)) {
  errors.push(`review.status must be one of ${reviewStatuses.join(', ')}.`);
}
requireString(draft.review?.createdBy, 'review.createdBy');
requireString(draft.review?.createdAt, 'review.createdAt');

if (!Array.isArray(draft.relationships) || draft.relationships.length === 0) {
  errors.push('relationships must contain at least one relationship.');
} else {
  draft.relationships.forEach((relationship, index) => {
    const label = `relationships[${index}]`;
    if (!['hospital', 'charity'].includes(relationship.resourceType)) {
      errors.push(`${label}.resourceType must be hospital or charity.`);
    }
    requireString(relationship.name, `${label}.name`);
    requireHttpUrl(relationship.officialUrl, `${label}.officialUrl`);
    requireHttpUrl(relationship.evidenceUrl, `${label}.evidenceUrl`);
    requireString(relationship.evidenceSummary, `${label}.evidenceSummary`);
    if (
      ![
        'rare-disease-network',
        'department-service',
        'clinic-or-mdt',
        'patient-organization-focus',
        'assistance-program',
        'public-directory',
      ].includes(relationship.relationKind)
    ) {
      errors.push(`${label}.relationKind is not recognized.`);
    }
    if (!['low', 'medium', 'high'].includes(relationship.confidence)) {
      errors.push(`${label}.confidence must be low, medium, or high.`);
    }
    if (
      !Array.isArray(relationship.diseaseSlugs) ||
      relationship.diseaseSlugs.length === 0
    ) {
      errors.push(`${label}.diseaseSlugs must contain at least one slug.`);
    }
  });
}

const allText = JSON.stringify(draft);
const unsafePatterns = [
  ['recommendation-wording', /推荐|首选|最佳|最好|顶尖|权威医院/],
  ['guarantee-wording', /保证|一定能|必然|百分之百|100%/],
  ['unsupported-aid-promise', /包报销|确保报销|确保援助|一定能申请/],
];

for (const [name, pattern] of unsafePatterns) {
  if (pattern.test(allText)) {
    warnings.push(`Potentially unsafe relationship wording detected: ${name}.`);
  }
}

if (errors.length > 0) {
  console.error('Resource draft validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  if (warnings.length > 0) {
    console.error('\nWarnings:');
    for (const warning of warnings) {
      console.error(`- ${warning}`);
    }
  }
  process.exit(1);
}

console.log(`Resource draft is structurally valid: ${path.resolve(draftPath)}`);
if (warnings.length > 0) {
  console.log('Warnings:');
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`Could not read JSON ${filePath}: ${error.message}`);
  }
}

function requireString(value, label) {
  if (typeof value !== 'string' || value.trim() === '') {
    errors.push(`${label} is required.`);
  }
}

function requireHttpUrl(value, label) {
  requireString(value, label);
  if (typeof value === 'string' && !/^https?:\/\//.test(value)) {
    errors.push(`${label} must be an http(s) URL.`);
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

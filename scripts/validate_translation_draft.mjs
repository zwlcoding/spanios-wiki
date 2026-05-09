#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const draftPath = process.argv[2];

if (!draftPath) {
  fail('Usage: node scripts/validate_translation_draft.mjs <translation.json>');
}

const resolvedPath = path.resolve(draftPath);
const draft = readJson(resolvedPath);
const sourceRecord = findSourceRecord(draft.slug);
const errors = [];
const warnings = [];

requireString(draft.slug, 'slug');
if (draft.slug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(draft.slug)) {
  errors.push('slug must be kebab-case.');
}

if (draft.sourceLocale !== 'zh') {
  errors.push('sourceLocale must be zh.');
}

if (!['en', 'zh-Hant'].includes(draft.targetLocale)) {
  errors.push('targetLocale must be en or zh-Hant.');
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
requireString(draft.updatedReason, 'updatedReason');

if (draft.translationRules?.noNewMedicalFacts !== true) {
  errors.push('translationRules.noNewMedicalFacts must be true.');
}
if (draft.translationRules?.noNewSources !== true) {
  errors.push('translationRules.noNewSources must be true.');
}
if (draft.translationRules?.noResourceRelationshipChanges !== true) {
  errors.push('translationRules.noResourceRelationshipChanges must be true.');
}

if (!sourceRecord) {
  errors.push(`No reviewed zh source record found for slug: ${draft.slug}`);
}

if (!Array.isArray(draft.sources) || draft.sources.length === 0) {
  errors.push('sources must contain at least one source copied from zh.');
} else {
  draft.sources.forEach((source, index) => {
    requireString(source.name, `sources[${index}].name`);
    requireString(source.url, `sources[${index}].url`);
    requireString(source.type, `sources[${index}].type`);
    if (source.url && !/^https?:\/\//.test(source.url)) {
      errors.push(`sources[${index}].url must be an http(s) URL.`);
    }
  });
}

if (sourceRecord) {
  const sourceUrls = new Set(sourceRecord.sources.map((source) => source.url));
  const draftUrls = new Set(draft.sources?.map((source) => source.url) ?? []);

  for (const url of draftUrls) {
    if (!sourceUrls.has(url)) {
      errors.push(`Translation source URL is not present in zh source: ${url}`);
    }
  }

  for (const url of sourceUrls) {
    if (!draftUrls.has(url)) {
      warnings.push(`Source URL omitted from translation draft: ${url}`);
    }
  }
}

const article = draft.article;
if (!article || typeof article !== 'object') {
  errors.push('article is required.');
} else {
  requireString(article.oneSentence, 'article.oneSentence');
  requireString(article.quickLook?.whatItIs, 'article.quickLook.whatItIs');
  requireString(
    article.quickLook?.whoToSeeFirst,
    'article.quickLook.whoToSeeFirst',
  );
  validateStringList(
    article.patientJourney?.whenToSuspect,
    'article.patientJourney.whenToSuspect',
  );
  validateStringList(
    article.patientJourney?.questionsForDoctor,
    'article.patientJourney.questionsForDoctor',
  );

  if (article.image) {
    errors.push('Translation drafts must not create image changes.');
  }
}

const allText = JSON.stringify(draft);
const bannedPatterns = [
  ['cure-promise', /治愈|根治|彻底恢复|guaranteed cure|cure guaranteed/i],
  ['dose-like-text', /\b\d+(\.\d+)?\s?(mg|g|ml|iu|单位|毫克|克|毫升)\b/i],
  ['absolute-treatment', /一定能|必然|保证|100%|百分之百/],
  [
    'new-resource-risk',
    /推荐医院|最佳医院|权威医院|top hospital|best hospital/i,
  ],
];

for (const [name, pattern] of bannedPatterns) {
  if (pattern.test(allText)) {
    warnings.push(`Potentially unsafe wording detected: ${name}.`);
  }
}

if (errors.length > 0) {
  console.error('Translation draft validation failed:');
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

console.log(`Translation draft is structurally valid: ${resolvedPath}`);
if (warnings.length > 0) {
  console.log('Warnings:');
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

function findSourceRecord(slug) {
  const source = fs.readFileSync(
    path.resolve('frontend/src/content/locales/zh/diseases.ts'),
    'utf8',
  );
  const blocks = splitEntityBlocks(source);
  const block = blocks.find((item) =>
    new RegExp(`slug:\\s*['"]${escapeRegExp(slug)}['"]`).test(item),
  );

  if (!block || !/quickLook:/.test(block)) {
    return undefined;
  }

  const sourceUrls = [...block.matchAll(/url:\s*['"]([^'"]+)['"]/g)].map(
    (match) => match[1],
  );

  return {
    sources: sourceUrls.map((url) => ({ url })),
  };
}

function splitEntityBlocks(localeBody) {
  const markers = [...localeBody.matchAll(/\.\.\.entity\(/g)].map(
    (match) => match.index ?? 0,
  );
  const blocks = [];

  for (const [index, start] of markers.entries()) {
    const end = markers[index + 1] ?? localeBody.length;
    blocks.push(localeBody.slice(start, end));
  }

  return blocks;
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

function validateStringList(value, label) {
  if (value === undefined) {
    return;
  }
  if (!Array.isArray(value)) {
    errors.push(`${label} must be an array.`);
    return;
  }
  value.forEach((item, index) => {
    if (typeof item !== 'string' || item.trim() === '') {
      errors.push(`${label}[${index}] must be a non-empty string.`);
    }
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

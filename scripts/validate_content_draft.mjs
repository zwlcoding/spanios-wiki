#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const draftPath = process.argv[2];

if (!draftPath) {
  fail('Usage: node scripts/validate_content_draft.mjs <draft.json>');
}

const resolvedPath = path.resolve(draftPath);
const draft = readJson(resolvedPath);
const errors = [];
const warnings = [];
const bannedCitationHostPatterns = [
  ['baidu', /(^|\.)baidu\.com$/],
  ['baidu-wenku', /(^|\.)wenku\.baidu\.com$/],
  ['book118', /(^|\.)book118\.com$/],
  ['doc88', /(^|\.)doc88\.com$/],
  ['familydoctor', /(^|\.)familydoctor\.com\.cn$/],
  ['haodf', /(^|\.)haodf\.com$/],
  ['maigoo', /(^|\.)maigoo\.com$/],
  ['medlive', /(^|\.)medlive\.cn$/],
  ['qq-baike', /(^|\.)baike\.qq\.com$/],
  ['renrendoc', /(^|\.)renrendoc\.com$/],
  ['sogou-baike', /(^|\.)baike\.sogou\.com$/],
  ['sohu', /(^|\.)sohu\.com$/],
  ['wendoc', /(^|\.)wendoc\.com$/],
  ['zhihu', /(^|\.)zhihu\.com$/],
];

requireString(draft.slug, 'slug');
if (draft.slug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(draft.slug)) {
  errors.push('slug must be kebab-case.');
}

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
requireString(draft.updatedReason, 'updatedReason');

if (!Array.isArray(draft.sources) || draft.sources.length === 0) {
  errors.push('sources must contain at least one source.');
} else {
  draft.sources.forEach((source, index) => {
    requireString(source.name, `sources[${index}].name`);
    requireString(source.url, `sources[${index}].url`);
    requireString(source.type, `sources[${index}].type`);
    if (source.url && !/^https?:\/\//.test(source.url)) {
      errors.push(`sources[${index}].url must be an http(s) URL.`);
    }
    const host = getUrlHost(source.url);
    const bannedHost = bannedCitationHostPatterns.find(([, pattern]) =>
      pattern.test(host),
    );
    if (bannedHost) {
      errors.push(
        `sources[${index}].url uses a low-quality citation host (${bannedHost[0]}). Keep it in sources.md as a lead, not draft sources.`,
      );
    }
    if (isGenericOfficialSource(source.url)) {
      errors.push(
        `sources[${index}].url is a generic official page, not a disease-specific citation.`,
      );
    }
  });
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

  if (article.image?.path) {
    const imagePath = resolveDraftAssetPath(article.image.path, resolvedPath);
    if (!fs.existsSync(imagePath)) {
      warnings.push(
        `article.image.path does not exist relative to draft or repo root: ${article.image.path}`,
      );
    }
  }
}

const allText = JSON.stringify(draft);
const bannedPatterns = [
  ['cure-promise', /治愈|根治|彻底恢复|guaranteed cure|cure guaranteed/i],
  ['dose-like-text', /\b\d+(\.\d+)?\s?(mg|g|ml|iu|单位|毫克|克|毫升)\b/i],
  ['absolute-treatment', /一定能|必然|保证|100%|百分之百/],
];

for (const [name, pattern] of bannedPatterns) {
  if (pattern.test(allText)) {
    warnings.push(`Potentially unsafe wording detected: ${name}.`);
  }
}

if (errors.length > 0) {
  console.error('Draft validation failed:');
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

console.log(`Draft is structurally valid: ${resolvedPath}`);
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

function resolveDraftAssetPath(assetPath, draftFilePath) {
  if (path.isAbsolute(assetPath)) {
    return assetPath;
  }

  const relativeToDraft = path.resolve(path.dirname(draftFilePath), assetPath);
  if (fs.existsSync(relativeToDraft)) {
    return relativeToDraft;
  }

  return path.resolve(process.cwd(), assetPath);
}

function getUrlHost(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function isGenericOfficialSource(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const normalizedPath = parsed.pathname.replace(/\/+$/, '') || '/';

    return (
      host === 'www.nhc.gov.cn' &&
      ['/', '/wjw', '/wjw/index.shtml'].includes(normalizedPath)
    );
  } catch {
    return false;
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

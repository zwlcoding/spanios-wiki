#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const locale = process.argv[2] ?? 'zh';
const filePath = path.join(
  root,
  'frontend/src/content/locales',
  locale,
  'diseases.ts',
);
const hospitalFilePath = path.join(
  root,
  'frontend/src/content/locales',
  locale,
  'hospitals.ts',
);

if (!fs.existsSync(filePath)) {
  fail(`Missing disease content file: ${path.relative(root, filePath)}`);
}

const source = fs.readFileSync(filePath, 'utf8');
const hospitalSource = fs.existsSync(hospitalFilePath)
  ? fs.readFileSync(hospitalFilePath, 'utf8')
  : '';
const detailedBlocks = readDetailedDiseaseBlocks(source);
const hospitalServiceBlocks = readHospitalServiceBlocks(hospitalSource);
const weakSourceHostPatterns = [
  /(^|\.)120ask\.com$/,
  /(^|\.)3zhijk\.com$/,
  /(^|\.)baidu\.com$/,
  /(^|\.)book118\.com$/,
  /(^|\.)cndzys\.com$/,
  /(^|\.)doc88\.com$/,
  /(^|\.)familydoctor\.com\.cn$/,
  /(^|\.)haodf\.com$/,
  /(^|\.)maigoo\.com$/,
  /(^|\.)medlive\.cn$/,
  /(^|\.)mfk\.com$/,
  /(^|\.)pucijiankang\.com$/,
  /(^|\.)qq\.com$/,
  /(^|\.)sohu\.com$/,
  /(^|\.)taodocs\.com$/,
  /(^|\.)yihu\.com$/,
  /(^|\.)youlai\.cn$/,
  /(^|\.)zhihu\.com$/,
];
const riskyTextPatterns = [
  ['recommendation-wording', /推荐医院|权威医院|最佳医院|首选医院|顶尖医院/],
  ['guarantee-wording', /保证治愈|保证有效|一定治愈|包治|根治宣传/],
  ['coverage-promise', /保证报销|一定报销|保证获得救助|一定获得救助/],
  ['dose-instruction', /\b\d+(\.\d+)?\s*(mg|g|μg|ug|ml|mL|IU)\b/i],
  ['strong-directive', /必须|金标准|最佳方案|建议每\s*\d/],
];

const errors = [];
const warnings = [];
const missingFeaturedImages = [];

for (const block of detailedBlocks) {
  if (/reviewStatus:\s*['"]draft['"]/.test(block.text)) {
    errors.push(
      `${block.slug}: detailed page is still marked reviewStatus draft.`,
    );
  }

  for (const [label, pattern] of riskyTextPatterns) {
    if (pattern.test(block.text)) {
      errors.push(`${block.slug}: risky wording matched ${label}.`);
    }
  }

  const urls = [...block.text.matchAll(/url:\s*['"]([^'"]+)['"]/g)].map(
    (match) => match[1],
  );
  for (const url of urls) {
    const hostname = safeHostname(url);
    if (
      hostname &&
      weakSourceHostPatterns.some((pattern) => pattern.test(hostname))
    ) {
      errors.push(
        `${block.slug}: weak source host in formal citations: ${url}`,
      );
    }
  }

  if (!/sources:\s*\[/.test(block.text)) {
    warnings.push(`${block.slug}: no structured sources array.`);
  }

  if (!/featuredImage:\s*\{/.test(block.text)) {
    missingFeaturedImages.push(block.slug);
  }
}

for (const block of hospitalServiceBlocks) {
  if (!/hospitalId:\s*\d+/.test(block.text)) {
    errors.push(`${block.id}: hospital service is missing hospitalId.`);
  }

  if (!/diseaseSlugs:\s*\[[^\]]+]/s.test(block.text)) {
    errors.push(`${block.id}: hospital service must link to diseaseSlugs.`);
  }

  if (!/relationKind:\s*['"][^'"]+['"]/.test(block.text)) {
    errors.push(`${block.id}: hospital service is missing relationKind.`);
  }

  if (!/confidence:\s*['"](low|medium|high)['"]/.test(block.text)) {
    errors.push(`${block.id}: hospital service is missing confidence.`);
  }

  if (!/lastVerifiedAt:\s*['"]\d{4}-\d{2}-\d{2}['"]/.test(block.text)) {
    warnings.push(`${block.id}: hospital service has no lastVerifiedAt.`);
  }

  if (!/(evidence:\s*\[|evidenceUrl:\s*['"]|sourceUrl:\s*['"])/.test(block.text)) {
    errors.push(`${block.id}: hospital service must include public evidence.`);
  }

  for (const [label, pattern] of riskyTextPatterns) {
    if (pattern.test(block.text)) {
      errors.push(`${block.id}: risky wording matched ${label}.`);
    }
  }
}

console.log(`Content audit: ${locale}`);
console.log(`Detailed disease pages: ${detailedBlocks.length}`);
console.log(`Hospital service relations: ${hospitalServiceBlocks.length}`);

if (warnings.length > 0) {
  console.log('\nWarnings:');
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

if (missingFeaturedImages.length > 0) {
  console.log(
    `\nImage coverage: ${detailedBlocks.length - missingFeaturedImages.length}/${detailedBlocks.length} detailed pages have featured images.`,
  );
  console.log(
    `Missing featured images: ${missingFeaturedImages.slice(0, 12).join(', ')}${
      missingFeaturedImages.length > 12 ? ', ...' : ''
    }`,
  );
}

if (errors.length > 0) {
  console.error('\nErrors:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('\nNo blocking content quality issues found.');

function readDetailedDiseaseBlocks(text) {
  const markers = [...text.matchAll(/\.\.\.entity\(/g)].map(
    (match) => match.index ?? 0,
  );
  const blocks = [];

  for (const [index, start] of markers.entries()) {
    const end = markers[index + 1] ?? text.length;
    const block = text.slice(start, end);
    if (!/quickLook:/.test(block)) {
      continue;
    }

    const slug = extract(block, /slug:\s*['"]([^'"]+)['"]/);
    blocks.push({
      slug: slug ?? `block-${index + 1}`,
      text: block,
    });
  }

  return blocks;
}

function readHospitalServiceBlocks(text) {
  if (!text) {
    return [];
  }

  const serviceArrayStart = text.indexOf('HospitalServiceDraft[] = [');
  if (serviceArrayStart === -1) {
    return [];
  }

  const serviceText = text.slice(serviceArrayStart);
  const markers = [...serviceText.matchAll(/\n\s*\{\s*\n\s*id:\s*['"]/g)].map(
    (match) => serviceArrayStart + (match.index ?? 0),
  );
  const blocks = [];

  for (const [index, start] of markers.entries()) {
    const end = markers[index + 1] ?? text.length;
    const block = text.slice(start, end);
    const id = extract(block, /id:\s*['"]([^'"]+)['"]/);

    blocks.push({
      id: id ?? `hospital-service-${index + 1}`,
      text: block,
    });
  }

  return blocks;
}

function extract(text, pattern) {
  const match = text.match(pattern);
  return match?.[1];
}

function safeHostname(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return undefined;
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

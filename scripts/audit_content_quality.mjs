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

if (!fs.existsSync(filePath)) {
  fail(`Missing disease content file: ${path.relative(root, filePath)}`);
}

const source = fs.readFileSync(filePath, 'utf8');
const detailedBlocks = readDetailedDiseaseBlocks(source);
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

console.log(`Content audit: ${locale}`);
console.log(`Detailed disease pages: ${detailedBlocks.length}`);

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

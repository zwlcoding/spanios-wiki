#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = parseArgs(process.argv.slice(2));
const limit = Number.parseInt(args.limit ?? '5', 10);
const locale = args.locale ?? 'zh';
const today = new Date().toISOString().slice(0, 10);

if (!Number.isInteger(limit) || limit < 1) {
  fail('--limit must be a positive integer.');
}

if (!['zh', 'en', 'zh-Hant'].includes(locale)) {
  fail('--locale must be one of zh, en, zh-Hant.');
}

const catalogEntries = [
  ...readCatalog('frontend/src/content/data/catalogs/first.ts', 'first'),
  ...readCatalog('frontend/src/content/data/catalogs/second.ts', 'second'),
];
const detailedSlugs = readDetailedDiseaseSlugs();
const draftSlugs = readExistingDraftSlugs(locale);
const batch = catalogEntries
  .filter((entry) => !detailedSlugs.has(entry.slug))
  .filter((entry) => !draftSlugs.has(entry.slug))
  .slice(0, limit);

const output = renderQueue(batch);

if (args.write) {
  const queuePath = path.join(root, 'content-drafts', 'hermes-queue.md');
  fs.mkdirSync(path.dirname(queuePath), { recursive: true });
  fs.writeFileSync(queuePath, output);
  console.log(`Wrote queue: ${path.relative(root, queuePath)}`);
}

process.stdout.write(output);

function renderQueue(entries) {
  const lines = [
    '# Hermes Rare Disease Draft Queue',
    '',
    `Generated at: ${new Date().toISOString()}`,
    `Locale: ${locale}`,
    `Batch limit: ${limit}`,
    '',
  ];

  if (entries.length === 0) {
    lines.push('No eligible diseases found for this queue.');
    return `${lines.join('\n')}\n`;
  }

  lines.push(
    'Use `docs/hermes-content-workflow.md` and `docs/hermes-disease-draft-prompt.md`.',
    'Write only under `content-drafts/`.',
    '',
    'For each item, create a dated draft folder for today:',
    '',
  );

  for (const [index, entry] of entries.entries()) {
    lines.push(
      `${index + 1}. ${entry.nameZh} (${entry.nameEn})`,
      `   - slug: ${entry.slug}`,
      `   - catalog: ${entry.catalog}`,
      `   - catalog no: ${entry.no}`,
      `   - output folder: content-drafts/${entry.slug}/${today}/`,
      '',
    );
  }

  lines.push(
    'Required files per disease:',
    '- draft.zh.json matching docs/content-draft.schema.json',
    '- sources.md',
    '- change-summary.md',
    '- image-prompt.md',
    '- generated-image.png if MMX image generation succeeds',
    '- resource-links.json matching docs/resource-draft.schema.json when hospital or charity relationships can be sourced',
    '',
    'Do not recommend hospitals. Provide department and care-navigation suggestions only.',
    'Do not invent hospitals, charity organizations, contacts, or disease-resource relationships.',
  );

  return `${lines.join('\n')}\n`;
}

function readCatalog(relativePath, catalog) {
  const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
  const objectPattern = /\{\s*no:\s*\d+,[\s\S]*?slug:\s*['"][^'"]+['"][\s\S]*?\},/g;
  const entries = [];

  for (const match of source.matchAll(objectPattern)) {
    const block = match[0];
    const no = extract(block, /no:\s*(\d+)/);
    const nameZh = extract(block, /nameZh:\s*(['"])([\s\S]*?)\1/, 2);
    const nameEn = extract(block, /nameEn:\s*(['"])([\s\S]*?)\1/, 2);
    const slug = extract(block, /slug:\s*(['"])([^'"]+)\1/, 2);

    if (no && nameZh && nameEn && slug) {
      entries.push({
        catalog,
        no: Number.parseInt(no, 10),
        nameZh,
        nameEn,
        slug,
      });
    }
  }

  return entries;
}

function readDetailedDiseaseSlugs() {
  const source = fs.readFileSync(
    path.join(root, 'frontend/src/content/data/diseases.ts'),
    'utf8',
  );
  const markers = [...source.matchAll(/\.\.\.entity\(/g)].map(
    (match) => match.index ?? 0,
  );
  const slugs = new Set();

  for (const [index, start] of markers.entries()) {
    const end = markers[index + 1] ?? source.length;
    const block = source.slice(start, end);
    if (!/quickLook:/.test(block)) {
      continue;
    }
    const slug = extract(block, /slug:\s*(['"])([^'"]+)\1/, 2);
    if (slug) {
      slugs.add(slug);
    }
  }

  return slugs;
}

function readExistingDraftSlugs(targetLocale) {
  const draftsRoot = path.join(root, 'content-drafts');
  const slugs = new Set();
  if (!fs.existsSync(draftsRoot)) {
    return slugs;
  }

  for (const filePath of findDrafts(draftsRoot)) {
    const draft = readJson(filePath);
    if (draft.locale !== targetLocale) {
      continue;
    }
    if (draft.review?.status === 'rejected') {
      continue;
    }
    if (draft.slug) {
      slugs.add(draft.slug);
    }
  }

  return slugs;
}

function findDrafts(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findDrafts(entryPath));
    } else if (/^draft\.[^.]+\.json$/.test(entry.name)) {
      results.push(entryPath);
    }
  }
  return results;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return {};
  }
}

function extract(text, pattern, group = 1) {
  return text.match(pattern)?.[group];
}

function parseArgs(rawArgs) {
  const parsed = {};
  for (let index = 0; index < rawArgs.length; index += 1) {
    const arg = rawArgs[index];
    if (arg === '--') {
      continue;
    }
    if (arg === '--write') {
      parsed.write = true;
      continue;
    }
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      parsed[key] = rawArgs[index + 1];
      index += 1;
    }
  }
  return parsed;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

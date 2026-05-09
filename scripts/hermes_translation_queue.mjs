#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = parseArgs(process.argv.slice(2));
const limit = Number.parseInt(args.limit ?? '3', 10);
const sourceLocale = args.sourceLocale ?? args.source ?? 'zh';
const targetLocale = args.locale ?? args.targetLocale ?? args.target ?? 'en';
const timeZone =
  args.timezone ?? process.env.HERMES_QUEUE_TIMEZONE ?? 'Asia/Shanghai';
const today = formatDateInTimeZone(new Date(), timeZone);

if (!Number.isInteger(limit) || limit < 1) {
  fail('--limit must be a positive integer.');
}

if (sourceLocale !== 'zh') {
  fail('--source-locale/sourceLocale must currently be zh.');
}

if (!['en', 'zh-Hant'].includes(targetLocale)) {
  fail('--locale/targetLocale must be en or zh-Hant.');
}

const sourceEntries = readDetailedDiseaseEntries(sourceLocale);
const existingTargetSlugs = readDetailedDiseaseSlugs(targetLocale);
const draftTargetSlugs = readExistingTranslationDraftSlugs(targetLocale);
const batch = sourceEntries
  .filter((entry) => !existingTargetSlugs.has(entry.slug))
  .filter((entry) => !draftTargetSlugs.has(entry.slug))
  .slice(0, limit);

const output = renderQueue(batch);

if (args.write) {
  const queuePath = path.join(root, 'content-drafts', 'translation-queue.md');
  fs.mkdirSync(path.dirname(queuePath), { recursive: true });
  fs.writeFileSync(queuePath, output);
  console.log(`Wrote queue: ${path.relative(root, queuePath)}`);
}

process.stdout.write(output);

function renderQueue(entries) {
  const lines = [
    '# Hermes Disease Translation Queue',
    '',
    `Generated at: ${new Date().toISOString()}`,
    `Queue date: ${today} (${timeZone})`,
    `Source locale: ${sourceLocale}`,
    `Target locale: ${targetLocale}`,
    `Batch limit: ${limit}`,
    '',
  ];

  if (entries.length === 0) {
    lines.push('No eligible diseases found for this translation queue.');
    return `${lines.join('\n')}\n`;
  }

  lines.push(
    'Use `docs/hermes-translation-workflow.md`.',
    'Write only under `content-drafts/`.',
    '',
    'For each item, create a dated draft folder for today:',
    '',
  );

  for (const [index, entry] of entries.entries()) {
    lines.push(
      `${index + 1}. ${entry.name} (${entry.nameEn ?? entry.slug})`,
      `   - slug: ${entry.slug}`,
      `   - source locale: ${sourceLocale}`,
      `   - target locale: ${targetLocale}`,
      `   - output file: content-drafts/${entry.slug}/${today}/translation.${targetLocale}.json`,
      `   - existing source fields: ${entry.fields.join(', ')}`,
      '',
    );
  }

  lines.push(
    'Hard rules:',
    '- Translate only from the existing reviewed Chinese content in frontend/src/content/locales/zh/diseases.ts.',
    '- Do not add new medical facts, sources, medications, hospitals, charities, or resource relationships.',
    '- Preserve source URLs exactly; translate source names only when natural.',
    '- Keep China-specific care navigation clearly framed as China-specific.',
    '- Output must match docs/translation-draft.schema.json.',
  );

  return `${lines.join('\n')}\n`;
}

function readDetailedDiseaseEntries(locale) {
  const blocks = readLocaleBlocks(locale);
  return blocks
    .filter((block) => /quickLook:/.test(block))
    .map((block) => {
      const slug = extract(block, /slug:\s*(['"])([^'"]+)\1/, 2);
      const name = extract(block, /name:\s*(['"])([\s\S]*?)\1/, 2);
      const nameEn = extract(block, /nameEn:\s*(['"])([\s\S]*?)\1/, 2);
      return {
        fields: detectFields(block),
        name,
        nameEn,
        slug,
      };
    })
    .filter((entry) => entry.slug && entry.name);
}

function readDetailedDiseaseSlugs(locale) {
  return new Set(readDetailedDiseaseEntries(locale).map((entry) => entry.slug));
}

function readLocaleBlocks(locale) {
  const sourcePath = path.join(
    root,
    'frontend/src/content/locales',
    locale,
    'diseases.ts',
  );
  if (!fs.existsSync(sourcePath)) {
    return [];
  }
  const localeBody = fs.readFileSync(sourcePath, 'utf8');

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
function readExistingTranslationDraftSlugs(target) {
  const draftsRoot = path.join(root, 'content-drafts');
  const slugs = new Set();
  if (!fs.existsSync(draftsRoot)) {
    return slugs;
  }

  for (const filePath of findTranslationDrafts(draftsRoot, target)) {
    const draft = readJson(filePath);
    if (draft.review?.status === 'rejected') {
      continue;
    }
    if (draft.slug) {
      slugs.add(draft.slug);
    }
  }

  return slugs;
}

function findTranslationDrafts(dir, target) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findTranslationDrafts(entryPath, target));
    } else if (entry.name === `translation.${target}.json`) {
      results.push(entryPath);
    }
  }
  return results;
}

function detectFields(block) {
  return [
    'name',
    'nameEn',
    'alias',
    'plainName',
    'oneSentence',
    'prevalence',
    'quickLook',
    'patientJourney',
    'medicalSections',
    'sources',
  ].filter((field) => new RegExp(`${field}:`).test(block));
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
      const key = arg
        .slice(2)
        .replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      parsed[key] = rawArgs[index + 1];
      index += 1;
    }
  }
  return parsed;
}

function formatDateInTimeZone(date, targetTimeZone) {
  try {
    const parts = new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: '2-digit',
      timeZone: targetTimeZone,
      year: 'numeric',
    }).formatToParts(date);
    const values = Object.fromEntries(
      parts
        .filter((part) => part.type !== 'literal')
        .map((part) => [part.type, part.value]),
    );

    return `${values.year}-${values.month}-${values.day}`;
  } catch (error) {
    fail(`Invalid timezone "${targetTimeZone}": ${error.message}`);
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

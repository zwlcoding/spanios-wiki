#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const draftsRoot = path.join(root, 'content-drafts');
const summaryPath = path.join(draftsRoot, 'translation-review-summary.md');
const draftPaths = findDrafts(draftsRoot);
const localeSlugCache = new Map();
const pendingDrafts = draftPaths.filter((draftPath) => {
  const draft = readJson(draftPath);
  if (draft.slug && draft.targetLocale) {
    const publishedSlugs = readDetailedDiseaseSlugs(draft.targetLocale);
    if (publishedSlugs.has(draft.slug)) {
      return false;
    }
  }
  return draft.review?.status === 'pending-codex-review';
});

const lines = [
  '# Translation Draft Review Summary',
  '',
  `Generated at: ${new Date().toISOString()}`,
  '',
];

if (pendingDrafts.length === 0) {
  lines.push('No pending translation drafts found.');
  fs.writeFileSync(summaryPath, `${lines.join('\n')}\n`);
  console.log('No pending translation drafts found.');
  console.log(`Wrote summary: ${summaryPath}`);
  process.exit(0);
}

lines.push(`Pending translation drafts: ${pendingDrafts.length}`, '');

for (const draftPath of pendingDrafts) {
  const relativePath = path.relative(root, draftPath);
  console.log(`Reviewing translation draft: ${relativePath}`);

  const validate = run('node', [
    'scripts/validate_translation_draft.mjs',
    relativePath,
  ]);

  if (validate.status !== 0) {
    lines.push(`## ${relativePath}`, '', '- Validation: failed', '');
    continue;
  }

  const promote = run('node', [
    'scripts/promote_translation_draft.mjs',
    relativePath,
  ]);
  const draft = readJson(draftPath);

  lines.push(
    `## ${relativePath}`,
    '',
    `- Slug: ${draft.slug}`,
    `- Source locale: ${draft.sourceLocale}`,
    `- Target locale: ${draft.targetLocale}`,
    `- Updated reason: ${draft.updatedReason}`,
    '- Validation: passed',
    `- Review artifact: content-drafts/${draft.slug}/review-output/${draft.targetLocale}.translation-article.ts`,
    '',
    'Sources copied from source locale:',
    ...draft.sources.map((source) => `- ${source.name}: ${source.url}`),
    '',
  );

  if (promote.status !== 0) {
    lines.push('- Translation artifact generation: failed', '');
  }
}

fs.writeFileSync(summaryPath, `${lines.join('\n')}\n`);
console.log(`Wrote summary: ${summaryPath}`);
console.log(
  'Next step: ask Codex to review generated translation artifacts and merge approved fields.',
);

function findDrafts(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findDrafts(entryPath));
    } else if (/^translation\.[^.]+\.json$/.test(entry.name)) {
      results.push(entryPath);
    }
  }
  return results.sort();
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    stdio: 'inherit',
  });

  if (result.error) {
    console.error(result.error.message);
    return { status: 1 };
  }

  return { status: result.status ?? 0 };
}

function readDetailedDiseaseSlugs(locale) {
  if (localeSlugCache.has(locale)) {
    return localeSlugCache.get(locale);
  }

  const localePath = path.join(
    root,
    'frontend/src/content/locales',
    locale,
    'diseases.ts',
  );
  const slugs = new Set();
  if (!fs.existsSync(localePath)) {
    localeSlugCache.set(locale, slugs);
    return slugs;
  }

  const content = fs.readFileSync(localePath, 'utf8');
  const blocks = splitDiseaseBlocks(content);
  for (const block of blocks) {
    if (!/quickLook:/.test(block)) {
      continue;
    }
    const slug = block.match(/slug:\s*(['"])([^'"]+)\1/)?.[2];
    if (slug) {
      slugs.add(slug);
    }
  }

  localeSlugCache.set(locale, slugs);
  return slugs;
}

function splitDiseaseBlocks(content) {
  const markers = [...content.matchAll(/\.\.\.entity\(/g)].map(
    (match) => match.index ?? 0,
  );
  return markers.map((start, index) =>
    content.slice(start, markers[index + 1] ?? content.length),
  );
}

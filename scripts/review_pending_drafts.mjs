#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const draftsRoot = path.join(root, 'content-drafts');
const summaryPath = path.join(draftsRoot, 'review-summary.md');
const draftPaths = findDrafts(draftsRoot);
const detailedSlugs = readDetailedDiseaseSlugs();
const pendingDrafts = [];
const skippedPublishedDrafts = [];

for (const draftPath of draftPaths) {
  const draft = readJson(draftPath);
  if (draft.review?.status !== 'pending-codex-review') {
    continue;
  }
  if (detailedSlugs.has(draft.slug)) {
    skippedPublishedDrafts.push(draftPath);
    continue;
  }
  pendingDrafts.push(draftPath);
}

const lines = [
  '# Content Draft Review Summary',
  '',
  `Generated at: ${new Date().toISOString()}`,
  '',
];

if (skippedPublishedDrafts.length > 0) {
  lines.push(
    `Skipped already-published pending-status drafts: ${skippedPublishedDrafts.length}`,
    '',
    ...skippedPublishedDrafts.map((draftPath) => `- ${path.relative(root, draftPath)}`),
    '',
  );
}

if (pendingDrafts.length === 0) {
  lines.push('No pending content drafts found.');
  fs.writeFileSync(summaryPath, `${lines.join('\n')}\n`);
  console.log('No pending content drafts found.');
  console.log(`Wrote summary: ${summaryPath}`);
  process.exit(0);
}

lines.push(`Pending drafts: ${pendingDrafts.length}`, '');

for (const draftPath of pendingDrafts) {
  const relativePath = path.relative(root, draftPath);
  console.log(`Reviewing draft: ${relativePath}`);

  const validate = run('node', [
    'scripts/validate_content_draft.mjs',
    relativePath,
  ]);

  if (validate.status !== 0) {
    lines.push(`## ${relativePath}`, '', '- Validation: failed', '');
    continue;
  }

  const promote = run('node', [
    'scripts/promote_content_draft.mjs',
    relativePath,
  ]);
  const draft = readJson(draftPath);
  const resourceDraftPath = path.join(path.dirname(draftPath), 'resource-links.json');
  const hasResourceDraft = fs.existsSync(resourceDraftPath);
  let resourceValidationLine = '- Resource relationships: none submitted';

  if (hasResourceDraft) {
    const resourceValidate = run('node', [
      'scripts/validate_resource_draft.mjs',
      path.relative(root, resourceDraftPath),
    ]);
    resourceValidationLine =
      resourceValidate.status === 0
        ? '- Resource relationships: validation passed'
        : '- Resource relationships: validation failed';
  }

  lines.push(
    `## ${relativePath}`,
    '',
    `- Slug: ${draft.slug}`,
    `- Locale: ${draft.locale}`,
    `- Updated reason: ${draft.updatedReason}`,
    '- Validation: passed',
    resourceValidationLine,
    `- Review artifact: content-drafts/${draft.slug}/review-output/${draft.locale}.disease-article.ts`,
    '',
    'Sources:',
    ...draft.sources.map((source) => `- ${source.name}: ${source.url}`),
    '',
  );

  if (promote.status !== 0) {
    lines.push('- Promotion artifact generation: failed', '');
  }
}

fs.writeFileSync(summaryPath, `${lines.join('\n')}\n`);
console.log(`Wrote summary: ${summaryPath}`);
console.log(
  'Next step: ask Codex to review generated artifacts and merge approved fields.',
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
    } else if (/^draft\.[^.]+\.json$/.test(entry.name)) {
      results.push(entryPath);
    }
  }
  return results.sort();
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readDetailedDiseaseSlugs() {
  const sourcePath = path.join(root, 'frontend/src/content/locales/zh/diseases.ts');
  if (!fs.existsSync(sourcePath)) {
    return new Set();
  }

  const source = fs.readFileSync(sourcePath, 'utf8');
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
    const slug = block.match(/slug:\s*['"]([^'"]+)['"]/)?.[1];
    if (slug) {
      slugs.add(slug);
    }
  }

  return slugs;
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

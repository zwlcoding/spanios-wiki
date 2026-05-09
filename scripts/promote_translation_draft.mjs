#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const draftPath = process.argv[2];

if (!draftPath) {
  fail('Usage: node scripts/promote_translation_draft.mjs <translation.json>');
}

const resolvedPath = path.resolve(draftPath);
const draft = readJson(resolvedPath);
const outputDir = path.resolve('content-drafts', draft.slug, 'review-output');

fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(
  outputDir,
  `${draft.targetLocale}.translation-article.ts`,
);
const article = draft.article ?? {};
const source = `// Generated from ${path.relative(process.cwd(), resolvedPath)}
// Review this file, then manually merge the translated fields into frontend/src/content/locales/${draft.targetLocale}/diseases.ts.
// Translation drafts must not add medical facts, sources, images, hospitals, charities, or resource relationships.

export const ${toIdentifier(draft.slug)}${localeSuffix(draft.targetLocale)}Translation = ${stableStringify(
  {
    alias: article.alias,
    medicalSections: article.medicalSections,
    name: article.name,
    nameEn: article.nameEn,
    oneSentence: article.oneSentence,
    patientJourney: article.patientJourney,
    plainName: article.plainName,
    prevalence: article.prevalence,
    quickLook: article.quickLook,
    reviewStatus: 'draft',
    sources: draft.sources,
  },
)} as const;
`;

fs.writeFileSync(outputPath, source);

console.log(`Wrote translation review artifact: ${outputPath}`);
console.log(
  'Next step: Codex reviews this artifact and manually merges approved fields.',
);

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`Could not read JSON ${filePath}: ${error.message}`);
  }
}

function stableStringify(value) {
  return JSON.stringify(sortObject(value), null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, "'");
}

function sortObject(value) {
  if (Array.isArray(value)) {
    return value.map(sortObject);
  }
  if (!value || typeof value !== 'object') {
    return value;
  }

  return Object.keys(value)
    .sort()
    .reduce((result, key) => {
      if (value[key] !== undefined) {
        result[key] = sortObject(value[key]);
      }
      return result;
    }, {});
}

function toIdentifier(slug) {
  return slug.replace(/(^|-)([a-z0-9])/g, (_, _dash, char) =>
    char.toUpperCase(),
  );
}

function localeSuffix(locale) {
  return locale
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

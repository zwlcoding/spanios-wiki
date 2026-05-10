#!/usr/bin/env node

import childProcess from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const zhFile = path.join(root, 'frontend/src/content/locales/zh/diseases.ts');
const enFile = path.join(root, 'frontend/src/content/locales/en/diseases.ts');
const cacheDir = path.join(os.tmpdir(), 'spanios-en-disease-translations');
const concurrency = Number(process.env.TRANSLATION_CONCURRENCY ?? 3);
const model = process.env.MMX_MODEL ?? 'MiniMax-M2.7-highspeed';

fs.mkdirSync(cacheDir, { recursive: true });

const zhDrafts = readDiseaseDrafts(zhFile, 'zhDiseaseDrafts');
const existingEnDrafts = fs.existsSync(enFile)
  ? readDiseaseDrafts(enFile, 'enDiseaseDrafts')
  : [];
const existingDetailedBySlug = new Map(
  existingEnDrafts
    .filter((draft) => draft.quickLook)
    .map((draft) => [draft.slug, normalizeExistingEnglishDraft(draft)]),
);
const publishedZhDrafts = zhDrafts.filter(
  (draft) =>
    draft.quickLook &&
    (draft.reviewStatus === 'patient-reviewed' ||
      draft.reviewStatus === 'medical-reviewed'),
);

const translations = new Map(existingDetailedBySlug);
const missingDrafts = publishedZhDrafts.filter(
  (draft) => !translations.has(draft.slug),
);

console.log(
  `Published zh disease drafts: ${publishedZhDrafts.length}; existing en detailed drafts: ${existingDetailedBySlug.size}; to translate: ${missingDrafts.length}.`,
);

let nextIndex = 0;
let completed = 0;

await Promise.all(
  Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (nextIndex < missingDrafts.length) {
      const draft = missingDrafts[nextIndex++];
      const translated = await translateWithCache(draft);
      translations.set(draft.slug, translated);
      completed++;
      console.log(
        `[${completed}/${missingDrafts.length}] translated ${draft.slug}`,
      );
    }
  }),
);

const finalDrafts = publishedZhDrafts.map((draft) => {
  const translated = translations.get(draft.slug);

  if (!translated) {
    throw new Error(`Missing translation for ${draft.slug}`);
  }

  return normalizeTranslatedDraft(draft, translated);
});

const output = `import type { DiseaseDraft } from '@/content/data/types';

export const enDiseaseDrafts: DiseaseDraft[] = ${JSON.stringify(
  finalDrafts,
  null,
  2,
)};
`;

fs.writeFileSync(enFile, output);
console.log(`Wrote ${finalDrafts.length} English disease drafts to ${enFile}`);

function readDiseaseDrafts(filePath, exportName) {
  const source = fs
    .readFileSync(filePath, 'utf8')
    .replace(/import[^;]+;\n/g, '')
    .replace(
      new RegExp(`export const ${exportName}: DiseaseDraft\\[] =`),
      `const ${exportName} =`,
    );
  const context = { entity };
  vm.createContext(context);
  vm.runInContext(`${source}\nthis.out = ${exportName};`, context);
  return context.out;
}

function entity(id, documentId) {
  const timestamp = '2026-05-01T00:00:00.000Z';

  return {
    createdAt: timestamp,
    documentId,
    id,
    publishedAt: timestamp,
    updatedAt: timestamp,
  };
}

function normalizeExistingEnglishDraft(draft) {
  return {
    ...draft,
    reviewStatus:
      draft.reviewStatus === 'medical-reviewed'
        ? 'medical-reviewed'
        : 'patient-reviewed',
  };
}

async function translateWithCache(draft) {
  const cachePath = path.join(cacheDir, `${draft.slug}.json`);

  if (fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  const messagesPath = path.join(cacheDir, `${draft.slug}.messages.json`);
  fs.writeFileSync(
    messagesPath,
    JSON.stringify([
      {
        role: 'system',
        content:
          'You are a precise medical content translator for a rare disease public knowledge base. Return only one valid JSON object. Translate Chinese text to plain, neutral English for patients and families. Preserve object keys and schema. Preserve ids, documentId, slug, categorySlug, tagSlugs, charityIds, hospitalIds, reviewStatus, featuredImage, source URLs, source types, icd10Code, and dates exactly. Use nameEn as the English name when available. Preserve HTML tags exactly and translate only the text inside tags. Do not add new medical claims, dosages, hospital recommendations, or promises.',
      },
      {
        role: 'user',
        content: JSON.stringify(draft),
      },
    ]),
  );

  let translated;

  try {
    translated = translateWithMiniMax(draft, messagesPath);
  } catch (error) {
    console.warn(
      `MiniMax failed for ${draft.slug}; falling back to Kimi: ${error.message}`,
    );
    translated = translateWithKimi(draft);
  }

  const normalized = normalizeTranslatedDraft(draft, translated);
  fs.writeFileSync(cachePath, JSON.stringify(normalized, null, 2));
  return normalized;
}

function translateWithMiniMax(_draft, messagesPath) {
  const result = childProcess.spawnSync(
    'mmx',
    [
      'text',
      'chat',
      '--messages-file',
      messagesPath,
      '--output',
      'json',
      '--max-tokens',
      '12000',
      '--temperature',
      '0.2',
      '--model',
      model,
    ],
    {
      cwd: root,
      encoding: 'utf8',
      timeout: 240_000,
    },
  );

  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout);
  }

  return extractJsonObject(result.stdout);
}

function translateWithKimi(draft) {
  const prompt = [
    'Return only one valid JSON object.',
    'Translate this rare disease draft from Chinese to plain, neutral English for patients and families.',
    'Preserve object keys and schema.',
    'Preserve ids, documentId, slug, categorySlug, tagSlugs, charityIds, hospitalIds, reviewStatus, featuredImage, source URLs, source types, icd10Code, and dates exactly.',
    'Use nameEn as the English name when available.',
    'Preserve HTML tags exactly and translate only the text inside tags.',
    'Do not add new medical claims, dosages, hospital recommendations, or promises.',
    JSON.stringify(draft),
  ].join('\n\n');

  const result = childProcess.spawnSync(
    'kimi',
    ['--print', '--final-message-only', '--input-format', 'text'],
    {
      cwd: root,
      encoding: 'utf8',
      input: prompt,
      timeout: 240_000,
    },
  );

  if (result.status !== 0) {
    throw new Error(
      `kimi failed for ${draft.slug}: ${result.stderr || result.stdout}`,
    );
  }

  return extractJsonObjectFromText(result.stdout);
}

function extractJsonObject(stdout) {
  const response = JSON.parse(stdout);
  const text = response.content
    .filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('\n')
    .trim();

  return extractJsonObjectFromText(text);
}

function extractJsonObjectFromText(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const rawText = fenced?.[1] ?? text;
  const start = rawText.indexOf('{');
  const end = rawText.lastIndexOf('}');

  if (start === -1 || end === -1 || end <= start) {
    throw new Error(
      `No JSON object found in model output: ${text.slice(0, 200)}`,
    );
  }

  return JSON.parse(rawText.slice(start, end + 1));
}

function normalizeTranslatedDraft(original, translated) {
  const normalized = {
    ...translated,
    categorySlug: original.categorySlug,
    charityIds: original.charityIds,
    createdAt: original.createdAt,
    documentId: original.documentId,
    featuredImage: original.featuredImage,
    hospitalIds: original.hospitalIds,
    icd10Code: original.icd10Code,
    id: original.id,
    name: original.nameEn,
    nameEn: original.nameEn,
    publishedAt: original.publishedAt,
    reviewStatus: original.reviewStatus,
    slug: original.slug,
    tagSlugs: original.tagSlugs,
    updatedAt: original.updatedAt,
  };

  if (original.sources && normalized.sources) {
    normalized.sources = normalized.sources.map((source, index) => ({
      ...source,
      license: original.sources[index]?.license,
      type: original.sources[index]?.type,
      url: original.sources[index]?.url ?? source.url,
    }));
  }

  return removeUndefined(normalized);
}

function removeUndefined(value) {
  if (Array.isArray(value)) {
    return value.map(removeUndefined);
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, child]) => child !== undefined)
      .map(([key, child]) => [key, removeUndefined(child)]),
  );
}

import type { Disease } from '@/types/content';

export type SearchMatchKind =
  | 'alias'
  | 'care'
  | 'category'
  | 'content'
  | 'identifier'
  | 'name'
  | 'source'
  | 'symptom';

export interface SearchMatch {
  field: string;
  kind: SearchMatchKind;
  snippet?: string;
}

export interface RankedSearchMatch {
  match: SearchMatch;
  score: number;
}

export function normalizeSearchText(value: string | undefined): string {
  return (value ?? '')
    .replace(/<[^>]*>/g, '')
    .toLocaleLowerCase()
    .trim();
}

export function diseaseMatchesSearch(
  disease: Disease,
  query: string | undefined,
): boolean {
  return findBestDiseaseSearchMatch(disease, query) != null;
}

export function findBestDiseaseSearchMatch(
  disease: Disease,
  query: string | undefined,
): RankedSearchMatch | undefined {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) {
    return {
      match: { field: 'name', kind: 'name', snippet: disease.name },
      score: 0,
    };
  }

  return findBestMatch(normalizedQuery, [
    { field: 'name', kind: 'name', score: 100, value: disease.name },
    { field: 'english_name', kind: 'alias', score: 82, value: disease.nameEn },
    { field: 'alias', kind: 'alias', score: 82, value: disease.alias },
    { field: 'plain_name', kind: 'alias', score: 76, value: disease.plainName },
    {
      field: 'icd10_code',
      kind: 'identifier',
      score: 72,
      value: disease.icd10Code,
    },
    {
      field: 'quick_look',
      kind: 'care',
      score: 68,
      value: [
        disease.quickLook?.whatItIs,
        disease.quickLook?.whoToSeeFirst,
        disease.quickLook?.hasTreatment,
        disease.quickLook?.isGenetic,
        disease.quickLook?.commonDelayReason,
      ],
    },
    {
      field: 'patient_journey',
      kind: 'care',
      score: 64,
      value: [
        ...(disease.patientJourney?.whenToSuspect ?? []),
        ...(disease.patientJourney?.commonWrongTurns ?? []),
        ...(disease.patientJourney?.diagnosisChecklist ?? []),
        ...(disease.patientJourney?.firstDepartments ?? []),
        ...(disease.patientJourney?.questionsForDoctor ?? []),
        ...(disease.patientJourney?.testsToAskAbout ?? []),
      ],
    },
    {
      field: 'symptoms',
      kind: 'symptom',
      score: 58,
      value: [disease.symptoms, disease.medicalSections?.symptoms],
    },
    {
      field: 'medical_content',
      kind: 'content',
      score: 48,
      value: [
        disease.oneSentence,
        disease.diagnosis,
        disease.treatment,
        disease.prognosis,
        disease.medicalSections?.diagnosis,
        disease.medicalSections?.treatment,
        disease.medicalSections?.longTermCare,
        disease.medicalSections?.fertilityOrFamily,
        disease.medicalSections?.emergencySigns,
      ],
    },
    {
      field: 'category_or_tag',
      kind: 'category',
      score: 40,
      value: [
        disease.category?.name,
        ...(disease.tags?.map((tag) => tag.name) ?? []),
        disease.catalogNumber
          ? `目录第 ${disease.catalogNumber} 项`
          : undefined,
        ...(disease.catalogRefs?.map(
          (ref) => `${ref.catalogName} 第 ${ref.itemNumber} 项`,
        ) ?? []),
      ],
    },
    {
      field: 'source',
      kind: 'source',
      score: 32,
      value: [
        disease.sourceName,
        ...(disease.sources?.map((source) => source.name) ?? []),
      ],
    },
  ]);
}

export type MatchCandidate = {
  field: string;
  kind: SearchMatchKind;
  score: number;
  value: Array<string | undefined> | string | undefined;
};

export function findBestMatch(
  normalizedQuery: string,
  candidates: MatchCandidate[],
): RankedSearchMatch | undefined {
  let bestMatch: RankedSearchMatch | undefined;

  for (const candidate of candidates) {
    const values = Array.isArray(candidate.value)
      ? candidate.value
      : [candidate.value];

    for (const value of values) {
      const normalizedValue = normalizeSearchText(value);

      if (!normalizedValue.includes(normalizedQuery)) {
        continue;
      }

      const score =
        normalizedValue === normalizedQuery
          ? candidate.score + 20
          : normalizedValue.startsWith(normalizedQuery)
            ? candidate.score + 10
            : candidate.score;

      if (!bestMatch || score > bestMatch.score) {
        bestMatch = {
          match: {
            field: candidate.field,
            kind: candidate.kind,
            snippet: makeSnippet(value, normalizedQuery),
          },
          score,
        };
      }
    }
  }

  return bestMatch;
}

function makeSnippet(value: string | undefined, normalizedQuery: string) {
  const text = normalizeSearchText(value);

  if (!text) {
    return undefined;
  }

  const matchIndex = text.indexOf(normalizedQuery);
  const start = Math.max(0, matchIndex - 24);
  const end = Math.min(text.length, matchIndex + normalizedQuery.length + 42);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < text.length ? '...' : '';

  return `${prefix}${text.slice(start, end)}${suffix}`;
}

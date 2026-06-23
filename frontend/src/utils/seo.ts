import type { Disease, Locale } from '@/types/content';

type JsonLdValue =
  | boolean
  | null
  | number
  | string
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

export function buildDiseaseSeo(disease: Disease, locale: Locale) {
  const title = buildDiseaseTitle(disease, locale);
  const description = buildDiseaseDescription(disease, locale);
  const treatment = plainText(
    disease.medicalSections?.treatment ?? disease.treatment,
  );

  return {
    description,
    jsonLd: compactJsonLd({
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: disease.name,
      alternateName: uniqueStrings([
        disease.nameEn,
        ...splitAliases(disease.alias),
      ]),
      code: disease.icd10Code
        ? {
            '@type': 'MedicalCode',
            codeValue: disease.icd10Code,
            codingSystem: 'ICD-10',
          }
        : undefined,
      description,
      expectedPrognosis: plainText(disease.prognosis),
      mainEntityOfPage: {
        '@type': 'WebPage',
        name: title,
      },
      possibleTreatment: treatment
        ? [
            {
              '@type': 'MedicalTherapy',
              description: treatment,
            },
          ]
        : undefined,
      signOrSymptom: disease.patientJourney?.whenToSuspect?.length
        ? disease.patientJourney.whenToSuspect.map((symptom) => ({
            '@type': 'MedicalSignOrSymptom',
            name: symptom,
          }))
        : plainText(disease.medicalSections?.symptoms ?? disease.symptoms),
      subjectOf: buildDiseaseSubjectOf(disease, locale),
    }),
    title,
  };
}

export function buildDiseaseTitle(disease: Disease, locale: Locale) {
  if (locale === 'en') {
    return `${disease.nameEn ?? disease.name} | Spanios Rare Disease Wiki`;
  }

  const englishName = disease.nameEn ? `（${disease.nameEn}）` : '';
  return `${disease.name}${englishName} | Spanios 罕见病 Wiki`;
}

export function buildDiseaseDescription(disease: Disease, locale: Locale) {
  const fallback =
    locale === 'en'
      ? `Care guide, symptoms, diagnosis, treatment, and care resources for ${disease.nameEn ?? disease.name}.`
      : `${disease.name}的症状、诊断、治疗、就医科室和相关资源导航。`;
  const description =
    disease.oneSentence ??
    disease.quickLook?.whatItIs ??
    plainText(disease.medicalSections?.symptoms ?? disease.symptoms) ??
    fallback;

  return truncateDescription(plainText(description) ?? fallback);
}

export function plainText(value: string | undefined) {
  const text = value
    ?.replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

  return text || undefined;
}

function buildDiseaseSubjectOf(disease: Disease, locale: Locale) {
  const subjects: JsonLdValue[] = [];

  if (disease.hospitals?.length) {
    subjects.push({
      '@type': 'ItemList',
      itemListElement: disease.hospitals
        .slice(0, 10)
        .map((hospital, index) => ({
          '@type': 'ListItem',
          item: {
            '@type': 'Hospital',
            address: [hospital.province, hospital.city, hospital.address]
              .filter(Boolean)
              .join(' '),
            name: hospital.name,
            ...(hospital.website ? { url: hospital.website } : {}),
          },
          position: index + 1,
        })),
      name:
        locale === 'en'
          ? `Care resources for ${disease.nameEn ?? disease.name}`
          : `${disease.name}相关就医资源`,
    });
  }

  if (disease.sources?.length) {
    subjects.push(
      ...disease.sources.slice(0, 5).map((source) => ({
        '@type': 'CreativeWork',
        name: source.name,
        url: source.url,
      })),
    );
  }

  return subjects.length ? subjects : undefined;
}

function splitAliases(alias: string | undefined) {
  return (
    alias
      ?.split(/[、,，/]/)
      .map((item) => item.trim())
      .filter(Boolean) ?? []
  );
}

function uniqueStrings(values: Array<string | undefined>) {
  return Array.from(new Set(values.filter(Boolean))) as string[];
}

function truncateDescription(description: string) {
  if (description.length <= 155) {
    return description;
  }

  return `${description.slice(0, 154)}…`;
}

function compactJsonLd<T extends { [key: string]: JsonLdValue | undefined }>(
  value: T,
) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (Array.isArray(entry)) {
        return entry.length > 0;
      }

      return entry !== undefined && entry !== '';
    }),
  );
}

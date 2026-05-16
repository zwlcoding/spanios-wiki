import type { Disease } from '@/types/content';

export function normalizeSearchText(value: string | undefined): string {
  return (value ?? '')
    .replace(/<[^>]*>/g, '')
    .toLocaleLowerCase()
    .trim();
}

export function toSearchableText(disease: Disease): string {
  const parts = [
    disease.name,
    disease.nameEn,
    disease.alias,
    disease.icd10Code,
    disease.oneSentence,
    disease.plainName,
    disease.prevalence,
    disease.quickLook?.whatItIs,
    disease.quickLook?.whoToSeeFirst,
    disease.quickLook?.commonDelayReason,
    ...(disease.patientJourney?.whenToSuspect ?? []),
    ...(disease.patientJourney?.commonWrongTurns ?? []),
    ...(disease.patientJourney?.diagnosisChecklist ?? []),
    ...(disease.patientJourney?.firstDepartments ?? []),
    ...(disease.patientJourney?.questionsForDoctor ?? []),
    ...(disease.patientJourney?.testsToAskAbout ?? []),
    disease.symptoms,
    disease.diagnosis,
    disease.treatment,
    disease.medicalSections?.symptoms,
    disease.medicalSections?.diagnosis,
    disease.medicalSections?.treatment,
    disease.medicalSections?.longTermCare,
    disease.medicalSections?.fertilityOrFamily,
    disease.medicalSections?.emergencySigns,
    disease.sourceName,
    disease.catalogNumber ? `目录第 ${disease.catalogNumber} 项` : undefined,
    ...(disease.catalogRefs?.map(
      (ref) => `${ref.catalogName} 第 ${ref.itemNumber} 项`,
    ) ?? []),
    ...(disease.sources?.map((source) => source.name) ?? []),
    disease.category?.name,
    ...(disease.tags?.map((tag) => tag.name) ?? []),
  ];

  return parts.map(normalizeSearchText).join(' ');
}

export function diseaseMatchesSearch(
  disease: Disease,
  query: string | undefined,
): boolean {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return true;
  }

  return normalizeSearchText(toSearchableText(disease)).includes(
    normalizedQuery,
  );
}

import { getWikiContent, toResponse } from '@/content/wikiData';
import { getLocale } from '@/paraglide/runtime.js';
import type {
  CharityOrganization,
  ContentResponse,
  Disease,
  DiseaseCategory,
  Hospital,
  SiteSettings,
} from '@/types/content';

type DiseaseFilters = {
  category?: string;
  search?: string;
};

type HospitalFilters = {
  province?: string;
  search?: string;
};

type CharityFilters = {
  type?: string;
  search?: string;
};

export async function fetchSiteSettings(): Promise<SiteSettings> {
  return getContent().siteSettings;
}

export async function fetchDiseases(
  filters?: DiseaseFilters,
): Promise<ContentResponse<Disease[]>> {
  const diseases = getContent().diseases.filter((disease) => {
    const matchesCategory =
      !filters?.category ||
      filters.category === 'all' ||
      disease.category?.slug === filters.category;
    const matchesSearch = matchesQuery(filters?.search, [
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
    ]);

    return matchesCategory && matchesSearch;
  });

  return toResponse(diseases);
}

export async function fetchDiseaseBySlug(
  slug: string,
): Promise<ContentResponse<Disease>> {
  const disease = getContent().diseases.find((item) => item.slug === slug);

  if (!disease) {
    throw new Error('Disease not found');
  }

  return toResponse(disease);
}

export async function fetchHospitals(
  filters?: HospitalFilters,
): Promise<ContentResponse<Hospital[]>> {
  const hospitals = getContent().hospitals.filter((hospital) => {
    const matchesProvince =
      !filters?.province ||
      filters.province === 'all' ||
      hospital.province === filters.province;
    const matchesSearch = matchesQuery(filters?.search, [
      hospital.name,
      hospital.province,
      hospital.city,
      hospital.address,
      hospital.specialties,
      ...(hospital.departments?.map((department) => department.name) ?? []),
      ...(hospital.diseases?.map((disease) => disease.name) ?? []),
      ...(hospital.services?.flatMap((service) => [
        service.departmentName,
        service.serviceName,
        service.notes,
        service.evidenceSummary,
        service.relationKind,
        service.serviceKind,
        service.confidence,
        ...(service.patientPrep ?? []),
        ...(service.evidence?.flatMap((evidence) => [
          evidence.title,
          evidence.publisher,
          evidence.summary,
          evidence.kind,
        ]) ?? []),
        ...(service.diseases?.map((disease) => disease.name) ?? []),
      ]) ?? []),
    ]);

    return matchesProvince && matchesSearch;
  });

  return toResponse(hospitals);
}

export async function fetchHospitalById(
  id: string,
): Promise<ContentResponse<Hospital>> {
  const hospital = getContent().hospitals.find((item) => `${item.id}` === id);

  if (!hospital) {
    throw new Error('Hospital not found');
  }

  return toResponse(hospital);
}

export async function fetchCharityOrganizations(
  filters?: CharityFilters,
): Promise<ContentResponse<CharityOrganization[]>> {
  const charities = getContent().charities.filter((charity) => {
    const matchesType =
      !filters?.type || filters.type === 'all' || charity.type === filters.type;
    const matchesSearch = matchesQuery(filters?.search, [
      charity.name,
      charity.description,
      charity.services,
      charity.contactPerson,
      charity.email,
      charity.wechat,
      ...(charity.diseases?.map((disease) => disease.name) ?? []),
    ]);

    return matchesType && matchesSearch;
  });

  return toResponse(charities);
}

export async function fetchCharityOrganizationById(
  id: string,
): Promise<ContentResponse<CharityOrganization>> {
  const charity = getContent().charities.find((item) => `${item.id}` === id);

  if (!charity) {
    throw new Error('Charity organization not found');
  }

  return toResponse(charity);
}

export async function fetchDiseaseCategories(): Promise<
  ContentResponse<DiseaseCategory[]>
> {
  return toResponse(getContent().categories);
}

export async function globalSearch(query: string): Promise<{
  diseases: Disease[];
  hospitals: Hospital[];
  charities: CharityOrganization[];
}> {
  const [diseasesRes, hospitalsRes, charitiesRes] = await Promise.all([
    fetchDiseases({ search: query }),
    fetchHospitals({ search: query }),
    fetchCharityOrganizations({ search: query }),
  ]);

  return {
    charities: charitiesRes.data,
    diseases: diseasesRes.data,
    hospitals: hospitalsRes.data,
  };
}

function getContent() {
  return getWikiContent(getLocale());
}

function matchesQuery(
  query: string | undefined,
  values: Array<string | undefined>,
) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return true;
  }

  return values.some((value) => normalize(value).includes(normalizedQuery));
}

function normalize(value: string | undefined) {
  return (value ?? '')
    .replace(/<[^>]*>/g, '')
    .toLocaleLowerCase()
    .trim();
}

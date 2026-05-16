import {
  getWikiContent,
  getWikiDiseaseContent,
  toResponse,
} from '@/content/wikiData';
import { getLocale } from '@/paraglide/runtime.js';
import type {
  CharityOrganization,
  ContentResponse,
  Disease,
  DiseaseCategory,
  Hospital,
  SiteSettings,
} from '@/types/content';
import { diseaseMatchesSearch } from '@/utils/searchableText';

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

export type DiseaseInventoryStats = {
  draftCount: number;
  publishedCount: number;
  totalCatalogReferences: number;
  totalCount: number;
};

export async function fetchSiteSettings(): Promise<SiteSettings> {
  return getContent().siteSettings;
}

export async function fetchDiseases(
  filters?: DiseaseFilters,
): Promise<ContentResponse<Disease[]>> {
  const diseases = getContent().diseases.filter((disease) => {
    if (!isPublishedDisease(disease)) {
      return false;
    }

    const matchesCategory =
      !filters?.category ||
      filters.category === 'all' ||
      disease.category?.slug === filters.category;
    const matchesSearch = diseaseMatchesSearch(disease, filters?.search);

    return matchesCategory && matchesSearch;
  });

  return toResponse(diseases);
}

export async function fetchDiseaseInventoryStats(): Promise<
  ContentResponse<DiseaseInventoryStats>
> {
  const diseases = getContent().diseases;

  return toResponse({
    draftCount: diseases.filter((disease) => disease.reviewStatus === 'draft')
      .length,
    publishedCount: diseases.filter(isPublishedDisease).length,
    totalCatalogReferences: diseases.reduce(
      (total, disease) => total + (disease.catalogRefs?.length ?? 0),
      0,
    ),
    totalCount: diseases.length,
  });
}

export async function fetchDiseaseBySlug(
  slug: string,
): Promise<ContentResponse<Disease>> {
  const disease = await getWikiDiseaseContent(getLocale(), slug);

  if (!disease || !isPublishedDisease(disease)) {
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

export function isPublishedDisease(disease: Pick<Disease, 'reviewStatus'>) {
  return (
    disease.reviewStatus === 'patient-reviewed' ||
    disease.reviewStatus === 'medical-reviewed'
  );
}

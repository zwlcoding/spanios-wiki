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
import {
  diseaseMatchesSearch,
  findBestDiseaseSearchMatch,
  findBestMatch,
  type MatchCandidate,
  normalizeSearchText,
  type RankedSearchMatch,
} from '@/utils/searchableText';

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

export type RankedSearchResult<T> = {
  item: T;
  match: RankedSearchMatch['match'];
  score: number;
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
  diseases: RankedSearchResult<Disease>[];
  hospitals: RankedSearchResult<Hospital>[];
  charities: RankedSearchResult<CharityOrganization>[];
}> {
  const [diseasesRes, hospitalsRes, charitiesRes] = await Promise.all([
    fetchDiseases(),
    fetchHospitals(),
    fetchCharityOrganizations(),
  ]);

  return {
    charities: rankCharities(charitiesRes.data, query),
    diseases: rankDiseases(diseasesRes.data, query),
    hospitals: rankHospitals(hospitalsRes.data, query),
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

function rankDiseases(diseases: Disease[], query: string) {
  return diseases
    .map((disease) => {
      const rankedMatch = findBestDiseaseSearchMatch(disease, query);

      return rankedMatch
        ? {
            item: disease,
            match: rankedMatch.match,
            score: rankedMatch.score,
          }
        : undefined;
    })
    .filter(isDefined)
    .sort(bySearchRank);
}

function rankHospitals(hospitals: Hospital[], query: string) {
  return hospitals
    .map((hospital) =>
      toRankedSearchResult(
        hospital,
        query,
        [
          { field: 'name', kind: 'name', score: 92, value: hospital.name },
          {
            field: 'region',
            kind: 'category',
            score: 72,
            value: [hospital.province, hospital.city, hospital.address],
          },
          {
            field: 'department',
            kind: 'care',
            score: 68,
            value: [
              ...(hospital.departments?.map((department) => department.name) ??
                []),
              ...(hospital.services?.map((service) => service.departmentName) ??
                []),
              ...(hospital.services?.map((service) => service.serviceName) ??
                []),
            ],
          },
          {
            field: 'related_disease',
            kind: 'care',
            score: 64,
            value: hospital.diseases?.flatMap((disease) => [
              disease.name,
              disease.nameEn,
              disease.alias,
            ]),
          },
          {
            field: 'public_lead',
            kind: 'content',
            score: 48,
            value: [
              hospital.specialties,
              ...(hospital.services?.flatMap((service) => [
                service.notes,
                service.evidenceSummary,
              ]) ?? []),
            ],
          },
        ],
        hospital.name,
      ),
    )
    .filter(isDefined)
    .sort(bySearchRank);
}

function rankCharities(charities: CharityOrganization[], query: string) {
  return charities
    .map((charity) =>
      toRankedSearchResult(
        charity,
        query,
        [
          { field: 'name', kind: 'name', score: 92, value: charity.name },
          {
            field: 'organization_type',
            kind: 'category',
            score: 62,
            value: charity.type,
          },
          {
            field: 'related_disease',
            kind: 'care',
            score: 64,
            value: charity.diseases?.flatMap((disease) => [
              disease.name,
              disease.nameEn,
              disease.alias,
            ]),
          },
          {
            field: 'service',
            kind: 'content',
            score: 52,
            value: [
              charity.description,
              charity.services,
              charity.contactPerson,
              charity.email,
              charity.wechat,
            ],
          },
        ],
        charity.name,
      ),
    )
    .filter(isDefined)
    .sort(bySearchRank);
}

function toRankedSearchResult<T>(
  item: T,
  query: string,
  candidates: MatchCandidate[],
  fallbackSnippet: string,
): RankedSearchResult<T> | undefined {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return {
      item,
      match: { field: 'name', kind: 'name', snippet: fallbackSnippet },
      score: 0,
    };
  }

  const rankedMatch = findBestMatch(normalizedQuery, candidates);

  return rankedMatch
    ? { item, match: rankedMatch.match, score: rankedMatch.score }
    : undefined;
}

function bySearchRank<T>(
  first: RankedSearchResult<T>,
  second: RankedSearchResult<T>,
) {
  return second.score - first.score;
}

function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

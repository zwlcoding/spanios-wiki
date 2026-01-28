import { strapi } from '@strapi/client';
import type {
  SiteSettings,
  Disease,
  Hospital,
  CharityOrganization,
  DiseaseCategory,
  Tag,
  Department,
} from '@/types/strapi';

export const strapiClient = strapi({
  baseURL: import.meta.env.VITE_STRAPI_URL,
});

export const articles = strapiClient.collection('articles');

/**
 * Fetch site settings (maintenance mode, etc.)
 */
export async function fetchSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/site-setting`,
  );
  if (!response.ok) {
    // Return default settings if API fails
    return {
      maintenanceMode: false,
      siteName: 'Spanios.wiki',
    };
  }
  const data = await response.json();
  return data as SiteSettings;
}

/**
 * Fetch diseases with optional filters
 */
export async function fetchDiseases(filters?: {
  category?: string;
  search?: string;
}): Promise<{ data: Disease[]; meta?: any }> {
  const params = new URLSearchParams();

  if (filters?.category && filters.category !== 'all') {
    params.append('filters[category][slug][$eq]', filters.category);
  }

  if (filters?.search) {
    params.append('filters[$or][0][name][$containsi]', filters.search);
    params.append('filters[$or][1][nameEn][$containsi]', filters.search);
    params.append('filters[$or][2][alias][$containsi]', filters.search);
  }

  params.append('populate', '*');

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/diseases?${params}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch diseases');
  }
  return response.json();
}

/**
 * Fetch a single disease by slug
 */
export async function fetchDiseaseBySlug(
  slug: string,
): Promise<{ data: Disease }> {
  const params = new URLSearchParams();
  params.append('filters[slug][$eq]', slug);
  params.append('populate', '*');

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/diseases?${params}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch disease');
  }
  const data = await response.json();
  if (!data.data || data.data.length === 0) {
    throw new Error('Disease not found');
  }
  return { data: data.data[0] };
}

/**
 * Fetch hospitals with optional filters
 */
export async function fetchHospitals(filters?: {
  province?: string;
  search?: string;
}): Promise<{ data: Hospital[]; meta?: any }> {
  const params = new URLSearchParams();

  if (filters?.province && filters.province !== 'all') {
    params.append('filters[province][$eq]', filters.province);
  }

  if (filters?.search) {
    params.append('filters[name][$containsi]', filters.search);
  }

  params.append('populate', '*');

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/hospitals?${params}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch hospitals');
  }
  return response.json();
}

/**
 * Fetch a single hospital by id
 */
export async function fetchHospitalById(
  id: string,
): Promise<{ data: Hospital }> {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/hospitals/${id}?populate=*`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch hospital');
  }
  return response.json();
}

/**
 * Fetch charity organizations with optional filters
 */
export async function fetchCharityOrganizations(filters?: {
  type?: string;
  search?: string;
}): Promise<{ data: CharityOrganization[]; meta?: any }> {
  const params = new URLSearchParams();

  if (filters?.type && filters.type !== 'all') {
    params.append('filters[type][$eq]', filters.type);
  }

  if (filters?.search) {
    params.append('filters[name][$containsi]', filters.search);
  }

  params.append('populate', '*');

  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/charity-organizations?${params}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch charity organizations');
  }
  return response.json();
}

/**
 * Fetch a single charity organization by id
 */
export async function fetchCharityOrganizationById(
  id: string,
): Promise<{ data: CharityOrganization }> {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/charity-organizations/${id}?populate=*`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch charity organization');
  }
  return response.json();
}

/**
 * Fetch disease categories
 */
export async function fetchDiseaseCategories(): Promise<{
  data: DiseaseCategory[];
  meta?: any;
}> {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_URL}/disease-categories?populate=*`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch disease categories');
  }
  return response.json();
}

/**
 * Global search across multiple content types
 */
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
    diseases: diseasesRes.data,
    hospitals: hospitalsRes.data,
    charities: charitiesRes.data,
  };
}

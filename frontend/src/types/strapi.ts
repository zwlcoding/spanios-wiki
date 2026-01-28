/**
 * Strapi API response wrapper
 */
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Site Settings - Global site configuration
 */
export interface SiteSettings {
  id?: number;
  documentId?: string;
  maintenanceMode: boolean;
  maintenanceMessage?: string;
  siteName?: string;
  announcement?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/**
 * Disease Category
 */
export interface DiseaseCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  parentCategory?: DiseaseCategory;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Disease
 */
export interface Disease {
  id: number;
  documentId: string;
  name: string;
  nameEn?: string;
  alias?: string;
  icd10Code?: string;
  slug: string;
  prevalence?: string;
  symptoms?: string;
  diagnosis?: string;
  treatment?: string;
  prognosis?: string;
  category?: DiseaseCategory;
  featuredImage?: {
    id: number;
    name: string;
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Hospital
 */
export interface Hospital {
  id: number;
  documentId: string;
  name: string;
  level?: 'three_a' | 'three_b' | 'two_a' | 'two_b';
  province: string;
  city: string;
  address: string;
  phone?: string;
  website?: string;
  specialties?: string;
  location?: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Department
 */
export interface Department {
  id: number;
  documentId: string;
  name: string;
  description?: string;
  expertDoctors?: string;
  appointmentUrl?: string;
  hospital?: Hospital;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Charity Organization
 */
export interface CharityOrganization {
  id: number;
  documentId: string;
  name: string;
  type?: 'patient_org' | 'foundation' | 'volunteer';
  description?: string;
  services?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  website?: string;
  wechat?: string;
  logo?: {
    id: number;
    name: string;
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

/**
 * Tag
 */
export interface Tag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  type?: 'symptom' | 'treatment' | 'organ_system' | 'other';
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

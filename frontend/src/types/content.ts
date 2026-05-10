export const supportedLocales = ['zh', 'en', 'zh-Hant'] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale = 'zh' as const;

export const localeFallbacks: Partial<Record<Locale, Locale[]>> = {
  en: ['zh'],
  'zh-Hant': ['zh'],
};

export type LocalizedRecord<T> = Partial<Record<Locale, T>> &
  Record<typeof defaultLocale, T>;

export interface ContentResponse<T> {
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

export interface SiteSettings {
  maintenanceMode: boolean;
  maintenanceMessage?: string;
  siteName: string;
  announcement?: string;
}

export interface ContentSource {
  license?: string;
  name: string;
  type?:
    | 'clinical-guideline'
    | 'official'
    | 'patient-organization'
    | 'policy'
    | 'review'
    | 'wikipedia-entry'
    | 'wikipedia-template';
  url: string;
}

export interface DiseaseCatalogReference {
  catalogId: string;
  catalogName: string;
  itemNumber: number;
  sourceUrl: string;
}

export type ReviewStatus = 'draft' | 'medical-reviewed' | 'patient-reviewed';

export interface DiseaseQuickLook {
  commonDelayReason?: string;
  hasTreatment?: string;
  isGenetic?: string;
  whatItIs: string;
  whoToSeeFirst: string;
}

export interface DiseasePatientJourney {
  commonWrongTurns?: string[];
  diagnosisChecklist?: string[];
  firstDepartments?: string[];
  questionsForDoctor?: string[];
  testsToAskAbout?: string[];
  whenToSuspect?: string[];
}

export interface DiseaseMedicalSections {
  diagnosis?: string;
  emergencySigns?: string;
  fertilityOrFamily?: string;
  longTermCare?: string;
  symptoms?: string;
  treatment?: string;
}

export interface DiseaseNavigation {
  assistanceProgramIds?: string[];
  hospitalServiceIds?: string[];
  medicineIds?: string[];
}

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

export interface Tag {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  type?: 'organ_system' | 'other' | 'symptom' | 'treatment';
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Disease {
  catalogNumber?: number;
  catalogRefs?: DiseaseCatalogReference[];
  id: number;
  documentId: string;
  name: string;
  nameEn?: string;
  alias?: string;
  icd10Code?: string;
  slug: string;
  oneSentence?: string;
  prevalence?: string;
  plainName?: string;
  quickLook?: DiseaseQuickLook;
  patientJourney?: DiseasePatientJourney;
  medicalSections?: DiseaseMedicalSections;
  navigation?: DiseaseNavigation;
  reviewStatus?: ReviewStatus;
  symptoms?: string;
  diagnosis?: string;
  treatment?: string;
  prognosis?: string;
  sourceName?: string;
  sourceUrl?: string;
  sources?: ContentSource[];
  category?: DiseaseCategory;
  hospitalServices?: HospitalService[];
  hospitals?: Hospital[];
  charityOrgs?: CharityOrganization[];
  tags?: Tag[];
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

export interface HospitalServiceEvidence {
  accessedAt?: string;
  kind:
    | 'clinic-page'
    | 'department-page'
    | 'hospital-directory'
    | 'medical-team-page'
    | 'policy-or-network'
    | 'public-notice';
  publisher?: string;
  summary?: string;
  title: string;
  url: string;
}

export interface HospitalService {
  appointmentUrl?: string;
  confidence?: 'low' | 'medium' | 'high';
  departmentId?: number;
  departmentName: string;
  diseases?: Disease[];
  diseaseSlugs: string[];
  evidence?: HospitalServiceEvidence[];
  evidenceSummary?: string;
  evidenceUrl?: string;
  hospital?: Hospital;
  hospitalId: number;
  id: string;
  lastVerifiedAt?: string;
  notes?: string;
  patientPrep?: string[];
  relationKind?:
    | 'clinic-or-mdt'
    | 'department-service'
    | 'public-directory'
    | 'rare-disease-network';
  serviceKind?: 'department' | 'mdt' | 'public-directory' | 'specialty-clinic';
  serviceName?: string;
  sourceUrl?: string;
  stage?: 'diagnosis' | 'follow-up' | 'genetic-counseling' | 'treatment';
}

export type HospitalLevel =
  | 'secondary_a'
  | 'secondary_b'
  | 'tertiary_a'
  | 'tertiary_b';

export interface Hospital {
  id: number;
  documentId: string;
  name: string;
  level?: HospitalLevel;
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
  departments?: Department[];
  diseases?: Disease[];
  services?: HospitalService[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface MedicineAccess {
  approvedInChina?: boolean;
  assistanceProgramIds?: string[];
  brandNames?: string[];
  diseaseSlugs: string[];
  genericName: string;
  id: string;
  indicationSummary?: string;
  insuranceStatus?: string;
  sourceUrl?: string;
}

export interface AssistanceProgram {
  diseaseSlugs?: string[];
  id: string;
  name: string;
  organizer?: string;
  region?: string;
  summary: string;
  url?: string;
}

export type CharityOrganizationType =
  | 'foundation'
  | 'patient_org'
  | 'volunteer_team';

export interface CharityOrganization {
  id: number;
  documentId: string;
  name: string;
  type?: CharityOrganizationType;
  description?: string;
  services?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  website?: string;
  wechat?: string;
  diseases?: Disease[];
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

export interface WikiContent {
  assistancePrograms: AssistanceProgram[];
  categories: DiseaseCategory[];
  charities: CharityOrganization[];
  diseases: Disease[];
  hospitalServices: HospitalService[];
  hospitals: Hospital[];
  medicines: MedicineAccess[];
  siteSettings: SiteSettings;
  tags: Tag[];
}

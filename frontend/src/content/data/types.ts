import type {
  CharityOrganization,
  Department,
  Disease,
  Hospital,
  HospitalService,
} from '@/types/content';
import type { DiseaseCategorySlug } from './taxonomy';

export type DiseaseDraft = Omit<
  Disease,
  'category' | 'charityOrgs' | 'hospitalServices' | 'hospitals' | 'tags'
> & {
  categorySlug: DiseaseCategorySlug;
  charityIds: number[];
  hospitalIds: number[];
  tagSlugs: string[];
};

export type HospitalDraft = Omit<
  Hospital,
  'departments' | 'diseases' | 'services'
> & {
  departments?: Array<Omit<Department, 'hospital'>>;
};

export type HospitalServiceDraft = Omit<
  HospitalService,
  'diseases' | 'hospital'
>;

export type CharityDraft = Omit<CharityOrganization, 'diseases'> & {
  diseaseSlugs: string[];
};

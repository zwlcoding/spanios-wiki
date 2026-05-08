import type {
  CharityOrganization,
  Department,
  Disease,
  Hospital,
} from '@/types/content';
import type { DiseaseCategorySlug } from './taxonomy';

export type DiseaseDraft = Omit<
  Disease,
  'category' | 'charityOrgs' | 'hospitals' | 'tags'
> & {
  categorySlug: DiseaseCategorySlug;
  charityIds: number[];
  hospitalIds: number[];
  tagSlugs: string[];
};

export type HospitalDraft = Omit<Hospital, 'departments' | 'diseases'> & {
  departments?: Array<Omit<Department, 'hospital'>>;
  diseaseSlugs: string[];
};

export type CharityDraft = Omit<CharityOrganization, 'diseases'> & {
  diseaseSlugs: string[];
};

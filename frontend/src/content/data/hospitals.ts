import {
  enHospitalDrafts,
  enHospitalServiceDrafts,
} from '@/content/locales/en/hospitals';
import {
  zhHospitalDrafts,
  zhHospitalServiceDrafts,
} from '@/content/locales/zh/hospitals';
import type { LocalizedRecord } from '@/types/content';
import type { HospitalDraft, HospitalServiceDraft } from './types';

export const hospitalDraftsByLocale: LocalizedRecord<HospitalDraft[]> = {
  zh: zhHospitalDrafts,
  en: enHospitalDrafts,
};

export const hospitalServiceDraftsByLocale: LocalizedRecord<
  HospitalServiceDraft[]
> = {
  zh: zhHospitalServiceDrafts,
  en: enHospitalServiceDrafts,
};

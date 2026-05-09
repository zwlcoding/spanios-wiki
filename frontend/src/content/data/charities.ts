import { enCharityDrafts } from '@/content/locales/en/charities';
import { zhCharityDrafts } from '@/content/locales/zh/charities';
import type { LocalizedRecord } from '@/types/content';
import type { CharityDraft } from './types';

export const charityDraftsByLocale: LocalizedRecord<CharityDraft[]> = {
  zh: zhCharityDrafts,
  en: enCharityDrafts,
};

import { enDiseaseDrafts } from '@/content/locales/en/diseases';
import { zhDiseaseDrafts } from '@/content/locales/zh/diseases';
import type { LocalizedRecord } from '@/types/content';
import type { DiseaseDraft } from './types';

export const diseaseDraftsByLocale: LocalizedRecord<DiseaseDraft[]> = {
  zh: zhDiseaseDrafts,
  en: enDiseaseDrafts,
};

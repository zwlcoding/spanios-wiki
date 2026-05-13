import { loadEnDiseaseDraft } from '@/content/locales/en/disease-loaders';
import { enDiseaseSummaries } from '@/content/locales/en/disease-summaries';
import { loadZhDiseaseDraft } from '@/content/locales/zh/disease-loaders';
import { zhDiseaseSummaries } from '@/content/locales/zh/disease-summaries';
import type { Locale, LocalizedRecord } from '@/types/content';
import type { DiseaseDraft } from './types';

export const diseaseSummariesByLocale: LocalizedRecord<DiseaseDraft[]> = {
  zh: zhDiseaseSummaries,
  en: enDiseaseSummaries,
};

export function loadDiseaseDraft(locale: Locale, slug: string) {
  return locale === 'en' ? loadEnDiseaseDraft(slug) : loadZhDiseaseDraft(slug);
}

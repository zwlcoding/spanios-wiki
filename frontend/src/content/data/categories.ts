import type { DiseaseCategory, LocalizedRecord } from '@/types/content';
import { getDiseaseCategories } from './taxonomy';

export const categoriesByLocale: LocalizedRecord<DiseaseCategory[]> = {
  zh: getDiseaseCategories('zh'),
  en: getDiseaseCategories('en'),
};

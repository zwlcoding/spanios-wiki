import { getLocale } from '@/paraglide/runtime';

export function isEnglishLocale() {
  return getLocale() === 'en';
}

export function uiText(zh: string, en: string) {
  return isEnglishLocale() ? en : zh;
}

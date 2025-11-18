import { useEffect } from 'react';
import { create } from 'zustand';

import { getLocale, locales, setLocale } from '@/paraglide/runtime'

const getBrowserLang = () => {
 return navigator.language.split('-')[0];
}

const isSupportedLang = (storedLang: any) => {
  return locales.includes(storedLang)
}

type LangModeState = {
  lang: any;
  setLang: (lang: any) => void;
};

export const useLangModeStore = create<LangModeState>((set) => ({
  lang: getLocale(),
  setLang: (lang) => set({ lang }),
}));

export const useLangMode = () => {
  const { lang, setLang } = useLangModeStore();

  const changeLang = (newLang: any) => {
    if (newLang === lang) return; // 避免不必要的更新
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    setLocale(newLang)
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');

    if (storedLang && isSupportedLang(storedLang)) {
      changeLang(storedLang);
    } else {
      const browserLang = getBrowserLang();
      changeLang(browserLang);
    }
  }, []);

  return { lang, toggleLang: changeLang };
};

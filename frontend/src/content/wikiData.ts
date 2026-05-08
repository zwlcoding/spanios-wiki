import { categoriesByLocale } from '@/content/data/categories';
import {
  createCatalogDiseaseDrafts,
  getCatalogDiseaseMetadata,
} from '@/content/data/catalogs';
import { charityDraftsByLocale } from '@/content/data/charities';
import { diseaseDraftsByLocale } from '@/content/data/diseases';
import { hospitalDraftsByLocale } from '@/content/data/hospitals';
import { siteSettingsByLocale } from '@/content/data/settings';
import { tagsByLocale } from '@/content/data/tags';
import type {
  CharityOrganization,
  ContentResponse,
  Disease,
  Hospital,
  LocalizedRecord,
  Locale,
  WikiContent,
} from '@/types/content';
import {
  defaultLocale,
  localeFallbacks,
  supportedLocales,
} from '@/types/content';

const contentCache = new Map<Locale, WikiContent>();

export function getWikiContent(locale: string): WikiContent {
  const normalizedLocale = normalizeLocale(locale);
  const cached = contentCache.get(normalizedLocale);

  if (cached) {
    return cached;
  }

  const categories = resolveLocalized(categoriesByLocale, normalizedLocale);
  const tags = resolveLocalized(tagsByLocale, normalizedLocale);
  const detailedDiseaseDrafts = resolveLocalized(
    diseaseDraftsByLocale,
    normalizedLocale,
  );
  const catalogDiseaseDrafts = createCatalogDiseaseDrafts(
    normalizedLocale,
    new Set(detailedDiseaseDrafts.map((draft) => draft.slug)),
  );
  const diseaseDrafts = [...detailedDiseaseDrafts, ...catalogDiseaseDrafts];

  const diseases = diseaseDrafts.map((draft) => {
    const { categorySlug, charityIds, hospitalIds, tagSlugs, ...disease } =
      draft;
    const catalogMetadata = getCatalogDiseaseMetadata(
      normalizedLocale,
      disease.slug,
    );
    const catalogTagSlugs =
      catalogMetadata?.catalogRefs.map((ref) =>
        ref.catalogId === 'china-first-rare-disease-catalog'
          ? 'first-rare-disease-catalog'
          : 'second-rare-disease-catalog',
      ) ?? [];
    const mergedTagSlugs = catalogMetadata
      ? Array.from(new Set([...tagSlugs, ...catalogTagSlugs]))
      : tagSlugs;

    return {
      ...disease,
      ...catalogMetadata,
      category: categories.find(
        (categoryItem) => categoryItem.slug === categorySlug,
      ),
      charityOrgs: [],
      hospitals: [],
      tags: mergedTagSlugs
        .map((tagSlug) => tags.find((tagItem) => tagItem.slug === tagSlug))
        .filter(Boolean),
      _charityIds: charityIds,
      _hospitalIds: hospitalIds,
    };
  });

  const hospitalDrafts = resolveLocalized(
    hospitalDraftsByLocale,
    normalizedLocale,
  );
  const hospitals = hospitalDrafts.map((draft) => {
    const { departments, diseaseSlugs, ...hospital } = draft;

    return {
      ...hospital,
      departments,
      diseases: diseaseSlugs
        .map((slug) => diseases.find((disease) => disease.slug === slug))
        .filter(Boolean),
      _diseaseSlugs: diseaseSlugs,
    };
  });

  const charityDrafts = resolveLocalized(
    charityDraftsByLocale,
    normalizedLocale,
  );
  const charities = charityDrafts.map((draft) => {
    const { diseaseSlugs, ...charity } = draft;

    return {
      ...charity,
      diseases: diseaseSlugs
        .map((slug) => diseases.find((disease) => disease.slug === slug))
        .filter(Boolean),
    };
  });

  const enrichedDiseases = diseases.map((disease) => {
    const { _charityIds, _hospitalIds, ...publicDisease } = disease;

    return {
      ...publicDisease,
      charityOrgs: _charityIds
        .map((id) => charities.find((charity) => charity.id === id))
        .filter(Boolean),
      hospitals: _hospitalIds
        .map((id) => hospitals.find((hospital) => hospital.id === id))
        .filter(Boolean),
    };
  });

  const publicHospitals = hospitals.map((hospital) => {
    const { _diseaseSlugs, ...publicHospital } = hospital;

    return publicHospital;
  });

  const content: WikiContent = {
    assistancePrograms: [],
    categories,
    charities: charities as CharityOrganization[],
    diseases: enrichedDiseases as Disease[],
    hospitalServices: [],
    hospitals: publicHospitals as Hospital[],
    medicines: [],
    siteSettings: resolveLocalized(siteSettingsByLocale, normalizedLocale),
    tags,
  };

  contentCache.set(normalizedLocale, content);
  return content;
}

export function toResponse<T>(data: T): ContentResponse<T> {
  return { data };
}

function normalizeLocale(locale: string): Locale {
  return supportedLocales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
}

function resolveLocalized<T>(record: LocalizedRecord<T>, locale: Locale): T {
  const fallbackLocales = [
    locale,
    ...(localeFallbacks[locale] ?? []),
    defaultLocale,
  ];

  for (const fallbackLocale of fallbackLocales) {
    const value = record[fallbackLocale];

    if (value !== undefined) {
      return value;
    }
  }

  return record[defaultLocale];
}

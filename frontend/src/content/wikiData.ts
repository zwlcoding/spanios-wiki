import {
  createCatalogDiseaseDrafts,
  getCatalogDiseaseMetadata,
} from '@/content/data/catalogs';
import { categoriesByLocale } from '@/content/data/categories';
import { charityDraftsByLocale } from '@/content/data/charities';
import { diseaseDraftsByLocale } from '@/content/data/diseases';
import {
  hospitalDraftsByLocale,
  hospitalServiceDraftsByLocale,
} from '@/content/data/hospitals';
import { siteSettingsByLocale } from '@/content/data/settings';
import { tagsByLocale } from '@/content/data/tags';
import type {
  CharityOrganization,
  ContentResponse,
  ContentSource,
  Disease,
  Hospital,
  HospitalService,
  Locale,
  LocalizedRecord,
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
    const sources = mergeSources([
      ...(disease.sources ?? []),
      ...(catalogMetadata?.sources ?? []),
    ]);
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
      sourceName: disease.sourceName ?? catalogMetadata?.sourceName,
      sourceUrl: disease.sourceUrl ?? catalogMetadata?.sourceUrl,
      sources,
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
    const { departments, ...hospital } = draft;

    return {
      ...hospital,
      departments,
      diseases: [],
      services: [],
    };
  });

  const hospitalServiceDrafts = resolveLocalized(
    hospitalServiceDraftsByLocale,
    normalizedLocale,
  );
  const hospitalServices = hospitalServiceDrafts.map((service) => ({
    ...service,
    diseases: service.diseaseSlugs
      .map((slug) => diseases.find((disease) => disease.slug === slug))
      .filter((disease) => disease && isPublishedDisease(disease))
      .filter(Boolean),
    hospital: compactHospital(
      hospitals.find((hospital) => hospital.id === service.hospitalId),
    ),
  }));

  for (const hospital of hospitals) {
    const services = hospitalServices.filter(
      (service) => service.hospitalId === hospital.id,
    );
    hospital.services = services;
    hospital.diseases = uniqueById(
      services.flatMap((service) => service.diseases ?? []),
    );
  }

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
        .filter((disease) => disease && isPublishedDisease(disease))
        .filter(Boolean),
    };
  });

  const enrichedDiseases = diseases.map((disease) => {
    const { _charityIds, _hospitalIds, ...publicDisease } = disease;
    const diseaseHospitalServices = hospitalServices.filter(
      (service) =>
        service.diseaseSlugs.includes(disease.slug) &&
        isPublishedDisease(disease),
    );
    const serviceHospitals = diseaseHospitalServices
      .map((service) => service.hospital)
      .filter(Boolean);
    const directHospitals = _hospitalIds
      .map((id) => hospitals.find((hospital) => hospital.id === id))
      .filter(Boolean);

    return {
      ...publicDisease,
      charityOrgs: _charityIds
        .map((id) => charities.find((charity) => charity.id === id))
        .filter(Boolean),
      hospitalServices: diseaseHospitalServices,
      hospitals: uniqueById([...serviceHospitals, ...directHospitals]),
    };
  });

  const content: WikiContent = {
    assistancePrograms: [],
    categories,
    charities: charities as CharityOrganization[],
    diseases: enrichedDiseases as Disease[],
    hospitalServices: hospitalServices as HospitalService[],
    hospitals: hospitals as Hospital[],
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

function mergeSources(sources: ContentSource[]) {
  const seenUrls = new Set<string>();

  return sources.filter((source) => {
    if (seenUrls.has(source.url)) {
      return false;
    }

    seenUrls.add(source.url);
    return true;
  });
}

function uniqueById<T extends { id: number }>(items: T[]) {
  const seen = new Set<number>();
  const uniqueItems: T[] = [];

  for (const item of items) {
    if (seen.has(item.id)) {
      continue;
    }

    seen.add(item.id);
    uniqueItems.push(item);
  }

  return uniqueItems;
}

function compactHospital(hospital: Hospital | undefined) {
  if (!hospital) {
    return undefined;
  }

  const { diseases: _diseases, services: _services, ...compact } = hospital;
  return compact;
}

function isPublishedDisease(disease: Pick<Disease, 'reviewStatus'>) {
  return (
    disease.reviewStatus === 'patient-reviewed' ||
    disease.reviewStatus === 'medical-reviewed'
  );
}

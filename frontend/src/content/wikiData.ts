import {
  createCatalogDiseaseDrafts,
  getCatalogDiseaseMetadata,
} from '@/content/data/catalogs';
import { categoriesByLocale } from '@/content/data/categories';
import { charityDraftsByLocale } from '@/content/data/charities';
import {
  diseaseSummariesByLocale,
  loadDiseaseDraft,
} from '@/content/data/diseases';
import {
  hospitalDraftsByLocale,
  hospitalServiceDraftsByLocale,
} from '@/content/data/hospitals';
import { siteSettingsByLocale } from '@/content/data/settings';
import { tagsByLocale } from '@/content/data/tags';
import type { DiseaseDraft } from '@/content/data/types';
import type {
  CharityOrganization,
  DiseaseCategory,
  ContentResponse,
  ContentSource,
  Disease,
  Hospital,
  HospitalService,
  Locale,
  LocalizedRecord,
  Tag,
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

  const content = buildWikiContent(
    normalizedLocale,
    resolveLocalized(diseaseSummariesByLocale, normalizedLocale),
  );

  contentCache.set(normalizedLocale, content);
  return content;
}

export async function getWikiDiseaseContent(
  locale: string,
  slug: string,
): Promise<Disease | undefined> {
  const normalizedLocale = normalizeLocale(locale);
  const summaryDrafts = resolveLocalized(
    diseaseSummariesByLocale,
    normalizedLocale,
  );
  const detailedDiseaseDraft = await loadDiseaseDraft(normalizedLocale, slug);

  if (!detailedDiseaseDraft) {
    return getWikiContent(normalizedLocale).diseases.find(
      (disease) => disease.slug === slug,
    );
  }

  const diseaseDrafts = summaryDrafts.some((draft) => draft.slug === slug)
    ? summaryDrafts.map((draft) =>
        draft.slug === slug
          ? mergeDiseaseDraft(draft, detailedDiseaseDraft)
          : draft,
      )
    : [...summaryDrafts, detailedDiseaseDraft];

  return buildWikiContent(normalizedLocale, diseaseDrafts).diseases.find(
    (disease) => disease.slug === slug,
  );
}

/* ------------------------------------------------------------------ */
/*  Build pipeline                                                     */
/* ------------------------------------------------------------------ */

function buildWikiContent(
  normalizedLocale: Locale,
  detailedDiseaseDrafts: DiseaseDraft[],
): WikiContent {
  const categories = resolveLocalized(categoriesByLocale, normalizedLocale);
  const tags = resolveLocalized(tagsByLocale, normalizedLocale);

  const diseases = buildDiseaseGraph(
    normalizedLocale,
    detailedDiseaseDrafts,
    categories,
    tags,
  );

  const { hospitals, hospitalServices } = buildHospitalGraph(
    normalizedLocale,
    diseases,
  );

  const charities = buildCharityGraph(normalizedLocale, diseases);

  const enrichedDiseases = enrichDiseaseGraph(
    diseases,
    hospitalServices,
    charities,
    hospitals,
  );

  return assembleWikiContent({
    categories,
    charities,
    diseases: enrichedDiseases,
    hospitalServices,
    hospitals,
    normalizedLocale,
    tags,
  });
}

/* Stage 1 — diseases */
function buildDiseaseGraph(
  locale: Locale,
  detailedDiseaseDrafts: DiseaseDraft[],
  categories: DiseaseCategory[],
  tags: Tag[],
): InternalDisease[] {
  const catalogDiseaseDrafts = createCatalogDiseaseDrafts(
    locale,
    new Set(detailedDiseaseDrafts.map((draft) => draft.slug)),
  );
  const diseaseDrafts = [...detailedDiseaseDrafts, ...catalogDiseaseDrafts];

  return diseaseDrafts.map((draft) => {
    const { categorySlug, charityIds, hospitalIds, tagSlugs, ...disease } =
      draft;
    const catalogMetadata = getCatalogDiseaseMetadata(locale, disease.slug);
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
        .filter(isDefined),
      _charityIds: charityIds,
      _hospitalIds: hospitalIds,
    };
  });
}

/* Stage 2 — hospitals + services */
function buildHospitalGraph(
  locale: Locale,
  diseases: InternalDisease[],
): { hospitals: Hospital[]; hospitalServices: HospitalService[] } {
  const hospitalDrafts = resolveLocalized(hospitalDraftsByLocale, locale);
  const hospitals: Hospital[] = hospitalDrafts.map((draft) => {
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
    locale,
  );
  const hospitalServices: HospitalService[] = hospitalServiceDrafts.map(
    (service) => ({
      ...service,
      diseases: service.diseaseSlugs
        .map((slug) => diseases.find((disease) => disease.slug === slug))
        .filter(isDefined)
        .filter(isPublishedDisease),
      hospital: compactHospital(
        hospitals.find((hospital) => hospital.id === service.hospitalId),
      ),
    }),
  );

  for (const hospital of hospitals) {
    const services = hospitalServices.filter(
      (service) => service.hospitalId === hospital.id,
    );
    hospital.services = services;
    hospital.diseases = uniqueById(
      services.flatMap((service) => service.diseases ?? []),
    );
  }

  return { hospitals, hospitalServices };
}

/* Stage 3 — charities */
function buildCharityGraph(
  locale: Locale,
  diseases: InternalDisease[],
): CharityOrganization[] {
  const charityDrafts = resolveLocalized(charityDraftsByLocale, locale);

  return charityDrafts.map((draft) => {
    const { diseaseSlugs, ...charity } = draft;

    return {
      ...charity,
      diseases: diseaseSlugs
        .map((slug) => diseases.find((disease) => disease.slug === slug))
        .filter(isDefined)
        .filter(isPublishedDisease),
    };
  });
}

/* Stage 4 — enrich diseases with relations */
function enrichDiseaseGraph(
  diseases: InternalDisease[],
  hospitalServices: HospitalService[],
  charities: CharityOrganization[],
  hospitals: Hospital[],
): Disease[] {
  return diseases.map((disease) => {
    const { _charityIds, _hospitalIds, ...publicDisease } = disease;
    const diseaseHospitalServices = hospitalServices.filter(
      (service) =>
        service.diseaseSlugs.includes(disease.slug) &&
        isPublishedDisease(disease),
    );
    const serviceHospitals = diseaseHospitalServices
      .map((service) => service.hospital)
      .filter(isDefined);
    const directHospitals = _hospitalIds
      .map((id) => hospitals.find((hospital) => hospital.id === id))
      .filter(isDefined);

    return {
      ...publicDisease,
      charityOrgs: _charityIds
        .map((id) => charities.find((charity) => charity.id === id))
        .filter(isDefined),
      hospitalServices: diseaseHospitalServices,
      hospitals: uniqueById([...serviceHospitals, ...directHospitals]),
    };
  });
}

/* Stage 5 — assemble */
function assembleWikiContent({
  categories,
  charities,
  diseases,
  hospitalServices,
  hospitals,
  normalizedLocale,
  tags,
}: {
  categories: DiseaseCategory[];
  charities: CharityOrganization[];
  diseases: Disease[];
  hospitalServices: HospitalService[];
  hospitals: Hospital[];
  normalizedLocale: Locale;
  tags: Tag[];
}): WikiContent {
  return {
    assistancePrograms: [],
    categories,
    charities,
    diseases,
    hospitalServices,
    hospitals,
    medicines: [],
    siteSettings: resolveLocalized(siteSettingsByLocale, normalizedLocale),
    tags,
  };
}

/* ------------------------------------------------------------------ */
/*  Public helpers                                                     */
/* ------------------------------------------------------------------ */

export function toResponse<T>(data: T): ContentResponse<T> {
  return { data };
}

/**
 * Merge a summary draft with its detailed (lazy-loaded) draft.
 *
 * The detailed draft is the source of truth for any field it provides;
 * the summary supplies fallback values for fields not present in the
 * detailed draft (e.g. id, slug, categorySlug, charityIds, hospitalIds).
 *
 * This keeps the eager summary file small while allowing the lazy draft
 * to override or extend any shared field.
 */
function mergeDiseaseDraft(
  summary: DiseaseDraft,
  detailed: DiseaseDraft,
): DiseaseDraft {
  return { ...summary, ...detailed };
}

/* ------------------------------------------------------------------ */
/*  Internal types & utilities                                         */
/* ------------------------------------------------------------------ */

type InternalDisease = Disease & {
  _charityIds: number[];
  _hospitalIds: number[];
};

function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
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

function compactHospital(hospital: Hospital | undefined): Hospital | undefined {
  if (!hospital) {
    return undefined;
  }

  const { diseases: _diseases, services: _services, ...compact } = hospital;
  return compact;
}

function isPublishedDisease<T extends Pick<Disease, 'reviewStatus'>>(
  disease: T,
): disease is T {
  return (
    disease.reviewStatus === 'patient-reviewed' ||
    disease.reviewStatus === 'medical-reviewed'
  );
}

import type {
  ContentSource,
  DiseaseCatalogReference,
  Locale,
} from '@/types/content';
import { entity } from '../helpers';
import type { DiseaseDraft } from '../types';
import { inferCatalogCategorySlug } from './catalogClassification';
import { firstCatalogEntries } from './first';
import { secondCatalogEntries } from './second';
import type {
  RareDiseaseCatalogEntry,
  RareDiseaseCatalogId,
  RareDiseaseCatalogSource,
} from './types';

export const rareDiseaseCatalogSources: Record<
  RareDiseaseCatalogId,
  RareDiseaseCatalogSource
> = {
  'china-first-rare-disease-catalog': {
    id: 'china-first-rare-disease-catalog',
    labelEn: 'China First Rare Disease Catalog',
    labelZh: '第一批罕见病目录',
    officialNameEn: 'National Health Commission First Rare Disease Catalog',
    officialNameZh: '国家卫生健康委员会《第一批罕见病目录》',
    officialUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    tagSlug: 'first-rare-disease-catalog',
    wikipediaTemplateUrl:
      'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
  },
  'china-second-rare-disease-catalog': {
    id: 'china-second-rare-disease-catalog',
    labelEn: 'China Second Rare Disease Catalog',
    labelZh: '第二批罕见病目录',
    officialNameEn: 'National Health Commission Second Rare Disease Catalog',
    officialNameZh: '国家卫生健康委员会《第二批罕见病目录》',
    officialUrl:
      'https://www.nhc.gov.cn/wjw/c100375/202309/8d3e73289a6b4882996dbd1ed66780aa.shtml',
    tagSlug: 'second-rare-disease-catalog',
    wikipediaTemplateUrl:
      'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%BA%8C%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
  },
};

export const rareDiseaseCatalogEntries: RareDiseaseCatalogEntry[] = [
  ...firstCatalogEntries.map((entry) => ({
    ...entry,
    catalogId: 'china-first-rare-disease-catalog' as const,
  })),
  ...secondCatalogEntries.map((entry) => ({
    ...entry,
    catalogId: 'china-second-rare-disease-catalog' as const,
  })),
];

export function createCatalogDiseaseDrafts(
  locale: Locale,
  existingSlugs: Set<string>,
): DiseaseDraft[] {
  const seenSlugs = new Set(existingSlugs);
  const drafts: DiseaseDraft[] = [];

  for (const entry of rareDiseaseCatalogEntries) {
    if (seenSlugs.has(entry.slug)) {
      continue;
    }

    const source = rareDiseaseCatalogSources[entry.catalogId];
    const metadata = getCatalogDiseaseMetadata(locale, entry.slug);

    seenSlugs.add(entry.slug);
    drafts.push({
      ...entity(
        getCatalogEntityId(entry),
        `catalog-${entry.catalogId}-${entry.no}`,
      ),
      alias:
        locale === 'zh'
          ? `${source.labelZh}第 ${entry.no} 项；${entry.nameEn}`
          : `${entry.nameZh}; ${source.labelEn} item ${entry.no}`,
      catalogNumber: metadata?.catalogNumber,
      catalogRefs: metadata?.catalogRefs,
      categorySlug: inferCatalogCategorySlug(entry),
      charityIds: [],
      hospitalIds: [],
      name: locale === 'zh' ? entry.nameZh : entry.nameEn,
      nameEn: entry.nameEn,
      slug: entry.slug,
      sourceName: metadata?.sourceName,
      sourceUrl: metadata?.sourceUrl,
      sources: metadata?.sources,
      tagSlugs: [source.tagSlug],
    });
  }

  return drafts;
}

export function getCatalogDiseaseMetadata(locale: Locale, slug: string) {
  const entries = rareDiseaseCatalogEntries.filter(
    (entry) => entry.slug === slug,
  );

  if (entries.length === 0) {
    return undefined;
  }

  const catalogRefs = entries.map((entry): DiseaseCatalogReference => {
    const source = rareDiseaseCatalogSources[entry.catalogId];

    return {
      catalogId: entry.catalogId,
      catalogName: locale === 'zh' ? source.labelZh : source.labelEn,
      itemNumber: entry.no,
      sourceUrl: source.officialUrl,
    };
  });
  const sources = uniqueSources(
    entries.flatMap((entry) => createEntrySources(entry, locale)),
  );
  const primarySource = sources[0];

  return {
    catalogNumber: catalogRefs[0]?.itemNumber,
    catalogRefs,
    sourceName: primarySource?.name,
    sourceUrl: primarySource?.url,
    sources,
  };
}

function createEntrySources(
  entry: RareDiseaseCatalogEntry,
  locale: Locale,
): ContentSource[] {
  const catalogSource = rareDiseaseCatalogSources[entry.catalogId];
  const sources: ContentSource[] = [
    {
      name:
        locale === 'zh'
          ? catalogSource.officialNameZh
          : catalogSource.officialNameEn,
      type: 'official',
      url: catalogSource.officialUrl,
    },
    {
      license: 'CC BY-SA 4.0',
      name:
        locale === 'zh'
          ? `${catalogSource.labelZh}维基百科模板`
          : `${catalogSource.labelEn} Wikipedia template`,
      type: 'wikipedia-template',
      url: catalogSource.wikipediaTemplateUrl,
    },
  ];

  if (entry.wikipediaZhUrl) {
    sources.push({
      license: 'CC BY-SA 4.0',
      name: locale === 'zh' ? '维基百科中文条目' : 'Chinese Wikipedia article',
      type: 'wikipedia-entry',
      url: entry.wikipediaZhUrl,
    });
  }

  if (entry.wikipediaEnUrl) {
    sources.push({
      license: 'CC BY-SA 4.0',
      name: locale === 'zh' ? '英文维基百科条目' : 'English Wikipedia article',
      type: 'wikipedia-entry',
      url: entry.wikipediaEnUrl,
    });
  }

  return sources;
}

function getCatalogEntityId(entry: RareDiseaseCatalogEntry) {
  return entry.catalogId === 'china-first-rare-disease-catalog'
    ? 1000 + entry.no
    : 2000 + entry.no;
}

function uniqueSources(sources: ContentSource[]) {
  const seenUrls = new Set<string>();

  return sources.filter((source) => {
    if (seenUrls.has(source.url)) {
      return false;
    }

    seenUrls.add(source.url);
    return true;
  });
}

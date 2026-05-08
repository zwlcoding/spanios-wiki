export type RareDiseaseCatalogId =
  | 'china-first-rare-disease-catalog'
  | 'china-second-rare-disease-catalog';

export interface RareDiseaseCatalogSource {
  id: RareDiseaseCatalogId;
  labelEn: string;
  labelZh: string;
  officialNameEn: string;
  officialNameZh: string;
  officialUrl: string;
  tagSlug: string;
  wikipediaTemplateUrl: string;
}

export interface RareDiseaseCatalogEntryBase {
  nameEn: string;
  nameZh: string;
  no: number;
  slug: string;
  wikipediaEnUrl?: string;
  wikipediaZhUrl?: string;
}

export interface RareDiseaseCatalogEntry extends RareDiseaseCatalogEntryBase {
  catalogId: RareDiseaseCatalogId;
}

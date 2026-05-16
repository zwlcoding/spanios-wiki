import type { DiseaseCatalogReference } from '@/types/content';
import { uiText } from '@/utils/localeText';

interface DiseaseHeaderProps {
  name: string;
  nameEn?: string;
  category?: { name: string };
  alias?: string;
  oneSentence?: string;
  icd10Code?: string;
  catalogRefs?: DiseaseCatalogReference[];
  catalogNumber?: number;
  featuredImage?: { url: string };
}

export function DiseaseHeader({
  name,
  nameEn,
  category,
  alias,
  oneSentence,
  icd10Code,
  catalogRefs,
  catalogNumber,
  featuredImage,
}: DiseaseHeaderProps) {
  return (
    <div className="surface-card mb-8 p-6 sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          {category && <span className="badge-warm mb-4">{category.name}</span>}
          <h1 className="section-title text-3xl sm:text-4xl">{name}</h1>
          {nameEn && (
            <p className="mt-2 text-lg text-stone-600 dark:text-stone-400">
              {nameEn}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2 self-start">
          {icd10Code && <div className="badge-muted">ICD-10: {icd10Code}</div>}
          {catalogRefs?.map((ref) => (
            <div
              key={`${ref.catalogId}-${ref.itemNumber}`}
              className="badge-muted"
            >
              {uiText(
                `${ref.catalogName}第 ${ref.itemNumber} 项`,
                `${ref.catalogName} item ${ref.itemNumber}`,
              )}
            </div>
          ))}
          {!catalogRefs?.length && catalogNumber && (
            <div className="badge-muted">
              {uiText(
                `目录第 ${catalogNumber} 项`,
                `Catalog item ${catalogNumber}`,
              )}
            </div>
          )}
        </div>
      </div>

      {alias && (
        <p className="mt-5 text-sm text-stone-600 dark:text-stone-400">
          <span className="font-semibold text-stone-900 dark:text-stone-100">
            {uiText('别名：', 'Also known as:')}
          </span>
          {alias}
        </p>
      )}

      {oneSentence && (
        <p className="mt-5 max-w-3xl text-base leading-7 text-stone-700 dark:text-stone-300">
          {oneSentence}
        </p>
      )}

      {featuredImage?.url && (
        <div className="mt-6 overflow-hidden rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
          <img
            src={featuredImage.url}
            alt={uiText(
              `${name}就医导航插图`,
              `${name} care navigation illustration`,
            )}
            className="h-52 w-full object-cover sm:h-64"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

import { BookOpenCheck, Calendar, Tag, Users } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

interface BasicInfoSectionProps {
  diseaseSlug: string;
  prevalence?: string;
  category?: { name: string };
  updatedAt?: string;
  sourceName?: string;
  sourceUrl?: string;
}

export function BasicInfoSection({
  diseaseSlug,
  prevalence,
  category,
  updatedAt,
  sourceName,
  sourceUrl,
}: BasicInfoSectionProps) {
  return (
    <div className="content-card mb-5 p-5">
      <h2 className="mb-4 font-semibold text-stone-900 dark:text-stone-100">
        {uiText('基本信息', 'Basic Information')}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {prevalence && (
          <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
            <Users className="mt-0.5 h-5 w-5 text-amber-700" />
            <div>
              <div className="text-sm font-semibold">
                {uiText('患病率', 'Prevalence')}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {prevalence}
              </div>
            </div>
          </div>
        )}
        {category && (
          <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
            <Tag className="mt-0.5 h-5 w-5 text-amber-700" />
            <div>
              <div className="text-sm font-semibold">
                {uiText('分类', 'Category')}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {category.name}
              </div>
            </div>
          </div>
        )}
        {updatedAt && (
          <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
            <Calendar className="mt-0.5 h-5 w-5 text-amber-700" />
            <div>
              <div className="text-sm font-semibold">
                {uiText('更新时间', 'Updated')}
              </div>
              <div className="text-sm text-stone-600 dark:text-stone-400">
                {new Date(updatedAt).toLocaleDateString('zh-CN')}
              </div>
            </div>
          </div>
        )}
        {sourceName && (
          <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
            <BookOpenCheck className="mt-0.5 h-5 w-5 text-amber-700" />
            <div>
              <div className="text-sm font-semibold">
                {uiText('资料来源', 'Source')}
              </div>
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-600"
                  onClick={() =>
                    trackEvent('disease_source_click', {
                      disease_slug: diseaseSlug,
                      source_kind: 'primary',
                    })
                  }
                >
                  {sourceName}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <div className="text-sm text-stone-600 dark:text-stone-400">
                  {sourceName}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

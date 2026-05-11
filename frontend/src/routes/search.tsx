import { createFileRoute, Link, useSearch } from '@tanstack/react-router';
import {
  ArrowRight,
  Building2,
  FileText,
  Search as SearchIcon,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';
import { getSearchMeta, trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

export const Route = createFileRoute('/search')({
  component: SearchPage,
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || '',
  }),
});

function SearchPage() {
  const { q: initialQuery = '' } = useSearch({ from: '/search' });
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const lastTrackedResults = useRef('');

  const { data: searchResults, isLoading } = useGlobalSearch(debouncedQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();

    trackEvent('search_submit', {
      source: 'search_page',
      ...getSearchMeta(query),
    });

    setDebouncedQuery(query);
  };

  const results = searchResults || {
    charities: [],
    diseases: [],
    hospitals: [],
  };

  const totalResults =
    results.diseases.length +
    results.hospitals.length +
    results.charities.length;

  useEffect(() => {
    if (!debouncedQuery || isLoading) {
      return;
    }

    const eventKey = [
      debouncedQuery,
      results.diseases.length,
      results.hospitals.length,
      results.charities.length,
    ].join(':');

    if (lastTrackedResults.current === eventKey) {
      return;
    }

    lastTrackedResults.current = eventKey;

    trackEvent('search_results_view', {
      source: 'search_page',
      ...getSearchMeta(debouncedQuery),
      charity_count: results.charities.length,
      disease_count: results.diseases.length,
      hospital_count: results.hospitals.length,
      result_total: totalResults,
      zero_result: totalResults === 0,
    });
  }, [debouncedQuery, isLoading, results, totalResults]);

  return (
    <div className="page-container">
      <div className="mb-6">
        <nav className="muted-text mb-3 flex items-center gap-2 text-sm">
          <Link to="/" className="hover:text-amber-700">
            {uiText('首页', 'Home')}
          </Link>
          <span>/</span>
          <span className="strong-text">{uiText('搜索', 'Search')}</span>
        </nav>
        <h1 className="section-title text-3xl">
          {uiText('全站搜索', 'Site Search')}
        </h1>
        <p className="section-copy mt-2">
          {uiText(
            '同时查找疾病资料、就医资源和公益组织。',
            'Search disease guides, care resources, and support organizations together.',
          )}
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="surface-card mb-8 flex flex-col gap-3 p-3 sm:flex-row"
      >
        <label className="relative flex-1">
          <span className="sr-only">
            {uiText('搜索关键词', 'Search keywords')}
          </span>
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder={uiText(
              '输入疾病、症状、医院或组织名称',
              'Disease, symptom, hospital, or group',
            )}
            className="input-app pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <button type="submit" className="btn-primary-app w-full sm:w-24">
          {uiText('搜索', 'Search')}
        </button>
      </form>

      {debouncedQuery ? (
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="muted-text text-sm">
              “
              <span className="strong-text font-semibold">
                {debouncedQuery}
              </span>
              ” {uiText('的结果：', 'results: ')}
              {isLoading
                ? uiText('加载中...', 'Loading...')
                : uiText(`${totalResults} 条`, `${totalResults} results`)}
            </p>
          </div>

          {isLoading ? (
            <div className="grid gap-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="surface-card p-5">
                  <div className="h-5 w-48 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
                  <div className="mt-3 h-4 w-full animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
                </div>
              ))}
            </div>
          ) : totalResults === 0 ? (
            <EmptySearch
              title={uiText('未找到相关结果', 'No matching results')}
              description={uiText(
                '试试疾病名称、英文名、症状或医院名称。',
                'Try a disease name, English name, symptom, or hospital name.',
              )}
            />
          ) : (
            <div className="space-y-8">
              {results.diseases.length > 0 && (
                <ResultSection
                  title={uiText('疾病', 'Diseases')}
                  count={results.diseases.length}
                  icon={FileText}
                >
                  {results.diseases.map((disease, index) => (
                    <Link
                      key={disease.id}
                      to="/diseases/$slug"
                      params={{ slug: disease.slug }}
                      className="card-warm block p-5"
                      onClick={() =>
                        trackEvent('search_result_click', {
                          position: index + 1,
                          query_length: debouncedQuery.trim().length,
                          result_id: disease.slug,
                          result_type: 'disease',
                        })
                      }
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{disease.name}</h3>
                          {disease.nameEn && (
                            <p className="mt-1 text-sm">{disease.nameEn}</p>
                          )}
                          {(disease.oneSentence || disease.symptoms) && (
                            <p className="mt-3 line-clamp-2 text-sm">
                              {plainText(
                                disease.oneSentence ?? disease.symptoms ?? '',
                              )}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-stone-400" />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {disease.category && (
                          <span className="badge-warm">
                            {disease.category.name}
                          </span>
                        )}
                        {disease.icd10Code && (
                          <span className="badge-muted">
                            ICD-10: {disease.icd10Code}
                          </span>
                        )}
                        {disease.catalogRefs?.map((ref) => (
                          <span
                            key={`${ref.catalogId}-${ref.itemNumber}`}
                            className="badge-muted"
                          >
                            {uiText(
                              `${ref.catalogName}第 ${ref.itemNumber} 项`,
                              `${ref.catalogName} item ${ref.itemNumber}`,
                            )}
                          </span>
                        ))}
                        {!disease.catalogRefs?.length &&
                          disease.catalogNumber && (
                            <span className="badge-muted">
                              {uiText(
                                `目录第 ${disease.catalogNumber} 项`,
                                `Catalog item ${disease.catalogNumber}`,
                              )}
                            </span>
                          )}
                      </div>
                    </Link>
                  ))}
                </ResultSection>
              )}

              {results.hospitals.length > 0 && (
                <ResultSection
                  title={uiText('就医资源', 'Care Resources')}
                  count={results.hospitals.length}
                  icon={Building2}
                >
                  {results.hospitals.map((hospital, index) => (
                    <Link
                      key={hospital.id}
                      to="/hospitals/$id"
                      params={{ id: hospital.id.toString() }}
                      className="card-warm block p-5"
                      onClick={() =>
                        trackEvent('search_result_click', {
                          position: index + 1,
                          query_length: debouncedQuery.trim().length,
                          result_id: hospital.id,
                          result_type: 'hospital',
                        })
                      }
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{hospital.name}</h3>
                          <p className="mt-1 text-sm">
                            {hospital.province} {hospital.city}
                          </p>
                          <p className="mt-3 line-clamp-2 text-sm">
                            {hospital.address}
                          </p>
                          {hospital.services &&
                            hospital.services.length > 0 && (
                              <p className="mt-2 text-xs text-stone-500">
                                {uiText(
                                  `${hospital.services.length} 条公开科室/服务线索`,
                                  `${hospital.services.length} public department/service leads`,
                                )}
                              </p>
                            )}
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-stone-400" />
                      </div>
                    </Link>
                  ))}
                </ResultSection>
              )}

              {results.charities.length > 0 && (
                <ResultSection
                  title={uiText('公益组织', 'Support Groups')}
                  count={results.charities.length}
                  icon={Users}
                >
                  {results.charities.map((org, index) => (
                    <Link
                      key={org.id}
                      to="/charity/$id"
                      params={{ id: org.id.toString() }}
                      className="card-warm block p-5"
                      onClick={() =>
                        trackEvent('search_result_click', {
                          position: index + 1,
                          query_length: debouncedQuery.trim().length,
                          result_id: org.id,
                          result_type: 'charity',
                        })
                      }
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{org.name}</h3>
                          {org.description && (
                            <p className="mt-3 line-clamp-2 text-sm">
                              {plainText(org.description)}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-stone-400" />
                      </div>
                    </Link>
                  ))}
                </ResultSection>
              )}
            </div>
          )}
        </div>
      ) : (
        <EmptySearch
          title={uiText('输入关键词开始搜索', 'Enter keywords to search')}
          description={uiText(
            '可以从卡尔曼综合征、血友病 A、北京协和医院等关键词开始。',
            'Try terms like Kallmann syndrome, Hemophilia A, or a hospital name.',
          )}
        />
      )}
    </div>
  );
}

function ResultSection({
  children,
  count,
  icon: Icon,
  title,
}: {
  children: React.ReactNode;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <span className="result-section-icon">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="strong-text font-semibold">{title}</h2>
        <span className="badge-muted">
          {uiText(`${count} 条`, `${count} results`)}
        </span>
      </div>
      <div className="grid gap-3">{children}</div>
    </section>
  );
}

function EmptySearch({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <div className="surface-card py-14 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-50 text-amber-700">
        <SearchIcon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm">{description}</p>
    </div>
  );
}

function plainText(html: string) {
  return html.replace(/<[^>]*>/g, '').slice(0, 180);
}

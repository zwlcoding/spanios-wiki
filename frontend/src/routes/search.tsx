import { createFileRoute, Link, useSearch } from '@tanstack/react-router';
import {
  ArrowRight,
  Building2,
  FileText,
  Search as SearchIcon,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';

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

  const { data: searchResults, isLoading } = useGlobalSearch(debouncedQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setDebouncedQuery(searchQuery.trim());
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

  return (
    <div className="page-container">
      <div className="mb-6">
        <nav className="muted-text mb-3 flex items-center gap-2 text-sm">
          <Link to="/" className="hover:text-amber-700">
            首页
          </Link>
          <span>/</span>
          <span className="strong-text">搜索</span>
        </nav>
        <h1 className="section-title text-3xl">全站搜索</h1>
        <p className="section-copy mt-2">
          同时查找疾病资料、就医资源和公益组织。
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="surface-card mb-8 flex gap-3 p-3"
      >
        <label className="relative flex-1">
          <span className="sr-only">搜索关键词</span>
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="输入疾病、症状、医院或组织名称"
            className="input-app pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <button type="submit" className="btn-primary-app w-24">
          搜索
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
              ” 的结果：{isLoading ? '加载中...' : `${totalResults} 条`}
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
              title="未找到相关结果"
              description="试试疾病名称、英文名、症状或医院名称。"
            />
          ) : (
            <div className="space-y-8">
              {results.diseases.length > 0 && (
                <ResultSection
                  title="疾病"
                  count={results.diseases.length}
                  icon={FileText}
                >
                  {results.diseases.map((disease) => (
                    <Link
                      key={disease.id}
                      to="/diseases/$slug"
                      params={{ slug: disease.slug }}
                      className="card-warm block p-5"
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
                            {ref.catalogName}第 {ref.itemNumber} 项
                          </span>
                        ))}
                        {!disease.catalogRefs?.length &&
                          disease.catalogNumber && (
                            <span className="badge-muted">
                              目录第 {disease.catalogNumber} 项
                            </span>
                          )}
                      </div>
                    </Link>
                  ))}
                </ResultSection>
              )}

              {results.hospitals.length > 0 && (
                <ResultSection
                  title="就医资源"
                  count={results.hospitals.length}
                  icon={Building2}
                >
                  {results.hospitals.map((hospital) => (
                    <Link
                      key={hospital.id}
                      to="/hospitals/$id"
                      params={{ id: hospital.id.toString() }}
                      className="card-warm block p-5"
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
                                {hospital.services.length} 条公开科室/服务线索
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
                  title="公益组织"
                  count={results.charities.length}
                  icon={Users}
                >
                  {results.charities.map((org) => (
                    <Link
                      key={org.id}
                      to="/charity/$id"
                      params={{ id: org.id.toString() }}
                      className="card-warm block p-5"
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
          title="输入关键词开始搜索"
          description="可以从卡尔曼综合征、血友病 A、北京协和医院等关键词开始。"
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
        <span className="badge-muted">{count} 条</span>
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

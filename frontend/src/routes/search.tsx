import { createFileRoute, useSearch } from '@tanstack/react-router';
import { Search as SearchIcon, FileText, Hospital, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';
import { Link } from '@tanstack/react-router';

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

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setDebouncedQuery(searchQuery);
  };

  const results = searchResults || {
    diseases: [],
    hospitals: [],
    charities: [],
  };

  const totalResults =
    results.diseases.length +
    results.hospitals.length +
    results.charities.length;

  return (
    <div className="flex grow flex-col py-8">
      {/* Breadcrumb */}
      <div className="breadcrumbs text-sm mb-4">
        <ul>
          <li>
            <Link to="/" className="link link-hover">
              首页
            </Link>
          </li>
          <li>搜索</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-6">搜索</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="join w-full max-w-2xl">
          <input
            type="text"
            placeholder="搜索疾病、医院、公益组织..."
            className="input input-bordered join-item w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary join-item">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </form>

      {/* Search Results */}
      {debouncedQuery ? (
        <div>
          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-base-content/70">
              搜索 "<span className="font-medium">{debouncedQuery}</span>"
              的结果：
              <span className="font-medium ml-2">{totalResults} 条</span>
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-8">
              {/* Diseases Loading */}
              <div>
                <div className="skeleton h-6 w-32 mb-4"></div>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="card bg-base-200">
                      <div className="card-body">
                        <div className="skeleton h-6 w-3/4"></div>
                        <div className="skeleton h-4 w-1/2"></div>
                        <div className="skeleton h-4 w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Hospitals Loading */}
              <div>
                <div className="skeleton h-6 w-32 mb-4"></div>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="card bg-base-200">
                      <div className="card-body">
                        <div className="skeleton h-6 w-3/4"></div>
                        <div className="skeleton h-4 w-1/2"></div>
                        <div className="skeleton h-4 w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium mb-2">未找到相关结果</h3>
              <p className="text-base-content/70">请尝试其他关键词或检查拼写</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Diseases Results */}
              {results.diseases.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-5 w-5" />
                    <h2 className="text-xl font-bold">疾病</h2>
                    <span className="badge badge-neutral">
                      {results.diseases.length} 条
                    </span>
                  </div>
                  <div className="space-y-4">
                    {results.diseases.map((disease) => (
                      <Link
                        key={disease.id}
                        to="/diseases/$slug"
                        params={{ slug: disease.slug }}
                        className="card bg-base-200 hover:bg-base-300 transition-colors block"
                      >
                        <div className="card-body">
                          <h3 className="card-title">{disease.name}</h3>
                          {disease.nameEn && (
                            <p className="text-sm text-base-content/70">
                              {disease.nameEn}
                            </p>
                          )}
                          {disease.symptoms && (
                            <p className="text-sm mt-2 line-clamp-2">
                              {disease.symptoms
                                .replace(/<[^>]*>/g, '')
                                .substring(0, 150)}
                              ...
                            </p>
                          )}
                          <div className="card-actions justify-end mt-2">
                            {disease.prevalence && (
                              <div className="badge badge-outline">
                                患病率: {disease.prevalence}
                              </div>
                            )}
                            {disease.category && (
                              <div className="badge badge-primary">
                                {disease.category.name}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Hospitals Results */}
              {results.hospitals.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Hospital className="h-5 w-5" />
                    <h2 className="text-xl font-bold">医院</h2>
                    <span className="badge badge-neutral">
                      {results.hospitals.length} 条
                    </span>
                  </div>
                  <div className="space-y-4">
                    {results.hospitals.map((hospital) => (
                      <Link
                        key={hospital.id}
                        to="/hospitals/$id"
                        params={{ id: hospital.id.toString() }}
                        className="card bg-base-200 hover:bg-base-300 transition-colors block"
                      >
                        <div className="card-body">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="card-title">{hospital.name}</h3>
                              {hospital.level && (
                                <div className="badge badge-primary mt-2">
                                  {hospital.level === 'three_a'
                                    ? '三甲'
                                    : hospital.level === 'three_b'
                                      ? '三乙'
                                      : hospital.level === 'two_a'
                                        ? '二甲'
                                        : hospital.level === 'two_b'
                                          ? '二乙'
                                          : hospital.level}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="mt-4 space-y-2 text-sm">
                            <div>
                              <span className="text-base-content/60">
                                地址：
                              </span>
                              <span className="ml-2">{hospital.address}</span>
                            </div>
                            {hospital.specialties && (
                              <div>
                                <span className="text-base-content/60">
                                  特色专科：
                                </span>
                                <span className="ml-2">
                                  {hospital.specialties}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Charity Organizations Results */}
              {results.charities.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5" />
                    <h2 className="text-xl font-bold">公益组织</h2>
                    <span className="badge badge-neutral">
                      {results.charities.length} 条
                    </span>
                  </div>
                  <div className="space-y-4">
                    {results.charities.map((org) => (
                      <Link
                        key={org.id}
                        to="/charity/$id"
                        params={{ id: org.id.toString() }}
                        className="card bg-base-200 hover:bg-base-300 transition-colors block"
                      >
                        <div className="card-body">
                          <h3 className="card-title">{org.name}</h3>
                          {org.description && (
                            <p className="text-sm text-base-content/70 mt-2">
                              {org.description
                                .replace(/<[^>]*>/g, '')
                                .substring(0, 150)}
                              ...
                            </p>
                          )}
                          {org.services && (
                            <div className="mt-4">
                              <p className="text-sm">
                                <span className="text-base-content/60">
                                  服务内容：
                                </span>
                                <span className="ml-2">{org.services}</span>
                              </p>
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium mb-2">输入关键词开始搜索</h3>
          <p className="text-base-content/70 mb-6">
            搜索疾病、医院、公益组织等相关信息
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="badge badge-lg badge-outline p-4">渐冻人症</div>
            <div className="badge badge-lg badge-outline p-4">北京协和医院</div>
            <div className="badge badge-lg badge-outline p-4">罕见病联盟</div>
            <div className="badge badge-lg badge-outline p-4">苯丙酮尿症</div>
          </div>
        </div>
      )}
    </div>
  );
}

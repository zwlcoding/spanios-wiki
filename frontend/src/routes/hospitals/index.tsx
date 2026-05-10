import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Building2,
  ChevronRight,
  Filter,
  Hospital,
  MapPin,
  Navigation,
  Phone,
  Search,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useHospitals } from '@/hooks/useHospitals';
import { fetchHospitals } from '@/lib/contentClient';

export const Route = createFileRoute('/hospitals/')({
  loader: async ({ context }) => {
    const filters = { province: undefined, search: undefined };

    await context.queryClient.prefetchQuery({
      queryKey: ['hospitals', filters],
      queryFn: () => fetchHospitals(filters),
    });
  },
  component: HospitalsListPage,
});

function HospitalsListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: hospitalsData, isLoading } = useHospitals({
    province: selectedProvince !== 'all' ? selectedProvince : undefined,
    search: debouncedSearch || undefined,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const hospitals = hospitalsData?.data || [];
  const provinces = [
    { id: 'all', name: '全部地区' },
    ...Array.from(new Set(hospitals.map((h) => h.province)))
      .filter(Boolean)
      .map((province) => ({ id: province, name: province })),
  ];

  const getLevelBadge = (level: string | undefined) => {
    const levels: Record<string, { text: string; class: string }> = {
      tertiary_a: {
        text: '三甲',
        class: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
      },
      tertiary_b: {
        text: '三乙',
        class: 'bg-gradient-to-r from-orange-400 to-amber-400 text-white',
      },
      secondary_a: {
        text: '二甲',
        class: 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white',
      },
      secondary_b: {
        text: '二乙',
        class: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white',
      },
    };
    return level
      ? levels[level] || { text: level, class: 'bg-stone-200 text-stone-700' }
      : { text: '', class: 'bg-stone-200 text-stone-700' };
  };

  return (
    <div className="page-container">
      <div className="w-full">
        {/* Header */}
        <div className="mb-8">
          <nav className="muted-text flex items-center gap-2 text-sm mb-4">
            <Link to="/" className="hover:text-amber-600 transition-colors">
              首页
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="strong-text">就医资源</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="section-title text-4xl mb-2">罕见病就医资源</h1>
              <p className="section-copy">
                按地区查看公开医院、科室/服务、关联疾病和来源证据，作为就医前的信息参考
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="sm:hidden btn-soft flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              <span>筛选</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside
            className={`${
              isSidebarOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-72 shrink-0`}
          >
            <div className="sticky top-24 space-y-4">
              {/* Search */}
              <div className="card-warm p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="搜索医院、科室、疾病或服务..."
                    className="input-warm pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Province Filter */}
              <div className="card-warm p-4">
                <h2 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  地区筛选
                </h2>

                <div className="space-y-1 max-h-80 overflow-y-auto pr-2">
                  {provinces.map((province) => (
                    <button
                      type="button"
                      key={province.id}
                      onClick={() => {
                        setSelectedProvince(province.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                        selectedProvince === province.id
                          ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25'
                          : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      <span className="font-medium">{province.name}</span>
                      {selectedProvince === province.id && (
                        <Navigation className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Card */}
              <div className="card-warm p-4 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border-teal-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-800">
                    <Hospital className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 dark:text-stone-100 text-sm mb-1">
                      公开就医信息
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      优先展示可核对的科室/服务证据，不按医院做推荐排序
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <div className="muted-text">
                {isLoading ? (
                  <span>加载中...</span>
                ) : (
                  <span>
                    共找到{' '}
                    <span className="font-semibold text-teal-600">
                      {hospitals.length}
                    </span>{' '}
                    个机构
                  </span>
                )}
              </div>

              {selectedProvince !== 'all' && (
                <button
                  type="button"
                  onClick={() => setSelectedProvince('all')}
                  className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1"
                >
                  清除筛选
                  <span className="text-lg">×</span>
                </button>
              )}
            </div>

            {/* Hospital Grid */}
            <div className="grid gap-4">
              {isLoading ? (
                <>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="card-warm p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="h-6 w-56 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                          <div className="h-4 w-24 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                        </div>
                        <div className="h-6 w-16 bg-stone-200 dark:bg-stone-700 rounded-full animate-pulse" />
                      </div>
                      <div className="h-4 w-full bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                      <div className="h-4 w-1/2 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                    </div>
                  ))}
                </>
              ) : hospitals.length === 0 ? (
                <div className="text-center py-16 card-warm">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-stone-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    未找到相关就医资源
                  </h3>
                  <p className="mb-4">
                    尝试使用疾病、科室、城市或服务关键词搜索
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedProvince('all');
                    }}
                    className="btn-soft"
                  >
                    查看全部资源
                  </button>
                </div>
              ) : (
                hospitals.map((hospital) => {
                  const levelBadge = getLevelBadge(hospital.level);
                  return (
                    <Link
                      key={hospital.id}
                      to="/hospitals/$id"
                      params={{ id: hospital.id.toString() }}
                      className="group card-warm p-6 block hover:border-teal-300 dark:hover:border-teal-700"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Hospital Icon */}
                        <div className="shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                          </div>
                        </div>

                        {/* Hospital Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="font-serif text-xl font-bold group-hover:text-teal-600 transition-colors">
                              {hospital.name}
                            </h3>
                            {hospital.level && (
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${levelBadge.class}`}
                              >
                                {levelBadge.text}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-sm text-stone-500 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>
                              {hospital.province} {hospital.city}
                            </span>
                          </div>

                          <div className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400 mb-3">
                            <Navigation className="w-4 h-4 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">
                              {hospital.address}
                            </span>
                          </div>

                          {hospital.phone && (
                            <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 mb-3">
                              <Phone className="w-4 h-4 text-teal-500" />
                              <span>{hospital.phone}</span>
                            </div>
                          )}

                          {hospital.specialties && (
                            <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-700">
                              <p className="text-sm text-stone-600 dark:text-stone-400">
                                <span className="font-medium text-stone-800 dark:text-stone-200">
                                  公开线索：
                                </span>
                                <span className="line-clamp-2">
                                  {hospital.specialties}
                                </span>
                              </p>
                            </div>
                          )}

                          {hospital.services &&
                            hospital.services.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {hospital.services
                                  .slice(0, 3)
                                  .map((service) => (
                                    <span
                                      key={service.id}
                                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600 dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-300"
                                    >
                                      {service.departmentName}
                                      {service.diseases?.length
                                        ? ` · ${service.diseases.length} 个疾病`
                                        : ''}
                                    </span>
                                  ))}
                                {hospital.services.length > 3 && (
                                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600 dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-300">
                                    +{hospital.services.length - 3} 个服务线索
                                  </span>
                                )}
                              </div>
                            )}
                        </div>

                        {/* Arrow */}
                        <div className="shrink-0 self-center">
                          <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                            <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-teal-600 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

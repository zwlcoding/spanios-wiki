import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowUpRight,
  ChevronRight,
  Filter,
  Globe,
  HandHeart,
  Heart,
  Mail,
  Phone,
  Search,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCharityOrganizations } from '@/hooks/useCharityOrganizations';
import { fetchCharityOrganizations } from '@/lib/contentClient';

export const Route = createFileRoute('/charity/')({
  loader: async ({ context }) => {
    const filters = { search: undefined, type: undefined };

    await context.queryClient.prefetchQuery({
      queryKey: ['charityOrganizations', filters],
      queryFn: () => fetchCharityOrganizations(filters),
    });
  },
  component: CharityListPage,
});

function CharityListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: organizationsData, isLoading } = useCharityOrganizations({
    type: selectedType !== 'all' ? selectedType : undefined,
    search: debouncedSearch || undefined,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const organizations = organizationsData?.data || [];

  const types = [
    { id: 'all', name: '全部类型', icon: HandHeart },
    { id: 'patient_org', name: '患者组织', icon: Users },
    { id: 'foundation', name: '基金会', icon: Heart },
    { id: 'volunteer_team', name: '志愿者团队', icon: HandHeart },
  ];

  const getTypeIcon = (type: string) => {
    const icons: Record<
      string,
      { icon: typeof Users; label: string; gradient: string }
    > = {
      patient_org: {
        icon: Users,
        label: '患者组织',
        gradient: 'from-rose-500 to-pink-500',
      },
      foundation: {
        icon: Heart,
        label: '基金会',
        gradient: 'from-amber-500 to-orange-500',
      },
      volunteer_team: {
        icon: HandHeart,
        label: '志愿者团队',
        gradient: 'from-teal-500 to-emerald-500',
      },
    };
    return (
      icons[type] || {
        icon: HandHeart,
        label: type,
        gradient: 'from-stone-400 to-stone-500',
      }
    );
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
            <span className="strong-text">公益组织</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="section-title text-4xl mb-2">罕见病公益组织</h1>
              <p className="section-copy">
                查找公开患者组织、基金会和服务信息，具体服务以官方渠道为准
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
                    placeholder="搜索组织名称..."
                    className="input-warm pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Type Filter */}
              <div className="card-warm p-4">
                <h2 className="font-semibold mb-4 flex items-center gap-2">
                  <HandHeart className="w-4 h-4 text-rose-500" />
                  组织类型
                </h2>

                <div className="space-y-1">
                  {types.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => {
                          setSelectedType(type.id);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          selectedType === type.id
                            ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/25'
                            : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{type.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Info Card */}
              <div className="card-warm p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border-rose-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-800">
                    <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 dark:text-stone-100 text-sm mb-1">
                      公开组织信息
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      仅收录可核对来源的组织和服务范围，不代表本站背书或援助承诺
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
                    <span className="font-semibold text-rose-600">
                      {organizations.length}
                    </span>{' '}
                    个组织
                  </span>
                )}
              </div>

              {selectedType !== 'all' && (
                <button
                  type="button"
                  onClick={() => setSelectedType('all')}
                  className="text-sm text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  清除筛选
                  <span className="text-lg">×</span>
                </button>
              )}
            </div>

            {/* Organization Grid */}
            <div className="grid gap-4">
              {isLoading ? (
                <>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="card-warm p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-stone-200 dark:bg-stone-700 animate-pulse" />
                        <div className="flex-1 space-y-2">
                          <div className="h-6 w-48 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                          <div className="h-4 w-24 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                        </div>
                      </div>
                      <div className="h-4 w-full bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                      <div className="h-4 w-2/3 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                    </div>
                  ))}
                </>
              ) : organizations.length === 0 ? (
                <div className="text-center py-16 card-warm">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                    <HandHeart className="w-10 h-10 text-stone-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">未找到相关组织</h3>
                  <p className="mb-4">
                    尝试使用其他关键词搜索，或浏览全部组织列表
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('all');
                    }}
                    className="btn-soft"
                  >
                    查看全部组织
                  </button>
                </div>
              ) : (
                organizations.map((org) => {
                  const typeInfo = getTypeIcon(org.type);
                  const TypeIcon = typeInfo.icon;

                  return (
                    <Link
                      key={org.id}
                      to="/charity/$id"
                      params={{ id: org.id.toString() }}
                      className="group card-warm p-6 block hover:border-rose-300 dark:hover:border-rose-700"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Organization Icon */}
                        <div className="shrink-0">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${typeInfo.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <TypeIcon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Organization Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="font-serif text-xl font-bold group-hover:text-rose-600 transition-colors">
                              {org.name}
                            </h3>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${typeInfo.gradient} text-white`}
                            >
                              {typeInfo.label}
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-stone-400 opacity-0 group-hover:opacity-100 group-hover:text-rose-500 transition-all" />
                          </div>

                          {org.description && (
                            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4 line-clamp-2">
                              {org.description
                                .replace(/<[^>]*>/g, '')
                                .substring(0, 200)}
                              ...
                            </p>
                          )}

                          {org.services && (
                            <div className="mb-4">
                              <p className="text-sm text-stone-600 dark:text-stone-400">
                                <span className="font-medium text-stone-800 dark:text-stone-200">
                                  服务内容：
                                </span>
                                <span className="line-clamp-2">
                                  {org.services}
                                </span>
                              </p>
                            </div>
                          )}

                          {/* Contact Info */}
                          <div className="flex flex-wrap gap-4 text-sm">
                            {org.phone && (
                              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                                  <Phone className="w-4 h-4 text-rose-500" />
                                </div>
                                <span>{org.phone}</span>
                              </div>
                            )}

                            {org.email && (
                              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                  <Mail className="w-4 h-4 text-amber-500" />
                                </div>
                                <span className="truncate max-w-[200px]">
                                  {org.email}
                                </span>
                              </div>
                            )}

                            {org.website && (
                              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                                <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                  <Globe className="w-4 h-4 text-teal-500" />
                                </div>
                                <span className="truncate max-w-[200px]">
                                  {org.website}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="shrink-0 self-center hidden md:block">
                          <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center group-hover:bg-rose-100 dark:group-hover:bg-rose-900/30 transition-colors">
                            <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-rose-600 transition-colors" />
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

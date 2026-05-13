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
import { useEffect, useRef, useState } from 'react';
import { useCharityOrganizations } from '@/hooks/useCharityOrganizations';
import { fetchCharityOrganizations } from '@/lib/contentClient';
import { getSearchMeta, trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

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
  const lastTrackedSearch = useRef('');

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
    { id: 'all', name: uiText('全部类型', 'All Types'), icon: HandHeart },
    {
      id: 'patient_org',
      name: uiText('患者组织', 'Patient Groups'),
      icon: Users,
    },
    { id: 'foundation', name: uiText('基金会', 'Foundations'), icon: Heart },
    {
      id: 'volunteer_team',
      name: uiText('志愿者团队', 'Volunteer Teams'),
      icon: HandHeart,
    },
  ];

  const getTypeIcon = (type: string | undefined) => {
    const icons: Record<
      string,
      { icon: typeof Users; label: string; gradient: string }
    > = {
      patient_org: {
        icon: Users,
        label: uiText('患者组织', 'Patient Group'),
        gradient: 'from-rose-500 to-pink-500',
      },
      foundation: {
        icon: Heart,
        label: uiText('基金会', 'Foundation'),
        gradient: 'from-amber-500 to-orange-500',
      },
      volunteer_team: {
        icon: HandHeart,
        label: uiText('志愿者团队', 'Volunteer Team'),
        gradient: 'from-teal-500 to-emerald-500',
      },
    };
    return (
      (type ? icons[type] : undefined) || {
        icon: HandHeart,
        label: type ?? uiText('其他', 'Other'),
        gradient: 'from-stone-400 to-stone-500',
      }
    );
  };

  useEffect(() => {
    if (!debouncedSearch || isLoading) {
      return;
    }

    const eventKey = `${debouncedSearch}:${selectedType}:${organizations.length}`;

    if (lastTrackedSearch.current === eventKey) {
      return;
    }

    lastTrackedSearch.current = eventKey;

    trackEvent('search_results_view', {
      source: 'charity_list',
      ...getSearchMeta(debouncedSearch),
      charity_count: organizations.length,
      result_total: organizations.length,
      type: selectedType,
      zero_result: organizations.length === 0,
    });
  }, [debouncedSearch, isLoading, organizations.length, selectedType]);

  return (
    <div className="page-container">
      <div className="w-full">
        {/* Header */}
        <div className="mb-8">
          <nav className="muted-text flex items-center gap-2 text-sm mb-4">
            <Link to="/" className="hover:text-amber-600 transition-colors">
              {uiText('首页', 'Home')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="strong-text">
              {uiText('公益组织', 'Support Groups')}
            </span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="section-title text-4xl mb-2">
                {uiText('罕见病公益组织', 'Rare Disease Support Groups')}
              </h1>
              <p className="section-copy">
                {uiText(
                  '查找公开患者组织、基金会和服务信息，具体服务以官方渠道为准',
                  'Find public patient groups, foundations, and service information. Confirm specific services through official channels.',
                )}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="sm:hidden btn-soft flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              <span>{uiText('筛选', 'Filters')}</span>
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
                    placeholder={uiText(
                      '搜索组织名称...',
                      'Search organization names...',
                    )}
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
                  {uiText('组织类型', 'Organization Type')}
                </h2>

                <div className="space-y-1">
                  {types.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => {
                          trackEvent('charity_filter_change', {
                            type: type.id,
                          });
                          setSelectedType(type.id);
                          setIsSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          selectedType === type.id
                            ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/25'
                            : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400'
                        } text-left`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="min-w-0 text-left font-medium">
                          {type.name}
                        </span>
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
                      {uiText('公开组织信息', 'Public Organization Info')}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      {uiText(
                        '仅收录可核对来源的组织和服务范围，不代表本站背书或援助承诺',
                        'We include organizations and service scopes with verifiable sources only. This is not an endorsement or aid commitment.',
                      )}
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
                  <span>{uiText('加载中...', 'Loading...')}</span>
                ) : (
                  <span>
                    {uiText('共找到', 'Found')}{' '}
                    <span className="font-semibold text-rose-600">
                      {organizations.length}
                    </span>{' '}
                    {uiText('个组织', 'organizations')}
                  </span>
                )}
              </div>

              {selectedType !== 'all' && (
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('filter_clear', {
                      filter_type: 'type',
                      page: 'charity_list',
                    });
                    setSelectedType('all');
                  }}
                  className="text-sm text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  {uiText('清除筛选', 'Clear Filter')}
                  <span className="text-lg">×</span>
                </button>
              )}
            </div>

            {/* Organization Grid */}
            <div className="grid gap-4">
              {isLoading ? (
                [1, 2, 3].map((i) => (
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
                ))
              ) : organizations.length === 0 ? (
                <div className="text-center py-16 card-warm">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                    <HandHeart className="w-10 h-10 text-stone-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {uiText('未找到相关组织', 'No matching organizations')}
                  </h3>
                  <p className="mb-4">
                    {uiText(
                      '尝试使用其他关键词搜索，或浏览全部组织列表',
                      'Try another keyword or browse the full organization list.',
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('filter_clear', {
                        filter_type: 'search_and_type',
                        page: 'charity_list',
                      });
                      setSearchQuery('');
                      setSelectedType('all');
                    }}
                    className="btn-soft"
                  >
                    {uiText('查看全部组织', 'View All Organizations')}
                  </button>
                </div>
              ) : (
                organizations.map((org, index) => {
                  const typeInfo = getTypeIcon(org.type);
                  const TypeIcon = typeInfo.icon;

                  return (
                    <Link
                      key={org.id}
                      to="/charity/$id"
                      params={{ id: org.id.toString() }}
                      className="group card-warm p-6 block hover:border-rose-300 dark:hover:border-rose-700"
                      onClick={() =>
                        trackEvent('charity_card_click', {
                          charity_id: org.id,
                          position: index + 1,
                          source: 'charity_list',
                          type: org.type,
                        })
                      }
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
                                  {uiText('服务内容：', 'Services:')}
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

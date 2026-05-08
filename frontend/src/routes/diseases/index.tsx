import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Activity,
  ArrowUpRight,
  Bone,
  Brain,
  ChevronRight,
  Dna,
  Droplet,
  Eye,
  Filter,
  FlaskConical,
  HeartPulse,
  Network,
  Search,
  Shield,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDiseaseCategories } from '@/hooks/useDiseaseCategories';
import { useDiseases } from '@/hooks/useDiseases';
import { fetchDiseaseCategories, fetchDiseases } from '@/lib/contentClient';

export const Route = createFileRoute('/diseases/')({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === 'string' ? search.category : 'all',
  }),
  loader: async ({ context }) => {
    const filters = { category: undefined, search: undefined };

    await Promise.all([
      context.queryClient.prefetchQuery({
        queryKey: ['diseaseCategories'],
        queryFn: fetchDiseaseCategories,
      }),
      context.queryClient.prefetchQuery({
        queryKey: ['diseases', filters],
        queryFn: () => fetchDiseases(filters),
      }),
    ]);
  },
  component: DiseasesListPage,
});

const categoryIconByName = {
  activity: Activity,
  bone: Bone,
  brain: Brain,
  dna: Dna,
  droplet: Droplet,
  eye: Eye,
  flask: FlaskConical,
  'heart-pulse': HeartPulse,
  kidney: Droplet,
  lungs: Activity,
  network: Network,
  shield: Shield,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
};

function DiseasesListPage() {
  const { category: initialCategory = 'all' } = Route.useSearch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: categoriesData, isLoading: isLoadingCategories } =
    useDiseaseCategories();

  const { data: diseasesData, isLoading: isLoadingDiseases } = useDiseases({
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
    search: debouncedSearch || undefined,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    setSelectedCategory(initialCategory || 'all');
  }, [initialCategory]);

  const categories = [
    { id: 'all', name: '全部疾病', slug: 'all', icon: Activity },
    ...(categoriesData?.data?.map((cat) => ({
      id: cat.slug,
      name: cat.name,
      slug: cat.slug,
      icon:
        categoryIconByName[cat.icon as keyof typeof categoryIconByName] ??
        Stethoscope,
    })) || []),
  ];

  const diseases = diseasesData?.data || [];
  const isLoading = isLoadingCategories || isLoadingDiseases;

  return (
    <div className="page-container">
      <div className="w-full">
        {/* Header */}
        <div className="mb-8">
          {/* Breadcrumb */}
          <nav className="muted-text flex items-center gap-2 text-sm mb-4">
            <Link to="/" className="hover:text-amber-600 transition-colors">
              首页
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="strong-text">疾病列表</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="section-title text-4xl mb-2">罕见病列表</h1>
              <p className="section-copy">
                探索各类罕见病的基础知识、症状线索与治疗管理信息
              </p>
            </div>

            {/* Mobile Filter Toggle */}
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
          {/* Sidebar - Categories */}
          <aside
            className={`${
              isSidebarOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-72 shrink-0`}
          >
            <div className="sticky top-24 space-y-4">
              {/* Search in Sidebar */}
              <div className="card-warm p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="搜索疾病..."
                    className="input-warm pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="card-warm p-4">
                <h2 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-amber-500" />
                  疾病分类
                </h2>

                {isLoadingCategories ? (
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 bg-stone-200 dark:bg-stone-700 rounded-lg animate-pulse"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-1">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          type="button"
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                            selectedCategory === category.id
                              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                              : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Info Card */}
              <div className="card-warm p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-800">
                    <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 dark:text-stone-100 text-sm mb-1">
                      数据持续更新
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      我们不断完善罕见病数据库，确保信息的准确性和时效性
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
                    <span className="font-semibold text-amber-600">
                      {diseases.length}
                    </span>{' '}
                    种疾病
                  </span>
                )}
              </div>

              {selectedCategory !== 'all' && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                  清除筛选
                  <span className="text-lg">×</span>
                </button>
              )}
            </div>

            {/* Disease Grid */}
            <div className="grid gap-4">
              {isLoading ? (
                // Loading Skeletons
                [1, 2, 3].map((i) => (
                  <div key={i} className="card-warm p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="h-6 w-48 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                        <div className="h-4 w-32 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                      </div>
                      <div className="h-6 w-20 bg-stone-200 dark:bg-stone-700 rounded-full animate-pulse" />
                    </div>
                    <div className="h-4 w-full bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-stone-200 dark:bg-stone-700 rounded animate-pulse" />
                  </div>
                ))
              ) : diseases.length === 0 ? (
                // Empty State
                <div className="text-center py-16 card-warm">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                    <Search className="w-10 h-10 text-stone-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">未找到相关疾病</h3>
                  <p className="mb-4">
                    尝试使用其他关键词搜索，或浏览全部疾病列表
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="btn-soft"
                  >
                    查看全部疾病
                  </button>
                </div>
              ) : (
                // Disease Cards
                diseases.map((disease) => (
                  <Link
                    key={disease.id}
                    to="/diseases/$slug"
                    params={{ slug: disease.slug }}
                    className="group card-warm p-6 block hover:border-amber-300 dark:hover:border-amber-700"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-xl font-bold group-hover:text-amber-600 transition-colors">
                            {disease.name}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-stone-400 opacity-0 group-hover:opacity-100 group-hover:text-amber-500 transition-all" />
                        </div>

                        {disease.nameEn && (
                          <p className="text-sm text-stone-500 dark:text-stone-500 mb-3">
                            {disease.nameEn}
                          </p>
                        )}

                        {(disease.oneSentence || disease.symptoms) && (
                          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4 line-clamp-2">
                            {(disease.oneSentence ?? disease.symptoms ?? '')
                              .replace(/<[^>]*>/g, '')
                              .substring(0, 200)}
                            {(disease.oneSentence ?? disease.symptoms ?? '')
                              .length > 200
                              ? '...'
                              : ''}
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-2">
                          {disease.category && (
                            <span className="badge-warm">
                              {disease.category.name}
                            </span>
                          )}
                          {disease.prevalence && (
                            <span className="badge-soft">
                              患病率: {disease.prevalence}
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
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

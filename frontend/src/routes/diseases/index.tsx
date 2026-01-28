import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { useDiseases } from '@/hooks/useDiseases';
import { useDiseaseCategories } from '@/hooks/useDiseaseCategories';
import { Link } from '@tanstack/react-router';
import { OptimizedIcon } from '@/utils/optimizedIcons';

export const Route = createFileRoute('/diseases/')({
  component: DiseasesListPage,
});

function DiseasesListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Fetch disease categories
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useDiseaseCategories();

  // Fetch diseases with filters
  const { data: diseasesData, isLoading: isLoadingDiseases } = useDiseases({
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
    search: debouncedSearch || undefined,
  });

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Prepare categories for display
  const categories = [
    { id: 'all', name: '全部', slug: 'all' },
    ...(categoriesData?.data?.map((cat) => ({
      id: cat.slug,
      name: cat.name,
      slug: cat.slug,
    })) || []),
  ];

  const diseases = diseasesData?.data || [];
  const isLoading = isLoadingCategories || isLoadingDiseases;

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
          <li>疾病列表</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-6">罕见病列表</h1>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar - Categories */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title text-lg">疾病分类</h2>
              {isLoadingCategories ? (
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="skeleton h-8 w-full"></div>
                  ))}
                </div>
              ) : (
                <ul className="menu menu-sm">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={
                          selectedCategory === category.id ? 'active' : ''
                        }
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="join w-full">
              <input
                type="text"
                placeholder="搜索疾病名称..."
                className="input input-bordered join-item w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="btn btn-primary join-item">
                <OptimizedIcon name="Search" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Disease List */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="card bg-base-200">
                    <div className="card-body">
                      <div className="skeleton h-6 w-3/4"></div>
                      <div className="skeleton h-4 w-1/2"></div>
                      <div className="skeleton h-4 w-full"></div>
                      <div className="skeleton h-4 w-1/3 mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : diseases.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-base-content/60">暂无相关疾病信息</p>
              </div>
            ) : (
              diseases.map((disease) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

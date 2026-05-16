import { Link, useNavigate } from '@tanstack/react-router';
import {
  ArrowRight,
  BookOpenCheck,
  HandHeart,
  HeartPulse,
  Hospital,
  Search,
} from 'lucide-react';
import { useState } from 'react';
import { useDiseaseCategories } from '@/hooks/useDiseaseCategories';
import { useDiseaseInventoryStats, useDiseases } from '@/hooks/useDiseases';
import { useHospitals } from '@/hooks/useHospitals';
import { getSearchMeta, trackEvent } from '@/utils/analytics';
import { getCategoryIcon } from '@/utils/categoryIcons';
import { uiText } from '@/utils/localeText';

const categoryTones = [
  'text-violet-700 bg-violet-50 border-violet-100',
  'text-amber-700 bg-amber-50 border-amber-100',
  'text-rose-700 bg-rose-50 border-rose-100',
  'text-teal-700 bg-teal-50 border-teal-100',
  'text-sky-700 bg-sky-50 border-sky-100',
  'text-emerald-700 bg-emerald-50 border-emerald-100',
  'text-indigo-700 bg-indigo-50 border-indigo-100',
  'text-fuchsia-700 bg-fuchsia-50 border-fuchsia-100',
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { data: categoriesData } = useDiseaseCategories();
  const { data: diseasesData } = useDiseases();
  const { data: diseaseStatsData } = useDiseaseInventoryStats();
  const { data: hospitalsData } = useHospitals();
  const categories = categoriesData?.data ?? [];
  const diseases = diseasesData?.data ?? [];
  const diseaseStats = diseaseStatsData?.data;
  const hospitals = hospitalsData?.data ?? [];
  const quickLinks = [
    {
      title: uiText('疾病资料', 'Disease Guides'),
      description: uiText(
        '查看症状线索、诊断路径和长期管理信息',
        'Review symptoms, diagnosis paths, and long-term care notes',
      ),
      href: '/diseases',
      icon: HeartPulse,
    },
    {
      title: uiText('就医资源', 'Care Resources'),
      description: uiText(
        '按地区查看公开科室/服务线索和来源证据',
        'Find public department and service leads by region',
      ),
      href: '/hospitals',
      icon: Hospital,
    },
    {
      title: uiText('公益资源', 'Support Resources'),
      description: uiText(
        '查找公开患者组织、基金会和服务信息',
        'Find public patient groups, foundations, and services',
      ),
      href: '/charity',
      icon: HandHeart,
    },
  ];
  const hotTerms = [
    uiText('卡尔曼综合征', 'Kallmann syndrome'),
    uiText('渐冻症', 'ALS'),
    uiText('血友病 A', 'Hemophilia A'),
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();

    trackEvent('search_submit', {
      source: 'home',
      ...getSearchMeta(query),
    });

    if (query) {
      navigate({ to: '/search', search: { q: query } });
    }
  };

  return (
    <div className="page-container">
      <section className="page-hero grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="eyebrow">
            <BookOpenCheck className="h-4 w-4" />
            {uiText(
              'Spanios 罕见病知识与资源导航',
              'Spanios Rare Disease Knowledge and Resource Navigation',
            )}
          </div>

          <h1 className="section-title mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {uiText('少见，不该难找', 'Rare should not mean hard to find')}
          </h1>

          <p className="section-copy mt-5 max-w-2xl text-base sm:text-lg">
            {uiText(
              'Spanios 把疾病资料、就医资源和公益信息放在同一个可搜索入口，帮助患者和家属把分散线索整理成清晰的下一步。',
              'Spanios brings disease guides, care resources, and support information into one searchable place so patients and families can turn scattered leads into a clearer next step.',
            )}
          </p>

          <form
            onSubmit={handleSearch}
            className="surface-card mt-8 flex flex-col gap-3 p-3 sm:flex-row"
          >
            <label className="relative flex-1">
              <span className="sr-only">
                {uiText('搜索关键词', 'Search keywords')}
              </span>
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder={uiText(
                  '搜索疾病、症状、医院或公益组织',
                  'Search diseases, symptoms, or resources',
                )}
                className="input-app pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
            <button type="submit" className="btn-primary-app sm:w-28">
              {uiText('搜索', 'Search')}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <span>{uiText('热门：', 'Popular:')}</span>
            {hotTerms.map((term) => (
              <button
                type="button"
                key={term}
                onClick={() => {
                  trackEvent('home_hot_search_click', {
                    term_key: term,
                  });
                  navigate({ to: '/search', search: { q: term } });
                }}
                className="badge-muted hover:bg-stone-200 dark:hover:bg-stone-700"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="tool-panel p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {quickLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="quick-action-card group"
                  onClick={() =>
                    trackEvent('home_quick_link_click', {
                      target: link.href,
                    })
                  }
                >
                  <span className="quick-action-icon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="quick-action-title flex items-center gap-2">
                      {link.title}
                      <ArrowRight className="h-4 w-4 text-stone-400 transition group-hover:translate-x-0.5 group-hover:text-amber-600" />
                    </span>
                    <span className="quick-action-description">
                      {link.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title text-2xl">
              {uiText('疾病分类', 'Disease Categories')}
            </h2>
            <p className="section-copy text-sm">
              {uiText(
                '按医学系统和常见管理科室快速进入对应疾病列表。',
                'Browse disease lists by medical system and common care department.',
              )}
            </p>
          </div>
          <Link
            to="/diseases"
            search={{ category: 'all' }}
            className="btn-subtle self-start"
            onClick={() =>
              trackEvent('home_quick_link_click', { target: '/diseases' })
            }
          >
            {uiText('查看全部', 'View All')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = getCategoryIcon(category.icon);
            const count = diseases.filter(
              (disease) => disease.category?.slug === category.slug,
            ).length;

            return (
              <Link
                key={category.slug}
                to="/diseases"
                search={{ category: category.slug }}
                className="card-warm block p-4"
                onClick={() =>
                  trackEvent('home_category_click', {
                    category: category.slug,
                  })
                }
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-md border ${
                    categoryTones[index % categoryTones.length]
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm">
                  {uiText(`当前收录 ${count} 种`, `${count} listed`)}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: `${diseaseStats?.totalCount ?? diseases.length}`,
              label: uiText('已整理疾病', 'Organized Diseases'),
            },
            {
              value: `${diseaseStats?.publishedCount ?? diseases.length}`,
              label: uiText('已发布资料', 'Published Guides'),
            },
            {
              value: `${diseaseStats?.totalCatalogReferences ?? 0}`,
              label: uiText('官方目录条目', 'Official Catalog Items'),
            },
            {
              value: `${hospitals.length}`,
              label: uiText('就医资源', 'Care Resources'),
            },
          ].map((stat) => (
            <div key={stat.label} className="surface-card p-5">
              <div className="text-3xl font-semibold text-amber-700">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

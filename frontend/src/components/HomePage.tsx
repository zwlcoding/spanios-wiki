import { Link, useNavigate } from '@tanstack/react-router';
import {
  Activity,
  ArrowRight,
  Bone,
  BookOpenCheck,
  Brain,
  Dna,
  Droplet,
  Eye,
  FlaskConical,
  HandHeart,
  HeartPulse,
  Hospital,
  Network,
  Search,
  Shield,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import { useState } from 'react';
import { useDiseaseCategories } from '@/hooks/useDiseaseCategories';
import { useDiseases } from '@/hooks/useDiseases';
import { useHospitals } from '@/hooks/useHospitals';

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

const quickLinks = [
  {
    title: '疾病资料',
    description: '查看症状、诊断、治疗和预后信息',
    href: '/diseases',
    icon: HeartPulse,
  },
  {
    title: '诊疗医院',
    description: '按地区查找医院、科室和联系方式',
    href: '/hospitals',
    icon: Hospital,
  },
  {
    title: '公益支持',
    description: '连接患者组织、基金会和服务资源',
    href: '/charity',
    icon: HandHeart,
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { data: categoriesData } = useDiseaseCategories();
  const { data: diseasesData } = useDiseases();
  const { data: hospitalsData } = useHospitals();
  const categories = categoriesData?.data ?? [];
  const diseases = diseasesData?.data ?? [];
  const hospitals = hospitalsData?.data ?? [];
  const catalogReferenceCount = diseases.reduce(
    (total, disease) => total + (disease.catalogRefs?.length ?? 0),
    0,
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();

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
            罕见病知识与资源导航
          </div>

          <h1 className="section-title mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            罕见病信息百科
          </h1>

          <p className="section-copy mt-5 max-w-2xl text-base sm:text-lg">
            把疾病资料、诊疗医院和公益支持放在同一个可搜索入口。内容以代码维护，便于快速更新和多语言发布。
          </p>

          <form
            onSubmit={handleSearch}
            className="surface-card mt-8 flex flex-col gap-3 p-3 sm:flex-row"
          >
            <label className="relative flex-1">
              <span className="sr-only">搜索关键词</span>
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="搜索疾病、症状、医院或公益组织"
                className="input-app pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
            <button type="submit" className="btn-primary-app sm:w-28">
              搜索
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <span>热门：</span>
            {['卡尔曼综合征', '渐冻症', '血友病 A'].map((term) => (
              <button
                type="button"
                key={term}
                onClick={() => navigate({ to: '/search', search: { q: term } })}
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
            <h2 className="section-title text-2xl">疾病分类</h2>
            <p className="section-copy text-sm">
              按诊疗系统和主要管理科室快速进入对应疾病列表。
            </p>
          </div>
          <Link to="/diseases" className="btn-subtle self-start">
            查看全部
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon =
              categoryIconByName[
                category.icon as keyof typeof categoryIconByName
              ] ?? Stethoscope;
            const count = diseases.filter(
              (disease) => disease.category?.slug === category.slug,
            ).length;

            return (
              <Link
                key={category.slug}
                to="/diseases"
                search={{ category: category.slug }}
                className="card-warm block p-4"
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-md border ${
                    categoryTones[index % categoryTones.length]
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm">当前收录 {count} 种</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { value: `${diseases.length}`, label: '疾病条目' },
            { value: `${catalogReferenceCount}`, label: '官方目录条目' },
            { value: `${hospitals.length}`, label: '诊疗医院' },
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

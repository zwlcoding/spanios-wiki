import { useNavigate } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: '/search', search: { q: searchQuery } });
    }
  };

  const categories = [
    {
      id: '1',
      name: '神经系统疾病',
      slug: 'neurological',
      icon: '🧠',
      count: 120,
    },
    { id: '2', name: '代谢性疾病', slug: 'metabolic', icon: '⚗️', count: 85 },
    {
      id: '3',
      name: '血液系统疾病',
      slug: 'hematological',
      icon: '🩸',
      count: 95,
    },
    {
      id: '4',
      name: '免疫系统疾病',
      slug: 'immunological',
      icon: '🛡️',
      count: 72,
    },
    {
      id: '5',
      name: '骨骼肌肉疾病',
      slug: 'musculoskeletal',
      icon: '🦴',
      count: 68,
    },
    {
      id: '6',
      name: '心血管疾病',
      slug: 'cardiovascular',
      icon: '❤️',
      count: 54,
    },
  ];

  return (
    <div className="flex grow flex-col">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-primary">罕见病</span>信息百科
        </h1>
        <p className="mt-4 text-lg text-base-content/70 sm:text-xl">
          为罕见病患者及家属提供专业、准确的疾病信息与医疗资源
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mx-auto mt-8 max-w-2xl">
          <div className="join w-full">
            <input
              type="text"
              placeholder="搜索疾病名称、症状..."
              className="input input-bordered join-item w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary join-item">
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline">搜索</span>
            </button>
          </div>
        </form>
      </section>

      {/* Categories Grid */}
      <section className="py-8">
        <h2 className="mb-6 text-2xl font-bold">疾病分类</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/diseases/category/${category.slug}`}
              className="card bg-base-200 hover:bg-base-300 transition-colors"
            >
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h3 className="card-title text-base">{category.name}</h3>
                    <p className="text-sm text-base-content/60">
                      {category.count} 种疾病
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="/diseases"
            className="card bg-primary text-primary-content hover:shadow-lg transition-shadow"
          >
            <div className="card-body">
              <h3 className="card-title">浏览疾病</h3>
              <p>查看完整的罕见病列表</p>
            </div>
          </a>
          <a
            href="/hospitals"
            className="card bg-secondary text-secondary-content hover:shadow-lg transition-shadow"
          >
            <div className="card-body">
              <h3 className="card-title">寻找医院</h3>
              <p>查找专业治疗医院及科室</p>
            </div>
          </a>
          <a
            href="/charity"
            className="card bg-accent text-accent-content hover:shadow-lg transition-shadow"
          >
            <div className="card-body">
              <h3 className="card-title">公益组织</h3>
              <p>获取患者支持与帮助</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

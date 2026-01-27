import { createFileRoute } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/diseases/')({
  component: DiseasesListPage,
});

function DiseasesListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data - will be replaced with real Strapi data
  const categories = [
    { id: 'all', name: '全部' },
    { id: 'neurological', name: '神经系统疾病' },
    { id: 'metabolic', name: '代谢性疾病' },
    { id: 'hematological', name: '血液系统疾病' },
    { id: 'immunological', name: '免疫系统疾病' },
    { id: 'musculoskeletal', name: '骨骼肌肉疾病' },
    { id: 'cardiovascular', name: '心血管疾病' },
  ];

  const mockDiseases = [
    {
      id: '1',
      name: '渐冻人症（肌萎缩侧索硬化）',
      nameEn: 'Amyotrophic Lateral Sclerosis (ALS)',
      category: 'neurological',
      prevalence: '2-3/100,000',
      description: '一种进行性神经退行性疾病，影响大脑和脊髓中的运动神经元...',
    },
    {
      id: '2',
      name: '苯丙酮尿症',
      nameEn: 'Phenylketonuria (PKU)',
      category: 'metabolic',
      prevalence: '1/10,000-15,000',
      description: '一种遗传性代谢疾病，患者无法代谢苯丙氨酸...',
    },
    // Add more mock diseases as needed
  ];

  const filteredDiseases = mockDiseases.filter((disease) => {
    const matchesCategory =
      selectedCategory === 'all' || disease.category === selectedCategory;
    const matchesSearch =
      disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      disease.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex grow flex-col py-8">
      {/* Breadcrumb */}
      <div className="breadcrumbs text-sm mb-4">
        <ul>
          <li>
            <a href="/">首页</a>
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
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Disease List */}
          <div className="space-y-4">
            {filteredDiseases.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-base-content/60">暂无相关疾病信息</p>
              </div>
            ) : (
              filteredDiseases.map((disease) => (
                <a
                  key={disease.id}
                  href={`/diseases/${disease.id}`}
                  className="card bg-base-200 hover:bg-base-300 transition-colors"
                >
                  <div className="card-body">
                    <h3 className="card-title">{disease.name}</h3>
                    <p className="text-sm text-base-content/70">
                      {disease.nameEn}
                    </p>
                    <p className="text-sm mt-2">{disease.description}</p>
                    <div className="card-actions justify-end mt-2">
                      <div className="badge badge-outline">
                        患病率: {disease.prevalence}
                      </div>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { Globe, Mail, Phone, Search } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/charity/')({
  component: CharityListPage,
});

function CharityListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Mock data
  const types = [
    { id: 'all', name: '全部类型' },
    { id: 'patient-org', name: '患者组织' },
    { id: 'foundation', name: '基金会' },
    { id: 'volunteer', name: '志愿者团队' },
  ];

  const mockOrganizations = [
    {
      id: '1',
      name: '中国罕见病联盟',
      type: 'foundation',
      description: '致力于推动罕见病事业发展，为患者提供支持和帮助',
      services: '政策倡导、患者援助、医学研究支持',
      phone: '010-12345678',
      email: 'contact@raredisease.cn',
      website: 'https://www.raredisease.cn',
    },
    {
      id: '2',
      name: '瓷娃娃罕见病关爱中心',
      type: 'patient-org',
      description: '专注于成骨不全症等罕见病患者关爱',
      services: '患者互助、心理支持、医疗信息咨询',
      phone: '010-87654321',
      email: 'info@chinadolls.org',
      website: 'https://www.chinadolls.org',
    },
  ];

  const filteredOrganizations = mockOrganizations.filter((org) => {
    const matchesType = selectedType === 'all' || org.type === selectedType;
    const matchesSearch = org.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="flex grow flex-col py-8">
      {/* Breadcrumb */}
      <div className="breadcrumbs text-sm mb-4">
        <ul>
          <li>
            <a href="/">首页</a>
          </li>
          <li>公益组织</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-6">罕见病公益组织</h1>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar - Type Filter */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title text-lg">组织类型</h2>
              <ul className="menu menu-sm">
                {types.map((type) => (
                  <li key={type.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={selectedType === type.id ? 'active' : ''}
                    >
                      {type.name}
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
                placeholder="搜索组织名称..."
                className="input input-bordered join-item w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="btn btn-primary join-item">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Organization List */}
          <div className="space-y-4">
            {filteredOrganizations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-base-content/60">暂无相关组织信息</p>
              </div>
            ) : (
              filteredOrganizations.map((org) => (
                <a
                  key={org.id}
                  href={`/charity/${org.id}`}
                  className="card bg-base-200 hover:bg-base-300 transition-colors"
                >
                  <div className="card-body">
                    <h3 className="card-title">{org.name}</h3>
                    <p className="text-sm text-base-content/70 mt-2">
                      {org.description}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm">
                        <span className="text-base-content/60">服务内容：</span>
                        <span className="ml-2">{org.services}</span>
                      </p>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      {org.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-base-content/60" />
                          <span>{org.phone}</span>
                        </div>
                      )}
                      {org.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-base-content/60" />
                          <span>{org.email}</span>
                        </div>
                      )}
                      {org.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-base-content/60" />
                          <span>{org.website}</span>
                        </div>
                      )}
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

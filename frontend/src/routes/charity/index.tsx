import { createFileRoute } from '@tanstack/react-router';
import { Globe, Mail, Phone, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCharityOrganizations } from '@/hooks/useCharityOrganizations';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/charity/')({
  component: CharityListPage,
});

function CharityListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Fetch charity organizations with filters
  const { data: organizationsData, isLoading } = useCharityOrganizations({
    type: selectedType !== 'all' ? selectedType : undefined,
    search: debouncedSearch || undefined,
  });

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const organizations = organizationsData?.data || [];

  const types = [
    { id: 'all', name: '全部类型' },
    { id: 'patient_org', name: '患者组织' },
    { id: 'foundation', name: '基金会' },
    { id: 'volunteer', name: '志愿者团队' },
  ];

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
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="card bg-base-200">
                    <div className="card-body">
                      <div className="skeleton h-6 w-3/4"></div>
                      <div className="skeleton h-4 w-full mt-2"></div>
                      <div className="skeleton h-4 w-2/3 mt-4"></div>
                      <div className="skeleton h-4 w-1/2 mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : organizations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-base-content/60">暂无相关组织信息</p>
              </div>
            ) : (
              organizations.map((org) => (
                <Link
                  key={org.id}
                  to="/charity/$id"
                  params={{ id: org.id.toString() }}
                  className="card bg-base-200 hover:bg-base-300 transition-colors block"
                >
                  <div className="card-body">
                    <h3 className="card-title">{org.name}</h3>
                    {org.description && (
                      <p className="text-sm text-base-content/70 mt-2">
                        {org.description
                          .replace(/<[^>]*>/g, '')
                          .substring(0, 150)}
                        ...
                      </p>
                    )}
                    {org.services && (
                      <div className="mt-4">
                        <p className="text-sm">
                          <span className="text-base-content/60">
                            服务内容：
                          </span>
                          <span className="ml-2">{org.services}</span>
                        </p>
                      </div>
                    )}
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
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

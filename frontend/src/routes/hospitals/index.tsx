import { createFileRoute } from '@tanstack/react-router';
import { MapPin, Phone, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useHospitals } from '@/hooks/useHospitals';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/hospitals/')({
  component: HospitalsListPage,
});

function HospitalsListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Fetch hospitals with filters
  const { data: hospitalsData, isLoading } = useHospitals({
    province: selectedProvince !== 'all' ? selectedProvince : undefined,
    search: debouncedSearch || undefined,
  });

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Extract unique provinces from hospitals
  const hospitals = hospitalsData?.data || [];
  const provinces = [
    { id: 'all', name: '全部地区' },
    ...Array.from(new Set(hospitals.map((h) => h.province)))
      .filter(Boolean)
      .map((province) => ({ id: province, name: province })),
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
          <li>医院列表</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-6">罕见病诊疗医院</h1>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar - Province Filter */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title text-lg">地区筛选</h2>
              <ul className="menu menu-sm">
                {provinces.map((province) => (
                  <li key={province.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedProvince(province.id)}
                      className={
                        selectedProvince === province.id ? 'active' : ''
                      }
                    >
                      {province.name}
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
                placeholder="搜索医院名称..."
                className="input input-bordered join-item w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="btn btn-primary join-item">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Hospital List */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="card bg-base-200">
                    <div className="card-body">
                      <div className="skeleton h-6 w-3/4"></div>
                      <div className="skeleton h-4 w-1/4 mt-2"></div>
                      <div className="skeleton h-4 w-full mt-4"></div>
                      <div className="skeleton h-4 w-2/3 mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : hospitals.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-base-content/60">暂无相关医院信息</p>
              </div>
            ) : (
              hospitals.map((hospital) => (
                <Link
                  key={hospital.id}
                  to="/hospitals/$id"
                  params={{ id: hospital.id.toString() }}
                  className="card bg-base-200 hover:bg-base-300 transition-colors block"
                >
                  <div className="card-body">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="card-title">{hospital.name}</h3>
                        {hospital.level && (
                          <div className="badge badge-primary mt-2">
                            {hospital.level === 'three_a'
                              ? '三甲'
                              : hospital.level === 'three_b'
                                ? '三乙'
                                : hospital.level === 'two_a'
                                  ? '二甲'
                                  : hospital.level === 'two_b'
                                    ? '二乙'
                                    : hospital.level}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-base-content/60" />
                        <span>{hospital.address}</span>
                      </div>
                      {hospital.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-base-content/60" />
                          <span>{hospital.phone}</span>
                        </div>
                      )}
                      {hospital.specialties && (
                        <div>
                          <span className="text-base-content/60">
                            特色专科：
                          </span>
                          <span className="ml-2">{hospital.specialties}</span>
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

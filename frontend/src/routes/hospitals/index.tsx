import { createFileRoute } from '@tanstack/react-router';
import { MapPin, Phone, Search } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/hospitals/')({
  component: HospitalsListPage,
});

function HospitalsListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('all');

  // Mock data
  const provinces = [
    { id: 'all', name: '全部地区' },
    { id: 'beijing', name: '北京' },
    { id: 'shanghai', name: '上海' },
    { id: 'guangdong', name: '广东' },
    { id: 'zhejiang', name: '浙江' },
  ];

  const mockHospitals = [
    {
      id: '1',
      name: '北京协和医院',
      level: '三甲',
      province: 'beijing',
      city: '北京',
      address: '北京市东城区帅府园一号',
      phone: '010-69156114',
      specialties: '神经内科、血液科、内分泌科',
    },
    {
      id: '2',
      name: '上海交通大学医学院附属瑞金医院',
      level: '三甲',
      province: 'shanghai',
      city: '上海',
      address: '上海市黄浦区瑞金二路197号',
      phone: '021-64370045',
      specialties: '血液科、内分泌科、神经内科',
    },
  ];

  const filteredHospitals = mockHospitals.filter((hospital) => {
    const matchesProvince =
      selectedProvince === 'all' || hospital.province === selectedProvince;
    const matchesSearch = hospital.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesProvince && matchesSearch;
  });

  return (
    <div className="flex grow flex-col py-8">
      {/* Breadcrumb */}
      <div className="breadcrumbs text-sm mb-4">
        <ul>
          <li>
            <a href="/">首页</a>
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
            {filteredHospitals.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-base-content/60">暂无相关医院信息</p>
              </div>
            ) : (
              filteredHospitals.map((hospital) => (
                <a
                  key={hospital.id}
                  href={`/hospitals/${hospital.id}`}
                  className="card bg-base-200 hover:bg-base-300 transition-colors"
                >
                  <div className="card-body">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="card-title">{hospital.name}</h3>
                        <div className="badge badge-primary mt-2">
                          {hospital.level}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-base-content/60" />
                        <span>{hospital.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-base-content/60" />
                        <span>{hospital.phone}</span>
                      </div>
                      <div>
                        <span className="text-base-content/60">特色专科：</span>
                        <span className="ml-2">{hospital.specialties}</span>
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

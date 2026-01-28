import { createFileRoute } from '@tanstack/react-router';
import { useHospital } from '@/hooks/useHospitals';
import { Link } from '@tanstack/react-router';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Globe,
  Building,
  Navigation,
} from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';

export const Route = createFileRoute('/hospitals/$id')({
  component: HospitalDetailPage,
});

function HospitalDetailPage() {
  const { id } = Route.useParams();
  const { data: hospitalData, isLoading, error } = useHospital(id);
  const hospital = hospitalData?.data;

  if (isLoading) {
    return (
      <div className="flex grow flex-col py-8">
        <div className="breadcrumbs text-sm mb-4">
          <ul>
            <li>
              <Link to="/" className="link link-hover">
                首页
              </Link>
            </li>
            <li>
              <Link to="/hospitals" className="link link-hover">
                医院列表
              </Link>
            </li>
            <li>
              <div className="skeleton h-4 w-32"></div>
            </li>
          </ul>
        </div>
        <div className="skeleton h-10 w-3/4 mb-6"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="skeleton h-6 w-1/4"></div>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-6 w-1/4"></div>
              <div className="skeleton h-32 w-full"></div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="card bg-base-200">
              <div className="card-body">
                <div className="skeleton h-6 w-1/2"></div>
                <div className="skeleton h-4 w-full mt-4"></div>
                <div className="skeleton h-4 w-2/3 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !hospital) {
    return (
      <div className="flex grow flex-col py-8">
        <div className="breadcrumbs text-sm mb-4">
          <ul>
            <li>
              <Link to="/" className="link link-hover">
                首页
              </Link>
            </li>
            <li>
              <Link to="/hospitals" className="link link-hover">
                医院列表
              </Link>
            </li>
          </ul>
        </div>
        <div className="alert alert-error">
          <span>医院信息未找到或加载失败</span>
        </div>
        <Link to="/hospitals" className="btn btn-primary mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回医院列表
        </Link>
      </div>
    );
  }

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
          <li>
            <Link to="/hospitals" className="link link-hover">
              医院列表
            </Link>
          </li>
          <li>{hospital.name}</li>
        </ul>
      </div>

      {/* Back Button */}
      <Link to="/hospitals" className="btn btn-ghost btn-sm mb-6 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回列表
      </Link>

      {/* Hospital Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{hospital.name}</h1>
            {hospital.level && (
              <div className="badge badge-primary text-lg">
                {hospital.level === 'three_a'
                  ? '三甲医院'
                  : hospital.level === 'three_b'
                    ? '三乙医院'
                    : hospital.level === 'two_a'
                      ? '二甲医院'
                      : hospital.level === 'two_b'
                        ? '二乙医院'
                        : hospital.level}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Contact Info */}
          <div className="card bg-base-200 mb-6">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">联系信息</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-base-content/60" />
                  <div>
                    <span className="font-medium">地址：</span>
                    <span>{hospital.address}</span>
                    {hospital.province && hospital.city && (
                      <span className="text-base-content/60 ml-2">
                        ({hospital.province} {hospital.city})
                      </span>
                    )}
                  </div>
                </div>

                {hospital.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">电话：</span>
                      <a
                        href={`tel:${hospital.phone}`}
                        className="link link-hover"
                      >
                        {hospital.phone}
                      </a>
                    </div>
                  </div>
                )}

                {hospital.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">网站：</span>
                      <a
                        href={hospital.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover"
                      >
                        {hospital.website}
                      </a>
                    </div>
                  </div>
                )}

                {/* Map Link */}
                {hospital.location && (
                  <div className="flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">导航：</span>
                      <a
                        href={`https://maps.google.com/?q=${hospital.location.lat},${hospital.location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover ml-2"
                      >
                        查看地图位置
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Specialties */}
          {hospital.specialties && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">特色专科</h2>
                <SafeHTMLRenderer html={hospital.specialties} />
              </div>
            </div>
          )}

          {/* Departments */}
          {hospital.departments && hospital.departments.length > 0 && (
            <div className="card bg-base-200">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">相关科室</h2>
                <div className="space-y-4">
                  {hospital.departments.map((dept) => (
                    <div key={dept.id} className="p-4 bg-base-100 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{dept.name}</h3>
                      {dept.description && (
                        <div className="mb-3">
                          <SafeHTMLRenderer html={dept.description} />
                        </div>
                      )}
                      {dept.expertDoctors && (
                        <div className="mb-2">
                          <span className="font-medium">专家医生：</span>
                          <span>{dept.expertDoctors}</span>
                        </div>
                      )}
                      {dept.appointmentUrl && (
                        <a
                          href={dept.appointmentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm mt-2"
                        >
                          预约挂号
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Related Diseases */}
          {hospital.diseases && hospital.diseases.length > 0 && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">
                  <Building className="h-5 w-5 mr-2" />
                  擅长疾病
                </h3>
                <div className="space-y-3">
                  {hospital.diseases.map((disease) => (
                    <Link
                      key={disease.id}
                      to="/diseases/$slug"
                      params={{ slug: disease.slug }}
                      className="block p-3 bg-base-100 rounded-lg hover:bg-base-300 transition-colors"
                    >
                      <div className="font-medium">{disease.name}</div>
                      {disease.category && (
                        <div className="text-sm text-base-content/60 mt-1">
                          {disease.category.name}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-lg mb-4">快速操作</h3>
              <div className="space-y-3">
                {hospital.phone && (
                  <a
                    href={`tel:${hospital.phone}`}
                    className="btn btn-primary w-full"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    电话咨询
                  </a>
                )}
                {hospital.website && (
                  <a
                    href={hospital.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    访问官网
                  </a>
                )}
                {hospital.location && (
                  <a
                    href={`https://maps.google.com/?q=${hospital.location.lat},${hospital.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    查看地图
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

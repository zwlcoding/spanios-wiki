import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowLeft,
  Building,
  ExternalLink,
  Globe,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';
import { useHospital } from '@/hooks/useHospitals';
import { fetchHospitalById } from '@/lib/contentClient';

export const Route = createFileRoute('/hospitals/$id')({
  loader: async ({ context, params }) => {
    await context.queryClient.prefetchQuery({
      queryKey: ['hospital', params.id],
      queryFn: () => fetchHospitalById(params.id),
    });
  },
  component: HospitalDetailPage,
});

function HospitalDetailPage() {
  const { id } = Route.useParams();
  const { data: hospitalData, isLoading, error } = useHospital(id);
  const hospital = hospitalData?.data;

  if (isLoading) {
    return (
      <div className="page-container">
        <div className="mb-6 h-4 w-48 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
        <div className="surface-card mb-8 p-6">
          <div className="h-9 w-72 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
          <div className="mt-4 h-6 w-24 animate-pulse rounded-full bg-stone-200 dark:bg-stone-700" />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="content-card h-56 animate-pulse" />
          </div>
          <div className="lg:col-span-1">
            <div className="content-card h-56 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !hospital) {
    return (
      <div className="page-container">
        <nav className="muted-text mb-4 flex items-center gap-2 text-sm">
          <Link to="/" className="hover:text-amber-700">
            首页
          </Link>
          <span>/</span>
          <Link to="/hospitals" className="hover:text-amber-700">
            医院列表
          </Link>
        </nav>
        <div className="surface-card p-5">
          <span>医院信息未找到或加载失败</span>
        </div>
        <Link to="/hospitals" className="btn-primary-app mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回医院列表
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <nav className="muted-text mb-4 flex flex-wrap items-center gap-2 text-sm">
        <Link to="/" className="hover:text-amber-700">
          首页
        </Link>
        <span>/</span>
        <Link to="/hospitals" className="hover:text-amber-700">
          医院列表
        </Link>
        <span>/</span>
        <span className="strong-text">{hospital.name}</span>
      </nav>

      <Link to="/hospitals" className="btn-subtle mb-5 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回列表
      </Link>

      <div className="surface-card mb-8 p-6 sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="eyebrow mb-4">
              <Building className="h-4 w-4" />
              就医信息
            </div>
            <h1 className="section-title text-3xl sm:text-4xl">
              {hospital.name}
            </h1>
            <p className="section-copy mt-2">
              {hospital.province} {hospital.city}
            </p>
          </div>
          {hospital.level && (
            <div className="badge-warm self-start">
              {formatHospitalLevel(hospital.level)}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="content-card mb-5 p-5">
            <h2 className="mb-4 font-semibold">联系信息</h2>
            <div className="grid gap-3">
              <InfoRow icon={MapPin} label="地址">
                <span>{hospital.address}</span>
                {hospital.province && hospital.city && (
                  <span className="muted-text ml-2">
                    ({hospital.province} {hospital.city})
                  </span>
                )}
              </InfoRow>

              {hospital.phone && (
                <InfoRow icon={Phone} label="电话">
                  <a href={`tel:${hospital.phone}`} className="text-amber-700">
                    {hospital.phone}
                  </a>
                </InfoRow>
              )}

              {hospital.website && (
                <InfoRow icon={Globe} label="网站">
                  <a
                    href={hospital.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 break-all text-amber-700"
                  >
                    {hospital.website}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </InfoRow>
              )}

              {hospital.location && (
                <InfoRow icon={Navigation} label="导航">
                  <a
                    href={mapUrl(hospital)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-700"
                  >
                    查看地图位置
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </InfoRow>
              )}
            </div>
          </div>

          {hospital.specialties && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold">公开科室信息</h2>
              <SafeHTMLRenderer
                html={hospital.specialties}
                className="content-prose"
              />
            </div>
          )}

          {hospital.departments && hospital.departments.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-4 font-semibold">相关科室</h2>
              <div className="grid gap-3">
                {hospital.departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="rounded-md border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-900/30"
                  >
                    <h3 className="font-semibold">{dept.name}</h3>
                    {dept.description && (
                      <SafeHTMLRenderer
                        html={dept.description}
                        className="content-prose mt-2 text-sm"
                      />
                    )}
                    {dept.expertDoctors && (
                      <p className="muted-text mt-3 text-sm">
                        <span className="strong-text font-medium">
                          公开团队信息：
                        </span>
                        {dept.expertDoctors}
                      </p>
                    )}
                    {dept.appointmentUrl && (
                      <a
                        href={dept.appointmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-subtle mt-3"
                      >
                        预约挂号
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {hospital.services && hospital.services.length > 0 && (
            <div className="content-card p-5">
              <h2 className="mb-2 font-semibold">科室/服务与疾病关系</h2>
              <p className="muted-text mb-4 text-sm">
                以下基于公开资料整理为就医信息参考，不构成医院推荐或疗效背书。
              </p>
              <div className="grid gap-3">
                {hospital.services.map((service) => (
                  <div
                    key={service.id}
                    className="rounded-md border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-900/30"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">
                        {service.departmentName}
                      </h3>
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                        {formatHospitalServiceStage(service.stage)}
                      </span>
                    </div>
                    {service.serviceName && (
                      <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
                        {service.serviceName}
                      </p>
                    )}
                    {service.diseases && service.diseases.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.diseases.map((disease) => (
                          <Link
                            key={disease.id}
                            to="/diseases/$slug"
                            params={{ slug: disease.slug }}
                            className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs transition hover:border-amber-300 hover:text-amber-700 dark:border-stone-700 dark:bg-stone-950"
                          >
                            {disease.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {service.notes && (
                      <p className="muted-text mt-3 text-sm">{service.notes}</p>
                    )}
                    {(service.evidenceUrl || service.sourceUrl) && (
                      <a
                        href={service.evidenceUrl ?? service.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-amber-700"
                      >
                        查看公开来源
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          {hospital.diseases && hospital.diseases.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Building className="h-5 w-5 text-amber-700" />
                相关疾病信息
              </h3>
              <div className="space-y-3">
                {hospital.diseases.map((disease) => (
                  <Link
                    key={disease.id}
                    to="/diseases/$slug"
                    params={{ slug: disease.slug }}
                    className="block rounded-md border border-stone-200 bg-white p-3 transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                  >
                    <div className="font-medium">{disease.name}</div>
                    {disease.category && (
                      <div className="muted-text mt-1 text-sm">
                        {disease.category.name}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="content-card p-5">
            <h3 className="mb-4 font-semibold">快速操作</h3>
            <div className="grid gap-3">
              {hospital.phone && (
                <a href={`tel:${hospital.phone}`} className="btn-primary-app">
                  <Phone className="h-4 w-4" />
                  联系电话
                </a>
              )}
              {hospital.website && (
                <a
                  href={hospital.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-subtle"
                >
                  <Globe className="h-4 w-4" />
                  访问官网
                </a>
              )}
              {hospital.location && (
                <a
                  href={mapUrl(hospital)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-subtle"
                >
                  <Navigation className="h-4 w-4" />
                  查看地图
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  children,
  icon: Icon,
  label,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
      <div className="min-w-0 text-sm">
        <span className="font-semibold">{label}：</span>
        {children}
      </div>
    </div>
  );
}

function formatHospitalLevel(level: string) {
  const labels: Record<string, string> = {
    secondary_a: '二甲医院',
    secondary_b: '二乙医院',
    tertiary_a: '三甲医院',
    tertiary_b: '三乙医院',
  };

  return labels[level] ?? level;
}

function formatHospitalServiceStage(stage?: string) {
  const labels: Record<string, string> = {
    diagnosis: '诊断评估',
    'follow-up': '长期随访',
    'genetic-counseling': '遗传咨询',
    treatment: '治疗管理',
  };

  return stage ? (labels[stage] ?? stage) : '就医信息参考';
}

function mapUrl(hospital: {
  location?: {
    lat: number;
    lng: number;
  };
}) {
  if (!hospital.location) {
    return '#';
  }

  return `https://maps.google.com/?q=${hospital.location.lat},${hospital.location.lng}`;
}

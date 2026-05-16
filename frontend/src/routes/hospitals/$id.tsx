import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Building, ExternalLink } from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';
import {
  HospitalContactSection,
  HospitalHeader,
  HospitalQuickActions,
  HospitalServicesSection,
} from '@/components/hospital';
import { useHospital } from '@/hooks/useHospitals';
import { fetchHospitalById } from '@/lib/contentClient';
import { trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

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
            {uiText('首页', 'Home')}
          </Link>
          <span>/</span>
          <Link to="/hospitals" className="hover:text-amber-700">
            {uiText('就医资源', 'Care Resources')}
          </Link>
        </nav>
        <div className="surface-card p-5">
          <span>
            {uiText(
              '就医资源未找到或加载失败',
              'Care resource was not found or failed to load',
            )}
          </span>
        </div>
        <Link to="/hospitals" className="btn-primary-app mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {uiText('返回就医资源', 'Back to Care Resources')}
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <nav className="muted-text mb-4 flex flex-wrap items-center gap-2 text-sm">
        <Link to="/" className="hover:text-amber-700">
          {uiText('首页', 'Home')}
        </Link>
        <span>/</span>
        <Link to="/hospitals" className="hover:text-amber-700">
          {uiText('就医资源', 'Care Resources')}
        </Link>
        <span>/</span>
        <span className="strong-text">{hospital.name}</span>
      </nav>

      <Link to="/hospitals" className="btn-subtle mb-5 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {uiText('返回列表', 'Back to List')}
      </Link>

      <HospitalHeader
        city={hospital.city}
        level={hospital.level}
        name={hospital.name}
        province={hospital.province}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <HospitalContactSection
            address={hospital.address}
            city={hospital.city}
            hospitalId={hospital.id}
            location={hospital.location}
            phone={hospital.phone}
            province={hospital.province}
            website={hospital.website}
          />

          {hospital.specialties && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold">
                {uiText('公开资源说明', 'Public Resource Notes')}
              </h2>
              <SafeHTMLRenderer
                html={hospital.specialties}
                className="content-prose"
              />
            </div>
          )}

          {hospital.departments && hospital.departments.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-4 font-semibold">
                {uiText('相关科室', 'Related Departments')}
              </h2>
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
                          {uiText('公开团队信息：', 'Public team info:')}
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
                        onClick={() =>
                          trackEvent('hospital_appointment_click', {
                            department_id: dept.id,
                            hospital_id: hospital.id,
                            province: hospital.province,
                          })
                        }
                      >
                        {uiText('预约挂号', 'Book Appointment')}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <HospitalServicesSection
            hospitalId={hospital.id}
            services={hospital.services ?? []}
          />
        </div>

        <div className="lg:col-span-1">
          {hospital.diseases && hospital.diseases.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Building className="h-5 w-5 text-amber-700" />
                {uiText('相关疾病信息', 'Related Diseases')}
              </h3>
              <div className="space-y-3">
                {hospital.diseases.map((disease) => (
                  <Link
                    key={disease.id}
                    to="/diseases/$slug"
                    params={{ slug: disease.slug }}
                    className="block rounded-md border border-stone-200 bg-white p-3 transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                    onClick={() =>
                      trackEvent('related_disease_click', {
                        disease_slug: disease.slug,
                        source_id: hospital.id,
                        source_page: 'hospital_detail',
                      })
                    }
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

          <HospitalQuickActions
            hospitalId={hospital.id}
            location={hospital.location}
            phone={hospital.phone}
            province={hospital.province}
            website={hospital.website}
          />
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowLeft,
  Building2,
  ExternalLink,
  Globe,
  Heart,
  Mail,
  Phone,
  Users,
} from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';
import { useCharityOrganization } from '@/hooks/useCharityOrganizations';
import { fetchCharityOrganizationById } from '@/lib/contentClient';

export const Route = createFileRoute('/charity/$id')({
  loader: async ({ context, params }) => {
    await context.queryClient.prefetchQuery({
      queryKey: ['charityOrganization', params.id],
      queryFn: () => fetchCharityOrganizationById(params.id),
    });
  },
  component: CharityDetailPage,
});

function CharityDetailPage() {
  const { id } = Route.useParams();
  const { data: orgData, isLoading, error } = useCharityOrganization(id);
  const organization = orgData?.data;

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

  if (error || !organization) {
    return (
      <div className="page-container">
        <nav className="muted-text mb-4 flex items-center gap-2 text-sm">
          <Link to="/" className="hover:text-amber-700">
            首页
          </Link>
          <span>/</span>
          <Link to="/charity" className="hover:text-amber-700">
            公益组织
          </Link>
        </nav>
        <div className="surface-card p-5">
          <span>组织信息未找到或加载失败</span>
        </div>
        <Link to="/charity" className="btn-primary-app mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回组织列表
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
        <Link to="/charity" className="hover:text-amber-700">
          公益组织
        </Link>
        <span>/</span>
        <span className="strong-text">{organization.name}</span>
      </nav>

      <Link to="/charity" className="btn-subtle mb-5 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回列表
      </Link>

      <div className="surface-card mb-8 p-6 sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="eyebrow mb-4">
              <Heart className="h-4 w-4" />
              公益资源
            </div>
            <h1 className="section-title text-3xl sm:text-4xl">
              {organization.name}
            </h1>
            {organization.type && (
              <p className="section-copy mt-2">
                {formatOrganizationType(organization.type)}
              </p>
            )}
          </div>
          {organization.type && (
            <div className="badge-warm self-start">
              {formatOrganizationType(organization.type)}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {organization.description && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 flex items-center gap-2 font-semibold">
                <Heart className="h-5 w-5 text-amber-700" />
                组织简介
              </h2>
              <SafeHTMLRenderer
                html={organization.description}
                className="content-prose"
              />
            </div>
          )}

          {organization.services && (
            <div className="content-card p-5">
              <h2 className="mb-3 flex items-center gap-2 font-semibold">
                <Users className="h-5 w-5 text-amber-700" />
                服务内容
              </h2>
              <SafeHTMLRenderer
                html={organization.services}
                className="content-prose"
              />
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="content-card mb-5 p-5">
            <h3 className="mb-4 font-semibold">联系信息</h3>
            <div className="grid gap-3">
              {organization.contactPerson && (
                <InfoRow icon={Users} label="联系人">
                  {organization.contactPerson}
                </InfoRow>
              )}

              {organization.phone && (
                <InfoRow icon={Phone} label="电话">
                  <a
                    href={`tel:${organization.phone}`}
                    className="text-amber-700"
                  >
                    {organization.phone}
                  </a>
                </InfoRow>
              )}

              {organization.email && (
                <InfoRow icon={Mail} label="邮箱">
                  <a
                    href={`mailto:${organization.email}`}
                    className="break-all text-amber-700"
                  >
                    {organization.email}
                  </a>
                </InfoRow>
              )}

              {organization.website && (
                <InfoRow icon={Globe} label="网站">
                  <a
                    href={organization.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 break-all text-amber-700"
                  >
                    {organization.website}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </InfoRow>
              )}

              {organization.wechat && (
                <InfoRow icon={Building2} label="微信">
                  {organization.wechat}
                </InfoRow>
              )}
            </div>
          </div>

          {organization.diseases && organization.diseases.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Heart className="h-5 w-5 text-amber-700" />
                关注疾病
              </h3>
              <div className="space-y-3">
                {organization.diseases.map((disease) => (
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
            <h3 className="mb-4 font-semibold">快速联系</h3>
            <div className="grid gap-3">
              {organization.phone && (
                <a
                  href={`tel:${organization.phone}`}
                  className="btn-primary-app"
                >
                  <Phone className="h-4 w-4" />
                  电话联系
                </a>
              )}
              {organization.email && (
                <a href={`mailto:${organization.email}`} className="btn-subtle">
                  <Mail className="h-4 w-4" />
                  发送邮件
                </a>
              )}
              {organization.website && (
                <a
                  href={organization.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-subtle"
                >
                  <Globe className="h-4 w-4" />
                  访问网站
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

function formatOrganizationType(type?: string) {
  const labels: Record<string, string> = {
    foundation: '基金会',
    patient_org: '患者组织',
    volunteer_team: '志愿者团队',
  };

  return type ? (labels[type] ?? type) : '未知类型';
}

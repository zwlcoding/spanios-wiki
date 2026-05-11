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
import { trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

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
            {uiText('首页', 'Home')}
          </Link>
          <span>/</span>
          <Link to="/charity" className="hover:text-amber-700">
            {uiText('公益组织', 'Support Groups')}
          </Link>
        </nav>
        <div className="surface-card p-5">
          <span>
            {uiText(
              '组织信息未找到或加载失败',
              'Organization information was not found or failed to load',
            )}
          </span>
        </div>
        <Link to="/charity" className="btn-primary-app mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {uiText('返回组织列表', 'Back to Organizations')}
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
        <Link to="/charity" className="hover:text-amber-700">
          {uiText('公益组织', 'Support Groups')}
        </Link>
        <span>/</span>
        <span className="strong-text">{organization.name}</span>
      </nav>

      <Link to="/charity" className="btn-subtle mb-5 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        {uiText('返回列表', 'Back to List')}
      </Link>

      <div className="surface-card mb-8 p-6 sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="eyebrow mb-4">
              <Heart className="h-4 w-4" />
              {uiText('公益资源', 'Support Resource')}
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
                {uiText('组织简介', 'Organization Overview')}
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
                {uiText('服务内容', 'Services')}
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
            <h3 className="mb-4 font-semibold">
              {uiText('联系信息', 'Contact Information')}
            </h3>
            <div className="grid gap-3">
              {organization.contactPerson && (
                <InfoRow icon={Users} label={uiText('联系人', 'Contact')}>
                  {organization.contactPerson}
                </InfoRow>
              )}

              {organization.phone && (
                <InfoRow icon={Phone} label={uiText('电话', 'Phone')}>
                  <a
                    href={`tel:${organization.phone}`}
                    className="text-amber-700"
                    onClick={() =>
                      trackEvent('charity_phone_click', {
                        charity_id: organization.id,
                        source: 'contact_info',
                        type: organization.type,
                      })
                    }
                  >
                    {organization.phone}
                  </a>
                </InfoRow>
              )}

              {organization.email && (
                <InfoRow icon={Mail} label={uiText('邮箱', 'Email')}>
                  <a
                    href={`mailto:${organization.email}`}
                    className="break-all text-amber-700"
                    onClick={() =>
                      trackEvent('charity_email_click', {
                        charity_id: organization.id,
                        source: 'contact_info',
                        type: organization.type,
                      })
                    }
                  >
                    {organization.email}
                  </a>
                </InfoRow>
              )}

              {organization.website && (
                <InfoRow icon={Globe} label={uiText('网站', 'Website')}>
                  <a
                    href={organization.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 break-all text-amber-700"
                    onClick={() =>
                      trackEvent('charity_website_click', {
                        charity_id: organization.id,
                        source: 'contact_info',
                        type: organization.type,
                      })
                    }
                  >
                    {organization.website}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </InfoRow>
              )}

              {organization.wechat && (
                <InfoRow icon={Building2} label={uiText('微信', 'WeChat')}>
                  {organization.wechat}
                </InfoRow>
              )}
            </div>
          </div>

          {organization.diseases && organization.diseases.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Heart className="h-5 w-5 text-amber-700" />
                {uiText('关注疾病', 'Focus Diseases')}
              </h3>
              <div className="space-y-3">
                {organization.diseases.map((disease) => (
                  <Link
                    key={disease.id}
                    to="/diseases/$slug"
                    params={{ slug: disease.slug }}
                    className="block rounded-md border border-stone-200 bg-white p-3 transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                    onClick={() =>
                      trackEvent('related_disease_click', {
                        disease_slug: disease.slug,
                        source_id: organization.id,
                        source_page: 'charity_detail',
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

          <div className="content-card p-5">
            <h3 className="mb-4 font-semibold">
              {uiText('快速联系', 'Quick Contact')}
            </h3>
            <div className="grid gap-3">
              {organization.phone && (
                <a
                  href={`tel:${organization.phone}`}
                  className="btn-primary-app"
                  onClick={() =>
                    trackEvent('charity_phone_click', {
                      charity_id: organization.id,
                      source: 'quick_action',
                      type: organization.type,
                    })
                  }
                >
                  <Phone className="h-4 w-4" />
                  {uiText('电话联系', 'Call')}
                </a>
              )}
              {organization.email && (
                <a
                  href={`mailto:${organization.email}`}
                  className="btn-subtle"
                  onClick={() =>
                    trackEvent('charity_email_click', {
                      charity_id: organization.id,
                      source: 'quick_action',
                      type: organization.type,
                    })
                  }
                >
                  <Mail className="h-4 w-4" />
                  {uiText('发送邮件', 'Send Email')}
                </a>
              )}
              {organization.website && (
                <a
                  href={organization.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-subtle"
                  onClick={() =>
                    trackEvent('charity_website_click', {
                      charity_id: organization.id,
                      source: 'quick_action',
                      type: organization.type,
                    })
                  }
                >
                  <Globe className="h-4 w-4" />
                  {uiText('访问网站', 'Visit Website')}
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
    foundation: uiText('基金会', 'Foundation'),
    patient_org: uiText('患者组织', 'Patient Group'),
    volunteer_team: uiText('志愿者团队', 'Volunteer Team'),
  };

  return type ? (labels[type] ?? type) : uiText('未知类型', 'Unknown Type');
}

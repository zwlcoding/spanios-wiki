import { createFileRoute } from '@tanstack/react-router';
import { useCharityOrganization } from '@/hooks/useCharityOrganizations';
import { Link } from '@tanstack/react-router';
import {
  ArrowLeft,
  Users,
  Phone,
  Mail,
  Globe,
  Heart,
  Building2,
} from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';

export const Route = createFileRoute('/charity/$id')({
  component: CharityDetailPage,
});

function CharityDetailPage() {
  const { id } = Route.useParams();
  const { data: orgData, isLoading, error } = useCharityOrganization(id);
  const organization = orgData?.data;

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
              <Link to="/charity" className="link link-hover">
                公益组织
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

  if (error || !organization) {
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
              <Link to="/charity" className="link link-hover">
                公益组织
              </Link>
            </li>
          </ul>
        </div>
        <div className="alert alert-error">
          <span>组织信息未找到或加载失败</span>
        </div>
        <Link to="/charity" className="btn btn-primary mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回组织列表
        </Link>
      </div>
    );
  }

  const getTypeName = (type?: string) => {
    switch (type) {
      case 'patient_org':
        return '患者组织';
      case 'foundation':
        return '基金会';
      case 'volunteer':
        return '志愿者团队';
      default:
        return type || '未知类型';
    }
  };

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
            <Link to="/charity" className="link link-hover">
              公益组织
            </Link>
          </li>
          <li>{organization.name}</li>
        </ul>
      </div>

      {/* Back Button */}
      <Link to="/charity" className="btn btn-ghost btn-sm mb-6 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回列表
      </Link>

      {/* Organization Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{organization.name}</h1>
            {organization.type && (
              <div className="badge badge-primary text-lg">
                {getTypeName(organization.type)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Description */}
          {organization.description && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">
                  <Heart className="h-5 w-5 mr-2" />
                  组织简介
                </h2>
                <SafeHTMLRenderer html={organization.description} />
              </div>
            </div>
          )}

          {/* Services */}
          {organization.services && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">
                  <Users className="h-5 w-5 mr-2" />
                  服务内容
                </h2>
                <SafeHTMLRenderer html={organization.services} />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Contact Info */}
          <div className="card bg-base-200 mb-6">
            <div className="card-body">
              <h3 className="card-title text-lg mb-4">联系信息</h3>
              <div className="space-y-4">
                {organization.contactPerson && (
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">联系人：</span>
                      <span>{organization.contactPerson}</span>
                    </div>
                  </div>
                )}

                {organization.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">电话：</span>
                      <a
                        href={`tel:${organization.phone}`}
                        className="link link-hover"
                      >
                        {organization.phone}
                      </a>
                    </div>
                  </div>
                )}

                {organization.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">邮箱：</span>
                      <a
                        href={`mailto:${organization.email}`}
                        className="link link-hover"
                      >
                        {organization.email}
                      </a>
                    </div>
                  </div>
                )}

                {organization.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">网站：</span>
                      <a
                        href={organization.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-hover"
                      >
                        {organization.website}
                      </a>
                    </div>
                  </div>
                )}

                {organization.wechat && (
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">微信：</span>
                      <span>{organization.wechat}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Diseases */}
          {organization.diseases && organization.diseases.length > 0 && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">
                  <Heart className="h-5 w-5 mr-2" />
                  关注疾病
                </h3>
                <div className="space-y-3">
                  {organization.diseases.map((disease) => (
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
              <h3 className="card-title text-lg mb-4">快速联系</h3>
              <div className="space-y-3">
                {organization.phone && (
                  <a
                    href={`tel:${organization.phone}`}
                    className="btn btn-primary w-full"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    电话联系
                  </a>
                )}
                {organization.email && (
                  <a
                    href={`mailto:${organization.email}`}
                    className="btn btn-outline w-full"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    发送邮件
                  </a>
                )}
                {organization.website && (
                  <a
                    href={organization.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    访问网站
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

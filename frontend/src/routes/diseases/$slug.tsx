import { createFileRoute } from '@tanstack/react-router';
import { useDisease } from '@/hooks/useDiseases';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Tag, Hospital, Users } from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';

export const Route = createFileRoute('/diseases/$slug')({
  component: DiseaseDetailPage,
});

function DiseaseDetailPage() {
  const { slug } = Route.useParams();
  const { data: diseaseData, isLoading, error } = useDisease(slug);
  const disease = diseaseData?.data;

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
              <Link to="/diseases" className="link link-hover">
                疾病列表
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

  if (error || !disease) {
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
              <Link to="/diseases" className="link link-hover">
                疾病列表
              </Link>
            </li>
          </ul>
        </div>
        <div className="alert alert-error">
          <span>疾病信息未找到或加载失败</span>
        </div>
        <Link to="/diseases" className="btn btn-primary mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回疾病列表
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
            <Link to="/diseases" className="link link-hover">
              疾病列表
            </Link>
          </li>
          <li>{disease.name}</li>
        </ul>
      </div>

      {/* Back Button */}
      <Link to="/diseases" className="btn btn-ghost btn-sm mb-6 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回列表
      </Link>

      {/* Disease Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{disease.name}</h1>
        {disease.nameEn && (
          <p className="text-lg text-base-content/70">{disease.nameEn}</p>
        )}
        {disease.alias && (
          <p className="text-sm text-base-content/60 mt-1">
            别名：{disease.alias}
          </p>
        )}
        {disease.icd10Code && (
          <p className="text-sm text-base-content/60 mt-1">
            ICD-10编码：{disease.icd10Code}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Basic Info */}
          <div className="card bg-base-200 mb-6">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">基本信息</h2>
              <div className="space-y-4">
                {disease.prevalence && (
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">患病率：</span>
                      <span>{disease.prevalence}</span>
                    </div>
                  </div>
                )}
                {disease.category && (
                  <div className="flex items-center gap-2">
                    <Tag className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">分类：</span>
                      <span>{disease.category.name}</span>
                    </div>
                  </div>
                )}
                {disease.createdAt && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-base-content/60" />
                    <div>
                      <span className="font-medium">更新时间：</span>
                      <span>
                        {new Date(disease.createdAt).toLocaleDateString(
                          'zh-CN',
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Symptoms */}
          {disease.symptoms && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">症状表现</h2>
                <SafeHTMLRenderer html={disease.symptoms} />
              </div>
            </div>
          )}

          {/* Diagnosis */}
          {disease.diagnosis && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">诊断方法</h2>
                <SafeHTMLRenderer html={disease.diagnosis} />
              </div>
            </div>
          )}

          {/* Treatment */}
          {disease.treatment && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">治疗方法</h2>
                <SafeHTMLRenderer html={disease.treatment} />
              </div>
            </div>
          )}

          {/* Prognosis */}
          {disease.prognosis && (
            <div className="card bg-base-200">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">预后情况</h2>
                <SafeHTMLRenderer html={disease.prognosis} />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Related Hospitals */}
          {disease.hospitals && disease.hospitals.length > 0 && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">
                  <Hospital className="h-5 w-5 mr-2" />
                  推荐医院
                </h3>
                <div className="space-y-3">
                  {disease.hospitals.map((hospital) => (
                    <Link
                      key={hospital.id}
                      to="/hospitals/$id"
                      params={{ id: hospital.id.toString() }}
                      className="block p-3 bg-base-100 rounded-lg hover:bg-base-300 transition-colors"
                    >
                      <div className="font-medium">{hospital.name}</div>
                      <div className="text-sm text-base-content/60 mt-1">
                        {hospital.province} {hospital.city}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Related Charity Organizations */}
          {disease.charityOrgs && disease.charityOrgs.length > 0 && (
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">
                  <Users className="h-5 w-5 mr-2" />
                  相关公益组织
                </h3>
                <div className="space-y-3">
                  {disease.charityOrgs.map((org) => (
                    <Link
                      key={org.id}
                      to="/charity/$id"
                      params={{ id: org.id.toString() }}
                      className="block p-3 bg-base-100 rounded-lg hover:bg-base-300 transition-colors"
                    >
                      <div className="font-medium">{org.name}</div>
                      <div className="text-sm text-base-content/60 mt-1">
                        {org.type === 'patient_org'
                          ? '患者组织'
                          : org.type === 'foundation'
                            ? '基金会'
                            : org.type === 'volunteer'
                              ? '志愿者团队'
                              : org.type}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          {disease.tags && disease.tags.length > 0 && (
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title text-lg mb-4">
                  <Tag className="h-5 w-5 mr-2" />
                  相关标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {disease.tags.map((tag) => (
                    <span key={tag.id} className="badge badge-outline">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

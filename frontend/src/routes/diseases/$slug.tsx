import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowLeft,
  AlertTriangle,
  BookOpenCheck,
  Calendar,
  ClipboardCheck,
  Compass,
  ExternalLink,
  HelpCircle,
  Hospital,
  ListChecks,
  Stethoscope,
  Tag,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';
import { useDisease } from '@/hooks/useDiseases';
import { fetchDiseaseBySlug } from '@/lib/contentClient';

export const Route = createFileRoute('/diseases/$slug')({
  loader: async ({ context, params }) => {
    await context.queryClient.prefetchQuery({
      queryKey: ['disease', params.slug],
      queryFn: () => fetchDiseaseBySlug(params.slug),
    });
  },
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

  const symptomsHtml = disease.medicalSections?.symptoms ?? disease.symptoms;
  const diagnosisHtml = disease.medicalSections?.diagnosis ?? disease.diagnosis;
  const treatmentHtml = disease.medicalSections?.treatment ?? disease.treatment;
  const prognosisHtml = disease.prognosis;

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-stone-500">
        <Link to="/" className="hover:text-amber-700">
          首页
        </Link>
        <span>/</span>
        <Link to="/diseases" className="hover:text-amber-700">
          疾病列表
        </Link>
        <span>/</span>
        <span className="text-stone-800 dark:text-stone-200">
          {disease.name}
        </span>
      </nav>

      {/* Back Button */}
      <Link to="/diseases" className="btn-subtle mb-5 self-start">
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回列表
      </Link>

      {/* Disease Header */}
      <div className="surface-card mb-8 p-6 sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            {disease.category && (
              <span className="badge-warm mb-4">{disease.category.name}</span>
            )}
            <h1 className="section-title text-3xl sm:text-4xl">
              {disease.name}
            </h1>
            {disease.nameEn && (
              <p className="mt-2 text-lg text-stone-600 dark:text-stone-400">
                {disease.nameEn}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2 self-start">
            {disease.icd10Code && (
              <div className="badge-muted">ICD-10: {disease.icd10Code}</div>
            )}
            {disease.catalogRefs?.map((ref) => (
              <div
                key={`${ref.catalogId}-${ref.itemNumber}`}
                className="badge-muted"
              >
                {ref.catalogName}第 {ref.itemNumber} 项
              </div>
            ))}
            {!disease.catalogRefs?.length && disease.catalogNumber && (
              <div className="badge-muted">
                目录第 {disease.catalogNumber} 项
              </div>
            )}
          </div>
        </div>

        {disease.alias && (
          <p className="mt-5 text-sm text-stone-600 dark:text-stone-400">
            <span className="font-semibold text-stone-900 dark:text-stone-100">
              别名：
            </span>
            {disease.alias}
          </p>
        )}

        {disease.oneSentence && (
          <p className="mt-5 max-w-3xl text-base leading-7 text-stone-700 dark:text-stone-300">
            {disease.oneSentence}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {disease.quickLook && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Compass className="h-5 w-5 text-amber-700" />
                先看这个
              </h2>
              <div className="grid gap-3">
                <QuickLookItem
                  label="这是什么"
                  value={disease.quickLook.whatItIs}
                />
                <QuickLookItem
                  label="先看哪个科"
                  value={disease.quickLook.whoToSeeFirst}
                />
                <QuickLookItem
                  label="是否遗传"
                  value={disease.quickLook.isGenetic}
                />
                <QuickLookItem
                  label="是否有治疗"
                  value={disease.quickLook.hasTreatment}
                />
                <QuickLookItem
                  label="容易卡在哪里"
                  value={disease.quickLook.commonDelayReason}
                />
              </div>
            </div>
          )}

          {disease.patientJourney && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <ListChecks className="h-5 w-5 text-amber-700" />
                确诊路线
              </h2>
              <div className="grid gap-5">
                <JourneyList
                  icon={AlertTriangle}
                  title="什么时候该怀疑"
                  items={disease.patientJourney.whenToSuspect}
                />
                <JourneyList
                  icon={Compass}
                  title="常见弯路"
                  items={disease.patientJourney.commonWrongTurns}
                />
                <JourneyList
                  icon={Stethoscope}
                  title="可以先看的科室"
                  items={disease.patientJourney.firstDepartments}
                />
                <JourneyList
                  icon={ClipboardCheck}
                  title="就诊前准备"
                  items={disease.patientJourney.diagnosisChecklist}
                />
                <JourneyList
                  icon={BookOpenCheck}
                  title="可向医生确认的检查"
                  items={disease.patientJourney.testsToAskAbout}
                />
                <JourneyList
                  icon={HelpCircle}
                  title="可以问医生的问题"
                  items={disease.patientJourney.questionsForDoctor}
                />
              </div>
            </div>
          )}

          {/* Basic Info */}
          <div className="content-card mb-5 p-5">
            <h2 className="mb-4 font-semibold text-stone-900 dark:text-stone-100">
              基本信息
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {disease.prevalence && (
                <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
                  <Users className="mt-0.5 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="text-sm font-semibold">患病率</div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {disease.prevalence}
                    </div>
                  </div>
                </div>
              )}
              {disease.category && (
                <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
                  <Tag className="mt-0.5 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="text-sm font-semibold">分类</div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {disease.category.name}
                    </div>
                  </div>
                </div>
              )}
              {disease.updatedAt && (
                <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
                  <Calendar className="mt-0.5 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="text-sm font-semibold">更新时间</div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {new Date(disease.updatedAt).toLocaleDateString('zh-CN')}
                    </div>
                  </div>
                </div>
              )}
              {disease.reviewStatus && (
                <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
                  <BookOpenCheck className="mt-0.5 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="text-sm font-semibold">审核状态</div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">
                      {formatReviewStatus(disease.reviewStatus)}
                    </div>
                  </div>
                </div>
              )}
              {disease.sourceName && (
                <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
                  <BookOpenCheck className="mt-0.5 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="text-sm font-semibold">资料来源</div>
                    {disease.sourceUrl ? (
                      <a
                        href={disease.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-sm text-amber-700 hover:text-amber-600"
                      >
                        {disease.sourceName}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <div className="text-sm text-stone-600 dark:text-stone-400">
                        {disease.sourceName}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Symptoms */}
          {symptomsHtml && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                症状表现
              </h2>
              <SafeHTMLRenderer html={symptomsHtml} className="content-prose" />
            </div>
          )}

          {/* Diagnosis */}
          {diagnosisHtml && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                诊断方法
              </h2>
              <SafeHTMLRenderer
                html={diagnosisHtml}
                className="content-prose"
              />
            </div>
          )}

          {/* Treatment */}
          {treatmentHtml && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                治疗方法
              </h2>
              <SafeHTMLRenderer
                html={treatmentHtml}
                className="content-prose"
              />
            </div>
          )}

          {disease.medicalSections?.longTermCare && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                长期管理
              </h2>
              <SafeHTMLRenderer
                html={disease.medicalSections.longTermCare}
                className="content-prose"
              />
            </div>
          )}

          {disease.medicalSections?.fertilityOrFamily && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                生育与家族
              </h2>
              <SafeHTMLRenderer
                html={disease.medicalSections.fertilityOrFamily}
                className="content-prose"
              />
            </div>
          )}

          {disease.medicalSections?.emergencySigns && (
            <div className="content-card mb-5 p-5">
              <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                需要尽快就医的情况
              </h2>
              <SafeHTMLRenderer
                html={disease.medicalSections.emergencySigns}
                className="content-prose"
              />
            </div>
          )}

          {/* Prognosis */}
          {prognosisHtml && (
            <div className="content-card p-5">
              <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                预后情况
              </h2>
              <SafeHTMLRenderer
                html={prognosisHtml}
                className="content-prose"
              />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Related Hospitals */}
          {disease.hospitals && disease.hospitals.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Hospital className="h-5 w-5 text-amber-700" />
                推荐医院
              </h3>
              <div className="space-y-3">
                {disease.hospitals.map((hospital) => (
                  <Link
                    key={hospital.id}
                    to="/hospitals/$id"
                    params={{ id: hospital.id.toString() }}
                    className="block rounded-md border border-stone-200 bg-white p-3 transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                  >
                    <div className="font-medium">{hospital.name}</div>
                    <div className="mt-1 text-sm text-stone-500">
                      {hospital.province} {hospital.city}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Charity Organizations */}
          {disease.charityOrgs && disease.charityOrgs.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Users className="h-5 w-5 text-amber-700" />
                相关公益组织
              </h3>
              <div className="space-y-3">
                {disease.charityOrgs.map((org) => (
                  <Link
                    key={org.id}
                    to="/charity/$id"
                    params={{ id: org.id.toString() }}
                    className="block rounded-md border border-stone-200 bg-white p-3 transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                  >
                    <div className="font-medium">{org.name}</div>
                    <div className="mt-1 text-sm text-stone-500">
                      {org.type === 'patient_org'
                        ? '患者组织'
                        : org.type === 'foundation'
                          ? '基金会'
                          : org.type === 'volunteer_team'
                            ? '志愿者团队'
                            : org.type}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {disease.tags && disease.tags.length > 0 && (
            <div className="content-card p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Tag className="h-5 w-5 text-amber-700" />
                相关标签
              </h3>
              <div className="flex flex-wrap gap-2">
                {disease.tags.map((tag) => (
                  <span key={tag.id} className="badge-muted">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {disease.sources && disease.sources.length > 0 && (
            <div className="content-card mt-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <BookOpenCheck className="h-5 w-5 text-amber-700" />
                信息来源
              </h3>
              <div className="space-y-3">
                {disease.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-md border border-stone-200 bg-white p-3 text-sm transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span>
                        <span className="font-medium">{source.name}</span>
                        {source.license && (
                          <span className="mt-1 block text-xs text-stone-500">
                            {source.license}
                          </span>
                        )}
                      </span>
                      <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function QuickLookItem({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <div className="rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
      <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
        {label}
      </div>
      <p className="mt-1 text-sm leading-6 text-stone-600 dark:text-stone-400">
        {value}
      </p>
    </div>
  );
}

function JourneyList({
  icon: Icon,
  items,
  title,
}: {
  icon: LucideIcon;
  items?: string[];
  title: string;
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
        <Icon className="h-4 w-4 text-amber-700" />
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md bg-stone-50 px-3 py-2 text-sm leading-6 text-stone-600 dark:bg-stone-900/30 dark:text-stone-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatReviewStatus(status: string) {
  const labels: Record<string, string> = {
    draft: '草稿，等待进一步校对',
    'medical-reviewed': '已医学审核',
    'patient-reviewed': '已患者视角校对',
  };

  return labels[status] ?? status;
}

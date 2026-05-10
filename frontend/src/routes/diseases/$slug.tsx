import { createFileRoute, Link } from '@tanstack/react-router';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpenCheck,
  Calendar,
  ClipboardCheck,
  Compass,
  ExternalLink,
  HelpCircle,
  Hospital,
  ListChecks,
  type LucideIcon,
  Stethoscope,
  Tag,
  Users,
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
  const quickLookItems = disease.quickLook
    ? [
        {
          label: '先看哪个科',
          value: disease.quickLook.whoToSeeFirst,
          tone: 'primary' as const,
        },
        { label: '这是什么', value: disease.quickLook.whatItIs },
        { label: '是否有治疗', value: disease.quickLook.hasTreatment },
        { label: '是否遗传', value: disease.quickLook.isGenetic },
        { label: '容易卡在哪里', value: disease.quickLook.commonDelayReason },
      ].filter((item) => item.value)
    : [];
  const journeySections = disease.patientJourney
    ? [
        {
          icon: AlertTriangle,
          title: '什么时候该怀疑',
          items: disease.patientJourney.whenToSuspect,
        },
        {
          icon: Compass,
          title: '常见弯路',
          items: disease.patientJourney.commonWrongTurns,
        },
        {
          icon: Stethoscope,
          title: '先看哪些科',
          items: disease.patientJourney.firstDepartments,
        },
        {
          icon: ClipboardCheck,
          title: '就诊前准备',
          items: disease.patientJourney.diagnosisChecklist,
        },
        {
          icon: BookOpenCheck,
          title: '可向医生确认的检查',
          items: disease.patientJourney.testsToAskAbout,
        },
        {
          icon: HelpCircle,
          title: '可以问医生的问题',
          items: disease.patientJourney.questionsForDoctor,
        },
      ].filter((section) => section.items?.length)
    : [];
  const medicalBlocks = [
    { title: '症状表现', html: symptomsHtml },
    { title: '诊断方法', html: diagnosisHtml },
    { title: '治疗方法', html: treatmentHtml },
    { title: '长期管理', html: disease.medicalSections?.longTermCare },
    { title: '生育与家族', html: disease.medicalSections?.fertilityOrFamily },
    {
      title: '需要尽快就医的情况',
      html: disease.medicalSections?.emergencySigns,
    },
    { title: '预后情况', html: prognosisHtml },
  ].filter((block) => block.html);

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

        {disease.featuredImage?.url && (
          <div className="mt-6 overflow-hidden rounded-md border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
            <img
              src={disease.featuredImage.url}
              alt={`${disease.name}就医导航插图`}
              className="h-52 w-full object-cover sm:h-64"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {quickLookItems.length > 0 && (
        <section className="content-card mb-8 p-5 sm:p-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Compass className="h-5 w-5 text-amber-700" />
                先看这个
              </h2>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                先帮你判断下一步：看哪个科、准备什么材料、哪些问题要问医生。
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {quickLookItems.map((item) => (
              <QuickLookItem
                key={item.label}
                label={item.label}
                tone={item.tone}
                value={item.value}
              />
            ))}
          </div>
        </section>
      )}

      <section className="mb-8 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-stone-700 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-stone-300">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <p>
            这页内容用于帮助患者和家属整理就医线索，不替代医生诊断或治疗方案。检查、用药、转诊、急诊处理和公益救助申请，请以医生、医疗机构、公益组织及官方渠道的最新信息为准。
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {journeySections.length > 0 && (
            <div className="content-card mb-5 p-5">
              <div className="mb-4">
                <h2 className="flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                  <ListChecks className="h-5 w-5 text-amber-700" />
                  确诊路线
                </h2>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  按患者实际行动顺序整理：先识别线索，再避开常见弯路，最后准备就诊。
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {journeySections.map((section) => (
                  <JourneyList
                    icon={section.icon}
                    items={section.items}
                    key={section.title}
                    title={section.title}
                  />
                ))}
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

          {medicalBlocks.length > 0 && (
            <div className="content-card p-5">
              <div className="mb-4">
                <h2 className="flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                  <BookOpenCheck className="h-5 w-5 text-amber-700" />
                  医学说明
                </h2>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  这里保留更完整的医学解释，方便和医生沟通时核对概念。
                </p>
              </div>
              <div className="space-y-4">
                {medicalBlocks.map((block) => (
                  <MedicalBlock
                    html={block.html ?? ''}
                    key={block.title}
                    title={block.title}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
          {/* Care resources */}
          {disease.hospitalServices && disease.hospitalServices.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Hospital className="h-5 w-5 text-amber-700" />
                就医资源
              </h3>
              <p className="-mt-2 mb-4 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
                以下为公开收录的科室或服务线索，不代表本站推荐或医疗背书。
              </p>
              <div className="space-y-3">
                {disease.hospitalServices.map((service) => (
                  <div
                    key={service.id}
                    className="rounded-md border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900/30"
                  >
                    {service.hospital && (
                      <Link
                        to="/hospitals/$id"
                        params={{ id: service.hospital.id.toString() }}
                        className="font-medium transition hover:text-amber-700"
                      >
                        {service.hospital.name}
                      </Link>
                    )}
                    <div className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                      {service.departmentName}
                      {service.serviceName ? ` · ${service.serviceName}` : ''}
                    </div>
                    <div className="mt-1 text-xs text-stone-500">
                      {formatHospitalServiceStage(service.stage)}
                      {service.hospital
                        ? ` · ${service.hospital.province} ${service.hospital.city}`
                        : ''}
                    </div>
                    {service.notes && (
                      <p className="mt-2 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
                        {service.notes}
                      </p>
                    )}
                    {(service.evidenceUrl || service.sourceUrl) && (
                      <a
                        href={service.evidenceUrl ?? service.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-amber-700"
                      >
                        查看公开来源
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
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

function QuickLookItem({
  label,
  tone,
  value,
}: {
  label: string;
  tone?: 'primary';
  value?: string;
}) {
  if (!value) {
    return null;
  }

  return (
    <div
      className={`rounded-md border p-3 ${
        tone === 'primary'
          ? 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30'
          : 'border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900/30'
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
        {label}
      </div>
      <p className="mt-2 text-sm leading-6 text-stone-700 dark:text-stone-300">
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
    <section className="rounded-md border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/30">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
        <Icon className="h-4 w-4 text-amber-700" />
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm leading-6 text-stone-600 before:mr-2 before:text-amber-700 before:content-['•'] dark:text-stone-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function MedicalBlock({ html, title }: { html: string; title: string }) {
  return (
    <section className="rounded-md border border-stone-200 p-4 dark:border-stone-800">
      <h3 className="mb-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
        {title}
      </h3>
      <SafeHTMLRenderer html={html} className="content-prose" />
    </section>
  );
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

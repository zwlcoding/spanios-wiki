import { createFileRoute, Link } from '@tanstack/react-router';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpenCheck,
  ClipboardCheck,
  Compass,
  ExternalLink,
  HelpCircle,
  ListChecks,
  Stethoscope,
  Tag,
  Users,
} from 'lucide-react';
import {
  BasicInfoSection,
  CareResourcesSection,
  DiseaseHeader,
} from '@/components/disease';
import {
  JourneyList,
  MedicalBlock,
  QuickLookItem,
} from '@/components/disease/detail-blocks';
import { useDisease } from '@/hooks/useDiseases';
import { fetchDiseaseBySlug } from '@/lib/contentClient';
import { trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

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
                {uiText('首页', 'Home')}
              </Link>
            </li>
            <li>
              <Link
                to="/diseases"
                search={{ category: 'all' }}
                className="link link-hover"
              >
                {uiText('疾病列表', 'Disease List')}
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
                {uiText('首页', 'Home')}
              </Link>
            </li>
            <li>
              <Link
                to="/diseases"
                search={{ category: 'all' }}
                className="link link-hover"
              >
                {uiText('疾病列表', 'Disease List')}
              </Link>
            </li>
          </ul>
        </div>
        <div className="alert alert-error">
          <span>
            {uiText(
              '疾病信息未找到或加载失败',
              'Disease information was not found or failed to load',
            )}
          </span>
        </div>
        <Link
          to="/diseases"
          search={{ category: 'all' }}
          className="btn btn-primary mt-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {uiText('返回疾病列表', 'Back to Disease List')}
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
          label: uiText('先看哪个科', 'Where to Start'),
          value: disease.quickLook.whoToSeeFirst,
          tone: 'primary' as const,
        },
        {
          label: uiText('这是什么', 'What It Is'),
          value: disease.quickLook.whatItIs,
        },
        {
          label: uiText('是否有治疗', 'Treatment Available'),
          value: disease.quickLook.hasTreatment,
        },
        {
          label: uiText('是否遗传', 'Genetic'),
          value: disease.quickLook.isGenetic,
        },
        {
          label: uiText('容易卡在哪里', 'Common Delay'),
          value: disease.quickLook.commonDelayReason,
        },
      ].filter((item) => item.value)
    : [];
  const journeySections = disease.patientJourney
    ? [
        {
          icon: AlertTriangle,
          title: uiText('什么时候该怀疑', 'When to Suspect It'),
          items: disease.patientJourney.whenToSuspect,
        },
        {
          icon: Compass,
          title: uiText('常见弯路', 'Common Wrong Turns'),
          items: disease.patientJourney.commonWrongTurns,
        },
        {
          icon: Stethoscope,
          title: uiText('先看哪些科', 'Departments to Start With'),
          items: disease.patientJourney.firstDepartments,
        },
        {
          icon: ClipboardCheck,
          title: uiText('就诊前准备', 'Before the Visit'),
          items: disease.patientJourney.diagnosisChecklist,
        },
        {
          icon: BookOpenCheck,
          title: uiText('可向医生确认的检查', 'Tests to Ask About'),
          items: disease.patientJourney.testsToAskAbout,
        },
        {
          icon: HelpCircle,
          title: uiText('可以问医生的问题', 'Questions for the Doctor'),
          items: disease.patientJourney.questionsForDoctor,
        },
      ].filter((section) => section.items?.length)
    : [];
  const medicalBlocks = [
    { title: uiText('症状表现', 'Symptoms'), html: symptomsHtml },
    { title: uiText('诊断方法', 'Diagnosis'), html: diagnosisHtml },
    { title: uiText('治疗方法', 'Treatment'), html: treatmentHtml },
    {
      title: uiText('长期管理', 'Long-term Care'),
      html: disease.medicalSections?.longTermCare,
    },
    {
      title: uiText('生育与家族', 'Fertility and Family'),
      html: disease.medicalSections?.fertilityOrFamily,
    },
    {
      title: uiText('需要尽快就医的情况', 'When to Seek Urgent Care'),
      html: disease.medicalSections?.emergencySigns,
    },
    { title: uiText('预后情况', 'Prognosis'), html: prognosisHtml },
  ].filter((block) => block.html);

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-stone-500">
        <Link to="/" className="hover:text-amber-700">
          {uiText('首页', 'Home')}
        </Link>
        <span>/</span>
        <Link
          to="/diseases"
          search={{ category: 'all' }}
          className="hover:text-amber-700"
        >
          {uiText('疾病列表', 'Disease List')}
        </Link>
        <span>/</span>
        <span className="text-stone-800 dark:text-stone-200">
          {disease.name}
        </span>
      </nav>

      {/* Back Button */}
      <Link
        to="/diseases"
        search={{ category: 'all' }}
        className="btn-subtle mb-5 self-start"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {uiText('返回列表', 'Back to List')}
      </Link>

      <DiseaseHeader
        alias={disease.alias}
        catalogNumber={disease.catalogNumber}
        catalogRefs={disease.catalogRefs}
        category={disease.category}
        featuredImage={disease.featuredImage}
        icd10Code={disease.icd10Code}
        name={disease.name}
        nameEn={disease.nameEn}
        oneSentence={disease.oneSentence}
      />

      {quickLookItems.length > 0 && (
        <section className="content-card mb-8 p-5 sm:p-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Compass className="h-5 w-5 text-amber-700" />
                {uiText('先看这个', 'Start Here')}
              </h2>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                {uiText(
                  '先帮你判断下一步：看哪个科、准备什么材料、哪些问题要问医生。',
                  'A quick guide to the next step: which department to start with, what to prepare, and what to ask.',
                )}
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

      {disease.searchIntents?.length ? (
        <section className="content-card mb-8 p-5 sm:p-6">
          <h2 className="flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
            <HelpCircle className="h-5 w-5 text-amber-700" />
            {uiText('常见搜索和就医问题', 'Common Search and Care Questions')}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {disease.searchIntents.map((intent) => (
              <span className="badge-muted" key={intent}>
                {intent}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mb-8 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-stone-700 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-stone-300">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
          <p>
            {uiText(
              '这页内容用于帮助患者和家属整理就医线索，不替代医生诊断或治疗方案。检查、用药、转诊、急诊处理和公益救助申请，请以医生、医疗机构、公益组织及官方渠道的最新信息为准。',
              'This page helps patients and families organize care leads. It does not replace a clinician’s diagnosis or treatment plan. For testing, medication, referrals, emergency care, and support applications, follow qualified clinicians, medical institutions, support organizations, and official sources.',
            )}
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
                  {uiText('确诊路线', 'Diagnosis Path')}
                </h2>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  {uiText(
                    '按患者实际行动顺序整理：先识别线索，再避开常见弯路，最后准备就诊。',
                    'Organized around the practical patient journey: identify clues, avoid common delays, then prepare for care.',
                  )}
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

          <BasicInfoSection
            category={disease.category}
            diseaseSlug={disease.slug}
            prevalence={disease.prevalence}
            sourceName={disease.sourceName}
            sourceUrl={disease.sourceUrl}
            updatedAt={disease.updatedAt}
          />

          {medicalBlocks.length > 0 && (
            <div className="content-card p-5">
              <div className="mb-4">
                <h2 className="flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                  <BookOpenCheck className="h-5 w-5 text-amber-700" />
                  {uiText('医学说明', 'Medical Notes')}
                </h2>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  {uiText(
                    '这里保留更完整的医学解释，方便和医生沟通时核对概念。',
                    'More complete medical explanations are kept here for discussion with clinicians.',
                  )}
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
          <CareResourcesSection
            diseaseSlug={disease.slug}
            hospitalServices={disease.hospitalServices ?? []}
          />

          {/* Related Charity Organizations */}
          {disease.charityOrgs && disease.charityOrgs.length > 0 && (
            <div className="content-card mb-5 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
                <Users className="h-5 w-5 text-amber-700" />
                {uiText('相关公益组织', 'Related Support Groups')}
              </h3>
              <div className="space-y-3">
                {disease.charityOrgs.map((org) => (
                  <Link
                    key={org.id}
                    to="/charity/$id"
                    params={{ id: org.id.toString() }}
                    className="block rounded-md border border-stone-200 bg-white p-3 transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                    onClick={() =>
                      trackEvent('disease_related_charity_click', {
                        charity_id: org.id,
                        disease_slug: disease.slug,
                        type: org.type,
                      })
                    }
                  >
                    <div className="font-medium">{org.name}</div>
                    <div className="mt-1 text-sm text-stone-500">
                      {org.type === 'patient_org'
                        ? uiText('患者组织', 'Patient Group')
                        : org.type === 'foundation'
                          ? uiText('基金会', 'Foundation')
                          : org.type === 'volunteer_team'
                            ? uiText('志愿者团队', 'Volunteer Team')
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
                {uiText('相关标签', 'Related Tags')}
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
                {uiText('信息来源', 'Information Sources')}
              </h3>
              <div className="space-y-3">
                {disease.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-md border border-stone-200 bg-white p-3 text-sm transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-900/30"
                    onClick={() =>
                      trackEvent('disease_source_click', {
                        disease_slug: disease.slug,
                        source_kind: source.type ?? 'source',
                      })
                    }
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

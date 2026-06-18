import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSpinocerebellarAtaxia: DiseaseDraft = {
  ...entity(1111, 'catalog-china-first-rare-disease-catalog-111'),
  name: 'Spinocerebellar Ataxia',
  nameEn: 'Spinocerebellar Ataxia',
  alias: 'SCA, Spinocerebellar ataxia, First Rare Disease Catalog item 111',
  slug: 'spinocerebellar-ataxia',
  oneSentence:
    'Spinocerebellar ataxia is a group of inherited neurodegenerative disorders causing imbalance, poor coordination, slurred speech, and sometimes eye-movement, swallowing, peripheral-nerve, cognitive, or mood symptoms.',
  plainName:
    'A group of inherited ataxias mainly causing imbalance and coordination problems',
  prevalence:
    'Included in China’s first rare disease catalog; frequency varies substantially by subtype and region.',
  quickLook: {
    whatItIs:
      'Spinocerebellar ataxia is a group of inherited neurodegenerative disorders causing imbalance, poor coordination, slurred speech, and sometimes eye-movement, swallowing, peripheral-nerve, cognitive, or mood symptoms.',
    whoToSeeFirst:
      'Start with Neurology, Movement disorders clinic, Medical genetics; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Many SCAs are autosomal dominant and some are repeat-expansion disorders; family testing and reproductive planning should be done with genetic counseling.',
    hasTreatment:
      'Most SCAs are managed with rehabilitation, fall prevention, swallowing and nutrition support, symptom treatment, daily-life adaptation, and genetic counseling; subtype clarity can guide surveillance and research opportunities.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'walking becomes unsteady, falls increase, movements become clumsy, or tremor appears',
      'speech becomes slurred, or nystagmus, double vision, or choking occurs',
      'family members have cerebellar atrophy, gait imbalance, or unexplained wheelchair use',
      'brain imaging shows cerebellar atrophy',
    ],
    commonWrongTurns: [
      'treating symptoms as cervical spine disease, vertigo, or anxiety without neurologic localization',
      'stopping at the MRI phrase “cerebellar atrophy” without subtype testing and genetic counseling',
      'missing swallowing safety, fall prevention, and mental-health support',
    ],
    firstDepartments: [
      'Neurology',
      'Movement disorders clinic',
      'Medical genetics',
      'Rehabilitation medicine',
      'Swallowing or nutrition clinic',
    ],
    diagnosisChecklist: [
      'record age at onset, progression speed, falls, speech, swallowing, and eye-movement symptoms',
      'draw a three-generation family tree with similar symptoms, diagnoses, or early deaths',
      'bring brain MRI, genetic testing, rehabilitation assessment, and medication records',
    ],
    testsToAskAbout: [
      'brain MRI and neurologic examination',
      'SCA repeat-expansion testing and related ataxia gene testing',
      'swallowing, gait-balance, eye-movement, and peripheral-nerve assessment',
    ],
    questionsForDoctor: [
      'Which SCA subtype is most likely, and how should genetic testing be staged?',
      'What precautions apply to predictive testing and reproductive counseling for relatives?',
      'How should rehabilitation, assistive devices, and fall prevention be planned?',
      'How should choking, weight loss, or mood symptoms be managed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Spinocerebellar ataxia is a group of inherited neurodegenerative disorders causing imbalance, poor coordination, slurred speech, and sometimes eye-movement, swallowing, peripheral-nerve, cognitive, or mood symptoms.</p><p>Warning signs can include: walking becomes unsteady, falls increase, movements become clumsy, or tremor appears; speech becomes slurred, or nystagmus, double vision, or choking occurs; family members have cerebellar atrophy, gait imbalance, or unexplained wheelchair use; brain imaging shows cerebellar atrophy. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>Most SCAs are managed with rehabilitation, fall prevention, swallowing and nutrition support, symptom treatment, daily-life adaptation, and genetic counseling; subtype clarity can guide surveillance and research opportunities.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Many SCAs are autosomal dominant and some are repeat-expansion disorders; family testing and reproductive planning should be done with genetic counseling.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
    emergencySigns:
      '<p>Seek urgent care for breathing difficulty, altered consciousness, prolonged seizure, choking or serious swallowing difficulty, rapidly worsening weakness or vision change, severe infection, or acute severe pain.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: First Rare Disease Catalog',
      type: 'official',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'NORD: Spinocerebellar Ataxia',
      type: 'official',
      url: 'https://rarediseases.org/rare-diseases/spinocerebellar-ataxia/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Spinocerebellar ataxia is a group of inherited neurodegenerative disorders causing imbalance, poor coordination, slurred speech, and sometimes eye-movement, swallowing, peripheral-nerve, cognitive, or mood symptoms. Common clues include walking becomes unsteady, falls increase, movements become clumsy, or tremor appears and speech becomes slurred, or nystagmus, double vision, or choking occurs.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>Most SCAs are managed with rehabilitation, fall prevention, swallowing and nutrition support, symptom treatment, daily-life adaptation, and genetic counseling; subtype clarity can guide surveillance and research opportunities.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'neurological',
  charityIds: [77],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

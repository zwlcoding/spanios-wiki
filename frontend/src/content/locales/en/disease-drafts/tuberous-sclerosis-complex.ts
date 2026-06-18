import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTuberousSclerosisComplex: DiseaseDraft = {
  ...entity(1114, 'catalog-china-first-rare-disease-catalog-114'),
  name: 'Tuberous Sclerosis Complex',
  nameEn: 'Tuberous Sclerosis Complex',
  alias: 'TSC, Tuberous sclerosis complex, First Rare Disease Catalog item 114',
  slug: 'tuberous-sclerosis-complex',
  oneSentence:
    'Tuberous sclerosis complex is a multisystem genetic disorder, usually caused by TSC1 or TSC2 variants, that can lead to hamartomas or related lesions in the brain, skin, kidneys, heart, lungs, and eyes.',
  plainName:
    'A genetic multisystem condition affecting the brain, skin, kidneys, and other organs',
  prevalence:
    'Included in China’s first rare disease catalog; international estimates are often about 1 in 6,000 people.',
  quickLook: {
    whatItIs:
      'Tuberous sclerosis complex is a multisystem genetic disorder, usually caused by TSC1 or TSC2 variants, that can lead to hamartomas or related lesions in the brain, skin, kidneys, heart, lungs, and eyes.',
    whoToSeeFirst:
      'Start with Pediatric neurology, Neurology, Dermatology; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Tuberous sclerosis complex is a multisystem genetic disorder, usually caused by TSC1 or TSC2 variants, that can lead to hamartomas or related lesions in the brain, skin, kidneys, heart, lungs, and eyes.',
    hasTreatment:
      'Treatment depends on organ involvement and may include seizure control, developmental and behavioral support, skin and kidney surveillance, and assessment for mTOR inhibitors, surgery, or interventional treatment when appropriate.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'infantile spasms, recurrent seizures, developmental regression, or significant developmental delay',
      'hypomelanotic macules, facial angiofibromas, shagreen patch, or periungual fibromas',
      'brain imaging shows subependymal nodules or cortical tubers, or kidney imaging shows angiomyolipomas',
      'family history includes TSC, epilepsy, kidney hamartomas, or similar skin findings',
    ],
    commonWrongTurns: [
      'treating seizures without checking skin, kidneys, eyes, and family history',
      'calling pale skin patches ordinary pigmentation changes without Wood lamp or systemic assessment',
      'managing adult kidney lesions in isolation without asking about childhood seizures or skin signs',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Neurology',
      'Dermatology',
      'Nephrology',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'bring seizure videos, EEG, brain MRI, kidney ultrasound/CT/MRI, and skin photographs',
      'track development, learning, behavior, sleep, and kidney or lung symptoms',
      'bring family history, genetic results, and prior medication response',
    ],
    testsToAskAbout: [
      'brain MRI, EEG, and developmental-behavioral assessment',
      'skin examination and Wood lamp examination',
      'kidney imaging, blood pressure, kidney function, and urine testing',
      'TSC1/TSC2 genetic testing, with family testing when needed',
      'age-appropriate eye, heart, and lung assessment',
    ],
    questionsForDoctor: [
      'Which organs are involved now, and which need scheduled surveillance?',
      'Does seizure treatment need adjustment or further evaluation for surgery or targeted therapy?',
      'What is the size and bleeding risk of kidney lesions, and how often should imaging be repeated?',
      'Should relatives be screened or receive genetic counseling?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Tuberous sclerosis complex is a multisystem genetic disorder, usually caused by TSC1 or TSC2 variants, that can lead to hamartomas or related lesions in the brain, skin, kidneys, heart, lungs, and eyes.</p><p>Warning signs can include: infantile spasms, recurrent seizures, developmental regression, or significant developmental delay; hypomelanotic macules, facial angiofibromas, shagreen patch, or periungual fibromas; brain imaging shows subependymal nodules or cortical tubers, or kidney imaging shows angiomyolipomas; family history includes TSC, epilepsy, kidney hamartomas, or similar skin findings. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>Treatment depends on organ involvement and may include seizure control, developmental and behavioral support, skin and kidney surveillance, and assessment for mTOR inhibitors, surgery, or interventional treatment when appropriate.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Tuberous sclerosis complex is a multisystem genetic disorder, usually caused by TSC1 or TSC2 variants, that can lead to hamartomas or related lesions in the brain, skin, kidneys, heart, lungs, and eyes.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
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
      name: 'MedlinePlus Genetics: Tuberous sclerosis complex',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/tuberous-sclerosis-complex/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Tuberous sclerosis complex is a multisystem genetic disorder, usually caused by TSC1 or TSC2 variants, that can lead to hamartomas or related lesions in the brain, skin, kidneys, heart, lungs, and eyes. Common clues include infantile spasms, recurrent seizures, developmental regression, or significant developmental delay and hypomelanotic macules, facial angiofibromas, shagreen patch, or periungual fibromas.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>Treatment depends on organ involvement and may include seizure control, developmental and behavioral support, skin and kidney surveillance, and assessment for mTOR inhibitors, surgery, or interventional treatment when appropriate.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [62],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

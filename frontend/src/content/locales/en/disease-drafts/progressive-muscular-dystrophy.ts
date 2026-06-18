import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseProgressiveMuscularDystrophy: DiseaseDraft = {
  ...entity(1098, 'catalog-china-first-rare-disease-catalog-98'),
  name: 'Progressive Muscular Dystrophy',
  nameEn: 'Progressive Muscular Dystrophy',
  alias:
    'Muscular dystrophy, DMD/BMD-related muscular dystrophy, First Rare Disease Catalog item 98',
  slug: 'progressive-muscular-dystrophy',
  oneSentence:
    'Progressive muscular dystrophy covers inherited muscle disorders marked by progressive weakness and wasting; Duchenne/Becker forms are often related to DMD gene variants and require ongoing motor, cardiac, and respiratory care.',
  plainName:
    'A group of muscle disorders with progressive weakness and long-term heart, lung, and orthopedic needs',
  prevalence:
    'Included in China’s first rare disease catalog; Duchenne muscular dystrophy mainly affects boys and is often estimated at about 1 in 3,500-5,000 male births.',
  quickLook: {
    whatItIs:
      'Progressive muscular dystrophy covers inherited muscle disorders marked by progressive weakness and wasting; Duchenne/Becker forms are often related to DMD gene variants and require ongoing motor, cardiac, and respiratory care.',
    whoToSeeFirst:
      'Start with Pediatric neurology, Neurology, Rehabilitation medicine; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Duchenne/Becker muscular dystrophy is usually X-linked, while other muscular dystrophies have different inheritance patterns; genetic diagnosis guides family testing.',
    hasTreatment:
      'Care includes rehabilitation, stretching and assistive devices, cardiac and respiratory surveillance, nutrition and bone health, and subtype-specific review of corticosteroids, genetic therapies, or clinical-trial options.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'a boy walks late, runs or jumps poorly, falls often, has trouble climbing stairs, or shows Gowers sign',
      'calves look enlarged while strength is declining and creatine kinase is very high',
      'unexplained high liver enzymes occur together with motor delay or weakness',
      'family history includes male relatives with early weakness, wheelchair use, or cardiomyopathy',
    ],
    commonWrongTurns: [
      'using calcium supplements or generic rehabilitation without checking CK and neuromuscular causes',
      'investigating high transaminases as liver disease for too long without considering muscle source',
      'after diagnosis, focusing only on walking while missing cardiomyopathy, respiratory, and bone risks',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Neurology',
      'Rehabilitation medicine',
      'Cardiology',
      'Pulmonology',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'bring motor milestones, fall frequency, videos of rising from the floor or climbing stairs, CK, and liver enzymes',
      'bring EMG, muscle MRI or biopsy, genetic testing, ECG/echo, and lung function results',
      'record family history of male weakness, early death, or cardiomyopathy',
    ],
    testsToAskAbout: [
      'creatine kinase, EMG, and muscle imaging',
      'DMD deletion/duplication testing and sequencing, with broader myopathy testing when needed',
      'ECG, echocardiogram or cardiac MRI, and lung function',
      'bone density, scoliosis, and contracture assessment',
    ],
    questionsForDoctor: [
      'Which muscular dystrophy subtype is most likely, and is the variant type clear?',
      'Are subtype-specific medicines, steroids, genetic therapies, or trials appropriate?',
      'When should regular heart and respiratory monitoring begin?',
      'Should the mother and female relatives have carrier testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Progressive muscular dystrophy covers inherited muscle disorders marked by progressive weakness and wasting; Duchenne/Becker forms are often related to DMD gene variants and require ongoing motor, cardiac, and respiratory care.</p><p>Warning signs can include: a boy walks late, runs or jumps poorly, falls often, has trouble climbing stairs, or shows Gowers sign; calves look enlarged while strength is declining and creatine kinase is very high; unexplained high liver enzymes occur together with motor delay or weakness; family history includes male relatives with early weakness, wheelchair use, or cardiomyopathy. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>Care includes rehabilitation, stretching and assistive devices, cardiac and respiratory surveillance, nutrition and bone health, and subtype-specific review of corticosteroids, genetic therapies, or clinical-trial options.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Duchenne/Becker muscular dystrophy is usually X-linked, while other muscular dystrophies have different inheritance patterns; genetic diagnosis guides family testing.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
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
      name: 'MedlinePlus Genetics: Duchenne and Becker muscular dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/duchenne-and-becker-muscular-dystrophy/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Progressive muscular dystrophy covers inherited muscle disorders marked by progressive weakness and wasting; Duchenne/Becker forms are often related to DMD gene variants and require ongoing motor, cardiac, and respiratory care. Common clues include a boy walks late, runs or jumps poorly, falls often, has trouble climbing stairs, or shows Gowers sign and calves look enlarged while strength is declining and creatine kinase is very high.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>Care includes rehabilitation, stretching and assistive devices, cardiac and respiratory surveillance, nutrition and bone health, and subtype-specific review of corticosteroids, genetic therapies, or clinical-trial options.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'neurological',
  charityIds: [66, 67, 68, 69, 70, 71, 80],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

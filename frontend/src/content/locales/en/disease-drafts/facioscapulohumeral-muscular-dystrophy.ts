import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFacioscapulohumeralMuscularDystrophy: DiseaseDraft = {
  ...entity(2025, 'disease-facioscapulohumeral-muscular-dystrophy'),
  name: 'Facioscapulohumeral muscular dystrophy',
  nameEn: 'Facioscapulohumeral muscular dystrophy',
  alias:
    'FSHD, facio-scapulo-humeral dystrophy, FSHD1, FSHD2, China Second Rare Disease Catalog item 25',
  slug: 'facioscapulohumeral-muscular-dystrophy',
  oneSentence:
    'Facioscapulohumeral muscular dystrophy is an inherited muscle disorder that mainly causes progressive weakness of the face, shoulder blades, and upper arms, and can also affect the trunk, legs, hearing, retina, or breathing.',
  plainName:
    'An inherited muscular dystrophy that first affects facial expression, shoulder blades, and arm lifting',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 20,000 people, with about 95% of cases being FSHD1.",
  quickLook: {
    whatItIs:
      'FSHD is linked to abnormal regulation of the D4Z4 region on chromosome 4, allowing abnormal DUX4 expression. The classic pattern is facial, scapular, and upper arm weakness, but severity varies widely.',
    whoToSeeFirst:
      'Asymmetric smile, incomplete eye closure, inability to whistle, scapular winging, difficulty lifting arms overhead, or foot drop should be evaluated by neuromuscular neurology and rehabilitation.',
    isGenetic:
      'FSHD1 is usually autosomal dominant but can be new. FSHD2 is more complex and involves SMCHD1 or related changes plus a permissive 4qA background. Specialized genetic testing and counseling are needed.',
    hasTreatment:
      'There is no curative medicine yet. Care focuses on assessment, individualized exercise and rehabilitation, braces and mobility aids, pain and fatigue management, eye, hearing, and breathing monitoring, and selected scapular fixation surgery.',
    commonDelayReason:
      'Symptoms are slow and asymmetric, so they may be labeled posture problems, shoulder injury, cervical spine disease, or nonspecific weakness. The facial-scapular pattern and FSHD-specific testing are key.',
  },
  patientJourney: {
    whenToSuspect: [
      'Difficulty whistling or using a straw, asymmetric smile, incomplete eye closure, or eyes partly open during sleep.',
      'Scapular winging, sloped shoulders, difficulty lifting arms overhead, combing hair, lifting objects, or throwing.',
      'Tripping, foot drop, stair difficulty, lumbar lordosis, or abdominal muscle weakness.',
      'Family history of scapular winging, facial weakness, muscular dystrophy, or worsening walking.',
    ],
    commonWrongTurns: [
      'Treating only shoulder, neck, or posture problems without neuromuscular evaluation.',
      'Ruling out muscle disease because creatine kinase is normal or only mildly elevated.',
      'Ordering a standard myopathy gene panel that does not cover FSHD D4Z4 testing.',
      'Missing incomplete eye closure, hearing, breathing, pain, and fatigue issues.',
    ],
    firstDepartments: [
      'Neurology or neuromuscular clinic',
      'Rehabilitation medicine',
      'Medical genetics',
      'Orthopedics or bracing clinic',
    ],
    diagnosisChecklist: [
      'Record first symptoms, progression, asymmetry, exercise ability, falls, and family history.',
      'Bring CK, EMG, muscle MRI, pulmonary function, ECG or echocardiogram, hearing, and eye records.',
      'Bring genetic reports and confirm whether FSHD1 D4Z4 contraction and FSHD2-related testing were done.',
      'Record pain, fatigue, sleep, school or work impact, and assistive devices.',
    ],
    testsToAskAbout: [
      'FSHD-specific genetic testing: D4Z4 repeat size or methylation, permissive 4qA background, and SMCHD1 or related testing when needed.',
      'Neuromuscular examination, CK, EMG, and muscle MRI to distinguish similar myopathies.',
      'Pulmonary function, especially with trunk weakness, scoliosis, sleep breathing symptoms, or wheelchair use.',
      'Retinal and hearing assessment, especially in children or severe early-onset disease.',
    ],
    questionsForDoctor: [
      'Does my pattern fit FSHD1 or FSHD2, and is the genetic testing definitive?',
      'Which muscle groups are most affected, and do I need baseline muscle MRI or pulmonary testing?',
      'What exercise intensity is appropriate, and what activities may worsen pain or injury?',
      'When should scapular fixation, ankle-foot orthoses, braces, or mobility aids be considered?',
      'Should relatives be tested, and what reproductive counseling is available?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FSHD often begins in adolescence or early adulthood, but onset may be earlier or later. Typical signs include reduced facial expression, inability to whistle, incomplete eye closure, asymmetric smile, scapular winging, difficulty raising the arms overhead, and upper arm weakness. Weakness may be asymmetric.</p><p>Some people later develop abdominal, hip, lower leg, and ankle dorsiflexion weakness, causing lumbar lordosis, tripping, or foot drop. Chronic pain and fatigue are common. A minority have hearing loss, retinal vascular changes, respiratory muscle involvement, or wheelchair need.</p>',
    diagnosis:
      '<p>Diagnosis starts with the characteristic facial-scapular-humeral pattern, family history, and neuromuscular examination. CK may be normal or mildly elevated; EMG and muscle MRI can help exclude other muscle diseases.</p><p>Confirmation requires FSHD-specific genetic testing. FSHD1 is linked to D4Z4 contraction on a permissive 4qA background; FSHD2 involves D4Z4 hypomethylation and often SMCHD1 or related genes. Standard myopathy panels may miss FSHD.</p>',
    treatment:
      '<p>No curative medicine is currently available. Care includes regular but not excessive aerobic and strengthening exercise, rehabilitation, stretching, pain and fatigue management, fall prevention, ankle-foot orthoses or other braces, and school or work adaptations.</p><p>Scapular fixation surgery may improve arm elevation in selected patients. Incomplete eye closure needs eye protection. Patients with breathing or sleep symptoms need pulmonary function and sleep evaluation.</p>',
    longTermCare:
      '<p>Long-term care tracks strength, gait, falls, pain, fatigue, pulmonary function, eye and hearing issues, and assistive device needs. Exercise should be individualized, avoiding both prolonged inactivity and overtraining that worsens pain.</p>',
    fertilityOrFamily:
      '<p>FSHD1 is usually autosomal dominant, so children may be at risk; FSHD2 inheritance is more complex. Because severity varies and new variants or mosaicism occur, genetic counseling by a team familiar with FSHD is recommended.</p>',
    emergencySigns:
      '<p>Seek care for new significant breathing trouble, waking at night short of breath with daytime sleepiness, repeated chest infections, marked choking or swallowing problems, rapid worsening to inability to walk, serious fall injury, or eye pain and vision change from incomplete eye closure.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Facioscapulohumeral muscular dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/facioscapulohumeral-muscular-dystrophy/',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Facioscapulohumeral muscular dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/000707.htm',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Common features include facial weakness, incomplete eye closure, inability to whistle, scapular winging, difficulty lifting arms, upper arm weakness, foot drop, lordosis, pain, and fatigue.</p>',
  diagnosis:
    '<p>Diagnosis combines the facial-scapular-humeral pattern, family history, neuromuscular exam, CK, EMG, muscle MRI, and FSHD-specific D4Z4, methylation, and 4qA genetic testing.</p>',
  treatment:
    '<p>There is no curative drug. Management includes individualized exercise and rehabilitation, braces and mobility aids, pain and fatigue care, eye, hearing, and breathing monitoring, and selected scapular fixation surgery.</p>',
  prognosis:
    '<p>Progression is often slow and lifespan is usually not greatly affected, but disability varies. Rehabilitation, fall prevention, and breathing, eye, and hearing monitoring reduce complications.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [6],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 379,
    name: 'facioscapulohumeral-muscular-dystrophy-journey.png',
    url: '/images/diseases/facioscapulohumeral-muscular-dystrophy-journey.png',
  },
  tagSlugs: [
    'second-rare-disease-catalog',
    'neuromuscular',
    'genetic-counseling',
  ],
};

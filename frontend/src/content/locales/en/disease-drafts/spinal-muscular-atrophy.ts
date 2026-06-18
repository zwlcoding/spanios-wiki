import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSpinalMuscularAtrophy: DiseaseDraft = {
  ...entity(1110, 'catalog-china-first-rare-disease-catalog-110'),
  name: 'Spinal Muscular Atrophy',
  nameEn: 'Spinal Muscular Atrophy',
  alias: 'SMA, First Rare Disease Catalog item 110',
  slug: 'spinal-muscular-atrophy',
  oneSentence:
    'Spinal muscular atrophy is a group of inherited neuromuscular disorders, usually related to SMN1 gene changes, in which motor-neuron loss causes progressive weakness, motor delay, and sometimes swallowing or breathing problems.',
  plainName:
    'A genetic motor-neuron disease causing muscle weakness and movement limitations',
  prevalence:
    'Included in China’s first rare disease catalog; international estimates are often about 1 in 6,000-10,000 newborns.',
  quickLook: {
    whatItIs:
      'Spinal muscular atrophy is a group of inherited neuromuscular disorders, usually related to SMN1 gene changes, in which motor-neuron loss causes progressive weakness, motor delay, and sometimes swallowing or breathing problems.',
    whoToSeeFirst:
      'Start with Pediatric neurology, Neurology, Rehabilitation medicine; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Most SMA is autosomal recessive and related to biallelic SMN1 changes; SMN2 copy number influences severity but does not fully predict the course.',
    hasTreatment:
      'Disease-modifying therapies may be available, but suitability depends on SMA type, timing, clinical status, and access. Care also includes respiratory, nutrition, swallowing, rehabilitation, orthopedic, and genetic-counseling support.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'marked infant hypotonia, poor head control, delayed rolling or sitting, weak cry or cough',
      'proximal weakness, legs weaker than hands, and reduced reflexes',
      'feeding effort, choking, recurrent respiratory infections, or nighttime underventilation',
      'family history of SMA, unexplained infant weakness, or positive carrier screening',
    ],
    commonWrongTurns: [
      'observing too long as calcium deficiency or developmental delay without SMN1 testing',
      'doing rehabilitation alone while missing respiratory, nutrition, and disease-modifying treatment assessment',
      'assuming sitting or walking ability means long-term spine, joint, and respiratory follow-up is unnecessary',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Neurology',
      'Rehabilitation medicine',
      'Pulmonology',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'bring motor milestones, weakness timeline, swallowing and feeding history, respiratory infections, and sleep symptoms',
      'bring genetic testing, EMG, lung function or sleep study, spine imaging, and medication records',
      'record whether disease-modifying treatment has been used and when it started',
    ],
    testsToAskAbout: [
      'SMN1 deletion or variant testing and SMN2 copy-number assessment',
      'respiratory function, sleep ventilation, swallowing, and nutrition assessment',
      'rehabilitation, contracture, scoliosis, and bone-health assessment',
    ],
    questionsForDoctor: [
      'Which SMA type fits, and what neuromuscular conditions still need exclusion?',
      'Is disease-modifying therapy suitable, and how should response and safety be monitored?',
      'How should respiratory, nutrition, and rehabilitation plans be organized?',
      'Should parents or siblings have carrier testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Spinal muscular atrophy is a group of inherited neuromuscular disorders, usually related to SMN1 gene changes, in which motor-neuron loss causes progressive weakness, motor delay, and sometimes swallowing or breathing problems.</p><p>Warning signs can include: marked infant hypotonia, poor head control, delayed rolling or sitting, weak cry or cough; proximal weakness, legs weaker than hands, and reduced reflexes; feeding effort, choking, recurrent respiratory infections, or nighttime underventilation; family history of SMA, unexplained infant weakness, or positive carrier screening. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>Disease-modifying therapies may be available, but suitability depends on SMA type, timing, clinical status, and access. Care also includes respiratory, nutrition, swallowing, rehabilitation, orthopedic, and genetic-counseling support.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Most SMA is autosomal recessive and related to biallelic SMN1 changes; SMN2 copy number influences severity but does not fully predict the course.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
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
      name: 'MedlinePlus Genetics: Spinal muscular atrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/spinal-muscular-atrophy/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Spinal muscular atrophy is a group of inherited neuromuscular disorders, usually related to SMN1 gene changes, in which motor-neuron loss causes progressive weakness, motor delay, and sometimes swallowing or breathing problems. Common clues include marked infant hypotonia, poor head control, delayed rolling or sitting, weak cry or cough and proximal weakness, legs weaker than hands, and reduced reflexes.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>Disease-modifying therapies may be available, but suitability depends on SMA type, timing, clinical status, and access. Care also includes respiratory, nutrition, swallowing, rehabilitation, orthopedic, and genetic-counseling support.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'neurological',
  charityIds: [65],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

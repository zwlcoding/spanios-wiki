import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRetinoblastoma: DiseaseDraft = {
  ...entity(1103, 'catalog-china-first-rare-disease-catalog-103'),
  name: 'Retinoblastoma',
  nameEn: 'Retinoblastoma',
  alias: 'RB, First Rare Disease Catalog item 103',
  slug: 'retinoblastoma',
  oneSentence:
    'Retinoblastoma is the most common intraocular cancer in children, often related to RB1 gene changes, and white pupil reflex, strabismus, or vision changes need urgent ophthalmic-oncology assessment.',
  plainName:
    'A childhood eye cancer where white pupil reflex and strabismus are key warning signs',
  prevalence:
    'Included in China’s first rare disease catalog; international estimates are often about 1 in 15,000-20,000 newborns.',
  quickLook: {
    whatItIs:
      'Retinoblastoma is the most common intraocular cancer in children, often related to RB1 gene changes, and white pupil reflex, strabismus, or vision changes need urgent ophthalmic-oncology assessment.',
    whoToSeeFirst:
      'Start with Ophthalmology emergency, Pediatric retina or ocular oncology, Pediatric oncology; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Retinoblastoma can result from somatic or germline RB1 changes; bilateral, multifocal, early-onset, or family-history cases especially need genetic counseling.',
    hasTreatment:
      'Treatment depends on stage and whether one or both eyes are involved. Options may include local therapy, chemotherapy, intra-arterial treatment, laser or cryotherapy, radiotherapy, or eye removal when needed to protect life.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'photos repeatedly show a white pupil reflex or cat-eye-like reflection',
      'an infant or child develops persistent strabismus, nystagmus, or vision change',
      'eye redness, pain, bulging, or abnormal pupil appearance occurs',
      'family history includes retinoblastoma or childhood eye cancer',
    ],
    commonWrongTurns: [
      'assuming leukocoria is just flash reflection and delaying dilated retinal examination',
      'treating only strabismus or amblyopia without excluding an eye tumor',
      'missing genetic counseling and sibling or future-child screening',
    ],
    firstDepartments: [
      'Ophthalmology emergency',
      'Pediatric retina or ocular oncology',
      'Pediatric oncology',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'bring photos showing leukocoria or strabismus and note when changes began',
      'bring eye examinations, ultrasound, MRI, treatment records, and family cancer history',
      'record whether one or both eyes are affected and whether eye pain, redness, or systemic symptoms occurred',
    ],
    testsToAskAbout: [
      'dilated retinal examination and fundus photography',
      'ocular ultrasound and MRI when indicated, while avoiding unnecessary biopsy',
      'RB1 genetic testing and family counseling',
    ],
    questionsForDoctor: [
      'What is the stage and risk of spread, and what is the treatment sequence?',
      'Is eye or vision preservation possible, and when is eye removal necessary to protect life?',
      'Is RB1 testing needed, and how should siblings be screened?',
      'How often is follow-up needed, and what second-cancer or recurrence signs matter?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Retinoblastoma is the most common intraocular cancer in children, often related to RB1 gene changes, and white pupil reflex, strabismus, or vision changes need urgent ophthalmic-oncology assessment.</p><p>Warning signs can include: photos repeatedly show a white pupil reflex or cat-eye-like reflection; an infant or child develops persistent strabismus, nystagmus, or vision change; eye redness, pain, bulging, or abnormal pupil appearance occurs; family history includes retinoblastoma or childhood eye cancer. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>Treatment depends on stage and whether one or both eyes are involved. Options may include local therapy, chemotherapy, intra-arterial treatment, laser or cryotherapy, radiotherapy, or eye removal when needed to protect life.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Retinoblastoma can result from somatic or germline RB1 changes; bilateral, multifocal, early-onset, or family-history cases especially need genetic counseling.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
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
      name: 'MedlinePlus Genetics: Retinoblastoma',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/retinoblastoma/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Retinoblastoma is the most common intraocular cancer in children, often related to RB1 gene changes, and white pupil reflex, strabismus, or vision changes need urgent ophthalmic-oncology assessment. Common clues include photos repeatedly show a white pupil reflex or cat-eye-like reflection and an infant or child develops persistent strabismus, nystagmus, or vision change.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>Treatment depends on stage and whether one or both eyes are involved. Options may include local therapy, chemotherapy, intra-arterial treatment, laser or cryotherapy, radiotherapy, or eye removal when needed to protect life.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'oncology',
  charityIds: [75],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

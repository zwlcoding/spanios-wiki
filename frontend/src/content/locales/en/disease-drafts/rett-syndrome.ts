import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRettSyndrome: DiseaseDraft = {
  ...entity(2072, 'disease-rett-syndrome'),
  name: 'Rett syndrome',
  nameEn: 'Rett syndrome',
  alias: 'RTT; Rett syndrome; China Second Rare Disease Catalog item 72',
  oneSentence:
    'Rett syndrome is a neurodevelopmental disorder usually caused by MECP2 variants, often causing early developmental regression, loss of purposeful hand use, repetitive hand movements, seizures, and breathing or movement problems.',
  plainName:
    'A genetic neurodevelopmental condition with early regression and repetitive hand movements',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 9,000 to 10,000 females, while affected males are rare and often more severely affected.",
  quickLook: {
    whatItIs:
      'Classic Rett syndrome mainly affects girls. Development may seem typical for the first months, followed by stagnation and regression, especially in language, communication, and purposeful hand use.',
    whoToSeeFirst:
      'Developmental regression, hand-wringing or washing movements, abnormal gait, seizures, abnormal breathing rhythm, or slowing head growth should be assessed by pediatric neurology, developmental pediatrics, and genetics.',
    isGenetic:
      'Most cases are caused by a new MECP2 variant and are not inherited from a parent, but genetic counseling is still needed to explain recurrence risk and family testing.',
    hasTreatment:
      'Care is multidisciplinary rehabilitation and complication management. The FDA has approved trofinetide for people age 2 years and older, but access and side effects need specialist review.',
    commonDelayReason:
      'Early signs may be labeled autism, cerebral palsy, epilepsy, or developmental delay. Diagnosis is delayed when regression after skill gain and characteristic hand movements are missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Development stalls or regresses around 6 to 18 months, with loss of speech, communication, grasp, or purposeful hand use.',
      'Repeated hand-wringing, clapping, or washing movements with unsteady gait, abnormal tone, or cold hands and feet.',
      'Seizures, sleep issues, breath-holding or hyperventilation, feeding or swallowing difficulty, constipation, or scoliosis.',
      'Girls are more commonly affected; boys with severe early encephalopathy, seizures, and developmental problems may have MECP2-related disease.',
    ],
    commonWrongTurns: [
      'Treating only as autism or developmental delay without documenting the regression timeline and hand movements.',
      'Focusing only on seizures while missing swallowing, breathing, nutrition, bone, and communication needs.',
      'Not having genetics review when testing is negative or shows a variant of uncertain significance.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Developmental pediatrics',
      'Medical genetics',
      'Rehabilitation, nutrition, and swallowing clinics',
    ],
    diagnosisChecklist: [
      'Bring birth history, milestones, regression timeline, videos, and school or therapy assessments.',
      'Bring EEG, brain MRI, seizure medicines, sleep, breathing, swallowing, and nutrition records.',
      'Record hand movements, walking ability, scoliosis, constipation, pain, communication methods, and care needs.',
    ],
    testsToAskAbout: [
      'MECP2 sequencing and deletion or duplication testing, with broader neurodevelopmental testing if needed.',
      'EEG, swallowing, nutrition, bone density or scoliosis, and sleep or breathing assessment.',
      'Suitability for trofinetide or clinical trials and monitoring for diarrhea and vomiting.',
    ],
    questionsForDoctor: [
      'Does this fit classic Rett, atypical Rett, or another MECP2-related disorder?',
      'How should communication support, physical, occupational, speech, and swallowing therapy be organized?',
      'How often should seizures, breathing, nutrition, constipation, and scoliosis be reviewed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Rett syndrome often begins with apparently typical early development followed by stagnation and regression. Children may lose speech, communication, and purposeful hand use, develop hand-wringing, clapping, or washing movements, and have poor coordination, gait problems, and developmental delay.</p><p>Common associated problems include seizures, abnormal breathing rhythm, sleep disturbance, feeding and swallowing difficulty, reflux, constipation, scoliosis, low bone density, cold hands and feet, anxiety, and irritability.</p>',
    diagnosis:
      '<p>Diagnosis combines the developmental history, neurologic examination, and genetic testing. An MECP2 variant supports the diagnosis, but clinicians still judge whether the phenotype fits classic or atypical Rett syndrome.</p><p>Evaluation also addresses EEG and seizure type, nutrition and swallowing, breathing and sleep, bone and spine health, and rehabilitation function. Differential diagnosis includes autism spectrum disorder, cerebral palsy, epileptic encephalopathy, and other neurodevelopmental disorders such as CDKL5 or STXBP1-related disease.</p>',
    treatment:
      '<p>Treatment is long-term multidisciplinary care: seizure control, nutrition and swallowing support, constipation and reflux management, physical, occupational, speech and communication therapy, sleep and breathing management, scoliosis monitoring, and bone health care.</p><p>Trofinetide has been approved in the United States for Rett syndrome age 2 years and older. Suitability, access, and adverse effects such as diarrhea and vomiting should be reviewed by clinicians familiar with Rett syndrome.</p>',
    longTermCare:
      '<p>Care plans should support function, comfort, and sustainable family caregiving. Follow-up monitors seizures, swallowing, nutrition, weight, breathing and sleep, bone density, scoliosis, pain, constipation, and communication ability.</p><p>Augmentative communication, positioning, braces, mobility devices, school support, respite care, and caregiver mental health support can improve participation and family resilience.</p>',
    fertilityOrFamily:
      '<p>Most MECP2 variants are de novo, so parental recurrence risk is usually low but not zero. Genetic counseling can explain germline mosaicism, family testing, prenatal diagnosis, or preimplantation genetic testing options.</p>',
    emergencySigns:
      '<p>Urgent care is needed for prolonged or clustered seizures, breath-holding with cyanosis, severe choking or aspiration, dehydration, rapid weight loss, persistent vomiting, severe constipation with distension, suspected fracture, or sudden loss of walking.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Rett syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/rett-syndrome',
    },
    {
      name: 'FDA: FDA approves first treatment for Rett Syndrome',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-rett-syndrome',
    },
  ],
  symptoms:
    '<p>Features include developmental stagnation or regression, loss of speech and hand function, repetitive hand movements, gait problems, seizures, breathing and sleep problems, feeding difficulty, constipation, and scoliosis.</p>',
  diagnosis:
    '<p>Diagnosis combines developmental regression and typical features, pediatric neurology evaluation, MECP2 testing, and assessment of seizures, swallowing, breathing, nutrition, and skeletal complications.</p>',
  treatment:
    '<p>Care is multidisciplinary rehabilitation and complication management; trofinetide is approved in some regions for patients age 2 years and older and requires side-effect and access review.</p>',
  prognosis:
    '<p>Most people need lifelong support. Function varies, and coordinated care for seizures, nutrition, breathing, bones, and communication can improve quality of life.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'rett-syndrome',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 426,
    name: 'rett-syndrome-journey.png',
    url: '/images/diseases/rett-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

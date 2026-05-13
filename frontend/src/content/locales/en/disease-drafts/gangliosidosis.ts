import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGangliosidosis: DiseaseDraft = {
  ...entity(2030, 'disease-gangliosidosis'),
  name: 'Gangliosidosis',
  nameEn: 'Gangliosidosis',
  alias:
    'GM1 gangliosidosis, GM2 gangliosidosis, Tay-Sachs disease, Sandhoff disease, China Second Rare Disease Catalog item 30',
  slug: 'gangliosidosis',
  oneSentence:
    'Gangliosidosis refers to a group of autosomal recessive lysosomal storage disorders in which enzyme defects allow GM1 or GM2 gangliosides to build up, causing developmental regression, movement problems, seizures, and multisystem involvement.',
  plainName:
    'Inherited metabolic disorders where missing cleanup enzymes allow gangliosides to build up in the nervous system',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates GM1 gangliosidosis at about 1 in 100,000 to 200,000 newborns, while GM2 frequencies vary by population.",
  quickLook: {
    whatItIs:
      'This is a group rather than one disease. GM1 is usually related to GLB1 and beta-galactosidase deficiency; GM2 can involve HEXA, HEXB, or GM2A and the beta-hexosaminidase pathway. Progressive neurologic decline is often the main issue.',
    whoToSeeFirst:
      'Developmental plateau or regression, abnormal tone, exaggerated startle, seizures, cherry-red spot, vision loss, feeding problems, enlarged liver or spleen, or skeletal findings should prompt pediatric neurology and metabolic genetics referral.',
    isGenetic:
      'Most forms are autosomal recessive. Parents are often carriers, so confirmed cases need genetic counseling, parental testing, and sibling risk assessment.',
    hasTreatment:
      'Most forms are managed with supportive care: seizure control, swallowing and nutrition care, respiratory support, rehabilitation, pain and comfort care. Some therapies are under study, and trial suitability depends on the exact type and stage.',
    commonDelayReason:
      'Early disease may be labeled as cerebral palsy, epilepsy, autism, developmental delay, or unexplained neurodegeneration. Regression plus eye, liver-spleen, skeletal, or enzyme clues should prompt lysosomal storage testing.',
  },
  patientJourney: {
    whenToSuspect: [
      'A baby or child stops gaining skills or loses skills such as head control, sitting, movement, or words.',
      'There is low or high muscle tone, exaggerated startle, seizures, vision loss, swallowing difficulty, or recurrent chest infections.',
      'Eye exam shows a cherry-red spot, or there are coarse facial features, enlarged liver or spleen, skeletal changes, cardiomyopathy, or hearing problems.',
      'Family history includes developmental regression, childhood deaths, consanguinity, or known GLB1, HEXA, HEXB, or related variants.',
    ],
    commonWrongTurns: [
      'Treating only cerebral palsy or epilepsy without asking whether previously gained skills were lost.',
      'Doing only brain MRI or EEG without eye, enzyme, and metabolic-genetic evaluation.',
      'Treating feeding problems and pneumonia separately without assessing swallowing and neurologic progression.',
      'Missing carrier and recurrence-risk counseling for parents and siblings after diagnosis.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Metabolic genetics clinic',
      'Rehabilitation medicine',
      'Pediatric ophthalmology',
    ],
    diagnosisChecklist: [
      'List developmental milestones by month, when progress slowed or regressed, seizure types, and medication response.',
      'Bring brain MRI, EEG, eye exam, hearing, heart, abdominal ultrasound, skeletal imaging, and metabolic screening results.',
      'Record feeding, swallowing, choking, pneumonia, sleep, pain, tone, and nutrition changes.',
      'Collect family history of childhood regression, early deaths, consanguinity, or known carrier status.',
    ],
    testsToAskAbout: [
      'Relevant enzyme activity testing in leukocytes or fibroblasts, such as beta-galactosidase or beta-hexosaminidase A/B.',
      'Genetic testing for GLB1, HEXA, HEXB, GM2A, and related genes with parental confirmation.',
      'Eye exam for cherry-red spot, brain MRI, EEG, hearing, heart, liver-spleen, and skeletal assessments.',
      'Swallow study, nutrition evaluation, respiratory and sleep assessment, and seizure-plan review.',
    ],
    questionsForDoctor: [
      'Is this GM1, Tay-Sachs, Sandhoff, or another GM2-related type, and how is the age-of-onset form classified?',
      'Which problems need priority now: seizures, swallowing and nutrition, breathing, pain, or rehabilitation?',
      'Are any clinical trials or specialty centers relevant, and what are realistic supportive-care goals?',
      'What testing do parents and siblings need, and what reproductive options are available before another pregnancy?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Gangliosidoses often cause progressive neurologic involvement. Infantile forms may show developmental plateau or regression, abnormal tone, exaggerated startle, seizures, vision loss, feeding and swallowing difficulty, and recurrent respiratory infections.</p><p>Some patients have a cherry-red spot, enlarged liver or spleen, coarse facial features, skeletal changes, cardiomyopathy, or hearing problems. Later-onset forms may present with ataxia, dystonia, language or cognitive decline, psychiatric or behavioral issues, or gradual loss of motor function.</p>',
    diagnosis:
      '<p>Diagnosis combines clinical progression, eye and imaging clues, enzyme activity testing, and genetic testing. GM1 usually involves beta-galactosidase and GLB1; GM2-related disease may involve beta-hexosaminidase A/B and genes such as HEXA, HEXB, or GM2A.</p><p>Differential diagnosis includes neuronal ceroid lipofuscinosis, mitochondrial disease, other lysosomal storage disorders, genetic epileptic encephalopathies, cerebral palsy, and degenerative leukodystrophies.</p>',
    treatment:
      '<p>Most forms are currently managed with supportive care, including seizure control, nutrition and swallowing management, reflux and constipation care, respiratory infection prevention, rehabilitation, pain and spasticity management, and family support.</p><p>Substrate reduction, enzyme replacement, gene therapy, and other approaches are being studied or may be available only in trials or specific settings. Suitability depends on the exact type, age, and disease stage.</p>',
    longTermCare:
      '<p>Long-term care should center on function, comfort, and family goals, with regular review of seizures, swallowing, nutrition, breathing, sleep, pain, tone, vision, hearing, and caregiver burden. As disease progresses, families may need anticipatory guidance, palliative care, and home support.</p>',
    fertilityOrFamily:
      '<p>Gangliosidoses are usually autosomal recessive. Parents are typically carriers, and recurrence risk in future pregnancies depends on the specific family variants.</p><p>Once variants are known, siblings and high-risk relatives can receive carrier testing, and families can discuss prenatal diagnosis or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Seek urgent care for prolonged or clustered seizures, breathing difficulty, choking, cyanosis, dehydration, infection with reduced responsiveness, inability to maintain feeding, uncontrolled pain, or any situation where caregivers cannot provide safe care at home.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: GM1 gangliosidosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gm1-gangliosidosis/',
    },
    {
      name: 'MedlinePlus Genetics: HEXA gene',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/gene/hexa/',
    },
  ],
  symptoms:
    '<p>Common features include developmental plateau or regression, abnormal tone, exaggerated startle, seizures, vision loss, swallowing difficulty, recurrent respiratory infections, and sometimes cherry-red spot, enlarged liver or spleen, skeletal, or cardiac involvement.</p>',
  diagnosis:
    '<p>Diagnosis uses clinical progression, eye and imaging assessment, relevant enzyme activity testing, and genetic testing for genes such as GLB1, HEXA, HEXB, and GM2A.</p>',
  treatment:
    '<p>Most forms are managed supportively with seizure, swallowing, nutrition, breathing, rehabilitation, pain, and comfort care; trial or experimental options require metabolic-genetics review.</p>',
  prognosis:
    '<p>Outlook depends on the exact type and age of onset. Early-onset forms often progress quickly, while later-onset forms may progress more slowly; early diagnosis helps guide care and family-risk planning.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 384,
    name: 'gangliosidosis-journey.png',
    url: '/images/diseases/gangliosidosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

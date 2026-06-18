import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlstromSyndrome: DiseaseDraft = {
  ...entity(6101, 'disease-alstrom-syndrome'),
  name: 'Alström syndrome',
  nameEn: 'Alström Syndrome',
  alias:
    'Alstrom syndrome, Alström-Hallgren syndrome, ALMS, ALMS1-related ciliopathy',
  oneSentence:
    'Alström syndrome is an autosomal recessive ALMS1-related multisystem disorder that often begins with early vision problems and can later affect hearing, weight and glucose regulation, the heart, liver, kidneys, and lungs.',
  plainName:
    'A genetic condition affecting vision, hearing, metabolism, the heart, and multiple organs',
  prevalence:
    'MedlinePlus Genetics notes that more than 900 people with Alström syndrome have been reported worldwide.',
  quickLook: {
    whatItIs:
      'This is a ciliopathy that can start with nystagmus, light sensitivity, or vision loss in infancy, then gradually involve hearing, weight, glucose, heart, liver, kidney, and lung health.',
    whoToSeeFirst:
      'Early retinal disease or nystagmus plus obesity, hearing loss, cardiomyopathy, or abnormal glucose should prompt genetics, ophthalmology, pediatric endocrinology, and cardiology assessment.',
    isGenetic:
      'It is usually autosomal recessive and caused by pathogenic variants in ALMS1. Parents are often carriers, so confirmed families need genetic counseling.',
    hasTreatment:
      'There is no cure. Care focuses on early diagnosis, vision and hearing support, cardiomyopathy and metabolic management, liver/kidney/lung surveillance, rehabilitation, and school support.',
    commonDelayReason:
      'Early features may be handled separately as retinal disease, obesity, diabetes, or hearing loss. Diagnosis is delayed when the multisystem pattern is missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infant or young child has nystagmus, light sensitivity, vision loss, or cone-rod dystrophy.',
      'Childhood obesity, insulin resistance, type 2 diabetes, or acanthosis nigricans appears with sensory problems.',
      'Hearing loss, dilated cardiomyopathy, abnormal liver tests, kidney dysfunction, or respiratory problems coexist.',
      'Siblings have similar vision, hearing, and metabolic findings or parents are related.',
    ],
    commonWrongTurns: [
      'Managing only the eye disease while missing heart, metabolic, hearing, and kidney surveillance.',
      'Attributing weight and diabetes only to lifestyle without considering genetic metabolic regulation.',
      'Recognizing the syndrome only after cardiomyopathy or kidney disease has progressed.',
    ],
    firstDepartments: [
      'Medical genetics',
      'Ophthalmology/retina specialist',
      'Pediatric endocrinology',
      'Cardiology or pediatric cardiology',
    ],
    diagnosisChecklist: [
      'Bring eye exams, ERG, visual history, and retinal imaging.',
      'Bring hearing tests, echocardiogram/ECG, glucose/lipid tests, liver/kidney tests, and urine results.',
      'Record weight trajectory, development, exercise tolerance, breathing symptoms, and family history.',
    ],
    testsToAskAbout: [
      'ALMS1 testing or ciliopathy gene panel/exome sequencing.',
      'Electroretinography, retinal imaging, and hearing assessment.',
      'Echocardiogram/ECG, glucose metabolism, lipids, liver and kidney function, urine protein, and lung follow-up.',
    ],
    questionsForDoctor: [
      'Which organ systems are already affected and which need routine screening?',
      'How often should heart, glucose, hearing, and kidney monitoring happen?',
      'Should siblings and parents have carrier or targeted testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Alström syndrome may begin in infancy with nystagmus, light sensitivity, and progressive vision loss. Hearing loss, childhood obesity, insulin resistance or type 2 diabetes may follow. Some people develop dilated cardiomyopathy, liver fibrosis, kidney disease, lung problems, short stature, or pubertal/endocrine concerns.</p>',
    diagnosis:
      '<p>Diagnosis combines the multisystem pattern with eye and hearing testing, cardiac and metabolic assessment, and ALMS1 genetic testing. Clinicians distinguish it from Bardet-Biedl syndrome, other inherited retinal disorders, syndromic obesity, and mitochondrial or metabolic disorders.</p>',
    treatment:
      '<p>There is no curative treatment. Care includes low-vision and hearing support, cardiomyopathy treatment, diabetes and lipid management, nutrition and activity support, liver/kidney/lung monitoring, rehabilitation, and school accommodations. Weight-loss or glucose plans should be guided by teams familiar with syndromic obesity.</p>',
    longTermCare:
      '<p>Lifelong multidisciplinary follow-up should track vision, hearing, heart function, glucose/lipids, liver and kidney function, lung function, puberty, mental health, and education needs. Families benefit from a written multisystem surveillance plan.</p>',
    fertilityOrFamily:
      '<p>Autosomal recessive inheritance means siblings may have a 25% recurrence risk when both parents are carriers. Families can discuss carrier testing, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Urgent care is needed for breathing difficulty, chest pain or fainting, worsening heart failure, severe high or low glucose, markedly reduced urine, swelling, or acute vision change.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Alström syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/alstrom-syndrome/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Early vision loss, hearing loss, obesity, insulin resistance or diabetes, cardiomyopathy, and liver, kidney, or lung involvement may occur.</p>',
  diagnosis:
    '<p>Diagnosis combines eye, hearing, cardiac, metabolic, liver and kidney assessment with ALMS1 genetic testing.</p>',
  treatment:
    '<p>Care is supportive and multidisciplinary: vision and hearing support, heart and metabolic treatment, liver/kidney/lung monitoring, rehabilitation, and education support.</p>',
  prognosis:
    '<p>Course varies. Early recognition and ongoing surveillance for heart, metabolic, and kidney complications can reduce preventable risk.</p>',
  sourceName: 'MedlinePlus Genetics: Alström syndrome',
  sourceUrl: 'https://medlineplus.gov/genetics/condition/alstrom-syndrome/',
  slug: 'alstrom-syndrome',
  categorySlug: 'multisystem',
  charityIds: [84],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

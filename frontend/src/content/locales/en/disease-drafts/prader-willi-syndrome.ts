import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePraderWilliSyndrome: DiseaseDraft = {
  ...entity(1093, 'catalog-china-first-rare-disease-catalog-93'),
  name: 'Prader-Willi Syndrome',
  nameEn: 'Prader-Willi Syndrome',
  alias: 'PWS, Prader-Willi syndrome, First Rare Disease Catalog item 93',
  slug: 'prader-willi-syndrome',
  oneSentence:
    'Prader-Willi syndrome is a genetic neurodevelopmental disorder usually involving abnormal paternal expression on chromosome 15, with infant hypotonia and feeding difficulty followed by hyperphagia, weight-management difficulty, and developmental-behavioral needs.',
  plainName:
    'A genetic syndrome affecting hunger, development, and behavior regulation',
  prevalence:
    'Included in China’s first rare disease catalog; international estimates are often about 1 in 10,000-30,000 people.',
  quickLook: {
    whatItIs:
      'Prader-Willi syndrome is a genetic neurodevelopmental disorder usually involving abnormal paternal expression on chromosome 15, with infant hypotonia and feeding difficulty followed by hyperphagia, weight-management difficulty, and developmental-behavioral needs.',
    whoToSeeFirst:
      'Start with Pediatric endocrinology, Medical genetics, Pediatric neurology; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Prader-Willi syndrome is a genetic neurodevelopmental disorder usually involving abnormal paternal expression on chromosome 15, with infant hypotonia and feeding difficulty followed by hyperphagia, weight-management difficulty, and developmental-behavioral needs.',
    hasTreatment:
      'Current care focuses on early rehabilitation, nutrition and weight management, sleep-breathing assessment, endocrine review, and behavioral support. Growth hormone or other endocrine treatment should be assessed by a team familiar with PWS.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'a newborn or infant is very floppy, has a weak cry, poor sucking, prolonged feeds, or needs tube feeding',
      'after infancy, appetite becomes intense, satiety is limited, and weight rises quickly',
      'slow linear growth, delayed puberty, relatively small hands or feet, or endocrine concerns are noted',
      'developmental delay, learning difficulty, rigid or compulsive behaviors, emotional outbursts, or sleep-disordered breathing are present',
    ],
    commonWrongTurns: [
      'treating infancy symptoms only as prematurity, poor feeding, or malnutrition without genetic testing',
      'framing food-seeking as willpower or parenting rather than impaired hunger regulation',
      'focusing only on diet while missing sleep apnea, endocrine issues, bone health, and behavior support',
    ],
    firstDepartments: [
      'Pediatric endocrinology',
      'Medical genetics',
      'Pediatric neurology',
      'Rehabilitation medicine',
      'Nutrition',
    ],
    diagnosisChecklist: [
      'bring birth history, feeding history, height-weight curves, developmental milestones, and behavior timeline',
      'bring prior genetic or methylation testing, endocrine labs, sleep study, and rehabilitation assessments',
      'track food-security needs, snoring, daytime sleepiness, constipation, skin picking, and behavior concerns',
    ],
    testsToAskAbout: [
      'PWS DNA methylation testing, with chromosomal microarray, UPD, or imprinting-center analysis when needed',
      'growth hormone axis, thyroid, adrenal, and gonadal endocrine assessment',
      'sleep study, nutrition assessment, bone age or bone density, and scoliosis screening',
    ],
    questionsForDoctor: [
      'Can the test result identify the genetic mechanism and family recurrence risk?',
      'How should we structure food security, activity, school support, and home routines?',
      'Should growth hormone therapy be assessed, and what screening is needed first?',
      'How often should sleep, behavior, and endocrine issues be reviewed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Prader-Willi syndrome is a genetic neurodevelopmental disorder usually involving abnormal paternal expression on chromosome 15, with infant hypotonia and feeding difficulty followed by hyperphagia, weight-management difficulty, and developmental-behavioral needs.</p><p>Warning signs can include: a newborn or infant is very floppy, has a weak cry, poor sucking, prolonged feeds, or needs tube feeding; after infancy, appetite becomes intense, satiety is limited, and weight rises quickly; slow linear growth, delayed puberty, relatively small hands or feet, or endocrine concerns are noted; developmental delay, learning difficulty, rigid or compulsive behaviors, emotional outbursts, or sleep-disordered breathing are present. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>Current care focuses on early rehabilitation, nutrition and weight management, sleep-breathing assessment, endocrine review, and behavioral support. Growth hormone or other endocrine treatment should be assessed by a team familiar with PWS.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Prader-Willi syndrome is a genetic neurodevelopmental disorder usually involving abnormal paternal expression on chromosome 15, with infant hypotonia and feeding difficulty followed by hyperphagia, weight-management difficulty, and developmental-behavioral needs.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
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
      name: 'MedlinePlus Genetics: Prader-Willi syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/prader-willi-syndrome/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Prader-Willi syndrome is a genetic neurodevelopmental disorder usually involving abnormal paternal expression on chromosome 15, with infant hypotonia and feeding difficulty followed by hyperphagia, weight-management difficulty, and developmental-behavioral needs. Common clues include a newborn or infant is very floppy, has a weak cry, poor sucking, prolonged feeds, or needs tube feeding and after infancy, appetite becomes intense, satiety is limited, and weight rises quickly.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>Current care focuses on early rehabilitation, nutrition and weight management, sleep-breathing assessment, endocrine review, and behavioral support. Growth hormone or other endocrine treatment should be assessed by a team familiar with PWS.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [63],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

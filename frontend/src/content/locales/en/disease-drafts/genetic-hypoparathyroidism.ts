import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGeneticHypoparathyroidism: DiseaseDraft = {
  ...entity(2034, 'disease-genetic-hypoparathyroidism'),
  name: 'Genetic hypoparathyroidism',
  nameEn: 'Genetic hypoparathyroidism',
  alias:
    'Inherited hypoparathyroidism, hypocalcemia with low PTH, China Second Rare Disease Catalog item 34',
  slug: 'genetic-hypoparathyroidism',
  oneSentence:
    'Genetic hypoparathyroidism is a group of inherited low-calcium disorders caused by abnormal parathyroid development, PTH secretion, or calcium-sensing pathways, leading to hypocalcemia, hyperphosphatemia, spasms, seizures, and kidney-risk monitoring needs.',
  plainName:
    'An inherited low-calcium condition caused by too little parathyroid hormone or related signaling',
  prevalence:
    "Included in China's second rare disease catalog; it is rare overall, with wide variation by genetic type and age at diagnosis.",
  quickLook: {
    whatItIs:
      'The shared biochemical pattern is low calcium, high phosphorus, and low or inappropriately normal PTH. Genetic causes can involve CASR, GCM2, PTH, GATA3, TBX1, or syndromic disorders.',
    whoToSeeFirst:
      'Recurrent tingling, cramps, spasms, seizures, low calcium, or childhood dental/developmental clues should prompt endocrinology or pediatric endocrinology review.',
    isGenetic:
      'Inheritance varies by cause and may be autosomal dominant, recessive, X-linked, or syndromic. Genetic counseling is useful after diagnosis.',
    hasTreatment:
      'Treatment commonly uses calcium, active vitamin D, magnesium correction, and diet planning. The goal is symptom control while avoiding excess urine calcium and kidney complications.',
    commonDelayReason:
      'Symptoms may be mild for years and mistaken for anxiety, hyperventilation, epilepsy, migraine, or routine calcium deficiency. PTH, phosphorus, magnesium, and urine calcium are often the missing clues.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated tingling around the mouth, fingers, or toes, muscle cramps, carpopedal spasm, or throat spasm.',
      'Low calcium with high phosphorus and low or inappropriately normal PTH.',
      'Childhood seizures, enamel defects, cataracts, basal ganglia calcification, developmental findings, or recurrent hypocalcemia.',
      'Family history of low calcium, seizures, kidney stones, hearing issues, immune problems, or syndromic clues.',
    ],
    commonWrongTurns: [
      'Treating it as simple calcium deficiency without checking PTH, phosphorus, magnesium, and urine calcium.',
      'Treating seizures without rechecking electrolytes and ECG QT interval.',
      'Monitoring only blood calcium after treatment and missing urine calcium, kidney function, and kidney imaging.',
      'Not separating surgical, autoimmune, genetic, and low-magnesium causes.',
    ],
    firstDepartments: [
      'Endocrinology',
      'Pediatric endocrinology',
      'Metabolic genetics',
      'Nephrology',
    ],
    diagnosisChecklist: [
      'Document all low-calcium episodes, seizures, spasms, tingling, throat tightness, and treatment response.',
      'Bring calcium, ionized or albumin-corrected calcium, phosphorus, magnesium, PTH, vitamin D, kidney function, and urine calcium results.',
      'Bring ECG, brain imaging, kidney ultrasound, eye, dental, and hearing records.',
      'Record neck surgery, radiation, autoimmune disease, family low calcium, and syndromic features.',
    ],
    testsToAskAbout: [
      'Repeat calcium, phosphorus, magnesium, and PTH plus 24-hour urine calcium or urine calcium/creatinine ratio.',
      'Kidney ultrasound or other assessment for stones, nephrocalcinosis, and kidney function.',
      'ECG QT interval, cataract, dental, neurologic, and hearing assessments when relevant.',
      'Genetic or syndrome testing such as CASR, GCM2, PTH, GATA3, or TBX1 based on the pattern.',
    ],
    questionsForDoctor: [
      'Is this genetic hypoparathyroidism, postsurgical hypoparathyroidism, low magnesium, pseudohypoparathyroidism, or another cause?',
      'What calcium range is safest for me, and how do we avoid high urine calcium and kidney complications?',
      'How should calcium, calcitriol or active vitamin D, magnesium, and diet be adjusted?',
      'Do relatives need testing, and how should doses change during pregnancy, surgery, or infection?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Low calcium can cause tingling around the mouth and in the hands or feet, muscle cramps, carpopedal spasm, throat spasm, seizures, abnormal heart rhythm, fatigue, anxiety-like symptoms, and cognitive difficulty. Chronic disease can cause cataracts, dental changes, skin, hair, or nail changes, and brain calcifications.</p><p>Some people have mild symptoms and are diagnosed through labs, seizure evaluation, or ECG findings. Children may need assessment for development, teeth, hearing, immunity, or syndromic features.</p>',
    diagnosis:
      '<p>Diagnosis confirms low calcium, high phosphorus, and low or inappropriately low PTH, while checking magnesium, vitamin D, kidney function, and urine calcium. Low magnesium can cause reversible PTH problems and must be corrected.</p><p>Genetic hypoparathyroidism is distinguished from postsurgical, autoimmune, pseudohypoparathyroidism, vitamin D deficiency, kidney disease, and medication-related hypocalcemia. Genetic testing can clarify family risk.</p>',
    treatment:
      '<p>Acute symptomatic hypocalcemia, seizures, or ECG changes may require IV calcium with heart monitoring. Long-term care usually uses oral calcium, calcitriol or active vitamin D, magnesium when needed, and diet planning.</p><p>The goal is symptom relief while reducing risks of high urine calcium, kidney stones, nephrocalcinosis, and kidney-function decline. Selected difficult cases may be evaluated for PTH-related therapy.</p>',
    longTermCare:
      '<p>Monitoring includes calcium, phosphorus, magnesium, creatinine/eGFR, urine calcium, kidney imaging, ECG, eye, and dental follow-up. Illness, diarrhea, pregnancy, breastfeeding, surgery, or medication changes can alter calcium needs.</p>',
    fertilityOrFamily:
      '<p>Inheritance depends on the specific gene. Once a variant is known, testing can be offered to parents, siblings, children, and other at-risk relatives. Pregnancy and breastfeeding need endocrine and obstetric coordination.</p>',
    emergencySigns:
      '<p>Seek emergency care for seizures, throat tightness or breathing difficulty, fainting, palpitations or chest pain, confusion, severe spasms, or vomiting/diarrhea that prevents taking medicines.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Hypoparathyroidism',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/000385.htm',
    },
    {
      name: 'NICHD: How is hypoparathyroidism treated?',
      type: 'official',
      url: 'https://www.nichd.nih.gov/health/topics/hypopara/conditioninfo/treatment',
    },
  ],
  symptoms:
    '<p>Low calcium can cause tingling, cramps, carpopedal spasm, throat spasm, seizures, arrhythmias, cataracts, dental changes, and brain calcifications.</p>',
  diagnosis:
    '<p>Diagnosis uses low calcium, high phosphorus, low or inappropriately normal PTH, and assessment of magnesium, vitamin D, urine calcium, kidney function, and genetic causes.</p>',
  treatment:
    '<p>Treatment includes IV calcium for acute severe episodes and long-term oral calcium, active vitamin D, magnesium correction, and urine/kidney monitoring; selected cases may need PTH-related therapy review.</p>',
  prognosis:
    '<p>Careful monitoring and individualized supplementation can reduce symptoms and emergencies. Long-term risks include recurrent hypocalcemia, high urine calcium, kidney stones, nephrocalcinosis, and overtreatment.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 388,
    name: 'genetic-hypoparathyroidism-journey.png',
    url: '/images/diseases/genetic-hypoparathyroidism-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling', 'endocrine'],
};

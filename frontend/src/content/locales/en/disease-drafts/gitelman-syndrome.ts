import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGitelmanSyndrome: DiseaseDraft = {
  ...entity(35, 'disease-gitelman-syndrome'),
  name: 'Gitelman Syndrome',
  nameEn: 'Gitelman Syndrome',
  alias: 'Gitelman Syndrome, Familial Hypokalemia Hypomagnesemia, GS',
  slug: 'gitelman-syndrome',
  oneSentence:
    'Gitelman Syndrome is an inherited salt-wasting kidney tubule disorder, often presenting with low potassium, low magnesium, metabolic alkalosis, low urinary calcium, and fatigue or muscle cramps.',
  plainName:
    'An inherited condition where the kidneys cannot retain certain salts and electrolytes, causing low potassium and low magnesium',
  prevalence:
    'MedlinePlus Genetics estimates about 1 in 40,000 people worldwide; symptoms vary widely, and many are diagnosed in adolescence or adulthood due to low potassium.',
  quickLook: {
    whatItIs:
      'The kidney tubules recover electrolytes such as sodium, chloride, potassium, and magnesium. Gitelman Syndrome is most commonly linked to the SLC12A3 gene, causing long-term electrolyte imbalance; symptoms may be mild or can significantly affect daily life.',
    whoToSeeFirst:
      'When there are clues of recurrent low potassium, low magnesium, muscle cramps, fatigue, palpitations, numbness in hands/feet, or low blood pressure, evaluation can be sought at nephrology, pediatric nephrology, or endocrinology/electrolyte clinic.',
    isGenetic:
      'Usually autosomal recessive, mostly associated with biallelic pathogenic variants in SLC12A3; a few phenotypically similar cases overlap with other salt-wasting tubulopathies.',
    hasTreatment:
      'Long-term electrolyte management and follow-up plans exist. Whether potassium supplementation, magnesium supplementation, or other medications are appropriate requires doctor evaluation based on lab results, symptoms, ECG, and kidney function.',
    commonDelayReason:
      'Fatigue, cramps, dizziness, and palpitations are easily attributed to overwork, anxiety, or calcium deficiency; if potassium is supplemented just once without investigating urinary potassium, blood magnesium, and acid-base status, symptoms tend to recur.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent low potassium, especially with low magnesium, metabolic alkalosis, and low urinary calcium.',
      'Persistent fatigue, muscle cramps, numbness in hands/feet, seizure-like episodes, palpitations, or reduced exercise tolerance.',
      'Low blood pressure, salt craving, nocturia or polyuria, with lab results showing electrolyte abnormalities.',
      'Unexplained low potassium with no history of long-term diuretic use, laxatives, or repeated vomiting.',
      'Family history of low potassium, low magnesium, similar tubulopathy, or consanguinity.',
    ],
    commonWrongTurns: [
      'Supplementing potassium just once without checking urinary potassium, urinary chloride, blood magnesium, blood gas, or renin-aldosterone.',
      'Attributing muscle cramps simply to calcium deficiency, overlooking low magnesium and low potassium.',
      'Long-term management as anxiety, fatigue, or arrhythmia without investigating the root cause of electrolyte abnormalities.',
      'Failing to differentiate from Bartter syndrome, diuretic use, vomiting, laxatives, or endocrine-related low potassium.',
    ],
    firstDepartments: [
      'Nephrology',
      'Pediatric Nephrology',
      'Endocrinology/Electrolyte Clinic',
      'Cardiology (for palpitations and arrhythmia risk assessment)',
      'Medical Genetics/Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Keep records of multiple blood potassium, blood magnesium, blood chloride, bicarbonate/blood gas, creatinine, and urine electrolyte results.',
      'Record symptoms at onset, triggers, and changes after fluid or electrolyte supplementation.',
      'Inform your doctor about any use of diuretics, laxatives, licorice products, repeated vomiting, or diarrhea.',
      'Ask whether genetic testing for SLC12A3, CLCNKB, etc., is needed.',
      'Bring ECG, palpitations log, and family history of low potassium.',
    ],
    testsToAskAbout: [
      'Blood potassium, blood magnesium, blood calcium, blood chloride, bicarbonate, or blood gas analysis.',
      'Urinary potassium, urinary chloride, urinary calcium, and urinary magnesium for assessment of renal losses.',
      'Renin, aldosterone, and blood pressure assessment.',
      'ECG and Holter monitor if needed.',
      'Genetic testing for salt-wasting tubulopathies.',
    ],
    questionsForDoctor: [
      'Do my low potassium and low magnesium fit Gitelman Syndrome? What other causes need to be ruled out?',
      'What are the target electrolyte ranges and how often should I have follow-up labs?',
      'Which supplementation or medication options are suitable for me? What if I have gastrointestinal intolerance?',
      'Which symptoms suggest arrhythmia risk or severe low potassium requiring emergency care?',
      'Does my family and future pregnancy planning need genetic counseling?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Gitelman Syndrome presentations vary widely. Common clues include fatigue, muscle cramps, numbness or tingling in hands/feet, dizziness, low blood pressure, salt craving, palpitations, reduced exercise tolerance, nocturia, or polyuria. Lab findings commonly show low potassium, low magnesium, metabolic alkalosis, and low urinary calcium. A minority of patients may develop pronounced seizures, hypokalemic paralysis, or arrhythmia risk.</p>',
    diagnosis:
      '<p>Diagnosis requires integrating blood electrolytes, acid-base status, urine electrolytes, blood pressure, renin-aldosterone levels, and medication history. Typical findings include renal potassium loss, low magnesium, low urinary calcium, and metabolic alkalosis. Genetic testing showing relevant biallelic pathogenic variants supports diagnosis. Your doctor will also rule out Bartter syndrome, diuretics, vomiting, laxatives, and endocrine-related low potassium.</p>',
    treatment:
      '<p>Management focuses on long-term electrolyte supplementation and monitoring, symptom reduction, and reducing arrhythmia risk. Potassium supplementation, magnesium supplementation, potassium-sparing medications, or other options need to be adjusted by your doctor based on lab results, symptoms, blood pressure, kidney function, and tolerance. Do not self-adjust doses or stop medications without medical guidance.</p>',
    longTermCare:
      "<p>Long-term follow-up focuses on electrolyte stability, ECG changes, kidney function, blood pressure, quality of life, pregnancy planning, and medication tolerance. Patients may keep a 'low potassium and low magnesium summary' and proactively inform emergency doctors or new specialists about the condition.</p>",
    fertilityOrFamily:
      '<p>This condition is usually autosomal recessive. After clarifying genetic results, parents, siblings, and families planning pregnancy can use genetic counseling to learn about carrier testing, recurrence risks, and options for prenatal or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>When there is severe fatigue preventing walking, difficulty breathing, pronounced palpitations or fainting, seizures, rapid drop in potassium, persistent vomiting or diarrhea, or inability to take oral supplementation, seek emergency care immediately and mention suspected or confirmed Gitelman Syndrome.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Gitelman syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Gitelman Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459304/',
    },
    {
      name: 'Orphanet Journal of Rare Diseases: Gitelman syndrome',
      type: 'review',
      url: 'https://ojrd.biomedcentral.com/articles/10.1186/1750-1172-3-22',
    },
  ],
  symptoms:
    '<p>Common clues include low potassium, low magnesium, fatigue, muscle cramps, numbness in hands/feet, palpitations, low blood pressure, and salt craving.</p>',
  diagnosis:
    '<p>Assessment includes blood and urine electrolytes, acid-base status, renin-aldosterone, medication history, ECG, and relevant genetic testing.</p>',
  treatment:
    '<p>Management centers on electrolyte supplementation, symptom control, arrhythmia risk assessment, and long-term nephrology follow-up; specific plans are individualized.</p>',
  prognosis:
    '<p>Most patients can maintain stable lives with long-term management, but symptoms, arrhythmia risk, pregnancy, and medication tolerance still require ongoing follow-up.</p>',
  sourceName: 'MedlinePlus Genetics: Gitelman syndrome',
  sourceUrl: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 334,
    name: 'gitelman-syndrome-journey.png',
    url: '/images/diseases/gitelman-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryHypomagnesemia: DiseaseDraft = {
  ...entity(43, 'disease-hereditary-hypomagnesemia'),
  name: 'Hereditary Hypomagnesemia',
  nameEn: 'Hereditary Hypomagnesemia',
  alias:
    'Familial hypomagnesemia, Primary hypomagnesemia, Hereditary magnesium metabolism disorder',
  slug: 'hereditary-hypomagnesemia',
  oneSentence:
    'Hereditary hypomagnesemia is a group of genetic disorders affecting magnesium absorption in the intestines or retention in the kidneys, which can lead to various presentations including low magnesium, low calcium, seizures, heart rhythm risks, or kidney calcification.',
  plainName:
    'A group of inherited disorders where the body has trouble absorbing or retaining magnesium, resulting in chronically low blood magnesium levels.',
  prevalence:
    'Overall rare with significant variation by genetic type; some present in infancy, while others are found in childhood or adulthood due to low magnesium, kidney calcification, or family screening.',
  quickLook: {
    whatItIs:
      'This is not a single disease but a group of inherited magnesium transport disorders. The problem may occur in intestinal absorption, renal tubule reabsorption, or may simultaneously affect calcium, potassium, kidneys, and the nervous system.',
    whoToSeeFirst:
      'For recurrent low magnesium, low calcium seizures, tetany, heart rhythm abnormalities, kidney stones/kidney calcification, or unexplained low potassium and magnesium, evaluation by nephrology, pediatric nephrology, genetics/metabolism, or emergency department is appropriate.',
    isGenetic:
      'Yes, inheritance varies by type and may be autosomal recessive or dominant. TRPM6, CLDN16, CLDN19, CNNM2 and others may be involved.',
    hasTreatment:
      'Long-term magnesium supplementation, management of related electrolyte abnormalities, and kidney/heart rhythm follow-up plans exist, but specific goals and medication forms need to be individualized based on type and kidney function.',
    commonDelayReason:
      'Seizures may first be treated as epilepsy or calcium deficiency, with low magnesium only briefly corrected; if urine magnesium, kidney calcification, and family history are not checked, the hereditary cause is easily missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infants or young children with low magnesium accompanied by low calcium, seizures, tetany, or feeding/growth problems.',
      'Recurrent low magnesium, low potassium, palpitations, abnormal QT interval, or muscle cramps.',
      'Children or young adults with kidney stones, kidney calcification, or abnormal kidney function accompanied by low magnesium.',
      'Persistently low blood magnesium that repeatedly drops despite supplementation, especially if urine magnesium excretion is inappropriately elevated.',
      'Family history of low magnesium, seizures, kidney calcification, early-onset kidney disease, or consanguinity.',
    ],
    commonWrongTurns: [
      'Only treating with calcium or antiepileptic drugs without recognizing that low magnesium is the upstream problem.',
      'Attributing low magnesium to poor diet without distinguishing between gastrointestinal losses and kidney-related losses.',
      'Not performing kidney ultrasound or urine calcium/magnesium assessment, missing types associated with kidney calcification.',
      'Long-term self-supplementation without monitoring kidney function, electrolytes, or ECG.',
    ],
    firstDepartments: [
      'Nephrology',
      'Pediatric Nephrology',
      'Genetics/Medical Genetics',
      'Emergency (for seizures or heart rhythm risk)',
      'Cardiology (for ECG abnormalities)',
    ],
    diagnosisChecklist: [
      'Document results of multiple blood magnesium, calcium, potassium, creatinine, parathyroid hormone, and urine electrolyte tests.',
      'Record seizures, tetany, palpitations, kidney stones, kidney calcification, and family history.',
      'Ask whether 24-hour urine magnesium or fractional magnesium excretion assessment is needed.',
      'Ask whether a low magnesium-related gene panel or exome testing is needed.',
      'Confirm long-term supplementation, follow-up, and acute low magnesium management pathways.',
    ],
    testsToAskAbout: [
      'Blood magnesium, calcium, potassium, phosphorus, creatinine, and acid-base status.',
      'Urine magnesium, calcium, potassium, and assessment of kidney-related losses.',
      'Parathyroid hormone and vitamin D-related tests.',
      'ECG and Holter monitoring if needed.',
      'Kidney ultrasound and relevant genetic testing.',
    ],
    questionsForDoctor: [
      'Is the low magnesium more likely from intestinal absorption problems or kidney wasting?',
      'Should I be tested for specific types of hereditary hypomagnesemia?',
      'How should my magnesium supplementation goals, follow-up frequency, and kidney function monitoring be arranged?',
      'Which symptoms indicate seizure or heart rhythm risk and require emergency care?',
      'Should family members be screened for blood magnesium, urine magnesium, or genetic testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Hereditary hypomagnesemia can present as low calcium seizures, tetany, muscle cramps, fatigue, palpitations, or ECG abnormalities in infancy. It may also include low potassium, kidney stones, kidney calcification, impaired kidney function, growth and developmental problems, or neurological involvement. Presentations and risks vary by genetic type.</p>',
    diagnosis:
      '<p>Diagnosis requires confirming persistent low magnesium and distinguishing between inadequate intestinal absorption and kidney-related magnesium loss. Evaluation typically includes blood and urine electrolytes, kidney function, urine calcium and magnesium, ECG, kidney imaging, and genetic testing. Doctors will also rule out medication effects, diarrhea, malnutrition, diabetes, and other acquired causes of low magnesium.</p>',
    treatment:
      '<p>Management includes correcting low magnesium and related low calcium/low potassium, monitoring heart rhythm and kidney function, managing kidney calcification or kidney stone risk, and developing a long-term supplementation plan based on the specific type. Supplementation method and dose should be adjusted by a doctor based on age, symptoms, kidney function, and tolerance.</p>',
    longTermCare:
      '<p>Long-term care focuses on stabilizing electrolytes, protecting kidney function, preventing seizures and heart rhythm risks, and keeping gene and emergency information on hand. Children also need monitoring of growth and development, neurodevelopment, and school care plans.</p>',
    fertilityOrFamily:
      '<p>Inheritance patterns vary by gene. After identifying the disease-causing gene, families can learn about carrier testing, relative screening, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>Seizures, altered consciousness, severe tetany, obvious palpitations or fainting, persistent vomiting or diarrhea, or rapid worsening of low magnesium and calcium require emergency care. Inform them of the hereditary hypomagnesemia risk.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Hypomagnesemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK500003/',
    },
    {
      name: 'Genetic causes of hypomagnesemia, a clinical overview',
      type: 'review',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5440500/',
    },
  ],
  symptoms:
    '<p>May present with low magnesium, low calcium seizures, tetany, low potassium, heart rhythm abnormalities, kidney stones, or kidney calcification.</p>',
  diagnosis:
    '<p>Evaluation includes blood and urine electrolytes, assessment of kidney-related magnesium loss, ECG, kidney imaging, ruling out acquired causes, and genetic testing.</p>',
  treatment:
    '<p>Management centers on individualized magnesium supplementation, correction of related electrolyte abnormalities, heart rhythm and kidney function follow-up, and genetic counseling.</p>',
  prognosis:
    '<p>Prognosis depends on the specific genetic type, magnesium control, kidney involvement, and early recognition of acute risks.</p>',
  sourceName:
    'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
  categorySlug: 'renal-urologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 342,
    name: 'hereditary-hypomagnesemia-journey.png',
    url: '/images/diseases/hereditary-hypomagnesemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

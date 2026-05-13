import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalHyperinsulinemicHypoglycemia: DiseaseDraft = {
  ...entity(22, 'disease-congenital-hyperinsulinemic-hypoglycemia'),
  name: 'Congenital Hyperinsulinemic Hypoglycemia',
  nameEn: 'Congenital Hyperinsulinemic Hypoglycemia',
  alias: 'Congenital hyperinsulinism, Hereditary hyperinsulinemic hypoglycemia',
  slug: 'congenital-hyperinsulinemic-hypoglycemia',
  oneSentence:
    'Congenital hyperinsulinemic hypoglycemia is a group of inherited low blood sugar disorders where abnormal insulin regulation causes repeated low blood sugar in infants or children, which can seriously affect the brain when severe.',
  plainName:
    'A rare genetic condition where too much insulin causes repeated low blood sugar',
  prevalence:
    'Generally rare, severity ranges from short-term neonatal low blood sugar to persistent, treatment-resistant hypoglycemia.',
  quickLook: {
    whatItIs:
      'Insulin lowers blood sugar. Children continue to secrete too much insulin when they should not, making it hard to keep blood sugar stable, especially during fasting, poor feeding, or illness.',
    whoToSeeFirst:
      'For newborns or children with repeated low blood sugar, seizures, drowsiness, feeding difficulty, or sweating and trembling, seek emergency care or pediatric treatment; after stabilization, follow up with pediatric endocrinology or genetics/metabolism specialists.',
    isGenetic:
      'Many cases are related to KATP channels or other genes involved in insulin secretion. Inheritance can be recessive, dominant, or from new variants. Some cases need to be distinguished between diffuse and focal types.',
    hasTreatment:
      'Specialty treatment options exist, including rapid correction of low blood sugar, long-term nutrition and medication management, imaging localization, and surgical evaluation in some cases. All plans should be developed by a pediatric endocrinology team.',
    commonDelayReason:
      'Low blood sugar symptoms can look like feeding problems, infection, seizures, or newborn adjustment issues; if critical samples are not collected during episodes, the cause can remain unclear.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated low blood sugar, feeding difficulty, drowsiness, low muscle tone, or seizures in the neonatal period.',
      'Evidence of insulin action inappropriately remaining high during low blood sugar episodes.',
      'Easily develop low blood sugar when feeding is reduced, fasting is extended, or during infection.',
      'Need for consistently high glucose support to maintain blood sugar levels.',
      'Family history of infant low blood sugar, seizures, or similar endocrine diagnoses.',
    ],
    commonWrongTurns: [
      'Only correcting blood sugar without investigating insulin and metabolic markers during hypoglycemia episodes.',
      'Treating seizures only as a neurological issue without considering the hypoglycemia trigger.',
      'Discharge without family monitoring, feeding plans, and emergency plans, leading to repeated crises.',
      'Failure to distinguish between temporary hypoglycemia and persistent genetic hyperinsulinism.',
    ],
    firstDepartments: [
      'Emergency department/Neonatology (for acute hypoglycemia, seizures, or altered consciousness)',
      'Pediatric endocrinology',
      'Genetics/metabolism or medical genetics',
      'Nutrition support for feeding management under specialty protocols',
    ],
    diagnosisChecklist: [
      'Record blood sugar, insulin, ketones, free fatty acids, lactate, cortisol, and growth hormone from critical samples during each hypoglycemia episode.',
      'Document timing of episodes, relationship to feeding/fasting/infection, correction methods used, and whether seizures or consciousness changes occurred.',
      'Ask whether genetic testing for hyperinsulinism-related genes is needed.',
      'Confirm whether the doctor has evaluated for diffuse, focal, or syndrome-related hypoglycemia.',
      'Prepare family plans for hypoglycemia recognition, monitoring, and emergency medical care.',
    ],
    testsToAskAbout: [
      'Critical blood and urine samples during hypoglycemia episodes.',
      'Insulin, C-peptide, ketones, free fatty acids, and metabolic markers.',
      'Genetic testing for ABCC8, KCNJ11, and other hyperinsulinism-related genes.',
      'Pancreatic imaging or specialty center evaluation if the doctor deems it necessary.',
      'Neurodevelopmental follow-up and brain assessment.',
    ],
    questionsForDoctor: [
      "Does the child's low blood sugar fit the pattern of hyperinsulinemic hypoglycemia? What is the evidence?",
      'What monitoring does the family need to do at home? What situations require emergency care?',
      'Is genetic testing needed, and will the results affect treatment choices?',
      'How should the plan for feeding, nighttime feeding, and sick-day management be written as actionable instructions?',
      'Should we be referred to a center with experience in congenital hyperinsulinism?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>May present as repeated hypoglycemia in newborns or young children, feeding difficulty, drowsiness, low body temperature, sweating, trembling, seizures, or altered consciousness, with risk to development. Duration and severity of hypoglycemia vary greatly; some patients need long-term management.</p>',
    diagnosis:
      '<p>The key is collecting samples during hypoglycemia episodes to assess whether insulin action is inappropriately elevated, combined with ketone, free fatty acid, metabolic markers, and genetic testing. Doctors also differentiate between endocrine deficiencies, metabolic disorders, temporary neonatal hypoglycemia, and syndrome-related hypoglycemia.</p>',
    treatment:
      '<p>Acute hypoglycemia requires immediate care by a medical team. Long-term management may include individualized feeding plans, medications, blood sugar monitoring, further evaluation guided by genetic results, and surgical discussion for some focal or treatment-resistant cases. Parents should not independently change feeding intervals or medications.</p>',
    longTermCare:
      '<p>Long-term care focuses on preventing hypoglycemia, protecting neurodevelopment, developing plans for nighttime and sick days, and regularly assessing growth/development and treatment side effects. Family, daycare, or school should know hypoglycemia signs and emergency contact procedures.</p>',
    fertilityOrFamily:
      '<p>Inheritance patterns vary by gene and type. After genetic results are confirmed, parents, siblings, and families planning for children can learn about recurrence risks, carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>Seizures, altered consciousness, significant drowsiness, inability to eat, repeated vomiting, difficulty maintaining blood sugar during illness, or inability to correct hypoglycemia with the home plan means go to the emergency department immediately, and tell doctors about the suspected or confirmed congenital hyperinsulinemic hypoglycemia diagnosis.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
    },
    {
      name: 'MedlinePlus Genetics: Congenital hyperinsulinism',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/congenital-hyperinsulinism/',
    },
    {
      name: 'Orphanet: Congenital isolated hyperinsulinism',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/657',
    },
  ],
  symptoms:
    '<p>May present as hypoglycemia in newborns or children, feeding difficulty, drowsiness, sweating, trembling, seizures, or altered consciousness.</p>',
  diagnosis:
    '<p>Evaluation focuses on collecting critical samples during hypoglycemia episodes, combined with insulin action markers, metabolic testing, and relevant genetic testing.</p>',
  treatment:
    '<p>Management should be developed by a pediatric endocrinology team, including acute hypoglycemia management, long-term feeding/medication plans, monitoring, and surgical evaluation for some cases.</p>',
  prognosis:
    '<p>Early recognition and avoiding repeated severe hypoglycemia can reduce neurodevelopmental risks; prognosis is influenced by type, treatment response, and follow-up quality.</p>',
  sourceName: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 321,
    name: 'congenital-hyperinsulinemic-hypoglycemia-journey.png',
    url: '/images/diseases/congenital-hyperinsulinemic-hypoglycemia-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHomocysteinemia: DiseaseDraft = {
  ...entity(47, 'disease-homocysteinemia'),
  name: 'Homocysteinemia',
  nameEn: 'Homocysteinemia',
  slug: 'homocysteinemia',
  oneSentence:
    'Homocysteinemia is a group of inherited metabolic disorders in which amino acid metabolism abnormalities cause homocysteine to build up in the blood. Typical features include eye abnormalities, bone problems, intellectual disability, and increased risk of blood clots.',
  plainName: 'Homocysteinemia (Cystathionine Beta-Synthase Deficiency)',
  prevalence:
    'The classic form (cystathionine beta-synthase deficiency) has a global prevalence of approximately 1/200,000 to 1/350,000, with considerable variation by region.',
  quickLook: {
    whatItIs:
      'This is a group of congenital metabolic disorders in which a deficiency of the relevant enzyme prevents homocysteine from being properly metabolized, causing it to accumulate in the blood and affecting the eyes, bones, cardiovascular system, and nervous system.',
    whoToSeeFirst:
      'Priority referral to endocrinology or metabolic genetics; eye symptoms may require a combined evaluation with ophthalmology; if there are signs of blood clots, seek urgent medical care.',
    isGenetic:
      'Most forms follow autosomal recessive inheritance. Classic homocystinuria caused by CBS deficiency is the most common; other homocysteine metabolism abnormalities may involve different genes and cofactor pathways.',
    hasTreatment:
      'There are management protocols available from metabolic specialists, including diet, vitamin/cofactor responsiveness assessment, betaine, and blood clot risk management. Specific plans should be developed by a metabolic genetics specialist.',
    commonDelayReason:
      'Early symptoms can be subtle. Patients often see multiple doctors for vision problems, osteoporosis, or recurrent blood clot events without tracing back to a metabolic cause. Developmental delays in infants and young children are sometimes mistaken for normal late development.',
  },
  patientJourney: {
    whenToSuspect: [
      'Unexplained myopia or dislocation of the eye lens (upward displacement) appearing in childhood or adolescence.',
      'Significantly short stature, osteoporosis, or scoliosis and other bone abnormalities.',
      'History of thromboembolism (such as deep vein thrombosis or pulmonary embolism at a young age).',
      'Family history of unexplained early-onset cardiovascular events or metabolic abnormalities.',
    ],
    commonWrongTurns: [
      'Undergoing refractive surgery only for eye symptoms without screening for systemic metabolic problems.',
      'Treating osteoporosis with calcium supplements alone without assessing for metabolic bone disease.',
      'Receiving treatment only after a blood clot event without further investigation for an inherited metabolic cause.',
    ],
    firstDepartments: [
      'Endocrinology or Metabolic Genetics',
      'Pediatrics (for children)',
      'Ophthalmology (for lens abnormalities)',
      'Cardiology (for blood clots or arterial sclerosis)',
    ],
    diagnosisChecklist: [
      'Measurement of total blood homocysteine concentration (blood drawn while fasting).',
      'Urine organic acid analysis or gas chromatography-mass spectrometry (GC-MS) to detect homocysteine in the urine.',
      'Plasma amino acid analysis to assess whether methionine levels are normal or low.',
      'Enzyme activity testing (e.g., red blood cell cystathionine beta-synthase activity).',
      'Genetic testing to identify specific mutation types (such as MTHFR, CBS, MTR, MTRR).',
    ],
    testsToAskAbout: [
      'What is my homocysteine level, and what severity category does it fall into?',
      'What tests do I need to confirm which type of homocysteinemia I have?',
      'Is genetic testing recommended, and how would it affect my treatment plan?',
      'What screening do my family members need?',
    ],
    questionsForDoctor: [
      'Which metabolic subtype does my condition most closely resemble? Do treatment approaches differ between subtypes?',
      'What specific dietary adjustments are recommended? Are there foods I should limit?',
      'If I am planning a pregnancy, what special precautions should I take during pregnancy?',
      'What vitamins or nutrients do I need to supplement? Who will develop the plan, and how will effectiveness and side effects be monitored?',
    ],
  },
  medicalSections: {
    symptoms:
      'Mainly affects the eyes (lens dislocation, myopia), bones (osteoporosis, scoliosis, joint laxity), central nervous system (intellectual disability, developmental delay), and cardiovascular system (blood clots, arterial sclerosis). Some patients have facial features such as prominent cheekbones and a recessed jaw. Symptom severity varies depending on the degree and type of enzyme deficiency.',
    diagnosis:
      'Confirmed by elevated blood homocysteine concentration (typically > 15 µmol/L) and urine homocysteine detection; further differentiated by enzyme activity testing and genetic testing to distinguish subtypes; plasma methionine levels help differentiate between various metabolic defects.',
    treatment:
      'Treatment requires first identifying the cause and vitamin B6 responsiveness. Management may include low-methionine diet, specialized nutritional formulas, vitamins/cofactors, betaine, and blood clot risk management, but the specific combination, target values, and adjustment frequency should be determined by a metabolic genetics specialist. Ophthalmologic, orthopedic, and vascular complications require coordinated care from relevant specialists.',
    longTermCare:
      'Requires long-term multidisciplinary follow-up: metabolic, endocrinology, ophthalmology, and orthopedics; regular monitoring of blood homocysteine concentration; attention to bone health and cardiovascular status; patients and families may consider genetic counseling to understand reproductive risks.',
    fertilityOrFamily:
      'Follows autosomal recessive inheritance; each child has a 25% risk of being affected (if both parents are carriers); those planning a family should seek preconception genetic counseling; some types require stricter metabolic control during pregnancy, requiring multidisciplinary coordination.',
    emergencySigns:
      'Sudden chest pain, difficulty breathing, or swelling of one limb (possible pulmonary embolism or deep vein thrombosis); eye pain with rapid vision loss (lens dislocation); severe headache or focal neurological signs (need to rule out cerebrovascular event).',
  },
  sources: [
    {
      name: 'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Homocystinuria',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001199.htm',
    },
  ],
  sourceName:
    'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 346,
    name: 'homocysteinemia-journey.png',
    url: '/images/diseases/homocysteinemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

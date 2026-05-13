import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseArginaseDeficiency: DiseaseDraft = {
  ...entity(8, 'disease-arginase-deficiency'),
  name: 'Arginase Deficiency',
  nameEn: 'Arginase Deficiency',
  alias: 'ARG1 Deficiency, Hyperargininemia, Argininemia',
  slug: 'arginase-deficiency',
  oneSentence:
    'Arginase deficiency is a urea cycle-related inherited metabolic disorder, often presenting in childhood with gradually developing spasticity, growth stagnation or regression, seizures, and elevated arginine as key clues.',
  plainName:
    'An inherited metabolic disorder caused by abnormal arginine metabolism',
  prevalence:
    'This is an extremely rare condition with an estimated low prevalence, influenced by newborn screening coverage and diagnostic accessibility.',
  quickLook: {
    whatItIs:
      'Insufficient arginase function related to the ARG1 gene causes abnormal elevation of arginine and other metabolites. Unlike some urea cycle disorders, it often does not present with severe hyperammonemia in the newborn period, but rather with gradually developing motor and cognitive problems in early childhood.',
    whoToSeeFirst:
      'Children should first see pediatrics or pediatric metabolic genetics; for spasticity, seizures, or developmental regression, consider collaboration with pediatric neurology and rehabilitation medicine.',
    isGenetic:
      'Usually autosomal recessive inheritance. Parents are typically carriers, and recurrence risk for future pregnancies requires genetic testing and genetic counseling.',
    hasTreatment:
      'Requires long-term management by metabolic genetics specialists, typically focusing on diet, ammonia and amino acid monitoring, medication evaluation, rehabilitation, and acute metabolic imbalance management. Specific plans should be developed by specialist physicians.',
    commonDelayReason:
      'Children may develop normally early on, then later develop spasticity, abnormal gait, or learning regression, which can easily be mistaken for cerebral palsy, hereditary spastic paraplegia, or treated as epilepsy alone.',
  },
  patientJourney: {
    whenToSuspect: [
      'Development of stiff walking, scissoring gait, tiptoeing, or progressively worsening lower limb spasticity after 1-3 years of age.',
      'Developmental stagnation or regression, where previously acquired motor, language, or cognitive abilities become worse.',
      'Seizures, recurrent vomiting, drowsiness, or unexplained changes in mental status.',
      'Elevated arginine on blood ammonia, plasma amino acids, or newborn screening.',
      'Siblings or family members with similar metabolic disorders, early death, or unexplained neurological degeneration.',
    ],
    commonWrongTurns: [
      'Long-term treatment as cerebral palsy or simple rehabilitation without blood ammonia and amino acid analysis.',
      'Treating seizures only without investigating the metabolic cause.',
      "Assuming the child is 'slow to develop' without documenting regression and progression of spasticity.",
      'Diet and medication adjustments without follow-up by metabolic genetics specialists, increasing nutritional or metabolic risks.',
    ],
    firstDepartments: [
      'Pediatric Metabolic Genetics',
      'Pediatrics',
      'Pediatric Neurology',
      'Rehabilitation Medicine',
      'Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Gather newborn screening results, blood ammonia, plasma amino acids, urine organic acids, liver function, and nutritional markers.',
      'Record the timeline of motor, language, and cognitive development, as well as when spasticity, seizures, and regression first appeared.',
      'Bring previous brain imaging, EEG, rehabilitation assessments, and medication records.',
      'Ask your doctor whether ARG1 genetic testing and parental carrier verification are needed.',
    ],
    testsToAskAbout: [
      'Plasma amino acid analysis, with focus on arginine levels.',
      'Blood ammonia, liver function, nutritional status, and metabolic stability assessment.',
      'Urine organic acids, lactate, acylcarnitine profile and other differential diagnostic tests.',
      'ARG1 genetic testing with family segregation analysis.',
      'Neurodevelopmental, muscle tone, gait, and rehabilitation assessments.',
    ],
    questionsForDoctor: [
      'What are the target blood ammonia and arginine levels for my child? How often should we check?',
      'How do we balance metabolic control and growth when restricting diet?',
      'What should we do when my child has fever, vomiting, or refuses to eat? Who should we contact?',
      'What functions should rehabilitation training focus on improving?',
      'Do other children in our family or future pregnancies need testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Arginase deficiency typically presents in infancy or childhood with lower limb spasticity, gait abnormalities, developmental stagnation or regression, learning difficulties, seizures, and affected growth. Acute hyperammonemia may present with vomiting, drowsiness, altered consciousness, or convulsions, though some patients do not have typical hyperammonemia.</p>',
    diagnosis:
      '<p>Diagnosis is usually based on elevated plasma arginine, blood ammonia and other metabolic tests, clinical neurological findings, and confirmed by ARG1 genetic testing. Doctors will also rule out cerebral palsy, hereditary spastic paraplegia, other urea cycle disorders, and neurodegenerative diseases.</p>',
    treatment:
      '<p>Treatment requires management by metabolic genetics specialists, typically including individualized diet, ammonia and amino acid monitoring, nitrogen-scavenging therapies when indicated, seizure and spasticity management, rehabilitation training, and acute phase management protocols. Do not adjust protein intake or medications on your own.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on metabolic stability, growth and nutrition, motor function, cognitive and language development, seizures, liver function, and family emergency plans. School and rehabilitation resources should be tailored to actual motor and learning abilities.</p>',
    fertilityOrFamily:
      '<p>This condition is usually inherited in an autosomal recessive pattern. After diagnosis, it is recommended that parents and relevant family members receive genetic counseling to discuss carrier testing, recurrence risk for future pregnancies, and options such as prenatal testing or preimplantation genetic testing.</p>',
    emergencySigns:
      "<p>Seek emergency care immediately if there is difficulty waking from drowsiness, recurrent vomiting, convulsions, altered consciousness, abnormal breathing patterns, or fever with significantly reduced food intake. Inform doctors of the patient's metabolic history so that blood ammonia and acute metabolic imbalance can be evaluated.</p>",
  },
  sources: [
    {
      name: 'GeneReviews: Arginase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1159/',
    },
    {
      name: 'Orphanet: Hyperargininemia',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/1897',
    },
    {
      name: 'NORD: Arginase Deficiency',
      type: 'patient-organization',
      url: 'https://rarediseases.org/rare-diseases/arginase-deficiency/',
    },
  ],
  symptoms:
    '<p>Common clues include lower limb spasticity, gait abnormalities, developmental stagnation or regression, seizures, and elevated arginine.</p>',
  diagnosis:
    '<p>Evaluation typically includes plasma amino acids, blood ammonia, liver function, urine organic acids, neurodevelopmental assessment, and ARG1 genetic testing.</p>',
  treatment:
    '<p>Management focuses on metabolic genetics follow-up, diet and metabolic monitoring, acute phase protocols, seizure and spasticity management, and rehabilitation support.</p>',
  prognosis:
    '<p>Early identification and continued metabolic management help reduce preventable neurological damage, but individual outcomes vary widely, requiring long-term follow-up.</p>',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 304,
    name: 'arginase-deficiency-journey.png',
    url: '/images/diseases/arginase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHyperphenylalaninemia: DiseaseDraft = {
  ...entity(51, 'disease-hyperphenylalaninemia'),
  name: 'Hyperphenylalaninemia',
  nameEn: 'Hyperphenylalaninemia',
  alias:
    'HPA, Hyperphenylalaninemia Syndrome, Tetrahydrobiopterin Deficiency, Phenylalanine Hydroxylase Deficiency',
  slug: 'hyperphenylalaninemia',
  oneSentence:
    'Hyperphenylalaninemia (HPA) is a group of common inherited amino acid metabolic disorders caused by deficiency of phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4), leading to elevated blood phenylalanine. This includes phenylketonuria (PKU) and other phenotypes.',
  plainName: 'Hyperphenylalaninemia',
  prevalence:
    'Incidence in Chinese newborns 1985-2011: approximately 1 in 10,397; varies widely across global regions',
  quickLook: {
    whatItIs:
      'Hyperphenylalaninemia (HPA) is the most common amino acid metabolic disorder caused by deficiency of phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4) in the phenylalanine metabolic pathway, leading to elevated blood phenylalanine (Phe). Listed in the first national Rare Disease Catalog in 2018. Classified into two main categories: PAH deficiency and BH4 deficiency, with different treatment approaches. Most commonly diagnosed through newborn screening; adult female patients often discovered during prenatal care or after giving birth to a child with abnormalities.',
    whoToSeeFirst:
      'Pediatrics, Medical Genetics/Metabolism, or Newborn Screening Follow-up Clinic',
    isGenetic: 'Yes, autosomal recessive inheritance',
    hasTreatment:
      'Yes, long-term dietary management, special medical foods, BH4 responsiveness assessment, and metabolic follow-up plans exist. PAH deficiency and BH4-related disease pathways differ, requiring newborn screening/genetic metabolism team for differentiation.',
    commonDelayReason:
      'Asymptomatic in neonatal period, easily overlooked; mild cases have subtle symptoms, often mistaken for slow development or behavioral problems',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening shows elevated blood phenylalanine',
      'Light skin coloration, hair turning from black to yellow',
      'Mouse-like (musty) odor in urine and sweat',
      'Intellectual developmental delay or regression',
      'Seizures, microcephaly',
      'Behavioral abnormalities (hyperactivity, self-harm, aggression)',
      'Repeated vomiting, feeding difficulties, eczema in infancy',
    ],
    commonWrongTurns: [
      'Mild cases delayed due to subtle symptoms',
      'Focusing only on hair and skin color while ignoring cognitive development assessment',
      'Failure to distinguish PAH deficiency from BH4 deficiency, leading to inappropriate treatment choice',
      'Irregular dietary management causing blood Phe fluctuations',
      'Behavioral problems in childhood misattributed to psychological issues',
    ],
    firstDepartments: [
      'Pediatrics or Medical Genetics/Metabolism (priority visit)',
      'Newborn Screening Follow-up Clinic',
      'Pediatric Neurology (when seizures or developmental delay occur)',
      'Pediatric Rehabilitation (developmental support)',
    ],
    diagnosisChecklist: [
      'Blood phenylalanine (Phe) concentration (elevation defined as >120 μmol/L)',
      'Blood phenylalanine/tyrosine ratio (Phe/Tyr > 2.0)',
      'Urine pterin profile analysis (to differentiate BH4 deficiency)',
      'BH4 loading test (to determine BH4-responsiveness)',
      'PAH and related gene testing',
      'EEG (when seizures occur)',
      'Cranial MRI (to assess brain development)',
      'Developmental quotient or IQ assessment',
    ],
    testsToAskAbout: [
      'Current blood phenylalanine concentration and target range',
      'Whether BH4-responsive',
      'PAH gene mutation type',
      'Developmental assessment results',
      'Whether EEG and cranial MRI are needed',
    ],
    questionsForDoctor: [
      'What is the current blood phenylalanine range? What are the target values for different ages?',
      'Does my child have PAH deficiency or BH4 deficiency? Is BH4 supplementation needed?',
      'How specifically to implement the low-phenylalanine diet? How long does it need to be followed?',
      'How to apply for, purchase, and follow up on special medical foods and nutritional support?',
      "What is my child's current intellectual development level? What rehabilitation support is needed?",
      'If we want a second child, what genetic preparation is needed?',
    ],
  },
  medicalSections: {
    symptoms:
      'PAH deficiency (phenylketonuria type): Mostly asymptomatic in neonatal period; 3-4 months after birth, hair gradually turns from black to yellow, skin becomes lighter, urine and sweat develop a mousy odor. With age, intellectual developmental delay, microcephaly, seizures, and behavioral, personality, and cognitive abnormalities may occur (such as hyperactivity, self-harm, aggression, autism spectrum tendencies). BH4 deficiency: In addition to the above symptoms, may also present with sleepiness or insomnia, movement disorders, swallowing difficulties, reduced muscle tone, nystagmus; the condition is often more severe than PAH deficiency. Vomiting and eczema are also common in infancy.',
    diagnosis:
      'Newborn screening is the primary early detection method, detecting blood Phe concentration and Phe/Tyr ratio. Diagnosis requires exclusion of transient hyperphenylalaninemia and clarification of PAH vs BH4 deficiency. Urine pterin profile analysis and BH4 loading test are key examinations to differentiate the two types. Genetic testing (PAH, PTS, QDPR, DNAJC12 and other genes) can identify specific mutation types, guiding treatment and prognosis.',
    treatment:
      'Management depends on PAH deficiency, BH4-related disease, or other causes. Common pathways include low-phenylalanine diet, special medical foods, blood phenylalanine monitoring, BH4 responsiveness assessment, and neurodevelopmental follow-up. Strict metabolic specialist management is needed before and during pregnancy. Do not adjust diet or supplements based on online target values without medical supervision.',
    longTermCare:
      'Lifetime follow-up of blood phenylalanine concentration is needed; monthly monitoring recommended for infants under 1 year, every 3 months after age 1. Dietary management is a long-term task; special formula and low-protein foods need continuous use. Parents need to learn to prepare low-Phe recipes while ensuring balanced nutrition (pay special attention to tyrosine supplementation, as it becomes an essential amino acid). Regular assessment of intellectual, motor, and language development in childhood; timely rehabilitation training when needed. Pay attention to dental health (especially important for BH4 deficiency patients). Adults planning pregnancy should undergo genetic counseling and optimize blood Phe control beforehand.',
    fertilityOrFamily:
      'This is an autosomal recessive disorder. When both parents are carriers, each pregnancy has a 25% chance of having an affected child. Genetic counseling is recommended. After identifying the mutation sites, prenatal diagnosis or PGT can be performed. Female patients need strict blood Phe control during pregnancy, which is crucial for fetal neurological development. Parents of children with hyperphenylalaninemia who wish to have another child are strongly advised to complete genetic counseling before attempting pregnancy.',
    emergencySigns:
      'Uncontrolled seizures, altered consciousness, or developmental regression suggest poor blood Phe control or other metabolic issues; urgent follow-up is needed. Repeated infections, severe vomiting, diarrhea, or food refusal require monitoring of acid-base balance and nutritional status; hospitalization may be needed to adjust dietary plan.',
  },
  sources: [
    {
      name: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
    },
    {
      name: 'MedlinePlus Genetics: Phenylketonuria',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/phenylketonuria/',
    },
  ],
  sourceName: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 350,
    name: 'hyperphenylalaninemia-journey.png',
    url: '/images/diseases/hyperphenylalaninemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

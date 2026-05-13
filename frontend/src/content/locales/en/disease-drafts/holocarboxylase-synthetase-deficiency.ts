import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHolocarboxylaseSynthetaseDeficiency: DiseaseDraft = {
  ...entity(46, 'disease-holocarboxylase-synthetase-deficiency'),
  name: 'Holocarboxylase Synthetase Deficiency',
  nameEn: 'Holocarboxylase Synthetase Deficiency',
  alias:
    'HLCS Deficiency, Early-Onset Multiple Carboxylase Deficiency, Biotin-Responsive Multiple Carboxylase Deficiency',
  slug: 'holocarboxylase-synthetase-deficiency',
  oneSentence:
    'Holocarboxylase Synthetase Deficiency is a genetic metabolic disorder affecting biotin utilization. In infants, it may present with feeding difficulties, rash, hair loss, breathing problems, sleepiness, acidosis, or seizures.',
  plainName:
    'A genetic disorder where the body cannot effectively use biotin, causing multiple metabolic enzymes to work abnormally',
  prevalence:
    'MedlinePlus Genetics mentions an estimated incidence of approximately 1 in 87,000 people; actual identification is influenced by newborn screening and access to metabolic testing.',
  quickLook: {
    whatItIs:
      'The HLCS enzyme is responsible for attaching biotin to multiple carboxylase enzymes. Insufficient enzyme function affects protein, fat, and carbohydrate metabolism, and it belongs to the group of multiple carboxylase deficiency disorders.',
    whoToSeeFirst:
      'When newborns or infants present with poor feeding, repeated vomiting, rash, hair loss, breathing difficulties, sleepiness, seizures, or metabolic acidosis, seek emergency/pediatric care first, then transfer to metabolic genetics upon stabilization.',
    isGenetic:
      'Yes, usually autosomal recessive inheritance, related to biallelic pathogenic variants in the HLCS gene.',
    hasTreatment:
      'Most patients require early and long-term biotin-related treatment and metabolic follow-up under medical supervision. Specific dosages and adjustments should not be decided independently.',
    commonDelayReason:
      'Rash, hair loss, poor feeding, and breathing problems may be addressed separately; if acidosis, ketosis, organic acid abnormalities, and skin clues are not connected, diagnosis may be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborns or infants presenting with feeding difficulties, vomiting, sleepiness, rapid breathing, or metabolic acidosis.',
      'Rash, seborrheic/eczema-like changes, and hair loss occurring together with developmental or metabolic abnormalities.',
      'Seizures, abnormal muscle tone, developmental delay, or recurrent acute episodes.',
      'Urine organic acid analysis showing abnormalities related to multiple carboxylase metabolism.',
      'Newborn screening or family history suggesting biotin metabolism-related disease.',
    ],
    commonWrongTurns: [
      'Managing only as eczema, infection, or gastrointestinal problem without checking for metabolic acidosis and organic acids.',
      'Treating seizures as a separate neurological condition without evaluating for treatable metabolic diseases.',
      'Stopping biotin or reducing follow-up independently after symptoms improve with treatment.',
      'Failing to differentiate from other biotin-related disorders such as biotinidase deficiency.',
    ],
    firstDepartments: [
      'Neonatology/Pediatric Emergency',
      'Metabolic Genetics',
      'Pediatric Neurology',
      'Dermatology',
      'Nutrition (Metabolic Nutrition)',
    ],
    diagnosisChecklist: [
      'Preserve newborn screening results, blood gas, lactate, ammonia, ketones, urine organic acids, and acylcarnitine profile.',
      'Document the timeline of rash, hair loss, feeding, breathing, seizures, and acute episodes.',
      'Ask about HLCS genetic testing and differentiation from biotinidase deficiency.',
      'Confirm long-term treatment plan, follow-up schedule, and emergency protocol for illness.',
      'Arrange developmental, hearing, vision, skin, and nutritional follow-up.',
    ],
    testsToAskAbout: [
      'Blood gas and metabolic acidosis assessment.',
      'Urine organic acids, blood acylcarnitine profile, lactate, ammonia, and ketones.',
      'HLCS genetic testing.',
      'Biotinidase activity testing for differentiation.',
      'Neurodevelopmental, skin, and nutritional assessments.',
    ],
    questionsForDoctor: [
      'Does the current evidence support HLCS deficiency? What other biotin-related disorders need to be ruled out?',
      'Is treatment lifelong? What parameters need monitoring during follow-up?',
      'What is the emergency protocol for fever, vomiting, or inability to eat?',
      'What long-term follow-up is needed for skin, development, and the nervous system?',
      'How is family screening and recurrence risk for future pregnancies assessed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Holocarboxylase Synthetase Deficiency often presents in infancy with feeding difficulties, vomiting, breathing problems, sleepiness, rash, hair loss, metabolic acidosis, seizures, or risk of coma. Without timely recognition, it may lead to developmental delay, neurological damage, or life-threatening metabolic crises.</p>',
    diagnosis:
      '<p>Diagnosis is based on clinical presentation, blood gas and metabolic tests, urine organic acids, acylcarnitine profile, and HLCS genetic testing. Doctors will also differentiate from biotinidase deficiency, other organic acidemias, fatty acid oxidation disorders, infections, and epilepsy.</p>',
    treatment:
      '<p>Treatment usually responds to biotin-related regimens, but requires determination of dosage, monitoring parameters, and long-term plans by a metabolic genetics specialist. Acute metabolic crises require hospitalization, and self-adjustment of medication or decisions based solely on symptoms should be avoided.</p>',
    longTermCare:
      '<p>Long-term management focuses on adherence to treatment, monitoring metabolic stability, developmental assessment, skin and nutritional care, and preparing emergency instructions for fever, vomiting, surgery, or inability to eat.</p>',
    fertilityOrFamily:
      '<p>This disorder is usually inherited in an autosomal recessive pattern. After identifying HLCS variants, parents, siblings, and relatives planning pregnancy can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>When sleepiness, rapid breathing, repeated vomiting, seizures, inability to eat, dehydration, acidosis, or worsening mental status during infection occurs, seek immediate emergency care and mention suspected or confirmed HLCS deficiency.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
    },
    {
      name: 'NCBI MedGen: Holocarboxylase synthetase deficiency',
      type: 'official',
      url: 'https://www.ncbi.nlm.nih.gov/medgen/120653',
    },
  ],
  symptoms:
    '<p>In infancy, it may present with feeding difficulties, breathing problems, rash, hair loss, sleepiness, metabolic acidosis, seizures, or risk of coma.</p>',
  diagnosis:
    '<p>Assessment includes blood gas, urine organic acids, acylcarnitine profile, HLCS genetic testing, and differentiation from disorders such as biotinidase deficiency.</p>',
  treatment:
    '<p>Management centers on long-term biotin-related treatment, metabolic monitoring, and illness emergency protocols under metabolic genetics specialist guidance.</p>',
  prognosis:
    '<p>Early identification and sustained treatment can prevent many severe complications; delays or stopping medication increase the risk of metabolic crises and neurodevelopmental problems.</p>',
  sourceName: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 345,
    name: 'holocarboxylase-synthetase-deficiency-journey.png',
    url: '/images/diseases/holocarboxylase-synthetase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

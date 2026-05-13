import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCitrullinemia: DiseaseDraft = {
  ...entity(19, 'disease-citrullinemia'),
  name: 'Citrullinemia',
  nameEn: 'Citrullinemia',
  alias:
    'CTLN1, Citrullinemia Type I, Citrullinemia Type II associated with citrin deficiency',
  slug: 'citrullinemia',
  oneSentence:
    'Citrullinemia is a group of inherited metabolic disorders that affect the urea cycle or related transport processes, which may cause elevated blood ammonia levels and lead to acute neurological symptoms in newborns, children, or adults.',
  plainName:
    'An inherited metabolic disorder where the body has difficulty processing protein metabolism waste, potentially causing elevated blood ammonia levels',
  prevalence:
    'Type I and Type II have different regional distributions. Type I belongs to urea cycle disorders, while Type II is associated with citrin deficiency and has been reported more frequently in East Asian populations.',
  quickLook: {
    whatItIs:
      'When the body breaks down protein, it produces nitrogen-containing waste, which is typically processed through the urea cycle. When genes related to citrullinemia are abnormal, blood ammonia and other metabolites may rise, affecting brain and liver function.',
    whoToSeeFirst:
      'If newborn screening shows elevated citrulline, or if there are recurrent vomiting, drowsiness, altered consciousness, seizures, or cholestatic jaundice, contact a metabolic genetics or pediatric specialist as soon as possible; seek emergency care for altered consciousness or seizures.',
    isGenetic:
      'Yes. Type I is typically associated with ASS1, and Type II is associated with SLC25A13, with autosomal recessive inheritance being common. Family testing and reproductive counseling need to be tailored based on specific genetic results.',
    hasTreatment:
      'There are management plans available through metabolic specialists, including dietary and nutritional management, ammonia-lowering treatments, acute episode management, and liver transplant evaluation in some cases. Specific plans should be developed by metabolic genetics specialists.',
    commonDelayReason:
      'Early episodes may resemble infection, feeding difficulties, gastrointestinal problems, or mental status changes; during symptom-free periods, patients may appear nearly normal; adult Type II is sometimes initially managed as a psychiatric, neurological, or general liver condition.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening indicates abnormal citrulline or related amino acids, requiring recall for repeat testing.',
      'Feeding difficulties, recurrent vomiting, drowsiness, abnormal muscle tone, breathing problems, or seizures shortly after birth.',
      'In children, listlessness, vomiting, headache, ataxia, or altered consciousness after infection, fever, prolonged fasting, or dietary changes.',
      'Cholestatic jaundice, enlarged liver, poor growth in infancy, accompanied by abnormal metabolic screening.',
      'Recurrent altered consciousness, behavioral changes, drowsiness, or hepatic encephalopathy-like episodes in adolescents or adults, especially related to diet, alcohol, surgery, or illness stress.',
    ],
    commonWrongTurns: [
      'Attributing newborn drowsiness, vomiting, or refusal to feed solely to common infection or feeding problems.',
      'Not completing newborn screening follow-up or metabolic genetics evaluation after symptoms improve.',
      'For adult onset, only seeing psychiatrists, neurologists, or general hepatologists without checking blood ammonia and amino acid profiles.',
      'Failing to distinguish Type I citrullinemia from Type II associated with citrin deficiency, leading to confused nutritional recommendations.',
      "Family does not have emergency documentation, so emergency doctors cannot quickly understand the patient's metabolic history.",
    ],
    firstDepartments: [
      'Metabolic Genetics / Medical Genetics',
      'Pediatrics or Neonatology (for abnormal newborn screening or infant-onset)',
      'Emergency Department (for altered consciousness, seizures, or recurrent vomiting with inability to eat)',
      'Gastroenterology and Hepatology (for cholestasis, abnormal liver function, or adult hepatic encephalopathy-like episodes)',
      'Nutrition (for dietary management under metabolic specialist guidance)',
    ],
    diagnosisChecklist: [
      'Keep newborn screening reports, recall notices, blood ammonia, blood amino acid profile, urine organic acids, liver function, and coagulation test results.',
      'Record whether each episode was preceded by infection, fever, prolonged fasting, dietary changes, alcohol, surgery, or medication changes.',
      'Confirm whether the doctor has distinguished Type I citrullinemia, citrin deficiency, and other urea cycle disorders.',
      'Ask whether ASS1, SLC25A13, or urea cycle/cholestasis-related genetic testing is needed.',
      'Prepare an emergency summary noting suspected or confirmed diagnosis, managing specialty, previous crises, and current medical orders.',
    ],
    testsToAskAbout: [
      'Blood ammonia and blood gas/acid-base status assessment.',
      'Plasma amino acid profile, focusing on citrulline and related amino acid patterns.',
      'Urine organic acids, lactate, and acylcarnitine profile for differential diagnosis of metabolic disorders.',
      'Liver function, cholestasis markers, and coagulation function.',
      'ASS1, SLC25A13, or urea cycle disorder-related genetic testing.',
      'Carrier testing for family members and early testing protocols for newborns.',
    ],
    questionsForDoctor: [
      'Does the presentation more resemble Type I citrullinemia, citrin deficiency, or another urea cycle disorder? What is the basis?',
      'For daily diet, fever/illness, and times when eating is not possible, which metabolic specialist plan should we follow?',
      'What situations require going directly to the emergency department? What should the emergency information card include?',
      'What tests do we need for regular follow-up? What factors determine follow-up frequency?',
      'Does the family need testing? What special reminders are needed for newborn screening of future children or other relatives?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Type I citrullinemia may present with feeding difficulties, vomiting, drowsiness, abnormal muscle tone, seizures, and altered consciousness in the neonatal period. It can also have later-onset or milder forms. Citrin deficiency may present in infancy with cholestasis, jaundice, enlarged liver, and growth problems, and may also present in adolescents or adults with recurrent hyperammonemia and neuropsychiatric symptoms. Different types, ages, and triggers lead to wide variation in presentation.</p>',
    diagnosis:
      '<p>Diagnosis requires combining newborn screening, blood ammonia, plasma amino acid profile, urine organic acids, liver function, and genetic testing. Type I is typically associated with biallelic pathogenic variants in ASS1; citrin deficiency is associated with biallelic pathogenic variants in SLC25A13. Doctors also need to differentiate from other urea cycle disorders, organic acidemias, liver diseases, and infections.</p>',
    treatment:
      '<p>Treatment requires individualized plans developed by metabolic genetics specialists. Long-term management may include nutritional and protein intake planning, prevention of catabolism, regular monitoring, specific medications, and liver transplant evaluation in some cases; acute hyperammonemia is an emergency requiring management by an experienced medical team. Patients and families should not independently restrict diet or adjust medications based on online information.</p>',
    longTermCare:
      '<p>Long-term care focuses on reducing metabolic crises, protecting nervous system and liver function, and enabling schools, caregivers, and emergency doctors to quickly recognize the condition. It is recommended to keep diagnostic documents, genetic reports, metabolic specialist plans, medication lists, and emergency information cards. Children also need monitoring of growth and development, learning abilities, nutritional status, and family caregiving stress.</p>',
    fertilityOrFamily:
      "<p>Citrullinemia-related disorders are mostly inherited in an autosomal recessive pattern. After the family's pathogenic variant is identified, parents, siblings, and patients planning pregnancies can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling. When family risk is known, the obstetrics and pediatrics teams should be informed as early as possible in the neonatal period.</p>",
    emergencySigns:
      '<p>Recurrent vomiting with inability to eat, marked drowsiness or irritability, altered consciousness, seizures, abnormal breathing, rapid mental status decline after fever, deepening jaundice, or sudden behavioral/altered consciousness in adults should all prompt immediate emergency care. When seeking care, actively inform medical staff of suspected or confirmed citrullinemia/urea cycle disorder and bring previous test results and metabolic specialist plans.',
  },
  sources: [
    {
      name: 'GeneReviews: Citrullinemia Type I',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
    },
    {
      name: 'GeneReviews: Citrin Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1181/',
    },
    {
      name: 'MedlinePlus Genetics: Citrullinemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/citrullinemia/',
    },
    {
      name: 'HRSA Newborn Screening: Citrullinemia',
      type: 'official',
      url: 'https://newbornscreening.hrsa.gov/conditions/citrullinemia',
    },
  ],
  symptoms:
    '<p>May present with feeding difficulties, vomiting, drowsiness, seizures, and altered consciousness in newborns. May also include cholestasis, abnormal liver function, or adult neuropsychiatric episodes.</p>',
  diagnosis:
    '<p>Evaluation typically includes newborn screening follow-up, blood ammonia, amino acid profile, urine organic acids, liver function, coagulation tests, and ASS1/SLC25A13 and other genetic testing.</p>',
  treatment:
    '<p>Management requires individualized plans developed by metabolic genetics specialists, including nutrition, monitoring, ammonia-lowering strategies, and acute episode protocols; acute altered consciousness or seizures should be managed as metabolic emergencies.</p>',
  prognosis:
    '<p>Early identification and proper management can reduce the risk of metabolic crises and neurological damage, but prognosis is influenced by type, age of onset, severity of crises, and access to treatment.</p>',
  sourceName: 'GeneReviews: Citrullinemia Type I',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 318,
    name: 'citrullinemia-journey.png',
    url: '/images/diseases/citrullinemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

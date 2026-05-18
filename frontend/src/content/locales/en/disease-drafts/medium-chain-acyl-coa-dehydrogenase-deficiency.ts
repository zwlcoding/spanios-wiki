import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMediumChainAcylCoADehydrogenaseDeficiency: DiseaseDraft = {
  ...entity(5016, 'disease-medium-chain-acyl-coa-dehydrogenase-deficiency'),
  name: 'Medium-Chain Acyl-CoA Dehydrogenase Deficiency',
  nameEn: 'Medium-Chain Acyl-CoA Dehydrogenase Deficiency',
  alias: 'MCADD, MCAD deficiency',
  icd10Code: 'E71.31',
  slug: 'medium-chain-acyl-coa-dehydrogenase-deficiency',
  oneSentence:
    'MCADD is the most common fatty acid oxidation disorder, caused by ACADM gene variants that prevent the body from breaking down medium-chain fats for energy, often leading to hypoketotic hypoglycemia during fasting or illness.',
  plainName:
    'A metabolic condition where the body cannot burn fat for fuel when hungry',
  prevalence:
    'Worldwide incidence approximately 1 in 15,000 live births; higher in Northern European populations (e.g., approximately 1 in 8,500 in the Netherlands). Neonatal screening coverage is expanding in China.',
  searchIntents: [
    'MCADD newborn screening positive what to do',
    'medium-chain acyl-CoA dehydrogenase deficiency symptoms',
    'MCADD how long can fasting last',
    'MCADD diet precautions',
    'fatty acid oxidation disorder genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is an autosomal recessive fatty acid oxidation disorder. Due to insufficient medium-chain acyl-CoA dehydrogenase enzyme activity, the body cannot effectively use fat for energy after glycogen stores are depleted, leading to hypoketotic hypoglycemia during fasting or illness.',
    whoToSeeFirst:
      'Newborns with positive screening should see neonatology or metabolic genetics; diagnosed patients require long-term follow-up with a metabolic specialist. Go to emergency immediately if lethargy, vomiting, or altered consciousness occurs.',
    isGenetic:
      'Autosomal recessive inheritance. Parents are typically carriers, with a 25% recurrence risk for each pregnancy. Family members can be tested for carrier status through genetic testing.',
    hasTreatment:
      'There is no cure, but avoiding prolonged fasting, providing glucose promptly during illness, and regular follow-up allow most patients to live normal lives. Specific plans should be individualized by a metabolic specialist.',
    commonDelayReason:
      'Failure to follow up on positive newborn screening results; parents dismissing it as a minor issue; metabolic crises mistaken for routine gastroenteritis without timely glucose supplementation.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening shows elevated C8 acylcarnitine or suspected MCADD.',
      'Infant develops lethargy, vomiting, poor responsiveness, or seizures during fasting, infection, fever, or diarrhea.',
      'Toddler or child appears unwell in the morning after overnight fasting, with sweating and pallor.',
      'Family history of unexplained infant death, similar metabolic episodes, or known MCADD.',
      'Blood tests reveal hypoketotic hypoglycemia, especially without significant ketosis.',
    ],
    commonWrongTurns: [
      'Failing to repeat newborn screening within the recommended timeframe before symptoms develop.',
      'Mistaking metabolic crisis symptoms (vomiting, lethargy) for routine gastroenteritis without providing glucose promptly.',
      'Assuming the child is fine because they look normal between episodes, neglecting dietary and fasting management.',
      'Parents attempting dietary changes or fasting without guidance from a metabolic specialist.',
      'Not informing emergency physicians about the MCADD diagnosis and emergency management needs.',
    ],
    firstDepartments: [
      'Neonatology / Pediatric Metabolic Genetics',
      'Emergency Department (if lethargy, vomiting, or altered consciousness)',
      'Genetic Counseling',
      'Nutrition (dietary management guidance)',
    ],
    diagnosisChecklist: [
      'Bring newborn screening reports, follow-up results, and previous acylcarnitine profiles.',
      'Document fasting duration, infection status, symptom sequence, and duration.',
      'If hypoglycemic episodes occurred, bring concurrent glucose, ketone, electrolyte, and liver function results.',
      'Ask the physician whether ACADM genetic testing and family cascade testing are needed.',
    ],
    testsToAskAbout: [
      'Blood acylcarnitine profile (elevated C6-C10, especially C8, is characteristic).',
      'Urine organic acid analysis (elevated hexanoylglycine, octanoylglycine, suberylglycine).',
      'ACADM gene testing.',
      'Concurrent glucose, ketones, lactate, ammonia, and liver function during hypoglycemic episodes.',
    ],
    questionsForDoctor: [
      'What is the maximum safe fasting time for each age? Is a nighttime snack needed?',
      'How should feeding and glucose supplementation be adjusted during illness with fever, vomiting, or diarrhea?',
      'What emergency supplies and medical alert information should we keep at home?',
      'What should teachers and caregivers at daycare or school know?',
      'Should my child wear a medical alert identifier?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Individuals with MCADD may be asymptomatic between episodes. During metabolic stress (fasting, infection, fever, surgery), they cannot utilize medium-chain fatty acids for energy and may develop hypoketotic hypoglycemia after glycogen depletion. Typical features include lethargy, vomiting, poor responsiveness, sweating, seizures, and in severe cases coma or sudden death.</p><p>The highest risk period is from the neonatal period through early childhood, with first episodes commonly occurring between 3 and 24 months. Some individuals remain asymptomatic lifelong and are only detected through newborn screening. Rare late-onset cases may present in adulthood after prolonged fasting, alcohol use, or strenuous exercise.</p>',
    diagnosis:
      '<p>Newborn screening uses tandem mass spectrometry to detect elevated C8 (octanoylcarnitine) in dried blood spots. Confirmatory diagnosis requires urine organic acid analysis (elevated hexanoylglycine, octanoylglycine) and ACADM genetic testing.</p><p>For screen-positive infants awaiting confirmation, follow-up should be guided by a metabolic specialist, avoiding fasting before blood collection. If clinical suspicion remains despite negative screening, comprehensive evaluation in a metabolic clinic including plasma acylcarnitine profile, urine organic acids, and genetic testing may be warranted.</p>',
    treatment:
      '<p>The cornerstone of MCADD management is preventing prolonged fasting and ensuring adequate glucose during illness. Maximum safe fasting durations vary by age and should be individualized by a metabolic specialist.</p><p>During acute episodes, glucose should be provided immediately (orally or intravenously), and electrolyte imbalances corrected. Long-term management includes regular meals, appropriate nighttime snacks, increased carbohydrate intake during illness, and keeping glucose gel or sugary drinks available at home. The benefit of L-carnitine supplementation remains controversial and should be discussed with the treating physician.</p>',
    longTermCare:
      '<p>Long-term follow-up includes regular assessment of growth, nutrition, liver function, and cardiac status; periodic acylcarnitine profiling to monitor metabolic control; and age-appropriate adjustment of fasting tolerance and dietary plans.</p><p>Families should establish an emergency plan including: illness management protocols, medical alert card contents, and contact information for the nearest hospital familiar with metabolic emergencies. Avoid high-intensity activities or competitions that may require prolonged fasting unless cleared by the physician.</p>',
    fertilityOrFamily:
      '<p>MCADD is inherited in an autosomal recessive pattern. Confirmed patients and families can receive genetic counseling regarding carrier screening, recurrence risk, prenatal diagnosis, and preimplantation genetic testing options.</p><p>Siblings of affected individuals should be screened or tested as early as possible to identify asymptomatic or pre-symptomatic individuals and initiate preventive management.</p>',
    emergencySigns:
      '<p>Seek emergency care immediately and inform staff of the MCADD diagnosis if the following occur: persistent vomiting with inability to feed, lethargy or altered consciousness, seizures, rapid breathing, pallor with cold sweats. Bring the emergency medical card stating the need for prompt glucose administration.</p><p>If the patient is awake but unable to take adequate carbohydrates by mouth, try oral glucose gel or sugary drinks while arranging transport to the hospital. Do not wait for symptoms to resolve on their own.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
    },
    {
      name: 'NCBI StatPearls: Medium-Chain Acyl-CoA Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560837/',
    },
    {
      name: 'Orphanet: Medium-chain acyl-coenzyme A dehydrogenase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/42',
    },
  ],
  symptoms:
    '<p>Often asymptomatic between episodes; during fasting or illness may develop hypoketotic hypoglycemia with lethargy, vomiting, seizures, and in severe cases coma.</p>',
  diagnosis:
    '<p>Newborn screening detects elevated C8 acylcarnitine; confirmation requires urine organic acid analysis and ACADM genetic testing.</p>',
  treatment:
    '<p>Avoid prolonged fasting, provide glucose promptly during illness; acute episodes require intravenous glucose; long-term management individualized by metabolic specialists.</p>',
  prognosis:
    '<p>With early diagnosis and proper management, most patients can live normal lives; unrecognized cases are at risk of sudden death during metabolic stress.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3516,
    name: 'medium-chain-acyl-coa-dehydrogenase-deficiency-journey.png',
    url: '/images/diseases/medium-chain-acyl-coa-dehydrogenase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

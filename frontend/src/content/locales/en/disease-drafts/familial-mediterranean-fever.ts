import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFamilialMediterraneanFever: DiseaseDraft = {
  ...entity(28, 'disease-familial-mediterranean-fever'),
  name: 'Familial Mediterranean Fever',
  nameEn: 'Familial Mediterranean Fever',
  alias:
    'FMF, Recurrent Polyserositis, MEFV-Associated Autoinflammatory Disease',
  slug: 'familial-mediterranean-fever',
  oneSentence:
    'Familial Mediterranean Fever is a hereditary autoinflammatory disease marked by recurrent short fevers, often with abdominal pain, chest pain, joint pain, rash, or risk of amyloidosis.',
  plainName:
    'A hereditary autoinflammatory condition with recurrent fevers and polyserositis attacks',
  prevalence:
    'More common in Mediterranean and related populations, including some Jewish, Armenian, Arab, Turkish, and North African groups; can also occur in other populations.',
  quickLook: {
    whatItIs:
      'FMF involves overactive inflammation from the innate immune system. Attacks often start suddenly, last about a day or two, then resolve, but repeated attacks and chronic inflammation can lead to kidney amyloidosis and other risks.',
    whoToSeeFirst:
      'For recurrent unexplained fevers with abdominal pain, chest pain, monoarthritis, leg rash, or family history, consider evaluation at a rheumatology or pediatric rheumatology clinic.',
    isGenetic:
      'Usually associated with the MEFV gene, most commonly inherited in an autosomal recessive pattern, though dominant or single-variant cases can occur. Genetic results should be interpreted alongside clinical attack patterns.',
    hasTreatment:
      'Long-term prevention and attack management plans are available and can reduce attacks and amyloidosis risk. Specific medications, monitoring, and special situations require guidance from a rheumatology specialist.',
    commonDelayReason:
      'Abdominal attacks can mimic acute abdomen, joint pain can resemble infection or arthritis, and children may have only recurrent fevers; symptom-free intervals can lead to years without a diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent brief high fevers with abdominal pain, chest pain, joint pain, or rash, with symptom-free intervals in between.',
      'Multiple ER visits for acute abdomen-like abdominal pain, but exams or surgery do not explain the repeated attacks.',
      'Recurrent redness, swelling, and pain in large joints, especially in the legs, often with fever.',
      'Erysipelas-like red patches on the ankles or lower legs, with fever or joint pain.',
      'Family history of FMF, recurrent fevers and abdominal pain, kidney amyloidosis, or unexplained kidney failure.',
    ],
    commonWrongTurns: [
      'Every abdominal pain episode treated as gastroenteritis, appendicitis, or gynecological emergency, without recognizing the periodic pattern.',
      'Relying solely on positive or negative genetic test results while ignoring clinical diagnostic criteria and attack characteristics.',
      'Stopping follow-up after symptom relief without monitoring urine protein or inflammation markers.',
      'Attributing recurrent fevers simply to low immunity or infections.',
    ],
    firstDepartments: [
      'Rheumatology',
      'Pediatric Rheumatology',
      'Nephrology (when proteinuria or amyloidosis risk is present)',
      'Genetic Counseling',
      'Emergency (for acute abdomen-like attacks or severe chest pain)',
    ],
    diagnosisChecklist: [
      'Record the date, duration, fever level, location of abdominal/chest/joint pain or rash, and whether attacks resolved on their own for each episode.',
      'Compile ethnic background, family history, past surgeries, or repeated ER visit records.',
      'Bring inflammation marker, blood count, urine, and kidney function results from both attack and symptom-free periods.',
      'Ask whether Tel Hashomer or other clinical criteria are met, and whether MEFV gene testing is needed.',
      'During long-term follow-up, monitor for urine protein, kidney function, and amyloidosis risk.',
    ],
    testsToAskAbout: [
      'CRP/ESR and blood counts during attacks, and serum amyloid A (can be helpful when done promptly).',
      'Urinalysis, urine protein, and kidney function.',
      'MEFV gene testing and variant interpretation.',
      'Imaging and differential diagnosis as needed for abdominal, chest, or joint pain attacks.',
      'Differential diagnosis from other periodic fever and autoinflammatory syndromes.',
    ],
    questionsForDoctor: [
      'Does my attack pattern fit FMF? What other conditions should be ruled out?',
      'How should my MEFV results be interpreted? Does having only one variant matter?',
      'What are the goals of long-term preventive treatment? How is effectiveness and side effect monitoring done?',
      'When should I go to the ER instead of waiting for the attack to resolve on its own?',
      'Do my family members need testing? Do I need genetic counseling before planning a pregnancy?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FMF typically presents as recurrent brief fevers, often with peritonitis-like abdominal pain, pleuritis-like chest pain, arthritis or joint pain, erysipelas-like rash, and myalgia. Symptom-free intervals may be completely normal. Inadequately controlled chronic inflammation can increase the risk of AA amyloidosis and kidney involvement.</p>',
    diagnosis:
      '<p>Diagnosis relies mainly on clinical attack patterns, family and ethnic background, inflammation markers, treatment response, and MEFV gene testing. GeneReviews notes that even if genetic testing does not find biallelic pathogenic variants, FMF cannot be fully excluded; clinicians need to differentiate from other periodic fever syndromes, infections, inflammatory bowel disease, and acute abdomen.</p>',
    treatment:
      '<p>The goal of long-term management is to reduce attacks, control inflammation, and prevent amyloidosis. Specific medications, dosages, pregnancy planning, and management of resistance or intolerance require guidance from a rheumatology specialist. Patients should not stop or adjust medications on their own.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on attack frequency, inflammation markers, urine protein, kidney function, treatment adherence, and side effect monitoring. Patients can keep attack diaries and test results to help clinicians assess whether the disease is well controlled.</p>',
    fertilityOrFamily:
      '<p>FMF is most commonly autosomal recessive but can have more complex inheritance. After confirming MEFV variants, patients and partners can learn about recurrence risk, carrier testing, and reproductive options through genetic counseling.</p>',
    emergencySigns:
      '<p>Severe persistent abdominal pain, chest pain, difficulty breathing, altered consciousness, inability to eat or drink, suspected infection, or symptoms clearly different from previous attack patterns warrant prompt ER visit. Do not attribute every abdominal pain to FMF.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Familial Mediterranean Fever',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
    },
    {
      name: 'MedlinePlus Genetics: Familial Mediterranean fever',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-mediterranean-fever/',
    },
    {
      name: 'Orphanet: Familial Mediterranean fever',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/342',
    },
  ],
  symptoms:
    '<p>Recurrent brief fevers, with possible abdominal pain, chest pain, joint pain/arthritis, erysipelas-like rash, and myalgia; symptom-free intervals are often relatively normal.</p>',
  diagnosis:
    '<p>Evaluation includes clinical attack patterns, inflammation markers, urine protein/kidney function, MEFV gene testing, and differentiation from other periodic fever diseases.</p>',
  treatment:
    '<p>Long-term prevention and inflammation control require planning by a rheumatology specialist; the goal is to reduce attacks and prevent amyloidosis and kidney damage.</p>',
  prognosis:
    '<p>Standard management can usually significantly reduce attack risk and amyloidosis risk; delayed diagnosis or inadequate control increases the risk of kidney complications.</p>',
  sourceName: 'GeneReviews: Familial Mediterranean Fever',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 327,
    name: 'familial-mediterranean-fever-journey.png',
    url: '/images/diseases/familial-mediterranean-fever-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

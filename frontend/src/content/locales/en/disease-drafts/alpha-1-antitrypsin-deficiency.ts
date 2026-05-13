import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlpha1AntitrypsinDeficiency: DiseaseDraft = {
  ...entity(2006, 'disease-alpha-1-antitrypsin-deficiency'),
  name: 'Alpha-1-antitrypsin deficiency',
  nameEn: 'Alpha-1-antitrypsin deficiency',
  alias:
    'AATD; AAT deficiency; Alpha-1; inherited emphysema; China Second Rare Disease Catalog item 6',
  slug: 'alpha-1-antitrypsin-deficiency',
  oneSentence:
    'Alpha-1-antitrypsin deficiency is an inherited SERPINA1-related condition that can increase the risk of early COPD/emphysema and can also cause liver disease in infants, children, or adults.',
  plainName:
    'An inherited protein deficiency that can affect the lungs and liver',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 1,500-3,500 people of European ancestry, and it is less common in people of Asian descent.",
  quickLook: {
    whatItIs:
      'Alpha-1 antitrypsin is made mainly in the liver and helps protect lung tissue from inflammatory enzyme damage. When levels are low or the protein is abnormal, the lungs may be injured more easily and abnormal protein can accumulate in the liver.',
    whoToSeeFirst:
      'Adults with early COPD or emphysema should start with pulmonology. Infants with jaundice, abnormal liver enzymes, or adults with unexplained cirrhosis should see hepatology/gastroenterology, with genetics when confirmed or suspected.',
    isGenetic:
      'It is caused by SERPINA1 variants and is often described as codominant. Risk varies by genotype: ZZ is high risk, while SZ and MZ patterns have different risks, especially with smoking.',
    hasTreatment:
      'There is no single cure for all aspects. Care includes smoking avoidance, vaccines, inhaled medicines, pulmonary rehabilitation, oxygen when needed, selected use of AAT augmentation therapy for lung disease, and transplant evaluation for severe lung or liver disease.',
    commonDelayReason:
      'It is often treated for years as asthma, COPD, bronchitis, or unexplained liver disease. Young COPD, emphysema in a nonsmoker, or family lung/liver disease should trigger AAT testing.',
  },
  patientJourney: {
    whenToSuspect: [
      'COPD, emphysema, exertional breathlessness, wheeze, or reduced exercise ability before age 45-55.',
      'Marked emphysema despite never smoking or only light smoking.',
      'Repeated respiratory infections, chronic cough or sputum, unintentional weight loss, or persistent fatigue.',
      'Prolonged infant jaundice, abnormal liver enzymes, or unexplained cirrhosis in adulthood.',
      'Family history of AATD, early emphysema, chronic liver disease, liver transplant, or unexplained liver cancer.',
    ],
    commonWrongTurns: [
      'Treating it only as asthma or routine COPD without checking AAT level.',
      'Assuming emphysema is impossible because the person is young or does not smoke.',
      'Looking only at the lungs and missing liver assessment, or the reverse.',
      'Finding a low AAT level but not confirming phenotype/genotype or advising family screening.',
    ],
    firstDepartments: [
      'Pulmonology',
      'Hepatology or gastroenterology',
      'Medical genetics',
      'Pediatric hepatology',
    ],
    diagnosisChecklist: [
      'Prepare a timeline of cough, breathlessness, wheeze, infections, smoking, secondhand smoke, and occupational dust or fume exposure.',
      'Bring pulmonary function tests, chest CT, oxygen measurements, liver tests, liver imaging, and hospital records.',
      'Record neonatal jaundice, abnormal liver enzymes, or painful skin nodules suggesting panniculitis.',
      'Collect family history of emphysema, COPD, cirrhosis, liver cancer, liver transplant, or known AATD.',
    ],
    testsToAskAbout: [
      'Serum alpha-1 antitrypsin level.',
      'SERPINA1 genotype or AAT phenotype testing.',
      'Pulmonary function tests, diffusing capacity, chest CT, and oxygen assessment.',
      'Liver tests, coagulation, liver ultrasound or elastography, and hepatology evaluation when needed.',
      'Whether first-degree relatives should be tested.',
    ],
    questionsForDoctor: [
      'What is my genotype or phenotype, and what does it mean for lung and liver risk?',
      'How severe are my lung and liver findings now?',
      'Am I a candidate for AAT augmentation therapy, and what can it and cannot do?',
      'Which exposures should I avoid, and what vaccine or pulmonary rehabilitation plan do I need?',
      'Should relatives or future children receive genetic counseling or testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>AATD can cause lung disease, liver disease, or both. Lung clues include exertional breathlessness, wheezing, chronic cough with sputum, repeated respiratory infections, reduced exercise tolerance, and early emphysema. Smoking, secondhand smoke, dust, and air pollution can accelerate damage.</p><p>Liver involvement can appear as prolonged infant jaundice or abnormal liver enzymes, or later as cirrhosis, ascites, jaundice, and increased liver cancer risk. Rarely, painful skin nodules from panniculitis occur.</p>',
    diagnosis:
      '<p>Diagnosis usually starts with a serum AAT level. Low levels should be interpreted with the clinical setting and confirmed with AAT phenotype testing or SERPINA1 genotyping.</p><p>Doctors also assess lung and liver involvement with pulmonary function tests, chest CT, oxygen assessment, liver tests, coagulation tests, and liver imaging or elastography. Young COPD, emphysema in a nonsmoker, unexplained liver disease, and family history are important testing triggers.</p>',
    treatment:
      '<p>Care aims to slow lung damage, monitor liver disease, and reduce infection and exposure risks. Core measures include avoiding tobacco smoke, avoiding dust and fumes, vaccination, inhaled medicines, pulmonary rehabilitation, oxygen therapy when needed, and prompt treatment of exacerbations.</p><p>Some patients with lung disease may be evaluated for AAT augmentation therapy. It raises protective protein levels for the lungs but does not reverse established emphysema or treat liver protein accumulation. Severe lung or liver disease may require transplant evaluation.</p>',
    longTermCare:
      '<p>Follow-up tracks lung function, symptoms, exacerbations, chest imaging, oxygen, liver tests, liver imaging, liver cancer risk, and environmental exposures. Keep phenotype/genotype results available for new clinicians.</p><p>Family testing, smoking cessation support, work-exposure changes, exercise planning, and psychosocial support are part of care. Tell clinicians about AATD before new medicines, procedures, or pregnancy planning.</p>',
    fertilityOrFamily:
      '<p>AATD is related to SERPINA1 variants, and relatives may carry different risk alleles. First-degree relatives can ask about AAT level, phenotype, or genotype testing.</p><p>Genetic counseling can explain partner testing and possible child genotypes. Carrying a variant does not always mean disease will occur.</p>',
    emergencySigns:
      '<p>Seek urgent care for sudden severe breathlessness, blue lips, chest pain, coughing blood, high fever with breathing trouble, or confusion. Liver warning signs include vomiting blood, black stool, rapidly increasing abdominal swelling, worsening jaundice, unusual sleepiness, or confusion.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Alpha-1 antitrypsin deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/alpha-1-antitrypsin-deficiency/',
    },
    {
      name: 'MedlinePlus: Alpha-1 Antitrypsin Deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/alpha1antitrypsindeficiency.html',
    },
  ],
  symptoms:
    '<p>Common clues include early COPD/emphysema, breathlessness, wheeze, chronic cough, recurrent respiratory infections, and unexplained liver disease in infants or adults.</p>',
  diagnosis:
    '<p>Diagnosis uses serum AAT level, AAT phenotype or SERPINA1 genetic testing, and assessment of lung function, chest CT, and liver involvement.</p>',
  treatment:
    '<p>Care includes smoking and exposure avoidance, vaccines, inhaled therapy, pulmonary rehabilitation, oxygen, selected AAT augmentation therapy, and transplant evaluation for severe lung or liver disease.</p>',
  prognosis:
    '<p>Outlook depends on genotype, smoking, lung and liver severity, and follow-up. Early diagnosis and smoke avoidance can substantially reduce lung risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'respiratory',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 360,
    name: 'alpha-1-antitrypsin-deficiency-journey.png',
    url: '/images/diseases/alpha-1-antitrypsin-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleAcylCoADehydrogenaseDeficiency: DiseaseDraft = {
  ...entity(5021, 'disease-multiple-acyl-coa-dehydrogenase-deficiency'),
  name: 'Multiple Acyl-CoA Dehydrogenase Deficiency',
  nameEn: 'Multiple Acyl-CoA Dehydrogenase Deficiency',
  alias: 'MADD, GAII, glutaric aciduria type II',
  icd10Code: 'E71.3',
  slug: 'multiple-acyl-coa-dehydrogenase-deficiency',
  oneSentence:
    'Multiple acyl-CoA dehydrogenase deficiency (MADD) is a group of autosomal recessive fatty acid oxidation disorders caused by defects in electron transfer flavoprotein (ETF) or its dehydrogenase (ETFDH), leading to inability to break down fatty acids and some amino acids for energy, with clinical presentations ranging from fatal neonatal disease to adult-onset myopathy.',
  plainName:
    'A severe metabolic condition where the body cannot burn fat or protein for fuel',
  prevalence:
    'Neonatal-onset forms occur in approximately 1 in 100,000 to 1 in 250,000 live births; late-onset forms are more common, particularly ETFDH-related MADD in Chinese and East Asian populations.',
  searchIntents: [
    'MADD newborn screening',
    'multiple acyl-CoA dehydrogenase deficiency symptoms',
    'glutaric aciduria type II treatment',
    'MADD riboflavin treatment',
    'fatty acid oxidation disorder genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is a group of fatty acid oxidation disorders caused by deficiency of electron transfer flavoprotein (ETF) or its dehydrogenase (ETFDH), preventing the body from breaking down multiple chain-length fatty acids and some amino acids. It is divided into neonatal-onset (severe, often fatal) and late-onset (primarily myopathic) forms.',
    whoToSeeFirst:
      'Newborns with positive screening or suspected cases should see neonatology or metabolic genetics; late-onset patients should see neurology or metabolic genetics. Seek emergency care immediately for lethargy, vomiting, breathing difficulty, or worsening muscle weakness.',
    isGenetic:
      'Autosomal recessive inheritance. Disease-causing genes are ETFA, ETFB, or ETFDH. Parents are typically carriers, with a 25% recurrence risk for each pregnancy. Prenatal diagnosis and carrier screening are available.',
    hasTreatment:
      'Neonatal-onset forms have poor prognosis despite intensive metabolic support; late-onset forms (especially ETFDH-related) often respond well to high-dose riboflavin (vitamin B2), with significant symptom improvement. Acute episodes require hospital management, and long-term dietary management is essential.',
    commonDelayReason:
      'Neonatal symptoms (lethargy, vomiting, acidosis) mistaken for sepsis or common infection; late-onset muscle weakness and exercise intolerance misdiagnosed as myositis or psychogenic illness; delayed newborn screening or failure to follow up on metabolic testing.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn presents with lethargy, poor feeding, vomiting, rapid breathing, metabolic acidosis, hypoglycemia, or hyperammonemia.',
      'Infant or child has recurrent Reye-like episodes (vomiting, altered consciousness, hepatomegaly).',
      'Child or adult develops progressive proximal muscle weakness, exercise intolerance, or muscle pain, especially with abnormal lipid profiles or liver function.',
      'Urine has a peculiar odor or newborn screening shows elevated multiple acylcarnitines.',
      'Family history of similar metabolic disease or unexplained neonatal death.',
    ],
    commonWrongTurns: [
      'Neonatal metabolic crisis treated as sepsis without blood gas and metabolic screening.',
      'Late-onset muscle weakness misdiagnosed as inflammatory myopathy, mitochondrial myopathy, or functional weakness.',
      'Missed diagnosis of ETFDH-related reversible type, with no trial of riboflavin therapy.',
      'Parents restricting diet without professional nutritional guidance, leading to malnutrition.',
      'Failure to inform emergency physicians of the metabolic diagnosis, leading to prolonged fasting or contraindicated medications.',
    ],
    firstDepartments: [
      'Neonatology / Pediatric Metabolic Genetics',
      'Neurology (for late-onset myopathic presentation)',
      'Emergency Department (during acute metabolic crisis)',
      'Genetic Counseling',
      'Nutrition (for dietary management guidance)',
    ],
    diagnosisChecklist: [
      'Bring newborn screening reports showing elevated multiple acylcarnitines.',
      'Document symptom sequence, duration, and triggers (infection, fasting, surgery).',
      'Organize prior blood gas, glucose, ammonia, liver and kidney function results.',
      'Ask the physician whether ETFA, ETFB, and ETFDH genetic testing is needed.',
    ],
    testsToAskAbout: [
      'Blood acylcarnitine profile (elevated multiple chain-length acylcarnitines, especially C4-C18).',
      'Urine organic acid analysis (elevated glutaric, ethylmalonic, adipic, suberic, and sebacic acids).',
      'Blood gas, glucose, ammonia, liver function, CK, and myoglobin.',
      'ETFA, ETFB, and ETFDH genetic testing.',
      'Muscle biopsy (lipid accumulation may be seen in some late-onset cases).',
      'Riboflavin responsiveness trial (under physician guidance).',
    ],
    questionsForDoctor: [
      'What type does my child have — neonatal-onset or late-onset?',
      'Could this be ETFDH-related riboflavin-responsive type? When should we start a trial?',
      'How should we manage an acute metabolic crisis at home? What supplies should we keep?',
      'How should daily protein and fat intake be controlled?',
      'What genetic counseling and prenatal diagnostic preparations are needed for future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MADD presents with a broad clinical spectrum. Neonatal-onset (types I/II) manifests within hours to days after birth with severe metabolic acidosis, hypoglycemia, hyperammonemia, hepatomegaly, and hypotonia. Congenital anomalies may include polycystic kidneys, hypospadias, dysmorphic facial features, and neuronal migration defects. Most neonatal-onset infants die in the newborn period.</p><p>Late-onset (type III, most common) can present from infancy through adulthood, primarily with proximal muscle weakness, exercise intolerance, and myalgia. Rhabdomyolysis with acute kidney injury may occur. Some patients develop sensory neuropathy, fatty liver, or arrhythmias. Late-onset MADD in Chinese and East Asian populations is often associated with ETFDH mutations and responds well to riboflavin.</p>',
    diagnosis:
      '<p>Newborn screening detects elevated multiple acylcarnitines by tandem mass spectrometry. Diagnosis is confirmed by urine organic acid analysis (elevated glutaric, ethylmalonic, and dicarboxylic acids) and ETFA/ETFB/ETFDH genetic testing.</p><p>Late-onset cases require differentiation from mitochondrial myopathy, lipid storage myopathy, and other fatty acid oxidation disorders. Muscle biopsy may show lipid accumulation and mitochondrial abnormalities. ETFDH-related late-onset MADD is particularly common in Chinese and East Asian populations, so ETFDH should be prioritized in genetic testing.</p>',
    treatment:
      '<p>Neonatal-onset forms require intensive metabolic support: correction of acidosis and hypoglycemia, protein restriction, high carbohydrate intake, and intravenous glucose. Some patients require dialysis to remove toxic metabolites. Prognosis is generally poor.</p><p>Late-onset forms (especially ETFDH-related) should receive an early trial of high-dose riboflavin (vitamin B2, typically 100-400 mg/day); most patients show significant improvement within weeks to months. Avoid metabolic stressors such as fasting and infection, moderately restrict fat and protein intake, and supplement carnitine under physician guidance. Acute episodes require hospital management.</p>',
    longTermCare:
      '<p>Long-term follow-up includes regular monitoring of growth, nutritional status, liver and kidney function, cardiac enzymes, and CK; assessment of muscle strength and exercise tolerance; and ECG and echocardiography to exclude cardiomyopathy.</p><p>Daily management: avoid prolonged fasting (especially important in infants — ensure nighttime feeding), increase carbohydrate intake during febrile illness, and avoid strenuous exercise that may trigger rhabdomyolysis. Carry an emergency medical card and inform healthcare providers of the metabolic diagnosis. Genetic counseling and family screening are very important.</p>',
    fertilityOrFamily:
      '<p>MADD is inherited in an autosomal recessive pattern. After diagnosis, parents should undergo carrier testing and family members should be screened. The recurrence risk for each pregnancy is 25%. Prenatal genetic testing (amniocentesis or chorionic villus sampling) or preimplantation genetic testing (PGT) can reduce recurrence risk.</p>',
    emergencySigns:
      '<p>Seek emergency care immediately and inform staff of the MADD diagnosis for: persistent vomiting with inability to feed, lethargy or altered consciousness, rapid or deep breathing (acidosis), severe muscle weakness or pain with dark urine (rhabdomyolysis), seizures, or coma.</p><p>If the patient is awake but unable to eat, try oral sugary drinks while arranging transport to the hospital. Emergency management focuses on correcting metabolic derangements, providing adequate glucose, and avoiding prolonged fasting.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Multiple Acyl-CoA Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK558236/',
    },
    {
      name: 'Orphanet: Multiple acyl-CoA dehydrogenase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/26791',
    },
    {
      name: 'NORD: Multiple Acyl-CoA Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/multiple-acyl-coa-dehydrogenase-deficiency/',
    },
  ],
  symptoms:
    '<p>Neonatal-onset presents with severe metabolic acidosis, hypoglycemia, hyperammonemia, and hepatomegaly; late-onset primarily shows muscle weakness, exercise intolerance, and myalgia, with possible rhabdomyolysis.</p>',
  diagnosis:
    '<p>Blood acylcarnitine profile and urine organic acid analysis indicate multiple fatty acid oxidation defects; ETFA, ETFB, or ETFDH genetic testing confirms diagnosis.</p>',
  treatment:
    '<p>Neonatal-onset requires intensive metabolic support; late-onset (especially ETFDH-related) responds well to high-dose riboflavin, with avoidance of metabolic stressors.</p>',
  prognosis:
    '<p>Neonatal-onset has poor prognosis; late-onset usually improves significantly with riboflavin and dietary management but requires lifelong follow-up.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK558236/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3521,
    name: 'multiple-acyl-coa-dehydrogenase-deficiency-journey.png',
    url: '/images/diseases/multiple-acyl-coa-dehydrogenase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

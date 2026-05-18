import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLysosomalAcidLipaseDeficiency: DiseaseDraft = {
  ...entity(5012, 'disease-lysosomal-acid-lipase-deficiency'),
  name: 'Lysosomal Acid Lipase Deficiency',
  nameEn: 'Lysosomal Acid Lipase Deficiency',
  alias:
    'LAL-D; Wolman disease; cholesterol ester storage disease; China First Rare Disease Catalog item 66',
  slug: 'lysosomal-acid-lipase-deficiency',
  oneSentence:
    'Lysosomal acid lipase deficiency is an autosomal recessive lysosomal storage disease caused by LIPA gene mutations that prevent breakdown of cholesterol esters and triglycerides within lysosomes, leading to hepatosplenomegaly, dyslipidemia, and atherosclerosis; enzyme replacement therapy with sebelipase alfa significantly improves outcomes.',
  plainName:
    'A genetic metabolic disorder where the body cannot break down fat inside cells',
  prevalence:
    'Prevalence is approximately 1 in 40,000–300,000; the severe infantile form (Wolman disease) is extremely rare, while the late-onset form (cholesterol ester storage disease) is more common but frequently underdiagnosed.',
  searchIntents: [
    'lysosomal acid lipase deficiency symptoms',
    'LAL-D enzyme replacement therapy',
    'Wolman disease infant',
    'lysosomal acid lipase deficiency hepatosplenomegaly',
    'LAL-D genetics diagnosis',
  ],
  quickLook: {
    whatItIs:
      'LIPA gene mutations cause deficiency of lysosomal acid lipase, leading to accumulation of cholesterol esters and triglycerides within lysosomes, primarily damaging the liver, spleen, intestines, and cardiovascular system.',
    whoToSeeFirst:
      'Pediatric gastroenterology/hepatology or metabolic genetics for infantile hepatosplenomegaly, feeding difficulties, or steatorrhea; or for children/adults with unexplained elevated liver enzymes or dyslipidemia.',
    isGenetic:
      'Autosomal recessive, caused by LIPA gene mutations; parents are asymptomatic carriers, with a 25% recurrence risk for each pregnancy.',
    hasTreatment:
      'Enzyme replacement therapy (sebelipase alfa) is the main treatment and significantly improves liver function and survival; hematopoietic stem cell transplant is another option; liver transplant for end-stage liver disease.',
    commonDelayReason:
      'Late-onset patients have nonspecific symptoms (elevated liver enzymes, dyslipidemia) and are often misdiagnosed with nonalcoholic fatty liver disease, hyperlipidemia, or primary cirrhosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infantile form (Wolman disease): massive hepatosplenomegaly, abdominal distension, steatorrhea, failure to thrive, and adrenal calcification within weeks of birth.',
      'Childhood/adult form (cholesterol ester storage disease): unexplained elevated transaminases, hepatosplenomegaly, dyslipidemia (elevated cholesterol and triglycerides), and premature atherosclerosis.',
      'Hepatic steatosis or fibrosis on ultrasound without common causes such as obesity, alcohol, or viral hepatitis.',
    ],
    commonWrongTurns: [
      'Misdiagnosing hepatic steatosis and elevated enzymes as simple nonalcoholic fatty liver disease.',
      'Treating dyslipidemia with statins without effect.',
      'Failing to investigate metabolic causes of severe infantile hepatosplenomegaly.',
      'Repeatedly checking liver function without ordering enzyme activity testing or genetic analysis.',
    ],
    firstDepartments: [
      'Pediatric gastroenterology/hepatology',
      'Metabolic genetics',
      'Cardiology (premature coronary disease evaluation)',
      'Clinical nutrition',
    ],
    diagnosisChecklist: [
      'Document growth, feeding history, and symptom progression in detail.',
      'Liver function tests: persistently elevated transaminases, may progress to cirrhosis.',
      'Lipid profile: elevated total cholesterol, LDL-C, and triglycerides; decreased HDL-C.',
      'Abdominal ultrasound/CT: hepatosplenomegaly, fatty liver, adrenal calcification (infantile form).',
      'Acid lipase activity assay in leukocytes or skin fibroblasts: markedly reduced.',
      'LIPA genetic testing for definitive diagnosis.',
    ],
    testsToAskAbout: [
      'Liver function panel.',
      'Lipid profile.',
      'Abdominal ultrasound/CT.',
      'Leukocyte acid lipase activity.',
      'LIPA genetic testing.',
    ],
    questionsForDoctor: [
      "What is my child's acid lipase activity level?",
      'What is the cost and administration schedule of enzyme replacement therapy?',
      'What is the degree of liver fibrosis? Is cirrhosis likely?',
      'Should hematopoietic stem cell transplant be considered?',
      'How should cardiovascular disease risk be managed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The clinical spectrum ranges from severe infantile Wolman disease to late-onset cholesterol ester storage disease (CESD). Wolman disease presents within weeks to months after birth with massive hepatosplenomegaly, abdominal distension, steatorrhea, malnutrition, failure to thrive, anemia, and thrombocytopenia. Abdominal imaging characteristically shows marked adrenal calcification. Untreated infants usually die in infancy. Late-onset CESD has a more insidious presentation, with childhood or adulthood onset of unexplained elevated liver enzymes, hepatosplenomegaly, dyslipidemia, hepatic steatosis, and hepatic fibrosis that can progress to cirrhosis and liver failure. Cardiovascular complications include premature atherosclerosis and coronary artery disease.</p>',
    diagnosis:
      '<p>Diagnosis is based on hepatosplenomegaly, persistent liver enzyme abnormalities, and dyslipidemia, combined with enzyme assay (markedly reduced or absent acid lipase activity in leukocytes or skin fibroblasts) and LIPA genetic testing. Characteristic adrenal calcification in the infantile form is a strong diagnostic clue. Differential diagnosis includes nonalcoholic fatty liver disease, familial hypercholesterolemia, Gaucher disease, and Niemann-Pick disease.</p>',
    treatment:
      '<p>Enzyme replacement therapy (ERT) with sebelipase alfa (Kanuma), administered by intravenous infusion every two weeks at a dose of 1 mg/kg, significantly improves liver function, lowers lipids, reduces liver and spleen size, and improves growth and development. ERT should be started as early as possible in the infantile form. Hematopoietic stem cell transplant (HSCT) can theoretically provide a permanent enzyme source but carries significant risks; it is usually reserved for cases where ERT is unavailable or ineffective. Liver transplant is indicated for end-stage cirrhosis and liver failure. Cardiovascular risk management includes statins and antiplatelet therapy. Nutritional support includes medium-chain triglyceride (MCT) supplementation and fat-soluble vitamin replacement.</p>',
    longTermCare:
      '<p>Lifelong ERT and regular follow-up are required. Monitor liver function, lipids, liver and spleen size, growth, and cardiovascular status every 3–6 months. Assess hepatic fibrosis progression every 6–12 months (elastography or biopsy). Watch for infusion reactions (fever, rash, hypotension). Patient education includes adherence to treatment, regular check-ups, cardiovascular risk factor management (smoking cessation, blood pressure and lipid control), and recommended vaccinations.</p>',
    fertilityOrFamily:
      '<p>Autosomal recessive inheritance. Parents are asymptomatic carriers. Prenatal diagnosis (amniocentesis or chorionic villus sampling for enzyme activity and genetic analysis) and preimplantation genetic testing are available for at-risk families. Fertility is usually normal in late-onset patients, but pregnancy requires close monitoring of liver function and lipids.</p>',
    emergencySigns:
      '<p>Severe abdominal distension with respiratory distress (massive spleen or ascites), massive gastrointestinal bleeding (portal hypertension), altered consciousness (liver failure), severe steatorrhea with dehydration require immediate medical attention.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Lysosomal Acid Lipase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK305870/',
    },
    {
      name: 'NORD: Lysosomal Acid Lipase Deficiency',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/lysosomal-acid-lipase-deficiency/',
    },
  ],
  symptoms:
    '<p>Infantile form: massive hepatosplenomegaly, steatorrhea, failure to thrive, adrenal calcification; late-onset: elevated liver enzymes, dyslipidemia, hepatic fibrosis, premature coronary disease.</p>',
  diagnosis:
    '<p>Markedly reduced acid lipase activity in leukocytes or fibroblasts; LIPA genetic testing confirms diagnosis; characteristic adrenal calcification in infantile form.</p>',
  treatment:
    '<p>Enzyme replacement therapy (sebelipase alfa) is first-line; HSCT and liver transplant are alternatives; cardiovascular risk management.</p>',
  prognosis:
    '<p>Untreated infantile form is fatal within the first year; ERT significantly improves late-onset prognosis; early diagnosis and treatment delay cirrhosis and cardiovascular disease.</p>',
  sourceName: 'GeneReviews: Lysosomal Acid Lipase Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK305870/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5012,
    name: 'lysosomal-acid-lipase-deficiency-journey.png',
    url: '/images/diseases/lysosomal-acid-lipase-deficiency-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

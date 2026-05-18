import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNAcetylglutamateSynthaseDeficiency: DiseaseDraft = {
  ...entity(5025, 'disease-n-acetylglutamate-synthase-deficiency'),
  name: 'N-acetylglutamate Synthase Deficiency',
  nameEn: 'N-acetylglutamate Synthase Deficiency',
  alias: 'NAGS deficiency',
  icd10Code: 'E72.2',
  slug: 'n-acetylglutamate-synthase-deficiency',
  oneSentence:
    'N-acetylglutamate synthase deficiency is the rarest urea cycle disorder, caused by NAGS gene variants that prevent synthesis of N-acetylglutamate, the essential cofactor for carbamoyl phosphate synthetase I, leading to impaired ammonia detoxification and hyperammonemia, but it is effectively treated with the specific replacement drug carglumic acid.',
  plainName:
    'A rare metabolic disease where the body cannot turn toxic ammonia into urea for excretion',
  prevalence:
    'Extremely rare, with only several dozen cases reported worldwide. It is the least common urea cycle disorder, but clinical presentations can be very severe. A small number of cases have been reported in China.',
  searchIntents: [
    'NAGS deficiency newborn screening',
    'N-acetylglutamate synthase deficiency symptoms',
    'hyperammonemia inherited metabolic disease',
    'carglumic acid NAGS',
    'urea cycle disorder genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is the rarest urea cycle disorder, caused by NAGS gene variants that lead to deficiency of N-acetylglutamate synthase. N-acetylglutamate is the essential cofactor that activates carbamoyl phosphate synthetase I; without it, the first step of the urea cycle cannot proceed, causing elevated blood ammonia. A key feature is excellent response to carglumic acid replacement therapy.',
    whoToSeeFirst:
      'Newborns with positive screening or suspected cases should see neonatology or metabolic genetics immediately. Seek emergency care for lethargy, vomiting, altered consciousness, or seizures suggesting hyperammonemia.',
    isGenetic:
      'Autosomal recessive inheritance. Parents are typically carriers, with a 25% recurrence risk for each pregnancy. Prenatal diagnosis and carrier screening are available.',
    hasTreatment:
      'There is a specific replacement therapy, carglumic acid, which mimics the function of N-acetylglutamate and rapidly activates the urea cycle. Acute hyperammonemia requires emergency ammonia-lowering treatment (dialysis, sodium benzoate/sodium phenylbutyrate).',
    commonDelayReason:
      'Neonatal hyperammonemia symptoms (lethargy, poor feeding, vomiting, seizures) mistaken for sepsis, intracranial hemorrhage, or hypoxic-ischemic encephalopathy; because it is extremely rare, primary care physicians often do not recognize it; insufficient newborn screening coverage or delayed result reporting.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn develops lethargy, poor feeding, vomiting, hypotonia, and rapid breathing within 24-72 hours after birth.',
      'Rapidly progressive altered consciousness, coma, or seizures accompanied by respiratory alkalosis.',
      'Significantly elevated blood ammonia (often >200 μmol/L, sometimes >1000 μmol/L) with normal or mildly abnormal liver function.',
      'Family history of unexplained neonatal death or known urea cycle disorder.',
      'Some late-onset patients may present with hyperammonemic encephalopathy triggered by infection, high-protein diet, or stress.',
    ],
    commonWrongTurns: [
      'Neonatal symptoms treated as sepsis or hypoxic-ischemic encephalopathy without blood ammonia testing.',
      'Metabolic disease excluded because liver function is normal, without considering urea cycle disorders.',
      'High-protein nutritional support given during hyperammonemia, worsening the condition.',
      'Delayed initiation of carglumic acid, postponing specific treatment.',
      'Failure to inform emergency physicians of the metabolic diagnosis, leading to contraindicated medications (e.g., valproate).',
    ],
    firstDepartments: [
      'Neonatology / Pediatric Metabolic Genetics',
      'Emergency Department (during acute hyperammonemia)',
      'Genetic Counseling',
      'Nutrition (for long-term dietary management)',
    ],
    diagnosisChecklist: [
      'Bring newborn screening reports.',
      'Document symptom onset time, progression speed, and triggers (infection, fasting, surgery).',
      'Organize blood ammonia, blood gas, liver function, glucose, urine organic acids, and plasma amino acid results.',
      'Ask the physician whether NAGS genetic testing is needed.',
    ],
    testsToAskAbout: [
      'Blood ammonia (the most critical indicator; samples must be processed promptly).',
      'Blood gas analysis (often shows respiratory alkalosis).',
      'Plasma amino acid profile (elevated glutamine, decreased citrulline and arginine).',
      'Urine organic acid analysis (orotic acid normal or low, which helps differentiate from OTC deficiency).',
      'NAGS genetic testing.',
      'Enzyme assay (hepatic NAGS enzyme activity, rarely performed).',
    ],
    questionsForDoctor: [
      'Can my child be confirmed to have NAGS deficiency rather than another urea cycle disorder?',
      'When should carglumic acid be started, and how is the dose adjusted?',
      'What is the emergency management protocol for acute hyperammonemia? What supplies should we keep at home?',
      'How much daily protein intake should be limited?',
      'What genetic counseling and prenatal diagnostic preparations are needed for future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The clinical presentation of NAGS deficiency is similar to other urea cycle disorders but with considerable individual variability. Neonatal-onset forms present within hours to days after birth with lethargy, poor feeding, vomiting, hypotonia, rapid breathing, low body temperature, and rapid progression to coma and seizures. Severe hyperammonemia can cause cerebral edema and increased intracranial pressure, leading to irreversible neurological injury.</p><p>Late-onset forms (partial enzyme deficiency) can present in infancy, childhood, or even adulthood, often triggered by infection, high-protein diet, fasting, or surgery, with manifestations including behavioral changes, confusion, ataxia, vomiting, and lethargy.</p>',
    diagnosis:
      '<p>Diagnosis depends on recognition of hyperammonemia and differential diagnosis. Newborn screening through blood amino acid and acylcarnitine profiles may suggest urea cycle disorders, but NAGS deficiency can be missed by newborn screening. Genetic testing of the NAGS gene confirms the diagnosis.</p><p>Laboratory features: markedly elevated blood ammonia, respiratory alkalosis on blood gas, elevated plasma glutamine, decreased citrulline and arginine, and normal or low urinary orotic acid (this helps differentiate from ornithine transcarbamylase deficiency, where urinary orotic acid is elevated). Hepatic enzyme activity assay can confirm the diagnosis but is rarely needed clinically.</p>',
    treatment:
      '<p>Carglumic acid is the specific replacement therapy for NAGS deficiency, mimicking the function of endogenous N-acetylglutamate to activate CPSI and restore the urea cycle. The usual dose is 100-250 mg/kg/day divided into 2-4 oral doses; nasogastric administration can be used during acute episodes.</p><p>Emergency management of acute hyperammonemia: immediately stop protein intake, provide high-concentration glucose and lipid emulsions intravenously to supply calories and suppress catabolism; sodium benzoate and sodium phenylbutyrate provide alternative pathways for ammonia excretion; severe hyperammonemia (ammonia >400-500 μmol/L or with cerebral edema) requires hemodialysis. After stabilization, protein intake is gradually resumed, usually requiring lifelong protein restriction and essential amino acid supplementation.</p>',
    longTermCare:
      '<p>The core of long-term management is preventing recurrent hyperammonemia: lifelong carglumic acid therapy; individualized protein restriction (typically 1.0-2.0 g/kg/day, with children requiring sufficient intake for growth); avoidance of prolonged fasting; increased caloric intake and reduced protein during febrile illness; regular monitoring of blood ammonia, plasma amino acids, and growth/development.</p><p>Neurodevelopmental follow-up is very important, as severe neonatal hyperammonemia can cause intellectual disability, cerebral palsy, or epilepsy. Carry an emergency medical card and disease information, and inform healthcare providers of the metabolic diagnosis. Genetic counseling and family screening are essential.</p>',
    fertilityOrFamily:
      '<p>NAGS deficiency is inherited in an autosomal recessive pattern. After diagnosis, parents should undergo carrier testing and family members should be screened. The recurrence risk for each pregnancy is 25%. Prenatal genetic testing (amniocentesis or chorionic villus sampling) or preimplantation genetic testing (PGT) can reduce recurrence risk.</p>',
    emergencySigns:
      '<p>Seek emergency care immediately and inform staff of the NAGS deficiency/urea cycle disorder diagnosis for: persistent vomiting with inability to feed, lethargy or altered consciousness, rapid or deep breathing, seizures or coma, or behavioral abnormalities or ataxia (late-onset).</p><p>If the patient is awake but unable to eat, try oral sugary drinks while arranging transport to the hospital. Emergency management focuses on stopping protein intake, providing adequate glucose, and initiating ammonia-lowering therapy as soon as possible. Carglumic acid should be carried as an emergency medication at all times.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Urea Cycle Disorders Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
    },
    {
      name: 'Orphanet: N-acetylglutamate synthase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail:407',
    },
    {
      name: 'NORD: Urea Cycle Disorders',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/urea-cycle-disorders/',
    },
  ],
  symptoms:
    '<p>Neonatal-onset presents within hours to days with lethargy, poor feeding, vomiting, hypotonia, rapid breathing, and rapid progression to coma and seizures. Late-onset presents with hyperammonemic encephalopathy triggered by stress.</p>',
  diagnosis:
    '<p>Hyperammonemia with respiratory alkalosis, elevated plasma glutamine, decreased citrulline and arginine, normal or low urinary orotic acid. NAGS genetic testing confirms diagnosis.</p>',
  treatment:
    '<p>Carglumic acid is specific replacement therapy; acute hyperammonemia requires emergency ammonia-lowering measures (sodium benzoate/phenylbutyrate, dialysis); long-term protein restriction.</p>',
  prognosis:
    '<p>Early diagnosis and carglumic acid treatment significantly improve prognosis; severe neonatal hyperammonemia may cause irreversible neurological injury.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3525,
    name: 'n-acetylglutamate-synthase-deficiency-journey.png',
    url: '/images/diseases/n-acetylglutamate-synthase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

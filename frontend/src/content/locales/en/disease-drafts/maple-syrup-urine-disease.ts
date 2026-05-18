import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMapleSyrupUrineDisease: DiseaseDraft = {
  ...entity(5013, 'disease-maple-syrup-urine-disease'),
  name: 'Maple Syrup Urine Disease',
  nameEn: 'Maple Syrup Urine Disease',
  alias:
    'MSUD; branched-chain ketoaciduria; China First Rare Disease Catalog item 67',
  slug: 'maple-syrup-urine-disease',
  oneSentence:
    'Maple syrup urine disease is an autosomal recessive disorder of branched-chain amino acid metabolism caused by mutations in BCKDHA, BCKDHB, or DBT genes; toxic accumulation of leucine, isoleucine, and valine causes neurological damage and a characteristic maple syrup odor in urine, and early newborn screening with low branched-chain amino acid diet management is key to improving prognosis.',
  plainName:
    'A genetic metabolic disorder where urine smells like maple syrup and three amino acids from protein cannot be properly metabolized',
  prevalence:
    'Incidence is approximately 1 in 185,000–300,000 live births; much higher in the Mennonite population (about 1 in 380).',
  searchIntents: [
    'maple syrup urine disease newborn screening',
    'MSUD diet management',
    'maple syrup urine disease leucine',
    'maple syrup urine disease acute metabolic crisis',
    'maple syrup urine disease liver transplant cure',
  ],
  quickLook: {
    whatItIs:
      'Deficiency of the branched-chain alpha-ketoacid dehydrogenase complex (BCKAD) prevents metabolism of leucine, isoleucine, and valine; toxic metabolites accumulate and damage the brain and nervous system.',
    whoToSeeFirst:
      'Pediatric metabolic genetics for positive newborn screens, unexplained lethargy and seizures with characteristic urine odor, or known MSUD patients with intercurrent illness.',
    isGenetic:
      'Autosomal recessive, caused by BCKDHA, BCKDHB, or DBT gene mutations; parents are asymptomatic carriers, with a 25% recurrence risk for each pregnancy.',
    hasTreatment:
      'Lifelong low branched-chain amino acid diet is the foundation of treatment; acute metabolic crises require emergency management; liver transplant can cure classic MSUD.',
    commonDelayReason:
      'The classic form presents in the neonatal period and can be fatal within days without newborn screening; late-onset forms have nonspecific symptoms and may be misdiagnosed as encephalitis or epilepsy.',
  },
  patientJourney: {
    whenToSuspect: [
      'Elevated branched-chain amino acids (leucine, valine, isoleucine) on newborn screening.',
      'Neonatal feeding difficulties, lethargy, altered muscle tone, seizures, and a characteristic sweet maple syrup odor in urine or earwax.',
      'Metabolic crisis triggered by infection or high protein intake: vomiting, altered consciousness, coma, and cerebral edema.',
      'Late-onset form: unexplained developmental delay, ataxia, seizures, or behavioral abnormalities.',
    ],
    commonWrongTurns: [
      'Treating neonatal metabolic crisis as sepsis or intracranial infection.',
      'Attributing the characteristic odor to feeding problems or hygiene.',
      'Misdiagnosing late-onset form as epilepsy or encephalitis without metabolic screening.',
      'Failing to adjust diet during illness, triggering fatal cerebral edema.',
    ],
    firstDepartments: [
      'Pediatric metabolic genetics',
      'Neonatology (acute phase)',
      'Emergency medicine (metabolic crisis)',
      'Clinical nutrition',
      'Liver transplant center (refractory cases)',
    ],
    diagnosisChecklist: [
      'Retain newborn screening results.',
      'Plasma amino acid analysis: elevated leucine, isoleucine, and valine; allo-isoleucine is a specific marker.',
      'Urinary organic acid analysis: elevated branched-chain alpha-ketoacids.',
      'BCKDHA/BCKDHB/DBT genetic testing for definitive diagnosis and classification.',
      'Acute phase: blood ammonia, glucose, blood gas, and electrolytes.',
    ],
    testsToAskAbout: [
      'Plasma amino acid profile (especially branched-chain amino acids and allo-isoleucine).',
      'Urinary organic acid analysis.',
      'BCKDHA/BCKDHB/DBT genetic testing.',
      'Blood ammonia, glucose, blood gas, and electrolytes (acute phase).',
      'Brain MRI (evaluate cerebral edema and demyelination).',
    ],
    questionsForDoctor: [
      'What type does my child have (classic, intermediate, or intermittent)?',
      'How much leucine should be allowed per day?',
      'How should metabolic formula and regular foods be combined?',
      'What is the emergency protocol during illness?',
      'What are the indications and timing for liver transplant?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The classic form presents within 4–7 days after birth (when protein intake increases from breast milk or formula): poor feeding, lethargy, increased or decreased muscle tone, opisthotonus, seizures, and coma. The characteristic finding is a sweet maple syrup or caramel-like odor in urine, sweat, and earwax. Progressive neurological deterioration is caused by accumulation of leucine and its metabolites leading to cerebral edema and demyelination. Without treatment, infants die within 2–3 weeks. Intermediate and intermittent forms have milder symptoms and metabolic crises triggered by infection, surgery, or high protein intake. The late-onset form can present in childhood or adulthood with developmental delay, ataxia, seizures, or psychiatric/behavioral abnormalities.</p>',
    diagnosis:
      '<p>Newborn screening by tandem mass spectrometry detects elevated plasma branched-chain amino acids (leucine, isoleucine, valine). Elevated plasma allo-isoleucine is a specific marker for MSUD. Urinary organic acid analysis shows increased excretion of branched-chain alpha-ketoacids. BCKDHA, BCKDHB, or DBT genetic testing confirms the diagnosis and classifies the type. Acute phase monitoring includes blood ammonia, glucose, blood gas, and electrolytes. Brain MRI may show cerebral edema, delayed myelination, or demyelination. Differential diagnosis includes organic acidemias, hyperammonemic encephalopathy, and neonatal sepsis.</p>',
    treatment:
      '<p>Lifelong strict restriction of branched-chain amino acids (especially leucine) is the cornerstone of therapy. Special medical formulas free of leucine, isoleucine, and valine are used, combined with small amounts of natural protein (breast milk or regular formula) to provide essential amino acids. Daily leucine allowance varies by age and disease severity (typically 300–1000 mg/day). During acute metabolic crisis, all natural protein must be stopped immediately, and high-concentration IV glucose and electrolytes are administered; hemodialysis may be needed to rapidly remove toxic metabolites. Isoleucine and valine supplements are given if deficient. Liver transplant corrects the enzymatic defect and is a curative treatment for classic MSUD, allowing normal diet post-transplant.</p>',
    longTermCare:
      '<p>Lifelong diet management and regular follow-up are required. Monitor growth, plasma branched-chain amino acid levels (leucine should be maintained at 100–300 μmol/L), neurological development, and nutritional status. Repeat plasma amino acid profiling every 3–6 months. Avoid infection, fever, surgery, and trauma (all can trigger metabolic crisis). Patient and family education is critical: establish an emergency protocol—during fever or vomiting, immediately provide oral glucose solution, reduce natural protein intake, and seek emergency care. Carry an emergency medical card stating the diagnosis and emergency management instructions.</p>',
    fertilityOrFamily:
      "<p>Autosomal recessive inheritance. Parents are asymptomatic carriers. Prenatal diagnosis (amniocentesis or chorionic villus sampling for amino acid and genetic analysis) and preimplantation genetic testing are available for at-risk families. If a classic MSUD patient receives a successful liver transplant, offspring genetic risk depends on the partner's genotype.</p>",
    emergencySigns:
      '<p>Vomiting with lethargy or altered consciousness after protein intake or during infection, seizures, severe cerebral edema (unequal pupils, abnormal breathing), and dehydration require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Maple Syrup Urine Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1319/',
    },
    {
      name: 'NORD: Maple Syrup Urine Disease',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/maple-syrup-urine-disease/',
    },
  ],
  symptoms:
    '<p>Neonatal lethargy, altered muscle tone, seizures, coma; urine/earwax with maple syrup odor; late-onset form presents with developmental delay, ataxia, and epilepsy.</p>',
  diagnosis:
    '<p>Newborn screening shows elevated branched-chain amino acids; plasma allo-isoleucine is specific; urinary branched-chain alpha-ketoacids elevated; BCKDHA/BCKDHB/DBT genetic testing confirms diagnosis.</p>',
  treatment:
    '<p>Lifelong low branched-chain amino acid diet with special formula; acute crisis managed with IV glucose and dialysis; liver transplant is curative for classic MSUD.</p>',
  prognosis:
    '<p>Newborn screening and early dietary management enable normal development in most children; delayed diagnosis causes severe brain damage and death; liver transplant offers excellent prognosis.</p>',
  sourceName: 'GeneReviews: Maple Syrup Urine Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1319/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5013,
    name: 'maple-syrup-urine-disease-journey.png',
    url: '/images/diseases/maple-syrup-urine-disease-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

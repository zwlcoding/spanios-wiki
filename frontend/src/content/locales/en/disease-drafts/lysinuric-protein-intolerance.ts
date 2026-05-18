import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLysinuricProteinIntolerance: DiseaseDraft = {
  ...entity(5011, 'disease-lysinuric-protein-intolerance'),
  name: 'Lysinuric Protein Intolerance',
  nameEn: 'Lysinuric Protein Intolerance',
  alias: 'LPI; dibasic aminoaciduria; China First Rare Disease Catalog item 65',
  slug: 'lysinuric-protein-intolerance',
  oneSentence:
    'Lysinuric protein intolerance is an autosomal recessive amino acid transport disorder caused by SLC7A7 gene mutations that impair intestinal and renal absorption of dibasic amino acids; high-protein meals trigger vomiting, diarrhea, and coma, while low-protein diet and citrulline supplementation are the mainstays of treatment.',
  plainName:
    'A genetic metabolic disorder where eating protein causes vomiting, diarrhea, and even coma',
  prevalence:
    'Extremely rare; prevalence is approximately 1 in 60,000–200,000; highest incidence in the Finnish population (about 1 in 20,000), with cases also reported in Japan and Italy.',
  searchIntents: [
    'lysinuric protein intolerance symptoms',
    'LPI low protein diet',
    'lysinuric protein intolerance coma',
    'LPI citrulline treatment',
    'lysinuric protein intolerance genetics',
  ],
  quickLook: {
    whatItIs:
      'SLC7A7 gene mutations disrupt transport of dibasic amino acids (lysine, arginine, ornithine) in intestinal and renal epithelium, causing protein malabsorption, impaired urea cycle function, and ammonia accumulation.',
    whoToSeeFirst:
      'Pediatric metabolic genetics or gastroenterology for infantile protein intolerance, recurrent vomiting and diarrhea, or failure to thrive.',
    isGenetic:
      'Autosomal recessive, caused by SLC7A7 gene mutations; parents are asymptomatic carriers, with a 25% recurrence risk for each pregnancy.',
    hasTreatment:
      'Clear treatment pathway: strict low-protein diet, citrulline supplementation, and sodium phenylbutyrate when needed; acute hyperammonemia requires emergency management.',
    commonDelayReason:
      'Infantile vomiting and diarrhea are often misdiagnosed as food allergy, lactose intolerance, or gastroenteritis; developmental delay is attributed to simple malnutrition.',
  },
  patientJourney: {
    whenToSuspect: [
      'After weaning, introduction of high-protein foods (milk, eggs, meat) causes recurrent vomiting, diarrhea, and abdominal distension.',
      'Lethargy, confusion, seizures, or coma after protein intake (hyperammonemic crisis).',
      'Growth failure, low body weight, and hypotonia.',
      'Hepatosplenomegaly, osteoporosis, or pulmonary alveolar proteinosis (older children or adults).',
      'Family history of similar protein intolerance or consanguinity.',
    ],
    commonWrongTurns: [
      'Misdiagnosing as food allergy or lactose intolerance and avoiding dairy without improvement.',
      'Treating repeated episodes as gastroenteritis with IV fluids without investigating metabolic causes.',
      'Attributing developmental delay to simple malnutrition without metabolic screening.',
      'Failing to refer to metabolic genetics after an abnormal newborn screen.',
    ],
    firstDepartments: [
      'Pediatric metabolic genetics',
      'Gastroenterology',
      'Clinical nutrition',
      'Emergency medicine (acute hyperammonemia)',
    ],
    diagnosisChecklist: [
      'Document the relationship between diet and symptoms, especially after high-protein meals.',
      'Plasma amino acid analysis: decreased lysine, arginine, and ornithine; elevated ammonia.',
      'Urinary amino acid analysis: massive excretion of dibasic amino acids (lysine, arginine, ornithine).',
      'SLC7A7 gene testing for definitive diagnosis.',
      'Assess complications: liver function, bone density, chest CT (pulmonary alveolar proteinosis).',
    ],
    testsToAskAbout: [
      'Plasma amino acid profile.',
      'Urinary amino acid profile.',
      'Blood ammonia.',
      'SLC7A7 genetic testing.',
      'Liver function, bone density, chest CT.',
    ],
    questionsForDoctor: [
      'How many grams of protein can my child have per day?',
      'What are the doses of citrulline and sodium phenylbutyrate?',
      'How do I recognize early signs of hyperammonemia?',
      'How often should blood ammonia and amino acids be checked?',
      'How can pulmonary alveolar proteinosis be prevented or detected early?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The classic presentation is protein intolerance after weaning: recurrent vomiting, diarrhea, abdominal distension, and food refusal after introducing high-protein foods. Severe hyperammonemia can cause lethargy, ataxia, seizures, and coma. Chronic protein deficiency leads to growth failure, low body weight, hypotonia, hepatosplenomegaly, and osteoporosis. Some older children and adults develop pulmonary alveolar proteinosis (progressive dyspnea), renal impairment, systemic lupus erythematosus-like manifestations, and thrombocytopenia.</p>',
    diagnosis:
      '<p>Diagnosis is based on characteristic diet-related symptoms, plasma amino acid analysis (decreased lysine, arginine, and ornithine with elevated ammonia), and urinary amino acid analysis (massive excretion of dibasic amino acids). SLC7A7 genetic testing confirms the diagnosis. Differential diagnosis includes food protein-induced enterocolitis syndrome, urea cycle disorders, and lactose intolerance. After diagnosis, assess complications including liver function, bone density, chest imaging (for pulmonary alveolar proteinosis), and renal function.</p>',
    treatment:
      '<p>The cornerstone of management is strict restriction of natural protein intake (typically 0.7–1.0 g/kg/day), favoring plant proteins and using special low-protein foods for calories. Citrulline supplementation (100–200 mg/kg/day) provides an alternative urea cycle substrate and promotes ammonia excretion. During acute hyperammonemic crises, all natural protein must be stopped immediately, and IV glucose and electrolytes are given; sodium phenylbutyrate or hemodialysis may be needed. For pulmonary alveolar proteinosis, whole-lung lavage may be effective. Calcium and vitamin D are supplemented for low bone density.</p>',
    longTermCare:
      '<p>Lifelong low-protein diet and regular follow-up are required. Monitor growth, blood ammonia, plasma amino acids, liver function, bone density, pulmonary function, and renal function. Prevent infections and stress (both can trigger hyperammonemia). Patient education includes recognizing early symptoms of hyperammonemia (vomiting, lethargy, behavioral changes), emergency management (oral glucose solution, stop protein intake, seek medical care immediately), and carrying an emergency medical card.</p>',
    fertilityOrFamily:
      '<p>Autosomal recessive inheritance. Parents are asymptomatic carriers. Fertility is usually normal in affected individuals, but pregnancy requires strict protein management and ammonia monitoring. Prenatal diagnosis (amniocentesis or chorionic villus sampling for gene mutation analysis) and preimplantation genetic testing are available for at-risk families. Genetic counseling helps assess recurrence risk.</p>',
    emergencySigns:
      '<p>Vomiting with lethargy or altered consciousness after protein intake, seizures, severe dehydration, or worsening dyspnea (pulmonary alveolar proteinosis) require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Lysinuric Protein Intolerance',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1361/',
    },
    {
      name: 'NORD: Lysinuric Protein Intolerance',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/lysinuric-protein-intolerance/',
    },
  ],
  symptoms:
    '<p>Vomiting and diarrhea after high-protein meals, hyperammonemia (lethargy, seizures, coma), growth failure, hepatosplenomegaly, osteoporosis, pulmonary alveolar proteinosis.</p>',
  diagnosis:
    '<p>Low plasma dibasic amino acids with massive urinary excretion; SLC7A7 genetic testing confirms diagnosis; assess lung, bone, and kidney complications.</p>',
  treatment:
    '<p>Strict low-protein diet, citrulline supplementation; acute hyperammonemia managed with IV glucose, sodium phenylbutyrate, or dialysis; whole-lung lavage for alveolar proteinosis.</p>',
  prognosis:
    '<p>Early diagnosis and low-protein diet significantly improve prognosis; uncontrolled hyperammonemia causes brain damage and death; pulmonary alveolar proteinosis is a major adult complication.</p>',
  sourceName: 'GeneReviews: Lysinuric Protein Intolerance',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1361/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5011,
    name: 'lysinuric-protein-intolerance-journey.png',
    url: '/images/diseases/lysinuric-protein-intolerance-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

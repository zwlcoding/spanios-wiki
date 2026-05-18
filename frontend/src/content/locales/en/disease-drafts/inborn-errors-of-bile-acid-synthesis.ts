import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseInbornErrorsOfBileAcidSynthesis: DiseaseDraft = {
  ...entity(5004, 'disease-inborn-errors-of-bile-acid-synthesis'),
  name: 'Inborn Errors of Bile Acid Synthesis',
  nameEn: 'Inborn Errors of Bile Acid Synthesis',
  alias:
    'IEBAS; bile acid synthesis defects; China First Rare Disease Catalog item 57',
  slug: 'inborn-errors-of-bile-acid-synthesis',
  oneSentence:
    'Inborn errors of bile acid synthesis are rare genetic enzyme deficiencies that impair hepatic bile acid production, leading to cholestasis, fat malabsorption, and fat-soluble vitamin deficiencies; oral bile acid replacement therapy is effective for most types.',
  plainName:
    'A genetic metabolic disorder where the liver cannot make normal bile acids',
  prevalence:
    'Overall prevalence is unknown; all types are extremely rare; 3β-hydroxy-Δ5-C27-steroid dehydrogenase deficiency is the most common form.',
  searchIntents: [
    'inborn errors of bile acid synthesis newborn jaundice',
    'bile acid synthesis defect treatment cholic acid',
    'IEBAS symptoms steatorrhea',
    'congenital bile acid synthesis disorder genetic counseling',
    'neonatal cholestasis low bile acids',
  ],
  quickLook: {
    whatItIs:
      'A deficiency of an enzyme in the liver bile acid synthesis pathway leads to accumulation of toxic abnormal bile acid intermediates and insufficient normal bile acids, causing cholestasis and impaired fat absorption.',
    whoToSeeFirst:
      'Pediatric gastroenterology/hepatology, neonatology, or metabolic genetics for infants with jaundice, acholic stools, or steatorrhea.',
    isGenetic:
      'Autosomal recessive inheritance; different types are caused by mutations in different genes; parents are typically asymptomatic carriers.',
    hasTreatment:
      'Most types respond well to oral primary bile acid (cholic acid) replacement therapy; liver transplantation is needed for a minority with end-stage disease.',
    commonDelayReason:
      'Neonatal cholestasis has many causes; this disease often has normal or only mildly elevated GGT, which can be overlooked; high suspicion and urinary bile acid profiling are needed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Persistent neonatal jaundice with acholic stools and dark urine.',
      'Infantile steatorrhea, poor growth, and bleeding tendency (vitamin K deficiency).',
      'Rachitic-like findings (vitamin D deficiency).',
      'Unexplained hepatosplenomegaly or liver dysfunction.',
    ],
    commonWrongTurns: [
      'Attributing neonatal cholestasis solely to breast milk jaundice or infection without further workup.',
      'Excluding cholestatic liver disease because serum GGT is normal.',
      'Misdiagnosing as biliary atresia and performing unnecessary surgery.',
      'Failing to perform urinary bile acid profiling or genetic testing, leading to prolonged diagnostic delay.',
    ],
    firstDepartments: [
      'Pediatric gastroenterology/hepatology',
      'Neonatology',
      'Pediatric metabolic genetics',
      'Clinical nutrition',
    ],
    diagnosisChecklist: [
      'Record timing of jaundice onset, stool color changes, and growth parameters.',
      'Liver panel: note serum total bile acids are often normal or low (unlike other cholestatic diseases), and GGT is normal or mildly elevated.',
      'Urinary bile acid fast atom bombardment mass spectrometry (FAB-MS) is the key diagnostic test.',
      'Genetic testing to identify the enzyme defect.',
      'Assess fat-soluble vitamin levels (A, D, E, K).',
    ],
    testsToAskAbout: [
      'Liver panel (ALT, AST, bilirubin, GGT).',
      'Serum total bile acids (often normal or low).',
      'Urinary bile acid profiling (FAB-MS).',
      'Targeted genetic testing.',
      'Fat-soluble vitamin levels and coagulation studies.',
    ],
    questionsForDoctor: [
      'What type of enzyme defect does my child have?',
      'What is the dose and duration of cholic acid replacement?',
      'Which fat-soluble vitamins need supplementation?',
      'How soon can we expect to see treatment response?',
      'When should liver transplantation be considered?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Clinical presentation varies by enzyme defect and age. The most common presentation in neonates is cholestasis: prolonged jaundice, acholic stools, dark urine, and hepatosplenomegaly. Due to bile acid deficiency, fat malabsorption leads to steatorrhea, poor growth, and fat-soluble vitamin deficiencies (vitamin K deficiency causing bleeding, vitamin D deficiency causing rickets, vitamin E deficiency causing neuromuscular disease, vitamin A deficiency causing night blindness). Some types (e.g., cerebrotendinous xanthomatosis) present primarily with neurologic symptoms in childhood or adulthood: ataxia, dementia, cataracts, and xanthomas. Some types can progress to cirrhosis and liver failure.</p>',
    diagnosis:
      '<p>The key to diagnosis is high clinical suspicion and urinary bile acid profiling. Unlike other cholestatic diseases, serum total bile acids are typically normal or low, and GGT is normal or only mildly elevated—an important clue. Urine FAB-MS detects abnormal bile acid intermediates and bile alcohols and is diagnostic. Genetic testing confirms the specific defect and type. Liver biopsy may show giant cell hepatitis, cholestasis, and fibrosis but is not essential. Differential diagnosis includes biliary atresia, Alagille syndrome, PFIC, and Citrin deficiency.</p>',
    treatment:
      '<p>Oral primary bile acid replacement is the treatment of choice for most types. Cholic acid (Cholbam) was FDA-approved in 2015 at 10–15 mg/kg/day in 1–2 divided doses. Its mechanism is negative feedback inhibition of 7α-hydroxylase, reducing production of toxic abnormal bile acids, while supplementing normal bile acids to promote fat absorption. Most patients show resolution of jaundice and improvement in liver function within weeks to months. Fat-soluble vitamin supplementation and medium-chain triglyceride-containing formulas are also needed. Cholic acid is ineffective for conjugation defects, which may respond to glycocholic acid. Patients who do not respond to bile acids or who have progressed to end-stage liver disease require liver transplantation.</p>',
    longTermCare:
      '<p>Lifelong follow-up is needed, monitoring liver function, growth and development, fat-soluble vitamin levels, and bone density. Nutritional management is important to ensure adequate calories and appropriate protein intake. Regular ophthalmologic examination (to exclude cataracts). Neurodevelopmental assessment (especially in cerebrotendinous xanthomatosis). Patient education includes recognizing precipitating factors such as infections and adherence to medication.</p>',
    fertilityOrFamily:
      '<p>Autosomal recessive inheritance. Parents of an affected child are typically asymptomatic carriers. Prenatal diagnosis (amniocentesis or chorionic villus sampling for acylcarnitine and genetic testing) and preimplantation genetic testing are available for at-risk families. Genetic counseling helps families understand recurrence risks and reproductive options.</p>',
    emergencySigns:
      '<p>Severe bleeding (vitamin K deficiency), rapid liver deterioration, altered mental status, severe dehydration or electrolyte imbalance, seizures require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Inborn Errors of Bile Acid Synthesis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
    },
    {
      name: 'NORD: Bile Acid Synthesis Disorders',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/bile-acid-synthesis-disorders/',
    },
  ],
  symptoms:
    '<p>Neonatal cholestasis (jaundice, acholic stools), steatorrhea, poor growth, fat-soluble vitamin deficiencies, hepatosplenomegaly; some types present with neurologic symptoms.</p>',
  diagnosis:
    '<p>Serum bile acids often normal or low, GGT normal or mildly elevated; urine FAB-MS detects abnormal bile acid metabolites; genetic testing confirms type.</p>',
  treatment:
    '<p>Oral cholic acid replacement for most types; fat-soluble vitamin supplementation; liver transplant for end-stage liver disease.</p>',
  prognosis:
    '<p>Early diagnosis and cholic acid therapy significantly improve prognosis; delayed diagnosis can lead to cirrhosis and liver failure.</p>',
  sourceName: 'GeneReviews: Inborn Errors of Bile Acid Synthesis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 504,
    name: 'inborn-errors-of-bile-acid-synthesis-journey.png',
    url: '/images/diseases/inborn-errors-of-bile-acid-synthesis-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

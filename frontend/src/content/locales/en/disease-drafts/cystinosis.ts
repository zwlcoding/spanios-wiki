import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCystinosis: DiseaseDraft = {
  ...entity(2021, 'disease-cystinosis'),
  name: 'Cystinosis',
  nameEn: 'Cystinosis',
  alias:
    'CTNS-related cystinosis, nephropathic cystinosis, ocular cystinosis, China Second Rare Disease Catalog item 21',
  slug: 'cystinosis',
  oneSentence:
    'Cystinosis is an inherited CTNS-related lysosomal storage disorder in which cystine builds up inside cells, mainly damaging the kidneys and eyes but also affecting the thyroid, muscles, pancreas, and reproductive system.',
  plainName:
    'A genetic metabolic disease where cystine builds up and first harms the kidneys and eyes',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 100,000 to 200,000 newborns worldwide, with regional variation.",
  quickLook: {
    whatItIs:
      'CTNS affects the lysosomal transporter that moves cystine out of cells. When cystine accumulates, it forms crystals and damages organs, with infant kidney Fanconi syndrome and corneal crystals being key early clues.',
    whoToSeeFirst:
      'Infants with excessive thirst and urination, dehydration, poor growth, rickets, or electrolyte problems should see pediatric nephrology or metabolic genetics; light sensitivity or corneal crystals should involve ophthalmology.',
    isGenetic:
      'Cystinosis is autosomal recessive. Parents are usually healthy carriers. Genetic counseling after diagnosis helps with parental confirmation, sibling screening, and future pregnancy planning.',
    hasTreatment:
      'Care focuses on early cysteamine therapy, replacing kidney tubular losses, protecting kidney function, and treating corneal crystals with eye medicine. Advanced kidney failure may require dialysis or transplant.',
    commonDelayReason:
      'Early symptoms may be labeled feeding problems, rickets, dehydration, renal tubular acidosis, or poor growth. The combination of Fanconi syndrome and eye findings should prompt testing.',
  },
  patientJourney: {
    whenToSuspect: [
      'An infant has excessive urination and thirst, repeated dehydration, vomiting, constipation, poor appetite, or poor height and weight gain.',
      'Tests suggest Fanconi syndrome: urine glucose with normal blood glucose, low phosphate, low potassium, metabolic acidosis, proteinuria, or aminoaciduria.',
      'There is rickets, bowed legs, bone pain, weakness, eye light sensitivity, tearing, or squinting.',
      'An adolescent or adult has unexplained tubular kidney problems, corneal crystals, or family history.',
    ],
    commonWrongTurns: [
      'Treating rickets only as nutrition or vitamin D deficiency without checking urine glucose, electrolytes, and kidney tubules.',
      'Replacing fluids and electrolytes without looking for the metabolic cause of Fanconi syndrome.',
      'Treating light sensitivity as conjunctivitis or dry eye without slit-lamp examination.',
      'After diagnosis, not monitoring leukocyte cystine level, extra-kidney organs, and adherence.',
    ],
    firstDepartments: [
      'Pediatric nephrology',
      'Metabolic genetics',
      'Pediatric ophthalmology',
      'Nephrology',
    ],
    diagnosisChecklist: [
      'Track thirst, urination, dehydration, vomiting, constipation, feeding, growth curves, and bone problems.',
      'Bring urinalysis, urine glucose, urine protein, electrolytes, blood gas, kidney function, phosphate, calcium, alkaline phosphatase, and bone imaging.',
      'Bring slit-lamp examination results, corneal crystal documentation, and prior genetic reports.',
      'Summarize family history of kidney failure, poor childhood growth, recurrent dehydration, or eye problems.',
    ],
    testsToAskAbout: [
      'Leukocyte cystine level for diagnosis and treatment monitoring.',
      'CTNS genetic testing with parental and sibling confirmation when appropriate.',
      'Fanconi syndrome evaluation: urine glucose, aminoaciduria, phosphate, potassium, bicarbonate, urine protein, and kidney function.',
      'Slit-lamp examination and follow-up of thyroid, pancreas, muscles, swallowing, and reproductive issues.',
    ],
    questionsForDoctor: [
      'Is this nephropathic, intermediate, or ocular cystinosis, and what is the kidney stage?',
      'What is the cysteamine treatment target, and how often should leukocyte cystine be checked?',
      'Which electrolytes, alkali, phosphate, vitamin D, or nutrition support are needed?',
      'How should eye treatment, extra-kidney monitoring, and transplant planning be scheduled?',
      'Should family members be tested, and what reproductive counseling is available?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Nephropathic cystinosis usually appears in infancy with renal Fanconi syndrome, causing excessive urination and thirst, repeated dehydration, vomiting, poor growth, electrolyte problems, metabolic acidosis, and hypophosphatemic rickets. Without sufficient treatment, chronic kidney disease or kidney failure can develop.</p><p>Cystine crystals in the cornea can cause light sensitivity, eye pain, tearing, and visual discomfort. Later-onset kidney disease or ocular-only disease can occur. Some people also develop thyroid, pancreas, muscle, swallowing, or male fertility problems.</p>',
    diagnosis:
      '<p>Diagnosis combines Fanconi syndrome, corneal crystals, leukocyte cystine levels, and CTNS genetic testing. Slit-lamp examination can show corneal cystine crystals, though they may not be obvious in very young infants.</p><p>Clinicians also rule out other causes of Fanconi syndrome or renal tubular acidosis, such as hereditary fructose intolerance, galactosemia, Wilson disease, mitochondrial disease, and drug or toxin-related tubular injury.</p>',
    treatment:
      '<p>Systemic cysteamine lowers intracellular cystine and is central to slowing kidney and extra-kidney damage. Corneal crystals usually require cysteamine eye treatment because systemic therapy has limited corneal effect.</p><p>Care also includes fluids, alkali, potassium, phosphate, vitamin D, nutrition support, and rickets management. Dialysis or kidney transplant may be needed for end-stage kidney disease, but extra-kidney cystine issues still require monitoring after transplant.</p>',
    longTermCare:
      '<p>Follow-up includes leukocyte cystine levels, kidney function, urine protein, electrolytes, bones, growth, ophthalmology, thyroid, blood glucose, muscles, and swallowing function. Because medication schedules can be complex, adherence support matters.</p><p>Patients should keep genetic reports, cystine levels, kidney function trends, and transplant records for care across centers.</p>',
    fertilityOrFamily:
      '<p>Cystinosis is autosomal recessive. Parents are often carriers, and pregnancy risk depends on both parental variants. Siblings may need screening.</p><p>Families planning pregnancy can discuss carrier testing, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Seek emergency care for marked dehydration, sleepiness, persistent vomiting, seizures, deep rapid breathing, severe weakness, abnormal heartbeat, low urine output, or infection with worsening kidney function. Bring the diagnosis and current fluid, electrolyte, and cysteamine plan.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Cystinosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/cystinosis/',
    },
  ],
  symptoms:
    '<p>Common clues include infant Fanconi syndrome, excessive thirst and urination, dehydration, poor growth, rickets, corneal crystals, light sensitivity, and later kidney failure or thyroid, pancreas, and muscle involvement.</p>',
  diagnosis:
    '<p>Diagnosis uses leukocyte cystine level, CTNS genetic testing, Fanconi syndrome evaluation, and slit-lamp examination for corneal crystals.</p>',
  treatment:
    '<p>Treatment includes systemic and eye cysteamine, fluid and electrolyte replacement, alkali, phosphate, vitamin D, nutrition support, kidney and extra-kidney monitoring, and dialysis or transplant when needed.</p>',
  prognosis:
    '<p>Early diagnosis and sustained cysteamine plus kidney tubular support can delay kidney failure and extra-kidney complications; delayed treatment or poor adherence increases risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 375,
    name: 'cystinosis-journey.png',
    url: '/images/diseases/cystinosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

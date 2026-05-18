import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMethylmalonicAcademia: DiseaseDraft = {
  ...entity(5017, 'disease-methylmalonic-academia'),
  name: 'Methylmalonic Acidemia',
  nameEn: 'Methylmalonic Acidemia',
  alias: 'MMA, methylmalonic aciduria',
  icd10Code: 'E71.12',
  slug: 'methylmalonic-academia',
  oneSentence:
    'Methylmalonic acidemia is a group of autosomal recessive organic acidemias caused by deficiency of methylmalonyl-CoA mutase or its cofactor adenosylcobalamin, leading to toxic accumulation of methylmalonic acid and related compounds that can damage the nervous system, kidneys, and bone marrow.',
  plainName:
    'A genetic metabolic disorder where acidic waste products build up in the body',
  prevalence:
    'Worldwide incidence approximately 1 in 50,000 to 1 in 100,000 live births; neonatal screening is expanding in China with regional variation in detection rates.',
  searchIntents: [
    'methylmalonic acidemia newborn screening',
    'MMA early symptoms',
    'methylmalonic acidemia treatment',
    'MMA diet management',
    'methylmalonic acidemia genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is a group of inherited metabolic disorders in which the body cannot properly break down certain amino acids and fatty acids, causing methylmalonic acid and related substances to build up. Depending on the enzyme defect type, some forms respond to vitamin B12 treatment while others do not.',
    whoToSeeFirst:
      'Newborns with positive screening or suspected cases should see neonatology or metabolic genetics; diagnosed patients require long-term follow-up with a metabolic specialist. Go to emergency immediately if lethargy, vomiting, rapid breathing, or altered consciousness occurs.',
    isGenetic:
      'Autosomal recessive inheritance (mutase deficiency type) or X-linked recessive inheritance (some cobalamin metabolism defects). Genetic counseling can help assess recurrence risk and prenatal diagnostic options.',
    hasTreatment:
      'Treatments exist but cannot cure the disease. Vitamin B12-responsive types can be managed with lifelong intramuscular B12 injections; non-responsive types require strict protein restriction and special formula feeding. Acute episodes require hospital management.',
    commonDelayReason:
      'Neonatal symptoms (lethargy, vomiting, poor feeding) mistaken for common infection or feeding issues; developmental delay in infancy attributed to simple developmental delay; delayed newborn screening or failure to follow up on positive screening results.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening shows elevated methylmalonic acid or propionylcarnitine.',
      'Newborn or infant presents with recurrent vomiting, poor feeding, lethargy, rapid breathing, or hypotonia.',
      'Infant or toddler shows developmental delay, intellectual disability, recurrent seizures, or behavioral abnormalities.',
      'Blood tests reveal metabolic acidosis, hyperammonemia, hypoglycemia, or anemia, especially with macrocytic anemia.',
      'Family history of similar metabolic disease or unexplained infant death.',
    ],
    commonWrongTurns: [
      'Neonatal vomiting and lethargy attributed to routine infection or feeding intolerance without investigating metabolic causes.',
      'Developmental delay attributed solely to developmental delay without reviewing newborn screening and metabolic markers.',
      'Metabolic crisis treated as routine gastroenteritis without providing adequate glucose and correcting acidosis under fasting conditions.',
      'Parents restricting protein without professional nutritional guidance, leading to malnutrition.',
      'B12-responsive patients not given a trial of B12 therapy, or receiving inadequate doses and follow-up.',
    ],
    firstDepartments: [
      'Neonatology / Pediatric Metabolic Genetics',
      'Emergency Department (during metabolic crisis)',
      'Genetic Counseling',
      'Nutrition (specialized dietary management)',
      'Nephrology (if renal impairment develops)',
    ],
    diagnosisChecklist: [
      'Bring newborn screening reports and previous plasma acylcarnitine and urine organic acid results.',
      'Document feeding history, symptom sequence, associated infections, and medication history.',
      'Organize complete blood count (note macrocytic anemia), blood gas, glucose, ammonia, liver and kidney function.',
      'Ask the physician whether MMUT, MMAA, MMAB, or other genetic testing and family cascade testing are needed.',
    ],
    testsToAskAbout: [
      'Plasma acylcarnitine profile (propionylcarnitine and methylmalonic acid-related markers).',
      'Urine organic acid analysis (elevated methylmalonic acid, methylcitrate).',
      'Plasma homocysteine (to differentiate isolated vs. combined methylmalonic acidemia).',
      'Vitamin B12 loading test (to determine B12 responsiveness).',
      'MMUT, MMAA, MMAB, and related genetic testing.',
      'Brain MRI (to assess for metabolic injury in basal ganglia and other structures).',
    ],
    questionsForDoctor: [
      'Is my child B12-responsive or non-responsive? What does this mean for prognosis?',
      'How much daily protein intake is allowed? Can my child have breast milk or regular formula?',
      'What is the emergency management plan during illness? What supplies should we keep at home?',
      'How often should blood/urine metabolic markers and growth be checked?',
      'What preparations are needed for future pregnancies and family member screening?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Clinical manifestations vary widely depending on type and severity. Early-onset forms (mut0 type most common) typically present in the neonatal period or early infancy with lethargy, vomiting, poor feeding, rapid breathing, hypotonia, dehydration, and can rapidly progress to hyperammonemic encephalopathy, coma, or death.</p><p>Some patients present with late-onset disease, showing developmental delay, intellectual disability, seizures, movement disorders, behavioral abnormalities, or psychiatric symptoms in childhood. Long-term complications include tubulointerstitial nephritis (leading to chronic kidney failure), pancreatitis, cardiomyopathy, visual impairment, and recurrent infections.</p>',
    diagnosis:
      '<p>Diagnosis relies on newborn screening, plasma tandem mass spectrometry (elevated propionylcarnitine), urine organic acid analysis (elevated methylmalonic acid and methylcitrate), and genetic testing. Plasma homocysteine levels help differentiate isolated from combined methylmalonic acidemia.</p><p>The vitamin B12 loading test is important for determining B12 responsiveness. B12-responsive types (often cblA) show favorable response to hydroxocobalamin injections with relatively better prognosis; mut0 types are typically non-responsive and require stricter dietary management.</p>',
    treatment:
      '<p>Acute episodes require hospital management: correction of dehydration, metabolic acidosis, and hyperammonemia; protein restriction; adequate glucose administration to suppress catabolism; and dialysis if needed. Ancillary medications such as L-carnitine and folic acid should be used under physician guidance.</p><p>Long-term management includes: regular intramuscular hydroxocobalamin for B12-responsive types; strict limitation of natural protein (typically 1.0-2.5 g/kg/day) with special formula for non-responsive types; and regular monitoring of growth, metabolic markers, and kidney function.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on: growth and nutritional status assessment; blood/urine metabolic marker monitoring; kidney function and urinalysis; neurodevelopmental and cognitive assessment; and ophthalmology and audiology evaluations. Kidney damage is an important long-term complication in mut0 type requiring early recognition and intervention.</p><p>Home management essentials: strict adherence to dietary control; increased carbohydrate and reduced protein during illness; establishing emergency medical plans; and ensuring timely vaccination (infection is a common trigger).</p>',
    fertilityOrFamily:
      '<p>Methylmalonic acidemia is inherited in an autosomal recessive pattern (mutase deficiency) or X-linked recessive pattern (some types). Genetic counseling can help family members understand carrier screening, recurrence risk, prenatal diagnosis (amniotic fluid enzyme activity or genetic testing), and preimplantation genetic testing options.</p><p>Siblings of affected individuals should undergo newborn screening or genetic testing as early as possible. Families with known disease should receive genetic counseling before planning pregnancies.</p>',
    emergencySigns:
      '<p>Seek emergency care immediately for: persistent vomiting with inability to feed, lethargy or altered consciousness, rapid breathing, seizures, or severe dehydration. Bring diagnostic records and emergency management instructions, and inform emergency staff of the MMA diagnosis so they can promptly initiate fluid resuscitation, acidosis correction, and catabolism suppression.</p><p>If the patient is awake but has difficulty eating, try oral sugary drinks or glucose gel while arranging transport to the hospital. Do not self-administer over-the-counter medications or wait for symptoms to resolve.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Methylmalonic Acidemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1231/',
    },
    {
      name: 'NORD: Methylmalonic Acidemia',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/methylmalonic-acidemia/',
    },
    {
      name: 'Orphanet: Methylmalonic acidemia',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/289',
    },
  ],
  symptoms:
    '<p>Early-onset forms present with neonatal vomiting, lethargy, hypotonia, and metabolic acidosis; late-onset forms show developmental delay, seizures, and intellectual disability. Long-term complications can affect kidneys, pancreas, and heart.</p>',
  diagnosis:
    '<p>Plasma acylcarnitine profile, urine organic acid analysis, and genetic testing confirm diagnosis; vitamin B12 loading test distinguishes responsive from non-responsive types.</p>',
  treatment:
    '<p>B12-responsive types require lifelong intramuscular B12; non-responsive types need strict protein restriction and special formula; acute episodes require hospital management for acidosis correction and catabolism suppression.</p>',
  prognosis:
    '<p>Early diagnosis and treatment improve outcomes; B12-responsive types have better prognosis; mut0 types may develop renal failure and require close follow-up.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1231/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3517,
    name: 'methylmalonic-academia-journey.png',
    url: '/images/diseases/methylmalonic-academia-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

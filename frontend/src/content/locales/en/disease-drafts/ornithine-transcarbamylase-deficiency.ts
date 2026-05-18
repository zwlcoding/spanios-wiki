import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseOrnithineTranscarbamylaseDeficiency: DiseaseDraft = {
  ...entity(5031, 'disease-ornithine-transcarbamylase-deficiency'),
  name: 'Ornithine Transcarbamylase Deficiency',
  nameEn: 'Ornithine Transcarbamylase Deficiency',
  alias: 'OTC deficiency, OTC-D, ornithine carbamoyltransferase deficiency',
  icd10Code: 'E72.4',
  slug: 'ornithine-transcarbamylase-deficiency',
  oneSentence:
    'Ornithine transcarbamylase deficiency is an X-linked urea cycle disorder caused by mutations in the OTC gene, leading to impaired ammonia detoxification and life-threatening hyperammonemia; phenylbutyrate, citrulline, and arginine are mainstays of treatment, with liver transplantation offering a cure.',
  plainName:
    'A rare metabolic disorder where the body cannot safely process protein waste, causing toxic ammonia buildup',
  prevalence:
    'Estimated prevalence is approximately 1 in 56,000 to 1 in 77,000 live births. It is the most common urea cycle disorder. Males are more severely affected due to X-linked inheritance; female carriers can have variable symptoms.',
  searchIntents: [
    'OTC deficiency symptoms',
    'urea cycle disorder hyperammonemia',
    'OTC deficiency treatment phenylbutyrate',
    'ornithine transcarbamylase liver transplant',
    'OTC deficiency newborn screening',
  ],
  quickLook: {
    whatItIs:
      'OTC deficiency is an X-linked inherited disorder of the urea cycle. The OTC enzyme normally converts ammonia to urea for excretion. When deficient, ammonia accumulates in the blood (hyperammonemia), which is toxic to the brain and can cause coma, brain damage, or death.',
    whoToSeeFirst:
      'Metabolic genetics specialist or pediatric geneticist. Newborns with poor feeding, lethargy, vomiting, or altered consciousness after protein intake need emergency evaluation.',
    isGenetic:
      'Yes, X-linked inheritance. Males with the mutation are typically severely affected. Females are carriers but can have symptoms ranging from mild to severe due to X-inactivation (lyonization). Approximately 20% of cases are due to new mutations with no family history.',
    hasTreatment:
      'Yes, but no cure without liver transplantation. Acute hyperammonemia requires emergency treatment with intravenous sodium phenylacetate/sodium benzoate and dialysis. Long-term management includes nitrogen-scavenging drugs (sodium phenylbutyrate, glycerol phenylbutyrate), citrulline or arginine supplementation, and a low-protein diet. Liver transplantation is curative and may be considered after metabolic stability is achieved.',
    commonDelayReason:
      'Symptoms are nonspecific in infants (poor feeding, vomiting, lethargy) and mimic common infections. In females, symptoms may be subtle or episodic. Neonatal screening is not universally available.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn or infant with poor feeding, vomiting, lethargy, irritability, or altered consciousness, especially after starting protein feeds.',
      'Episodes of confusion, headache, vomiting, or behavioral changes triggered by high-protein meals, illness, fasting, or stress.',
      'Developmental delay, intellectual disability, or unexplained neurological symptoms.',
      'Family history of unexplained infant deaths, hyperammonemia, or urea cycle disorders.',
      'Elevated ammonia levels on routine blood work.',
    ],
    commonWrongTurns: [
      'Infant symptoms mistaken for sepsis, viral illness, or formula intolerance.',
      'Vomiting and confusion in females misdiagnosed as migraine, psychiatric disorder, or gastrointestinal illness.',
      'Developmental delay attributed to other causes without investigating metabolic disorders.',
      'Delay in starting emergency treatment for hyperammonemia.',
      'Failure to refer to a metabolic genetics specialist.',
    ],
    firstDepartments: [
      'Metabolic Genetics / Pediatric Genetics',
      'Pediatric Emergency Medicine',
      'Neurology',
      'Nutrition / Dietetics',
    ],
    diagnosisChecklist: [
      'Document all episodes of altered consciousness, vomiting, confusion, or behavioral changes, including triggers.',
      'Collect family history of infant deaths, developmental delay, or hyperammonemia.',
      'Bring all prior lab results, especially ammonia levels and liver function tests.',
      'Ask about newborn screening results for urea cycle disorders.',
    ],
    testsToAskAbout: [
      'Plasma ammonia level (critical; must be collected and processed properly for accurate results).',
      'Plasma amino acid profile (elevated glutamine, low citrulline and arginine are characteristic).',
      'Urine organic acids and orotic acid (elevated orotic acid in OTC deficiency).',
      'Liver function tests and coagulation studies.',
      'OTC gene sequencing and deletion/duplication analysis.',
      'Allopurinol challenge test (may be used in females to assess carrier status).',
      'Liver biopsy (rarely needed; enzyme assay can confirm diagnosis).',
    ],
    questionsForDoctor: [
      "What is my/my child's ammonia level, and is it an emergency?",
      'What triggers should we avoid to prevent hyperammonemia episodes?',
      'What medications are needed, and what are their side effects?',
      'What is the protein restriction, and how do we ensure adequate nutrition?',
      'Is liver transplantation an option, and when should we consider it?',
      'What is the risk to other family members, and should they be tested?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The classic presentation in newborn males is severe hyperammonemia within 24–72 hours after birth, manifesting as poor feeding, vomiting, lethargy, irritability, tachypnea, seizures, and progression to coma. Without prompt treatment, this can be fatal or result in severe neurological damage. Partial (late-onset) forms present later in childhood or adulthood with episodic hyperammonemia triggered by high protein intake, illness, fasting, surgery, or certain medications. Symptoms include headaches, vomiting, confusion, agitation, behavioral changes, ataxia, and encephalopathy.</p><p>Female carriers can be asymptomatic or have variable symptoms depending on X-inactivation patterns. Some may have only mild protein intolerance, while others experience life-threatening episodes. Long-term complications include intellectual disability, seizures, cerebral palsy-like features, and hepatic dysfunction.</p>',
    diagnosis:
      '<p>Newborn screening for hyperammonemia is available in some regions but not universal. Diagnosis is based on elevated plasma ammonia, characteristic plasma amino acid pattern (elevated glutamine, low citrulline and arginine), and elevated urinary orotic acid. OTC gene sequencing confirms the diagnosis and identifies the specific mutation. Enzyme assay on liver tissue is rarely needed.</p><p>Differential diagnosis includes other urea cycle disorders (CPS1 deficiency, ASS deficiency, ASL deficiency, arginase deficiency), organic acidemias, fatty acid oxidation disorders, and liver failure. In females, the diagnosis can be challenging due to variable expressivity; molecular genetic testing is essential.</p>',
    treatment:
      '<p>Acute hyperammonemia is a medical emergency requiring immediate cessation of protein intake, intravenous glucose for anabolic support, intravenous sodium phenylacetate and sodium benzoate (Ammonul), and hemodialysis if ammonia remains severely elevated. Arginine supplementation is provided to promote the urea cycle.</p><p>Long-term management includes: nitrogen-scavenging agents (sodium phenylbutyrate or glycerol phenylbutyrate/Ravicti) to provide alternative pathways for nitrogen excretion; citrulline or arginine supplementation; strict protein restriction tailored to individual needs; avoidance of fasting; and aggressive management of intercurrent illness. Essential amino acid supplementation may be needed. Liver transplantation is curative and is often considered once metabolic stability is achieved, particularly in severe cases.</p>',
    longTermCare:
      '<p>Lifelong metabolic management is essential. Patients require regular monitoring of ammonia levels, plasma amino acids, nutritional status, liver function, and neurodevelopmental progress. A specialized metabolic dietitian should guide protein intake and supplementation. Emergency protocols should be in place for illness-induced catabolism, including increased calories from carbohydrates and fats, temporary protein restriction, and prompt medical evaluation.</p><p>Lifestyle: strict adherence to protein restriction; regular meals to avoid fasting; prompt medical attention during illness; wearing a medical alert bracelet; carrying emergency letters detailing diagnosis and management. Family and caregivers should be educated on recognizing early signs of hyperammonemia. Support groups and metabolic disease organizations can provide valuable resources and community.</p>',
    fertilityOrFamily:
      '<p>OTC deficiency is inherited in an X-linked pattern. Affected males pass the mutation to all daughters (who become carriers) but no sons. Female carriers have a 50% chance of passing the mutation to each child (sons may be affected, daughters may be carriers). Prenatal diagnosis (amniocentesis or CVS) and preimplantation genetic testing (PGT) are available for at-risk pregnancies. All female relatives of an affected male should be offered genetic counseling and testing.</p>',
    emergencySigns:
      '<p>Seek emergency care immediately for: altered consciousness, confusion, or coma; severe or persistent vomiting; seizures; rapid breathing or tachypnea; extreme lethargy or irritability; or any signs of hyperammonemia, especially during illness or after high protein intake. Delay in treatment can result in irreversible brain damage or death.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Urea Cycle Disorders Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
    },
    {
      name: 'NORD: Ornithine Transcarbamylase Deficiency',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/ornithine-transcarbamylase-deficiency/',
    },
    {
      name: 'Orphanet: Ornithine transcarbamylase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/664',
    },
  ],
  symptoms:
    '<p>Severe hyperammonemia in newborns causes lethargy, vomiting, seizures, and coma. Late-onset forms present with episodic confusion, vomiting, headaches, and behavioral changes triggered by protein, illness, or fasting. Female carriers have variable symptoms.</p>',
  diagnosis:
    '<p>Elevated ammonia, plasma amino acids showing elevated glutamine and low citrulline/arginine, and elevated urinary orotic acid. OTC gene sequencing confirms the diagnosis.</p>',
  treatment:
    '<p>Acute hyperammonemia requires emergency treatment with nitrogen-scavenging drugs and dialysis. Long-term management includes phenylbutyrate, citrulline/arginine supplementation, protein restriction, and liver transplantation as a cure.</p>',
  prognosis:
    '<p>Early diagnosis and treatment significantly improve outcomes. Neonatal-onset males have the worst prognosis without prompt intervention. Liver transplantation offers a cure for severe cases.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3531,
    name: 'ornithine-transcarbamylase-deficiency-journey.png',
    url: '/images/diseases/ornithine-transcarbamylase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

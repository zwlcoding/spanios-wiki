import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeonatalDiabetesMellitus: DiseaseDraft = {
  ...entity(5026, 'disease-neonatal-diabetes-mellitus'),
  name: 'Neonatal Diabetes Mellitus',
  nameEn: 'Neonatal Diabetes Mellitus',
  alias:
    'NDM, monogenic diabetes of infancy, diabetes diagnosed before 6 months',
  icd10Code: 'P70.2',
  slug: 'neonatal-diabetes-mellitus',
  oneSentence:
    'Neonatal diabetes mellitus is a group of monogenic forms of diabetes diagnosed within the first six months of life, divided into transient and permanent types; approximately 50% are caused by KCNJ11 or ABCC8 mutations, and many of these patients can switch from insulin injections to sulfonylurea oral therapy.',
  plainName:
    'A special type of diabetes that appears within the first half year of life',
  prevalence:
    'Incidence is approximately 1 in 90,000 to 1 in 260,000 live births; it represents an important cause of hyperglycemia in the newborn period. With expanding genetic testing, more cases are being accurately classified.',
  searchIntents: [
    'neonatal diabetes symptoms',
    'neonatal diabetes genes',
    'KCNJ11 sulfonylurea therapy',
    'transient neonatal diabetes',
    'neonatal diabetes genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is a monogenic form of diabetes diagnosed within the first 6 months of life, distinct from type 1 and type 2 diabetes. It is divided into transient (TNDM, often remits before adolescence) and permanent (PNDM, lifelong) types. Approximately 50% are caused by KCNJ11 or ABCC8 gene mutations affecting the pancreatic beta-cell potassium channel.',
    whoToSeeFirst:
      'Neonatology or pediatric endocrinology. After diagnosis, lifelong endocrinology follow-up is needed. Seek immediate care for polyuria, poor weight gain, or dehydration.',
    isGenetic:
      'The vast majority are monogenic. Common causative genes include KCNJ11, ABCC8, INS, abnormalities of the 6q24 imprinted region, and GCK. Some types are autosomal dominant, others arise from de novo mutations. Inheritance patterns vary by gene.',
    hasTreatment:
      'Patients with KCNJ11 or ABCC8 mutations can switch from insulin to sulfonylurea oral medications (e.g., glibenclamide) in approximately 90% of cases, dramatically improving quality of life. Other types usually require insulin. Early genetic testing is critical for treatment selection.',
    commonDelayReason:
      'Neonatal hyperglycemia mistaken for stress hyperglycemia or infection; genetic testing not performed within the first 6 months; limited awareness of monogenic diabetes in primary care; misdiagnosed as type 1 diabetes with long-term insulin use.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn or infant (<6 months) presents with polyuria, polydipsia, poor weight gain or weight loss, dehydration, or feeding difficulties.',
      'Persistent hyperglycemia with glucosuria that responds to insulin but has no clear cause.',
      'Mother had no gestational diabetes, or infant hyperglycemia persists despite resolution of maternal diabetes.',
      'Family history of similar neonatal-onset diabetes.',
      'Associated neurological abnormalities (e.g., DEND syndrome: developmental delay, epilepsy, neonatal diabetes).',
    ],
    commonWrongTurns: [
      'Neonatal hyperglycemia treated as stress hyperglycemia without further workup for monogenic diabetes.',
      'Misdiagnosed as type 1 diabetes, started on insulin without trying sulfonylureas.',
      'Delayed genetic testing, missing the window for treatment-changing diagnosis.',
      'Transient neonatal diabetes not followed after remission, leading to delayed diagnosis at relapse.',
      'Parents adjusting insulin doses or stopping insulin on their own, causing glycemic variability.',
    ],
    firstDepartments: [
      'Neonatology / Pediatric Endocrinology',
      'Genetic Counseling',
      'Nutrition',
    ],
    diagnosisChecklist: [
      'Document timing of symptom onset, blood glucose ranges, and weight changes.',
      'Organize prior blood glucose, urine glucose, insulin doses, and C-peptide results.',
      'Ask the physician whether neonatal diabetes genetic testing is needed (KCNJ11, ABCC8, INS, etc.).',
      'Draw a family pedigree to identify any family history of diabetes.',
    ],
    testsToAskAbout: [
      'Blood glucose and HbA1c monitoring.',
      'C-peptide level (assesses residual beta-cell function).',
      'Neonatal diabetes genetic panel (KCNJ11, ABCC8, INS, GCK, 6q24, etc.).',
      'Chromosomal analysis or methylation testing (for 6q24 transient neonatal diabetes).',
      'Islet autoantibodies (to exclude type 1 diabetes).',
    ],
    questionsForDoctor: [
      'Does my child have transient or permanent neonatal diabetes?',
      'Is the genetic result a KCNJ11/ABCC8 mutation? Can we try sulfonylurea tablets?',
      'What is the timing and process for switching to sulfonylureas?',
      'Are there other organ involvements (e.g., neurological, pancreatic development)?',
      'How can we reduce recurrence risk in future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Neonatal diabetes presents within days to 6 months after birth. Typical features include polyuria (frequently soaked diapers), polydipsia, feeding difficulties, poor weight gain or weight loss, dehydration, and alternating hyperglycemia and hypoglycemia. Some infants present with diabetic ketoacidosis, though this is less common than in type 1 diabetes.</p><p>KCNJ11 or ABCC8 mutations may be associated with neurological symptoms, known as DEND syndrome (developmental delay, epilepsy, neonatal diabetes) or intermediate DEND (iDEND, with milder developmental issues). 6q24-related transient neonatal diabetes may be accompanied by macroglossia, umbilical hernia, and macrosomia.</p>',
    diagnosis:
      '<p>Diagnostic criteria: hyperglycemia occurring within the first 6 months of life, after excluding stress hyperglycemia, infection, maternal drug effects, etc. Genetic testing is the key step.</p><p>Approximately 50% of cases are caused by activating mutations in KCNJ11 or ABCC8, 30-40% by abnormalities of the chromosome 6q24 imprinted region (transient), and the remainder by INS, GCK, FOXP3, and other gene variants. Islet autoantibodies are usually negative, helping differentiate from type 1 diabetes. C-peptide levels may be low or normal.</p>',
    treatment:
      '<p>Patients with KCNJ11 or ABCC8 mutations should be offered an early trial of sulfonylurea oral medication (glibenclamide/glyburide); approximately 90% can successfully switch from insulin, with improved neurological outcomes. The switch should be performed gradually under physician guidance with blood glucose monitoring to avoid hypoglycemia.</p><p>6q24 transient neonatal diabetes typically remits after months to years, but may relapse around puberty. INS mutation patients usually require lifelong insulin. GCK mutation patients often need only small doses of insulin or dietary management. Nutritional support and symptomatic care are also important.</p>',
    longTermCare:
      '<p>Long-term follow-up includes: regular monitoring of blood glucose, HbA1c, growth, and neurodevelopmental status; KCNJ11/ABCC8 patients need assessment of long-term sulfonylurea efficacy and dose adjustments; transient NDM patients in remission need intensified monitoring around puberty for relapse.</p><p>Home management: learn blood glucose monitoring and hypoglycemia management; feed appropriately to avoid glucose fluctuations; carry a disease information card and inform healthcare providers of the diagnosis; genetic counseling helps families understand recurrence risk and prenatal diagnostic options.</p>',
    fertilityOrFamily:
      '<p>Inheritance patterns vary by causative gene. KCNJ11, ABCC8, and INS mutations are typically autosomal dominant with a 50% transmission risk; 6q24 transient NDM follows imprinted inheritance with recurrence risk depending on parental origin. De novo mutations account for a substantial proportion of cases.</p><p>Prenatal diagnosis is available through genetic testing. Preimplantation genetic testing (PGT) can be used in high-risk families. Genetic testing of the proband is very important for parental recurrence risk assessment.</p>',
    emergencySigns:
      '<p>Seek immediate care for: severe dehydration with lethargy, deep rapid breathing (ketoacidosis), persistent hyperglycemia (>20 mmol/L) with somnolence, frequent hypoglycemic episodes, seizures, or altered consciousness.</p><p>For hypoglycemia, give oral sugary fluids while arranging transport to the hospital. Ketoacidosis requires emergency fluid resuscitation and insulin therapy.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Permanent Neonatal Diabetes Mellitus',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1447/',
    },
    {
      name: 'NCBI StatPearls: Neonatal Diabetes',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK570620/',
    },
    {
      name: 'DiabetesGenes.org (University of Exeter)',
      type: 'review',
      url: 'https://www.diabetesgenes.org/',
    },
  ],
  symptoms:
    '<p>Diabetes within the first 6 months with polyuria, polydipsia, poor weight gain or weight loss, dehydration, and feeding difficulties. Some cases associated with neurological developmental abnormalities.</p>',
  diagnosis:
    '<p>Hyperglycemia before 6 months of age with genetic testing confirmation. Common genes include KCNJ11, ABCC8, INS, 6q24, and GCK. Islet autoantibodies are usually negative.</p>',
  treatment:
    '<p>KCNJ11/ABCC8 mutations can switch to sulfonylurea tablets in ~90% of patients; other types usually require insulin. Transient NDM may remit spontaneously.</p>',
  prognosis:
    '<p>KCNJ11/ABCC8-related patients have excellent prognosis with sulfonylurea therapy. Transient NDM may relapse around puberty. Early genetic testing is key.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1447/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3526,
    name: 'neonatal-diabetes-mellitus-journey.png',
    url: '/images/diseases/neonatal-diabetes-mellitus-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric', 'treatable'],
};

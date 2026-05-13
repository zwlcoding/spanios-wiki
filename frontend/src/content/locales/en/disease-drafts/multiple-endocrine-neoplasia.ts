import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleEndocrineNeoplasia: DiseaseDraft = {
  ...entity(2051, 'disease-multiple-endocrine-neoplasia'),
  name: 'Multiple endocrine neoplasia',
  nameEn: 'Multiple endocrine neoplasia',
  alias:
    'MEN; multiple endocrine neoplasia syndrome; China Second Rare Disease Catalog item 51',
  slug: 'multiple-endocrine-neoplasia',
  oneSentence:
    'Multiple endocrine neoplasia is a group of inherited endocrine tumor syndromes in which one person can develop tumors or overgrowth in two or more hormone-producing glands.',
  plainName:
    'An inherited condition that can cause repeated tumors in endocrine glands',
  prevalence:
    "Included in China's second rare disease catalog; MEN1 and MEN2 are each estimated internationally at roughly tens of thousands of people per case, while MEN4 is rarer.",
  quickLook: {
    whatItIs:
      'MEN includes MEN1, MEN2, and MEN4. MEN1 often involves parathyroid, pituitary, pancreatic, or gastrointestinal neuroendocrine tumors. MEN2 is linked to medullary thyroid carcinoma, pheochromocytoma, and sometimes parathyroid disease.',
    whoToSeeFirst:
      'Start with endocrinology, endocrine surgery, or a hereditary cancer genetics clinic when multiple endocrine tumors, high calcium, medullary thyroid cancer, or pheochromocytoma is found.',
    isGenetic:
      'MEN1 is usually related to MEN1, MEN2 to RET, and MEN4 to CDKN1B. These conditions are usually autosomal dominant.',
    hasTreatment:
      'Care is long-term: genotype-guided screening, hormone control, surgery or medicines for tumors, and family testing, rather than a single one-time operation.',
    commonDelayReason:
      'Kidney stones, ulcers, low blood sugar, thyroid nodules, or high blood pressure may be treated separately unless clinicians connect the endocrine pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'Primary hyperparathyroidism, high calcium, recurrent kidney stones, or osteoporosis at a young age.',
      'Pituitary tumor, pancreatic or gastrointestinal neuroendocrine tumor, medullary thyroid carcinoma, pheochromocytoma, or multiple endocrine nodules in one person.',
      'Relatives with medullary thyroid cancer, pheochromocytoma, high calcium, pituitary tumor, pancreatic neuroendocrine tumor, or early endocrine surgery.',
      'A known familial RET variant should prompt early genetic counseling, including for children.',
    ],
    commonWrongTurns: [
      'Treating one gland tumor without asking about family history or screening other endocrine organs.',
      'Proceeding to surgery before pheochromocytoma is excluded or controlled.',
      'Known familial pathogenic variant but relatives do not receive targeted testing or age-appropriate surveillance.',
    ],
    firstDepartments: [
      'Endocrinology',
      'Endocrine surgery',
      'Medical genetics or hereditary cancer clinic',
      'Nuclear medicine or oncology multidisciplinary clinic',
    ],
    diagnosisChecklist: [
      'Collect endocrine labs: calcium, parathyroid hormone, calcitonin, catecholamine metabolites, prolactin, gastrin, insulin, and related tests.',
      'Bring thyroid, parathyroid, pituitary, pancreatic, adrenal, and gastrointestinal imaging plus pathology reports.',
      'Prepare a three-generation family tree with tumors, endocrine surgeries, kidney stones, hypertensive crises, and ages at death.',
      'Bring original genetic reports and variant classification if testing has been done.',
    ],
    testsToAskAbout: [
      'MEN1, RET, CDKN1B, and related genetic testing with family cascade testing.',
      'MEN1 surveillance: calcium/PTH, pituitary hormones, pancreatic and gastrointestinal neuroendocrine markers, and imaging.',
      'MEN2 surveillance: calcitonin, CEA, thyroid evaluation, pheochromocytoma screening, and parathyroid evaluation.',
      'Whether pheochromocytoma must be excluded or controlled before any operation.',
    ],
    questionsForDoctor: [
      'Does my pattern fit MEN1, MEN2, or MEN4, and is the evidence clinical or genetic?',
      'Which glands are affected now, and which need regular screening from this point?',
      'If a RET variant is present, how does it affect timing of thyroid surgery or preventive management?',
      'At what age should relatives start testing and surveillance?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MEN symptoms depend on the type and affected glands. MEN1 often causes primary hyperparathyroidism with high calcium, kidney stones, bone loss, fatigue, nausea, or constipation; pituitary tumors can cause headache, vision field problems, menstrual or sexual function changes; pancreatic or gastrointestinal neuroendocrine tumors can cause low blood sugar, severe ulcers, or diarrhea.</p><p>MEN2 centers on medullary thyroid carcinoma risk and may include pheochromocytoma with attacks of high blood pressure, headache, palpitations, and sweating. MEN2A can include parathyroid disease. MEN2B may include mucosal neuromas, a characteristic body habitus, and early aggressive medullary thyroid cancer.</p>',
    diagnosis:
      '<p>Diagnosis integrates tumor pattern, hormone results, imaging, pathology, and family history. Two or more MEN-related endocrine tumors in one person, or one related tumor plus a clear family history, should prompt MEN evaluation.</p><p>Genetic testing is central for classification and family screening. MEN1, RET, and CDKN1B correspond to the major types. The specific RET variant can affect medullary thyroid cancer risk and timing of thyroid surgery. People with a confirmed pathogenic variant need surveillance even before symptoms appear.</p>',
    treatment:
      '<p>Treatment is prioritized by type and risk. In MEN2, pheochromocytoma must be recognized and managed before other surgery to reduce anesthesia risk; RET-related medullary thyroid carcinoma may require early or preventive thyroid surgery. MEN1-related parathyroid, pituitary, and pancreatic or gastrointestinal neuroendocrine tumors may be treated with surgery, medicines, endoscopic or interventional care, nuclear medicine, or systemic oncology therapy.</p><p>Because tumors can be multifocal, recur, or appear years later, care aims to control hormone excess, reduce malignant risk, preserve organ function, and prevent complications.</p>',
    longTermCare:
      '<p>Long-term follow-up involves endocrinology, surgery, genetics, oncology, imaging, and nuclear medicine. Surveillance depends on genotype and prior tumors and may include hormone and tumor markers, neck ultrasound, pituitary MRI, and pancreatic, gastrointestinal, or adrenal imaging.</p><p>Keep genetic reports, operative notes, pathology, and hormone trends. Before surgery, pregnancy, or invasive procedures, disclose the MEN diagnosis and whether pheochromocytoma risk has been assessed.</p>',
    fertilityOrFamily:
      '<p>MEN is usually autosomal dominant, so a carrier often has a 50% chance of passing the pathogenic variant to each child. First-degree relatives should be offered genetic counseling and targeted testing; childhood screening depends on the gene and family variant.</p>',
    emergencySigns:
      '<p>Severe episodic headache, palpitations, sweating, and very high blood pressure may signal pheochromocytoma crisis. Severe hypoglycemia, confusion, persistent vomiting with dehydration, severe high-calcium symptoms, or post-surgical tingling or breathing difficulty needs urgent care with the MEN history disclosed.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Multiple endocrine neoplasia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/multiple-endocrine-neoplasia/',
    },
    {
      name: 'NIDDK: Multiple Endocrine Neoplasia Type 1',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/multiple-endocrine-neoplasia-type-1',
    },
  ],
  symptoms:
    '<p>Features can include high calcium, kidney stones, pituitary hormone problems, pancreatic or gastrointestinal neuroendocrine tumor symptoms, medullary thyroid carcinoma, and pheochromocytoma-related blood pressure attacks.</p>',
  diagnosis:
    '<p>Diagnosis combines the endocrine tumor pattern, hormone and imaging tests, pathology, family history, and genetic testing such as MEN1, RET, and CDKN1B.</p>',
  treatment:
    '<p>Care includes surveillance, surgery, hormone and tumor medicines, nuclear medicine or systemic therapy; in MEN2, pheochromocytoma risk must be addressed before surgery.</p>',
  prognosis:
    '<p>Outlook depends on MEN type, malignant potential, age at detection, and surveillance quality. Genotyping and family screening can reduce preventable risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 405,
    name: 'multiple-endocrine-neoplasia-journey.png',
    url: '/images/diseases/multiple-endocrine-neoplasia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

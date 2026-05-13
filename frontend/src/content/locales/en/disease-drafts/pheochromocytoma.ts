import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePheochromocytoma: DiseaseDraft = {
  ...entity(2060, 'disease-pheochromocytoma'),
  name: 'Pheochromocytoma',
  nameEn: 'Pheochromocytoma',
  alias:
    'PCC; pheochromocytoma/paraganglioma; PPGL; China Second Rare Disease Catalog item 60',
  slug: 'pheochromocytoma',
  oneSentence:
    'Pheochromocytoma is a neuroendocrine tumor of adrenal medulla chromaffin cells that can release catecholamines and cause episodic or sustained hypertension, palpitations, headache, and sweating.',
  plainName:
    'An endocrine tumor that can suddenly release blood-pressure hormones',
  prevalence:
    "Included in China's second rare disease catalog; it is uncommon among people with hypertension, but important because it can cause hypertensive crisis, arrhythmia, and anesthesia risk.",
  quickLook: {
    whatItIs:
      'Pheochromocytoma arises in the adrenal gland; similar tumors outside the adrenal are paragangliomas. Together they are often called PPGL, and catecholamine excess is the central problem.',
    whoToSeeFirst:
      'Episodic hypertension, headache, palpitations, sweating, or an adrenal incidentaloma should start with endocrinology. Confirmed cases need endocrine, surgery, anesthesia, and genetics coordination.',
    isGenetic:
      'PPGL has one of the higher hereditary fractions among tumors. Genes can include RET, VHL, NF1, SDHB, SDHD, and others, so many patients should discuss genetic testing.',
    hasTreatment:
      'Surgery is central when feasible, but preoperative alpha blockade, volume preparation, and heart-rate planning are essential. Metastatic or unresectable disease may need nuclear medicine, targeted therapy, chemotherapy, or trials.',
    commonDelayReason:
      'Symptoms can resemble anxiety, panic attacks, hyperthyroidism, migraine, or ordinary hypertension. Surgery, biopsy, or certain drugs without preparation can trigger crisis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated attacks of headache, palpitations, sweating, pallor, or trembling with sudden high blood pressure.',
      'Young-onset hypertension, resistant hypertension, fluctuating blood pressure, or orthostatic hypotension.',
      'An adrenal mass found incidentally, especially with hypertension, arrhythmia, or glucose abnormalities.',
      'Family history of PPGL, medullary thyroid cancer, VHL, NF1, or SDHx-related tumors.',
    ],
    commonWrongTurns: [
      'Treating as anxiety or ordinary hypertension for years without plasma or urine metanephrines.',
      'Biopsy or surgery for an adrenal mass before pheochromocytoma is excluded.',
      'Using beta-blocker alone for palpitations before alpha blockade, which can worsen hypertensive crisis.',
    ],
    firstDepartments: [
      'Endocrinology',
      'Urology or adrenal surgery',
      'Genetic counseling clinic',
      'Emergency department for hypertensive crisis',
    ],
    diagnosisChecklist: [
      'Record attack timing, blood pressure and heart rate, headache, palpitations, sweating, triggers, duration, and medication response.',
      'Bring adrenal CT/MRI, ultrasound, screening reports, and all blood pressure, antidepressant, stimulant, or decongestant medicines.',
      'Prepare family history of PPGL, medullary thyroid cancer, kidney cancer, hemangioblastoma, NF1 signs, or related tumors.',
      'If biochemical testing was done, note posture, medication interference, and reference ranges.',
    ],
    testsToAskAbout: [
      'Plasma free metanephrines or 24-hour urine fractionated metanephrines.',
      'Adrenal CT/MRI and, when needed, functional imaging such as MIBG or PET/CT for localization and staging.',
      'Preoperative alpha blockade, salt and fluid preparation, cardiac assessment, and anesthesia planning.',
      'Genetic testing panels including RET, VHL, NF1, SDHB, SDHD, SDHC, SDHA, MAX, TMEM127, and related genes.',
    ],
    questionsForDoctor: [
      'Is this adrenal pheochromocytoma or paraganglioma, and are there signs of metastatic risk?',
      'How long do I need alpha blockade before surgery, and are blood pressure, heart rate, and volume ready?',
      'Which medicines, anesthesia, tests, or biopsy should be avoided until preparation is complete?',
      'Do I need genetic testing, should relatives be screened, and how often are metanephrines and imaging checked after surgery?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Typical attacks include headache, palpitations, sweating, and high blood pressure, sometimes with pallor, trembling, anxiety-like feelings, chest pain, nausea, weight loss, or high blood sugar. Blood pressure may be persistently high or episodic.</p><p>Attacks can be triggered by surgery, anesthesia, childbirth, trauma, some medicines, exercise, or pressure on the tumor. Severe cases can cause hypertensive crisis, arrhythmia, cardiomyopathy, stroke, pulmonary edema, or shock.</p>',
    diagnosis:
      '<p>First-line screening uses plasma free metanephrines or 24-hour urine fractionated metanephrines. Posture, stress, medications, and poor sleep can affect results, so mild elevations need expert interpretation and sometimes repeat or additional testing.</p><p>After biochemical evidence, CT or MRI localizes the tumor. Multifocal, extra-adrenal, recurrent, metastatic, or hereditary-risk cases may use MIBG, PET/CT, or other functional imaging. PPGL should not be biopsied before exclusion and preparation.</p>',
    treatment:
      '<p>Surgery is the key treatment for resectable tumors, but preparation determines safety. Alpha-adrenergic blockade is usually started first, with gradual blood pressure control and volume expansion; beta blockade for tachycardia is considered only after adequate alpha blockade.</p><p>Surgery should be done by experienced adrenal and anesthesia teams. Metastatic, recurrent, or unresectable disease may be managed with observation, radionuclide therapy, MIBG therapy, targeted therapy, chemotherapy, ablation, or clinical trials depending on growth and receptor expression. Long-term follow-up is needed because recurrence or late metastasis can occur.</p>',
    longTermCare:
      '<p>After surgery, blood pressure, symptoms, and metanephrines are checked to confirm biochemical response. Hereditary, extra-adrenal, large, SDHB-related, or metastatic cases have higher recurrence risk and usually need longer surveillance.</p><p>Patients should keep written documentation of the diagnosis and preoperative preparation needs. Future surgery, pregnancy, childbirth, or catecholamine-affecting medicines should be discussed with clinicians.</p>',
    fertilityOrFamily:
      '<p>Because PPGL has a high hereditary fraction, genetic counseling is recommended for many patients. If a pathogenic variant is found, relatives can have targeted screening and gene-specific blood pressure, biochemical, imaging, and syndrome surveillance. PPGL in pregnancy requires high-risk obstetric, endocrine, anesthesia, and surgical coordination.</p>',
    emergencySigns:
      '<p>Very high blood pressure with severe headache, chest pain, shortness of breath, neurologic symptoms, confusion, severe palpitations, or fainting needs emergency care with suspected or confirmed pheochromocytoma disclosed. Avoid adrenal biopsy or stimulating procedures until PPGL is excluded or prepared.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Pheochromocytoma',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/pheochromocytoma',
    },
    {
      name: 'National Cancer Institute: Pheochromocytoma and Paraganglioma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/pheochromocytoma/patient/pheochromocytoma-treatment-pdq',
    },
  ],
  symptoms:
    '<p>Features can include episodic or sustained hypertension, headache, palpitations, sweating, pallor, trembling, chest pain, anxiety-like spells, orthostatic hypotension, high glucose, or hypertensive crisis.</p>',
  diagnosis:
    '<p>Diagnosis starts with plasma free or 24-hour urine fractionated metanephrines, followed by CT/MRI and functional imaging when needed for localization, staging, and hereditary-risk assessment.</p>',
  treatment:
    '<p>Resectable disease is treated mainly with surgery after adequate alpha blockade and volume preparation; metastatic or unresectable disease may use nuclear medicine therapy, targeted therapy, chemotherapy, ablation, observation, or trials.</p>',
  prognosis:
    '<p>Many localized tumors improve after surgery, but hereditary, extra-adrenal, large, SDHB-related, or metastatic cases need long-term recurrence and metastasis monitoring.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 414,
    name: 'pheochromocytoma-journey.png',
    url: '/images/diseases/pheochromocytoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseVonHippelLindauSyndrome: DiseaseDraft = {
  ...entity(2083, 'disease-von-hippel-lindau-syndrome'),
  name: 'Von Hippel-Lindau syndrome',
  nameEn: 'Von Hippel-Lindau syndrome',
  alias: 'VHL disease; China Second Rare Disease Catalog item 83',
  slug: 'von-hippel-lindau-syndrome',
  oneSentence:
    'Von Hippel-Lindau syndrome is an autosomal dominant tumor predisposition syndrome that can cause cysts and tumors in the retina, brain and spinal cord, kidneys, adrenal glands, pancreas, and inner ear.',
  plainName:
    'An inherited syndrome where one gene variant raises tumor risk across several organs',
  prevalence:
    "Included in China's second rare disease catalog; NCI patient materials commonly cite an estimate of about 1 in 36,000 people, with wide variation even within families.",
  quickLook: {
    whatItIs:
      'The VHL gene acts as a tumor brake. When it does not work, people can develop retinal or CNS hemangioblastomas, clear cell kidney cancer, pheochromocytoma, pancreatic cysts or neuroendocrine tumors, and endolymphatic sac tumors. Planned surveillance is the main protection.',
    whoToSeeFirst:
      'Retinal angioma, CNS hemangioblastoma, young-onset or bilateral/multifocal kidney cancer, pheochromocytoma, multiple pancreatic cysts, or family history should prompt genetics, hereditary cancer, or VHL multidisciplinary care.',
    isGenetic:
      'VHL is inherited in an autosomal dominant pattern. First-degree relatives should be offered genetic counseling and VHL testing; asymptomatic carriers still need age-based surveillance.',
    hasTreatment:
      'The inherited risk cannot be removed, but surveillance can find small tumors early. Treatment may include surgery, laser, cryotherapy, ablation, radiation, or HIF-2 alpha inhibitor therapy depending on tumor type and access.',
    commonDelayReason:
      'Many lesions are silent early, and one tumor may be treated as sporadic. Without family history and VHL testing, other organ screening may be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Young-onset, bilateral, or multifocal kidney cancer/cysts, or combined brain, retina, pancreas, and adrenal lesions.',
      'Vision change, retinal angioma, repeated headaches, imbalance, limb weakness, or spinal cord symptoms.',
      'Hypertension, palpitations, sweating suggesting pheochromocytoma, or a relative with VHL.',
    ],
    commonWrongTurns: [
      'Treating one organ or one episode without connecting the long-term pattern, family history, and prior results.',
      'Watching common-disease explanations for too long without referral to the right specialty or rare disease clinic.',
      'Not keeping imaging, pathology, genetic, treatment, and follow-up records, leading to repeated workups and delays.',
    ],
    firstDepartments: [
      'Medical genetics',
      'Hereditary cancer/rare tumor clinic',
      'Retina specialist',
      'Neurosurgery, urology, or endocrinology as needed',
    ],
    diagnosisChecklist: [
      'Bring retina exams, brain/spine MRI, abdominal MRI/CT, adrenal hormone tests, prior operations, and pathology.',
      'Prepare personal and three-generation family tumor history, age at diagnosis, and bilateral or multifocal lesions.',
      'Bring VHL genetic testing; if not done, ask about germline testing.',
    ],
    testsToAskAbout: [
      'Whether VHL germline testing is needed and how relatives should have predictive testing.',
      'Starting age and interval for retina exams, brain/spine MRI, abdominal MRI, hearing, and pheochromocytoma screening.',
      'What size, growth, or symptoms trigger treatment for each lesion.',
    ],
    questionsForDoctor: [
      'Which organs are involved now, and what are the top risks this year?',
      'How should relative testing, childhood surveillance, and reproductive planning be handled?',
      'How will kidney lesion treatment balance cancer control and kidney preservation?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>VHL can cause retinal hemangioblastomas with vision loss or bleeding, CNS hemangioblastomas with headache, vomiting, imbalance, weakness, or spinal symptoms, and kidney cysts or clear cell kidney cancer.</p><p>Other features include pheochromocytoma causing episodic hypertension, palpitations, headache, and sweating; pancreatic cysts or neuroendocrine tumors; and endolymphatic sac tumors causing hearing loss, tinnitus, or vertigo. Expression varies widely.</p>',
    diagnosis:
      '<p>Diagnosis combines typical lesions, family history, and VHL germline genetic testing. Even one related tumor should prompt genetics when onset is young, multifocal, bilateral, or familial.</p><p>Confirmed patients need baseline and continuing surveillance with retina examination, brain and spine MRI, abdominal MRI/CT, adrenal biochemical testing, and hearing/inner ear assessment.</p>',
    treatment:
      '<p>Treatment is based on timing: observe until intervention protects function or cancer control. Options include laser or cryotherapy, microsurgery, ablation, radiation, nephron-sparing surgery, or targeted medicine depending on lesion type.</p><p>For VHL-related kidney cancer and selected non-surgical lesions, multidisciplinary teams may evaluate HIF-2 alpha inhibitor therapy such as belzutifan depending on indication and access.</p>',
    longTermCare:
      '<p>VHL management is lifelong surveillance, not symptom-only care. Follow-up should track location, size, growth, prior treatment, and function impact of each lesion.</p><p>A consistent genetics and tumor team helps keep organ-specific care coordinated.</p>',
    fertilityOrFamily:
      '<p>VHL is autosomal dominant. Children of an affected person have inheritance risk, so genetic counseling can address relative testing, childhood surveillance, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Urgent care is needed for sudden vision loss, severe headache or vomiting, imbalance or weakness, spinal cord symptoms, severe hypertension with palpitations, sweating or chest pain, visible blood in urine, or acute abdominal pain.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Von Hippel-Lindau disease',
      type: 'official',
      url: 'https://www.cancer.gov/types/brain/patient/vhl-pdq',
    },
  ],
  symptoms:
    '<p>Features include retinal and CNS hemangioblastomas, kidney cysts or clear cell kidney cancer, pheochromocytoma, pancreatic lesions, hearing loss, or vertigo; early disease may be silent.</p>',
  diagnosis:
    '<p>Diagnosis uses multisystem lesions, family history, and VHL germline testing, followed by retina, brain/spine, abdominal, adrenal, and hearing surveillance.</p>',
  treatment:
    '<p>Treatment uses observation, surgery, laser/cryotherapy, ablation, radiation, or targeted therapy at the right time to preserve organ function.</p>',
  prognosis:
    '<p>Regular surveillance can find lesions early and improve outcomes; kidney cancer, CNS tumors, and pheochromocytoma require lifelong management.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 437,
    name: 'von-hippel-lindau-syndrome-journey.png',
    url: '/images/diseases/von-hippel-lindau-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

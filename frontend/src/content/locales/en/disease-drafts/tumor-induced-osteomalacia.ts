import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTumorInducedOsteomalacia: DiseaseDraft = {
  ...entity(2082, 'disease-tumor-induced-osteomalacia'),
  name: 'Tumor-induced osteomalacia',
  nameEn: 'Tumor-induced osteomalacia',
  alias:
    'TIO; oncogenic osteomalacia; China Second Rare Disease Catalog item 82',
  slug: 'tumor-induced-osteomalacia',
  oneSentence:
    'Tumor-induced osteomalacia is a rare acquired phosphate-wasting bone disease, usually caused by a small hidden tumor producing excess FGF23 and leading to bone pain, muscle weakness, and fractures.',
  plainName:
    'A hidden small tumor makes the body lose phosphate and softens bones',
  prevalence:
    "Included in China's second rare disease catalog; TIO is very rare, and the causative tumor is often small and difficult to locate, so diagnosis can be delayed for years.",
  quickLook: {
    whatItIs:
      'Excess FGF23 makes the kidneys waste phosphate. Long-term low phosphate prevents normal bone mineralization, causing back, rib, or leg pain, weakness, difficulty walking, and pseudofractures.',
    whoToSeeFirst:
      'Adults with new hypophosphatemia, high alkaline phosphatase, bone pain, or multiple fractures should start with endocrinology or a bone metabolism clinic, then involve imaging, nuclear medicine, orthopedic oncology, surgery, and pathology if a tumor is suspected.',
    isGenetic:
      'TIO is usually acquired rather than inherited, so relatives are not routinely screened as for a genetic disorder.',
    hasTreatment:
      'Finding and completely removing the tumor is the most effective treatment. If the tumor is not found, cannot be removed, or recurs, phosphate, active vitamin D, or burosumab may be considered with careful kidney and mineral monitoring.',
    commonDelayReason:
      'Bone pain may be labeled osteoporosis, spine disease, rheumatic pain, or stress. Without phosphate, urine phosphate, FGF23, and whole-body imaging, the cause can be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Adult-onset widespread bone pain, back or rib pain, difficulty walking, proximal muscle weakness, height loss, or multiple low-trauma fractures.',
      'Low serum phosphate, renal phosphate wasting, high alkaline phosphatase, and normal or near-normal calcium.',
      'A small lesion found on MRI, CT, bone scan, PET, or somatostatin receptor imaging, or phosphate improvement after removal.',
    ],
    commonWrongTurns: [
      'Treating only as ordinary osteoporosis or calcium deficiency without evaluating phosphate wasting.',
      'Seeing orthopedics, pain, and rheumatology repeatedly without connecting phosphate, urine phosphate, FGF23, and osteomalacia.',
      'Finding a possible lesion but not confirming localization and pathology through a multidisciplinary plan.',
    ],
    firstDepartments: [
      'Endocrinology/bone metabolism',
      'Orthopedics or orthopedic oncology',
      'Nuclear medicine/imaging',
      'Rare disease multidisciplinary clinic',
    ],
    diagnosisChecklist: [
      'Record pain sites, fractures, height loss, weakness, walking ability, and response to calcium or osteoporosis medicines.',
      'Bring phosphate, calcium, ALP, PTH, 25(OH)D, 1,25(OH)2D, kidney function, urine phosphate, TmP/GFR, and FGF23 results.',
      'Bring bone density, X-ray/CT/MRI, bone scan, PET, or somatostatin receptor imaging.',
    ],
    testsToAskAbout: [
      'Whether low phosphate is due to renal phosphate wasting and whether TmP/GFR and FGF23 support TIO.',
      'Which tumor localization studies should be used next: whole-body MRI/CT, bone scan, PET-CT, or somatostatin receptor imaging.',
      'If the tumor cannot be found or removed, what are the targets and risks of phosphate, active vitamin D, or burosumab.',
    ],
    questionsForDoctor: [
      'Does my testing prove FGF23-mediated osteomalacia, and what genetic or drug causes still need exclusion?',
      'Can the suspected tumor be completely removed, and when will phosphate and FGF23 be rechecked?',
      'How long will bone pain, fractures, and weakness take to recover, and what rehabilitation is safe?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>TIO often causes gradually worsening leg, back, rib, or generalized bone pain, proximal muscle weakness, difficulty rising or climbing stairs, unsteady gait, height loss, pseudofractures, or multiple low-trauma fractures. Long delays can severely limit mobility and daily life.</p><p>Laboratory findings commonly include low serum phosphate, increased urine phosphate wasting, and high alkaline phosphatase, while calcium is often normal. The causative tumor is usually small and slow-growing.</p>',
    diagnosis:
      '<p>Diagnosis confirms that hypophosphatemia is caused by renal phosphate wasting and evaluates FGF23, TmP/GFR, mineral metabolism, vitamin D, PTH, and kidney function. Imaging may show osteomalacia, pseudofractures, or multiple abnormal bone sites.</p><p>Locating the tumor may require whole-body MRI/CT, bone scan, PET-CT, or somatostatin receptor imaging, with pathology after surgery. Clinicians also exclude hereditary hypophosphatemia, drug-induced phosphate wasting, Fanconi syndrome, and other metabolic bone disorders.</p>',
    treatment:
      '<p>Complete tumor removal is first-line and often rapidly improves phosphate and FGF23, although bone recovery takes longer. If the tumor cannot be found, removed, or controlled, phosphate and active vitamin D may be used with monitoring for secondary hyperparathyroidism, nephrocalcinosis, and gastrointestinal effects.</p><p>Some patients with unresectable or unlocalized disease may be evaluated for anti-FGF23 therapy such as burosumab, depending on diagnostic certainty, indications, and access.</p>',
    longTermCare:
      '<p>Follow-up tracks phosphate, urine phosphate, FGF23, ALP, PTH, vitamin D, kidney function, renal ultrasound, fracture healing, and recurrence imaging. A drop in phosphate after surgery may suggest residual or recurrent disease.</p><p>Rehabilitation focuses on pain control, strength, gait, and fall prevention while avoiding excessive loading before bone strength recovers.</p>',
    fertilityOrFamily:
      '<p>TIO is usually not inherited. Early onset or a family pattern of low phosphate or rickets should prompt evaluation for inherited hypophosphatemic disorders and genetic counseling.</p>',
    emergencySigns:
      '<p>Urgent care is needed for sudden inability to stand or walk, suspected fracture, severe chest or back pain, weakness affecting breathing, post-surgical fever or wound problems, or electrolyte-related symptoms such as seizures or arrhythmia during treatment.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Cleveland Clinic: Tumor-induced osteomalacia',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/tumor-induced-osteomalacia',
    },
    {
      name: 'NIH GARD: Tumor-induced osteomalacia',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/12936/tumor-induced-osteomalacia',
    },
  ],
  symptoms:
    '<p>Common features include generalized bone pain, back or rib pain, weakness, difficulty walking, pseudofractures or low-trauma fractures, low phosphate, phosphate wasting, and high ALP.</p>',
  diagnosis:
    '<p>Diagnosis confirms FGF23-mediated renal phosphate wasting with blood and urine phosphate, TmP/GFR, FGF23, bone metabolism tests, and whole-body imaging to localize a small tumor.</p>',
  treatment:
    '<p>Complete tumor removal is preferred; unlocalized or unresectable disease may need phosphate, active vitamin D, or burosumab with kidney and mineral monitoring.</p>',
  prognosis:
    '<p>Complete resection often leads to major improvement; unlocalized, incompletely removed, or recurrent tumors can cause persistent low phosphate, pain, and fractures.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 435,
    name: 'tumor-induced-osteomalacia-journey.png',
    url: '/images/diseases/tumor-induced-osteomalacia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine'],
};

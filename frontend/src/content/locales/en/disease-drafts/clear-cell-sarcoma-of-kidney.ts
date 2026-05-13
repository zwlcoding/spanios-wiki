import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseClearCellSarcomaOfKidney: DiseaseDraft = {
  ...entity(2014, 'disease-clear-cell-sarcoma-of-kidney'),
  name: 'Clear cell sarcoma of kidney',
  nameEn: 'Clear cell sarcoma of kidney',
  alias:
    'CCSK, pediatric clear cell sarcoma of the kidney, China Second Rare Disease Catalog item 14',
  slug: 'clear-cell-sarcoma-of-kidney',
  oneSentence:
    'Clear cell sarcoma of kidney is a rare malignant kidney tumor of childhood, most often seen before age 3, that requires pathology confirmation and treatment by a pediatric oncology team.',
  plainName:
    'A rare childhood kidney cancer that needs expert pathology and pediatric oncology care',
  prevalence:
    "Included in China's second rare disease catalog; NCI PDQ states that it accounts for about 5% of primary renal malignancies in children and about 20 new U.S. cases per year, most often before age 3.",
  quickLook: {
    whatItIs:
      'Clear cell sarcoma of kidney is not a subtype of Wilms tumor. It is a distinct childhood kidney tumor that can look similar clinically but has different relapse and spread patterns, making pathology and staging essential.',
    whoToSeeFirst:
      'A child with an abdominal mass, swelling, pain, blood in urine, or imaging showing a kidney tumor should be evaluated promptly by a pediatric oncology center, pediatric urology, or pediatric surgery.',
    isGenetic:
      'Most cases are not typical inherited family cancer syndromes. Molecular testing may be used for pathology confirmation, classification, or research decisions when the tumor team recommends it.',
    hasTreatment:
      'Treatment usually includes surgery and chemotherapy, and some stages also require radiation therapy. The exact plan depends on stage, surgery, pathology, and the treating center protocol.',
    commonDelayReason:
      'Early symptoms may be nonspecific and the tumor can be mistaken for Wilms tumor. The care pathway depends on expert pathology review, complete staging, and pediatric kidney tumor experience.',
  },
  patientJourney: {
    whenToSuspect: [
      'A child has an abdominal mass, swelling, or one side of the abdomen looks enlarged during bathing or examination.',
      'There is abdominal pain, blood in urine, anemia, fever, poor appetite, poor weight gain, or high blood pressure.',
      'Ultrasound, CT, or MRI shows a kidney tumor, especially in a young child.',
      'Wilms tumor treatment has been considered, but pathology suggests clear cell sarcoma of kidney or needs review.',
    ],
    commonWrongTurns: [
      'Watching an abdominal mass as constipation, gas, or common abdominal pain.',
      'Not completing imaging, surgery planning, and pathology review at a pediatric oncology center.',
      'Accepting a broad label of kidney tumor without confirming CCSK versus Wilms tumor or another pediatric renal tumor.',
      'Finishing treatment without a structured surveillance plan for recurrence sites and timing.',
    ],
    firstDepartments: [
      'Pediatric oncology',
      'Pediatric urology or pediatric surgery',
      'Pathology',
      'Radiation oncology',
    ],
    diagnosisChecklist: [
      'Bring abdominal ultrasound, contrast CT or MRI, chest imaging, laboratory results, and original imaging files.',
      'Keep surgery notes, pathology reports, immunohistochemistry, molecular testing, and pathology review materials.',
      'Record when symptoms began, mass changes, blood in urine, fever, pain, weight, and blood pressure.',
      'Track chemotherapy medicines, cycles, radiation, transfusions, infections, and treatment complications.',
    ],
    testsToAskAbout: [
      'Contrast abdominal CT or MRI to assess tumor extent, vessels, and lymph nodes.',
      'Chest imaging and, when clinically indicated, assessment for bone, brain, or other metastatic sites.',
      'Surgical pathology, immunohistochemistry, and selected molecular testing or expert pathology consultation.',
      'Complete staging, kidney function, CBC, liver and kidney chemistry, and treatment baseline tests.',
    ],
    questionsForDoctor: [
      'Has pathology confirmed CCSK, and should a pediatric renal tumor pathologist review it?',
      'What is the stage, and are lymph nodes, lung, bone, brain, or other sites involved?',
      'What surgery, chemotherapy, and radiation are planned, and what is the goal of each step?',
      'Which infection, kidney, heart, or long-term side effects should we watch for?',
      'What surveillance schedule and imaging sites are needed after treatment?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Clear cell sarcoma of kidney usually affects young children, especially those younger than 3 years. It may be found as an abdominal mass or swelling, and can also cause abdominal pain, blood in urine, fever, anemia, appetite or weight changes, or high blood pressure. Some tumors are found on examination or imaging.</p><p>These symptoms overlap with Wilms tumor and other childhood kidney tumors, so symptoms alone cannot distinguish them. Pathology and staging guide treatment.</p>',
    diagnosis:
      '<p>Diagnosis often starts when ultrasound, CT, or MRI identifies a kidney tumor, but confirmation requires pathology from surgery or biopsy tissue. Pathologists use tumor appearance, immunohistochemistry, and selected molecular tests to distinguish CCSK from Wilms tumor and other pediatric renal tumors.</p><p>Staging determines whether disease is limited to the kidney or involves lymph nodes or distant sites. CCSK can spread to the lungs and also requires attention to possible bone, brain, and soft tissue involvement when the oncology team indicates.</p>',
    treatment:
      '<p>Treatment should be planned by a multidisciplinary pediatric kidney tumor team and usually includes surgery and chemotherapy. NCI PDQ notes that, except for selected stage I patients with lymph node sampling, stages II through IV generally receive surgery, chemotherapy, and radiation therapy.</p><p>The plan is adjusted based on stage, lymph node sampling, completeness of surgery, pathology, and the child’s overall condition. Families should understand the treatment schedule, expected toxicities, and infection plan.</p>',
    longTermCare:
      '<p>Long-term care focuses on recurrence surveillance, kidney function, blood pressure, heart and hearing or other treatment-related late effects, growth, development, and psychosocial support. Imaging sites and frequency should follow the pediatric oncology center plan.</p><p>Keeping pathology slides, staging information, and complete treatment records is important for second opinions, relapse decisions, and survivorship care.</p>',
    fertilityOrFamily:
      '<p>Clear cell sarcoma of kidney is usually not a typical inherited tumor syndrome. Most families do not need genetic screening, but medical genetics may be considered if there are congenital anomalies, multiple childhood cancers in the family, or concern for a cancer predisposition syndrome.</p>',
    emergencySigns:
      '<p>During treatment, seek urgent care for fever, chills, lethargy, repeated vomiting, markedly reduced urine, severe abdominal pain, uncontrolled bleeding, breathing trouble, or infection signs after chemotherapy with low white blood cells. Tell the emergency team the child is receiving pediatric cancer treatment.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NCI PDQ: Wilms Tumor and Other Childhood Kidney Tumors Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/kidney/hp/wilms-treatment-pdq',
    },
  ],
  symptoms:
    '<p>Common clues include an abdominal mass or swelling in a child, abdominal pain, blood in urine, fever, anemia, appetite or weight changes, or high blood pressure.</p>',
  diagnosis:
    '<p>Imaging can detect and stage a kidney tumor, but confirmation depends on pathology, immunohistochemistry, and selected molecular testing or expert pathology review.</p>',
  treatment:
    '<p>Care is planned by a pediatric oncology team and usually includes surgery, chemotherapy, and, for some stages, radiation therapy plus structured surveillance.</p>',
  prognosis:
    '<p>Outcome depends on stage, complete treatment, and relapse risk. Expert pathology confirmation, full staging, and pediatric oncology center care reduce avoidable risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 368,
    name: 'clear-cell-sarcoma-of-kidney-journey.png',
    url: '/images/diseases/clear-cell-sarcoma-of-kidney-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

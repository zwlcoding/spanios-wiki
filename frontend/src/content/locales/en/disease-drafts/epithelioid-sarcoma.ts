import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseEpithelioidSarcoma: DiseaseDraft = {
  ...entity(2024, 'disease-epithelioid-sarcoma'),
  name: 'Epithelioid sarcoma',
  nameEn: 'Epithelioid sarcoma',
  alias:
    'ES, distal-type epithelioid sarcoma, proximal-type epithelioid sarcoma, INI1/SMARCB1-deficient soft tissue sarcoma, China Second Rare Disease Catalog item 24',
  slug: 'epithelioid-sarcoma',
  oneSentence:
    'Epithelioid sarcoma is a rare aggressive soft tissue sarcoma, often affecting teenagers and young adults, that may begin as a painless nodule or non-healing sore on the hand, forearm, foot, knee, or lower leg.',
  plainName:
    'A rare soft tissue sarcoma that can start as a small firm lump or sore on the hands, feet, or limbs',
  prevalence:
    "Included in China's second rare disease catalog; it is a rare soft tissue sarcoma, most often seen in adolescents and young to middle-aged adults, with incidence varying by registry.",
  quickLook: {
    whatItIs:
      'Epithelioid sarcoma can grow slowly but has risks of local recurrence, lymph node spread, and distant metastasis. It is often mistaken for infection, granuloma, cyst, or a chronic wound, so pathology is crucial.',
    whoToSeeFirst:
      'A painless but enlarging nodule, firm mass, or non-healing ulcer on the hand, foot, forearm, or lower leg should be evaluated by an orthopedic oncology or sarcoma team.',
    isGenetic:
      'It is usually not inherited. Many tumors show INI1/SMARCB1 loss at the tumor level, which helps pathology and treatment decisions.',
    hasTreatment:
      'Localized disease centers on complete surgery at a sarcoma center, often with radiation assessment. Unresectable or metastatic disease may use chemotherapy, targeted therapy such as tazemetostat, clinical trials, or palliative care.',
    commonDelayReason:
      'It can look like a chronic wound, wart, infection, rheumatoid nodule, or granuloma and may grow slowly without pain. Incision and drainage or wound care without biopsy delays diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'A small firm subcutaneous nodule on the finger, palm, forearm, foot, knee, or lower leg keeps enlarging.',
      'A skin sore does not heal or repeatedly breaks down despite antibiotics or wound care.',
      'The mass is painless or mildly painful, imaging suggests deep soft tissue involvement, or nearby lymph nodes enlarge.',
      'Pathology suggests epithelioid or sarcomatoid tumor, INI1 loss, or uncertain diagnosis.',
    ],
    commonWrongTurns: [
      'Treating it as infection, cyst, wart, foreign-body granuloma, or rheumatoid nodule for too long.',
      'Incision, drainage, or small excision without proper pathology and margin review.',
      'After diagnosis, not completing chest and lymph node staging or not referring to a sarcoma center.',
      'Focusing only on the primary lesion while missing recurrence, lymph node, or lung spread risk.',
    ],
    firstDepartments: [
      'Sarcoma center',
      'Orthopedic oncology',
      'Medical oncology',
      'Pathology',
    ],
    diagnosisChecklist: [
      'Record when the mass or sore began, growth speed, pain, ulceration, infection treatment, and surgeries.',
      'Bring MRI, CT, ultrasound, chest imaging, lymph node tests, and original images.',
      'Bring biopsy or surgery pathology, immunohistochemistry, INI1/SMARCB1, margins, and molecular tests.',
      'Summarize function impact, prior radiation or chemotherapy, medicines, and family cancer history.',
    ],
    testsToAskAbout: [
      'Core needle or incisional biopsy planned by the sarcoma team.',
      'MRI of the primary site, chest CT, lymph node ultrasound or biopsy, or PET/CT for staging.',
      'Pathology immunohistochemistry, including INI1/SMARCB1 expression when appropriate.',
      'For unresectable or metastatic disease, whether tazemetostat, chemotherapy, radiation, or clinical trials fit.',
    ],
    questionsForDoctor: [
      'Has a sarcoma pathologist confirmed the diagnosis, and is INI1 lost?',
      'Is disease localized, lymph node-positive, or metastatic?',
      'Can surgery preserve function and achieve clear margins, and is radiation needed?',
      'If it recurs or spreads, what targeted therapy, chemotherapy, or trial options exist?',
      'Which sites should be monitored and how often?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Epithelioid sarcoma often affects adolescents and young adults. Distal-type disease commonly appears on the hands, forearms, feet, knees, or lower legs as a slowly enlarging firm nodule, subcutaneous lump, or non-healing sore that may be painless.</p><p>Some patients have multiple nodules, ulceration, pain, or enlarged nearby lymph nodes. Proximal-type disease may occur in the trunk, perineum, or deep soft tissue and can be more aggressive.</p>',
    diagnosis:
      '<p>Diagnosis depends on imaging and pathology. MRI helps define local extent; chest CT and lymph node evaluation are used for staging. Biopsy should ideally be planned by the sarcoma team to avoid compromising later surgery.</p><p>Pathology needs immunohistochemistry and careful differential diagnosis, often including INI1/SMARCB1 loss. It can be confused with infectious granulomas, rheumatoid nodules, squamous cell carcinoma, melanoma, and other soft tissue sarcomas.</p>',
    treatment:
      '<p>Localized disease is treated with complete surgical removal and negative margins when possible, while preserving limb function. Radiation may be used before or after surgery depending on size, location, margins, and recurrence risk.</p><p>Metastatic, recurrent, or unresectable disease may be treated with chemotherapy, targeted therapy, radiation, and clinical trials. NCI drug information lists tazemetostat for selected patients with locally advanced or metastatic epithelioid sarcoma that cannot be removed by surgery.</p>',
    longTermCare:
      '<p>Follow-up includes examination of the primary site, local MRI or ultrasound when needed, chest imaging, and lymph node assessment. New lumps, sores, pain, cough, weight loss, or lymph node changes should be reported.</p>',
    fertilityOrFamily:
      '<p>Epithelioid sarcoma is usually not inherited. Because many patients are young, fertility preservation should be discussed before chemotherapy, radiation, or targeted therapy when relevant.</p>',
    emergencySigns:
      '<p>Seek urgent care for heavy bleeding from an ulcerated tumor, infection with fever, marked limb swelling or pain, shortness of breath, chest pain, serious infection during treatment, or severe medicine reactions.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Mayo Clinic: Epithelioid sarcoma diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diagnosis/dxc-20350146',
    },
    {
      name: 'NCI: Tazemetostat Hydrobromide',
      type: 'official',
      url: 'https://www.cancer.gov/about-cancer/treatment/drugs/tazemetostathydrobromide',
    },
  ],
  symptoms:
    '<p>It often appears as a slowly enlarging painless subcutaneous nodule, firm mass, or non-healing sore on the hands, feet, forearms, or lower legs, sometimes with lymph node enlargement.</p>',
  diagnosis:
    '<p>Diagnosis uses sarcoma-team-planned biopsy, pathology immunohistochemistry, MRI of the primary site, chest and lymph node staging, and INI1/SMARCB1 assessment when appropriate.</p>',
  treatment:
    '<p>Localized disease centers on complete surgery and selected radiation; recurrent, metastatic, or unresectable disease may use chemotherapy, tazemetostat, radiation, or clinical trials.</p>',
  prognosis:
    '<p>Outcome depends on location, size, margins, recurrence, and spread. Early sarcoma-center care, complete staging, and long-term follow-up are important.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 378,
    name: 'epithelioid-sarcoma-journey.png',
    url: '/images/diseases/epithelioid-sarcoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

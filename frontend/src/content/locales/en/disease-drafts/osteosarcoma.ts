import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseOsteosarcoma: DiseaseDraft = {
  ...entity(2057, 'disease-osteosarcoma'),
  name: 'Osteosarcoma',
  nameEn: 'Osteosarcoma',
  alias: 'Osteogenic sarcoma; China Second Rare Disease Catalog item 57',
  slug: 'osteosarcoma',
  oneSentence:
    'Osteosarcoma is a malignant bone tumor that makes abnormal bone-like tissue, often arising in adolescent long bones and usually requiring combined chemotherapy and surgery.',
  plainName:
    'A malignant bone tumor that often starts with persistent bone pain and swelling',
  prevalence:
    "Included in China's second rare disease catalog; it is uncommon overall, with a peak in adolescents and frequent involvement of long bones around the knee.",
  quickLook: {
    whatItIs:
      'Osteosarcoma is not a routine fracture or growing pain. It can invade nearby soft tissue and spread, especially to the lungs.',
    whoToSeeFirst:
      'Persistent worsening bone pain, night pain, swelling, or limited motion should be assessed by an orthopedic oncology, bone tumor, or pediatric/adolescent oncology team.',
    isGenetic:
      'Most cases are not inherited. Li-Fraumeni syndrome, hereditary retinoblastoma, Rothmund-Thomson syndrome, and other predisposition conditions can increase risk.',
    hasTreatment:
      'Standard care often includes preoperative chemotherapy, limb-salvage or amputation surgery, and postoperative chemotherapy. Lung metastasis surgery, radiation, or trials depend on stage and response.',
    commonDelayReason:
      'Early pain can be mistaken for sports injury, growing pains, arthritis, or post-fracture symptoms. Recurrent pain with swelling needs imaging, not only pain medicine and observation.',
  },
  patientJourney: {
    whenToSuspect: [
      'Bone pain lasts for weeks, worsens, is prominent at night, or does not improve with rest.',
      'Swelling, warmth, a mass, limited joint motion, or limp near the knee, shoulder, upper arm, or thigh.',
      'A fracture after minor trauma with imaging showing bone destruction, periosteal reaction, or soft tissue mass.',
      'Prior radiation or personal/family history suggesting hereditary retinoblastoma or TP53-related cancer risk.',
    ],
    commonWrongTurns: [
      'Treating adolescent night bone pain as growing pain or sports strain without repeat X-ray or MRI.',
      'Massage, heat, or unplanned biopsy before proper tumor imaging and surgical planning.',
      'Biopsy or excision outside a bone tumor center, with a biopsy tract that complicates limb-salvage surgery.',
    ],
    firstDepartments: [
      'Orthopedic oncology',
      'Pediatric or adolescent oncology',
      'Orthopedics',
      'Oncology multidisciplinary clinic',
    ],
    diagnosisChecklist: [
      'Record pain onset, night pain, pain medicine response, motion limitation, swelling, and trauma history.',
      'Bring X-ray, MRI, CT, bone scan, or PET-CT images and reports.',
      'If biopsy was done, bring slides, pathology, immunohistochemistry, and biopsy tract details.',
      'List prior radiation, family history of early cancers, and personal tumor history.',
    ],
    testsToAskAbout: [
      'X-ray and MRI of the lesion to assess bone and soft tissue extent.',
      'Chest CT for lung metastasis and bone scan or PET-CT for whole-body staging when needed.',
      'Core needle or open biopsy planned by the team that will perform definitive surgery.',
      'Pre- and post-chemotherapy assessment of tumor necrosis, organ function, hearing, heart, and fertility preservation.',
    ],
    questionsForDoctor: [
      'What is my stage and metastatic status, and is the goal cure or control?',
      'Was the biopsy and surgery plan designed by a bone tumor team, and what are limb-salvage versus amputation tradeoffs?',
      'What chemotherapy is planned, and how will heart, hearing, kidney, infection, and fertility risks be monitored?',
      'How often will the primary site and chest CT be followed after treatment?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Osteosarcoma often begins with local bone pain that gradually worsens and may be worse at night. Pain may not match activity level. As the tumor grows, swelling, a mass, warmth, limited joint motion, limp, or pathologic fracture can occur.</p><p>Common sites include the distal femur, proximal tibia, and proximal humerus. Some people have cough, chest pain, or shortness of breath from lung metastases, but many lung metastases are found on staging chest CT.</p>',
    diagnosis:
      '<p>Diagnosis requires imaging, planned biopsy, and staging. X-ray may show aggressive bone destruction and periosteal reaction. MRI defines bone and soft tissue extent and relation to joints, nerves, and vessels. Chest CT screens for lung spread.</p><p>Biopsy should be planned by the orthopedic oncology team responsible for definitive surgery, because the biopsy tract must be removed at surgery. After pathology confirmation, treatment planning uses site, size, metastasis, chemotherapy response, and tumor necrosis.</p>',
    treatment:
      '<p>For resectable limb osteosarcoma, common treatment is neoadjuvant chemotherapy, local surgery, and postoperative chemotherapy. Surgery may be limb-salvage reconstruction or amputation depending on tumor extent, neurovascular involvement, infection risk, expected function, and patient factors.</p><p>Lung metastases may be removed surgically when appropriate. Radiation is not the main treatment but may be considered for unresectable, special-site, or palliative situations. Recurrent or refractory disease may lead to clinical trial or targeted or immune-related research options.</p>',
    longTermCare:
      '<p>Follow-up monitors relapse and metastasis, reconstruction function, rehabilitation, pain, infection, heart and kidney function, hearing, growth, and psychological support. Early after treatment, primary-site and chest imaging are usually frequent.</p><p>Adolescents may need school return planning, activity limits, limb function therapy, prosthesis lifespan planning, and future surgery discussions. A treatment summary is useful for survivorship care.</p>',
    fertilityOrFamily:
      '<p>Most osteosarcoma is not inherited. Multiple primary tumors, very young onset, history of retinoblastoma, or family clustering of sarcoma, breast cancer, or other early cancers should prompt discussion of TP53, RB1, and related predisposition testing. Fertility preservation should be discussed before chemotherapy.</p>',
    emergencySigns:
      '<p>Sudden severe bone pain, inability to bear weight, suspected fracture, fever with low white cells, uncontrolled bleeding after chemotherapy, chest pain or shortness of breath, or red swollen draining surgical sites need urgent care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Osteosarcoma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/bone/patient/osteosarcoma-treatment-pdq',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Osteosarcoma',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001650.htm',
    },
  ],
  symptoms:
    '<p>Common features are persistent worsening bone pain, night pain, swelling or mass, limited joint motion, limp, pathologic fracture, and sometimes lung-metastasis symptoms.</p>',
  diagnosis:
    '<p>Diagnosis relies on X-ray, MRI, chest CT, staging tests when needed, and biopsy pathology planned by an orthopedic oncology team.</p>',
  treatment:
    '<p>Treatment usually combines preoperative chemotherapy, limb-salvage or amputation surgery, and postoperative chemotherapy; metastatic or recurrent disease may need lung metastasis surgery, radiation, trials, or other systemic therapy.</p>',
  prognosis:
    '<p>Outlook depends on metastatic status, tumor site, complete resection, chemotherapy response, and recurrence. Proper biopsy and care by a bone tumor team are critical.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 411,
    name: 'osteosarcoma-journey.png',
    url: '/images/diseases/osteosarcoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

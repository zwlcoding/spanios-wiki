import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGiantCellTumorOfBone: DiseaseDraft = {
  ...entity(2036, 'disease-giant-cell-tumor-of-bone'),
  name: 'Giant cell tumor of bone',
  nameEn: 'Giant cell tumor of bone',
  alias: 'GCTB, osteoclastoma, China Second Rare Disease Catalog item 36',
  slug: 'giant-cell-tumor-of-bone',
  oneSentence:
    'Giant cell tumor of bone is a rare primary bone tumor that is usually not cancer in the usual sense, but it can grow aggressively where it starts, damage bone, cause pain and swelling, and recur after treatment.',
  plainName:
    'A rare bone tumor near joints that can damage bone and come back locally',
  prevalence:
    "Included in China's second rare disease catalog; GARD lists it as a rare disease that usually begins in adulthood, with frequency varying by registry and diagnostic definition.",
  quickLook: {
    whatItIs:
      'GCTB often arises at the end of long bones near joints, such as around the knee. It is usually locally aggressive rather than a typical spreading cancer, but it can destroy bone and recur.',
    whoToSeeFirst:
      'Persistent bone pain, swelling near a joint, limited motion, an imaging report describing a lytic bone lesion, or a fracture with little trauma should prompt review by orthopedic oncology, orthopedics, or oncology.',
    isGenetic:
      'Most GCTB is not inherited, and relatives usually do not need genetic screening. Multiple bone lesions may lead doctors to check for other bone or metabolic conditions.',
    hasTreatment:
      'Surgery is the main treatment, using curettage, local adjuvant measures, bone graft/cement, or reconstruction. Denosumab, radiation, or trials may be discussed for unresectable, recurrent, or difficult-site disease.',
    commonDelayReason:
      'Early symptoms can look like sports injury, arthritis, sprain, or a benign bone cyst. Worsening pain, night pain, swelling, or abnormal imaging needs specialist review.',
  },
  patientJourney: {
    whenToSuspect: [
      'Pain or swelling near the knee, wrist, hip, shoulder, or another joint slowly worsens and begins limiting activity.',
      'X-ray, CT, or MRI shows a lytic lesion near the end of a bone, thinning cortex, or a pathologic fracture.',
      'Pain, swelling, or limited motion progresses despite treatment for injury or arthritis.',
      'After prior GCTB treatment, pain or swelling returns at the original site, or chest imaging shows nodules that need explanation.',
    ],
    commonWrongTurns: [
      'Repeatedly treating it as joint inflammation or sports injury without repeating imaging.',
      'Rushing to surgery before the imaging, biopsy, pathology, and plan are reviewed by a bone tumor team.',
      'Not keeping preoperative imaging, pathology material, and operative reports, making recurrence decisions harder.',
      'Stopping follow-up once pain improves and missing local recurrence or rare lung involvement.',
    ],
    firstDepartments: [
      'Orthopedic oncology',
      'Orthopedics',
      'Medical oncology',
      'Pathology/radiology review',
    ],
    diagnosisChecklist: [
      'Record when pain or swelling began, whether pain occurs at night, and whether weight-bearing or joint motion is limited.',
      'Bring original X-ray, CT, MRI, bone scan, or PET-CT images and reports.',
      'Bring biopsy, surgery, pathology, slide/block information, and operative notes if already performed.',
      'Note prior bone disease, parathyroid problems, radiation exposure, recurrence history, and chest imaging results.',
    ],
    testsToAskAbout: [
      'X-ray, CT, and MRI of the lesion to define bone destruction, soft tissue extension, and joint involvement.',
      'Needle or open biopsy reviewed by a bone tumor pathologist.',
      'Chest CT or other surveillance when recurrence, higher-risk disease, or physician concern is present.',
      'Whether a multidisciplinary plan is needed and whether curettage, wide resection, reconstruction, or denosumab fits the case.',
    ],
    questionsForDoctor: [
      'Is my tumor suitable for curettage, or does it require a wider operation, and how will this affect joint function?',
      'What factors drive my recurrence risk, and how often should imaging be repeated?',
      'Do I need denosumab, and how will benefits, stopping plans, and side effects be monitored?',
      'If pain or swelling returns later, which team should I contact and what records should I bring?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The most common symptoms are gradually worsening pain, swelling, and reduced motion near the affected bone or joint. Because GCTB often sits near the end of a long bone, symptoms may first feel like knee, wrist, hip, or shoulder trouble.</p><p>Bone weakening can cause a visible lump, joint fluid, or a pathologic fracture. Some tumors recur locally after treatment, and rare cases involve the lungs, so follow-up cannot rely on symptoms alone.</p>',
    diagnosis:
      '<p>Diagnosis combines history, examination, X-ray, CT, MRI, and pathology. Even when imaging looks typical, confirmation usually requires biopsy or surgical tissue reviewed by a team familiar with bone tumors.</p><p>Mimics include chondroblastoma, aneurysmal bone cyst, brown tumor, osteosarcoma, metastatic tumor, and other lytic bone lesions. Defining tumor extent before treatment matters because the operation affects both recurrence risk and function.</p>',
    treatment:
      '<p>Surgery is the main treatment. Options include curettage, local adjuvant measures, filling with bone graft or cement, or wider resection with reconstruction when bone destruction or soft tissue extension is extensive.</p><p>For unresectable tumors, recurrence, difficult sites such as spine or pelvis, or selected cases where shrinking the tumor may help, clinicians may discuss denosumab. Radiation is generally reserved for situations where surgery is not possible because long-term risks must be weighed.</p>',
    longTermCare:
      '<p>Follow-up looks for local recurrence, joint function, bone healing, hardware or reconstruction problems, and rare lung lesions. Local imaging is common, and some patients need chest imaging.</p><p>Rehabilitation should be guided by the orthopedic team so weight-bearing and joint motion return gradually without raising fracture or hardware risks.</p>',
    fertilityOrFamily:
      '<p>GCTB is usually not managed as an inherited condition, so relatives do not usually need screening. Young patients who need long-term medication, radiation, or complex surgery can ask about pregnancy plans, breastfeeding, and bone-growth considerations.</p>',
    emergencySigns:
      '<p>Sudden severe pain at the lesion site, inability to bear weight, deformity, or suspected fracture needs urgent care. Fever after surgery, worsening wound redness or drainage, limb numbness or weakness, chest pain, or shortness of breath also warrants prompt evaluation.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Giant cell tumor of bone',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/13046/giant-cell-tumor-of-bone',
    },
    {
      name: 'NCI: Denosumab',
      type: 'official',
      url: 'https://www.cancer.gov/about-cancer/treatment/drugs/denosumab',
    },
  ],
  symptoms:
    '<p>Typical symptoms are gradually worsening bone pain, swelling near a joint, limited movement, a lump, and sometimes a pathologic fracture when bone is weakened.</p>',
  diagnosis:
    '<p>Diagnosis relies on orthopedic oncology review, X-ray/CT/MRI to map the lesion, and biopsy or surgical pathology to confirm GCTB and exclude similar bone tumors.</p>',
  treatment:
    '<p>Surgery is the main treatment, using curettage, local adjuvant measures, bone graft/cement, or reconstruction; denosumab may be discussed for unresectable, recurrent, or difficult-site disease.</p>',
  prognosis:
    '<p>Many patients achieve local control with proper treatment, but recurrence is a real risk and rare lung involvement can occur, so long-term imaging and rehabilitation matter.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 390,
    name: 'giant-cell-tumor-of-bone-journey.png',
    url: '/images/diseases/giant-cell-tumor-of-bone-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

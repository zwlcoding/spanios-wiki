import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseDermatofibrosarcomaProtuberans: DiseaseDraft = {
  ...entity(2022, 'disease-dermatofibrosarcoma-protuberans'),
  name: 'Dermatofibrosarcoma protuberans',
  nameEn: 'Dermatofibrosarcoma protuberans',
  alias: 'DFSP, China Second Rare Disease Catalog item 22',
  slug: 'dermatofibrosarcoma-protuberans',
  oneSentence:
    'Dermatofibrosarcoma protuberans is a rare, usually slow-growing but locally aggressive skin soft tissue tumor that can extend into surrounding tissue and recur if not fully removed.',
  plainName:
    'A rare deep skin soft tissue tumor that can come back locally if not completely removed',
  prevalence:
    "Included in China's second rare disease catalog; it is rare overall and makes up a very small share of skin tumors, with estimates varying by registry.",
  quickLook: {
    whatItIs:
      'DFSP usually starts in the dermis and extends into tissue with irregular root-like projections. Distant spread is uncommon, but local recurrence risk makes surgical margins and pathology review important.',
    whoToSeeFirst:
      'A long-standing, gradually enlarging, firm, red-brown, scar-like, or plaque-like skin lump should be evaluated by dermatology or skin cancer surgery, with referral to a sarcoma center when needed.',
    isGenetic:
      'DFSP is usually not inherited. Some tumors have a COL1A1-PDGFB fusion, which helps pathology or targeted therapy decisions but does not mean relatives need genetic screening.',
    hasTreatment:
      'Complete surgery is the main treatment. Mohs surgery or wide excision with careful margin control reduces recurrence. Radiation or imatinib may be considered for unresectable, recurrent, or fusion-positive disease.',
    commonDelayReason:
      'Early DFSP can look like a scar, dermatofibroma, cyst, or firm plaque and may grow slowly without pain, so biopsy is often delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'A firm plaque, nodule, or raised lesion on the trunk, shoulder, abdomen, thigh, or head and neck persists and enlarges slowly.',
      'The lesion looks skin-colored, red-brown, purple-red, or scar-like and feels progressively firmer.',
      'A presumed scar, dermatofibroma, cyst, or benign lump was removed and then recurred at the same site.',
      'Pathology suggests a spindle cell tumor, CD34 positivity, or possible DFSP.',
    ],
    commonWrongTurns: [
      'Watching it as a scar or benign skin lump without biopsy.',
      'Doing a simple excision without adequate margins or margin assessment.',
      'Repeating small excisions after recurrence instead of involving a skin cancer or sarcoma team.',
      'Not continuing long-term follow-up because recurrence can occur years later.',
    ],
    firstDepartments: [
      'Dermatology',
      'Skin cancer surgery or Mohs clinic',
      'Plastic surgery',
      'Sarcoma or medical oncology',
    ],
    diagnosisChecklist: [
      'Record when the lesion appeared, growth speed, pain or ulceration, prior trauma, scar, or surgery.',
      'Bring clear photos, dermoscopy, ultrasound or MRI, and prior operative notes.',
      'Bring pathology report, immunohistochemistry, margin status, and any molecular testing.',
      'Record recurrence history and the size of each prior excision.',
    ],
    testsToAskAbout: [
      'Skin or soft tissue biopsy with pathology and immunohistochemistry.',
      'MRI or ultrasound to assess depth, fascia or muscle involvement, and surgical planning.',
      'Margin assessment and whether Mohs or wide excision is most appropriate.',
      'COL1A1-PDGFB or related molecular testing and sarcoma center review for recurrent or unresectable disease.',
    ],
    questionsForDoctor: [
      'Is DFSP confirmed, are margins clear, and should pathology be reviewed?',
      'Am I a candidate for Mohs surgery or do I need wide excision and reconstruction?',
      'Does the tumor involve fascia, muscle, or bone, and do I need MRI?',
      'What is my recurrence risk and follow-up schedule?',
      'If complete surgery is not possible, are radiation or imatinib appropriate?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>DFSP often appears as a slowly enlarging firm plaque, nodule, or raised lesion that may be skin-colored, red-brown, or purple-red. It is common on the trunk and proximal limbs. Early lesions are often painless and can be mistaken for scars, dermatofibromas, or cysts.</p><p>As it grows, it can form multiple protruding nodules and extend into subcutaneous tissue, fascia, or muscle. Distant spread is uncommon, but local recurrence is a major concern when margins are inadequate.</p>',
    diagnosis:
      '<p>Diagnosis requires biopsy with pathology and immunohistochemistry, often including CD34. Because DFSP can resemble other spindle cell tumors, expert dermatopathology or sarcoma pathology review may be needed.</p><p>Ultrasound or MRI may help define deep extent before surgery. Molecular testing for COL1A1-PDGFB fusion can be useful in recurrent, unresectable, or targeted-therapy situations.</p>',
    treatment:
      '<p>The core treatment is complete removal with confirmed margins. Mohs surgery or other margin-controlled surgery can lower recurrence while sparing tissue; wide local excision is used when Mohs is not suitable.</p><p>Radiation may be considered when margins remain positive and more surgery is not feasible. Imatinib may be used for selected unresectable, recurrent, metastatic, or fusion-positive tumors. Planning should balance recurrence control with function and reconstruction.</p>',
    longTermCare:
      '<p>Long-term follow-up is needed, especially during the first several years, with continued self-checks afterward because DFSP can recur late. A new firm area, raised change, color change, or pain near the scar should prompt review.</p>',
    fertilityOrFamily:
      '<p>DFSP is usually not a hereditary cancer syndrome, so relatives generally do not need screening. Fertility goals should be discussed before targeted therapy, radiation, or major surgery when relevant.</p>',
    emergencySigns:
      '<p>DFSP is usually not an emergency, but rapid enlargement, ulceration with bleeding, infected redness and pain, wound breakdown, fever after surgery, or severe medicine reactions should prompt urgent care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Mayo Clinic: Dermatofibrosarcoma protuberans diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/dermatofibrosarcoma-protuberans/diagnosis-treatment/drc-20576979',
    },
    {
      name: 'Cleveland Clinic: Dermatofibrosarcoma Protuberans',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/24068-dermatofibrosarcoma-protuberans',
    },
  ],
  symptoms:
    '<p>DFSP often appears as a slowly enlarging firm plaque, nodule, or raised scar-like lesion, usually painless early and often on the trunk or proximal limbs.</p>',
  diagnosis:
    '<p>Diagnosis uses skin or soft tissue biopsy, pathology immunohistochemistry, margin assessment, and MRI or molecular testing when needed.</p>',
  treatment:
    '<p>Complete surgical removal is preferred, often with Mohs or margin-controlled surgery; radiation or imatinib may be considered for unresectable, recurrent, or margin-positive disease.</p>',
  prognosis:
    '<p>Distant spread is uncommon, but recurrence depends on margins and treatment method. Complete excision and long-term follow-up are important.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 376,
    name: 'dermatofibrosarcoma-protuberans-journey.png',
    url: '/images/diseases/dermatofibrosarcoma-protuberans-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCutaneousNeuroendocrineCarcinomaMerkelCellCarcinoma: DiseaseDraft =
  {
    ...entity(
      2019,
      'disease-cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    ),
    name: 'Cutaneous neuroendocrine carcinoma (Merkel cell carcinoma)',
    nameEn: 'Cutaneous neuroendocrine carcinoma (Merkel cell carcinoma)',
    alias:
      'Merkel cell carcinoma, MCC, primary cutaneous neuroendocrine carcinoma, China Second Rare Disease Catalog item 19',
    slug: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    oneSentence:
      'Cutaneous neuroendocrine carcinoma, also called Merkel cell carcinoma, is a rare but aggressive skin cancer that often appears as a fast-growing painless lump on sun-exposed skin and needs biopsy, staging, and multidisciplinary treatment.',
    plainName:
      'A fast-growing rare skin cancer that needs prompt biopsy and staging',
    prevalence:
      "Included in China's second rare disease catalog; NCI describes it as a very rare skin cancer, with sun exposure and weakened immunity increasing risk.",
    quickLook: {
      whatItIs:
        'MCC arises from neuroendocrine-related cells in the skin and can recur locally or spread to lymph nodes and distant organs. It may look like a common skin bump, so early biopsy matters.',
      whoToSeeFirst:
        'Persistent, rapidly changing, or pathology-suspicious skin tumors or lymphomas should start with dermatology and quickly involve oncology, hematology, pathology, and radiation oncology as needed.',
      isGenetic:
        'This is usually not a typical inherited family condition. The focus is pathology confirmation, staging, immune status, and treatment planning rather than genetic screening of relatives.',
      hasTreatment:
        'Treatment is stage-based. Early disease often uses wide excision and sentinel node evaluation, sometimes with radiation. Unresectable, recurrent, or metastatic disease may use immune checkpoint inhibitors, radiation, or other systemic therapy.',
      commonDelayReason:
        'Early appearance can resemble common rashes, benign bumps, or other skin problems. Delay happens when biopsy, pathology review, or staging is postponed.',
    },
    patientJourney: {
      whenToSuspect: [
        'A pink, red, purple, or skin-colored lump grows quickly and is often painless.',
        'The lump is on sun-exposed skin such as the head, neck, or arms, or the patient is older or immunosuppressed.',
        'Nearby lymph nodes enlarge, or the skin tumor ulcerates, bleeds, or changes rapidly.',
      ],
      commonWrongTurns: [
        'Watching a fast-growing painless lump as a cyst, mole, vascular lesion, or simple skin infection.',
        'Removing the skin lesion without pathology immunostains, lymph node evaluation, and staging.',
        'Not involving a skin cancer or oncology multidisciplinary team after diagnosis.',
      ],
      firstDepartments: [
        'Dermatology',
        'Skin cancer surgery or plastic surgery',
        'Medical oncology',
        'Radiation oncology',
      ],
      diagnosisChecklist: [
        'Record when the skin change began, growth speed, itch, pain, ulceration, bleeding, previous treatments, and response.',
        'Bring clear photos, dermoscopy or imaging if available, prior pathology slides, immunohistochemistry, and molecular or clonality results.',
        'Record enlarged nodes, fever, night sweats, weight loss, immunosuppressive medicines, transplant history, or prior cancer.',
        'Prepare a full medication list, especially immunosuppressants, anticoagulants, and prior radiation, chemotherapy, or immunotherapy.',
      ],
      testsToAskAbout: [
        'Skin biopsy, pathology immunohistochemistry, and expert pathology consultation when needed.',
        'Lymph node examination, ultrasound, needle biopsy or excision, and CT, PET/CT, or MRI for staging.',
        'CBC, chemistry, LDH, viral screening, and treatment baseline tests.',
        'Disease-specific tests such as sentinel node biopsy, TCR clonality, peripheral blood flow cytometry, or bone marrow evaluation when appropriate.',
      ],
      questionsForDoctor: [
        'Is the pathology diagnosis definite, and should it be reviewed by a specialist pathologist?',
        'What is the stage, and are lymph nodes, blood, or organs involved?',
        'Is the treatment goal cure, lower recurrence risk, disease control, or symptom relief?',
        'What are the benefits and risks of surgery, radiation, systemic therapy, or immunotherapy?',
        'How often should follow-up, skin self-checks, node checks, sun protection, and infection prevention be done?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Cutaneous neuroendocrine carcinoma, also called Merkel cell carcinoma, is a rare but aggressive skin cancer that often appears as a fast-growing painless lump on sun-exposed skin and needs biopsy, staging, and multidisciplinary treatment.</p><p>A pink, red, purple, or skin-colored lump grows quickly and is often painless.The lump is on sun-exposed skin such as the head, neck, or arms, or the patient is older or immunosuppressed.Nearby lymph nodes enlarge, or the skin tumor ulcerates, bleeds, or changes rapidly.</p>',
      diagnosis:
        '<p>Diagnosis depends on skin biopsy with pathology and immunohistochemistry, followed by staging with sentinel lymph node biopsy, lymph node ultrasound or biopsy, CT, PET/CT, or MRI when indicated.</p><p>Because these conditions can mimic common rashes or other skin tumors, pathology review and complete staging often determine the treatment path.</p>',
      treatment:
        '<p>Treatment is stage-based. Early disease often uses wide excision and sentinel node evaluation, sometimes with radiation. Unresectable, recurrent, or metastatic disease may use immune checkpoint inhibitors, radiation, or other systemic therapy.</p><p>Before treatment, clinicians should confirm stage, immune status, comorbidities, and personal goals, and discuss side effects, recurrence monitoring, and clinical trial options.</p>',
      longTermCare:
        '<p>Long-term care includes skin and lymph node self-checks, scheduled visits, imaging or blood tests when needed, side effect monitoring, sun protection, and infection prevention. New fast-growing skin lesions, lymph nodes, or systemic symptoms should be reported promptly.</p>',
      fertilityOrFamily:
        '<p>These conditions are usually not typical inherited diseases, and relatives generally do not need genetic screening. If radiation, chemotherapy, immune therapy, or targeted therapy is planned, fertility goals should be discussed with oncology and reproductive or obstetric specialists.</p>',
      emergencySigns:
        '<p>Seek emergency care for a rapidly enlarging lesion with ulceration or bleeding, fever or chills, serious infection signs during treatment, breathing trouble, confusion, severe dehydration, severe diarrhea, shortness of breath or jaundice during immunotherapy, or possible blood clot symptoms. Tell the team the diagnosis and current treatment.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'NCI PDQ: Merkel Cell Carcinoma Treatment',
        type: 'official',
        url: 'https://www.cancer.gov/types/skin/patient/merkel-cell-treatment-pdq',
      },
      {
        name: 'American Cancer Society: Signs and Symptoms of Merkel Cell Carcinoma',
        type: 'review',
        url: 'https://www.cancer.org/cancer/types/merkel-cell-skin-cancer/detection-diagnosis-staging/signs-and-symptoms.html',
      },
    ],
    symptoms:
      '<p>A pink, red, purple, or skin-colored lump grows quickly and is often painless.The lump is on sun-exposed skin such as the head, neck, or arms, or the patient is older or immunosuppressed.Nearby lymph nodes enlarge, or the skin tumor ulcerates, bleeds, or changes rapidly.</p>',
    diagnosis:
      '<p>Diagnosis depends on skin biopsy with pathology and immunohistochemistry, followed by staging with sentinel lymph node biopsy, lymph node ultrasound or biopsy, CT, PET/CT, or MRI when indicated.</p>',
    treatment:
      '<p>Treatment is stage-based. Early disease often uses wide excision and sentinel node evaluation, sometimes with radiation. Unresectable, recurrent, or metastatic disease may use immune checkpoint inhibitors, radiation, or other systemic therapy.</p>',
    prognosis:
      '<p>Outcome depends on stage, lymph node involvement, immune status, treatment completeness, and recurrence. Earlier biopsy and staging help guide treatment.</p>',
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 373,
      name: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
      url: '/images/diseases/cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCutaneousTCellLymphomas: DiseaseDraft = {
  ...entity(2020, 'disease-cutaneous-t-cell-lymphomas'),
  name: 'Cutaneous T-cell lymphomas',
  nameEn: 'Cutaneous T-cell lymphomas',
  alias:
    'CTCL, mycosis fungoides, Sézary syndrome, China Second Rare Disease Catalog item 20',
  slug: 'cutaneous-t-cell-lymphomas',
  oneSentence:
    'Cutaneous T-cell lymphomas are non-Hodgkin lymphomas that mainly involve the skin, most often mycosis fungoides or Sézary syndrome, and may present for years as persistent itchy patches, plaques, or tumors.',
  plainName: 'T-cell lymphomas that mainly affect the skin',
  prevalence:
    "Included in China's second rare disease catalog; they are rare overall, and estimates vary by subtype, stage, and registry definition.",
  quickLook: {
    whatItIs:
      'CTCL is not ordinary eczema or psoriasis. It is a T-cell lymphoma that primarily involves skin. Early disease can be slow, and because it mimics common rashes, diagnosis may require repeated biopsies and follow-up.',
    whoToSeeFirst:
      'Persistent, rapidly changing, or pathology-suspicious skin tumors or lymphomas should start with dermatology and quickly involve oncology, hematology, pathology, and radiation oncology as needed.',
    isGenetic:
      'This is usually not a typical inherited family condition. The focus is pathology confirmation, staging, immune status, and treatment planning rather than genetic screening of relatives.',
    hasTreatment:
      'Treatment is guided by subtype and stage: early disease often uses skin-directed treatment such as topical therapy, phototherapy, or local radiation; advanced disease or Sézary syndrome may need systemic, immune, targeted, extracorporeal photopheresis, or trial-based therapy.',
    commonDelayReason:
      'Early appearance can resemble common rashes, benign bumps, or other skin problems. Delay happens when biopsy, pathology review, or staging is postponed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Red, scaly patches or plaques recur for years or slowly enlarge, often itchy and poorly responsive to eczema or psoriasis treatment.',
      'Rashes occur on less sun-exposed areas such as buttocks, thighs, or breasts and have irregular shapes or mixed colors.',
      'Skin tumors, ulceration, widespread redness, enlarged lymph nodes, fever, night sweats, or weight loss appear.',
    ],
    commonWrongTurns: [
      'Treating for eczema, fungal infection, psoriasis, or allergy for years without pathology review.',
      'Ruling out CTCL after one shallow or poorly targeted biopsy.',
      'Not completing blood, lymph node, and imaging staging after diagnosis.',
    ],
    firstDepartments: [
      'Dermatology',
      'Cutaneous lymphoma clinic',
      'Hematology',
      'Medical oncology or radiation oncology',
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
      '<p>Cutaneous T-cell lymphomas are non-Hodgkin lymphomas that mainly involve the skin, most often mycosis fungoides or Sézary syndrome, and may present for years as persistent itchy patches, plaques, or tumors.</p><p>Red, scaly patches or plaques recur for years or slowly enlarge, often itchy and poorly responsive to eczema or psoriasis treatment.Rashes occur on less sun-exposed areas such as buttocks, thighs, or breasts and have irregular shapes or mixed colors.Skin tumors, ulceration, widespread redness, enlarged lymph nodes, fever, night sweats, or weight loss appear.</p>',
    diagnosis:
      '<p>Diagnosis uses skin findings, skin biopsy pathology and immunohistochemistry, often T-cell receptor clonality testing, plus staging of blood, lymph nodes, imaging, and sometimes bone marrow.</p><p>Because these conditions can mimic common rashes or other skin tumors, pathology review and complete staging often determine the treatment path.</p>',
    treatment:
      '<p>Treatment is guided by subtype and stage: early disease often uses skin-directed treatment such as topical therapy, phototherapy, or local radiation; advanced disease or Sézary syndrome may need systemic, immune, targeted, extracorporeal photopheresis, or trial-based therapy.</p><p>Before treatment, clinicians should confirm stage, immune status, comorbidities, and personal goals, and discuss side effects, recurrence monitoring, and clinical trial options.</p>',
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
      name: 'NCI PDQ: Mycosis Fungoides and Sézary Syndrome Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/lymphoma/patient/mycosis-fungoides-treatment-pdq',
    },
    {
      name: 'American Cancer Society: Signs and Symptoms of Skin Lymphoma',
      type: 'review',
      url: 'https://www.cancer.org/cancer/types/skin-lymphoma/detection-diagnosis-staging/signs-and-symptoms.html',
    },
  ],
  symptoms:
    '<p>Red, scaly patches or plaques recur for years or slowly enlarge, often itchy and poorly responsive to eczema or psoriasis treatment.Rashes occur on less sun-exposed areas such as buttocks, thighs, or breasts and have irregular shapes or mixed colors.Skin tumors, ulceration, widespread redness, enlarged lymph nodes, fever, night sweats, or weight loss appear.</p>',
  diagnosis:
    '<p>Diagnosis uses skin findings, skin biopsy pathology and immunohistochemistry, often T-cell receptor clonality testing, plus staging of blood, lymph nodes, imaging, and sometimes bone marrow.</p>',
  treatment:
    '<p>Treatment is guided by subtype and stage: early disease often uses skin-directed treatment such as topical therapy, phototherapy, or local radiation; advanced disease or Sézary syndrome may need systemic, immune, targeted, extracorporeal photopheresis, or trial-based therapy.</p>',
  prognosis:
    '<p>Many early mycosis fungoides cases progress slowly and can be managed long term; tumor-stage, blood, lymph node, or organ involvement raises risk and requires closer care.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 374,
    name: 'cutaneous-t-cell-lymphomas-journey.png',
    url: '/images/diseases/cutaneous-t-cell-lymphomas-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

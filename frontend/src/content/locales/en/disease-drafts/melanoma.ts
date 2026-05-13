import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMelanoma: DiseaseDraft = {
  ...entity(2048, 'disease-melanoma'),
  name: 'Melanoma',
  nameEn: 'Melanoma',
  alias: 'Malignant melanoma; China Second Rare Disease Catalog item 48',
  slug: 'melanoma',
  oneSentence:
    "Melanoma is a cancer of melanocytes that can arise in skin, nails, mucosa, or the eye; it is included in China's second rare disease catalog, although frequency varies greatly by country and ancestry.",
  plainName: 'A melanocyte cancer that needs early pathology confirmation',
  prevalence:
    "Included in China's second rare disease catalog; melanoma is not globally rare in every region, and acral or mucosal melanoma deserves particular attention in many Asian populations.",
  quickLook: {
    whatItIs:
      'Melanoma can begin in a changing mole, but also on the sole, palm, under a nail, in the mouth, nose, genital tract, anus, or eye. Suspicious lesions need prompt specialist assessment.',
    whoToSeeFirst:
      'Skin or nail lesions usually start with dermatology. Mucosal or eye lesions should be assessed by the relevant specialty, with biopsy or pathology arranged quickly.',
    isGenetic:
      'Most cases are not inherited. Multiple relatives with melanoma, pancreatic cancer, or very young onset may justify counseling for CDKN2A and other predisposition genes.',
    hasTreatment:
      'Early disease is treated mainly with complete surgery. Higher-risk or advanced disease may need immunotherapy, targeted therapy, radiation, clinical trials, and long-term follow-up.',
    commonDelayReason:
      'Melanoma may be mistaken for an ordinary mole, nail fungus, bruise, callus, or mouth ulcer. Laser, freezing, or cosmetic mole removal before pathology can delay diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'A mole or pigmented spot becomes asymmetric, irregular at the border, uneven in color, larger, or clearly evolving over weeks to months.',
      'One spot looks unlike your other moles, or begins bleeding, ulcerating, itching, hurting, or becoming raised.',
      'A dark streak under a nail, pigment spreading around the nail, or an unexplained pigmented mass in the mouth, nose, genital tract, anus, palm, or sole.',
      'Past melanoma or a family pattern of melanoma or pancreatic cancer.',
    ],
    commonWrongTurns: [
      'Using laser, freezing, caustic creams, or cosmetic removal before pathology is obtained.',
      'Treating a dark nail streak as fungus or trauma for a long time without dermoscopy or biopsy when indicated.',
      'Removing only the visible surface without reporting Breslow thickness, ulceration, margins, and staging information.',
    ],
    firstDepartments: [
      'Dermatology',
      'Surgical oncology or melanoma clinic',
      'Ophthalmology',
      'ENT, oral medicine, gynecology, or colorectal surgery based on lesion site',
    ],
    diagnosisChecklist: [
      'Photograph the lesion and record size, color, shape, and timing of change; avoid treating it yourself.',
      'Bring dermoscopy images, biopsy or excision pathology, immunohistochemistry, molecular testing, and imaging reports.',
      'List sunburn history, immunosuppression, family cancer history, and prior skin cancer.',
      'For nail, sole, or mucosal lesions, note trauma history, bleeding, pain, and rate of growth.',
    ],
    testsToAskAbout: [
      'Dermoscopy and appropriate biopsy or excisional biopsy rather than destructive treatment.',
      'Breslow thickness, ulceration, margins, mitotic rate, and whether sentinel lymph node biopsy is needed.',
      'Lymph node evaluation, ultrasound, CT, PET-CT, or brain MRI when needed for staging.',
      'BRAF, NRAS, KIT, NTRK, and other molecular testing in advanced or high-risk disease.',
    ],
    questionsForDoctor: [
      'Is my melanoma in situ, early invasive, regional lymph node disease, or metastatic disease?',
      'Are the margins adequate, and do I need wider excision or sentinel lymph node biopsy?',
      'Do I need immunotherapy, targeted therapy, radiation, or adjuvant treatment?',
      'What should I self-check, and how often do I need skin, lymph node, and imaging follow-up?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Cutaneous melanoma often appears as a new pigmented lesion or a changing mole. ABCDE clues are asymmetry, irregular border, uneven color, increasing diameter, and evolution; the “ugly duckling” sign, where one mole looks different from the rest, is also useful.</p><p>People in Asian populations should pay close attention to soles, palms, nails, and mucosal sites. Nail melanoma may appear as a widening dark streak, nail distortion, bleeding, or pigment spreading beyond the nail fold. Mucosal melanoma may cause nosebleeds, oral pigment, anal bleeding, or genital lesions.</p>',
    diagnosis:
      '<p>Suspicious lesions should be preserved for pathology rather than destroyed with laser, freezing, or caustic treatment. Depending on site, the doctor may choose excisional biopsy or another appropriate biopsy. The pathology report should include Breslow thickness, ulceration, margins, mitotic features, and immunohistochemistry when needed.</p><p>Staging evaluates local tumor features, lymph nodes, and distant spread. Some thicker or high-risk lesions need sentinel lymph node biopsy. Advanced, recurrent, or high-risk disease often needs BRAF, NRAS, KIT, NTRK, or other testing to guide targeted therapy or trials.</p>',
    treatment:
      '<p>The foundation of early melanoma treatment is complete surgical excision with appropriate margins. Depending on thickness, ulceration, lymph nodes, and stage, wider excision, sentinel lymph node biopsy, adjuvant immunotherapy, or targeted therapy may be recommended.</p><p>Advanced melanoma care now often uses immune checkpoint inhibitors, BRAF/MEK targeted therapy, KIT-directed therapy for selected cases, local treatments, radiation, and clinical trials. Mucosal, acral, and ocular melanoma may follow different pathways and should be reviewed by experienced teams.</p>',
    longTermCare:
      '<p>Follow-up includes self-checks of skin and mucosa, lymph node awareness, clinician skin exams, and imaging or laboratory tests when indicated. Patients should report new or changing lesions and tell the oncology team about possible immunotherapy side effects such as diarrhea, rash, endocrine symptoms, cough, or abnormal liver tests.</p>',
    fertilityOrFamily:
      '<p>Most melanoma is not clearly inherited. Multiple melanomas, melanoma plus pancreatic cancer in the family, very young onset, or multiple primary tumors may justify genetic counseling for CDKN2A and related genes. People of reproductive age should discuss fertility preservation and pregnancy timing before systemic treatment.</p>',
    emergencySigns:
      '<p>Seek urgent care for uncontrolled bleeding, severe infection or pain at a lesion, new neurologic symptoms, shortness of breath, severe headache, bone pain, or serious symptoms during immunotherapy such as severe diarrhea, jaundice, breathlessness, or confusion.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Melanoma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/skin/patient/melanoma-treatment-pdq',
    },
    {
      name: 'MedlinePlus: Melanoma',
      type: 'official',
      url: 'https://medlineplus.gov/melanoma.html',
    },
  ],
  symptoms:
    '<p>Symptoms include a new or changing pigmented lesion with ABCDE warning signs, or abnormal pigment, mass, bleeding, or ulceration on the sole, palm, nail, mucosa, or eye.</p>',
  diagnosis:
    '<p>Diagnosis depends on appropriate biopsy or excision pathology, with Breslow thickness, ulceration, margins, sentinel lymph node assessment, and molecular testing used for staging and treatment decisions.</p>',
  treatment:
    '<p>Early disease is treated mainly with surgery; high-risk or advanced disease may use immunotherapy, targeted therapy, radiation, local treatment, and clinical trials.</p>',
  prognosis:
    '<p>Earlier detection and complete excision improve outlook. Thickness, ulceration, lymph node status, metastasis, site, and molecular features shape recurrence risk and treatment options.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 402,
    name: 'melanoma-journey.png',
    url: '/images/diseases/melanoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

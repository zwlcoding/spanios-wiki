import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseInflammatoryMyofibroblasticTumor: DiseaseDraft = {
  ...entity(2042, 'disease-inflammatory-myofibroblastic-tumor'),
  name: 'Inflammatory myofibroblastic tumor',
  nameEn: 'Inflammatory myofibroblastic tumor',
  alias:
    'IMT, inflammatory pseudotumor-like tumor, China Second Rare Disease Catalog item 42',
  slug: 'inflammatory-myofibroblastic-tumor',
  oneSentence:
    'Inflammatory myofibroblastic tumor is a rare intermediate soft tissue tumor that can arise in the lung, abdomen, pelvis, bladder, head and neck, or other sites, and often needs pathology plus ALK and other molecular testing to distinguish it from inflammation, infection, and other tumors.',
  plainName:
    'A rare soft tissue tumor that can look like inflammation but needs tumor specialist review',
  prevalence:
    "Included in China's second rare disease catalog; GARD lists inflammatory myofibroblastic tumor as a rare disease that can affect children, adolescents, and adults.",
  quickLook: {
    whatItIs:
      'IMT is made of myofibroblast-like tumor cells mixed with inflammatory cells. Many grow locally, while some recur, invade, or rarely metastasize. ALK, ROS1, NTRK, and other fusions can guide therapy.',
    whoToSeeFirst:
      'An unexplained mass, persistent inflammatory signs with a solid lesion on imaging, or pathology suggesting IMT should be reviewed by oncology, the relevant surgical team, and pathology/molecular diagnostics.',
    isGenetic:
      'IMT is usually not inherited, so relatives usually do not need screening. Molecular testing is mainly for diagnosis and targeted-treatment planning.',
    hasTreatment:
      'Complete surgical removal is central when feasible. Unresectable, recurrent, metastatic, or ALK-positive disease may lead to discussion of ALK inhibitors or other targeted therapy, systemic treatment, or trials.',
    commonDelayReason:
      'Fever, anemia, high inflammatory markers, or local pain can make IMT look like infection, an inflammatory mass, or a benign tumor for a long time.',
  },
  patientJourney: {
    whenToSuspect: [
      'Imaging shows a lung, abdominal, pelvic, bladder, head/neck, or soft tissue mass that does not resolve with routine infection treatment.',
      'A mass is accompanied by recurrent fever, weight loss, anemia, high platelets, or high CRP/ESR.',
      'A pathology report mentions IMT, spindle cell lesion, ALK positivity, or inflammatory pseudotumor-like features.',
      'A previously treated lesion recurs locally or new lesions appear on imaging.',
    ],
    commonWrongTurns: [
      'Repeated antibiotics for an inflammatory mass without tissue diagnosis.',
      'No expert pathology review or immunohistochemistry/molecular testing when pathology is unusual.',
      'Local treatment without asking about ALK, ROS1, NTRK, or other targetable tests.',
      'Assuming no follow-up is needed after resection.',
    ],
    firstDepartments: [
      'Medical oncology',
      'Relevant surgical specialty',
      'Pathology/molecular diagnostics',
      'Radiology review',
    ],
    diagnosisChecklist: [
      'Bring all CT, MRI, ultrasound, or PET-CT images and reports.',
      'Bring biopsy/surgical pathology, immunohistochemistry, molecular testing, and slide/block information.',
      'Record fever, pain, weight change, anemia, inflammatory markers, and response to antibiotics.',
      'Collect operative notes, margin status, recurrence timeline, and prior tumor treatment.',
    ],
    testsToAskAbout: [
      'Contrast CT/MRI of the lesion to define extent, adjacent organs, and resectability.',
      'Pathology review plus ALK immunohistochemistry, with NGS or fusion testing when needed.',
      'Whole-body or site-specific staging and recurrence assessment.',
      'Whether complete resection, observation, targeted therapy, or clinical trial fits the case.',
    ],
    questionsForDoctor: [
      'Can my tumor be completely removed, and how does margin status affect recurrence risk?',
      'Have ALK, ROS1, NTRK, or related tests been done, and can they guide treatment?',
      'If we observe for now, what are the risks and imaging intervals?',
      'For recurrence or unresectable disease, what targeted medicines, systemic therapies, or trials are options?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Symptoms depend on location. Lung lesions may cause cough, chest pain, or be found incidentally. Abdominal or pelvic tumors may cause pain, bloating, or bowel obstruction-like symptoms. Bladder tumors may cause blood in urine or urinary symptoms. Some patients have fever, fatigue, weight loss, anemia, high platelets, or high inflammatory markers.</p><p>Some people have few symptoms and are diagnosed after imaging finds a mass. Local recurrence can occur, and a small subset behaves more aggressively.</p>',
    diagnosis:
      '<p>Diagnosis depends on pathology, often supported by immunohistochemistry and molecular testing. ALK positivity supports the diagnosis and can guide targeted therapy, but ALK-negative tumors can still be IMT, so clinicians may test ROS1, NTRK, RET, or other fusions.</p><p>Mimics include infectious inflammatory masses, inflammatory pseudotumor, IgG4-related disease, smooth muscle tumors, gastrointestinal stromal tumor, sarcoma, lymphoma, and metastatic tumor. Complex cases should have expert pathology review.</p>',
    treatment:
      '<p>When localized IMT can be completely removed, surgery is usually preferred. Observation, repeat surgery, or additional treatment depends on location, margins, recurrence risk, and pathology/molecular findings.</p><p>For unresectable, recurrent, or metastatic IMT, ALK-positive tumors may be treated with ALK inhibitors; other fusion-positive tumors may have matching targeted options. Multidisciplinary planning is important.</p>',
    longTermCare:
      '<p>Follow-up tracks local imaging, symptoms, inflammatory markers, post-surgical function, and medication side effects. Intervals depend on site, completeness of resection, molecular findings, and recurrence risk.</p>',
    fertilityOrFamily:
      '<p>IMT is usually not managed as an inherited disease. Young patients who need long-term targeted therapy, chemotherapy, or pelvic surgery/radiation should ask about fertility preservation, pregnancy safety, and contraception.</p>',
    emergencySigns:
      '<p>Bowel obstruction-like pain and vomiting, coughing blood, severe blood in urine, shortness of breath, persistent high fever, severe pain, postoperative infection, or serious targeted-therapy side effects require urgent care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Inflammatory myofibroblastic tumor',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/13007/inflammatory-myofibroblastic-tumor',
    },
  ],
  symptoms:
    '<p>Symptoms vary by site and may include cough, chest pain, abdominal pain, bloating, blood in urine, or a mass, sometimes with fever, fatigue, anemia, weight loss, and high inflammatory markers.</p>',
  diagnosis:
    '<p>Diagnosis relies on pathology, immunohistochemistry, and molecular testing, especially ALK and other fusions, while excluding infection, inflammatory masses, and other soft tissue tumors.</p>',
  treatment:
    '<p>Surgery is central when complete resection is possible; unresectable, recurrent, or metastatic disease may be treated based on ALK, ROS1, NTRK, or other targetable results.</p>',
  prognosis:
    '<p>Many localized tumors can be controlled with proper treatment, but recurrence can occur and a minority behave aggressively, so follow-up depends on margins and molecular findings.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 396,
    name: 'inflammatory-myofibroblastic-tumor-journey.png',
    url: '/images/diseases/inflammatory-myofibroblastic-tumor-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlioblastoma: DiseaseDraft = {
  ...entity(2038, 'disease-glioblastoma'),
  name: 'Glioblastoma',
  nameEn: 'Glioblastoma',
  alias:
    'GBM, adult diffuse glioma grade 4, China Second Rare Disease Catalog item 38',
  slug: 'glioblastoma',
  oneSentence:
    'Glioblastoma is an aggressive adult primary central nervous system tumor that may cause new or worsening headache, seizures, weakness, speech or vision changes, and needs coordinated care from neurosurgery and neuro-oncology teams.',
  plainName:
    'A fast-growing malignant brain glioma that needs multidisciplinary care',
  prevalence:
    "Included in China's second rare disease catalog; it is a rare central nervous system tumor, relatively common among adult malignant primary brain tumors but still uncommon in the general population.",
  quickLook: {
    whatItIs:
      'GBM arises from glial-lineage cells in the brain and grows infiltratively. Even when imaging shows one main mass, microscopic spread can extend beyond the visible tumor edge.',
    whoToSeeFirst:
      'New seizure, progressive headache, morning vomiting, one-sided weakness, speech difficulty, vision-field change, or major personality/cognitive change should prompt neurosurgery, neurology, or emergency evaluation.',
    isGenetic:
      'Most GBM is not inherited. Pathology tests such as IDH and MGMT help classify the tumor and guide treatment discussion; very young patients or strong family cancer history can ask about genetic counseling.',
    hasTreatment:
      'Treatment often includes maximal safe surgery, radiation, and temozolomide. Some patients may discuss tumor treating fields, targeted or immunotherapy trials, rehabilitation, and palliative/supportive care.',
    commonDelayReason:
      'Early symptoms may be attributed to migraine, stress, neck problems, stroke after-effects, or mental health issues. New seizures or progressive focal neurologic symptoms need brain MRI.',
  },
  patientJourney: {
    whenToSuspect: [
      'An adult has a first seizure, or established seizures suddenly become much more frequent.',
      'Headache worsens over time with vomiting, sleepiness, blurred vision, speech trouble, weakness, or unsteady walking.',
      'Family notices clear changes in personality, memory, judgment, language, or work ability over weeks to months.',
      'Brain MRI shows an enhancing mass, edema, or features concerning for high-grade glioma.',
    ],
    commonWrongTurns: [
      'Repeatedly treating headache, sleep problems, anxiety, or neck pain without brain MRI when symptoms progress.',
      'Focusing only on whether the tumor can be removed and not on functional mapping, post-op chemoradiation, and molecular pathology.',
      'Not reviewing IDH, MGMT, and other key pathology markers after surgery.',
      'Overlooking seizure control, edema, blood clots, nutrition, rehabilitation, and caregiver strain during treatment.',
    ],
    firstDepartments: [
      'Neurosurgery',
      'Neuro-oncology/medical oncology',
      'Neurology',
      'Emergency medicine',
    ],
    diagnosisChecklist: [
      'Record the timeline of headache, seizures, weakness, speech, vision, cognition, and personality changes.',
      'Bring contrast brain MRI, CT, pre- and postoperative images, and imaging discs.',
      'Bring pathology, immunohistochemistry, and molecular reports including IDH, MGMT, TERT, 1p/19q, or other tested markers.',
      'List current medicines such as antiseizure drugs, steroids, anticoagulants, and any prior cancer or radiation history.',
    ],
    testsToAskAbout: [
      'Contrast brain MRI, with functional MRI, DTI, perfusion, or spectroscopy when useful for surgical planning.',
      'Tissue diagnosis by surgery or biopsy with histologic and molecular classification.',
      'Postoperative MRI within 24 to 72 hours to assess extent of resection and plan radiation/chemotherapy.',
      'Assessment for seizures, edema, blood clots, infection, cognition, and rehabilitation needs.',
    ],
    questionsForDoctor: [
      'Is my tumor close to important functional areas, and is the goal complete resection, debulking, or biopsy?',
      'What do the pathology and molecular results mean, and how does MGMT methylation affect chemotherapy discussion?',
      'Do standard chemoradiation, tumor treating fields, or a clinical trial fit my situation?',
      'Which symptoms suggest raised pressure, seizure, or clot and require emergency care?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GBM can cause symptoms from the tumor itself, surrounding edema, and increased pressure inside the skull. Common symptoms include new or worsening headache, seizures, nausea or vomiting, sleepiness, one-sided weakness or numbness, speech difficulty, vision-field loss, unsteady walking, memory changes, and personality change.</p><p>Symptoms depend on tumor location. They may progress over days to weeks, or first appear as reduced work ability or family noticing that the person has changed. Any first seizure in an adult needs careful brain evaluation.</p>',
    diagnosis:
      '<p>Contrast brain MRI is usually the key initial test. Imaging can suggest high-grade glioma, but confirmation depends on surgical or biopsy tissue with histology and molecular pathology, including IDH status and MGMT promoter methylation when available.</p><p>Mimics include brain metastasis, lymphoma, abscess, demyelinating disease, post-stroke change, and other gliomas. Early postoperative MRI helps assess the extent of resection and plan next treatment.</p>',
    treatment:
      '<p>Treatment aims to remove as much tumor as safely possible while protecting neurologic function, followed by radiation with temozolomide and then additional temozolomide in many patients. If resection is unsafe, biopsy or decompression may still be useful.</p><p>Selected patients may discuss tumor treating fields, treatment at recurrence, repeat surgery, re-irradiation, medicines, or clinical trials. Supportive care includes antiseizure treatment, steroids for edema, rehabilitation, nutrition, psychological care, and palliative care.</p>',
    longTermCare:
      '<p>Follow-up includes regular brain MRI, neurologic assessment, blood counts and liver/kidney monitoring, seizure control, steroid side-effect management, and rehabilitation planning. Imaging changes may require distinguishing true progression from pseudoprogression or radiation-related change.</p><p>Caregivers should be included in medication management, fall prevention, driving and work-safety decisions, and advance care planning.</p>',
    fertilityOrFamily:
      '<p>Most GBM is not inherited, so family screening is usually not needed. Younger patients facing radiation or chemotherapy can ask about fertility preservation before treatment. Multiple relatives with early cancers may justify genetic counseling.</p>',
    emergencySigns:
      '<p>First or ongoing seizure, severe headache with vomiting or sleepiness, sudden weakness or speech difficulty, altered consciousness, fever with immune suppression, chest pain or shortness of breath, or one-sided leg swelling needs emergency care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NCI: Adult Central Nervous System Tumors Treatment (PDQ), Patient Version',
      type: 'official',
      url: 'https://www.cancer.gov/types/brain/patient/adult-brain-treatment-pdq',
    },
  ],
  symptoms:
    '<p>Common symptoms include new or worsening headache, seizures, nausea or vomiting, sleepiness, weakness, speech or vision changes, unsteady walking, and memory or personality changes.</p>',
  diagnosis:
    '<p>Contrast brain MRI is central, but confirmation requires surgical or biopsy tissue with histologic and molecular pathology, followed by early postoperative MRI for treatment planning.</p>',
  treatment:
    '<p>Common care uses maximal safe resection followed by radiation with temozolomide and additional chemotherapy; selected patients may consider tumor treating fields, recurrence treatment, or clinical trials.</p>',
  prognosis:
    '<p>GBM has a high risk of progression. Care focuses on extending survival, preserving neurologic function and quality of life, and coordinating imaging follow-up, symptom control, rehabilitation, and caregiver support.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 392,
    name: 'glioblastoma-journey.png',
    url: '/images/diseases/glioblastoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

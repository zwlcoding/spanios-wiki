import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMalignantPleuralMesothelioma: DiseaseDraft = {
  ...entity(2047, 'disease-malignant-pleural-mesothelioma'),
  name: 'Malignant pleural mesothelioma',
  nameEn: 'Malignant pleural mesothelioma',
  alias:
    'MPM; pleural malignant mesothelioma; China Second Rare Disease Catalog item 47',
  slug: 'malignant-pleural-mesothelioma',
  oneSentence:
    'Malignant pleural mesothelioma is a rare cancer of the pleural lining, often linked to asbestos exposure, that may first look like recurrent pleural fluid, breathlessness, or chest pain.',
  plainName:
    'A rare pleural cancer that often causes fluid, breathlessness, and chest pain',
  prevalence:
    "Included in China's second rare disease catalog; it is uncommon overall, but risk is higher after asbestos or related occupational exposure, often many years earlier.",
  quickLook: {
    whatItIs:
      'This is a cancer of the pleural surface rather than ordinary lung cancer. Common clues include recurrent pleural effusion, breathlessness, chest pain, cough, fatigue, and weight loss.',
    whoToSeeFirst:
      'Start with pulmonology or thoracic surgery for unexplained unilateral or recurrent pleural effusion, then move to an oncology multidisciplinary team experienced in pleural tumors.',
    isGenetic:
      'Most cases are related to environmental or occupational exposure rather than inherited disease. Young onset or a family pattern of mesothelioma, melanoma, or kidney cancer may warrant BAP1 counseling.',
    hasTreatment:
      'Treatment depends on stage, histology, and overall fitness and may include chemotherapy, immunotherapy, selected surgery, radiation, pleural fluid control, symptom care, and clinical trials.',
    commonDelayReason:
      'It can be mistaken for pneumonia, tuberculosis pleurisy, ordinary effusion, or lung cancer spread to the pleura. Diagnosis is often delayed if enough pleural tissue is not obtained.',
  },
  patientJourney: {
    whenToSuspect: [
      'Persistent or recurrent one-sided pleural effusion with breathlessness, chest pain, cough, fatigue, or weight loss.',
      'Past asbestos, insulation, shipyard, construction, brake material, mining, or dust exposure.',
      'Repeated negative or unclear pleural fluid cytology while imaging shows pleural thickening, nodules, or loculated fluid.',
      'Symptoms continue despite treatment for pneumonia, tuberculosis, or nonspecific pleurisy.',
    ],
    commonWrongTurns: [
      'Draining fluid repeatedly without arranging pleural biopsy when the cause remains unclear.',
      'Assuming lung cancer with pleural spread without adequate pathology and immunohistochemistry.',
      'Missing asbestos or occupational exposure that happened decades earlier.',
    ],
    firstDepartments: [
      'Pulmonology',
      'Thoracic surgery',
      'Medical oncology',
      'Palliative care or pain clinic',
    ],
    diagnosisChecklist: [
      'Collect dates of pleural effusion, drainage records, fluid tests, cytology, cultures, and tuberculosis testing.',
      'Bring CT, PET-CT, or MRI images and reports.',
      'Prepare a full job and residence exposure history, especially asbestos or old insulation, shipyard, construction, or brake material exposure.',
      'If biopsy has been done, bring pathology slides, immunohistochemistry, and molecular testing reports.',
    ],
    testsToAskAbout: [
      'Contrast chest CT and, when useful, PET-CT or MRI for pleural extent and staging.',
      'Thoracoscopic or image-guided pleural biopsy to obtain enough tissue.',
      'Histologic subtype and immunohistochemistry to distinguish epithelioid, sarcomatoid, or biphasic mesothelioma from metastatic cancer.',
      'Tumor molecular testing and BAP1-related genetic counseling in young or familial cases.',
    ],
    questionsForDoctor: [
      'Does the pathology prove mesothelioma, or could this be another cancer involving the pleura?',
      'What are the histologic subtype and stage, and what is the treatment goal?',
      'Am I a candidate for chemotherapy, immunotherapy, surgery, radiation, or a clinical trial?',
      'If fluid keeps returning, would pleurodesis or an indwelling pleural catheter help my breathing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Malignant pleural mesothelioma often begins with breathlessness, chest pain, cough, chest tightness, fatigue, or unexplained weight loss. Many people first learn they have a one-sided pleural effusion; drainage may help briefly, but the fluid can return.</p><p>As disease progresses, pleural thickening, chest wall pain, reduced activity tolerance, poor appetite, low-grade fever, or blood clots may occur. Symptoms do not always match the full extent of disease, so imaging and tissue diagnosis are important.</p>',
    diagnosis:
      '<p>Diagnosis combines exposure history, imaging, pleural fluid evaluation, and pleural tissue pathology. Pleural fluid cytology may be insufficient, so thoracoscopy or image-guided pleural biopsy is often needed.</p><p>Pathologists use immunohistochemistry to confirm mesothelial origin and to distinguish mesothelioma from lung adenocarcinoma, other metastatic cancers, pleurisy, and tuberculosis. Staging may include contrast CT, PET-CT, MRI, and evaluation for lymph node or distant spread.</p>',
    treatment:
      '<p>Treatment should be planned by a multidisciplinary team familiar with pleural tumors. Options can include pemetrexed plus platinum chemotherapy, immunotherapy, sometimes anti-angiogenic or other systemic therapy, and selected surgery for people with localized, operable disease and good performance status.</p><p>Radiation may help local control or pain. Pleural fluid management is often central and may include drainage, pleurodesis, or an indwelling pleural catheter. Symptom control, nutrition, pain care, and breathlessness management should begin early.</p>',
    longTermCare:
      '<p>Follow-up tracks symptoms, fluid recurrence, imaging changes, side effects, and quality of life. Keeping a record of breathlessness, pain location, weight, treatment effects, and drainage frequency helps the team adjust care.</p><p>If asbestos or occupational exposure is relevant, occupational medicine records and documentation may matter. Avoiding further exposure and stopping smoking reduce additional lung risks.</p>',
    fertilityOrFamily:
      '<p>Most malignant pleural mesothelioma is not inherited. If onset is young or the family has mesothelioma, uveal or skin melanoma, kidney cancer, or related tumors, ask whether BAP1 tumor predisposition counseling is appropriate.</p>',
    emergencySigns:
      '<p>Seek urgent care for rapidly worsening breathlessness, severe chest pain, coughing blood, fainting, fever with chills, one-sided leg swelling or pain, sudden chest tightness, or symptoms concerning for pulmonary embolism. Redness, pus, or high fever around a pleural catheter also needs prompt care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Mesothelioma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/mesothelioma/treatment',
    },
    {
      name: 'MedlinePlus: Mesothelioma',
      type: 'official',
      url: 'https://medlineplus.gov/mesothelioma.html',
    },
  ],
  symptoms:
    '<p>Common symptoms include one-sided or recurrent pleural effusion, breathlessness, chest pain, cough, fatigue, and weight loss.</p>',
  diagnosis:
    '<p>Diagnosis relies on imaging, pleural fluid evaluation, and pleural biopsy with pathology and immunohistochemistry to distinguish mesothelioma from metastatic lung cancer, tuberculosis, and other pleural diseases.</p>',
  treatment:
    '<p>Treatment may include chemotherapy, immunotherapy, selected surgery or radiation, pleural fluid control, pain and breathlessness care, and clinical trials.</p>',
  prognosis:
    '<p>Malignant pleural mesothelioma is usually aggressive. Outlook depends on stage, histologic subtype, performance status, and treatment access; early referral to an experienced team helps clarify options.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 401,
    name: 'malignant-pleural-mesothelioma-journey.png',
    url: '/images/diseases/malignant-pleural-mesothelioma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

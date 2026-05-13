import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePolycythaemiaVera: DiseaseDraft = {
  ...entity(2062, 'disease-polycythaemia-vera'),
  name: 'Polycythaemia vera',
  nameEn: 'Polycythaemia vera',
  alias: 'PV; polycythemia vera; China Second Rare Disease Catalog item 62',
  slug: 'polycythaemia-vera',
  oneSentence:
    'Polycythaemia vera is a myeloproliferative neoplasm in which the bone marrow makes too many red blood cells, often with high white cells or platelets, thickening blood and increasing clot risk.',
  plainName:
    'A chronic bone marrow disorder with too many blood cells and clot risk',
  prevalence:
    "Included in China's second rare disease catalog; it is more common in older adults but can occur in younger people and must be distinguished from secondary erythrocytosis.",
  quickLook: {
    whatItIs:
      'PV is a chronic myeloproliferative neoplasm. Most patients have a JAK2 variant, and hematocrit control is central to clot-risk management.',
    whoToSeeFirst:
      'Repeated high hemoglobin or hematocrit, especially with high platelets, high white cells, enlarged spleen, or thrombosis, should be assessed by hematology.',
    isGenetic:
      'JAK2 is usually an acquired somatic variant, not a typical inherited family mutation. Relatives are not routinely screened unless there is clear familial clustering.',
    hasTreatment:
      'Care aims to reduce clot and bleeding risk and control symptoms. Treatment may include phlebotomy, low-dose aspirin, cardiovascular risk control, and cytoreductive therapy for higher-risk patients.',
    commonDelayReason:
      'Some people are found only on routine blood tests; others are labeled as having thick blood, smoking effects, or altitude effects without EPO, JAK2, and marrow evaluation.',
  },
  patientJourney: {
    whenToSuspect: [
      'Hemoglobin or hematocrit is repeatedly high, sometimes with high white cells or platelets.',
      'Itching after a hot shower, headache, dizziness, facial redness, blurred vision, ringing ears, or fatigue.',
      'Burning red hands or feet, enlarged spleen, early fullness, left upper abdominal discomfort, or arterial or venous thrombosis.',
      'Unusual clots in younger people, such as abdominal, portal, or cerebral venous thrombosis.',
    ],
    commonWrongTurns: [
      'Calling it thick blood and using supplements without confirming PV versus secondary erythrocytosis.',
      'Repeated phlebotomy without a hematocrit target, iron status, and clot-risk plan.',
      'Focusing only on red cells while missing white cells, platelets, spleen, bleeding risk, and myelofibrosis transformation.',
    ],
    firstDepartments: [
      'Hematology',
      'Thrombosis clinic',
      'Cardiology for complications or risk factors',
      'Emergency department for suspected clot or bleeding',
    ],
    diagnosisChecklist: [
      'Bring serial CBCs, hematocrit, hemoglobin, white cell, platelet, and iron studies.',
      'List smoking, sleep apnea, lung disease, altitude exposure, medicines, testosterone or erythropoietin use, and hypoxia clues.',
      'Bring EPO, JAK2 V617F/exon 12, bone marrow biopsy, spleen ultrasound, or imaging results.',
      'Record prior clots, bleeding, pregnancy complications, and cardiovascular risk factors.',
    ],
    testsToAskAbout: [
      'JAK2 V617F and exon 12 testing plus serum erythropoietin level.',
      'Whether bone marrow biopsy is needed to confirm MPN and assess fibrosis.',
      'Thrombosis risk stratification using age, prior thrombosis, JAK2, blood counts, and cardiovascular risks.',
      'Target hematocrit, aspirin suitability, phlebotomy schedule, and need for cytoreductive treatment.',
    ],
    questionsForDoctor: [
      'Is this PV or secondary erythrocytosis, and what evidence supports that?',
      'Am I low-risk or high-risk for thrombosis, and what hematocrit target should I keep?',
      'Is phlebotomy and aspirin enough, or do I need hydroxyurea, interferon, or a JAK inhibitor?',
      'Which symptoms suggest thrombosis, bleeding, myelofibrosis, or acute leukemia transformation?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PV may cause no symptoms or may cause headache, dizziness, fatigue, facial redness, blurred vision, ringing ears, night sweats, weight loss, itching after hot showers, and burning redness of the hands or feet. Enlarged spleen can cause left upper abdominal discomfort or early fullness.</p><p>The major concern is thrombosis and bleeding. Clots can occur in the brain, heart, legs, lungs, abdominal veins, or portal vein. Platelet dysfunction or very high platelets can also contribute to bleeding.</p>',
    diagnosis:
      '<p>Diagnosis is not based on high hemoglobin alone. Clinicians exclude secondary erythrocytosis from hypoxia, sleep apnea, lung disease, smoking, altitude, kidney tumors, testosterone, or erythropoietin use.</p><p>PV diagnosis usually combines hematocrit or hemoglobin, JAK2 mutation, low EPO, bone marrow biopsy, and trilineage proliferation. Iron deficiency can mask the degree of erythrocytosis and should be reviewed.</p>',
    treatment:
      '<p>The main treatment goal is to reduce thrombosis risk. Many patients need phlebotomy to maintain the hematocrit at a target set by the hematologist. Low-dose aspirin is often used when not contraindicated, especially for microvascular symptoms and clot-risk management.</p><p>Older age, prior thrombosis, difficult symptom or count control, or high-risk disease may require cytoreductive therapy such as hydroxyurea, interferon or ropeginterferon, or ruxolitinib when hydroxyurea is not tolerated or ineffective. Blood pressure, lipids, diabetes, smoking, and weight should also be addressed.</p>',
    longTermCare:
      '<p>PV requires long-term hematology follow-up. Monitoring includes CBC, hematocrit, iron status, spleen, clotting and bleeding events, medication side effects, itching, and quality of life.</p><p>A minority progress to myelofibrosis or acute leukemia. Worsening anemia, marked spleen enlargement, weight loss, fever, night sweats, bone pain, or abnormal blood smear changes should prompt review.</p>',
    fertilityOrFamily:
      '<p>PV-related JAK2 variants are usually acquired and do not require routine family screening. Pregnancy or reproductive-age patients need hematology and obstetric planning because thrombosis and pregnancy loss risk may be increased and medication choices change.</p>',
    emergencySigns:
      '<p>Emergency care is needed for sudden weakness or speech trouble, chest pain, shortness of breath, coughing blood, one-sided leg swelling, severe headache, sudden vision change, severe abdominal pain, black stools, vomiting blood, or uncontrolled bleeding.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Myeloproliferative Neoplasms Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/myeloproliferative/patient/chronic-treatment-pdq',
    },
    {
      name: 'Merck Manual Consumer Version: Polycythemia Vera',
      type: 'review',
      url: 'https://www.merckmanuals.com/home/blood-disorders/myeloproliferative-disorders/polycythemia-vera',
    },
  ],
  symptoms:
    '<p>PV may be silent or cause headache, dizziness, hot-shower itching, facial redness, blurred vision, burning hands or feet, enlarged spleen, thrombosis, or bleeding.</p>',
  diagnosis:
    '<p>Diagnosis combines sustained high hematocrit or hemoglobin, JAK2 variants, low EPO, bone marrow biopsy, and exclusion of secondary erythrocytosis.</p>',
  treatment:
    '<p>Care includes phlebotomy to control hematocrit, low-dose aspirin, cardiovascular risk control, and for high-risk or poorly controlled disease hydroxyurea, interferon, or JAK inhibitors.</p>',
  prognosis:
    '<p>Many people can be managed long term. The key risks are thrombosis and bleeding, with a minority progressing to myelofibrosis or acute leukemia.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 416,
    name: 'polycythaemia-vera-journey.png',
    url: '/images/diseases/polycythaemia-vera-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

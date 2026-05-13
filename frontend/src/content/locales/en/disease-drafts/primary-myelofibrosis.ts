import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryMyelofibrosis: DiseaseDraft = {
  ...entity(2067, 'disease-primary-myelofibrosis'),
  name: 'Primary myelofibrosis',
  nameEn: 'Primary myelofibrosis',
  alias:
    'PMF; primary myelofibrosis; China Second Rare Disease Catalog item 67',
  oneSentence:
    'Primary myelofibrosis is a rare myeloproliferative neoplasm in which bone marrow is gradually replaced by fibrous tissue, causing anemia, enlarged spleen, constitutional symptoms, bleeding, or clot risk.',
  plainName:
    'A chronic blood disorder where scar-like tissue makes bone marrow production harder',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 500,000 people worldwide, most often diagnosed at ages 50 to 80 but possible at any age.",
  quickLook: {
    whatItIs:
      'PMF is a myeloproliferative neoplasm. Fibrosis interferes with normal blood production, and the spleen or liver may take over some blood formation, causing enlargement and abnormal blood counts.',
    whoToSeeFirst:
      'Anemia, fatigue, left upper abdominal fullness, enlarged spleen, night sweats, fever, weight loss, bone pain, or persistent blood count abnormalities should be assessed by hematology.',
    isGenetic:
      'Common drivers include acquired somatic JAK2, CALR, or MPL variants. This is usually not a parent-to-child single-gene disorder, though rare familial clustering needs specialist review.',
    hasTreatment:
      'Low-risk patients without symptoms may be observed. Options include transfusion and anemia care, JAK inhibitors for spleen and symptoms, medicines such as hydroxyurea for high counts, and transplant assessment for selected patients.',
    commonDelayReason:
      'Early disease may look like mild anemia, platelet change, or spleen enlargement and be labeled as iron deficiency, inflammation, liver or spleen disease, or another blood disorder before marrow and driver testing are done.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated anemia, white cell or platelet abnormalities, tear-drop red cells, or immature cells on blood smear.',
      'Enlarged spleen, left upper abdominal fullness, early satiety, weight loss, night sweats, low fever, bone pain, or marked fatigue.',
      'Prior polycythemia vera or essential thrombocythemia followed by anemia, spleen enlargement, or marrow fibrosis.',
      'Unexplained thrombosis, bleeding, recurrent infection, or transfusion need.',
    ],
    commonWrongTurns: [
      'Treating only iron deficiency or chronic inflammation while missing spleen enlargement, smear findings, and platelet or white-cell abnormalities.',
      'Following CBCs without bone marrow biopsy, BCR-ABL exclusion, and JAK2/CALR/MPL testing.',
      'Focusing only on spleen size without assessing symptom burden, anemia, clotting, bleeding, and transformation risk.',
    ],
    firstDepartments: [
      'Hematology',
      'Myeloproliferative neoplasm clinic',
      'Transfusion or thrombosis clinic when needed',
      'Transplant clinic for high-risk or younger patients',
    ],
    diagnosisChecklist: [
      'Bring serial CBCs, reticulocytes, iron studies, LDH, uric acid, and spleen ultrasound or CT.',
      'Bring blood smear, marrow aspirate or biopsy, reticulin stain, and pathology review.',
      'Bring JAK2, CALR, MPL, BCR-ABL, and other myeloid gene reports.',
      'Record night sweats, fever, weight loss, bone pain, early satiety, itching, clots, bleeding, transfusions, and infections.',
    ],
    testsToAskAbout: [
      'Bone marrow biopsy and fibrosis grade, and whether criteria fit prefibrotic or overt PMF.',
      'JAK2 V617F, CALR, MPL, BCR-ABL, and broader myeloid NGS for diagnosis and risk.',
      'DIPSS, MIPSS70, or other risk scoring, and whether transplant evaluation is appropriate.',
      'Assessment of anemia causes, iron overload, spleen size, thrombosis and bleeding risk, and leukemia transformation monitoring.',
    ],
    questionsForDoctor: [
      'Is this prefibrotic or overt PMF, and have CML, ET/PV-related fibrosis, and reactive causes been excluded?',
      'What is my risk category, and is observation, drug therapy, or transplant evaluation best now?',
      'How will we measure response for anemia, spleen symptoms, and constitutional symptoms?',
      'Which changes suggest marrow failure or acute leukemia transformation and need urgent review?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PMF can be silent early and found through blood counts or examination. As it progresses, anemia can cause fatigue, shortness of breath, and palpitations; abnormal white cells or platelets can increase infection, bleeding, or clot risk. Extramedullary blood formation can enlarge the spleen and cause left upper abdominal discomfort or early fullness.</p><p>Some people develop night sweats, low fever, weight loss, bone pain, itching, and severe fatigue. Blood smear may show tear-drop red cells, immature granulocytes, or nucleated red cells.</p>',
    diagnosis:
      '<p>Diagnosis requires CBC, blood smear, bone marrow aspirate, and bone marrow biopsy. The biopsy assesses megakaryocyte morphology, fibrosis grade, and other marrow diseases.</p><p>Molecular testing usually includes JAK2, CALR, MPL, and BCR-ABL to exclude chronic myeloid leukemia. Broader myeloid gene testing can help risk assessment. Clinicians also distinguish prefibrotic PMF, essential thrombocythemia, post-polycythemia vera or post-essential thrombocythemia myelofibrosis, and reactive marrow fibrosis.</p>',
    treatment:
      '<p>Treatment is based on symptoms and risk. Low-risk patients without symptoms may be monitored closely. Anemia care may include transfusions, erythropoiesis-stimulating agents, androgens, or immunomodulatory medicines depending on the case.</p><p>People with symptomatic spleen enlargement or constitutional symptoms may be assessed for JAK inhibitors such as ruxolitinib or other available medicines. Hydroxyurea may be used for high counts. Allogeneic stem cell transplant is the only potentially curative option for selected patients but carries substantial risk and is usually considered for appropriate intermediate- or high-risk disease.</p>',
    longTermCare:
      '<p>Follow-up tracks CBC, spleen size, symptom scores, iron overload, clots and bleeding, infections, medication adverse effects, and quality of life. Transfusion-dependent patients need iron overload assessment.</p><p>Rapidly worsening anemia, rising peripheral blasts, fast spleen enlargement, worsening fever, night sweats, weight loss, or bone pain should prompt reassessment for progression or acute leukemia transformation.</p>',
    fertilityOrFamily:
      '<p>PMF driver variants are usually acquired somatic changes, so relatives usually do not need routine genetic screening. Young patients, clear familial clustering, or transplant planning should prompt hematology and genetics or transplant-team discussion about family testing and donor choice.</p>',
    emergencySigns:
      '<p>Emergency care is needed for sudden weakness or speech trouble, chest pain, shortness of breath, one-sided leg swelling, uncontrolled bleeding, black stools, vomiting blood, high fever with chills, severe left upper abdominal pain, or extreme weakness.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Primary myelofibrosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/primary-myelofibrosis',
    },
    {
      name: 'National Cancer Institute: Myeloproliferative Neoplasms Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/myeloproliferative/patient/chronic-treatment-pdq',
    },
  ],
  symptoms:
    '<p>PMF may be silent or cause anemia, fatigue, shortness of breath, enlarged spleen with early fullness, night sweats, fever, weight loss, bone pain, infection, bleeding, or thrombosis.</p>',
  diagnosis:
    '<p>Diagnosis combines CBC, blood smear, marrow biopsy and fibrosis grade, JAK2/CALR/MPL driver testing, and exclusion of BCR-ABL-positive CML and secondary causes.</p>',
  treatment:
    '<p>Risk-adapted care may include observation, transfusion and anemia treatment, JAK inhibitors, hydroxyurea or other medicines, and allogeneic stem cell transplant assessment for selected patients.</p>',
  prognosis:
    '<p>Outlook varies widely by age, blood counts, symptoms, gene risk, blast percentage, and treatment options; a minority progress to acute leukemia.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'primary-myelofibrosis',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 421,
    name: 'primary-myelofibrosis-journey.png',
    url: '/images/diseases/primary-myelofibrosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

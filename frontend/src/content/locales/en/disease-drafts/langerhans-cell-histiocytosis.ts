import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLangerhansCellHistiocytosis: DiseaseDraft = {
  ...entity(5006, 'disease-langerhans-cell-histiocytosis'),
  name: 'Langerhans Cell Histiocytosis',
  nameEn: 'Langerhans Cell Histiocytosis',
  alias: 'LCH; histiocytosis X; China First Rare Disease Catalog item 60',
  slug: 'langerhans-cell-histiocytosis',
  oneSentence:
    'Langerhans cell histiocytosis is a rare disease characterized by abnormal proliferation of Langerhans cells that can affect bones, skin, the pituitary, and other organs; treatment is stratified by extent of involvement, and most single-system disease has a favorable prognosis.',
  plainName:
    'A rare disease where immune cells overgrow and can affect bones, skin, and the pituitary gland',
  prevalence:
    'Annual incidence is approximately 0.5–5.4 cases per million; most common in children, with peak age 1–3 years; pulmonary LCH in adults is rare and strongly associated with smoking.',
  searchIntents: [
    'Langerhans cell histiocytosis symptoms',
    'LCH bone lesion treatment',
    'Langerhans cell histiocytosis diabetes insipidus',
    'LCH children prognosis',
    'Langerhans cell histiocytosis chemotherapy',
  ],
  quickLook: {
    whatItIs:
      'Langerhans cells (a type of dendritic cell) abnormally proliferate and infiltrate tissues under certain signals, causing localized or systemic organ damage. The exact cause is unclear; associations with BRAF V600E and other mutations and immune dysregulation are recognized.',
    whoToSeeFirst:
      'Pediatric hematology-oncology, orthopedics, dermatology, or endocrinology for unexplained bone pain, persistent rash, or polyuria/polydipsia.',
    isGenetic:
      'Most cases are sporadic; approximately 50–60% of children have BRAF V600E or other somatic mutations; familial susceptibility is rare.',
    hasTreatment:
      'Treatment is stratified by organ involvement. Single-system disease may be observed, surgically curetted, or treated locally; multi-system disease requires chemotherapy (vinblastine and prednisone).',
    commonDelayReason:
      'Symptoms are diverse and nonspecific—rash may be mistaken for eczema, bone pain for growing pains, and polyuria for simple diabetes insipidus—leading to visits across multiple specialties before diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Unexplained bone pain, localized swelling, or pathologic fracture in a child.',
      'Persistent scalp or trunk rash resembling seborrheic dermatitis or eczema.',
      'Polyuria and polydipsia with low urine specific gravity suggesting diabetes insipidus (pituitary stalk involvement).',
      'Hepatosplenomegaly, lymphadenopathy, fever, or failure to thrive.',
      'Recurrent pneumothorax or cystic lung disease in a young adult smoker.',
    ],
    commonWrongTurns: [
      'Misdiagnosing bone lesions as osteomyelitis or bone tumors without biopsy.',
      'Treating skin rash as eczema or seborrheic dermatitis with long-term topical steroids.',
      'Managing polyuria as simple diabetes insipidus without investigating the cause.',
      'In adults, misdiagnosing pulmonary LCH as asthma or COPD.',
    ],
    firstDepartments: [
      'Pediatric hematology-oncology',
      'Orthopedics (bone-predominant)',
      'Dermatology (skin-predominant)',
      'Endocrinology (diabetes insipidus)',
      'Pulmonology (adult pulmonary LCH)',
    ],
    diagnosisChecklist: [
      'Document symptom sequence, duration, and aggravating factors.',
      'X-ray or CT of bone lesions (typically lytic).',
      'Skin biopsy with immunohistochemistry for CD1a, S100, and Langerin.',
      'Bone biopsy for confirmation.',
      'Systemic workup: CBC, liver and kidney function, pituitary MRI, abdominal ultrasound.',
      'BRAF V600E mutation testing if available.',
    ],
    testsToAskAbout: [
      'Imaging of affected sites (X-ray, CT, MRI).',
      'Tissue biopsy with IHC (CD1a, S100, Langerin).',
      'CBC, liver and kidney function, electrolytes.',
      'Pituitary MRI (for diabetes insipidus).',
      'BRAF V600E mutation testing.',
    ],
    questionsForDoctor: [
      "Is my child's disease single-system or multi-system?",
      'What is the treatment plan? Is chemotherapy needed?',
      'Is the BRAF mutation positive? How does that affect prognosis?',
      'Will the diabetes insipidus require lifelong medication?',
      'What side effects should I watch for during treatment?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Clinical presentation varies by organ and age. The most common manifestation in children is bone disease (single or multiple lytic lesions, often in the skull or long bones), presenting with localized pain, swelling, or pathologic fracture. Skin involvement includes seborrheic dermatitis-like, eczematous, or purpuric rash on the scalp or trunk. Pituitary stalk infiltration causes central diabetes insipidus (polydipsia and polyuria). Hepatosplenomegaly, lymphadenopathy, and fever suggest multi-system disease. Adult pulmonary LCH occurs predominantly in young smokers and presents with dyspnea, recurrent pneumothorax, and dry cough.</p>',
    diagnosis:
      '<p>Diagnosis requires histopathology: biopsy shows Langerhans cell infiltration with characteristic reniform or coffee-bean nuclei, and positive immunohistochemistry for CD1a, S100, and Langerin (CD207). Bone imaging shows lytic lesions. Systemic extent is evaluated with CBC, liver and kidney function, abdominal ultrasound, pituitary MRI, and chest CT. BRAF V600E mutation testing helps assess prognosis and guide targeted therapy.</p>',
    treatment:
      '<p>Treatment is stratified by extent of disease. Single-system bone disease: observation, surgical curettage, or intralesional steroid injection. Single-system skin disease: topical therapies or phototherapy. Multi-system disease: standard first-line chemotherapy is vinblastine plus prednisone for approximately 12 months. BRAF V600E–positive refractory cases may benefit from BRAF inhibitors (e.g., vemurafenib). Diabetes insipidus requires desmopressin (DDAVP). Adult pulmonary LCH mandates smoking cessation; severe cases may be considered for sirolimus or lung transplantation.</p>',
    longTermCare:
      '<p>Long-term follow-up is needed to monitor bone lesion healing, diabetes insipidus control, growth and development, hearing, dental development, and endocrine function. Regular imaging is needed to detect new lesions. Late effects of chemotherapy (hearing loss, dental abnormalities, endocrine disorders) should be monitored. Patient education includes avoiding trauma to affected bones, adhering to medication, and keeping follow-up appointments.</p>',
    fertilityOrFamily:
      '<p>Most cases are sporadic; inheritance pattern is unclear. Rare familial clustering suggests genetic susceptibility. Genetic counseling is advisable for families with multiple affected members. Patients in reproductive age should plan pregnancy during disease remission under specialist guidance.</p>',
    emergencySigns:
      '<p>Pathologic fracture, severe headache or sudden vision loss (suggesting intracranial involvement or worsening diabetes insipidus), dyspnea or pneumothorax, persistent high fever with systemic collapse require immediate care.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Langerhans Cell Histiocytosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK7037/',
    },
    {
      name: 'NORD: Langerhans Cell Histiocytosis',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/langerhans-cell-histiocytosis/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Bone pain, rash, polydipsia/polyuria, hepatosplenomegaly, lymphadenopathy, fever; adult pulmonary LCH presents with dyspnea and pneumothorax.</p>',
  diagnosis:
    '<p>Tissue biopsy with IHC (CD1a, S100, Langerin positive); imaging for bone lesions; systemic workup; BRAF V600E testing.</p>',
  treatment:
    '<p>Single-system: observation or local therapy; multi-system: chemotherapy (vinblastine + prednisone); BRAF-targeted therapy for refractory BRAF+ disease; DDAVP for diabetes insipidus.</p>',
  prognosis:
    '<p>Single-system disease has an excellent prognosis and often resolves spontaneously; multi-system involvement (especially liver, lung, hematopoietic system) carries a worse prognosis; modern chemotherapy has significantly improved survival.</p>',
  sourceName: 'GeneReviews: Langerhans Cell Histiocytosis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7037/',
  categorySlug: 'oncology',
  charityIds: [79],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5006,
    name: 'langerhans-cell-histiocytosis-journey.png',
    url: '/images/diseases/langerhans-cell-histiocytosis-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

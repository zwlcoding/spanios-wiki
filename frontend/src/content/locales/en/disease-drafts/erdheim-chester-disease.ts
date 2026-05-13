import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseErdheimChesterDisease: DiseaseDraft = {
  ...entity(26, 'disease-erdheim-chester-disease'),
  name: 'Erdheim-Chester Disease',
  nameEn: 'Erdheim-Chester Disease',
  alias: 'ECD, Erdheim-Chester disease, non-Langerhans cell histiocytosis',
  slug: 'erdheim-chester-disease',
  oneSentence:
    'Erdheim-Chester Disease (ECD) is an extremely rare histiocytic neoplasm/histiocytosis that can affect long bones, perirenal tissue, cardiovascular system, lungs, orbits, brain, pituitary gland, and other sites.',
  plainName:
    'A rare blood and immune-related disease where abnormal histiocytes accumulate and infiltrate multiple organs',
  prevalence:
    'Global case numbers are very few, primarily affecting adults. The actual number of affected individuals may be underestimated due to misdiagnosis and missed diagnoses.',
  quickLook: {
    whatItIs:
      'Histiocytes are a type of cell in the immune system. In ECD, these cells multiply abnormally and infiltrate tissues and organs, causing inflammation, fibrosis, or organ damage; many patients can be found to have somatic mutations in BRAF or MAPK-ERK pathway genes.',
    whoToSeeFirst:
      'When experiencing unexplained bilateral long bone pain, exophthalmos (protruding eyes), diabetes insipidus, perirenal/retroperitoneal fibrosis, pericardial or periaortic lesions, or lung or central nervous system involvement, seek evaluation from hematology/histiocyte disease specialists or oncology.',
    isGenetic:
      'Usually not a hereditary condition. Associated mutations are typically somatically acquired and do not necessarily mean they will be passed to children.',
    hasTreatment:
      'There are options including molecular testing-guided targeted therapy, immunotherapy/anti-inflammatory therapy, and organ support treatment, but an experienced multidisciplinary team should develop a plan based on organ involvement and mutation status.',
    commonDelayReason:
      'Symptoms involve many different specialties—orthopedics, ophthalmology, nephrology, cardiovascular, respiratory, neurology, and endocrinology—and imaging findings can be mistaken for fibrosis, inflammation, or other tumors.',
  },
  patientJourney: {
    whenToSuspect: [
      'Adults with long-term bilateral shin or thigh bone pain, with imaging showing symmetric long bone sclerosis.',
      'Coexisting diabetes insipidus, orbital mass or eye protrusion together with bone pain and retroperitoneal or cardiovascular imaging abnormalities.',
      'CT/MRI showing perirenal wrapping, retroperitoneal fibrosis, periaortic wrapping, or right atrial pseudomass.',
      'Multisystem involvement of lungs, heart, kidneys, central nervous system, or pituitary that standard diagnostic workup cannot explain.',
      'Biopsy suggesting non-Langerhans cell histiocytosis, requiring further molecular testing.',
    ],
    commonWrongTurns: [
      'Managing only as osteoarthritis, fibrosis, IgG4-related disease, lymphoma, or metastatic tumor without tissue pathology and molecular testing.',
      'Organ problems seen by different specialists separately, without connecting bone pain, diabetes insipidus, orbital, and retroperitoneal imaging findings.',
      'Only imaging suspicion but without obtaining appropriate tissue biopsy, resulting in inability to confirm subtype and mutation status.',
      'Overlooking cardiovascular and central nervous system involvement, which significantly affects risk assessment.',
    ],
    firstDepartments: [
      'Hematology/Histiocyte Disease Specialty',
      'Oncology',
      'Rheumatology and Immunology (for differentiating IgG4-related disease, vasculitis, etc.)',
      'Endocrinology (when diabetes insipidus or pituitary involvement is present)',
      'Cardiovascular, Nephrology, Respiratory, Neurology, Ophthalmology, and other affected organ specialties as needed',
    ],
    diagnosisChecklist: [
      'Gather information on bone pain, urine output changes, eye symptoms, chest tightness or shortness of breath, neurological symptoms, and kidney or retroperitoneal imaging.',
      'Bring PET-CT, bone scan, CT/MRI, cardiac imaging, and prior pathology slides or block information.',
      'Confirm with your doctor whether lesion tissue biopsy is needed, and whether BRAF and MAPK-ERK pathway-related molecular testing should be performed.',
      'Assess the extent of cardiac, central nervous system, lung, kidney, and endocrine involvement.',
      'Confirm whether Langerhans cell histiocytosis, Rosai-Dorfman disease, IgG4-related disease, lymphoma, and infections have been ruled out.',
    ],
    testsToAskAbout: [
      'Lesion tissue biopsy, immunohistochemistry, and review by hematopathology/histiocyte disease experts.',
      'BRAF V600E and MAPK-ERK pathway-related molecular testing.',
      'Whole-body PET-CT, bone scan, or imaging focused on long bones.',
      'Cardiac MRI/ultrasound, chest and abdomen CT, brain and pituitary MRI.',
      'Kidney function tests, inflammation markers, endocrine function tests, and diabetes insipidus-related assessments.',
    ],
    questionsForDoctor: [
      'Do my imaging and pathology findings fit ECD? What additional tissue or imaging review is needed?',
      'Are there BRAF or other MAPK pathway mutations? How will this affect treatment options?',
      'Which organs are currently most affected and impacting my risk? Which specialists should be involved in my care?',
      'What indicators will be used to judge treatment effectiveness? How often should I have imaging and organ function rechecked?',
      'Which symptoms indicate I need emergency care for cardiac, central nervous system, or kidney problems?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>ECD can affect long bones, skin, lungs, heart, kidneys, retroperitoneum, orbits, brain, pituitary gland, and other tissues. Common clues include bone pain, fatigue, fever, weight loss, eye protrusion or orbital mass, diabetes insipidus, perirenal or retroperitoneal fibrosis, lung symptoms, cardiovascular involvement, and neurological symptoms. There is great variation among patients, and some may present with a single organ problem.</p>',
    diagnosis:
      '<p>Diagnosis requires combining typical imaging, affected organ manifestations, lesion tissue biopsy, immunohistochemistry, and molecular testing. International consensus emphasizes that even when imaging is highly suggestive, tissue should be obtained when possible to confirm the diagnosis and test for BRAF/MAPK-ERK pathway mutations. Doctors also need to differentiate other histiocytic diseases, IgG4-related disease, vasculitis, lymphoma, infections, and metastatic tumors.</p>',
    treatment:
      '<p>Treatment depends on symptom severity, extent of organ involvement, and molecular testing results, and may include targeted therapy, immunotherapy or anti-inflammatory therapy, local/organ support treatment, and multidisciplinary follow-up. Those with cardiac, central nervous system, lung, or kidney involvement typically require closer monitoring. Patients should not self-prescribe based on tumor or inflammatory disease experience.</p>',
    longTermCare:
      '<p>Long-term care focuses on monitoring affected organ function, treatment response, imaging changes, and drug side effects. It is recommended to keep pathology reports, molecular testing results, PET-CT/CT/MRI materials, and key laboratory values to help the multidisciplinary team assess progression at follow-up visits.</p>',
    fertilityOrFamily:
      '<p>ECD is generally not a hereditary disease. Common molecular changes are mostly somatic mutations. When planning for children, the focus should be on discussing disease activity, organ involvement, and the effects of current treatments on pregnancy with your care team.</p>',
    emergencySigns:
      '<p>When experiencing sudden chest pain, shortness of breath, fainting, neurological deficits, severe headache, altered consciousness, significant changes in urine output, rapid worsening of kidney function, or rapid worsening of orbital symptoms, seek emergency care or contact your care team promptly.</p>',
  },
  sources: [
    {
      name: 'NCI Dictionary: Erdheim-Chester disease',
      type: 'official',
      url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/erdheim-chester-disease',
    },
    {
      name: 'GARD: Erdheim-Chester disease',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
    },
    {
      name: 'Blood: ECD consensus recommendations in the molecular era',
      type: 'clinical-guideline',
      url: 'https://ashpublications.org/blood/article/135/22/1929/452713/Erdheim-Chester-disease-consensus-recommendations',
    },
  ],
  symptoms:
    '<p>Can present with long bone pain, diabetes insipidus, orbital lesions, retroperitoneal/perirenal fibrosis, lung, heart, or central nervous system involvement, as well as fever, fatigue, and weight loss.</p>',
  diagnosis:
    '<p>Evaluation relies on imaging, affected tissue biopsy, immunohistochemistry, BRAF/MAPK pathway molecular testing, and multisystem involvement assessment.</p>',
  treatment:
    '<p>Treatment needs to be individualized based on mutation status and organ involvement, and may include targeted therapy, immunotherapy/anti-inflammatory therapy, and organ support.</p>',
  prognosis:
    '<p>Prognosis varies widely, depending on involvement of key organs such as heart, central nervous system, lungs, and kidneys, as well as treatment response.</p>',
  sourceName: 'GARD: Erdheim-Chester disease',
  sourceUrl:
    'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 325,
    name: 'erdheim-chester-disease-journey.png',
    url: '/images/diseases/erdheim-chester-disease-journey.png',
  },
  tagSlugs: [],
};

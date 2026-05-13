import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeuroblastoma: DiseaseDraft = {
  ...entity(2053, 'disease-neuroblastoma'),
  name: 'Neuroblastoma',
  nameEn: 'Neuroblastoma',
  alias: 'Childhood neuroblastoma; China Second Rare Disease Catalog item 53',
  slug: 'neuroblastoma',
  oneSentence:
    'Neuroblastoma is a sympathetic nervous system cancer seen mostly in infants and children, arising in the adrenal gland or paraspinal nerve tissue with highly variable risk and treatment intensity.',
  plainName: 'A childhood nerve-cell cancer treated according to risk group',
  prevalence:
    "Included in China's second rare disease catalog; it is an uncommon childhood cancer, usually diagnosed before age 5, and sometimes found before birth or in infancy.",
  quickLook: {
    whatItIs:
      'Neuroblastoma arises from immature nerve tissue, often in the adrenal gland or along the spine. Behavior varies widely: some infant tumors regress, while high-risk disease needs intensive multimodal treatment.',
    whoToSeeFirst:
      'A child with an abdominal mass, bone pain, eye bruising, unexplained fever, or weight loss should be assessed by pediatrics, pediatric oncology, or pediatric surgery.',
    isGenetic:
      'Most cases are not inherited. Very early onset, multifocal or bilateral adrenal disease, or family history may justify ALK, PHOX2B, or related genetic counseling.',
    hasTreatment:
      'Treatment is risk-adapted and may include observation, surgery, chemotherapy, radiation, autologous stem cell transplant, immunotherapy, differentiation therapy, targeted therapy, or trials.',
    commonDelayReason:
      'Early symptoms can resemble abdominal pain, constipation, infection, growing pains, anemia, or trauma unless the mass, bone pain, eye signs, and urine catecholamine clues are connected.',
  },
  patientJourney: {
    whenToSuspect: [
      'A lump in the abdomen, neck, or chest with distension, poor appetite, weight loss, or prolonged fever.',
      'Bone pain, limp, refusal to walk, anemia, easy bruising, eye bulging, or dark circles around the eyes.',
      'In an infant, bluish skin nodules, enlarged liver, breathing trouble, or rapidly enlarging abdomen.',
      'Severe watery diarrhea, high blood pressure, Horner syndrome, abnormal eye movements, or spinal cord compression with limb weakness.',
    ],
    commonWrongTurns: [
      'Calling bone pain growing pains, trauma, or arthritis without imaging and blood evaluation.',
      'Treating abdominal pain or distension repeatedly as infection or gastrointestinal illness without examination and imaging.',
      'Looking only at the primary mass and missing urine VMA/HVA, MIBG, bone marrow, and molecular risk testing.',
    ],
    firstDepartments: [
      'Pediatric oncology',
      'Pediatric surgery',
      'Pediatric emergency department',
      'Pediatric hematology-oncology multidisciplinary clinic',
    ],
    diagnosisChecklist: [
      'Record symptom timing, pain sites, fever, weight, night pain, activity limitation, and neurologic changes.',
      'Bring ultrasound, CT, MRI, MIBG/PET, bone scan, and laboratory reports.',
      'Collect urine catecholamine metabolites, LDH, ferritin, blood counts, marrow tests, and pathology reports.',
      'If diagnosed, bring MYCN, ALK, chromosomal changes, histology, and INRG or risk-group information.',
    ],
    testsToAskAbout: [
      'Urine VMA/HVA, LDH, ferritin, and baseline organ function.',
      'CT or MRI of the primary tumor, MIBG scan or PET, and bone marrow aspiration/biopsy.',
      'Tumor biopsy with immunohistochemistry plus MYCN amplification, ALK, chromosomal changes, and other risk markers.',
      'Genetic counseling when family history, bilateral or multifocal disease, or very early onset is present.',
    ],
    questionsForDoctor: [
      'Is my child low-risk, intermediate-risk, or high-risk, and what evidence defines that group?',
      'Is the treatment goal observation or surgery, or will chemotherapy, transplant, or immunotherapy be needed?',
      'Is the tumor compressing the spinal cord or affecting kidneys, breathing, or blood pressure urgently?',
      'How will recurrence, hearing, heart, kidney, growth, development, and learning be monitored after treatment?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Symptoms depend on tumor site and spread. Abdominal tumors can cause distension, pain, constipation, poor appetite, or a palpable mass; chest or neck tumors can cause cough, breathing problems, Horner syndrome, or swallowing difficulty.</p><p>Bone or marrow spread can cause bone pain, limp, refusal to walk, anemia, fever, bleeding, or bruising. Eye bruising, bulging eyes, bluish skin nodules, severe watery diarrhea, high blood pressure, abnormal eye movements, and spinal cord compression are important warning clues.</p>',
    diagnosis:
      '<p>Diagnosis usually includes imaging, catecholamine metabolites, tissue pathology, and staging. Elevated urine VMA/HVA can support the diagnosis but does not replace pathology and risk grouping. CT or MRI evaluates the primary tumor and vital structures; MIBG is commonly used for whole-body assessment, with PET in some cases.</p><p>Pathology and molecular risk markers guide treatment intensity. The team assesses age, stage, histology, MYCN amplification, ALK changes, chromosomal changes, marrow involvement, and response. Rare familial cases may need ALK or PHOX2B counseling.</p>',
    treatment:
      '<p>Treatment is determined by risk group. Low-risk infants or localized tumors may be observed or treated mainly with surgery; intermediate-risk disease often combines surgery and chemotherapy; high-risk disease usually requires induction chemotherapy, surgery, high-dose therapy with autologous stem cell transplant, radiation, anti-GD2 immunotherapy, retinoid differentiation therapy, maintenance or trials.</p><p>Care also manages infection, anemia, nutrition, pain, nausea, hearing, heart and kidney function, and family stress. Spinal cord compression, breathing compromise, or hypertensive crisis requires urgent treatment.</p>',
    longTermCare:
      '<p>Follow-up looks for both relapse and child development. Surveillance can include imaging, urine catecholamines, marrow or molecular tests depending on risk group and treatment stage.</p><p>After intensive therapy, long-term issues may include hearing loss, heart or kidney effects, endocrine and growth problems, fertility risk, learning and attention difficulties, and second cancer risk. Families should keep a treatment summary for survivorship care.</p>',
    fertilityOrFamily:
      '<p>Most neuroblastoma is not inherited. Family history, bilateral adrenal tumors, multifocal disease, Hirschsprung disease, central hypoventilation, or very early onset should prompt discussion of ALK, PHOX2B, or related syndromes. Fertility preservation can be discussed before intensive treatment when age-appropriate.</p>',
    emergencySigns:
      '<p>Urgent care is needed for limb weakness, sudden walking decline, bowel or bladder changes, breathing trouble, rapidly enlarging abdomen, persistent high blood pressure, severe bone pain, fever with low white cells, uncontrolled bleeding, or altered mental status.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Neuroblastoma Treatment (PDQ) Patient Version',
      type: 'official',
      url: 'https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Neuroblastoma',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001408.htm',
    },
  ],
  symptoms:
    '<p>Symptoms can include an abdominal, neck, or chest mass; distension, pain, bone pain, limp, eye bruising, fever, weight loss, anemia, bluish skin nodules, high blood pressure, or spinal cord compression signs.</p>',
  diagnosis:
    '<p>Diagnosis combines imaging, urine VMA/HVA, biopsy pathology, MIBG/PET, marrow tests, and molecular risk markers such as MYCN and ALK to stage and risk-stratify disease.</p>',
  treatment:
    '<p>Treatment is risk-adapted and may range from observation or surgery to chemotherapy, radiation, autologous transplant, anti-GD2 immunotherapy, differentiation therapy, targeted therapy, and trials.</p>',
  prognosis:
    '<p>Outlook varies widely by age, stage, MYCN and other biology, risk group, and treatment response; low-risk and high-risk disease differ greatly in intensity and relapse risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 407,
    name: 'neuroblastoma-journey.png',
    url: '/images/diseases/neuroblastoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

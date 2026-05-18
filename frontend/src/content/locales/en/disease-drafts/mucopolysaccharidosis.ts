import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMucopolysaccharidosis: DiseaseDraft = {
  ...entity(5019, 'disease-mucopolysaccharidosis'),
  name: 'Mucopolysaccharidosis',
  nameEn: 'Mucopolysaccharidosis',
  alias: 'MPS, mucopolysaccharidoses, Hurler syndrome, Hunter syndrome',
  icd10Code: 'E76.0-E76.3',
  slug: 'mucopolysaccharidosis',
  oneSentence:
    'Mucopolysaccharidoses are a group of autosomal recessive or X-linked lysosomal storage disorders caused by deficiency of specific enzymes needed to break down glycosaminoglycans, leading to progressive accumulation in multiple tissues and multi-system dysfunction.',
  plainName:
    'A group of genetic conditions where sugars build up inside cells, affecting many organs',
  prevalence:
    'Combined incidence of all MPS types is approximately 1 in 25,000 live births. MPS I (Hurler) approximately 1 in 100,000; MPS II (Hunter) approximately 1 in 100,000 to 1 in 170,000 males; MPS VI (Maroteaux-Lamy) approximately 1 in 250,000 to 1 in 600,000.',
  searchIntents: [
    'mucopolysaccharidosis symptoms children',
    'MPS diagnosis enzyme test',
    'mucopolysaccharidosis treatment enzyme replacement',
    'MPS bone marrow transplant',
    'mucopolysaccharidosis life expectancy',
  ],
  quickLook: {
    whatItIs:
      'This is a group of lysosomal storage disorders where deficiency of specific enzymes prevents the breakdown of glycosaminoglycans (GAGs), causing them to accumulate in cells and tissues throughout the body, leading to progressive damage to organs, bones, brain, heart, and eyes.',
    whoToSeeFirst:
      'Children with suspected MPS should see pediatric genetics or metabolic medicine; adults should see genetics or rheumatology (some MPS types present with joint symptoms in adulthood). Multi-system involvement requires multidisciplinary follow-up.',
    isGenetic:
      'Most types are autosomal recessive; MPS II (Hunter) is X-linked recessive. Genetic counseling can assess carrier status, recurrence risk, prenatal diagnosis, and preimplantation genetic testing options.',
    hasTreatment:
      'Enzyme replacement therapy (ERT) and hematopoietic stem cell transplantation (HSCT) are available for some types, but they are not curative and cannot reverse all damage. Gene therapy is under clinical investigation. Symptomatic treatment improves quality of life.',
    commonDelayReason:
      'Coarse facial features and developmental delay in infancy mistaken for simple developmental delay; joint stiffness in children misdiagnosed as juvenile rheumatoid arthritis; respiratory symptoms attributed to adenotonsillar hypertrophy alone; late diagnosis in attenuated forms with milder symptoms.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infant or child shows coarse facial features, large tongue, short neck, joint stiffness, kyphosis, or short stature.',
      'Child has delayed motor or language development, behavioral abnormalities, or progressive intellectual decline.',
      'Recurrent ear/nose/throat infections, snoring, or sleep apnea (adenotonsillar hypertrophy).',
      'Clouding of the cornea, visual impairment, or retinal abnormalities.',
      'Cardiac murmur, cardiomyopathy, or valve abnormalities detected on routine examination.',
      'Hernias (umbilical or inguinal) present in infancy or early childhood.',
    ],
    commonWrongTurns: [
      'Coarse facial features and developmental delay attributed to simple developmental delay or genetics without investigating metabolic causes.',
      'Joint stiffness and limited mobility misdiagnosed as juvenile rheumatoid arthritis, with immunosuppressive treatment instead of enzyme testing.',
      'Recurrent respiratory infections and snoring treated solely with adenotonsillectomy without investigating underlying lysosomal storage.',
      'Corneal clouding attributed solely to congenital cataracts or glaucoma without considering MPS.',
      'Attenuated forms presenting in adolescence or adulthood with joint stiffness, carpal tunnel syndrome, or cardiac valve disease misdiagnosed as common degenerative conditions.',
    ],
    firstDepartments: [
      'Pediatric Genetics / Metabolic Medicine',
      'Rheumatology (for joint symptoms)',
      'ENT (for airway and sleep issues)',
      'Ophthalmology (for corneal clouding or visual impairment)',
      'Cardiology (for cardiac involvement)',
      'Orthopedics (for skeletal abnormalities)',
      'Genetic Counseling',
    ],
    diagnosisChecklist: [
      'Document the sequence and progression of facial features, skeletal abnormalities, growth trajectory, and developmental milestones.',
      'Bring prior growth charts, developmental assessments, and imaging studies (spine, hands, skull).',
      'Organize records of ENT surgeries (adenotonsillectomy, ear tubes), ophthalmology evaluations, and cardiac assessments.',
      'Ask the physician whether urine GAG screening and specific enzyme activity testing are needed, and about genetic testing options.',
    ],
    testsToAskAbout: [
      'Urine glycosaminoglycan (GAG) quantitative and qualitative analysis (heparan sulfate, dermatan sulfate, keratan sulfate patterns vary by MPS type).',
      'Leukocyte or fibroblast enzyme activity assay (specific enzyme deficiency identifies the MPS type).',
      'Genetic testing for the relevant gene (IDUA for MPS I, IDS for MPS II, etc.).',
      'Skeletal survey (spine, hands, pelvis) for dysostosis multiplex.',
      'Brain MRI (for hydrocephalus, cervical spinal cord compression, or white matter changes).',
      'Echocardiogram and ECG (for valve disease, cardiomyopathy, or pulmonary hypertension).',
      'Sleep study (for obstructive sleep apnea).',
      'Ophthalmology evaluation including slit-lamp examination.',
    ],
    questionsForDoctor: [
      'What type of MPS does my child have, and what are the attenuated vs severe form characteristics?',
      'Is enzyme replacement therapy or bone marrow transplant appropriate? What are the benefits, risks, and optimal timing?',
      'How should airway, cardiac, orthopedic, and neurological complications be monitored and managed?',
      'What surgical interventions might be needed, and when is the best timing?',
      'What are the family planning options and recurrence risk?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MPS presents with a wide spectrum of multi-system involvement. Early features include coarse facial features (broad nasal bridge, thick lips, large tongue), short stature, joint stiffness, kyphosis or gibbus deformity, umbilical or inguinal hernias, and hepatosplenomegaly. Developmental delay or progressive intellectual decline occurs in severe forms (MPS I Hurler, MPS II severe, MPS III Sanfilippo). Attenuated forms may have normal intelligence but develop physical complications over time.</p><p>Respiratory involvement includes adenotonsillar hypertrophy, obstructive sleep apnea, and recurrent respiratory infections. Cardiac involvement includes valve disease (especially aortic and mitral regurgitation), cardiomyopathy, and coronary artery disease. Ophthalmic findings include corneal clouding (MPS I, VI, VII), retinal degeneration, and optic nerve atrophy. Skeletal abnormalities (dysostosis multiplex) affect the spine, hands, hips, and skull. Cervical spinal cord compression (especially C1-C2) is a serious complication requiring surgical intervention.</p>',
    diagnosis:
      '<p>Initial screening uses urine GAG analysis; specific diagnosis requires leukocyte or fibroblast enzyme activity testing. Genetic testing confirms the specific gene mutation. Prenatal diagnosis is available through amniocentesis or chorionic villus sampling for enzyme activity or genetic testing in at-risk pregnancies.</p><p>Newborn screening for MPS is being piloted in some regions using dried blood spot enzyme assays. Early diagnosis is critical as some treatments (HSCT, ERT) are most effective before irreversible organ damage occurs.</p>',
    treatment:
      '<p>Enzyme replacement therapy (ERT) is available for MPS I, II, IVA, VI, and VII, administered by intravenous infusion typically every 1-2 weeks. ERT improves some somatic symptoms (hepatosplenomegaly, joint mobility, respiratory function) but does not cross the blood-brain barrier, so neurological symptoms are not improved.</p><p>Hematopoietic stem cell transplantation (HSCT) is the treatment of choice for severe MPS I (Hurler syndrome) before age 2, as transplanted cells can provide enzyme to the brain and slow neurodegeneration. Gene therapy is under active clinical investigation for several MPS types. Symptomatic management includes orthopedic surgery, cardiac valve repair/replacement, ENT surgery, and neurosurgical decompression when indicated.</p>',
    longTermCare:
      '<p>Long-term management requires multidisciplinary coordination: regular monitoring of cardiac function, pulmonary function, sleep studies, ophthalmology, audiology, orthopedics, and neurodevelopment. Growth and nutritional status should be monitored. Physical and occupational therapy help maintain function.</p><p>Airway management is critical; patients may require CPAP/BiPAP for sleep apnea or tracheostomy in severe cases. Cervical spine instability requires careful monitoring and possible surgical stabilization. Families should be connected with patient organizations and support groups for resources and peer support.</p>',
    fertilityOrFamily:
      '<p>Most MPS types are autosomal recessive; MPS II is X-linked recessive. Genetic counseling is essential for carrier testing, recurrence risk assessment, prenatal diagnosis, and preimplantation genetic testing. Siblings of affected individuals should be evaluated, as early diagnosis allows earlier intervention.</p><p>Adults with attenuated forms should receive genetic counseling before family planning, as the phenotype can vary widely even within families.</p>',
    emergencySigns:
      '<p>Seek emergency care for: signs of cervical spinal cord compression (new neck pain, weakness, gait disturbance, bowel/bladder dysfunction), severe respiratory distress or cyanosis, new seizures or altered consciousness, or signs of increased intracranial pressure (severe headache, vomiting, visual changes). Bring diagnostic records and inform emergency staff of the MPS diagnosis.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Mucopolysaccharidosis Type I',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1162/',
    },
    {
      name: 'NCBI StatPearls: Mucopolysaccharidosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470247/',
    },
    {
      name: 'Orphanet: Mucopolysaccharidosis',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/579',
    },
  ],
  symptoms:
    '<p>Coarse facial features, short stature, joint stiffness, skeletal abnormalities, developmental delay, hepatosplenomegaly, recurrent infections, corneal clouding, cardiac valve disease, and respiratory complications.</p>',
  diagnosis:
    '<p>Urine GAG screening followed by specific enzyme activity testing and genetic testing. Skeletal survey and multi-system evaluation guide management.</p>',
  treatment:
    '<p>Enzyme replacement therapy for somatic symptoms; HSCT for severe MPS I to preserve cognition; gene therapy under investigation. Multidisciplinary symptomatic and surgical management is essential.</p>',
  prognosis:
    '<p>Severe untreated MPS I has poor prognosis with death in childhood; early HSCT significantly improves outcomes. Attenuated forms have longer survival but require lifelong multidisciplinary care.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1162/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3519,
    name: 'mucopolysaccharidosis-journey.png',
    url: '/images/diseases/mucopolysaccharidosis-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric'],
};

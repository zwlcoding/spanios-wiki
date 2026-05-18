import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNiemannPickDisease: DiseaseDraft = {
  ...entity(5028, 'disease-niemann-pick-disease'),
  name: 'Niemann-Pick Disease',
  nameEn: 'Niemann-Pick Disease',
  alias: 'NPD, sphingomyelin lipidosis, NPC',
  icd10Code: 'E75.2',
  slug: 'niemann-pick-disease',
  oneSentence:
    'Niemann-Pick disease is a group of inherited lysosomal storage disorders, mainly divided into types A/B (acid sphingomyelinase deficiency) and type C (NPC1/NPC2 gene mutations causing defective intracellular cholesterol transport), affecting the liver, spleen, nervous system, and lungs, with several symptomatic and disease-modifying treatments available.',
  plainName:
    'A genetic disease where cholesterol and fats get stuck inside cells, damaging multiple organs',
  prevalence:
    'Types A/B combined occur in approximately 1 in 250,000 live births; type C occurs in approximately 1 in 100,000 to 1 in 150,000. Carrier frequency varies among populations, with certain mutations more common in people of Hispanic descent.',
  searchIntents: [
    'Niemann-Pick disease symptoms',
    'NPC vertical gaze palsy',
    'Niemann-Pick treatment miglustat',
    'Niemann-Pick cyclodextrin',
    'Niemann-Pick genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is a group of lysosomal storage disorders. Types A/B are caused by acid sphingomyelinase deficiency leading to sphingomyelin accumulation; type C is caused by NPC1 or NPC2 gene mutations causing abnormal accumulation of cholesterol and glycosphingolipids in lysosomes. The liver, spleen, brain, and lungs are primarily affected. Type C, with neurological symptoms predominating, is the more common form.',
    whoToSeeFirst:
      'Pediatrics or neurology (neurogenetics/metabolic specialty). Infants with hepatosplenomegaly should be evaluated promptly. Neurology assessment is needed when ataxia, vertical gaze palsy, or other neurological symptoms appear.',
    isGenetic:
      'Autosomal recessive inheritance. Types A/B are caused by SMPD1 mutations; type C is caused by NPC1 (approximately 95%) or NPC2 mutations. Parents are carriers, with a 25% recurrence risk. Prenatal diagnosis and carrier screening are available.',
    hasTreatment:
      'Types A/B currently rely mainly on supportive care, with enzyme replacement therapy in clinical trials; type C has miglustat (substrate reduction therapy) to delay neurological deterioration, and some patients can receive intrathecal HPBCD. Symptomatic treatment includes seizure control, nutritional support, and physical rehabilitation.',
    commonDelayReason:
      'Neonatal hepatosplenomegaly mistaken for common neonatal jaundice or infection; childhood ataxia and vertical gaze palsy misdiagnosed as cerebral palsy or cerebellar disease; adult psychiatric symptoms treated only as mental illness without investigating metabolic causes; delayed enzyme assays and genetic testing.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn or infant presents with hepatosplenomegaly, prolonged jaundice, or developmental delay.',
      'Infant shows hypotonia, feeding difficulties, or failure to thrive.',
      'Child develops progressive ataxia, vertical supranuclear gaze palsy (impaired up-and-down eye movements), dysarthria, or learning difficulties.',
      'Adolescent or adult presents with psychiatric symptoms (hallucinations, delusions, depression), dementia, ataxia, or seizures.',
      'Family history of similar symptoms or known Niemann-Pick disease.',
    ],
    commonWrongTurns: [
      'Neonatal hepatosplenomegaly and jaundice treated as neonatal hepatitis or biliary atresia.',
      'Vertical gaze palsy and ataxia mistaken for cerebral palsy, cerebellar tumor, or hereditary ataxia.',
      'Adult psychiatric symptoms managed only as schizophrenia or bipolar disorder without investigating metabolic causes.',
      'Delayed acid sphingomyelinase assay or NPC1/NPC2 genetic testing.',
      'Delayed initiation of miglustat or cyclodextrin therapy.',
    ],
    firstDepartments: [
      'Pediatrics / Pediatric Metabolic Genetics',
      'Neurology (neurogenetics/metabolic specialty)',
      'Gastroenterology (hepatosplenomegaly evaluation)',
      'Genetic Counseling',
      'Physical Medicine and Rehabilitation',
      'Psychiatry (when adult psychiatric symptoms predominate)',
    ],
    diagnosisChecklist: [
      'Document timing and progression of symptoms, especially the sequence of hepatosplenomegaly and neurodegeneration.',
      'Bring prior liver function, abdominal ultrasound/CT, and brain MRI reports.',
      'Ask the physician whether acid sphingomyelinase assay (types A/B) or plasma oxysterol testing (type C) is needed.',
      'Ask about NPC1/NPC2 genetic testing and family screening options.',
    ],
    testsToAskAbout: [
      'Leukocyte or skin fibroblast acid sphingomyelinase activity (types A/B).',
      'Plasma 7-ketocholesterol and total oxysterols (type C screening, high sensitivity and specificity).',
      'Filipin staining (skin fibroblasts showing abnormal cholesterol accumulation).',
      'NPC1 and NPC2 genetic testing.',
      'SMPD1 genetic testing (types A/B).',
      'Abdominal ultrasound/CT/MRI (assess liver and spleen size and lesions).',
      'Brain MRI (assess cerebellar atrophy, white matter changes).',
      'Bone marrow aspiration (Niemann-Pick cells/foam cells may be seen).',
    ],
    questionsForDoctor: [
      'Does my child have type A/B or type C? What is the severity?',
      'Is miglustat appropriate? When should we start? What are the side effects?',
      'Is cyclodextrin (HPBCD) treatment available? What are the eligibility criteria?',
      'How should seizures, swallowing difficulties, and malnutrition be managed?',
      'Should family members undergo carrier screening? What prenatal diagnostic options are available for future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NPC is the most common form of Niemann-Pick disease, with clinical manifestations related to age at onset. Neonatal type may present with cholestatic jaundice and hepatosplenomegaly. Infantile type shows hypotonia, developmental delay, and hepatosplenomegaly. Childhood type features progressive neurodegeneration: ataxia, vertical supranuclear gaze palsy (the most characteristic sign), dysarthria, dysphagia, learning difficulties, and seizures.</p><p>Adolescent and adult types primarily present with psychiatric symptoms (psychosis-like symptoms, cognitive decline, dementia), ataxia, seizures, and supranuclear gaze palsy. Type A (acute neuronopathic) is the most severe, with death usually before age 3. Type B (chronic non-neuronopathic) primarily involves hepatosplenomegaly and pulmonary involvement, with milder or absent neurological symptoms.</p>',
    diagnosis:
      '<p>NPC diagnosis relies on plasma oxysterol testing (elevated 7-ketocholesterol and 3β,5α,6β-trihydroxycholanoyl glycine), Filipin staining (abnormal cholesterol accumulation in skin fibroblasts), and NPC1/NPC2 genetic testing. Bone marrow examination may show characteristic foam cells (Niemann-Pick cells), though this is nonspecific.</p><p>Types A/B diagnosis depends on leukocyte or skin fibroblast acid sphingomyelinase activity assay and SMPD1 genetic testing. Differential diagnosis includes Gaucher disease, other lysosomal storage disorders, and other sphingolipidoses.</p>',
    treatment:
      '<p>NPC treatment includes: miglustat (substrate reduction therapy), an oral drug that reduces glycosphingolipid synthesis and delays neurological deterioration, currently the main treatment. Intrathecal 2-hydroxypropyl-β-cyclodextrin (HPBCD) is approved or available as an investigational therapy in some countries, clearing cholesterol accumulation in the brain and improving neurological symptoms.</p><p>Symptomatic treatment: antiepileptic drugs, gastrostomy tube feeding when swallowing is impaired, physical and occupational therapy, speech therapy, and psychological support. Types A/B currently rely mainly on supportive care; enzyme replacement therapy is in clinical trials.</p>',
    longTermCare:
      '<p>Long-term follow-up requires a multidisciplinary team: neurology (movement, cognition, and seizure assessment), gastroenterology (liver/spleen function and nutrition), ophthalmology (vertical gaze palsy assessment), pulmonology (pulmonary function and sleep apnea monitoring), rehabilitation, nutrition, and psychiatry (adult patients).</p><p>Home care priorities: preventing aspiration pneumonia (food texture modification, feeding position), fall prevention, maintaining nutritional status, and psychological support. Disease progression is generally irreversible; palliative and end-of-life care become very important in advanced stages.</p>',
    fertilityOrFamily:
      '<p>Niemann-Pick disease is inherited in an autosomal recessive pattern. After diagnosis, parents should undergo carrier testing and family members should be screened. The recurrence risk for each pregnancy is 25%. Prenatal genetic testing (amniocentesis or chorionic villus sampling) or preimplantation genetic testing (PGT) can reduce recurrence risk.</p>',
    emergencySigns:
      '<p>Seek immediate care for: status epilepticus, severe dysphagia causing choking or recurrent aspiration pneumonia, acute breathing difficulty (pulmonary involvement), altered consciousness, or severe dehydration. Carry disease information and inform healthcare providers of the diagnosis.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Niemann-Pick Disease Type C',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1296/',
    },
    {
      name: 'NORD: Niemann-Pick Disease',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/niemann-pick-disease/',
    },
    {
      name: 'Orphanet: Niemann-Pick disease type C',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/646',
    },
  ],
  symptoms:
    '<p>Types A/B primarily involve hepatosplenomegaly and pulmonary involvement; type C is characterized by neurological symptoms including ataxia, vertical gaze palsy, dysarthria, seizures, and psychiatric symptoms.</p>',
  diagnosis:
    '<p>NPC relies on plasma oxysterols, Filipin staining, and NPC1/NPC2 genetic testing; types A/B rely on acid sphingomyelinase activity and SMPD1 genetic testing.</p>',
  treatment:
    '<p>NPC can be treated with miglustat to delay progression; some patients may receive intrathecal cyclodextrin. Types A/B are mainly supportive. Enzyme replacement is under investigation.</p>',
  prognosis:
    '<p>NPC progression is generally irreversible, but early treatment can delay neurological deterioration. Type A has the poorest prognosis; type B is relatively milder.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1296/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3528,
    name: 'niemann-pick-disease-journey.png',
    url: '/images/diseases/niemann-pick-disease-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric'],
};

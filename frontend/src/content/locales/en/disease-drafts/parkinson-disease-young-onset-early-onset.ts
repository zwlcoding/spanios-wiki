import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseParkinsonDiseaseYoungOnsetEarlyOnset: DiseaseDraft = {
  ...entity(5033, 'disease-parkinson-disease-young-onset-early-onset'),
  name: 'Parkinson Disease (Young-onset, Early-onset)',
  nameEn: 'Parkinson Disease (Young-onset, Early-onset)',
  alias:
    'YOPD, EOPD, early-onset Parkinson disease, young-onset Parkinson disease',
  icd10Code: 'G20',
  slug: 'parkinson-disease-young-onset-early-onset',
  oneSentence:
    'Young-onset Parkinson disease refers to Parkinson disease diagnosed before age 50, with approximately 10-20% of cases having a genetic basis involving genes such as LRRK2, PARK2, PINK1, and SNCA; it is characterized by bradykinesia, rigidity, resting tremor, and postural instability, with excellent levodopa response but higher risk of motor complications.',
  plainName:
    'A form of Parkinson disease that starts in younger adults, causing slow movements, stiffness, tremor, and balance problems',
  prevalence:
    'Parkinson disease affects approximately 1-2 per 1,000 people overall; young-onset (<50 years) accounts for approximately 5-10% of all cases. In China, there are over 3 million people with Parkinson disease, with young-onset cases likely underdiagnosed due to diagnostic delay.',
  searchIntents: [
    'young onset Parkinson symptoms',
    'early onset Parkinson genetic',
    'YOPD levodopa treatment',
    'Parkinson motor complications',
    'young onset Parkinson DBS surgery',
  ],
  quickLook: {
    whatItIs:
      'Young-onset Parkinson disease is a subtype of Parkinson disease diagnosed between ages 21 and 50. Compared to late-onset disease, it progresses more slowly but has a stronger genetic component. Levodopa provides excellent symptom control, but motor complications (wearing-off, dyskinesias) tend to appear earlier and more severely due to longer disease duration.',
    whoToSeeFirst:
      'Neurologist specializing in movement disorders. Young adults experiencing hand tremor, slowness, or stiffness should seek evaluation promptly to avoid diagnostic delay.',
    isGenetic:
      'Approximately 10-20% of young-onset cases have a family history. Common genes: LRRK2 (autosomal dominant), PARK2 (autosomal recessive), PINK1 (autosomal recessive), DJ-1 (autosomal recessive), and SNCA (autosomal dominant). Genetic factors are more prominent in young-onset than late-onset disease.',
    hasTreatment:
      'There is no cure, but medications and surgery significantly improve symptoms. Levodopa remains the gold standard; dopamine agonists and MAO-B inhibitors can be used as initial therapy to delay levodopa and reduce motor complications. Deep brain stimulation (DBS) is highly effective for patients with medication wearing-off or severe dyskinesias.',
    commonDelayReason:
      'Tremor in young adults is often attributed to essential tremor or anxiety. Slowness and reduced facial expression may be misdiagnosed as depression or fatigue. Unilateral symptoms may be attributed to cervical spine disease or cerebrovascular disease. Primary care providers may not recognize Parkinson disease in younger patients.',
  },
  patientJourney: {
    whenToSuspect: [
      'Resting tremor of one hand (trembling at rest that improves with movement) before age 50.',
      'Slowness of movement (bradykinesia), including difficulty with buttons, micrographia, shuffling gait, and reduced arm swing.',
      'Muscle rigidity (stiffness with a lead-pipe or cogwheel quality).',
      'Reduced facial expression (masked face), soft speech, and stooped posture.',
      'Loss of sense of smell, constipation, or REM sleep behavior disorder (RBD) as prodromal symptoms.',
      'Family history of Parkinson disease, especially young-onset cases.',
    ],
    commonWrongTurns: [
      'Hand tremor misdiagnosed as essential tremor, anxiety, or hyperthyroidism.',
      'Slowness and reduced facial expression attributed to depression or social anxiety.',
      'Unilateral stiffness and weakness misdiagnosed as cervical spine disease or stroke sequelae.',
      'Early high-dose levodopa leading to premature motor complications.',
      'Delayed evaluation for DBS candidacy, missing optimal surgical timing.',
    ],
    firstDepartments: [
      'Neurology (Movement Disorders)',
      'Physical Medicine and Rehabilitation',
      'Psychiatry (when depression/anxiety is prominent)',
      'Genetic Counseling',
    ],
    diagnosisChecklist: [
      'Document symptom onset, first affected body part, progression rate, and daily impact.',
      'Collect prior brain MRI or CT reports to rule out other causes.',
      'Note any non-motor symptoms (smell, sleep, constipation).',
      'Draw a family pedigree for Parkinson disease history.',
      'Ask whether UK Brain Bank clinical diagnostic criteria are met.',
    ],
    testsToAskAbout: [
      'Brain MRI (to exclude multiple system atrophy, progressive supranuclear palsy, vascular parkinsonism, and other parkinsonian syndromes).',
      'Dopamine transporter PET (DAT-PET, assesses nigrostriatal dopaminergic neuron function).',
      'Genetic testing (LRRK2, PARK2, PINK1, DJ-1, SNCA, and others).',
      'Olfactory testing, autonomic function assessment, and RBD screening.',
      'Cardiac 123I-MIBG scintigraphy (assesses cardiac sympathetic function).',
    ],
    questionsForDoctor: [
      'Do I have young-onset or early-onset disease, and what is the expected progression?',
      'Do I have a genetic mutation, and how does this affect treatment and prognosis?',
      'When should I start levodopa, and how can we minimize motor complications?',
      'Am I a candidate for deep brain stimulation (DBS), and what is the optimal timing?',
      'How should non-motor symptoms (depression, constipation, sleep disturbance) be managed?',
      'What is the genetic risk to my children if I plan to have a family?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The core motor symptoms are the same as typical Parkinson disease: bradykinesia, rigidity, resting tremor, and postural instability (usually less prominent early on). Compared to late-onset disease, young-onset patients more commonly have tremor, slower progression, and better preservation of cognitive function. Non-motor symptoms include hyposmia, constipation, REM sleep behavior disorder (RBD), daytime sleepiness, depression, anxiety, pain, orthostatic hypotension, and others. Motor complications (wearing-off, on-off fluctuations, dyskinesias) appear earlier and more severely due to longer exposure to levodopa. Some genetic forms (e.g., PARK2) may have atypical features such as foot dystonia.</p>',
    diagnosis:
      "<p>Diagnosis is primarily clinical, based on the UK Parkinson's Disease Society Brain Bank criteria, with bradykinesia plus rigidity or resting tremor as the core features. Supporting features include unilateral onset, resting tremor, and excellent response to levodopa. Exclusionary features include repeated stroke history, head trauma history, encephalitis, supranuclear gaze palsy, cerebellar signs, and early severe autonomic dysfunction.</p><p>Imaging: Brain MRI is used primarily to exclude other parkinsonian syndromes. Dopamine transporter PET (DAT-PET) shows reduced striatal dopamine transporter uptake, supporting the diagnosis. Genetic testing can identify causative mutations in approximately 10-20% of cases.</p>",
    treatment:
      '<p>Pharmacological: Levodopa remains the gold standard for symptom control, but young-onset patients require careful use to avoid early motor complications given their longer life expectancy. Dopamine agonists (pramipexole, ropinirole, rotigotine) or MAO-B inhibitors (rasagiline, selegiline) are often used as initial therapy, with levodopa added later as symptoms worsen. COMT inhibitors (entacapone) and adenosine A2A antagonists (istradefylline) can be used as adjuncts. Amantadine may help reduce dyskinesias.</p><p>Deep brain stimulation (DBS): Highly effective for patients with medication wearing-off or severe motor complications. Common targets are the subthalamic nucleus (STN) and globus pallidus interna (GPi). Young-onset patients are typically excellent DBS candidates due to better cognitive preservation and longer life expectancy. Rehabilitation (physical, speech, and occupational therapy) is essential for maintaining function.</p>',
    longTermCare:
      '<p>Long-term management includes: regular assessment of motor symptoms (MDS-UPDRS), motor complications, non-motor symptoms (cognition, mood, sleep, autonomic function), and medication side effects; DBS programming adjustments; fall prevention; maintaining social and work capacity; and planning for disease progression. Exercise programs (tai chi, yoga, dance, boxing, swimming) can improve motor function, balance, and mood. High-protein meals may interfere with levodopa absorption; dosing before meals or with low-protein snacks may help. Psychological support and participation in support groups are valuable. Career planning and disability accommodations should be discussed early.</p>',
    fertilityOrFamily:
      '<p>Young-onset Parkinson disease has a genetic component in a subset of patients. LRRK2 and SNCA are autosomal dominant (50% risk to offspring); PARK2, PINK1, and DJ-1 are autosomal recessive (parents are carriers, siblings have 25% risk). Approximately 80% of young-onset cases have no clear family history (sporadic). Genetic testing can help assess family risk. Prenatal diagnosis and PGT are available for known mutations. Women with Parkinson disease may experience symptom fluctuations during pregnancy; levodopa is generally considered relatively safe in pregnancy. Preconception counseling with a movement disorder specialist is recommended.</p>',
    emergencySigns:
      '<p>Seek emergency care for: acute high fever, altered consciousness, severe rigidity, and autonomic dysfunction (possible neuroleptic malignant syndrome, especially during medication changes); severe falls with fracture; acute dysphagia with choking or aspiration pneumonia; severe depression with suicidal ideation; acute medication withdrawal leading to severe rigidity and immobility ( Parkinsonism-hyperpyrexia syndrome).</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Parkinson Disease Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1223/',
    },
    {
      name: "NINDS: Parkinson's Disease Information Page",
      type: 'review',
      url: 'https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease',
    },
    {
      name: 'Orphanet: Early-onset Parkinson disease',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/2828',
    },
  ],
  symptoms:
    '<p>Bradykinesia, rigidity, resting tremor, and postural instability. Non-motor symptoms include hyposmia, constipation, RBD, and depression. Motor complications appear earlier in young-onset disease.</p>',
  diagnosis:
    '<p>Clinical diagnosis based on UK Brain Bank criteria, with brain MRI to exclude other causes. DAT-PET supports the diagnosis. Genetic testing identifies mutations in a subset of cases.</p>',
  treatment:
    '<p>Levodopa is the gold standard; dopamine agonists and MAO-B inhibitors are used as initial therapy to delay motor complications. DBS is highly effective for medication complications. Rehabilitation is essential.</p>',
  prognosis:
    '<p>Young-onset disease progresses more slowly but has longer disease duration, making motor complication management critical. DBS can significantly improve quality of life.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1223/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3533,
    name: 'parkinson-disease-young-onset-early-onset-journey.png',
    url: '/images/diseases/parkinson-disease-young-onset-early-onset-journey.png',
  },
  tagSlugs: ['neurological', 'genetic-counseling', 'treatable'],
};

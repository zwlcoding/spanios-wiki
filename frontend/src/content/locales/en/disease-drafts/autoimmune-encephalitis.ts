import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAutoimmuneEncephalitis: DiseaseDraft = {
  ...entity(11, 'disease-autoimmune-encephalitis'),
  name: 'Autoimmune Encephalitis',
  nameEn: 'Autoimmune Encephalitis',
  alias: 'AE, Autoimmune Encephalitis',
  slug: 'autoimmune-encephalitis',
  oneSentence:
    'Autoimmune encephalitis is a group of brain inflammations caused when the immune system attacks brain tissue or structures related to nerve cells, which may cause changes in behavior and mental state, memory loss, seizures, altered consciousness, and movement abnormalities.',
  plainName:
    'Brain inflammation caused by the immune system mistakenly attacking the brain',
  prevalence:
    'A relatively uncommon but increasingly recognized neuroimmune disease; the exact prevalence varies depending on antibody testing and diagnostic capabilities.',
  searchIntents: [
    'autoimmune encephalitis early symptoms',
    'sudden psychiatric symptoms seizures memory loss',
    'autoimmune encephalitis neurology or psychiatry',
    'autoimmune encephalitis antibody testing',
    'autoimmune encephalitis recovery after treatment',
  ],
  quickLook: {
    whatItIs:
      'Autoimmune encephalitis is different from ordinary viral or bacterial infectious encephalitis. It may be related to autoantibodies, tumors, post-infection immune responses, or other autoimmune conditions. Some patients can recover significantly with timely treatment.',
    whoToSeeFirst:
      'For acute behavioral changes, seizures, or altered consciousness, go to the emergency department or neurology department first. When psychiatric symptoms are prominent, psychiatry can help with evaluation, but neuroimmune and encephalitis-related tests should not be skipped.',
    isGenetic:
      'Usually not a typical inherited disease. Some patients may have an autoimmune background or tumor-related triggers, which need to be assessed based on age, sex, and antibody type.',
    hasTreatment:
      'Treatable, but early recognition is important. Treatment may include immunotherapy, seizure control, and intensive care support, as well as screening for and managing underlying tumors. The specific treatment plan should be made by neurology or neuroimmunology specialists.',
    commonDelayReason:
      'Early symptoms may include anxiety, insomnia, hallucinations, rambling speech, memory problems, or behavioral changes, which can easily be treated only as a psychiatric issue until seizures, altered consciousness, or autonomic dysfunction appear and encephalitis is finally considered.',
  },
  patientJourney: {
    whenToSuspect: [
      'Noticeable changes in personality, behavior, memory, or mental state within days to weeks.',
      'New-onset seizures or convulsions, or sudden worsening of existing epilepsy.',
      'Psychiatric symptoms along with post-fever changes, fluctuating consciousness, movement abnormalities, involuntary mouth or face movements, or autonomic instability.',
      'Cerebrospinal fluid, EEG, or MRI suggesting inflammation, seizure activity, or limbic system involvement.',
      'Acute psychiatric symptoms in adolescents or young women, along with clues of seizures or involuntary movements.',
    ],
    commonWrongTurns: [
      'Treating only as a psychiatric disorder without evaluating new-onset seizures, altered consciousness, or neurological signs.',
      'Doing an MRI once and, if normal, ruling out encephalitis without considering cerebrospinal fluid, EEG, and disease progression.',
      'Fully excluding autoimmune encephalitis after negative antibody results, ignoring clinical judgment based on overall presentation.',
      'Lack of follow-up for cognition, sleep, mood, and relapse risk after improvement in the acute phase.',
    ],
    firstDepartments: [
      'Emergency Department',
      'Neurology',
      'Neuroimmunology Clinic',
      'Psychiatry Consultation',
      'Oncology-related Departments (based on screening results)',
    ],
    diagnosisChecklist: [
      'Record the timeline of behavioral, memory, seizure, fever, infection, medication, and tumor-related history.',
      'Bring EEG, cerebrospinal fluid, MRI/CT, autoantibody, infection workup, and tumor screening results.',
      'Record fluctuating consciousness, sleep patterns, speech problems, movement abnormalities, autonomic symptoms, and safety risks.',
      'Ask your doctor whether you need repeat cerebrospinal fluid, EEG, antibody panels, or tumor screening.',
    ],
    testsToAskAbout: [
      'Cerebrospinal fluid tests, including cell count, protein, oligoclonal bands, infection workup, and autoimmune antibodies.',
      'EEG to assess seizure activity and brain function abnormalities.',
      'Brain MRI, with follow-up or additional imaging as needed.',
      'Nerve autoantibody tests in both blood and cerebrospinal fluid.',
      'Tumor screening based on age, sex, and antibody type.',
    ],
    questionsForDoctor: [
      'Is this more likely infectious encephalitis, autoimmune encephalitis, or another cause?',
      'Is immunotherapy needed urgently, and what are the risks and monitoring indicators?',
      'How will seizures, sleep, behavioral changes, and cognitive problems be managed separately?',
      'Is tumor screening needed, and how often should it be repeated?',
      'After discharge, how will cognitive rehabilitation, follow-up, and relapse warning be arranged?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Autoimmune encephalitis can present with rapid progressive behavioral changes, memory loss, consciousness fluctuations, seizures, involuntary movements, speech difficulties, sleep disturbances, autonomic instability, or breathing problems within a short period. Manifestations vary greatly depending on antibody type and age group.</p>',
    diagnosis:
      '<p>Diagnosis usually combines disease course, neurological examination, cerebrospinal fluid, EEG, MRI, infection workup, nerve autoantibody testing, and tumor screening. Antibody results are helpful, but doctors still need to make clinical judgment based on overall presentation.</p>',
    treatment:
      '<p>Treatment usually includes immunotherapy, seizure control, and intensive care support, along with management of any underlying tumors as appropriate. Common immunotherapy approaches may involve steroids, immunoglobulin, plasma exchange, or subsequent immunosuppressive therapy; the specific treatment plan should be determined by the specialist team.</p>',
    longTermCare:
      '<p>During recovery, attention should be paid to memory, concentration, sleep, mood, seizure control, return to school or work, and home care. Some patients need neurological rehabilitation, psychological support, and longer-term follow-up.</p>',
    fertilityOrFamily:
      '<p>Autoimmune encephalitis is usually not a typical inherited disease. If related to tumors, pregnancy, or other autoimmune conditions, neurology, obstetrics and gynecology, oncology, or other relevant specialists should jointly assess the follow-up plan.</p>',
    emergencySigns:
      '<p>New or persistent seizures, declining consciousness, severe agitation with safety concerns, breathing abnormalities, persistent high fever, autonomic instability, or rapidly worsening behavioral changes require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'Mayo Clinic: Autoimmune encephalitis symptoms and causes',
      type: 'official',
      url: 'https://www.mayoclinic.org/diseases-conditions/autoimmune-encephalitis/symptoms-causes/syc-20576380',
    },
    {
      name: 'Mayo Clinic: Autoimmune encephalitis diagnosis and treatment',
      type: 'official',
      url: 'https://www.mayoclinic.org/diseases-conditions/autoimmune-encephalitis/diagnosis-treatment/drc-20576406',
    },
    {
      name: 'Chinese Expert Consensus on Diagnosis and Treatment of Autoimmune Encephalitis (2022)',
      type: 'clinical-guideline',
      url: 'https://www.wjdpn.cn/epilepsy/medical-file-download/download/57-neuromuscular-system-diseases/181-%E4%B8%AD%E5%9B%BD%E8%87%AA%E8%BA%AB%E5%85%8D%E7%96%AB%E6%80%A7%E8%84%91%E7%82%8E%E8%AF%8A%E6%B2%BB%E4%B8%93%E5%AE%B6%E5%85%B1%E8%AF%86.html',
    },
  ],
  symptoms:
    '<p>Common clues include acute or subacute behavioral changes, memory loss, seizures, consciousness fluctuations, involuntary movements, and autonomic abnormalities.</p>',
  diagnosis:
    '<p>Assessment usually includes cerebrospinal fluid, EEG, brain MRI, infection workup, nerve autoantibody testing, and tumor screening.</p>',
  treatment:
    '<p>Treatment requires evaluation by neurology or neuroimmunology specialists, focusing on immunotherapy, seizure control, and intensive care support, as well as management of any underlying tumors.</p>',
  prognosis:
    '<p>Many patients can recover gradually with timely treatment and rehabilitation support, but cognitive, mood, seizure, and relapse risks need ongoing follow-up.</p>',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 309,
    name: 'autoimmune-encephalitis-journey.png',
    url: '/images/diseases/autoimmune-encephalitis-journey.png',
  },
  tagSlugs: [],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLennoxGastautSyndrome: DiseaseDraft = {
  ...entity(2044, 'disease-lennox-gastaut-syndrome'),
  name: 'Lennox-Gastaut syndrome',
  nameEn: 'Lennox-Gastaut syndrome',
  alias:
    'LGS, developmental and epileptic encephalopathy, China Second Rare Disease Catalog item 44',
  slug: 'lennox-gastaut-syndrome',
  oneSentence:
    'Lennox-Gastaut syndrome is a severe childhood-onset developmental and epileptic encephalopathy with multiple seizure types, drop attacks, cognitive and behavioral difficulties, and seizures that are often hard to fully control.',
  plainName:
    'A childhood epilepsy syndrome with multiple seizure types and developmental impact',
  prevalence:
    "Included in China's second rare disease catalog; Epilepsy Foundation describes it as an uncommon but severe childhood epilepsy syndrome.",
  quickLook: {
    whatItIs:
      'LGS usually combines multiple seizure types, characteristic EEG patterns, and developmental/cognitive-behavioral impact. Causes include brain injury or malformation, genetic or metabolic disease, prior infantile spasms, or unknown causes.',
    whoToSeeFirst:
      'Repeated falls, tonic seizures during sleep, atypical absence-like episodes, myoclonic seizures, frequent seizures, or poor response to medicines should prompt pediatric neurology, an epilepsy center, or emergency care.',
    isGenetic:
      'LGS is a syndrome diagnosis, not one single genetic disease. Genetic, metabolic, and imaging workup depends on age at onset, development, imaging, and family history.',
    hasTreatment:
      'Treatment often requires combination therapy and may include ketogenic diet, vagus nerve stimulation, corpus callosotomy, or epilepsy surgery review. Goals often include fewer seizures, fewer injuries, and better function rather than guaranteed seizure freedom.',
    commonDelayReason:
      'Seizure types vary and may be mistaken for ordinary epilepsy, attention problems, accidental falls, or developmental delay. Video recordings are very helpful.',
  },
  patientJourney: {
    whenToSuspect: [
      'A child has multiple seizure types, especially tonic seizures during sleep, atonic drop attacks, atypical absences, or seizure clusters.',
      'Seizures are frequent, poorly responsive to usual antiseizure medicines, or lead to repeated emergency visits.',
      'Language, cognition, behavior, or motor development plateaus or regresses.',
      'EEG suggests slow spike-wave or sleep-related fast rhythmic activity.',
    ],
    commonWrongTurns: [
      'Describing only falls or staring spells without showing seizure videos to an epilepsy specialist.',
      'Changing medicines repeatedly without systematic cause, EEG, imaging, and non-drug treatment review.',
      'Missing fall protection, helmets, sleep safety, school supports, and caregiver burden.',
      'No written rescue medicine and emergency plan for prolonged or clustered seizures.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Epilepsy center',
      'Neurology',
      'Emergency medicine',
    ],
    diagnosisChecklist: [
      'Bring seizure videos and record timing, sleep/wake state, duration, triggers, and recovery.',
      'Bring EEG, long-term video EEG, brain MRI, genetic/metabolic testing, and medicine response records.',
      'Record developmental milestones, learning/behavior changes, fall injuries, and prior infantile spasms or brain injury.',
      'List all antiseizure medicines, doses, benefits, side effects, and reasons for stopping.',
    ],
    testsToAskAbout: [
      'Long-term video EEG, especially including sleep.',
      'High-quality brain MRI to look for structural causes.',
      'Genetic testing, metabolic screening, or other cause-focused testing when indicated.',
      'Assessment for ketogenic diet, vagus nerve stimulation, corpus callosotomy, or epilepsy surgery options.',
    ],
    questionsForDoctor: [
      'Which seizure types does my child have, and which are most dangerous or highest priority?',
      'What is our rescue plan, and when should we use rescue medicine or call emergency services?',
      'Should we evaluate ketogenic diet, VNS, or corpus callosotomy?',
      'What school, sleep, activity, and fall-protection supports are needed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>LGS begins in childhood and causes multiple seizure types. Tonic seizures, atonic drop attacks, atypical absences, myoclonic seizures, generalized tonic-clonic seizures, and nonconvulsive status epilepticus can occur. Drop attacks can cause head, face, and limb injuries.</p><p>Many children also have cognitive, language, behavior, sleep, and motor-development difficulties. Seizures and medicine side effects can affect learning and family life.</p>',
    diagnosis:
      '<p>Diagnosis combines seizure history, developmental history, long-term video EEG, and brain MRI. Characteristic EEG findings include slow spike-wave and generalized fast rhythms during sleep, although patterns can change over time.</p><p>Clinicians look for causes such as brain malformations, hypoxic-ischemic or infection-related injury, tuberous sclerosis, genetic/metabolic disease, and prior infantile epileptic spasms syndrome, while distinguishing LGS from other developmental epileptic encephalopathies.</p>',
    treatment:
      '<p>LGS is often difficult to fully control, so treatment usually involves specialist-guided combination therapy. Medicines may include valproate, lamotrigine, topiramate, clobazam, rufinamide, felbamate, cannabidiol, or others depending on the child.</p><p>If medicines are not enough, ketogenic diet, vagus nerve stimulation, corpus callosotomy, or other epilepsy surgery strategies may be evaluated. Goals include fewer drop attacks and severe seizures, lower emergency risk, and better development and quality of life.</p>',
    longTermCare:
      '<p>Long-term care includes a seizure diary, rescue medicine plan, fall and head protection, sleep planning, rehabilitation, speech and special education support, and support for caregiver stress.</p>',
    fertilityOrFamily:
      '<p>LGS has many causes and is not always inherited. If genetic or metabolic disease is suspected, identifying the cause guides family testing, recurrence-risk counseling, and reproductive planning.</p>',
    emergencySigns:
      '<p>A seizure lasting more than 5 minutes, repeated seizures without recovery, blue color or breathing trouble, serious fall injury, fever with sharply increased seizures, persistent sleepiness, or suspected status epilepticus requires the rescue plan and emergency care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Epilepsy Foundation: Lennox-Gastaut Syndrome',
      type: 'patient-organization',
      url: 'https://www.epilepsy.com/what-is-epilepsy/syndromes/lennox-gastaut-syndrome',
    },
  ],
  symptoms:
    '<p>Common features include multiple seizure types, especially tonic seizures, atonic drop attacks, atypical absences, myoclonic seizures, and clusters, often with cognitive, language, behavior, and developmental problems.</p>',
  diagnosis:
    '<p>Diagnosis combines seizure videos and history, long-term video EEG, brain MRI, and cause-focused testing to identify characteristic EEG patterns and structural, genetic, or metabolic causes.</p>',
  treatment:
    '<p>Care is long-term epilepsy specialist management with medicine combinations, ketogenic diet, vagus nerve stimulation, corpus callosotomy, and rescue and fall-protection plans when appropriate.</p>',
  prognosis:
    '<p>LGS often persists long term and seizure freedom is difficult, but systematic care can reduce severe seizures and injuries while supporting learning, rehabilitation, and family care.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 398,
    name: 'lennox-gastaut-syndrome-journey.png',
    url: '/images/diseases/lennox-gastaut-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

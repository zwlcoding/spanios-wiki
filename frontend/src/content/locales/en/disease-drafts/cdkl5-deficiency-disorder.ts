import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCdkl5DeficiencyDisorder: DiseaseDraft = {
  ...entity(2011, 'disease-cdkl5-deficiency-disorder'),
  name: 'CDKL5-deficiency disorder',
  nameEn: 'CDKL5-deficiency disorder',
  alias:
    'CDD, CDKL5-related developmental and epileptic encephalopathy, early infantile epileptic encephalopathy 2, China Second Rare Disease Catalog item 11',
  slug: 'cdkl5-deficiency-disorder',
  oneSentence:
    'CDKL5-deficiency disorder is a rare X-linked dominant neurodevelopmental condition in which seizures often begin in early infancy and are followed by significant developmental delay.',
  plainName:
    'A genetic neurodevelopmental condition with early infant seizures and developmental challenges',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates an incidence of about 1 in 40,000 to 60,000 newborns, with about 90% of diagnosed people being girls.",
  quickLook: {
    whatItIs:
      'The CDKL5 gene is important for brain development and nerve cell function. Disease-causing variants can lead to early, often difficult-to-control seizures and developmental challenges involving movement, communication, vision, feeding, sleep, and daily care.',
    whoToSeeFirst:
      'Infants with repeated early seizures, clear developmental delay, or abnormal muscle tone should be seen by pediatric neurology or an epilepsy center, with rehabilitation, ophthalmology, nutrition, and genetics involved as needed.',
    isGenetic:
      'This is an X-linked dominant genetic condition. Most cases are new variants, so it can occur without a known family history. Genetic counseling is still important after diagnosis.',
    hasTreatment:
      'Care focuses on reducing seizures, supporting development, and preventing complications. Anti-seizure medicines, specialist-accessible newer therapies, feeding support, rehabilitation, vision support, and a home emergency plan may all be part of care.',
    commonDelayReason:
      'Early signs may be treated as common infant seizures, refractory epilepsy, or Rett-like features. Diagnosis is delayed when early seizures, developmental delay, and genetic testing are not considered together.',
  },
  patientJourney: {
    whenToSuspect: [
      'Seizures, spasms, or repeated episodes begin in the first weeks or months of life, especially if treatment response is limited.',
      'Head control, rolling, sitting, standing, walking, hand use, eye contact, or speech is clearly delayed.',
      'There are feeding problems, constipation, reflux, sleep disturbance, low muscle tone, hand stereotypies, or poor visual attention.',
      'Rett syndrome, infantile spasms, or another developmental and epileptic encephalopathy has been considered but does not fully explain the child.',
    ],
    commonWrongTurns: [
      'Changing seizure medicines repeatedly without early epilepsy genetic testing.',
      'Waiting for seizures to be controlled before starting developmental therapies.',
      'Tracking seizure counts but not sleep, feeding, breathing, visual attention, and gastrointestinal problems.',
      'Not discussing parental testing, mosaicism, and recurrence risk after a diagnosis.',
    ],
    firstDepartments: [
      'Pediatric neurology or epilepsy center',
      'Medical genetics',
      'Pediatric rehabilitation',
      'Pediatric ophthalmology or low-vision clinic',
    ],
    diagnosisChecklist: [
      'Record birth history, age at first seizure, seizure videos, frequency, triggers, medicines, doses, and response.',
      'Bring EEG reports, brain MRI, metabolic screening, hospital records, emergency records, and previous genetic testing.',
      'Summarize developmental milestones, feeding, sleep, breathing, constipation or reflux, visual responses, and therapy history.',
      'Prepare health information for parents and siblings so the genetics team can decide whether family testing is needed.',
    ],
    testsToAskAbout: [
      'Long-term video EEG to classify seizure types and guide treatment.',
      'Epilepsy or neurodevelopmental gene panel, exome sequencing, or targeted confirmation of a CDKL5 variant.',
      'Brain MRI, developmental assessment, feeding and swallowing evaluation, ophthalmology assessment, and spine or bone monitoring.',
      'Parental sample testing and genetic counseling after a diagnosis.',
    ],
    questionsForDoctor: [
      'What seizure types does my child have, and what is the realistic treatment goal right now?',
      'Has testing covered CDKL5 and other developmental and epileptic encephalopathy genes?',
      'Which medicines, dietary therapies, neuromodulation options, or newer therapies are appropriate at this stage?',
      'How should rehabilitation, vision, feeding, sleep, and bone health follow-up be scheduled?',
      'Should parents be tested, and what reproductive counseling is available?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>CDKL5-deficiency disorder typically presents with seizures in early infancy, often within the first few months of life. Seizure types may change over time and can be difficult to control. Many children also have significant delays in movement, communication, learning, hand use, and social interaction.</p><p>Other common issues include low muscle tone, repetitive hand movements, sleep disturbance, feeding difficulty, reflux, constipation, poor visual attention or cortical visual impairment. Severity varies, and although girls are more commonly diagnosed, boys can also be affected.</p>',
    diagnosis:
      '<p>Diagnosis combines the early seizure pattern, neurological and developmental assessment, EEG, imaging when needed, and genetic testing. A disease-causing or likely disease-causing CDKL5 variant in a child with compatible features supports the diagnosis.</p><p>Clinicians also consider Rett syndrome, other developmental and epileptic encephalopathies, metabolic disorders, and structural brain conditions. Genetic results should be interpreted with the clinical picture and, when possible, parental testing.</p>',
    treatment:
      '<p>Management is long term and multidisciplinary. Seizure care may require combinations of anti-seizure medicines, and some patients may be assessed for newer disease-relevant medicines, ketogenic diet, or vagus nerve stimulation depending on local availability and clinical fit.</p><p>Developmental therapies, positioning and swallowing support, nutrition, sleep care, reflux and constipation management, visual support, bone and spine monitoring, and a caregiver emergency plan are also central parts of care.</p>',
    longTermCare:
      '<p>Long-term follow-up should track seizure frequency and videos, rescue medicine use, side effects, developmental goals, nutrition and growth, sleep, breathing, gastrointestinal symptoms, and bone or spine complications. The goal is usually to reduce severe seizures, preserve function, prevent complications, and improve quality of life.</p><p>Families should have a written plan for emergencies, school or therapy communication, medication updates, and regular reassessment of rehabilitation goals.</p>',
    fertilityOrFamily:
      '<p>Most cases are caused by a new CDKL5 variant, but low-level parental mosaicism can affect recurrence risk. Families should be offered genetic counseling to discuss parental testing, sibling risk, and reproductive options.</p><p>A family history of early epilepsy, developmental delay, or unexplained infant death should be shared with the genetics team.</p>',
    emergencySigns:
      '<p>Seek emergency care for a seizure lasting longer than the care plan allows, repeated seizures without recovery, blue color or breathing trouble, marked sleepiness or altered consciousness, severe dehydration, repeated vomiting, aspiration concern, or fever with a clear increase in seizures. Bring the diagnosis, medicine list, and rescue plan.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: CDKL5 deficiency disorder',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/cdkl5-deficiency-disorder/',
    },
  ],
  symptoms:
    '<p>Typical clues are seizures in the first months of life with developmental delay affecting movement, communication, vision, feeding, sleep, or gastrointestinal care.</p>',
  diagnosis:
    '<p>Diagnosis is based on the clinical pattern, EEG and developmental assessment, and genetic testing that identifies a disease-causing CDKL5 variant.</p>',
  treatment:
    '<p>Care combines epilepsy specialist treatment with rehabilitation, feeding and nutrition support, vision care, sleep and gastrointestinal management, bone monitoring, and a home rescue plan.</p>',
  prognosis:
    '<p>Most affected children need long-term support. Early diagnosis, structured seizure care, rehabilitation, and complication monitoring can reduce preventable risks.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 365,
    name: 'cdkl5-deficiency-disorder-journey.png',
    url: '/images/diseases/cdkl5-deficiency-disorder-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

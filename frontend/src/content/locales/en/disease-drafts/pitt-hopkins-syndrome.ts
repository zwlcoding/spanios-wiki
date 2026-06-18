import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePittHopkinsSyndrome: DiseaseDraft = {
  ...entity(6105, 'disease-pitt-hopkins-syndrome'),
  name: 'Pitt-Hopkins syndrome',
  nameEn: 'Pitt-Hopkins syndrome',
  alias: 'PTHS, PHS, TCF4-related neurodevelopmental syndrome',
  oneSentence:
    'Pitt-Hopkins syndrome is usually caused by TCF4 variants and features moderate to severe developmental delay and intellectual disability, very limited speech, epilepsy, awake hyperventilation/apnea episodes, constipation, and distinctive facial features.',
  plainName:
    'A TCF4-related genetic condition affecting development, speech, breathing rhythm, and seizure risk',
  prevalence:
    'MedlinePlus Genetics describes Pitt-Hopkins syndrome as very rare, with about 500 affected individuals reported worldwide.',
  quickLook: {
    whatItIs:
      'TCF4 affects nervous-system development and gene regulation. Children with PTHS often have very limited speech, developmental delay, seizures, and abnormal breathing episodes while awake.',
    whoToSeeFirst:
      'Developmental delay, little or no speech, seizures, constipation, and hyperventilation/apnea-like episodes should prompt pediatric neurology, developmental pediatrics, genetics, and rehabilitation.',
    isGenetic:
      'It is usually autosomal dominant and often caused by a new pathogenic TCF4 variant. Parents are usually unaffected, but counseling is still needed to explain recurrence risk.',
    hasTreatment:
      'There is no cure. Care focuses on seizure and breathing safety, constipation/GI care, rehabilitation, augmentative communication, behavior and sleep support, and family care planning.',
    commonDelayReason:
      'Early signs may be labeled cerebral palsy, autism, epileptic encephalopathy, or global developmental delay. Without neurodevelopmental genetic testing, PTHS can be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Marked motor and speech delay, with very limited speech or no functional speech.',
      'Awake hyperventilation, breath-holding, or apnea-like episodes, often triggered by excitement, anxiety, or fatigue.',
      'Childhood epilepsy, constipation, feeding/GI problems, sleep problems, anxiety, or behavioral concerns.',
      'Facial features such as wide mouth, full lips, high nasal bridge, deep-set eyes, or widely spaced teeth.',
    ],
    commonWrongTurns: [
      'Treating only autism or cerebral palsy while missing abnormal breathing as a key clue.',
      'Underestimating constipation and feeding problems that affect sleep, behavior, and quality of life.',
      'Managing seizures separately from development, communication, and behavior supports.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Developmental-behavioral pediatrics',
      'Medical genetics',
      'Rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Bring developmental milestones, speech level, videos of breathing episodes, seizure videos, and EEG results.',
      'Bring GI/constipation, sleep, feeding, behavior, and therapy assessments.',
      'Record family history, previous genetic testing, brain MRI, and medication response.',
    ],
    testsToAskAbout: [
      'TCF4 sequencing and deletion/duplication analysis, or neurodevelopmental gene panel/exome testing.',
      'EEG and seizure classification.',
      'Assessment of breathing episodes, sleep, GI constipation, ophthalmology, and orthopedic issues.',
    ],
    questionsForDoctor: [
      'Does the genetic result explain the child’s features, and do parents need confirmatory testing?',
      'Which breathing episodes require emergency care or oxygen monitoring?',
      'How should augmentative communication, therapy, and school supports be built?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Pitt-Hopkins syndrome usually causes moderate to severe intellectual disability and developmental delay. Speech is especially affected; many children have no functional speech or only a few words. Common associated issues include epilepsy, constipation, GI problems, sleep problems, anxiety, autism-spectrum features, and distinctive facial features.</p><p>Abnormal breathing is an important clue: episodes of hyperventilation followed by slow or stopped breathing occur while awake and can cause cyanosis or brief loss of consciousness, especially with excitement, anxiety, or fatigue.</p>',
    diagnosis:
      '<p>Diagnosis combines clinical features with TCF4 genetic testing, including sequencing and deletion/duplication analysis. Clinicians distinguish PTHS from Angelman syndrome, Rett syndrome, Mowat-Wilson syndrome, autism-spectrum disorder, and other developmental epileptic encephalopathies.</p>',
    treatment:
      '<p>Care is supportive: antiseizure treatment, constipation and reflux management, rehabilitation, speech and augmentative communication, behavior and sleep support. Breathing episodes require trigger recognition and a safety plan; severe cases may need neurology and respiratory/sleep evaluation.</p>',
    longTermCare:
      '<p>Long-term care adjusts communication, movement, seizures, breathing safety, constipation, nutrition, sleep, behavior, and caregiver support over time. Augmentative communication and school accommodations can improve participation.</p>',
    fertilityOrFamily:
      '<p>Most cases are de novo autosomal dominant variants, so recurrence risk is usually low but not zero. Genetic counseling explains parent testing, mosaicism risk, prenatal diagnosis, and preimplantation testing options.</p>',
    emergencySigns:
      '<p>Seek urgent care for prolonged seizure, not waking after a seizure, apnea with cyanosis or altered consciousness, severe constipation with abdominal swelling or vomiting, dehydration, aspiration, or serious behavioral safety risk.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Pitt-Hopkins syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/pitt-hopkins-syndrome/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Common features include moderate to severe developmental delay and intellectual disability, very limited speech, epilepsy, awake hyperventilation/apnea episodes, constipation, sleep, and behavior issues.</p>',
  diagnosis:
    '<p>Diagnosis combines clinical features with TCF4 sequencing, deletion/duplication analysis, or broader neurodevelopmental genetic testing.</p>',
  treatment:
    '<p>Care focuses on seizures, breathing safety, constipation/GI issues, rehabilitation, augmentative communication, sleep, and behavioral support.</p>',
  prognosis:
    '<p>Most people need long-term support; early communication support, rehabilitation, and seizure/GI/breathing management can improve quality of life.</p>',
  sourceName: 'MedlinePlus Genetics: Pitt-Hopkins syndrome',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/pitt-hopkins-syndrome/',
  slug: 'pitt-hopkins-syndrome',
  categorySlug: 'neurological',
  charityIds: [88],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

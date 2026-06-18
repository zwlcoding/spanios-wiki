import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseJoubertSyndrome: DiseaseDraft = {
  ...entity(6104, 'disease-joubert-syndrome'),
  name: 'Joubert syndrome',
  nameEn: 'Joubert syndrome',
  alias: 'Joubert-Bolthauser syndrome, JBTS, JSRD, molar tooth sign syndrome',
  oneSentence:
    'Joubert syndrome is a group of genetic brain-development conditions defined by the MRI molar tooth sign and can cause infant hypotonia, abnormal breathing, abnormal eye movements, developmental delay, ataxia, and sometimes eye, kidney, liver, or skeletal involvement.',
  plainName:
    'A genetic brainstem and cerebellar development condition affecting movement, breathing, and multiple organs',
  prevalence:
    'MedlinePlus Genetics estimates Joubert syndrome affects about 1 in 80,000 to 100,000 newborns, likely an underestimate because some people are not diagnosed.',
  quickLook: {
    whatItIs:
      'The core clue is the molar tooth sign on MRI, caused by abnormal development of the brainstem and cerebellar vermis. Different genes and subtypes lead to a broad range of neurological and organ involvement.',
    whoToSeeFirst:
      'Infant hypotonia, abnormal breathing, abnormal eye movements, developmental delay, or ataxia should prompt pediatric neurology, medical genetics, rehabilitation, and ophthalmology assessment.',
    isGenetic:
      'Many genes related to cilia are involved. Autosomal recessive inheritance is common, but other inheritance patterns occur. Confirmed families need genetic counseling.',
    hasTreatment:
      'There is no cure. Care focuses on breathing safety, rehabilitation, developmental support, seizure treatment, screening of eye/kidney/liver issues, and family support.',
    commonDelayReason:
      'Early signs may be labeled cerebral palsy, general developmental delay, or eye-movement problems. Diagnosis is delayed when high-quality MRI is not reviewed for the molar tooth sign.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infant has hypotonia and delayed head control, sitting, standing, or walking.',
      'Episodes of unusually fast breathing or apnea-like breathing occur, especially in infancy.',
      'Nystagmus, oculomotor apraxia, strabismus, or retinal disease is present.',
      'Ataxia or unsteady walking occurs, or there are polydactyly, kidney disease, or liver fibrosis clues.',
    ],
    commonWrongTurns: [
      'Treating as cerebral palsy without re-reviewing posterior fossa and brainstem MRI.',
      'Focusing only on motor delay while missing retinal, kidney, and liver surveillance.',
      'Stopping follow-up after negative genetic testing even though clinical syndrome management is still needed.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Medical genetics',
      'Rehabilitation medicine',
      'Ophthalmology',
    ],
    diagnosisChecklist: [
      'Bring brain MRI images and reports, especially posterior fossa, cerebellar vermis, and brainstem views.',
      'Record breathing pattern, milestones, eye movements, seizures, feeding, and swallowing.',
      'Bring retinal/ERG, renal ultrasound, liver tests, urinalysis, and family history.',
    ],
    testsToAskAbout: [
      'Brain MRI confirmation of the molar tooth sign.',
      'Joubert/ciliopathy gene panel or exome/genome sequencing.',
      'Screening for eye, kidney, liver, skeletal, and endocrine involvement.',
    ],
    questionsForDoctor: [
      'Does the MRI clearly show the molar tooth sign, and should imaging be reviewed again?',
      'What is the inheritance pattern and recurrence risk for our family?',
      'How often should eye, kidney, and liver screening happen?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Joubert syndrome often presents in infancy with hypotonia, abnormal breathing rhythm, abnormal eye movements, and delayed motor development. Later features may include ataxia, differences in speech and cognition, seizures, temperature-regulation problems, or behavioral concerns.</p><p>Some people also have retinal dystrophy, kidney disease, liver disease, polydactyly, oral-facial differences, or skeletal findings. Severity varies widely.</p>',
    diagnosis:
      '<p>The core diagnostic finding is the molar tooth sign on brain MRI, reflecting abnormal development of the cerebellar vermis and brainstem. Genetic testing can clarify subtype and family risk, but a negative result does not fully exclude the clinical diagnosis.</p>',
    treatment:
      '<p>Care is supportive: breathing monitoring, rehabilitation, feeding and swallowing support, seizure treatment, eye and kidney/liver follow-up, school support, and augmentative communication when needed. Plans depend on affected organs and function.</p>',
    longTermCare:
      '<p>Long-term care monitors movement, speech, learning, eye, kidney, liver, skeletal, and breathing/sleep issues. Some risks appear with age, so screening should continue even when early symptoms seem mild.</p>',
    fertilityOrFamily:
      '<p>Autosomal recessive inheritance is common, meaning parents are often carriers; other gene-specific patterns also occur. Genetic counseling explains recurrence risk, relative testing, and reproductive options.</p>',
    emergencySigns:
      '<p>Seek urgent care for apnea or cyanosis, serious choking, prolonged seizure, altered consciousness, markedly reduced urine, worsening jaundice or abdominal swelling, or rapid vision change.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Joubert syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/joubert-syndrome/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Features include infant hypotonia, abnormal breathing, abnormal eye movements, developmental delay, ataxia, seizures, and possible eye, kidney, liver, or skeletal involvement.</p>',
  diagnosis:
    '<p>The MRI molar tooth sign is the core clue, supported by clinical findings, genetic testing, and multisystem screening.</p>',
  treatment:
    '<p>Care focuses on rehabilitation, breathing and swallowing safety, seizure treatment, eye/kidney/liver monitoring, education, and family support.</p>',
  prognosis:
    '<p>Outlook varies with neurodevelopmental severity and eye, kidney, liver, or other organ involvement; ongoing surveillance reduces preventable risk.</p>',
  sourceName: 'MedlinePlus Genetics: Joubert syndrome',
  sourceUrl: 'https://medlineplus.gov/genetics/condition/joubert-syndrome/',
  slug: 'joubert-syndrome',
  categorySlug: 'neurological',
  charityIds: [87],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

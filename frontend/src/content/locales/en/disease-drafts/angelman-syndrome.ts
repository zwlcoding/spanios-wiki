import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAngelmanSyndrome: DiseaseDraft = {
  ...entity(7, 'disease-angelman-syndrome'),
  name: 'Angelman Syndrome',
  nameEn: 'Angelman Syndrome',
  alias: 'Angelman Syndrome',
  slug: 'angelman-syndrome',
  oneSentence:
    'Angelman syndrome is a genetic neurodevelopmental disorder that mainly affects neural development, commonly presenting with developmental delay, limited language ability, motor coordination difficulties, seizures, and sleep problems.',
  plainName:
    'A hereditary neurodevelopmental disorder mainly affecting development, language, and seizures',
  prevalence:
    'Estimated to occur in approximately 1 in 12,000–20,000 newborns, with variations across different sources and regions.',
  searchIntents: [
    'Angelman syndrome which doctor',
    'developmental delay no speech seizures',
    'Angelman syndrome UBE3A testing',
    'Angelman syndrome rehabilitation',
    'Angelman syndrome recurrence risk',
  ],
  quickLook: {
    whatItIs:
      'Angelman syndrome is mostly related to loss of UBE3A function from the maternal copy of chromosome 15. Children typically present with developmental delay in infancy and early childhood, then show significantly limited language, ataxia, seizures, sleep problems, and characteristic behaviors.',
    whoToSeeFirst:
      'In China, it is recommended to first see pediatrics or pediatric neurology; developmental, motor, and language issues require participation from pediatric rehabilitation; genetic counseling is needed for diagnosis and family risk explanation.',
    isGenetic:
      'Yes, but most cases are not directly inherited from parents. Recurrence risk for future pregnancies varies depending on the genetic mechanism and needs to be explained based on molecular testing results.',
    hasTreatment:
      'There is currently no cure; focus is on seizure management, sleep and behavioral support, rehabilitation training, communication aids, feeding, and family caregiving support.',
    commonDelayReason:
      'Early stages are easily broadly categorized as developmental delay, autism spectrum disorder, or cerebral palsy, without timely consideration of severely limited language, motor coordination, seizures, sleep, and genetic testing clues.',
  },
  patientJourney: {
    whenToSuspect: [
      'Obvious developmental delay after 6–12 months — failing to sit, crawl, walk, or develop language.',
      'Language expression significantly less than peers, with large gap between comprehension and expression.',
      'Unsteady walking, poor motor coordination, hand trembling, or hand-flapping when excited.',
      'Repeated seizures, abnormal EEG, or significant sleep problems.',
      'Simultaneously presenting microcephaly, feeding difficulties, constipation, easy excitability, or frequent laughter as clues.',
    ],
    commonWrongTurns: [
      'Only providing ordinary rehabilitation training without further investigating genetic causes.',
      'Being treated as autism or cerebral palsy without evaluating seizures, sleep, and UBE3A-related mechanisms.',
      "Only noticing the child 'smiles a lot,' overlooking developmental, language, and motor coordination barriers.",
      'Genetic testing results are incomplete, failing to distinguish deletion, uniparental disomy, imprinting errors, or UBE3A variants.',
    ],
    firstDepartments: [
      'Pediatrics',
      'Pediatric Neurology',
      'Pediatric Rehabilitation',
      'Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Organize developmental milestones, language ability, motor performance, sleep, seizures, and feeding status.',
      'Bring EEG, brain imaging, rehabilitation evaluation, genetic testing, and previous diagnosis records.',
      'Record developmental delay, seizures, miscarriages, or similar genetic problems in the family.',
      'Ask the doctor whether existing testing is sufficient to cover the main genetic mechanisms of Angelman syndrome.',
    ],
    testsToAskAbout: [
      '15q11-q13 methylation-related testing.',
      'Chromosomal microarray, MLPA, or copy number variation testing.',
      'UBE3A gene sequencing or related neurodevelopmental gene testing.',
      'EEG and seizure type evaluation.',
      'Language, swallowing, motor, cognitive, and sleep assessments.',
    ],
    questionsForDoctor: [
      "Which genetic mechanism does the child's test result suggest? How should recurrence risk be assessed?",
      'How should seizures, sleep, feeding, and constipation each be managed?',
      'Which rehabilitation training and communication aids should be prioritized?',
      'Which situations require emergency or prompt follow-up visits?',
      'What supportive adjustments can school and home environments provide?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Common manifestations include developmental delay, intellectual disability, significantly limited language expression, motor coordination difficulties, unsteady gait, hand-flapping, seizures, sleep disorders, and microcephaly. Some children may also have feeding difficulties, gastroesophageal reflux, constipation, strabismus, or hypopigmentation.</p>',
    diagnosis:
      '<p>Diagnosis typically combines developmental and neurological presentations, EEG, developmental assessment, and molecular genetic testing. Methylation testing can detect most cases, but different mechanisms require different testing combinations to explain recurrence risk.</p>',
    treatment:
      '<p>Management is primarily long-term support, including seizure treatment, sleep and behavioral management, physical/occupational/speech therapy, augmentative and alternative communication, nutritional and swallowing support. Treatment goals should center on safety, communication, functional participation, and family caregiving sustainability.</p>',
    longTermCare:
      '<p>Long-term care needs to focus on seizure control, sleep, constipation, scoliosis, motor ability, communication ability, nutrition, adolescence, and family caregiving stress. Adults still need continuous medical and living support.</p>',
    fertilityOrFamily:
      '<p>Recurrence risk for Angelman syndrome depends on the specific genetic mechanism. It is recommended to conduct genetic counseling after confirming the molecular diagnosis to discuss parental testing, recurrence risk for future pregnancies, and options such as prenatal or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>When seizures are prolonged, consciousness does not recover after repeated episodes, obvious breathing abnormalities, severe dehydration, persistent high fever, or significant mental status changes occur, seek emergency medical attention promptly and bring previous diagnosis and medication information.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Angelman syndrome',
      url: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/',
      type: 'official',
    },
    {
      name: 'GeneReviews: Angelman Syndrome',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1144/',
      type: 'review',
    },
    {
      name: 'GARD: Angelman syndrome',
      url: 'https://rarediseases.info.nih.gov/diseases/5810/angelman-syndrome',
      type: 'official',
    },
  ],
  symptoms:
    '<p>Common manifestations include developmental delay, intellectual disability, significantly limited language expression, motor coordination difficulties, unsteady gait, hand-flapping, seizures, sleep disorders, and microcephaly. Some children may also have feeding difficulties, gastroesophageal reflux, constipation, strabismus, or hypopigmentation.</p>',
  diagnosis:
    '<p>Diagnosis typically combines developmental and neurological presentations, EEG, developmental assessment, and molecular genetic testing. Methylation testing can detect most cases, but different mechanisms require different testing combinations to explain recurrence risk.</p>',
  treatment:
    '<p>Management is primarily long-term support, including seizure treatment, sleep and behavioral management, physical/occupational/speech therapy, augmentative and alternative communication, nutritional and swallowing support. Treatment goals should center on safety, communication, functional participation, and family caregiving sustainability.</p>',
  prognosis:
    '<p>Long-term care needs to focus on seizure control, sleep, constipation, scoliosis, motor ability, communication ability, nutrition, adolescence, and family caregiving stress. Adults still need continuous medical and living support.</p>',
  sourceName: 'MedlinePlus Genetics: Angelman syndrome',
  sourceUrl: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
  featuredImage: {
    id: 307,
    name: 'angelman-syndrome-journey.png',
    url: '/images/diseases/angelman-syndrome-journey.png',
  },
};

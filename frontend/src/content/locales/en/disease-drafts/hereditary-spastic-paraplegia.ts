import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditarySpasticParaplegia: DiseaseDraft = {
  ...entity(45, 'disease-hereditary-spastic-paraplegia'),
  name: 'Hereditary Spastic Paraplegia',
  nameEn: 'Hereditary Spastic Paraplegia',
  alias:
    'HSP, Hereditary Spastic Paraplegia of Lower Limbs, Strumpell-Lorrain Syndrome',
  slug: 'hereditary-spastic-paraplegia',
  oneSentence:
    'Hereditary spastic paraplegia is a group of inherited neurological disorders whose core features are spasticity, stiffness, and walking difficulty affecting both legs.',
  plainName:
    'A group of inherited nerve disorders where the legs become increasingly stiff and easy to trip over',
  prevalence:
    'Generally rare. Many genes are involved. Age of onset can range from childhood to adulthood, and progression speed varies widely.',
  quickLook: {
    whatItIs:
      'HSP mainly affects the long nerve pathways that control leg movement. Uncomplicated forms mainly present with leg spasticity and walking difficulty. Complicated forms may also include ataxia, peripheral neuropathy, cognitive issues, seizures, optic nerve problems, or other systemic features.',
    whoToSeeFirst:
      'When gradual leg stiffness, scissor gait, tripping, toe-walking, high muscle tone, or hyperactive reflexes develop, evaluation at neurology, neurogenetics, or rehabilitation medicine is recommended.',
    isGenetic:
      'Yes. Inheritance can be autosomal dominant, autosomal recessive, X-linked, or mitochondrial-related. Family history and genetic testing help determine the pattern.',
    hasTreatment:
      'Most types currently focus on symptom management, rehabilitation, gait aids, spasticity management, and complication care. Some treatable genetic or metabolic disorders should be actively ruled out during diagnosis.',
    commonDelayReason:
      'Childhood onset may be mistaken for cerebral palsy or posture issues. Adult onset may be attributed to lumbar spine disease, lack of exercise, or ordinary spasticity. If multiple family members have similar symptoms, consider HSP.',
  },
  patientJourney: {
    whenToSuspect: [
      'Gradual leg stiffness, shuffling gait, toe-walking, scissor gait, or frequent tripping.',
      'Neurological exam shows high leg muscle tone, hyperactive reflexes, or positive pathological reflexes.',
      'Symptoms slowly progress over years, or diagnosed as spastic cerebral palsy in childhood without clear perinatal cause.',
      'Accompanied by urinary urgency, mild sensory changes, or complicated-form features like ataxia, cognition, seizures, or vision/hearing problems.',
      'Multiple family members with similar walking difficulty, cane/wheelchair use, or early-onset leg stiffness.',
    ],
    commonWrongTurns: [
      'Managing only as lumbar disc herniation, orthopedic problem, or cerebral palsy without neurological localization or family history evaluation.',
      'Not screening for treatable genetic metabolic diseases, vitamin deficiencies, inflammation, or spinal cord lesions.',
      'Genetic testing looking at only a single gene without integrating phenotype and family interpretation.',
      'Focusing only on the diagnosis name while neglecting rehabilitation, spasticity management, bladder function, and fall prevention.',
    ],
    firstDepartments: [
      'Neurology',
      'Neurogenetics/Medical Genetics',
      'Rehabilitation Medicine',
      'Orthopedics or Foot and Ankle Clinic (for deformity assessment)',
      'Urology (for urinary urgency or bladder issues)',
    ],
    diagnosisChecklist: [
      'Record age of onset, progression speed, falls, motor ability, and similar symptoms in family.',
      'Bring brain/spinal cord MRI, electromyography, evoked potentials, and prior neurological exam records.',
      'Discuss whether HSP/motor pathway-related gene panel, exome, or genome testing is needed.',
      'Rule out treatable differential diagnoses such as metabolic, vitamin, immune, infectious, or structural spinal cord conditions.',
      'Assess gait, muscle tone, joint range of motion, foot/ankle deformities, bladder function, and fall risk.',
    ],
    testsToAskAbout: [
      'Brain and spinal cord MRI.',
      'HSP-related gene testing or comprehensive genomic testing.',
      'Electromyography, nerve conduction, and evoked potentials (when the doctor considers necessary).',
      'Differential workup for vitamins, metabolism, infection, and immunity.',
      'Gait and rehabilitation functional assessments.',
    ],
    questionsForDoctor: [
      'Does my presentation look more like uncomplicated or complicated HSP?',
      'Which treatable conditions need to be ruled out first?',
      'How will genetic test results affect family screening and reproductive counseling?',
      'How are spasticity, pain, foot/ankle problems, and fall risk managed?',
      'What rehabilitation exercises and assistive devices do I need?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The core features of HSP are leg spasticity, stiffness, weakness, and walking difficulty, often with hyperactive reflexes, positive pathological reflexes, foot drop, or scissor gait. Some patients have urinary urgency or mild sensory changes. Complicated forms may also include ataxia, peripheral neuropathy, seizures, cognitive impairment, optic nerve, or other systemic features.</p>',
    diagnosis:
      '<p>Diagnosis requires neurological examination, brain and spinal cord imaging, family history, differential diagnosis workup, and genetic testing. Many genes are linked to HSP. A negative result does not completely rule out the condition, and a positive result requires interpretation in the context of symptoms, inheritance pattern, and family validation.</p>',
    treatment:
      "<p>Treatment focuses on functional management, including rehabilitation, stretching and gait training, spasticity and pain management, assistive devices, fall prevention, foot/ankle deformity care, and bladder symptom management. If a treatable metabolic or nutritional condition is identified, management should follow that specific disorder's guidelines.</p>",
    longTermCare:
      '<p>Long-term care focuses on walking ability, falls, joint contractures, pain, bladder function, psychological support, and work/life support. Regular rehabilitation assessments improve daily function more than waiting for genetic results alone.</p>',
    fertilityOrFamily:
      '<p>HSP has various inheritance patterns. After identifying the disease-causing gene, family members can use genetic counseling to learn about relative screening, predictive testing, prenatal diagnosis, or preimplantation genetic testing options.</p>',
    emergencySigns:
      '<p>Sudden worsening of walking ability, acute urinary retention, significant back pain with neurological changes, rapid worsening after infection, or new arm/swallowing/breathing problems require prompt medical attention. Do not assume all acute problems are due to HSP.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
    },
    {
      name: 'NINDS: Hereditary Spastic Paraplegia',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hereditary-spastic-paraplegia',
    },
  ],
  symptoms:
    '<p>Main features include leg spasticity, stiffness, weakness, scissor gait, and easy tripping, with possible urinary urgency or complicated neurological features.</p>',
  diagnosis:
    '<p>Assessment includes neurological examination, brain and spinal cord MRI, treatable cause workup, HSP-related genetic testing, and rehabilitation functional evaluation.</p>',
  treatment:
    '<p>Management centers on rehabilitation, spasticity and pain management, assistive devices, fall prevention, and bladder and foot/ankle care.</p>',
  prognosis:
    '<p>Most uncomplicated forms progress slowly and do not significantly shorten lifespan, but functional impact varies widely. Complicated forms depend on involvement of related systems.</p>',
  sourceName:
    'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 344,
    name: 'hereditary-spastic-paraplegia-journey.png',
    url: '/images/diseases/hereditary-spastic-paraplegia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalMyasthenicSyndrome: DiseaseDraft = {
  ...entity(23, 'disease-congenital-myasthenic-syndrome'),
  name: 'Congenital Myasthenic Syndrome',
  nameEn: 'Congenital Myasthenic Syndrome',
  alias: 'CMS, Congenital Neuromuscular Junction Disorder',
  slug: 'congenital-myasthenic-syndrome',
  oneSentence:
    'Congenital Myasthenic Syndrome is a group of inherited neuromuscular junction disorders, often presenting with fluctuating muscle weakness and fatigue starting from infancy, ptosis, and swallowing or breathing difficulties.',
  plainName:
    'Muscle weakness caused by a congenital abnormality in signal transmission between nerves and muscles',
  prevalence:
    'Generally rare, with multiple related genes and subtypes; different subtypes vary significantly in age of onset, severity, and treatment response.',
  quickLook: {
    whatItIs:
      'When nerves send a "contract" signal to muscles, it needs to pass through the neuromuscular junction. The problem in CMS lies in this junction, causing muscles to fatigue easily or become weak.',
    whoToSeeFirst:
      'When infants have weak feeding, frequent choking, ptosis, recurrent breathing problems, or noticeable fatigue after activity, consider visiting a pediatric neurologist or neuromuscular disease specialist; seek emergency care for breathing difficulty or severe choking.',
    isGenetic:
      'Yes. Most subtypes follow autosomal recessive inheritance, though dominant inheritance or de novo variants also occur. Genetic classification affects treatment choices, so professional interpretation is needed.',
    hasTreatment:
      'Some subtypes have targeted treatments, but different genetic subtypes may have opposite responses to medications. Treatment should be determined by a neuromuscular specialist based on genetic classification.',
    commonDelayReason:
      'Symptoms can resemble acquired myasthenia gravis, myopathy, cerebral palsy, or simple developmental delay; without electrophysiological testing and genetic testing, it can be difficult to classify for a long time.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infants tire easily during feeding, weak sucking, weak crying, ptosis, or limited eye movement.',
      'Children show obvious weakness after activity that improves with rest; symptoms are more pronounced in the afternoon or when tired.',
      'Recurrent choking, difficulty swallowing, respiratory muscle weakness, or worsening breathing problems during infections.',
      'Low muscle tone, delayed head control, or motor development, but creatine kinase is not significantly elevated.',
      'Family history of similar muscle weakness, breathing problems in infancy, or affected siblings.',
    ],
    commonWrongTurns: [
      'Treating only for acquired myasthenia gravis without considering the congenital genetic subtype.',
      'Accepting low muscle tone or developmental delay as a final diagnosis without further neuromuscular junction evaluation.',
      'Skipping genetic testing, resulting in treatment decisions that lack a genetic classification basis.',
      'Overlooking swallowing and respiratory muscle involvement until infection or choking leads to an emergency.',
    ],
    firstDepartments: [
      'Pediatric Neurology',
      'Neurology (Neuromuscular Disease Specialist)',
      'Rehabilitation Medicine',
      'Respiratory Medicine/Critical Care Medicine (for respiratory involvement)',
      'Medical Genetics/Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Record whether symptoms fluctuate with fatigue, activity, fever, or time of day.',
      'Bring records from EMG, repetitive nerve stimulation, single-fiber EMG, CK, antibody tests, and genetic testing.',
      'Ask your doctor to distinguish between Congenital Myasthenic Syndrome, acquired myasthenia gravis, myopathy, and motor neuron/peripheral nerve disease.',
      'Confirm whether swallowing safety, lung function, and sleep/nighttime breathing have been assessed.',
      'Ask how your genetic results will affect treatment choices and contraindications.',
    ],
    testsToAskAbout: [
      'Repetitive nerve stimulation and single-fiber EMG.',
      'Neuromuscular junction-related gene panel or whole exome sequencing.',
      'Antibodies related to acquired myasthenia gravis, for differential diagnosis.',
      'Swallowing assessment, lung function, and respiratory muscle strength evaluation.',
      'Rehabilitation and developmental assessments.',
    ],
    questionsForDoctor: [
      'Does the current evidence more support CMS or acquired myasthenia gravis?',
      'Has the genetic subtype been identified? How will it affect medication choices?',
      'Do I need to monitor swallowing and respiratory function? What situations require emergency care?',
      'How should rehabilitation training and daily activity intensity be arranged?',
      'Do family members need carrier testing or genetic counseling?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>CMS commonly presents with fluctuating muscle weakness and easy fatigue, which can affect eye muscles, face, swallowing muscles, respiratory muscles, and proximal limb muscles. Infants may show weak feeding, weak cry, low muscle tone, ptosis, or breathing problems; children and adults may present with weakness after activity, difficulty climbing stairs, ptosis, double vision, or difficulty swallowing. Different genetic subtypes vary greatly.</p>',
    diagnosis:
      '<p>Diagnosis requires combining fatigable symptoms, neurological examination, electrophysiological testing, and genetic testing. Repetitive nerve stimulation, single-fiber EMG, and other tests can suggest abnormal neuromuscular transmission; genetic testing helps identify the subtype and guide treatment. Doctors will also rule out acquired myasthenia gravis, myopathy, peripheral neuropathy, and central nervous system diseases.</p>',
    treatment:
      '<p>Treatment is highly dependent on the subtype. Some medications may help certain subtypes but may be ineffective or worsen symptoms in others, so treatment plans should not be copied from others. Management also includes respiratory and swallowing assessment, infection contingency planning, rehabilitation training, nutritional support, and school/life accommodations.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on muscle strength, fatigue, swallowing safety, respiratory function, sleep breathing, nutrition, growth and development, and daily activity capacity. Families should keep copies of genetic reports, electrophysiology reports, medication responses, and emergency instructions, and ensure schools or caregivers understand fatigue and respiratory risks.</p>',
    fertilityOrFamily:
      '<p>Most CMS subtypes follow autosomal recessive inheritance, with a few being dominant. After pathogenic variants are identified, families can learn about options such as carrier testing, recurrence risk, prenatal diagnosis, or preimplantation genetic testing through genetic counseling.</p>',
    emergencySigns:
      '<p>Breathing difficulty, obvious cyanosis, rapid breathing after severe choking, inability to eat or drink, rapid worsening of weakness during infection, altered consciousness, or recurrent aspiration should prompt immediate emergency care, with clear mention of suspected or confirmed Congenital Myasthenic Syndrome.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
    },
    {
      name: 'MedlinePlus Genetics: Congenital myasthenic syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/congenital-myasthenic-syndrome/',
    },
    {
      name: 'Orphanet: Congenital myasthenic syndrome',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/590',
    },
  ],
  symptoms:
    '<p>May present with ptosis, double vision, difficulty feeding or swallowing, weakness after activity, respiratory muscle involvement, and easy fatigue, often with fluctuating symptoms.</p>',
  diagnosis:
    '<p>Evaluation typically includes neurological examination, repetitive nerve stimulation, single-fiber EMG, relevant antibody testing for differential diagnosis, and genetic testing.</p>',
  treatment:
    '<p>Treatment requires individualized selection based on genetic subtype, along with respiratory/swallowing assessment, rehabilitation training, and acute exacerbation contingency planning.</p>',
  prognosis:
    '<p>Prognosis depends on subtype, degree of respiratory and swallowing involvement, treatment response, and management during infections; clear classification helps reduce the risk of inappropriate treatment.</p>',
  sourceName: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 322,
    name: 'congenital-myasthenic-syndrome-journey.png',
    url: '/images/diseases/congenital-myasthenic-syndrome-journey.png',
  },
  tagSlugs: ['neuromuscular', 'genetic-counseling'],
};

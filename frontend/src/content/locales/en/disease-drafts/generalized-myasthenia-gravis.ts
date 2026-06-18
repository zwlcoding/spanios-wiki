import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGeneralizedMyastheniaGravis: DiseaseDraft = {
  ...entity(32, 'disease-generalized-myasthenia-gravis'),
  name: 'Generalized Myasthenia Gravis',
  nameEn: 'Generalized Myasthenia Gravis',
  alias:
    'gMG, Generalized Myasthenia Gravis, Acquired Autoimmune Myasthenia Gravis',
  slug: 'generalized-myasthenia-gravis',
  oneSentence:
    'Generalized Myasthenia Gravis is an autoimmune disease affecting the connection between nerves and muscles, causing fluctuating weakness in muscles of the eyes, face, swallowing, speech, limbs, or breathing.',
  plainName:
    'An autoimmune muscle weakness that gets worse with activity and better with rest',
  prevalence:
    'A rare neurological immune disease that can occur at any age. Common onset groups include young women and older men.',
  quickLook: {
    whatItIs:
      'Antibodies from the immune system interfere with signals between nerves and muscles, making muscles tire easily. Generalized means that besides eye muscles, it also affects muscles of the face and throat, limbs, neck, or breathing.',
    whoToSeeFirst:
      'When experiencing drooping eyelids, double vision, nasal speech, difficulty chewing or swallowing, trouble holding up the head, limb weakness that worsens with activity, consult a neurology specialist in neuroimmunology or neuromuscular diseases. If breathing is difficult or swallowing is significantly impaired, go to the emergency department immediately.',
    isGenetic:
      'It is usually not directly inherited but is an acquired autoimmune condition. Some families may have autoimmune tendencies. It needs to be distinguished from congenital myasthenic syndromes.',
    hasTreatment:
      'Multiple treatment options exist including symptom control, immunotherapy, emergency interventions, and thymus-related strategies. The specific choice depends on antibodies, thymus status, severity, age, and other medical conditions.',
    commonDelayReason:
      'Symptoms fluctuate significantly, and early on may only show as eye muscle issues or fatigue. It is easily mistaken for eye problems, cerebrovascular issues, anxiety, throat problems, or ordinary tiredness.',
  },
  patientJourney: {
    whenToSuspect: [
      'Eyelid drooping or double vision that fluctuates with time of day, fatigue, or activity.',
      'Speech becoming nasal, difficulty chewing, choking when swallowing, trouble holding up the head, or reduced facial expression.',
      'Weakness in proximal limbs, difficulty climbing stairs, raising arms, or standing up, which improves with rest.',
      'Weakness noticeably worsening after infection, surgery, certain medications, or stress.',
      'Breathing difficulty, shortness of speech, or inability to lie flat, suggesting possible crisis risk.',
    ],
    commonWrongTurns: [
      'Eye muscle symptoms treated only as an eye problem without evaluating the neuromuscular junction.',
      'Swallowing and speech difficulties attributed to ENT (ear, nose, throat) or psychological issues.',
      'Normal exam results on the day of testing due to symptom fluctuation, incorrectly thinking no organic problem exists.',
      'Not informing about MG history before taking medications, leading to exposure to drugs that can worsen myasthenia.',
    ],
    firstDepartments: [
      'Neurology (neuroimmunology or neuromuscular specialty)',
      'Emergency Medicine (for breathing difficulty, swallowing difficulty, or rapid worsening)',
      'Thoracic Surgery (for thymoma or thymus evaluation)',
      'Rehabilitation Medicine (for functional management during stable periods)',
    ],
    diagnosisChecklist: [
      'Document which muscles are weak, whether weakness worsens with activity and improves with rest, daily fluctuations, and triggers.',
      'Bring records from ophthalmology, neurology, swallowing tests, chest CT/MRI, antibody tests, and EMG results.',
      'Ask about antibody testing for AChR, MuSK, LRP4, and repetitive nerve stimulation or single-fiber EMG.',
      'Confirm if thymus imaging is needed to evaluate thymus hyperplasia or thymoma.',
      'Compile current medications and ask the doctor which ones might worsen MG.',
    ],
    testsToAskAbout: [
      'AChR, MuSK, LRP4 and other myasthenia gravis-related antibodies.',
      'Repetitive nerve stimulation and single-fiber EMG testing.',
      'Ice pack test or bedside fatigue test (if the doctor considers it appropriate).',
      'Chest CT/MRI to evaluate the thymus.',
      'Pulmonary function, swallowing assessment, and evaluation of infection triggers.',
    ],
    questionsForDoctor: [
      'Am I generalized or ocular type? How severe is it currently?',
      'How will antibody and thymus test results affect my treatment choices?',
      'What symptoms indicate a myasthenic crisis requiring immediate emergency care?',
      'Which medications, infections, or surgeries might worsen my condition?',
      'What are the treatment goals, follow-up schedule, and medication side effect monitoring?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>gMG can present with drooping eyelids, double vision, reduced facial expression, slurred or nasal speech, chewing fatigue, swallowing difficulty, neck weakness, proximal limb weakness, and respiratory muscle involvement. A characteristic feature is worsening with activity and improvement with rest, but in severe cases, swallowing or breathing crisis may occur.</p>',
    diagnosis:
      '<p>Diagnosis requires combining fluctuating muscle weakness presentation, neurological examination, antibody testing, electrophysiological studies, and thymus imaging. Doctors will differentiate from stroke, motor neuron disease, myopathy, congenital myasthenic syndromes, Lambert-Eaton syndrome, and thyroid eye disease, among others.</p>',
    treatment:
      '<p>Treatment includes symptom-improving medications, immunotherapy, emergency intervention strategies, thymus-related evaluation, and rehabilitation support. Plans need to be individualized based on antibody type, thymus status, crisis risk, comorbidities, and pregnancy planning. Patients should not stop or adjust medications on their own.</p>',
    longTermCare:
      '<p>Long-term management focuses on weakness scoring, swallowing and breathing risk assessment, medication side effect monitoring, bone health, blood pressure and blood sugar management, and quality of life. Patients should keep diagnosis records, medication lists, and emergency instructions. Always inform medical providers about MG history before surgery or starting new medications.</p>',
    fertilityOrFamily:
      '<p>MG is usually not directly inherited. Pregnancy planning requires advance discussion with neurology and obstetrics about disease stability, medication safety, delivery, and the risk of transient neonatal myasthenia.</p>',
    emergencySigns:
      '<p>Breathing difficulty, shortness of speech, significant swallowing difficulty, frequent choking, inability to lie flat, rapid weakness progression, marked worsening after infection, or altered consciousness require immediate emergency care. Clearly inform providers of your myasthenia gravis history.</p>',
  },
  sources: [
    {
      name: 'NINDS: Myasthenia Gravis',
      type: 'official',
      url: 'https://www.ninds.nih.gov/node/733',
    },
    {
      name: 'MedlinePlus: Myasthenia Gravis',
      type: 'official',
      url: 'https://medlineplus.gov/myastheniagravis.html',
    },
    {
      name: 'MedlinePlus Genetics: Myasthenia gravis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/myasthenia-gravis',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>May include drooping eyelids, double vision, swallowing or speech difficulty, neck and limb weakness, and respiratory muscle involvement, typically worsening with activity and improving with rest.</p>',
  diagnosis:
    '<p>Evaluation includes antibody testing, repetitive nerve stimulation/single-fiber EMG, thymus imaging, and swallowing and breathing risk assessment.</p>',
  treatment:
    '<p>Management includes symptom treatment, immunotherapy, crisis intervention, thymus evaluation, and long-term follow-up, individualized by neurology specialists.</p>',
  prognosis:
    '<p>Most patients can achieve significant improvement with proper treatment, but crisis, infection, medications, and comorbidities determine long-term risk.</p>',
  sourceName: 'NINDS: Myasthenia Gravis',
  sourceUrl: 'https://www.ninds.nih.gov/node/733',
  categorySlug: 'neurological',
  charityIds: [12],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 331,
    name: 'generalized-myasthenia-gravis-journey.png',
    url: '/images/diseases/generalized-myasthenia-gravis-journey.png',
  },
  tagSlugs: ['neuromuscular'],
};

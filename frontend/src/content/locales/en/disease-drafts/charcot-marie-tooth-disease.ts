import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCharcotMarieToothDisease: DiseaseDraft = {
  ...entity(18, 'disease-charcot-marie-tooth-disease'),
  name: 'Charcot-Marie-Tooth Disease',
  nameEn: 'Charcot-Marie-Tooth Disease',
  alias:
    'CMT, hereditary motor and sensory neuropathy, hereditary peripheral neuropathy',
  slug: 'charcot-marie-tooth-disease',
  oneSentence:
    'Charcot-Marie-Tooth disease is a group of inherited peripheral nerve disorders that often present with gradual weakness in the feet and lower legs, foot drop, high arches, reduced sensation, or frequent tripping.',
  plainName:
    'An inherited nerve condition that affects the peripheral nerves in the hands and feet',
  prevalence:
    'CMT is considered one of the most common inherited peripheral nerve disorders, though statistics vary widely across countries and subtypes.',
  quickLook: {
    whatItIs:
      'Peripheral nerves act like cables connecting the brain, spinal cord, and limbs. CMT affects the axons or myelin sheath of these nerves, causing gradual loss of strength and sensation in the legs, feet, hands, and forearms.',
    whoToSeeFirst:
      'When experiencing frequent tripping, foot drop, high arches, distal muscle wasting, or multiple family members with similar symptoms, start with neurology or a neuromuscular specialty clinic; children with symptom onset can see pediatric neurology.',
    isGenetic:
      'Yes. CMT can follow autosomal dominant, autosomal recessive, or X-linked inheritance patterns, or may occur without a clear family history. Genetic test results need to be interpreted together with electrophysiology findings and clinical presentation.',
    hasTreatment:
      'Most types currently have no cure. Management focuses on rehabilitation, orthotic devices, foot and hand protection, pain and complication management, and genetic counseling.',
    commonDelayReason:
      'Progression is usually very slow, and early symptoms are often mistaken for walking posture issues, poor motor skills, flat feet, or high arches; without probing family history or performing nerve conduction studies, diagnosis is often delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Frequent tripping, difficulty running or jumping, dragging toes, or foot drop beginning in childhood, adolescence, or young adulthood.',
      'Thinning of the distal lower legs, noticeably raised arches, claw toes, ankle instability, or need for ankle-foot orthotics.',
      'Decreased fine motor control in the hands, such as greater difficulty buttoning, writing, or opening jars than before.',
      'Numbness, tingling, or decreased sensitivity to temperature in the toes, soles, or fingers, or diminished tendon reflexes.',
      'Multiple family members with high arches, gait abnormalities, hand or foot weakness, peripheral neuropathy, or similar diagnoses.',
    ],
    commonWrongTurns: [
      'Treating only as a foot deformity or sports injury without evaluating for peripheral neuropathy.',
      'Attributing slowly progressive weakness to lack of exercise, posture problems, or growing pains.',
      'Ordering imaging studies without nerve conduction studies, electromyography, or genetic evaluation.',
      'Making a definitive diagnosis based on a single gene variant without considering variant interpretation, family testing, and clinical correlation.',
      'Not confirming with a doctor whether rehabilitation intensity, orthotic devices, and foot care are appropriate for current functional status.',
    ],
    firstDepartments: [
      'Neurology (with focus on neuromuscular disease or peripheral neuropathy)',
      'Pediatric neurology (for symptom onset in children or adolescents)',
      'Physical medicine and rehabilitation',
      'Orthopedics/podiatric surgery (for foot deformity, orthotic evaluation, or surgical assessment)',
      'Genetics counseling clinic',
    ],
    diagnosisChecklist: [
      'Record age of symptom onset, rate of progression, whether symptoms started in the feet or hands, and presence of pain or numbness.',
      'Gather family history across three generations for high arches, foot drop, hand or foot weakness, peripheral neuropathy, or similar diagnoses.',
      'Bring previous nerve conduction studies, electromyography, foot/ankle or spine imaging, rehabilitation assessments, and genetic test reports.',
      'Ask your doctor to determine whether the condition is demyelinating, axonal, or intermediate type, and whether further genetic testing is needed.',
      'List current medications and supplements, and ask your doctor or pharmacist whether any should be avoided due to potential worsening of peripheral neuropathy.',
    ],
    testsToAskAbout: [
      'Nerve conduction velocity studies and electromyography.',
      'Genetic testing strategies targeting PMP22 duplication/deletion and other CMT-related genes.',
      'Foot, ankle, spine, gait, and hand function assessments.',
      'Testing for acquired causes of peripheral neuropathy when needed, such as diabetes, vitamin deficiencies, thyroid disease, or immune-mediated neuropathies.',
      'Whether family members need clinical screening or genetic cascade testing.',
    ],
    questionsForDoctor: [
      'Does my presentation fit a specific CMT type, or do we need to rule out acquired peripheral neuropathy first?',
      'What do the nerve conduction and electromyography results indicate? What type of genetic testing do I need?',
      'What rehabilitation exercises, orthotics, or gait aids are appropriate for me now?',
      'How should I follow up on foot pain, fall risk, skin breakdown, and declining hand function?',
      'Does my family need testing? If planning a pregnancy, what can genetic counseling tell us?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>CMT usually affects the motor and sensory nerves of the feet, legs, hands, and forearms. Common features include foot drop, frequent tripping, high-stepping gait, high arches or claw toes, distal muscle wasting in the lower legs, difficulty with fine motor tasks, numbness, tingling, pain, decreased sensation, and diminished tendon reflexes. Onset age and severity vary considerably between subtypes, and even family members with the same condition may be affected differently.</p>',
    diagnosis:
      '<p>Diagnosis usually begins with medical history, family history, and neurological examination, followed by nerve conduction velocity studies, electromyography, and genetic testing. Doctors use electrophysiology results to determine whether the condition is more consistent with a demyelinating, axonal, or intermediate type, and will rule out acquired causes such as diabetes, vitamin deficiencies, thyroid disease, or immune-mediated neuropathies. Genetic results need to be interpreted by a doctor familiar with neurogenetics in the context of clinical findings.</p>',
    treatment:
      "<p>Most types of CMT currently have no cure. Treatment goals are to maintain mobility, reduce falls, and protect joints. Common approaches include physical therapy, occupational therapy, stretching and strengthening exercises, ankle-foot orthotics, shoe inserts or other assistive devices, pain management, and orthopedic evaluation for severe foot deformity. Treatment plans should be tailored to the individual's functional status by neurology, rehabilitation, and orthopedic specialists.</p>",
    longTermCare:
      '<p>Long-term follow-up focuses on gait and fall risk, ankle-foot deformities, pain, skin breakdown, hand function, scoliosis, and less common associated issues such as hearing or vision problems. Patients may keep records of electrophysiology studies, genetic reports, rehabilitation plans, and orthotic specifications to help doctors assess progression at follow-up visits. Exercise typically needs to be individualized, avoiding overexertion or unsuitable training that could cause injury.</p>',
    fertilityOrFamily:
      '<p>CMT follows various inheritance patterns, including autosomal dominant, autosomal recessive, and X-linked inheritance, and may also occur from new (de novo) variants. After the disease-causing gene is identified, patients and family members can learn about options such as family screening, reproductive risks, prenatal diagnosis, or preimplantation genetic testing through genetic counseling. When the disease-causing gene has not been identified, family members can still undergo clinical screening based on symptoms and electrophysiology results.</p>',
    emergencySigns:
      '<p>CMT is usually a chronic, slowly progressive condition. However, seek medical attention promptly if you experience rapid worsening of weakness or numbness, severe foot infection or ulcers, frequent falls with injuries, difficulty breathing, or a progression rate that clearly differs from your previous course, to rule out infection, acquired neuropathy, medication effects, or other acute problems.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
    },
    {
      name: 'MedlinePlus Genetics: Charcot-Marie-Tooth disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/charcot-marie-tooth-disease/',
    },
    {
      name: 'NINDS: Charcot-Marie-Tooth Disease',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/charcot-marie-tooth-disease',
    },
  ],
  symptoms:
    '<p>Common features include foot drop, frequent tripping, high arches, distal muscle wasting, numbness or decreased sensation in the hands and feet, with usually slow progression.</p>',
  diagnosis:
    '<p>Assessment typically includes neurological examination, family history, nerve conduction velocity studies, electromyography, genetic testing, and exclusion of acquired causes of peripheral neuropathy.</p>',
  treatment:
    '<p>Management focuses on rehabilitation exercises, orthotic devices, gait and foot care, pain management, orthopedic evaluation, and genetic counseling, with individualized plans.</p>',
  prognosis:
    '<p>Most patients experience chronic, slow progression with wide variation in severity; appropriate rehabilitation, assistive devices, and complication management can help maintain function and quality of life.</p>',
  sourceName: 'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 317,
    name: 'charcot-marie-tooth-disease-journey.png',
    url: '/images/diseases/charcot-marie-tooth-disease-journey.png',
  },
  tagSlugs: ['neuromuscular', 'genetic-counseling'],
};

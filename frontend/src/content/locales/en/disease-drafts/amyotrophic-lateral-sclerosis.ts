import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAmyotrophicLateralSclerosis: DiseaseDraft = {
  ...entity(1, 'disease-als'),
  name: 'Amyotrophic Lateral Sclerosis',
  nameEn: 'Amyotrophic Lateral Sclerosis',
  alias: "Lou Gehrig's disease, ALS, Motor Neuron Disease",
  icd10Code: 'G12.2',
  slug: 'amyotrophic-lateral-sclerosis',
  oneSentence:
    'Amyotrophic Lateral Sclerosis is a progressive neurological disease affecting motor neurons, which can gradually cause muscle weakness, atrophy, and impaired swallowing and breathing.',
  plainName: 'Progressive Motor Neuron Disease',
  prevalence:
    'Estimated at approximately 2–5 per 100,000 people worldwide, though prevalence varies by region, age structure, and reporting methods.',
  searchIntents: [
    'ALS early symptoms',
    'ALS which doctor to see',
    'muscle twitching weakness ALS',
    'motor neuron disease EMG testing',
    'ALS swallowing breathing risk',
  ],
  quickLook: {
    whatItIs:
      'ALS mainly affects the nerve cells that control voluntary movement. Sensation, consciousness, and eye movements are relatively preserved in many patients, but muscles of the limbs, speech, swallowing, and breathing may be progressively affected.',
    whoToSeeFirst:
      'Prioritize neurology, ideally a clinic with experience in neuromuscular disease, motor neuron disease, or electromyography (EMG) assessment. If you have breathing difficulty, choking episodes, or significant weight loss, respiratory and nutritional support should be assessed promptly.',
    isGenetic:
      'Most ALS cases are sporadic; a minority are familial. If there is a family history of ALS, frontotemporal dementia, or earlier-onset cases, consider asking neurology or genetic counseling whether gene testing is appropriate.',
    hasTreatment:
      "There is currently no treatment that can reverse the disease. Standard management usually includes disease-modifying medication assessment, respiratory and nutritional support, rehabilitation, symptom management, and care planning. Specific medications and new drug information should be based on local regulatory approval status and your doctor's advice.",
    commonDelayReason:
      'Early weakness, twitches, clumsiness, or slurred speech are easily mistaken for cervical spine disease, lumbar disc problems, stroke sequelae, anxiety, or simple muscle strain, leading to delayed EMG and neurological referral.',
  },
  patientJourney: {
    whenToSuspect: [
      'Progressive weakness or clumsiness in one hand or foot lasting weeks to months.',
      'Muscle twitching, fasciculations, or atrophy accompanying worsening weakness.',
      'Slurred speech, choking when swallowing, drooling, or voice changes.',
      'Frequent tripping, difficulty lifting the foot, or declining fine motor skills.',
      'Progressive motor decline without obvious numbness.',
    ],
    commonWrongTurns: [
      'Long-term treatment for cervical or lumbar spine disease or peripheral nerve compression without explaining widespread progression.',
      'Managing only individual symptoms without tracking whether weakness spreads to other areas.',
      'Delaying respiratory function and nutritional assessment until swallowing or breathing is significantly affected.',
      'Overlooking mood, communication, care planning, and family support until a crisis occurs.',
    ],
    firstDepartments: [
      'Neurology',
      'Neuromuscular disease clinic',
      'Rehabilitation medicine',
      'Respiratory medicine (when respiratory symptoms arise)',
    ],
    diagnosisChecklist: [
      'Record when and in what order weakness, fasciculations, swallowing, or speech changes first appeared.',
      'Bring cervical/lumbar spine imaging, brain imaging, EMG, nerve conduction studies, blood tests, and prior diagnostic records.',
      'List weight changes, choking episodes, nighttime awakenings, morning headaches, shortness of breath with activity.',
      'Gather family history of ALS, motor neuron disease, frontotemporal dementia, or similar neurodegenerative conditions.',
    ],
    testsToAskAbout: [
      'EMG and nerve conduction studies.',
      'Brain, cervical, or lumbar spine imaging to rule out similar conditions.',
      'Respiratory function assessment, such as vital capacity, overnight ventilation, or blood gas studies.',
      'Swallowing and nutritional assessment, involving speech therapy, nutrition, and rehabilitation teams as needed.',
      'Gene testing for ALS when there is a family history or younger onset.',
    ],
    questionsForDoctor: [
      'Does the current evidence support ALS? What other similar conditions still need to be ruled out?',
      'What is my current stage of respiratory and swallowing risk, and how often should I be rechecked?',
      'Which medications or supportive treatments are suitable for me, and what are the expected goals?',
      'When should I consider non-invasive ventilation, feeding tube, communication aids, or home care adjustments?',
      'What emergency signs and daily caregiving skills do family members need to learn?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>ALS often presents with progressive muscle weakness, muscle atrophy, fasciculations, spasticity, tripping, declining fine motor skills, slurred speech, difficulty swallowing, or breathing difficulty. Symptoms may start in the limbs or in muscles related to speech and swallowing.</p><p>Progression speed varies widely among patients. Sensory numbness is typically not a main feature; if numbness, pain, or single nerve root symptoms predominate, other conditions will also be considered.</p>',
    diagnosis:
      '<p>Diagnosis usually requires neurology to combine medical history, neurological examination, EMG and nerve conduction studies, and to rule out similar conditions such as cervical cord disease, peripheral neuropathy, myopathy, metabolic or immune-related disorders through imaging and blood tests.</p><p>A minority of patients have a familial inheritance background; based on age, family history, and clinical presentation, the doctor may suggest genetic testing. Genetic results require professional interpretation and cannot be used alone to predict disease course.</p>',
    treatment:
      "<p>The goal of treatment is to slow functional decline as much as possible, proactively manage respiratory and nutritional risks, improve communication, and maintain quality of life. Neurology can assess whether disease-modifying medications are appropriate, while coordinating with rehabilitation, respiratory, nutrition, speech therapy, psychology, and nursing teams.</p><p>Information about new drugs and clinical trials changes rapidly and should be based on local regulatory approval, hospital availability, and the treating physician's assessment. Do not purchase or stop medications on your own, and do not treat single-drug promotion as confirmed efficacy.</p>",
    longTermCare:
      '<p>Long-term management focuses on regular assessment of strength, swallowing, weight, respiratory function, communication ability, sleep, pain, spasticity, mood, and caregiver burden. Earlier establishment of respiratory support, nutritional support, assistive devices, and home care plans is generally more effective than crisis-driven interventions.</p>',
    fertilityOrFamily:
      '<p>Most ALS cases do not have a clear familial inheritance pattern. If there are multiple family members with ALS, frontotemporal dementia, or younger-onset disease, it is recommended to discuss genetic testing, family member risk, and reproductive issues under the guidance of neurology and genetic counseling.</p>',
    emergencySigns:
      '<p>If you experience significant shortness of breath, inability to lie flat, nighttime awakenings, worsening morning headaches, frequent choking episodes, rapid weight loss, fever with productive cough or suspected aspiration, seek medical care promptly. If you are using respiratory support equipment and the device malfunctions or your breathing suddenly worsens, contact your medical team or go to the emergency department right away.</p>',
  },
  sources: [
    {
      name: 'National Institute of Neurological Disorders and Stroke: Amyotrophic Lateral Sclerosis',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/amyotrophic-lateral-sclerosis-als',
    },
    {
      name: 'MedlinePlus: Amyotrophic Lateral Sclerosis',
      type: 'official',
      url: 'https://medlineplus.gov/amyotrophiclateralsclerosis.html',
    },
    {
      name: 'MedlinePlus Genetics: Amyotrophic lateral sclerosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/amyotrophic-lateral-sclerosis/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Common features include progressive muscle weakness, muscle atrophy, fasciculations, swallowing or speech difficulty. Most patients retain relatively preserved consciousness and sensory function.</p>',
  diagnosis:
    '<p>Diagnosis typically combines neurological examination, EMG, nerve conduction studies, imaging to exclude other causes, and genetic testing when indicated.</p>',
  treatment:
    '<p>Treatment focuses on disease-modifying medication assessment, respiratory and nutritional support, rehabilitation training, symptom management, and multidisciplinary follow-up.</p>',
  prognosis:
    '<p>Disease course varies widely. Early identification of respiratory, swallowing, and nutritional risks, with proactive arrangement of supportive measures, can help improve quality of life and continuity of care.</p>',
  categorySlug: 'neurological',
  charityIds: [34, 35],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 310,
    name: 'amyotrophic-lateral-sclerosis-journey.png',
    url: '/images/diseases/amyotrophic-lateral-sclerosis-journey.png',
  },
  tagSlugs: ['neuromuscular', 'genetic-counseling'],
};

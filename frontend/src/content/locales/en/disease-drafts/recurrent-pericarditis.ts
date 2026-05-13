import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRecurrentPericarditis: DiseaseDraft = {
  ...entity(2070, 'disease-recurrent-pericarditis'),
  name: 'Recurrent pericarditis',
  nameEn: 'Recurrent pericarditis',
  alias:
    'RP; recurrent pericarditis; China Second Rare Disease Catalog item 70',
  oneSentence:
    'Recurrent pericarditis is return of pericardial inflammation after a symptom-free interval, causing repeated chest pain and inflammation and sometimes pericardial effusion or tamponade risk.',
  plainName:
    'Repeated inflammation of the sac around the heart that causes recurring chest pain',
  prevalence:
    "Included in China's second rare disease catalog; the American Heart Association notes that about 15% to 30% of people treated for acute pericarditis may have recurrence, and colchicine lowers recurrence risk.",
  quickLook: {
    whatItIs:
      'The pericardium is the thin sac around the heart. Recurrent pericarditis means the inflammation flares again, commonly after at least four symptom-free weeks.',
    whoToSeeFirst:
      'Repeated sharp chest pain that is worse lying down or with deep breaths and relieved by sitting forward, especially with fever, palpitations, or high inflammatory markers, should be assessed by cardiology; first or atypical chest pain needs emergency evaluation.',
    isGenetic:
      'Most cases are not inherited. Recurrence may relate to incomplete control of the first episode, post-infectious immune response, autoimmune disease, or autoinflammatory pathways.',
    hasTreatment:
      'Treatment often uses NSAIDs or aspirin plus colchicine, exercise restriction, and slow taper. Refractory or intolerant patients may be assessed for corticosteroids, IL-1 blockers, drainage, or rarely surgery.',
    commonDelayReason:
      'Chest pain may be labeled reflux, muscle strain, anxiety, or coronary disease. Without ECG, CRP, echocardiography, and a clear medication course at each flare, undertreatment is common.',
  },
  patientJourney: {
    whenToSuspect: [
      'After a prior pericarditis episode, similar chest pain returns after a symptom-free interval, especially worse with deep breath, cough, or lying down and better leaning forward.',
      'Chest pain comes with low fever, fatigue, palpitations, breathlessness, elevated CRP or ESR, or a pericardial rub.',
      'Echocardiogram or cardiac MRI shows pericardial effusion, thickening, or inflammation.',
      'Recent viral illness, heart surgery or procedure, heart attack, autoimmune disease, kidney failure, cancer, chest radiation, or tuberculosis risk.',
    ],
    commonWrongTurns: [
      'Stopping pain medicine after a few days without completing the planned anti-inflammatory course, colchicine, and slow taper.',
      'Assuming every recurrence is the same without excluding heart attack, pulmonary embolism, aortic dissection, or myocarditis.',
      'Using repeated quick steroid bursts without addressing recurrence risk or evaluating autoimmune or infectious clues.',
    ],
    firstDepartments: [
      'Emergency department for first or severe chest pain',
      'Cardiology or pericardial disease clinic',
      'Rheumatology when autoimmune or autoinflammatory disease is possible',
      'Cardiac surgery for constriction or difficult effusion',
    ],
    diagnosisChecklist: [
      'Bring a timeline of each flare, fever, triggers, pain position, duration, and response to medicines.',
      'Bring ECG, troponin, CRP or ESR, CBC, kidney function, autoantibodies, and infection screening results.',
      'Bring echocardiogram, chest X-ray or CT, cardiac MRI, and prior procedure or surgery records.',
      'Record NSAID, aspirin, colchicine, steroid, or IL-1 blocker doses, duration, and side effects.',
    ],
    testsToAskAbout: [
      'Whether this chest pain meets recurrent pericarditis criteria and whether acute coronary syndrome, pulmonary embolism, aortic dissection, and myocarditis have been excluded.',
      'Whether CRP can guide treatment duration and taper, and whether cardiac MRI is needed to show pericardial inflammation.',
      'Size of effusion, tamponade risk, and whether pericardiocentesis is needed.',
      'Whether autoimmune disease, tuberculosis, malignancy, kidney failure, or post-cardiac injury syndrome should be investigated.',
    ],
    questionsForDoctor: [
      'Is this low-risk recurrence or are there high-risk features requiring admission?',
      'How long should NSAID or aspirin and colchicine continue, and when should CRP guide taper?',
      'When can I return to exercise, work, or school, and which activities increase recurrence risk?',
      'If this recurs again, am I a candidate for IL-1 blockade or another second-line option?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Typical pain is sharp or stabbing behind the breastbone or on the left chest. It often worsens with deep breathing, cough, swallowing, or lying flat and improves when sitting up and leaning forward. Low fever, fatigue, palpitations, breathlessness, and anxiety can occur.</p><p>Flares may show a pericardial rub, elevated CRP or ESR, ECG changes, pericardial effusion, or imaging evidence of pericardial inflammation. A minority develop large effusion, cardiac tamponade, or chronic constrictive pericarditis.</p>',
    diagnosis:
      '<p>Diagnosis confirms that chest pain again fits pericarditis while excluding dangerous causes of chest pain. Common tests include ECG, troponin, CRP or ESR, CBC, kidney function, chest imaging, and echocardiography.</p><p>Cardiac MRI can help show pericardial edema and inflammation, especially when symptoms recur or diagnosis is uncertain. Clinicians may investigate infection, autoimmune disease, cancer, kidney failure, post-heart-attack, or post-surgical causes based on history.</p>',
    treatment:
      '<p>The goal is complete inflammation control and prevention of the next flare. Treatment commonly uses an NSAID or aspirin plus colchicine, with duration and taper guided by symptoms and CRP rather than stopping as soon as pain improves.</p><p>Corticosteroids are usually kept low dose with slow taper and reserved for patients who cannot use NSAIDs or colchicine, pregnancy, or specific autoimmune disease, because inappropriate steroid use may increase recurrence. Refractory cases may be assessed for IL-1 blockers. Large effusion or tamponade needs drainage, and rare persistent refractory or constrictive cases may need surgery.</p>',
    longTermCare:
      '<p>Follow-up tracks symptoms, CRP or ESR, ECG, echocardiography, and medicine side effects such as gastrointestinal symptoms, kidney function, liver function, and blood counts. Exercise usually resumes gradually after symptoms and inflammatory markers normalize and the clinician agrees.</p><p>Patients should keep a record of flares and treatment courses and avoid abrupt stopping or rapid taper. Repeated flares require reassessment of cause rather than simply repeating pain medicine.</p>',
    fertilityOrFamily:
      '<p>Recurrent pericarditis is usually not inherited. People planning pregnancy or pregnant patients need cardiology and obstetric medication planning because NSAIDs, colchicine, steroids, and IL-1 blockers require individualized safety review by pregnancy stage.</p>',
    emergencySigns:
      '<p>Any new, severe, or unusual chest pain needs emergency evaluation to rule out heart attack and other emergencies. Chest pain with fainting, marked breathlessness, low blood pressure, very fast heartbeat, coughing blood, one-sided leg swelling, persistent high fever, or inability to lie flat needs urgent care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'American Heart Association: Recurrent Pericarditis',
      type: 'patient-organization',
      url: 'https://www.heart.org/en/health-topics/pericarditis/what-is-pericarditis/recurrent-pericarditis',
    },
    {
      name: 'American Heart Association: Treatment of Pericarditis',
      type: 'patient-organization',
      url: 'https://www.heart.org/en/health-topics/pericarditis/treatment-of-pericarditis',
    },
  ],
  symptoms:
    '<p>Typical features are recurring sharp chest pain worse with deep breaths, cough, or lying flat and relieved by leaning forward, sometimes with fever, fatigue, palpitations, breathlessness, inflammation, or effusion.</p>',
  diagnosis:
    '<p>Diagnosis combines pain pattern, prior pericarditis, ECG, CRP or ESR, troponin, echocardiography, and sometimes cardiac MRI while excluding heart attack, pulmonary embolism, aortic dissection, and myocarditis.</p>',
  treatment:
    '<p>Care often uses NSAIDs or aspirin plus colchicine with slow taper guided by symptoms and CRP; refractory or special cases may need steroids, IL-1 blockers, pericardiocentesis, or rarely surgery.</p>',
  prognosis:
    '<p>Most patients can be managed long term and reduce recurrences, but large effusion, tamponade, constrictive pericarditis, or repeatedly refractory flares need close specialist care.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'recurrent-pericarditis',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 424,
    name: 'recurrent-pericarditis-journey.png',
    url: '/images/diseases/recurrent-pericarditis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

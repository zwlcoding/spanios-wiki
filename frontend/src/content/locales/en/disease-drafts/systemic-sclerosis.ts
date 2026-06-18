import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSystemicSclerosis: DiseaseDraft = {
  ...entity(1112, 'catalog-china-first-rare-disease-catalog-112'),
  name: 'Systemic Sclerosis',
  nameEn: 'Systemic Sclerosis',
  alias: 'Scleroderma, SSc, First Rare Disease Catalog item 112',
  slug: 'systemic-sclerosis',
  oneSentence:
    'Systemic sclerosis is an autoimmune connective-tissue disease that can cause skin thickening, Raynaud phenomenon, and possible lung, digestive, kidney, or heart involvement.',
  plainName:
    'An autoimmune disease causing skin thickening and possible blood-vessel and internal-organ involvement',
  prevalence:
    'Included in China’s first rare disease catalog; frequency varies by population, geography, and case definition.',
  quickLook: {
    whatItIs:
      'Systemic sclerosis is an autoimmune connective-tissue disease that can cause skin thickening, Raynaud phenomenon, and possible lung, digestive, kidney, or heart involvement.',
    whoToSeeFirst:
      'Start with Rheumatology, Pulmonology, Cardiology; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Systemic sclerosis is usually not a single-gene inherited disorder; immune, environmental, and genetic susceptibility factors may all contribute.',
    hasTreatment:
      'There is no single cure; treatment is organ-based and may include Raynaud and vascular care, immunosuppression, lung surveillance, reflux management, and prevention or urgent treatment of renal crisis.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'fingers turn white or purple in cold, become painful, or develop recurrent fingertip ulcers',
      'swollen fingers, tightening or thickening skin, rings becoming tight, or difficulty making a fist',
      'unexplained reflux, swallowing difficulty, shortness of breath, dry cough, or reduced exercise tolerance',
      'positive autoimmune antibodies or abnormal nailfold capillaries',
    ],
    commonWrongTurns: [
      'treating symptoms only as chilblains, dermatitis, reflux, or joint pain without rheumatology assessment',
      'focusing only on skin while missing interstitial lung disease, pulmonary hypertension, or renal crisis risk',
      'using steroids or unverified remedies without checking blood pressure, kidney function, and lung involvement',
    ],
    firstDepartments: [
      'Rheumatology',
      'Pulmonology',
      'Cardiology',
      'Nephrology',
      'Gastroenterology',
    ],
    diagnosisChecklist: [
      'track Raynaud attacks, skin change, fingertip ulcers, reflux, swallowing symptoms, and breathlessness',
      'bring autoantibody results, lung function, chest HRCT, echocardiogram, urine tests, and kidney function',
      'record blood pressure changes, medications, infections, cough, and exercise tolerance',
    ],
    testsToAskAbout: [
      'ANA profile, systemic-sclerosis antibodies, and nailfold capillaroscopy',
      'lung function, diffusion capacity, chest HRCT, and echocardiography',
      'blood pressure, urinalysis, kidney function, ECG, and NT-proBNP when indicated',
    ],
    questionsForDoctor: [
      'Is this limited or diffuse systemic sclerosis, and which organs are involved?',
      'How often should lung disease and pulmonary hypertension be screened?',
      'How can Raynaud attacks and fingertip ulcers be prevented and treated?',
      'Which medications could increase renal-crisis risk?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Systemic sclerosis is an autoimmune connective-tissue disease that can cause skin thickening, Raynaud phenomenon, and possible lung, digestive, kidney, or heart involvement.</p><p>Warning signs can include: fingers turn white or purple in cold, become painful, or develop recurrent fingertip ulcers; swollen fingers, tightening or thickening skin, rings becoming tight, or difficulty making a fist; unexplained reflux, swallowing difficulty, shortness of breath, dry cough, or reduced exercise tolerance; positive autoimmune antibodies or abnormal nailfold capillaries. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>There is no single cure; treatment is organ-based and may include Raynaud and vascular care, immunosuppression, lung surveillance, reflux management, and prevention or urgent treatment of renal crisis.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Systemic sclerosis is usually not a single-gene inherited disorder; immune, environmental, and genetic susceptibility factors may all contribute.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
    emergencySigns:
      '<p>Seek urgent care for breathing difficulty, altered consciousness, prolonged seizure, choking or serious swallowing difficulty, rapidly worsening weakness or vision change, severe infection, or acute severe pain.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: First Rare Disease Catalog',
      type: 'official',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'NIAMS: Scleroderma',
      type: 'official',
      url: 'https://www.niams.nih.gov/health-topics/scleroderma',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Systemic sclerosis is an autoimmune connective-tissue disease that can cause skin thickening, Raynaud phenomenon, and possible lung, digestive, kidney, or heart involvement. Common clues include fingers turn white or purple in cold, become painful, or develop recurrent fingertip ulcers and swollen fingers, tightening or thickening skin, rings becoming tight, or difficulty making a fist.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>There is no single cure; treatment is organ-based and may include Raynaud and vascular care, immunosuppression, lung surveillance, reflux management, and prevention or urgent treatment of renal crisis.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [64],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog'],
};

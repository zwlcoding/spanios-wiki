import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicPulmonaryFibrosis: DiseaseDraft = {
  ...entity(5002, 'disease-idiopathic-pulmonary-fibrosis'),
  name: 'Idiopathic Pulmonary Fibrosis',
  nameEn: 'Idiopathic Pulmonary Fibrosis',
  alias:
    'IPF; usual interstitial pneumonia; China First Rare Disease Catalog item 55',
  slug: 'idiopathic-pulmonary-fibrosis',
  oneSentence:
    'Idiopathic pulmonary fibrosis is a progressive interstitial lung disease of unknown cause characterized by scarring of lung tissue, manifesting as exertional dyspnea and dry cough; antifibrotic medications can slow decline, and lung transplantation is the only cure.',
  plainName:
    'A rare lung disease where the lungs gradually become stiff and scarred, making breathing difficult',
  prevalence:
    'Incidence is approximately 0.09–1.30 per 10,000 persons; prevalence is about 0.33–4.51 per 10,000; primarily affects men over 60; median survival is 3–5 years after diagnosis.',
  searchIntents: [
    'idiopathic pulmonary fibrosis early symptoms',
    'IPF treatment pirfenidone nintedanib',
    'pulmonary fibrosis life expectancy',
    'idiopathic pulmonary fibrosis lung transplant',
    'pulmonary fibrosis dry cough dyspnea',
  ],
  quickLook: {
    whatItIs:
      'A chronic, progressive, and irreversible interstitial lung disease where lung tissue becomes scarred (fibrotic), reducing elasticity and impairing oxygen exchange.',
    whoToSeeFirst:
      'Pulmonology or an interstitial lung disease specialty clinic for progressive exertional dyspnea and persistent dry cough, especially in men over 60.',
    isGenetic:
      'Most cases are sporadic; approximately 20% have a family history, associated with telomerase gene (TERT, TERC) mutations. Smoking and certain environmental exposures are risk factors.',
    hasTreatment:
      'Antifibrotic medications (pirfenidone, nintedanib) slow lung function decline; nerandomilast was FDA-approved in 2025. Lung transplantation is the only curative option.',
    commonDelayReason:
      'Early symptoms (dyspnea, dry cough) are often attributed to aging, chronic bronchitis, or asthma; diagnosis is frequently delayed by more than a year.',
  },
  patientJourney: {
    whenToSuspect: [
      'Progressive exertional dyspnea, especially with walking or climbing stairs.',
      'Persistent dry cough unresponsive to cough suppressants.',
      'Fine bibasilar crackles (Velcro rales) on lung auscultation.',
      'Digital clubbing.',
    ],
    commonWrongTurns: [
      'Attributing dyspnea to "getting older" or poor fitness.',
      'Treating dry cough as chronic pharyngitis or bronchitis for months.',
      'Repeated normal chest X-rays at primary care without high-resolution CT.',
      'Inappropriate use of corticosteroids or immunosuppressants, which can be harmful in IPF.',
    ],
    firstDepartments: [
      'Pulmonology (interstitial lung disease clinic)',
      'Thoracic surgery / lung transplant evaluation (moderate-to-severe disease)',
      'Radiology (HRCT assessment)',
      'Rehabilitation medicine (pulmonary rehabilitation)',
    ],
    diagnosisChecklist: [
      'Document symptom duration, progression, and smoking/environmental exposure history.',
      'High-resolution CT (HRCT): look for peripheral, basal-predominant reticulation and honeycombing.',
      'Pulmonary function tests: restrictive pattern with reduced DLCO.',
      'Exclude other interstitial lung diseases (connective tissue disease, hypersensitivity pneumonitis, drug-induced ILD).',
      'Surgical lung biopsy if HRCT is indeterminate.',
    ],
    testsToAskAbout: [
      'High-resolution chest CT (HRCT).',
      'Pulmonary function tests (FVC, DLCO).',
      '6-minute walk test.',
      'Autoantibody panel (exclude connective tissue disease-associated ILD).',
      'Bronchoalveolar lavage (if needed).',
    ],
    questionsForDoctor: [
      'Does my CT show a definite UIP pattern? Is a biopsy needed?',
      'Am I a candidate for pirfenidone or nintedanib? How are side effects managed?',
      'How fast is my lung function declining?',
      'When should I be evaluated for lung transplantation?',
      'How is an acute exacerbation managed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Typical presentation is insidious onset of progressive exertional dyspnea and persistent dry cough. Some patients have fatigue, weight loss, and arthralgia. Physical examination commonly reveals fine bibasilar crackles (Velcro rales) and digital clubbing. Advanced disease leads to severe hypoxemia, pulmonary hypertension, and right heart failure. Acute exacerbations present as rapid worsening of dyspnea over days to weeks and carry a high mortality.</p>',
    diagnosis:
      '<p>Diagnosis relies on clinical presentation, HRCT, and exclusion of other causes. Definite UIP pattern on HRCT includes peripheral and basal-predominant reticulation, traction bronchiectasis, and honeycombing. If HRCT shows possible UIP or inconsistent with UIP, surgical lung biopsy or multidisciplinary discussion (MDD) is needed. Pulmonary function tests show restrictive impairment with reduced DLCO. It is essential to exclude connective tissue disease, chronic hypersensitivity pneumonitis, asbestosis, and drug-induced lung disease.</p>',
    treatment:
      '<p>Antifibrotic therapy with pirfenidone and nintedanib slows the rate of FVC decline and is recommended for mild-to-moderate disease. In October 2025, the FDA approved nerandomilast (a PDE4B inhibitor), which reduced annual FVC decline by 52.5% in phase 3 trials. Supportive care includes smoking cessation, oxygen therapy, pulmonary rehabilitation, influenza and pneumococcal vaccination, and gastroesophageal reflux management. Acute exacerbations are treated with supportive care and corticosteroids (evidence is limited). Lung transplantation should be considered early for patients with progressive decline. Routine corticosteroids, immunosuppressants, and N-acetylcysteine are not recommended.</p>',
    longTermCare:
      '<p>Follow-up every 3–6 months with pulmonary function tests, 6-minute walk distance, and symptom assessment. The GAP score (gender, age, FVC, DLCO) helps estimate prognosis. Monitor drug adverse effects (pirfenidone: rash, photosensitivity, GI upset; nintedanib: diarrhea, weight loss, elevated liver enzymes). Pulmonary rehabilitation improves exercise capacity and quality of life. Avoid smoking and known environmental exposures.</p>',
    fertilityOrFamily:
      '<p>A minority of patients have familial IPF, associated with telomere-related gene mutations. Those with a family history may consider genetic counseling and testing. Family planning should be managed jointly by pulmonology and obstetrics, assessing whether pulmonary function can tolerate pregnancy.</p>',
    emergencySigns:
      '<p>Sudden severe dyspnea, worsening hypoxemia, fever with productive cough (possible acute exacerbation or infection), hemoptysis, or altered mental status require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Idiopathic Pulmonary Fibrosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK448162/',
    },
    {
      name: 'FDA Approval: Nerandomilast for IPF (October 2025)',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-nerandomilast-idiopathic-pulmonary-fibrosis',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Insidious progressive exertional dyspnea and persistent dry cough; Velcro rales and digital clubbing; late hypoxemia, pulmonary hypertension, and right heart failure.</p>',
  diagnosis:
    '<p>HRCT typical UIP pattern allows diagnosis; restrictive physiology with reduced DLCO; exclude other ILDs; surgical lung biopsy for atypical cases.</p>',
  treatment:
    '<p>Pirfenidone or nintedanib for antifibrosis; nerandomilast newly approved in 2025; supportive care with oxygen and rehabilitation; lung transplant for end-stage disease.</p>',
  prognosis:
    '<p>Median survival 3–5 years; antifibrotics slow progression; acute exacerbations have poor prognosis; early diagnosis and treatment improve quality of life.</p>',
  sourceName: 'NCBI StatPearls: Idiopathic Pulmonary Fibrosis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK448162/',
  categorySlug: 'respiratory',
  charityIds: [56],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5002,
    name: 'idiopathic-pulmonary-fibrosis-journey.png',
    url: '/images/diseases/idiopathic-pulmonary-fibrosis-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

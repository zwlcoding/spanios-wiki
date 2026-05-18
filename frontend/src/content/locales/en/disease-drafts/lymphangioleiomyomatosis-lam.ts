import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLymphangioleiomyomatosisLam: DiseaseDraft = {
  ...entity(5010, 'disease-lymphangioleiomyomatosis-lam'),
  name: 'Lymphangioleiomyomatosis (LAM)',
  nameEn: 'Lymphangioleiomyomatosis (LAM)',
  alias:
    'LAM; pulmonary lymphangioleiomyomatosis; China First Rare Disease Catalog item 64',
  slug: 'lymphangioleiomyomatosis-lam',
  oneSentence:
    'Lymphangioleiomyomatosis is a rare cystic lung disease that almost exclusively affects women, characterized by abnormal proliferation of smooth muscle-like LAM cells leading to cystic lung destruction; it presents with pneumothorax, chylous effusions, and progressive dyspnea, and sirolimus effectively slows lung function decline.',
  plainName:
    'A rare lung disease that causes thin-walled air cysts, mainly in women',
  prevalence:
    'Prevalence is approximately 1 in 400,000–1,000,000; occurs almost exclusively in women, especially during reproductive years; both sporadic LAM and TSC-associated LAM are recognized.',
  searchIntents: [
    'lymphangioleiomyomatosis symptoms',
    'LAM pneumothorax chylothorax',
    'lymphangioleiomyomatosis treatment sirolimus',
    'LAM women lung transplant',
    'lymphangioleiomyomatosis tuberous sclerosis',
  ],
  quickLook: {
    whatItIs:
      'Abnormal proliferation of smooth muscle-like LAM cells in the pulmonary lymphatics and airways causes cystic destruction of lung tissue. LAM cells carry TSC1 or TSC2 mutations, leading to constitutive mTOR pathway activation.',
    whoToSeeFirst:
      'Pulmonology or interstitial lung disease clinic for women of reproductive age with unexplained pneumothorax, chylous effusion, or progressive dyspnea.',
    isGenetic:
      'Sporadic LAM arises from somatic TSC1 or TSC2 mutations; approximately 30–40% of women with tuberous sclerosis complex (TSC) develop LAM. TSC is autosomal dominant, but sporadic LAM is generally not inherited by offspring.',
    hasTreatment:
      'Sirolimus (rapamycin) is the first-line targeted therapy that slows lung function decline and reduces chylous effusions; lung transplantation is reserved for end-stage disease.',
    commonDelayReason:
      'Early symptoms (exertional dyspnea) are often attributed to asthma or COPD; recurrent pneumothorax may be treated without investigating the underlying cause; chylothorax may be misdiagnosed as simple pleural effusion.',
  },
  patientJourney: {
    whenToSuspect: [
      'Progressive exertional dyspnea in a woman of reproductive age.',
      'Recurrent spontaneous pneumothorax (especially bilateral).',
      'Chylothorax or chylous ascites (milky pleural or abdominal fluid).',
      'Unexplained hemoptysis.',
      'Women with known tuberous sclerosis complex who develop respiratory symptoms.',
    ],
    commonWrongTurns: [
      'Treating dyspnea as asthma or COPD for months or years without obtaining a high-resolution CT.',
      'Managing recurrent pneumothorax with repeated chest tube placement without investigating the underlying cause.',
      'Failing to perform chylous fluid testing and misdiagnosing chylothorax as a simple exudate.',
      'Not evaluating for renal angiomyolipoma (AML), delaying a TSC-related diagnosis.',
    ],
    firstDepartments: [
      'Pulmonology',
      'Thoracic surgery (for pneumothorax and chylothorax management)',
      'Radiology (HRCT evaluation)',
      'Nephrology/urology (for renal AML evaluation)',
      'Lung transplant center (end-stage disease)',
    ],
    diagnosisChecklist: [
      'Document dyspnea severity, number of pneumothoraces, and effusion history.',
      'High-resolution CT (HRCT): diffuse thin-walled cysts throughout both lungs is characteristic.',
      'Pulmonary function tests: obstructive or mixed pattern with reduced DLCO.',
      'Pleural fluid analysis: positive chylous fluid test (chylothorax).',
      'Abdominal CT/MRI: evaluate for renal angiomyolipoma (AML).',
      'Serum VEGF-D level: >800 pg/mL supports the diagnosis.',
      'TSC1/TSC2 genetic testing if available.',
    ],
    testsToAskAbout: [
      'Chest HRCT.',
      'Pulmonary function tests.',
      'Serum VEGF-D level.',
      'Pleural fluid chylous test.',
      'Abdominal CT/MRI (renal AML).',
      'TSC1/TSC2 genetic testing.',
    ],
    questionsForDoctor: [
      'Is my LAM sporadic or associated with tuberous sclerosis complex?',
      'What is my current lung function?',
      'Will sirolimus help me, and how long do I need to take it?',
      'How often should I have CT and pulmonary function testing?',
      'When should lung transplantation be considered?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>LAM occurs almost exclusively in women. The most common symptom is progressive exertional dyspnea that worsens over time and may eventually occur at rest. Approximately 60–70% of patients experience spontaneous pneumothorax (often recurrent). About 30% develop chylothorax (chylous pleural effusion), causing worsening dyspnea. Other manifestations include dry cough and hemoptysis. Renal angiomyolipoma (AML) is a common extrapulmonary finding and can cause flank pain or bleeding. Patients with TSC-associated LAM may also have hypopigmented macules, facial angiofibromas, and seizures.</p>',
    diagnosis:
      '<p>High-resolution CT (HRCT) is the key diagnostic test: diffuse, round, thin-walled cysts distributed throughout both lungs without significant fibrosis or nodules. Pulmonary function tests typically show obstructive or mixed ventilatory defect with markedly reduced DLCO. Serum VEGF-D >800 pg/mL is highly specific for LAM. Pleural fluid analysis with a positive chylous test confirms chylothorax. Abdominal imaging demonstrating renal AML supports the diagnosis. TSC1/TSC2 genetic testing helps distinguish sporadic from TSC-associated LAM. Differential diagnosis includes pulmonary Langerhans cell histiocytosis (PLCH) and Birt-Hogg-Dubé syndrome.</p>',
    treatment:
      '<p>Sirolimus (rapamycin) is the only approved targeted therapy for LAM; it inhibits mTOR signaling and slows disease progression. It is recommended for patients with declining lung function (FEV1 <70% predicted) or symptomatic chylous effusions. The usual oral dose is 1–2 mg daily with a target trough level of 5–10 ng/mL. Monitoring for immunosuppression, dyslipidemia, and oral ulcers is required. End-stage lung failure (FEV1 <30%) warrants lung transplant evaluation. Recurrent pneumothorax may require pleurodesis. Chylothorax can be managed with dietary modification (medium-chain triglyceride diet) or thoracentesis. Estrogen avoidance (including oral contraceptives and hormone replacement therapy) is recommended because estrogen may accelerate disease progression.</p>',
    longTermCare:
      '<p>Lifelong follow-up with pulmonary function tests and chest CT every 3–6 months is needed. Sirolimus blood levels and side effects must be monitored. Regular abdominal imaging is needed to monitor renal AML size (>4 cm carries bleeding risk and may require embolization or surgery). Pregnancy should be avoided because hormonal changes and increased intra-abdominal pressure can worsen disease. Influenza and pneumococcal vaccinations are recommended. Patient support organizations provide psychological support and access to the latest treatment information.</p>',
    fertilityOrFamily:
      '<p>Sporadic LAM arises from somatic mutations and is generally not inherited by offspring. TSC-associated LAM follows the autosomal dominant inheritance pattern of TSC (TSC1 or TSC2 mutations), with a 50% transmission risk if a parent is affected. Women with sporadic LAM who are planning pregnancy require careful risk assessment because pregnancy may worsen disease. Genetic counseling is helpful in assessing risk and formulating reproductive plans.</p>',
    emergencySigns:
      '<p>Sudden chest pain and shortness of breath (pneumothorax), large chylous effusion or ascites causing respiratory distress, massive hemoptysis, or rupture of a renal AML causing severe flank pain and shock require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Lymphangioleiomyomatosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470348/',
    },
    {
      name: 'NORD: Lymphangioleiomyomatosis',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/lymphangioleiomyomatosis/',
    },
  ],
  symptoms:
    '<p>Progressive dyspnea, recurrent pneumothorax, chylothorax/ascites, dry cough, hemoptysis; may be associated with renal angiomyolipoma.</p>',
  diagnosis:
    '<p>HRCT showing diffuse thin-walled cysts; serum VEGF-D >800 pg/mL; reduced DLCO; renal AML on abdominal imaging.</p>',
  treatment:
    '<p>Sirolimus to slow progression; pleurodesis for recurrent pneumothorax; dietary modification or drainage for chylothorax; lung transplant for end-stage disease.</p>',
  prognosis:
    '<p>Sirolimus significantly slows lung function decline; lung transplant is needed for end-stage failure; estrogen avoidance and pregnancy avoidance help stabilize disease.</p>',
  sourceName: 'NCBI StatPearls: Lymphangioleiomyomatosis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK470348/',
  categorySlug: 'respiratory',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5010,
    name: 'lymphangioleiomyomatosis-lam-journey.png',
    url: '/images/diseases/lymphangioleiomyomatosis-lam-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

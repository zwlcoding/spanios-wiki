import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicPulmonaryArterialHypertension: DiseaseDraft = {
  ...entity(5001, 'disease-idiopathic-pulmonary-arterial-hypertension'),
  name: 'Idiopathic Pulmonary Arterial Hypertension',
  nameEn: 'Idiopathic Pulmonary Arterial Hypertension',
  alias:
    'IPAH; primary pulmonary hypertension; China First Rare Disease Catalog item 54',
  slug: 'idiopathic-pulmonary-arterial-hypertension',
  oneSentence:
    'Idiopathic pulmonary arterial hypertension is a rare vascular disease of unknown cause characterized by elevated pulmonary artery pressure leading to right heart failure; early presentation is exertional dyspnea, and specialized cardiology or pulmonology evaluation is needed.',
  plainName:
    'A rare disease where blood pressure in the lung arteries is abnormally high, straining the heart',
  prevalence:
    'Annual incidence is approximately 0.9–10.7 cases per million; prevalence is about 6–26 cases per million; more common in women.',
  searchIntents: [
    'idiopathic pulmonary arterial hypertension which doctor',
    'IPAH early symptoms',
    'pulmonary arterial hypertension treatment options',
    'IPAH life expectancy',
    'pulmonary hypertension pregnancy risk',
  ],
  quickLook: {
    whatItIs:
      'A rare vascular disease where pulmonary artery pressure rises due to increased pulmonary vascular resistance, forcing the right ventricle to work harder and eventually leading to right heart failure.',
    whoToSeeFirst:
      'Cardiology or pulmonology with expertise in pulmonary vascular disease; pregnant patients need high-risk obstetrics co-management.',
    isGenetic:
      'Some cases are associated with BMPR2 and other gene mutations (heritable PAH), but IPAH is defined as sporadic disease without family history.',
    hasTreatment:
      'Yes. Targeted therapies include endothelin receptor antagonists, PDE5 inhibitors, prostacyclin analogs, and soluble guanylate cyclase stimulators. Lung transplant is an option for end-stage disease.',
    commonDelayReason:
      'Early symptoms (dyspnea, fatigue) are nonspecific and often attributed to poor fitness, anemia, or anxiety; diagnosis frequently takes months to years.',
  },
  patientJourney: {
    whenToSuspect: [
      'Progressive exertional dyspnea that worsens over time.',
      'Unexplained fatigue, chest pain, palpitations, or syncope.',
      'Lower extremity edema, abdominal distension, or jugular venous distention suggesting right heart failure.',
      'History of connective tissue disease, HIV, liver cirrhosis, or congenital heart disease with new cardiopulmonary symptoms.',
    ],
    commonWrongTurns: [
      'Attributing dyspnea to "lack of exercise" or anxiety without cardiac and pulmonary evaluation.',
      'Delayed referral to a specialized pulmonary hypertension center after unrevealing workups at local hospitals.',
      'Use of appetite suppressants or unregulated supplements that can trigger pulmonary hypertension.',
    ],
    firstDepartments: [
      'Cardiology (pulmonary vascular disease clinic)',
      'Pulmonology',
      'Right heart catheterization laboratory',
      'Rheumatology (to evaluate connective tissue disease-associated PAH)',
    ],
    diagnosisChecklist: [
      'Document symptom timeline, triggers, and medication history.',
      'ECG, chest X-ray, and echocardiogram to screen for pulmonary hypertension.',
      'Pulmonary function testing and V/Q scan to exclude chronic thromboembolic disease.',
      'Right heart catheterization (gold standard): mPAP >20 mmHg, PCWP ≤15 mmHg, PVR >2 Wood units.',
      'Acute vasoreactivity testing to assess calcium channel blocker responsiveness.',
    ],
    testsToAskAbout: [
      'Echocardiogram (estimate pulmonary artery systolic pressure).',
      'Right heart catheterization (definitive diagnosis and hemodynamic assessment).',
      'V/Q scan (exclude chronic thromboembolic pulmonary hypertension).',
      'Autoantibody panel, HIV, liver function (evaluate secondary causes).',
      'BMPR2 genetic testing (if family history or young onset).',
    ],
    questionsForDoctor: [
      'What is my risk stratification?',
      'Do I need lifelong medication? What targeted therapies are available?',
      'What were my vasoreactivity test results? Am I a candidate for calcium channel blockers?',
      'What are my activity restrictions?',
      'What are the risks of pregnancy for me?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Early disease is often asymptomatic or presents with mild exertional dyspnea. As pulmonary vascular resistance increases, progressive dyspnea, fatigue, chest pain, palpitations, and syncope develop. Physical findings include an accentuated pulmonary component of the second heart sound, tricuspid regurgitation murmur, right ventricular heave, elevated jugular venous pressure, hepatomegaly, ascites, and lower extremity edema. Advanced disease leads to right heart failure. Some patients may have Raynaud phenomenon or digital clubbing.</p>',
    diagnosis:
      '<p>Diagnosis requires hemodynamic confirmation by right heart catheterization: mean pulmonary artery pressure (mPAP) >20 mmHg, pulmonary capillary wedge pressure (PCWP) ≤15 mmHg, and pulmonary vascular resistance (PVR) >2 Wood units, with exclusion of all secondary causes. Echocardiography is the primary screening tool and can estimate pulmonary artery pressure and assess right ventricular size and function. Additional tests include pulmonary function testing, V/Q scanning (to exclude chronic thromboembolic disease), high-resolution CT, sleep studies, and serologic testing for connective tissue diseases and infections. Acute vasoreactivity testing identifies the small subset of patients who respond to high-dose calcium channel blockers.</p>',
    treatment:
      '<p>General measures include oxygen therapy, diuretics, anticoagulation (controversial), and supervised exercise rehabilitation. Targeted therapies include endothelin receptor antagonists (bosentan, ambrisentan, macitentan), PDE5 inhibitors (sildenafil, tadalafil), soluble guanylate cyclase stimulators (riociguat), prostacyclin receptor agonists (selexipag), and prostacyclin analogs (intravenous epoprostenol, inhaled iloprost, subcutaneous/intravenous/inhaled treprostinil). High-risk patients should be started on parenteral prostacyclin therapy early. For patients with an inadequate clinical response, combination therapy is considered. Atrial septostomy or lung transplantation may be options for advanced or rapidly progressive disease.</p>',
    longTermCare:
      '<p>Lifelong follow-up is required, with assessments every 3–6 months including symptom evaluation, 6-minute walk distance, echocardiography, and hemodynamic studies as needed. Treatment is adjusted based on risk stratification. Pregnancy is high-risk and generally contraindicated. Patients should avoid high-altitude travel and certain medications. Influenza and pneumococcal vaccination are recommended. Psychological support can improve quality of life.</p>',
    fertilityOrFamily:
      '<p>Pregnancy carries a very high risk of maternal mortality in IPAH and is generally contraindicated; effective contraception is essential. For those with BMPR2 mutations, family members should be offered genetic counseling and testing. Family planning should be managed jointly by pulmonary hypertension specialists and obstetrics.</p>',
    emergencySigns:
      '<p>Sudden severe dyspnea, syncope, hemoptysis, chest pain with hypotension, altered mental status, or rapidly worsening right heart failure (rapid abdominal distension, oliguria, severe lower extremity edema) require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Idiopathic Pulmonary Arterial Hypertension',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
    },
    {
      name: '2022 ESC/ERS Guidelines for Pulmonary Hypertension',
      type: 'clinical-guideline',
      url: 'https://eurheartj.oxfordjournals.org/content/early/2022/08/25/eurheartj.ehac237',
    },
  ],
  symptoms:
    '<p>Early exertional dyspnea progressing to dyspnea at rest, fatigue, chest pain, syncope; late right heart failure with jugular distention, hepatomegaly, ascites, and edema.</p>',
  diagnosis:
    '<p>Right heart catheterization is the gold standard (mPAP >20 mmHg, PCWP ≤15 mmHg, PVR >2 WU); echocardiography for screening; V/Q scan to exclude chronic thromboembolism.</p>',
  treatment:
    '<p>Targeted therapies (endothelin receptor antagonists, PDE5 inhibitors, prostacyclin analogs); high-risk patients need parenteral prostacyclins; lung transplant for end-stage disease.</p>',
  prognosis:
    '<p>Untreated prognosis is poor; modern targeted therapies significantly improve survival and quality of life; early diagnosis and treatment are critical.</p>',
  sourceName: 'NCBI StatPearls: Idiopathic Pulmonary Arterial Hypertension',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5001,
    name: 'idiopathic-pulmonary-arterial-hypertension-journey.png',
    url: '/images/diseases/idiopathic-pulmonary-arterial-hypertension-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

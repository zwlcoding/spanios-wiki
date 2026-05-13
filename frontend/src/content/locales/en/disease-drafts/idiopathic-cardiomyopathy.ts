import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicCardiomyopathy: DiseaseDraft = {
  ...entity(54, 'disease-idiopathic-cardiomyopathy'),
  name: 'Idiopathic Cardiomyopathy',
  nameEn: 'Idiopathic Cardiomyopathy',
  alias:
    'Idiopathic Dilated Cardiomyopathy (IDC), Familial Dilated Cardiomyopathy (FDCM), Arrhythmogenic Right Ventricular Dysplasia/Cardiomyopathy (ARVC), Left Ventricular Noncompaction (LVNC), Hereditary Transthyretin-Related Amyloidosis (hATTR)',
  slug: 'idiopathic-cardiomyopathy',
  oneSentence:
    'Idiopathic cardiomyopathy is a group of myocardial diseases diagnosed after excluding clearly identifiable secondary causes, which may present with heart failure, arrhythmias, conduction abnormalities, or sudden death risk, and may have a genetic background.',
  plainName: 'Idiopathic Cardiomyopathy',
  prevalence:
    'The prevalence of idiopathic dilated cardiomyopathy (DCM) is approximately 36.5/100,000 (about 1/2,700), with about 20-35% being familial. The prevalence of arrhythmogenic right ventricular cardiomyopathy (ARVC) is approximately 1/2,000 to 1/1,000. The estimated prevalence of restrictive cardiomyopathy is approximately 1/100,000 to 9/100,000. The detection rate of left ventricular noncompaction by echocardiography is approximately 1.4/10,000.',
  quickLook: {
    whatItIs:
      'This is a group of heterogeneous myocardial diseases, not a single diagnosis. Doctors need to differentiate between dilated, hypertrophic, restrictive, arrhythmogenic, left ventricular noncompaction, and other types, and exclude secondary causes such as ischemia, valvular disease, toxins, infections, inflammation, and endocrine disorders.',
    whoToSeeFirst:
      'When symptoms of heart failure such as palpitations, chest tightness, fatigue, or shortness of breath occur, it is recommended to first visit the department of cardiovascular medicine or a heart failure specialty clinic. For patients with a clear family history or known gene mutation carriers, genetic counseling and family screening are recommended in addition to the cardiovascular department. When severe heart failure or heart transplant is being considered, patients should visit a center with heart transplant qualifications.',
    isGenetic:
      'Yes, most idiopathic cardiomyopathies have a genetic background. Familial dilated cardiomyopathy is mostly autosomal dominant, with more than 30 related genes identified (such as TTN, LMNA, MYH7, etc.). Arrhythmogenic right ventricular cardiomyopathy is also primarily autosomal dominant. Some types (such as transthyretin-related amyloidosis) are autosomal dominant.',
    hasTreatment:
      'Yes, there are management pathways for heart failure, arrhythmias, thrombosis, genetic risk, and end-stage heart failure, but treatment depends on the specific type of cardiomyopathy, cardiac function, arrhythmia risk, and genetic results.',
    commonDelayReason:
      'Early heart failure symptoms are often atypical (fatigue, decreased exercise tolerance) and are easily mistaken for work fatigue or age-related changes. Some patients present with arrhythmias or sudden death as the first manifestation, missing the opportunity for early intervention. Incomplete family history collection leads to missed family screening, preventing timely identification of familial cases.',
  },
  patientJourney: {
    whenToSuspect: [
      'Unexplained chest tightness, palpitations, fatigue, or decreased exercise tolerance without obvious triggers',
      'Signs of heart failure such as lower extremity edema or paroxysmal nocturnal dyspnea',
      'ECG or echocardiography showing ventricular enlargement or decreased systolic function',
      'Recurrent palpitations, syncope, or presyncope suggesting arrhythmias',
      'Unexplained family history of heart failure, or first-degree relatives with sudden death before age 50',
      'Young patients with ventricular enlargement or decreased cardiac function that cannot be explained by other causes',
    ],
    commonWrongTurns: [
      'Mistaking early heart failure symptoms for work fatigue or aging, delaying medical consultation',
      'Only treating symptoms after discovering ventricular enlargement, without performing cause analysis or genetic testing',
      'Neglecting family history inquiry and failing to perform clinical screening for first-degree relatives',
      'Failing to identify reversible secondary factors (such as long-term heavy alcohol consumption, certain chemotherapy drugs), missing targeted interventions',
      'Focusing only on cardiac function while neglecting conduction abnormalities and sudden death risk assessment',
    ],
    firstDepartments: [
      'Department of Cardiovascular Medicine or Heart Failure/Cardiomyopathy Specialty',
      'Cardiac Electrophysiology Department (when arrhythmia symptoms occur)',
      'Genetic Counseling Department or Medical Genetics Department (when gene testing and family consultation are needed)',
      'Cardiac Imaging Department (cardiac magnetic resonance evaluation)',
      'Cardiac Surgery Department (when device therapy or transplant evaluation is being considered)',
    ],
    diagnosisChecklist: [
      'Detailed medical history and family history (tracing at least 3 generations)',
      'Physical examination: heart rate, blood pressure, jugular venous distension, lung crackles, heart murmurs, hepatomegaly, lower extremity edema, etc.',
      '12-lead ECG: evaluation of rhythm, conduction block, ST-T changes, abnormal Q waves, etc.',
      'Echocardiography: evaluation of chamber size, wall thickness, left ventricular ejection fraction (LVEF), valve function, etc.',
      'Cardiac magnetic resonance (CMR): precise evaluation of myocardial fibrosis, viable myocardium, and morphological changes',
      'Laboratory tests: NT-proBNP/BNP, cardiac enzymes, electrolytes, liver and kidney function, thyroid function, etc.',
      'Genetic testing: gene panel testing for suspected hereditary cardiomyopathy',
      'Coronary angiography or coronary CT: to exclude ischemic cardiomyopathy',
      'Family screening: clinical evaluation and echocardiography screening for first-degree relatives',
    ],
    testsToAskAbout: [
      'Echocardiography (LVEF, chamber size)',
      'ECG',
      'NT-proBNP or BNP',
      'Cardiac magnetic resonance (CMR)',
      'Genetic testing (cardiomyopathy gene panel)',
      'Coronary angiography or coronary CT',
    ],
    questionsForDoctor: [
      'What type of cardiomyopathy do I have? Is there a clear genetic mutation?',
      'Is this condition hereditary? What tests do my family members need?',
      'How serious is my condition? What stage is my cardiac function at?',
      'What medications and treatment options are available? Do I need a pacemaker or ICD?',
      'What should I pay attention to in daily life? Can I still work or exercise?',
      'Can I still become pregnant and have children?',
    ],
  },
  medicalSections: {
    symptoms:
      'Symptoms of idiopathic cardiomyopathy depend on the specific type and severity. Early dilated cardiomyopathy may be asymptomatic, gradually presenting with fatigue, decreased exercise tolerance, palpitations, chest tightness; severe cases develop paroxysmal nocturnal dyspnea, orthopnea, lower extremity edema, and other heart failure manifestations. Arrhythmogenic right ventricular cardiomyopathy primarily presents with palpitations, syncope, presyncope, and sustained ventricular tachycardia, which may be accompanied by systemic embolic events. Restrictive cardiomyopathy is mainly right-sided heart failure, presenting with jugular venous distension, ascites, lower extremity edema, but with relatively preserved left ventricular systolic function. Left ventricular noncompaction can present with heart failure, arrhythmias, and thromboembolism. Hereditary transthyretin-related amyloidosis is characterized by progressive heart failure and peripheral neuropathy.',
    diagnosis:
      'Diagnosis of idiopathic cardiomyopathy first requires exclusion of secondary causes (such as ischemia, hypertension, valvular disease, alcoholic cardiomyopathy, chemotherapy drugs, etc.), then comprehensive evaluation through clinical manifestations, imaging examinations (echocardiography, cardiac magnetic resonance), ECG, and genetic testing. Diagnostic criteria for dilated cardiomyopathy include left ventricular enlargement with systolic dysfunction after excluding secondary causes. Diagnosis of familial dilated cardiomyopathy requires detailed investigation of family history spanning more than 3 generations and clinical screening of first-degree relatives. Genetic testing has important value in clarifying diagnosis, family management, and risk stratification.',
    treatment:
      'Treatment requires first clarifying the type of cardiomyopathy and risk stratification. Management may include heart failure medications, arrhythmia management, anticoagulation assessment, implantable devices, rehabilitation, family screening, and end-stage heart failure treatment evaluation. Specific medications, devices, and whether to refer to a transplant/ventricular assist device center need to be individualized by cardiovascular specialists based on examination results.',
    longTermCare:
      'Idiopathic cardiomyopathy usually requires long-term follow-up. Key focus areas include cardiac function, arrhythmias, medication tolerance, device indications, exercise and pregnancy risks, psychological support, and first-degree relative screening. When there is sudden change in weight, symptoms, or exercise tolerance, patients should follow the heart failure or arrhythmia plan provided by their doctor.',
    fertilityOrFamily:
      'Pregnancy requires careful assessment for female patients with idiopathic cardiomyopathy. Pregnancy increases cardiovascular load; patients with normal cardiac function and mild disease may conceive under close monitoring by cardiology and obstetrics, but patients with moderate to severe cardiac dysfunction face significantly increased pregnancy risks. Children of patients with hereditary cardiomyopathy have genetic risk, and genetic counseling is recommended. Family members known to carry pathogenic genes should undergo genetic testing and regular cardiac monitoring for early identification and intervention.',
    emergencySigns:
      'Seek immediate medical attention in the following situations: sudden severe chest pain or tightness (to exclude acute coronary events); sudden palpitations accompanied by dizziness, presyncope, or loss of consciousness (suspected severe arrhythmia); sudden worsening of shortness of breath, inability to lie flat, or coughing pink frothy sputum (acute pulmonary edema); rapid worsening of lower extremity edema accompanied by decreased urine output (worsening heart failure); sudden unilateral limb weakness or speech difficulty (to exclude thromboembolic events).',
  },
  sources: [
    {
      name: 'GeneReviews: Dilated Cardiomyopathy Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
    },
    {
      name: 'GeneReviews: LMNA-Related Dilated Cardiomyopathy',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1674/',
    },
    {
      name: 'MedlinePlus Genetics: Familial dilated cardiomyopathy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-dilated-cardiomyopathy/',
    },
  ],
  sourceName: 'GeneReviews: Dilated Cardiomyopathy Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 353,
    name: 'idiopathic-cardiomyopathy-journey.png',
    url: '/images/diseases/idiopathic-cardiomyopathy-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

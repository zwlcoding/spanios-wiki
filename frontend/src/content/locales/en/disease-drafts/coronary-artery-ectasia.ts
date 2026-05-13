import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCoronaryArteryEctasia: DiseaseDraft = {
  ...entity(34, 'disease-coronary-artery-ectasia'),
  name: 'Coronary Artery Ectasia',
  nameEn: 'Coronary Artery Ectasia',
  alias: 'Coronary Artery Ectasia, CAE, Coronary Dilation',
  slug: 'coronary-artery-ectasia',
  oneSentence:
    'Coronary artery ectasia is abnormal localized or diffuse dilation of the coronary arteries, which may be related to atherosclerosis, Kawasaki disease, vasculitis, or connective tissue disease.',
  plainName:
    'A condition where the coronary arteries that supply blood to the heart muscle become widened, and blood flow may slow down',
  prevalence:
    "It is not uncommon to be found incidentally during coronary angiography or coronary CTA, but as a disease in China's rare disease directory, evaluation needs to consider the cause, extent, and clinical risk.",
  quickLook: {
    whatItIs:
      'Coronary artery ectasia refers to coronary vessel dilation that is noticeably wider than nearby normal segments. Blood flow in the dilated segment may slow down, and some patients may develop thrombosis, distal embolism, angina, or risk of acute coronary syndrome.',
    whoToSeeFirst:
      'For adults with chest pain, angina-like discomfort, or coronary imaging showing dilation, evaluation should be sought at a cardiology or coronary artery disease specialty. For children or adolescents with a history of Kawasaki disease, long-term follow-up should be conducted by pediatric cardiology and cardiology specialists.',
    isGenetic:
      'Most cases are not a single genetic disease. In adults, it is often related to atherosclerosis. In children and adolescents, Kawasaki disease should be considered. Some patients need evaluation for vasculitis, connective tissue disease, or congenital coronary abnormalities.',
    hasTreatment:
      'Risk stratification and follow-up management plans exist, but the appropriate plan depends on whether there is stenosis, thrombosis, Kawasaki disease sequelae, or systemic disease, requiring individualized assessment by cardiology specialists.',
    commonDelayReason:
      'Many patients have no specific symptoms, or chest pain overlaps with that of ordinary coronary heart disease. If attention is only paid to stenosis without documenting the dilation extent, cause, and blood flow risk, subsequent follow-up care may be interrupted.',
  },
  patientJourney: {
    whenToSuspect: [
      'Coronary angiography or coronary CTA reports indicate coronary artery ectasia, aneurysmal changes, or slow blood flow.',
      'Chest pain, chest tightness, exercise-induced discomfort, or acute coronary syndrome, but the degree of stenosis cannot fully explain the symptoms.',
      'Children or adolescents with a history of Kawasaki disease, and cardiac ultrasound or CTA shows coronary dilation, aneurysmal changes, or thrombosis risk.',
      'Young patients presenting with coronary dilation, along with fever, rash, joint pain, oral ulcers, vasculitis, or clues to connective tissue disease.',
      'Local dilation or aneurysmal changes occurring after previous stent placement, interventional treatment, or coronary abnormality.',
    ],
    commonWrongTurns: [
      'Managing only as ordinary coronary heart disease with stenosis, without inquiring about dilation extent, slow blood flow, and thrombosis risk.',
      'No imaging follow-up or risk factor management plan established after finding asymptomatic dilation.',
      'Ignoring childhood Kawasaki disease history or clues to systemic vasculitis.',
      'Confusing coronary artery ectasia, coronary artery aneurysm, and congenital coronary abnormalities.',
      'Self-adjusting antiplatelet, anticoagulant, lipid-lowering, or other medications long-term without cardiology assessment of bleeding and ischemic risk.',
    ],
    firstDepartments: [
      'Cardiology',
      'Coronary Intervention/Coronary Heart Disease Specialty',
      'Pediatric Cardiology (for Kawasaki disease-related children)',
      'Rheumatology and Immunology (when vasculitis or connective tissue disease is suspected)',
      'Cardiac Surgery (for complex coronary lesions requiring joint evaluation)',
    ],
    diagnosisChecklist: [
      'Preserve records of coronary CTA, coronary angiography, cardiac ultrasound, electrocardiogram, and myocardial injury markers.',
      'Ask your doctor to explain whether the dilation is focal or diffuse, which vessels are involved, and whether there is combined stenosis or thrombosis.',
      'Review your history of Kawasaki disease, vasculitis, connective tissue disease, infection, interventional treatment, and family cardiovascular history.',
      'Assess blood pressure, blood lipids, blood glucose, smoking, inflammatory markers, and other atherosclerosis risk factors.',
      'Confirm the imaging method for follow-up and intervals, as well as the emergency pathway for chest pain.',
    ],
    testsToAskAbout: [
      'Coronary CTA or coronary angiography.',
      'Electrocardiogram, cardiac enzymes/troponin, and cardiac ultrasound.',
      'Intravascular ultrasound, functional assessment, or cardiac MRI/MRA when necessary.',
      'Blood lipids, blood glucose, blood pressure, and atherosclerosis risk factor assessment.',
      'CRP, ESR, autoantibodies, etc., for vasculitis or connective tissue disease screening (when deemed necessary by your doctor).',
    ],
    questionsForDoctor: [
      'Which coronary arteries are affected by my dilation? Is it diffuse dilation, focal dilation, or coronary artery aneurysm?',
      'Is there combined coronary stenosis, thrombosis, slow blood flow, or evidence of myocardial ischemia?',
      'What is the most likely cause? Do I need to rule out Kawasaki disease sequelae, vasculitis, or connective tissue disease?',
      'Do I need antiplatelet, anticoagulant, lipid-lowering, or other medications? How is my bleeding risk assessed?',
      'How severe does chest pain need to be before I go to the emergency room? How are follow-up imaging and visit schedules arranged?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Coronary artery ectasia may have no obvious symptoms, or may present with chest pain, chest tightness, decreased exercise tolerance, angina-like discomfort, palpitations, or acute coronary syndrome. Symptoms often overlap with ordinary coronary heart disease, and some risks come from slow blood flow in the dilated segment, thrombosis, or distal embolism. For children and adolescents, special inquiry about Kawasaki disease history is needed.</p>',
    diagnosis:
      '<p>Diagnosis usually depends on coronary angiography or coronary CTA. The doctor will assess the dilation extent, vessel diameter, and whether there is combined stenosis, thrombosis, or aneurysmal change. The cause also needs to be determined by combining age, risk factors, Kawasaki disease history, inflammatory clues, connective tissue disease clues, and history of interventional treatment.</p>',
    treatment:
      '<p>Currently, there is no single treatment plan suitable for all patients. Management focuses on controlling atherosclerosis risk factors, assessing ischemic and thrombosis risk, managing combined stenosis or acute coronary syndrome, and, when necessary, joint evaluation by interventional, cardiac surgery, pediatric cardiology, or rheumatology teams. Medications such as antiplatelet or anticoagulant therapy should be weighed by a doctor for benefits versus bleeding risk.</p>',
    longTermCare:
      '<p>Long-term follow-up should focus on changes in chest pain, myocardial ischemia risk, changes in dilation extent on imaging, progression of thrombosis or stenosis, and modifiable factors such as blood pressure, blood lipids, blood glucose, and smoking. Patients with Kawasaki disease-related conditions need long-term monitoring according to pediatric cardiology follow-up protocols.</p>',
    fertilityOrFamily:
      '<p>Coronary artery ectasia is usually not a simple genetic disease. Patients of childbearing age planning pregnancy should discuss cardiac workload, medication safety, ischemic and thrombosis risk with cardiology and obstetrics specialists. If connective tissue disease or familial vascular disease is suspected, further genetic or rheumatology evaluation should be pursued.</p>',
    emergencySigns:
      '<p>If chest pain persists without relief, accompanied by profuse sweating, nausea, or shortness of breath, sudden fainting, severe palpitations, or suspected acute myocardial infarction, or if children after Kawasaki disease develop chest pain, poor spirit, or pale complexion, seek emergency care immediately and report the history of coronary artery ectasia or Kawasaki disease-related coronary changes.</p>',
  },
  sources: [
    {
      name: "National Health Commission of the People's Republic of China: The First Catalog of Rare Diseases",
      type: 'policy',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
    },
    {
      name: 'Coronary Artery Ectasia: Review of the Non-Atherosclerotic Molecular and Pathophysiologic Concepts',
      type: 'review',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9103542/',
    },
  ],
  symptoms:
    '<p>There may be no symptoms, or chest pain, chest tightness, angina-like discomfort, palpitations, or acute coronary syndrome may occur.</p>',
  diagnosis:
    '<p>Assessment depends on coronary CTA or coronary angiography, combined with whether there is combined stenosis, thrombosis, Kawasaki disease history, vasculitis, or atherosclerosis risk.</p>',
  treatment:
    '<p>Management includes risk factor control, ischemic and thrombosis risk assessment, medication when necessary, and joint evaluation by intervention or cardiac surgery. Specific plans need to be developed by cardiology specialists.</p>',
  prognosis:
    '<p>Prognosis depends on whether there is combined coronary heart disease, thrombosis, or acute coronary events, as well as the cause and quality of follow-up management.</p>',
  sourceName: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 333,
    name: 'coronary-artery-ectasia-journey.png',
    url: '/images/diseases/coronary-artery-ectasia-journey.png',
  },
  tagSlugs: [],
};

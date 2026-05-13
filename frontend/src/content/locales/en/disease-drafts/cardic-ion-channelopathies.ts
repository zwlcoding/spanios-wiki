import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCardicIonChannelopathies: DiseaseDraft = {
  ...entity(17, 'disease-cardic-ion-channelopathies'),
  name: 'Cardiac Ion Channelopathies',
  nameEn: 'Cardiac Ion Channelopathies',
  alias:
    'Hereditary Arrhythmia Syndrome, Primary Electrical Disease of the Heart',
  slug: 'cardic-ion-channelopathies',
  oneSentence:
    "Cardiac ion channelopathies are a group of inherited or acquired arrhythmia disorders affecting the heart's electrical activity, which may cause syncope, arrhythmias, or sudden death risk even when cardiac structure appears normal.",
  plainName:
    'Rare arrhythmias related to abnormal cardiac electrical signal channels',
  prevalence:
    'Varies significantly across subtypes. Long QT syndrome, Brugada syndrome, and catecholaminergic polymorphic ventricular tachycardia each have distinct population distributions and diagnostic criteria.',
  quickLook: {
    whatItIs:
      'Cardiac muscle cells rely on sodium, potassium, calcium, and other ion channels to generate and conduct electrical signals. When the related channels or regulatory proteins are abnormal, cardiac structure tests may appear essentially normal, but electrical activity is more prone to becoming uncontrolled, forming dangerous arrhythmias.',
    whoToSeeFirst:
      'When there is unexplained syncope, palpitations, exercise- or emotion-induced fainting, family history of sudden death at night, or abnormal ECG, it is recommended to visit the cardiac arrhythmia/electrophysiology specialist in the department of cardiovascular medicine; go to the emergency department for cardiac arrest, persistent chest tightness, or loss of consciousness.',
    isGenetic:
      'Many subtypes have a genetic background; common inheritance patterns include autosomal dominant and recessive inheritance. Incomplete penetrance and variable expression within the same family also exist. Genetic results need to be interpreted together with ECG and medical history.',
    hasTreatment:
      'There are risk stratification and management plans, including avoiding trigger factors, medications, implantable devices, exercise restrictions, and family screening. Specific plans should be developed by arrhythmia specialists based on subtype and risk.',
    commonDelayReason:
      'Syncope or seizure-like episodes may be mistaken for neurological problems; resting ECG may sometimes be normal; the first serious manifestation in young people may be cardiac arrest or sudden death, making family history and triggering scenarios very critical.',
  },
  patientJourney: {
    whenToSuspect: [
      'Syncope, seizure-like episodes, or palpitations during exercise, swimming, emotional excitement, startle, fever, or sleep.',
      'Cardiac structure tests are essentially normal, but there is recurrent unexplained syncope or ventricular arrhythmia.',
      'Family history of young sudden death, nocturnal sudden death, drowning-like accidents, recurrent syncope, or implanted defibrillator.',
      'ECG shows abnormal QT interval, Brugada-like changes, short QT, or exercise-induced ventricular arrhythmia.',
      'Previously diagnosed with epilepsy but episodes are highly correlated with exercise, startle, or emotional triggers, and EEG or anti-epileptic treatment cannot adequately explain the episodes.',
    ],
    commonWrongTurns: [
      'Treated only as epilepsy or ordinary syncope without ECG, Holter monitoring, or exercise provocation testing.',
      'After one normal resting ECG, completely ruled out inherited arrhythmia.',
      'Failed to ask about sudden death, syncope, arrhythmia, drowning, traffic accidents, or nocturnal deaths in three generations of family history.',
      'Interpreted genetic test results without clinical context, mistaking variants of uncertain significance as confirmed diagnosis or complete exclusion.',
      'Did not confirm with doctor which medications, fever conditions, or exercise scenarios may increase risk.',
    ],
    firstDepartments: [
      'Department of Cardiovascular Medicine (arrhythmia/electrophysiology specialty)',
      'Emergency Department (for loss of consciousness, cardiac arrest, persistent chest tightness, or severe palpitations)',
      'Pediatric Cardiology (for childhood or adolescent onset)',
      'Genetic Counseling Clinic (for family screening and family planning)',
    ],
    diagnosisChecklist: [
      'Record the timing, triggers, duration, presence of convulsions, recovery process, and witness information for each syncope or palpitation episode.',
      'Collect family history of young sudden death, syncope, arrhythmia, drowning, or unexplained accidents.',
      'Bring 12-lead ECG, Holter monitoring, exercise stress test, cardiac ultrasound, and previous emergency records.',
      'Confirm with doctor whether arrhythmia gene panel testing is needed and how results integrate with clinical risk.',
      'Check current medications for any that may affect QT interval or induce arrhythmias.',
    ],
    testsToAskAbout: [
      '12-lead ECG, repeated as needed or with adjusted right precordial lead positions.',
      'Holter monitoring or longer-term rhythm monitoring.',
      'Exercise stress test or provocation evaluation as deemed appropriate by the doctor.',
      'Cardiac ultrasound and cardiac MRI as needed to rule out structural heart disease.',
      'Electrolytes, thyroid function, medication review, and evaluation of other acquired arrhythmia triggers.',
      'Genetic testing for inherited arrhythmia and family cascade screening.',
    ],
    questionsForDoctor: [
      'Is my syncope more likely cardiac, neurally-mediated, or epileptic? What additional tests are needed to differentiate?',
      'Which cardiac ion channelopathy is currently suspected? Based on ECG, triggering scenario, or family history?',
      'Which medications, fever states, exercise intensity, or sudden stimuli should I avoid?',
      'Do family members need ECG, exercise testing, or genetic testing? Who should be tested first?',
      'What situations require emergency care? Do I need to learn CPR or prepare an automated external defibrillator plan?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Cardiac ion channelopathies include Long QT syndrome, Brugada syndrome, catecholaminergic polymorphic ventricular tachycardia, short QT syndrome, and others. Symptoms may present as palpitations, dizziness, syncope, seizure-like episodes, cardiac arrest, or sudden death, and may also remain asymptomatic for long periods. Different subtypes have different triggering scenarios, such as exercise, emotional stimulation, startle, sleep, or fever.</p>',
    diagnosis:
      '<p>Diagnosis requires combining triggering scenarios, family history, ECG features, Holter monitoring, exercise testing, cardiac structural assessment, and genetic testing. One normal resting ECG cannot completely rule out certain subtypes; finding a variant of uncertain significance on genetic testing cannot alone confirm diagnosis. Doctors typically also rule out medications, electrolyte abnormalities, cardiomyopathy, and other structural heart disease.</p>',
    treatment:
      '<p>Treatment and prevention strategies vary by subtype and risk, which may include avoiding trigger factors, controlling fever, adjusting medications, restricting specific exercises, long-term rhythm follow-up, drug therapy, implantable defibrillation devices, or other specialty interventions. Specific choices require comprehensive judgment by arrhythmia/electrophysiology specialists, and patients should not independently stop medications or adjust treatment based on online information.</p>',
    longTermCare:
      '<p>The focus of long-term management is risk stratification, repeated ECG and rhythm monitoring, updating the prohibited medication list, managing exercise and fever scenarios, and ensuring family members understand emergency procedures. First-degree relatives of diagnosed or highly suspected individuals typically need clinical screening; if the family pathogenic variant is identified, cascade genetic testing can be further pursued.</p>',
    fertilityOrFamily:
      '<p>Many cardiac ion channelopathies have a genetic background, but penetrance and severity can vary widely. For those with known family pathogenic variants, genetic counseling during family planning can provide information on options such as partner testing, prenatal diagnosis, or preimplantation genetic testing. When no clear pathogenic variant is identified, family screening may still rely on ECG and clinical assessment.</p>',
    emergencySigns:
      '<p>Sudden loss of consciousness, cardiac arrest, exercise- or emotion-induced syncope, recurrent severe palpitations with chest tightness and shortness of breath, Brugada-related risk clues during fever, or after a young sudden death in the family warrant immediate emergency or arrhythmia specialist evaluation. On-site personnel should immediately call emergency services and follow local emergency training protocols.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Long QT Syndrome Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
    },
    {
      name: 'GeneReviews: Brugada Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1517/',
    },
    {
      name: 'GeneReviews: Catecholaminergic Polymorphic Ventricular Tachycardia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1289/',
    },
    {
      name: 'Heart: Cardiac channelopathies diagnosis and contemporary management',
      type: 'review',
      url: 'https://heart.bmj.com/content/107/13/1092',
    },
  ],
  symptoms:
    '<p>May present as palpitations, syncope, seizure-like episodes, cardiac arrest, or sudden death risk, often related to exercise, emotion, sleep, startle, or fever.</p>',
  diagnosis:
    '<p>Assessment typically includes ECG, Holter monitoring, exercise testing, cardiac structural evaluation, trigger investigation, and genetic testing for inherited arrhythmia.</p>',
  treatment:
    '<p>Management requires risk stratification by arrhythmia specialists, and may involve avoiding trigger factors, medications, implantable devices, exercise recommendations, and family screening.</p>',
  prognosis:
    '<p>Early identification of high-risk individuals, standardized follow-up, and family screening help reduce the risk of serious arrhythmic events, but outcomes vary considerably across subtypes and individuals.</p>',
  sourceName: 'GeneReviews: Long QT Syndrome Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 316,
    name: 'cardic-ion-channelopathies-journey.png',
    url: '/images/diseases/cardic-ion-channelopathies-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

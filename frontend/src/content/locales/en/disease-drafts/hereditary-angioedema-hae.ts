import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryAngioedemaHae: DiseaseDraft = {
  ...entity(40, 'disease-hereditary-angioedema-hae'),
  name: 'Hereditary Angioedema (HAE)',
  nameEn: 'Hereditary Angioedema (HAE)',
  alias:
    'HAE, hereditary angioneurotic edema, C1 inhibitor deficiency-related angioedema',
  slug: 'hereditary-angioedema-hae',
  oneSentence:
    'Hereditary angioedema is a condition involving recurrent deep swelling that can affect the skin, gastrointestinal tract, and upper airway; airway involvement may be life-threatening.',
  plainName: 'Recurrent sudden swelling, often without itching or hives',
  prevalence:
    'Overall rare, symptoms often begin in childhood or adolescence but may also be identified in adulthood.',
  quickLook: {
    whatItIs:
      'HAE swelling is usually not from standard allergies. Common types involve insufficient C1 inhibitor quantity or function; abnormal bradykinin pathways increase vascular leakage, leading to swelling in the skin, abdomen, or airways.',
    whoToSeeFirst:
      'For recurrent facial, hand, foot, or genital swelling, recurrent severe abdominal pain with vomiting, or throat/tongue swelling, seek evaluation at an allergy/immunology department, emergency department, or dermatology. Airway symptoms require immediate emergency care.',
    isGenetic:
      'Most cases follow autosomal dominant inheritance, but new mutations can occur. Negative family history does not rule out the condition.',
    hasTreatment:
      'Strategies exist for acute attacks, short-term prevention, and long-term prevention. Standard allergy medications typically do not reliably control HAE attacks and require a specialist to develop a plan.',
    commonDelayReason:
      'Often mistaken for urticaria, food allergy, gastroenteritis, appendicitis, or anxiety. When there are no hives or itching and antihistamines/corticosteroids are ineffective, consider HAE.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent deep swelling without obvious hives or itching, often resolving on its own after some time.',
      'Recurrent severe abdominal pain, nausea, vomiting, or bloating not explained by tests.',
      'Swelling attacks triggered by dental work, surgery, infection, stress, menstruation, or injury.',
      'Laryngeal, tongue, or throat swelling with voice changes, difficulty swallowing, or breathing problems.',
      'Family history of recurrent swelling, abdominal pain, or unexplained suffocation deaths.',
    ],
    commonWrongTurns: [
      'Long-term management as allergy or urticaria without checking complement C4 and C1 inhibitor levels.',
      'Repeated abdominal attacks misidentified as acute abdomen, sometimes leading to unnecessary surgery.',
      'Airway attacks without documenting HAE risk, delaying specialist emergency intervention.',
      'Only seeking care during attacks without establishing long-term prevention and home emergency plans.',
    ],
    firstDepartments: [
      'Allergy and Clinical Immunology',
      'Emergency Department (for airway or severe abdominal attacks)',
      'Dermatology',
      'Gastroenterology (for recurrent abdominal attacks)',
      'Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Record the location, duration, triggers, presence of hives or itching, and response to allergy medications for each swelling episode.',
      'Keep imaging studies, emergency records, and any surgical notes from abdominal attacks.',
      'Request complement C4, C1 inhibitor level and function testing.',
      'Document family history of recurrent swelling, abdominal pain, suffocation, or similar diagnoses.',
      'After diagnosis, prepare acute attack, pre-procedure, and travel emergency plans.',
    ],
    testsToAskAbout: [
      'Complement C4',
      'C1 inhibitor level and function',
      'C1q and other tests if needed to differentiate acquired angioedema',
      'HAE genetic testing (if the doctor recommends it)',
      'Abdominal imaging and airway risk assessment during attacks',
    ],
    questionsForDoctor: [
      'Is my presentation more consistent with HAE or common allergic angioedema?',
      'What type do I have? Do I need repeat C4/C1 inhibitor testing?',
      'How should I manage airway, abdominal, and skin attacks?',
      'Do I need short-term prevention before dental work, surgery, endoscopy, or travel?',
      'Should my family members be screened? What medications or triggers should I avoid or tell other doctors about?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Typical HAE presentation involves recurrent deep swelling, often without itching or typical hives, affecting the hands, feet, face, genitals, gastrointestinal tract, and upper airway. Gastrointestinal attacks may cause severe abdominal pain, vomiting, bloating, or diarrhea. Laryngeal or pharyngeal swelling may lead to respiratory obstruction risk.</p>',
    diagnosis:
      '<p>Diagnosis typically starts with complement C4, C1 inhibitor level and function testing, combined with attack characteristics, family history, and medication responses. Doctors also differentiate common allergic angioedema, urticaria, acquired C1 inhibitor deficiency, drug-related angioedema, and acute abdomen.</p>',
    treatment:
      '<p>Management includes acute attack treatment, airway risk management, short-term prevention for triggering situations such as surgery or dental work, and long-term prevention for frequent or high-risk attacks. Specific medications and access vary by region and require a specialist familiar with HAE.</p>',
    longTermCare:
      '<p>Long-term care focuses on identifying triggers, preparing emergency documentation, assessing attack frequency and quality-of-life impact, planning for procedures and travel, screening family members, and providing psychological support. Patients should inform emergency, anesthesia, dental, and obstetrics teams about their HAE diagnosis and emergency plan.</p>',
    fertilityOrFamily:
      '<p>HAE is mostly autosomal dominant. First-degree relatives should consider screening after diagnosis. Pregnancy, delivery, contraception, and hormone use may affect attack risk and require joint evaluation by allergy/immunology and obstetrics specialists.</p>',
    emergencySigns:
      '<p>Seek immediate emergency care and state HAE risk for tongue, throat, or voice swelling; difficulty swallowing; chest tightness; or breathing difficulty. Also seek care for severe abdominal pain with dehydration, low blood pressure, or repeated vomiting.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Hereditary angioedema',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Hereditary Angioedema',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK482266/',
    },
  ],
  symptoms:
    '<p>Recurrent deep swelling, abdominal pain with vomiting, facial or limb swelling; severe cases may involve laryngeal edema and risk of airway obstruction.</p>',
  diagnosis:
    '<p>Evaluation includes complement C4, C1 inhibitor level and function testing, family history, attack characteristics, and differentiation from allergic angioedema.</p>',
  treatment:
    '<p>Management includes acute attack treatment, airway risk planning, and short- and long-term prevention strategies, requiring immunology/allergy specialist guidance.</p>',
  prognosis:
    '<p>Proper recognition and emergency planning can reduce the risk of severe attacks; airway involvement is the highest priority risk requiring rapid action.</p>',
  sourceName: 'MedlinePlus Genetics: Hereditary angioedema',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 339,
    name: 'hereditary-angioedema-hae-journey.png',
    url: '/images/diseases/hereditary-angioedema-hae-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

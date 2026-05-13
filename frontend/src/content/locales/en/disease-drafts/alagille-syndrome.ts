import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlagilleSyndrome: DiseaseDraft = {
  ...entity(2005, 'disease-alagille-syndrome'),
  name: 'Alagille syndrome',
  nameEn: 'Alagille syndrome',
  alias:
    'ALGS; arteriohepatic dysplasia; China Second Rare Disease Catalog item 5',
  slug: 'alagille-syndrome',
  oneSentence:
    'Alagille syndrome is a multisystem genetic condition, often related to JAG1 or NOTCH2 variants, that can affect bile ducts, liver, heart, blood vessels, eyes, spine, kidneys, and facial features.',
  plainName:
    'A genetic bile duct and multisystem condition often noticed in infancy',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 70,000 newborns, likely underestimated for mild cases.",
  quickLook: {
    whatItIs:
      'Alagille syndrome is not only a liver disease. Clues include infant cholestasis, jaundice, itching, xanthomas, pulmonary artery stenosis or other heart defects, characteristic facial features, butterfly vertebrae, posterior embryotoxon, kidney or vascular problems.',
    whoToSeeFirst:
      'Persistent infant jaundice, pale stools, itching, or abnormal liver tests should be evaluated by pediatric hepatology or gastroenterology, with cardiology, ophthalmology, and genetics involved.',
    isGenetic:
      'Most cases involve JAG1 and fewer involve NOTCH2. It is usually autosomal dominant. Some cases are inherited and others are new variants; severity can vary widely within a family.',
    hasTreatment:
      'Care is supportive and complication-focused: cholestasis and itching control, nutrition, fat-soluble vitamins, heart and vascular monitoring, and liver transplant evaluation when liver disease is severe.',
    commonDelayReason:
      'It may be mistaken for routine newborn jaundice, biliary atresia, or another cholestatic disease if liver, heart, eye, spine, facial, kidney, and family clues are not considered together.',
  },
  patientJourney: {
    whenToSuspect: [
      'Persistent jaundice in infancy, high direct bilirubin, dark urine, or pale stools.',
      'Severe itching, scratching, xanthomas, fat-soluble vitamin deficiency, or poor growth.',
      'Cholestasis with heart murmur, pulmonary artery stenosis, or another congenital heart defect.',
      'Posterior embryotoxon, butterfly vertebrae, characteristic facial features, kidney or vascular abnormalities.',
      'Family history of cholestasis, heart disease, similar facial features, or confirmed ALGS with variable severity.',
    ],
    commonWrongTurns: [
      'Watching prolonged jaundice as routine physiologic jaundice.',
      'Considering only liver disease or biliary atresia without multisystem assessment.',
      'Missing heart, eye, spine, kidney, and vascular screening.',
      'Assuming mild parental symptoms rule out inherited disease.',
    ],
    firstDepartments: [
      'Pediatric gastroenterology or hepatology',
      'Medical genetics',
      'Pediatric cardiology',
      'Ophthalmology',
    ],
    diagnosisChecklist: [
      'Track jaundice, stool color, itching, xanthomas, weight gain, and nutrition from birth onward.',
      'Bring liver tests, bilirubin, GGT, bile acids, abdominal ultrasound, liver pathology, and biliary evaluation results.',
      'Bring echocardiogram, eye exam, spine X-ray, kidney, and vascular results if available.',
      'Record family history of cholestasis, heart disease, kidney disease, stroke, vascular events, or similar facial features.',
    ],
    testsToAskAbout: [
      'Liver tests, direct bilirubin, GGT, bile acids, coagulation tests, and fat-soluble vitamin levels.',
      'Abdominal ultrasound and further liver/biliary evaluation when needed.',
      'JAG1 and NOTCH2 genetic testing with parental testing when appropriate.',
      'Echocardiography, slit-lamp eye exam, and spine X-ray.',
      'Kidney, blood pressure, and vascular or neurologic risk assessment.',
    ],
    questionsForDoctor: [
      'Does the cholestasis pattern fit Alagille syndrome, and what else must be ruled out?',
      'How severe is the liver disease, and should a liver transplant center be involved?',
      'How should itching, nutrition, and fat-soluble vitamins be managed long term?',
      'How often should heart, eye, kidney, and vascular screening occur?',
      'What does the genetic result mean for parents, siblings, and future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Early problems often come from cholestasis: jaundice, dark urine, pale stools, itching, xanthomas, fat-soluble vitamin deficiency, and poor growth. Liver severity ranges from mild to progressive liver disease that may require transplantation.</p><p>Extrahepatic features can include pulmonary artery stenosis or other congenital heart disease, characteristic facial features, butterfly vertebrae, posterior embryotoxon, kidney abnormalities, and vascular problems. Not every person has every feature.</p>',
    diagnosis:
      '<p>Diagnosis combines cholestasis, liver evaluation, multisystem findings, family history, and genetic testing. JAG1 variants are most common; NOTCH2 variants are less common.</p><p>Doctors distinguish it from biliary atresia, other inherited cholestasis disorders, infections, metabolic disease, and immune liver disease. Heart, eye, spine, kidney, and vascular assessments can provide key clues.</p>',
    treatment:
      '<p>Treatment is supportive and complication-focused. It may include medicines for itching and cholestasis, fat-soluble vitamin replacement, nutrition support, growth monitoring, and management of bone, heart, kidney, or vascular problems. Severe liver disease or uncontrolled itching may prompt liver transplant evaluation.</p><p>Medication and procedure decisions should be coordinated by pediatric hepatology, cardiology, genetics, and transplant teams when needed.</p>',
    longTermCare:
      '<p>Follow-up tracks liver tests, cholestasis markers, nutrition and growth, vitamin levels, coagulation, bone health, heart status, eyes, kidneys, blood pressure, and vascular risk. Itching and sleep disruption should be discussed directly because they can be very burdensome.</p><p>A short medical summary helps for school, travel, and cross-hospital care, including diagnosis, genetic result, liver stage, heart status, medicines, and emergency signs.</p>',
    fertilityOrFamily:
      '<p>Alagille syndrome is usually autosomal dominant, but many cases are new variants. Because mildly affected parents can carry the variant, genetic counseling and parental testing are recommended after diagnosis.</p><p>Families planning another pregnancy can discuss prenatal diagnosis or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Seek urgent care for fever with lethargy, rapidly worsening jaundice, black stool or vomiting blood, unusual bleeding, increasing abdominal swelling, severe dehydration, confusion, chest pain, fainting, breathing trouble, blue color, or markedly worse feeding in an infant with heart or liver disease.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Alagille syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/alagille-syndrome/',
    },
  ],
  symptoms:
    '<p>Common clues include infant cholestasis, persistent jaundice, dark urine, pale stools, itching, xanthomas, poor growth, and possible heart, eye, spine, kidney, vascular, or facial features.</p>',
  diagnosis:
    '<p>Diagnosis combines cholestasis and multisystem findings, liver/biliary testing, heart/eye/spine/kidney/vascular assessment, family history, and JAG1/NOTCH2 genetic testing.</p>',
  treatment:
    '<p>Care focuses on itching and cholestasis control, nutrition and fat-soluble vitamins, heart/kidney/vascular monitoring, and liver transplant evaluation for severe disease.</p>',
  prognosis:
    '<p>Outlook varies widely and depends on liver, heart, and vascular involvement. Early multidisciplinary follow-up can reduce nutrition, bleeding, cardiovascular, and liver risks.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 359,
    name: 'alagille-syndrome-journey.png',
    url: '/images/diseases/alagille-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

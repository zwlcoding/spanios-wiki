import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalBiliaryAtresia: DiseaseDraft = {
  ...entity(2016, 'disease-congenital-biliary-atresia'),
  name: 'Congenital biliary atresia',
  nameEn: 'Congenital biliary atresia',
  alias:
    'Biliary atresia, Kasai-related cholestatic liver disease, China Second Rare Disease Catalog item 16',
  slug: 'congenital-biliary-atresia',
  oneSentence:
    'Congenital biliary atresia is a serious infant liver and bile duct disease in which bile cannot drain normally, leading to persistent jaundice, pale stools, dark urine, and progressive liver injury.',
  plainName:
    'An infant bile duct disease that needs urgent liver and surgery evaluation',
  prevalence:
    "Included in China's second rare disease catalog; Mayo Clinic cites about 1 in 10,000 to 20,000 live births, with variation by region and screening practice.",
  quickLook: {
    whatItIs:
      'Biliary atresia affects newborns and young infants. Bile ducts inside or outside the liver become scarred or blocked, so bile builds up and can cause cirrhosis, portal hypertension, and liver failure.',
    whoToSeeFirst:
      'If jaundice persists after 2 to 3 weeks of age, especially with dark urine or pale stools, the baby should be evaluated urgently by pediatric hepatology or pediatric hepatobiliary surgery.',
    isGenetic:
      'Most cases are not typical inherited disease and are not caused by something parents did during pregnancy. Some babies have associated birth differences that may need broader evaluation.',
    hasTreatment:
      'Early evaluation for the Kasai procedure is central. The operation does not cure every child, but earlier bile drainage can slow liver damage. Some children still need liver transplant evaluation.',
    commonDelayReason:
      'It is often mistaken for common newborn jaundice. Persistent jaundice, elevated direct bilirubin, pale stools, and dark urine after 3 weeks should not be watched without a cholestasis workup.',
  },
  patientJourney: {
    whenToSuspect: [
      'Yellow skin or eyes persist beyond 2 to 3 weeks after birth or return after seeming to improve.',
      'Stools become pale yellow, gray, or clay-colored and urine becomes dark.',
      'The baby has abdominal swelling, enlarged liver or spleen, poor feeding, slow weight gain, or irritability.',
      'Testing shows elevated direct or conjugated bilirubin rather than simple physiologic jaundice.',
    ],
    commonWrongTurns: [
      'Assuming breast milk jaundice or physiologic jaundice without checking direct bilirubin and stool color.',
      'Using phototherapy or jaundice treatment without investigating cholestasis.',
      'Referral to pediatric hepatobiliary surgery only after fibrosis has progressed.',
      'Missing cholangitis or worsening liver function after Kasai when fever or jaundice returns.',
    ],
    firstDepartments: [
      'Pediatric gastroenterology or hepatology',
      'Pediatric hepatobiliary surgery',
      'Pediatric liver transplant center',
      'Nutrition',
    ],
    diagnosisChecklist: [
      'Record timing of jaundice, urine color, stool color, and bring stool photos or stool color card records.',
      'Bring total and direct bilirubin, liver enzymes, coagulation tests, abdominal ultrasound, HIDA or other imaging.',
      'Summarize birth history, prematurity, infections, vitamin K, feeding, and weight gain.',
      'If surgery was done, bring Kasai operative notes, pathology, cholangiogram, discharge summary, and follow-up labs.',
    ],
    testsToAskAbout: [
      'Total and direct bilirubin, liver tests, coagulation, CBC, and infection evaluation.',
      'Abdominal ultrasound and, when needed, hepatobiliary scintigraphy, MRI/MRCP, or operative cholangiography.',
      'Tests to rule out other infant cholestasis causes, including metabolic, infectious, genetic, or endocrine disorders.',
      'Whether liver biopsy or surgical exploration is needed and whether referral to a pediatric liver center is urgent.',
    ],
    questionsForDoctor: [
      'Is direct bilirubin elevated, and does this require urgent cholestasis evaluation?',
      'Does the evidence suggest biliary atresia, and what else must be ruled out?',
      'Is the Kasai procedure appropriate, and what is the timing, goal, and backup plan?',
      'How will cholangitis, nutrition, vitamin deficiency, portal hypertension, and transplant timing be monitored?',
      'Which fever, jaundice, pale stool, or bleeding signs require emergency care?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The key early clue is jaundice that does not resolve, especially yellowing beyond 2 to 3 weeks of age with dark urine and pale, gray, or clay-colored stools. Babies may initially feed and gain weight well, which can make the condition look like common newborn jaundice.</p><p>As cholestasis progresses, infants may develop an enlarged liver or spleen, abdominal swelling, poor growth, itching, fat-soluble vitamin deficiency, abnormal clotting, portal hypertension, and cirrhosis.</p>',
    diagnosis:
      '<p>Any infant still jaundiced after 3 weeks should be evaluated for biliary atresia and other cholestatic liver diseases. Testing usually includes total and direct bilirubin, liver tests, coagulation, ultrasound, and targeted evaluation for infectious, metabolic, genetic, and endocrine causes.</p><p>When biliary atresia is strongly suspected, clinicians may use hepatobiliary imaging, liver biopsy, MRCP, or surgical exploration with cholangiography. Diagnosis and treatment must be coordinated with pediatric hepatobiliary surgery because timing matters.</p>',
    treatment:
      '<p>The Kasai portoenterostomy is usually the first treatment. It creates a new drainage route for bile using the baby’s intestine. It does not undo all liver injury or guarantee cure, but successful drainage can reduce jaundice, slow cirrhosis, and delay or prevent transplant.</p><p>After surgery, care includes nutrition, fat-soluble vitamins, prevention and treatment of cholangitis, and monitoring liver function and clotting. Failed drainage, repeated cholangitis, liver failure, or severe portal hypertension may require liver transplant evaluation.</p>',
    longTermCare:
      '<p>Long-term follow-up tracks liver tests, bilirubin, clotting, nutrition, vitamin levels, spleen size, varices, growth, and development. Families should learn to watch stool color, urine color, fever, and jaundice changes.</p><p>Even after a good Kasai response, chronic liver disease can appear later in childhood or adulthood, so follow-up with a pediatric liver or transplant team remains important.</p>',
    fertilityOrFamily:
      '<p>Biliary atresia is usually not a typical inherited condition, and siblings generally do not need routine genetic screening. If there are associated birth differences such as polysplenia, heart defects, or intestinal rotation problems, broader evaluation may be considered.</p>',
    emergencySigns:
      '<p>Seek urgent care for fever, sudden worsening jaundice, stools becoming pale again, much darker urine, poor responsiveness, refusal to feed, vomiting blood, black stools, marked abdominal swelling, bleeding spots, or unusual sleepiness. Tell the team whether Kasai surgery has been done.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Biliary Atresia',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/biliary-atresia',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Biliary atresia',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001145.htm',
    },
  ],
  symptoms:
    '<p>Main signs are persistent infant jaundice, dark urine, pale gray or clay-colored stools, and later enlarged liver or spleen, poor growth, and liver disease complications.</p>',
  diagnosis:
    '<p>Diagnosis starts with direct bilirubin and cholestasis evaluation, then uses ultrasound, hepatobiliary imaging or cholangiography, liver biopsy or surgical exploration, and testing for other infant cholestasis causes.</p>',
  treatment:
    '<p>Care centers on early assessment for the Kasai procedure, followed by nutrition, vitamins, cholangitis prevention, liver complication monitoring, and liver transplant when needed.</p>',
  prognosis:
    '<p>Outcome depends on timing of diagnosis and surgery, bile drainage after Kasai, cholangitis, and cirrhosis progression. Early referral to a pediatric liver center is critical.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 370,
    name: 'congenital-biliary-atresia-journey.png',
    url: '/images/diseases/congenital-biliary-atresia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

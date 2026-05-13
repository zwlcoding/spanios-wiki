import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryBiliaryCholangitis: DiseaseDraft = {
  ...entity(2063, 'disease-primary-biliary-cholangitis'),
  name: 'Primary biliary cholangitis',
  nameEn: 'Primary biliary cholangitis',
  alias:
    'PBC; primary biliary cirrhosis (older name); China Second Rare Disease Catalog item 63',
  slug: 'primary-biliary-cholangitis',
  oneSentence:
    'Primary biliary cholangitis is a chronic autoimmune cholestatic liver disease in which small intrahepatic bile ducts are gradually damaged, causing itch, fatigue, cholestasis, and fibrosis risk.',
  plainName:
    'A chronic autoimmune disease that slowly injures small bile ducts in the liver',
  prevalence:
    "Included in China's second rare disease catalog; it is more common in middle-aged women, and many people are found before symptoms through alkaline phosphatase elevation and antimitochondrial antibodies.",
  quickLook: {
    whatItIs:
      'PBC is not alcohol- or virus-related liver disease. Immune injury to small bile ducts causes bile to build up and can progress to fibrosis, cirrhosis, and portal hypertension.',
    whoToSeeFirst:
      'Persistent ALP/GGT elevation, positive AMA, long-term itch, or unexplained fatigue should be reviewed by hepatology or gastroenterology.',
    isGenetic:
      'PBC has genetic susceptibility and environmental triggers but is not a single-gene inherited disorder. First-degree relatives have slightly higher risk, but screening is individualized.',
    hasTreatment:
      'Ursodeoxycholic acid is foundational treatment, and early biochemical response predicts better outcomes. Nonresponse, intolerance, itch, and advanced disease need specialist adjustment.',
    commonDelayReason:
      'Early PBC can be silent or labeled fatty liver, allergy, skin itch, or chronic fatigue unless ALP, GGT, AMA, and biliary obstruction are evaluated.',
  },
  patientJourney: {
    whenToSuspect: [
      'Alkaline phosphatase and GGT remain elevated, especially with positive antimitochondrial antibody.',
      'Long-term itching, fatigue, dry eyes or mouth, right upper abdominal discomfort, or high cholesterol.',
      'Coexisting Sjogren syndrome, thyroid disease, systemic sclerosis, or other autoimmune disease.',
      'Jaundice, ascites, leg swelling, vomiting blood, black stools, or confusion suggesting advanced complications.',
    ],
    commonWrongTurns: [
      'Observing as fatty liver or gallbladder disease without recognizing the cholestatic enzyme pattern.',
      'Treating itch only in dermatology without liver tests and AMA.',
      'Using nonspecific liver supplements instead of adequate UDCA and 6- to 12-month biochemical response assessment.',
    ],
    firstDepartments: [
      'Hepatology',
      'Gastroenterology',
      'Rheumatology when autoimmune disease coexists',
      'Liver transplant center for advanced disease',
    ],
    diagnosisChecklist: [
      'Bring serial liver tests: ALP, GGT, ALT/AST, bilirubin, albumin, INR, and platelets.',
      'Bring AMA, ANA, IgM, viral hepatitis, and autoimmune hepatitis antibody results.',
      'Bring ultrasound, MRCP, or other imaging to exclude obstruction and primary sclerosing cholangitis.',
      'Record itch, fatigue, dry eyes or mouth, bone pain, fractures, pregnancy history, and medicines or supplements.',
    ],
    testsToAskAbout: [
      'AMA or PBC-specific ANA, IgM, and cholestatic liver enzyme assessment.',
      'Transient elastography or noninvasive fibrosis testing, and whether liver biopsy is needed.',
      'How UDCA response will be judged after 6 to 12 months and whether second-line therapy is needed.',
      'Bone density, fat-soluble vitamins, thyroid disease, Sjogren syndrome, and cirrhosis complication screening.',
    ],
    questionsForDoctor: [
      'Does my pattern meet PBC criteria, and do we need to exclude autoimmune hepatitis overlap or obstruction?',
      'Is my UDCA dose adequate for weight, and when will ALP, bilirubin, and risk scores be reviewed?',
      'How can itching and fatigue be managed, and do I need second-line therapy or a trial?',
      'Do I have cirrhosis or portal hypertension, and when should liver transplant evaluation start?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PBC may be asymptomatic early and found through elevated ALP or GGT. Common symptoms are fatigue and itchy skin, often worse at night and disruptive to sleep and mood. Dry eyes, dry mouth, right upper abdominal discomfort, joint pain, and high cholesterol can occur.</p><p>With progression, people may develop skin darkening, jaundice, fatty stools, osteoporosis, ascites, leg swelling, variceal bleeding, and hepatic encephalopathy.</p>',
    diagnosis:
      '<p>Typical diagnosis is based on cholestatic liver enzyme elevation, AMA or PBC-specific autoantibodies, and exclusion of biliary obstruction. Ultrasound or MRCP can help rule out stones, tumors, strictures, and primary sclerosing cholangitis.</p><p>Liver biopsy is not required for everyone but is useful when AMA is negative, autoimmune hepatitis overlap is suspected, diagnosis is unclear, or inflammation and fibrosis need staging. Risk assessment uses ALP, bilirubin, albumin, platelets, liver stiffness, and treatment response.</p>',
    treatment:
      '<p>Ursodeoxycholic acid is foundational therapy and should be taken long term at an appropriate weight-based dose. ALP and bilirubin response after 6 to 12 months helps estimate long-term risk. Nonspecific liver supplements should not replace UDCA.</p><p>If UDCA response is inadequate or the medicine is not tolerated, hepatologists may consider obeticholic acid, fibrates, or other second-line options depending on contraindications. Itch can be treated with bile acid sequestrants, rifampin, opioid antagonists, or other approaches. Advanced disease, refractory itch, or decompensation may require liver transplant evaluation.</p>',
    longTermCare:
      '<p>Long-term follow-up includes liver tests, bilirubin, albumin, INR, platelets, liver stiffness, ultrasound, and cirrhosis complication screening. People with cirrhosis need surveillance for liver cancer and varices.</p><p>Bone loss, fat-soluble vitamin deficiency, thyroid disease, Sjogren syndrome, fatigue, itch, and mental health should also be addressed. Avoid excess alcohol, receive appropriate hepatitis vaccination, and review liver toxicity before new medicines.</p>',
    fertilityOrFamily:
      '<p>PBC is not a single-gene inherited disease. First-degree relatives with itching, fatigue, or abnormal liver enzymes can ask about liver tests and AMA. Pregnancy planning should include hepatology and obstetrics review of disease stability, medicines, and cholestasis monitoring.</p>',
    emergencySigns:
      '<p>Urgent care is needed for vomiting blood, black stools, rapidly increasing ascites, worsening jaundice, fever with abdominal pain, confusion, severe sleepiness, low urine output, or uncontrolled itch affecting eating and sleep.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Primary Biliary Cholangitis',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/primary-biliary-cholangitis',
    },
    {
      name: 'AASLD: Primary Biliary Cholangitis Practice Guidance',
      type: 'clinical-guideline',
      url: 'https://www.aasld.org/practice-guidelines/primary-biliary-cholangitis',
    },
  ],
  symptoms:
    '<p>Early disease may be silent; common features include fatigue, itchy skin, dry eyes or mouth, right upper abdominal discomfort, joint pain, and cholestasis, with jaundice, ascites, variceal bleeding, or encephalopathy in advanced disease.</p>',
  diagnosis:
    '<p>Diagnosis combines persistent ALP/GGT elevation, AMA or PBC-specific ANA, IgM, imaging to exclude obstruction, and when needed liver biopsy and fibrosis assessment.</p>',
  treatment:
    '<p>Care starts with adequate ursodeoxycholic acid and 6- to 12-month response assessment; nonresponders may need second-line medicine, itch therapy, and transplant evaluation for advanced disease.</p>',
  prognosis:
    '<p>Early diagnosis and good UDCA response predict better outcomes. Rising bilirubin, persistently high ALP, cirrhosis, or decompensation indicate higher risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 417,
    name: 'primary-biliary-cholangitis-journey.png',
    url: '/images/diseases/primary-biliary-cholangitis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

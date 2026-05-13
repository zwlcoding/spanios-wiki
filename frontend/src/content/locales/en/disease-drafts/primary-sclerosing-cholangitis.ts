import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimarySclerosingCholangitis: DiseaseDraft = {
  ...entity(2068, 'disease-primary-sclerosing-cholangitis'),
  name: 'Primary sclerosing cholangitis',
  nameEn: 'Primary sclerosing cholangitis',
  alias:
    'PSC; primary sclerosing cholangitis; China Second Rare Disease Catalog item 68',
  oneSentence:
    'Primary sclerosing cholangitis is a chronic bile duct disease in which inflammation and scarring narrow bile ducts inside and outside the liver, causing cholestasis, liver injury, and frequent association with inflammatory bowel disease.',
  plainName:
    'A chronic liver and bile duct disease where bile ducts slowly narrow',
  prevalence:
    "Included in China's second rare disease catalog; PSC is rare overall, varies by population and geography, and is often seen in people with inflammatory bowel disease such as ulcerative colitis.",
  quickLook: {
    whatItIs:
      'PSC causes bile duct inflammation, scarring, and narrowing. Bile backup injures the liver. Many people have no symptoms at diagnosis and are found through abnormal liver tests or IBD follow-up.',
    whoToSeeFirst:
      'Persistent alkaline phosphatase or GGT elevation, jaundice, itch, recurrent cholangitis, or cholestasis in someone with IBD should be assessed by hepatology or gastroenterology.',
    isGenetic:
      'PSC is not a typical single-gene disorder, but immune factors, gut inflammation, genetic susceptibility, and environment may all contribute. Family testing depends on history.',
    hasTreatment:
      'No universal medicine has proven to reliably stop progression. Care focuses on itch, strictures, infection, IBD and cancer surveillance, and liver transplant assessment for advanced disease.',
    commonDelayReason:
      'Early disease can be silent, and abnormal liver tests may be attributed to fatty liver, drug injury, or gallbladder disease unless MRCP and IBD assessment are considered.',
  },
  patientJourney: {
    whenToSuspect: [
      'Persistent cholestatic liver tests such as ALP or GGT elevation that ultrasound does not explain.',
      'Recurrent itch, fatigue, right upper abdominal discomfort, jaundice, fever, chills, or cholangitis.',
      'Ulcerative colitis, Crohn disease, chronic diarrhea, or rectal bleeding together with abnormal liver tests.',
      'MRCP or ERCP showing multifocal bile duct narrowing and dilation, or otherwise unexplained cirrhosis or portal hypertension.',
    ],
    commonWrongTurns: [
      'Following as fatty liver or gallbladder disease without tracking persistent cholestatic enzyme elevation.',
      'Treating the liver disease without colonoscopy for IBD, or treating bowel disease while missing cholestasis.',
      'Calling fever and abdominal pain gastroenteritis while missing cholangitis or a dominant stricture.',
    ],
    firstDepartments: [
      'Hepatology or gastroenterology',
      'Inflammatory bowel disease clinic',
      'Hepatobiliary endoscopy or surgery for strictures',
      'Liver transplant center for advanced disease',
    ],
    diagnosisChecklist: [
      'Bring serial liver tests, ALP, GGT, bilirubin, IgG4, autoantibodies, and viral hepatitis results.',
      'Bring ultrasound, MRCP, ERCP, elastography, CT or MRI, liver biopsy, and endoscopy reports.',
      'Record itch, jaundice, fever, chills, right upper abdominal pain, weight change, ascites, or gastrointestinal bleeding.',
      'Bring colonoscopy and pathology reports, especially if IBD is suspected or known.',
    ],
    testsToAskAbout: [
      'Whether MRCP supports PSC and whether ERCP is needed only for treatment or sampling.',
      'How IgG4-related cholangitis, stones, bile duct cancer, postoperative strictures, and other secondary causes were excluded.',
      'Whether colonoscopy is needed to check for IBD and how often colon cancer surveillance should be done.',
      'Surveillance for cholangiocarcinoma, gallbladder cancer, cirrhosis, and portal hypertension.',
    ],
    questionsForDoctor: [
      'Is my PSC large-duct, small-duct, or overlapping with autoimmune hepatitis features?',
      'Does my stricture need observation, ERCP dilation or stenting, antibiotics, or sampling to rule out cancer?',
      'How should itch, fatigue, and fat-soluble vitamin deficiency be managed?',
      'When should I be referred to a transplant center, and what IBD and cancer surveillance do I need?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PSC is often silent early and found through elevated ALP or GGT. Symptoms may include fatigue, itchy skin, right upper abdominal discomfort, jaundice, dark urine, pale stools, weight loss, and fat-soluble vitamin deficiency.</p><p>Strictures and infection can cause fever, chills, right upper abdominal pain, and jaundice. Long-term cholestasis can progress to liver fibrosis, cirrhosis, portal hypertension, ascites, variceal bleeding, or liver failure. PSC is also associated with IBD and increased risks of cholangiocarcinoma, gallbladder cancer, and colorectal cancer.</p>',
    diagnosis:
      '<p>Diagnosis often starts with cholestatic liver enzyme elevation. MRCP is the common bile duct imaging test and can show multifocal strictures and dilation. ERCP is usually reserved for treating strictures, obtaining samples, or managing cholangitis rather than being required for everyone.</p><p>Clinicians exclude secondary sclerosing cholangitis, IgG4-related disease, stones, bile duct tumors, ischemic or postoperative bile duct injury, and other causes. Liver biopsy may be needed when large-duct imaging is not typical, when small-duct PSC is suspected, or when overlap with autoimmune hepatitis is considered. People with suspected or confirmed PSC are usually assessed for IBD.</p>',
    treatment:
      '<p>No medication has been proven to universally change PSC progression. Management targets symptoms and complications: itch may be treated with bile acid sequestrants, rifampin, or other options; cholangitis needs antibiotics; dominant strictures may be assessed by experienced teams for ERCP dilation, stenting, or sampling.</p><p>Follow-up monitors cirrhosis, portal hypertension, fat-soluble vitamins, bone density, and cancer risks involving bile ducts, gallbladder, and colon. Decompensated cirrhosis, recurrent cholangitis, or refractory symptoms should prompt liver transplant evaluation.</p>',
    longTermCare:
      '<p>Long-term care involves hepatology, IBD care, endoscopy, nutrition, bone health, and transplant teams. Patients should not replace specialist monitoring with nonspecific liver supplements or herbal medicines, and should discuss alcohol, vaccines, infections, and medicine-related liver injury.</p><p>When IBD is present, colonoscopy surveillance is important even if bowel symptoms are mild. The timing of bile duct imaging, gallbladder assessment, tumor markers, and cirrhosis screening depends on individual risk.</p>',
    fertilityOrFamily:
      '<p>PSC is usually not a single-gene inherited disease. People planning pregnancy need hepatology and obstetric care to review liver function, cholestasis, medicines, and IBD activity. Relatives with abnormal liver tests or IBD symptoms should seek medical evaluation.</p>',
    emergencySigns:
      '<p>Urgent care is needed for fever and chills with right upper abdominal pain or jaundice, confusion, vomiting blood, black stools, rapidly increasing ascites, severe itch with worsening jaundice, persistent abdominal pain, or rapid weight loss.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Primary Sclerosing Cholangitis',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/primary-sclerosing-cholangitis',
    },
    {
      name: 'Mayo Clinic: Primary sclerosing cholangitis diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/primary-sclerosing-cholangitis/diagnosis-treatment/drc-20355802',
    },
  ],
  symptoms:
    '<p>Early disease may be silent; symptoms can include fatigue, itch, right upper abdominal discomfort, jaundice, fever, chills, cholangitis, fat-soluble vitamin deficiency, cirrhosis, and IBD-related findings.</p>',
  diagnosis:
    '<p>Diagnosis combines cholestatic liver tests, MRCP or other bile duct imaging, sometimes liver biopsy or ERCP, and exclusion of IgG4-related disease, stones, cancer, and other secondary bile duct injury.</p>',
  treatment:
    '<p>Care focuses on symptom and complication management, including itch treatment, antibiotics for cholangitis, endoscopic treatment of dominant strictures, IBD and cancer surveillance, and transplant evaluation for advanced disease.</p>',
  prognosis:
    '<p>Course varies widely and depends on cholestasis, strictures, cirrhosis, recurrent cholangitis, IBD, and cancer risk. Long-term hepatology follow-up is essential.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'primary-sclerosing-cholangitis',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 422,
    name: 'primary-sclerosing-cholangitis-journey.png',
    url: '/images/diseases/primary-sclerosing-cholangitis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

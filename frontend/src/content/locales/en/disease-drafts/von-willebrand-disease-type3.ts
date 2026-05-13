import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseVonWillebrandDiseaseType3: DiseaseDraft = {
  ...entity(2084, 'disease-von-willebrand-disease-type3'),
  name: 'Von Willebrand disease type 3',
  nameEn: 'Von Willebrand disease type 3',
  alias:
    'VWD type 3; severe von Willebrand disease; China Second Rare Disease Catalog item 84',
  slug: 'von-willebrand-disease-type3',
  oneSentence:
    'Von Willebrand disease type 3 is the rarest and most severe VWD type, with little or no functional VWF and often low factor VIII, causing recurrent mucosal, soft tissue, joint, and procedure-related bleeding from childhood.',
  plainName:
    'An inherited bleeding disorder that causes recurrent bleeding from childhood and needs coagulation specialist care',
  prevalence:
    "Included in China's second rare disease catalog; VWD overall is common, but type 3 is rare and usually autosomal recessive.",
  quickLook: {
    whatItIs:
      'VWF helps platelets stick and protects factor VIII. In type 3, VWF is extremely low or absent, so nosebleeds, gum bleeding, heavy periods, and hemophilia-like joint or muscle bleeds can occur.',
    whoToSeeFirst:
      'Recurrent childhood nosebleeds, gum bleeding, bruising, prolonged wound bleeding, heavy menstrual bleeding, or abnormal bleeding after dental work, surgery, or childbirth should be assessed by hematology.',
    isGenetic:
      'Type 3 is usually autosomal recessive, and parents may be carriers. Patients and relatives planning pregnancy should ask about genetic counseling and carrier testing.',
    hasTreatment:
      'Treatment aims to prevent and control bleeding, usually with VWF-containing factor concentrates. Tranexamic acid may help mucosal bleeding; desmopressin is usually limited or ineffective in type 3 and needs specialist judgment.',
    commonDelayReason:
      'Bleeding may be dismissed as frequent nosebleeds or heavy periods, or confused with hemophilia A. Testing only factor VIII without VWF antigen and activity can miss the diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent childhood nosebleeds, gum bleeding, bruising, or prolonged bleeding after cuts or dental work.',
      'Heavy menstrual bleeding, postpartum bleeding, joint or muscle bleeding, or anemia.',
      'Family history of consanguinity, siblings with bleeding, VWD, or hemophilia-like illness.',
    ],
    commonWrongTurns: [
      'Treating one organ or one episode without connecting the long-term pattern, family history, and prior results.',
      'Watching common-disease explanations for too long without referral to the right specialty or rare disease clinic.',
      'Not keeping imaging, pathology, genetic, treatment, and follow-up records, leading to repeated workups and delays.',
    ],
    firstDepartments: [
      'Hematology/coagulation clinic',
      'Pediatric hematology',
      'High-risk gynecology/obstetrics',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'Bring bleeding history, surgical/dental/childbirth bleeding records, transfusion and factor use history.',
      'Bring CBC, ferritin, APTT, FVIII, VWF antigen, VWF activity, multimer testing, and genetic testing.',
      'Record menstrual bleeding, anemia, joint or muscle bleeding, and family bleeding history.',
    ],
    testsToAskAbout: [
      'Whether this is type 3 VWD and whether hemophilia A or acquired VWD still needs exclusion.',
      'Whether a home, school, or workplace bleeding plan and VWF concentrate access are needed.',
      'How bleeding will be prevented before surgery, dental work, pregnancy, childbirth, and heavy periods.',
    ],
    questionsForDoctor: [
      'What are my baseline VWF and FVIII levels, and do I need prophylaxis or on-demand treatment?',
      'Can I use tranexamic acid, menstrual management, or iron, and which medicines should I avoid?',
      'How should relatives and future children be assessed for genetic risk?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Type 3 VWD can cause recurrent nosebleeds, gum bleeding, bruising, prolonged bleeding after wounds, dental work or surgery, heavy menstrual bleeding, and iron deficiency anemia from childhood. Severe cases can have muscle hematomas, joint bleeds, gastrointestinal bleeding, or major postpartum bleeding.</p><p>Because VWF is extremely low, FVIII can also be low, so symptoms may resemble hemophilia A, but all sexes can be affected.</p>',
    diagnosis:
      '<p>Diagnosis needs complete coagulation testing: CBC and iron status, APTT, FVIII, VWF antigen, VWF activity, sometimes multimer analysis, and VWF genetic testing. Type 3 usually has extremely low or undetectable VWF and low FVIII.</p><p>Clinicians distinguish hemophilia A, platelet function disorders, other VWD types, and acquired VWD. Once confirmed, patients need a personal bleeding emergency and peri-procedure plan.</p>',
    treatment:
      '<p>Main treatment is VWF-containing factor concentrate for acute bleeding and before surgery, dental work, or childbirth; prophylaxis may be considered for recurrent severe bleeding. Tranexamic acid can support mucosal bleeding and heavy periods.</p><p>Desmopressin is usually not suitable or insufficient for type 3 and should be judged by a coagulation specialist. Avoid unnecessary aspirin and NSAIDs that increase bleeding risk.</p>',
    longTermCare:
      '<p>Long-term care tracks bleeding frequency, joint health, anemia and iron deficiency, menstrual management, factor use, inhibitor or allergic reaction risk, and surgery, dental, sport, and travel planning.</p><p>Patients should carry diagnosis information and tell emergency, dental, obstetric, and anesthesia teams about type 3 VWD.</p>',
    fertilityOrFamily:
      '<p>Type 3 VWD is usually autosomal recessive. Patients, partners, and relatives can consider carrier testing after genetic counseling. Pregnancy and childbirth need coordinated hematology and obstetric planning for factor replacement and postpartum bleeding prevention.</p>',
    emergencySigns:
      '<p>Emergency care is needed for head injury, persistent nosebleed, vomiting blood or black stools, blood in urine, rapidly swelling painful joint or muscle, very heavy periods with dizziness, post-surgical bleeding, or pregnancy/postpartum bleeding.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'CDC: About von Willebrand disease',
      type: 'official',
      url: 'https://www.cdc.gov/von-willebrand/about/index.html',
    },
  ],
  symptoms:
    '<p>Features include recurrent nosebleeds, gum bleeding, bruising, prolonged wound or surgical bleeding, heavy periods, anemia, muscle hematomas, joint bleeding, and gastrointestinal bleeding.</p>',
  diagnosis:
    '<p>Diagnosis combines bleeding and family history with APTT, FVIII, VWF antigen and activity, multimer testing, and VWF genetic testing while distinguishing hemophilia A.</p>',
  treatment:
    '<p>Treatment mainly uses VWF-containing factor concentrates to prevent and control bleeding, with tranexamic acid for selected mucosal bleeding and planned coverage for procedures and childbirth.</p>',
  prognosis:
    '<p>Specialist care reduces severe bleeding and joint damage; unplanned surgery, childbirth, or trauma can carry high bleeding risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 438,
    name: 'von-willebrand-disease-type3-journey.png',
    url: '/images/diseases/von-willebrand-disease-type3-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

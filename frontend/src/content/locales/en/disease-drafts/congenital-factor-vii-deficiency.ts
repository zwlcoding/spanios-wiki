import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalFactorViiDeficiency: DiseaseDraft = {
  ...entity(2017, 'disease-congenital-factor-vii-deficiency'),
  name: 'Congenital factor VII deficiency',
  nameEn: 'Congenital factor VII deficiency',
  alias:
    'F7 deficiency, hypoproconvertinemia, Alexander disease, China Second Rare Disease Catalog item 17',
  slug: 'congenital-factor-vii-deficiency',
  oneSentence:
    'Congenital factor VII deficiency is a rare inherited bleeding disorder caused by F7 gene variants, ranging from no symptoms to nosebleeds, heavy menstrual bleeding, surgical bleeding, or rarely life-threatening bleeding.',
  plainName:
    'An inherited clotting factor condition that can make bleeding harder to stop',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 300,000 to 500,000 people and describes it as one of the more common rare clotting factor deficiencies.",
  quickLook: {
    whatItIs:
      'Factor VII is part of the clotting cascade. In congenital deficiency, the extrinsic pathway is affected, often causing prolonged PT/INR with a usually normal APTT.',
    whoToSeeFirst:
      'Recurrent nosebleeds, gum bleeding, easy bruising, prolonged bleeding after dental work or surgery, or heavy menstrual bleeding should be assessed by hematology or a coagulation clinic. Severe bleeding needs emergency care.',
    isGenetic:
      'It is usually autosomal recessive and related to the F7 gene. Parents may be healthy carriers, so genetic counseling and family assessment are useful after diagnosis.',
    hasTreatment:
      'Mild disease may need treatment only for bleeding, surgery, trauma, childbirth, or dental work. Severe or frequent bleeding may require recombinant activated factor VII, prothrombin complex concentrate, plasma, antifibrinolytics, or prophylaxis.',
    commonDelayReason:
      'Some people have little everyday bleeding and are found only during preoperative testing. Prolonged PT may first be attributed to liver disease, vitamin K deficiency, or anticoagulants.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated nosebleeds, gum bleeding, easy bruising, or bleeding that lasts longer than expected after minor injury.',
      'Significant bleeding after dental extraction, surgery, circumcision, childbirth, or postpartum.',
      'Heavy or prolonged menstrual bleeding with anemia or repeated iron treatment.',
      'Laboratory tests show prolonged PT/INR with normal or near-normal APTT and usually normal platelets.',
      'Umbilical stump bleeding, intracranial bleeding, gastrointestinal bleeding, or joint or muscle bleeding in infancy requires urgent attention.',
    ],
    commonWrongTurns: [
      'Treating nose, gum, or menstrual bleeding without coagulation screening.',
      'Giving vitamin K for prolonged PT without checking factor VII activity.',
      'Proceeding with surgery, dental work, or childbirth without a hemostasis plan.',
      'Not warning patients about aspirin, NSAIDs, intramuscular injections, or other avoidable bleeding risks.',
    ],
    firstDepartments: [
      'Hematology',
      'Coagulation or rare bleeding disorder clinic',
      'Pediatric hematology',
      'High-risk obstetrics',
    ],
    diagnosisChecklist: [
      'Record all bleeding events, including site, duration, trigger, transfusion, and hemostatic treatment.',
      'Bring PT/INR, APTT, fibrinogen, platelets, liver tests, vitamin K treatment records, and factor activity results.',
      'Summarize dental work, surgeries, childbirth, menstrual bleeding, anemia treatment, and family bleeding history.',
      'List anticoagulants, antiplatelet medicines, pain medicines, and supplements.',
    ],
    testsToAskAbout: [
      'Repeat coagulation screening: PT/INR, APTT, fibrinogen, and platelet count.',
      'Factor VII activity, and sometimes other factor assays to rule out common pathway problems.',
      'F7 genetic testing and family confirmation for genetic counseling.',
      'Imaging or site-specific assessment for severe bleeding such as head, joint, muscle, urinary, or gastrointestinal bleeding.',
    ],
    questionsForDoctor: [
      'What is my factor VII activity, and how well does it predict my actual bleeding risk?',
      'Do I need regular treatment or only treatment for bleeding, surgery, dental work, or childbirth?',
      'Which medicines and procedures should I avoid, and how should injections or vaccines be handled?',
      'Should relatives be tested, and how should pregnancy or future children be planned?',
      'What should I do for nosebleeds, head injury, black stools, blood in urine, or joint swelling?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Congenital factor VII deficiency varies widely. Some people never have notable bleeding. Common symptoms include nosebleeds, gum bleeding, easy bruising, prolonged bleeding after injury or surgery, blood in urine, joint or muscle bleeding, and heavy menstrual or postpartum bleeding.</p><p>Severe cases may present in infancy with umbilical stump bleeding, intracranial bleeding, or gastrointestinal bleeding. Bleeding risk does not always match factor VII activity perfectly, so personal bleeding history matters.</p>',
    diagnosis:
      '<p>The typical laboratory clue is prolonged PT/INR with a usually normal APTT. Diagnosis requires factor VII activity testing and exclusion of vitamin K deficiency, liver disease, warfarin or other anticoagulants, acquired factor VII deficiency, and other clotting factor problems.</p><p>F7 genetic testing can support the congenital diagnosis and family counseling, but treatment decisions still combine bleeding history, factor activity, age, surgery or pregnancy plans, and medication access.</p>',
    treatment:
      '<p>Treatment is tailored to bleeding risk and the situation. Mild disease may require treatment only for surgery, dental work, trauma, childbirth, or active bleeding. Options include recombinant activated factor VII, prothrombin complex concentrate, plasma, and antifibrinolytic medicines, depending on bleeding site, severity, and thrombosis risk.</p><p>People with severe or frequent bleeding may need prophylaxis. Patients should avoid self-medicating with drugs that increase bleeding risk and should contact hematology before invasive procedures.</p>',
    longTermCare:
      '<p>Long-term care includes a personal bleeding record, emergency card or diagnosis letter, dental and surgery plans, menstrual and pregnancy planning, anemia monitoring, and periodic review of factor activity and treatment response.</p><p>Children should be followed by a coagulation center, and schools or caregivers should know which injuries or symptoms require urgent care.</p>',
    fertilityOrFamily:
      '<p>The condition is usually autosomal recessive. Parents are often carriers, and sibling or child risk depends on partner and family variant status. Genetic counseling and selected relative testing are recommended after diagnosis.</p><p>Women with the condition need a delivery and postpartum bleeding plan jointly managed by hematology and obstetrics.</p>',
    emergencySigns:
      '<p>Seek emergency care for head injury followed by headache, vomiting, confusion, or seizures; black stools or vomiting blood; visible blood in urine; rapidly swollen painful joints or muscles; nosebleeds not controlled by pressure; postpartum bleeding; or any uncontrolled bleeding. State clearly that factor VII deficiency is present.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Factor VII deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/factor-vii-deficiency/',
    },
    {
      name: 'Great Ormond Street Hospital: Factor VII deficiency',
      type: 'review',
      url: 'https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/factor-vii-deficiency/',
    },
  ],
  symptoms:
    '<p>Symptoms range from none to nosebleeds, gum bleeding, easy bruising, surgical or injury-related bleeding, blood in urine, joint or muscle bleeding, heavy periods, and rare intracranial or gastrointestinal bleeding.</p>',
  diagnosis:
    '<p>Diagnosis uses bleeding history, prolonged PT/INR with usually normal APTT, low factor VII activity, F7 genetic testing when useful, and exclusion of acquired causes.</p>',
  treatment:
    '<p>Treatment may include recombinant activated factor VII, prothrombin complex concentrate, plasma, antifibrinolytics, prophylaxis, and procedure-specific plans for surgery, dental work, and childbirth.</p>',
  prognosis:
    '<p>Many mildly affected people do well with situation-based bleeding plans, while severe bleeding phenotypes require long-term hematology follow-up and an emergency plan.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 371,
    name: 'congenital-factor-vii-deficiency-journey.png',
    url: '/images/diseases/congenital-factor-vii-deficiency-journey.png',
  },
  tagSlugs: [
    'second-rare-disease-catalog',
    'coagulation-care',
    'genetic-counseling',
  ],
};

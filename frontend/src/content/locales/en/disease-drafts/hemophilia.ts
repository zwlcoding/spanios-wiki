import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHemophilia: DiseaseDraft = {
  ...entity(38, 'disease-hemophilia'),
  name: 'Hemophilia',
  nameEn: 'Hemophilia',
  alias:
    'Hemophilia A, Hemophilia B, Factor VIII Deficiency, Factor IX Deficiency',
  slug: 'hemophilia',
  oneSentence:
    'Hemophilia is a group of inherited bleeding disorders caused by missing or low clotting factors. Type A and Type B are the most common forms, and people may have prolonged bleeding after joint, muscle, surgery, or injury.',
  plainName:
    'An inherited condition where blood does not clot properly, leading to repeated bleeding',
  prevalence:
    'Hemophilia A is more common than Hemophilia B. Severity depends on clotting factor activity levels. Female carriers may also have bleeding symptoms.',
  searchIntents: [
    'hemophilia which doctor',
    'hemophilia A vs B difference',
    'repeated joint bleeding hemophilia',
    'hemophilia inhibitor testing',
    'female hemophilia carrier bleeding',
  ],
  quickLook: {
    whatItIs:
      'Hemophilia A is linked to missing or low Factor VIII, while Hemophilia B is linked to missing or low Factor IX. When clotting factors are too low, bleeding lasts longer. Severe cases may have spontaneous joint or muscle bleeding.',
    whoToSeeFirst:
      'If you or your child has repeated joint swelling and pain, muscle bruises, bleeding that does not stop after dental work or surgery, or if a young child has unexplained bruising with a positive family history, see a hematology or pediatric hematology department, or a hemophilia treatment center.',
    isGenetic:
      'Usually inherited in an X-linked pattern, linked to the F8 or F9 gene. Males are more commonly affected. Female carriers may have symptoms due to lower factor levels or other reasons.',
    hasTreatment:
      'Options include acute bleeding treatment, preventive therapy, non-factor therapies, rehabilitation, and gene therapy assessment for some adults. Specific treatment is planned by hematology based on type, severity, inhibitors, and availability.',
    commonDelayReason:
      'Mild cases may only be discovered after dental work, surgery, or injury when bleeding does not stop. Heavy menstrual bleeding, postpartum bleeding, or bleeding after surgery in female carriers may also be underestimated.',
  },
  patientJourney: {
    whenToSuspect: [
      'Boys with repeated large bruises, joint swelling and pain, muscle bruises, or bleeding that lasts a long time after minor injuries.',
      'Bleeding that recurs or is delayed after dental work, circumcision, surgery, childbirth, or injury.',
      'Abnormally large swelling after head injury in infants or toddlers, or unexplained brain bleeding.',
      'Women with a family history of hemophilia who also have heavy periods, bleeding after surgery, or postpartum bleeding.',
      'Lab tests showing prolonged aPTT with relatively normal platelet count and PT.',
    ],
    commonWrongTurns: [
      'Explaining bruises only by injury or active play in children, without asking about family history and clotting tests.',
      'Joint bleeding misdiagnosed as sprain, arthritis, or infection, delaying bleeding control and joint protection.',
      'Patients with mild hemophilia not disclosing their bleeding history before surgery, leading to discovery only after complications.',
      "Assuming female carriers 'cannot be affected' without testing clotting factor levels.",
      'Using medications that may increase bleeding risk on your own, or undergoing invasive procedures without a specialist plan.',
    ],
    firstDepartments: [
      'Hematology / Pediatric Hematology',
      'Hemophilia Treatment Center or Coagulation Specialty Clinic',
      'Emergency Department (for head injury, deep bleeding, or severe bleeding)',
      'Rehabilitation Medicine / Orthopedics (for joint protection and hemophilic arthropathy)',
      'Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Keep records of bleeding events, family history, bleeding after surgery or dental work, and past medications.',
      'Test PT, aPTT, platelet count, fibrinogen, and Factor VIII/IX activity.',
      'Ask if testing for von Willebrand disease and other conditions is needed.',
      'After diagnosis, assess for inhibitors, joint status, and vaccination and transfusion/infection history.',
      'If planning a family, arrange F8/F9 genetic testing and genetic counseling.',
    ],
    testsToAskAbout: [
      'Factor VIII and IX activity levels.',
      'aPTT, PT, platelet count, and von Willebrand factor testing.',
      'F8 or F9 genetic testing.',
      'Inhibitor testing.',
      'Joint ultrasound or MRI, hepatitis/infection screening, and treatment safety monitoring.',
    ],
    questionsForDoctor: [
      'Do I have Type A or Type B? Is it mild, moderate, or severe?',
      'Do I need preventive treatment or on-demand treatment? How should I recognize joint or muscle bleeding at home?',
      'Do I have inhibitors? How will this affect my treatment options?',
      'What written plan do I need for dental work, surgery, exercise, travel, and emergencies?',
      'What testing and counseling do female family members and future family planning need?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Hemophilia may show as prolonged bleeding after injury, dental work, or surgery; repeated nosebleeds; mouth bleeding; deep muscle bruises; joint bleeding; blood in urine; or digestive tract bleeding. Severe cases may have spontaneous joint or muscle bleeding. Repeated joint bleeding can cause pain, limited movement, and hemophilic arthropathy. Mild cases may not be diagnosed until adulthood after surgery or dental work.</p>',
    diagnosis:
      '<p>Diagnosis relies on testing Factor VIII or IX activity, along with aPTT, PT, platelet count, von Willebrand factor testing, and family history. F8 or F9 genetic testing can confirm the type, screen family members, and help with family planning. After diagnosis, testing for inhibitors is also needed, as they affect bleeding treatment plans.</p>',
    treatment:
      '<p>Management includes acute bleeding treatment, preventive therapy, non-factor therapies, surgical planning, rehabilitation, and joint protection. Some adults may be eligible for gene therapy assessment, but it is not suitable for everyone. Specific treatment choices are planned by hematology based on type, factor levels, bleeding frequency, inhibitors, age, and availability.</p>',
    longTermCare:
      '<p>Long-term care focuses on reducing joint and muscle bleeding, protecting joint function, managing pain and exercise, monitoring for inhibitors, assessing treatment safety, and carrying an emergency information card. Before surgery, dental work, invasive tests, or starting new medications, contact hematology in advance to plan bleeding control.</p>',
    fertilityOrFamily:
      '<p>Hemophilia A and B are usually inherited in an X-linked pattern. Female carriers may have low factor levels and bleeding risk. Once the family F8/F9 variant is identified, relatives can learn through genetic counseling about carrier testing, prenatal diagnosis, preimplantation genetic testing, and delivery bleeding plans.</p>',
    emergencySigns:
      '<p>Head injury, headache with vomiting, or change in consciousness; bleeding in the neck or throat with breathing difficulty; abdominal or back pain with suspected internal bleeding; rapidly worsening joint or muscle swelling and pain; uncontrolled bleeding after injury or surgery—seek emergency care immediately and state the hemophilia type and treatment plan.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Hemophilia A',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
    },
    {
      name: 'GeneReviews: Hemophilia B',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1495/',
    },
    {
      name: 'MedlinePlus Genetics: Hemophilia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hemophilia/',
    },
  ],
  symptoms:
    '<p>May include joint or muscle bleeding; prolonged bleeding after injury, dental work, or surgery; repeated bruises; nosebleeds; blood in urine; or deep bleeding.</p>',
  diagnosis:
    '<p>Assessment includes Factor VIII/IX activity testing, aPTT/PT, von Willebrand factor testing, inhibitor testing, and F8/F9 genetic testing.</p>',
  treatment:
    '<p>Management includes acute bleeding treatment, preventive therapy, non-factor therapies, surgical planning, rehabilitation, and joint protection.</p>',
  prognosis:
    '<p>Consistent preventive care and comprehensive management can significantly reduce joint damage and severe bleeding risk. Outlook depends on severity, inhibitors, and treatment availability.</p>',
  sourceName: 'GeneReviews: Hemophilia A',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 337,
    name: 'hemophilia-journey.png',
    url: '/images/diseases/hemophilia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

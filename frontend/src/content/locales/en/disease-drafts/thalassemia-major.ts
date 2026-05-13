import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseThalassemiaMajor: DiseaseDraft = {
  ...entity(2078, 'disease-thalassemia-major'),
  name: 'Thalassemia major',
  nameEn: 'Thalassemia major',
  alias:
    "Transfusion-dependent thalassemia; Cooley's anemia; China Second Rare Disease Catalog item 78",
  slug: 'thalassemia-major',
  oneSentence:
    'Thalassemia major is a severe inherited globin production disorder that causes serious anemia in infancy or early childhood and often requires regular transfusions, iron chelation, and lifelong specialist follow-up.',
  plainName:
    'An inherited blood disorder causing severe early anemia that often needs long-term transfusions and iron removal',
  prevalence:
    "Included in China's second rare disease catalog; thalassemia carrier frequency varies greatly by ancestry and region, being more common around the Mediterranean, Middle East, South Asia, Southeast Asia, and parts of southern China, while severe transfusion-dependent disease remains a rare specialist-managed condition.",
  quickLook: {
    whatItIs:
      'Globin gene variants reduce hemoglobin production, so red blood cells cannot carry oxygen normally. Severe disease often appears from several months to age 2 with pallor, fatigue, poor growth, jaundice, enlarged liver or spleen, and bone changes.',
    whoToSeeFirst:
      'Severe microcytic anemia in a baby or child, jaundice, enlarged spleen, poor growth, or prenatal/family thalassemia risk should be assessed by pediatric hematology, hematology, and genetics.',
    isGenetic:
      'It is inherited, usually autosomal recessive. Parents may be healthy carriers, so patients, parents, and relatives planning pregnancy should ask about genetic testing and reproductive risk.',
    hasTreatment:
      'Core care includes regular transfusion, iron chelation, and monitoring of the heart, liver, endocrine system, and infections. Some patients can be evaluated for stem cell transplant or gene therapy.',
    commonDelayReason:
      'Carriers and milder disease can look like iron deficiency. Repeated iron treatment without hemoglobin analysis and genetic testing can delay correct diagnosis and family counseling.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infant or child with pallor, poor feeding, slow weight gain, fatigue, shortness of breath, and microcytic hypochromic anemia.',
      'Jaundice, dark urine, enlarged liver or spleen, bone changes, delayed growth, or delayed puberty.',
      'Parents from high-prevalence regions, abnormal prenatal screening, or family history of thalassemia carrier status, severe childhood anemia, or regular transfusions.',
    ],
    commonWrongTurns: [
      'Repeatedly treating as iron deficiency without ferritin, hemoglobin electrophoresis/HPLC, and globin gene testing.',
      'Giving transfusions without a structured chelation plan, allowing heart, liver, and endocrine iron overload.',
      'Not testing parents and siblings, leaving future pregnancy and relative reproductive risk unrecognized.',
    ],
    firstDepartments: [
      'Pediatric hematology',
      'Hematology thalassemia clinic',
      'Medical genetics/genetic counseling',
      'Prenatal diagnosis center for pregnancy planning',
    ],
    diagnosisChecklist: [
      'Bring birth history, feeding and growth records, anemia timeline, transfusion history, medicines, and family ancestry.',
      'Bring CBC, reticulocytes, bilirubin, ferritin, hemoglobin electrophoresis/HPLC, and genetic testing.',
      'Bring cardiac and liver MRI iron measurements, ultrasound, endocrine tests, bone density, and infection screening when available.',
    ],
    testsToAskAbout: [
      'Whether HBB, HBA1/HBA2, or other globin gene testing is needed to confirm type and family risk.',
      'Target hemoglobin, transfusion interval, red cell antibody screening, and when to start chelation.',
      'How iron overload will be monitored with ferritin, liver iron, cardiac T2* MRI, ECG/echo, liver tests, and endocrine labs.',
    ],
    questionsForDoctor: [
      'Is this transfusion-dependent disease, and what are the transfusion and chelation targets?',
      'Do I have iron overload now, and how will chelation choice and side effects be monitored?',
      'Am I a candidate for stem cell transplant, gene therapy, or trials, and which relatives need testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Thalassemia major often causes severe anemia in infancy or early childhood, with pallor, fatigue, poor feeding, poor growth, jaundice, dark urine, enlarged liver or spleen, and recurrent infections. Long-term anemia and marrow expansion can cause bone and facial changes, and puberty may be delayed.</p><p>Regular transfusions can cause iron overload. Iron can injure the heart, liver, and endocrine organs, causing arrhythmia, heart failure, liver fibrosis, diabetes, thyroid disease, or delayed sexual development.</p>',
    diagnosis:
      '<p>Diagnosis combines microcytic hypochromic anemia on CBC, reticulocytes, hemolysis markers, hemoglobin electrophoresis or HPLC, iron studies, and family assessment. Genetic testing confirms alpha or beta globin variants and helps distinguish carrier, intermedia, and major disease.</p><p>Clinicians distinguish thalassemia from iron deficiency anemia, anemia of chronic disease, other hemolytic anemia, and marrow disorders. Once confirmed, baseline transfusion planning, antibody screening, iron burden, and organ function are needed.</p>',
    treatment:
      '<p>Transfusion-dependent patients usually need regular red cell transfusions to maintain hemoglobin, support growth, and suppress excessive marrow activity. Long-term transfusion must be paired with iron chelation, such as deferoxamine, deferasirox, or deferiprone, chosen by specialists based on age, iron burden, and adverse effects.</p><p>Some patients may be evaluated for hematopoietic stem cell transplant, and in selected settings gene therapy or clinical trials may be relevant. Care also includes vaccination, infection prevention, folate when appropriate, nutrition, growth and puberty care, heart, liver, endocrine, and bone monitoring.</p>',
    longTermCare:
      '<p>Follow-up tracks transfusion reactions, red cell antibodies, ferritin, liver and cardiac MRI iron, heart, liver, endocrine status, bone density, infection screening, and quality of life. Regular transfusion and consistent chelation are central to organ protection.</p><p>Patients should keep complete transfusion and chelation records, avoid iron supplements unless prescribed, and contact hematology for fever, transfusion reactions, or chelation side effects.</p>',
    fertilityOrFamily:
      '<p>Thalassemia is inherited. Parents, siblings, and reproductive partners should be offered carrier testing and genetic counseling; pregnancy planning can include prenatal diagnosis or preimplantation genetic testing where available.</p>',
    emergencySigns:
      '<p>Urgent care is needed for marked shortness of breath, chest pain or palpitations, fainting, persistent high fever, severe pallor or weakness, very dark urine, fever, rash, or back pain after transfusion, abdominal pain near the spleen, or signs of infection.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Beta thalassemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/beta-thalassemia/',
    },
    {
      name: 'MedlinePlus: Thalassemia',
      type: 'official',
      url: 'https://medlineplus.gov/thalassemia.html',
    },
  ],
  symptoms:
    '<p>Infants and children may have severe anemia, pallor, fatigue, poor feeding, slow growth, jaundice, enlarged liver or spleen, bone changes, delayed puberty, and iron overload risk from transfusions.</p>',
  diagnosis:
    '<p>Diagnosis uses CBC, hemoglobin electrophoresis/HPLC, iron studies, hemolysis markers, family assessment, and globin gene testing while distinguishing iron deficiency and other anemias.</p>',
  treatment:
    '<p>Transfusion-dependent disease needs regular transfusions, chelation, and heart, liver, endocrine, and infection monitoring; selected patients may be evaluated for stem cell transplant, gene therapy, or trials.</p>',
  prognosis:
    '<p>Consistent transfusion and chelation greatly improve survival and quality of life; heart, liver, endocrine iron overload and infection remain key long-term risks.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 432,
    name: 'thalassemia-major-journey.png',
    url: '/images/diseases/thalassemia-major-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

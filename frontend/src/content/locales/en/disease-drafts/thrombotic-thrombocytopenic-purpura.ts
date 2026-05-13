import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseThromboticThrombocytopenicPurpura: DiseaseDraft = {
  ...entity(2079, 'disease-thrombotic-thrombocytopenic-purpura'),
  name: 'Thrombotic thrombocytopenic purpura',
  nameEn: 'Thrombotic thrombocytopenic purpura',
  alias: 'TTP; China Second Rare Disease Catalog item 79',
  slug: 'thrombotic-thrombocytopenic-purpura',
  oneSentence:
    'Thrombotic thrombocytopenic purpura is a rare, life-threatening thrombotic microangiopathy in which severe ADAMTS13 deficiency causes tiny clots, low platelets, hemolytic anemia, and organ injury.',
  plainName:
    'A blood emergency where platelets form dangerous tiny clots in small vessels',
  prevalence:
    "Included in China's second rare disease catalog; TTP is rare and may be acquired immune-mediated or congenital from ADAMTS13 deficiency, with sudden episodes that can be life-threatening.",
  quickLook: {
    whatItIs:
      'ADAMTS13 helps control platelet-related proteins. When it is severely deficient, tiny clots form in small vessels, injuring organs such as the brain, heart, and kidneys while consuming platelets.',
    whoToSeeFirst:
      'Sudden very low platelets, anemia with hemolysis, purpura, headache or confusion, kidney injury, or chest pain should be treated as an emergency by emergency medicine and hematology.',
    isGenetic:
      'Most adult cases are acquired autoimmune TTP and are not inherited. A minority are congenital TTP caused by biallelic ADAMTS13 variants and need genetic counseling and family assessment.',
    hasTreatment:
      'Treatment usually starts before every test result returns when suspicion is high. Acquired TTP often needs urgent plasma exchange, corticosteroids, rituximab or caplacizumab; congenital TTP needs ADAMTS13 replacement support.',
    commonDelayReason:
      'Early illness can be mistaken for immune thrombocytopenia, infection, anemia, kidney disease, or neurologic disease. Missing the pattern of low platelets plus hemolysis plus organ symptoms can delay lifesaving treatment.',
  },
  patientJourney: {
    whenToSuspect: [
      'Sudden platelet drop together with anemia, jaundice, dark urine, high LDH, or schistocytes on blood smear.',
      'Petechiae, purpura, nose or gum bleeding, headache, confusion, speech difficulty, seizures, chest pain, shortness of breath, or kidney injury.',
      'Prior TTP recurrence, or similar symptoms after pregnancy, infection, surgery, or autoimmune disease flare.',
    ],
    commonWrongTurns: [
      'Treating only as immune thrombocytopenia or giving platelets without urgent hematology review for TTP.',
      'Waiting for ADAMTS13 results before starting plasma exchange in a high-suspicion emergency.',
      'Not monitoring ADAMTS13 activity and relapse symptoms after remission.',
    ],
    firstDepartments: [
      'Emergency department',
      'Hematology',
      'Intensive care',
      'Nephrology, neurology, or cardiology as organs require',
    ],
    diagnosisChecklist: [
      'Bring recent CBC, platelet trend, reticulocytes, bilirubin, LDH, creatinine, urine tests, and coagulation studies.',
      'Bring blood smear, Coombs test, ADAMTS13 activity/inhibitor, infection, and autoimmune workup when available.',
      'Record timing of neurologic, kidney, and heart symptoms plus pregnancy, infection, medicines, surgery, and prior relapse history.',
    ],
    testsToAskAbout: [
      'Whether TTP is highly suspected now and plasma exchange should start before all results are back.',
      'Whether ADAMTS13 activity and inhibitor or antibody testing has been sent and how it will be repeated after remission.',
      'Whether caplacizumab, rituximab, steroids, or congenital TTP ADAMTS13 replacement/plasma infusion is needed.',
    ],
    questionsForDoctor: [
      'Is my TTP acquired or congenital, and what does that mean for relapse prevention and family testing?',
      'When can plasma exchange stop, and what platelet, LDH, and ADAMTS13 targets are used?',
      'After discharge, which symptoms mean I should return immediately and how often will ADAMTS13 and CBC be checked?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>TTP often starts suddenly with thrombocytopenia causing petechiae, purpura, nose or gum bleeding, and microangiopathic hemolytic anemia causing fatigue, pallor, jaundice, dark urine, and high LDH. Microclots can injure the brain, kidneys, heart, and gut.</p><p>Patients may have headache, confusion, speech trouble, seizures, chest pain, shortness of breath, abdominal pain, nausea, kidney injury, or fever. The classic five findings do not need to all be present before treatment.</p>',
    diagnosis:
      '<p>Diagnosis is based on low platelets, microangiopathic hemolytic anemia, schistocytes, elevated LDH and indirect bilirubin, and organ involvement. Very low ADAMTS13 activity supports the diagnosis, and inhibitor or antibody testing helps define acquired TTP.</p><p>Clinicians distinguish TTP from hemolytic uremic syndrome, disseminated intravascular coagulation, HELLP syndrome, malignant hypertension, drug-related thrombotic microangiopathy, systemic autoimmune disease, and severe infection. When suspicion is high, treatment usually begins before final results.</p>',
    treatment:
      '<p>Acquired TTP is a hematologic emergency. Core treatment is urgent therapeutic plasma exchange plus corticosteroids; many patients also receive rituximab or caplacizumab to reduce microclotting and relapse risk.</p><p>Congenital TTP requires replacement of ADAMTS13 function, through plasma infusion or recombinant ADAMTS13 when available. Platelet transfusion is generally reserved for life-threatening bleeding or essential procedures under specialist direction.</p>',
    longTermCare:
      '<p>After remission, follow-up tracks CBC, LDH, kidney function, neurologic and cardiac effects, and ADAMTS13 activity. Acquired TTP can relapse, and falling ADAMTS13 may prompt preventive treatment.</p><p>Patients should keep TTP records, alert hematology before pregnancy, surgery, infection, or new medicines, and know early relapse symptoms.</p>',
    fertilityOrFamily:
      '<p>Acquired TTP is usually immune-mediated, so relatives are not screened as for inherited disease. Congenital TTP is inherited and may require ADAMTS13 gene testing, carrier assessment, and pregnancy planning.</p>',
    emergencySigns:
      '<p>Emergency care is needed for sudden low platelets with purpura or bleeding, headache or confusion, seizures, speech trouble, chest pain, shortness of breath, jaundice or dark urine, low urine output, or similar symptoms during pregnancy.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NHLBI: Thrombotic thrombocytopenic purpura',
      type: 'official',
      url: 'https://www.nhlbi.nih.gov/health/thrombotic-thrombocytopenic-purpura',
    },
  ],
  symptoms:
    '<p>Features include low platelets, petechiae or purpura, bleeding, microangiopathic hemolytic anemia, jaundice, dark urine, headache, confusion, seizures, chest pain, kidney injury, and fever.</p>',
  diagnosis:
    '<p>Diagnosis combines thrombocytopenia, schistocytes and hemolysis markers, organ involvement, and ADAMTS13 activity/inhibitor testing; high suspicion should trigger treatment before all results return.</p>',
  treatment:
    '<p>Acquired TTP needs urgent plasma exchange, corticosteroids, and often caplacizumab or rituximab; congenital TTP needs ADAMTS13 replacement support.</p>',
  prognosis:
    '<p>Prompt treatment greatly lowers mortality, but relapse and neurologic, cardiac, kidney, or pregnancy-related risks require long-term hematology follow-up.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 433,
    name: 'thrombotic-thrombocytopenic-purpura-journey.png',
    url: '/images/diseases/thrombotic-thrombocytopenic-purpura-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

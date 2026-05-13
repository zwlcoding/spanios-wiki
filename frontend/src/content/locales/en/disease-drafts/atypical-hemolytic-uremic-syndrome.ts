import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAtypicalHemolyticUremicSyndrome: DiseaseDraft = {
  ...entity(10, 'disease-atypical-hemolytic-uremic-syndrome'),
  name: 'Atypical Hemolytic Uremic Syndrome',
  nameEn: 'Atypical Hemolytic Uremic Syndrome',
  alias: 'aHUS, Atypical Hemolytic Uremic Syndrome, Complement-mediated HUS',
  slug: 'atypical-hemolytic-uremic-syndrome',
  oneSentence:
    'Atypical Hemolytic Uremic Syndrome (aHUS) is a group of rare diseases characterized by microvascular thrombosis, hemolytic anemia, low platelets, and kidney injury, often related to abnormal complement regulation.',
  plainName: 'A blood and kidney emergency related to complement abnormalities',
  prevalence:
    'This is a rare disease. MedlinePlus estimates the annual incidence in the United States is about 1 in 500,000 people.',
  searchIntents: [
    'aHUS which doctor',
    'low platelets hemolysis kidney injury',
    'atypical HUS complement testing',
    'aHUS vs typical HUS',
    'aHUS recurrence genetic risk',
  ],
  quickLook: {
    whatItIs:
      'aHUS causes abnormal blood clots to form in small blood vessels, red blood cells are destroyed, platelet counts drop, and acute kidney injury occurs. It is different from the more common infection-related typical HUS, and requires specialist evaluation to distinguish the cause.',
    whoToSeeFirst:
      'During the acute phase, priority goes to the emergency department, pediatrics, nephrology, or hematology. Children are usually first seen by pediatrics or pediatric nephrology; adults may be evaluated jointly by nephrology and hematology.',
    isGenetic:
      'Some patients have genetic susceptibility related to complement genes. It may also be triggered by infection, pregnancy, medications, transplantation, or other conditions. Whether it is hereditary and the family risk need to be determined through genetic testing.',
    hasTreatment:
      'Prompt recognition and management by nephrology/hematology is needed. Treatment may include supportive care, plasma therapy, complement-related therapy, and dialysis, depending on the cause, severity, and local availability.',
    commonDelayReason:
      'Early symptoms such as anemia, fatigue, decreased urine output, low platelets, or abnormal kidney function may be addressed separately, without recognizing hemolysis, low platelets, and kidney injury as a connected pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'Sudden decrease in urine output, blood in urine, or rapidly worsening kidney function.',
      'Anemia, yellowing of skin/eyes, fatigue, combined with dropping platelet counts.',
      'Lab findings showing elevated lactate dehydrogenase, schistocytes, or other evidence of hemolysis.',
      'High blood pressure, headache, seizures, or changes in consciousness indicating kidney or nervous system involvement.',
      'Blood and kidney abnormalities appearing after infection, pregnancy, postpartum, transplantation, or certain medications.',
    ],
    commonWrongTurns: [
      'Managing with standard approaches for ordinary kidney inflammation or infection without simultaneously evaluating for hemolysis and platelet issues.',
      'Considering low platelet count alone as a blood disorder, overlooking kidney injury and possible complement-related causes.',
      'Failing to promptly rule out typical HUS, TTP, systemic autoimmune disease, and other similar conditions.',
      'Stopping follow-up after improvement in the acute phase, overlooking risks of recurrence and chronic kidney damage.',
    ],
    firstDepartments: [
      'Emergency Department',
      'Nephrology',
      'Pediatric Nephrology',
      'Hematology',
      'Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Compile results of complete blood count, platelets, creatinine, urine tests, LDH, bilirubin, haptoglobin, peripheral blood smear, and other relevant tests.',
      'Record recent diarrhea, infections, pregnancy/postpartum history, medications, transplantation, autoimmune disease, or family history.',
      'Bring records of blood pressure, urine output, dialysis, transfusions, plasma therapy, or complement-related treatment if any.',
      'Confirm with your doctor whether typical HUS, TTP, and other thrombotic microangiopathies have been ruled out.',
    ],
    testsToAskAbout: [
      'Complete blood count, reticulocyte count, peripheral blood smear, LDH, bilirubin, haptoglobin.',
      'Creatinine, urine tests, urine protein, blood pressure, and kidney imaging.',
      'ADAMTS13 activity, to differentiate TTP.',
      'Complement C3/C4, complement regulatory antibodies, or genetic testing.',
      'Diarrhea-related pathogens and Shiga toxin testing, as applicable to rule out typical HUS.',
    ],
    questionsForDoctor: [
      'Based on current findings, does this look more like aHUS, typical HUS, TTP, or another thrombotic microangiopathy?',
      'How significant is the current kidney injury, and is dialysis or intensive care needed?',
      'Is complement-related treatment or genetic testing needed?',
      'What special precautions should be taken during future infections, pregnancy, surgery, or when taking medications?',
      'Should family members be screened or receive genetic counseling?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>aHUS often presents with hemolytic anemia, low platelets, and acute kidney injury. Patients may experience fatigue, pale complexion, yellowing of skin/eyes, decreased urine output, blood in urine, swelling, high blood pressure, headache, nausea, vomiting, seizures, or changes in consciousness.</p>',
    diagnosis:
      '<p>Diagnosis requires identification of thrombotic microangiopathy and exclusion of typical HUS, TTP, infections, medications, autoimmune diseases, pregnancy-related conditions, and other causes. Testing typically includes hemolysis markers, kidney function, urine tests, ADAMTS13, complement evaluation, and genetic testing as needed.</p>',
    treatment:
      '<p>During the acute phase, rapid management by nephrology, hematology, and critical care teams is needed. Treatment may include fluid and blood pressure management, transfusions, dialysis, plasma therapy, or complement pathway-related therapy. The specific choice depends on the diagnostic assessment, severity, and local availability of medications.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on kidney function, blood pressure, urine protein, blood counts, recurrence risk, and trigger factors. Children also need monitoring of growth and development; women of childbearing age need specialist evaluation before pregnancy.</p>',
    fertilityOrFamily:
      '<p>Some cases of aHUS are related to genetic susceptibility in complement-related genes. Inheritance patterns may be autosomal dominant, autosomal recessive, or more complex. After diagnosis, genetic counseling can be sought to discuss family member screening and reproductive risks.</p>',
    emergencySigns:
      '<p>Seek immediate medical attention if there is significant decrease or absence of urine output, severe fatigue or pallor, worsening yellowing of skin/eyes, seizures, changes in consciousness, severe headache or visual disturbances, markedly elevated blood pressure, or difficulty breathing.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Genetic Atypical Hemolytic-Uremic Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1367/',
    },
    {
      name: 'MedlinePlus Genetics: Atypical hemolytic-uremic syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/atypical-hemolytic-uremic-syndrome/',
    },
  ],
  symptoms:
    '<p>Common clues include hemolytic anemia, low platelets, decreased urine output, abnormal kidney function, high blood pressure, and neurological symptoms.</p>',
  diagnosis:
    '<p>Evaluation typically includes hemolysis markers, platelets, kidney function, urine tests, ADAMTS13, complement testing, exclusion of infections, and relevant genetic testing.</p>',
  treatment:
    '<p>Acute phase requires prompt specialist management. Treatment may involve supportive care, dialysis, plasma therapy, or assessment for complement-related therapy.</p>',
  prognosis:
    '<p>The disease course and recurrence risk vary considerably. Early recognition, appropriate acute management, and long-term kidney follow-up are important.</p>',
  categorySlug: 'renal-urologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 308,
    name: 'atypical-hemolytic-uremic-syndrome-journey.png',
    url: '/images/diseases/atypical-hemolytic-uremic-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

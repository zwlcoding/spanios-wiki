import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseDiamondBlackfanAnemia: DiseaseDraft = {
  ...entity(25, 'disease-diamond-blackfan-anemia'),
  name: 'Diamond-Blackfan Anemia',
  nameEn: 'Diamond-Blackfan Anemia',
  alias: 'Diamond-Blackfan anemia, DBA, Congenital Dyserythropoietic Anemia',
  slug: 'diamond-blackfan-anemia',
  oneSentence:
    'Diamond-Blackfan anemia is an inherited condition where the bone marrow cannot make enough red blood cells. It usually appears in infancy and may be accompanied by growth delay, birth defects, and increased cancer risk.',
  plainName:
    'A genetic form of anemia where the bone marrow cannot make enough red blood cells',
  prevalence:
    'MedlinePlus describes it affecting about 5 to 7 per million newborns, and GeneReviews also lists it as a rare inherited disorder of red blood cell production.',
  quickLook: {
    whatItIs:
      'The bone marrow makes blood cells. DBA mainly affects red blood cell production, causing anemia in infants or children; some patients also have abnormalities of the thumbs, face, heart, kidneys, or growth.',
    whoToSeeFirst:
      'When an infant shows pale skin, tiredness, poor feeding, anemia with low reticulocyte count, they should be evaluated by pediatric hematology or hematology department; severe anemia, rapid heartbeat, or breathing difficulty requires urgent care.',
    isGenetic:
      'Most cases are linked to genes that make ribosomal proteins or other blood-forming genes, commonly inherited in an autosomal dominant pattern; there are also new mutations and some other inheritance patterns.',
    hasTreatment:
      'There are long-term management plans from the hematology specialist, including anemia support, medications, blood transfusions, iron overload management, and stem cell transplant evaluation for some cases. Specific plans should be made by the hematology team.',
    commonDelayReason:
      'Infant anemia is often first thought to be from nutritional deficiency or infection; if reticulocyte count, bone marrow red blood cell production, and signs of birth defects are not checked, the diagnosis may be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Noticeable anemia, pale skin, tiredness, poor feeding, or slow growth appearing in the first year after birth.',
      'Low hemoglobin with low reticulocyte count, suggesting the bone marrow is not making enough red blood cells.',
      'Anemia together with thumb or upper limb differences, facial features, heart or kidney structural differences, or short stature.',
      'Family history of childhood anemia, blood transfusions, bone marrow failure, or similar diagnoses.',
      'Anemia that does not fit with iron deficiency or nutritional causes.',
    ],
    commonWrongTurns: [
      'Only treating as iron deficiency without checking reticulocyte count and red blood cell production.',
      'Handling birth defects and anemia separately without considering they may be part of the same condition.',
      'Not regularly monitoring iron overload and organ effects after long-term transfusions.',
      'Missing long-term follow-up for cancer risk and bone marrow failure risk in DBA patients.',
    ],
    firstDepartments: [
      'Pediatric hematology',
      'Hematology',
      'Medical genetics / Genetic counseling clinic',
      'Heart, kidney, orthopedics, or rehabilitation specialists (based on associated differences)',
    ],
    diagnosisChecklist: [
      'Keep records of complete blood count, reticulocyte count, red blood cell values, fetal hemoglobin, red cell ADA, and bone marrow exam results.',
      'Record the age when anemia was found, number of transfusions, medication responses, infection history, and growth and development.',
      'Check for thumb/upper limb, craniofacial, heart, kidney, genitourinary, or eye differences.',
      'Ask whether genetic panel or whole exome testing for DBA-related genes is needed.',
      'When planning long-term follow-up, confirm iron overload monitoring, cancer screening, and bone marrow function tracking.',
    ],
    testsToAskAbout: [
      'Complete blood count, reticulocyte count, and blood smear.',
      'Red cell ADA, fetal hemoglobin, and tests to rule out other causes of anemia.',
      'Bone marrow exam to check red blood cell precursors.',
      'Genetic testing for DBA-related genes.',
      'Heart, kidney, bone, and growth and development assessments.',
      'Iron overload and organ function monitoring for patients on long-term transfusions.',
    ],
    questionsForDoctor: [
      'Does this anemia look more like DBA or another bone marrow failure or nutritional anemia? What more tests are needed?',
      'What is the goal of treatment now? How do we decide if medication, transfusion, or other options are the right choice?',
      'If long-term transfusions are needed, how do we monitor and manage iron overload?',
      'What birth defects should be screened for, and what is the long-term cancer risk?',
      'Does the family need genetic testing? How should we plan for future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>DBA usually appears as anemia in the first year after birth, with symptoms like pale skin, tiredness, poor feeding, rapid heartbeat, or slow growth. About half of patients also have birth differences such as thumb or upper limb differences, facial features, heart or kidney structural differences, eye problems, or short stature. The severity varies widely; some non-classic patients have milder or later-onset symptoms.</p>',
    diagnosis:
      '<p>Diagnosis combines infant-onset anemia, low reticulocyte count, reduced red blood cell production in the bone marrow, clues from red cell ADA or fetal hemoglobin tests, and ruling out infection, nutritional deficiency, other bone marrow failure syndromes, and acquired pure red cell aplasia. Genetic testing can help with subtyping and family risk assessment, but a negative result does not completely rule out the condition.</p>',
    treatment:
      '<p>Treatment is planned by the hematology team based on anemia severity, age, medication response, transfusion needs, and complication risks, and may include medications, red blood cell transfusions, iron overload management, and stem cell transplant evaluation. Different options have very different benefits and risks, and should not be adjusted based on internet information.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on hemoglobin levels, transfusion needs, iron overload, liver and heart endocrine function, growth and development, structural differences, bone marrow function, and cancer risk. It is recommended to keep genetic reports, transfusion records, iron overload test results, and treatment response records for long-term management.</p>',
    fertilityOrFamily:
      '<p>DBA is commonly inherited in an autosomal dominant pattern but can also be caused by new mutations. Once the disease-causing mutation is identified, patients and families can learn about testing relatives, recurrence risks, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling. Patients planning pregnancy also need joint assessment by hematology and obstetrics for anemia and treatment safety.</p>',
    emergencySigns:
      '<p>Seek medical care promptly if there is noticeable shortness of breath, palpitations, fainting, confusion, severe infection with fever, uncontrolled bleeding, or rapid worsening of known anemia. Patients on long-term transfusions who develop chest tightness, heart function problems, abdominal pain, or endocrine abnormalities should also return for evaluation of iron overload-related issues.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: DBA Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
    },
    {
      name: 'MedlinePlus Genetics: Diamond-Blackfan anemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/diamond-blackfan-anemia',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Diamond-Blackfan Anemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK545302/',
    },
  ],
  symptoms:
    '<p>Anemia often appears in infancy with pale skin, tiredness, poor feeding, or slow growth; may be accompanied by thumb, craniofacial, heart, kidney, or other birth differences.</p>',
  diagnosis:
    '<p>Assessment includes complete blood count, reticulocyte count, bone marrow red blood cell production, red cell ADA/fetal hemoglobin tests, birth defect screening, and DBA-related genetic testing.</p>',
  treatment:
    '<p>Management is individualized by the hematology team and may include medications, transfusions, iron overload management, and stem cell transplant evaluation for some patients.</p>',
  prognosis:
    '<p>Outlook depends on anemia control, treatment complications, iron overload, birth defects, and long-term monitoring for cancer and bone marrow risks.</p>',
  sourceName: 'GeneReviews: DBA Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 324,
    name: 'diamond-blackfan-anemia-journey.png',
    url: '/images/diseases/diamond-blackfan-anemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

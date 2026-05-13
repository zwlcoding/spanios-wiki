import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseColdAgglutininDisease: DiseaseDraft = {
  ...entity(2015, 'disease-cold-agglutinin-disease'),
  name: 'Cold agglutinin disease',
  nameEn: 'Cold agglutinin disease',
  alias:
    'CAD, cold antibody autoimmune hemolytic anemia, China Second Rare Disease Catalog item 15',
  slug: 'cold-agglutinin-disease',
  oneSentence:
    'Cold agglutinin disease is a rare autoimmune hemolytic anemia in which cold-triggered antibodies can lead to red blood cell destruction, anemia, jaundice, dark urine, and cold-induced color changes in the hands or feet.',
  plainName:
    'A rare anemia where cold exposure can trigger immune destruction of red blood cells',
  prevalence:
    "Included in China's second rare disease catalog; it is rare overall, more often reported in adults and older adults, and estimates vary by whether primary and secondary cases are counted together.",
  quickLook: {
    whatItIs:
      'Cold agglutinins are autoantibodies that bind red blood cells more readily at lower temperatures and can activate complement, causing hemolysis. People may have anemia symptoms and cold-related color change or pain in fingers, toes, ears, or nose.',
    whoToSeeFirst:
      'Recurrent anemia, jaundice, dark urine, or cold-induced blue or pale painful extremities should be evaluated by hematology. Severe shortness of breath, chest pain, confusion, or infection signs need emergency care.',
    isGenetic:
      'CAD is usually not inherited. Clinicians assess whether it is primary CAD or secondary to infection, autoimmune disease, lymphoproliferative disease, or another condition.',
    hasTreatment:
      'Mild disease may be managed with warmth, cold avoidance, infection prevention, and monitoring. Symptomatic anemia, transfusion dependence, or severe circulatory symptoms may need hematology-directed B-cell therapy, complement-directed therapy, or other treatment.',
    commonDelayReason:
      'CAD may be mistaken for common anemia, Raynaud-like symptoms, cold hands and feet, or post-infection fatigue. Linking anemia, hemolysis labs, direct antiglobulin testing, and cold-triggered symptoms is key.',
  },
  patientJourney: {
    whenToSuspect: [
      'Fatigue, dizziness, palpitations, or shortness of breath recur with anemia and hemolysis clues such as high bilirubin or LDH and low haptoglobin.',
      'Fingers, toes, ears, or nose turn blue or pale, painful, or numb after cold exposure.',
      'Dark urine or jaundice worsens in cold weather, after cold drinks or infusions, or after infection.',
      'Blood samples clump, CBC results are hard to interpret, or the direct antiglobulin test suggests complement involvement.',
    ],
    commonWrongTurns: [
      'Treating anemia only with iron or vitamins without confirming whether hemolysis is present.',
      'Treating cold-induced color change as isolated Raynaud phenomenon without checking hemoglobin and hemolysis markers.',
      'Not warming samples, infusions, or transfusions when needed, causing symptoms or lab errors.',
      'Not evaluating for infection, autoimmune disease, or lymphoproliferative disease after CAD is diagnosed.',
    ],
    firstDepartments: [
      'Hematology',
      'Rare blood disease clinic',
      'Rheumatology and immunology',
      'Emergency medicine',
    ],
    diagnosisChecklist: [
      'Record when anemia was found, cold triggers, seasonal pattern, urine color, jaundice, extremity color changes, and infection history.',
      'Bring CBC, reticulocyte count, bilirubin, LDH, haptoglobin, direct antiglobulin test, and cold agglutinin titer.',
      'List transfusions, medicines, vaccines or infections, autoimmune disease, enlarged lymph nodes, spleen findings, and prior cancer or blood disease.',
      'Record cold workplace, freezer exposure, winter outdoor exposure, cold water, or cold drink triggers.',
    ],
    testsToAskAbout: [
      'CBC, reticulocyte count, blood smear, and hemolysis markers.',
      'Direct antiglobulin test, especially complement C3d results, plus cold agglutinin titer and thermal amplitude when available.',
      'Immunoglobulins, serum protein electrophoresis or immunofixation, complement testing, and screening for lymphoproliferative disease.',
      'Testing for infection, autoimmune disease, bone marrow involvement, or imaging when clinically indicated.',
    ],
    questionsForDoctor: [
      'Is my anemia caused by cold agglutinins, and is it primary or secondary?',
      'Which temperatures, settings, infusions, or procedures require warming precautions?',
      'Do I only need monitoring and warmth, or do I need medicine or transfusion support?',
      'If I need transfusion, should the blood and infusion process be warmed?',
      'Should I be screened for lymphoproliferative disease, infection, or autoimmune disease, and which labs should be followed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Cold agglutinin disease can cause anemia and cold-related circulation symptoms. Anemia may cause fatigue, dizziness, palpitations, shortness of breath with activity, or pallor. Hemolysis can cause jaundice, dark urine, and elevated bilirubin. Symptoms may worsen in cold seasons, after infection, or with cold exposure.</p><p>Some people develop blue or pale painful fingers, toes, ears, or nose after cold exposure. Severe hemolysis, thrombosis risk, or an associated condition requires hematology assessment.</p>',
    diagnosis:
      '<p>Diagnosis requires evidence of hemolytic anemia and cold agglutinin involvement. Common tests include CBC, reticulocyte count, bilirubin, LDH, haptoglobin, blood smear, direct antiglobulin test, and cold agglutinin titer.</p><p>Clinicians also look for primary CAD versus secondary disease related to infection, autoimmune disease, lymphoproliferative disease, or other causes. Blood sample handling, transport, and transfusion may need warming to reduce lab artifacts and symptom triggers.</p>',
    treatment:
      '<p>Mild or asymptomatic disease may be managed with cold avoidance, warming strategies, infection prevention, and monitoring hemoglobin and hemolysis markers. Before surgery, infusions, or transfusions, patients should tell the care team so warming precautions can be planned.</p><p>Symptomatic anemia, transfusion dependence, or significant cold-related circulatory symptoms may be treated with hematology-directed B-cell therapy, complement-directed therapy, or other options. Standard steroids often have limited benefit in typical CAD, so treatment should be individualized by hematology.</p>',
    longTermCare:
      '<p>Long-term care includes periodic CBC, hemolysis markers, complement-related testing when useful, and reassessment for underlying disease. Practical warming strategies include avoiding cold drinks, cold water immersion, cold workplaces, and unwarmed infusions.</p><p>Before travel, surgery, dental work, or endoscopy, patients should disclose the CAD diagnosis so temperature management and transfusion plans can be arranged.</p>',
    fertilityOrFamily:
      '<p>Cold agglutinin disease is usually not inherited, so relatives generally do not need genetic screening. If CAD is associated with autoimmune disease, infection, or lymphoproliferative disease, family history and risk assessment follow that condition.</p><p>Pregnancy planning or active hemolysis during pregnancy should be managed jointly by hematology and obstetrics, especially if immune therapy is being used.</p>',
    emergencySigns:
      '<p>Seek emergency care for sudden severe shortness of breath, chest pain, fainting, confusion, very fast heartbeat, markedly darker urine with worsening weakness, fever or chills, severe limb pain, or possible blood clot symptoms. Tell the emergency team about CAD and recent medicines or transfusions.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Cold agglutinin disease',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/6130/cold-agglutinin-disease',
    },
    {
      name: 'Cleveland Clinic: Cold Agglutinin Disease',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/23178-cold-agglutinin-disease',
    },
  ],
  symptoms:
    '<p>Common symptoms include fatigue, dizziness, palpitations, shortness of breath, jaundice, dark urine, and cold-induced blue, pale, painful, or numb fingers, toes, ears, or nose.</p>',
  diagnosis:
    '<p>Diagnosis uses CBC and hemolysis markers, direct antiglobulin testing, cold agglutinin titer or thermal amplitude, and evaluation for infection, autoimmune disease, or lymphoproliferative disease.</p>',
  treatment:
    '<p>Mild disease may need warmth, cold avoidance, and monitoring; symptomatic anemia or significant circulatory symptoms may need warmed transfusion support, B-cell therapy, complement-directed medicines, or other hematology care.</p>',
  prognosis:
    '<p>The course varies. Many people reduce risk with temperature management and hematology follow-up, while severe hemolysis, transfusion dependence, or associated disease may require more active treatment.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 369,
    name: 'cold-agglutinin-disease-journey.png',
    url: '/images/diseases/cold-agglutinin-disease-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

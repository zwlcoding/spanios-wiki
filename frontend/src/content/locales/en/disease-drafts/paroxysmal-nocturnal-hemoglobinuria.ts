import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseParoxysmalNocturnalHemoglobinuria: DiseaseDraft = {
  ...entity(5034, 'disease-paroxysmal-nocturnal-hemoglobinuria'),
  name: 'Paroxysmal Nocturnal Hemoglobinuria',
  nameEn: 'Paroxysmal Nocturnal Hemoglobinuria',
  alias: 'PNH, Marchiafava-Micheli syndrome',
  icd10Code: 'D59.5',
  slug: 'paroxysmal-nocturnal-hemoglobinuria',
  oneSentence:
    'Paroxysmal nocturnal hemoglobinuria is a rare acquired clonal hematopoietic stem cell disorder caused by PIGA gene mutations, resulting in deficiency of glycosylphosphatidylinositol (GPI)-anchored proteins on blood cells; complement-mediated intravascular hemolysis, thrombosis, and bone marrow failure are the hallmarks, with eculizumab or ravulizumab dramatically improving outcomes.',
  plainName:
    'A rare blood disorder where red blood cells are destroyed by the immune system, causing anemia, dark urine, and blood clots',
  prevalence:
    'Estimated prevalence is approximately 1 to 1.5 per million people. Peak incidence is in the 30s to 40s, affecting both sexes equally. Asian populations may have a slightly higher incidence. Approximately 10-15% of patients with aplastic anemia may develop PNH.',
  searchIntents: [
    'PNH symptoms',
    'paroxysmal nocturnal hemoglobinuria anemia',
    'PNH thrombosis',
    'PNH eculizumab treatment',
    'paroxysmal nocturnal hemoglobinuria diagnosis',
  ],
  quickLook: {
    whatItIs:
      'PNH is an acquired (not inherited) clonal hematopoietic stem cell disorder. PIGA gene mutations in hematopoietic stem cells lead to deficiency of GPI-anchored proteins (especially CD55 and CD59) on red blood cells, white blood cells, and platelets. This makes red blood cells vulnerable to complement attack, causing chronic intravascular hemolysis, thrombosis, and bone marrow failure.',
    whoToSeeFirst:
      'Hematologist. Anyone with unexplained anemia, dark urine (especially in the morning), recurrent thrombosis, or cytopenias should be evaluated promptly.',
    isGenetic:
      'Not inherited. PIGA mutations occur at the hematopoietic stem cell level, so all descendants of the mutated cell lack GPI-anchored proteins. The mutation is not passed to offspring, but the clone can expand over time.',
    hasTreatment:
      'Eculizumab or ravulizumab (C5 inhibitors) are the standard of care, dramatically reducing hemolysis and thrombosis risk and improving survival. Allogeneic hematopoietic stem cell transplantation is the only curative therapy. Supportive care includes iron and folate supplementation, transfusions, anticoagulation for high-risk patients, and infection prophylaxis.',
    commonDelayReason:
      'Dark urine is often most prominent in morning voids and may be overlooked during the day. Anemia may be misdiagnosed as iron deficiency. Abdominal pain may be attributed to gallstones or gastrointestinal disease. Thrombosis may be treated as ordinary venous thrombosis without investigating for PNH.',
  },
  patientJourney: {
    whenToSuspect: [
      'Dark, cola-colored, or tea-colored urine upon waking (hemoglobinuria), which may lighten or clear during the day.',
      'Unexplained anemia with fatigue, pallor, and palpitations, with or without jaundice.',
      'Recurrent abdominal pain (especially right upper quadrant), dysphagia, or back pain (related to smooth muscle spasm from free hemoglobin scavenging nitric oxide).',
      'Unexplained thrombosis, especially in unusual sites such as abdominal veins, cerebral veins, or portal vein.',
      'Pancytopenia or prior diagnosis of aplastic anemia or myelodysplastic syndrome.',
    ],
    commonWrongTurns: [
      'Dark urine dismissed as urinary tract infection or simple hematuria without checking for hemosiderin.',
      'Anemia treated as iron deficiency or nutritional anemia; iron supplementation may worsen hemolysis.',
      'Abdominal pain attributed to gastroenteritis, gallstones, or peptic ulcer disease.',
      'Thrombosis treated only with anticoagulation without investigating for PNH.',
      'Delay in initiating flow cytometry testing and complement inhibitor therapy.',
    ],
    firstDepartments: [
      'Hematology',
      'Gastroenterology (if abdominal pain is prominent)',
      'Vascular Medicine / Surgery (if thrombosis is present)',
      'Urology (if hemoglobinuria is prominent)',
    ],
    diagnosisChecklist: [
      'Document urine color patterns (darkening in morning), anemia symptoms, abdominal pain, and thrombosis history.',
      'Collect prior CBC, reticulocyte count, bilirubin, and LDH results.',
      'Ask whether flow cytometry testing (FLAER, CD55, CD59) has been performed.',
      'Note any history of aplastic anemia or myelodysplastic syndrome.',
    ],
    testsToAskAbout: [
      'Complete blood count (degree of anemia, white blood cell and platelet counts).',
      'Reticulocyte count (elevated in hemolysis).',
      'Serum LDH, indirect bilirubin, and haptoglobin (markers of hemolysis).',
      'Urinalysis and urine hemosiderin (Rous test).',
      'Flow cytometry (FLAER, CD55, CD59 to detect PNH clone; this is the gold standard).',
      'Bone marrow aspiration and biopsy (to assess marrow cellularity and exclude aplastic anemia/MDS).',
      'Coombs test (to exclude autoimmune hemolytic anemia).',
      'Abdominal ultrasound or CT (to assess for thrombosis and gallstones).',
    ],
    questionsForDoctor: [
      'What is my PNH clone size, and do I have classic PNH, PNH in the setting of aplastic anemia, or subclinical PNH?',
      'Am I a candidate for eculizumab or ravulizumab, and what are the costs and side effects?',
      'What is my thrombosis risk, and do I need long-term anticoagulation?',
      'Do I need blood transfusions, and is iron supplementation safe for me?',
      'Is allogeneic stem cell transplantation an option, and what are the risks and optimal timing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The classic triad of PNH is intravascular hemolysis, thrombosis, and bone marrow failure. Hemolysis manifests as dark urine upon waking (hemoglobinuria, due to respiratory acidosis during sleep enhancing complement activation), fatigue, pallor, jaundice, and splenomegaly. Hemolysis can be paroxysmal or continuous.</p><p>Smooth muscle spasm symptoms include abdominal pain (especially right upper quadrant), dysphagia, back pain, and erectile dysfunction, related to plasma free hemoglobin scavenging nitric oxide. Thrombosis is the most serious complication of PNH and can occur anywhere, but is particularly common in abdominal veins (portal vein, mesenteric vein, splenic vein, hepatic vein/Budd-Chiari syndrome), cerebral venous sinuses, and lower extremity deep veins. Bone marrow failure manifests as pancytopenia or single-lineage cytopenia.</p>',
    diagnosis:
      '<p>Diagnosis depends on flow cytometric detection of GPI-anchored protein deficiency on peripheral blood red cells, granulocytes, and monocytes. FLAER (fluorescein-labeled proaerolysin) is the most sensitive assay and measures PNH clone size. CD55 and CD59 deficiency are also characteristic.</p><p>Laboratory findings include: evidence of intravascular hemolysis (markedly elevated LDH, elevated indirect bilirubin, low haptoglobin, hemoglobinuria, hemosiderinuria); anemia with elevated reticulocytes; bone marrow findings ranging from hypocellularity (aplastic PNH) to hypercellularity. PNH must be distinguished from autoimmune hemolytic anemia, march hemoglobinuria, hereditary spherocytosis, and other hemolytic disorders. Patients with aplastic anemia or MDS who develop unexplained hemolysis should be evaluated for PNH.</p>',
    treatment:
      '<p>Complement inhibitors (eculizumab or ravulizumab) are the standard of care, blocking C5 to dramatically reduce intravascular hemolysis, lower thrombosis risk, and improve quality of life and survival. Vaccination against meningococcal infection is required before starting therapy (complement inhibition increases meningococcal risk). These therapies are expensive but increasingly covered by insurance.</p><p>Allogeneic hematopoietic stem cell transplantation is the only curative therapy and is considered for patients with severe bone marrow failure, recurrent thrombosis despite complement inhibition, or those who cannot access complement inhibitors. Supportive care includes: iron supplementation (urinary iron loss is common but should be cautious), folate, blood transfusions for severe anemia, anticoagulation for high thrombosis risk, and infection prophylaxis. Avoidance of hemolysis-triggering medications (oxidative stress agents) is recommended.</p>',
    longTermCare:
      '<p>Long-term follow-up includes: regular monitoring of CBC, LDH, and PNH clone size; thrombosis risk assessment; renal function monitoring (chronic kidney disease can develop from hemolysis); iron status management; and monitoring for bone marrow evolution (some patients may transform to aplastic anemia or MDS).</p><p>Lifestyle management: avoid infections (stay up to date on vaccinations); avoid strenuous exercise and dehydration; avoid oxidative stress (certain medications and foods); maintain good hygiene. Psychological support and patient education are important. Carry a medical alert card and inform all healthcare providers of the PNH diagnosis.</p>',
    fertilityOrFamily:
      '<p>PNH is an acquired disorder and is not inherited. However, women with PNH have significantly increased risks of thrombosis and hemolysis during pregnancy and require multidisciplinary management by hematology and obstetrics. Experience with eculizumab during pregnancy is growing and it is considered relatively safe, but individual risk assessment is essential. Preconception counseling is strongly recommended.</p>',
    emergencySigns:
      '<p>Seek emergency care immediately for: acute abdominal pain with distension and bloody stools (possible mesenteric vein thrombosis); acute chest pain and shortness of breath (pulmonary embolism or myocardial infarction); severe headache with vomiting and altered consciousness (cerebral venous sinus thrombosis); severe anemia with palpitations and shortness of breath; persistent dark urine with decreased urine output (acute kidney injury).</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Paroxysmal Nocturnal Hemoglobinuria',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538475/',
    },
    {
      name: 'NORD: Paroxysmal Nocturnal Hemoglobinuria',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/paroxysmal-nocturnal-hemoglobinuria/',
    },
    {
      name: 'Orphanet: Paroxysmal nocturnal hemoglobinuria',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/447',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Intravascular hemolysis (dark urine, anemia, jaundice), thrombosis (especially abdominal and cerebral veins), and bone marrow failure (cytopenias). Smooth muscle spasm causes abdominal pain and dysphagia.</p>',
  diagnosis:
    '<p>Flow cytometry detecting FLAER and CD55/CD59 deficiency is the gold standard. Markedly elevated LDH, elevated indirect bilirubin, and hemosiderinuria support the diagnosis.</p>',
  treatment:
    '<p>Eculizumab or ravulizumab (C5 inhibitors) are standard therapy, dramatically reducing hemolysis and thrombosis. Allogeneic stem cell transplantation is curative. Supportive care includes iron, transfusions, and anticoagulation.</p>',
  prognosis:
    '<p>Complement inhibitors have dramatically improved prognosis, with 10-year survival exceeding 90%. Untreated, median survival is approximately 10-15 years, with thrombosis and bleeding as leading causes of death.</p>',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK538475/',
  categorySlug: 'hematological',
  charityIds: [19],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3534,
    name: 'paroxysmal-nocturnal-hemoglobinuria-journey.png',
    url: '/images/diseases/paroxysmal-nocturnal-hemoglobinuria-journey.png',
  },
  tagSlugs: ['hematologic', 'autoimmune', 'treatable'],
};

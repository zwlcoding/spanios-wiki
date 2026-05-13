import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAncaAssociatedVasculitis: DiseaseDraft = {
  ...entity(2007, 'disease-anca-associated-vasculitis'),
  name: 'ANCA-associated vasculitis',
  nameEn: 'ANCA-associated vasculitis',
  alias:
    'AAV; antineutrophil cytoplasmic antibody-associated vasculitis; GPA; MPA; EGPA; China Second Rare Disease Catalog item 7',
  slug: 'anca-associated-vasculitis',
  oneSentence:
    'ANCA-associated vasculitis is a group of rare autoimmune small-vessel vasculitides, including GPA, MPA, and EGPA, that can affect the sinuses, lungs, kidneys, skin, nerves, and other organs.',
  plainName:
    'An autoimmune blood vessel inflammation that can affect kidneys and lungs',
  prevalence:
    "Included in China's second rare disease catalog; the overall group is rare, with frequency varying by subtype and population.",
  quickLook: {
    whatItIs:
      'AAV happens when immune inflammation injures small blood vessels. It is a group of diseases, not one single illness. Early recognition matters most when kidneys, lungs, or nerves are involved.',
    whoToSeeFirst:
      'Start with rheumatology for multisystem inflammation. Nephrology, pulmonology, and ENT are often involved. Go to emergency care for coughing blood, breathing trouble, rapidly worsening kidney function, or severe neurologic symptoms.',
    isGenetic:
      'It is usually not a classic inherited disease. ANCA testing is useful, but a positive test alone does not prove AAV and a negative test does not fully exclude it.',
    hasTreatment:
      'Treatment usually has induction and maintenance phases. Corticosteroids, rituximab, cyclophosphamide, or other immunosuppressive medicines may be used, with infection prevention and close monitoring.',
    commonDelayReason:
      'Early disease can look like sinusitis, pneumonia, asthma, rash, kidney disease, or neuropathy. The pattern is missed when each organ is treated separately.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent sinus or ear problems, nosebleeds, crusting, hearing loss, or symptoms that do not respond as expected.',
      'Cough, shortness of breath, abnormal chest imaging, or coughing blood with fever, fatigue, or weight loss.',
      'Blood or protein in urine, rising creatinine, or suddenly worse blood pressure.',
      'Purpura, ulcers, joint pain, muscle pain, numbness, weakness, or mononeuritis.',
      'Asthma, nasal polyps, high eosinophils, plus lung, skin, nerve, or systemic symptoms.',
    ],
    commonWrongTurns: [
      'Repeatedly treating sinusitis, pneumonia, or asthma without checking urine and kidney function.',
      'Ruling out vasculitis only because ANCA is negative, or diagnosing it only because ANCA is positive.',
      'Missing early kidney involvement because it may have few symptoms.',
      'Forgetting infection prevention and medication toxicity monitoring during immunosuppression.',
    ],
    firstDepartments: ['Rheumatology', 'Nephrology', 'Pulmonology', 'ENT'],
    diagnosisChecklist: [
      'Prepare a timeline of fever, weight change, sinus/ear symptoms, lung symptoms, urine findings, rash, and nerve symptoms.',
      'Bring urinalysis, kidney function, ANCA/MPO/PR3, inflammatory markers, chest CT, sinus CT, and pathology reports.',
      'Record coughing blood, breathlessness, urine output, blood pressure, numbness, weakness, and eye symptoms.',
      'List recent infections, medicines, autoimmune disease, cancer screening, hepatitis B/C, and other infection results.',
    ],
    testsToAskAbout: [
      'ANCA with MPO-ANCA and PR3-ANCA.',
      'Urinalysis, urine protein, creatinine/eGFR, and nephrology assessment.',
      'Chest CT, sinus/ENT evaluation, lung function, or bronchoscopy when indicated.',
      'Inflammatory markers, CBC, eosinophils, complement, and infection testing.',
      'Whether kidney, skin, lung, or ENT biopsy would help confirm the diagnosis.',
    ],
    questionsForDoctor: [
      'Does this fit GPA, MPA, EGPA, or another condition such as infection or cancer?',
      'Is there organ-threatening kidney, lung, or nerve involvement, and do I need admission?',
      'What medicines will be used for induction and maintenance, and when will response be assessed?',
      'How will we prevent infection, bone loss, stomach problems, glucose issues, and fertility-related side effects?',
      'What signs suggest relapse, and how should changes in ANCA levels be interpreted?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Symptoms depend on the organs involved. General features can include fever, fatigue, weight loss, joint pain, and high inflammatory markers. ENT disease can cause sinusitis, nosebleeds, crusting, or hearing loss. Lung disease can cause cough, shortness of breath, nodules, infiltrates, or coughing blood. Kidney disease can cause blood or protein in urine and rising creatinine, sometimes with few early symptoms.</p><p>Skin purpura, ulcers, nerve pain, numbness, or weakness may occur. EGPA is often associated with asthma, nasal polyps, and eosinophilia. Lung bleeding and rapidly progressive kidney inflammation are emergencies.</p>',
    diagnosis:
      '<p>Diagnosis combines the clinical pattern, ANCA-related antibodies, urine and kidney testing, imaging, inflammatory markers, and often tissue biopsy. ANCA helps but cannot confirm or exclude the disease by itself.</p><p>Doctors also rule out infection, cancer, anti-GBM disease, lupus, immune complex vasculitis, and drug-induced vasculitis. Defining organ involvement and severity is central to choosing treatment.</p>',
    treatment:
      '<p>Treatment usually has induction and maintenance phases. Induction aims to stop active inflammation and protect organs, often using corticosteroids with rituximab or cyclophosphamide. Maintenance therapy uses lower-intensity treatment to reduce relapse risk.</p><p>Monitoring includes infection risk, blood counts, kidney and liver function, immunoglobulins, bone health, glucose and blood pressure, and vaccine planning. Care is often shared by rheumatology, nephrology, pulmonology, and ENT.</p>',
    longTermCare:
      '<p>AAV can relapse and can leave organ damage. Follow-up tracks symptoms, urine, creatinine, ANCA/MPO/PR3, inflammatory markers, imaging, and treatment side effects.</p><p>Patients should know that relapse and infection can look similar. Carry a summary of diagnosis, biopsy results, ANCA type, organ involvement, and immunosuppressive medicines.</p>',
    fertilityOrFamily:
      '<p>AAV is usually not inherited, so relatives generally do not need screening. Patients planning pregnancy should coordinate timing and medicines with rheumatology, nephrology, and obstetrics.</p><p>Medicines such as cyclophosphamide can affect fertility. Ask about fertility preservation before treatment when feasible, but organ-threatening disease should not be delayed.</p>',
    emergencySigns:
      '<p>Seek emergency care for coughing blood, breathing trouble, low oxygen, markedly reduced urine, visible blood in urine, rapidly rising creatinine, chest pain, confusion, severe headache, sudden weakness, or high fever while on immunosuppressive medicines.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus: Vasculitis',
      type: 'official',
      url: 'https://medlineplus.gov/vasculitis.html',
    },
    {
      name: 'MedlinePlus Medical Test: ANCA test',
      type: 'official',
      url: 'https://medlineplus.gov/lab-tests/antineutrophil-cytoplasmic-antibodies-anca-test/',
    },
    {
      name: 'StatPearls: ANCA-Associated Vasculitis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/sites/books/NBK554372/',
    },
  ],
  symptoms:
    '<p>Possible signs include recurrent sinus or ear disease, cough or coughing blood, blood/protein in urine, purpura, joint pain, numbness or weakness, fever, fatigue, and weight loss.</p>',
  diagnosis:
    '<p>Diagnosis combines ANCA/MPO/PR3 testing, urine and kidney assessment, chest/sinus imaging, inflammatory markers, infection evaluation, and tissue biopsy when needed.</p>',
  treatment:
    '<p>Treatment uses induction and maintenance immunosuppression, often corticosteroids with rituximab, cyclophosphamide, or other medicines, plus close infection and organ monitoring.</p>',
  prognosis:
    '<p>Early recognition of kidney, lung, and nerve involvement improves outcomes; delayed diagnosis, infection, and relapse increase long-term organ damage risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 361,
    name: 'anca-associated-vasculitis-journey.png',
    url: '/images/diseases/anca-associated-vasculitis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

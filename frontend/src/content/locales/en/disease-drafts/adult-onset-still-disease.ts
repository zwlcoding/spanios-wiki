import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAdultOnsetStillDisease: DiseaseDraft = {
  ...entity(2004, 'disease-adult-onset-still-disease'),
  name: 'Adult-onset Still disease',
  nameEn: 'Adult-onset Still disease',
  alias: 'AOSD; Adult Still disease; China Second Rare Disease Catalog item 4',
  slug: 'adult-onset-still-disease',
  oneSentence:
    'Adult-onset Still disease is a rare autoinflammatory condition often suggested by recurrent high fevers, joint pain or arthritis, a fever-linked salmon-colored rash, and markedly elevated ferritin.',
  plainName: 'A rare inflammatory disease with fever, rash, and joint pain',
  prevalence:
    "Included in China's second rare disease catalog; estimates vary by study, and the condition is considered rare.",
  quickLook: {
    whatItIs:
      'Adult-onset Still disease is not a routine infection or ordinary arthritis. It causes systemic inflammation, often with daily fever spikes, rash that comes and goes with fever, joint pain, sore throat, swollen lymph nodes, and high inflammatory markers.',
    whoToSeeFirst:
      'See rheumatology for recurrent unexplained fever with rash and joint pain. Use emergency care for fever with breathing trouble, confusion, bleeding, jaundice, or marked blood count abnormalities.',
    isGenetic:
      'It is usually not a classic inherited disease. The cause is not fully understood and involves abnormal immune inflammation.',
    hasTreatment:
      'Treatment can include anti-inflammatory medicines, corticosteroids, disease-modifying drugs, and biologics targeting inflammatory pathways such as IL-1 or IL-6, depending on severity.',
    commonDelayReason:
      'It can look like infection, cancer, or other rheumatic disease. Repeated antibiotic courses without connecting fever pattern, rash, joints, ferritin, and inflammatory markers can delay diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated high fevers, often spiking at a similar time of day.',
      'A salmon-pink rash that appears during fever and fades as fever drops.',
      'Sore throat, joint pain or swelling, fatigue, muscle pain, swollen lymph nodes, or enlarged liver/spleen.',
      'High white blood cell and neutrophil counts, high CRP/ESR, and markedly high ferritin without enough evidence of infection.',
      'Symptoms continue despite antibiotics and after evaluation for infection, cancer, and other autoimmune disease.',
    ],
    commonWrongTurns: [
      'Treating every flare as infection and repeatedly changing antibiotics.',
      'Ignoring the rash because it fades quickly.',
      'Treating joint symptoms alone while missing systemic inflammation or macrophage activation risk.',
      'Starting long-term steroids without appropriate infection and cancer evaluation.',
    ],
    firstDepartments: [
      'Rheumatology',
      'Infectious disease',
      'Hematology',
      'Emergency medicine',
    ],
    diagnosisChecklist: [
      'Track fever curves, rash photos, joint locations, and daily symptom patterns.',
      'Bring CBC, CRP, ESR, ferritin, liver tests, coagulation tests, infection workup, imaging, and hospital records.',
      'Record responses to antibiotics, fever medicines, corticosteroids, or immune medicines.',
      'Report chest pain, breathing trouble, abdominal pain, jaundice, bleeding spots, confusion, or reduced urine.',
    ],
    testsToAskAbout: [
      'CBC with differential, CRP, ESR, ferritin, and glycosylated ferritin if available.',
      'Liver and kidney function, coagulation tests, triglycerides, and fibrinogen to assess severe inflammation or MAS risk.',
      'Tests to rule out infection, malignancy, and other rheumatic diseases.',
      'Joint imaging or ultrasound, chest/abdominal imaging, and echocardiography when indicated.',
      'Whether Yamaguchi or other classification criteria support the diagnosis.',
    ],
    questionsForDoctor: [
      'Is this most consistent with adult-onset Still disease, infection, cancer, or another rheumatic disease?',
      'Is my pattern systemic, joint-dominant, or complicated by severe inflammation?',
      'Do I need hospital care, and which markers suggest macrophage activation syndrome?',
      'Do I need short-term anti-inflammatory treatment, corticosteroids, methotrexate, or biologic therapy?',
      'Which tests should track response and relapse?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Common clues include high fevers, rash, and joint symptoms. Fever may spike daily. The rash is often salmon-pink and appears with fever, then fades. Sore throat, muscle pain, fatigue, swollen lymph nodes, enlarged liver or spleen, pleuritis, or pericarditis can also occur.</p><p>A small but important group of patients develop severe systemic inflammation such as macrophage activation syndrome, with persistent fever, falling blood counts, liver injury, coagulation problems, very high ferritin, confusion, or organ dysfunction.</p>',
    diagnosis:
      '<p>No single test confirms adult-onset Still disease. Doctors combine the fever pattern, rash, joint symptoms, high white blood cell and neutrophil counts, inflammatory markers, and ferritin.</p><p>Infection, malignancy, and other rheumatic diseases must be carefully excluded. Criteria such as Yamaguchi criteria may help classification, but clinical judgment and follow-up are still essential.</p>',
    treatment:
      '<p>Treatment is based on severity. Mild symptoms may be treated briefly with NSAIDs, but many patients need corticosteroids. Recurrent, joint-dominant, or steroid-dependent disease may require methotrexate or biologics targeting IL-1 or IL-6 pathways.</p><p>Monitoring includes infection risk, liver function, blood counts, lipids, bone health, and medication adverse effects. Long-term steroids should not be started without appropriate specialist evaluation.</p>',
    longTermCare:
      '<p>The course varies: some people have one episode, some have relapses, and some develop chronic arthritis. Follow-up tracks fever, rash, joint function, inflammatory markers, ferritin, and medication toxicity.</p><p>Patients should know relapse and emergency signs and discuss immune treatment plans before vaccines, pregnancy, surgery, or significant infections.</p>',
    fertilityOrFamily:
      '<p>Adult-onset Still disease is usually not inherited. Pregnancy, breastfeeding, and medication choices should be planned with rheumatology and obstetrics to avoid unsafe medicines or uncontrolled flares.</p>',
    emergencySigns:
      '<p>Seek urgent care for persistent high fever, breathing trouble, chest pain, confusion, jaundice, bleeding spots or bruising, reduced urine, severe abdominal pain, falling blood counts, abnormal coagulation, or rapidly rising ferritin.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: "Cleveland Clinic: Adult-Onset Still's Disease",
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/adult-onset-stills-disease-aosd',
    },
    {
      name: 'Mayo Clinic: Adult Still disease diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/adult-stills-disease/diagnosis-treatment/drc-20351912',
    },
  ],
  symptoms:
    '<p>Common signs include recurrent high fevers, fever-linked salmon-colored rash, joint pain or arthritis, sore throat, muscle pain, swollen lymph nodes or liver/spleen, and high inflammatory markers or ferritin.</p>',
  diagnosis:
    '<p>Diagnosis combines symptoms, blood counts, inflammatory markers, ferritin, and exclusion of infection, cancer, and other rheumatic diseases.</p>',
  treatment:
    '<p>Treatment may include NSAIDs, corticosteroids, disease-modifying antirheumatic drugs, or IL-1/IL-6 targeted biologics, with monitoring for infection and medication toxicity.</p>',
  prognosis:
    '<p>The course may be single-episode, relapsing, or chronic joint disease. Early recognition of severe inflammatory complications and structured follow-up are important.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 358,
    name: 'adult-onset-still-disease-journey.png',
    url: '/images/diseases/adult-onset-still-disease-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

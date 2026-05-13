import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSystemicJuvenileIdiopathicArthritis: DiseaseDraft = {
  ...entity(2074, 'disease-systemic-juvenile-idiopathic-arthritis'),
  name: 'Systemic juvenile idiopathic arthritis',
  nameEn: 'Systemic juvenile idiopathic arthritis',
  alias:
    'sJIA; systemic JIA; Still disease related; China Second Rare Disease Catalog item 74',
  oneSentence:
    'Systemic juvenile idiopathic arthritis is a childhood-onset autoinflammatory disease with recurrent high fever, rash, and arthritis, with macrophage activation syndrome as a serious complication.',
  plainName:
    'A whole-body inflammatory disease in children with fever, rash, and arthritis',
  prevalence:
    "Included in China's second rare disease catalog; JIA is a group of childhood arthritis conditions, and systemic JIA is a less common subtype with frequency varying by population and criteria.",
  quickLook: {
    whatItIs:
      'sJIA is more than arthritis. Fever often spikes once or twice daily, children may look better between fever peaks, and the salmon-pink rash can come and go with fever.',
    whoToSeeFirst:
      'Fever for more than two weeks with rash, swollen or painful joints, lymph node or liver/spleen enlargement, or very high inflammation markers should be assessed by pediatric rheumatology.',
    isGenetic:
      'It is usually not a single-gene inherited disorder and is linked to immune regulation. Genetics is most relevant when family periodic fever or monogenic autoinflammation is suspected.',
    hasTreatment:
      'Treatment aims to control inflammation quickly, protect joints, and prevent MAS. Options include NSAIDs, corticosteroids, methotrexate, and biologics targeting IL-1 or IL-6.',
    commonDelayReason:
      'Early disease may be treated as infection, drug rash, allergy, or fever of unknown origin. Negative cultures, fever-linked rash, and persistent inflammation should raise rheumatology concern.',
  },
  patientJourney: {
    whenToSuspect: [
      'Daily high fever in a child, often with transient pink rash, fatigue, and elevated inflammatory markers.',
      'Joint swelling, pain, morning stiffness, or limited motion, sometimes appearing after fever begins.',
      'Enlarged lymph nodes, liver or spleen, serositis, chest pain, breathlessness, pericardial or pleural effusion.',
      'Persistent fever, falling blood counts, very high ferritin, liver abnormalities, or clotting problems suggesting MAS.',
    ],
    commonWrongTurns: [
      'Repeated antibiotics for presumed infection without culture or pathogen support.',
      'Using fever medicine only without tracking joints, ferritin, blood counts, liver tests, and coagulation.',
      'Stopping treatment too quickly after fever and rash improve, leading to flare or steroid dependence.',
    ],
    firstDepartments: [
      'Pediatric rheumatology',
      'Pediatric infectious disease to exclude infection',
      'Emergency or inpatient pediatrics for high fever or suspected MAS',
      'Rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Bring daily temperature curves, rash photos, joint locations, and response to fever medicines.',
      'Bring CBC, CRP/ESR, ferritin, liver tests, coagulation, triglycerides, and infection workup.',
      'Bring joint ultrasound or MRI, echocardiogram, chest or abdominal imaging, and prior antibiotic or steroid records.',
    ],
    testsToAskAbout: [
      'Whether criteria fit systemic JIA and how infection, malignancy, and other autoinflammatory diseases were excluded.',
      'MAS risk monitoring with ferritin, blood counts, liver enzymes, and coagulation.',
      'Suitability for IL-1 or IL-6 inhibitors and how vaccines and infection screening should be handled.',
    ],
    questionsForDoctor: [
      'Is the current goal fever control, steroid taper, joint protection, or MAS prevention?',
      'Which symptoms suggest MAS or severe infection and need emergency care?',
      'How should exercise, school, vaccines, and growth monitoring be planned?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>sJIA often begins with recurrent high fever, sometimes with daily peaks, transient salmon-pink rash, fatigue, muscle pain, enlarged lymph nodes, liver or spleen enlargement, or serositis. Arthritis may be subtle early or later cause swelling, pain, morning stiffness, and limited motion.</p><p>The key acute complication is macrophage activation syndrome, with persistent fever, poor appearance, falling blood counts, very high ferritin, liver and coagulation abnormalities, and potential life-threatening inflammation.</p>',
    diagnosis:
      '<p>Diagnosis is based on the fever pattern, rash, joint disease, and laboratory inflammation while excluding infection, leukemia or lymphoma, Kawasaki disease, monogenic autoinflammatory disease, and other rheumatic diseases.</p><p>Tests include CBC, CRP/ESR, ferritin, liver tests, coagulation, triglycerides, microbiology, joint imaging, and echocardiography. Disease activity and MAS risk require serial assessment.</p>',
    treatment:
      '<p>Treatment depends on inflammation and organ involvement. Mild disease may use short-term NSAIDs, but many children need corticosteroids or earlier biologic therapy. IL-1 and IL-6 pathway inhibitors can control fever, inflammation, and joint damage.</p><p>Infection screening, vaccine planning, and adverse-effect monitoring are part of treatment. Suspected MAS requires rapid inpatient care, often with high-dose steroids, cyclosporine, or biologic therapy.</p>',
    longTermCare:
      '<p>Follow-up tracks fever relapse, joint range of motion, inflammatory markers, ferritin, growth, bone density, eye screening, medication side effects, and infection risk. Rehabilitation helps maintain function.</p><p>Families should learn MAS red flags and keep records of fever, rash, medicines, and lab trends.</p>',
    fertilityOrFamily:
      '<p>sJIA is usually not a single-gene inherited disease. Family periodic fever, very early severe inflammation, or unusual treatment response may prompt autoinflammatory gene testing discussion.</p>',
    emergencySigns:
      '<p>Urgent care is needed for persistent high fever, poor responsiveness, petechiae or bruising, breathing difficulty, chest pain, severe abdominal pain, jaundice, seizures, reduced urine, or abnormal ferritin, coagulation, or blood counts flagged by the clinician.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Juvenile idiopathic arthritis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/juvenile-idiopathic-arthritis',
    },
    {
      name: 'Cleveland Clinic: Juvenile Idiopathic Arthritis',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/10370-juvenile-idiopathic-arthritis',
    },
  ],
  symptoms:
    '<p>Features include daily high fever, transient rash, joint swelling or morning stiffness, lymph node or liver/spleen enlargement, serositis, and high inflammation; MAS can occur.</p>',
  diagnosis:
    '<p>Diagnosis combines the childhood fever-rash-arthritis pattern, inflammatory tests, and imaging while excluding infection, malignancy, Kawasaki disease, and other autoinflammatory or rheumatic disease.</p>',
  treatment:
    '<p>Treatment may include NSAIDs, corticosteroids, methotrexate, and IL-1 or IL-6 inhibitors; suspected MAS requires rapid inpatient treatment.</p>',
  prognosis:
    '<p>Early inflammation control reduces joint damage and steroid toxicity. The course may remit, relapse, or become chronic arthritis, so long-term follow-up is needed.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'systemic-juvenile-idiopathic-arthritis',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 428,
    name: 'systemic-juvenile-idiopathic-arthritis-journey.png',
    url: '/images/diseases/systemic-juvenile-idiopathic-arthritis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

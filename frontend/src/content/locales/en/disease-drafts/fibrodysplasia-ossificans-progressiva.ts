import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFibrodysplasiaOssificansProgressiva: DiseaseDraft = {
  ...entity(2028, 'disease-fibrodysplasia-ossificans-progressiva'),
  name: 'Fibrodysplasia ossificans progressiva',
  nameEn: 'Fibrodysplasia ossificans progressiva',
  alias:
    'FOP, myositis ossificans progressiva, ACVR1-related heterotopic ossification, China Second Rare Disease Catalog item 28',
  slug: 'fibrodysplasia-ossificans-progressiva',
  oneSentence:
    'Fibrodysplasia ossificans progressiva is a rare ACVR1-related connective tissue disorder in which soft tissues gradually form extra bone after painful flare-ups, limiting movement over time.',
  plainName:
    'A genetic condition in which soft tissues gradually form a second skeleton',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics describes an estimated frequency of about 1 in 1 million people worldwide, with several hundred reported cases.",
  quickLook: {
    whatItIs:
      'The classic clue is malformed big toes at birth, followed in childhood by painful swelling of the neck, shoulders, back, or limbs that later turns into heterotopic bone. Trauma, injections, surgery, biopsy, and viral illness can trigger flare-ups.',
    whoToSeeFirst:
      'A child with malformed big toes and recurrent soft-tissue lumps or stiffness should see an FOP-aware orthopedic, pediatric orthopedic, or genetics team. Avoid unnecessary biopsy, surgery, and intramuscular injections when FOP is suspected.',
    isGenetic:
      'FOP is usually caused by a new ACVR1 variant and follows an autosomal dominant mechanism. A small number of cases are inherited, so genetic counseling is still important.',
    hasTreatment:
      'Management focuses on avoiding trauma, treating flare-ups, preserving function, and protecting breathing. Palovarotene is approved in some countries for reducing new heterotopic ossification in eligible patients, but age limits, risks, and access require specialist review.',
    commonDelayReason:
      'Early lumps can be mistaken for cancer, hemangioma, fibromatosis, dermatomyositis, or post-traumatic hematoma. Biopsy or surgery can worsen ossification.',
  },
  patientJourney: {
    whenToSuspect: [
      'Malformed, short, bent, or deviated big toes are present at birth or in infancy.',
      'A child develops recurrent painful soft-tissue swelling in the neck, back, shoulders, trunk, or limbs followed by hardening and loss of movement.',
      'Stiffness or new bone formation worsens after minor falls, intramuscular injections, dental procedures, or infections.',
      'Imaging shows heterotopic ossification without a better explanation such as major trauma, cancer, or infection.',
    ],
    commonWrongTurns: [
      'Biopsying or removing early lumps as if they were tumors, which can trigger more bone formation.',
      'Treating it as routine myositis, hematoma, or fibromatosis without checking the toes and ACVR1.',
      'Using intramuscular injections, deep massage, forceful stretching, or high-risk procedures unnecessarily.',
      'Focusing only on imaging and missing airway, dental, vaccination, fall-prevention, and home-adaptation planning.',
    ],
    firstDepartments: [
      'Orthopedics',
      'Pediatric orthopedics',
      'Medical genetics',
      'Rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Photograph toe, thumb, or skeletal findings and keep a timeline of each swelling flare-up.',
      'Bring X-ray, CT, MRI, ultrasound, surgery, and biopsy records; state clearly that FOP is suspected to avoid repeat biopsy.',
      'List triggers such as falls, injections, surgery, dental work, viral illness, and vaccination route.',
      'Track jaw opening, swallowing, breathing, sleep, falls, pain, and daily function.',
    ],
    testsToAskAbout: [
      'ACVR1 genetic testing, especially when the clinical picture is typical but molecular confirmation is needed.',
      'Low-trauma imaging to assess heterotopic ossification; avoid invasive tissue sampling for diagnosis when possible.',
      'Pulmonary function, spine and chest-wall mobility, nutrition, and dental assessment when jaw or chest mobility is limited.',
      'A written flare-up plan, pain plan, vaccination route guidance, and anesthesia or airway precautions.',
    ],
    questionsForDoctor: [
      'Does this pattern fit FOP, and what tests can confirm it without causing trauma?',
      'What should we do during a flare-up, and which procedures should be avoided?',
      'Is palovarotene or a clinical trial relevant for me, and what are the risks and access issues?',
      'How should dental care, vaccines, fall prevention, school or work adaptations, and emergency airway planning be handled?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FOP often begins with congenital malformation of the big toes. In childhood, painful soft-tissue swelling or flare-ups can occur in the neck, back, shoulders, trunk, or limbs, followed by hardening and heterotopic bone that limits joint movement.</p><p>Over time, jaw opening, eating, speech, spine and chest-wall movement, mobility, pain, and breathing can be affected. Trauma, surgery, biopsy, intramuscular injections, and infections can trigger or worsen flare-ups.</p>',
    diagnosis:
      '<p>Typical FOP is confirmed by congenital big-toe malformation, progressive heterotopic ossification, and an ACVR1 pathogenic variant. In many cases, clinical clues are strong enough that the priority is avoiding biopsy or excision done for diagnosis.</p><p>Differential diagnosis includes cancer, aggressive fibromatosis, dermatomyositis, traumatic myositis ossificans, hematoma, and vascular malformation. Suspected FOP should be referred to an experienced center.</p>',
    treatment:
      '<p>First-line management is prevention: avoid unnecessary surgery, biopsy, intramuscular injections, forceful rehabilitation, and high-risk trauma. During flare-ups, clinicians may use short-term anti-inflammatory or pain-control strategies to reduce pain and protect function.</p><p>Palovarotene is FDA-approved for eligible patients of specific ages to reduce the volume of new heterotopic ossification, but it has important risks including embryo-fetal toxicity and premature epiphyseal closure in growing children. Use requires FOP-specialist evaluation.</p>',
    longTermCare:
      '<p>Long-term care includes fall prevention, low-trauma movement and positioning, pulmonary and chest-wall monitoring, nutrition, dental planning, pain care, mental health support, and home, school, or work adaptations. Any surgery, anesthesia, or dental procedure needs advance planning to minimize trauma.</p>',
    fertilityOrFamily:
      '<p>Most FOP is caused by a new ACVR1 variant, but the inheritance mechanism is autosomal dominant. People with FOP who are planning pregnancy should discuss genetic risk, pregnancy risk, medication teratogenicity, delivery, and anesthesia planning.</p>',
    emergencySigns:
      '<p>Seek urgent care for breathing difficulty, severe chest or neck restriction, marked swallowing difficulty, severe pain or rapid loss of function after a fall, high fever with severe flare-up, suspected airway problems, or any need for emergency surgery or anesthesia.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Fibrodysplasia ossificans progressiva',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/fibrodysplasia-ossificans-progressiva/',
    },
    {
      name: 'FDA: FDA approves first treatment for Fibrodysplasia Ossificans Progressiva',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-fibrodysplasia-ossificans-progressiva',
    },
  ],
  symptoms:
    '<p>Classic features are malformed big toes, recurrent painful soft-tissue swelling in childhood, and progressive heterotopic ossification that restricts jaw, shoulder, spine, chest, and limb movement.</p>',
  diagnosis:
    '<p>Diagnosis uses the clinical pattern, imaging showing heterotopic ossification, and ACVR1 testing; suspected FOP should not be biopsied or surgically sampled unnecessarily.</p>',
  treatment:
    '<p>Care focuses on avoiding trauma and triggers, managing flare-ups and pain, preserving function and breathing, and specialist assessment of whether treatments such as palovarotene are appropriate.</p>',
  prognosis:
    '<p>FOP usually progresses over time. Early recognition and trauma avoidance can reduce preventable ossification and function loss, while respiratory, nutrition, dental, and adaptation planning shape quality of life.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 382,
    name: 'fibrodysplasia-ossificans-progressiva-journey.png',
    url: '/images/diseases/fibrodysplasia-ossificans-progressiva-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

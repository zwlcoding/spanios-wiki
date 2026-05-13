import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGeneralizedPustularPsoriasis: DiseaseDraft = {
  ...entity(2033, 'disease-generalized-pustular-psoriasis'),
  name: 'Generalized pustular psoriasis',
  nameEn: 'Generalized pustular psoriasis',
  alias:
    'GPP, von Zumbusch pustular psoriasis, China Second Rare Disease Catalog item 33',
  slug: 'generalized-pustular-psoriasis',
  oneSentence:
    'Generalized pustular psoriasis is a rare but potentially severe systemic inflammatory skin disease that can cause sudden widespread painful red skin, sterile pustules, fever, dehydration, and organ-complication risk.',
  plainName:
    'A severe pustular form of psoriasis that can flare suddenly and needs urgent recognition',
  prevalence:
    "Included in China's second rare disease catalog; it is rare overall, and flare frequency and severity vary widely.",
  quickLook: {
    whatItIs:
      'GPP pustules are usually sterile rather than ordinary infection. IL-36 pathway inflammation is important. Some patients have plaque psoriasis history, while others first present with GPP.',
    whoToSeeFirst:
      'Widespread pustules with fever, chills, skin pain, or systemic illness needs urgent dermatology or emergency evaluation. Severe flares may require hospitalization.',
    isGenetic:
      'Some cases involve IL36RN, CARD14, AP1S3, or related genes, but treatment is usually guided by severity, triggers, and comorbidities.',
    hasTreatment:
      'Acute care aims to control inflammation and prevent complications. Options include spesolimab, cyclosporine, retinoids, methotrexate, or other biologics, chosen by specialists.',
    commonDelayReason:
      'GPP may be mistaken for infection, drug rash, allergy, or routine psoriasis flare. Steroid withdrawal, infection, pregnancy, low calcium, stress, and medications can trigger attacks.',
  },
  patientJourney: {
    whenToSuspect: [
      'Widespread painful red skin and many small pustules develop quickly, with fever, chills, or marked fatigue.',
      'A person with psoriasis worsens suddenly after stopping medicine, infection, pregnancy, or major stress.',
      'Tests show high white count, inflammation, electrolyte changes, or liver/kidney abnormalities.',
      'Pustules recur and cultures are negative or antibiotic response does not fit infection.',
    ],
    commonWrongTurns: [
      'Treating it only as bacterial infection without dermatology review.',
      'Abruptly stopping systemic steroids or immune medicines without a plan.',
      'Missing dehydration, electrolyte, or organ risks because the skin findings dominate attention.',
      'Not documenting triggers and past treatments, making relapse prevention harder.',
    ],
    firstDepartments: [
      'Dermatology',
      'Emergency medicine',
      'Rheumatology',
      'Obstetrics if pregnant',
    ],
    diagnosisChecklist: [
      'Photograph rash onset, spread, pain, fever, and possible triggers.',
      'Bring psoriasis treatments, recent medication changes, infections, pregnancy status, low calcium, and new drug history.',
      'Bring CBC, CRP/ESR, electrolytes, liver/kidney tests, skin biopsy, and culture results.',
      'Record prior flares, hospitalizations, effective treatments, and adverse effects.',
    ],
    testsToAskAbout: [
      'Whether biopsy, pustule culture, and drug-rash or AGEP evaluation are needed.',
      'CBC, inflammatory markers, electrolytes, calcium, liver/kidney function, infection screening, and pregnancy-related assessment.',
      'Whether acute spesolimab or another systemic therapy is appropriate.',
      'A relapse-prevention plan, trigger management, and whether genetic testing is relevant.',
    ],
    questionsForDoctor: [
      'Is this a GPP flare, and does the severity require hospitalization?',
      'Which risks need immediate treatment: inflammation, dehydration, electrolytes, infection, or organ function?',
      'Which acute and maintenance treatments fit my situation, and when will we judge response?',
      'Which medicines should not be stopped suddenly, and what signs mean emergency care next time?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GPP can cause sudden widespread red, burning, or painful skin with many sterile pustules followed by scaling. Flares may include fever, chills, fatigue, fast heart rate, dehydration, low calcium, or liver and kidney abnormalities.</p><p>Some patients also have plaque psoriasis, while others do not. Pregnancy, infection, medications, stress, low calcium, and abrupt systemic steroid withdrawal can trigger flares.</p>',
    diagnosis:
      '<p>Diagnosis is mainly clinical by dermatology review, supported when needed by skin biopsy, cultures, and laboratory tests. Pustules are usually not caused by bacteria, but infection may coexist or trigger the flare.</p><p>Differential diagnosis includes acute generalized exanthematous pustulosis, infectious pustules, drug eruption, exfoliative dermatitis, routine psoriasis worsening, and other autoinflammatory disorders.</p>',
    treatment:
      '<p>Acute treatment aims to rapidly control skin and systemic inflammation and correct dehydration, electrolytes, and organ-function problems. Severe flares often require hospitalization.</p><p>Spesolimab targets the IL-36 receptor and is FDA-approved for GPP; other systemic options include cyclosporine, retinoids, methotrexate, and biologics chosen by specialists.</p>',
    longTermCare:
      '<p>Long-term care includes trigger recognition, avoiding abrupt medication stops, relapse planning, and monitoring infection and drug side effects. Keep photos, medication timelines, lab results, and flare-response records.</p>',
    fertilityOrFamily:
      '<p>GPP can flare during pregnancy. People planning pregnancy or already pregnant should coordinate dermatology and obstetric care. Early, recurrent, or familial disease may prompt genetic counseling.</p>',
    emergencySigns:
      '<p>Seek urgent care for rapidly spreading painful redness, persistent fever, confusion, very fast heart rate, dehydration, low urine output, breathing difficulty, pregnancy-related flare, or abnormal liver/kidney tests.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'FDA: Drug Trials Snapshot - SPEVIGO',
      type: 'official',
      url: 'https://www.fda.gov/drugs/drug-trials-snapshots/drug-trials-snapshots-spevigo',
    },
    {
      name: 'Cleveland Clinic: Generalized Pustular Psoriasis',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/generalized-pustular-psoriasis-gpp',
    },
  ],
  symptoms:
    '<p>Typical flares cause widespread painful red skin and sterile pustules, often with fever, chills, fatigue, dehydration, electrolyte problems, and liver or kidney abnormalities.</p>',
  diagnosis:
    '<p>Diagnosis uses dermatology assessment, sometimes biopsy, cultures, inflammatory markers, electrolytes, and evaluation for infection or drug reactions.</p>',
  treatment:
    '<p>Severe flares often require hospitalization; treatment includes rapid anti-inflammatory therapy, fluids and organ support, and may include spesolimab or other systemic immune therapy.</p>',
  prognosis:
    '<p>Prompt treatment can control many flares; delayed care can lead to dehydration, infection, organ damage, or life-threatening complications. Preventing relapse is important.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 387,
    name: 'generalized-pustular-psoriasis-journey.png',
    url: '/images/diseases/generalized-pustular-psoriasis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

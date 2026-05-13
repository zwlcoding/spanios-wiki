import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTakayasuArteritis: DiseaseDraft = {
  ...entity(2076, 'disease-takayasu-arteritis'),
  name: 'Takayasu arteritis',
  nameEn: 'Takayasu arteritis',
  alias: 'TAK; pulseless disease; China Second Rare Disease Catalog item 76',
  slug: 'takayasu-arteritis',
  oneSentence:
    'Takayasu arteritis is a rare large-vessel vasculitis that mainly affects the aorta and its major branches, causing narrowing, blockage, or aneurysm that can affect blood pressure and blood flow to the arms, brain, heart, and kidneys.',
  plainName:
    'An immune disease where large blood vessels stay inflamed, narrowed, or weakened',
  prevalence:
    "Included in China's second rare disease catalog; it is uncommon worldwide, reported more often in some Asian populations and in young women, but it can affect any sex or age.",
  quickLook: {
    whatItIs:
      'Immune inflammation injures large artery walls. Early illness may look like fever, fatigue, or joint pain; later clues include different arm blood pressures, weak pulses, arm pain with use, dizziness, chest pain, high blood pressure, or vascular bruits.',
    whoToSeeFirst:
      'Rheumatology is the usual starting point for unexplained inflammation, unequal arm blood pressure, weak pulses, bruits, young-onset hypertension, or large-artery narrowing. Stroke-like symptoms, chest pain, or severe hypertension need emergency care.',
    isGenetic:
      'It is usually not a single-gene inherited disease, so relatives are not routinely screened as for a genetic disorder.',
    hasTreatment:
      'Care aims to control vessel inflammation, protect organ blood flow, and treat narrowing complications. Treatment may include corticosteroids, steroid-sparing immune medicines, biologics, and sometimes vascular procedures once inflammation is controlled.',
    commonDelayReason:
      'Early symptoms can be nonspecific, and vascular signs may appear years later. The diagnosis is easy to miss if both arm blood pressures and vascular imaging are not checked.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent low fever, fatigue, weight loss, muscle or joint pain, and raised inflammatory markers in a young or middle-aged person.',
      'Arm fatigue, coolness or pain with use, unequal arm blood pressures, weak pulses, or a vascular bruit.',
      'Unexplained hypertension, dizziness, visual symptoms, fainting, chest pain, shortness of breath, or imaging showing narrowing, blockage, or aneurysm of the aorta or major branches.',
    ],
    commonWrongTurns: [
      'Treating symptoms as infection, anemia, neck problems, or anxiety without connecting systemic inflammation and vascular findings.',
      'Focusing on one narrowed vessel without mapping the full large-vessel pattern and disease activity.',
      'Stopping immune treatment when symptoms improve, or having revascularization during active inflammation when avoidable.',
    ],
    firstDepartments: [
      'Rheumatology',
      'Vascular medicine or vascular surgery',
      'Cardiology or nephrology when blood pressure or organ blood flow is involved',
      'Pediatric rheumatology',
    ],
    diagnosisChecklist: [
      'Create a timeline of fever, fatigue, weight change, limb pain, dizziness, chest pain, hypertension, and treatment responses.',
      'Bring bilateral blood pressure records, CBC, ESR/CRP, chemistry, immune tests, and prior vascular imaging.',
      'Bring CTA, MRA, ultrasound, PET-CT, or angiography reports showing stenosis, occlusion, aneurysm, and vascular territory.',
    ],
    testsToAskAbout: [
      'Whether CTA/MRA, vascular ultrasound, or PET-CT is needed to map large vessels and activity.',
      'How ESR, CRP, CBC, and blood pressure will be used to monitor response and relapse.',
      'Whether giant cell arteritis, atherosclerosis, infectious vasculitis, IgG4-related disease, or connective tissue disease must be ruled out.',
    ],
    questionsForDoctor: [
      'Is my disease currently active inflammation or mainly old vessel damage?',
      'How often should inflammatory markers and vascular imaging be repeated?',
      'Which arm should guide blood pressure treatment, and do I need antiplatelet medicine or vascular intervention review?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Takayasu arteritis can begin with low fever, night sweats, fatigue, weight loss, muscle or joint pain, and anemia-like symptoms. As inflamed vessels narrow, block, or dilate, patients may develop arm pain or weakness with use, weak pulses, unequal arm blood pressure, dizziness, visual symptoms, fainting, chest pain, shortness of breath, and high blood pressure.</p><p>The risks depend on which vessels are involved. Carotid and subclavian disease can affect brain or arm blood flow; renal artery disease can cause severe hypertension; aortic valve or coronary involvement can affect the heart.</p>',
    diagnosis:
      '<p>Diagnosis combines history, examination, pulse and bilateral blood pressure findings, inflammatory markers, and vascular imaging. CTA, MRA, ultrasound, PET-CT, or angiography can show wall thickening, stenosis, occlusion, or aneurysm of the aorta and major branches.</p><p>Clinicians also assess disease activity and organ blood flow, and rule out giant cell arteritis, atherosclerosis, infectious vasculitis, inherited vascular disease, IgG4-related disease, and other connective tissue diseases.</p>',
    treatment:
      '<p>Active disease is often treated first with corticosteroids to control inflammation, then steroid-sparing medicines such as methotrexate, azathioprine, mycophenolate, cyclophosphamide, or biologic therapy depending on relapse risk, vessel involvement, organ risk, and access.</p><p>High blood pressure, heart involvement, and clot risk need parallel management. Severe stenosis, aneurysm, or organ ischemia may require angioplasty, stenting, bypass, or surgery, usually when inflammation is better controlled.</p>',
    longTermCare:
      '<p>Long-term care tracks ESR/CRP, blood pressure, kidney function, heart status, and periodic vascular imaging, plus changes in limb blood flow, dizziness, chest pain, and exercise tolerance. Disease can relapse even when symptoms are quieter.</p><p>Patients should not stop steroids or immune medicines without medical guidance and should plan vaccination, infection prevention, bone protection, pregnancy, and procedures with their team.</p>',
    fertilityOrFamily:
      '<p>Takayasu arteritis is not usually inherited. Before pregnancy, patients should review disease stability, blood pressure, vascular narrowing, medicine safety, and follow-up frequency with rheumatology, obstetrics, and cardiovascular or vascular specialists.</p>',
    emergencySigns:
      '<p>Emergency care is needed for sudden tearing chest or back pain, stroke-like symptoms, fainting, persistent chest pain or shortness of breath, a suddenly cold painful pulseless limb, severe hypertension with headache or vision changes, or fever while taking immune-suppressing medicines.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Mayo Clinic: Takayasu arteritis symptoms and causes',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/takayasus-arteritis/symptoms-causes/dxc-20196667',
    },
    {
      name: 'Mayo Clinic: Takayasu arteritis diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/takayasus-arteritis/diagnosis-treatment/drc-20351340',
    },
  ],
  symptoms:
    '<p>Symptoms can include low fever, fatigue, weight loss, muscle or joint pain, arm pain or weakness with use, unequal arm blood pressure, weak pulses, dizziness, chest pain, high blood pressure, and ischemic complications.</p>',
  diagnosis:
    '<p>Diagnosis combines bilateral pulse and blood pressure findings, inflammatory markers, CTA/MRA/ultrasound/PET-CT vascular imaging, and exclusion of other large-vessel diseases.</p>',
  treatment:
    '<p>Active disease is treated with corticosteroids and steroid-sparing immune or biologic therapy, plus blood pressure and vascular risk management; severe narrowing or aneurysm may need intervention when timing is appropriate.</p>',
  prognosis:
    '<p>Many people do well with specialist care, but relapse, restenosis, hypertension, stroke, and cardiac complications require long-term monitoring.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 430,
    name: 'takayasu-arteritis-journey.png',
    url: '/images/diseases/takayasu-arteritis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

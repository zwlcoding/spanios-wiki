import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePik3caRelatedOvergrowthSyndrome: DiseaseDraft = {
  ...entity(2061, 'disease-pik3ca-related-overgrowth-syndrome'),
  name: 'PIK3CA-related overgrowth spectrum',
  nameEn: 'PIK3CA-related overgrowth spectrum',
  alias:
    'PROS; PIK3CA-related overgrowth syndrome; China Second Rare Disease Catalog item 61',
  slug: 'pik3ca-related-overgrowth-syndrome',
  oneSentence:
    'PIK3CA-related overgrowth spectrum is a group of disorders caused by activating mosaic PIK3CA variants, leading to asymmetric overgrowth of soft tissue, vessels, lymphatics, fat, bone, or brain tissue.',
  plainName:
    'A mosaic genetic overgrowth condition often involving vessels or lymphatics',
  prevalence:
    "Included in China's second rare disease catalog; it is rare overall and often delayed because findings are split across vascular malformation, limb overgrowth, spine, or neurologic clinics.",
  quickLook: {
    whatItIs:
      'PROS is a spectrum, not one single condition. It includes CLOVES, megalencephaly-capillary malformation, fibroadipose overgrowth, segmental limb overgrowth, and related presentations.',
    whoToSeeFirst:
      'Asymmetric limb or body overgrowth, complex vascular or lymphatic malformations, recurrent thrombosis, or pain should be assessed by medical genetics plus a vascular anomalies multidisciplinary team.',
    isGenetic:
      'The mechanism is genetic, but most cases are somatic mosaic and not inherited from parents. A blood test can be negative; affected tissue often gives better diagnostic yield.',
    hasTreatment:
      'Care may include compression, rehabilitation, pain and clot management, procedures, surgery, and for severe systemic cases assessment for the PI3K inhibitor alpelisib where available.',
    commonDelayReason:
      'People may receive separate labels such as hemangioma, lymphatic malformation, lipoma, limb overgrowth, or scoliosis without the PIK3CA mosaic pattern being recognized.',
  },
  patientJourney: {
    whenToSuspect: [
      'One limb, hand, foot, body area, or face is larger from birth or early childhood.',
      'Capillary, venous, or lymphatic malformations cause swelling, leakage, infection, pain, or limited motion.',
      'Overgrowth changes with age and is accompanied by scoliosis, joint problems, fat overgrowth, or neurologic features.',
      'Unexplained thrombosis, clotting abnormalities, bleeding, or repeated operations or procedures.',
    ],
    commonWrongTurns: [
      'Calling the lesion a simple hemangioma without distinguishing vascular malformation and overgrowth spectrum.',
      'Ruling out PROS after a negative blood genetic test without considering low-level mosaicism in affected tissue.',
      'Repeated local surgery without a whole-person plan for clot risk, function, pain, and growth change.',
    ],
    firstDepartments: [
      'Medical genetics',
      'Vascular anomalies multidisciplinary clinic',
      'Orthopedics or plastic surgery',
      'Interventional radiology and rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Bring photos from birth onward plus height, weight, limb length, and circumference measurements.',
      'Bring MRI, ultrasound, vascular imaging, skeletal imaging, operative, and interventional reports.',
      'Record pain, infection, bleeding, thrombosis, mobility limits, and daily function impact.',
      'For prior genetic tests, note whether the sample was blood, saliva, skin, or affected tissue.',
    ],
    testsToAskAbout: [
      'Deep sequencing or digital PCR for PIK3CA in affected tissue, skin, or vascular malformation samples.',
      'MRI and vascular imaging to map soft tissue, vascular, lymphatic, and bone involvement.',
      'Coagulation and thrombosis risk assessment, especially before surgery or with large venous or lymphatic malformations.',
      'Eligibility for alpelisib or other systemic therapy and monitoring for hyperglycemia, mouth sores, diarrhea, and rash.',
    ],
    questionsForDoctor: [
      'Which part of the PROS spectrum fits my findings, and was the genetic sample adequate for mosaicism?',
      'Which issues should be observed, compressed, rehabilitated, treated by procedure or surgery, or treated systemically?',
      'How should thrombosis, bleeding, and anesthesia risk be handled before procedures?',
      'Do relatives or future pregnancies need testing, and how is recurrence risk explained if this is somatic mosaicism?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PROS features depend on when the variant occurred and which tissues carry it. Common clues include localized or asymmetric overgrowth, fat or fibroadipose overgrowth, capillary, venous, or lymphatic malformations, limb length or circumference differences, toe or finger changes, scoliosis, and joint problems.</p><p>Some people have megalencephaly, seizures, developmental delay, or neurologic features. Large vascular or lymphatic malformations can cause pain, infection, leakage, bleeding, coagulation abnormalities, and thrombosis risk. Visible differences can also affect mental health and social participation.</p>',
    diagnosis:
      '<p>Diagnosis combines the clinical spectrum with molecular evidence. PIK3CA variants are usually somatic mosaic, so blood may be negative. Affected skin, overgrown tissue, or vascular malformation tissue often has higher yield and needs sensitive testing.</p><p>Imaging defines extent and planning, including MRI, ultrasound, venous or lymphatic imaging, and skeletal assessment. Differential diagnosis includes Proteus syndrome, PTEN-related disorders, Klippel-Trenaunay syndrome, and other vascular malformation or overgrowth syndromes.</p>',
    treatment:
      '<p>Care aims to improve function, pain, infection, thrombosis risk, and quality of life. Mild disease may use observation, compression, physical therapy, pain care, and periodic imaging. Vascular or lymphatic lesions may be assessed for sclerotherapy, embolization, laser, or surgery, ideally within an integrated plan.</p><p>For severe, progressive, or function-threatening PROS, alpelisib has been approved in some countries for patients age 2 years and older who need systemic therapy. Treatment requires documented PIK3CA involvement and monitoring for hyperglycemia, mouth sores, diarrhea, rash, and infection.</p>',
    longTermCare:
      '<p>Long-term care often involves genetics, orthopedics, vascular anomalies, interventional radiology, plastic surgery, rehabilitation, pain, hematology, and psychology. Follow-up tracks growth, limb length difference, spine, coagulation, thrombosis, infection, pain, and mobility.</p><p>Children may need shoe lifts, braces, school activity planning, and support for appearance-related stress. Surgery, long travel, immobilization, or pregnancy should prompt thrombosis-prevention discussion.</p>',
    fertilityOrFamily:
      '<p>Most PROS results from an early embryonic somatic mosaic variant, so parents are usually not carriers and sibling recurrence risk is generally low. A genetics professional should interpret atypical testing or family history and discuss reproductive counseling.</p>',
    emergencySigns:
      '<p>Urgent care is needed for sudden limb swelling and pain, chest pain or shortness of breath, coughing blood, neurologic symptoms, persistent bleeding, fever with local redness, severe pain, or a rapidly enlarging lesion.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: PIK3CA gene',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/gene/pik3ca/',
    },
    {
      name: 'U.S. FDA: FDA approves alpelisib for PIK3CA-related overgrowth spectrum',
      type: 'official',
      url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-alpelisib-pik3ca-related-overgrowth-spectrum',
    },
  ],
  symptoms:
    '<p>Features include localized or asymmetric overgrowth, vascular or lymphatic malformations, limb length or circumference differences, pain, infection, bleeding, thrombosis, spine and joint problems, and sometimes neurologic involvement.</p>',
  diagnosis:
    '<p>Diagnosis combines the clinical spectrum, imaging, and PIK3CA mosaic testing; a negative blood test does not exclude PROS, and affected tissue often needs sensitive testing.</p>',
  treatment:
    '<p>Care includes compression, rehabilitation, pain and clot management, procedures or surgery, and in severe or progressive cases assessment for PI3K-pathway therapy such as alpelisib.</p>',
  prognosis:
    '<p>Outlook varies by tissue involvement, vascular or lymphatic extent, clot and infection risk, and access to care. Long-term multidisciplinary management can reduce functional harm.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 415,
    name: 'pik3ca-related-overgrowth-syndrome-journey.png',
    url: '/images/diseases/pik3ca-related-overgrowth-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

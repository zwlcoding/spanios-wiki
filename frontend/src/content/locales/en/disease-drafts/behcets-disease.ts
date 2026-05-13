import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBehcetsDisease: DiseaseDraft = {
  ...entity(2009, 'disease-behcets-disease'),
  name: "Behçet's disease",
  nameEn: "Behçet's disease",
  alias:
    'Behcet syndrome; Adamantiades-Behcet disease; Old Silk Route disease; China Second Rare Disease Catalog item 9',
  slug: 'behcets-disease',
  oneSentence:
    "Behçet's disease is a recurrent systemic vasculitis often suggested by mouth ulcers, genital ulcers, skin lesions, and eye inflammation, and it can also affect joints, the gut, nervous system, and large blood vessels.",
  plainName:
    'Recurrent mouth ulcers with eye, skin, or blood vessel inflammation',
  prevalence:
    "Included in China's second rare disease catalog; it is more common in parts of the Mediterranean, Middle East, and Asia, and MedlinePlus Genetics notes it is generally fewer than 1 in 100,000 people in the United States.",
  quickLook: {
    whatItIs:
      "Behçet's is not ordinary canker sores. It is a relapsing vasculitis. Some people have mostly mouth, genital, and skin symptoms; others develop uveitis, blood clots, large-vessel disease, intestinal ulcers, or neurologic involvement.",
    whoToSeeFirst:
      'Start with rheumatology when recurrent mouth ulcers occur with genital ulcers, eye inflammation, skin lesions, or joint symptoms. Eye pain, redness, light sensitivity, or blurred vision needs urgent ophthalmology.',
    isGenetic:
      'It is not usually a single-gene inherited disease. HLA-B51 is associated with risk, but having it does not prove the disease. Diagnosis is based on symptom pattern and exclusion of mimics.',
    hasTreatment:
      'There is no cure, but inflammation can often be controlled. Treatment is organ-based and may include topical therapy, colchicine, corticosteroids, immunosuppressants, or biologics to prevent vision loss, thrombosis, and organ damage.',
    commonDelayReason:
      'Mouth ulcers are common, so patients may see dentistry, dermatology, ophthalmology, or gastroenterology separately for years. Without a relapse diary and organ pattern, diagnosis can be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Painful mouth ulcers recurring several times in a year.',
      'Mouth ulcers plus genital ulcers, especially if scarring occurs.',
      'Red painful eyes, light sensitivity, blurred vision, floaters, or uveitis.',
      'Recurrent erythema nodosum-like tender nodules, acne-like lesions, or unusual skin reaction after needle puncture.',
      'Joint pain, abdominal pain, diarrhea or bleeding, headaches or neurologic symptoms, blood clots, or large-vessel disease.',
    ],
    commonWrongTurns: [
      'Treating it only as recurrent canker sores or stress-related ulcers.',
      'Delaying ophthalmology review for eye inflammation.',
      'Treating intestinal disease alone without linking mouth, genital, skin, and eye clues.',
      'Self-starting long steroid or antibiotic courses that mask symptoms and add side effects.',
    ],
    firstDepartments: [
      'Rheumatology',
      'Ophthalmology or uveitis clinic',
      'Dermatology',
      'Gastroenterology',
    ],
    diagnosisChecklist: [
      'Track mouth ulcer frequency, duration, photos, triggers, and scarring.',
      'Record genital ulcers, rash, eye symptoms, joint pain, abdominal pain, blood in stool, headache, or thrombosis.',
      'Bring ophthalmology reports, inflammatory markers, immune tests, endoscopy or imaging, and pathology results.',
      'Mention geography, family history, HLA-B51 result if available, and medicine responses.',
    ],
    testsToAskAbout: [
      'Slit-lamp and retinal/uveitis eye assessment.',
      'Inflammatory markers, CBC, liver/kidney tests, and tests to exclude mimics.',
      'Whether a pathergy test is appropriate.',
      'Endoscopy and imaging when gastrointestinal symptoms are present.',
      'Neuroimaging or vascular imaging for neurologic symptoms, thrombosis, chest pain, or abdominal vascular symptoms.',
    ],
    questionsForDoctor: [
      'Is this mucocutaneous disease, or is there eye, gut, nervous system, or vascular involvement?',
      'Which symptoms require urgent eye care or emergency care?',
      'Is treatment mainly to reduce ulcers, or to prevent organ damage?',
      'How should I document flares, and which medicines should not be stopped suddenly?',
      'How should medicines be adjusted for pregnancy planning or vaccines?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The most common feature is recurrent painful mouth ulcers. Genital ulcers, skin nodules or acne-like lesions, uveitis, joint pain, and arthritis are also common. Symptoms often flare and remit.</p><p>Some patients develop serious organ involvement, including vision-threatening eye disease, intestinal ulcers and bleeding, blood clots, large-vessel aneurysms or narrowing, and neurologic disease.</p>',
    diagnosis:
      "<p>No single lab test confirms Behçet's disease. Diagnosis is based on recurrent mouth ulcers plus other typical features, while excluding infection, inflammatory bowel disease, lupus, other vasculitis, and medication-related conditions.</p><p>HLA-B51 can support risk assessment but cannot diagnose the disease alone. Pathergy testing, ophthalmology assessment, endoscopy, vascular imaging, or neurologic imaging may be selected based on symptoms.</p>",
    treatment:
      '<p>Treatment depends on involved organs. Mouth, genital, and skin symptoms may be treated with topical medicines, colchicine, or short anti-inflammatory courses. Eye, neurologic, gastrointestinal, or vascular disease often requires stronger immunosuppression or biologic therapy.</p><p>The goal is to reduce flares and pain, but also to prevent blindness, thrombosis, vascular rupture, and organ damage. Rheumatology should coordinate with ophthalmology and other specialists.</p>',
    longTermCare:
      "<p>Long-term care tracks ulcers, skin, eyes, joints, gastrointestinal symptoms, neurologic symptoms, and vascular signs. People with eye disease need regular ophthalmology follow-up even when symptoms improve.</p><p>Patients should know medication side effects, infection risk, and clot warning signs. Tell each specialist about the Behçet's diagnosis so symptoms are not treated in isolation.</p>",
    fertilityOrFamily:
      "<p>Behçet's disease is usually not inherited in a simple pattern. HLA-B51 is a risk factor, but relatives with the variant will not necessarily develop disease.</p><p>Pregnancy and breastfeeding plans should be discussed in advance because some immunosuppressive medicines are not pregnancy-compatible. Planning during stable disease is preferred.</p>",
    emergencySigns:
      '<p>Seek urgent care for eye pain, vision loss, severe light sensitivity, sudden severe headache, confusion, weakness, chest pain, coughing blood, abdominal pain with blood in stool, one-sided limb swelling and pain, or high fever while immunosuppressed.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: "MedlinePlus: Behcet's Syndrome",
      type: 'official',
      url: 'https://medlineplus.gov/behcetssyndrome.html',
    },
    {
      name: 'MedlinePlus Genetics: Behçet disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/behcet-disease/',
    },
  ],
  symptoms:
    '<p>Typical clues include recurrent mouth ulcers, genital ulcers, skin lesions, and uveitis, with possible joint, gut, neurologic, and large-vessel involvement.</p>',
  diagnosis:
    '<p>Diagnosis is based on recurring symptom patterns and exclusion of mimics; eye assessment, pathergy testing, inflammatory markers, endoscopy, or vascular/neurologic imaging are used when relevant.</p>',
  treatment:
    '<p>Treatment is organ-based and may include topical therapy, colchicine, corticosteroids, immunosuppressants, or biologics, especially to prevent eye, vascular, neurologic, or gut complications.</p>',
  prognosis:
    '<p>Many patients can control symptoms with treatment, but eye, neurologic, gut, and large-vessel disease need long-term specialist follow-up.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 363,
    name: 'behcets-disease-journey.png',
    url: '/images/diseases/behcets-disease-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

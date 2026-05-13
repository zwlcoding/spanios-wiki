import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePemphigus: DiseaseDraft = {
  ...entity(2058, 'disease-pemphigus'),
  name: 'Pemphigus',
  nameEn: 'Pemphigus',
  alias:
    'Autoimmune blistering disease; pemphigus vulgaris; pemphigus foliaceus; China Second Rare Disease Catalog item 58',
  slug: 'pemphigus',
  oneSentence:
    'Pemphigus is a group of autoimmune blistering diseases in which antibodies attack connections between skin or mucosal cells, causing recurrent blisters, erosions, and painful mouth or skin wounds.',
  plainName:
    'An autoimmune disease causing recurrent skin and mouth blisters and erosions',
  prevalence:
    "Included in China's second rare disease catalog; pemphigus is rare overall, with pemphigus vulgaris often involving the mouth and pemphigus foliaceus more often affecting superficial skin.",
  quickLook: {
    whatItIs:
      'Pemphigus is not ordinary allergy or infection. Antibodies against desmosomal proteins loosen the connections between skin cells, so minor friction can create blisters or erosions.',
    whoToSeeFirst:
      'Recurrent mouth erosions, flaccid skin blisters, or widespread erosions should be assessed by dermatology, ideally with autoimmune blistering disease or dermatopathology expertise.',
    isGenetic:
      'It is usually not a single-gene inherited disease. Family screening is not routine, though medicines, immune state, and susceptibility can matter.',
    hasTreatment:
      'Treatment usually requires systemic immune therapy. Corticosteroids, rituximab, and other immunosuppressants can control disease, with infection, bone, glucose, and vaccine planning.',
    commonDelayReason:
      'Early mouth lesions can be mistaken for aphthous ulcers, dental disease, Candida, or eczema. Without biopsy and direct immunofluorescence, misdiagnosis can persist.',
  },
  patientJourney: {
    whenToSuspect: [
      'Mouth, throat, genital, or skin erosions are painful, last weeks, or recur repeatedly.',
      'Flaccid blisters rupture easily and leave raw erosions that expand with friction.',
      'Usual treatments for infection, eczema, or mouth ulcers do not help and eating or weight is affected.',
      'Large raw areas, drainage, fever, or infection signs appear.',
    ],
    commonWrongTurns: [
      'Treating as mouth ulcers, eczema, drug eruption, or infection without skin or mucosal biopsy.',
      'Doing routine pathology only and missing direct immunofluorescence from the right site.',
      'Using long-term steroids or immunosuppressants without infection, glucose, bone, liver, and kidney monitoring.',
    ],
    firstDepartments: [
      'Dermatology',
      'Oral medicine or mucosal disease clinic',
      'Dermatopathology or autoimmune blistering disease clinic',
      'Emergency care for widespread erosions or infection',
    ],
    diagnosisChecklist: [
      'Photograph blisters and erosions and record location, duration, pain, eating impact, and treatment response.',
      'Bring dermatology, oral medicine, pathology, immunofluorescence, and antibody reports.',
      'List recent medicines, infections, pregnancy, vaccines, chronic conditions, and immunosuppression.',
      'Record fever, drainage, weight loss, swallowing trouble, and eye or genital involvement.',
    ],
    testsToAskAbout: [
      'Skin or mucosal biopsy for routine pathology plus perilesional biopsy for direct immunofluorescence.',
      'Serum desmoglein 1 and 3 antibodies or indirect immunofluorescence.',
      'Before treatment: hepatitis B, tuberculosis, liver and kidney function, glucose, lipids, bone density, and vaccine review.',
      'Distinguishing pemphigoid, mucous membrane pemphigoid, severe drug reactions, infections, and other mucosal diseases.',
    ],
    questionsForDoctor: [
      'Is this pemphigus vulgaris, foliaceus, or another type, and how much mucosa is involved?',
      'Am I a candidate for rituximab, and how will steroids be tapered or relapses managed?',
      'How should infection, bone loss, high glucose, and stomach or medication side effects be prevented?',
      'Which wound, fever, eye, or pain changes mean emergency care is needed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Pemphigus vulgaris often begins with painful mouth erosions that affect eating, brushing teeth, and speaking, and may involve the throat, nose, eyes, genitals, or anus. Skin blisters are usually flaccid and rupture easily, leaving raw red erosions.</p><p>Pemphigus foliaceus more often causes superficial crusting, scale, and erosions with less mucosal involvement. Widespread skin loss can lead to pain, fluid loss, infection, dehydration, and nutrition problems.</p>',
    diagnosis:
      '<p>Diagnosis requires clinical, pathology, and immune evidence. Doctors usually biopsy the edge of a fresh blister for routine pathology and nearby normal-looking skin or mucosa for direct immunofluorescence.</p><p>Serum anti-Dsg1 and anti-Dsg3 antibodies and indirect immunofluorescence can help classify and monitor disease. Important mimics include bullous pemphigoid, mucous membrane pemphigoid, severe drug reactions, infectious blistering disorders, recurrent aphthous ulcers, and other autoimmune skin diseases.</p>',
    treatment:
      '<p>Treatment aims to stop new blisters, heal erosions, reduce steroid exposure, and prevent infection. Moderate to severe disease often needs systemic corticosteroids plus rituximab or another immunosuppressant; mild disease may combine local therapy and careful mouth care.</p><p>During immune therapy, clinicians monitor infection, glucose, blood pressure, bone loss, stomach issues, liver and kidney function, and blood counts. Wound care, pain control, nutrition, oral hygiene, and avoiding friction are also important. Systemic steroids should not be stopped suddenly without medical guidance.</p>',
    longTermCare:
      '<p>Pemphigus often needs long-term follow-up. Treatment is adjusted based on new blisters, erosion area, antibody levels, side effects, and infection risk. Photos and medication timelines can help detect relapse early.</p><p>Long-term steroids or immunosuppression may require bone density, eye, glucose, lipid, vaccine, and infection-prevention plans. Oral pain may require nutrition support and oral medicine or dental care.</p>',
    fertilityOrFamily:
      '<p>Pemphigus is usually not inherited. People planning pregnancy should discuss timing when disease is controlled because some immunosuppressants need to be stopped or changed in advance, and pregnancy or breastfeeding medication requires specialist review.</p>',
    emergencySigns:
      '<p>Emergency care is needed for widespread skin loss, fever or chills, red swollen draining wounds, dehydration, inability to eat or drink, eye pain or vision change, breathing or swallowing difficulty, or serious infection while immunosuppressed.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus: Pemphigus',
      type: 'official',
      url: 'https://medlineplus.gov/pemphigus.html',
    },
    {
      name: 'American Academy of Dermatology: Pemphigus',
      type: 'patient-organization',
      url: 'https://www.aad.org/public/diseases/a-z/pemphigus-overview',
    },
  ],
  symptoms:
    '<p>Features include recurrent mouth or mucosal erosions, flaccid blisters, raw skin erosions, crusting, pain, eating difficulty, drainage, and secondary infection.</p>',
  diagnosis:
    '<p>Diagnosis relies on clinical findings, skin or mucosal biopsy pathology, direct immunofluorescence, and Dsg1/Dsg3 antibody or indirect immunofluorescence testing.</p>',
  treatment:
    '<p>Treatment includes systemic or topical corticosteroids, rituximab or other immunosuppressants, wound and oral care, infection prevention, nutrition, and pain management.</p>',
  prognosis:
    '<p>Modern immune therapy allows many people to control disease, but relapse and medication side effects are common, so long-term follow-up and infection-risk management matter.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 412,
    name: 'pemphigus-journey.png',
    url: '/images/diseases/pemphigus-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

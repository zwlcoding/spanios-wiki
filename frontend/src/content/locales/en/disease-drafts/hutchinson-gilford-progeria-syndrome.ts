import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHutchinsonGilfordProgeriaSyndrome: DiseaseDraft = {
  ...entity(2041, 'disease-hutchinson-gilford-progeria-syndrome'),
  name: 'Hutchinson-Gilford progeria syndrome',
  nameEn: 'Hutchinson-Gilford progeria syndrome',
  alias:
    'HGPS, progeria, childhood progeria, China Second Rare Disease Catalog item 41',
  slug: 'hutchinson-gilford-progeria-syndrome',
  oneSentence:
    'Hutchinson-Gilford progeria syndrome is an extremely rare childhood premature-aging condition, usually caused by a new LMNA variant, with severe growth failure, loss of body fat, skin and hair changes, and high cardiovascular and stroke risk.',
  plainName:
    'A childhood premature-aging condition where cardiovascular monitoring is central',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics describes it as extremely rare, with most cases caused by new variants rather than inherited from a parent.",
  quickLook: {
    whatItIs:
      'HGPS produces an abnormal lamin A protein that affects cell structure and blood vessel health. Intelligence is usually not affected, but growth, skin, bones, teeth, and cardiovascular health need long-term care.',
    whoToSeeFirst:
      'Severe growth delay, loss of body fat, changing facial features, hair loss, tight skin, or limited joints in a young child should prompt medical genetics, pediatrics, cardiology, or a rare disease clinic.',
    isGenetic:
      'Most cases are due to a new LMNA pathogenic variant. Parents are usually not carriers, but genetic counseling is still important for recurrence risk and reproductive options.',
    hasTreatment:
      'Care centers on multidisciplinary support and cardiovascular risk management. Lonafarnib is used in some countries/regions, but suitability and access require specialist review.',
    commonDelayReason:
      'Early signs can be mistaken for feeding problems, short stature, skin disease, or malnutrition. Normal cognitive development with marked body growth delay is an important clue.',
  },
  patientJourney: {
    whenToSuspect: [
      'After infancy, height and weight fall far behind while communication and cognition are relatively age-appropriate.',
      'Hair loss, visible scalp veins, tight skin, small jaw, delayed teeth, or limited joint movement appear.',
      'Bone imaging shows changes affecting clavicles, fingertips, hips, or other skeletal features.',
      'A child develops high blood pressure, vascular narrowing, chest pain, brief neurologic symptoms, or stroke-like events.',
    ],
    commonWrongTurns: [
      'Treating only nutrition or growth hormone concerns without connecting skin, hair, skeletal, and vascular clues.',
      'Focusing on appearance while missing early heart and brain blood-vessel surveillance.',
      'Delaying LMNA testing and family counseling.',
      'Not alerting dental, surgical, or anesthesia teams to HGPS and vascular risk.',
    ],
    firstDepartments: [
      'Medical genetics',
      'Pediatrics/child health',
      'Pediatric cardiology',
      'Pediatric neurology',
    ],
    diagnosisChecklist: [
      'Bring growth charts, height/weight/head circumference records, feeding history, and developmental assessments.',
      'Collect skin, hair, dental, joint, skeletal imaging, and previous cardiovascular records.',
      'Summarize family history, pregnancy/birth history, and any genetic testing.',
      'Ask about LMNA testing, baseline heart/brain vessel assessment, and a multidisciplinary follow-up plan.',
    ],
    testsToAskAbout: [
      'LMNA genetic testing, with parental testing when useful.',
      'Echocardiogram, ECG, blood pressure, lipids, carotid/brain vessel imaging, and cardiovascular risk review.',
      'Skeletal X-rays, hip assessment, dental care, hearing, and vision screening.',
      'Nutrition, activity, rehabilitation, pain, and anesthesia-risk assessment.',
    ],
    questionsForDoctor: [
      'How often should cardiovascular and stroke risk be checked, and which symptoms require emergency care?',
      'Is lonafarnib or a related program available and appropriate for my child?',
      'What daily activity, diet, dental, and anesthesia precautions are needed?',
      'How should recurrence risk be assessed before another pregnancy?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Children with HGPS often appear normal at birth, then develop severe growth failure, poor weight gain, loss of subcutaneous fat, hair loss, prominent scalp veins, tight skin, small jaw, delayed teeth, and limited joint motion during infancy or early childhood.</p><p>Intelligence is usually relatively preserved. Progressive atherosclerosis creates major risks of heart attack, stroke, and transient ischemic attacks, while bones, hips, teeth, hearing, and vision also need surveillance.</p>',
    diagnosis:
      '<p>Diagnosis combines characteristic clinical features, growth patterns, skeletal and cardiovascular assessment, and confirmation by LMNA genetic testing. Early diagnosis allows earlier vascular monitoring and genetic counseling.</p><p>Mimics include Werner syndrome, other progeroid syndromes, congenital lipodystrophy, short-stature disorders, malnutrition, scleroderma-like disease, and other genetic developmental syndromes.</p>',
    treatment:
      '<p>Care involves pediatrics, medical genetics, cardiology, neurology, nutrition, rehabilitation, orthopedics, dentistry, and psychological support. Preventing and monitoring cardiovascular and cerebrovascular events is central.</p><p>Lonafarnib is approved in some countries for HGPS and certain progeroid laminopathies and may improve disease-related outcomes, but access, indication, and side effects require specialist review.</p>',
    longTermCare:
      '<p>Follow-up tracks growth, blood pressure, lipids, cardiac and brain-vessel imaging, joint motion, hips, teeth, hearing, vision, nutrition, and pain. Families should keep all genetic and imaging records.</p><p>School and caregivers should understand that cognition is usually not affected, but stamina, joints, skin protection, and emergency recognition need support.</p>',
    fertilityOrFamily:
      '<p>Most HGPS is caused by a new variant, so recurrence risk for parents is usually low but not zero. Genetic counseling can explain parental testing, possible germline mosaicism, prenatal diagnosis, and preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Chest pain, shortness of breath, fainting, sudden weakness or speech difficulty, seizure, altered consciousness, severe headache, persistent vomiting, dehydration, or unusual postoperative symptoms require emergency care with HGPS and vascular risk clearly identified.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Hutchinson-Gilford progeria syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hutchinson-gilford-progeria-syndrome/',
    },
    {
      name: 'FDA: First treatment for Hutchinson-Gilford progeria syndrome',
      type: 'official',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-hutchinson-gilford-progeria-syndrome-and-some-progeroid',
    },
  ],
  symptoms:
    '<p>Typical signs include severe growth failure, loss of body fat, hair loss, tight skin, small jaw, delayed teeth, limited joints, preserved cognition, and high heart and stroke risk.</p>',
  diagnosis:
    '<p>Diagnosis combines clinical features, growth and skeletal/cardiovascular assessment, and LMNA genetic testing while excluding other progeroid and growth disorders.</p>',
  treatment:
    '<p>Care focuses on multidisciplinary support, cardiovascular and cerebrovascular monitoring, nutrition, and rehabilitation; lonafarnib may be discussed where available and appropriate.</p>',
  prognosis:
    '<p>Outcome is strongly shaped by cardiovascular and stroke complications. Early diagnosis, surveillance, supportive care, and disease-specific therapy can reduce risk and improve quality of life.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 395,
    name: 'hutchinson-gilford-progeria-syndrome-journey.png',
    url: '/images/diseases/hutchinson-gilford-progeria-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

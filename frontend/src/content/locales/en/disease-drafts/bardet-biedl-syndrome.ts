import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBardetBiedlSyndrome: DiseaseDraft = {
  ...entity(2008, 'disease-bardet-biedl-syndrome'),
  name: 'Bardet-Biedl syndrome',
  nameEn: 'Bardet-Biedl syndrome',
  alias: 'BBS; ciliopathy; China Second Rare Disease Catalog item 8',
  slug: 'bardet-biedl-syndrome',
  oneSentence:
    'Bardet-Biedl syndrome is a rare inherited ciliopathy that can affect the retina, weight, kidneys, hands and feet, pubertal or reproductive development, learning, and several other body systems.',
  plainName:
    'An inherited childhood-onset condition with vision, weight, kidney, and multisystem needs',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 140,000-160,000 newborns in most of North America and Europe, with higher rates in some populations.",
  quickLook: {
    whatItIs:
      'BBS is a multisystem disorder caused by abnormal cilia function. Early clues can include extra fingers or toes, early weight gain, night vision problems, and later retinal degeneration, kidney problems, and learning or developmental support needs.',
    whoToSeeFirst:
      'Start with medical genetics or a rare disease clinic, with early ophthalmology, nephrology, endocrinology/nutrition, and developmental assessment.',
    isGenetic:
      'It is usually autosomal recessive. Parents are often unaffected carriers. Family testing and reproductive counseling are important after diagnosis.',
    hasTreatment:
      'Care focuses on early diagnosis and system-by-system management: low-vision support, kidney monitoring, weight and metabolic care, learning support, endocrine and reproductive health review.',
    commonDelayReason:
      'Clues are split across specialties: polydactyly may be treated at birth, weight gain blamed on lifestyle, night blindness noticed late, and kidney disease may be silent early.',
  },
  patientJourney: {
    whenToSuspect: [
      'Extra fingers or toes at birth or other hand/foot differences.',
      'Marked early childhood weight gain not fully explained by lifestyle.',
      'Night blindness, difficulty in dim light, narrowed visual field, bumping into objects, or retinal degeneration.',
      'Kidney structural differences, abnormal urine tests, high blood pressure, or kidney function changes.',
      'Learning difficulties, developmental delay, reduced smell, pubertal or reproductive development concerns, or family history.',
    ],
    commonWrongTurns: [
      'Stopping follow-up after polydactyly surgery without eye, kidney, or metabolic screening.',
      'Treating weight only as a lifestyle issue and missing a genetic syndrome.',
      'Managing vision as routine myopia or amblyopia without retinal evaluation.',
      'Waiting for kidney symptoms before starting kidney monitoring.',
    ],
    firstDepartments: [
      'Medical genetics',
      'Ophthalmology or retina specialist',
      'Nephrology',
      'Pediatric endocrinology or nutrition',
    ],
    diagnosisChecklist: [
      'Collect birth findings, polydactyly records, growth curves, and developmental milestones.',
      'Bring retina exams, visual fields, ERG/OCT, kidney ultrasound, urinalysis, kidney function, blood pressure, and metabolic results.',
      'Record night blindness, visual field loss, learning issues, smell, pubertal development, and behavior concerns.',
      'Prepare family history, including consanguinity, similar vision or kidney disease, polydactyly, or early obesity.',
    ],
    testsToAskAbout: [
      'BBS genetic testing or an inherited retinal disease/ciliopathy gene panel.',
      'Eye exams including retina evaluation, OCT, visual field, and electroretinography.',
      'Kidney ultrasound, urinalysis, urine protein, creatinine/eGFR, and blood pressure monitoring.',
      'Glucose, lipids, liver tests, sleep apnea, and nutrition/metabolic review.',
      'Sex hormone, puberty, fertility, developmental, and learning assessments.',
    ],
    questionsForDoctor: [
      'Does the pattern fit BBS, and what similar conditions should be ruled out?',
      'What stage are the eye and kidney findings, and how often should they be checked?',
      'What weight-management plan or disease-specific options are appropriate?',
      'What school, low-vision, learning, or behavior supports are needed?',
      'Should parents or siblings have genetic testing or carrier testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>BBS varies widely. Common features include retinal degeneration with night blindness, narrowing visual fields and progressive vision loss, early childhood obesity, extra fingers or toes, kidney structural or functional abnormalities, learning or developmental difficulties, and pubertal or reproductive development problems.</p><p>Other features can include reduced smell, dental or facial differences, short or fused fingers or toes, and heart, liver, or digestive issues. Kidney involvement is often a major driver of long-term risk.</p>',
    diagnosis:
      '<p>Diagnosis combines clinical features, eye and kidney evaluation, developmental and endocrine findings, and genetic testing. Many BBS genes exist, so results should be interpreted with genetics expertise.</p><p>Doctors may distinguish BBS from other inherited retinal disorders, Usher syndrome, Alstrom syndrome, Prader-Willi syndrome, and other ciliopathies. A typical clinical pattern still needs follow-up even if genetic testing is initially inconclusive.</p>',
    treatment:
      '<p>Care is multidisciplinary. Ophthalmology provides retinal monitoring and low-vision support. Nephrology tracks kidney function, urine, and blood pressure. Endocrinology and nutrition manage weight, metabolic risk, and puberty. Developmental, educational, rehabilitation, and mental health support are often needed.</p><p>Medication, weight-specific therapy, or surgery should be individualized by specialists. BBS should not be reduced to a simple weight problem.</p>',
    longTermCare:
      '<p>Long-term follow-up should cover vision, kidneys, blood pressure, metabolism, sleep, learning, mental health, and reproductive health. A yearly checklist helps prevent silent problems from being missed.</p><p>As vision changes, school and work may need large-print materials, electronic magnification, orientation and mobility training, and accessibility support.</p>',
    fertilityOrFamily:
      '<p>BBS is usually autosomal recessive. Parents are typically carriers, and each pregnancy can have a recurrence risk. Family testing and genetic counseling are recommended after diagnosis.</p><p>Families planning another pregnancy can discuss carrier testing, prenatal diagnosis, or preimplantation genetic testing. Adults with BBS should also receive reproductive and endocrine counseling.</p>',
    emergencySigns:
      '<p>Seek care for sudden major vision change or severe eye pain, reduced urine, swelling, very high blood pressure, persistent vomiting or dehydration, blood sugar-related confusion, severe headache, chest pain, or breathing pauses during sleep.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Bardet-Biedl syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/bardet-biedl-syndrome',
    },
  ],
  symptoms:
    '<p>Common signs include childhood night blindness and progressive vision loss, early weight gain, extra fingers or toes, kidney abnormalities, learning or developmental issues, reproductive development concerns, and multisystem involvement.</p>',
  diagnosis:
    '<p>Diagnosis combines clinical findings, eye and kidney tests, metabolic/endocrine and developmental assessment, and BBS-related genetic testing.</p>',
  treatment:
    '<p>Care focuses on low-vision support, kidney and blood pressure monitoring, weight and metabolic management, learning support, endocrine care, and genetic counseling.</p>',
  prognosis:
    '<p>Long-term outlook depends on kidney, vision, and metabolic involvement. Early multisystem follow-up can reduce preventable complications and improve quality of life.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 362,
    name: 'bardet-biedl-syndrome-journey.png',
    url: '/images/diseases/bardet-biedl-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

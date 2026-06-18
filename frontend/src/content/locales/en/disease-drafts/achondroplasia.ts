import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAchondroplasia: DiseaseDraft = {
  ...entity(2001, 'disease-achondroplasia'),
  name: 'Achondroplasia',
  nameEn: 'Achondroplasia',
  alias: 'ACH; short-limbed dwarfism; China Second Rare Disease Catalog item 1',
  slug: 'achondroplasia',
  oneSentence:
    'Achondroplasia is a skeletal growth disorder usually caused by an activating FGFR3 variant, leading to short-limbed short stature and a need for lifelong monitoring of breathing, spine, neurologic, hearing, and orthopedic complications.',
  plainName: 'A genetic bone growth condition with short limbs',
  prevalence:
    "Included in China's second rare disease catalog; international estimates are commonly about 1 in 15,000-40,000 newborns.",
  quickLook: {
    whatItIs:
      'Achondroplasia is not caused by poor nutrition or calcium deficiency. It affects how cartilage is converted into bone, especially in the arms and legs. Intelligence is usually not directly affected, but medical follow-up is important because complications can involve breathing during sleep, the spine, ears, and nerves.',
    whoToSeeFirst:
      'For babies and children, start with pediatric orthopedics, pediatric endocrinology, or medical genetics. Ongoing care often also involves rehabilitation, ENT, sleep medicine, neurosurgery, and orthopedics.',
    isGenetic:
      'It is usually caused by an FGFR3 variant and follows autosomal dominant inheritance. Many cases are new variants, but genetic counseling is important when a parent is affected or the family is planning another pregnancy.',
    hasTreatment:
      'Care focuses on complication screening, rehabilitation, and practical adaptation. Some regions have growth-directed treatment options for children; eligibility and risk should be reviewed by a specialist team.',
    commonDelayReason:
      'It may be mistaken for familial short stature, calcium deficiency, or late growth. Focusing only on height can miss sleep apnea, hearing problems, spinal narrowing, or neurologic warning signs.',
  },
  patientJourney: {
    whenToSuspect: [
      'Short arms and legs, especially upper arms and thighs, with a relatively average trunk.',
      'Large head size, prominent forehead, low nasal bridge, short fingers, or a trident hand shape.',
      'Height tracking far below peers while social communication and intelligence are otherwise typical.',
      'Snoring, pauses in breathing, feeding difficulty, poor head control, or concern about foramen magnum narrowing in infancy.',
      'Recurrent ear infections, bowed legs, back or leg pain, numbness, or limited walking distance later in life.',
    ],
    commonWrongTurns: [
      'Treating it as calcium deficiency, nutrition problems, or general short stature without skeletal assessment.',
      'Trying unproven height products, traction, or aggressive stretching.',
      'Watching height alone while missing sleep, hearing, spinal, or neurologic risks.',
      'Using only standard growth charts instead of achondroplasia-specific follow-up tools when available.',
    ],
    firstDepartments: [
      'Pediatric orthopedics',
      'Medical genetics',
      'Pediatric endocrinology',
      'Rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Bring birth length, weight, head circumference, limb proportion, and growth records.',
      'Collect prenatal ultrasound, skeletal X-ray, head or spine imaging, sleep study, and hearing results if available.',
      'Record snoring, breathing pauses, feeding trouble, recurrent ear infections, leg pain, numbness, bladder or bowel changes, and motor development.',
      'Ask whether FGFR3 testing and parental testing are appropriate.',
    ],
    testsToAskAbout: [
      'Skeletal X-rays and growth assessment.',
      'FGFR3 genetic testing, with parental testing when needed.',
      'Head, foramen magnum, or spine imaging when symptoms or age-related screening indicate it.',
      'Sleep study, ENT review, and hearing assessment.',
      'Spine evaluation when there is pain, numbness, weakness, or walking limitation.',
    ],
    questionsForDoctor: [
      'Does the pattern fit achondroplasia, and what similar skeletal or endocrine conditions should be ruled out?',
      'Which complications should be screened at this age and how often?',
      'Which activities, sports, or therapy exercises are recommended or discouraged?',
      'Are any growth-directed treatments appropriate, and what are the realistic benefits and risks?',
      'What does this mean for future pregnancies or family testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Typical features include disproportionate short stature, with a relatively average trunk and shorter upper arms and thighs. Other common signs include macrocephaly, prominent forehead, midface hypoplasia, short fingers, limited elbow extension, bowed legs, recurrent ear infections, hearing problems, and sleep apnea.</p><p>Complications that need attention include foramen magnum narrowing in infancy, spinal cord or nerve compression, hydrocephalus in some patients, and lumbar spinal stenosis later in life.</p>',
    diagnosis:
      '<p>Diagnosis is based on body proportions, skeletal imaging, and often FGFR3 genetic testing. Imaging helps confirm the skeletal pattern, while genetic testing supports counseling and family planning.</p><p>Specialists may also screen for complications with head or spine imaging, sleep studies, hearing tests, and orthopedic follow-up. Similar skeletal dysplasias, endocrine short stature, rickets, and nutrition-related growth problems may need to be considered.</p>',
    treatment:
      '<p>The goal is not simply to increase height, but to prevent avoidable complications and improve function. Care may include regular growth and head circumference monitoring, sleep and hearing evaluation, rehabilitation, orthopedic assessment, and treatment of neurologic or spinal compression when needed.</p><p>Growth-directed medicines or surgery should be considered only with an experienced specialist team. Avoid unproven height products or forceful stretching devices.</p>',
    longTermCare:
      '<p>Long-term care spans childhood and adulthood. Children need monitoring for breathing, ears, motor development, spine, and school participation. Adults may need care for spinal stenosis, chronic pain, weight, work adaptation, and mobility.</p><p>A concise medical summary can help during emergency visits or transfers, including diagnosis, genetic result, prior imaging, anesthesia or surgery notes, warning signs, and the main specialist contacts.</p>',
    fertilityOrFamily:
      '<p>Achondroplasia is usually autosomal dominant. Many children are born to average-height parents because of a new FGFR3 variant. If one parent is affected, each pregnancy can inherit the variant.</p><p>When two affected adults plan a pregnancy, genetic counseling is especially important because inheriting two pathogenic FGFR3 variants can cause a severe, often lethal skeletal condition. Prenatal diagnosis or preimplantation genetic testing may be discussed.</p>',
    emergencySigns:
      '<p>Seek urgent care for pauses in breathing, blue color, marked feeding difficulty, unusual sleepiness, seizures, new weakness, rapidly worsening numbness, loss of bladder or bowel control, severe headache, repeated vomiting, or sudden vision or consciousness changes.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Achondroplasia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/achondroplasia/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Common signs include short-limbed disproportionate short stature, large head size, prominent forehead, short fingers, and possible sleep, ear, hearing, spine, or nerve complications.</p>',
  diagnosis:
    '<p>Diagnosis uses body proportions, skeletal imaging, FGFR3 genetic testing, and age-appropriate screening for sleep, hearing, head/neck, and spine complications.</p>',
  treatment:
    '<p>Care focuses on complication screening, rehabilitation, adaptation, and specialist review of growth-directed, orthopedic, or neurosurgical options when appropriate.</p>',
  prognosis:
    '<p>Many people live full lives, but ongoing follow-up for breathing, hearing, spine, weight, and pain can reduce preventable complications.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [38],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 355,
    name: 'achondroplasia-journey.png',
    url: '/images/diseases/achondroplasia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

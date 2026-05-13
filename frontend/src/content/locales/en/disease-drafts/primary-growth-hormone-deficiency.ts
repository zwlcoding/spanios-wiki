import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryGrowthHormoneDeficiency: DiseaseDraft = {
  ...entity(2064, 'disease-primary-growth-hormone-deficiency'),
  name: 'Primary growth hormone deficiency',
  nameEn: 'Primary growth hormone deficiency',
  alias:
    'GHD; primary GH deficiency; China Second Rare Disease Catalog item 64',
  slug: 'primary-growth-hormone-deficiency',
  oneSentence:
    'Primary growth hormone deficiency is insufficient growth hormone secretion from pituitary or hypothalamic causes, most often noticed in children as slow growth and marked short stature.',
  plainName: 'A growth hormone shortage that makes children grow too slowly',
  prevalence:
    "Included in China's second rare disease catalog; childhood GHD is uncommon, but should be assessed when growth velocity is clearly low or the height curve crosses downward.",
  quickLook: {
    whatItIs:
      'Growth hormone is made by the pituitary and supports linear growth, body composition, and metabolism. Primary deficiency may be congenital, genetic, pituitary-development related, acquired, or idiopathic.',
    whoToSeeFirst:
      'A child who is much shorter than peers, grows slowly each year, or drops across height percentiles should see pediatric endocrinology rather than only waiting for late growth.',
    isGenetic:
      'Some cases involve GH1, GHRHR, POU1F1, PROP1, HESX1, and other genes or pituitary malformations. Testing depends on age, severity, other pituitary deficits, and family history.',
    hasTreatment:
      'Confirmed GHD can be treated with recombinant human growth hormone. Earlier treatment before growth plates close gives a better chance of improving adult height.',
    commonDelayReason:
      'Families may assume inherited short stature or late puberty. Without serial growth measurements, bone age, and chronic disease exclusion, the treatment window can be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'A child grows much less than expected per year, drops across height percentiles, or is below the 3rd percentile.',
      'Short stature with normal proportions, relatively preserved weight, youthful facial appearance, delayed teeth, or delayed puberty.',
      'Neonatal or infant hypoglycemia, prolonged jaundice, micropenis, undescended testes, or midline facial differences.',
      'History of brain tumor, surgery, radiation, severe head trauma, or pituitary/hypothalamic imaging abnormality.',
    ],
    commonWrongTurns: [
      'Judging from one height measurement rather than growth velocity and parental target height.',
      'Starting treatment discussion before excluding hypothyroidism, malnutrition, chronic bowel, kidney, anemia, and genetic syndromes.',
      'Using a random GH level alone, even though GH is secreted in pulses.',
    ],
    firstDepartments: [
      'Pediatric endocrinology',
      'Endocrinology',
      'Medical genetics for severe or familial cases',
      'Neurosurgery or ophthalmology for pituitary mass or visual concerns',
    ],
    diagnosisChecklist: [
      'Bring at least 6 to 12 months of height and weight records, birth length and weight, and parental heights.',
      'List puberty signs, nutrition, sleep, exercise, chronic illness, medicines, and family height history.',
      'Bring bone age, IGF-1, IGFBP-3, thyroid, liver, kidney, CBC, celiac or inflammation screening results.',
      'Bring GH stimulation test and pituitary MRI reports if already done.',
    ],
    testsToAskAbout: [
      'Bone age and growth velocity assessment with parental target height.',
      'IGF-1, IGFBP-3, and screening for chronic illness or other endocrine causes.',
      'Formal GH stimulation testing, sometimes with two stimulation methods.',
      'Pituitary MRI and other pituitary hormones, with genetic testing for severe or familial cases.',
    ],
    questionsForDoctor: [
      'Is this true GHD or constitutional delay, familial short stature, or another chronic disease?',
      'Is the treatment goal growth velocity or adult height, and how long will treatment be assessed?',
      'How will IGF-1, bone age, thyroid, glucose, intracranial hypertension, and hip problems be monitored?',
      'Are other pituitary hormones deficient, and is adrenal or thyroid replacement needed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The main childhood clue is slow growth, not a single short height measurement. Children often have normal body proportions, relatively preserved weight, youthful facial appearance, increased abdominal fat, delayed tooth eruption, or delayed puberty.</p><p>Severe congenital or combined pituitary hormone deficiency may cause neonatal hypoglycemia, prolonged jaundice, micropenis, undescended testes, or midline facial findings. Acquired causes may include headache, vision changes, diabetes insipidus, or other pituitary hormone problems.</p>',
    diagnosis:
      '<p>Diagnosis begins with accurate measurements and the growth chart. Clinicians calculate growth velocity, height SDS, parental target height, and bone age while excluding malnutrition, chronic disease, hypothyroidism, Cushing syndrome, genetic syndromes, and normal pubertal variation.</p><p>IGF-1 and IGFBP-3 provide clues, but confirmation usually requires formal GH stimulation testing. Pituitary MRI looks for pituitary stalk interruption, malformations, or tumors. Genetic testing may help when multiple hormone deficits or family history exists.</p>',
    treatment:
      '<p>Confirmed GHD is commonly treated with recombinant human growth hormone by subcutaneous injection over years, with dose adjustment based on weight, IGF-1, growth response, and side effects. Earlier treatment, more remaining bone-age growth potential, and good adherence improve height benefit.</p><p>Monitoring includes thyroid and adrenal function, glucose, IGF-1, bone age, scoliosis, intracranial hypertension, and slipped capital femoral epiphysis. People with tumor history or pituitary lesions need coordinated safety surveillance.</p>',
    longTermCare:
      '<p>Follow-up usually every 3 to 6 months reviews height, weight, growth velocity, injection adherence, and adverse effects, with periodic bone age and labs. Puberty requires careful assessment of bone-age advancement and remaining height window.</p><p>After adult height, some childhood-onset GHD needs retesting for persistent adult GHD, especially with structural pituitary disease or multiple hormone deficiencies.</p>',
    fertilityOrFamily:
      '<p>Most isolated GHD is idiopathic and not clearly inherited. Multiple affected relatives, consanguinity, severe neonatal hypoglycemia, or combined pituitary hormone deficiency should prompt genetic counseling and testing discussion. Puberty and fertility hormones also need follow-up.</p>',
    emergencySigns:
      '<p>During treatment, urgent review is needed for severe headache with vomiting or blurred vision, limp or hip/knee pain, marked swelling, severe hypoglycemia, adrenal crisis symptoms, or vision changes from pituitary disease.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Growth hormone deficiency - children',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001176.htm',
    },
    {
      name: 'Endocrine Society: Growth Hormone Deficiency',
      type: 'patient-organization',
      url: 'https://www.endocrine.org/patient-engagement/endocrine-library/growth-hormone-deficiency',
    },
  ],
  symptoms:
    '<p>Main features are slow growth, downward height percentile crossing, proportionate short stature, youthful appearance, delayed bone age or puberty, and in severe cases neonatal hypoglycemia or multiple pituitary hormone deficits.</p>',
  diagnosis:
    '<p>Diagnosis combines serial growth charts, bone age, IGF-1/IGFBP-3, exclusion of chronic and endocrine diseases, formal GH stimulation testing, pituitary MRI, and sometimes genetic testing.</p>',
  treatment:
    '<p>Confirmed GHD can be treated long term with recombinant growth hormone, with monitoring of growth velocity, IGF-1, bone age, thyroid and adrenal function, glucose, intracranial pressure, and hip problems.</p>',
  prognosis:
    '<p>Earlier diagnosis and treatment before growth plates close improve the chance of better adult height; structural pituitary disease or multiple hormone deficits need longer endocrine follow-up.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 418,
    name: 'primary-growth-hormone-deficiency-journey.png',
    url: '/images/diseases/primary-growth-hormone-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

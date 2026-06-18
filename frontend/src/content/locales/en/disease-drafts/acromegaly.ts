import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAcromegaly: DiseaseDraft = {
  ...entity(2003, 'disease-acromegaly'),
  name: 'Acromegaly',
  nameEn: 'Acromegaly',
  alias:
    'Growth hormone excess; GH/IGF-1 excess; China Second Rare Disease Catalog item 3',
  slug: 'acromegaly',
  oneSentence:
    'Acromegaly is a chronic endocrine disorder caused by long-term excess growth hormone and IGF-1, usually from a pituitary adenoma, leading to gradual changes in hands, feet, facial features, soft tissue, and metabolic health.',
  plainName:
    'A hormone disorder that slowly enlarges hands, feet, and facial features in adults',
  prevalence:
    "Included in China's second rare disease catalog; NIDDK notes an estimated 3-14 diagnosed cases per 100,000 people.",
  quickLook: {
    whatItIs:
      'In adults, excess growth hormone does not make people taller because growth plates are closed. Instead, soft tissue and bones of the hands, feet, and face enlarge gradually, with higher risks of diabetes, high blood pressure, sleep apnea, heart disease, and colon polyps.',
    whoToSeeFirst:
      'Start with endocrinology. Severe headache, visual field loss, or concern for pituitary apoplexy needs urgent emergency or neurosurgical review.',
    isGenetic:
      'Most cases are not inherited. Young onset or a family history of pituitary or other endocrine tumors should prompt discussion of genetic counseling.',
    hasTreatment:
      'Most people have treatable disease. Options include transsphenoidal pituitary surgery, medicines that reduce or block GH/IGF-1 effects, radiation, and treatment of complications.',
    commonDelayReason:
      'Changes are slow and may be attributed to aging, weight gain, dental problems, arthritis, or snoring. Old photos and ring or shoe size changes often help reveal the pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'Rings no longer fit or shoe size/width increases in adulthood.',
      'Brow, jaw, nose, lips, or tongue gradually enlarge, with widening tooth spaces or bite changes.',
      'Excess sweating, oily thick skin, deeper voice, headaches, visual field changes, or loud snoring.',
      'High blood pressure, diabetes, sleep apnea, carpal tunnel syndrome, joint pain, or colon polyps occur together.',
      'Family or friends notice slow facial change when comparing old photos.',
    ],
    commonWrongTurns: [
      'Treating dental, sleep, joint, weight, or skin symptoms separately without connecting them.',
      'Relying on a random GH level without IGF-1 and confirmatory testing.',
      'Focusing only on tumor size while missing cardiovascular, metabolic, sleep, and colon risks.',
      'Stopping follow-up after symptoms improve without monitoring IGF-1 and recurrence risk.',
    ],
    firstDepartments: [
      'Endocrinology',
      'Neurosurgery',
      'Ophthalmology',
      'Sleep medicine or pulmonology',
    ],
    diagnosisChecklist: [
      'Bring old photos, ring and shoe size changes, bite changes, and a symptom timeline.',
      'Bring IGF-1, GH, pituitary MRI, visual field, and other endocrine test results.',
      'Record headache, vision change, snoring, daytime sleepiness, blood pressure, glucose, joint pain, and hand numbness.',
      'Note any family history of pituitary, parathyroid, pancreatic, or other endocrine tumors.',
    ],
    testsToAskAbout: [
      'IGF-1 interpreted by age and sex.',
      'Oral glucose GH suppression test.',
      'Pituitary contrast MRI, and further workup for nonpituitary causes if needed.',
      'Visual field testing and pituitary hormone panel.',
      'Screening for sleep apnea, heart/metabolic disease, colon polyps, and thyroid nodules as recommended.',
    ],
    questionsForDoctor: [
      'Have GH and IGF-1 reached the treatment target?',
      'Is the tumor size and position suitable for surgery?',
      'Which complications need screening now: sleep, heart, glucose, blood pressure, colon, or vision?',
      'Which physical changes can improve and which bone changes may be permanent?',
      'How often should MRI and hormone tests be repeated, and what suggests recurrence?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Acromegaly usually develops slowly over years. Common signs include enlarged hands and feet, rings or shoes no longer fitting, coarser facial features, prominent brow or jaw, enlarged lips, nose or tongue, widened tooth spaces, thick oily skin, sweating, deeper voice, headaches, joint pain, carpal tunnel syndrome, snoring, and daytime sleepiness.</p><p>It also increases the risk of high blood pressure, diabetes, heart disease, sleep apnea, and colon polyps. A large pituitary tumor can cause visual field loss; sudden severe headache and vision changes may suggest pituitary apoplexy.</p>',
    diagnosis:
      '<p>Screening usually starts with IGF-1 because it reflects longer-term GH activity. Confirmation often uses an oral glucose GH suppression test. In people without acromegaly, glucose suppresses GH; in acromegaly, GH does not suppress enough.</p><p>After biochemical confirmation, pituitary MRI looks for an adenoma. Doctors also assess vision, other pituitary hormones, and systemic complications. If no pituitary tumor is found, nonpituitary sources may be investigated.</p>',
    treatment:
      '<p>Treatment aims to lower GH and IGF-1, control tumor growth, improve symptoms, and reduce metabolic and cardiovascular risk. Many patients are first evaluated for transsphenoidal pituitary surgery. Medicines or radiation may be used when surgery is not enough or not possible.</p><p>Care also includes management of diabetes, hypertension, sleep apnea, arthritis, heart disease, and colon polyps.</p>',
    longTermCare:
      '<p>Long-term follow-up includes IGF-1/GH testing, pituitary MRI, visual field checks, and pituitary hormone monitoring. Soft tissue swelling and sweating may improve, while established bone enlargement may not fully reverse.</p><p>Regular checks for blood pressure, glucose, lipids, heart health, sleep apnea, colon screening, hand numbness, joint pain, mood, and quality of life are important.</p>',
    fertilityOrFamily:
      '<p>Most acromegaly is not inherited. Young onset, family history of pituitary tumors, or other endocrine tumors should prompt discussion of genetic syndromes.</p><p>Patients planning pregnancy should review medicines, tumor size, visual risk, and pregnancy monitoring with endocrinology.</p>',
    emergencySigns:
      '<p>Seek emergency care for sudden severe headache, vision loss, double vision, confusion, repeated vomiting, chest pain, or severe breathing trouble, especially in someone with a known pituitary macroadenoma.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Acromegaly',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/acromegaly',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Common clues include enlarged hands and feet, coarser facial features, widened tooth spaces, sweating, thick skin, deeper voice, headaches, vision problems, snoring, joint pain, hand numbness, and abnormal glucose or blood pressure.</p>',
  diagnosis:
    '<p>Diagnosis usually uses IGF-1, oral glucose GH suppression testing, and pituitary MRI, plus screening for vision, pituitary function, cardiovascular, metabolic, sleep, and colon complications.</p>',
  treatment:
    '<p>Treatment may include pituitary surgery, medicines that lower or block GH/IGF-1 effects, radiation when needed, and management of diabetes, hypertension, and sleep apnea.</p>',
  prognosis:
    '<p>Good biochemical control and complication management can greatly improve health and life expectancy; delayed diagnosis increases irreversible bone and cardiometabolic risks.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [40],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 357,
    name: 'acromegaly-journey.png',
    url: '/images/diseases/acromegaly-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine'],
};

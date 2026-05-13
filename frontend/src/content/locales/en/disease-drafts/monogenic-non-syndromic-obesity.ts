import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMonogenicNonSyndromicObesity: DiseaseDraft = {
  ...entity(2050, 'disease-monogenic-non-syndromic-obesity'),
  name: 'Monogenic non-syndromic obesity',
  nameEn: 'Monogenic non-syndromic obesity',
  alias:
    'Monogenic obesity; non-syndromic genetic obesity; China Second Rare Disease Catalog item 50',
  slug: 'monogenic-non-syndromic-obesity',
  oneSentence:
    'Monogenic non-syndromic obesity is early-onset severe obesity caused by a single-gene change that often affects hunger, fullness, and energy regulation rather than willpower.',
  plainName: 'Inherited early-onset obesity often marked by intense hunger',
  prevalence:
    "Included in China's second rare disease catalog; it is rare overall, but should be considered in children with severe rapid weight gain before age 5 and persistent hyperphagia.",
  quickLook: {
    whatItIs:
      'Many forms affect the leptin-melanocortin pathway. A child may be normal weight at birth but develop rapid early weight gain, poor satiety, and repeated food-seeking.',
    whoToSeeFirst:
      'Start with pediatric endocrinology or endocrinology and metabolism, with nutrition, psychology, and medical genetics support. The goal is to identify biology and reduce blame.',
    isGenetic:
      'Genes can include LEP, LEPR, POMC, PCSK1, MC4R, SIM1, and others. Inheritance depends on the gene, and results may affect family testing and treatment options.',
    hasTreatment:
      'Care includes non-stigmatizing lifestyle support, complication screening, and psychological and family support. Some people with POMC, PCSK1, or LEPR deficiency may be eligible for setmelanotide where available.',
    commonDelayReason:
      'Families may be told the problem is simply overeating or poor self-control, while intense hunger, early onset, family history, and endocrine clues are missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Rapid, severe weight gain before age 5 with intense persistent hunger, poor satiety, or repeated food-seeking.',
      'The family has made sustained diet and activity changes, but weight gain and hunger remain unusually strong.',
      'Endocrine clues such as red hair and adrenal issues for POMC, hypoglycemia or chronic diarrhea for PCSK1, or puberty or immune issues for LEPR.',
      'Family history of early severe obesity, consanguinity, or similarly affected siblings.',
    ],
    commonWrongTurns: [
      'Focusing on willpower or blaming the family instead of evaluating biology behind early severe obesity and hyperphagia.',
      'Giving general weight advice without screening for sleep apnea, fatty liver, glucose metabolism, blood pressure, and mental health.',
      'Assuming all genetic obesity is syndromic and overlooking single-gene non-syndromic forms without obvious malformations or intellectual disability.',
    ],
    firstDepartments: [
      'Pediatric endocrinology',
      'Endocrinology and metabolism',
      'Medical genetics',
      'Nutrition and psychology support clinic',
    ],
    diagnosisChecklist: [
      'Bring height, weight, and BMI curves from birth onward and note the age when rapid gain began.',
      'Record hunger, food-seeking, night eating, satiety, family interventions tried, and barriers to activity.',
      'Bring glucose, insulin, lipid, liver, thyroid, cortisol, sleep breathing, and liver imaging results.',
      'Prepare family weight history, consanguinity, puberty, immune, diarrhea, hypoglycemia, and adrenal history.',
    ],
    testsToAskAbout: [
      'Growth chart review and endocrine evaluation to exclude hypothyroidism, Cushing syndrome, hypothalamic injury, and medication-related weight gain.',
      'Genetic testing for monogenic obesity genes such as LEP, LEPR, POMC, PCSK1, MC4R, and SIM1.',
      'Complication screening: glucose tolerance or HbA1c, lipids, liver tests and fatty liver, blood pressure, sleep apnea, joints, and mental health.',
      'If a treatable pathway is found, whether setmelanotide or a clinical study is available and appropriate.',
    ],
    questionsForDoctor: [
      'Do these signs suggest monogenic obesity rather than common polygenic or syndromic obesity?',
      'How would genetic results change treatment, family testing, and reproductive counseling?',
      'How can we manage intense hunger while protecting the child from shame and anxiety?',
      'Which complications should be screened for, and are targeted medicines or studies available?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Monogenic non-syndromic obesity usually causes rapid severe weight gain beginning in infancy or early childhood, often with marked hyperphagia, poor satiety, repeated food-seeking, and hunger soon after eating. There may be no obvious syndromic facial features or multiple malformations, which can lead to misunderstanding.</p><p>Different genes can bring different clues. POMC deficiency may involve red hair, pale skin, and adrenal insufficiency; PCSK1 deficiency can include hypoglycemia, diarrhea, or endocrine problems; LEPR deficiency may involve puberty or immune issues. MC4R-related obesity is relatively more common and can feature early severe obesity and accelerated linear growth.</p>',
    diagnosis:
      '<p>Diagnosis starts with the growth curve: age at onset, BMI trajectory, hunger pattern, and family history are central. Clinicians also exclude hypothyroidism, Cushing syndrome, hypothalamic disease, medication-related weight gain, syndromic obesity, and common polygenic obesity.</p><p>Genetic testing is worth discussing when severe obesity starts before age 5, hyperphagia is prominent, family clustering is present, or endocrine clues exist. Results should be interpreted by genetics or endocrinology teams because gene, variant classification, and inheritance pattern affect diagnostic certainty, relative testing, and treatment choices.</p>',
    treatment:
      '<p>Care should not start with blame. Core management includes structured nutrition, supportive home environments, activity matched to ability, sleep support, psychological care, and school coordination, while screening for glucose abnormalities, fatty liver, high blood pressure, dyslipidemia, sleep apnea, joint pain, and emotional distress.</p><p>Targeted treatment is changing care for some gene-defined forms. Setmelanotide has been approved in some countries for genetically confirmed obesity due to POMC, PCSK1, or LEPR deficiency; eligibility depends on the genetic result, age, local approval, and access. Severe cases may also need individualized discussion of medicines, metabolic surgery, or research options.</p>',
    longTermCare:
      '<p>Long-term care should aim to reduce complications and improve quality of life, not focus only on the number on the scale. Follow-up can track height, weight, waist, blood pressure, sleep, liver and metabolic markers, bullying, eating distress, anxiety, depression, and family stress.</p><p>Families can work with clinicians on realistic environmental strategies such as regular meals, reducing high-trigger food exposure, protecting sleep, and choosing activity the child can sustain, while avoiding shame, punishment, or extreme dieting.</p>',
    fertilityOrFamily:
      '<p>Genetic risk depends on the specific gene and inheritance pattern. In autosomal recessive forms, parents may both be carriers; in autosomal dominant forms, relatives may have variable expression. After diagnosis, family testing, carrier counseling, and reproductive options should be discussed.</p>',
    emergencySigns:
      '<p>Urgent care is needed for severe hypoglycemia, altered consciousness, dehydration, persistent vomiting or diarrhea, suspected adrenal crisis, markedly worsening sleep-related breathing, chest pain, or mental health crisis. People using targeted or other weight-management medicines should contact the care team promptly for severe allergy, major mood change, or other serious side effects flagged by their clinician.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'U.S. FDA: FDA approves first treatment for weight management for people with certain rare genetic conditions',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-weight-management-people-certain-rare-genetic-conditions',
    },
  ],
  symptoms:
    '<p>Main features are rapid severe weight gain before age 5, intense hunger, poor satiety, and repeated food-seeking, sometimes with gene-specific endocrine or metabolic clues.</p>',
  diagnosis:
    '<p>Diagnosis combines growth curves, hyperphagia pattern, family history, endocrine evaluation, and testing of genes such as LEP, LEPR, POMC, PCSK1, MC4R, and SIM1, while excluding syndromic or secondary obesity.</p>',
  treatment:
    '<p>Care includes non-stigmatizing lifestyle and family support, complication screening, mental health support, and targeted treatment assessment such as setmelanotide for some genetically confirmed forms where available.</p>',
  prognosis:
    '<p>Long-term outcome depends on the gene, complication control, family and psychological support, and access to targeted therapy. Early diagnosis can reduce blame and avoidable delay.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 404,
    name: 'monogenic-non-syndromic-obesity-journey.png',
    url: '/images/diseases/monogenic-non-syndromic-obesity-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

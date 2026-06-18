import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const disease21HydroxylaseDeficiency: DiseaseDraft = {
  ...entity(4, 'disease-21-hydroxylase-deficiency'),
  name: '21-Hydroxylase Deficiency',
  nameEn: '21-Hydroxylase Deficiency',
  alias: '21-OHD, Congenital Adrenal Hyperplasia (CAH)',
  slug: '21-hydroxylase-deficiency',
  oneSentence:
    '21-hydroxylase deficiency is the most common form of congenital adrenal hyperplasia, often related to CYP21A2 gene variants, and can affect the balance of cortisol, aldosterone, and androgens.',
  plainName: 'A congenital adrenal hormone synthesis disorder',
  prevalence:
    'Classic form occurs in approximately 1 in 12,000–15,000 live births; reported incidence in China is about 1/20,000–1/10,000, though actual identification rates are affected by screening and healthcare access.',
  searchIntents: [
    '21-hydroxylase deficiency which doctor',
    'newborn screen high 17-OHP what next',
    'congenital adrenal hyperplasia salt-wasting crisis',
    '21-OHD CYP21A2 genetic testing',
    '21-hydroxylase deficiency fertility genetic counseling',
  ],
  quickLook: {
    whatItIs:
      "This is an autosomal recessive endocrine disorder. Insufficient 21-hydroxylase function impairs the adrenal glands' ability to produce cortisol and aldosterone while elevating androgens, with presentations ranging from neonatal crisis to hyperandrogenic problems at puberty.",
    whoToSeeFirst:
      'In China, neonates or children should first see pediatric endocrinology; those with vomiting, dehydration, hyponatremia, hyperkalemia, or altered mental status should go to the emergency department immediately. Adults or those with fertility concerns may need coordination between endocrinology, reproductive medicine, and genetic counseling.',
    isGenetic:
      'Usually autosomal recessive. Whether parents are carriers, recurrence risk for future pregnancies, and whether family members need testing should be assessed by genetic counseling or a specialist based on genetic test results.',
    hasTreatment:
      'There are standard treatment and follow-up plans, but long-term management by an endocrinology specialist is required. Medication types, dosages, and stress-dosing protocols must be individualized by a physician.',
    commonDelayReason:
      'Ambiguous genitalia in female infants, early salt-wasting crisis in male infants, rapid growth acceleration or hyperandrogenic signs at puberty are easily mistaken for urology, gastroenteritis, simple precocious puberty, or polycystic ovary syndrome, respectively.',
  },
  patientJourney: {
    whenToSuspect: [
      'Female infant with atypical external genitalia at birth, such as clitoromegaly or fused labia.',
      'Poor feeding, repeated vomiting, failure to thrive, dehydration, hyponatremia, or hyperkalemia appearing days to weeks after birth.',
      'Rapid growth acceleration, significantly advanced bone age, or signs of early adrenarche such as pubic hair, acne, or body odor in childhood.',
      'Menstrual irregularities, hirsutism, or acne in adolescent or adult females that respond poorly to standard polycystic ovary syndrome management.',
      'Family history of 21-hydroxylase deficiency, congenital adrenal hyperplasia, or unexplained severe dehydration/infant death in infancy.',
    ],
    commonWrongTurns: [
      'Treating salt-wasting infant vomiting and dehydration as ordinary gastroenteritis without promptly checking electrolytes and adrenal-related hormones.',
      'Addressing external genitalia appearance without simultaneously referring to pediatric endocrinology and genetic counseling.',
      'Attributing rapid childhood growth or early pubic hair development to simple precocious puberty, without ordering 17-OHP and adrenal androgen tests.',
      'Managing post-pubertal cases long-term as polycystic ovary syndrome or idiopathic hirsutism without reviewing childhood clues and family history.',
      'After a positive newborn screening result, failing to follow up as required, or the infant developing acute salt-wasting risk before follow-up testing.',
    ],
    firstDepartments: [
      'Pediatric Endocrinology',
      'Endocrinology',
      'Emergency Department (when dehydration, shock, or electrolyte abnormalities occur)',
      'Genetic Counseling Clinic',
      'Reproductive Medicine Department (when planning pregnancy as an adult)',
    ],
    diagnosisChecklist: [
      'Gather birth records, newborn screening results, external genitalia assessment, growth curves, and bone age data.',
      'Bring previous electrolyte, blood glucose, 17-OHP, ACTH, cortisol, renin/aldosterone, and androgen test results.',
      'Record episodes of vomiting, dehydration, fever, stress events, medication history, and similar conditions in the family.',
      'Ask the doctor whether CYP21A2 genetic testing, parental carrier testing, or genetic counseling is needed.',
    ],
    testsToAskAbout: [
      'Serum 17-hydroxyprogesterone (17-OHP) and ACTH stimulation test when indicated.',
      'Blood sodium, potassium, glucose, renin/aldosterone for salt-wasting risk assessment.',
      'ACTH, cortisol, androstenedione, testosterone, and other adrenal and gonadal hormones.',
      'CYP21A2 genetic testing and family variant verification.',
      'Bone age, growth velocity, pubertal development assessment, and pelvic ultrasound in females for differential diagnosis.',
    ],
    questionsForDoctor: [
      'Does the presentation more closely resemble salt-wasting, simple virilizing, or non-classic type? What is the basis?',
      'Which situations require emergency care? How should family members recognize early warning signs?',
      'What indicators need monitoring during follow-up, and how often should appointments be scheduled?',
      'During fever, diarrhea, injury, surgery, or other stressful situations, should a written emergency plan be prepared in advance?',
      'How should long-term tracking of growth, bone age, pubertal development, and adult height be conducted?',
      'What genetic counseling is needed for future fertility and recurrence risk?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Manifestations of 21-hydroxylase deficiency vary by type. Classic forms include salt-wasting and simple virilizing types; salt-wasting infants may present with poor feeding, vomiting, failure to thrive, dehydration, hyponatremia, and hyperkalemia, and can develop adrenal crisis. 46,XX females may have varying degrees of external genitalia masculinization due to prenatal androgen exposure.</p><p>Simple virilizing type typically lacks obvious salt-wasting but may present in childhood with growth acceleration, advanced bone age, early pubic hair, acne, or precocious puberty-like features. Non-classic type often appears later and may present with hirsutism, acne, menstrual irregularities, or fertility difficulties, and may be milder.</p>',
    diagnosis:
      '<p>Diagnosis typically combines clinical presentation, newborn screening, serum 17-hydroxyprogesterone (17-OHP), ACTH/cortisol, electrolytes, renin/aldosterone, and adrenal androgen testing. 17-OHP is usually markedly elevated in classic cases; non-classic cases may require morning baseline 17-OHP or ACTH stimulation testing.</p><p>CYP21A2 genetic testing can clarify the genetic diagnosis, provide type reference, and support family genetic counseling. Physicians also differentiate from other disorders of sex development, precocious puberty, polycystic ovary syndrome, and adrenal or pituitary conditions based on age and presentation.</p>',
    treatment:
      '<p>Treatment goals, under specialist guidance, are to replace deficient hormones, reduce excess androgen effects, and maintain normal growth, development, and metabolic stability. Classic patients typically require long-term glucocorticoid replacement; salt-wasting type may additionally need mineralocorticoid-related treatment and electrolyte monitoring. Specific medications, dosages, and adjustment timing must be determined by the physician based on age, weight, hormone levels, growth velocity, and stress conditions.</p><p>Multidisciplinary collaboration among pediatric endocrinology, urology/gynecology, reproductive medicine, genetic counseling, and psychological support is often needed for external genitalia assessment, pubertal development, fertility planning, or psychological support.</p>',
    longTermCare:
      '<p>Long-term management focuses on regular follow-up, monitoring height and weight and bone age, reviewing hormones and electrolytes, assessing pubertal development, bone health, metabolic risk, and quality of life. Families and patients should preserve diagnostic information, medication lists, and emergency care instructions to avoid missing adrenal crisis risk.</p><p>Fever, diarrhea, injury, surgery, or other stressful situations may alter treatment needs; confirm a written emergency plan with the attending physician in advance. Do not discontinue or add medication or adjust doses based on internet experience.</p>',
    fertilityOrFamily:
      '<p>21-hydroxylase deficiency may affect menstruation, ovulation, sperm production, and fertility planning, with the degree of impact related to type, treatment control, and individual circumstances. When planning pregnancy, it is recommended to undergo joint evaluation by endocrinology, reproductive medicine, and genetic counseling.</p><p>Since this condition is mostly autosomal recessive, diagnosed patients, carrier families, or those with relevant family history can learn about recurrence risk, partner testing, and options such as prenatal or preimplantation genetic testing through genetic counseling.</p>',
    emergencySigns:
      '<p>If infants or diagnosed patients develop repeated vomiting, refusal to feed, obvious dehydration, altered mental status, drowsiness, hypotension, shock, or laboratory findings of hyponatremia, hyperkalemia, or hypoglycemia, they should go to the emergency department immediately and proactively inform physicians of the 21-hydroxylase deficiency or congenital adrenal hyperplasia history.</p><p>During fever, severe diarrhea, injury, pre- or post-surgery, or when oral medication cannot be taken, contact the attending physician or emergency department promptly; do not wait or self-adjust treatment.</p>',
  },
  sources: [
    {
      name: 'National Rare Disease Diagnosis and Treatment Guidelines (2019): 21-Hydroxylase Deficiency',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/201902/073540e8f83b4a54a28684d23e2ae2f5/files/1732871139221_41526.pdf',
      type: 'clinical-guideline',
    },
    {
      name: 'GeneReviews: 21-Hydroxylase-Deficient Congenital Adrenal Hyperplasia',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1171/',
      type: 'review',
    },
    {
      name: 'Endocrine Society: Congenital Adrenal Hyperplasia',
      url: 'https://www.endocrine.org/patient-engagement/endocrine-library/congenital-adrenal-hyperplasia',
      type: 'official',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Manifestations of 21-hydroxylase deficiency vary by type. Classic forms include salt-wasting and simple virilizing types; salt-wasting infants may present with poor feeding, vomiting, failure to thrive, dehydration, hyponatremia, and hyperkalemia, and can develop adrenal crisis. 46,XX females may have varying degrees of external genitalia masculinization due to prenatal androgen exposure.</p><p>Simple virilizing type typically lacks obvious salt-wasting but may present in childhood with growth acceleration, advanced bone age, early pubic hair, acne, or precocious puberty-like features. Non-classic type often appears later and may present with hirsutism, acne, menstrual irregularities, or fertility difficulties, and may be milder.</p>',
  diagnosis:
    '<p>Diagnosis typically combines clinical presentation, newborn screening, serum 17-hydroxyprogesterone (17-OHP), ACTH/cortisol, electrolytes, renin/aldosterone, and adrenal androgen testing. 17-OHP is usually markedly elevated in classic cases; non-classic cases may require morning baseline 17-OHP or ACTH stimulation testing.</p><p>CYP21A2 genetic testing can clarify the genetic diagnosis, provide type reference, and support family genetic counseling. Physicians also differentiate from other disorders of sex development, precocious puberty, polycystic ovary syndrome, and adrenal or pituitary conditions based on age and presentation.</p>',
  treatment:
    '<p>Treatment goals, under specialist guidance, are to replace deficient hormones, reduce excess androgen effects, and maintain normal growth, development, and metabolic stability. Classic patients typically require long-term glucocorticoid replacement; salt-wasting type may additionally need mineralocorticoid-related treatment and electrolyte monitoring. Specific medications, dosages, and adjustment timing must be determined by the physician based on age, weight, hormone levels, growth velocity, and stress conditions.</p><p>Multidisciplinary collaboration among pediatric endocrinology, urology/gynecology, reproductive medicine, genetic counseling, and psychological support is often needed for external genitalia assessment, pubertal development, fertility planning, or psychological support.</p>',
  prognosis:
    '<p>Long-term management focuses on regular follow-up, monitoring height and weight and bone age, reviewing hormones and electrolytes, assessing pubertal development, bone health, metabolic risk, and quality of life. Families and patients should preserve diagnostic information, medication lists, and emergency care instructions to avoid missing adrenal crisis risk.</p><p>Fever, diarrhea, injury, surgery, or other stressful situations may alter treatment needs; confirm a written emergency plan with the attending physician in advance. Do not discontinue or add medication or adjust doses based on internet experience.</p>',
  sourceName:
    'National Rare Disease Diagnosis and Treatment Guidelines (2019): 21-Hydroxylase Deficiency',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/201902/073540e8f83b4a54a28684d23e2ae2f5/files/1732871139221_41526.pdf',
  categorySlug: 'metabolic',
  charityIds: [21, 22],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 302,
    name: '21-hydroxylase-deficiency-journey.png',
    url: '/images/diseases/21-hydroxylase-deficiency-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
  icd10Code: 'E25.0',
};

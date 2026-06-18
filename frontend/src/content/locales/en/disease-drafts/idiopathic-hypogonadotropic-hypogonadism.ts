import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicHypogonadotropicHypogonadism: DiseaseDraft = {
  ...entity(55, 'disease-idiopathic-hypogonadotropic-hypogonadism'),
  name: 'Idiopathic Hypogonadotropic Hypogonadism',
  nameEn: 'Idiopathic Hypogonadotropic Hypogonadism',
  alias:
    'IHH, Congenital Hypogonadotropic Hypogonadism (CHH), Kallmann Syndrome (KS, with olfactory abnormalities), Normosmic IHH (nIHH)',
  slug: 'idiopathic-hypogonadotropic-hypogonadism',
  oneSentence:
    'Idiopathic Hypogonadotropic Hypogonadism is a rare endocrine disorder caused by impaired function of hypothalamic gonadotropin-releasing hormone (GnRH) neurons, leading to insufficient secretion of gonadotropins and resulting in hypogonadism.',
  plainName: 'Idiopathic Hypogonadotropic Hypogonadism',
  prevalence:
    'The overall incidence of IHH is approximately 1~10/100,000. Kallmann syndrome (KS) accounts for about 40%~60% of all IHH patients, with a prevalence of approximately 1/48,000 in Finland, more common in males than females. Some KS patients may experience spontaneous remission (approximately 10%~20%).',
  quickLook: {
    whatItIs:
      'Idiopathic Hypogonadotropic Hypogonadism (IHH) is a congenital disorder affecting the hypothalamic-pituitary-gonadal axis. Due to impaired function of hypothalamic GnRH neurons, GnRH synthesis, secretion, or action is impaired, leading to reduced secretion of pituitary gonadotropins (LH, FSH) and subsequent hypogonadism. It is classified into two types based on the presence of olfactory abnormalities: Kallmann syndrome (KS) when accompanied by reduced or absent sense of smell, and normosmic IHH (nIHH) when smell is normal. IHH is a genetically heterogeneous disorder with more than 30 related genes identified.',
    whoToSeeFirst:
      'For children presenting with short stature or delayed sexual development, evaluation at a pediatric endocrinology or pediatric genetics/metabolism department is recommended. For adolescents presenting with absence of sexual development, consultation with pediatric endocrinology or reproductive endocrinology is recommended. Adults presenting with infertility or sexual dysfunction may consult urology/andrology (males) or reproductive endocrinology (females). Those with olfactory abnormalities should also see an ENT specialist. Those with a family history may consider genetic counseling.',
    isGenetic:
      'Yes, IHH is a genetically heterogeneous disorder, and various gene mutations have been identified as causes, including GNRH1, GNRHR, KISS1, KISS1R, FGFR1, PROK2, PROKR2, CHD7, TAC3, TACR3, and others. Most follow autosomal dominant or recessive inheritance, with a few being X-linked (such as Kallmann syndrome caused by ANOS1/KAL1 gene mutations). Known pathogenic mutations can be detected in approximately 40%~50% of familial cases and approximately 17% of sporadic cases.',
    hasTreatment:
      'Yes, there are treatment pathways including puberty induction, long-term hormone replacement, and fertility treatment. Treatment goals differ, and the approach varies accordingly, requiring planning by endocrinology or reproductive endocrinology specialists.',
    commonDelayReason:
      'IHH has an insidious onset and is difficult to identify before puberty. Some patients may be missed due to atypical symptoms (such as partial hypogonadism). The reduced sense of smell in Kallmann syndrome is sometimes dismissed as rhinitis or common cold. Primary care physicians may lack experience in differentiating causes of delayed puberty, leading to delayed targeted examinations. Some female patients present with amenorrhea but are often misdiagnosed with functional amenorrhea or polycystic ovary syndrome.',
  },
  patientJourney: {
    whenToSuspect: [
      'No development of secondary sexual characteristics during puberty (males: no testicular enlargement, penile development, or growth of pubic/axillary hair; females: no breast development, no menarche)',
      'Normal growth velocity but no pubertal development, with bone age lagging behind chronological age',
      'Reduced or complete loss of sense of smell (especially around puberty)',
      'History of micropenis or cryptorchidism in males',
      'Primary amenorrhea (females with no menarche after age 14 and no secondary sexual characteristics)',
      'Family history of gonadotropin-releasing hormone deficiency',
      'Decreased libido, erectile dysfunction, or infertility in adults',
    ],
    commonWrongTurns: [
      "Attributing delayed puberty to constitutional delay of growth and puberty (CDGP, or 'late bloomer'), without performing hormone tests",
      'Attributing olfactory reduction in Kallmann syndrome to rhinitis or common cold, delaying diagnosis',
      'Female patients misdiagnosed with polycystic ovary syndrome or functional amenorrhea, without systematic hormone evaluation',
      'Focusing only on gonadal function while neglecting olfactory screening and pituitary imaging',
      'Managing male micropenis or cryptorchidism locally without investigating the hypothalamic-pituitary-gonadal axis',
    ],
    firstDepartments: [
      'Pediatric endocrinology or pediatric genetics/metabolism department (children/adolescent patients)',
      'Reproductive endocrinology department (adolescent and adult patients)',
      'Urology/Andrology department (male patients)',
      'ENT department (for olfactory disorders)',
      'Medical genetics or reproductive medicine department (genetic counseling and family analysis)',
    ],
    diagnosisChecklist: [
      'Detailed medical history: growth and development history, sexual development history, olfactory history, family history',
      'Physical examination: height, weight, growth velocity, Tanner staging of secondary sexual characteristics, olfactory testing',
      'Basic hormone tests: LH, FSH, testosterone (males), estradiol (females), inhibin B',
      'GnRH stimulation test: assessing pituitary gonadotropin reserve function',
      'Olfactory testing and sinus CT/MRI: assessing olfactory function and olfactory bulb development',
      'Pituitary MRI: excluding intracranial space-occupying lesions or developmental abnormalities',
      'Genetic testing: targeted gene panel or whole exome sequencing (can establish genetic diagnosis)',
      'Bone age assessment',
      'Testicular/ovarian ultrasound (when necessary)',
    ],
    testsToAskAbout: [
      'Sex hormone panel (LH, FSH, testosterone/estradiol)',
      'GnRH stimulation test',
      'Olfactory testing',
      'Pituitary MRI',
      'Genetic testing (IHH-related genes)',
      'Bone age X-ray',
    ],
    questionsForDoctor: [
      'Is this more likely constitutional delay of puberty or hypogonadotropic hypogonadism? What is the basis?',
      'Are there olfactory abnormalities or other syndromic clues? What imaging, hormone, and genetic tests are needed?',
      'What are the current treatment goals: puberty induction, long-term replacement, or future fertility?',
      'How should treatment efficacy, side effects, and bone health be monitored?',
      'What genetic counseling is needed for family members and future family planning?',
    ],
  },
  medicalSections: {
    symptoms:
      'The clinical manifestations of IHH depend on the age of onset and severity. In infancy, male infants may present with micropenis and cryptorchidism, while female infants often have no specific findings. During puberty, the main presentation is absence of secondary sexual characteristics: males have no testicular enlargement, penile development, or growth of pubic/axillary hair, and voice does not deepen; females have no breast development or menarche. Olfactory reduction or loss may occur (Kallmann syndrome), and other nonspecific features may also be present such as cleft lip, cleft palate, hearing impairment, or kidney developmental abnormalities (in some syndromic forms). Bone age is often delayed relative to chronological age. Adult patients present with symptoms related to hypogonadism: decreased libido, erectile dysfunction (males), amenorrhea (females), infertility, decreased bone density, and reduced muscle mass.',
    diagnosis:
      'The diagnosis of IHH requires integration of clinical presentation, hormone testing, and imaging studies. The characteristic hormonal finding is low levels of both gonadotropins (LH, FSH) and sex hormones (testosterone/estradiol). The GnRH stimulation test shows a low or normal pituitary response to GnRH. Other causes of hypogonadotropic hypogonadism must be excluded (such as hyperprolactinemia, hypothalamic-pituitary tumors, malnutrition, chronic systemic diseases, etc.). Pituitary MRI excludes structural abnormalities. Olfactory testing and/or olfactory bulb MRI assess olfactory function. Genetic testing can establish a genetic diagnosis and guide family screening. Testing for GnRH gene and receptor gene mutations is of significant diagnostic importance.',
    treatment:
      'Treatment is divided into categories based on goals: puberty induction, long-term hormone replacement, and fertility treatment. Approaches differ for males, females, and different age groups; whether to use gonadotropins, pulsatile GnRH, or sex hormone replacement is determined by the endocrinology/reproductive endocrinology team based on bone age, hormone levels, gonadal volume, fertility plans, and comorbidities. Patients should not purchase or adjust hormones on their own.',
    longTermCare:
      "Patients with IHH require long-term follow-up management. During treatment, regular monitoring of hormone levels, secondary sexual development, biochemical indicators, and bone density is needed. Patients undergoing fertility treatment need regular visits at a reproductive medicine center with monitoring of follicular development and spermatogenesis. After stopping treatment, annual monitoring of sex hormone levels and testicular/ovarian function is needed, watching for spontaneous reversal. Long-term sex hormone deficiency can lead to osteoporosis, requiring calcium and vitamin D supplementation and appropriate weight-bearing exercise. Attention to patients' mental health is important, as some patients may experience anxiety or depression due to sexual development issues and fertility difficulties. Genetic counseling is valuable for family planning.",
    fertilityOrFamily:
      'Most patients with IHH can have biological children after treatment. Following treatment with hCG +/- FSH, approximately 70%~90% of male patients develop spermatogenesis, with some achieving natural conception and others requiring assisted reproductive technology. Approximately 10%~20% of patients experience spontaneous reversal after stopping treatment (recovery of endogenous GnRH secretion), which may be related to mutation type and prior treatment. Genetic counseling is recommended for carriers of known pathogenic mutations who are planning pregnancy to understand inheritance risks and prenatal diagnosis options.',
    emergencySigns:
      'IHH is usually a chronic condition and rarely requires emergency management. However, prompt medical attention is advised in the following situations: sudden severe headache, visual changes, or visual field defects (to rule out pituitary apoplexy or intracranial tumor); severe hypoglycemia or electrolyte disturbances (pituitary crisis); severe nausea, vomiting, abdominal distension, or signs of OHSS (ovarian hyperstimulation syndrome) during fertility treatment; sudden worsening of loss of smell requiring evaluation for sinus or intracranial pathology.',
  },
  sources: [
    {
      name: 'GeneReviews: Isolated Gonadotropin-Releasing Hormone Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1334/',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Hypogonadotropic hypogonadism',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/000390.htm',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  sourceName: 'GeneReviews: Isolated Gonadotropin-Releasing Hormone Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1334/',
  categorySlug: 'metabolic',
  charityIds: [7],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 354,
    name: 'idiopathic-hypogonadotropic-hypogonadism-journey.png',
    url: '/images/diseases/idiopathic-hypogonadotropic-hypogonadism-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
};

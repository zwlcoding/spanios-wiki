import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const enDiseaseDrafts: DiseaseDraft[] = [
  {
    ...entity(1, 'disease-als'),
    name: 'Amyotrophic Lateral Sclerosis',
    nameEn: 'Amyotrophic Lateral Sclerosis',
    alias: 'ALS, motor neuron disease',
    icd10Code: 'G12.2',
    slug: 'amyotrophic-lateral-sclerosis',
    prevalence:
      'About 3-8 per 100,000 people, varying by region and age structure.',
    symptoms:
      '<p>Common signs include progressive muscle weakness, muscle wasting, fasciculations, swallowing difficulty, and speech changes. Sensation and awareness are often relatively preserved.</p>',
    diagnosis:
      '<p>Diagnosis usually combines neurological examination, EMG, nerve conduction studies, imaging to rule out mimics, and genetic testing when indicated.</p>',
    treatment:
      '<p>Care focuses on slowing progression, respiratory and nutrition support, rehabilitation, symptom control, and multidisciplinary follow-up.</p>',
    prognosis:
      '<p>The disease course varies widely. Early attention to respiratory and nutrition risks can improve quality of life.</p>',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(2, 'disease-hemophilia-a'),
    name: 'Hemophilia A',
    nameEn: 'Hemophilia A',
    alias: 'Factor VIII deficiency',
    icd10Code: 'D66',
    slug: 'hemophilia-a',
    prevalence:
      'About 1 in 5,000 male births. Severe cases require long-term structured care.',
    symptoms:
      '<p>Key features include prolonged bleeding after injury, recurrent joint bleeds, muscle hematomas, and, in severe cases, intracranial or gastrointestinal bleeding.</p>',
    diagnosis:
      '<p>Evaluation includes coagulation screening, factor VIII activity testing, inhibitor assessment, and F8 genetic testing for confirmation and family planning.</p>',
    treatment:
      '<p>Care includes factor replacement, prophylaxis, emergency bleed management, joint protection, and home infusion education.</p>',
    prognosis:
      '<p>Regular prophylaxis can reduce joint damage and severe bleeding. Children need long-term monitoring.</p>',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    tagSlugs: ['coagulation-care', 'genetic-counseling'],
  },
  {
    ...entity(3, 'disease-kallmann-syndrome'),
    name: 'Kallmann Syndrome',
    nameEn: 'Kallmann Syndrome',
    alias: 'Hypogonadotropic hypogonadism with anosmia',
    icd10Code: 'E23.0',
    slug: 'kallmann-syndrome',
    oneSentence:
      'Kallmann syndrome often presents as delayed puberty or underdeveloped secondary sex characteristics with reduced or absent smell, and diagnosis usually requires endocrine evaluation.',
    plainName: 'Delayed puberty with reduced sense of smell',
    prevalence:
      'Estimated at about 1 in 30,000 males and 1 in 120,000 females; actual diagnosis rates may vary by care pathway.',
    quickLook: {
      whatItIs:
        'It is a form of hypogonadotropic hypogonadism where the body lacks the hormone signals needed to start puberty. Some people also have reduced or absent smell.',
      whoToSeeFirst:
        'Start with endocrinology. Children and teenagers may need pediatric endocrinology; fertility planning may involve reproductive medicine, andrology, or gynecology.',
      isGenetic:
        'It can be genetic, but the exact cause varies. Family testing should be discussed with a clinician or genetic counselor.',
      hasTreatment:
        'Hormone therapy can usually induce puberty. Some people with fertility goals may use gonadotropin or pulsatile GnRH treatment under specialist care.',
      commonDelayReason:
        'It may be dismissed as late development or investigated only as infertility, while smell, puberty history, and the pituitary-gonadal hormone axis are missed.',
    },
    patientJourney: {
      whenToSuspect: [
        'No clear signs of puberty by about age 14 in boys or 13 in girls.',
        'Markedly delayed puberty plus lifelong poor or absent sense of smell.',
        'Low sex hormones or infertility discovered in adulthood with a history of delayed puberty.',
        'A history of micropenis or undescended testes, or persistently small testes after the expected age of puberty.',
      ],
      commonWrongTurns: [
        'Waiting for natural development without checking sex hormones and gonadotropins.',
        'Treating fertility only, without reviewing puberty history and smell.',
        'Treating low testosterone or menstrual issues as isolated problems without evaluating the hypothalamic-pituitary-gonadal axis.',
        'Not connecting impaired smell with delayed puberty.',
      ],
      firstDepartments: [
        'Endocrinology',
        'Pediatric endocrinology',
        'Reproductive medicine',
      ],
      diagnosisChecklist: [
        'Write down puberty timeline, growth changes, smell history, and family history.',
        'Bring prior sex hormone, gonadotropin, pituitary hormone, bone age, or imaging results.',
        'Ask whether pituitary/hypothalamic MRI, smell testing, and genetic testing are appropriate.',
      ],
      testsToAskAbout: [
        'LH, FSH, testosterone or estradiol, and related pituitary hormones.',
        'Pituitary and hypothalamic imaging.',
        'Smell testing, bone age assessment, and targeted genetic testing.',
        'Whether to screen for associated findings such as kidney development, hearing, cleft lip or palate, dental development, or mirror movements.',
      ],
      questionsForDoctor: [
        'Does this look more like constitutional delay or hypogonadotropic hypogonadism?',
        'Is the current goal puberty induction, long-term replacement, or future fertility?',
        'How often should hormones, bone health, or fertility-related markers be monitored?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Common clues include delayed puberty, underdeveloped secondary sex characteristics, hypogonadism, infertility or fertility difficulty, and reduced or absent smell. Males may have sparse facial hair, no voice deepening, small testes, micropenis, or undescended testes. Females may have absent breast development or primary amenorrhea. Some people may also have unilateral kidney agenesis, cleft lip or palate, hearing loss, dental differences, or bimanual synkinesis. Presentation varies, so a single symptom is not enough for diagnosis.</p>',
      diagnosis:
        '<p>Assessment may include puberty history, family history, physical examination, LH/FSH and testosterone or estradiol testing, smell testing, bone age, pituitary/hypothalamic and olfactory-bulb-related imaging, and chromosome or genetic testing when appropriate. Clinicians also rule out constitutional delay, pituitary lesions, nutrition issues, and chronic disease.</p>',
      treatment:
        '<p>Treatment centers on sex hormone replacement, puberty induction, and fertility therapy under long-term endocrinology care. Fertility treatment is usually different from simple hormone replacement.</p>',
      longTermCare:
        '<p>Long-term care often tracks secondary sex characteristics, bone density, metabolic health, psychological stress, and fertility planning. People with absent smell should also plan around safety risks such as gas leaks, smoke, and spoiled food. Medication changes should be guided by a clinician.</p>',
      fertilityOrFamily:
        '<p>Some people can achieve fertility with gonadotropin-based treatment. If a genetic cause is suspected, family decisions should be made with genetic counseling rather than a single result alone.</p>',
      emergencySigns:
        '<p>If delayed puberty is accompanied by reduced smell, a history of micropenis or undescended testes, primary amenorrhea, infertility, or low sex hormones with low gonadotropins, specialist endocrine assessment should not be delayed. People already in treatment should seek follow-up for significant psychological distress, bone pain or fracture risk, severe fatigue, or unusual reactions during fertility treatment.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Kallmann syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/kallmann-syndrome/',
      },
      {
        name: 'NCBI Bookshelf: Kallmann Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK538210/',
      },
    ],
    symptoms:
      '<p>Typical signs include delayed puberty, hypogonadism, infertility or fertility difficulty, and reduced or absent sense of smell.</p>',
    diagnosis:
      '<p>Assessment may include sex hormone and gonadotropin testing, smell testing, pituitary/hypothalamic imaging, bone age, and targeted genetic testing.</p>',
    treatment:
      '<p>Treatment centers on sex hormone replacement, puberty induction, and fertility therapy under long-term endocrinology care.</p>',
    prognosis:
      '<p>Most patients can develop secondary sex characteristics with structured treatment, and some can achieve fertility with gonadotropin therapy.</p>',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    featuredImage: {
      id: 301,
      name: 'kallmann-syndrome-journey.png',
      url: '/images/diseases/kallmann-syndrome-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
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
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    featuredImage: {
      id: 302,
      name: '21-hydroxylase-deficiency-journey.png',
      url: '/images/diseases/21-hydroxylase-deficiency-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(5, 'disease-albinism'),
    name: 'Albinism',
    nameEn: 'Albinism',
    alias:
      'Oculocutaneous albinism, OCA, Ocular albinism, OA, Congenital pigment deficiency',
    slug: 'albinism',
    oneSentence:
      'Albinism is a group of genetic disorders related to abnormal melanin synthesis or distribution, commonly affecting skin, hair, and eye pigmentation, and may be accompanied by vision development issues and ultraviolet sensitivity.',
    plainName:
      'A genetic condition with reduced pigment in skin, hair, and eyes',
    prevalence:
      'The prevalence of oculocutaneous albinism varies across populations, with common estimates of approximately 1 in 12,000–20,000; ocular albinism is relatively rarer.',
    quickLook: {
      whatItIs:
        "Albinism is not simply 'light skin color' — it is a group of hereditary melanin-related disorders that can simultaneously affect skin sun-protection capacity, eye development, and visual quality. Some syndromic forms may also involve bleeding or immune-related issues.",
      whoToSeeFirst:
        'In China, it is recommended to first visit ophthalmology and dermatology; children may also see pediatrics, and genetic counseling can be consulted when typing, family risk, or reproductive planning is involved.',
      isGenetic:
        'Most oculocutaneous albinism is autosomal recessive; some ocular albinism can be X-linked. The specific inheritance pattern needs to be determined based on clinical presentation and genetic testing results.',
      hasTreatment:
        'Current focus is on long-term sun protection, vision correction, ophthalmology follow-up, skin screening, and learning/living support. Some eye issues may be improved through optical correction, low vision aids, or surgical evaluation.',
      commonDelayReason:
        'Early-stage may only be recognized as a facial difference or ordinary amblyopia/strabismus, overlooking nystagmus, photophobia, reduced fundus pigmentation, skin sunburn risk, and genetic counseling.',
    },
    patientJourney: {
      whenToSuspect: [
        'Infant or young child with noticeably lighter skin, hair, eyebrows, or eyelashes, and easily developing redness or sunburn after sun exposure.',
        'Since childhood, photophobia, squinting, involuntary eye movements, or significantly reduced vision compared to peers.',
        'Eye examination reveals reduced fundus pigmentation, macular hypoplasia, strabismus, or refractive errors.',
        'Family members with similar appearance, vision problems, or who have been identified as likely pathogenic variant carriers.',
        'Albinism features accompanied by easy bruising, bleeding, or recurrent infection clues, requiring screening for syndromic albinism.',
      ],
      commonWrongTurns: [
        'Only focusing on skin and hair color, without promptly conducting ophthalmology evaluation and vision support.',
        'Treating nystagmus, strabismus, or poor vision separately as routine eye problems, without considering pigmentation and family history clues.',
        "Believing albinism will naturally improve with age, delaying support measures during children's visual development period.",
        'Only using ordinary sunscreen or occasional sun protection, neglecting skin damage risks from long-term UV exposure.',
      ],
      firstDepartments: [
        'Ophthalmology',
        'Dermatology',
        'Pediatrics',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Record skin, hair, and eye color changes after birth, as well as sun reactions, photophobia, and vision development.',
        'Prepare previous refractive, fundus, strabismus, nystagmus, low vision evaluation, or dermatology examination data.',
        'Record similar appearance, low vision, nystagmus, bleeding tendency, or immune problems in the family.',
        'Ask the doctor whether genetic testing for albinism is needed and whether syndromic albinism needs to be ruled out.',
      ],
      testsToAskAbout: [
        'Ophthalmologic examination, including visual acuity, refraction, eye position, nystagmus, fundus, and macular development assessment.',
        'OCT, visual evoked potential, or other visual function examinations when needed.',
        'Dermatology evaluation and long-term skin cancer risk screening plan.',
        'Albinism-related genetic testing, with parental or family verification when appropriate.',
        'When bruising, petechiae, or recurrent infections occur, ask whether platelet function, immune function, or other tests are needed.',
      ],
      questionsForDoctor: [
        'Does the presentation more closely resemble oculocutaneous albinism, ocular albinism, or is syndromic albinism need to be ruled out?',
        "What are the main causes of the child's vision problems — refractive error, nystagmus, macular hypoplasia, or a combination?",
        'What low vision aids, classroom seating, or learning material adjustments are needed?',
        'How strict should daily sun protection be, and how often should dermatology follow up?',
        'Is genetic testing recommended? What does the result mean for family members and future pregnancies?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Common manifestations of albinism include lighter skin, hair, eyebrows, or eyelashes, and easy reddening or sunburn after sun exposure; eyes may show photophobia, nystagmus, strabismus, refractive errors, low vision, reduced fundus pigmentation, or macular hypoplasia. Manifestations vary greatly between different types — some patients have no obvious skin color changes but more prominent eye problems.</p><p>A few syndromic albinism cases may involve bleeding tendency, easy bruising, lung or intestinal problems, or immune function abnormalities. If these clues appear, further evaluation for related syndromes is needed beyond basic albinism assessment.</p>',
      diagnosis:
        '<p>Diagnosis typically combines skin and hair pigmentation findings, eye examination, family history, and genetic testing. Eye evaluation focuses on visual acuity, refractive status, nystagmus, strabismus, fundus pigmentation, macular development, and visual pathway-related findings.</p><p>Genetic testing helps clarify the type, identify syndromic risk, and support family genetic counseling, but test results need to be interpreted by physicians in conjunction with clinical findings. Physicians also differentiate from vitiligo, other hypopigmentation skin disorders, isolated eye conditions, or other genetic syndromes.</p>',
      treatment:
        "<p>Current management focuses not on changing skin color, but on reducing UV damage, protecting visual function, supporting learning and daily life, and identifying uncommon co-occurring issues. Common measures include regular ophthalmology follow-up, refraction and glasses, UV-protective glasses, low vision aids, strabismus or nystagmus-related evaluation, and long-term skin sun protection and dermatology screening.</p><p>Sun protection plans, eye interventions, and whether surgical evaluation is needed should be developed by ophthalmology, dermatology, and pediatrics professionals based on age, visual needs, and skin risk. Do not use online remedies, skin lightening, or 'cure-all' promotions as treatment basis.</p>",
      longTermCare:
        "<p>Long-term care usually includes year-round sun protection, avoiding strong UV exposure, regularly checking for new or changing skin lesions, and continuously monitoring children's visual development, learning environment, and psychological support. Schools can provide front-row seating, large-print materials, electronic magnification devices, or outdoor activity sun protection arrangements based on vision status.</p><p>Adults still need to focus on skin protection, vision aids, career environment adaptation, and fertility genetic counseling. If new abnormal skin lesions, significant vision changes, recurrent bleeding, or infections occur, seek medical attention promptly.</p>",
      fertilityOrFamily:
        '<p>Albinism is mostly related to genetic factors. Oculocutaneous albinism is commonly autosomal recessive; ocular albinism can be X-linked; different genes and types correspond to different family risks.</p><p>Diagnosed patients, carrier families, or those with family history can learn about partner testing, recurrence risk for future pregnancies, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling. Specific fertility decisions should be made by families after full informed consent.</p>',
      emergencySigns:
        '<p>If sudden significant vision loss, eye pain or severe headache, large-area sunburn with blistering, or new rapidly changing, bleeding, or ulcerating skin lesions occur, seek medical attention promptly. If albinism patients experience unexplained bruising, recurrent nosebleeds, or prolonged bleeding after surgery or dental extraction, they should also inform the doctor and rule out syndromic risk as soon as possible.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Oculocutaneous albinism',
        url: 'https://medlineplus.gov/genetics/condition/oculocutaneous-albinism/',
        type: 'official',
      },
      {
        name: 'MedlinePlus Genetics: Ocular albinism',
        url: 'https://medlineplus.gov/genetics/condition/ocular-albinism/',
        type: 'official',
      },
      {
        name: 'Orphanet Journal of Rare Diseases: Oculocutaneous albinism',
        url: 'https://doi.org/10.1186/1750-1172-2-43',
        type: 'review',
      },
    ],
    symptoms:
      '<p>Common manifestations of albinism include lighter skin, hair, eyebrows, or eyelashes, and easy reddening or sunburn after sun exposure; eyes may show photophobia, nystagmus, strabismus, refractive errors, low vision, reduced fundus pigmentation, or macular hypoplasia. Manifestations vary greatly between different types — some patients have no obvious skin color changes but more prominent eye problems.</p><p>A few syndromic albinism cases may involve bleeding tendency, easy bruising, lung or intestinal problems, or immune function abnormalities. If these clues appear, further evaluation for related syndromes is needed beyond basic albinism assessment.</p>',
    diagnosis:
      '<p>Diagnosis typically combines skin and hair pigmentation findings, eye examination, family history, and genetic testing. Eye evaluation focuses on visual acuity, refractive status, nystagmus, strabismus, fundus pigmentation, macular development, and visual pathway-related findings.</p><p>Genetic testing helps clarify the type, identify syndromic risk, and support family genetic counseling, but test results need to be interpreted by physicians in conjunction with clinical findings. Physicians also differentiate from vitiligo, other hypopigmentation skin disorders, isolated eye conditions, or other genetic syndromes.</p>',
    treatment:
      "<p>Current management focuses not on changing skin color, but on reducing UV damage, protecting visual function, supporting learning and daily life, and identifying uncommon co-occurring issues. Common measures include regular ophthalmology follow-up, refraction and glasses, UV-protective glasses, low vision aids, strabismus or nystagmus-related evaluation, and long-term skin sun protection and dermatology screening.</p><p>Sun protection plans, eye interventions, and whether surgical evaluation is needed should be developed by ophthalmology, dermatology, and pediatrics professionals based on age, visual needs, and skin risk. Do not use online remedies, skin lightening, or 'cure-all' promotions as treatment basis.</p>",
    prognosis:
      "<p>Long-term care usually includes year-round sun protection, avoiding strong UV exposure, regularly checking for new or changing skin lesions, and continuously monitoring children's visual development, learning environment, and psychological support. Schools can provide front-row seating, large-print materials, electronic magnification devices, or outdoor activity sun protection arrangements based on vision status.</p><p>Adults still need to focus on skin protection, vision aids, career environment adaptation, and fertility genetic counseling. If new abnormal skin lesions, significant vision changes, recurrent bleeding, or infections occur, seek medical attention promptly.</p>",
    sourceName: 'MedlinePlus Genetics: Oculocutaneous albinism',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/oculocutaneous-albinism/',
    categorySlug: 'dermatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    featuredImage: {
      id: 303,
      name: 'albinism-journey.png',
      url: '/images/diseases/albinism-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(6, 'disease-alport-syndrome'),
    name: 'Alport Syndrome',
    nameEn: 'Alport Syndrome',
    alias: 'Hereditary nephritis, Eye-ear-kidney syndrome, Familial nephritis',
    slug: 'alport-syndrome',
    oneSentence:
      'Alport syndrome is a hereditary kidney disease related to type IV collagen gene variants, often presenting with persistent hematuria as a clue and possibly accompanied by hearing and eye problems.',
    plainName:
      'A hereditary nephritis that may affect kidneys, hearing, and eyes',
    prevalence:
      'It is a rare hereditary kidney disease; true prevalence is affected by region, screening, and genetic testing availability.',
    quickLook: {
      whatItIs:
        'This condition affects the structure of the glomerular basement membrane and other tissues. Many patients first present with microscopic hematuria, then may develop proteinuria, declining kidney function; some patients also have sensorineural hearing loss or eye changes.',
      whoToSeeFirst:
        'In China, priority should be given to nephrology; children can see pediatric nephrology. If hearing or vision clues are present, ENT and ophthalmology should be evaluated simultaneously; genetic counseling is recommended when there is family history or reproductive planning.',
      isGenetic:
        'Yes. Common related genes include COL4A3, COL4A4, and COL4A5, with inheritance patterns possibly X-linked, autosomal recessive, or autosomal dominant.',
      hasTreatment:
        'Current management focuses on slowing kidney damage progression, monitoring hearing and eye problems, and evaluating kidney replacement therapy when needed. Specific medications and target values should be individualized by nephrology.',
      commonDelayReason:
        "Long-term treating microscopic hematuria as a common urinary tract problem or 'latent nephritis,' without asking about family history, hearing changes, and eye manifestations, and without timely specialist or genetic assessment.",
    },
    patientJourney: {
      whenToSuspect: [
        'Repeated or persistent microscopic hematuria, especially starting in childhood or adolescence.',
        'Hematuria combined with proteinuria, elevated blood pressure, or abnormal kidney function indicators.',
        'Family members with long-term hematuria, kidney failure, dialysis, kidney transplant, or early-onset hearing loss.',
        'Sensorineural hearing loss occurring together with kidney abnormality clues.',
        'Eye examination reveals anterior lenticonus, retinal fleck-like changes, or related findings.',
      ],
      commonWrongTurns: [
        'Only treating repeatedly as urinary tract infection, stones, or ordinary nephritis without long-term tracking of urine protein and kidney function.',
        'Only focusing on the kidneys, without conducting hearing and eye evaluations.',
        'Multiple family members have hematuria or kidney failure, but not communicating this information to the doctor.',
        'Genetic test results are available, but genetic counseling and family risk explanation have not been conducted.',
      ],
      firstDepartments: [
        'Nephrology',
        'Pediatric Nephrology',
        'Otorhinolaryngology (ENT)',
        'Ophthalmology',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Organize all previous urinalysis, urine protein, urine albumin/creatinine ratio, creatinine, eGFR, and blood pressure records.',
        'Record family history of hematuria, kidney failure, dialysis, kidney transplant, hearing loss, or eye abnormalities.',
        'Bring previous kidney biopsy, hearing test, eye examination, and genetic testing reports.',
        'Ask the doctor whether COL4A3/COL4A4/COL4A5 genetic testing and family verification are needed.',
      ],
      testsToAskAbout: [
        'Urinalysis, urine protein quantification, or urine albumin/creatinine ratio.',
        'Serum creatinine, eGFR, electrolytes, and blood pressure assessment.',
        'Hearing test, especially sensorineural hearing evaluation.',
        'Ophthalmology examination, including lens, fundus, and retinal evaluation.',
        'Alport-related genetic testing, with kidney biopsy or family testing when appropriate.',
      ],
      questionsForDoctor: [
        'Does my presentation more closely match which inheritance pattern? Do family members need testing?',
        'Is there already proteinuria or kidney function decline now, and how should follow-up frequency be arranged?',
        'How often should hearing and eye examinations be repeated?',
        'Which medications, infections, or lifestyle factors may increase kidney burden?',
        'If kidney replacement therapy is needed in the future, what options should I learn about in advance?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Alport syndrome often presents with persistent microscopic hematuria as an early clue, gradually developing proteinuria, hypertension, and declining kidney function. Some patients develop sensorineural hearing loss, usually detected in late childhood, adolescence, or early adulthood. Eye findings may include anterior lenticonus, retinal changes, or corneal issues.</p>',
      diagnosis:
        '<p>Diagnosis typically combines urinalysis, kidney function, family history, hearing and eye assessments, and is confirmed or supported by COL4A3, COL4A4, or COL4A5 genetic testing. In some cases, physicians combine kidney biopsy pathology or type IV collagen-related testing.</p>',
      treatment:
        '<p>Treatment goals are to slow kidney damage, monitor and manage hearing and eye problems. Nephrology may evaluate kidney-protective medications based on proteinuria, blood pressure, and kidney function; specific medications, dosages, and targets need individualized decision-making.</p>',
      longTermCare:
        '<p>Long-term follow-up usually includes urine protein, kidney function, blood pressure, hearing, eye examinations, and lifestyle management. When kidney function decline is sustained, earlier understanding of kidney replacement therapy, kidney transplant evaluation, and family support arrangements is recommended.</p>',
      fertilityOrFamily:
        '<p>Due to diverse inheritance patterns, family member risks cannot be determined solely based on gender or individual symptoms. It is recommended to carry the genetic report for genetic counseling to discuss family testing, partner testing, and reproductive options.</p>',
      emergencySigns:
        '<p>If significantly reduced urine output, severe edema, markedly elevated blood pressure, difficulty breathing, persistent gross hematuria, or known kidney function abnormalities with obvious fatigue, nausea, or chest discomfort occur, seek medical attention promptly.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Alport Syndrome',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1207/',
        type: 'review',
      },
      {
        name: 'MedlinePlus Genetics: Alport syndrome',
        url: 'https://medlineplus.gov/genetics/condition/alport-syndrome/',
        type: 'official',
      },
      {
        name: 'Orphanet: Alport syndrome',
        url: 'https://www.orpha.net/en/disease/detail/63',
        type: 'review',
      },
    ],
    symptoms:
      '<p>Alport syndrome often presents with persistent microscopic hematuria as an early clue, gradually developing proteinuria, hypertension, and declining kidney function. Some patients develop sensorineural hearing loss, usually detected in late childhood, adolescence, or early adulthood. Eye findings may include anterior lenticonus, retinal changes, or corneal issues.</p>',
    diagnosis:
      '<p>Diagnosis typically combines urinalysis, kidney function, family history, hearing and eye assessments, and is confirmed or supported by COL4A3, COL4A4, or COL4A5 genetic testing. In some cases, physicians combine kidney biopsy pathology or type IV collagen-related testing.</p>',
    treatment:
      '<p>Treatment goals are to slow kidney damage, monitor and manage hearing and eye problems. Nephrology may evaluate kidney-protective medications based on proteinuria, blood pressure, and kidney function; specific medications, dosages, and targets need individualized decision-making.</p>',
    prognosis:
      '<p>Long-term follow-up usually includes urine protein, kidney function, blood pressure, hearing, eye examinations, and lifestyle management. When kidney function decline is sustained, earlier understanding of kidney replacement therapy, kidney transplant evaluation, and family support arrangements is recommended.</p>',
    sourceName: 'GeneReviews: Alport Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1207/',
    categorySlug: 'renal-urologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(7, 'disease-angelman-syndrome'),
    name: 'Angelman Syndrome',
    nameEn: 'Angelman Syndrome',
    alias: 'Angelman Syndrome',
    slug: 'angelman-syndrome',
    oneSentence:
      'Angelman syndrome is a genetic neurodevelopmental disorder that mainly affects neural development, commonly presenting with developmental delay, limited language ability, motor coordination difficulties, seizures, and sleep problems.',
    plainName:
      'A hereditary neurodevelopmental disorder mainly affecting development, language, and seizures',
    prevalence:
      'Estimated to occur in approximately 1 in 12,000–20,000 newborns, with variations across different sources and regions.',
    quickLook: {
      whatItIs:
        'Angelman syndrome is mostly related to loss of UBE3A function from the maternal copy of chromosome 15. Children typically present with developmental delay in infancy and early childhood, then show significantly limited language, ataxia, seizures, sleep problems, and characteristic behaviors.',
      whoToSeeFirst:
        'In China, it is recommended to first see pediatrics or pediatric neurology; developmental, motor, and language issues require participation from pediatric rehabilitation; genetic counseling is needed for diagnosis and family risk explanation.',
      isGenetic:
        'Yes, but most cases are not directly inherited from parents. Recurrence risk for future pregnancies varies depending on the genetic mechanism and needs to be explained based on molecular testing results.',
      hasTreatment:
        'There is currently no cure; focus is on seizure management, sleep and behavioral support, rehabilitation training, communication aids, feeding, and family caregiving support.',
      commonDelayReason:
        'Early stages are easily broadly categorized as developmental delay, autism spectrum disorder, or cerebral palsy, without timely consideration of severely limited language, motor coordination, seizures, sleep, and genetic testing clues.',
    },
    patientJourney: {
      whenToSuspect: [
        'Obvious developmental delay after 6–12 months — failing to sit, crawl, walk, or develop language.',
        'Language expression significantly less than peers, with large gap between comprehension and expression.',
        'Unsteady walking, poor motor coordination, hand trembling, or hand-flapping when excited.',
        'Repeated seizures, abnormal EEG, or significant sleep problems.',
        'Simultaneously presenting microcephaly, feeding difficulties, constipation, easy excitability, or frequent laughter as clues.',
      ],
      commonWrongTurns: [
        'Only providing ordinary rehabilitation training without further investigating genetic causes.',
        'Being treated as autism or cerebral palsy without evaluating seizures, sleep, and UBE3A-related mechanisms.',
        "Only noticing the child 'smiles a lot,' overlooking developmental, language, and motor coordination barriers.",
        'Genetic testing results are incomplete, failing to distinguish deletion, uniparental disomy, imprinting errors, or UBE3A variants.',
      ],
      firstDepartments: [
        'Pediatrics',
        'Pediatric Neurology',
        'Pediatric Rehabilitation',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Organize developmental milestones, language ability, motor performance, sleep, seizures, and feeding status.',
        'Bring EEG, brain imaging, rehabilitation evaluation, genetic testing, and previous diagnosis records.',
        'Record developmental delay, seizures, miscarriages, or similar genetic problems in the family.',
        'Ask the doctor whether existing testing is sufficient to cover the main genetic mechanisms of Angelman syndrome.',
      ],
      testsToAskAbout: [
        '15q11-q13 methylation-related testing.',
        'Chromosomal microarray, MLPA, or copy number variation testing.',
        'UBE3A gene sequencing or related neurodevelopmental gene testing.',
        'EEG and seizure type evaluation.',
        'Language, swallowing, motor, cognitive, and sleep assessments.',
      ],
      questionsForDoctor: [
        "Which genetic mechanism does the child's test result suggest? How should recurrence risk be assessed?",
        'How should seizures, sleep, feeding, and constipation each be managed?',
        'Which rehabilitation training and communication aids should be prioritized?',
        'Which situations require emergency or prompt follow-up visits?',
        'What supportive adjustments can school and home environments provide?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Common manifestations include developmental delay, intellectual disability, significantly limited language expression, motor coordination difficulties, unsteady gait, hand-flapping, seizures, sleep disorders, and microcephaly. Some children may also have feeding difficulties, gastroesophageal reflux, constipation, strabismus, or hypopigmentation.</p>',
      diagnosis:
        '<p>Diagnosis typically combines developmental and neurological presentations, EEG, developmental assessment, and molecular genetic testing. Methylation testing can detect most cases, but different mechanisms require different testing combinations to explain recurrence risk.</p>',
      treatment:
        '<p>Management is primarily long-term support, including seizure treatment, sleep and behavioral management, physical/occupational/speech therapy, augmentative and alternative communication, nutritional and swallowing support. Treatment goals should center on safety, communication, functional participation, and family caregiving sustainability.</p>',
      longTermCare:
        '<p>Long-term care needs to focus on seizure control, sleep, constipation, scoliosis, motor ability, communication ability, nutrition, adolescence, and family caregiving stress. Adults still need continuous medical and living support.</p>',
      fertilityOrFamily:
        '<p>Recurrence risk for Angelman syndrome depends on the specific genetic mechanism. It is recommended to conduct genetic counseling after confirming the molecular diagnosis to discuss parental testing, recurrence risk for future pregnancies, and options such as prenatal or preimplantation genetic testing.</p>',
      emergencySigns:
        '<p>When seizures are prolonged, consciousness does not recover after repeated episodes, obvious breathing abnormalities, severe dehydration, persistent high fever, or significant mental status changes occur, seek emergency medical attention promptly and bring previous diagnosis and medication information.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Angelman syndrome',
        url: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/',
        type: 'official',
      },
      {
        name: 'GeneReviews: Angelman Syndrome',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1144/',
        type: 'review',
      },
      {
        name: 'GARD: Angelman syndrome',
        url: 'https://rarediseases.info.nih.gov/diseases/5810/angelman-syndrome',
        type: 'official',
      },
    ],
    symptoms:
      '<p>Common manifestations include developmental delay, intellectual disability, significantly limited language expression, motor coordination difficulties, unsteady gait, hand-flapping, seizures, sleep disorders, and microcephaly. Some children may also have feeding difficulties, gastroesophageal reflux, constipation, strabismus, or hypopigmentation.</p>',
    diagnosis:
      '<p>Diagnosis typically combines developmental and neurological presentations, EEG, developmental assessment, and molecular genetic testing. Methylation testing can detect most cases, but different mechanisms require different testing combinations to explain recurrence risk.</p>',
    treatment:
      '<p>Management is primarily long-term support, including seizure treatment, sleep and behavioral management, physical/occupational/speech therapy, augmentative and alternative communication, nutritional and swallowing support. Treatment goals should center on safety, communication, functional participation, and family caregiving sustainability.</p>',
    prognosis:
      '<p>Long-term care needs to focus on seizure control, sleep, constipation, scoliosis, motor ability, communication ability, nutrition, adolescence, and family caregiving stress. Adults still need continuous medical and living support.</p>',
    sourceName: 'MedlinePlus Genetics: Angelman syndrome',
    sourceUrl: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['genetic-counseling'],
  },
];

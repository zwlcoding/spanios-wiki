import type { DiseaseDraft } from '@/content/data/types';

export const enDiseaseDrafts: DiseaseDraft[] = [
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-21-hydroxylase-deficiency',
    id: 4,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
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
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 302,
      name: '21-hydroxylase-deficiency-journey.png',
      url: '/images/diseases/21-hydroxylase-deficiency-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
    icd10Code: 'E25.0',
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-albinism',
    id: 5,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
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
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 303,
      name: 'albinism-journey.png',
      url: '/images/diseases/albinism-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-alport-syndrome',
    id: 6,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
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
    searchIntents: [
      'Alport syndrome which doctor',
      'child persistent hematuria hearing loss',
      'hereditary nephritis COL4A5 genetic testing',
      'Alport syndrome proteinuria management',
      'Alport syndrome family screening',
    ],
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
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['genetic-counseling'],
    featuredImage: {
      id: 306,
      name: 'alport-syndrome-journey.png',
      url: '/images/diseases/alport-syndrome-journey.png',
    },
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-angelman-syndrome',
    id: 7,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
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
    searchIntents: [
      'Angelman syndrome which doctor',
      'developmental delay no speech seizures',
      'Angelman syndrome UBE3A testing',
      'Angelman syndrome rehabilitation',
      'Angelman syndrome recurrence risk',
    ],
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
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['genetic-counseling'],
    featuredImage: {
      id: 307,
      name: 'angelman-syndrome-journey.png',
      url: '/images/diseases/angelman-syndrome-journey.png',
    },
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-arginase-deficiency',
    id: 8,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Arginase Deficiency',
    nameEn: 'Arginase Deficiency',
    alias: 'ARG1 Deficiency, Hyperargininemia, Argininemia',
    slug: 'arginase-deficiency',
    oneSentence:
      'Arginase deficiency is a urea cycle-related inherited metabolic disorder, often presenting in childhood with gradually developing spasticity, growth stagnation or regression, seizures, and elevated arginine as key clues.',
    plainName:
      'An inherited metabolic disorder caused by abnormal arginine metabolism',
    prevalence:
      'This is an extremely rare condition with an estimated low prevalence, influenced by newborn screening coverage and diagnostic accessibility.',
    quickLook: {
      whatItIs:
        'Insufficient arginase function related to the ARG1 gene causes abnormal elevation of arginine and other metabolites. Unlike some urea cycle disorders, it often does not present with severe hyperammonemia in the newborn period, but rather with gradually developing motor and cognitive problems in early childhood.',
      whoToSeeFirst:
        'Children should first see pediatrics or pediatric metabolic genetics; for spasticity, seizures, or developmental regression, consider collaboration with pediatric neurology and rehabilitation medicine.',
      isGenetic:
        'Usually autosomal recessive inheritance. Parents are typically carriers, and recurrence risk for future pregnancies requires genetic testing and genetic counseling.',
      hasTreatment:
        'Requires long-term management by metabolic genetics specialists, typically focusing on diet, ammonia and amino acid monitoring, medication evaluation, rehabilitation, and acute metabolic imbalance management. Specific plans should be developed by specialist physicians.',
      commonDelayReason:
        'Children may develop normally early on, then later develop spasticity, abnormal gait, or learning regression, which can easily be mistaken for cerebral palsy, hereditary spastic paraplegia, or treated as epilepsy alone.',
    },
    patientJourney: {
      whenToSuspect: [
        'Development of stiff walking, scissoring gait, tiptoeing, or progressively worsening lower limb spasticity after 1-3 years of age.',
        'Developmental stagnation or regression, where previously acquired motor, language, or cognitive abilities become worse.',
        'Seizures, recurrent vomiting, drowsiness, or unexplained changes in mental status.',
        'Elevated arginine on blood ammonia, plasma amino acids, or newborn screening.',
        'Siblings or family members with similar metabolic disorders, early death, or unexplained neurological degeneration.',
      ],
      commonWrongTurns: [
        'Long-term treatment as cerebral palsy or simple rehabilitation without blood ammonia and amino acid analysis.',
        'Treating seizures only without investigating the metabolic cause.',
        "Assuming the child is 'slow to develop' without documenting regression and progression of spasticity.",
        'Diet and medication adjustments without follow-up by metabolic genetics specialists, increasing nutritional or metabolic risks.',
      ],
      firstDepartments: [
        'Pediatric Metabolic Genetics',
        'Pediatrics',
        'Pediatric Neurology',
        'Rehabilitation Medicine',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Gather newborn screening results, blood ammonia, plasma amino acids, urine organic acids, liver function, and nutritional markers.',
        'Record the timeline of motor, language, and cognitive development, as well as when spasticity, seizures, and regression first appeared.',
        'Bring previous brain imaging, EEG, rehabilitation assessments, and medication records.',
        'Ask your doctor whether ARG1 genetic testing and parental carrier verification are needed.',
      ],
      testsToAskAbout: [
        'Plasma amino acid analysis, with focus on arginine levels.',
        'Blood ammonia, liver function, nutritional status, and metabolic stability assessment.',
        'Urine organic acids, lactate, acylcarnitine profile and other differential diagnostic tests.',
        'ARG1 genetic testing with family segregation analysis.',
        'Neurodevelopmental, muscle tone, gait, and rehabilitation assessments.',
      ],
      questionsForDoctor: [
        'What are the target blood ammonia and arginine levels for my child? How often should we check?',
        'How do we balance metabolic control and growth when restricting diet?',
        'What should we do when my child has fever, vomiting, or refuses to eat? Who should we contact?',
        'What functions should rehabilitation training focus on improving?',
        'Do other children in our family or future pregnancies need testing?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Arginase deficiency typically presents in infancy or childhood with lower limb spasticity, gait abnormalities, developmental stagnation or regression, learning difficulties, seizures, and affected growth. Acute hyperammonemia may present with vomiting, drowsiness, altered consciousness, or convulsions, though some patients do not have typical hyperammonemia.</p>',
      diagnosis:
        '<p>Diagnosis is usually based on elevated plasma arginine, blood ammonia and other metabolic tests, clinical neurological findings, and confirmed by ARG1 genetic testing. Doctors will also rule out cerebral palsy, hereditary spastic paraplegia, other urea cycle disorders, and neurodegenerative diseases.</p>',
      treatment:
        '<p>Treatment requires management by metabolic genetics specialists, typically including individualized diet, ammonia and amino acid monitoring, nitrogen-scavenging therapies when indicated, seizure and spasticity management, rehabilitation training, and acute phase management protocols. Do not adjust protein intake or medications on your own.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on metabolic stability, growth and nutrition, motor function, cognitive and language development, seizures, liver function, and family emergency plans. School and rehabilitation resources should be tailored to actual motor and learning abilities.</p>',
      fertilityOrFamily:
        '<p>This condition is usually inherited in an autosomal recessive pattern. After diagnosis, it is recommended that parents and relevant family members receive genetic counseling to discuss carrier testing, recurrence risk for future pregnancies, and options such as prenatal testing or preimplantation genetic testing.</p>',
      emergencySigns:
        "<p>Seek emergency care immediately if there is difficulty waking from drowsiness, recurrent vomiting, convulsions, altered consciousness, abnormal breathing patterns, or fever with significantly reduced food intake. Inform doctors of the patient's metabolic history so that blood ammonia and acute metabolic imbalance can be evaluated.</p>",
    },
    sources: [
      {
        name: 'GeneReviews: Arginase Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1159/',
      },
      {
        name: 'Orphanet: Hyperargininemia',
        type: 'review',
        url: 'https://www.orpha.net/en/disease/detail/1897',
      },
      {
        name: 'NORD: Arginase Deficiency',
        type: 'patient-organization',
        url: 'https://rarediseases.org/rare-diseases/arginase-deficiency/',
      },
    ],
    symptoms:
      '<p>Common clues include lower limb spasticity, gait abnormalities, developmental stagnation or regression, seizures, and elevated arginine.</p>',
    diagnosis:
      '<p>Evaluation typically includes plasma amino acids, blood ammonia, liver function, urine organic acids, neurodevelopmental assessment, and ARG1 genetic testing.</p>',
    treatment:
      '<p>Management focuses on metabolic genetics follow-up, diet and metabolic monitoring, acute phase protocols, seizure and spasticity management, and rehabilitation support.</p>',
    prognosis:
      '<p>Early identification and continued metabolic management help reduce preventable neurological damage, but individual outcomes vary widely, requiring long-term follow-up.</p>',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 304,
      name: 'arginase-deficiency-journey.png',
      url: '/images/diseases/arginase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-asphyxiating-thoracic-dystrophy-jeune-syndrome',
    id: 9,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
    nameEn: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
    alias:
      'Asphyxiating Thoracic Dystrophy, Jeune Syndrome, Short-rib Thoracic Dysplasia-related Conditions',
    slug: 'asphyxiating-thoracic-dystrophy-jeune-syndrome',
    oneSentence:
      'Jeune Syndrome is a genetic skeletal ciliopathy, often presenting with a narrow chest, short ribs, short limbs, and respiratory problems in infancy, with possible involvement of kidneys, liver, or retina.',
    plainName:
      'A genetic skeletal developmental disorder with respiratory risks due to a narrow chest',
    prevalence:
      'Estimated approximately 1 in 100,000-130,000 people, a rare genetic skeletal developmental abnormality.',
    quickLook: {
      whatItIs:
        'A narrow chest limits lung expansion. Severe cases may develop respiratory distress shortly after birth. Some children improve over time, but ongoing monitoring is needed for kidney, liver, pancreas, teeth, and retinal involvement.',
      whoToSeeFirst:
        'For newborns or infants with breathing difficulties, start with pediatrics, neonatology, or emergency medicine; after stabilization, evaluation typically involves pediatric pulmonology, orthopedics, nephrology, ophthalmology, and genetic counseling.',
      isGenetic:
        'Typically autosomal recessive inheritance, with multiple associated genes. Diagnosis and family risk assessment require genetic testing combined with genetic counseling.',
      hasTreatment:
        'Current management focuses on respiratory support, infection prevention, nutrition, growth and development, and multi-organ follow-up; a few patients with severe chest restriction may need surgical evaluation by a specialized team.',
      commonDelayReason:
        'Mild cases may be mistaken for a small chest, recurrent respiratory infections, or short stature, without integrating skeletal, respiratory, renal, and ocular clues into a unified assessment.',
    },
    patientJourney: {
      whenToSuspect: [
        'Narrow chest apparent at birth or in infancy with rapid, labored breathing or recurrent low oxygen.',
        'Short limbs, short ribs, short stature, or associated polydactyly (extra fingers/toes) and other skeletal clues.',
        'Recurrent respiratory infections, feeding difficulties, or impaired growth and development.',
        'Skeletal abnormalities alongside kidney, liver, or vision-related issues.',
        'Family history of similar narrow chest, infant respiratory failure, or short-rib skeletal dysplasia.',
      ],
      commonWrongTurns: [
        'Treating only as pneumonia or wheezing without assessing chest and skeletal development.',
        'Seeing only orthopedics without simultaneous evaluation of respiratory reserve and multi-system involvement.',
        'Stopping follow-up after the neonatal period, missing later risks of kidney, liver, or retinal disease.',
      ],
      firstDepartments: [
        'Pediatrics or Neonatology',
        'Pediatric Pulmonology',
        'Pediatric Orthopedics',
        'Pediatric Nephrology',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Gather birth records, chest X-rays or skeletal imaging, respiratory support records, and oxygen saturation data.',
        'Record height, weight, growth curve, limb proportions, polydactyly, and family history.',
        'Bring kidney function, liver function, eye exam results, and previous infection-related hospitalization records.',
        'Confirm with your doctor whether genetic testing for short-rib thoracic dysplasia-related genes is needed.',
      ],
      testsToAskAbout: [
        'Chest and skeletal imaging to evaluate chest, ribs, limbs, and pelvis.',
        'Oxygen saturation, respiratory function, or sleep breathing assessments.',
        'Kidney function, urinalysis, liver function, and abdominal ultrasound.',
        'Ophthalmology examination, focusing on retinal findings.',
        'Related genetic testing and family verification.',
      ],
      questionsForDoctor: [
        'What stage of respiratory risk are we at, and what signs should we monitor at home?',
        'Is long-term oxygen therapy, non-invasive ventilation, or other respiratory support needed?',
        'How often should kidney, liver, and eye follow-ups be scheduled?',
        'Is chest surgery an option, and what conditions must be met?',
        'How is the genetic risk assessed for future pregnancies or family members?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Jeune Syndrome often presents with a narrow chest, short ribs, short limbs, short stature, and breathing difficulties in infancy. Some patients may have polydactyly, pelvic or clavicular abnormalities, or other skeletal findings. Severe chest restriction may lead to recurrent low oxygen or respiratory failure.</p><p>Patients who survive infancy still need monitoring for kidney, liver, pancreas, tooth, and retinal involvement.</p>',
      diagnosis:
        '<p>Diagnosis typically combines birth and respiratory history, chest and skeletal imaging, physical examination, multi-system screening, and genetic testing. Doctors will differentiate from other short-rib thoracic dysplasias, achondroplasia-like disorders, and other skeletal ciliopathies.</p>',
      treatment:
        '<p>Treatment is primarily supportive and managed by a multi-disciplinary team, including respiratory support, infection prevention, nutritional support, growth and development monitoring, and kidney, liver, and eye follow-up. Whether chest surgery is needed should be evaluated jointly by an experienced pediatric orthopedic, pulmonology, and critical care team.</p>',
      longTermCare:
        '<p>Long-term care focuses on respiratory stability, recurrent infection prevention, nutrition, growth and development, kidney function, liver function, and retinal follow-up. Families should agree with their care team on a plan for handling acute breathing difficulty, fever or infection, and low oxygen.</p>',
      fertilityOrFamily:
        '<p>This condition is mostly autosomal recessive with multiple associated genes. After diagnosis, genetic counseling is recommended to discuss parental carrier testing, recurrence risk for future pregnancies, and options such as prenatal or preimplantation genetic testing.</p>',
      emergencySigns:
        '<p>Seek immediate medical care if an infant shows rapid breathing, chest retractions, blue lips, feeding difficulties, decreased alertness, dropping oxygen levels, or worsening breathing with fever. For patients with known kidney or liver involvement, also seek prompt evaluation if there is decreased urine output, noticeable swelling, or worsening jaundice.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Asphyxiating thoracic dystrophy',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/asphyxiating-thoracic-dystrophy/',
      },
      {
        name: 'NCBI MedGen: Asphyxiating thoracic dystrophy',
        type: 'official',
        url: 'https://www.ncbi.nlm.nih.gov/gtr/conditions/C0036069',
      },
    ],
    symptoms:
      '<p>Common clues include a narrow chest, short ribs, short limbs, breathing difficulties in infancy, and possible kidney, liver, or retinal involvement.</p>',
    diagnosis:
      '<p>Evaluation typically includes chest and skeletal imaging, respiratory assessment, multi-system screening, family history, and genetic testing.</p>',
    treatment:
      '<p>Management focuses on respiratory support, infection prevention, nutrition and growth, multi-system follow-up, and chest surgery evaluation when needed.</p>',
    prognosis:
      '<p>Prognosis depends on the degree of chest narrowing, need for respiratory support, and multi-system involvement. Even after the early respiratory risk period, long-term follow-up is needed.</p>',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 305,
      name: 'asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
      url: '/images/diseases/asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-atypical-hemolytic-uremic-syndrome',
    id: 10,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Atypical Hemolytic Uremic Syndrome',
    nameEn: 'Atypical Hemolytic Uremic Syndrome',
    alias: 'aHUS, Atypical Hemolytic Uremic Syndrome, Complement-mediated HUS',
    slug: 'atypical-hemolytic-uremic-syndrome',
    oneSentence:
      'Atypical Hemolytic Uremic Syndrome (aHUS) is a group of rare diseases characterized by microvascular thrombosis, hemolytic anemia, low platelets, and kidney injury, often related to abnormal complement regulation.',
    plainName:
      'A blood and kidney emergency related to complement abnormalities',
    prevalence:
      'This is a rare disease. MedlinePlus estimates the annual incidence in the United States is about 1 in 500,000 people.',
    searchIntents: [
      'aHUS which doctor',
      'low platelets hemolysis kidney injury',
      'atypical HUS complement testing',
      'aHUS vs typical HUS',
      'aHUS recurrence genetic risk',
    ],
    quickLook: {
      whatItIs:
        'aHUS causes abnormal blood clots to form in small blood vessels, red blood cells are destroyed, platelet counts drop, and acute kidney injury occurs. It is different from the more common infection-related typical HUS, and requires specialist evaluation to distinguish the cause.',
      whoToSeeFirst:
        'During the acute phase, priority goes to the emergency department, pediatrics, nephrology, or hematology. Children are usually first seen by pediatrics or pediatric nephrology; adults may be evaluated jointly by nephrology and hematology.',
      isGenetic:
        'Some patients have genetic susceptibility related to complement genes. It may also be triggered by infection, pregnancy, medications, transplantation, or other conditions. Whether it is hereditary and the family risk need to be determined through genetic testing.',
      hasTreatment:
        'Prompt recognition and management by nephrology/hematology is needed. Treatment may include supportive care, plasma therapy, complement-related therapy, and dialysis, depending on the cause, severity, and local availability.',
      commonDelayReason:
        'Early symptoms such as anemia, fatigue, decreased urine output, low platelets, or abnormal kidney function may be addressed separately, without recognizing hemolysis, low platelets, and kidney injury as a connected pattern.',
    },
    patientJourney: {
      whenToSuspect: [
        'Sudden decrease in urine output, blood in urine, or rapidly worsening kidney function.',
        'Anemia, yellowing of skin/eyes, fatigue, combined with dropping platelet counts.',
        'Lab findings showing elevated lactate dehydrogenase, schistocytes, or other evidence of hemolysis.',
        'High blood pressure, headache, seizures, or changes in consciousness indicating kidney or nervous system involvement.',
        'Blood and kidney abnormalities appearing after infection, pregnancy, postpartum, transplantation, or certain medications.',
      ],
      commonWrongTurns: [
        'Managing with standard approaches for ordinary kidney inflammation or infection without simultaneously evaluating for hemolysis and platelet issues.',
        'Considering low platelet count alone as a blood disorder, overlooking kidney injury and possible complement-related causes.',
        'Failing to promptly rule out typical HUS, TTP, systemic autoimmune disease, and other similar conditions.',
        'Stopping follow-up after improvement in the acute phase, overlooking risks of recurrence and chronic kidney damage.',
      ],
      firstDepartments: [
        'Emergency Department',
        'Nephrology',
        'Pediatric Nephrology',
        'Hematology',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Compile results of complete blood count, platelets, creatinine, urine tests, LDH, bilirubin, haptoglobin, peripheral blood smear, and other relevant tests.',
        'Record recent diarrhea, infections, pregnancy/postpartum history, medications, transplantation, autoimmune disease, or family history.',
        'Bring records of blood pressure, urine output, dialysis, transfusions, plasma therapy, or complement-related treatment if any.',
        'Confirm with your doctor whether typical HUS, TTP, and other thrombotic microangiopathies have been ruled out.',
      ],
      testsToAskAbout: [
        'Complete blood count, reticulocyte count, peripheral blood smear, LDH, bilirubin, haptoglobin.',
        'Creatinine, urine tests, urine protein, blood pressure, and kidney imaging.',
        'ADAMTS13 activity, to differentiate TTP.',
        'Complement C3/C4, complement regulatory antibodies, or genetic testing.',
        'Diarrhea-related pathogens and Shiga toxin testing, as applicable to rule out typical HUS.',
      ],
      questionsForDoctor: [
        'Based on current findings, does this look more like aHUS, typical HUS, TTP, or another thrombotic microangiopathy?',
        'How significant is the current kidney injury, and is dialysis or intensive care needed?',
        'Is complement-related treatment or genetic testing needed?',
        'What special precautions should be taken during future infections, pregnancy, surgery, or when taking medications?',
        'Should family members be screened or receive genetic counseling?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>aHUS often presents with hemolytic anemia, low platelets, and acute kidney injury. Patients may experience fatigue, pale complexion, yellowing of skin/eyes, decreased urine output, blood in urine, swelling, high blood pressure, headache, nausea, vomiting, seizures, or changes in consciousness.</p>',
      diagnosis:
        '<p>Diagnosis requires identification of thrombotic microangiopathy and exclusion of typical HUS, TTP, infections, medications, autoimmune diseases, pregnancy-related conditions, and other causes. Testing typically includes hemolysis markers, kidney function, urine tests, ADAMTS13, complement evaluation, and genetic testing as needed.</p>',
      treatment:
        '<p>During the acute phase, rapid management by nephrology, hematology, and critical care teams is needed. Treatment may include fluid and blood pressure management, transfusions, dialysis, plasma therapy, or complement pathway-related therapy. The specific choice depends on the diagnostic assessment, severity, and local availability of medications.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on kidney function, blood pressure, urine protein, blood counts, recurrence risk, and trigger factors. Children also need monitoring of growth and development; women of childbearing age need specialist evaluation before pregnancy.</p>',
      fertilityOrFamily:
        '<p>Some cases of aHUS are related to genetic susceptibility in complement-related genes. Inheritance patterns may be autosomal dominant, autosomal recessive, or more complex. After diagnosis, genetic counseling can be sought to discuss family member screening and reproductive risks.</p>',
      emergencySigns:
        '<p>Seek immediate medical attention if there is significant decrease or absence of urine output, severe fatigue or pallor, worsening yellowing of skin/eyes, seizures, changes in consciousness, severe headache or visual disturbances, markedly elevated blood pressure, or difficulty breathing.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Genetic Atypical Hemolytic-Uremic Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1367/',
      },
      {
        name: 'MedlinePlus Genetics: Atypical hemolytic-uremic syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/atypical-hemolytic-uremic-syndrome/',
      },
    ],
    symptoms:
      '<p>Common clues include hemolytic anemia, low platelets, decreased urine output, abnormal kidney function, high blood pressure, and neurological symptoms.</p>',
    diagnosis:
      '<p>Evaluation typically includes hemolysis markers, platelets, kidney function, urine tests, ADAMTS13, complement testing, exclusion of infections, and relevant genetic testing.</p>',
    treatment:
      '<p>Acute phase requires prompt specialist management. Treatment may involve supportive care, dialysis, plasma therapy, or assessment for complement-related therapy.</p>',
    prognosis:
      '<p>The disease course and recurrence risk vary considerably. Early recognition, appropriate acute management, and long-term kidney follow-up are important.</p>',
    categorySlug: 'renal-urologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 308,
      name: 'atypical-hemolytic-uremic-syndrome-journey.png',
      url: '/images/diseases/atypical-hemolytic-uremic-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-autoimmune-encephalitis',
    id: 11,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Autoimmune Encephalitis',
    nameEn: 'Autoimmune Encephalitis',
    alias: 'AE, Autoimmune Encephalitis',
    slug: 'autoimmune-encephalitis',
    oneSentence:
      'Autoimmune encephalitis is a group of brain inflammations caused when the immune system attacks brain tissue or structures related to nerve cells, which may cause changes in behavior and mental state, memory loss, seizures, altered consciousness, and movement abnormalities.',
    plainName:
      'Brain inflammation caused by the immune system mistakenly attacking the brain',
    prevalence:
      'A relatively uncommon but increasingly recognized neuroimmune disease; the exact prevalence varies depending on antibody testing and diagnostic capabilities.',
    searchIntents: [
      'autoimmune encephalitis early symptoms',
      'sudden psychiatric symptoms seizures memory loss',
      'autoimmune encephalitis neurology or psychiatry',
      'autoimmune encephalitis antibody testing',
      'autoimmune encephalitis recovery after treatment',
    ],
    quickLook: {
      whatItIs:
        'Autoimmune encephalitis is different from ordinary viral or bacterial infectious encephalitis. It may be related to autoantibodies, tumors, post-infection immune responses, or other autoimmune conditions. Some patients can recover significantly with timely treatment.',
      whoToSeeFirst:
        'For acute behavioral changes, seizures, or altered consciousness, go to the emergency department or neurology department first. When psychiatric symptoms are prominent, psychiatry can help with evaluation, but neuroimmune and encephalitis-related tests should not be skipped.',
      isGenetic:
        'Usually not a typical inherited disease. Some patients may have an autoimmune background or tumor-related triggers, which need to be assessed based on age, sex, and antibody type.',
      hasTreatment:
        'Treatable, but early recognition is important. Treatment may include immunotherapy, seizure control, and intensive care support, as well as screening for and managing underlying tumors. The specific treatment plan should be made by neurology or neuroimmunology specialists.',
      commonDelayReason:
        'Early symptoms may include anxiety, insomnia, hallucinations, rambling speech, memory problems, or behavioral changes, which can easily be treated only as a psychiatric issue until seizures, altered consciousness, or autonomic dysfunction appear and encephalitis is finally considered.',
    },
    patientJourney: {
      whenToSuspect: [
        'Noticeable changes in personality, behavior, memory, or mental state within days to weeks.',
        'New-onset seizures or convulsions, or sudden worsening of existing epilepsy.',
        'Psychiatric symptoms along with post-fever changes, fluctuating consciousness, movement abnormalities, involuntary mouth or face movements, or autonomic instability.',
        'Cerebrospinal fluid, EEG, or MRI suggesting inflammation, seizure activity, or limbic system involvement.',
        'Acute psychiatric symptoms in adolescents or young women, along with clues of seizures or involuntary movements.',
      ],
      commonWrongTurns: [
        'Treating only as a psychiatric disorder without evaluating new-onset seizures, altered consciousness, or neurological signs.',
        'Doing an MRI once and, if normal, ruling out encephalitis without considering cerebrospinal fluid, EEG, and disease progression.',
        'Fully excluding autoimmune encephalitis after negative antibody results, ignoring clinical judgment based on overall presentation.',
        'Lack of follow-up for cognition, sleep, mood, and relapse risk after improvement in the acute phase.',
      ],
      firstDepartments: [
        'Emergency Department',
        'Neurology',
        'Neuroimmunology Clinic',
        'Psychiatry Consultation',
        'Oncology-related Departments (based on screening results)',
      ],
      diagnosisChecklist: [
        'Record the timeline of behavioral, memory, seizure, fever, infection, medication, and tumor-related history.',
        'Bring EEG, cerebrospinal fluid, MRI/CT, autoantibody, infection workup, and tumor screening results.',
        'Record fluctuating consciousness, sleep patterns, speech problems, movement abnormalities, autonomic symptoms, and safety risks.',
        'Ask your doctor whether you need repeat cerebrospinal fluid, EEG, antibody panels, or tumor screening.',
      ],
      testsToAskAbout: [
        'Cerebrospinal fluid tests, including cell count, protein, oligoclonal bands, infection workup, and autoimmune antibodies.',
        'EEG to assess seizure activity and brain function abnormalities.',
        'Brain MRI, with follow-up or additional imaging as needed.',
        'Nerve autoantibody tests in both blood and cerebrospinal fluid.',
        'Tumor screening based on age, sex, and antibody type.',
      ],
      questionsForDoctor: [
        'Is this more likely infectious encephalitis, autoimmune encephalitis, or another cause?',
        'Is immunotherapy needed urgently, and what are the risks and monitoring indicators?',
        'How will seizures, sleep, behavioral changes, and cognitive problems be managed separately?',
        'Is tumor screening needed, and how often should it be repeated?',
        'After discharge, how will cognitive rehabilitation, follow-up, and relapse warning be arranged?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Autoimmune encephalitis can present with rapid progressive behavioral changes, memory loss, consciousness fluctuations, seizures, involuntary movements, speech difficulties, sleep disturbances, autonomic instability, or breathing problems within a short period. Manifestations vary greatly depending on antibody type and age group.</p>',
      diagnosis:
        '<p>Diagnosis usually combines disease course, neurological examination, cerebrospinal fluid, EEG, MRI, infection workup, nerve autoantibody testing, and tumor screening. Antibody results are helpful, but doctors still need to make clinical judgment based on overall presentation.</p>',
      treatment:
        '<p>Treatment usually includes immunotherapy, seizure control, and intensive care support, along with management of any underlying tumors as appropriate. Common immunotherapy approaches may involve steroids, immunoglobulin, plasma exchange, or subsequent immunosuppressive therapy; the specific treatment plan should be determined by the specialist team.</p>',
      longTermCare:
        '<p>During recovery, attention should be paid to memory, concentration, sleep, mood, seizure control, return to school or work, and home care. Some patients need neurological rehabilitation, psychological support, and longer-term follow-up.</p>',
      fertilityOrFamily:
        '<p>Autoimmune encephalitis is usually not a typical inherited disease. If related to tumors, pregnancy, or other autoimmune conditions, neurology, obstetrics and gynecology, oncology, or other relevant specialists should jointly assess the follow-up plan.</p>',
      emergencySigns:
        '<p>New or persistent seizures, declining consciousness, severe agitation with safety concerns, breathing abnormalities, persistent high fever, autonomic instability, or rapidly worsening behavioral changes require immediate emergency care.</p>',
    },
    sources: [
      {
        name: 'Mayo Clinic: Autoimmune encephalitis symptoms and causes',
        type: 'official',
        url: 'https://www.mayoclinic.org/diseases-conditions/autoimmune-encephalitis/symptoms-causes/syc-20576380',
      },
      {
        name: 'Mayo Clinic: Autoimmune encephalitis diagnosis and treatment',
        type: 'official',
        url: 'https://www.mayoclinic.org/diseases-conditions/autoimmune-encephalitis/diagnosis-treatment/drc-20576406',
      },
      {
        name: 'Chinese Expert Consensus on Diagnosis and Treatment of Autoimmune Encephalitis (2022)',
        type: 'clinical-guideline',
        url: 'https://www.wjdpn.cn/epilepsy/medical-file-download/download/57-neuromuscular-system-diseases/181-%E4%B8%AD%E5%9B%BD%E8%87%AA%E8%BA%AB%E5%85%8D%E7%96%AB%E6%80%A7%E8%84%91%E7%82%8E%E8%AF%8A%E6%B2%BB%E4%B8%93%E5%AE%B6%E5%85%B1%E8%AF%86.html',
      },
    ],
    symptoms:
      '<p>Common clues include acute or subacute behavioral changes, memory loss, seizures, consciousness fluctuations, involuntary movements, and autonomic abnormalities.</p>',
    diagnosis:
      '<p>Assessment usually includes cerebrospinal fluid, EEG, brain MRI, infection workup, nerve autoantibody testing, and tumor screening.</p>',
    treatment:
      '<p>Treatment requires evaluation by neurology or neuroimmunology specialists, focusing on immunotherapy, seizure control, and intensive care support, as well as management of any underlying tumors.</p>',
    prognosis:
      '<p>Many patients can recover gradually with timely treatment and rehabilitation support, but cognitive, mood, seizure, and relapse risks need ongoing follow-up.</p>',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 309,
      name: 'autoimmune-encephalitis-journey.png',
      url: '/images/diseases/autoimmune-encephalitis-journey.png',
    },
    tagSlugs: [],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-als',
    id: 1,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Amyotrophic Lateral Sclerosis',
    nameEn: 'Amyotrophic Lateral Sclerosis',
    alias: "Lou Gehrig's disease, ALS, Motor Neuron Disease",
    icd10Code: 'G12.2',
    slug: 'amyotrophic-lateral-sclerosis',
    oneSentence:
      'Amyotrophic Lateral Sclerosis is a progressive neurological disease affecting motor neurons, which can gradually cause muscle weakness, atrophy, and impaired swallowing and breathing.',
    plainName: 'Progressive Motor Neuron Disease',
    prevalence:
      'Estimated at approximately 2–5 per 100,000 people worldwide, though prevalence varies by region, age structure, and reporting methods.',
    searchIntents: [
      'ALS early symptoms',
      'ALS which doctor to see',
      'muscle twitching weakness ALS',
      'motor neuron disease EMG testing',
      'ALS swallowing breathing risk',
    ],
    quickLook: {
      whatItIs:
        'ALS mainly affects the nerve cells that control voluntary movement. Sensation, consciousness, and eye movements are relatively preserved in many patients, but muscles of the limbs, speech, swallowing, and breathing may be progressively affected.',
      whoToSeeFirst:
        'Prioritize neurology, ideally a clinic with experience in neuromuscular disease, motor neuron disease, or electromyography (EMG) assessment. If you have breathing difficulty, choking episodes, or significant weight loss, respiratory and nutritional support should be assessed promptly.',
      isGenetic:
        'Most ALS cases are sporadic; a minority are familial. If there is a family history of ALS, frontotemporal dementia, or earlier-onset cases, consider asking neurology or genetic counseling whether gene testing is appropriate.',
      hasTreatment:
        "There is currently no treatment that can reverse the disease. Standard management usually includes disease-modifying medication assessment, respiratory and nutritional support, rehabilitation, symptom management, and care planning. Specific medications and new drug information should be based on local regulatory approval status and your doctor's advice.",
      commonDelayReason:
        'Early weakness, twitches, clumsiness, or slurred speech are easily mistaken for cervical spine disease, lumbar disc problems, stroke sequelae, anxiety, or simple muscle strain, leading to delayed EMG and neurological referral.',
    },
    patientJourney: {
      whenToSuspect: [
        'Progressive weakness or clumsiness in one hand or foot lasting weeks to months.',
        'Muscle twitching, fasciculations, or atrophy accompanying worsening weakness.',
        'Slurred speech, choking when swallowing, drooling, or voice changes.',
        'Frequent tripping, difficulty lifting the foot, or declining fine motor skills.',
        'Progressive motor decline without obvious numbness.',
      ],
      commonWrongTurns: [
        'Long-term treatment for cervical or lumbar spine disease or peripheral nerve compression without explaining widespread progression.',
        'Managing only individual symptoms without tracking whether weakness spreads to other areas.',
        'Delaying respiratory function and nutritional assessment until swallowing or breathing is significantly affected.',
        'Overlooking mood, communication, care planning, and family support until a crisis occurs.',
      ],
      firstDepartments: [
        'Neurology',
        'Neuromuscular disease clinic',
        'Rehabilitation medicine',
        'Respiratory medicine (when respiratory symptoms arise)',
      ],
      diagnosisChecklist: [
        'Record when and in what order weakness, fasciculations, swallowing, or speech changes first appeared.',
        'Bring cervical/lumbar spine imaging, brain imaging, EMG, nerve conduction studies, blood tests, and prior diagnostic records.',
        'List weight changes, choking episodes, nighttime awakenings, morning headaches, shortness of breath with activity.',
        'Gather family history of ALS, motor neuron disease, frontotemporal dementia, or similar neurodegenerative conditions.',
      ],
      testsToAskAbout: [
        'EMG and nerve conduction studies.',
        'Brain, cervical, or lumbar spine imaging to rule out similar conditions.',
        'Respiratory function assessment, such as vital capacity, overnight ventilation, or blood gas studies.',
        'Swallowing and nutritional assessment, involving speech therapy, nutrition, and rehabilitation teams as needed.',
        'Gene testing for ALS when there is a family history or younger onset.',
      ],
      questionsForDoctor: [
        'Does the current evidence support ALS? What other similar conditions still need to be ruled out?',
        'What is my current stage of respiratory and swallowing risk, and how often should I be rechecked?',
        'Which medications or supportive treatments are suitable for me, and what are the expected goals?',
        'When should I consider non-invasive ventilation, feeding tube, communication aids, or home care adjustments?',
        'What emergency signs and daily caregiving skills do family members need to learn?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>ALS often presents with progressive muscle weakness, muscle atrophy, fasciculations, spasticity, tripping, declining fine motor skills, slurred speech, difficulty swallowing, or breathing difficulty. Symptoms may start in the limbs or in muscles related to speech and swallowing.</p><p>Progression speed varies widely among patients. Sensory numbness is typically not a main feature; if numbness, pain, or single nerve root symptoms predominate, other conditions will also be considered.</p>',
      diagnosis:
        '<p>Diagnosis usually requires neurology to combine medical history, neurological examination, EMG and nerve conduction studies, and to rule out similar conditions such as cervical cord disease, peripheral neuropathy, myopathy, metabolic or immune-related disorders through imaging and blood tests.</p><p>A minority of patients have a familial inheritance background; based on age, family history, and clinical presentation, the doctor may suggest genetic testing. Genetic results require professional interpretation and cannot be used alone to predict disease course.</p>',
      treatment:
        "<p>The goal of treatment is to slow functional decline as much as possible, proactively manage respiratory and nutritional risks, improve communication, and maintain quality of life. Neurology can assess whether disease-modifying medications are appropriate, while coordinating with rehabilitation, respiratory, nutrition, speech therapy, psychology, and nursing teams.</p><p>Information about new drugs and clinical trials changes rapidly and should be based on local regulatory approval, hospital availability, and the treating physician's assessment. Do not purchase or stop medications on your own, and do not treat single-drug promotion as confirmed efficacy.</p>",
      longTermCare:
        '<p>Long-term management focuses on regular assessment of strength, swallowing, weight, respiratory function, communication ability, sleep, pain, spasticity, mood, and caregiver burden. Earlier establishment of respiratory support, nutritional support, assistive devices, and home care plans is generally more effective than crisis-driven interventions.</p>',
      fertilityOrFamily:
        '<p>Most ALS cases do not have a clear familial inheritance pattern. If there are multiple family members with ALS, frontotemporal dementia, or younger-onset disease, it is recommended to discuss genetic testing, family member risk, and reproductive issues under the guidance of neurology and genetic counseling.</p>',
      emergencySigns:
        '<p>If you experience significant shortness of breath, inability to lie flat, nighttime awakenings, worsening morning headaches, frequent choking episodes, rapid weight loss, fever with productive cough or suspected aspiration, seek medical care promptly. If you are using respiratory support equipment and the device malfunctions or your breathing suddenly worsens, contact your medical team or go to the emergency department right away.</p>',
    },
    sources: [
      {
        name: 'National Institute of Neurological Disorders and Stroke: Amyotrophic Lateral Sclerosis',
        type: 'official',
        url: 'https://www.ninds.nih.gov/health-information/disorders/amyotrophic-lateral-sclerosis-als',
      },
      {
        name: 'MedlinePlus: Amyotrophic Lateral Sclerosis',
        type: 'official',
        url: 'https://medlineplus.gov/amyotrophiclateralsclerosis.html',
      },
      {
        name: 'MedlinePlus Genetics: Amyotrophic lateral sclerosis',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/amyotrophic-lateral-sclerosis/',
      },
    ],
    symptoms:
      '<p>Common features include progressive muscle weakness, muscle atrophy, fasciculations, swallowing or speech difficulty. Most patients retain relatively preserved consciousness and sensory function.</p>',
    diagnosis:
      '<p>Diagnosis typically combines neurological examination, EMG, nerve conduction studies, imaging to exclude other causes, and genetic testing when indicated.</p>',
    treatment:
      '<p>Treatment focuses on disease-modifying medication assessment, respiratory and nutritional support, rehabilitation training, symptom management, and multidisciplinary follow-up.</p>',
    prognosis:
      '<p>Disease course varies widely. Early identification of respiratory, swallowing, and nutritional risks, with proactive arrangement of supportive measures, can help improve quality of life and continuity of care.</p>',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 310,
      name: 'amyotrophic-lateral-sclerosis-journey.png',
      url: '/images/diseases/amyotrophic-lateral-sclerosis-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-kallmann-syndrome',
    id: 3,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
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
    searchIntents: [
      'Kallmann syndrome which doctor to see',
      'delayed puberty poor sense of smell',
      'hypogonadotropic hypogonadism testing',
      'Kallmann syndrome fertility treatment',
      'Kallmann syndrome genetic testing',
    ],
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
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 301,
      name: 'kallmann-syndrome-journey.png',
      url: '/images/diseases/kallmann-syndrome-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-autoimmune-hypophysitis',
    id: 12,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Autoimmune Hypophysitis',
    nameEn: 'Autoimmune Hypophysitis',
    alias: 'Lymphocytic hypophysitis, IgG4-related hypophysitis',
    slug: 'autoimmune-hypophysitis',
    oneSentence:
      'Autoimmune hypophysitis is a rare condition where immune inflammation affects the pituitary gland, which may cause headache, vision changes, diabetes insipidus, or multiple hormone deficiencies.',
    plainName:
      'A rare condition where immune inflammation affects pituitary function',
    prevalence:
      'Overall very rare, with widely varying estimates in published research; some types are more common in pregnant or postpartum women, and can also occur in other populations or in contexts related to immunotherapy.',
    quickLook: {
      whatItIs:
        'The pituitary is a key endocrine organ that regulates the adrenal glands, thyroid, gonads, growth, and water-salt balance. When autoimmune hypophysitis occurs, inflammation can cause enlargement of the pituitary gland or stalk, and may lead to decreased function of certain hormone axes.',
      whoToSeeFirst:
        'It is recommended to first visit endocrinology for evaluation; if there are vision or visual field changes, or imaging suggests a sellar mass, neurosurgery and ophthalmology are often involved in the assessment.',
      isGenetic:
        'It is usually not a single-gene hereditary disorder. It is more often related to autoimmune conditions, pregnancy/postpartum immune changes, IgG4-related disease, or immune checkpoint inhibitor therapy.',
      hasTreatment:
        'There are treatment and follow-up options, but these should be comprehensively determined by an endocrinology specialist based on hormone deficiencies, compression symptoms, imaging changes, and the underlying cause. Do not self-prescribe or adjust hormone medications.',
      commonDelayReason:
        'Early symptoms such as headache, fatigue, cold intolerance, menstrual changes, or increased thirst and urination are not specific; they can easily be mistaken for ordinary headache, postpartum tiredness, thyroid problems, or urinary issues. Imaging may also be confused with pituitary adenoma.',
    },
    patientJourney: {
      whenToSuspect: [
        'Persistent or recurrent headache, especially with vision loss, visual field defects, or a sense of eye pressure.',
        'Obvious signs of pituitary hormone deficiency such as fatigue, low blood pressure, cold intolerance, menstrual irregularities, decreased libido, or insufficient milk production after childbirth.',
        'Increased thirst, frequent urination, or notably increased nighttime urination, suggesting possible central diabetes insipidus.',
        'Sellar lesion, headache, and endocrine abnormalities during pregnancy or the postpartum period.',
        'New endocrine symptoms during or after treatment with immune checkpoint inhibitors.',
        'Evidence of Hashimoto thyroiditis, systemic autoimmune disease, or IgG4-related disease.',
      ],
      commonWrongTurns: [
        'Treating headache as ordinary or migraine without simultaneously evaluating pituitary hormones and sellar imaging.',
        'Attributing postpartum fatigue, inability to lactate, or menstrual irregularities to slow recovery, missing pituitary insufficiency.',
        'Attributing increased thirst and urination to drinking habits or urinary issues without checking for diabetes insipidus.',
        'Seeing pituitary enlargement and immediately interpreting it as pituitary adenoma without considering inflammation, immunity, and hormone axis information.',
        'Self-discontinuing or adjusting hormone replacement medications without medical guidance.',
      ],
      firstDepartments: [
        'Endocrinology',
        'Neurosurgery (when compression symptoms are present or sellar mass needs to be differentiated)',
        'Ophthalmology (visual acuity and visual field evaluation)',
        'Rheumatology (when IgG4-related disease or other systemic autoimmune disease is suspected)',
      ],
      diagnosisChecklist: [
        'Compile information on headache, vision and visual field changes, polydipsia and polyuria, menstrual/sexual function, postpartum lactation, and history of immunotherapy.',
        'Bring pituitary MRI with and without contrast, visual field testing, previous hormone test results, and medication list.',
        'Confirm with your doctor whether a complete pituitary hormone axis evaluation is needed, including adrenal, thyroid, gonadal, growth hormone axes and prolactin.',
        'Document any history of autoimmune disease, IgG4-related disease, infection, tumor treatment, or other sellar conditions.',
      ],
      testsToAskAbout: [
        'Pituitary and target gland hormone evaluation, such as ACTH/cortisol, TSH/free T4, LH/FSH, sex hormones, prolactin, and IGF-1.',
        'Contrast-enhanced sellar MRI and follow-up imaging, paying attention to pituitary size, stalk, and compression of the optic chiasm.',
        'Visual field testing.',
        'Evaluation for central diabetes insipidus if polydipsia and polyuria are present.',
        'Tests to differentiate autoimmune, IgG4-related disease, or infectious/granulomatous conditions.',
        'Whether neurosurgical evaluation for biopsy is needed if the diagnosis is unclear, the lesion is progressing, or other tumor or infection is suspected.',
      ],
      questionsForDoctor: [
        'Is my condition more likely autoimmune hypophysitis, IgG4-related hypophysitis, pituitary adenoma, or another sellar disease?',
        'Which hormone axes are currently affected? Which need treatment first, and which require long-term monitoring?',
        'Is there a risk of optic chiasm compression or diabetes insipidus? How often should I have imaging and visual field checks?',
        'Is the treatment goal to relieve compression, control inflammation, or replace deficient hormones?',
        'If I am receiving tumor immunotherapy, how should endocrine management be coordinated with oncology?',
        'What symptoms indicate that I need emergency care or should contact my doctor right away?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Manifestations of autoimmune hypophysitis come from two aspects: compression symptoms from inflammation and enlargement of the pituitary or stalk, such as headache, visual field defects, or vision loss; and pituitary hormone insufficiency or posterior lobe involvement, such as fatigue, low blood pressure, cold intolerance, menstrual or sexual function changes, insufficient postpartum lactation, increased thirst and urination. Presentation varies considerably across subtypes, disease stages, and triggers.</p>',
      diagnosis:
        '<p>Diagnosis usually combines clinical presentation, pituitary hormone axis testing, sellar MRI, visual field examination, and clues for autoimmune or IgG4-related disease. Pituitary biopsy can provide pathological evidence but is invasive and usually only considered by a specialist team when the diagnosis is unclear, the lesion is progressing, or tumor or infection is suspected.</p><p>Physicians need to rule out pituitary adenoma, Rathke cleft cyst, craniopharyngioma, infection, sarcoidosis, Langerhans cell histiocytosis, IgG4-related disease, and immunotherapy-related hypophysitis.</p>',
      treatment:
        '<p>Treatment depends on the presence of compression symptoms, hormone deficiencies, diabetes insipidus, lesion progression, and the underlying cause. Management may include hormone replacement, anti-inflammatory or immunotherapy, imaging follow-up, and neurosurgical evaluation in select cases. Specific medication choices, order, duration, and tapering should be determined by your physician based on test results.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on pituitary hormone axes, visual acuity and fields, sellar MRI changes, urine output/thirst, and signs of recurrence. Patients with confirmed hormone deficiencies should keep diagnosis records, medication lists, and emergency instructions. Before stressful events such as infection, surgery, trauma, or severe illness, confirm management plans with your treating doctor.</p>',
      fertilityOrFamily:
        '<p>When pituitary function is affected, menstruation, ovulation, sex hormones, lactation, and pregnancy planning may all be impacted. For patients of childbearing age with needs around conception, pregnancy, or postpartum management, a joint evaluation by endocrinology and obstetrics is recommended. This condition is generally not directly hereditary; family risk is more related to autoimmune background.</p>',
      emergencySigns:
        '<p>If you experience sudden severe headache, rapid vision or visual field decline, altered consciousness, severe low blood pressure, repeated vomiting, obvious dehydration, or notable worsening in someone with known pituitary/adrenal insufficiency during fever, surgery, or trauma, seek emergency care promptly and proactively inform providers of your hypophysitis or pituitary insufficiency history.</p>',
    },
    sources: [
      {
        name: 'Japan Endocrine Society: Autoimmune and IgG4-related hypophysitis guideline',
        type: 'clinical-guideline',
        url: 'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
      },
      {
        name: 'Endotext: Hypophysitis',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK519842/',
      },
      {
        name: 'Hypophysitis: Evaluation and Management',
        type: 'review',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5471685/',
      },
    ],
    symptoms:
      '<p>Common clues include headache, vision or visual field changes, polydipsia and polyuria, and pituitary hormone axis deficiencies such as adrenal, thyroid, and gonadal insufficiency.</p>',
    diagnosis:
      '<p>Evaluation usually combines pituitary hormone testing, sellar MRI, visual field testing, and differentiation from autoimmune/IgG4-related disease.</p>',
    treatment:
      '<p>Treatment should be planned by an endocrinology specialist based on compression symptoms, hormone deficiencies, and the underlying cause; options may include hormone replacement, anti-inflammatory or immunotherapy, and follow-up imaging.</p>',
    prognosis:
      '<p>Clinical course varies widely. Timely recognition of hormone deficiencies, optic pathway compression, and diabetes insipidus, along with regular follow-up, helps reduce acute risks and long-term underdiagnosis.</p>',
    sourceName: 'Japan Endocrine Society guideline',
    sourceUrl:
      'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 312,
      name: 'autoimmune-hypophysitis-journey.png',
      url: '/images/diseases/autoimmune-hypophysitis-journey.png',
    },
    tagSlugs: ['endocrine'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId:
      'disease-autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    id: 13,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Autoimmune Insulin Receptopathy (Type B Insulin Resistance)',
    nameEn: 'Autoimmune Insulin Receptopathy (Type B Insulin Resistance)',
    alias:
      'Type B Insulin Resistance Syndrome, Type B Insulin Resistance, TBIR',
    slug: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    oneSentence:
      'Autoimmune insulin receptopathy is an extremely rare autoimmune disorder caused by autoantibodies against the insulin receptor. It can lead to severe insulin resistance, high blood sugar, and may also cause low blood sugar.',
    plainName:
      'A rare disease where immune antibodies interfere with insulin receptors',
    prevalence:
      'Extremely rare; the exact prevalence is unknown. Published literature mostly consists of case reports and case series. It is often associated with a background of autoimmune diseases such as systemic lupus erythematosus.',
    quickLook: {
      whatItIs:
        'In this condition, the immune system produces antibodies targeting the insulin receptor, disrupting insulin signaling. Depending on how the antibodies act, it can present as difficult-to-control high blood sugar with marked insulin resistance, or as low blood sugar, or wide swings in blood glucose levels.',
      whoToSeeFirst:
        "It is recommended to first visit an endocrinology department for evaluation. If there are signs of underlying autoimmune diseases such as systemic lupus erythematosus, Sjögren's syndrome, or dermatomyositis, a rheumatology department is usually also needed for joint management.",
      isGenetic:
        'This is generally not a hereditary insulin receptor defect; it is caused by an autoimmune mechanism. Family members may have a background of autoimmune diseases, but it should not be understood as a single-gene inherited disorder.',
      hasTreatment:
        'There are treatment approaches, but evidence mostly comes from case series and expert experience. Treatment usually addresses blood sugar safety, hypoglycemia prevention, and autoimmune disease control at the same time. Specific plans should be developed by a specialized medical team.',
      commonDelayReason:
        'Because it is very rare, it is often initially treated as ordinary type 2 diabetes, severe insulin resistance, polycystic ovary syndrome, insulinoma, or other causes of low blood sugar. Only when the degree of blood sugar abnormality does not match the common picture is the possibility of this condition considered.',
    },
    patientJourney: {
      whenToSuspect: [
        'Blood sugar is very difficult to control, and insulin requirements or blood sugar fluctuations are clearly beyond what is typical for common diabetes.',
        'Experiencing both high blood sugar and repeated low blood sugar, or unexplained low blood sugar without using any glucose-lowering medications.',
        'Having marked acanthosis nigricans, but the body type, lipids, or other features do not fully match common metabolic syndrome.',
        "Having systemic lupus erythematosus, Sjögren's syndrome, dermatomyositis, scleroderma, or other autoimmune diseases.",
        'In women, having signs of high androgens or polycystic ovary-like features, but the degree of insulin resistance is unusually prominent.',
        'Standard diabetes management is not working well, and the doctor suggests screening for rare insulin resistance syndromes.',
      ],
      commonWrongTurns: [
        'Treating it only as ordinary diabetes and increasing medications without investigating the autoimmune background and acanthosis nigricans.',
        'When low blood sugar occurs, only looking for insulinoma without considering insulin receptor antibody-related hypoglycemia.',
        'Managing high androgen or menstrual issues solely as polycystic ovary syndrome without recognizing extreme insulin resistance.',
        'Not realizing that the same disease can present risks of both high and low blood sugar at different stages.',
        'Self-adjusting medications based on frequent blood sugar swings, which increases the risk of either hypoglycemia or hyperglycemia.',
      ],
      firstDepartments: [
        'Endocrinology department',
        'Rheumatology department',
        'Emergency department (in cases of severe hypoglycemia, ketoacidosis, or altered consciousness)',
        'Obstetrics and Gynecology / Reproductive endocrinology department (when high androgen or menstrual problems are prominent)',
      ],
      diagnosisChecklist: [
        'Compile blood sugar records, continuous glucose monitoring data, medication timeline, and episodes of low blood sugar.',
        'Bring fasting/post-meal blood sugar, HbA1c, insulin, C-peptide, lipids, and past diabetes treatment records.',
        'Record acanthosis nigricans, high androgen features, weight changes, and history of autoimmune disease diagnoses.',
        'Ask your doctor whether insulin receptor autoantibody testing is needed, or whether a referral to a center with testing or consultation capabilities is appropriate.',
        'Rule out other severe insulin resistance syndromes, insulin autoimmune syndrome, insulinoma, and drug-related hypoglycemia.',
      ],
      testsToAskAbout: [
        'Blood glucose profile, HbA1c, insulin, and C-peptide, to assess blood sugar swings and the context of insulin secretion.',
        'Autoimmune antibody panel and rheumatologic evaluation.',
        'Whether insulin receptor autoantibody testing is available and how to interpret the results.',
        'Drawing blood during a hypoglycemic episode to help differentiate among various causes of low blood sugar.',
        'Lipids, liver and kidney function, urine ketones, and blood ketones for metabolic safety monitoring.',
        'If needed, imaging to rule out pancreatic lesions, lipoatrophy, or other rare insulin resistance syndromes.',
      ],
      questionsForDoctor: [
        'Is my blood sugar abnormality more consistent with ordinary diabetes, or should we consider Type B Insulin Resistance?',
        'At present, is the main risk high blood sugar, low blood sugar, or both alternating? How should I track and respond to this?',
        'Do I need a rheumatology evaluation for a possible underlying autoimmune disease?',
        'Is there a way to test for insulin receptor autoantibodies? If the test is negative, what would serve as the diagnostic basis?',
        'Is the treatment goal short-term blood sugar safety, or long-term control of autoimmune activity?',
        'Which situations require a visit to the emergency department rather than home management?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Symptoms of autoimmune insulin receptopathy can be quite variable. Common clues include hard-to-control high blood sugar, marked thirst and frequent urination, weight loss, acanthosis nigricans, and spontaneous or recurrent low blood sugar. Some women may experience hirsutism, acne, or sparse menstrual periods due to high androgen levels. Many patients also have systemic lupus erythematosus or other autoimmune diseases.</p>',
      diagnosis:
        '<p>Diagnosis requires putting together clinical features, blood sugar data, insulin/C-peptide, lipids, checks done during hypoglycemic episodes, and the autoimmune background. A positive insulin receptor autoantibody test supports the diagnosis, but this test is not routinely available in all hospitals. Therefore, diagnosis may sometimes need to be made at a specialized center based on probabilistic evidence.</p><p>Differential diagnoses include common diabetes, other severe insulin resistance syndromes, lipoatrophy, insulin autoimmune syndrome, insulinoma, drug-related hypoglycemia, and endocrine emergencies.</p>',
      treatment:
        '<p>Treatment usually follows two lines: first, protecting blood sugar safety by preventing severe hyperglycemia, ketoacidosis, and hypoglycemia; second, assessing and controlling autoimmune activity. Immunotherapy, glucose-lowering treatment, and hypoglycemia management all need to be adjusted dynamically based on the individual situation. Doses and medications should not be copied directly from case reports.</p>',
      longTermCare:
        '<p>Long-term management requires regularly recording blood sugar, hypoglycemic episodes, medication changes, and autoimmune disease activity. Even after remission, patients should stay alert for relapse or blood sugar swings when treatment is reduced. Patients should confirm with their doctor the plan for hypoglycemia management, emergency visit criteria, and follow-up frequency.</p>',
      fertilityOrFamily:
        '<p>This condition is generally not a hereditary insulin receptor defect. Women of childbearing age with menstrual, high androgen, or fertility concerns need joint evaluation by endocrinology, rheumatology, and obstetrics/reproductive medicine teams. Pregnancy-related medications and blood sugar targets need to be individualized.</p>',
      emergencySigns:
        '<p>Repeated or severe hypoglycemia, confusion, seizures, very high blood sugar with dehydration or ketosis, nausea, vomiting, abdominal pain, abnormal breathing, loss of blood sugar control after infection, or clear worsening of an autoimmune disease — seek emergency care promptly. When doing so, proactively inform doctors of the suspected or confirmed diagnosis of Type B Insulin Resistance.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: First Catalog of Rare Diseases',
        type: 'policy',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'Orphanet: Insulin-resistance syndrome type B',
        type: 'official',
        url: 'https://www.orpha.net/en/disease/detail/2298',
      },
      {
        name: 'Endocrine Society: Type B Insulin Resistance',
        type: 'official',
        url: 'https://www.endocrine.org/patient-engagement/endocrine-library/type-b-insulin-resistance',
      },
      {
        name: 'Type B insulin resistance syndrome: a systematic review',
        type: 'review',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32813762/',
      },
    ],
    symptoms:
      '<p>May present as extreme insulin resistance, high blood sugar, acanthosis nigricans, recurrent hypoglycemia, and symptoms related to autoimmune disease.</p>',
    diagnosis:
      '<p>Evaluation usually includes blood glucose profile, insulin/C-peptide, autoimmune assessment, tests done during hypoglycemic episodes, and insulin receptor autoantibody testing when available.</p>',
    treatment:
      '<p>Treatment requires joint management by endocrinology and rheumatology, with a focus on blood sugar safety, hypoglycemia prevention, and control of autoimmune activity.</p>',
    prognosis:
      '<p>The disease course varies widely. Some patients may achieve remission, but recurrence is possible. Ongoing follow-up and clear emergency thresholds for both hypoglycemia and hyperglycemia are important.</p>',
    sourceName: 'Orphanet',
    sourceUrl: 'https://www.orpha.net/en/disease/detail/2298',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 311,
      name: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
      url: '/images/diseases/autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
    },
    tagSlugs: ['endocrine'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-beta-ketothiolase-deficiency',
    id: 14,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Beta-Ketothiolase Deficiency',
    nameEn: 'Beta-Ketothiolase Deficiency',
    alias:
      '3-ketothiolase deficiency, Alpha-methylacetoacetic aciduria, T2 deficiency, Mitochondrial acetoacetyl-CoA thiolase deficiency',
    slug: 'beta-ketothiolase-deficiency',
    oneSentence:
      'Beta-ketothiolase deficiency is a rare genetic metabolic disorder that affects isoleucine and ketone body metabolism. Infections, fasting, or stress may trigger ketoacidosis.',
    plainName:
      'A genetic metabolic disorder prone to ketoacidosis during infections or fasting',
    prevalence:
      'Very rare, with few reported cases in published medical literature; newborn screening coverage and diagnostic capacity vary by region, affecting detection rates.',
    quickLook: {
      whatItIs:
        "This is an autosomal recessive metabolic disorder linked to the ACAT1 gene. When the enzyme functions inadequately, the body's ability to process isoleucine and ketone bodies is impaired. Certain metabolites can accumulate during fever, infection, fasting, or high protein intake, potentially triggering acute metabolic crises.",
      whoToSeeFirst:
        'Children should first visit genetic-metabolic clinics or pediatric endocrinology/metabolism outpatient clinics; if they experience repeated vomiting, drowsiness, rapid breathing, dehydration, or altered consciousness, they should go directly to the emergency department.',
      isGenetic:
        'Yes, typically inherited in an autosomal recessive pattern. Confirmed families should seek genetic counseling to understand carrier testing for parents and recurrence risks for future pregnancies.',
      hasTreatment:
        'Yes, management focuses on avoiding prolonged fasting, prompt intervention during infection or vomiting, dietary and nutritional management as advised by specialists, and hospital-based supportive care during acute episodes.',
      commonDelayReason:
        'Children may appear normal between episodes, while acute attacks can be mistaken for common gastroenteritis, dehydration, or diabetic ketoacidosis. Without confirmatory newborn screening follow-up, urine organic acid analysis, or acylcarnitine profiling, diagnosis is often delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Repeated vomiting and altered mental status in infants or young children after infection, fever, or prolonged fasting.',
        'Unexplained ketoacidosis, especially when blood glucose does not fit the typical pattern of diabetic ketoacidosis.',
        'Deep, rapid breathing, dehydration, marked fatigue, or altered consciousness.',
        'Newborn screening indicating abnormal acylcarnitines such as elevated C5-OH, requiring follow-up testing.',
        'Family history of similar metabolic crises, unexplained severe illness or early death in infancy.',
      ],
      commonWrongTurns: [
        'Repeatedly treating vomiting and dehydration as common gastroenteritis without investigating the cause of ketoacidosis.',
        'Managing as diabetic ketoacidosis without further differentiation of genetic metabolic disorders.',
        'Not following up on positive screening results, missing the early management window.',
        'Considering the condition cured after symptom resolution and failing to establish emergency protocols for fever, fasting, or vomiting.',
      ],
      firstDepartments: [
        'Genetic-metabolic clinics',
        'Pediatric endocrinology/metabolism outpatient clinics',
        'Emergency department (when signs of metabolic crisis appear)',
        'Nutrition department (for long-term dietary and caloric management)',
      ],
      diagnosisChecklist: [
        'Document the triggers, food intake, vomiting, mental status, breathing changes, and emergency findings for each episode.',
        'Bring newborn screening reports, blood gas, electrolytes, blood glucose, urine ketones, blood ketones, blood ammonia, and lactate results.',
        'Ask whether blood acylcarnitine profile, urine organic acid analysis, and ACAT1 genetic testing are needed.',
        'Confirm whether a written emergency plan exists, especially for fever, vomiting, or inability to eat.',
      ],
      testsToAskAbout: [
        'Blood acylcarnitine profile, looking for abnormal C5-OH and related findings.',
        'Urine organic acid analysis for clues to organic acid metabolism disorders.',
        'Blood gas, electrolytes, blood glucose, blood/urine ketones, blood ammonia, and lactate during acute episodes.',
        'ACAT1 genetic testing and parental carrier testing.',
        'Assessment for neurological involvement and developmental milestones when indicated.',
      ],
      questionsForDoctor: [
        'Does this episode fit better with common infection and dehydration or a genetic metabolic disorder-related ketoacidosis?',
        'Does the child need to avoid prolonged fasting long-term? What symptoms during fever or vomiting warrant an emergency visit?',
        'What dietary principles should be followed? Is nutrition department involvement needed?',
        'Do we need an emergency information card? What should be included?',
        'What do the ACAT1 test results mean for sibling screening and future pregnancies?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Beta-ketothiolase deficiency often presents with acute ketoacidosis episodes in infancy or early childhood. Triggers include infection, fever, prolonged fasting, or changes in protein intake. During episodes, there may be repeated vomiting, dehydration, drowsiness, rapid breathing, seizures, or altered consciousness; symptom-free intervals may be normal.</p><p>Severe or recurrent metabolic crises may affect neurological development, so early recognition and establishing an emergency response plan are important.</p>',
      diagnosis:
        '<p>Diagnosis typically combines acute episode history, newborn screening results, blood acylcarnitine profile, urine organic acid analysis, and ACAT1 genetic testing. Some tests may show abnormalities more prominently during acute episodes, so preserving emergency results (blood gas, electrolytes, blood glucose, ketones, blood ammonia, and lactate) is valuable.</p>',
      treatment:
        '<p>Long-term management focuses on reducing triggers for metabolic crises, such as avoiding prolonged fasting, seeking early care during infection or vomiting, and following specialist-recommended dietary and nutritional management. Acute episodes typically require hospital-based fluid replacement, correction of metabolic disturbances, and monitoring of vital signs. Specific dietary restrictions, supplements, and emergency management should be individualized by genetic-metabolic specialists.</p>',
      longTermCare:
        '<p>Families should maintain diagnostic reports, genetic results, and emergency information cards, and confirm with their doctor how to handle fever, diarrhea, vomiting, surgery, or inability to eat. Follow-up typically monitors episode frequency, growth and development, nutritional status, metabolic markers, and neurodevelopment.</p>',
      fertilityOrFamily:
        '<p>This condition is typically inherited in an autosomal recessive pattern. After diagnosis, parents, siblings, and family planning can be addressed through genetic counseling to understand options such as carrier testing, prenatal diagnosis, or preimplantation genetic testing.</p>',
      emergencySigns:
        '<p>Repeated vomiting, inability to eat, marked drowsiness, rapid or deep breathing, dehydration, seizures, altered consciousness, or rapid deterioration in mental status after infection or fever all warrant prompt emergency care. Actively inform doctors of the known or suspected diagnosis of beta-ketothiolase deficiency.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Beta-ketothiolase deficiency',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
      },
      {
        name: 'HRSA Newborn Screening: Beta-Ketothiolase Deficiency',
        type: 'official',
        url: 'https://newbornscreening.hrsa.gov/conditions/beta-ketothiolase-deficiency',
      },
      {
        name: 'Orphanet: Beta-ketothiolase deficiency',
        type: 'review',
        url: 'https://www.orpha.net/en/disease/detail/134',
      },
    ],
    symptoms:
      '<p>Typical clues include repeated vomiting, dehydration, drowsiness, rapid breathing, and ketoacidosis after infection, fasting, or stress.</p>',
    diagnosis:
      '<p>Evaluation typically includes newborn screening follow-up, blood acylcarnitine profile, urine organic acid analysis, acute metabolic markers, and ACAT1 genetic testing.</p>',
    treatment:
      '<p>Management focuses on avoiding prolonged fasting, prompt intervention during infection or vomiting, specialist-guided dietary and nutritional management, and hospital-based supportive care during acute crises.</p>',
    prognosis:
      '<p>Early recognition and proper emergency management help reduce the risk of severe metabolic crises and neurological complications, but disease course varies among individuals.</p>',
    sourceName: 'MedlinePlus Genetics',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 313,
      name: 'beta-ketothiolase-deficiency-journey.png',
      url: '/images/diseases/beta-ketothiolase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-biotinidase-deficiency',
    id: 15,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Biotinidase Deficiency',
    nameEn: 'Biotinidase Deficiency',
    alias: 'BTD Deficiency, Late-onset Multiple Carboxylase Deficiency',
    slug: 'biotinidase-deficiency',
    oneSentence:
      'Biotinidase Deficiency is a genetic metabolic disorder that can be detected through newborn screening. Timely biotin supplementation can usually prevent many neurological, skin, and metabolic problems.',
    plainName:
      'An inherited condition where the body cannot properly recycle and use biotin.',
    prevalence:
      'It is a rare disease. Screening data varies widely across regions. Many countries and regions have already included it in newborn or genetic metabolic screening programs.',
    searchIntents: [
      'biotinidase deficiency newborn screen positive',
      'BTD deficiency which doctor',
      'low biotinidase activity follow-up test',
      'biotinidase deficiency seizures rash hair loss',
      'biotinidase deficiency can biotin be stopped',
    ],
    quickLook: {
      whatItIs:
        "Biotin is a vitamin involved in the function of several metabolic enzymes. When biotinidase is deficient, the body's ability to recycle and use biotin decreases. Without treatment, this may affect the nervous system, skin, hair, hearing, and vision.",
      whoToSeeFirst:
        'If newborn screening is abnormal or symptoms are suspected, it is recommended to first revisit the genetic metabolism department, pediatric endocrinology/metabolism clinic. Go to the emergency department for seizures, breathing difficulties, or altered consciousness.',
      isGenetic:
        'Yes, typically autosomal recessive, related to variants in the BTD gene. Affected families are advised to seek genetic counseling.',
      hasTreatment:
        "Yes, there is a clear management plan. The core is long-term supplementation with free biotin under a doctor's guidance, along with developmental, hearing, vision, and metabolic follow-up. Do not stop or modify the supplementation plan on your own.",
      commonDelayReason:
        'When not included in screening, or when abnormal screening results are not followed up in time, symptoms may be mistaken for eczema, epilepsy, encephalitis, developmental delay, or other neurocutaneous conditions, leading to delayed diagnosis.',
    },
    patientJourney: {
      whenToSuspect: [
        'Newborn screening indicates abnormal biotinidase activity or requests a recall for rechecking.',
        'Infants and young children develop seizures, low muscle tone, feeding difficulties, developmental delay, along with rash or hair loss.',
        'Recurrent eczema-like rash, hair loss, and fungal infections with neurological symptoms.',
        'Unexplained hearing loss, optic nerve problems, or developmental regression.',
        'Family history of biotinidase deficiency or BTD pathogenic variant carrier.',
      ],
      commonWrongTurns: [
        'Long-term treating the rash as ordinary eczema without considering the clues of seizures, hair loss, and development.',
        'Only controlling seizures with anti-epileptic drugs without investigating treatable genetic metabolic disorders.',
        'Waiting too long after an abnormal screening result without completing follow-up testing.',
        'Self-stopping biotin after symptom improvement, increasing the risk of relapse.',
      ],
      firstDepartments: [
        'Genetic Metabolism Department',
        'Pediatric Endocrinology/Metabolism Clinic',
        'Emergency Department (for seizures, breathing difficulty, or altered consciousness)',
        'Neurology, Dermatology, ENT, or Ophthalmology (coordinated evaluation based on affected systems)',
      ],
      diagnosisChecklist: [
        'Keep newborn screening reports and recall notices.',
        'Bring all records related to seizures, rash, hair loss, development, hearing, and vision.',
        'Confirm whether serum biotinidase activity testing and BTD gene testing have been done.',
        'Ask the doctor about whether it is profound deficiency, partial deficiency, or carrier status, and the corresponding follow-up plan.',
      ],
      testsToAskAbout: [
        'Serum biotinidase activity testing.',
        'BTD gene testing and parental carrier testing.',
        'Newborn screening review and necessary metabolic testing.',
        'If symptomatic: hearing, vision, neurodevelopmental, and brain MRI assessments.',
        'During seizures or metabolic crisis: blood gas, electrolytes, blood glucose, lactate, ammonia, and urine organic acids.',
      ],
      questionsForDoctor: [
        'Does my child have profound or partial deficiency? How will this affect long-term follow-up?',
        'How long does biotin need to be supplemented? Under what circumstances should I never stop it on my own?',
        'What rehabilitation and support options are available for hearing, vision, or developmental issues that have already occurred?',
        'Are there special precautions during fever, infection, or inability to eat?',
        'What genetic counseling and testing are recommended for siblings or for future pregnancies?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Without treatment, biotinidase deficiency can present with seizures, low muscle tone, developmental delay, rash, hair loss, breathing problems, feeding difficulties, hearing loss, or optic nerve involvement. Some patients experience more noticeable symptoms during infections, fever, or other stressors. Screening and early treatment can significantly alter the disease course.</p>',
      diagnosis:
        '<p>Diagnosis is primarily based on serum biotinidase activity testing, and can be confirmed with BTD gene testing to determine subtype and genetic risk. An abnormal newborn screening result does not equal a confirmed diagnosis but requires timely follow-up testing. Patients who already have neurological, skin, hearing, or vision problems also need specialist evaluation.</p>',
      treatment:
        "<p>The core of treatment is long-term supplementation with free biotin under a doctor's guidance. Early treatment can usually prevent many symptoms; hearing or vision damage that has already occurred may not fully reverse, making early identification especially important. Specific supplementation dose, follow-up frequency, and special situation management should be determined by a genetic metabolism specialist.</p>",
      longTermCare:
        '<p>Long-term follow-up focuses on growth and development, neurological status, skin health, hearing, vision, and treatment adherence. Families should keep diagnostic records and medication instructions, and avoid stopping treatment on their own. When the child enters kindergarten, school, or receives care in a different location, a brief medical summary can be prepared to help caregivers understand the importance of continuous supplementation.</p>',
      fertilityOrFamily:
        '<p>This condition is typically inherited in an autosomal recessive pattern. Affected families can learn about options such as parental carrier testing, sibling screening, recurrence risk for future pregnancies, prenatal diagnosis, or preimplantation genetic testing through genetic counseling.</p>',
      emergencySigns:
        '<p>If seizures are prolonged, consciousness is altered, breathing is difficult, there is significant drowsiness, repeated vomiting, low blood sugar, or signs of metabolic acidosis, seek emergency care promptly. Inform the doctor about the suspected or confirmed diagnosis of biotinidase deficiency and the current supplementation plan.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Biotinidase Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
      },
      {
        name: 'MedlinePlus Genetics: Biotinidase deficiency',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/biotinidase-deficiency/',
      },
      {
        name: 'HRSA Newborn Screening: Biotinidase Deficiency',
        type: 'official',
        url: 'https://newbornscreening.hrsa.gov/conditions/biotinidase-deficiency',
      },
    ],
    symptoms:
      '<p>Without treatment, symptoms may include seizures, low muscle tone, developmental delay, rash, hair loss, and hearing or vision problems.</p>',
    diagnosis:
      '<p>Diagnosis is primarily based on serum biotinidase activity testing, and can be supplemented with BTD gene testing to confirm genetic findings.</p>',
    treatment:
      "<p>The core of treatment is long-term supplementation with free biotin under a doctor's guidance, along with ongoing monitoring of development, hearing, vision, and metabolic safety.</p>",
    prognosis:
      '<p>Early screening and continuous treatment can usually prevent many symptoms; hearing or vision damage that has already occurred may not be fully reversible.</p>',
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 314,
      name: 'biotinidase-deficiency-journey.png',
      url: '/images/diseases/biotinidase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-carnitine-deficiency',
    id: 16,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Primary Carnitine Deficiency',
    nameEn: 'Primary Carnitine Deficiency',
    alias:
      'PCD, Primary Carnitine Transporter Deficiency, Carnitine Uptake Defect, OCTN2 Deficiency',
    slug: 'carnitine-deficiency',
    oneSentence:
      "Primary Carnitine Deficiency is an inherited metabolic disorder linked to the SLC22A5 gene that can affect the body's ability to use fat for energy, potentially involving low blood sugar, liver, heart muscle, and skeletal muscle.",
    plainName:
      'An inherited metabolic condition where the body cannot transport and use carnitine properly',
    prevalence:
      "This is a rare condition. Newborn screening detection rates vary widely by region. Screening results can also be influenced by the mother's carnitine status and other factors, so follow-up testing is often needed to confirm.",
    quickLook: {
      whatItIs:
        'Carnitine helps long-chain fatty acids enter the mitochondria for energy. In Primary Carnitine Deficiency, carnitine transport is impaired, making it harder for the body to use fat for energy during fasting, infection, or stress. This may lead to low-blood-sugar episodes without adequate ketones, liver abnormalities, muscle weakness, or cardiomyopathy.',
      whoToSeeFirst:
        'If newborn screening shows low free carnitine, or if a child has repeated low blood sugar, enlarged liver, or muscle weakness, or if cardiomyopathy is found with signs suggesting a metabolic condition, consider evaluation at a genetics/metabolism clinic or pediatric endocrinology/metabolism department. Go to the emergency department for altered consciousness, seizures, or abnormal heart rhythms.',
      isGenetic:
        'Yes, usually autosomal recessive, linked to variants in the SLC22A5 gene. When a child is found to have low carnitine on screening, the mother should also be evaluated for Primary Carnitine Deficiency.',
      hasTreatment:
        'Yes, there are established treatment and follow-up plans. The core is supplementation with L-carnitine under medical supervision and avoiding prolonged fasting. During illness or inability to eat, prompt management is needed. Specific dosing and adjustments should be made by a specialist.',
      commonDelayReason:
        "Low blood sugar, liver test abnormalities, muscle weakness, cardiomyopathy, or fatigue are not specific to this condition and may be misdiagnosed as hepatitis, myocarditis, epilepsy, ordinary hypoglycemia, or poor exercise tolerance. Low carnitine on newborn screening may also reflect the mother's condition, requiring assessment of both mother and child.",
    },
    patientJourney: {
      whenToSuspect: [
        'Newborn screening suggests significantly low free carnitine (C0), requiring follow-up testing.',
        'Infants or young children develop low blood sugar, drowsiness, seizures, or an enlarged liver after infections, fasting, or gastroenteritis.',
        'Children develop unexplained dilated or hypertrophic cardiomyopathy, abnormal heart rhythms, or heart function problems.',
        'Unexplained muscle weakness, muscle pain, reduced exercise tolerance, or elevated creatine kinase.',
        "Adults with long-standing fatigue or poor exercise capacity, or those discovered to have low carnitine levels because of their child's abnormal newborn screening.",
      ],
      commonWrongTurns: [
        'Treating low blood sugar and seizures only as a neurological problem without checking for fatty acid oxidation and carnitine transport abnormalities.',
        'Managing cardiomyopathy or abnormal heart rhythms only as a heart condition without considering metabolic clues.',
        'Focusing only on the child after finding low carnitine on newborn screening, without simultaneously evaluating the mother.',
        'Stopping supplementation or discontinuing follow-up after symptoms improve.',
      ],
      firstDepartments: [
        'Genetics and Metabolism',
        'Pediatric Endocrinology/Metabolism Clinic',
        'Cardiology or Pediatric Cardiology',
        'Emergency Department (for low blood sugar, altered consciousness, seizures, or abnormal heart rhythms)',
      ],
      diagnosisChecklist: [
        'Keep all newborn screening and follow-up reports, especially free carnitine and acylcarnitine profile results.',
        'Bring records of blood sugar, liver tests, ammonia, creatine kinase, ECG, and echocardiogram.',
        'Ask your doctor whether SLC22A5 gene testing is needed, and whether parents or siblings should be tested.',
        'When screening shows low carnitine, ask whether the mother also needs blood carnitine and genetic evaluation.',
        'Confirm whether you have an emergency plan for illness, surgery, fasting, or inability to eat.',
      ],
      testsToAskAbout: [
        'Blood free carnitine, total carnitine, and acylcarnitine profile.',
        'SLC22A5 gene testing with family segregation analysis.',
        'Blood sugar, blood/urine ketones, liver tests, ammonia, electrolytes, and creatine kinase.',
        'ECG and echocardiogram, with cardiology follow-up as needed.',
        'Whether the mother and siblings need carnitine levels or genetic testing too.',
      ],
      questionsForDoctor: [
        'Is the low carnitine on screening a problem in the child, or could it come from the mother? How can we confirm?',
        'How long can my child safely fast? What should we do during fever, vomiting, or surgery?',
        'How should we monitor the effectiveness and safety of L-carnitine supplementation?',
        'Do we need long-term follow-up with heart ultrasound, ECG, or heart-related markers?',
        'What genetic counseling is needed for siblings and for future pregnancies?',
      ],
    },
    medicalSections: {
      symptoms:
        "<p>Primary Carnitine Deficiency can look very different from person to person. In infants and young children, it may present with low-blood-sugar episodes without adequate ketones, poor feeding, drowsiness, an enlarged liver, elevated liver enzymes, or increased ammonia after infections, fasting, or gastroenteritis. In children, it may cause cardiomyopathy, abnormal heart rhythms, muscle weakness, or reduced exercise tolerance. Adults may present with fatigue, or may be identified because of their child's abnormal newborn screening.</p>",
      diagnosis:
        '<p>Diagnosis usually starts with significantly low blood free carnitine and an abnormal acylcarnitine profile, but low carnitine does not always mean Primary Carnitine Deficiency. Doctors need to rule out secondary carnitine deficiency, prematurity, maternal carnitine deficiency, medications, or other metabolic conditions. Biallelic pathogenic variants in SLC22A5 can support a genetic diagnosis, and functional testing of carnitine transport may sometimes be performed.</p>',
      treatment:
        "<p>Treatment centers on long-term L-carnitine supplementation under medical supervision, along with avoiding fasting longer than is safe for the person's age and condition. During infections, vomiting, surgery, inability to eat, or other stress, it may be necessary to contact a metabolism center in advance or be admitted for energy support and metabolic monitoring. Specific supplementation plans, follow-up schedules, and dose adjustments need to be individualized.</p>",
      longTermCare:
        '<p>Follow-up usually includes blood carnitine levels, growth and development, liver tests, creatine kinase, ECG, and echocardiogram. Families should keep diagnosis records, medication lists, and emergency instruction cards, and make sure schools or caregivers understand that the person cannot fast for long periods and needs prompt attention during illness.</p>',
      fertilityOrFamily:
        '<p>This condition is usually inherited in an autosomal recessive pattern. After diagnosis, parents, siblings, and patients planning pregnancies can learn about carrier testing, prenatal diagnosis, and preimplantation genetic testing through genetic counseling. Female patients need coordinated care from a metabolic specialist and obstetrician during pregnancy.</p>',
      emergencySigns:
        '<p>Seek emergency care promptly for low blood sugar with seizures or altered consciousness, marked drowsiness, repeated vomiting unable to eat, breathing problems, palpitations or suspected abnormal heart rhythms, or rapid worsening of mental status during infection. Tell the emergency team that Primary Carnitine Deficiency is suspected or diagnosed.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Primary Carnitine Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
      },
      {
        name: 'MedlinePlus Genetics: Primary carnitine deficiency',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/primary-carnitine-deficiency/',
      },
      {
        name: 'Orphanet: Primary carnitine deficiency',
        type: 'review',
        url: 'https://www.orpha.net/en/disease/detail/158',
      },
    ],
    symptoms:
      '<p>May present with low-blood-sugar without adequate ketones, an enlarged liver, muscle weakness, cardiomyopathy, abnormal heart rhythms, or adult fatigue, or may be found on screening.</p>',
    diagnosis:
      '<p>Evaluation usually includes blood carnitine and acylcarnitine profile, SLC22A5 gene testing, and ruling out maternal or secondary causes of low carnitine.</p>',
    treatment:
      '<p>Treatment centers on L-carnitine supplementation under medical supervision, avoiding prolonged fasting, and prompt energy support and medical care during illness.</p>',
    prognosis:
      '<p>Early recognition and consistent treatment usually help reduce metabolic crises and cardiac risks. When organ damage has already occurred, long-term specialized management is needed.</p>',
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 315,
      name: 'carnitine-deficiency-journey.png',
      url: '/images/diseases/carnitine-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-cardic-ion-channelopathies',
    id: 17,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Cardiac Ion Channelopathies',
    nameEn: 'Cardiac Ion Channelopathies',
    alias:
      'Hereditary Arrhythmia Syndrome, Primary Electrical Disease of the Heart',
    slug: 'cardic-ion-channelopathies',
    oneSentence:
      "Cardiac ion channelopathies are a group of inherited or acquired arrhythmia disorders affecting the heart's electrical activity, which may cause syncope, arrhythmias, or sudden death risk even when cardiac structure appears normal.",
    plainName:
      'Rare arrhythmias related to abnormal cardiac electrical signal channels',
    prevalence:
      'Varies significantly across subtypes. Long QT syndrome, Brugada syndrome, and catecholaminergic polymorphic ventricular tachycardia each have distinct population distributions and diagnostic criteria.',
    quickLook: {
      whatItIs:
        'Cardiac muscle cells rely on sodium, potassium, calcium, and other ion channels to generate and conduct electrical signals. When the related channels or regulatory proteins are abnormal, cardiac structure tests may appear essentially normal, but electrical activity is more prone to becoming uncontrolled, forming dangerous arrhythmias.',
      whoToSeeFirst:
        'When there is unexplained syncope, palpitations, exercise- or emotion-induced fainting, family history of sudden death at night, or abnormal ECG, it is recommended to visit the cardiac arrhythmia/electrophysiology specialist in the department of cardiovascular medicine; go to the emergency department for cardiac arrest, persistent chest tightness, or loss of consciousness.',
      isGenetic:
        'Many subtypes have a genetic background; common inheritance patterns include autosomal dominant and recessive inheritance. Incomplete penetrance and variable expression within the same family also exist. Genetic results need to be interpreted together with ECG and medical history.',
      hasTreatment:
        'There are risk stratification and management plans, including avoiding trigger factors, medications, implantable devices, exercise restrictions, and family screening. Specific plans should be developed by arrhythmia specialists based on subtype and risk.',
      commonDelayReason:
        'Syncope or seizure-like episodes may be mistaken for neurological problems; resting ECG may sometimes be normal; the first serious manifestation in young people may be cardiac arrest or sudden death, making family history and triggering scenarios very critical.',
    },
    patientJourney: {
      whenToSuspect: [
        'Syncope, seizure-like episodes, or palpitations during exercise, swimming, emotional excitement, startle, fever, or sleep.',
        'Cardiac structure tests are essentially normal, but there is recurrent unexplained syncope or ventricular arrhythmia.',
        'Family history of young sudden death, nocturnal sudden death, drowning-like accidents, recurrent syncope, or implanted defibrillator.',
        'ECG shows abnormal QT interval, Brugada-like changes, short QT, or exercise-induced ventricular arrhythmia.',
        'Previously diagnosed with epilepsy but episodes are highly correlated with exercise, startle, or emotional triggers, and EEG or anti-epileptic treatment cannot adequately explain the episodes.',
      ],
      commonWrongTurns: [
        'Treated only as epilepsy or ordinary syncope without ECG, Holter monitoring, or exercise provocation testing.',
        'After one normal resting ECG, completely ruled out inherited arrhythmia.',
        'Failed to ask about sudden death, syncope, arrhythmia, drowning, traffic accidents, or nocturnal deaths in three generations of family history.',
        'Interpreted genetic test results without clinical context, mistaking variants of uncertain significance as confirmed diagnosis or complete exclusion.',
        'Did not confirm with doctor which medications, fever conditions, or exercise scenarios may increase risk.',
      ],
      firstDepartments: [
        'Department of Cardiovascular Medicine (arrhythmia/electrophysiology specialty)',
        'Emergency Department (for loss of consciousness, cardiac arrest, persistent chest tightness, or severe palpitations)',
        'Pediatric Cardiology (for childhood or adolescent onset)',
        'Genetic Counseling Clinic (for family screening and family planning)',
      ],
      diagnosisChecklist: [
        'Record the timing, triggers, duration, presence of convulsions, recovery process, and witness information for each syncope or palpitation episode.',
        'Collect family history of young sudden death, syncope, arrhythmia, drowning, or unexplained accidents.',
        'Bring 12-lead ECG, Holter monitoring, exercise stress test, cardiac ultrasound, and previous emergency records.',
        'Confirm with doctor whether arrhythmia gene panel testing is needed and how results integrate with clinical risk.',
        'Check current medications for any that may affect QT interval or induce arrhythmias.',
      ],
      testsToAskAbout: [
        '12-lead ECG, repeated as needed or with adjusted right precordial lead positions.',
        'Holter monitoring or longer-term rhythm monitoring.',
        'Exercise stress test or provocation evaluation as deemed appropriate by the doctor.',
        'Cardiac ultrasound and cardiac MRI as needed to rule out structural heart disease.',
        'Electrolytes, thyroid function, medication review, and evaluation of other acquired arrhythmia triggers.',
        'Genetic testing for inherited arrhythmia and family cascade screening.',
      ],
      questionsForDoctor: [
        'Is my syncope more likely cardiac, neurally-mediated, or epileptic? What additional tests are needed to differentiate?',
        'Which cardiac ion channelopathy is currently suspected? Based on ECG, triggering scenario, or family history?',
        'Which medications, fever states, exercise intensity, or sudden stimuli should I avoid?',
        'Do family members need ECG, exercise testing, or genetic testing? Who should be tested first?',
        'What situations require emergency care? Do I need to learn CPR or prepare an automated external defibrillator plan?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Cardiac ion channelopathies include Long QT syndrome, Brugada syndrome, catecholaminergic polymorphic ventricular tachycardia, short QT syndrome, and others. Symptoms may present as palpitations, dizziness, syncope, seizure-like episodes, cardiac arrest, or sudden death, and may also remain asymptomatic for long periods. Different subtypes have different triggering scenarios, such as exercise, emotional stimulation, startle, sleep, or fever.</p>',
      diagnosis:
        '<p>Diagnosis requires combining triggering scenarios, family history, ECG features, Holter monitoring, exercise testing, cardiac structural assessment, and genetic testing. One normal resting ECG cannot completely rule out certain subtypes; finding a variant of uncertain significance on genetic testing cannot alone confirm diagnosis. Doctors typically also rule out medications, electrolyte abnormalities, cardiomyopathy, and other structural heart disease.</p>',
      treatment:
        '<p>Treatment and prevention strategies vary by subtype and risk, which may include avoiding trigger factors, controlling fever, adjusting medications, restricting specific exercises, long-term rhythm follow-up, drug therapy, implantable defibrillation devices, or other specialty interventions. Specific choices require comprehensive judgment by arrhythmia/electrophysiology specialists, and patients should not independently stop medications or adjust treatment based on online information.</p>',
      longTermCare:
        '<p>The focus of long-term management is risk stratification, repeated ECG and rhythm monitoring, updating the prohibited medication list, managing exercise and fever scenarios, and ensuring family members understand emergency procedures. First-degree relatives of diagnosed or highly suspected individuals typically need clinical screening; if the family pathogenic variant is identified, cascade genetic testing can be further pursued.</p>',
      fertilityOrFamily:
        '<p>Many cardiac ion channelopathies have a genetic background, but penetrance and severity can vary widely. For those with known family pathogenic variants, genetic counseling during family planning can provide information on options such as partner testing, prenatal diagnosis, or preimplantation genetic testing. When no clear pathogenic variant is identified, family screening may still rely on ECG and clinical assessment.</p>',
      emergencySigns:
        '<p>Sudden loss of consciousness, cardiac arrest, exercise- or emotion-induced syncope, recurrent severe palpitations with chest tightness and shortness of breath, Brugada-related risk clues during fever, or after a young sudden death in the family warrant immediate emergency or arrhythmia specialist evaluation. On-site personnel should immediately call emergency services and follow local emergency training protocols.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Long QT Syndrome Overview',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
      },
      {
        name: 'GeneReviews: Brugada Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1517/',
      },
      {
        name: 'GeneReviews: Catecholaminergic Polymorphic Ventricular Tachycardia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1289/',
      },
      {
        name: 'Heart: Cardiac channelopathies diagnosis and contemporary management',
        type: 'review',
        url: 'https://heart.bmj.com/content/107/13/1092',
      },
    ],
    symptoms:
      '<p>May present as palpitations, syncope, seizure-like episodes, cardiac arrest, or sudden death risk, often related to exercise, emotion, sleep, startle, or fever.</p>',
    diagnosis:
      '<p>Assessment typically includes ECG, Holter monitoring, exercise testing, cardiac structural evaluation, trigger investigation, and genetic testing for inherited arrhythmia.</p>',
    treatment:
      '<p>Management requires risk stratification by arrhythmia specialists, and may involve avoiding trigger factors, medications, implantable devices, exercise recommendations, and family screening.</p>',
    prognosis:
      '<p>Early identification of high-risk individuals, standardized follow-up, and family screening help reduce the risk of serious arrhythmic events, but outcomes vary considerably across subtypes and individuals.</p>',
    sourceName: 'GeneReviews: Long QT Syndrome Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 316,
      name: 'cardic-ion-channelopathies-journey.png',
      url: '/images/diseases/cardic-ion-channelopathies-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-charcot-marie-tooth-disease',
    id: 18,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Charcot-Marie-Tooth Disease',
    nameEn: 'Charcot-Marie-Tooth Disease',
    alias:
      'CMT, hereditary motor and sensory neuropathy, hereditary peripheral neuropathy',
    slug: 'charcot-marie-tooth-disease',
    oneSentence:
      'Charcot-Marie-Tooth disease is a group of inherited peripheral nerve disorders that often present with gradual weakness in the feet and lower legs, foot drop, high arches, reduced sensation, or frequent tripping.',
    plainName:
      'An inherited nerve condition that affects the peripheral nerves in the hands and feet',
    prevalence:
      'CMT is considered one of the most common inherited peripheral nerve disorders, though statistics vary widely across countries and subtypes.',
    quickLook: {
      whatItIs:
        'Peripheral nerves act like cables connecting the brain, spinal cord, and limbs. CMT affects the axons or myelin sheath of these nerves, causing gradual loss of strength and sensation in the legs, feet, hands, and forearms.',
      whoToSeeFirst:
        'When experiencing frequent tripping, foot drop, high arches, distal muscle wasting, or multiple family members with similar symptoms, start with neurology or a neuromuscular specialty clinic; children with symptom onset can see pediatric neurology.',
      isGenetic:
        'Yes. CMT can follow autosomal dominant, autosomal recessive, or X-linked inheritance patterns, or may occur without a clear family history. Genetic test results need to be interpreted together with electrophysiology findings and clinical presentation.',
      hasTreatment:
        'Most types currently have no cure. Management focuses on rehabilitation, orthotic devices, foot and hand protection, pain and complication management, and genetic counseling.',
      commonDelayReason:
        'Progression is usually very slow, and early symptoms are often mistaken for walking posture issues, poor motor skills, flat feet, or high arches; without probing family history or performing nerve conduction studies, diagnosis is often delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Frequent tripping, difficulty running or jumping, dragging toes, or foot drop beginning in childhood, adolescence, or young adulthood.',
        'Thinning of the distal lower legs, noticeably raised arches, claw toes, ankle instability, or need for ankle-foot orthotics.',
        'Decreased fine motor control in the hands, such as greater difficulty buttoning, writing, or opening jars than before.',
        'Numbness, tingling, or decreased sensitivity to temperature in the toes, soles, or fingers, or diminished tendon reflexes.',
        'Multiple family members with high arches, gait abnormalities, hand or foot weakness, peripheral neuropathy, or similar diagnoses.',
      ],
      commonWrongTurns: [
        'Treating only as a foot deformity or sports injury without evaluating for peripheral neuropathy.',
        'Attributing slowly progressive weakness to lack of exercise, posture problems, or growing pains.',
        'Ordering imaging studies without nerve conduction studies, electromyography, or genetic evaluation.',
        'Making a definitive diagnosis based on a single gene variant without considering variant interpretation, family testing, and clinical correlation.',
        'Not confirming with a doctor whether rehabilitation intensity, orthotic devices, and foot care are appropriate for current functional status.',
      ],
      firstDepartments: [
        'Neurology (with focus on neuromuscular disease or peripheral neuropathy)',
        'Pediatric neurology (for symptom onset in children or adolescents)',
        'Physical medicine and rehabilitation',
        'Orthopedics/podiatric surgery (for foot deformity, orthotic evaluation, or surgical assessment)',
        'Genetics counseling clinic',
      ],
      diagnosisChecklist: [
        'Record age of symptom onset, rate of progression, whether symptoms started in the feet or hands, and presence of pain or numbness.',
        'Gather family history across three generations for high arches, foot drop, hand or foot weakness, peripheral neuropathy, or similar diagnoses.',
        'Bring previous nerve conduction studies, electromyography, foot/ankle or spine imaging, rehabilitation assessments, and genetic test reports.',
        'Ask your doctor to determine whether the condition is demyelinating, axonal, or intermediate type, and whether further genetic testing is needed.',
        'List current medications and supplements, and ask your doctor or pharmacist whether any should be avoided due to potential worsening of peripheral neuropathy.',
      ],
      testsToAskAbout: [
        'Nerve conduction velocity studies and electromyography.',
        'Genetic testing strategies targeting PMP22 duplication/deletion and other CMT-related genes.',
        'Foot, ankle, spine, gait, and hand function assessments.',
        'Testing for acquired causes of peripheral neuropathy when needed, such as diabetes, vitamin deficiencies, thyroid disease, or immune-mediated neuropathies.',
        'Whether family members need clinical screening or genetic cascade testing.',
      ],
      questionsForDoctor: [
        'Does my presentation fit a specific CMT type, or do we need to rule out acquired peripheral neuropathy first?',
        'What do the nerve conduction and electromyography results indicate? What type of genetic testing do I need?',
        'What rehabilitation exercises, orthotics, or gait aids are appropriate for me now?',
        'How should I follow up on foot pain, fall risk, skin breakdown, and declining hand function?',
        'Does my family need testing? If planning a pregnancy, what can genetic counseling tell us?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CMT usually affects the motor and sensory nerves of the feet, legs, hands, and forearms. Common features include foot drop, frequent tripping, high-stepping gait, high arches or claw toes, distal muscle wasting in the lower legs, difficulty with fine motor tasks, numbness, tingling, pain, decreased sensation, and diminished tendon reflexes. Onset age and severity vary considerably between subtypes, and even family members with the same condition may be affected differently.</p>',
      diagnosis:
        '<p>Diagnosis usually begins with medical history, family history, and neurological examination, followed by nerve conduction velocity studies, electromyography, and genetic testing. Doctors use electrophysiology results to determine whether the condition is more consistent with a demyelinating, axonal, or intermediate type, and will rule out acquired causes such as diabetes, vitamin deficiencies, thyroid disease, or immune-mediated neuropathies. Genetic results need to be interpreted by a doctor familiar with neurogenetics in the context of clinical findings.</p>',
      treatment:
        "<p>Most types of CMT currently have no cure. Treatment goals are to maintain mobility, reduce falls, and protect joints. Common approaches include physical therapy, occupational therapy, stretching and strengthening exercises, ankle-foot orthotics, shoe inserts or other assistive devices, pain management, and orthopedic evaluation for severe foot deformity. Treatment plans should be tailored to the individual's functional status by neurology, rehabilitation, and orthopedic specialists.</p>",
      longTermCare:
        '<p>Long-term follow-up focuses on gait and fall risk, ankle-foot deformities, pain, skin breakdown, hand function, scoliosis, and less common associated issues such as hearing or vision problems. Patients may keep records of electrophysiology studies, genetic reports, rehabilitation plans, and orthotic specifications to help doctors assess progression at follow-up visits. Exercise typically needs to be individualized, avoiding overexertion or unsuitable training that could cause injury.</p>',
      fertilityOrFamily:
        '<p>CMT follows various inheritance patterns, including autosomal dominant, autosomal recessive, and X-linked inheritance, and may also occur from new (de novo) variants. After the disease-causing gene is identified, patients and family members can learn about options such as family screening, reproductive risks, prenatal diagnosis, or preimplantation genetic testing through genetic counseling. When the disease-causing gene has not been identified, family members can still undergo clinical screening based on symptoms and electrophysiology results.</p>',
      emergencySigns:
        '<p>CMT is usually a chronic, slowly progressive condition. However, seek medical attention promptly if you experience rapid worsening of weakness or numbness, severe foot infection or ulcers, frequent falls with injuries, difficulty breathing, or a progression rate that clearly differs from your previous course, to rule out infection, acquired neuropathy, medication effects, or other acute problems.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
      },
      {
        name: 'MedlinePlus Genetics: Charcot-Marie-Tooth disease',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/charcot-marie-tooth-disease/',
      },
      {
        name: 'NINDS: Charcot-Marie-Tooth Disease',
        type: 'official',
        url: 'https://www.ninds.nih.gov/health-information/disorders/charcot-marie-tooth-disease',
      },
    ],
    symptoms:
      '<p>Common features include foot drop, frequent tripping, high arches, distal muscle wasting, numbness or decreased sensation in the hands and feet, with usually slow progression.</p>',
    diagnosis:
      '<p>Assessment typically includes neurological examination, family history, nerve conduction velocity studies, electromyography, genetic testing, and exclusion of acquired causes of peripheral neuropathy.</p>',
    treatment:
      '<p>Management focuses on rehabilitation exercises, orthotic devices, gait and foot care, pain management, orthopedic evaluation, and genetic counseling, with individualized plans.</p>',
    prognosis:
      '<p>Most patients experience chronic, slow progression with wide variation in severity; appropriate rehabilitation, assistive devices, and complication management can help maintain function and quality of life.</p>',
    sourceName:
      'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 317,
      name: 'charcot-marie-tooth-disease-journey.png',
      url: '/images/diseases/charcot-marie-tooth-disease-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-citrullinemia',
    id: 19,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Citrullinemia',
    nameEn: 'Citrullinemia',
    alias:
      'CTLN1, Citrullinemia Type I, Citrullinemia Type II associated with citrin deficiency',
    slug: 'citrullinemia',
    oneSentence:
      'Citrullinemia is a group of inherited metabolic disorders that affect the urea cycle or related transport processes, which may cause elevated blood ammonia levels and lead to acute neurological symptoms in newborns, children, or adults.',
    plainName:
      'An inherited metabolic disorder where the body has difficulty processing protein metabolism waste, potentially causing elevated blood ammonia levels',
    prevalence:
      'Type I and Type II have different regional distributions. Type I belongs to urea cycle disorders, while Type II is associated with citrin deficiency and has been reported more frequently in East Asian populations.',
    quickLook: {
      whatItIs:
        'When the body breaks down protein, it produces nitrogen-containing waste, which is typically processed through the urea cycle. When genes related to citrullinemia are abnormal, blood ammonia and other metabolites may rise, affecting brain and liver function.',
      whoToSeeFirst:
        'If newborn screening shows elevated citrulline, or if there are recurrent vomiting, drowsiness, altered consciousness, seizures, or cholestatic jaundice, contact a metabolic genetics or pediatric specialist as soon as possible; seek emergency care for altered consciousness or seizures.',
      isGenetic:
        'Yes. Type I is typically associated with ASS1, and Type II is associated with SLC25A13, with autosomal recessive inheritance being common. Family testing and reproductive counseling need to be tailored based on specific genetic results.',
      hasTreatment:
        'There are management plans available through metabolic specialists, including dietary and nutritional management, ammonia-lowering treatments, acute episode management, and liver transplant evaluation in some cases. Specific plans should be developed by metabolic genetics specialists.',
      commonDelayReason:
        'Early episodes may resemble infection, feeding difficulties, gastrointestinal problems, or mental status changes; during symptom-free periods, patients may appear nearly normal; adult Type II is sometimes initially managed as a psychiatric, neurological, or general liver condition.',
    },
    patientJourney: {
      whenToSuspect: [
        'Newborn screening indicates abnormal citrulline or related amino acids, requiring recall for repeat testing.',
        'Feeding difficulties, recurrent vomiting, drowsiness, abnormal muscle tone, breathing problems, or seizures shortly after birth.',
        'In children, listlessness, vomiting, headache, ataxia, or altered consciousness after infection, fever, prolonged fasting, or dietary changes.',
        'Cholestatic jaundice, enlarged liver, poor growth in infancy, accompanied by abnormal metabolic screening.',
        'Recurrent altered consciousness, behavioral changes, drowsiness, or hepatic encephalopathy-like episodes in adolescents or adults, especially related to diet, alcohol, surgery, or illness stress.',
      ],
      commonWrongTurns: [
        'Attributing newborn drowsiness, vomiting, or refusal to feed solely to common infection or feeding problems.',
        'Not completing newborn screening follow-up or metabolic genetics evaluation after symptoms improve.',
        'For adult onset, only seeing psychiatrists, neurologists, or general hepatologists without checking blood ammonia and amino acid profiles.',
        'Failing to distinguish Type I citrullinemia from Type II associated with citrin deficiency, leading to confused nutritional recommendations.',
        "Family does not have emergency documentation, so emergency doctors cannot quickly understand the patient's metabolic history.",
      ],
      firstDepartments: [
        'Metabolic Genetics / Medical Genetics',
        'Pediatrics or Neonatology (for abnormal newborn screening or infant-onset)',
        'Emergency Department (for altered consciousness, seizures, or recurrent vomiting with inability to eat)',
        'Gastroenterology and Hepatology (for cholestasis, abnormal liver function, or adult hepatic encephalopathy-like episodes)',
        'Nutrition (for dietary management under metabolic specialist guidance)',
      ],
      diagnosisChecklist: [
        'Keep newborn screening reports, recall notices, blood ammonia, blood amino acid profile, urine organic acids, liver function, and coagulation test results.',
        'Record whether each episode was preceded by infection, fever, prolonged fasting, dietary changes, alcohol, surgery, or medication changes.',
        'Confirm whether the doctor has distinguished Type I citrullinemia, citrin deficiency, and other urea cycle disorders.',
        'Ask whether ASS1, SLC25A13, or urea cycle/cholestasis-related genetic testing is needed.',
        'Prepare an emergency summary noting suspected or confirmed diagnosis, managing specialty, previous crises, and current medical orders.',
      ],
      testsToAskAbout: [
        'Blood ammonia and blood gas/acid-base status assessment.',
        'Plasma amino acid profile, focusing on citrulline and related amino acid patterns.',
        'Urine organic acids, lactate, and acylcarnitine profile for differential diagnosis of metabolic disorders.',
        'Liver function, cholestasis markers, and coagulation function.',
        'ASS1, SLC25A13, or urea cycle disorder-related genetic testing.',
        'Carrier testing for family members and early testing protocols for newborns.',
      ],
      questionsForDoctor: [
        'Does the presentation more resemble Type I citrullinemia, citrin deficiency, or another urea cycle disorder? What is the basis?',
        'For daily diet, fever/illness, and times when eating is not possible, which metabolic specialist plan should we follow?',
        'What situations require going directly to the emergency department? What should the emergency information card include?',
        'What tests do we need for regular follow-up? What factors determine follow-up frequency?',
        'Does the family need testing? What special reminders are needed for newborn screening of future children or other relatives?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Type I citrullinemia may present with feeding difficulties, vomiting, drowsiness, abnormal muscle tone, seizures, and altered consciousness in the neonatal period. It can also have later-onset or milder forms. Citrin deficiency may present in infancy with cholestasis, jaundice, enlarged liver, and growth problems, and may also present in adolescents or adults with recurrent hyperammonemia and neuropsychiatric symptoms. Different types, ages, and triggers lead to wide variation in presentation.</p>',
      diagnosis:
        '<p>Diagnosis requires combining newborn screening, blood ammonia, plasma amino acid profile, urine organic acids, liver function, and genetic testing. Type I is typically associated with biallelic pathogenic variants in ASS1; citrin deficiency is associated with biallelic pathogenic variants in SLC25A13. Doctors also need to differentiate from other urea cycle disorders, organic acidemias, liver diseases, and infections.</p>',
      treatment:
        '<p>Treatment requires individualized plans developed by metabolic genetics specialists. Long-term management may include nutritional and protein intake planning, prevention of catabolism, regular monitoring, specific medications, and liver transplant evaluation in some cases; acute hyperammonemia is an emergency requiring management by an experienced medical team. Patients and families should not independently restrict diet or adjust medications based on online information.</p>',
      longTermCare:
        '<p>Long-term care focuses on reducing metabolic crises, protecting nervous system and liver function, and enabling schools, caregivers, and emergency doctors to quickly recognize the condition. It is recommended to keep diagnostic documents, genetic reports, metabolic specialist plans, medication lists, and emergency information cards. Children also need monitoring of growth and development, learning abilities, nutritional status, and family caregiving stress.</p>',
      fertilityOrFamily:
        "<p>Citrullinemia-related disorders are mostly inherited in an autosomal recessive pattern. After the family's pathogenic variant is identified, parents, siblings, and patients planning pregnancies can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling. When family risk is known, the obstetrics and pediatrics teams should be informed as early as possible in the neonatal period.</p>",
      emergencySigns:
        '<p>Recurrent vomiting with inability to eat, marked drowsiness or irritability, altered consciousness, seizures, abnormal breathing, rapid mental status decline after fever, deepening jaundice, or sudden behavioral/altered consciousness in adults should all prompt immediate emergency care. When seeking care, actively inform medical staff of suspected or confirmed citrullinemia/urea cycle disorder and bring previous test results and metabolic specialist plans.',
    },
    sources: [
      {
        name: 'GeneReviews: Citrullinemia Type I',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
      },
      {
        name: 'GeneReviews: Citrin Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1181/',
      },
      {
        name: 'MedlinePlus Genetics: Citrullinemia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/citrullinemia/',
      },
      {
        name: 'HRSA Newborn Screening: Citrullinemia',
        type: 'official',
        url: 'https://newbornscreening.hrsa.gov/conditions/citrullinemia',
      },
    ],
    symptoms:
      '<p>May present with feeding difficulties, vomiting, drowsiness, seizures, and altered consciousness in newborns. May also include cholestasis, abnormal liver function, or adult neuropsychiatric episodes.</p>',
    diagnosis:
      '<p>Evaluation typically includes newborn screening follow-up, blood ammonia, amino acid profile, urine organic acids, liver function, coagulation tests, and ASS1/SLC25A13 and other genetic testing.</p>',
    treatment:
      '<p>Management requires individualized plans developed by metabolic genetics specialists, including nutrition, monitoring, ammonia-lowering strategies, and acute episode protocols; acute altered consciousness or seizures should be managed as metabolic emergencies.</p>',
    prognosis:
      '<p>Early identification and proper management can reduce the risk of metabolic crises and neurological damage, but prognosis is influenced by type, age of onset, severity of crises, and access to treatment.</p>',
    sourceName: 'GeneReviews: Citrullinemia Type I',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 318,
      name: 'citrullinemia-journey.png',
      url: '/images/diseases/citrullinemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-castleman-disease',
    id: 20,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Castleman Disease',
    nameEn: 'Castleman Disease',
    alias:
      'Giant lymph node hyperplasia, Angiofollicular lymph node hyperplasia',
    slug: 'castleman-disease',
    oneSentence:
      'Castleman disease is a group of rare lymph node overgrowth disorders that may appear as a single enlarged lymph node area or involve multiple lymph node areas along with fever, fatigue, anemia, or organ involvement.',
    plainName:
      'A rare blood/immune-related disease caused by abnormal lymph node overgrowth',
    prevalence:
      'Generally a rare disease overall. Different studies use varying definitions for unicentric, multicentric, and idiopathic multicentric types. Personal risk assessment requires combining pathology and subtype classification.',
    quickLook: {
      whatItIs:
        'Castleman disease is not a single disease but a group of conditions with similar lymph node pathology changes. Doctors typically first determine whether it is unicentric or multicentric, then further distinguish HHV-8 related, idiopathic, or other related conditions.',
      whoToSeeFirst:
        'For persistent or progressive lymph node enlargement, you may first visit hematology, lymphoma/hematologic disease specialists, or surgery for biopsy evaluation; if you have persistent fever, night sweats, weight loss, significant fatigue, or swelling, it is recommended to see hematology promptly.',
      isGenetic:
        'Usually not considered a typical hereditary disease. Some multicentric cases are related to HHV-8 infection or immune status. Idiopathic multicentric type requires exclusion of similar diseases such as infections, malignancies, and autoimmune disorders.',
      hasTreatment:
        'There are treatment and follow-up plans available after subtyping. Unicentric type is often managed with local treatment; multicentric type requires hematology to develop drug or comprehensive treatment based on HHV-8 status, severity, and organ involvement.',
      commonDelayReason:
        'Lymph node enlargement is often first mistaken for infection, inflammation, or lymphoma; multicentric symptoms can be scattered, and patients may visit rheumatology, infectious disease, kidney, or liver specialists multiple times before complete biopsy and subtyping is done.',
    },
    patientJourney: {
      whenToSuspect: [
        'Painless enlargement of lymph nodes in a single area, especially if persistent, gradually increasing, or imaging shows chest/abdominal lymph node enlargement.',
        'Enlarged lymph nodes in multiple areas, accompanied by fever, night sweats, weight loss, fatigue, or loss of appetite.',
        'Lymph node enlargement with anemia, elevated inflammatory markers, low albumin, abnormal immunoglobulins, or enlarged liver and spleen.',
        'Appearance of multi-system clues such as swelling, fluid in chest/abdomen, kidney problems, rash-like changes, or peripheral nerve symptoms.',
        'Previous suspicion of infection, autoimmune disease, or lymphoma, but conventional treatment was insufficient or there were repeated recurrences.',
      ],
      commonWrongTurns: [
        'Long-term treatment as ordinary lymphadenitis or reactive hyperplasia without obtaining adequate tissue for pathology.',
        'Only having a fine needle aspiration or imaging exam without discussing with the doctor whether a complete lymph node biopsy is needed.',
        'After pathology shows Castleman-like changes, failing to continue distinguishing between unicentric, multicentric, and HHV-8 status.',
        'Multicentric type treated only through the single pathway of autoimmune disease, infection, or tumor, without completing differential diagnosis.',
        'Overlooking clues about disease activity or severity such as anemia, low albumin, kidney involvement, or fluid in chest/abdomen.',
      ],
      firstDepartments: [
        'Hematology/Lymphoma specialty',
        'General surgery or thoracic/general surgery specialty (when lymph node biopsy or removal evaluation is needed)',
        'Infectious disease (for differential diagnosis of HIV, HHV-8, or other infections)',
        'Rheumatology and immunology (for differential diagnosis of autoimmune disease or when immune manifestations are present)',
        'Nephrology/Respiratory/Gastroenterology and hepatology (when corresponding organ involvement occurs)',
      ],
      diagnosisChecklist: [
        'Record the location, onset time, growth rate, and whether there is pain in the enlarged lymph nodes, as well as systemic symptoms like fever, night sweats, and weight changes.',
        'Bring ultrasound, CT, PET-CT images and lab tests such as complete blood count, inflammatory markers, liver and kidney function, albumin, and immunoglobulins.',
        'Ask the doctor if the current pathology specimens are sufficient and whether a complete lymph node excision biopsy is needed.',
        'Confirm whether lymphoma, infectious diseases, and autoimmune diseases have been excluded as possibilities.',
        'Ask whether HHV-8 and HIV testing is needed, and assess involvement of liver, spleen, kidneys, chest/abdomen fluid, and nervous system.',
      ],
      testsToAskAbout: [
        'Lymph node biopsy pathology and immunohistochemistry, with review by a hematopathology expert when necessary.',
        'Systemic imaging to assess lymph node distribution, such as contrast-enhanced CT or PET-CT as recommended by your doctor.',
        'Complete blood count, CRP/ESR, albumin, liver and kidney function, immunoglobulins, and urinalysis.',
        'Infectious disease tests related to HHV-8, HIV, and EBV.',
        'Tests related to differential diagnosis of lymphoma, autoimmune diseases, and POEMS syndrome.',
      ],
      questionsForDoctor: [
        'Is my condition more like unicentric or multicentric? What evidence supports this from imaging, pathology, or systemic symptoms?',
        'Is the pathology specimen sufficient to rule out lymphoma? Does it need consultation or review?',
        'Do I need HHV-8/HIV testing, and how will the results affect treatment choices?',
        'Are there any clues about organ involvement or severe disease risk, and how quickly do I need to start treatment?',
        'How will treatment effectiveness be measured? How often do I need follow-up imaging and blood tests?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Unicentric Castleman disease typically presents with enlarged lymph nodes in one area, which may have no obvious systemic symptoms or may cause discomfort due to mass effect depending on location. Multicentric type can involve multiple lymph node areas and present with fever, night sweats, weight loss, fatigue, anemia, enlarged liver and spleen, swelling, fluid in chest/abdomen, kidney or nervous system involvement. Symptoms and severity vary greatly.</p>',
      diagnosis:
        '<p>The core of diagnosis is lymph node pathology, combined with imaging, laboratory tests, and differential diagnosis. Diagnosis of idiopathic multicentric type particularly requires exclusion of similar conditions such as infections, malignancies, and autoimmune diseases. After the pathology report shows Castleman-like changes, doctors still need to combine lymph node distribution, systemic symptoms, HHV-8/HIV status, and organ involvement to complete subtyping.</p>',
      treatment:
        '<p>Treatment depends on subtype and severity. Unicentric type is often evaluated by surgery for complete removal or local treatment; multicentric type typically requires hematology to develop targeted immunotherapy, antiviral/anti-infection treatment, corticosteroids, chemotherapy, or other approaches based on HHV-8 status, inflammatory activity, organ involvement, and prior treatment history. Patients should not self-treat based on "lymphadenitis" or "tumor" experience.</p>',
      longTermCare:
        '<p>Follow-up focuses on lymph node size, systemic symptoms, complete blood count, inflammatory markers, liver and kidney function, albumin, urinalysis, and imaging changes. Multicentric type patients also need monitoring for infection risk, treatment side effects, organ involvement, and recurrence signs. Keeping records of pathology slides/blocks, imaging discs, and key lab results helps with return visits and consultations.</p>',
      fertilityOrFamily:
        '<p>Castleman disease is usually not a typical hereditary disease. Pregnancy or family planning concerns mainly depend on disease activity, organ involvement, and current treatment regimen. When planning for children, discuss disease stability, medication safety, and follow-up arrangements with hematology and obstetrics in advance.</p>',
      emergencySigns:
        '<p>You should seek medical care or emergency evaluation promptly if you experience breathing difficulty, chest tightness, or difficulty swallowing due to compression; persistent high fever with significant weakness; rapidly worsening swelling or decreased urine output; altered consciousness; severe anemia-related heart palpitations and shortness of breath; or rapid enlargement of lymph nodes over a short period.</p>',
    },
    sources: [
      {
        name: 'NCI Dictionary: Castleman disease',
        type: 'official',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/castleman-disease',
      },
      {
        name: 'Blood: International consensus diagnostic criteria for idiopathic multicentric Castleman disease',
        type: 'guideline',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28087540/',
      },
      {
        name: 'Blood: International consensus treatment guidelines for idiopathic multicentric Castleman disease',
        type: 'guideline',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30181172/',
      },
      {
        name: 'Mayo Clinic: Castleman disease diagnosis and treatment',
        type: 'review',
        url: 'https://www.mayoclinic.org/diseases-conditions/castleman-disease/diagnosis-treatment/drc-20543055',
      },
    ],
    symptoms:
      '<p>May present as enlarged lymph nodes in a single area or multiple areas; multicentric type may also be accompanied by fever, night sweats, weight loss, anemia, swelling, enlarged liver and spleen, or organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis relies on lymph node pathology, combined with imaging, laboratory tests, HHV-8/HIV status, and exclusion of lymphoma, infectious diseases, and autoimmune diseases.</p>',
    treatment:
      '<p>Unicentric type often undergoes local removal evaluation; multicentric type requires hematology to develop targeted immunotherapy, anti-infection treatment, or comprehensive treatment plans based on subtype and severity.</p>',
    prognosis:
      '<p>Prognosis depends on unicentric or multicentric subtype, HHV-8 status, organ involvement, and treatment response. Proper subtyping and follow-up are key to reducing misdiagnosis and recurrence risk.</p>',
    sourceName: 'NCI Dictionary: Castleman disease',
    sourceUrl:
      'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/castleman-disease',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 319,
      name: 'castleman-disease-journey.png',
      url: '/images/diseases/castleman-disease-journey.png',
    },
    tagSlugs: [],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-congenital-adrenal-hypoplasia',
    id: 21,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Congenital Adrenal Hypoplasia',
    nameEn: 'Congenital Adrenal Hypoplasia',
    alias:
      'X-linked Congenital Adrenal Hypoplasia, NR0B1-Related Adrenal Hypoplasia',
    slug: 'congenital-adrenal-hypoplasia',
    oneSentence:
      'Congenital adrenal hypoplasia is an inherited adrenal insufficiency disorder that can present in newborns or children with hypoglycemia, vomiting, dehydration, low blood pressure, skin darkening, or salt-wasting crisis.',
    plainName:
      'A rare genetic condition where underdevelopment of the adrenal glands leads to insufficient hormone production',
    prevalence:
      'Overall rare. The X-linked NR0B1-related type mainly affects males, though prevalence varies due to family variants and carrier females.',
    quickLook: {
      whatItIs:
        'The adrenal glands produce important hormones that maintain blood pressure, blood sugar, and salt balance. When related genes are abnormal, the adrenal glands function inadequately from birth, making the body more prone to crisis during infection, fever, or dehydration.',
      whoToSeeFirst:
        'For newborns or children with unexplained hypoglycemia, recurrent vomiting, dehydration, low sodium and high potassium, low blood pressure, darkening skin, or shock—seek emergency care first; follow up long-term with pediatric endocrinology or endocrinology after stabilization.',
      isGenetic:
        'Yes. The classic X-linked type is related to NR0B1 and usually affects males; other genetic or developmental causes also exist. Genetic counseling should include gene testing and family history.',
      hasTreatment:
        'Yes, long-term hormone replacement and crisis prevention plans exist, but require individualized planning by an endocrinology specialist. Patients and families need to understand when to seek emergency care during illness, fever, surgery, or other stress situations.',
      commonDelayReason:
        'Early symptoms can resemble feeding difficulties, gastroenteritis, infections, or common hypoglycemia; without timely electrolyte, cortisol/ACTH testing and family history review, diagnosis is often delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent vomiting, poor feeding, poor weight gain, dehydration, or lethargy in newborns or infants.',
        'Hypoglycemia, low sodium, high potassium, low blood pressure, shock, or unexplained acidosis.',
        'Darkening of skin or mucous membranes, especially with clues suggesting adrenal insufficiency.',
        'Boys with delayed puberty, hypogonadism, and a history of adrenal insufficiency.',
        'Family history of male infant deaths, adrenal crises, or similar endocrine diagnoses.',
      ],
      commonWrongTurns: [
        'Treating recurrent vomiting and dehydration only as gastroenteritis without checking electrolytes and adrenal axis.',
        'Recurrent hypoglycemia without investigating birth history, family history, or skin pigmentation.',
        'After diagnosis, failing to prepare emergency instructions and stress management plans, increasing risk during fever or surgery.',
        'Focusing only on adrenal crises while neglecting puberty development, gonadal function, and genetic counseling.',
      ],
      firstDepartments: [
        'Emergency department (for shock, altered consciousness, severe dehydration, or hypoglycemia)',
        'Pediatric endocrinology',
        'Endocrinology',
        'Medical genetics / genetic counseling clinic',
      ],
      diagnosisChecklist: [
        'Document hypoglycemia, electrolyte, blood gas, cortisol, ACTH, renin-aldosterone, and other test results.',
        'Record triggers: infection, fever, vomiting, fasting, surgery, or missed medications.',
        'Confirm whether NR0B1 and other adrenal development/insufficiency-related genetic testing is needed.',
        'Prepare an emergency information card listing diagnosis, managing physician, medications, and crisis management principles.',
        'After puberty, monitor gonadal function, height growth, bone health, and fertility-related concerns.',
      ],
      testsToAskAbout: [
        'Electrolytes, blood sugar, blood gas, and kidney function.',
        'Cortisol, ACTH, renin, aldosterone, and related endocrine evaluations.',
        'Adrenal imaging and assessment for other developmental abnormalities.',
        'NR0B1 or adrenal insufficiency-related genetic testing.',
        'Carrier testing for family members and assessment of reproductive risks.',
      ],
      questionsForDoctor: [
        'Does this episode fit an adrenal crisis? What situations require going directly to the emergency department in the future?',
        'What should the daily hormone replacement and sick-day management plan look like, and what documents should I carry?',
        'What genetic testing is needed? Do family members need screening?',
        'When should follow-up for puberty, gonadal function, and fertility begin?',
        'What risks and contact information does the school or caregivers need to know?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Symptoms may begin in the neonatal period or infancy, including feeding difficulties, recurrent vomiting, dehydration, hypoglycemia, low blood pressure, low sodium and high potassium, shock, and skin darkening. Some patients may also develop delayed puberty, hypogonadism, or fertility-related issues in childhood or adolescence. Infections, fever, vomiting, fasting, and surgery can trigger crises.</p>',
      diagnosis:
        '<p>Diagnosis combines blood sugar, electrolytes, cortisol, ACTH, renin-aldosterone axis findings, clinical presentation, and family history during acute episodes. Genetic testing for NR0B1 and other genes can help clarify subtype and family risk. Physicians also need to rule out other causes of primary adrenal insufficiency and congenital adrenal hyperplasia.</p>',
      treatment:
        '<p>Long-term management typically includes hormone replacement under endocrinology specialist guidance, stress-dosing plans, emergency instructions, and regular monitoring. Doses and adjustments should be determined by your physician based on age, weight, growth, blood pressure, electrolytes, and clinical status—do not change medications based on internet information.</p>',
      longTermCare:
        "<p>Follow-up focuses on growth and development, blood pressure, electrolytes, adrenal crisis prevention, puberty and gonadal function, bone health, and family emergency preparedness. Keep diagnosis documents, medication lists, emergency cards, and your physician's contact information accessible. Ensure schools and caregivers know when emergency care is needed.</p>",
      fertilityOrFamily:
        '<p>Family members of X-linked cases can learn about carrier testing, male relative screening, prenatal diagnosis, and preimplantation genetic testing options through genetic counseling. Adult male patients may need evaluation of gonadal function and fertility-related concerns.</p>',
      emergencySigns:
        '<p>Severe vomiting with inability to eat, significant dehydration, hypoglycemia, altered consciousness, seizures, low blood pressure, shock, worsening mental status with fever or infection, or feeling unwell after possibly missing key medications—go to the emergency department immediately and report suspected or confirmed adrenal insufficiency.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
      },
      {
        name: 'MedlinePlus Genetics: X-linked adrenal hypoplasia congenita',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/x-linked-adrenal-hypoplasia-congenita/',
      },
      {
        name: 'Orphanet: X-linked adrenal hypoplasia congenita',
        type: 'review',
        url: 'https://www.orpha.net/en/disease/detail/95702',
      },
    ],
    symptoms:
      '<p>Manifestations may include hypoglycemia, vomiting, dehydration, low blood pressure, low sodium and high potassium, skin darkening, shock, as well as delayed puberty or hypogonadism.</p>',
    diagnosis:
      '<p>Evaluations include blood sugar, electrolytes, cortisol, ACTH, renin-aldosterone axis, family history, and NR0B1 and other genetic testing.</p>',
    treatment:
      '<p>Management relies on endocrinology specialist-guided long-term hormone replacement, stress management plans, and crisis prevention. Patients should not adjust medications on their own.</p>',
    prognosis:
      '<p>Early recognition and appropriate replacement therapy can significantly reduce crisis risk; long-term outlook depends on crisis prevention, follow-up care, and management of puberty and gonadal function.</p>',
    sourceName: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 320,
      name: 'congenital-adrenal-hypoplasia-journey.png',
      url: '/images/diseases/congenital-adrenal-hypoplasia-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-congenital-hyperinsulinemic-hypoglycemia',
    id: 22,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Congenital Hyperinsulinemic Hypoglycemia',
    nameEn: 'Congenital Hyperinsulinemic Hypoglycemia',
    alias:
      'Congenital hyperinsulinism, Hereditary hyperinsulinemic hypoglycemia',
    slug: 'congenital-hyperinsulinemic-hypoglycemia',
    oneSentence:
      'Congenital hyperinsulinemic hypoglycemia is a group of inherited low blood sugar disorders where abnormal insulin regulation causes repeated low blood sugar in infants or children, which can seriously affect the brain when severe.',
    plainName:
      'A rare genetic condition where too much insulin causes repeated low blood sugar',
    prevalence:
      'Generally rare, severity ranges from short-term neonatal low blood sugar to persistent, treatment-resistant hypoglycemia.',
    quickLook: {
      whatItIs:
        'Insulin lowers blood sugar. Children continue to secrete too much insulin when they should not, making it hard to keep blood sugar stable, especially during fasting, poor feeding, or illness.',
      whoToSeeFirst:
        'For newborns or children with repeated low blood sugar, seizures, drowsiness, feeding difficulty, or sweating and trembling, seek emergency care or pediatric treatment; after stabilization, follow up with pediatric endocrinology or genetics/metabolism specialists.',
      isGenetic:
        'Many cases are related to KATP channels or other genes involved in insulin secretion. Inheritance can be recessive, dominant, or from new variants. Some cases need to be distinguished between diffuse and focal types.',
      hasTreatment:
        'Specialty treatment options exist, including rapid correction of low blood sugar, long-term nutrition and medication management, imaging localization, and surgical evaluation in some cases. All plans should be developed by a pediatric endocrinology team.',
      commonDelayReason:
        'Low blood sugar symptoms can look like feeding problems, infection, seizures, or newborn adjustment issues; if critical samples are not collected during episodes, the cause can remain unclear.',
    },
    patientJourney: {
      whenToSuspect: [
        'Repeated low blood sugar, feeding difficulty, drowsiness, low muscle tone, or seizures in the neonatal period.',
        'Evidence of insulin action inappropriately remaining high during low blood sugar episodes.',
        'Easily develop low blood sugar when feeding is reduced, fasting is extended, or during infection.',
        'Need for consistently high glucose support to maintain blood sugar levels.',
        'Family history of infant low blood sugar, seizures, or similar endocrine diagnoses.',
      ],
      commonWrongTurns: [
        'Only correcting blood sugar without investigating insulin and metabolic markers during hypoglycemia episodes.',
        'Treating seizures only as a neurological issue without considering the hypoglycemia trigger.',
        'Discharge without family monitoring, feeding plans, and emergency plans, leading to repeated crises.',
        'Failure to distinguish between temporary hypoglycemia and persistent genetic hyperinsulinism.',
      ],
      firstDepartments: [
        'Emergency department/Neonatology (for acute hypoglycemia, seizures, or altered consciousness)',
        'Pediatric endocrinology',
        'Genetics/metabolism or medical genetics',
        'Nutrition support for feeding management under specialty protocols',
      ],
      diagnosisChecklist: [
        'Record blood sugar, insulin, ketones, free fatty acids, lactate, cortisol, and growth hormone from critical samples during each hypoglycemia episode.',
        'Document timing of episodes, relationship to feeding/fasting/infection, correction methods used, and whether seizures or consciousness changes occurred.',
        'Ask whether genetic testing for hyperinsulinism-related genes is needed.',
        'Confirm whether the doctor has evaluated for diffuse, focal, or syndrome-related hypoglycemia.',
        'Prepare family plans for hypoglycemia recognition, monitoring, and emergency medical care.',
      ],
      testsToAskAbout: [
        'Critical blood and urine samples during hypoglycemia episodes.',
        'Insulin, C-peptide, ketones, free fatty acids, and metabolic markers.',
        'Genetic testing for ABCC8, KCNJ11, and other hyperinsulinism-related genes.',
        'Pancreatic imaging or specialty center evaluation if the doctor deems it necessary.',
        'Neurodevelopmental follow-up and brain assessment.',
      ],
      questionsForDoctor: [
        "Does the child's low blood sugar fit the pattern of hyperinsulinemic hypoglycemia? What is the evidence?",
        'What monitoring does the family need to do at home? What situations require emergency care?',
        'Is genetic testing needed, and will the results affect treatment choices?',
        'How should the plan for feeding, nighttime feeding, and sick-day management be written as actionable instructions?',
        'Should we be referred to a center with experience in congenital hyperinsulinism?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>May present as repeated hypoglycemia in newborns or young children, feeding difficulty, drowsiness, low body temperature, sweating, trembling, seizures, or altered consciousness, with risk to development. Duration and severity of hypoglycemia vary greatly; some patients need long-term management.</p>',
      diagnosis:
        '<p>The key is collecting samples during hypoglycemia episodes to assess whether insulin action is inappropriately elevated, combined with ketone, free fatty acid, metabolic markers, and genetic testing. Doctors also differentiate between endocrine deficiencies, metabolic disorders, temporary neonatal hypoglycemia, and syndrome-related hypoglycemia.</p>',
      treatment:
        '<p>Acute hypoglycemia requires immediate care by a medical team. Long-term management may include individualized feeding plans, medications, blood sugar monitoring, further evaluation guided by genetic results, and surgical discussion for some focal or treatment-resistant cases. Parents should not independently change feeding intervals or medications.</p>',
      longTermCare:
        '<p>Long-term care focuses on preventing hypoglycemia, protecting neurodevelopment, developing plans for nighttime and sick days, and regularly assessing growth/development and treatment side effects. Family, daycare, or school should know hypoglycemia signs and emergency contact procedures.</p>',
      fertilityOrFamily:
        '<p>Inheritance patterns vary by gene and type. After genetic results are confirmed, parents, siblings, and families planning for children can learn about recurrence risks, carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>Seizures, altered consciousness, significant drowsiness, inability to eat, repeated vomiting, difficulty maintaining blood sugar during illness, or inability to correct hypoglycemia with the home plan means go to the emergency department immediately, and tell doctors about the suspected or confirmed congenital hyperinsulinemic hypoglycemia diagnosis.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
      },
      {
        name: 'MedlinePlus Genetics: Congenital hyperinsulinism',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/congenital-hyperinsulinism/',
      },
      {
        name: 'Orphanet: Congenital isolated hyperinsulinism',
        type: 'review',
        url: 'https://www.orpha.net/en/disease/detail/657',
      },
    ],
    symptoms:
      '<p>May present as hypoglycemia in newborns or children, feeding difficulty, drowsiness, sweating, trembling, seizures, or altered consciousness.</p>',
    diagnosis:
      '<p>Evaluation focuses on collecting critical samples during hypoglycemia episodes, combined with insulin action markers, metabolic testing, and relevant genetic testing.</p>',
    treatment:
      '<p>Management should be developed by a pediatric endocrinology team, including acute hypoglycemia management, long-term feeding/medication plans, monitoring, and surgical evaluation for some cases.</p>',
    prognosis:
      '<p>Early recognition and avoiding repeated severe hypoglycemia can reduce neurodevelopmental risks; prognosis is influenced by type, treatment response, and follow-up quality.</p>',
    sourceName: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 321,
      name: 'congenital-hyperinsulinemic-hypoglycemia-journey.png',
      url: '/images/diseases/congenital-hyperinsulinemic-hypoglycemia-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-congenital-myasthenic-syndrome',
    id: 23,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Congenital Myasthenic Syndrome',
    nameEn: 'Congenital Myasthenic Syndrome',
    alias: 'CMS, Congenital Neuromuscular Junction Disorder',
    slug: 'congenital-myasthenic-syndrome',
    oneSentence:
      'Congenital Myasthenic Syndrome is a group of inherited neuromuscular junction disorders, often presenting with fluctuating muscle weakness and fatigue starting from infancy, ptosis, and swallowing or breathing difficulties.',
    plainName:
      'Muscle weakness caused by a congenital abnormality in signal transmission between nerves and muscles',
    prevalence:
      'Generally rare, with multiple related genes and subtypes; different subtypes vary significantly in age of onset, severity, and treatment response.',
    quickLook: {
      whatItIs:
        'When nerves send a "contract" signal to muscles, it needs to pass through the neuromuscular junction. The problem in CMS lies in this junction, causing muscles to fatigue easily or become weak.',
      whoToSeeFirst:
        'When infants have weak feeding, frequent choking, ptosis, recurrent breathing problems, or noticeable fatigue after activity, consider visiting a pediatric neurologist or neuromuscular disease specialist; seek emergency care for breathing difficulty or severe choking.',
      isGenetic:
        'Yes. Most subtypes follow autosomal recessive inheritance, though dominant inheritance or de novo variants also occur. Genetic classification affects treatment choices, so professional interpretation is needed.',
      hasTreatment:
        'Some subtypes have targeted treatments, but different genetic subtypes may have opposite responses to medications. Treatment should be determined by a neuromuscular specialist based on genetic classification.',
      commonDelayReason:
        'Symptoms can resemble acquired myasthenia gravis, myopathy, cerebral palsy, or simple developmental delay; without electrophysiological testing and genetic testing, it can be difficult to classify for a long time.',
    },
    patientJourney: {
      whenToSuspect: [
        'Infants tire easily during feeding, weak sucking, weak crying, ptosis, or limited eye movement.',
        'Children show obvious weakness after activity that improves with rest; symptoms are more pronounced in the afternoon or when tired.',
        'Recurrent choking, difficulty swallowing, respiratory muscle weakness, or worsening breathing problems during infections.',
        'Low muscle tone, delayed head control, or motor development, but creatine kinase is not significantly elevated.',
        'Family history of similar muscle weakness, breathing problems in infancy, or affected siblings.',
      ],
      commonWrongTurns: [
        'Treating only for acquired myasthenia gravis without considering the congenital genetic subtype.',
        'Accepting low muscle tone or developmental delay as a final diagnosis without further neuromuscular junction evaluation.',
        'Skipping genetic testing, resulting in treatment decisions that lack a genetic classification basis.',
        'Overlooking swallowing and respiratory muscle involvement until infection or choking leads to an emergency.',
      ],
      firstDepartments: [
        'Pediatric Neurology',
        'Neurology (Neuromuscular Disease Specialist)',
        'Rehabilitation Medicine',
        'Respiratory Medicine/Critical Care Medicine (for respiratory involvement)',
        'Medical Genetics/Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Record whether symptoms fluctuate with fatigue, activity, fever, or time of day.',
        'Bring records from EMG, repetitive nerve stimulation, single-fiber EMG, CK, antibody tests, and genetic testing.',
        'Ask your doctor to distinguish between Congenital Myasthenic Syndrome, acquired myasthenia gravis, myopathy, and motor neuron/peripheral nerve disease.',
        'Confirm whether swallowing safety, lung function, and sleep/nighttime breathing have been assessed.',
        'Ask how your genetic results will affect treatment choices and contraindications.',
      ],
      testsToAskAbout: [
        'Repetitive nerve stimulation and single-fiber EMG.',
        'Neuromuscular junction-related gene panel or whole exome sequencing.',
        'Antibodies related to acquired myasthenia gravis, for differential diagnosis.',
        'Swallowing assessment, lung function, and respiratory muscle strength evaluation.',
        'Rehabilitation and developmental assessments.',
      ],
      questionsForDoctor: [
        'Does the current evidence more support CMS or acquired myasthenia gravis?',
        'Has the genetic subtype been identified? How will it affect medication choices?',
        'Do I need to monitor swallowing and respiratory function? What situations require emergency care?',
        'How should rehabilitation training and daily activity intensity be arranged?',
        'Do family members need carrier testing or genetic counseling?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CMS commonly presents with fluctuating muscle weakness and easy fatigue, which can affect eye muscles, face, swallowing muscles, respiratory muscles, and proximal limb muscles. Infants may show weak feeding, weak cry, low muscle tone, ptosis, or breathing problems; children and adults may present with weakness after activity, difficulty climbing stairs, ptosis, double vision, or difficulty swallowing. Different genetic subtypes vary greatly.</p>',
      diagnosis:
        '<p>Diagnosis requires combining fatigable symptoms, neurological examination, electrophysiological testing, and genetic testing. Repetitive nerve stimulation, single-fiber EMG, and other tests can suggest abnormal neuromuscular transmission; genetic testing helps identify the subtype and guide treatment. Doctors will also rule out acquired myasthenia gravis, myopathy, peripheral neuropathy, and central nervous system diseases.</p>',
      treatment:
        '<p>Treatment is highly dependent on the subtype. Some medications may help certain subtypes but may be ineffective or worsen symptoms in others, so treatment plans should not be copied from others. Management also includes respiratory and swallowing assessment, infection contingency planning, rehabilitation training, nutritional support, and school/life accommodations.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on muscle strength, fatigue, swallowing safety, respiratory function, sleep breathing, nutrition, growth and development, and daily activity capacity. Families should keep copies of genetic reports, electrophysiology reports, medication responses, and emergency instructions, and ensure schools or caregivers understand fatigue and respiratory risks.</p>',
      fertilityOrFamily:
        '<p>Most CMS subtypes follow autosomal recessive inheritance, with a few being dominant. After pathogenic variants are identified, families can learn about options such as carrier testing, recurrence risk, prenatal diagnosis, or preimplantation genetic testing through genetic counseling.</p>',
      emergencySigns:
        '<p>Breathing difficulty, obvious cyanosis, rapid breathing after severe choking, inability to eat or drink, rapid worsening of weakness during infection, altered consciousness, or recurrent aspiration should prompt immediate emergency care, with clear mention of suspected or confirmed Congenital Myasthenic Syndrome.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
      },
      {
        name: 'MedlinePlus Genetics: Congenital myasthenic syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/congenital-myasthenic-syndrome/',
      },
      {
        name: 'Orphanet: Congenital myasthenic syndrome',
        type: 'review',
        url: 'https://www.orpha.net/en/disease/detail/590',
      },
    ],
    symptoms:
      '<p>May present with ptosis, double vision, difficulty feeding or swallowing, weakness after activity, respiratory muscle involvement, and easy fatigue, often with fluctuating symptoms.</p>',
    diagnosis:
      '<p>Evaluation typically includes neurological examination, repetitive nerve stimulation, single-fiber EMG, relevant antibody testing for differential diagnosis, and genetic testing.</p>',
    treatment:
      '<p>Treatment requires individualized selection based on genetic subtype, along with respiratory/swallowing assessment, rehabilitation training, and acute exacerbation contingency planning.</p>',
    prognosis:
      '<p>Prognosis depends on subtype, degree of respiratory and swallowing involvement, treatment response, and management during infections; clear classification helps reduce the risk of inappropriate treatment.</p>',
    sourceName: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 322,
      name: 'congenital-myasthenic-syndrome-journey.png',
      url: '/images/diseases/congenital-myasthenic-syndrome-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId:
      'disease-congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    id: 24,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    nameEn: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    alias:
      'Myotonia congenita, Thomsen disease, Becker disease, CLCN1-related myotonia',
    slug: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    oneSentence:
      'Congenital myotonia is an inherited skeletal muscle ion channel disorder that often appears in childhood with muscle stiffness, difficulty initiating movement, and a "warm-up" phenomenon where symptoms improve with repeated activity.',
    plainName:
      'A hereditary muscle condition characterized by slow muscle relaxation and pronounced stiffness at the start of activity',
    prevalence:
      'Generally rare worldwide. MedlinePlus estimates about 1 in 100,000 people are affected, with higher rates reported in some northern European regions.',
    quickLook: {
      whatItIs:
        'Muscles need to relax quickly after contracting. Abnormalities in muscle ion channels such as CLCN1 make muscle cells more prone to sustained excitability, resulting in slow muscle relaxation after gripping, standing up, running, or exposure to cold.',
      whoToSeeFirst:
        'For children or adults with long-standing muscle stiffness, difficulty starting to walk or run, symptoms that improve with repeated activity, or EMG findings showing myotonic discharges, the first step is a neurology or neuromuscular disease specialist. Always inform medical staff before surgery or anesthesia.',
      isGenetic:
        'Yes. Thomsen type is mostly autosomal dominant; Becker type is mostly autosomal recessive. The same gene variant may present differently in different individuals.',
      hasTreatment:
        'Most patients manage through trigger avoidance, activity planning, and specialist follow-up. When symptoms significantly affect daily life, a neuromuscular specialist can evaluate medication or rehabilitation strategies. Do not self-medicate.',
      commonDelayReason:
        'Muscle stiffness may be mistaken for lack of exercise, cramping, psychological stress, or ordinary muscle disorders. Without exploring the warm-up phenomenon, family history, and performing EMG or genetic testing, diagnosis is often delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Symptoms begin in childhood, with slow relaxation after standing up, starting to walk, running, climbing stairs, or releasing a fist.',
        'Muscles are stiff at the start of activity, then improve with repeated movements—a classic "warm-up" phenomenon.',
        'Myotonia worsens with cold, sudden activity after rest, stress, or certain medications.',
        'Muscles may appear well-developed, but initiating movement is difficult or occasional brief weakness occurs.',
        'Multiple family members have similar muscle stiffness, difficulty starting movement, or known CLCN1-related diagnosis.',
      ],
      commonWrongTurns: [
        'Managed only as cramping, calcium deficiency, or sports injury without neuromuscular evaluation.',
        'Mildly elevated creatine kinase was labeled as inflammatory myopathy, overlooking myotonic discharges and warm-up phenomenon.',
        'Failure to inform doctors of suspected myotonia before surgery or anesthesia.',
        'Negative result from single-gene or single test led to complete exclusion without considering SCN4A or other non-dystrophic myotonias.',
      ],
      firstDepartments: [
        'Neurology (Neuromuscular Disease Specialist)',
        'Pediatric Neurology (for childhood onset)',
        'Physical Medicine and Rehabilitation',
        'Medical Genetics / Genetic Counseling Clinic',
        'Anesthesiology Pre-operative Evaluation Clinic (before surgery)',
      ],
      diagnosisChecklist: [
        'Record the age of onset, triggers, presence of warm-up phenomenon, and worsening with cold.',
        'Gather family history of muscle stiffness, muscle development, difficulty initiating movement, or similar diagnoses.',
        'Bring EMG, creatine kinase, thyroid function, genetic test results, and records of past medication responses.',
        'Confirm whether this is CLCN1-related myotonia congenita or SCN4A-related myotonia or dystrophic myotonia.',
        'Inform medical staff of myotonia history before surgery, anesthesia, or emergency care, and ask doctors to assess medication and anesthesia risks.',
      ],
      testsToAskAbout: [
        'Needle electromyography to look for myotonic discharges.',
        'CLCN1 and non-dystrophic myotonia-related genetic testing.',
        'Creatine kinase and basic metabolic/endocrine workup to rule out other myopathies or triggers.',
        'Neuromuscular specialist evaluation of warm-up phenomenon, fist-opening relaxation, standing-walking function, and other functional tests.',
        'Whether family members need clinical screening or genetic counseling.',
      ],
      questionsForDoctor: [
        'Is my presentation more consistent with Thomsen type, Becker type, or another non-dystrophic myotonia?',
        'How should I interpret the genetic test results? Should other related genes be tested?',
        'Which medications, anesthetics, or environmental factors might worsen my myotonia?',
        'What exercise and rehabilitation plan would suit me? Are there sudden-start or cold scenarios I should avoid?',
        'Does my family need testing? If planning a pregnancy, what information can genetic counseling provide?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Congenital myotonia typically presents with muscle stiffness, slow relaxation, difficulty initiating movement, slow fist release, worsening with cold or sudden activity after rest, and a "warm-up" phenomenon where stiffness decreases with repeated movement. Some patients have well-developed muscles but difficulty initiating movement or occasional brief weakness. The heart and smooth muscle are usually unaffected, though individual variation can be significant.</p>',
      diagnosis:
        '<p>Diagnosis requires combining typical history, physical examination, EMG, and genetic testing. Pathogenic CLCN1 variants support a diagnosis of myotonia congenita. Physicians also need to differentiate SCN4A-related myotonia, dystrophic myotonia, and metabolic or endocrine-related muscle symptoms. Variants of uncertain significance cannot independently confirm or exclude diagnosis.</p>',
      treatment:
        '<p>Management focuses on trigger identification, activity planning, and pre-operative/emergency risk communication. When symptoms significantly affect walking, work, or daily life, a neuromuscular specialist can evaluate medication and rehabilitation strategies. Treatment response varies between patients; avoid self-medicating or stopping medications based on internet information.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on stiffness severity, fall risk, mobility, medication effectiveness, and anesthesia/surgical safety. Patients should keep diagnostic documentation, genetic reports, and notes about medications and anesthesia considerations for medical providers. Schools, workplaces, and families can allow adequate warm-up time to reduce fall risk from sudden starts.</p>',
      fertilityOrFamily:
        '<p>Thomsen type is mostly autosomal dominant; Becker type is mostly autosomal recessive. After identifying pathogenic variants, family members can learn about carrier testing, recurrence risks, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>Congenital myotonia is generally not an acute critical condition, but seek prompt medical care and report your suspected or confirmed myotonia history if you experience fall-related injuries, swallowing or breathing difficulties, before surgery or anesthesia, noticeable symptom worsening after medications, or if weakness progression differs from your usual pattern.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Myotonia Congenita',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
      },
      {
        name: 'MedlinePlus Genetics: Myotonia congenita',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/myotonia-congenita',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Myotonia Congenita',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK562335/',
      },
    ],
    symptoms:
      '<p>Common symptoms include muscle stiffness, difficulty initiating movement, slow fist release after gripping, worsening with cold or sudden activity after rest, and a warm-up phenomenon where symptoms improve with repeated movement.</p>',
    diagnosis:
      '<p>Assessment typically includes history, family history, EMG, creatine kinase, and CLCN1/related genetic testing, while ruling out other myotonic disorders.</p>',
    treatment:
      '<p>Management focuses on trigger avoidance, activity planning, anesthesia risk communication, and individualized treatment from a neuromuscular specialist.</p>',
    prognosis:
      '<p>Most patients experience a chronic stable or slowly progressive course. Quality of life depends on stiffness severity, fall risk, trigger management, and treatment response.</p>',
    sourceName: 'GeneReviews: Myotonia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 323,
      name: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
      url: '/images/diseases/congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-diamond-blackfan-anemia',
    id: 25,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Diamond-Blackfan Anemia',
    nameEn: 'Diamond-Blackfan Anemia',
    alias: 'Diamond-Blackfan anemia, DBA, Congenital Dyserythropoietic Anemia',
    slug: 'diamond-blackfan-anemia',
    oneSentence:
      'Diamond-Blackfan anemia is an inherited condition where the bone marrow cannot make enough red blood cells. It usually appears in infancy and may be accompanied by growth delay, birth defects, and increased cancer risk.',
    plainName:
      'A genetic form of anemia where the bone marrow cannot make enough red blood cells',
    prevalence:
      'MedlinePlus describes it affecting about 5 to 7 per million newborns, and GeneReviews also lists it as a rare inherited disorder of red blood cell production.',
    quickLook: {
      whatItIs:
        'The bone marrow makes blood cells. DBA mainly affects red blood cell production, causing anemia in infants or children; some patients also have abnormalities of the thumbs, face, heart, kidneys, or growth.',
      whoToSeeFirst:
        'When an infant shows pale skin, tiredness, poor feeding, anemia with low reticulocyte count, they should be evaluated by pediatric hematology or hematology department; severe anemia, rapid heartbeat, or breathing difficulty requires urgent care.',
      isGenetic:
        'Most cases are linked to genes that make ribosomal proteins or other blood-forming genes, commonly inherited in an autosomal dominant pattern; there are also new mutations and some other inheritance patterns.',
      hasTreatment:
        'There are long-term management plans from the hematology specialist, including anemia support, medications, blood transfusions, iron overload management, and stem cell transplant evaluation for some cases. Specific plans should be made by the hematology team.',
      commonDelayReason:
        'Infant anemia is often first thought to be from nutritional deficiency or infection; if reticulocyte count, bone marrow red blood cell production, and signs of birth defects are not checked, the diagnosis may be delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Noticeable anemia, pale skin, tiredness, poor feeding, or slow growth appearing in the first year after birth.',
        'Low hemoglobin with low reticulocyte count, suggesting the bone marrow is not making enough red blood cells.',
        'Anemia together with thumb or upper limb differences, facial features, heart or kidney structural differences, or short stature.',
        'Family history of childhood anemia, blood transfusions, bone marrow failure, or similar diagnoses.',
        'Anemia that does not fit with iron deficiency or nutritional causes.',
      ],
      commonWrongTurns: [
        'Only treating as iron deficiency without checking reticulocyte count and red blood cell production.',
        'Handling birth defects and anemia separately without considering they may be part of the same condition.',
        'Not regularly monitoring iron overload and organ effects after long-term transfusions.',
        'Missing long-term follow-up for cancer risk and bone marrow failure risk in DBA patients.',
      ],
      firstDepartments: [
        'Pediatric hematology',
        'Hematology',
        'Medical genetics / Genetic counseling clinic',
        'Heart, kidney, orthopedics, or rehabilitation specialists (based on associated differences)',
      ],
      diagnosisChecklist: [
        'Keep records of complete blood count, reticulocyte count, red blood cell values, fetal hemoglobin, red cell ADA, and bone marrow exam results.',
        'Record the age when anemia was found, number of transfusions, medication responses, infection history, and growth and development.',
        'Check for thumb/upper limb, craniofacial, heart, kidney, genitourinary, or eye differences.',
        'Ask whether genetic panel or whole exome testing for DBA-related genes is needed.',
        'When planning long-term follow-up, confirm iron overload monitoring, cancer screening, and bone marrow function tracking.',
      ],
      testsToAskAbout: [
        'Complete blood count, reticulocyte count, and blood smear.',
        'Red cell ADA, fetal hemoglobin, and tests to rule out other causes of anemia.',
        'Bone marrow exam to check red blood cell precursors.',
        'Genetic testing for DBA-related genes.',
        'Heart, kidney, bone, and growth and development assessments.',
        'Iron overload and organ function monitoring for patients on long-term transfusions.',
      ],
      questionsForDoctor: [
        'Does this anemia look more like DBA or another bone marrow failure or nutritional anemia? What more tests are needed?',
        'What is the goal of treatment now? How do we decide if medication, transfusion, or other options are the right choice?',
        'If long-term transfusions are needed, how do we monitor and manage iron overload?',
        'What birth defects should be screened for, and what is the long-term cancer risk?',
        'Does the family need genetic testing? How should we plan for future pregnancies?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>DBA usually appears as anemia in the first year after birth, with symptoms like pale skin, tiredness, poor feeding, rapid heartbeat, or slow growth. About half of patients also have birth differences such as thumb or upper limb differences, facial features, heart or kidney structural differences, eye problems, or short stature. The severity varies widely; some non-classic patients have milder or later-onset symptoms.</p>',
      diagnosis:
        '<p>Diagnosis combines infant-onset anemia, low reticulocyte count, reduced red blood cell production in the bone marrow, clues from red cell ADA or fetal hemoglobin tests, and ruling out infection, nutritional deficiency, other bone marrow failure syndromes, and acquired pure red cell aplasia. Genetic testing can help with subtyping and family risk assessment, but a negative result does not completely rule out the condition.</p>',
      treatment:
        '<p>Treatment is planned by the hematology team based on anemia severity, age, medication response, transfusion needs, and complication risks, and may include medications, red blood cell transfusions, iron overload management, and stem cell transplant evaluation. Different options have very different benefits and risks, and should not be adjusted based on internet information.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on hemoglobin levels, transfusion needs, iron overload, liver and heart endocrine function, growth and development, structural differences, bone marrow function, and cancer risk. It is recommended to keep genetic reports, transfusion records, iron overload test results, and treatment response records for long-term management.</p>',
      fertilityOrFamily:
        '<p>DBA is commonly inherited in an autosomal dominant pattern but can also be caused by new mutations. Once the disease-causing mutation is identified, patients and families can learn about testing relatives, recurrence risks, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling. Patients planning pregnancy also need joint assessment by hematology and obstetrics for anemia and treatment safety.</p>',
      emergencySigns:
        '<p>Seek medical care promptly if there is noticeable shortness of breath, palpitations, fainting, confusion, severe infection with fever, uncontrolled bleeding, or rapid worsening of known anemia. Patients on long-term transfusions who develop chest tightness, heart function problems, abdominal pain, or endocrine abnormalities should also return for evaluation of iron overload-related issues.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: DBA Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
      },
      {
        name: 'MedlinePlus Genetics: Diamond-Blackfan anemia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/diamond-blackfan-anemia',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Diamond-Blackfan Anemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK545302/',
      },
    ],
    symptoms:
      '<p>Anemia often appears in infancy with pale skin, tiredness, poor feeding, or slow growth; may be accompanied by thumb, craniofacial, heart, kidney, or other birth differences.</p>',
    diagnosis:
      '<p>Assessment includes complete blood count, reticulocyte count, bone marrow red blood cell production, red cell ADA/fetal hemoglobin tests, birth defect screening, and DBA-related genetic testing.</p>',
    treatment:
      '<p>Management is individualized by the hematology team and may include medications, transfusions, iron overload management, and stem cell transplant evaluation for some patients.</p>',
    prognosis:
      '<p>Outlook depends on anemia control, treatment complications, iron overload, birth defects, and long-term monitoring for cancer and bone marrow risks.</p>',
    sourceName: 'GeneReviews: DBA Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 324,
      name: 'diamond-blackfan-anemia-journey.png',
      url: '/images/diseases/diamond-blackfan-anemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-erdheim-chester-disease',
    id: 26,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Erdheim-Chester Disease',
    nameEn: 'Erdheim-Chester Disease',
    alias: 'ECD, Erdheim-Chester disease, non-Langerhans cell histiocytosis',
    slug: 'erdheim-chester-disease',
    oneSentence:
      'Erdheim-Chester Disease (ECD) is an extremely rare histiocytic neoplasm/histiocytosis that can affect long bones, perirenal tissue, cardiovascular system, lungs, orbits, brain, pituitary gland, and other sites.',
    plainName:
      'A rare blood and immune-related disease where abnormal histiocytes accumulate and infiltrate multiple organs',
    prevalence:
      'Global case numbers are very few, primarily affecting adults. The actual number of affected individuals may be underestimated due to misdiagnosis and missed diagnoses.',
    quickLook: {
      whatItIs:
        'Histiocytes are a type of cell in the immune system. In ECD, these cells multiply abnormally and infiltrate tissues and organs, causing inflammation, fibrosis, or organ damage; many patients can be found to have somatic mutations in BRAF or MAPK-ERK pathway genes.',
      whoToSeeFirst:
        'When experiencing unexplained bilateral long bone pain, exophthalmos (protruding eyes), diabetes insipidus, perirenal/retroperitoneal fibrosis, pericardial or periaortic lesions, or lung or central nervous system involvement, seek evaluation from hematology/histiocyte disease specialists or oncology.',
      isGenetic:
        'Usually not a hereditary condition. Associated mutations are typically somatically acquired and do not necessarily mean they will be passed to children.',
      hasTreatment:
        'There are options including molecular testing-guided targeted therapy, immunotherapy/anti-inflammatory therapy, and organ support treatment, but an experienced multidisciplinary team should develop a plan based on organ involvement and mutation status.',
      commonDelayReason:
        'Symptoms involve many different specialties—orthopedics, ophthalmology, nephrology, cardiovascular, respiratory, neurology, and endocrinology—and imaging findings can be mistaken for fibrosis, inflammation, or other tumors.',
    },
    patientJourney: {
      whenToSuspect: [
        'Adults with long-term bilateral shin or thigh bone pain, with imaging showing symmetric long bone sclerosis.',
        'Coexisting diabetes insipidus, orbital mass or eye protrusion together with bone pain and retroperitoneal or cardiovascular imaging abnormalities.',
        'CT/MRI showing perirenal wrapping, retroperitoneal fibrosis, periaortic wrapping, or right atrial pseudomass.',
        'Multisystem involvement of lungs, heart, kidneys, central nervous system, or pituitary that standard diagnostic workup cannot explain.',
        'Biopsy suggesting non-Langerhans cell histiocytosis, requiring further molecular testing.',
      ],
      commonWrongTurns: [
        'Managing only as osteoarthritis, fibrosis, IgG4-related disease, lymphoma, or metastatic tumor without tissue pathology and molecular testing.',
        'Organ problems seen by different specialists separately, without connecting bone pain, diabetes insipidus, orbital, and retroperitoneal imaging findings.',
        'Only imaging suspicion but without obtaining appropriate tissue biopsy, resulting in inability to confirm subtype and mutation status.',
        'Overlooking cardiovascular and central nervous system involvement, which significantly affects risk assessment.',
      ],
      firstDepartments: [
        'Hematology/Histiocyte Disease Specialty',
        'Oncology',
        'Rheumatology and Immunology (for differentiating IgG4-related disease, vasculitis, etc.)',
        'Endocrinology (when diabetes insipidus or pituitary involvement is present)',
        'Cardiovascular, Nephrology, Respiratory, Neurology, Ophthalmology, and other affected organ specialties as needed',
      ],
      diagnosisChecklist: [
        'Gather information on bone pain, urine output changes, eye symptoms, chest tightness or shortness of breath, neurological symptoms, and kidney or retroperitoneal imaging.',
        'Bring PET-CT, bone scan, CT/MRI, cardiac imaging, and prior pathology slides or block information.',
        'Confirm with your doctor whether lesion tissue biopsy is needed, and whether BRAF and MAPK-ERK pathway-related molecular testing should be performed.',
        'Assess the extent of cardiac, central nervous system, lung, kidney, and endocrine involvement.',
        'Confirm whether Langerhans cell histiocytosis, Rosai-Dorfman disease, IgG4-related disease, lymphoma, and infections have been ruled out.',
      ],
      testsToAskAbout: [
        'Lesion tissue biopsy, immunohistochemistry, and review by hematopathology/histiocyte disease experts.',
        'BRAF V600E and MAPK-ERK pathway-related molecular testing.',
        'Whole-body PET-CT, bone scan, or imaging focused on long bones.',
        'Cardiac MRI/ultrasound, chest and abdomen CT, brain and pituitary MRI.',
        'Kidney function tests, inflammation markers, endocrine function tests, and diabetes insipidus-related assessments.',
      ],
      questionsForDoctor: [
        'Do my imaging and pathology findings fit ECD? What additional tissue or imaging review is needed?',
        'Are there BRAF or other MAPK pathway mutations? How will this affect treatment options?',
        'Which organs are currently most affected and impacting my risk? Which specialists should be involved in my care?',
        'What indicators will be used to judge treatment effectiveness? How often should I have imaging and organ function rechecked?',
        'Which symptoms indicate I need emergency care for cardiac, central nervous system, or kidney problems?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>ECD can affect long bones, skin, lungs, heart, kidneys, retroperitoneum, orbits, brain, pituitary gland, and other tissues. Common clues include bone pain, fatigue, fever, weight loss, eye protrusion or orbital mass, diabetes insipidus, perirenal or retroperitoneal fibrosis, lung symptoms, cardiovascular involvement, and neurological symptoms. There is great variation among patients, and some may present with a single organ problem.</p>',
      diagnosis:
        '<p>Diagnosis requires combining typical imaging, affected organ manifestations, lesion tissue biopsy, immunohistochemistry, and molecular testing. International consensus emphasizes that even when imaging is highly suggestive, tissue should be obtained when possible to confirm the diagnosis and test for BRAF/MAPK-ERK pathway mutations. Doctors also need to differentiate other histiocytic diseases, IgG4-related disease, vasculitis, lymphoma, infections, and metastatic tumors.</p>',
      treatment:
        '<p>Treatment depends on symptom severity, extent of organ involvement, and molecular testing results, and may include targeted therapy, immunotherapy or anti-inflammatory therapy, local/organ support treatment, and multidisciplinary follow-up. Those with cardiac, central nervous system, lung, or kidney involvement typically require closer monitoring. Patients should not self-prescribe based on tumor or inflammatory disease experience.</p>',
      longTermCare:
        '<p>Long-term care focuses on monitoring affected organ function, treatment response, imaging changes, and drug side effects. It is recommended to keep pathology reports, molecular testing results, PET-CT/CT/MRI materials, and key laboratory values to help the multidisciplinary team assess progression at follow-up visits.</p>',
      fertilityOrFamily:
        '<p>ECD is generally not a hereditary disease. Common molecular changes are mostly somatic mutations. When planning for children, the focus should be on discussing disease activity, organ involvement, and the effects of current treatments on pregnancy with your care team.</p>',
      emergencySigns:
        '<p>When experiencing sudden chest pain, shortness of breath, fainting, neurological deficits, severe headache, altered consciousness, significant changes in urine output, rapid worsening of kidney function, or rapid worsening of orbital symptoms, seek emergency care or contact your care team promptly.</p>',
    },
    sources: [
      {
        name: 'NCI Dictionary: Erdheim-Chester disease',
        type: 'official',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/erdheim-chester-disease',
      },
      {
        name: 'GARD: Erdheim-Chester disease',
        type: 'official',
        url: 'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
      },
      {
        name: 'Blood: ECD consensus recommendations in the molecular era',
        type: 'guideline',
        url: 'https://ashpublications.org/blood/article/135/22/1929/452713/Erdheim-Chester-disease-consensus-recommendations',
      },
    ],
    symptoms:
      '<p>Can present with long bone pain, diabetes insipidus, orbital lesions, retroperitoneal/perirenal fibrosis, lung, heart, or central nervous system involvement, as well as fever, fatigue, and weight loss.</p>',
    diagnosis:
      '<p>Evaluation relies on imaging, affected tissue biopsy, immunohistochemistry, BRAF/MAPK pathway molecular testing, and multisystem involvement assessment.</p>',
    treatment:
      '<p>Treatment needs to be individualized based on mutation status and organ involvement, and may include targeted therapy, immunotherapy/anti-inflammatory therapy, and organ support.</p>',
    prognosis:
      '<p>Prognosis varies widely, depending on involvement of key organs such as heart, central nervous system, lungs, and kidneys, as well as treatment response.</p>',
    sourceName: 'GARD: Erdheim-Chester disease',
    sourceUrl:
      'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 325,
      name: 'erdheim-chester-disease-journey.png',
      url: '/images/diseases/erdheim-chester-disease-journey.png',
    },
    tagSlugs: [],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-fabry-disease',
    id: 27,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Fabry Disease',
    nameEn: 'Fabry Disease',
    alias:
      'Fabry Disease, Anderson-Fabry Disease, Alpha-Galactosidase A Deficiency',
    slug: 'fabry-disease',
    oneSentence:
      'Fabry Disease is an X-linked lysosomal storage disorder that can affect the nervous system, skin, kidneys, heart, cerebral blood vessels, eyes, and gastrointestinal tract, often leading to delayed diagnosis due to symptoms spread across multiple systems.',
    plainName:
      'A genetic metabolic disorder where fatty substances gradually build up in multiple organs',
    prevalence:
      'The classic type is rare, while later-onset forms may be more common but are often missed; detection rates vary greatly depending on the population screened.',
    searchIntents: [
      'Fabry disease which doctor',
      'burning hands feet reduced sweating proteinuria',
      'Fabry disease GLA genetic testing',
      'Fabry disease heart thickening kidney disease',
      'can women have Fabry disease',
    ],
    quickLook: {
      whatItIs:
        'Variants in the GLA gene cause reduced alpha-galactosidase A enzyme activity, leading to accumulation of glycolipid substances within cells, which progressively affects the nervous system, kidneys, heart, and cerebral blood vessels.',
      whoToSeeFirst:
        'When adolescents or adults have burning pain in the hands and feet, reduced or absent sweating, angiokeratomas, corneal whorl-like opacities, unexplained proteinuria, left ventricular hypertrophy, or stroke at a young age, consider starting with nephrology, cardiology, neurology, or genetic/metabolic/rare disease clinics.',
      isGenetic:
        'Yes, X-linked inheritance. Men are typically affected earlier and more severely, but women can also develop significant symptoms due to variation in X chromosome inactivation.',
      hasTreatment:
        'Yes, there are specific treatments and organ-protective management options available, but whether treatment is suitable, when to start, and how to monitor require a specialist team to evaluate genetic results, enzyme activity, organ involvement, and local access to care.',
      commonDelayReason:
        'Pain, gastrointestinal, skin, heart, kidney, and cerebrovascular symptoms often appear in different specialties. Women or people with later-onset presentations may have atypical features, making it easier for the condition to go unrecognized for years.',
    },
    patientJourney: {
      whenToSuspect: [
        'Pain with a burning sensation in the hands and feet starting in childhood or adolescence, worsening with heat, exercise, or fever, accompanied by reduced or absent sweating.',
        'Skin angiokeratomas, especially on the trunk, groin, buttocks, or upper thighs.',
        'Unexplained proteinuria, declining kidney function, left ventricular hypertrophy, heart rhythm abnormalities, or stroke/TIA at a young age.',
        'Corneal whorl-like opacities found during eye exam, together with pain, kidney, or heart-related clues.',
        'Family history of males with early-onset kidney failure, heart disease, or stroke, or a known GLA variant in the family.',
      ],
      commonWrongTurns: [
        'Extremity pain managed long-term as rheumatism, nerve pain, or growing pains.',
        'Proteinuria, heart muscle thickening, and stroke seen in separate visits, without asking about skin, sweating, pain, and family history.',
        'Fabry disease fully ruled out in women after enzyme activity comes back normal, without considering genetic testing and clinical findings.',
        'Focusing only on specific treatments, while neglecting long-term management of kidney, heart, brain, and psychosocial support.',
      ],
      firstDepartments: [
        'Nephrology',
        'Cardiology',
        'Neurology',
        'Dermatology/Ophthalmology (when identifying clues)',
        'Genetics/Medical Genetics/Rare Disease Clinic',
      ],
      diagnosisChecklist: [
        'Document pain, sweating, skin rash, gastrointestinal symptoms, hearing, vision, kidney, heart, and cerebrovascular symptoms.',
        'Gather urine protein, kidney function, ECG, cardiac ultrasound/MRI, brain MRI, ophthalmology, and dermatology findings.',
        'For males, ask about alpha-Gal A enzyme activity testing; for females or complex cases, focus on GLA genetic testing.',
        'Ask your doctor to explain whether the GLA variant is disease-causing, and whether family screening is needed.',
        'Confirm baseline organ involvement and follow-up plans for kidneys, heart, and brain.',
      ],
      testsToAskAbout: [
        'Alpha-galactosidase A enzyme activity testing.',
        'GLA genetic testing and family cascade screening.',
        'Lyso-Gb3/related biomarkers (when your doctor considers it appropriate).',
        'Urine protein, eGFR, kidney assessment.',
        'ECG, Holter monitoring, cardiac ultrasound, or cardiac MRI.',
        'Brain MRI, slit-lamp eye exam, hearing test, and neuropathic pain assessment.',
      ],
      questionsForDoctor: [
        'Does my presentation fit classic or later-onset Fabry Disease? What is the evidence?',
        'How do I interpret my GLA variant? Who in my family should be screened first?',
        'Which organs are currently affected? How often do I need follow-up?',
        'Is specific treatment appropriate for me? What are the treatment goals and monitoring targets?',
        'How will pain, kidney, heart, stroke risk, and psychological stress be managed?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Fabry Disease can present with burning pain in the hands and feet, reduced or absent sweating, angiokeratomas, corneal whorl-like opacities, abdominal pain or diarrhea, hearing loss, proteinuria or declining kidney function, left ventricular hypertrophy, heart rhythm abnormalities, chest pain, stroke at a young age, or white matter changes. Classic-type males are usually affected earlier, while females and later-onset types may have more subtle symptoms.</p>',
      diagnosis:
        '<p>Diagnosis requires combining clues from multiple systems, family history, alpha-galactosidase A enzyme activity, GLA genetic testing, and organ assessments. Reduced enzyme activity in males is highly suggestive; females may have normal enzyme activity, so enzyme testing alone cannot rule out the disease. Genetic results need to be interpreted in the context of clinical features and databases.</p>',
      treatment:
        '<p>Treatment includes specific therapies, kidney and cardiovascular protection, pain management, stroke risk management, gastrointestinal and psychosocial support. Decisions about enzyme replacement, pharmacological chaperones, or other options should be made by a team familiar with Fabry Disease, based on the disease type, organ involvement, and access to care.</p>',
      longTermCare:
        '<p>Long-term follow-up usually requires collaboration among nephrology, cardiology, neurology, ophthalmology, dermatology, and genetic counseling. Key monitoring includes urine protein/eGFR, heart structure and rhythm, cerebrovascular risk, pain, hearing, quality of life, and progress with family screening.</p>',
      fertilityOrFamily:
        '<p>Fabry Disease is X-linked. A male patient will pass the GLA variant to all daughters but not to sons; a female patient has approximately a 50% chance of passing the variant to each child. When planning a pregnancy, genetic counseling can explain options such as prenatal diagnosis or preimplantation genetic testing.</p>',
      emergencySigns:
        '<p>Sudden weakness on one side, difficulty speaking, severe chest pain, fainting, severe palpitations, acute shortness of breath, significantly reduced urine output, or rapid worsening of kidney function require immediate emergency care. Be sure to tell doctors that Fabry Disease is suspected or confirmed and inform them of any previous heart, kidney, or cerebrovascular involvement.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Fabry Disease',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
      },
      {
        name: 'MedlinePlus Genetics: Fabry disease',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/fabry-disease/',
      },
    ],
    symptoms:
      '<p>May present with burning pain in the hands and feet, reduced sweating, angiokeratomas, corneal whorl-like opacities, proteinuria, heart muscle thickening, heart rhythm abnormalities, gastrointestinal symptoms, or stroke at a young age.</p>',
    diagnosis:
      '<p>Assessment includes alpha-Gal A enzyme activity, GLA genetic testing, Lyso-Gb3/related markers, and evaluation of organ involvement in the kidneys, heart, brain, eyes, and skin.</p>',
    treatment:
      '<p>Management includes assessment for specific therapies, organ protection, pain and heart/kidney/brain risk management, and family screening.</p>',
    prognosis:
      '<p>Early identification and monitoring of organ involvement can help reduce irreversible damage; prognosis depends on disease type, timing of treatment, and the extent of heart, kidney, and cerebrovascular involvement.</p>',
    sourceName: 'GeneReviews: Fabry Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 326,
      name: 'fabry-disease-journey.png',
      url: '/images/diseases/fabry-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-familial-mediterranean-fever',
    id: 28,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Familial Mediterranean Fever',
    nameEn: 'Familial Mediterranean Fever',
    alias:
      'FMF, Recurrent Polyserositis, MEFV-Associated Autoinflammatory Disease',
    slug: 'familial-mediterranean-fever',
    oneSentence:
      'Familial Mediterranean Fever is a hereditary autoinflammatory disease marked by recurrent short fevers, often with abdominal pain, chest pain, joint pain, rash, or risk of amyloidosis.',
    plainName:
      'A hereditary autoinflammatory condition with recurrent fevers and polyserositis attacks',
    prevalence:
      'More common in Mediterranean and related populations, including some Jewish, Armenian, Arab, Turkish, and North African groups; can also occur in other populations.',
    quickLook: {
      whatItIs:
        'FMF involves overactive inflammation from the innate immune system. Attacks often start suddenly, last about a day or two, then resolve, but repeated attacks and chronic inflammation can lead to kidney amyloidosis and other risks.',
      whoToSeeFirst:
        'For recurrent unexplained fevers with abdominal pain, chest pain, monoarthritis, leg rash, or family history, consider evaluation at a rheumatology or pediatric rheumatology clinic.',
      isGenetic:
        'Usually associated with the MEFV gene, most commonly inherited in an autosomal recessive pattern, though dominant or single-variant cases can occur. Genetic results should be interpreted alongside clinical attack patterns.',
      hasTreatment:
        'Long-term prevention and attack management plans are available and can reduce attacks and amyloidosis risk. Specific medications, monitoring, and special situations require guidance from a rheumatology specialist.',
      commonDelayReason:
        'Abdominal attacks can mimic acute abdomen, joint pain can resemble infection or arthritis, and children may have only recurrent fevers; symptom-free intervals can lead to years without a diagnosis.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent brief high fevers with abdominal pain, chest pain, joint pain, or rash, with symptom-free intervals in between.',
        'Multiple ER visits for acute abdomen-like abdominal pain, but exams or surgery do not explain the repeated attacks.',
        'Recurrent redness, swelling, and pain in large joints, especially in the legs, often with fever.',
        'Erysipelas-like red patches on the ankles or lower legs, with fever or joint pain.',
        'Family history of FMF, recurrent fevers and abdominal pain, kidney amyloidosis, or unexplained kidney failure.',
      ],
      commonWrongTurns: [
        'Every abdominal pain episode treated as gastroenteritis, appendicitis, or gynecological emergency, without recognizing the periodic pattern.',
        'Relying solely on positive or negative genetic test results while ignoring clinical diagnostic criteria and attack characteristics.',
        'Stopping follow-up after symptom relief without monitoring urine protein or inflammation markers.',
        'Attributing recurrent fevers simply to low immunity or infections.',
      ],
      firstDepartments: [
        'Rheumatology',
        'Pediatric Rheumatology',
        'Nephrology (when proteinuria or amyloidosis risk is present)',
        'Genetic Counseling',
        'Emergency (for acute abdomen-like attacks or severe chest pain)',
      ],
      diagnosisChecklist: [
        'Record the date, duration, fever level, location of abdominal/chest/joint pain or rash, and whether attacks resolved on their own for each episode.',
        'Compile ethnic background, family history, past surgeries, or repeated ER visit records.',
        'Bring inflammation marker, blood count, urine, and kidney function results from both attack and symptom-free periods.',
        'Ask whether Tel Hashomer or other clinical criteria are met, and whether MEFV gene testing is needed.',
        'During long-term follow-up, monitor for urine protein, kidney function, and amyloidosis risk.',
      ],
      testsToAskAbout: [
        'CRP/ESR and blood counts during attacks, and serum amyloid A (can be helpful when done promptly).',
        'Urinalysis, urine protein, and kidney function.',
        'MEFV gene testing and variant interpretation.',
        'Imaging and differential diagnosis as needed for abdominal, chest, or joint pain attacks.',
        'Differential diagnosis from other periodic fever and autoinflammatory syndromes.',
      ],
      questionsForDoctor: [
        'Does my attack pattern fit FMF? What other conditions should be ruled out?',
        'How should my MEFV results be interpreted? Does having only one variant matter?',
        'What are the goals of long-term preventive treatment? How is effectiveness and side effect monitoring done?',
        'When should I go to the ER instead of waiting for the attack to resolve on its own?',
        'Do my family members need testing? Do I need genetic counseling before planning a pregnancy?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>FMF typically presents as recurrent brief fevers, often with peritonitis-like abdominal pain, pleuritis-like chest pain, arthritis or joint pain, erysipelas-like rash, and myalgia. Symptom-free intervals may be completely normal. Inadequately controlled chronic inflammation can increase the risk of AA amyloidosis and kidney involvement.</p>',
      diagnosis:
        '<p>Diagnosis relies mainly on clinical attack patterns, family and ethnic background, inflammation markers, treatment response, and MEFV gene testing. GeneReviews notes that even if genetic testing does not find biallelic pathogenic variants, FMF cannot be fully excluded; clinicians need to differentiate from other periodic fever syndromes, infections, inflammatory bowel disease, and acute abdomen.</p>',
      treatment:
        '<p>The goal of long-term management is to reduce attacks, control inflammation, and prevent amyloidosis. Specific medications, dosages, pregnancy planning, and management of resistance or intolerance require guidance from a rheumatology specialist. Patients should not stop or adjust medications on their own.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on attack frequency, inflammation markers, urine protein, kidney function, treatment adherence, and side effect monitoring. Patients can keep attack diaries and test results to help clinicians assess whether the disease is well controlled.</p>',
      fertilityOrFamily:
        '<p>FMF is most commonly autosomal recessive but can have more complex inheritance. After confirming MEFV variants, patients and partners can learn about recurrence risk, carrier testing, and reproductive options through genetic counseling.</p>',
      emergencySigns:
        '<p>Severe persistent abdominal pain, chest pain, difficulty breathing, altered consciousness, inability to eat or drink, suspected infection, or symptoms clearly different from previous attack patterns warrant prompt ER visit. Do not attribute every abdominal pain to FMF.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Familial Mediterranean Fever',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
      },
      {
        name: 'MedlinePlus Genetics: Familial Mediterranean fever',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/familial-mediterranean-fever/',
      },
      {
        name: 'Orphanet: Familial Mediterranean fever',
        type: 'review',
        url: 'https://www.orpha.net/en/disease/detail/342',
      },
    ],
    symptoms:
      '<p>Recurrent brief fevers, with possible abdominal pain, chest pain, joint pain/arthritis, erysipelas-like rash, and myalgia; symptom-free intervals are often relatively normal.</p>',
    diagnosis:
      '<p>Evaluation includes clinical attack patterns, inflammation markers, urine protein/kidney function, MEFV gene testing, and differentiation from other periodic fever diseases.</p>',
    treatment:
      '<p>Long-term prevention and inflammation control require planning by a rheumatology specialist; the goal is to reduce attacks and prevent amyloidosis and kidney damage.</p>',
    prognosis:
      '<p>Standard management can usually significantly reduce attack risk and amyloidosis risk; delayed diagnosis or inadequate control increases the risk of kidney complications.</p>',
    sourceName: 'GeneReviews: Familial Mediterranean Fever',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 327,
      name: 'familial-mediterranean-fever-journey.png',
      url: '/images/diseases/familial-mediterranean-fever-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-fanconi-anemia',
    id: 29,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Fanconi Anemia',
    nameEn: 'Fanconi Anemia',
    alias: 'Fanconi anemia, FA, Fanconi pancytopenia',
    slug: 'fanconi-anemia',
    oneSentence:
      'Fanconi anemia is an inherited DNA repair defect that can cause congenital abnormalities, bone marrow failure, and increased risk of leukemia and solid tumors.',
    plainName:
      'An inherited bone marrow failure syndrome that affects blood cell production and DNA repair',
    prevalence:
      'Generally rare, with varying carrier rates and incidence in different populations. Some patients are born with structural abnormalities, while others are first identified through cytopenias or cancer risk.',
    quickLook: {
      whatItIs:
        'FA-related genes are involved in DNA damage repair. Insufficient repair capacity can gradually impair bone marrow blood cell production and increase the risk of certain cancers and treatment toxicity.',
      whoToSeeFirst:
        'Children or adults with unexplained platelet, white blood cell, or red blood cell decreases, accompanied by short stature, café-au-lait spots, thumb/radial bone abnormalities, or kidney/urinary/reproductive system abnormalities, should be evaluated by hematology or pediatric hematology.',
      isGenetic:
        'Yes, most cases are autosomal recessive, though there are also X-linked or rare dominant forms. Genetic testing and family evaluation are very important.',
      hasTreatment:
        'Yes, long-term hematology management plans exist, including monitoring for bone marrow failure, managing infection, bleeding, and anemia, evaluating for hematopoietic stem cell transplantation, and cancer screening.',
      commonDelayReason:
        'Congenital abnormalities may be mild, and early cytopenias can be atypical. If treated as ordinary anemia, immune thrombocytopenia, or aplastic anemia without proper testing, chromosome breakage testing and genetic diagnosis may be missed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Gradual onset of platelet, white blood cell, or red blood cell decreases in childhood, especially with signs of infection or bleeding tendency.',
        'Short stature, skin pigmentation abnormalities, thumb/radial bone abnormalities, or kidney/urinary/reproductive abnormalities occurring together with blood problems.',
        'Young adults developing aplastic anemia, MDS/AML, or head/neck, skin, or genitourinary-related tumors.',
        'Abnormally strong reactions to chemotherapy or radiation therapy, requiring evaluation for DNA repair defects.',
        'Family history of bone marrow failure, early-onset tumors, similar abnormalities in siblings, or consanguineous marriage.',
      ],
      commonWrongTurns: [
        'Treating only as ordinary aplastic anemia or immune thrombocytopenia without chromosome breakage testing.',
        'Focusing only on congenital abnormalities without regular blood count and bone marrow risk monitoring.',
        'Failing to identify FA before transplantation or cancer treatment, leading to inadequate assessment of treatment toxicity risk.',
        'When tumors occur in adults, not revisiting childhood development, skin findings, and family history.',
      ],
      firstDepartments: [
        'Pediatric hematology / Hematology',
        'Medical genetics / Genetic counseling clinic',
        'Bone marrow transplant center (when evaluation is needed)',
        'ENT/head and neck, dermatology, gynecology/urology, and other cancer screening-related specialists',
      ],
      diagnosisChecklist: [
        'Keep all previous complete blood counts, reticulocyte counts, bone marrow studies, chromosome karyotypes, and tumor-related records.',
        'Document birth defects, growth and development, skin pigmentation, hearing, kidney/urinary/reproductive abnormalities, and family history.',
        'Ask about whether DEB/MMC chromosome breakage testing and FA-related genetic testing are needed.',
        'If considering transplantation, confirm donor screening and whether the transplant center is familiar with FA.',
        'Develop a long-term cancer screening plan for head/neck, skin, and gynecological/urological areas.',
      ],
      testsToAskAbout: [
        'Complete blood count and bone marrow examination.',
        'DEB/MMC chromosome breakage testing.',
        'FA-related gene panel or exome/genome testing.',
        'Kidney, heart, hearing, endocrine, and growth/development assessments.',
        'Cytogenetic and molecular studies related to MDS/AML risk.',
      ],
      questionsForDoctor: [
        'Does my cytopenia need evaluation for FA? Should I start with chromosome breakage testing or genetic testing?',
        'What stage is my bone marrow function currently at? How often should I have blood counts and bone marrow checks?',
        'Do I need a transplant evaluation? What screening is needed for donors?',
        'Which cancer screenings should I start now? How often?',
        'What genetic counseling is needed for my family and future family planning?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>FA can present with short stature, skin pigmentation abnormalities, thumb or radial bone abnormalities, microcephaly, kidney/urinary/reproductive abnormalities, eye and ear problems, endocrine abnormalities, and developmental issues. Hematologic manifestations commonly include progressive bone marrow failure; early stages may show platelet or white blood cell decreases before developing into pancytopenia. Patients also face risks of MDS/AML and solid tumors of the head/neck, skin, and genitourinary tract.</p>',
      diagnosis:
        '<p>Diagnosis typically relies on DEB/MMC chromosome breakage testing and molecular genetic testing, combined with clinical features, complete blood counts, bone marrow examination, and family history. The absence of obvious congenital abnormalities does not rule out FA. Identifying FA before treatment is important because patients may be more sensitive to DNA damage-related treatments such as radiation and chemotherapy.</p>',
      treatment:
        '<p>Management includes bone marrow failure monitoring, infection and bleeding risk management, transfusion and iron overload management, hematopoietic stem cell transplantation evaluation, and endocrine, developmental, and cancer screening. Specific treatment plans should be developed by a team familiar with inherited bone marrow failure syndromes.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on blood count trends, bone marrow clonal evolution, transplant timing, cancer screening, endocrine and growth/development, hearing, and quality of life. Patients should keep their genetic reports, chromosome breakage test results, bone marrow reports, and transplant/transfusion records.</p>',
      fertilityOrFamily:
        '<p>Most FA cases are autosomal recessive, though there are also X-linked or rare dominant forms. After identifying pathogenic variants, family members can pursue carrier testing, relative screening, prenatal diagnosis, or preimplantation genetic testing counseling.</p>',
      emergencySigns:
        '<p>Fever/infection, uncontrolled bleeding, black stools/blood in urine, significant fatigue or shortness of breath, rapidly worsening cytopenias, or persistent lumps/oral/pharyngeal ulcers that do not heal should prompt immediate medical attention. Inform providers about FA or inherited bone marrow failure risk.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Fanconi Anemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1401/',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Fanconi Anemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK559133/',
      },
    ],
    symptoms:
      '<p>May include congenital developmental abnormalities, skin pigmentation changes, cytopenias, bone marrow failure, infection or bleeding tendency, and increased risk of MDS/AML and solid tumors.</p>',
    diagnosis:
      '<p>Evaluation includes complete blood count, bone marrow examination, DEB/MMC chromosome breakage testing, FA-related genetic testing, and multisystem abnormality screening.</p>',
    treatment:
      '<p>Management includes bone marrow failure monitoring, supportive care, transplant evaluation, cancer screening, and genetic counseling.</p>',
    prognosis:
      '<p>Prognosis is influenced by bone marrow failure progression, transplant timing, treatment toxicity, and cancer risk. Long-term specialist follow-up is needed.</p>',
    sourceName: 'GeneReviews: Fanconi Anemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1401/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 328,
      name: 'fanconi-anemia-journey.png',
      url: '/images/diseases/fanconi-anemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-galactosemia',
    id: 30,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Galactosemia',
    nameEn: 'Galactosemia',
    alias:
      'Classic Galactosemia, GALT Deficiency, Galactose-1-Phosphate Uridyltransferase Deficiency',
    slug: 'galactosemia',
    oneSentence:
      'Galactosemia is a group of galactose metabolism disorders; the classic type can quickly cause feeding difficulties, jaundice, liver damage, infection, and bleeding risk in newborns after lactose intake.',
    plainName:
      'A genetic metabolic condition where the baby cannot properly process galactose from milk',
    prevalence:
      'MedlinePlus describes the classic type as affecting approximately 1 in 30,000 to 60,000 newborns, with other types being rarer.',
    quickLook: {
      whatItIs:
        'Galactose comes from lactose. Defects in enzymes like GALT cause galactose-related metabolites to build up; if not identified early, classic type newborns can develop serious liver and infection complications.',
      whoToSeeFirst:
        'If newborn screening is abnormal, or if a newborn shows poor feeding, vomiting, jaundice, lethargy, poor weight gain, bleeding, or suspected sepsis after starting milk, immediately seek pediatric/neonatal evaluation; after diagnosis, long-term management by metabolic genetics specialists.',
      isGenetic:
        'Yes, most commonly autosomal recessive. The classic type is mostly related to biallelic pathogenic variants in GALT.',
      hasTreatment:
        'Dietary and long-term follow-up management plans exist, but different types and variant severity vary, requiring guidance from metabolic specialists and dietitians.',
      commonDelayReason:
        'Early symptoms can resemble physiological jaundice, breast milk jaundice, feeding problems, or infections; if follow-up for abnormal newborn screening is not prompt, diagnosis may be delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Newborn screening suggests abnormal galactose metabolism or abnormal GALT activity.',
        'Poor feeding, vomiting, diarrhea, lethargy, or poor weight gain after starting breast milk or regular formula after birth.',
        'Worsening jaundice, enlarged liver, abnormal clotting, low blood sugar, or suspected sepsis.',
        'Cataracts in infants or long-term developmental, speech, or motor problems with a history of neonatal jaundice/liver disease.',
        'Family history of galactosemia or unexplained early infant death.',
      ],
      commonWrongTurns: [
        'Attributing jaundice only to physiological or breast milk jaundice without considering poor feeding and abnormal liver function.',
        'Not following up promptly after a positive screening result or changing the feeding plan.',
        'Focusing only on acute liver disease and neglecting long-term follow-up for speech, motor, and ovarian function development in females.',
        'Not distinguishing between classic type, clinical variant type, Duarte variant, or other galactose metabolism disorders.',
      ],
      firstDepartments: [
        'Neonatal/pediatric emergency department',
        'Metabolic genetics department',
        'Pediatric gastroenterology and hepatology department',
        'Nutrition department (under metabolic specialist guidance)',
        'Ophthalmology, rehabilitation, and developmental-behavioral pediatrics (for long-term follow-up)',
      ],
      diagnosisChecklist: [
        'Keep newborn screening reports, follow-up notifications, feeding history, and jaundice/liver function/coagulation/infection test results.',
        'Confirm whether red blood cell GALT activity, galactose-1-phosphate, and GALT gene testing were performed.',
        'Record when lactose/galactose-restricted diet started and subsequent changes.',
        'Long-term assessment for cataracts, speech, motor, learning, and female ovarian function.',
        'Prepare gene report for genetic counseling when family members have family planning needs.',
      ],
      testsToAskAbout: [
        'Red blood cell GALT enzyme activity.',
        'Galactose-1-phosphate, blood/urine galactose-related metabolites.',
        'GALT gene testing; evaluate other types like GALK1 and GALE if needed.',
        'Liver function, coagulation function, infection assessment, and blood glucose.',
        'Ophthalmology for cataract evaluation, developmental and speech assessment.',
      ],
      questionsForDoctor: [
        'Does my child have classic type, clinical variant type, or another galactose metabolism disorder?',
        'What feeding plan should we use now? What ingredients in food or medications need to be avoided?',
        'After the acute phase has passed, what developmental and endocrine issues need long-term attention?',
        'How often should galactose-1-phosphate or other markers be rechecked?',
        'Do family members need carrier testing? How can we screen early in future pregnancies?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Classic galactosemia can appear within days after a newborn starts lactose-containing milk, with feeding difficulties, vomiting, lethargy, poor weight gain, jaundice, liver damage, abnormal clotting, low blood sugar, cataracts, and severe infection risk. Even with adequate early dietary management, some children may still have long-term risks in speech, motor, learning, and female ovarian function.</p>',
      diagnosis:
        '<p>Diagnosis relies on follow-up after newborn screening, red blood cell GALT enzyme activity, galactose-1-phosphate levels, and GALT gene testing. Doctors also need to differentiate from biliary atresia, sepsis, other liver diseases, and GALK1/GALE-related galactose metabolism disorders.</p>',
      treatment:
        '<p>The acute phase requires prompt management by pediatrics/neonatology, with diet adjustments under metabolic genetics specialist guidance. Long-term management includes dietary restriction, nutritional assessment, developmental and speech follow-up, ophthalmology checks, and reproductive endocrine monitoring. Specific food lists and feeding plans should be made by the metabolic nutrition team.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on nutritional status, galactose metabolism markers, speech and motor development, learning ability, eye health, bone health, and female ovarian function. Families should keep records of screening, genetic results, diet plans, and follow-up reports.</p>',
      fertilityOrFamily:
        "<p>Classic and clinical variant types are usually autosomal recessive. Once the family's GALT variants are identified, parents, siblings, and relatives with family planning needs can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>",
      emergencySigns:
        '<p>Seek immediate medical care if a newborn has poor feeding, repeated vomiting, lethargy, worsening jaundice, bleeding, fever, or suspected sepsis; also contact the metabolic specialist or emergency department if a diagnosed child has obvious discomfort after accidental intake.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Classic Galactosemia and Clinical Variant Galactosemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
      },
      {
        name: 'MedlinePlus Genetics: Galactosemia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/galactosemia/',
      },
    ],
    symptoms:
      '<p>Newborns may have poor feeding, vomiting, lethargy, jaundice, liver damage, bleeding, low blood sugar, infection risk, and cataracts.</p>',
    diagnosis:
      '<p>Evaluation includes newborn screening follow-up, GALT enzyme activity, galactose-1-phosphate, GALT gene testing, and liver function/infection differentiation.</p>',
    treatment:
      '<p>Management centers on dietary adjustment under metabolic specialist guidance, acute phase support, and long-term developmental/ophthalmology/endocrine follow-up.</p>',
    prognosis:
      '<p>Early identification can avoid many acute critical complications, but long-term issues such as speech, motor, learning, and ovarian function still require follow-up.</p>',
    sourceName: 'GeneReviews: Classic Galactosemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 329,
      name: 'galactosemia-journey.png',
      url: '/images/diseases/galactosemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-gauchers-disease',
    id: 31,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Gaucher’s Disease',
    nameEn: 'Gaucher’s Disease',
    alias:
      'Gaucher disease、glucocerebrosidase deficiency、GBA1-related Gaucher disease',
    slug: 'gauchers-disease',
    oneSentence:
      'Gaucher disease is a lysosomal storage disorder that can cause enlarged liver and spleen, anemia, low platelets, bone pain or bone crises, and some types also affect the nervous system.',
    plainName:
      'An inherited metabolic disorder where fatty substances build up in the liver, spleen, bone marrow, and bones',
    prevalence:
      'Generally rare; type 1 is more common in the Ashkenazi Jewish population. Age of onset and severity vary widely across types.',
    quickLook: {
      whatItIs:
        'Insufficient GBA1-related enzyme activity causes substances like glucocerebroside to build up inside macrophages, affecting the liver, spleen, bone marrow, bones, and the nervous system in some patients.',
      whoToSeeFirst:
        'When there is unexplained enlarged spleen, enlarged liver, anemia, low platelets, bone pain, fractures, or bone crises, evaluation by hematology, genetics/metabolism, or pediatrics is appropriate.',
      isGenetic:
        'Yes, autosomal recessive inheritance. GBA1 gene testing and enzyme activity testing help with diagnosis and family screening.',
      hasTreatment:
        'Yes, there are specific treatments and supportive management options. Which treatment is suitable depends on type, organ involvement, age, and availability; a specialist team should develop the plan.',
      commonDelayReason:
        'Enlarged spleen and low platelets are often mistaken for blood cancers, immune thrombocytopenia, or liver disease; bone pain may also first be treated as an orthopedic problem.',
    },
    patientJourney: {
      whenToSuspect: [
        'Unexplained enlarged spleen, enlarged liver, anemia, or low platelets in children or adults.',
        'Recurrent bone pain, bone crises, low bone density, pathologic fractures, or imaging showing bone marrow infiltration.',
        'Persistent anemia, bone pain, or liver/spleen-related findings after splenectomy.',
        'Infants and young children with enlarged liver and spleen plus neurological abnormalities need evaluation for neuronopathic Gaucher disease.',
        'Family history of Gaucher disease, GBA1 variants, or similar liver/spleen, blood, or bone findings.',
      ],
      commonWrongTurns: [
        'Testing only for ITP, leukemia, lymphoma, or cirrhosis without enzyme activity or gene testing.',
        'After splenectomy, not continuing to investigate the underlying disease, leading to gradual worsening of bone complications.',
        'Long-term bone pain treated as growing pains or orthopedic disease without considering low platelets and enlarged spleen.',
        'After diagnosis, only monitoring blood counts and neglecting long-term assessment of bones, lungs, and nervous system.',
      ],
      firstDepartments: [
        'Hematology',
        'Genetics/Metabolism or Medical Genetics',
        'Pediatrics',
        'Orthopedics/Rehabilitation (for bone complications)',
        'Neurology (when neuronopathic type is suspected)',
      ],
      diagnosisChecklist: [
        'Keep records of blood counts, liver/spleen imaging, bone imaging, bone density, and any previous bone pain or fractures.',
        'Ask whether glucocerebrosidase activity and GBA1 gene testing were done.',
        'Confirm whether type 1, type 2, type 3, or other rare presentations were evaluated.',
        'Assess liver/spleen volume, bone marrow burden, lung and nervous system involvement.',
        'When family members have reproductive plans, prepare the genetic report for genetic counseling.',
      ],
      testsToAskAbout: [
        'Glucocerebrosidase enzyme activity test.',
        'GBA1 gene testing.',
        'Complete blood count, liver/spleen size, and blood chemistry.',
        'Bone MRI, X-ray, or bone density assessment.',
        'Biomarkers and lung/nervous system evaluation as your doctor considers appropriate.',
      ],
      questionsForDoctor: [
        'What type of Gaucher disease do I have? Which organs are affected?',
        'Do I need specific treatment? What are the treatment goals and monitoring indicators?',
        'How should bone pain and bone risks be followed long-term?',
        'Do my family members need enzyme activity or gene testing?',
        'What symptoms suggest bone crisis, infection, or bleeding that require emergency care?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Common signs of Gaucher disease include enlarged spleen, enlarged liver, anemia, low platelets, fatigue, easy bruising or bleeding, bone pain, bone crises, decreased bone density, and fractures. Type 1 usually does not primarily involve the nervous system; types 2 and 3 may have varying degrees of neurological involvement. Individual variation is significant.</p>',
      diagnosis:
        '<p>Diagnosis typically relies on reduced glucocerebrosidase activity and GBA1 gene testing, combined with assessment of blood, liver/spleen, bones, and nervous system. Doctors will also rule out blood cancers, immune thrombocytopenia, liver disease, and other lysosomal storage disorders.</p>',
      treatment:
        '<p>Treatment may include specific therapy, support for anemia/bleeding, management of bone complications, rehabilitation, and genetic counseling. The specific plan depends on disease type, age, pregnancy plans, organ involvement, and medication availability, and should be developed by a specialist team.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on blood counts, liver/spleen size, bone pain and imaging, bone density, growth and development, lung and nervous system assessment, and monitoring of treatment response and side effects.</p>',
      fertilityOrFamily:
        '<p>Gaucher disease is autosomal recessive. After identifying the GBA1 variant, parents, siblings, and partners can learn about options such as carrier testing, recurrence risk, prenatal diagnosis, or preimplantation genetic testing through genetic counseling.</p>',
      emergencySigns:
        '<p>When there is severe bone pain, inability to bear weight, fever with bone pain, severe bleeding, marked worsening of mental or general condition after infection, severe pain in the spleen area, or rapid worsening of anemia, seek medical care promptly.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Gaucher Disease',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
      },
      {
        name: 'MedlinePlus Genetics: Gaucher disease',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/gaucher-disease/',
      },
    ],
    symptoms:
      '<p>May present as enlarged liver and spleen, anemia, low platelets, fatigue, bleeding tendency, bone pain, bone crises, fractures, or neurological symptoms.</p>',
    diagnosis:
      '<p>Evaluation includes glucocerebrosidase activity testing, GBA1 gene testing, blood counts, liver/spleen imaging, and assessment of bone/nervous system involvement.</p>',
    treatment:
      '<p>Management includes evaluation for specific therapy, management of blood and bone complications, organ follow-up, and genetic counseling.</p>',
    prognosis:
      '<p>Prognosis depends on type, nervous system involvement, bone complications, and treatment availability; regular follow-up can reduce the impact of complications.</p>',
    sourceName: 'GeneReviews: Gaucher Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 330,
      name: 'gauchers-disease-journey.png',
      url: '/images/diseases/gauchers-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-generalized-myasthenia-gravis',
    id: 32,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Generalized Myasthenia Gravis',
    nameEn: 'Generalized Myasthenia Gravis',
    alias:
      'gMG, Generalized Myasthenia Gravis, Acquired Autoimmune Myasthenia Gravis',
    slug: 'generalized-myasthenia-gravis',
    oneSentence:
      'Generalized Myasthenia Gravis is an autoimmune disease affecting the connection between nerves and muscles, causing fluctuating weakness in muscles of the eyes, face, swallowing, speech, limbs, or breathing.',
    plainName:
      'An autoimmune muscle weakness that gets worse with activity and better with rest',
    prevalence:
      'A rare neurological immune disease that can occur at any age. Common onset groups include young women and older men.',
    quickLook: {
      whatItIs:
        'Antibodies from the immune system interfere with signals between nerves and muscles, making muscles tire easily. Generalized means that besides eye muscles, it also affects muscles of the face and throat, limbs, neck, or breathing.',
      whoToSeeFirst:
        'When experiencing drooping eyelids, double vision, nasal speech, difficulty chewing or swallowing, trouble holding up the head, limb weakness that worsens with activity, consult a neurology specialist in neuroimmunology or neuromuscular diseases. If breathing is difficult or swallowing is significantly impaired, go to the emergency department immediately.',
      isGenetic:
        'It is usually not directly inherited but is an acquired autoimmune condition. Some families may have autoimmune tendencies. It needs to be distinguished from congenital myasthenic syndromes.',
      hasTreatment:
        'Multiple treatment options exist including symptom control, immunotherapy, emergency interventions, and thymus-related strategies. The specific choice depends on antibodies, thymus status, severity, age, and other medical conditions.',
      commonDelayReason:
        'Symptoms fluctuate significantly, and early on may only show as eye muscle issues or fatigue. It is easily mistaken for eye problems, cerebrovascular issues, anxiety, throat problems, or ordinary tiredness.',
    },
    patientJourney: {
      whenToSuspect: [
        'Eyelid drooping or double vision that fluctuates with time of day, fatigue, or activity.',
        'Speech becoming nasal, difficulty chewing, choking when swallowing, trouble holding up the head, or reduced facial expression.',
        'Weakness in proximal limbs, difficulty climbing stairs, raising arms, or standing up, which improves with rest.',
        'Weakness noticeably worsening after infection, surgery, certain medications, or stress.',
        'Breathing difficulty, shortness of speech, or inability to lie flat, suggesting possible crisis risk.',
      ],
      commonWrongTurns: [
        'Eye muscle symptoms treated only as an eye problem without evaluating the neuromuscular junction.',
        'Swallowing and speech difficulties attributed to ENT (ear, nose, throat) or psychological issues.',
        'Normal exam results on the day of testing due to symptom fluctuation, incorrectly thinking no organic problem exists.',
        'Not informing about MG history before taking medications, leading to exposure to drugs that can worsen myasthenia.',
      ],
      firstDepartments: [
        'Neurology (neuroimmunology or neuromuscular specialty)',
        'Emergency Medicine (for breathing difficulty, swallowing difficulty, or rapid worsening)',
        'Thoracic Surgery (for thymoma or thymus evaluation)',
        'Rehabilitation Medicine (for functional management during stable periods)',
      ],
      diagnosisChecklist: [
        'Document which muscles are weak, whether weakness worsens with activity and improves with rest, daily fluctuations, and triggers.',
        'Bring records from ophthalmology, neurology, swallowing tests, chest CT/MRI, antibody tests, and EMG results.',
        'Ask about antibody testing for AChR, MuSK, LRP4, and repetitive nerve stimulation or single-fiber EMG.',
        'Confirm if thymus imaging is needed to evaluate thymus hyperplasia or thymoma.',
        'Compile current medications and ask the doctor which ones might worsen MG.',
      ],
      testsToAskAbout: [
        'AChR, MuSK, LRP4 and other myasthenia gravis-related antibodies.',
        'Repetitive nerve stimulation and single-fiber EMG testing.',
        'Ice pack test or bedside fatigue test (if the doctor considers it appropriate).',
        'Chest CT/MRI to evaluate the thymus.',
        'Pulmonary function, swallowing assessment, and evaluation of infection triggers.',
      ],
      questionsForDoctor: [
        'Am I generalized or ocular type? How severe is it currently?',
        'How will antibody and thymus test results affect my treatment choices?',
        'What symptoms indicate a myasthenic crisis requiring immediate emergency care?',
        'Which medications, infections, or surgeries might worsen my condition?',
        'What are the treatment goals, follow-up schedule, and medication side effect monitoring?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>gMG can present with drooping eyelids, double vision, reduced facial expression, slurred or nasal speech, chewing fatigue, swallowing difficulty, neck weakness, proximal limb weakness, and respiratory muscle involvement. A characteristic feature is worsening with activity and improvement with rest, but in severe cases, swallowing or breathing crisis may occur.</p>',
      diagnosis:
        '<p>Diagnosis requires combining fluctuating muscle weakness presentation, neurological examination, antibody testing, electrophysiological studies, and thymus imaging. Doctors will differentiate from stroke, motor neuron disease, myopathy, congenital myasthenic syndromes, Lambert-Eaton syndrome, and thyroid eye disease, among others.</p>',
      treatment:
        '<p>Treatment includes symptom-improving medications, immunotherapy, emergency intervention strategies, thymus-related evaluation, and rehabilitation support. Plans need to be individualized based on antibody type, thymus status, crisis risk, comorbidities, and pregnancy planning. Patients should not stop or adjust medications on their own.</p>',
      longTermCare:
        '<p>Long-term management focuses on weakness scoring, swallowing and breathing risk assessment, medication side effect monitoring, bone health, blood pressure and blood sugar management, and quality of life. Patients should keep diagnosis records, medication lists, and emergency instructions. Always inform medical providers about MG history before surgery or starting new medications.</p>',
      fertilityOrFamily:
        '<p>MG is usually not directly inherited. Pregnancy planning requires advance discussion with neurology and obstetrics about disease stability, medication safety, delivery, and the risk of transient neonatal myasthenia.</p>',
      emergencySigns:
        '<p>Breathing difficulty, shortness of speech, significant swallowing difficulty, frequent choking, inability to lie flat, rapid weakness progression, marked worsening after infection, or altered consciousness require immediate emergency care. Clearly inform providers of your myasthenia gravis history.</p>',
    },
    sources: [
      {
        name: 'NINDS: Myasthenia Gravis',
        type: 'official',
        url: 'https://www.ninds.nih.gov/node/733',
      },
      {
        name: 'MedlinePlus: Myasthenia Gravis',
        type: 'official',
        url: 'https://medlineplus.gov/myastheniagravis.html',
      },
      {
        name: 'MedlinePlus Genetics: Myasthenia gravis',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/myasthenia-gravis',
      },
    ],
    symptoms:
      '<p>May include drooping eyelids, double vision, swallowing or speech difficulty, neck and limb weakness, and respiratory muscle involvement, typically worsening with activity and improving with rest.</p>',
    diagnosis:
      '<p>Evaluation includes antibody testing, repetitive nerve stimulation/single-fiber EMG, thymus imaging, and swallowing and breathing risk assessment.</p>',
    treatment:
      '<p>Management includes symptom treatment, immunotherapy, crisis intervention, thymus evaluation, and long-term follow-up, individualized by neurology specialists.</p>',
    prognosis:
      '<p>Most patients can achieve significant improvement with proper treatment, but crisis, infection, medications, and comorbidities determine long-term risk.</p>',
    sourceName: 'NINDS: Myasthenia Gravis',
    sourceUrl: 'https://www.ninds.nih.gov/node/733',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 331,
      name: 'generalized-myasthenia-gravis-journey.png',
      url: '/images/diseases/generalized-myasthenia-gravis-journey.png',
    },
    tagSlugs: ['neuromuscular'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-congenital-scoliosis',
    id: 33,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Congenital Scoliosis',
    nameEn: 'Congenital Scoliosis',
    alias:
      'Congenital Spinal Curvature, Congenital Vertebral Malformation, Congenital scoliosis',
    slug: 'congenital-scoliosis',
    oneSentence:
      'Congenital scoliosis is a structural spinal curve caused by abnormal vertebral formation or segmentation during embryonic development, which may gradually progress as a child grows.',
    plainName:
      'Curvature of the spine due to abnormal bone development before birth',
    prevalence:
      'Generally rare, with wide variation in severity; some children are identified at birth or during checkups, while others are recognized due to trunk asymmetry, screening for associated abnormalities, or imaging studies.',
    quickLook: {
      whatItIs:
        "This is not simply 'poor posture.' Congenital scoliosis typically results from vertebral structural abnormalities such as hemivertebrae, failure of segmentation, or fused vertebrae. The direction and rate of curve progression depend on the type of deformity, its location, and the child's growth stage.",
      whoToSeeFirst:
        'When a child shows shoulder or pelvic asymmetry, a raised area on one side of the back, trunk tilt, or imaging suggests vertebral abnormalities, an initial evaluation at pediatric orthopedics, spine surgery, or pediatric bone specialists is appropriate.',
      isGenetic:
        'Most cases are not a single-gene inherited disorder, but it may be associated with other congenital anomalies or syndromes. If there are multiple system abnormalities, family history, or prenatal clues, genetic counseling should be considered.',
      hasTreatment:
        'There are different management options including observation, bracing, rehabilitation assessment, and surgery. Whether intervention is needed depends on the degree of curvature, rate of progression, impact on chest/lung development, and age.',
      commonDelayReason:
        'Early appearance changes may be subtle and are often mistaken for poor sitting or standing posture, or ordinary uneven shoulders; without standing full-spine imaging and screening for associated abnormalities, the risk may be underestimated.',
    },
    patientJourney: {
      whenToSuspect: [
        'Physical exam or parent observation reveals uneven shoulders, prominent shoulder blade, asymmetrical waistline, or trunk leaning to one side.',
        'During forward bending, one side of the back is visibly raised, or there is asymmetry of the pelvis or chest when standing.',
        'Imaging after birth or during early childhood suggests hemivertebra, fused vertebrae, rib abnormalities, or other vertebral development anomalies.',
        'The child has congenital heart, kidney/urinary, genital, anorectal, or limb abnormalities, along with visible spine abnormality.',
        'The curvature significantly worsens during a growth spurt, or there is back pain, leg weakness, numbness, or bowel/bladder changes.',
      ],
      commonWrongTurns: [
        'Managing it only as poor posture, heavy backpack, or ordinary hunchback without taking a standing full-spine X-ray.',
        'Confusing congenital scoliosis with adolescent idiopathic scoliosis, overlooking the structural vertebral abnormality.',
        'Focusing only on spinal appearance without screening for spinal cord, kidney, heart, and other congenital abnormalities.',
        'Not consistently storing imaging and Cobb angle records, making it difficult to determine true progression.',
        'Discussing intervention options too early or too late, without evaluation by a team familiar with pediatric spinal deformities.',
      ],
      firstDepartments: [
        "Pediatric Orthopedics / Children's Orthopedics",
        'Spine Surgery',
        'Pediatrics (initial screening and referral for associated abnormalities)',
        'Rehabilitation Medicine (functional and postural support)',
        'Medical Genetics / Genetic Counseling Clinic (when there are multiple system abnormalities or family history)',
      ],
      diagnosisChecklist: [
        'Keep standing full-spine front and side X-rays, recording Cobb angle and imaging date each time.',
        'Organize birth history, prenatal ultrasound, developmental history, and prior cardiac/kidney/urinary/neurological exam results.',
        'Ask whether CT 3D reconstruction is needed to clarify hemivertebra, fused vertebrae, or segmentation defects.',
        'Ask whether spinal MRI is needed to check for diastematomyelia, tethered cord, syringomyelia, or other issues.',
        'Confirm whether kidney/urinary ultrasound, cardiac ultrasound, and lung function assessment are needed.',
      ],
      testsToAskAbout: [
        'Standing full-spine front and side X-ray with Cobb angle measurement.',
        'Spinal CT 3D reconstruction (for complex bony structure assessment or preoperative planning).',
        'Spinal MRI (to evaluate spinal cord and neural structures).',
        'Kidney/urinary ultrasound and cardiac ultrasound.',
        'Lung function and breathing assessment when there is significant chest or upper thoracic involvement.',
      ],
      questionsForDoctor: [
        'What type of vertebral development abnormality does this imaging show? Is the curve likely to continue progressing?',
        'Does the child need observation, bracing, rehabilitation support, or referral to a surgical team for further evaluation?',
        'How often should follow-up visits be scheduled? How can radiation exposure from repeated imaging be minimized?',
        'Have the spinal cord, kidneys, heart, and other potentially associated congenital abnormalities been screened yet?',
        'Which exercises are safe, and which activities should be temporarily avoided?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Congenital scoliosis may present as trunk tilt, uneven shoulders or shoulder blades, asymmetrical waistline, raised area on one side of the back, abnormal chest shape, or worsening appearance as height increases. Children with mild cases may have no pain and only discover the condition during checkups or imaging. More severe cases or those with thoracic involvement may affect chest development and lung function.</p>',
      diagnosis:
        '<p>Diagnosis requires combining physical examination and imaging. Standing full-spine X-ray is used to measure curve angle and track progression; CT can help visualize bony structures such as hemivertebrae, fused vertebrae, and segmentation defects; MRI is used to assess spinal cord and nervous system abnormalities. Based on the clinical situation, doctors will also screen for kidney/urinary system, heart, and other congenital abnormalities.</p>',
      treatment:
        '<p>Management depends on the type of deformity, curve location, rate of progression, age, and impact on chest and lung function. Some children only need regular observation and imaging follow-up; others may need bracing, rehabilitation, and activity guidance; those with rapid progression or functional impact need evaluation by a pediatric spine team to determine timing and surgical options.</p>',
      longTermCare:
        '<p>Long-term care focuses on continuously recording Cobb angle, height growth, appearance changes, neurological symptoms, and chest and breathing function. Families should keep all original imaging, reports, and follow-up records, preferably comparing trends within the same specialty team rather than looking at single angle measurements.</p>',
      fertilityOrFamily:
        '<p>Most cases of congenital scoliosis are not simple single-gene inherited disorders. If there are multiple congenital abnormalities, developmental delays, similar deformities in the family, or plans for future pregnancies, genetic counseling is recommended to discuss whether chromosome or genetic testing, targeted prenatal ultrasound, and recurrence risk assessment are appropriate.</p>',
      emergencySigns:
        '<p>Rapidly worsening back pain, leg weakness or numbness, changes in gait, bowel/bladder dysfunction, significant pain after injury, or breathing difficulty related to chest deformity requires prompt medical attention with clear mention of existing congenital scoliosis or vertebral development abnormality.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: First Catalog of Rare Diseases',
        type: 'policy',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'Orphanet: Congenital scoliosis',
        type: 'official',
        url: 'https://www.orpha.net/en/disease/detail/139',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Infantile and Juvenile Scoliosis',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK519498/',
      },
    ],
    symptoms:
      '<p>Common signs include uneven shoulders or waistline, raised area on the back, trunk tilt, and abnormal chest shape. Some children may have respiratory or nervous system risks.</p>',
    diagnosis:
      '<p>Assessment includes standing full-spine X-ray, CT/MRI when needed, and screening for associated abnormalities such as kidney, heart, spinal cord, and lung function.</p>',
    treatment:
      '<p>Management may include observation and follow-up, bracing or rehabilitation support, activity guidance, and surgical evaluation by a pediatric spine team when there is significant progression or functional risk.</p>',
    prognosis:
      '<p>Prognosis depends on the type of vertebral deformity, curve progression, impact on chest and lung function, and whether there are other associated congenital abnormalities.</p>',
    sourceName: 'Orphanet: Congenital scoliosis',
    sourceUrl: 'https://www.orpha.net/en/disease/detail/139',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 332,
      name: 'congenital-scoliosis-journey.png',
      url: '/images/diseases/congenital-scoliosis-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-coronary-artery-ectasia',
    id: 34,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Coronary Artery Ectasia',
    nameEn: 'Coronary Artery Ectasia',
    alias: 'Coronary Artery Ectasia, CAE, Coronary Dilation',
    slug: 'coronary-artery-ectasia',
    oneSentence:
      'Coronary artery ectasia is abnormal localized or diffuse dilation of the coronary arteries, which may be related to atherosclerosis, Kawasaki disease, vasculitis, or connective tissue disease.',
    plainName:
      'A condition where the coronary arteries that supply blood to the heart muscle become widened, and blood flow may slow down',
    prevalence:
      "It is not uncommon to be found incidentally during coronary angiography or coronary CTA, but as a disease in China's rare disease directory, evaluation needs to consider the cause, extent, and clinical risk.",
    quickLook: {
      whatItIs:
        'Coronary artery ectasia refers to coronary vessel dilation that is noticeably wider than nearby normal segments. Blood flow in the dilated segment may slow down, and some patients may develop thrombosis, distal embolism, angina, or risk of acute coronary syndrome.',
      whoToSeeFirst:
        'For adults with chest pain, angina-like discomfort, or coronary imaging showing dilation, evaluation should be sought at a cardiology or coronary artery disease specialty. For children or adolescents with a history of Kawasaki disease, long-term follow-up should be conducted by pediatric cardiology and cardiology specialists.',
      isGenetic:
        'Most cases are not a single genetic disease. In adults, it is often related to atherosclerosis. In children and adolescents, Kawasaki disease should be considered. Some patients need evaluation for vasculitis, connective tissue disease, or congenital coronary abnormalities.',
      hasTreatment:
        'Risk stratification and follow-up management plans exist, but the appropriate plan depends on whether there is stenosis, thrombosis, Kawasaki disease sequelae, or systemic disease, requiring individualized assessment by cardiology specialists.',
      commonDelayReason:
        'Many patients have no specific symptoms, or chest pain overlaps with that of ordinary coronary heart disease. If attention is only paid to stenosis without documenting the dilation extent, cause, and blood flow risk, subsequent follow-up care may be interrupted.',
    },
    patientJourney: {
      whenToSuspect: [
        'Coronary angiography or coronary CTA reports indicate coronary artery ectasia, aneurysmal changes, or slow blood flow.',
        'Chest pain, chest tightness, exercise-induced discomfort, or acute coronary syndrome, but the degree of stenosis cannot fully explain the symptoms.',
        'Children or adolescents with a history of Kawasaki disease, and cardiac ultrasound or CTA shows coronary dilation, aneurysmal changes, or thrombosis risk.',
        'Young patients presenting with coronary dilation, along with fever, rash, joint pain, oral ulcers, vasculitis, or clues to connective tissue disease.',
        'Local dilation or aneurysmal changes occurring after previous stent placement, interventional treatment, or coronary abnormality.',
      ],
      commonWrongTurns: [
        'Managing only as ordinary coronary heart disease with stenosis, without inquiring about dilation extent, slow blood flow, and thrombosis risk.',
        'No imaging follow-up or risk factor management plan established after finding asymptomatic dilation.',
        'Ignoring childhood Kawasaki disease history or clues to systemic vasculitis.',
        'Confusing coronary artery ectasia, coronary artery aneurysm, and congenital coronary abnormalities.',
        'Self-adjusting antiplatelet, anticoagulant, lipid-lowering, or other medications long-term without cardiology assessment of bleeding and ischemic risk.',
      ],
      firstDepartments: [
        'Cardiology',
        'Coronary Intervention/Coronary Heart Disease Specialty',
        'Pediatric Cardiology (for Kawasaki disease-related children)',
        'Rheumatology and Immunology (when vasculitis or connective tissue disease is suspected)',
        'Cardiac Surgery (for complex coronary lesions requiring joint evaluation)',
      ],
      diagnosisChecklist: [
        'Preserve records of coronary CTA, coronary angiography, cardiac ultrasound, electrocardiogram, and myocardial injury markers.',
        'Ask your doctor to explain whether the dilation is focal or diffuse, which vessels are involved, and whether there is combined stenosis or thrombosis.',
        'Review your history of Kawasaki disease, vasculitis, connective tissue disease, infection, interventional treatment, and family cardiovascular history.',
        'Assess blood pressure, blood lipids, blood glucose, smoking, inflammatory markers, and other atherosclerosis risk factors.',
        'Confirm the imaging method for follow-up and intervals, as well as the emergency pathway for chest pain.',
      ],
      testsToAskAbout: [
        'Coronary CTA or coronary angiography.',
        'Electrocardiogram, cardiac enzymes/troponin, and cardiac ultrasound.',
        'Intravascular ultrasound, functional assessment, or cardiac MRI/MRA when necessary.',
        'Blood lipids, blood glucose, blood pressure, and atherosclerosis risk factor assessment.',
        'CRP, ESR, autoantibodies, etc., for vasculitis or connective tissue disease screening (when deemed necessary by your doctor).',
      ],
      questionsForDoctor: [
        'Which coronary arteries are affected by my dilation? Is it diffuse dilation, focal dilation, or coronary artery aneurysm?',
        'Is there combined coronary stenosis, thrombosis, slow blood flow, or evidence of myocardial ischemia?',
        'What is the most likely cause? Do I need to rule out Kawasaki disease sequelae, vasculitis, or connective tissue disease?',
        'Do I need antiplatelet, anticoagulant, lipid-lowering, or other medications? How is my bleeding risk assessed?',
        'How severe does chest pain need to be before I go to the emergency room? How are follow-up imaging and visit schedules arranged?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Coronary artery ectasia may have no obvious symptoms, or may present with chest pain, chest tightness, decreased exercise tolerance, angina-like discomfort, palpitations, or acute coronary syndrome. Symptoms often overlap with ordinary coronary heart disease, and some risks come from slow blood flow in the dilated segment, thrombosis, or distal embolism. For children and adolescents, special inquiry about Kawasaki disease history is needed.</p>',
      diagnosis:
        '<p>Diagnosis usually depends on coronary angiography or coronary CTA. The doctor will assess the dilation extent, vessel diameter, and whether there is combined stenosis, thrombosis, or aneurysmal change. The cause also needs to be determined by combining age, risk factors, Kawasaki disease history, inflammatory clues, connective tissue disease clues, and history of interventional treatment.</p>',
      treatment:
        '<p>Currently, there is no single treatment plan suitable for all patients. Management focuses on controlling atherosclerosis risk factors, assessing ischemic and thrombosis risk, managing combined stenosis or acute coronary syndrome, and, when necessary, joint evaluation by interventional, cardiac surgery, pediatric cardiology, or rheumatology teams. Medications such as antiplatelet or anticoagulant therapy should be weighed by a doctor for benefits versus bleeding risk.</p>',
      longTermCare:
        '<p>Long-term follow-up should focus on changes in chest pain, myocardial ischemia risk, changes in dilation extent on imaging, progression of thrombosis or stenosis, and modifiable factors such as blood pressure, blood lipids, blood glucose, and smoking. Patients with Kawasaki disease-related conditions need long-term monitoring according to pediatric cardiology follow-up protocols.</p>',
      fertilityOrFamily:
        '<p>Coronary artery ectasia is usually not a simple genetic disease. Patients of childbearing age planning pregnancy should discuss cardiac workload, medication safety, ischemic and thrombosis risk with cardiology and obstetrics specialists. If connective tissue disease or familial vascular disease is suspected, further genetic or rheumatology evaluation should be pursued.</p>',
      emergencySigns:
        '<p>If chest pain persists without relief, accompanied by profuse sweating, nausea, or shortness of breath, sudden fainting, severe palpitations, or suspected acute myocardial infarction, or if children after Kawasaki disease develop chest pain, poor spirit, or pale complexion, seek emergency care immediately and report the history of coronary artery ectasia or Kawasaki disease-related coronary changes.</p>',
    },
    sources: [
      {
        name: "National Health Commission of the People's Republic of China: The First Catalog of Rare Diseases",
        type: 'policy',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
      },
      {
        name: 'Coronary Artery Ectasia: Review of the Non-Atherosclerotic Molecular and Pathophysiologic Concepts',
        type: 'review',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9103542/',
      },
    ],
    symptoms:
      '<p>There may be no symptoms, or chest pain, chest tightness, angina-like discomfort, palpitations, or acute coronary syndrome may occur.</p>',
    diagnosis:
      '<p>Assessment depends on coronary CTA or coronary angiography, combined with whether there is combined stenosis, thrombosis, Kawasaki disease history, vasculitis, or atherosclerosis risk.</p>',
    treatment:
      '<p>Management includes risk factor control, ischemic and thrombosis risk assessment, medication when necessary, and joint evaluation by intervention or cardiac surgery. Specific plans need to be developed by cardiology specialists.</p>',
    prognosis:
      '<p>Prognosis depends on whether there is combined coronary heart disease, thrombosis, or acute coronary events, as well as the cause and quality of follow-up management.</p>',
    sourceName: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 333,
      name: 'coronary-artery-ectasia-journey.png',
      url: '/images/diseases/coronary-artery-ectasia-journey.png',
    },
    tagSlugs: [],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-gitelman-syndrome',
    id: 35,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Gitelman Syndrome',
    nameEn: 'Gitelman Syndrome',
    alias: 'Gitelman Syndrome, Familial Hypokalemia Hypomagnesemia, GS',
    slug: 'gitelman-syndrome',
    oneSentence:
      'Gitelman Syndrome is an inherited salt-wasting kidney tubule disorder, often presenting with low potassium, low magnesium, metabolic alkalosis, low urinary calcium, and fatigue or muscle cramps.',
    plainName:
      'An inherited condition where the kidneys cannot retain certain salts and electrolytes, causing low potassium and low magnesium',
    prevalence:
      'MedlinePlus Genetics estimates about 1 in 40,000 people worldwide; symptoms vary widely, and many are diagnosed in adolescence or adulthood due to low potassium.',
    quickLook: {
      whatItIs:
        'The kidney tubules recover electrolytes such as sodium, chloride, potassium, and magnesium. Gitelman Syndrome is most commonly linked to the SLC12A3 gene, causing long-term electrolyte imbalance; symptoms may be mild or can significantly affect daily life.',
      whoToSeeFirst:
        'When there are clues of recurrent low potassium, low magnesium, muscle cramps, fatigue, palpitations, numbness in hands/feet, or low blood pressure, evaluation can be sought at nephrology, pediatric nephrology, or endocrinology/electrolyte clinic.',
      isGenetic:
        'Usually autosomal recessive, mostly associated with biallelic pathogenic variants in SLC12A3; a few phenotypically similar cases overlap with other salt-wasting tubulopathies.',
      hasTreatment:
        'Long-term electrolyte management and follow-up plans exist. Whether potassium supplementation, magnesium supplementation, or other medications are appropriate requires doctor evaluation based on lab results, symptoms, ECG, and kidney function.',
      commonDelayReason:
        'Fatigue, cramps, dizziness, and palpitations are easily attributed to overwork, anxiety, or calcium deficiency; if potassium is supplemented just once without investigating urinary potassium, blood magnesium, and acid-base status, symptoms tend to recur.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent low potassium, especially with low magnesium, metabolic alkalosis, and low urinary calcium.',
        'Persistent fatigue, muscle cramps, numbness in hands/feet, seizure-like episodes, palpitations, or reduced exercise tolerance.',
        'Low blood pressure, salt craving, nocturia or polyuria, with lab results showing electrolyte abnormalities.',
        'Unexplained low potassium with no history of long-term diuretic use, laxatives, or repeated vomiting.',
        'Family history of low potassium, low magnesium, similar tubulopathy, or consanguinity.',
      ],
      commonWrongTurns: [
        'Supplementing potassium just once without checking urinary potassium, urinary chloride, blood magnesium, blood gas, or renin-aldosterone.',
        'Attributing muscle cramps simply to calcium deficiency, overlooking low magnesium and low potassium.',
        'Long-term management as anxiety, fatigue, or arrhythmia without investigating the root cause of electrolyte abnormalities.',
        'Failing to differentiate from Bartter syndrome, diuretic use, vomiting, laxatives, or endocrine-related low potassium.',
      ],
      firstDepartments: [
        'Nephrology',
        'Pediatric Nephrology',
        'Endocrinology/Electrolyte Clinic',
        'Cardiology (for palpitations and arrhythmia risk assessment)',
        'Medical Genetics/Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Keep records of multiple blood potassium, blood magnesium, blood chloride, bicarbonate/blood gas, creatinine, and urine electrolyte results.',
        'Record symptoms at onset, triggers, and changes after fluid or electrolyte supplementation.',
        'Inform your doctor about any use of diuretics, laxatives, licorice products, repeated vomiting, or diarrhea.',
        'Ask whether genetic testing for SLC12A3, CLCNKB, etc., is needed.',
        'Bring ECG, palpitations log, and family history of low potassium.',
      ],
      testsToAskAbout: [
        'Blood potassium, blood magnesium, blood calcium, blood chloride, bicarbonate, or blood gas analysis.',
        'Urinary potassium, urinary chloride, urinary calcium, and urinary magnesium for assessment of renal losses.',
        'Renin, aldosterone, and blood pressure assessment.',
        'ECG and Holter monitor if needed.',
        'Genetic testing for salt-wasting tubulopathies.',
      ],
      questionsForDoctor: [
        'Do my low potassium and low magnesium fit Gitelman Syndrome? What other causes need to be ruled out?',
        'What are the target electrolyte ranges and how often should I have follow-up labs?',
        'Which supplementation or medication options are suitable for me? What if I have gastrointestinal intolerance?',
        'Which symptoms suggest arrhythmia risk or severe low potassium requiring emergency care?',
        'Does my family and future pregnancy planning need genetic counseling?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Gitelman Syndrome presentations vary widely. Common clues include fatigue, muscle cramps, numbness or tingling in hands/feet, dizziness, low blood pressure, salt craving, palpitations, reduced exercise tolerance, nocturia, or polyuria. Lab findings commonly show low potassium, low magnesium, metabolic alkalosis, and low urinary calcium. A minority of patients may develop pronounced seizures, hypokalemic paralysis, or arrhythmia risk.</p>',
      diagnosis:
        '<p>Diagnosis requires integrating blood electrolytes, acid-base status, urine electrolytes, blood pressure, renin-aldosterone levels, and medication history. Typical findings include renal potassium loss, low magnesium, low urinary calcium, and metabolic alkalosis. Genetic testing showing relevant biallelic pathogenic variants supports diagnosis. Your doctor will also rule out Bartter syndrome, diuretics, vomiting, laxatives, and endocrine-related low potassium.</p>',
      treatment:
        '<p>Management focuses on long-term electrolyte supplementation and monitoring, symptom reduction, and reducing arrhythmia risk. Potassium supplementation, magnesium supplementation, potassium-sparing medications, or other options need to be adjusted by your doctor based on lab results, symptoms, blood pressure, kidney function, and tolerance. Do not self-adjust doses or stop medications without medical guidance.</p>',
      longTermCare:
        "<p>Long-term follow-up focuses on electrolyte stability, ECG changes, kidney function, blood pressure, quality of life, pregnancy planning, and medication tolerance. Patients may keep a 'low potassium and low magnesium summary' and proactively inform emergency doctors or new specialists about the condition.</p>",
      fertilityOrFamily:
        '<p>This condition is usually autosomal recessive. After clarifying genetic results, parents, siblings, and families planning pregnancy can use genetic counseling to learn about carrier testing, recurrence risks, and options for prenatal or preimplantation genetic testing.</p>',
      emergencySigns:
        '<p>When there is severe fatigue preventing walking, difficulty breathing, pronounced palpitations or fainting, seizures, rapid drop in potassium, persistent vomiting or diarrhea, or inability to take oral supplementation, seek emergency care immediately and mention suspected or confirmed Gitelman Syndrome.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Gitelman syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Gitelman Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK459304/',
      },
      {
        name: 'Orphanet Journal of Rare Diseases: Gitelman syndrome',
        type: 'review',
        url: 'https://ojrd.biomedcentral.com/articles/10.1186/1750-1172-3-22',
      },
    ],
    symptoms:
      '<p>Common clues include low potassium, low magnesium, fatigue, muscle cramps, numbness in hands/feet, palpitations, low blood pressure, and salt craving.</p>',
    diagnosis:
      '<p>Assessment includes blood and urine electrolytes, acid-base status, renin-aldosterone, medication history, ECG, and relevant genetic testing.</p>',
    treatment:
      '<p>Management centers on electrolyte supplementation, symptom control, arrhythmia risk assessment, and long-term nephrology follow-up; specific plans are individualized.</p>',
    prognosis:
      '<p>Most patients can maintain stable lives with long-term management, but symptoms, arrhythmia risk, pregnancy, and medication tolerance still require ongoing follow-up.</p>',
    sourceName: 'MedlinePlus Genetics: Gitelman syndrome',
    sourceUrl: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 334,
      name: 'gitelman-syndrome-journey.png',
      url: '/images/diseases/gitelman-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-glutaric-acidemia-type-i',
    id: 36,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Glutaric Acidemia Type I',
    nameEn: 'Glutaric Acidemia Type I',
    alias:
      'GA-1, Glutaric aciduria type I, GCDH deficiency, Glutaric aciduria type 1',
    slug: 'glutaric-acidemia-type-i',
    oneSentence:
      'Glutaric acidemia type I is an organic acid metabolism disorder that can cause acute brain injury and movement problems in infants and young children after infections or fasting if not identified in time.',
    plainName:
      'A hereditary metabolic condition in which the body cannot properly break down certain amino acids, which may damage the basal ganglia.',
    prevalence:
      'Generally rare, with variation across regions and populations; many areas can find clues through newborn screening.',
    quickLook: {
      whatItIs:
        'Insufficient GCDH enzyme function affects the metabolism of lysine, hydroxylysine, and tryptophan. Accumulated metabolites can increase the risk of brain injury, especially in the basal ganglia.',
      whoToSeeFirst:
        'When newborn screening is positive, infants have enlarged head circumference, developmental regression, abnormal muscle tone, or sudden movement problems after infection or fasting, seek care promptly at a metabolic genetics clinic, pediatric neurology, or neonatal/pediatric emergency department.',
      isGenetic:
        'Yes, usually autosomal recessive, related to biallelic pathogenic variants in GCDH.',
      hasTreatment:
        'Yes, there are management plans from metabolic specialists. Key points include early identification, nutrition and metabolic management, emergency protocols during infection or fasting, and long-term neurodevelopmental follow-up.',
      commonDelayReason:
        'Early signs may only include enlarged head or mild developmental clues; acute episodes are often mistaken for common infections, seizures, or encephalitis. Without combining newborn screening results and organic acid testing, the window may be missed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Newborn screening suggests abnormal C5DC or related organic acid metabolism.',
        'Infant has an enlarged or rapidly growing head circumference, especially with developmental delay or abnormal muscle tone.',
        'After infection, fever, vomiting, fasting, or surgery, symptoms like drowsiness, poor feeding, developmental regression, or abnormal movements appear.',
        'Brain MRI shows basal ganglia injury, widened frontotemporal CSF spaces, or imaging findings consistent with GA-1.',
        'Family history of GA-1, infant acute encephalopathy, movement disorders, or consanguinity.',
      ],
      commonWrongTurns: [
        'Not following up with metabolic specialist after a positive screening result.',
        'Attributing enlarged head solely to familial factors without considering metabolic disease or MRI findings.',
        'During acute episodes, treating only for infection or encephalitis without starting metabolic crisis evaluation.',
        'After diagnosis, lacking a written emergency plan for illness or fasting, leading to repeated risks during infections.',
      ],
      firstDepartments: [
        'Metabolic Genetics / Medical Genetics',
        'Neonatology / Pediatric Emergency',
        'Pediatric Neurology',
        'Nutrition (under metabolic specialist guidance)',
        'Rehabilitation Medicine (for movement disorders or developmental issues)',
      ],
      diagnosisChecklist: [
        'Keep records of newborn screening, follow-up notifications, blood acylcarnitine, urine organic acids, and genetic reports.',
        'Record head circumference, developmental milestones, infection/fasting events, and whether movement regression occurred.',
        'Ask whether GCDH gene testing or enzyme activity testing is needed for confirmation.',
        'Prepare a written emergency plan for fever, vomiting, surgery, or inability to eat.',
        'Arrange long-term follow-up for neurodevelopment, movement, nutrition, and kidney function.',
      ],
      testsToAskAbout: [
        'Blood acylcarnitine profile, especially C5DC.',
        'Urine organic acids or quantitative measurement of glutaric acid and 3-hydroxyglutaric acid.',
        'GCDH gene testing; enzyme activity testing if needed.',
        'Brain MRI and neurodevelopmental assessment.',
        'Nutritional status, amino acids, carnitine, and kidney function monitoring.',
      ],
      questionsForDoctor: [
        'Are the results sufficient to confirm GA-1? What confirmation tests are still needed?',
        'Who will be responsible for daily diet and nutritional follow-up? What situations require immediate medical attention rather than home observation?',
        'During fever, vomiting, post-vaccine discomfort, or surgical fasting, how should the emergency protocol be carried out?',
        'Is there already brain or movement system involvement? Does rehabilitation or neurology follow-up need to be arranged?',
        'What genetic counseling is needed for siblings and future family planning?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>GA-1 can be detected during newborn screening, or may present with an enlarged head, feeding problems, abnormal muscle tone, developmental delay, or movement disorders. In infants not managed in time, acute encephalopathy-like episodes can occur after infection, fasting, or other stressors, followed by dystonia, choreiform movements, developmental regression, and other complex movement problems.</p>',
      diagnosis:
        '<p>Diagnosis usually combines newborn screening, blood acylcarnitine, urine organic acids or quantitative metabolites, brain MRI, and GCDH gene testing. If molecular results are unclear, specialists may consider enzyme activity testing. Doctors will also differentiate from other organic acidemias, encephalitis, mitochondrial disease, and other movement disorders.</p>',
      treatment:
        "<p>Management requires a metabolic genetics team, including individualized nutrition plans, carnitine and related metabolic management, emergency protocols for infection or fasting, and developmental/movement follow-up. Specific diet, supplements, and emergency management should follow the specialist's written plan.</p>",
      longTermCare:
        '<p>Long-term care focuses on avoiding catabolic states, monitoring growth and nutrition, developmental and movement function, and kidney function, as well as ensuring that family members, schools, and emergency doctors all have clear emergency instructions. For those with existing movement disorders, long-term cooperation between rehabilitation, neurology, and nutrition teams is needed.</p>',
      fertilityOrFamily:
        '<p>GA-1 is autosomal recessive. Once GCDH variants are identified, parents, siblings, and relatives with family planning needs can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>Fever or infection, repeated vomiting, inability to eat, drowsiness, sudden change in muscle tone, seizures, developmental regression, or abnormal movements — seek medical care promptly and inform providers of GA-1 or suspected organic acid metabolism disorder risk. Avoid prolonged fasting.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Glutaric Acidemia Type 1',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
      },
      {
        name: 'MedlinePlus Genetics: Glutaric acidemia type I',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/glutaric-acidemia-type-i/',
      },
    ],
    symptoms:
      '<p>May present with abnormal screening results, macrocephaly, developmental delay, acute encephalopathy-like episodes after infection or fasting, movement regression, and dystonia.</p>',
    diagnosis:
      '<p>Evaluation includes blood acylcarnitine, urine organic acids or quantitative metabolites, GCDH gene testing, enzyme activity testing if needed, and brain MRI.</p>',
    treatment:
      '<p>Management relies on metabolic specialists, including nutrition and metabolic management, emergency protocols, developmental/movement follow-up, and family education.</p>',
    prognosis:
      '<p>Early screening and standard management can significantly reduce the risk of acute brain injury; those with existing neurological involvement need long-term rehabilitation and follow-up.</p>',
    sourceName: 'GeneReviews: Glutaric Acidemia Type 1',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 335,
      name: 'glutaric-acidemia-type-i-journey.png',
      url: '/images/diseases/glutaric-acidemia-type-i-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-glycogen-storage-disease-type-i-ii',
    id: 37,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Glycogen Storage Disease (Type I, II)',
    nameEn: 'Glycogen Storage Disease (Type I, II)',
    alias: 'Glycogen Storage Disease Type I, GSD I, Pompe Disease, GSD II',
    slug: 'glycogen-storage-disease-type-i-ii',
    oneSentence:
      'Type I and Type II glycogen storage disease are both inherited metabolic conditions affecting how the body processes glycogen, but Type I mainly impacts blood sugar and liver/kidney metabolism, while Type II (Pompe disease) mainly affects heart muscle, skeletal muscles, and breathing muscles.',
    plainName:
      'A group of inherited metabolic disorders where the body has trouble processing glycogen; Type I and Type II require different medical approaches',
    prevalence:
      'Both are rare diseases. Estimated rates vary widely across countries and screening programs. Some regions have added these to newborn screening or high-risk screening.',
    quickLook: {
      whatItIs:
        'This entry combines Type I and Type II, but they are two different conditions with different mechanisms. GSD Type I affects the metabolic pathways that maintain blood sugar; GSD Type II (Pompe disease) is caused by deficiency of acid alpha-glucosidase in lysosomes, leading to glycogen buildup in muscles and other tissues.',
      whoToSeeFirst:
        'For recurrent low blood sugar, enlarged liver, abnormal lactate/uric acid/triglycerides, see genetics/metabolism, pediatric endocrinology, or pediatric gastroenterology/hepatology. For infants with heart muscle thickening, muscle weakness, poor feeding, or adults with proximal muscle weakness and breathing difficulties, see genetics/metabolism, neuromuscular specialist, or pediatric cardiology/respiratory.',
      isGenetic:
        'Yes, both Type I and Type II are usually autosomal recessive, but the genes involved and testing pathways differ.',
      hasTreatment:
        'Specialized management plans exist. GSD Type I focuses on preventing low blood sugar and metabolic imbalance; Pompe disease can be evaluated for enzyme replacement therapy, respiratory and muscle strength management. Specific treatment plans should be developed by specialists.',
      commonDelayReason:
        'GSD Type I may be mistaken for ordinary hypoglycemia, liver disease, or nutritional problems; Pompe disease may be mistaken for myopathy, cardiomyopathy, developmental delay, or respiratory issues. Without enzyme activity and genetic testing, diagnosis can be delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Infants and young children with hypoglycemia after fasting, seizures, enlarged liver, abdominal bloating, poor growth, or abnormal lactate/uric acid/lipids suggest GSD Type I.',
        'GSD Type Ib may also show clues like recurrent infections, oral or gut ulcers, and low neutrophil counts.',
        'Infants with low muscle tone, poor feeding, heart muscle thickening, breathing difficulties, or delayed motor development suggest infantile-onset Pompe disease.',
        'Children or adults with proximal muscle weakness, difficulty climbing stairs or standing up, fatigue, nighttime breathing problems, or unexplained decline in breathing function suggest late-onset Pompe disease.',
        'Newborn screening, enzyme activity, or family genetic results suggesting risk for glycogen storage disease.',
      ],
      commonWrongTurns: [
        'Attributing GSD Type I hypoglycemia to simply having fasted too long, without noticing the enlarged liver and abnormal lactate/uric acid/lipids.',
        'Managing fatty liver or enlarged liver without investigating for glycogen storage disease.',
        'Distributing Pompe disease infant symptoms across cardiology, respiratory, and rehabilitation without coordinating toward a metabolic myopathy diagnosis.',
        'Adults with late-onset Pompe disease being treated long-term for ordinary back/leg weakness, myositis, or lack of exercise without assessing breathing muscles.',
      ],
      firstDepartments: [
        'Genetics/Metabolism or Medical Genetics',
        'Pediatric Endocrinology or Pediatric Gastroenterology/Hepatology (for GSD Type I)',
        'Neurology/Neuromuscular (for Pompe disease)',
        'Pediatric Cardiology or Cardiovascular Medicine (when heart is involved)',
        'Respiratory and Rehabilitation Medicine',
      ],
      diagnosisChecklist: [
        'First ask the doctor to determine whether it is more like GSD Type I, Pompe disease, or another glycogen storage disease.',
        'Keep records of blood sugar, lactate, ketones, uric acid, lipids, liver function, and imaging from hypoglycemia episodes.',
        'If GSD Type I is suspected, ask about genetic testing for G6PC, SLC37A4, and related genes.',
        'If Pompe disease is suspected, ask about GAA enzyme activity, GAA gene testing, CK, cardiac and respiratory muscle assessment.',
        'Prepare for specialty emergency plans for fasting, infections, surgery, anesthesia, or breathing difficulties.',
      ],
      testsToAskAbout: [
        'Metabolic tests related to hypoglycemia, lactate, uric acid, triglycerides, liver and kidney function.',
        'Abdominal ultrasound or imaging of liver and kidneys; monitoring for liver adenomas when needed.',
        'GSD Type I genetic testing.',
        'Pompe disease assessments including GAA enzyme activity, GAA gene testing, CK, urinary Hex4.',
        'ECG, echocardiogram, pulmonary function, and sleep breathing assessment.',
      ],
      questionsForDoctor: [
        'Does the presentation currently fit Type I, Type II, or another glycogen storage disease? What is the basis?',
        'What does the family need to do to avoid fasting or low blood sugar at home? How should the plan work when the child is sick?',
        'If it is Pompe disease, how much are the heart, breathing muscles, and motor function currently affected?',
        'Is a specific treatment evaluation needed? What are the treatment goals and monitoring targets?',
        'How should family screening and future pregnancy risks be arranged?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Common signs of GSD Type I include poor fasting tolerance in infants and young children, hypoglycemia, enlarged liver, abdominal bloating, poor growth, lactic acidosis, and abnormal uric acid and blood lipids. GSD Type Ib may also have low neutrophil counts and recurrent infections. GSD Type II (Pompe disease) infantile type may show low muscle tone, feeding difficulty, heart muscle thickening, breathing difficulty, and delayed motor development. Late-onset type often presents as proximal muscle weakness, fatigue, and breathing muscle involvement.</p>',
      diagnosis:
        '<p>Diagnosis first requires clarifying which type it is. GSD Type I assessment focuses on metabolic profile during hypoglycemia, liver and kidney involvement, and genetic testing for G6PC/SLC37A4. Pompe disease assessment focuses on GAA enzyme activity, GAA gene testing, muscle enzymes, and cardiac and respiratory evaluation. Doctors also differentiate from other glycogen storage diseases, fatty acid oxidation disorders, mitochondrial diseases, muscular dystrophies, and endocrine-related hypoglycemia.</p>',
      treatment:
        '<p>GSD Type I management centers on preventing hypoglycemia and metabolic imbalance, nutritional plans, and monitoring for liver, kidney, and infection risks. Pompe disease management includes evaluation for enzyme replacement therapy, cardiac and lung function, exercise and rehabilitation support, respiratory management, and complication monitoring. Both conditions require a specialty team to develop written daily and emergency plans.</p>',
      longTermCare:
        '<p>Long-term care requires maintaining records of diagnosis, genetics, enzyme activity, nutrition plans, cardiac and respiratory assessments, and imaging follow-up. GSD Type I focuses on hypoglycemia prevention, liver and kidney complications, and metabolic markers. Pompe disease focuses on heart, breathing muscles, motor function, sleep breathing, and treatment response.</p>',
      fertilityOrFamily:
        '<p>GSD Type I and Pompe disease are usually autosomal recessive. After identifying pathogenic variants, parents, siblings, and relatives planning pregnancy can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>GSD Type I patients should go to the emergency department if they cannot eat, have repeated vomiting, hypoglycemia, sleepiness, seizures, or infection. Pompe disease patients should seek medical care quickly for breathing difficulty, significant feeding decline, signs of heart failure, nighttime underventilation, or worsening breathing after infection. Always inform medical staff about the specific type of glycogen storage disease.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Glycogen Storage Disease Type I',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
      },
      {
        name: 'GeneReviews: Pompe Disease',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1261/',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Glycogen Storage Disease Type II',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK470558/',
      },
    ],
    symptoms:
      '<p>Type I mainly presents with hypoglycemia, enlarged liver, abnormal lactate/uric acid/lipids; Type II Pompe disease mainly presents with muscle weakness, heart muscle or breathing muscle involvement.</p>',
    diagnosis:
      '<p>Assessment first requires distinguishing the type: Type I uses metabolic markers and GSD Type I genetic testing; Type II uses GAA enzyme activity, GAA gene testing, cardiac and muscle assessment.</p>',
    treatment:
      '<p>Management includes metabolic nutrition plans, emergency plans, cardiac and muscle follow-up, and Pompe disease-specific treatment evaluation.</p>',
    prognosis:
      '<p>Prognosis depends on the specific type, age at onset, timing of screening and treatment, cardiac or liver/kidney complications, and quality of long-term follow-up.</p>',
    sourceName: 'GeneReviews: Glycogen Storage Disease Type I',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 336,
      name: 'glycogen-storage-disease-type-i-ii-journey.png',
      url: '/images/diseases/glycogen-storage-disease-type-i-ii-journey.png',
    },
    tagSlugs: ['genetic-counseling', 'neuromuscular'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hemophilia',
    id: 38,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hemophilia',
    nameEn: 'Hemophilia',
    alias:
      'Hemophilia A, Hemophilia B, Factor VIII Deficiency, Factor IX Deficiency',
    slug: 'hemophilia',
    oneSentence:
      'Hemophilia is a group of inherited bleeding disorders caused by missing or low clotting factors. Type A and Type B are the most common forms, and people may have prolonged bleeding after joint, muscle, surgery, or injury.',
    plainName:
      'An inherited condition where blood does not clot properly, leading to repeated bleeding',
    prevalence:
      'Hemophilia A is more common than Hemophilia B. Severity depends on clotting factor activity levels. Female carriers may also have bleeding symptoms.',
    searchIntents: [
      'hemophilia which doctor',
      'hemophilia A vs B difference',
      'repeated joint bleeding hemophilia',
      'hemophilia inhibitor testing',
      'female hemophilia carrier bleeding',
    ],
    quickLook: {
      whatItIs:
        'Hemophilia A is linked to missing or low Factor VIII, while Hemophilia B is linked to missing or low Factor IX. When clotting factors are too low, bleeding lasts longer. Severe cases may have spontaneous joint or muscle bleeding.',
      whoToSeeFirst:
        'If you or your child has repeated joint swelling and pain, muscle bruises, bleeding that does not stop after dental work or surgery, or if a young child has unexplained bruising with a positive family history, see a hematology or pediatric hematology department, or a hemophilia treatment center.',
      isGenetic:
        'Usually inherited in an X-linked pattern, linked to the F8 or F9 gene. Males are more commonly affected. Female carriers may have symptoms due to lower factor levels or other reasons.',
      hasTreatment:
        'Options include acute bleeding treatment, preventive therapy, non-factor therapies, rehabilitation, and gene therapy assessment for some adults. Specific treatment is planned by hematology based on type, severity, inhibitors, and availability.',
      commonDelayReason:
        'Mild cases may only be discovered after dental work, surgery, or injury when bleeding does not stop. Heavy menstrual bleeding, postpartum bleeding, or bleeding after surgery in female carriers may also be underestimated.',
    },
    patientJourney: {
      whenToSuspect: [
        'Boys with repeated large bruises, joint swelling and pain, muscle bruises, or bleeding that lasts a long time after minor injuries.',
        'Bleeding that recurs or is delayed after dental work, circumcision, surgery, childbirth, or injury.',
        'Abnormally large swelling after head injury in infants or toddlers, or unexplained brain bleeding.',
        'Women with a family history of hemophilia who also have heavy periods, bleeding after surgery, or postpartum bleeding.',
        'Lab tests showing prolonged aPTT with relatively normal platelet count and PT.',
      ],
      commonWrongTurns: [
        'Explaining bruises only by injury or active play in children, without asking about family history and clotting tests.',
        'Joint bleeding misdiagnosed as sprain, arthritis, or infection, delaying bleeding control and joint protection.',
        'Patients with mild hemophilia not disclosing their bleeding history before surgery, leading to discovery only after complications.',
        "Assuming female carriers 'cannot be affected' without testing clotting factor levels.",
        'Using medications that may increase bleeding risk on your own, or undergoing invasive procedures without a specialist plan.',
      ],
      firstDepartments: [
        'Hematology / Pediatric Hematology',
        'Hemophilia Treatment Center or Coagulation Specialty Clinic',
        'Emergency Department (for head injury, deep bleeding, or severe bleeding)',
        'Rehabilitation Medicine / Orthopedics (for joint protection and hemophilic arthropathy)',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Keep records of bleeding events, family history, bleeding after surgery or dental work, and past medications.',
        'Test PT, aPTT, platelet count, fibrinogen, and Factor VIII/IX activity.',
        'Ask if testing for von Willebrand disease and other conditions is needed.',
        'After diagnosis, assess for inhibitors, joint status, and vaccination and transfusion/infection history.',
        'If planning a family, arrange F8/F9 genetic testing and genetic counseling.',
      ],
      testsToAskAbout: [
        'Factor VIII and IX activity levels.',
        'aPTT, PT, platelet count, and von Willebrand factor testing.',
        'F8 or F9 genetic testing.',
        'Inhibitor testing.',
        'Joint ultrasound or MRI, hepatitis/infection screening, and treatment safety monitoring.',
      ],
      questionsForDoctor: [
        'Do I have Type A or Type B? Is it mild, moderate, or severe?',
        'Do I need preventive treatment or on-demand treatment? How should I recognize joint or muscle bleeding at home?',
        'Do I have inhibitors? How will this affect my treatment options?',
        'What written plan do I need for dental work, surgery, exercise, travel, and emergencies?',
        'What testing and counseling do female family members and future family planning need?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Hemophilia may show as prolonged bleeding after injury, dental work, or surgery; repeated nosebleeds; mouth bleeding; deep muscle bruises; joint bleeding; blood in urine; or digestive tract bleeding. Severe cases may have spontaneous joint or muscle bleeding. Repeated joint bleeding can cause pain, limited movement, and hemophilic arthropathy. Mild cases may not be diagnosed until adulthood after surgery or dental work.</p>',
      diagnosis:
        '<p>Diagnosis relies on testing Factor VIII or IX activity, along with aPTT, PT, platelet count, von Willebrand factor testing, and family history. F8 or F9 genetic testing can confirm the type, screen family members, and help with family planning. After diagnosis, testing for inhibitors is also needed, as they affect bleeding treatment plans.</p>',
      treatment:
        '<p>Management includes acute bleeding treatment, preventive therapy, non-factor therapies, surgical planning, rehabilitation, and joint protection. Some adults may be eligible for gene therapy assessment, but it is not suitable for everyone. Specific treatment choices are planned by hematology based on type, factor levels, bleeding frequency, inhibitors, age, and availability.</p>',
      longTermCare:
        '<p>Long-term care focuses on reducing joint and muscle bleeding, protecting joint function, managing pain and exercise, monitoring for inhibitors, assessing treatment safety, and carrying an emergency information card. Before surgery, dental work, invasive tests, or starting new medications, contact hematology in advance to plan bleeding control.</p>',
      fertilityOrFamily:
        '<p>Hemophilia A and B are usually inherited in an X-linked pattern. Female carriers may have low factor levels and bleeding risk. Once the family F8/F9 variant is identified, relatives can learn through genetic counseling about carrier testing, prenatal diagnosis, preimplantation genetic testing, and delivery bleeding plans.</p>',
      emergencySigns:
        '<p>Head injury, headache with vomiting, or change in consciousness; bleeding in the neck or throat with breathing difficulty; abdominal or back pain with suspected internal bleeding; rapidly worsening joint or muscle swelling and pain; uncontrolled bleeding after injury or surgery—seek emergency care immediately and state the hemophilia type and treatment plan.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Hemophilia A',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
      },
      {
        name: 'GeneReviews: Hemophilia B',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1495/',
      },
      {
        name: 'MedlinePlus Genetics: Hemophilia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/hemophilia/',
      },
    ],
    symptoms:
      '<p>May include joint or muscle bleeding; prolonged bleeding after injury, dental work, or surgery; repeated bruises; nosebleeds; blood in urine; or deep bleeding.</p>',
    diagnosis:
      '<p>Assessment includes Factor VIII/IX activity testing, aPTT/PT, von Willebrand factor testing, inhibitor testing, and F8/F9 genetic testing.</p>',
    treatment:
      '<p>Management includes acute bleeding treatment, preventive therapy, non-factor therapies, surgical planning, rehabilitation, and joint protection.</p>',
    prognosis:
      '<p>Consistent preventive care and comprehensive management can significantly reduce joint damage and severe bleeding risk. Outlook depends on severity, inhibitors, and treatment availability.</p>',
    sourceName: 'GeneReviews: Hemophilia A',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 337,
      name: 'hemophilia-journey.png',
      url: '/images/diseases/hemophilia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hepatolenticular-degeneration-wilson-disease',
    id: 39,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hepatolenticular Degeneration (Wilson Disease)',
    nameEn: 'Hepatolenticular Degeneration (Wilson Disease)',
    alias:
      "Wilson Disease, Wilson's Disease, Copper Metabolism Disorder, ATP7B-Related Copper Accumulation Disease",
    slug: 'hepatolenticular-degeneration-wilson-disease',
    oneSentence:
      'Hepatolenticular degeneration is an ATP7B-related copper metabolism disorder in which copper accumulates in the liver, brain, and other tissues, potentially causing liver disease, movement disorders, psychiatric or behavioral changes, or hemolysis.',
    plainName:
      'A genetic condition where the body cannot properly remove copper, gradually damaging the liver and nervous system',
    prevalence:
      'Generally rare, often identified in children, teenagers, or young adults, though the age range is broad; age alone should not completely rule out the diagnosis.',
    quickLook: {
      whatItIs:
        'Normally, excess copper is cleared through bile. When ATP7B function is impaired, copper clearance is blocked, first affecting the liver, and potentially also the brain, eyes, blood, and mental health.',
      whoToSeeFirst:
        'When facing unexplained liver function abnormalities, cirrhosis, acute liver failure with hemolysis, or the onset of tremor, slowed movement, difficulty speaking or swallowing, or personality or behavioral changes, consider evaluation by hepatology/gastroenterology, neurology, or genetics and metabolism.',
      isGenetic:
        'Yes, usually autosomal recessive, associated with biallelic pathogenic variants in ATP7B.',
      hasTreatment:
        "Yes, long-term copper reduction and maintenance treatment plans exist. The key is early diagnosis, regular follow-up, and avoiding stopping medication on one's own. Acute or end-stage liver failure may require liver transplant evaluation.",
      commonDelayReason:
        'Early stages can resemble fatty liver disease, viral hepatitis, autoimmune hepatitis, psychiatric or psychological problems, or Parkinson-like movement disorders. Without copper metabolism testing and eye examination clues, it is easy to take a longer diagnostic path.',
    },
    patientJourney: {
      whenToSuspect: [
        'Children or young adults develop unexplained elevated transaminases, fatty liver-like changes, enlarged liver or spleen, or cirrhosis.',
        'Acute liver injury or failure with Coombs-negative hemolysis, jaundice, or coagulation abnormalities.',
        'Tremor, clumsiness, dystonia, slowed movement, slurred speech, difficulty swallowing, or gait abnormalities.',
        'Mood, learning, behavioral, or psychiatric symptoms occurring alongside liver function abnormalities.',
        'Family history of Wilson disease, early-onset liver disease, unexplained liver failure, or similar symptoms in siblings.',
      ],
      commonWrongTurns: [
        'Managing only as fatty liver, viral hepatitis, or autoimmune hepatitis without copper metabolism evaluation.',
        'Addressing movement or psychiatric symptoms in neurology/psychiatry alone without reviewing liver function and family history.',
        'Eye examination not including slit-lamp exam or failing to look for Kayser-Fleischer ring clues.',
        "Stopping medication on one's own once symptoms improve, leading to copper re-accumulation and recurrence risk.",
      ],
      firstDepartments: [
        'Hepatology / Gastroenterology',
        'Neurology (movement disorders subspecialty)',
        'Genetics and Metabolism / Medical Genetics',
        'Ophthalmology (slit-lamp examination)',
        'Liver Transplant Center (for acute or end-stage liver failure evaluation)',
      ],
      diagnosisChecklist: [
        'Preserve records of liver function, coagulation, blood count, hemolysis indicators, abdominal imaging, and prior liver disease evaluations.',
        'Ask about serum ceruloplasmin, urine copper, eye slit-lamp exam, and liver copper-related assessments.',
        'Prepare videos of neurological symptoms, learning/behavior change records, and brain MRI materials.',
        'Ask about ATP7B genetic testing and sibling screening.',
        'After diagnosis, establish a long-term plan for medication, follow-up, and clearly communicate: do not stop medication on your own.',
      ],
      testsToAskAbout: [
        'Serum ceruloplasmin, serum copper, and 24-hour urine copper.',
        'Liver function tests, coagulation profile, blood count, and hemolysis-related studies.',
        'Ophthalmology slit-lamp exam for Kayser-Fleischer rings.',
        'ATP7B gene testing; family verification if needed.',
        'Abdominal imaging, brain MRI, and liver copper assessment as deemed necessary by your doctor.',
      ],
      questionsForDoctor: [
        'Is my presentation more liver-type, neurological-type, or mixed? What is the current extent of organ involvement?',
        'Is the diagnostic evidence sufficient? What additional copper metabolism or genetic tests are needed?',
        'What are the treatment goals, monitoring indicators, and follow-up frequency?',
        'Which foods, medications, or supplements do I need to check with my doctor before using?',
        'How should siblings and future pregnancy planning be screened and counseled?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Wilson disease has varied presentations, including elevated transaminases, fatty liver-like changes, jaundice, enlarged liver or spleen, cirrhosis, acute liver failure, hemolysis, and also tremor, dystonia, slowed movement, difficulty speaking or swallowing, gait abnormalities, learning or behavioral changes, depression, or anxiety. The classic triad of liver disease, movement disorder, and Kayser-Fleischer rings does not always appear all at once.</p>',
      diagnosis:
        '<p>Diagnosis usually combines clinical presentation, serum ceruloplasmin, urine copper, liver and neurological assessment, ophthalmology slit-lamp exam, and ATP7B genetic testing. Doctors will differentiate from viral hepatitis, autoimmune liver disease, fatty liver, other metabolic liver diseases, Parkinson-like disorders, and psychiatric conditions.</p>',
      treatment:
        '<p>Treatment aims for long-term reduction and maintenance of body copper burden, including copper-chelating or copper-blocking medications, diet, and follow-up management. Specific medication selection, switching, and monitoring should be directed by a hepatology/neurology/genetics team. Acute liver failure or decompensated liver disease requires timely evaluation for liver transplantation.</p>',
      longTermCare:
        '<p>Long-term care focuses on liver function, copper metabolism markers, neuropsychiatric status, medication side effects, adherence, and family screening. Patients should preserve their diagnosis documentation and treatment plan, and avoid stopping medication or reducing follow-up based solely on symptom improvement.</p>',
      fertilityOrFamily:
        '<p>Wilson disease is autosomal recessive. Once ATP7B variants are identified, siblings should be evaluated. Families with pregnancy plans can learn about carrier testing, prenatal diagnosis, and preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>Seek immediate medical attention if there is rapidly worsening jaundice, altered consciousness, bleeding tendency, ascites, or severe fatigue; acute worsening of psychiatric or movement symptoms; or signs of acute liver failure. Be sure to mention Wilson disease or suspected copper metabolism disorder risk.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Wilson Disease',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1512/',
      },
      {
        name: 'MedlinePlus Genetics: Wilson disease',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/wilson-disease/',
      },
    ],
    symptoms:
      '<p>May present as liver function abnormalities, cirrhosis, acute liver failure, hemolysis, tremor, dystonia, difficulty speaking or swallowing, or psychiatric or behavioral changes.</p>',
    diagnosis:
      '<p>Evaluation includes ceruloplasmin, urine copper, liver function and hemolysis tests, ophthalmology slit-lamp exam, ATP7B gene testing, and liver/brain assessment.</p>',
    treatment:
      '<p>Management relies on long-term copper-chelating or copper-blocking therapy, diet, and follow-up; acute or end-stage liver failure requires liver transplant evaluation.</p>',
    prognosis:
      "<p>Early diagnosis and continuous treatment can significantly improve outcomes; stopping medication on one's own, acute liver failure, or severe neurological involvement increases risk.</p>",
    sourceName: 'GeneReviews: Wilson Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1512/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 338,
      name: 'hepatolenticular-degeneration-wilson-disease-journey.png',
      url: '/images/diseases/hepatolenticular-degeneration-wilson-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hereditary-angioedema-hae',
    id: 40,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hereditary Angioedema (HAE)',
    nameEn: 'Hereditary Angioedema (HAE)',
    alias:
      'HAE, hereditary angioneurotic edema, C1 inhibitor deficiency-related angioedema',
    slug: 'hereditary-angioedema-hae',
    oneSentence:
      'Hereditary angioedema is a condition involving recurrent deep swelling that can affect the skin, gastrointestinal tract, and upper airway; airway involvement may be life-threatening.',
    plainName: 'Recurrent sudden swelling, often without itching or hives',
    prevalence:
      'Overall rare, symptoms often begin in childhood or adolescence but may also be identified in adulthood.',
    quickLook: {
      whatItIs:
        'HAE swelling is usually not from standard allergies. Common types involve insufficient C1 inhibitor quantity or function; abnormal bradykinin pathways increase vascular leakage, leading to swelling in the skin, abdomen, or airways.',
      whoToSeeFirst:
        'For recurrent facial, hand, foot, or genital swelling, recurrent severe abdominal pain with vomiting, or throat/tongue swelling, seek evaluation at an allergy/immunology department, emergency department, or dermatology. Airway symptoms require immediate emergency care.',
      isGenetic:
        'Most cases follow autosomal dominant inheritance, but new mutations can occur. Negative family history does not rule out the condition.',
      hasTreatment:
        'Strategies exist for acute attacks, short-term prevention, and long-term prevention. Standard allergy medications typically do not reliably control HAE attacks and require a specialist to develop a plan.',
      commonDelayReason:
        'Often mistaken for urticaria, food allergy, gastroenteritis, appendicitis, or anxiety. When there are no hives or itching and antihistamines/corticosteroids are ineffective, consider HAE.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent deep swelling without obvious hives or itching, often resolving on its own after some time.',
        'Recurrent severe abdominal pain, nausea, vomiting, or bloating not explained by tests.',
        'Swelling attacks triggered by dental work, surgery, infection, stress, menstruation, or injury.',
        'Laryngeal, tongue, or throat swelling with voice changes, difficulty swallowing, or breathing problems.',
        'Family history of recurrent swelling, abdominal pain, or unexplained suffocation deaths.',
      ],
      commonWrongTurns: [
        'Long-term management as allergy or urticaria without checking complement C4 and C1 inhibitor levels.',
        'Repeated abdominal attacks misidentified as acute abdomen, sometimes leading to unnecessary surgery.',
        'Airway attacks without documenting HAE risk, delaying specialist emergency intervention.',
        'Only seeking care during attacks without establishing long-term prevention and home emergency plans.',
      ],
      firstDepartments: [
        'Allergy and Clinical Immunology',
        'Emergency Department (for airway or severe abdominal attacks)',
        'Dermatology',
        'Gastroenterology (for recurrent abdominal attacks)',
        'Genetic Counseling Clinic',
      ],
      diagnosisChecklist: [
        'Record the location, duration, triggers, presence of hives or itching, and response to allergy medications for each swelling episode.',
        'Keep imaging studies, emergency records, and any surgical notes from abdominal attacks.',
        'Request complement C4, C1 inhibitor level and function testing.',
        'Document family history of recurrent swelling, abdominal pain, suffocation, or similar diagnoses.',
        'After diagnosis, prepare acute attack, pre-procedure, and travel emergency plans.',
      ],
      testsToAskAbout: [
        'Complement C4',
        'C1 inhibitor level and function',
        'C1q and other tests if needed to differentiate acquired angioedema',
        'HAE genetic testing (if the doctor recommends it)',
        'Abdominal imaging and airway risk assessment during attacks',
      ],
      questionsForDoctor: [
        'Is my presentation more consistent with HAE or common allergic angioedema?',
        'What type do I have? Do I need repeat C4/C1 inhibitor testing?',
        'How should I manage airway, abdominal, and skin attacks?',
        'Do I need short-term prevention before dental work, surgery, endoscopy, or travel?',
        'Should my family members be screened? What medications or triggers should I avoid or tell other doctors about?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Typical HAE presentation involves recurrent deep swelling, often without itching or typical hives, affecting the hands, feet, face, genitals, gastrointestinal tract, and upper airway. Gastrointestinal attacks may cause severe abdominal pain, vomiting, bloating, or diarrhea. Laryngeal or pharyngeal swelling may lead to respiratory obstruction risk.</p>',
      diagnosis:
        '<p>Diagnosis typically starts with complement C4, C1 inhibitor level and function testing, combined with attack characteristics, family history, and medication responses. Doctors also differentiate common allergic angioedema, urticaria, acquired C1 inhibitor deficiency, drug-related angioedema, and acute abdomen.</p>',
      treatment:
        '<p>Management includes acute attack treatment, airway risk management, short-term prevention for triggering situations such as surgery or dental work, and long-term prevention for frequent or high-risk attacks. Specific medications and access vary by region and require a specialist familiar with HAE.</p>',
      longTermCare:
        '<p>Long-term care focuses on identifying triggers, preparing emergency documentation, assessing attack frequency and quality-of-life impact, planning for procedures and travel, screening family members, and providing psychological support. Patients should inform emergency, anesthesia, dental, and obstetrics teams about their HAE diagnosis and emergency plan.</p>',
      fertilityOrFamily:
        '<p>HAE is mostly autosomal dominant. First-degree relatives should consider screening after diagnosis. Pregnancy, delivery, contraception, and hormone use may affect attack risk and require joint evaluation by allergy/immunology and obstetrics specialists.</p>',
      emergencySigns:
        '<p>Seek immediate emergency care and state HAE risk for tongue, throat, or voice swelling; difficulty swallowing; chest tightness; or breathing difficulty. Also seek care for severe abdominal pain with dehydration, low blood pressure, or repeated vomiting.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Hereditary angioedema',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Hereditary Angioedema',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK482266/',
      },
    ],
    symptoms:
      '<p>Recurrent deep swelling, abdominal pain with vomiting, facial or limb swelling; severe cases may involve laryngeal edema and risk of airway obstruction.</p>',
    diagnosis:
      '<p>Evaluation includes complement C4, C1 inhibitor level and function testing, family history, attack characteristics, and differentiation from allergic angioedema.</p>',
    treatment:
      '<p>Management includes acute attack treatment, airway risk planning, and short- and long-term prevention strategies, requiring immunology/allergy specialist guidance.</p>',
    prognosis:
      '<p>Proper recognition and emergency planning can reduce the risk of severe attacks; airway involvement is the highest priority risk requiring rapid action.</p>',
    sourceName: 'MedlinePlus Genetics: Hereditary angioedema',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 339,
      name: 'hereditary-angioedema-hae-journey.png',
      url: '/images/diseases/hereditary-angioedema-hae-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hereditary-epidermolysis-bullosa',
    id: 41,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hereditary Epidermolysis Bullosa',
    nameEn: 'Hereditary Epidermolysis Bullosa',
    alias:
      'Epidermolysis bullosa, EB, butterfly children, hereditary skin fragility',
    slug: 'hereditary-epidermolysis-bullosa',
    oneSentence:
      'Hereditary epidermolysis bullosa is a group of genetic conditions in which the skin and mucous membranes are unusually fragile; even minor friction can cause blisters, erosions, chronic wounds, and pain.',
    plainName:
      'A genetic condition where the skin is like a very thin protective layer and blisters or breaks easily with minor friction',
    prevalence:
      'Overall rare, with many subtypes; severity varies greatly from localized blisters to multi-system involvement.',
    quickLook: {
      whatItIs:
        'EB is not an ordinary blistering disease. It is caused by abnormal structural proteins in the skin that make the layers connect poorly. Different subtypes vary in blistering level, inheritance pattern, complications, and long-term risks.',
      whoToSeeFirst:
        'When a newborn or child has repeated blisters, skin breakdown, oral erosions, abnormal fingernails or toenails, or slow-healing wounds, see a dermatologist—preferably a team familiar with genetic skin disorders and wound care.',
      isGenetic:
        'Yes. It can be inherited in an autosomal dominant or recessive pattern, or it can arise from a new (de novo) variant. Genetic testing helps clarify the subtype and family risks.',
      hasTreatment:
        'Current management focuses on wound care, pain control, infection prevention, nutritional support, complication monitoring, and evaluating targeted or gene-related therapies for some subtypes.',
      commonDelayReason:
        'Early on it may be mistaken for infection, burns, eczema, or trauma. If the clue of blisters from minor friction and family or newborn history is missed, subtype diagnosis and care education can be delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Blisters and erosions appear after minor friction, tape application, holding, or dressing in newborns or infants.',
        'Repeated damage to oral, esophageal, eye, or genital mucous membranes, with difficulty eating or pain.',
        'Slow wound healing, scarring, milia, abnormal fingernails or toenails, fused fingers or toes, or limited movement.',
        'Chronic anemia, malnutrition, growth delay, or repeated infections occurring together with skin breakdown.',
        'Family members who had repeated blisters, fragile skin, scarring, or a similar diagnosis since childhood.',
      ],
      commonWrongTurns: [
        'Treated as a common infection, eczema, burn, or investigated for abuse without assessing for genetic skin fragility.',
        'Using strongly adhesive dressings or rough debridement that worsens skin damage.',
        'Treating only individual wounds while neglecting nutrition, pain, anemia, dental care, eye care, and hand function.',
        'Failing to set up long-term monitoring for skin tumors and chronic wounds in severe subtypes.',
      ],
      firstDepartments: [
        'Dermatology / Pediatric dermatology',
        'Medical genetics / Genetic counseling clinic',
        'Wound and ostomy / Wound care clinic',
        'Nutrition, dentistry, ophthalmology',
        'Rehabilitation medicine / Hand surgery (when scarring or functional limitation occurs)',
      ],
      diagnosisChecklist: [
        'Record the age blisters started, triggers, locations, scarring, nails, and involvement of mouth, eyes, esophagus, etc.',
        'Take photos of blisters and wound changes; bring previous pathology, immunofluorescence, or electron microscopy reports.',
        'Ask whether EB-related genetic testing and subtype confirmation are needed.',
        'Assess nutrition, anemia, pain, infection, teeth, eyes, and hand/foot function.',
        'Learn low-trauma dressing changes, dressing choices, and emergency instructions.',
      ],
      testsToAskAbout: [
        'EB-related gene panel or exome testing.',
        'Immunofluorescence antigen mapping or electron microscopy of a skin biopsy (when the doctor thinks it is needed).',
        'Complete blood count, iron metabolism, nutritional status, and inflammation/infection assessment.',
        'Oral, eye, gastrointestinal, and hand/foot function assessment.',
        'Skin cancer screening for long-term chronic wounds or suspicious lesions.',
      ],
      questionsForDoctor: [
        'Which EB subtype does my child or I have? How does this affect care and long-term risks?',
        'Which dressings, tapes, cleaning methods, and dressing-change techniques are safer?',
        'How should pain, itching, nutrition, and anemia be managed together?',
        'What wound changes suggest infection or cancer risk and need prompt follow-up?',
        'What genetic counseling is needed for family screening and future pregnancies?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>EB can cause repeated skin blisters, erosions, chronic wounds, pain, itching, scarring, milia, and abnormal fingernails or toenails. Severe subtypes can affect the mouth, eyes, esophagus, and genitourinary tract, causing difficulty eating, malnutrition, anemia, infection, contracted fingers or toes, or limited movement. Some subtypes carry a risk of squamous cell skin cancer in long-term chronic wounds.</p>',
      diagnosis:
        '<p>Diagnosis usually combines birth and blistering history, distribution of skin lesions, family history, related skin biopsy tests, and genetic testing. Identifying the subtype is important because different EB types differ clearly in inheritance pattern, outlook, wound care, complication screening, and treatment availability.</p>',
      treatment:
        '<p>Management centers on reducing friction, protecting the skin, standardized wound care, controlling pain and itching, preventing infection, improving nutrition, and monitoring complications. Some subtypes may have opportunities to evaluate targeted or gene-related therapies, but whether these are suitable requires judgment by a specialist team.</p>',
      longTermCare:
        '<p>Long-term care requires collaboration among dermatology, wound care, nutrition, pain management, dentistry, ophthalmology, rehabilitation, and genetic counseling. Families should establish a low-trauma dressing routine, emergency instructions, and a log for observing chronic wounds.</p>',
      fertilityOrFamily:
        '<p>EB can be inherited in a dominant or recessive pattern, or it can be caused by a new (de novo) variant. After the gene and subtype are identified, family members can learn about carrier testing, recurrence risk, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>Seek medical care promptly for fever; wounds that are red, swollen, hot, painful, or have pus; rapidly expanding skin breakdown; dehydration; difficulty eating; trouble breathing or swallowing; eye pain or light sensitivity; or chronic wounds with abnormal growth, bleeding, foul odor, or changes in pain.</p>',
    },
    sources: [
      {
        name: 'NCBI Bookshelf StatPearls: Epidermolysis Bullosa',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK599531/',
      },
      {
        name: 'GeneReviews: Dystrophic Epidermolysis Bullosa',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1304/',
      },
      {
        name: 'MedlinePlus Genetics: Epidermolysis bullosa',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/epidermolysis-bullosa/',
      },
    ],
    symptoms:
      '<p>Repeated blisters, erosions, chronic wounds, pain, scarring, and abnormal nails after minor friction; the mouth, eyes, esophagus, and hand/foot function may also be affected.</p>',
    diagnosis:
      '<p>Evaluation includes skin lesions and family history, related skin biopsy tests, EB-related genetic testing, and screening for nutrition, infection, and multi-system complications.</p>',
    treatment:
      '<p>Management focuses on low-trauma wound care, pain and itch control, infection prevention, nutritional support, rehabilitation, and long-term complication monitoring.</p>',
    prognosis:
      '<p>Outlook depends heavily on subtype and severity; patients with severe forms need long-term multidisciplinary care and monitoring for chronic wounds and skin cancer risk.</p>',
    sourceName: 'NCBI Bookshelf StatPearls: Epidermolysis Bullosa',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK599531/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 340,
      name: 'hereditary-epidermolysis-bullosa-journey.png',
      url: '/images/diseases/hereditary-epidermolysis-bullosa-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hereditary-fructose-intolerance',
    id: 42,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hereditary Fructose Intolerance',
    nameEn: 'Hereditary Fructose Intolerance',
    alias:
      'HFI, ALDOB-Related Fructose Intolerance, Hereditary Fructose Metabolism Disorder',
    slug: 'hereditary-fructose-intolerance',
    oneSentence:
      'Hereditary Fructose Intolerance is an ALDOB-related fructose metabolism disorder. Ingestion of fructose, sucrose, or sorbitol may cause vomiting, low blood sugar, liver and kidney damage, among other risks.',
    plainName:
      'A genetic metabolic disorder that causes severe discomfort after eating foods or ingredients containing certain types of fructose',
    prevalence:
      'MedlinePlus Genetics estimates a global incidence of approximately 1/20,000-1/30,000 annually; mild cases or those who spontaneously avoid dietary triggers may be identified later.',
    quickLook: {
      whatItIs:
        'HFI is related to insufficient aldolase B function. Fructose metabolism intermediates accumulate in the liver, kidneys, and intestines, which can lead to hypoglycemia, vomiting, abnormal liver function, and long-term organ damage.',
      whoToSeeFirst:
        'When infants develop repeated vomiting, sweating, drowsiness, hypoglycemia, or abnormal liver function after introduction of fruits, juice, sucrose-containing foods, or certain formulas/medications, they should be evaluated by a metabolic genetics specialist, pediatric gastroenterology/hepatology department, or emergency department.',
      isGenetic:
        'Yes, typically autosomal recessive inheritance, related to biallelic pathogenic ALDOB variants.',
      hasTreatment:
        'Yes, there is a clear dietary avoidance and nutritional follow-up management pathway. Fructose loading tests should not be performed when HFI is suspected, and a safe dietary plan should be developed by metabolic specialists and dietitians.',
      commonDelayReason:
        'Often mistaken for picky eating, gastroenteritis, food allergies, lactose intolerance, or ordinary hypoglycemia; children may naturally dislike sweet foods and fruits, which can mask important clues.',
    },
    patientJourney: {
      whenToSuspect: [
        'Vomiting, sweating, drowsiness, or hypoglycemia after consuming fruits, juice, sweets, sucrose, or sorbitol-containing ingredients.',
        'Repeated abdominal pain, bloating, food refusal, poor weight gain, or enlarged liver after infant feeding.',
        'Unexplained abnormal liver function, jaundice, coagulation abnormalities, hypoglycemia, or kidney problems related to diet.',
        'A child who clearly dislikes sweet foods, fruits, or sugar-containing foods and has a history of discomfort after eating them.',
        'Family history of HFI, infant hypoglycemia, liver or kidney damage, or consanguinity.',
      ],
      commonWrongTurns: [
        'Attributing symptoms to ordinary gastroenteritis or food allergies without asking about specific carbohydrate components.',
        'Repeatedly attempting to "train" the child to eat fruits and sweets, causing repeated exposure.',
        'Confusing fructose malabsorption with hereditary fructose intolerance, underestimating the risks of hypoglycemia and liver/kidney damage.',
        'Using medications, supplements, or oral solutions containing sucrose, fructose, or sorbitol without checking ingredients first.',
      ],
      firstDepartments: [
        'Metabolic Genetics / Medical Genetics Department',
        'Pediatric Gastroenterology and Hepatology Department',
        'Pediatric Emergency Department (when there is risk of hypoglycemia, drowsiness, seizures, or liver failure)',
        'Nutrition Department (metabolic nutrition specialty)',
        'Nephrology / Hepatology Department (when organs are affected)',
      ],
      diagnosisChecklist: [
        'Document all foods, formulas, medications, supplements consumed before each episode and the timeline of symptoms.',
        'Keep records of hypoglycemia, lactate, electrolytes, liver and kidney function, coagulation tests, and urinalysis results.',
        'Inquire about ALDOB genetic testing; avoid arranging fructose loading tests independently or without specialist guidance.',
        'Ask a dietitian to help verify ingredients in daily foods, medication excipients, and school/daycare meals.',
        'When family members have pregnancy plans, prepare genetic reports for genetic counseling.',
      ],
      testsToAskAbout: [
        'ALDOB genetic testing.',
        'Blood sugar, lactate, electrolytes, uric acid, and acid-base status during hypoglycemic episodes.',
        'Liver function, bilirubin, coagulation, albumin, and abdominal ultrasound.',
        'Kidney function, electrolytes, and urinalysis.',
        'Nutritional status and micronutrient assessment.',
      ],
      questionsForDoctor: [
        "Do the child's symptoms match HFI? Which ingredients need to be avoided immediately?",
        'Can genetic testing confirm the diagnosis? Why is a fructose loading test not recommended?',
        'How should I verify ingredients in daily foods, medications, vaccines, or oral solutions?',
        'Is there already liver or kidney involvement? How often should follow-up visits be scheduled?',
        'What genetic counseling is needed for family screening and future pregnancy planning?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>HFI often presents with nausea, vomiting, sweating, drowsiness, hypoglycemia, abdominal pain, bloating, food refusal, poor weight gain, and hepatomegaly after exposure to fructose, sucrose, or sorbitol. Repeated exposure may lead to jaundice, abnormal liver function, coagulation problems, and kidney involvement. In severe cases, there may be risk of seizures, coma, or liver/kidney failure.</p>',
      diagnosis:
        '<p>Diagnosis relies on symptoms following dietary exposure, metabolic and liver/kidney tests, and ALDOB genetic testing. GeneReviews clearly states that fructose tolerance/loading tests are dangerous and should not be used as routine diagnostic methods. Doctors will also differentiate between fructose malabsorption, food allergies, gastroenteritis, glycogen storage diseases, galactosemia, and other causes of hypoglycemia or liver disease.</p>',
      treatment:
        '<p>The core of management is strict avoidance of fructose, sucrose, sorbitol, and related sources, with metabolic dietitians ensuring balanced nutrition and micronutrient supplementation. Acute hypoglycemia or liver/kidney involvement requires hospital-based treatment. All dietary and medication excipient verification should follow specialist protocols.</p>',
      longTermCare:
        '<p>Long-term care focuses on food and medication ingredient identification, communication with schools and childcare settings, nutritional status, liver/kidney function, and hypoglycemia prevention. Families may prepare a "list of prohibited ingredients and emergency instructions" to prevent accidental consumption and avoid use of fructose-containing products in medical settings.</p>',
      fertilityOrFamily:
        '<p>HFI is autosomal recessive. After identifying ALDOB variants, parents, siblings, and relatives with pregnancy plans can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>After accidental ingestion, repeated vomiting, drowsiness, sweating, seizures, hypoglycemia, jaundice, bleeding tendency, reduced urine output, or changes in mental status require immediate emergency care. Clearly communicate suspected or confirmed HFI to avoid continued intake of related carbohydrate sources.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Hereditary Fructose Intolerance',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
      },
      {
        name: 'MedlinePlus Genetics: Hereditary fructose intolerance',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/hereditary-fructose-intolerance/',
      },
    ],
    symptoms:
      '<p>After ingesting fructose, sucrose, or sorbitol, symptoms may include vomiting, sweating, hypoglycemia, abdominal pain, food refusal, hepatomegaly, jaundice, or liver/kidney involvement.</p>',
    diagnosis:
      '<p>Evaluation includes dietary exposure history, hypoglycemia and liver/kidney metabolic tests, and ALDOB genetic testing; dangerous fructose loading tests should be avoided.</p>',
    treatment:
      '<p>Management centers on strict avoidance of related carbohydrate sources, dietitian follow-up, medication excipient verification, and management of acute hypoglycemia/liver/kidney risks.</p>',
    prognosis:
      '<p>With early identification and avoidance of triggers, most patients can live stable lives; repeated accidental exposure or delayed identification increases the risk of liver/kidney damage.</p>',
    sourceName: 'GeneReviews: Hereditary Fructose Intolerance',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 341,
      name: 'hereditary-fructose-intolerance-journey.png',
      url: '/images/diseases/hereditary-fructose-intolerance-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hereditary-hypomagnesemia',
    id: 43,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hereditary Hypomagnesemia',
    nameEn: 'Hereditary Hypomagnesemia',
    alias:
      'Familial hypomagnesemia, Primary hypomagnesemia, Hereditary magnesium metabolism disorder',
    slug: 'hereditary-hypomagnesemia',
    oneSentence:
      'Hereditary hypomagnesemia is a group of genetic disorders affecting magnesium absorption in the intestines or retention in the kidneys, which can lead to various presentations including low magnesium, low calcium, seizures, heart rhythm risks, or kidney calcification.',
    plainName:
      'A group of inherited disorders where the body has trouble absorbing or retaining magnesium, resulting in chronically low blood magnesium levels.',
    prevalence:
      'Overall rare with significant variation by genetic type; some present in infancy, while others are found in childhood or adulthood due to low magnesium, kidney calcification, or family screening.',
    quickLook: {
      whatItIs:
        'This is not a single disease but a group of inherited magnesium transport disorders. The problem may occur in intestinal absorption, renal tubule reabsorption, or may simultaneously affect calcium, potassium, kidneys, and the nervous system.',
      whoToSeeFirst:
        'For recurrent low magnesium, low calcium seizures, tetany, heart rhythm abnormalities, kidney stones/kidney calcification, or unexplained low potassium and magnesium, evaluation by nephrology, pediatric nephrology, genetics/metabolism, or emergency department is appropriate.',
      isGenetic:
        'Yes, inheritance varies by type and may be autosomal recessive or dominant. TRPM6, CLDN16, CLDN19, CNNM2 and others may be involved.',
      hasTreatment:
        'Long-term magnesium supplementation, management of related electrolyte abnormalities, and kidney/heart rhythm follow-up plans exist, but specific goals and medication forms need to be individualized based on type and kidney function.',
      commonDelayReason:
        'Seizures may first be treated as epilepsy or calcium deficiency, with low magnesium only briefly corrected; if urine magnesium, kidney calcification, and family history are not checked, the hereditary cause is easily missed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Infants or young children with low magnesium accompanied by low calcium, seizures, tetany, or feeding/growth problems.',
        'Recurrent low magnesium, low potassium, palpitations, abnormal QT interval, or muscle cramps.',
        'Children or young adults with kidney stones, kidney calcification, or abnormal kidney function accompanied by low magnesium.',
        'Persistently low blood magnesium that repeatedly drops despite supplementation, especially if urine magnesium excretion is inappropriately elevated.',
        'Family history of low magnesium, seizures, kidney calcification, early-onset kidney disease, or consanguinity.',
      ],
      commonWrongTurns: [
        'Only treating with calcium or antiepileptic drugs without recognizing that low magnesium is the upstream problem.',
        'Attributing low magnesium to poor diet without distinguishing between gastrointestinal losses and kidney-related losses.',
        'Not performing kidney ultrasound or urine calcium/magnesium assessment, missing types associated with kidney calcification.',
        'Long-term self-supplementation without monitoring kidney function, electrolytes, or ECG.',
      ],
      firstDepartments: [
        'Nephrology',
        'Pediatric Nephrology',
        'Genetics/Medical Genetics',
        'Emergency (for seizures or heart rhythm risk)',
        'Cardiology (for ECG abnormalities)',
      ],
      diagnosisChecklist: [
        'Document results of multiple blood magnesium, calcium, potassium, creatinine, parathyroid hormone, and urine electrolyte tests.',
        'Record seizures, tetany, palpitations, kidney stones, kidney calcification, and family history.',
        'Ask whether 24-hour urine magnesium or fractional magnesium excretion assessment is needed.',
        'Ask whether a low magnesium-related gene panel or exome testing is needed.',
        'Confirm long-term supplementation, follow-up, and acute low magnesium management pathways.',
      ],
      testsToAskAbout: [
        'Blood magnesium, calcium, potassium, phosphorus, creatinine, and acid-base status.',
        'Urine magnesium, calcium, potassium, and assessment of kidney-related losses.',
        'Parathyroid hormone and vitamin D-related tests.',
        'ECG and Holter monitoring if needed.',
        'Kidney ultrasound and relevant genetic testing.',
      ],
      questionsForDoctor: [
        'Is the low magnesium more likely from intestinal absorption problems or kidney wasting?',
        'Should I be tested for specific types of hereditary hypomagnesemia?',
        'How should my magnesium supplementation goals, follow-up frequency, and kidney function monitoring be arranged?',
        'Which symptoms indicate seizure or heart rhythm risk and require emergency care?',
        'Should family members be screened for blood magnesium, urine magnesium, or genetic testing?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Hereditary hypomagnesemia can present as low calcium seizures, tetany, muscle cramps, fatigue, palpitations, or ECG abnormalities in infancy. It may also include low potassium, kidney stones, kidney calcification, impaired kidney function, growth and developmental problems, or neurological involvement. Presentations and risks vary by genetic type.</p>',
      diagnosis:
        '<p>Diagnosis requires confirming persistent low magnesium and distinguishing between inadequate intestinal absorption and kidney-related magnesium loss. Evaluation typically includes blood and urine electrolytes, kidney function, urine calcium and magnesium, ECG, kidney imaging, and genetic testing. Doctors will also rule out medication effects, diarrhea, malnutrition, diabetes, and other acquired causes of low magnesium.</p>',
      treatment:
        '<p>Management includes correcting low magnesium and related low calcium/low potassium, monitoring heart rhythm and kidney function, managing kidney calcification or kidney stone risk, and developing a long-term supplementation plan based on the specific type. Supplementation method and dose should be adjusted by a doctor based on age, symptoms, kidney function, and tolerance.</p>',
      longTermCare:
        '<p>Long-term care focuses on stabilizing electrolytes, protecting kidney function, preventing seizures and heart rhythm risks, and keeping gene and emergency information on hand. Children also need monitoring of growth and development, neurodevelopment, and school care plans.</p>',
      fertilityOrFamily:
        '<p>Inheritance patterns vary by gene. After identifying the disease-causing gene, families can learn about carrier testing, relative screening, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>Seizures, altered consciousness, severe tetany, obvious palpitations or fainting, persistent vomiting or diarrhea, or rapid worsening of low magnesium and calcium require emergency care. Inform them of the hereditary hypomagnesemia risk.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Hypomagnesemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK500003/',
      },
      {
        name: 'Genetic causes of hypomagnesemia, a clinical overview',
        type: 'review',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5440500/',
      },
    ],
    symptoms:
      '<p>May present with low magnesium, low calcium seizures, tetany, low potassium, heart rhythm abnormalities, kidney stones, or kidney calcification.</p>',
    diagnosis:
      '<p>Evaluation includes blood and urine electrolytes, assessment of kidney-related magnesium loss, ECG, kidney imaging, ruling out acquired causes, and genetic testing.</p>',
    treatment:
      '<p>Management centers on individualized magnesium supplementation, correction of related electrolyte abnormalities, heart rhythm and kidney function follow-up, and genetic counseling.</p>',
    prognosis:
      '<p>Prognosis depends on the specific genetic type, magnesium control, kidney involvement, and early recognition of acute risks.</p>',
    sourceName:
      'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
    categorySlug: 'renal-urologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 342,
      name: 'hereditary-hypomagnesemia-journey.png',
      url: '/images/diseases/hereditary-hypomagnesemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-cadasil',
    id: 44,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'CADASIL',
    nameEn: 'CADASIL',
    alias:
      'CADASIL、CADASIL (Cerebral Autosomal Dominant Arteriopathy With Subcortical Infarcts and Leukoencephalopathy)、NOTCH3-Related Cerebral Small Vessel Disease',
    slug: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil',
    oneSentence:
      'CADASIL is a NOTCH3-related hereditary small vessel disease of the brain, which can cause migraine with aura, recurrent lacunar strokes, mood changes, cognitive decline, and white matter changes.',
    plainName:
      'A hereditary condition where small blood vessels in the brain are prone to problems, causing repeated minor strokes and cognitive changes',
    prevalence:
      'Overall rare, but the NOTCH3-related phenotype spectrum is broad; some families present with typical features, while others have milder symptoms or are identified later.',
    quickLook: {
      whatItIs:
        'CADASIL affects small-to-medium-sized arteries in the brain, causing white matter lesions and lacunar ischemic events. It is different from ordinary small vessel disease caused by hypertension or atherosclerosis.',
      whoToSeeFirst:
        'When younger or middle-aged patients have recurrent transient ischemic attacks/strokes, migraine with aura, prominent white matter changes on brain MRI, or a family history of multiple relatives with early-onset stroke/dementia, they can visit the neurology cerebrovascular disease clinic or inherited neurological disorder clinic.',
      isGenetic:
        'Yes, usually autosomal dominant inheritance, related to pathogenic variants in NOTCH3.',
      hasTreatment:
        'Currently focused on stroke risk management, symptom control, rehabilitation, and genetic counseling; there is no universally applicable cure.',
      commonDelayReason:
        'White matter changes on imaging are often attributed to hypertension, aging, or common migraine; if the age of onset is relatively young, family history is significant, or MRI distribution is typical, hereditary small vessel disease should be considered.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent lacunar cerebral infarctions or transient ischemic attacks appearing around age 40-50 or earlier.',
        'Migraine with aura, mood changes, or cognitive decline co-occurring with white matter lesions on brain MRI.',
        'Brain MRI showing extensive white matter hyperintensities, especially in suggestive locations such as the temporal poles or external capsule.',
        'Multiple relatives in the family with early-onset stroke, gait problems, cognitive decline, or psychiatric/behavioral changes.',
      ],
      commonWrongTurns: [
        'Treating only as common migraine without brain MRI and family history review.',
        'Explaining white matter changes in young patients simply as stress or aging.',
        'For recurrent minor strokes, only controlling blood pressure and lipids without assessing for hereditary small vessel disease.',
        'Conducting predictive testing on asymptomatic relatives without genetic counseling.',
      ],
      firstDepartments: [
        'Neurology Cerebrovascular Disease Clinic',
        'Inherited Neurological Disorder Clinic',
        'Medical Genetics Department/Genetic Counseling Clinic',
        'Rehabilitation Medicine Department',
        'Psychiatry/Psychology Department (for mood or behavioral issues)',
      ],
      diagnosisChecklist: [
        'Compile all brain MRI/CT, stroke records, migraine history, and cognitive/mood change documentation.',
        'Map the spectrum of stroke, migraine, dementia, and psychiatric symptoms in the family.',
        'Ask about NOTCH3 gene testing and interpretation of results.',
        'Discuss whether, when, and how asymptomatic relatives should undergo predictive testing.',
        'Establish a plan for stroke prevention, rehabilitation, cognitive support, and psychological support.',
      ],
      testsToAskAbout: [
        'Brain MRI and cerebrovascular assessment.',
        'NOTCH3 gene testing.',
        'Skin biopsy with electron microscopy/immunohistochemistry when necessary.',
        'Blood pressure, lipids, blood sugar, and other modifiable stroke risk assessments.',
        'Cognitive, mood, and gait function assessments.',
      ],
      questionsForDoctor: [
        'Do my MRI and medical history fit CADASIL?',
        'Is the NOTCH3 variant sufficient to confirm the diagnosis?',
        'Which stroke risk factors need active management?',
        'What genetic counseling process is needed for testing relatives?',
        'How should cognitive, emotional, and work/life support be arranged?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CADASIL can present with migraine with aura, transient ischemic attacks, recurrent lacunar cerebral infarctions, gait instability, mood disorders, apathy, executive dysfunction, and progressive cognitive impairment. Symptoms and age of onset may vary within and between families.</p>',
      diagnosis:
        '<p>Diagnosis relies on clinical presentation, characteristic brain MRI findings, family history, and NOTCH3 gene testing. When genetic results are inconclusive, some cases may require skin biopsy to look for characteristic vascular changes. Doctors will also differentiate from hypertensive small vessel disease, multiple sclerosis, inflammatory vasculitis, and other hereditary white matter disorders.</p>',
      treatment:
        '<p>Management focuses on reducing modifiable stroke risks, managing migraine and mood/cognitive problems, rehabilitation training, and family support. Strategies such as antithrombotic therapy, blood pressure control, and lipid management should be decided by neurology specialists based on individual circumstances and cannot simply be copied from standard stroke protocols.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on stroke recurrence, gait, cognition, mood, work capacity, driving safety, and care arrangements. Patients and families should keep records of imaging, genetic reports, and emergency instructions.</p>',
      fertilityOrFamily:
        '<p>CADASIL is usually inherited in an autosomal dominant pattern. First-degree relatives are at risk, but asymptomatic predictive testing should be performed after adequate genetic counseling, with particular discussion of psychological impact, insurance/employment implications, and personal informed choice.</p>',
      emergencySigns:
        '<p>Sudden facial droop, limb weakness or numbness, speech difficulty, visual abnormalities, severe headache, or altered consciousness should prompt immediate stroke emergency care, with notification of CADASIL or familial small vessel disease risk.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: CADASIL',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
      },
      {
        name: 'MedlinePlus Genetics: CADASIL',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/cadasil/',
      },
    ],
    symptoms:
      '<p>Can present with migraine with aura, recurrent transient ischemic attacks or lacunar cerebral infarctions, brain white matter changes, mood and cognitive decline.</p>',
    diagnosis:
      '<p>Assessment includes brain MRI, family history, NOTCH3 gene testing, and when necessary skin biopsy and stroke risk factor evaluation.</p>',
    treatment:
      '<p>Management focuses on stroke risk control, migraine and mood/cognitive management, rehabilitation, genetic counseling, and family support.</p>',
    prognosis:
      '<p>Disease course varies considerably, influenced by stroke recurrence, cognitive changes, family variants, and management of modifiable risk factors.</p>',
    sourceName: 'GeneReviews: CADASIL',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 343,
      name: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
      url: '/images/diseases/hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hereditary-spastic-paraplegia',
    id: 45,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hereditary Spastic Paraplegia',
    nameEn: 'Hereditary Spastic Paraplegia',
    alias:
      'HSP, Hereditary Spastic Paraplegia of Lower Limbs, Strumpell-Lorrain Syndrome',
    slug: 'hereditary-spastic-paraplegia',
    oneSentence:
      'Hereditary spastic paraplegia is a group of inherited neurological disorders whose core features are spasticity, stiffness, and walking difficulty affecting both legs.',
    plainName:
      'A group of inherited nerve disorders where the legs become increasingly stiff and easy to trip over',
    prevalence:
      'Generally rare. Many genes are involved. Age of onset can range from childhood to adulthood, and progression speed varies widely.',
    quickLook: {
      whatItIs:
        'HSP mainly affects the long nerve pathways that control leg movement. Uncomplicated forms mainly present with leg spasticity and walking difficulty. Complicated forms may also include ataxia, peripheral neuropathy, cognitive issues, seizures, optic nerve problems, or other systemic features.',
      whoToSeeFirst:
        'When gradual leg stiffness, scissor gait, tripping, toe-walking, high muscle tone, or hyperactive reflexes develop, evaluation at neurology, neurogenetics, or rehabilitation medicine is recommended.',
      isGenetic:
        'Yes. Inheritance can be autosomal dominant, autosomal recessive, X-linked, or mitochondrial-related. Family history and genetic testing help determine the pattern.',
      hasTreatment:
        'Most types currently focus on symptom management, rehabilitation, gait aids, spasticity management, and complication care. Some treatable genetic or metabolic disorders should be actively ruled out during diagnosis.',
      commonDelayReason:
        'Childhood onset may be mistaken for cerebral palsy or posture issues. Adult onset may be attributed to lumbar spine disease, lack of exercise, or ordinary spasticity. If multiple family members have similar symptoms, consider HSP.',
    },
    patientJourney: {
      whenToSuspect: [
        'Gradual leg stiffness, shuffling gait, toe-walking, scissor gait, or frequent tripping.',
        'Neurological exam shows high leg muscle tone, hyperactive reflexes, or positive pathological reflexes.',
        'Symptoms slowly progress over years, or diagnosed as spastic cerebral palsy in childhood without clear perinatal cause.',
        'Accompanied by urinary urgency, mild sensory changes, or complicated-form features like ataxia, cognition, seizures, or vision/hearing problems.',
        'Multiple family members with similar walking difficulty, cane/wheelchair use, or early-onset leg stiffness.',
      ],
      commonWrongTurns: [
        'Managing only as lumbar disc herniation, orthopedic problem, or cerebral palsy without neurological localization or family history evaluation.',
        'Not screening for treatable genetic metabolic diseases, vitamin deficiencies, inflammation, or spinal cord lesions.',
        'Genetic testing looking at only a single gene without integrating phenotype and family interpretation.',
        'Focusing only on the diagnosis name while neglecting rehabilitation, spasticity management, bladder function, and fall prevention.',
      ],
      firstDepartments: [
        'Neurology',
        'Neurogenetics/Medical Genetics',
        'Rehabilitation Medicine',
        'Orthopedics or Foot and Ankle Clinic (for deformity assessment)',
        'Urology (for urinary urgency or bladder issues)',
      ],
      diagnosisChecklist: [
        'Record age of onset, progression speed, falls, motor ability, and similar symptoms in family.',
        'Bring brain/spinal cord MRI, electromyography, evoked potentials, and prior neurological exam records.',
        'Discuss whether HSP/motor pathway-related gene panel, exome, or genome testing is needed.',
        'Rule out treatable differential diagnoses such as metabolic, vitamin, immune, infectious, or structural spinal cord conditions.',
        'Assess gait, muscle tone, joint range of motion, foot/ankle deformities, bladder function, and fall risk.',
      ],
      testsToAskAbout: [
        'Brain and spinal cord MRI.',
        'HSP-related gene testing or comprehensive genomic testing.',
        'Electromyography, nerve conduction, and evoked potentials (when the doctor considers necessary).',
        'Differential workup for vitamins, metabolism, infection, and immunity.',
        'Gait and rehabilitation functional assessments.',
      ],
      questionsForDoctor: [
        'Does my presentation look more like uncomplicated or complicated HSP?',
        'Which treatable conditions need to be ruled out first?',
        'How will genetic test results affect family screening and reproductive counseling?',
        'How are spasticity, pain, foot/ankle problems, and fall risk managed?',
        'What rehabilitation exercises and assistive devices do I need?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>The core features of HSP are leg spasticity, stiffness, weakness, and walking difficulty, often with hyperactive reflexes, positive pathological reflexes, foot drop, or scissor gait. Some patients have urinary urgency or mild sensory changes. Complicated forms may also include ataxia, peripheral neuropathy, seizures, cognitive impairment, optic nerve, or other systemic features.</p>',
      diagnosis:
        '<p>Diagnosis requires neurological examination, brain and spinal cord imaging, family history, differential diagnosis workup, and genetic testing. Many genes are linked to HSP. A negative result does not completely rule out the condition, and a positive result requires interpretation in the context of symptoms, inheritance pattern, and family validation.</p>',
      treatment:
        "<p>Treatment focuses on functional management, including rehabilitation, stretching and gait training, spasticity and pain management, assistive devices, fall prevention, foot/ankle deformity care, and bladder symptom management. If a treatable metabolic or nutritional condition is identified, management should follow that specific disorder's guidelines.</p>",
      longTermCare:
        '<p>Long-term care focuses on walking ability, falls, joint contractures, pain, bladder function, psychological support, and work/life support. Regular rehabilitation assessments improve daily function more than waiting for genetic results alone.</p>',
      fertilityOrFamily:
        '<p>HSP has various inheritance patterns. After identifying the disease-causing gene, family members can use genetic counseling to learn about relative screening, predictive testing, prenatal diagnosis, or preimplantation genetic testing options.</p>',
      emergencySigns:
        '<p>Sudden worsening of walking ability, acute urinary retention, significant back pain with neurological changes, rapid worsening after infection, or new arm/swallowing/breathing problems require prompt medical attention. Do not assume all acute problems are due to HSP.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
      },
      {
        name: 'NINDS: Hereditary Spastic Paraplegia',
        type: 'official',
        url: 'https://www.ninds.nih.gov/health-information/disorders/hereditary-spastic-paraplegia',
      },
    ],
    symptoms:
      '<p>Main features include leg spasticity, stiffness, weakness, scissor gait, and easy tripping, with possible urinary urgency or complicated neurological features.</p>',
    diagnosis:
      '<p>Assessment includes neurological examination, brain and spinal cord MRI, treatable cause workup, HSP-related genetic testing, and rehabilitation functional evaluation.</p>',
    treatment:
      '<p>Management centers on rehabilitation, spasticity and pain management, assistive devices, fall prevention, and bladder and foot/ankle care.</p>',
    prognosis:
      '<p>Most uncomplicated forms progress slowly and do not significantly shorten lifespan, but functional impact varies widely. Complicated forms depend on involvement of related systems.</p>',
    sourceName:
      'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 344,
      name: 'hereditary-spastic-paraplegia-journey.png',
      url: '/images/diseases/hereditary-spastic-paraplegia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-holocarboxylase-synthetase-deficiency',
    id: 46,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Holocarboxylase Synthetase Deficiency',
    nameEn: 'Holocarboxylase Synthetase Deficiency',
    alias:
      'HLCS Deficiency, Early-Onset Multiple Carboxylase Deficiency, Biotin-Responsive Multiple Carboxylase Deficiency',
    slug: 'holocarboxylase-synthetase-deficiency',
    oneSentence:
      'Holocarboxylase Synthetase Deficiency is a genetic metabolic disorder affecting biotin utilization. In infants, it may present with feeding difficulties, rash, hair loss, breathing problems, sleepiness, acidosis, or seizures.',
    plainName:
      'A genetic disorder where the body cannot effectively use biotin, causing multiple metabolic enzymes to work abnormally',
    prevalence:
      'MedlinePlus Genetics mentions an estimated incidence of approximately 1 in 87,000 people; actual identification is influenced by newborn screening and access to metabolic testing.',
    quickLook: {
      whatItIs:
        'The HLCS enzyme is responsible for attaching biotin to multiple carboxylase enzymes. Insufficient enzyme function affects protein, fat, and carbohydrate metabolism, and it belongs to the group of multiple carboxylase deficiency disorders.',
      whoToSeeFirst:
        'When newborns or infants present with poor feeding, repeated vomiting, rash, hair loss, breathing difficulties, sleepiness, seizures, or metabolic acidosis, seek emergency/pediatric care first, then transfer to metabolic genetics upon stabilization.',
      isGenetic:
        'Yes, usually autosomal recessive inheritance, related to biallelic pathogenic variants in the HLCS gene.',
      hasTreatment:
        'Most patients require early and long-term biotin-related treatment and metabolic follow-up under medical supervision. Specific dosages and adjustments should not be decided independently.',
      commonDelayReason:
        'Rash, hair loss, poor feeding, and breathing problems may be addressed separately; if acidosis, ketosis, organic acid abnormalities, and skin clues are not connected, diagnosis may be delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Newborns or infants presenting with feeding difficulties, vomiting, sleepiness, rapid breathing, or metabolic acidosis.',
        'Rash, seborrheic/eczema-like changes, and hair loss occurring together with developmental or metabolic abnormalities.',
        'Seizures, abnormal muscle tone, developmental delay, or recurrent acute episodes.',
        'Urine organic acid analysis showing abnormalities related to multiple carboxylase metabolism.',
        'Newborn screening or family history suggesting biotin metabolism-related disease.',
      ],
      commonWrongTurns: [
        'Managing only as eczema, infection, or gastrointestinal problem without checking for metabolic acidosis and organic acids.',
        'Treating seizures as a separate neurological condition without evaluating for treatable metabolic diseases.',
        'Stopping biotin or reducing follow-up independently after symptoms improve with treatment.',
        'Failing to differentiate from other biotin-related disorders such as biotinidase deficiency.',
      ],
      firstDepartments: [
        'Neonatology/Pediatric Emergency',
        'Metabolic Genetics',
        'Pediatric Neurology',
        'Dermatology',
        'Nutrition (Metabolic Nutrition)',
      ],
      diagnosisChecklist: [
        'Preserve newborn screening results, blood gas, lactate, ammonia, ketones, urine organic acids, and acylcarnitine profile.',
        'Document the timeline of rash, hair loss, feeding, breathing, seizures, and acute episodes.',
        'Ask about HLCS genetic testing and differentiation from biotinidase deficiency.',
        'Confirm long-term treatment plan, follow-up schedule, and emergency protocol for illness.',
        'Arrange developmental, hearing, vision, skin, and nutritional follow-up.',
      ],
      testsToAskAbout: [
        'Blood gas and metabolic acidosis assessment.',
        'Urine organic acids, blood acylcarnitine profile, lactate, ammonia, and ketones.',
        'HLCS genetic testing.',
        'Biotinidase activity testing for differentiation.',
        'Neurodevelopmental, skin, and nutritional assessments.',
      ],
      questionsForDoctor: [
        'Does the current evidence support HLCS deficiency? What other biotin-related disorders need to be ruled out?',
        'Is treatment lifelong? What parameters need monitoring during follow-up?',
        'What is the emergency protocol for fever, vomiting, or inability to eat?',
        'What long-term follow-up is needed for skin, development, and the nervous system?',
        'How is family screening and recurrence risk for future pregnancies assessed?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Holocarboxylase Synthetase Deficiency often presents in infancy with feeding difficulties, vomiting, breathing problems, sleepiness, rash, hair loss, metabolic acidosis, seizures, or risk of coma. Without timely recognition, it may lead to developmental delay, neurological damage, or life-threatening metabolic crises.</p>',
      diagnosis:
        '<p>Diagnosis is based on clinical presentation, blood gas and metabolic tests, urine organic acids, acylcarnitine profile, and HLCS genetic testing. Doctors will also differentiate from biotinidase deficiency, other organic acidemias, fatty acid oxidation disorders, infections, and epilepsy.</p>',
      treatment:
        '<p>Treatment usually responds to biotin-related regimens, but requires determination of dosage, monitoring parameters, and long-term plans by a metabolic genetics specialist. Acute metabolic crises require hospitalization, and self-adjustment of medication or decisions based solely on symptoms should be avoided.</p>',
      longTermCare:
        '<p>Long-term management focuses on adherence to treatment, monitoring metabolic stability, developmental assessment, skin and nutritional care, and preparing emergency instructions for fever, vomiting, surgery, or inability to eat.</p>',
      fertilityOrFamily:
        '<p>This disorder is usually inherited in an autosomal recessive pattern. After identifying HLCS variants, parents, siblings, and relatives planning pregnancy can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>When sleepiness, rapid breathing, repeated vomiting, seizures, inability to eat, dehydration, acidosis, or worsening mental status during infection occurs, seek immediate emergency care and mention suspected or confirmed HLCS deficiency.</p>',
    },
    sources: [
      {
        name: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
      },
      {
        name: 'NCBI MedGen: Holocarboxylase synthetase deficiency',
        type: 'official',
        url: 'https://www.ncbi.nlm.nih.gov/medgen/120653',
      },
    ],
    symptoms:
      '<p>In infancy, it may present with feeding difficulties, breathing problems, rash, hair loss, sleepiness, metabolic acidosis, seizures, or risk of coma.</p>',
    diagnosis:
      '<p>Assessment includes blood gas, urine organic acids, acylcarnitine profile, HLCS genetic testing, and differentiation from disorders such as biotinidase deficiency.</p>',
    treatment:
      '<p>Management centers on long-term biotin-related treatment, metabolic monitoring, and illness emergency protocols under metabolic genetics specialist guidance.</p>',
    prognosis:
      '<p>Early identification and sustained treatment can prevent many severe complications; delays or stopping medication increase the risk of metabolic crises and neurodevelopmental problems.</p>',
    sourceName: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 345,
      name: 'holocarboxylase-synthetase-deficiency-journey.png',
      url: '/images/diseases/holocarboxylase-synthetase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-homocysteinemia',
    id: 47,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Homocysteinemia',
    nameEn: 'Homocysteinemia',
    slug: 'homocysteinemia',
    oneSentence:
      'Homocysteinemia is a group of inherited metabolic disorders in which amino acid metabolism abnormalities cause homocysteine to build up in the blood. Typical features include eye abnormalities, bone problems, intellectual disability, and increased risk of blood clots.',
    plainName: 'Homocysteinemia (Cystathionine Beta-Synthase Deficiency)',
    prevalence:
      'The classic form (cystathionine beta-synthase deficiency) has a global prevalence of approximately 1/200,000 to 1/350,000, with considerable variation by region.',
    quickLook: {
      whatItIs:
        'This is a group of congenital metabolic disorders in which a deficiency of the relevant enzyme prevents homocysteine from being properly metabolized, causing it to accumulate in the blood and affecting the eyes, bones, cardiovascular system, and nervous system.',
      whoToSeeFirst:
        'Priority referral to endocrinology or metabolic genetics; eye symptoms may require a combined evaluation with ophthalmology; if there are signs of blood clots, seek urgent medical care.',
      isGenetic:
        'Most forms follow autosomal recessive inheritance. Classic homocystinuria caused by CBS deficiency is the most common; other homocysteine metabolism abnormalities may involve different genes and cofactor pathways.',
      hasTreatment:
        'There are management protocols available from metabolic specialists, including diet, vitamin/cofactor responsiveness assessment, betaine, and blood clot risk management. Specific plans should be developed by a metabolic genetics specialist.',
      commonDelayReason:
        'Early symptoms can be subtle. Patients often see multiple doctors for vision problems, osteoporosis, or recurrent blood clot events without tracing back to a metabolic cause. Developmental delays in infants and young children are sometimes mistaken for normal late development.',
    },
    patientJourney: {
      whenToSuspect: [
        'Unexplained myopia or dislocation of the eye lens (upward displacement) appearing in childhood or adolescence.',
        'Significantly short stature, osteoporosis, or scoliosis and other bone abnormalities.',
        'History of thromboembolism (such as deep vein thrombosis or pulmonary embolism at a young age).',
        'Family history of unexplained early-onset cardiovascular events or metabolic abnormalities.',
      ],
      commonWrongTurns: [
        'Undergoing refractive surgery only for eye symptoms without screening for systemic metabolic problems.',
        'Treating osteoporosis with calcium supplements alone without assessing for metabolic bone disease.',
        'Receiving treatment only after a blood clot event without further investigation for an inherited metabolic cause.',
      ],
      firstDepartments: [
        'Endocrinology or Metabolic Genetics',
        'Pediatrics (for children)',
        'Ophthalmology (for lens abnormalities)',
        'Cardiology (for blood clots or arterial sclerosis)',
      ],
      diagnosisChecklist: [
        'Measurement of total blood homocysteine concentration (blood drawn while fasting).',
        'Urine organic acid analysis or gas chromatography-mass spectrometry (GC-MS) to detect homocysteine in the urine.',
        'Plasma amino acid analysis to assess whether methionine levels are normal or low.',
        'Enzyme activity testing (e.g., red blood cell cystathionine beta-synthase activity).',
        'Genetic testing to identify specific mutation types (such as MTHFR, CBS, MTR, MTRR).',
      ],
      testsToAskAbout: [
        'What is my homocysteine level, and what severity category does it fall into?',
        'What tests do I need to confirm which type of homocysteinemia I have?',
        'Is genetic testing recommended, and how would it affect my treatment plan?',
        'What screening do my family members need?',
      ],
      questionsForDoctor: [
        'Which metabolic subtype does my condition most closely resemble? Do treatment approaches differ between subtypes?',
        'What specific dietary adjustments are recommended? Are there foods I should limit?',
        'If I am planning a pregnancy, what special precautions should I take during pregnancy?',
        'What vitamins or nutrients do I need to supplement? Who will develop the plan, and how will effectiveness and side effects be monitored?',
      ],
    },
    medicalSections: {
      symptoms:
        'Mainly affects the eyes (lens dislocation, myopia), bones (osteoporosis, scoliosis, joint laxity), central nervous system (intellectual disability, developmental delay), and cardiovascular system (blood clots, arterial sclerosis). Some patients have facial features such as prominent cheekbones and a recessed jaw. Symptom severity varies depending on the degree and type of enzyme deficiency.',
      diagnosis:
        'Confirmed by elevated blood homocysteine concentration (typically > 15 µmol/L) and urine homocysteine detection; further differentiated by enzyme activity testing and genetic testing to distinguish subtypes; plasma methionine levels help differentiate between various metabolic defects.',
      treatment:
        'Treatment requires first identifying the cause and vitamin B6 responsiveness. Management may include low-methionine diet, specialized nutritional formulas, vitamins/cofactors, betaine, and blood clot risk management, but the specific combination, target values, and adjustment frequency should be determined by a metabolic genetics specialist. Ophthalmologic, orthopedic, and vascular complications require coordinated care from relevant specialists.',
      longTermCare:
        'Requires long-term multidisciplinary follow-up: metabolic, endocrinology, ophthalmology, and orthopedics; regular monitoring of blood homocysteine concentration; attention to bone health and cardiovascular status; patients and families may consider genetic counseling to understand reproductive risks.',
      fertilityOrFamily:
        'Follows autosomal recessive inheritance; each child has a 25% risk of being affected (if both parents are carriers); those planning a family should seek preconception genetic counseling; some types require stricter metabolic control during pregnancy, requiring multidisciplinary coordination.',
      emergencySigns:
        'Sudden chest pain, difficulty breathing, or swelling of one limb (possible pulmonary embolism or deep vein thrombosis); eye pain with rapid vision loss (lens dislocation); severe headache or focal neurological signs (need to rule out cerebrovascular event).',
    },
    sources: [
      {
        name: 'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
      },
      {
        name: 'MedlinePlus Medical Encyclopedia: Homocystinuria',
        type: 'official',
        url: 'https://medlineplus.gov/ency/article/001199.htm',
      },
    ],
    sourceName:
      'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 346,
      name: 'homocysteinemia-journey.png',
      url: '/images/diseases/homocysteinemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-homozygous-hypercholesterolemia',
    id: 48,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Homozygous Familial Hypercholesterolemia',
    nameEn: 'Homozygous Familial Hypercholesterolemia',
    slug: 'homozygous-hypercholesterolemia',
    oneSentence:
      'Homozygous familial hypercholesterolemia is a serious inherited lipid metabolism disorder where patients have extremely high LDL-C levels, and can develop skin xanthomas and early-onset atherosclerosis even in childhood.',
    plainName: 'Homozygous Familial Hypercholesterolemia',
    prevalence:
      'Extremely rare, with a global prevalence of approximately 1 in 160,000 to 1 in 300,000, though it may be higher in certain populations due to founder effects.',
    quickLook: {
      whatItIs:
        'This is one of the most severe forms of familial hypercholesterolemia, where LDL-C is markedly elevated from birth, and children may develop xanthomas and early-onset atherosclerosis risk.',
      whoToSeeFirst:
        'Priority should be to visit cardiology or endocrinology departments; pediatric patients should follow up with pediatric cardiology specialists; if chest pain or cardiac symptoms are already present, see cardiology; lipid metabolism specialists or rare disease centers can provide more comprehensive management.',
      isGenetic:
        'Usually related to genes such as LDLR, APOB, PCSK9, and LDLRAP1. Clinically, biallelic variants, compound heterozygous, or functionally near-homozygous severe phenotypes can be seen; genetic interpretation requires combining genetic testing and family information.',
      hasTreatment:
        'Requires long-term management by lipid metabolism/cardiovascular specialists, which may involve multi-drug combination lipid-lowering therapy, lipoprotein apheresis, coronary risk assessment, and in rare cases more complex treatment options; do not self-apply standard high cholesterol regimens.',
      commonDelayReason:
        'Elevated LDL-C in children is often overlooked or attributed to diet; skin xanthomas are easily mistaken for common skin problems; by the time symptoms like chest pain appear, atherosclerosis has often become quite severe.',
    },
    patientJourney: {
      whenToSuspect: [
        'Yellow or orange papule-like nodules (xanthomas) appearing on the skin, especially on the back of hands, Achilles tendons, elbows, and knees.',
        'Chest tightness or angina in minors.',
        'Multiple family members who died young from heart disease or required stents.',
        'Blood tests showing significantly elevated LDL-C levels (far exceeding normal upper limits; be alert for extremely high levels).',
      ],
      commonWrongTurns: [
        'Relying solely on diet control without recognizing this as a metabolic disease caused by genetic mutations.',
        'Skin xanthomas misdiagnosed as common warts or lipomas, without lipid testing.',
        'Young patients with cardiac symptoms not being investigated for hereditary hypercholesterolemia.',
      ],
      firstDepartments: [
        'Cardiology',
        'Endocrinology or lipid metabolism specialists',
        'Pediatrics (for child patients)',
        'Dermatology (for xanthoma assessment)',
      ],
      diagnosisChecklist: [
        'Fasting lipid panel: total cholesterol, LDL-C, HDL-C, triglyceride levels.',
        'Lipoprotein(a) level testing.',
        'Cardiovascular assessment: carotid ultrasound, echocardiography, coronary CT or coronary angiography (based on age and symptoms).',
        'Achilles tendon and skin xanthoma examination and documentation.',
        'Genetic testing to identify mutation types in LDLR, ApoB, PCSK9, LDLRAP1 and other genes.',
        'Cascade screening of family members.',
      ],
      testsToAskAbout: [
        'What is my specific LDL-C value, and how much higher is it than the normal range?',
        'Do I need genetic testing to confirm the specific type?',
        'What cardiovascular tests do I need, and how often should I have follow-up exams?',
        'How should my family members be screened?',
      ],
      questionsForDoctor: [
        'What stage is my LDL-C level and atherosclerosis risk currently at?',
        'What combination of medications or non-drug treatments do I need? What are the treatment goals and monitoring frequency?',
        'Do I need lipoprotein apheresis or referral to a lipid metabolism/cardiovascular specialist center for evaluation?',
        'How should family members be screened for lipid and genetic risks?',
      ],
    },
    medicalSections: {
      symptoms:
        'Skin xanthomas appearing from early childhood (commonly on Achilles tendons, back of hands, elbows, and buttocks), early-onset corneal arcus (before age 40), progressive atherosclerosis (can affect coronary arteries, carotid arteries, and aorta). In severe cases, angina, myocardial infarction can occur in childhood or adolescence, even requiring interventional procedures or bypass surgery.',
      diagnosis:
        'Based on very high LDL-C levels (far exceeding normal upper limits without treatment), skin xanthomas, family history of early-onset cardiovascular disease, and genetic testing (mutations in LDLR and other genes) for diagnosis; cascade screening helps identify more family members.',
      treatment:
        'Treatment typically requires intensive, long-term combined management under lipid metabolism and cardiovascular specialists, including lifestyle support, multiple classes of lipid-lowering drugs, lipoprotein apheresis, and management of atherosclerosis complications. Whether new drugs, interventions, surgery, or transplant evaluation are suitable depends on genetic type, LDL-C level, cardiovascular involvement, and local availability, to be determined by the specialist team.',
      longTermCare:
        'Requires long-term multidisciplinary management by cardiology, metabolism endocrinology, and nutrition departments; lipid checks every 3 to 6 months, atherosclerosis progression assessment every 1 to 2 years; strict low saturated fat and low cholesterol diet; avoid strenuous exercise that may trigger cardiac events, but moderate aerobic exercise is beneficial; pay attention to the mental health of patients and family members.',
      fertilityOrFamily:
        'It is recommended that family members undergo systematic cascade screening for early detection and intervention; pregnancy in patients requires multidisciplinary evaluation, with coordinated management by lipid metabolism specialists, obstetrics, and cardiology; statins are typically discontinued during pregnancy.',
      emergencySigns:
        'Sudden chest pain or pressure sensation (may indicate acute coronary event); chest tightness with shortness of breath, palpitations (signs of angina or cardiac insufficiency); unilateral limb weakness or slurred speech (need to rule out cerebrovascular event).',
    },
    sources: [
      {
        name: 'GeneReviews: Familial Hypercholesterolemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
      },
      {
        name: 'MedlinePlus Genetics: Familial hypercholesterolemia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/familial-hypercholesterolemia/',
      },
      {
        name: 'European Atherosclerosis Society consensus update on HoFH',
        type: 'guideline',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10314327/',
      },
    ],
    sourceName: 'GeneReviews: Familial Hypercholesterolemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 347,
      name: 'homozygous-hypercholesterolemia-journey.png',
      url: '/images/diseases/homozygous-hypercholesterolemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-huntington-disease',
    id: 49,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Huntington Disease',
    nameEn: 'Huntington Disease',
    slug: 'huntington-disease',
    oneSentence:
      "Huntington's disease is a rare autosomal dominant neurodegenerative disease, characterized primarily by involuntary choreiform movements, psychiatric symptoms, and progressive cognitive decline.",
    plainName: "Huntington's Disease",
    prevalence:
      'Global prevalence is approximately 5–10 per 100,000; rates are higher in European and North American populations and lower in Asian populations.',
    quickLook: {
      whatItIs:
        'This is a neurodegenerative disease caused by abnormal expansion of CAG trinucleotide repeats in the HTT gene on chromosome 4. Neurons in the striatum (caudate nucleus and putamen) selectively die, leading to motor, psychiatric, and cognitive symptoms.',
      whoToSeeFirst:
        'Start with a neurologist; psychiatry may be added if significant psychiatric symptoms occur; genetic testing and genetic counseling should be done under specialist guidance; rehabilitation medicine can help if motor dysfunction develops.',
      isGenetic:
        'Autosomal dominant inheritance means inheriting one mutant copy from either parent can cause the disease. Offspring have a 50% chance of inheriting the mutation. Paternal transmission tends to result in earlier onset. Individuals with family planning goals should discuss genetic counseling and reproductive options.',
      hasTreatment:
        'Current management focuses on symptom control, rehabilitation, swallowing and nutrition safety, psychiatric and psychological support, care planning, and genetic counseling. Gene-related therapies should be verified through clinical trials and regulatory-approved information.',
      commonDelayReason:
        'Early symptoms vary greatly between individuals and may be mistaken for anxiety, depression, or obsessive-compulsive disorder. Mild choreiform movements early on may be overlooked or dismissed as habitual movements. Cognitive decline is often attributed to work stress or normal aging.',
    },
    patientJourney: {
      whenToSuspect: [
        'Unexplained involuntary movements of the face or limbs (such as eye twitching, lip pursing, or limb jerking).',
        'Family members notice significant changes in mood, personality, or symptoms of depression and impulse control problems.',
        'Declining memory and reduced efficiency at work or in daily activities.',
        "Family history of Huntington's disease with any of the above symptoms or just a feeling of reduced agility.",
      ],
      commonWrongTurns: [
        'Treating only with psychiatric diagnosis (depression, anxiety) while overlooking the combination of choreiform movements and cognitive decline.',
        'Misinterpreting movement abnormalities as epilepsy or other movement disorders.',
        'Ruling out hereditary neurodegenerative diseases without understanding the family history.',
      ],
      firstDepartments: [
        'Neurology',
        'Psychiatry (when prominent psychiatric symptoms occur)',
        'Rehabilitation Medicine (for motor and speech support)',
        'Genetic Counseling (for genetic assessment and family screening)',
      ],
      diagnosisChecklist: [
        'Detailed neurological examination to assess the type and severity of choreiform movements.',
        'Blood routine and metabolic screening to rule out other causes.',
        'HTT gene CAG repeat number testing (repeat count >= 36 indicates a mutation carrier).',
        'Brain MRI or CT: characteristic caudate nucleus and putamen atrophy, enlarged lateral ventricles.',
        'Neuropsychological assessment: baseline cognitive function evaluation.',
        'Psychiatric evaluation: assessment of mood, behavioral, and personality changes.',
      ],
      testsToAskAbout: [
        'What is my specific HTT gene CAG repeat count?',
        'What did my brain imaging show? Is there caudate nucleus atrophy?',
        'Is there cognitive decline, and what assessments are needed?',
        'Do my family members need genetic screening? How should this be arranged?',
      ],
      questionsForDoctor: [
        'What stage are the motor, cognitive, and behavioral symptoms at currently?',
        'Which symptoms need medication or rehabilitation intervention? What are the treatment goals and how are side effects monitored?',
        'How should swallowing, nutrition, fall prevention, and driving/work safety be assessed?',
        'Is predictive genetic testing appropriate for asymptomatic family members? What is the genetic counseling process?',
      ],
    },
    medicalSections: {
      symptoms:
        'Mainly divided into three categories: ① Motor symptoms: choreiform movements (involuntary choreiform twitching of the face, trunk, and limbs), dystonia, abnormal eye movements, later developing into motor rigidity; ② Psychiatric symptoms: depression, anxiety, impulse control problems, personality changes, some with psychotic symptoms; ③ Cognitive symptoms: impaired executive function, memory loss, difficulty concentrating, slowed reactions, progressing to global dementia in advanced stages. Juvenile-onset (before age 20) often presents with reduced movements, rigidity, and seizures.',
      diagnosis:
        'Based on the classic clinical triad (choreiform movements, psychiatric symptoms, progressive cognitive decline) + positive family history + HTT gene testing (CAG repeat count >= 36 confirms diagnosis) + brain MRI showing characteristic caudate nucleus atrophy. Genetic testing can be performed before symptom onset, requiring genetic counseling support.',
      treatment:
        'Treatment focuses on multidisciplinary symptom management, which may include motor symptom control, psychiatric and psychological treatment, sleep and behavioral management, swallowing and nutrition assessment, physical/occupational/speech therapy, and care planning. Specific medications and clinical trial participation need to be determined jointly by neurology, psychiatry, and genetic counseling teams.',
      longTermCare:
        'Long-term neurology follow-up recommended, assessing motor, psychiatric, and cognitive status every 6–12 months. Maintain appropriate physical activity while preventing falls. Home safety modifications (fall prevention, collision protection). Monitor nutrition and swallowing function. Psychological support is important for both patients and caregivers. Joining patient support groups provides ongoing assistance.',
      fertilityOrFamily:
        'Children have a 50% chance of inheriting the mutation. Those with family planning goals should undergo genetic counseling before conception to discuss options such as preimplantation genetic diagnosis (PGD). Whether family members undergo genetic testing should be decided individually after thorough discussion of risks and benefits. For asymptomatic individuals with family history, genetic testing is not recommended without prior genetic counseling.',
      emergencySigns:
        'Sudden falls or injuries (loss of balance from choreiform movements); worsening swallowing difficulty, choking during meals (rule out aspiration pneumonia); severe mood swings with self-harm or harm to others (acute psychiatric crisis); rapid change in consciousness (rule out infection or other neurological emergencies).',
    },
    sources: [
      {
        name: 'GeneReviews: Huntington Disease',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1305/',
      },
      {
        name: 'MedlinePlus: Huntington disease',
        type: 'official',
        url: 'https://medlineplus.gov/huntingtonsdisease.html',
      },
      {
        name: 'MedlinePlus Genetics: Huntington disease',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/huntington-disease/',
      },
    ],
    sourceName: 'GeneReviews: Huntington Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1305/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 348,
      name: 'huntington-disease-journey.png',
      url: '/images/diseases/huntington-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId:
      'disease-hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    id: 50,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    nameEn: 'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    alias:
      'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome, Ornithine Transporter Deficiency',
    slug: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    oneSentence:
      'HHH Syndrome is a rare autosomal recessive inherited disorder caused by mutations in the SLC25A15 gene, which leads to impaired mitochondrial ornithine transport, resulting in elevated blood ammonia, ornithine, and homocitrulline, affecting the nervous system and liver.',
    plainName: 'HHH Syndrome',
    prevalence:
      'Extremely rare, with fewer than 100 cases reported worldwide, making it one of the rarest types of urea cycle disorders',
    quickLook: {
      whatItIs:
        "HHH Syndrome, or Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome, is a rare inherited metabolic disorder caused by mutations in the SLC25A15 gene, which codes for the mitochondrial ornithine transporter 1 (ORNT1). This defect prevents ornithine from properly entering the mitochondria to participate in the urea cycle, leading to accumulation of blood ammonia, elevated blood ornithine, and excretion of homocitrulline in urine. It follows an autosomal recessive inheritance pattern and was included in China's first national list of rare diseases in 2018.",
      whoToSeeFirst:
        'When newborns or children develop hyperammonemia, drowsiness, vomiting, seizures, developmental delay, spasticity, or unexplained liver function abnormalities, they should be evaluated promptly in the emergency department, pediatrics, metabolic genetics, or pediatric neurology.',
      isGenetic: 'Yes, autosomal recessive inheritance',
      hasTreatment:
        'Yes, management approaches related to urea cycle disorders are available, including acute hyperammonemia management, protein intake management, ammonia-scavenging medications, and amino acid supplementation assessment, to be developed by metabolic genetics specialists.',
      commonDelayReason:
        'Symptoms resemble encephalopathy, epilepsy, or liver disease, leading to misdiagnosis; the wide age range of onset (from newborn to adulthood) increases diagnostic difficulty',
    },
    patientJourney: {
      whenToSuspect: [
        'Drowsiness, refusal to feed, vomiting, coma with respiratory alkalosis appearing after 48 hours of birth in the neonatal period',
        'Intellectual and motor developmental delay or regression in childhood',
        'Unexplained liver function abnormalities with neuropsychiatric symptoms',
        'Marked aversion to or poor tolerance of high-protein foods',
        'Recurrent seizures, ataxia, or consciousness disturbances',
      ],
      commonWrongTurns: [
        'Treated only for epilepsy or cerebral palsy without checking blood ammonia',
        'Attributing liver function abnormalities to viral hepatitis or other liver diseases',
        'Failing to perform urine metabolic screening, missing key diagnostic clues',
        'Adult-onset cases often misdiagnosed as psychiatric disorders',
      ],
      firstDepartments: [
        'Pediatrics or Pediatric Neurology (preferred first visit)',
        'Metabolic Genetics',
        'Hepatology or Gastroenterology (for assessment of liver damage)',
        'Emergency Department (during acute episodes)',
      ],
      diagnosisChecklist: [
        'Blood ammonia, blood glucose, liver and kidney function',
        'Blood ornithine concentration (persistent elevation is a key clue)',
        'Urine homocitrulline test (urine metabolic screening)',
        'Combined testing of blood ammonia, ornithine, and homocitrulline',
        'SLC25A15 gene molecular testing (important confirmatory evidence)',
        'ORNT1 activity measurement in skin fibroblasts (auxiliary method)',
        'Brain MRI or CT (to assess neurological complications)',
        'Electroencephalogram (EEG) (to assess epileptiform activity)',
      ],
      testsToAskAbout: [
        'Blood ammonia test (whether elevated)',
        'Blood ornithine concentration',
        'Urine amino acid analysis (including homocitrulline)',
        'SLC25A15 gene testing',
        'Liver function and coagulation function',
      ],
      questionsForDoctor: [
        'What is the current blood ammonia level? How often should it be checked?',
        "How should my child's diet be adjusted specifically? How should protein intake be controlled?",
        'Is arginine, citrulline, or ammonia-scavenging treatment currently needed? Who will develop the plan, and how will treatment be monitored?',
        "How often should my child's developmental level be assessed?",
        'What acute triggers should I watch out for?',
        'If my parents want to have another child, what genetic preparations are needed?',
      ],
    },
    medicalSections: {
      symptoms:
        'In the neonatal period, symptoms typically appear after 48 hours of birth, including drowsiness, feeding difficulties, vomiting, coma, and respiratory alkalosis. In infants and children, acute and chronic encephalopathy manifests as intellectual and motor developmental delay or regression, spastic gait, myoclonus, and seizures. Some patients have ataxia and cognitive impairment. Liver damage presents as hepatomegaly, abnormal liver function, and coagulation disorders. Adult-onset cases tend to have milder symptoms and often present with psychiatric or behavioral abnormalities or consciousness disturbances triggered by high-protein diets.',
      diagnosis:
        'Clinical diagnosis can be made based on the classic triad (hyperornithinemia, hyperammonemia, and homocitrullinuria). Confirmation relies on SLC25A15 gene analysis or ORNT1 activity measurement in skin fibroblasts (supporting diagnosis if activity is 20-25% of normal). Newborn screening can detect cases early through blood ornithine concentration. Brain CT/MRI may show brain atrophy, white matter changes, or subdural hemorrhage.',
      treatment:
        'Acute hyperammonemia requires management as a metabolic emergency, including avoiding prolonged fasting, with assessment by a specialist team for energy support, pausing or adjusting protein intake, ammonia-scavenging therapy, amino acid supplementation, and dialysis when necessary. Long-term management typically includes individualized protein intake, metabolic monitoring, and developmental and neurological follow-up. All plans should be written as actionable sick-day/emergency protocols.',
      longTermCare:
        "Long-term management centers on dietary control, requiring a personalized low-protein diet plan developed with a dietitian to avoid high-protein foods that may trigger acute episodes. Regular monitoring of blood ammonia, liver function, and blood ornithine concentration is important. Pay attention to neurodevelopmental milestones and provide timely rehabilitation training. Parents should learn to recognize early signs of acute hyperammonemic episodes and seek medical care promptly. Adult patients should avoid long-term strict protein restriction leading to malnutrition. The frequency of blood ammonia and related metabolic monitoring should be determined by metabolic genetics specialists based on the patient's condition.",
      fertilityOrFamily:
        'This is an autosomal recessive disorder. When both parents are carriers, each pregnancy has a 25% chance of producing an affected child. Genetic counseling is recommended. After identifying the specific SLC25A15 gene mutations, prenatal diagnosis or preimplantation genetic testing (PGT) can guide family planning. Newborns should undergo blood ornithine screening as soon as possible after birth.',
      emergencySigns:
        'Acute encephalopathic symptoms such as drowsiness, irritability, vomiting, seizures, or consciousness disturbances suggest a possible hyperammonemic crisis and require immediate medical attention. Coagulation disorders (such as skin bruising or difficult-to-stop bleeding) indicate severe liver damage requiring urgent intervention.',
    },
    sources: [
      {
        name: 'GeneReviews: Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK97260/',
      },
      {
        name: 'NCBI GTR: Hyperornithinemia-hyperammonemia-homocitrullinuria syndrome',
        type: 'official',
        url: 'https://www.ncbi.nlm.nih.gov/gtr/conditions/C0268540/',
      },
    ],
    sourceName:
      'GeneReviews: Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK97260/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 349,
      name: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
      url: '/images/diseases/hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hyperphenylalaninemia',
    id: 51,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hyperphenylalaninemia',
    nameEn: 'Hyperphenylalaninemia',
    alias:
      'HPA, Hyperphenylalaninemia Syndrome, Tetrahydrobiopterin Deficiency, Phenylalanine Hydroxylase Deficiency',
    slug: 'hyperphenylalaninemia',
    oneSentence:
      'Hyperphenylalaninemia (HPA) is a group of common inherited amino acid metabolic disorders caused by deficiency of phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4), leading to elevated blood phenylalanine. This includes phenylketonuria (PKU) and other phenotypes.',
    plainName: 'Hyperphenylalaninemia',
    prevalence:
      'Incidence in Chinese newborns 1985-2011: approximately 1 in 10,397; varies widely across global regions',
    quickLook: {
      whatItIs:
        'Hyperphenylalaninemia (HPA) is the most common amino acid metabolic disorder caused by deficiency of phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4) in the phenylalanine metabolic pathway, leading to elevated blood phenylalanine (Phe). Listed in the first national Rare Disease Catalog in 2018. Classified into two main categories: PAH deficiency and BH4 deficiency, with different treatment approaches. Most commonly diagnosed through newborn screening; adult female patients often discovered during prenatal care or after giving birth to a child with abnormalities.',
      whoToSeeFirst:
        'Pediatrics, Medical Genetics/Metabolism, or Newborn Screening Follow-up Clinic',
      isGenetic: 'Yes, autosomal recessive inheritance',
      hasTreatment:
        'Yes, long-term dietary management, special medical foods, BH4 responsiveness assessment, and metabolic follow-up plans exist. PAH deficiency and BH4-related disease pathways differ, requiring newborn screening/genetic metabolism team for differentiation.',
      commonDelayReason:
        'Asymptomatic in neonatal period, easily overlooked; mild cases have subtle symptoms, often mistaken for slow development or behavioral problems',
    },
    patientJourney: {
      whenToSuspect: [
        'Newborn screening shows elevated blood phenylalanine',
        'Light skin coloration, hair turning from black to yellow',
        'Mouse-like (musty) odor in urine and sweat',
        'Intellectual developmental delay or regression',
        'Seizures, microcephaly',
        'Behavioral abnormalities (hyperactivity, self-harm, aggression)',
        'Repeated vomiting, feeding difficulties, eczema in infancy',
      ],
      commonWrongTurns: [
        'Mild cases delayed due to subtle symptoms',
        'Focusing only on hair and skin color while ignoring cognitive development assessment',
        'Failure to distinguish PAH deficiency from BH4 deficiency, leading to inappropriate treatment choice',
        'Irregular dietary management causing blood Phe fluctuations',
        'Behavioral problems in childhood misattributed to psychological issues',
      ],
      firstDepartments: [
        'Pediatrics or Medical Genetics/Metabolism (priority visit)',
        'Newborn Screening Follow-up Clinic',
        'Pediatric Neurology (when seizures or developmental delay occur)',
        'Pediatric Rehabilitation (developmental support)',
      ],
      diagnosisChecklist: [
        'Blood phenylalanine (Phe) concentration (elevation defined as >120 μmol/L)',
        'Blood phenylalanine/tyrosine ratio (Phe/Tyr > 2.0)',
        'Urine pterin profile analysis (to differentiate BH4 deficiency)',
        'BH4 loading test (to determine BH4-responsiveness)',
        'PAH and related gene testing',
        'EEG (when seizures occur)',
        'Cranial MRI (to assess brain development)',
        'Developmental quotient or IQ assessment',
      ],
      testsToAskAbout: [
        'Current blood phenylalanine concentration and target range',
        'Whether BH4-responsive',
        'PAH gene mutation type',
        'Developmental assessment results',
        'Whether EEG and cranial MRI are needed',
      ],
      questionsForDoctor: [
        'What is the current blood phenylalanine range? What are the target values for different ages?',
        'Does my child have PAH deficiency or BH4 deficiency? Is BH4 supplementation needed?',
        'How specifically to implement the low-phenylalanine diet? How long does it need to be followed?',
        'How to apply for, purchase, and follow up on special medical foods and nutritional support?',
        "What is my child's current intellectual development level? What rehabilitation support is needed?",
        'If we want a second child, what genetic preparation is needed?',
      ],
    },
    medicalSections: {
      symptoms:
        'PAH deficiency (phenylketonuria type): Mostly asymptomatic in neonatal period; 3-4 months after birth, hair gradually turns from black to yellow, skin becomes lighter, urine and sweat develop a mousy odor. With age, intellectual developmental delay, microcephaly, seizures, and behavioral, personality, and cognitive abnormalities may occur (such as hyperactivity, self-harm, aggression, autism spectrum tendencies). BH4 deficiency: In addition to the above symptoms, may also present with sleepiness or insomnia, movement disorders, swallowing difficulties, reduced muscle tone, nystagmus; the condition is often more severe than PAH deficiency. Vomiting and eczema are also common in infancy.',
      diagnosis:
        'Newborn screening is the primary early detection method, detecting blood Phe concentration and Phe/Tyr ratio. Diagnosis requires exclusion of transient hyperphenylalaninemia and clarification of PAH vs BH4 deficiency. Urine pterin profile analysis and BH4 loading test are key examinations to differentiate the two types. Genetic testing (PAH, PTS, QDPR, DNAJC12 and other genes) can identify specific mutation types, guiding treatment and prognosis.',
      treatment:
        'Management depends on PAH deficiency, BH4-related disease, or other causes. Common pathways include low-phenylalanine diet, special medical foods, blood phenylalanine monitoring, BH4 responsiveness assessment, and neurodevelopmental follow-up. Strict metabolic specialist management is needed before and during pregnancy. Do not adjust diet or supplements based on online target values without medical supervision.',
      longTermCare:
        'Lifetime follow-up of blood phenylalanine concentration is needed; monthly monitoring recommended for infants under 1 year, every 3 months after age 1. Dietary management is a long-term task; special formula and low-protein foods need continuous use. Parents need to learn to prepare low-Phe recipes while ensuring balanced nutrition (pay special attention to tyrosine supplementation, as it becomes an essential amino acid). Regular assessment of intellectual, motor, and language development in childhood; timely rehabilitation training when needed. Pay attention to dental health (especially important for BH4 deficiency patients). Adults planning pregnancy should undergo genetic counseling and optimize blood Phe control beforehand.',
      fertilityOrFamily:
        'This is an autosomal recessive disorder. When both parents are carriers, each pregnancy has a 25% chance of having an affected child. Genetic counseling is recommended. After identifying the mutation sites, prenatal diagnosis or PGT can be performed. Female patients need strict blood Phe control during pregnancy, which is crucial for fetal neurological development. Parents of children with hyperphenylalaninemia who wish to have another child are strongly advised to complete genetic counseling before attempting pregnancy.',
      emergencySigns:
        'Uncontrolled seizures, altered consciousness, or developmental regression suggest poor blood Phe control or other metabolic issues; urgent follow-up is needed. Repeated infections, severe vomiting, diarrhea, or food refusal require monitoring of acid-base balance and nutritional status; hospitalization may be needed to adjust dietary plan.',
    },
    sources: [
      {
        name: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
      },
      {
        name: 'MedlinePlus Genetics: Phenylketonuria',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/phenylketonuria/',
      },
    ],
    sourceName: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 350,
      name: 'hyperphenylalaninemia-journey.png',
      url: '/images/diseases/hyperphenylalaninemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hypophosphatasia',
    id: 52,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hypophosphatasia',
    nameEn: 'Hypophosphatasia',
    alias: 'Hypophosphatasia, HPP, Hereditary Hypophosphatasia',
    slug: 'hypophosphatasia',
    oneSentence:
      'Hypophosphatasia is a rare single-gene inherited disorder caused by ALPL gene mutations that reduce alkaline phosphatase activity, leading to impaired bone and tooth mineralization. It was included in the first national Rare Disease Catalog in 2018.',
    plainName: 'Hypophosphatasia',
    prevalence:
      'Severe form incidence is approximately 1/100,000; milder forms have higher incidence; classified as a rare disease in China',
    quickLook: {
      whatItIs:
        "Hypophosphatasia (HPP) is caused by mutations in the ALPL gene (also called TNSALP gene), which encodes tissue-nonspecific alkaline phosphatase. The gene mutation leads to significantly reduced alkaline phosphatase (ALP) activity in the body, causing abnormal accumulation of its substrates (including inorganic pyrophosphate and pyridoxal 5'-phosphate), which in turn causes bone and tooth mineralization defects and may affect multiple organs. It follows autosomal dominant or autosomal recessive inheritance, with autosomal recessive cases typically being more severe. It was included in the first national Rare Disease Catalog in 2018.",
      whoToSeeFirst:
        'Pediatrics, Orthopedics (when skeletal symptoms are prominent), or Dentistry (for dental symptoms)',
      isGenetic: 'Yes, autosomal dominant or autosomal recessive inheritance',
      hasTreatment:
        'Enzyme replacement therapy is available for severe childhood forms, along with multidisciplinary supportive management. However, whether treatment is suitable, when to use it, and how to monitor it requires evaluation by a metabolic bone disease/endocrinology/orthopedics team.',
      commonDelayReason:
        'Clinical presentation varies widely, from early tooth loss to neonatal fatality, a very broad spectrum; mild cases are easily mistaken for ordinary osteoporosis or dental problems',
    },
    patientJourney: {
      whenToSuspect: [
        'Premature loss of baby teeth before ages 1-3 (usually starting with incisors)',
        'Short stature in children, skeletal deformities, or rickets',
        'Recurrent fractures or bone pain with slow healing',
        'Unexplained reduced bone mineralization',
        'Craniosynostosis or increased intracranial pressure in infancy',
        'Adult patients with unexplained osteomalacia or pseudofractures',
        'Persistently low alkaline phosphatase (ALP)',
      ],
      commonWrongTurns: [
        'Early tooth loss being mistaken for ordinary oral problems or periodontal disease',
        "Children's fractures being mistaken for trauma or ordinary osteoporosis",
        'Skeletal deformities being misdiagnosed as rickets or other metabolic bone diseases',
        'Adult form being mistaken for ordinary osteoporosis or arthritis',
        'Only focusing on calcium and phosphorus levels without checking ALP',
        'Prenatal/perinatal form being mistaken for other life-threatening conditions due to critical illness',
      ],
      firstDepartments: [
        'Pediatrics or Genetics/Metabolism Department (preferred first visit)',
        'Pediatric Orthopedics (when skeletal symptoms are prominent)',
        'Dentistry (when dental symptoms are prominent)',
        'Orthopedics or Endocrinology (adult patients)',
        'Neonatology (prenatal or infant-onset)',
      ],
      diagnosisChecklist: [
        'Serum alkaline phosphatase (ALP) measurement (persistently low is the core indicator)',
        'Blood calcium, phosphorus, parathyroid hormone (PTH)',
        'ALPL gene molecular testing (important confirmatory evidence)',
        'Urine phosphoethanolamine (PEA) testing (characteristic metabolite of HPP)',
        "Blood pyridoxal 5'-phosphate (PLP) testing (elevated levels support diagnosis)",
        'Skeletal X-rays (to assess mineralization degree and bone deformities)',
        'Panoramic dental X-ray (to assess tooth structure)',
        'Bone mineral density testing (to assess fracture risk)',
      ],
      testsToAskAbout: [
        'The specific ALP value',
        'Whether ALPL gene testing was performed',
        'Results of skeletal X-ray or bone density testing',
        'Blood calcium, phosphorus, and PTH levels',
        'The specific circumstances and cause of tooth loss',
      ],
      questionsForDoctor: [
        'How low does ALP need to be to confirm HPP? Does the test need to be repeated?',
        'What is the current skeletal development status of my child? What should we pay special attention to?',
        'Is enzyme replacement therapy (asfotase alfa) needed?',
        'What special precautions are needed for dental care?',
        'How can we prevent fractures in daily life? Are there any restrictions on exercise and diet?',
        'If parents want to have another child, what genetic preparation is needed?',
      ],
    },
    medicalSections: {
      symptoms:
        'Clinical manifestations are diverse and classified into six types based on age of onset: Prenatal form (lethal type, onset in utero, severe bone mineralization defects, most die perinatally); Benign prenatal form (skeletal deformities present in utero but improve after birth); Infantile form (onset within 6 months after birth, presenting with poor feeding, hypotonia, craniosynostosis, respiratory abnormalities, fractures; higher mortality rate before 6 months); Childhood form (onset after 6 months, most complex presentation, with early tooth loss, short stature, rickets, bone pain, recurrent fractures, waddling gait); Adult form (dental abnormalities, osteomalacia, recurrent fractures, musculoskeletal pain, muscle weakness; easily confused with osteoporosis); Odontohypophosphatasia (mildest type, only presenting with early loss of baby or permanent teeth, usually without skeletal system abnormalities).',
      diagnosis:
        'Core laboratory indicator is persistently low serum ALP, while excluding secondary factors (such as vitamin D deficiency, hypothyroidism, etc.). Diagnosis relies on ALPL gene testing. X-rays may show reduced bone mineralization, skeletal deformities, and fractures. Bone mineral density testing shows reduced bone mass or osteoporosis. Elevated urine PEA and blood PLP have reference value for diagnosis.',
      treatment:
        'Management depends on age of onset and severity. Severe perinatal, infantile, or childhood forms may be evaluated for enzyme replacement therapy by specialists; all patients need bone, dental, pain, renal calcium-phosphorus metabolism, and rehabilitation support. Calcium, vitamin D, osteoporosis medications, or surgical interventions should be evaluated by a team familiar with HPP, and should not be self-managed based on ordinary rickets or osteoporosis guidelines.',
      longTermCare:
        'Requires multidisciplinary long-term follow-up: Orthopedics (fracture prevention and deformity correction), Dentistry (tooth protection, developing professional oral hygiene habits, avoiding unnecessary extractions), Rehabilitation (exercise guidance, maintaining safe activity levels), Nutrition (balanced nutrition, avoiding malnutrition). Patients and caregivers need to understand fracture risk and ensure safe activity environments. Adult patients should pay attention to pseudofractures and bone pain. ALP, bone density, and X-ray tests should be followed up regularly; specific frequency is determined by the specialist team based on age, disease status, and treatment plan.',
      fertilityOrFamily:
        'This disease can follow autosomal dominant or autosomal recessive inheritance. Genetic counseling is recommended. After identifying the ALPL gene mutation type, prenatal diagnosis or PGT can be performed. For dominant inheritance, each pregnancy has a 50% chance of inheriting the mutation, but disease severity may differ from the parent; recessive inheritance typically results in more severe disease. If there is already an affected patient in the family, consult your doctor about whether gene screening and ALP testing for other family members is appropriate.',
      emergencySigns:
        'Infantile form presenting with difficulty breathing, cyanosis, or recurrent apnea suggests severe respiratory system involvement and requires immediate medical attention. Fractures that are difficult to heal, worsening skeletal deformities, or new fractures suggest skeletal system deterioration and require prompt evaluation. Seizures suggest possible vitamin B6 metabolism abnormality (specific to infantile form) and require urgent management. Gum infections may spread to the alveolar bone and require emergency dental care.',
    },
    sources: [
      {
        name: 'GeneReviews: Hypophosphatasia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
      },
      {
        name: 'MedlinePlus Genetics: Hypophosphatasia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/hypophosphatasia/',
      },
    ],
    sourceName: 'GeneReviews: Hypophosphatasia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 351,
      name: 'hypophosphatasia-journey.png',
      url: '/images/diseases/hypophosphatasia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-hypophosphatemic-rickets',
    id: 53,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Hypophosphatemic Rickets',
    nameEn: 'Hypophosphatemic Rickets',
    alias: 'Hypophosphatemic Rickets, X-linked Hypophosphatemia (XLH)',
    slug: 'hypophosphatemic-rickets',
    oneSentence:
      'Hypophosphatemic rickets is a group of inherited or acquired diseases in which excessive phosphate loss by the kidneys leads to low blood phosphate levels, causing impaired bone mineralization; it presents as rickets in children and osteomalacia in adults.',
    plainName: 'Hypophosphatemic Rickets',
    prevalence:
      'Incidence is approximately 3.9 per 100,000, with a prevalence of about 1 in 21,000; XLH accounts for more than 80% of inherited hypophosphatemic rickets.',
    quickLook: {
      whatItIs:
        'Hypophosphatemic rickets is a group of bone mineralization disorders characterized by low blood phosphate levels. Mutations in genes such as PHEX, FGF23, and DMP1, or acquired causes, lead to abnormal levels of phosphate-regulating factor fibroblast growth factor 23 (FGF23), reduced kidney reabsorption of phosphate, low blood phosphate, and impaired bone mineralization. In children, it manifests as rickets (square head, pigeon chest, O-leg or X-leg deformities, etc.); in adults, it manifests as osteomalacia (fatigue, bone pain, multiple fractures, shortened height).',
      whoToSeeFirst:
        'For children, it is recommended to first visit a pediatric endocrinology or pediatric genetics/metabolism department; adults can visit an endocrinology, bone metabolism, or nephrology department. Orthopedics can provide evaluation if there are bone deformities or mobility limitations. Some patients may consider multidisciplinary (MDT) clinics.',
      isGenetic:
        'Yes, inherited hypophosphatemic rickets is mostly X-linked dominant (XLH, caused by PHEX gene mutations), with autosomal dominant/recessive forms also existing. Acquired hypophosphatemic osteomalacia is most commonly tumor-related (TIO).',
      hasTreatment:
        'There is long-term management, including phosphate metabolism monitoring, traditional treatment or targeted therapy evaluation, orthopedic and dental follow-up. Whether specific treatment is suitable must be determined by pediatric/adult endocrinology, nephrology, or bone metabolism specialists.',
      commonDelayReason:
        'The presentation of hypophosphatemic rickets is similar to nutritional rickets; primary care physicians often lack awareness of inherited rickets and may misdiagnose it as ordinary vitamin D deficiency rickets, leading to delayed appropriate treatment. Some patients with milder symptoms are only diagnosed in adulthood.',
    },
    patientJourney: {
      whenToSuspect: [
        'Bone deformities such as square head, pigeon chest, rib beading, and leg bowing (O-leg or X-leg) in childhood',
        'Slowed growth in height; X-ray of long bones showing widened, blurred metaphyses with frayed cupping',
        'Persistently low blood phosphate, significantly elevated blood alkaline phosphatase, but normal blood calcium, vitamin D, and parathyroid hormone levels',
        'Family history of rickets or osteomalacia',
        'Fatigue, bone pain, multiple pseudofractures, and gradual height loss in adults',
        'Poor response to standard calcium or vitamin D supplementation for rickets',
      ],
      commonWrongTurns: [
        'Misdiagnosis as nutritional vitamin D deficiency rickets based solely on clinical presentation, with only calcium or regular vitamin D supplementation',
        'Neglecting to take a detailed family history and perform genetic testing to identify the underlying cause',
        'Failure to systematically differentiate causes of hypophosphatemia, missing inherited or tumor-related possibilities',
        'For acquired hypophosphatemic osteomalacia, failing to actively search for tumor-related clues, delaying treatment of the underlying cause',
      ],
      firstDepartments: [
        'Pediatric endocrinology or pediatric genetics/metabolism (children)',
        'Endocrinology or bone metabolism (adults)',
        'Orthopedics (significant bone deformities or surgical evaluation needed)',
        'Nephrology (suspected kidney disease causing phosphate metabolism abnormalities)',
        'Pediatric urology/andrology or reproductive endocrinology (for gonadal function assessment)',
      ],
      diagnosisChecklist: [
        'Detailed medical history: age of onset, growth and development history, family history',
        'Serum biochemical tests: blood phosphate, calcium, alkaline phosphatase, serum FGF23, 25-hydroxyvitamin D, parathyroid hormone',
        'Urine phosphate test: calculate tubular phosphate reabsorption rate (TmP/GFR)',
        'Imaging: X-ray of long bones (assess rickets changes), bone CT/MRI (if needed)',
        'Genetic testing: for suspected inherited hypophosphatemic rickets, test genes such as PHEX, FGF23, DMP1, ENPP1, SLC34A3',
        'Tumor screening: for suspected TIO, perform imaging to locate the causative tumor',
      ],
      testsToAskAbout: [
        'Serum phosphate, calcium, alkaline phosphatase',
        '25-hydroxyvitamin D and parathyroid hormone',
        'Urine phosphate and tubular phosphate reabsorption rate',
        'Serum FGF23 level',
        'X-ray of long bones',
        'Genetic testing (PHEX, etc.)',
      ],
      questionsForDoctor: [
        "Are my child's bone deformities due to hypophosphatemic rickets or ordinary nutritional rickets? What tests are needed for diagnosis?",
        'Does my child need genetic testing? Should other children in the family be tested?',
        'What long-term medications will my child need? What are the side effects?',
        'What should my child eat? Should activity be restricted?',
        'Do I need to continue treatment and follow-up after reaching adulthood?',
        'If I want to have another child, do I need prenatal counseling?',
      ],
    },
    medicalSections: {
      symptoms:
        'In childhood, the main manifestations are rickets signs: square head, pigeon chest, rib beading, rib flaring, limb bowing (O-leg or X-leg), growth retardation, short stature. In adulthood, osteomalacia manifests: fatigue, body shape changes, shortened height, multiple bone pains, pseudofractures, even limited mobility. Dental development abnormalities are also common, including poor tooth quality, toothaches, and easy tooth loss. Complications may include secondary hyperparathyroidism, osteoarthritis, enthesopathy, spinal stenosis, and hearing loss. XLH patients often have spontaneous dental abscesses.',
      diagnosis:
        'Diagnosis requires combining clinical presentation, biochemical tests, imaging, and genetic testing. Typical findings include hypophosphatemia with reduced tubular phosphate reabsorption rate, elevated blood alkaline phosphatase, and normal blood calcium. X-ray shows characteristic rickets changes. Genetic testing can identify the specific type and inheritance pattern, which is valuable for family genetic counseling. Acquired hypophosphatemic osteomalacia requires active tumor screening.',
      treatment:
        'Treatment goals are to improve phosphate metabolism, bone mineralization, pain and function, and prevent long-term complications. Management may include traditional phosphate/active vitamin D regimens or FGF23-targeted therapy evaluation, along with monitoring of blood phosphate, calcium, urine calcium, parathyroid hormone, kidney, and dental issues. Specific medications, dosages, eligible populations, and monitoring frequency should be determined by a specialist team familiar with hypophosphatemic rickets.',
      longTermCare:
        'Hypophosphatemic rickets is a chronic disease requiring long-term, often lifelong, management. In childhood, regular monitoring of growth and development indicators, blood phosphate and calcium, and bone imaging is needed to adjust medications promptly. Adults still need ongoing treatment and follow-up, focusing on bone complications (such as osteoarthritis, fractures), dental health, and hearing changes. Avoid high-impact sports to reduce fracture risk. Genetic counseling and prenatal diagnosis are helpful for family planning. Regular psychological health assessment is important, focusing on quality of life for patients and families.',
      fertilityOrFamily:
        'Most patients with hypophosphatemic rickets can have normal marriages and children. XLH is X-linked dominant; theoretically, male patients will pass the variant to all daughters but not to sons; female patients have a 50% chance of passing the variant to children. For patients whose condition is well-controlled with treatment, pregnancy risks are manageable. Genetic counseling is recommended before planning pregnancy. If there are fertility difficulties in adulthood, reproductive endocrinology or urology can be consulted for assisted reproductive technology options.',
      emergencySigns:
        'Seek medical attention promptly if: unexplained multiple fractures or pseudofractures acutely worsen; severe bone pain affects daily activities; seizure-like episodes occur (be alert for metabolic crises such as hypocalcemia); rapid changes in hearing or vision; severe gastrointestinal discomfort or hypercalcemia occurs after taking oral phosphate preparations.',
    },
    sources: [
      {
        name: 'GeneReviews: X-Linked Hypophosphatemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK83985/',
      },
      {
        name: 'MedlinePlus Genetics: X-linked hypophosphatemia',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/x-linked-hypophosphatemia/',
      },
    ],
    sourceName: 'GeneReviews: X-Linked Hypophosphatemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK83985/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 352,
      name: 'hypophosphatemic-rickets-journey.png',
      url: '/images/diseases/hypophosphatemic-rickets-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-idiopathic-cardiomyopathy',
    id: 54,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
    name: 'Idiopathic Cardiomyopathy',
    nameEn: 'Idiopathic Cardiomyopathy',
    alias:
      'Idiopathic Dilated Cardiomyopathy (IDC), Familial Dilated Cardiomyopathy (FDCM), Arrhythmogenic Right Ventricular Dysplasia/Cardiomyopathy (ARVC), Left Ventricular Noncompaction (LVNC), Hereditary Transthyretin-Related Amyloidosis (hATTR)',
    slug: 'idiopathic-cardiomyopathy',
    oneSentence:
      'Idiopathic cardiomyopathy is a group of myocardial diseases diagnosed after excluding clearly identifiable secondary causes, which may present with heart failure, arrhythmias, conduction abnormalities, or sudden death risk, and may have a genetic background.',
    plainName: 'Idiopathic Cardiomyopathy',
    prevalence:
      'The prevalence of idiopathic dilated cardiomyopathy (DCM) is approximately 36.5/100,000 (about 1/2,700), with about 20-35% being familial. The prevalence of arrhythmogenic right ventricular cardiomyopathy (ARVC) is approximately 1/2,000 to 1/1,000. The estimated prevalence of restrictive cardiomyopathy is approximately 1/100,000 to 9/100,000. The detection rate of left ventricular noncompaction by echocardiography is approximately 1.4/10,000.',
    quickLook: {
      whatItIs:
        'This is a group of heterogeneous myocardial diseases, not a single diagnosis. Doctors need to differentiate between dilated, hypertrophic, restrictive, arrhythmogenic, left ventricular noncompaction, and other types, and exclude secondary causes such as ischemia, valvular disease, toxins, infections, inflammation, and endocrine disorders.',
      whoToSeeFirst:
        'When symptoms of heart failure such as palpitations, chest tightness, fatigue, or shortness of breath occur, it is recommended to first visit the department of cardiovascular medicine or a heart failure specialty clinic. For patients with a clear family history or known gene mutation carriers, genetic counseling and family screening are recommended in addition to the cardiovascular department. When severe heart failure or heart transplant is being considered, patients should visit a center with heart transplant qualifications.',
      isGenetic:
        'Yes, most idiopathic cardiomyopathies have a genetic background. Familial dilated cardiomyopathy is mostly autosomal dominant, with more than 30 related genes identified (such as TTN, LMNA, MYH7, etc.). Arrhythmogenic right ventricular cardiomyopathy is also primarily autosomal dominant. Some types (such as transthyretin-related amyloidosis) are autosomal dominant.',
      hasTreatment:
        'Yes, there are management pathways for heart failure, arrhythmias, thrombosis, genetic risk, and end-stage heart failure, but treatment depends on the specific type of cardiomyopathy, cardiac function, arrhythmia risk, and genetic results.',
      commonDelayReason:
        'Early heart failure symptoms are often atypical (fatigue, decreased exercise tolerance) and are easily mistaken for work fatigue or age-related changes. Some patients present with arrhythmias or sudden death as the first manifestation, missing the opportunity for early intervention. Incomplete family history collection leads to missed family screening, preventing timely identification of familial cases.',
    },
    patientJourney: {
      whenToSuspect: [
        'Unexplained chest tightness, palpitations, fatigue, or decreased exercise tolerance without obvious triggers',
        'Signs of heart failure such as lower extremity edema or paroxysmal nocturnal dyspnea',
        'ECG or echocardiography showing ventricular enlargement or decreased systolic function',
        'Recurrent palpitations, syncope, or presyncope suggesting arrhythmias',
        'Unexplained family history of heart failure, or first-degree relatives with sudden death before age 50',
        'Young patients with ventricular enlargement or decreased cardiac function that cannot be explained by other causes',
      ],
      commonWrongTurns: [
        'Mistaking early heart failure symptoms for work fatigue or aging, delaying medical consultation',
        'Only treating symptoms after discovering ventricular enlargement, without performing cause analysis or genetic testing',
        'Neglecting family history inquiry and failing to perform clinical screening for first-degree relatives',
        'Failing to identify reversible secondary factors (such as long-term heavy alcohol consumption, certain chemotherapy drugs), missing targeted interventions',
        'Focusing only on cardiac function while neglecting conduction abnormalities and sudden death risk assessment',
      ],
      firstDepartments: [
        'Department of Cardiovascular Medicine or Heart Failure/Cardiomyopathy Specialty',
        'Cardiac Electrophysiology Department (when arrhythmia symptoms occur)',
        'Genetic Counseling Department or Medical Genetics Department (when gene testing and family consultation are needed)',
        'Cardiac Imaging Department (cardiac magnetic resonance evaluation)',
        'Cardiac Surgery Department (when device therapy or transplant evaluation is being considered)',
      ],
      diagnosisChecklist: [
        'Detailed medical history and family history (tracing at least 3 generations)',
        'Physical examination: heart rate, blood pressure, jugular venous distension, lung crackles, heart murmurs, hepatomegaly, lower extremity edema, etc.',
        '12-lead ECG: evaluation of rhythm, conduction block, ST-T changes, abnormal Q waves, etc.',
        'Echocardiography: evaluation of chamber size, wall thickness, left ventricular ejection fraction (LVEF), valve function, etc.',
        'Cardiac magnetic resonance (CMR): precise evaluation of myocardial fibrosis, viable myocardium, and morphological changes',
        'Laboratory tests: NT-proBNP/BNP, cardiac enzymes, electrolytes, liver and kidney function, thyroid function, etc.',
        'Genetic testing: gene panel testing for suspected hereditary cardiomyopathy',
        'Coronary angiography or coronary CT: to exclude ischemic cardiomyopathy',
        'Family screening: clinical evaluation and echocardiography screening for first-degree relatives',
      ],
      testsToAskAbout: [
        'Echocardiography (LVEF, chamber size)',
        'ECG',
        'NT-proBNP or BNP',
        'Cardiac magnetic resonance (CMR)',
        'Genetic testing (cardiomyopathy gene panel)',
        'Coronary angiography or coronary CT',
      ],
      questionsForDoctor: [
        'What type of cardiomyopathy do I have? Is there a clear genetic mutation?',
        'Is this condition hereditary? What tests do my family members need?',
        'How serious is my condition? What stage is my cardiac function at?',
        'What medications and treatment options are available? Do I need a pacemaker or ICD?',
        'What should I pay attention to in daily life? Can I still work or exercise?',
        'Can I still become pregnant and have children?',
      ],
    },
    medicalSections: {
      symptoms:
        'Symptoms of idiopathic cardiomyopathy depend on the specific type and severity. Early dilated cardiomyopathy may be asymptomatic, gradually presenting with fatigue, decreased exercise tolerance, palpitations, chest tightness; severe cases develop paroxysmal nocturnal dyspnea, orthopnea, lower extremity edema, and other heart failure manifestations. Arrhythmogenic right ventricular cardiomyopathy primarily presents with palpitations, syncope, presyncope, and sustained ventricular tachycardia, which may be accompanied by systemic embolic events. Restrictive cardiomyopathy is mainly right-sided heart failure, presenting with jugular venous distension, ascites, lower extremity edema, but with relatively preserved left ventricular systolic function. Left ventricular noncompaction can present with heart failure, arrhythmias, and thromboembolism. Hereditary transthyretin-related amyloidosis is characterized by progressive heart failure and peripheral neuropathy.',
      diagnosis:
        'Diagnosis of idiopathic cardiomyopathy first requires exclusion of secondary causes (such as ischemia, hypertension, valvular disease, alcoholic cardiomyopathy, chemotherapy drugs, etc.), then comprehensive evaluation through clinical manifestations, imaging examinations (echocardiography, cardiac magnetic resonance), ECG, and genetic testing. Diagnostic criteria for dilated cardiomyopathy include left ventricular enlargement with systolic dysfunction after excluding secondary causes. Diagnosis of familial dilated cardiomyopathy requires detailed investigation of family history spanning more than 3 generations and clinical screening of first-degree relatives. Genetic testing has important value in clarifying diagnosis, family management, and risk stratification.',
      treatment:
        'Treatment requires first clarifying the type of cardiomyopathy and risk stratification. Management may include heart failure medications, arrhythmia management, anticoagulation assessment, implantable devices, rehabilitation, family screening, and end-stage heart failure treatment evaluation. Specific medications, devices, and whether to refer to a transplant/ventricular assist device center need to be individualized by cardiovascular specialists based on examination results.',
      longTermCare:
        'Idiopathic cardiomyopathy usually requires long-term follow-up. Key focus areas include cardiac function, arrhythmias, medication tolerance, device indications, exercise and pregnancy risks, psychological support, and first-degree relative screening. When there is sudden change in weight, symptoms, or exercise tolerance, patients should follow the heart failure or arrhythmia plan provided by their doctor.',
      fertilityOrFamily:
        'Pregnancy requires careful assessment for female patients with idiopathic cardiomyopathy. Pregnancy increases cardiovascular load; patients with normal cardiac function and mild disease may conceive under close monitoring by cardiology and obstetrics, but patients with moderate to severe cardiac dysfunction face significantly increased pregnancy risks. Children of patients with hereditary cardiomyopathy have genetic risk, and genetic counseling is recommended. Family members known to carry pathogenic genes should undergo genetic testing and regular cardiac monitoring for early identification and intervention.',
      emergencySigns:
        'Seek immediate medical attention in the following situations: sudden severe chest pain or tightness (to exclude acute coronary events); sudden palpitations accompanied by dizziness, presyncope, or loss of consciousness (suspected severe arrhythmia); sudden worsening of shortness of breath, inability to lie flat, or coughing pink frothy sputum (acute pulmonary edema); rapid worsening of lower extremity edema accompanied by decreased urine output (worsening heart failure); sudden unilateral limb weakness or speech difficulty (to exclude thromboembolic events).',
    },
    sources: [
      {
        name: 'GeneReviews: Dilated Cardiomyopathy Overview',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
      },
      {
        name: 'GeneReviews: LMNA-Related Dilated Cardiomyopathy',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1674/',
      },
      {
        name: 'MedlinePlus Genetics: Familial dilated cardiomyopathy',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/familial-dilated-cardiomyopathy/',
      },
    ],
    sourceName: 'GeneReviews: Dilated Cardiomyopathy Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 353,
      name: 'idiopathic-cardiomyopathy-journey.png',
      url: '/images/diseases/idiopathic-cardiomyopathy-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    createdAt: '2026-05-01T00:00:00.000Z',
    documentId: 'disease-idiopathic-hypogonadotropic-hypogonadism',
    id: 55,
    publishedAt: '2026-05-01T00:00:00.000Z',
    updatedAt: '2026-05-01T00:00:00.000Z',
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
    ],
    sourceName:
      'GeneReviews: Isolated Gonadotropin-Releasing Hormone Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1334/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 354,
      name: 'idiopathic-hypogonadotropic-hypogonadism-journey.png',
      url: '/images/diseases/idiopathic-hypogonadotropic-hypogonadism-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
];

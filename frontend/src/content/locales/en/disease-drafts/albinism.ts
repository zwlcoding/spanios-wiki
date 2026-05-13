import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlbinism: DiseaseDraft = {
  ...entity(5, 'disease-albinism'),
  name: 'Albinism',
  nameEn: 'Albinism',
  alias:
    'Oculocutaneous albinism, OCA, Ocular albinism, OA, Congenital pigment deficiency',
  slug: 'albinism',
  oneSentence:
    'Albinism is a group of genetic disorders related to abnormal melanin synthesis or distribution, commonly affecting skin, hair, and eye pigmentation, and may be accompanied by vision development issues and ultraviolet sensitivity.',
  plainName: 'A genetic condition with reduced pigment in skin, hair, and eyes',
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
};

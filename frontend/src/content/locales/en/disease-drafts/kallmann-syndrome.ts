import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseKallmannSyndrome: DiseaseDraft = {
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
};

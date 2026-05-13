import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFragileXSyndrome: DiseaseDraft = {
  ...entity(2029, 'disease-fragile-x-syndrome'),
  name: 'Fragile X syndrome',
  nameEn: 'Fragile X syndrome',
  alias:
    'FXS, Martin-Bell syndrome, FMR1-related fragile X syndrome, China Second Rare Disease Catalog item 29',
  slug: 'fragile-x-syndrome',
  oneSentence:
    'Fragile X syndrome is an FMR1 CGG-repeat expansion disorder that can cause speech and cognitive delay, learning difficulties, attention and behavioral challenges, and autism-spectrum features.',
  plainName:
    'An FMR1-related genetic condition that affects development, learning, and behavior',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics describes a frequency of about 1 in 4,000 males and 1 in 8,000 females.",
  quickLook: {
    whatItIs:
      'When the FMR1 CGG repeat expands beyond 200 copies, the gene is usually silenced and too little FMRP is made. This affects synapse development, learning, and memory. Boys are often more severely affected than girls.',
    whoToSeeFirst:
      'A child with marked speech delay by around age 2, developmental delay, attention or behavior problems, or autism-spectrum features should see developmental pediatrics, pediatric neurology, rehabilitation, and genetics.',
    isGenetic:
      'Fragile X is X-linked. Premutation carriers may not have FXS but can have risks related to children with full mutation, primary ovarian insufficiency, or adult tremor/ataxia syndrome.',
    hasTreatment:
      'There is no curative medicine for FXS. Care focuses on early intervention, speech, occupational and behavioral therapies, special education, and management of seizures, anxiety, ADHD, sleep, and GI issues.',
    commonDelayReason:
      'Early signs may be labeled as late talking, developmental delay, autism, or ADHD. Family history of developmental disability, early ovarian insufficiency, or adult tremor/ataxia should prompt FMR1 testing.',
  },
  patientJourney: {
    whenToSuspect: [
      'A baby or child has significant speech delay, learning difficulty, intellectual disability, or social-communication challenges.',
      'There is inattention, hyperactivity, anxiety, sensory sensitivity, repetitive behavior, hand flapping, or autism-spectrum features.',
      'A boy has features such as a long face, large ears, loose joints, flat feet, or enlarged testes after puberty.',
      'Family history includes unexplained intellectual disability, developmental delay, early ovarian insufficiency, or adult tremor/ataxia.',
    ],
    commonWrongTurns: [
      'Treating only autism, ADHD, or speech delay without looking for a genetic explanation that affects family risk.',
      'Assuming genetics is negative after routine chromosome or exome testing and missing FMR1 repeat-expansion testing.',
      'Focusing only on the child and not counseling maternal relatives about premutation-related risks.',
      'Waiting to see if the child catches up and missing early therapy and school-support windows.',
    ],
    firstDepartments: [
      'Developmental-behavioral pediatrics',
      'Pediatric neurology',
      'Rehabilitation medicine',
      'Genetic counseling',
    ],
    diagnosisChecklist: [
      'Bring a timeline of speech, motor, social, learning, and behavior milestones plus school or therapy records.',
      'Record seizures, sleep, anxiety, hyperactivity, GI symptoms, feeding, and sensory sensitivity.',
      'Collect family history of developmental delay, intellectual disability, early ovarian insufficiency, tremor, or ataxia.',
      'Bring developmental testing, EEG, hearing, vision, and genetic testing reports.',
    ],
    testsToAskAbout: [
      'FMR1 CGG repeat-expansion testing and methylation analysis, the core diagnostic tests for FXS.',
      'Developmental, cognitive, adaptive behavior, speech-language, autism-spectrum, and ADHD evaluations.',
      'EEG if seizures are suspected, plus hearing, vision, sleep, and GI assessment as needed.',
      'FMR1 premutation or full-mutation testing and genetic counseling for parents and at-risk relatives.',
    ],
    questionsForDoctor: [
      'Is the result a full mutation, premutation, or another FMR1 finding, and what does that mean for symptoms and family risk?',
      'Which early-intervention, school, and behavioral supports are priorities, and how will goals be measured?',
      'Do seizures, anxiety, ADHD, sleep, or GI symptoms need separate treatment?',
      'Which relatives should be tested, and what should female premutation carriers or adult male carriers watch for?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FXS commonly causes speech and cognitive delay, learning difficulty, inattention, hyperactivity, anxiety, sensory sensitivity, and social-communication difficulty. Some individuals have autism-spectrum features, and seizures can occur.</p><p>Physical features may become more apparent with age, including long face, large ears, prominent jaw or forehead, loose joints, flat feet, and enlarged testes after puberty in males. Females may be more mildly or atypically affected.</p>',
    diagnosis:
      '<p>Diagnosis relies on FMR1 CGG repeat-expansion testing and methylation analysis. A full mutation is usually more than 200 CGG repeats and silences FMR1; a premutation is usually 55-200 repeats and carries different carrier-related risks.</p><p>Clinicians also consider other causes of developmental delay, autism-spectrum disorder, intellectual disability, epilepsy syndromes, and chromosomal or single-gene conditions. Routine chromosome testing or exome sequencing may miss FMR1 repeat expansions.</p>',
    treatment:
      '<p>Care is supportive and focused on coexisting problems. Early speech therapy, occupational therapy, behavioral intervention, special education, and family training can help communication, learning, and daily function.</p><p>Clinicians may treat ADHD, anxiety, sleep problems, seizures, GI symptoms, or mood and behavior concerns when present. Goals should be adjusted over time based on age, function, and family needs.</p>',
    longTermCare:
      '<p>Long-term care includes developmental and learning reassessment, school support plans, behavioral and mental health care, puberty transition, vocational planning, and independent-living supports. Keep genetic and developmental reports for school and medical transitions.</p>',
    fertilityOrFamily:
      '<p>FMR1 genetic counseling is central. Female premutation carriers can have a risk of expansion to a full mutation in children and a risk of fragile X-associated primary ovarian insufficiency. Adult premutation carriers should also understand tremor/ataxia-related risks.</p><p>Families planning pregnancy can discuss carrier testing, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Seek urgent care for a first seizure, prolonged seizure, altered consciousness, serious self-injury or safety risk, dehydration, severe sleep-related safety issues, or severe medication adverse effects.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Fragile X syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/fragile-x-syndrome/',
    },
  ],
  symptoms:
    '<p>Common signs include speech and cognitive delay, learning difficulties, inattention, hyperactivity, anxiety, sensory sensitivity, autism-spectrum features, and sometimes seizures or characteristic physical features.</p>',
  diagnosis:
    '<p>Diagnosis uses FMR1 CGG repeat-expansion and methylation testing, together with developmental, cognitive, speech, autism-spectrum, and behavioral evaluations.</p>',
  treatment:
    '<p>There is no cure; care focuses on early intervention, speech, occupational and behavioral therapy, special education, and treatment of ADHD, anxiety, seizures, sleep, and other coexisting issues.</p>',
  prognosis:
    '<p>Outcomes vary widely. Early diagnosis, ongoing therapy, school support, and coexisting-problem management can improve communication, learning, and daily function, while genetic counseling reduces family diagnostic delays.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 383,
    name: 'fragile-x-syndrome-journey.png',
    url: '/images/diseases/fragile-x-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

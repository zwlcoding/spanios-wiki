import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNarcolepsy: DiseaseDraft = {
  ...entity(2052, 'disease-narcolepsy'),
  name: 'Narcolepsy',
  nameEn: 'Narcolepsy',
  alias:
    'Narcolepsy; daytime sleep disorder; China Second Rare Disease Catalog item 52',
  slug: 'narcolepsy',
  oneSentence:
    'Narcolepsy is a chronic sleep-wake regulation disorder marked by uncontrollable daytime sleepiness, sometimes with cataplexy, sleep paralysis, hallucinations, and fragmented nighttime sleep.',
  plainName: 'A sleep-wake brain regulation disorder',
  prevalence:
    "Included in China's second rare disease catalog; frequency varies by region, and mild or pediatric cases may be underdiagnosed.",
  quickLook: {
    whatItIs:
      'Narcolepsy causes strong daytime sleepiness and brief refreshing naps. Type 1 usually involves cataplexy or low cerebrospinal fluid hypocretin/orexin, while type 2 has no cataplexy and usually normal hypocretin.',
    whoToSeeFirst:
      'Start with a sleep medicine center, neurology sleep clinic, or pediatric sleep clinic. In children, it may look like attention, school, mood, or behavior problems.',
    isGenetic:
      'There are genetic susceptibility and immune-related clues, but most cases are not single-gene inherited disorders. Family history can raise risk but usually does not lead to simple cascade testing.',
    hasTreatment:
      'There is no cure, but regular sleep routines, planned naps, safety planning, and medication can improve sleepiness, cataplexy, and nighttime sleep.',
    commonDelayReason:
      'People may be labeled as having a schedule or motivation problem, depression, seizures, fainting, or ADHD. Cataplexy may be described only as getting weak when laughing.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated uncontrollable sleep episodes during class, meetings, meals, conversations, or travel, often with refreshment after a short nap.',
      'Sudden knee buckling, jaw droop, slurred speech, or collapse triggered by laughter, surprise, or anger while awareness remains clear.',
      'Inability to move while falling asleep or waking, vivid dreamlike hallucinations, and fragmented nighttime sleep.',
      'A child develops school decline, classroom sleep, mood swings, weight gain, or behavior concerns.',
    ],
    commonWrongTurns: [
      'Only advising earlier bedtime or less screen time without evaluating sleep duration, sleep apnea, medications, depression, and narcolepsy.',
      'Treating cataplexy as seizure, fainting, or psychological illness without noting emotional triggers and preserved awareness.',
      'Doing daytime nap testing without first confirming adequate nighttime sleep and excluding other sleep disorders.',
    ],
    firstDepartments: [
      'Sleep medicine center',
      'Neurology sleep clinic',
      'Pediatric neurology or pediatric sleep clinic',
      'Mental health clinic for comorbidity review',
    ],
    diagnosisChecklist: [
      'Keep a two-week sleep diary with bedtime, wake time, awakenings, naps, sleepy situations, caffeine, and medications.',
      'Describe whether weakness is emotion-triggered, how long it lasts, whether awareness is preserved, and whether injuries occur.',
      'Bring school or work impact notes, driving or safety events, prior seizure or fainting evaluations, and mental health assessments.',
      'Ask which medications need doctor-supervised adjustment before sleep testing.',
    ],
    testsToAskAbout: [
      'Overnight polysomnography to confirm sleep adequacy and exclude sleep apnea or other mimics.',
      'Multiple sleep latency test to assess daytime sleep onset and early REM sleep.',
      'CSF hypocretin/orexin level, HLA, or other supporting tests when needed.',
      'Screening for sleep apnea, restless legs, depression, anxiety, attention problems, weight, and metabolic risk.',
    ],
    questionsForDoctor: [
      'Is this type 1 or type 2 narcolepsy, and is cataplexy clearly present?',
      'Can I drive, operate machinery, swim, or do high-risk work, and what limits apply?',
      'Is the medication goal wakefulness, cataplexy control, or nighttime sleep, and what side effects matter?',
      'What school or workplace accommodations are reasonable, such as planned naps or schedule changes?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The core symptom is excessive daytime sleepiness: a person can feel an overwhelming need to sleep at inappropriate times even after nighttime sleep, and a short nap may feel refreshing. Automatic behaviors can occur when the body continues an activity while attention lapses.</p><p>Cataplexy is a key clue for type 1 narcolepsy. It is often triggered by laughter, surprise, or anger and causes brief loss of muscle tone such as knee buckling, jaw droop, slurred speech, or collapse, usually with preserved awareness. Sleep paralysis, vivid hallucinations while falling asleep or waking, nightmares, and fragmented nighttime sleep are also common.</p>',
    diagnosis:
      '<p>Evaluation first checks whether sleep deprivation, shift work, medications, sleep apnea, seizures, fainting, depression, or another condition better explains symptoms. Overnight polysomnography helps exclude other sleep disorders and document sleep quality; the next-day multiple sleep latency test measures how quickly a person falls asleep and whether REM sleep appears unusually early.</p><p>Typical cataplexy or low cerebrospinal fluid hypocretin/orexin supports type 1 narcolepsy. Children and teenagers may present differently, so parent, school, and sleep diary information is important.</p>',
    treatment:
      '<p>Treatment combines behavior and medication. Regular sleep and wake times, scheduled short naps, avoiding alcohol or late caffeine, and improving nighttime sleep can help. Safety planning is important for driving, swimming, heights, open flames, and machinery.</p><p>Medicines can promote wakefulness, reduce cataplexy, or improve nighttime sleep, including wake-promoting agents, selected antidepressants, and sodium oxybate-type medicines. Choice depends on age, main symptoms, comorbidities, pregnancy plans, access, and side effects.</p>',
    longTermCare:
      '<p>Narcolepsy is usually lifelong. Follow-up reviews daytime sleepiness, cataplexy frequency, sleep diary, medication benefit, side effects, mood, and weight.</p><p>Students may need accommodations such as scheduled naps, avoiding punishment for symptoms, adjusted exams, and sports safety planning. Adults should review driving and occupational safety according to symptom control.</p>',
    fertilityOrFamily:
      '<p>Narcolepsy is usually not a simple single-gene condition. Tell the doctor if several relatives have similar symptoms, but cascade genetic screening is not typical. People planning pregnancy, pregnancy, or breastfeeding should discuss medication changes and safety planning early.</p>',
    emergencySigns:
      '<p>Urgent medical review is needed if sleep attacks cause crashes, falls, drowning risk, or dangerous frequent cataplexy. First seizure, loss of consciousness, chest pain, severe depression, or thoughts of self-harm require emergency care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Narcolepsy',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/000802.htm',
    },
    {
      name: 'MedlinePlus Genetics: Narcolepsy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/narcolepsy/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Main features are uncontrollable daytime sleepiness, sometimes with emotion-triggered cataplexy, sleep paralysis, hallucinations while falling asleep or waking, fragmented nighttime sleep, and automatic behaviors.</p>',
  diagnosis:
    '<p>Diagnosis relies on sleep history, sleep diary, overnight polysomnography, multiple sleep latency testing, and sometimes CSF hypocretin/orexin testing, while excluding other sleep and neuropsychiatric conditions.</p>',
  treatment:
    '<p>Care includes regular sleep routines, planned naps, safety management, school or work accommodations, and individualized medicines for wakefulness, cataplexy, and nighttime sleep.</p>',
  prognosis:
    '<p>Narcolepsy is usually long-term, but treatment and safety planning can markedly improve school, work, and quality of life; driving and high-risk activities depend on symptom control.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [20],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 406,
    name: 'narcolepsy-journey.png',
    url: '/images/diseases/narcolepsy-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

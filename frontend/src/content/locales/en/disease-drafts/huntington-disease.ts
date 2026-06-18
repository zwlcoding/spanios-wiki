import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHuntingtonDisease: DiseaseDraft = {
  ...entity(49, 'disease-huntington-disease'),
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
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  sourceName: 'GeneReviews: Huntington Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1305/',
  categorySlug: 'neurological',
  charityIds: [5],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 348,
    name: 'huntington-disease-journey.png',
    url: '/images/diseases/huntington-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseDup15qSyndrome: DiseaseDraft = {
  ...entity(6102, 'disease-dup15q-syndrome'),
  name: '15q11-q13 duplication syndrome',
  nameEn: '15q11-q13 duplication syndrome',
  alias:
    'dup15q syndrome, chromosome 15q duplication syndrome, idic(15), inv dup(15)',
  oneSentence:
    'Dup15q syndrome is a neurodevelopmental disorder caused by extra maternal copies of the 15q11.2-q13.1 region and can cause hypotonia, developmental and speech delay, intellectual disability, autism-spectrum features, and epilepsy.',
  plainName:
    'A chromosome 15 duplication syndrome affecting development and seizure risk',
  prevalence:
    'MedlinePlus Genetics notes that prevalence is unknown and may be as high as about 1 in 5,000 in the general population, with higher frequency among people with autism or intellectual disability.',
  quickLook: {
    whatItIs:
      'Extra maternal copies of chromosome region 15q11.2-q13.1 disrupt neurodevelopment. Isodicentric chromosome 15 is often more severe, while interstitial duplications can be milder.',
    whoToSeeFirst:
      'Hypotonia, feeding difficulty, developmental delay, autism-spectrum features, or seizures should prompt pediatric neurology, developmental pediatrics, and medical genetics.',
    isGenetic:
      'This is a chromosome copy-number disorder. Most idic(15) cases are de novo, while some interstitial duplications are maternally inherited, so parent testing and counseling matter.',
    hasTreatment:
      'There is no cure. Care focuses on seizure treatment, therapies, language and behavioral support, education plans, and monitoring hearing, vision, spine, sleep, and other issues.',
    commonDelayReason:
      'Children may first be labeled with developmental delay, cerebral palsy, autism, or epilepsy. Without chromosomal microarray or similar testing, the cause can be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infant has hypotonia, poor sucking or swallowing, and delayed sitting, standing, or walking.',
      'Severe speech-language delay occurs with autism-spectrum features, repetitive behavior, or social-communication difficulty.',
      'Recurrent seizures, infantile spasms, or difficult epilepsy begins between infancy and childhood.',
      'Strabismus, hearing problems, scoliosis, recurrent respiratory infections, or excessive weight gain coexist.',
    ],
    commonWrongTurns: [
      'Treating only autism or developmental delay without chromosome copy-number testing.',
      'Managing seizures without connecting them to developmental regression and a chromosomal cause.',
      'Relying on routine karyotype alone when chromosomal microarray is needed.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Developmental-behavioral pediatrics',
      'Medical genetics',
      'Rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Bring birth, feeding, tone, motor/language milestone, and seizure timelines.',
      'Collect EEG, brain MRI, therapy reports, autism evaluations, and medication response history.',
      'Record hearing, eye, spine, sleep, respiratory infection, and family history.',
    ],
    testsToAskAbout: [
      'Chromosomal microarray or CNV testing for 15q11.2-q13.1 duplication.',
      'FISH, karyotype, or other testing when needed to distinguish idic(15) from interstitial duplication.',
      'Parent testing to determine inheritance, and EEG follow-up for seizures.',
    ],
    questionsForDoctor: [
      'Is this idic(15) or interstitial duplication, and is it maternal?',
      'How should epilepsy and SUDEP risk be managed, and do we need a rescue plan?',
      'What are the priorities for therapy, communication support, and school planning?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Common features include hypotonia, delayed motor milestones, wide-based or ataxic gait, severe speech-language impairment, intellectual disability, autism-spectrum features, anxiety, and behavioral challenges. More than half of affected people have epilepsy, including infantile spasms, focal seizures, generalized seizures, or complex difficult-to-treat patterns.</p>',
    diagnosis:
      '<p>Diagnosis uses tests that detect chromosome copy-number changes, such as chromosomal microarray, CNV testing, FISH, or karyotype, together with developmental and epilepsy features. Clinicians also determine whether the duplication is maternal and whether it is idic(15) or an interstitial duplication.</p>',
    treatment:
      '<p>Care is supportive and includes seizure management, early rehabilitation, speech and alternative communication, behavioral therapy, special education, and treatment of hearing, vision, spine, sleep, GI, and respiratory concerns. Difficult epilepsy needs long-term pediatric epilepsy care.</p>',
    longTermCare:
      '<p>Follow-up tracks seizure frequency and EEG, developmental goals, communication, behavior and sleep, nutrition and weight, hearing and ophthalmology, scoliosis, and caregiver strain. School and therapy goals should change with age.</p>',
    fertilityOrFamily:
      '<p>Genetic counseling explains maternal duplication, parent testing, and recurrence risk. idic(15) is usually de novo; interstitial duplications can sometimes be inherited from the mother.</p>',
    emergencySigns:
      '<p>Seek urgent care for prolonged or clustered seizures, prolonged unresponsiveness after a seizure, apnea or cyanosis, clear developmental regression, serious choking or aspiration, or unsafe behavioral crisis.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: 15q11-q13 duplication syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/15q11-q13-duplication-syndrome/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Features can include hypotonia, motor and speech delay, intellectual disability, autism-spectrum features, behavior concerns, and recurrent seizures.</p>',
  diagnosis:
    '<p>Diagnosis uses chromosomal microarray/CNV testing, FISH, or karyotype to confirm 15q11.2-q13.1 duplication and define origin and structure.</p>',
  treatment:
    '<p>Care focuses on seizure management, rehabilitation, speech or alternative communication, behavioral and educational support, and coexisting-problem management.</p>',
  prognosis:
    '<p>Outcome varies widely; idic(15) is often more severe. Early diagnosis plus consistent seizure, therapy, and school support can improve function and family care.</p>',
  sourceName: 'MedlinePlus Genetics: 15q11-q13 duplication syndrome',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/15q11-q13-duplication-syndrome/',
  slug: 'dup15q-syndrome',
  categorySlug: 'genetic-developmental',
  charityIds: [85],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

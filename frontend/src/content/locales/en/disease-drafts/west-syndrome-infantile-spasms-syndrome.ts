import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseWestSyndromeInfantileSpasmsSyndrome: DiseaseDraft = {
  ...entity(2086, 'disease-west-syndrome-infantile-spasms-syndrome'),
  name: 'West syndrome/Infantile spasms syndrome',
  nameEn: 'West syndrome/Infantile spasms syndrome',
  alias:
    'Infantile epileptic spasms syndrome; IESS; China Second Rare Disease Catalog item 86',
  slug: 'west-syndrome-infantile-spasms-syndrome',
  oneSentence:
    'West syndrome/infantile spasms syndrome is a severe infant epilepsy syndrome with clusters of brief nodding, jackknife, or extension spasms, abnormal EEG, and possible developmental arrest or regression.',
  plainName:
    'An infant epilepsy syndrome with clustered nodding or jackknife spasms that needs rapid treatment',
  prevalence:
    "Included in China's second rare disease catalog; it most often appears in the first year of life and is a pediatric neurology emergency to recognize early.",
  quickLook: {
    whatItIs:
      'Spasms are brief and may be mistaken for startles, colic, or shivers. Typical episodes occur in clusters around sleep-wake transitions, with head drops, jackknife bending, arm extension, or sudden body extension.',
    whoToSeeFirst:
      'Clusters of head drops, jackknife movements, sudden extension, or developmental plateau/regression should prompt urgent pediatric neurology or epilepsy center evaluation; frequent events, altered consciousness, or breathing problems need emergency care.',
    isGenetic:
      'Causes include brain malformations, perinatal injury, tuberous sclerosis, metabolic disease, and genetic epilepsies. Need for genetic testing depends on MRI, history, and specialist evaluation.',
    hasTreatment:
      'Earlier control is better. First-line treatment commonly includes ACTH, oral corticosteroids, and vigabatrin; focal structural causes may require epilepsy surgery evaluation.',
    commonDelayReason:
      'Movements are short and look like ordinary infant behavior. If home videos are not reviewed or EEG does not include sleep, diagnosis may be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infant aged about 3-12 months with clusters of head drops, jackknife flexion, arm extension, or sudden extension, often around waking.',
      'Crying after clusters, developmental plateau or regression, or fewer social smiles, visual tracking, or motor skills.',
      'Tuberous sclerosis, brain injury, brain malformation, metabolic/genetic disease, or neonatal seizures.',
    ],
    commonWrongTurns: [
      'Treating one organ or one episode without connecting the long-term pattern, family history, and prior results.',
      'Watching common-disease explanations for too long without referral to the right specialty or rare disease clinic.',
      'Not keeping imaging, pathology, genetic, treatment, and follow-up records, leading to repeated workups and delays.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Epilepsy center',
      'Pediatric emergency department',
      'Rehabilitation/developmental pediatrics',
    ],
    diagnosisChecklist: [
      'Bring clear event videos, daily frequency, number per cluster, sleep relationship, and after-event behavior.',
      'Bring EEG, especially whether sleep EEG was done; bring brain MRI, metabolic, and genetic results.',
      'Prepare birth history, perinatal hypoxia/infection, milestones, medicines, and family epilepsy history.',
    ],
    testsToAskAbout: [
      'Whether urgent video EEG or sleep EEG is needed to confirm hypsarrhythmia or other spasm-related EEG abnormality.',
      'Whether cause evaluation needs brain MRI, tuberous sclerosis screening, metabolic testing, and epilepsy gene panel.',
      'How ACTH, oral steroids, vigabatrin, or combination therapy will be chosen, and when response is judged.',
    ],
    questionsForDoctor: [
      'Is the goal complete spasm freedom plus EEG improvement, and when will EEG be repeated?',
      'How will side effects, infection risk, blood pressure/glucose, and visual monitoring be handled?',
      'When should epilepsy surgery, rehabilitation, feeding, nutrition, and early intervention be assessed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Infantile spasms are brief, sudden, repeated flexion, extension, or mixed movements. They can look like head drops, jackknife bending, arm spreading, or a whole-body jerk. Clusters often occur around falling asleep or waking.</p><p>Many children have developmental arrest or regression, less interaction, feeding issues, and sleep problems. Later epilepsy types and developmental outcomes vary by cause and treatment response.</p>',
    diagnosis:
      '<p>Diagnosis uses caregiver videos, event description, and EEG, especially sleep recording. EEG may show hypsarrhythmia or other abnormalities supporting spasms, but it is not always classic.</p><p>Cause evaluation often includes brain MRI, examination for tuberous sclerosis and other skin or eye signs, metabolic screening, genetic testing, and review of brain injury or infection history.</p>',
    treatment:
      '<p>Treatment should start quickly, aiming for complete spasm cessation and EEG improvement. Common first-line treatments include ACTH, oral corticosteroids, and vigabatrin; vigabatrin is especially considered for tuberous sclerosis-associated spasms.</p><p>If first-line therapy fails, treatment should be changed promptly. Focal structural causes or drug-resistant spasms may need epilepsy surgery evaluation. Developmental therapy, rehabilitation, nutrition, and family support should start early.</p>',
    longTermCare:
      '<p>Long-term care repeats EEG when needed and tracks spasm relapse, other seizure types, medication adverse effects, development, vision, hearing, feeding, sleep, and rehabilitation progress. Early intervention should not wait until seizures are perfectly controlled.</p><p>Families should keep videos and a treatment timeline and contact the epilepsy team quickly for possible relapse.</p>',
    fertilityOrFamily:
      '<p>Some cases are genetic or metabolic. MRI, examination, and history guide genetic testing and family evaluation; recurrence risk counseling is useful before another pregnancy.</p>',
    emergencySigns:
      '<p>Emergency care is needed for frequent clusters, prolonged seizure, blue breathing episodes, dehydration from poor feeding, marked sleepiness or altered consciousness, fever or infection, or worsening condition during steroid treatment.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Institute of Neurological Disorders and Stroke: Infantile spasms',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/infantile-spasms',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Features include brief clustered head drops, jackknife, flexion, or extension spasms around sleep-wake transitions, often with developmental arrest or regression.</p>',
  diagnosis:
    '<p>Diagnosis uses home video, history, video/sleep EEG, and cause evaluation with brain MRI, metabolic testing, tuberous sclerosis assessment, and genetic testing.</p>',
  treatment:
    '<p>Rapid treatment often uses ACTH, oral corticosteroids, or vigabatrin; nonresponse should prompt quick adjustment, surgery review for focal causes, and early rehabilitation.</p>',
  prognosis:
    '<p>Earlier spasm and EEG control is associated with better chances; outcome depends on cause, treatment response, and developmental support.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [60],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 440,
    name: 'west-syndrome-infantile-spasms-syndrome-journey.png',
    url: '/images/diseases/west-syndrome-infantile-spasms-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

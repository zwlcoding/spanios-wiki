import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleSystemAtrophy: DiseaseDraft = {
  ...entity(5023, 'disease-multiple-system-atrophy'),
  name: 'Multiple System Atrophy',
  nameEn: 'Multiple System Atrophy',
  alias: 'MSA, Shy-Drager syndrome',
  icd10Code: 'G90.3',
  slug: 'multiple-system-atrophy',
  oneSentence:
    'Multiple system atrophy is a rare, sporadic, rapidly progressive neurodegenerative disorder characterized by a combination of autonomic failure, parkinsonian features, and cerebellar ataxia, with pathological hallmark of glial cytoplasmic alpha-synuclein inclusions.',
  plainName:
    'A rapidly progressive brain disease affecting automatic body functions, movement, and coordination',
  prevalence:
    'Prevalence is approximately 2-5 per 100,000; onset is typically in the 50s-60s, with slight male predominance. Disease progression is rapid, with median survival of approximately 6-10 years after diagnosis.',
  searchIntents: [
    'multiple system atrophy early symptoms',
    'MSA diagnosis criteria',
    'multiple system atrophy vs Parkinson disease',
    'multiple system atrophy treatment',
    'multiple system atrophy prognosis life expectancy',
  ],
  quickLook: {
    whatItIs:
      'This is a sporadic, rapidly progressive neurodegenerative disease primarily affecting the autonomic nervous system (blood pressure, urination, bowel movements, sweating), extrapyramidal system (bradykinesia, rigidity), and cerebellar system (ataxia). There is currently no cure or disease-modifying therapy.',
    whoToSeeFirst:
      'Neurology, especially movement disorder specialists. Early evaluation is important if there is a combination of orthostatic hypotension, urinary dysfunction, bradykinesia, or cerebellar symptoms.',
    isGenetic:
      'The vast majority are sporadic and not traditionally inherited. Some studies suggest COQ2 gene variants may be associated with risk in East Asian populations, and SNCA polymorphisms may have a weak influence. Overall genetic risk is low.',
    hasTreatment:
      'There is currently no cure or therapy to slow disease progression. Management is supportive and symptomatic, including orthostatic hypotension management, urinary dysfunction treatment, parkinsonian symptom medications, and physical rehabilitation.',
    commonDelayReason:
      'Early symptoms (orthostatic dizziness, urinary frequency, slowness of movement) are evaluated separately as hypotension, prostate enlargement, or Parkinson disease; autonomic and motor symptoms are seen by different specialists without integrated assessment; diagnosis often takes several years.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated dizziness, dim vision, or fainting upon standing (orthostatic hypotension) with normal or elevated blood pressure when supine.',
      'Early urinary dysfunction (frequency, urgency, incontinence, or retention), especially in men after prostate disease has been excluded.',
      'Bradykinesia, rigidity, or tremor with poor or transient response to levodopa.',
      'Gait instability, ataxia, dysarthria, or dysphagia.',
      'Rapid eye movement sleep behavior disorder (RBD) may be a prodromal symptom.',
    ],
    commonWrongTurns: [
      'Orthostatic hypotension treated as simple low blood pressure or anemia without supine-standing blood pressure monitoring.',
      'Urinary dysfunction treated solely as benign prostatic hyperplasia or urinary tract infection.',
      'Parkinsonian symptoms treated as Parkinson disease, but poor levodopa response with accompanying autonomic symptoms should raise suspicion for MSA.',
      'Ataxia treated as cerebellar stroke or cervical spondylosis.',
      'Comprehensive evaluation at an experienced movement disorder center is delayed, postponing diagnosis.',
    ],
    firstDepartments: [
      'Neurology (movement disorder specialty)',
      'Cardiology (orthostatic hypotension evaluation)',
      'Urology (urinary dysfunction evaluation)',
      'Physical Medicine and Rehabilitation',
    ],
    diagnosisChecklist: [
      'Document orthostatic symptoms (how long standing before dizziness, any syncope), urinary and bowel habits, and sleep history (RBD).',
      'Bring prior blood pressure records (supine-standing measurements if available).',
      'Bring all MRI films and reports.',
      'List prior medication history (especially levodopa response and side effects).',
      'Ask the physician whether the 2022 MDS diagnostic criteria are met.',
    ],
    testsToAskAbout: [
      'Supine and standing blood pressure and heart rate monitoring (orthostatic hypotension is a core feature).',
      'Brain MRI (hot cross bun sign, hyperintense middle cerebellar peduncles, putaminal slit signs).',
      '123I-MIBG myocardial scintigraphy (cardiac sympathetic denervation, differentiates from Parkinson disease).',
      'Polysomnography (to assess RBD).',
      'Urodynamic testing (to assess neurogenic bladder).',
      'Anal sphincter EMG (to assess autonomic neuropathy).',
    ],
    questionsForDoctor: [
      'Do my symptoms fit MSA-P or MSA-C better?',
      'What symptomatic treatments are available for orthostatic hypotension and urinary dysfunction?',
      'Is a trial of levodopa worthwhile? What response can I expect?',
      'How is the disease likely to progress? What preparations should be made?',
      'Am I eligible for any clinical trials?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MSA has two main subtypes: MSA-P (parkinsonian type), dominated by bradykinesia, rigidity, and postural instability with minimal tremor; and MSA-C (cerebellar type), dominated by ataxia, dysarthria, and dysphagia. Both subtypes have significant autonomic dysfunction.</p><p>Autonomic symptoms include: orthostatic hypotension (≥20 mmHg systolic or ≥10 mmHg diastolic drop upon standing), neurogenic bladder (frequency, urgency, incontinence, or retention), constipation, sweating abnormalities, and erectile dysfunction. Rapid eye movement sleep behavior disorder (RBD) and stridor are also common and important symptoms; stridor indicates poor prognosis.</p>',
    diagnosis:
      '<p>The 2022 International Parkinson and Movement Disorder Society (MDS) updated diagnostic criteria for MSA, with categories of neuropathologically established, clinically established, clinically probable, and possible prodromal MSA. The core feature is a combination of autonomic dysfunction with parkinsonism or cerebellar syndrome.</p><p>Characteristic MRI findings include the pontine "hot cross bun" sign, hyperintense middle cerebellar peduncles, putaminal slit signs, and putaminal hypointensity. 123I-MIBG myocardial scintigraphy shows cardiac sympathetic denervation, which can differentiate MSA from Parkinson disease (where MIBG uptake is usually preserved early). Anal sphincter EMG may show neurogenic changes.</p>',
    treatment:
      '<p>There is currently no disease-modifying therapy. Symptomatic management includes: orthostatic hypotension (compression stockings, increased salt intake, head-of-bed elevation, midodrine or fludrocortisone); neurogenic bladder (intermittent catheterization, anticholinergics, or beta-3 agonists); parkinsonian symptoms (levodopa may be tried but most patients have limited benefit and may develop dyskinesias); RBD (clonazepam or melatonin); stridor (CPAP or tracheostomy).</p><p>Rehabilitation training (gait training, swallowing therapy, speech therapy) is very important for maintaining function. Nutritional support and psychological support should not be neglected.</p>',
    longTermCare:
      '<p>MSA progresses rapidly; most patients require a walker or wheelchair within several years, and later may develop severe dysphagia and recurrent aspiration pneumonia. Long-term care priorities include: fall prevention, nutritional support, prevention of aspiration pneumonia, pressure ulcer prevention, and psychological support.</p><p>Early discussion of disease prognosis with family, long-term care planning, and consideration of palliative care and hospice when appropriate are recommended. Patient support organizations and clinical trials can provide up-to-date information and resources.</p>',
    fertilityOrFamily:
      '<p>MSA is a sporadic disease with extremely low genetic risk. Patients and families do not require routine genetic counseling, but if there are similar cases in the family, neurogenetics consultation may be considered.</p>',
    emergencySigns:
      '<p>Seek immediate care for: severe orthostatic hypotension causing syncope or fall injury, acute urinary retention, stridor or breathing difficulty, recurrent aspiration pneumonia, or severe dysphagia causing dehydration or malnutrition. Stridor is a critical symptom in MSA and may require emergency tracheostomy or noninvasive ventilation.</p>',
  },
  sources: [
    {
      name: 'NINDS: Multiple System Atrophy',
      type: 'review',
      url: 'https://www.ninds.nih.gov/health-information/disorders/multiple-system-atrophy',
    },
    {
      name: 'NORD: Multiple System Atrophy',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/multiple-system-atrophy/',
    },
    {
      name: 'Orphanet: Multiple system atrophy',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/102',
    },
  ],
  symptoms:
    '<p>Autonomic dysfunction (orthostatic hypotension, urinary dysfunction, constipation), parkinsonian symptoms (bradykinesia, rigidity), or cerebellar ataxia. RBD and stridor are also common.</p>',
  diagnosis:
    '<p>Based on 2022 MDS diagnostic criteria, with supine-standing blood pressure monitoring, characteristic brain MRI findings, 123I-MIBG scintigraphy, and anal sphincter EMG.</p>',
  treatment:
    '<p>No cure; supportive and symptomatic management for orthostatic hypotension, urinary dysfunction, and rehabilitation.',
  prognosis:
    '<p>Rapid progression with median survival of approximately 6-10 years after diagnosis. Major causes of death include aspiration pneumonia, respiratory difficulty (stridor), and sudden death.</p>',
  sourceName: 'NINDS',
  sourceUrl:
    'https://www.ninds.nih.gov/health-information/disorders/multiple-system-atrophy',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3523,
    name: 'multiple-system-atrophy-journey.png',
    url: '/images/diseases/multiple-system-atrophy-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'palliative-care'],
};

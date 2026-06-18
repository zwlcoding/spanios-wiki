import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleSclerosis: DiseaseDraft = {
  ...entity(5022, 'disease-multiple-sclerosis'),
  name: 'Multiple Sclerosis',
  nameEn: 'Multiple Sclerosis',
  alias: 'MS, disseminated sclerosis',
  icd10Code: 'G35',
  slug: 'multiple-sclerosis',
  oneSentence:
    'Multiple sclerosis is a chronic autoimmune demyelinating disease of the central nervous system in which the immune system mistakenly attacks the myelin sheath covering nerve fibers, disrupting nerve signal transmission and causing recurrent episodes of neurological dysfunction.',
  plainName:
    'A chronic condition where the immune system damages nerve insulation and disrupts signals',
  prevalence:
    'Worldwide prevalence is approximately 30-100 per 100,000; highest incidence in Northern Europe and North America. China is a low-prevalence region, but detection rates are rising with improved diagnostics, with an estimated prevalence of approximately 2-5 per 100,000.',
  searchIntents: [
    'multiple sclerosis early symptoms',
    'MS diagnosis criteria',
    'multiple sclerosis treatment drugs',
    'MS relapse what to do',
    'multiple sclerosis hereditary risk',
  ],
  quickLook: {
    whatItIs:
      'This is a chronic inflammatory autoimmune disease of the central nervous system in which the immune system attacks the myelin sheath, disrupting nerve conduction. The disease course is typically relapsing-remitting, with some patients later converting to secondary progressive disease.',
    whoToSeeFirst:
      'Neurology, preferably a neuroimmunology specialist. Seek prompt evaluation for acute vision loss, limb weakness, sensory disturbances, or bladder/bowel dysfunction.',
    isGenetic:
      'Not a traditional single-gene inherited disease, but there is some genetic susceptibility (especially HLA-DRB1*15:01). First-degree relatives have a slightly elevated risk compared to the general population. Environmental factors such as vitamin D deficiency and EB virus infection also play important roles.',
    hasTreatment:
      'There is currently no cure, but multiple disease-modifying therapies (DMTs) can significantly reduce relapses and slow disability progression. High-dose corticosteroids are used for acute relapses. Early treatment is critical for prognosis.',
    commonDelayReason:
      'Early symptoms (blurred vision, limb numbness, dizziness) mistaken for cervical spondylosis, eye strain, or anxiety; after the first episode symptoms resolve spontaneously, so patients neglect follow-up; primary care hospitals lack MRI and cerebrospinal fluid testing capabilities.',
  },
  patientJourney: {
    whenToSuspect: [
      'Young adult develops acute monocular vision loss (optic neuritis) or blurred vision in both eyes.',
      'Limb numbness, weakness, or tingling, especially unilateral, lasting more than 24 hours.',
      'Gait instability, ataxia, or vertigo that does not resolve after excluding ENT causes.',
      'Urinary difficulty, urinary retention, or incontinence accompanied by lower limb sensory abnormalities.',
      'Symptoms peak within days, persist for weeks, then partially or completely resolve, suggesting a relapsing-remitting course.',
    ],
    commonWrongTurns: [
      'Optic neuritis treated as a common eye disease without brain MRI to rule out MS.',
      'Limb numbness and weakness misdiagnosed as cervical spondylosis, lumbar disease, or cerebral blood supply insufficiency.',
      'Dizziness treated as benign paroxysmal positional vertigo or Meniere disease without comprehensive neurological evaluation.',
      'After the first episode symptoms resolve, the patient discontinues medication or misses follow-up.',
      'Delay in starting disease-modifying therapy (DMT), missing the early treatment window.',
    ],
    firstDepartments: [
      'Neurology (neuroimmunology specialty)',
      'Ophthalmology (when optic neuritis is the first symptom)',
      'Physical Medicine and Rehabilitation (during functional recovery)',
      'Urology (when voiding dysfunction is severe)',
    ],
    diagnosisChecklist: [
      'Document the timing, symptoms, duration, and recovery of each episode in detail.',
      'Bring all prior brain and spinal cord MRI films and reports.',
      'If lumbar puncture/oligoclonal band testing was done, bring those results.',
      'List all prior medication history and allergies.',
      'Ask the physician whether the 2017 McDonald criteria are met.',
    ],
    testsToAskAbout: [
      'Brain and spinal cord MRI with and without contrast (to demonstrate dissemination in time and space).',
      'Cerebrospinal fluid analysis (oligoclonal bands, IgG index).',
      'Visual evoked potentials (VEP, to assess optic nerve conduction).',
      'Serum AQP4-IgG and MOG-IgG (to exclude neuromyelitis optica spectrum disorder).',
      'Serum vitamin D level.',
      'Routine blood tests (to exclude infection, autoimmune disease, etc.).',
    ],
    questionsForDoctor: [
      'What type of MS do I have — relapsing-remitting or progressive?',
      'What disease-modifying therapies are suitable for me? What are their efficacy, side effects, and costs?',
      'How do we assess response to steroid treatment? When can DMT be started?',
      'Do I need to stop medication during pregnancy? Which drugs are relatively safe?',
      'What should I pay attention to in daily life? Any restrictions on exercise, diet, or vaccination?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MS symptoms vary depending on lesion location and commonly include: optic neuritis (acute monocular vision loss, eye pain), limb weakness or numbness, sensory disturbances (pins and needles, burning), ataxia, vertigo, fatigue, bladder and bowel dysfunction, cognitive decline, and mood disorders (depression, anxiety).</p><p>The typical course is relapsing-remitting (RRMS), with acute attacks followed by partial or complete recovery. Approximately 50% of RRMS patients convert to secondary progressive MS (SPMS) after 10-20 years, with gradually accumulating disability. About 10-15% of patients have primary progressive MS (PPMS), with continuous progression from onset.</p>',
    diagnosis:
      '<p>Diagnosis is based on the 2017 revised McDonald criteria, with core requirements demonstrating dissemination in time and space of CNS lesions. This requires integration of clinical presentation, MRI (brain and spinal cord), cerebrospinal fluid examination, and evoked potentials.</p><p>MRI is a key diagnostic and monitoring tool: typical lesions are located in the periventricular, juxtacortical, infratentorial (brainstem/cerebellum), and spinal cord regions. Cerebrospinal fluid oligoclonal bands support the diagnosis. Differential diagnosis includes neuromyelitis optica spectrum disorder (NMOSD), MOG antibody-associated disease, acute disseminated encephalomyelitis (ADEM), and cerebrovascular disease.</p>',
    treatment:
      '<p>Acute relapses: high-dose methylprednisolone intravenous pulse (typically 500-1000 mg/day for 3-5 days), with plasma exchange if needed.</p><p>Disease-modifying therapy (DMT) is the cornerstone of MS management. First-line agents include interferon beta, glatiramer acetate, teriflunomide, fingolimod, and dimethyl fumarate; high-efficacy agents include natalizumab, alemtuzumab, ocrelizumab, and cladribine. Drug selection should consider disease activity, safety profile, patient preferences, and accessibility.</p><p>Symptomatic treatment includes: antispasticity medications, bladder dysfunction medications, fatigue management, pain control, cognitive rehabilitation, and psychological support.</p>',
    longTermCare:
      '<p>Long-term follow-up includes: periodic MRI to assess disease activity, EDSS disability scoring, cognitive function screening, mood assessment, and quality-of-life evaluation. Monitor DMT safety (infection risk, liver function, blood counts, cardiac function, etc.).</p><p>Lifestyle management: moderate exercise (swimming, yoga, etc.) helps maintain function; smoking cessation (smoking increases disease activity); maintaining adequate vitamin D levels; avoiding excessive heat exposure (heat can temporarily worsen symptoms); regular sleep schedule and fatigue management. Vaccinations should be completed before starting immunosuppressants; live vaccines should be avoided during immunosuppression.</p>',
    fertilityOrFamily:
      '<p>MS itself does not affect fertility, but some DMTs may affect the fetus (e.g., teriflunomide has teratogenic risk and requires drug elimination before conception). Relapse risk may decrease during pregnancy but increases 3-6 months postpartum.</p><p>Some medications can be used safely during pregnancy and lactation (e.g., interferon beta, glatiramer acetate). Women planning pregnancy should consult their neurologist to adjust medications. MS is not a single-gene inherited disease, but offspring have a slightly elevated risk (approximately 2-5%).</p>',
    emergencySigns:
      '<p>Seek immediate care for: acute severe vision loss, new severe limb weakness or paralysis, acute urinary retention, severe swallowing difficulty with choking, seizures, or altered consciousness with high fever. Avoid self-administering immune-enhancing supplements or folk remedies during relapses.</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Multiple Sclerosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK499849/',
    },
    {
      name: 'NINDS: Multiple Sclerosis Information Page',
      type: 'review',
      url: 'https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis',
    },
    {
      name: 'National MS Society',
      type: 'patient-organization',
      url: 'https://www.nationalmssociety.org/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Common symptoms include optic neuritis, limb numbness and weakness, sensory disturbances, ataxia, vertigo, fatigue, bladder dysfunction, and cognitive decline. The typical course is relapsing-remitting.</p>',
  diagnosis:
    '<p>Based on the 2017 McDonald criteria, integrating MRI, cerebrospinal fluid oligoclonal bands, and evoked potentials to demonstrate dissemination in time and space.</p>',
  treatment:
    '<p>Acute relapses treated with high-dose steroids; long-term disease-modifying therapies (DMTs) reduce relapses and slow progression; symptomatic treatments improve quality of life.</p>',
  prognosis:
    '<p>Early DMT significantly improves prognosis. Most RRMS patients can maintain functional independence for a long time, but some eventually progress to SPMS.</p>',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK499849/',
  categorySlug: 'neurological',
  charityIds: [14, 15, 59],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3522,
    name: 'multiple-sclerosis-journey.png',
    url: '/images/diseases/multiple-sclerosis-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'treatable'],
};

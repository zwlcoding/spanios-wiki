import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeuronalCeroidLipofuscinosis: DiseaseDraft = {
  ...entity(2055, 'disease-neuronal-ceroid-lipofuscinosis'),
  name: 'Neuronal ceroid lipofuscinosis',
  nameEn: 'Neuronal ceroid lipofuscinosis',
  alias:
    'NCL; Batten disease; CLN-related disease; China Second Rare Disease Catalog item 55',
  slug: 'neuronal-ceroid-lipofuscinosis',
  oneSentence:
    'Neuronal ceroid lipofuscinosis is a group of inherited lysosomal neurodegenerative disorders that often cause vision loss, seizures, developmental or cognitive regression, movement problems, and increasing care needs.',
  plainName:
    'Inherited neurodegenerative disorders that affect vision, seizures, and development',
  prevalence:
    "Included in China's second rare disease catalog; NCLs are rare overall but are an important cause of inherited childhood neurodegeneration, with age of onset and speed varying by CLN type.",
  quickLook: {
    whatItIs:
      'NCL is not one single-gene disorder but a group of CLN-related diseases. Lysosomal waste handling is impaired, ceroid lipofuscin-like material accumulates, and neurons are progressively damaged.',
    whoToSeeFirst:
      'A child with rapid vision loss, seizures, language or motor regression, school decline, or ataxia should be assessed by pediatric neurology, ophthalmology, and medical genetics.',
    isGenetic:
      'Most NCLs are autosomal recessive, while a few such as CLN4 can be autosomal dominant. A genetic diagnosis helps prognosis, recurrence counseling, and treatment opportunity review.',
    hasTreatment:
      'Most types rely on seizure, rehabilitation, nutrition, swallowing, respiratory, and comfort care. For selected types such as CLN2, enzyme replacement may slow some functional decline where available.',
    commonDelayReason:
      'Early disease may be labeled myopia, retinal disease, epilepsy, autism, learning difficulty, or cerebral palsy unless vision, seizures, and regression are considered together.',
  },
  patientJourney: {
    whenToSuspect: [
      'A previously developing child has vision decline, night blindness, retinal degeneration, or progressive blindness with learning or language regression.',
      'Recurrent seizures plus myoclonus, unsteady walking, motor regression, or cognitive decline.',
      'Progressive behavior change, sleep problems, attention decline, reduced speech, and movement disorder in childhood or adolescence.',
      'Family history of similar vision loss, seizures, neurodegeneration, or consanguinity.',
    ],
    commonWrongTurns: [
      'Treating only myopia, retinal disease, or epilepsy without asking about developmental regression and cognition.',
      'Attributing school decline or behavior change only to psychological or educational problems.',
      'Doing isolated tests without early ophthalmic electrophysiology, brain MRI/EEG, and genetic testing.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Ophthalmology or inherited retinal disease clinic',
      'Medical genetics',
      'Rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Prepare milestones, timing of regression, seizure types, vision change, learning, and behavior changes.',
      'Bring fundus photos, ERG, OCT, vision records, brain MRI, EEG, and antiseizure medication response.',
      'Record family history, consanguinity, sibling symptoms, miscarriages, or childhood deaths.',
      'Bring full genetic reports and CLN type or variant classification if available.',
    ],
    testsToAskAbout: [
      'Genetic testing using an NCL/CLN panel or exome/genome sequencing.',
      'Eye testing: fundus exam, OCT, and ERG for retinal degeneration.',
      'Brain MRI, EEG, and neurodevelopmental and motor function assessments.',
      'If CLN2 is suspected, TPP1 enzyme activity, genetic confirmation, and enzyme replacement eligibility.',
    ],
    questionsForDoctor: [
      'Which CLN type is most likely, and do age of onset and genetic results fit?',
      'Is there enzyme replacement, gene therapy research, or a clinical trial for this type?',
      'How should seizures, sleep, swallowing, nutrition, pain, and mobility be managed long term?',
      'What carrier testing, prenatal diagnosis, or preimplantation counseling should relatives consider?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NCLs share progressive nervous-system decline, but age at onset varies. Children may first show vision loss, retinal degeneration, seizures, language and motor regression, learning difficulties, poor attention, sleep problems, myoclonus, ataxia, or behavior change.</p><p>Progression can bring cognitive decline, swallowing difficulty, malnutrition, loss of mobility, spasticity, pain, infections, and severe disability. Adult forms may present with seizures, movement disorder, psychiatric or cognitive change, and variable vision involvement.</p>',
    diagnosis:
      '<p>Diagnosis combines the regressive clinical pattern, ophthalmic findings, EEG, brain MRI, and genetic testing. Fundus exam, OCT, and ERG can show retinal degeneration; EEG helps seizure evaluation; MRI may show atrophy or other neurodegenerative clues.</p><p>Genetic testing is now the most important confirmatory tool because it defines the CLN type and guides prognosis, therapy review, and family counseling. Some types can also be supported by enzyme testing, such as TPP1 deficiency in CLN2. Differential diagnosis includes mitochondrial disease, leukodystrophy, epileptic encephalopathy, inherited retinal disease, and other lysosomal disorders.</p>',
    treatment:
      '<p>Most NCLs currently have no disease-reversing therapy, so care focuses on seizure control, myoclonus and spasticity reduction, swallowing and nutrition, sleep and behavior care, physical, occupational, and speech therapy, communication supports, and comfort care.</p><p>Some type-specific disease-modifying options exist or are emerging. Cerliponase alfa enzyme replacement for CLN2 disease is available in some regions to slow aspects of motor and language decline; other gene therapy, enzyme replacement, and small-molecule approaches depend on local access and trials.</p>',
    longTermCare:
      '<p>Long-term care involves pediatric neurology, ophthalmology, genetics, rehabilitation, nutrition, pulmonology, gastroenterology, psychology, and palliative support. Families can track seizure frequency, swallowing, weight, sleep, pain, constipation, infections, and mobility to guide care changes.</p><p>School and home planning may include vision aids, communication tools, mobility equipment, home safety, caregiver support, and goals-of-care discussions. As disease progresses, reducing suffering and preserving dignity are central.</p>',
    fertilityOrFamily:
      '<p>Most NCLs are autosomal recessive, giving carrier parents a 25% recurrence risk in each pregnancy. A few, such as DNAJC5/CLN4-related disease, are autosomal dominant. Once the gene is known, relatives can discuss carrier testing, prenatal diagnosis, and preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Status epilepticus, repeated choking or aspiration pneumonia, breathing difficulty, severe dehydration, inability to feed, major change in consciousness, uncontrolled pain, or fever with marked lethargy needs urgent care. People receiving intraventricular enzyme therapy should contact the treatment center immediately for fever, headache, device-site redness, or neurologic change.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Institute of Neurological Disorders and Stroke: Neuronal Ceroid Lipofuscinosis (Batten Disease)',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/neuronal-ceroid-lipofuscinosis-batten-disease',
    },
    {
      name: 'GeneReviews: Neuronal Ceroid Lipofuscinoses Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/sites/books/n/gene/ncl/',
    },
  ],
  symptoms:
    '<p>Common features include progressive vision loss, seizures, myoclonus, developmental or cognitive regression, language and motor decline, ataxia, sleep and behavior problems, swallowing difficulty, and increasing disability.</p>',
  diagnosis:
    '<p>Diagnosis combines eye exams, ERG/OCT, EEG, brain MRI, enzyme testing, and CLN-related genetic testing, while excluding other neurodegenerative, epilepsy, and retinal diseases.</p>',
  treatment:
    '<p>Care focuses on antiseizure treatment, rehabilitation, swallowing and nutrition, sleep and behavior, pain and comfort care; selected types such as CLN2 may be evaluated for enzyme replacement or trials.</p>',
  prognosis:
    '<p>Most types are progressive, with the gene and age at onset shaping speed. Early diagnosis helps identify type-specific treatment windows and plan supportive care earlier.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 409,
    name: 'neuronal-ceroid-lipofuscinosis-journey.png',
    url: '/images/diseases/neuronal-ceroid-lipofuscinosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

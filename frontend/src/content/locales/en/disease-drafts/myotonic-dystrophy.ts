import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMyotonicDystrophy: DiseaseDraft = {
  ...entity(5024, 'disease-myotonic-dystrophy'),
  name: 'Myotonic Dystrophy',
  nameEn: 'Myotonic Dystrophy',
  alias: 'DM, dystrophia myotonica, Steinert disease',
  icd10Code: 'G71.1',
  slug: 'myotonic-dystrophy',
  oneSentence:
    'Myotonic dystrophy is a group of autosomal dominant multisystem disorders characterized by myotonia, progressive muscle weakness, and characteristic multisystem involvement including frontal balding, cataracts, cardiac arrhythmias, and endocrine abnormalities, with type 1 caused by DMPK CTG repeat expansion and type 2 by CNBP CCTG repeat expansion.',
  plainName:
    'A genetic disease causing stiff muscles, weakness, and problems with the heart, eyes, and hormones',
  prevalence:
    'DM1 is the most common adult muscular dystrophy worldwide, with a prevalence of approximately 5-20 per 100,000; DM2 prevalence is approximately 1-5 per 100,000. DM1 has a congenital form that can present with severe symptoms at birth.',
  searchIntents: [
    'myotonic dystrophy symptoms',
    'myotonia hand stiffness treatment',
    'myotonic dystrophy heart complications',
    'DM1 vs DM2 difference',
    'myotonic dystrophy genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is a group of autosomal dominant disorders characterized by myotonia (impaired muscle relaxation after contraction) and progressive muscle weakness, with simultaneous involvement of the heart (conduction block, arrhythmias), eyes (cataracts), endocrine system (diabetes, thyroid dysfunction), gastrointestinal tract, and central nervous system.',
    whoToSeeFirst:
      'Neurology (neuromuscular specialty); due to multisystem involvement, regular cardiology, ophthalmology, and endocrinology follow-up is also needed. Seek immediate care for palpitations, syncope, or breathing difficulty.',
    isGenetic:
      "Autosomal dominant inheritance. DM1 is caused by CTG trinucleotide repeat expansion in the DMPK gene 3'UTR; DM2 is caused by CCTG tetranucleotide repeat expansion in an intron of the CNBP gene. Larger repeat sizes correlate with earlier onset and more severe disease. There is genetic anticipation.",
    hasTreatment:
      'There is currently no cure, but myotonia can be relieved with medications (e.g., mexiletine), cardiac issues can be managed with pacemakers, cataracts can be surgically removed, and multidisciplinary comprehensive management significantly improves quality of life.',
    commonDelayReason:
      'Myotonia mistaken for ordinary muscle stiffness or arthritis; cataracts mistaken for age-related cataracts; cardiac symptoms mistaken for common arrhythmias; multisystem symptoms are seen by different specialists without integrated assessment.',
  },
  patientJourney: {
    whenToSuspect: [
      'Difficulty releasing a handshake, opening the eyelids after closure, or relaxing muscles after coughing or sneezing (myotonia).',
      'Facial and distal limb muscle weakness (ptosis, reduced facial expression, decreased grip strength, foot drop).',
      'Early-onset cataracts (ages 30-50), frontal balding (in men), or excessive daytime sleepiness.',
      'Palpitations, syncope, or ECG showing conduction block or atrial fibrillation.',
      'Family history of multi-generational muscle weakness, cataracts, or cardiac problems (note genetic anticipation).',
    ],
    commonWrongTurns: [
      'Myotonia mistaken for arthritis, tendinitis, or habitual movement.',
      'Facial muscle weakness and flat affect mistaken for depression or personality issues.',
      'Cataracts treated as simple age-related cataracts without further systemic workup.',
      'Cardiac conduction block not linked to myopathy, delaying pacemaker implantation.',
      'Family members not screened, leading to missed diagnoses in asymptomatic relatives.',
    ],
    firstDepartments: [
      'Neurology (neuromuscular specialty)',
      'Cardiology (arrhythmia evaluation)',
      'Ophthalmology (cataract evaluation)',
      'Endocrinology (glucose metabolism and thyroid function)',
      'Genetic Counseling',
    ],
    diagnosisChecklist: [
      'Document myotonia manifestations (which actions trigger it, duration).',
      'Organize prior ECG, echocardiogram, and eye examination reports.',
      'Draw a three-generation pedigree, noting similar symptoms or early deaths.',
      'Ask the physician whether DMPK or CNBP repeat expansion testing is needed.',
    ],
    testsToAskAbout: [
      'Electromyography (EMG, characteristic myotonic discharges).',
      'DMPK gene CTG repeat expansion testing (DM1).',
      'CNBP gene CCTG repeat expansion testing (DM2).',
      'ECG and 24-hour Holter monitoring (to assess conduction block and arrhythmias).',
      'Echocardiogram (to assess cardiac function and valve status).',
      'Ophthalmologic examination (slit-lamp examination for cataracts).',
      'Fasting glucose, HbA1c, and thyroid function tests.',
      'Pulmonary function tests (to assess respiratory muscle strength).',
    ],
    questionsForDoctor: [
      'Do I have DM1 or DM2? What is the difference in prognosis?',
      'Does my cardiac conduction problem require a pacemaker? When is the optimal timing?',
      'What medications can relieve myotonia symptoms?',
      'Should family members (including asymptomatic ones) undergo genetic testing?',
      'Can pregnancy worsen the disease? Will the fetus be affected?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Both DM1 and DM2 feature myotonia and muscle weakness, but affected muscle groups and severity differ. DM1 typically affects facial, sternocleidomastoid, and distal muscles ("hatchet face," ptosis, neck flexor weakness, foot drop) with myotonia. DM2 primarily affects proximal muscles (hip and shoulder girdle), and myotonia may be milder.</p><p>Multisystem involvement includes: heart (conduction block, atrial fibrillation, dilated cardiomyopathy), eyes (posterior subcapsular cataracts), endocrine (insulin resistance, diabetes, hypothyroidism, hypogonadism), gastrointestinal (dysphagia, constipation, pseudo-obstruction), respiratory (respiratory muscle weakness, hypoventilation, sleep apnea), and central nervous system (excessive daytime sleepiness, cognitive decline, depression). Congenital DM1 can present at birth with severe hypotonia, respiratory failure, and feeding difficulties.</p>',
    diagnosis:
      '<p>Clinical diagnosis is based on evidence of myotonia, characteristic weakness patterns, and multisystem involvement. Genetic testing confirms the diagnosis: DM1 shows DMPK CTG repeat expansion (normal 5-34, premutation 35-49, pathogenic ≥50); DM2 shows CNBP CCTG repeat expansion.</p><p>EMG demonstrates characteristic myotonic discharges ("dive bomber" sound). Differential diagnosis includes congenital myotonia (chloride channelopathy), other muscular dystrophies, and mitochondrial myopathy. Repeat size correlates with age of onset and severity, with genetic anticipation.</p>',
    treatment:
      '<p>Myotonia: Mexiletine is the first-line treatment and significantly improves myotonia symptoms. Other options include phenytoin and carbamazepine.</p><p>Cardiac: Regular ECG and Holter monitoring; pacemaker or ICD implantation when significant conduction block is present. Cataracts can be surgically removed. Endocrine abnormalities are managed symptomatically. Patients with respiratory muscle weakness should be evaluated for noninvasive ventilation.</p><p>Rehabilitation: Physical and occupational therapy help maintain strength and function. Avoid statin medications (may worsen myopathy). Anesthesia risk is increased; inform the anesthesiologist of the diagnosis before surgery.</p>',
    longTermCare:
      '<p>Long-term follow-up requires a multidisciplinary team: neurology (strength and myotonia assessment), cardiology (annual ECG/Holter, echocardiography when indicated), ophthalmology (regular slit-lamp examinations), endocrinology (glucose and thyroid function), pulmonology (pulmonary function monitoring), and gastroenterology (swallowing and gastrointestinal function).</p><p>Excessive daytime sleepiness is a common problem that can affect work and driving safety. Regular cognitive and psychological assessments are recommended. Family screening is very important; all first-degree relatives should undergo genetic testing even if asymptomatic.</p>',
    fertilityOrFamily:
      '<p>Both DM1 and DM2 are autosomal dominant, with a 50% transmission risk to offspring. DM1 shows significant genetic anticipation, and maternal transmission can cause a large increase in CTG repeat size, leading to congenital DM1. Therefore, female DM1 patients should receive genetic counseling and prenatal diagnosis (chorionic villus sampling or amniocentesis to measure fetal CTG repeat size) before pregnancy.</p><p>Preimplantation genetic testing (PGT) can reduce transmission risk. Males can also show anticipation, though usually less severe. DM2 does not show significant anticipation.</p>',
    emergencySigns:
      '<p>Seek immediate care for: syncope or near-syncope (suggesting serious arrhythmia), acute breathing difficulty or respiratory failure, severe dysphagia causing choking or dehydration, or sudden abdominal pain with distension (suspect pseudo-obstruction). Cardiac events are the leading cause of death in DM1; palpitations and syncope should be taken very seriously.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Myotonic Dystrophy Type 1',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1166/',
    },
    {
      name: 'GeneReviews: Myotonic Dystrophy Type 2',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1466/',
    },
    {
      name: 'NORD: Myotonic Dystrophy',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/myotonic-dystrophy/',
    },
  ],
  symptoms:
    '<p>Myotonia, progressive muscle weakness (distal-predominant in DM1, proximal-predominant in DM2), cataracts, arrhythmias, frontal balding, daytime sleepiness, endocrine abnormalities, and respiratory muscle weakness.</p>',
  diagnosis:
    '<p>Genetic testing confirms diagnosis: DM1 shows DMPK CTG repeat expansion; DM2 shows CNBP CCTG repeat expansion. EMG demonstrates characteristic myotonic discharges.</p>',
  treatment:
    '<p>Mexiletine relieves myotonia; pacemaker for cardiac conduction block; cataract surgery; multidisciplinary comprehensive management improves quality of life.</p>',
  prognosis:
    '<p>DM1 progresses faster than DM2; cardiac complications and respiratory failure are the leading causes of death. Early cardiac intervention can extend survival.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1166/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3524,
    name: 'myotonic-dystrophy-journey.png',
    url: '/images/diseases/myotonic-dystrophy-journey.png',
  },
  tagSlugs: ['neurological', 'genetic-counseling', 'cardiac'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMitochodrialEncephalomyopathy: DiseaseDraft = {
  ...entity(5018, 'disease-mitochodrial-encephalomyopathy'),
  name: 'Mitochondrial Encephalomyopathy',
  nameEn: 'Mitochondrial Encephalomyopathy',
  alias: 'MELAS, MERRF, Kearns-Sayre syndrome, mitochondrial disease',
  icd10Code: 'G31.81',
  slug: 'mitochodrial-encephalomyopathy',
  oneSentence:
    'Mitochondrial encephalomyopathies are a group of progressive disorders caused by defects in mitochondrial function, affecting tissues with high energy demands such as the brain, muscles, heart, and nerves, with common types including MELAS, MERRF, and Kearns-Sayre syndrome.',
  plainName:
    'A group of conditions where the cell powerhouses fail, affecting the brain and muscles',
  prevalence:
    'The overall incidence of primary mitochondrial disease is approximately 1 in 5,000 live births; each specific subtype is rarer. Mitochondrial disorders are among the most common inherited metabolic disorders in adults.',
  searchIntents: [
    'mitochondrial encephalomyopathy symptoms',
    'MELAS stroke-like episodes',
    'mitochondrial disease genetic testing',
    'mitochondrial disease treatment',
    'mitochondrial encephalomyopathy life expectancy',
  ],
  quickLook: {
    whatItIs:
      'This is a group of conditions caused by impaired mitochondrial energy metabolism, affecting tissues with high energy requirements such as the brain, muscles, heart, retina, and endocrine organs. Different gene mutations cause different clinical phenotypes (e.g., MELAS, MERRF, Kearns-Sayre syndrome).',
    whoToSeeFirst:
      'Adults should see neurology or metabolic genetics; children should see pediatric neurology or metabolic genetics. Multi-system involvement requires multidisciplinary follow-up (cardiology, endocrinology, ophthalmology).',
    isGenetic:
      'Most are inherited through maternal mitochondrial DNA, but some follow autosomal dominant/recessive inheritance or result from new mutations. Genetic counseling can help assess recurrence risk and family planning options.',
    hasTreatment:
      'There is no cure. Symptomatic treatment, supportive care, and nutritional supplements (such as coenzyme Q10, L-carnitine, B vitamins) may help improve quality of life. Some acute conditions require emergency management.',
    commonDelayReason:
      'Multi-system symptoms scattered across different specialties with each symptom attributed to separate diseases; stroke-like episodes in young patients not raising suspicion for mitochondrial disease; delayed genetic testing due to high cost or unavailability.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent seizures or stroke-like episodes in childhood or adolescence (especially cortical blindness after episodes in MELAS).',
      'Progressive weakness, exercise intolerance, or unexplained elevated lactate after mild exertion.',
      'Hearing loss, visual impairment, retinal pigmentary changes, or progressive external ophthalmoplegia.',
      'Multi-system problems including short stature, diabetes, cardiomyopathy, or renal tubular disease.',
      'Blood tests show elevated lactate (especially elevated lactate/pyruvate ratio) or multiple unexplained endocrine abnormalities.',
    ],
    commonWrongTurns: [
      'Seizures or stroke-like episodes treated solely with antiepileptic drugs without investigating metabolic causes.',
      'Exercise intolerance and elevated lactate attributed to simple deconditioning or malingering.',
      'Each symptom seen by a different specialist (neurology, cardiology, endocrinology, ophthalmology) without comprehensive assessment.',
      'Delayed genetic testing because symptoms are attributed to acquired diseases.',
      'Insufficient attention to endocrine abnormalities (diabetes, short stature, thyroid dysfunction) and heart involvement.',
    ],
    firstDepartments: [
      'Neurology / Pediatric Neurology',
      'Metabolic Genetics',
      'Cardiology (if cardiomyopathy suspected)',
      'Endocrinology (if diabetes or short stature present)',
      'Ophthalmology (if visual or retinal abnormalities present)',
      'Genetic Counseling',
    ],
    diagnosisChecklist: [
      'Document detailed symptom sequence, especially seizure frequency and characteristics, exercise tolerance, visual/hearing changes, and growth status.',
      'Bring all prior blood tests (lactate, pyruvate, CK, liver/kidney function, thyroid function, glucose/HbA1c).',
      'Bring muscle biopsy reports if performed.',
      'Ask the physician about mitochondrial DNA testing, whole mitochondrial genome sequencing, and nuclear gene panel options.',
    ],
    testsToAskAbout: [
      'Blood and CSF lactate and pyruvate (especially lactate/pyruvate ratio).',
      'Blood and urine amino acid analysis.',
      'Muscle biopsy (histochemical staining for COX-deficient fibers; electron microscopy for mitochondrial ultrastructural abnormalities).',
      'Mitochondrial DNA testing (common point mutations: m.3243A>G, m.8344A>G, m.8993T>G; deletions).',
      'Whole mitochondrial genome sequencing and nuclear mitochondrial gene panel if point mutation testing is negative.',
      'Brain MRI (especially MELAS showing cortical lesions not conforming to vascular territories).',
      'ECG, echocardiogram, hearing test, and ophthalmology evaluation.',
    ],
    questionsForDoctor: [
      'How can I differentiate stroke-like episodes from ischemic stroke? What are the emergency management differences?',
      'Which symptoms require immediate emergency evaluation? How should I prepare an emergency card?',
      'Are coenzyme Q10 and L-carnitine supplements helpful? What are the evidence and risks?',
      'How should I monitor heart function, hearing, and vision? How often?',
      'What are the family planning options and recurrence risk?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Symptoms vary by type but typically involve brain and muscle dysfunction, often with multi-system involvement. MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like Episodes) presents with stroke-like episodes, seizures, cognitive decline, short stature, diabetes, and hearing loss. MERRF (Myoclonic Epilepsy with Ragged-Red Fibers) features myoclonus, seizures, ataxia, and ragged-red fibers on muscle biopsy. Kearns-Sayre syndrome is characterized by progressive external ophthalmoplegia, pigmentary retinopathy, and cardiac conduction block before age 20.</p><p>Other common manifestations include exercise intolerance, proximal muscle weakness, ptosis, dysphagia, sensorineural hearing loss, short stature, and various endocrine abnormalities (diabetes, hypothyroidism, hypoparathyroidism, adrenal insufficiency).</p>',
    diagnosis:
      '<p>Diagnosis is based on clinical presentation, biochemical markers (elevated blood/CSF lactate and pyruvate), muscle biopsy findings (ragged-red fibers, COX-deficient fibers), and genetic testing. Elevated lactate/pyruvate ratio suggests impaired mitochondrial respiratory chain function.</p><p>Genetic testing is the gold standard, including common mitochondrial DNA point mutations (m.3243A>G for MELAS, m.8344A>G for MERRF, m.8993T>G for Leigh/NARP), large-scale deletions, and whole mitochondrial genome sequencing. If mitochondrial DNA testing is negative, nuclear gene panels for mitochondrial disorders should be considered.</p>',
    treatment:
      '<p>There is currently no curative treatment. Management is multidisciplinary and symptomatic. Coenzyme Q10, L-carnitine, alpha-lipoic acid, and B vitamins are commonly used as supportive supplements, but evidence for efficacy is limited. Seizures require antiepileptic treatment; valproate should generally be avoided in mitochondrial disease. Acute stroke-like episodes require management distinct from ischemic stroke, emphasizing seizure control and metabolic support rather than thrombolysis.</p><p>Cardiac involvement requires monitoring and possible pacemaker/defibrillator implantation. Endocrine abnormalities should be managed by endocrinology. Hearing loss may benefit from cochlear implants. Physical therapy helps maintain mobility.</p>',
    longTermCare:
      '<p>Long-term management requires multidisciplinary coordination: regular cardiology monitoring (ECG, echocardiogram), endocrine follow-up, audiology and ophthalmology evaluations, and neurodevelopmental or neuropsychological assessment. Growth and nutritional status should be monitored, especially in children.</p><p>Avoid mitochondrial stressors: fasting, alcohol, certain medications (e.g., linezolid, nucleoside reverse transcriptase inhibitors, valproate), and extreme heat or cold. Maintain adequate calorie and hydration intake during illness. Establish emergency management plans and ensure caregivers, school, and workplace are informed.</p>',
    fertilityOrFamily:
      '<p>Most mitochondrial diseases are inherited through maternal mitochondrial DNA, with all offspring at risk but with variable expression. Some types follow autosomal dominant or recessive inheritance. Genetic counseling is essential for family planning.</p><p>Prenatal diagnostic options include prenatal genetic testing and mitochondrial DNA mutation load assessment. Assisted reproductive technologies such as mitochondrial donation or preimplantation genetic testing are options in some regions, though availability and regulations vary significantly by country.</p>',
    emergencySigns:
      '<p>Seek emergency care immediately for: new or worsening seizures, stroke-like episodes (sudden visual loss, confusion, weakness), cardiac symptoms (chest pain, palpitations, syncope), severe vomiting with dehydration, or altered consciousness. Bring diagnostic reports and emergency management instructions. Inform emergency staff of the mitochondrial diagnosis, especially avoiding valproate and certain contraindicated medications.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Mitochondrial Disorders Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1224/',
    },
    {
      name: 'NORD: Mitochondrial Disorders',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/mitochondrial-disorders/',
    },
    {
      name: 'Orphanet: Mitochondrial encephalomyopathy',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/68373',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Highly variable presentation including stroke-like episodes, seizures, myoclonus, progressive muscle weakness, exercise intolerance, hearing loss, visual impairment, short stature, diabetes, and cardiac conduction abnormalities.</p>',
  diagnosis:
    '<p>Elevated blood/CSF lactate and pyruvate, muscle biopsy (ragged-red fibers, COX deficiency), and genetic testing for mitochondrial DNA point mutations, deletions, or nuclear mitochondrial genes.</p>',
  treatment:
    '<p>No cure; multidisciplinary symptomatic management. Supplements such as coenzyme Q10 and L-carnitine may help some patients. Avoid mitochondrial toxins including valproate. Acute stroke-like episodes require metabolic support, not thrombolysis.</p>',
  prognosis:
    '<p>Variable depending on type and mutation; progressive in many forms. Early multidisciplinary management improves quality of life and may prolong survival.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1224/',
  categorySlug: 'metabolic',
  charityIds: [61],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3518,
    name: 'mitochodrial-encephalomyopathy-journey.png',
    url: '/images/diseases/mitochodrial-encephalomyopathy-journey.png',
  },
  tagSlugs: ['metabolic', 'neurological', 'genetic-counseling'],
};

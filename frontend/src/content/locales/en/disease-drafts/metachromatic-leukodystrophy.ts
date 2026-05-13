import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMetachromaticLeukodystrophy: DiseaseDraft = {
  ...entity(2049, 'disease-metachromatic-leukodystrophy'),
  name: 'Metachromatic leukodystrophy',
  nameEn: 'Metachromatic leukodystrophy',
  alias:
    'MLD; arylsulfatase A deficiency; China Second Rare Disease Catalog item 49',
  slug: 'metachromatic-leukodystrophy',
  oneSentence:
    'Metachromatic leukodystrophy is usually an ARSA-related lysosomal storage disease in which sulfatides build up and progressively damage central and peripheral nerve myelin.',
  plainName:
    'An inherited white-matter disease that progressively damages myelin',
  prevalence:
    "Included in China's second rare disease catalog; international estimates are about 1 in 40,000 to 160,000 people, with higher rates in some genetically isolated groups.",
  quickLook: {
    whatItIs:
      'MLD is caused by deficient arylsulfatase A function, leading to sulfatide buildup that affects walking, language, learning, behavior, swallowing, vision, hearing, and peripheral nerves.',
    whoToSeeFirst:
      'Children with regression, gait change, repeated falls, or learning and behavior changes should see pediatric neurology. Adults with psychiatric or cognitive onset need neurology and psychiatry coordination.',
    isGenetic:
      'It is usually autosomal recessive, most often involving ARSA and rarely PSAP. Parents are typically carriers, so recurrence risk needs genetic counseling.',
    hasTreatment:
      'The treatment window matters. Presymptomatic or very early children may be assessed for stem cell transplant or gene therapy, while advanced disease relies more on symptom, rehabilitation, nutrition, and comfort care.',
    commonDelayReason:
      'Early disease can look like cerebral palsy, developmental delay, peripheral neuropathy, school problems, behavior disorders, or psychiatric illness. Low ARSA activity also needs confirmation to avoid pseudo-deficiency misdiagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'A child who had learned to walk begins falling, develops gait problems, tone changes, or loses language or motor skills.',
      'A school-age child develops falling grades, attention or behavior change, plus movement or peripheral nerve problems.',
      'A teenager or adult has unexplained psychiatric symptoms, cognitive decline, or work or school decline with white-matter MRI changes.',
      'Family history of MLD, leukodystrophy, early neurodegeneration, or unexplained childhood death.',
    ],
    commonWrongTurns: [
      'Treating only as cerebral palsy, autism, psychological illness, or ordinary neuropathy without repeat brain MRI and metabolic or genetic testing.',
      'Diagnosing MLD from low ARSA activity alone without urine sulfatides and genetic confirmation.',
      'Referral after major functional loss, when transplant or gene therapy windows may have closed.',
    ],
    firstDepartments: [
      'Pediatric neurology',
      'Neurology',
      'Medical genetics',
      'Rehabilitation medicine',
    ],
    diagnosisChecklist: [
      'Prepare a developmental and regression timeline, walking and language changes, school or behavior changes, seizures, and swallowing problems.',
      'Bring brain MRI images, nerve conduction or EMG studies, eye and hearing evaluations, and metabolic screening results.',
      'Record family history, consanguinity, sibling symptoms, miscarriages, or childhood deaths.',
      'If treatment windows are being discussed, bring recent functional assessments and the pace of decline.',
    ],
    testsToAskAbout: [
      'Brain MRI white-matter pattern and peripheral nerve conduction testing.',
      'Arylsulfatase A enzyme activity, urine sulfatides, and ARSA/PSAP gene testing.',
      'How pseudo-ARSA deficiency will be ruled out.',
      'Whether stem cell transplant or gene therapy evaluation is still appropriate and what baseline tests are required.',
    ],
    questionsForDoctor: [
      'Is this late-infantile, juvenile, or adult MLD, and what stage is it now?',
      'Is the diagnosis supported by enzyme, urine sulfatide, and genetic evidence, and has pseudo-deficiency been excluded?',
      'Is there still a transplant or gene therapy evaluation window? If not, what supportive care should start now?',
      'What carrier testing, prenatal diagnosis, or preimplantation counseling should relatives consider?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MLD is often grouped by age at onset: late-infantile, juvenile, and adult. Late-infantile disease commonly causes gait problems, repeated falls, language or motor regression, tone changes, and peripheral neuropathy. Juvenile disease may begin with school decline, behavior change, and worsening coordination.</p><p>Adult-onset disease can begin with psychiatric symptoms, personality change, cognitive decline, or reduced work or school function. Progression may bring seizures, swallowing difficulty, vision or hearing loss, spasticity, pain, nutrition problems, and severe disability.</p>',
    diagnosis:
      '<p>Diagnosis combines the regressive clinical course, brain MRI white-matter changes, peripheral nerve involvement, ARSA enzyme activity, urine sulfatides, and genetic testing. ARSA is the most common gene, while PSAP accounts for rare cases.</p><p>Low ARSA activity alone is not enough, because pseudoarylsulfatase deficiency can lower enzyme activity without causing classic MLD. Clinicians usually integrate enzyme, urine sulfatide, and pathogenic variant evidence, while excluding other leukodystrophies, mitochondrial disease, inflammatory demyelination, and psychiatric disorders.</p>',
    treatment:
      '<p>Treatment options depend strongly on disease stage. Some presymptomatic or very early, more slowly progressive patients may be evaluated for hematopoietic stem cell transplant at experienced centers. In some countries, autologous hematopoietic stem cell gene therapy is approved for eligible children, but access, criteria, and cost must be checked case by case.</p><p>For people with clear neurologic progression, care focuses on seizure control, tone and pain management, swallowing and nutrition support, respiratory care, physical, occupational, and speech therapy, assistive devices, psychological support, and comfort-focused care. Early goals-of-care planning can reduce repeated crises.</p>',
    longTermCare:
      '<p>Long-term follow-up often involves neurology, genetics, rehabilitation, nutrition, pulmonology, gastroenterology, orthopedics, and palliative support. Caregivers can track swallowing, weight, sleep, pain, spasticity, seizures, and infections to guide adjustments.</p><p>Families may need school or workplace support, rehabilitation resources, nursing training, and advance care planning. Preventing aspiration, pressure injury, malnutrition, and uncontrolled pain becomes increasingly important as disease progresses.</p>',
    fertilityOrFamily:
      '<p>MLD is usually autosomal recessive. When both parents are carriers, each pregnancy has a 25% chance of being affected. After diagnosis, parents, siblings, and reproductive-age relatives should be offered genetic counseling about carrier testing, prenatal diagnosis, and preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Urgent care is needed for repeated choking, aspiration pneumonia, breathing difficulty, persistent fever, status epilepticus, severe dehydration, inability to feed, uncontrolled pain, or major change in consciousness. People after transplant or gene therapy should also follow center-specific instructions for infection, blood count, and treatment-related risks.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Metachromatic leukodystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/metachromatic-leukodystrophy/',
    },
    {
      name: 'U.S. FDA: FDA Approves First Gene Therapy for Children with Metachromatic Leukodystrophy',
      type: 'official',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapy-children-metachromatic-leukodystrophy',
    },
  ],
  symptoms:
    '<p>Symptoms can include motor or language regression, gait problems, learning and behavior change, peripheral neuropathy, seizures, swallowing difficulty, vision or hearing loss, and adult psychiatric or cognitive changes.</p>',
  diagnosis:
    '<p>Diagnosis combines brain MRI, peripheral nerve evaluation, ARSA enzyme activity, urine sulfatides, and ARSA/PSAP gene testing, with pseudo-ARSA deficiency excluded.</p>',
  treatment:
    '<p>Presymptomatic or very early patients may be assessed for stem cell transplant or eligible gene therapy; advanced disease focuses on seizures, tone, swallowing, nutrition, respiration, rehabilitation, and comfort care.</p>',
  prognosis:
    '<p>MLD is usually progressive, and earlier-onset forms often decline faster. Early recognition of treatment windows and ongoing supportive care strongly affect function and quality of life.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 403,
    name: 'metachromatic-leukodystrophy-journey.png',
    url: '/images/diseases/metachromatic-leukodystrophy-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

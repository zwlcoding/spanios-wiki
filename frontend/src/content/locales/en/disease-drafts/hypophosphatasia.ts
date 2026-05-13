import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHypophosphatasia: DiseaseDraft = {
  ...entity(52, 'disease-hypophosphatasia'),
  name: 'Hypophosphatasia',
  nameEn: 'Hypophosphatasia',
  alias: 'Hypophosphatasia, HPP, Hereditary Hypophosphatasia',
  slug: 'hypophosphatasia',
  oneSentence:
    'Hypophosphatasia is a rare single-gene inherited disorder caused by ALPL gene mutations that reduce alkaline phosphatase activity, leading to impaired bone and tooth mineralization. It was included in the first national Rare Disease Catalog in 2018.',
  plainName: 'Hypophosphatasia',
  prevalence:
    'Severe form incidence is approximately 1/100,000; milder forms have higher incidence; classified as a rare disease in China',
  quickLook: {
    whatItIs:
      "Hypophosphatasia (HPP) is caused by mutations in the ALPL gene (also called TNSALP gene), which encodes tissue-nonspecific alkaline phosphatase. The gene mutation leads to significantly reduced alkaline phosphatase (ALP) activity in the body, causing abnormal accumulation of its substrates (including inorganic pyrophosphate and pyridoxal 5'-phosphate), which in turn causes bone and tooth mineralization defects and may affect multiple organs. It follows autosomal dominant or autosomal recessive inheritance, with autosomal recessive cases typically being more severe. It was included in the first national Rare Disease Catalog in 2018.",
    whoToSeeFirst:
      'Pediatrics, Orthopedics (when skeletal symptoms are prominent), or Dentistry (for dental symptoms)',
    isGenetic: 'Yes, autosomal dominant or autosomal recessive inheritance',
    hasTreatment:
      'Enzyme replacement therapy is available for severe childhood forms, along with multidisciplinary supportive management. However, whether treatment is suitable, when to use it, and how to monitor it requires evaluation by a metabolic bone disease/endocrinology/orthopedics team.',
    commonDelayReason:
      'Clinical presentation varies widely, from early tooth loss to neonatal fatality, a very broad spectrum; mild cases are easily mistaken for ordinary osteoporosis or dental problems',
  },
  patientJourney: {
    whenToSuspect: [
      'Premature loss of baby teeth before ages 1-3 (usually starting with incisors)',
      'Short stature in children, skeletal deformities, or rickets',
      'Recurrent fractures or bone pain with slow healing',
      'Unexplained reduced bone mineralization',
      'Craniosynostosis or increased intracranial pressure in infancy',
      'Adult patients with unexplained osteomalacia or pseudofractures',
      'Persistently low alkaline phosphatase (ALP)',
    ],
    commonWrongTurns: [
      'Early tooth loss being mistaken for ordinary oral problems or periodontal disease',
      "Children's fractures being mistaken for trauma or ordinary osteoporosis",
      'Skeletal deformities being misdiagnosed as rickets or other metabolic bone diseases',
      'Adult form being mistaken for ordinary osteoporosis or arthritis',
      'Only focusing on calcium and phosphorus levels without checking ALP',
      'Prenatal/perinatal form being mistaken for other life-threatening conditions due to critical illness',
    ],
    firstDepartments: [
      'Pediatrics or Genetics/Metabolism Department (preferred first visit)',
      'Pediatric Orthopedics (when skeletal symptoms are prominent)',
      'Dentistry (when dental symptoms are prominent)',
      'Orthopedics or Endocrinology (adult patients)',
      'Neonatology (prenatal or infant-onset)',
    ],
    diagnosisChecklist: [
      'Serum alkaline phosphatase (ALP) measurement (persistently low is the core indicator)',
      'Blood calcium, phosphorus, parathyroid hormone (PTH)',
      'ALPL gene molecular testing (important confirmatory evidence)',
      'Urine phosphoethanolamine (PEA) testing (characteristic metabolite of HPP)',
      "Blood pyridoxal 5'-phosphate (PLP) testing (elevated levels support diagnosis)",
      'Skeletal X-rays (to assess mineralization degree and bone deformities)',
      'Panoramic dental X-ray (to assess tooth structure)',
      'Bone mineral density testing (to assess fracture risk)',
    ],
    testsToAskAbout: [
      'The specific ALP value',
      'Whether ALPL gene testing was performed',
      'Results of skeletal X-ray or bone density testing',
      'Blood calcium, phosphorus, and PTH levels',
      'The specific circumstances and cause of tooth loss',
    ],
    questionsForDoctor: [
      'How low does ALP need to be to confirm HPP? Does the test need to be repeated?',
      'What is the current skeletal development status of my child? What should we pay special attention to?',
      'Is enzyme replacement therapy (asfotase alfa) needed?',
      'What special precautions are needed for dental care?',
      'How can we prevent fractures in daily life? Are there any restrictions on exercise and diet?',
      'If parents want to have another child, what genetic preparation is needed?',
    ],
  },
  medicalSections: {
    symptoms:
      'Clinical manifestations are diverse and classified into six types based on age of onset: Prenatal form (lethal type, onset in utero, severe bone mineralization defects, most die perinatally); Benign prenatal form (skeletal deformities present in utero but improve after birth); Infantile form (onset within 6 months after birth, presenting with poor feeding, hypotonia, craniosynostosis, respiratory abnormalities, fractures; higher mortality rate before 6 months); Childhood form (onset after 6 months, most complex presentation, with early tooth loss, short stature, rickets, bone pain, recurrent fractures, waddling gait); Adult form (dental abnormalities, osteomalacia, recurrent fractures, musculoskeletal pain, muscle weakness; easily confused with osteoporosis); Odontohypophosphatasia (mildest type, only presenting with early loss of baby or permanent teeth, usually without skeletal system abnormalities).',
    diagnosis:
      'Core laboratory indicator is persistently low serum ALP, while excluding secondary factors (such as vitamin D deficiency, hypothyroidism, etc.). Diagnosis relies on ALPL gene testing. X-rays may show reduced bone mineralization, skeletal deformities, and fractures. Bone mineral density testing shows reduced bone mass or osteoporosis. Elevated urine PEA and blood PLP have reference value for diagnosis.',
    treatment:
      'Management depends on age of onset and severity. Severe perinatal, infantile, or childhood forms may be evaluated for enzyme replacement therapy by specialists; all patients need bone, dental, pain, renal calcium-phosphorus metabolism, and rehabilitation support. Calcium, vitamin D, osteoporosis medications, or surgical interventions should be evaluated by a team familiar with HPP, and should not be self-managed based on ordinary rickets or osteoporosis guidelines.',
    longTermCare:
      'Requires multidisciplinary long-term follow-up: Orthopedics (fracture prevention and deformity correction), Dentistry (tooth protection, developing professional oral hygiene habits, avoiding unnecessary extractions), Rehabilitation (exercise guidance, maintaining safe activity levels), Nutrition (balanced nutrition, avoiding malnutrition). Patients and caregivers need to understand fracture risk and ensure safe activity environments. Adult patients should pay attention to pseudofractures and bone pain. ALP, bone density, and X-ray tests should be followed up regularly; specific frequency is determined by the specialist team based on age, disease status, and treatment plan.',
    fertilityOrFamily:
      'This disease can follow autosomal dominant or autosomal recessive inheritance. Genetic counseling is recommended. After identifying the ALPL gene mutation type, prenatal diagnosis or PGT can be performed. For dominant inheritance, each pregnancy has a 50% chance of inheriting the mutation, but disease severity may differ from the parent; recessive inheritance typically results in more severe disease. If there is already an affected patient in the family, consult your doctor about whether gene screening and ALP testing for other family members is appropriate.',
    emergencySigns:
      'Infantile form presenting with difficulty breathing, cyanosis, or recurrent apnea suggests severe respiratory system involvement and requires immediate medical attention. Fractures that are difficult to heal, worsening skeletal deformities, or new fractures suggest skeletal system deterioration and require prompt evaluation. Seizures suggest possible vitamin B6 metabolism abnormality (specific to infantile form) and require urgent management. Gum infections may spread to the alveolar bone and require emergency dental care.',
  },
  sources: [
    {
      name: 'GeneReviews: Hypophosphatasia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
    },
    {
      name: 'MedlinePlus Genetics: Hypophosphatasia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hypophosphatasia/',
    },
  ],
  sourceName: 'GeneReviews: Hypophosphatasia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 351,
    name: 'hypophosphatasia-journey.png',
    url: '/images/diseases/hypophosphatasia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

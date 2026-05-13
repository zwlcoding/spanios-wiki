import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlutaricAcidemiaTypeI: DiseaseDraft = {
  ...entity(36, 'disease-glutaric-acidemia-type-i'),
  name: 'Glutaric Acidemia Type I',
  nameEn: 'Glutaric Acidemia Type I',
  alias:
    'GA-1, Glutaric aciduria type I, GCDH deficiency, Glutaric aciduria type 1',
  slug: 'glutaric-acidemia-type-i',
  oneSentence:
    'Glutaric acidemia type I is an organic acid metabolism disorder that can cause acute brain injury and movement problems in infants and young children after infections or fasting if not identified in time.',
  plainName:
    'A hereditary metabolic condition in which the body cannot properly break down certain amino acids, which may damage the basal ganglia.',
  prevalence:
    'Generally rare, with variation across regions and populations; many areas can find clues through newborn screening.',
  quickLook: {
    whatItIs:
      'Insufficient GCDH enzyme function affects the metabolism of lysine, hydroxylysine, and tryptophan. Accumulated metabolites can increase the risk of brain injury, especially in the basal ganglia.',
    whoToSeeFirst:
      'When newborn screening is positive, infants have enlarged head circumference, developmental regression, abnormal muscle tone, or sudden movement problems after infection or fasting, seek care promptly at a metabolic genetics clinic, pediatric neurology, or neonatal/pediatric emergency department.',
    isGenetic:
      'Yes, usually autosomal recessive, related to biallelic pathogenic variants in GCDH.',
    hasTreatment:
      'Yes, there are management plans from metabolic specialists. Key points include early identification, nutrition and metabolic management, emergency protocols during infection or fasting, and long-term neurodevelopmental follow-up.',
    commonDelayReason:
      'Early signs may only include enlarged head or mild developmental clues; acute episodes are often mistaken for common infections, seizures, or encephalitis. Without combining newborn screening results and organic acid testing, the window may be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening suggests abnormal C5DC or related organic acid metabolism.',
      'Infant has an enlarged or rapidly growing head circumference, especially with developmental delay or abnormal muscle tone.',
      'After infection, fever, vomiting, fasting, or surgery, symptoms like drowsiness, poor feeding, developmental regression, or abnormal movements appear.',
      'Brain MRI shows basal ganglia injury, widened frontotemporal CSF spaces, or imaging findings consistent with GA-1.',
      'Family history of GA-1, infant acute encephalopathy, movement disorders, or consanguinity.',
    ],
    commonWrongTurns: [
      'Not following up with metabolic specialist after a positive screening result.',
      'Attributing enlarged head solely to familial factors without considering metabolic disease or MRI findings.',
      'During acute episodes, treating only for infection or encephalitis without starting metabolic crisis evaluation.',
      'After diagnosis, lacking a written emergency plan for illness or fasting, leading to repeated risks during infections.',
    ],
    firstDepartments: [
      'Metabolic Genetics / Medical Genetics',
      'Neonatology / Pediatric Emergency',
      'Pediatric Neurology',
      'Nutrition (under metabolic specialist guidance)',
      'Rehabilitation Medicine (for movement disorders or developmental issues)',
    ],
    diagnosisChecklist: [
      'Keep records of newborn screening, follow-up notifications, blood acylcarnitine, urine organic acids, and genetic reports.',
      'Record head circumference, developmental milestones, infection/fasting events, and whether movement regression occurred.',
      'Ask whether GCDH gene testing or enzyme activity testing is needed for confirmation.',
      'Prepare a written emergency plan for fever, vomiting, surgery, or inability to eat.',
      'Arrange long-term follow-up for neurodevelopment, movement, nutrition, and kidney function.',
    ],
    testsToAskAbout: [
      'Blood acylcarnitine profile, especially C5DC.',
      'Urine organic acids or quantitative measurement of glutaric acid and 3-hydroxyglutaric acid.',
      'GCDH gene testing; enzyme activity testing if needed.',
      'Brain MRI and neurodevelopmental assessment.',
      'Nutritional status, amino acids, carnitine, and kidney function monitoring.',
    ],
    questionsForDoctor: [
      'Are the results sufficient to confirm GA-1? What confirmation tests are still needed?',
      'Who will be responsible for daily diet and nutritional follow-up? What situations require immediate medical attention rather than home observation?',
      'During fever, vomiting, post-vaccine discomfort, or surgical fasting, how should the emergency protocol be carried out?',
      'Is there already brain or movement system involvement? Does rehabilitation or neurology follow-up need to be arranged?',
      'What genetic counseling is needed for siblings and future family planning?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GA-1 can be detected during newborn screening, or may present with an enlarged head, feeding problems, abnormal muscle tone, developmental delay, or movement disorders. In infants not managed in time, acute encephalopathy-like episodes can occur after infection, fasting, or other stressors, followed by dystonia, choreiform movements, developmental regression, and other complex movement problems.</p>',
    diagnosis:
      '<p>Diagnosis usually combines newborn screening, blood acylcarnitine, urine organic acids or quantitative metabolites, brain MRI, and GCDH gene testing. If molecular results are unclear, specialists may consider enzyme activity testing. Doctors will also differentiate from other organic acidemias, encephalitis, mitochondrial disease, and other movement disorders.</p>',
    treatment:
      "<p>Management requires a metabolic genetics team, including individualized nutrition plans, carnitine and related metabolic management, emergency protocols for infection or fasting, and developmental/movement follow-up. Specific diet, supplements, and emergency management should follow the specialist's written plan.</p>",
    longTermCare:
      '<p>Long-term care focuses on avoiding catabolic states, monitoring growth and nutrition, developmental and movement function, and kidney function, as well as ensuring that family members, schools, and emergency doctors all have clear emergency instructions. For those with existing movement disorders, long-term cooperation between rehabilitation, neurology, and nutrition teams is needed.</p>',
    fertilityOrFamily:
      '<p>GA-1 is autosomal recessive. Once GCDH variants are identified, parents, siblings, and relatives with family planning needs can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>Fever or infection, repeated vomiting, inability to eat, drowsiness, sudden change in muscle tone, seizures, developmental regression, or abnormal movements — seek medical care promptly and inform providers of GA-1 or suspected organic acid metabolism disorder risk. Avoid prolonged fasting.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Glutaric Acidemia Type 1',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
    },
    {
      name: 'MedlinePlus Genetics: Glutaric acidemia type I',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/glutaric-acidemia-type-i/',
    },
  ],
  symptoms:
    '<p>May present with abnormal screening results, macrocephaly, developmental delay, acute encephalopathy-like episodes after infection or fasting, movement regression, and dystonia.</p>',
  diagnosis:
    '<p>Evaluation includes blood acylcarnitine, urine organic acids or quantitative metabolites, GCDH gene testing, enzyme activity testing if needed, and brain MRI.</p>',
  treatment:
    '<p>Management relies on metabolic specialists, including nutrition and metabolic management, emergency protocols, developmental/movement follow-up, and family education.</p>',
  prognosis:
    '<p>Early screening and standard management can significantly reduce the risk of acute brain injury; those with existing neurological involvement need long-term rehabilitation and follow-up.</p>',
  sourceName: 'GeneReviews: Glutaric Acidemia Type 1',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 335,
    name: 'glutaric-acidemia-type-i-journey.png',
    url: '/images/diseases/glutaric-acidemia-type-i-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBiotinidaseDeficiency: DiseaseDraft = {
  ...entity(15, 'disease-biotinidase-deficiency'),
  name: 'Biotinidase Deficiency',
  nameEn: 'Biotinidase Deficiency',
  alias: 'BTD Deficiency, Late-onset Multiple Carboxylase Deficiency',
  slug: 'biotinidase-deficiency',
  oneSentence:
    'Biotinidase Deficiency is a genetic metabolic disorder that can be detected through newborn screening. Timely biotin supplementation can usually prevent many neurological, skin, and metabolic problems.',
  plainName:
    'An inherited condition where the body cannot properly recycle and use biotin.',
  prevalence:
    'It is a rare disease. Screening data varies widely across regions. Many countries and regions have already included it in newborn or genetic metabolic screening programs.',
  searchIntents: [
    'biotinidase deficiency newborn screen positive',
    'BTD deficiency which doctor',
    'low biotinidase activity follow-up test',
    'biotinidase deficiency seizures rash hair loss',
    'biotinidase deficiency can biotin be stopped',
  ],
  quickLook: {
    whatItIs:
      "Biotin is a vitamin involved in the function of several metabolic enzymes. When biotinidase is deficient, the body's ability to recycle and use biotin decreases. Without treatment, this may affect the nervous system, skin, hair, hearing, and vision.",
    whoToSeeFirst:
      'If newborn screening is abnormal or symptoms are suspected, it is recommended to first revisit the genetic metabolism department, pediatric endocrinology/metabolism clinic. Go to the emergency department for seizures, breathing difficulties, or altered consciousness.',
    isGenetic:
      'Yes, typically autosomal recessive, related to variants in the BTD gene. Affected families are advised to seek genetic counseling.',
    hasTreatment:
      "Yes, there is a clear management plan. The core is long-term supplementation with free biotin under a doctor's guidance, along with developmental, hearing, vision, and metabolic follow-up. Do not stop or modify the supplementation plan on your own.",
    commonDelayReason:
      'When not included in screening, or when abnormal screening results are not followed up in time, symptoms may be mistaken for eczema, epilepsy, encephalitis, developmental delay, or other neurocutaneous conditions, leading to delayed diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening indicates abnormal biotinidase activity or requests a recall for rechecking.',
      'Infants and young children develop seizures, low muscle tone, feeding difficulties, developmental delay, along with rash or hair loss.',
      'Recurrent eczema-like rash, hair loss, and fungal infections with neurological symptoms.',
      'Unexplained hearing loss, optic nerve problems, or developmental regression.',
      'Family history of biotinidase deficiency or BTD pathogenic variant carrier.',
    ],
    commonWrongTurns: [
      'Long-term treating the rash as ordinary eczema without considering the clues of seizures, hair loss, and development.',
      'Only controlling seizures with anti-epileptic drugs without investigating treatable genetic metabolic disorders.',
      'Waiting too long after an abnormal screening result without completing follow-up testing.',
      'Self-stopping biotin after symptom improvement, increasing the risk of relapse.',
    ],
    firstDepartments: [
      'Genetic Metabolism Department',
      'Pediatric Endocrinology/Metabolism Clinic',
      'Emergency Department (for seizures, breathing difficulty, or altered consciousness)',
      'Neurology, Dermatology, ENT, or Ophthalmology (coordinated evaluation based on affected systems)',
    ],
    diagnosisChecklist: [
      'Keep newborn screening reports and recall notices.',
      'Bring all records related to seizures, rash, hair loss, development, hearing, and vision.',
      'Confirm whether serum biotinidase activity testing and BTD gene testing have been done.',
      'Ask the doctor about whether it is profound deficiency, partial deficiency, or carrier status, and the corresponding follow-up plan.',
    ],
    testsToAskAbout: [
      'Serum biotinidase activity testing.',
      'BTD gene testing and parental carrier testing.',
      'Newborn screening review and necessary metabolic testing.',
      'If symptomatic: hearing, vision, neurodevelopmental, and brain MRI assessments.',
      'During seizures or metabolic crisis: blood gas, electrolytes, blood glucose, lactate, ammonia, and urine organic acids.',
    ],
    questionsForDoctor: [
      'Does my child have profound or partial deficiency? How will this affect long-term follow-up?',
      'How long does biotin need to be supplemented? Under what circumstances should I never stop it on my own?',
      'What rehabilitation and support options are available for hearing, vision, or developmental issues that have already occurred?',
      'Are there special precautions during fever, infection, or inability to eat?',
      'What genetic counseling and testing are recommended for siblings or for future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Without treatment, biotinidase deficiency can present with seizures, low muscle tone, developmental delay, rash, hair loss, breathing problems, feeding difficulties, hearing loss, or optic nerve involvement. Some patients experience more noticeable symptoms during infections, fever, or other stressors. Screening and early treatment can significantly alter the disease course.</p>',
    diagnosis:
      '<p>Diagnosis is primarily based on serum biotinidase activity testing, and can be confirmed with BTD gene testing to determine subtype and genetic risk. An abnormal newborn screening result does not equal a confirmed diagnosis but requires timely follow-up testing. Patients who already have neurological, skin, hearing, or vision problems also need specialist evaluation.</p>',
    treatment:
      "<p>The core of treatment is long-term supplementation with free biotin under a doctor's guidance. Early treatment can usually prevent many symptoms; hearing or vision damage that has already occurred may not fully reverse, making early identification especially important. Specific supplementation dose, follow-up frequency, and special situation management should be determined by a genetic metabolism specialist.</p>",
    longTermCare:
      '<p>Long-term follow-up focuses on growth and development, neurological status, skin health, hearing, vision, and treatment adherence. Families should keep diagnostic records and medication instructions, and avoid stopping treatment on their own. When the child enters kindergarten, school, or receives care in a different location, a brief medical summary can be prepared to help caregivers understand the importance of continuous supplementation.</p>',
    fertilityOrFamily:
      '<p>This condition is typically inherited in an autosomal recessive pattern. Affected families can learn about options such as parental carrier testing, sibling screening, recurrence risk for future pregnancies, prenatal diagnosis, or preimplantation genetic testing through genetic counseling.</p>',
    emergencySigns:
      '<p>If seizures are prolonged, consciousness is altered, breathing is difficult, there is significant drowsiness, repeated vomiting, low blood sugar, or signs of metabolic acidosis, seek emergency care promptly. Inform the doctor about the suspected or confirmed diagnosis of biotinidase deficiency and the current supplementation plan.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Biotinidase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
    },
    {
      name: 'MedlinePlus Genetics: Biotinidase deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/biotinidase-deficiency/',
    },
    {
      name: 'HRSA Newborn Screening: Biotinidase Deficiency',
      type: 'official',
      url: 'https://newbornscreening.hrsa.gov/conditions/biotinidase-deficiency',
    },
  ],
  symptoms:
    '<p>Without treatment, symptoms may include seizures, low muscle tone, developmental delay, rash, hair loss, and hearing or vision problems.</p>',
  diagnosis:
    '<p>Diagnosis is primarily based on serum biotinidase activity testing, and can be supplemented with BTD gene testing to confirm genetic findings.</p>',
  treatment:
    "<p>The core of treatment is long-term supplementation with free biotin under a doctor's guidance, along with ongoing monitoring of development, hearing, vision, and metabolic safety.</p>",
  prognosis:
    '<p>Early screening and continuous treatment can usually prevent many symptoms; hearing or vision damage that has already occurred may not be fully reversible.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 314,
    name: 'biotinidase-deficiency-journey.png',
    url: '/images/diseases/biotinidase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

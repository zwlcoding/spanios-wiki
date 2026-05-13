import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAsphyxiatingThoracicDystrophyJeuneSyndrome: DiseaseDraft = {
  ...entity(9, 'disease-asphyxiating-thoracic-dystrophy-jeune-syndrome'),
  name: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
  nameEn: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
  alias:
    'Asphyxiating Thoracic Dystrophy, Jeune Syndrome, Short-rib Thoracic Dysplasia-related Conditions',
  slug: 'asphyxiating-thoracic-dystrophy-jeune-syndrome',
  oneSentence:
    'Jeune Syndrome is a genetic skeletal ciliopathy, often presenting with a narrow chest, short ribs, short limbs, and respiratory problems in infancy, with possible involvement of kidneys, liver, or retina.',
  plainName:
    'A genetic skeletal developmental disorder with respiratory risks due to a narrow chest',
  prevalence:
    'Estimated approximately 1 in 100,000-130,000 people, a rare genetic skeletal developmental abnormality.',
  quickLook: {
    whatItIs:
      'A narrow chest limits lung expansion. Severe cases may develop respiratory distress shortly after birth. Some children improve over time, but ongoing monitoring is needed for kidney, liver, pancreas, teeth, and retinal involvement.',
    whoToSeeFirst:
      'For newborns or infants with breathing difficulties, start with pediatrics, neonatology, or emergency medicine; after stabilization, evaluation typically involves pediatric pulmonology, orthopedics, nephrology, ophthalmology, and genetic counseling.',
    isGenetic:
      'Typically autosomal recessive inheritance, with multiple associated genes. Diagnosis and family risk assessment require genetic testing combined with genetic counseling.',
    hasTreatment:
      'Current management focuses on respiratory support, infection prevention, nutrition, growth and development, and multi-organ follow-up; a few patients with severe chest restriction may need surgical evaluation by a specialized team.',
    commonDelayReason:
      'Mild cases may be mistaken for a small chest, recurrent respiratory infections, or short stature, without integrating skeletal, respiratory, renal, and ocular clues into a unified assessment.',
  },
  patientJourney: {
    whenToSuspect: [
      'Narrow chest apparent at birth or in infancy with rapid, labored breathing or recurrent low oxygen.',
      'Short limbs, short ribs, short stature, or associated polydactyly (extra fingers/toes) and other skeletal clues.',
      'Recurrent respiratory infections, feeding difficulties, or impaired growth and development.',
      'Skeletal abnormalities alongside kidney, liver, or vision-related issues.',
      'Family history of similar narrow chest, infant respiratory failure, or short-rib skeletal dysplasia.',
    ],
    commonWrongTurns: [
      'Treating only as pneumonia or wheezing without assessing chest and skeletal development.',
      'Seeing only orthopedics without simultaneous evaluation of respiratory reserve and multi-system involvement.',
      'Stopping follow-up after the neonatal period, missing later risks of kidney, liver, or retinal disease.',
    ],
    firstDepartments: [
      'Pediatrics or Neonatology',
      'Pediatric Pulmonology',
      'Pediatric Orthopedics',
      'Pediatric Nephrology',
      'Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Gather birth records, chest X-rays or skeletal imaging, respiratory support records, and oxygen saturation data.',
      'Record height, weight, growth curve, limb proportions, polydactyly, and family history.',
      'Bring kidney function, liver function, eye exam results, and previous infection-related hospitalization records.',
      'Confirm with your doctor whether genetic testing for short-rib thoracic dysplasia-related genes is needed.',
    ],
    testsToAskAbout: [
      'Chest and skeletal imaging to evaluate chest, ribs, limbs, and pelvis.',
      'Oxygen saturation, respiratory function, or sleep breathing assessments.',
      'Kidney function, urinalysis, liver function, and abdominal ultrasound.',
      'Ophthalmology examination, focusing on retinal findings.',
      'Related genetic testing and family verification.',
    ],
    questionsForDoctor: [
      'What stage of respiratory risk are we at, and what signs should we monitor at home?',
      'Is long-term oxygen therapy, non-invasive ventilation, or other respiratory support needed?',
      'How often should kidney, liver, and eye follow-ups be scheduled?',
      'Is chest surgery an option, and what conditions must be met?',
      'How is the genetic risk assessed for future pregnancies or family members?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Jeune Syndrome often presents with a narrow chest, short ribs, short limbs, short stature, and breathing difficulties in infancy. Some patients may have polydactyly, pelvic or clavicular abnormalities, or other skeletal findings. Severe chest restriction may lead to recurrent low oxygen or respiratory failure.</p><p>Patients who survive infancy still need monitoring for kidney, liver, pancreas, tooth, and retinal involvement.</p>',
    diagnosis:
      '<p>Diagnosis typically combines birth and respiratory history, chest and skeletal imaging, physical examination, multi-system screening, and genetic testing. Doctors will differentiate from other short-rib thoracic dysplasias, achondroplasia-like disorders, and other skeletal ciliopathies.</p>',
    treatment:
      '<p>Treatment is primarily supportive and managed by a multi-disciplinary team, including respiratory support, infection prevention, nutritional support, growth and development monitoring, and kidney, liver, and eye follow-up. Whether chest surgery is needed should be evaluated jointly by an experienced pediatric orthopedic, pulmonology, and critical care team.</p>',
    longTermCare:
      '<p>Long-term care focuses on respiratory stability, recurrent infection prevention, nutrition, growth and development, kidney function, liver function, and retinal follow-up. Families should agree with their care team on a plan for handling acute breathing difficulty, fever or infection, and low oxygen.</p>',
    fertilityOrFamily:
      '<p>This condition is mostly autosomal recessive with multiple associated genes. After diagnosis, genetic counseling is recommended to discuss parental carrier testing, recurrence risk for future pregnancies, and options such as prenatal or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Seek immediate medical care if an infant shows rapid breathing, chest retractions, blue lips, feeding difficulties, decreased alertness, dropping oxygen levels, or worsening breathing with fever. For patients with known kidney or liver involvement, also seek prompt evaluation if there is decreased urine output, noticeable swelling, or worsening jaundice.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Asphyxiating thoracic dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/asphyxiating-thoracic-dystrophy/',
    },
    {
      name: 'NCBI MedGen: Asphyxiating thoracic dystrophy',
      type: 'official',
      url: 'https://www.ncbi.nlm.nih.gov/gtr/conditions/C0036069',
    },
  ],
  symptoms:
    '<p>Common clues include a narrow chest, short ribs, short limbs, breathing difficulties in infancy, and possible kidney, liver, or retinal involvement.</p>',
  diagnosis:
    '<p>Evaluation typically includes chest and skeletal imaging, respiratory assessment, multi-system screening, family history, and genetic testing.</p>',
  treatment:
    '<p>Management focuses on respiratory support, infection prevention, nutrition and growth, multi-system follow-up, and chest surgery evaluation when needed.</p>',
  prognosis:
    '<p>Prognosis depends on the degree of chest narrowing, need for respiratory support, and multi-system involvement. Even after the early respiratory risk period, long-term follow-up is needed.</p>',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 305,
    name: 'asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
    url: '/images/diseases/asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

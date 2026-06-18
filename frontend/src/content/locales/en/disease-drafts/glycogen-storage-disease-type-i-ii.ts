import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlycogenStorageDiseaseTypeIIi: DiseaseDraft = {
  ...entity(37, 'disease-glycogen-storage-disease-type-i-ii'),
  name: 'Glycogen Storage Disease (Type I, II)',
  nameEn: 'Glycogen Storage Disease (Type I, II)',
  alias: 'Glycogen Storage Disease Type I, GSD I, Pompe Disease, GSD II',
  slug: 'glycogen-storage-disease-type-i-ii',
  oneSentence:
    'Type I and Type II glycogen storage disease are both inherited metabolic conditions affecting how the body processes glycogen, but Type I mainly impacts blood sugar and liver/kidney metabolism, while Type II (Pompe disease) mainly affects heart muscle, skeletal muscles, and breathing muscles.',
  plainName:
    'A group of inherited metabolic disorders where the body has trouble processing glycogen; Type I and Type II require different medical approaches',
  prevalence:
    'Both are rare diseases. Estimated rates vary widely across countries and screening programs. Some regions have added these to newborn screening or high-risk screening.',
  quickLook: {
    whatItIs:
      'This entry combines Type I and Type II, but they are two different conditions with different mechanisms. GSD Type I affects the metabolic pathways that maintain blood sugar; GSD Type II (Pompe disease) is caused by deficiency of acid alpha-glucosidase in lysosomes, leading to glycogen buildup in muscles and other tissues.',
    whoToSeeFirst:
      'For recurrent low blood sugar, enlarged liver, abnormal lactate/uric acid/triglycerides, see genetics/metabolism, pediatric endocrinology, or pediatric gastroenterology/hepatology. For infants with heart muscle thickening, muscle weakness, poor feeding, or adults with proximal muscle weakness and breathing difficulties, see genetics/metabolism, neuromuscular specialist, or pediatric cardiology/respiratory.',
    isGenetic:
      'Yes, both Type I and Type II are usually autosomal recessive, but the genes involved and testing pathways differ.',
    hasTreatment:
      'Specialized management plans exist. GSD Type I focuses on preventing low blood sugar and metabolic imbalance; Pompe disease can be evaluated for enzyme replacement therapy, respiratory and muscle strength management. Specific treatment plans should be developed by specialists.',
    commonDelayReason:
      'GSD Type I may be mistaken for ordinary hypoglycemia, liver disease, or nutritional problems; Pompe disease may be mistaken for myopathy, cardiomyopathy, developmental delay, or respiratory issues. Without enzyme activity and genetic testing, diagnosis can be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infants and young children with hypoglycemia after fasting, seizures, enlarged liver, abdominal bloating, poor growth, or abnormal lactate/uric acid/lipids suggest GSD Type I.',
      'GSD Type Ib may also show clues like recurrent infections, oral or gut ulcers, and low neutrophil counts.',
      'Infants with low muscle tone, poor feeding, heart muscle thickening, breathing difficulties, or delayed motor development suggest infantile-onset Pompe disease.',
      'Children or adults with proximal muscle weakness, difficulty climbing stairs or standing up, fatigue, nighttime breathing problems, or unexplained decline in breathing function suggest late-onset Pompe disease.',
      'Newborn screening, enzyme activity, or family genetic results suggesting risk for glycogen storage disease.',
    ],
    commonWrongTurns: [
      'Attributing GSD Type I hypoglycemia to simply having fasted too long, without noticing the enlarged liver and abnormal lactate/uric acid/lipids.',
      'Managing fatty liver or enlarged liver without investigating for glycogen storage disease.',
      'Distributing Pompe disease infant symptoms across cardiology, respiratory, and rehabilitation without coordinating toward a metabolic myopathy diagnosis.',
      'Adults with late-onset Pompe disease being treated long-term for ordinary back/leg weakness, myositis, or lack of exercise without assessing breathing muscles.',
    ],
    firstDepartments: [
      'Genetics/Metabolism or Medical Genetics',
      'Pediatric Endocrinology or Pediatric Gastroenterology/Hepatology (for GSD Type I)',
      'Neurology/Neuromuscular (for Pompe disease)',
      'Pediatric Cardiology or Cardiovascular Medicine (when heart is involved)',
      'Respiratory and Rehabilitation Medicine',
    ],
    diagnosisChecklist: [
      'First ask the doctor to determine whether it is more like GSD Type I, Pompe disease, or another glycogen storage disease.',
      'Keep records of blood sugar, lactate, ketones, uric acid, lipids, liver function, and imaging from hypoglycemia episodes.',
      'If GSD Type I is suspected, ask about genetic testing for G6PC, SLC37A4, and related genes.',
      'If Pompe disease is suspected, ask about GAA enzyme activity, GAA gene testing, CK, cardiac and respiratory muscle assessment.',
      'Prepare for specialty emergency plans for fasting, infections, surgery, anesthesia, or breathing difficulties.',
    ],
    testsToAskAbout: [
      'Metabolic tests related to hypoglycemia, lactate, uric acid, triglycerides, liver and kidney function.',
      'Abdominal ultrasound or imaging of liver and kidneys; monitoring for liver adenomas when needed.',
      'GSD Type I genetic testing.',
      'Pompe disease assessments including GAA enzyme activity, GAA gene testing, CK, urinary Hex4.',
      'ECG, echocardiogram, pulmonary function, and sleep breathing assessment.',
    ],
    questionsForDoctor: [
      'Does the presentation currently fit Type I, Type II, or another glycogen storage disease? What is the basis?',
      'What does the family need to do to avoid fasting or low blood sugar at home? How should the plan work when the child is sick?',
      'If it is Pompe disease, how much are the heart, breathing muscles, and motor function currently affected?',
      'Is a specific treatment evaluation needed? What are the treatment goals and monitoring targets?',
      'How should family screening and future pregnancy risks be arranged?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Common signs of GSD Type I include poor fasting tolerance in infants and young children, hypoglycemia, enlarged liver, abdominal bloating, poor growth, lactic acidosis, and abnormal uric acid and blood lipids. GSD Type Ib may also have low neutrophil counts and recurrent infections. GSD Type II (Pompe disease) infantile type may show low muscle tone, feeding difficulty, heart muscle thickening, breathing difficulty, and delayed motor development. Late-onset type often presents as proximal muscle weakness, fatigue, and breathing muscle involvement.</p>',
    diagnosis:
      '<p>Diagnosis first requires clarifying which type it is. GSD Type I assessment focuses on metabolic profile during hypoglycemia, liver and kidney involvement, and genetic testing for G6PC/SLC37A4. Pompe disease assessment focuses on GAA enzyme activity, GAA gene testing, muscle enzymes, and cardiac and respiratory evaluation. Doctors also differentiate from other glycogen storage diseases, fatty acid oxidation disorders, mitochondrial diseases, muscular dystrophies, and endocrine-related hypoglycemia.</p>',
    treatment:
      '<p>GSD Type I management centers on preventing hypoglycemia and metabolic imbalance, nutritional plans, and monitoring for liver, kidney, and infection risks. Pompe disease management includes evaluation for enzyme replacement therapy, cardiac and lung function, exercise and rehabilitation support, respiratory management, and complication monitoring. Both conditions require a specialty team to develop written daily and emergency plans.</p>',
    longTermCare:
      '<p>Long-term care requires maintaining records of diagnosis, genetics, enzyme activity, nutrition plans, cardiac and respiratory assessments, and imaging follow-up. GSD Type I focuses on hypoglycemia prevention, liver and kidney complications, and metabolic markers. Pompe disease focuses on heart, breathing muscles, motor function, sleep breathing, and treatment response.</p>',
    fertilityOrFamily:
      '<p>GSD Type I and Pompe disease are usually autosomal recessive. After identifying pathogenic variants, parents, siblings, and relatives planning pregnancy can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>GSD Type I patients should go to the emergency department if they cannot eat, have repeated vomiting, hypoglycemia, sleepiness, seizures, or infection. Pompe disease patients should seek medical care quickly for breathing difficulty, significant feeding decline, signs of heart failure, nighttime underventilation, or worsening breathing after infection. Always inform medical staff about the specific type of glycogen storage disease.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Glycogen Storage Disease Type I',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
    },
    {
      name: 'GeneReviews: Pompe Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1261/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Glycogen Storage Disease Type II',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470558/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Type I mainly presents with hypoglycemia, enlarged liver, abnormal lactate/uric acid/lipids; Type II Pompe disease mainly presents with muscle weakness, heart muscle or breathing muscle involvement.</p>',
  diagnosis:
    '<p>Assessment first requires distinguishing the type: Type I uses metabolic markers and GSD Type I genetic testing; Type II uses GAA enzyme activity, GAA gene testing, cardiac and muscle assessment.</p>',
  treatment:
    '<p>Management includes metabolic nutrition plans, emergency plans, cardiac and muscle follow-up, and Pompe disease-specific treatment evaluation.</p>',
  prognosis:
    '<p>Prognosis depends on the specific type, age at onset, timing of screening and treatment, cardiac or liver/kidney complications, and quality of long-term follow-up.</p>',
  sourceName: 'GeneReviews: Glycogen Storage Disease Type I',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
  categorySlug: 'metabolic',
  charityIds: [26, 49],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 336,
    name: 'glycogen-storage-disease-type-i-ii-journey.png',
    url: '/images/diseases/glycogen-storage-disease-type-i-ii-journey.png',
  },
  tagSlugs: ['genetic-counseling', 'neuromuscular'],
};

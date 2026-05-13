import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryFructoseIntolerance: DiseaseDraft = {
  ...entity(42, 'disease-hereditary-fructose-intolerance'),
  name: 'Hereditary Fructose Intolerance',
  nameEn: 'Hereditary Fructose Intolerance',
  alias:
    'HFI, ALDOB-Related Fructose Intolerance, Hereditary Fructose Metabolism Disorder',
  slug: 'hereditary-fructose-intolerance',
  oneSentence:
    'Hereditary Fructose Intolerance is an ALDOB-related fructose metabolism disorder. Ingestion of fructose, sucrose, or sorbitol may cause vomiting, low blood sugar, liver and kidney damage, among other risks.',
  plainName:
    'A genetic metabolic disorder that causes severe discomfort after eating foods or ingredients containing certain types of fructose',
  prevalence:
    'MedlinePlus Genetics estimates a global incidence of approximately 1/20,000-1/30,000 annually; mild cases or those who spontaneously avoid dietary triggers may be identified later.',
  quickLook: {
    whatItIs:
      'HFI is related to insufficient aldolase B function. Fructose metabolism intermediates accumulate in the liver, kidneys, and intestines, which can lead to hypoglycemia, vomiting, abnormal liver function, and long-term organ damage.',
    whoToSeeFirst:
      'When infants develop repeated vomiting, sweating, drowsiness, hypoglycemia, or abnormal liver function after introduction of fruits, juice, sucrose-containing foods, or certain formulas/medications, they should be evaluated by a metabolic genetics specialist, pediatric gastroenterology/hepatology department, or emergency department.',
    isGenetic:
      'Yes, typically autosomal recessive inheritance, related to biallelic pathogenic ALDOB variants.',
    hasTreatment:
      'Yes, there is a clear dietary avoidance and nutritional follow-up management pathway. Fructose loading tests should not be performed when HFI is suspected, and a safe dietary plan should be developed by metabolic specialists and dietitians.',
    commonDelayReason:
      'Often mistaken for picky eating, gastroenteritis, food allergies, lactose intolerance, or ordinary hypoglycemia; children may naturally dislike sweet foods and fruits, which can mask important clues.',
  },
  patientJourney: {
    whenToSuspect: [
      'Vomiting, sweating, drowsiness, or hypoglycemia after consuming fruits, juice, sweets, sucrose, or sorbitol-containing ingredients.',
      'Repeated abdominal pain, bloating, food refusal, poor weight gain, or enlarged liver after infant feeding.',
      'Unexplained abnormal liver function, jaundice, coagulation abnormalities, hypoglycemia, or kidney problems related to diet.',
      'A child who clearly dislikes sweet foods, fruits, or sugar-containing foods and has a history of discomfort after eating them.',
      'Family history of HFI, infant hypoglycemia, liver or kidney damage, or consanguinity.',
    ],
    commonWrongTurns: [
      'Attributing symptoms to ordinary gastroenteritis or food allergies without asking about specific carbohydrate components.',
      'Repeatedly attempting to "train" the child to eat fruits and sweets, causing repeated exposure.',
      'Confusing fructose malabsorption with hereditary fructose intolerance, underestimating the risks of hypoglycemia and liver/kidney damage.',
      'Using medications, supplements, or oral solutions containing sucrose, fructose, or sorbitol without checking ingredients first.',
    ],
    firstDepartments: [
      'Metabolic Genetics / Medical Genetics Department',
      'Pediatric Gastroenterology and Hepatology Department',
      'Pediatric Emergency Department (when there is risk of hypoglycemia, drowsiness, seizures, or liver failure)',
      'Nutrition Department (metabolic nutrition specialty)',
      'Nephrology / Hepatology Department (when organs are affected)',
    ],
    diagnosisChecklist: [
      'Document all foods, formulas, medications, supplements consumed before each episode and the timeline of symptoms.',
      'Keep records of hypoglycemia, lactate, electrolytes, liver and kidney function, coagulation tests, and urinalysis results.',
      'Inquire about ALDOB genetic testing; avoid arranging fructose loading tests independently or without specialist guidance.',
      'Ask a dietitian to help verify ingredients in daily foods, medication excipients, and school/daycare meals.',
      'When family members have pregnancy plans, prepare genetic reports for genetic counseling.',
    ],
    testsToAskAbout: [
      'ALDOB genetic testing.',
      'Blood sugar, lactate, electrolytes, uric acid, and acid-base status during hypoglycemic episodes.',
      'Liver function, bilirubin, coagulation, albumin, and abdominal ultrasound.',
      'Kidney function, electrolytes, and urinalysis.',
      'Nutritional status and micronutrient assessment.',
    ],
    questionsForDoctor: [
      "Do the child's symptoms match HFI? Which ingredients need to be avoided immediately?",
      'Can genetic testing confirm the diagnosis? Why is a fructose loading test not recommended?',
      'How should I verify ingredients in daily foods, medications, vaccines, or oral solutions?',
      'Is there already liver or kidney involvement? How often should follow-up visits be scheduled?',
      'What genetic counseling is needed for family screening and future pregnancy planning?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>HFI often presents with nausea, vomiting, sweating, drowsiness, hypoglycemia, abdominal pain, bloating, food refusal, poor weight gain, and hepatomegaly after exposure to fructose, sucrose, or sorbitol. Repeated exposure may lead to jaundice, abnormal liver function, coagulation problems, and kidney involvement. In severe cases, there may be risk of seizures, coma, or liver/kidney failure.</p>',
    diagnosis:
      '<p>Diagnosis relies on symptoms following dietary exposure, metabolic and liver/kidney tests, and ALDOB genetic testing. GeneReviews clearly states that fructose tolerance/loading tests are dangerous and should not be used as routine diagnostic methods. Doctors will also differentiate between fructose malabsorption, food allergies, gastroenteritis, glycogen storage diseases, galactosemia, and other causes of hypoglycemia or liver disease.</p>',
    treatment:
      '<p>The core of management is strict avoidance of fructose, sucrose, sorbitol, and related sources, with metabolic dietitians ensuring balanced nutrition and micronutrient supplementation. Acute hypoglycemia or liver/kidney involvement requires hospital-based treatment. All dietary and medication excipient verification should follow specialist protocols.</p>',
    longTermCare:
      '<p>Long-term care focuses on food and medication ingredient identification, communication with schools and childcare settings, nutritional status, liver/kidney function, and hypoglycemia prevention. Families may prepare a "list of prohibited ingredients and emergency instructions" to prevent accidental consumption and avoid use of fructose-containing products in medical settings.</p>',
    fertilityOrFamily:
      '<p>HFI is autosomal recessive. After identifying ALDOB variants, parents, siblings, and relatives with pregnancy plans can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>After accidental ingestion, repeated vomiting, drowsiness, sweating, seizures, hypoglycemia, jaundice, bleeding tendency, reduced urine output, or changes in mental status require immediate emergency care. Clearly communicate suspected or confirmed HFI to avoid continued intake of related carbohydrate sources.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Hereditary Fructose Intolerance',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
    },
    {
      name: 'MedlinePlus Genetics: Hereditary fructose intolerance',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hereditary-fructose-intolerance/',
    },
  ],
  symptoms:
    '<p>After ingesting fructose, sucrose, or sorbitol, symptoms may include vomiting, sweating, hypoglycemia, abdominal pain, food refusal, hepatomegaly, jaundice, or liver/kidney involvement.</p>',
  diagnosis:
    '<p>Evaluation includes dietary exposure history, hypoglycemia and liver/kidney metabolic tests, and ALDOB genetic testing; dangerous fructose loading tests should be avoided.</p>',
  treatment:
    '<p>Management centers on strict avoidance of related carbohydrate sources, dietitian follow-up, medication excipient verification, and management of acute hypoglycemia/liver/kidney risks.</p>',
  prognosis:
    '<p>With early identification and avoidance of triggers, most patients can live stable lives; repeated accidental exposure or delayed identification increases the risk of liver/kidney damage.</p>',
  sourceName: 'GeneReviews: Hereditary Fructose Intolerance',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 341,
    name: 'hereditary-fructose-intolerance-journey.png',
    url: '/images/diseases/hereditary-fructose-intolerance-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

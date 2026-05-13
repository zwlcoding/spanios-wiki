import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseShortBowelSyndrome: DiseaseDraft = {
  ...entity(2073, 'disease-short-bowel-syndrome'),
  name: 'Short bowel syndrome',
  nameEn: 'Short bowel syndrome',
  alias: 'SBS; short bowel syndrome; China Second Rare Disease Catalog item 73',
  oneSentence:
    'Short bowel syndrome occurs when the small intestine is too short or too damaged to absorb enough fluids, electrolytes, and nutrients, causing diarrhea, dehydration, malnutrition, and sometimes long-term parenteral nutrition needs.',
  plainName:
    'A condition where there is not enough working intestine to absorb food and fluid well',
  prevalence:
    "Included in China's second rare disease catalog; chronic SBS is rare and often follows bowel resection, congenital intestinal disorders, necrotizing enterocolitis, or Crohn disease.",
  quickLook: {
    whatItIs:
      'The small intestine absorbs most nutrients and fluids. In SBS, remaining bowel length or function is insufficient, so enteral nutrition, oral rehydration, or parenteral nutrition may be needed.',
    whoToSeeFirst:
      'Persistent high-output diarrhea, weight loss, dehydration, electrolyte problems after bowel surgery, or poor child growth should be assessed by gastroenterology, nutrition support, and intestinal rehabilitation teams.',
    isGenetic:
      'Most cases are not inherited. Infants may have congenital atresia, gastroschisis, or malrotation; adults often have surgery, ischemia, Crohn disease, or radiation injury.',
    hasTreatment:
      'Care includes individualized diet, oral rehydration, enteral nutrition, parenteral nutrition, antidiarrheal and acid-suppressing medicines, GLP-2 analogs, bowel reconstruction, or transplant assessment.',
    commonDelayReason:
      'People may be treated as having ordinary diarrhea or slow postoperative recovery without systematic assessment of remaining bowel, colon continuity, electrolytes, and parenteral nutrition complications.',
  },
  patientJourney: {
    whenToSuspect: [
      'Major small bowel resection, necrotizing enterocolitis, atresia, gastroschisis, malrotation, Crohn disease, or intestinal ischemia history.',
      'Long-term watery or fatty diarrhea, weight loss, dehydration, low urine, low magnesium or potassium, or kidney stones.',
      'Poor feeding or growth in children, or need for long-term parenteral nutrition or IV fluids.',
    ],
    commonWrongTurns: [
      'Treating diarrhea alone without dehydration, electrolyte, nutrition, kidney, and liver monitoring.',
      'Drinking large amounts of plain water or sugary drinks that worsen high output and dehydration.',
      'Long-term parenteral nutrition without catheter infection, thrombosis, and liver disease monitoring.',
    ],
    firstDepartments: [
      'Gastroenterology or pediatric gastroenterology',
      'Clinical nutrition',
      'Intestinal rehabilitation team',
      'General or pediatric surgery',
    ],
    diagnosisChecklist: [
      'Bring operative reports showing remaining bowel length, ileocecal valve, and colon continuity.',
      'Bring weight or growth curves, daily stool or ostomy output, urine, diet, and rehydration records.',
      'Bring electrolytes, liver and kidney tests, trace elements, vitamins, bone density, catheter infection, and thrombosis records.',
    ],
    testsToAskAbout: [
      'Whether this is acute, adaptation, or maintenance stage and how much adaptation remains possible.',
      'How oral rehydration, diet, enteral nutrition, and parenteral nutrition should be adjusted.',
      'Whether teduglutide or another GLP-2 analog, bowel reconstruction, or intestinal transplant evaluation is appropriate.',
    ],
    questionsForDoctor: [
      'Which missing or nonworking bowel segments are driving my high output or diarrhea?',
      'Which drinks, foods, and supplements are right for me, and which worsen dehydration?',
      'How should catheter infection, liver disease, kidney stones, bone loss, and micronutrient deficiency be monitored?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The core problem in SBS is malabsorption. Symptoms include diarrhea or high ostomy output, thirst, low urine, fatigue, weight loss, malnutrition, low sodium, potassium or magnesium, fat-soluble vitamin deficiency, and poor growth in children.</p><p>Complications include dehydration, kidney stones, gallstones, low bone density, bacterial overgrowth, catheter infection, thrombosis, and intestinal failure-associated liver disease. Severity depends on remaining bowel length, colon and ileocecal valve continuity, cause, and adaptation.</p>',
    diagnosis:
      '<p>Diagnosis uses surgical and medical history, remaining bowel anatomy, stool or ostomy output, nutrition status, and laboratory testing. Clinicians assess fluids, electrolytes, liver and kidney function, trace elements, vitamins, bone health, and parenteral nutrition complications.</p><p>Imaging and endoscopy may assess remaining bowel, strictures, inflammation, or bacterial overgrowth. In children, growth and feeding ability are central.</p>',
    treatment:
      '<p>Care aims to maintain hydration and nutrition, support intestinal adaptation, reduce parenteral nutrition dependence, and prevent complications. Options include individualized diet, oral rehydration solution, enteral nutrition, parenteral nutrition, antidiarrheal medicines, acid suppression, bile acid binders, or antibiotics.</p><p>Some chronic intestinal failure patients may be assessed for GLP-2 analog therapy to improve absorption. Correctable anatomy may lead to bowel reconstruction. Intestinal transplant is considered for life-threatening long-term parenteral nutrition complications.</p>',
    longTermCare:
      '<p>Long-term care involves gastroenterology, nutrition, surgery, nursing, pharmacy, and psychosocial support. Families track weight, intake and output, urine, ostomy output, fever, and catheter issues, with scheduled electrolyte, liver, kidney, micronutrient, vitamin, and bone monitoring.</p><p>Patients on parenteral nutrition need careful catheter care. Fever or chills require prompt evaluation for catheter infection.</p>',
    fertilityOrFamily:
      '<p>SBS is usually not inherited. If a child had a congenital intestinal anomaly, future pregnancy counseling can involve obstetrics, genetics, and pediatric surgery to discuss recurrence risk and prenatal ultrasound clues.</p>',
    emergencySigns:
      '<p>Emergency care is needed for markedly reduced urine, dizziness or fainting, persistent vomiting, severe abdominal pain, fever or chills, catheter redness or drainage, bloody stool, confusion, or in children no tears, lethargy, or signs of dehydration.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Short Bowel Syndrome',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/short-bowel-syndrome',
    },
    {
      name: 'NIDDK: Treatment of Short Bowel Syndrome',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/short-bowel-syndrome/treatment',
    },
  ],
  symptoms:
    '<p>Common features include diarrhea or high ostomy output, dehydration, weight loss, fatigue, electrolyte problems, malnutrition, vitamin and trace element deficiency, and poor growth in children.</p>',
  diagnosis:
    '<p>Diagnosis combines bowel surgery or disease history, remaining bowel anatomy, intake and output, nutrition status, blood and stool tests, imaging, and complication assessment.</p>',
  treatment:
    '<p>Care includes individualized diet, oral rehydration, enteral or parenteral nutrition, medicines to reduce output and improve absorption, and when needed bowel reconstruction or transplant assessment.</p>',
  prognosis:
    '<p>Outlook depends on remaining bowel length and segment, colon continuity, intestinal adaptation, parenteral nutrition complications, and access to intestinal rehabilitation.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'short-bowel-syndrome',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 427,
    name: 'short-bowel-syndrome-journey.png',
    url: '/images/diseases/short-bowel-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

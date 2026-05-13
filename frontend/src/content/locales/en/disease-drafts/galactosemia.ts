import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGalactosemia: DiseaseDraft = {
  ...entity(30, 'disease-galactosemia'),
  name: 'Galactosemia',
  nameEn: 'Galactosemia',
  alias:
    'Classic Galactosemia, GALT Deficiency, Galactose-1-Phosphate Uridyltransferase Deficiency',
  slug: 'galactosemia',
  oneSentence:
    'Galactosemia is a group of galactose metabolism disorders; the classic type can quickly cause feeding difficulties, jaundice, liver damage, infection, and bleeding risk in newborns after lactose intake.',
  plainName:
    'A genetic metabolic condition where the baby cannot properly process galactose from milk',
  prevalence:
    'MedlinePlus describes the classic type as affecting approximately 1 in 30,000 to 60,000 newborns, with other types being rarer.',
  quickLook: {
    whatItIs:
      'Galactose comes from lactose. Defects in enzymes like GALT cause galactose-related metabolites to build up; if not identified early, classic type newborns can develop serious liver and infection complications.',
    whoToSeeFirst:
      'If newborn screening is abnormal, or if a newborn shows poor feeding, vomiting, jaundice, lethargy, poor weight gain, bleeding, or suspected sepsis after starting milk, immediately seek pediatric/neonatal evaluation; after diagnosis, long-term management by metabolic genetics specialists.',
    isGenetic:
      'Yes, most commonly autosomal recessive. The classic type is mostly related to biallelic pathogenic variants in GALT.',
    hasTreatment:
      'Dietary and long-term follow-up management plans exist, but different types and variant severity vary, requiring guidance from metabolic specialists and dietitians.',
    commonDelayReason:
      'Early symptoms can resemble physiological jaundice, breast milk jaundice, feeding problems, or infections; if follow-up for abnormal newborn screening is not prompt, diagnosis may be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening suggests abnormal galactose metabolism or abnormal GALT activity.',
      'Poor feeding, vomiting, diarrhea, lethargy, or poor weight gain after starting breast milk or regular formula after birth.',
      'Worsening jaundice, enlarged liver, abnormal clotting, low blood sugar, or suspected sepsis.',
      'Cataracts in infants or long-term developmental, speech, or motor problems with a history of neonatal jaundice/liver disease.',
      'Family history of galactosemia or unexplained early infant death.',
    ],
    commonWrongTurns: [
      'Attributing jaundice only to physiological or breast milk jaundice without considering poor feeding and abnormal liver function.',
      'Not following up promptly after a positive screening result or changing the feeding plan.',
      'Focusing only on acute liver disease and neglecting long-term follow-up for speech, motor, and ovarian function development in females.',
      'Not distinguishing between classic type, clinical variant type, Duarte variant, or other galactose metabolism disorders.',
    ],
    firstDepartments: [
      'Neonatal/pediatric emergency department',
      'Metabolic genetics department',
      'Pediatric gastroenterology and hepatology department',
      'Nutrition department (under metabolic specialist guidance)',
      'Ophthalmology, rehabilitation, and developmental-behavioral pediatrics (for long-term follow-up)',
    ],
    diagnosisChecklist: [
      'Keep newborn screening reports, follow-up notifications, feeding history, and jaundice/liver function/coagulation/infection test results.',
      'Confirm whether red blood cell GALT activity, galactose-1-phosphate, and GALT gene testing were performed.',
      'Record when lactose/galactose-restricted diet started and subsequent changes.',
      'Long-term assessment for cataracts, speech, motor, learning, and female ovarian function.',
      'Prepare gene report for genetic counseling when family members have family planning needs.',
    ],
    testsToAskAbout: [
      'Red blood cell GALT enzyme activity.',
      'Galactose-1-phosphate, blood/urine galactose-related metabolites.',
      'GALT gene testing; evaluate other types like GALK1 and GALE if needed.',
      'Liver function, coagulation function, infection assessment, and blood glucose.',
      'Ophthalmology for cataract evaluation, developmental and speech assessment.',
    ],
    questionsForDoctor: [
      'Does my child have classic type, clinical variant type, or another galactose metabolism disorder?',
      'What feeding plan should we use now? What ingredients in food or medications need to be avoided?',
      'After the acute phase has passed, what developmental and endocrine issues need long-term attention?',
      'How often should galactose-1-phosphate or other markers be rechecked?',
      'Do family members need carrier testing? How can we screen early in future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Classic galactosemia can appear within days after a newborn starts lactose-containing milk, with feeding difficulties, vomiting, lethargy, poor weight gain, jaundice, liver damage, abnormal clotting, low blood sugar, cataracts, and severe infection risk. Even with adequate early dietary management, some children may still have long-term risks in speech, motor, learning, and female ovarian function.</p>',
    diagnosis:
      '<p>Diagnosis relies on follow-up after newborn screening, red blood cell GALT enzyme activity, galactose-1-phosphate levels, and GALT gene testing. Doctors also need to differentiate from biliary atresia, sepsis, other liver diseases, and GALK1/GALE-related galactose metabolism disorders.</p>',
    treatment:
      '<p>The acute phase requires prompt management by pediatrics/neonatology, with diet adjustments under metabolic genetics specialist guidance. Long-term management includes dietary restriction, nutritional assessment, developmental and speech follow-up, ophthalmology checks, and reproductive endocrine monitoring. Specific food lists and feeding plans should be made by the metabolic nutrition team.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on nutritional status, galactose metabolism markers, speech and motor development, learning ability, eye health, bone health, and female ovarian function. Families should keep records of screening, genetic results, diet plans, and follow-up reports.</p>',
    fertilityOrFamily:
      "<p>Classic and clinical variant types are usually autosomal recessive. Once the family's GALT variants are identified, parents, siblings, and relatives with family planning needs can learn about carrier testing, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>",
    emergencySigns:
      '<p>Seek immediate medical care if a newborn has poor feeding, repeated vomiting, lethargy, worsening jaundice, bleeding, fever, or suspected sepsis; also contact the metabolic specialist or emergency department if a diagnosed child has obvious discomfort after accidental intake.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Classic Galactosemia and Clinical Variant Galactosemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
    },
    {
      name: 'MedlinePlus Genetics: Galactosemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/galactosemia/',
    },
  ],
  symptoms:
    '<p>Newborns may have poor feeding, vomiting, lethargy, jaundice, liver damage, bleeding, low blood sugar, infection risk, and cataracts.</p>',
  diagnosis:
    '<p>Evaluation includes newborn screening follow-up, GALT enzyme activity, galactose-1-phosphate, GALT gene testing, and liver function/infection differentiation.</p>',
  treatment:
    '<p>Management centers on dietary adjustment under metabolic specialist guidance, acute phase support, and long-term developmental/ophthalmology/endocrine follow-up.</p>',
  prognosis:
    '<p>Early identification can avoid many acute critical complications, but long-term issues such as speech, motor, learning, and ovarian function still require follow-up.</p>',
  sourceName: 'GeneReviews: Classic Galactosemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 329,
    name: 'galactosemia-journey.png',
    url: '/images/diseases/galactosemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

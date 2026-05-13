import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBetaKetothiolaseDeficiency: DiseaseDraft = {
  ...entity(14, 'disease-beta-ketothiolase-deficiency'),
  name: 'Beta-Ketothiolase Deficiency',
  nameEn: 'Beta-Ketothiolase Deficiency',
  alias:
    '3-ketothiolase deficiency, Alpha-methylacetoacetic aciduria, T2 deficiency, Mitochondrial acetoacetyl-CoA thiolase deficiency',
  slug: 'beta-ketothiolase-deficiency',
  oneSentence:
    'Beta-ketothiolase deficiency is a rare genetic metabolic disorder that affects isoleucine and ketone body metabolism. Infections, fasting, or stress may trigger ketoacidosis.',
  plainName:
    'A genetic metabolic disorder prone to ketoacidosis during infections or fasting',
  prevalence:
    'Very rare, with few reported cases in published medical literature; newborn screening coverage and diagnostic capacity vary by region, affecting detection rates.',
  quickLook: {
    whatItIs:
      "This is an autosomal recessive metabolic disorder linked to the ACAT1 gene. When the enzyme functions inadequately, the body's ability to process isoleucine and ketone bodies is impaired. Certain metabolites can accumulate during fever, infection, fasting, or high protein intake, potentially triggering acute metabolic crises.",
    whoToSeeFirst:
      'Children should first visit genetic-metabolic clinics or pediatric endocrinology/metabolism outpatient clinics; if they experience repeated vomiting, drowsiness, rapid breathing, dehydration, or altered consciousness, they should go directly to the emergency department.',
    isGenetic:
      'Yes, typically inherited in an autosomal recessive pattern. Confirmed families should seek genetic counseling to understand carrier testing for parents and recurrence risks for future pregnancies.',
    hasTreatment:
      'Yes, management focuses on avoiding prolonged fasting, prompt intervention during infection or vomiting, dietary and nutritional management as advised by specialists, and hospital-based supportive care during acute episodes.',
    commonDelayReason:
      'Children may appear normal between episodes, while acute attacks can be mistaken for common gastroenteritis, dehydration, or diabetic ketoacidosis. Without confirmatory newborn screening follow-up, urine organic acid analysis, or acylcarnitine profiling, diagnosis is often delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated vomiting and altered mental status in infants or young children after infection, fever, or prolonged fasting.',
      'Unexplained ketoacidosis, especially when blood glucose does not fit the typical pattern of diabetic ketoacidosis.',
      'Deep, rapid breathing, dehydration, marked fatigue, or altered consciousness.',
      'Newborn screening indicating abnormal acylcarnitines such as elevated C5-OH, requiring follow-up testing.',
      'Family history of similar metabolic crises, unexplained severe illness or early death in infancy.',
    ],
    commonWrongTurns: [
      'Repeatedly treating vomiting and dehydration as common gastroenteritis without investigating the cause of ketoacidosis.',
      'Managing as diabetic ketoacidosis without further differentiation of genetic metabolic disorders.',
      'Not following up on positive screening results, missing the early management window.',
      'Considering the condition cured after symptom resolution and failing to establish emergency protocols for fever, fasting, or vomiting.',
    ],
    firstDepartments: [
      'Genetic-metabolic clinics',
      'Pediatric endocrinology/metabolism outpatient clinics',
      'Emergency department (when signs of metabolic crisis appear)',
      'Nutrition department (for long-term dietary and caloric management)',
    ],
    diagnosisChecklist: [
      'Document the triggers, food intake, vomiting, mental status, breathing changes, and emergency findings for each episode.',
      'Bring newborn screening reports, blood gas, electrolytes, blood glucose, urine ketones, blood ketones, blood ammonia, and lactate results.',
      'Ask whether blood acylcarnitine profile, urine organic acid analysis, and ACAT1 genetic testing are needed.',
      'Confirm whether a written emergency plan exists, especially for fever, vomiting, or inability to eat.',
    ],
    testsToAskAbout: [
      'Blood acylcarnitine profile, looking for abnormal C5-OH and related findings.',
      'Urine organic acid analysis for clues to organic acid metabolism disorders.',
      'Blood gas, electrolytes, blood glucose, blood/urine ketones, blood ammonia, and lactate during acute episodes.',
      'ACAT1 genetic testing and parental carrier testing.',
      'Assessment for neurological involvement and developmental milestones when indicated.',
    ],
    questionsForDoctor: [
      'Does this episode fit better with common infection and dehydration or a genetic metabolic disorder-related ketoacidosis?',
      'Does the child need to avoid prolonged fasting long-term? What symptoms during fever or vomiting warrant an emergency visit?',
      'What dietary principles should be followed? Is nutrition department involvement needed?',
      'Do we need an emergency information card? What should be included?',
      'What do the ACAT1 test results mean for sibling screening and future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Beta-ketothiolase deficiency often presents with acute ketoacidosis episodes in infancy or early childhood. Triggers include infection, fever, prolonged fasting, or changes in protein intake. During episodes, there may be repeated vomiting, dehydration, drowsiness, rapid breathing, seizures, or altered consciousness; symptom-free intervals may be normal.</p><p>Severe or recurrent metabolic crises may affect neurological development, so early recognition and establishing an emergency response plan are important.</p>',
    diagnosis:
      '<p>Diagnosis typically combines acute episode history, newborn screening results, blood acylcarnitine profile, urine organic acid analysis, and ACAT1 genetic testing. Some tests may show abnormalities more prominently during acute episodes, so preserving emergency results (blood gas, electrolytes, blood glucose, ketones, blood ammonia, and lactate) is valuable.</p>',
    treatment:
      '<p>Long-term management focuses on reducing triggers for metabolic crises, such as avoiding prolonged fasting, seeking early care during infection or vomiting, and following specialist-recommended dietary and nutritional management. Acute episodes typically require hospital-based fluid replacement, correction of metabolic disturbances, and monitoring of vital signs. Specific dietary restrictions, supplements, and emergency management should be individualized by genetic-metabolic specialists.</p>',
    longTermCare:
      '<p>Families should maintain diagnostic reports, genetic results, and emergency information cards, and confirm with their doctor how to handle fever, diarrhea, vomiting, surgery, or inability to eat. Follow-up typically monitors episode frequency, growth and development, nutritional status, metabolic markers, and neurodevelopment.</p>',
    fertilityOrFamily:
      '<p>This condition is typically inherited in an autosomal recessive pattern. After diagnosis, parents, siblings, and family planning can be addressed through genetic counseling to understand options such as carrier testing, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Repeated vomiting, inability to eat, marked drowsiness, rapid or deep breathing, dehydration, seizures, altered consciousness, or rapid deterioration in mental status after infection or fever all warrant prompt emergency care. Actively inform doctors of the known or suspected diagnosis of beta-ketothiolase deficiency.</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Beta-ketothiolase deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
    },
    {
      name: 'HRSA Newborn Screening: Beta-Ketothiolase Deficiency',
      type: 'official',
      url: 'https://newbornscreening.hrsa.gov/conditions/beta-ketothiolase-deficiency',
    },
    {
      name: 'Orphanet: Beta-ketothiolase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/134',
    },
  ],
  symptoms:
    '<p>Typical clues include repeated vomiting, dehydration, drowsiness, rapid breathing, and ketoacidosis after infection, fasting, or stress.</p>',
  diagnosis:
    '<p>Evaluation typically includes newborn screening follow-up, blood acylcarnitine profile, urine organic acid analysis, acute metabolic markers, and ACAT1 genetic testing.</p>',
  treatment:
    '<p>Management focuses on avoiding prolonged fasting, prompt intervention during infection or vomiting, specialist-guided dietary and nutritional management, and hospital-based supportive care during acute crises.</p>',
  prognosis:
    '<p>Early recognition and proper emergency management help reduce the risk of severe metabolic crises and neurological complications, but disease course varies among individuals.</p>',
  sourceName: 'MedlinePlus Genetics',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 313,
    name: 'beta-ketothiolase-deficiency-journey.png',
    url: '/images/diseases/beta-ketothiolase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

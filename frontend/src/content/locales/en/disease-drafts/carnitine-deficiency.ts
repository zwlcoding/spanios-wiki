import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCarnitineDeficiency: DiseaseDraft = {
  ...entity(16, 'disease-carnitine-deficiency'),
  name: 'Primary Carnitine Deficiency',
  nameEn: 'Primary Carnitine Deficiency',
  alias:
    'PCD, Primary Carnitine Transporter Deficiency, Carnitine Uptake Defect, OCTN2 Deficiency',
  slug: 'carnitine-deficiency',
  oneSentence:
    "Primary Carnitine Deficiency is an inherited metabolic disorder linked to the SLC22A5 gene that can affect the body's ability to use fat for energy, potentially involving low blood sugar, liver, heart muscle, and skeletal muscle.",
  plainName:
    'An inherited metabolic condition where the body cannot transport and use carnitine properly',
  prevalence:
    "This is a rare condition. Newborn screening detection rates vary widely by region. Screening results can also be influenced by the mother's carnitine status and other factors, so follow-up testing is often needed to confirm.",
  quickLook: {
    whatItIs:
      'Carnitine helps long-chain fatty acids enter the mitochondria for energy. In Primary Carnitine Deficiency, carnitine transport is impaired, making it harder for the body to use fat for energy during fasting, infection, or stress. This may lead to low-blood-sugar episodes without adequate ketones, liver abnormalities, muscle weakness, or cardiomyopathy.',
    whoToSeeFirst:
      'If newborn screening shows low free carnitine, or if a child has repeated low blood sugar, enlarged liver, or muscle weakness, or if cardiomyopathy is found with signs suggesting a metabolic condition, consider evaluation at a genetics/metabolism clinic or pediatric endocrinology/metabolism department. Go to the emergency department for altered consciousness, seizures, or abnormal heart rhythms.',
    isGenetic:
      'Yes, usually autosomal recessive, linked to variants in the SLC22A5 gene. When a child is found to have low carnitine on screening, the mother should also be evaluated for Primary Carnitine Deficiency.',
    hasTreatment:
      'Yes, there are established treatment and follow-up plans. The core is supplementation with L-carnitine under medical supervision and avoiding prolonged fasting. During illness or inability to eat, prompt management is needed. Specific dosing and adjustments should be made by a specialist.',
    commonDelayReason:
      "Low blood sugar, liver test abnormalities, muscle weakness, cardiomyopathy, or fatigue are not specific to this condition and may be misdiagnosed as hepatitis, myocarditis, epilepsy, ordinary hypoglycemia, or poor exercise tolerance. Low carnitine on newborn screening may also reflect the mother's condition, requiring assessment of both mother and child.",
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening suggests significantly low free carnitine (C0), requiring follow-up testing.',
      'Infants or young children develop low blood sugar, drowsiness, seizures, or an enlarged liver after infections, fasting, or gastroenteritis.',
      'Children develop unexplained dilated or hypertrophic cardiomyopathy, abnormal heart rhythms, or heart function problems.',
      'Unexplained muscle weakness, muscle pain, reduced exercise tolerance, or elevated creatine kinase.',
      "Adults with long-standing fatigue or poor exercise capacity, or those discovered to have low carnitine levels because of their child's abnormal newborn screening.",
    ],
    commonWrongTurns: [
      'Treating low blood sugar and seizures only as a neurological problem without checking for fatty acid oxidation and carnitine transport abnormalities.',
      'Managing cardiomyopathy or abnormal heart rhythms only as a heart condition without considering metabolic clues.',
      'Focusing only on the child after finding low carnitine on newborn screening, without simultaneously evaluating the mother.',
      'Stopping supplementation or discontinuing follow-up after symptoms improve.',
    ],
    firstDepartments: [
      'Genetics and Metabolism',
      'Pediatric Endocrinology/Metabolism Clinic',
      'Cardiology or Pediatric Cardiology',
      'Emergency Department (for low blood sugar, altered consciousness, seizures, or abnormal heart rhythms)',
    ],
    diagnosisChecklist: [
      'Keep all newborn screening and follow-up reports, especially free carnitine and acylcarnitine profile results.',
      'Bring records of blood sugar, liver tests, ammonia, creatine kinase, ECG, and echocardiogram.',
      'Ask your doctor whether SLC22A5 gene testing is needed, and whether parents or siblings should be tested.',
      'When screening shows low carnitine, ask whether the mother also needs blood carnitine and genetic evaluation.',
      'Confirm whether you have an emergency plan for illness, surgery, fasting, or inability to eat.',
    ],
    testsToAskAbout: [
      'Blood free carnitine, total carnitine, and acylcarnitine profile.',
      'SLC22A5 gene testing with family segregation analysis.',
      'Blood sugar, blood/urine ketones, liver tests, ammonia, electrolytes, and creatine kinase.',
      'ECG and echocardiogram, with cardiology follow-up as needed.',
      'Whether the mother and siblings need carnitine levels or genetic testing too.',
    ],
    questionsForDoctor: [
      'Is the low carnitine on screening a problem in the child, or could it come from the mother? How can we confirm?',
      'How long can my child safely fast? What should we do during fever, vomiting, or surgery?',
      'How should we monitor the effectiveness and safety of L-carnitine supplementation?',
      'Do we need long-term follow-up with heart ultrasound, ECG, or heart-related markers?',
      'What genetic counseling is needed for siblings and for future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      "<p>Primary Carnitine Deficiency can look very different from person to person. In infants and young children, it may present with low-blood-sugar episodes without adequate ketones, poor feeding, drowsiness, an enlarged liver, elevated liver enzymes, or increased ammonia after infections, fasting, or gastroenteritis. In children, it may cause cardiomyopathy, abnormal heart rhythms, muscle weakness, or reduced exercise tolerance. Adults may present with fatigue, or may be identified because of their child's abnormal newborn screening.</p>",
    diagnosis:
      '<p>Diagnosis usually starts with significantly low blood free carnitine and an abnormal acylcarnitine profile, but low carnitine does not always mean Primary Carnitine Deficiency. Doctors need to rule out secondary carnitine deficiency, prematurity, maternal carnitine deficiency, medications, or other metabolic conditions. Biallelic pathogenic variants in SLC22A5 can support a genetic diagnosis, and functional testing of carnitine transport may sometimes be performed.</p>',
    treatment:
      "<p>Treatment centers on long-term L-carnitine supplementation under medical supervision, along with avoiding fasting longer than is safe for the person's age and condition. During infections, vomiting, surgery, inability to eat, or other stress, it may be necessary to contact a metabolism center in advance or be admitted for energy support and metabolic monitoring. Specific supplementation plans, follow-up schedules, and dose adjustments need to be individualized.</p>",
    longTermCare:
      '<p>Follow-up usually includes blood carnitine levels, growth and development, liver tests, creatine kinase, ECG, and echocardiogram. Families should keep diagnosis records, medication lists, and emergency instruction cards, and make sure schools or caregivers understand that the person cannot fast for long periods and needs prompt attention during illness.</p>',
    fertilityOrFamily:
      '<p>This condition is usually inherited in an autosomal recessive pattern. After diagnosis, parents, siblings, and patients planning pregnancies can learn about carrier testing, prenatal diagnosis, and preimplantation genetic testing through genetic counseling. Female patients need coordinated care from a metabolic specialist and obstetrician during pregnancy.</p>',
    emergencySigns:
      '<p>Seek emergency care promptly for low blood sugar with seizures or altered consciousness, marked drowsiness, repeated vomiting unable to eat, breathing problems, palpitations or suspected abnormal heart rhythms, or rapid worsening of mental status during infection. Tell the emergency team that Primary Carnitine Deficiency is suspected or diagnosed.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Primary Carnitine Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
    },
    {
      name: 'MedlinePlus Genetics: Primary carnitine deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/primary-carnitine-deficiency/',
    },
    {
      name: 'Orphanet: Primary carnitine deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/158',
    },
  ],
  symptoms:
    '<p>May present with low-blood-sugar without adequate ketones, an enlarged liver, muscle weakness, cardiomyopathy, abnormal heart rhythms, or adult fatigue, or may be found on screening.</p>',
  diagnosis:
    '<p>Evaluation usually includes blood carnitine and acylcarnitine profile, SLC22A5 gene testing, and ruling out maternal or secondary causes of low carnitine.</p>',
  treatment:
    '<p>Treatment centers on L-carnitine supplementation under medical supervision, avoiding prolonged fasting, and prompt energy support and medical care during illness.</p>',
  prognosis:
    '<p>Early recognition and consistent treatment usually help reduce metabolic crises and cardiac risks. When organ damage has already occurred, long-term specialized management is needed.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 315,
    name: 'carnitine-deficiency-journey.png',
    url: '/images/diseases/carnitine-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

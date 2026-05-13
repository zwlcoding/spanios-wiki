import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHepatolenticularDegenerationWilsonDisease: DiseaseDraft = {
  ...entity(39, 'disease-hepatolenticular-degeneration-wilson-disease'),
  name: 'Hepatolenticular Degeneration (Wilson Disease)',
  nameEn: 'Hepatolenticular Degeneration (Wilson Disease)',
  alias:
    "Wilson Disease, Wilson's Disease, Copper Metabolism Disorder, ATP7B-Related Copper Accumulation Disease",
  slug: 'hepatolenticular-degeneration-wilson-disease',
  oneSentence:
    'Hepatolenticular degeneration is an ATP7B-related copper metabolism disorder in which copper accumulates in the liver, brain, and other tissues, potentially causing liver disease, movement disorders, psychiatric or behavioral changes, or hemolysis.',
  plainName:
    'A genetic condition where the body cannot properly remove copper, gradually damaging the liver and nervous system',
  prevalence:
    'Generally rare, often identified in children, teenagers, or young adults, though the age range is broad; age alone should not completely rule out the diagnosis.',
  quickLook: {
    whatItIs:
      'Normally, excess copper is cleared through bile. When ATP7B function is impaired, copper clearance is blocked, first affecting the liver, and potentially also the brain, eyes, blood, and mental health.',
    whoToSeeFirst:
      'When facing unexplained liver function abnormalities, cirrhosis, acute liver failure with hemolysis, or the onset of tremor, slowed movement, difficulty speaking or swallowing, or personality or behavioral changes, consider evaluation by hepatology/gastroenterology, neurology, or genetics and metabolism.',
    isGenetic:
      'Yes, usually autosomal recessive, associated with biallelic pathogenic variants in ATP7B.',
    hasTreatment:
      "Yes, long-term copper reduction and maintenance treatment plans exist. The key is early diagnosis, regular follow-up, and avoiding stopping medication on one's own. Acute or end-stage liver failure may require liver transplant evaluation.",
    commonDelayReason:
      'Early stages can resemble fatty liver disease, viral hepatitis, autoimmune hepatitis, psychiatric or psychological problems, or Parkinson-like movement disorders. Without copper metabolism testing and eye examination clues, it is easy to take a longer diagnostic path.',
  },
  patientJourney: {
    whenToSuspect: [
      'Children or young adults develop unexplained elevated transaminases, fatty liver-like changes, enlarged liver or spleen, or cirrhosis.',
      'Acute liver injury or failure with Coombs-negative hemolysis, jaundice, or coagulation abnormalities.',
      'Tremor, clumsiness, dystonia, slowed movement, slurred speech, difficulty swallowing, or gait abnormalities.',
      'Mood, learning, behavioral, or psychiatric symptoms occurring alongside liver function abnormalities.',
      'Family history of Wilson disease, early-onset liver disease, unexplained liver failure, or similar symptoms in siblings.',
    ],
    commonWrongTurns: [
      'Managing only as fatty liver, viral hepatitis, or autoimmune hepatitis without copper metabolism evaluation.',
      'Addressing movement or psychiatric symptoms in neurology/psychiatry alone without reviewing liver function and family history.',
      'Eye examination not including slit-lamp exam or failing to look for Kayser-Fleischer ring clues.',
      "Stopping medication on one's own once symptoms improve, leading to copper re-accumulation and recurrence risk.",
    ],
    firstDepartments: [
      'Hepatology / Gastroenterology',
      'Neurology (movement disorders subspecialty)',
      'Genetics and Metabolism / Medical Genetics',
      'Ophthalmology (slit-lamp examination)',
      'Liver Transplant Center (for acute or end-stage liver failure evaluation)',
    ],
    diagnosisChecklist: [
      'Preserve records of liver function, coagulation, blood count, hemolysis indicators, abdominal imaging, and prior liver disease evaluations.',
      'Ask about serum ceruloplasmin, urine copper, eye slit-lamp exam, and liver copper-related assessments.',
      'Prepare videos of neurological symptoms, learning/behavior change records, and brain MRI materials.',
      'Ask about ATP7B genetic testing and sibling screening.',
      'After diagnosis, establish a long-term plan for medication, follow-up, and clearly communicate: do not stop medication on your own.',
    ],
    testsToAskAbout: [
      'Serum ceruloplasmin, serum copper, and 24-hour urine copper.',
      'Liver function tests, coagulation profile, blood count, and hemolysis-related studies.',
      'Ophthalmology slit-lamp exam for Kayser-Fleischer rings.',
      'ATP7B gene testing; family verification if needed.',
      'Abdominal imaging, brain MRI, and liver copper assessment as deemed necessary by your doctor.',
    ],
    questionsForDoctor: [
      'Is my presentation more liver-type, neurological-type, or mixed? What is the current extent of organ involvement?',
      'Is the diagnostic evidence sufficient? What additional copper metabolism or genetic tests are needed?',
      'What are the treatment goals, monitoring indicators, and follow-up frequency?',
      'Which foods, medications, or supplements do I need to check with my doctor before using?',
      'How should siblings and future pregnancy planning be screened and counseled?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Wilson disease has varied presentations, including elevated transaminases, fatty liver-like changes, jaundice, enlarged liver or spleen, cirrhosis, acute liver failure, hemolysis, and also tremor, dystonia, slowed movement, difficulty speaking or swallowing, gait abnormalities, learning or behavioral changes, depression, or anxiety. The classic triad of liver disease, movement disorder, and Kayser-Fleischer rings does not always appear all at once.</p>',
    diagnosis:
      '<p>Diagnosis usually combines clinical presentation, serum ceruloplasmin, urine copper, liver and neurological assessment, ophthalmology slit-lamp exam, and ATP7B genetic testing. Doctors will differentiate from viral hepatitis, autoimmune liver disease, fatty liver, other metabolic liver diseases, Parkinson-like disorders, and psychiatric conditions.</p>',
    treatment:
      '<p>Treatment aims for long-term reduction and maintenance of body copper burden, including copper-chelating or copper-blocking medications, diet, and follow-up management. Specific medication selection, switching, and monitoring should be directed by a hepatology/neurology/genetics team. Acute liver failure or decompensated liver disease requires timely evaluation for liver transplantation.</p>',
    longTermCare:
      '<p>Long-term care focuses on liver function, copper metabolism markers, neuropsychiatric status, medication side effects, adherence, and family screening. Patients should preserve their diagnosis documentation and treatment plan, and avoid stopping medication or reducing follow-up based solely on symptom improvement.</p>',
    fertilityOrFamily:
      '<p>Wilson disease is autosomal recessive. Once ATP7B variants are identified, siblings should be evaluated. Families with pregnancy plans can learn about carrier testing, prenatal diagnosis, and preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>Seek immediate medical attention if there is rapidly worsening jaundice, altered consciousness, bleeding tendency, ascites, or severe fatigue; acute worsening of psychiatric or movement symptoms; or signs of acute liver failure. Be sure to mention Wilson disease or suspected copper metabolism disorder risk.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Wilson Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1512/',
    },
    {
      name: 'MedlinePlus Genetics: Wilson disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/wilson-disease/',
    },
  ],
  symptoms:
    '<p>May present as liver function abnormalities, cirrhosis, acute liver failure, hemolysis, tremor, dystonia, difficulty speaking or swallowing, or psychiatric or behavioral changes.</p>',
  diagnosis:
    '<p>Evaluation includes ceruloplasmin, urine copper, liver function and hemolysis tests, ophthalmology slit-lamp exam, ATP7B gene testing, and liver/brain assessment.</p>',
  treatment:
    '<p>Management relies on long-term copper-chelating or copper-blocking therapy, diet, and follow-up; acute or end-stage liver failure requires liver transplant evaluation.</p>',
  prognosis:
    "<p>Early diagnosis and continuous treatment can significantly improve outcomes; stopping medication on one's own, acute liver failure, or severe neurological involvement increases risk.</p>",
  sourceName: 'GeneReviews: Wilson Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1512/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 338,
    name: 'hepatolenticular-degeneration-wilson-disease-journey.png',
    url: '/images/diseases/hepatolenticular-degeneration-wilson-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

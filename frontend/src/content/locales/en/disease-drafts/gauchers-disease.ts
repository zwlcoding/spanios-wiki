import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGauchersDisease: DiseaseDraft = {
  ...entity(31, 'disease-gauchers-disease'),
  name: 'Gaucher’s Disease',
  nameEn: 'Gaucher’s Disease',
  alias:
    'Gaucher disease、glucocerebrosidase deficiency、GBA1-related Gaucher disease',
  slug: 'gauchers-disease',
  oneSentence:
    'Gaucher disease is a lysosomal storage disorder that can cause enlarged liver and spleen, anemia, low platelets, bone pain or bone crises, and some types also affect the nervous system.',
  plainName:
    'An inherited metabolic disorder where fatty substances build up in the liver, spleen, bone marrow, and bones',
  prevalence:
    'Generally rare; type 1 is more common in the Ashkenazi Jewish population. Age of onset and severity vary widely across types.',
  quickLook: {
    whatItIs:
      'Insufficient GBA1-related enzyme activity causes substances like glucocerebroside to build up inside macrophages, affecting the liver, spleen, bone marrow, bones, and the nervous system in some patients.',
    whoToSeeFirst:
      'When there is unexplained enlarged spleen, enlarged liver, anemia, low platelets, bone pain, fractures, or bone crises, evaluation by hematology, genetics/metabolism, or pediatrics is appropriate.',
    isGenetic:
      'Yes, autosomal recessive inheritance. GBA1 gene testing and enzyme activity testing help with diagnosis and family screening.',
    hasTreatment:
      'Yes, there are specific treatments and supportive management options. Which treatment is suitable depends on type, organ involvement, age, and availability; a specialist team should develop the plan.',
    commonDelayReason:
      'Enlarged spleen and low platelets are often mistaken for blood cancers, immune thrombocytopenia, or liver disease; bone pain may also first be treated as an orthopedic problem.',
  },
  patientJourney: {
    whenToSuspect: [
      'Unexplained enlarged spleen, enlarged liver, anemia, or low platelets in children or adults.',
      'Recurrent bone pain, bone crises, low bone density, pathologic fractures, or imaging showing bone marrow infiltration.',
      'Persistent anemia, bone pain, or liver/spleen-related findings after splenectomy.',
      'Infants and young children with enlarged liver and spleen plus neurological abnormalities need evaluation for neuronopathic Gaucher disease.',
      'Family history of Gaucher disease, GBA1 variants, or similar liver/spleen, blood, or bone findings.',
    ],
    commonWrongTurns: [
      'Testing only for ITP, leukemia, lymphoma, or cirrhosis without enzyme activity or gene testing.',
      'After splenectomy, not continuing to investigate the underlying disease, leading to gradual worsening of bone complications.',
      'Long-term bone pain treated as growing pains or orthopedic disease without considering low platelets and enlarged spleen.',
      'After diagnosis, only monitoring blood counts and neglecting long-term assessment of bones, lungs, and nervous system.',
    ],
    firstDepartments: [
      'Hematology',
      'Genetics/Metabolism or Medical Genetics',
      'Pediatrics',
      'Orthopedics/Rehabilitation (for bone complications)',
      'Neurology (when neuronopathic type is suspected)',
    ],
    diagnosisChecklist: [
      'Keep records of blood counts, liver/spleen imaging, bone imaging, bone density, and any previous bone pain or fractures.',
      'Ask whether glucocerebrosidase activity and GBA1 gene testing were done.',
      'Confirm whether type 1, type 2, type 3, or other rare presentations were evaluated.',
      'Assess liver/spleen volume, bone marrow burden, lung and nervous system involvement.',
      'When family members have reproductive plans, prepare the genetic report for genetic counseling.',
    ],
    testsToAskAbout: [
      'Glucocerebrosidase enzyme activity test.',
      'GBA1 gene testing.',
      'Complete blood count, liver/spleen size, and blood chemistry.',
      'Bone MRI, X-ray, or bone density assessment.',
      'Biomarkers and lung/nervous system evaluation as your doctor considers appropriate.',
    ],
    questionsForDoctor: [
      'What type of Gaucher disease do I have? Which organs are affected?',
      'Do I need specific treatment? What are the treatment goals and monitoring indicators?',
      'How should bone pain and bone risks be followed long-term?',
      'Do my family members need enzyme activity or gene testing?',
      'What symptoms suggest bone crisis, infection, or bleeding that require emergency care?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Common signs of Gaucher disease include enlarged spleen, enlarged liver, anemia, low platelets, fatigue, easy bruising or bleeding, bone pain, bone crises, decreased bone density, and fractures. Type 1 usually does not primarily involve the nervous system; types 2 and 3 may have varying degrees of neurological involvement. Individual variation is significant.</p>',
    diagnosis:
      '<p>Diagnosis typically relies on reduced glucocerebrosidase activity and GBA1 gene testing, combined with assessment of blood, liver/spleen, bones, and nervous system. Doctors will also rule out blood cancers, immune thrombocytopenia, liver disease, and other lysosomal storage disorders.</p>',
    treatment:
      '<p>Treatment may include specific therapy, support for anemia/bleeding, management of bone complications, rehabilitation, and genetic counseling. The specific plan depends on disease type, age, pregnancy plans, organ involvement, and medication availability, and should be developed by a specialist team.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on blood counts, liver/spleen size, bone pain and imaging, bone density, growth and development, lung and nervous system assessment, and monitoring of treatment response and side effects.</p>',
    fertilityOrFamily:
      '<p>Gaucher disease is autosomal recessive. After identifying the GBA1 variant, parents, siblings, and partners can learn about options such as carrier testing, recurrence risk, prenatal diagnosis, or preimplantation genetic testing through genetic counseling.</p>',
    emergencySigns:
      '<p>When there is severe bone pain, inability to bear weight, fever with bone pain, severe bleeding, marked worsening of mental or general condition after infection, severe pain in the spleen area, or rapid worsening of anemia, seek medical care promptly.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Gaucher Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
    },
    {
      name: 'MedlinePlus Genetics: Gaucher disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gaucher-disease/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>May present as enlarged liver and spleen, anemia, low platelets, fatigue, bleeding tendency, bone pain, bone crises, fractures, or neurological symptoms.</p>',
  diagnosis:
    '<p>Evaluation includes glucocerebrosidase activity testing, GBA1 gene testing, blood counts, liver/spleen imaging, and assessment of bone/nervous system involvement.</p>',
  treatment:
    '<p>Management includes evaluation for specific therapy, management of blood and bone complications, organ follow-up, and genetic counseling.</p>',
  prognosis:
    '<p>Prognosis depends on type, nervous system involvement, bone complications, and treatment availability; regular follow-up can reduce the impact of complications.</p>',
  sourceName: 'GeneReviews: Gaucher Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
  categorySlug: 'metabolic',
  charityIds: [36],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 330,
    name: 'gauchers-disease-journey.png',
    url: '/images/diseases/gauchers-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

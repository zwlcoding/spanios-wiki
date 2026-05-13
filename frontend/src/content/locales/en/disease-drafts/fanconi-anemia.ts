import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFanconiAnemia: DiseaseDraft = {
  ...entity(29, 'disease-fanconi-anemia'),
  name: 'Fanconi Anemia',
  nameEn: 'Fanconi Anemia',
  alias: 'Fanconi anemia, FA, Fanconi pancytopenia',
  slug: 'fanconi-anemia',
  oneSentence:
    'Fanconi anemia is an inherited DNA repair defect that can cause congenital abnormalities, bone marrow failure, and increased risk of leukemia and solid tumors.',
  plainName:
    'An inherited bone marrow failure syndrome that affects blood cell production and DNA repair',
  prevalence:
    'Generally rare, with varying carrier rates and incidence in different populations. Some patients are born with structural abnormalities, while others are first identified through cytopenias or cancer risk.',
  quickLook: {
    whatItIs:
      'FA-related genes are involved in DNA damage repair. Insufficient repair capacity can gradually impair bone marrow blood cell production and increase the risk of certain cancers and treatment toxicity.',
    whoToSeeFirst:
      'Children or adults with unexplained platelet, white blood cell, or red blood cell decreases, accompanied by short stature, café-au-lait spots, thumb/radial bone abnormalities, or kidney/urinary/reproductive system abnormalities, should be evaluated by hematology or pediatric hematology.',
    isGenetic:
      'Yes, most cases are autosomal recessive, though there are also X-linked or rare dominant forms. Genetic testing and family evaluation are very important.',
    hasTreatment:
      'Yes, long-term hematology management plans exist, including monitoring for bone marrow failure, managing infection, bleeding, and anemia, evaluating for hematopoietic stem cell transplantation, and cancer screening.',
    commonDelayReason:
      'Congenital abnormalities may be mild, and early cytopenias can be atypical. If treated as ordinary anemia, immune thrombocytopenia, or aplastic anemia without proper testing, chromosome breakage testing and genetic diagnosis may be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Gradual onset of platelet, white blood cell, or red blood cell decreases in childhood, especially with signs of infection or bleeding tendency.',
      'Short stature, skin pigmentation abnormalities, thumb/radial bone abnormalities, or kidney/urinary/reproductive abnormalities occurring together with blood problems.',
      'Young adults developing aplastic anemia, MDS/AML, or head/neck, skin, or genitourinary-related tumors.',
      'Abnormally strong reactions to chemotherapy or radiation therapy, requiring evaluation for DNA repair defects.',
      'Family history of bone marrow failure, early-onset tumors, similar abnormalities in siblings, or consanguineous marriage.',
    ],
    commonWrongTurns: [
      'Treating only as ordinary aplastic anemia or immune thrombocytopenia without chromosome breakage testing.',
      'Focusing only on congenital abnormalities without regular blood count and bone marrow risk monitoring.',
      'Failing to identify FA before transplantation or cancer treatment, leading to inadequate assessment of treatment toxicity risk.',
      'When tumors occur in adults, not revisiting childhood development, skin findings, and family history.',
    ],
    firstDepartments: [
      'Pediatric hematology / Hematology',
      'Medical genetics / Genetic counseling clinic',
      'Bone marrow transplant center (when evaluation is needed)',
      'ENT/head and neck, dermatology, gynecology/urology, and other cancer screening-related specialists',
    ],
    diagnosisChecklist: [
      'Keep all previous complete blood counts, reticulocyte counts, bone marrow studies, chromosome karyotypes, and tumor-related records.',
      'Document birth defects, growth and development, skin pigmentation, hearing, kidney/urinary/reproductive abnormalities, and family history.',
      'Ask about whether DEB/MMC chromosome breakage testing and FA-related genetic testing are needed.',
      'If considering transplantation, confirm donor screening and whether the transplant center is familiar with FA.',
      'Develop a long-term cancer screening plan for head/neck, skin, and gynecological/urological areas.',
    ],
    testsToAskAbout: [
      'Complete blood count and bone marrow examination.',
      'DEB/MMC chromosome breakage testing.',
      'FA-related gene panel or exome/genome testing.',
      'Kidney, heart, hearing, endocrine, and growth/development assessments.',
      'Cytogenetic and molecular studies related to MDS/AML risk.',
    ],
    questionsForDoctor: [
      'Does my cytopenia need evaluation for FA? Should I start with chromosome breakage testing or genetic testing?',
      'What stage is my bone marrow function currently at? How often should I have blood counts and bone marrow checks?',
      'Do I need a transplant evaluation? What screening is needed for donors?',
      'Which cancer screenings should I start now? How often?',
      'What genetic counseling is needed for my family and future family planning?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FA can present with short stature, skin pigmentation abnormalities, thumb or radial bone abnormalities, microcephaly, kidney/urinary/reproductive abnormalities, eye and ear problems, endocrine abnormalities, and developmental issues. Hematologic manifestations commonly include progressive bone marrow failure; early stages may show platelet or white blood cell decreases before developing into pancytopenia. Patients also face risks of MDS/AML and solid tumors of the head/neck, skin, and genitourinary tract.</p>',
    diagnosis:
      '<p>Diagnosis typically relies on DEB/MMC chromosome breakage testing and molecular genetic testing, combined with clinical features, complete blood counts, bone marrow examination, and family history. The absence of obvious congenital abnormalities does not rule out FA. Identifying FA before treatment is important because patients may be more sensitive to DNA damage-related treatments such as radiation and chemotherapy.</p>',
    treatment:
      '<p>Management includes bone marrow failure monitoring, infection and bleeding risk management, transfusion and iron overload management, hematopoietic stem cell transplantation evaluation, and endocrine, developmental, and cancer screening. Specific treatment plans should be developed by a team familiar with inherited bone marrow failure syndromes.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on blood count trends, bone marrow clonal evolution, transplant timing, cancer screening, endocrine and growth/development, hearing, and quality of life. Patients should keep their genetic reports, chromosome breakage test results, bone marrow reports, and transplant/transfusion records.</p>',
    fertilityOrFamily:
      '<p>Most FA cases are autosomal recessive, though there are also X-linked or rare dominant forms. After identifying pathogenic variants, family members can pursue carrier testing, relative screening, prenatal diagnosis, or preimplantation genetic testing counseling.</p>',
    emergencySigns:
      '<p>Fever/infection, uncontrolled bleeding, black stools/blood in urine, significant fatigue or shortness of breath, rapidly worsening cytopenias, or persistent lumps/oral/pharyngeal ulcers that do not heal should prompt immediate medical attention. Inform providers about FA or inherited bone marrow failure risk.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Fanconi Anemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1401/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Fanconi Anemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK559133/',
    },
  ],
  symptoms:
    '<p>May include congenital developmental abnormalities, skin pigmentation changes, cytopenias, bone marrow failure, infection or bleeding tendency, and increased risk of MDS/AML and solid tumors.</p>',
  diagnosis:
    '<p>Evaluation includes complete blood count, bone marrow examination, DEB/MMC chromosome breakage testing, FA-related genetic testing, and multisystem abnormality screening.</p>',
  treatment:
    '<p>Management includes bone marrow failure monitoring, supportive care, transplant evaluation, cancer screening, and genetic counseling.</p>',
  prognosis:
    '<p>Prognosis is influenced by bone marrow failure progression, transplant timing, treatment toxicity, and cancer risk. Long-term specialist follow-up is needed.</p>',
  sourceName: 'GeneReviews: Fanconi Anemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1401/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 328,
    name: 'fanconi-anemia-journey.png',
    url: '/images/diseases/fanconi-anemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

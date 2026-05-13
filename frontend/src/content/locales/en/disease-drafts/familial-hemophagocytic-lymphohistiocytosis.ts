import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFamilialHemophagocyticLymphohistiocytosis: DiseaseDraft = {
  ...entity(2026, 'disease-familial-hemophagocytic-lymphohistiocytosis'),
  name: 'Familial hemophagocytic lymphohistiocytosis',
  nameEn: 'Familial hemophagocytic lymphohistiocytosis',
  alias:
    'FHL, familial HLH, primary hemophagocytic lymphohistiocytosis, China Second Rare Disease Catalog item 26',
  slug: 'familial-hemophagocytic-lymphohistiocytosis',
  oneSentence:
    'Familial hemophagocytic lymphohistiocytosis is an inherited immune-regulation disorder in which overactive immune cells can quickly cause prolonged fever, cytopenias, enlarged liver or spleen, and organ damage.',
  plainName:
    'An inherited form of HLH where uncontrolled immune inflammation can become life-threatening',
  prevalence:
    "Included in China's second rare disease catalog; it is very rare overall and often presents in infancy or childhood, although later presentation can occur.",
  quickLook: {
    whatItIs:
      'FHL is a primary or inherited form of HLH. Genes such as PRF1, UNC13D, STX11, and STXBP2 affect immune-cell killing pathways, so infections or other triggers can lead to uncontrolled inflammation.',
    whoToSeeFirst:
      'Persistent fever with cytopenias, enlarged liver or spleen, very high ferritin, coagulopathy, liver dysfunction, or neurologic symptoms needs urgent hematology, immunology, emergency, or intensive-care evaluation.',
    isGenetic:
      'Most familial HLH is autosomal recessive. Parents may be healthy carriers, so confirmed cases need genetic counseling and family testing.',
    hasTreatment:
      'Active disease needs rapid control of inflammation, infection management, and organ support. For typical FHL, allogeneic hematopoietic stem cell transplantation is usually the key long-term curative strategy.',
    commonDelayReason:
      'It can look like severe infection, sepsis, hepatitis, leukemia, lymphoma, or rheumatic disease. Fever plus cytopenias, hepatosplenomegaly, high ferritin, and low fibrinogen should prompt HLH evaluation.',
  },
  patientJourney: {
    whenToSuspect: [
      'An infant or child has persistent high fever with enlarged liver or spleen, swollen lymph nodes, rash, or reduced responsiveness.',
      'Blood tests show cytopenias plus high ferritin, high triglycerides, abnormal liver tests, or low fibrinogen.',
      'Inflammation worsens after infection, or there are seizures, sleepiness, or encephalitis-like symptoms.',
      'There is a sibling with similar illness, unexplained infant death, consanguinity, or a known HLH-related gene variant.',
    ],
    commonWrongTurns: [
      'Repeatedly changing antibiotics for presumed infection without checking HLH markers.',
      'Waiting for hemophagocytosis on bone marrow before considering HLH, even though it may be absent early.',
      'Treating the acute flare without arranging genetic testing and transplant-center input.',
      'Stopping follow-up after improvement and missing relapse, infection prevention, neurologic, or transplant issues.',
    ],
    firstDepartments: [
      'Pediatric hematology',
      'Hematology',
      'Clinical immunology',
      'Emergency or intensive care',
    ],
    diagnosisChecklist: [
      'Record fever duration, highest temperatures, infection triggers, medication response, bleeding, seizures, and mental status changes.',
      'Bring CBC, liver and kidney tests, coagulation studies, ferritin, triglycerides, fibrinogen, marrow results, infectious testing, and imaging.',
      'Collect family history of severe early infections, HLH, infant deaths, or consanguinity.',
      'Bring any genetic testing, NK-cell function, degranulation testing, or soluble IL-2 receptor results.',
    ],
    testsToAskAbout: [
      'HLH laboratory evaluation including blood counts, ferritin, triglycerides, fibrinogen, liver tests, coagulation, and soluble IL-2 receptor when available.',
      'Testing for infectious triggers such as EBV, CMV, bacteria, fungi, and other viruses.',
      'NK-cell function, cytotoxic degranulation assays, and HLH-related genetic testing.',
      'Whether bone marrow testing, CSF or brain MRI, ICU evaluation, or transplant-center consultation is needed.',
    ],
    questionsForDoctor: [
      'Does this meet HLH criteria, and does it look familial or secondary?',
      'Which organ problems are most urgent, and do we need ICU or transfer to a transplant center?',
      'How will treatment control inflammation, prevent infection, and prepare for transplant if needed?',
      'Should relatives have carrier testing, and how will siblings be screened or considered as donors?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FHL often presents as severe acute or subacute inflammation with prolonged fever, enlarged liver or spleen, cytopenias, fatigue, bleeding tendency, jaundice, liver dysfunction, coagulopathy, and increased infection risk. Rash and lymph node enlargement can occur.</p><p>Central nervous system involvement can cause irritability, sleepiness, seizures, encephalitis-like symptoms, or developmental regression. Many patients present in infancy, but presentation can occur later in childhood or adulthood.</p>',
    diagnosis:
      '<p>Diagnosis combines HLH clinical and laboratory criteria, evaluation for infectious, malignant, and rheumatologic triggers, immune-function testing, and genetic testing. Hemophagocytosis in marrow supports the diagnosis but is not required early.</p><p>Familial HLH is usually confirmed by pathogenic variants in genes such as PRF1, UNC13D, STX11, or STXBP2. Clinicians also assess secondary HLH, severe infection, leukemia or lymphoma, liver failure, and autoinflammatory disease.</p>',
    treatment:
      '<p>Active disease requires rapid control of inflammation, often with corticosteroids, etoposide-based therapy, cyclosporine, or cytokine-targeted treatment, together with infection treatment, transfusion, coagulation, liver, kidney, and ICU support when needed.</p><p>For typical FHL, allogeneic hematopoietic stem cell transplantation is an important curative option. Timing and regimen should be planned by teams experienced in HLH, immunology, hematology, and transplant care.</p>',
    longTermCare:
      '<p>Follow-up monitors relapse risk, infection prevention, blood count and liver recovery, neurologic outcomes, nutrition, and mental health support. Transplant recipients also need monitoring for graft function, rejection, infection, and long-term endocrine or fertility effects.</p>',
    fertilityOrFamily:
      '<p>Most FHL is autosomal recessive. Parents are usually carriers, and recurrence risk in future pregnancies depends on the family variants. Siblings may need testing and may also be considered as potential donors.</p><p>Families can discuss carrier testing, prenatal diagnosis, preimplantation genetic testing, and donor selection for stem cell transplantation.</p>',
    emergencySigns:
      '<p>Seek emergency care for persistent fever with poor responsiveness, seizures, altered consciousness, breathing difficulty, significant bleeding, rapidly spreading bruising, severe jaundice, low urine output, unstable blood pressure, or shock-like symptoms.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GeneReviews: Familial Hemophagocytic Lymphohistiocytosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1444/',
    },
  ],
  symptoms:
    '<p>Common features include prolonged fever, enlarged liver or spleen, cytopenias, coagulopathy, liver dysfunction, bleeding tendency, infection risk, and neurologic signs such as seizures or altered consciousness.</p>',
  diagnosis:
    '<p>Diagnosis combines HLH criteria and labs, ferritin/triglyceride/fibrinogen testing, evaluation for infection or malignancy, immune-function studies, and HLH-related genetic testing.</p>',
  treatment:
    '<p>Active disease needs urgent immunochemotherapy or targeted anti-inflammatory treatment plus infection and organ support; typical familial HLH usually requires evaluation for allogeneic stem cell transplantation.</p>',
  prognosis:
    '<p>Untreated active FHL can become life-threatening quickly. Earlier recognition, inflammation control, infection management, and appropriate transplant timing can improve survival and long-term outcome.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'multisystem',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 381,
    name: 'familial-hemophagocytic-lymphohistiocytosis-journey.png',
    url: '/images/diseases/familial-hemophagocytic-lymphohistiocytosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

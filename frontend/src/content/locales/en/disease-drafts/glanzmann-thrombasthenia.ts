import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlanzmannThrombasthenia: DiseaseDraft = {
  ...entity(2037, 'disease-glanzmann-thrombasthenia'),
  name: 'Glanzmann thrombasthenia',
  nameEn: 'Glanzmann thrombasthenia',
  alias:
    'GT, Glanzmann disease, integrin alphaIIb beta3 deficiency, China Second Rare Disease Catalog item 37',
  slug: 'glanzmann-thrombasthenia',
  oneSentence:
    'Glanzmann thrombasthenia is an autosomal recessive platelet function disorder in which platelet counts may be normal but platelets cannot aggregate properly, causing recurrent nosebleeds, gum bleeding, bruising, heavy menstrual bleeding, or prolonged bleeding after procedures.',
  plainName:
    'An inherited bleeding disorder where platelet number may be normal but clotting function is weak',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 1 million people worldwide, with higher frequency in some communities.",
  quickLook: {
    whatItIs:
      'GT is caused by variants in genes such as ITGA2B or ITGB3 that affect the platelet alphaIIb beta3 receptor. Platelets cannot link together well, so mucosal and injury-related bleeding can last longer.',
    whoToSeeFirst:
      'Repeated nosebleeds, gum bleeding, bruising, heavy periods, or prolonged bleeding after dental work or surgery should be assessed by hematology, pediatric hematology, or a coagulation clinic. Major bleeding needs emergency care.',
    isGenetic:
      'GT is autosomal recessive. After diagnosis, genetic counseling can help relatives, siblings, carrier testing, and reproductive planning.',
    hasTreatment:
      'Care focuses on preventing and rapidly treating bleeding: local measures, antifibrinolytics, platelet transfusion when needed, recombinant factor VIIa in selected situations, and advance planning for surgery, dental work, menstruation, pregnancy, and delivery.',
    commonDelayReason:
      'Because the platelet count may be normal, bleeding may be blamed on rhinitis, gum disease, heavy periods, or easy bruising. Recurrent bleeding with routine tests that do not explain it should trigger platelet function testing.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent nosebleeds, gum bleeding, petechiae, or bruises begin in childhood and bleeding lasts longer than expected.',
      'Dental work, injury, surgery, childbirth, or periods cause excessive bleeding while platelet count is normal or near normal.',
      'Family history includes similar bleeding, consanguinity, or siblings with unexplained severe bleeding.',
      'Routine coagulation tests do not explain the bleeding and a clinician suspects a platelet function disorder.',
    ],
    commonWrongTurns: [
      'Only treating nose or gum bleeding locally without referral for platelet function testing.',
      'Assuming a normal platelet count rules out platelet-related bleeding disease.',
      'Not telling surgical, dental, or obstetric teams about the bleeding history before a procedure.',
      'Using aspirin, ibuprofen, or other medicines that can worsen bleeding without checking with the care team.',
    ],
    firstDepartments: [
      'Hematology',
      'Pediatric hematology',
      'Coagulation clinic',
      'Emergency medicine',
    ],
    diagnosisChecklist: [
      'Record nosebleeds, gum bleeding, menstrual flow, bleeding after injury/dental work/surgery, and any transfusions.',
      'Bring CBC, coagulation tests, platelet function results, transfusion records, and medication lists.',
      'Summarize family bleeding history, consanguinity, siblings, and reproductive plans.',
      'List aspirin, NSAIDs, anticoagulants, herbs, or supplements used recently.',
    ],
    testsToAskAbout: [
      'Platelet count and morphology plus coagulation tests to exclude other bleeding causes.',
      'Platelet aggregation studies and flow cytometry for alphaIIb beta3 expression.',
      'ITGA2B, ITGB3, and related gene testing with family studies when useful.',
      'A written hemostasis plan before surgery, dental extraction, pregnancy, or delivery.',
    ],
    questionsForDoctor: [
      'How severe is my bleeding pattern, and which medicines or activities should I avoid?',
      'What should I do first for nosebleeds, heavy periods, or dental bleeding at home and in hospital?',
      'Should I carry an emergency card, and what should emergency clinicians know?',
      'Do relatives need testing, and what genetic counseling is needed before pregnancy?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GT mainly causes mucosal and skin bleeding, such as nosebleeds, gum bleeding, petechiae, purpura, bruising, and prolonged bleeding after injury. Heavy menstrual bleeding is common, and pregnancy or delivery may carry increased bleeding risk.</p><p>Severity varies widely, even within the same family. Rare but serious bleeding can involve the gastrointestinal tract, inside the skull, or joints and needs urgent care.</p>',
    diagnosis:
      '<p>Diagnosis cannot rely on platelet count alone. People with GT may have a normal platelet count and near-normal routine coagulation tests; the key problem is abnormal platelet aggregation and absent or dysfunctional alphaIIb beta3 receptor.</p><p>Testing may include CBC, coagulation studies, platelet aggregation, flow cytometry for GPIIb/IIIa, and ITGA2B/ITGB3 gene testing. Clinicians also exclude von Willebrand disease, other platelet function disorders, and acquired bleeding causes.</p>',
    treatment:
      '<p>Mild or moderate bleeding may be managed with pressure, local nose or mouth measures, and antifibrinolytic medicines. Severe bleeding, surgery, or childbirth may require platelet transfusion; recombinant factor VIIa may be used in selected patients, especially when platelet transfusion is ineffective or antibodies are present.</p><p>Daily care includes avoiding aspirin and some NSAIDs, maintaining oral health, avoiding high-bleeding-risk sports, and contacting hematology before any invasive procedure.</p>',
    longTermCare:
      '<p>Patients should keep diagnosis documents, genetic results, transfusion history, and treatment-response records, and carry emergency information. Those needing repeated platelet transfusions require monitoring for alloimmunization and transfusion-related risks.</p><p>Adolescents and women need menstrual management plans. Family, school, and workplace contacts should know when nosebleeds, injuries, or head trauma require urgent care.</p>',
    fertilityOrFamily:
      '<p>GT is autosomal recessive. Parents are often carriers, and siblings may be affected or carriers. Genetic counseling can discuss partner testing, prenatal diagnosis, or preimplantation genetic testing when relevant.</p>',
    emergencySigns:
      '<p>Headache or vomiting after head injury, altered consciousness, nose or mouth bleeding that will not stop, vomiting blood, black stools, blood in urine, severe heavy menstrual bleeding, postpartum bleeding, shortness of breath, or marked pallor and weakness requires emergency care with GT clearly identified.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Glanzmann thrombasthenia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/glanzmann-thrombasthenia/',
    },
  ],
  symptoms:
    '<p>Common signs include nosebleeds, gum bleeding, petechiae, bruising, prolonged bleeding after injury or dental work, and heavy periods; serious cases may involve GI, intracranial, or joint bleeding.</p>',
  diagnosis:
    '<p>Platelet count may be normal, so diagnosis focuses on platelet aggregation defects, alphaIIb beta3 testing, and ITGA2B/ITGB3 gene testing while excluding other bleeding disorders.</p>',
  treatment:
    '<p>Care uses local measures, antifibrinolytics, platelet transfusion when needed, selected recombinant factor VIIa, and advance hemostasis planning for dental work, surgery, pregnancy, and delivery.</p>',
  prognosis:
    '<p>With prevention and rapid bleeding plans, many people live active lives; severe bleeding, transfusion complications, menstruation, pregnancy, and delivery need careful hematology support.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 391,
    name: 'glanzmann-thrombasthenia-journey.png',
    url: '/images/diseases/glanzmann-thrombasthenia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

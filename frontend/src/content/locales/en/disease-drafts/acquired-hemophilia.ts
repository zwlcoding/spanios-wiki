import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAcquiredHemophilia: DiseaseDraft = {
  ...entity(2002, 'disease-acquired-hemophilia'),
  name: 'Acquired hemophilia',
  nameEn: 'Acquired hemophilia',
  alias:
    'Acquired hemophilia A; AHA; factor VIII inhibitor bleeding; China Second Rare Disease Catalog item 2',
  slug: 'acquired-hemophilia',
  oneSentence:
    'Acquired hemophilia is a rare acquired bleeding disorder, most often caused by autoantibodies against factor VIII, that can cause sudden serious bleeding in people with no previous bleeding history.',
  plainName:
    'Sudden severe bruising or deep bleeding from an acquired clotting problem',
  prevalence:
    "Included in China's second rare disease catalog; published estimates are often about 0.2-1.5 cases per million people per year, with higher risk in older adults and around pregnancy/postpartum.",
  quickLook: {
    whatItIs:
      'Acquired hemophilia is different from inherited hemophilia. It usually appears later in life when the immune system makes antibodies that block a clotting factor, most often factor VIII.',
    whoToSeeFirst:
      'Use hematology or emergency care for large unexplained bruises, deep muscle swelling, unexplained anemia, or bleeding after surgery, dental work, or childbirth.',
    isGenetic:
      'It is usually not inherited. It may be associated with autoimmune disease, cancer, pregnancy/postpartum state, medicines, infections, or no clear trigger.',
    hasTreatment:
      'Treatment usually has two goals: control active bleeding and remove the inhibitor with immune-directed therapy. It should be managed by a team experienced in bleeding disorders.',
    commonDelayReason:
      'Because patients often have no past bleeding history, the condition may be mistaken for trauma, medication effects, skin disease, or routine anemia. An isolated prolonged APTT may also be missed.',
  },
  patientJourney: {
    whenToSuspect: [
      'A new large bruise, soft tissue bleed, or painful muscle swelling in an adult or postpartum patient.',
      'Bleeding that does not stop after surgery, a procedure, dental work, or delivery.',
      'Unexplained anemia, blood in urine or stool, or mucosal bleeding not explained by platelet count alone.',
      'A prolonged APTT with relatively normal PT.',
      'Serious bleeding despite no personal or family history of bleeding.',
    ],
    commonWrongTurns: [
      'Treating bruising as trauma without checking coagulation tests.',
      'Ruling out a hemophilia-related problem only because there is no family history.',
      'Ignoring an isolated prolonged APTT or not ordering a mixing study and factor assays.',
      'Proceeding with non-urgent invasive procedures before bleeding risk is controlled.',
    ],
    firstDepartments: [
      'Hematology',
      'Emergency medicine',
      'Coagulation or rare blood disease clinic',
    ],
    diagnosisChecklist: [
      'Record when bleeding started, where it is, whether it was spontaneous, and whether it followed childbirth, surgery, dental work, or a new medicine.',
      'Bring CBC, coagulation tests, liver and kidney tests, transfusion records, and imaging.',
      'List anticoagulants, antiplatelet medicines, immune medicines, and recent new drugs.',
      'Tell the doctor about autoimmune disease, cancer, pregnancy/postpartum status, infections, or recent procedures.',
    ],
    testsToAskAbout: [
      'Coagulation tests including APTT, PT, fibrinogen, and thrombin time.',
      'APTT mixing study to look for an inhibitor.',
      'Factor VIII activity, and other factor assays when needed.',
      'Factor VIII inhibitor titer, such as Bethesda or Nijmegen-modified Bethesda assay.',
      'Evaluation for associated autoimmune disease, cancer, infection, or postpartum triggers when appropriate.',
    ],
    questionsForDoctor: [
      'How severe is the bleeding risk, and do I need admission or transfer to a coagulation center?',
      'Is the immediate goal bleeding control, inhibitor eradication, or both?',
      'Which medicines, injections, dental work, or procedures should I avoid right now?',
      'How often should APTT, factor VIII activity, and inhibitor titer be checked?',
      'Should we look for an underlying trigger such as autoimmune disease or cancer?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Acquired hemophilia often presents with sudden new bleeding. Common sites include large skin bruises, soft tissue bleeding, muscle hematomas, mucosal bleeding, urinary or gastrointestinal bleeding, and bleeding after surgery, procedures, dental work, or childbirth.</p><p>Unlike inherited hemophilia, repeated joint bleeding is not usually the main pattern. Many patients have no personal or family bleeding history, so a first severe bleed is an important warning sign.</p>',
    diagnosis:
      '<p>Diagnosis links the bleeding pattern with coagulation testing. Typical findings include isolated prolonged APTT, relatively normal PT, a mixing study that does not correct as expected, low factor VIII activity, and a detectable factor VIII inhibitor.</p><p>Doctors also rule out anticoagulant effects, liver disease, lupus anticoagulant, inherited hemophilia with inhibitor, and other coagulation disorders, while looking for possible associated autoimmune disease, malignancy, pregnancy/postpartum state, or medicines.</p>',
    treatment:
      '<p>Treatment usually has two tracks: control acute bleeding and eradicate the inhibitor. Bleeding control may require bypassing agents, recombinant products, or other specialist hemostatic therapy. Inhibitor eradication often uses corticosteroids, sometimes with additional immunosuppressive therapy.</p><p>Patients should not self-manage with pain medicines, anticoagulants, or invasive procedures. Surgery, dental work, punctures, and endoscopy should be discussed with hematology first.</p>',
    longTermCare:
      '<p>Follow-up tracks bleeding control, hemoglobin, APTT, factor VIII activity, inhibitor titer, adverse effects of immunosuppression, and infection risk.</p><p>Even after remission, follow the monitoring plan because relapse can occur. Carrying a short bleeding-disorder summary helps in emergency or cross-hospital care.</p>',
    fertilityOrFamily:
      '<p>Acquired hemophilia is usually not inherited, so relatives are not screened like families with inherited hemophilia. Pregnancy- or postpartum-associated cases should be reviewed by hematology and obstetrics before future pregnancies.</p>',
    emergencySigns:
      '<p>Seek emergency care for headache with vomiting or confusion, trouble breathing, chest pain, abdominal or back pain with anemia, black or bloody stool, blood in urine, rapidly enlarging muscle or throat swelling, or bleeding that will not stop after a procedure.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'CDC: About Hemophilia',
      type: 'official',
      url: 'https://www.cdc.gov/hemophilia/about/index.html',
    },
    {
      name: 'Pai M. Acquired Hemophilia A. Hematol Oncol Clin North Am. 2021',
      type: 'review',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34535289/',
    },
  ],
  symptoms:
    '<p>Common signs include sudden large bruises, soft tissue or muscle hematomas, mucosal bleeding, blood in urine, gastrointestinal bleeding, or prolonged bleeding after surgery, dental work, or delivery.</p>',
  diagnosis:
    '<p>Typical diagnostic clues are isolated prolonged APTT, failed correction on mixing study, low factor VIII activity, and a positive factor VIII inhibitor, after excluding anticoagulants and other coagulation disorders.</p>',
  treatment:
    '<p>Specialist care is needed to control bleeding and eradicate the inhibitor; invasive procedures should wait until coagulation risk is reviewed.</p>',
  prognosis:
    '<p>Prompt diagnosis and treatment can reduce life-threatening bleeding, but close monitoring is needed for relapse, infection, and treatment toxicity.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 356,
    name: 'acquired-hemophilia-journey.png',
    url: '/images/diseases/acquired-hemophilia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

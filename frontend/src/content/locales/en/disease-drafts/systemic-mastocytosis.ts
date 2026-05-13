import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSystemicMastocytosis: DiseaseDraft = {
  ...entity(2075, 'disease-systemic-mastocytosis'),
  name: 'Systemic mastocytosis',
  nameEn: 'Systemic mastocytosis',
  alias: 'SM; systemic mastocytosis; China Second Rare Disease Catalog item 75',
  oneSentence:
    'Systemic mastocytosis is a rare blood disorder in which mast cells accumulate in bone marrow and other organs, causing flushing, itching, diarrhea, bone pain, allergic reactions, or organ damage.',
  plainName:
    'A blood disorder where too many mast cells trigger repeated allergy-like episodes',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 10,000 to 20,000 people worldwide, with most adult cases linked to acquired KIT variants.",
  quickLook: {
    whatItIs:
      'Mast cells release histamine and other mediators. In SM, abnormal mast cells accumulate and can trigger body-wide allergy-like symptoms; severe forms can affect liver, spleen, bones, or blood counts.',
    whoToSeeFirst:
      'Recurrent unexplained flushing, fainting, low blood pressure, diarrhea, abdominal pain, bone pain, pigmented rash, or anaphylaxis should be assessed by hematology and allergy/immunology.',
    isGenetic:
      'Most adult SM is caused by acquired somatic KIT variants and is not usually inherited. Rare familial or pediatric skin-limited forms need specialist interpretation.',
    hasTreatment:
      'Care includes trigger identification, epinephrine preparedness, H1/H2 antihistamines, leukotriene blockers, mast cell stabilizers, bone protection, and for advanced disease KIT-targeted or cytoreductive therapy.',
    commonDelayReason:
      'Symptoms cross skin, gut, neurologic, and cardiovascular systems and may be labeled allergy, IBS, anxiety, fainting, or skin disease without baseline tryptase and marrow evaluation.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent flushing, itching, urticaria-like or pigmented rash, worsened by friction or temperature changes.',
      'Unexplained anaphylaxis, low blood pressure, or fainting triggered by stings, medicines, alcohol, exercise, or procedures.',
      'Chronic abdominal pain, diarrhea, reflux, nausea, bone pain, osteoporosis, or fractures.',
      'Persistently elevated serum tryptase or marrow showing abnormal mast cells.',
    ],
    commonWrongTurns: [
      'Treating as ordinary allergy without tryptase, KIT D816V, and marrow involvement assessment.',
      'Focusing only on skin while missing osteoporosis, liver, spleen, lymph nodes, blood counts, and associated hematologic neoplasm.',
      'No plan for anesthesia, surgery, contrast, stings, and rescue medicines.',
    ],
    firstDepartments: [
      'Hematology',
      'Allergy/immunology',
      'Dermatology',
      'Osteoporosis/endocrinology or gastroenterology as needed',
    ],
    diagnosisChecklist: [
      'Record flushing, fainting, diarrhea, rash, bone pain, triggers, and anaphylaxis events.',
      'Bring baseline and event tryptase, CBC, liver/spleen imaging, bone density, and skin or marrow pathology.',
      'Bring KIT D816V or other KIT testing, flow immunophenotype, and associated blood disorder evaluation.',
    ],
    testsToAskAbout: [
      'Whether criteria for systemic mastocytosis are met and whether subtype is indolent, smoldering, or advanced.',
      'Need for baseline tryptase, KIT D816V, marrow biopsy, and CD25/CD2/CD30 expression.',
      'Need for bone density, liver, spleen, lymph node, GI, and associated hematologic neoplasm assessment.',
    ],
    questionsForDoctor: [
      'Do I need to carry an epinephrine autoinjector, and which triggers or medicines should I avoid?',
      'What premedication is needed before surgery, dental work, anesthesia, contrast, or vaccines?',
      'Is my subtype managed by mediator control and monitoring, or does it need targeted therapy?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>SM symptoms come from mast cell accumulation and mediator release. Features include flushing, itching, rash, headache, palpitations, low blood pressure, fainting, nasal congestion, wheeze, abdominal pain, diarrhea, nausea, reflux, fatigue, brain fog, anxiety, and bone pain.</p><p>Triggers include stings, alcohol, temperature change, friction, exercise, infection, emotional stress, surgery, anesthesia, and certain medicines. Severe disease can cause anaphylaxis, osteoporosis and fractures, liver, spleen or lymph node involvement, ascites, or associated blood cancer.</p>',
    diagnosis:
      '<p>Diagnosis usually uses baseline serum tryptase, KIT variant testing, bone marrow biopsy, and abnormal mast cell immunophenotype. Skin lesions, liver, spleen, lymph nodes, bone density, and GI symptoms help subtype the condition.</p><p>Clinicians distinguish cutaneous mastocytosis, systemic mastocytosis, mast cell activation syndrome, and ordinary allergic disease. Subtyping determines whether disease is indolent, smoldering, advanced, or associated with another hematologic neoplasm.</p>',
    treatment:
      '<p>Basic care is identifying and avoiding personal triggers and having an emergency plan; many patients need epinephrine. Mediator symptoms may be treated with H1/H2 antihistamines, leukotriene blockers, cromolyn, proton pump inhibitors, or antidiarrheal medicines.</p><p>Osteoporosis needs bone-protective care. Advanced SM or SM with associated blood neoplasm may require KIT-pathway targeted therapy such as midostaurin or avapritinib or other hematology treatment.</p>',
    longTermCare:
      '<p>Follow-up tracks symptoms and triggers, anaphylaxis risk, tryptase, CBC, liver and spleen status, bone density, GI symptoms, medication adverse effects, and quality of life.</p><p>Patients should keep written emergency and peri-procedure plans and tell anesthesia, dental, emergency, and other clinicians about SM and triggering medicines.</p>',
    fertilityOrFamily:
      '<p>Adult SM usually involves acquired somatic KIT variants, so relatives are not routinely screened as for inherited disease. Pregnancy, surgery, or anesthesia should be planned with hematology, allergy/immunology, and the procedural team.</p>',
    emergencySigns:
      '<p>Emergency care is needed for throat tightness, wheezing, low blood pressure, fainting, widespread hives with breathing trouble, severe abdominal pain or vomiting, altered consciousness, or symptoms not improving after epinephrine.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Systemic mastocytosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/systemic-mastocytosis',
    },
    {
      name: 'Mayo Clinic: Systemic mastocytosis diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/systemic-mastocytosis/diagnosis-treatment/drc-20450478',
    },
  ],
  symptoms:
    '<p>Features include flushing, itching, rash, fainting, low blood pressure, abdominal pain, diarrhea, reflux, wheeze, bone pain, fatigue, brain fog, anaphylaxis, and sometimes organ damage.</p>',
  diagnosis:
    '<p>Diagnosis combines serum tryptase, KIT testing, bone marrow biopsy, mast cell immunophenotype, and organ assessment while distinguishing MCAS and ordinary allergy.</p>',
  treatment:
    '<p>Care includes trigger avoidance, epinephrine, antihistamines and other mediator-control medicines, bone protection, and targeted or hematology treatment for advanced disease.</p>',
  prognosis:
    '<p>Indolent SM is often managed long term; advanced SM, mast cell leukemia, or SM with an associated hematologic neoplasm has a more serious outlook and needs specialist treatment.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'systemic-mastocytosis',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 429,
    name: 'systemic-mastocytosis-journey.png',
    url: '/images/diseases/systemic-mastocytosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

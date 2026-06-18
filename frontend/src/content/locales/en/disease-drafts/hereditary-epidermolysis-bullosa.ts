import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryEpidermolysisBullosa: DiseaseDraft = {
  ...entity(41, 'disease-hereditary-epidermolysis-bullosa'),
  name: 'Hereditary Epidermolysis Bullosa',
  nameEn: 'Hereditary Epidermolysis Bullosa',
  alias:
    'Epidermolysis bullosa, EB, butterfly children, hereditary skin fragility',
  slug: 'hereditary-epidermolysis-bullosa',
  oneSentence:
    'Hereditary epidermolysis bullosa is a group of genetic conditions in which the skin and mucous membranes are unusually fragile; even minor friction can cause blisters, erosions, chronic wounds, and pain.',
  plainName:
    'A genetic condition where the skin is like a very thin protective layer and blisters or breaks easily with minor friction',
  prevalence:
    'Overall rare, with many subtypes; severity varies greatly from localized blisters to multi-system involvement.',
  quickLook: {
    whatItIs:
      'EB is not an ordinary blistering disease. It is caused by abnormal structural proteins in the skin that make the layers connect poorly. Different subtypes vary in blistering level, inheritance pattern, complications, and long-term risks.',
    whoToSeeFirst:
      'When a newborn or child has repeated blisters, skin breakdown, oral erosions, abnormal fingernails or toenails, or slow-healing wounds, see a dermatologist—preferably a team familiar with genetic skin disorders and wound care.',
    isGenetic:
      'Yes. It can be inherited in an autosomal dominant or recessive pattern, or it can arise from a new (de novo) variant. Genetic testing helps clarify the subtype and family risks.',
    hasTreatment:
      'Current management focuses on wound care, pain control, infection prevention, nutritional support, complication monitoring, and evaluating targeted or gene-related therapies for some subtypes.',
    commonDelayReason:
      'Early on it may be mistaken for infection, burns, eczema, or trauma. If the clue of blisters from minor friction and family or newborn history is missed, subtype diagnosis and care education can be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Blisters and erosions appear after minor friction, tape application, holding, or dressing in newborns or infants.',
      'Repeated damage to oral, esophageal, eye, or genital mucous membranes, with difficulty eating or pain.',
      'Slow wound healing, scarring, milia, abnormal fingernails or toenails, fused fingers or toes, or limited movement.',
      'Chronic anemia, malnutrition, growth delay, or repeated infections occurring together with skin breakdown.',
      'Family members who had repeated blisters, fragile skin, scarring, or a similar diagnosis since childhood.',
    ],
    commonWrongTurns: [
      'Treated as a common infection, eczema, burn, or investigated for abuse without assessing for genetic skin fragility.',
      'Using strongly adhesive dressings or rough debridement that worsens skin damage.',
      'Treating only individual wounds while neglecting nutrition, pain, anemia, dental care, eye care, and hand function.',
      'Failing to set up long-term monitoring for skin tumors and chronic wounds in severe subtypes.',
    ],
    firstDepartments: [
      'Dermatology / Pediatric dermatology',
      'Medical genetics / Genetic counseling clinic',
      'Wound and ostomy / Wound care clinic',
      'Nutrition, dentistry, ophthalmology',
      'Rehabilitation medicine / Hand surgery (when scarring or functional limitation occurs)',
    ],
    diagnosisChecklist: [
      'Record the age blisters started, triggers, locations, scarring, nails, and involvement of mouth, eyes, esophagus, etc.',
      'Take photos of blisters and wound changes; bring previous pathology, immunofluorescence, or electron microscopy reports.',
      'Ask whether EB-related genetic testing and subtype confirmation are needed.',
      'Assess nutrition, anemia, pain, infection, teeth, eyes, and hand/foot function.',
      'Learn low-trauma dressing changes, dressing choices, and emergency instructions.',
    ],
    testsToAskAbout: [
      'EB-related gene panel or exome testing.',
      'Immunofluorescence antigen mapping or electron microscopy of a skin biopsy (when the doctor thinks it is needed).',
      'Complete blood count, iron metabolism, nutritional status, and inflammation/infection assessment.',
      'Oral, eye, gastrointestinal, and hand/foot function assessment.',
      'Skin cancer screening for long-term chronic wounds or suspicious lesions.',
    ],
    questionsForDoctor: [
      'Which EB subtype does my child or I have? How does this affect care and long-term risks?',
      'Which dressings, tapes, cleaning methods, and dressing-change techniques are safer?',
      'How should pain, itching, nutrition, and anemia be managed together?',
      'What wound changes suggest infection or cancer risk and need prompt follow-up?',
      'What genetic counseling is needed for family screening and future pregnancies?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>EB can cause repeated skin blisters, erosions, chronic wounds, pain, itching, scarring, milia, and abnormal fingernails or toenails. Severe subtypes can affect the mouth, eyes, esophagus, and genitourinary tract, causing difficulty eating, malnutrition, anemia, infection, contracted fingers or toes, or limited movement. Some subtypes carry a risk of squamous cell skin cancer in long-term chronic wounds.</p>',
    diagnosis:
      '<p>Diagnosis usually combines birth and blistering history, distribution of skin lesions, family history, related skin biopsy tests, and genetic testing. Identifying the subtype is important because different EB types differ clearly in inheritance pattern, outlook, wound care, complication screening, and treatment availability.</p>',
    treatment:
      '<p>Management centers on reducing friction, protecting the skin, standardized wound care, controlling pain and itching, preventing infection, improving nutrition, and monitoring complications. Some subtypes may have opportunities to evaluate targeted or gene-related therapies, but whether these are suitable requires judgment by a specialist team.</p>',
    longTermCare:
      '<p>Long-term care requires collaboration among dermatology, wound care, nutrition, pain management, dentistry, ophthalmology, rehabilitation, and genetic counseling. Families should establish a low-trauma dressing routine, emergency instructions, and a log for observing chronic wounds.</p>',
    fertilityOrFamily:
      '<p>EB can be inherited in a dominant or recessive pattern, or it can be caused by a new (de novo) variant. After the gene and subtype are identified, family members can learn about carrier testing, recurrence risk, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
    emergencySigns:
      '<p>Seek medical care promptly for fever; wounds that are red, swollen, hot, painful, or have pus; rapidly expanding skin breakdown; dehydration; difficulty eating; trouble breathing or swallowing; eye pain or light sensitivity; or chronic wounds with abnormal growth, bleeding, foul odor, or changes in pain.</p>',
  },
  sources: [
    {
      name: 'NCBI Bookshelf StatPearls: Epidermolysis Bullosa',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK599531/',
    },
    {
      name: 'GeneReviews: Dystrophic Epidermolysis Bullosa',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1304/',
    },
    {
      name: 'MedlinePlus Genetics: Epidermolysis bullosa',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/epidermolysis-bullosa/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Repeated blisters, erosions, chronic wounds, pain, scarring, and abnormal nails after minor friction; the mouth, eyes, esophagus, and hand/foot function may also be affected.</p>',
  diagnosis:
    '<p>Evaluation includes skin lesions and family history, related skin biopsy tests, EB-related genetic testing, and screening for nutrition, infection, and multi-system complications.</p>',
  treatment:
    '<p>Management focuses on low-trauma wound care, pain and itch control, infection prevention, nutritional support, rehabilitation, and long-term complication monitoring.</p>',
  prognosis:
    '<p>Outlook depends heavily on subtype and severity; patients with severe forms need long-term multidisciplinary care and monitoring for chronic wounds and skin cancer risk.</p>',
  sourceName: 'NCBI Bookshelf StatPearls: Epidermolysis Bullosa',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK599531/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [11],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 340,
    name: 'hereditary-epidermolysis-bullosa-journey.png',
    url: '/images/diseases/hereditary-epidermolysis-bullosa-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

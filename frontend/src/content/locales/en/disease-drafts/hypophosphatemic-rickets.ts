import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHypophosphatemicRickets: DiseaseDraft = {
  ...entity(53, 'disease-hypophosphatemic-rickets'),
  name: 'Hypophosphatemic Rickets',
  nameEn: 'Hypophosphatemic Rickets',
  alias: 'Hypophosphatemic Rickets, X-linked Hypophosphatemia (XLH)',
  slug: 'hypophosphatemic-rickets',
  oneSentence:
    'Hypophosphatemic rickets is a group of inherited or acquired diseases in which excessive phosphate loss by the kidneys leads to low blood phosphate levels, causing impaired bone mineralization; it presents as rickets in children and osteomalacia in adults.',
  plainName: 'Hypophosphatemic Rickets',
  prevalence:
    'Incidence is approximately 3.9 per 100,000, with a prevalence of about 1 in 21,000; XLH accounts for more than 80% of inherited hypophosphatemic rickets.',
  quickLook: {
    whatItIs:
      'Hypophosphatemic rickets is a group of bone mineralization disorders characterized by low blood phosphate levels. Mutations in genes such as PHEX, FGF23, and DMP1, or acquired causes, lead to abnormal levels of phosphate-regulating factor fibroblast growth factor 23 (FGF23), reduced kidney reabsorption of phosphate, low blood phosphate, and impaired bone mineralization. In children, it manifests as rickets (square head, pigeon chest, O-leg or X-leg deformities, etc.); in adults, it manifests as osteomalacia (fatigue, bone pain, multiple fractures, shortened height).',
    whoToSeeFirst:
      'For children, it is recommended to first visit a pediatric endocrinology or pediatric genetics/metabolism department; adults can visit an endocrinology, bone metabolism, or nephrology department. Orthopedics can provide evaluation if there are bone deformities or mobility limitations. Some patients may consider multidisciplinary (MDT) clinics.',
    isGenetic:
      'Yes, inherited hypophosphatemic rickets is mostly X-linked dominant (XLH, caused by PHEX gene mutations), with autosomal dominant/recessive forms also existing. Acquired hypophosphatemic osteomalacia is most commonly tumor-related (TIO).',
    hasTreatment:
      'There is long-term management, including phosphate metabolism monitoring, traditional treatment or targeted therapy evaluation, orthopedic and dental follow-up. Whether specific treatment is suitable must be determined by pediatric/adult endocrinology, nephrology, or bone metabolism specialists.',
    commonDelayReason:
      'The presentation of hypophosphatemic rickets is similar to nutritional rickets; primary care physicians often lack awareness of inherited rickets and may misdiagnose it as ordinary vitamin D deficiency rickets, leading to delayed appropriate treatment. Some patients with milder symptoms are only diagnosed in adulthood.',
  },
  patientJourney: {
    whenToSuspect: [
      'Bone deformities such as square head, pigeon chest, rib beading, and leg bowing (O-leg or X-leg) in childhood',
      'Slowed growth in height; X-ray of long bones showing widened, blurred metaphyses with frayed cupping',
      'Persistently low blood phosphate, significantly elevated blood alkaline phosphatase, but normal blood calcium, vitamin D, and parathyroid hormone levels',
      'Family history of rickets or osteomalacia',
      'Fatigue, bone pain, multiple pseudofractures, and gradual height loss in adults',
      'Poor response to standard calcium or vitamin D supplementation for rickets',
    ],
    commonWrongTurns: [
      'Misdiagnosis as nutritional vitamin D deficiency rickets based solely on clinical presentation, with only calcium or regular vitamin D supplementation',
      'Neglecting to take a detailed family history and perform genetic testing to identify the underlying cause',
      'Failure to systematically differentiate causes of hypophosphatemia, missing inherited or tumor-related possibilities',
      'For acquired hypophosphatemic osteomalacia, failing to actively search for tumor-related clues, delaying treatment of the underlying cause',
    ],
    firstDepartments: [
      'Pediatric endocrinology or pediatric genetics/metabolism (children)',
      'Endocrinology or bone metabolism (adults)',
      'Orthopedics (significant bone deformities or surgical evaluation needed)',
      'Nephrology (suspected kidney disease causing phosphate metabolism abnormalities)',
      'Pediatric urology/andrology or reproductive endocrinology (for gonadal function assessment)',
    ],
    diagnosisChecklist: [
      'Detailed medical history: age of onset, growth and development history, family history',
      'Serum biochemical tests: blood phosphate, calcium, alkaline phosphatase, serum FGF23, 25-hydroxyvitamin D, parathyroid hormone',
      'Urine phosphate test: calculate tubular phosphate reabsorption rate (TmP/GFR)',
      'Imaging: X-ray of long bones (assess rickets changes), bone CT/MRI (if needed)',
      'Genetic testing: for suspected inherited hypophosphatemic rickets, test genes such as PHEX, FGF23, DMP1, ENPP1, SLC34A3',
      'Tumor screening: for suspected TIO, perform imaging to locate the causative tumor',
    ],
    testsToAskAbout: [
      'Serum phosphate, calcium, alkaline phosphatase',
      '25-hydroxyvitamin D and parathyroid hormone',
      'Urine phosphate and tubular phosphate reabsorption rate',
      'Serum FGF23 level',
      'X-ray of long bones',
      'Genetic testing (PHEX, etc.)',
    ],
    questionsForDoctor: [
      "Are my child's bone deformities due to hypophosphatemic rickets or ordinary nutritional rickets? What tests are needed for diagnosis?",
      'Does my child need genetic testing? Should other children in the family be tested?',
      'What long-term medications will my child need? What are the side effects?',
      'What should my child eat? Should activity be restricted?',
      'Do I need to continue treatment and follow-up after reaching adulthood?',
      'If I want to have another child, do I need prenatal counseling?',
    ],
  },
  medicalSections: {
    symptoms:
      'In childhood, the main manifestations are rickets signs: square head, pigeon chest, rib beading, rib flaring, limb bowing (O-leg or X-leg), growth retardation, short stature. In adulthood, osteomalacia manifests: fatigue, body shape changes, shortened height, multiple bone pains, pseudofractures, even limited mobility. Dental development abnormalities are also common, including poor tooth quality, toothaches, and easy tooth loss. Complications may include secondary hyperparathyroidism, osteoarthritis, enthesopathy, spinal stenosis, and hearing loss. XLH patients often have spontaneous dental abscesses.',
    diagnosis:
      'Diagnosis requires combining clinical presentation, biochemical tests, imaging, and genetic testing. Typical findings include hypophosphatemia with reduced tubular phosphate reabsorption rate, elevated blood alkaline phosphatase, and normal blood calcium. X-ray shows characteristic rickets changes. Genetic testing can identify the specific type and inheritance pattern, which is valuable for family genetic counseling. Acquired hypophosphatemic osteomalacia requires active tumor screening.',
    treatment:
      'Treatment goals are to improve phosphate metabolism, bone mineralization, pain and function, and prevent long-term complications. Management may include traditional phosphate/active vitamin D regimens or FGF23-targeted therapy evaluation, along with monitoring of blood phosphate, calcium, urine calcium, parathyroid hormone, kidney, and dental issues. Specific medications, dosages, eligible populations, and monitoring frequency should be determined by a specialist team familiar with hypophosphatemic rickets.',
    longTermCare:
      'Hypophosphatemic rickets is a chronic disease requiring long-term, often lifelong, management. In childhood, regular monitoring of growth and development indicators, blood phosphate and calcium, and bone imaging is needed to adjust medications promptly. Adults still need ongoing treatment and follow-up, focusing on bone complications (such as osteoarthritis, fractures), dental health, and hearing changes. Avoid high-impact sports to reduce fracture risk. Genetic counseling and prenatal diagnosis are helpful for family planning. Regular psychological health assessment is important, focusing on quality of life for patients and families.',
    fertilityOrFamily:
      'Most patients with hypophosphatemic rickets can have normal marriages and children. XLH is X-linked dominant; theoretically, male patients will pass the variant to all daughters but not to sons; female patients have a 50% chance of passing the variant to children. For patients whose condition is well-controlled with treatment, pregnancy risks are manageable. Genetic counseling is recommended before planning pregnancy. If there are fertility difficulties in adulthood, reproductive endocrinology or urology can be consulted for assisted reproductive technology options.',
    emergencySigns:
      'Seek medical attention promptly if: unexplained multiple fractures or pseudofractures acutely worsen; severe bone pain affects daily activities; seizure-like episodes occur (be alert for metabolic crises such as hypocalcemia); rapid changes in hearing or vision; severe gastrointestinal discomfort or hypercalcemia occurs after taking oral phosphate preparations.',
  },
  sources: [
    {
      name: 'GeneReviews: X-Linked Hypophosphatemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK83985/',
    },
    {
      name: 'MedlinePlus Genetics: X-linked hypophosphatemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/x-linked-hypophosphatemia/',
    },
  ],
  sourceName: 'GeneReviews: X-Linked Hypophosphatemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK83985/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 352,
    name: 'hypophosphatemic-rickets-journey.png',
    url: '/images/diseases/hypophosphatemic-rickets-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

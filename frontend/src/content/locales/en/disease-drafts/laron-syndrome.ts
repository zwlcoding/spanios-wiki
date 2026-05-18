import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLaronSyndrome: DiseaseDraft = {
  ...entity(5007, 'disease-laron-syndrome'),
  name: 'Laron Syndrome',
  nameEn: 'Laron Syndrome',
  alias:
    'Laron-type dwarfism; growth hormone insensitivity syndrome; China First Rare Disease Catalog item 61',
  slug: 'laron-syndrome',
  oneSentence:
    'Laron syndrome is an autosomal recessive disorder caused by growth hormone receptor deficiency leading to insufficient insulin-like growth factor-1 (IGF-1) production; it presents with severe growth failure despite elevated serum growth hormone levels, and recombinant human IGF-1 replacement therapy effectively promotes growth.',
  plainName:
    'A genetic condition where growth hormone does not work, causing extreme short stature',
  prevalence:
    'Extremely rare; approximately 250–300 cases reported worldwide; higher prevalence in certain populations such as Israel, Mediterranean regions, and Ecuador.',
  searchIntents: [
    'Laron syndrome symptoms',
    'Laron syndrome IGF-1 treatment',
    'Laron syndrome growth hormone',
    'Laron syndrome genetics',
    'Laron syndrome height',
  ],
  quickLook: {
    whatItIs:
      'Mutations in the growth hormone receptor (GHR) gene prevent target organs from responding to growth hormone; the liver cannot produce sufficient IGF-1, leading to growth failure and metabolic abnormalities.',
    whoToSeeFirst:
      'Pediatric endocrinology or metabolic genetics for severe growth failure, infantile facial features, or prominent forehead.',
    isGenetic:
      'Autosomal recessive, caused by GHR gene mutations; parents are asymptomatic carriers, with a 25% recurrence risk for each pregnancy.',
    hasTreatment:
      'Recombinant human IGF-1 (mecasermin) is the primary therapy, administered by subcutaneous injection twice daily; it significantly improves height and metabolic markers.',
    commonDelayReason:
      'During screening for growth hormone deficiency, serum GH levels are normal or elevated, which may be dismissed as laboratory error or misdiagnosed as idiopathic short stature.',
  },
  patientJourney: {
    whenToSuspect: [
      'Postnatal growth velocity markedly reduced, with height below the 3rd percentile for age and sex.',
      'Infantile facial features ("doll-like" face), prominent forehead, blue sclerae, small chin, high-pitched voice.',
      'Fasting hypoglycemia, hyperlipidemia, or hypercholesterolemia.',
      'Family history of similar short stature or consanguinity.',
    ],
    commonWrongTurns: [
      'Misdiagnosing as simple growth hormone deficiency and administering GH without effect.',
      'Attributing short stature to malnutrition or idiopathic short stature without evaluating the GH–IGF-1 axis.',
      'Ruling out GH-related disease because serum GH is not low.',
      'Failing to perform genetic testing, leaving the cause unidentified for years.',
    ],
    firstDepartments: [
      'Pediatric endocrinology',
      'Metabolic genetics',
      'Clinical nutrition',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'Document growth curves, feeding history, and family history in detail.',
      'Serum GH level: typically normal or elevated (unlike GH deficiency).',
      'Serum IGF-1 and IGFBP-3 levels: markedly reduced.',
      'Failure of IGF-1 to rise after GH stimulation.',
      'GHR gene sequencing for definitive diagnosis.',
    ],
    testsToAskAbout: [
      'Serum GH, IGF-1, and IGFBP-3 levels.',
      'GH stimulation test.',
      'Oral glucose tolerance test (for GH suppression response).',
      'GHR gene sequencing.',
      'Bone age radiograph and brain MRI (to exclude pituitary lesions).',
    ],
    questionsForDoctor: [
      "What are my child's GH and IGF-1 levels?",
      'When is the best time to start IGF-1 replacement?',
      'How many injections are needed per day and how is the dose adjusted?',
      'What side effects may occur during treatment?',
      'What is the expected adult height with treatment?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Birth length and weight are usually normal or slightly reduced. Shortly after birth, growth velocity slows markedly; untreated adult height is typically below 130 cm in males and below 120 cm in females. Characteristic facial features include a doll-like face, prominent forehead, blue sclerae, saddle nose, small chin, and crowded teeth. The voice is high-pitched. Metabolic abnormalities include fasting hypoglycemia, hypercholesterolemia, and hyperlipidemia. Intelligence is usually normal, but head circumference is relatively large. Bone age is markedly delayed.</p>',
    diagnosis:
      '<p>Diagnosis is based on clinical features and laboratory findings: serum GH is normal or elevated, but serum IGF-1 and IGFBP-3 are markedly reduced, and exogenous GH fails to raise IGF-1 levels. Identification of pathogenic GHR gene mutations confirms the diagnosis. Differential diagnosis includes growth hormone deficiency, idiopathic short stature, and hypopituitarism.</p>',
    treatment:
      '<p>Recombinant human IGF-1 (mecasermin, brand name Increlex) is the only approved therapy. It is administered by subcutaneous injection twice daily, with dosing adjusted by body weight and serum IGF-1 level. Treatment significantly improves linear growth, bone density, and metabolic markers. Monitoring is required for hypoglycemia (especially 2–3 hours after injection), tonsillar hypertrophy, scoliosis, and insulin resistance. Nutritional support and regular follow-up are also important.</p>',
    longTermCare:
      '<p>Lifelong follow-up is needed to monitor growth, metabolic markers (glucose, lipids), bone density, thyroid function, and reproductive function. Adults are at increased cardiovascular risk due to chronic dyslipidemia and should be monitored accordingly. Osteopenia is common. Patient education includes proper injection technique, recognition and management of hypoglycemia, nutritional management, and keeping regular appointments.</p>',
    fertilityOrFamily:
      '<p>Autosomal recessive inheritance. Parents are asymptomatic carriers. Fertility is usually normal in affected individuals. Prenatal genetic diagnosis and preimplantation genetic testing are available for at-risk families. Genetic counseling helps assess recurrence risk.</p>',
    emergencySigns:
      '<p>Severe hypoglycemia (sweating, palpitations, confusion, seizures), difficulty breathing due to tonsillar hypertrophy causing upper airway obstruction, severe infection or high fever require immediate medical attention.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Laron Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK7038/',
    },
    {
      name: 'NORD: Laron Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/laron-syndrome/',
    },
  ],
  symptoms:
    '<p>Severe growth failure, doll-like face, prominent forehead, blue sclerae, small chin, high-pitched voice, fasting hypoglycemia, hyperlipidemia.</p>',
  diagnosis:
    '<p>Normal or elevated serum GH with markedly reduced IGF-1 and IGFBP-3; GHR gene mutation testing confirms diagnosis.</p>',
  treatment:
    '<p>Recombinant human IGF-1 (mecasermin) twice-daily subcutaneous injection; nutritional support and regular follow-up.</p>',
  prognosis:
    '<p>Early IGF-1 replacement significantly improves height and metabolism; untreated adult stature is extremely short; intelligence is usually normal.</p>',
  sourceName: 'GeneReviews: Laron Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7038/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5007,
    name: 'laron-syndrome-journey.png',
    url: '/images/diseases/laron-syndrome-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

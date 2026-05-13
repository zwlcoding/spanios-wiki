import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const enDiseaseSummaries: DiseaseDraft[] = [
  {
    ...entity(4, 'disease-21-hydroxylase-deficiency'),
    name: '21-Hydroxylase Deficiency',
    nameEn: '21-Hydroxylase Deficiency',
    alias: '21-OHD, Congenital Adrenal Hyperplasia (CAH)',
    icd10Code: 'E25.0',
    slug: '21-hydroxylase-deficiency',
    oneSentence:
      '21-hydroxylase deficiency is the most common form of congenital adrenal hyperplasia, often related to CYP21A2 gene variants, and can affect the balance of cortisol, aldosterone, and androgens.',
    plainName: 'A congenital adrenal hormone synthesis disorder',
    prevalence:
      'Classic form occurs in approximately 1 in 12,000–15,000 live births; reported incidence in China is about 1/20,000–1/10,000, though actual identification rates are affected by screening and healthcare access.',
    searchIntents: [
      '21-hydroxylase deficiency which doctor',
      'newborn screen high 17-OHP what next',
      'congenital adrenal hyperplasia salt-wasting crisis',
      '21-OHD CYP21A2 genetic testing',
      '21-hydroxylase deficiency fertility genetic counseling',
    ],
    sourceName:
      'National Rare Disease Diagnosis and Treatment Guidelines (2019): 21-Hydroxylase Deficiency',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/201902/073540e8f83b4a54a28684d23e2ae2f5/files/1732871139221_41526.pdf',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 302,
      name: '21-hydroxylase-deficiency-journey.png',
      url: '/images/diseases/21-hydroxylase-deficiency-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2001, 'disease-achondroplasia'),
    name: 'Achondroplasia',
    nameEn: 'Achondroplasia',
    alias:
      'ACH; short-limbed dwarfism; China Second Rare Disease Catalog item 1',
    slug: 'achondroplasia',
    oneSentence:
      'Achondroplasia is a skeletal growth disorder usually caused by an activating FGFR3 variant, leading to short-limbed short stature and a need for lifelong monitoring of breathing, spine, neurologic, hearing, and orthopedic complications.',
    plainName: 'A genetic bone growth condition with short limbs',
    prevalence:
      "Included in China's second rare disease catalog; international estimates are commonly about 1 in 15,000-40,000 newborns.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 355,
      name: 'achondroplasia-journey.png',
      url: '/images/diseases/achondroplasia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
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
  },
  {
    ...entity(2003, 'disease-acromegaly'),
    name: 'Acromegaly',
    nameEn: 'Acromegaly',
    alias:
      'Growth hormone excess; GH/IGF-1 excess; China Second Rare Disease Catalog item 3',
    slug: 'acromegaly',
    oneSentence:
      'Acromegaly is a chronic endocrine disorder caused by long-term excess growth hormone and IGF-1, usually from a pituitary adenoma, leading to gradual changes in hands, feet, facial features, soft tissue, and metabolic health.',
    plainName:
      'A hormone disorder that slowly enlarges hands, feet, and facial features in adults',
    prevalence:
      "Included in China's second rare disease catalog; NIDDK notes an estimated 3-14 diagnosed cases per 100,000 people.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 357,
      name: 'acromegaly-journey.png',
      url: '/images/diseases/acromegaly-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'endocrine'],
  },
  {
    ...entity(2004, 'disease-adult-onset-still-disease'),
    name: 'Adult-onset Still disease',
    nameEn: 'Adult-onset Still disease',
    alias:
      'AOSD; Adult Still disease; China Second Rare Disease Catalog item 4',
    slug: 'adult-onset-still-disease',
    oneSentence:
      'Adult-onset Still disease is a rare autoinflammatory condition often suggested by recurrent high fevers, joint pain or arthritis, a fever-linked salmon-colored rash, and markedly elevated ferritin.',
    plainName: 'A rare inflammatory disease with fever, rash, and joint pain',
    prevalence:
      "Included in China's second rare disease catalog; estimates vary by study, and the condition is considered rare.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 358,
      name: 'adult-onset-still-disease-journey.png',
      url: '/images/diseases/adult-onset-still-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2005, 'disease-alagille-syndrome'),
    name: 'Alagille syndrome',
    nameEn: 'Alagille syndrome',
    alias:
      'ALGS; arteriohepatic dysplasia; China Second Rare Disease Catalog item 5',
    slug: 'alagille-syndrome',
    oneSentence:
      'Alagille syndrome is a multisystem genetic condition, often related to JAG1 or NOTCH2 variants, that can affect bile ducts, liver, heart, blood vessels, eyes, spine, kidneys, and facial features.',
    plainName:
      'A genetic bile duct and multisystem condition often noticed in infancy',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 70,000 newborns, likely underestimated for mild cases.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 359,
      name: 'alagille-syndrome-journey.png',
      url: '/images/diseases/alagille-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(5, 'disease-albinism'),
    name: 'Albinism',
    nameEn: 'Albinism',
    alias:
      'Oculocutaneous albinism, OCA, Ocular albinism, OA, Congenital pigment deficiency',
    slug: 'albinism',
    oneSentence:
      'Albinism is a group of genetic disorders related to abnormal melanin synthesis or distribution, commonly affecting skin, hair, and eye pigmentation, and may be accompanied by vision development issues and ultraviolet sensitivity.',
    plainName:
      'A genetic condition with reduced pigment in skin, hair, and eyes',
    prevalence:
      'The prevalence of oculocutaneous albinism varies across populations, with common estimates of approximately 1 in 12,000–20,000; ocular albinism is relatively rarer.',
    sourceName: 'MedlinePlus Genetics: Oculocutaneous albinism',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/oculocutaneous-albinism/',
    categorySlug: 'dermatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 303,
      name: 'albinism-journey.png',
      url: '/images/diseases/albinism-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2006, 'disease-alpha-1-antitrypsin-deficiency'),
    name: 'Alpha-1-antitrypsin deficiency',
    nameEn: 'Alpha-1-antitrypsin deficiency',
    alias:
      'AATD; AAT deficiency; Alpha-1; inherited emphysema; China Second Rare Disease Catalog item 6',
    slug: 'alpha-1-antitrypsin-deficiency',
    oneSentence:
      'Alpha-1-antitrypsin deficiency is an inherited SERPINA1-related condition that can increase the risk of early COPD/emphysema and can also cause liver disease in infants, children, or adults.',
    plainName:
      'An inherited protein deficiency that can affect the lungs and liver',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 1,500-3,500 people of European ancestry, and it is less common in people of Asian descent.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 360,
      name: 'alpha-1-antitrypsin-deficiency-journey.png',
      url: '/images/diseases/alpha-1-antitrypsin-deficiency-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(6, 'disease-alport-syndrome'),
    name: 'Alport Syndrome',
    nameEn: 'Alport Syndrome',
    alias: 'Hereditary nephritis, Eye-ear-kidney syndrome, Familial nephritis',
    slug: 'alport-syndrome',
    oneSentence:
      'Alport syndrome is a hereditary kidney disease related to type IV collagen gene variants, often presenting with persistent hematuria as a clue and possibly accompanied by hearing and eye problems.',
    plainName:
      'A hereditary nephritis that may affect kidneys, hearing, and eyes',
    prevalence:
      'It is a rare hereditary kidney disease; true prevalence is affected by region, screening, and genetic testing availability.',
    searchIntents: [
      'Alport syndrome which doctor',
      'child persistent hematuria hearing loss',
      'hereditary nephritis COL4A5 genetic testing',
      'Alport syndrome proteinuria management',
      'Alport syndrome family screening',
    ],
    sourceName: 'GeneReviews: Alport Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1207/',
    categorySlug: 'renal-urologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 306,
      name: 'alport-syndrome-journey.png',
      url: '/images/diseases/alport-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(1, 'disease-als'),
    name: 'Amyotrophic Lateral Sclerosis',
    nameEn: 'Amyotrophic Lateral Sclerosis',
    alias: "Lou Gehrig's disease, ALS, Motor Neuron Disease",
    icd10Code: 'G12.2',
    slug: 'amyotrophic-lateral-sclerosis',
    oneSentence:
      'Amyotrophic Lateral Sclerosis is a progressive neurological disease affecting motor neurons, which can gradually cause muscle weakness, atrophy, and impaired swallowing and breathing.',
    plainName: 'Progressive Motor Neuron Disease',
    prevalence:
      'Estimated at approximately 2–5 per 100,000 people worldwide, though prevalence varies by region, age structure, and reporting methods.',
    searchIntents: [
      'ALS early symptoms',
      'ALS which doctor to see',
      'muscle twitching weakness ALS',
      'motor neuron disease EMG testing',
      'ALS swallowing breathing risk',
    ],
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 310,
      name: 'amyotrophic-lateral-sclerosis-journey.png',
      url: '/images/diseases/amyotrophic-lateral-sclerosis-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(2007, 'disease-anca-associated-vasculitis'),
    name: 'ANCA-associated vasculitis',
    nameEn: 'ANCA-associated vasculitis',
    alias:
      'AAV; antineutrophil cytoplasmic antibody-associated vasculitis; GPA; MPA; EGPA; China Second Rare Disease Catalog item 7',
    slug: 'anca-associated-vasculitis',
    oneSentence:
      'ANCA-associated vasculitis is a group of rare autoimmune small-vessel vasculitides, including GPA, MPA, and EGPA, that can affect the sinuses, lungs, kidneys, skin, nerves, and other organs.',
    plainName:
      'An autoimmune blood vessel inflammation that can affect kidneys and lungs',
    prevalence:
      "Included in China's second rare disease catalog; the overall group is rare, with frequency varying by subtype and population.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 361,
      name: 'anca-associated-vasculitis-journey.png',
      url: '/images/diseases/anca-associated-vasculitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(7, 'disease-angelman-syndrome'),
    name: 'Angelman Syndrome',
    nameEn: 'Angelman Syndrome',
    alias: 'Angelman Syndrome',
    slug: 'angelman-syndrome',
    oneSentence:
      'Angelman syndrome is a genetic neurodevelopmental disorder that mainly affects neural development, commonly presenting with developmental delay, limited language ability, motor coordination difficulties, seizures, and sleep problems.',
    plainName:
      'A hereditary neurodevelopmental disorder mainly affecting development, language, and seizures',
    prevalence:
      'Estimated to occur in approximately 1 in 12,000–20,000 newborns, with variations across different sources and regions.',
    searchIntents: [
      'Angelman syndrome which doctor',
      'developmental delay no speech seizures',
      'Angelman syndrome UBE3A testing',
      'Angelman syndrome rehabilitation',
      'Angelman syndrome recurrence risk',
    ],
    sourceName: 'MedlinePlus Genetics: Angelman syndrome',
    sourceUrl: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 307,
      name: 'angelman-syndrome-journey.png',
      url: '/images/diseases/angelman-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(8, 'disease-arginase-deficiency'),
    name: 'Arginase Deficiency',
    nameEn: 'Arginase Deficiency',
    alias: 'ARG1 Deficiency, Hyperargininemia, Argininemia',
    slug: 'arginase-deficiency',
    oneSentence:
      'Arginase deficiency is a urea cycle-related inherited metabolic disorder, often presenting in childhood with gradually developing spasticity, growth stagnation or regression, seizures, and elevated arginine as key clues.',
    plainName:
      'An inherited metabolic disorder caused by abnormal arginine metabolism',
    prevalence:
      'This is an extremely rare condition with an estimated low prevalence, influenced by newborn screening coverage and diagnostic accessibility.',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 304,
      name: 'arginase-deficiency-journey.png',
      url: '/images/diseases/arginase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(9, 'disease-asphyxiating-thoracic-dystrophy-jeune-syndrome'),
    name: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
    nameEn: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
    alias:
      'Asphyxiating Thoracic Dystrophy, Jeune Syndrome, Short-rib Thoracic Dysplasia-related Conditions',
    slug: 'asphyxiating-thoracic-dystrophy-jeune-syndrome',
    oneSentence:
      'Jeune Syndrome is a genetic skeletal ciliopathy, often presenting with a narrow chest, short ribs, short limbs, and respiratory problems in infancy, with possible involvement of kidneys, liver, or retina.',
    plainName:
      'A genetic skeletal developmental disorder with respiratory risks due to a narrow chest',
    prevalence:
      'Estimated approximately 1 in 100,000-130,000 people, a rare genetic skeletal developmental abnormality.',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 305,
      name: 'asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
      url: '/images/diseases/asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(10, 'disease-atypical-hemolytic-uremic-syndrome'),
    name: 'Atypical Hemolytic Uremic Syndrome',
    nameEn: 'Atypical Hemolytic Uremic Syndrome',
    alias: 'aHUS, Atypical Hemolytic Uremic Syndrome, Complement-mediated HUS',
    slug: 'atypical-hemolytic-uremic-syndrome',
    oneSentence:
      'Atypical Hemolytic Uremic Syndrome (aHUS) is a group of rare diseases characterized by microvascular thrombosis, hemolytic anemia, low platelets, and kidney injury, often related to abnormal complement regulation.',
    plainName:
      'A blood and kidney emergency related to complement abnormalities',
    prevalence:
      'This is a rare disease. MedlinePlus estimates the annual incidence in the United States is about 1 in 500,000 people.',
    searchIntents: [
      'aHUS which doctor',
      'low platelets hemolysis kidney injury',
      'atypical HUS complement testing',
      'aHUS vs typical HUS',
      'aHUS recurrence genetic risk',
    ],
    categorySlug: 'renal-urologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 308,
      name: 'atypical-hemolytic-uremic-syndrome-journey.png',
      url: '/images/diseases/atypical-hemolytic-uremic-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(11, 'disease-autoimmune-encephalitis'),
    name: 'Autoimmune Encephalitis',
    nameEn: 'Autoimmune Encephalitis',
    alias: 'AE, Autoimmune Encephalitis',
    slug: 'autoimmune-encephalitis',
    oneSentence:
      'Autoimmune encephalitis is a group of brain inflammations caused when the immune system attacks brain tissue or structures related to nerve cells, which may cause changes in behavior and mental state, memory loss, seizures, altered consciousness, and movement abnormalities.',
    plainName:
      'Brain inflammation caused by the immune system mistakenly attacking the brain',
    prevalence:
      'A relatively uncommon but increasingly recognized neuroimmune disease; the exact prevalence varies depending on antibody testing and diagnostic capabilities.',
    searchIntents: [
      'autoimmune encephalitis early symptoms',
      'sudden psychiatric symptoms seizures memory loss',
      'autoimmune encephalitis neurology or psychiatry',
      'autoimmune encephalitis antibody testing',
      'autoimmune encephalitis recovery after treatment',
    ],
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 309,
      name: 'autoimmune-encephalitis-journey.png',
      url: '/images/diseases/autoimmune-encephalitis-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(12, 'disease-autoimmune-hypophysitis'),
    name: 'Autoimmune Hypophysitis',
    nameEn: 'Autoimmune Hypophysitis',
    alias: 'Lymphocytic hypophysitis, IgG4-related hypophysitis',
    slug: 'autoimmune-hypophysitis',
    oneSentence:
      'Autoimmune hypophysitis is a rare condition where immune inflammation affects the pituitary gland, which may cause headache, vision changes, diabetes insipidus, or multiple hormone deficiencies.',
    plainName:
      'A rare condition where immune inflammation affects pituitary function',
    prevalence:
      'Overall very rare, with widely varying estimates in published research; some types are more common in pregnant or postpartum women, and can also occur in other populations or in contexts related to immunotherapy.',
    sourceName: 'Japan Endocrine Society guideline',
    sourceUrl:
      'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 312,
      name: 'autoimmune-hypophysitis-journey.png',
      url: '/images/diseases/autoimmune-hypophysitis-journey.png',
    },
    tagSlugs: ['endocrine'],
  },
  {
    ...entity(
      13,
      'disease-autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    ),
    name: 'Autoimmune Insulin Receptopathy (Type B Insulin Resistance)',
    nameEn: 'Autoimmune Insulin Receptopathy (Type B Insulin Resistance)',
    alias:
      'Type B Insulin Resistance Syndrome, Type B Insulin Resistance, TBIR',
    slug: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    oneSentence:
      'Autoimmune insulin receptopathy is an extremely rare autoimmune disorder caused by autoantibodies against the insulin receptor. It can lead to severe insulin resistance, high blood sugar, and may also cause low blood sugar.',
    plainName:
      'A rare disease where immune antibodies interfere with insulin receptors',
    prevalence:
      'Extremely rare; the exact prevalence is unknown. Published literature mostly consists of case reports and case series. It is often associated with a background of autoimmune diseases such as systemic lupus erythematosus.',
    sourceName: 'Orphanet',
    sourceUrl: 'https://www.orpha.net/en/disease/detail/2298',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 311,
      name: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
      url: '/images/diseases/autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
    },
    tagSlugs: ['endocrine'],
  },
  {
    ...entity(2008, 'disease-bardet-biedl-syndrome'),
    name: 'Bardet-Biedl syndrome',
    nameEn: 'Bardet-Biedl syndrome',
    alias: 'BBS; ciliopathy; China Second Rare Disease Catalog item 8',
    slug: 'bardet-biedl-syndrome',
    oneSentence:
      'Bardet-Biedl syndrome is a rare inherited ciliopathy that can affect the retina, weight, kidneys, hands and feet, pubertal or reproductive development, learning, and several other body systems.',
    plainName:
      'An inherited childhood-onset condition with vision, weight, kidney, and multisystem needs',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 140,000-160,000 newborns in most of North America and Europe, with higher rates in some populations.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 362,
      name: 'bardet-biedl-syndrome-journey.png',
      url: '/images/diseases/bardet-biedl-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2009, 'disease-behcets-disease'),
    name: "Behçet's disease",
    nameEn: "Behçet's disease",
    alias:
      'Behcet syndrome; Adamantiades-Behcet disease; Old Silk Route disease; China Second Rare Disease Catalog item 9',
    slug: 'behcets-disease',
    oneSentence:
      "Behçet's disease is a recurrent systemic vasculitis often suggested by mouth ulcers, genital ulcers, skin lesions, and eye inflammation, and it can also affect joints, the gut, nervous system, and large blood vessels.",
    plainName:
      'Recurrent mouth ulcers with eye, skin, or blood vessel inflammation',
    prevalence:
      "Included in China's second rare disease catalog; it is more common in parts of the Mediterranean, Middle East, and Asia, and MedlinePlus Genetics notes it is generally fewer than 1 in 100,000 people in the United States.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 363,
      name: 'behcets-disease-journey.png',
      url: '/images/diseases/behcets-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(14, 'disease-beta-ketothiolase-deficiency'),
    name: 'Beta-Ketothiolase Deficiency',
    nameEn: 'Beta-Ketothiolase Deficiency',
    alias:
      '3-ketothiolase deficiency, Alpha-methylacetoacetic aciduria, T2 deficiency, Mitochondrial acetoacetyl-CoA thiolase deficiency',
    slug: 'beta-ketothiolase-deficiency',
    oneSentence:
      'Beta-ketothiolase deficiency is a rare genetic metabolic disorder that affects isoleucine and ketone body metabolism. Infections, fasting, or stress may trigger ketoacidosis.',
    plainName:
      'A genetic metabolic disorder prone to ketoacidosis during infections or fasting',
    prevalence:
      'Very rare, with few reported cases in published medical literature; newborn screening coverage and diagnostic capacity vary by region, affecting detection rates.',
    sourceName: 'MedlinePlus Genetics',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 313,
      name: 'beta-ketothiolase-deficiency-journey.png',
      url: '/images/diseases/beta-ketothiolase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(15, 'disease-biotinidase-deficiency'),
    name: 'Biotinidase Deficiency',
    nameEn: 'Biotinidase Deficiency',
    alias: 'BTD Deficiency, Late-onset Multiple Carboxylase Deficiency',
    slug: 'biotinidase-deficiency',
    oneSentence:
      'Biotinidase Deficiency is a genetic metabolic disorder that can be detected through newborn screening. Timely biotin supplementation can usually prevent many neurological, skin, and metabolic problems.',
    plainName:
      'An inherited condition where the body cannot properly recycle and use biotin.',
    prevalence:
      'It is a rare disease. Screening data varies widely across regions. Many countries and regions have already included it in newborn or genetic metabolic screening programs.',
    searchIntents: [
      'biotinidase deficiency newborn screen positive',
      'BTD deficiency which doctor',
      'low biotinidase activity follow-up test',
      'biotinidase deficiency seizures rash hair loss',
      'biotinidase deficiency can biotin be stopped',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 314,
      name: 'biotinidase-deficiency-journey.png',
      url: '/images/diseases/biotinidase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2010, 'disease-blue-rubber-bleb-nevus'),
    name: 'Blue rubber bleb nevus syndrome',
    nameEn: 'Blue rubber bleb nevus syndrome',
    alias:
      'BRBNS; Bean syndrome; Blue rubber bleb nevus; China Second Rare Disease Catalog item 10',
    slug: 'blue-rubber-bleb-nevus',
    oneSentence:
      'Blue rubber bleb nevus syndrome is a rare venous malformation syndrome that causes soft blue-purple skin lesions and gastrointestinal lesions that can lead to chronic bleeding and iron-deficiency anemia.',
    plainName:
      'Blue-purple soft venous malformations with possible intestinal bleeding risk',
    prevalence:
      "Included in China's second rare disease catalog; it is very rare, with much of the literature based on case reports and small series.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'dermatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 364,
      name: 'blue-rubber-bleb-nevus-journey.png',
      url: '/images/diseases/blue-rubber-bleb-nevus-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(17, 'disease-cardic-ion-channelopathies'),
    name: 'Cardiac Ion Channelopathies',
    nameEn: 'Cardiac Ion Channelopathies',
    alias:
      'Hereditary Arrhythmia Syndrome, Primary Electrical Disease of the Heart',
    slug: 'cardic-ion-channelopathies',
    oneSentence:
      "Cardiac ion channelopathies are a group of inherited or acquired arrhythmia disorders affecting the heart's electrical activity, which may cause syncope, arrhythmias, or sudden death risk even when cardiac structure appears normal.",
    plainName:
      'Rare arrhythmias related to abnormal cardiac electrical signal channels',
    prevalence:
      'Varies significantly across subtypes. Long QT syndrome, Brugada syndrome, and catecholaminergic polymorphic ventricular tachycardia each have distinct population distributions and diagnostic criteria.',
    sourceName: 'GeneReviews: Long QT Syndrome Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 316,
      name: 'cardic-ion-channelopathies-journey.png',
      url: '/images/diseases/cardic-ion-channelopathies-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(16, 'disease-carnitine-deficiency'),
    name: 'Primary Carnitine Deficiency',
    nameEn: 'Primary Carnitine Deficiency',
    alias:
      'PCD, Primary Carnitine Transporter Deficiency, Carnitine Uptake Defect, OCTN2 Deficiency',
    slug: 'carnitine-deficiency',
    oneSentence:
      "Primary Carnitine Deficiency is an inherited metabolic disorder linked to the SLC22A5 gene that can affect the body's ability to use fat for energy, potentially involving low blood sugar, liver, heart muscle, and skeletal muscle.",
    plainName:
      'An inherited metabolic condition where the body cannot transport and use carnitine properly',
    prevalence:
      "This is a rare condition. Newborn screening detection rates vary widely by region. Screening results can also be influenced by the mother's carnitine status and other factors, so follow-up testing is often needed to confirm.",
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 315,
      name: 'carnitine-deficiency-journey.png',
      url: '/images/diseases/carnitine-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(20, 'disease-castleman-disease'),
    name: 'Castleman Disease',
    nameEn: 'Castleman Disease',
    alias:
      'Giant lymph node hyperplasia, Angiofollicular lymph node hyperplasia',
    slug: 'castleman-disease',
    oneSentence:
      'Castleman disease is a group of rare lymph node overgrowth disorders that may appear as a single enlarged lymph node area or involve multiple lymph node areas along with fever, fatigue, anemia, or organ involvement.',
    plainName:
      'A rare blood/immune-related disease caused by abnormal lymph node overgrowth',
    prevalence:
      'Generally a rare disease overall. Different studies use varying definitions for unicentric, multicentric, and idiopathic multicentric types. Personal risk assessment requires combining pathology and subtype classification.',
    sourceName: 'NCI Dictionary: Castleman disease',
    sourceUrl:
      'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/castleman-disease',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 319,
      name: 'castleman-disease-journey.png',
      url: '/images/diseases/castleman-disease-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(2011, 'disease-cdkl5-deficiency-disorder'),
    name: 'CDKL5-deficiency disorder',
    nameEn: 'CDKL5-deficiency disorder',
    alias: 'CDKL5缺乏症; China Second Rare Disease Catalog item 11',
    slug: 'cdkl5-deficiency-disorder',
    oneSentence:
      "CDKL5-deficiency disorder is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: CDKL5-deficiency disorder',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(18, 'disease-charcot-marie-tooth-disease'),
    name: 'Charcot-Marie-Tooth Disease',
    nameEn: 'Charcot-Marie-Tooth Disease',
    alias:
      'CMT, hereditary motor and sensory neuropathy, hereditary peripheral neuropathy',
    slug: 'charcot-marie-tooth-disease',
    oneSentence:
      'Charcot-Marie-Tooth disease is a group of inherited peripheral nerve disorders that often present with gradual weakness in the feet and lower legs, foot drop, high arches, reduced sensation, or frequent tripping.',
    plainName:
      'An inherited nerve condition that affects the peripheral nerves in the hands and feet',
    prevalence:
      'CMT is considered one of the most common inherited peripheral nerve disorders, though statistics vary widely across countries and subtypes.',
    sourceName:
      'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 317,
      name: 'charcot-marie-tooth-disease-journey.png',
      url: '/images/diseases/charcot-marie-tooth-disease-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(2012, 'disease-choroideremia'),
    name: 'Choroideremia',
    nameEn: 'Choroideremia',
    alias: '无脉络膜症; China Second Rare Disease Catalog item 12',
    slug: 'choroideremia',
    oneSentence:
      "Choroideremia is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Choroideremia',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      2013,
      'disease-chronic-inflammatory-demyelinating-polyneuropathy',
    ),
    name: 'Chronic inflammatory demyelinating polyneuropathy',
    nameEn: 'Chronic inflammatory demyelinating polyneuropathy',
    alias:
      '慢性炎性脱髓鞘性多发性神经根神经病; China Second Rare Disease Catalog item 13',
    slug: 'chronic-inflammatory-demyelinating-polyneuropathy',
    oneSentence:
      "Chronic inflammatory demyelinating polyneuropathy is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Chronic inflammatory demyelinating polyneuropathy',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(19, 'disease-citrullinemia'),
    name: 'Citrullinemia',
    nameEn: 'Citrullinemia',
    alias:
      'CTLN1, Citrullinemia Type I, Citrullinemia Type II associated with citrin deficiency',
    slug: 'citrullinemia',
    oneSentence:
      'Citrullinemia is a group of inherited metabolic disorders that affect the urea cycle or related transport processes, which may cause elevated blood ammonia levels and lead to acute neurological symptoms in newborns, children, or adults.',
    plainName:
      'An inherited metabolic disorder where the body has difficulty processing protein metabolism waste, potentially causing elevated blood ammonia levels',
    prevalence:
      'Type I and Type II have different regional distributions. Type I belongs to urea cycle disorders, while Type II is associated with citrin deficiency and has been reported more frequently in East Asian populations.',
    sourceName: 'GeneReviews: Citrullinemia Type I',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 318,
      name: 'citrullinemia-journey.png',
      url: '/images/diseases/citrullinemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2014, 'disease-clear-cell-sarcoma-of-kidney'),
    name: 'Clear cell sarcoma of kidney',
    nameEn: 'Clear cell sarcoma of kidney',
    alias: '肾透明细胞肉瘤; China Second Rare Disease Catalog item 14',
    slug: 'clear-cell-sarcoma-of-kidney',
    oneSentence:
      "Clear cell sarcoma of kidney is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Clear cell sarcoma of kidney',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2015, 'disease-cold-agglutinin-disease'),
    name: 'Cold agglutinin disease',
    nameEn: 'Cold agglutinin disease',
    alias: '冷凝集素病; China Second Rare Disease Catalog item 15',
    slug: 'cold-agglutinin-disease',
    oneSentence:
      "Cold agglutinin disease is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Cold agglutinin disease',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(21, 'disease-congenital-adrenal-hypoplasia'),
    name: 'Congenital Adrenal Hypoplasia',
    nameEn: 'Congenital Adrenal Hypoplasia',
    alias:
      'X-linked Congenital Adrenal Hypoplasia, NR0B1-Related Adrenal Hypoplasia',
    slug: 'congenital-adrenal-hypoplasia',
    oneSentence:
      'Congenital adrenal hypoplasia is an inherited adrenal insufficiency disorder that can present in newborns or children with hypoglycemia, vomiting, dehydration, low blood pressure, skin darkening, or salt-wasting crisis.',
    plainName:
      'A rare genetic condition where underdevelopment of the adrenal glands leads to insufficient hormone production',
    prevalence:
      'Overall rare. The X-linked NR0B1-related type mainly affects males, though prevalence varies due to family variants and carrier females.',
    sourceName: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 320,
      name: 'congenital-adrenal-hypoplasia-journey.png',
      url: '/images/diseases/congenital-adrenal-hypoplasia-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2016, 'disease-congenital-biliary-atresia'),
    name: 'Congenital biliary atresia',
    nameEn: 'Congenital biliary atresia',
    alias: '先天性胆道闭锁; China Second Rare Disease Catalog item 16',
    slug: 'congenital-biliary-atresia',
    oneSentence:
      "Congenital biliary atresia is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Congenital biliary atresia',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2017, 'disease-congenital-factor-vii-deficiency'),
    name: 'Congenital factor VII deficiency',
    nameEn: 'Congenital factor VII deficiency',
    alias: '先天性凝血因子VII缺乏症; China Second Rare Disease Catalog item 17',
    slug: 'congenital-factor-vii-deficiency',
    oneSentence:
      "Congenital factor VII deficiency is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Congenital factor VII deficiency',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(22, 'disease-congenital-hyperinsulinemic-hypoglycemia'),
    name: 'Congenital Hyperinsulinemic Hypoglycemia',
    nameEn: 'Congenital Hyperinsulinemic Hypoglycemia',
    alias:
      'Congenital hyperinsulinism, Hereditary hyperinsulinemic hypoglycemia',
    slug: 'congenital-hyperinsulinemic-hypoglycemia',
    oneSentence:
      'Congenital hyperinsulinemic hypoglycemia is a group of inherited low blood sugar disorders where abnormal insulin regulation causes repeated low blood sugar in infants or children, which can seriously affect the brain when severe.',
    plainName:
      'A rare genetic condition where too much insulin causes repeated low blood sugar',
    prevalence:
      'Generally rare, severity ranges from short-term neonatal low blood sugar to persistent, treatment-resistant hypoglycemia.',
    sourceName: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 321,
      name: 'congenital-hyperinsulinemic-hypoglycemia-journey.png',
      url: '/images/diseases/congenital-hyperinsulinemic-hypoglycemia-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(23, 'disease-congenital-myasthenic-syndrome'),
    name: 'Congenital Myasthenic Syndrome',
    nameEn: 'Congenital Myasthenic Syndrome',
    alias: 'CMS, Congenital Neuromuscular Junction Disorder',
    slug: 'congenital-myasthenic-syndrome',
    oneSentence:
      'Congenital Myasthenic Syndrome is a group of inherited neuromuscular junction disorders, often presenting with fluctuating muscle weakness and fatigue starting from infancy, ptosis, and swallowing or breathing difficulties.',
    plainName:
      'Muscle weakness caused by a congenital abnormality in signal transmission between nerves and muscles',
    prevalence:
      'Generally rare, with multiple related genes and subtypes; different subtypes vary significantly in age of onset, severity, and treatment response.',
    sourceName: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 322,
      name: 'congenital-myasthenic-syndrome-journey.png',
      url: '/images/diseases/congenital-myasthenic-syndrome-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(
      24,
      'disease-congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    ),
    name: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    nameEn: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    alias:
      'Myotonia congenita, Thomsen disease, Becker disease, CLCN1-related myotonia',
    slug: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    oneSentence:
      'Congenital myotonia is an inherited skeletal muscle ion channel disorder that often appears in childhood with muscle stiffness, difficulty initiating movement, and a "warm-up" phenomenon where symptoms improve with repeated activity.',
    plainName:
      'A hereditary muscle condition characterized by slow muscle relaxation and pronounced stiffness at the start of activity',
    prevalence:
      'Generally rare worldwide. MedlinePlus estimates about 1 in 100,000 people are affected, with higher rates reported in some northern European regions.',
    sourceName: 'GeneReviews: Myotonia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 323,
      name: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
      url: '/images/diseases/congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(33, 'disease-congenital-scoliosis'),
    name: 'Congenital Scoliosis',
    nameEn: 'Congenital Scoliosis',
    alias:
      'Congenital Spinal Curvature, Congenital Vertebral Malformation, Congenital scoliosis',
    slug: 'congenital-scoliosis',
    oneSentence:
      'Congenital scoliosis is a structural spinal curve caused by abnormal vertebral formation or segmentation during embryonic development, which may gradually progress as a child grows.',
    plainName:
      'Curvature of the spine due to abnormal bone development before birth',
    prevalence:
      'Generally rare, with wide variation in severity; some children are identified at birth or during checkups, while others are recognized due to trunk asymmetry, screening for associated abnormalities, or imaging studies.',
    sourceName: 'Orphanet: Congenital scoliosis',
    sourceUrl: 'https://www.orpha.net/en/disease/detail/139',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 332,
      name: 'congenital-scoliosis-journey.png',
      url: '/images/diseases/congenital-scoliosis-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(34, 'disease-coronary-artery-ectasia'),
    name: 'Coronary Artery Ectasia',
    nameEn: 'Coronary Artery Ectasia',
    alias: 'Coronary Artery Ectasia, CAE, Coronary Dilation',
    slug: 'coronary-artery-ectasia',
    oneSentence:
      'Coronary artery ectasia is abnormal localized or diffuse dilation of the coronary arteries, which may be related to atherosclerosis, Kawasaki disease, vasculitis, or connective tissue disease.',
    plainName:
      'A condition where the coronary arteries that supply blood to the heart muscle become widened, and blood flow may slow down',
    prevalence:
      "It is not uncommon to be found incidentally during coronary angiography or coronary CTA, but as a disease in China's rare disease directory, evaluation needs to consider the cause, extent, and clinical risk.",
    sourceName: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 333,
      name: 'coronary-artery-ectasia-journey.png',
      url: '/images/diseases/coronary-artery-ectasia-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(
      2018,
      'disease-cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease',
    ),
    name: 'Cryopyrin-associated periodic syndrome/ NLRP3-associated systemic autoinflammatory disease',
    nameEn:
      'Cryopyrin-associated periodic syndrome/ NLRP3-associated systemic autoinflammatory disease',
    alias:
      '冷吡啉（冷炎素）相关周期性综合征/ NLRP3相关自身炎症性疾病; China Second Rare Disease Catalog item 18',
    slug: 'cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease',
    oneSentence:
      "Cryopyrin-associated periodic syndrome/ NLRP3-associated systemic autoinflammatory disease is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Cryopyrin-associated periodic syndrome/ NLRP3-associated systemic autoinflammatory disease',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      2019,
      'disease-cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    ),
    name: 'Cutaneous neuroendocrine carcinoma(Merkel cell carcinoma)',
    nameEn: 'Cutaneous neuroendocrine carcinoma(Merkel cell carcinoma)',
    alias:
      '皮肤神经内分泌癌（梅克尔细胞癌）; China Second Rare Disease Catalog item 19',
    slug: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    oneSentence:
      "Cutaneous neuroendocrine carcinoma(Merkel cell carcinoma) is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Cutaneous neuroendocrine carcinoma(Merkel cell carcinoma)',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2020, 'disease-cutaneous-t-cell-lymphomas'),
    name: 'Cutaneous T-cell lymphomas',
    nameEn: 'Cutaneous T-cell lymphomas',
    alias: '皮肤T细胞淋巴瘤; China Second Rare Disease Catalog item 20',
    slug: 'cutaneous-t-cell-lymphomas',
    oneSentence:
      "Cutaneous T-cell lymphomas are a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Cutaneous T-cell lymphomas',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2021, 'disease-cystinosis'),
    name: 'Cystinosis',
    nameEn: 'Cystinosis',
    alias: '胱氨酸贮积症; China Second Rare Disease Catalog item 21',
    slug: 'cystinosis',
    oneSentence:
      "Cystinosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Cystinosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2022, 'disease-dermatofibrosarcoma-protuberans'),
    name: 'Dermatofibrosarcoma protuberans',
    nameEn: 'Dermatofibrosarcoma protuberans',
    alias: '隆突性皮肤纤维肉瘤; China Second Rare Disease Catalog item 22',
    slug: 'dermatofibrosarcoma-protuberans',
    oneSentence:
      "Dermatofibrosarcoma protuberans is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Dermatofibrosarcoma protuberans',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(25, 'disease-diamond-blackfan-anemia'),
    name: 'Diamond-Blackfan Anemia',
    nameEn: 'Diamond-Blackfan Anemia',
    alias: 'Diamond-Blackfan anemia, DBA, Congenital Dyserythropoietic Anemia',
    slug: 'diamond-blackfan-anemia',
    oneSentence:
      'Diamond-Blackfan anemia is an inherited condition where the bone marrow cannot make enough red blood cells. It usually appears in infancy and may be accompanied by growth delay, birth defects, and increased cancer risk.',
    plainName:
      'A genetic form of anemia where the bone marrow cannot make enough red blood cells',
    prevalence:
      'MedlinePlus describes it affecting about 5 to 7 per million newborns, and GeneReviews also lists it as a rare inherited disorder of red blood cell production.',
    sourceName: 'GeneReviews: DBA Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 324,
      name: 'diamond-blackfan-anemia-journey.png',
      url: '/images/diseases/diamond-blackfan-anemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2023, 'disease-eosinophilic-gastroenteritis'),
    name: 'Eosinophilic gastroenteritis',
    nameEn: 'Eosinophilic gastroenteritis',
    alias: '嗜酸性粒细胞性胃肠炎; China Second Rare Disease Catalog item 23',
    slug: 'eosinophilic-gastroenteritis',
    oneSentence:
      "Eosinophilic gastroenteritis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Eosinophilic gastroenteritis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2024, 'disease-epithelioid-sarcoma'),
    name: 'Epithelioid sarcoma',
    nameEn: 'Epithelioid sarcoma',
    alias: '上皮样肉瘤; China Second Rare Disease Catalog item 24',
    slug: 'epithelioid-sarcoma',
    oneSentence:
      "Epithelioid sarcoma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Epithelioid sarcoma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(26, 'disease-erdheim-chester-disease'),
    name: 'Erdheim-Chester Disease',
    nameEn: 'Erdheim-Chester Disease',
    alias: 'ECD, Erdheim-Chester disease, non-Langerhans cell histiocytosis',
    slug: 'erdheim-chester-disease',
    oneSentence:
      'Erdheim-Chester Disease (ECD) is an extremely rare histiocytic neoplasm/histiocytosis that can affect long bones, perirenal tissue, cardiovascular system, lungs, orbits, brain, pituitary gland, and other sites.',
    plainName:
      'A rare blood and immune-related disease where abnormal histiocytes accumulate and infiltrate multiple organs',
    prevalence:
      'Global case numbers are very few, primarily affecting adults. The actual number of affected individuals may be underestimated due to misdiagnosis and missed diagnoses.',
    sourceName: 'GARD: Erdheim-Chester disease',
    sourceUrl:
      'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 325,
      name: 'erdheim-chester-disease-journey.png',
      url: '/images/diseases/erdheim-chester-disease-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(27, 'disease-fabry-disease'),
    name: 'Fabry Disease',
    nameEn: 'Fabry Disease',
    alias:
      'Fabry Disease, Anderson-Fabry Disease, Alpha-Galactosidase A Deficiency',
    slug: 'fabry-disease',
    oneSentence:
      'Fabry Disease is an X-linked lysosomal storage disorder that can affect the nervous system, skin, kidneys, heart, cerebral blood vessels, eyes, and gastrointestinal tract, often leading to delayed diagnosis due to symptoms spread across multiple systems.',
    plainName:
      'A genetic metabolic disorder where fatty substances gradually build up in multiple organs',
    prevalence:
      'The classic type is rare, while later-onset forms may be more common but are often missed; detection rates vary greatly depending on the population screened.',
    searchIntents: [
      'Fabry disease which doctor',
      'burning hands feet reduced sweating proteinuria',
      'Fabry disease GLA genetic testing',
      'Fabry disease heart thickening kidney disease',
      'can women have Fabry disease',
    ],
    sourceName: 'GeneReviews: Fabry Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 326,
      name: 'fabry-disease-journey.png',
      url: '/images/diseases/fabry-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2025, 'disease-facioscapulohumeral-muscular-dystrophy'),
    name: 'Facioscapulohumeral muscular dystrophy',
    nameEn: 'Facioscapulohumeral muscular dystrophy',
    alias: '面肩肱型肌营养不良症; China Second Rare Disease Catalog item 25',
    slug: 'facioscapulohumeral-muscular-dystrophy',
    oneSentence:
      "Facioscapulohumeral muscular dystrophy is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Facioscapulohumeral muscular dystrophy',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2027, 'disease-familial-adenomatous-polyposis'),
    name: 'Familial adenomatous polyposis',
    nameEn: 'Familial adenomatous polyposis',
    alias: '家族性腺瘤性息肉病; China Second Rare Disease Catalog item 27',
    slug: 'familial-adenomatous-polyposis',
    oneSentence:
      "Familial adenomatous polyposis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Familial adenomatous polyposis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2026, 'disease-familial-hemophagocytic-lymphohistiocytosis'),
    name: 'Familial hemophagocytic lymphohistiocytosis',
    nameEn: 'Familial hemophagocytic lymphohistiocytosis',
    alias:
      '家族性噬血细胞淋巴组织细胞增生症; China Second Rare Disease Catalog item 26',
    slug: 'familial-hemophagocytic-lymphohistiocytosis',
    oneSentence:
      "Familial hemophagocytic lymphohistiocytosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Familial hemophagocytic lymphohistiocytosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(28, 'disease-familial-mediterranean-fever'),
    name: 'Familial Mediterranean Fever',
    nameEn: 'Familial Mediterranean Fever',
    alias:
      'FMF, Recurrent Polyserositis, MEFV-Associated Autoinflammatory Disease',
    slug: 'familial-mediterranean-fever',
    oneSentence:
      'Familial Mediterranean Fever is a hereditary autoinflammatory disease marked by recurrent short fevers, often with abdominal pain, chest pain, joint pain, rash, or risk of amyloidosis.',
    plainName:
      'A hereditary autoinflammatory condition with recurrent fevers and polyserositis attacks',
    prevalence:
      'More common in Mediterranean and related populations, including some Jewish, Armenian, Arab, Turkish, and North African groups; can also occur in other populations.',
    sourceName: 'GeneReviews: Familial Mediterranean Fever',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 327,
      name: 'familial-mediterranean-fever-journey.png',
      url: '/images/diseases/familial-mediterranean-fever-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
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
  },
  {
    ...entity(2028, 'disease-fibrodysplasia-ossificans-progressiva'),
    name: 'Fibrodysplasia ossificans progressiva',
    nameEn: 'Fibrodysplasia ossificans progressiva',
    alias:
      '进行性骨化性纤维发育不良; China Second Rare Disease Catalog item 28',
    slug: 'fibrodysplasia-ossificans-progressiva',
    oneSentence:
      "Fibrodysplasia ossificans progressiva is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Fibrodysplasia ossificans progressiva',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2029, 'disease-fragile-x-syndrome'),
    name: 'Fragile X syndrome',
    nameEn: 'Fragile X syndrome',
    alias: '脆性X综合征; China Second Rare Disease Catalog item 29',
    slug: 'fragile-x-syndrome',
    oneSentence:
      "Fragile X syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Fragile X syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(30, 'disease-galactosemia'),
    name: 'Galactosemia',
    nameEn: 'Galactosemia',
    alias:
      'Classic Galactosemia, GALT Deficiency, Galactose-1-Phosphate Uridyltransferase Deficiency',
    slug: 'galactosemia',
    oneSentence:
      'Galactosemia is a group of galactose metabolism disorders; the classic type can quickly cause feeding difficulties, jaundice, liver damage, infection, and bleeding risk in newborns after lactose intake.',
    plainName:
      'A genetic metabolic condition where the baby cannot properly process galactose from milk',
    prevalence:
      'MedlinePlus describes the classic type as affecting approximately 1 in 30,000 to 60,000 newborns, with other types being rarer.',
    sourceName: 'GeneReviews: Classic Galactosemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 329,
      name: 'galactosemia-journey.png',
      url: '/images/diseases/galactosemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2030, 'disease-gangliosidosis'),
    name: 'Gangliosidosis',
    nameEn: 'Gangliosidosis',
    alias: '神经节苷脂贮积症; China Second Rare Disease Catalog item 30',
    slug: 'gangliosidosis',
    oneSentence:
      "Gangliosidosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Gangliosidosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2031, 'disease-gastroenteropancreatic-neuroendocrine-neoplasm'),
    name: 'Gastroenteropancreatic neuroendocrine neoplasm',
    nameEn: 'Gastroenteropancreatic neuroendocrine neoplasm',
    alias: '胃肠胰神经内分泌肿瘤; China Second Rare Disease Catalog item 31',
    slug: 'gastroenteropancreatic-neuroendocrine-neoplasm',
    oneSentence:
      "Gastroenteropancreatic neuroendocrine neoplasm is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Gastroenteropancreatic neuroendocrine neoplasm',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2032, 'disease-gastrointestinal-stromal-tumor'),
    name: 'Gastrointestinal stromal tumor',
    nameEn: 'Gastrointestinal stromal tumor',
    alias: '胃肠间质瘤; China Second Rare Disease Catalog item 32',
    slug: 'gastrointestinal-stromal-tumor',
    oneSentence:
      "Gastrointestinal stromal tumor is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Gastrointestinal stromal tumor',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
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
    sourceName: 'GeneReviews: Gaucher Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 330,
      name: 'gauchers-disease-journey.png',
      url: '/images/diseases/gauchers-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(32, 'disease-generalized-myasthenia-gravis'),
    name: 'Generalized Myasthenia Gravis',
    nameEn: 'Generalized Myasthenia Gravis',
    alias:
      'gMG, Generalized Myasthenia Gravis, Acquired Autoimmune Myasthenia Gravis',
    slug: 'generalized-myasthenia-gravis',
    oneSentence:
      'Generalized Myasthenia Gravis is an autoimmune disease affecting the connection between nerves and muscles, causing fluctuating weakness in muscles of the eyes, face, swallowing, speech, limbs, or breathing.',
    plainName:
      'An autoimmune muscle weakness that gets worse with activity and better with rest',
    prevalence:
      'A rare neurological immune disease that can occur at any age. Common onset groups include young women and older men.',
    sourceName: 'NINDS: Myasthenia Gravis',
    sourceUrl: 'https://www.ninds.nih.gov/node/733',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 331,
      name: 'generalized-myasthenia-gravis-journey.png',
      url: '/images/diseases/generalized-myasthenia-gravis-journey.png',
    },
    tagSlugs: ['neuromuscular'],
  },
  {
    ...entity(2033, 'disease-generalized-pustular-psoriasis'),
    name: 'Generalized pustular psoriasis',
    nameEn: 'Generalized pustular psoriasis',
    alias: '泛发性脓疱型银屑病; China Second Rare Disease Catalog item 33',
    slug: 'generalized-pustular-psoriasis',
    oneSentence:
      "Generalized pustular psoriasis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Generalized pustular psoriasis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2034, 'disease-genetic-hypoparathyroidism'),
    name: 'Genetic hypoparathyroidism',
    nameEn: 'Genetic hypoparathyroidism',
    alias:
      '遗传性甲状旁腺功能减退症; China Second Rare Disease Catalog item 34',
    slug: 'genetic-hypoparathyroidism',
    oneSentence:
      "Genetic hypoparathyroidism is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Genetic hypoparathyroidism',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2035, 'disease-giant-cell-arteritis'),
    name: 'Giant cell arteritis',
    nameEn: 'Giant cell arteritis',
    alias: '巨细胞动脉炎; China Second Rare Disease Catalog item 35',
    slug: 'giant-cell-arteritis',
    oneSentence:
      "Giant cell arteritis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Giant cell arteritis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2036, 'disease-giant-cell-tumor-of-bone'),
    name: 'Giant cell tumor of bone',
    nameEn: 'Giant cell tumor of bone',
    alias: '骨巨细胞瘤; China Second Rare Disease Catalog item 36',
    slug: 'giant-cell-tumor-of-bone',
    oneSentence:
      "Giant cell tumor of bone is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Giant cell tumor of bone',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(35, 'disease-gitelman-syndrome'),
    name: 'Gitelman Syndrome',
    nameEn: 'Gitelman Syndrome',
    alias: 'Gitelman Syndrome, Familial Hypokalemia Hypomagnesemia, GS',
    slug: 'gitelman-syndrome',
    oneSentence:
      'Gitelman Syndrome is an inherited salt-wasting kidney tubule disorder, often presenting with low potassium, low magnesium, metabolic alkalosis, low urinary calcium, and fatigue or muscle cramps.',
    plainName:
      'An inherited condition where the kidneys cannot retain certain salts and electrolytes, causing low potassium and low magnesium',
    prevalence:
      'MedlinePlus Genetics estimates about 1 in 40,000 people worldwide; symptoms vary widely, and many are diagnosed in adolescence or adulthood due to low potassium.',
    sourceName: 'MedlinePlus Genetics: Gitelman syndrome',
    sourceUrl: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 334,
      name: 'gitelman-syndrome-journey.png',
      url: '/images/diseases/gitelman-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2037, 'disease-glanzmann-thrombasthenia'),
    name: 'Glanzmann thrombasthenia',
    nameEn: 'Glanzmann thrombasthenia',
    alias: '血小板无力症; China Second Rare Disease Catalog item 37',
    slug: 'glanzmann-thrombasthenia',
    oneSentence:
      "Glanzmann thrombasthenia is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Glanzmann thrombasthenia',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2038, 'disease-glioblastoma'),
    name: 'Glioblastoma',
    nameEn: 'Glioblastoma',
    alias: '胶质母细胞瘤; China Second Rare Disease Catalog item 38',
    slug: 'glioblastoma',
    oneSentence:
      "Glioblastoma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Glioblastoma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(36, 'disease-glutaric-acidemia-type-i'),
    name: 'Glutaric Acidemia Type I',
    nameEn: 'Glutaric Acidemia Type I',
    alias:
      'GA-1, Glutaric aciduria type I, GCDH deficiency, Glutaric aciduria type 1',
    slug: 'glutaric-acidemia-type-i',
    oneSentence:
      'Glutaric acidemia type I is an organic acid metabolism disorder that can cause acute brain injury and movement problems in infants and young children after infections or fasting if not identified in time.',
    plainName:
      'A hereditary metabolic condition in which the body cannot properly break down certain amino acids, which may damage the basal ganglia.',
    prevalence:
      'Generally rare, with variation across regions and populations; many areas can find clues through newborn screening.',
    sourceName: 'GeneReviews: Glutaric Acidemia Type 1',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 335,
      name: 'glutaric-acidemia-type-i-journey.png',
      url: '/images/diseases/glutaric-acidemia-type-i-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(37, 'disease-glycogen-storage-disease-type-i-ii'),
    name: 'Glycogen Storage Disease (Type I, II)',
    nameEn: 'Glycogen Storage Disease (Type I, II)',
    alias: 'Glycogen Storage Disease Type I, GSD I, Pompe Disease, GSD II',
    slug: 'glycogen-storage-disease-type-i-ii',
    oneSentence:
      'Type I and Type II glycogen storage disease are both inherited metabolic conditions affecting how the body processes glycogen, but Type I mainly impacts blood sugar and liver/kidney metabolism, while Type II (Pompe disease) mainly affects heart muscle, skeletal muscles, and breathing muscles.',
    plainName:
      'A group of inherited metabolic disorders where the body has trouble processing glycogen; Type I and Type II require different medical approaches',
    prevalence:
      'Both are rare diseases. Estimated rates vary widely across countries and screening programs. Some regions have added these to newborn screening or high-risk screening.',
    sourceName: 'GeneReviews: Glycogen Storage Disease Type I',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 336,
      name: 'glycogen-storage-disease-type-i-ii-journey.png',
      url: '/images/diseases/glycogen-storage-disease-type-i-ii-journey.png',
    },
    tagSlugs: ['genetic-counseling', 'neuromuscular'],
  },
  {
    ...entity(2039, 'disease-gorlin-syndrome'),
    name: 'Gorlin syndrome',
    nameEn: 'Gorlin syndrome',
    alias: '高林综合征; China Second Rare Disease Catalog item 39',
    slug: 'gorlin-syndrome',
    oneSentence:
      "Gorlin syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Gorlin syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(38, 'disease-hemophilia'),
    name: 'Hemophilia',
    nameEn: 'Hemophilia',
    alias:
      'Hemophilia A, Hemophilia B, Factor VIII Deficiency, Factor IX Deficiency',
    slug: 'hemophilia',
    oneSentence:
      'Hemophilia is a group of inherited bleeding disorders caused by missing or low clotting factors. Type A and Type B are the most common forms, and people may have prolonged bleeding after joint, muscle, surgery, or injury.',
    plainName:
      'An inherited condition where blood does not clot properly, leading to repeated bleeding',
    prevalence:
      'Hemophilia A is more common than Hemophilia B. Severity depends on clotting factor activity levels. Female carriers may also have bleeding symptoms.',
    searchIntents: [
      'hemophilia which doctor',
      'hemophilia A vs B difference',
      'repeated joint bleeding hemophilia',
      'hemophilia inhibitor testing',
      'female hemophilia carrier bleeding',
    ],
    sourceName: 'GeneReviews: Hemophilia A',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 337,
      name: 'hemophilia-journey.png',
      url: '/images/diseases/hemophilia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
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
  },
  {
    ...entity(40, 'disease-hereditary-angioedema-hae'),
    name: 'Hereditary Angioedema (HAE)',
    nameEn: 'Hereditary Angioedema (HAE)',
    alias:
      'HAE, hereditary angioneurotic edema, C1 inhibitor deficiency-related angioedema',
    slug: 'hereditary-angioedema-hae',
    oneSentence:
      'Hereditary angioedema is a condition involving recurrent deep swelling that can affect the skin, gastrointestinal tract, and upper airway; airway involvement may be life-threatening.',
    plainName: 'Recurrent sudden swelling, often without itching or hives',
    prevalence:
      'Overall rare, symptoms often begin in childhood or adolescence but may also be identified in adulthood.',
    sourceName: 'MedlinePlus Genetics: Hereditary angioedema',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 339,
      name: 'hereditary-angioedema-hae-journey.png',
      url: '/images/diseases/hereditary-angioedema-hae-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
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
    sourceName: 'NCBI Bookshelf StatPearls: Epidermolysis Bullosa',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK599531/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 340,
      name: 'hereditary-epidermolysis-bullosa-journey.png',
      url: '/images/diseases/hereditary-epidermolysis-bullosa-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(42, 'disease-hereditary-fructose-intolerance'),
    name: 'Hereditary Fructose Intolerance',
    nameEn: 'Hereditary Fructose Intolerance',
    alias:
      'HFI, ALDOB-Related Fructose Intolerance, Hereditary Fructose Metabolism Disorder',
    slug: 'hereditary-fructose-intolerance',
    oneSentence:
      'Hereditary Fructose Intolerance is an ALDOB-related fructose metabolism disorder. Ingestion of fructose, sucrose, or sorbitol may cause vomiting, low blood sugar, liver and kidney damage, among other risks.',
    plainName:
      'A genetic metabolic disorder that causes severe discomfort after eating foods or ingredients containing certain types of fructose',
    prevalence:
      'MedlinePlus Genetics estimates a global incidence of approximately 1/20,000-1/30,000 annually; mild cases or those who spontaneously avoid dietary triggers may be identified later.',
    sourceName: 'GeneReviews: Hereditary Fructose Intolerance',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 341,
      name: 'hereditary-fructose-intolerance-journey.png',
      url: '/images/diseases/hereditary-fructose-intolerance-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(43, 'disease-hereditary-hypomagnesemia'),
    name: 'Hereditary Hypomagnesemia',
    nameEn: 'Hereditary Hypomagnesemia',
    alias:
      'Familial hypomagnesemia, Primary hypomagnesemia, Hereditary magnesium metabolism disorder',
    slug: 'hereditary-hypomagnesemia',
    oneSentence:
      'Hereditary hypomagnesemia is a group of genetic disorders affecting magnesium absorption in the intestines or retention in the kidneys, which can lead to various presentations including low magnesium, low calcium, seizures, heart rhythm risks, or kidney calcification.',
    plainName:
      'A group of inherited disorders where the body has trouble absorbing or retaining magnesium, resulting in chronically low blood magnesium levels.',
    prevalence:
      'Overall rare with significant variation by genetic type; some present in infancy, while others are found in childhood or adulthood due to low magnesium, kidney calcification, or family screening.',
    sourceName:
      'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
    categorySlug: 'renal-urologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 342,
      name: 'hereditary-hypomagnesemia-journey.png',
      url: '/images/diseases/hereditary-hypomagnesemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(44, 'disease-cadasil'),
    name: 'CADASIL',
    nameEn: 'CADASIL',
    alias:
      'CADASIL、CADASIL (Cerebral Autosomal Dominant Arteriopathy With Subcortical Infarcts and Leukoencephalopathy)、NOTCH3-Related Cerebral Small Vessel Disease',
    slug: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil',
    oneSentence:
      'CADASIL is a NOTCH3-related hereditary small vessel disease of the brain, which can cause migraine with aura, recurrent lacunar strokes, mood changes, cognitive decline, and white matter changes.',
    plainName:
      'A hereditary condition where small blood vessels in the brain are prone to problems, causing repeated minor strokes and cognitive changes',
    prevalence:
      'Overall rare, but the NOTCH3-related phenotype spectrum is broad; some families present with typical features, while others have milder symptoms or are identified later.',
    sourceName: 'GeneReviews: CADASIL',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 343,
      name: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
      url: '/images/diseases/hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(45, 'disease-hereditary-spastic-paraplegia'),
    name: 'Hereditary Spastic Paraplegia',
    nameEn: 'Hereditary Spastic Paraplegia',
    alias:
      'HSP, Hereditary Spastic Paraplegia of Lower Limbs, Strumpell-Lorrain Syndrome',
    slug: 'hereditary-spastic-paraplegia',
    oneSentence:
      'Hereditary spastic paraplegia is a group of inherited neurological disorders whose core features are spasticity, stiffness, and walking difficulty affecting both legs.',
    plainName:
      'A group of inherited nerve disorders where the legs become increasingly stiff and easy to trip over',
    prevalence:
      'Generally rare. Many genes are involved. Age of onset can range from childhood to adulthood, and progression speed varies widely.',
    sourceName:
      'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 344,
      name: 'hereditary-spastic-paraplegia-journey.png',
      url: '/images/diseases/hereditary-spastic-paraplegia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2040, 'disease-hidradenitis-suppurativa'),
    name: 'Hidradenitis suppurativa',
    nameEn: 'Hidradenitis suppurativa',
    alias: '化脓性汗腺炎; China Second Rare Disease Catalog item 40',
    slug: 'hidradenitis-suppurativa',
    oneSentence:
      "Hidradenitis suppurativa is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Hidradenitis suppurativa',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'dermatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(46, 'disease-holocarboxylase-synthetase-deficiency'),
    name: 'Holocarboxylase Synthetase Deficiency',
    nameEn: 'Holocarboxylase Synthetase Deficiency',
    alias:
      'HLCS Deficiency, Early-Onset Multiple Carboxylase Deficiency, Biotin-Responsive Multiple Carboxylase Deficiency',
    slug: 'holocarboxylase-synthetase-deficiency',
    oneSentence:
      'Holocarboxylase Synthetase Deficiency is a genetic metabolic disorder affecting biotin utilization. In infants, it may present with feeding difficulties, rash, hair loss, breathing problems, sleepiness, acidosis, or seizures.',
    plainName:
      'A genetic disorder where the body cannot effectively use biotin, causing multiple metabolic enzymes to work abnormally',
    prevalence:
      'MedlinePlus Genetics mentions an estimated incidence of approximately 1 in 87,000 people; actual identification is influenced by newborn screening and access to metabolic testing.',
    sourceName: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 345,
      name: 'holocarboxylase-synthetase-deficiency-journey.png',
      url: '/images/diseases/holocarboxylase-synthetase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(47, 'disease-homocysteinemia'),
    name: 'Homocysteinemia',
    nameEn: 'Homocysteinemia',
    slug: 'homocysteinemia',
    oneSentence:
      'Homocysteinemia is a group of inherited metabolic disorders in which amino acid metabolism abnormalities cause homocysteine to build up in the blood. Typical features include eye abnormalities, bone problems, intellectual disability, and increased risk of blood clots.',
    plainName: 'Homocysteinemia (Cystathionine Beta-Synthase Deficiency)',
    prevalence:
      'The classic form (cystathionine beta-synthase deficiency) has a global prevalence of approximately 1/200,000 to 1/350,000, with considerable variation by region.',
    sourceName:
      'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 346,
      name: 'homocysteinemia-journey.png',
      url: '/images/diseases/homocysteinemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(48, 'disease-homozygous-hypercholesterolemia'),
    name: 'Homozygous Familial Hypercholesterolemia',
    nameEn: 'Homozygous Familial Hypercholesterolemia',
    slug: 'homozygous-hypercholesterolemia',
    oneSentence:
      'Homozygous familial hypercholesterolemia is a serious inherited lipid metabolism disorder where patients have extremely high LDL-C levels, and can develop skin xanthomas and early-onset atherosclerosis even in childhood.',
    plainName: 'Homozygous Familial Hypercholesterolemia',
    prevalence:
      'Extremely rare, with a global prevalence of approximately 1 in 160,000 to 1 in 300,000, though it may be higher in certain populations due to founder effects.',
    sourceName: 'GeneReviews: Familial Hypercholesterolemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 347,
      name: 'homozygous-hypercholesterolemia-journey.png',
      url: '/images/diseases/homozygous-hypercholesterolemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(49, 'disease-huntington-disease'),
    name: 'Huntington Disease',
    nameEn: 'Huntington Disease',
    slug: 'huntington-disease',
    oneSentence:
      "Huntington's disease is a rare autosomal dominant neurodegenerative disease, characterized primarily by involuntary choreiform movements, psychiatric symptoms, and progressive cognitive decline.",
    plainName: "Huntington's Disease",
    prevalence:
      'Global prevalence is approximately 5–10 per 100,000; rates are higher in European and North American populations and lower in Asian populations.',
    sourceName: 'GeneReviews: Huntington Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1305/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 348,
      name: 'huntington-disease-journey.png',
      url: '/images/diseases/huntington-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2041, 'disease-hutchinson-gilford-progeria-syndrome'),
    name: 'Hutchinson-Gilford progeria syndrome',
    nameEn: 'Hutchinson-Gilford progeria syndrome',
    alias: '早老症; China Second Rare Disease Catalog item 41',
    slug: 'hutchinson-gilford-progeria-syndrome',
    oneSentence:
      "Hutchinson-Gilford progeria syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Hutchinson-Gilford progeria syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      50,
      'disease-hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    ),
    name: 'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    nameEn: 'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    alias:
      'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome, Ornithine Transporter Deficiency',
    slug: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    oneSentence:
      'HHH Syndrome is a rare autosomal recessive inherited disorder caused by mutations in the SLC25A15 gene, which leads to impaired mitochondrial ornithine transport, resulting in elevated blood ammonia, ornithine, and homocitrulline, affecting the nervous system and liver.',
    plainName: 'HHH Syndrome',
    prevalence:
      'Extremely rare, with fewer than 100 cases reported worldwide, making it one of the rarest types of urea cycle disorders',
    sourceName:
      'GeneReviews: Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK97260/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 349,
      name: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
      url: '/images/diseases/hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(51, 'disease-hyperphenylalaninemia'),
    name: 'Hyperphenylalaninemia',
    nameEn: 'Hyperphenylalaninemia',
    alias:
      'HPA, Hyperphenylalaninemia Syndrome, Tetrahydrobiopterin Deficiency, Phenylalanine Hydroxylase Deficiency',
    slug: 'hyperphenylalaninemia',
    oneSentence:
      'Hyperphenylalaninemia (HPA) is a group of common inherited amino acid metabolic disorders caused by deficiency of phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4), leading to elevated blood phenylalanine. This includes phenylketonuria (PKU) and other phenotypes.',
    plainName: 'Hyperphenylalaninemia',
    prevalence:
      'Incidence in Chinese newborns 1985-2011: approximately 1 in 10,397; varies widely across global regions',
    sourceName: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 350,
      name: 'hyperphenylalaninemia-journey.png',
      url: '/images/diseases/hyperphenylalaninemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(52, 'disease-hypophosphatasia'),
    name: 'Hypophosphatasia',
    nameEn: 'Hypophosphatasia',
    alias: 'Hypophosphatasia, HPP, Hereditary Hypophosphatasia',
    slug: 'hypophosphatasia',
    oneSentence:
      'Hypophosphatasia is a rare single-gene inherited disorder caused by ALPL gene mutations that reduce alkaline phosphatase activity, leading to impaired bone and tooth mineralization. It was included in the first national Rare Disease Catalog in 2018.',
    plainName: 'Hypophosphatasia',
    prevalence:
      'Severe form incidence is approximately 1/100,000; milder forms have higher incidence; classified as a rare disease in China',
    sourceName: 'GeneReviews: Hypophosphatasia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 351,
      name: 'hypophosphatasia-journey.png',
      url: '/images/diseases/hypophosphatasia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
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
  },
  {
    ...entity(54, 'disease-idiopathic-cardiomyopathy'),
    name: 'Idiopathic Cardiomyopathy',
    nameEn: 'Idiopathic Cardiomyopathy',
    alias:
      'Idiopathic Dilated Cardiomyopathy (IDC), Familial Dilated Cardiomyopathy (FDCM), Arrhythmogenic Right Ventricular Dysplasia/Cardiomyopathy (ARVC), Left Ventricular Noncompaction (LVNC), Hereditary Transthyretin-Related Amyloidosis (hATTR)',
    slug: 'idiopathic-cardiomyopathy',
    oneSentence:
      'Idiopathic cardiomyopathy is a group of myocardial diseases diagnosed after excluding clearly identifiable secondary causes, which may present with heart failure, arrhythmias, conduction abnormalities, or sudden death risk, and may have a genetic background.',
    plainName: 'Idiopathic Cardiomyopathy',
    prevalence:
      'The prevalence of idiopathic dilated cardiomyopathy (DCM) is approximately 36.5/100,000 (about 1/2,700), with about 20-35% being familial. The prevalence of arrhythmogenic right ventricular cardiomyopathy (ARVC) is approximately 1/2,000 to 1/1,000. The estimated prevalence of restrictive cardiomyopathy is approximately 1/100,000 to 9/100,000. The detection rate of left ventricular noncompaction by echocardiography is approximately 1.4/10,000.',
    sourceName: 'GeneReviews: Dilated Cardiomyopathy Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 353,
      name: 'idiopathic-cardiomyopathy-journey.png',
      url: '/images/diseases/idiopathic-cardiomyopathy-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(55, 'disease-idiopathic-hypogonadotropic-hypogonadism'),
    name: 'Idiopathic Hypogonadotropic Hypogonadism',
    nameEn: 'Idiopathic Hypogonadotropic Hypogonadism',
    alias:
      'IHH, Congenital Hypogonadotropic Hypogonadism (CHH), Kallmann Syndrome (KS, with olfactory abnormalities), Normosmic IHH (nIHH)',
    slug: 'idiopathic-hypogonadotropic-hypogonadism',
    oneSentence:
      'Idiopathic Hypogonadotropic Hypogonadism is a rare endocrine disorder caused by impaired function of hypothalamic gonadotropin-releasing hormone (GnRH) neurons, leading to insufficient secretion of gonadotropins and resulting in hypogonadism.',
    plainName: 'Idiopathic Hypogonadotropic Hypogonadism',
    prevalence:
      'The overall incidence of IHH is approximately 1~10/100,000. Kallmann syndrome (KS) accounts for about 40%~60% of all IHH patients, with a prevalence of approximately 1/48,000 in Finland, more common in males than females. Some KS patients may experience spontaneous remission (approximately 10%~20%).',
    sourceName:
      'GeneReviews: Isolated Gonadotropin-Releasing Hormone Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1334/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 354,
      name: 'idiopathic-hypogonadotropic-hypogonadism-journey.png',
      url: '/images/diseases/idiopathic-hypogonadotropic-hypogonadism-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2042, 'disease-inflammatory-myofibroblastic-tumor'),
    name: 'Inflammatory myofibroblastic tumor',
    nameEn: 'Inflammatory myofibroblastic tumor',
    alias: '炎性肌纤维母细胞瘤; China Second Rare Disease Catalog item 42',
    slug: 'inflammatory-myofibroblastic-tumor',
    oneSentence:
      "Inflammatory myofibroblastic tumor is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Inflammatory myofibroblastic tumor',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(3, 'disease-kallmann-syndrome'),
    name: 'Kallmann Syndrome',
    nameEn: 'Kallmann Syndrome',
    alias: 'Hypogonadotropic hypogonadism with anosmia',
    icd10Code: 'E23.0',
    slug: 'kallmann-syndrome',
    oneSentence:
      'Kallmann syndrome often presents as delayed puberty or underdeveloped secondary sex characteristics with reduced or absent smell, and diagnosis usually requires endocrine evaluation.',
    plainName: 'Delayed puberty with reduced sense of smell',
    prevalence:
      'Estimated at about 1 in 30,000 males and 1 in 120,000 females; actual diagnosis rates may vary by care pathway.',
    searchIntents: [
      'Kallmann syndrome which doctor to see',
      'delayed puberty poor sense of smell',
      'hypogonadotropic hypogonadism testing',
      'Kallmann syndrome fertility treatment',
      'Kallmann syndrome genetic testing',
    ],
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 301,
      name: 'kallmann-syndrome-journey.png',
      url: '/images/diseases/kallmann-syndrome-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2043, 'disease-leber-congenital-amaurosis'),
    name: 'Leber congenital amaurosis',
    nameEn: 'Leber congenital amaurosis',
    alias: 'Leber先天性黑矇; China Second Rare Disease Catalog item 43',
    slug: 'leber-congenital-amaurosis',
    oneSentence:
      "Leber congenital amaurosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Leber congenital amaurosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2044, 'disease-lennox-gastaut-syndrome'),
    name: 'Lennox-Gastaut syndrome',
    nameEn: 'Lennox-Gastaut syndrome',
    alias: 'Lennox-Gastaut 综合征; China Second Rare Disease Catalog item 44',
    slug: 'lennox-gastaut-syndrome',
    oneSentence:
      "Lennox-Gastaut syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Lennox-Gastaut syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2045, 'disease-limbal-stem-cell-deficiency'),
    name: 'Limbal stem cell deficiency',
    nameEn: 'Limbal stem cell deficiency',
    alias: '角膜缘干细胞缺乏症; China Second Rare Disease Catalog item 45',
    slug: 'limbal-stem-cell-deficiency',
    oneSentence:
      "Limbal stem cell deficiency is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Limbal stem cell deficiency',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2046, 'disease-malignant-hyperthermia'),
    name: 'Malignant hyperthermia',
    nameEn: 'Malignant hyperthermia',
    alias: '恶性高热; China Second Rare Disease Catalog item 46',
    slug: 'malignant-hyperthermia',
    oneSentence:
      "Malignant hyperthermia is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Malignant hyperthermia',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2047, 'disease-malignant-pleural-mesothelioma'),
    name: 'Malignant pleural mesothelioma',
    nameEn: 'Malignant pleural mesothelioma',
    alias: '恶性胸膜间皮瘤; China Second Rare Disease Catalog item 47',
    slug: 'malignant-pleural-mesothelioma',
    oneSentence:
      "Malignant pleural mesothelioma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Malignant pleural mesothelioma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2048, 'disease-melanoma'),
    name: 'Melanoma',
    nameEn: 'Melanoma',
    alias: '黑色素瘤; China Second Rare Disease Catalog item 48',
    slug: 'melanoma',
    oneSentence:
      "Melanoma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Melanoma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2049, 'disease-metachromatic-leukodystrophy'),
    name: 'Metachromatic leukodystrophy',
    nameEn: 'Metachromatic leukodystrophy',
    alias: '异染性脑白质营养不良; China Second Rare Disease Catalog item 49',
    slug: 'metachromatic-leukodystrophy',
    oneSentence:
      "Metachromatic leukodystrophy is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Metachromatic leukodystrophy',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2050, 'disease-monogenic-non-syndromic-obesity'),
    name: 'Monogenic non-syndromic obesity',
    nameEn: 'Monogenic non-syndromic obesity',
    alias: '单基因非综合征性肥胖; China Second Rare Disease Catalog item 50',
    slug: 'monogenic-non-syndromic-obesity',
    oneSentence:
      "Monogenic non-syndromic obesity is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Monogenic non-syndromic obesity',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2051, 'disease-multiple-endocrine-neoplasia'),
    name: 'Multiple endocrine neoplasia',
    nameEn: 'Multiple endocrine neoplasia',
    alias: '多发性内分泌腺瘤病; China Second Rare Disease Catalog item 51',
    slug: 'multiple-endocrine-neoplasia',
    oneSentence:
      "Multiple endocrine neoplasia is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Multiple endocrine neoplasia',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2052, 'disease-narcolepsy'),
    name: 'Narcolepsy',
    nameEn: 'Narcolepsy',
    alias: '发作性睡病; China Second Rare Disease Catalog item 52',
    slug: 'narcolepsy',
    oneSentence:
      "Narcolepsy is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Narcolepsy',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2053, 'disease-neuroblastoma'),
    name: 'Neuroblastoma',
    nameEn: 'Neuroblastoma',
    alias: '神经母细胞瘤; China Second Rare Disease Catalog item 53',
    slug: 'neuroblastoma',
    oneSentence:
      "Neuroblastoma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Neuroblastoma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2054, 'disease-neurofibromatosis'),
    name: 'Neurofibromatosis',
    nameEn: 'Neurofibromatosis',
    alias: '神经纤维瘤病; China Second Rare Disease Catalog item 54',
    slug: 'neurofibromatosis',
    oneSentence:
      "Neurofibromatosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Neurofibromatosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2055, 'disease-neuronal-ceroid-lipofuscinosis'),
    name: 'Neuronal ceroid lipofuscinosis',
    nameEn: 'Neuronal ceroid lipofuscinosis',
    alias: '神经元蜡样脂褐质沉积症; China Second Rare Disease Catalog item 55',
    slug: 'neuronal-ceroid-lipofuscinosis',
    oneSentence:
      "Neuronal ceroid lipofuscinosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Neuronal ceroid lipofuscinosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2056, 'disease-neurotrophic-keratitis'),
    name: 'Neurotrophic keratitis',
    nameEn: 'Neurotrophic keratitis',
    alias: '神经营养性角膜炎; China Second Rare Disease Catalog item 56',
    slug: 'neurotrophic-keratitis',
    oneSentence:
      "Neurotrophic keratitis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Neurotrophic keratitis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2057, 'disease-osteosarcoma'),
    name: 'Osteosarcoma',
    nameEn: 'Osteosarcoma',
    alias: '骨肉瘤; China Second Rare Disease Catalog item 57',
    slug: 'osteosarcoma',
    oneSentence:
      "Osteosarcoma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Osteosarcoma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2058, 'disease-pemphigus'),
    name: 'Pemphigus',
    nameEn: 'Pemphigus',
    alias: '天疱疮; China Second Rare Disease Catalog item 58',
    slug: 'pemphigus',
    oneSentence:
      "Pemphigus is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Pemphigus',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2059, 'disease-persistent-pulmonary-hypertension-of-the-newborn'),
    name: 'Persistent pulmonary hypertension of the newborn',
    nameEn: 'Persistent pulmonary hypertension of the newborn',
    alias: '新生儿持续肺动脉高压; China Second Rare Disease Catalog item 59',
    slug: 'persistent-pulmonary-hypertension-of-the-newborn',
    oneSentence:
      "Persistent pulmonary hypertension of the newborn is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Persistent pulmonary hypertension of the newborn',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2060, 'disease-pheochromocytoma'),
    name: 'Pheochromocytoma',
    nameEn: 'Pheochromocytoma',
    alias: '嗜铬细胞瘤; China Second Rare Disease Catalog item 60',
    slug: 'pheochromocytoma',
    oneSentence:
      "Pheochromocytoma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Pheochromocytoma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2061, 'disease-pik3ca-related-overgrowth-syndrome'),
    name: 'PIK3CA-related overgrowth syndrome',
    nameEn: 'PIK3CA-related overgrowth syndrome',
    alias:
      'PIK3CA相关过度生长综合征; China Second Rare Disease Catalog item 61',
    slug: 'pik3ca-related-overgrowth-syndrome',
    oneSentence:
      "PIK3CA-related overgrowth syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: PIK3CA-related overgrowth syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2062, 'disease-polycythaemia-vera'),
    name: 'Polycythaemia vera',
    nameEn: 'Polycythaemia vera',
    alias: '真性红细胞增多症; China Second Rare Disease Catalog item 62',
    slug: 'polycythaemia-vera',
    oneSentence:
      "Polycythaemia vera is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Polycythaemia vera',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2063, 'disease-primary-biliary-cholangitis'),
    name: 'Primary biliary cholangitis',
    nameEn: 'Primary biliary cholangitis',
    alias: '原发性胆汁性胆管炎; China Second Rare Disease Catalog item 63',
    slug: 'primary-biliary-cholangitis',
    oneSentence:
      "Primary biliary cholangitis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Primary biliary cholangitis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2064, 'disease-primary-growth-hormone-deficiency'),
    name: 'Primary growth hormone deficiency',
    nameEn: 'Primary growth hormone deficiency',
    alias: '原发性生长激素缺乏症; China Second Rare Disease Catalog item 64',
    slug: 'primary-growth-hormone-deficiency',
    oneSentence:
      "Primary growth hormone deficiency is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Primary growth hormone deficiency',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2065, 'disease-primary-igf1-deficiency'),
    name: 'Primary IGF1 deficiency',
    nameEn: 'Primary IGF1 deficiency',
    alias:
      '原发性胰岛素样生长因子-1缺乏症; China Second Rare Disease Catalog item 65',
    slug: 'primary-igf1-deficiency',
    oneSentence:
      "Primary IGF1 deficiency is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Primary IGF1 deficiency',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2066, 'disease-primary-immunodeficiency'),
    name: 'Primary immunodeficiency',
    nameEn: 'Primary immunodeficiency',
    alias: '原发性免疫缺陷; China Second Rare Disease Catalog item 66',
    slug: 'primary-immunodeficiency',
    oneSentence:
      "Primary immunodeficiency is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Primary immunodeficiency',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2067, 'disease-primary-myelofibrosis'),
    name: 'Primary myelofibrosis',
    nameEn: 'Primary myelofibrosis',
    alias: '原发性骨髓纤维化; China Second Rare Disease Catalog item 67',
    slug: 'primary-myelofibrosis',
    oneSentence:
      "Primary myelofibrosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Primary myelofibrosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2068, 'disease-primary-sclerosing-cholangitis'),
    name: 'Primary sclerosing cholangitis',
    nameEn: 'Primary sclerosing cholangitis',
    alias: '原发性硬化性胆管炎; China Second Rare Disease Catalog item 68',
    slug: 'primary-sclerosing-cholangitis',
    oneSentence:
      "Primary sclerosing cholangitis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Primary sclerosing cholangitis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2069, 'disease-progressive-fibrosing-interstitial-lung-disease'),
    name: 'Progressive fibrosing interstitial lung disease',
    nameEn: 'Progressive fibrosing interstitial lung disease',
    alias:
      '进行性纤维化性间质性肺疾病; China Second Rare Disease Catalog item 69',
    slug: 'progressive-fibrosing-interstitial-lung-disease',
    oneSentence:
      "Progressive fibrosing interstitial lung disease is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Progressive fibrosing interstitial lung disease',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2070, 'disease-recurrent-pericarditis'),
    name: 'Recurrent pericarditis',
    nameEn: 'Recurrent pericarditis',
    alias: '复发性心包炎; China Second Rare Disease Catalog item 70',
    slug: 'recurrent-pericarditis',
    oneSentence:
      "Recurrent pericarditis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Recurrent pericarditis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2071, 'disease-retinopathy-of-prematurity'),
    name: 'Retinopathy of prematurity',
    nameEn: 'Retinopathy of prematurity',
    alias: '早产儿视网膜病; China Second Rare Disease Catalog item 71',
    slug: 'retinopathy-of-prematurity',
    oneSentence:
      "Retinopathy of prematurity is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Retinopathy of prematurity',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2072, 'disease-rett-syndrome'),
    name: 'Rett syndrome',
    nameEn: 'Rett syndrome',
    alias: 'Rett综合征; China Second Rare Disease Catalog item 72',
    slug: 'rett-syndrome',
    oneSentence:
      "Rett syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Rett syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2073, 'disease-short-bowel-syndrome'),
    name: 'Short bowel syndrome',
    nameEn: 'Short bowel syndrome',
    alias: '短肠综合征; China Second Rare Disease Catalog item 73',
    slug: 'short-bowel-syndrome',
    oneSentence:
      "Short bowel syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Short bowel syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2074, 'disease-systemic-juvenile-idiopathic-arthritis'),
    name: 'Systemic juvenile idiopathic arthritis',
    nameEn: 'Systemic juvenile idiopathic arthritis',
    alias: '全身型幼年特发性关节炎; China Second Rare Disease Catalog item 74',
    slug: 'systemic-juvenile-idiopathic-arthritis',
    oneSentence:
      "Systemic juvenile idiopathic arthritis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Systemic juvenile idiopathic arthritis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2075, 'disease-systemic-mastocytosis'),
    name: 'Systemic mastocytosis',
    nameEn: 'Systemic mastocytosis',
    alias: '系统性肥大细胞增多症; China Second Rare Disease Catalog item 75',
    slug: 'systemic-mastocytosis',
    oneSentence:
      "Systemic mastocytosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Systemic mastocytosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2076, 'disease-takayasu-arteritis'),
    name: 'Takayasu arteritis',
    nameEn: 'Takayasu arteritis',
    alias: '大动脉炎/多发性大动脉炎; China Second Rare Disease Catalog item 76',
    slug: 'takayasu-arteritis',
    oneSentence:
      "Takayasu arteritis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Takayasu arteritis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      2077,
      'disease-tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    ),
    name: 'Tenosynovial giant cell tumor / pigmented villonodular synovitis',
    nameEn: 'Tenosynovial giant cell tumor / pigmented villonodular synovitis',
    alias:
      '腱鞘巨细胞瘤/色素沉着绒毛结节性滑膜炎; China Second Rare Disease Catalog item 77',
    slug: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    oneSentence:
      "Tenosynovial giant cell tumor / pigmented villonodular synovitis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Tenosynovial giant cell tumor / pigmented villonodular synovitis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2078, 'disease-thalassemia-major'),
    name: 'Thalassemia major',
    nameEn: 'Thalassemia major',
    alias: '地中海贫血（重型）; China Second Rare Disease Catalog item 78',
    slug: 'thalassemia-major',
    oneSentence:
      "Thalassemia major is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Thalassemia major',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2079, 'disease-thrombotic-thrombocytopenic-purpura'),
    name: 'Thrombotic thrombocytopenic purpura',
    nameEn: 'Thrombotic thrombocytopenic purpura',
    alias: '血栓性血小板减少性紫癜; China Second Rare Disease Catalog item 79',
    slug: 'thrombotic-thrombocytopenic-purpura',
    oneSentence:
      "Thrombotic thrombocytopenic purpura is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Thrombotic thrombocytopenic purpura',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2080, 'disease-transthyretin-amyloidosis'),
    name: 'Transthyretin amyloidosis',
    nameEn: 'Transthyretin amyloidosis',
    alias:
      '转甲状腺素蛋白淀粉样变性; China Second Rare Disease Catalog item 80',
    slug: 'transthyretin-amyloidosis',
    oneSentence:
      "Transthyretin amyloidosis is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Transthyretin amyloidosis',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2082, 'disease-tumor-induced-osteomalacia'),
    name: 'Tumor-induced osteomalacia',
    nameEn: 'Tumor-induced osteomalacia',
    alias: '肿瘤相关骨软化症; China Second Rare Disease Catalog item 82',
    slug: 'tumor-induced-osteomalacia',
    oneSentence:
      "Tumor-induced osteomalacia is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Tumor-induced osteomalacia',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      2081,
      'disease-tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    ),
    name: 'Tumor necrosis factor receptor associated periodic syndrome',
    nameEn: 'Tumor necrosis factor receptor associated periodic syndrome',
    alias:
      '肿瘤坏死因子受体相关周期性综合征; China Second Rare Disease Catalog item 81',
    slug: 'tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    oneSentence:
      "Tumor necrosis factor receptor associated periodic syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Tumor necrosis factor receptor associated periodic syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2083, 'disease-von-hippel-lindau-syndrome'),
    name: 'Von Hippel-Lindau syndrome',
    nameEn: 'Von Hippel-Lindau syndrome',
    alias: 'Von Hippel-Lindau综合征; China Second Rare Disease Catalog item 83',
    slug: 'von-hippel-lindau-syndrome',
    oneSentence:
      "Von Hippel-Lindau syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Von Hippel-Lindau syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2084, 'disease-von-willebrand-disease-type 3'),
    name: 'Von Willebrand disease type 3',
    nameEn: 'Von Willebrand disease type 3',
    alias: '血管性血友病Ⅲ型; China Second Rare Disease Catalog item 84',
    slug: 'von-willebrand-disease-type 3',
    oneSentence:
      "Von Willebrand disease type 3 is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Von Willebrand disease type 3',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      2085,
      'disease-waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    ),
    name: 'Waldenström macroglobulinemia / lymphoplasmacytic lymphoma',
    nameEn: 'Waldenström macroglobulinemia / lymphoplasmacytic lymphoma',
    alias:
      '华氏巨球蛋白血症/淋巴浆细胞淋巴瘤; China Second Rare Disease Catalog item 85',
    slug: 'waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    oneSentence:
      "Waldenström macroglobulinemia / lymphoplasmacytic lymphoma is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Waldenström macroglobulinemia / lymphoplasmacytic lymphoma',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2086, 'disease-west-syndrome-infantile-spasms-syndrome'),
    name: 'West syndrome / infantile spasms syndrome',
    nameEn: 'West syndrome / infantile spasms syndrome',
    alias:
      'West综合征/婴儿痉挛综合征; China Second Rare Disease Catalog item 86',
    slug: 'west-syndrome-infantile-spasms-syndrome',
    oneSentence:
      "West syndrome / infantile spasms syndrome is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: West syndrome / infantile spasms syndrome',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  },
];

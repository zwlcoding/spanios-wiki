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
    alias:
      'CDD, CDKL5-related developmental and epileptic encephalopathy, early infantile epileptic encephalopathy 2, China Second Rare Disease Catalog item 11',
    slug: 'cdkl5-deficiency-disorder',
    oneSentence:
      'CDKL5-deficiency disorder is a rare X-linked dominant neurodevelopmental condition in which seizures often begin in early infancy and are followed by significant developmental delay.',
    plainName:
      'A genetic neurodevelopmental condition with early infant seizures and developmental challenges',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates an incidence of about 1 in 40,000 to 60,000 newborns, with about 90% of diagnosed people being girls.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 365,
      name: 'cdkl5-deficiency-disorder-journey.png',
      url: '/images/diseases/cdkl5-deficiency-disorder-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
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
    alias:
      'CHM-related chorioretinal degeneration, progressive tapetochoroidal dystrophy, China Second Rare Disease Catalog item 12',
    slug: 'choroideremia',
    oneSentence:
      'Choroideremia is a rare X-linked inherited eye disease caused by CHM gene variants, usually starting with night blindness and gradually narrowing the visual field before central vision is affected later.',
    plainName:
      'An inherited retinal disease that often starts with night blindness and tunnel vision',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates a prevalence of about 1 in 50,000 to 100,000 people, and it may be underdiagnosed because it resembles other retinal disorders.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 366,
      name: 'choroideremia-journey.png',
      url: '/images/diseases/choroideremia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(
      2013,
      'disease-chronic-inflammatory-demyelinating-polyneuropathy',
    ),
    name: 'Chronic inflammatory demyelinating polyneuropathy',
    nameEn: 'Chronic inflammatory demyelinating polyneuropathy',
    alias:
      'CIDP, chronic inflammatory demyelinating polyradiculoneuropathy, China Second Rare Disease Catalog item 13',
    slug: 'chronic-inflammatory-demyelinating-polyneuropathy',
    oneSentence:
      'Chronic inflammatory demyelinating polyneuropathy is an immune-mediated peripheral nerve disorder that often causes weakness, numbness, imbalance, and reduced reflexes that progress or relapse over more than 8 weeks.',
    plainName:
      'An immune nerve condition that can cause progressive weakness and numbness in the arms and legs',
    prevalence:
      "Included in China's second rare disease catalog; estimates vary, and Cleveland Clinic cites about 0.8 to 8.9 new U.S. cases per 100,000 people each year.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 367,
      name: 'chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
      url: '/images/diseases/chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'neuromuscular'],
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
    alias:
      'CCSK, pediatric clear cell sarcoma of the kidney, China Second Rare Disease Catalog item 14',
    slug: 'clear-cell-sarcoma-of-kidney',
    oneSentence:
      'Clear cell sarcoma of kidney is a rare malignant kidney tumor of childhood, most often seen before age 3, that requires pathology confirmation and treatment by a pediatric oncology team.',
    plainName:
      'A rare childhood kidney cancer that needs expert pathology and pediatric oncology care',
    prevalence:
      "Included in China's second rare disease catalog; NCI PDQ states that it accounts for about 5% of primary renal malignancies in children and about 20 new U.S. cases per year, most often before age 3.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 368,
      name: 'clear-cell-sarcoma-of-kidney-journey.png',
      url: '/images/diseases/clear-cell-sarcoma-of-kidney-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2015, 'disease-cold-agglutinin-disease'),
    name: 'Cold agglutinin disease',
    nameEn: 'Cold agglutinin disease',
    alias:
      'CAD, cold antibody autoimmune hemolytic anemia, China Second Rare Disease Catalog item 15',
    slug: 'cold-agglutinin-disease',
    oneSentence:
      'Cold agglutinin disease is a rare autoimmune hemolytic anemia in which cold-triggered antibodies can lead to red blood cell destruction, anemia, jaundice, dark urine, and cold-induced color changes in the hands or feet.',
    plainName:
      'A rare anemia where cold exposure can trigger immune destruction of red blood cells',
    prevalence:
      "Included in China's second rare disease catalog; it is rare overall, more often reported in adults and older adults, and estimates vary by whether primary and secondary cases are counted together.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 369,
      name: 'cold-agglutinin-disease-journey.png',
      url: '/images/diseases/cold-agglutinin-disease-journey.png',
    },
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
    alias:
      'Biliary atresia, Kasai-related cholestatic liver disease, China Second Rare Disease Catalog item 16',
    slug: 'congenital-biliary-atresia',
    oneSentence:
      'Congenital biliary atresia is a serious infant liver and bile duct disease in which bile cannot drain normally, leading to persistent jaundice, pale stools, dark urine, and progressive liver injury.',
    plainName:
      'An infant bile duct disease that needs urgent liver and surgery evaluation',
    prevalence:
      "Included in China's second rare disease catalog; Mayo Clinic cites about 1 in 10,000 to 20,000 live births, with variation by region and screening practice.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 370,
      name: 'congenital-biliary-atresia-journey.png',
      url: '/images/diseases/congenital-biliary-atresia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2017, 'disease-congenital-factor-vii-deficiency'),
    name: 'Congenital factor VII deficiency',
    nameEn: 'Congenital factor VII deficiency',
    alias:
      'F7 deficiency, hypoproconvertinemia, Alexander disease, China Second Rare Disease Catalog item 17',
    slug: 'congenital-factor-vii-deficiency',
    oneSentence:
      'Congenital factor VII deficiency is a rare inherited bleeding disorder caused by F7 gene variants, ranging from no symptoms to nosebleeds, heavy menstrual bleeding, surgical bleeding, or rarely life-threatening bleeding.',
    plainName:
      'An inherited clotting factor condition that can make bleeding harder to stop',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 300,000 to 500,000 people and describes it as one of the more common rare clotting factor deficiencies.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 371,
      name: 'congenital-factor-vii-deficiency-journey.png',
      url: '/images/diseases/congenital-factor-vii-deficiency-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'coagulation-care',
      'genetic-counseling',
    ],
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
    name: 'Cryopyrin-associated periodic syndrome/NLRP3-associated systemic autoinflammatory disease',
    nameEn:
      'Cryopyrin-associated periodic syndrome/NLRP3-associated systemic autoinflammatory disease',
    alias:
      'CAPS, NLRP3-AID, FCAS, Muckle-Wells syndrome, NOMID/CINCA, China Second Rare Disease Catalog item 18',
    slug: 'cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease',
    oneSentence:
      'CAPS/NLRP3-associated systemic autoinflammatory disease is a rare NLRP3-related condition that often begins in infancy or childhood with recurrent fever, hive-like rash, joint pain, and inflammation affecting the eyes, ears, kidneys, or nervous system.',
    plainName:
      'A genetic autoinflammatory condition where the immune system repeatedly triggers inflammation',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates CAPS collectively at about 2 to 5 per million people, likely underdiagnosed.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 372,
      name: 'cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease-journey.png',
      url: '/images/diseases/cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(
      2019,
      'disease-cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    ),
    name: 'Cutaneous neuroendocrine carcinoma (Merkel cell carcinoma)',
    nameEn: 'Cutaneous neuroendocrine carcinoma (Merkel cell carcinoma)',
    alias:
      'Merkel cell carcinoma, MCC, primary cutaneous neuroendocrine carcinoma, China Second Rare Disease Catalog item 19',
    slug: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    oneSentence:
      'Cutaneous neuroendocrine carcinoma, also called Merkel cell carcinoma, is a rare but aggressive skin cancer that often appears as a fast-growing painless lump on sun-exposed skin and needs biopsy, staging, and multidisciplinary treatment.',
    plainName:
      'A fast-growing rare skin cancer that needs prompt biopsy and staging',
    prevalence:
      "Included in China's second rare disease catalog; NCI describes it as a very rare skin cancer, with sun exposure and weakened immunity increasing risk.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 373,
      name: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
      url: '/images/diseases/cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2020, 'disease-cutaneous-t-cell-lymphomas'),
    name: 'Cutaneous T-cell lymphomas',
    nameEn: 'Cutaneous T-cell lymphomas',
    alias:
      'CTCL, mycosis fungoides, Sézary syndrome, China Second Rare Disease Catalog item 20',
    slug: 'cutaneous-t-cell-lymphomas',
    oneSentence:
      'Cutaneous T-cell lymphomas are non-Hodgkin lymphomas that mainly involve the skin, most often mycosis fungoides or Sézary syndrome, and may present for years as persistent itchy patches, plaques, or tumors.',
    plainName: 'T-cell lymphomas that mainly affect the skin',
    prevalence:
      "Included in China's second rare disease catalog; they are rare overall, and estimates vary by subtype, stage, and registry definition.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 374,
      name: 'cutaneous-t-cell-lymphomas-journey.png',
      url: '/images/diseases/cutaneous-t-cell-lymphomas-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2021, 'disease-cystinosis'),
    name: 'Cystinosis',
    nameEn: 'Cystinosis',
    alias:
      'CTNS-related cystinosis, nephropathic cystinosis, ocular cystinosis, China Second Rare Disease Catalog item 21',
    slug: 'cystinosis',
    oneSentence:
      'Cystinosis is an inherited CTNS-related lysosomal storage disorder in which cystine builds up inside cells, mainly damaging the kidneys and eyes but also affecting the thyroid, muscles, pancreas, and reproductive system.',
    plainName:
      'A genetic metabolic disease where cystine builds up and first harms the kidneys and eyes',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 100,000 to 200,000 newborns worldwide, with regional variation.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 375,
      name: 'cystinosis-journey.png',
      url: '/images/diseases/cystinosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2022, 'disease-dermatofibrosarcoma-protuberans'),
    name: 'Dermatofibrosarcoma protuberans',
    nameEn: 'Dermatofibrosarcoma protuberans',
    alias: 'DFSP, China Second Rare Disease Catalog item 22',
    slug: 'dermatofibrosarcoma-protuberans',
    oneSentence:
      'Dermatofibrosarcoma protuberans is a rare, usually slow-growing but locally aggressive skin soft tissue tumor that can extend into surrounding tissue and recur if not fully removed.',
    plainName:
      'A rare deep skin soft tissue tumor that can come back locally if not completely removed',
    prevalence:
      "Included in China's second rare disease catalog; it is rare overall and makes up a very small share of skin tumors, with estimates varying by registry.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 376,
      name: 'dermatofibrosarcoma-protuberans-journey.png',
      url: '/images/diseases/dermatofibrosarcoma-protuberans-journey.png',
    },
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
    alias:
      'EoGE, non-esophageal eosinophilic gastrointestinal disease, China Second Rare Disease Catalog item 23',
    slug: 'eosinophilic-gastroenteritis',
    oneSentence:
      'Eosinophilic gastroenteritis is a rare chronic gastrointestinal inflammatory disorder in which excess eosinophils infiltrate the stomach, small intestine, colon, or multiple sites, causing recurrent abdominal pain, nausea, vomiting, diarrhea, malabsorption, or ascites.',
    plainName:
      'A digestive disease where eosinophils build up in the gut and cause repeated inflammation',
    prevalence:
      "Included in China's second rare disease catalog; it is rare overall and can affect children or adults, with true frequency affected by diagnostic criteria and biopsy practice.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 377,
      name: 'eosinophilic-gastroenteritis-journey.png',
      url: '/images/diseases/eosinophilic-gastroenteritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2024, 'disease-epithelioid-sarcoma'),
    name: 'Epithelioid sarcoma',
    nameEn: 'Epithelioid sarcoma',
    alias:
      'ES, distal-type epithelioid sarcoma, proximal-type epithelioid sarcoma, INI1/SMARCB1-deficient soft tissue sarcoma, China Second Rare Disease Catalog item 24',
    slug: 'epithelioid-sarcoma',
    oneSentence:
      'Epithelioid sarcoma is a rare aggressive soft tissue sarcoma, often affecting teenagers and young adults, that may begin as a painless nodule or non-healing sore on the hand, forearm, foot, knee, or lower leg.',
    plainName:
      'A rare soft tissue sarcoma that can start as a small firm lump or sore on the hands, feet, or limbs',
    prevalence:
      "Included in China's second rare disease catalog; it is a rare soft tissue sarcoma, most often seen in adolescents and young to middle-aged adults, with incidence varying by registry.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 378,
      name: 'epithelioid-sarcoma-journey.png',
      url: '/images/diseases/epithelioid-sarcoma-journey.png',
    },
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
    alias:
      'FSHD, facio-scapulo-humeral dystrophy, FSHD1, FSHD2, China Second Rare Disease Catalog item 25',
    slug: 'facioscapulohumeral-muscular-dystrophy',
    oneSentence:
      'Facioscapulohumeral muscular dystrophy is an inherited muscle disorder that mainly causes progressive weakness of the face, shoulder blades, and upper arms, and can also affect the trunk, legs, hearing, retina, or breathing.',
    plainName:
      'An inherited muscular dystrophy that first affects facial expression, shoulder blades, and arm lifting',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 20,000 people, with about 95% of cases being FSHD1.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 379,
      name: 'facioscapulohumeral-muscular-dystrophy-journey.png',
      url: '/images/diseases/facioscapulohumeral-muscular-dystrophy-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'neuromuscular',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2027, 'disease-familial-adenomatous-polyposis'),
    name: 'Familial adenomatous polyposis',
    nameEn: 'Familial adenomatous polyposis',
    alias:
      'FAP; APC-associated adenomatous polyposis; China Second Rare Disease Catalog item 27',
    slug: 'familial-adenomatous-polyposis',
    oneSentence:
      'Familial adenomatous polyposis is an APC-related inherited colorectal cancer predisposition syndrome in which many colon adenomas often begin in adolescence and require lifelong cancer-prevention care.',
    plainName:
      'An inherited condition that causes many colon polyps and needs lifelong cancer-prevention follow-up',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics describes an incidence of about 1 in 8,500 people and about 0.5% of all colorectal cancer.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 380,
      name: 'familial-adenomatous-polyposis-journey.png',
      url: '/images/diseases/familial-adenomatous-polyposis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
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
      'FOP, myositis ossificans progressiva, ACVR1-related heterotopic ossification, China Second Rare Disease Catalog item 28',
    slug: 'fibrodysplasia-ossificans-progressiva',
    oneSentence:
      'Fibrodysplasia ossificans progressiva is a rare ACVR1-related connective tissue disorder in which soft tissues gradually form extra bone after painful flare-ups, limiting movement over time.',
    plainName:
      'A genetic condition in which soft tissues gradually form a second skeleton',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics describes an estimated frequency of about 1 in 1 million people worldwide, with several hundred reported cases.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 382,
      name: 'fibrodysplasia-ossificans-progressiva-journey.png',
      url: '/images/diseases/fibrodysplasia-ossificans-progressiva-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2029, 'disease-fragile-x-syndrome'),
    name: 'Fragile X syndrome',
    nameEn: 'Fragile X syndrome',
    alias:
      'FXS, Martin-Bell syndrome, FMR1-related fragile X syndrome, China Second Rare Disease Catalog item 29',
    slug: 'fragile-x-syndrome',
    oneSentence:
      'Fragile X syndrome is an FMR1 CGG-repeat expansion disorder that can cause speech and cognitive delay, learning difficulties, attention and behavioral challenges, and autism-spectrum features.',
    plainName:
      'An FMR1-related genetic condition that affects development, learning, and behavior',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics describes a frequency of about 1 in 4,000 males and 1 in 8,000 females.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 383,
      name: 'fragile-x-syndrome-journey.png',
      url: '/images/diseases/fragile-x-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
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
    alias:
      'GM1 gangliosidosis, GM2 gangliosidosis, Tay-Sachs disease, Sandhoff disease, China Second Rare Disease Catalog item 30',
    slug: 'gangliosidosis',
    oneSentence:
      'Gangliosidosis refers to a group of autosomal recessive lysosomal storage disorders in which enzyme defects allow GM1 or GM2 gangliosides to build up, causing developmental regression, movement problems, seizures, and multisystem involvement.',
    plainName:
      'Inherited metabolic disorders where missing cleanup enzymes allow gangliosides to build up in the nervous system',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates GM1 gangliosidosis at about 1 in 100,000 to 200,000 newborns, while GM2 frequencies vary by population.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 384,
      name: 'gangliosidosis-journey.png',
      url: '/images/diseases/gangliosidosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2031, 'disease-gastroenteropancreatic-neuroendocrine-neoplasm'),
    name: 'Gastroenteropancreatic neuroendocrine neoplasm',
    nameEn: 'Gastroenteropancreatic neuroendocrine neoplasm',
    alias:
      'GEP-NEN, GEP-NET, GI or pancreatic neuroendocrine neoplasm, China Second Rare Disease Catalog item 31',
    slug: 'gastroenteropancreatic-neuroendocrine-neoplasm',
    oneSentence:
      'Gastroenteropancreatic neuroendocrine neoplasms are rare tumors from neuroendocrine cells in the digestive tract or pancreas; some grow slowly, while others secrete hormones that cause diarrhea, flushing, hypoglycemia, or ulcer symptoms.',
    plainName:
      'A rare digestive or pancreatic tumor that may grow slowly or produce hormone-related symptoms',
    prevalence:
      "Included in China's second rare disease catalog; it is uncommon overall, and frequency estimates vary by site, grade, and registry method.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 385,
      name: 'gastroenteropancreatic-neuroendocrine-neoplasm-journey.png',
      url: '/images/diseases/gastroenteropancreatic-neuroendocrine-neoplasm-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2032, 'disease-gastrointestinal-stromal-tumor'),
    name: 'Gastrointestinal stromal tumor',
    nameEn: 'Gastrointestinal stromal tumor',
    alias:
      'GIST, gastrointestinal stromal tumor, China Second Rare Disease Catalog item 32',
    slug: 'gastrointestinal-stromal-tumor',
    oneSentence:
      'Gastrointestinal stromal tumor is a rare tumor of the GI tract wall, often driven by KIT or PDGFRA variants, with treatment decisions guided by pathology, mutation type, size, and location.',
    plainName:
      'A rare tumor in the wall of the digestive tract that is often managed with surgery and targeted therapy',
    prevalence:
      "Included in China's second rare disease catalog; NCI PDQ describes GISTs as less than 1% of all GI tumors, though very small indolent tumors may be undercounted.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 386,
      name: 'gastrointestinal-stromal-tumor-journey.png',
      url: '/images/diseases/gastrointestinal-stromal-tumor-journey.png',
    },
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
    alias:
      'GPP, von Zumbusch pustular psoriasis, China Second Rare Disease Catalog item 33',
    slug: 'generalized-pustular-psoriasis',
    oneSentence:
      'Generalized pustular psoriasis is a rare but potentially severe systemic inflammatory skin disease that can cause sudden widespread painful red skin, sterile pustules, fever, dehydration, and organ-complication risk.',
    plainName:
      'A severe pustular form of psoriasis that can flare suddenly and needs urgent recognition',
    prevalence:
      "Included in China's second rare disease catalog; it is rare overall, and flare frequency and severity vary widely.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 387,
      name: 'generalized-pustular-psoriasis-journey.png',
      url: '/images/diseases/generalized-pustular-psoriasis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2034, 'disease-genetic-hypoparathyroidism'),
    name: 'Genetic hypoparathyroidism',
    nameEn: 'Genetic hypoparathyroidism',
    alias:
      'Inherited hypoparathyroidism, hypocalcemia with low PTH, China Second Rare Disease Catalog item 34',
    slug: 'genetic-hypoparathyroidism',
    oneSentence:
      'Genetic hypoparathyroidism is a group of inherited low-calcium disorders caused by abnormal parathyroid development, PTH secretion, or calcium-sensing pathways, leading to hypocalcemia, hyperphosphatemia, spasms, seizures, and kidney-risk monitoring needs.',
    plainName:
      'An inherited low-calcium condition caused by too little parathyroid hormone or related signaling',
    prevalence:
      "Included in China's second rare disease catalog; it is rare overall, with wide variation by genetic type and age at diagnosis.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 388,
      name: 'genetic-hypoparathyroidism-journey.png',
      url: '/images/diseases/genetic-hypoparathyroidism-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'genetic-counseling',
      'endocrine',
    ],
  },
  {
    ...entity(2035, 'disease-giant-cell-arteritis'),
    name: 'Giant cell arteritis',
    nameEn: 'Giant cell arteritis',
    alias:
      'GCA, temporal arteritis, large-vessel vasculitis, China Second Rare Disease Catalog item 35',
    slug: 'giant-cell-arteritis',
    oneSentence:
      'Giant cell arteritis is a medium- and large-vessel vasculitis mainly affecting people over 50, often causing new headache, scalp tenderness, jaw pain with chewing, and vision symptoms that can become permanent without urgent treatment.',
    plainName:
      'A vasculitis in older adults where new headache and vision symptoms are urgent warning signs',
    prevalence:
      "Included in China's second rare disease catalog; it mainly affects adults over age 50, with frequency varying by ancestry and region.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 389,
      name: 'giant-cell-arteritis-journey.png',
      url: '/images/diseases/giant-cell-arteritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2036, 'disease-giant-cell-tumor-of-bone'),
    name: 'Giant cell tumor of bone',
    nameEn: 'Giant cell tumor of bone',
    alias: 'GCTB, osteoclastoma, China Second Rare Disease Catalog item 36',
    slug: 'giant-cell-tumor-of-bone',
    oneSentence:
      'Giant cell tumor of bone is a rare primary bone tumor that is usually not cancer in the usual sense, but it can grow aggressively where it starts, damage bone, cause pain and swelling, and recur after treatment.',
    plainName:
      'A rare bone tumor near joints that can damage bone and come back locally',
    prevalence:
      "Included in China's second rare disease catalog; GARD lists it as a rare disease that usually begins in adulthood, with frequency varying by registry and diagnostic definition.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 390,
      name: 'giant-cell-tumor-of-bone-journey.png',
      url: '/images/diseases/giant-cell-tumor-of-bone-journey.png',
    },
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
    alias:
      'GT, Glanzmann disease, integrin alphaIIb beta3 deficiency, China Second Rare Disease Catalog item 37',
    slug: 'glanzmann-thrombasthenia',
    oneSentence:
      'Glanzmann thrombasthenia is an autosomal recessive platelet function disorder in which platelet counts may be normal but platelets cannot aggregate properly, causing recurrent nosebleeds, gum bleeding, bruising, heavy menstrual bleeding, or prolonged bleeding after procedures.',
    plainName:
      'An inherited bleeding disorder where platelet number may be normal but clotting function is weak',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 1 million people worldwide, with higher frequency in some communities.",
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
  },
  {
    ...entity(2038, 'disease-glioblastoma'),
    name: 'Glioblastoma',
    nameEn: 'Glioblastoma',
    alias:
      'GBM, adult diffuse glioma grade 4, China Second Rare Disease Catalog item 38',
    slug: 'glioblastoma',
    oneSentence:
      'Glioblastoma is an aggressive adult primary central nervous system tumor that may cause new or worsening headache, seizures, weakness, speech or vision changes, and needs coordinated care from neurosurgery and neuro-oncology teams.',
    plainName:
      'A fast-growing malignant brain glioma that needs multidisciplinary care',
    prevalence:
      "Included in China's second rare disease catalog; it is a rare central nervous system tumor, relatively common among adult malignant primary brain tumors but still uncommon in the general population.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 392,
      name: 'glioblastoma-journey.png',
      url: '/images/diseases/glioblastoma-journey.png',
    },
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
    alias:
      'Nevoid basal cell carcinoma syndrome, NBCCS, basal cell nevus syndrome, China Second Rare Disease Catalog item 39',
    slug: 'gorlin-syndrome',
    oneSentence:
      'Gorlin syndrome is an inherited tumor predisposition syndrome that can cause early or repeated basal cell carcinomas, jaw keratocysts, small pits on the palms or soles, and skeletal features, requiring long-term dermatology, oral/maxillofacial, and genetics follow-up.',
    plainName:
      'An inherited syndrome that raises the risk of basal cell cancers and jaw cysts',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 31,000 people, although mild cases and variable family expression affect recognition.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 393,
      name: 'gorlin-syndrome-journey.png',
      url: '/images/diseases/gorlin-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
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
    alias: 'HS, acne inversa, China Second Rare Disease Catalog item 40',
    slug: 'hidradenitis-suppurativa',
    oneSentence:
      'Hidradenitis suppurativa is a chronic, recurrent inflammatory skin disease that often causes painful nodules, abscesses, draining tunnels, and scarring in friction-prone areas such as the armpits, groin, buttocks, and under the breasts.',
    plainName:
      'A chronic inflammatory skin condition with painful recurring nodules and tunnels in friction areas',
    prevalence:
      "Included in China's second rare disease catalog; estimates vary widely, and underdiagnosis or misdiagnosis strongly affects statistics.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'dermatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 394,
      name: 'hidradenitis-suppurativa-journey.png',
      url: '/images/diseases/hidradenitis-suppurativa-journey.png',
    },
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
    alias:
      'HGPS, progeria, childhood progeria, China Second Rare Disease Catalog item 41',
    slug: 'hutchinson-gilford-progeria-syndrome',
    oneSentence:
      'Hutchinson-Gilford progeria syndrome is an extremely rare childhood premature-aging condition, usually caused by a new LMNA variant, with severe growth failure, loss of body fat, skin and hair changes, and high cardiovascular and stroke risk.',
    plainName:
      'A childhood premature-aging condition where cardiovascular monitoring is central',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics describes it as extremely rare, with most cases caused by new variants rather than inherited from a parent.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 395,
      name: 'hutchinson-gilford-progeria-syndrome-journey.png',
      url: '/images/diseases/hutchinson-gilford-progeria-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
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
    alias:
      'IMT, inflammatory pseudotumor-like tumor, China Second Rare Disease Catalog item 42',
    slug: 'inflammatory-myofibroblastic-tumor',
    oneSentence:
      'Inflammatory myofibroblastic tumor is a rare intermediate soft tissue tumor that can arise in the lung, abdomen, pelvis, bladder, head and neck, or other sites, and often needs pathology plus ALK and other molecular testing to distinguish it from inflammation, infection, and other tumors.',
    plainName:
      'A rare soft tissue tumor that can look like inflammation but needs tumor specialist review',
    prevalence:
      "Included in China's second rare disease catalog; GARD lists inflammatory myofibroblastic tumor as a rare disease that can affect children, adolescents, and adults.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 396,
      name: 'inflammatory-myofibroblastic-tumor-journey.png',
      url: '/images/diseases/inflammatory-myofibroblastic-tumor-journey.png',
    },
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
    alias:
      'LCA, early-onset severe retinal dystrophy, China Second Rare Disease Catalog item 43',
    slug: 'leber-congenital-amaurosis',
    oneSentence:
      'Leber congenital amaurosis is a group of inherited retinal diseases beginning in infancy or early childhood, causing severe visual impairment, nystagmus, light sensitivity, or night blindness and requiring inherited-retina specialist care.',
    plainName:
      'An inherited retinal disease where severe vision problems start very early in life',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics describes LCA as a rare condition accounting for a small share of retinal dystrophies.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 397,
      name: 'leber-congenital-amaurosis-journey.png',
      url: '/images/diseases/leber-congenital-amaurosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2044, 'disease-lennox-gastaut-syndrome'),
    name: 'Lennox-Gastaut syndrome',
    nameEn: 'Lennox-Gastaut syndrome',
    alias:
      'LGS, developmental and epileptic encephalopathy, China Second Rare Disease Catalog item 44',
    slug: 'lennox-gastaut-syndrome',
    oneSentence:
      'Lennox-Gastaut syndrome is a severe childhood-onset developmental and epileptic encephalopathy with multiple seizure types, drop attacks, cognitive and behavioral difficulties, and seizures that are often hard to fully control.',
    plainName:
      'A childhood epilepsy syndrome with multiple seizure types and developmental impact',
    prevalence:
      "Included in China's second rare disease catalog; Epilepsy Foundation describes it as an uncommon but severe childhood epilepsy syndrome.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 398,
      name: 'lennox-gastaut-syndrome-journey.png',
      url: '/images/diseases/lennox-gastaut-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2045, 'disease-limbal-stem-cell-deficiency'),
    name: 'Limbal stem cell deficiency',
    nameEn: 'Limbal stem cell deficiency',
    alias:
      'LSCD, limbal stem cell dysfunction, China Second Rare Disease Catalog item 45',
    slug: 'limbal-stem-cell-deficiency',
    oneSentence:
      'Limbal stem cell deficiency occurs when the stem cells at the edge of the cornea are reduced or dysfunctional, causing recurrent redness, pain, light sensitivity, reduced vision, unstable corneal surface, and abnormal blood-vessel growth.',
    plainName:
      'An ocular surface disease where the cornea loses its normal repair system',
    prevalence:
      "Included in China's second rare disease catalog; it is uncommon and may follow chemical or thermal injury, severe ocular surface inflammation, congenital disease, contact lens damage, or repeated eye surgery.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 399,
      name: 'limbal-stem-cell-deficiency-journey.png',
      url: '/images/diseases/limbal-stem-cell-deficiency-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2046, 'disease-malignant-hyperthermia'),
    name: 'Malignant hyperthermia',
    nameEn: 'Malignant hyperthermia',
    alias:
      'MH; anesthesia-related malignant hyperthermia; China Second Rare Disease Catalog item 46',
    slug: 'malignant-hyperthermia',
    oneSentence:
      'Malignant hyperthermia is an inherited anesthesia emergency in which a person may feel well until certain inhaled anesthetics or succinylcholine trigger a fast, life-threatening high-metabolism reaction.',
    plainName:
      'An inherited anesthesia risk that can suddenly become an emergency',
    prevalence:
      "Included in China's second rare disease catalog; many susceptible people are never identified because they have not been exposed to triggering anesthetic drugs.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 400,
      name: 'malignant-hyperthermia-journey.png',
      url: '/images/diseases/malignant-hyperthermia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2047, 'disease-malignant-pleural-mesothelioma'),
    name: 'Malignant pleural mesothelioma',
    nameEn: 'Malignant pleural mesothelioma',
    alias:
      'MPM; pleural malignant mesothelioma; China Second Rare Disease Catalog item 47',
    slug: 'malignant-pleural-mesothelioma',
    oneSentence:
      'Malignant pleural mesothelioma is a rare cancer of the pleural lining, often linked to asbestos exposure, that may first look like recurrent pleural fluid, breathlessness, or chest pain.',
    plainName:
      'A rare pleural cancer that often causes fluid, breathlessness, and chest pain',
    prevalence:
      "Included in China's second rare disease catalog; it is uncommon overall, but risk is higher after asbestos or related occupational exposure, often many years earlier.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 401,
      name: 'malignant-pleural-mesothelioma-journey.png',
      url: '/images/diseases/malignant-pleural-mesothelioma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2048, 'disease-melanoma'),
    name: 'Melanoma',
    nameEn: 'Melanoma',
    alias: 'Malignant melanoma; China Second Rare Disease Catalog item 48',
    slug: 'melanoma',
    oneSentence:
      "Melanoma is a cancer of melanocytes that can arise in skin, nails, mucosa, or the eye; it is included in China's second rare disease catalog, although frequency varies greatly by country and ancestry.",
    plainName: 'A melanocyte cancer that needs early pathology confirmation',
    prevalence:
      "Included in China's second rare disease catalog; melanoma is not globally rare in every region, and acral or mucosal melanoma deserves particular attention in many Asian populations.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 402,
      name: 'melanoma-journey.png',
      url: '/images/diseases/melanoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2049, 'disease-metachromatic-leukodystrophy'),
    name: 'Metachromatic leukodystrophy',
    nameEn: 'Metachromatic leukodystrophy',
    alias:
      'MLD; arylsulfatase A deficiency; China Second Rare Disease Catalog item 49',
    slug: 'metachromatic-leukodystrophy',
    oneSentence:
      'Metachromatic leukodystrophy is usually an ARSA-related lysosomal storage disease in which sulfatides build up and progressively damage central and peripheral nerve myelin.',
    plainName:
      'An inherited white-matter disease that progressively damages myelin',
    prevalence:
      "Included in China's second rare disease catalog; international estimates are about 1 in 40,000 to 160,000 people, with higher rates in some genetically isolated groups.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 403,
      name: 'metachromatic-leukodystrophy-journey.png',
      url: '/images/diseases/metachromatic-leukodystrophy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2050, 'disease-monogenic-non-syndromic-obesity'),
    name: 'Monogenic non-syndromic obesity',
    nameEn: 'Monogenic non-syndromic obesity',
    alias:
      'Monogenic obesity; non-syndromic genetic obesity; China Second Rare Disease Catalog item 50',
    slug: 'monogenic-non-syndromic-obesity',
    oneSentence:
      'Monogenic non-syndromic obesity is early-onset severe obesity caused by a single-gene change that often affects hunger, fullness, and energy regulation rather than willpower.',
    plainName: 'Inherited early-onset obesity often marked by intense hunger',
    prevalence:
      "Included in China's second rare disease catalog; it is rare overall, but should be considered in children with severe rapid weight gain before age 5 and persistent hyperphagia.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 404,
      name: 'monogenic-non-syndromic-obesity-journey.png',
      url: '/images/diseases/monogenic-non-syndromic-obesity-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2051, 'disease-multiple-endocrine-neoplasia'),
    name: 'Multiple endocrine neoplasia',
    nameEn: 'Multiple endocrine neoplasia',
    alias:
      'MEN; multiple endocrine neoplasia syndrome; China Second Rare Disease Catalog item 51',
    slug: 'multiple-endocrine-neoplasia',
    oneSentence:
      'Multiple endocrine neoplasia is a group of inherited endocrine tumor syndromes in which one person can develop tumors or overgrowth in two or more hormone-producing glands.',
    plainName:
      'An inherited condition that can cause repeated tumors in endocrine glands',
    prevalence:
      "Included in China's second rare disease catalog; MEN1 and MEN2 are each estimated internationally at roughly tens of thousands of people per case, while MEN4 is rarer.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 405,
      name: 'multiple-endocrine-neoplasia-journey.png',
      url: '/images/diseases/multiple-endocrine-neoplasia-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2052, 'disease-narcolepsy'),
    name: 'Narcolepsy',
    nameEn: 'Narcolepsy',
    alias:
      'Narcolepsy; daytime sleep disorder; China Second Rare Disease Catalog item 52',
    slug: 'narcolepsy',
    oneSentence:
      'Narcolepsy is a chronic sleep-wake regulation disorder marked by uncontrollable daytime sleepiness, sometimes with cataplexy, sleep paralysis, hallucinations, and fragmented nighttime sleep.',
    plainName: 'A sleep-wake brain regulation disorder',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by region, and mild or pediatric cases may be underdiagnosed.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 406,
      name: 'narcolepsy-journey.png',
      url: '/images/diseases/narcolepsy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2053, 'disease-neuroblastoma'),
    name: 'Neuroblastoma',
    nameEn: 'Neuroblastoma',
    alias: 'Childhood neuroblastoma; China Second Rare Disease Catalog item 53',
    slug: 'neuroblastoma',
    oneSentence:
      'Neuroblastoma is a sympathetic nervous system cancer seen mostly in infants and children, arising in the adrenal gland or paraspinal nerve tissue with highly variable risk and treatment intensity.',
    plainName: 'A childhood nerve-cell cancer treated according to risk group',
    prevalence:
      "Included in China's second rare disease catalog; it is an uncommon childhood cancer, usually diagnosed before age 5, and sometimes found before birth or in infancy.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 407,
      name: 'neuroblastoma-journey.png',
      url: '/images/diseases/neuroblastoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2054, 'disease-neurofibromatosis'),
    name: 'Neurofibromatosis',
    nameEn: 'Neurofibromatosis',
    alias:
      'NF; NF1; NF2-related schwannomatosis; schwannomatosis; China Second Rare Disease Catalog item 54',
    slug: 'neurofibromatosis',
    oneSentence:
      'Neurofibromatosis is a group of inherited nervous-system tumor predisposition disorders that can affect skin, peripheral nerves, brain and spine, eyes, bones, hearing, and learning.',
    plainName:
      'An inherited condition with nerve and skin tumors that needs lifelong surveillance',
    prevalence:
      "Included in China's second rare disease catalog; NF1 is the most common form, while NF2-related schwannomatosis and other schwannomatoses are rarer.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 408,
      name: 'neurofibromatosis-journey.png',
      url: '/images/diseases/neurofibromatosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2055, 'disease-neuronal-ceroid-lipofuscinosis'),
    name: 'Neuronal ceroid lipofuscinosis',
    nameEn: 'Neuronal ceroid lipofuscinosis',
    alias:
      'NCL; Batten disease; CLN-related disease; China Second Rare Disease Catalog item 55',
    slug: 'neuronal-ceroid-lipofuscinosis',
    oneSentence:
      'Neuronal ceroid lipofuscinosis is a group of inherited lysosomal neurodegenerative disorders that often cause vision loss, seizures, developmental or cognitive regression, movement problems, and increasing care needs.',
    plainName:
      'Inherited neurodegenerative disorders that affect vision, seizures, and development',
    prevalence:
      "Included in China's second rare disease catalog; NCLs are rare overall but are an important cause of inherited childhood neurodegeneration, with age of onset and speed varying by CLN type.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 409,
      name: 'neuronal-ceroid-lipofuscinosis-journey.png',
      url: '/images/diseases/neuronal-ceroid-lipofuscinosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2056, 'disease-neurotrophic-keratitis'),
    name: 'Neurotrophic keratitis',
    nameEn: 'Neurotrophic keratitis',
    alias:
      'Neurotrophic keratopathy; NK; China Second Rare Disease Catalog item 56',
    slug: 'neurotrophic-keratitis',
    oneSentence:
      'Neurotrophic keratitis is an ocular surface disease caused by impaired corneal sensory nerves, where the eye may not hurt much even while epithelial defects, ulcers, or perforation risk develop.',
    plainName:
      'A corneal nerve disease where too little pain can hide serious injury',
    prevalence:
      "Included in China's second rare disease catalog; it is uncommon and often follows herpes eye disease, trigeminal nerve injury, ocular surgery, diabetes, or chronic ocular surface disease.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 410,
      name: 'neurotrophic-keratitis-journey.png',
      url: '/images/diseases/neurotrophic-keratitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2057, 'disease-osteosarcoma'),
    name: 'Osteosarcoma',
    nameEn: 'Osteosarcoma',
    alias: 'Osteogenic sarcoma; China Second Rare Disease Catalog item 57',
    slug: 'osteosarcoma',
    oneSentence:
      'Osteosarcoma is a malignant bone tumor that makes abnormal bone-like tissue, often arising in adolescent long bones and usually requiring combined chemotherapy and surgery.',
    plainName:
      'A malignant bone tumor that often starts with persistent bone pain and swelling',
    prevalence:
      "Included in China's second rare disease catalog; it is uncommon overall, with a peak in adolescents and frequent involvement of long bones around the knee.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 411,
      name: 'osteosarcoma-journey.png',
      url: '/images/diseases/osteosarcoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2058, 'disease-pemphigus'),
    name: 'Pemphigus',
    nameEn: 'Pemphigus',
    alias:
      'Autoimmune blistering disease; pemphigus vulgaris; pemphigus foliaceus; China Second Rare Disease Catalog item 58',
    slug: 'pemphigus',
    oneSentence:
      'Pemphigus is a group of autoimmune blistering diseases in which antibodies attack connections between skin or mucosal cells, causing recurrent blisters, erosions, and painful mouth or skin wounds.',
    plainName:
      'An autoimmune disease causing recurrent skin and mouth blisters and erosions',
    prevalence:
      "Included in China's second rare disease catalog; pemphigus is rare overall, with pemphigus vulgaris often involving the mouth and pemphigus foliaceus more often affecting superficial skin.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 412,
      name: 'pemphigus-journey.png',
      url: '/images/diseases/pemphigus-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2059, 'disease-persistent-pulmonary-hypertension-of-the-newborn'),
    name: 'Persistent pulmonary hypertension of the newborn',
    nameEn: 'Persistent pulmonary hypertension of the newborn',
    alias:
      'PPHN; persistent neonatal pulmonary hypertension; China Second Rare Disease Catalog item 59',
    slug: 'persistent-pulmonary-hypertension-of-the-newborn',
    oneSentence:
      'Persistent pulmonary hypertension of the newborn is a critical newborn condition in which lung blood vessels fail to relax after birth, causing severe low oxygen that needs rapid NICU care.',
    plainName:
      'A newborn emergency where the lung circulation does not switch over after birth',
    prevalence:
      "Included in China's second rare disease catalog; it often occurs with perinatal hypoxia, meconium aspiration, pneumonia or sepsis, abnormal lung development, or congenital diaphragmatic hernia.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 413,
      name: 'persistent-pulmonary-hypertension-of-the-newborn-journey.png',
      url: '/images/diseases/persistent-pulmonary-hypertension-of-the-newborn-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2060, 'disease-pheochromocytoma'),
    name: 'Pheochromocytoma',
    nameEn: 'Pheochromocytoma',
    alias:
      'PCC; pheochromocytoma/paraganglioma; PPGL; China Second Rare Disease Catalog item 60',
    slug: 'pheochromocytoma',
    oneSentence:
      'Pheochromocytoma is a neuroendocrine tumor of adrenal medulla chromaffin cells that can release catecholamines and cause episodic or sustained hypertension, palpitations, headache, and sweating.',
    plainName:
      'An endocrine tumor that can suddenly release blood-pressure hormones',
    prevalence:
      "Included in China's second rare disease catalog; it is uncommon among people with hypertension, but important because it can cause hypertensive crisis, arrhythmia, and anesthesia risk.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 414,
      name: 'pheochromocytoma-journey.png',
      url: '/images/diseases/pheochromocytoma-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2061, 'disease-pik3ca-related-overgrowth-syndrome'),
    name: 'PIK3CA-related overgrowth spectrum',
    nameEn: 'PIK3CA-related overgrowth spectrum',
    alias:
      'PROS; PIK3CA-related overgrowth syndrome; China Second Rare Disease Catalog item 61',
    slug: 'pik3ca-related-overgrowth-syndrome',
    oneSentence:
      'PIK3CA-related overgrowth spectrum is a group of disorders caused by activating mosaic PIK3CA variants, leading to asymmetric overgrowth of soft tissue, vessels, lymphatics, fat, bone, or brain tissue.',
    plainName:
      'A mosaic genetic overgrowth condition often involving vessels or lymphatics',
    prevalence:
      "Included in China's second rare disease catalog; it is rare overall and often delayed because findings are split across vascular malformation, limb overgrowth, spine, or neurologic clinics.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 415,
      name: 'pik3ca-related-overgrowth-syndrome-journey.png',
      url: '/images/diseases/pik3ca-related-overgrowth-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2062, 'disease-polycythaemia-vera'),
    name: 'Polycythaemia vera',
    nameEn: 'Polycythaemia vera',
    alias: 'PV; polycythemia vera; China Second Rare Disease Catalog item 62',
    slug: 'polycythaemia-vera',
    oneSentence:
      'Polycythaemia vera is a myeloproliferative neoplasm in which the bone marrow makes too many red blood cells, often with high white cells or platelets, thickening blood and increasing clot risk.',
    plainName:
      'A chronic bone marrow disorder with too many blood cells and clot risk',
    prevalence:
      "Included in China's second rare disease catalog; it is more common in older adults but can occur in younger people and must be distinguished from secondary erythrocytosis.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 416,
      name: 'polycythaemia-vera-journey.png',
      url: '/images/diseases/polycythaemia-vera-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2063, 'disease-primary-biliary-cholangitis'),
    name: 'Primary biliary cholangitis',
    nameEn: 'Primary biliary cholangitis',
    alias:
      'PBC; primary biliary cirrhosis (older name); China Second Rare Disease Catalog item 63',
    slug: 'primary-biliary-cholangitis',
    oneSentence:
      'Primary biliary cholangitis is a chronic autoimmune cholestatic liver disease in which small intrahepatic bile ducts are gradually damaged, causing itch, fatigue, cholestasis, and fibrosis risk.',
    plainName:
      'A chronic autoimmune disease that slowly injures small bile ducts in the liver',
    prevalence:
      "Included in China's second rare disease catalog; it is more common in middle-aged women, and many people are found before symptoms through alkaline phosphatase elevation and antimitochondrial antibodies.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 417,
      name: 'primary-biliary-cholangitis-journey.png',
      url: '/images/diseases/primary-biliary-cholangitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2064, 'disease-primary-growth-hormone-deficiency'),
    name: 'Primary growth hormone deficiency',
    nameEn: 'Primary growth hormone deficiency',
    alias:
      'GHD; primary GH deficiency; China Second Rare Disease Catalog item 64',
    slug: 'primary-growth-hormone-deficiency',
    oneSentence:
      'Primary growth hormone deficiency is insufficient growth hormone secretion from pituitary or hypothalamic causes, most often noticed in children as slow growth and marked short stature.',
    plainName: 'A growth hormone shortage that makes children grow too slowly',
    prevalence:
      "Included in China's second rare disease catalog; childhood GHD is uncommon, but should be assessed when growth velocity is clearly low or the height curve crosses downward.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 418,
      name: 'primary-growth-hormone-deficiency-journey.png',
      url: '/images/diseases/primary-growth-hormone-deficiency-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2065, 'disease-primary-igf1-deficiency'),
    name: 'Primary IGF1 deficiency',
    nameEn: 'Primary IGF1 deficiency',
    alias:
      'Primary IGF-1 deficiency; severe primary IGF-1 deficiency; Laron syndrome related; China Second Rare Disease Catalog item 65',
    slug: 'primary-igf1-deficiency',
    oneSentence:
      'Primary IGF1 deficiency is a disorder in which the body cannot make enough IGF-1 or cannot respond properly to growth hormone, causing severe postnatal growth failure and short stature.',
    plainName:
      'A condition where growth hormone may be present but IGF-1 is too low for normal growth',
    prevalence:
      "Included in China's second rare disease catalog; severe primary IGF-1 deficiency is very rare and classically has very low height and IGF-1 with normal or high growth hormone.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 419,
      name: 'primary-igf1-deficiency-journey.png',
      url: '/images/diseases/primary-igf1-deficiency-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2066, 'disease-primary-immunodeficiency'),
    name: 'Primary immunodeficiency',
    nameEn: 'Primary immunodeficiency',
    alias:
      'PID; PIDD; inborn errors of immunity; China Second Rare Disease Catalog item 66',
    slug: 'primary-immunodeficiency',
    oneSentence:
      'Primary immunodeficiency is a large group of inherited or inborn immune system disorders that can cause recurrent, severe, or unusual infections and may also involve autoimmunity, allergy, inflammation, or cancer risk.',
    plainName:
      'A group of rare conditions where parts of the immune defense are missing or do not work well',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies greatly by subtype. NIAID notes more than 200 recognized forms and about 500,000 affected people in the United States.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 420,
      name: 'primary-immunodeficiency-journey.png',
      url: '/images/diseases/primary-immunodeficiency-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2067, 'disease-primary-myelofibrosis'),
    name: 'Primary myelofibrosis',
    nameEn: 'Primary myelofibrosis',
    alias:
      'PMF; primary myelofibrosis; China Second Rare Disease Catalog item 67',
    slug: 'primary-myelofibrosis',
    oneSentence:
      'Primary myelofibrosis is a rare myeloproliferative neoplasm in which bone marrow is gradually replaced by fibrous tissue, causing anemia, enlarged spleen, constitutional symptoms, bleeding, or clot risk.',
    plainName:
      'A chronic blood disorder where scar-like tissue makes bone marrow production harder',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 500,000 people worldwide, most often diagnosed at ages 50 to 80 but possible at any age.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 421,
      name: 'primary-myelofibrosis-journey.png',
      url: '/images/diseases/primary-myelofibrosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2068, 'disease-primary-sclerosing-cholangitis'),
    name: 'Primary sclerosing cholangitis',
    nameEn: 'Primary sclerosing cholangitis',
    alias:
      'PSC; primary sclerosing cholangitis; China Second Rare Disease Catalog item 68',
    slug: 'primary-sclerosing-cholangitis',
    oneSentence:
      'Primary sclerosing cholangitis is a chronic bile duct disease in which inflammation and scarring narrow bile ducts inside and outside the liver, causing cholestasis, liver injury, and frequent association with inflammatory bowel disease.',
    plainName:
      'A chronic liver and bile duct disease where bile ducts slowly narrow',
    prevalence:
      "Included in China's second rare disease catalog; PSC is rare overall, varies by population and geography, and is often seen in people with inflammatory bowel disease such as ulcerative colitis.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 422,
      name: 'primary-sclerosing-cholangitis-journey.png',
      url: '/images/diseases/primary-sclerosing-cholangitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2069, 'disease-progressive-fibrosing-interstitial-lung-disease'),
    name: 'Progressive fibrosing interstitial lung disease',
    nameEn: 'Progressive fibrosing interstitial lung disease',
    alias:
      'PF-ILD; PPF; progressive pulmonary fibrosis; China Second Rare Disease Catalog item 69',
    slug: 'progressive-fibrosing-interstitial-lung-disease',
    oneSentence:
      'Progressive fibrosing interstitial lung disease describes a progressive fibrosis pattern across several interstitial lung diseases, with worsening breathlessness, dry cough, lung function, or CT findings over time.',
    plainName:
      'A progressive scarring pattern in the lungs that makes breathing harder over time',
    prevalence:
      "Included in China's second rare disease catalog; it is not one single disease but a progressive phenotype across ILDs, so rarity and causes vary by region, ancestry, exposure, and underlying condition.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 423,
      name: 'progressive-fibrosing-interstitial-lung-disease-journey.png',
      url: '/images/diseases/progressive-fibrosing-interstitial-lung-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2070, 'disease-recurrent-pericarditis'),
    name: 'Recurrent pericarditis',
    nameEn: 'Recurrent pericarditis',
    alias:
      'RP; recurrent pericarditis; China Second Rare Disease Catalog item 70',
    slug: 'recurrent-pericarditis',
    oneSentence:
      'Recurrent pericarditis is return of pericardial inflammation after a symptom-free interval, causing repeated chest pain and inflammation and sometimes pericardial effusion or tamponade risk.',
    plainName:
      'Repeated inflammation of the sac around the heart that causes recurring chest pain',
    prevalence:
      "Included in China's second rare disease catalog; the American Heart Association notes that about 15% to 30% of people treated for acute pericarditis may have recurrence, and colchicine lowers recurrence risk.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 424,
      name: 'recurrent-pericarditis-journey.png',
      url: '/images/diseases/recurrent-pericarditis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2071, 'disease-retinopathy-of-prematurity'),
    name: 'Retinopathy of prematurity',
    nameEn: 'Retinopathy of prematurity',
    alias: 'ROP; China Second Rare Disease Catalog item 71',
    slug: 'retinopathy-of-prematurity',
    oneSentence:
      'Retinopathy of prematurity is abnormal retinal blood vessel development in premature or very low birth weight infants, which can cause retinal detachment and lifelong vision loss if severe.',
    plainName:
      'An eye disease in premature babies that needs timed retina screening',
    prevalence:
      "Included in China's second rare disease catalog; risk is driven mainly by gestational age, birth weight, and neonatal illness, with the smallest and earliest babies at highest risk.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 425,
      name: 'retinopathy-of-prematurity-journey.png',
      url: '/images/diseases/retinopathy-of-prematurity-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2072, 'disease-rett-syndrome'),
    name: 'Rett syndrome',
    nameEn: 'Rett syndrome',
    alias: 'RTT; Rett syndrome; China Second Rare Disease Catalog item 72',
    slug: 'rett-syndrome',
    oneSentence:
      'Rett syndrome is a neurodevelopmental disorder usually caused by MECP2 variants, often causing early developmental regression, loss of purposeful hand use, repetitive hand movements, seizures, and breathing or movement problems.',
    plainName:
      'A genetic neurodevelopmental condition with early regression and repetitive hand movements',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 9,000 to 10,000 females, while affected males are rare and often more severely affected.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 426,
      name: 'rett-syndrome-journey.png',
      url: '/images/diseases/rett-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2073, 'disease-short-bowel-syndrome'),
    name: 'Short bowel syndrome',
    nameEn: 'Short bowel syndrome',
    alias:
      'SBS; short bowel syndrome; China Second Rare Disease Catalog item 73',
    slug: 'short-bowel-syndrome',
    oneSentence:
      'Short bowel syndrome occurs when the small intestine is too short or too damaged to absorb enough fluids, electrolytes, and nutrients, causing diarrhea, dehydration, malnutrition, and sometimes long-term parenteral nutrition needs.',
    plainName:
      'A condition where there is not enough working intestine to absorb food and fluid well',
    prevalence:
      "Included in China's second rare disease catalog; chronic SBS is rare and often follows bowel resection, congenital intestinal disorders, necrotizing enterocolitis, or Crohn disease.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 427,
      name: 'short-bowel-syndrome-journey.png',
      url: '/images/diseases/short-bowel-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2074, 'disease-systemic-juvenile-idiopathic-arthritis'),
    name: 'Systemic juvenile idiopathic arthritis',
    nameEn: 'Systemic juvenile idiopathic arthritis',
    alias:
      'sJIA; systemic JIA; Still disease related; China Second Rare Disease Catalog item 74',
    slug: 'systemic-juvenile-idiopathic-arthritis',
    oneSentence:
      'Systemic juvenile idiopathic arthritis is a childhood-onset autoinflammatory disease with recurrent high fever, rash, and arthritis, with macrophage activation syndrome as a serious complication.',
    plainName:
      'A whole-body inflammatory disease in children with fever, rash, and arthritis',
    prevalence:
      "Included in China's second rare disease catalog; JIA is a group of childhood arthritis conditions, and systemic JIA is a less common subtype with frequency varying by population and criteria.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 428,
      name: 'systemic-juvenile-idiopathic-arthritis-journey.png',
      url: '/images/diseases/systemic-juvenile-idiopathic-arthritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2075, 'disease-systemic-mastocytosis'),
    name: 'Systemic mastocytosis',
    nameEn: 'Systemic mastocytosis',
    alias:
      'SM; systemic mastocytosis; China Second Rare Disease Catalog item 75',
    slug: 'systemic-mastocytosis',
    oneSentence:
      'Systemic mastocytosis is a rare blood disorder in which mast cells accumulate in bone marrow and other organs, causing flushing, itching, diarrhea, bone pain, allergic reactions, or organ damage.',
    plainName:
      'A blood disorder where too many mast cells trigger repeated allergy-like episodes',
    prevalence:
      "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 10,000 to 20,000 people worldwide, with most adult cases linked to acquired KIT variants.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
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
  },
  {
    ...entity(2076, 'disease-takayasu-arteritis'),
    name: 'Takayasu arteritis',
    nameEn: 'Takayasu arteritis',
    alias: 'TAK; pulseless disease; China Second Rare Disease Catalog item 76',
    slug: 'takayasu-arteritis',
    oneSentence:
      'Takayasu arteritis is a rare large-vessel vasculitis that mainly affects the aorta and its major branches, causing narrowing, blockage, or aneurysm that can affect blood pressure and blood flow to the arms, brain, heart, and kidneys.',
    plainName:
      'An immune disease where large blood vessels stay inflamed, narrowed, or weakened',
    prevalence:
      "Included in China's second rare disease catalog; it is uncommon worldwide, reported more often in some Asian populations and in young women, but it can affect any sex or age.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 430,
      name: 'takayasu-arteritis-journey.png',
      url: '/images/diseases/takayasu-arteritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      2077,
      'disease-tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    ),
    name: 'Tenosynovial giant cell tumor/Pigmented villonodular synovitis',
    nameEn: 'Tenosynovial giant cell tumor/Pigmented villonodular synovitis',
    alias: 'TGCT; PVNS; China Second Rare Disease Catalog item 77',
    slug: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    oneSentence:
      'Tenosynovial giant cell tumor is a rare locally aggressive tumor of the synovium, tendon sheath, or bursa that is usually benign but can cause recurrent swelling, pain, locking, and joint damage.',
    plainName:
      'A benign but difficult joint-area tumor that can keep limiting movement',
    prevalence:
      "Included in China's second rare disease catalog; it is a rare soft tissue and joint-area tumor, with localized disease more common and diffuse disease more likely to recur or impair function.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 431,
      name: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
      url: '/images/diseases/tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2078, 'disease-thalassemia-major'),
    name: 'Thalassemia major',
    nameEn: 'Thalassemia major',
    alias:
      "Transfusion-dependent thalassemia; Cooley's anemia; China Second Rare Disease Catalog item 78",
    slug: 'thalassemia-major',
    oneSentence:
      'Thalassemia major is a severe inherited globin production disorder that causes serious anemia in infancy or early childhood and often requires regular transfusions, iron chelation, and lifelong specialist follow-up.',
    plainName:
      'An inherited blood disorder causing severe early anemia that often needs long-term transfusions and iron removal',
    prevalence:
      "Included in China's second rare disease catalog; thalassemia carrier frequency varies greatly by ancestry and region, being more common around the Mediterranean, Middle East, South Asia, Southeast Asia, and parts of southern China, while severe transfusion-dependent disease remains a rare specialist-managed condition.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 432,
      name: 'thalassemia-major-journey.png',
      url: '/images/diseases/thalassemia-major-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2079, 'disease-thrombotic-thrombocytopenic-purpura'),
    name: 'Thrombotic thrombocytopenic purpura',
    nameEn: 'Thrombotic thrombocytopenic purpura',
    alias: 'TTP; China Second Rare Disease Catalog item 79',
    slug: 'thrombotic-thrombocytopenic-purpura',
    oneSentence:
      'Thrombotic thrombocytopenic purpura is a rare, life-threatening thrombotic microangiopathy in which severe ADAMTS13 deficiency causes tiny clots, low platelets, hemolytic anemia, and organ injury.',
    plainName:
      'A blood emergency where platelets form dangerous tiny clots in small vessels',
    prevalence:
      "Included in China's second rare disease catalog; TTP is rare and may be acquired immune-mediated or congenital from ADAMTS13 deficiency, with sudden episodes that can be life-threatening.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 433,
      name: 'thrombotic-thrombocytopenic-purpura-journey.png',
      url: '/images/diseases/thrombotic-thrombocytopenic-purpura-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2080, 'disease-transthyretin-amyloidosis'),
    name: 'Transthyretin amyloidosis',
    nameEn: 'Transthyretin amyloidosis',
    alias:
      'ATTR; hATTR; ATTR-CM; ATTR-PN; China Second Rare Disease Catalog item 80',
    slug: 'transthyretin-amyloidosis',
    oneSentence:
      'Transthyretin amyloidosis is a systemic disease in which misfolded TTR protein deposits in nerves, the heart, and other tissues, causing peripheral neuropathy, cardiomyopathy, and autonomic or gastrointestinal symptoms.',
    plainName:
      'A systemic disease where abnormal protein deposits affect nerves, heart, and other organs',
    prevalence:
      "Included in China's second rare disease catalog; hereditary ATTR varies widely by family and region, while wild-type ATTR cardiomyopathy is more common in older adults and is probably underdiagnosed.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 434,
      name: 'transthyretin-amyloidosis-journey.png',
      url: '/images/diseases/transthyretin-amyloidosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2082, 'disease-tumor-induced-osteomalacia'),
    name: 'Tumor-induced osteomalacia',
    nameEn: 'Tumor-induced osteomalacia',
    alias:
      'TIO; oncogenic osteomalacia; China Second Rare Disease Catalog item 82',
    slug: 'tumor-induced-osteomalacia',
    oneSentence:
      'Tumor-induced osteomalacia is a rare acquired phosphate-wasting bone disease, usually caused by a small hidden tumor producing excess FGF23 and leading to bone pain, muscle weakness, and fractures.',
    plainName:
      'A hidden small tumor makes the body lose phosphate and softens bones',
    prevalence:
      "Included in China's second rare disease catalog; TIO is very rare, and the causative tumor is often small and difficult to locate, so diagnosis can be delayed for years.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 435,
      name: 'tumor-induced-osteomalacia-journey.png',
      url: '/images/diseases/tumor-induced-osteomalacia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'endocrine'],
  },
  {
    ...entity(
      2081,
      'disease-tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    ),
    name: 'Tumor necrosis factor receptor-associated periodic syndrome',
    nameEn: 'Tumor necrosis factor receptor-associated periodic syndrome',
    alias:
      'TRAPS; TNF receptor-associated periodic syndrome; China Second Rare Disease Catalog item 81',
    slug: 'tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    oneSentence:
      'TRAPS is a rare inherited autoinflammatory disease in which TNFRSF1A variants cause recurrent long fever episodes with rash, muscle pain, abdominal pain, eye swelling, and high inflammatory markers.',
    plainName:
      'An inherited recurrent fever disease where the body repeatedly inflames itself for days to weeks',
    prevalence:
      "Included in China's second rare disease catalog; TRAPS is rare worldwide, often starts in childhood, and can also be diagnosed for the first time in adults.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 436,
      name: 'tumor-necrosis-factor-receptor-associated-periodic-syndrome-journey.png',
      url: '/images/diseases/tumor-necrosis-factor-receptor-associated-periodic-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2083, 'disease-von-hippel-lindau-syndrome'),
    name: 'Von Hippel-Lindau syndrome',
    nameEn: 'Von Hippel-Lindau syndrome',
    alias: 'VHL disease; China Second Rare Disease Catalog item 83',
    slug: 'von-hippel-lindau-syndrome',
    oneSentence:
      'Von Hippel-Lindau syndrome is an autosomal dominant tumor predisposition syndrome that can cause cysts and tumors in the retina, brain and spinal cord, kidneys, adrenal glands, pancreas, and inner ear.',
    plainName:
      'An inherited syndrome where one gene variant raises tumor risk across several organs',
    prevalence:
      "Included in China's second rare disease catalog; NCI patient materials commonly cite an estimate of about 1 in 36,000 people, with wide variation even within families.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 437,
      name: 'von-hippel-lindau-syndrome-journey.png',
      url: '/images/diseases/von-hippel-lindau-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2084, 'disease-von-willebrand-disease-type3'),
    name: 'Von Willebrand disease type 3',
    nameEn: 'Von Willebrand disease type 3',
    alias:
      'VWD type 3; severe von Willebrand disease; China Second Rare Disease Catalog item 84',
    slug: 'von-willebrand-disease-type3',
    oneSentence:
      'Von Willebrand disease type 3 is the rarest and most severe VWD type, with little or no functional VWF and often low factor VIII, causing recurrent mucosal, soft tissue, joint, and procedure-related bleeding from childhood.',
    plainName:
      'An inherited bleeding disorder that causes recurrent bleeding from childhood and needs coagulation specialist care',
    prevalence:
      "Included in China's second rare disease catalog; VWD overall is common, but type 3 is rare and usually autosomal recessive.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 438,
      name: 'von-willebrand-disease-type3-journey.png',
      url: '/images/diseases/von-willebrand-disease-type3-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(
      2085,
      'disease-waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    ),
    name: 'Waldenström macroglobulinemia/Lymphoplasmacytic lymphoma',
    nameEn: 'Waldenström macroglobulinemia/Lymphoplasmacytic lymphoma',
    alias: 'WM; LPL; China Second Rare Disease Catalog item 85',
    slug: 'waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    oneSentence:
      'Waldenström macroglobulinemia is a rare indolent B-cell lymphoma in which lymphoplasmacytic cells in bone marrow produce excess IgM, causing anemia, infection, bleeding, neuropathy, or hyperviscosity.',
    plainName: 'A slow-growing blood cancer that makes too much IgM protein',
    prevalence:
      "Included in China's second rare disease catalog; it is a rare non-Hodgkin lymphoma, more often diagnosed in older adults.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 439,
      name: 'waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma-journey.png',
      url: '/images/diseases/waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2086, 'disease-west-syndrome-infantile-spasms-syndrome'),
    name: 'West syndrome/Infantile spasms syndrome',
    nameEn: 'West syndrome/Infantile spasms syndrome',
    alias:
      'Infantile epileptic spasms syndrome; IESS; China Second Rare Disease Catalog item 86',
    slug: 'west-syndrome-infantile-spasms-syndrome',
    oneSentence:
      'West syndrome/infantile spasms syndrome is a severe infant epilepsy syndrome with clusters of brief nodding, jackknife, or extension spasms, abnormal EEG, and possible developmental arrest or regression.',
    plainName:
      'An infant epilepsy syndrome with clustered nodding or jackknife spasms that needs rapid treatment',
    prevalence:
      "Included in China's second rare disease catalog; it most often appears in the first year of life and is a pediatric neurology emergency to recognize early.",
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 440,
      name: 'west-syndrome-infantile-spasms-syndrome-journey.png',
      url: '/images/diseases/west-syndrome-infantile-spasms-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
];

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePhenylketonuria: DiseaseDraft = {
  ...entity(500, 'disease-phenylketonuria'),
  name: 'Phenylketonuria',
  nameEn: 'Phenylketonuria',
  alias:
    'PKU; phenylalanine hydroxylase deficiency; PAH deficiency; hyperphenylalaninemia; Folling disease',
  slug: 'phenylketonuria',
  oneSentence:
    'Phenylketonuria (PKU) is an autosomal recessive amino acid metabolism disorder caused by deficiency of phenylalanine hydroxylase, leading to toxic buildup of phenylalanine; newborn screening enables early detection, and lifelong low-phenylalanine diet is the cornerstone of treatment.',
  plainName:
    'A genetic condition where the body cannot process a protein building block called phenylalanine',
  prevalence:
    'Global incidence is approximately 1 in 10,000–24,000 live births; in China about 1 in 15,924. Rates vary significantly by ethnicity and geography, with higher incidence in Northern Europe, Turkey, and parts of China.',
  searchIntents: [
    'phenylketonuria newborn screening',
    'PKU diet management',
    'phenylketonuria cure',
    'PKU pregnancy guidelines',
    'phenylketonuria special formula',
  ],
  quickLook: {
    whatItIs:
      'PKU is caused by mutations in the PAH gene that reduce or eliminate phenylalanine hydroxylase activity in the liver. Without this enzyme, phenylalanine cannot be converted to tyrosine and accumulates in the blood and brain, causing neurotoxicity.',
    whoToSeeFirst:
      'A positive newborn screen should prompt referral to pediatric endocrinology/metabolic genetics or neonatology. Confirmed patients need lifelong follow-up with a metabolic team. Pregnant women with PKU require high-risk obstetrics co-managed with metabolic specialists.',
    isGenetic:
      'Yes — autosomal recessive inheritance. Both parents are typically unaffected carriers. When both carry a PAH mutation, each child has a 25% chance of having PKU. Genetic testing and carrier screening are available.',
    hasTreatment:
      'Yes. Early and continuous low-phenylalanine diet prevents intellectual disability. Some patients respond to sapropterin (a BH4 analog), allowing dietary relaxation. The FDA approved sepiapterin in 2025 for responsive patients. Adults with poorly controlled disease may be candidates for pegvaliase enzyme substitution therapy. Gene therapy is in clinical trials.',
    commonDelayReason:
      'Newborns appear healthy, so a positive screen may be dismissed or follow-up delayed. Older children and adults who relax the diet may experience cognitive decline that is mistaken for learning difficulties, attention deficits, or mood disorders rather than poor metabolic control.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn screening shows elevated blood phenylalanine or a positive PKU screen.',
      'Infant develops developmental delay, lighter skin/hair/eye color, eczema, or a musty/mousy odor to urine or skin.',
      'Untreated child shows intellectual disability, seizures, behavioral problems, or microcephaly.',
      'Adult experiences poor concentration, mood instability, or memory decline with a history of PKU and suboptimal dietary control.',
      'Prenatal testing suggests fetal involvement, or both parents are known carriers.',
    ],
    commonWrongTurns: [
      'Treating a positive newborn screen as a "false positive" and skipping confirmatory testing.',
      'Attributing infant developmental delay to "late talking" or normal variation without investigating metabolic causes.',
      'Mislabeling school-age cognitive decline as laziness or a generic learning disability.',
      'Diagnosing adult mood or attention symptoms as anxiety/depression/ADHD without checking metabolic control.',
      'Believing that dietary restriction can be stopped after childhood, leading to irreversible neurocognitive harm.',
    ],
    firstDepartments: [
      'Pediatric Endocrinology / Metabolic Genetics',
      'Neonatology (after a positive screen)',
      'Genetic Counseling',
      'Maternal-Fetal Medicine / Prenatal Diagnosis (for pregnancy management)',
      'Clinical Nutrition (diet planning)',
    ],
    diagnosisChecklist: [
      'Keep newborn screening results, initial blood phenylalanine level, and all confirmatory test records.',
      'Measure blood phenylalanine and tyrosine to classify disease severity (classic PKU, mild PKU, non-PKU hyperphenylalaninemia).',
      'Order PAH genetic testing to identify pathogenic variants and guide family screening.',
      'Assess developmental milestones, cognitive function, and EEG if seizures or developmental regression are present.',
      'If planning pregnancy, arrange partner carrier screening and prenatal counseling.',
    ],
    testsToAskAbout: [
      'Blood phenylalanine and tyrosine levels.',
      'PAH gene mutation analysis.',
      'BH4 loading test (to assess BH4 responsiveness).',
      'Developmental and cognitive assessments.',
      'EEG and brain MRI (if neurological symptoms are present).',
    ],
    questionsForDoctor: [
      'Does my child have classic PKU or a milder form? What is the target blood phenylalanine range?',
      'How strict does the diet need to be? Which foods are allowed and which must be avoided?',
      'Is my child a candidate for sapropterin? What tests are needed to find out?',
      'Do I need to stay on the diet as an adult? How will it affect work and social life?',
      'What should I know about family planning and reducing the risk for future children?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Newborns with PKU typically appear normal. Without treatment, developmental delay and decreased responsiveness to surroundings emerge between 3 and 6 months of age. By around 1 year, untreated children may show intellectual disability, reduced skin and hair pigmentation, eczema, and a characteristic musty or mousy odor from sweat and urine. Some develop seizures, abnormal muscle tone, microcephaly, and behavioral problems including hyperactivity, self-injury, and autistic features. Adults with poor metabolic control may experience executive dysfunction, inattention, mood disorders, and cognitive decline. Maternal PKU syndrome occurs when women have high phenylalanine levels during pregnancy, increasing the risk of fetal congenital heart disease, microcephaly, and intellectual disability.</p>',
    diagnosis:
      '<p>Diagnosis is primarily based on newborn screening and blood phenylalanine measurement. All infants should be screened via heel-prick blood test between 24 and 72 hours after birth. If phenylalanine is elevated, confirmatory testing should be performed promptly. Classic PKU is typically defined by blood phenylalanine >1200 μmol/L (20 mg/dL); milder forms have lower levels. PAH genetic testing confirms the diagnosis, identifies causative variants, and enables family screening. A BH4 loading test distinguishes BH4-responsive patients from non-responsive ones; approximately 20–55% of patients respond to sapropterin.</p>',
    treatment:
      '<p>The goal of treatment is to maintain blood phenylalanine within a safe range (120–360 μmol/L during childhood) throughout life. A low-phenylalanine diet is the foundation: high-protein foods (meat, fish, eggs, dairy, nuts) and aspartame-containing products are restricted, and phenylalanine-free medical formulas provide protein, tyrosine, vitamins, and minerals. Some patients respond to sapropterin dihydrochloride, a synthetic BH4 analog that enhances residual PAH activity and can allow dietary liberalization. In 2025, the FDA approved sepiapterin for patients 1 month and older with sepiapterin-responsive PKU; phase 3 data showed 84% of treated patients achieved blood phenylalanine below 360 μmol/L. Pegvaliase, a PEGylated phenylalanine ammonia lyase given by daily subcutaneous injection, is approved for adolescents and adults with poorly controlled PKU, though it carries a risk of hypersensitivity including anaphylaxis. Large neutral amino acids can be used as adjunctive therapy. Gene therapy is in early-phase clinical trials.</p>',
    longTermCare:
      '<p>PKU requires lifelong management. Infancy and early childhood focus on growth, development, and diet education. School-age monitoring includes academic performance and social integration. Adolescents and adults often struggle with dietary adherence due to social and lifestyle factors; peer support and psychological counseling are important. Women with PKU must achieve strict metabolic control before conception and maintain it throughout pregnancy to prevent maternal PKU syndrome. Regular follow-up should include blood phenylalanine monitoring, developmental/cognitive assessments, nutritional status (trace elements, vitamin B12, iron), and bone density. A multidisciplinary team—including metabolic physicians, dietitians, psychologists, and genetic counselors—optimizes outcomes.</p>',
    fertilityOrFamily:
      '<p>PKU is inherited in an autosomal recessive pattern; parents of an affected child are usually asymptomatic carriers. When a person with PKU plans to have children, the partner should be offered PAH carrier testing. If the partner is also a carrier, each child has a 25% chance of having PKU. Prenatal diagnosis via amniocentesis or chorionic villus sampling, and preimplantation genetic testing (PGT), are available. Genetic counseling clinics can provide risk assessment and reproductive planning. Women with PKU should optimize metabolic control for at least 3 months before conception and maintain strict control during pregnancy.</p>',
    emergencySigns:
      '<p>PKU itself is not typically an acute emergency, but the following situations warrant prompt medical attention: infantile seizures of unknown cause; severe vomiting or refusal to feed leading to dehydration; known PKU patient with acute illness, surgery, or high-protein intake causing markedly elevated phenylalanine with altered mental status; pregnant woman with poorly controlled phenylalanine and signs of fetal growth restriction or anomalies.</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Phenylketonuria (PKU)',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK535378/',
    },
    {
      name: 'MedlinePlus Genetics: Phenylketonuria',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/phenylketonuria/',
    },
    {
      name: 'NICHD: Phenylketonuria (PKU)',
      type: 'official',
      url: 'https://www.nichd.nih.gov/health/topics/pku',
    },
    {
      name: 'National Health Commission First Rare Disease Catalog',
      type: 'official',
      url: 'https://www.nhc.gov.cn/yjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Newborns appear normal; by 3–6 months untreated infants show developmental delay, hypopigmentation, eczema, and a musty odor. Without treatment, progressive intellectual disability, seizures, behavioral problems, and microcephaly develop. Adults with poor control may have cognitive decline and mood disorders.</p>',
  diagnosis:
    '<p>Newborn heel-prick screening is the primary detection method. Diagnosis is confirmed by blood phenylalanine measurement and PAH genetic testing. BH4 loading test identifies BH4-responsive patients.</p>',
  treatment:
    '<p>Lifelong low-phenylalanine diet is the foundation. Some patients benefit from sapropterin or sepiapterin. Adults with poorly controlled disease may be candidates for pegvaliase enzyme substitution therapy.</p>',
  prognosis:
    '<p>Newborn screening and early dietary intervention enable normal intellectual development in most patients. Lifelong management is essential to preserve cognitive function and quality of life.</p>',
  sourceName: 'NCBI StatPearls: Phenylketonuria (PKU)',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK535378/',
  categorySlug: 'metabolic',
  charityIds: [45],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 500,
    name: 'phenylketonuria-journey.png',
    url: '/images/diseases/phenylketonuria-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

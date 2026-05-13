import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHyperornithinaemiaHyperammonaemiaHomocitrullinuriaSyndrome: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        "HHH Syndrome, or Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome, is a rare inherited metabolic disorder caused by mutations in the SLC25A15 gene, which codes for the mitochondrial ornithine transporter 1 (ORNT1). This defect prevents ornithine from properly entering the mitochondria to participate in the urea cycle, leading to accumulation of blood ammonia, elevated blood ornithine, and excretion of homocitrulline in urine. It follows an autosomal recessive inheritance pattern and was included in China's first national list of rare diseases in 2018.",
      whoToSeeFirst:
        'When newborns or children develop hyperammonemia, drowsiness, vomiting, seizures, developmental delay, spasticity, or unexplained liver function abnormalities, they should be evaluated promptly in the emergency department, pediatrics, metabolic genetics, or pediatric neurology.',
      isGenetic: 'Yes, autosomal recessive inheritance',
      hasTreatment:
        'Yes, management approaches related to urea cycle disorders are available, including acute hyperammonemia management, protein intake management, ammonia-scavenging medications, and amino acid supplementation assessment, to be developed by metabolic genetics specialists.',
      commonDelayReason:
        'Symptoms resemble encephalopathy, epilepsy, or liver disease, leading to misdiagnosis; the wide age range of onset (from newborn to adulthood) increases diagnostic difficulty',
    },
    patientJourney: {
      whenToSuspect: [
        'Drowsiness, refusal to feed, vomiting, coma with respiratory alkalosis appearing after 48 hours of birth in the neonatal period',
        'Intellectual and motor developmental delay or regression in childhood',
        'Unexplained liver function abnormalities with neuropsychiatric symptoms',
        'Marked aversion to or poor tolerance of high-protein foods',
        'Recurrent seizures, ataxia, or consciousness disturbances',
      ],
      commonWrongTurns: [
        'Treated only for epilepsy or cerebral palsy without checking blood ammonia',
        'Attributing liver function abnormalities to viral hepatitis or other liver diseases',
        'Failing to perform urine metabolic screening, missing key diagnostic clues',
        'Adult-onset cases often misdiagnosed as psychiatric disorders',
      ],
      firstDepartments: [
        'Pediatrics or Pediatric Neurology (preferred first visit)',
        'Metabolic Genetics',
        'Hepatology or Gastroenterology (for assessment of liver damage)',
        'Emergency Department (during acute episodes)',
      ],
      diagnosisChecklist: [
        'Blood ammonia, blood glucose, liver and kidney function',
        'Blood ornithine concentration (persistent elevation is a key clue)',
        'Urine homocitrulline test (urine metabolic screening)',
        'Combined testing of blood ammonia, ornithine, and homocitrulline',
        'SLC25A15 gene molecular testing (important confirmatory evidence)',
        'ORNT1 activity measurement in skin fibroblasts (auxiliary method)',
        'Brain MRI or CT (to assess neurological complications)',
        'Electroencephalogram (EEG) (to assess epileptiform activity)',
      ],
      testsToAskAbout: [
        'Blood ammonia test (whether elevated)',
        'Blood ornithine concentration',
        'Urine amino acid analysis (including homocitrulline)',
        'SLC25A15 gene testing',
        'Liver function and coagulation function',
      ],
      questionsForDoctor: [
        'What is the current blood ammonia level? How often should it be checked?',
        "How should my child's diet be adjusted specifically? How should protein intake be controlled?",
        'Is arginine, citrulline, or ammonia-scavenging treatment currently needed? Who will develop the plan, and how will treatment be monitored?',
        "How often should my child's developmental level be assessed?",
        'What acute triggers should I watch out for?',
        'If my parents want to have another child, what genetic preparations are needed?',
      ],
    },
    medicalSections: {
      symptoms:
        'In the neonatal period, symptoms typically appear after 48 hours of birth, including drowsiness, feeding difficulties, vomiting, coma, and respiratory alkalosis. In infants and children, acute and chronic encephalopathy manifests as intellectual and motor developmental delay or regression, spastic gait, myoclonus, and seizures. Some patients have ataxia and cognitive impairment. Liver damage presents as hepatomegaly, abnormal liver function, and coagulation disorders. Adult-onset cases tend to have milder symptoms and often present with psychiatric or behavioral abnormalities or consciousness disturbances triggered by high-protein diets.',
      diagnosis:
        'Clinical diagnosis can be made based on the classic triad (hyperornithinemia, hyperammonemia, and homocitrullinuria). Confirmation relies on SLC25A15 gene analysis or ORNT1 activity measurement in skin fibroblasts (supporting diagnosis if activity is 20-25% of normal). Newborn screening can detect cases early through blood ornithine concentration. Brain CT/MRI may show brain atrophy, white matter changes, or subdural hemorrhage.',
      treatment:
        'Acute hyperammonemia requires management as a metabolic emergency, including avoiding prolonged fasting, with assessment by a specialist team for energy support, pausing or adjusting protein intake, ammonia-scavenging therapy, amino acid supplementation, and dialysis when necessary. Long-term management typically includes individualized protein intake, metabolic monitoring, and developmental and neurological follow-up. All plans should be written as actionable sick-day/emergency protocols.',
      longTermCare:
        "Long-term management centers on dietary control, requiring a personalized low-protein diet plan developed with a dietitian to avoid high-protein foods that may trigger acute episodes. Regular monitoring of blood ammonia, liver function, and blood ornithine concentration is important. Pay attention to neurodevelopmental milestones and provide timely rehabilitation training. Parents should learn to recognize early signs of acute hyperammonemic episodes and seek medical care promptly. Adult patients should avoid long-term strict protein restriction leading to malnutrition. The frequency of blood ammonia and related metabolic monitoring should be determined by metabolic genetics specialists based on the patient's condition.",
      fertilityOrFamily:
        'This is an autosomal recessive disorder. When both parents are carriers, each pregnancy has a 25% chance of producing an affected child. Genetic counseling is recommended. After identifying the specific SLC25A15 gene mutations, prenatal diagnosis or preimplantation genetic testing (PGT) can guide family planning. Newborns should undergo blood ornithine screening as soon as possible after birth.',
      emergencySigns:
        'Acute encephalopathic symptoms such as drowsiness, irritability, vomiting, seizures, or consciousness disturbances suggest a possible hyperammonemic crisis and require immediate medical attention. Coagulation disorders (such as skin bruising or difficult-to-stop bleeding) indicate severe liver damage requiring urgent intervention.',
    },
    sources: [
      {
        name: 'GeneReviews: Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK97260/',
      },
      {
        name: 'NCBI GTR: Hyperornithinemia-hyperammonemia-homocitrullinuria syndrome',
        type: 'official',
        url: 'https://www.ncbi.nlm.nih.gov/gtr/conditions/C0268540/',
      },
    ],
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
  };

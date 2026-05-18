import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLongChain3HydroxyacylCoaDehydrogenaseDeficiency: DiseaseDraft =
  {
    ...entity(
      5009,
      'disease-long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency',
    ),
    name: 'Long Chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency',
    nameEn: 'Long Chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency',
    alias:
      'LCHAD; fatty acid oxidation disorder; China First Rare Disease Catalog item 63',
    slug: 'long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency',
    oneSentence:
      'Long chain 3-hydroxyacyl-CoA dehydrogenase deficiency is an autosomal recessive fatty acid oxidation disorder caused by HADHA gene mutations that prevent effective utilization of long-chain fats for energy, leading to hypoglycemia, cardiomyopathy, and retinopathy; dietary management and avoidance of fasting are key to prevention.',
    plainName:
      'A genetic metabolic disorder where the body cannot effectively break down long-chain fats for energy',
    prevalence:
      'Extremely rare; prevalence is approximately 1 in 100,000–200,000; higher incidence reported in parts of Northern Europe such as Estonia and Finland.',
    searchIntents: [
      'LCHAD newborn screening',
      'long chain fatty acid oxidation disorder diet',
      'LCHAD cardiomyopathy treatment',
      'long chain 3-hydroxyacyl-CoA dehydrogenase deficiency genetics',
      'LCHAD retinopathy',
    ],
    quickLook: {
      whatItIs:
        'HADHA gene mutations impair a key enzyme in the mitochondrial fatty acid beta-oxidation pathway; the body cannot use fat for energy during fasting or stress, leading to energy crisis and accumulation of toxic metabolites.',
      whoToSeeFirst:
        'Pediatric metabolic genetics or neonatology for positive newborn screens, unexplained hypoglycemia, cardiomyopathy, or hepatomegaly.',
      isGenetic:
        'Autosomal recessive, caused by HADHA gene mutations; parents are asymptomatic carriers, with a 25% recurrence risk for each pregnancy.',
      hasTreatment:
        'Clear treatment pathway: avoid fasting, high-carbohydrate low-fat diet, medium-chain triglyceride (MCT) supplementation, and L-carnitine; acute crises require intravenous glucose.',
      commonDelayReason:
        'Neonatal hypoglycemia and lethargy are often mistaken for sepsis or simple infection; cardiomyopathy and hepatomegaly may be initially treated as isolated conditions.',
    },
    patientJourney: {
      whenToSuspect: [
        'Elevated C16-OH, C18:1-OH, or other hydroxyacylcarnitines on newborn screening.',
        'Fasting-induced hypoglycemia, lethargy, muscle weakness, or feeding difficulties in the newborn or infant period.',
        'Unexplained cardiomyopathy, arrhythmia, hepatomegaly, or hepatic steatosis.',
        'Retinopathy (pigmentary retinopathy) causing night blindness or vision decline.',
        'Maternal acute fatty liver of pregnancy (AFLP) or HELLP syndrome during pregnancy (suggesting a LCHAD-affected fetus).',
      ],
      commonWrongTurns: [
        'Treating neonatal hypoglycemia as simple sepsis or underfeeding.',
        'Diagnosing cardiomyopathy as primary cardiomyopathy without metabolic screening.',
        'Failing to refer to metabolic genetics after an abnormal newborn screen.',
        'Not increasing carbohydrate intake during acute illness, triggering a severe metabolic crisis.',
      ],
      firstDepartments: [
        'Pediatric metabolic genetics',
        'Neonatology (acute phase)',
        'Cardiology (cardiomyopathy evaluation)',
        'Ophthalmology (retinopathy evaluation)',
        'Clinical nutrition',
      ],
      diagnosisChecklist: [
        'Retain newborn screening results.',
        'Blood ammonia, glucose, blood gas, liver function, and cardiac enzymes during acute episodes.',
        'Plasma acylcarnitine profile: elevated C16-OH, C18:1-OH, and C18-OH hydroxyacylcarnitines.',
        'Urinary organic acid analysis: elevated 3-hydroxydicarboxylic acids.',
        'HADHA gene mutation analysis for definitive diagnosis.',
        'Echocardiogram and fundus examination to assess complications.',
      ],
      testsToAskAbout: [
        'Plasma acylcarnitine profile (tandem mass spectrometry).',
        'Urinary organic acid analysis.',
        'HADHA genetic testing.',
        'Glucose, ammonia, blood gas, liver function, and cardiac enzymes.',
        'Echocardiogram, ECG, and fundus examination.',
      ],
      questionsForDoctor: [
        "What is my child's specific gene mutation and what does it mean for prognosis?",
        'How many meals are needed per day? What is the maximum fasting interval?',
        'What are the doses of MCT oil and L-carnitine?',
        'How do I recognize and manage a metabolic crisis?',
        'How often should retinopathy and cardiomyopathy be monitored?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Clinical presentation is highly variable, ranging from neonatal acute metabolic crisis to chronic adult symptoms. Classic manifestations include fasting-induced hypoglycemia, lethargy, altered consciousness, seizures, and coma. Cardiomyopathy (dilated or hypertrophic) and arrhythmias are serious complications. Hepatomegaly, hepatic steatosis, and elevated transaminases are common. Pigmentary retinopathy can cause night blindness and progressive visual decline. Peripheral neuropathy and myopathy occur in some patients. Mothers carrying a LCHAD fetus may develop acute fatty liver of pregnancy (AFLP) or HELLP syndrome.</p>',
      diagnosis:
        '<p>Newborn screening by tandem mass spectrometry detects elevated plasma hydroxyacylcarnitines (C16-OH, C18:1-OH, C18-OH). Urinary organic acid analysis shows increased 3-hydroxydicarboxylic acid excretion. HADHA gene mutation analysis confirms the diagnosis and distinguishes LCHAD from mitochondrial trifunctional protein (MTP) deficiency. Differential diagnosis includes VLCAD deficiency and CPT-I/II deficiency. After diagnosis, comprehensive assessment of cardiac, hepatic, retinal, and neurologic involvement is essential.</p>',
      treatment:
        '<p>The cornerstone of management is avoidance of fasting and provision of alternative energy sources. Infants require frequent feeding every 3–4 hours, including overnight feeds or continuous nasogastric infusion. The diet is high in carbohydrate, moderate in protein, and strictly limited in long-chain fat, with supplementation of medium-chain triglyceride (MCT) oil as an alternative fat source. L-carnitine promotes excretion of toxic metabolites. During acute metabolic crisis, immediate intravenous infusion of high-concentration glucose (10% glucose with electrolytes) is essential to correct acidosis and hypotension; standard intravenous lipid emulsions should be avoided (MCT-based emulsions may be used). Cardiomyopathy and arrhythmias require cardiology co-management.</p>',
      longTermCare:
        '<p>Lifelong dietary management and regular follow-up are required. Monitoring includes growth and development, blood glucose, liver function, cardiac enzymes, echocardiogram, ECG, fundus examination, and neuromuscular function. Avoid prolonged exercise, infection, and fever without adequate carbohydrate supplementation. Patient and family education is critical: establish an "emergency protocol" for illness—immediately provide oral glucose solutions or seek emergency intravenous glucose if vomiting occurs. Carry an emergency medical card stating the diagnosis and emergency management instructions.</p>',
      fertilityOrFamily:
        '<p>Autosomal recessive inheritance. Parents are asymptomatic carriers. Prenatal diagnosis (amniocentesis or chorionic villus sampling for acylcarnitine and genetic analysis) and preimplantation genetic testing are available for at-risk families. Importantly, mothers carrying a LCHAD fetus are at risk for acute fatty liver of pregnancy and HELLP syndrome and require close obstetric monitoring.</p>',
      emergencySigns:
        '<p>Hypoglycemia with lethargy or altered consciousness, vomiting with dehydration, seizures, severe shortness of breath (heart failure), or arrhythmias require immediate emergency care.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Long-Chain 3-Hydroxyacyl-CoA Dehydrogenase Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
      },
      {
        name: 'NORD: Long Chain 3-Hydroxyacyl-CoA Dehydrogenase Deficiency',
        type: 'review',
        url: 'https://rarediseases.org/rare-diseases/long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency/',
      },
    ],
    symptoms:
      '<p>Fasting hypoglycemia, lethargy, cardiomyopathy, hepatomegaly, pigmentary retinopathy, peripheral neuropathy; mothers may develop acute fatty liver during pregnancy.</p>',
    diagnosis:
      '<p>Newborn screening acylcarnitine profile abnormalities; urinary organic acid analysis; HADHA genetic testing confirms diagnosis; assess heart, liver, and retina.</p>',
    treatment:
      '<p>Avoid fasting, high-carbohydrate low-fat diet, MCT oil supplementation, L-carnitine; IV glucose for acute crisis; cardiology co-management.</p>',
    prognosis:
      '<p>Early diagnosis and dietary management significantly improve prognosis; cardiomyopathy and retinopathy are major long-term complications; acute metabolic crisis can be life-threatening.</p>',
    sourceName:
      'GeneReviews: Long-Chain 3-Hydroxyacyl-CoA Dehydrogenase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5009,
      name: 'long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency-journey.png',
      url: '/images/diseases/long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  };

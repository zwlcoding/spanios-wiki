import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCryopyrinAssociatedPeriodicSyndromeNlrp3AssociatedSystemicAutoinflammatoryDisease: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        'NLRP3 variants can make the inflammasome overactive, causing inflammatory signals without infection. CAPS includes milder FCAS, intermediate Muckle-Wells syndrome, and more severe NOMID/CINCA on one spectrum.',
      whoToSeeFirst:
        'Recurrent fever, hive-like rash, joint pain, and red eyes without clear infection, especially starting in childhood or triggered by cold, should be assessed by rheumatology or pediatric rheumatology.',
      isGenetic:
        'It is often autosomal dominant, but new variants and mosaicism occur. Genetic counseling is recommended after diagnosis, especially with family history of fever, rash, hearing loss, or kidney disease.',
      hasTreatment:
        'Many patients benefit from IL-1 pathway treatment and long-term inflammation control. The goal is not just fever relief but prevention of hearing loss, eye or nervous system damage, kidney amyloidosis, and other complications.',
      commonDelayReason:
        'CAPS is often mistaken for recurrent infection, allergy, chronic urticaria, juvenile arthritis, or unexplained fever. Attack pattern, inflammation markers, and genetic testing help shorten the path.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent fever begins in infancy or childhood with hive-like rash, joint pain, muscle pain, or red eyes.',
        'Cold exposure, temperature change, fatigue, or stress triggers rash, fever, or whole-body discomfort.',
        'There is progressive hearing loss, headaches, aseptic meningitis-like symptoms, eye inflammation, bone or joint changes, or poor growth.',
        'Inflammation markers remain high, but infection, common allergy, and typical autoimmune disease do not explain the pattern.',
      ],
      commonWrongTurns: [
        'Repeated antibiotics for presumed infection without strong infection evidence.',
        'Treating rash as isolated allergy without tracking fever, joints, eyes, ears, and inflammation markers.',
        'Managing hearing, eye, or joint problems separately without considering autoinflammatory disease.',
        'Ruling out CAPS completely after one negative genetic test without expert review for mosaicism or variant interpretation.',
      ],
      firstDepartments: [
        'Rheumatology and immunology',
        'Pediatric rheumatology',
        'Medical genetics',
        'ENT and ophthalmology',
      ],
      diagnosisChecklist: [
        'Record each episode, duration, temperature, rash photos, triggers, joint symptoms, and eye or ear symptoms.',
        'Bring CRP, ESR, CBC, serum amyloid A, urine protein, kidney and liver tests, immune tests, and infection workups.',
        'Bring hearing, eye, neurological, imaging, and genetic testing reports.',
        'Summarize family history of recurrent fever, rash, hearing loss, kidney disease, early joint disease, or unexplained death.',
      ],
      testsToAskAbout: [
        'CRP, ESR, serum amyloid A, CBC, and urine protein during attacks and between attacks.',
        'NLRP3 and autoinflammatory disease genetic testing, with discussion of mosaicism when relevant.',
        'Hearing tests, eye examination, kidney evaluation, and neurological assessment.',
        'Tests to distinguish FMF, TRAPS, mevalonate kinase deficiency, Still disease, infection, and immunodeficiency.',
      ],
      questionsForDoctor: [
        'Does my pattern fit FCAS, Muckle-Wells, NOMID/CINCA, or another autoinflammatory disease?',
        'Is inflammation present between attacks, and should SAA and urine protein be monitored?',
        'Am I a candidate for IL-1 targeted treatment, and how will response and infection risk be monitored?',
        'How often should hearing, eyes, kidneys, nervous system, growth, and development be checked?',
        'Should relatives be tested, and what do we do if the genetic result is uncertain?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CAPS/NLRP3-AID commonly causes recurrent fever, hive-like rash, joint pain or swelling, muscle pain, fatigue, red eyes, and headaches. Milder disease may be triggered by cold and last hours to days; severe disease can cause persistent inflammation from birth or infancy.</p><p>Muckle-Wells syndrome can lead to progressive hearing loss and kidney amyloidosis risk. NOMID/CINCA can affect the central nervous system, eyes, bones, joints, growth, and development. Patients fall along a spectrum of severity.</p>',
      diagnosis:
        '<p>Diagnosis combines attack pattern, examination, inflammation markers, organ assessment, and genetic testing. CRP, ESR, serum amyloid A, CBC, and urine protein during and between attacks help show whether inflammation is persistent.</p><p>A disease-causing NLRP3 variant supports diagnosis, but mosaicism and variant interpretation can complicate testing. Clinicians also rule out infection, allergy, chronic urticaria, juvenile arthritis, familial Mediterranean fever, TRAPS, and other autoinflammatory disorders.</p>',
      treatment:
        '<p>Treatment aims for long-term control of IL-1-driven inflammation, reducing attacks and organ damage. IL-1 pathway inhibitors are important options, with the specific medicine, dose, and access determined by a rheumatology specialist.</p><p>Care includes monitoring infection risk, inflammation markers, hearing, eyes, kidneys, nervous system, growth, and development. Repeated fever medicines or long antibiotic courses do not address the core inflammatory problem.</p>',
      longTermCare:
        '<p>Long-term care includes regular tracking of attacks, rash photos, inflammation markers, urine protein or SAA, hearing, eye examinations, and kidney function. Children also need growth, joint, school, and psychosocial support.</p><p>Patients should keep genetic reports and treatment response records for specialist review and medication access processes.</p>',
      fertilityOrFamily:
        '<p>CAPS is often autosomal dominant but can be caused by a new variant or mosaicism. Reproductive risk depends on the variant and whether mosaicism is present.</p><p>Families planning pregnancy or relatives with similar symptoms should consider genetic counseling and discussion of relative testing, prenatal testing, or preimplantation genetic testing when appropriate.</p>',
      emergencySigns:
        '<p>Seek urgent care for persistent high fever with lethargy, neck stiffness or severe headache, seizures, sudden vision change, severe joint swelling with inability to walk, dehydration, suspected serious infection, or fever while on immune treatment. Tell the team about CAPS/NLRP3-AID and current medicines.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Cryopyrin-associated periodic syndromes',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/cryopyrin-associated-periodic-syndromes/',
      },
      {
        name: 'GARD: Cryopyrin associated periodic syndrome',
        type: 'official',
        url: 'https://rarediseases.info.nih.gov/diseases/10927/cryopyrin-associated-periodic-syndrome',
      },
    ],
    symptoms:
      '<p>Common features are recurrent fever, hive-like rash, joint pain, red eyes, muscle pain, and fatigue, with possible cold triggers, hearing loss, kidney, eye, nervous system, bone, or growth involvement.</p>',
    diagnosis:
      '<p>Diagnosis combines attack pattern, inflammation markers, organ assessment, NLRP3 or autoinflammatory genetic testing, and exclusion of infection, allergy, autoimmune disease, and other periodic fever syndromes.</p>',
    treatment:
      '<p>Care focuses on specialist control of IL-1-driven inflammation and monitoring infection risk, hearing, eyes, kidneys, nervous system, growth, and development.</p>',
    prognosis:
      '<p>Early recognition and sustained inflammation control can reduce hearing loss, amyloidosis, and multisystem complications; severe or delayed cases need close long-term care.</p>',
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
  };

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTumorNecrosisFactorReceptorAssociatedPeriodicSyndrome: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        'TRAPS is an autoinflammatory disease. Flares can last days to weeks and may include migratory rash, deep muscle pain, abdominal pain, chest pain, joint pain, and swelling around the eyes.',
      whoToSeeFirst:
        'Recurrent unexplained fever, high inflammatory markers, poor response to antibiotics, family history, rash, abdominal pain, or muscle pain should prompt rheumatology, pediatric rheumatology, or an autoinflammatory disease clinic.',
      isGenetic:
        'It is usually linked to TNFRSF1A variants and often follows autosomal dominant inheritance with incomplete penetrance, so genetic counseling and family assessment are important.',
      hasTreatment:
        'Treatment aims to control attacks and chronic inflammation and prevent AA amyloidosis. IL-1 inhibitors are often used when long-term control is needed; corticosteroids or other anti-inflammatory plans may be used in selected situations.',
      commonDelayReason:
        'Fever, abdominal pain, and rash are repeatedly treated as infection, allergy, gastroenteritis, or rheumatic fever. A fever diary, inflammatory marker pattern, and family history help shorten delay.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent fever episodes lasting days to weeks, with limited antibiotic benefit and improvement between attacks.',
        'Fever with migratory red rash, deep muscle pain, abdominal pain, chest pain, joint pain, eye swelling, or conjunctivitis.',
        'Family members with recurrent fever, abdominal pain, kidney disease, proteinuria, amyloidosis, or unexplained inflammatory illness.',
      ],
      commonWrongTurns: [
        'Treating every episode as infection without reviewing duration, triggers, and well intervals.',
        'Only evaluating allergy, gastrointestinal disease, or infection without considering autoinflammatory disease and TNFRSF1A testing.',
        'Using steroids for temporary relief without monitoring SAA, urine protein, and kidney function.',
      ],
      firstDepartments: [
        'Rheumatology',
        'Pediatric rheumatology',
        'Autoinflammatory or rare immune disease clinic',
        'Medical genetics',
      ],
      diagnosisChecklist: [
        'Record start and end dates of fever, maximum temperature, rash photos, abdominal, chest, muscle, and joint pain, and medicine response.',
        'Bring flare and baseline CBC, CRP, ESR, SAA, liver and kidney function, urinalysis, and infection workup.',
        'Bring family history of recurrent fever, kidney disease, proteinuria, amyloidosis, early death, and genetic reports.',
      ],
      testsToAskAbout: [
        'Whether an autoinflammatory gene panel should assess TNFRSF1A and other periodic fever genes.',
        'How CRP, ESR, SAA, and urine protein during and between attacks will guide amyloidosis risk.',
        'Whether IL-1 inhibition, short steroid courses, or other treatment is appropriate and how infection risk is monitored.',
      ],
      questionsForDoctor: [
        'Is my TNFRSF1A variant clearly disease-causing, and how should relatives be tested or followed?',
        'How can we tell ordinary infection from a TRAPS flare, and when is emergency care needed?',
        'Is the long-term goal no flares, normal inflammatory markers, or amyloidosis prevention?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>TRAPS flares often last days to weeks and can include recurrent fever, chills, fatigue, migratory red or patchy rash, deep muscle pain, abdominal pain, nausea, vomiting, chest pain, joint pain, swelling around the eyes, and conjunctivitis. Some patients have low-grade inflammation between attacks.</p><p>Uncontrolled long-term inflammation can cause AA amyloidosis with proteinuria, declining kidney function, and swelling, which is a major preventable complication.</p>',
      diagnosis:
        '<p>Diagnosis uses the recurrent fever pattern, associated symptoms, raised inflammatory markers during flares, family history, and TNFRSF1A genetic testing. Clinicians compare flare and baseline CRP, ESR, SAA, CBC, and urine protein.</p><p>Infection, cancer, autoimmune disease, inflammatory bowel disease, and other autoinflammatory diseases such as FMF, CAPS, MKD, and PFAPA must be considered.</p>',
      treatment:
        '<p>Milder or infrequent attacks may be relieved with NSAIDs or short corticosteroid courses under specialist guidance, but these may not fully prevent chronic inflammation or amyloidosis risk.</p><p>Patients needing long-term control or with persistently high inflammation are often evaluated for IL-1 inhibitors. Monitoring includes infection risk, vaccines, CBC, liver and kidney function, SAA, urine protein, and quality of life.</p>',
      longTermCare:
        '<p>Long-term care includes a flare diary, rash photos, triggers, inflammatory markers, SAA, urinalysis and protein, kidney function, and treatment safety. Children also need growth, school, and activity planning.</p><p>A written flare plan helps avoid restarting from scratch with every fever while still staying alert for real infections.</p>',
      fertilityOrFamily:
        '<p>TRAPS is usually autosomal dominant, but penetrance and severity vary. First-degree relatives can consider testing after genetic counseling; pregnancy planning should review inheritance risk and medicine safety.</p>',
      emergencySigns:
        '<p>Emergency care is needed for persistent high fever with poor responsiveness, dehydration, severe abdominal or chest pain, breathing trouble, altered consciousness, severe eye pain or vision change, reduced urination or swelling, or suspected serious infection during immune treatment.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Tumor necrosis factor receptor-associated periodic syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/tumor-necrosis-factor-receptor-associated-periodic-syndrome/',
      },
    ],
    symptoms:
      '<p>Recurrent fever lasts days to weeks and may include migratory rash, deep muscle pain, abdominal pain, chest pain, joint pain, eye swelling, conjunctivitis, and high inflammatory markers.</p>',
    diagnosis:
      '<p>Diagnosis combines fever pattern, flare and baseline inflammatory markers, SAA/urine protein, family history, and TNFRSF1A genetic testing while excluding infection, malignancy, autoimmune disease, and other periodic fever syndromes.</p>',
    treatment:
      '<p>Care aims to control flares and chronic inflammation and prevent AA amyloidosis; short anti-inflammatory or steroid treatment may help flares, while IL-1 inhibition is often considered for long-term control.</p>',
    prognosis:
      '<p>Regular monitoring and anti-inflammatory treatment can reduce attacks; persistent inflammation and AA amyloidosis are the major threats to kidney outcome.</p>',
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
  };

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseWaldenstromMacroglobulinemiaLymphoplasmacyticLymphoma: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        'WM/LPL often grows slowly. Some people only have an IgM monoclonal protein and are monitored. Treatment is usually needed for anemia, symptomatic hyperviscosity, neuropathy, lymph node or spleen enlargement, kidney disease, or cryoglobulin-related problems.',
      whoToSeeFirst:
        'IgM monoclonal protein, unexplained anemia, very high ESR, recurrent infections, bleeding, blurred vision, headache, numbness, or hyperviscosity symptoms should be assessed by hematology/lymphoma specialists.',
      isGenetic:
        'It is usually not inherited in a simple pattern. Some families show clustering of related blood disorders, but relatives are not routinely screened as for a genetic disease.',
      hasTreatment:
        'Asymptomatic patients may not need immediate treatment. When treatment is needed, options include rituximab-based therapy, BTK inhibitors, proteasome inhibitor regimens, and urgent plasma exchange for hyperviscosity.',
      commonDelayReason:
        'Early disease may be silent or look like fatigue and anemia. Without serum protein electrophoresis, IgM measurement, and marrow evaluation, diagnosis may be missed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Unexplained anemia, fatigue, weight loss, night sweats, recurrent infections, lymph nodes, or enlarged spleen.',
        'IgM monoclonal protein, high serum viscosity, headache, blurred vision, gum/nose bleeding, or confusion.',
        'Numbness or pain in feet/hands, cold-induced color change, kidney abnormalities, cryoglobulin, or cold agglutinin features.',
      ],
      commonWrongTurns: [
        'Treating one organ or one episode without connecting the long-term pattern, family history, and prior results.',
        'Watching common-disease explanations for too long without referral to the right specialty or rare disease clinic.',
        'Not keeping imaging, pathology, genetic, treatment, and follow-up records, leading to repeated workups and delays.',
      ],
      firstDepartments: [
        'Hematology',
        'Lymphoma/plasma cell disorder clinic',
        'Emergency department for hyperviscosity symptoms',
        'Neurology or nephrology as complications require',
      ],
      diagnosisChecklist: [
        'Bring CBC, IgM level, serum protein electrophoresis/immunofixation, free light chains, and serum viscosity.',
        'Bring marrow aspirate/biopsy, flow cytometry, MYD88/CXCR4 testing, imaging, and infection or bleeding history.',
        'Record headache, vision change, bleeding, neuropathy, B symptoms, and medicines.',
      ],
      testsToAskAbout: [
        'Whether this is IgM MGUS, asymptomatic WM, or symptomatic WM requiring treatment.',
        'Need for MYD88 L265P, CXCR4, beta-2 microglobulin, serum viscosity, and organ involvement testing.',
        'Whether rituximab could cause IgM flare and whether plasma exchange is needed first.',
      ],
      questionsForDoctor: [
        'Do I need treatment now or watchful waiting, and what exact findings would trigger treatment?',
        'Which regimen best balances response, infection risk, neuropathy, and quality of life for me?',
        'Which hyperviscosity symptoms mean immediate emergency care?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>WM can be asymptomatic for years. Symptoms may include anemia-related fatigue or shortness of breath, recurrent infections, enlarged lymph nodes or spleen, weight loss, night sweats, bleeding, and IgM-related hyperviscosity with headache, dizziness, blurred vision, nose or gum bleeding, or confusion.</p><p>IgM can also cause peripheral neuropathy, cryoglobulinemia, cold agglutinin disease, kidney involvement, or amyloidosis-related problems.</p>',
      diagnosis:
        '<p>Diagnosis shows IgM monoclonal protein plus bone marrow lymphoplasmacytic infiltration, supported by immunophenotyping, serum protein electrophoresis/immunofixation, IgM quantification, marrow biopsy, and often MYD88 L265P and CXCR4 testing.</p><p>Clinicians distinguish IgM MGUS, multiple myeloma, marginal zone lymphoma, chronic lymphocytic leukemia, and other small B-cell lymphomas.</p>',
      treatment:
        '<p>Asymptomatic WM is not treated just because it is diagnosed; it is monitored. Treatment indications include symptomatic anemia, hyperviscosity, organ involvement, significant B symptoms, neuropathy, or cryoglobulin-related disease.</p><p>Options include rituximab-based chemoimmunotherapy, BTK inhibitors, proteasome inhibitor regimens, and others. Hyperviscosity is an emergency usually treated first with plasma exchange, followed by lymphoma-directed therapy.</p>',
      longTermCare:
        '<p>Follow-up tracks CBC, IgM, M protein, kidney function, infection risk, vaccines, neuropathy, serum viscosity, and treatment side effects. Watchful waiting should still have a clear visit schedule and treatment triggers.</p><p>Patients should carry their WM diagnosis and seek urgent care for hyperviscosity symptoms instead of waiting for routine follow-up.</p>',
      fertilityOrFamily:
        '<p>WM is usually not inherited, and family screening is not routine. Before chemotherapy or long-term targeted treatment, discuss fertility preservation when relevant, infection prevention, and vaccination.</p>',
      emergencySigns:
        '<p>Urgent care is needed for blurred vision, severe headache, confusion, chest tightness or shortness of breath, persistent nose or gum bleeding, black stools or vomiting blood, fever or chills, or severe anemia symptoms, especially when hyperviscosity is possible.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'National Cancer Institute: Waldenström macroglobulinemia treatment',
        type: 'official',
        url: 'https://www.cancer.gov/types/lymphoma/patient/waldenstrom-treatment-pdq',
      },
    ],
    symptoms:
      '<p>Patients may be asymptomatic or have anemia, fatigue, infection, bleeding, enlarged nodes or spleen, neuropathy, cryoglobulin symptoms, and hyperviscosity with headache, blurred vision, or confusion.</p>',
    diagnosis:
      '<p>Diagnosis combines IgM monoclonal protein, marrow lymphoplasmacytic infiltration, immunophenotype, MYD88/CXCR4 testing, and distinction from IgM MGUS and other small B-cell lymphomas.</p>',
    treatment:
      '<p>Asymptomatic disease can be observed; symptomatic disease may use rituximab-based therapy, BTK inhibitors, and other regimens, with plasma exchange first for hyperviscosity emergency.</p>',
    prognosis:
      '<p>Many cases are slow-growing and manageable long term; hyperviscosity, infection, anemia, neuropathy, and treatment side effects require follow-up.</p>',
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
  };

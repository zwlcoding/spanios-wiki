import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryImmunodeficiency: DiseaseDraft = {
  ...entity(2066, 'disease-primary-immunodeficiency'),
  name: 'Primary immunodeficiency',
  nameEn: 'Primary immunodeficiency',
  alias:
    'PID; PIDD; inborn errors of immunity; China Second Rare Disease Catalog item 66',
  oneSentence:
    'Primary immunodeficiency is a large group of inherited or inborn immune system disorders that can cause recurrent, severe, or unusual infections and may also involve autoimmunity, allergy, inflammation, or cancer risk.',
  plainName:
    'A group of rare conditions where parts of the immune defense are missing or do not work well',
  prevalence:
    "Included in China's second rare disease catalog; frequency varies greatly by subtype. NIAID notes more than 200 recognized forms and about 500,000 affected people in the United States.",
  quickLook: {
    whatItIs:
      'PID is not one disease. It includes disorders of immune cells, antibodies, complement, or phagocyte function. Mild forms may be found in adulthood, while severe forms can cause life-threatening infant infections.',
    whoToSeeFirst:
      'Recurrent pneumonia, sinusitis, ear infections, deep skin infections, opportunistic infections, severe vaccine reactions, or a family history of early infection deaths should be assessed by clinical immunology, pediatric immunology, or infectious disease.',
    isGenetic:
      'Many PIDs are linked to single-gene variants with X-linked, autosomal recessive, or autosomal dominant inheritance; some remain genetically unresolved. Genetic counseling is important after diagnosis.',
    hasTreatment:
      'Care depends on subtype and may include prompt infection treatment, preventive antibiotics, immunoglobulin replacement, avoiding some live vaccines, and for severe forms stem cell transplant or targeted or gene therapy assessment.',
    commonDelayReason:
      'People may be treated repeatedly for ordinary colds, sinus infections, pneumonia, allergy, or poor constitution without the pattern of infection severity, organisms, and family history being recognized.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent, severe, prolonged, or hospitalized infections, especially pneumonia, sinusitis, otitis, skin abscesses, or sepsis.',
      'Unusual organisms, opportunistic infection, fungal infection, disseminated BCG, or unusually severe reaction to a live vaccine.',
      'Autoimmune cytopenias, enteritis, eczema-like rash, granulomas, enlarged lymph nodes, or enlarged spleen in addition to infection.',
      'Infant thrush, chronic diarrhea, poor growth, consanguinity, early male deaths, or several relatives with severe infections.',
    ],
    commonWrongTurns: [
      'Treating each infection separately without counting infections, admissions, cultures, and antibiotic response over time.',
      'Repeated antibiotics or steroids without immunoglobulin, lymphocyte subset, and vaccine-response evaluation.',
      'Giving or catching up live vaccines before significant immune deficiency has been considered.',
    ],
    firstDepartments: [
      'Clinical immunology or allergy/immunology',
      'Pediatric immunology',
      'Infectious disease',
      'Hematology or rheumatology when immune dysregulation is prominent',
    ],
    diagnosisChecklist: [
      'Bring a timeline of infection sites, organisms, culture results, imaging, medicines, and hospitalizations.',
      'Bring vaccination records, vaccine reactions, immunoglobulins, CBCs, lymphocyte subsets, and complement results.',
      'Record growth, chronic diarrhea, eczema, thrush, autoimmune disease, malignancy, and lymph node or spleen enlargement.',
      'List early infection deaths, severe male-child infections, consanguinity, miscarriages, or known genetic diagnoses in relatives.',
    ],
    testsToAskAbout: [
      'CBC with differential, IgG/IgA/IgM/IgE, lymphocyte subsets, and complement screening.',
      'Vaccine-specific antibody responses, oxidative burst testing, T-cell function, or NK-cell function when indicated.',
      'Cultures, viral loads, chest CT, and bronchiectasis assessment when lung infections recur.',
      'PID gene panel, exome sequencing, family confirmation, and relative screening after diagnosis.',
    ],
    questionsForDoctor: [
      'Which immune-deficiency category best fits my pattern, and which severe subtypes must be ruled out first?',
      'Which vaccines are safe, which live vaccines should wait, and do household vaccines need special planning?',
      'Do I need immunoglobulin replacement or preventive antimicrobials, and how will response be measured?',
      'Does this subtype have transplant, targeted treatment, gene therapy, or clinical trial options, and what is the family risk?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PID features depend on the immune pathway involved. Key clues are recurrent, severe, prolonged, or unusual infections such as pneumonia, sinusitis, otitis, deep skin infection, sepsis, fungal infection, or opportunistic infection. Children may also have poor growth, chronic diarrhea, persistent thrush, or delayed umbilical cord separation.</p><p>Some PIDs present mainly with immune dysregulation rather than infection alone, including autoimmune cytopenias, enteritis, eczema-like rash, granulomas, enlarged lymph nodes or spleen, allergy-like disease, and increased malignancy risk.</p>',
    diagnosis:
      '<p>Diagnosis starts with a detailed infection and family history, including frequency, severity, organisms, antibiotic response, vaccine reactions, growth, and autoimmune or inflammatory features.</p><p>Screening often includes CBC with differential, immunoglobulins, lymphocyte subsets, complement, vaccine antibody responses, and microbiology. Follow-up testing may assess phagocyte, T-cell, or NK-cell function, chest imaging, and genetic testing. Secondary immune deficiency from malnutrition, HIV, medicines, cancer therapy, or protein loss must also be considered.</p>',
    treatment:
      '<p>Care aims to prevent infections, protect organs, and manage immune dysregulation. Infections need prompt targeted treatment; some patients need preventive antibacterial, antifungal, or antiviral medicines. Antibody-deficiency disorders may need intravenous or subcutaneous immunoglobulin with monitoring of infection frequency and IgG trough levels.</p><p>Severe combined immunodeficiency, some phagocyte defects, and other high-risk forms may be evaluated for hematopoietic stem cell transplant. Selected conditions have enzyme replacement, targeted medicines, or gene therapy. Vaccine plans must be individualized, and many severe cellular immune defects require avoidance of live vaccines.</p>',
    longTermCare:
      '<p>Long-term care often involves immunology, infectious disease, pulmonology, gastroenterology, hematology, rheumatology, and genetics. Follow-up tracks infections, lung injury or bronchiectasis, immunoglobulin dosing, medication adverse effects, autoimmunity, inflammation, and malignancy screening.</p><p>Families should keep an emergency note listing the diagnosis, vaccine cautions, usual medicines, allergies, and specialist contacts. School and childcare planning may include fever plans, exposure management, and vaccination timing.</p>',
    fertilityOrFamily:
      '<p>Many PIDs have a defined inheritance pattern. Once the causal variant is known, parents, siblings, and future pregnancies can be discussed with genetics professionals, including carrier testing, prenatal diagnosis, or preimplantation genetic testing where appropriate and available.</p>',
    emergencySigns:
      '<p>Urgent care is needed for persistent high fever, poor responsiveness, breathing difficulty, cyanosis, severe dehydration, altered consciousness, seizures, rapidly spreading skin infection, severe abdominal pain, or suspected sepsis. Tell the emergency team about suspected or confirmed PID and recent medicines.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIAID: Primary Immune Deficiency Diseases',
      type: 'official',
      url: 'https://www.niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases-pidds',
    },
    {
      name: 'Mayo Clinic: Primary immunodeficiency diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/primary-immunodeficiency/diagnosis-treatment/drc-20376910',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Features include recurrent, severe, or unusual infections, and sometimes autoimmunity, inflammation, allergy, enlarged lymph nodes or spleen, poor growth, chronic diarrhea, or cancer risk.</p>',
  diagnosis:
    '<p>Diagnosis combines infection and family history with immunoglobulins, lymphocyte subsets, complement, vaccine responses, functional testing, microbiology, and genetic testing while excluding secondary immune deficiency.</p>',
  treatment:
    '<p>Care may include prompt infection treatment, preventive antimicrobials, immunoglobulin replacement, individualized vaccine planning, and for severe subtypes transplant, targeted treatment, or gene therapy assessment.</p>',
  prognosis:
    '<p>Outlook depends on subtype, time to diagnosis, infection and organ damage, and access to treatment. Early diagnosis and prevention can greatly reduce long-term harm.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'primary-immunodeficiency',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [44],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 420,
    name: 'primary-immunodeficiency-journey.png',
    url: '/images/diseases/primary-immunodeficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

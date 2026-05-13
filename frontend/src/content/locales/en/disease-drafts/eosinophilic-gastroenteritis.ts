import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseEosinophilicGastroenteritis: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      'EoGE is part of eosinophilic gastrointestinal disorders outside the esophagus. Symptoms depend on location and depth: mucosal disease causes diarrhea and malabsorption, muscular disease can obstruct, and serosal disease can cause ascites.',
    whoToSeeFirst:
      'Persistent abdominal pain, diarrhea, vomiting, weight loss, or protein loss should start with gastroenterology or pediatric GI; allergy history or eosinophilia should be highlighted.',
    isGenetic:
      'It is usually not a single-gene inherited disease. Allergy and immune responses may contribute, but parasites, medicines, inflammatory bowel disease, cancer, and hypereosinophilic syndrome must be ruled out.',
    hasTreatment:
      'Care may include nutrition and diet management, corticosteroids, and selected anti-allergy, immune, or biologic therapies. Response is judged by symptoms, labs, endoscopy, and biopsy when needed.',
    commonDelayReason:
      'Symptoms resemble gastritis, irritable bowel syndrome, food intolerance, inflammatory bowel disease, or parasitic infection. Insufficient biopsies or failure to exclude secondary causes delays diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Abdominal pain, nausea, vomiting, diarrhea, bloating, early fullness, or weight loss recurs despite usual treatment.',
      'Blood eosinophils or IgE are elevated, or there is allergic rhinitis, asthma, eczema, or food allergy history.',
      'There is low albumin, swelling, anemia, malnutrition, bowel wall thickening, or ascites.',
      'GI biopsies show increased eosinophils and infection, medicines, or other diseases do not explain it.',
    ],
    commonWrongTurns: [
      'Treating only gastritis, IBS, or food intolerance without multi-site biopsies.',
      'Diagnosing from eosinophilia alone without excluding parasites, medicines, malignancy, and systemic disease.',
      'Starting strict long-term food avoidance without dietitian support or objective monitoring.',
      'Not reassessing after symptom improvement, missing relapse, steroid side effects, or nutrition problems.',
    ],
    firstDepartments: [
      'Gastroenterology',
      'Pediatric gastroenterology',
      'Allergy and immunology',
      'Nutrition',
    ],
    diagnosisChecklist: [
      'Record symptoms, diet, allergy history, medicines, travel or parasite exposure, and weight changes.',
      'Bring CBC with eosinophils, IgE, albumin, ferritin, stool tests, inflammation markers, and imaging.',
      'Bring endoscopy reports, pathology from each biopsy site, and prior treatment response.',
      'Summarize asthma, rhinitis, eczema, food allergy, and family allergy history.',
    ],
    testsToAskAbout: [
      'Upper and lower endoscopy with multi-site biopsies and eosinophil counts by site.',
      'CBC with eosinophils, IgE, albumin, liver and kidney tests, iron and vitamin nutrition assessment.',
      'Evaluation for parasites, infection, medicine reaction, IBD, connective tissue disease, malignancy, and hypereosinophilic syndrome.',
      'Ultrasound, CT, MRI, ascites testing, or allergy and nutrition evaluation when indicated.',
    ],
    questionsForDoctor: [
      'Which areas are involved: stomach, small bowel, colon, or several sites?',
      'Is the disease mainly mucosal, muscular, or serosal?',
      'Have parasites, medicines, IBD, cancer, and hypereosinophilic syndrome been excluded?',
      'Which foods, if any, should be removed, and how do we prevent malnutrition?',
      'Do I need steroids or other medicines, and how will response and side effects be monitored?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>EoGE symptoms depend on the affected site and depth. Mucosal disease may cause abdominal pain, nausea, vomiting, diarrhea, bleeding, anemia, low albumin, and malabsorption. Muscular disease can cause bowel wall thickening and obstruction-like pain or vomiting. Serosal disease can cause ascites and abdominal swelling.</p><p>Many patients have allergic rhinitis, asthma, eczema, or food allergy history, and some have elevated blood eosinophils. Symptoms may flare and remit.</p>',
    diagnosis:
      '<p>Diagnosis requires gastrointestinal symptoms, tissue eosinophil-predominant inflammation, and exclusion of secondary causes. Endoscopic appearance can be nonspecific, so multi-site biopsies are important.</p><p>Clinicians must rule out parasites and infection, medicine reactions, inflammatory bowel disease, celiac disease, connective tissue disease, blood cancers, lymphoma, and hypereosinophilic syndrome. Blood eosinophilia alone is not diagnostic.</p>',
    treatment:
      '<p>Treatment aims to relieve symptoms, improve nutrition, reduce tissue inflammation, and prevent relapse. Options include diet management, nutrition support, and corticosteroids; some patients may be considered for anti-allergy medicines, leukotriene inhibitors, immune therapies, or biologics.</p><p>Food elimination should be guided by clinicians and dietitians to avoid unnecessary long-term restriction. Follow-up may include symptoms, weight, labs, albumin, endoscopy, and biopsy.</p>',
    longTermCare:
      '<p>Long-term care monitors relapse, nutrition, child growth, steroid side effects, anemia, and low albumin. A diary of diet, symptoms, medicines, and weight can help identify triggers and treatment response.</p>',
    fertilityOrFamily:
      '<p>EoGE is usually not a single-gene inherited disease, so relatives generally do not need genetic screening. Allergic tendency can cluster in families, and children may need allergy or immunology involvement.</p>',
    emergencySigns:
      '<p>Seek emergency care for severe abdominal pain with persistent vomiting, inability to drink, dehydration, black stools or heavy bleeding, worsening abdominal distension, suspected obstruction, fever with peritoneal signs, or severe swelling with shortness of breath.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Eosinophilic gastroenteritis',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/9142/eosinophilic-gastroenteritis',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Eosinophilic Gastroenteritis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK547729/',
    },
  ],
  symptoms:
    '<p>Symptoms may include recurrent abdominal pain, nausea, vomiting, diarrhea, weight loss, anemia, low-protein swelling, obstruction-like symptoms, or ascites, often with allergy history or eosinophilia.</p>',
  diagnosis:
    '<p>Diagnosis uses GI symptoms, multi-site biopsies showing eosinophilic infiltration, and exclusion of parasites, medicines, IBD, malignancy, and hypereosinophilic syndrome.</p>',
  treatment:
    '<p>Treatment includes nutrition and diet management, corticosteroids, and selected anti-allergy, immune, or biologic therapies, with response assessed by symptoms, labs, and sometimes endoscopy or biopsy.</p>',
  prognosis:
    '<p>The disease is usually not acutely fatal but can relapse and be delayed in diagnosis. Careful exclusion of secondary causes, inflammation control, and nutrition support improve long-term quality of life.</p>',
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
};

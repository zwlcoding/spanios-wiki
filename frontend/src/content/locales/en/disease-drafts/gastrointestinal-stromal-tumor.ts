import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGastrointestinalStromalTumor: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      'GIST most often arises in the stomach or small intestine. It is different from stomach or colon adenocarcinoma and often needs CD117/DOG1 immunostaining and KIT/PDGFRA molecular testing.',
    whoToSeeFirst:
      'A GI submucosal mass, abdominal mass, GI bleeding, or pathology suggesting GIST should be reviewed by GI surgery, medical oncology, gastroenterology, and pathology/molecular diagnostics.',
    isGenetic:
      'Most GISTs are sporadic. Young age, multiple tumors, family history, skin pigmentation, paraganglioma, or NF1 features should prompt evaluation for SDH-deficient, NF1-related, or familial GIST.',
    hasTreatment:
      'Localized resectable disease is usually treated with surgery. High-risk, recurrent, or metastatic disease often uses tyrosine kinase inhibitors such as imatinib and later-line drugs; PDGFRA D842V and other variants affect choices.',
    commonDelayReason:
      'Early symptoms are nonspecific or absent. GIST may be mistaken for a routine polyp, leiomyoma, ulcer bleeding, stomach cancer, or unexplained anemia.',
  },
  patientJourney: {
    whenToSuspect: [
      'Endoscopy or imaging finds a submucosal mass, GI-wall mass, or abdominal mass.',
      'There is black stool, vomiting blood, anemia, abdominal pain, early satiety, a palpable mass, or bowel obstruction.',
      'Pathology describes spindle-cell or epithelioid tumor with CD117, DOG1, or CD34 positivity.',
      'After prior GIST surgery, new liver or peritoneal nodules appear, or imaging changes during targeted therapy.',
    ],
    commonWrongTurns: [
      'Treating bleeding or anemia as gastritis or ulcer disease without identifying the source.',
      'Planning surgery without considering location, rupture risk, or neoadjuvant targeted therapy.',
      'Skipping KIT/PDGFRA testing after diagnosis, making targeted therapy less precise.',
      'Assuming surgery ends follow-up without recurrence-risk assessment and surveillance planning.',
    ],
    firstDepartments: [
      'GI surgery',
      'Medical oncology',
      'Gastroenterology',
      'Pathology or molecular diagnostics',
    ],
    diagnosisChecklist: [
      'Bring endoscopy, endoscopic ultrasound, contrast CT/MRI, PET if done, pathology, and immunostain reports.',
      'Track bleeding, anemia, abdominal pain, early satiety, weight loss, obstruction symptoms, and medication history.',
      'Record tumor size, site, mitotic count, rupture, margins, metastatic status, and surgery details.',
      'Bring KIT, PDGFRA, SDH, NF1, or other molecular testing results.',
    ],
    testsToAskAbout: [
      'Pathology review with CD117, DOG1, CD34, SDHB, and related immunostains.',
      'KIT and PDGFRA testing; if wild type or young/multifocal, ask about SDH, NF1, BRAF, and related evaluation.',
      'Contrast CT/MRI for staging and follow-up; endoscopic ultrasound when useful for a GI-wall lesion.',
      'Risk stratification using tumor size, site, mitotic count, and rupture status.',
    ],
    questionsForDoctor: [
      'Is my GIST localized, recurrent, or metastatic, and what is the recurrence risk?',
      'Should imatinib be used before surgery, and is adjuvant treatment needed afterward?',
      'How does my mutation result affect imatinib, avapritinib, or later-line choices?',
      'How often should imaging be done, and which side effects should I report quickly?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GIST often has no specific symptoms early. Clues include black stool, vomiting blood, iron-deficiency anemia, abdominal pain, early satiety, nausea, abdominal mass, obstruction, or incidental imaging findings.</p><p>It can arise in the stomach, small intestine, colorectum, esophagus, or nearby abdominal sites. Symptoms depend on size, site, direction of growth, bleeding, and spread.</p>',
    diagnosis:
      '<p>Diagnosis relies on tissue pathology, immunohistochemistry, and molecular testing. CD117 and DOG1 often support the diagnosis, while KIT and PDGFRA testing guide targeted therapy and resistance planning.</p><p>Clinicians distinguish GIST from adenocarcinoma, lymphoma, leiomyoma or leiomyosarcoma, schwannoma, and other abdominal tumors. Staging and risk assessment use size, site, mitotic count, rupture, and metastasis.</p>',
    treatment:
      '<p>Localized disease that can be safely removed is usually treated with complete surgical resection while avoiding tumor rupture. Large or difficult tumors may be treated with neoadjuvant imatinib to make surgery safer.</p><p>High-risk, recurrent, or metastatic GIST often needs targeted therapy. Drug choice and sequence depend on KIT/PDGFRA variants, prior treatment, resistance, and side effects.</p>',
    longTermCare:
      '<p>Long-term imaging follow-up is important because recurrence often involves the liver or peritoneum. Keep surgery, pathology, mitotic count, mutation testing, and targeted-therapy dose records.</p><p>During targeted therapy, monitor edema, rash, diarrhea, nausea, liver function, blood counts, cardiac risks, and drug interactions.</p>',
    fertilityOrFamily:
      '<p>Most GISTs are sporadic. Genetic counseling is useful for young, multifocal, familial, NF1-related, or SDH-deficient patterns. Targeted drugs may affect pregnancy planning, so contraception and fertility plans should be discussed before treatment.</p>',
    emergencySigns:
      '<p>Seek urgent care for vomiting blood, black stool with dizziness or palpitations, severe abdominal pain, obstruction symptoms, suspected tumor rupture or internal bleeding, fever with infection, or severe allergic or liver reactions to targeted therapy.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NCI: Gastrointestinal Stromal Tumors Treatment (Patient Version)',
      type: 'official',
      url: 'https://www.cancer.gov/types/soft-tissue-sarcoma/patient/gist-treatment-pdq',
    },
  ],
  symptoms:
    '<p>Clues include black stool, vomiting blood, anemia, abdominal pain, early satiety, abdominal mass, bowel obstruction, or an incidental GI-wall mass.</p>',
  diagnosis:
    '<p>Diagnosis uses pathology, CD117/DOG1 immunostaining, KIT/PDGFRA molecular testing, contrast imaging, and recurrence-risk assessment.</p>',
  treatment:
    '<p>Localized tumors are usually treated with surgery; high-risk, recurrent, or metastatic disease often uses tyrosine kinase inhibitors such as imatinib, adjusted by mutation and resistance pattern.</p>',
  prognosis:
    '<p>Outlook depends on size, site, mitotic count, rupture, metastasis, and mutation type. Surgery, molecular testing, and targeted therapy have substantially improved many patients’ disease course.</p>',
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
};

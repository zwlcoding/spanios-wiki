import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGastroenteropancreaticNeuroendocrineNeoplasm: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        'GEP-NEN includes neuroendocrine tumors from the stomach, intestine, appendix, rectum, and pancreas. Treatment planning depends on site, differentiation, Ki-67 or mitotic index, spread, and whether hormones are causing symptoms.',
      whoToSeeFirst:
        'If endoscopy, imaging, or pathology suggests a neuroendocrine tumor, seek multidisciplinary review at a center with oncology, GI or pancreatic surgery, pathology, radiology, and nuclear medicine experience.',
      isGenetic:
        'Most cases are sporadic. Younger onset, multifocal pancreatic NETs, parathyroid or pituitary tumors, or strong family history should prompt evaluation for MEN1, VHL, NF1, or related syndromes.',
      hasTreatment:
        'Options may include surgery, endoscopic or ablative therapy, somatostatin analogs, targeted therapy, peptide receptor radionuclide therapy, chemotherapy, and liver-directed therapy.',
      commonDelayReason:
        'Nonfunctional tumors may be silent. Functional tumors may be mislabeled as irritable bowel syndrome, ulcer disease, hypoglycemia, menopause-like flushing, or allergy.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent flushing, diarrhea, wheezing, hypoglycemia, difficult ulcers, abdominal pain, or weight loss has no clear explanation.',
        'Endoscopy or imaging finds a GI, pancreatic, or liver lesion and pathology shows synaptophysin or chromogranin A positivity.',
        'The tumor appears slow-growing but recurs, spreads, or causes hormone-related symptoms.',
        'There are multiple endocrine tumors, hyperparathyroidism, pituitary tumor, or a family history suggesting an inherited syndrome.',
      ],
      commonWrongTurns: [
        'Treating repeated GI or hormone-like symptoms without considering a neuroendocrine tumor.',
        'Accepting a NET label without confirming differentiation, grade, Ki-67, and primary site.',
        'Arriving at a new center without pathology slides, immunostains, DICOM imaging, or surgery records.',
        'Treating liver metastases as a primary liver cancer without reviewing the original tumor markers.',
      ],
      firstDepartments: [
        'Medical oncology',
        'GI or pancreatic surgery',
        'Gastroenterology',
        'Pathology or molecular diagnostics',
      ],
      diagnosisChecklist: [
        'Bring endoscopy, contrast CT/MRI, PET or somatostatin receptor imaging, pathology, and immunohistochemistry reports.',
        'Track flushing, diarrhea, hypoglycemia, ulcers, wheezing, weight change, and medication response.',
        'Record Ki-67, differentiation, mitotic count, liver spread, and all prior treatments or surgery.',
        'If a genetic syndrome is possible, collect family history of parathyroid, pituitary, pancreatic, or related tumors.',
      ],
      testsToAskAbout: [
        'Pathology review for differentiation, NET versus NEC, Ki-67, mitotic count, and neuroendocrine markers.',
        'Staging and receptor assessment with contrast CT/MRI, endoscopic ultrasound, somatostatin receptor PET/CT, or other nuclear imaging.',
        'Symptom-directed hormone tests such as 5-HIAA, gastrin, insulin/C-peptide, glucagon, or others.',
        'MEN1, VHL, NF1, or related genetic syndrome evaluation when the pattern fits.',
      ],
      questionsForDoctor: [
        'Is this a NET or NEC, and what are the grade, Ki-67, and primary site?',
        'Is the goal cure, long-term control, hormone symptom relief, or reducing tumor burden?',
        'Am I a candidate for surgery, somatostatin analogs, PRRT, targeted therapy, or chemotherapy?',
        'Which imaging and markers will be used for follow-up, and how often?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>GEP-NEN may cause no symptoms, or may cause abdominal pain, GI bleeding, obstruction, jaundice, or weight loss based on location. Functional tumors can produce flushing, diarrhea, hypoglycemia, recurrent ulcers, rash, wheezing, or electrolyte problems.</p><p>Some patients are first diagnosed after liver metastases, incidental imaging, or a small endoscopic lesion. Symptoms depend on site, size, differentiation, spread, and hormone secretion.</p>',
      diagnosis:
        '<p>Diagnosis relies on pathology and immunohistochemistry, with documentation of NET versus NEC, differentiation, Ki-67 index, and mitotic count. Imaging and endoscopy help find the primary site and stage disease.</p><p>Clinicians distinguish GEP-NEN from adenocarcinoma, pancreatic cancer, liver cancer, lymphoma, inflammatory disease, and other causes of similar hormone symptoms.</p>',
      treatment:
        '<p>Localized disease may be treated with surgery or endoscopic/local therapy. Progressive or metastatic disease may be treated with somatostatin analogs, targeted therapy, PRRT, chemotherapy, liver-directed therapy, or clinical trials.</p><p>Functional tumors also need symptom control for diarrhea, hypoglycemia, or excess acid. Care is usually multidisciplinary.</p>',
      longTermCare:
        '<p>Follow-up monitors tumor growth, hormone symptoms, nutrition, gallbladder, glucose, liver function, treatment side effects, and emotional support. Keep pathology, imaging DICOM files, molecular results, and a treatment timeline.</p>',
      fertilityOrFamily:
        '<p>Most GEP-NENs are not inherited. If MEN1, VHL, NF1, or another syndrome is suspected, genetic counseling can guide relative screening and reproductive planning.</p>',
      emergencySigns:
        '<p>Seek urgent care for heavy GI bleeding, black stool with dizziness, bowel obstruction symptoms, severe hypoglycemia, dehydration from diarrhea, rapidly worsening jaundice, infection with fever, or severe treatment reactions.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'NCI: Gastrointestinal Neuroendocrine Tumors Treatment (Patient Version)',
        type: 'official',
        url: 'https://www.cancer.gov/types/gi-neuroendocrine-tumors/patient/gi-neuroendocrine-treatment-pdq',
      },
      {
        name: 'NCI: Pancreatic Neuroendocrine Tumors Treatment (Patient Version)',
        type: 'official',
        url: 'https://www.cancer.gov/types/pancreatic/patient/pnet-treatment-pdq',
      },
    ],
    symptoms:
      '<p>Symptoms range from none to abdominal pain, bleeding, obstruction, jaundice, weight loss, flushing, diarrhea, hypoglycemia, refractory ulcers, or wheezing.</p>',
    diagnosis:
      '<p>Diagnosis uses pathology, immunohistochemistry, Ki-67 and grade, staging imaging, and hormone testing when symptoms suggest a functional tumor.</p>',
    treatment:
      '<p>Options include surgery or endoscopic local therapy, somatostatin analogs, targeted therapy, PRRT, chemotherapy, liver-directed therapy, and hormone symptom control.</p>',
    prognosis:
      '<p>Outlook varies widely by primary site, differentiation, grade, Ki-67, spread, functional symptoms, and treatment access.</p>',
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
  };

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTransthyretinAmyloidosis: DiseaseDraft = {
  ...entity(2080, 'disease-transthyretin-amyloidosis'),
  name: 'Transthyretin amyloidosis',
  nameEn: 'Transthyretin amyloidosis',
  alias:
    'ATTR; hATTR; ATTR-CM; ATTR-PN; China Second Rare Disease Catalog item 80',
  slug: 'transthyretin-amyloidosis',
  oneSentence:
    'Transthyretin amyloidosis is a systemic disease in which misfolded TTR protein deposits in nerves, the heart, and other tissues, causing peripheral neuropathy, cardiomyopathy, and autonomic or gastrointestinal symptoms.',
  plainName:
    'A systemic disease where abnormal protein deposits affect nerves, heart, and other organs',
  prevalence:
    "Included in China's second rare disease catalog; hereditary ATTR varies widely by family and region, while wild-type ATTR cardiomyopathy is more common in older adults and is probably underdiagnosed.",
  quickLook: {
    whatItIs:
      'Unstable TTR protein forms amyloid deposits. Hereditary ATTR is caused by TTR gene variants and may affect nerves and heart; wild-type ATTR has no inherited variant and often mainly affects the heart.',
    whoToSeeFirst:
      'Unexplained neuropathy, bilateral carpal tunnel syndrome, orthostatic low blood pressure, alternating diarrhea and constipation, weight loss, or unexplained thickened heart muscle or heart failure should prompt neurology, cardiology, or an amyloidosis clinic.',
    isGenetic:
      'Hereditary ATTR is autosomal dominant, but carrying a variant does not guarantee disease. Confirmed cases need TTR genetic testing and family genetic counseling. Wild-type ATTR is not managed as inherited disease.',
    hasTreatment:
      'Treatment now includes targeted options such as TTR stabilizers, RNA-silencing therapies, organ support, and rarely transplant, depending on heart or nerve involvement, genotype, and local access.',
    commonDelayReason:
      'Early disease can look like diabetic neuropathy, spine disease, carpal tunnel syndrome, ordinary heart failure, or hypertensive heart disease. Missing amyloidosis and failing to exclude AL amyloidosis can delay correct care.',
  },
  patientJourney: {
    whenToSuspect: [
      'Progressive numbness, burning pain, weakness, unsteady walking, with orthostatic symptoms, diarrhea/constipation, urinary retention, or sexual dysfunction.',
      'Thickened heart muscle, heart failure with preserved ejection fraction, arrhythmia, or conduction disease, especially with bilateral carpal tunnel syndrome, spinal stenosis, or tendon rupture history.',
      'Family history of similar neuropathy, heart failure, early death, or known TTR variant.',
    ],
    commonWrongTurns: [
      'Treating only as diabetic neuropathy, spine disease, or ordinary heart failure without connecting nerve, heart, and autonomic symptoms.',
      'Not excluding AL amyloidosis first, which can send treatment in the wrong direction.',
      'Confirming hereditary ATTR but not offering genetic counseling and planned surveillance to first-degree relatives.',
    ],
    firstDepartments: [
      'Neurology',
      'Cardiology/cardiomyopathy clinic',
      'Amyloidosis multidisciplinary clinic',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'Create a timeline of numbness, pain, weakness, falls, GI, autonomic, and heart symptoms.',
      'Bring EMG/nerve conduction, ECG, echocardiogram, cardiac MRI, bone scintigraphy, NT-proBNP/troponin, and kidney tests.',
      'Bring serum/urine immunofixation, free light chains, Congo red biopsy results, and TTR genetic testing.',
    ],
    testsToAskAbout: [
      'Whether AL amyloidosis has been fully excluded with serum and urine immunofixation and free light chains.',
      'Whether TTR genetic testing is needed to distinguish hereditary from wild-type ATTR and guide relatives.',
      'Whether cardiac findings can be confirmed by bone scintigraphy, cardiac MRI, or biopsy, and whether nerve testing should include small fiber or autonomic assessment.',
    ],
    questionsForDoctor: [
      'Is my pattern mainly cardiac, neurologic, or mixed, and how is organ damage being measured?',
      'Am I eligible for a TTR stabilizer, RNA-silencing therapy, supportive care, or a clinical trial, and what monitoring is needed?',
      'When should relatives have genetic testing and follow-up, and how should asymptomatic carriers be monitored?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>ATTR can cause peripheral neuropathy with numbness, pain, burning, weakness, muscle wasting, and unsteady gait. Autonomic involvement may cause orthostatic low blood pressure, fainting, alternating diarrhea and constipation, nausea, early satiety, urinary problems, and sexual dysfunction.</p><p>Cardiac involvement can cause thickened heart muscle, heart failure with preserved ejection fraction, arrhythmias, conduction disease, shortness of breath, swelling, and reduced exercise capacity. Carpal tunnel syndrome, spinal stenosis, tendon rupture, eye disease, or kidney involvement can be clues.</p>',
    diagnosis:
      '<p>Diagnosis first distinguishes ATTR from AL amyloidosis, usually with serum and urine immunofixation and serum free light chains. ATTR cardiomyopathy may be confirmed with bone scintigraphy, cardiac MRI, echocardiography, and sometimes biopsy; neurologic involvement is assessed with nerve conduction, EMG, and autonomic testing.</p><p>TTR genetic testing distinguishes hereditary from wild-type ATTR and guides family counseling. Tissue biopsy from fat, nerve, heart, or another involved organ can confirm amyloid by Congo red staining and protein typing.</p>',
    treatment:
      '<p>Treatment depends on the main organ involvement and access. ATTR cardiomyopathy may be evaluated for TTR stabilizers such as tafamidis and careful volume management; hereditary ATTR polyneuropathy may be evaluated for therapies that lower TTR production, including RNA-silencing medicines.</p><p>Supportive care includes neuropathic pain treatment, orthostatic hypotension and GI autonomic symptom management, arrhythmia or conduction care, nutrition, rehabilitation, and fall prevention. Transplant or clinical trials may be discussed in selected patients.</p>',
    longTermCare:
      '<p>Long-term follow-up tracks neurologic scores, walking ability, autonomic symptoms, weight and nutrition, echocardiography or cardiac MRI, NT-proBNP, troponin, rhythm, kidney function, and medication adverse effects.</p><p>Care works best when neurology, cardiology, genetics, rehabilitation, and nutrition are coordinated instead of treating each organ in isolation.</p>',
    fertilityOrFamily:
      '<p>Hereditary ATTR is autosomal dominant. First-degree relatives can consider predictive testing after informed genetic counseling. Carriers need a surveillance plan based on age, genotype, and family pattern.</p>',
    emergencySigns:
      '<p>Urgent care is needed for new or worsening chest pain, severe shortness of breath, rapidly worsening swelling, fainting, very slow or fast heart rate, fall with injury, severe dehydration, persistent vomiting or diarrhea, or sudden neurologic change.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Transthyretin amyloidosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/transthyretin-amyloidosis/',
    },
    {
      name: 'MedlinePlus: Tafamidis',
      type: 'official',
      url: 'https://medlineplus.gov/druginfo/meds/a622032.html',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Features include progressive peripheral neuropathy, autonomic symptoms, carpal tunnel syndrome, GI problems, thickened heart muscle, heart failure, rhythm or conduction disease, and sometimes kidney or eye involvement.</p>',
  diagnosis:
    '<p>Diagnosis first excludes AL amyloidosis, then uses TTR genetic testing, cardiac scintigraphy/MRI/echo, nerve testing, and sometimes tissue biopsy with amyloid protein typing.</p>',
  treatment:
    '<p>Care is tailored to cardiac, neurologic, or mixed disease with TTR stabilizers, RNA-silencing therapies, heart failure and autonomic support, rehabilitation, genetic counseling, and selected transplant or trial options.</p>',
  prognosis:
    '<p>Outlook depends on hereditary versus wild-type disease, heart and nerve involvement, and early access to appropriate therapy; coordinated multidisciplinary care improves management.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'multisystem',
  charityIds: [41],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 434,
    name: 'transthyretin-amyloidosis-journey.png',
    url: '/images/diseases/transthyretin-amyloidosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseProgressiveFibrosingInterstitialLungDisease: DiseaseDraft =
  {
    ...entity(2069, 'disease-progressive-fibrosing-interstitial-lung-disease'),
    name: 'Progressive fibrosing interstitial lung disease',
    nameEn: 'Progressive fibrosing interstitial lung disease',
    alias:
      '进行性纤维化性间质性肺疾病; China Second Rare Disease Catalog item 69',
    slug: 'progressive-fibrosing-interstitial-lung-disease',
    oneSentence:
      "Progressive fibrosing interstitial lung disease is a rare disease included in China's second rare disease catalog. Care usually starts with recognizing the main symptoms, confirming the diagnosis with the right specialty tests, and planning follow-up around the affected organs.",
    plainName:
      'A rare disease that needs specialist confirmation and follow-up: Progressive fibrosing interstitial lung disease',
    prevalence:
      "Included in China's second rare disease catalog; frequency varies by population, diagnostic criteria, and reporting source.",
    quickLook: {
      whatItIs:
        'Progressive fibrosing interstitial lung disease is included in the 2025 Chinese national rare disease guideline. Because symptoms and affected organs can vary, diagnosis and follow-up should be planned with the relevant specialist team.',
      whoToSeeFirst:
        'Start with Pulmonology or a rare disease multidisciplinary clinic when symptoms are persistent, unexplained, or involve several systems. Use emergency care for severe acute symptoms.',
      isGenetic:
        'Ask the specialist whether this diagnosis may have a genetic component, and whether genetic counseling, family testing, or reproductive planning is relevant.',
      hasTreatment:
        'Treatment may include disease-specific therapy, symptom control, surgery or procedures, rehabilitation, surveillance, and prevention of complications. The plan should be individualized by specialists.',
      commonDelayReason:
        'Diagnosis may be delayed because early symptoms can look like common conditions or be split across different specialties.',
    },
    patientJourney: {
      whenToSuspect: [
        'Symptoms persist, recur, progress, or do not fit a common diagnosis.',
        'Several organs or test results seem connected but no single common condition explains them.',
        'There is a family history, early-onset severe disease, or repeated unexplained hospital visits.',
      ],
      commonWrongTurns: [
        'Treating each symptom separately without reviewing the full pattern.',
        'Repeating routine visits without collecting prior test results for specialist review.',
        'Missing family history, pathology, imaging, or genetic testing records that could shorten the diagnostic path.',
      ],
      firstDepartments: [
        'Pulmonology',
        'Pediatric pulmonology',
        'Rare lung disease or ILD clinic',
      ],
      diagnosisChecklist: [
        'Create a timeline of symptoms, triggers, treatments tried, and family history.',
        'Bring previous lab tests, imaging, pathology, discharge summaries, and genetic reports.',
        'Ask whether specialty testing, molecular testing, pathology review, or a multidisciplinary visit is needed.',
      ],
      testsToAskAbout: [
        'Baseline blood and chemistry tests plus specialty tests for the main affected system.',
        'Imaging, functional testing, pathology, or molecular testing when recommended by the specialist.',
        'Genetic counseling or family testing when the condition may be inherited.',
      ],
      questionsForDoctor: [
        'What diagnosis is most likely, and what similar diseases still need to be ruled out?',
        'Which organs should be monitored, and what warning signs need emergency care?',
        'What is the goal of treatment and follow-up for my situation?',
        'How often should follow-up happen, and should relatives be screened?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Symptoms can vary by subtype, age, and affected organs. Keep a written symptom timeline and bring photos, lab results, imaging, and prior reports to specialist visits.</p>',
      diagnosis:
        '<p>Diagnosis usually combines medical history, examination, targeted laboratory tests, imaging or functional studies, and sometimes pathology review or genetic testing.</p>',
      treatment:
        '<p>Treatment should be planned by the relevant specialty team and may include disease-specific therapy, symptom management, rehabilitation, procedures, and long-term surveillance.</p>',
      longTermCare:
        '<p>Long-term care focuses on monitoring complications, tracking response to treatment, preparing for procedures or pregnancy when relevant, and coordinating care across specialties.</p>',
      fertilityOrFamily:
        '<p>Ask whether genetic counseling, family screening, prenatal counseling, or reproductive planning is relevant for this specific diagnosis.</p>',
      emergencySigns:
        '<p>Seek emergency care for breathing trouble, altered consciousness, seizures, severe bleeding or swelling, chest pain, severe dehydration, rapidly worsening pain, or any life-threatening symptom.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
    ],
    symptoms:
      '<p>Symptoms depend on the main affected organ system and should be reviewed by the appropriate specialist.</p>',
    diagnosis:
      '<p>Diagnosis requires targeted specialist evaluation and may include laboratory, imaging, pathology, functional, or genetic testing.</p>',
    treatment:
      '<p>Treatment is individualized and may include disease-specific therapy, supportive care, procedures, rehabilitation, and surveillance.</p>',
    prognosis:
      '<p>Outlook varies widely. Earlier diagnosis, appropriate specialty care, and regular follow-up can reduce preventable complications.</p>',
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  };

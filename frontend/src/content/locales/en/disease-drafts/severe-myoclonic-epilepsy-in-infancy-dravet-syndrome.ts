import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSevereMyoclonicEpilepsyInInfancyDravetSyndrome: DiseaseDraft =
  {
    ...entity(1105, 'catalog-china-first-rare-disease-catalog-105'),
    name: 'Severe Myoclonic Epilepsy in Infancy (Dravet Syndrome)',
    nameEn: 'Severe Myoclonic Epilepsy in Infancy (Dravet Syndrome)',
    alias: 'Dravet syndrome, SMEI, First Rare Disease Catalog item 105',
    slug: 'severe-myoclonic-epilepsy-in-infancy-dravet-syndrome',
    oneSentence:
      'Dravet syndrome is a developmental and epileptic encephalopathy beginning in infancy, often related to SCN1A variants, with seizures that may be triggered by fever, warm water, vaccine-related fever, or environmental heat.',
    plainName:
      'An early-childhood genetic epilepsy syndrome often triggered by fever',
    prevalence:
      'Included in China’s first rare disease catalog; estimates vary, and OCR source material from Zhuowei Baby Support Center cites about 1/15,700-1/40,900.',
    quickLook: {
      whatItIs:
        'Dravet syndrome is a developmental and epileptic encephalopathy beginning in infancy, often related to SCN1A variants, with seizures that may be triggered by fever, warm water, vaccine-related fever, or environmental heat.',
      whoToSeeFirst:
        'Start with Pediatric neurology, Epilepsy clinic, Emergency medicine; confirmed cases often need multidisciplinary follow-up.',
      isGenetic:
        'Many cases are related to de novo SCN1A variants, though other genes can be involved; genetic diagnosis can guide treatment and counseling.',
      hasTreatment:
        'Care focuses on reducing seizures, avoiding triggers, and having a rescue plan. Some sodium-channel blockers may worsen Dravet syndrome, so medicine choices should be made by an epilepsy specialist.',
      commonDelayReason:
        'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
    },
    patientJourney: {
      whenToSuspect: [
        'a seizure before age one is prolonged and triggered by fever or warm water',
        'seizures are one-sided or alternate sides, then multiple seizure types appear',
        'recovery after seizures is slow, or development, language, or gait begins to lag',
        'the frequency, duration, or triggers do not fit ordinary febrile seizures',
      ],
      commonWrongTurns: [
        'treating recurrent events as simple febrile seizures without epilepsy-syndrome assessment',
        'not having a home rescue plan, causing delay during prolonged seizures',
        'not confirming which antiseizure medicines may be unsuitable in Dravet syndrome',
      ],
      firstDepartments: [
        'Pediatric neurology',
        'Epilepsy clinic',
        'Emergency medicine',
        'Rehabilitation medicine',
        'Medical genetics',
      ],
      diagnosisChecklist: [
        'save seizure videos and record age, temperature, trigger, duration, laterality, and recovery',
        'bring EEG, brain MRI, genetic testing, and previous medication responses',
        'list triggers such as fever, vaccination-related fever, bathing, heat, light, and sleep loss',
      ],
      testsToAskAbout: [
        'EEG and epilepsy-syndrome assessment',
        'SCN1A and epilepsy gene testing',
        'developmental, language, motor, and behavior assessment',
      ],
      questionsForDoctor: [
        'Do these seizures fit Dravet syndrome, and is SCN1A testing needed?',
        'When and how should rescue medication be used, and when should emergency services be called?',
        'Which medicines and triggers should be avoided?',
        'How should vaccination, fever, and bathing safety be planned?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Dravet syndrome is a developmental and epileptic encephalopathy beginning in infancy, often related to SCN1A variants, with seizures that may be triggered by fever, warm water, vaccine-related fever, or environmental heat.</p><p>Warning signs can include: a seizure before age one is prolonged and triggered by fever or warm water; seizures are one-sided or alternate sides, then multiple seizure types appear; recovery after seizures is slow, or development, language, or gait begins to lag; the frequency, duration, or triggers do not fit ordinary febrile seizures. Symptoms vary by age, subtype, and organ involvement.</p>',
      diagnosis:
        '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
      treatment:
        '<p>Care focuses on reducing seizures, avoiding triggers, and having a rescue plan. Some sodium-channel blockers may worsen Dravet syndrome, so medicine choices should be made by an epilepsy specialist.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
      longTermCare:
        '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
      fertilityOrFamily:
        '<p>Many cases are related to de novo SCN1A variants, though other genes can be involved; genetic diagnosis can guide treatment and counseling.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
      emergencySigns:
        '<p>Seek urgent care for breathing difficulty, altered consciousness, prolonged seizure, choking or serious swallowing difficulty, rapidly worsening weakness or vision change, severe infection, or acute severe pain.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: First Rare Disease Catalog',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'GARD: Dravet syndrome',
        type: 'official',
        url: 'https://rarediseases.info.nih.gov/diseases/10430/dravet-syndrome',
      },
      {
        name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>Dravet syndrome is a developmental and epileptic encephalopathy beginning in infancy, often related to SCN1A variants, with seizures that may be triggered by fever, warm water, vaccine-related fever, or environmental heat. Common clues include a seizure before age one is prolonged and triggered by fever or warm water and seizures are one-sided or alternate sides, then multiple seizure types appear.</p>',
    diagnosis:
      '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
    treatment:
      '<p>Care focuses on reducing seizures, avoiding triggers, and having a rescue plan. Some sodium-channel blockers may worsen Dravet syndrome, so medicine choices should be made by an epilepsy specialist.</p>',
    prognosis:
      '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
    sourceName: 'National Health Commission: First Rare Disease Catalog',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [72, 73],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  };

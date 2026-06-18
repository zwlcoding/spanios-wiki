import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSpinalAndBulbarMuscularAtrophyKennedyDisease: DiseaseDraft =
  {
    ...entity(1109, 'catalog-china-first-rare-disease-catalog-109'),
    name: 'Spinal and Bulbar Muscular Atrophy (Kennedy Disease)',
    nameEn: 'Spinal and Bulbar Muscular Atrophy (Kennedy Disease)',
    alias: 'SBMA, Kennedy disease, First Rare Disease Catalog item 109',
    slug: 'spinal-and-bulbar-muscular-atrophy-kennedy-disease',
    oneSentence:
      'Spinal and bulbar muscular atrophy, or Kennedy disease, is an X-linked neuromuscular disorder caused by CAG repeat expansion in the AR gene, with adult-onset weakness, fasciculations, swallowing or speech difficulty, and endocrine features.',
    plainName:
      'An X-linked neuromuscular disease, usually in adult men, affecting limb and bulbar muscles',
    prevalence:
      'Included in China’s first rare disease catalog; OCR patient-organization material cites about 1-2 per 100,000, with estimates varying by population.',
    quickLook: {
      whatItIs:
        'Spinal and bulbar muscular atrophy, or Kennedy disease, is an X-linked neuromuscular disorder caused by CAG repeat expansion in the AR gene, with adult-onset weakness, fasciculations, swallowing or speech difficulty, and endocrine features.',
      whoToSeeFirst:
        'Start with Neurology, Neuromuscular clinic, Rehabilitation medicine; confirmed cases often need multidisciplinary follow-up.',
      isGenetic:
        'Kennedy disease is X-linked and caused by CAG repeat expansion in the AR gene; genetic counseling is important for families.',
      hasTreatment:
        'Current care is mainly supportive: rehabilitation, fall prevention, swallowing and nutrition support, respiratory assessment, endocrine care, and genetic counseling.',
      commonDelayReason:
        'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
    },
    patientJourney: {
      whenToSuspect: [
        'an adult man gradually develops proximal limb weakness, falls, or difficulty climbing stairs',
        'tongue or facial twitching, slurred speech, choking, or swallowing difficulty occurs',
        'fasciculations or tremor occur with gynecomastia, infertility, or testicular atrophy',
        'male relatives have similar slowly progressive weakness',
      ],
      commonWrongTurns: [
        'being labeled ALS without confirmatory AR gene testing, causing avoidable fear',
        'seeing only endocrine or breast symptoms while neuromuscular signs are missed',
        'underestimating choking, falls, and sleep-related breathing problems',
      ],
      firstDepartments: [
        'Neurology',
        'Neuromuscular clinic',
        'Rehabilitation medicine',
        'Endocrinology',
        'Medical genetics',
      ],
      diagnosisChecklist: [
        'track weakness, falls, swallowing, speech, and fasciculation timeline',
        'bring EMG, CK, hormone tests, family history, and previous diagnoses',
        'record choking, weight loss, sleep breathing, and daily function change',
      ],
      testsToAskAbout: [
        'AR gene CAG repeat-expansion testing',
        'EMG, nerve conduction, CK, and endocrine assessment',
        'swallowing, nutrition, respiratory, and rehabilitation assessment',
      ],
      questionsForDoctor: [
        'Do symptoms fit SBMA, and how is it distinguished from ALS and other myopathies?',
        'What does the AR gene result mean for family members?',
        'How should swallowing, fall, and breathing risks be monitored?',
        'What exercise intensity and assistive devices are appropriate?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Spinal and bulbar muscular atrophy, or Kennedy disease, is an X-linked neuromuscular disorder caused by CAG repeat expansion in the AR gene, with adult-onset weakness, fasciculations, swallowing or speech difficulty, and endocrine features.</p><p>Warning signs can include: an adult man gradually develops proximal limb weakness, falls, or difficulty climbing stairs; tongue or facial twitching, slurred speech, choking, or swallowing difficulty occurs; fasciculations or tremor occur with gynecomastia, infertility, or testicular atrophy; male relatives have similar slowly progressive weakness. Symptoms vary by age, subtype, and organ involvement.</p>',
      diagnosis:
        '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
      treatment:
        '<p>Current care is mainly supportive: rehabilitation, fall prevention, swallowing and nutrition support, respiratory assessment, endocrine care, and genetic counseling.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
      longTermCare:
        '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
      fertilityOrFamily:
        '<p>Kennedy disease is X-linked and caused by CAG repeat expansion in the AR gene; genetic counseling is important for families.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
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
        name: "NINDS: Kennedy's Disease",
        type: 'official',
        url: 'https://www.ninds.nih.gov/health-information/disorders/kennedys-disease',
      },
      {
        name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>Spinal and bulbar muscular atrophy, or Kennedy disease, is an X-linked neuromuscular disorder caused by CAG repeat expansion in the AR gene, with adult-onset weakness, fasciculations, swallowing or speech difficulty, and endocrine features. Common clues include an adult man gradually develops proximal limb weakness, falls, or difficulty climbing stairs and tongue or facial twitching, slurred speech, choking, or swallowing difficulty occurs.</p>',
    diagnosis:
      '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
    treatment:
      '<p>Current care is mainly supportive: rehabilitation, fall prevention, swallowing and nutrition support, respiratory assessment, endocrine care, and genetic counseling.</p>',
    prognosis:
      '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
    sourceName: 'National Health Commission: First Rare Disease Catalog',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [76],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  };

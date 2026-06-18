import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRetinitisPigmentosa: DiseaseDraft = {
  ...entity(1102, 'catalog-china-first-rare-disease-catalog-102'),
  name: 'Retinitis Pigmentosa',
  nameEn: 'Retinitis Pigmentosa',
  alias: 'RP, First Rare Disease Catalog item 102',
  slug: 'retinitis-pigmentosa',
  oneSentence:
    'Retinitis pigmentosa is a group of inherited retinal degenerations that often begin with night blindness and narrowing peripheral vision and may later affect central vision.',
  plainName:
    'An inherited retinal degeneration often first affecting night and side vision',
  prevalence:
    'Included in China’s first rare disease catalog; international estimates are often about 1 in 3,500-4,000 people.',
  quickLook: {
    whatItIs:
      'Retinitis pigmentosa is a group of inherited retinal degenerations that often begin with night blindness and narrowing peripheral vision and may later affect central vision.',
    whoToSeeFirst:
      'Start with Ophthalmology, Retina clinic, Medical genetics; confirmed cases often need multidisciplinary follow-up.',
    isGenetic:
      'Inheritance is diverse, including autosomal dominant, autosomal recessive, and X-linked forms, and RP may also be part of a syndrome.',
    hasTreatment:
      'Most types are managed with surveillance, low-vision support, treatment of complications, and genetic counseling. A small number of gene-specific conditions have approved or investigational targeted options.',
    commonDelayReason:
      'Diagnosis is often delayed when early symptoms are treated separately, such as weakness, seizures, skin signs, vision changes, or developmental delay, instead of being connected into one disease pattern.',
  },
  patientJourney: {
    whenToSuspect: [
      'night vision is poor and adapting between bright and dark environments is slow',
      'side vision narrows and the person bumps into objects from the side',
      'family members have night blindness, narrowed visual fields, or early vision loss',
      'eye examination shows bone-spicule pigmentation, narrowed retinal vessels, or waxy optic disc pallor',
    ],
    commonWrongTurns: [
      'treating only myopia, astigmatism, or dry eye without visual-field and retinal electrophysiology assessment',
      'assuming normal central acuity means there is no problem, while side vision and night vision decline',
      'not distinguishing nonsyndromic RP from syndromic retinal disease with hearing, kidney, or neurologic signs',
    ],
    firstDepartments: [
      'Ophthalmology',
      'Retina clinic',
      'Medical genetics',
      'Low-vision rehabilitation',
    ],
    diagnosisChecklist: [
      'track when night blindness, visual-field narrowing, reading, or mobility problems began',
      'bring fundus photographs, OCT, visual fields, ERG, genetic testing, and family eye history',
      'record hearing loss, balance problems, kidney symptoms, or neurologic symptoms',
    ],
    testsToAskAbout: [
      'dilated retinal examination, OCT, fundus autofluorescence, visual fields, and ERG',
      'inherited retinal disease gene testing',
      'hearing, kidney, or other syndromic assessment when symptoms suggest it',
    ],
    questionsForDoctor: [
      'Does this fit RP, and could it be syndromic retinal disease?',
      'Which genetic test is recommended, and how would results affect follow-up and family screening?',
      'Are there treatable complications such as macular edema or cataract?',
      'Where should low-vision aids and mobility training start?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Retinitis pigmentosa is a group of inherited retinal degenerations that often begin with night blindness and narrowing peripheral vision and may later affect central vision.</p><p>Warning signs can include: night vision is poor and adapting between bright and dark environments is slow; side vision narrows and the person bumps into objects from the side; family members have night blindness, narrowed visual fields, or early vision loss; eye examination shows bone-spicule pigmentation, narrowed retinal vessels, or waxy optic disc pallor. Symptoms vary by age, subtype, and organ involvement.</p>',
    diagnosis:
      '<p>Diagnosis starts with a careful symptom timeline, family history, and specialist examination, then uses targeted genetic, imaging, electrophysiology, laboratory, or functional tests depending on the disease.</p><p>Genetic results should be interpreted by clinicians familiar with the condition, because inheritance pattern, recurrence risk, and family testing differ by mechanism.</p>',
    treatment:
      '<p>Most types are managed with surveillance, low-vision support, treatment of complications, and genetic counseling. A small number of gene-specific conditions have approved or investigational targeted options.</p><p>Care plans should also address function, surveillance for complications, mental health, and family support. Avoid unverified medicines, supplements, or training programs without specialist advice.</p>',
    longTermCare:
      '<p>Long-term care works best with a concise medical summary that lists the diagnosis, key tests, genetic result, medicines, emergency signs, and main follow-up doctors. Rehabilitation, school or work accommodations, and caregiver plans should be revisited as needs change.</p>',
    fertilityOrFamily:
      '<p>Inheritance is diverse, including autosomal dominant, autosomal recessive, and X-linked forms, and RP may also be part of a syndrome.</p><p>Before family testing, predictive testing, or reproductive planning, genetic counseling can clarify the purpose, limits, and possible family impact of testing.</p>',
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
      name: 'MedlinePlus Genetics: Retinitis pigmentosa',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/retinitis-pigmentosa/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Retinitis pigmentosa is a group of inherited retinal degenerations that often begin with night blindness and narrowing peripheral vision and may later affect central vision. Common clues include night vision is poor and adapting between bright and dark environments is slow and side vision narrows and the person bumps into objects from the side.</p>',
  diagnosis:
    '<p>Diagnosis combines history, examination, specialist assessment, and disease-specific genetic, imaging, or functional testing. The exact pathway should be guided by the specialist team.</p>',
  treatment:
    '<p>Most types are managed with surveillance, low-vision support, treatment of complications, and genetic counseling. A small number of gene-specific conditions have approved or investigational targeted options.</p>',
  prognosis:
    '<p>Outlook depends on subtype, age at onset, organ involvement, and access to treatment and follow-up. Early diagnosis, structured surveillance, and family support help reduce preventable risks.</p>',
  sourceName: 'National Health Commission: First Rare Disease Catalog',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [74],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

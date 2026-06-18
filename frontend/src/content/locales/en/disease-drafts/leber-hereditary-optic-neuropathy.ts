import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLeberHereditaryOpticNeuropathy: DiseaseDraft = {
  ...entity(5008, 'disease-leber-hereditary-optic-neuropathy'),
  name: 'Leber Hereditary Optic Neuropathy',
  nameEn: 'Leber Hereditary Optic Neuropathy',
  alias: 'LHON; Leber optic atrophy; China First Rare Disease Catalog item 62',
  slug: 'leber-hereditary-optic-neuropathy',
  oneSentence:
    'Leber hereditary optic neuropathy is a maternally inherited mitochondrial disease caused by mitochondrial DNA mutations leading to optic nerve degeneration; it presents with painless, subacute central vision loss, most commonly in young men, and currently has no curative treatment.',
  plainName: 'A vision-destroying eye disease inherited from the mother',
  prevalence:
    'Prevalence is approximately 1 in 30,000–50,000; most common in young men aged 15–35 years; male-to-female ratio is approximately 3:1 to 8:1.',
  searchIntents: [
    'Leber hereditary optic neuropathy symptoms',
    'LHON vision recovery',
    'Leber optic atrophy inheritance',
    'LHON treatment idebenone',
    'Leber mitochondrial gene',
  ],
  quickLook: {
    whatItIs:
      'Mitochondrial DNA (mtDNA) mutations cause degeneration of retinal ganglion cells and their axons, leading to optic nerve atrophy and central vision loss.',
    whoToSeeFirst:
      'Neuro-ophthalmology for painless, progressive vision loss, especially central blurring and color vision impairment.',
    isGenetic:
      'Maternally inherited (mitochondrial inheritance). All children of an affected mother may carry the mutation, but males are more likely to develop symptoms. The three most common mutations are m.11778G>A, m.3460G>A, and m.14484T>C.',
    hasTreatment:
      'There is no cure. Idebenone may help some patients in the acute phase. Gene therapy is under investigation. Low-vision aids and rehabilitation can improve quality of life.',
    commonDelayReason:
      'Early symptoms (mild monocular vision decline) are often attributed to eye strain or refractive error; diagnosis is frequently missed until the second eye becomes affected.',
  },
  patientJourney: {
    whenToSuspect: [
      'Painless, subacute vision decline in one eye with a central scotoma.',
      'Impaired color vision (especially red-green discrimination).',
      'Similar symptoms in the second eye weeks to months later.',
      'Family history of similar vision loss in maternal relatives.',
    ],
    commonWrongTurns: [
      'Attributing symptoms to eye strain or worsening myopia without fundus and visual field examination.',
      'Misdiagnosing as optic neuritis and prescribing high-dose corticosteroids without effect.',
      'Failing to ask about family history and missing the mitochondrial inheritance pattern.',
      'Delayed referral to a neuro-ophthalmology specialist.',
    ],
    firstDepartments: [
      'Neuro-ophthalmology',
      'Medical genetics',
      'Low-vision rehabilitation',
    ],
    diagnosisChecklist: [
      'Document the speed, severity, and associated symptoms of vision loss.',
      'Visual acuity, color vision, and visual field testing (central scotoma is characteristic).',
      'Fundus examination: optic disc hyperemia and vascular tortuosity in the acute phase; optic disc pallor in the chronic phase.',
      'OCT showing retinal nerve fiber layer thinning.',
      'Mitochondrial DNA testing for the three common mutations.',
      'Ask about maternal family history.',
    ],
    testsToAskAbout: [
      'Visual acuity, color vision, and visual field testing.',
      'Fundus photography and OCT.',
      'Mitochondrial DNA mutation analysis.',
      'Visual evoked potentials (VEP).',
      'Exclusion of other optic neuropathies (optic neuritis, ischemic optic neuropathy).',
    ],
    questionsForDoctor: [
      'Which mitochondrial mutation do I have, and what does it mean for my prognosis?',
      'Would idebenone help me, and for how long should I take it?',
      'What is the chance that my other eye will be affected?',
      'Should my siblings and children be screened?',
      'What low-vision aids are available to help me?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The classic presentation is painless, subacute central vision loss in one eye, progressing over weeks to months. Patients often describe a central cloud or dark spot (central scotoma) and impaired color vision (especially red-green). Approximately 50% of patients develop similar symptoms in the fellow eye within 6–8 weeks. In the acute phase, fundus examination may show optic disc hyperemia, peripapillary telangiectasia, and vascular tortuosity; in the chronic phase, the optic disc becomes pale and atrophic. Rare associated features include cardiac conduction abnormalities (pre-excitation syndromes), skeletal myopathy, and tremor.</p>',
    diagnosis:
      '<p>Diagnosis is based on the characteristic clinical picture (young men, painless subacute bilateral central vision loss, central scotoma), fundus findings, and visual field testing. OCT demonstrates thinning of the retinal nerve fiber layer (especially temporal and superior). Definitive diagnosis requires mitochondrial DNA testing; the three most common pathogenic mutations account for >90% of cases: m.11778G>A (in ND4, poorest visual prognosis), m.3460G>A (in ND1), and m.14484T>C (in ND6, highest chance of spontaneous visual recovery). Differential diagnosis includes optic neuritis, ischemic optic neuropathy, compressive optic neuropathy, and toxic/nutritional optic neuropathies.</p>',
    treatment:
      '<p>There is currently no curative treatment. Idebenone, a short-chain benzoquinone that acts as a mitochondrial antioxidant, is approved for LHON in Europe and may provide some benefit if started in the acute phase (within 1 year of onset), but it cannot reverse established optic atrophy. Avoidance of known triggers such as smoking and heavy alcohol consumption is recommended. Gene therapy (AAV2-ND4) is in clinical trials. Low-vision aids (magnifiers, electronic vision devices, screen-reading software) and orientation and mobility training can substantially improve quality of life. Psychological support is important.</p>',
    longTermCare:
      '<p>Regular ophthalmologic follow-up is needed to monitor vision changes in the fellow eye. Avoid known precipitating factors (smoking, alcohol, and certain drugs such as linezolid and aminoglycoside antibiotics). Maternal relatives should be offered genetic counseling and screening. Patients with severe vision impairment should be referred early for low-vision rehabilitation services, including vocational training and psychological support.</p>',
    fertilityOrFamily:
      '<p>Maternal inheritance. All children of an affected mother inherit the mitochondrial mutation, but males do not transmit the mutation to their offspring. Female carriers can pass the mutation to all their children. Genetic counseling is very important: for carrier women planning pregnancy, options include oocyte donation or mitochondrial replacement therapy (where legally available). Prenatal diagnosis and preimplantation genetic testing have limited utility for LHON because carrying a mutation does not necessarily mean the individual will develop symptoms.</p>',
    emergencySigns:
      '<p>Sudden monocular or binocular vision loss, severe eye pain, headache with nausea and vomiting (to exclude acute glaucoma or optic neuritis) require immediate evaluation.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Leber Hereditary Optic Neuropathy',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1174/',
    },
    {
      name: 'NORD: Leber Hereditary Optic Neuropathy',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/leber-hereditary-optic-neuropathy/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Painless subacute central vision loss in one eye, color vision impairment, central scotoma; fellow eye typically affected weeks to months later; chronic optic disc pallor.</p>',
  diagnosis:
    '<p>Characteristic clinical picture plus visual field and OCT; mitochondrial DNA mutation testing confirms diagnosis (m.11778G>A, m.3460G>A, m.14484T>C).</p>',
  treatment:
    '<p>No cure; idebenone may help in the acute phase; avoid smoking and alcohol; gene therapy under investigation; low-vision rehabilitation and psychological support.</p>',
  prognosis:
    '<p>m.14484T>C carries the best chance of visual recovery; m.11778G>A has the poorest prognosis; most patients are left with vision worse than 20/200; early intervention improves quality of life.</p>',
  sourceName: 'GeneReviews: Leber Hereditary Optic Neuropathy',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1174/',
  categorySlug: 'ophthalmologic',
  charityIds: [52],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5008,
    name: 'leber-hereditary-optic-neuropathy-journey.png',
    url: '/images/diseases/leber-hereditary-optic-neuropathy-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

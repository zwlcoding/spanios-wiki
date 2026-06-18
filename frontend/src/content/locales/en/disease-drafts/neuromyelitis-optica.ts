import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeuromyelitisOptica: DiseaseDraft = {
  ...entity(5027, 'disease-neuromyelitis-optica'),
  name: 'Neuromyelitis Optica',
  nameEn: 'Neuromyelitis Optica',
  alias: 'NMO, neuromyelitis optica spectrum disorder, Devic disease',
  icd10Code: 'G36.0',
  slug: 'neuromyelitis-optica',
  oneSentence:
    'Neuromyelitis optica spectrum disorder (NMOSD) is an autoimmune inflammatory demyelinating disease of the central nervous system characterized by anti-aquaporin-4 antibodies (AQP4-IgG), primarily affecting the optic nerves and spinal cord, causing recurrent optic neuritis and longitudinally extensive transverse myelitis.',
  plainName:
    'A rare disease where the immune system attacks the optic nerves and spinal cord, causing repeated blindness and paralysis',
  prevalence:
    'Worldwide prevalence is approximately 0.5-4 per 100,000; more common in Asian and African populations, with a marked female predominance (approximately 4-9:1). Detection rates in China are rising with AQP4 antibody testing availability.',
  searchIntents: [
    'neuromyelitis optica symptoms',
    'NMO optic neuritis',
    'AQP4 antibody positive',
    'neuromyelitis optica treatment drugs',
    'NMOSD vs multiple sclerosis',
  ],
  quickLook: {
    whatItIs:
      'This is an autoimmune disease of the central nervous system in which patients produce anti-aquaporin-4 (AQP4) antibodies that attack the optic nerves and spinal cord, causing recurrent vision loss and limb paralysis. Unlike multiple sclerosis, NMOSD rarely involves the brain and requires different treatment.',
    whoToSeeFirst:
      'Neurology, especially neuroimmunology specialists. Seek immediate evaluation for acute vision loss, limb weakness, or bladder/bowel dysfunction.',
    isGenetic:
      'Not a traditional inherited disease, but there is some genetic susceptibility (e.g., HLA-DRB1*03:01). Environmental factors such as infection may trigger onset.',
    hasTreatment:
      'Acute attacks are treated with high-dose corticosteroids or plasma exchange; long-term immunosuppression (rituximab, satralizumab, eculizumab, etc.) significantly reduces relapses and protects neurological function.',
    commonDelayReason:
      'First episode of optic neuritis treated as a common eye disease; myelitis misdiagnosed as cervical spondylosis or cerebrovascular disease; misdiagnosed as multiple sclerosis with interferon beta use (which may worsen NMOSD); limited AQP4 antibody testing in primary care.',
  },
  patientJourney: {
    whenToSuspect: [
      'Acute monocular or binocular vision loss, eye pain, rapidly worsening over hours to days.',
      'Acute limb weakness, sensory abnormalities (numbness, band-like sensation), often bilateral lower limbs, with urinary/bowel dysfunction.',
      'Severe and persistent hiccups, nausea, and vomiting (area postrema syndrome suggesting medulla involvement).',
      'Recurrent episodes with partial recovery but accumulating disability after each attack.',
      'Positive serum AQP4-IgG or MOG-IgG.',
    ],
    commonWrongTurns: [
      'Optic neuritis managed only as an ophthalmologic condition without AQP4 antibody testing and spinal MRI.',
      'Myelitis misdiagnosed as cervical spondylosis, disc herniation, or non-specific myelitis.',
      'Misdiagnosed as multiple sclerosis with interferon beta or fingolimod use (which may worsen NMOSD).',
      'Too rapid steroid taper in the acute phase leading to early relapse.',
      'Failure to maintain long-term immunosuppression, leading to frequent relapses and accumulated disability.',
    ],
    firstDepartments: [
      'Neurology (neuroimmunology specialty)',
      'Ophthalmology (when optic neuritis is the first symptom)',
      'Physical Medicine and Rehabilitation (during recovery)',
      'Urology (when voiding dysfunction is severe)',
    ],
    diagnosisChecklist: [
      'Document timing, symptoms, location, and recovery of each episode in detail.',
      'Bring all brain, optic nerve, and spinal cord MRI films and reports.',
      'Bring AQP4-IgG and MOG-IgG test results.',
      'List all prior medications, especially immunomodulatory drugs.',
      'Ask the physician whether the 2015 NMOSD international consensus diagnostic criteria are met.',
    ],
    testsToAskAbout: [
      'Serum AQP4-IgG antibody testing (core diagnostic marker).',
      'Serum MOG-IgG antibody testing (to exclude MOG antibody-associated disease).',
      'Brain MRI (to exclude typical periventricular MS lesions).',
      'Optic nerve MRI (acute optic nerve swelling and enhancement).',
      'Spinal cord MRI (longitudinally extensive transverse myelitis, ≥3 vertebral segments).',
      'Cerebrospinal fluid analysis (elevated cell count, lower oligoclonal band positivity than MS).',
      'Visual evoked potentials (VEP).',
    ],
    questionsForDoctor: [
      'Is my AQP4 antibody positive or MOG antibody positive? How does this affect treatment?',
      'Should I receive high-dose steroids or plasma exchange for the acute attack?',
      'What relapse-prevention medications are available? What are their benefits, risks, and costs?',
      'Does NMOSD affect fertility? How should medications be adjusted during pregnancy and lactation?',
      'What infection prevention recommendations should I follow? Which vaccinations are safe?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The core clinical syndromes of NMOSD include: optic neuritis (acute monocular or binocular vision loss, visual field defects, color vision impairment, pain with eye movement); longitudinally extensive transverse myelitis (acute limb weakness, sensory disturbance, urinary/bowel dysfunction, spinal cord lesion ≥3 vertebral segments); area postrema syndrome (intractable hiccups, nausea, vomiting); brainstem syndrome (vertigo, diplopia, ataxia); and diencephalic syndrome (somnolence, hyponatremia).</p><p>Women are predominantly affected, with onset typically in the 30s-40s. Each attack can cause severe neurological deficits, and recurrent attacks lead to accumulated disability. Some patients may have coexisting autoimmune diseases (e.g., systemic lupus erythematosus, Sjogren syndrome, thyroid disease).</p>',
    diagnosis:
      '<p>The 2015 international consensus diagnostic criteria use AQP4-IgG as the core marker. AQP4-IgG-positive patients can be diagnosed with 1 core clinical feature; AQP4-IgG-negative patients require multiple core clinical features with exclusion of other diagnoses.</p><p>MRI features: optic nerve MRI may show T2 hyperintensity and enhancement; spinal MRI shows long-segment lesions (≥3 vertebral segments) with swelling and enhancement in the acute phase. Differential diagnosis includes multiple sclerosis (short, multifocal, periventricular typical lesions), MOG antibody-associated disease, acute disseminated encephalomyelitis, and spinal cord vascular disease. Serum MOG-IgG testing helps exclude MOG-associated disease.</p>',
    treatment:
      '<p>Acute attacks: high-dose methylprednisolone intravenous pulse (usually 500-1000 mg/day for 3-5 days), with plasma exchange or immunoadsorption for refractory or severe cases. Area postrema syndrome may require aggressive plasma exchange.</p><p>Long-term relapse prevention is the key to management. First-line agents include: rituximab (anti-CD20 monoclonal antibody, most commonly used), satralizumab (anti-IL-6 receptor), eculizumab (complement C5 inhibitor for refractory AQP4-positive cases), tocilizumab, mycophenolate mofetil, and azathioprine. Drug selection should consider efficacy, accessibility, cost, and patient preference. Interferon beta and fingolimod are contraindicated (may worsen NMOSD).</p>',
    longTermCare:
      '<p>Long-term follow-up includes: regular neurological assessment (EDSS score), visual acuity and visual field testing, and spinal cord function evaluation; monitoring for immunosuppressant side effects (infection, liver function, blood counts); infection prevention (infection is a common relapse trigger); maintaining adequate vitamin D levels.</p><p>Lifestyle management: avoid overexertion and high-temperature environments; smoking cessation; regular sleep schedule; moderate exercise within functional limits; timely vaccination (live vaccines should be avoided during immunosuppression). Carry a disease diagnosis card and inform healthcare providers of the NMOSD diagnosis and medications.</p>',
    fertilityOrFamily:
      '<p>NMOSD is not a single-gene inherited disease, but there is some genetic susceptibility. The disease itself does not affect fertility. Relapse risk may increase during pregnancy (especially postpartum). Some medications are relatively safe during pregnancy (e.g., azathioprine, prednisone), while rituximab and eculizumab require careful assessment. Women planning pregnancy should consult their neurologist to adjust medications.</p>',
    emergencySigns:
      '<p>Seek immediate care for: acute monocular or binocular vision loss, new limb weakness or paralysis, acute urinary retention, severe hiccups with vomiting, breathing difficulty, or dysphagia. These are typical manifestations of NMOSD acute attacks and require prompt initiation of steroid pulse or plasma exchange to reduce permanent neurological damage.</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Neuromyelitis Optica Spectrum Disorder',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK572108/',
    },
    {
      name: 'GeneReviews: Neuromyelitis Optica Spectrum Disorder',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1226/',
    },
    {
      name: 'Orphanet: Neuromyelitis optica spectrum disorder',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/635',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Recurrent optic neuritis (vision loss, eye pain) and longitudinally extensive transverse myelitis (limb weakness, sensory disturbance, urinary/bowel dysfunction), with possible intractable hiccups and nausea.</p>',
  diagnosis:
    '<p>Serum AQP4-IgG positivity is the core marker, combined with typical optic nerve and spinal cord MRI findings, using the 2015 international consensus criteria. MS and MOG antibody-associated disease must be excluded.</p>',
  treatment:
    '<p>Acute high-dose steroids or plasma exchange; long-term immunosuppression (rituximab, satralizumab, eculizumab, etc.) to prevent relapses. Interferon beta is contraindicated.</p>',
  prognosis:
    '<p>Untreated NMOSD has high relapse rates with severe disability per attack. Standard immunosuppressive therapy significantly reduces relapses and protects neurological function.</p>',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK572108/',
  categorySlug: 'neurological',
  charityIds: [14, 15, 16, 17, 18, 59],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3527,
    name: 'neuromyelitis-optica-journey.png',
    url: '/images/diseases/neuromyelitis-optica-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'treatable'],
};

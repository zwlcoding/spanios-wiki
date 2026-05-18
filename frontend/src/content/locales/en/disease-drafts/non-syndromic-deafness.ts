import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNonSyndromicDeafness: DiseaseDraft = {
  ...entity(5029, 'disease-non-syndromic-deafness'),
  name: 'Non-Syndromic Deafness',
  nameEn: 'Non-Syndromic Deafness',
  alias: 'hereditary non-syndromic hearing loss, NSHL, congenital deafness',
  icd10Code: 'H90.3',
  slug: 'non-syndromic-deafness',
  oneSentence:
    'Non-syndromic deafness refers to inherited hearing loss without associated abnormalities in other organ systems; approximately 50% of cases are caused by GJB2 gene mutations, making it the most common cause of congenital deafness, and early intervention with hearing aids or cochlear implantation can enable normal speech and language development.',
  plainName:
    'Inherited deafness where only hearing is affected and the rest of the body is healthy',
  prevalence:
    'Worldwide congenital deafness occurs in approximately 1-3 per 1,000 newborns, with approximately 50-60% being genetic, and approximately 70% of genetic deafness being non-syndromic. Newborn hearing screening coverage in China exceeds 90%, with GJB2 mutations being the most common cause.',
  searchIntents: [
    'congenital deafness causes',
    'GJB2 mutation deafness',
    'non-syndromic deafness cochlear implant',
    'newborn hearing screening failed',
    'hereditary deafness genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This refers to hearing loss as the only clinical manifestation, without involvement of other organ systems. The most common cause is GJB2 gene (connexin 26) mutations, which disrupt potassium ion recycling in the cochlea. Most cases are congenital or prelingual, though some types are late-onset.',
    whoToSeeFirst:
      'Otolaryngology (hearing specialty) or pediatric hearing center. Infants who fail newborn hearing screening should complete diagnostic testing within 3 months. Children with severe or profound deafness should be evaluated for cochlear implantation as early as 6-12 months.',
    isGenetic:
      'The vast majority are inherited. Inheritance patterns are diverse: approximately 80% are autosomal recessive (e.g., biallelic GJB2 mutations), 15-20% autosomal dominant, and 1-2% X-linked or mitochondrial. GJB2 mutation carriers occur in approximately 2-3% of the general population.',
    hasTreatment:
      'Hearing aids are effective for mild-to-moderate deafness; severe or profound deafness in children can be treated with early cochlear implantation (typically 6-12 months), enabling near-normal speech and language development. Gene therapy is in clinical trials.',
    commonDelayReason:
      'Newborns who fail hearing screening do not return for follow-up; parents mistakenly believe the child is simply "a late talker," delaying diagnosis; limited diagnostic equipment in primary care; genetic testing not performed promptly; lack of awareness about optimal timing for cochlear implantation.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn fails initial or repeat hearing screening.',
      'Infant shows poor response to sound, does not turn toward sounds, or is not easily awakened by noise.',
      'After 6 months, still not babbling or responding to name.',
      'At 1-2 years, language development is markedly behind peers.',
      'Family history of congenital deafness or late-onset hearing loss.',
    ],
    commonWrongTurns: [
      'Newborn fails hearing screening but parents do not bring the child back for follow-up.',
      'Hearing impairment mistaken for "late talking," waiting for the child to speak naturally.',
      'Genetic testing not performed, preventing clarification of hereditary cause and family guidance.',
      'Severely deaf children not evaluated for cochlear implantation in time, missing the optimal speech development window.',
      'Believing that one normal-hearing ear is sufficient, neglecting the impact of single-sided deafness on learning.',
    ],
    firstDepartments: [
      'Otolaryngology (hearing specialty)',
      'Pediatric Hearing Center',
      'Rehabilitation (audiology and speech therapy)',
      'Genetic Counseling',
    ],
    diagnosisChecklist: [
      'Bring newborn hearing screening reports.',
      "Document the child's response to sound (sound localization, response to name, language milestones).",
      'Ask the physician whether genetic testing for deafness is needed (GJB2, SLC26A4, MT-RNR1, etc.).',
      'Understand family history, especially consanguinity.',
    ],
    testsToAskAbout: [
      'Auditory brainstem response (ABR, gold standard for confirming hearing loss).',
      'Otoacoustic emissions (OAE, assess outer hair cell function in the cochlea).',
      'Tympanometry (assess middle ear function).',
      'Genetic deafness panel (GJB2, SLC26A4, MT-RNR1, GJB3, and other common genes).',
      'Temporal bone CT or inner ear MRI (to exclude enlarged vestibular aqueduct and other structural abnormalities).',
      'Ophthalmologic examination, ECG, and thyroid function (to exclude syndromic deafness).',
    ],
    questionsForDoctor: [
      'What is the degree of hearing loss? Is it conductive, sensorineural, or mixed?',
      'Can genetic testing identify the cause? Is it a GJB2 mutation or another gene?',
      'Do we need hearing aids? When should we evaluate for cochlear implantation?',
      'Does single-sided deafness require intervention?',
      'Should family members (including parents planning future pregnancies) undergo genetic testing and counseling?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The only clinical manifestation of non-syndromic deafness is hearing loss, which may be unilateral or bilateral. By onset time, it is divided into congenital (present at birth) and late-onset (childhood, adolescence, or adulthood). By severity, it ranges from mild (26-40 dB), moderate (41-60 dB), severe (61-80 dB), to profound (>80 dB).</p><p>GJB2-related deafness is typically bilateral, symmetric, sensorineural, and non-progressive, with severity ranging from mild to profound. SLC26A4 (Pendred syndrome gene, but can present without thyroid abnormalities as non-syndromic) related deafness is often associated with enlarged vestibular aqueduct syndrome, with fluctuating hearing loss that can be triggered or worsened by head trauma. Mitochondrial 12S rRNA (MT-RNR1) mutation carriers are extremely sensitive to certain aminoglycoside antibiotics (e.g., gentamicin, streptomycin), and exposure can cause permanent deafness.</p>',
    diagnosis:
      '<p>Newborn hearing screening is the key to early detection, using otoacoustic emissions (OAE) and/or automated auditory brainstem response (AABR). Infants who fail screening should complete diagnostic ABR, tympanometry, and OAE testing before 3 months. After confirming hearing loss, genetic testing should be performed.</p><p>Common deafness gene mutation hotspots in China: GJB2 (c.235delC most common), SLC26A4 (IVS7-2A>G most common), MT-RNR1 (m.1555A>G and m.1494C>T). Genetic testing can identify the cause, guide prognosis assessment, and enable family screening. Temporal bone imaging helps identify inner ear structural abnormalities (e.g., enlarged vestibular aqueduct, Mondini malformation).</p>',
    treatment:
      '<p>Hearing intervention follows the principles of early detection, early diagnosis, and early intervention. Mild-to-moderate deafness: hearing aids combined with auditory and speech rehabilitation. Severe or profound deafness: evaluation for cochlear implantation indications, typically recommended by 6-12 months of age for optimal speech and language development. Bilateral implantation is superior to unilateral.</p><p>Children with enlarged vestibular aqueduct should avoid head trauma and drastic barometric pressure changes. Individuals carrying MT-RNR1 mutations and their maternal relatives should avoid aminoglycoside antibiotics for life. Gene therapy (e.g., OTOF gene therapy) has shown promise in clinical trials.</p>',
    longTermCare:
      '<p>Long-term management includes: regular hearing monitoring (every 3-6 months, especially in infancy); hearing aid or cochlear implant programming and maintenance; continuous auditory and speech rehabilitation; educational support (inclusive education or special education resources); and psychosocial support.</p><p>Parents should learn communication techniques with their child (e.g., face-to-face, slower speech, visual aids). Long-term follow-up for mapping is needed after cochlear implantation. For late-onset deafness, patients should be educated about avoiding ototoxic medications and noise exposure.</p>',
    fertilityOrFamily:
      '<p>Non-syndromic deafness has diverse inheritance patterns. With autosomal recessive inheritance (e.g., GJB2), parents are carriers and offspring have a 25% risk; with autosomal dominant inheritance, affected individuals have a 50% transmission risk; with X-linked inheritance, male patients do not transmit the disease but daughters are carriers, and female carriers have a 50% risk for affected sons and 50% carrier daughters; mitochondrial inheritance is transmitted only through the maternal line.</p><p>Prenatal diagnosis and preimplantation genetic testing (PGT) are available for high-risk families. Carrier screening can identify hearing-normal parents who carry pathogenic mutations.</p>',
    emergencySigns:
      '<p>Non-syndromic deafness itself has no acute crises. However, seek care for: sudden malfunction of hearing aids or cochlear implants causing abrupt communication breakdown; sudden hearing loss after head trauma (especially in children with enlarged vestibular aqueduct); or sudden unilateral deafness (other causes such as viral infection or inner ear hemorrhage need to be excluded).</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Deafness and Hereditary Hearing Loss Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1434/',
    },
    {
      name: 'NIDCD: Hearing Loss and Deafness',
      type: 'review',
      url: 'https://www.nidcd.nih.gov/health/hearing-loss-deafness',
    },
    {
      name: 'Orphanet: Nonsyndromic genetic deafness',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/87884',
    },
  ],
  symptoms:
    '<p>The only clinical manifestation is hearing loss, which may be unilateral or bilateral, ranging from mild to profound. GJB2-related deafness is typically congenital bilateral symmetric sensorineural hearing loss.</p>',
  diagnosis:
    '<p>Newborn hearing screening combined with diagnostic ABR, OAE, tympanometry, and genetic testing. Common mutations in China include GJB2 c.235delC, SLC26A4 IVS7-2A>G, and MT-RNR1 m.1555A>G.</p>',
  treatment:
    '<p>Mild-to-moderate deafness is managed with hearing aids; severe or profound deafness benefits from early cochlear implantation (optimal by 6-12 months), combined with auditory and speech rehabilitation. Avoid ototoxic medications.</p>',
  prognosis:
    '<p>Early intervention (especially within 6 months) enables deaf children to achieve near-normal speech and language abilities. Cochlear implant outcomes are closely related to age at implantation.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1434/',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3529,
    name: 'non-syndromic-deafness-journey.png',
    url: '/images/diseases/non-syndromic-deafness-journey.png',
  },
  tagSlugs: ['genetic-counseling', 'pediatric', 'treatable'],
};

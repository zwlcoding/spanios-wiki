import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLeberCongenitalAmaurosis: DiseaseDraft = {
  ...entity(2043, 'disease-leber-congenital-amaurosis'),
  name: 'Leber congenital amaurosis',
  nameEn: 'Leber congenital amaurosis',
  alias:
    'LCA, early-onset severe retinal dystrophy, China Second Rare Disease Catalog item 43',
  slug: 'leber-congenital-amaurosis',
  oneSentence:
    'Leber congenital amaurosis is a group of inherited retinal diseases beginning in infancy or early childhood, causing severe visual impairment, nystagmus, light sensitivity, or night blindness and requiring inherited-retina specialist care.',
  plainName:
    'An inherited retinal disease where severe vision problems start very early in life',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics describes LCA as a rare condition accounting for a small share of retinal dystrophies.",
  quickLook: {
    whatItIs:
      'LCA is not one gene disease. Many genes can disrupt early retinal function, and the exact gene affects progression, associated problems, and treatment opportunities.',
    whoToSeeFirst:
      'An infant who does not track light or faces, has nystagmus, light sensitivity, eye pressing, night vision trouble, or delayed visual development should see pediatric ophthalmology or an inherited retinal disease clinic.',
    isGenetic:
      'Most LCA is autosomal recessive, though other patterns occur. Genetic counseling helps with family testing, recurrence risk, and treatment eligibility.',
    hasTreatment:
      'Most types are managed with low-vision rehabilitation, educational support, and complication care. Patients with biallelic RPE65 variants and viable retinal cells may be evaluated for gene therapy where available.',
    commonDelayReason:
      'Infants cannot describe poor vision, so LCA may be mistaken for developmental delay, strabismus, albinism, or isolated nystagmus. ERG and genetic testing are often key.',
  },
  patientJourney: {
    whenToSuspect: [
      'Within the first months of life, a baby does not track light or faces, or develops early nystagmus.',
      'A child has light sensitivity, worse night vision, or repeatedly rubs or presses the eyes.',
      'The retina may not look very abnormal early, but vision is very poor or ERG is severely reduced.',
      'Family history includes severe childhood vision loss, consanguinity, or known inherited retinal disease.',
    ],
    commonWrongTurns: [
      'Treating only amblyopia without evaluating retinal function and inherited retinal disease.',
      'Long observation because early retinal appearance is subtle, without ERG or genetic testing.',
      'Missing low-vision rehabilitation, early education, mobility safety, and family support.',
      'Assuming gene therapy applies to all LCA before the exact gene and retinal status are known.',
    ],
    firstDepartments: [
      'Pediatric ophthalmology',
      'Inherited retinal disease clinic',
      'Medical genetics',
      'Low-vision rehabilitation',
    ],
    diagnosisChecklist: [
      'Record tracking, fixation, night vision, light sensitivity, eye rubbing/pressing, development, and learning.',
      'Bring fundus photos, OCT, ERG, visual evoked potential, and refraction results.',
      'Summarize family vision history, consanguinity, and sibling exams.',
      'Bring prior genetic testing, or ask about inherited retinal disease panel or exome testing.',
    ],
    testsToAskAbout: [
      'Full-field ERG, OCT, fundus photography/autofluorescence, and visual function testing.',
      'Inherited retinal disease gene testing with family confirmation.',
      'Screening for kidney, neurologic, hearing, developmental, or syndromic features when indicated.',
      'Eligibility for RPE65 gene therapy, clinical trials, or low-vision resources.',
    ],
    questionsForDoctor: [
      'What is the exact gene, and what does it mean for progression and associated risks?',
      'How much usable retinal function remains, and how should OCT or ERG be followed?',
      'Are gene therapy or clinical trials relevant, and how should low-vision support start if not?',
      'What is the recurrence risk for future pregnancies, and do relatives need carrier testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>LCA often causes severe visual impairment, nystagmus, light sensitivity, night blindness, poor tracking, and eye rubbing or pressing from infancy or early childhood. Some children also have refractive error, keratoconus, cataract, or other eye problems.</p><p>Some forms affect only the eyes, while syndromic forms can involve kidneys, nervous system, hearing, development, or other organs, depending on the gene and clinical clues.</p>',
    diagnosis:
      '<p>Diagnosis combines ophthalmic examination, visual function testing, OCT, fundus photography/autofluorescence, full-field ERG, and genetic testing. ERG often shows severely reduced retinal function early.</p><p>Mimics include achromatopsia, congenital stationary night blindness, ocular albinism, optic nerve hypoplasia, retinopathy of prematurity sequelae, and other inherited retinal dystrophies.</p>',
    treatment:
      '<p>Most LCA care focuses on low-vision rehabilitation, early educational support, refraction correction, light-sensitivity management, complication care, and family support. Visual rehabilitation and accessible education should begin early.</p><p>For confirmed biallelic RPE65 variants with viable retinal cells, voretigene neparvovec gene therapy may be considered where available. Therapies for other genes and clinical trials are evolving.</p>',
    longTermCare:
      '<p>Follow-up tracks vision, retina/OCT, eye pressure, cornea, refraction, learning, and mobility safety. Families should keep genetic reports because future treatment eligibility often depends on the gene.</p>',
    fertilityOrFamily:
      '<p>LCA is often autosomal recessive. Once the gene is known, carrier testing, prenatal diagnosis, or preimplantation genetic testing can be discussed for parents, siblings, and future pregnancies.</p>',
    emergencySigns:
      '<p>Eye pain, marked redness, corneal injury, sudden vision change, headache or vomiting with eye-pressure concern, or urgent kidney/neurologic symptoms in syndromic disease should prompt medical care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Leber congenital amaurosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/leber-congenital-amaurosis/',
    },
    {
      name: 'FDA: Luxturna',
      type: 'official',
      url: 'https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/luxturna',
    },
  ],
  symptoms:
    '<p>Infants or young children may have severe visual impairment, nystagmus, light sensitivity, night blindness, poor tracking, eye rubbing or pressing, and sometimes refractive, corneal, or syndromic systemic problems.</p>',
  diagnosis:
    '<p>Diagnosis combines pediatric ophthalmic exam, OCT, retinal imaging, full-field ERG, and inherited retinal disease genetic testing, with syndromic screening guided by the gene.</p>',
  treatment:
    '<p>Care centers on low-vision rehabilitation, early education, refraction correction, and complication management; biallelic RPE65 disease with viable retinal cells may be evaluated for gene therapy.</p>',
  prognosis:
    '<p>Vision loss is often severe and long term, but early diagnosis, low-vision support, and genetic classification improve education planning and access to appropriate therapies or trials.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 397,
    name: 'leber-congenital-amaurosis-journey.png',
    url: '/images/diseases/leber-congenital-amaurosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlportSyndrome: DiseaseDraft = {
  ...entity(6, 'disease-alport-syndrome'),
  name: 'Alport Syndrome',
  nameEn: 'Alport Syndrome',
  alias: 'Hereditary nephritis, Eye-ear-kidney syndrome, Familial nephritis',
  slug: 'alport-syndrome',
  oneSentence:
    'Alport syndrome is a hereditary kidney disease related to type IV collagen gene variants, often presenting with persistent hematuria as a clue and possibly accompanied by hearing and eye problems.',
  plainName:
    'A hereditary nephritis that may affect kidneys, hearing, and eyes',
  prevalence:
    'It is a rare hereditary kidney disease; true prevalence is affected by region, screening, and genetic testing availability.',
  searchIntents: [
    'Alport syndrome which doctor',
    'child persistent hematuria hearing loss',
    'hereditary nephritis COL4A5 genetic testing',
    'Alport syndrome proteinuria management',
    'Alport syndrome family screening',
  ],
  quickLook: {
    whatItIs:
      'This condition affects the structure of the glomerular basement membrane and other tissues. Many patients first present with microscopic hematuria, then may develop proteinuria, declining kidney function; some patients also have sensorineural hearing loss or eye changes.',
    whoToSeeFirst:
      'In China, priority should be given to nephrology; children can see pediatric nephrology. If hearing or vision clues are present, ENT and ophthalmology should be evaluated simultaneously; genetic counseling is recommended when there is family history or reproductive planning.',
    isGenetic:
      'Yes. Common related genes include COL4A3, COL4A4, and COL4A5, with inheritance patterns possibly X-linked, autosomal recessive, or autosomal dominant.',
    hasTreatment:
      'Current management focuses on slowing kidney damage progression, monitoring hearing and eye problems, and evaluating kidney replacement therapy when needed. Specific medications and target values should be individualized by nephrology.',
    commonDelayReason:
      "Long-term treating microscopic hematuria as a common urinary tract problem or 'latent nephritis,' without asking about family history, hearing changes, and eye manifestations, and without timely specialist or genetic assessment.",
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated or persistent microscopic hematuria, especially starting in childhood or adolescence.',
      'Hematuria combined with proteinuria, elevated blood pressure, or abnormal kidney function indicators.',
      'Family members with long-term hematuria, kidney failure, dialysis, kidney transplant, or early-onset hearing loss.',
      'Sensorineural hearing loss occurring together with kidney abnormality clues.',
      'Eye examination reveals anterior lenticonus, retinal fleck-like changes, or related findings.',
    ],
    commonWrongTurns: [
      'Only treating repeatedly as urinary tract infection, stones, or ordinary nephritis without long-term tracking of urine protein and kidney function.',
      'Only focusing on the kidneys, without conducting hearing and eye evaluations.',
      'Multiple family members have hematuria or kidney failure, but not communicating this information to the doctor.',
      'Genetic test results are available, but genetic counseling and family risk explanation have not been conducted.',
    ],
    firstDepartments: [
      'Nephrology',
      'Pediatric Nephrology',
      'Otorhinolaryngology (ENT)',
      'Ophthalmology',
      'Genetic Counseling Clinic',
    ],
    diagnosisChecklist: [
      'Organize all previous urinalysis, urine protein, urine albumin/creatinine ratio, creatinine, eGFR, and blood pressure records.',
      'Record family history of hematuria, kidney failure, dialysis, kidney transplant, hearing loss, or eye abnormalities.',
      'Bring previous kidney biopsy, hearing test, eye examination, and genetic testing reports.',
      'Ask the doctor whether COL4A3/COL4A4/COL4A5 genetic testing and family verification are needed.',
    ],
    testsToAskAbout: [
      'Urinalysis, urine protein quantification, or urine albumin/creatinine ratio.',
      'Serum creatinine, eGFR, electrolytes, and blood pressure assessment.',
      'Hearing test, especially sensorineural hearing evaluation.',
      'Ophthalmology examination, including lens, fundus, and retinal evaluation.',
      'Alport-related genetic testing, with kidney biopsy or family testing when appropriate.',
    ],
    questionsForDoctor: [
      'Does my presentation more closely match which inheritance pattern? Do family members need testing?',
      'Is there already proteinuria or kidney function decline now, and how should follow-up frequency be arranged?',
      'How often should hearing and eye examinations be repeated?',
      'Which medications, infections, or lifestyle factors may increase kidney burden?',
      'If kidney replacement therapy is needed in the future, what options should I learn about in advance?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Alport syndrome often presents with persistent microscopic hematuria as an early clue, gradually developing proteinuria, hypertension, and declining kidney function. Some patients develop sensorineural hearing loss, usually detected in late childhood, adolescence, or early adulthood. Eye findings may include anterior lenticonus, retinal changes, or corneal issues.</p>',
    diagnosis:
      '<p>Diagnosis typically combines urinalysis, kidney function, family history, hearing and eye assessments, and is confirmed or supported by COL4A3, COL4A4, or COL4A5 genetic testing. In some cases, physicians combine kidney biopsy pathology or type IV collagen-related testing.</p>',
    treatment:
      '<p>Treatment goals are to slow kidney damage, monitor and manage hearing and eye problems. Nephrology may evaluate kidney-protective medications based on proteinuria, blood pressure, and kidney function; specific medications, dosages, and targets need individualized decision-making.</p>',
    longTermCare:
      '<p>Long-term follow-up usually includes urine protein, kidney function, blood pressure, hearing, eye examinations, and lifestyle management. When kidney function decline is sustained, earlier understanding of kidney replacement therapy, kidney transplant evaluation, and family support arrangements is recommended.</p>',
    fertilityOrFamily:
      '<p>Due to diverse inheritance patterns, family member risks cannot be determined solely based on gender or individual symptoms. It is recommended to carry the genetic report for genetic counseling to discuss family testing, partner testing, and reproductive options.</p>',
    emergencySigns:
      '<p>If significantly reduced urine output, severe edema, markedly elevated blood pressure, difficulty breathing, persistent gross hematuria, or known kidney function abnormalities with obvious fatigue, nausea, or chest discomfort occur, seek medical attention promptly.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Alport Syndrome',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1207/',
      type: 'review',
    },
    {
      name: 'MedlinePlus Genetics: Alport syndrome',
      url: 'https://medlineplus.gov/genetics/condition/alport-syndrome/',
      type: 'official',
    },
    {
      name: 'Orphanet: Alport syndrome',
      url: 'https://www.orpha.net/en/disease/detail/63',
      type: 'review',
    },
  ],
  symptoms:
    '<p>Alport syndrome often presents with persistent microscopic hematuria as an early clue, gradually developing proteinuria, hypertension, and declining kidney function. Some patients develop sensorineural hearing loss, usually detected in late childhood, adolescence, or early adulthood. Eye findings may include anterior lenticonus, retinal changes, or corneal issues.</p>',
  diagnosis:
    '<p>Diagnosis typically combines urinalysis, kidney function, family history, hearing and eye assessments, and is confirmed or supported by COL4A3, COL4A4, or COL4A5 genetic testing. In some cases, physicians combine kidney biopsy pathology or type IV collagen-related testing.</p>',
  treatment:
    '<p>Treatment goals are to slow kidney damage, monitor and manage hearing and eye problems. Nephrology may evaluate kidney-protective medications based on proteinuria, blood pressure, and kidney function; specific medications, dosages, and targets need individualized decision-making.</p>',
  prognosis:
    '<p>Long-term follow-up usually includes urine protein, kidney function, blood pressure, hearing, eye examinations, and lifestyle management. When kidney function decline is sustained, earlier understanding of kidney replacement therapy, kidney transplant evaluation, and family support arrangements is recommended.</p>',
  sourceName: 'GeneReviews: Alport Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1207/',
  categorySlug: 'renal-urologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
  featuredImage: {
    id: 306,
    name: 'alport-syndrome-journey.png',
    url: '/images/diseases/alport-syndrome-journey.png',
  },
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMccuneAlbrightSyndrome: DiseaseDraft = {
  ...entity(5015, 'disease-mccune-albright-syndrome'),
  name: 'McCune-Albright Syndrome',
  nameEn: 'McCune-Albright Syndrome',
  alias:
    'MAS; polyostotic fibrous dysplasia; China First Rare Disease Catalog item 69',
  slug: 'mccune-albright-syndrome',
  oneSentence:
    'McCune-Albright syndrome is a rare mosaic disorder caused by somatic GNAS gene mutations that lead to fibrous dysplasia of bone, caf\u00e9-au-lait skin spots, and endocrine hyperfunction (precocious puberty, hyperthyroidism); multidisciplinary comprehensive management is required.',
  plainName:
    'A rare genetic condition that simultaneously affects bones, skin, and the endocrine system',
  prevalence:
    'Prevalence is approximately 1 in 100,000–1,000,000; affects both sexes, but female precocious puberty is more prominent; no racial predilection.',
  searchIntents: [
    'McCune-Albright syndrome symptoms',
    'MAS fibrous dysplasia',
    'McCune-Albright precocious puberty',
    'MAS caf\u00e9-au-lait spots',
    'McCune-Albright syndrome treatment',
  ],
  quickLook: {
    whatItIs:
      'Somatic GNAS gene mutations cause constitutive activation of cellular signaling pathways, leading to abnormalities in bone, skin, and endocrine organs; it is a mosaic disorder, not a typical inherited genetic disease.',
    whoToSeeFirst:
      'Pediatric endocrinology or genetics for children with large irregular caf\u00e9-au-lait spots, bone pain or deformity, or early breast development or menstruation in girls.',
    isGenetic:
      'Somatic mosaic mutation in the GNAS gene, usually occurring early in embryonic development; the vast majority of cases are sporadic and not inherited from parents; very rare familial cases have been reported.',
    hasTreatment:
      'Multidisciplinary management: bisphosphonates for bone disease; aromatase inhibitors for precocious puberty; orthopedic surgery for fractures or deformities; medications for hyperthyroidism and other endocrine overactivity.',
    commonDelayReason:
      'Caf\u00e9-au-lait spots are mistaken for ordinary birthmarks; bone pain or fractures are attributed to trauma or calcium deficiency; precocious puberty in girls is not further evaluated with bone age and pelvic ultrasound.',
  },
  patientJourney: {
    whenToSuspect: [
      'Large, irregular, jagged ("coast of Maine") caf\u00e9-au-lait spots in infancy or early childhood.',
      'Recurrent fractures, bone pain, or skeletal deformity with radiographic ground-glass appearance (fibrous dysplasia).',
      'Girls with peripheral precocious puberty: breast development and menstruation before age 8 years, caused by autonomous ovarian follicular cysts.',
      'Thyroid enlargement with hyperthyroidism, growth hormone excess causing gigantism/acromegaly.',
      'Neonatal Cushing syndrome (rare but serious).',
    ],
    commonWrongTurns: [
      'Dismissing large caf\u00e9-au-lait spots as ordinary birthmarks without noting irregular borders.',
      'Attributing recurrent fractures to simple osteoporosis or trauma without bone biopsy or genetic testing.',
      'Treating peripheral precocious puberty as central precocious puberty with GnRH agonists, which are ineffective.',
      'Misdiagnosing fibrous dysplasia as bone tumor and performing unnecessary surgery.',
    ],
    firstDepartments: [
      'Pediatric endocrinology',
      'Orthopedics (bone disease/fracture management)',
      'Dermatology (caf\u00e9-au-lait spot evaluation)',
      'Medical genetics',
      'Radiology (bone imaging evaluation)',
    ],
    diagnosisChecklist: [
      'Document timing of skin spot appearance, morphology, and distribution.',
      'Skeletal radiographs/CT: long bones with ground-glass appearance, bone expansion, and deformity.',
      'Bone biopsy: fibro-osseous tissue replacing normal bone (confirms fibrous dysplasia).',
      'Endocrine evaluation: sex hormones, thyroid function, growth hormone, cortisol, bone age.',
      'Pelvic ultrasound (girls): ovarian follicular cysts (suggests peripheral precocious puberty).',
      'GNAS mutation testing (mutation detection rate is higher in affected tissues than peripheral blood).',
    ],
    testsToAskAbout: [
      'Skeletal radiographs/CT/MRI.',
      'Bone biopsy.',
      'Endocrine panel (sex hormones, thyroid, growth hormone, cortisol).',
      'Bone age radiograph.',
      'Pelvic ultrasound (girls).',
      'GNAS genetic testing.',
    ],
    questionsForDoctor: [
      'What is the GNAS mutation detection rate in my child?',
      'Which bones are affected by fibrous dysplasia? What is the fracture risk?',
      'Does precocious puberty require medication? Which medication?',
      'What are the treatment duration and side effects of bisphosphonates?',
      'How often should bone density and endocrine markers be checked?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The classic triad includes: 1) fibrous dysplasia of bone (monostotic or polyostotic), presenting with bone pain, pathologic fractures, and skeletal deformities (e.g., "shepherd\'s crook" deformity of the femur, facial bone asymmetry); 2) caf\u00e9-au-lait skin spots with irregular, jagged ("coast of Maine") borders, usually on the same side as the affected bones; and 3) endocrine hyperfunction, most commonly peripheral precocious puberty in girls (breast development and menstruation before age 8 years caused by autonomous ovarian follicular cysts). Other endocrine manifestations include hyperthyroidism, growth hormone excess (gigantism/acromegaly), Cushing syndrome, hyperparathyroidism, and hypophosphatemic rickets.</p>',
    diagnosis:
      '<p>Diagnosis is based on the classic triad (fibrous dysplasia + caf\u00e9-au-lait spots + endocrine hyperfunction). Skeletal imaging (radiographs or CT) shows expansile ground-glass lesions in long bones with cortical thinning. Bone biopsy demonstrates fibrous tissue replacing normal trabecular bone without malignant features. Endocrine evaluation identifies the type of hyperfunction: pelvic ultrasound in girls often reveals autonomous ovarian follicular cysts. GNAS mutation testing supports the diagnosis; because it is a somatic mosaic mutation, detection rates in peripheral blood are lower (approximately 20–50%) and higher in affected tissues (bone, skin, ovary). Differential diagnosis includes neurofibromatosis type 1 (NF1, caf\u00e9-au-lait spots have smooth borders), monostotic fibrous dysplasia, and Albright hereditary osteodystrophy.</p>',
    treatment:
      '<p>Multidisciplinary comprehensive management. Bone disease: bisphosphonates (pamidronate or zoledronate) reduce bone pain and fracture risk; severe deformities or recurrent fractures require orthopedic surgery. Precocious puberty: aromatase inhibitors (e.g., letrozole) delay bone age progression and improve final adult height; central precocious puberty medications (GnRH agonists) are ineffective for MAS peripheral precocious puberty. Hyperthyroidism: antithyroid drugs or surgery/radioactive iodine. Growth hormone excess: somatostatin analogs or surgery. Cushing syndrome: adrenalectomy (neonatal form often requires urgent surgery). Hypophosphatemic rickets: phosphate and active vitamin D supplementation. Regular monitoring of bone density and endocrine function is essential.</p>',
    longTermCare:
      '<p>Lifelong multidisciplinary follow-up is required, including pediatric endocrinology, orthopedics, dermatology, and radiology. Monitor bone disease progression (annual skeletal imaging), endocrine status (annual hormone panel), bone density, and growth. Be alert for malignant transformation: fibrous dysplasia can transform into osteosarcoma or fibrosarcoma (incidence approximately 0.5–4%); new-onset bone pain or imaging changes should raise suspicion. Patient education includes avoiding trauma to fragile bones, adhering to medication, keeping regular appointments, and recognizing signs of malignant transformation.</p>',
    fertilityOrFamily:
      "<p>The vast majority of cases are sporadic somatic mosaic mutations and are not inherited from or transmitted to offspring. Very rare familial cases are associated with germline GNAS mutations. Because the mutation generally does not involve germ cells, the patient's offspring are typically unaffected. Prenatal diagnosis is limited, but preimplantation genetic testing may be considered if a germline mutation is suspected.</p>",
    emergencySigns:
      '<p>Pathologic fracture, severe bone pain with fever (suspected malignant transformation), severe hypertension (thyroid storm or Cushing crisis), neonatal severe hypoglycemia/hypotension (Cushing syndrome) require immediate medical attention.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: McCune-Albright Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK274564/',
    },
    {
      name: 'NORD: McCune-Albright Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/mccune-albright-syndrome/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Fibrous dysplasia (bone pain, fractures, deformity), irregular-border caf\u00e9-au-lait spots, peripheral precocious puberty, hyperthyroidism, acromegaly, Cushing syndrome.</p>',
  diagnosis:
    '<p>Classic triad plus ground-glass bone lesions and bone biopsy; GNAS mutation testing supports diagnosis (higher detection rate in affected tissues).</p>',
  treatment:
    '<p>Bisphosphonates for bone disease; aromatase inhibitors for precocious puberty; orthopedic and endocrine surgery as needed; monitor for malignant transformation.</p>',
  prognosis:
    '<p>Early multidisciplinary management improves quality of life; bone disease may stabilize after puberty; endocrine overactivity is manageable; malignant transformation is a long-term risk.</p>',
  sourceName: 'GeneReviews: McCune-Albright Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK274564/',
  categorySlug: 'genetic-developmental',
  charityIds: [55],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5015,
    name: 'mccune-albright-syndrome-journey.png',
    url: '/images/diseases/mccune-albright-syndrome-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

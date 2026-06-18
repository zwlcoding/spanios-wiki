import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseOsteogenesisImperfectaBrittleBoneDisease: DiseaseDraft = {
  ...entity(5032, 'disease-osteogenesis-imperfecta-brittle-bone-disease'),
  name: 'Osteogenesis Imperfecta (Brittle Bone Disease)',
  nameEn: 'Osteogenesis Imperfecta',
  alias: 'OI, brittle bone disease, Lobstein syndrome, Vrolik disease',
  icd10Code: 'Q78.0',
  slug: 'osteogenesis-imperfecta-brittle-bone-disease',
  oneSentence:
    'Osteogenesis imperfecta is a group of inherited connective tissue disorders caused by defects in type I collagen (primarily COL1A1 and COL1A2 genes), characterized by bone fragility leading to frequent fractures, short stature, skeletal deformities, blue sclerae, hearing loss, and dental abnormalities; treatment includes bisphosphonates, orthopedic surgery, and rehabilitation.',
  plainName:
    'A genetic condition causing extremely fragile bones that break easily from minor injuries or even spontaneously',
  prevalence:
    'Estimated prevalence is approximately 6 to 7 per 100,000 people worldwide. It affects all ethnic groups equally. Approximately 35% of cases are due to new mutations with no family history.',
  searchIntents: [
    'osteogenesis imperfecta symptoms',
    'brittle bone disease fractures',
    'OI treatment bisphosphonates',
    'osteogenesis imperfecta types',
    'OI COL1A1 COL1A2 gene',
  ],
  quickLook: {
    whatItIs:
      'OI is a genetic disorder of type I collagen, the major structural protein in bones, skin, and connective tissues. Defective collagen makes bones brittle and prone to fracture. Severity ranges from mild (a few fractures) to lethal (multiple in-utero fractures and respiratory failure at birth).',
    whoToSeeFirst:
      'Pediatric orthopedic surgeon or geneticist. Any child with unexplained fractures, blue sclerae, short stature, or skeletal deformities should be evaluated.',
    isGenetic:
      'Most cases are inherited in an autosomal dominant pattern due to mutations in COL1A1 or COL1A2 genes. Some forms are autosomal recessive (CRTAP, P3H1, FKBP10, SERPINF1, etc.) or X-linked. Approximately 35% of cases are due to de novo mutations. Genetic testing can confirm the diagnosis and type.',
    hasTreatment:
      'There is no cure, but treatment significantly improves quality of life. Intravenous bisphosphonates (pamidronate, zoledronate) increase bone density and reduce fractures. Orthopedic surgery (rodding of long bones) stabilizes bones. Physical therapy, rehabilitation, and assistive devices improve mobility. Newer therapies include anti-sclerostin antibodies (romosozumab) and gene therapy is under investigation.',
    commonDelayReason:
      'Mild forms may be misdiagnosed as child abuse, accidental injury, or simple clumsiness. Short stature and skeletal deformities may be attributed to other causes. Blue sclerae may be overlooked in infancy.',
  },
  patientJourney: {
    whenToSuspect: [
      'Infant or child with fractures from minimal trauma (rolling over, being lifted, learning to walk) or multiple fractures with different healing stages.',
      'Blue or gray-tinted sclerae (whites of the eyes).',
      'Short stature, bowing of long bones, or skeletal deformities (especially of the spine and chest).',
      'Hearing loss, especially beginning in the teens or twenties.',
      'Family history of frequent fractures, brittle bones, or hearing loss.',
      'Dentinogenesis imperfecta (brittle, discolored teeth with translucent appearance).',
    ],
    commonWrongTurns: [
      'Fractures in infants misattributed to child abuse without considering OI.',
      'Short stature and bowing attributed to rickets or nutritional deficiency.',
      'Hearing loss attributed to simple age-related or noise-induced hearing loss.',
      'Delayed referral to a specialist center with OI expertise.',
      'Failure to provide bisphosphonate therapy due to lack of awareness.',
    ],
    firstDepartments: [
      'Pediatric Orthopedics',
      'Medical Genetics',
      'Endocrinology',
      'Physical Medicine and Rehabilitation',
      'Audiology',
    ],
    diagnosisChecklist: [
      'Document all fractures with dates, circumstances, and healing times.',
      'Bring all prior X-rays, especially if showing wormian bones or thin cortices.',
      'Note any family history of fractures, hearing loss, or blue sclerae.',
      'Ask about dental abnormalities or early tooth loss.',
      'Inquire about genetic testing and OI classification (Sillence types I–V).',
    ],
    testsToAskAbout: [
      'Skeletal survey / full-body X-ray (assess fracture pattern, bone density, skeletal deformities, wormian bones).',
      'DXA bone densitometry (assesses bone mineral density).',
      'COL1A1 and COL1A2 gene sequencing (detects majority of dominant OI cases).',
      'Extended collagen-related gene panel (CRTAP, P3H1, FKBP10, SERPINF1, etc., for recessive forms).',
      'Hearing evaluation (audiometry) at diagnosis and regularly thereafter.',
      'Dental examination for dentinogenesis imperfecta.',
      'Echocardiogram (to assess for cardiac involvement such as aortic root dilation).',
      'Pulmonary function tests (if thoracic deformities are present).',
    ],
    questionsForDoctor: [
      'What type of OI does my/my child have, and what does that mean for prognosis?',
      'What is the fracture risk, and how can we reduce it?',
      'Is bisphosphonate therapy appropriate, and what are the benefits and risks?',
      'Does my/my child need surgery (rodding) to stabilize bones?',
      'What is the plan for monitoring hearing, dental health, and cardiovascular status?',
      'Should family members be tested?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The hallmark of OI is bone fragility leading to fractures from minimal trauma or even spontaneous fractures. Features vary by type: Type I (mild) has blue sclerae, hearing loss, and few fractures before puberty. Type II is lethal in the perinatal period due to multiple in-utero fractures and pulmonary hypoplasia. Type III is severe, with progressive deformity, extremely short stature, and hundreds of fractures. Type IV is moderately severe. Additional features include dentinogenesis imperfecta (brittle, discolored teeth), joint hypermobility, easy bruising, hearing loss (conductive, sensorineural, or mixed), scoliosis, kyphosis, basilar invagination, and sometimes cardiovascular abnormalities (aortic root dilation, mitral valve prolapse).</p>',
    diagnosis:
      '<p>Diagnosis is clinical, based on history of fractures, physical findings (blue sclerae, dentinogenesis imperfecta, short stature), and radiographic findings (osteopenia, thin cortices, wormian bones). Genetic testing identifies mutations in COL1A1, COL1A2, or recessive OI genes. The Sillence classification (Types I–V) is based on clinical severity and mode of inheritance. Prenatal diagnosis is possible via ultrasound (fractures, limb deformities) and genetic testing. Differential diagnosis includes child abuse, rickets, hypophosphatasia, and other skeletal dysplasias.</p>',
    treatment:
      '<p>Bisphosphonates (intravenous pamidronate or zoledronate, oral alendronate) are the mainstay of medical therapy, increasing bone density and reducing fracture frequency. Surgical management includes intramedullary rodding (Fassier-Duval, Sheffield, Rush rods) to stabilize long bones and correct deformity. Spinal fusion may be needed for severe scoliosis. Physical therapy and occupational therapy promote safe mobility and independence. Bracing and adaptive equipment reduce fracture risk. Hearing aids or surgery for conductive hearing loss. Dental care for dentinogenesis imperfecta. New therapies include teriparatide in adults and investigational anti-sclerostin antibodies.</p>',
    longTermCare:
      '<p>Comprehensive multidisciplinary care is essential. Regular follow-up includes: bone health monitoring (DXA, X-rays), fracture management, orthopedic assessments, hearing evaluations, dental care, cardiology screening (aortic root, valvular disease), pulmonary monitoring (restrictive lung disease from chest deformity), and nutritional assessment. Bone health is optimized through adequate calcium and vitamin D intake, weight-bearing exercise as tolerated, and avoidance of smoking and alcohol.</p><p>Psychological support is important, especially for children and adolescents dealing with physical limitations and social challenges. Transition to adult care should be planned in advance. Advocacy and support organizations provide valuable resources, peer support, and education.</p>',
    fertilityOrFamily:
      '<p>Most OI is autosomal dominant. An affected parent has a 50% chance of transmitting the mutation to each child. Germline mosaicism can result in multiple affected children from unaffected parents. Approximately 35% of cases are de novo mutations. Genetic counseling is essential. Prenatal diagnosis (ultrasound, amniocentesis, CVS) and preimplantation genetic testing (PGT) are available. Recessive forms require both parents to be carriers. Adults with OI can have successful pregnancies, but require specialized obstetric care due to increased fracture risk, small pelvis, and potential cardiovascular issues.</p>',
    emergencySigns:
      '<p>Seek emergency care for: new fracture (sudden pain, swelling, deformity, inability to bear weight); head injury (even minor trauma can cause skull fracture or basilar invagination symptoms); severe back pain with neurological symptoms (possible spinal fracture or compression); chest pain or difficulty breathing (possible rib fracture or pneumothorax); severe abdominal pain (possible fracture or internal injury).</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Osteogenesis Imperfecta Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1295/',
    },
    {
      name: 'Osteogenesis Imperfecta Foundation',
      type: 'patient-organization',
      url: 'https://www.oif.org/',
    },
    {
      name: 'NORD: Osteogenesis Imperfecta',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/osteogenesis-imperfecta/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Bone fragility with frequent fractures from minimal trauma, blue sclerae, short stature, skeletal deformities, hearing loss, dentinogenesis imperfecta, joint hypermobility, and scoliosis. Severity ranges from mild to lethal.</p>',
  diagnosis:
    '<p>Clinical diagnosis based on fracture history, blue sclerae, short stature, and radiographic findings. COL1A1/COL1A2 genetic testing confirms the diagnosis and identifies the type.</p>',
  treatment:
    '<p>Bisphosphonates to increase bone density, intramedullary rodding to stabilize bones, physical therapy, hearing aids, and dental care. Multidisciplinary care is essential.</p>',
  prognosis:
    '<p>Prognosis varies greatly by type. Type I has a near-normal life expectancy. Type II is usually lethal. Types III–IV have intermediate prognoses with modern care. Early intervention improves outcomes significantly.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1295/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [1, 2],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3532,
    name: 'osteogenesis-imperfecta-brittle-bone-disease-journey.png',
    url: '/images/diseases/osteogenesis-imperfecta-brittle-bone-disease-journey.png',
  },
  tagSlugs: ['skeletal', 'genetic-counseling', 'multidisciplinary'],
};

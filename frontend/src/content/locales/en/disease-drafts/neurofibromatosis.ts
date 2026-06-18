import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeurofibromatosis: DiseaseDraft = {
  ...entity(2054, 'disease-neurofibromatosis'),
  name: 'Neurofibromatosis',
  nameEn: 'Neurofibromatosis',
  alias:
    'NF; NF1; NF2-related schwannomatosis; schwannomatosis; China Second Rare Disease Catalog item 54',
  slug: 'neurofibromatosis',
  oneSentence:
    'Neurofibromatosis is a group of inherited nervous-system tumor predisposition disorders that can affect skin, peripheral nerves, brain and spine, eyes, bones, hearing, and learning.',
  plainName:
    'An inherited condition with nerve and skin tumors that needs lifelong surveillance',
  prevalence:
    "Included in China's second rare disease catalog; NF1 is the most common form, while NF2-related schwannomatosis and other schwannomatoses are rarer.",
  quickLook: {
    whatItIs:
      'Neurofibromatosis is not one disease. NF1 often causes cafe-au-lait spots, freckling, neurofibromas, learning issues, and bone or vascular risks. NF2-related schwannomatosis often causes vestibular schwannomas with hearing and balance problems. Other schwannomatoses often feature multiple schwannomas and chronic pain.',
    whoToSeeFirst:
      'Children with skin signs or developmental concerns can start with pediatrics, dermatology, or medical genetics. Hearing, tinnitus, and balance problems need ENT or neuro-otology. Growing tumors or pain need a specialty multidisciplinary team.',
    isGenetic:
      'NF1, NF2, SMARCB1, LZTR1, and other genes may be involved. These are often managed as autosomal dominant conditions, but new variants and mosaicism are common.',
    hasTreatment:
      'Care focuses on surveillance and treating problems: vision and hearing checks, imaging, pain care, surgery, rehabilitation, learning support, and sometimes MEK inhibitors for symptomatic NF1 plexiform neurofibromas.',
    commonDelayReason:
      'Early skin spots may be dismissed as birthmarks, while learning issues, bone pain, hearing loss, or chronic pain may not be connected to NF.',
  },
  patientJourney: {
    whenToSuspect: [
      'A child has multiple cafe-au-lait spots, armpit or groin freckling, skin or subcutaneous bumps, or relatives with similar findings.',
      'Vision loss, eye bulging, headaches, seizures, bowed bone, scoliosis, high blood pressure, learning or developmental problems.',
      'Teenager or adult with bilateral hearing loss, tinnitus, poor balance, or MRI showing vestibular schwannoma, meningioma, or ependymoma.',
      'Multiple schwannomas or long-lasting unexplained nerve pain, numbness, or weakness.',
    ],
    commonWrongTurns: [
      'Calling cafe-au-lait spots birthmarks without applying age- and number-based NF1 assessment.',
      'Continuing to observe when pain rapidly worsens or a mass becomes larger and firmer, missing malignant peripheral nerve sheath tumor risk.',
      'Removing one tumor without establishing long-term eye, blood pressure, bone, learning, hearing, and imaging follow-up.',
    ],
    firstDepartments: [
      'Medical genetics',
      'Dermatology',
      'Pediatrics or developmental pediatrics',
      'Neurosurgery, ophthalmology, or ENT based on symptoms',
    ],
    diagnosisChecklist: [
      'Photograph cafe-au-lait spots, freckling, and skin or subcutaneous tumors with location and changes.',
      'Create a timeline of vision, hearing, learning, development, bone, blood pressure, pain, and neurologic changes.',
      'Bring eye exams, hearing tests, MRI/CT, bone imaging, pathology, and genetic reports.',
      'Prepare a three-generation family history of skin spots, hearing loss, nerve tumors, meningioma, or spinal tumors.',
    ],
    testsToAskAbout: [
      'Genetic testing for NF1, NF2, SMARCB1, LZTR1, and related genes, including mosaicism assessment when relevant.',
      'For children with NF1: eye exams, blood pressure, developmental or learning assessment, and bone or spine screening.',
      'For suspected NF2-related disease: audiology and internal auditory canal, brain, and spine MRI.',
      'Assessment for malignant change when pain is marked, a mass grows quickly or hardens, or neurologic function declines.',
    ],
    questionsForDoctor: [
      'Is this NF1, NF2-related schwannomatosis, or another schwannomatosis?',
      'Which findings need yearly screening, and which symptoms should trigger urgent review?',
      'Should this tumor be observed, removed, treated medically, or managed for pain, and what are the nerve risks?',
      'What learning, attention, bone, vision, or hearing support does my child need, and should relatives be tested?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NF1 often starts in childhood with multiple cafe-au-lait spots, armpit or groin freckling, Lisch nodules, and skin or subcutaneous neurofibromas. Other issues can include optic pathway glioma, plexiform neurofibromas, bone dysplasia, scoliosis, high blood pressure, learning difficulties, and attention problems.</p><p>NF2-related schwannomatosis often causes hearing loss, tinnitus, and balance problems from vestibular schwannomas, and can also involve meningiomas, ependymomas, or cataracts. Other schwannomatoses often cause multiple schwannomas and chronic pain.</p>',
    diagnosis:
      '<p>Diagnosis uses clinical criteria, eye, hearing, and imaging evaluation, and genetic testing. Many people with NF1 can be diagnosed clinically over time, but genetic testing helps early or atypical cases, reproductive counseling, and distinguishing conditions such as Legius syndrome.</p><p>NF2-related schwannomatosis and other schwannomatoses require MRI, audiology, pathology, and genes such as NF2, SMARCB1, and LZTR1. Mosaic cases can have negative blood testing or localized findings, so genetics expertise is important.</p>',
    treatment:
      '<p>Treatment is problem-based. Small asymptomatic tumors may be monitored; tumors affecting function, growing quickly, or concerning for malignancy need expert review for surgery, imaging follow-up, or medication. Some children with symptomatic inoperable NF1 plexiform neurofibromas may be assessed for MEK inhibitor therapy.</p><p>Pain, learning difficulties, attention problems, bone deformity, high blood pressure, vision, and hearing issues each need targeted care. Radiation is used cautiously in NF-related tumors because of later tumor risk, and decisions should be made by experienced teams.</p>',
    longTermCare:
      '<p>Surveillance depends on type and age. Children with NF1 commonly need regular physical exams, blood pressure, skin and neurologic review, eye screening, developmental or learning support, and bone monitoring. NF2-related disease needs hearing and brain-spine imaging follow-up.</p><p>Patients and families should know danger signs: rapidly enlarging tumors, persistent night pain, hardening of a mass, neurologic decline, or quick vision or hearing change. Keeping prior imaging and pathology makes comparison easier.</p>',
    fertilityOrFamily:
      '<p>Many NF-related conditions are managed as autosomal dominant, so a carrier often has a 50% chance of passing the pathogenic variant to each child, but new variants and mosaicism are common. Genetic counseling can cover relative testing, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Urgent review is needed for a rapidly enlarging mass with persistent or night pain, worsening weakness or numbness, sudden vision loss, rapidly worsening hearing, severe headache with vomiting, seizures, spinal cord compression signs, or hypertensive crisis.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus: Neurofibromatosis',
      type: 'official',
      url: 'https://medlineplus.gov/neurofibromatosis.html',
    },
    {
      name: 'National Institute of Neurological Disorders and Stroke: Neurofibromatosis',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/neurofibromatosis',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Features can include cafe-au-lait spots, freckling, neurofibromas, learning issues, bone problems, vision or hearing loss, tinnitus, balance problems, multiple schwannomas, and chronic pain.</p>',
  diagnosis:
    '<p>Diagnosis combines clinical criteria, eye and hearing exams, MRI or other imaging, pathology, and genetic testing for NF1, NF2, SMARCB1, LZTR1, and mosaicism when relevant.</p>',
  treatment:
    '<p>Care includes surveillance, observation or surgery, pain management, learning and rehabilitation support, vision, hearing and bone care, and sometimes MEK inhibitors for selected NF1 plexiform neurofibromas.</p>',
  prognosis:
    '<p>Outlook varies by type and complications. Regular surveillance helps detect vision, hearing, bone, vascular, tumor growth, and malignant transformation risks earlier.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [31],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 408,
    name: 'neurofibromatosis-journey.png',
    url: '/images/diseases/neurofibromatosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

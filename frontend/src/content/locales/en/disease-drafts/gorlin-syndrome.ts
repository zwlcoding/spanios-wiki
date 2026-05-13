import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGorlinSyndrome: DiseaseDraft = {
  ...entity(2039, 'disease-gorlin-syndrome'),
  name: 'Gorlin syndrome',
  nameEn: 'Gorlin syndrome',
  alias:
    'Nevoid basal cell carcinoma syndrome, NBCCS, basal cell nevus syndrome, China Second Rare Disease Catalog item 39',
  slug: 'gorlin-syndrome',
  oneSentence:
    'Gorlin syndrome is an inherited tumor predisposition syndrome that can cause early or repeated basal cell carcinomas, jaw keratocysts, small pits on the palms or soles, and skeletal features, requiring long-term dermatology, oral/maxillofacial, and genetics follow-up.',
  plainName:
    'An inherited syndrome that raises the risk of basal cell cancers and jaw cysts',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates about 1 in 31,000 people, although mild cases and variable family expression affect recognition.",
  quickLook: {
    whatItIs:
      'Gorlin syndrome, also called nevoid basal cell carcinoma syndrome, is often related to PTCH1 or SUFU. It is not just a skin condition; it can affect skin, jaw, bones, nervous system, and reproductive organs.',
    whoToSeeFirst:
      'Multiple basal cell carcinomas at a young age, repeated jaw cysts, palm or sole pits, or family members with similar features should prompt dermatology, oral/maxillofacial surgery, medical genetics, or cancer genetics review.',
    isGenetic:
      'It is usually autosomal dominant but can arise as a new variant. Genetic counseling helps with family testing, child surveillance, and reproductive planning.',
    hasTreatment:
      'There is no one-time cure. Care focuses on sun protection, avoiding unnecessary radiation exposure, and early detection and treatment of basal cell carcinomas, jaw cysts, and other related tumor risks.',
    commonDelayReason:
      'Features are often treated separately as skin growths, dental cysts, or minor skeletal findings. The pattern of young age, multiple lesions, recurrence, and family history is the clue.',
  },
  patientJourney: {
    whenToSuspect: [
      'A child, teen, or young adult develops repeated or multiple basal cell carcinomas, or far more lesions than expected for age.',
      'Repeated jaw keratocysts, tooth eruption problems, or facial bone features occur with skin tumors or palm/sole pits.',
      'Family history includes multiple basal cell cancers, jaw cysts, childhood medulloblastoma, or a known PTCH1/SUFU variant.',
      'Imaging shows falx calcification, rib/spine abnormalities, or there are clues such as ovarian or cardiac fibromas.',
    ],
    commonWrongTurns: [
      'Removing each skin cancer separately without asking about age, number of lesions, jaw cysts, and family history.',
      'Treating repeated jaw cysts without referral to genetics or a skin tumor team.',
      'Missing the need to reduce unnecessary radiation exposure when possible.',
      'Not creating a family testing and surveillance plan for children, siblings, or offspring after diagnosis.',
    ],
    firstDepartments: [
      'Dermatology',
      'Oral and maxillofacial surgery',
      'Medical genetics',
      'Cancer genetics clinic',
    ],
    diagnosisChecklist: [
      'List all basal cell carcinomas, suspicious skin lesions, pathology reports, and treatment dates.',
      'Bring dental panoramic imaging, jaw CT/MRI, jaw cyst pathology, and operative reports.',
      'Record palm/sole pits, head size, skeletal findings, childhood tumors, and family history.',
      'Bring prior genetic testing, or be ready to discuss PTCH1, SUFU, and related testing.',
    ],
    testsToAskAbout: [
      'Full skin examination plus dermoscopy or biopsy of suspicious lesions.',
      'Oral/maxillofacial imaging to detect or follow jaw keratocysts.',
      'PTCH1, SUFU, and related gene testing with family confirmation when useful.',
      'Age- and gene-specific screening for medulloblastoma, ovarian fibroma, cardiac fibroma, or skeletal findings when appropriate.',
    ],
    questionsForDoctor: [
      'Do my findings suggest PTCH1-related or SUFU-related disease, and how does surveillance differ?',
      'How often should I have skin and jaw follow-up, and which tests should avoid unnecessary radiation?',
      'Do relatives or children need testing, and what follow-up is needed if they are positive but well?',
      'If basal cell cancers become numerous, what local or systemic treatment options are available besides repeated surgery?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Gorlin syndrome varies widely. Common clues include multiple or repeated basal cell carcinomas at a young age, jaw keratocysts, small pits on the palms or soles, larger head size, rib or spine differences, and characteristic facial or skeletal features.</p><p>Some patients have a risk of childhood medulloblastoma, especially depending on the gene involved. Ovarian fibromas can occur in females, and cardiac fibromas can occur in some children. Not every person has every feature.</p>',
    diagnosis:
      '<p>Diagnosis combines skin pathology, jaw findings, physical signs, imaging, family history, and genetic testing. PTCH1 is the most common gene, while SUFU and others can produce overlapping disease with different tumor-risk patterns.</p><p>Mimics include ordinary sporadic basal cell carcinoma, other jaw-cyst syndromes, Sotos syndrome, Bazex-Dupre-Christol syndrome, and related conditions. A genetic result helps guide family testing and individualized surveillance.</p>',
    treatment:
      '<p>Management is long term rather than one procedure. Skin care includes strict sun protection, regular full-body skin exams, early biopsy, and local treatment or surgery. When basal cell carcinomas are numerous or difficult to manage, specialists may discuss Hedgehog pathway inhibitors.</p><p>Jaw cysts need oral/maxillofacial follow-up and treatment that balances recurrence reduction with dental and jaw development. Unnecessary radiation exposure should be avoided when possible, especially in children and people with many skin tumors.</p>',
    longTermCare:
      '<p>Follow-up may include dermatology, oral/maxillofacial surgery, medical genetics, pediatrics, gynecology, or neuro-oncology depending on age, gene, tumor history, and family history.</p><p>Patients and families should learn to notice new skin lesions, maintain sun protection, keep pathology and imaging records, and tell new clinicians about the Gorlin syndrome diagnosis.</p>',
    fertilityOrFamily:
      '<p>Gorlin syndrome is usually autosomal dominant, so an affected person often has a 50% chance of passing the variant to each child. Genetic counseling can discuss family testing, child surveillance, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>A child with persistent headache, vomiting, unsteady walking, abnormal eye movements, or altered consciousness needs urgent evaluation for possible intracranial disease. Rapidly enlarging skin tumors, uncontrolled bleeding, infection, or painful facial/jaw swelling also needs prompt care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Gorlin syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gorlin-syndrome/',
    },
  ],
  symptoms:
    '<p>Common signs include multiple or repeated basal cell carcinomas at young age, jaw keratocysts, palm or sole pits, larger head size, skeletal features, and in some patients childhood medulloblastoma or ovarian fibroma risk.</p>',
  diagnosis:
    '<p>Diagnosis combines skin and jaw history, pathology, imaging, physical findings, family history, and PTCH1/SUFU or related genetic testing to guide family testing and surveillance.</p>',
  treatment:
    '<p>Care focuses on long-term surveillance, sun protection, treatment of basal cell carcinomas and jaw cysts, possible Hedgehog pathway inhibitors in selected cases, and avoiding unnecessary radiation exposure.</p>',
  prognosis:
    '<p>Many risks can be managed with early detection and ongoing surveillance. Long-term dermatology and oral/maxillofacial care, family testing, and radiation-sparing choices are central.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 393,
    name: 'gorlin-syndrome-journey.png',
    url: '/images/diseases/gorlin-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

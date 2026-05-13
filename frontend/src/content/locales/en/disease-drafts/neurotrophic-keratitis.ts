import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeurotrophicKeratitis: DiseaseDraft = {
  ...entity(2056, 'disease-neurotrophic-keratitis'),
  name: 'Neurotrophic keratitis',
  nameEn: 'Neurotrophic keratitis',
  alias:
    'Neurotrophic keratopathy; NK; China Second Rare Disease Catalog item 56',
  slug: 'neurotrophic-keratitis',
  oneSentence:
    'Neurotrophic keratitis is an ocular surface disease caused by impaired corneal sensory nerves, where the eye may not hurt much even while epithelial defects, ulcers, or perforation risk develop.',
  plainName:
    'A corneal nerve disease where too little pain can hide serious injury',
  prevalence:
    "Included in China's second rare disease catalog; it is uncommon and often follows herpes eye disease, trigeminal nerve injury, ocular surgery, diabetes, or chronic ocular surface disease.",
  quickLook: {
    whatItIs:
      'The cornea needs sensory nerves for blinking, tear support, and healing. In neurotrophic keratitis, reduced corneal sensation makes injury harder to feel and healing slower.',
    whoToSeeFirst:
      'Recurrent epithelial defects, non-healing corneal ulcers, or vision loss after ocular herpes should be assessed promptly by a cornea or ocular surface specialist.',
    isGenetic:
      'Most cases are acquired from infection, surgery, trauma, neurologic disease, diabetes, or medication toxicity. Genetic causes are considered mainly in unusual childhood or syndromic cases.',
    hasTreatment:
      'Treatment is stage-based: remove toxic drops, use preservative-free lubrication, treat infection and causes, protect the cornea, and consider recombinant nerve growth factor or procedures in selected cases.',
    commonDelayReason:
      'Early disease is often treated as dry eye or ordinary keratitis. Because pain is mild, ulcer and perforation risk can be underestimated.',
  },
  patientJourney: {
    whenToSuspect: [
      'Repeated corneal breakdown, epithelial defect, or ulcer with less pain than expected and reduced corneal sensation on exam.',
      'History of herpes simplex or shingles eye disease, trigeminal nerve surgery, tumor or trauma, corneal surgery, diabetes, or many chronic eye drops.',
      'Dry-eye treatment only partly helps while staining, vision loss, light sensitivity, or foreign-body sensation keeps recurring.',
      'White corneal opacity, enlarging ulcer, inflammation inside the eye, or suspected corneal thinning.',
    ],
    commonWrongTurns: [
      'Treating as ordinary dry eye for months without checking corneal sensation or searching for nerve injury.',
      'Continuing preserved drops, topical anesthetics, or inappropriate steroids that worsen the ocular surface.',
      'Delaying follow-up because pain is limited, until ulceration, melting, or perforation develops.',
    ],
    firstDepartments: [
      'Cornea specialist',
      'Ocular surface clinic',
      'Neuro-ophthalmology',
      'Emergency ophthalmology for ulcers or rapid vision loss',
    ],
    diagnosisChecklist: [
      'List herpes eye disease, surgery, trauma, contact lenses, diabetes, trigeminal nerve disease, and medication timeline.',
      'Bring slit-lamp photos, fluorescein staining, corneal topography, OCT, culture results, and all eye drops.',
      'Record mild pain despite findings, blink problems, dry eye, recurrence frequency, and healing time.',
      'Bring neurology or imaging records if facial numbness, nerve surgery, or tumor history exists.',
    ],
    testsToAskAbout: [
      'Corneal sensitivity testing plus tear film and ocular surface staining.',
      'Slit-lamp staging and, when useful, corneal OCT or in vivo confocal microscopy.',
      'Corneal scraping, culture, or pathogen testing when infection is possible.',
      'Cause review: herpes, diabetes control, trigeminal disease, medication toxicity, and eyelid closure.',
    ],
    questionsForDoctor: [
      'How reduced is my corneal sensation, and what stage is the disease?',
      'Which drops should be stopped or changed to preservative-free options, and do I need a bandage lens, amniotic membrane, or tarsorrhaphy?',
      'Am I a candidate for recombinant nerve growth factor, serum tears, or another healing treatment?',
      'What changes mean the ulcer is worsening or perforation risk is urgent?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>The classic mismatch is that the exam may look serious while pain is limited. Symptoms can include blurred vision, light sensitivity, foreign-body sensation, tearing, dryness, or redness, but epithelial defects and ulcers may hurt less than expected.</p><p>Disease can progress from punctate epithelial changes to persistent epithelial defect, stromal ulcer, corneal melting, scarring, and perforation. Reduced sensation means infection or perforation may develop with fewer warning symptoms.</p>',
    diagnosis:
      '<p>Diagnosis relies on risk factors, slit-lamp findings, and reduced corneal sensation. The clinician assesses epithelial defect size, ulcer depth, tear film, eyelid closure, blinking, and infection.</p><p>Testing may include corneal sensation measurement, fluorescein staining, corneal OCT, in vivo confocal microscopy, tear assessment, and cultures. The team also searches for causes such as herpes virus, diabetes, trigeminal nerve disease, ocular surgery, medication toxicity, contact lens injury, or poor eyelid closure.</p>',
    treatment:
      '<p>Treatment protects the cornea, promotes epithelial healing, prevents infection, and reduces perforation risk. Early care includes stopping unnecessary or toxic drops, using preservative-free artificial tears and ointment, managing dry eye or exposure, and avoiding eye rubbing or unsupervised contact lens use.</p><p>Persistent defects or ulcers may need a bandage contact lens, amniotic membrane, serum tears, antimicrobial therapy, tarsorrhaphy, conjunctival flap, or other procedures. Recombinant human nerve growth factor can promote healing in selected patients. Imminent or actual perforation may require glue, corneal transplant, or emergency surgery.</p>',
    longTermCare:
      '<p>Long-term care tracks the corneal surface, sensation, tear film, and underlying cause. Patients should avoid topical anesthetic misuse, unsupervised medication changes, and prolonged preserved drops, and should return early when defects recur.</p><p>Diabetes, recurrent herpes, trigeminal disease, poor eyelid closure, and severe dry eye may require endocrine, neurology, or oculoplastic coordination.</p>',
    fertilityOrFamily:
      '<p>Most neurotrophic keratitis is not managed as an inherited disorder. Childhood onset, severe bilateral disease, or developmental or neurologic features may prompt genetic or metabolic evaluation.</p>',
    emergencySigns:
      '<p>Same-day ophthalmic care is needed for sudden vision loss, enlarging white opacity or ulcer, worsening redness, increased discharge, sudden severe pain, corneal thinning, or suspected perforation. Do not self-use topical anesthetic or steroid drops.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'StatPearls: Neurotrophic Keratitis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK431106/',
    },
    {
      name: 'American Academy of Ophthalmology: Neurotrophic Keratitis',
      type: 'official',
      url: 'https://www.aao.org/eyenet/article/neurotrophic-keratitis',
    },
  ],
  symptoms:
    '<p>Features include recurrent corneal epithelial defects or ulcers with limited pain, blurred vision, light sensitivity, dryness, corneal opacity, thinning, or perforation risk.</p>',
  diagnosis:
    '<p>Diagnosis combines risk factors, slit-lamp findings, reduced corneal sensation, ocular surface staining, tear and nerve evaluation, and infection or trigeminal-cause review when needed.</p>',
  treatment:
    '<p>Care includes ocular surface protection, stopping toxic drops, preservative-free lubrication, infection and cause control, and selected serum tears, amniotic membrane, tarsorrhaphy, recombinant nerve growth factor, or corneal surgery.</p>',
  prognosis:
    '<p>Early detection can preserve corneal clarity and vision; persistent epithelial defects, infection, melting, and perforation increase scarring and vision-loss risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 410,
    name: 'neurotrophic-keratitis-journey.png',
    url: '/images/diseases/neurotrophic-keratitis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

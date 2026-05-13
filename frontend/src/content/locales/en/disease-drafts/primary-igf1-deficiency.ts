import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryIgf1Deficiency: DiseaseDraft = {
  ...entity(2065, 'disease-primary-igf1-deficiency'),
  name: 'Primary IGF1 deficiency',
  nameEn: 'Primary IGF1 deficiency',
  alias:
    'Primary IGF-1 deficiency; severe primary IGF-1 deficiency; Laron syndrome related; China Second Rare Disease Catalog item 65',
  slug: 'primary-igf1-deficiency',
  oneSentence:
    'Primary IGF1 deficiency is a disorder in which the body cannot make enough IGF-1 or cannot respond properly to growth hormone, causing severe postnatal growth failure and short stature.',
  plainName:
    'A condition where growth hormone may be present but IGF-1 is too low for normal growth',
  prevalence:
    "Included in China's second rare disease catalog; severe primary IGF-1 deficiency is very rare and classically has very low height and IGF-1 with normal or high growth hormone.",
  quickLook: {
    whatItIs:
      'IGF-1 is a key downstream signal through which growth hormone supports height gain. In primary IGF-1 deficiency, the problem is GH resistance or IGF-1 production, not simply GH shortage.',
    whoToSeeFirst:
      'Severe short stature with slow growth, very low IGF-1, and normal or high GH stimulation results should be reviewed by pediatric endocrinology and medical genetics.',
    isGenetic:
      'Genes can include GHR, STAT5B, IGF1, IGFALS, and related pathway genes. Some forms are autosomal recessive, so genetic counseling is important after diagnosis.',
    hasTreatment:
      'Growth hormone is not a substitute for IGF-1 therapy. Eligible children with severe primary IGF-1 deficiency may receive mecasermin where available, with careful hypoglycemia prevention.',
    commonDelayReason:
      'It can be mistaken for ordinary GHD or familial short stature if GH, IGF-1, nutrition, thyroid, and chronic disease causes are not separated.',
  },
  patientJourney: {
    whenToSuspect: [
      'Birth length is near normal or low, followed by persistently very slow growth and severe short stature.',
      'IGF-1 and/or IGFBP-3 are very low while GH secretion is normal or high.',
      'Infant hypoglycemia, prominent forehead, depressed nasal bridge, blue sclerae, small hands and feet, delayed puberty, or low muscle strength.',
      'Consanguinity, multiple relatives with severe short stature, or poor response to prior GH therapy.',
    ],
    commonWrongTurns: [
      'Assuming severe short stature is familial after normal GH stimulation without evaluating the IGF-1 pathway.',
      'Using mecasermin as if it were ordinary growth hormone, despite it not being for GH deficiency, malnutrition, hypothyroidism, or steroid-related secondary low IGF-1.',
      'Giving treatment without meal timing or exercise planning, increasing hypoglycemia risk.',
    ],
    firstDepartments: [
      'Pediatric endocrinology',
      'Medical genetics',
      'Nutrition to exclude secondary causes',
      'Ophthalmology or ENT for treatment monitoring',
    ],
    diagnosisChecklist: [
      'Bring birth data, serial height and weight curves, parental heights, and puberty records.',
      'Bring IGF-1, IGFBP-3, GH stimulation, thyroid, nutrition, liver, kidney, and inflammation screening results.',
      'Record hypoglycemia, feeding, teeth, hearing, vision, snoring, puberty, and family short stature history.',
      'If GH or IGF-1 treatment was tried, record dose, adherence, growth response, and hypoglycemia events.',
    ],
    testsToAskAbout: [
      'Confirming severe primary IGF-1 deficiency using height SDS, IGF-1 SDS, normal or high GH, and exclusion of secondary causes.',
      'GHR, STAT5B, IGF1, IGFALS, and related gene testing.',
      'Bone age, puberty, pituitary, and broader endocrine assessment.',
      'For mecasermin: hypoglycemia prevention, intracranial hypertension, tonsil or adenoid enlargement, hip problems, and tumor contraindications.',
    ],
    questionsForDoctor: [
      'Is this primary IGF-1 deficiency, or secondary low IGF-1 from GHD, nutrition, hypothyroidism, or chronic disease?',
      'Does my child meet criteria for mecasermin, and why might GH treatment be ineffective or inappropriate?',
      'How should injections, meals, exercise, and glucose monitoring be organized?',
      'Do relatives need carrier testing, and what reproductive options exist?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Primary IGF-1 deficiency centers on severe growth failure and short stature. In classic Laron syndrome, postnatal growth is very slow and may be accompanied by prominent forehead, depressed nasal bridge, blue sclerae, small hands and feet, dental abnormalities, reduced muscle strength or endurance, infant hypoglycemia, and delayed puberty.</p><p>Features vary by gene. STAT5B-related disease can include immune dysfunction or lung disease; IGFALS deficiency can cause low IGF-1 and IGFBP-3 with variable short stature.</p>',
    diagnosis:
      '<p>The key is distinguishing primary from secondary low IGF-1. Malnutrition, hypothyroidism, chronic inflammation, liver or kidney disease, glucocorticoid exposure, and GHD can all lower IGF-1 and should be excluded.</p><p>Severe primary IGF-1 deficiency typically has height SDS <= -3, basal IGF-1 SDS <= -3, and normal or elevated GH. Genetic testing can identify GHR, IGF1, STAT5B, IGFALS, and related pathway disorders and guide counseling.</p>',
    treatment:
      '<p>Treatment is not the same as GHD treatment. If the problem is GH insensitivity, recombinant GH usually has limited effect. Eligible children may be assessed for recombinant human IGF-1, mecasermin, which must be given with a meal or snack to reduce hypoglycemia risk.</p><p>Monitoring includes growth velocity, weight, bone age, glucose, IGF-1 response, intracranial hypertension, tonsil or adenoid enlargement, sleep breathing, slipped capital femoral epiphysis, and malignancy contraindications. Closed growth plates or active malignancy limit treatment.</p>',
    longTermCare:
      '<p>Long-term care involves pediatric endocrinology, genetics, nutrition, dentistry, ophthalmology, and ENT. Families should track injection timing, meals, hypoglycemia symptoms, exercise, height, weight, and adverse effects.</p><p>Puberty and bone-age advancement shape the final height window. Adults may still need attention to metabolism, bone health, body composition, and reproductive issues.</p>',
    fertilityOrFamily:
      '<p>Many primary IGF-1 deficiency disorders are autosomal recessive, so parents may be carriers; other inheritance patterns exist. Once the gene is known, relatives can discuss carrier testing, prenatal diagnosis, or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>During treatment, hypoglycemia symptoms such as sweating, trembling, confusion, or seizures need urgent action. Severe headache, vomiting, blurred vision, worsening snoring or apnea, hip or knee pain, or limp should prompt urgent medical review.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Laron syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/laron-syndrome/',
    },
    {
      name: 'INCRELEX Prescribing Information: Severe Primary IGF-1 Deficiency',
      type: 'official',
      url: 'https://medlibrary.org/lib/rx/meds/increlex-1/',
    },
  ],
  symptoms:
    '<p>Main features are severe short stature and slow growth with very low IGF-1 despite normal or high GH, sometimes with infant hypoglycemia, characteristic facial features, small hands and feet, delayed puberty, and low muscle strength.</p>',
  diagnosis:
    '<p>Diagnosis excludes secondary low IGF-1 and combines height SDS, IGF-1 SDS, GH levels, bone age, and gene testing such as GHR, IGF1, STAT5B, and IGFALS.</p>',
  treatment:
    '<p>Eligible children with severe primary IGF-1 deficiency may be assessed for mecasermin; it is not a substitute for GH and requires meal-linked dosing and monitoring for hypoglycemia, intracranial hypertension, tonsil/adenoid enlargement, and hip risk.</p>',
  prognosis:
    '<p>Outlook depends on gene, age at diagnosis, treatment access, and adherence. Early recognition helps avoid treating GH insensitivity as ordinary GHD.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 419,
    name: 'primary-igf1-deficiency-journey.png',
    url: '/images/diseases/primary-igf1-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

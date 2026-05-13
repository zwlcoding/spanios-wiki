import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAutoimmuneHypophysitis: DiseaseDraft = {
  ...entity(12, 'disease-autoimmune-hypophysitis'),
  name: 'Autoimmune Hypophysitis',
  nameEn: 'Autoimmune Hypophysitis',
  alias: 'Lymphocytic hypophysitis, IgG4-related hypophysitis',
  slug: 'autoimmune-hypophysitis',
  oneSentence:
    'Autoimmune hypophysitis is a rare condition where immune inflammation affects the pituitary gland, which may cause headache, vision changes, diabetes insipidus, or multiple hormone deficiencies.',
  plainName:
    'A rare condition where immune inflammation affects pituitary function',
  prevalence:
    'Overall very rare, with widely varying estimates in published research; some types are more common in pregnant or postpartum women, and can also occur in other populations or in contexts related to immunotherapy.',
  quickLook: {
    whatItIs:
      'The pituitary is a key endocrine organ that regulates the adrenal glands, thyroid, gonads, growth, and water-salt balance. When autoimmune hypophysitis occurs, inflammation can cause enlargement of the pituitary gland or stalk, and may lead to decreased function of certain hormone axes.',
    whoToSeeFirst:
      'It is recommended to first visit endocrinology for evaluation; if there are vision or visual field changes, or imaging suggests a sellar mass, neurosurgery and ophthalmology are often involved in the assessment.',
    isGenetic:
      'It is usually not a single-gene hereditary disorder. It is more often related to autoimmune conditions, pregnancy/postpartum immune changes, IgG4-related disease, or immune checkpoint inhibitor therapy.',
    hasTreatment:
      'There are treatment and follow-up options, but these should be comprehensively determined by an endocrinology specialist based on hormone deficiencies, compression symptoms, imaging changes, and the underlying cause. Do not self-prescribe or adjust hormone medications.',
    commonDelayReason:
      'Early symptoms such as headache, fatigue, cold intolerance, menstrual changes, or increased thirst and urination are not specific; they can easily be mistaken for ordinary headache, postpartum tiredness, thyroid problems, or urinary issues. Imaging may also be confused with pituitary adenoma.',
  },
  patientJourney: {
    whenToSuspect: [
      'Persistent or recurrent headache, especially with vision loss, visual field defects, or a sense of eye pressure.',
      'Obvious signs of pituitary hormone deficiency such as fatigue, low blood pressure, cold intolerance, menstrual irregularities, decreased libido, or insufficient milk production after childbirth.',
      'Increased thirst, frequent urination, or notably increased nighttime urination, suggesting possible central diabetes insipidus.',
      'Sellar lesion, headache, and endocrine abnormalities during pregnancy or the postpartum period.',
      'New endocrine symptoms during or after treatment with immune checkpoint inhibitors.',
      'Evidence of Hashimoto thyroiditis, systemic autoimmune disease, or IgG4-related disease.',
    ],
    commonWrongTurns: [
      'Treating headache as ordinary or migraine without simultaneously evaluating pituitary hormones and sellar imaging.',
      'Attributing postpartum fatigue, inability to lactate, or menstrual irregularities to slow recovery, missing pituitary insufficiency.',
      'Attributing increased thirst and urination to drinking habits or urinary issues without checking for diabetes insipidus.',
      'Seeing pituitary enlargement and immediately interpreting it as pituitary adenoma without considering inflammation, immunity, and hormone axis information.',
      'Self-discontinuing or adjusting hormone replacement medications without medical guidance.',
    ],
    firstDepartments: [
      'Endocrinology',
      'Neurosurgery (when compression symptoms are present or sellar mass needs to be differentiated)',
      'Ophthalmology (visual acuity and visual field evaluation)',
      'Rheumatology (when IgG4-related disease or other systemic autoimmune disease is suspected)',
    ],
    diagnosisChecklist: [
      'Compile information on headache, vision and visual field changes, polydipsia and polyuria, menstrual/sexual function, postpartum lactation, and history of immunotherapy.',
      'Bring pituitary MRI with and without contrast, visual field testing, previous hormone test results, and medication list.',
      'Confirm with your doctor whether a complete pituitary hormone axis evaluation is needed, including adrenal, thyroid, gonadal, growth hormone axes and prolactin.',
      'Document any history of autoimmune disease, IgG4-related disease, infection, tumor treatment, or other sellar conditions.',
    ],
    testsToAskAbout: [
      'Pituitary and target gland hormone evaluation, such as ACTH/cortisol, TSH/free T4, LH/FSH, sex hormones, prolactin, and IGF-1.',
      'Contrast-enhanced sellar MRI and follow-up imaging, paying attention to pituitary size, stalk, and compression of the optic chiasm.',
      'Visual field testing.',
      'Evaluation for central diabetes insipidus if polydipsia and polyuria are present.',
      'Tests to differentiate autoimmune, IgG4-related disease, or infectious/granulomatous conditions.',
      'Whether neurosurgical evaluation for biopsy is needed if the diagnosis is unclear, the lesion is progressing, or other tumor or infection is suspected.',
    ],
    questionsForDoctor: [
      'Is my condition more likely autoimmune hypophysitis, IgG4-related hypophysitis, pituitary adenoma, or another sellar disease?',
      'Which hormone axes are currently affected? Which need treatment first, and which require long-term monitoring?',
      'Is there a risk of optic chiasm compression or diabetes insipidus? How often should I have imaging and visual field checks?',
      'Is the treatment goal to relieve compression, control inflammation, or replace deficient hormones?',
      'If I am receiving tumor immunotherapy, how should endocrine management be coordinated with oncology?',
      'What symptoms indicate that I need emergency care or should contact my doctor right away?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Manifestations of autoimmune hypophysitis come from two aspects: compression symptoms from inflammation and enlargement of the pituitary or stalk, such as headache, visual field defects, or vision loss; and pituitary hormone insufficiency or posterior lobe involvement, such as fatigue, low blood pressure, cold intolerance, menstrual or sexual function changes, insufficient postpartum lactation, increased thirst and urination. Presentation varies considerably across subtypes, disease stages, and triggers.</p>',
    diagnosis:
      '<p>Diagnosis usually combines clinical presentation, pituitary hormone axis testing, sellar MRI, visual field examination, and clues for autoimmune or IgG4-related disease. Pituitary biopsy can provide pathological evidence but is invasive and usually only considered by a specialist team when the diagnosis is unclear, the lesion is progressing, or tumor or infection is suspected.</p><p>Physicians need to rule out pituitary adenoma, Rathke cleft cyst, craniopharyngioma, infection, sarcoidosis, Langerhans cell histiocytosis, IgG4-related disease, and immunotherapy-related hypophysitis.</p>',
    treatment:
      '<p>Treatment depends on the presence of compression symptoms, hormone deficiencies, diabetes insipidus, lesion progression, and the underlying cause. Management may include hormone replacement, anti-inflammatory or immunotherapy, imaging follow-up, and neurosurgical evaluation in select cases. Specific medication choices, order, duration, and tapering should be determined by your physician based on test results.</p>',
    longTermCare:
      '<p>Long-term follow-up focuses on pituitary hormone axes, visual acuity and fields, sellar MRI changes, urine output/thirst, and signs of recurrence. Patients with confirmed hormone deficiencies should keep diagnosis records, medication lists, and emergency instructions. Before stressful events such as infection, surgery, trauma, or severe illness, confirm management plans with your treating doctor.</p>',
    fertilityOrFamily:
      '<p>When pituitary function is affected, menstruation, ovulation, sex hormones, lactation, and pregnancy planning may all be impacted. For patients of childbearing age with needs around conception, pregnancy, or postpartum management, a joint evaluation by endocrinology and obstetrics is recommended. This condition is generally not directly hereditary; family risk is more related to autoimmune background.</p>',
    emergencySigns:
      '<p>If you experience sudden severe headache, rapid vision or visual field decline, altered consciousness, severe low blood pressure, repeated vomiting, obvious dehydration, or notable worsening in someone with known pituitary/adrenal insufficiency during fever, surgery, or trauma, seek emergency care promptly and proactively inform providers of your hypophysitis or pituitary insufficiency history.</p>',
  },
  sources: [
    {
      name: 'Japan Endocrine Society: Autoimmune and IgG4-related hypophysitis guideline',
      type: 'clinical-guideline',
      url: 'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
    },
    {
      name: 'Endotext: Hypophysitis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519842/',
    },
    {
      name: 'Hypophysitis: Evaluation and Management',
      type: 'review',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5471685/',
    },
  ],
  symptoms:
    '<p>Common clues include headache, vision or visual field changes, polydipsia and polyuria, and pituitary hormone axis deficiencies such as adrenal, thyroid, and gonadal insufficiency.</p>',
  diagnosis:
    '<p>Evaluation usually combines pituitary hormone testing, sellar MRI, visual field testing, and differentiation from autoimmune/IgG4-related disease.</p>',
  treatment:
    '<p>Treatment should be planned by an endocrinology specialist based on compression symptoms, hormone deficiencies, and the underlying cause; options may include hormone replacement, anti-inflammatory or immunotherapy, and follow-up imaging.</p>',
  prognosis:
    '<p>Clinical course varies widely. Timely recognition of hormone deficiencies, optic pathway compression, and diabetes insipidus, along with regular follow-up, helps reduce acute risks and long-term underdiagnosis.</p>',
  sourceName: 'Japan Endocrine Society guideline',
  sourceUrl:
    'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 312,
    name: 'autoimmune-hypophysitis-journey.png',
    url: '/images/diseases/autoimmune-hypophysitis-journey.png',
  },
  tagSlugs: ['endocrine'],
};

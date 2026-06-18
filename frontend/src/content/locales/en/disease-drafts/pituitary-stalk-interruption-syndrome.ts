import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePituitaryStalkInterruptionSyndrome: DiseaseDraft = {
  ...entity(6103, 'disease-pituitary-stalk-interruption-syndrome'),
  name: 'Pituitary Stalk Interruption Syndrome',
  nameEn: 'Pituitary Stalk Interruption Syndrome',
  alias:
    'PSIS, ectopic posterior pituitary, congenital hypopituitarism-related syndrome',
  oneSentence:
    'Pituitary stalk interruption syndrome is a congenital hypothalamic-pituitary developmental disorder with an absent or thin pituitary stalk, ectopic or absent posterior pituitary, and small anterior pituitary that can cause growth hormone and other pituitary hormone deficiencies.',
  plainName:
    'A pituitary connection problem that can cause poor growth and multiple hormone deficiencies',
  prevalence:
    'Prevalence is unknown and the condition is generally described as rare in GARD and review sources.',
  quickLook: {
    whatItIs:
      'The pituitary stalk connects the hypothalamus and pituitary. Developmental interruption can affect growth hormone, thyroid, adrenal, gonadal, and water-balance hormone pathways.',
    whoToSeeFirst:
      'Neonatal hypoglycemia, prolonged jaundice, micropenis or undescended testes in boys, short stature, or absent puberty should prompt pediatric endocrinology and genetics assessment.',
    isGenetic:
      'Most cases have no clear cause; a minority involve developmental genes such as HESX1 or LHX4. Genetic testing is considered when malformations or family history are present.',
    hasTreatment:
      'Treatment is hormone replacement and long-term monitoring, such as growth hormone, thyroid hormone, hydrocortisone, sex steroids, or desmopressin when indicated. Endocrinology must guide order and dosing.',
    commonDelayReason:
      'Hypoglycemia, jaundice, or short stature may be treated separately. Diagnosis is delayed when pituitary MRI and full hormone-axis testing are not done.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn has recurrent hypoglycemia, seizures, prolonged jaundice, poor feeding, or poor weight gain.',
      'A boy has micropenis or undescended testes, or a child has clearly slow height velocity.',
      'Delayed puberty, fatigue, low blood pressure, cold intolerance, excessive thirst or urination suggests pituitary hormone deficiency.',
      'Pituitary MRI shows absent/thin stalk, ectopic posterior pituitary, or anterior pituitary hypoplasia.',
    ],
    commonWrongTurns: [
      'Watching short stature as nutrition or constitutional delay without checking growth hormone and other pituitary axes.',
      'Starting thyroid hormone before assessing cortisol, increasing adrenal crisis risk.',
      'Considering pituitary disease only after repeated hypoglycemia or seizures.',
    ],
    firstDepartments: [
      'Pediatric endocrinology',
      'Medical genetics',
      'Neonatology/pediatrics',
      'Ophthalmology or neuroimaging-related clinic',
    ],
    diagnosisChecklist: [
      'Bring birth history, hypoglycemia and jaundice records, growth charts, bone age, and puberty history.',
      'Bring pituitary MRI, thyroid/adrenal/gonadal axis results, GH stimulation test, IGF-1, and electrolytes.',
      'Record excessive thirst/urination, low blood pressure, fatigue, cold intolerance, seizures, and family history.',
    ],
    testsToAskAbout: [
      'Dedicated pituitary/sellar MRI with contrast when appropriate.',
      'GH-IGF-1 axis, ACTH-cortisol axis, TSH-free T4, LH/FSH-sex steroids, prolactin, and electrolytes.',
      'Urine volume/osmolality and diabetes insipidus testing if needed; genetic testing when malformations or family history exist.',
    ],
    questionsForDoctor: [
      'Which hormone axes are deficient and which need treatment first?',
      'Do we need an emergency hydrocortisone plan and medical alert card?',
      'How will growth hormone treatment, monitoring, and puberty induction be planned?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Newborns may have hypoglycemia, seizures, prolonged jaundice, poor feeding, poor weight gain, and in boys micropenis or undescended testes. Children often present with short stature, slow growth, or delayed puberty. Some have central hypothyroidism, secondary adrenal insufficiency, hypogonadism, or diabetes insipidus.</p>',
    diagnosis:
      '<p>Diagnosis combines the pituitary MRI pattern with hormone-axis evaluation. Imaging may show absent or very thin pituitary stalk, ectopic or absent posterior pituitary, and small anterior pituitary. Hormone testing defines which axes are affected and guides replacement order.</p>',
    treatment:
      '<p>Treatment replaces deficient hormones. If ACTH-cortisol deficiency is present, adrenal replacement is usually addressed before thyroid hormone. Growth hormone, puberty induction with sex steroids, and desmopressin depend on the individual deficiency pattern.</p>',
    longTermCare:
      '<p>Long-term pediatric endocrine follow-up tracks height velocity, bone age, puberty, weight and metabolism, blood pressure, electrolytes, stress-dose steroid education, and medication side effects. Transition to adult endocrinology should include re-evaluation of hormone axes.</p>',
    fertilityOrFamily:
      '<p>Most cases are sporadic, but families with other midline defects, family history, or multisystem findings can discuss genetic testing and recurrence risk with genetics specialists.</p>',
    emergencySigns:
      '<p>Urgent care is needed for hypoglycemia, seizure, severe vomiting or diarrhea, infection with marked lethargy, low blood pressure, altered consciousness, or suspected adrenal crisis. Tell clinicians about possible pituitary hormone deficiency.</p>',
  },
  sources: [
    {
      name: 'GARD: Pituitary stalk interruption syndrome',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/12421/pituitary-stalk-interruption-syndrome',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Features can include neonatal hypoglycemia, jaundice, seizures, poor feeding, micropenis or undescended testes, short stature, delayed puberty, and multiple pituitary hormone deficiencies.</p>',
  diagnosis:
    '<p>Diagnosis uses pituitary MRI showing the characteristic pattern plus full pituitary hormone-axis assessment, with genetic testing or malformation screening when indicated.</p>',
  treatment:
    '<p>Management is hormone replacement and long-term endocrine follow-up, with careful attention to adrenal, thyroid, growth, puberty, and diabetes insipidus treatment order.</p>',
  prognosis:
    '<p>Timely diagnosis and replacement therapy can improve growth and reduce metabolic risk; delays may lead to hypoglycemia, adrenal crisis, or developmental impact.</p>',
  sourceName: 'GARD: Pituitary stalk interruption syndrome',
  sourceUrl:
    'https://rarediseases.info.nih.gov/diseases/12421/pituitary-stalk-interruption-syndrome',
  slug: 'pituitary-stalk-interruption-syndrome',
  categorySlug: 'genetic-developmental',
  charityIds: [86],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['endocrine'],
};

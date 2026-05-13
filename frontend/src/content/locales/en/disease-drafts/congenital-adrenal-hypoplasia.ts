import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalAdrenalHypoplasia: DiseaseDraft = {
  ...entity(21, 'disease-congenital-adrenal-hypoplasia'),
  name: 'Congenital Adrenal Hypoplasia',
  nameEn: 'Congenital Adrenal Hypoplasia',
  alias:
    'X-linked Congenital Adrenal Hypoplasia, NR0B1-Related Adrenal Hypoplasia',
  slug: 'congenital-adrenal-hypoplasia',
  oneSentence:
    'Congenital adrenal hypoplasia is an inherited adrenal insufficiency disorder that can present in newborns or children with hypoglycemia, vomiting, dehydration, low blood pressure, skin darkening, or salt-wasting crisis.',
  plainName:
    'A rare genetic condition where underdevelopment of the adrenal glands leads to insufficient hormone production',
  prevalence:
    'Overall rare. The X-linked NR0B1-related type mainly affects males, though prevalence varies due to family variants and carrier females.',
  quickLook: {
    whatItIs:
      'The adrenal glands produce important hormones that maintain blood pressure, blood sugar, and salt balance. When related genes are abnormal, the adrenal glands function inadequately from birth, making the body more prone to crisis during infection, fever, or dehydration.',
    whoToSeeFirst:
      'For newborns or children with unexplained hypoglycemia, recurrent vomiting, dehydration, low sodium and high potassium, low blood pressure, darkening skin, or shock—seek emergency care first; follow up long-term with pediatric endocrinology or endocrinology after stabilization.',
    isGenetic:
      'Yes. The classic X-linked type is related to NR0B1 and usually affects males; other genetic or developmental causes also exist. Genetic counseling should include gene testing and family history.',
    hasTreatment:
      'Yes, long-term hormone replacement and crisis prevention plans exist, but require individualized planning by an endocrinology specialist. Patients and families need to understand when to seek emergency care during illness, fever, surgery, or other stress situations.',
    commonDelayReason:
      'Early symptoms can resemble feeding difficulties, gastroenteritis, infections, or common hypoglycemia; without timely electrolyte, cortisol/ACTH testing and family history review, diagnosis is often delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Recurrent vomiting, poor feeding, poor weight gain, dehydration, or lethargy in newborns or infants.',
      'Hypoglycemia, low sodium, high potassium, low blood pressure, shock, or unexplained acidosis.',
      'Darkening of skin or mucous membranes, especially with clues suggesting adrenal insufficiency.',
      'Boys with delayed puberty, hypogonadism, and a history of adrenal insufficiency.',
      'Family history of male infant deaths, adrenal crises, or similar endocrine diagnoses.',
    ],
    commonWrongTurns: [
      'Treating recurrent vomiting and dehydration only as gastroenteritis without checking electrolytes and adrenal axis.',
      'Recurrent hypoglycemia without investigating birth history, family history, or skin pigmentation.',
      'After diagnosis, failing to prepare emergency instructions and stress management plans, increasing risk during fever or surgery.',
      'Focusing only on adrenal crises while neglecting puberty development, gonadal function, and genetic counseling.',
    ],
    firstDepartments: [
      'Emergency department (for shock, altered consciousness, severe dehydration, or hypoglycemia)',
      'Pediatric endocrinology',
      'Endocrinology',
      'Medical genetics / genetic counseling clinic',
    ],
    diagnosisChecklist: [
      'Document hypoglycemia, electrolyte, blood gas, cortisol, ACTH, renin-aldosterone, and other test results.',
      'Record triggers: infection, fever, vomiting, fasting, surgery, or missed medications.',
      'Confirm whether NR0B1 and other adrenal development/insufficiency-related genetic testing is needed.',
      'Prepare an emergency information card listing diagnosis, managing physician, medications, and crisis management principles.',
      'After puberty, monitor gonadal function, height growth, bone health, and fertility-related concerns.',
    ],
    testsToAskAbout: [
      'Electrolytes, blood sugar, blood gas, and kidney function.',
      'Cortisol, ACTH, renin, aldosterone, and related endocrine evaluations.',
      'Adrenal imaging and assessment for other developmental abnormalities.',
      'NR0B1 or adrenal insufficiency-related genetic testing.',
      'Carrier testing for family members and assessment of reproductive risks.',
    ],
    questionsForDoctor: [
      'Does this episode fit an adrenal crisis? What situations require going directly to the emergency department in the future?',
      'What should the daily hormone replacement and sick-day management plan look like, and what documents should I carry?',
      'What genetic testing is needed? Do family members need screening?',
      'When should follow-up for puberty, gonadal function, and fertility begin?',
      'What risks and contact information does the school or caregivers need to know?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Symptoms may begin in the neonatal period or infancy, including feeding difficulties, recurrent vomiting, dehydration, hypoglycemia, low blood pressure, low sodium and high potassium, shock, and skin darkening. Some patients may also develop delayed puberty, hypogonadism, or fertility-related issues in childhood or adolescence. Infections, fever, vomiting, fasting, and surgery can trigger crises.</p>',
    diagnosis:
      '<p>Diagnosis combines blood sugar, electrolytes, cortisol, ACTH, renin-aldosterone axis findings, clinical presentation, and family history during acute episodes. Genetic testing for NR0B1 and other genes can help clarify subtype and family risk. Physicians also need to rule out other causes of primary adrenal insufficiency and congenital adrenal hyperplasia.</p>',
    treatment:
      '<p>Long-term management typically includes hormone replacement under endocrinology specialist guidance, stress-dosing plans, emergency instructions, and regular monitoring. Doses and adjustments should be determined by your physician based on age, weight, growth, blood pressure, electrolytes, and clinical status—do not change medications based on internet information.</p>',
    longTermCare:
      "<p>Follow-up focuses on growth and development, blood pressure, electrolytes, adrenal crisis prevention, puberty and gonadal function, bone health, and family emergency preparedness. Keep diagnosis documents, medication lists, emergency cards, and your physician's contact information accessible. Ensure schools and caregivers know when emergency care is needed.</p>",
    fertilityOrFamily:
      '<p>Family members of X-linked cases can learn about carrier testing, male relative screening, prenatal diagnosis, and preimplantation genetic testing options through genetic counseling. Adult male patients may need evaluation of gonadal function and fertility-related concerns.</p>',
    emergencySigns:
      '<p>Severe vomiting with inability to eat, significant dehydration, hypoglycemia, altered consciousness, seizures, low blood pressure, shock, worsening mental status with fever or infection, or feeling unwell after possibly missing key medications—go to the emergency department immediately and report suspected or confirmed adrenal insufficiency.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
    },
    {
      name: 'MedlinePlus Genetics: X-linked adrenal hypoplasia congenita',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/x-linked-adrenal-hypoplasia-congenita/',
    },
    {
      name: 'Orphanet: X-linked adrenal hypoplasia congenita',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/95702',
    },
  ],
  symptoms:
    '<p>Manifestations may include hypoglycemia, vomiting, dehydration, low blood pressure, low sodium and high potassium, skin darkening, shock, as well as delayed puberty or hypogonadism.</p>',
  diagnosis:
    '<p>Evaluations include blood sugar, electrolytes, cortisol, ACTH, renin-aldosterone axis, family history, and NR0B1 and other genetic testing.</p>',
  treatment:
    '<p>Management relies on endocrinology specialist-guided long-term hormone replacement, stress management plans, and crisis prevention. Patients should not adjust medications on their own.</p>',
  prognosis:
    '<p>Early recognition and appropriate replacement therapy can significantly reduce crisis risk; long-term outlook depends on crisis prevention, follow-up care, and management of puberty and gonadal function.</p>',
  sourceName: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 320,
    name: 'congenital-adrenal-hypoplasia-journey.png',
    url: '/images/diseases/congenital-adrenal-hypoplasia-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
};

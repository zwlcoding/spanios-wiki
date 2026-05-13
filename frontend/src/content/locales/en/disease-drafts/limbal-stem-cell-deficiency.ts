import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLimbalStemCellDeficiency: DiseaseDraft = {
  ...entity(2045, 'disease-limbal-stem-cell-deficiency'),
  name: 'Limbal stem cell deficiency',
  nameEn: 'Limbal stem cell deficiency',
  alias:
    'LSCD, limbal stem cell dysfunction, China Second Rare Disease Catalog item 45',
  slug: 'limbal-stem-cell-deficiency',
  oneSentence:
    'Limbal stem cell deficiency occurs when the stem cells at the edge of the cornea are reduced or dysfunctional, causing recurrent redness, pain, light sensitivity, reduced vision, unstable corneal surface, and abnormal blood-vessel growth.',
  plainName:
    'An ocular surface disease where the cornea loses its normal repair system',
  prevalence:
    "Included in China's second rare disease catalog; it is uncommon and may follow chemical or thermal injury, severe ocular surface inflammation, congenital disease, contact lens damage, or repeated eye surgery.",
  quickLook: {
    whatItIs:
      'The limbus is the border between the cornea and the white of the eye. Its stem cells renew the clear corneal surface. In LSCD, conjunctival-like tissue can grow over the cornea, causing clouding, recurrent breakdown, and vision loss.',
    whoToSeeFirst:
      'Recurrent red painful eyes, light sensitivity, tearing, epithelial defects, fluctuating or reduced vision, especially after chemical injury, severe inflammation, long contact lens use, or multiple eye surgeries, should be assessed by a cornea/ocular surface specialist.',
    isGenetic:
      'Most LSCD is acquired, not inherited. A minority is related to congenital aniridia, ectodermal dysplasia, or other genetic conditions and may need genetic counseling.',
    hasTreatment:
      'Treatment first stabilizes inflammation, dry eye, and eyelid problems, then may use medicines, protective lenses, amniotic membrane, limbal stem cell transplantation, or cultivated epithelial transplantation. Routine corneal transplant alone is often not enough.',
    commonDelayReason:
      'Early LSCD can be mistaken for dry eye, keratitis, or conjunctivitis. Recurrent epithelial problems and persistent new vessels need ocular surface specialist review.',
  },
  patientJourney: {
    whenToSuspect: [
      'Redness, pain, foreign-body sensation, light sensitivity, tearing, and fluctuating vision recur.',
      'Clinicians repeatedly mention epithelial defects, corneal new vessels, conjunctivalization, or an irregular corneal surface.',
      'History includes chemical/thermal burn, Stevens-Johnson syndrome, ocular cicatricial pemphigoid, long contact lens use, ocular surface tumor removal, or multiple eye surgeries.',
      'Anti-inflammatory, anti-infective, or dry-eye treatment helps only briefly and symptoms return.',
    ],
    commonWrongTurns: [
      'Long-term self-treatment as dry eye or conjunctivitis without limbal and ocular surface assessment.',
      'Rushing to corneal transplantation before ocular surface inflammation is controlled.',
      'Missing eyelid disease, blepharitis, tear dysfunction, trichiasis, or systemic immune disease that affects success.',
      'Not discussing donor source and immune suppression when one-eye versus two-eye LSCD changes treatment strategy.',
    ],
    firstDepartments: [
      'Cornea/ocular surface clinic',
      'Ophthalmology',
      'Immune-mediated eye disease clinic',
      'Oculoplastics/eyelid clinic',
    ],
    diagnosisChecklist: [
      'Bring history of eye injury, chemical burn, surgery, contact lens use, and ocular surface inflammation.',
      'Bring slit-lamp photos, corneal topography, anterior segment OCT, confocal microscopy, or impression cytology results.',
      'List all eye drops, steroids/immunosuppressants, artificial tears, bandage lenses, and procedure responses.',
      'Clarify one-eye versus two-eye disease and any autoimmune, skin/mucosal disease, or medication allergy history.',
    ],
    testsToAskAbout: [
      'Slit-lamp exam and fluorescein staining to assess epithelium, conjunctivalization, new vessels, and disease extent.',
      'Anterior segment OCT, corneal topography, confocal microscopy, or impression cytology when helpful.',
      'Dry eye, blepharitis, trichiasis, eyelid closure, and tear function assessment.',
      'If transplant is considered, ask about autologous/allogeneic stem cell source, immune suppression, and timing.',
    ],
    questionsForDoctor: [
      'Is my LSCD partial or total, and is it one eye or both eyes?',
      'What must be controlled first: inflammation, dry eye, eyelid disease, or epithelial breakdown?',
      'Am I a candidate for limbal stem cell transplantation, and why might corneal transplant alone fail?',
      'How often is follow-up needed, and how are infection, rejection, and immune suppression monitored?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>LSCD can cause recurrent redness, pain, foreign-body sensation, light sensitivity, tearing, fluctuating or reduced vision. The corneal surface may develop recurrent epithelial defects, chronic inflammation, new vessels, clouding, and irregular astigmatism.</p><p>Causes include chemical or thermal burns, severe ocular surface inflammation, Stevens-Johnson syndrome, ocular cicatricial pemphigoid, congenital aniridia, contact lens damage, ocular surface tumor removal, or repeated eye surgery.</p>',
    diagnosis:
      '<p>Diagnosis is made by an ocular surface specialist, focusing on corneal conjunctivalization, limbal damage, epithelial instability, and new vessels. Slit-lamp exam, fluorescein staining, anterior segment OCT, confocal microscopy, and impression cytology can help define extent and severity.</p><p>Mimics include dry eye, infectious keratitis, recurrent corneal erosion, neurotrophic keratopathy, corneal endothelial disease, and other ocular surface scarring disorders.</p>',
    treatment:
      '<p>The first step is improving the ocular surface: controlling inflammation, treating dry eye and blepharitis, correcting trichiasis or poor eyelid closure, avoiding triggers, and protecting the epithelium. Mild or moderate disease may stabilize with medicines and protective care.</p><p>Severe or total LSCD may require autologous or allogeneic limbal stem cell transplantation, cultivated epithelial transplantation, amniotic membrane, or other reconstruction. Corneal transplantation alone often fails if the stem cell system is not restored first.</p>',
    longTermCare:
      '<p>Long-term follow-up tracks epithelial stability, new vessels, inflammation, vision, eye pressure, infection, and surgery or immune-suppression side effects. Two-eye and autoimmune-related disease often need more complex long-term care.</p>',
    fertilityOrFamily:
      '<p>Most LSCD is not inherited. If it is related to aniridia, ectodermal dysplasia, or another genetic syndrome, medical genetics can assess family risk and reproductive counseling needs.</p>',
    emergencySigns:
      '<p>Sudden vision loss, severe eye pain, marked redness and light sensitivity, corneal white spot or discharge, eye trauma, worsening postoperative pain, or suspected infection/rejection needs urgent ophthalmic care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'StatPearls: Limbal Stem Cell Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557444/',
    },
  ],
  symptoms:
    '<p>Common symptoms include recurrent redness, pain, foreign-body sensation, light sensitivity, tearing, fluctuating or reduced vision, with unstable epithelium, conjunctivalization, new vessels, and corneal clouding.</p>',
  diagnosis:
    '<p>Diagnosis is made by ocular surface specialists using slit-lamp exam, fluorescein staining, anterior segment OCT, confocal microscopy, or impression cytology to assess the limbus and corneal epithelium.</p>',
  treatment:
    '<p>Treatment first controls inflammation, dry eye, blepharitis, and eyelid issues; severe disease may need limbal stem cell transplantation, cultivated epithelial transplantation, amniotic membrane, or other reconstruction.</p>',
  prognosis:
    '<p>Outcome depends on cause, extent, inflammation control, and whether a stable ocular surface can be restored. Early cornea/ocular surface referral lowers clouding and surgical failure risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 399,
    name: 'limbal-stem-cell-deficiency-journey.png',
    url: '/images/diseases/limbal-stem-cell-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

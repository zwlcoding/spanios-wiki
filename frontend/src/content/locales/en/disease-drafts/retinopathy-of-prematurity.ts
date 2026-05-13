import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRetinopathyOfPrematurity: DiseaseDraft = {
  ...entity(2071, 'disease-retinopathy-of-prematurity'),
  name: 'Retinopathy of prematurity',
  nameEn: 'Retinopathy of prematurity',
  alias: 'ROP; China Second Rare Disease Catalog item 71',
  oneSentence:
    'Retinopathy of prematurity is abnormal retinal blood vessel development in premature or very low birth weight infants, which can cause retinal detachment and lifelong vision loss if severe.',
  plainName:
    'An eye disease in premature babies that needs timed retina screening',
  prevalence:
    "Included in China's second rare disease catalog; risk is driven mainly by gestational age, birth weight, and neonatal illness, with the smallest and earliest babies at highest risk.",
  quickLook: {
    whatItIs:
      'ROP occurs while retinal vessels are still immature. Abnormal vessels can grow, leak, scar, and pull on the retina. Early disease is not visible from the outside and needs eye screening.',
    whoToSeeFirst:
      'Premature babies who meet screening criteria need dilated retinal exams arranged by neonatology and ophthalmology. White pupil, crossed eyes, abnormal eye movements, or vision concerns need pediatric retina care.',
    isGenetic:
      'ROP is usually not inherited; prematurity, low birth weight, oxygen exposure, and neonatal illness are the main risks.',
    hasTreatment:
      'Mild disease may be observed. High-risk disease can be treated with laser or anti-VEGF eye injections; retinal detachment may need vitreoretinal surgery.',
    commonDelayReason:
      'Babies cannot report vision problems and early eyes may look normal. Missing the next scheduled retina exam after discharge can miss the treatment window.',
  },
  patientJourney: {
    whenToSuspect: [
      'Prematurity or low birth weight, especially very early gestation or NICU oxygen, ventilation, transfusion, or infection.',
      'ROP has been found but follow-up is not complete until retinal vessels mature.',
      'White pupil, strabismus, nystagmus, poor visual tracking, high myopia, or abnormal retina exam.',
    ],
    commonWrongTurns: [
      'Assuming hospital discharge means ROP screening is finished.',
      'Relying on normal-looking eyes instead of dilated retina exams.',
      'Stopping follow-up after treatment and missing recurrence, myopia, strabismus, amblyopia, or retinal sequelae.',
    ],
    firstDepartments: [
      'Neonatology',
      'Pediatric ophthalmology or retina clinic',
      'Vitreoretinal specialist',
      'Pediatric vision and low-vision rehabilitation',
    ],
    diagnosisChecklist: [
      'Bring gestational age, birth weight, NICU course, oxygen or ventilation, transfusion, and infection records.',
      'Bring each retina screening report, including zone, stage, plus disease, treatment date, and follow-up plan.',
      'Record visual tracking, strabismus, white pupil, nystagmus, refraction, and amblyopia treatment.',
    ],
    testsToAskAbout: [
      'Current ROP zone, stage, plus disease, and latest safe date for the next exam.',
      'Whether laser or anti-VEGF treatment is indicated and how recurrence will be monitored.',
      'Need for refraction, strabismus, amblyopia, and long-term retina follow-up.',
    ],
    questionsForDoctor: [
      'Are the retinal vessels mature enough to stop ROP screening?',
      'If treatment is needed, how do laser and anti-VEGF differ for follow-up and recurrence?',
      'Which eye changes after discharge need urgent review?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Early ROP usually has no visible symptoms, and infants cannot report vision change. Severe or late disease may cause white pupil, strabismus, abnormal eye movements, high myopia, retinal traction, or retinal detachment.</p><p>Risk relates to prematurity, birth weight, neonatal illness, oxygen treatment, infection, transfusion, and respiratory support. Even after successful treatment, children may later have myopia, strabismus, amblyopia, or retinal problems.</p>',
    diagnosis:
      '<p>Diagnosis requires a dilated retinal examination by an experienced ophthalmologist, documenting zone, stage, extent, and plus disease. Screening eligibility and first exam timing depend on gestational age, birth weight, and neonatal risk.</p><p>Follow-up is not a one-time exam. Visits continue until retinal vessels mature, disease regresses, or treated disease is stable.</p>',
    treatment:
      '<p>Mild ROP often regresses but requires scheduled monitoring. When treatment criteria are met, laser photocoagulation can reduce abnormal vessel growth. Anti-VEGF injections may be used for some posterior or high-risk disease but require longer follow-up for recurrence and vessel maturation.</p><p>If traction or retinal detachment occurs, scleral buckle or vitreoretinal surgery may be needed, but visual outcomes can be limited. Early screening and timely treatment are central.</p>',
    longTermCare:
      '<p>Children with ROP need long-term eye follow-up for refractive error, amblyopia, strabismus, glaucoma, cataract, and retinal sequelae. Treated ROP and severe prematurity require particular attention to visual development.</p><p>Families should keep screening and treatment records and attend scheduled visits even if the eyes look normal.</p>',
    fertilityOrFamily:
      '<p>ROP is not a typical inherited disorder. Future pregnancy planning focuses on reducing prematurity risk with obstetric and neonatal care. A separate genetics consultation is appropriate if hereditary retinal disease is suspected.</p>',
    emergencySigns:
      '<p>Urgent eye review is needed for white pupil, suddenly poor tracking, marked strabismus, nystagmus, red or painful eye, white pupil after treatment, or known retinal detachment risk.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Eye Institute: Retinopathy of Prematurity',
      type: 'official',
      url: 'https://www.nei.nih.gov/index.php/learn-about-eye-health/eye-conditions-and-diseases/retinopathy-prematurity',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Retinopathy of prematurity',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001618.htm',
    },
  ],
  symptoms:
    '<p>Early disease is usually not visible; severe disease can cause white pupil, strabismus, abnormal eye movements, high myopia, retinal traction, or detachment.</p>',
  diagnosis:
    '<p>Diagnosis depends on risk-based dilated retinal screening, recording ROP zone, stage, extent, and plus disease, with repeated follow-up until stable.</p>',
  treatment:
    '<p>Mild cases are observed; treatment may include laser or anti-VEGF eye injections, and retinal detachment may require vitreoretinal surgery.</p>',
  prognosis:
    '<p>Early detection and timely treatment reduce blindness risk, but long-term monitoring for myopia, amblyopia, strabismus, and retinal sequelae is still needed.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'retinopathy-of-prematurity',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 425,
    name: 'retinopathy-of-prematurity-journey.png',
    url: '/images/diseases/retinopathy-of-prematurity-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

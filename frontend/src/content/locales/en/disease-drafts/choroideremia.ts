import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseChoroideremia: DiseaseDraft = {
  ...entity(2012, 'disease-choroideremia'),
  name: 'Choroideremia',
  nameEn: 'Choroideremia',
  alias:
    'CHM-related chorioretinal degeneration, progressive tapetochoroidal dystrophy, China Second Rare Disease Catalog item 12',
  slug: 'choroideremia',
  oneSentence:
    'Choroideremia is a rare X-linked inherited eye disease caused by CHM gene variants, usually starting with night blindness and gradually narrowing the visual field before central vision is affected later.',
  plainName:
    'An inherited retinal disease that often starts with night blindness and tunnel vision',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics estimates a prevalence of about 1 in 50,000 to 100,000 people, and it may be underdiagnosed because it resembles other retinal disorders.",
  quickLook: {
    whatItIs:
      'CHM gene variants affect the long-term survival of retinal and choroidal cells. Males are usually more clearly affected. Female carriers often have mild findings but can still develop eye changes or vision problems.',
    whoToSeeFirst:
      'Night blindness, narrowing side vision, bumping into objects, or a family pattern of affected males should prompt evaluation by a retina or inherited eye disease clinic and genetic counseling.',
    isGenetic:
      'Choroideremia is usually X-linked recessive. A male with one disease-causing CHM variant is affected. Female carriers often have milder findings but may still need eye follow-up and reproductive counseling.',
    hasTreatment:
      'Routine care focuses on diagnosis, low-vision support, protecting remaining vision, and genetic counseling. Gene therapy research and trials require specialist review of eligibility and availability.',
    commonDelayReason:
      'Early symptoms may be treated as myopia, night vision trouble, or retinitis pigmentosa. Without retinal imaging, electrophysiology, and CHM genetic testing, the diagnosis may remain nonspecific.',
  },
  patientJourney: {
    whenToSuspect: [
      'Night blindness begins in childhood or adolescence, with slow adaptation from bright to dim environments.',
      'Side vision narrows over time, causing bumps into objects, steps, or doorways.',
      'Retinal examination shows chorioretinal atrophy, or retinitis pigmentosa has been diagnosed but the family pattern suggests X-linked inheritance.',
      'Several male relatives have night blindness, tunnel vision, or severe adult vision loss, while female relatives may be mildly affected.',
    ],
    commonWrongTurns: [
      'Repeating glasses prescriptions while missing that night blindness and field loss are not explained by myopia alone.',
      'Stopping at a broad label of retinitis pigmentosa without molecular testing.',
      'Not assessing female relatives as possible carriers.',
      'Waiting until central vision declines before arranging low-vision support and environmental adaptations.',
    ],
    firstDepartments: [
      'Retina clinic',
      'Inherited eye disease clinic',
      'Low-vision rehabilitation',
      'Medical genetics',
    ],
    diagnosisChecklist: [
      'Record the age night blindness began, visual field changes, reading or mobility problems, and school or work impact.',
      'Bring fundus photos, OCT, fundus autofluorescence, visual field, ERG, and prior diagnosis records.',
      'Summarize male relatives with vision loss, age at night blindness, age at severe vision loss, and possible female carrier findings.',
      'Bring the original genetic report if testing has already been done.',
    ],
    testsToAskAbout: [
      'Fundus photography, OCT, fundus autofluorescence, and visual field testing to document disease extent.',
      'Full-field ERG or multifocal ERG to measure retinal function.',
      'CHM gene testing or an inherited retinal disease panel.',
      'Carrier testing for female relatives, genetic counseling, and low-vision assessment.',
    ],
    questionsForDoctor: [
      'Does my pattern fit choroideremia or another inherited retinal degeneration?',
      'How much central vision, peripheral field, and retinal structure are currently preserved?',
      'Will CHM genetic testing change family screening or reproductive counseling?',
      'Which low-vision tools, mobility training, lighting changes, and school or work accommodations should start now?',
      'Are any clinical studies or gene therapy evaluations appropriate for me?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Choroideremia usually begins with night blindness, often in childhood or adolescence. Peripheral vision then narrows gradually, making mobility, sports, stairs, and night travel harder. Central vision may be preserved for many years but can decline in later disease.</p><p>Males are usually more clearly affected. Female carriers may have few symptoms, but retinal changes can be seen on examination and some carriers develop vision or field problems over time.</p>',
    diagnosis:
      '<p>Diagnosis combines an eye examination with molecular testing. Fundus photography, OCT, fundus autofluorescence, visual field testing, and ERG can document progressive retinal and choroidal atrophy.</p><p>A disease-causing CHM variant confirms the molecular diagnosis and helps distinguish choroideremia from retinitis pigmentosa and other inherited retinal degenerations. Family analysis is important for carrier counseling.</p>',
    treatment:
      '<p>Standard care focuses on protecting useful vision, low-vision rehabilitation, home and school or work adaptations, and regular follow-up with an inherited retinal disease specialist. Associated eye problems should be treated when present.</p><p>CHM-related gene therapy and other studies are evolving. Eligibility, availability, and risk-benefit decisions depend on the genetic result, remaining retinal structure, and specialist assessment.</p>',
    longTermCare:
      '<p>Long-term care may include periodic retinal imaging, visual field testing, OCT or ERG, low-vision devices, mobility training, improved lighting, and digital accessibility tools. Education, driving, and work planning should be discussed early.</p><p>Patients should keep their genetic testing report because it may be needed for family testing, follow-up at other centers, and future treatment or trial screening.</p>',
    fertilityOrFamily:
      '<p>Choroideremia is usually X-linked recessive. An affected male does not pass the X-linked variant to sons but passes it to all daughters, who become carriers. A female carrier can pass the variant to children in each pregnancy.</p><p>Families planning pregnancy should consider genetic counseling to discuss relative testing and reproductive options such as prenatal or preimplantation genetic testing when appropriate.</p>',
    emergencySigns:
      '<p>Choroideremia itself is usually not an emergency, but sudden major vision loss, eye pain, eye trauma, new flashes with many floaters, or a curtain-like visual field loss should prompt urgent eye care to rule out other treatable eye problems.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Choroideremia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/choroideremia/',
    },
  ],
  symptoms:
    '<p>Typical features are childhood or adolescent night blindness, slow dark adaptation, progressive peripheral field loss, and later central vision impairment.</p>',
  diagnosis:
    '<p>Diagnosis uses retinal imaging, OCT, visual field testing, ERG, and CHM genetic testing to confirm the inherited retinal disorder and guide family counseling.</p>',
  treatment:
    '<p>Care focuses on inherited eye disease follow-up, low-vision rehabilitation, practical adaptations, and genetic counseling; gene therapy or study options require specialist review.</p>',
  prognosis:
    '<p>The condition usually progresses slowly and many people develop severe vision impairment later in life. Early diagnosis helps with low-vision support, family counseling, and future treatment eligibility.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 366,
    name: 'choroideremia-journey.png',
    url: '/images/diseases/choroideremia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

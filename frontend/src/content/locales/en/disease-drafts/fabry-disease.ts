import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFabryDisease: DiseaseDraft = {
  ...entity(27, 'disease-fabry-disease'),
  name: 'Fabry Disease',
  nameEn: 'Fabry Disease',
  alias:
    'Fabry Disease, Anderson-Fabry Disease, Alpha-Galactosidase A Deficiency',
  slug: 'fabry-disease',
  oneSentence:
    'Fabry Disease is an X-linked lysosomal storage disorder that can affect the nervous system, skin, kidneys, heart, cerebral blood vessels, eyes, and gastrointestinal tract, often leading to delayed diagnosis due to symptoms spread across multiple systems.',
  plainName:
    'A genetic metabolic disorder where fatty substances gradually build up in multiple organs',
  prevalence:
    'The classic type is rare, while later-onset forms may be more common but are often missed; detection rates vary greatly depending on the population screened.',
  searchIntents: [
    'Fabry disease which doctor',
    'burning hands feet reduced sweating proteinuria',
    'Fabry disease GLA genetic testing',
    'Fabry disease heart thickening kidney disease',
    'can women have Fabry disease',
  ],
  quickLook: {
    whatItIs:
      'Variants in the GLA gene cause reduced alpha-galactosidase A enzyme activity, leading to accumulation of glycolipid substances within cells, which progressively affects the nervous system, kidneys, heart, and cerebral blood vessels.',
    whoToSeeFirst:
      'When adolescents or adults have burning pain in the hands and feet, reduced or absent sweating, angiokeratomas, corneal whorl-like opacities, unexplained proteinuria, left ventricular hypertrophy, or stroke at a young age, consider starting with nephrology, cardiology, neurology, or genetic/metabolic/rare disease clinics.',
    isGenetic:
      'Yes, X-linked inheritance. Men are typically affected earlier and more severely, but women can also develop significant symptoms due to variation in X chromosome inactivation.',
    hasTreatment:
      'Yes, there are specific treatments and organ-protective management options available, but whether treatment is suitable, when to start, and how to monitor require a specialist team to evaluate genetic results, enzyme activity, organ involvement, and local access to care.',
    commonDelayReason:
      'Pain, gastrointestinal, skin, heart, kidney, and cerebrovascular symptoms often appear in different specialties. Women or people with later-onset presentations may have atypical features, making it easier for the condition to go unrecognized for years.',
  },
  patientJourney: {
    whenToSuspect: [
      'Pain with a burning sensation in the hands and feet starting in childhood or adolescence, worsening with heat, exercise, or fever, accompanied by reduced or absent sweating.',
      'Skin angiokeratomas, especially on the trunk, groin, buttocks, or upper thighs.',
      'Unexplained proteinuria, declining kidney function, left ventricular hypertrophy, heart rhythm abnormalities, or stroke/TIA at a young age.',
      'Corneal whorl-like opacities found during eye exam, together with pain, kidney, or heart-related clues.',
      'Family history of males with early-onset kidney failure, heart disease, or stroke, or a known GLA variant in the family.',
    ],
    commonWrongTurns: [
      'Extremity pain managed long-term as rheumatism, nerve pain, or growing pains.',
      'Proteinuria, heart muscle thickening, and stroke seen in separate visits, without asking about skin, sweating, pain, and family history.',
      'Fabry disease fully ruled out in women after enzyme activity comes back normal, without considering genetic testing and clinical findings.',
      'Focusing only on specific treatments, while neglecting long-term management of kidney, heart, brain, and psychosocial support.',
    ],
    firstDepartments: [
      'Nephrology',
      'Cardiology',
      'Neurology',
      'Dermatology/Ophthalmology (when identifying clues)',
      'Genetics/Medical Genetics/Rare Disease Clinic',
    ],
    diagnosisChecklist: [
      'Document pain, sweating, skin rash, gastrointestinal symptoms, hearing, vision, kidney, heart, and cerebrovascular symptoms.',
      'Gather urine protein, kidney function, ECG, cardiac ultrasound/MRI, brain MRI, ophthalmology, and dermatology findings.',
      'For males, ask about alpha-Gal A enzyme activity testing; for females or complex cases, focus on GLA genetic testing.',
      'Ask your doctor to explain whether the GLA variant is disease-causing, and whether family screening is needed.',
      'Confirm baseline organ involvement and follow-up plans for kidneys, heart, and brain.',
    ],
    testsToAskAbout: [
      'Alpha-galactosidase A enzyme activity testing.',
      'GLA genetic testing and family cascade screening.',
      'Lyso-Gb3/related biomarkers (when your doctor considers it appropriate).',
      'Urine protein, eGFR, kidney assessment.',
      'ECG, Holter monitoring, cardiac ultrasound, or cardiac MRI.',
      'Brain MRI, slit-lamp eye exam, hearing test, and neuropathic pain assessment.',
    ],
    questionsForDoctor: [
      'Does my presentation fit classic or later-onset Fabry Disease? What is the evidence?',
      'How do I interpret my GLA variant? Who in my family should be screened first?',
      'Which organs are currently affected? How often do I need follow-up?',
      'Is specific treatment appropriate for me? What are the treatment goals and monitoring targets?',
      'How will pain, kidney, heart, stroke risk, and psychological stress be managed?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Fabry Disease can present with burning pain in the hands and feet, reduced or absent sweating, angiokeratomas, corneal whorl-like opacities, abdominal pain or diarrhea, hearing loss, proteinuria or declining kidney function, left ventricular hypertrophy, heart rhythm abnormalities, chest pain, stroke at a young age, or white matter changes. Classic-type males are usually affected earlier, while females and later-onset types may have more subtle symptoms.</p>',
    diagnosis:
      '<p>Diagnosis requires combining clues from multiple systems, family history, alpha-galactosidase A enzyme activity, GLA genetic testing, and organ assessments. Reduced enzyme activity in males is highly suggestive; females may have normal enzyme activity, so enzyme testing alone cannot rule out the disease. Genetic results need to be interpreted in the context of clinical features and databases.</p>',
    treatment:
      '<p>Treatment includes specific therapies, kidney and cardiovascular protection, pain management, stroke risk management, gastrointestinal and psychosocial support. Decisions about enzyme replacement, pharmacological chaperones, or other options should be made by a team familiar with Fabry Disease, based on the disease type, organ involvement, and access to care.</p>',
    longTermCare:
      '<p>Long-term follow-up usually requires collaboration among nephrology, cardiology, neurology, ophthalmology, dermatology, and genetic counseling. Key monitoring includes urine protein/eGFR, heart structure and rhythm, cerebrovascular risk, pain, hearing, quality of life, and progress with family screening.</p>',
    fertilityOrFamily:
      '<p>Fabry Disease is X-linked. A male patient will pass the GLA variant to all daughters but not to sons; a female patient has approximately a 50% chance of passing the variant to each child. When planning a pregnancy, genetic counseling can explain options such as prenatal diagnosis or preimplantation genetic testing.</p>',
    emergencySigns:
      '<p>Sudden weakness on one side, difficulty speaking, severe chest pain, fainting, severe palpitations, acute shortness of breath, significantly reduced urine output, or rapid worsening of kidney function require immediate emergency care. Be sure to tell doctors that Fabry Disease is suspected or confirmed and inform them of any previous heart, kidney, or cerebrovascular involvement.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Fabry Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
    },
    {
      name: 'MedlinePlus Genetics: Fabry disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/fabry-disease/',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>May present with burning pain in the hands and feet, reduced sweating, angiokeratomas, corneal whorl-like opacities, proteinuria, heart muscle thickening, heart rhythm abnormalities, gastrointestinal symptoms, or stroke at a young age.</p>',
  diagnosis:
    '<p>Assessment includes alpha-Gal A enzyme activity, GLA genetic testing, Lyso-Gb3/related markers, and evaluation of organ involvement in the kidneys, heart, brain, eyes, and skin.</p>',
  treatment:
    '<p>Management includes assessment for specific therapies, organ protection, pain and heart/kidney/brain risk management, and family screening.</p>',
  prognosis:
    '<p>Early identification and monitoring of organ involvement can help reduce irreversible damage; prognosis depends on disease type, timing of treatment, and the extent of heart, kidney, and cerebrovascular involvement.</p>',
  sourceName: 'GeneReviews: Fabry Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
  categorySlug: 'metabolic',
  charityIds: [25],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 326,
    name: 'fabry-disease-journey.png',
    url: '/images/diseases/fabry-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMalignantHyperthermia: DiseaseDraft = {
  ...entity(2046, 'disease-malignant-hyperthermia'),
  name: 'Malignant hyperthermia',
  nameEn: 'Malignant hyperthermia',
  alias:
    'MH; anesthesia-related malignant hyperthermia; China Second Rare Disease Catalog item 46',
  slug: 'malignant-hyperthermia',
  oneSentence:
    'Malignant hyperthermia is an inherited anesthesia emergency in which a person may feel well until certain inhaled anesthetics or succinylcholine trigger a fast, life-threatening high-metabolism reaction.',
  plainName:
    'An inherited anesthesia risk that can suddenly become an emergency',
  prevalence:
    "Included in China's second rare disease catalog; many susceptible people are never identified because they have not been exposed to triggering anesthetic drugs.",
  quickLook: {
    whatItIs:
      'Malignant hyperthermia is not ordinary fever. It is a skeletal-muscle calcium regulation problem that can be triggered by volatile inhaled anesthetics and the depolarizing muscle relaxant succinylcholine.',
    whoToSeeFirst:
      'If you or a relative has had a suspected anesthesia reaction, start with a pre-anesthesia clinic before any procedure, with medical genetics or a neuromuscular specialist when available.',
    isGenetic:
      'Most confirmed susceptibility is related to RYR1, and some cases involve CACNA1S or STAC3. It is often autosomal dominant, but a negative genetic test may not rule out risk.',
    hasTreatment:
      'An acute event needs immediate removal of triggering drugs, 100% oxygen, rapid IV dantrolene, cooling, and treatment of acidosis, high potassium, rhabdomyolysis, kidney risk, and recurrence.',
    commonDelayReason:
      'People are usually well between exposures and may even have had previous anesthesia without a reaction, so family anesthesia history is easy to miss.',
  },
  patientJourney: {
    whenToSuspect: [
      'You or a close relative had rapidly rising end-tidal carbon dioxide, muscle rigidity, fast heart rate, fever, dark urine, or resuscitation during or after anesthesia.',
      'An operation was complicated by unexplained acidosis, hyperkalemia, rhabdomyolysis, or severe arrhythmia.',
      'There is a history of RYR1-related myopathy, central core disease, multiminicore disease, STAC3-related myopathy, or another neuromuscular disorder.',
      'Severe muscle pain, weakness, or dark urine after intense exercise or fever should also be mentioned to the care team.',
    ],
    commonWrongTurns: [
      'Explaining high carbon dioxide during anesthesia only as a ventilation problem and delaying malignant hyperthermia treatment.',
      'Treating post-procedure muscle pain or dark urine as ordinary soreness without checking creatine kinase, myoglobinuria, and kidney function.',
      'Failing to record a family anesthesia emergency in the medical record, so later procedures are not planned as trigger-free.',
    ],
    firstDepartments: [
      'Pre-anesthesia clinic',
      'Medical genetics',
      'Neuromuscular clinic',
      'Emergency department for suspected acute events',
    ],
    diagnosisChecklist: [
      'Collect anesthesia records, operation notes, resuscitation notes, drug names, and timing for the person and affected relatives.',
      'List any rigidity, dark urine, high creatine kinase, kidney injury, heat-related illness, or exercise-related rhabdomyolysis.',
      'Bring prior genetic testing, neuromuscular evaluations, EMG, muscle imaging, or muscle biopsy reports.',
      'Keep a clear note for future procedures: suspected or confirmed malignant hyperthermia susceptibility and need for trigger-free anesthesia.',
    ],
    testsToAskAbout: [
      'RYR1, CACNA1S, STAC3, and related gene testing with expert variant interpretation.',
      'Whether referral for caffeine-halothane contracture testing or another functional test is appropriate.',
      'After an acute event: blood gas, electrolytes, creatine kinase, myoglobin, coagulation, kidney function, and urine output monitoring.',
      'Whether relatives need genetic counseling, targeted testing, or anesthesia precautions.',
    ],
    questionsForDoctor: [
      'Which anesthetic drugs must I avoid, and how should this be documented before procedures?',
      'If I need surgery, can the facility provide trigger-free anesthesia and immediate access to dantrolene?',
      'Should my relatives be tested or managed as susceptible before surgery?',
      'After an event, how long should monitoring continue for recurrence, kidney injury, or arrhythmia?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Malignant hyperthermia usually appears suddenly after exposure to triggering anesthesia. Early clues may include a sustained rise in end-tidal carbon dioxide, fast heart rate, muscle or jaw rigidity, acidosis, and increased oxygen use; fever is important but may not be the first sign.</p><p>Progression can cause hyperkalemia, rhabdomyolysis, very high creatine kinase, dark urine, clotting problems, kidney injury, arrhythmias, and cardiac arrest. Some susceptible people may also have severe rhabdomyolysis with fever, intense exercise, or heat stress.</p>',
    diagnosis:
      '<p>Diagnosis starts with rapid recognition during anesthesia: exposure to volatile anesthetics or succinylcholine plus high carbon dioxide, rigidity, acidosis, high potassium, and rhabdomyolysis. Treatment should not wait for every test result.</p><p>After stabilization, the anesthesia, genetics, and neuromuscular teams can review records and consider genetic testing. RYR1 is the most common gene, while CACNA1S and STAC3 can also be involved. If genetic results are unclear, specialized muscle contracture testing may be considered. Important look-alikes include hypoventilation, light anesthesia, sepsis, thyroid storm, pheochromocytoma crisis, and neuroleptic malignant syndrome.</p>',
    treatment:
      '<p>When malignant hyperthermia is suspected, triggering anesthetics and succinylcholine should be stopped immediately, anesthesia should be changed to a non-triggering plan, high-flow 100% oxygen should be given, and IV dantrolene should be administered quickly. The team also treats hyperthermia, acidosis, hyperkalemia, arrhythmia, rhabdomyolysis, and kidney risk.</p><p>Even after control, monitoring is needed because symptoms can recur. All future surgeries, endoscopies, dental procedures with anesthesia, or invasive procedures should be planned with a trigger-free anesthesia protocol.</p>',
    longTermCare:
      '<p>Long-term care is mainly prevention. Keep written documentation, consider a medical alert identifier, and tell every surgical, dental, emergency, and anesthesia team about suspected or confirmed susceptibility. Families should know the anesthesia history and be offered genetic counseling.</p><p>If severe muscle pain or dark urine occurs after exercise, fever, or heat exposure, discuss risk management with a neuromuscular specialist.</p>',
    fertilityOrFamily:
      '<p>Malignant hyperthermia susceptibility can run in families. If a pathogenic variant is known, first-degree relatives can consider targeted testing. Relatives without testing or with uncertain results should still disclose the family history before anesthesia. Families planning pregnancy can discuss recurrence risk and reproductive options with genetics professionals.</p>',
    emergencySigns:
      '<p>During or after anesthesia, rapidly rising carbon dioxide, generalized or jaw rigidity, unexplained fast heart rate, fever, acidosis, hyperkalemia, dark urine, or arrhythmia should be treated as a malignant hyperthermia emergency. Severe muscle pain, weakness, dark urine, or low urine output after fever or intense exercise also needs urgent evaluation for rhabdomyolysis and kidney injury.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Malignant hyperthermia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/malignant-hyperthermia/',
    },
    {
      name: 'Malignant Hyperthermia Association of the United States: Managing A Crisis',
      type: 'patient-organization',
      url: 'https://www.mhaus.org/healthcare-professionals/managing-a-crisis/',
    },
  ],
  symptoms:
    '<p>Typical events are anesthesia-triggered and may include rising carbon dioxide, fast heart rate, muscle rigidity, acidosis, high potassium, fever, rhabdomyolysis, and dark urine.</p>',
  diagnosis:
    '<p>Diagnosis relies on the peri-anesthesia pattern, triggering drug exposure, blood gas and chemistry abnormalities, and later genetic or functional testing such as RYR1, CACNA1S, or STAC3 evaluation.</p>',
  treatment:
    '<p>Suspected events require immediate discontinuation of triggers, 100% oxygen, rapid IV dantrolene, cooling, and treatment of acidosis, hyperkalemia, kidney risk, and recurrence.</p>',
  prognosis:
    '<p>Outcome depends heavily on rapid recognition and dantrolene access. Knowing the risk beforehand and using trigger-free anesthesia can greatly reduce preventable danger.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'multisystem',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 400,
    name: 'malignant-hyperthermia-journey.png',
    url: '/images/diseases/malignant-hyperthermia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

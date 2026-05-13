import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBlueRubberBlebNevus: DiseaseDraft = {
  ...entity(2010, 'disease-blue-rubber-bleb-nevus'),
  name: 'Blue rubber bleb nevus syndrome',
  nameEn: 'Blue rubber bleb nevus syndrome',
  alias:
    'BRBNS; Bean syndrome; Blue rubber bleb nevus; China Second Rare Disease Catalog item 10',
  slug: 'blue-rubber-bleb-nevus',
  oneSentence:
    'Blue rubber bleb nevus syndrome is a rare venous malformation syndrome that causes soft blue-purple skin lesions and gastrointestinal lesions that can lead to chronic bleeding and iron-deficiency anemia.',
  plainName:
    'Blue-purple soft venous malformations with possible intestinal bleeding risk',
  prevalence:
    "Included in China's second rare disease catalog; it is very rare, with much of the literature based on case reports and small series.",
  quickLook: {
    whatItIs:
      'The “blebs” are not ordinary blisters. They are low-flow venous malformations. Skin lesions may be soft, blue-purple, and painful when pressed; hidden gastrointestinal lesions can bleed slowly and cause anemia.',
    whoToSeeFirst:
      'Start with dermatology or a vascular anomalies clinic for multiple blue-purple soft lesions. Add gastroenterology and hematology for anemia, positive stool blood, black stool, visible bleeding, or abdominal pain.',
    isGenetic:
      'Some cases involve TEK/TIE2 pathway variants, and many appear sporadic. Genetic testing or family evaluation should be discussed with a vascular anomalies or genetics team.',
    hasTreatment:
      'Care focuses on monitoring and preventing bleeding: iron or transfusion when needed, endoscopic therapy, sclerotherapy, laser or interventional treatment, and surgery for selected lesions. The goal is risk reduction, not necessarily removing every lesion.',
    commonDelayReason:
      'Skin lesions may be called hemangiomas, birthmarks, or moles, while anemia is treated separately. GI lesions may be missed unless bleeding risk is connected to the skin findings.',
  },
  patientJourney: {
    whenToSuspect: [
      'One or more soft blue-purple skin nodules present at birth or childhood, sometimes compressible or painful.',
      'Skin lesions increase in number or size over time, including around puberty.',
      'Recurrent iron-deficiency anemia, fatigue, dizziness, pallor, or positive fecal occult blood.',
      'Black stool, visible blood in stool, abdominal pain, intussusception-like symptoms, or endoscopy showing multiple vascular malformations.',
      'Lesions involving muscle, bone, eye, lung, bladder, or other organs.',
    ],
    commonWrongTurns: [
      'Watching skin lesions as ordinary hemangiomas or birthmarks without checking for GI bleeding.',
      'Repeated iron treatment without looking for chronic blood loss.',
      'Assuming removed skin lesions will not be followed by new lesions elsewhere.',
      'Treating abdominal pain or black stool as routine gastroenteritis without mentioning known vascular malformations.',
    ],
    firstDepartments: [
      'Dermatology or vascular anomalies clinic',
      'Gastroenterology',
      'Hematology',
      'Interventional radiology',
    ],
    diagnosisChecklist: [
      'Photograph skin lesions and record number, location, size, pain, bleeding, and growth.',
      'Bring CBC, ferritin, stool occult blood, endoscopy, capsule endoscopy, imaging, and pathology reports.',
      'Record black stool, visible bleeding, abdominal pain, iron or transfusion history, and family history of similar lesions.',
      'Report eye, bone, muscle, neurologic, lung, or urinary symptoms.',
    ],
    testsToAskAbout: [
      'CBC, ferritin, transferrin saturation, and fecal occult blood testing.',
      'Upper/lower endoscopy, capsule endoscopy, or small-bowel imaging to look for GI lesions.',
      'Ultrasound, MRI, CT, or CT enterography for deeper lesions.',
      'Dermoscopy or biopsy when diagnosis is uncertain.',
      'Whether TEK/TIE2 testing would help diagnosis or family counseling.',
    ],
    questionsForDoctor: [
      'Do the lesions fit BRBNS or another vascular malformation syndrome?',
      'Is there evidence of GI bleeding or iron-deficiency anemia, and do we need small-bowel evaluation?',
      'Which lesions need treatment and which can be watched?',
      'When are iron, endoscopy, interventional radiology, or surgery appropriate?',
      'Where should I go if abdominal pain, black stool, or anemia worsens?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>BRBNS commonly causes soft, blue-purple, rubbery blebs or nodules from venous malformations in the skin. They may be present at birth or increase over time, and some are painful or affect function or appearance.</p><p>Gastrointestinal lesions often involve the small bowel but can occur throughout the GI tract. They may cause chronic blood loss, iron-deficiency anemia, black stool, or visible bleeding. Less commonly, lesions occur in muscles, bones, eyes, brain, lungs, bladder, and other sites.</p>',
    diagnosis:
      '<p>Diagnosis is based on characteristic skin lesions, anemia or GI bleeding clues, endoscopic findings, and imaging. CBC and iron studies can show chronic blood loss; stool occult blood helps screen for GI bleeding.</p><p>Endoscopy, capsule endoscopy, small-bowel imaging, ultrasound, MRI, or CT may define disease extent. Doctors distinguish BRBNS from hereditary hemorrhagic telangiectasia, other venous malformation syndromes, and common hemangiomas.</p>',
    treatment:
      '<p>Treatment is symptom- and risk-based. Stable lesions may be monitored. Iron replacement treats iron deficiency, and transfusion may be needed for severe bleeding. Skin or GI lesions may be treated with endoscopic therapy, sclerotherapy, laser, interventional radiology, or surgery depending on location and risk.</p><p>Because lesions can be multiple and persistent, care is often staged to reduce bleeding, pain, and functional problems rather than remove every lesion.</p>',
    longTermCare:
      '<p>Long-term follow-up tracks hemoglobin, ferritin, stool blood, lesion number and size, pain, function, and GI bleeding risk. Children and adolescents need attention during growth periods.</p><p>Keep photographs and endoscopy/imaging reports. During emergency or outside-hospital visits, mention BRBNS and the possibility of GI bleeding.</p>',
    fertilityOrFamily:
      '<p>Most cases appear sporadic, but some involve TEK/TIE2-related variants. If several relatives have similar blue-purple lesions or vascular malformations, genetics consultation may be useful.</p><p>Before pregnancy, surgery, or anticoagulant/antiplatelet medicines, clinicians should review bleeding risk and lesion burden.</p>',
    emergencySigns:
      '<p>Seek urgent care for black stool, visible blood in stool, vomiting blood, fainting, rapid heartbeat with breathlessness, worsening abdominal pain, sudden abdominal swelling or vomiting, rapidly painful swollen lesions, or possible clot symptoms.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Johns Hopkins Medicine: Blue Rubber Bleb Nevus Syndrome',
      type: 'review',
      url: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/blue-rubber-bleb-nevus-syndrome',
    },
    {
      name: 'StatPearls: Blue Rubber Bleb Nevus Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK541085/',
    },
  ],
  symptoms:
    '<p>Common signs include soft blue-purple skin blebs or nodules and hidden GI lesions that can cause occult bleeding, iron-deficiency anemia, black stool, visible bleeding, or abdominal pain.</p>',
  diagnosis:
    '<p>Diagnosis combines skin findings, anemia and stool blood testing, endoscopy or capsule endoscopy, small-bowel imaging, ultrasound or MRI, and distinction from other vascular malformation syndromes.</p>',
  treatment:
    '<p>Care may include monitoring, iron or transfusion, endoscopic therapy, sclerotherapy, laser or interventional procedures, and surgery for selected lesions.</p>',
  prognosis:
    '<p>Many people can be managed long term, but GI bleeding, anemia, thrombosis, or intussusception need timely recognition and treatment.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'dermatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 364,
    name: 'blue-rubber-bleb-nevus-journey.png',
    url: '/images/diseases/blue-rubber-bleb-nevus-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

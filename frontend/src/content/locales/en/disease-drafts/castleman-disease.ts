import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCastlemanDisease: DiseaseDraft = {
  ...entity(20, 'disease-castleman-disease'),
  name: 'Castleman Disease',
  nameEn: 'Castleman Disease',
  alias: 'Giant lymph node hyperplasia, Angiofollicular lymph node hyperplasia',
  slug: 'castleman-disease',
  oneSentence:
    'Castleman disease is a group of rare lymph node overgrowth disorders that may appear as a single enlarged lymph node area or involve multiple lymph node areas along with fever, fatigue, anemia, or organ involvement.',
  plainName:
    'A rare blood/immune-related disease caused by abnormal lymph node overgrowth',
  prevalence:
    'Generally a rare disease overall. Different studies use varying definitions for unicentric, multicentric, and idiopathic multicentric types. Personal risk assessment requires combining pathology and subtype classification.',
  quickLook: {
    whatItIs:
      'Castleman disease is not a single disease but a group of conditions with similar lymph node pathology changes. Doctors typically first determine whether it is unicentric or multicentric, then further distinguish HHV-8 related, idiopathic, or other related conditions.',
    whoToSeeFirst:
      'For persistent or progressive lymph node enlargement, you may first visit hematology, lymphoma/hematologic disease specialists, or surgery for biopsy evaluation; if you have persistent fever, night sweats, weight loss, significant fatigue, or swelling, it is recommended to see hematology promptly.',
    isGenetic:
      'Usually not considered a typical hereditary disease. Some multicentric cases are related to HHV-8 infection or immune status. Idiopathic multicentric type requires exclusion of similar diseases such as infections, malignancies, and autoimmune disorders.',
    hasTreatment:
      'There are treatment and follow-up plans available after subtyping. Unicentric type is often managed with local treatment; multicentric type requires hematology to develop drug or comprehensive treatment based on HHV-8 status, severity, and organ involvement.',
    commonDelayReason:
      'Lymph node enlargement is often first mistaken for infection, inflammation, or lymphoma; multicentric symptoms can be scattered, and patients may visit rheumatology, infectious disease, kidney, or liver specialists multiple times before complete biopsy and subtyping is done.',
  },
  patientJourney: {
    whenToSuspect: [
      'Painless enlargement of lymph nodes in a single area, especially if persistent, gradually increasing, or imaging shows chest/abdominal lymph node enlargement.',
      'Enlarged lymph nodes in multiple areas, accompanied by fever, night sweats, weight loss, fatigue, or loss of appetite.',
      'Lymph node enlargement with anemia, elevated inflammatory markers, low albumin, abnormal immunoglobulins, or enlarged liver and spleen.',
      'Appearance of multi-system clues such as swelling, fluid in chest/abdomen, kidney problems, rash-like changes, or peripheral nerve symptoms.',
      'Previous suspicion of infection, autoimmune disease, or lymphoma, but conventional treatment was insufficient or there were repeated recurrences.',
    ],
    commonWrongTurns: [
      'Long-term treatment as ordinary lymphadenitis or reactive hyperplasia without obtaining adequate tissue for pathology.',
      'Only having a fine needle aspiration or imaging exam without discussing with the doctor whether a complete lymph node biopsy is needed.',
      'After pathology shows Castleman-like changes, failing to continue distinguishing between unicentric, multicentric, and HHV-8 status.',
      'Multicentric type treated only through the single pathway of autoimmune disease, infection, or tumor, without completing differential diagnosis.',
      'Overlooking clues about disease activity or severity such as anemia, low albumin, kidney involvement, or fluid in chest/abdomen.',
    ],
    firstDepartments: [
      'Hematology/Lymphoma specialty',
      'General surgery or thoracic/general surgery specialty (when lymph node biopsy or removal evaluation is needed)',
      'Infectious disease (for differential diagnosis of HIV, HHV-8, or other infections)',
      'Rheumatology and immunology (for differential diagnosis of autoimmune disease or when immune manifestations are present)',
      'Nephrology/Respiratory/Gastroenterology and hepatology (when corresponding organ involvement occurs)',
    ],
    diagnosisChecklist: [
      'Record the location, onset time, growth rate, and whether there is pain in the enlarged lymph nodes, as well as systemic symptoms like fever, night sweats, and weight changes.',
      'Bring ultrasound, CT, PET-CT images and lab tests such as complete blood count, inflammatory markers, liver and kidney function, albumin, and immunoglobulins.',
      'Ask the doctor if the current pathology specimens are sufficient and whether a complete lymph node excision biopsy is needed.',
      'Confirm whether lymphoma, infectious diseases, and autoimmune diseases have been excluded as possibilities.',
      'Ask whether HHV-8 and HIV testing is needed, and assess involvement of liver, spleen, kidneys, chest/abdomen fluid, and nervous system.',
    ],
    testsToAskAbout: [
      'Lymph node biopsy pathology and immunohistochemistry, with review by a hematopathology expert when necessary.',
      'Systemic imaging to assess lymph node distribution, such as contrast-enhanced CT or PET-CT as recommended by your doctor.',
      'Complete blood count, CRP/ESR, albumin, liver and kidney function, immunoglobulins, and urinalysis.',
      'Infectious disease tests related to HHV-8, HIV, and EBV.',
      'Tests related to differential diagnosis of lymphoma, autoimmune diseases, and POEMS syndrome.',
    ],
    questionsForDoctor: [
      'Is my condition more like unicentric or multicentric? What evidence supports this from imaging, pathology, or systemic symptoms?',
      'Is the pathology specimen sufficient to rule out lymphoma? Does it need consultation or review?',
      'Do I need HHV-8/HIV testing, and how will the results affect treatment choices?',
      'Are there any clues about organ involvement or severe disease risk, and how quickly do I need to start treatment?',
      'How will treatment effectiveness be measured? How often do I need follow-up imaging and blood tests?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Unicentric Castleman disease typically presents with enlarged lymph nodes in one area, which may have no obvious systemic symptoms or may cause discomfort due to mass effect depending on location. Multicentric type can involve multiple lymph node areas and present with fever, night sweats, weight loss, fatigue, anemia, enlarged liver and spleen, swelling, fluid in chest/abdomen, kidney or nervous system involvement. Symptoms and severity vary greatly.</p>',
    diagnosis:
      '<p>The core of diagnosis is lymph node pathology, combined with imaging, laboratory tests, and differential diagnosis. Diagnosis of idiopathic multicentric type particularly requires exclusion of similar conditions such as infections, malignancies, and autoimmune diseases. After the pathology report shows Castleman-like changes, doctors still need to combine lymph node distribution, systemic symptoms, HHV-8/HIV status, and organ involvement to complete subtyping.</p>',
    treatment:
      '<p>Treatment depends on subtype and severity. Unicentric type is often evaluated by surgery for complete removal or local treatment; multicentric type typically requires hematology to develop targeted immunotherapy, antiviral/anti-infection treatment, corticosteroids, chemotherapy, or other approaches based on HHV-8 status, inflammatory activity, organ involvement, and prior treatment history. Patients should not self-treat based on "lymphadenitis" or "tumor" experience.</p>',
    longTermCare:
      '<p>Follow-up focuses on lymph node size, systemic symptoms, complete blood count, inflammatory markers, liver and kidney function, albumin, urinalysis, and imaging changes. Multicentric type patients also need monitoring for infection risk, treatment side effects, organ involvement, and recurrence signs. Keeping records of pathology slides/blocks, imaging discs, and key lab results helps with return visits and consultations.</p>',
    fertilityOrFamily:
      '<p>Castleman disease is usually not a typical hereditary disease. Pregnancy or family planning concerns mainly depend on disease activity, organ involvement, and current treatment regimen. When planning for children, discuss disease stability, medication safety, and follow-up arrangements with hematology and obstetrics in advance.</p>',
    emergencySigns:
      '<p>You should seek medical care or emergency evaluation promptly if you experience breathing difficulty, chest tightness, or difficulty swallowing due to compression; persistent high fever with significant weakness; rapidly worsening swelling or decreased urine output; altered consciousness; severe anemia-related heart palpitations and shortness of breath; or rapid enlargement of lymph nodes over a short period.</p>',
  },
  sources: [
    {
      name: 'NCI Dictionary: Castleman disease',
      type: 'official',
      url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/castleman-disease',
    },
    {
      name: 'Blood: International consensus diagnostic criteria for idiopathic multicentric Castleman disease',
      type: 'clinical-guideline',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28087540/',
    },
    {
      name: 'Blood: International consensus treatment guidelines for idiopathic multicentric Castleman disease',
      type: 'clinical-guideline',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30181172/',
    },
    {
      name: 'Mayo Clinic: Castleman disease diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/castleman-disease/diagnosis-treatment/drc-20543055',
    },
  ],
  symptoms:
    '<p>May present as enlarged lymph nodes in a single area or multiple areas; multicentric type may also be accompanied by fever, night sweats, weight loss, anemia, swelling, enlarged liver and spleen, or organ involvement.</p>',
  diagnosis:
    '<p>Diagnosis relies on lymph node pathology, combined with imaging, laboratory tests, HHV-8/HIV status, and exclusion of lymphoma, infectious diseases, and autoimmune diseases.</p>',
  treatment:
    '<p>Unicentric type often undergoes local removal evaluation; multicentric type requires hematology to develop targeted immunotherapy, anti-infection treatment, or comprehensive treatment plans based on subtype and severity.</p>',
  prognosis:
    '<p>Prognosis depends on unicentric or multicentric subtype, HHV-8 status, organ involvement, and treatment response. Proper subtyping and follow-up are key to reducing misdiagnosis and recurrence risk.</p>',
  sourceName: 'NCI Dictionary: Castleman disease',
  sourceUrl:
    'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/castleman-disease',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 319,
    name: 'castleman-disease-journey.png',
    url: '/images/diseases/castleman-disease-journey.png',
  },
  tagSlugs: [],
};

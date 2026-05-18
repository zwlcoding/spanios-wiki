import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIsovalericAcidemia: DiseaseDraft = {
  ...entity(5005, 'disease-isovaleric-acidemia'),
  name: 'Isovaleric Acidemia',
  nameEn: 'Isovaleric Acidemia',
  alias:
    'IVA; isovaleryl-CoA dehydrogenase deficiency; China First Rare Disease Catalog item 58',
  slug: 'isovaleric-acidemia',
  oneSentence:
    'Isovaleric acidemia is an autosomal recessive organic acidemia caused by isovaleryl-CoA dehydrogenase deficiency, leading to toxic accumulation of isovaleric acid; metabolic crises can occur in the newborn period, and low-leucine diet with L-carnitine supplementation effectively prevents episodes.',
  plainName:
    'A genetic metabolic disorder where the body cannot process too much leucine from protein',
  prevalence:
    'Incidence is approximately 1 in 62,000–250,000 live births; varies by region, with higher rates reported in some German populations.',
  searchIntents: [
    'isovaleric acidemia newborn screening',
    'IVA sweaty feet odor',
    'isovaleric acidemia diet management',
    'isovaleric acidemia metabolic crisis treatment',
    'isovaleric acidemia cure',
  ],
  quickLook: {
    whatItIs:
      'Deficiency of isovaleryl-CoA dehydrogenase in the leucine metabolism pathway leads to accumulation of isovaleric acid and related toxic metabolites, causing metabolic acidosis, hyperammonemia, and neurologic damage.',
    whoToSeeFirst:
      'Pediatric metabolic genetics or neonatology for positive newborn screens, unexplained vomiting and lethargy with characteristic odor, or known IVA patients with intercurrent illness.',
    isGenetic:
      'Autosomal recessive, caused by IVD gene mutations; parents are asymptomatic carriers, with a 25% recurrence risk for each pregnancy.',
    hasTreatment:
      'Yes. Clear treatment pathway: low-leucine diet, L-carnitine and glycine supplementation, and emergency protocols during illness; most patients have a good prognosis.',
    commonDelayReason:
      'The acute neonatal form can cause death within days without newborn screening; the late-onset form has nonspecific symptoms and may be misdiagnosed as gastroenteritis or encephalitis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Elevated C5 acylcarnitine on newborn screening.',
      'Neonatal poor feeding, vomiting, lethargy, hypotonia, hypothermia, with characteristic "sweaty feet" or "dirty socks" odor.',
      'Metabolic crisis triggered by infection or high protein intake: vomiting, altered consciousness, seizures, coma.',
      'Unexplained developmental delay, chronic vomiting, or recurrent metabolic acidosis.',
    ],
    commonWrongTurns: [
      'Treating neonatal metabolic crisis as simple infection or sepsis without checking ammonia and blood gas.',
      'Dismissing the "sweaty feet" odor as a hygiene issue rather than a metabolic sign.',
      'Repeated hospital admissions without diagnosis at local hospitals, without referral to metabolic genetics.',
      'Failing to adjust diet and provide caloric support during illness, triggering severe metabolic crisis.',
    ],
    firstDepartments: [
      'Pediatric metabolic genetics',
      'Neonatology (acute presentation)',
      'Emergency medicine (during metabolic crisis)',
      'Clinical nutrition (dietary management)',
    ],
    diagnosisChecklist: [
      'Retain newborn screening results.',
      'Blood ammonia, blood gas, glucose, and urinary ketones during acute episodes.',
      'Urinary organic acid analysis: elevated isovalerylglycine and 3-hydroxyisovaleric acid.',
      'Plasma acylcarnitine profile: elevated C5 (isovalerylcarnitine).',
      'IVD gene mutation analysis for definitive diagnosis.',
    ],
    testsToAskAbout: [
      'Blood ammonia and blood gas.',
      'Urinary organic acid analysis.',
      'Plasma acylcarnitine profile.',
      'IVD genetic testing.',
      'Complete blood count and coagulation studies (acute episodes often have thrombocytopenia and neutropenia).',
    ],
    questionsForDoctor: [
      'Does my child have the acute neonatal or late-onset form?',
      'How much protein/leucine can my child have each day?',
      'What are the doses of L-carnitine and glycine?',
      'How should I adjust diet and medications during illness or fever?',
      'What should I do first in an emergency?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Two major phenotypes: acute neonatal and late-onset. The acute form presents within hours to 2 weeks of life with poor feeding, vomiting, lethargy, hypotonia, hypothermia, and dehydration, progressing rapidly to metabolic acidosis, hyperammonemia, seizures, coma, and death. A characteristic "sweaty feet" or "dirty socks" odor (from isovaleric acid) is often noted. Survivors without prompt treatment may have intellectual disability and brain damage. The late-onset form presents in infancy or childhood, typically triggered by infection, high protein intake, or fasting, with similar but less severe crisis symptoms. Chronic non-crisis findings may include developmental delay, failure to thrive, and chronic vomiting.</p>',
    diagnosis:
      '<p>Newborn screening detects elevated C5 acylcarnitine by tandem mass spectrometry. Diagnosis is confirmed by urinary organic acid analysis (elevated isovalerylglycine and 3-hydroxyisovaleric acid) and plasma acylcarnitine profile (elevated C5). IVD genetic testing identifies pathogenic mutations. During acute crises, laboratory findings typically include metabolic acidosis, hyperammonemia, ketosis, hypoglycemia, thrombocytopenia, and neutropenia. Differential diagnosis includes other organic acidemias such as methylmalonic acidemia and propionic acidemia.</p>',
    treatment:
      '<p>Acute metabolic crisis management: immediately stop natural protein intake, provide intravenous glucose and electrolytes to correct dehydration and acidosis, and consider dialysis if there is marked hyperammonemia. Maintenance therapy includes: 1) a low-leucine diet restricting natural protein and using leucine-free medical formulas; 2) L-carnitine supplementation (enhances excretion of isovaleric acid); and 3) glycine supplementation (conjugates with isovaleric acid to form isovalerylglycine, which is excreted in urine). During intercurrent illness, increase carbohydrate intake, reduce protein, and monitor closely. The frequency of acute episodes typically decreases with age.</p>',
    longTermCare:
      '<p>Lifelong dietary management and regular follow-up are required. Monitoring includes growth, neurodevelopment, blood counts, blood gas, ammonia, urinary ketones, and nutritional markers. The goal is to provide adequate calories and essential amino acids while limiting leucine intake. Avoid prolonged fasting and infections. Patients and families need education on emergency management protocols (e.g., increasing carbohydrates, reducing protein, seeking medical attention during illness). Carrying an emergency letter is recommended.</p>',
    fertilityOrFamily:
      '<p>Autosomal recessive inheritance. Parents of an affected child are asymptomatic carriers. Prenatal diagnosis (amniocentesis or chorionic villus sampling for acylcarnitine and genetic analysis) and preimplantation genetic testing are available for at-risk families. Genetic counseling helps families understand recurrence risks and reproductive options.</p>',
    emergencySigns:
      '<p>Vomiting with lethargy or altered consciousness, rapid breathing (acidosis compensation), seizures, severe dehydration, fever with poor feeding require immediate emergency care. Known patients with worsening symptoms during illness also need urgent management.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Classic Isovaleric Acidemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK601614/',
    },
    {
      name: 'NORD: Isovaleric Acidemia',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/acidemia-isovaleric/',
    },
  ],
  symptoms:
    '<p>Neonatal poor feeding, vomiting, lethargy, metabolic acidosis, characteristic "sweaty feet" odor; may progress to seizures and coma. Late-onset form triggered by infection with similar crises.</p>',
  diagnosis:
    '<p>Newborn screening: elevated C5 acylcarnitine; urine organic acids show elevated isovalerylglycine; plasma C5 elevated; IVD genetic testing confirms.</p>',
  treatment:
    '<p>Low-leucine diet, L-carnitine and glycine supplementation; acute crisis management with IV glucose, correction of acidosis and dehydration; avoid infection and fasting.</p>',
  prognosis:
    '<p>Newborn screening and early treatment enable normal development in most children; delayed diagnosis can cause brain damage and death; acute episode frequency decreases with age.</p>',
  sourceName: 'GeneReviews: Classic Isovaleric Acidemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK601614/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 505,
    name: 'isovaleric-acidemia-journey.png',
    url: '/images/diseases/isovaleric-acidemia-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

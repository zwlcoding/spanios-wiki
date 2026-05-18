import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNoonanSyndrome: DiseaseDraft = {
  ...entity(5030, 'disease-noonan-syndrome'),
  name: 'Noonan Syndrome',
  nameEn: 'Noonan Syndrome',
  alias: 'NS, Noonan syndrome, pseudo-Turner syndrome',
  icd10Code: 'Q87.1',
  slug: 'noonan-syndrome',
  oneSentence:
    'Noonan syndrome is a group of autosomal dominant RAS/MAPK pathway disorders (RASopathies) characterized by distinctive facial features, short stature, congenital heart disease (especially pulmonary valve stenosis), and variable developmental delay, caused by mutations in genes such as PTPN11, SOS1, and RAF1.',
  plainName:
    'A genetic condition with distinctive facial features, short stature, and often a congenital heart defect',
  prevalence:
    'Incidence is approximately 1 in 1,000 to 1 in 2,500 live births, making it one of the more common single-gene genetic syndromes. It affects both sexes and all ethnicities equally.',
  searchIntents: [
    'Noonan syndrome facial features',
    'Noonan syndrome heart',
    'Noonan syndrome short stature growth hormone',
    'Noonan syndrome gene PTPN11',
    'Noonan syndrome genetic counseling',
  ],
  quickLook: {
    whatItIs:
      'This is a group of genetic syndromes caused by abnormalities in the RAS/MAPK signaling pathway. Typical features include: widely spaced eyes, ptosis, low-set and posteriorly rotated ears, webbed neck, short stature, chest deformity, congenital heart disease (pulmonary valve stenosis is most common), mild intellectual disability or learning difficulties, and bleeding tendency.',
    whoToSeeFirst:
      'Pediatric genetics or pediatric endocrinology; regular cardiology follow-up is needed after diagnosis. Infants with characteristic facial features and cardiac murmurs should be evaluated promptly.',
    isGenetic:
      'Autosomal dominant inheritance. Approximately 50% are caused by PTPN11 mutations, with the remainder caused by SOS1, RAF1, RIT1, KRAS, BRAF, MAP2K1, LZTR1, and other gene mutations. Approximately 30-50% are sporadic cases (de novo mutations). Parental recurrence risk depends on parental genetic testing results.',
    hasTreatment:
      'There is no cure, but symptoms can be managed. Growth hormone can improve short stature; cardiac lesions can be treated surgically or interventionally; developmental delay benefits from early intervention and special education. Some patients need monitoring for bleeding tendency and tumor risk.',
    commonDelayReason:
      'Newborns show only subtle facial features or a cardiac murmur, not alarming parents or physicians; short stature mistaken for constitutional growth delay; learning difficulties treated as ordinary developmental delay without genetic evaluation; genetic testing not performed to establish diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Newborn or infant has distinctive facial features: widely spaced eyes, ptosis, low-set and posteriorly rotated ears, broad and rounded nasal tip, thin upper lip giving an inverted triangular face.',
      'Associated congenital heart disease (especially pulmonary valve stenosis, atrial septal defect, hypertrophic cardiomyopathy).',
      'Growth failure with height below the 3rd percentile for age and sex, and slow growth velocity.',
      'Webbed neck, chest deformity (pectus excavatum or carinatum), cubitus valgus.',
      'Delayed developmental milestones, mild intellectual disability, or learning difficulties.',
      'Easy bruising, nosebleeds, or prolonged bleeding after dental extraction (bleeding tendency).',
    ],
    commonWrongTurns: [
      'Congenital heart disease treated in isolation without further evaluation for genetic syndrome.',
      'Short stature treated as constitutional delay or malnutrition without genetic assessment.',
      'Learning difficulties managed only as ordinary developmental delay without seeking genetic diagnosis.',
      'Genetic testing not performed, preventing clarification of causative gene and prognosis.',
      'Irregular follow-up of cardiac function and tumor screening.',
    ],
    firstDepartments: [
      'Pediatric Genetics',
      'Pediatric Endocrinology (short stature evaluation)',
      'Cardiology (congenital heart disease follow-up)',
      'Developmental-Behavioral Pediatrics (developmental assessment)',
      'Genetic Counseling',
    ],
    diagnosisChecklist: [
      'Document facial features, birth history, growth curves, and cardiac history.',
      'Organize prior echocardiogram and ECG reports.',
      'Record developmental milestones, school performance, and social skills.',
      'Ask the physician whether Noonan syndrome genetic panel testing is needed.',
      'Draw a family pedigree to identify similar facial features, short stature, or heart disease in relatives.',
    ],
    testsToAskAbout: [
      'Noonan syndrome genetic panel (PTPN11, SOS1, RAF1, RIT1, KRAS, BRAF, MAP2K1, LZTR1, SHOC2, etc.).',
      'Echocardiogram and ECG (evaluate pulmonary valve stenosis, myocardial hypertrophy, arrhythmias).',
      'Growth assessment (bone age, growth hormone stimulation test, IGF-1 level).',
      'Complete blood count and coagulation studies (evaluate bleeding tendency and myeloid abnormalities).',
      'Ophthalmologic examination (refractive errors, strabismus, nystagmus).',
      'Hearing test.',
      'Renal ultrasound (some patients have renal anomalies).',
    ],
    questionsForDoctor: [
      'Can genetic testing identify the causative gene? How does prognosis differ by gene?',
      'Is my child a candidate for growth hormone therapy? When should we start? What results can we expect?',
      'Does the heart problem require surgery? When is the optimal timing?',
      'What early interventions are needed for development and learning?',
      'How should bleeding tendency and tumor risk be monitored?',
      'What is the risk of transmitting this condition to the next generation when my child grows up?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Noonan syndrome manifestations are variable and can affect multiple systems. Facial features include: widely spaced eyes, ptosis, low-set and posteriorly rotated ears, broad and rounded nasal tip, thin upper lip giving an inverted triangular face, high and broad forehead, and webbed neck. Facial features may become less typical with age.</p><p>Cardiovascular abnormalities occur in approximately 50-80% of patients, most commonly pulmonary valve stenosis (approximately 20-50%), followed by atrial septal defect, hypertrophic cardiomyopathy (especially with RAF1 mutations), and patent ductus arteriosus. Growth-wise, birth length and weight are usually normal, but growth velocity subsequently slows, with adult heights typically around 160 cm in males and 150 cm in females without treatment.</p><p>Other features include: chest deformity (pectus excavatum or carinatum), cubitus valgus, scoliosis, cryptorchidism (approximately 60-80% in males), mild to moderate intellectual disability or learning difficulties (approximately 25-30%), speech delay, bleeding tendency (platelet dysfunction or coagulation factor deficiency), lymphatic edema (especially dorsal hands and feet in infancy), renal anomalies, vision problems (refractive errors, strabismus), and hearing loss.</p>',
    diagnosis:
      '<p>Clinical diagnosis is based on the combination of characteristic facial features, cardiac anomalies, short stature, and developmental delay, but genetic testing is required for confirmation. PTPN11 mutations account for approximately 50%, SOS1 approximately 10-15%, RAF1 approximately 5-10%, RIT1 approximately 5%, with other genes (KRAS, BRAF, MAP2K1, LZTR1, SHOC2, etc.) each accounting for a smaller proportion.</p><p>Genetic testing should use a RASopathy gene panel including all the above genes. Differential diagnosis includes other RAS pathway disorders such as Costello syndrome, cardiofaciocutaneous syndrome (CFC), and LEOPARD syndrome (also caused by PTPN11 mutations). Prenatal diagnosis can be performed through chorionic villus sampling or amniocentesis when a parent is a known affected individual.</p>',
    treatment:
      '<p>Growth hormone therapy: can improve final adult height, usually starting at ages 4-5, with doses somewhat higher than for idiopathic short stature. Exclude hypertrophic cardiomyopathy and other contraindications before starting. Cardiac lesions: mild-to-moderate pulmonary valve stenosis can be monitored, while severe cases need balloon dilation or surgery; hypertrophic cardiomyopathy requires specialized cardiology management. Cryptorchidism should be surgically corrected by ages 1-2 to preserve fertility.</p><p>Development and learning: early intervention (speech therapy, occupational therapy, physical therapy) and special education support. Bleeding tendency: preoperative coagulation assessment, with platelet transfusion or fresh frozen plasma when needed. Ophthalmologic and hearing problems are managed symptomatically. Psychological support and social skills training are very important for adolescent patients.</p>',
    longTermCare:
      '<p>Long-term follow-up requires a multidisciplinary team: genetics (diagnosis and counseling), cardiology (regular echocardiograms and ECGs to monitor myocardial hypertrophy and arrhythmias), endocrinology (growth and puberty monitoring), developmental-behavioral pediatrics (cognitive and learning assessment), ophthalmology, otolaryngology, hematology (bleeding tendency monitoring).</p><p>Some genotypes (especially PTPN11, SOS1, RIT1) may carry increased risk of malignancies (especially juvenile myelomonocytic leukemia, JMML); vigilance is needed for persistent fever, hepatosplenomegaly, and blood count abnormalities. Adults need attention to fertility (females usually can conceive naturally; males with cryptorchidism may have impaired fertility), endocrine issues (hypothyroidism, insulin resistance), and mental health.</p>',
    fertilityOrFamily:
      '<p>Noonan syndrome is inherited in an autosomal dominant pattern. If one parent is affected, offspring have a 50% transmission risk. Approximately 30-50% are sporadic cases (de novo mutations), in which case parental recurrence risk is low but germline mosaicism should be considered. Prenatal genetic testing or preimplantation genetic testing (PGT) can reduce recurrence risk.</p><p>Female patients usually have normal fertility, but cardiac load increases during pregnancy, requiring close cardiology monitoring. Male patients may have impaired fertility due to cryptorchidism and possible spermatogenic defects. Genetic counseling is very important for all family members.</p>',
    emergencySigns:
      '<p>Seek immediate care for: severe breathing difficulty or cyanosis (suggesting worsening cardiac disease), unexplained persistent fever with hepatosplenomegaly (alert for malignancies such as JMML), severe uncontrollable bleeding, seizures, or altered consciousness.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Noonan Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1124/',
    },
    {
      name: 'NORD: Noonan Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/noonan-syndrome/',
    },
    {
      name: 'Orphanet: Noonan syndrome',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/648',
    },
  ],
  symptoms:
    '<p>Characteristic facial features, short stature, congenital heart disease (pulmonary valve stenosis most common), chest deformity, developmental delay, learning difficulties, bleeding tendency, and cryptorchidism.</p>',
  diagnosis:
    '<p>Clinical diagnosis combined with genetic testing. PTPN11 mutations account for approximately 50%, with the remainder caused by SOS1, RAF1, RIT1, and other gene mutations. Differential diagnosis includes other RASopathies.</p>',
  treatment:
    '<p>Growth hormone for short stature; surgical or interventional cardiac treatment; early intervention for developmental and learning issues; symptomatic management of bleeding tendency and vision/hearing problems.</p>',
  prognosis:
    '<p>Most patients have a normal lifespan, but severe heart disease and malignancies can affect prognosis. Early multidisciplinary management significantly improves quality of life.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1124/',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3530,
    name: 'noonan-syndrome-journey.png',
    url: '/images/diseases/noonan-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling', 'pediatric', 'cardiac'],
};

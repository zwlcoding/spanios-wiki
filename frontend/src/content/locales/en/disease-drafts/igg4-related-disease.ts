import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIgg4RelatedDisease: DiseaseDraft = {
  ...entity(5003, 'disease-igg4-related-disease'),
  name: 'IgG4-Related Disease',
  nameEn: 'IgG4-Related Disease',
  alias:
    'IgG4-RD; IgG4-related systemic disease; China First Rare Disease Catalog item 56',
  slug: 'igg4-related-disease',
  oneSentence:
    'IgG4-related disease is a chronic immune-mediated fibroinflammatory condition that can affect multiple organs, characterized by IgG4-positive plasma cell infiltration and fibrosis, often presenting as painless masses or organ enlargement, and usually responding well to glucocorticoid therapy.',
  plainName:
    'A rare immune condition that causes swelling and scarring in multiple organs',
  prevalence:
    'Prevalence is unknown; primarily affects middle-aged to older men; recognition has increased in recent years with growing awareness.',
  searchIntents: [
    'IgG4-related disease symptoms',
    'IgG4-RD diagnostic criteria',
    'IgG4-related disease treatment',
    'IgG4-related pancreatitis autoimmune pancreatitis',
    'elevated serum IgG4 does it mean disease',
  ],
  quickLook: {
    whatItIs:
      'An immune-mediated disease where IgG4-positive plasma cells infiltrate and damage multiple organs, causing inflammation, fibrosis, and tumor-like masses that can mimic cancer.',
    whoToSeeFirst:
      'Rheumatology for evaluation of unexplained organ enlargement or mass; gastroenterology, urology, or ophthalmology may be needed depending on organ involvement.',
    isGenetic:
      'The exact cause is unclear; likely involves genetic susceptibility and environmental triggers; not a typical single-gene disorder.',
    hasTreatment:
      'Glucocorticoids are first-line and most patients respond well; rituximab and other immunosuppressants are used for relapsing or refractory disease.',
    commonDelayReason:
      'Symptoms vary by organ and are often mistaken for cancer, infection, or isolated organ diseases; tissue biopsy is usually required for diagnosis.',
  },
  patientJourney: {
    whenToSuspect: [
      'Painless lacrimal or salivary gland enlargement (Mikulicz disease).',
      'Autoimmune pancreatitis (type 1 AIP) with pancreatic mass or obstructive jaundice.',
      'Retroperitoneal fibrosis causing hydronephrosis or abdominal pain.',
      'Unexplained lymphadenopathy, orbital mass, or hypopituitarism.',
      'Multiple organs involved simultaneously or sequentially.',
    ],
    commonWrongTurns: [
      'Performing surgery for organ enlargement without biopsy to exclude IgG4-RD.',
      'Treating autoimmune pancreatitis as pancreatic cancer with Whipple surgery.',
      'Diagnosing based solely on elevated serum IgG4 without histopathologic confirmation.',
      'Managing retroperitoneal fibrosis only as ureteral stenosis without systemic evaluation.',
    ],
    firstDepartments: [
      'Rheumatology',
      'Gastroenterology (pancreatic/biliary involvement)',
      'Urology (retroperitoneal fibrosis/hydronephrosis)',
      'Ophthalmology (orbital/lacrimal involvement)',
      'Pathology (tissue biopsy for diagnosis)',
    ],
    diagnosisChecklist: [
      'Document timeline of organ involvement and symptom evolution.',
      'Serum IgG4 level (elevated in most, but not required for diagnosis).',
      'Imaging of involved organs (CT/MRI/PET-CT).',
      'Tissue biopsy: lymphoplasmacytic infiltrate rich in IgG4+ plasma cells (>10/HPF), storiform fibrosis, obliterative phlebitis.',
      'Exclude malignancy, infection, and other autoimmune diseases.',
    ],
    testsToAskAbout: [
      'Serum IgG4 level.',
      'Imaging of involved organs (CT/MRI).',
      'Tissue biopsy with IgG4 immunohistochemistry.',
      'Autoantibody and infection workup (to exclude mimics).',
      'PET-CT (to assess extent of systemic involvement).',
    ],
    questionsForDoctor: [
      'Is my lesion IgG4-RD or cancer? What did the biopsy show?',
      'How long will I need steroids? What is the relapse rate?',
      'Which organs need long-term monitoring?',
      'When is rituximab considered?',
      'Are there dietary or lifestyle recommendations?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Symptoms vary by involved organ. Common manifestations include type 1 autoimmune pancreatitis (painless pancreatic enlargement, obstructive jaundice), Mikulicz disease (symmetric lacrimal and salivary gland enlargement), retroperitoneal fibrosis (flank pain, hydronephrosis), orbital disease (proptosis, visual impairment), sclerosing cholangitis (jaundice, pruritus), tubulointerstitial nephritis (renal dysfunction), hypophysitis (diabetes insipidus, endocrine dysfunction), pulmonary involvement (cough, dyspnea), and lymphadenopathy. Systemic symptoms such as fever are uncommon and should raise concern for infection or other conditions.</p>',
    diagnosis:
      '<p>The 2019 ACR/EULAR classification criteria integrate clinical, radiologic, serologic, and pathologic features. Histopathology is central: dense lymphoplasmacytic infiltrate rich in IgG4+ plasma cells (>10 per high-power field and IgG4/IgG ratio >40%), storiform fibrosis, and obliterative phlebitis. Elevated serum IgG4 (>135 mg/dL) is supportive but not required, as about 30% of patients have normal levels and other conditions can also elevate IgG4. Biopsy is essential to exclude lymphoma, carcinoma, infection (e.g., tuberculosis), and other autoimmune diseases (e.g., sarcoidosis, Sjögren syndrome).</p>',
    treatment:
      '<p>Glucocorticoids are the first-line therapy for induction of remission, typically prednisone 30–40 mg/day with gradual taper over weeks to months. Approximately 70–90% of patients respond. For relapsing, steroid-dependent, or steroid-intolerant disease, rituximab (anti-CD20 monoclonal antibody) or other immunosuppressants (azathioprine, mycophenolate mofetil, tacrolimus) are used. The goal is to induce and maintain remission, prevent organ damage, and halt fibrotic progression. Regular monitoring of serum IgG4 and imaging is needed to detect relapse.</p>',
    longTermCare:
      '<p>Relapse occurs in 20–50% of patients, necessitating long-term follow-up. Monitoring includes symptom review, serum IgG4, and imaging of involved organs. Even with normal serum IgG4, active disease may persist, so imaging is important. Watch for medication side effects (osteoporosis, hyperglycemia, infection risk with steroids and rituximab). Patient education includes recognizing signs of relapse and avoiding unsupervised medication discontinuation.</p>',
    fertilityOrFamily:
      '<p>IgG4-RD is not a classic genetic disorder; familial clustering is rare. Family planning should occur during disease quiescence, with rheumatology consultation regarding medication safety (e.g., rituximab in pregnancy).</p>',
    emergencySigns:
      '<p>Severe obstructive jaundice with fever (possible cholangitis), acute renal failure, rapid visual loss, severe abdominal pain with signs of bowel obstruction require immediate emergency care.</p>',
  },
  sources: [
    {
      name: 'Merck Manual: IgG4-Related Disease',
      type: 'review',
      url: 'https://www.merckmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/igg4-related-disease/igg4-related-disease',
    },
    {
      name: 'Penn Medicine: IgG4-Related Disease',
      type: 'review',
      url: 'https://www.pennmedicine.org/conditions/igg4-related-disease',
    },
  ],
  symptoms:
    '<p>Varies by organ: pancreatic enlargement, salivary/lacrimal gland swelling, retroperitoneal fibrosis, orbital mass, jaundice, renal dysfunction, hypopituitarism.</p>',
  diagnosis:
    '<p>Histopathology (IgG4+ plasma cell infiltrate, storiform fibrosis, obliterative phlebitis) is central; elevated serum IgG4 is supportive; must exclude malignancy and infection.</p>',
  treatment:
    '<p>Glucocorticoids are first-line; rituximab for relapsing disease; goal is remission induction and organ preservation.</p>',
  prognosis:
    '<p>Most patients respond well to steroids; relapse is common and requires long-term monitoring; early diagnosis and treatment improve organ function and outcomes.</p>',
  sourceName: 'Merck Manual: IgG4-Related Disease',
  sourceUrl:
    'https://www.merckmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/igg4-related-disease/igg4-related-disease',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5003,
    name: 'igg4-related-disease-journey.png',
    url: '/images/diseases/igg4-related-disease-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

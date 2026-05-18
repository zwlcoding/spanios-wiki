import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMarfanSyndrome: DiseaseDraft = {
  ...entity(5014, 'disease-marfan-syndrome'),
  name: 'Marfan Syndrome',
  nameEn: 'Marfan Syndrome',
  alias:
    'Marfan syndrome; arachnodactyly; China First Rare Disease Catalog item 68',
  slug: 'marfan-syndrome',
  oneSentence:
    'Marfan syndrome is an autosomal dominant connective tissue disorder caused by FBN1 gene mutations leading to fibrillin-1 deficiency; it affects the skeleton, eyes, and cardiovascular system, with aortic dissection being the most dangerous complication requiring lifelong surveillance and antihypertensive therapy.',
  plainName:
    'A genetic connective tissue disorder affecting bones, eyes, and the heart and blood vessels',
  prevalence:
    'Prevalence is approximately 1 in 5,000–10,000; no gender or racial predilection; approximately 75% are familial and 25% arise from de novo mutations.',
  searchIntents: [
    'Marfan syndrome symptoms',
    'Marfan syndrome aortic dissection',
    'Marfan syndrome height fingers',
    'Marfan syndrome lens dislocation',
    'Marfan syndrome treatment blood pressure',
  ],
  quickLook: {
    whatItIs:
      'FBN1 gene mutations impair the structure and function of fibrillin-1, a key component of connective tissue, affecting elasticity and strength in the skeleton, eyes, cardiovascular system, lungs, and skin.',
    whoToSeeFirst:
      'Cardiology, ophthalmology, or genetics for tall slender stature with long limbs, myopia or lens dislocation, heart murmur, or family history.',
    isGenetic:
      'Autosomal dominant, caused by FBN1 gene mutations; a parent with Marfan syndrome has a 50% transmission risk; approximately 25% are de novo mutations with no family history.',
    hasTreatment:
      'Clear management pathway: beta-blockers or ARBs to control blood pressure and protect the aorta; aortic root replacement when indicated; ophthalmologic correction and orthopedic intervention.',
    commonDelayReason:
      'Childhood manifestations may be limited to tall stature and myopia, which are often dismissed as normal body type or simple refractive error; cardiovascular complications typically emerge in adulthood.',
  },
  patientJourney: {
    whenToSuspect: [
      'Tall, slender stature with disproportionately long limbs and fingers (arachnodactyly); arm span greater than height.',
      'Chest deformity (pectus excavatum or carinatum), scoliosis, joint hypermobility.',
      'High myopia, lens dislocation (typically upward), increased risk of retinal detachment.',
      'Heart murmur, aortic root dilation, mitral valve prolapse.',
      'Spontaneous pneumothorax or dural ectasia.',
      'Family history of similar body habitus or early cardiovascular disease/sudden death.',
    ],
    commonWrongTurns: [
      'Dismissing tall stature as normal without measuring arm span and digit length.',
      'Managing lens dislocation as ordinary cataract or myopia.',
      'Failing to obtain echocardiography to measure aortic root diameter.',
      'Not considering aortic dissection when chest or back pain occurs, delaying a life-saving diagnosis.',
    ],
    firstDepartments: [
      'Cardiology (aortic evaluation)',
      'Ophthalmology (lens/retina evaluation)',
      'Orthopedics (scoliosis/chest wall deformity)',
      'Medical genetics (diagnosis and family screening)',
      'Cardiothoracic surgery (aortic surgery evaluation)',
    ],
    diagnosisChecklist: [
      'Measure height, arm span, digit length, and upper-to-lower segment ratio.',
      'Ophthalmologic examination: dilated exam for lens position and retinal status.',
      'Echocardiogram: measure aortic root diameter (Z-score) and assess mitral valve.',
      'Skeletal assessment: spinal radiographs, chest examination, foot arch evaluation.',
      'FBN1 genetic testing for definitive diagnosis.',
      'Family history and cascade screening.',
    ],
    testsToAskAbout: [
      'Ophthalmologic examination (lens, fundus).',
      'Echocardiogram (aortic root diameter).',
      'FBN1 genetic testing.',
      'Spinal and chest radiographs.',
      'Brain/spine MRI (dural ectasia).',
    ],
    questionsForDoctor: [
      'What is my current aortic root diameter and Z-score?',
      'Do I need blood pressure medication? What is the target blood pressure?',
      'When should aortic root replacement be considered?',
      'Does lens dislocation require surgery?',
      'Should my family members be screened?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Marfan syndrome affects multiple systems. Skeletal: tall slender stature, long thin limbs and fingers (arachnodactyly), arm span exceeding height, decreased upper-to-lower segment ratio, chest wall deformity (pectus excavatum/carinatum), scoliosis, joint laxity, high-arched palate, and pes planus. Ocular: high myopia, lens dislocation (typically superior), increased risk of retinal detachment, and glaucoma. Cardiovascular: aortic root dilation (most dangerous), mitral valve prolapse/regurgitation, aortic dissection, and arrhythmias. Pulmonary: spontaneous pneumothorax and apical lung blebs. Skin: stretch marks not related to obesity. Central nervous system: dural ectasia (commonly lumbosacral).</p>',
    diagnosis:
      '<p>The 2010 revised Ghent criteria are used for diagnosis. Major criteria include: 1) aortic root Z ≥ 2 plus ectopia lentis; 2) aortic root Z ≥ 2 plus an FBN1 mutation; 3) aortic root Z ≥ 2 plus a systemic score ≥ 7; or 4) ectopia lentis plus an FBN1 mutation known to cause aortic disease. Minor features involve skeletal, skin, and pulmonary systems. FBN1 genetic testing confirms the diagnosis and enables family screening. Differential diagnosis includes familial thoracic aortic aneurysm, Loeys-Dietz syndrome, and vascular Ehlers-Danlos syndrome.</p>',
    treatment:
      '<p>Lifelong surveillance and medical management are essential. Beta-blockers (e.g., atenolol, propranolol) or angiotensin receptor blockers (ARBs, e.g., losartan) reduce aortic wall stress and slow aortic growth. Target systolic blood pressure is <120 mmHg; competitive sports, isometric exercise (weightlifting), and contact sports should be avoided. Ophthalmology: lens dislocation can be managed with special glasses or surgical removal; regular fundus examination helps prevent retinal detachment. Orthopedics: severe scoliosis may require bracing or surgery; chest wall deformity may be corrected surgically. Surgery is indicated when aortic root diameter reaches ≥50 mm (or Z ≥ 2 with growth >5 mm/year, or family history of early dissection); options include Bentall procedure or valve-sparing David procedure.</p>',
    longTermCare:
      '<p>Lifelong multidisciplinary follow-up is needed, including cardiology (echocardiogram every 6–12 months), ophthalmology (annual dilated examination), and orthopedics (spine and chest monitoring). Avoid competitive and contact sports. Maintain appropriate body weight and blood pressure control. Pregnancy is high-risk and should be planned when aortic diameter is <40 mm and stable; aorta should be monitored every 4–8 weeks during pregnancy. Psychological support is important to help patients adapt to body image differences and long-term medical management.</p>',
    fertilityOrFamily:
      '<p>Autosomal dominant inheritance. A parent with Marfan syndrome has a 50% risk of transmitting the condition to each child. Approximately 25% arise from de novo mutations. Family members should undergo FBN1 genetic testing and clinical screening (echocardiogram, ophthalmology). Genetic counseling helps assess risk and formulate reproductive plans. Prenatal diagnosis and preimplantation genetic testing (PGT) are available for at-risk families.</p>',
    emergencySigns:
      '<p>Sudden severe chest or back pain (radiating to the abdomen), difficulty breathing, loss of consciousness (suggesting aortic dissection or rupture) require immediate emergency call; sudden severe vision loss (retinal detachment or complete lens dislocation) requires urgent ophthalmologic care; sudden chest pain and difficulty breathing (pneumothorax) also require immediate evaluation.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Marfan Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1335/',
    },
    {
      name: 'NORD: Marfan Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/marfan-syndrome/',
    },
  ],
  symptoms:
    '<p>Tall slender stature, arachnodactyly, chest deformity, scoliosis, high myopia, lens dislocation, aortic root dilation, mitral valve prolapse, spontaneous pneumothorax.</p>',
  diagnosis:
    '<p>2010 Ghent criteria (aortic root dilation plus lens dislocation/FBN1 mutation/systemic score); FBN1 genetic testing confirms diagnosis.</p>',
  treatment:
    '<p>Beta-blockers or ARBs to protect the aorta; aortic root replacement at ≥50 mm; ophthalmologic and orthopedic interventions as needed.</p>',
  prognosis:
    '<p>Early diagnosis and modern management significantly extend life expectancy; aortic dissection is the leading cause of death; regular follow-up and timely surgery can normalize life expectancy.</p>',
  sourceName: 'GeneReviews: Marfan Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1335/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5014,
    name: 'marfan-syndrome-journey.png',
    url: '/images/diseases/marfan-syndrome-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

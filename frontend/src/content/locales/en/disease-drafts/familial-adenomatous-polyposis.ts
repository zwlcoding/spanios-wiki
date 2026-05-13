import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFamilialAdenomatousPolyposis: DiseaseDraft = {
  ...entity(2027, 'disease-familial-adenomatous-polyposis'),
  name: 'Familial adenomatous polyposis',
  nameEn: 'Familial adenomatous polyposis',
  alias:
    'FAP; APC-associated adenomatous polyposis; China Second Rare Disease Catalog item 27',
  slug: 'familial-adenomatous-polyposis',
  oneSentence:
    'Familial adenomatous polyposis is an APC-related inherited colorectal cancer predisposition syndrome in which many colon adenomas often begin in adolescence and require lifelong cancer-prevention care.',
  plainName:
    'An inherited condition that causes many colon polyps and needs lifelong cancer-prevention follow-up',
  prevalence:
    "Included in China's second rare disease catalog; MedlinePlus Genetics describes an incidence of about 1 in 8,500 people and about 0.5% of all colorectal cancer.",
  quickLook: {
    whatItIs:
      'FAP happens when the APC tumor suppressor gene no longer works normally. The colon and rectum can develop many precancerous adenomas. Classic FAP often starts in childhood or adolescence; attenuated FAP has fewer polyps and later onset.',
    whoToSeeFirst:
      'Start with gastroenterology or colorectal surgery if colonoscopy shows many adenomas, there is early colorectal cancer in the family, or symptoms include rectal bleeding, anemia, diarrhea, or abdominal pain. Genetic counseling is part of care.',
    isGenetic:
      'FAP is usually autosomal dominant. An affected person has a 50% chance of passing the APC variant to each child, although some cases are new variants.',
    hasTreatment:
      'Care focuses on preventing cancer through colonoscopy, polyp management, the right timing of preventive colectomy, and surveillance for upper GI, thyroid, desmoid, and other FAP-related risks.',
    commonDelayReason:
      'Early disease can be silent or look like hemorrhoids, colitis, routine polyps, or anemia. The number of adenomas and the family history are key clues.',
  },
  patientJourney: {
    whenToSuspect: [
      'A child, teenager, or young adult has multiple adenomatous colon polyps, especially when the number increases over time.',
      'There is a family history of early colorectal cancer, repeated colon polyps, duodenal polyps, desmoid tumors, or thyroid cancer.',
      'Symptoms include rectal bleeding, mucus in stool, abdominal pain, diarrhea, iron-deficiency anemia, or unexplained weight loss.',
      'Eye exam shows CHRPE, or there are osteomas, dental abnormalities, or other FAP-associated clues.',
    ],
    commonWrongTurns: [
      'Removing one polyp without stepping back to consider inherited polyposis.',
      'Treating bleeding in a young person as hemorrhoids or inflammation without timely colonoscopy.',
      'After diagnosis, monitoring only the colon and missing upper GI, thyroid, or desmoid risks.',
      'Not offering genetic counseling or targeted testing to first-degree relatives.',
    ],
    firstDepartments: [
      'Gastroenterology',
      'Colorectal surgery',
      'Genetic counseling',
      'Cancer genetics clinic',
    ],
    diagnosisChecklist: [
      'Bring all colonoscopy and pathology reports, including polyp number, location, size, and removal records.',
      'Map three generations of colorectal cancer, polyps, GI tumors, thyroid cancer, desmoid tumors, and early deaths.',
      'Bring abdominal imaging, surgery records, eye exams, thyroid ultrasound results, and any genetic reports.',
      'If cancer is present or surgery is planned, ask whether pathology review and a multidisciplinary visit are needed.',
    ],
    testsToAskAbout: [
      'Full colonoscopy and, when appropriate, upper endoscopy to assess duodenal and gastric risk.',
      'APC genetic testing; if APC testing is negative but the pattern fits polyposis, ask about MUTYH and other polyposis genes.',
      'Thyroid ultrasound, abdominal imaging, eye exam, and desmoid tumor risk assessment.',
      'Genetic counseling, targeted familial variant testing, and age-appropriate colon screening for first-degree relatives.',
    ],
    questionsForDoctor: [
      'Does my pattern fit classic FAP, attenuated FAP, or another polyposis syndrome?',
      'Should we continue endoscopic management, or is it time to discuss preventive surgery?',
      'How should upper GI, thyroid, desmoid, and other cancer risks be followed?',
      'When should relatives start screening, and who should have targeted genetic testing?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FAP may cause no symptoms at first and may be found through family screening or colonoscopy. As polyps increase, patients may develop rectal bleeding, mucus in stool, abdominal pain, diarrhea, anemia, or weight loss.</p><p>Some people also develop duodenal or gastric polyps, desmoid tumors, osteomas, dental abnormalities, congenital hypertrophy of the retinal pigment epithelium, thyroid cancer, or other FAP-related tumor risks. Features vary between families.</p>',
    diagnosis:
      '<p>Diagnosis is based on colonoscopy and pathology showing multiple adenomatous polyps, together with family history and genetic testing. Classic FAP often has hundreds to thousands of adenomas; attenuated FAP may have fewer polyps and later onset.</p><p>The specialist may also consider MUTYH-associated polyposis, other inherited polyposis syndromes, inflammatory pseudopolyps, and sporadic multiple polyps. Genetic testing helps guide family screening, but clinical judgment still matters.</p>',
    treatment:
      '<p>The main goal is cancer prevention. Depending on age, polyp burden, pathology, cancer risk, and quality of life, care may include regular colonoscopy, polyp removal, and preventive colectomy or proctocolectomy.</p><p>After surgery, follow-up is still needed for the remaining rectum or pouch, upper GI tract, thyroid, and desmoid risk. Medicines may reduce polyp burden in selected situations but do not replace needed endoscopic or surgical care.</p>',
    longTermCare:
      '<p>FAP requires lifelong surveillance. Keep colonoscopy, pathology, surgery, and genetic reports, and follow the plan for colorectal or pouch surveillance, stomach and duodenum checks, thyroid screening, and desmoid risk monitoring.</p><p>After surgery, discuss bowel function, nutrition, anemia, bowel obstruction symptoms, and mental health support. Sharing the familial variant can reduce repeated testing for relatives.</p>',
    fertilityOrFamily:
      '<p>FAP is usually autosomal dominant. When the APC variant is known, parents, siblings, children, and other high-risk relatives can receive genetic counseling and targeted testing.</p><p>People planning pregnancy can discuss prenatal diagnosis or preimplantation genetic testing, depending on their goals and local availability.</p>',
    emergencySigns:
      '<p>Seek urgent care for heavy rectal bleeding, black stool with dizziness or weakness, persistent abdominal pain with bloating and vomiting, suspected bowel obstruction, fever or severe pain after surgery, rapidly worsening anemia, or cancer-related emergencies.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Familial adenomatous polyposis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-adenomatous-polyposis/',
    },
  ],
  symptoms:
    '<p>Key clues include multiple colorectal adenomas in a young person, rectal bleeding, abdominal pain, diarrhea, anemia, and sometimes duodenal polyps, desmoid tumors, osteomas, dental findings, or thyroid cancer risk.</p>',
  diagnosis:
    '<p>Diagnosis combines colonoscopy and pathology, family history, APC testing, and when needed testing for other inherited polyposis genes.</p>',
  treatment:
    '<p>Care focuses on cancer prevention with regular colonoscopy, polyp management, preventive colon or colorectal surgery when appropriate, and lifelong surveillance for upper GI, thyroid, and desmoid risks.</p>',
  prognosis:
    '<p>Early family screening and planned endoscopic or surgical care can greatly reduce colorectal cancer risk. Delayed diagnosis or interrupted follow-up increases cancer and complication risk.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 380,
    name: 'familial-adenomatous-polyposis-journey.png',
    url: '/images/diseases/familial-adenomatous-polyposis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

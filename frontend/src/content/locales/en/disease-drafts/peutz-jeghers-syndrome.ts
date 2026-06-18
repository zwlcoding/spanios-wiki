import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePeutzJeghersSyndrome: DiseaseDraft = {
  ...entity(5035, 'disease-peutz-jeghers-syndrome'),
  name: 'Peutz-Jeghers Syndrome',
  nameEn: 'Peutz-Jeghers Syndrome',
  alias: 'PJS, Peutz-Jeghers syndrome, pigmented polyposis syndrome',
  icd10Code: 'Q85.8',
  slug: 'peutz-jeghers-syndrome',
  oneSentence:
    'Peutz-Jeghers syndrome is a rare autosomal dominant hereditary cancer syndrome caused by STK11/LKB1 gene mutations, characterized by gastrointestinal hamartomatous polyps and mucocutaneous melanin pigmentation of the lips, oral cavity, and digits; it confers a significantly elevated lifetime risk of gastrointestinal and extracolonic cancers, requiring lifelong surveillance.',
  plainName:
    'A hereditary syndrome causing dark spots on the lips and fingers and polyps in the digestive tract, with high cancer risk',
  prevalence:
    'Estimated prevalence is approximately 1 in 25,000 to 1 in 280,000. There is no sex or racial predilection. Due to nonspecific symptoms, the true prevalence may be underestimated. Approximately 50% of cases are familial, and 50% are due to new mutations.',
  searchIntents: [
    'Peutz-Jeghers syndrome symptoms',
    'PJS polyps',
    'Peutz-Jeghers melanin spots',
    'PJS cancer risk',
    'Peutz-Jeghers screening guidelines',
  ],
  quickLook: {
    whatItIs:
      'PJS is an autosomal dominant hereditary hamartomatous polyposis syndrome. It is characterized by multiple Peutz-Jeghers polyps (hamartomas that can cause intussusception and bleeding) in the gastrointestinal tract and characteristic mucocutaneous melanin pigmentation. Individuals with STK11/LKB1 mutations have up to a 90% lifetime risk of cancer.',
    whoToSeeFirst:
      'Gastroenterologist or genetic counselor. Children with abdominal pain, rectal bleeding, or lip pigmentation should be evaluated early. Adults with new pigmentation or polyps should be assessed.',
    isGenetic:
      'Yes, autosomal dominant inheritance caused by mutations in the STK11 (also called LKB1) gene. Offspring of an affected parent have a 50% risk. Approximately 50% of cases are due to de novo mutations. Genetic testing confirms the diagnosis and guides family screening.',
    hasTreatment:
      'There is no specific drug therapy. Management includes: endoscopic polypectomy (to prevent intussusception and bleeding); regular cancer surveillance (upper endoscopy, colonoscopy, breast MRI, gynecologic ultrasound, pancreatic MRI, etc.); and surgical management for intussusception or obstruction.',
    commonDelayReason:
      'Lip pigmentation may be dismissed as ordinary freckles or moles. Childhood abdominal pain may be attributed to gastroenteritis or mesenteric lymphadenitis. Rectal bleeding may be misdiagnosed as hemorrhoids or anal fissures. Primary care providers may be unaware of the cancer risks. Genetic testing and family screening may be delayed.',
  },
  patientJourney: {
    whenToSuspect: [
      'Dark brown to black spots on the lips, oral mucosa, fingers, toes, palms, soles, or perianal area appearing in infancy or childhood.',
      'Recurrent abdominal pain, bloating, or distension, especially with symptoms of intussusception (colicky pain, vomiting, currant jelly stool).',
      'Recurrent rectal bleeding or melena.',
      'Family history of PJS, gastrointestinal polyps, or early-onset gastrointestinal, breast, or pancreatic cancer.',
      'Endoscopic finding of multiple Peutz-Jeghers polyps (characteristic arborizing smooth muscle core on histology).',
    ],
    commonWrongTurns: [
      'Lip pigmentation dismissed as ordinary freckles, moles, or cosmetic allergy.',
      'Childhood abdominal pain attributed to gastroenteritis, constipation, or mesenteric lymphadenitis.',
      'Rectal bleeding misdiagnosed as hemorrhoids, anal fissures, or milk protein allergy (in infants).',
      'Delay in genetic testing and cancer surveillance.',
      'Failure to arrange regular endoscopic follow-up after polypectomy.',
    ],
    firstDepartments: [
      'Gastroenterology (adults)',
      'Pediatric Gastroenterology (children)',
      'Genetic Counseling',
      'Dermatology (if pigmentation is the presenting feature)',
      'General Surgery (for intussusception or obstruction)',
    ],
    diagnosisChecklist: [
      'Document timing, location, and changes in pigmented spots, and any similar findings in family members.',
      'Collect history of abdominal pain, rectal bleeding, intussusception, and prior polypectomies.',
      'Draw a family pedigree noting gastrointestinal tumors, breast cancer, and pancreatic cancer.',
      'Ask whether WHO diagnostic criteria are met (histologically proven PJS polyp + characteristic pigmentation + family history).',
      'Inquire about STK11/LKB1 genetic testing.',
    ],
    testsToAskAbout: [
      'Full physical examination (document distribution and characteristics of pigmented spots).',
      'Upper endoscopy and colonoscopy (assess polyp number and size).',
      'Capsule endoscopy or enteroscopy (evaluate small bowel polyps, where PJS polyps are most common).',
      'Abdominal CT or MRI (assess polyp size, intussusception, and pancreatic status).',
      'STK11/LKB1 genetic testing (confirms diagnosis and guides family screening).',
      'Women: breast MRI or mammography, gynecologic ultrasound (ovaries and uterus), cervical screening.',
      'Men: testicular ultrasound (to evaluate for sex cord tumor with annular tubules).',
    ],
    questionsForDoctor: [
      'Do my pigmented spots and polyps meet the diagnostic criteria for PJS?',
      'Is my STK11 genetic test positive, and what type of mutation do I have?',
      'Do my polyps need endoscopic removal or surgery, and how often should they be checked?',
      'What is my cancer risk, what screenings do I need, and when should they start?',
      'Should my family members undergo genetic testing, and how should this be arranged?',
      'How is polyp and cancer surveillance managed during pregnancy?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Mucocutaneous melanin pigmentation is the hallmark feature of PJS, typically appearing in infancy or early childhood. The pigmented spots are dark brown to black, 1-5 mm in diameter, with well-defined borders, and are most commonly found on the lips, oral mucosa, fingers, toes, palms, soles, and perianal area. The spots may fade after puberty, but oral mucosal pigmentation usually persists.</p><p>Peutz-Jeghers polyps can occur anywhere in the gastrointestinal tract but are most common in the small intestine (especially jejunum). These hamartomatous polyps can cause abdominal pain, bloating, intussusception, obstruction, rectal bleeding, and anemia. The number of polyps ranges from a few to hundreds. Extraintestinal manifestations include sex cord tumor with annular tubules (SCTAT, usually benign, in females), ovarian sex cord tumor with annular tubules, testicular Sertoli cell tumors, cervical adenocarcinoma (minimal deviation adenocarcinoma/malignant adenoma), and pancreatic cysts.</p>',
    diagnosis:
      '<p>WHO clinical diagnostic criteria (any one of the following): ① histologically proven Peutz-Jeghers polyp + characteristic mucocutaneous pigmentation; ② characteristic pigmentation + family history; ③ any number of Peutz-Jeghers polyps + characteristic pigmentation. Molecular diagnosis: identification of a pathogenic STK11/LKB1 mutation confirms the diagnosis.</p><p>Imaging and endoscopy: upper endoscopy, colonoscopy, capsule endoscopy, and enteroscopy are used to evaluate polyps. CT or MR enterography can assess polyp burden and intussusception. Histopathology shows the characteristic arborizing smooth muscle core of PJS polyps. Genetic testing confirms the diagnosis and enables cascade screening of family members. Differential diagnosis includes familial juvenile polyposis, Cowden syndrome, and Bannayan-Riley-Ruvalcaba syndrome.</p>',
    treatment:
      '<p>Polyp management: small polyps can be removed endoscopically; larger polyps or those causing symptoms may require surgical resection (especially for intussusception). Small bowel polyps can be managed by double-balloon enteroscopy or surgical resection. Polypectomy prevents intussusception and bleeding but may not reduce cancer risk.</p><p>Cancer surveillance: lifelong surveillance is essential. Recommended screening includes: upper endoscopy and colonoscopy beginning at age 2 (every 2 years); capsule endoscopy/enteroscopy beginning at age 8-10 (every 2 years); breast MRI or mammography beginning at age 25 (annually); cervical screening beginning at age 18-20 (annually); pancreatic MRI/MRCP beginning at age 25 (every 1-2 years); and testicular ultrasound in males after puberty (annually). Surveillance protocols should be individualized based on personal and family history.</p>',
    longTermCare:
      '<p>The cornerstone of long-term management is regular cancer surveillance and polyp monitoring. Lifetime cancer risk in PJS is approximately 90%. Common cancers include: colorectal cancer (~39%), gastric cancer (~29%), small bowel cancer (~13%), pancreatic cancer (~11-36%), breast cancer (~32-54%), ovarian cancer (~18-21%), lung cancer (~7-17%), and cervical cancer (~10%). Screening should begin earlier and be more frequent than in the general population.</p><p>Genetic counseling: all patients and family members should receive genetic counseling. STK11 mutation carriers require lifelong surveillance. Prenatal diagnosis (amniocentesis or CVS) and preimplantation genetic testing (PGT) are available for at-risk families. Psychological support is important; patients and families should understand cancer risks without becoming excessively anxious. Healthy lifestyle choices, including smoking cessation, limiting alcohol, and balanced nutrition, are encouraged.</p>',
    fertilityOrFamily:
      '<p>PJS is autosomal dominant, so each child of an affected parent has a 50% risk. All patients should receive genetic counseling and STK11 testing. Known mutations allow prenatal diagnosis (amniocentesis or CVS) or preimplantation genetic testing (PGT) to reduce transmission risk. Family members should undergo cascade genetic testing, and carriers require lifelong surveillance.</p><p>Female patients require special attention to gynecologic and breast surveillance. Some may have ovarian sex cord tumor with annular tubules, which is usually benign but requires monitoring. Polyps may enlarge or cause symptoms during pregnancy, requiring coordinated management by gastroenterology and obstetrics.</p>',
    emergencySigns:
      '<p>Seek emergency care for: acute abdominal pain with vomiting and absence of flatus/stool (intussusception or obstruction); large-volume rectal bleeding or melena; acute anemia symptoms (severe fatigue, palpitations, syncope); palpable abdominal mass with tenderness.</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Peutz-Jeghers Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1266/',
    },
    {
      name: 'NORD: Peutz-Jeghers Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/peutz-jeghers-syndrome/',
    },
    {
      name: 'Orphanet: Peutz-Jeghers syndrome',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/2869',
    },
    {
      name: 'Gene Jianghu: Revised China Rare Disease Patient Organization Directory (2023)',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>Characteristic mucocutaneous melanin pigmentation (lips, oral cavity, digits) and multiple gastrointestinal Peutz-Jeghers polyps. Polyps can cause abdominal pain, intussusception, rectal bleeding, and anemia. Significantly elevated cancer risk.</p>',
  diagnosis:
    '<p>Based on WHO clinical criteria (polyp histology + pigmentation + family history). STK11/LKB1 genetic testing confirms the diagnosis. Endoscopy and imaging evaluate polyps; imaging assesses intussusception and pancreatic involvement.</p>',
  treatment:
    '<p>Endoscopic or surgical polypectomy to prevent complications. Lifelong cancer surveillance including gastrointestinal endoscopy, breast MRI, pancreatic MRI, and gynecologic screening. No specific drug therapy is available.</p>',
  prognosis:
    '<p>Cancer risk is significantly elevated (~90%), making lifelong surveillance essential. Early detection of precancerous lesions and cancers through screening improves outcomes.</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1266/',
  categorySlug: 'digestive-hepatic',
  charityIds: [37],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3535,
    name: 'peutz-jeghers-syndrome-journey.png',
    url: '/images/diseases/peutz-jeghers-syndrome-journey.png',
  },
  tagSlugs: ['gastroenterology', 'genetic-counseling', 'cancer-surveillance'],
};

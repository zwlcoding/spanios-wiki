import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHidradenitisSuppurativa: DiseaseDraft = {
  ...entity(2040, 'disease-hidradenitis-suppurativa'),
  name: 'Hidradenitis suppurativa',
  nameEn: 'Hidradenitis suppurativa',
  alias: 'HS, acne inversa, China Second Rare Disease Catalog item 40',
  slug: 'hidradenitis-suppurativa',
  oneSentence:
    'Hidradenitis suppurativa is a chronic, recurrent inflammatory skin disease that often causes painful nodules, abscesses, draining tunnels, and scarring in friction-prone areas such as the armpits, groin, buttocks, and under the breasts.',
  plainName:
    'A chronic inflammatory skin condition with painful recurring nodules and tunnels in friction areas',
  prevalence:
    "Included in China's second rare disease catalog; estimates vary widely, and underdiagnosis or misdiagnosis strongly affects statistics.",
  quickLook: {
    whatItIs:
      'HS is not simply an infection and is not caused by poor hygiene. It is related to hair follicles and immune inflammation, often recurring in areas where skin rubs together.',
    whoToSeeFirst:
      'Repeated painful deep nodules, abscesses, drainage, tunnels, or scars in the armpits, groin, buttock fold, perineal area, or under the breasts should be assessed by dermatology.',
    isGenetic:
      'Most HS is not a single-gene disorder, but family clustering is common. Very early onset or multiple affected relatives can prompt discussion of family risk and associated conditions.',
    hasTreatment:
      'Treatment is staged by severity and may include topical medicines, oral antibiotics, hormonal/metabolic approaches, biologics, pain and wound care, and procedures such as deroofing or excision.',
    commonDelayReason:
      'HS is often mistaken for boils, folliculitis, acne, Bartholin cysts, or sexually transmitted infection. Repeated incision and drainage without a long-term inflammation and tunnel plan leads to relapse.',
  },
  patientJourney: {
    whenToSuspect: [
      'Painful deep nodules or abscesses recur in the armpits, groin, buttocks, perineal/perianal area, or under the breasts.',
      'The same or mirrored areas repeatedly drain, form cord-like tunnels, scar, or restrict movement.',
      'Flares interfere with walking, sitting, sleep, work, intimacy, or mood.',
      'Symptoms quickly return after routine infection treatment, or family members have similar disease.',
    ],
    commonWrongTurns: [
      'Using short antibiotic courses or incision and drainage each time without a long-term dermatology plan.',
      'Blaming hygiene, which increases shame and delays care.',
      'Treating one abscess at a time without assessing Hurley stage, pain, tunnels, scarring, and quality of life.',
      'Missing smoking, weight, friction, menstrual flares, inflammatory bowel disease, joint pain, depression, or anxiety clues.',
    ],
    firstDepartments: [
      'Dermatology',
      'Dermatologic surgery',
      'Pain or wound care clinic',
      'General surgery consultation',
    ],
    diagnosisChecklist: [
      'Record flare locations, frequency, duration, pain level, drainage, and scarring.',
      'Bring non-exposing, non-intimate photos if they help show location and flare evolution.',
      'List prior antibiotics, topical treatments, biologics, surgeries, or incision/drainage and the response.',
      'Note smoking, weight changes, menstrual pattern, family history, inflammatory bowel disease, joint pain, and mood burden.',
    ],
    testsToAskAbout: [
      'Clinical diagnosis by dermatology based on typical areas, recurrence, and lesion pattern.',
      'Culture, ultrasound to map tunnels, or tests to exclude other infection, cyst, or inflammatory bowel disease-related lesions when needed.',
      'Hurley stage, pain, quality-of-life assessment, and whether biologics or surgery fit the disease pattern.',
      'Tuberculosis, hepatitis B, and other infection screening plus safety monitoring before biologic therapy.',
    ],
    questionsForDoctor: [
      'What stage is my HS, and is the current goal fewer flares, pain control, tunnel treatment, or surgery?',
      'Do topical medicines, oral antibiotics, hormonal treatment, biologics, or dermatologic surgery fit my case?',
      'Which daily factors worsen friction or pain, and how should wound care and pain relief be handled?',
      'If I am planning pregnancy, pregnant, or breastfeeding, which medicines or procedures need adjustment?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>HS commonly recurs in the armpits, groin, buttock fold, perineal/perianal area, or under the breasts. Patients may have painful deep nodules, abscesses, drainage, tunnels, scarring, skin tightness, and limited movement.</p><p>Pain, odor, drainage, and relapse can affect sleep, walking, sitting, work, social life, and intimacy. Shame, anxiety, and depression are common burdens and deserve direct care.</p>',
    diagnosis:
      '<p>HS is usually a clinical diagnosis made by dermatology. The combination of typical locations, recurrent disease, and typical lesions strongly supports the diagnosis. No single blood test confirms HS.</p><p>Mimics include boils, folliculitis, acne, epidermoid cysts, Bartholin cysts, anal fistula, sexually transmitted infections, and inflammatory bowel disease-related perianal disease. Ultrasound can help map tunnels, and culture may be useful when secondary infection is suspected.</p>',
    treatment:
      '<p>Treatment is matched to severity and goals. Mild disease may use topical antibacterial or anti-inflammatory treatment, local care, and friction reduction. Moderate or severe disease may need oral antibiotics, hormonal or metabolic approaches, biologics, pain care, and wound care.</p><p>When tunnels, repeated same-site flares, or scarring are present, repeated incision and drainage alone usually does not solve the long-term problem. Dermatologic surgery may consider deroofing, local excision, or wider excision. Smoking, weight, comorbidities, and psychological stress also need attention.</p>',
    longTermCare:
      '<p>Long-term care tracks flare frequency, pain scores, treatment response, wound needs, and quality of life. Soft breathable clothing, reduced friction, regular follow-up, and early flare management can reduce burden.</p><p>Biologic or long-term immune-modifying therapy requires infection screening and safety monitoring. HS is chronic, and treatment plans often need adjustment over time.</p>',
    fertilityOrFamily:
      '<p>HS can cluster in families, but most cases are not managed as a single-gene inherited disease. People who are planning pregnancy, pregnant, or breastfeeding should discuss medicine safety, pain control, and procedure timing with dermatology and obstetrics.</p>',
    emergencySigns:
      '<p>High fever, chills, rapidly spreading redness or swelling, severe pain, confusion, infection while immunosuppressed, rapidly worsening perineal/perianal disease, uncontrolled bleeding, or dehydration requires emergency care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'American Academy of Dermatology: Hidradenitis suppurativa diagnosis and treatment',
      type: 'patient-organization',
      url: 'https://www.aad.org/public/diseases/painful-skin-joints/hidradenitis-suppurativa',
    },
    {
      name: 'Mayo Clinic: Hidradenitis suppurativa diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/hidradenitis-suppurativa/diagnosis-treatment/drc-20352311',
    },
  ],
  symptoms:
    '<p>Common symptoms are recurrent painful nodules, abscesses, drainage, tunnels, and scarring in the armpits, groin, buttock fold, perineal/perianal area, or under the breasts, affecting movement, sleep, and mood.</p>',
  diagnosis:
    '<p>Diagnosis is mainly clinical by dermatology, based on typical locations, recurrence, and lesion pattern; culture, ultrasound, or other tests may help exclude similar infections, cysts, or perianal disease.</p>',
  treatment:
    '<p>Treatment is staged and may include topical therapy, oral antibiotics, hormonal/metabolic approaches, biologics, pain and wound care, and dermatologic procedures such as deroofing or excision.</p>',
  prognosis:
    '<p>HS often relapses for years, but early recognition, ongoing dermatology care, friction reduction, and comorbidity management can lower flares, pain, scarring, and quality-of-life impact.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'dermatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 394,
    name: 'hidradenitis-suppurativa-journey.png',
    url: '/images/diseases/hidradenitis-suppurativa-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHomozygousHypercholesterolemia: DiseaseDraft = {
  ...entity(48, 'disease-homozygous-hypercholesterolemia'),
  name: 'Homozygous Familial Hypercholesterolemia',
  nameEn: 'Homozygous Familial Hypercholesterolemia',
  slug: 'homozygous-hypercholesterolemia',
  oneSentence:
    'Homozygous familial hypercholesterolemia is a serious inherited lipid metabolism disorder where patients have extremely high LDL-C levels, and can develop skin xanthomas and early-onset atherosclerosis even in childhood.',
  plainName: 'Homozygous Familial Hypercholesterolemia',
  prevalence:
    'Extremely rare, with a global prevalence of approximately 1 in 160,000 to 1 in 300,000, though it may be higher in certain populations due to founder effects.',
  quickLook: {
    whatItIs:
      'This is one of the most severe forms of familial hypercholesterolemia, where LDL-C is markedly elevated from birth, and children may develop xanthomas and early-onset atherosclerosis risk.',
    whoToSeeFirst:
      'Priority should be to visit cardiology or endocrinology departments; pediatric patients should follow up with pediatric cardiology specialists; if chest pain or cardiac symptoms are already present, see cardiology; lipid metabolism specialists or rare disease centers can provide more comprehensive management.',
    isGenetic:
      'Usually related to genes such as LDLR, APOB, PCSK9, and LDLRAP1. Clinically, biallelic variants, compound heterozygous, or functionally near-homozygous severe phenotypes can be seen; genetic interpretation requires combining genetic testing and family information.',
    hasTreatment:
      'Requires long-term management by lipid metabolism/cardiovascular specialists, which may involve multi-drug combination lipid-lowering therapy, lipoprotein apheresis, coronary risk assessment, and in rare cases more complex treatment options; do not self-apply standard high cholesterol regimens.',
    commonDelayReason:
      'Elevated LDL-C in children is often overlooked or attributed to diet; skin xanthomas are easily mistaken for common skin problems; by the time symptoms like chest pain appear, atherosclerosis has often become quite severe.',
  },
  patientJourney: {
    whenToSuspect: [
      'Yellow or orange papule-like nodules (xanthomas) appearing on the skin, especially on the back of hands, Achilles tendons, elbows, and knees.',
      'Chest tightness or angina in minors.',
      'Multiple family members who died young from heart disease or required stents.',
      'Blood tests showing significantly elevated LDL-C levels (far exceeding normal upper limits; be alert for extremely high levels).',
    ],
    commonWrongTurns: [
      'Relying solely on diet control without recognizing this as a metabolic disease caused by genetic mutations.',
      'Skin xanthomas misdiagnosed as common warts or lipomas, without lipid testing.',
      'Young patients with cardiac symptoms not being investigated for hereditary hypercholesterolemia.',
    ],
    firstDepartments: [
      'Cardiology',
      'Endocrinology or lipid metabolism specialists',
      'Pediatrics (for child patients)',
      'Dermatology (for xanthoma assessment)',
    ],
    diagnosisChecklist: [
      'Fasting lipid panel: total cholesterol, LDL-C, HDL-C, triglyceride levels.',
      'Lipoprotein(a) level testing.',
      'Cardiovascular assessment: carotid ultrasound, echocardiography, coronary CT or coronary angiography (based on age and symptoms).',
      'Achilles tendon and skin xanthoma examination and documentation.',
      'Genetic testing to identify mutation types in LDLR, ApoB, PCSK9, LDLRAP1 and other genes.',
      'Cascade screening of family members.',
    ],
    testsToAskAbout: [
      'What is my specific LDL-C value, and how much higher is it than the normal range?',
      'Do I need genetic testing to confirm the specific type?',
      'What cardiovascular tests do I need, and how often should I have follow-up exams?',
      'How should my family members be screened?',
    ],
    questionsForDoctor: [
      'What stage is my LDL-C level and atherosclerosis risk currently at?',
      'What combination of medications or non-drug treatments do I need? What are the treatment goals and monitoring frequency?',
      'Do I need lipoprotein apheresis or referral to a lipid metabolism/cardiovascular specialist center for evaluation?',
      'How should family members be screened for lipid and genetic risks?',
    ],
  },
  medicalSections: {
    symptoms:
      'Skin xanthomas appearing from early childhood (commonly on Achilles tendons, back of hands, elbows, and buttocks), early-onset corneal arcus (before age 40), progressive atherosclerosis (can affect coronary arteries, carotid arteries, and aorta). In severe cases, angina, myocardial infarction can occur in childhood or adolescence, even requiring interventional procedures or bypass surgery.',
    diagnosis:
      'Based on very high LDL-C levels (far exceeding normal upper limits without treatment), skin xanthomas, family history of early-onset cardiovascular disease, and genetic testing (mutations in LDLR and other genes) for diagnosis; cascade screening helps identify more family members.',
    treatment:
      'Treatment typically requires intensive, long-term combined management under lipid metabolism and cardiovascular specialists, including lifestyle support, multiple classes of lipid-lowering drugs, lipoprotein apheresis, and management of atherosclerosis complications. Whether new drugs, interventions, surgery, or transplant evaluation are suitable depends on genetic type, LDL-C level, cardiovascular involvement, and local availability, to be determined by the specialist team.',
    longTermCare:
      'Requires long-term multidisciplinary management by cardiology, metabolism endocrinology, and nutrition departments; lipid checks every 3 to 6 months, atherosclerosis progression assessment every 1 to 2 years; strict low saturated fat and low cholesterol diet; avoid strenuous exercise that may trigger cardiac events, but moderate aerobic exercise is beneficial; pay attention to the mental health of patients and family members.',
    fertilityOrFamily:
      'It is recommended that family members undergo systematic cascade screening for early detection and intervention; pregnancy in patients requires multidisciplinary evaluation, with coordinated management by lipid metabolism specialists, obstetrics, and cardiology; statins are typically discontinued during pregnancy.',
    emergencySigns:
      'Sudden chest pain or pressure sensation (may indicate acute coronary event); chest tightness with shortness of breath, palpitations (signs of angina or cardiac insufficiency); unilateral limb weakness or slurred speech (need to rule out cerebrovascular event).',
  },
  sources: [
    {
      name: 'GeneReviews: Familial Hypercholesterolemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
    },
    {
      name: 'MedlinePlus Genetics: Familial hypercholesterolemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-hypercholesterolemia/',
    },
    {
      name: 'European Atherosclerosis Society consensus update on HoFH',
      type: 'clinical-guideline',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10314327/',
    },
  ],
  sourceName: 'GeneReviews: Familial Hypercholesterolemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 347,
    name: 'homozygous-hypercholesterolemia-journey.png',
    url: '/images/diseases/homozygous-hypercholesterolemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

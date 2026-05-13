import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAutoimmuneInsulinReceptopathyTypeBInsulinResistance: DiseaseDraft =
  {
    ...entity(
      13,
      'disease-autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    ),
    name: 'Autoimmune Insulin Receptopathy (Type B Insulin Resistance)',
    nameEn: 'Autoimmune Insulin Receptopathy (Type B Insulin Resistance)',
    alias:
      'Type B Insulin Resistance Syndrome, Type B Insulin Resistance, TBIR',
    slug: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    oneSentence:
      'Autoimmune insulin receptopathy is an extremely rare autoimmune disorder caused by autoantibodies against the insulin receptor. It can lead to severe insulin resistance, high blood sugar, and may also cause low blood sugar.',
    plainName:
      'A rare disease where immune antibodies interfere with insulin receptors',
    prevalence:
      'Extremely rare; the exact prevalence is unknown. Published literature mostly consists of case reports and case series. It is often associated with a background of autoimmune diseases such as systemic lupus erythematosus.',
    quickLook: {
      whatItIs:
        'In this condition, the immune system produces antibodies targeting the insulin receptor, disrupting insulin signaling. Depending on how the antibodies act, it can present as difficult-to-control high blood sugar with marked insulin resistance, or as low blood sugar, or wide swings in blood glucose levels.',
      whoToSeeFirst:
        "It is recommended to first visit an endocrinology department for evaluation. If there are signs of underlying autoimmune diseases such as systemic lupus erythematosus, Sjögren's syndrome, or dermatomyositis, a rheumatology department is usually also needed for joint management.",
      isGenetic:
        'This is generally not a hereditary insulin receptor defect; it is caused by an autoimmune mechanism. Family members may have a background of autoimmune diseases, but it should not be understood as a single-gene inherited disorder.',
      hasTreatment:
        'There are treatment approaches, but evidence mostly comes from case series and expert experience. Treatment usually addresses blood sugar safety, hypoglycemia prevention, and autoimmune disease control at the same time. Specific plans should be developed by a specialized medical team.',
      commonDelayReason:
        'Because it is very rare, it is often initially treated as ordinary type 2 diabetes, severe insulin resistance, polycystic ovary syndrome, insulinoma, or other causes of low blood sugar. Only when the degree of blood sugar abnormality does not match the common picture is the possibility of this condition considered.',
    },
    patientJourney: {
      whenToSuspect: [
        'Blood sugar is very difficult to control, and insulin requirements or blood sugar fluctuations are clearly beyond what is typical for common diabetes.',
        'Experiencing both high blood sugar and repeated low blood sugar, or unexplained low blood sugar without using any glucose-lowering medications.',
        'Having marked acanthosis nigricans, but the body type, lipids, or other features do not fully match common metabolic syndrome.',
        "Having systemic lupus erythematosus, Sjögren's syndrome, dermatomyositis, scleroderma, or other autoimmune diseases.",
        'In women, having signs of high androgens or polycystic ovary-like features, but the degree of insulin resistance is unusually prominent.',
        'Standard diabetes management is not working well, and the doctor suggests screening for rare insulin resistance syndromes.',
      ],
      commonWrongTurns: [
        'Treating it only as ordinary diabetes and increasing medications without investigating the autoimmune background and acanthosis nigricans.',
        'When low blood sugar occurs, only looking for insulinoma without considering insulin receptor antibody-related hypoglycemia.',
        'Managing high androgen or menstrual issues solely as polycystic ovary syndrome without recognizing extreme insulin resistance.',
        'Not realizing that the same disease can present risks of both high and low blood sugar at different stages.',
        'Self-adjusting medications based on frequent blood sugar swings, which increases the risk of either hypoglycemia or hyperglycemia.',
      ],
      firstDepartments: [
        'Endocrinology department',
        'Rheumatology department',
        'Emergency department (in cases of severe hypoglycemia, ketoacidosis, or altered consciousness)',
        'Obstetrics and Gynecology / Reproductive endocrinology department (when high androgen or menstrual problems are prominent)',
      ],
      diagnosisChecklist: [
        'Compile blood sugar records, continuous glucose monitoring data, medication timeline, and episodes of low blood sugar.',
        'Bring fasting/post-meal blood sugar, HbA1c, insulin, C-peptide, lipids, and past diabetes treatment records.',
        'Record acanthosis nigricans, high androgen features, weight changes, and history of autoimmune disease diagnoses.',
        'Ask your doctor whether insulin receptor autoantibody testing is needed, or whether a referral to a center with testing or consultation capabilities is appropriate.',
        'Rule out other severe insulin resistance syndromes, insulin autoimmune syndrome, insulinoma, and drug-related hypoglycemia.',
      ],
      testsToAskAbout: [
        'Blood glucose profile, HbA1c, insulin, and C-peptide, to assess blood sugar swings and the context of insulin secretion.',
        'Autoimmune antibody panel and rheumatologic evaluation.',
        'Whether insulin receptor autoantibody testing is available and how to interpret the results.',
        'Drawing blood during a hypoglycemic episode to help differentiate among various causes of low blood sugar.',
        'Lipids, liver and kidney function, urine ketones, and blood ketones for metabolic safety monitoring.',
        'If needed, imaging to rule out pancreatic lesions, lipoatrophy, or other rare insulin resistance syndromes.',
      ],
      questionsForDoctor: [
        'Is my blood sugar abnormality more consistent with ordinary diabetes, or should we consider Type B Insulin Resistance?',
        'At present, is the main risk high blood sugar, low blood sugar, or both alternating? How should I track and respond to this?',
        'Do I need a rheumatology evaluation for a possible underlying autoimmune disease?',
        'Is there a way to test for insulin receptor autoantibodies? If the test is negative, what would serve as the diagnostic basis?',
        'Is the treatment goal short-term blood sugar safety, or long-term control of autoimmune activity?',
        'Which situations require a visit to the emergency department rather than home management?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Symptoms of autoimmune insulin receptopathy can be quite variable. Common clues include hard-to-control high blood sugar, marked thirst and frequent urination, weight loss, acanthosis nigricans, and spontaneous or recurrent low blood sugar. Some women may experience hirsutism, acne, or sparse menstrual periods due to high androgen levels. Many patients also have systemic lupus erythematosus or other autoimmune diseases.</p>',
      diagnosis:
        '<p>Diagnosis requires putting together clinical features, blood sugar data, insulin/C-peptide, lipids, checks done during hypoglycemic episodes, and the autoimmune background. A positive insulin receptor autoantibody test supports the diagnosis, but this test is not routinely available in all hospitals. Therefore, diagnosis may sometimes need to be made at a specialized center based on probabilistic evidence.</p><p>Differential diagnoses include common diabetes, other severe insulin resistance syndromes, lipoatrophy, insulin autoimmune syndrome, insulinoma, drug-related hypoglycemia, and endocrine emergencies.</p>',
      treatment:
        '<p>Treatment usually follows two lines: first, protecting blood sugar safety by preventing severe hyperglycemia, ketoacidosis, and hypoglycemia; second, assessing and controlling autoimmune activity. Immunotherapy, glucose-lowering treatment, and hypoglycemia management all need to be adjusted dynamically based on the individual situation. Doses and medications should not be copied directly from case reports.</p>',
      longTermCare:
        '<p>Long-term management requires regularly recording blood sugar, hypoglycemic episodes, medication changes, and autoimmune disease activity. Even after remission, patients should stay alert for relapse or blood sugar swings when treatment is reduced. Patients should confirm with their doctor the plan for hypoglycemia management, emergency visit criteria, and follow-up frequency.</p>',
      fertilityOrFamily:
        '<p>This condition is generally not a hereditary insulin receptor defect. Women of childbearing age with menstrual, high androgen, or fertility concerns need joint evaluation by endocrinology, rheumatology, and obstetrics/reproductive medicine teams. Pregnancy-related medications and blood sugar targets need to be individualized.</p>',
      emergencySigns:
        '<p>Repeated or severe hypoglycemia, confusion, seizures, very high blood sugar with dehydration or ketosis, nausea, vomiting, abdominal pain, abnormal breathing, loss of blood sugar control after infection, or clear worsening of an autoimmune disease — seek emergency care promptly. When doing so, proactively inform doctors of the suspected or confirmed diagnosis of Type B Insulin Resistance.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: First Catalog of Rare Diseases',
        type: 'policy',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'Orphanet: Insulin-resistance syndrome type B',
        type: 'official',
        url: 'https://www.orpha.net/en/disease/detail/2298',
      },
      {
        name: 'Endocrine Society: Type B Insulin Resistance',
        type: 'official',
        url: 'https://www.endocrine.org/patient-engagement/endocrine-library/type-b-insulin-resistance',
      },
      {
        name: 'Type B insulin resistance syndrome: a systematic review',
        type: 'review',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32813762/',
      },
    ],
    symptoms:
      '<p>May present as extreme insulin resistance, high blood sugar, acanthosis nigricans, recurrent hypoglycemia, and symptoms related to autoimmune disease.</p>',
    diagnosis:
      '<p>Evaluation usually includes blood glucose profile, insulin/C-peptide, autoimmune assessment, tests done during hypoglycemic episodes, and insulin receptor autoantibody testing when available.</p>',
    treatment:
      '<p>Treatment requires joint management by endocrinology and rheumatology, with a focus on blood sugar safety, hypoglycemia prevention, and control of autoimmune activity.</p>',
    prognosis:
      '<p>The disease course varies widely. Some patients may achieve remission, but recurrence is possible. Ongoing follow-up and clear emergency thresholds for both hypoglycemia and hyperglycemia are important.</p>',
    sourceName: 'Orphanet',
    sourceUrl: 'https://www.orpha.net/en/disease/detail/2298',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 311,
      name: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
      url: '/images/diseases/autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
    },
    tagSlugs: ['endocrine'],
  };

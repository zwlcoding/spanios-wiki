import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryMultiInfarctDementiaCerebralAutosomalDominantArteriopathyWithSubcorticalInfarctsAndLeukoencephalopathyCadasil: DiseaseDraft =
  {
    ...entity(44, 'disease-cadasil'),
    name: 'CADASIL',
    nameEn: 'CADASIL',
    alias:
      'CADASIL、CADASIL (Cerebral Autosomal Dominant Arteriopathy With Subcortical Infarcts and Leukoencephalopathy)、NOTCH3-Related Cerebral Small Vessel Disease',
    slug: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil',
    oneSentence:
      'CADASIL is a NOTCH3-related hereditary small vessel disease of the brain, which can cause migraine with aura, recurrent lacunar strokes, mood changes, cognitive decline, and white matter changes.',
    plainName:
      'A hereditary condition where small blood vessels in the brain are prone to problems, causing repeated minor strokes and cognitive changes',
    prevalence:
      'Overall rare, but the NOTCH3-related phenotype spectrum is broad; some families present with typical features, while others have milder symptoms or are identified later.',
    quickLook: {
      whatItIs:
        'CADASIL affects small-to-medium-sized arteries in the brain, causing white matter lesions and lacunar ischemic events. It is different from ordinary small vessel disease caused by hypertension or atherosclerosis.',
      whoToSeeFirst:
        'When younger or middle-aged patients have recurrent transient ischemic attacks/strokes, migraine with aura, prominent white matter changes on brain MRI, or a family history of multiple relatives with early-onset stroke/dementia, they can visit the neurology cerebrovascular disease clinic or inherited neurological disorder clinic.',
      isGenetic:
        'Yes, usually autosomal dominant inheritance, related to pathogenic variants in NOTCH3.',
      hasTreatment:
        'Currently focused on stroke risk management, symptom control, rehabilitation, and genetic counseling; there is no universally applicable cure.',
      commonDelayReason:
        'White matter changes on imaging are often attributed to hypertension, aging, or common migraine; if the age of onset is relatively young, family history is significant, or MRI distribution is typical, hereditary small vessel disease should be considered.',
    },
    patientJourney: {
      whenToSuspect: [
        'Recurrent lacunar cerebral infarctions or transient ischemic attacks appearing around age 40-50 or earlier.',
        'Migraine with aura, mood changes, or cognitive decline co-occurring with white matter lesions on brain MRI.',
        'Brain MRI showing extensive white matter hyperintensities, especially in suggestive locations such as the temporal poles or external capsule.',
        'Multiple relatives in the family with early-onset stroke, gait problems, cognitive decline, or psychiatric/behavioral changes.',
      ],
      commonWrongTurns: [
        'Treating only as common migraine without brain MRI and family history review.',
        'Explaining white matter changes in young patients simply as stress or aging.',
        'For recurrent minor strokes, only controlling blood pressure and lipids without assessing for hereditary small vessel disease.',
        'Conducting predictive testing on asymptomatic relatives without genetic counseling.',
      ],
      firstDepartments: [
        'Neurology Cerebrovascular Disease Clinic',
        'Inherited Neurological Disorder Clinic',
        'Medical Genetics Department/Genetic Counseling Clinic',
        'Rehabilitation Medicine Department',
        'Psychiatry/Psychology Department (for mood or behavioral issues)',
      ],
      diagnosisChecklist: [
        'Compile all brain MRI/CT, stroke records, migraine history, and cognitive/mood change documentation.',
        'Map the spectrum of stroke, migraine, dementia, and psychiatric symptoms in the family.',
        'Ask about NOTCH3 gene testing and interpretation of results.',
        'Discuss whether, when, and how asymptomatic relatives should undergo predictive testing.',
        'Establish a plan for stroke prevention, rehabilitation, cognitive support, and psychological support.',
      ],
      testsToAskAbout: [
        'Brain MRI and cerebrovascular assessment.',
        'NOTCH3 gene testing.',
        'Skin biopsy with electron microscopy/immunohistochemistry when necessary.',
        'Blood pressure, lipids, blood sugar, and other modifiable stroke risk assessments.',
        'Cognitive, mood, and gait function assessments.',
      ],
      questionsForDoctor: [
        'Do my MRI and medical history fit CADASIL?',
        'Is the NOTCH3 variant sufficient to confirm the diagnosis?',
        'Which stroke risk factors need active management?',
        'What genetic counseling process is needed for testing relatives?',
        'How should cognitive, emotional, and work/life support be arranged?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CADASIL can present with migraine with aura, transient ischemic attacks, recurrent lacunar cerebral infarctions, gait instability, mood disorders, apathy, executive dysfunction, and progressive cognitive impairment. Symptoms and age of onset may vary within and between families.</p>',
      diagnosis:
        '<p>Diagnosis relies on clinical presentation, characteristic brain MRI findings, family history, and NOTCH3 gene testing. When genetic results are inconclusive, some cases may require skin biopsy to look for characteristic vascular changes. Doctors will also differentiate from hypertensive small vessel disease, multiple sclerosis, inflammatory vasculitis, and other hereditary white matter disorders.</p>',
      treatment:
        '<p>Management focuses on reducing modifiable stroke risks, managing migraine and mood/cognitive problems, rehabilitation training, and family support. Strategies such as antithrombotic therapy, blood pressure control, and lipid management should be decided by neurology specialists based on individual circumstances and cannot simply be copied from standard stroke protocols.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on stroke recurrence, gait, cognition, mood, work capacity, driving safety, and care arrangements. Patients and families should keep records of imaging, genetic reports, and emergency instructions.</p>',
      fertilityOrFamily:
        '<p>CADASIL is usually inherited in an autosomal dominant pattern. First-degree relatives are at risk, but asymptomatic predictive testing should be performed after adequate genetic counseling, with particular discussion of psychological impact, insurance/employment implications, and personal informed choice.</p>',
      emergencySigns:
        '<p>Sudden facial droop, limb weakness or numbness, speech difficulty, visual abnormalities, severe headache, or altered consciousness should prompt immediate stroke emergency care, with notification of CADASIL or familial small vessel disease risk.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: CADASIL',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
      },
      {
        name: 'MedlinePlus Genetics: CADASIL',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/cadasil/',
      },
    ],
    symptoms:
      '<p>Can present with migraine with aura, recurrent transient ischemic attacks or lacunar cerebral infarctions, brain white matter changes, mood and cognitive decline.</p>',
    diagnosis:
      '<p>Assessment includes brain MRI, family history, NOTCH3 gene testing, and when necessary skin biopsy and stroke risk factor evaluation.</p>',
    treatment:
      '<p>Management focuses on stroke risk control, migraine and mood/cognitive management, rehabilitation, genetic counseling, and family support.</p>',
    prognosis:
      '<p>Disease course varies considerably, influenced by stroke recurrence, cognitive changes, family variants, and management of modifiable risk factors.</p>',
    sourceName: 'GeneReviews: CADASIL',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 343,
      name: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
      url: '/images/diseases/hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  };

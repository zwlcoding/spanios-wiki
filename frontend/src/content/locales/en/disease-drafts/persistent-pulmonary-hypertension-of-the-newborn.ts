import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePersistentPulmonaryHypertensionOfTheNewborn: DiseaseDraft =
  {
    ...entity(2059, 'disease-persistent-pulmonary-hypertension-of-the-newborn'),
    name: 'Persistent pulmonary hypertension of the newborn',
    nameEn: 'Persistent pulmonary hypertension of the newborn',
    alias:
      'PPHN; persistent neonatal pulmonary hypertension; China Second Rare Disease Catalog item 59',
    slug: 'persistent-pulmonary-hypertension-of-the-newborn',
    oneSentence:
      'Persistent pulmonary hypertension of the newborn is a critical newborn condition in which lung blood vessels fail to relax after birth, causing severe low oxygen that needs rapid NICU care.',
    plainName:
      'A newborn emergency where the lung circulation does not switch over after birth',
    prevalence:
      "Included in China's second rare disease catalog; it often occurs with perinatal hypoxia, meconium aspiration, pneumonia or sepsis, abnormal lung development, or congenital diaphragmatic hernia.",
    quickLook: {
      whatItIs:
        'Before birth, little blood flows through the lungs. After birth, lung vessels should relax and accept more flow. In PPHN, resistance stays high, blood bypasses the lungs, and oxygen remains low.',
      whoToSeeFirst:
        'This is a newborn emergency managed by neonatology and NICU teams. Blue color, breathing distress, or low oxygen despite oxygen support needs emergency care.',
      isGenetic:
        'PPHN itself is usually not a single-gene disorder, but it may occur with congenital diaphragmatic hernia, lung maldevelopment, or syndromic conditions that need genetic review.',
      hasTreatment:
        'Treatment may include oxygen and ventilation, correction of acidosis, surfactant, inhaled nitric oxide, circulation support, treatment of infection or lung disease, and ECMO for severe cases.',
      commonDelayReason:
        'It can look like general newborn respiratory distress or pneumonia. Echocardiography is needed to assess pulmonary pressure and shunting and to exclude cyanotic heart disease.',
    },
    patientJourney: {
      whenToSuspect: [
        'A newborn becomes blue, breathes fast, grunts, retracts, or needs high oxygen soon after birth.',
        'Oxygen saturation differs between body sites, or oxygen levels do not improve as expected.',
        'There is meconium aspiration, birth asphyxia, infection, pneumonia, congenital diaphragmatic hernia, lung hypoplasia, cesarean birth, or perinatal risk.',
        'The baby has recurrent hypoxemia, acidosis, unstable blood pressure, or shock.',
      ],
      commonWrongTurns: [
        'Treating only as pneumonia or respiratory distress without timely echocardiography.',
        'Missing preductal-postductal saturation differences and right-to-left shunting clues.',
        'Transport without adequate stabilization of hypoxemia, temperature, glucose, or acidosis.',
      ],
      firstDepartments: [
        'Neonatal intensive care unit',
        'Neonatology',
        'Pediatric cardiology or echocardiography',
        'ECMO referral center for severe cases',
      ],
      diagnosisChecklist: [
        'Collect gestational age, delivery mode, Apgar scores, meconium, resuscitation, infection risk, and medication exposures.',
        'Bring blood gases, oxygen saturation trends, chest X-ray, echocardiography, infection tests, and transport records.',
        'Record preductal and postductal saturations, oxygen need, ventilator settings, and blood pressure support.',
        'Document congenital diaphragmatic hernia, lung abnormalities, or other structural problems.',
      ],
      testsToAskAbout: [
        'Echocardiography to assess pulmonary pressure, right-to-left shunting, and cyanotic congenital heart disease.',
        'Blood gas, lactate, chest X-ray, infection evaluation, glucose, electrolytes, and perfusion monitoring.',
        'Whether inhaled nitric oxide, surfactant, pulmonary vasodilators, or ECMO referral is appropriate.',
        'After stabilization: hearing, neurodevelopment, lung, and cardiac follow-up.',
      ],
      questionsForDoctor: [
        'Is the low oxygen mainly from PPHN, lung disease, or congenital heart disease?',
        'What are the oxygenation index and pulmonary pressure, and is inhaled nitric oxide or ECMO evaluation needed?',
        'Is there infection, meconium aspiration, diaphragmatic hernia, or lung maldevelopment that also needs treatment?',
        'How long will hearing, neurodevelopment, lung, and heart follow-up continue after discharge?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>PPHN usually presents within hours after birth with cyanosis, fast breathing, grunting, retractions, low oxygen saturation, and poor response to oxygen. Some babies have different preductal and postductal oxygen saturations, suggesting blood is bypassing the lungs.</p><p>Severe disease can cause acidosis, low blood pressure, shock, low urine output, and poor organ perfusion. It often coexists with meconium aspiration, pneumonia, sepsis, respiratory distress syndrome, congenital diaphragmatic hernia, or lung hypoplasia.</p>',
      diagnosis:
        '<p>Diagnosis relies on hypoxemia, blood gases, and echocardiography. Echocardiography estimates pulmonary pressure, cardiac function, and ductal or atrial shunt direction, while excluding cyanotic congenital heart disease that needs different management.</p><p>The team also searches for triggers and comorbidities with chest imaging, infection tests and cultures, glucose, electrolytes, lactate, and organ function monitoring.</p>',
      treatment:
        '<p>Treatment aims to lower pulmonary vascular resistance, improve oxygenation, and support circulation. Measures include warming, correcting glucose and acidosis, appropriate sedation, optimized ventilation, treating lung disease or infection, and maintaining blood pressure and cardiac output.</p><p>Inhaled nitric oxide is a common selective pulmonary vasodilator. Depending on cause, surfactant, inotropes, other pulmonary vasodilators, or high-frequency ventilation may be used. Babies with severe oxygenation failure despite treatment should be referred early to an ECMO-capable center.</p>',
      longTermCare:
        '<p>Follow-up depends on cause and severity. Hearing, neurodevelopment, feeding, growth, respiratory symptoms, residual pulmonary hypertension, and underlying conditions such as congenital diaphragmatic hernia or lung maldevelopment need monitoring.</p><p>Babies who required ECMO, had severe hypoxemia, or needed prolonged ventilation need structured developmental assessment, rehabilitation, and multidisciplinary follow-up.</p>',
      fertilityOrFamily:
        '<p>Isolated PPHN usually does not imply inherited family risk. If congenital diaphragmatic hernia, lung maldevelopment, multiple anomalies, or a syndrome is present, genetic counseling may help clarify recurrence risk and prenatal screening.</p>',
      emergencySigns:
        '<p>A newborn with blue lips or skin, breathing difficulty, poor feeding, poor responsiveness, seizures, abnormal temperature, or low oxygen despite support needs emergency care. After discharge, recurrent blue color, labored breathing, markedly reduced feeding, or lethargy also needs urgent evaluation.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'Merck Manual: Persistent Pulmonary Hypertension of the Newborn',
        type: 'review',
        url: 'https://www.merckmanuals.com/professional/pediatrics/respiratory-problems-in-neonates/persistent-pulmonary-hypertension-of-the-newborn',
      },
      {
        name: 'MedlinePlus Medical Encyclopedia: Persistent pulmonary hypertension of the newborn',
        type: 'official',
        url: 'https://medlineplus.gov/ency/article/007329.htm',
      },
    ],
    symptoms:
      '<p>After birth, features can include cyanosis, fast breathing, grunting, retractions, low oxygen, preductal-postductal saturation differences, acidosis, low blood pressure, and shock.</p>',
    diagnosis:
      '<p>Diagnosis uses hypoxemia, blood gases, chest X-ray, and echocardiography to assess pulmonary pressure and shunt direction while excluding cyanotic congenital heart disease.</p>',
    treatment:
      '<p>Treatment includes oxygenation and ventilation support, correction of acidosis and low blood pressure, treatment of lung or infectious causes, inhaled nitric oxide, surfactant, circulation support, and ECMO evaluation for severe cases.</p>',
    prognosis:
      '<p>Outcome depends on hypoxemia severity, underlying disease, and treatment response. Severe survivors need hearing, neurodevelopment, lung, and cardiac follow-up.</p>',
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 413,
      name: 'persistent-pulmonary-hypertension-of-the-newborn-journey.png',
      url: '/images/diseases/persistent-pulmonary-hypertension-of-the-newborn-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

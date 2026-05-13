import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseProgressiveFibrosingInterstitialLungDisease: DiseaseDraft =
  {
    ...entity(2069, 'disease-progressive-fibrosing-interstitial-lung-disease'),
    name: 'Progressive fibrosing interstitial lung disease',
    nameEn: 'Progressive fibrosing interstitial lung disease',
    alias:
      'PF-ILD; PPF; progressive pulmonary fibrosis; China Second Rare Disease Catalog item 69',
    oneSentence:
      'Progressive fibrosing interstitial lung disease describes a progressive fibrosis pattern across several interstitial lung diseases, with worsening breathlessness, dry cough, lung function, or CT findings over time.',
    plainName:
      'A progressive scarring pattern in the lungs that makes breathing harder over time',
    prevalence:
      "Included in China's second rare disease catalog; it is not one single disease but a progressive phenotype across ILDs, so rarity and causes vary by region, ancestry, exposure, and underlying condition.",
    quickLook: {
      whatItIs:
        'PF-ILD or PPF means that an ILD other than idiopathic pulmonary fibrosis has developed a progressive scarring pattern, such as connective tissue disease ILD, hypersensitivity pneumonitis, or unclassifiable ILD.',
      whoToSeeFirst:
        'Progressive exertional breathlessness, dry cough, low oxygen, clubbing, or fibrotic changes on CT that worsen over 6 to 12 months should be assessed in an ILD clinic.',
      isGenetic:
        'Most cases are not typical inherited disorders, but family pulmonary fibrosis, early greying, marrow disease, or liver disease can suggest telomere-related or surfactant-related genetic disease.',
      hasTreatment:
        'Care includes identifying and treating the underlying ILD, avoiding antigen or occupational exposure, selected immune-modulating treatment, antifibrotic assessment, oxygen, pulmonary rehabilitation, and transplant referral when needed.',
      commonDelayReason:
        'Early breathlessness and cough may be labeled aging, deconditioning, asthma, COPD, or recurrent infection. Without high-resolution CT and serial lung function, progression can be missed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Exertional breathlessness and dry cough last for months, walking or stairs become harder, or oxygen drops at rest or activity.',
        'High-resolution CT shows fibrosis, reticulation, traction bronchiectasis, or honeycombing and worsens on follow-up.',
        'FVC or DLCO declines, or at least two of symptoms, CT, and lung function worsen within one year without another explanation.',
        'Connective tissue disease, hypersensitivity pneumonitis, occupational, bird, mold, medicine, or radiation exposure history.',
      ],
      commonWrongTurns: [
        'Treating as bronchitis, asthma, or anxiety without high-resolution CT and diffusion capacity testing.',
        'Looking at only one CT scan instead of preserving old scans for side-by-side comparison.',
        'Using cough medicines or antibiotics alone without assessing cause, exposure, immune treatment, and antifibrotic timing.',
      ],
      firstDepartments: [
        'Pulmonology',
        'Interstitial lung disease or rare lung disease clinic',
        'Rheumatology when connective tissue disease is possible',
        'Rehabilitation and lung transplant center when progressive or hypoxemic',
      ],
      diagnosisChecklist: [
        'Bring all chest CT image files, reports, and dates so doctors can compare progression.',
        'Bring spirometry, DLCO, six-minute walk, oxygen readings, blood gas, echocardiogram, and oxygen-use records.',
        'List occupational exposures, home mold, birds, feather bedding, dust, medicines, radiation, and smoking.',
        'Record autoimmune symptoms such as Raynaud phenomenon, joint pain, rash, dry eyes or mouth, muscle weakness, and reflux or aspiration.',
      ],
      testsToAskAbout: [
        'High-resolution CT pattern review and whether ILD multidisciplinary discussion is needed.',
        'Lung-function trend: FVC, DLCO, six-minute walk, and oxygen decline meeting PPF or PF-ILD criteria.',
        'Autoantibodies, myositis antibodies, hypersensitivity pneumonitis exposure assessment, bronchoscopy, or lung biopsy when needed.',
        'Suitability for immune-modulating therapy, antifibrotic therapy such as nintedanib, oxygen, pulmonary rehabilitation, or transplant evaluation.',
      ],
      questionsForDoctor: [
        'What underlying ILD is most likely, and does my course meet criteria for progressive pulmonary fibrosis?',
        'Which exposures or underlying diseases can be treated, and which goals are slowing decline rather than reversing fibrosis?',
        'How often should lung function, CT, and oxygen be repeated, and what changes mean treatment should escalate?',
        'Do I need home oxygen, pulmonary rehabilitation, vaccines, reflux management, or transplant-center review?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>The core feature of PF-ILD or PPF is worsening fibrosis. Common symptoms include progressive exertional breathlessness, persistent dry cough, fatigue, reduced exercise capacity, low oxygen, and clubbing. Acute exacerbation can cause sudden breathlessness, oxygen decline, and imaging worsening.</p><p>Associated features depend on the underlying cause. Connective tissue disease ILD may include joint pain, Raynaud phenomenon, rash, or myositis. Hypersensitivity pneumonitis can relate to birds, mold, or occupational exposure. Medicines, radiation, and reflux or aspiration may also contribute.</p>',
      diagnosis:
        '<p>Diagnosis first confirms ILD and lung fibrosis, then determines whether disease is progressing. The 2022 ATS/ERS/JRS/ALAT guideline defines PPF as fibrotic ILD other than IPF with at least two of worsening symptoms, physiologic progression, and radiologic progression within the past year, with no alternative explanation.</p><p>Assessment usually includes high-resolution CT, FVC and DLCO, six-minute walk, oxygen assessment, exposure history, autoimmune testing, and when needed bronchoscopy or lung biopsy. Many cases benefit from multidisciplinary review by pulmonology, radiology, pathology, and rheumatology.</p>',
      treatment:
        '<p>Treatment starts with the underlying cause: antigen or occupational exposure avoidance, connective tissue disease treatment, stopping offending medicines, or reflux management. ILDs with inflammatory activity may need corticosteroids or immunosuppressive therapy, balanced against infection and adverse effects.</p><p>For progressive non-IPF fibrotic ILD, international guidance gives a conditional recommendation for nintedanib, while more research is needed for pirfenidone. Supportive care includes smoking cessation, vaccination, oxygen, pulmonary rehabilitation, nutrition, symptom-focused care, and transplant referral when appropriate.</p>',
      longTermCare:
        '<p>Follow-up tracks FVC, DLCO, six-minute walk, oxygen, CT change, exacerbations, pulmonary hypertension, infections, and medicine side effects. Keeping old CT image files is important because progression often depends on direct comparison.</p><p>Home pulse oximetry and activity logs can help. If oxygen falls, exercise capacity declines, or daily activities become limited, oxygen therapy and pulmonary rehabilitation should be discussed early.</p>',
      fertilityOrFamily:
        '<p>Most PF-ILD is not a single-gene inherited disorder. Family pulmonary fibrosis, early greying, bone marrow failure, liver disease, or several affected relatives should prompt discussion of telomere-related or other genetic pulmonary fibrosis assessment.</p>',
      emergencySigns:
        '<p>Emergency care is needed for breathlessness at rest, oxygen persistently below the threshold set by the clinician, coughing blood, chest pain, fever with breathlessness, confusion, bluish lips, or breathing that worsens markedly over days.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'ATS/ERS/JRS/ALAT Clinical Practice Guideline: Progressive Pulmonary Fibrosis in Adults',
        type: 'clinical-guideline',
        url: 'https://www.atsjournals.org/doi/10.1164/rccm.202202-0399ST',
      },
      {
        name: 'American Lung Association: Pulmonary Fibrosis Symptoms',
        type: 'patient-organization',
        url: 'https://www.lung.org/lung-health-diseases/lung-disease-lookup/pulmonary-fibrosis/introduction/symptoms',
      },
    ],
    symptoms:
      '<p>Common features include exertional breathlessness, dry cough, fatigue, reduced exercise capacity, low oxygen, and clubbing; acute exacerbation can cause rapid breathing and oxygen worsening.</p>',
    diagnosis:
      '<p>Diagnosis confirms fibrotic ILD and uses serial symptoms, lung function, and high-resolution CT to determine progressive pulmonary fibrosis while searching for the underlying cause.</p>',
    treatment:
      '<p>Care includes treating underlying disease and exposures, selected immune modulation, antifibrotic assessment for progression, oxygen, pulmonary rehabilitation, vaccination, symptom care, and transplant evaluation.</p>',
    prognosis:
      '<p>Outlook depends on the underlying ILD, fibrosis extent, rate of lung-function decline, hypoxemia, acute exacerbations, and treatment response. Serial monitoring is more informative than one test.</p>',
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    slug: 'progressive-fibrosing-interstitial-lung-disease',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 423,
      name: 'progressive-fibrosing-interstitial-lung-disease-journey.png',
      url: '/images/diseases/progressive-fibrosing-interstitial-lung-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

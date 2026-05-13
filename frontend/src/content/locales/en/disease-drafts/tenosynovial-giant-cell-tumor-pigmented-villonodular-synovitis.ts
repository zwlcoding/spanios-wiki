import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTenosynovialGiantCellTumorPigmentedVillonodularSynovitis: DiseaseDraft =
  {
    ...entity(
      2077,
      'disease-tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    ),
    name: 'Tenosynovial giant cell tumor/Pigmented villonodular synovitis',
    nameEn: 'Tenosynovial giant cell tumor/Pigmented villonodular synovitis',
    alias: 'TGCT; PVNS; China Second Rare Disease Catalog item 77',
    slug: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    oneSentence:
      'Tenosynovial giant cell tumor is a rare locally aggressive tumor of the synovium, tendon sheath, or bursa that is usually benign but can cause recurrent swelling, pain, locking, and joint damage.',
    plainName:
      'A benign but difficult joint-area tumor that can keep limiting movement',
    prevalence:
      "Included in China's second rare disease catalog; it is a rare soft tissue and joint-area tumor, with localized disease more common and diffuse disease more likely to recur or impair function.",
    quickLook: {
      whatItIs:
        'TGCT is not cancer in the usual sense and usually does not spread far away, but it can grow in or around a joint. Knees, hips, ankles, and fingers can be affected; diffuse disease was historically called PVNS.',
      whoToSeeFirst:
        'Persistent single-joint swelling, pain, limited motion, catching or locking, recurrent effusion, or MRI showing abnormal synovium should be assessed by orthopedics, sports medicine, orthopedic oncology, or a joint specialist.',
      isGenetic:
        'Most cases are not inherited. They are often linked to local cell changes involving the CSF1 pathway, so family screening is not usually needed.',
      hasTreatment:
        'Localized disease is often treated with surgery. Diffuse disease requires careful planning around arthroscopic or open surgery, recurrence risk, rehabilitation, and sometimes radiation or CSF1R-targeted systemic therapy when surgery is not expected to help.',
      commonDelayReason:
        'Symptoms can look like sports injury, synovitis, meniscal disease, arthritis, or a ganglion cyst. Without MRI and pathology, diagnosis may be delayed for years.',
    },
    patientJourney: {
      whenToSuspect: [
        'Persistent swelling, lump, pain, or reduced motion around one joint or tendon sheath that recurs despite rest and routine anti-inflammatory care.',
        'Catching, popping, locking, recurrent joint fluid, or warmth without infection or a clear rheumatologic explanation.',
        'MRI showing synovial thickening, hemosiderin, or nodular disease, or pathology reporting TGCT/PVNS.',
      ],
      commonWrongTurns: [
        'Treating for sprain, synovitis, or ordinary arthritis without MRI or referral to a joint or tumor specialist.',
        'Planning surgery without clarifying localized versus diffuse disease and the recurrence and function tradeoffs.',
        'Managing recurrence only with aspiration or pain medicine without reassessing imaging, pathology, and systemic options.',
      ],
      firstDepartments: [
        'Orthopedics or joint surgery',
        'Sports medicine',
        'Orthopedic oncology or sarcoma/soft tissue tumor clinic',
        'Rehabilitation medicine after treatment',
      ],
      diagnosisChecklist: [
        'Record the affected joint, swelling, pain, locking, effusions, motion limits, and prior procedures.',
        'Bring MRI images and reports, X-ray/CT, joint fluid results, operation notes, and pathology slides or reports.',
        'Describe work, sport, and daily function limits and whether disease has recurred.',
      ],
      testsToAskAbout: [
        'Whether MRI defines localized versus diffuse TGCT and maps intra-articular and extra-articular disease.',
        'Whether biopsy or excision pathology is needed to confirm TGCT and rule out gout, infection, inflammatory arthritis, or synovial sarcoma.',
        'Whether recurrent or unresectable disease needs multidisciplinary review for radiation, CSF1R-targeted therapy, or trials.',
      ],
      questionsForDoctor: [
        'Is my disease localized or diffuse, and which part is driving symptoms?',
        'Is the surgical goal complete removal, symptom control, or joint preservation, and what is the recurrence risk?',
        'If surgery is high risk or disease recurs, what medicines or trials are realistic and what safety monitoring is needed?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>TGCT often causes swelling, a lump, pain, stiffness, reduced range of motion, catching, popping, locking, or recurrent fluid around one joint or tendon sheath. Localized hand or foot disease may feel like a small painless lump, while diffuse knee, hip, or ankle disease more often limits joint function.</p><p>The tumor usually does not metastasize, but it can damage cartilage, bone, and surrounding tissues and can interfere with walking, gripping, work, and sport.</p>',
      diagnosis:
        '<p>Diagnosis usually starts with history, examination, and MRI. MRI helps show synovial thickening, nodules, hemosiderin, and disease extent, which guides surgery.</p><p>Pathology confirms the diagnosis. Clinicians may rule out gout, rheumatoid or other inflammatory arthritis, infection, ganglion cyst, lipoma, synovial sarcoma, and other soft tissue tumors.</p>',
      treatment:
        '<p>Localized TGCT is often controlled with surgical excision. Diffuse TGCT is more complex and requires balancing complete removal, joint function, complications, and recurrence risk; arthroscopic, open, or combined approaches may be used.</p><p>Adults with symptomatic TGCT causing severe morbidity or functional limitation and not likely to improve with surgery may be evaluated for CSF1R-targeted therapy such as pexidartinib, which requires careful liver safety monitoring.</p>',
      longTermCare:
        '<p>After surgery or medicine, follow-up tracks MRI findings and joint function. Diffuse, incompletely removed, or recurrent disease needs longer surveillance for pain, range of motion, strength, gait, and joint degeneration.</p><p>Rehabilitation should be coordinated with the surgical team so that protection and loading are matched to healing and function goals.</p>',
      fertilityOrFamily:
        '<p>TGCT is usually not inherited, and family screening is not routine. Patients considering long-term targeted therapy, radiation, or repeated surgery should discuss pregnancy plans, contraception, and medication safety.</p>',
      emergencySigns:
        '<p>Urgent care is needed for sudden inability to bear weight, a hot red joint with fever, severe pain, wound redness or drainage after surgery, marked leg swelling and pain, or chest pain and shortness of breath.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'National Cancer Institute: Tenosynovial giant cell tumor',
        type: 'official',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tenosynovial-giant-cell-tumor',
      },
      {
        name: 'FDA: Pexidartinib for tenosynovial giant cell tumor',
        type: 'official',
        url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-pexidartinib-tenosynovial-giant-cell-tumor',
      },
    ],
    symptoms:
      '<p>Symptoms include swelling, lump, pain, stiffness, reduced motion, catching, locking, and recurrent effusion around one joint or tendon sheath; diffuse disease is more likely to recur and damage function.</p>',
    diagnosis:
      '<p>Diagnosis uses examination and MRI to define extent and type, with biopsy or excision pathology to confirm TGCT and exclude infection, inflammatory arthritis, gout, and malignant soft tissue tumors.</p>',
    treatment:
      '<p>Localized disease is usually treated with excision; diffuse disease is individualized with surgery, rehabilitation, sometimes radiation or CSF1R-targeted therapy, and recurrence surveillance.</p>',
    prognosis:
      '<p>Most cases are not life-threatening, but diffuse or recurrent disease can cause long-term joint disability; careful imaging, surgical planning, and follow-up help protect function.</p>',
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 431,
      name: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
      url: '/images/diseases/tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

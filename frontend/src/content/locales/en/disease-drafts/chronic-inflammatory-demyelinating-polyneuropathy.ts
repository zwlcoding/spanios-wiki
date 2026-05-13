import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseChronicInflammatoryDemyelinatingPolyneuropathy: DiseaseDraft =
  {
    ...entity(
      2013,
      'disease-chronic-inflammatory-demyelinating-polyneuropathy',
    ),
    name: 'Chronic inflammatory demyelinating polyneuropathy',
    nameEn: 'Chronic inflammatory demyelinating polyneuropathy',
    alias:
      'CIDP, chronic inflammatory demyelinating polyradiculoneuropathy, China Second Rare Disease Catalog item 13',
    slug: 'chronic-inflammatory-demyelinating-polyneuropathy',
    oneSentence:
      'Chronic inflammatory demyelinating polyneuropathy is an immune-mediated peripheral nerve disorder that often causes weakness, numbness, imbalance, and reduced reflexes that progress or relapse over more than 8 weeks.',
    plainName:
      'An immune nerve condition that can cause progressive weakness and numbness in the arms and legs',
    prevalence:
      "Included in China's second rare disease catalog; estimates vary, and Cleveland Clinic cites about 0.8 to 8.9 new U.S. cases per 100,000 people each year.",
    quickLook: {
      whatItIs:
        'CIDP mainly affects the myelin coating of peripheral nerves. When immune inflammation damages myelin, nerve signals slow or block, causing weakness, numbness, poor balance, falls, or clumsier hand function.',
      whoToSeeFirst:
        'Progressive limb weakness, numbness, or unsteady walking for more than 8 weeks should be assessed by neurology, preferably a neuromuscular or neuroimmunology specialist.',
      isGenetic:
        'CIDP is usually not inherited. The workup often includes ruling out inherited neuropathies, diabetic neuropathy, vitamin deficiency, infections, blood disorders, POEMS, and other mimics.',
      hasTreatment:
        'CIDP is treatable. Common first-line treatments include IVIG, corticosteroids, and plasma exchange, with rehabilitation and long-term reassessment for many patients.',
      commonDelayReason:
        'Because symptoms may progress slowly, CIDP can be mistaken for spine disease, common neuropathy, diabetic neuropathy, or incomplete recovery from Guillain-Barre syndrome. The timeline and nerve conduction studies are key.',
    },
    patientJourney: {
      whenToSuspect: [
        'Weakness, numbness, tingling, or imbalance in both legs or arms worsens for more than 8 weeks.',
        'Stairs, rising from a chair, lifting arms, writing, buttoning, using utensils, or walking distance becomes harder.',
        'Reflexes are reduced or absent, with muscle wasting, fatigue, nerve pain, or a relapsing-remitting course.',
        'A neuropathy diagnosis has been made but the cause is unclear, or spine disease does not explain the full pattern.',
      ],
      commonWrongTurns: [
        'Only doing spine imaging without nerve conduction studies and EMG.',
        'Attributing all numbness to diabetes or aging while missing proximal weakness and absent reflexes.',
        'Treating symptoms lasting beyond 8 weeks as a single acute Guillain-Barre-like episode.',
        'Stopping treatment without follow-up after improvement, leading to delayed care when relapse occurs.',
      ],
      firstDepartments: [
        'Neurology',
        'Neuroimmunology',
        'Neuromuscular clinic',
        'Rehabilitation medicine',
      ],
      diagnosisChecklist: [
        'Create a timeline of weakness, numbness, progression, relapses, falls, and walking distance.',
        'Bring EMG and nerve conduction results, CSF results, spine MRI, glucose, thyroid, vitamin, immune, infection, and blood disorder screening.',
        'Record prior infections, vaccines, cancer or blood disorder clues, medication history, and family history of neuropathy.',
        'Track response and side effects after IVIG, steroids, plasma exchange, or other treatments.',
      ],
      testsToAskAbout: [
        'Nerve conduction studies and EMG looking for demyelination, conduction block, or slowed conduction velocity.',
        'CSF testing, often used to assess protein level and exclude other inflammatory or infectious causes.',
        'Blood and urine tests to rule out diabetes, vitamin deficiency, thyroid disease, infections, monoclonal proteins, and blood cancers.',
        'Nerve root or plexus MRI/ultrasound, selected antibody testing, and rarely nerve biopsy.',
      ],
      questionsForDoctor: [
        'Do I have typical CIDP or a variant, and which mimics still need to be excluded?',
        'Do my nerve conduction studies support demyelination, and when should they be repeated?',
        'Which treatment fits me best: IVIG, steroids, plasma exchange, or another option?',
        'How will response be measured, and what is the plan for tapering or maintenance?',
        'What rehabilitation, fall prevention, pain, and fatigue strategies should I use?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CIDP commonly causes weakness and abnormal sensation that progress for more than 8 weeks. Typical patients may have both proximal and distal weakness, making stairs, rising from a chair, lifting the arms, gripping objects, or walking difficult. Numbness, tingling, poor balance, nerve pain, muscle wasting, fatigue, and reduced reflexes are also common.</p><p>The course may be progressive or relapsing. Some variants are mainly sensory, mainly motor, or asymmetric, so neuromuscular specialist assessment is important.</p>',
      diagnosis:
        '<p>Diagnosis depends on the time course, neurological examination, and electrodiagnostic evidence. Nerve conduction studies and EMG look for demyelination, such as slowed conduction, conduction block, or prolonged distal latencies. Symptoms progressing over more than 8 weeks help distinguish CIDP from acute neuropathies.</p><p>Elevated CSF protein, nerve root imaging changes, treatment response, and exclusion of mimics can support the diagnosis. Clinicians also assess for diabetes, vitamin deficiency, thyroid disease, infections, inherited neuropathies, monoclonal gammopathy, blood cancers, and POEMS.</p>',
      treatment:
        '<p>First-line CIDP treatments commonly include intravenous or subcutaneous immunoglobulin, corticosteroids, and plasma exchange. The choice depends on speed and severity, comorbidities, treatment risks, access, and patient preferences. Response should be measured with strength, walking, sensory, and sometimes repeat electrodiagnostic outcomes.</p><p>Some patients need maintenance therapy or additional immune-modulating medicines. Physical therapy, strength and balance training, orthotics, pain care, and fall prevention are also important for function.</p>',
      longTermCare:
        '<p>Long-term care focuses on confirming true treatment response, avoiding over- or undertreatment, monitoring side effects, and recognizing relapse. Patients can track walking distance, stair ability, hand function, falls, pain, and fatigue.</p><p>Sudden worsening, loss of treatment response, or new systemic symptoms should prompt reassessment of the diagnosis and coexisting conditions.</p>',
      fertilityOrFamily:
        '<p>CIDP is usually not inherited, and relatives generally do not need genetic screening. However, a family history of high arches, lifelong neuropathy, early weakness, or similar symptoms should be shared so inherited neuropathies can be considered.</p><p>Pregnancy planning or long-term immune therapy should be discussed with neurology and obstetrics to review medication safety and relapse planning.</p>',
      emergencySigns:
        '<p>Seek emergency care for rapid worsening to inability to walk, swallowing difficulty, breathing trouble, marked chest symptoms, altered consciousness, severe infection signs, possible blood clot symptoms, or a severe reaction after plasma exchange or immune therapy.</p>',
    },
    sources: [
      {
        name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'MedlinePlus Medical Encyclopedia: Chronic inflammatory demyelinating polyneuropathy',
        type: 'official',
        url: 'https://medlineplus.gov/ency/article/000777.htm',
      },
      {
        name: 'Johns Hopkins Medicine: Chronic Inflammatory Demyelinating Polyradiculoneuropathy',
        type: 'review',
        url: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/chronic-inflammatory-demyelinating-polyradiculoneuropathy',
      },
      {
        name: 'Cleveland Clinic: CIDP',
        type: 'review',
        url: 'https://my.clevelandclinic.org/health/diseases/cidp-chronic-inflammatory-demyelinating-polyneuropathy',
      },
    ],
    symptoms:
      '<p>Common features are progressive or relapsing limb weakness, numbness, tingling, imbalance, reduced reflexes, nerve pain, and fatigue lasting more than 8 weeks.</p>',
    diagnosis:
      '<p>Diagnosis uses the clinical timeline, neurological exam, nerve conduction and EMG evidence of demyelination, and CSF, imaging, and lab tests to rule out mimics.</p>',
    treatment:
      '<p>Treatment may include IVIG, corticosteroids, plasma exchange, selected immune-modulating medicines, rehabilitation, pain care, and fall prevention.</p>',
    prognosis:
      '<p>Many people respond to immune treatment, but relapse or maintenance treatment may be needed. Early diagnosis, response monitoring, and rehabilitation improve function.</p>',
    sourceName:
      'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 367,
      name: 'chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
      url: '/images/diseases/chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'neuromuscular'],
  };

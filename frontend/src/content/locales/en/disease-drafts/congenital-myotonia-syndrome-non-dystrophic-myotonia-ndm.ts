import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalMyotoniaSyndromeNonDystrophicMyotoniaNdm: DiseaseDraft =
  {
    ...entity(
      24,
      'disease-congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    ),
    name: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    nameEn: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    alias:
      'Myotonia congenita, Thomsen disease, Becker disease, CLCN1-related myotonia',
    slug: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    oneSentence:
      'Congenital myotonia is an inherited skeletal muscle ion channel disorder that often appears in childhood with muscle stiffness, difficulty initiating movement, and a "warm-up" phenomenon where symptoms improve with repeated activity.',
    plainName:
      'A hereditary muscle condition characterized by slow muscle relaxation and pronounced stiffness at the start of activity',
    prevalence:
      'Generally rare worldwide. MedlinePlus estimates about 1 in 100,000 people are affected, with higher rates reported in some northern European regions.',
    quickLook: {
      whatItIs:
        'Muscles need to relax quickly after contracting. Abnormalities in muscle ion channels such as CLCN1 make muscle cells more prone to sustained excitability, resulting in slow muscle relaxation after gripping, standing up, running, or exposure to cold.',
      whoToSeeFirst:
        'For children or adults with long-standing muscle stiffness, difficulty starting to walk or run, symptoms that improve with repeated activity, or EMG findings showing myotonic discharges, the first step is a neurology or neuromuscular disease specialist. Always inform medical staff before surgery or anesthesia.',
      isGenetic:
        'Yes. Thomsen type is mostly autosomal dominant; Becker type is mostly autosomal recessive. The same gene variant may present differently in different individuals.',
      hasTreatment:
        'Most patients manage through trigger avoidance, activity planning, and specialist follow-up. When symptoms significantly affect daily life, a neuromuscular specialist can evaluate medication or rehabilitation strategies. Do not self-medicate.',
      commonDelayReason:
        'Muscle stiffness may be mistaken for lack of exercise, cramping, psychological stress, or ordinary muscle disorders. Without exploring the warm-up phenomenon, family history, and performing EMG or genetic testing, diagnosis is often delayed.',
    },
    patientJourney: {
      whenToSuspect: [
        'Symptoms begin in childhood, with slow relaxation after standing up, starting to walk, running, climbing stairs, or releasing a fist.',
        'Muscles are stiff at the start of activity, then improve with repeated movements—a classic "warm-up" phenomenon.',
        'Myotonia worsens with cold, sudden activity after rest, stress, or certain medications.',
        'Muscles may appear well-developed, but initiating movement is difficult or occasional brief weakness occurs.',
        'Multiple family members have similar muscle stiffness, difficulty starting movement, or known CLCN1-related diagnosis.',
      ],
      commonWrongTurns: [
        'Managed only as cramping, calcium deficiency, or sports injury without neuromuscular evaluation.',
        'Mildly elevated creatine kinase was labeled as inflammatory myopathy, overlooking myotonic discharges and warm-up phenomenon.',
        'Failure to inform doctors of suspected myotonia before surgery or anesthesia.',
        'Negative result from single-gene or single test led to complete exclusion without considering SCN4A or other non-dystrophic myotonias.',
      ],
      firstDepartments: [
        'Neurology (Neuromuscular Disease Specialist)',
        'Pediatric Neurology (for childhood onset)',
        'Physical Medicine and Rehabilitation',
        'Medical Genetics / Genetic Counseling Clinic',
        'Anesthesiology Pre-operative Evaluation Clinic (before surgery)',
      ],
      diagnosisChecklist: [
        'Record the age of onset, triggers, presence of warm-up phenomenon, and worsening with cold.',
        'Gather family history of muscle stiffness, muscle development, difficulty initiating movement, or similar diagnoses.',
        'Bring EMG, creatine kinase, thyroid function, genetic test results, and records of past medication responses.',
        'Confirm whether this is CLCN1-related myotonia congenita or SCN4A-related myotonia or dystrophic myotonia.',
        'Inform medical staff of myotonia history before surgery, anesthesia, or emergency care, and ask doctors to assess medication and anesthesia risks.',
      ],
      testsToAskAbout: [
        'Needle electromyography to look for myotonic discharges.',
        'CLCN1 and non-dystrophic myotonia-related genetic testing.',
        'Creatine kinase and basic metabolic/endocrine workup to rule out other myopathies or triggers.',
        'Neuromuscular specialist evaluation of warm-up phenomenon, fist-opening relaxation, standing-walking function, and other functional tests.',
        'Whether family members need clinical screening or genetic counseling.',
      ],
      questionsForDoctor: [
        'Is my presentation more consistent with Thomsen type, Becker type, or another non-dystrophic myotonia?',
        'How should I interpret the genetic test results? Should other related genes be tested?',
        'Which medications, anesthetics, or environmental factors might worsen my myotonia?',
        'What exercise and rehabilitation plan would suit me? Are there sudden-start or cold scenarios I should avoid?',
        'Does my family need testing? If planning a pregnancy, what information can genetic counseling provide?',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Congenital myotonia typically presents with muscle stiffness, slow relaxation, difficulty initiating movement, slow fist release, worsening with cold or sudden activity after rest, and a "warm-up" phenomenon where stiffness decreases with repeated movement. Some patients have well-developed muscles but difficulty initiating movement or occasional brief weakness. The heart and smooth muscle are usually unaffected, though individual variation can be significant.</p>',
      diagnosis:
        '<p>Diagnosis requires combining typical history, physical examination, EMG, and genetic testing. Pathogenic CLCN1 variants support a diagnosis of myotonia congenita. Physicians also need to differentiate SCN4A-related myotonia, dystrophic myotonia, and metabolic or endocrine-related muscle symptoms. Variants of uncertain significance cannot independently confirm or exclude diagnosis.</p>',
      treatment:
        '<p>Management focuses on trigger identification, activity planning, and pre-operative/emergency risk communication. When symptoms significantly affect walking, work, or daily life, a neuromuscular specialist can evaluate medication and rehabilitation strategies. Treatment response varies between patients; avoid self-medicating or stopping medications based on internet information.</p>',
      longTermCare:
        '<p>Long-term follow-up focuses on stiffness severity, fall risk, mobility, medication effectiveness, and anesthesia/surgical safety. Patients should keep diagnostic documentation, genetic reports, and notes about medications and anesthesia considerations for medical providers. Schools, workplaces, and families can allow adequate warm-up time to reduce fall risk from sudden starts.</p>',
      fertilityOrFamily:
        '<p>Thomsen type is mostly autosomal dominant; Becker type is mostly autosomal recessive. After identifying pathogenic variants, family members can learn about carrier testing, recurrence risks, prenatal diagnosis, or preimplantation genetic testing options through genetic counseling.</p>',
      emergencySigns:
        '<p>Congenital myotonia is generally not an acute critical condition, but seek prompt medical care and report your suspected or confirmed myotonia history if you experience fall-related injuries, swallowing or breathing difficulties, before surgery or anesthesia, noticeable symptom worsening after medications, or if weakness progression differs from your usual pattern.</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Myotonia Congenita',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
      },
      {
        name: 'MedlinePlus Genetics: Myotonia congenita',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/myotonia-congenita',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Myotonia Congenita',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK562335/',
      },
    ],
    symptoms:
      '<p>Common symptoms include muscle stiffness, difficulty initiating movement, slow fist release after gripping, worsening with cold or sudden activity after rest, and a warm-up phenomenon where symptoms improve with repeated movement.</p>',
    diagnosis:
      '<p>Assessment typically includes history, family history, EMG, creatine kinase, and CLCN1/related genetic testing, while ruling out other myotonic disorders.</p>',
    treatment:
      '<p>Management focuses on trigger avoidance, activity planning, anesthesia risk communication, and individualized treatment from a neuromuscular specialist.</p>',
    prognosis:
      '<p>Most patients experience a chronic stable or slowly progressive course. Quality of life depends on stiffness severity, fall risk, trigger management, and treatment response.</p>',
    sourceName: 'GeneReviews: Myotonia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 323,
      name: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
      url: '/images/diseases/congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  };

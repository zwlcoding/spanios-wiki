import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultifocalMotorNeuropathy: DiseaseDraft = {
  ...entity(5020, 'disease-multifocal-motor-neuropathy'),
  name: 'Multifocal Motor Neuropathy',
  nameEn: 'Multifocal Motor Neuropathy',
  alias: 'MMN, multifocal motor neuropathy with conduction block',
  icd10Code: 'G61.8',
  slug: 'multifocal-motor-neuropathy',
  oneSentence:
    'Multifocal motor neuropathy is a rare, treatable immune-mediated peripheral neuropathy characterized by progressive asymmetric weakness in the limbs without significant sensory loss, often with motor conduction block on nerve conduction studies.',
  plainName:
    'A treatable nerve condition causing gradual asymmetric limb weakness',
  prevalence:
    'Estimated prevalence approximately 1-2 per 100,000 population; onset typically between ages 20 and 70, with a slight male predominance.',
  searchIntents: [
    'multifocal motor neuropathy symptoms',
    'MMN vs ALS difference',
    'multifocal motor neuropathy treatment IVIG',
    'MMN diagnosis nerve conduction study',
    'multifocal motor neuropathy prognosis',
  ],
  quickLook: {
    whatItIs:
      'This is a chronic, immune-mediated peripheral neuropathy characterized by progressive, asymmetric weakness affecting the upper and/or lower limbs, without significant sensory symptoms. It is thought to be caused by antibodies against GM1 ganglioside in some patients.',
    whoToSeeFirst:
      'Neurology, especially neuromuscular specialists. Go to emergency if sudden severe weakness, difficulty breathing, or swallowing occurs.',
    isGenetic:
      'Not a genetic disease; it is an immune-mediated condition. The exact cause is unknown, but GM1 ganglioside antibodies are found in approximately 50% of patients.',
    hasTreatment:
      'Intravenous immunoglobulin (IVIG) is the first-line treatment and is highly effective in most patients. Subcutaneous immunoglobulin is an alternative. Some patients respond to rituximab. Treatment is lifelong, and early treatment leads to better outcomes.',
    commonDelayReason:
      'Progressive asymmetric weakness mistaken for stroke, cervical spondylosis, or motor neuron disease (ALS); delayed referral to neuromuscular specialists; absence of sensory symptoms leading to misdiagnosis as a pure motor neuron disease; nerve conduction studies not performed or misinterpreted.',
  },
  patientJourney: {
    whenToSuspect: [
      'Progressive, asymmetric weakness in the hands or feet, often starting in one limb and spreading to others over months or years.',
      'Weakness without significant numbness, tingling, or pain (pure motor symptoms).',
      'Muscle atrophy developing in affected limbs after prolonged weakness.',
      'Cramps or fasciculations in affected muscles.',
      'Symptoms initially attributed to overuse, carpal tunnel syndrome, or cervical/lumbar radiculopathy but progressing despite local treatment.',
    ],
    commonWrongTurns: [
      'Asymmetric hand weakness attributed to carpal tunnel syndrome or ulnar neuropathy without nerve conduction studies of multiple nerves.',
      'Progressive weakness misdiagnosed as ALS (motor neuron disease), causing unnecessary anxiety and delayed appropriate treatment.',
      'Absence of sensory symptoms leading clinicians to overlook peripheral neuropathy and focus solely on central or anterior horn cell causes.',
      'Cervical spine MRI showing spondylosis leading to unnecessary spine surgery when the true diagnosis is MMN.',
      'Delayed IVIG trial because of concern about cost or lack of familiarity with the condition.',
    ],
    firstDepartments: [
      'Neurology (neuromuscular specialist preferred)',
      'Physical Medicine and Rehabilitation',
    ],
    diagnosisChecklist: [
      'Document the exact sequence of weakness onset, progression pattern, and any sensory symptoms.',
      'Bring all prior nerve conduction study, EMG, and imaging reports (cervical/lumbar spine MRI).',
      'Document any response to prior treatments (e.g., steroids, plasmapheresis) — MMN typically does not respond to steroids.',
      'Ask the physician about anti-GM1 antibody testing and the plan to distinguish MMN from ALS and CIDP.',
    ],
    testsToAskAbout: [
      'Nerve conduction studies with detailed motor studies across multiple nerves (looking for motor conduction block, temporal dispersion, slowed conduction).',
      'Electromyography (EMG) to assess denervation and chronic neurogenic changes.',
      'Anti-GM1 ganglioside antibody testing (IgM).',
      'Cervical and lumbar spine MRI (to exclude compressive myelopathy or radiculopathy).',
      'CSF analysis (to exclude CIDP, which typically shows elevated protein).',
      'Pulmonary function tests (to monitor respiratory muscle involvement).',
    ],
    questionsForDoctor: [
      'How can you distinguish MMN from ALS? What are the key differences on examination and testing?',
      'Should I try IVIG first, and how soon can I expect to see improvement?',
      'If IVIG works, how often will I need infusions, and what are the long-term costs and side effects?',
      'Are there clinical trials for new treatments such as subcutaneous immunoglobulin or complement inhibitors?',
      'What physical therapy and assistive devices would help maintain function?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MMN presents with slowly progressive, asymmetric weakness typically beginning in the distal upper limbs (hands and forearms). Weakness is purely motor, meaning patients do not experience significant numbness, tingling, or pain. Common patterns include wrist drop, finger extension weakness, or foot drop. Over time, weakness may spread to other limbs but remains asymmetric. Muscle atrophy develops in chronically affected muscles. Some patients experience muscle cramps or fasciculations. Importantly, sensation is largely preserved, and bulbar (speech/swallowing) and respiratory muscles are rarely affected early in the disease.</p>',
    diagnosis:
      '<p>Diagnosis requires a compatible clinical picture plus objective evidence on nerve conduction studies. The hallmark finding is motor conduction block — a reduction in compound muscle action potential amplitude across a nerve segment, indicating focal demyelination. Temporal dispersion and slowed conduction may also be seen. EMG shows chronic neurogenic changes in affected muscles. Anti-GM1 IgM antibodies are present in approximately 50% of patients and support the diagnosis, but their absence does not exclude MMN.</p><p>Differential diagnosis includes ALS (which shows both upper and lower motor neuron signs, fasciculations, and no conduction block), CIDP (which has sensory involvement and elevated CSF protein), and compressive neuropathies or radiculopathies. A diagnostic trial of IVIG can be both therapeutic and confirmatory.</p>',
    treatment:
      '<p>Intravenous immunoglobulin (IVIG) is the first-line treatment, with approximately 80% of patients showing significant improvement in strength. Dosing is typically 2 g/kg divided over 2-5 days for induction, followed by maintenance infusions every 2-6 weeks. Subcutaneous immunoglobulin is an alternative for maintenance therapy, offering home administration and potentially fewer systemic side effects.</p><p>For patients who do not respond adequately to IVIG, rituximab (anti-CD20 monoclonal antibody) may be considered. Corticosteroids and plasma exchange are generally NOT effective in MMN and may worsen the condition. Physical and occupational therapy help maintain strength and function. Early treatment is important to prevent fixed weakness and atrophy.</p>',
    longTermCare:
      '<p>Long-term management includes regular neuromuscular follow-up to assess strength, adjust IVIG dosing and frequency, and monitor for treatment-related side effects (headache, thrombosis, renal function). Pulmonary function should be monitored, though respiratory involvement is rare. Patients should maintain physical activity within their capabilities and use assistive devices (splints, orthotics, adaptive equipment) as needed.</p><p>Patients should carry documentation of their diagnosis and treatment needs, especially when traveling, as IVIG infusions require scheduling with infusion centers. Connecting with patient support organizations can provide resources and peer support.</p>',
    fertilityOrFamily:
      '<p>MMN is not an inherited genetic disorder and does not affect fertility. However, some immunosuppressive treatments may need to be adjusted during pregnancy. Patients planning pregnancy should discuss medication management with their neurologist and obstetrician. The condition itself does not increase pregnancy risks, but coordination of care is important.</p>',
    emergencySigns:
      '<p>Seek emergency care for: sudden severe weakness, difficulty breathing or swallowing, or rapidly progressive weakness over days (which may suggest a different diagnosis such as Guillain-Barré syndrome). MMN typically progresses slowly over months, so acute changes warrant urgent evaluation. Bring diagnostic reports and inform emergency staff of the MMN diagnosis and current IVIG schedule.</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Multifocal Motor Neuropathy',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459179/',
    },
    {
      name: 'Orphanet: Multifocal motor neuropathy',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/65684',
    },
    {
      name: 'EFNS/PNS Guideline on management of multifocal motor neuropathy',
      type: 'review',
      url: 'https://doi.org/10.1111/j.1468-1331.2010.03045.x',
    },
  ],
  symptoms:
    '<p>Slowly progressive, asymmetric limb weakness without significant sensory loss, often starting in the hands. Muscle atrophy and cramps may develop over time. Bulbar and respiratory involvement is uncommon.</p>',
  diagnosis:
    '<p>Motor conduction block on nerve conduction studies is the hallmark. EMG shows neurogenic changes. Anti-GM1 antibodies support the diagnosis. Differential includes ALS and CIDP.</p>',
  treatment:
    '<p>IVIG is first-line and effective in approximately 80% of patients. Maintenance infusions are required lifelong. Subcutaneous immunoglobulin and rituximab are alternatives. Steroids and plasmapheresis are generally not effective.</p>',
  prognosis:
    '<p>With early IVIG treatment, most patients maintain good function and quality of life. Untreated or late-treated patients may develop fixed weakness and disability.</p>',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK459179/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3520,
    name: 'multifocal-motor-neuropathy-journey.png',
    url: '/images/diseases/multifocal-motor-neuropathy-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'treatable'],
};

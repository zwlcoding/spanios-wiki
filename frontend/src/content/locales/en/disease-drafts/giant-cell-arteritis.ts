import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGiantCellArteritis: DiseaseDraft = {
  ...entity(2035, 'disease-giant-cell-arteritis'),
  name: 'Giant cell arteritis',
  nameEn: 'Giant cell arteritis',
  alias:
    'GCA, temporal arteritis, large-vessel vasculitis, China Second Rare Disease Catalog item 35',
  slug: 'giant-cell-arteritis',
  oneSentence:
    'Giant cell arteritis is a medium- and large-vessel vasculitis mainly affecting people over 50, often causing new headache, scalp tenderness, jaw pain with chewing, and vision symptoms that can become permanent without urgent treatment.',
  plainName:
    'A vasculitis in older adults where new headache and vision symptoms are urgent warning signs',
  prevalence:
    "Included in China's second rare disease catalog; it mainly affects adults over age 50, with frequency varying by ancestry and region.",
  quickLook: {
    whatItIs:
      'GCA is inflammation of artery walls, often the temporal arteries but sometimes the aorta and major branches. It overlaps closely with polymyalgia rheumatica.',
    whoToSeeFirst:
      'Anyone over 50 with new persistent headache, scalp tenderness, jaw claudication, double vision, or vision loss should contact rheumatology, ophthalmology, or emergency care immediately.',
    isGenetic:
      'GCA is not managed as a single-gene inherited condition, and relatives usually do not need genetic testing.',
    hasTreatment:
      'High-dose corticosteroids are used urgently to prevent vision loss. Tocilizumab may help selected patients reduce steroid exposure or manage relapse.',
    commonDelayReason:
      'It can be mistaken for migraine, sinusitis, dental disease, neck problems, routine eye disease, or aging-related fatigue. Jaw claudication and visual symptoms are major red flags.',
  },
  patientJourney: {
    whenToSuspect: [
      'A person over 50 develops a new or very different headache, especially with temple or scalp tenderness.',
      'Jaw pain or fatigue occurs while chewing, or there is double vision, transient blackout, or vision loss.',
      'Fever, fatigue, weight loss, high ESR/CRP, or shoulder/hip morning stiffness suggests polymyalgia rheumatica overlap.',
      'Arm claudication, unequal blood pressure, or aortic/large-vessel imaging abnormalities are present.',
    ],
    commonWrongTurns: [
      'Treating it as migraine or neck pain without checking inflammatory and vasculitis clues.',
      'Waiting for routine clinic review after transient vision symptoms.',
      'Reducing steroids quickly after symptoms improve, causing relapse.',
      'Using long-term steroids without bone, glucose, blood pressure, infection, and eye-side-effect planning.',
    ],
    firstDepartments: [
      'Rheumatology',
      'Ophthalmology',
      'Neurology',
      'Emergency medicine',
    ],
    diagnosisChecklist: [
      'Record headache onset, location, scalp tenderness, jaw claudication, vision changes, and systemic symptoms.',
      'Bring ESR, CRP, CBC, liver/kidney tests, eye exam, and previous imaging.',
      'Track shoulder/hip stiffness, polymyalgia symptoms, arm fatigue, and blood pressure differences.',
      'Bring temporal artery ultrasound, PET-CT, CTA/MRA, or temporal artery biopsy reports if already done.',
    ],
    testsToAskAbout: [
      'ESR, CRP, CBC, and evaluation for infection, malignancy, or other mimics.',
      'Temporal artery ultrasound, temporal artery biopsy, or CTA/MRA/PET-CT for large-vessel disease.',
      'Urgent ophthalmology assessment when visual symptoms occur.',
      'Bone density, glucose, blood pressure, lipids, and infection-risk prevention during long-term steroid therapy.',
    ],
    questionsForDoctor: [
      'How high is my vision risk, and do I need immediate steroids or hospital care?',
      'Do I still need biopsy or imaging, and is testing useful after steroids have started?',
      'How will steroids be tapered, and what symptoms suggest relapse?',
      'Am I a candidate for tocilizumab or another steroid-sparing approach, and how are side effects monitored?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GCA commonly causes new headache, temple or scalp tenderness, jaw pain with chewing, fever, fatigue, poor appetite, and weight loss. Eye involvement may cause double vision, transient vision loss, or sudden permanent vision loss.</p><p>Some patients have polymyalgia rheumatica with shoulder, neck, or hip morning stiffness and pain. Large-vessel involvement may cause arm claudication, unequal blood pressure, aortic dilation, or arterial narrowing.</p>',
    diagnosis:
      '<p>Diagnosis combines age, symptoms, examination, ESR/CRP, eye assessment, temporal artery ultrasound or biopsy, and large-vessel imaging. When vision is threatened, treatment should not wait for every test to be completed.</p><p>Mimics include migraine, tension headache, sinusitis, dental or jaw disease, cervical spine disease, infection, malignancy, other vasculitides, and ischemic eye disease.</p>',
    treatment:
      '<p>When GCA is suspected and visual risk is present, high-dose corticosteroids are started urgently to reduce blindness risk. Doses are then tapered based on symptoms, inflammatory markers, and imaging when relevant.</p><p>Tocilizumab can be used in selected patients to reduce steroid exposure or control relapse. Long-term care must also address osteoporosis, glucose, blood pressure, infection, GI, and eye side effects.</p>',
    longTermCare:
      '<p>Follow-up monitors headache, jaw pain, vision, polymyalgia symptoms, ESR/CRP, medication side effects, and large-vessel complications. Patients should know relapse signs and avoid abruptly stopping steroids.</p>',
    fertilityOrFamily:
      '<p>GCA occurs mainly in older adults and is not managed as a single-gene inherited disease. Family members can still help watch for visual changes, relapse symptoms, and steroid side effects.</p>',
    emergencySigns:
      '<p>Any new vision loss, double vision, transient blackout, suddenly worse jaw claudication, severe new headache, stroke-like symptoms, chest or back pain, or possible aortic emergency requires immediate care.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'American College of Rheumatology: Giant Cell Arteritis',
      type: 'patient-organization',
      url: 'https://rheumatology.org/patients/giant-cell-arteritis',
    },
    {
      name: 'NIAMS: Polymyalgia Rheumatica and Giant Cell Arteritis',
      type: 'official',
      url: 'https://www.niams.nih.gov/health-topics/polymyalgia-rheumatica-giant-cell-arteritis/basics/diagnosis-treatment-and-steps-to-take',
    },
  ],
  symptoms:
    '<p>Common symptoms include new headache, scalp tenderness, jaw pain with chewing, fever, fatigue, weight loss, shoulder/hip stiffness, and urgent visual symptoms such as double vision or transient blackout.</p>',
  diagnosis:
    '<p>Diagnosis combines symptoms, ESR/CRP, eye assessment, temporal artery ultrasound or biopsy, and CTA/MRA/PET-CT when large-vessel disease is suspected; treatment should not wait when vision is threatened.</p>',
  treatment:
    '<p>Urgent corticosteroids are central to preventing vision loss, followed by careful tapering; selected patients may use tocilizumab to reduce steroid exposure and relapse risk.</p>',
  prognosis:
    '<p>Prompt treatment usually relieves symptoms and lowers blindness risk. Delayed therapy, relapse, large-vessel complications, and steroid side effects require ongoing follow-up.</p>',
  sourceName:
    'National Health Commission: Clinical Guidelines for 86 Rare Diseases (2025 edition)',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 389,
    name: 'giant-cell-arteritis-journey.png',
    url: '/images/diseases/giant-cell-arteritis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

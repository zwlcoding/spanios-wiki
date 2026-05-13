import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalScoliosis: DiseaseDraft = {
  ...entity(33, 'disease-congenital-scoliosis'),
  name: 'Congenital Scoliosis',
  nameEn: 'Congenital Scoliosis',
  alias:
    'Congenital Spinal Curvature, Congenital Vertebral Malformation, Congenital scoliosis',
  slug: 'congenital-scoliosis',
  oneSentence:
    'Congenital scoliosis is a structural spinal curve caused by abnormal vertebral formation or segmentation during embryonic development, which may gradually progress as a child grows.',
  plainName:
    'Curvature of the spine due to abnormal bone development before birth',
  prevalence:
    'Generally rare, with wide variation in severity; some children are identified at birth or during checkups, while others are recognized due to trunk asymmetry, screening for associated abnormalities, or imaging studies.',
  quickLook: {
    whatItIs:
      "This is not simply 'poor posture.' Congenital scoliosis typically results from vertebral structural abnormalities such as hemivertebrae, failure of segmentation, or fused vertebrae. The direction and rate of curve progression depend on the type of deformity, its location, and the child's growth stage.",
    whoToSeeFirst:
      'When a child shows shoulder or pelvic asymmetry, a raised area on one side of the back, trunk tilt, or imaging suggests vertebral abnormalities, an initial evaluation at pediatric orthopedics, spine surgery, or pediatric bone specialists is appropriate.',
    isGenetic:
      'Most cases are not a single-gene inherited disorder, but it may be associated with other congenital anomalies or syndromes. If there are multiple system abnormalities, family history, or prenatal clues, genetic counseling should be considered.',
    hasTreatment:
      'There are different management options including observation, bracing, rehabilitation assessment, and surgery. Whether intervention is needed depends on the degree of curvature, rate of progression, impact on chest/lung development, and age.',
    commonDelayReason:
      'Early appearance changes may be subtle and are often mistaken for poor sitting or standing posture, or ordinary uneven shoulders; without standing full-spine imaging and screening for associated abnormalities, the risk may be underestimated.',
  },
  patientJourney: {
    whenToSuspect: [
      'Physical exam or parent observation reveals uneven shoulders, prominent shoulder blade, asymmetrical waistline, or trunk leaning to one side.',
      'During forward bending, one side of the back is visibly raised, or there is asymmetry of the pelvis or chest when standing.',
      'Imaging after birth or during early childhood suggests hemivertebra, fused vertebrae, rib abnormalities, or other vertebral development anomalies.',
      'The child has congenital heart, kidney/urinary, genital, anorectal, or limb abnormalities, along with visible spine abnormality.',
      'The curvature significantly worsens during a growth spurt, or there is back pain, leg weakness, numbness, or bowel/bladder changes.',
    ],
    commonWrongTurns: [
      'Managing it only as poor posture, heavy backpack, or ordinary hunchback without taking a standing full-spine X-ray.',
      'Confusing congenital scoliosis with adolescent idiopathic scoliosis, overlooking the structural vertebral abnormality.',
      'Focusing only on spinal appearance without screening for spinal cord, kidney, heart, and other congenital abnormalities.',
      'Not consistently storing imaging and Cobb angle records, making it difficult to determine true progression.',
      'Discussing intervention options too early or too late, without evaluation by a team familiar with pediatric spinal deformities.',
    ],
    firstDepartments: [
      "Pediatric Orthopedics / Children's Orthopedics",
      'Spine Surgery',
      'Pediatrics (initial screening and referral for associated abnormalities)',
      'Rehabilitation Medicine (functional and postural support)',
      'Medical Genetics / Genetic Counseling Clinic (when there are multiple system abnormalities or family history)',
    ],
    diagnosisChecklist: [
      'Keep standing full-spine front and side X-rays, recording Cobb angle and imaging date each time.',
      'Organize birth history, prenatal ultrasound, developmental history, and prior cardiac/kidney/urinary/neurological exam results.',
      'Ask whether CT 3D reconstruction is needed to clarify hemivertebra, fused vertebrae, or segmentation defects.',
      'Ask whether spinal MRI is needed to check for diastematomyelia, tethered cord, syringomyelia, or other issues.',
      'Confirm whether kidney/urinary ultrasound, cardiac ultrasound, and lung function assessment are needed.',
    ],
    testsToAskAbout: [
      'Standing full-spine front and side X-ray with Cobb angle measurement.',
      'Spinal CT 3D reconstruction (for complex bony structure assessment or preoperative planning).',
      'Spinal MRI (to evaluate spinal cord and neural structures).',
      'Kidney/urinary ultrasound and cardiac ultrasound.',
      'Lung function and breathing assessment when there is significant chest or upper thoracic involvement.',
    ],
    questionsForDoctor: [
      'What type of vertebral development abnormality does this imaging show? Is the curve likely to continue progressing?',
      'Does the child need observation, bracing, rehabilitation support, or referral to a surgical team for further evaluation?',
      'How often should follow-up visits be scheduled? How can radiation exposure from repeated imaging be minimized?',
      'Have the spinal cord, kidneys, heart, and other potentially associated congenital abnormalities been screened yet?',
      'Which exercises are safe, and which activities should be temporarily avoided?',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Congenital scoliosis may present as trunk tilt, uneven shoulders or shoulder blades, asymmetrical waistline, raised area on one side of the back, abnormal chest shape, or worsening appearance as height increases. Children with mild cases may have no pain and only discover the condition during checkups or imaging. More severe cases or those with thoracic involvement may affect chest development and lung function.</p>',
    diagnosis:
      '<p>Diagnosis requires combining physical examination and imaging. Standing full-spine X-ray is used to measure curve angle and track progression; CT can help visualize bony structures such as hemivertebrae, fused vertebrae, and segmentation defects; MRI is used to assess spinal cord and nervous system abnormalities. Based on the clinical situation, doctors will also screen for kidney/urinary system, heart, and other congenital abnormalities.</p>',
    treatment:
      '<p>Management depends on the type of deformity, curve location, rate of progression, age, and impact on chest and lung function. Some children only need regular observation and imaging follow-up; others may need bracing, rehabilitation, and activity guidance; those with rapid progression or functional impact need evaluation by a pediatric spine team to determine timing and surgical options.</p>',
    longTermCare:
      '<p>Long-term care focuses on continuously recording Cobb angle, height growth, appearance changes, neurological symptoms, and chest and breathing function. Families should keep all original imaging, reports, and follow-up records, preferably comparing trends within the same specialty team rather than looking at single angle measurements.</p>',
    fertilityOrFamily:
      '<p>Most cases of congenital scoliosis are not simple single-gene inherited disorders. If there are multiple congenital abnormalities, developmental delays, similar deformities in the family, or plans for future pregnancies, genetic counseling is recommended to discuss whether chromosome or genetic testing, targeted prenatal ultrasound, and recurrence risk assessment are appropriate.</p>',
    emergencySigns:
      '<p>Rapidly worsening back pain, leg weakness or numbness, changes in gait, bowel/bladder dysfunction, significant pain after injury, or breathing difficulty related to chest deformity requires prompt medical attention with clear mention of existing congenital scoliosis or vertebral development abnormality.</p>',
  },
  sources: [
    {
      name: 'National Health Commission: First Catalog of Rare Diseases',
      type: 'policy',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'Orphanet: Congenital scoliosis',
      type: 'official',
      url: 'https://www.orpha.net/en/disease/detail/139',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Infantile and Juvenile Scoliosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519498/',
    },
  ],
  symptoms:
    '<p>Common signs include uneven shoulders or waistline, raised area on the back, trunk tilt, and abnormal chest shape. Some children may have respiratory or nervous system risks.</p>',
  diagnosis:
    '<p>Assessment includes standing full-spine X-ray, CT/MRI when needed, and screening for associated abnormalities such as kidney, heart, spinal cord, and lung function.</p>',
  treatment:
    '<p>Management may include observation and follow-up, bracing or rehabilitation support, activity guidance, and surgical evaluation by a pediatric spine team when there is significant progression or functional risk.</p>',
  prognosis:
    '<p>Prognosis depends on the type of vertebral deformity, curve progression, impact on chest and lung function, and whether there are other associated congenital abnormalities.</p>',
  sourceName: 'Orphanet: Congenital scoliosis',
  sourceUrl: 'https://www.orpha.net/en/disease/detail/139',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 332,
    name: 'congenital-scoliosis-journey.png',
    url: '/images/diseases/congenital-scoliosis-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

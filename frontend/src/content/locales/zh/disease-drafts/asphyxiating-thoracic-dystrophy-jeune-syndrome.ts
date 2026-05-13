import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAsphyxiatingThoracicDystrophyJeuneSyndrome: DiseaseDraft = {
  ...entity(9, 'disease-asphyxiating-thoracic-dystrophy-jeune-syndrome'),
  name: '热纳综合征',
  nameEn: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
  alias: '窒息性胸腔失养症、Jeune 综合征、短肋胸廓发育不良相关疾病',
  slug: 'asphyxiating-thoracic-dystrophy-jeune-syndrome',
  oneSentence:
    '热纳综合征是一种遗传性骨骼纤毛病，常以狭小胸廓、短肋、短肢和婴幼儿呼吸问题为主要线索，并可能累及肾脏、肝脏或视网膜。',
  plainName: '胸廓狭小导致呼吸风险的遗传性骨骼发育病',
  prevalence: '估计约每 100,000-130,000 人 1 例，属于罕见遗传性骨骼发育异常。',
  quickLook: {
    whatItIs:
      '狭小胸廓会限制肺部扩张，重症婴儿可在出生后不久出现呼吸困难。部分孩子随年龄增长呼吸情况会改善，但仍需要关注肾脏、肝脏、胰腺、牙齿和视网膜等多系统问题。',
    whoToSeeFirst:
      '新生儿或婴儿有呼吸困难时先到儿科、新生儿科或急诊；稳定后通常需要儿童呼吸、骨科、肾内科、眼科和遗传咨询共同评估。',
    isGenetic:
      '通常为常染色体隐性遗传，相关基因较多。确诊和家族风险判断需要结合基因检测和遗传咨询。',
    hasTreatment:
      '目前以呼吸支持、感染预防、营养、生长发育和受累器官随访为主；少数严重胸廓限制者可能需要由专科评估手术选择。',
    commonDelayReason:
      '轻症可能只被认为是胸廓小、反复呼吸道感染或生长矮小，未及时把骨骼、呼吸、肾脏和眼底线索放在一起评估。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生后或婴儿期胸廓明显狭小，呼吸急促、费力或反复低氧。',
      '短肢、短肋、身材矮小，或伴多指/多趾等骨骼线索。',
      '反复呼吸道感染、喂养困难或生长发育受影响。',
      '骨骼异常同时出现肾功能、肝功能或视力相关问题。',
      '家族中有类似胸廓狭小、婴儿期呼吸衰竭或短肋骨骼发育异常。',
    ],
    commonWrongTurns: [
      '只按普通肺炎或喘息反复治疗，没有评估胸廓和骨骼发育。',
      '只看骨科，没有同步评估呼吸储备和多系统受累。',
      '孩子度过新生儿期后就停止随访，忽略后续肾脏、肝脏或视网膜风险。',
    ],
    firstDepartments: [
      '儿科或新生儿科',
      '儿童呼吸科',
      '儿童骨科',
      '儿童肾内科',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '整理出生记录、胸片或骨骼影像、呼吸支持记录和血氧情况。',
      '记录身高体重、生长曲线、肢体比例、多指/多趾和家族史。',
      '带上肾功能、肝功能、眼底检查和既往感染住院资料。',
      '向医生确认是否需要短肋胸廓发育不良相关基因检测。',
    ],
    testsToAskAbout: [
      '胸部和骨骼影像评估胸廓、肋骨、四肢和骨盆形态。',
      '血氧、呼吸功能或睡眠呼吸相关评估。',
      '肾功能、尿检、肝功能和腹部超声。',
      '眼科检查，关注视网膜相关问题。',
      '相关基因检测及家系验证。',
    ],
    questionsForDoctor: [
      '目前呼吸风险处于什么阶段，家里需要监测哪些信号？',
      '是否需要长期氧疗、无创通气或其他呼吸支持评估？',
      '肾脏、肝脏、眼底需要多久复查一次？',
      '胸廓手术是否适合，需要满足哪些条件？',
      '下一胎或家族成员的遗传风险如何评估？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>热纳综合征常表现为狭小胸廓、短肋、短肢、身材矮小和婴幼儿呼吸困难，部分患者可有多指/多趾、骨盆或锁骨等骨骼异常。严重胸廓限制可能导致反复低氧或呼吸衰竭。</p><p>存活过婴幼儿期的患者仍需关注肾脏、肝脏、胰腺、牙齿和视网膜等受累情况。</p>',
    diagnosis:
      '<p>诊断通常结合出生和呼吸表现、胸廓及骨骼影像、体格检查、多系统筛查和遗传检测。医生会与其他短肋胸廓发育不良、软骨发育不全样疾病和其他骨骼纤毛病鉴别。</p>',
    treatment:
      '<p>治疗以支持和多学科管理为主，包括呼吸支持、感染预防、营养支持、生长发育监测、肾肝眼科随访和康复。是否需要胸廓相关手术，应由有经验的儿童骨科、呼吸和重症团队共同评估。</p>',
    longTermCare:
      '<p>长期照护重点是呼吸稳定性、反复感染预防、营养、生长发育、肾功能、肝功能和视网膜随访。家庭应和主治团队确认急性呼吸困难、发热感染和低氧时的处理路径。</p>',
    fertilityOrFamily:
      '<p>本病多为常染色体隐性遗传，相关基因较多。确诊后建议进行遗传咨询，讨论父母携带者检测、再次生育风险和产前/胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>婴幼儿出现呼吸急促、胸凹、口唇发紫、喂养困难、精神反应差、血氧下降或发热后呼吸明显加重时，应立即就医。已知有肾脏或肝脏受累者若出现尿量减少、明显水肿或黄疸加重，也应及时复诊。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Asphyxiating thoracic dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/asphyxiating-thoracic-dystrophy/',
    },
    {
      name: 'NCBI MedGen: Asphyxiating thoracic dystrophy',
      type: 'official',
      url: 'https://www.ncbi.nlm.nih.gov/gtr/conditions/C0036069',
    },
  ],
  symptoms:
    '<p>常见线索包括狭小胸廓、短肋、短肢、婴幼儿呼吸困难，以及可能的肾脏、肝脏或视网膜受累。</p>',
  diagnosis:
    '<p>评估通常包括胸部和骨骼影像、呼吸评估、多系统筛查、家族史和相关基因检测。</p>',
  treatment:
    '<p>管理重点是呼吸支持、感染预防、营养和生长发育、多系统随访，以及必要时胸廓手术评估。</p>',
  prognosis:
    '<p>预后与胸廓狭窄程度、呼吸支持需求和多系统受累情况有关。度过早期呼吸风险后仍需要长期随访。</p>',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 305,
    name: 'asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
    url: '/images/diseases/asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

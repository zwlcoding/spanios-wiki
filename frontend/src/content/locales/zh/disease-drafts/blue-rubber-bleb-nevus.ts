import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBlueRubberBlebNevus: DiseaseDraft = {
  ...entity(2010, 'disease-blue-rubber-bleb-nevus'),
  name: '蓝色橡皮疱痣综合征',
  nameEn: 'Blue rubber bleb nevus syndrome',
  alias: 'BRBNS、Bean 综合征、蓝色橡皮样疱痣、第二批罕见病目录第 10 项',
  slug: 'blue-rubber-bleb-nevus',
  oneSentence:
    '蓝色橡皮疱痣综合征是一种罕见静脉畸形综合征，常在皮肤和消化道形成蓝紫色柔软疱样病灶，可导致慢性消化道出血和缺铁性贫血。',
  plainName: '皮肤蓝紫色疱样血管畸形合并肠道出血风险的疾病',
  prevalence:
    '已纳入国家第二批罕见病目录；总体非常罕见，公开资料多以病例和小系列报道为主。',
  quickLook: {
    whatItIs:
      'BRBNS 的“疱”不是普通水疱，而是低流速静脉畸形。皮肤病灶可能柔软、蓝紫色、按压疼痛；消化道病灶看不见，却可能长期少量出血，造成贫血。',
    whoToSeeFirst:
      '皮肤出现多发蓝紫色柔软结节或疱样病灶时可先看皮肤科/血管异常门诊；若有贫血、黑便、便血或腹痛，应联动消化内科和血液科。',
    isGenetic:
      '部分病例与 TEK/TIE2 通路变异有关，很多为散发。是否需要基因检测和家族评估，应由血管异常或遗传团队结合表现判断。',
    hasTreatment:
      '治疗以控制症状和预防出血为主，包括监测、补铁或输血、内镜治疗、硬化/激光/介入治疗或必要时手术。治疗目标不是一次性清除所有病灶，而是降低出血和疼痛风险。',
    commonDelayReason:
      '皮肤病灶可能被当作普通血管瘤或色素痣，贫血被单独补铁处理；如果没有想到消化道也可能有病灶，就会反复贫血却找不到原因。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生时或儿童期出现一个或多个柔软蓝紫色皮肤结节，按压可变形或疼痛。',
      '皮肤病灶逐渐增多，青春期或成长阶段加重。',
      '反复缺铁性贫血、乏力、头晕、面色苍白，或大便隐血阳性。',
      '黑便、便血、腹痛、肠套叠样症状，或内镜提示多发血管畸形。',
      '病灶除皮肤外还累及肌肉、骨、眼、肺、膀胱等部位。',
    ],
    commonWrongTurns: [
      '只按普通血管瘤、胎记或色素痣观察，没有评估消化道出血。',
      '贫血反复补铁，但没有寻找慢性失血来源。',
      '皮肤病灶切除后以为不会再有新病灶，停止随访。',
      '腹痛或黑便被当作普通胃肠炎，没有说明已有血管畸形病史。',
    ],
    firstDepartments: [
      '皮肤科/血管异常门诊',
      '消化内科',
      '血液科',
      '介入放射科',
    ],
    diagnosisChecklist: [
      '拍摄皮肤病灶照片，记录数量、部位、大小、疼痛、出血和增长变化。',
      '带齐血常规、铁蛋白、便隐血、内镜、胶囊内镜、影像和既往病理结果。',
      '记录黑便、便血、腹痛、贫血输血/补铁史和家族中类似病灶。',
      '说明是否有眼、骨骼、肌肉、神经、肺或泌尿系统症状。',
    ],
    testsToAskAbout: [
      '血常规、铁蛋白、转铁蛋白饱和度和便隐血。',
      '胃肠镜、胶囊内镜或小肠影像，用于寻找消化道病灶。',
      '皮肤超声、MRI 或 CT/CT 小肠成像评估深部病灶。',
      '皮肤科皮镜或必要时病理。',
      'TEK/TIE2 相关基因检测是否对诊断或家族评估有帮助。',
    ],
    questionsForDoctor: [
      '我的病灶更像 BRBNS 还是其他血管畸形综合征？',
      '是否已经有消化道出血或缺铁性贫血？需要查小肠吗？',
      '哪些病灶需要处理，哪些可以观察？',
      '补铁、内镜治疗、介入或手术分别适合什么情况？',
      '出现腹痛、黑便或贫血加重时应该去哪一级医院就诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>BRBNS 常见表现是皮肤蓝紫色、柔软、橡皮样的疱状或结节样静脉畸形，大小和数量差异很大，可在出生时存在，也可逐渐增多。部分病灶按压疼痛、影响外观或活动。</p><p>消化道病灶常累及小肠，也可在食管、胃、结肠等部位，可能导致慢性失血、缺铁性贫血、黑便或便血。少数患者还可累及肌肉、骨、眼、脑、肺、膀胱等部位。</p>',
    diagnosis:
      '<p>诊断依据皮肤特征性病灶、贫血或消化道出血线索，以及内镜和影像发现。血常规和铁代谢可提示慢性失血，便隐血有助于筛查消化道出血。</p><p>胃肠镜、胶囊内镜、小肠影像、超声、MRI 或 CT 可帮助寻找病灶范围。医生会与遗传性出血性毛细血管扩张症、静脉畸形综合征、普通血管瘤等鉴别。</p>',
    treatment:
      '<p>治疗以症状和风险为导向。无症状或稳定病灶可监测；缺铁性贫血需要补铁，严重出血可能需要输血。消化道或皮肤病灶可根据位置和风险选择内镜治疗、硬化、激光、介入或手术。</p><p>因为病灶可能多发且持续存在，治疗通常是分阶段降低出血、疼痛和功能影响，而不是追求一次性全部清除。</p>',
    longTermCare:
      '<p>长期随访重点是血红蛋白、铁蛋白、便隐血、病灶数量和大小变化、疼痛、活动受限以及消化道出血风险。儿童和青少年在生长发育期需要特别关注病灶变化。</p><p>患者应保存病灶照片和内镜/影像资料。急诊或外院就诊时主动说明 BRBNS 和消化道出血风险。</p>',
    fertilityOrFamily:
      '<p>多数病例为散发，但部分与 TEK/TIE2 相关变异有关。若家族中多人有类似蓝紫色病灶或血管畸形，可咨询遗传门诊。</p><p>妊娠、手术或抗凝/抗血小板用药前，应让医生评估出血风险和病灶情况。</p>',
    emergencySigns:
      '<p>黑便、鲜血便、呕血、头晕晕厥、心悸气短、腹痛持续加重、突然腹胀呕吐、病灶快速肿痛或疑似血栓，应立即就医。已知消化道病灶者出现贫血症状加重也不要只自行补铁。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Johns Hopkins Medicine: Blue Rubber Bleb Nevus Syndrome',
      type: 'review',
      url: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/blue-rubber-bleb-nevus-syndrome',
    },
    {
      name: 'StatPearls: Blue Rubber Bleb Nevus Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK541085/',
    },
  ],
  symptoms:
    '<p>常见表现为皮肤蓝紫色柔软疱样或结节样静脉畸形，并可因消化道病灶导致隐匿出血、缺铁性贫血、黑便、便血或腹痛。</p>',
  diagnosis:
    '<p>诊断结合皮肤病灶、贫血和便隐血、胃肠镜/胶囊内镜、小肠影像、超声或 MRI，并与其他血管畸形综合征鉴别。</p>',
  treatment:
    '<p>治疗以监测、补铁或输血、内镜治疗、硬化/激光/介入或手术为主，目标是减少出血、疼痛和功能影响。</p>',
  prognosis:
    '<p>多数患者可长期管理，但消化道出血、贫血、血栓或肠套叠等并发症需要及时识别和处理。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'dermatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 364,
    name: 'blue-rubber-bleb-nevus-journey.png',
    url: '/images/diseases/blue-rubber-bleb-nevus-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

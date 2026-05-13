import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalScoliosis: DiseaseDraft = {
  ...entity(33, 'disease-congenital-scoliosis'),
  name: '先天性脊柱侧弯',
  nameEn: 'Congenital Scoliosis',
  alias: '先天性脊柱侧凸、先天性脊椎侧弯、Congenital scoliosis',
  slug: 'congenital-scoliosis',
  oneSentence:
    '先天性脊柱侧弯是胚胎期椎体形成或分节异常造成的结构性脊柱弯曲，儿童生长期间可能逐渐进展。',
  plainName: '脊柱骨头在出生前发育异常导致的侧弯',
  prevalence:
    '总体罕见，严重程度差异很大；部分儿童出生后或体检时被发现，也有人因躯干不对称、合并畸形筛查或影像检查被识别。',
  quickLook: {
    whatItIs:
      '这不是单纯“姿势不好”。先天性脊柱侧弯通常来自半椎体、分节不全、融合椎等椎体结构异常，弯曲方向和进展速度取决于畸形类型、位置和孩子的生长阶段。',
    whoToSeeFirst:
      '儿童出现双肩或骨盆不对称、背部一侧隆起、躯干倾斜，或影像提示椎体异常时，可先到小儿骨科、脊柱外科或儿童骨科评估。',
    isGenetic:
      '多数不是单一基因遗传病，但可与其他先天异常或综合征相关。若合并多系统畸形、家族史或产前线索，应考虑遗传咨询。',
    hasTreatment:
      '有观察、支具、康复评估和手术等不同管理路径，是否需要干预取决于弯曲程度、进展速度、胸廓/肺发育影响和年龄。',
    commonDelayReason:
      '早期外观变化可能很轻，常被当作坐姿、站姿或普通高低肩；如果没有站立位全脊柱影像和合并畸形筛查，容易低估风险。',
  },
  patientJourney: {
    whenToSuspect: [
      '体检或家长发现双肩不等高、肩胛骨突出、腰线不对称或躯干向一侧偏。',
      '前屈时背部一侧明显隆起，或站立时骨盆、胸廓不对称。',
      '出生后或幼儿期影像提示半椎体、融合椎、肋骨异常或其他椎体发育异常。',
      '孩子有先天性心脏、肾泌尿、生殖系统、肛肠或肢体异常，同时出现脊柱外观异常。',
      '侧弯在生长加速期明显加重，或伴背痛、下肢无力、麻木、大小便异常。',
    ],
    commonWrongTurns: [
      '只按姿势不良、书包太重或普通驼背处理，没有做站立位全脊柱片。',
      '把先天性脊柱侧弯和青少年特发性脊柱侧弯混在一起，忽视椎体结构异常。',
      '只关注脊柱外观，没有筛查脊髓、肾脏、心脏和其他先天异常。',
      '没有连续保存影像和 Cobb 角记录，难以判断是否真正进展。',
      '过早或过晚讨论干预选择，没有让熟悉儿童脊柱畸形的团队评估。',
    ],
    firstDepartments: [
      '小儿骨科/儿童骨科',
      '脊柱外科',
      '儿科（初筛和合并异常转诊）',
      '康复医学科（功能和姿势支持）',
      '医学遗传科/遗传咨询门诊（合并多系统异常或家族史时）',
    ],
    diagnosisChecklist: [
      '保存站立位全脊柱正侧位片，并记录每次 Cobb 角和拍摄日期。',
      '整理出生史、产前超声、发育史、既往心脏/肾脏/泌尿/神经系统检查。',
      '询问是否需要 CT 三维重建来明确半椎体、融合椎或分节异常。',
      '询问是否需要脊柱 MRI 来排查脊髓纵裂、脊髓栓系、脊髓空洞等问题。',
      '确认是否需要肾泌尿系统超声、心脏超声和肺功能评估。',
    ],
    testsToAskAbout: [
      '站立位全脊柱正侧位 X 线和 Cobb 角测量。',
      '脊柱 CT 三维重建（用于复杂骨性结构评估或术前计划）。',
      '脊柱 MRI（评估脊髓和神经结构）。',
      '肾脏/泌尿系统超声、心脏超声。',
      '严重胸廓或高位胸段受累时的肺功能和呼吸评估。',
    ],
    questionsForDoctor: [
      '这次影像显示哪一类椎体发育异常？弯曲最可能继续进展吗？',
      '目前需要观察、支具、康复支持，还是需要到手术团队进一步评估？',
      '复查间隔应该怎样安排？如何减少重复影像带来的辐射暴露？',
      '是否已经筛查脊髓、肾脏、心脏和其他可能合并的先天异常？',
      '哪些运动可以做，哪些活动需要暂时避免？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>先天性脊柱侧弯可表现为躯干倾斜、双肩或肩胛不对称、腰线不对称、背部一侧隆起、胸廓形态异常或身高增长过程中外观变化加重。轻症儿童可能没有疼痛，仅在体检或影像中发现。较严重或胸段受累者可能影响胸廓发育和肺功能。</p>',
    diagnosis:
      '<p>诊断需要结合体格检查和影像。站立位全脊柱 X 线用于测量弯曲角度和随访进展；CT 可帮助看清半椎体、融合椎、分节不全等骨性结构；MRI 用于评估脊髓和神经系统异常。医生还会根据情况筛查肾泌尿系统、心脏和其他先天异常。</p>',
    treatment:
      '<p>管理方式取决于畸形类型、弯曲位置、进展速度、年龄、胸廓和肺功能影响。部分儿童只需要定期观察和影像随访；部分儿童可能需要支具、康复和活动建议；进展较快或影响功能者需要由儿童脊柱团队评估手术时机和方案。</p>',
    longTermCare:
      '<p>长期照护重点是连续记录 Cobb 角、身高增长、外观变化、神经症状、胸廓和呼吸功能。家庭应保存所有影像原片、报告和随访记录，尽量在同一专科团队下比较趋势，而不是只看单次角度。</p>',
    fertilityOrFamily:
      '<p>多数先天性脊柱侧弯不是简单的单基因遗传病。若合并多个先天异常、发育迟缓、家族中类似畸形或有再次生育计划，建议通过遗传咨询讨论是否需要染色体或基因检测、产前超声重点观察和复发风险评估。</p>',
    emergencySigns:
      '<p>背痛快速加重、下肢无力或麻木、步态改变、大小便功能异常、外伤后明显疼痛，或胸廓畸形相关呼吸困难，应尽快就医并说明已有先天性脊柱侧弯或椎体发育异常。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委员会：第一批罕见病目录',
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
    '<p>常见线索包括双肩或腰线不对称、背部隆起、躯干倾斜、胸廓形态异常，部分儿童可有呼吸或神经系统风险。</p>',
  diagnosis:
    '<p>评估包括站立位全脊柱 X 线、必要时 CT/MRI，以及肾脏、心脏、脊髓和肺功能等合并异常筛查。</p>',
  treatment:
    '<p>管理可包括观察随访、支具或康复支持、活动建议，以及进展或功能风险明显时的儿童脊柱手术评估。</p>',
  prognosis:
    '<p>预后取决于椎体畸形类型、弯曲进展、胸廓和肺功能影响，以及是否合并其他先天异常。</p>',
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

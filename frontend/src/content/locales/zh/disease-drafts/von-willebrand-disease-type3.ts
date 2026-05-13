import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseVonWillebrandDiseaseType3: DiseaseDraft = {
  ...entity(2084, 'disease-von-willebrand-disease-type3'),
  name: '血管性血友病Ⅲ型',
  nameEn: 'Von Willebrand disease type 3',
  alias: '3型血管性血友病；VWD type 3；第二批罕见病目录第 84 项',
  slug: 'von-willebrand-disease-type3',
  oneSentence:
    '3 型血管性血友病是最严重、最罕见的 VWD 类型，体内几乎没有可用的 VWF，常伴凝血因子 VIII 降低，导致从小反复黏膜、软组织、关节或手术相关出血。',
  plainName: '从小容易反复出血、需要凝血专科管理的遗传性出血病',
  prevalence:
    '已纳入中国第二批罕见病目录；VWD 整体较常见，但 3 型很罕见，通常按常染色体隐性遗传。',
  quickLook: {
    whatItIs:
      'VWF 帮助血小板黏附，也保护凝血因子 VIII。3 型患者 VWF 极低或缺如，因此不仅鼻血、牙龈出血、月经过多明显，也可能出现类似血友病的关节和肌肉出血。',
    whoToSeeFirst:
      '儿童期反复鼻出血、牙龈出血、瘀斑、伤口久不止血，女性月经过多，或拔牙/手术/分娩出血异常，应到血液科凝血专病门诊。',
    isGenetic:
      '3 型多为常染色体隐性遗传，父母可能是携带者。患者和亲属备孕前应做遗传咨询和携带者评估。',
    hasTreatment:
      '治疗以预防和控制出血为目标，常需含 VWF 的凝血因子浓缩物；氨甲环酸可用于部分黏膜出血，去氨加压素通常对 3 型效果有限且需专科判断。',
    commonDelayReason:
      '轻中度出血容易被认为“鼻血多、月经多”或血友病 A；如果只看 FVIII 而不完整检测 VWF 抗原和活性，可能误诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '从小反复鼻出血、牙龈出血、皮肤瘀斑、伤口或拔牙后出血时间长。',
      '月经过多、产后出血，或关节/肌肉深部出血、贫血。',
      '家族中有近亲婚配、兄弟姐妹类似出血或 VWD/血友病诊断史。',
    ],
    commonWrongTurns: [
      '只处理一个器官或一次发作，没有把长期模式、家族史和既往检查串起来。',
      '检查异常被解释为常见病后长期观察，但没有转到对应专科或罕见病多学科门诊。',
      '没有保存影像、病理、基因、用药和随访记录，导致重复检查和判断延迟。',
    ],
    firstDepartments: [
      '血液科凝血专病门诊',
      '儿科血液科',
      '妇科/产科高危门诊',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '带出血史、手术拔牙和分娩出血记录、输血/凝血因子使用记录。',
      '整理 CBC、铁蛋白、APTT、FVIII、VWF:Ag、VWF 活性、多聚体分析和基因检测。',
      '记录月经量、贫血、关节肌肉出血和家族出血史。',
    ],
    testsToAskAbout: [
      '是否符合 3 型 VWD，是否还需要排除血友病 A 或获得性 VWD。',
      '家中和学校/单位是否需要出血急救计划，什么情况下使用 VWF 浓缩物。',
      '手术、拔牙、妊娠分娩和月经管理前如何预防出血。',
    ],
    questionsForDoctor: [
      '我的基础 VWF 和 FVIII 水平是多少？需要常规预防还是按需治疗？',
      '我是否适合氨甲环酸、激素/月经管理或铁剂？哪些药物要避免？',
      '亲属和未来孩子的遗传风险如何评估？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>3 型 VWD 可自幼出现反复鼻出血、牙龈出血、皮肤瘀斑、伤口出血时间延长、拔牙或手术后出血、月经过多和缺铁性贫血。严重者可有肌肉血肿、关节出血、胃肠道出血或分娩相关大出血。</p><p>由于 VWF 极低，FVIII 也可降低，因此表现可能与血友病 A 相似，但男女都可患病。</p>',
    diagnosis:
      '<p>诊断需要完整凝血评估，包括血常规和铁状态、APTT、FVIII、VWF 抗原、VWF 活性、必要时多聚体分析和 VWF 基因检测。3 型通常表现为 VWF 极低或不可测，FVIII 可明显降低。</p><p>医生会与血友病 A、血小板功能病、其他 VWD 类型和获得性 VWD 鉴别。确诊后要建立个人出血应急卡和围手术期方案。</p>',
    treatment:
      '<p>主要治疗是含 VWF 的凝血因子浓缩物，用于急性出血、手术/拔牙/分娩预防，部分反复严重出血者可考虑预防治疗。氨甲环酸可辅助黏膜出血和月经过多。</p><p>去氨加压素通常不适合 3 型或效果不足，需由凝血专科判断。患者应避免不必要的阿司匹林、NSAIDs 等增加出血风险药物。</p>',
    longTermCare:
      '<p>长期随访包括出血频率、关节健康、贫血和铁缺乏、月经管理、凝血因子使用、抑制物或过敏反应风险，以及手术、牙科、运动和旅行计划。</p><p>患者应随身携带诊断信息，并让急诊、牙科、妇产科和麻醉团队知道自己的 3 型 VWD 诊断。</p>',
    fertilityOrFamily:
      '<p>3 型 VWD 多为常染色体隐性遗传。患者、伴侣和亲属可在遗传咨询后进行携带者检测；妊娠和分娩需提前与血液科和产科制定凝血因子和产后出血预案。</p>',
    emergencySigns:
      '<p>头部外伤、持续鼻血不止、呕血黑便、血尿、关节或肌肉迅速肿痛、严重月经过多伴头晕、术后出血、妊娠或产后出血，应立即急诊并提示 3 型 VWD。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'CDC: About von Willebrand disease',
      type: 'official',
      url: 'https://www.cdc.gov/von-willebrand/about/index.html',
    },
  ],
  symptoms:
    '<p>可有自幼反复鼻出血、牙龈出血、瘀斑、伤口或手术出血、月经过多、贫血、肌肉血肿、关节出血和胃肠道出血。</p>',
  diagnosis:
    '<p>诊断结合出血史、家族史、APTT、FVIII、VWF 抗原和活性、多聚体分析及 VWF 基因检测，并与血友病 A 等鉴别。</p>',
  treatment:
    '<p>治疗以含 VWF 的凝血因子浓缩物预防和控制出血为主，氨甲环酸可辅助黏膜出血；围手术期、牙科和分娩需提前计划。</p>',
  prognosis:
    '<p>规范凝血专科管理可减少严重出血和关节损伤；未预防的手术、分娩或外伤出血风险较高。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 438,
    name: 'von-willebrand-disease-type3-journey.png',
    url: '/images/diseases/von-willebrand-disease-type3-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

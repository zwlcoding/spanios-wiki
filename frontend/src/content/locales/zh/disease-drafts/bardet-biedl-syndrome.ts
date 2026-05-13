import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBardetBiedlSyndrome: DiseaseDraft = {
  ...entity(2008, 'disease-bardet-biedl-syndrome'),
  name: 'Bardet-Biedl 综合征',
  nameEn: 'Bardet-Biedl syndrome',
  alias: 'BBS、性幼稚-肥胖-多趾综合征、纤毛病、第二批罕见病目录第 8 项',
  slug: 'bardet-biedl-syndrome',
  oneSentence:
    'Bardet-Biedl 综合征是一种罕见遗传性纤毛病，可影响视网膜、体重、肾脏、手足发育、性腺发育、学习发育和多个器官系统。',
  plainName: '儿童期出现视力下降、体重增加和多系统问题的遗传病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计北美和欧洲多数地区约每 140,000-160,000 名新生儿 1 例，某些人群更高。',
  quickLook: {
    whatItIs:
      'BBS 是纤毛功能异常导致的多系统疾病。孩子可能先表现为多指/趾、早发体重增加或夜间视力差，随后逐渐出现视网膜变性、肾脏问题、学习或发育支持需求。',
    whoToSeeFirst:
      '建议从医学遗传科或罕见病多学科门诊开始，同时尽早安排眼科、肾内科、内分泌/营养和发育评估。',
    isGenetic:
      '多数为常染色体隐性遗传，常见相关基因包括 BBS1、BBS10 等。父母通常是携带者但没有症状，家系验证和生育咨询很重要。',
    hasTreatment:
      '目前重点是早诊断和多系统管理：视力支持、肾功能监测、体重和代谢管理、发育/学习支持、内分泌和生殖健康评估。部分体重相关治疗需由专科判断可及性和适应证。',
    commonDelayReason:
      '早期表现分散：多指/趾在出生时处理了，体重增加被当作生活方式问题，夜盲被发现较晚，肾脏问题早期无症状，因此容易多年后才把这些线索连起来。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生时有多指或多趾，或手足发育异常。',
      '幼儿期明显体重增加，且饮食运动解释不了全部情况。',
      '儿童期夜间看不清、怕暗、视野变窄、走路容易碰撞或眼底提示视网膜变性。',
      '肾脏结构异常、尿检异常、高血压或肾功能变化。',
      '同时有学习困难、发育迟缓、嗅觉减退、性发育异常或家族中类似表现。',
    ],
    commonWrongTurns: [
      '多指/趾手术后没有继续追踪眼、肾和代谢风险。',
      '只把体重问题归因于家庭饮食，忽略遗传综合征。',
      '视力问题只按近视或弱视处理，未做视网膜评估。',
      '等到肾功能异常才做肾脏随访，错过早期监测。',
    ],
    firstDepartments: [
      '医学遗传科',
      '眼科/眼底病专科',
      '肾内科',
      '儿童内分泌/营养门诊',
    ],
    diagnosisChecklist: [
      '整理出生缺陷、多指/趾处理记录、身高体重曲线和发育里程碑。',
      '带齐眼底、视野、ERG/OCT、肾脏超声、尿检、肾功能、血压和代谢检查。',
      '记录夜盲、视野变窄、学习困难、嗅觉、性发育和行为情绪情况。',
      '准备家族史，尤其是近亲婚配、类似视力/肾病/多指趾或早发肥胖。',
    ],
    testsToAskAbout: [
      'BBS 相关基因检测或遗传性视网膜变性/纤毛病基因面板。',
      '眼科检查，包括眼底、OCT、视野和视网膜电图。',
      '肾脏超声、尿常规、尿蛋白、肌酐/eGFR 和血压监测。',
      '血糖、血脂、肝功能、睡眠呼吸和营养代谢评估。',
      '性激素、青春期发育、生育相关评估和发育/学习评估。',
    ],
    questionsForDoctor: [
      '孩子的表现是否符合 BBS？还需要排除 Usher 综合征或其他纤毛病吗？',
      '视力和肾脏目前处于什么阶段？多久复查？',
      '体重管理应该如何做，是否有适合的专科治疗选择？',
      '学校需要哪些视力、学习或行为支持？',
      '父母和兄弟姐妹需要做基因验证或携带者检测吗？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>BBS 的表现差异很大，常见线索包括视网膜变性导致的夜盲、视野缩小和进行性视力下降，儿童期体重明显增加，多指/趾，肾脏结构或功能异常，学习困难或发育迟缓，性腺发育不足或青春期相关问题。</p><p>还可能出现嗅觉减退、牙齿或面部特征、手足短小或并指、肝脏、心脏和消化系统问题。肾脏受累可能是影响长期预后的关键因素之一。</p>',
    diagnosis:
      '<p>诊断通常结合临床特征、眼科和肾脏评估、发育/内分泌表现以及基因检测。BBS 相关基因较多，检测结果需要遗传医生结合表现解释。</p><p>医生会与其他遗传性视网膜变性、Usher 综合征、Alström 综合征、Prader-Willi 综合征和其他纤毛病鉴别。即使基因结果暂时阴性，典型临床表现仍需要继续随访。</p>',
    treatment:
      '<p>目前治疗以多系统管理为主。眼科提供低视力支持和视网膜随访；肾内科监测肾功能、血压和尿检；内分泌/营养团队管理体重、糖脂代谢和青春期发育；康复、特殊教育和心理支持帮助日常生活。</p><p>具体药物、体重相关治疗和手术处理需根据年龄、表现和当地可及性由专科决定。不要把 BBS 简化为“肥胖问题”。</p>',
    longTermCare:
      '<p>长期随访应覆盖视力、肾脏、血压、代谢、睡眠、发育学习、心理和生殖健康。家庭可以建立一份年度检查清单，避免只在单个症状加重时就诊。</p><p>随着视力下降，学校和工作环境需要提前适配，例如大字号材料、电子放大、定向行走训练和无障碍支持。</p>',
    fertilityOrFamily:
      '<p>BBS 多为常染色体隐性遗传。父母通常各携带一个相关变异，每次妊娠都有一定复发风险。确诊后建议做家系验证和遗传咨询。</p><p>有再次生育计划的家庭可讨论携带者检测、产前诊断或胚胎植入前遗传学检测。成年患者也应获得生殖和内分泌方面的咨询。</p>',
    emergencySigns:
      '<p>突然视力明显下降、严重眼痛，尿量减少、浮肿、高血压明显升高，持续呕吐脱水，或低血糖/高血糖相关意识异常，应及时就医。BBS 患者出现新发严重头痛、胸痛或呼吸暂停也需要评估。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Bardet-Biedl syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/bardet-biedl-syndrome',
    },
  ],
  symptoms:
    '<p>常见表现包括儿童期夜盲和进行性视力下降、早发体重增加、多指/趾、肾脏异常、学习或发育困难、性腺发育问题和多系统受累。</p>',
  diagnosis:
    '<p>诊断结合临床表现、眼科和肾脏检查、代谢/内分泌评估、发育评估和 BBS 相关基因检测。</p>',
  treatment:
    '<p>管理重点是视力支持、肾脏和血压监测、体重代谢管理、发育学习支持、内分泌和遗传咨询等多学科照护。</p>',
  prognosis:
    '<p>长期预后取决于肾脏、视力和代谢受累程度；早期多系统随访可减少可预防并发症并改善生活质量。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 362,
    name: 'bardet-biedl-syndrome-journey.png',
    url: '/images/diseases/bardet-biedl-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

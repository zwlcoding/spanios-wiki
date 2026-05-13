import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseChoroideremia: DiseaseDraft = {
  ...entity(2012, 'disease-choroideremia'),
  name: '无脉络膜症',
  nameEn: 'Choroideremia',
  alias:
    'CHM相关视网膜脉络膜变性、进行性脉络膜视网膜萎缩、第二批罕见病目录第 12 项',
  slug: 'choroideremia',
  oneSentence:
    '无脉络膜症是一种 CHM 基因相关的 X 连锁隐性遗传眼病，常从儿童期夜盲开始，随后视野逐渐变窄，晚期可严重影响中心视力。',
  plainName: '先从夜里看不清开始、逐渐缩小视野的遗传性眼底病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计患病率约为每 50,000-100,000 人 1 例，因容易与其他遗传性视网膜病混淆，可能存在漏诊。',
  quickLook: {
    whatItIs:
      'CHM 基因变异会影响视网膜和脉络膜细胞的长期存活。男性患者通常症状更明显，女性携带者多较轻，但也可能在眼底检查中发现改变或随年龄出现视力问题。',
    whoToSeeFirst:
      '夜盲、视野变窄、容易撞到侧方物体或家族中有类似男性患者，应看眼科眼底病/遗传眼病门诊，并尽早做遗传咨询。',
    isGenetic:
      '主要按 X 连锁隐性遗传。男性有一个致病 CHM 变异即可患病；女性携带者通常较轻，但仍可能需要眼科随访和生育前咨询。',
    hasTreatment:
      '目前日常管理以确诊、低视力支持、保护剩余视功能和遗传咨询为主；基因治疗等研究和临床试验需由遗传眼病专科评估可及性和适合性。',
    commonDelayReason:
      '早期常被当作近视、散光、夜间视力差或视网膜色素变性。没有做眼底影像、电生理和 CHM 基因检测时，诊断容易停留在笼统的“遗传性视网膜变性”。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童或青少年时期出现夜盲，暗处行动困难，或从亮处到暗处适应很慢。',
      '视野逐渐变窄，走路容易碰到侧方物体、台阶或门框。',
      '眼底检查提示脉络膜视网膜萎缩，或被诊断为视网膜色素变性但家系呈 X 连锁线索。',
      '家族中多名男性有夜盲、视野缩小或成年后严重视力下降，女性亲属可能症状轻。',
    ],
    commonWrongTurns: [
      '只反复验光配镜，忽略夜盲和视野缩小不是普通近视能解释的。',
      '用“视网膜色素变性”概括诊断，但没有进一步做遗传检测分型。',
      '没有把女性携带者纳入家系评估，导致下一代风险没有被解释清楚。',
      '等到中心视力下降后才开始低视力训练和生活环境调整。',
    ],
    firstDepartments: [
      '眼科眼底病门诊',
      '遗传眼病门诊',
      '低视力康复门诊',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '记录夜盲开始年龄、视野变化、阅读和行走困难、驾驶/学习/工作影响。',
      '带齐眼底照相、OCT、眼底自发荧光、视野、ERG 和既往诊断资料。',
      '整理家族中男性视力下降、夜盲、失明年龄和女性携带者线索。',
      '如已做基因检测，带原始报告和变异解释。',
    ],
    testsToAskAbout: [
      '眼底照相、OCT、眼底自发荧光和视野检查，用于记录病变范围。',
      '全视野 ERG 或多焦 ERG，用于评估视网膜功能。',
      'CHM 基因检测或遗传性视网膜病 panel。',
      '女性亲属携带者检测、遗传咨询和必要的低视力评估。',
    ],
    questionsForDoctor: [
      '我的表现更像无脉络膜症还是其他遗传性视网膜变性？需要哪些证据区分？',
      '目前中心视力、周边视野和视网膜结构保存情况怎样？',
      '是否需要做 CHM 基因检测？检测结果会如何影响家属筛查和生育咨询？',
      '有哪些低视力工具、出行训练和学习/工作适配可以尽早安排？',
      '是否有适合我的临床研究或基因治疗评估机会？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>无脉络膜症通常从夜盲开始，许多患者在儿童期或青少年期暗处看不清。随后周边视野逐渐缩小，患者可能在行走、运动、上下楼或夜间出行时更容易碰撞。中心视力常相对保留较久，但晚期也会下降。</p><p>男性患者通常表现更明显。女性携带者常症状轻或没有明显不适，但眼底可能有斑驳样改变，少数也会出现视力或视野问题。</p>',
    diagnosis:
      '<p>诊断依靠眼科检查和遗传检测共同确认。眼底照相、OCT、眼底自发荧光、视野和 ERG 可显示视网膜和脉络膜逐渐萎缩的范围与功能影响。</p><p>CHM 基因致病变异可确认分子诊断，并帮助与视网膜色素变性、其他脉络膜视网膜萎缩和综合征性遗传眼病区分。家系分析对解释女性携带者和男性亲属风险很重要。</p>',
    treatment:
      '<p>目前常规管理重点是保护剩余视功能、低视力康复、生活环境和学习工作适配、避免不必要的眼部风险，并处理合并眼病。患者应在遗传眼病专科定期随访，记录结构和功能变化。</p><p>针对 CHM 的基因治疗和其他研究正在发展，但是否可及、是否适合以及风险收益需要由专科结合基因结果、视网膜保存情况和研究条件评估。</p>',
    longTermCare:
      '<p>长期管理包括定期眼底影像、视野、OCT 或 ERG 复查，及时安排低视力工具、定向行走训练、照明优化和电子辅助设备。安全出行、教育和职业适配应尽早讨论。</p><p>患者和家属应保存基因检测报告，便于跨院随访、亲属检测和未来治疗或研究筛选。</p>',
    fertilityOrFamily:
      '<p>无脉络膜症多为 X 连锁隐性遗传。男性患者不会把 X 连锁变异传给儿子，但会传给所有女儿成为携带者；女性携带者每次妊娠都有可能把变异传给孩子。</p><p>有生育计划的家庭应做遗传咨询，讨论伴侣和亲属检测、产前或胚胎植入前遗传学检测的适用性。</p>',
    emergencySigns:
      '<p>无脉络膜症本身通常不是突发急症，但若出现突然视力明显下降、眼痛、眼外伤、闪光感伴大量飞蚊、视野幕布样遮挡，应立即眼科急诊，排除其他可紧急处理的眼病。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Choroideremia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/choroideremia/',
    },
  ],
  symptoms:
    '<p>常见表现是儿童或青少年期夜盲、暗适应差、周边视野逐渐缩小，晚期中心视力也可能受影响。</p>',
  diagnosis:
    '<p>诊断依靠眼底影像、OCT、视野、ERG 等眼科评估，并通过 CHM 基因检测确认和指导家系咨询。</p>',
  treatment:
    '<p>管理以遗传眼病随访、低视力康复、生活适配和遗传咨询为主；基因治疗或研究机会需由专科评估。</p>',
  prognosis:
    '<p>病情通常缓慢进展，许多患者晚期会严重视力受损；早期确诊有助于低视力支持、家庭风险解释和未来治疗机会筛选。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 366,
    name: 'choroideremia-journey.png',
    url: '/images/diseases/choroideremia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

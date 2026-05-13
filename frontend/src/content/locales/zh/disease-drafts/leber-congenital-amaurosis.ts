import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLeberCongenitalAmaurosis: DiseaseDraft = {
  ...entity(2043, 'disease-leber-congenital-amaurosis'),
  name: 'Leber先天性黑矇',
  nameEn: 'Leber congenital amaurosis',
  alias:
    'LCA、Leber 先天性黑矇、早发严重视网膜营养不良、第二批罕见病目录第 43 项',
  slug: 'leber-congenital-amaurosis',
  oneSentence:
    'Leber 先天性黑矇是一组婴幼儿期起病的遗传性视网膜疾病，孩子很早出现严重视力低下、眼球震颤、畏光或夜盲，需要遗传眼病专科评估具体基因和低视力支持。',
  plainName: '婴幼儿很早出现严重视力问题的遗传性视网膜病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述 LCA 约占所有视网膜变性的一小部分，整体罕见。',
  quickLook: {
    whatItIs:
      'LCA 不是单一基因病，而是一组由多种基因导致的早发严重视网膜功能障碍。不同基因会影响进展速度、伴随问题和治疗机会。',
    whoToSeeFirst:
      '婴儿不追光、眼球震颤、畏光、喜欢揉眼或按眼、夜间看不清、视力发育明显落后，应尽快到小儿眼科、眼底病或遗传眼病门诊。',
    isGenetic:
      '多数为常染色体隐性遗传，也有其他遗传方式。确诊后建议遗传咨询，用于家系检测、再生育风险和基因治疗适用性评估。',
    hasTreatment:
      '多数类型目前以低视力康复、教育支持和并发症管理为主。若为双等位 RPE65 变异且视网膜细胞仍有功能，部分地区可评估基因治疗。',
    commonDelayReason:
      '婴儿不会表达视力差，早期可能被当作发育慢、斜视、白化病或单纯眼球震颤。眼电图和基因检测常是关键。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生后数月内不追光、不注视人脸，或很早出现眼球震颤。',
      '孩子畏光、夜间更看不清、反复揉眼或按压眼睛。',
      '眼底早期看起来不典型，但视力明显差或眼电图严重异常。',
      '家族中有儿童期视力严重下降、近亲婚配或已知遗传性视网膜病。',
    ],
    commonWrongTurns: [
      '只按普通弱视训练，未评估视网膜功能和遗传眼病。',
      '眼底早期不典型就长期观察，未做 ERG 和基因检测。',
      '没有把低视力康复、早期教育、出行安全和家庭支持纳入计划。',
      '听到基因治疗就误以为所有 LCA 都适用，未先明确基因和视网膜状态。',
    ],
    firstDepartments: [
      '小儿眼科',
      '眼底病/遗传眼病门诊',
      '医学遗传科',
      '低视力康复门诊',
    ],
    diagnosisChecklist: [
      '记录孩子追光、注视、夜间视力、畏光、揉眼、发育和学习情况。',
      '带眼底照相、OCT、ERG、视觉诱发电位和验光结果。',
      '整理家族视力病史、近亲婚配情况和兄弟姐妹检查结果。',
      '带既往基因检测报告；如没有，准备讨论遗传性视网膜病基因 panel 或外显子检测。',
    ],
    testsToAskAbout: [
      '全视野 ERG、OCT、眼底照相/自发荧光和视功能评估。',
      '遗传性视网膜病基因检测及家系验证。',
      '是否需要筛查综合征型 LCA 相关的肾脏、神经、听力或发育问题。',
      '是否符合 RPE65 相关基因治疗、临床试验或低视力康复资源条件。',
    ],
    questionsForDoctor: [
      '孩子的具体致病基因是什么？对应的进展和伴随风险怎样？',
      '当前视网膜还有多少可用功能？是否需要定期 OCT/ERG 追踪？',
      '我们是否适合基因治疗或临床试验？如果不适合，低视力支持怎么开始？',
      '未来再生育的风险是多少？亲属是否需要携带者检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>LCA 常在出生后数月到婴幼儿期表现为严重视力低下、眼球震颤、畏光、夜盲、追光差、喜欢揉眼或按压眼睛。部分孩子伴屈光不正、圆锥角膜、白内障或其他眼部问题。</p><p>有些类型只累及眼睛，有些属于综合征型，可合并肾脏、神经、听力、发育或其他系统问题，需根据基因和临床线索筛查。</p>',
    diagnosis:
      '<p>诊断需要眼科检查、视功能评估、OCT、眼底照相/自发荧光、全视野 ERG 和基因检测综合判断。ERG 在早期常显示视网膜功能严重受损。</p><p>需要与全色盲、先天性静止性夜盲、眼型白化病、视神经发育不良、早产儿视网膜病变后遗症和其他遗传性视网膜变性鉴别。</p>',
    treatment:
      '<p>大多数 LCA 目前以低视力康复、早期教育支持、屈光矫正、畏光管理、并发症处理和家庭支持为核心。应尽早接入视觉康复和无障碍教育资源。</p><p>对于确认双等位 RPE65 变异且仍有可存活视网膜细胞的患者，部分地区可评估 voretigene neparvovec 等基因治疗。其他基因相关治疗和临床试验正在发展中。</p>',
    longTermCare:
      '<p>随访包括视力、眼底/OCT、眼压、角膜、屈光、学习和出行安全。家长应保存基因报告，因为未来治疗机会常按基因类型筛选。</p>',
    fertilityOrFamily:
      '<p>LCA 多为常染色体隐性遗传。明确基因后，可为父母、兄弟姐妹和未来生育提供携带者检测、产前诊断或胚胎植入前遗传学检测咨询。</p>',
    emergencySigns:
      '<p>眼痛、明显红眼、角膜损伤、突然视力变化、头痛呕吐伴眼压问题，或合并肾脏/神经系统急症表现，应及时就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Leber congenital amaurosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/leber-congenital-amaurosis/',
    },
    {
      name: 'FDA: Luxturna',
      type: 'official',
      url: 'https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/luxturna',
    },
  ],
  symptoms:
    '<p>婴幼儿期出现严重视力低下、眼球震颤、畏光、夜盲、追光差、揉眼或按眼，可合并屈光不正、圆锥角膜或综合征型全身问题。</p>',
  diagnosis:
    '<p>诊断综合小儿眼科检查、OCT、眼底影像、全视野 ERG 和遗传性视网膜病基因检测，并根据基因筛查综合征型风险。</p>',
  treatment:
    '<p>管理以低视力康复、早期教育、屈光矫正和并发症处理为主；RPE65 双等位变异且仍有可存活视网膜细胞者可评估基因治疗可及性。</p>',
  prognosis:
    '<p>多数患者视力受损严重且长期存在，但早期确诊、低视力支持和基因分型可改善教育与生活规划，并帮助等待适合的治疗机会。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 397,
    name: 'leber-congenital-amaurosis-journey.png',
    url: '/images/diseases/leber-congenital-amaurosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

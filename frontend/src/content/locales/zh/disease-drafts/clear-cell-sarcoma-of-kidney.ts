import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseClearCellSarcomaOfKidney: DiseaseDraft = {
  ...entity(2014, 'disease-clear-cell-sarcoma-of-kidney'),
  name: '肾透明细胞肉瘤',
  nameEn: 'Clear cell sarcoma of kidney',
  alias: '第二批罕见病目录第 14 项；Clear cell sarcoma of kidney',
  slug: 'clear-cell-sarcoma-of-kidney',
  oneSentence:
    '肾透明细胞肉瘤（clear cell sarcoma of the kidney, CCSK）为间叶性肿瘤，多发生于1～3 岁儿童，较少发生于 6 个月以内婴儿及成人，其发病率仅次于 Wilms 瘤。',
  plainName: '需要专科确认和长期管理的罕见病：肾透明细胞肉瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；具体患病率因地区、人群和诊断标准不同而不同。',
  quickLook: {
    whatItIs:
      '肾透明细胞肉瘤（clear cell sarcoma of the kidney, CCSK）为间叶性肿瘤，多发生于1～3 岁儿童，较少发生于 6 个月以内婴儿及成人，其发病率仅次于 Wilms 瘤。',
    whoToSeeFirst:
      '如果出现发现罕见肿瘤、持续肿块、异常影像或病理提示特殊类型肿瘤，可以先到肿瘤科或罕见病多学科门诊评估；急性严重症状应先去急诊。',
    isGenetic:
      '通常不是典型的家族遗传病，但具体病因和是否需要家属评估，应由专科医生结合诊断判断。',
    hasTreatment:
      '治疗以明确诊断、评估受累系统、处理症状和长期随访为主，是否有特异治疗需咨询专科医生。',
    commonDelayReason:
      '罕见病常因早期症状分散、跨多个科室或检查结果不典型而延迟确诊。把既往检查、家族史和症状时间线整理好，有助于医生更快判断。',
  },
  patientJourney: {
    whenToSuspect: [
      '出现发现罕见肿瘤、持续肿块、异常影像或病理提示特殊类型肿瘤，且按常见病处理后仍反复或进展。',
      '多个科室检查都提示异常，但没有一个常见诊断能解释全部表现。',
      '家族中有类似表现、早发重症、反复住院或不明原因死亡史。',
    ],
    commonWrongTurns: [
      '只处理单个症状，没有把不同系统的表现放在一起分析。',
      '检查结果轻度异常时反复观察，但没有到相应专科或罕见病门诊进一步评估。',
      '没有保存既往影像、化验、病理或基因检测资料，导致重复检查和判断延迟。',
    ],
    firstDepartments: ['肿瘤科', '血液科', '相关外科', '病理科/分子诊断门诊'],
    diagnosisChecklist: [
      '按时间顺序整理症状、发作诱因、用药反应和家族史。',
      '带齐既往化验、影像、病理、手术记录、出院小结和基因检测结果。',
      '请医生确认是否需要专科检查、遗传检测、病理复核或多学科会诊。',
    ],
    testsToAskAbout: [
      '基础血液和生化检查，以及与主要受累系统相关的专科检查。',
      '医生可能会根据指南中的辅助检查建议选择影像、功能、病理或分子检测。',
      '如果怀疑遗传或家族相关疾病，可咨询是否需要基因检测和遗传咨询。',
    ],
    questionsForDoctor: [
      '目前最可能的诊断是什么？还需要排除哪些相似疾病？',
      '我的病情主要影响哪些器官或系统？哪些情况需要急诊？',
      '治疗目标是什么：缓解症状、预防并发症、延缓进展，还是争取根治？',
      '需要多久复查一次？复查哪些指标？家属是否需要筛查？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>主要临床表现包括：CCSK 多见于单侧，尚未见明确双侧发病报道。</p><p>不同患者不一定会出现所有表现，症状轻重也可能随年龄、病程和合并问题而变化。</p>',
    diagnosis:
      '<p>诊断通常需要把病史、体格检查、专科检查和必要的实验室/影像/病理或遗传检测放在一起判断。因 CCSK 与 Wilms 瘤临床表现极为相似，术前影像学表现也较难与肾母细胞瘤区别，故术前诊断十分困难，主要靠病理诊断。</p><p>还需要与表现相近的疾病鉴别：常见的需要与 CCSK 鉴别诊断的疾病包括：Wilms 瘤是儿童最常见肾脏恶性肿瘤，其预后好于 CCSK。</p>',
    treatment:
      '<p>治疗应由相关专科根据疾病阶段、严重程度、受累器官和药物可及性制定。指南建议结合症状、体征、实验室检查和专科评估综合判断，具体方案应由相应专科医生制定。</p>',
    longTermCare:
      '<p>长期管理的重点是定期复查、识别并发症、记录治疗反应，并在需要时进行多学科协作。如果症状变化、检查指标恶化或准备手术/妊娠/侵入性操作，应提前和主管医生沟通。</p>',
    fertilityOrFamily:
      '<p>通常不是典型的家族遗传病，但具体病因和是否需要家属评估，应由专科医生结合诊断判断。</p>',
    emergencySigns:
      '<p>如果出现呼吸困难、意识改变、持续高热或严重疼痛、快速加重的出血/肿胀、抽搐、胸痛、明显脱水或其他危及生命的表现，应立即急诊。就诊时主动说明已怀疑或确诊的罕见病名称。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
  ],
  symptoms: '<p>CCSK 多见于单侧，尚未见明确双侧发病报道。</p>',
  diagnosis:
    '<p>因 CCSK 与 Wilms 瘤临床表现极为相似，术前影像学表现也较难与肾母细胞瘤区别，故术前诊断十分困难，主要靠病理诊断。</p>',
  treatment:
    '<p>指南建议结合症状、体征、实验室检查和专科评估综合判断，具体方案应由相应专科医生制定。</p>',
  prognosis:
    '<p>预后差异较大，取决于疾病类型、发现时间、受累器官、并发症和治疗可及性。尽早明确诊断并规范随访，有助于降低风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'draft',
  tagSlugs: ['second-rare-disease-catalog'],
};

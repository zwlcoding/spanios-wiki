import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseDermatofibrosarcomaProtuberans: DiseaseDraft = {
  ...entity(2022, 'disease-dermatofibrosarcoma-protuberans'),
  name: '隆突性皮肤纤维肉瘤',
  nameEn: 'Dermatofibrosarcoma protuberans',
  alias: '第二批罕见病目录第 22 项；Dermatofibrosarcoma protuberans',
  slug: 'dermatofibrosarcoma-protuberans',
  oneSentence:
    '隆突性皮肤纤维肉瘤（dermatofibrosarcoma protuberans，DFSP）是一种罕见的局部侵袭性成纤维细胞肉瘤，起源于真皮软组织，并累及皮下组织、筋膜、肌肉甚至骨骼，一般无包膜。',
  plainName: '需要专科确认和长期管理的罕见病：隆突性皮肤纤维肉瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；具体患病率因地区、人群和诊断标准不同而不同。',
  quickLook: {
    whatItIs:
      '隆突性皮肤纤维肉瘤（dermatofibrosarcoma protuberans，DFSP）是一种罕见的局部侵袭性成纤维细胞肉瘤，起源于真皮软组织，并累及皮下组织、筋膜、肌肉甚至骨骼，一般无包膜。',
    whoToSeeFirst:
      '如果出现发现罕见肿瘤、持续肿块、异常影像或病理提示特殊类型肿瘤，可以先到肿瘤科或罕见病多学科门诊评估；急性严重症状应先去急诊。',
    isGenetic:
      '通常不是典型的家族遗传病，但具体病因和是否需要家属评估，应由专科医生结合诊断判断。',
    hasTreatment:
      '有些患者可以通过药物、手术、支持治疗、康复或长期随访获益；治疗目标和可选方案需要由专科医生按病情决定。',
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
      '<p>主要临床表现包括：DFSP 最常见于躯干和四肢近端（肩部和骨盆区域），50%～60%的 DFSP 发生于躯干，20%～30%发生于四肢近端，10%～15%发生于头颈部，外阴、乳腺则少见。</p><p>不同患者不一定会出现所有表现，症状轻重也可能随年龄、病程和合并问题而变化。</p>',
    diagnosis:
      '<p>诊断通常需要把病史、体格检查、专科检查和必要的实验室/影像/病理或遗传检测放在一起判断。经典型 DFSP 早期进展缓慢，临床症状不明显（孤立的斑块，质地坚硬，周围有红色、棕色或正常皮肤）、皮肤损害特异性低，易被患者忽视，且易与皮肤纤维组织细胞瘤等相混淆，造成漏诊、误诊。</p><p>还需要与表现相近的疾病鉴别：由于 DFSP 的形态和免疫特征与多种其他梭形细胞肿瘤重叠，因此其鉴别诊断范围广泛。</p>',
    treatment:
      '<p>治疗应由相关专科根据疾病阶段、严重程度、受累器官和药物可及性制定。手术切除是目前治疗 DFSP 的最有效方式。</p>',
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
  symptoms:
    '<p>DFSP 最常见于躯干和四肢近端（肩部和骨盆区域），50%～60%的 DFSP 发生于躯干，20%～30%发生于四肢近端，10%～15%发生于头颈部，外阴、乳腺则少见。</p>',
  diagnosis:
    '<p>经典型 DFSP 早期进展缓慢，临床症状不明显（孤立的斑块，质地坚硬，周围有红色、棕色或正常皮肤）、皮肤损害特异性低，易被患者忽视，且易与皮肤纤维组织细胞瘤等相混淆，造成漏诊、误诊。</p>',
  treatment: '<p>手术切除是目前治疗 DFSP 的最有效方式。</p>',
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

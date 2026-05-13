import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGiantCellArteritis: DiseaseDraft = {
  ...entity(2035, 'disease-giant-cell-arteritis'),
  name: '巨细胞动脉炎',
  nameEn: 'Giant cell arteritis',
  alias: '第二批罕见病目录第 35 项；Giant cell arteritis',
  slug: 'giant-cell-arteritis',
  oneSentence:
    '巨细胞动脉炎（giant cell arteritis，GCA）是一种主要累及大血管和中等血管的系统性血管炎，由于颞动脉受累较为常见，也曾被称为颞动脉炎。',
  plainName: '需要专科确认和长期管理的罕见病：巨细胞动脉炎',
  prevalence:
    '已纳入国家第二批罕见病目录；具体患病率因地区、人群和诊断标准不同而不同。',
  quickLook: {
    whatItIs:
      '巨细胞动脉炎（giant cell arteritis，GCA）是一种主要累及大血管和中等血管的系统性血管炎，由于颞动脉受累较为常见，也曾被称为颞动脉炎。',
    whoToSeeFirst:
      '如果出现反复炎症、发热、皮疹、关节痛、血管炎或免疫指标异常，可以先到风湿免疫科或罕见病多学科门诊评估；急性严重症状应先去急诊。',
    isGenetic:
      '不一定是遗传病；是否需要遗传咨询取决于具体诊断、年龄、家族史和医生评估。',
    hasTreatment:
      '有些患者可以通过药物、手术、支持治疗、康复或长期随访获益；治疗目标和可选方案需要由专科医生按病情决定。',
    commonDelayReason:
      '罕见病常因早期症状分散、跨多个科室或检查结果不典型而延迟确诊。把既往检查、家族史和症状时间线整理好，有助于医生更快判断。',
  },
  patientJourney: {
    whenToSuspect: [
      '出现反复炎症、发热、皮疹、关节痛、血管炎或免疫指标异常，且按常见病处理后仍反复或进展。',
      '多个科室检查都提示异常，但没有一个常见诊断能解释全部表现。',
      '家族中有类似表现、早发重症、反复住院或不明原因死亡史。',
    ],
    commonWrongTurns: [
      '只处理单个症状，没有把不同系统的表现放在一起分析。',
      '检查结果轻度异常时反复观察，但没有到相应专科或罕见病门诊进一步评估。',
      '没有保存既往影像、化验、病理或基因检测资料，导致重复检查和判断延迟。',
    ],
    firstDepartments: ['风湿免疫科', '儿科风湿免疫科', '感染/免疫专科'],
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
      '<p>主要临床表现包括：GCA 的临床表现包括全身性炎症反应、大中血管受累和风湿性多肌痛相关临床表现，GCA 和风湿性多肌痛可不同时出现。</p><p>不同患者不一定会出现所有表现，症状轻重也可能随年龄、病程和合并问题而变化。</p>',
    diagnosis:
      '<p>诊断通常需要把病史、体格检查、专科检查和必要的实验室/影像/病理或遗传检测放在一起判断。GCA 的诊断需综合临床表现、血管影像学检查（超声、PET-CT、MRA、CTA）和颞动脉活检等方法。</p><p>还需要与表现相近的疾病鉴别：GCA 是好发于老年人群的系统性血管炎，常需与以下疾病进行鉴别：风湿性多肌痛典型临床表现为颈肩痛、蹲起困难伴晨僵等肢带肌炎症表现，以及红细胞沉降率和 CRP 显著升高，经过低剂量糖皮质激素治疗后症状可以快速缓解，糖皮质激素减停后仍然可长期维持缓解。</p>',
    treatment:
      '<p>治疗应由相关专科根据疾病阶段、严重程度、受累器官和药物可及性制定。1.治疗目标短期治疗目标为实现疾病缓解，即临床症状和实验室检查均缓解；</p>',
    longTermCare:
      '<p>长期管理的重点是定期复查、识别并发症、记录治疗反应，并在需要时进行多学科协作。如果症状变化、检查指标恶化或准备手术/妊娠/侵入性操作，应提前和主管医生沟通。</p>',
    fertilityOrFamily:
      '<p>不一定是遗传病；是否需要遗传咨询取决于具体诊断、年龄、家族史和医生评估。</p>',
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
    '<p>GCA 的临床表现包括全身性炎症反应、大中血管受累和风湿性多肌痛相关临床表现，GCA 和风湿性多肌痛可不同时出现。</p>',
  diagnosis:
    '<p>GCA 的诊断需综合临床表现、血管影像学检查（超声、PET-CT、MRA、CTA）和颞动脉活检等方法。</p>',
  treatment:
    '<p>治疗目标短期治疗目标为实现疾病缓解，即临床症状和实验室检查均缓解；</p>',
  prognosis:
    '<p>预后差异较大，取决于疾病类型、发现时间、受累器官、并发症和治疗可及性。尽早明确诊断并规范随访，有助于降低风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'draft',
  tagSlugs: ['second-rare-disease-catalog'],
};

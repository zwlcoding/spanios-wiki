import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCdkl5DeficiencyDisorder: DiseaseDraft = {
  ...entity(2011, 'disease-cdkl5-deficiency-disorder'),
  name: 'CDKL5缺乏症',
  nameEn: 'CDKL5-deficiency disorder',
  alias: '第二批罕见病目录第 11 项；CDKL5-deficiency disorder',
  slug: 'cdkl5-deficiency-disorder',
  oneSentence:
    '细胞周期蛋白依赖性激酶样 5 （cyclin-dependent kinase like 5，CDKL5）缺乏症（CDKL5 deficiency disorder，CDD)是一种婴儿期起病的严重且罕见的 x 连锁显性遗传疾病。',
  plainName: '需要专科确认和长期管理的罕见病：CDKL5缺乏症',
  prevalence:
    '已纳入国家第二批罕见病目录；具体患病率因地区、人群和诊断标准不同而不同。',
  quickLook: {
    whatItIs:
      '细胞周期蛋白依赖性激酶样 5 （cyclin-dependent kinase like 5，CDKL5）缺乏症（CDKL5 deficiency disorder，CDD)是一种婴儿期起病的严重且罕见的 x 连锁显性遗传疾病。',
    whoToSeeFirst:
      '如果出现发育、运动、癫痫、认知、肌力或感觉出现持续异常，可以先到神经内科或罕见病多学科门诊评估；急性严重症状应先去急诊。',
    isGenetic:
      '可能与遗传或家族因素有关，是否需要基因检测和家系评估应由医生结合病情判断。',
    hasTreatment:
      '有些患者可以通过药物、手术、支持治疗、康复或长期随访获益；治疗目标和可选方案需要由专科医生按病情决定。',
    commonDelayReason:
      '罕见病常因早期症状分散、跨多个科室或检查结果不典型而延迟确诊。把既往检查、家族史和症状时间线整理好，有助于医生更快判断。',
  },
  patientJourney: {
    whenToSuspect: [
      '出现发育、运动、癫痫、认知、肌力或感觉出现持续异常，且按常见病处理后仍反复或进展。',
      '多个科室检查都提示异常，但没有一个常见诊断能解释全部表现。',
      '家族中有类似表现、早发重症、反复住院或不明原因死亡史。',
    ],
    commonWrongTurns: [
      '只处理单个症状，没有把不同系统的表现放在一起分析。',
      '检查结果轻度异常时反复观察，但没有到相应专科或罕见病门诊进一步评估。',
      '没有保存既往影像、化验、病理或基因检测资料，导致重复检查和判断延迟。',
    ],
    firstDepartments: [
      '神经内科',
      '儿科神经专科',
      '康复医学科',
      '遗传咨询门诊',
    ],
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
      '<p>主要临床表现包括：CDD 的临床特点是早发的、难以控制的癫痫发作和严重神经发育障碍，早发且难治性癫痫是其核心症状。</p><p>不同患者不一定会出现所有表现，症状轻重也可能随年龄、病程和合并问题而变化。</p>',
    diagnosis:
      '<p>诊断通常需要把病史、体格检查、专科检查和必要的实验室/影像/病理或遗传检测放在一起判断。基因检测发现 CDKL5 缺失或突变，并有癫痫发作和发育障碍的临床表现可诊断。</p><p>还需要与表现相近的疾病鉴别：常见的需要与 CDD 鉴别诊断的疾病包括：Rett 综合征（MECP2 基因突变） 患儿出生 6 个月内正常，6～18 个月起病，主要表现为语言倒退，手部失用及刻板样动作，有严重的精神运动发育停滞及倒退，对早发伴癫痫发作的 Rett 综合征需行基因检测与 CDD 鉴别。</p>',
    treatment:
      '<p>治疗应由相关专科根据疾病阶段、严重程度、受累器官和药物可及性制定。目前，CDD 的相关治疗为对症治疗，特别是控制癫痫发作，包括 1）抗癫痫药物治疗据癫痫发作类型选药，临床常可选择的抗癫痫发作药包括丙戊酸、托吡酯、氯巴占等，癫痫性痉挛可应用皮质激素、氨己烯酸。</p>',
    longTermCare:
      '<p>长期管理的重点是定期复查、识别并发症、记录治疗反应，并在需要时进行多学科协作。如果症状变化、检查指标恶化或准备手术/妊娠/侵入性操作，应提前和主管医生沟通。</p>',
    fertilityOrFamily:
      '<p>可能与遗传或家族因素有关，是否需要基因检测和家系评估应由医生结合病情判断。</p>',
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
    '<p>CDD 的临床特点是早发的、难以控制的癫痫发作和严重神经发育障碍，早发且难治性癫痫是其核心症状。</p>',
  diagnosis:
    '<p>基因检测发现 CDKL5 缺失或突变，并有癫痫发作和发育障碍的临床表现可诊断。</p>',
  treatment:
    '<p>目前，CDD 的相关治疗为对症治疗，特别是控制癫痫发作，包括 1）抗癫痫药物治疗据癫痫发作类型选药，临床常可选择的抗癫痫发作药包括丙戊酸、托吡酯、氯巴占等，癫痫性痉挛可应用皮质激素、氨己烯酸。</p>',
  prognosis:
    '<p>预后差异较大，取决于疾病类型、发现时间、受累器官、并发症和治疗可及性。尽早明确诊断并规范随访，有助于降低风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'draft',
  tagSlugs: ['second-rare-disease-catalog'],
};

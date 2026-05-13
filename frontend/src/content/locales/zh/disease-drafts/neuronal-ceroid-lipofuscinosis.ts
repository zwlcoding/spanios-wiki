import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeuronalCeroidLipofuscinosis: DiseaseDraft = {
  ...entity(2055, 'disease-neuronal-ceroid-lipofuscinosis'),
  name: '神经元蜡样脂褐质沉积症',
  nameEn: 'Neuronal ceroid lipofuscinosis',
  alias: '第二批罕见病目录第 55 项；Neuronal ceroid lipofuscinosis',
  slug: 'neuronal-ceroid-lipofuscinosis',
  oneSentence:
    '神经元蜡样脂褐质沉积症（neuronal Ceroid Lipofuscinoses，NCLs），又名 Batten病，是一组遗传异质性溶酶体贮积病（lysosomal storage disorders，LSDs），特征为溶酶体自发荧光蜡样脂褐质沉积并进行性脑萎缩，临床主要表现为癫痫，进行性认知、运动能力下降和视力下降、丧失。',
  plainName: '需要专科确认和长期管理的罕见病：神经元蜡样脂褐质沉积症',
  prevalence:
    '已纳入国家第二批罕见病目录；具体患病率因地区、人群和诊断标准不同而不同。',
  quickLook: {
    whatItIs:
      '神经元蜡样脂褐质沉积症（neuronal Ceroid Lipofuscinoses，NCLs），又名 Batten病，是一组遗传异质性溶酶体贮积病（lysosomal storage disorders，LSDs），特征为溶酶体自发荧光蜡样脂褐质沉积并进行性脑萎缩，临床主要表现为癫痫，进行性认知、运动能力下降和视力下降、丧失。',
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
      '<p>主要临床表现包括：NCLs 患者有显著的基因型-表型异质性，但所有 NCLs 患者都表现为进行性恶化临床病程，共同临床特征包括癫痫发作，进行性运动障碍、认知障碍和视觉障碍等，但症状出现的顺序和年龄很大程度上取决于 NCL 的分类。</p><p>不同患者不一定会出现所有表现，症状轻重也可能随年龄、病程和合并问题而变化。</p>',
    diagnosis:
      '<p>诊断通常需要把病史、体格检查、专科检查和必要的实验室/影像/病理或遗传检测放在一起判断。由于非特异性症状体征，NCLs 诊断常常被延误。</p><p>还需要与表现相近的疾病鉴别：儿童期神经退行性病的鉴别诊断范围广泛，包括遗传性、代谢性和炎症性病因等。</p>',
    treatment:
      '<p>治疗应由相关专科根据疾病阶段、严重程度、受累器官和药物可及性制定。NCLs 预后不良，目前大多数 NCLs 无有效治疗方法，除 CLN2 病有药物治疗外，其他亚型临床上主要是对症支持治疗。</p>',
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
    '<p>NCLs 患者有显著的基因型-表型异质性，但所有 NCLs 患者都表现为进行性恶化临床病程，共同临床特征包括癫痫发作，进行性运动障碍、认知障碍和视觉障碍等，但症状出现的顺序和年龄很大程度上取决于 NCL 的分类。</p>',
  diagnosis: '<p>由于非特异性症状体征，NCLs 诊断常常被延误。</p>',
  treatment:
    '<p>NCLs 预后不良，目前大多数 NCLs 无有效治疗方法，除 CLN2 病有药物治疗外，其他亚型临床上主要是对症支持治疗。</p>',
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

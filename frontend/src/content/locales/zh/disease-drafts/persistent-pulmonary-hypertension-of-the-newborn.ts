import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePersistentPulmonaryHypertensionOfTheNewborn: DiseaseDraft =
  {
    ...entity(2059, 'disease-persistent-pulmonary-hypertension-of-the-newborn'),
    name: '新生儿持续肺动脉高压',
    nameEn: 'Persistent pulmonary hypertension of the newborn',
    alias:
      '第二批罕见病目录第 59 项；Persistent pulmonary hypertension of the newborn',
    slug: 'persistent-pulmonary-hypertension-of-the-newborn',
    oneSentence:
      '新生儿持续肺动脉高压是新生儿出生后肺血管阻力持续增高、血液仍通过动脉导管或心房水平从右向左分流而导致严重低氧的一类危重情况，通常需要新生儿专科和重症监护处理。',
    plainName: '需要专科确认和长期管理的罕见病：新生儿持续肺动脉高压',
    prevalence:
      '已纳入国家第二批罕见病目录；具体患病率因地区、人群和诊断标准不同而不同。',
    quickLook: {
      whatItIs:
        '新生儿持续肺动脉高压是新生儿出生后肺血管阻力持续增高、血液仍通过动脉导管或心房水平从右向左分流而导致严重低氧的一类危重情况，通常需要新生儿专科和重症监护处理。',
      whoToSeeFirst:
        '如果新生儿出现出生后不久持续或反复低氧、发绀、呼吸困难，或常规吸氧/通气后改善不明显，应优先由新生儿科或 NICU 评估；病情危急时按急诊和重症流程处理。',
      isGenetic:
        '通常不是典型的家族遗传病，但具体病因和是否需要家属评估，应由专科医生结合诊断判断。',
      hasTreatment:
        '有些患者可以通过药物、手术、支持治疗、康复或长期随访获益；治疗目标和可选方案需要由专科医生按病情决定。',
      commonDelayReason:
        '罕见病常因早期症状分散、跨多个科室或检查结果不典型而延迟确诊。把既往检查、家族史和症状时间线整理好，有助于医生更快判断。',
    },
    patientJourney: {
      whenToSuspect: [
        '新生儿出生后不久出现持续低氧、发绀、呼吸困难，且低氧程度与肺部影像或常规呼吸问题不完全相符。',
        '多个科室检查都提示异常，但没有一个常见诊断能解释全部表现。',
        '家族中有类似表现、早发重症、反复住院或不明原因死亡史。',
      ],
      commonWrongTurns: [
        '只处理单个症状，没有把不同系统的表现放在一起分析。',
        '检查结果轻度异常时反复观察，但没有到相应专科或罕见病门诊进一步评估。',
        '没有保存既往影像、化验、病理或基因检测资料，导致重复检查和判断延迟。',
      ],
      firstDepartments: [
        '新生儿科',
        '新生儿重症监护室（NICU）',
        '儿科心血管/呼吸专科',
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
        '<p>主要临床表现包括：新生儿多为足月儿或过期产儿，可有羊水胎粪污染、围产期窒息、胎粪吸入等病史；出生后可出现持续低氧、发绀或呼吸困难，常规呼吸支持后改善可能不明显。</p><p>不同患儿不一定会出现所有表现，症状轻重也可能随原发疾病、缺氧程度和合并问题而变化。</p>',
      diagnosis:
        '<p>诊断通常需要把病史、体格检查、专科检查和必要的实验室/影像/病理或遗传检测放在一起判断。在适当通气和给氧情况下，任何新生儿早期表现为严重的低氧血症与肺实质疾病的严重程度或胸部 X 线表现不成比例、并除外气胸及先天性心脏病时均应考虑 PPHN 的可能。</p><p>还需要与表现相近的疾病鉴别：发绀型先天性心脏病超声心动图可以发现存在的心脏异常，有助于与 PPHN 相鉴别。</p>',
      treatment:
        '<p>治疗应由相关专科根据疾病阶段、严重程度、受累器官和药物可及性制定。PPHN 的程度从轻度低氧伴轻度呼吸窘迫到严重低氧血症伴心肺功能不稳定。</p>',
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
      '<p>新生儿可在出生后不久出现持续低氧、发绀或呼吸困难，部分患儿有胎粪吸入、围产期窒息等病史。</p>',
    diagnosis:
      '<p>在适当通气和给氧情况下，任何新生儿早期表现为严重的低氧血症与肺实质疾病的严重程度或胸部 X 线表现不成比例、并除外气胸及先天性心脏病时均应考虑 PPHN 的可能。</p>',
    treatment:
      '<p>PPHN 的程度从轻度低氧伴轻度呼吸窘迫到严重低氧血症伴心肺功能不稳定。</p>',
    prognosis:
      '<p>预后差异较大，取决于疾病类型、发现时间、受累器官、并发症和治疗可及性。尽早明确诊断并规范随访，有助于降低风险。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'draft',
    tagSlugs: ['second-rare-disease-catalog'],
  };

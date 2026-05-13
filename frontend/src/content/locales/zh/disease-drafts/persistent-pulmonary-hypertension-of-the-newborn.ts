import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePersistentPulmonaryHypertensionOfTheNewborn: DiseaseDraft =
  {
    ...entity(2059, 'disease-persistent-pulmonary-hypertension-of-the-newborn'),
    name: '新生儿持续肺动脉高压',
    nameEn: 'Persistent pulmonary hypertension of the newborn',
    alias: 'PPHN；新生儿持续性肺高压；第二批罕见病目录第 59 项',
    slug: 'persistent-pulmonary-hypertension-of-the-newborn',
    oneSentence:
      '新生儿持续肺动脉高压是一种出生后肺血管阻力没有正常下降的危重新生儿疾病，会导致严重低氧，需要新生儿重症团队快速处理。',
    plainName: '一种宝宝出生后肺循环没有顺利切换导致缺氧的新生儿急症',
    prevalence:
      '已纳入中国第二批罕见病目录；多见于围产期缺氧、胎粪吸入、肺炎/败血症、肺发育异常或先天膈疝等背景下的新生儿。',
    quickLook: {
      whatItIs:
        '胎儿在子宫内肺血流少，出生后肺血管应放松并接纳更多血流。PPHN 时肺血管仍然过度收缩，血液绕过肺部，导致氧合很差。',
      whoToSeeFirst:
        '这是新生儿急症，应由新生儿科/NICU 处理。家长看到出生后青紫、呼吸困难或吸氧仍低氧，应立即急救。',
      isGenetic:
        'PPHN 本身通常不是单基因遗传病，但可由肺发育异常、先天膈疝或其他遗传/结构异常背景引起，是否遗传评估取决于基础病。',
      hasTreatment:
        '治疗包括纠正低氧和酸中毒、机械通气、肺表面活性物质、吸入一氧化氮、循环支持和治疗感染或肺部原因，重症可能需要 ECMO。',
      commonDelayReason:
        '早期可被认为只是新生儿呼吸窘迫或肺炎；若没有做心脏超声评估肺动脉压力和分流方向，可能低估严重程度。',
    },
    patientJourney: {
      whenToSuspect: [
        '宝宝出生后很快出现青紫、呼吸急促、呻吟、胸凹或需要高浓度氧气。',
        '手脚和身体不同部位氧饱和度差异明显，或吸氧后改善不理想。',
        '有胎粪吸入、窒息、感染、肺炎、先天膈疝、肺发育不良或剖宫产/围产期风险。',
        '新生儿出现反复低氧、酸中毒、血压不稳或休克表现。',
      ],
      commonWrongTurns: [
        '只按普通肺炎或呼吸窘迫处理，没有及时做超声心动图。',
        '忽略导管前后氧饱和度差异和右向左分流线索。',
        '转运过程中低氧、低体温、低血糖或酸中毒没有得到充分稳定。',
      ],
      firstDepartments: [
        '新生儿重症监护室（NICU）',
        '新生儿科',
        '儿科心脏超声/心内科',
        'ECMO 转诊中心（重症时）',
      ],
      diagnosisChecklist: [
        '记录出生孕周、分娩方式、Apgar 评分、胎粪、窒息复苏、感染风险和用药史。',
        '带血气、氧饱和度记录、胸片、超声心动图、感染指标和转运记录。',
        '记录导管前后氧饱和度、氧需求、通气参数和血压支持情况。',
        '整理是否有先天膈疝、肺发育异常或其他结构畸形。',
      ],
      testsToAskAbout: [
        '超声心动图确认肺动脉压力、右向左分流，并排除紫绀型先天性心脏病。',
        '动脉血气、乳酸、胸片、感染评估、血糖、电解质和器官灌注监测。',
        '是否适合吸入一氧化氮、肺表面活性物质、肺血管扩张药或 ECMO 转诊。',
        '稳定后是否需要听力、神经发育、肺功能和基础病随访。',
      ],
      questionsForDoctor: [
        '低氧主要来自 PPHN、肺部疾病，还是先天性心脏病？',
        '目前氧合指数和肺动脉压力如何？是否需要吸入一氧化氮或 ECMO 评估？',
        '宝宝是否有感染、胎粪吸入、先天膈疝或肺发育问题需要同时治疗？',
        '出院后需要复查听力、神经发育、肺和心脏多久？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>PPHN 通常在出生后数小时内表现为明显青紫、呼吸急促、呻吟、胸凹、氧饱和度低和对吸氧反应差。部分宝宝导管前后氧饱和度不同，提示血液绕过肺循环。</p><p>严重时可出现酸中毒、低血压、休克、尿量减少和多器官灌注不足。症状常与胎粪吸入、肺炎、败血症、呼吸窘迫综合征、先天膈疝或肺发育不良同时存在。</p>',
      diagnosis:
        '<p>诊断依靠临床低氧、血气和超声心动图。超声心动图能评估肺动脉压力、心功能、动脉导管或卵圆孔分流方向，并排除需要不同处理的紫绀型先天性心脏病。</p><p>同时要寻找诱因和合并问题，如胸片评估肺部疾病，感染指标和培养评估败血症或肺炎，血糖、电解质、乳酸和器官功能评估全身状态。</p>',
      treatment:
        '<p>治疗目标是降低肺血管阻力、改善氧合和支持循环。常用措施包括保温、纠正低血糖和酸中毒、适当镇静、优化机械通气、治疗基础肺病或感染、维持血压和心功能。</p><p>吸入一氧化氮是常用的选择性肺血管扩张治疗。根据病因可使用肺表面活性物质、正性肌力药、其他肺血管扩张药或高频通气。对常规治疗无效、氧合严重不足的宝宝，应尽早联系具备 ECMO 能力的中心。</p>',
      longTermCare:
        '<p>出院后随访取决于病因和重症程度。需要关注听力、神经发育、喂养、生长、呼吸道症状、肺高压是否残留以及基础病如先天膈疝或肺发育异常。</p><p>曾接受 ECMO、严重低氧或长时间机械通气的宝宝，更需要系统的发育评估、康复和多学科随访。</p>',
      fertilityOrFamily:
        '<p>单纯 PPHN 通常不提示家族遗传风险。若合并先天膈疝、肺发育异常、多发畸形或疑似综合征，医生可能建议遗传咨询，以明确再次妊娠风险和产前筛查重点。</p>',
      emergencySigns:
        '<p>新生儿出现青紫、呼吸困难、吃奶差、反应差、抽搐、体温异常或吸氧仍低氧，应立即急救。出院后如再次出现口唇青紫、呼吸费力、喂养明显下降或嗜睡，也应急诊。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'Merck Manual: Persistent Pulmonary Hypertension of the Newborn',
        type: 'review',
        url: 'https://www.merckmanuals.com/professional/pediatrics/respiratory-problems-in-neonates/persistent-pulmonary-hypertension-of-the-newborn',
      },
      {
        name: 'MedlinePlus Medical Encyclopedia: Persistent pulmonary hypertension of the newborn',
        type: 'official',
        url: 'https://medlineplus.gov/ency/article/007329.htm',
      },
    ],
    symptoms:
      '<p>出生后可出现青紫、呼吸急促、呻吟、胸凹、低氧、导管前后氧饱和度差异、酸中毒、低血压和休克。</p>',
    diagnosis:
      '<p>诊断依靠低氧表现、血气、胸片和超声心动图评估肺动脉压力及分流方向，并排除紫绀型先天性心脏病。</p>',
    treatment:
      '<p>治疗包括氧合和通气支持、纠正酸中毒和低血压、治疗肺部或感染原因、吸入一氧化氮、肺表面活性物质、循环支持，重症评估 ECMO。</p>',
    prognosis:
      '<p>结局取决于低氧严重程度、基础病和治疗反应；重症幸存者需要听力、神经发育、肺和心脏随访。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 413,
      name: 'persistent-pulmonary-hypertension-of-the-newborn-journey.png',
      url: '/images/diseases/persistent-pulmonary-hypertension-of-the-newborn-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

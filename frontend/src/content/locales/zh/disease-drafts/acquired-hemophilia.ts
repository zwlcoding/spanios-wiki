import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAcquiredHemophilia: DiseaseDraft = {
  ...entity(2002, 'disease-acquired-hemophilia'),
  name: '获得性血友病',
  nameEn: 'Acquired hemophilia',
  alias: '获得性血友病A、AHA、凝血因子抑制物相关出血、第二批罕见病目录第 2 项',
  slug: 'acquired-hemophilia',
  oneSentence:
    '获得性血友病是一种后天出现的严重出血性疾病，常因自身抗体抑制凝血因子 VIII 导致凝血功能突然失衡，患者既往常没有出血病史。',
  plainName: '成年人突然出现大片瘀斑或深部出血的罕见凝血病',
  prevalence:
    '已纳入国家第二批罕见病目录；文献常报告发病率约每百万人每年 0.2-1.5 例，老年人和产后人群更常见。',
  quickLook: {
    whatItIs:
      '获得性血友病不同于从小就有的遗传性血友病。它多是在成年后突然出现，免疫系统产生抗体“挡住”凝血因子，导致皮肤、肌肉、黏膜或手术后出血不止。',
    whoToSeeFirst:
      '出现大片瘀斑、肌肉血肿、原因不明贫血或术后/产后出血不止，应尽快到血液科或急诊；严重出血不要等门诊。',
    isGenetic:
      '通常不是家族遗传病。它可与自身免疫病、肿瘤、妊娠/产后、药物或感染相关，也有不少患者找不到明确诱因。',
    hasTreatment:
      '治疗通常分两步：先控制正在发生的出血，再用免疫抑制等方案清除抑制物。需要由熟悉凝血疾病的血液科团队处理。',
    commonDelayReason:
      '因为患者以前没有出血史，早期常被当作外伤、抗凝药副作用、皮肤病或普通贫血；孤立性 APTT 延长没有被追查时也会延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '成年人或产后女性突然出现大片瘀斑、皮下出血、肌肉深部疼痛肿胀或血肿。',
      '拔牙、手术、穿刺或分娩后出血时间明显延长。',
      '贫血加重、便血、血尿或黏膜出血，但血小板数量并不能解释出血程度。',
      '凝血检查提示 APTT 延长，而 PT 相对正常。',
      '没有个人或家族出血史，却出现严重或反复出血。',
    ],
    commonWrongTurns: [
      '只按外伤或皮肤瘀斑处理，没有查凝血功能。',
      '看到没有家族史就排除血友病相关问题。',
      '把 APTT 延长简单归因于抽血误差或抗凝药，没有做纠正试验和凝血因子检测。',
      '在未控制凝血风险前安排非紧急侵入性操作。',
    ],
    firstDepartments: ['血液科', '急诊科', '凝血/罕见血液病门诊'],
    diagnosisChecklist: [
      '记录出血开始时间、部位、是否自发、是否与手术/分娩/药物有关。',
      '带上血常规、凝血功能、肝肾功能、输血记录和影像资料。',
      '列出正在使用的抗凝药、抗血小板药、免疫相关药物和近期新药。',
      '告知医生是否有自身免疫病、肿瘤、妊娠/产后、感染或近期手术。',
    ],
    testsToAskAbout: [
      '凝血功能，包括 APTT、PT、纤维蛋白原和凝血酶时间。',
      'APTT 纠正试验，判断是否存在抑制物。',
      '凝血因子 VIII 活性，必要时评估 IX 等因子。',
      '凝血因子 VIII 抑制物滴度，例如 Bethesda 或 Nijmegen 改良法。',
      '根据情况筛查相关诱因，如自身免疫病、肿瘤、感染或产后相关因素。',
    ],
    questionsForDoctor: [
      '目前出血风险属于轻、中还是重？需要住院或转到有凝血经验的中心吗？',
      '现在的目标是先止血，还是已经可以开始清除抑制物？',
      '哪些药物、注射、拔牙或手术暂时需要避免？',
      '治疗期间需要多久复查 APTT、因子 VIII 活性和抑制物滴度？',
      '是否需要查找潜在诱因，例如自身免疫病或肿瘤？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>获得性血友病常表现为近期突然出现的出血。常见部位包括皮肤大片瘀斑、肌肉血肿、软组织出血、黏膜出血、泌尿道或消化道出血，也可发生在手术、穿刺、拔牙或分娩之后。</p><p>与遗传性血友病不同，关节反复出血并不是最典型表现。许多患者既往没有出血病史，也没有家族史，因此“第一次严重出血”本身就是重要线索。</p>',
    diagnosis:
      '<p>诊断重点是把临床出血和凝血实验室结果联系起来。典型线索是孤立性 APTT 延长、PT 相对正常，APTT 纠正试验不能完全纠正，凝血因子 VIII 活性降低，并检测到相应抑制物。</p><p>医生还会排除肝病、抗凝药影响、狼疮抗凝物、遗传性血友病伴抑制物和其他凝血障碍，并评估是否存在自身免疫病、恶性肿瘤、妊娠/产后或药物相关诱因。</p>',
    treatment:
      '<p>治疗通常包括两条线：一是控制急性出血，可能需要旁路止血药物、重组因子或其他专科止血方案；二是清除抑制物，常用糖皮质激素，必要时联合其他免疫抑制治疗。具体选择取决于出血严重程度、因子活性、抑制物滴度和基础疾病。</p><p>患者应避免自行使用止痛药、抗凝药或侵入性操作。所有手术、拔牙、穿刺和内镜检查前都应先让血液科评估。</p>',
    longTermCare:
      '<p>随访重点包括出血是否停止、血红蛋白是否恢复、APTT 和凝血因子 VIII 活性是否改善、抑制物是否转阴，以及免疫抑制治疗的不良反应和感染风险。</p><p>缓解后仍需按医嘱复查，因为少数患者可能复发。建议保留一份凝血病情摘要，急诊或跨院就诊时主动说明“获得性血友病/因子 VIII 抑制物”。</p>',
    fertilityOrFamily:
      '<p>获得性血友病通常不是遗传病，家属一般不需要按遗传性血友病筛查。与妊娠或产后相关的患者，应由血液科和产科共同评估再次妊娠风险和随访计划。</p>',
    emergencySigns:
      '<p>出现头痛伴呕吐或意识改变、呼吸困难、胸痛、腹痛或腰背痛伴贫血、便血/黑便、血尿、快速增大的肌肉或咽喉部肿胀、术后出血不止，应立即急诊，并说明疑似或确诊获得性血友病。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'CDC: About Hemophilia',
      type: 'official',
      url: 'https://www.cdc.gov/hemophilia/about/index.html',
    },
    {
      name: 'Pai M. Acquired Hemophilia A. Hematol Oncol Clin North Am. 2021',
      type: 'review',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34535289/',
    },
  ],
  symptoms:
    '<p>常见表现是成年人突然出现大片瘀斑、软组织或肌肉血肿、黏膜出血、血尿、消化道出血，或手术、拔牙、分娩后出血不止。</p>',
  diagnosis:
    '<p>典型诊断线索包括孤立性 APTT 延长、纠正试验不能纠正、凝血因子 VIII 活性降低和因子 VIII 抑制物阳性，同时排除抗凝药、狼疮抗凝物和其他凝血障碍。</p>',
  treatment:
    '<p>治疗需要血液科尽快控制出血，并通过免疫抑制等方案清除抑制物；侵入性操作前必须评估凝血风险。</p>',
  prognosis:
    '<p>及时识别和治疗可显著降低严重出血风险，但治疗期间需要密切监测复发、感染和免疫抑制相关不良反应。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 356,
    name: 'acquired-hemophilia-journey.png',
    url: '/images/diseases/acquired-hemophilia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

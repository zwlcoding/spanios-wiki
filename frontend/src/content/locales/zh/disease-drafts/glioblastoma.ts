import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlioblastoma: DiseaseDraft = {
  ...entity(2038, 'disease-glioblastoma'),
  name: '胶质母细胞瘤',
  nameEn: 'Glioblastoma',
  alias: 'GBM、胶质母细胞瘤、成人弥漫性胶质瘤 4 级、第二批罕见病目录第 38 项',
  slug: 'glioblastoma',
  oneSentence:
    '胶质母细胞瘤是一种侵袭性很强的成人原发中枢神经系统肿瘤，常以新发或加重头痛、癫痫发作、肢体无力、语言或视力改变等神经症状出现，需要神经外科和神经肿瘤团队联合治疗。',
  plainName: '进展快、需要多学科治疗的恶性脑胶质瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；属于罕见中枢神经系统肿瘤，成人中相对常见但总体人群发生率仍低。',
  quickLook: {
    whatItIs:
      'GBM 起源于脑内胶质细胞相关谱系，呈浸润性生长。即使影像上看到主要肿块，也可能已有肉眼难以看到的周围浸润。',
    whoToSeeFirst:
      '新发癫痫、进行性头痛、清晨呕吐、单侧肢体无力、说话困难、视野改变、性格或认知明显变化，应尽快就诊神经外科、神经内科或急诊。',
    isGenetic:
      '大多数 GBM 不是家族遗传病。病理会检测 IDH、MGMT 等分子指标用于分型和治疗判断；非常年轻或有明显家族肿瘤史者可询问遗传咨询。',
    hasTreatment:
      '治疗通常包括最大安全切除、放疗和替莫唑胺化疗，部分患者可讨论肿瘤治疗电场、靶向/免疫治疗临床试验、康复和缓和支持治疗。',
    commonDelayReason:
      '早期可能被当作偏头痛、压力、颈椎问题、脑梗后遗症或精神心理问题。新发癫痫或进行性局灶神经症状应尽快做脑 MRI。',
  },
  patientJourney: {
    whenToSuspect: [
      '成年人出现第一次癫痫发作，或既往癫痫突然明显变频繁。',
      '头痛逐渐加重，伴呕吐、嗜睡、视物模糊、说话困难、肢体无力或走路不稳。',
      '家人发现性格、记忆、判断力、语言表达或工作能力在数周到数月内明显变化。',
      '脑 MRI 发现强化肿块、水肿或提示高级别胶质瘤可能。',
    ],
    commonWrongTurns: [
      '反复按偏头痛、失眠、焦虑或颈椎病处理，没有做脑 MRI。',
      '只关注肿瘤能否完全切除，没有同时讨论功能区保护、术后放化疗和分子病理。',
      '病理报告拿到后没有复核 IDH、MGMT 等关键指标，影响治疗讨论。',
      '治疗期间忽视癫痫、脑水肿、血栓、营养、康复和照护者压力管理。',
    ],
    firstDepartments: ['神经外科', '神经肿瘤科/肿瘤科', '神经内科', '急诊科'],
    diagnosisChecklist: [
      '记录头痛、癫痫、肢体无力、语言/视力/认知变化出现的时间线。',
      '带脑 MRI 增强、CT、术前术后影像和影像光盘。',
      '带病理报告、免疫组化和分子检测结果，包括 IDH、MGMT、TERT、1p/19q 等如已检测项目。',
      '整理当前用药，如抗癫痫药、激素、抗凝药，以及既往肿瘤或放疗史。',
    ],
    testsToAskAbout: [
      '增强脑 MRI，必要时功能 MRI、DTI、灌注/波谱等辅助术前计划。',
      '手术或活检取得组织后进行组织病理和分子病理分型。',
      '术后 24-72 小时 MRI 评估切除范围，并制定放疗和化疗计划。',
      '癫痫、脑水肿、血栓、感染、认知和康复需求评估。',
    ],
    questionsForDoctor: [
      '我的肿瘤位置是否靠近重要功能区？手术目标是全切、减压还是活检？',
      '病理和分子结果说明了什么？MGMT 甲基化状态会怎样影响化疗讨论？',
      '标准放化疗、肿瘤治疗电场或临床试验分别适合我吗？',
      '哪些症状提示颅压升高、癫痫或血栓，需要立刻急诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GBM 可因肿瘤本身、周围水肿和颅内压升高引起症状。常见表现包括新发或加重头痛、癫痫发作、恶心呕吐、嗜睡、单侧肢体无力或麻木、语言困难、视野缺损、走路不稳、记忆和性格改变。</p><p>症状取决于肿瘤部位，可能在数天到数周内进展，也可能先表现为工作能力下降或家人觉得“人变了”。任何成人首次癫痫都需要认真排查脑部病因。</p>',
    diagnosis:
      '<p>首选检查通常是增强脑 MRI。影像可提示高级别胶质瘤，但确诊依靠手术或活检组织的病理和分子病理，包括 IDH 状态、MGMT 启动子甲基化等影响分型和治疗讨论的指标。</p><p>医生还会与脑转移瘤、淋巴瘤、脑脓肿、脱髓鞘病变、脑梗死后改变和其他胶质瘤鉴别。术后早期 MRI 有助于判断切除范围并安排后续治疗。</p>',
    treatment:
      '<p>治疗目标是在保护神经功能的前提下尽可能安全切除肿瘤，随后通常进行放疗联合替莫唑胺化疗，再根据情况继续辅助化疗。不能安全切除时，活检和减压也可能有价值。</p><p>部分患者可讨论肿瘤治疗电场、复发后的再手术/再放疗/药物治疗或临床试验。支持治疗包括抗癫痫、激素控制水肿、康复、营养、心理和缓和医疗。</p>',
    longTermCare:
      '<p>随访需要定期脑 MRI、神经功能评估、血常规和肝肾功能监测、癫痫控制、激素副作用管理和康复计划。影像变化有时需要区分真正进展、假性进展或放疗相关改变。</p><p>照护者应参与用药管理、安全防跌倒、驾驶和工作能力评估，以及提前照护计划讨论。</p>',
    fertilityOrFamily:
      '<p>多数 GBM 不是遗传病，家属通常不需要筛查。年轻患者如要接受放化疗，可在治疗前询问生育力保存；有多个亲属早发肿瘤或疑似遗传肿瘤综合征时，可咨询遗传门诊。</p>',
    emergencySigns:
      '<p>首次或持续癫痫、严重头痛伴呕吐或嗜睡、突然肢体无力或说话困难、意识改变、发热伴免疫低下、胸痛气短或一侧下肢肿痛，都应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NCI: Adult Central Nervous System Tumors Treatment (PDQ), Patient Version',
      type: 'official',
      url: 'https://www.cancer.gov/types/brain/patient/adult-brain-treatment-pdq',
    },
  ],
  symptoms:
    '<p>常见新发或加重头痛、癫痫、恶心呕吐、嗜睡、肢体无力、语言或视力改变、走路不稳、记忆和性格变化。</p>',
  diagnosis:
    '<p>增强脑 MRI 是关键检查，确诊依靠手术或活检组织的组织病理和分子病理，并结合术后早期 MRI 制定后续治疗。</p>',
  treatment:
    '<p>常见治疗为最大安全切除后放疗联合替莫唑胺化疗，之后辅助化疗；部分患者可考虑肿瘤治疗电场、复发治疗或临床试验。</p>',
  prognosis:
    '<p>GBM 进展风险高，治疗重点是延长生存、维持神经功能和生活质量；规律影像复查、症状控制、康复和照护支持很重要。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 392,
    name: 'glioblastoma-journey.png',
    url: '/images/diseases/glioblastoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

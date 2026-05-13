import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRecurrentPericarditis: DiseaseDraft = {
  ...entity(2070, 'disease-recurrent-pericarditis'),
  name: '复发性心包炎',
  nameEn: 'Recurrent pericarditis',
  alias: 'RP；复发性心包炎；第二批罕见病目录第 70 项',
  oneSentence:
    '复发性心包炎是心包炎症在症状缓解至少数周后再次发作，常表现为反复胸痛、炎症指标升高，少数可出现心包积液或心脏压塞风险。',
  plainName: '包着心脏的膜反复发炎、胸痛反复来的疾病',
  prevalence:
    '已纳入中国第二批罕见病目录；美国心脏协会资料提示，急性心包炎治疗后约 15%-30% 可复发，使用秋水仙碱可降低复发风险。',
  quickLook: {
    whatItIs:
      '心包是包绕心脏的薄膜。复发性心包炎指心包炎症反复“复燃”，常见定义是无症状至少 4 周后再次出现心包炎表现。',
    whoToSeeFirst:
      '反复尖锐胸痛、平躺或深呼吸加重、坐起前倾缓解，伴低热、心悸或炎症指标升高，应到心内科；首次或不典型胸痛应先急诊排除心梗、肺栓塞等。',
    isGenetic:
      '多数不是遗传病。复发可能与首次炎症未完全控制、感染后免疫反应、自身免疫病或自炎症反应有关。',
    hasTreatment:
      '常用 NSAID 或阿司匹林联合秋水仙碱，并限制运动和缓慢减量。难治或不能耐受者可评估糖皮质激素、IL-1 抑制剂、穿刺引流或少数手术选择。',
    commonDelayReason:
      '胸痛容易被误认为胃食管反流、肌肉拉伤、焦虑或冠心病；如果每次发作没有记录 ECG、CRP、超声和用药疗程，容易反复用药不足。',
  },
  patientJourney: {
    whenToSuspect: [
      '有过心包炎后，无症状一段时间又出现相似胸痛，尤其是深呼吸、咳嗽或平躺加重，前倾缓解。',
      '胸痛伴低热、乏力、心悸、气短，CRP/ESR 升高或心包摩擦音。',
      '超声或心脏 MRI 提示心包积液、心包增厚或心包炎症。',
      '近期病毒感染、心脏手术/介入、心梗、自身免疫病、肾衰、肿瘤、胸部放疗或结核风险。',
    ],
    commonWrongTurns: [
      '只止痛几天就停药，没有按医生计划足量疗程、秋水仙碱和缓慢减量。',
      '胸痛复发时自行判断为老毛病，未排除心梗、肺栓塞、主动脉夹层或心肌炎。',
      '反复使用激素快速缓解但没有控制复发风险，也没有查自身免疫或感染线索。',
    ],
    firstDepartments: [
      '急诊（首次或严重胸痛）',
      '心内科/心包疾病门诊',
      '风湿免疫科（疑似自身免疫或自炎症时）',
      '心外科（缩窄或难治积液时）',
    ],
    diagnosisChecklist: [
      '带每次发作的胸痛特点、体温、诱因、持续时间、缓解姿势和用药反应记录。',
      '带 ECG、肌钙蛋白、CRP/ESR、血常规、肾功能、自身抗体和感染筛查结果。',
      '带心脏超声、胸片/CT、心脏 MRI、既往手术或介入记录。',
      '记录 NSAID、阿司匹林、秋水仙碱、激素或 IL-1 抑制剂使用剂量、疗程和副作用。',
    ],
    testsToAskAbout: [
      '这次胸痛是否符合心包炎复发，是否已排除急性冠脉综合征、肺栓塞、主动脉夹层和心肌炎。',
      'CRP 是否可作为疗程和减量依据，是否需要心脏 MRI 判断心包炎症。',
      '心包积液大小、压塞风险和是否需要穿刺。',
      '是否需要查自身免疫病、结核、肿瘤、肾衰或术后心包切开综合征等病因。',
    ],
    questionsForDoctor: [
      '我的复发属于低危还是有高危特征？需要住院还是门诊管理？',
      'NSAID/阿司匹林、秋水仙碱要用多久？什么时候看 CRP 决定减量？',
      '我什么时候可以恢复运动、上班或上学？哪些活动会增加复发风险？',
      '如果再次复发，是否适合 IL-1 抑制剂或其他二线方案？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>典型胸痛常位于胸骨后或左胸，呈尖锐或刺痛样，深呼吸、咳嗽、吞咽或平躺时加重，坐起前倾可缓解。可伴低热、乏力、心悸、气短和焦虑感。</p><p>复发时可能有心包摩擦音、CRP/ESR 升高、ECG 改变、心包积液或心包炎症影像证据。少数患者出现大量积液、心脏压塞或长期缩窄性心包炎。</p>',
    diagnosis:
      '<p>诊断需要确认胸痛是否再次符合心包炎，并排除更危险的胸痛原因。常用检查包括 ECG、肌钙蛋白、CRP/ESR、血常规、肾功能、胸部影像和心脏超声。</p><p>心脏 MRI 可帮助判断心包水肿和炎症，尤其在症状反复或诊断不清时。医生还会根据病史筛查感染、自身免疫病、肿瘤、肾衰、心梗后或心脏手术后原因。</p>',
    treatment:
      '<p>复发性心包炎的目标是完全控制炎症并减少下一次复发。常用方案是 NSAID 或阿司匹林联合秋水仙碱，疗程和减量通常参考症状和 CRP，而不是胸痛刚好转就停药。</p><p>糖皮质激素一般尽量低剂量、慢减量，并多用于 NSAID/秋水仙碱不能用、妊娠或明确自身免疫病等情况，因为不当使用可能增加复发。难治病例可评估 IL-1 抑制剂；大量积液或压塞需穿刺引流，极少数反复难治或缩窄者考虑手术。</p>',
    longTermCare:
      '<p>随访包括症状、CRP/ESR、ECG、超声和药物副作用，如胃肠道反应、肾功能、肝功能和血细胞。运动通常需在症状消失、炎症指标恢复并经医生同意后逐步恢复。</p><p>患者应保存每次发作和治疗疗程记录，避免自行突然停药或快速减量。反复发作时，需要重新评估病因，而不是只重复止痛药。</p>',
    fertilityOrFamily:
      '<p>复发性心包炎通常不是遗传病。备孕或妊娠患者需要心内科和产科共同制定用药方案，因为 NSAID、秋水仙碱、激素和 IL-1 抑制剂在不同妊娠阶段的安全性需要个体化评估。</p>',
    emergencySigns:
      '<p>任何新的、严重或不典型胸痛都应急诊排除心梗等急症。胸痛伴晕厥、明显气短、低血压、心跳很快、咯血、单侧腿肿痛、持续高热或无法平卧，应立即就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'American Heart Association: Recurrent Pericarditis',
      type: 'patient-organization',
      url: 'https://www.heart.org/en/health-topics/pericarditis/what-is-pericarditis/recurrent-pericarditis',
    },
    {
      name: 'American Heart Association: Treatment of Pericarditis',
      type: 'patient-organization',
      url: 'https://www.heart.org/en/health-topics/pericarditis/treatment-of-pericarditis',
    },
  ],
  symptoms:
    '<p>常见反复尖锐胸痛，深呼吸、咳嗽或平躺加重，坐起前倾缓解，可伴低热、乏力、心悸、气短、炎症指标升高或心包积液。</p>',
  diagnosis:
    '<p>诊断结合胸痛特点、心包炎既往史、ECG、CRP/ESR、肌钙蛋白、心脏超声和必要时心脏 MRI，同时排除心梗、肺栓塞、主动脉夹层和心肌炎。</p>',
  treatment:
    '<p>治疗常用 NSAID 或阿司匹林联合秋水仙碱，按症状和 CRP 缓慢减量；难治或特殊情况可评估激素、IL-1 抑制剂、心包穿刺或少数手术方案。</p>',
  prognosis:
    '<p>多数患者可在门诊长期管理并减少复发，但大量心包积液、压塞、缩窄性心包炎或反复难治发作需要专科密切处理。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'recurrent-pericarditis',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 424,
    name: 'recurrent-pericarditis-journey.png',
    url: '/images/diseases/recurrent-pericarditis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

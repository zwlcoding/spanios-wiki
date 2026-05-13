import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHidradenitisSuppurativa: DiseaseDraft = {
  ...entity(2040, 'disease-hidradenitis-suppurativa'),
  name: '化脓性汗腺炎',
  nameEn: 'Hidradenitis suppurativa',
  alias: 'HS、反常性痤疮、Acne inversa、第二批罕见病目录第 40 项',
  slug: 'hidradenitis-suppurativa',
  oneSentence:
    '化脓性汗腺炎是一种慢性、反复发作的炎症性皮肤病，常在腋下、腹股沟、臀部、乳房下等摩擦部位出现疼痛性结节、脓肿、窦道和瘢痕，并显著影响生活质量。',
  plainName: '反复在摩擦部位长疼痛结节和窦道的慢性炎症性皮肤病',
  prevalence:
    '已纳入国家第二批罕见病目录；不同研究的估计差异较大，漏诊和误诊会明显影响统计。',
  quickLook: {
    whatItIs:
      'HS 不是单纯感染，也不是卫生差造成的。它与毛囊和免疫炎症有关，常在皮肤相互摩擦和汗腺较多的部位反复发作。',
    whoToSeeFirst:
      '同一部位反复出现疼痛性深部结节、脓肿、流液、窦道或瘢痕，尤其位于腋下、腹股沟、臀沟、会阴或乳房下，应看皮肤科。',
    isGenetic:
      '多数患者不是单基因遗传病，但家族聚集并不少见。若多名亲属受累或发病很早，可向医生询问家族风险和伴随疾病评估。',
    hasTreatment:
      '治疗按严重程度分层，包括外用药、口服抗生素、激素/代谢相关治疗、生物制剂、疼痛和伤口管理，以及去顶术、切除等外科处理。',
    commonDelayReason:
      'HS 常被当作疖肿、毛囊炎、痤疮、巴氏腺囊肿或性传播感染，反复切开引流但没有长期控制炎症和窦道的计划。',
  },
  patientJourney: {
    whenToSuspect: [
      '腋下、腹股沟、臀部、会阴、肛周或乳房下反复出现疼痛性深部结节或脓肿。',
      '同一或对称部位反复流液、形成硬索样窦道、瘢痕或活动受限。',
      '发作影响走路、坐下、睡眠、工作、亲密关系或情绪。',
      '反复按普通感染治疗后很快复发，或家族中有类似病史。',
    ],
    commonWrongTurns: [
      '每次只切开引流或吃短期抗生素，没有建立长期皮肤科管理计划。',
      '把病因归咎于不卫生，导致羞耻和延迟就医。',
      '只处理单个脓肿，没有评估 Hurley 分期、疼痛、窦道、瘢痕和生活质量。',
      '忽视吸烟、体重、摩擦、月经相关波动、炎症性肠病和抑郁焦虑等共病线索。',
    ],
    firstDepartments: ['皮肤科', '皮肤外科', '疼痛/伤口护理门诊', '普外科会诊'],
    diagnosisChecklist: [
      '记录发作部位、频率、持续时间、疼痛程度、是否流液和是否留下瘢痕。',
      '可以带非暴露、非私密、能说明部位和形态的照片，帮助医生了解发作过程。',
      '列出既往抗生素、外用药、生物制剂、手术或切开引流效果。',
      '记录吸烟、体重变化、月经相关发作、家族史、炎症性肠病、关节痛和情绪困扰。',
    ],
    testsToAskAbout: [
      '由皮肤科根据典型部位、反复发作和皮损形态进行临床诊断。',
      '必要时做细菌培养、超声评估窦道范围，或排除其他感染/囊肿/炎症性肠病相关病变。',
      '评估 Hurley 分期、疼痛、生活质量和是否适合生物制剂或手术。',
      '使用生物制剂前的结核、乙肝等感染筛查和长期安全监测。',
    ],
    questionsForDoctor: [
      '我的 HS 处于什么分期？当前目标是减少发作、控制疼痛、处理窦道还是手术？',
      '我适合外用药、口服抗生素、激素相关治疗、生物制剂还是皮肤外科处理？',
      '哪些日常因素会加重摩擦和疼痛？伤口护理和止痛应怎么做？',
      '如果正在备孕、怀孕或哺乳，哪些药物和手术需要调整？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>HS 常在腋下、腹股沟、臀沟、会阴、肛周或乳房下等部位反复发作。患者可能出现疼痛性深部结节、脓肿、流液、窦道、瘢痕、皮肤牵拉和活动受限。</p><p>疼痛、气味、渗出和复发会影响睡眠、走路、坐下、工作、社交和亲密关系。许多患者同时承受羞耻、焦虑或抑郁，需要被认真对待。</p>',
    diagnosis:
      '<p>HS 多数可通过皮肤科临床诊断：典型部位、反复发作和典型皮损三者同时出现时尤其支持。没有一个单项化验能确诊 HS。</p><p>医生会与普通疖肿、毛囊炎、痤疮、表皮样囊肿、巴氏腺囊肿、肛瘘、性传播感染和炎症性肠病相关肛周病变鉴别。超声可帮助判断窦道范围，培养可在疑似继发感染时使用。</p>',
    treatment:
      '<p>治疗按严重程度和目标分层。轻症可使用外用抗菌/抗炎药物、局部护理和减少摩擦；中重度可能需要口服抗生素、激素或代谢相关治疗、生物制剂，以及疼痛和伤口管理。</p><p>已有窦道、反复同部位发作或瘢痕明显时，单纯反复切开引流通常不能解决长期问题，皮肤外科可评估去顶术、局部切除或更大范围切除。治疗也要同时处理吸烟、体重、共病和心理压力。</p>',
    longTermCare:
      '<p>长期管理需要记录发作频率、疼痛评分、用药反应、伤口护理需求和生活质量。柔软透气衣物、减少摩擦、规律复诊和及时处理早期发作，有助于降低负担。</p><p>使用生物制剂或长期免疫调节治疗时，需要按医生要求筛查和监测感染风险。HS 是慢性病，治疗方案可能需要根据阶段多次调整。</p>',
    fertilityOrFamily:
      '<p>HS 可能有家族聚集，但多数不按单基因遗传病处理。育龄患者应在备孕、怀孕或哺乳前与皮肤科和产科讨论用药安全、疼痛控制和手术时机。</p>',
    emergencySigns:
      '<p>高热、寒战、红肿迅速扩大、剧烈疼痛、意识不清、免疫抑制状态下感染、会阴肛周快速加重，或无法控制的出血/脱水，应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'American Academy of Dermatology: Hidradenitis suppurativa diagnosis and treatment',
      type: 'patient-organization',
      url: 'https://www.aad.org/public/diseases/painful-skin-joints/hidradenitis-suppurativa',
    },
    {
      name: 'Mayo Clinic: Hidradenitis suppurativa diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/hidradenitis-suppurativa/diagnosis-treatment/drc-20352311',
    },
  ],
  symptoms:
    '<p>常见腋下、腹股沟、臀沟、会阴、肛周或乳房下反复疼痛性结节、脓肿、流液、窦道和瘢痕，可影响活动、睡眠和情绪。</p>',
  diagnosis:
    '<p>诊断主要靠皮肤科根据典型部位、反复发作和皮损形态判断，必要时用培养、超声或其他检查排除相似感染、囊肿或肛周疾病。</p>',
  treatment:
    '<p>治疗按严重程度分层，包括外用药、口服抗生素、激素/代谢相关治疗、生物制剂、疼痛和伤口管理，以及去顶术或切除等皮肤外科处理。</p>',
  prognosis:
    '<p>HS 往往反复多年，但早期识别、持续皮肤科管理、减少摩擦和处理共病可降低发作、疼痛、瘢痕和生活质量影响。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'dermatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 394,
    name: 'hidradenitis-suppurativa-journey.png',
    url: '/images/diseases/hidradenitis-suppurativa-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseParkinsonDiseaseYoungOnsetEarlyOnset: DiseaseDraft = {
  ...entity(5033, 'disease-parkinson-disease-young-onset-early-onset'),
  name: '帕金森病（青年型、早发型）',
  nameEn: 'Parkinson Disease (Young-onset, Early-onset)',
  alias: '早发型帕金森病、YOPD、EOPD',
  icd10Code: 'G20',
  slug: 'parkinson-disease-young-onset-early-onset',
  oneSentence:
    '早发型帕金森病是指在50岁之前发病的帕金森病，约10-20%有遗传因素，常见致病基因包括LRRK2、PARK2、PINK1和SNCA等，临床表现为运动迟缓、肌强直、静止性震颤和姿势平衡障碍，左旋多巴治疗反应良好但易出现运动并发症。',
  plainName: '年轻时就出现的“手抖、动作慢、身体僵硬”的神经退行病',
  prevalence:
    '帕金森病总体患病率约 1-2/1,000；早发型（<50岁）约占所有帕金森病的5-10%。中国帕金森病患者超过300万，早发型患者因诊断延迟，实际数字可能被低估。',
  searchIntents: [
    '早发型帕金森病 症状',
    '青年帕金森 遗传',
    'YOPD 左旋多巴',
    '帕金森病 运动并发症',
    '早发型帕金森 脑起搏器',
  ],
  quickLook: {
    whatItIs:
      '这是帕金森病的一个亚型，发病年龄在21-50岁之间（<40岁为青年型，40-50岁为早发型）。与晚发型相比，早发型患者进展较慢，但遗传倾向更强，左旋多巴疗效好但更容易出现运动并发症（剂末现象、异动症）。',
    whoToSeeFirst:
      '神经内科（运动障碍专科）。年轻人出现手抖、动作慢、僵硬时应尽快就诊，避免延误诊断。',
    isGenetic:
      '约10-20%的早发型患者有家族史。常见致病基因：LRRK2（常染色体显性）、PARK2（常染色体隐性）、PINK1（常染色体隐性）、DJ-1（常染色体隐性）、SNCA（常染色体显性）。遗传因素在早发型中比晚发型更常见。',
    hasTreatment:
      '目前无法治愈，但药物和手术可显著改善症状。左旋多巴是金标准；多巴胺受体激动剂、MAO-B抑制剂、COMT抑制剂可辅助治疗。脑深部电刺激（DBS）对药物疗效减退或运动并发症严重的患者效果显著。',
    commonDelayReason:
      '年轻人手抖被当作特发性震颤或焦虑；动作迟缓被当作抑郁症或疲劳；单侧症状被当作颈椎病或脑供血不足；基层医院对早发型帕金森病认识不足；未做基因检测明确遗传类型。',
  },
  patientJourney: {
    whenToSuspect: [
      '40-50岁之前出现单侧肢体静止性震颤（手在休息时抖动，活动时减轻）。',
      '动作变慢（系扣子、写字变小、走路拖步）、肌强直（肢体僵硬如铅管或齿轮样）。',
      '面部表情减少（面具脸）、声音低沉、小步前冲步态。',
      '嗅觉减退、便秘、快速眼动睡眠行为障碍（RBD）等前驱症状。',
      '家族中有多人患帕金森病，尤其早发型。',
    ],
    commonWrongTurns: [
      '年轻人手抖当作特发性震颤、焦虑症或甲亢。',
      '动作迟缓和表情减少当作抑郁症或社交焦虑。',
      '单侧肢体僵硬无力当作颈椎病或脑卒中后遗症。',
      '过早大量使用左旋多巴导致早期运动并发症。',
      '未及时评估DBS手术指征，延误最佳手术时机。',
    ],
    firstDepartments: [
      '神经内科（运动障碍专科）',
      '康复医学科',
      '心理科（伴抑郁焦虑时）',
      '遗传咨询科',
    ],
    diagnosisChecklist: [
      '详细记录症状出现时间、首发部位、进展速度和日常影响。',
      '整理既往头部MRI或CT报告（排除其他病因）。',
      '记录嗅觉、睡眠、便秘等非运动症状。',
      '绘制家族谱系图，了解帕金森病家族史。',
      '询问医生是否符合UK脑库临床诊断标准。',
    ],
    testsToAskAbout: [
      '头颅MRI（排除多系统萎缩、进行性核上性麻痹、血管性帕金森综合征等）。',
      '多巴胺转运体PET（DAT-PET，评估黑质纹状体多巴胺能神经元功能）。',
      '基因检测（LRRK2、PARK2、PINK1、DJ-1、SNCA等）。',
      '嗅觉测试、自主神经功能评估、RBD筛查。',
      '心脏123I-MIBG显像（评估心脏交感神经功能）。',
    ],
    questionsForDoctor: [
      '我是早发型还是青年型？进展速度预计如何？',
      '是否有基因突变？这对治疗和预后有什么影响？',
      '什么时候应该开始左旋多巴？如何减少运动并发症？',
      '我是否适合脑深部电刺激（DBS）手术？最佳时机是什么？',
      '非运动症状（抑郁、便秘、睡眠障碍）如何管理？',
      '以后生育时，子女遗传风险有多大？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>早发型帕金森病的核心运动症状与典型帕金森病相同：运动迟缓（bradykinesia）、肌强直（rigidity）、静止性震颤（resting tremor）和姿势平衡障碍（postural instability，早期通常不明显）。与晚发型相比，早发型患者的震颤更常见，进展相对较慢，认知功能保留较好。</p><p>非运动症状包括：嗅觉减退、便秘、快速眼动睡眠行为障碍（RBD）、日间过度困倦、抑郁、焦虑、疼痛、体位性低血压等。运动并发症（剂末现象、开关现象、异动症）出现较早且较严重，这与长期使用左旋多巴有关。部分遗传型（如PARK2）患者可能有足部肌张力障碍等不典型表现。</p>',
    diagnosis:
      '<p>诊断主要基于UK帕金森病协会脑库临床诊断标准，核心是运动迟缓伴肌强直或静止性震颤。支持标准包括：单侧起病、静止性震颤、对左旋多巴反应良好。排除标准包括：反复卒中史、脑外伤史、脑炎史、眼球运动障碍、小脑体征、早期严重自主神经功能障碍等。</p><p>影像学：头颅MRI主要用于排除其他帕金森综合征（如多系统萎缩、进行性核上性麻痹、皮质基底节变性、血管性帕金森综合征）。多巴胺转运体PET（DAT-PET）显示纹状体多巴胺转运体摄取降低，支持诊断。基因检测可明确约10-20%的遗传病因。</p>',
    treatment:
      '<p>药物治疗：左旋多巴是症状控制的金标准，但早发型患者因预期寿命长，需谨慎使用以避免早期运动并发症。通常先使用多巴胺受体激动剂（普拉克索、罗匹尼罗、罗替戈汀）或MAO-B抑制剂（雷沙吉兰、司来吉兰），待症状加重后再加用左旋多巴。COMT抑制剂（恩他卡朋）和腺苷A2A受体拮抗剂（伊曲茶碱）可作为辅助。</p><p>脑深部电刺激（DBS）：对药物疗效减退或出现严重运动并发症的患者效果显著，靶点通常为丘脑底核（STN）或苍白球内侧部（GPi）。早发型患者通常更适合DBS，因为认知功能较好、预期寿命长。康复训练（物理治疗、言语治疗、作业治疗）对维持功能非常重要。</p>',
    longTermCare:
      '<p>长期管理包括：定期评估运动症状（UPDRS评分）、运动并发症、非运动症状（认知、情绪、睡眠、自主神经）和药物副作用；DBS参数调整；预防跌倒；维持社交和工作能力。</p><p>生活管理：规律运动（太极拳、瑜伽、舞蹈、游泳等）有助于改善运动和情绪；高蛋白饮食可能影响左旋多巴吸收，建议餐前1小时或餐后2小时服药；避免跌倒（家中安装扶手、防滑垫）；管理抑郁和焦虑（心理咨询、药物治疗）；维持社交活动；参与患者支持组织。</p>',
    fertilityOrFamily:
      '<p>早发型帕金森病有一定遗传倾向。LRRK2和SNCA为常染色体显性遗传，患者子女有50%风险；PARK2、PINK1和DJ-1为常染色体隐性遗传，患者父母为携带者，兄弟姐妹有25%患病风险。约80%的早发型患者无明确家族史（散发）。基因检测可帮助评估家族风险。产前诊断和PGT可用于已知突变的高风险家庭。</p><p>女性患者在妊娠期间可能症状加重或减轻，左旋多巴在孕期相对安全。计划怀孕前应咨询神经科医生调整用药。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：急性高热、意识改变、严重肌强直和自主神经功能障碍（警惕恶性综合征，尤其调整药物时）；严重跌倒伴骨折；急性吞咽困难导致窒息或吸入性肺炎；严重抑郁伴自杀意念。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Parkinson Disease Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1223/',
    },
    {
      name: "NINDS: Parkinson's Disease Information Page",
      type: 'review',
      url: 'https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease',
    },
    {
      name: 'Orphanet: Early-onset Parkinson disease',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/2828',
    },
  ],
  symptoms:
    '<p>运动迟缓、肌强直、静止性震颤和姿势平衡障碍。非运动症状包括嗅觉减退、便秘、RBD、抑郁等。运动并发症出现较早。</p>',
  diagnosis:
    '<p>基于UK脑库临床诊断标准，结合头颅MRI排除其他病因。DAT-PET支持诊断。基因检测可明确部分遗传病因。</p>',
  treatment:
    '<p>左旋多巴为金标准；多巴胺受体激动剂和MAO-B抑制剂可延缓左旋多巴使用。DBS对药物疗效减退者效果显著。康复训练改善功能。</p>',
  prognosis:
    '<p>早发型进展相对较慢，但预期寿命长，运动并发症管理是关键。DBS可显著改善生活质量。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1223/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3533,
    name: 'parkinson-disease-young-onset-early-onset-journey.png',
    url: '/images/diseases/parkinson-disease-young-onset-early-onset-journey.png',
  },
  tagSlugs: ['neurological', 'genetic-counseling', 'treatable'],
};

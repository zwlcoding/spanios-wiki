import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeuronalCeroidLipofuscinosis: DiseaseDraft = {
  ...entity(2055, 'disease-neuronal-ceroid-lipofuscinosis'),
  name: '神经元蜡样脂褐质沉积症',
  nameEn: 'Neuronal ceroid lipofuscinosis',
  alias: 'NCL；Batten 病；CLN 相关疾病；第二批罕见病目录第 55 项',
  slug: 'neuronal-ceroid-lipofuscinosis',
  oneSentence:
    '神经元蜡样脂褐质沉积症是一组遗传性溶酶体神经退行性疾病，常表现为视力下降、癫痫、发育或认知退步、运动障碍和逐渐加重的照护需求。',
  plainName: '一组会逐渐影响视力、癫痫和发育能力的遗传性神经退行病',
  prevalence:
    '已纳入中国第二批罕见病目录；总体罕见，是儿童期遗传性神经退行性疾病的重要原因之一，不同 CLN 类型起病年龄和进展速度不同。',
  quickLook: {
    whatItIs:
      'NCL 不是一个单一基因病，而是一组 CLN 相关疾病。细胞清除废物的溶酶体功能受影响，蜡样脂褐质样物质堆积，神经元逐渐受损。',
    whoToSeeFirst:
      '儿童出现视力快速下降、癫痫、语言或运动退步、学习倒退或共济失调，应尽快到儿童神经科、眼科和医学遗传科联合评估。',
    isGenetic:
      '多数 NCL 为常染色体隐性遗传，CLN4 等少数类型可为常染色体显性。明确基因有助于预后判断、家族再发风险和治疗机会评估。',
    hasTreatment:
      '多数类型目前以抗癫痫、康复、营养、吞咽、呼吸和舒适照护为主；CLN2 等特定类型在部分地区有酶替代治疗可延缓部分功能下降。',
    commonDelayReason:
      '早期可能被当作普通近视、视网膜病、癫痫、孤独症、学习困难或脑瘫；如果视力、癫痫和退步没有被放在一起看，诊断会延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '原本发育正常的孩子出现视力下降、夜盲、视网膜变性或逐渐失明，同时伴学习或语言退步。',
      '癫痫反复发作，合并肌阵挛、走路不稳、运动能力倒退或认知下降。',
      '儿童或青少年出现进行性行为改变、睡眠问题、注意力下降、语言减少和运动障碍。',
      '家族中有类似视力丧失、癫痫、退行性神经病或近亲婚配史。',
    ],
    commonWrongTurns: [
      '只按近视、普通视网膜病或癫痫治疗，没有追问发育退步和认知变化。',
      '把学习倒退或行为改变归因于心理或教育问题，未做神经退行性疾病评估。',
      '只做单项检查，没有尽快进行眼科电生理、脑 MRI/EEG 和遗传检测。',
    ],
    firstDepartments: [
      '儿童神经科',
      '眼科/遗传眼病门诊',
      '医学遗传科',
      '康复医学科',
    ],
    diagnosisChecklist: [
      '整理发育里程碑、退步时间、癫痫类型、视力变化、学习和行为变化。',
      '带眼底照相、ERG、OCT、视力记录、脑 MRI、EEG 和既往抗癫痫药反应。',
      '记录家族史、近亲婚配、兄弟姐妹症状、流产或儿童夭折史。',
      '如有基因检测，带完整报告并确认 CLN 类型和变异分类。',
    ],
    testsToAskAbout: [
      '遗传检测：NCL/CLN 相关基因组合或外显子/基因组测序。',
      '眼科评估：眼底、OCT、ERG，用于识别视网膜退行性改变。',
      '脑 MRI、EEG、神经发育和运动功能评估。',
      '若疑似 CLN2，询问 TPP1 酶活性、基因确认和是否有酶替代治疗评估机会。',
    ],
    questionsForDoctor: [
      '目前最可能是哪一种 CLN 类型？起病年龄和基因结果是否一致？',
      '是否存在针对该类型的酶替代、基因治疗研究或临床试验？',
      '癫痫、睡眠、吞咽、营养、疼痛和运动功能应该如何长期管理？',
      '兄弟姐妹和未来生育需要做哪些携带者检测、产前或胚胎植入前咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NCL 的共同特点是逐渐进展的神经系统受损，但不同类型起病年龄差异很大。儿童可先出现视力下降、视网膜变性、癫痫、语言和运动退步、学习困难、注意力下降、睡眠问题、肌阵挛、共济失调或行为改变。</p><p>随着病程进展，可能出现认知下降、吞咽困难、营养不良、运动能力丧失、痉挛、疼痛、感染和严重失能。成人型可表现为癫痫、运动障碍、精神或认知改变，视力受累程度因类型而异。</p>',
    diagnosis:
      '<p>诊断需要把临床退行性过程、眼科表现、脑电图、脑 MRI 和遗传检测结合起来。眼底、OCT 和 ERG 可提示视网膜退行性改变；EEG 有助于癫痫评估；MRI 可显示脑萎缩或其他神经退行性线索。</p><p>基因检测是目前最重要的确诊方式，可明确 CLN 类型并指导预后、治疗机会和家族咨询。部分类型还可通过酶活性检测辅助确认，例如 CLN2 相关 TPP1 缺乏。必要时需与线粒体病、白质病、癫痫性脑病、视网膜遗传病和其他溶酶体病鉴别。</p>',
    treatment:
      '<p>多数 NCL 目前没有能逆转疾病的治疗，照护重点是控制癫痫、减少肌阵挛和痉挛、保护吞咽和营养、处理睡眠和行为问题、进行物理/作业/言语康复、辅助沟通和舒适照护。</p><p>特定类型正在或已经有疾病修饰治疗。CLN2 病在部分地区可使用 cerliponase alfa 酶替代治疗以减缓部分运动和语言功能下降；其他类型的基因治疗、酶替代和小分子治疗仍需根据当地可及性和临床试验评估。</p>',
    longTermCare:
      '<p>长期照护应由儿童神经、眼科、遗传、康复、营养、呼吸、胃肠、心理和姑息支持团队协作。家庭可以记录癫痫频率、吞咽、体重、睡眠、疼痛、便秘、感染和运动能力，帮助调整方案。</p><p>学校和家庭需要提前规划视力辅助、沟通工具、移动辅助、居家安全、照护者支持和预立照护目标。随着疾病进展，减少痛苦和维持尊严是核心目标。</p>',
    fertilityOrFamily:
      '<p>多数 NCL 为常染色体隐性遗传，父母同为携带者时每次妊娠患儿风险为 25%；少数如 DNAJC5/CLN4 相关疾病可为常染色体显性。确诊基因后，应为父母、兄弟姐妹和有生育计划的亲属提供遗传咨询、携带者检测和产前/胚胎植入前选择。</p>',
    emergencySigns:
      '<p>癫痫持续状态、反复呛咳或吸入性肺炎、呼吸困难、严重脱水、无法进食、意识明显改变、疼痛难控或发热伴精神差，应急诊处理。接受脑室内酶替代等治疗者，如出现发热、头痛、穿刺/装置部位红肿或神经症状变化，应立即联系治疗中心。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Institute of Neurological Disorders and Stroke: Neuronal Ceroid Lipofuscinosis (Batten Disease)',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/neuronal-ceroid-lipofuscinosis-batten-disease',
    },
    {
      name: 'GeneReviews: Neuronal Ceroid Lipofuscinoses Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/sites/books/n/gene/ncl/',
    },
  ],
  symptoms:
    '<p>常见表现包括进行性视力下降、癫痫、肌阵挛、发育或认知退步、语言和运动能力下降、共济失调、睡眠行为问题、吞咽困难和逐渐加重的失能。</p>',
  diagnosis:
    '<p>诊断结合眼科检查、ERG/OCT、EEG、脑 MRI、酶活性检测和 CLN 相关基因检测，并与其他神经退行性、癫痫和视网膜疾病鉴别。</p>',
  treatment:
    '<p>治疗以抗癫痫、康复、吞咽营养、睡眠行为、疼痛和舒适照护为主；CLN2 等特定类型可评估酶替代治疗或临床试验机会。</p>',
  prognosis:
    '<p>多数类型为进展性疾病，起病年龄和基因类型决定进展速度。早期确诊有助于抓住特定治疗窗口并提前规划照护支持。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 409,
    name: 'neuronal-ceroid-lipofuscinosis-journey.png',
    url: '/images/diseases/neuronal-ceroid-lipofuscinosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

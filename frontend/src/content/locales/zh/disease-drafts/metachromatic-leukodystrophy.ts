import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMetachromaticLeukodystrophy: DiseaseDraft = {
  ...entity(2049, 'disease-metachromatic-leukodystrophy'),
  name: '异染性脑白质营养不良',
  nameEn: 'Metachromatic leukodystrophy',
  alias: 'MLD；芳基硫酸酯酶A缺乏症；第二批罕见病目录第 49 项',
  slug: 'metachromatic-leukodystrophy',
  oneSentence:
    '异染性脑白质营养不良是一种多由 ARSA 酶缺乏引起的遗传性溶酶体贮积病，硫脂堆积会逐渐损伤中枢和外周神经髓鞘。',
  plainName: '一种会让神经髓鞘逐渐受损的遗传性白质病',
  prevalence:
    '已纳入中国第二批罕见病目录；国际资料估计约每 4 万至 16 万人中 1 人受累，部分遗传隔离人群发生率更高。',
  quickLook: {
    whatItIs:
      'MLD 的核心问题是芳基硫酸酯酶 A 功能不足，导致硫脂在神经系统堆积，影响行走、语言、学习、行为、吞咽、视听功能和外周神经。',
    whoToSeeFirst:
      '儿童出现退步、步态异常、反复跌倒或学习行为变化时，可先看儿童神经科；成人以精神或认知改变起病时，需要神经科和精神科协作。',
    isGenetic:
      '多为常染色体隐性遗传，最常见为 ARSA 基因，也可与 PSAP 相关；父母通常是携带者，下一胎复发风险需要遗传咨询评估。',
    hasTreatment:
      '治疗窗口非常关键。无症状或非常早期患儿可能有造血干细胞移植或基因治疗机会；已有明显进展者更依赖症状控制、康复、营养和舒适照护。',
    commonDelayReason:
      '早期可能被当作脑瘫、发育迟缓、周围神经病、学习问题、行为问题或精神疾病；单次 ARSA 酶低还要排除假性 ARSA 缺乏。',
  },
  patientJourney: {
    whenToSuspect: [
      '孩子学会走路后又变得容易摔倒、步态变差、肌张力改变或语言退步。',
      '学龄儿童出现学习下降、注意力和行为改变，同时伴运动或周围神经问题。',
      '青少年或成人出现无法解释的精神症状、认知下降、工作学习能力下降，影像提示白质病变。',
      '家族中有 MLD、白质病、早发神经退行性疾病或不明原因儿童死亡史。',
    ],
    commonWrongTurns: [
      '只按脑瘫、孤独症、心理问题或普通周围神经病处理，没有复查脑 MRI 和代谢/遗传检查。',
      '看到 ARSA 活性低就直接确诊，未结合尿硫脂和基因检测排除假性缺乏。',
      '等到功能明显退化后才转诊，错过移植或基因治疗可能窗口。',
    ],
    firstDepartments: ['儿童神经科', '神经内科', '医学遗传科', '康复医学科'],
    diagnosisChecklist: [
      '整理发育里程碑、退步时间线、走路和语言变化、学习行为变化、癫痫和吞咽问题。',
      '带脑 MRI 原片、神经传导检查、肌电图、眼科听力评估和既往代谢筛查结果。',
      '记录家族史、近亲婚配情况、兄弟姐妹症状和既往流产或儿童夭折史。',
      '若准备讨论治疗窗口，尽量带近期功能评估和疾病进展速度记录。',
    ],
    testsToAskAbout: [
      '脑 MRI 白质病变模式和周围神经传导评估。',
      '芳基硫酸酯酶 A 活性、尿硫脂检测，以及 ARSA/PSAP 基因检测。',
      '确认是否为假性 ARSA 缺乏，避免仅凭酶活性低误诊。',
      '是否仍处在造血干细胞移植或基因治疗可评估窗口，以及需要哪些基线检查。',
    ],
    questionsForDoctor: [
      '孩子或患者属于晚婴型、少年型还是成人型？现在处于哪个疾病阶段？',
      '诊断是否同时有酶学、尿硫脂和基因证据？是否排除了假性缺乏？',
      '是否还有移植或基因治疗评估机会？如果没有，下一步支持治疗重点是什么？',
      '兄弟姐妹和未来生育需要做哪些携带者检测或产前/胚胎植入前咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MLD 可按起病年龄分为晚婴型、少年型和成人型。晚婴型常在幼儿期出现步态异常、频繁跌倒、语言或运动退步、肌张力改变和周围神经病；少年型可能先表现为学习退步、行为改变和运动协调变差。</p><p>成人型可先出现精神症状、人格变化、认知下降或工作学习能力下降。随着进展，可出现癫痫、吞咽困难、视力或听力受损、痉挛、疼痛、营养问题和严重失能。</p>',
    diagnosis:
      '<p>诊断需要结合临床退行性过程、脑 MRI 白质病变、周围神经受累、ARSA 酶活性、尿硫脂和基因检测。ARSA 是最常见相关基因，少数与 PSAP 相关。</p><p>单纯 ARSA 酶活性低不足以确诊，因为假性 ARSA 缺乏可让酶活性降低但不引起典型 MLD。医生通常需要把酶学、尿硫脂和致病变异证据综合判断，并与其他遗传性白质病、线粒体病、炎症性脱髓鞘病和精神疾病鉴别。</p>',
    treatment:
      '<p>治疗选择强烈依赖疾病阶段。尚未出现症状或症状非常早、进展较慢的部分患者，可在有经验中心评估造血干细胞移植。部分国家或地区已批准针对符合条件儿童的自体造血干细胞基因治疗，但可及性、适应证和费用需要逐一确认。</p><p>对于已有明显神经退化的患者，治疗重点是癫痫控制、肌张力和疼痛管理、吞咽和营养支持、呼吸照护、物理/作业/言语康复、辅助器具、心理支持和舒适照护。尽早制定照护目标可减少反复危机。</p>',
    longTermCare:
      '<p>长期随访需要神经、遗传、康复、营养、呼吸、胃肠、骨科和姑息支持团队协作。照护者可以记录吞咽、体重、睡眠、疼痛、痉挛、癫痫和感染情况，以便及时调整方案。</p><p>家庭还需要学校或工作支持、康复资源、护理培训和预立照护计划。随着病程进展，预防误吸、压疮、营养不良和疼痛非常重要。</p>',
    fertilityOrFamily:
      '<p>MLD 通常为常染色体隐性遗传。若父母都是携带者，每次妊娠生育患儿的风险为 25%。确诊后建议为父母、兄弟姐妹和有生育计划的亲属提供遗传咨询，讨论携带者检测、产前诊断和胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>反复呛咳、吸入性肺炎、呼吸困难、持续发热、癫痫持续状态、严重脱水、无法进食、疼痛难控或意识明显改变，应及时急诊。已接受移植或基因治疗的患者还应按治疗中心要求警惕感染、血液系统异常和其他治疗相关风险。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Metachromatic leukodystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/metachromatic-leukodystrophy/',
    },
    {
      name: 'U.S. FDA: FDA Approves First Gene Therapy for Children with Metachromatic Leukodystrophy',
      type: 'official',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapy-children-metachromatic-leukodystrophy',
    },
  ],
  symptoms:
    '<p>可出现运动或语言退步、步态异常、学习和行为改变、周围神经病、癫痫、吞咽困难、视听受损和成人期精神/认知改变。</p>',
  diagnosis:
    '<p>诊断结合脑 MRI、周围神经评估、ARSA 酶活性、尿硫脂和 ARSA/PSAP 基因检测，并需排除假性 ARSA 缺乏。</p>',
  treatment:
    '<p>无症状或极早期患者可评估造血干细胞移植或符合条件时的基因治疗；进展期以癫痫、肌张力、吞咽、营养、呼吸、康复和舒适照护为主。</p>',
  prognosis:
    '<p>病程通常进展性强，起病越早进展往往越快；早期识别治疗窗口和持续支持照护会显著影响功能和生活质量。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 403,
    name: 'metachromatic-leukodystrophy-journey.png',
    url: '/images/diseases/metachromatic-leukodystrophy-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

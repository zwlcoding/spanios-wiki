import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseVonHippelLindauSyndrome: DiseaseDraft = {
  ...entity(2083, 'disease-von-hippel-lindau-syndrome'),
  name: 'Von Hippel-Lindau综合征',
  nameEn: 'Von Hippel-Lindau syndrome',
  alias: 'VHL综合征；希佩尔-林道综合征；第二批罕见病目录第 83 项',
  slug: 'von-hippel-lindau-syndrome',
  oneSentence:
    'VHL 综合征是一种常染色体显性遗传的肿瘤易感综合征，可能在视网膜、脑和脊髓、肾脏、肾上腺、胰腺、内耳等部位反复发生囊肿或肿瘤。',
  plainName: '一个基因变异让多个器官更容易长肿瘤的遗传综合征',
  prevalence:
    '已纳入中国第二批罕见病目录；NCI 资料常用约每 36,000 人 1 例的估计，家族内表现差异很大。',
  quickLook: {
    whatItIs:
      'VHL 基因像肿瘤刹车。刹车失灵后，患者一生中可能出现视网膜或中枢神经系统血管母细胞瘤、透明细胞肾癌、嗜铬细胞瘤、胰腺囊肿/神经内分泌肿瘤和内淋巴囊肿瘤。关键不是等症状，而是按计划筛查。',
    whoToSeeFirst:
      '视网膜血管瘤、脑脊髓血管母细胞瘤、年轻或双侧/多灶肾癌、嗜铬细胞瘤、胰腺多发囊肿或相关家族史，应到医学遗传科、肿瘤遗传门诊或 VHL 多学科门诊。',
    isGenetic:
      '是遗传病，通常常染色体显性遗传。确诊者的一级亲属建议遗传咨询和 VHL 基因检测；没有症状的携带者也需要从儿童或青少年期开始监测。',
    hasTreatment:
      '目前没有把遗传风险“治好”的方法，但系统筛查能在小肿瘤阶段处理并保护视力、神经功能和肾功能。部分 VHL 相关肿瘤可评估手术、消融、放疗或 HIF-2α 抑制剂等方案。',
    commonDelayReason:
      '很多病灶早期无症状，单个肿瘤容易被当成散发病例。如果没有追问家族史和做 VHL 基因检测，就会漏掉其他器官筛查。',
  },
  patientJourney: {
    whenToSuspect: [
      '年轻发病、双侧或多灶肾癌/肾囊肿，或同时有脑、视网膜、胰腺、肾上腺病变。',
      '视力变化、眼底血管瘤，反复头痛、走路不稳、肢体无力或脊髓症状。',
      '高血压、心悸出汗提示嗜铬细胞瘤，或家族中有人确诊 VHL。',
    ],
    commonWrongTurns: [
      '只处理眼部、脑部或肾脏单个病灶，没有启动全身筛查和遗传咨询。',
      '无症状亲属未做检测，等到出现肿瘤症状才发现。',
      '随访间隔不固定，导致可治疗的小病灶长到影响视力、神经或肾功能。',
    ],
    firstDepartments: [
      '医学遗传科',
      '肿瘤遗传/罕见肿瘤门诊',
      '眼底病专科',
      '神经外科/泌尿外科/内分泌科（按病灶）',
    ],
    diagnosisChecklist: [
      '带眼底检查、脑脊髓 MRI、腹部 MRI/CT、肾上腺激素检查和既往手术病理。',
      '整理个人和三代家族肿瘤史、发病年龄、双侧或多灶病变情况。',
      '带 VHL 基因检测报告，未检测者询问是否需要胚系检测。',
    ],
    testsToAskAbout: [
      '是否需要 VHL 胚系基因检测，以及亲属如何进行预测性检测。',
      '眼底、脑脊髓 MRI、腹部 MRI、听力和嗜铬细胞瘤筛查的起始年龄和频率。',
      '每个病灶达到多大或出现什么变化时需要手术、消融、药物或继续观察。',
    ],
    questionsForDoctor: [
      '我目前有哪些器官已受累？未来一年最需要盯住哪几个风险？',
      '亲属检测、儿童筛查和生育选择如何安排？',
      '肾脏病灶治疗如何兼顾肿瘤控制和保留肾功能？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>VHL 可出现视网膜血管母细胞瘤引起视力下降或出血，中枢神经系统血管母细胞瘤引起头痛、呕吐、共济失调、肢体无力或脊髓症状，肾脏病灶可能为囊肿或透明细胞肾癌。</p><p>还可有嗜铬细胞瘤导致阵发性高血压、心悸、头痛、出汗，胰腺囊肿或神经内分泌肿瘤，内淋巴囊肿瘤导致听力下降、耳鸣或眩晕。不同家庭和个人差异很大。</p>',
    diagnosis:
      '<p>诊断结合典型病灶、家族史和 VHL 胚系基因检测。即使只发现一个相关肿瘤，年轻发病、多灶、双侧或有家族史时也应考虑遗传评估。</p><p>确诊后需要建立基线筛查：眼底、脑和脊髓 MRI、腹部 MRI/CT、肾上腺相关生化检查、听力和内耳评估，并按年龄和风险长期复查。</p>',
    treatment:
      '<p>治疗以“早发现、合适时机处理”为核心。不同病灶可选择观察、激光/冷冻、显微手术、消融、放疗、保肾手术或靶向药物，重点是在控制肿瘤的同时保护视力、神经功能、听力和肾功能。</p><p>VHL 相关肾癌和其他不能简单手术的病灶可由多学科评估 HIF-2α 抑制剂 belzutifan 等药物是否适合，具体取决于适应证和可及性。</p>',
    longTermCare:
      '<p>长期管理是一生的筛查计划，不应因暂时没有症状而停止。随访要记录每个病灶的位置、大小、增长速度、既往治疗和功能影响。</p><p>患者最好有固定的遗传/肿瘤多学科团队，避免各器官分散就诊导致信息断裂。</p>',
    fertilityOrFamily:
      '<p>VHL 为常染色体显性遗传。确诊者的子女有遗传风险，应在遗传咨询后讨论亲属检测、儿童监测、产前诊断或胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>突发视力下降、剧烈头痛呕吐、走路不稳或肢体无力、脊髓压迫症状、严重高血压伴心悸出汗胸痛、肉眼血尿或急性腹痛，应及时急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Von Hippel-Lindau disease',
      type: 'official',
      url: 'https://www.cancer.gov/types/brain/patient/vhl-pdq',
    },
  ],
  symptoms:
    '<p>可有视网膜和中枢神经系统血管母细胞瘤、肾囊肿/透明细胞肾癌、嗜铬细胞瘤、胰腺病变、听力下降或眩晕；早期也可能无症状。</p>',
  diagnosis:
    '<p>诊断结合典型多器官病灶、家族史和 VHL 胚系基因检测，确诊后需建立眼底、脑脊髓、腹部、肾上腺和听力筛查计划。</p>',
  treatment:
    '<p>治疗按病灶选择观察、手术、激光/冷冻、消融、放疗或靶向药，核心是长期筛查并在合适时机处理以保护器官功能。</p>',
  prognosis:
    '<p>规律筛查可在早期处理病灶并改善结局；肾癌、中枢神经系统肿瘤和嗜铬细胞瘤风险需要终身管理。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 437,
    name: 'von-hippel-lindau-syndrome-journey.png',
    url: '/images/diseases/von-hippel-lindau-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

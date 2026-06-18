import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHemophilia: DiseaseDraft = {
  ...entity(38, 'disease-hemophilia'),
  name: '血友病',
  nameEn: 'Hemophilia',
  alias: 'Hemophilia A、Hemophilia B、凝血因子 VIII 缺乏、凝血因子 IX 缺乏',
  slug: 'hemophilia',
  oneSentence:
    '血友病是一类遗传性凝血因子缺乏导致的出血性疾病，常见 A 型和 B 型，可出现关节、肌肉、手术或外伤后持续出血。',
  plainName: '血液不容易正常凝住，容易反复出血的遗传病',
  prevalence:
    '血友病 A 较血友病 B 常见，严重程度与凝血因子活性水平有关；女性携带者也可能有出血表现。',
  searchIntents: [
    '血友病 看什么科',
    '血友病 A 和 B 区别',
    '关节反复出血 血友病',
    '血友病 抑制物检测',
    '血友病 女性携带者出血',
  ],
  quickLook: {
    whatItIs:
      '血友病 A 与凝血因子 VIII 缺乏有关，血友病 B 与凝血因子 IX 缺乏有关。凝血因子不足会让出血持续更久，严重者可发生自发性关节或肌肉出血。',
    whoToSeeFirst:
      '反复关节肿痛、肌肉血肿、拔牙/手术/外伤后出血不止、婴幼儿不明原因瘀斑或家族史阳性时，应到血液科、儿童血液科或血友病诊疗中心评估。',
    isGenetic:
      '通常为 X 连锁遗传，与 F8 或 F9 基因有关。男性更常发病，女性携带者也可能因因子水平偏低或其他机制出现症状。',
    hasTreatment:
      '有急性止血、预防治疗、非因子治疗、康复和部分成人基因治疗评估等路径。具体治疗需由血液科根据类型、严重程度、抑制物和可及性制定。',
    commonDelayReason:
      '轻中型患者可能只在拔牙、手术或外伤后出血才被发现；女性携带者的月经过多、产后出血或术后出血也容易被低估。',
  },
  patientJourney: {
    whenToSuspect: [
      '男孩反复大块瘀斑、关节肿痛、肌肉血肿或轻微外伤后出血时间长。',
      '拔牙、割包皮、手术、分娩或外伤后出血反复或延迟出现。',
      '婴幼儿头部碰撞后肿块异常大，或出现不明原因颅内出血。',
      '女性有血友病家族史，同时月经过多、术后出血或产后出血。',
      '化验提示 aPTT 延长、血小板计数和 PT 相对正常。',
    ],
    commonWrongTurns: [
      '只按外伤或儿童好动解释瘀斑，没有追问家族史和凝血检查。',
      '关节出血被当作扭伤、关节炎或感染，延误止血和关节保护。',
      '轻型患者术前没有说明既往出血史，术后才被发现。',
      '女性携带者被认为“不会发病”，没有检测凝血因子水平。',
      '自行使用可能增加出血风险的药物，或在没有专科方案时进行侵入操作。',
    ],
    firstDepartments: [
      '血液科/儿童血液科',
      '血友病诊疗中心或凝血专病门诊',
      '急诊科（头部外伤、深部出血或严重出血时）',
      '康复医学科/骨科（关节保护和血友病性关节病）',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '保存出血事件、家族史、手术/拔牙/外伤后出血记录和既往用药。',
      '检查 PT、aPTT、血小板计数、纤维蛋白原、凝血因子 VIII/IX 活性。',
      '询问是否需要 von Willebrand 病等鉴别检查。',
      '确诊后评估抑制物、关节状态、疫苗和输血/感染相关记录。',
      '有家族计划时准备 F8/F9 基因检测和遗传咨询。',
    ],
    testsToAskAbout: [
      '凝血因子 VIII 和 IX 活性。',
      'aPTT、PT、血小板计数和 von Willebrand 因子相关检查。',
      'F8 或 F9 基因检测。',
      '抑制物检测。',
      '关节超声或 MRI、肝炎/感染相关筛查和治疗安全监测。',
    ],
    questionsForDoctor: [
      '我是 A 型还是 B 型？严重程度属于轻型、中型还是重型？',
      '我需要预防治疗还是按需治疗？家里应怎样识别关节或肌肉出血？',
      '是否有抑制物？这会如何影响治疗选择？',
      '拔牙、手术、运动、旅行和急诊时需要准备什么书面方案？',
      '女性家属和未来生育计划需要哪些检测和咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>血友病可表现为外伤、拔牙或手术后出血时间延长，反复鼻出血、口腔出血、深部肌肉血肿、关节出血、尿血或消化道出血。重型患者可出现自发性关节或肌肉出血，反复关节出血会造成疼痛、活动受限和血友病性关节病。轻型患者可能到成人手术或拔牙后才确诊。</p>',
    diagnosis:
      '<p>诊断依赖凝血因子 VIII 或 IX 活性检测，并结合 aPTT、PT、血小板计数、von Willebrand 因子相关检查和家族史。F8 或 F9 基因检测可用于确认类型、家系筛查和生育咨询。确诊后还需要评估抑制物，因为它会影响止血方案。</p>',
    treatment:
      '<p>管理包括急性出血处理、预防治疗、非因子治疗、围手术期计划、康复和关节保护。部分成人可能适合基因治疗评估，但并非所有患者都适用。具体治疗选择需要血液科结合类型、因子水平、出血频率、抑制物、年龄和可及性制定。</p>',
    longTermCare:
      '<p>长期照护重点是减少关节和肌肉出血、保护关节功能、管理疼痛和运动、监测抑制物、评估治疗安全性，并准备急诊说明卡。患者进行手术、拔牙、侵入检查或开始新药前，应提前联系血液科制定止血计划。</p>',
    fertilityOrFamily:
      '<p>血友病 A 和 B 通常为 X 连锁遗传。女性携带者可能有低因子水平和出血风险。明确家族 F8/F9 变异后，亲属可通过遗传咨询了解携带者检测、产前诊断、胚胎植入前遗传学检测和分娩止血计划。</p>',
    emergencySigns:
      '<p>头部外伤、头痛呕吐或意识改变，颈部/咽喉出血或呼吸困难，腹痛或腰背痛伴疑似内出血，关节或肌肉迅速肿痛，外伤或手术后出血不止，应立即急诊并说明血友病类型和治疗方案。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Hemophilia A',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
    },
    {
      name: 'GeneReviews: Hemophilia B',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1495/',
    },
    {
      name: 'MedlinePlus Genetics: Hemophilia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hemophilia/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>可表现为关节或肌肉出血、外伤/拔牙/手术后出血时间长、反复瘀斑、鼻出血、尿血或深部出血。</p>',
  diagnosis:
    '<p>评估包括凝血因子 VIII/IX 活性、aPTT/PT、von Willebrand 因子相关检查、抑制物检测和 F8/F9 基因检测。</p>',
  treatment:
    '<p>管理包括急性止血、预防治疗、非因子治疗、围手术期计划、康复关节保护和遗传咨询。</p>',
  prognosis:
    '<p>规范预防和综合管理可显著降低关节损伤和严重出血风险；预后受严重程度、抑制物和治疗可及性影响。</p>',
  sourceName: 'GeneReviews: Hemophilia A',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
  categorySlug: 'hematological',
  charityIds: [27, 28, 29],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 337,
    name: 'hemophilia-journey.png',
    url: '/images/diseases/hemophilia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

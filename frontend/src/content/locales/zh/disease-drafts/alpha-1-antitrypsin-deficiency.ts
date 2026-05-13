import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlpha1AntitrypsinDeficiency: DiseaseDraft = {
  ...entity(2006, 'disease-alpha-1-antitrypsin-deficiency'),
  name: 'α1-抗胰蛋白酶缺乏症',
  nameEn: 'Alpha-1-antitrypsin deficiency',
  alias: 'AATD、AAT缺乏症、Alpha-1、遗传性肺气肿、第二批罕见病目录第 6 项',
  slug: 'alpha-1-antitrypsin-deficiency',
  oneSentence:
    'α1-抗胰蛋白酶缺乏症是一种由 SERPINA1 基因变异导致的遗传性疾病，可让肺更容易发生早发 COPD/肺气肿，也可造成婴儿、儿童或成人肝病。',
  plainName: '会同时影响肺和肝的遗传性蛋白缺乏病',
  prevalence:
    '已纳入国家第二批罕见病目录；在欧洲血统人群中较常见，MedlinePlus Genetics 估计约每 1,500-3,500 人 1 例，亚洲人群相对少见。',
  quickLook: {
    whatItIs:
      'α1-抗胰蛋白酶主要由肝脏产生，用来保护肺组织免受炎症酶损伤。缺乏时，肺泡更容易被破坏；异常蛋白也可能堆积在肝脏，引起黄疸、肝硬化或肝癌风险。',
    whoToSeeFirst:
      '成年人反复咳喘、早发 COPD 或肺气肿应先看呼吸与危重症医学科；婴儿黄疸、肝酶异常或成人肝硬化线索应看肝病/消化专科，并联动遗传咨询。',
    isGenetic:
      '与 SERPINA1 基因有关，常按共显性遗传理解。ZZ 型风险最高，SZ 和 MZ 等组合风险不同，吸烟会明显加速肺损伤。',
    hasTreatment:
      '不能用一种方法“治好”所有问题，但可以通过戒烟、避免粉尘烟雾、疫苗、吸入药、肺康复、氧疗、部分患者的 AAT 增补治疗，以及严重肺/肝病时移植评估来降低风险。',
    commonDelayReason:
      '常被长期当作普通哮喘、慢阻肺、反复支气管炎或不明原因肝病处理；如果年轻 COPD、非吸烟者肺气肿或家族中肺/肝病没有提示医生查 AAT，就会延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '45 岁以前出现 COPD、肺气肿、活动后气短、喘鸣或运动耐量下降。',
      '不吸烟或轻度吸烟却出现明显肺气肿，或影像提示下肺为主的肺气肿。',
      '反复呼吸道感染、慢性咳嗽咳痰、体重下降或长期疲劳。',
      '新生儿或婴儿黄疸持续、肝酶异常，或成人出现不明原因肝硬化。',
      '家族中有人有 AATD、早发肺气肿、慢性肝病、肝移植或不明原因肝癌。',
    ],
    commonWrongTurns: [
      '只按哮喘或慢阻肺用药多年，没有查 AAT 水平。',
      '看到患者年轻或不吸烟，反而忽略肺气肿可能。',
      '只关注肺，没有评估肝脏；或只看肝病，没有追问呼吸和家族史。',
      '检测出低 AAT 后没有做表型/基因型确认，也没有提醒一等亲筛查。',
    ],
    firstDepartments: [
      '呼吸与危重症医学科',
      '肝病/消化内科',
      '医学遗传科',
      '儿科肝病专科',
    ],
    diagnosisChecklist: [
      '整理咳嗽、气短、喘鸣、感染次数、吸烟和职业粉尘/烟雾暴露史。',
      '带齐肺功能、胸部 CT、血气/氧饱和度、肝功能、肝脏影像和既往住院记录。',
      '记录新生儿黄疸、肝酶异常、皮下痛性结节或脂膜炎线索。',
      '准备家族中肺气肿、慢阻肺、肝硬化、肝癌、肝移植或 AATD 的信息。',
    ],
    testsToAskAbout: [
      '血清 α1-抗胰蛋白酶水平。',
      'SERPINA1 基因型或 AAT 表型检测，用于确认低水平原因。',
      '肺功能、弥散功能、胸部 CT 和血氧评估。',
      '肝功能、凝血、肝脏超声/弹性成像，必要时肝病进一步评估。',
      '一等亲是否需要筛查和遗传咨询。',
    ],
    questionsForDoctor: [
      '我的基因型或表型是哪一种？对应的肺和肝风险有多高？',
      '目前肺功能和肝脏受累程度如何？需要哪些基线检查？',
      '我是否适合 AAT 增补治疗？它对肺和肝分别有什么作用和限制？',
      '哪些暴露必须避免？疫苗、肺康复和运动计划怎么安排？',
      '家人需要检测吗？孩子或再次生育需要遗传咨询吗？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>α1-抗胰蛋白酶缺乏症可表现为肺病、肝病，少数还可出现皮肤脂膜炎。肺部线索包括活动后气短、喘鸣、慢性咳嗽咳痰、反复呼吸道感染、运动耐量下降和较早出现的肺气肿。吸烟或二手烟、粉尘、空气污染会加速肺损伤。</p><p>肝脏受累可从婴儿期黄疸、肝酶升高开始，也可在成人期表现为肝硬化、腹水、黄疸或肝癌风险增加。不同基因型之间风险差异很大，部分人长期没有明显症状。</p>',
    diagnosis:
      '<p>诊断通常从血清 AAT 水平开始，但单次低水平需要结合炎症状态和进一步检测解释。表型检测或 SERPINA1 基因检测有助于确认类型和家族风险。</p><p>医生还会评估肺和肝的受累程度，包括肺功能、胸部 CT、氧合情况、肝功能、凝血、肝脏影像或弹性成像。年轻 COPD、非吸烟者肺气肿、不明原因肝病和有家族史者都应考虑筛查。</p>',
    treatment:
      '<p>治疗目标是延缓肺损伤、监测肝病、减少感染和暴露风险。重要措施包括绝对戒烟、避免二手烟和粉尘、接种流感/肺炎等疫苗、吸入药物、肺康复、氧疗和规范处理急性加重。</p><p>部分肺部受累患者可由专科评估 AAT 增补治疗。该治疗主要用于提高肺内保护蛋白水平，不能逆转已形成肺气肿，也不能治疗肝内异常蛋白堆积。严重肺病或肝病时可能需要移植中心评估。</p>',
    longTermCare:
      '<p>长期随访包括肺功能、症状和急性加重次数、胸部影像、血氧、肝功能、肝脏影像、肝癌风险筛查和生活暴露管理。患者应保留基因型/表型结果，便于跨院就诊。</p><p>家庭成员检测、戒烟支持、职业暴露调整、运动处方和心理支持都很重要。任何新药、手术或妊娠计划都应告知医生已有 AATD。</p>',
    fertilityOrFamily:
      '<p>AATD 与 SERPINA1 相关，家族成员可能携带不同风险等位基因。一等亲可咨询是否检测 AAT 水平、表型或基因型。</p><p>有生育计划的家庭可通过遗传咨询了解伴侣检测、孩子可能基因型和肺/肝风险，但携带状态不等同于一定发病。</p>',
    emergencySigns:
      '<p>突然明显气短、口唇发紫、胸痛、咯血、高热伴呼吸困难、意识改变，应立即急诊。肝病患者出现呕血、黑便、腹水迅速加重、黄疸明显加深、嗜睡或意识异常，也需要紧急就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Alpha-1 antitrypsin deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/alpha-1-antitrypsin-deficiency/',
    },
    {
      name: 'MedlinePlus: Alpha-1 Antitrypsin Deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/alpha1antitrypsindeficiency.html',
    },
  ],
  symptoms:
    '<p>常见线索包括早发 COPD/肺气肿、气短、喘鸣、慢性咳嗽、反复肺部感染，以及婴儿或成人不明原因肝病。</p>',
  diagnosis:
    '<p>诊断依靠血清 AAT 水平、AAT 表型或 SERPINA1 基因检测，并评估肺功能、胸部 CT 和肝脏受累程度。</p>',
  treatment:
    '<p>管理包括戒烟和避免暴露、疫苗、吸入治疗、肺康复、氧疗、部分患者 AAT 增补治疗，以及严重肺/肝病移植评估。</p>',
  prognosis:
    '<p>预后取决于基因型、是否吸烟、肺和肝受累程度以及能否长期随访；尽早识别和避免烟雾暴露可显著降低肺部风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'respiratory',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 360,
    name: 'alpha-1-antitrypsin-deficiency-journey.png',
    url: '/images/diseases/alpha-1-antitrypsin-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

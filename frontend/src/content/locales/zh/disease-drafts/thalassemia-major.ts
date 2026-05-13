import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseThalassemiaMajor: DiseaseDraft = {
  ...entity(2078, 'disease-thalassemia-major'),
  name: '地中海贫血（重型）',
  nameEn: 'Thalassemia major',
  alias: '重型地贫；输血依赖型地中海贫血；第二批罕见病目录第 78 项',
  slug: 'thalassemia-major',
  oneSentence:
    '重型地中海贫血是一类遗传性珠蛋白生成障碍，婴幼儿期即可出现严重贫血，许多患者需要规律输血、祛铁和终身专科随访。',
  plainName: '从小出现严重贫血、常需要长期输血和祛铁的遗传性血液病',
  prevalence:
    '已纳入中国第二批罕见病目录；地中海贫血基因在人群中的分布差异很大，在地中海沿岸、中东、南亚、东南亚及中国南方部分地区更常见，但重型病例仍属于需要专科管理的罕见严重类型。',
  quickLook: {
    whatItIs:
      '珠蛋白基因变异使血红蛋白生成不足，红细胞不能正常携氧。重型患者常在出生后数月至 2 岁内出现苍白、乏力、生长慢、黄疸、肝脾大和骨骼改变。',
    whoToSeeFirst:
      '婴幼儿严重小细胞低色素贫血、黄疸、肝脾大、生长落后，或家族/产检提示地贫风险，应到儿科血液科或血液科地贫专病门诊。',
    isGenetic:
      '是遗传病，多数按常染色体隐性遗传。父母可能只是携带者，因此患者、父母和计划生育的亲属都应咨询遗传检测和生育风险评估。',
    hasTreatment:
      '基础治疗包括规律输血维持血红蛋白、祛铁治疗防止铁过载，以及心脏、肝脏、内分泌和感染监测。部分患者可评估造血干细胞移植或基因治疗等根治性方案。',
    commonDelayReason:
      '轻中型和携带者可能只表现为小细胞贫血，容易被当作缺铁性贫血反复补铁；重型患儿如果没有做血红蛋白分析和基因检测，会延误规范输血和祛铁。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿苍白、喂养差、体重增长慢、反复乏力或气促，血常规提示小细胞低色素贫血。',
      '黄疸、尿色深、肝脾大、面骨改变、发育或青春期延迟。',
      '父母来自地贫高发地区、产检筛查异常，或家族中有地贫携带者、重型患儿、反复输血史。',
    ],
    commonWrongTurns: [
      '反复按缺铁性贫血补铁，没有检查铁蛋白、血红蛋白电泳/HPLC 和珠蛋白基因。',
      '只输血但不规范祛铁，导致心脏、肝脏和内分泌铁过载。',
      '没有让父母和兄弟姐妹做携带者检测，下一次妊娠或亲属婚育风险未被识别。',
    ],
    firstDepartments: [
      '儿科血液科',
      '血液科地中海贫血专病门诊',
      '医学遗传科/遗传咨询门诊',
      '产前诊断中心（备孕或妊娠）',
    ],
    diagnosisChecklist: [
      '带出生史、喂养生长曲线、贫血发作时间、输血记录、用药和家族来源地。',
      '整理血常规、网织红细胞、胆红素、铁蛋白、血红蛋白电泳/HPLC 和基因检测结果。',
      '保存心脏、肝脏 MRI 铁负荷、超声、内分泌、骨密度和感染筛查资料。',
    ],
    testsToAskAbout: [
      '是否需要 HBB、HBA1/HBA2 等珠蛋白基因检测来确认类型和家系风险。',
      '输血目标血红蛋白、输血间隔、血型抗体筛查和祛铁启动标准是什么。',
      '如何监测铁过载：铁蛋白、肝铁、心肌 T2* MRI、心电/超声、肝功能和内分泌指标。',
    ],
    questionsForDoctor: [
      '我的类型是输血依赖型吗？规律输血和祛铁的目标值是多少？',
      '目前是否有铁过载，祛铁药如何选择和监测副作用？',
      '是否适合造血干细胞移植、基因治疗或临床研究？家属需要做哪些检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>重型地中海贫血常在婴幼儿期出现严重贫血，表现为苍白、乏力、喂养差、生长发育迟缓、黄疸、尿色深、肝脾大和反复感染。长期贫血和骨髓代偿可导致骨骼改变和面容变化，青春期可能延迟。</p><p>规律输血会带来铁过载风险，铁沉积可损害心脏、肝脏和内分泌系统，出现心律失常、心衰、肝纤维化、糖尿病、甲状腺或性腺功能问题。</p>',
    diagnosis:
      '<p>诊断结合血常规的小细胞低色素贫血、网织红细胞、溶血指标、血红蛋白电泳或 HPLC、铁代谢检查和家系调查。基因检测可确认 α 或 β 珠蛋白相关变异，帮助区分携带者、中间型和重型。</p><p>医生会与缺铁性贫血、慢性病贫血、其他溶血性贫血和骨髓疾病鉴别。确诊后还需建立输血、抗体筛查、铁负荷和器官功能基线。</p>',
    treatment:
      '<p>输血依赖型患者通常需要规律红细胞输注，以维持足够血红蛋白、改善生长和抑制骨髓过度造血。长期输血必须配合祛铁治疗，常用去铁胺、地拉罗司或去铁酮等方案由专科按年龄、铁负荷和副作用选择。</p><p>部分患者可评估造血干细胞移植，特定地区和条件下也可能评估基因治疗或临床研究。治疗还包括疫苗、感染预防、叶酸、营养、生长发育、心肝内分泌和骨健康管理。</p>',
    longTermCare:
      '<p>长期随访包括输血反应、同种抗体、铁蛋白、肝铁和心肌铁 MRI、心脏、肝脏、内分泌、骨密度、感染筛查和生活质量。按时输血和坚持祛铁是保护器官的核心。</p><p>患者应保存完整输血和祛铁记录，避免自行补铁，发热、输血反应或药物副作用时及时联系血液科。</p>',
    fertilityOrFamily:
      '<p>地中海贫血是遗传性疾病。患者父母、兄弟姐妹和计划生育的伴侣建议进行携带者筛查和遗传咨询；备孕或妊娠时可讨论产前诊断或胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>明显气促、胸痛心悸、晕厥、持续高热、严重苍白乏力、尿色明显加深、输血后发热皮疹腰痛、腹痛伴脾区疼痛或感染表现，应及时急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Beta thalassemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/beta-thalassemia/',
    },
    {
      name: 'MedlinePlus: Thalassemia',
      type: 'official',
      url: 'https://medlineplus.gov/thalassemia.html',
    },
  ],
  symptoms:
    '<p>婴幼儿可出现严重贫血、苍白、乏力、喂养差、生长慢、黄疸、肝脾大、骨骼改变和青春期延迟；长期输血者需防铁过载。</p>',
  diagnosis:
    '<p>诊断依靠血常规、血红蛋白电泳/HPLC、铁代谢、溶血指标、家系调查和珠蛋白基因检测，并与缺铁性贫血等鉴别。</p>',
  treatment:
    '<p>输血依赖型患者需要规律输血、祛铁、器官铁负荷和内分泌/心肝监测；合适患者可评估造血干细胞移植、基因治疗或临床研究。</p>',
  prognosis:
    '<p>规范输血和祛铁可显著改善生存和生活质量；心脏、肝脏、内分泌铁过载及感染是长期管理重点。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 432,
    name: 'thalassemia-major-journey.png',
    url: '/images/diseases/thalassemia-major-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

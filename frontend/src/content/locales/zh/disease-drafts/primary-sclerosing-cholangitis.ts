import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimarySclerosingCholangitis: DiseaseDraft = {
  ...entity(2068, 'disease-primary-sclerosing-cholangitis'),
  name: '原发性硬化性胆管炎',
  nameEn: 'Primary sclerosing cholangitis',
  alias: 'PSC；原发性硬化性胆管炎；第二批罕见病目录第 68 项',
  oneSentence:
    '原发性硬化性胆管炎是一种慢性胆管疾病，肝内外胆管反复炎症和瘢痕狭窄，导致胆汁淤积、肝损伤，并常与炎症性肠病有关。',
  plainName: '胆管慢慢变窄、胆汁排出受阻的慢性肝胆病',
  prevalence:
    '已纳入中国第二批罕见病目录；PSC 总体罕见，地区和人群差异明显，常见于合并溃疡性结肠炎等炎症性肠病的人群。',
  quickLook: {
    whatItIs:
      'PSC 会让胆管出现炎症、瘢痕和狭窄，胆汁排不出去会伤肝。很多人确诊时没有症状，只是肝胆酶异常或因 IBD 随访被发现。',
    whoToSeeFirst:
      '长期碱性磷酸酶/GGT 升高、黄疸、瘙痒、反复胆管炎，或 IBD 患者出现胆汁淤积，应到肝病/消化科评估。',
    isGenetic:
      'PSC 不是典型单基因遗传病，但免疫、肠道炎症、遗传易感和环境因素可能共同参与。家属是否需要检查取决于病史。',
    hasTreatment:
      '目前没有已证实能稳定阻止 PSC 进展的通用药物。管理重点是处理瘙痒、胆管狭窄和感染，筛查 IBD 与肿瘤风险，晚期肝病评估肝移植。',
    commonDelayReason:
      '早期常无症状，肝酶异常可能被当作脂肪肝、药物性肝损伤或普通胆囊问题；若没有 MRCP 和 IBD 评估，容易漏诊。',
  },
  patientJourney: {
    whenToSuspect: [
      'ALP、GGT 等胆汁淤积指标持续升高，普通超声未解释清楚。',
      '反复皮肤瘙痒、乏力、右上腹不适、黄疸、发热寒战或胆管炎发作。',
      '本人有溃疡性结肠炎、克罗恩病或长期腹泻便血，同时出现肝胆指标异常。',
      'MRCP 或 ERCP 提示胆管多发狭窄和扩张，或出现不明原因肝硬化/门脉高压。',
    ],
    commonWrongTurns: [
      '只按脂肪肝或胆囊炎随访，未追踪持续胆汁淤积型肝酶升高。',
      '只处理肝病，未做结肠镜筛查 IBD；或只治疗肠炎，忽略肝胆异常。',
      '把反复发热腹痛当普通胃肠炎，漏掉胆管炎或胆管狭窄。',
    ],
    firstDepartments: [
      '肝病科/消化内科',
      '炎症性肠病门诊',
      '肝胆外科或内镜中心（胆管狭窄时）',
      '肝移植中心（晚期时）',
    ],
    diagnosisChecklist: [
      '带连续肝功能、ALP、GGT、胆红素、IgG4、自身抗体和病毒性肝炎结果。',
      '带腹部超声、MRCP、ERCP、肝弹性、CT/MRI、肝活检和内镜报告。',
      '记录瘙痒、黄疸、发热寒战、右上腹痛、体重变化、腹水或消化道出血。',
      '带结肠镜和病理结果，尤其是是否合并 IBD。',
    ],
    testsToAskAbout: [
      'MRCP 是否足以支持 PSC，是否需要 ERCP 仅用于治疗性处理或取样。',
      'IgG4 相关硬化性胆管炎、胆管结石、胆管肿瘤、术后狭窄等继发原因如何排除。',
      '是否需要结肠镜筛查 IBD，以及之后肠癌监测频率。',
      '胆管癌、胆囊癌、肝硬化和门脉高压的随访计划。',
    ],
    questionsForDoctor: [
      '我的 PSC 主要累及大胆管、小胆管，还是合并自身免疫性肝炎特征？',
      '目前胆管狭窄需要观察、ERCP 扩张/支架、抗感染，还是需要取样排除肿瘤？',
      '瘙痒、疲劳和脂溶性维生素缺乏该怎么管理？',
      '什么时候需要转肝移植中心？我需要怎样的 IBD 和肿瘤筛查？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PSC 早期常无症状，可能因 ALP、GGT 升高被发现。症状出现时可有疲劳、皮肤瘙痒、右上腹不适、黄疸、深色尿、浅色便、体重下降和脂溶性维生素缺乏。</p><p>胆管狭窄和感染可引起发热、寒战、右上腹痛和黄疸。长期胆汁淤积可进展为肝纤维化、肝硬化、门脉高压、腹水、食管胃静脉曲张或肝功能衰竭。PSC 还与 IBD 和胆管癌、胆囊癌、结直肠癌风险增加相关。</p>',
    diagnosis:
      '<p>诊断通常从胆汁淤积型肝酶异常开始。MRCP 是常用的胆管成像检查，可显示多发狭窄和扩张；ERCP 更多用于治疗狭窄、取样或处理胆管炎，而不是每个人都必须做。</p><p>医生还会排除继发性硬化性胆管炎、IgG4 相关疾病、胆石、胆管肿瘤、缺血性或术后胆管损伤等。没有典型大胆管改变时，可能需要肝活检评估小胆管 PSC 或重叠综合征。确诊或疑似 PSC 的患者通常要评估是否合并 IBD。</p>',
    treatment:
      '<p>目前没有一种药物被普遍证实能改变 PSC 的自然进程。治疗重点是处理症状和并发症：瘙痒可用胆汁酸结合剂、利福平等方案；胆管炎需要抗感染；优势狭窄可由有经验团队评估 ERCP 扩张、支架或取样。</p><p>随访需要监测肝硬化、门脉高压、脂溶性维生素、骨密度以及胆管癌、胆囊病变和结直肠癌风险。失代偿肝硬化、反复胆管炎或难治症状者应评估肝移植。</p>',
    longTermCare:
      '<p>长期管理需要肝病、IBD、内镜、营养、骨健康和移植团队协作。患者应避免自行长期使用保肝药或草药替代规范随访，并与医生讨论酒精、疫苗、感染和药物性肝损伤风险。</p><p>合并 IBD 时，即使肠道症状轻，也需要按医生建议做结肠镜监测。胆管影像、胆囊评估、肿瘤标志物和肝硬化相关筛查的频率由风险决定。</p>',
    fertilityOrFamily:
      '<p>PSC 通常不是单基因遗传病。备孕或妊娠患者需要肝病科和产科共同评估肝功能、胆汁淤积、用药和 IBD 活动度；家属若有肝胆指标异常或 IBD 症状，应主动就医。</p>',
    emergencySigns:
      '<p>发热寒战伴右上腹痛或黄疸、意识改变、呕血黑便、腹水快速增加、严重皮肤瘙痒伴黄疸加重、持续腹痛或体重快速下降，应尽快急诊或联系肝病团队。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Primary Sclerosing Cholangitis',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/primary-sclerosing-cholangitis',
    },
    {
      name: 'Mayo Clinic: Primary sclerosing cholangitis diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/primary-sclerosing-cholangitis/diagnosis-treatment/drc-20355802',
    },
  ],
  symptoms:
    '<p>早期可无症状；可出现疲劳、瘙痒、右上腹不适、黄疸、发热寒战、胆管炎、脂溶性维生素缺乏、肝硬化和 IBD 相关表现。</p>',
  diagnosis:
    '<p>诊断结合胆汁淤积型肝酶异常、MRCP/胆管影像、必要时肝活检或 ERCP，并排除 IgG4 相关病、结石、肿瘤和其他继发性胆管损伤。</p>',
  treatment:
    '<p>目前治疗以管理症状和并发症为主，包括瘙痒治疗、胆管炎抗感染、优势狭窄内镜处理、IBD 和肿瘤监测，晚期或难治病例评估肝移植。</p>',
  prognosis:
    '<p>病程差异很大；风险取决于胆汁淤积程度、胆管狭窄、肝硬化、反复胆管炎、IBD 和肿瘤风险，需长期肝病随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'primary-sclerosing-cholangitis',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 422,
    name: 'primary-sclerosing-cholangitis-journey.png',
    url: '/images/diseases/primary-sclerosing-cholangitis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

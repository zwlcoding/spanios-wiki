import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFamilialHemophagocyticLymphohistiocytosis: DiseaseDraft = {
  ...entity(2026, 'disease-familial-hemophagocytic-lymphohistiocytosis'),
  name: '家族性噬血细胞淋巴组织细胞增生症',
  nameEn: 'Familial hemophagocytic lymphohistiocytosis',
  alias: 'FHL、家族性HLH、原发性噬血细胞综合征、第二批罕见病目录第 26 项',
  slug: 'familial-hemophagocytic-lymphohistiocytosis',
  oneSentence:
    '家族性噬血细胞淋巴组织细胞增生症是一类遗传性免疫调控缺陷，免疫细胞过度激活后可迅速造成持续高热、血细胞减少、肝脾肿大和多器官损害。',
  plainName: '免疫系统失控发炎、可快速危及生命的遗传性 HLH',
  prevalence:
    '已纳入国家第二批罕见病目录；总体非常罕见，很多患者在婴幼儿或儿童期发病，也可在较晚年龄出现。',
  quickLook: {
    whatItIs:
      'FHL 属于原发性/遗传性 HLH。PRF1、UNC13D、STX11、STXBP2 等基因影响免疫细胞清除靶细胞的能力，感染等诱因后炎症反应可能失控。',
    whoToSeeFirst:
      '持续高热、肝脾肿大、血细胞减少、凝血异常、铁蛋白很高或神经症状，应尽快到儿科血液/血液科、免疫科或急诊；病情重时需要重症医学参与。',
    isGenetic:
      '多数 FHL 为常染色体隐性遗传，父母可为无症状携带者。确诊后应做遗传咨询和家系检测。',
    hasTreatment:
      '活动期需要尽快控制过度炎症、治疗感染和器官功能问题。对于典型 FHL，异基因造血干细胞移植通常是争取长期控制或治愈的关键方案。',
    commonDelayReason:
      '起病像严重感染、败血症、肝炎、血液病或风湿免疫病。若高热、血细胞减少、肝脾大、铁蛋白升高和凝血异常同时出现，要尽快想到 HLH。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿或儿童持续高热不退，伴肝脾肿大、淋巴结肿大、皮疹或精神反应差。',
      '血常规提示两系或三系血细胞减少，铁蛋白、甘油三酯、转氨酶升高或纤维蛋白原降低。',
      '反复严重感染后出现炎症风暴，或有抽搐、嗜睡、脑膜脑炎样表现。',
      '兄弟姐妹有类似病史、婴幼儿不明原因死亡、近亲婚配或已知 HLH 相关基因变异。',
    ],
    commonWrongTurns: [
      '只按普通感染反复换抗生素，没有同步评估 HLH 指标。',
      '看到骨髓噬血现象才考虑 HLH，忽略它并非每次都能早期出现。',
      '只处理急性炎症，没有尽快安排遗传检测和移植中心评估。',
      '好转后中断随访，未监测复燃、感染预防、神经系统和移植相关问题。',
    ],
    firstDepartments: ['儿科血液科', '血液科', '临床免疫科', '急诊/重症医学科'],
    diagnosisChecklist: [
      '记录发热天数、最高体温、感染诱因、用药反应、出血、抽搐和意识变化。',
      '带血常规、肝肾功能、凝血、铁蛋白、甘油三酯、纤维蛋白原、骨髓、感染病原学和影像资料。',
      '整理家族中早发重症感染、HLH、婴幼儿死亡或近亲婚配信息。',
      '如已做基因检测、NK 细胞功能、脱颗粒功能或可溶性 IL-2 受体检测，一并带齐。',
    ],
    testsToAskAbout: [
      'HLH 相关实验室评估：血细胞、铁蛋白、甘油三酯、纤维蛋白原、肝功能、凝血和可溶性 IL-2 受体等。',
      '感染触发因素筛查，如 EBV、CMV、细菌、真菌和其他病毒检测。',
      'NK 细胞功能、细胞毒颗粒脱颗粒功能和 HLH 相关基因检测。',
      '是否需要骨髓检查、脑脊液/脑 MRI、重症评估和造血干细胞移植中心会诊。',
    ],
    questionsForDoctor: [
      '目前是否符合 HLH？更像家族性 HLH 还是继发性 HLH？',
      '现在最危险的器官问题是什么？需要进入 ICU 或转移植中心吗？',
      '治疗方案如何控制炎症、预防感染和准备移植？',
      '家属是否需要携带者检测？兄弟姐妹如何筛查和选择供者？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FHL 常表现为急性或亚急性重症炎症：持续高热、肝脾肿大、血细胞减少、乏力、出血倾向、黄疸、肝功能异常、凝血异常和感染风险增加。部分患者有皮疹、淋巴结肿大。</p><p>中枢神经系统受累可表现为烦躁、嗜睡、抽搐、脑膜脑炎样症状或发育倒退。虽然许多患者在婴幼儿期发病，但儿童、青少年甚至成人也可能首次发病。</p>',
    diagnosis:
      '<p>诊断需要结合 HLH 临床和实验室标准、感染/肿瘤/风湿免疫等诱因排查、免疫功能检测和遗传检测。骨髓中看到噬血现象支持诊断，但缺失时不能排除 HLH。</p><p>家族性 HLH 通常通过发现 PRF1、UNC13D、STX11、STXBP2 等相关基因的致病变异来确诊。医生还会评估继发性 HLH、严重感染、白血病/淋巴瘤、肝衰竭和自身炎症病。</p>',
    treatment:
      '<p>活动期治疗需要迅速控制炎症，常涉及糖皮质激素、依托泊苷、环孢素或靶向细胞因子的治疗，并同时处理感染、出血、肝肾功能和重症支持问题。</p><p>对于典型 FHL，异基因造血干细胞移植是重要的根治性选择。治疗和移植时机应由熟悉 HLH 的血液/免疫和移植团队共同决定。</p>',
    longTermCare:
      '<p>随访重点包括复燃风险、感染预防、血细胞和肝功能恢复、神经系统后遗症、营养和心理支持。接受移植者还需监测移植物功能、排异、感染和长期内分泌/生育影响。</p>',
    fertilityOrFamily:
      '<p>多数 FHL 为常染色体隐性遗传。父母通常为携带者，每次妊娠的复发风险需按家系基因结果解释。兄弟姐妹既可能受累，也可能是潜在供者。</p><p>家庭可咨询携带者检测、产前诊断、胚胎植入前遗传学检测和造血干细胞移植供者选择。</p>',
    emergencySigns:
      '<p>持续高热伴精神差、抽搐、意识改变、呼吸困难、明显出血、皮肤瘀斑迅速增加、严重黄疸、尿量减少、血压不稳或休克表现，应立即急诊，并主动说明疑似或确诊 FHL/HLH。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GeneReviews: Familial Hemophagocytic Lymphohistiocytosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1444/',
    },
  ],
  symptoms:
    '<p>常见表现包括持续高热、肝脾肿大、血细胞减少、凝血异常、肝功能异常、出血倾向、感染风险，以及抽搐或意识改变等神经系统受累。</p>',
  diagnosis:
    '<p>诊断结合 HLH 临床和实验室标准、铁蛋白/甘油三酯/纤维蛋白原等指标、感染和肿瘤排查、免疫功能检测及 HLH 相关基因检测。</p>',
  treatment:
    '<p>活动期需尽快用免疫化疗或靶向炎症治疗控制免疫风暴并处理感染和器官功能问题；典型 FHL 通常需评估异基因造血干细胞移植。</p>',
  prognosis:
    '<p>未经及时治疗的活动性 FHL 可迅速危及生命；早期识别、规范控制炎症、感染管理和合适的移植时机可改善生存和长期结局。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'multisystem',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 381,
    name: 'familial-hemophagocytic-lymphohistiocytosis-journey.png',
    url: '/images/diseases/familial-hemophagocytic-lymphohistiocytosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

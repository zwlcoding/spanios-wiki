import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlagilleSyndrome: DiseaseDraft = {
  ...entity(2005, 'disease-alagille-syndrome'),
  name: 'Alagille综合征',
  nameEn: 'Alagille syndrome',
  alias: '阿拉杰里综合征、ALGS、动脉肝发育不良、第二批罕见病目录第 5 项',
  slug: 'alagille-syndrome',
  oneSentence:
    'Alagille 综合征是一种多系统遗传病，常由 JAG1 或 NOTCH2 相关变异引起，可影响肝内胆管、心脏、血管、眼、骨骼、肾脏和面部特征。',
  plainName: '婴幼儿胆汁淤积合并心脏或多系统表现的遗传病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计约每 70,000 名新生儿 1 例，但轻症可能被低估。',
  quickLook: {
    whatItIs:
      'Alagille 综合征不只是肝病。典型线索包括婴幼儿黄疸、胆汁淤积、皮肤瘙痒和黄瘤，也可能同时有肺动脉狭窄等心脏问题、特殊面容、蝶形椎、眼部后胚胎环、肾脏或血管问题。',
    whoToSeeFirst:
      '婴幼儿持续黄疸、白陶土样大便、瘙痒或肝功能异常，应先看儿科消化/肝病专科；同时需要心内科、眼科、遗传科等评估。',
    isGenetic:
      '多与 JAG1 基因变异有关，少数与 NOTCH2 有关，常染色体显性遗传。部分来自父母遗传，部分为新发变异；同一家族表现轻重可差异很大。',
    hasTreatment:
      '目前以支持和并发症管理为主，包括改善胆汁淤积和瘙痒、营养支持、脂溶性维生素补充、心脏和血管问题监测，严重肝病者可能需要肝移植评估。',
    commonDelayReason:
      '早期常被当作普通新生儿黄疸、胆道闭锁或其他胆汁淤积病；如果没有把肝、心、眼、骨骼、面容和家族线索放在一起看，容易延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿黄疸持续不退、直接胆红素升高、尿色深或大便颜色变浅。',
      '明显皮肤瘙痒、抓痕、黄瘤，或脂溶性维生素缺乏、生长发育受影响。',
      '胆汁淤积同时合并心脏杂音、肺动脉狭窄或法洛四联症等先天性心脏病。',
      '眼科提示后胚胎环，脊柱 X 线提示蝶形椎，或有典型面容、肾脏/血管异常。',
      '家族中有人有轻重不一的胆汁淤积、心脏病、特殊面容或确诊 ALGS。',
    ],
    commonWrongTurns: [
      '把持续黄疸当作普通生理性黄疸反复观察。',
      '只在肝病和胆道闭锁之间考虑，没有做多系统评估。',
      '没有评估心脏、眼、脊柱、肾脏和血管问题。',
      '认为父母症状轻就不需要家系验证；ALGS 家族内轻重差异可能很大。',
    ],
    firstDepartments: ['儿科消化/肝病专科', '医学遗传科', '小儿心内科', '眼科'],
    diagnosisChecklist: [
      '整理出生后黄疸、大便颜色、瘙痒、黄瘤、体重增长和营养情况。',
      '带齐肝功能、胆红素、GGT、胆汁酸、腹部超声、肝脏病理和既往胆道评估结果。',
      '准备心脏超声、眼科、脊柱 X 线、肾脏和血管检查资料。',
      '记录家族中胆汁淤积、心脏病、肾病、脑血管事件或类似面容。',
    ],
    testsToAskAbout: [
      '肝功能、直接胆红素、GGT、胆汁酸、凝血和脂溶性维生素水平。',
      '腹部超声、必要时胆道和肝脏进一步评估。',
      'JAG1、NOTCH2 相关基因检测及父母验证。',
      '心脏超声、眼科裂隙灯检查、脊柱 X 线。',
      '肾脏、血压和血管/神经系统风险评估。',
    ],
    questionsForDoctor: [
      '孩子的胆汁淤积是否符合 Alagille 综合征？还需要排除胆道闭锁或其他遗传性胆汁淤积吗？',
      '目前肝病严重程度如何？是否需要肝移植中心评估？',
      '瘙痒、营养和脂溶性维生素应该怎么长期管理？',
      '心脏、眼、肾脏和血管多久筛查一次？',
      '基因结果对父母、兄弟姐妹和再次生育有什么意义？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Alagille 综合征最常见的早期问题是胆汁淤积，表现为黄疸、尿色深、大便变浅、皮肤瘙痒、黄瘤、脂溶性维生素缺乏和生长受影响。肝病严重程度差异很大，有些人轻微，有些会进展到肝硬化或需要移植。</p><p>肝外表现包括肺动脉狭窄或其他先天性心脏病、特殊面容、蝶形椎、眼部后胚胎环、肾脏异常和血管问题。并不是每位患者都会出现全部表现。</p>',
    diagnosis:
      '<p>诊断需要综合胆汁淤积、肝脏检查、多系统体征、家族史和基因检测。JAG1 相关变异最常见，NOTCH2 相关变异较少见。</p><p>医生会与胆道闭锁、其他遗传性胆汁淤积、感染、代谢病和免疫相关肝病鉴别。多系统评估很重要，因为有些线索来自心脏、眼科、脊柱、肾脏或血管检查。</p>',
    treatment:
      '<p>治疗以支持和并发症管理为主。常见措施包括缓解瘙痒、改善胆汁淤积、补充脂溶性维生素、营养支持、监测生长，以及处理骨骼、心脏、肾脏和血管问题。严重肝病、顽固瘙痒或生活质量严重受损时，可能需要肝移植中心评估。</p><p>用药和手术选择应由儿科肝病、心内科、遗传科和移植团队共同判断。</p>',
    longTermCare:
      '<p>长期随访包括肝功能、胆汁淤积指标、营养和生长、维生素水平、凝血、骨骼健康、心脏、眼、肾脏、血压和血管风险。瘙痒和睡眠问题也会明显影响家庭生活，需要主动告诉医生。</p><p>入托入学或跨院就诊时，可准备一份摘要，列明诊断、基因结果、肝病阶段、心脏情况、用药和急症信号。</p>',
    fertilityOrFamily:
      '<p>Alagille 综合征多为常染色体显性遗传，但很多病例为新发变异。父母即使症状很轻，也可能携带相关变异，因此确诊后建议遗传咨询和家系验证。</p><p>有再次生育计划的家庭可咨询产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>出现发热伴精神差、黄疸迅速加重、黑便或呕血、明显出血倾向、腹胀加重、严重脱水、意识改变、胸痛或晕厥，应立即就医。严重心脏病或肝病患儿出现呼吸困难、发绀或喂养明显变差也需要急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Alagille syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/alagille-syndrome/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>常见线索包括婴幼儿胆汁淤积、持续黄疸、尿深便浅、瘙痒、黄瘤、生长受影响，并可合并心脏、眼、脊柱、肾脏、血管和特殊面容等表现。</p>',
  diagnosis:
    '<p>诊断结合胆汁淤积和多系统表现、肝胆检查、心眼骨肾血管评估、家族史，以及 JAG1/NOTCH2 相关基因检测。</p>',
  treatment:
    '<p>治疗以瘙痒和胆汁淤积管理、营养和脂溶性维生素补充、心肾血管监测及严重肝病移植评估为主。</p>',
  prognosis:
    '<p>预后差异很大，取决于肝病、心脏和血管受累程度；早期多学科随访有助于减少营养、出血、心血管和肝病风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'digestive-hepatic',
  charityIds: [50],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 359,
    name: 'alagille-syndrome-journey.png',
    url: '/images/diseases/alagille-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

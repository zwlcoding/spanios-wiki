import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMalignantHyperthermia: DiseaseDraft = {
  ...entity(2046, 'disease-malignant-hyperthermia'),
  name: '恶性高热',
  nameEn: 'Malignant hyperthermia',
  alias: 'MH；麻醉相关恶性高热；第二批罕见病目录第 46 项',
  slug: 'malignant-hyperthermia',
  oneSentence:
    '恶性高热是一种多与遗传易感有关的麻醉急症，平时可能完全没有症状，但接触特定吸入麻醉药或琥珀胆碱后可迅速出现危及生命的高代谢反应。',
  plainName: '遇到特定麻醉药可能突然发作的遗传性麻醉风险',
  prevalence:
    '已纳入中国第二批罕见病目录；真正易感人群常因没有接触诱发麻醉药而未被发现，发作多见于麻醉或围手术期场景。',
  quickLook: {
    whatItIs:
      '恶性高热不是普通发烧，而是骨骼肌钙调控异常导致的高代谢危象。常见诱发因素包括挥发性吸入麻醉药和去极化肌松药琥珀胆碱。',
    whoToSeeFirst:
      '已经怀疑或家族中有人发生过麻醉恶性高热，应在任何手术前先到麻醉评估门诊，并联合医学遗传科或神经肌肉专科评估。',
    isGenetic:
      '多数与 RYR1 相关，也可与 CACNA1S、STAC3 等基因有关，常呈常染色体显性遗传；一次基因检测阴性并不一定完全排除风险。',
    hasTreatment:
      '急性发作需要立即停用诱发药、给 100% 氧气、尽快使用静脉丹曲林，并处理酸中毒、高钾血症、横纹肌溶解和复燃风险。',
    commonDelayReason:
      '患者平时没有症状，甚至曾经麻醉也可能没有发作；如果术前没有主动询问家族麻醉意外史，风险容易被漏掉。',
  },
  patientJourney: {
    whenToSuspect: [
      '本人或亲属在全麻后出现过呼气末二氧化碳快速升高、肌肉僵硬、心跳很快、高热、深色尿或抢救经历。',
      '手术麻醉中出现难以解释的酸中毒、高钾血症、横纹肌溶解或严重心律失常。',
      '有 RYR1 相关肌病、中央轴空病、多微小轴空病、STAC3 相关肌病等神经肌肉病史。',
      '剧烈运动或发热后反复出现严重肌痛、肌无力、深色尿，也应告知医生并评估是否存在相关易感性。',
    ],
    commonWrongTurns: [
      '把术中二氧化碳升高只解释为通气问题或麻醉过浅，延误恶性高热处理。',
      '把术后肌痛、深色尿当作普通劳累，没有检查肌酸激酶、肌红蛋白尿和肾功能。',
      '家族中有人麻醉意外但没有写入病历，下一次手术仍未使用无触发麻醉方案。',
    ],
    firstDepartments: [
      '麻醉评估门诊',
      '医学遗传科',
      '神经肌肉专科',
      '急诊科（疑似急性发作时）',
    ],
    diagnosisChecklist: [
      '整理本人和家族所有麻醉记录、手术记录、抢救记录、用药名称和发作时间线。',
      '记录是否出现过肌肉僵硬、深色尿、肌酸激酶升高、肾损伤、热相关或运动相关横纹肌溶解。',
      '带齐既往基因检测、肌病检查、肌电图、肌肉影像或肌活检结果。',
      '准备一张手术前可给麻醉医生看的风险提示：疑似或确诊恶性高热易感，需避免触发药物。',
    ],
    testsToAskAbout: [
      'RYR1、CACNA1S、STAC3 等相关基因检测及变异解释。',
      '是否需要转诊到有经验中心评估咖啡因-氟烷肌肉收缩试验或同类功能试验。',
      '急性发作后复查血气、电解质、肌酸激酶、肌红蛋白、凝血、肾功能和尿量。',
      '亲属是否需要遗传咨询、分层检测和术前麻醉风险标记。',
    ],
    questionsForDoctor: [
      '我今后哪些麻醉药必须避免？病历和手术同意书上应该怎样标注？',
      '如果必须手术，医院是否能提供无触发麻醉方案，并备有足量丹曲林？',
      '我的家属是否需要检测或在手术前按易感者处理？',
      '急性发作后需要观察多久，怎样监测复燃、肾损伤和心律失常？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>恶性高热常在麻醉诱发后突然出现。早期线索可以是呼气末二氧化碳持续升高、心跳加快、肌肉或咬肌僵硬、酸中毒和氧耗增加；体温升高很重要，但不一定是最早出现的信号。</p><p>病情进展时可出现高钾血症、横纹肌溶解、肌酸激酶显著升高、深色尿、凝血异常、肾损伤、心律失常，严重时可导致心脏骤停。少数易感者还可能在感染发热、剧烈运动或高温环境后出现类似横纹肌溶解表现。</p>',
    diagnosis:
      '<p>诊断首先依赖围麻醉期的临床识别：是否接触挥发性吸入麻醉药或琥珀胆碱，是否出现二氧化碳升高、肌强直、酸中毒、高钾和横纹肌溶解。发作时不要等待所有检查结果再治疗。</p><p>稳定后可由麻醉、遗传和神经肌肉团队复盘麻醉记录，并评估基因检测。RYR1 是最常见相关基因，CACNA1S 和 STAC3 也可能相关；若基因结果不明确，部分中心会考虑肌肉收缩功能试验。需要与通气不足、麻醉过浅、败血症、甲状腺危象、嗜铬细胞瘤危象、神经阻滞剂恶性综合征等情况鉴别。</p>',
    treatment:
      '<p>一旦怀疑恶性高热，应立即停止挥发性麻醉药和琥珀胆碱，换用无触发麻醉，使用高流量 100% 氧气通气，并尽快给予静脉丹曲林。治疗同时要快速降温、纠正酸中毒和高钾血症，监测心律、凝血、尿量、肌红蛋白和肾功能。</p><p>发作控制后仍需在有经验的监护环境中观察，因为症状可能复燃。之后的所有手术、内镜或侵入性操作，都应提前告知麻醉团队并按恶性高热易感者制定麻醉计划。</p>',
    longTermCare:
      '<p>长期管理的核心是预防。患者应保存书面诊断或疑似诊断说明，建议佩戴医疗警示标识，并在每次就医、手术、拔牙或内镜检查前主动告知麻醉风险。家属也应了解麻醉意外史并接受遗传咨询。</p><p>如果有运动后肌痛、深色尿或热相关横纹肌溶解，应与神经肌肉专科讨论运动、发热和高温环境下的风险管理。</p>',
    fertilityOrFamily:
      '<p>恶性高热易感性常可在家族中传递。若发现明确致病变异，一级亲属可考虑针对性检测；未检测或结果不明的亲属，在手术前也应主动告知家族史，由麻醉医生决定是否按易感者处理。备孕家庭可咨询遗传门诊了解复发风险和生育选择。</p>',
    emergencySigns:
      '<p>麻醉中或麻醉后出现二氧化碳快速升高、全身或咬肌僵硬、无法解释的心动过速、高热、酸中毒、高钾、深色尿或心律失常，应立即按恶性高热急症处理。发热或剧烈运动后出现严重肌痛、无力、深色尿或尿量减少，也应急诊评估横纹肌溶解和肾损伤。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Malignant hyperthermia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/malignant-hyperthermia/',
    },
    {
      name: 'Malignant Hyperthermia Association of the United States: Managing A Crisis',
      type: 'patient-organization',
      url: 'https://www.mhaus.org/healthcare-professionals/managing-a-crisis/',
    },
  ],
  symptoms:
    '<p>典型发作与麻醉诱发有关，可出现二氧化碳升高、心动过速、肌肉僵硬、酸中毒、高钾血症、高热、横纹肌溶解和深色尿。</p>',
  diagnosis:
    '<p>诊断依靠围麻醉期表现、诱发药物暴露、血气和生化异常，稳定后可结合 RYR1、CACNA1S、STAC3 等基因检测或专门功能试验评估。</p>',
  treatment:
    '<p>疑似发作时应立即停用触发药物、100% 氧气通气、尽快使用静脉丹曲林，并处理降温、酸中毒、高钾、肾损伤和复燃风险。</p>',
  prognosis:
    '<p>预后很大程度取决于识别和给药速度。提前知道风险、避免触发麻醉药并确保丹曲林可及，可以显著降低可预防风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'multisystem',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 400,
    name: 'malignant-hyperthermia-journey.png',
    url: '/images/diseases/malignant-hyperthermia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

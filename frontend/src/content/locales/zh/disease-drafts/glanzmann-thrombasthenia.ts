import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlanzmannThrombasthenia: DiseaseDraft = {
  ...entity(2037, 'disease-glanzmann-thrombasthenia'),
  name: '血小板无力症',
  nameEn: 'Glanzmann thrombasthenia',
  alias: 'GT、Glanzmann 病、血小板整合素 αIIbβ3 缺陷、第二批罕见病目录第 37 项',
  slug: 'glanzmann-thrombasthenia',
  oneSentence:
    '血小板无力症是一种常染色体隐性遗传的血小板功能障碍，血小板数量常可正常，但不能有效聚集止血，导致反复鼻出血、牙龈出血、皮肤出血点、月经过多或手术后出血。',
  plainName: '血小板数量可能正常、但止血功能不好的遗传性出血病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计全球约每 100 万人 1 例，近亲婚配或部分族群中可更常见。',
  quickLook: {
    whatItIs:
      'GT 由 ITGA2B 或 ITGB3 等基因变异导致血小板表面 αIIbβ3 受体缺乏或功能异常。血小板难以互相黏合成血栓，因此容易黏膜和创伤后出血。',
    whoToSeeFirst:
      '反复鼻出血、牙龈出血、瘀斑、月经过多、拔牙或手术后出血时间很长，应到血液科、儿童血液科或凝血专病门诊评估；大出血直接急诊。',
    isGenetic:
      '这是常染色体隐性遗传病，确诊后建议进行遗传咨询。兄弟姐妹、婚育计划和产前/胚胎遗传咨询可由专业团队评估。',
    hasTreatment:
      '治疗重点是预防和快速控制出血，包括局部止血、抗纤溶药、必要时血小板输注或重组凝血因子 VIIa，并为手术、拔牙、月经和分娩提前制定方案。',
    commonDelayReason:
      '因为血小板计数可能正常，容易被认为只是鼻炎、牙龈问题、月经量大或普通瘀青。反复出血却常规血常规不解释时，要查血小板功能。',
  },
  patientJourney: {
    whenToSuspect: [
      '从儿童期开始反复鼻出血、牙龈出血、皮肤出血点或瘀斑，且出血时间比别人长。',
      '拔牙、外伤、手术、分娩或月经时出血明显增多，但血小板计数常正常或接近正常。',
      '家族中有类似出血、近亲婚配背景，或兄弟姐妹有不明原因严重出血。',
      '常规凝血检查不能解释出血程度，医生怀疑血小板功能问题。',
    ],
    commonWrongTurns: [
      '只反复看耳鼻喉科或口腔科止血，没有转血液科查血小板功能。',
      '以为血小板计数正常就排除血小板相关疾病。',
      '手术、拔牙或分娩前没有告知既往出血史，缺少预防性止血计划。',
      '自行使用阿司匹林、布洛芬等可能加重出血风险的药物。',
    ],
    firstDepartments: ['血液科', '儿童血液科', '凝血专病门诊', '急诊科'],
    diagnosisChecklist: [
      '记录每次鼻出血、牙龈出血、月经量、外伤/拔牙/手术后出血和是否输血。',
      '带血常规、凝血功能、血小板功能检测、输血记录和既往用药清单。',
      '整理家族出血史、近亲婚配情况、兄弟姐妹情况和婚育计划。',
      '准备说明正在使用或近期使用的阿司匹林、NSAIDs、抗凝药、草药或保健品。',
    ],
    testsToAskAbout: [
      '血小板计数和形态、凝血功能，用于排除其他出血原因。',
      '血小板聚集功能检测和流式细胞术评估 αIIbβ3 受体。',
      'ITGA2B、ITGB3 等相关基因检测，并结合家系验证。',
      '计划手术、拔牙、妊娠或分娩前的止血方案和血液制品准备。',
    ],
    questionsForDoctor: [
      '我的出血严重程度属于哪一类？平时需要避免哪些药物和运动？',
      '鼻出血、月经过多或拔牙时，我应该先用哪些家庭和医院处理方案？',
      '我是否需要携带急救卡？急诊时应告诉医生哪些关键信息？',
      '家属是否需要检测？未来怀孕或生育前要做哪些遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GT 主要表现为反复黏膜和皮肤出血，例如鼻出血、牙龈出血、皮肤出血点、紫癜、瘀斑、外伤后出血时间长。女性患者常见月经过多，妊娠和分娩时也可能有较高出血风险。</p><p>严重程度差异很大，同一家族内也可能不同。少数患者可发生消化道出血、颅内出血或关节出血，这些情况需要紧急处理。</p>',
    diagnosis:
      '<p>诊断不能只看血小板计数。GT 患者血小板数量和凝血时间可能接近正常，关键是血小板聚集功能异常和 αIIbβ3 受体缺乏或功能异常。</p><p>常用检查包括血常规、凝血功能、血小板聚集试验、流式细胞术检测 GPIIb/IIIa，以及 ITGA2B、ITGB3 等基因检测。还需要排除血管性血友病、其他血小板功能缺陷和获得性出血原因。</p>',
    treatment:
      '<p>轻中度出血可根据部位使用局部压迫、口腔/鼻腔局部处理、抗纤溶药等。严重出血、手术或分娩时可能需要血小板输注；对血小板输注无效、产生抗体或特殊情况，医生可能使用重组凝血因子 VIIa。</p><p>日常管理包括避免阿司匹林和部分 NSAIDs，维护口腔卫生，避免高出血风险运动，并在任何侵入性操作前提前联系血液科制定止血计划。</p>',
    longTermCare:
      '<p>患者最好保存诊断证明、基因报告、既往输血和用药反应记录，并随身携带急救信息。反复输注血小板者需要监测同种免疫和输血相关风险。</p><p>青春期女性需要月经管理计划。学校、工作场所和家庭应知道严重鼻出血、外伤或头部撞击后的就医原则。</p>',
    fertilityOrFamily:
      '<p>GT 为常染色体隐性遗传。患者的父母多为携带者，兄弟姐妹可能患病或携带。婚育前可进行遗传咨询，讨论伴侣检测、产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>头部外伤后头痛或呕吐、意识改变、持续不止的鼻出血或口腔出血、呕血、黑便、血尿、严重月经过多、产后出血、呼吸困难或明显乏力苍白，应立即急诊并说明 GT 诊断。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Glanzmann thrombasthenia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/glanzmann-thrombasthenia/',
    },
  ],
  symptoms:
    '<p>常见鼻出血、牙龈出血、皮肤出血点和瘀斑、外伤或拔牙后出血时间长、月经过多；严重时可有消化道、颅内或关节出血。</p>',
  diagnosis:
    '<p>血小板计数可正常，诊断重点是血小板聚集功能异常、αIIbβ3 受体检测和 ITGA2B/ITGB3 等基因检测，同时排除其他出血病。</p>',
  treatment:
    '<p>治疗包括局部止血、抗纤溶药、必要时血小板输注或重组凝血因子 VIIa，并在手术、拔牙、妊娠和分娩前制定止血计划。</p>',
  prognosis:
    '<p>规范预防和及时处理出血后，多数患者可以长期生活学习工作；严重出血、输血相关问题和女性月经/分娩管理是重点风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 391,
    name: 'glanzmann-thrombasthenia-journey.png',
    url: '/images/diseases/glanzmann-thrombasthenia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

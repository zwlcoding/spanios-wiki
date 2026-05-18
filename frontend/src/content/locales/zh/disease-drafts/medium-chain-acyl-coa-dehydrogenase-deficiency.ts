import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMediumChainAcylCoADehydrogenaseDeficiency: DiseaseDraft = {
  ...entity(5016, 'disease-medium-chain-acyl-coa-dehydrogenase-deficiency'),
  name: '中链酰基辅酶A脱氢酶缺乏症',
  nameEn: 'Medium-Chain Acyl-CoA Dehydrogenase Deficiency',
  alias: 'MCADD、MCAD 缺乏症',
  icd10Code: 'E71.31',
  slug: 'medium-chain-acyl-coa-dehydrogenase-deficiency',
  oneSentence:
    'MCADD 是最常见的脂肪酸氧化障碍，由 ACADM 基因变异导致中链脂肪酸无法正常分解供能，常在饥饿或感染时诱发低酮性低血糖。',
  plainName: '身体在饿的时候没法用脂肪来“烧”的一种代谢病',
  prevalence:
    '全球发病率约 1/15,000；北欧人群更高（如荷兰约 1/8,500）。中国新生儿筛查已逐步覆盖，实际检出率与筛查普及程度相关。',
  searchIntents: [
    'MCADD 新生儿筛查阳性怎么办',
    '中链酰基辅酶A脱氢酶缺乏症 症状',
    'MCADD 不能饿多久',
    'MCADD 饮食注意',
    '脂肪酸氧化障碍 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是一种常染色体隐性遗传的脂肪酸氧化障碍。由于中链酰基辅酶A脱氢酶功能不足，身体在糖原耗尽后无法有效利用脂肪供能，导致饥饿或生病时容易出现低酮性低血糖。',
    whoToSeeFirst:
      '新生儿筛查阳性者先看新生儿科或遗传代谢科；已确诊者由遗传代谢科长期随访。出现嗜睡、呕吐、意识模糊时立即急诊。',
    isGenetic:
      '常染色体隐性遗传。父母通常为携带者，再次生育有 25% 风险。家族成员可通过基因检测确认携带状态。',
    hasTreatment:
      '没有根治方法，但通过避免长时间空腹、生病时及时补糖、规律随访，绝大多数患者可以正常生活。具体方案由遗传代谢科医生个体化制定。',
    commonDelayReason:
      '新生儿筛查阳性后未按时复查；家长误以为是“小问题”而忽略；生病时未及时补糖导致代谢危象被当作普通胃肠炎处理。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查提示 C8 酰基肉碱升高或 MCADD 可疑阳性。',
      '婴儿在饥饿、感染、发热或腹泻后出现嗜睡、呕吐、反应差、抽搐。',
      '幼儿或儿童在夜间空腹时间过长后晨起精神差、出汗、面色苍白。',
      '家族中有婴儿期不明原因猝死、类似代谢病史或 MCADD 诊断史。',
      '血检提示低酮性低血糖，尤其在不伴明显酮症的情况下。',
    ],
    commonWrongTurns: [
      '新生儿筛查阳性后未在规定时间内复查，或复查前已出现症状。',
      '把代谢危象的呕吐、嗜睡当作普通胃肠炎或病毒感染，未及时补糖和就医。',
      '认为“孩子看起来正常”就忽略饮食管理和空腹限制。',
      '家长自行尝试“食疗”或断食，未在代谢科医生指导下进行。',
      '急诊就医时未主动告知医生 MCADD 诊断和应急处理需求。',
    ],
    firstDepartments: [
      '新生儿科/儿科遗传代谢科',
      '急诊科（出现嗜睡、呕吐、意识改变时）',
      '遗传咨询门诊',
      '营养科（饮食管理指导）',
    ],
    diagnosisChecklist: [
      '携带新生儿筛查报告、复查结果和既往血酰基肉碱谱资料。',
      '记录发病时的空腹时间、感染情况、症状出现顺序和持续时间。',
      '如有低血糖发作，带上当时的血糖、血酮、电解质和肝功能结果。',
      '向医生确认是否需要 ACADM 基因检测及家系验证。',
    ],
    testsToAskAbout: [
      '血酰基肉碱谱（C6-C10，尤其 C8 升高是特征性表现）。',
      '尿液有机酸分析（己酰甘氨酸、辛酰甘氨酸、辛二酰甘氨酸升高）。',
      'ACADM 基因检测。',
      '低血糖发作时的同步血糖、血酮、乳酸、氨和肝功能检查。',
    ],
    questionsForDoctor: [
      '不同年龄段最长可以空腹多久？夜间需要加餐吗？',
      '发热、呕吐、腹泻等生病时应该怎么调整喂养和补糖？',
      '家里需要常备哪些应急食品和医疗信息卡？',
      '上幼儿园或学校时需要告知老师哪些注意事项？',
      '是否需要佩戴医疗警示标识？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MCADD 患者平时可无明显症状，但在代谢应激（如饥饿、感染、发热、手术）时，由于无法利用中链脂肪酸供能，糖原耗尽后会出现低酮性低血糖。典型表现包括：嗜睡、呕吐、反应迟钝、出汗、抽搐，严重时可进展为昏迷甚至猝死。</p><p>新生儿期至婴幼儿期是高发窗口，常在出生后 3-24 个月首次发病。部分患者可能终生无症状，仅在新生儿筛查中被发现。少数晚发型可在成年后因长时间禁食、饮酒或剧烈运动后首次出现症状。</p>',
    diagnosis:
      '<p>新生儿筛查通过串联质谱检测血酰基肉碱谱，发现 C8（辛酰肉碱）升高是最常见的初筛线索。确诊需结合尿液有机酸分析（己酰甘氨酸、辛酰甘氨酸升高）和 ACADM 基因检测。</p><p>对于筛查阳性但尚未确诊者，应在专科医生指导下复查，避免在空腹状态下采血。临床怀疑但筛查阴性者，可在代谢专科进行血酰基肉碱谱、尿有机酸和基因检测的综合评估。</p>',
    treatment:
      '<p>MCADD 的管理核心是避免长时间空腹，并在生病时及时提供足够葡萄糖。不同年龄段的最大安全空腹时间不同，应由代谢专科医生根据个体情况制定。</p><p>急性发作时应立即补充葡萄糖（口服或静脉），并纠正电解质紊乱。长期管理包括：规律进餐、夜间适当加餐、生病时增加碳水化合物摄入、家中常备葡萄糖凝胶或含糖饮料。L-肉碱补充的疗效尚存争议，是否使用应由医生评估。</p>',
    longTermCare:
      '<p>长期随访包括：定期评估生长发育、营养状态、肝功能和心脏情况；复查酰基肉碱谱以监测代谢控制；根据年龄调整空腹耐受时间和饮食方案。</p><p>家属应建立应急计划：包括生病时的补糖流程、医疗信息卡内容、就近医院联系方式。避免让孩子参与可能导致长时间禁食的高强度运动或比赛，除非经医生评估许可。</p>',
    fertilityOrFamily:
      '<p>MCADD 为常染色体隐性遗传。确诊患者及家属可通过遗传咨询了解：携带者筛查、再次生育的复发风险、产前诊断或胚胎植入前遗传学检测的选择。</p><p>患者的兄弟姐妹应尽早进行筛查或基因检测，以便及时发现无症状或症状前个体并开始预防性管理。</p>',
    emergencySigns:
      '<p>以下情况应立即急诊就医并主动告知 MCADD 诊断：持续呕吐无法进食、嗜睡或意识改变、抽搐、呼吸急促、面色苍白伴冷汗。就医时应携带医疗应急卡，说明需要尽快补糖。</p><p>如果患者意识清醒但无法经口摄入足够碳水化合物，可先尝试口服葡萄糖凝胶或含糖饮料，同时尽快前往医院。不要等待症状自行缓解。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
    },
    {
      name: 'NCBI StatPearls: Medium-Chain Acyl-CoA Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560837/',
    },
    {
      name: 'Orphanet: Medium-chain acyl-coenzyme A dehydrogenase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/42',
    },
  ],
  symptoms:
    '<p>平时可无症状，但在饥饿、感染等应激时出现低酮性低血糖，表现为嗜睡、呕吐、抽搐，重者可昏迷。</p>',
  diagnosis:
    '<p>新生儿筛查通过血酰基肉碱谱发现 C8 升高；确诊需结合尿有机酸分析和 ACADM 基因检测。</p>',
  treatment:
    '<p>避免长时间空腹，生病时及时补糖；急性发作时静脉补充葡萄糖；长期管理由遗传代谢科个体化制定。</p>',
  prognosis:
    '<p>早期诊断和规范管理下，绝大多数患者可正常生活；未及时识别者在代谢应激时有猝死风险。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3516,
    name: 'medium-chain-acyl-coa-dehydrogenase-deficiency-journey.png',
    url: '/images/diseases/medium-chain-acyl-coa-dehydrogenase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

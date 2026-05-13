import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTransthyretinAmyloidosis: DiseaseDraft = {
  ...entity(2080, 'disease-transthyretin-amyloidosis'),
  name: '转甲状腺素蛋白淀粉样变性',
  nameEn: 'Transthyretin amyloidosis',
  alias: 'ATTR；hATTR；ATTR-CM；ATTR-PN；第二批罕见病目录第 80 项',
  slug: 'transthyretin-amyloidosis',
  oneSentence:
    '转甲状腺素蛋白淀粉样变性是 TTR 蛋白错误折叠并沉积在神经、心脏等组织中的系统性疾病，可造成周围神经病、心肌病和自主神经/胃肠症状。',
  plainName: '异常蛋白沉积在神经和心脏等部位的系统性疾病',
  prevalence:
    '已纳入中国第二批罕见病目录；遗传型 ATTR 在不同家系和地区差异很大，野生型 ATTR 心肌病多见于老年人但常被低估。',
  quickLook: {
    whatItIs:
      'TTR 蛋白不稳定后会形成淀粉样沉积。遗传型由 TTR 基因变异引起，可影响神经和心脏；野生型没有遗传变异，常以心脏受累为主。',
    whoToSeeFirst:
      '不明原因周围神经病变、双侧腕管综合征、体位性低血压、腹泻便秘交替、体重下降，或心肌肥厚/心衰但常见原因解释不了，应到神经内科、心内科或淀粉样变多学科门诊。',
    isGenetic:
      '遗传型 ATTR 为常染色体显性遗传，但携带变异不等于一定发病；确诊后应做 TTR 基因检测并提供家系遗传咨询。野生型通常不按遗传病筛查家属。',
    hasTreatment:
      '治疗已经从单纯对症进入靶向时代，可按表型评估 TTR 稳定剂、RNA 沉默药物、器官支持和少数情况下移植；具体取决于心脏/神经受累、基因型和地区可及性。',
    commonDelayReason:
      '早期像糖尿病神经病、颈腰椎病、腕管综合征、普通心衰或高血压心脏病，若未想到淀粉样变并排除 AL 型，可能多年后才确诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '进行性手脚麻木疼痛、无力、走路不稳，合并体位性低血压、腹泻便秘、尿潴留或性功能问题。',
      '心肌肥厚、射血分数保留心衰、心律失常、传导阻滞，尤其合并双侧腕管综合征、椎管狭窄或肌腱断裂史。',
      '家族中有类似神经病、心衰、早发死亡或已知 TTR 变异。',
    ],
    commonWrongTurns: [
      '只按糖尿病神经病、腰椎病或普通心衰处理，没有把神经、心脏和自主神经症状合并分析。',
      '未先排除 AL 淀粉样变，导致治疗方向错误。',
      '确诊遗传型后没有给一级亲属做遗传咨询和有计划的随访。',
    ],
    firstDepartments: [
      '神经内科',
      '心内科/心肌病门诊',
      '淀粉样变多学科门诊',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '整理麻木疼痛、无力、跌倒、胃肠、自主神经和心脏症状时间线。',
      '带肌电图/神经传导、心电图、超声心动图、心脏 MRI、骨显像、NT-proBNP/肌钙蛋白和肾功能资料。',
      '带血清/尿免疫固定电泳、游离轻链、组织活检刚果红染色和 TTR 基因检测结果。',
    ],
    testsToAskAbout: [
      '是否已经排除 AL 淀粉样变：血清和尿免疫固定电泳、游离轻链是否完整。',
      '是否需要 TTR 基因检测来区分遗传型和野生型，并指导亲属筛查。',
      '心脏表型是否可用骨显像、心脏 MRI 或活检确认；神经表型是否需要肌电图和小纤维/自主神经评估。',
    ],
    questionsForDoctor: [
      '我主要是心脏型、神经型还是混合型？疾病活动和器官损伤如何量化？',
      '适合 TTR 稳定剂、RNA 沉默药物、支持治疗或临床研究吗？可及性和监测要求是什么？',
      '亲属何时做基因检测和随访？如果携带变异但没有症状，应该怎么监测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>ATTR 可表现为周围神经病变，如手脚麻木、疼痛、烧灼感、无力、肌肉萎缩和走路不稳；自主神经受累可导致体位性低血压、晕厥、腹泻便秘交替、恶心、早饱、排尿问题和性功能障碍。</p><p>心脏受累可表现为心肌肥厚、射血分数保留心衰、心律失常、传导阻滞、气短、水肿和运动耐量下降。腕管综合征、腰椎管狭窄、肌腱断裂、眼部或肾脏受累也可成为线索。</p>',
    diagnosis:
      '<p>诊断首先要区分 ATTR 和 AL 淀粉样变，通常需要血清/尿免疫固定电泳和血清游离轻链。ATTR 心肌病可通过骨显像、心脏 MRI、超声和必要时活检确认；神经受累通过神经传导、肌电图和自主神经评估。</p><p>TTR 基因检测用于区分遗传型和野生型，并指导亲属咨询。组织活检如脂肪、神经、心肌或其他受累组织可用刚果红染色和蛋白分型确认淀粉样沉积。</p>',
    treatment:
      '<p>治疗取决于主要受累器官和可及性。ATTR 心肌病可评估 TTR 稳定剂如 tafamidis 及心衰容量管理；遗传型多发神经病可评估降低 TTR 生成的 RNA 沉默药物等靶向治疗。</p><p>对症治疗包括神经痛控制、体位性低血压和胃肠自主神经症状处理、心律失常和传导阻滞管理、营养支持、康复和跌倒预防。少数特定患者可讨论移植或临床研究。</p>',
    longTermCare:
      '<p>长期随访应分器官记录神经评分、步行能力、自主神经症状、体重营养、心脏超声/心脏 MRI、NT-proBNP、肌钙蛋白、心律、肾功能和药物副作用。</p><p>患者应把神经科、心内科、遗传咨询、康复和营养管理整合在同一计划中，避免只按单一器官病处理。</p>',
    fertilityOrFamily:
      '<p>遗传型 ATTR 为常染色体显性遗传，一级亲属可在充分知情和遗传咨询后选择预测性检测。携带者需要按年龄、基因型和家族发病特点制定神经和心脏监测计划。</p>',
    emergencySigns:
      '<p>新发或加重胸痛、明显气短、水肿迅速加重、晕厥、心率过慢或过快、跌倒外伤、严重脱水、持续呕吐腹泻或神经功能突然变化，应及时急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Transthyretin amyloidosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/transthyretin-amyloidosis/',
    },
    {
      name: 'MedlinePlus: Tafamidis',
      type: 'official',
      url: 'https://medlineplus.gov/druginfo/meds/a622032.html',
    },
  ],
  symptoms:
    '<p>可有进行性周围神经病、自主神经症状、腕管综合征、胃肠问题、心肌肥厚、心衰、心律/传导异常、肾或眼部受累。</p>',
  diagnosis:
    '<p>诊断需先排除 AL 淀粉样变，再结合 TTR 基因检测、心脏骨显像/ MRI/超声、神经电生理和必要的组织活检及蛋白分型。</p>',
  treatment:
    '<p>治疗按心脏型、神经型或混合型评估 TTR 稳定剂、RNA 沉默药物、心衰和神经自主症状支持、康复、遗传咨询及少数移植/临床研究选择。</p>',
  prognosis:
    '<p>预后取决于遗传型或野生型、心脏和神经受累程度以及能否早期使用合适治疗；越早识别并整合多学科管理越有利。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'multisystem',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 434,
    name: 'transthyretin-amyloidosis-journey.png',
    url: '/images/diseases/transthyretin-amyloidosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

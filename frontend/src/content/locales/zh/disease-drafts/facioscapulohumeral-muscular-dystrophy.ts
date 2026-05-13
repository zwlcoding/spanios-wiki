import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFacioscapulohumeralMuscularDystrophy: DiseaseDraft = {
  ...entity(2025, 'disease-facioscapulohumeral-muscular-dystrophy'),
  name: '面肩肱型肌营养不良症',
  nameEn: 'Facioscapulohumeral muscular dystrophy',
  alias: 'FSHD、面肩肱型肌营养不良、FSHD1、FSHD2、第二批罕见病目录第 25 项',
  slug: 'facioscapulohumeral-muscular-dystrophy',
  oneSentence:
    '面肩肱型肌营养不良症是一种遗传性肌病，主要导致面部、肩胛带和上臂肌肉逐渐无力，也可影响躯干、下肢、听力、视网膜或呼吸功能。',
  plainName: '先影响面部表情、肩胛和抬手能力的遗传性肌营养不良',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计患病率约每 20,000 人 1 例，其中约 95% 为 FSHD1。',
  quickLook: {
    whatItIs:
      'FSHD 与 4 号染色体 D4Z4 区域调控异常有关，导致通常应沉默的 DUX4 表达异常。典型表现是面肌、肩胛周围和上臂肌无力，进展速度差异很大。',
    whoToSeeFirst:
      '笑不对称、闭眼不全、不能吹口哨、肩胛骨翘起、抬手过头困难或足下垂，应看神经肌肉专科/神经内科，并联动康复。',
    isGenetic:
      'FSHD1 多为常染色体显性遗传，也可新发；FSHD2 机制更复杂，涉及 SMCHD1 等基因和 permissive 4qA 背景。需要专门遗传检测和咨询。',
    hasTreatment:
      '目前没有根治药物，管理重点是规律评估、个体化运动和康复、矫形支具、疼痛和疲劳管理、眼耳呼吸监测，以及必要时肩胛固定等手术评估。',
    commonDelayReason:
      '症状常很慢、可左右不对称，容易被当作姿势问题、肩周炎、颈椎病、运动损伤或普通无力。典型面肩胛模式和针对 FSHD 的遗传检测很关键。',
  },
  patientJourney: {
    whenToSuspect: [
      '不能吹口哨、用吸管困难、笑容不对称、闭眼不全或睡觉时眼睛闭不严。',
      '肩胛骨翘起、肩膀下垂、抬手过头、梳头、举物或投掷困难。',
      '走路容易绊倒、足下垂、上楼困难，或腰椎前凸、腹部肌无力。',
      '家族中有人类似肩胛翘起、面部无力、肌营养不良或走路变差。',
    ],
    commonWrongTurns: [
      '只按肩关节、颈椎或姿势问题治疗，没有做神经肌肉评估。',
      '肌酸激酶不高或只轻度升高时排除肌病。',
      '做了普通肌病基因 panel，但没有覆盖 FSHD 所需的 D4Z4 检测。',
      '忽略眼睛闭合不全、听力、呼吸、疼痛和疲劳等长期问题。',
    ],
    firstDepartments: [
      '神经内科/神经肌肉病门诊',
      '康复医学科',
      '医学遗传科',
      '骨科/矫形门诊',
    ],
    diagnosisChecklist: [
      '记录最早症状、进展速度、左右差异、运动能力、跌倒和家族史。',
      '带肌酸激酶、肌电图、肌肉 MRI、肺功能、心电图/心超、听力和眼科资料。',
      '带既往基因检测报告，确认是否做过 FSHD1 D4Z4 收缩和 FSHD2 相关检测。',
      '记录疼痛、疲劳、睡眠、工作学习影响和辅助器具使用情况。',
    ],
    testsToAskAbout: [
      'FSHD 专项遗传检测：D4Z4 重复数/甲基化、4qA permissive 背景，必要时 SMCHD1 等。',
      '神经肌肉查体、肌酸激酶、肌电图和肌肉 MRI，用于排除相似肌病。',
      '肺功能，尤其有明显躯干无力、脊柱畸形、睡眠呼吸症状或轮椅使用者。',
      '眼科视网膜、听力评估，儿童或早发严重病例尤其需要。',
    ],
    questionsForDoctor: [
      '我的表现符合 FSHD1 还是 FSHD2？遗传检测是否足够明确？',
      '哪些肌群受累最明显？是否需要肌肉 MRI 或肺功能基线？',
      '什么运动强度合适？哪些动作可能加重疼痛或损伤？',
      '肩胛固定、足托、支具或助行器何时考虑？',
      '家人需要检测吗？生育前应如何做遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FSHD 常在青少年或成年早期出现，也可更早或更晚。典型表现包括面部表情减少、不能吹口哨、闭眼不全、笑容不对称、肩胛骨翘起、抬手过头困难和上臂无力。症状可左右不对称。</p><p>部分患者随后出现腹肌、髋部、下肢和足背屈无力，导致腰椎前凸、走路绊倒或足下垂。慢性疼痛、疲劳较常见。少数人有听力下降、视网膜血管异常、呼吸肌受累或需要轮椅。</p>',
    diagnosis:
      '<p>诊断首先靠典型面肩胛肱分布的肌无力、家族史和神经肌肉查体。肌酸激酶可正常或轻度升高，肌电图和肌肉 MRI 可帮助排除其他肌病。</p><p>确诊需要 FSHD 专项遗传检测。FSHD1 与 4qA permissive 背景上的 D4Z4 收缩相关；FSHD2 常涉及 D4Z4 低甲基化和 SMCHD1 等基因。普通肌病 panel 不一定能检测 FSHD。</p>',
    treatment:
      '<p>目前没有根治药物。管理重点是规律、不过度的有氧和力量训练，康复评估，拉伸，疼痛和疲劳处理，防跌倒，足托或支具，以及工作学习适配。</p><p>肩胛固定手术可在部分患者中改善抬臂功能，但需要严格选择。闭眼不全需眼科保护角膜；有呼吸或睡眠症状者需肺功能和睡眠评估。</p>',
    longTermCare:
      '<p>长期随访应记录肌力、步态、跌倒、疼痛、疲劳、肺功能、眼耳问题和辅助器具需求。运动计划应个体化，避免长期卧床不动，也避免过度训练导致疼痛加重。</p>',
    fertilityOrFamily:
      '<p>FSHD1 多为常染色体显性遗传，患者子女可能有遗传风险；FSHD2 遗传机制更复杂。由于严重程度差异大且可新发或嵌合，建议由熟悉 FSHD 的遗传门诊解释检测结果。</p>',
    emergencySigns:
      '<p>突然明显呼吸困难、夜间憋醒伴白天嗜睡、反复肺部感染、吞咽呛咳明显、快速加重到不能行走、严重跌倒外伤，或闭眼不全导致眼痛视力下降，应及时就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Facioscapulohumeral muscular dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/facioscapulohumeral-muscular-dystrophy/',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Facioscapulohumeral muscular dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/000707.htm',
    },
  ],
  symptoms:
    '<p>常见面部无力、闭眼不全、不能吹口哨、肩胛翘起、抬臂困难、上臂无力、足下垂、腰椎前凸、疼痛和疲劳。</p>',
  diagnosis:
    '<p>诊断结合典型面肩胛肱分布、家族史、神经肌肉查体、CK/肌电图/肌肉 MRI，并通过 FSHD 专项 D4Z4/甲基化/4qA 等遗传检测确认。</p>',
  treatment:
    '<p>目前无根治药物，管理包括个体化运动康复、支具和助行器、疼痛疲劳处理、眼耳呼吸监测、功能适配和必要时肩胛固定评估。</p>',
  prognosis:
    '<p>多数进展缓慢且寿命通常不受明显影响，但功能受限差异大；长期康复、跌倒预防和呼吸眼耳监测可降低并发症。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 379,
    name: 'facioscapulohumeral-muscular-dystrophy-journey.png',
    url: '/images/diseases/facioscapulohumeral-muscular-dystrophy-journey.png',
  },
  tagSlugs: [
    'second-rare-disease-catalog',
    'neuromuscular',
    'genetic-counseling',
  ],
};

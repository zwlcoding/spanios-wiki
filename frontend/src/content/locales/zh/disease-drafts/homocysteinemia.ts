import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHomocysteinemia: DiseaseDraft = {
  ...entity(47, 'disease-homocysteinemia'),
  name: '同型半胱氨酸血症',
  nameEn: 'Homocysteinemia',
  slug: 'homocysteinemia',
  oneSentence:
    '同型半胱氨酸血症是一类因氨基酸代谢异常导致血液中同型半胱氨酸升高的遗传代谢病，典型表现包括眼部异常、骨骼问题、智力障碍和血栓风险增加。',
  plainName: '同型半胱氨酸血症（胱硫醚β合成酶缺乏症）',
  prevalence:
    '经典型（胱硫醚β合成酶缺乏）全球患病率约为 1/200,000～1/350,000，不同地区差异较大。',
  quickLook: {
    whatItIs:
      '这是一类先天性代谢障碍，由于相关酶缺乏导致体内同型半胱氨酸无法正常代谢而在血液中积累，累及眼睛、骨骼、心血管系统和神经系统。',
    whoToSeeFirst:
      '优先到内分泌科或代谢遗传科就诊；出现眼部症状时可能需要眼科联合评估；若有血栓迹象应紧急就医。',
    isGenetic:
      '多为常染色体隐性遗传。CBS 缺乏导致的经典同型半胱氨酸尿症最常见；其他同型半胱氨酸代谢异常也可能涉及不同基因和辅因子通路。',
    hasTreatment:
      '有代谢专科管理方案，包括饮食、维生素/辅因子反应性评估、甜菜碱等治疗选择和血栓风险管理。具体方案应由遗传代谢专科制定。',
    commonDelayReason:
      '早期症状隐匿，患者常因视力问题、骨质疏松或血栓事件反复就诊，却未追溯到代谢根源；婴幼儿期发育迟缓易被误认为发育晚。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童或青少年出现原因不明的近视、眼球晶状体脱位（向上移位）。',
      '身高明显偏矮、骨质疏松或出现脊柱侧弯等骨骼异常。',
      '有血栓栓塞病史（如年轻起病的深静脉血栓或肺栓塞）。',
      '家族中有不明原因的早发心血管事件或代谢异常。',
    ],
    commonWrongTurns: [
      '仅针对眼部症状做屈光手术，未排查全身代谢问题。',
      '骨质疏松单独补钙治疗，忽略代谢性骨病评估。',
      '血栓事件后就医处理，未进一步寻找遗传代谢原因。',
    ],
    firstDepartments: [
      '内分泌科或代谢遗传科',
      '儿科（儿童患者）',
      '眼科（晶状体异常时）',
      '心血管内科（出现血栓或动脉硬化时）',
    ],
    diagnosisChecklist: [
      '血液总同型半胱氨酸浓度测定（空腹状态下采血）。',
      '尿有机酸分析或气相色谱-质谱（GC-MS）检测尿中同型半胱氨酸。',
      '血浆氨基酸分析，评估甲硫氨酸水平是否正常或偏低。',
      '相关酶活性检测（如红细胞胱硫醚β合成酶活性）。',
      '基因检测确认具体基因突变类型（MTHFR、CBS、MTR、MTRR 等）。',
    ],
    testsToAskAbout: [
      '我的同型半胱氨酸水平是多少，属于哪种严重程度？',
      '需要做哪些检查来明确我是哪种类型的同型半胱氨酸血症？',
      '是否建议进行基因检测，对治疗方案有什么影响？',
      '我的家人需要做哪些筛查？',
    ],
    questionsForDoctor: [
      '我的情况更像是哪一种代谢亚型，不同亚型的治疗方案有区别吗？',
      '饮食方面具体应该怎么调整，需要限制哪些食物？',
      '如果计划怀孕，孕期需要特别注意什么？',
      '需要补充哪些维生素或营养素？由谁制定方案，如何监测效果和副作用？',
    ],
  },
  medicalSections: {
    symptoms:
      '主要累及眼睛（晶状体脱位、近视）、骨骼（骨质疏松、脊柱侧弯、关节松弛）、中枢神经系统（智力障碍、发育迟缓）和心血管系统（血栓、动脉硬化）。部分患者有面部特征如颧骨隆起、下颌后缩。症状轻重因酶缺乏程度和类型而异。',
    diagnosis:
      '靠血液同型半胱氨酸浓度升高（通常 > 15 µmol/L）及尿同型半胱氨酸检测确诊；进一步靠酶活性检测和基因检测区分亚型；血浆甲硫氨酸水平有助于区分不同代谢缺陷。',
    treatment:
      '治疗需要先明确病因和维生素 B6 反应性。管理可能包括低甲硫氨酸饮食、特殊营养配方、维生素/辅因子、甜菜碱和血栓风险处理等，但具体组合、目标值和调整频率应由遗传代谢专科制定。眼科、骨科和血管并发症需相应专科共同管理。',
    longTermCare:
      '需要多学科长期随访：代谢科、内分泌科、眼科、骨科；定期监测血液同型半胱氨酸浓度；关注骨骼健康和心脑血管状态；患者及家属可考虑遗传咨询，了解生育风险。',
    fertilityOrFamily:
      '为常染色体隐性遗传，子女患病风险为 25%（双亲均为携带者）；有生育计划者建议孕前进行遗传咨询；部分类型对孕期代谢控制要求较高，需多学科协作管理。',
    emergencySigns:
      '突发胸痛，呼吸困难或单侧肢体肿胀（可能为肺栓塞或深静脉血栓）；眼部疼痛伴视力急剧下降（晶状体脱位）；剧烈头痛或神经系统局部体征（需排除脑血管事件）。',
  },
  sources: [
    {
      name: 'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Homocystinuria',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001199.htm',
    },
  ],
  sourceName:
    'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 346,
    name: 'homocysteinemia-journey.png',
    url: '/images/diseases/homocysteinemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

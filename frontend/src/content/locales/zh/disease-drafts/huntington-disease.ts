import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHuntingtonDisease: DiseaseDraft = {
  ...entity(49, 'disease-huntington-disease'),
  name: '亨廷顿舞蹈病',
  nameEn: 'Huntington Disease',
  slug: 'huntington-disease',
  oneSentence:
    '亨廷顿舞蹈病是一种罕见的常染色体显性遗传性神经退行性疾病，主要表现为不自主的舞蹈样动作、精神异常和进行性认知功能下降。',
  plainName: '亨廷顿舞蹈病',
  prevalence:
    '全球患病率约为 5～10/10万；欧洲和北美人群患病率较高，亚洲相对较低。',
  quickLook: {
    whatItIs:
      '这是第4号染色体上HTT基因中CAG三核苷酸重复序列异常扩增导致的神经退行性疾病，脑部纹状体（尾状核和壳核）神经元选择性死亡，临床上出现运动、精神和认知三方面症状。',
    whoToSeeFirst:
      '优先到神经内科就诊；出现明显精神症状时可联合精神科；基因检测和遗传咨询建议在专科医生指导下进行；有运动功能障碍时需要康复医学科协助。',
    isGenetic:
      '常染色体显性遗传，只要从父母一方继承一个突变基因拷贝即可能患病，子女患病概率为 50%；男性遗传时通常发病更早（父系传递现象）；有生育计划者建议进行遗传咨询和生殖选择讨论。',
    hasTreatment:
      '目前管理以症状控制、康复、吞咽营养安全、精神心理支持、照护规划和遗传咨询为主。基因相关治疗仍需以临床试验和监管批准信息为准。',
    commonDelayReason:
      '早期症状个体差异大，易被误认为焦虑、抑郁或强迫症；舞蹈样动作早期轻微时可能被忽略或被认为是习惯性动作；认知下降常被归因于工作压力或正常老化。',
  },
  patientJourney: {
    whenToSuspect: [
      '出现不明原因的面部或肢体不自主运动（如挤眉弄眼、撅嘴、肢体快速抖动）。',
      '家人发现患者情绪、性格明显改变，或出现抑郁、冲动控制障碍。',
      '工作或生活中出现记忆力下降、做事效率明显不如从前。',
      '有亨廷顿舞蹈病家族史，本人出现任何上述症状或仅感觉动作不灵活。',
    ],
    commonWrongTurns: [
      '仅以精神科诊断（抑郁症、焦虑症）处理，忽略了舞蹈样动作和认知下降的组合。',
      '将动作异常误认为是癫痫或其他运动障碍。',
      '未了解家族史就排除遗传性神经退行性疾病的可能。',
    ],
    firstDepartments: [
      '神经内科',
      '精神科（出现明显精神症状时）',
      '康复医学科（运动和语言功能支持）',
      '遗传咨询科（遗传评估和家系筛查）',
    ],
    diagnosisChecklist: [
      '详细的神经系统检查，评估舞蹈样动作的类型和严重程度。',
      '血液常规和代谢筛查排除其他原因。',
      'HTT基因CAG重复数目检测（重复数 >= 36 提示携带突变）。',
      '颅脑MRI或CT：特征性尾状核和壳核萎缩，侧脑室扩大。',
      '神经心理学评估：认知功能基线测评。',
      '精神科评估：情绪、行为和人格改变评估。',
    ],
    testsToAskAbout: [
      '我的HTT基因检测CAG重复数具体是多少？',
      '我的脑影像学检查有什么发现，尾状核有没有萎缩？',
      '有没有出现认知功能下降，需要做什么评估？',
      '我的家人需要做基因筛查吗，应该怎么安排？',
    ],
    questionsForDoctor: [
      '目前运动、认知和精神行为受累分别处于什么阶段？',
      '哪些症状需要药物或康复介入？治疗目标和副作用如何监测？',
      '吞咽、营养、跌倒和驾驶/工作安全需要怎样评估？',
      '无症状亲属是否适合预测性基因检测？需要怎样的遗传咨询流程？',
    ],
  },
  medicalSections: {
    symptoms:
      '主要分为三大类：①运动障碍：舞蹈样动作（面部、躯干、四肢的不自主舞蹈样抽动）、肌张力障碍、眼球运动异常、后期出现运动僵直；②精神障碍：抑郁、焦虑、冲动控制障碍、人格改变，部分出现精神病性症状；③认知障碍：执行功能下降、记忆力减退、注意力不集中、反应迟钝，晚期可发展为全面痴呆。青少年型（20岁前起病）常表现为运动减少、强直和癫痫发作。',
    diagnosis:
      '依据典型临床三联征（舞蹈样动作、精神异常、进行性认知下降）+ 阳性家族史 + HTT基因检测（CAG重复数 >= 36 可确诊）+ 颅脑MRI特征性尾状核萎缩；基因检测可在出现症状前进行，此时需要遗传咨询支持。',
    treatment:
      '治疗以多学科症状管理为主，可能包括运动症状控制、精神心理治疗、睡眠和行为管理、吞咽营养评估、物理/作业/语言治疗和照护计划。具体药物和是否参加临床研究需要由神经内科、精神心理和遗传咨询团队共同判断。',
    longTermCare:
      '建议神经内科长期随访，每6～12个月评估运动、精神和认知状态；保持适度体力活动但注意防跌倒；居家环境需做安全改造（防摔、防碰撞）；注意营养和吞咽功能监测；心理支持对患者和照护者均十分重要；建议加入患者互助组织获取持续支持。',
    fertilityOrFamily:
      '患者子女有50%概率遗传突变基因；有生育意愿者建议在计划生育前进行遗传咨询，讨论胚胎植入前遗传学检测（PGD）等选项；家系成员是否做基因检测应充分讨论利弊后个人自主决定；对无症状但有家族史者，不建议贸然进行基因检测，建议遗传咨询先行。',
    emergencySigns:
      '突发跌倒或外伤（舞蹈样动作失去平衡）；吞咽困难加重、进食呛咳（需排除吸入性肺炎）；情绪剧烈波动出现自伤或他伤行为（急性精神科危机）；意识状态急剧变化（需排除感染或其他神经系统急症）。',
  },
  sources: [
    {
      name: 'GeneReviews: Huntington Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1305/',
    },
    {
      name: 'MedlinePlus: Huntington disease',
      type: 'official',
      url: 'https://medlineplus.gov/huntingtonsdisease.html',
    },
    {
      name: 'MedlinePlus Genetics: Huntington disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/huntington-disease/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  sourceName: 'GeneReviews: Huntington Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1305/',
  categorySlug: 'neurological',
  charityIds: [5],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 348,
    name: 'huntington-disease-journey.png',
    url: '/images/diseases/huntington-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHolocarboxylaseSynthetaseDeficiency: DiseaseDraft = {
  ...entity(46, 'disease-holocarboxylase-synthetase-deficiency'),
  name: '全羧化酶合成酶缺乏症',
  nameEn: 'Holocarboxylase Synthetase Deficiency',
  alias: 'HLCS 缺乏症、早发型多种羧化酶缺乏症、生物素反应性多羧化酶缺乏症',
  slug: 'holocarboxylase-synthetase-deficiency',
  oneSentence:
    '全羧化酶合成酶缺乏症是一种影响生物素利用的遗传代谢病，婴儿期可出现喂养困难、皮疹、脱发、呼吸问题、嗜睡、酸中毒或抽搐。',
  plainName: '身体不能有效使用生物素，导致多个代谢酶工作异常的遗传病',
  prevalence:
    'MedlinePlus Genetics 提到估计约每 87,000 人 1 例；实际识别受新生儿筛查和代谢检测可及性影响。',
  quickLook: {
    whatItIs:
      'HLCS 酶负责把生物素连接到多个羧化酶上。酶功能不足会让蛋白质、脂肪和碳水化合物代谢受影响，属于多种羧化酶缺乏症的一类。',
    whoToSeeFirst:
      '新生儿或婴儿出现喂养差、反复呕吐、皮疹、脱发、呼吸困难、嗜睡、抽搐或代谢性酸中毒时，应急诊/新生儿科处理，稳定后转遗传代谢科。',
    isGenetic: '是，通常为常染色体隐性遗传，与 HLCS 双等位致病变异有关。',
    hasTreatment:
      '多数患者需要尽早、长期在医生指导下使用生物素相关治疗和代谢随访。具体剂量和调整不能自行决定。',
    commonDelayReason:
      '皮疹、脱发、喂养差和呼吸问题容易被分散处理；若没有把酸中毒、酮症、有机酸异常和皮肤线索联系起来，可能延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿或婴儿出现喂养困难、呕吐、嗜睡、呼吸急促或代谢性酸中毒。',
      '皮疹、脂溢性/湿疹样改变、脱发与发育或代谢异常并存。',
      '抽搐、肌张力异常、发育迟缓或反复危重发作。',
      '尿有机酸提示多种羧化酶相关代谢异常。',
      '新生儿筛查或家族史提示生物素代谢相关疾病。',
    ],
    commonWrongTurns: [
      '只按湿疹、感染或胃肠问题处理，没有查代谢性酸中毒和有机酸。',
      '把抽搐单独按神经系统疾病处理，未评估可治疗代谢病。',
      '确诊后症状改善就自行停用生物素或减少随访。',
      '未与生物素酶缺乏症等其他生物素相关疾病鉴别。',
    ],
    firstDepartments: [
      '新生儿科/儿科急诊',
      '遗传代谢科',
      '儿童神经内科',
      '皮肤科',
      '营养科（代谢营养方向）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查、血气、乳酸、氨、酮体、尿有机酸和酰基肉碱结果。',
      '记录皮疹、脱发、喂养、呼吸、抽搐和危重发作时间线。',
      '询问 HLCS 基因检测和生物素酶缺乏症鉴别。',
      '确认长期治疗、复查和生病时应急方案。',
      '安排发育、听力、视力、皮肤和营养随访。',
    ],
    testsToAskAbout: [
      '血气和代谢性酸中毒评估。',
      '尿有机酸、血酰基肉碱、乳酸、氨和酮体。',
      'HLCS 基因检测。',
      '生物素酶活性检测用于鉴别。',
      '神经发育、皮肤和营养评估。',
    ],
    questionsForDoctor: [
      '目前证据是否支持 HLCS 缺乏症？还需要排除哪些生物素相关疾病？',
      '治疗需要终身吗？复查哪些指标？',
      '发热、呕吐、不能进食时应急方案是什么？',
      '皮肤、发育和神经系统需要哪些长期随访？',
      '家属筛查和再次生育风险如何评估？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>全羧化酶合成酶缺乏症多在婴儿期出现喂养困难、呕吐、呼吸问题、嗜睡、皮疹、脱发、代谢性酸中毒、抽搐或昏迷风险。未及时识别可能造成发育迟缓、神经系统损伤或危及生命的代谢危象。</p>',
    diagnosis:
      '<p>诊断依靠临床表现、血气和代谢检查、尿有机酸、酰基肉碱谱及 HLCS 基因检测。医生还会与生物素酶缺乏症、其他有机酸血症、脂肪酸氧化障碍、感染和癫痫等鉴别。</p>',
    treatment:
      '<p>治疗通常对生物素相关方案有反应，但需要由遗传代谢专科确定剂量、监测指标和长期计划。急性代谢危象需要医院处理，并避免自行停药或仅凭症状调整。</p>',
    longTermCare:
      '<p>长期管理重点是坚持治疗、监测代谢稳定性、发育评估、皮肤和营养照护，以及为发热、呕吐、手术或不能进食准备应急说明。</p>',
    fertilityOrFamily:
      '<p>本病通常为常染色体隐性遗传。明确 HLCS 变异后，父母、兄弟姐妹和有生育计划的亲属可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>嗜睡、呼吸急促、反复呕吐、抽搐、不能进食、脱水、酸中毒或感染后精神状态变差时，应立即急诊并说明疑似或确诊 HLCS 缺乏症。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
    },
    {
      name: 'NCBI MedGen: Holocarboxylase synthetase deficiency',
      type: 'official',
      url: 'https://www.ncbi.nlm.nih.gov/medgen/120653',
    },
  ],
  symptoms:
    '<p>婴儿期可出现喂养困难、呼吸问题、皮疹、脱发、嗜睡、代谢性酸中毒、抽搐或昏迷风险。</p>',
  diagnosis:
    '<p>评估包括血气、尿有机酸、酰基肉碱、HLCS 基因检测，并鉴别生物素酶缺乏症等疾病。</p>',
  treatment:
    '<p>管理以遗传代谢专科指导下的长期生物素相关治疗、代谢监测和生病应急方案为核心。</p>',
  prognosis:
    '<p>早期识别和持续治疗可避免许多严重并发症；延误或停药会增加代谢危象和神经发育风险。</p>',
  sourceName: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 345,
    name: 'holocarboxylase-synthetase-deficiency-journey.png',
    url: '/images/diseases/holocarboxylase-synthetase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

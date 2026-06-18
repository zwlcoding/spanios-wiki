import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMethylmalonicAcademia: DiseaseDraft = {
  ...entity(5017, 'disease-methylmalonic-academia'),
  name: '甲基丙二酸血症',
  nameEn: 'Methylmalonic Acidemia',
  alias: 'MMA、甲基丙二酸尿症',
  icd10Code: 'E71.12',
  slug: 'methylmalonic-academia',
  oneSentence:
    '甲基丙二酸血症是一组常染色体隐性遗传的有机酸血症，由于甲基丙二酰辅酶A变位酶或其辅因子腺苷钴胺素缺陷，导致甲基丙二酸等有害物质蓄积，可损害神经、肾脏和造血系统。',
  plainName: '体内酸性代谢产物排不出去的遗传代谢病',
  prevalence:
    '全球发病率约 1/50,000-1/100,000；中国新生儿筛查已逐步推广，不同地区检出率差异较大。',
  searchIntents: [
    '甲基丙二酸血症 新生儿筛查',
    'MMA 早期症状',
    '甲基丙二酸血症 治疗',
    'MMA 饮食管理',
    '甲基丙二酸血症 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是一组遗传代谢病，身体无法把某些氨基酸和脂肪酸正常代谢，导致甲基丙二酸等酸性物质在体内堆积。根据酶缺陷类型不同，有的对维生素B12治疗有反应，有的没有。',
    whoToSeeFirst:
      '新生儿筛查阳性或怀疑者先看新生儿科/遗传代谢科；已确诊者由遗传代谢科长期随访。出现嗜睡、呕吐、呼吸急促、意识改变时立即急诊。',
    isGenetic:
      '常染色体隐性遗传（mutase 缺陷型）或 X-连锁隐性遗传（部分 cobalamin 代谢缺陷型）。遗传咨询可帮助评估复发风险和产前诊断选择。',
    hasTreatment:
      '有治疗手段但无法根治。维生素B12反应型可通过长期肌注B12改善；非反应型需严格限制蛋白质摄入并补充特殊配方营养。急性发作需要住院处理。',
    commonDelayReason:
      '新生儿期症状（嗜睡、呕吐、喂养差）被当作普通感染或喂养问题；婴幼儿期发育落后被误认为单纯发育迟缓；未及时进行新生儿筛查或筛查阳性后未复查。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查提示甲基丙二酸或丙酰肉碱升高。',
      '新生儿或婴儿出现反复呕吐、拒奶、嗜睡、呼吸急促、肌张力低下。',
      '婴幼儿期出现发育落后、智力障碍、反复癫痫发作或行为异常。',
      '血检提示代谢性酸中毒、高氨血症、低血糖或贫血，尤其伴有大细胞性贫血时。',
      '家族史中有类似代谢病史或不明原因婴儿夭折史。',
    ],
    commonWrongTurns: [
      '把新生儿期的呕吐、嗜睡当作普通感染或喂养不耐受，未及时排查代谢性疾病。',
      '发育落后被单纯归为“发育迟缓”，未追问新生儿筛查结果和代谢指标。',
      '把代谢危象当作普通胃肠炎处理，未在禁食状态下给予足量葡萄糖和纠正酸中毒。',
      '家长自行限制蛋白质但缺乏专业营养指导，导致营养不良。',
      '维生素B12反应型患者未尝试B12治疗，或治疗剂量和随访不规范。',
    ],
    firstDepartments: [
      '新生儿科/儿科遗传代谢科',
      '急诊科（出现代谢危象时）',
      '遗传咨询门诊',
      '营养科（特殊饮食管理）',
      '肾脏科（出现肾损害时）',
    ],
    diagnosisChecklist: [
      '携带新生儿筛查报告和既往血串联质谱、尿有机酸结果。',
      '记录发病时的喂养情况、症状顺序、伴随感染和用药史。',
      '整理血常规（注意大细胞性贫血）、血气分析、血糖、血氨、肝肾功能资料。',
      '向医生确认是否需要 MMUT、MMAA、MMAB 等基因检测及家系验证。',
    ],
    testsToAskAbout: [
      '血串联质谱（丙酰肉碱、甲基丙二酸相关指标）。',
      '尿液有机酸分析（甲基丙二酸、甲基枸橼酸升高）。',
      '血同型半胱氨酸（鉴别合并型甲基丙二酸血症）。',
      '维生素B12负荷试验（判断是否为B12反应型）。',
      'MMUT、MMAA、MMAB 等基因检测。',
      '脑MRI（评估基底节等结构有无代谢性损伤）。',
    ],
    questionsForDoctor: [
      '孩子属于B12反应型还是非反应型？对预后的影响是什么？',
      '日常蛋白质摄入应控制在多少？可以使用母乳或普通配方奶粉吗？',
      '生病时的应急处理方案是什么？家里需要常备哪些物品？',
      '需要多久复查一次血/尿代谢指标和生长发育评估？',
      '未来生育和家族成员筛查需要做哪些准备？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>甲基丙二酸血症的临床表现因类型和严重程度差异较大。早发型（mut0型最常见）常在新生儿期或婴儿早期发病，表现为：嗜睡、呕吐、拒奶、呼吸急促、肌张力低下、脱水，可迅速进展为高氨血症性脑病、昏迷甚至死亡。</p><p>部分患者表现为晚发型，在幼儿期或儿童期出现发育迟缓、智力障碍、癫痫、运动障碍、行为异常或精神症状。长期并发症包括：肾小管间质性肾炎（可导致慢性肾衰竭）、胰腺炎、心肌病、视力损害和反复感染。</p>',
    diagnosis:
      '<p>诊断通常依赖新生儿筛查、血串联质谱（丙酰肉碱升高）、尿液有机酸分析（甲基丙二酸、甲基枸橼酸升高）和基因检测。血同型半胱氨酸水平有助于鉴别单纯型与合并型甲基丙二酸血症。</p><p>维生素B12负荷试验是判断是否为B12反应型的重要依据。B12反应型（多为cblA型）对肌注羟钴胺反应良好，预后相对较好；mut0型通常对B12无反应，需更严格的饮食管理。</p>',
    treatment:
      '<p>急性发作期需要住院处理：纠正脱水、代谢性酸中毒和高氨血症；限制蛋白质摄入；给予足量葡萄糖抑制分解代谢；必要时进行血液透析。L-肉碱、叶酸等辅助用药应在医生指导下使用。</p><p>长期管理包括：维生素B12反应型需定期肌注羟钴胺；非反应型需严格限制天然蛋白质（通常1.0-2.5 g/kg/天），使用特殊配方奶粉补充必需氨基酸；定期监测生长发育、代谢指标和肾功能。</p>',
    longTermCare:
      '<p>长期随访重点包括：生长发育和营养状态评估；血/尿代谢指标监测；肾功能和尿常规检查；神经发育和认知评估；眼科和听力检查。肾脏损害是mut0型的重要长期并发症，需要早期识别和干预。</p><p>家庭管理要点：严格遵医嘱进行饮食控制；生病时及时增加碳水化合物摄入并减少蛋白质；建立应急就医计划；确保疫苗接种按时完成（感染是常见诱发因素）。</p>',
    fertilityOrFamily:
      '<p>甲基丙二酸血症为常染色体隐性遗传（mutase缺陷型）或X-连锁隐性遗传（部分类型）。遗传咨询可帮助家庭成员了解携带者筛查、再次生育风险、产前诊断（羊水酶活性测定或基因检测）及胚胎植入前遗传学检测的选择。</p><p>患者的同胞应尽早进行新生儿筛查或基因检测。有家族史的家庭在计划生育前应进行遗传咨询和携带者检测。</p>',
    emergencySigns:
      '<p>以下情况应立即急诊就医：持续呕吐无法进食、嗜睡或意识改变、呼吸急促、抽搐、严重脱水。就医时应携带诊断资料和应急处理说明，主动告知医生 MMA 诊断，以便尽快开始补液、纠酸和抑制分解代谢。</p><p>如果患者意识清醒但进食困难，可先尝试口服含糖饮料或葡萄糖凝胶，同时尽快就医。不要自行使用非处方药物或等待症状缓解。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Methylmalonic Acidemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1231/',
    },
    {
      name: 'NORD: Methylmalonic Acidemia',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/methylmalonic-acidemia/',
    },
    {
      name: 'Orphanet: Methylmalonic acidemia',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/289',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>早发型表现为新生儿期呕吐、嗜睡、肌张力低下、代谢性酸中毒；晚发型表现为发育迟缓、癫痫、智力障碍。长期可累及肾脏、胰腺和心脏。</p>',
  diagnosis:
    '<p>血串联质谱、尿有机酸分析、基因检测可确诊；维生素B12负荷试验区分反应型与非反应型。</p>',
  treatment:
    '<p>B12反应型需长期肌注B12；非反应型需严格限制蛋白质并补充特殊配方；急性发作时住院纠酸、补液和抑制分解代谢。</p>',
  prognosis:
    '<p>早期诊断和规范治疗可改善预后；B12反应型预后较好；mut0型可能出现肾衰竭等长期并发症，需要密切随访。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1231/',
  categorySlug: 'metabolic',
  charityIds: [42, 43],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3517,
    name: 'methylmalonic-academia-journey.png',
    url: '/images/diseases/methylmalonic-academia-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

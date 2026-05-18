import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMucopolysaccharidosis: DiseaseDraft = {
  ...entity(5019, 'disease-mucopolysaccharidosis'),
  name: '黏多糖贮积症',
  nameEn: 'Mucopolysaccharidosis',
  alias: 'MPS、黏多糖病',
  icd10Code: 'E76.0-E76.3',
  slug: 'mucopolysaccharidosis',
  oneSentence:
    '黏多糖贮积症是一组常染色体隐性或X-连锁隐性遗传的溶酶体贮积病，由于特定酶缺乏导致黏多糖（糖胺聚糖）在体内蓄积，可累及骨骼、神经、心脏、呼吸和视觉系统。',
  plainName: '身体里“垃圾”清理不掉的一种遗传病',
  prevalence:
    '各型发病率不同，总体约 1/25,000-1/100,000 活产儿；MPS II（亨特综合征）为X-连锁遗传，仅男性发病。中国已有新生儿筛查试点项目。',
  searchIntents: [
    '黏多糖贮积症 症状',
    'MPS 分型',
    '黏多糖贮积症 治疗',
    'MPS 酶替代治疗',
    '黏多糖贮积症 遗传',
  ],
  quickLook: {
    whatItIs:
      '这是一组遗传病，身体缺少某种酶，无法分解黏多糖（一种长链糖分子），导致它们在细胞里堆积，逐渐损害骨骼、关节、心脏、肺、眼睛和大脑。根据缺少的酶不同，分为MPS I、II、III、IV、VI、VII等多种类型。',
    whoToSeeFirst:
      '出现面容粗陋、骨骼畸形、发育迟缓、肝脾大等症状时，先看儿科遗传代谢科或儿科内分泌科；已确诊者需多学科团队长期管理。',
    isGenetic:
      '除MPS II为X-连锁隐性遗传外，其余多为常染色体隐性遗传。遗传咨询可帮助分型、评估复发风险和产前诊断选择。',
    hasTreatment:
      '酶替代疗法（ERT）和造血干细胞移植（HSCT）是两种主要治疗手段。ERT可改善多数躯体症状但不能穿过血脑屏障；HSCT对神经系统有一定保护作用，但风险较高。具体方案因型和个体情况而异。',
    commonDelayReason:
      '婴幼儿期面容改变和发育迟缓被误认为“长得慢”；骨骼畸形被当作普通骨科问题；多动症样表现（尤其MPS III）被误诊为单纯注意缺陷多动障碍；未及时进行酶活性检测或尿糖胺聚糖筛查。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿出现面容粗陋（眉弓突出、鼻梁低平、唇厚舌大）、关节僵硬、身材矮小。',
      '反复脐疝或腹股沟疝、肝脾肿大、鸡胸或脊柱后凸。',
      '发育迟缓、智力倒退或多动行为（尤其MPS III型）。',
      '角膜混浊、视力进行性下降、反复中耳感染或听力下降。',
      '尿糖胺聚糖（GAG）筛查阳性或白细胞酶活性降低。',
    ],
    commonWrongTurns: [
      '把面容和骨骼改变当作“长得不好看”或普通骨骼发育问题。',
      '肝脾大被当作普通肝病，未排查遗传代谢病。',
      'MPS III型的行为异常和多动被误诊为单纯精神行为问题或自闭症。',
      '关节僵硬和身材矮小被当作普通骨科疾病，未做酶学检测。',
      '未及时转诊至有溶酶体贮积病诊治经验的中心。',
    ],
    firstDepartments: [
      '儿科遗传代谢科',
      '儿科内分泌科',
      '骨科（骨骼畸形评估）',
      '眼科（角膜混浊评估）',
      '耳鼻喉科（听力评估）',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '整理面容、骨骼、关节、视力和听力改变的详细时间线。',
      '携带既往尿糖胺聚糖（GAG）筛查或白细胞酶活性检测结果。',
      '记录发育里程碑、行为改变和学习能力变化。',
      '向医生确认是否需要酶活性测定和基因检测以明确分型。',
    ],
    testsToAskAbout: [
      '尿液糖胺聚糖（GAG）定量及分型分析。',
      '白细胞或皮肤成纤维细胞特定酶活性测定（明确分型）。',
      '相关基因（如 IDUA、IDS、GNS、GALNS、ARSB、GUSB 等）检测。',
      '骨骼X线片（观察多发性骨发育不良特征）。',
      '心脏超声（评估瓣膜病变和心肌肥厚）。',
      '眼底检查和听力测试。',
      '脑部MRI（尤其MPS I、II、III型，评估脑积水和脑白质改变）。',
    ],
    questionsForDoctor: [
      '孩子属于哪一型MPS？严重型还是轻型？',
      '是否适合酶替代治疗或造血干细胞移植？各自的获益和风险是什么？',
      '骨骼畸形、视力和听力问题需要手术干预吗？最佳时机是什么时候？',
      '长期随访需要监测哪些方面？多久复查一次？',
      '家庭其他成员和未来的孩子需要做哪些遗传筛查？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MPS是一组临床谱系广泛的疾病，共同特征为黏多糖在溶酶体内蓄积导致的多器官损害。不同类型表现侧重不同：</p><p><strong>共同表现：</strong>面容粗陋（眉弓突出、鼻梁低平、唇厚、舌大）、多发性骨发育不良（关节僵硬、脊柱畸形、鸡胸、身材矮小）、肝脾肿大、脐疝/腹股沟疝、角膜混浊、听力下降、反复呼吸道感染和睡眠呼吸暂停。</p><p><strong>MPS I（Hurler/Scheie综合征）：</strong>严重型（Hurler）在1-2岁即出现明显症状，伴快速认知衰退；轻型（Scheie）智力正常，主要表现为骨骼和心脏问题。</p><p><strong>MPS II（Hunter综合征）：</strong>X-连锁遗传，仅男性发病。可累及中枢神经系统，伴攻击性行为和多动。</p><p><strong>MPS III（Sanfilippo综合征）：</strong>以严重智力倒退和行为异常为突出表现，躯体症状相对较轻，常被误诊为自闭症或多动症。</p><p><strong>MPS IV（Morquio综合征）：</strong>以严重骨骼畸形为特征，尤其是颈椎不稳可危及生命。</p>',
    diagnosis:
      '<p>诊断通常从尿糖胺聚糖（GAG）筛查开始，异常者进一步做酶活性测定和基因检测以明确分型。白细胞或皮肤成纤维细胞中的特定酶活性测定是金标准。</p><p>骨骼X线可见多发性骨发育不良（椎体形态异常、肋骨增宽呈船桨状、骨盆畸形等）。心脏超声可评估瓣膜病变。脑部MRI对评估脑积水、脑白质改变和脊髓压迫有重要价值。</p><p>基因突变分析不仅可确诊分型，还可为家系筛查、产前诊断和遗传咨询提供依据。</p>',
    treatment:
      '<p><strong>酶替代疗法（ERT）：</strong>目前已有MPS I、II、IVA、VI、VII的ERT药物。通过静脉输注补充缺乏的酶，可改善多数躯体症状（肝脾大、关节活动度、心肺功能），但不能穿过血脑屏障，对中枢神经系统损害效果有限。</p><p><strong>造血干细胞移植（HSCT）：</strong>主要用于MPS I Hurler综合征患儿，在2岁前进行效果最佳。移植后的供体细胞可产生正常酶并进入中枢神经系统，对神经认知有保护作用，但移植本身有风险。</p><p><strong>对症治疗：</strong>包括骨科手术（如颈椎融合、脊柱矫正）、角膜移植、扁桃体/腺样体切除改善气道、疝修补、物理和作业治疗等。</p><p><strong>新兴疗法：</strong>基因治疗、小分子底物减少疗法和脑内酶递送等正在研究中。</p>',
    longTermCare:
      '<p>MPS是慢性进展性疾病，需要终身多学科随访。监测内容包括：生长发育、骨骼和关节功能、心肺功能、视力听力、神经系统发育和认知状态。</p><p>MPS IV患者应特别注意颈椎稳定性，未做颈椎融合者应避免体操等高风险运动。所有麻醉操作都应注意气道管理，因MPS患者常有气道狭窄和颈椎不稳。</p><p>家庭护理重点：保持关节活动度、预防感染、确保营养充足、关注心理健康。家长应加入患者组织获取最新治疗信息和情感支持。</p>',
    fertilityOrFamily:
      '<p>除MPS II为X-连锁隐性遗传外，其余MPS类型多为常染色体隐性遗传。遗传咨询可帮助家庭成员了解：携带者筛查、再次生育风险、产前诊断（羊水酶活性或基因检测）和胚胎植入前遗传学诊断的选择。</p><p>对于MPS II，男性患者的母亲为携带者，其姐妹有50%概率为携带者。所有已知携带者或患者家庭在计划生育前应接受遗传咨询。</p>',
    emergencySigns:
      '<p>以下情况应立即急诊就医：严重呼吸困难或睡眠呼吸暂停加重、颈部外伤或跌倒后怀疑颈椎损伤、癫痫持续状态、严重心衰症状（呼吸困难、下肢水肿）。</p><p>MPS患者因气道解剖异常，麻醉风险较高，任何需要麻醉的手术都应在有经验的中心进行，并提前告知麻醉团队MPS诊断。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Mucopolysaccharidosis Type I',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1162/',
    },
    {
      name: 'GeneReviews: Mucopolysaccharidosis Type II',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1274/',
    },
    {
      name: 'NINDS: Mucopolysaccharidoses Fact Sheet',
      type: 'review',
      url: 'https://www.ninds.nih.gov/health-information/disorders/mucopolysaccharidoses',
    },
    {
      name: 'Orphanet: Mucopolysaccharidosis',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/579',
    },
  ],
  symptoms:
    '<p>面容粗陋、骨骼畸形、关节僵硬、肝脾大、角膜混浊、听力下降、发育迟缓或智力倒退。不同亚型表现侧重不同。</p>',
  diagnosis:
    '<p>尿糖胺聚糖筛查、白细胞酶活性测定和基因检测可确诊分型。骨骼X线、心脏超声、眼底和听力检查评估受累程度。</p>',
  treatment:
    '<p>酶替代疗法和造血干细胞移植是主要治疗手段；需配合骨科、眼科、耳鼻喉科等对症手术和康复治疗。</p>',
  prognosis:
    '<p>早期诊断和治疗可改善生活质量；重型MPS I和MPS III预后较差；ERT可延缓躯体症状进展但不能治愈。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1162/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3519,
    name: 'mucopolysaccharidosis-journey.png',
    url: '/images/diseases/mucopolysaccharidosis-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMarfanSyndrome: DiseaseDraft = {
  ...entity(5014, 'disease-marfan-syndrome'),
  name: '马凡综合征',
  nameEn: 'Marfan Syndrome',
  alias: '马方综合征、蜘蛛指（趾）综合征、第一批罕见病目录第 68 项',
  slug: 'marfan-syndrome',
  oneSentence:
    '马凡综合征是一种常染色体显性遗传的结缔组织病，因 FBN1 基因突变导致原纤维蛋白-1缺陷，引起骨骼、眼睛和心血管系统异常，主动脉夹层是最危险的并发症，需终身随访和降压治疗。',
  plainName: '一种影响骨骼、眼睛和心脏血管的遗传性结缔组织病',
  prevalence:
    '患病率约 1/5,000–10,000；无性别和种族差异；约 75% 为家族遗传，25% 为新发突变。',
  searchIntents: [
    '马凡综合征 症状',
    '马凡综合征 主动脉夹层',
    'Marfan syndrome 身高 手指',
    '马凡综合征 晶状体脱位',
    '马凡综合征 治疗 降压',
  ],
  quickLook: {
    whatItIs:
      'FBN1 基因突变导致原纤维蛋白-1（fibrillin-1）结构和功能异常，影响结缔组织的弹性和强度，累及骨骼、眼、心血管、肺和皮肤。',
    whoToSeeFirst:
      '身材瘦高、四肢细长、有近视或晶状体脱位、心脏杂音或家族史者，应到心血管内科、眼科或遗传科就诊。',
    isGenetic:
      '常染色体显性遗传，FBN1 基因突变所致；父母一方患病时子女有 50% 风险；约 25% 为新发突变，无家族史。',
    hasTreatment:
      '有明确管理方案：β受体阻滞剂或 ARB 类药物控制血压、保护主动脉；必要时主动脉根部置换手术；眼科矫正和骨科干预。',
    commonDelayReason:
      '儿童期仅表现为身高突出和近视，常被误认为正常体型或单纯屈光不正；心血管并发症在成年后才显现。',
  },
  patientJourney: {
    whenToSuspect: [
      '身材瘦高、四肢和手指明显细长（蜘蛛指/趾）、臂展大于身高。',
      '胸廓畸形（漏斗胸或鸡胸）、脊柱侧弯、关节过度活动。',
      '高度近视、晶状体脱位（向上方移位）、视网膜脱离风险。',
      '心脏杂音、主动脉根部扩张、二尖瓣脱垂。',
      '自发性气胸或硬脊膜膨出。',
      '家族中有类似体型或早发心血管疾病/猝死史。',
    ],
    commonWrongTurns: [
      '把身材瘦高当作正常体型，未测量臂展和指距。',
      '把晶状体脱位当作普通白内障或近视处理。',
      '未做心脏超声评估主动脉根部直径。',
      '胸痛时未考虑主动脉夹层，延误致命性诊断。',
    ],
    firstDepartments: [
      '心血管内科（主动脉评估）',
      '眼科（晶状体/视网膜评估）',
      '骨科（脊柱侧弯/胸廓畸形）',
      '医学遗传科（确诊和家系筛查）',
      '心胸外科（主动脉手术评估）',
    ],
    diagnosisChecklist: [
      '详细测量身高、臂展、指距、上部量/下部量比值。',
      '眼科检查：散瞳查晶状体位置、视网膜情况。',
      '心脏超声：测量主动脉根部直径（Z值）、二尖瓣情况。',
      '骨骼评估：脊柱 X 线、胸廓检查、足弓检查。',
      'FBN1 基因检测确诊。',
      '家族史采集和家系筛查。',
    ],
    testsToAskAbout: [
      '眼科检查（晶状体、眼底）。',
      '心脏超声（主动脉根部直径）。',
      'FBN1 基因检测。',
      '脊柱和胸廓 X 线。',
      '头颅/脊柱 MRI（硬脊膜膨出）。',
    ],
    questionsForDoctor: [
      '主动脉根部目前多粗？Z值是多少？',
      '需要吃降压药吗？目标血压是多少？',
      '什么时候需要做主动脉根部手术？',
      '晶状体脱位需要手术吗？',
      '我的家人需要筛查吗？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>马凡综合征累及多个系统。骨骼系统：身材瘦高、四肢细长（蜘蛛指/趾）、臂展大于身高、上部量/下部量比值降低、胸廓畸形（漏斗胸/鸡胸）、脊柱侧弯、关节松弛、高腭弓、扁平足。眼部：高度近视、晶状体向上方脱位（特征性）、视网膜脱离风险增加、青光眼。心血管系统：主动脉根部扩张（最危险）、二尖瓣脱垂/反流、主动脉夹层、心律失常。肺部：自发性气胸、肺尖肺大疱。皮肤：萎缩纹（非肥胖相关）。中枢神经系统：硬脊膜膨出（腰骶部常见）。</p>',
    diagnosis:
      '<p>2010 年修订的 Ghent 标准是诊断依据，主要依据包括：1）主动脉根部 Z ≥ 2 加晶状体脱位；2）主动脉根部 Z ≥ 2 加 FBN1 突变；3）主动脉根部 Z ≥ 2 加系统性评分 ≥ 7；4）晶状体脱位加 FBN1 突变（已确认与主动脉病变相关）。次要表现包括骨骼、皮肤、肺部等受累。FBN1 基因检测发现致病突变可确诊并用于家系筛查。需与家族性胸主动脉瘤、Loeys-Dietz 综合征、Ehlers-Danlos 综合征（血管型）等鉴别。</p>',
    treatment:
      '<p>终身随访和药物管理是核心。β受体阻滞剂（如阿替洛尔、普萘洛尔）或血管紧张素受体阻滞剂（ARB，如氯沙坦）可降低主动脉壁应力、减缓主动脉扩张速度。目标收缩压 <120 mmHg，避免剧烈运动（尤其是竞技体育、举重）。眼科：晶状体脱位可配戴特殊眼镜或手术摘除；定期眼底检查预防视网膜脱离。骨科：严重脊柱侧弯需支具或手术矫正；胸廓畸形严重者可手术。手术指征：主动脉根部直径 ≥ 50 mm（或 Z ≥ 2 且增长 >5 mm/年，或有家族史早发夹层），可行主动脉根部置换术（Bentall 手术或保留瓣膜的 David 手术）。</p>',
    longTermCare:
      '<p>需终身多学科随访，包括心血管内科（每 6–12 个月心脏超声）、眼科（每年散瞳检查）、骨科（脊柱和胸廓监测）。避免竞争性运动、等长收缩运动（举重）和接触性运动。保持适当体重和血压控制。妊娠是高风险期，需在主动脉直径 <40 mm 且稳定时计划，孕期每 4–8 周监测主动脉。心理支持很重要，帮助患者适应体型差异和长期医疗管理。</p>',
    fertilityOrFamily:
      '<p>常染色体显性遗传。父母一方患病时子女有 50% 风险。约 25% 为新发突变。家族成员应进行 FBN1 基因检测和临床筛查（心脏超声、眼科）。遗传咨询有助于评估风险和制定生育计划。产前诊断和胚胎植入前遗传学检测（PGT）可用于高风险家庭。</p>',
    emergencySigns:
      '<p>突发剧烈胸痛或背痛（放射至腹部）、呼吸困难、意识丧失（提示主动脉夹层或破裂）需立即拨打急救电话；突发视力急剧下降（视网膜脱离或晶状体全脱位）需紧急眼科处理；突发胸痛和呼吸困难（气胸）也需立即就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Marfan Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1335/',
    },
    {
      name: 'NORD: Marfan Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/marfan-syndrome/',
    },
  ],
  symptoms:
    '<p>身材瘦高、蜘蛛指/趾、胸廓畸形、脊柱侧弯、高度近视、晶状体脱位、主动脉根部扩张、二尖瓣脱垂、自发性气胸。</p>',
  diagnosis:
    '<p>Ghent 标准（主动脉根部扩张+晶状体脱位/FBN1 突变/系统性评分）；FBN1 基因检测确诊。</p>',
  treatment:
    '<p>β受体阻滞剂或 ARB 降压保护主动脉；主动脉根部直径≥50 mm 时手术；眼科和骨科对症处理。</p>',
  prognosis:
    '<p>早期诊断和现代管理显著延长寿命；主动脉夹层是主要死因；规范随访和及时手术可将预期寿命接近正常。</p>',
  sourceName: 'GeneReviews: Marfan Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1335/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5014,
    name: 'marfan-syndrome-journey.png',
    url: '/images/diseases/marfan-syndrome-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

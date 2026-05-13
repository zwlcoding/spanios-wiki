import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHyperphenylalaninemia: DiseaseDraft = {
  ...entity(51, 'disease-hyperphenylalaninemia'),
  name: '高苯丙氨酸血症',
  nameEn: 'Hyperphenylalaninemia',
  alias: 'HPA、高苯丙氨酸血症综合征、四氢生物蝶呤缺乏症、苯丙氨酸羟化酶缺乏症',
  slug: 'hyperphenylalaninemia',
  oneSentence:
    '高苯丙氨酸血症是一组因苯丙氨酸羟化酶（PAH）或其辅酶四氢生物蝶呤（BH4）缺乏，导致血苯丙氨酸升高的常见氨基酸代谢遗传病，包括苯丙酮尿症（PKU）及其他表型。',
  plainName: '高苯丙氨酸血症',
  prevalence: '中国1985~2011年新生儿发病率约1/10397；全球各地区发病率差异较大',
  quickLook: {
    whatItIs:
      '高苯丙氨酸血症（Hyperphenylalaninemia，简称HPA）是由于苯丙氨酸代谢途径中苯丙氨酸羟化酶（PAH）缺乏或其辅酶四氢生物蝶呤（BH4）缺乏，导致血苯丙氨酸（Phe）水平升高的一组最常见氨基酸代谢病。2018年列入国家《第一批罕见病目录》。根据缺乏酶的类型分为PAH缺乏症和BH4缺乏症两大类，治疗方案有所不同。常见诊断年龄为新生儿筛查，成年女性患者常于产检或畸形儿出生后发现。',
    whoToSeeFirst: '儿科、遗传代谢科或新生儿筛查随访门诊',
    isGenetic: '是，常染色体隐性遗传',
    hasTreatment:
      '有长期饮食、特殊医学食品、BH4 反应性评估和代谢随访方案。PAH 缺乏和 BH4 相关疾病路径不同，需要新筛/遗传代谢团队区分。',
    commonDelayReason:
      '新生儿期无明显症状，易被忽视；轻型患儿症状轻微，易误认为发育慢或行为问题',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查发现血苯丙氨酸升高',
      '皮肤颜色浅淡、头发由黑变黄',
      '尿液、汗液有鼠臭味（霉臭味）',
      '智力发育迟缓或倒退',
      '癫痫发作、小头畸形',
      '行为异常（多动、自残、攻击倾向）',
      '婴儿期反复呕吐、喂养困难、湿疹',
    ],
    commonWrongTurns: [
      '轻型患儿因症状轻微被延误诊治',
      '只关注头发皮肤颜色，忽视认知发育评估',
      '未区分PAH缺乏与BH4缺乏，治疗方案选择不当',
      '饮食管理不规范，导致血Phe波动',
      '儿童期行为问题被误认为心理问题',
    ],
    firstDepartments: [
      '儿科或遗传代谢科（优先就诊）',
      '新生儿筛查随访门诊',
      '儿童神经内科（出现抽搐或发育落后时）',
      '儿童康复科（发育支持）',
    ],
    diagnosisChecklist: [
      '血苯丙氨酸（Phe）浓度检测（>120μmol/L为升高）',
      '血苯丙氨酸/酪氨酸比值（Phe/Tyr > 2.0）',
      '尿喋呤谱分析（鉴别BH4缺乏）',
      'BH4负荷试验（判断是否为BH4反应型）',
      'PAH及相关基因检测',
      '脑电图（出现抽搐时）',
      '头颅MRI（评估脑发育）',
      '发育商或智力评估',
    ],
    testsToAskAbout: [
      '血苯丙氨酸浓度及控制范围',
      '是否为BH4反应型',
      'PAH基因突变类型',
      '发育水平评估结果',
      '脑电图和头颅MRI是否需要做',
    ],
    questionsForDoctor: [
      '血苯丙氨酸目前控制在什么范围？不同年龄目标值是多少？',
      '孩子是PAH缺乏还是BH4缺乏？是否需要补充BH4？',
      '低苯丙氨酸饮食具体怎么执行？需要吃多久？',
      '特殊医学食品和营养支持如何申请、购买和随访？',
      '孩子的智力发育目前处于什么水平？需要哪些康复支持？',
      '若想生二胎，需要做哪些遗传学准备？',
    ],
  },
  medicalSections: {
    symptoms:
      'PAH缺乏症（苯丙酮尿症型）：新生儿期大多无临床症状，出生3~4个月后逐渐出现头发由黑变黄、皮肤颜色浅淡、尿液和汗液有鼠臭味。随着年龄增长可出现智力发育迟缓、小头畸形、癫痫发作，以及行为、性格、认知异常（如多动、自残、攻击、自闭症倾向）。BH4缺乏症：除上述症状外，还可出现嗜睡或失眠、运动障碍、吞咽困难、肌张力减低、眼球震颤，病情往往比PAH缺乏症更重。婴儿期还常见呕吐和湿疹。',
    diagnosis:
      '新生儿筛查为最主要早期发现手段，检测血Phe浓度及Phe/Tyr比值。诊断需排除暂时性高苯丙氨酸血症，明确是PAH缺乏还是BH4缺乏。尿喋呤谱分析和BH4负荷试验是区分两类的关键检查。基因检测（PAH、PTS、QDPR、DNAJC12等基因）可确定具体突变类型，指导治疗和预后判断。',
    treatment:
      '管理取决于 PAH 缺乏、BH4 相关疾病或其他原因。常见路径包括低苯丙氨酸饮食、特殊医学食品、血苯丙氨酸监测、BH4 反应性评估和神经发育随访。妊娠前和妊娠期需要严格的代谢专科管理。不要根据网络目标值自行调整饮食或补充剂。',
    longTermCare:
      '需终身随访血苯丙氨酸浓度，1岁内建议每月监测，1岁后每3个月监测一次。饮食管理是长期任务，特殊奶粉和低蛋白食品需持续使用。家长需学习制作低Phe食谱，确保营养均衡（尤其注意酪氨酸的补充，因其为必需氨基酸）。儿童期定期评估智力、运动和语言发育，及时进行康复训练。关注牙齿健康（BH4缺乏症患儿尤其注意）。成人患者计划妊娠前应进行遗传咨询和血Phe控制优化。',
    fertilityOrFamily:
      '本病为常染色体隐性遗传。父母双方均为携带者时，每次妊娠有25%概率生出患儿。建议进行遗传咨询，明确基因突变位点后可行产前诊断或PGT。女性患者妊娠期需严格控制血Phe，对胎儿神经系统发育至关重要。高苯丙氨酸血症患者父母若想生育二胎，强烈建议在生育前完成遗传咨询。',
    emergencySigns:
      '出现难以控制的抽搐、意识障碍或发育倒退，提示血Phe控制不佳或存在其他代谢问题，需尽快复诊。出现反复感染、严重呕吐、腹泻或拒食，需监测酸碱平衡和营养状态，必要时住院调整饮食方案。',
  },
  sources: [
    {
      name: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
    },
    {
      name: 'MedlinePlus Genetics: Phenylketonuria',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/phenylketonuria/',
    },
  ],
  sourceName: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 350,
    name: 'hyperphenylalaninemia-journey.png',
    url: '/images/diseases/hyperphenylalaninemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

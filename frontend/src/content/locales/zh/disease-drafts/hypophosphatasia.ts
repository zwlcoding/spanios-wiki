import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHypophosphatasia: DiseaseDraft = {
  ...entity(52, 'disease-hypophosphatasia'),
  name: '低碱性磷酸酶血症',
  nameEn: 'Hypophosphatasia',
  alias: '低磷酸酯酶症、HPP、遗传性低磷酸酯酶症',
  slug: 'hypophosphatasia',
  oneSentence:
    '低碱性磷酸酶血症是一种因ALPL基因突变导致碱性磷酸酶活性降低，引起骨骼和牙齿矿化障碍的罕见单基因遗传病，2018年列入国家《第一批罕见病目录》。',
  plainName: '低碱性磷酸酶血症',
  prevalence: '严重型发病率约1/100000，轻型发病率相对更高；我国属于罕见病',
  quickLook: {
    whatItIs:
      '低碱性磷酸酶血症（Hypophosphatasia，简称HPP）是由编码组织非特异性碱性磷酸酶的ALPL基因（又称TNSALP基因）突变所致。基因突变导致体内碱性磷酸酶（ALP）活性显著下降，其底物（包括无机焦磷酸盐、磷酸吡哆醛等）异常蓄积，进而引起骨骼和牙齿矿化障碍，并可累及多个器官。呈常染色体显性或隐性遗传，隐性遗传者病情通常更重。2018年列入国家《第一批罕见病目录》。',
    whoToSeeFirst: '儿科、骨科（骨骼症状明显时）或口腔科（牙齿症状）',
    isGenetic: '是，常染色体显性或隐性遗传',
    hasTreatment:
      '有针对严重儿童型的酶替代治疗和多学科支持管理，但是否适合、何时使用和如何监测需由代谢骨病/内分泌/骨科团队评估。',
    commonDelayReason:
      '临床表现差异大，从牙齿早脱到新生儿致死，跨度极大；轻型易被误认为普通骨质疏松或牙齿问题',
  },
  patientJourney: {
    whenToSuspect: [
      '乳牙在1~3岁前过早脱落（通常从切牙开始）',
      '儿童身材矮小、骨骼畸形或佝偻病表现',
      '反复骨折或骨痛，骨折愈合缓慢',
      '不明原因骨骼矿化减少',
      '婴儿期出现颅缝早闭或颅内压增高表现',
      '成人患者出现不明原因骨软化或假性骨折',
      '碱性磷酸酶（ALP）持续偏低',
    ],
    commonWrongTurns: [
      '牙齿早脱被误认为普通口腔问题或牙周病',
      '儿童骨折被误认为外伤或普通骨质疏松',
      '骨骼畸形被误诊为佝偻病或其他代谢性骨病',
      '成人型被误认为普通骨质疏松或关节炎',
      '未检测ALP，仅关注钙磷指标',
      '围生期型因病情危重被误认为其他致命性疾病',
    ],
    firstDepartments: [
      '儿科或遗传代谢科（优先就诊）',
      '儿童骨科（骨骼症状明显时）',
      '口腔科（牙齿症状明显时）',
      '骨科或内分泌科（成人患者）',
      '新生儿科（围生期或婴儿期起病）',
    ],
    diagnosisChecklist: [
      '血清碱性磷酸酶（ALP）测定（持续性偏低为核心指标）',
      '血钙、磷、甲状旁腺激素（PTH）',
      'ALPL 基因分子检测（重要确诊依据）',
      '尿磷酸乙醇胺（PEA）检测（HPP特征性代谢物）',
      '血磷酸吡哆醛（PLP）检测（升高支持诊断）',
      '骨骼X线片（评估矿化程度和骨骼畸形）',
      '牙齿曲面体层片（评估牙齿结构）',
      '骨密度检测（评估骨折风险）',
    ],
    testsToAskAbout: [
      '碱性磷酸酶（ALP）的具体数值',
      'ALPL基因是否做了检测',
      '骨骼X线或骨密度检查结果',
      '血钙、磷和PTH水平',
      '牙齿脱落的具体情况和原因',
    ],
    questionsForDoctor: [
      'ALP偏低多少可以确诊为HPP？需要重复检测吗？',
      '孩子目前的骨骼发育情况如何？有哪些需要特别注意的？',
      '是否需要使用酶替代治疗（asfotase alfa）？',
      '牙齿护理有哪些特别需要注意的地方？',
      '日常生活中如何预防骨折？运动和饮食有什么限制？',
      '父母若想再生育，需要做哪些遗传学准备？',
    ],
  },
  medicalSections: {
    symptoms:
      '临床表现多样，根据起病年龄分为六大类：围生期型（致死型，胎儿期即发病，严重骨矿化不良，多在围生期死亡）；良性新生儿型（宫内有骨骼畸形但出生后改善）；婴儿型（出生6个月内起病，出现纳差、肌张力低、颅缝早闭、呼吸异常、骨折，6个月前死亡率较高）；儿童型（6个月后起病，最复杂，表现为乳牙早脱、身材矮小、佝偻病、骨痛、反复骨折、步态蹒跚）；成人型（牙齿异常、骨软化、反复骨折、骨骼关节疼痛、肌无力，易与骨质疏松混淆）；单纯牙型（最轻，仅表现为乳牙或恒牙早脱，通常无骨骼系统异常）。',
    diagnosis:
      '核心实验室指标为血清ALP持续性降低，同时排除继发性因素（如维生素D缺乏、甲状腺功能减退等）。确诊依赖ALPL基因检测。X线片可见骨骼矿化减少、骨骼畸形、骨折等表现。骨密度检测显示骨量减少或骨质疏松。尿PEA和血PLP升高对诊断有参考价值。',
    treatment:
      '管理取决于起病年龄和严重程度。严重围产期、婴儿期或儿童型可由专科评估酶替代治疗；所有患者都需要骨骼、牙科、疼痛、肾脏钙磷代谢和康复支持。钙、维生素 D、骨质疏松药物或手术处理应由熟悉 HPP 的团队判断，避免按普通佝偻病或骨质疏松自行处理。',
    longTermCare:
      '需多学科长期随访：骨科（骨折预防和畸形矫正）、口腔科（牙齿保护，养成专业口腔护理习惯，避免不必要拔牙）、康复科（运动指导，维持安全活动量）、营养科（均衡营养，避免营养不良）。患者和照护者需了解骨折风险，做好活动环境安全管理。成人患者应关注假性骨折和骨痛。定期复查 ALP、骨密度和 X 线等项目，具体频率由专科团队根据年龄、病情和治疗计划决定。',
    fertilityOrFamily:
      '本病可呈常染色体显性或隐性遗传。建议进行遗传咨询，明确 ALPL 基因突变类型后可行产前诊断或PGT。显性遗传患者每次妊娠有50%概率遗传突变，但病情轻重不一定与父母相同；隐性遗传者病情通常更重。若家族中已有患者，可向医生咨询家庭成员基因筛查和 ALP 检测是否适用。',
    emergencySigns:
      '婴儿型出现呼吸困难、紫绀或反复呼吸暂停，提示严重呼吸系统受累，需立即就医。出现难以愈合的骨折、骨骼畸形加重或新发骨折，提示骨骼系统恶化，需尽快评估。出现癫痫发作，提示可能存在维生素B6代谢异常（婴儿型特有），需紧急处理。牙龈感染可能波及牙槽骨，口腔科急诊处理。',
  },
  sources: [
    {
      name: 'GeneReviews: Hypophosphatasia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
    },
    {
      name: 'MedlinePlus Genetics: Hypophosphatasia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hypophosphatasia/',
    },
  ],
  sourceName: 'GeneReviews: Hypophosphatasia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 351,
    name: 'hypophosphatasia-journey.png',
    url: '/images/diseases/hypophosphatasia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHomozygousHypercholesterolemia: DiseaseDraft = {
  ...entity(48, 'disease-homozygous-hypercholesterolemia'),
  name: '纯合子家族性高胆固醇血症',
  nameEn: 'Homozygous Familial Hypercholesterolemia',
  slug: 'homozygous-hypercholesterolemia',
  oneSentence:
    '纯合子家族性高胆固醇血症是一种严重遗传性脂代谢疾病，患者LDL-C水平极度升高，童年期即可出现皮肤黄色瘤和早发动脉粥样硬化。',
  plainName: '纯合子家族性高胆固醇血症',
  prevalence:
    '极为罕见，全球患病率约为 1/160,000～1/300,000，部分人群因奠基者效应而更高。',
  quickLook: {
    whatItIs:
      '这是家族性高胆固醇血症中最严重的形式之一，患者从出生起 LDL-C 明显升高，儿童期即可出现黄色瘤和早发动脉粥样硬化风险。',
    whoToSeeFirst:
      '优先到心血管内科或内分泌科就诊；儿童患者建议在儿科心脏病专科随访；如已有胸痛或心脏症状，应到心脏科评估；脂代谢专科或罕见病中心可提供更全面的管理。',
    isGenetic:
      '通常与 LDLR、APOB、PCSK9、LDLRAP1 等基因有关。临床上可见双等位变异、复合杂合或功能上接近纯合的严重表型，遗传解释需要结合基因检测和家系资料。',
    hasTreatment:
      '需要脂代谢/心血管专科长期管理，可能涉及多药联合降脂、脂蛋白单采、冠脉风险评估和少数情况下更复杂治疗选择；不能自行套用普通高胆固醇方案。',
    commonDelayReason:
      '儿童期LDL-C升高常被忽视或归因于饮食；皮肤黄色瘤易被误认为普通皮肤问题；胸痛等症状出现时动脉硬化已相当严重。',
  },
  patientJourney: {
    whenToSuspect: [
      '皮肤（尤其手背、跟腱、肘部、膝部）出现黄色或橙色丘疹样结节（黄色瘤）。',
      '未成年出现胸闷、心绞痛等心脏症状。',
      '家庭成员中有多人年轻时因心脏病去世或需要放支架。',
      '血生化检查发现LDL-C水平显著升高（远高于正常上限，需警惕极高水平）。',
    ],
    commonWrongTurns: [
      '仅以饮食控制为主，未认识到这是基因突变引起的代谢疾病。',
      '皮肤黄色瘤被误诊为普通疣或脂肪瘤，未做血脂检查。',
      '年轻患者出现心脏病症状，未追查遗传性高胆固醇血症可能。',
    ],
    firstDepartments: [
      '心血管内科',
      '内分泌科或脂代谢专科',
      '儿科（儿童患者）',
      '皮肤科（黄色瘤评估）',
    ],
    diagnosisChecklist: [
      '空腹血脂全套：总胆固醇、LDL-C、HDL-C、甘油三酯水平。',
      '脂蛋白（a）水平检测。',
      '心血管评估：颈动脉超声、心脏彩超、冠脉CT或冠脉造影（根据年龄和症状）。',
      '跟腱和皮肤黄色瘤检查及记录。',
      '基因检测明确 LDLR、ApoB、PCSK9、LDLRAP1 等基因突变类型。',
      '家族成员 cascade 筛查（级联筛查）。',
    ],
    testsToAskAbout: [
      '我的LDL-C具体数值是多少，比正常值高出多少？',
      '是否需要做基因检测来确认具体类型？',
      '我需要进行哪些心血管检查，间隔多久复查一次？',
      '我的家人应该如何进行筛查？',
    ],
    questionsForDoctor: [
      '目前 LDL-C 水平和动脉粥样硬化风险处于什么阶段？',
      '需要哪些药物或非药物治疗组合？治疗目标和监测频率是什么？',
      '是否需要脂蛋白单采或转诊到脂代谢/心血管专科中心评估？',
      '家族成员应如何筛查血脂和基因风险？',
    ],
  },
  medicalSections: {
    symptoms:
      '自幼出现的皮肤黄色瘤（好发于跟腱、手背、肘部、臀部）、早发角膜环（40岁前）、进行性动脉粥样硬化（可累及冠脉、颈动脉、主动脉），严重者在儿童期或青少年期即出现心绞痛、心肌梗死，甚至需要接受介入或搭桥手术。',
    diagnosis:
      '依据极高 LDL-C 水平（未治疗时远高于正常上限）、皮肤黄色瘤、早发心血管病家族史，以及基因检测（LDLR 等基因突变）确诊；级联筛查有助于发现更多家族成员。',
    treatment:
      '治疗通常需要在脂代谢和心血管专科下进行强化、长期和联合管理，包括生活方式支持、多类降脂药物、脂蛋白单采和动脉粥样硬化并发症处理。是否适合新型药物、介入、外科或移植相关评估，需要根据基因类型、LDL-C 水平、心血管受累和当地可及性由专科团队判断。',
    longTermCare:
      '需要心血管内科、代谢内分泌科、营养科等多学科长期管理；每3～6个月复查血脂，每1～2年评估动脉硬化进展；严格低饱和脂肪、低胆固醇饮食；避免剧烈运动诱发心脏事件，但适度有氧运动有益；关注患者及家属心理健康。',
    fertilityOrFamily:
      '建议家庭成员进行系统性的级联筛查，早期发现、尽早干预；患者妊娠需多学科评估，脂质代谢专科、产科和心脏科共同管理；他汀类药物在孕期通常停用。',
    emergencySigns:
      '突发胸痛或压迫感（可能为急性冠脉事件）；胸闷伴呼吸困难、心悸（心绞痛或心功能不全表现）；单侧肢体无力或言语不清（需排除脑血管事件）。',
  },
  sources: [
    {
      name: 'GeneReviews: Familial Hypercholesterolemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
    },
    {
      name: 'MedlinePlus Genetics: Familial hypercholesterolemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-hypercholesterolemia/',
    },
    {
      name: 'European Atherosclerosis Society consensus update on HoFH',
      type: 'clinical-guideline',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10314327/',
    },
  ],
  sourceName: 'GeneReviews: Familial Hypercholesterolemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 347,
    name: 'homozygous-hypercholesterolemia-journey.png',
    url: '/images/diseases/homozygous-hypercholesterolemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

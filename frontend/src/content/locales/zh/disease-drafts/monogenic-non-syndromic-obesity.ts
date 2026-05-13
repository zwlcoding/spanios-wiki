import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMonogenicNonSyndromicObesity: DiseaseDraft = {
  ...entity(2050, 'disease-monogenic-non-syndromic-obesity'),
  name: '单基因非综合征性肥胖',
  nameEn: 'Monogenic non-syndromic obesity',
  alias: '单基因肥胖；非综合征性遗传性肥胖；第二批罕见病目录第 50 项',
  slug: 'monogenic-non-syndromic-obesity',
  oneSentence:
    '单基因非综合征性肥胖是由单个基因变异导致的早发重度肥胖，常影响饥饿感、饱腹感和能量调节，并不等同于普通生活方式问题。',
  plainName: '一种从很小年龄开始、常伴强烈饥饿感的遗传性肥胖',
  prevalence:
    '已纳入中国第二批罕见病目录；总体罕见，但在 5 岁前快速出现重度肥胖并伴持续饥饿感的人群中应主动考虑。',
  quickLook: {
    whatItIs:
      '这类疾病多影响瘦素-黑皮质素通路。孩子可能出生体重正常，但很早出现体重快速增加、很难产生饱腹感和反复寻食行为。',
    whoToSeeFirst:
      '建议从儿童内分泌或内分泌代谢科开始，同时需要营养、心理和医学遗传团队参与；目标是查明原因并减少指责和羞耻感。',
    isGenetic:
      '可与 LEP、LEPR、POMC、PCSK1、MC4R、SIM1 等基因有关，遗传方式因基因而异；基因结果会影响家系评估和部分药物选择。',
    hasTreatment:
      '治疗包括不污名化的生活方式支持、并发症筛查、心理和家庭支持。部分 POMC、PCSK1、LEPR 等缺陷患者在可及地区可评估 setmelanotide 等靶向药物。',
    commonDelayReason:
      '很多家庭长期被简单归因为“吃得多”或“自控差”，没有看到强烈饥饿感、早发年龄、家族史和内分泌线索。',
  },
  patientJourney: {
    whenToSuspect: [
      '5 岁前出现快速、明显的体重增加，伴持续强烈饥饿感、很难吃饱或反复寻食。',
      '家庭已经长期努力调整饮食和活动，但孩子仍明显增重，且饥饿感非常突出。',
      '合并内分泌线索：如红发和肾上腺功能问题提示 POMC，低血糖或慢性腹泻提示 PCSK1，青春发育或免疫问题提示 LEPR 等。',
      '家族中有早发重度肥胖，或父母近亲婚配、兄弟姐妹类似表现。',
    ],
    commonWrongTurns: [
      '只强调意志力或责备家庭，没有评估早发重度肥胖和强烈饥饿感背后的生物学原因。',
      '只做普通减重建议，没有筛查睡眠呼吸暂停、脂肪肝、糖代谢、血压和心理健康。',
      '把所有遗传性肥胖都当作综合征性疾病，忽略没有明显畸形或智力问题的单基因非综合征性类型。',
    ],
    firstDepartments: [
      '儿童内分泌科',
      '内分泌代谢科',
      '医学遗传科',
      '营养科和心理支持门诊',
    ],
    diagnosisChecklist: [
      '整理从出生到现在的身高、体重、BMI 曲线和体重快速增加的年龄。',
      '记录饥饿感、寻食行为、夜间进食、饱腹感、家庭干预尝试和运动限制因素。',
      '带既往血糖、胰岛素、血脂、肝功能、甲状腺、皮质醇、睡眠呼吸和肝脏影像结果。',
      '准备家族体重史、近亲婚配情况、青春发育、免疫、腹泻、低血糖和肾上腺相关病史。',
    ],
    testsToAskAbout: [
      '生长曲线和内分泌评估，排除甲状腺功能减退、库欣综合征、下丘脑损伤和药物因素。',
      '单基因肥胖相关基因检测，如 LEP、LEPR、POMC、PCSK1、MC4R、SIM1 等。',
      '并发症筛查：糖耐量或 HbA1c、血脂、肝功能和脂肪肝、血压、睡眠呼吸暂停、骨骼关节和心理健康。',
      '若发现可治疗通路变异，询问是否符合 setmelanotide 或其他靶向治疗/临床研究条件。',
    ],
    questionsForDoctor: [
      '这些表现是否提示单基因肥胖，而不是普通多基因肥胖或综合征性肥胖？',
      '基因检测结果会怎样改变治疗、家属筛查和生育咨询？',
      '我们应该如何管理强烈饥饿感，同时避免让孩子产生羞耻和焦虑？',
      '需要筛查哪些并发症？是否有适合的靶向药物或临床研究？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>单基因非综合征性肥胖通常表现为婴幼儿或学龄前起病的快速重度体重增加，常伴明显食欲亢进、饱腹感差、反复寻食和进食后很快又饿。孩子通常没有典型综合征性外貌或多发畸形，因此容易被误解。</p><p>不同基因可有不同伴随线索。POMC 缺陷可能有红发、浅肤色和肾上腺功能不全；PCSK1 缺陷可伴低血糖、腹泻或内分泌异常；LEPR 缺陷可有青春发育或免疫相关问题。MC4R 相关肥胖相对更常见，可表现为早发重度肥胖和身高增长较快。</p>',
    diagnosis:
      '<p>诊断从生长曲线开始：起病年龄、BMI 增长速度、饥饿感和家族史很关键。医生会排除甲状腺功能减退、库欣综合征、下丘脑病变、药物相关体重增加、综合征性肥胖和常见多基因肥胖。</p><p>当 5 岁前重度肥胖、强烈饥饿感、家族聚集或内分泌线索明显时，应考虑基因检测。结果需要由遗传或内分泌团队解释，因为不同基因、变异等级和遗传方式会影响诊断确定性、亲属筛查和用药选择。</p>',
    treatment:
      '<p>治疗不应从责备开始。基础管理包括规律饮食结构、家庭环境支持、适合能力的活动、睡眠管理、心理支持和学校协作，同时筛查并处理糖代谢异常、脂肪肝、高血压、血脂异常、睡眠呼吸暂停、骨关节疼痛和情绪问题。</p><p>对于特定基因缺陷，靶向药物正在改变治疗路径。Setmelanotide 已在部分国家获批用于经基因确认的 POMC、PCSK1、LEPR 等罕见遗传性肥胖人群；是否适合取决于基因结果、年龄、当地批准范围和药物可及性。严重病例还需个体化讨论药物、代谢手术或研究性治疗的风险收益。</p>',
    longTermCare:
      '<p>长期照护应以减少并发症和改善生活质量为目标，而不是只看体重数字。建议定期追踪身高体重、腰围、血压、睡眠、肝脏和代谢指标，并关注校园欺凌、进食困扰、焦虑抑郁和家庭压力。</p><p>家庭可以与医生一起制定现实、可持续的环境策略，例如规律餐次、减少高诱惑食物暴露、保障睡眠、安排适合体能的运动，同时避免用羞辱、惩罚或极端节食管理孩子。</p>',
    fertilityOrFamily:
      '<p>遗传风险取决于具体基因和遗传方式。常染色体隐性类型中，父母可能都是携带者；常染色体显性类型中，亲属也可能有不同程度表现。确诊后建议提供家系检测、携带者咨询和生育选择讨论。</p>',
    emergencySigns:
      '<p>若出现严重低血糖、意识改变、脱水、持续呕吐腹泻、疑似肾上腺危象、睡眠中呼吸暂停明显加重、胸痛或严重情绪危机，应及时急诊。使用靶向药或其他减重药时，出现严重过敏、情绪显著变化或医生提示的严重不良反应，也应尽快联系医疗团队。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'U.S. FDA: FDA approves first treatment for weight management for people with certain rare genetic conditions',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-weight-management-people-certain-rare-genetic-conditions',
    },
  ],
  symptoms:
    '<p>主要表现为 5 岁前起病的快速重度体重增加、强烈饥饿感、饱腹感差和反复寻食，可伴特定基因相关内分泌或代谢线索。</p>',
  diagnosis:
    '<p>诊断结合生长曲线、饥饿感、家族史、内分泌评估和 LEP、LEPR、POMC、PCSK1、MC4R、SIM1 等基因检测，并排除综合征性或继发性肥胖。</p>',
  treatment:
    '<p>治疗包括不污名化的生活方式和家庭支持、并发症筛查、心理支持，部分经基因确认的患者可评估 setmelanotide 等靶向治疗可及性。</p>',
  prognosis:
    '<p>长期结局取决于基因类型、并发症控制、家庭和心理支持以及靶向治疗可及性；越早识别，越能减少责备和不必要的延误。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 404,
    name: 'monogenic-non-syndromic-obesity-journey.png',
    url: '/images/diseases/monogenic-non-syndromic-obesity-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

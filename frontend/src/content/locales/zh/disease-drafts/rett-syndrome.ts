import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRettSyndrome: DiseaseDraft = {
  ...entity(2072, 'disease-rett-syndrome'),
  name: 'Rett 综合征',
  nameEn: 'Rett syndrome',
  alias: 'RTT；Rett 综合征；第二批罕见病目录第 72 项',
  oneSentence:
    'Rett 综合征是一种多由 MECP2 变异导致的神经发育疾病，儿童早期常在一段相对正常发育后出现语言和手部功能倒退、重复手动作、癫痫和呼吸运动问题。',
  plainName: '孩子早期发育后出现倒退和重复手动作的遗传性神经发育病',
  prevalence:
    '已纳入中国第二批罕见病目录；MedlinePlus Genetics 资料估计约每 9,000-10,000 名女性 1 例，男性受累少见且常更重。',
  quickLook: {
    whatItIs:
      '典型 Rett 综合征多见于女孩，出生后最初数月可看似正常，随后出现发育停滞和倒退，尤其是语言、沟通和有目的手部使用减少。',
    whoToSeeFirst:
      '发育倒退、手部搓洗样重复动作、步态异常、癫痫、呼吸节律异常或小头趋势，应到儿童神经科、发育行为儿科和医学遗传科。',
    isGenetic:
      '多数由 MECP2 新发变异导致，通常不是父母遗传；但确诊后仍需要遗传咨询，解释复发风险和家系检测。',
    hasTreatment:
      '目前以多学科康复和并发症管理为主。美国 FDA 已批准 trofinetide 用于 2 岁及以上 Rett 综合征患者，但可及性和副作用需专科评估。',
    commonDelayReason:
      '早期常被误认为孤独症、脑瘫、癫痫或单纯发育迟缓；如果没有注意到“先获得技能再丢失”和典型手动作，诊断会延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '6-18 个月左右出现发育停滞或倒退，语言、沟通、抓握或有目的手部使用减少。',
      '出现反复搓手、拍手、洗手样动作，伴步态不稳、肌张力异常或手脚冰凉。',
      '有癫痫、睡眠问题、呼吸暂停/过度换气、喂养吞咽困难、便秘或脊柱侧弯。',
      '女孩更常见；男孩若有严重早发脑病、癫痫和发育问题也应考虑 MECP2 相关疾病。',
    ],
    commonWrongTurns: [
      '只按孤独症谱系或发育迟缓干预，没有追问技能倒退时间线和手部动作。',
      '只控制癫痫，没有同步评估吞咽、呼吸、营养、骨骼和沟通辅助。',
      '基因结果阴性或变异意义不明后，没有请遗传专科复核检测范围和表型匹配。',
    ],
    firstDepartments: [
      '儿童神经科',
      '发育行为儿科',
      '医学遗传科',
      '康复医学科和营养/吞咽门诊',
    ],
    diagnosisChecklist: [
      '整理出生史、发育里程碑、何时开始倒退、视频和学校/康复评估。',
      '带脑电图、脑 MRI、癫痫用药、睡眠、呼吸、吞咽和营养记录。',
      '记录手部动作、行走能力、脊柱侧弯、便秘、疼痛、沟通方式和日常照护需求。',
    ],
    testsToAskAbout: [
      'MECP2 测序和缺失/重复分析，必要时扩展到相关神经发育基因。',
      '癫痫脑电图、吞咽评估、营养评估、骨密度/脊柱侧弯和呼吸睡眠评估。',
      '是否适合 trofinetide 或临床试验，以及腹泻、呕吐等副作用监测。',
    ],
    questionsForDoctor: [
      '孩子的表现符合典型 Rett、非典型 Rett，还是其他 MECP2 相关疾病？',
      '怎样安排沟通辅助、物理/作业/言语吞咽康复和学校支持？',
      '癫痫、呼吸、营养、便秘和脊柱侧弯分别多久复查？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Rett 综合征常表现为早期发育相对正常后出现停滞和倒退。孩子可能逐渐丢失语言、沟通和有目的手部使用，出现搓手、拍手或洗手样重复动作，伴运动协调差、步态异常和发育迟缓。</p><p>常见合并问题包括癫痫、呼吸节律异常、睡眠障碍、喂养吞咽困难、胃食管反流、便秘、脊柱侧弯、骨密度下降、手脚冰凉和焦虑/易激惹。</p>',
    diagnosis:
      '<p>诊断需要把临床发育轨迹、神经系统检查和遗传检测结合。MECP2 变异支持诊断，但医生仍要判断表型是否匹配，并区分典型和非典型 Rett。</p><p>评估还包括脑电图、癫痫类型、营养吞咽、呼吸睡眠、骨骼和康复功能。鉴别诊断包括孤独症谱系障碍、脑瘫、癫痫性脑病、CDKL5/STXBP1 等其他神经发育疾病。</p>',
    treatment:
      '<p>治疗以长期多学科管理为主，包括癫痫控制、营养和吞咽支持、便秘和反流处理、物理/作业/言语康复、辅助沟通、睡眠和呼吸问题管理、脊柱侧弯和骨健康随访。</p><p>Trofinetide 已在美国获批用于 2 岁及以上 Rett 综合征患者，但是否可用、是否适合以及腹泻、呕吐等不良反应，需要由熟悉 Rett 的医生评估。</p>',
    longTermCare:
      '<p>长期照护应围绕功能、舒适度和家庭可持续照护来安排。需要定期评估癫痫、吞咽和营养、体重、呼吸睡眠、骨密度、脊柱侧弯、疼痛、便秘和沟通能力。</p><p>辅助沟通、姿势管理、支具、轮椅/站立架和学校支持能改善参与度。照护者也需要喘息服务和心理支持。</p>',
    fertilityOrFamily:
      '<p>多数 MECP2 变异为新发，父母复发风险通常低，但不能简单等同为零。遗传咨询可解释生殖细胞嵌合、家系检测、产前诊断或胚胎植入前遗传检测选择。</p>',
    emergencySigns:
      '<p>持续或成串癫痫、呼吸暂停发紫、严重呛咳或吸入、脱水、体重快速下降、持续呕吐、严重便秘腹胀、疑似骨折或突然无法行走，应尽快就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Rett syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/rett-syndrome',
    },
    {
      name: 'FDA: FDA approves first treatment for Rett Syndrome',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-rett-syndrome',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>常见发育停滞或倒退、语言和手功能丢失、重复手动作、步态异常、癫痫、呼吸睡眠问题、喂养困难、便秘和脊柱侧弯。</p>',
  diagnosis:
    '<p>诊断结合发育倒退和典型体征、儿童神经评估、MECP2 基因检测，并评估癫痫、吞咽、呼吸、营养和骨骼并发症。</p>',
  treatment:
    '<p>治疗以多学科康复和并发症管理为主；trofinetide 在部分地区获批用于 2 岁及以上患者，需评估可及性和胃肠道副作用。</p>',
  prognosis:
    '<p>多数患者需要终身支持，功能差异较大；规范管理癫痫、营养、呼吸、骨骼和沟通可改善生活质量。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'rett-syndrome',
  categorySlug: 'neurological',
  charityIds: [10, 81],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 426,
    name: 'rett-syndrome-journey.png',
    url: '/images/diseases/rett-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

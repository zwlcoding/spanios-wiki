import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryIgf1Deficiency: DiseaseDraft = {
  ...entity(2065, 'disease-primary-igf1-deficiency'),
  name: '原发性胰岛素样生长因子-1缺乏症',
  nameEn: 'Primary IGF1 deficiency',
  alias:
    '原发性 IGF-1 缺乏；严重原发性 IGF-1 缺乏；Laron 综合征相关；第二批罕见病目录第 65 项',
  slug: 'primary-igf1-deficiency',
  oneSentence:
    '原发性胰岛素样生长因子-1缺乏症是身体不能产生足够 IGF-1 或不能响应生长激素的疾病，儿童常表现为出生后生长显著缓慢和严重矮小。',
  plainName: '一种生长激素有了但 IGF-1 不足、孩子仍长不高的罕见内分泌病',
  prevalence:
    '已纳入中国第二批罕见病目录；严重原发性 IGF-1 缺乏非常罕见，典型情况是身高和 IGF-1 都很低，但生长激素正常或升高。',
  quickLook: {
    whatItIs:
      'IGF-1 是生长激素发挥长高作用的重要下游信号。原发性 IGF-1 缺乏时，问题不在 GH 缺乏，而在 GH 受体/信号通路或 IGF1 产生不足。',
    whoToSeeFirst:
      '孩子严重矮小、生长速度慢，但 GH 激发试验正常或偏高、IGF-1 很低，应到儿童内分泌科和医学遗传科评估。',
    isGenetic:
      '可与 GHR、STAT5B、IGF1、IGFALS 等基因有关，部分为常染色体隐性遗传。确诊后应做遗传咨询和家系评估。',
    hasTreatment:
      '重组生长激素通常不能替代 IGF-1 治疗。符合严重原发性 IGF-1 缺乏条件的儿童，在部分地区可用 mecasermin，并需严格防低血糖。',
    commonDelayReason:
      '容易被误认为普通 GHD 或家族性矮小；如果只看身高而不区分 GH、IGF-1 和营养/甲状腺/慢性病原因，会导致治疗方向错误。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生身长接近正常或偏小，出生后生长速度持续很慢，身高严重低于同龄人。',
      'IGF-1 和/或 IGFBP-3 明显低，但 GH 分泌正常或升高。',
      '伴婴儿期低血糖、前额突出、鼻梁低、蓝巩膜、小手小脚、青春期延迟或肌力差。',
      '父母近亲婚配、家族中多人严重矮小，或既往 GH 治疗反应很差。',
    ],
    commonWrongTurns: [
      '把 GH 激发试验正常后的严重矮小简单归因于遗传矮小，没有继续查 IGF-1 通路。',
      '把 mecasermin 当作普通生长激素替代品，忽略它不能用于 GH 缺乏、营养不良或甲减导致的继发性 IGF-1 低。',
      '用药时不配餐或运动前后管理不当，增加低血糖风险。',
    ],
    firstDepartments: [
      '儿童内分泌科',
      '医学遗传科',
      '营养科（排除继发原因）',
      '眼科/耳鼻喉科（治疗监测时）',
    ],
    diagnosisChecklist: [
      '带出生资料、连续身高体重曲线、父母身高和青春发育记录。',
      '带 IGF-1、IGFBP-3、GH 激发试验、甲状腺、营养、肝肾和慢性炎症筛查结果。',
      '记录低血糖、喂养、牙齿、听力、视力、睡眠打鼾、青春期和家族矮小史。',
      '如做过 GH 或 IGF-1 治疗，记录剂量、依从性、身高反应和低血糖事件。',
    ],
    testsToAskAbout: [
      '确认是否为严重原发性 IGF-1 缺乏：身高 SDS、IGF-1 SDS、正常/升高 GH 和继发原因排除。',
      'GHR、STAT5B、IGF1、IGFALS 等相关基因检测。',
      '骨龄、青春发育、垂体和其他内分泌评估。',
      '若使用 mecasermin，如何监测低血糖、颅高压、扁桃体/腺样体肥大、髋关节和肿瘤禁忌。',
    ],
    questionsForDoctor: [
      '这是原发性 IGF-1 缺乏，还是 GHD、营养不良、甲减或慢性病导致的继发性 IGF-1 低？',
      '孩子是否符合 mecasermin 适应条件？为什么 GH 治疗可能无效或不合适？',
      '打针与进餐、运动、低血糖监测应该怎样安排？',
      '家属是否需要携带者检测？未来生育有哪些选择？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>原发性 IGF-1 缺乏以严重生长迟缓和矮小为核心。典型 Laron 综合征患者出生后很快出现生长速度慢，可伴前额突出、鼻梁低、蓝巩膜、小手小脚、牙齿异常、肌力和耐力下降、婴儿期低血糖和青春期延迟。</p><p>不同基因表现不同。STAT5B 相关疾病可伴免疫功能异常或肺部问题；IGFALS 缺陷可表现为 IGF-1/IGFBP-3 低和身材矮小但程度不一。</p>',
    diagnosis:
      '<p>诊断关键是区分原发性和继发性 IGF-1 低。营养不良、甲状腺功能减退、慢性炎症、肝肾病、糖皮质激素使用和 GHD 都可让 IGF-1 降低，需要先排除。</p><p>严重原发性 IGF-1 缺乏通常表现为身高 SDS ≤ -3、基础 IGF-1 SDS ≤ -3，且 GH 正常或升高。基因检测可确认 GHR、IGF1、STAT5B、IGFALS 等通路异常，并指导遗传咨询。</p>',
    treatment:
      '<p>治疗不能简单照搬 GHD。若问题是 GH 不敏感，重组 GH 通常效果有限。符合条件的儿童可由专科评估重组人 IGF-1（mecasermin）治疗，用药必须与餐食或点心配合，以降低低血糖风险。</p><p>治疗期间需要监测身高速度、体重、骨龄、血糖、IGF-1 反应、颅内压增高、扁桃体/腺样体肥大、睡眠呼吸、髋关节滑脱和肿瘤禁忌。若有恶性肿瘤或骨骺已闭合，治疗选择会受限。</p>',
    longTermCare:
      '<p>随访需要儿童内分泌、遗传、营养、口腔、眼科和耳鼻喉团队协作。家长应记录注射时间、进餐、低血糖症状、运动、身高体重和不良反应。</p><p>青春期和骨龄进展会影响最终身高窗口。成年后仍可能需要关注代谢、骨骼、体成分和生育相关问题。</p>',
    fertilityOrFamily:
      '<p>许多原发性 IGF-1 缺乏相关疾病为常染色体隐性遗传，父母可能是携带者；少数有其他遗传方式。明确基因后，家属可讨论携带者检测、产前诊断或胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>治疗中出现低血糖症状如出汗、颤抖、意识模糊、抽搐，或严重头痛、呕吐、视物模糊、打鼾/呼吸暂停明显加重、髋膝痛或跛行，应立即联系医生或急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Laron syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/laron-syndrome/',
    },
    {
      name: 'INCRELEX Prescribing Information: Severe Primary IGF-1 Deficiency',
      type: 'official',
      url: 'https://medlibrary.org/lib/rx/meds/increlex-1/',
    },
  ],
  symptoms:
    '<p>主要表现为严重矮小和生长速度慢，常伴 IGF-1 很低而 GH 正常或升高，可有婴儿低血糖、特殊面容、小手小脚、青春期延迟、肌力差等。</p>',
  diagnosis:
    '<p>诊断需排除继发性 IGF-1 低，结合身高 SDS、IGF-1 SDS、GH 水平、骨龄和 GHR、IGF1、STAT5B、IGFALS 等基因检测。</p>',
  treatment:
    '<p>符合严重原发性 IGF-1 缺乏条件的儿童可评估 mecasermin；它不能替代 GH 治疗，需配餐给药并监测低血糖、颅高压、腺样体/扁桃体肥大和髋关节风险。</p>',
  prognosis:
    '<p>预后取决于基因类型、诊断年龄、治疗可及性和依从性；早期识别可避免把 GH 不敏感误当作普通 GHD 治疗。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 419,
    name: 'primary-igf1-deficiency-journey.png',
    url: '/images/diseases/primary-igf1-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

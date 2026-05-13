import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseInflammatoryMyofibroblasticTumor: DiseaseDraft = {
  ...entity(2042, 'disease-inflammatory-myofibroblastic-tumor'),
  name: '炎性肌纤维母细胞瘤',
  nameEn: 'Inflammatory myofibroblastic tumor',
  alias: 'IMT、炎性假瘤相关肿瘤、第二批罕见病目录第 42 项',
  slug: 'inflammatory-myofibroblastic-tumor',
  oneSentence:
    '炎性肌纤维母细胞瘤是一种少见的中间性软组织肿瘤，可发生在肺、腹腔、盆腔、膀胱、头颈部等多处，常需要病理和 ALK 等分子检测来区分炎症、感染和其他肿瘤。',
  plainName: '看起来像炎症、但需要肿瘤专科确认的罕见软组织肿瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；GARD 将 inflammatory myofibroblastic tumor 列为罕见病，儿童、青少年和成人均可发生。',
  quickLook: {
    whatItIs:
      'IMT 由肌纤维母细胞样肿瘤细胞和炎症细胞混合组成。多数局部生长，少数可复发、侵袭或转移；ALK、ROS1、NTRK 等融合可影响治疗选择。',
    whoToSeeFirst:
      '发现不明肿块、反复发热炎症指标升高但影像有实体病灶，或病理提示 IMT，应到肿瘤科、相关外科和病理/分子诊断门诊评估。',
    isGenetic:
      'IMT 通常不是家族遗传病，家属一般不需要筛查。分子检测主要是为了确认肿瘤驱动改变和选择靶向治疗。',
    hasTreatment:
      '能够完整切除时，手术常是核心治疗。无法切除、复发、转移或 ALK 阳性等情况，可讨论 ALK 抑制剂或其他靶向治疗、系统治疗和临床试验。',
    commonDelayReason:
      'IMT 可表现为发热、贫血、炎症指标升高或局部疼痛，容易被长期当作感染、炎症包块或普通良性肿瘤。',
  },
  patientJourney: {
    whenToSuspect: [
      '影像发现肺、腹腔、盆腔、膀胱、头颈部或软组织肿块，常规抗感染治疗后不消退。',
      '肿块伴反复发热、体重下降、贫血、血小板升高或 CRP/ESR 升高。',
      '病理报告出现 IMT、spindle cell lesion、ALK 阳性或炎性假瘤样描述。',
      '手术后原部位复发，或出现新的影像病灶。',
    ],
    commonWrongTurns: [
      '只按感染或炎性包块反复用抗生素，没有病理确认。',
      '病理结果不典型但没有送上级病理复核和免疫组化/分子检测。',
      '只做局部处理，没有询问 ALK、ROS1、NTRK 等靶向相关检测。',
      '切除后认为完全没事，没有按肿瘤专科计划复查。',
    ],
    firstDepartments: [
      '肿瘤科',
      '相关外科',
      '病理科/分子诊断门诊',
      '影像科会诊',
    ],
    diagnosisChecklist: [
      '带所有 CT、MRI、超声或 PET-CT 原始影像和报告。',
      '带穿刺、手术病理、免疫组化、分子检测和病理切片/蜡块信息。',
      '记录发热、疼痛、体重变化、贫血、炎症指标和抗感染治疗反应。',
      '整理手术记录、切缘情况、复发时间线和既往肿瘤治疗。',
    ],
    testsToAskAbout: [
      '病灶部位增强 CT/MRI，用于判断范围、邻近器官和手术可切除性。',
      '病理复核及 ALK 免疫组化，必要时 NGS 或融合基因检测。',
      '全身分期或复发评估，按病灶部位选择胸腹盆影像等。',
      '是否适合完整切除、观察、靶向治疗或临床试验。',
    ],
    questionsForDoctor: [
      '我的病灶能否完整切除？切缘情况会怎样影响复发风险？',
      '是否做过 ALK、ROS1、NTRK 等检测？结果是否能指导治疗？',
      '如果暂时不手术，观察的风险和复查频率是什么？',
      '复发或无法切除时，靶向药、系统治疗或临床试验有哪些选择？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>IMT 的表现取决于部位。肺部可有咳嗽、胸痛或偶然发现；腹腔或盆腔可有腹痛、腹胀、肠梗阻样表现；膀胱可有血尿或尿路症状。部分患者有发热、乏力、体重下降、贫血、血小板升高和炎症指标升高。</p><p>有些患者几乎没有症状，只是在影像检查中发现肿块。病灶局部复发并不少见，少数可表现更侵袭。</p>',
    diagnosis:
      '<p>确诊依靠病理，通常需要免疫组化和分子检测辅助。ALK 阳性支持诊断并可指导靶向治疗，但 ALK 阴性并不能完全排除 IMT，医生可能继续查 ROS1、NTRK、RET 等融合。</p><p>需要与感染性炎症包块、炎性假瘤、IgG4 相关疾病、平滑肌肿瘤、胃肠间质瘤、肉瘤、淋巴瘤和转移瘤等鉴别。复杂病例应做病理复核。</p>',
    treatment:
      '<p>能完整切除的局限性 IMT 通常首选手术。是否需要观察、再次手术或术后治疗，要看病灶部位、切缘、复发风险和病理/分子结果。</p><p>对无法切除、复发或转移性 IMT，ALK 阳性患者可考虑 ALK 抑制剂；其他融合阳性患者可能有相应靶向治疗机会。治疗方案需由多学科团队制定。</p>',
    longTermCare:
      '<p>随访包括局部影像、症状、炎症指标、术后功能和药物副作用。复查间隔取决于病灶部位、切除是否完整、分子结果和复发风险。</p>',
    fertilityOrFamily:
      '<p>IMT 通常不按遗传病管理。年轻患者如需长期靶向药、化疗或盆腔手术/放疗，应提前咨询生育力保存、妊娠安全和避孕计划。</p>',
    emergencySigns:
      '<p>出现肠梗阻样腹痛呕吐、咯血、严重血尿、呼吸困难、持续高热、剧烈疼痛、术后感染或靶向药严重不良反应，应尽快急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Inflammatory myofibroblastic tumor',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/13007/inflammatory-myofibroblastic-tumor',
    },
  ],
  symptoms:
    '<p>症状取决于部位，可有咳嗽、胸痛、腹痛、腹胀、血尿或局部肿块，也可伴发热、乏力、贫血、体重下降和炎症指标升高。</p>',
  diagnosis:
    '<p>诊断依靠病理、免疫组化和分子检测，重点确认 ALK 及其他融合基因，并与感染、炎症包块和其他软组织肿瘤鉴别。</p>',
  treatment:
    '<p>可完整切除时手术是核心治疗；无法切除、复发或转移时，可根据 ALK、ROS1、NTRK 等结果讨论靶向治疗或临床试验。</p>',
  prognosis:
    '<p>多数局限性病灶经规范治疗可长期控制，但复发风险存在，少数更侵袭，需要按分子结果和切除情况随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 396,
    name: 'inflammatory-myofibroblastic-tumor-journey.png',
    url: '/images/diseases/inflammatory-myofibroblastic-tumor-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

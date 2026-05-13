import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseClearCellSarcomaOfKidney: DiseaseDraft = {
  ...entity(2014, 'disease-clear-cell-sarcoma-of-kidney'),
  name: '肾透明细胞肉瘤',
  nameEn: 'Clear cell sarcoma of kidney',
  alias: 'CCSK、儿童肾透明细胞肉瘤、第二批罕见病目录第 14 项',
  slug: 'clear-cell-sarcoma-of-kidney',
  oneSentence:
    '肾透明细胞肉瘤是一种罕见儿童肾脏恶性肿瘤，常见于 3 岁以下儿童，需要依靠病理确诊，并由儿童肿瘤多学科团队治疗。',
  plainName: '儿童少见的肾脏恶性肿瘤，需要专门病理和肿瘤团队处理',
  prevalence:
    '已纳入国家第二批罕见病目录；NCI PDQ 资料显示其约占儿童原发肾脏恶性肿瘤的 5%，在美国每年约 20 例，多见于 3 岁前。',
  quickLook: {
    whatItIs:
      '肾透明细胞肉瘤不是 Wilms 瘤的一个亚型，而是独立的儿童肾肿瘤。它可能与 Wilms 瘤表现相似，但复发和转移风险不同，因此病理诊断和分期非常关键。',
    whoToSeeFirst:
      '儿童腹部肿块、腹胀、腹痛、血尿或影像发现肾脏肿瘤，应尽快到儿童肿瘤中心、儿童泌尿外科或儿童外科评估。',
    isGenetic:
      '多数肾透明细胞肉瘤不是典型家族遗传病。是否需要分子检测主要用于病理确认、分型或治疗研究，由肿瘤团队决定。',
    hasTreatment:
      '治疗通常包括手术、化疗，部分分期还需要放疗。具体方案和疗程取决于分期、手术情况、病理结果和中心方案。',
    commonDelayReason:
      '早期可没有特异症状，也可能被当作 Wilms 瘤。真正影响路径的是病理复核、完整分期和是否由有儿童肾肿瘤经验的团队制定方案。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童腹部摸到包块、腹部变大，或洗澡、体检时发现一侧腹部异常隆起。',
      '出现腹痛、血尿、贫血、发热、食欲下降、体重不增或血压升高。',
      '超声、CT 或 MRI 提示肾脏肿瘤，尤其是年龄较小儿童。',
      '已按 Wilms 瘤路径处理，但病理提示肾透明细胞肉瘤或需要复核。',
    ],
    commonWrongTurns: [
      '把腹部包块当作便秘、胀气或普通腹痛反复观察。',
      '没有在儿童肿瘤中心完成影像、手术和病理复核。',
      '病理只给出“肾肿瘤”笼统结果，没有确认是否为 CCSK、Wilms 瘤或其他儿童肾肿瘤。',
      '治疗结束后随访不系统，忽略复发部位和时间需要按专科计划监测。',
    ],
    firstDepartments: [
      '儿童肿瘤科',
      '儿童泌尿外科/儿童外科',
      '病理科',
      '放疗科',
    ],
    diagnosisChecklist: [
      '带齐腹部超声、增强 CT/MRI、胸部影像、实验室检查和所有影像原片。',
      '保存手术记录、病理报告、免疫组化、分子检测和病理切片复核资料。',
      '记录症状开始时间、腹部包块变化、血尿、发热、疼痛、体重和血压。',
      '记录已用化疗药、疗程、放疗、输血和感染等治疗过程。',
    ],
    testsToAskAbout: [
      '腹部增强 CT 或 MRI，用于判断肿瘤范围、血管和淋巴结情况。',
      '胸部影像，以及根据医生判断评估骨、脑或其他转移部位。',
      '手术标本病理、免疫组化和必要的分子检测/病理会诊。',
      '完整分期评估、肾功能、血常规、肝肾功能和治疗前基线检查。',
    ],
    questionsForDoctor: [
      '病理是否已经确认 CCSK？是否需要儿童肾肿瘤病理专家复核？',
      '目前分期是什么？是否有淋巴结、肺、骨或脑等部位受累？',
      '治疗计划包含哪些手术、化疗和放疗？每一步的目标是什么？',
      '治疗期间需要警惕哪些感染、肾功能、心脏或长期副作用？',
      '治疗结束后随访频率、影像部位和持续时间如何安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>肾透明细胞肉瘤多发生在儿童，尤其 3 岁以前。常见发现方式是腹部肿块或腹胀，也可有腹痛、血尿、发热、贫血、食欲下降、体重变化或高血压。部分孩子是在体检或影像检查中发现肾脏肿瘤。</p><p>这些表现与 Wilms 瘤等儿童肾肿瘤很相似，不能只凭症状区分。病理诊断和分期评估决定后续治疗。</p>',
    diagnosis:
      '<p>诊断通常从超声、CT 或 MRI 发现肾脏肿瘤开始，但确诊依靠手术或活检标本的病理。病理医生会结合形态、免疫组化和必要的分子检测区分 CCSK、Wilms 瘤和其他儿童肾肿瘤。</p><p>分期评估需要了解肿瘤是否局限于肾脏、是否有淋巴结或远处转移。CCSK 可转移到肺，也较需关注骨、脑和软组织等部位，具体检查由儿童肿瘤团队决定。</p>',
    treatment:
      '<p>治疗应在有儿童肾肿瘤经验的多学科团队中进行，通常包括手术切除和化疗。NCI PDQ 指出，除部分符合条件的 I 期患者外，II-IV 期常需要手术、化疗和放疗组合。</p><p>治疗方案会根据分期、淋巴结取样、手术完整性、病理结果和孩子整体情况调整。家长应确认治疗计划、疗程、可能副作用和感染处理流程。</p>',
    longTermCare:
      '<p>长期随访关注复发监测、肾功能、血压、心脏和听力等治疗相关长期影响、儿童生长发育和心理支持。复查影像部位和频率应按儿童肿瘤中心方案执行。</p><p>保留病理切片、分期资料和完整治疗记录非常重要，便于复发时判断、跨院会诊和长期生存者管理。</p>',
    fertilityOrFamily:
      '<p>肾透明细胞肉瘤通常不是典型遗传性肿瘤综合征。多数家庭不需要按遗传病筛查，但如果孩子同时有其他先天异常、家族中多发儿童肿瘤或医生怀疑肿瘤易感综合征，可转医学遗传科评估。</p>',
    emergencySigns:
      '<p>治疗期间如出现发热、寒战、精神差、持续呕吐、尿量明显减少、严重腹痛、出血不止、呼吸困难或化疗后白细胞低伴感染表现，应立即急诊并告知正在接受儿童肿瘤治疗。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NCI PDQ: Wilms Tumor and Other Childhood Kidney Tumors Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/kidney/hp/wilms-treatment-pdq',
    },
  ],
  symptoms:
    '<p>常见线索是儿童腹部肿块或腹胀，也可有腹痛、血尿、发热、贫血、食欲下降、体重变化或高血压。</p>',
  diagnosis:
    '<p>影像可发现肾脏肿瘤并帮助分期，但确诊依靠病理、免疫组化和必要的分子检测/病理复核。</p>',
  treatment:
    '<p>治疗通常由儿童肿瘤多学科团队安排，包括手术、化疗，部分分期需要放疗，并按分期和病理结果随访。</p>',
  prognosis:
    '<p>预后与分期、是否完整治疗和是否复发有关；规范病理确认、完整分期和儿童肿瘤中心治疗可降低可避免风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 368,
    name: 'clear-cell-sarcoma-of-kidney-journey.png',
    url: '/images/diseases/clear-cell-sarcoma-of-kidney-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRetinoblastoma: DiseaseDraft = {
  ...entity(1103, 'catalog-china-first-rare-disease-catalog-103'),
  name: '视网膜母细胞瘤',
  nameEn: 'Retinoblastoma',
  alias: 'RB、第一批罕见病目录第 103 项',
  slug: 'retinoblastoma',
  oneSentence:
    '视网膜母细胞瘤是儿童最常见的眼内恶性肿瘤，常与RB1基因改变有关，白瞳、斜视或视力异常需要尽快由眼肿瘤团队评估。',
  plainName: '儿童眼内恶性肿瘤，白瞳和斜视是重要警讯',
  prevalence:
    '已纳入国家第一批罕见病目录；国际资料常估计约每15,000-20,000名新生儿1例。',
  quickLook: {
    whatItIs:
      'RB不是普通拍照反光。白瞳、猫眼样反光、斜视、眼红痛或眼球突出都可能是警讯；越早规范治疗，越有机会兼顾生命安全、眼球保留和视功能。',
    whoToSeeFirst:
      '应尽快看儿童眼底病/眼肿瘤专科或儿童肿瘤团队；疑似时不要长时间观察或自行用眼药。',
    isGenetic:
      'RB可由体细胞或胚系RB1变异导致。双眼、多灶、早发或有家族史时更需遗传咨询；单眼病例也可能存在胚系风险。',
    hasTreatment:
      '治疗按分期、单眼/双眼和扩散风险决定，包括局部治疗、化疗、动脉介入、冷冻/激光、放疗或摘除眼球等。目标首先是保命，其次尽量保眼和保视力。',
    commonDelayReason:
      '白瞳可能被误认为拍照角度问题，斜视被当普通斜视；延误会增加眼外扩散风险。',
  },
  patientJourney: {
    whenToSuspect: [
      '照片中瞳孔反复发白或呈猫眼样反光。',
      '婴幼儿突然或持续斜视、眼球震颤、视物异常。',
      '眼红、眼痛、眼球突出或瞳孔异常。',
      '家族中有人患RB或儿童期眼内肿瘤。',
    ],
    commonWrongTurns: [
      '把白瞳当闪光灯反光，没有尽快散瞳眼底检查。',
      '只按斜视配镜或弱视训练处理，未排除眼底肿瘤。',
      '未做遗传咨询，忽略同胞或未来子女风险。',
    ],
    firstDepartments: [
      '眼科急诊',
      '儿童眼底病/眼肿瘤专科',
      '儿童肿瘤科',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '准备出现白瞳或斜视的照片、起始时间和变化。',
      '带上眼底检查、眼部超声、MRI、治疗记录和家族肿瘤史。',
      '记录是否双眼受累、是否曾有眼红痛或全身症状。',
    ],
    testsToAskAbout: [
      '散瞳眼底检查和眼底照相。',
      '眼部超声、MRI等影像评估，避免不必要穿刺。',
      'RB1基因检测和家系遗传咨询。',
    ],
    questionsForDoctor: [
      '目前分期和扩散风险如何？治疗目标和顺序是什么？',
      '能否保眼、保视力？如果不能，摘除眼球的时机和后续支持是什么？',
      '是否需要RB1检测？兄弟姐妹怎样筛查？',
      '治疗后多久随访，需警惕哪些第二肿瘤或复发信号？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>RB不是普通拍照反光。白瞳、猫眼样反光、斜视、眼红痛或眼球突出都可能是警讯；越早规范治疗，越有机会兼顾生命安全、眼球保留和视功能。</p><p>需要警惕的线索包括：照片中瞳孔反复发白或呈猫眼样反光；婴幼儿突然或持续斜视、眼球震颤、视物异常；眼红、眼痛、眼球突出或瞳孔异常；家族中有人患RB或儿童期眼内肿瘤。表现会因年龄、分型和受累系统不同而变化。</p>',
    diagnosis:
      '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：散瞳眼底检查和眼底照相；眼部超声、MRI等影像评估，避免不必要穿刺；RB1基因检测和家系遗传咨询。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
    treatment:
      '<p>治疗按分期、单眼/双眼和扩散风险决定，包括局部治疗、化疗、动脉介入、冷冻/激光、放疗或摘除眼球等。目标首先是保命，其次尽量保眼和保视力。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
    longTermCare:
      '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
    fertilityOrFamily:
      '<p>RB可由体细胞或胚系RB1变异导致。双眼、多灶、早发或有家族史时更需遗传咨询；单眼病例也可能存在胚系风险。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
    emergencySigns:
      '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Retinoblastoma',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/retinoblastoma/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>视网膜母细胞瘤是儿童最常见的眼内恶性肿瘤，常与RB1基因改变有关，白瞳、斜视或视力异常需要尽快由眼肿瘤团队评估；常见线索包括照片中瞳孔反复发白或呈猫眼样反光。、婴幼儿突然或持续斜视、眼球震颤、视物异常等。</p>',
  diagnosis:
    '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
  treatment:
    '<p>治疗按分期、单眼/双眼和扩散风险决定，包括局部治疗、化疗、动脉介入、冷冻/激光、放疗或摘除眼球等。目标首先是保命，其次尽量保眼和保视力。</p>',
  prognosis:
    '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
  sourceName: '国家卫生健康委员会《第一批罕见病目录》',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'oncology',
  charityIds: [75],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

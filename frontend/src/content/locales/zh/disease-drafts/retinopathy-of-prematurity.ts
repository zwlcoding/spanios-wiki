import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRetinopathyOfPrematurity: DiseaseDraft = {
  ...entity(2071, 'disease-retinopathy-of-prematurity'),
  name: '早产儿视网膜病变',
  nameEn: 'Retinopathy of prematurity',
  alias: 'ROP；早产儿视网膜病；第二批罕见病目录第 71 项',
  oneSentence:
    '早产儿视网膜病变是早产或低出生体重婴儿视网膜血管发育异常的眼病，严重时可导致视网膜脱离和终身视力损害。',
  plainName: '早产宝宝视网膜血管还没长好、需要按时筛查的眼病',
  prevalence:
    '已纳入中国第二批罕见病目录；风险主要取决于早产程度、出生体重和新生儿期病情，越早产、越低体重风险越高。',
  quickLook: {
    whatItIs:
      'ROP 发生在视网膜血管还未成熟时，异常血管可能生长、渗漏和牵拉视网膜。早期从外观看不出来，必须靠眼底筛查发现。',
    whoToSeeFirst:
      '符合筛查条件的早产儿应按新生儿科和眼科安排做散瞳眼底检查；白瞳、斜视、眼球异常运动或视物异常要尽快看小儿眼底/眼科。',
    isGenetic:
      'ROP 通常不是遗传病，核心风险是早产、低体重、氧疗和新生儿重症因素；家族遗传咨询一般不是首要问题。',
    hasTreatment:
      '轻症可密切观察，进展或高危病变可用激光、抗 VEGF 眼内注射，视网膜脱离时可能需要玻璃体视网膜手术。',
    commonDelayReason:
      '宝宝不会表达视力问题，早期眼睛外观可正常；如果出院前没有明确下一次眼底筛查时间，容易错过治疗窗口。',
  },
  patientJourney: {
    whenToSuspect: [
      '早产、低出生体重，尤其胎龄很小或新生儿期需要氧疗、机械通气、输血或治疗感染。',
      '已筛查出 ROP 但还未完成视网膜血管成熟前的随访。',
      '出现白瞳、斜视、眼球震颤、异常追视、明显近视或眼底检查异常。',
    ],
    commonWrongTurns: [
      '以为出院就是安全，未按眼科预约复查到血管完全成熟。',
      '只看宝宝眼睛外观正常，忽略 ROP 早期必须散瞳眼底检查。',
      '治疗后不再随访，漏掉复发、近视、斜视、弱视或视网膜后遗症。',
    ],
    firstDepartments: [
      '新生儿科',
      '小儿眼科/眼底病门诊',
      '玻璃体视网膜专科',
      '儿童视光和低视力康复',
    ],
    diagnosisChecklist: [
      '带出生胎龄、出生体重、NICU 经过、氧疗/呼吸机、输血和感染治疗记录。',
      '带每次眼底筛查报告，注明分区、分期、plus disease、治疗日期和复查计划。',
      '记录孩子追视、斜视、白瞳、眼球震颤、屈光检查和弱视治疗情况。',
    ],
    testsToAskAbout: [
      '当前 ROP 分区、分期和是否有 plus disease，下一次复查最迟什么时候。',
      '是否已达到激光或抗 VEGF 治疗指征，治疗后复发如何监测。',
      '是否需要屈光、斜视、弱视和长期视网膜随访。',
    ],
    questionsForDoctor: [
      '宝宝的视网膜血管是否已经成熟到可以停止筛查？',
      '如果需要治疗，激光和抗 VEGF 对复查频率、复发和远期视力有什么不同？',
      '出院后哪些眼部变化需要马上回医院？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>ROP 早期通常没有肉眼可见症状，婴儿也无法表达视力变化。严重或晚期可出现白瞳、斜视、眼球异常运动、严重近视、视网膜牵拉或视网膜脱离。</p><p>风险与早产程度、出生体重、新生儿重症程度、氧疗、感染、输血和呼吸支持等因素有关。即使治疗成功，儿童期仍可能有近视、斜视、弱视或视网膜问题。</p>',
    diagnosis:
      '<p>诊断依靠有经验的眼科医生进行散瞳眼底检查，记录病变分区、分期、范围和是否有 plus disease。筛查对象和首次检查时间由胎龄、出生体重和新生儿病情决定。</p><p>随访不能只做一次。医生会根据眼底成熟程度和病变活动度安排复查，直到视网膜血管成熟、病变消退或完成治疗后稳定。</p>',
    treatment:
      '<p>轻度 ROP 多数可自行消退，但必须按时复查。达到治疗指征时，激光光凝可减少异常血管继续生长；抗 VEGF 眼内注射可用于部分后极部或高危病变，但需要更长时间随访复发和血管发育。</p><p>若已发生牵拉或视网膜脱离，可能需要巩膜扣带或玻璃体手术，但视力结果不一定理想。因此早筛查、按时复查和及时治疗是核心。</p>',
    longTermCare:
      '<p>ROP 儿童需要长期眼科随访，关注屈光不正、弱视、斜视、青光眼、白内障和视网膜后遗症。治疗过或重症早产的儿童尤其需要定期视功能评估。</p><p>家长应保存筛查和治疗报告，按预约复诊，不要因为孩子外观看起来正常就停止随访。</p>',
    fertilityOrFamily:
      '<p>ROP 不是典型遗传病。再次妊娠时，重点是产科和新生儿科管理早产风险；若家族中有遗传性视网膜病，应另行咨询遗传眼病专科。</p>',
    emergencySigns:
      '<p>出现白瞳、突然不追视、明显斜视、眼球震颤、眼红眼痛、治疗后瞳孔发白或被告知有视网膜脱离风险，应尽快联系眼科或急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Eye Institute: Retinopathy of Prematurity',
      type: 'official',
      url: 'https://www.nei.nih.gov/index.php/learn-about-eye-health/eye-conditions-and-diseases/retinopathy-prematurity',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Retinopathy of prematurity',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001618.htm',
    },
  ],
  symptoms:
    '<p>早期通常无外观症状；严重时可有白瞳、斜视、眼球异常运动、严重近视、视网膜牵拉或脱离。</p>',
  diagnosis:
    '<p>诊断依靠早产儿按风险进行散瞳眼底筛查，记录 ROP 分区、分期、范围和 plus disease，并持续复查到稳定。</p>',
  treatment:
    '<p>轻症观察，达到治疗指征时可用激光或抗 VEGF 眼内注射，视网膜脱离时可能需要玻璃体视网膜手术。</p>',
  prognosis:
    '<p>早发现和及时治疗可显著降低失明风险；远期仍需监测近视、弱视、斜视和视网膜后遗症。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'retinopathy-of-prematurity',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 425,
    name: 'retinopathy-of-prematurity-journey.png',
    url: '/images/diseases/retinopathy-of-prematurity-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

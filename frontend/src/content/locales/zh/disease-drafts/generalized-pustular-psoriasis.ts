import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGeneralizedPustularPsoriasis: DiseaseDraft = {
  ...entity(2033, 'disease-generalized-pustular-psoriasis'),
  name: '泛发性脓疱型银屑病',
  nameEn: 'Generalized pustular psoriasis',
  alias: 'GPP、von Zumbusch 型脓疱型银屑病、第二批罕见病目录第 33 项',
  slug: 'generalized-pustular-psoriasis',
  oneSentence:
    '泛发性脓疱型银屑病是一种罕见但可很严重的系统性炎症性皮肤病，可突然出现大片红肿疼痛皮肤和无菌性脓疱，并伴发热、脱水和器官并发症风险。',
  plainName: '会突然全身发作、需要急诊识别的严重脓疱型银屑病',
  prevalence:
    '已纳入国家第二批罕见病目录；总体罕见，发作频率和严重程度个体差异很大。',
  quickLook: {
    whatItIs:
      'GPP 不是普通感染性脓疱，脓疱通常为无菌性，背后是 IL-36 等炎症通路异常。部分患者有银屑病史，也有人第一次发作就是 GPP。',
    whoToSeeFirst:
      '大片红斑脓疱、发热、寒战、皮肤疼痛或全身不适时，应尽快到皮肤科急诊/急诊；严重发作可能需要住院补液、控温和系统治疗。',
    isGenetic:
      '部分患者与 IL36RN、CARD14、AP1S3 等基因相关，但多数治疗决策仍基于临床严重度和诱因。',
    hasTreatment:
      '急性发作目标是快速控制炎症和预防并发症。可用 IL-36 受体拮抗剂 spesolimab，也可能用环孢素、维 A 酸类、甲氨蝶呤或其他生物制剂，需专科决定。',
    commonDelayReason:
      '常被误认为皮肤感染、药疹、过敏或普通银屑病加重；突然停用系统激素、感染、妊娠、低钙和药物都可能诱发。',
  },
  patientJourney: {
    whenToSuspect: [
      '短时间内出现大片红肿疼痛皮肤和密集小脓疱，伴发热、寒战或明显乏力。',
      '既往银屑病患者在停药、感染、妊娠或压力后突然全身加重。',
      '化验提示白细胞升高、炎症指标升高、电解质紊乱或肝肾功能异常。',
      '皮肤表现反复发作，脓疱培养阴性或抗感染治疗效果不符合预期。',
    ],
    commonWrongTurns: [
      '只按细菌感染使用抗生素，未同步请皮肤科判断 GPP。',
      '自行突然停用激素或免疫药物，诱发反跳性加重。',
      '把发热和脱水当作皮肤问题之外的小事，没有评估住院风险。',
      '没有记录诱因和既往用药，导致复发预防困难。',
    ],
    firstDepartments: ['皮肤科', '急诊科', '风湿免疫科', '产科（妊娠期患者）'],
    diagnosisChecklist: [
      '拍照记录皮疹起始部位、扩散速度、疼痛、发热和诱因。',
      '带既往银屑病治疗、近期停药、感染、妊娠、低钙和新药使用记录。',
      '带血常规、CRP/ESR、电解质、肝肾功能、皮肤病理和培养结果。',
      '记录既往发作次数、住院史、有效药物和不良反应。',
    ],
    testsToAskAbout: [
      '是否需要皮肤病理、脓疱培养和药疹/急性泛发性发疹性脓疱病鉴别。',
      '血常规、炎症指标、电解质、钙、肝肾功能、感染筛查和妊娠相关评估。',
      '急性期是否适合 spesolimab 或其他系统治疗。',
      '复发预防方案、诱因管理和是否需要相关基因检测。',
    ],
    questionsForDoctor: [
      '这次是否属于 GPP 发作？严重程度是否需要住院？',
      '当前最需要控制的是皮肤炎症、脱水、电解质、感染风险还是器官功能？',
      '我适合哪些急性期和维持治疗？多久评估是否有效？',
      '哪些药物不能自行停？下次出现什么信号要马上急诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GPP 可突然出现大片红斑、灼痛或压痛，表面出现密集无菌性小脓疱，随后脱屑。发作可伴高热、寒战、乏力、心率快、脱水、低钙或肝肾功能异常。</p><p>部分患者同时有普通斑块型银屑病，也有人没有既往银屑病史。妊娠期、感染、药物、压力、低钙和突然停用系统激素都可能触发。</p>',
    diagnosis:
      '<p>诊断主要依靠典型临床表现、病史和皮肤科评估，必要时结合皮肤病理、培养和实验室检查。脓疱通常不是细菌感染造成，但感染可作为诱因或并发问题存在。</p><p>需要与急性泛发性发疹性脓疱病、感染性脓疱、药疹、剥脱性皮炎、普通银屑病急性加重和其他自身炎症病鉴别。</p>',
    treatment:
      '<p>急性期治疗目标是快速控制皮肤和系统炎症，纠正脱水、电解质紊乱和器官功能问题。严重发作常需住院。</p><p>Spesolimab 是针对 IL-36 受体的药物，已获 FDA 批准用于 GPP；其他系统治疗包括环孢素、维 A 酸类、甲氨蝶呤和其他生物制剂，需按患者情况选择。</p>',
    longTermCare:
      '<p>长期管理包括识别诱因、避免自行停药、制定复发预案、监测感染和药物副作用。患者可保存皮疹照片、用药时间线、化验结果和每次发作的处理效果。</p>',
    fertilityOrFamily:
      '<p>GPP 可在妊娠期发作，备孕或怀孕患者应提前和皮肤科、产科讨论可用药物和胎儿/母体监测。家族聚集或早发反复发作者可咨询基因检测。</p>',
    emergencySigns:
      '<p>大片皮肤迅速红肿疼痛、持续高热、意识差、心率很快、明显脱水、少尿、呼吸困难、妊娠期发作或肝肾功能异常，应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'FDA: Drug Trials Snapshot - SPEVIGO',
      type: 'official',
      url: 'https://www.fda.gov/drugs/drug-trials-snapshots/drug-trials-snapshots-spevigo',
    },
    {
      name: 'Cleveland Clinic: Generalized Pustular Psoriasis',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/generalized-pustular-psoriasis-gpp',
    },
  ],
  symptoms:
    '<p>典型表现为突然大片红肿疼痛皮肤和无菌性脓疱，可伴发热、寒战、乏力、脱水、电解质紊乱和肝肾功能异常。</p>',
  diagnosis:
    '<p>诊断依靠皮肤科临床判断，必要时结合皮肤病理、培养、炎症指标、电解质和感染/药疹鉴别。</p>',
  treatment:
    '<p>严重发作常需住院；治疗包括快速抗炎、补液和器官支持，可使用 spesolimab 或其他系统性免疫治疗。</p>',
  prognosis:
    '<p>及时治疗多数发作可控制；延误处理可能出现脱水、感染、器官损害甚至危及生命，长期预防复发同样重要。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 387,
    name: 'generalized-pustular-psoriasis-journey.png',
    url: '/images/diseases/generalized-pustular-psoriasis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

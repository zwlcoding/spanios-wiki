import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTumorNecrosisFactorReceptorAssociatedPeriodicSyndrome: DiseaseDraft =
  {
    ...entity(
      2081,
      'disease-tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    ),
    name: '肿瘤坏死因子受体相关周期性综合征',
    nameEn: 'Tumor necrosis factor receptor-associated periodic syndrome',
    alias: 'TRAPS；TNF受体相关周期性综合征；第二批罕见病目录第 81 项',
    slug: 'tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    oneSentence:
      'TRAPS 是一种罕见自身炎症性遗传病，TNFRSF1A 基因变异会引起反复长时间发热、皮疹、肌痛、腹痛、眼周肿痛和炎症指标升高。',
    plainName: '身体反复自己发炎、一次发作可持续很多天的遗传性发热病',
    prevalence:
      '已纳入中国第二批罕见病目录；TRAPS 全球罕见，常在儿童期起病，但成人也可能首次被诊断。',
    quickLook: {
      whatItIs:
        'TRAPS 属自身炎症病，发作时免疫系统像被反复点燃。发热通常持续数天到数周，可伴迁移性皮疹、深部肌肉痛、腹痛、胸痛、关节痛和眼周肿胀。',
      whoToSeeFirst:
        '反复不明原因发热、炎症指标高、抗感染效果差，尤其有家族史或伴皮疹腹痛肌痛，应到风湿免疫科、儿科风湿免疫科或自身炎症病门诊。',
      isGenetic:
        '多与 TNFRSF1A 变异有关，通常按常染色体显性遗传但外显率不完全；确诊后建议遗传咨询和家系评估。',
      hasTreatment:
        '治疗目标是控制发作和慢性炎症，预防 AA 淀粉样变。IL-1 抑制剂常用于需要长期控制的患者，部分患者也会使用糖皮质激素或其他抗炎方案。',
      commonDelayReason:
        '发热、腹痛和皮疹常被反复当作感染、过敏、胃肠炎或风湿热；如果没有记录发作周期、炎症指标和家族史，容易多年延误。',
    },
    patientJourney: {
      whenToSuspect: [
        '反复发热每次持续数天到数周，抗生素效果不明显，发作间期可好转。',
        '发热伴迁移性红斑样皮疹、深部肌痛、腹痛、胸痛、关节痛、眼周水肿或结膜炎。',
        '家族中多人有反复发热、腹痛、肾病蛋白尿或不明原因炎症病史。',
      ],
      commonWrongTurns: [
        '每次发作都按感染用抗生素，没有复盘发作时长、诱因和间歇期状态。',
        '只做过敏、胃肠或感染检查，未评估自身炎症病和 TNFRSF1A 基因。',
        '症状能被激素暂时压住后没有长期监测 SAA、尿蛋白和肾功能。',
      ],
      firstDepartments: [
        '风湿免疫科',
        '儿科风湿免疫科',
        '自身炎症病/罕见免疫病门诊',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '记录每次发热开始和结束时间、最高体温、皮疹照片、腹痛胸痛肌痛和用药反应。',
        '带发作期和缓解期血常规、CRP、ESR、SAA、肝肾功能、尿常规和感染排查资料。',
        '整理家族中反复发热、肾病、蛋白尿、淀粉样变或早逝信息，以及基因检测报告。',
      ],
      testsToAskAbout: [
        '是否需要自身炎症病基因 panel，重点评估 TNFRSF1A 及其他周期性发热相关基因。',
        '发作期 CRP、ESR、SAA 和尿蛋白如何用于判断炎症控制和淀粉样变风险。',
        '是否适合 IL-1 抑制剂、短期激素或其他方案，疗效和感染风险如何监测。',
      ],
      questionsForDoctor: [
        '我的 TNFRSF1A 变异是否明确致病？家属应如何检测和随访？',
        '怎样区分普通感染和 TRAPS 发作？什么时候需要急诊？',
        '长期治疗的目标是无发作、炎症指标正常，还是预防淀粉样变？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>TRAPS 发作常持续数天到数周，表现为反复发热、寒战、乏力、迁移性红斑或斑片样皮疹、深部肌痛、腹痛、恶心呕吐、胸痛、关节痛、眼周水肿和结膜炎。部分患者发作间期仍有低度炎症。</p><p>长期未控制的炎症可引起 AA 淀粉样变，表现为蛋白尿、肾功能下降和水肿，这是需要主动预防的严重并发症。</p>',
      diagnosis:
        '<p>诊断依赖反复发热模式、伴随症状、发作期炎症指标升高、家族史和 TNFRSF1A 基因检测。医生会比较发作期和缓解期 CRP、ESR、SAA、血常规和尿蛋白。</p><p>需要排除感染、肿瘤、自身免疫病、炎症性肠病和其他自身炎症病，如家族性地中海热、CAPS、MKD 和 PFAPA。</p>',
      treatment:
        '<p>轻症或偶发发作可在专科指导下短期使用非甾体抗炎药或糖皮质激素缓解，但这些通常不能完全预防慢性炎症和淀粉样变风险。</p><p>需要长期控制或炎症持续升高者常评估 IL-1 抑制剂；治疗期间需监测感染、疫苗计划、血常规、肝肾功能、SAA、尿蛋白和生活质量。</p>',
      longTermCare:
        '<p>长期管理包括发作日记、皮疹照片、触发因素、炎症指标、SAA、尿常规/尿蛋白、肾功能和药物安全性。儿童还需跟踪生长发育、上学和运动安排。</p><p>患者应准备发作处理计划，避免每次都从感染排查重新开始，同时保持对真正感染的警惕。</p>',
      fertilityOrFamily:
        '<p>TRAPS 多按常染色体显性遗传，但外显率和严重程度差异很大。确诊者的一级亲属可在遗传咨询后选择检测；备孕时可讨论遗传风险和妊娠期用药计划。</p>',
      emergencySigns:
        '<p>持续高热伴精神差、脱水、剧烈腹痛或胸痛、呼吸困难、意识改变、严重眼痛视力变化、明显少尿水肿，或免疫抑制治疗期间疑似严重感染，应急诊。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Tumor necrosis factor receptor-associated periodic syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/tumor-necrosis-factor-receptor-associated-periodic-syndrome/',
      },
    ],
    symptoms:
      '<p>反复发热可持续数天到数周，伴迁移性皮疹、深部肌痛、腹痛、胸痛、关节痛、眼周水肿、结膜炎和炎症指标升高。</p>',
    diagnosis:
      '<p>诊断结合发热模式、发作期和缓解期炎症指标、SAA/尿蛋白、家族史和 TNFRSF1A 基因检测，并排除感染、肿瘤、自身免疫病和其他周期性发热病。</p>',
    treatment:
      '<p>治疗目标是控制发作和慢性炎症、预防 AA 淀粉样变；可用短期抗炎/激素缓解，需长期控制者常评估 IL-1 抑制剂。</p>',
    prognosis:
      '<p>多数患者通过规律随访和抗炎治疗可减少发作；持续炎症和 AA 淀粉样变会显著影响肾脏预后。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 436,
      name: 'tumor-necrosis-factor-receptor-associated-periodic-syndrome-journey.png',
      url: '/images/diseases/tumor-necrosis-factor-receptor-associated-periodic-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  };

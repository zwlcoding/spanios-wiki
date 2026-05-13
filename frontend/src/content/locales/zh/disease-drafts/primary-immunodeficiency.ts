import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryImmunodeficiency: DiseaseDraft = {
  ...entity(2066, 'disease-primary-immunodeficiency'),
  name: '原发性免疫缺陷病',
  nameEn: 'Primary immunodeficiency',
  alias: 'PID；PIDD；原发性免疫缺陷；第二批罕见病目录第 66 项',
  oneSentence:
    '原发性免疫缺陷病是一大类先天性免疫系统疾病，可让人更容易反复、严重或不寻常感染，也可能伴自身免疫、过敏、炎症或肿瘤风险。',
  plainName: '免疫系统先天“防御零件”不足或工作异常的一组罕见病',
  prevalence:
    '已纳入中国第二批罕见病目录；这是一个疾病群，具体频率随亚型差异很大，NIAID 资料提示已知类型超过 200 种，美国约 50 万人受影响。',
  quickLook: {
    whatItIs:
      'PID 不是一种病，而是一组免疫细胞、抗体、补体或吞噬功能异常导致的疾病。轻型可到成年后才被发现，重型可在婴儿期出现危及生命的感染。',
    whoToSeeFirst:
      '反复肺炎、鼻窦炎、中耳炎、皮肤深部感染、机会性感染、严重疫苗反应或家族中早发感染死亡，应到临床免疫/过敏免疫科、儿科免疫科或感染科评估。',
    isGenetic:
      '许多 PID 与单基因变异有关，遗传方式可为 X 连锁、常染色体隐性或显性，也有未明确基因的情况。确诊后应做遗传咨询和家系评估。',
    hasTreatment:
      '治疗取决于亚型，可包括及时抗感染、预防性抗生素、免疫球蛋白替代、避免部分活疫苗，以及重症患者的造血干细胞移植或特定靶向/基因治疗评估。',
    commonDelayReason:
      '患者常被反复当作普通感冒、鼻窦炎、肺炎、过敏或体质差处理，没有把感染次数、严重程度、病原体和家族史放在一起判断。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复、严重、迁延或需要静脉抗生素/住院的感染，尤其是肺炎、鼻窦炎、中耳炎、皮肤脓肿或败血症。',
      '感染病原体不常见，如机会性感染、真菌感染、卡介苗播散，或接种活疫苗后异常严重反应。',
      '除感染外还有自身免疫性血细胞减少、肠炎、湿疹样皮疹、肉芽肿、淋巴结或脾大。',
      '婴儿持续鹅口疮、慢性腹泻、生长差，或家族中男孩早亡、近亲婚配、多人反复重症感染。',
    ],
    commonWrongTurns: [
      '只按每次感染单独治疗，没有统计一年内感染次数、住院次数、培养结果和抗生素反应。',
      '长期反复使用抗生素或激素，但没有做免疫球蛋白、淋巴细胞亚群和疫苗抗体反应评估。',
      '在免疫缺陷未排除前接种或补种活疫苗，或没有告知医生既往严重疫苗反应。',
    ],
    firstDepartments: [
      '临床免疫/过敏免疫科',
      '儿科免疫科',
      '感染科',
      '血液科或风湿免疫科（合并免疫异常时）',
    ],
    diagnosisChecklist: [
      '按时间整理感染部位、病原体、培养结果、影像、用药和住院记录。',
      '带疫苗接种记录、疫苗后反应、免疫球蛋白、血常规、淋巴细胞亚群和补体结果。',
      '记录生长曲线、慢性腹泻、湿疹、口腔念珠菌、自身免疫病、肿瘤或淋巴脾大。',
      '整理家族中早发感染、男性早亡、近亲婚配、反复流产或已知基因诊断。',
    ],
    testsToAskAbout: [
      '血常规分类、免疫球蛋白 IgG/IgA/IgM/IgE、淋巴细胞亚群和补体筛查。',
      '疫苗特异性抗体反应、吞噬细胞氧化爆发、T 细胞功能或 NK 细胞功能等按线索选择的检查。',
      '病原学培养、病毒载量、胸部 CT 或支气管扩张评估。',
      '针对 PID 的基因 panel、外显子组或家系验证，以及确诊后是否需要家属筛查。',
    ],
    questionsForDoctor: [
      '我的表现更像哪一类免疫缺陷？目前最需要排除哪些重症亚型？',
      '哪些疫苗可以接种，哪些活疫苗应暂缓或避免？家属接种是否有注意事项？',
      '是否需要免疫球蛋白替代或预防性抗感染？怎样判断剂量和疗效？',
      '这个亚型有没有移植、靶向药、基因治疗或临床试验选择？家属遗传风险如何解释？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PID 的表现取决于受影响的免疫环节。常见线索是反复、严重、迁延或不寻常感染，如肺炎、鼻窦炎、中耳炎、皮肤深部感染、败血症、真菌或机会性感染。儿童还可能有生长不良、慢性腹泻、持续鹅口疮或脐带脱落延迟。</p><p>一些 PID 主要表现并不只是感染，还可能出现自身免疫性血细胞减少、肠炎、湿疹样皮疹、肉芽肿、淋巴结或脾大、过敏样表现和肿瘤风险增加。因此“总是感染”之外，还要看是否有免疫失衡。</p>',
    diagnosis:
      '<p>诊断从详细感染史和家族史开始。医生会看感染频率、严重程度、病原体、抗生素反应、疫苗反应、成长发育和伴随的自身免疫或炎症表现。</p><p>常用筛查包括血常规分类、免疫球蛋白、淋巴细胞亚群、补体、疫苗抗体反应和病原学检查。进一步检查按线索选择吞噬功能、T/NK 细胞功能、胸部影像和基因检测。营养不良、HIV、药物、肿瘤治疗或蛋白丢失等继发免疫缺陷也要排除。</p>',
    treatment:
      '<p>治疗目标是减少感染、保护肺和器官功能，并处理免疫失衡。感染需要及时、足量、针对病原体治疗；部分患者需要预防性抗菌药物、抗真菌药或抗病毒药。抗体缺陷患者可用静脉或皮下免疫球蛋白替代，并定期评估感染次数和 IgG 谷浓度。</p><p>重症联合免疫缺陷、部分吞噬细胞缺陷和其他危重亚型可评估造血干细胞移植；少数疾病有酶替代、靶向药或基因治疗选择。疫苗策略必须个体化，许多重症细胞免疫缺陷患者需避免活疫苗。</p>',
    longTermCare:
      '<p>长期管理需要免疫、感染、呼吸、消化、血液、风湿和遗传团队协作。随访重点包括感染记录、肺部损伤或支气管扩张、免疫球蛋白剂量、药物副作用、自身免疫、炎症和肿瘤筛查。</p><p>家庭应保存一份急诊说明，列明诊断、禁忌疫苗、常用药、过敏史和主管医生联系方式。学校和托幼场景需要感染暴露、发热就医和疫苗接触安排。</p>',
    fertilityOrFamily:
      '<p>许多 PID 有明确遗传方式。确诊基因后，父母、兄弟姐妹和未来妊娠可进行遗传咨询；是否做携带者筛查、产前诊断或胚胎植入前遗传检测，需要结合亚型、家族意愿和当地可及性决定。</p>',
    emergencySigns:
      '<p>持续高热、精神反应差、呼吸困难、紫绀、严重脱水、意识改变、抽搐、快速扩散的皮肤感染、严重腹痛或疑似败血症，应立即急诊，并主动说明可能或确诊 PID 和近期用药。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIAID: Primary Immune Deficiency Diseases',
      type: 'official',
      url: 'https://www.niaid.nih.gov/diseases-conditions/primary-immune-deficiency-diseases-pidds',
    },
    {
      name: 'Mayo Clinic: Primary immunodeficiency diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/primary-immunodeficiency/diagnosis-treatment/drc-20376910',
    },
  ],
  symptoms:
    '<p>常见表现为反复、严重或不寻常感染，也可有自身免疫、炎症、过敏、淋巴脾大、生长差、慢性腹泻或肿瘤风险增加。</p>',
  diagnosis:
    '<p>诊断结合感染和家族史、免疫球蛋白、淋巴细胞亚群、补体、疫苗抗体反应、功能检测、病原学和基因检测，并排除继发免疫缺陷。</p>',
  treatment:
    '<p>治疗可包括及时抗感染、预防用药、免疫球蛋白替代、个体化疫苗策略，以及重症亚型的造血干细胞移植、靶向或基因治疗评估。</p>',
  prognosis:
    '<p>预后取决于具体亚型、确诊时间、感染和器官损伤程度以及治疗可及性；早诊断和规范预防能显著减少长期损害。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'primary-immunodeficiency',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 420,
    name: 'primary-immunodeficiency-journey.png',
    url: '/images/diseases/primary-immunodeficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

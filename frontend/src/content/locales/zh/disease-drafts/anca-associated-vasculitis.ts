import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAncaAssociatedVasculitis: DiseaseDraft = {
  ...entity(2007, 'disease-anca-associated-vasculitis'),
  name: 'ANCA相关性血管炎',
  nameEn: 'ANCA-associated vasculitis',
  alias:
    'AAV、抗中性粒细胞胞浆抗体相关血管炎、GPA、MPA、EGPA、第二批罕见病目录第 7 项',
  slug: 'anca-associated-vasculitis',
  oneSentence:
    'ANCA 相关性血管炎是一组罕见自身免疫性小血管炎，包括 GPA、MPA 和 EGPA，可累及鼻窦、肺、肾、皮肤、神经等多个器官，严重时会迅速造成器官损伤。',
  plainName: '可能累及肾和肺的自身免疫性血管炎',
  prevalence:
    '已纳入国家第二批罕见病目录；总体属于罕见病，不同亚型和地区发病率差异较大。',
  quickLook: {
    whatItIs:
      'AAV 是免疫系统攻击小血管造成的炎症。它不是单一疾病，而是一组疾病：肉芽肿性多血管炎、显微镜下多血管炎、嗜酸性肉芽肿性多血管炎。病情可轻可重，关键是早识别肾、肺和神经受累。',
    whoToSeeFirst:
      '反复鼻窦/耳鼻喉问题、咯血、血尿蛋白尿、紫癜、神经麻木或多系统炎症，应尽快看风湿免疫科；有肾功能恶化、咯血或呼吸困难时先急诊。',
    isGenetic:
      '通常不是典型遗传病。ANCA 是诊断线索之一，但阳性不等于一定患病，阴性也不能完全排除，必须结合器官表现和检查。',
    hasTreatment:
      '可以治疗，通常分为诱导缓解和维持缓解。常用糖皮质激素、利妥昔单抗、环磷酰胺或其他免疫抑制药，并需要防感染和监测药物副作用。',
    commonDelayReason:
      '早期像鼻窦炎、肺炎、哮喘、皮疹、肾炎或周围神经病，患者常在多个科室分散就诊；如果没有把“耳鼻喉+肺+肾+皮肤/神经”连起来看，容易延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '鼻窦炎、鼻出血、耳闷听力下降或中耳炎反复，且常规治疗效果差。',
      '咳嗽、气短、胸部影像异常或咯血，尤其合并发热乏力和体重下降。',
      '尿检出现血尿、蛋白尿、肌酐升高或血压突然变差。',
      '皮肤紫癜、溃疡、关节痛、肌痛、手脚麻木无力或单神经病。',
      '哮喘、鼻息肉、嗜酸细胞升高合并肺部、皮肤或神经问题。',
    ],
    commonWrongTurns: [
      '反复按鼻窦炎、肺炎或哮喘治疗，没有查尿和肾功能。',
      '只看 ANCA 阴性就排除血管炎，或只看 ANCA 阳性就直接下诊断。',
      '肾脏受累早期没有症状，未做尿常规导致错过治疗窗口。',
      '免疫抑制治疗期间忽略感染预防、疫苗和药物副作用监测。',
    ],
    firstDepartments: [
      '风湿免疫科',
      '肾内科',
      '呼吸与危重症医学科',
      '耳鼻喉科',
    ],
    diagnosisChecklist: [
      '整理发热、体重变化、鼻窦/耳鼻喉、肺、尿检、皮疹、神经症状的时间线。',
      '带齐尿常规、肾功能、ANCA/MPO/PR3、炎症指标、胸部 CT、鼻窦 CT 和既往病理。',
      '记录咯血、气短、尿量变化、血压、麻木无力和眼部症状。',
      '列出近期感染、药物、免疫病、肿瘤筛查和乙肝/丙肝等结果。',
    ],
    testsToAskAbout: [
      'ANCA 及 MPO-ANCA、PR3-ANCA。',
      '尿常规、尿蛋白、肌酐/eGFR 和肾脏评估。',
      '胸部 CT、鼻窦/耳鼻喉评估、肺功能或支气管镜（按病情）。',
      '炎症指标、血常规、嗜酸细胞、补体和感染排查。',
      '肾、皮肤、肺或耳鼻喉组织活检是否能帮助确诊。',
    ],
    questionsForDoctor: [
      '我属于 GPA、MPA、EGPA，还是仍需排除感染/肿瘤/其他免疫病？',
      '现在是否有肾、肺或神经等威胁器官的受累？需要住院吗？',
      '诱导缓解和维持缓解分别用什么药？预计多久评估效果？',
      '如何预防感染、骨质疏松、胃肠道和生育相关副作用？',
      '复发通常看哪些信号？ANCA 数值变化该如何解读？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>AAV 的症状取决于受累器官。全身表现可有发热、乏力、体重下降、关节痛和炎症指标升高。耳鼻喉可出现鼻窦炎、鼻出血、鼻痂、听力下降；肺部可有咳嗽、气短、胸部结节或浸润、咯血；肾脏可表现为血尿、蛋白尿、肌酐升高，有时早期没有明显感觉。</p><p>皮肤可有紫癜、溃疡或结节，神经受累可出现麻木、疼痛、无力。EGPA 常与哮喘、鼻息肉和嗜酸细胞升高有关。肺出血或快速进展性肾炎属于紧急情况。</p>',
    diagnosis:
      '<p>诊断需要综合临床表现、ANCA 相关抗体、尿和肾功能、影像、炎症指标以及必要时组织活检。ANCA 检测有帮助，但不能单独确诊或排除。</p><p>医生会排除感染、肿瘤、抗肾小球基底膜病、狼疮、免疫复合物性血管炎、药物相关血管炎等相似情况。评估病情严重程度和受累器官，比单纯知道 ANCA 阳性更重要。</p>',
    treatment:
      '<p>治疗通常分为诱导缓解和维持缓解。诱导阶段目标是尽快控制血管炎、保护肾肺等器官，常用糖皮质激素联合利妥昔单抗或环磷酰胺等药物；维持阶段用较低强度方案减少复发。</p><p>治疗期间需要严密监测感染、血细胞、肝肾功能、免疫球蛋白、骨质疏松、血糖血压和疫苗计划。具体用药由风湿免疫科、肾内科、呼吸科等共同决定。</p>',
    longTermCare:
      '<p>AAV 可能复发，也可能留下器官损伤。长期随访要看症状、尿检、肌酐、ANCA/MPO/PR3、炎症指标、胸部或鼻窦影像，以及药物副作用。</p><p>患者应学会区分复发和感染，因为两者都可能发热、咳嗽或乏力，但处理方向不同。跨院就诊时携带诊断、活检、ANCA 类型和免疫抑制方案。</p>',
    fertilityOrFamily:
      '<p>AAV 通常不是遗传病，家属一般不需要筛查。育龄患者应在病情稳定后与风湿免疫科、肾内科和产科讨论妊娠时机和可用药物。</p><p>环磷酰胺等药物可能影响生育力，开始治疗前应尽快询问生育保护选择，但不能因此延误危及器官的治疗。</p>',
    emergencySigns:
      '<p>咯血、呼吸困难、氧饱和度下降、尿量明显减少、肉眼血尿、肌酐快速升高、胸痛、意识改变、严重头痛、突发无力或感染高热，应立即急诊，并说明疑似或确诊 ANCA 相关性血管炎及正在使用的免疫抑制药。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus: Vasculitis',
      type: 'official',
      url: 'https://medlineplus.gov/vasculitis.html',
    },
    {
      name: 'MedlinePlus Medical Test: ANCA test',
      type: 'official',
      url: 'https://medlineplus.gov/lab-tests/antineutrophil-cytoplasmic-antibodies-anca-test/',
    },
    {
      name: 'StatPearls: ANCA-Associated Vasculitis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/sites/books/NBK554372/',
    },
  ],
  symptoms:
    '<p>可出现反复鼻窦或耳部问题、咳嗽气短或咯血、血尿蛋白尿、皮肤紫癜、关节痛、神经麻木无力、发热乏力和体重下降。</p>',
  diagnosis:
    '<p>诊断综合 ANCA/MPO/PR3 抗体、尿和肾功能、胸部/鼻窦影像、炎症指标、感染排查和必要时组织活检。</p>',
  treatment:
    '<p>治疗分诱导缓解和维持缓解，常用糖皮质激素、利妥昔单抗、环磷酰胺或其他免疫抑制药，并严密监测感染和器官功能。</p>',
  prognosis:
    '<p>早期识别肾、肺和神经受累并规范治疗可改善预后；延误诊断、严重感染和复发会增加长期器官损伤风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 361,
    name: 'anca-associated-vasculitis-journey.png',
    url: '/images/diseases/anca-associated-vasculitis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

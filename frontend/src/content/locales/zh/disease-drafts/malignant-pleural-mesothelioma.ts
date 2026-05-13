import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMalignantPleuralMesothelioma: DiseaseDraft = {
  ...entity(2047, 'disease-malignant-pleural-mesothelioma'),
  name: '恶性胸膜间皮瘤',
  nameEn: 'Malignant pleural mesothelioma',
  alias: 'MPM；胸膜恶性间皮瘤；第二批罕见病目录第 47 项',
  slug: 'malignant-pleural-mesothelioma',
  oneSentence:
    '恶性胸膜间皮瘤是一种起源于胸膜间皮细胞的少见恶性肿瘤，常与石棉暴露有关，早期症状像普通胸水或胸痛，确诊通常需要胸膜活检和病理免疫组化。',
  plainName: '一种常表现为胸水、气短和胸痛的少见胸膜癌',
  prevalence:
    '已纳入中国第二批罕见病目录；总体少见，但在有长期石棉或相关职业暴露的人群中风险更高，暴露到发病可相隔多年。',
  quickLook: {
    whatItIs:
      '它不是普通肺癌，而是胸膜表面组织发生的恶性肿瘤。常见表现是反复胸腔积液、气短、胸痛、咳嗽、乏力和体重下降。',
    whoToSeeFirst:
      '如果有单侧或反复胸水、胸痛气短，建议从呼吸与危重症医学科或胸外科开始；确诊后应到有胸膜肿瘤经验的肿瘤多学科团队。',
    isGenetic:
      '多数病例与环境或职业暴露相关，不是典型遗传病；年轻发病或家族中有间皮瘤、黑色素瘤、肾癌等情况时，可咨询是否需要 BAP1 等遗传评估。',
    hasTreatment:
      '治疗通常结合分期、病理类型和体能状态，包括化疗、免疫治疗、部分患者手术、放疗、胸水控制、症状缓解和临床试验。',
    commonDelayReason:
      '早期常被当作肺炎、结核性胸膜炎、普通胸水或肺癌胸膜转移；如果只反复抽胸水而没有足够组织病理，容易延迟确诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复或持续单侧胸腔积液，伴气短、胸痛、咳嗽、乏力或体重下降。',
      '有石棉、隔热材料、船舶、建筑、制动材料、矿物粉尘等长期职业或环境暴露史。',
      '胸水细胞学反复阴性或不能解释病情，但影像提示胸膜增厚、结节或包裹性胸水。',
      '既往按肺炎、结核或普通胸膜炎治疗后胸水和胸痛仍反复。',
    ],
    commonWrongTurns: [
      '只把胸水抽掉缓解气短，没有尽早安排胸膜活检。',
      '把病灶当作肺癌胸膜转移，但病理和免疫组化证据不足。',
      '忽略几十年前的石棉或相关职业暴露史。',
    ],
    firstDepartments: [
      '呼吸与危重症医学科',
      '胸外科',
      '肿瘤内科',
      '疼痛或姑息支持门诊',
    ],
    diagnosisChecklist: [
      '整理胸水出现时间、抽液次数、胸水化验、细胞学、培养和结核相关检查。',
      '带齐胸部 CT、PET-CT 或 MRI 影像原片和报告。',
      '记录完整职业和居住暴露史，尤其是石棉或老旧建筑、船舶、绝热材料接触。',
      '如果已做活检，带病理切片、免疫组化报告和分子检测结果。',
    ],
    testsToAskAbout: [
      '增强胸部 CT、必要时 PET-CT 或 MRI，用于评估胸膜范围和分期。',
      '胸腔镜或影像引导胸膜活检，获取足够组织做病理和免疫组化。',
      '病理类型区分上皮样、肉瘤样或双相型，并排除肺腺癌胸膜转移等相似疾病。',
      '晚期或年轻/家族性病例可讨论肿瘤分子检测和 BAP1 相关遗传咨询。',
    ],
    questionsForDoctor: [
      '我的诊断依据是胸膜间皮瘤，还是其他癌症转移到胸膜？病理证据够不够？',
      '病理类型和分期是什么？治疗目标是控制、缩小、手术机会还是缓解症状？',
      '我适合化疗、免疫治疗、手术、放疗或临床试验中的哪一种组合？',
      '胸水反复导致气短时，胸膜固定术或留置胸腔导管是否适合我？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>恶性胸膜间皮瘤常以气短、胸痛、咳嗽、胸闷、乏力和不明原因体重下降起病。很多患者首先发现单侧胸腔积液，抽液后短期缓解，但胸水容易再次出现。</p><p>随着疾病进展，可出现胸膜增厚、胸壁疼痛、活动耐量下降、食欲差、低热或血栓风险增加。症状轻重不一定能准确反映肿瘤范围，因此影像和组织病理很关键。</p>',
    diagnosis:
      '<p>诊断需要把暴露史、影像、胸水检查和胸膜组织病理放在一起判断。胸水细胞学有时不能确诊，胸腔镜或影像引导下胸膜活检通常更能提供足够组织。</p><p>病理医生会通过免疫组化帮助确认间皮来源，并与肺腺癌、转移癌、胸膜炎和结核等疾病鉴别。分期检查可包括增强 CT、PET-CT、MRI 和评估是否有淋巴结或远处转移。</p>',
    treatment:
      '<p>治疗应由胸膜肿瘤经验较多的多学科团队制定。常用方案包括培美曲塞联合铂类化疗、免疫治疗、部分患者加用抗血管生成或其他药物；局限期、体能好且病灶可切除者可讨论胸膜剥脱/胸膜切除等手术选择。</p><p>放疗可用于局部控制或缓解疼痛。胸水管理同样重要，包括反复穿刺、胸膜固定术或留置胸腔导管。症状控制、营养、疼痛和呼吸困难管理应尽早纳入，而不是等到治疗失败后才开始。</p>',
    longTermCare:
      '<p>随访通常围绕症状、胸水、影像变化、治疗副作用和生活质量展开。患者可以记录气短程度、疼痛位置、体重、用药反应和抽胸水次数，帮助医生判断是否需要调整治疗。</p><p>如果存在石棉或职业暴露，还应注意职业病资料、暴露证明和家属共同暴露风险。停止继续暴露和戒烟有助于降低其他肺部风险。</p>',
    fertilityOrFamily:
      '<p>大多数恶性胸膜间皮瘤不是遗传病。若发病年龄较轻，或家族中有间皮瘤、葡萄膜黑色素瘤、皮肤黑色素瘤、肾癌等聚集，建议询问是否需要 BAP1 肿瘤易感综合征相关遗传咨询。</p>',
    emergencySigns:
      '<p>气短快速加重、胸痛明显加重、咯血、晕厥、发热伴寒战、单侧下肢肿痛、突发胸闷或疑似肺栓塞时应急诊。留置胸腔导管周围红肿、流脓或高热，也需要尽快就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Mesothelioma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/mesothelioma/treatment',
    },
    {
      name: 'MedlinePlus: Mesothelioma',
      type: 'official',
      url: 'https://medlineplus.gov/mesothelioma.html',
    },
  ],
  symptoms:
    '<p>常见表现包括单侧或反复胸腔积液、气短、胸痛、咳嗽、乏力和体重下降。</p>',
  diagnosis:
    '<p>诊断依靠胸部影像、胸水评估和胸膜活检病理免疫组化，并需与肺癌胸膜转移、结核和其他胸膜病变鉴别。</p>',
  treatment:
    '<p>治疗可包括化疗、免疫治疗、部分患者手术或放疗，以及胸水控制、疼痛和呼吸困难管理、临床试验。</p>',
  prognosis:
    '<p>恶性胸膜间皮瘤通常进展性强，预后受分期、病理类型、体能状态和治疗可及性影响；早期转入有经验团队有助于更完整地评估选择。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 401,
    name: 'malignant-pleural-mesothelioma-journey.png',
    url: '/images/diseases/malignant-pleural-mesothelioma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

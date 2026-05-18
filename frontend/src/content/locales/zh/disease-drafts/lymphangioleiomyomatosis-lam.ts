import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLymphangioleiomyomatosisLam: DiseaseDraft = {
  ...entity(5010, 'disease-lymphangioleiomyomatosis-lam'),
  name: '淋巴管肌瘤病',
  nameEn: 'Lymphangioleiomyomatosis (LAM)',
  alias: 'LAM、肺淋巴管肌瘤病、第一批罕见病目录第 64 项',
  slug: 'lymphangioleiomyomatosis-lam',
  oneSentence:
    '淋巴管肌瘤病是一种罕见的囊性肺疾病，主要影响女性，以肺部平滑肌样细胞异常增生导致囊性破坏为特征，可表现为气胸、乳糜胸和进行性呼吸困难，西罗莫司可有效延缓肺功能下降。',
  plainName: '一种主要影响女性的肺部逐渐形成气囊肿的罕见病',
  prevalence:
    '患病率约 1/400,000–1,000,000；几乎只见于女性，尤其是育龄期女性；散发型和结节性硬化症相关型（TSC-LAM）均可见。',
  searchIntents: [
    '淋巴管肌瘤病 症状',
    'LAM 气胸 乳糜胸',
    '淋巴管肌瘤病 治疗 西罗莫司',
    'LAM 女性 肺移植',
    '淋巴管肌瘤病 结节性硬化症',
  ],
  quickLook: {
    whatItIs:
      '肺部淋巴管和平滑肌样细胞（LAM 细胞）异常增生，导致肺组织囊性破坏。LAM 细胞具有 TSC1/TSC2 基因突变，导致 mTOR 信号通路过度激活。',
    whoToSeeFirst:
      '育龄期女性出现不明原因气胸、乳糜胸或进行性呼吸困难时，应到呼吸与危重症医学科或间质性肺病专科就诊。',
    isGenetic:
      '散发型 LAM 患者体细胞存在 TSC1 或 TSC2 突变；约 30–40% 的结节性硬化症（TSC）女性患者合并 LAM。TSC 是常染色体显性遗传，但散发型 LAM 一般不遗传给后代。',
    hasTreatment:
      '西罗莫司（sirolimus）是首选靶向治疗，可延缓肺功能下降、减少乳糜积液；终末期需肺移植。',
    commonDelayReason:
      '早期症状（活动后气短）被误认为哮喘或 COPD；反复气胸未进一步查找原因；乳糜胸被当作普通胸腔积液处理。',
  },
  patientJourney: {
    whenToSuspect: [
      '育龄期女性出现进行性加重的活动后呼吸困难。',
      '反复发生自发性气胸（尤其是双侧）。',
      '乳糜胸或乳糜性腹水（胸腔/腹腔乳白色积液）。',
      '不明原因咯血。',
      '已知结节性硬化症（TSC）的女性患者出现呼吸系统症状。',
    ],
    commonWrongTurns: [
      '当作哮喘或 COPD长期治疗，未做高分辨率 CT。',
      '反复气胸仅做胸腔闭式引流，未进一步检查病因。',
      '乳糜胸未做胸液乳糜试验，误诊为普通渗出液。',
      '未评估肾血管平滑肌脂肪瘤（AML），延误 TSC 相关诊断。',
    ],
    firstDepartments: [
      '呼吸与危重症医学科',
      '胸外科（气胸、乳糜胸处理）',
      '影像科（HRCT 评估）',
      '肾内科/泌尿外科（肾 AML 评估）',
      '肺移植评估中心（终末期）',
    ],
    diagnosisChecklist: [
      '详细记录呼吸困难程度、气胸发作次数和胸/腹水情况。',
      '高分辨率 CT（HRCT）：双肺弥漫性薄壁囊性改变是特征性表现。',
      '肺功能检查：阻塞性或混合性通气障碍，弥散功能下降。',
      '胸液分析：乳糜试验阳性（乳糜胸）。',
      '腹部 CT/MRI：排查肾血管平滑肌脂肪瘤（AML）。',
      '血清 VEGF-D 水平：>800 pg/mL 有诊断价值。',
      'TSC1/TSC2 基因检测（如有条件）。',
    ],
    testsToAskAbout: [
      '胸部 HRCT。',
      '肺功能检查。',
      '血清 VEGF-D 水平。',
      '胸液乳糜试验。',
      '腹部 CT/MRI（肾 AML）。',
      'TSC1/TSC2 基因检测。',
    ],
    questionsForDoctor: [
      '我的 LAM 是散发型还是与结节性硬化症相关？',
      '现在肺功能受损到什么程度？',
      '西罗莫司对我有效吗？需要吃多久？',
      '还需要多久复查一次 CT 和肺功能？',
      '什么时候需要考虑肺移植？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>主要见于女性。最常见的症状是进行性加重的活动后呼吸困难，随病情进展可出现静息呼吸困难。约 60–70% 的患者会发生自发性气胸（可反复发生）。约 30% 有乳糜胸（胸腔乳糜性积液），表现为呼吸困难加重。其他表现包括干咳、咯血、乳糜性腹水。肾血管平滑肌脂肪瘤（AML）是常见肾外表现，可导致腰痛或出血。与 TSC 相关的 LAM 患者还可能有皮肤色素脱失斑、面部血管纤维瘤、癫痫等 TSC 表现。</p>',
    diagnosis:
      '<p>高分辨率 CT（HRCT）是诊断的关键：双肺弥漫性分布的薄壁圆形囊腔，囊壁清晰，无显著纤维化或结节。肺功能检查常显示阻塞性或混合性通气障碍，DLCO 显著下降。血清 VEGF-D >800 pg/mL 对诊断有较高特异性。胸液分析显示乳糜试验阳性可确诊乳糜胸。腹部影像学发现肾 AML 支持诊断。TSC1/TSC2 基因检测有助于区分散发型和 TSC 相关型。需与肺朗格汉斯细胞组织细胞增生症（PLCH）、Birt-Hogg-Dubé 综合征等囊性肺病鉴别。</p>',
    treatment:
      '<p>西罗莫司（sirolimus，雷帕霉素）是目前唯一获批的靶向治疗，通过抑制 mTOR 通路减缓疾病进展。推荐用于肺功能下降（FEV1 <70% 预计值）或有症状乳糜积液的患者。通常口服 1–2 mg/天，目标血药浓度 5–10 ng/mL。需监测免疫功能、血脂、口腔溃疡等副作用。终末期肺功能衰竭（FEV1 <30%）需评估肺移植。反复气胸可行胸膜固定术。乳糜胸可尝试饮食调整（中链甘油三酯饮食）或胸腔引流。避免雌激素（如口服避孕药、激素替代治疗），因为雌激素可能加速疾病进展。</p>',
    longTermCare:
      '<p>需终身随访，每 3–6 个月复查肺功能和胸部 CT。监测西罗莫司的血药浓度和副作用。定期腹部影像学监测肾 AML 大小（>4 cm 有出血风险，需介入或手术）。避免怀孕（孕期激素变化和腹压增加可加重病情）。接种流感疫苗和肺炎疫苗。加入患者支持组织有助于获得心理支持和最新治疗信息。</p>',
    fertilityOrFamily:
      '<p>散发型 LAM 为体细胞突变，一般不遗传给后代。与 TSC 相关的 LAM 遵循 TSC 的常染色体显性遗传模式（TSC1 或 TSC2 基因突变），父母一方患病时子女有 50% 风险。散发型 LAM 患者若计划怀孕需慎重评估，孕期可能加重病情。遗传咨询有助于评估风险和制定生育计划。</p>',
    emergencySigns:
      '<p>突发胸痛和呼吸困难（气胸）、大量乳糜性胸腹水导致呼吸困难、严重咯血、肾 AML 破裂出血导致剧烈腰痛和休克需要立即就医。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Lymphangioleiomyomatosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470348/',
    },
    {
      name: 'NORD: Lymphangioleiomyomatosis',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/lymphangioleiomyomatosis/',
    },
  ],
  symptoms:
    '<p>进行性呼吸困难、反复气胸、乳糜胸/腹水、干咳、咯血；可伴肾血管平滑肌脂肪瘤。</p>',
  diagnosis:
    '<p>HRCT 显示双肺弥漫性薄壁囊性改变；血清 VEGF-D >800 pg/mL；肺功能下降；可发现肾 AML。</p>',
  treatment:
    '<p>西罗莫司靶向治疗延缓进展；反复气胸行胸膜固定术；乳糜胸饮食调整或引流；终末期肺移植。</p>',
  prognosis:
    '<p>西罗莫司可显著延缓肺功能下降；终末期需肺移植；避免雌激素和怀孕有助于稳定病情。</p>',
  sourceName: 'NCBI StatPearls: Lymphangioleiomyomatosis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK470348/',
  categorySlug: 'respiratory',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5010,
    name: 'lymphangioleiomyomatosis-lam-journey.png',
    url: '/images/diseases/lymphangioleiomyomatosis-lam-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

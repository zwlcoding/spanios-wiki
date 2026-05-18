import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicPulmonaryFibrosis: DiseaseDraft = {
  ...entity(5002, 'disease-idiopathic-pulmonary-fibrosis'),
  name: '特发性肺纤维化',
  nameEn: 'Idiopathic Pulmonary Fibrosis',
  alias: 'IPF、寻常型间质性肺炎、第一批罕见病目录第 55 项',
  slug: 'idiopathic-pulmonary-fibrosis',
  oneSentence:
    '特发性肺纤维化是一种原因不明的进行性肺间质纤维化疾病，以活动后呼吸困难和干咳为主要表现，抗纤维化药物可延缓肺功能下降，肺移植是唯一的治愈手段。',
  plainName: '肺部逐渐变硬、结疤导致呼吸困难的罕见肺病',
  prevalence:
    '发病率约 0.09–1.30/万人，患病率约 0.33–4.51/万人；多见于 60 岁以上男性，诊断后中位生存期约 3–5 年。',
  searchIntents: [
    '特发性肺纤维化 早期症状',
    'IPF 治疗 吡非尼酮 尼达尼布',
    '肺纤维化 能活多久',
    '特发性肺纤维化 肺移植',
    '肺纤维化 干咳 呼吸困难',
  ],
  quickLook: {
    whatItIs:
      '肺组织原因不明地逐渐瘢痕化（纤维化），肺弹性下降、氧气交换受阻，是一种慢性、进行性、不可逆的间质性肺病。',
    whoToSeeFirst:
      '持续加重的活动后气短、干咳超过 2 个月，尤其是 60 岁以上男性，应到呼吸与危重症医学科或间质性肺病专病门诊就诊。',
    isGenetic:
      '大多数为散发；约 20% 有家族史，与端粒酶基因（TERT、TERC）等突变相关。吸烟和某些环境暴露是危险因素。',
    hasTreatment:
      '有抗纤维化药物（吡非尼酮、尼达尼布）可减缓肺功能下降；2025 年 FDA 批准 nerandomilast 为新选择。肺移植是唯一治愈手段。',
    commonDelayReason:
      '早期症状（气短、干咳）被误认为老年退化、慢支或哮喘；HRCT 典型表现出现前诊断困难，平均延迟诊断时间超过 1 年。',
  },
  patientJourney: {
    whenToSuspect: [
      '活动后气短进行性加重，尤其是平地行走或爬楼梯时。',
      '持续干咳，无痰，止咳药效果差。',
      '双肺底部闻及细湿啰音（Velcro 啰音）。',
      '杵状指（手指末端膨大）。',
    ],
    commonWrongTurns: [
      '把气短归因于"年纪大了"或"缺乏锻炼"。',
      '把干咳当作慢性咽炎或支气管炎治疗数月。',
      '在基层医院反复拍胸片未发现异常，未做高分辨率 CT。',
      '误用激素或免疫抑制剂（对 IPF 不仅无效，还可能有害）。',
    ],
    firstDepartments: [
      '呼吸与危重症医学科（间质性肺病专病门诊）',
      '胸外科/肺移植评估中心（中重度患者）',
      '影像科（高分辨率 CT 评估）',
      '康复医学科（肺康复）',
    ],
    diagnosisChecklist: [
      '详细记录症状持续时间、进展速度和吸烟/环境暴露史。',
      '高分辨率 CT（HRCT）：寻找双肺外周、基底部为主的网格影和蜂窝肺。',
      '肺功能检查：限制性通气障碍、DLCO 降低。',
      '排除其他间质性肺病（结缔组织病、过敏性肺炎、药物性肺病等）。',
      '必要时外科肺活检（非典型病例）。',
    ],
    testsToAskAbout: [
      '高分辨率胸部 CT（HRCT）。',
      '肺功能检查（FVC、DLCO）。',
      '6 分钟步行试验。',
      '自身抗体谱（排除结缔组织病相关 ILD）。',
      'BAL（支气管肺泡灌洗，必要时）。',
    ],
    questionsForDoctor: [
      '我的 CT 是否符合确诊 UIP 模式？还需要活检吗？',
      '抗纤维化药物（吡非尼酮/尼达尼布）适合我吗？副作用如何管理？',
      '我的肺功能下降速度如何？',
      '何时需要评估肺移植？',
      '急性加重时应该怎么处理？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>典型表现为隐匿起病的进行性劳力性呼吸困难和持续性干咳。部分患者有乏力、体重下降和关节痛。体格检查常见双肺底细湿啰音（Velcro 啰音）和杵状指。晚期出现严重低氧血症、肺动脉高压和右心衰竭。急性加重表现为短期内呼吸困难急剧恶化，死亡率很高。</p>',
    diagnosis:
      '<p>诊断依赖临床表现、HRCT 和排除其他原因。确诊 UIP 型 HRCT 表现包括：双肺外周和基底部为主的网格影、牵拉性支气管扩张和蜂窝肺（多层、囊状、含气囊腔）。若 HRCT 为可能 UIP 或不符合 UIP，需通过外科肺活检或 MDD（多学科讨论）确诊。肺功能呈限制性通气障碍伴 DLCO 下降。需排除结缔组织病、慢性过敏性肺炎、石棉肺、药物性肺病等。</p>',
    treatment:
      '<p>抗纤维化治疗：吡非尼酮和尼达尼布可减缓 FVC 下降速度，推荐用于轻中度患者。2025 年 10 月 FDA 批准 nerandomilast（PDE4B 抑制剂），III 期试验显示 FVC 年下降率减少 52.5%。支持治疗包括戒烟、氧疗、肺康复、流感/肺炎疫苗接种和胃食管反流管理。急性加重时使用高剂量激素（尽管证据有限）和支持治疗。终末期患者应早期转诊评估肺移植。不推荐常规使用激素、免疫抑制剂或 N-乙酰半胱氨酸。</p>',
    longTermCare:
      '<p>每 3–6 个月随访肺功能、6 分钟步行距离和症状变化。使用 GAP 评分（性别、年龄、FVC、DLCO）评估预后。监测药物不良反应（吡非尼酮：皮疹、光敏感、胃肠不适；尼达尼布：腹泻、体重下降、肝酶升高）。肺康复可改善运动耐量和生活质量。避免吸烟和已知的环境暴露。</p>',
    fertilityOrFamily:
      '<p>少数患者有家族性 IPF，与端粒相关基因突变有关。有家族史者可考虑遗传咨询和基因检测。患者生育计划应在呼吸科和产科共同管理下进行，评估肺功能是否耐受妊娠。</p>',
    emergencySigns:
      '<p>突发严重呼吸困难、低氧血症加重、发热伴咳痰（可能为急性加重或感染）、咯血、意识改变应立即急诊。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Idiopathic Pulmonary Fibrosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK448162/',
    },
    {
      name: 'FDA Approval: Nerandomilast for IPF (October 2025)',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-nerandomilast-idiopathic-pulmonary-fibrosis',
    },
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/yjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
  ],
  symptoms:
    '<p>隐匿起病的进行性劳力性气短和持续性干咳；Velcro 啰音和杵状指；晚期低氧血症、肺动脉高压和右心衰竭。</p>',
  diagnosis:
    '<p>HRCT 典型 UIP 模式可确诊；肺功能限制性障碍伴 DLCO 下降；需排除其他 ILD；非典型病例需外科肺活检。</p>',
  treatment:
    '<p>吡非尼酮或尼达尼布抗纤维化；2025 年新增 nerandomilast；支持治疗包括氧疗、肺康复；终末期考虑肺移植。</p>',
  prognosis:
    '<p>中位生存期 3–5 年；抗纤维化药物可延缓进展；急性加重预后差；早期诊断和治疗可改善生活质量。</p>',
  sourceName: 'NCBI StatPearls: Idiopathic Pulmonary Fibrosis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK448162/',
  categorySlug: 'respiratory',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5002,
    name: 'idiopathic-pulmonary-fibrosis-journey.png',
    url: '/images/diseases/idiopathic-pulmonary-fibrosis-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

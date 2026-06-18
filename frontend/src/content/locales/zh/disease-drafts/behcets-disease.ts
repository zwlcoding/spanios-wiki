import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBehcetsDisease: DiseaseDraft = {
  ...entity(2009, 'disease-behcets-disease'),
  name: '白塞病/贝赫切特综合征',
  nameEn: "Behçet's disease",
  alias:
    '白塞综合征、贝赫切特病、Behçet disease、丝绸之路病、第二批罕见病目录第 9 项',
  slug: 'behcets-disease',
  oneSentence:
    '白塞病是一种复发性全身血管炎，常见线索是反复口腔溃疡、生殖器溃疡、皮肤损害和眼部炎症，也可能累及关节、肠道、神经和大血管。',
  plainName: '反复口腔溃疡合并眼、皮肤或血管炎症的免疫病',
  prevalence:
    '已纳入国家第二批罕见病目录；在地中海、中东和亚洲部分地区更常见，在美国和北欧等地区较罕见，MedlinePlus Genetics 提到美国通常少于每 100,000 人 1 例。',
  quickLook: {
    whatItIs:
      '白塞病不是普通口腔溃疡。它的核心是血管炎，症状会反复发作和缓解。轻者主要是口腔和皮肤黏膜问题，重者可发生葡萄膜炎、血栓、大血管病变、肠道溃疡或神经系统受累。',
    whoToSeeFirst:
      '反复口腔溃疡合并生殖器溃疡、眼红眼痛视物模糊、结节红斑样皮疹或关节痛时，优先看风湿免疫科；眼部症状需尽快眼科评估。',
    isGenetic:
      '通常不是单基因遗传病。HLA-B51 与风险相关，但有该基因不等于一定患病，诊断主要依靠症状组合和排除相似疾病。',
    hasTreatment:
      '可以控制，但目前没有根治药。治疗按受累器官分层，可能包括局部治疗、秋水仙碱、糖皮质激素、免疫抑制剂或生物制剂，目标是减少复发并预防失明、血栓和器官损伤。',
    commonDelayReason:
      '口腔溃疡太常见，很多患者多年在口腔科、皮肤科、眼科、消化科之间分散就诊；如果没有记录复发频率和其他器官线索，诊断会拖很久。',
  },
  patientJourney: {
    whenToSuspect: [
      '一年内反复多次口腔溃疡，疼痛明显、反复发作。',
      '口腔溃疡同时或先后出现生殖器溃疡，愈合后可留瘢痕。',
      '眼红、眼痛、畏光、视物模糊、飞蚊或医生提示葡萄膜炎。',
      '皮肤反复出现结节红斑样疼痛结节、痤疮样皮疹或针刺后异常红肿。',
      '伴有关节痛、腹痛腹泻便血、头痛神经症状、血栓或大血管病变。',
    ],
    commonWrongTurns: [
      '长期只按复发性口腔溃疡或上火处理。',
      '眼部炎症没有及时看眼科，导致视力风险增加。',
      '肠道受累被单独当作炎症性肠病，未结合口腔、生殖器和眼部线索。',
      '自行长期使用激素或抗生素，掩盖病情并增加副作用。',
    ],
    firstDepartments: ['风湿免疫科', '眼科/葡萄膜炎专科', '皮肤科', '消化内科'],
    diagnosisChecklist: [
      '记录口腔溃疡次数、持续时间、照片、诱因和是否留疤。',
      '记录生殖器溃疡、皮疹、眼部症状、关节痛、腹痛便血、头痛或血栓病史。',
      '带齐眼科检查、炎症指标、免疫检查、肠镜/影像和既往病理。',
      '说明地域、家族史、HLA-B51 检测结果（如有）和用药反应。',
    ],
    testsToAskAbout: [
      '眼科裂隙灯和眼底/葡萄膜炎评估。',
      '炎症指标、血常规、肝肾功能和免疫相关排除性检查。',
      '针刺反应试验是否适合。',
      '有肠道症状时，肠镜和影像评估。',
      '有头痛、神经症状、血栓或胸腹痛时，神经影像和血管影像评估。',
    ],
    questionsForDoctor: [
      '目前是黏膜皮肤型，还是已经有眼、肠道、神经或血管受累？',
      '哪些表现提示需要马上看眼科或急诊？',
      '治疗目标是减少溃疡复发，还是预防器官损伤？需要多强的免疫治疗？',
      '复发时我应该如何记录和处理？哪些药不能自行停？',
      '备孕、妊娠或疫苗接种需要怎么调整用药？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>白塞病最常见的表现是反复口腔溃疡，常像严重口疮一样疼痛并反复出现。许多患者还会有生殖器溃疡、皮肤结节或痤疮样皮疹、眼部葡萄膜炎、关节痛或关节炎。</p><p>少数患者可出现严重器官受累，包括视力受损、肠道溃疡和出血、血栓、大血管动脉瘤或狭窄、神经系统症状。病情常呈发作和缓解交替。</p>',
    diagnosis:
      '<p>白塞病没有一个单独化验可以确诊。医生主要依据反复口腔溃疡及生殖器、眼、皮肤、血管、神经或肠道表现的组合来判断，并排除感染、炎症性肠病、系统性红斑狼疮、其他血管炎和药物相关问题。</p><p>HLA-B51 可提示风险，但不能单独用于诊断。针刺反应试验、眼科检查、肠镜或血管/神经影像会按症状选择。</p>',
    treatment:
      '<p>治疗取决于受累部位。口腔、生殖器和皮肤症状可用局部药物、秋水仙碱或短期抗炎方案；眼、神经、肠道和血管受累通常需要更积极的免疫抑制或生物制剂治疗。</p><p>治疗目标是减少复发、控制疼痛和炎症，更重要的是防止失明、血栓、血管破裂或器官损伤。用药强度应由风湿免疫科和相关专科共同决定。</p>',
    longTermCare:
      '<p>长期管理需要记录溃疡、皮疹、眼部症状、关节、肠道和神经血管表现的发作频率。眼部受累患者需要规律眼科随访，即使症状减轻也不能自行停药。</p><p>患者应了解复发诱因、药物副作用、感染风险和血栓风险。跨科就诊时主动说明白塞病诊断，避免把各系统症状割裂处理。</p>',
    fertilityOrFamily:
      '<p>白塞病通常不是典型遗传病。HLA-B51 与风险相关，但家属有该基因也不代表一定患病。</p><p>备孕和妊娠期用药需要提前规划，部分免疫抑制药不适合妊娠。应在病情稳定时与风湿免疫科和产科讨论。</p>',
    emergencySigns:
      '<p>眼痛、视力下降、明显畏光，突发头痛、意识改变、肢体无力，胸痛、咯血、腹痛便血，单侧肢体肿痛提示血栓，或高热感染迹象，应立即就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: "MedlinePlus: Behcet's Syndrome",
      type: 'official',
      url: 'https://medlineplus.gov/behcetssyndrome.html',
    },
    {
      name: 'MedlinePlus Genetics: Behçet disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/behcet-disease/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>典型线索是反复口腔溃疡、生殖器溃疡、皮肤损害和眼部葡萄膜炎，也可有关节、肠道、神经和大血管受累。</p>',
  diagnosis:
    '<p>诊断主要依据反复症状组合和排除相似疾病；眼科评估、针刺反应、炎症指标、肠镜或血管/神经影像按受累部位选择。</p>',
  treatment:
    '<p>治疗按受累器官分层，可包括局部治疗、秋水仙碱、糖皮质激素、免疫抑制剂或生物制剂，重点是预防眼、血管、神经和肠道并发症。</p>',
  prognosis:
    '<p>多数患者可通过规范治疗控制症状，但眼、神经、肠道和大血管受累会影响预后，需要长期随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [78],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 363,
    name: 'behcets-disease-journey.png',
    url: '/images/diseases/behcets-disease-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

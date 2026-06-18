import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeurofibromatosis: DiseaseDraft = {
  ...entity(2054, 'disease-neurofibromatosis'),
  name: '神经纤维瘤病',
  nameEn: 'Neurofibromatosis',
  alias: 'NF；NF1；NF2相关神经鞘瘤病；神经鞘瘤病；第二批罕见病目录第 54 项',
  slug: 'neurofibromatosis',
  oneSentence:
    '神经纤维瘤病是一组遗传性神经系统肿瘤易感疾病，可导致皮肤、周围神经、脑脊髓、眼、骨骼和听力等多系统问题。',
  plainName: '一种会让神经和皮肤等部位长肿瘤、需要长期筛查的遗传病',
  prevalence:
    '已纳入中国第二批罕见病目录；NF1 相对最常见，NF2 相关神经鞘瘤病和其他神经鞘瘤病更少见。',
  quickLook: {
    whatItIs:
      '神经纤维瘤病不是一种单一疾病。NF1 常有咖啡牛奶斑、雀斑样色素、神经纤维瘤、学习问题和骨/血管风险；NF2 相关神经鞘瘤病常有双侧前庭神经鞘瘤、听力和平衡问题；其他神经鞘瘤病以多发神经鞘瘤和慢性疼痛为主。',
    whoToSeeFirst:
      '儿童皮肤表现或发育学习问题可先看儿科、皮肤科或医学遗传科；听力、耳鸣和平衡问题需耳鼻喉/神经耳科；疼痛或肿瘤增长需专病多学科评估。',
    isGenetic:
      'NF1、NF2、SMARCB1、LZTR1 等基因可相关，多数按常染色体显性方式处理，但也可新发或嵌合，家族史阴性不能排除。',
    hasTreatment:
      '目前重点是监测并发症和按问题处理。可包括视力/听力筛查、影像随访、疼痛管理、手术、康复、学习支持，部分 NF1 丛状神经纤维瘤可评估 MEK 抑制剂。',
    commonDelayReason:
      '早期皮肤斑常被认为只是胎记；学习困难、骨痛、听力下降或慢性疼痛如果没有与 NF 联系起来，筛查会滞后。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童有多个咖啡牛奶斑、腋窝/腹股沟雀斑样色素、皮肤或皮下小肿块，或家族中有人类似。',
      '出现视力下降、眼球突出、头痛、癫痫、骨弯曲、脊柱侧弯、高血压或学习发育困难。',
      '青少年或成人出现双侧听力下降、耳鸣、平衡差，或 MRI 提示前庭神经鞘瘤、脑膜瘤、室管膜瘤。',
      '多发神经鞘瘤或长期难解释的神经痛、麻木、无力。',
    ],
    commonWrongTurns: [
      '把咖啡牛奶斑单纯当胎记，没有按年龄和数量评估 NF1。',
      '疼痛快速加重或肿块变硬变大时仍只观察，漏掉恶性周围神经鞘膜瘤风险。',
      '只切除一个肿瘤，没有建立眼科、血压、骨骼、学习、听力和影像的长期随访。',
    ],
    firstDepartments: [
      '医学遗传科',
      '皮肤科',
      '儿科或儿童保健/发育行为儿科',
      '神经外科、眼科、耳鼻喉科按表现转诊',
    ],
    diagnosisChecklist: [
      '拍照记录咖啡牛奶斑、雀斑样色素和皮肤/皮下肿块的数量、位置和变化。',
      '整理视力、听力、学习发育、骨骼、血压、疼痛和神经功能变化时间线。',
      '带眼科检查、听力、MRI/CT、骨骼影像、病理和基因检测结果。',
      '准备三代家族史，注明皮肤斑、听力下降、神经肿瘤、脑膜瘤或脊柱肿瘤。',
    ],
    testsToAskAbout: [
      '按临床类型选择 NF1、NF2、SMARCB1、LZTR1 等基因检测，并评估嵌合可能。',
      'NF1 儿童的眼科检查、血压、发育学习评估和骨骼/脊柱筛查。',
      '听力下降或疑似 NF2 相关疾病时的听力学和内听道/脑脊髓 MRI。',
      '疼痛明显、肿块快速增大、质地变硬或神经功能下降时，评估恶性转化风险。',
    ],
    questionsForDoctor: [
      '我属于 NF1、NF2 相关神经鞘瘤病，还是其他神经鞘瘤病？',
      '哪些表现需要每年筛查，哪些症状需要马上复诊？',
      '这个肿瘤适合观察、手术、药物还是疼痛管理？手术会不会损伤神经功能？',
      '孩子的学习、注意力、骨骼和视力需要哪些支持？家属是否需要检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NF1 常从儿童期皮肤线索开始，如多个咖啡牛奶斑、腋窝或腹股沟雀斑样色素、Lisch 结节、皮肤或皮下神经纤维瘤。还可出现视路胶质瘤、丛状神经纤维瘤、骨发育问题、脊柱侧弯、高血压、学习困难和注意力问题。</p><p>NF2 相关神经鞘瘤病常表现为听力下降、耳鸣、平衡差，典型病灶是双侧前庭神经鞘瘤，也可有脑膜瘤、室管膜瘤或白内障。其他神经鞘瘤病常以多发神经鞘瘤和慢性疼痛为主要困扰。</p>',
    diagnosis:
      '<p>诊断基于临床标准、眼科/听力/影像评估和基因检测。NF1 很多患者可凭年龄相关临床表现诊断，但基因检测有助于早期或不典型病例、产前咨询和鉴别 Legius 综合征等相似情况。</p><p>NF2 相关神经鞘瘤病和其他神经鞘瘤病需要结合 MRI、听力、病理和 NF2、SMARCB1、LZTR1 等基因检测。嵌合病例可导致血液检测阴性或表现局限，必要时需由遗传团队解释。</p>',
    treatment:
      '<p>治疗以问题为导向。无症状小肿瘤可随访；影响功能、快速增长或疑似恶变的肿瘤需由有经验团队评估手术、影像随访或药物。NF1 中不能手术且有症状的丛状神经纤维瘤，部分儿童可评估 MEK 抑制剂等治疗。</p><p>疼痛、学习困难、注意力问题、骨骼畸形、高血压、视力和听力问题都需要分别处理。放疗在 NF 相关肿瘤中需谨慎，因为可能增加后续肿瘤风险，具体由专病团队权衡。</p>',
    longTermCare:
      '<p>长期随访应按类型和年龄制定。NF1 儿童通常需要定期体格检查、血压、皮肤和神经评估、眼科筛查、发育学习支持和骨骼观察；NF2 相关疾病需听力和脑脊髓影像随访。</p><p>患者和家属应学会识别危险变化：肿块快速增大、持续夜间痛、硬度改变、神经功能下降、视力或听力快速变化。保存影像和病理资料对长期比较很重要。</p>',
    fertilityOrFamily:
      '<p>多种 NF 相关疾病按常染色体显性遗传处理，携带者将致病变异传给子女的概率常为 50%，但新发变异和嵌合很常见。确诊后可讨论亲属检测、产前诊断或胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>肿块快速变大并伴持续或夜间疼痛、肢体无力或麻木加重、视力突然下降、听力快速下降、严重头痛呕吐、癫痫、脊髓压迫症状或高血压危象，应尽快就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus: Neurofibromatosis',
      type: 'official',
      url: 'https://medlineplus.gov/neurofibromatosis.html',
    },
    {
      name: 'National Institute of Neurological Disorders and Stroke: Neurofibromatosis',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/neurofibromatosis',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>可表现为咖啡牛奶斑、雀斑样色素、神经纤维瘤、学习困难、骨骼问题、视力或听力下降、耳鸣、平衡障碍、多发神经鞘瘤和慢性疼痛。</p>',
  diagnosis:
    '<p>诊断结合临床标准、眼科和听力检查、MRI/影像、病理，以及 NF1、NF2、SMARCB1、LZTR1 等基因检测和嵌合评估。</p>',
  treatment:
    '<p>治疗包括长期筛查、手术或观察、疼痛管理、学习/康复支持、视听和骨骼处理，部分 NF1 丛状神经纤维瘤可评估 MEK 抑制剂。</p>',
  prognosis:
    '<p>预后因类型和并发症差异很大。规范筛查可及早发现视听、骨骼、血管、肿瘤增长和恶性转化风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [31],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 408,
    name: 'neurofibromatosis-journey.png',
    url: '/images/diseases/neurofibromatosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

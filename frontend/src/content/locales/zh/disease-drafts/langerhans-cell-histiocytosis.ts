import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLangerhansCellHistiocytosis: DiseaseDraft = {
  ...entity(5006, 'disease-langerhans-cell-histiocytosis'),
  name: '朗格汉斯组织细胞增生症',
  nameEn: 'Langerhans Cell Histiocytosis',
  alias: 'LCH、组织细胞增生症X、第一批罕见病目录第 60 项',
  slug: 'langerhans-cell-histiocytosis',
  oneSentence:
    '朗格汉斯组织细胞增生症是一种以朗格汉斯细胞异常增殖为特征的罕见病，可累及骨骼、皮肤、垂体等多个器官，临床表现差异大，根据受累范围采用分层治疗，多数单系统病变预后良好。',
  plainName: '一种免疫细胞异常增生可影响骨骼、皮肤和垂体的罕见病',
  prevalence:
    '年发病率约 0.5–5.4 例/百万人；儿童多见，高峰年龄 1–3 岁；成人发病相对少见，肺 LCH 多见于 20–40 岁吸烟者。',
  searchIntents: [
    '朗格汉斯组织细胞增生症 症状',
    'LCH 骨病变 治疗',
    '朗格汉斯细胞增生症 尿崩症',
    'LCH 儿童 预后',
    '朗格汉斯组织细胞增生症 化疗',
  ],
  quickLook: {
    whatItIs:
      '朗格汉斯细胞（一种树突状细胞）在某些信号刺激下异常增殖并浸润组织，导致局部或全身器官损伤。具体病因尚不完全清楚，可能与基因突变（如 BRAF V600E）和免疫失调有关。',
    whoToSeeFirst:
      '出现不明原因骨痛、皮疹、尿量增多或多饮多尿时，应到儿科血液肿瘤科、骨科、皮肤科或内分泌科就诊。',
    isGenetic:
      '大多数病例为散发，约 50–60% 的患儿存在 BRAF V600E 等基因突变；少数病例与家族性易感性有关，但并非典型单基因遗传病。',
    hasTreatment:
      '根据受累器官数量和系统受累情况分层治疗。单系统病变可观察等待、手术刮除或局部治疗；多系统病变需化疗（长春碱+泼尼松等）。',
    commonDelayReason:
      '症状多样且不特异（如皮疹被误认为湿疹、骨痛被误认为生长痛、多尿被误认为单纯性尿崩症），容易在不同科室间辗转。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童出现不明原因骨痛、局部肿胀或病理性骨折。',
      '头皮或躯干出现类似脂溢性皮炎或湿疹的顽固性皮疹。',
      '多饮多尿、尿比重低，提示尿崩症（垂体柄受累）。',
      '肝脾肿大、淋巴结肿大、发热、体重下降等全身症状。',
      '成人吸烟者出现反复气胸或囊性肺病。',
    ],
    commonWrongTurns: [
      '把骨病变误诊为普通骨髓炎或骨肿瘤，未做组织活检。',
      '把皮疹当作单纯湿疹或脂溢性皮炎长期外用激素治疗。',
      '把多尿当作单纯性尿崩症，未进一步查找原因。',
      '在成人中把肺部 LCH 误诊为哮喘或 COPD。',
    ],
    firstDepartments: [
      '儿科血液肿瘤科',
      '骨科（骨病变为主）',
      '皮肤科（皮疹为主）',
      '内分泌科（尿崩症为主）',
      '呼吸科（成人肺 LCH）',
    ],
    diagnosisChecklist: [
      '详细记录症状出现顺序、持续时间及加重因素。',
      'X 线或 CT 检查骨病变（典型为溶骨性病变）。',
      '皮肤病理活检：免疫组化 CD1a、S100、Langerin 阳性。',
      '骨病变活检确诊。',
      '评估全身受累：血常规、肝肾功能、垂体 MRI、腹部超声。',
      'BRAF V600E 基因检测（如有条件）。',
    ],
    testsToAskAbout: [
      '受累部位影像学（X 线、CT、MRI）。',
      '组织活检+免疫组化（CD1a、S100、Langerin）。',
      '血常规、肝肾功能、电解质。',
      '垂体 MRI（评估尿崩症）。',
      'BRAF V600E 基因检测。',
    ],
    questionsForDoctor: [
      '我的孩子属于单系统还是多系统受累？',
      '治疗方案是什么？需要化疗吗？',
      'BRAF 基因突变是否阳性？对预后有什么影响？',
      '尿崩症需要长期用药吗？',
      '治疗期间需要注意哪些副作用？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>临床表现因受累器官和年龄而异。儿童最常见的表现是骨病变（单发或多发溶骨性病变，多见于颅骨、四肢骨），表现为局部疼痛、肿胀或病理性骨折。皮肤受累表现为头皮或躯干脂溢性皮炎样、湿疹样或紫癜样皮疹。垂体柄受累导致中枢性尿崩症（多饮多尿）。肝脾肿大、淋巴结肿大、发热等全身症状提示多系统受累。成人肺 LCH 多见于年轻吸烟者，表现为呼吸困难、反复气胸、干咳。</p>',
    diagnosis:
      '<p>诊断依赖于组织病理学：活检标本中可见朗格汉斯细胞浸润，细胞核呈咖啡豆样或肾形，免疫组化 CD1a、S100 和 Langerin（CD207）阳性。骨病变 X 线或 CT 可见溶骨性破坏。评估全身受累范围需要完善血常规、肝肾功能、腹部超声、垂体 MRI、肺部 CT 等检查。BRAF V600E 基因突变检测有助于评估预后和指导靶向治疗。</p>',
    treatment:
      '<p>治疗根据受累范围和严重程度分层。单系统骨病变：可观察等待、手术刮除或局部激素注射。单系统皮肤病变：局部用药或光疗。多系统受累：标准方案为长春碱联合泼尼松化疗，疗程约 12 个月。BRAF V600E 突变阳性且难治性病例可使用 BRAF 抑制剂（如维莫非尼）。尿崩症需去氨加压素（DDAVP）替代治疗。成人肺 LCH 首要措施是戒烟，严重者可考虑西罗莫司或肺移植。</p>',
    longTermCare:
      '<p>需要长期随访，监测骨病变恢复情况、尿崩症控制、生长发育、听力、牙齿和内分泌系统功能。定期复查影像学评估有无新发病变。注意化疗的长期副作用（如听力损伤、牙齿发育异常、内分泌紊乱）。患者教育包括避免外伤（骨病变部位）、坚持用药和定期复查。</p>',
    fertilityOrFamily:
      '<p>大多数病例为散发，遗传模式不明确。少数家族性病例可能与基因易感性有关。有家族史的家庭可考虑遗传咨询。育龄期患者应在病情稳定后考虑妊娠，并在专科医生指导下进行。</p>',
    emergencySigns:
      '<p>病理性骨折、严重头痛或视力急剧下降（提示颅内受累或尿崩症加重）、呼吸困难或气胸、持续高热伴全身衰竭需要立即就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Langerhans Cell Histiocytosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK7037/',
    },
    {
      name: 'NORD: Langerhans Cell Histiocytosis',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/langerhans-cell-histiocytosis/',
    },
  ],
  symptoms:
    '<p>骨痛、皮疹、多饮多尿、肝脾肿大、淋巴结肿大、发热；成人肺 LCH 表现为呼吸困难、气胸。</p>',
  diagnosis:
    '<p>组织活检+免疫组化（CD1a、S100、Langerin 阳性）确诊；影像学评估骨病变和全身受累范围；BRAF V600E 基因检测。</p>',
  treatment:
    '<p>单系统病变可观察或局部治疗；多系统病变需化疗（长春碱+泼尼松）；BRAF 突变阳性难治病例可用靶向药；尿崩症用去氨加压素。</p>',
  prognosis:
    '<p>单系统病变预后良好，多数可自愈或治愈；多系统受累尤其是肝、肺、造血系统受累预后较差；现代化疗显著改善了生存率。</p>',
  sourceName: 'GeneReviews: Langerhans Cell Histiocytosis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7037/',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5006,
    name: 'langerhans-cell-histiocytosis-journey.png',
    url: '/images/diseases/langerhans-cell-histiocytosis-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeuroblastoma: DiseaseDraft = {
  ...entity(2053, 'disease-neuroblastoma'),
  name: '神经母细胞瘤',
  nameEn: 'Neuroblastoma',
  alias: '儿童神经母细胞瘤；第二批罕见病目录第 53 项',
  slug: 'neuroblastoma',
  oneSentence:
    '神经母细胞瘤是一种多见于婴幼儿和儿童的交感神经系统恶性肿瘤，可起源于肾上腺、颈胸腹盆腔旁神经组织，表现和风险分层差异很大。',
  plainName: '一种儿童期更常见、需要按风险分层治疗的神经源性肿瘤',
  prevalence:
    '已纳入中国第二批罕见病目录；总体属于少见儿童肿瘤，常在 5 岁前诊断，少数可在产前或婴儿期发现。',
  quickLook: {
    whatItIs:
      '神经母细胞瘤来自未成熟神经组织，常见起点是肾上腺或脊柱旁。它的行为差异很大：有些婴儿病灶可退缩，有些高危病例需要强度很高的综合治疗。',
    whoToSeeFirst:
      '儿童出现腹部包块、骨痛、眼眶周围瘀斑、长期不明原因发热或体重下降，应到儿科、儿童肿瘤科或小儿外科评估。',
    isGenetic:
      '大多数不是遗传性。若发病很早、多灶、双侧肾上腺或有家族史，可咨询 ALK、PHOX2B 等遗传风险评估。',
    hasTreatment:
      '治疗按低危、中危、高危分层，可包括观察、手术、化疗、放疗、自体造血干细胞移植、免疫治疗、分化治疗和靶向/临床试验。',
    commonDelayReason:
      '早期症状像普通腹痛、便秘、感染、生长痛、贫血或外伤；如果没有把包块、骨痛、眼部表现和尿儿茶酚胺线索联系起来，会延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '孩子腹部、颈部或胸部出现包块，伴腹胀、食欲差、体重下降或长期低热。',
      '骨痛、跛行、拒绝走路、贫血、容易瘀青，或眼眶周围像“黑眼圈”的瘀斑、眼球突出。',
      '婴儿出现皮下蓝紫色结节、肝大、呼吸困难或腹部迅速胀大。',
      '出现严重水样腹泻、高血压、Horner 综合征、眼球异常运动或脊髓压迫导致肢体无力。',
    ],
    commonWrongTurns: [
      '把骨痛当生长痛、外伤或关节炎，未做影像和血液评估。',
      '反复按感染或胃肠病处理腹痛腹胀，没有触诊和影像检查。',
      '只关注原发包块，没有做尿 VMA/HVA、MIBG、骨髓和分子风险分层。',
    ],
    firstDepartments: [
      '儿童肿瘤科',
      '小儿外科',
      '儿科急诊',
      '儿童血液肿瘤多学科门诊',
    ],
    diagnosisChecklist: [
      '记录症状时间线、疼痛部位、发热、体重、夜间痛、活动受限和神经功能变化。',
      '带超声、CT、MRI、MIBG/PET、骨扫描和所有化验报告。',
      '整理尿儿茶酚胺代谢物、LDH、铁蛋白、血常规、骨髓检查和病理结果。',
      '如已确诊，带 MYCN、ALK、染色体改变、病理分型和 INRG/风险分层资料。',
    ],
    testsToAskAbout: [
      '尿 VMA/HVA、血 LDH、铁蛋白和基础器官功能评估。',
      '原发肿瘤部位的 CT 或 MRI，MIBG 显像或 PET，骨髓穿刺/活检。',
      '病理活检与免疫组化，以及 MYCN 扩增、ALK、染色体改变等生物学风险指标。',
      '是否需要遗传咨询：特别是家族史、双侧/多灶或很早发病病例。',
    ],
    questionsForDoctor: [
      '孩子属于低危、中危还是高危？风险分层依据是什么？',
      '治疗目标是观察、手术为主，还是需要化疗/移植/免疫治疗等综合方案？',
      '肿瘤是否压迫脊髓或影响肾脏、呼吸、血压，需要紧急处理吗？',
      '治疗后如何监测复发、听力、心脏、肾脏、生长发育和学习影响？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>神经母细胞瘤症状取决于原发部位和是否转移。腹部肿瘤可引起腹胀、腹痛、便秘、食欲差或摸到包块；胸部或颈部病灶可引起咳嗽、呼吸困难、Horner 综合征或吞咽问题。</p><p>转移到骨或骨髓时，可出现骨痛、跛行、拒走、贫血、发热、容易出血或瘀青。眼眶周围瘀斑、眼球突出、皮下蓝紫结节、严重水样腹泻、高血压、眼球异常运动和脊髓压迫都是需要警惕的线索。</p>',
    diagnosis:
      '<p>诊断通常包括影像定位、儿茶酚胺代谢物、组织病理和分期。尿 VMA/HVA 升高支持诊断，但不能替代病理和分层。CT 或 MRI 用于评估原发肿瘤和是否压迫重要结构，MIBG 显像常用于全身病灶评估，部分情况用 PET。</p><p>病理和分子风险分层会影响治疗强度。医生会评估年龄、分期、病理分化、MYCN 扩增、ALK 改变、染色体改变、骨髓受累和治疗反应等因素。少数家庭性病例可进行 ALK、PHOX2B 等遗传咨询。</p>',
    treatment:
      '<p>治疗完全依赖风险分层。低危婴儿或局限病灶有时可观察或以手术为主；中危病例常需手术和化疗组合；高危病例通常需要诱导化疗、手术、强化治疗和自体造血干细胞移植、放疗、抗 GD2 免疫治疗、维甲酸分化治疗及维持/临床试验。</p><p>治疗过程中要同步管理感染、贫血、营养、疼痛、恶心、听力、心肾功能和心理压力。出现脊髓压迫、呼吸受限或高血压危象时，需要紧急处理。</p>',
    longTermCare:
      '<p>随访既要看复发，也要看儿童成长。复查可包括影像、尿儿茶酚胺、骨髓或分子指标，具体频率由风险组和治疗阶段决定。</p><p>高强度治疗后的长期问题可能包括听力下降、心肾功能影响、内分泌和生长发育问题、生育力影响、学习注意力困难和第二肿瘤风险。家庭应保留完整治疗摘要，便于长期随访。</p>',
    fertilityOrFamily:
      '<p>大多数神经母细胞瘤不是遗传性。若有家族史、双侧肾上腺病灶、多灶病灶、伴先天性巨结肠或中枢性低通气等情况，应询问是否需要 ALK、PHOX2B 或相关综合征评估。接受高强度治疗前，年龄合适时可讨论生育力保护。</p>',
    emergencySigns:
      '<p>肢体无力、走路突然变差、大小便功能变化、呼吸困难、腹部迅速胀大、持续高血压、严重骨痛、发热伴白细胞低、出血不止或精神状态改变，应立即急诊并联系儿童肿瘤团队。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Neuroblastoma Treatment (PDQ) Patient Version',
      type: 'official',
      url: 'https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Neuroblastoma',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001408.htm',
    },
  ],
  symptoms:
    '<p>可出现腹部、颈部或胸部包块，腹胀腹痛、骨痛、跛行、眼眶瘀斑、发热、体重下降、贫血、蓝紫色皮下结节、高血压或脊髓压迫表现。</p>',
  diagnosis:
    '<p>诊断结合影像、尿 VMA/HVA、病理活检、MIBG/PET、骨髓检查和 MYCN、ALK 等分子风险指标完成分期和风险分层。</p>',
  treatment:
    '<p>治疗按风险分层，可从观察或手术到化疗、放疗、自体移植、抗 GD2 免疫治疗、分化治疗、靶向治疗和临床试验不等。</p>',
  prognosis:
    '<p>预后差异很大，取决于年龄、分期、MYCN 等生物学指标、风险组和治疗反应；低危与高危病例的治疗强度和复发风险完全不同。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 407,
    name: 'neuroblastoma-journey.png',
    url: '/images/diseases/neuroblastoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

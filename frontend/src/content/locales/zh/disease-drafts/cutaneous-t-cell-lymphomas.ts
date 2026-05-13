import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCutaneousTCellLymphomas: DiseaseDraft = {
  ...entity(2020, 'disease-cutaneous-t-cell-lymphomas'),
  name: '皮肤T细胞淋巴瘤',
  nameEn: 'Cutaneous T-cell lymphomas',
  alias: 'CTCL、蕈样肉芽肿、Sézary综合征、第二批罕见病目录第 20 项',
  slug: 'cutaneous-t-cell-lymphomas',
  oneSentence:
    '皮肤 T 细胞淋巴瘤是一组主要累及皮肤的非霍奇金淋巴瘤，常见亚型包括蕈样肉芽肿和 Sézary 综合征，可长期表现为反复不愈的瘙痒性斑片、斑块或肿物。',
  plainName: '主要发生在皮肤上的 T 细胞淋巴瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；总体罕见，不同亚型、分期和登记口径会影响统计。',
  quickLook: {
    whatItIs:
      'CTCL 不是普通湿疹或银屑病，而是 T 淋巴细胞发生肿瘤性改变后主要进入皮肤。早期进展可很慢，也正因为像常见皮肤病，诊断常需要多次活检和长期对照。',
    whoToSeeFirst:
      '持续不愈、快速变化或病理提示罕见皮肤肿瘤/淋巴瘤时，应从皮肤科开始，并尽快联动肿瘤、血液、病理和放疗团队。',
    isGenetic:
      '通常不是典型家族遗传病。重点是病理确认、分期、免疫状态和治疗方案，而不是家属遗传筛查。',
    hasTreatment:
      '治疗按亚型和分期分层：早期常用外用药、光疗、局部放疗等皮肤定向治疗；进展期或 Sézary 综合征可能需要全身治疗、免疫/靶向治疗、体外光分离或临床试验。',
    commonDelayReason:
      '早期外观可像常见皮肤病或良性皮肤结节，若没有及时活检、病理复核和分期，容易延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '多年反复或缓慢扩大的红斑、脱屑斑片、斑块，常有瘙痒，常规湿疹/银屑病治疗效果差。',
      '皮疹分布在臀部、大腿、乳房等少晒部位，形状不规则或颜色深浅不一。',
      '出现皮肤肿物、破溃、全身红皮病、淋巴结肿大、发热盗汗或体重下降。',
    ],
    commonWrongTurns: [
      '长期只按湿疹、体癣、银屑病或过敏治疗，没有复查病理。',
      '活检取材太浅或位置不合适，一次阴性后就完全排除 CTCL。',
      '确诊后没有完成血液、淋巴结和影像分期，导致治疗强度判断不清。',
    ],
    firstDepartments: ['皮肤科', '皮肤淋巴瘤门诊', '血液科', '肿瘤科/放疗科'],
    diagnosisChecklist: [
      '记录皮肤变化开始时间、增长速度、瘙痒/疼痛/破溃/出血、既往治疗和疗效。',
      '带清晰照片、皮肤镜或影像资料、既往病理切片、免疫组化和分子/克隆性检测结果。',
      '记录淋巴结肿大、发热、盗汗、体重下降、免疫抑制用药、器官移植或肿瘤史。',
      '准备完整用药清单，特别是免疫抑制剂、抗凝药和既往放化疗/免疫治疗。',
    ],
    testsToAskAbout: [
      '皮肤活检、病理免疫组化和必要的病理会诊。',
      '淋巴结查体、超声、穿刺/活检，以及 CT、PET/CT 或 MRI 分期。',
      '血常规、生化、LDH、病毒筛查和治疗前基线检查。',
      '根据病种讨论前哨淋巴结、TCR 克隆性、外周血流式或骨髓检查是否需要。',
    ],
    questionsForDoctor: [
      '病理诊断是否明确？是否需要专科病理复核？',
      '目前分期是什么？是否累及淋巴结、血液或内脏？',
      '治疗目标是根治、降低复发风险、控制病情，还是缓解症状？',
      '手术、放疗、全身治疗或免疫治疗各自的收益和风险是什么？',
      '复查频率、皮肤自查、淋巴结观察和防晒/感染预防怎么安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>皮肤 T 细胞淋巴瘤是一组主要累及皮肤的非霍奇金淋巴瘤，常见亚型包括蕈样肉芽肿和 Sézary 综合征，可长期表现为反复不愈的瘙痒性斑片、斑块或肿物。</p><p>多年反复或缓慢扩大的红斑、脱屑斑片、斑块，常有瘙痒，常规湿疹/银屑病治疗效果差。皮疹分布在臀部、大腿、乳房等少晒部位，形状不规则或颜色深浅不一。出现皮肤肿物、破溃、全身红皮病、淋巴结肿大、发热盗汗或体重下降。</p>',
    diagnosis:
      '<p>诊断依靠皮肤表现、皮肤活检病理和免疫组化，常需 T 细胞受体克隆性检测；分期还要评估血液、淋巴结、影像和必要时骨髓。</p><p>由于这类疾病可模拟常见皮肤病或其他皮肤肿瘤，病理复核和完整分期常常决定后续治疗路径。</p>',
    treatment:
      '<p>治疗按亚型和分期分层：早期常用外用药、光疗、局部放疗等皮肤定向治疗；进展期或 Sézary 综合征可能需要全身治疗、免疫/靶向治疗、体外光分离或临床试验。</p><p>治疗前应确认分期、患者免疫状态、合并病和个人目标，并提前讨论副作用、复发监测和临床试验机会。</p>',
    longTermCare:
      '<p>长期管理包括皮肤和淋巴结自查、按计划复诊、影像或血液检查、治疗副作用监测、防晒和感染预防。任何新发快速增大的皮肤结节、淋巴结或全身症状都应及时反馈。</p>',
    fertilityOrFamily:
      '<p>这类疾病通常不是典型遗传病，亲属一般不需要遗传筛查。若患者正在接受放疗、化疗、免疫或靶向治疗，有生育计划时应提前咨询肿瘤科和生殖/产科。</p>',
    emergencySigns:
      '<p>出现快速增大的肿块伴破溃出血、发热寒战、治疗后严重感染表现、呼吸困难、意识改变、严重脱水、免疫治疗相关严重腹泻/气短/黄疸，或疑似血栓，应立即急诊并说明诊断和正在使用的治疗。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NCI PDQ：Mycosis Fungoides and Sézary Syndrome Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/lymphoma/patient/mycosis-fungoides-treatment-pdq',
    },
    {
      name: 'American Cancer Society: Signs and Symptoms of Skin Lymphoma',
      type: 'review',
      url: 'https://www.cancer.org/cancer/types/skin-lymphoma/detection-diagnosis-staging/signs-and-symptoms.html',
    },
  ],
  symptoms:
    '<p>多年反复或缓慢扩大的红斑、脱屑斑片、斑块，常有瘙痒，常规湿疹/银屑病治疗效果差。皮疹分布在臀部、大腿、乳房等少晒部位，形状不规则或颜色深浅不一。出现皮肤肿物、破溃、全身红皮病、淋巴结肿大、发热盗汗或体重下降。</p>',
  diagnosis:
    '<p>诊断依靠皮肤表现、皮肤活检病理和免疫组化，常需 T 细胞受体克隆性检测；分期还要评估血液、淋巴结、影像和必要时骨髓。</p>',
  treatment:
    '<p>治疗按亚型和分期分层：早期常用外用药、光疗、局部放疗等皮肤定向治疗；进展期或 Sézary 综合征可能需要全身治疗、免疫/靶向治疗、体外光分离或临床试验。</p>',
  prognosis:
    '<p>多数早期蕈样肉芽肿进展较慢，可长期管理；累及肿瘤期、血液、淋巴结或内脏时风险升高，需要更密切治疗和随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 374,
    name: 'cutaneous-t-cell-lymphomas-journey.png',
    url: '/images/diseases/cutaneous-t-cell-lymphomas-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

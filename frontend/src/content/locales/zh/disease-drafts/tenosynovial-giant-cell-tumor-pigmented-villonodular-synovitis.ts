import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTenosynovialGiantCellTumorPigmentedVillonodularSynovitis: DiseaseDraft =
  {
    ...entity(
      2077,
      'disease-tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    ),
    name: '腱鞘巨细胞瘤/色素沉着绒毛结节性滑膜炎',
    nameEn: 'Tenosynovial giant cell tumor/Pigmented villonodular synovitis',
    alias: 'TGCT；PVNS；第二批罕见病目录第 77 项',
    slug: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    oneSentence:
      '腱鞘巨细胞瘤是一种发生在滑膜、腱鞘或滑囊的罕见局部侵袭性肿瘤，多数为良性但可反复肿胀、疼痛、卡顿并损伤关节功能。',
    plainName: '长在关节周围、会反复影响活动的良性但棘手肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；属于罕见软组织/关节周围肿瘤，局限型较常见，弥漫型更容易复发和影响功能。',
    quickLook: {
      whatItIs:
        'TGCT 不是通常意义上的癌症，通常不远处转移，但可在关节内外缓慢或反复生长。膝、髋、踝、手指等部位都可能受累，弥漫型过去常被称为 PVNS。',
      whoToSeeFirst:
        '长期单个关节肿胀疼痛、活动受限、弹响卡顿、反复积液或 MRI 提示滑膜异常，应到骨科、运动医学、骨与软组织肿瘤专科或关节外科评估。',
      isGenetic:
        '多数不是家族遗传病，常与局部细胞染色体改变和 CSF1 通路异常有关；家属一般不需要遗传筛查。',
      hasTreatment:
        '局限型常以手术切除为主；弥漫型需权衡关节镜或开放手术、放疗和复发风险。不能通过手术改善的成人重症患者可评估 CSF1R 靶向药物等系统治疗。',
      commonDelayReason:
        '症状像运动损伤、滑膜炎、半月板问题、关节炎或腱鞘囊肿，若没有 MRI 和病理确认，可能多年反复治疗仍未明确。',
    },
    patientJourney: {
      whenToSuspect: [
        '单个关节或腱鞘周围持续肿胀、包块、疼痛或活动范围下降，休息和常规消炎后反复。',
        '关节有卡住、弹响、锁定、反复积液或局部发热，但感染和风湿指标解释不了。',
        'MRI 提示滑膜增厚、含铁血黄素沉积或结节样病变，或病理提示 TGCT/PVNS。',
      ],
      commonWrongTurns: [
        '长期按扭伤、滑膜炎或普通关节炎处理，没有进一步做 MRI 或转骨肿瘤/关节专科。',
        '手术前没有确认局限型还是弥漫型，低估复发和功能损伤风险。',
        '复发后反复单纯抽液或止痛，未重新评估影像、病理和系统治疗选择。',
      ],
      firstDepartments: [
        '骨科/关节外科',
        '运动医学科',
        '骨与软组织肿瘤专科',
        '康复医学科（术后功能）',
      ],
      diagnosisChecklist: [
        '记录受累关节、肿胀疼痛、卡顿、积液、运动受限和既往手术或穿刺经过。',
        '带 MRI 原片和报告、X 线/CT、关节液检查、手术记录和病理切片/报告。',
        '说明工作、运动和日常功能受影响的程度，以及是否已有复发。',
      ],
      testsToAskAbout: [
        'MRI 是否能区分局限型和弥漫型，并评估关节内外受累范围。',
        '是否需要穿刺或切除活检病理确认，并排除滑膜肉瘤、痛风、感染或炎症性关节病。',
        '复发或不能完整切除时，是否需要多学科讨论放疗、CSF1R 靶向药物或其他方案。',
      ],
      questionsForDoctor: [
        '我的病变是局限型还是弥漫型？最影响功能的部位在哪里？',
        '手术目标是完整切除、减轻症状还是保护关节？复发概率和康复时间如何？',
        '如果复发或手术风险太高，有哪些药物或临床研究选择，需要监测哪些副作用？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>TGCT 常表现为单个关节或腱鞘周围的肿胀、包块、疼痛、僵硬、活动范围下降、弹响、卡顿、锁定或反复积液。手足局限型可像无痛小包块，膝髋踝等弥漫型更容易造成关节功能受限。</p><p>病变通常不转移，但可侵蚀软骨、骨和周围组织，反复发作会影响行走、握持、工作和运动能力。</p>',
      diagnosis:
        '<p>诊断通常从病史、体格检查和 MRI 开始。MRI 可显示滑膜增厚、结节、含铁血黄素沉积和病变范围，是术前规划的重要依据。</p><p>最终诊断依赖病理。医生会与痛风、类风湿或其他炎症性关节病、感染、腱鞘囊肿、脂肪瘤、滑膜肉瘤等鉴别，必要时进行病理复核。</p>',
      treatment:
        '<p>局限型 TGCT 多以手术切除获得较好控制。弥漫型治疗更复杂，需在完整切除、关节功能、并发症和复发风险之间平衡，可选择关节镜、开放手术或联合方式。</p><p>对于成人有明显症状、严重功能受限且手术难以改善或风险过高的 TGCT，医生可评估 CSF1R 靶向药物如 pexidartinib；该类药物需要严格监测肝功能等安全性。</p>',
      longTermCare:
        '<p>术后或药物治疗后需按风险复查 MRI 和关节功能。弥漫型、切除不完整或多次复发者需要更长期随访，关注疼痛、活动范围、肌力、步态和关节退变。</p><p>康复训练应和手术团队配合，避免因过度保护或过早负荷导致功能恢复受限或症状加重。</p>',
      fertilityOrFamily:
        '<p>TGCT 多数不是遗传病，通常不需要家属筛查。育龄患者如需长期靶向药物、放疗或多次手术，应提前讨论妊娠计划、避孕和药物安全性。</p>',
      emergencySigns:
        '<p>突然无法负重、关节明显红热伴发热、剧烈疼痛、术后伤口红肿渗液、下肢明显肿痛或呼吸胸痛，应及时急诊或联系手术团队。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'National Cancer Institute: Tenosynovial giant cell tumor',
        type: 'official',
        url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tenosynovial-giant-cell-tumor',
      },
      {
        name: 'FDA: Pexidartinib for tenosynovial giant cell tumor',
        type: 'official',
        url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-pexidartinib-tenosynovial-giant-cell-tumor',
      },
    ],
    symptoms:
      '<p>常见单个关节或腱鞘周围肿胀、包块、疼痛、僵硬、活动受限、卡顿、锁定和反复积液，弥漫型更容易复发并损伤关节。</p>',
    diagnosis:
      '<p>诊断依靠体格检查、MRI 判断范围和类型，最终由穿刺或切除病理确认，并排除痛风、感染、炎症性关节病和软组织恶性肿瘤。</p>',
    treatment:
      '<p>局限型多以手术切除为主；弥漫型需个体化选择手术、康复、必要时放疗或 CSF1R 靶向药物，并长期监测复发。</p>',
    prognosis:
      '<p>多数不危及生命，但弥漫型和复发病例可长期影响关节功能；规范影像评估、手术规划和随访可减少功能损失。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 431,
      name: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
      url: '/images/diseases/tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

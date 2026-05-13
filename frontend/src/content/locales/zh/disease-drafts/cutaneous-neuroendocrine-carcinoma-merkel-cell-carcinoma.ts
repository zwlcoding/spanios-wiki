import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCutaneousNeuroendocrineCarcinomaMerkelCellCarcinoma: DiseaseDraft =
  {
    ...entity(
      2019,
      'disease-cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    ),
    name: '皮肤神经内分泌癌（梅克尔细胞癌）',
    nameEn: 'Cutaneous neuroendocrine carcinoma (Merkel cell carcinoma)',
    alias:
      '梅克尔细胞癌、MCC、原发性皮肤神经内分泌癌、第二批罕见病目录第 19 项',
    slug: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    oneSentence:
      '皮肤神经内分泌癌（梅克尔细胞癌）是一种罕见但侵袭性较强的皮肤癌，常表现为日晒部位快速长大的无痛结节，需要活检、分期和多学科治疗。',
    plainName: '一种生长快、需要尽快活检和分期的罕见皮肤癌',
    prevalence:
      '已纳入国家第二批罕见病目录；NCI 将其描述为非常罕见的皮肤癌，长期日晒和免疫功能低下会增加风险。',
    quickLook: {
      whatItIs:
        'MCC 来自皮肤神经内分泌相关细胞，容易局部复发或向淋巴结、远处器官转移。它可能看起来像普通皮肤包块，因此早期活检非常重要。',
      whoToSeeFirst:
        '持续不愈、快速变化或病理提示罕见皮肤肿瘤/淋巴瘤时，应从皮肤科开始，并尽快联动肿瘤、血液、病理和放疗团队。',
      isGenetic:
        '通常不是典型家族遗传病。重点是病理确认、分期、免疫状态和治疗方案，而不是家属遗传筛查。',
      hasTreatment:
        '治疗按分期制定，早期常包括扩大切除和前哨淋巴结评估，术后可考虑放疗；不可切除、复发或转移病灶可能使用免疫检查点抑制剂、放疗或其他全身治疗。',
      commonDelayReason:
        '早期外观可像常见皮肤病或良性皮肤结节，若没有及时活检、病理复核和分期，容易延误。',
    },
    patientJourney: {
      whenToSuspect: [
        '皮肤上出现快速增大的粉红、红色、紫红或肉色结节，通常不痛不痒。',
        '结节位于头面部、颈部、手臂等日晒部位，或患者年龄较大、免疫功能低下。',
        '附近淋巴结肿大，或原发皮肤肿物破溃、出血、短期明显变大。',
      ],
      commonWrongTurns: [
        '把快速长大的无痛结节当作粉瘤、痣、血管瘤或普通皮肤感染反复观察。',
        '只切除皮肤肿物，没有做病理免疫组化、淋巴结和全身分期评估。',
        '确诊后没有转入皮肤肿瘤/肿瘤多学科团队，导致手术、放疗或免疫治疗衔接延迟。',
      ],
      firstDepartments: ['皮肤科', '皮肤肿瘤外科/整形外科', '肿瘤科', '放疗科'],
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
        '<p>皮肤神经内分泌癌（梅克尔细胞癌）是一种罕见但侵袭性较强的皮肤癌，常表现为日晒部位快速长大的无痛结节，需要活检、分期和多学科治疗。</p><p>皮肤上出现快速增大的粉红、红色、紫红或肉色结节，通常不痛不痒。结节位于头面部、颈部、手臂等日晒部位，或患者年龄较大、免疫功能低下。附近淋巴结肿大，或原发皮肤肿物破溃、出血、短期明显变大。</p>',
      diagnosis:
        '<p>诊断依靠皮肤活检和病理免疫组化，随后根据病情进行前哨淋巴结活检、淋巴结超声/穿刺、CT、PET/CT 或 MRI 等分期评估。</p><p>由于这类疾病可模拟常见皮肤病或其他皮肤肿瘤，病理复核和完整分期常常决定后续治疗路径。</p>',
      treatment:
        '<p>治疗按分期制定，早期常包括扩大切除和前哨淋巴结评估，术后可考虑放疗；不可切除、复发或转移病灶可能使用免疫检查点抑制剂、放疗或其他全身治疗。</p><p>治疗前应确认分期、患者免疫状态、合并病和个人目标，并提前讨论副作用、复发监测和临床试验机会。</p>',
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
        name: 'NCI PDQ：Merkel Cell Carcinoma Treatment',
        type: 'official',
        url: 'https://www.cancer.gov/types/skin/patient/merkel-cell-treatment-pdq',
      },
      {
        name: 'American Cancer Society: Signs and Symptoms of Merkel Cell Carcinoma',
        type: 'review',
        url: 'https://www.cancer.org/cancer/types/merkel-cell-skin-cancer/detection-diagnosis-staging/signs-and-symptoms.html',
      },
    ],
    symptoms:
      '<p>皮肤上出现快速增大的粉红、红色、紫红或肉色结节，通常不痛不痒。结节位于头面部、颈部、手臂等日晒部位，或患者年龄较大、免疫功能低下。附近淋巴结肿大，或原发皮肤肿物破溃、出血、短期明显变大。</p>',
    diagnosis:
      '<p>诊断依靠皮肤活检和病理免疫组化，随后根据病情进行前哨淋巴结活检、淋巴结超声/穿刺、CT、PET/CT 或 MRI 等分期评估。</p>',
    treatment:
      '<p>治疗按分期制定，早期常包括扩大切除和前哨淋巴结评估，术后可考虑放疗；不可切除、复发或转移病灶可能使用免疫检查点抑制剂、放疗或其他全身治疗。</p>',
    prognosis:
      '<p>预后与分期、淋巴结受累、免疫状态、治疗完整性和复发情况有关；越早活检和分期，越有利于选择合适治疗。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 373,
      name: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
      url: '/images/diseases/cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

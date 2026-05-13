import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseOsteosarcoma: DiseaseDraft = {
  ...entity(2057, 'disease-osteosarcoma'),
  name: '骨肉瘤',
  nameEn: 'Osteosarcoma',
  alias: '成骨肉瘤；第二批罕见病目录第 57 项',
  slug: 'osteosarcoma',
  oneSentence:
    '骨肉瘤是一种产生异常骨样组织的恶性骨肿瘤，常见于青少年长骨，也可发生在成人，治疗通常需要化疗和手术的综合计划。',
  plainName: '一种常以持续骨痛和肿块起病的恶性骨肿瘤',
  prevalence:
    '已纳入中国第二批罕见病目录；总体少见，青少年发病相对集中，膝关节周围长骨是常见部位。',
  quickLook: {
    whatItIs:
      '骨肉瘤不是普通骨折或生长痛。它通常起源于快速生长或曾受损的骨组织，可侵犯周围软组织，并可能转移到肺。',
    whoToSeeFirst:
      '持续加重的骨痛、夜间痛、局部肿块或活动受限，应尽快到骨肿瘤专科、骨科肿瘤门诊或儿童/青少年肿瘤团队。',
    isGenetic:
      '大多数不是遗传性，但 Li-Fraumeni 综合征、遗传性视网膜母细胞瘤、Rothmund-Thomson 综合征等可增加风险；很年轻、多原发或家族肿瘤史明显时可咨询遗传评估。',
    hasTreatment:
      '标准治疗常包括术前化疗、保肢或截肢手术、术后化疗。是否需要肺转移灶手术、放疗或临床试验，由分期和治疗反应决定。',
    commonDelayReason:
      '早期骨痛容易被当成运动损伤、生长痛、关节炎或骨折后反应；如果反复疼痛并出现肿胀，不能只靠止痛和观察。',
  },
  patientJourney: {
    whenToSuspect: [
      '骨痛持续数周以上、逐渐加重、夜间明显，或休息后不缓解。',
      '膝、肩、上臂、大腿等部位出现肿块、肿胀、发热感、活动受限或跛行。',
      '轻微外伤后骨折，影像提示异常骨破坏、骨膜反应或软组织肿块。',
      '既往接受过放疗，或有遗传性视网膜母细胞瘤、TP53 相关家族史等风险。',
    ],
    commonWrongTurns: [
      '把青少年夜间骨痛长期当成生长痛或运动拉伤，没有复查 X 线或 MRI。',
      '先做局部按摩、热敷或非规范穿刺，导致病灶评估和手术路径受影响。',
      '在非骨肿瘤中心先切除或活检，活检通道设计不当影响保肢手术。',
    ],
    firstDepartments: [
      '骨肿瘤专科',
      '儿童肿瘤科或青少年肿瘤门诊',
      '骨科',
      '肿瘤多学科门诊',
    ],
    diagnosisChecklist: [
      '记录疼痛开始时间、夜间痛、止痛药反应、运动受限、肿块变化和外伤史。',
      '带 X 线、MRI、CT、骨扫描或 PET-CT 影像原片和报告。',
      '如已活检，带病理切片、免疫组化和活检路径说明。',
      '整理既往放疗史、家族早发肿瘤史和个人既往肿瘤史。',
    ],
    testsToAskAbout: [
      '病灶部位 X 线和 MRI，评估骨内和软组织范围。',
      '胸部 CT，评估是否有肺转移；必要时骨扫描或 PET-CT 评估全身病灶。',
      '在骨肿瘤团队规划下做核心针或开放活检，避免污染未来手术区域。',
      '化疗前后评估肿瘤坏死率、器官功能、听力、心脏和生育力保护。',
    ],
    questionsForDoctor: [
      '我的分期和转移情况是什么？治疗目标是治愈还是控制？',
      '活检和手术是否由骨肿瘤团队设计？保肢和截肢各自风险是什么？',
      '化疗方案、周期和主要副作用有哪些？如何监测心脏、听力、肾功能和感染风险？',
      '治疗结束后多久复查胸部 CT 和原发部位影像？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>骨肉瘤常以局部骨痛起病，疼痛可逐渐加重、夜间明显，并不一定与运动量成比例。随着肿瘤增大，可出现局部肿胀、包块、皮温升高、关节活动受限、跛行或病理性骨折。</p><p>常见部位包括股骨远端、胫骨近端、肱骨近端等长骨干骺端。少数患者因肺转移出现咳嗽、胸痛或气短，但很多肺转移是在分期胸部 CT 中发现。</p>',
    diagnosis:
      '<p>诊断需要影像、规范活检和分期。X 线可提示侵袭性骨破坏和骨膜反应，MRI 用于评估骨内范围、软组织侵犯、关节和神经血管关系，胸部 CT 用于筛查肺转移。</p><p>活检应由负责后续手术的骨肿瘤团队规划，因为活检通道需要在正式手术时一起切除。病理确认后，医生会结合原发部位、大小、转移情况、化疗反应和肿瘤坏死率制定方案。</p>',
    treatment:
      '<p>可切除四肢骨肉瘤的常见路径是术前新辅助化疗、局部手术和术后化疗。局部手术可为保肢重建或截肢，选择取决于肿瘤范围、神经血管受累、感染风险、功能预期和患者情况。</p><p>肺转移可在合适情况下手术切除。放疗通常不是骨肉瘤主要治疗，但在无法完全切除、特殊部位或姑息控制时可能考虑。复发或难治病例可评估临床试验、靶向或免疫相关研究方案。</p>',
    longTermCare:
      '<p>随访重点包括复发和转移监测、假体或重建功能、康复、疼痛、感染、心肾功能、听力、生长发育和心理支持。治疗后早期通常需要较密集的原发部位和胸部影像复查。</p><p>青少年患者还需要学校回归、运动限制、肢体功能训练、假体寿命和再次手术计划。保留治疗摘要有助于长期生存者管理。</p>',
    fertilityOrFamily:
      '<p>大多数骨肉瘤不是遗传病。若有双侧/多原发肿瘤、极年轻发病、视网膜母细胞瘤史、肉瘤或乳腺癌等家族聚集，应询问 TP53、RB1 等遗传易感评估。化疗前应尽早讨论生育力保护。</p>',
    emergencySigns:
      '<p>突发剧烈骨痛、不能负重、疑似骨折、发热伴白细胞低、化疗后出血不止、胸痛气短或手术部位红肿流脓，应立即就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Osteosarcoma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/bone/patient/osteosarcoma-treatment-pdq',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Osteosarcoma',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001650.htm',
    },
  ],
  symptoms:
    '<p>常见表现为持续加重的局部骨痛、夜间痛、肿胀包块、关节活动受限、跛行、病理性骨折，晚期可有肺转移相关症状。</p>',
  diagnosis:
    '<p>诊断依靠 X 线、MRI、胸部 CT、必要的全身分期检查和由骨肿瘤团队规划的活检病理。</p>',
  treatment:
    '<p>治疗通常包括术前化疗、保肢或截肢手术、术后化疗；转移或复发病例可评估肺转移灶切除、放疗、临床试验或其他系统治疗。</p>',
  prognosis:
    '<p>预后取决于是否转移、肿瘤部位、能否完整切除、化疗反应和复发情况；规范活检和骨肿瘤团队治疗非常关键。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 411,
    name: 'osteosarcoma-journey.png',
    url: '/images/diseases/osteosarcoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseEpithelioidSarcoma: DiseaseDraft = {
  ...entity(2024, 'disease-epithelioid-sarcoma'),
  name: '上皮样肉瘤',
  nameEn: 'Epithelioid sarcoma',
  alias:
    'ES、远端型上皮样肉瘤、近端型上皮样肉瘤、INI1/SMARCB1缺失相关软组织肉瘤、第二批罕见病目录第 24 项',
  slug: 'epithelioid-sarcoma',
  oneSentence:
    '上皮样肉瘤是一种罕见侵袭性软组织肉瘤，常见于青少年和年轻成人的手、前臂、足、膝或小腿，可表现为不痛的皮下结节或久不愈合的溃疡。',
  plainName: '常从手脚或肢体皮下小硬结开始的罕见软组织肉瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；属于罕见软组织肉瘤，常见于青少年到中青年，精确发生率因登记口径不同而变化。',
  quickLook: {
    whatItIs:
      '上皮样肉瘤可慢慢长大，但具有局部复发、淋巴结转移和远处转移风险。它常被误认为感染、肉芽肿、囊肿或普通伤口，因此病理诊断非常关键。',
    whoToSeeFirst:
      '手、足、前臂、小腿等部位出现不痛但持续增大的结节、硬块或久不愈合溃疡，应尽快看骨与软组织肿瘤/肉瘤专科。',
    isGenetic:
      '通常不是家族遗传病。很多病例有 INI1/SMARCB1 表达缺失等肿瘤层面的改变，主要用于病理和治疗判断。',
    hasTreatment:
      '局限病灶以肉瘤中心的完整手术切除为核心，常需放疗评估；转移或不可切除病灶可评估化疗、靶向治疗如 tazemetostat、临床试验或姑息治疗。',
    commonDelayReason:
      '它常像慢性伤口、疣、感染、类风湿结节或肉芽肿，早期不痛且生长慢；如果反复换药或切开引流而不做活检，会延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '手指、手掌、前臂、足、膝或小腿出现小而硬的皮下结节，持续变大。',
      '皮肤出现久不愈合的溃疡或反复破溃，常规抗感染和换药效果差。',
      '肿块不痛或轻痛，但影像提示深部软组织受累，或附近淋巴结肿大。',
      '病理提示上皮样/肉瘤样肿瘤、INI1 缺失或诊断不确定。',
    ],
    commonWrongTurns: [
      '按感染、囊肿、疣、异物肉芽肿或风湿结节长期处理。',
      '切开引流或小范围切除后没有规范病理和切缘评估。',
      '确诊后没有做胸部和淋巴结分期，也没有转肉瘤中心。',
      '只关注原发灶，忽略复发、淋巴结和肺转移风险。',
    ],
    firstDepartments: [
      '骨与软组织肿瘤科/肉瘤中心',
      '骨科肿瘤',
      '肿瘤科',
      '病理科',
    ],
    diagnosisChecklist: [
      '记录肿块或溃疡出现时间、增长速度、疼痛、破溃、感染治疗和手术史。',
      '带 MRI/CT/超声、胸部影像、淋巴结检查和所有影像原片。',
      '带活检或手术病理、免疫组化、INI1/SMARCB1、切缘和分子检测结果。',
      '记录工作/功能影响、既往放疗化疗、用药和家族肿瘤史。',
    ],
    testsToAskAbout: [
      '规范穿刺或切取活检，最好由肉瘤团队规划活检路径。',
      '原发部位 MRI，胸部 CT，淋巴结超声/穿刺或 PET/CT 分期。',
      '病理免疫组化，包括 INI1/SMARCB1 表达等鉴别诊断线索。',
      '不可切除或转移病例是否适合 tazemetostat、化疗、放疗或临床试验。',
    ],
    questionsForDoctor: [
      '病理是否已经由肉瘤病理专家确认？是否有 INI1 缺失？',
      '目前是局限、淋巴结受累还是远处转移？',
      '手术能否保留功能并取得干净切缘？是否需要术前或术后放疗？',
      '如果复发或转移，靶向治疗、化疗或临床试验有哪些选择？',
      '复查需要关注哪些部位，频率多久？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>上皮样肉瘤常见于青少年和年轻成人，远端型多发生在手、前臂、足、膝或小腿，表现为缓慢增大的小硬结、皮下肿块或久不愈合溃疡，早期可不痛。</p><p>部分患者可出现多个结节、皮肤破溃、疼痛或附近淋巴结肿大。近端型可发生在躯干、会阴或深部软组织，侵袭性更强。</p>',
    diagnosis:
      '<p>诊断依靠影像和病理。MRI 有助于评估局部范围；胸部 CT 和淋巴结评估用于分期。活检应尽量在肉瘤团队规划下进行，以免影响后续手术路径。</p><p>病理需要免疫组化和鉴别诊断，常需评估 INI1/SMARCB1 表达缺失。它可与感染性肉芽肿、类风湿结节、鳞癌、黑色素瘤和其他软组织肉瘤混淆。</p>',
    treatment:
      '<p>局限病灶以完整手术切除并尽量获得阴性切缘为核心，同时尽量保留肢体功能。根据肿瘤大小、部位、切缘和复发风险，可联合放疗。</p><p>转移、复发或不可切除病例可由肉瘤团队评估化疗、靶向治疗、放疗和临床试验。NCI 药物资料显示 tazemetostat 可用于不能手术切除的局部晚期或转移性上皮样肉瘤的特定患者。</p>',
    longTermCare:
      '<p>长期随访包括原发部位检查、局部 MRI 或超声、胸部影像和淋巴结评估。患者应记录新肿块、溃疡、疼痛、咳嗽、体重下降或淋巴结变化。</p>',
    fertilityOrFamily:
      '<p>上皮样肉瘤通常不是家族遗传病。年轻患者在化疗、放疗或靶向治疗前，如有生育计划，应提前咨询生殖保护。</p>',
    emergencySigns:
      '<p>肿瘤破溃大量出血、感染发热、肢体明显肿痛、呼吸困难、胸痛、治疗后严重感染或药物反应，应立即急诊并说明肉瘤诊断和正在接受的治疗。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Mayo Clinic: Epithelioid sarcoma diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diagnosis/dxc-20350146',
    },
    {
      name: 'NCI: Tazemetostat Hydrobromide',
      type: 'official',
      url: 'https://www.cancer.gov/about-cancer/treatment/drugs/tazemetostathydrobromide',
    },
  ],
  symptoms:
    '<p>常表现为手、足、前臂、小腿等部位缓慢增大的不痛皮下结节、硬块或久不愈合溃疡，也可有淋巴结肿大。</p>',
  diagnosis:
    '<p>诊断依靠肉瘤团队规划的活检、病理免疫组化、原发部位 MRI、胸部和淋巴结分期，必要时评估 INI1/SMARCB1。</p>',
  treatment:
    '<p>局限病灶以完整手术切除为核心，按风险联合放疗；复发、转移或不可切除病例可评估化疗、tazemetostat、放疗或临床试验。</p>',
  prognosis:
    '<p>预后取决于部位、大小、切缘、是否复发和转移；早期转肉瘤中心、规范分期和长期随访很重要。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 378,
    name: 'epithelioid-sarcoma-journey.png',
    url: '/images/diseases/epithelioid-sarcoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseThromboticThrombocytopenicPurpura: DiseaseDraft = {
  ...entity(2079, 'disease-thrombotic-thrombocytopenic-purpura'),
  name: '血栓性血小板减少性紫癜',
  nameEn: 'Thrombotic thrombocytopenic purpura',
  alias: 'TTP；第二批罕见病目录第 79 项',
  slug: 'thrombotic-thrombocytopenic-purpura',
  oneSentence:
    '血栓性血小板减少性紫癜是一种罕见但危急的血栓性微血管病，ADAMTS13 严重不足会让微小血栓堵塞器官血流，同时造成血小板减少和溶血性贫血。',
  plainName: '血小板在小血管里异常结块、需要立刻处理的血液急症',
  prevalence:
    '已纳入中国第二批罕见病目录；TTP 属罕见病，可分为获得性免疫介导型和先天性 ADAMTS13 缺乏型，发病突然且可危及生命。',
  quickLook: {
    whatItIs:
      'ADAMTS13 像“剪刀”一样帮助控制血小板相关蛋白。它严重缺乏时，微小血栓会在全身小血管形成，损伤脑、心、肾等器官，血小板也被大量消耗。',
    whoToSeeFirst:
      '血小板突然很低、贫血伴溶血、皮肤紫癜、头痛意识改变、肾功能异常或胸痛时，应按急症到急诊/血液科处理。',
    isGenetic:
      '多数成人是获得性自身免疫型，不会按普通遗传病传给孩子；少数先天性 TTP 与 ADAMTS13 基因双等位变异有关，需要遗传咨询和家系评估。',
    hasTreatment:
      '高度怀疑 TTP 时通常不能等全部结果才治疗。获得性 TTP 常需紧急血浆置换、糖皮质激素、利妥昔单抗或 caplacizumab；先天性 TTP 需补充 ADAMTS13 功能。',
    commonDelayReason:
      '早期可能被误认为免疫性血小板减少、感染、贫血、肾病或神经系统问题。若没有识别“血小板低+溶血+器官症状”，会错过救治窗口。',
  },
  patientJourney: {
    whenToSuspect: [
      '血小板突然下降，同时有贫血、黄疸、尿色深、LDH 升高或外周血涂片提示裂红细胞。',
      '出现皮肤瘀点紫癜、鼻牙龈出血、头痛、意识混乱、说话不清、抽搐、胸痛、气短或肾功能异常。',
      '既往有 TTP 复发史，妊娠、感染、手术或免疫疾病后出现类似表现。',
    ],
    commonWrongTurns: [
      '只按免疫性血小板减少输注血小板或等待观察，没有立即联系血液科评估 TTP。',
      '等待 ADAMTS13 活性结果返回后才开始血浆置换，延误危重期治疗。',
      '缓解后没有监测 ADAMTS13 活性和复发症状，错过复发前干预。',
    ],
    firstDepartments: [
      '急诊科',
      '血液科',
      '重症医学科',
      '肾内科/神经内科/心内科（按受累器官）',
    ],
    diagnosisChecklist: [
      '带近期血常规、血小板变化、网织红细胞、胆红素、LDH、肌酐、尿检和凝血结果。',
      '准备外周血涂片、Coombs 试验、ADAMTS13 活性/抑制物、感染和自身免疫筛查资料。',
      '记录神经、肾脏、心脏症状出现时间，以及妊娠、感染、药物、手术和既往复发史。',
    ],
    testsToAskAbout: [
      '目前是否符合高度疑似 TTP，是否应立即启动血浆置换而不是等待所有检查。',
      '是否已送检 ADAMTS13 活性、抑制物或抗体，缓解后如何复查。',
      '是否需要 caplacizumab、利妥昔单抗、激素或先天性 TTP 的 ADAMTS13 替代/血浆输注方案。',
    ],
    questionsForDoctor: [
      '我的 TTP 是获得性还是先天性？这会怎样影响复发预防和家属检测？',
      '什么时候可以停止血浆置换？血小板、LDH 和 ADAMTS13 的目标是什么？',
      '出院后哪些症状要马上回来？多久复查 ADAMTS13 活性和血常规？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>TTP 常急性起病，表现为血小板减少导致的瘀点、紫癜、鼻牙龈出血，以及微血管溶血导致的乏力、苍白、黄疸、尿色深和 LDH 升高。微血栓可影响脑、肾、心和胃肠道。</p><p>患者可能出现头痛、意识混乱、说话困难、抽搐、胸痛、气短、腹痛、恶心、肾功能异常或发热。典型“五联征”并不一定同时出现，不能等到表现齐全才处理。</p>',
    diagnosis:
      '<p>诊断依据血小板减少、微血管病性溶血性贫血、外周血裂红细胞、LDH 升高、间接胆红素升高和器官受累。ADAMTS13 活性显著降低支持诊断，并可检测抑制物或抗体。</p><p>医生会与溶血尿毒综合征、弥散性血管内凝血、HELLP 综合征、恶性高血压、药物相关血栓性微血管病、系统性自身免疫病和严重感染鉴别。高度怀疑时治疗通常先于最终结果。</p>',
    treatment:
      '<p>获得性 TTP 是血液急症，核心治疗是紧急治疗性血浆置换，同时给予糖皮质激素；许多患者还会使用利妥昔单抗或 caplacizumab 以减少微血栓形成和复发风险。</p><p>先天性 TTP 需要补充缺失的 ADAMTS13 功能，可通过血浆输注或重组 ADAMTS13 等方式，具体取决于可及性。血小板输注通常只在危及生命的出血或必要操作时由专科决定。</p>',
    longTermCare:
      '<p>缓解后仍需监测血常规、LDH、肾功能、神经和心脏后遗症，以及 ADAMTS13 活性。获得性 TTP 可复发，ADAMTS13 再次下降时医生可能提前干预。</p><p>患者应保存 TTP 诊断和治疗记录，妊娠、手术、感染或新药使用前告知血液科，并了解复发早期信号。</p>',
    fertilityOrFamily:
      '<p>获得性 TTP 多为免疫介导，不按遗传病筛查家属。先天性 TTP 属遗传病，患者和亲属可咨询 ADAMTS13 基因检测、携带者评估和妊娠管理。</p>',
    emergencySigns:
      '<p>血小板突然下降伴紫癜出血、头痛意识改变、抽搐、说话不清、胸痛气短、黄疸尿色深、少尿或妊娠期类似症状，应立即急诊并提示既往或疑似 TTP。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NHLBI: Thrombotic thrombocytopenic purpura',
      type: 'official',
      url: 'https://www.nhlbi.nih.gov/health/thrombotic-thrombocytopenic-purpura',
    },
  ],
  symptoms:
    '<p>可有血小板低、瘀点紫癜、出血、微血管溶血性贫血、黄疸尿色深、头痛意识改变、抽搐、胸痛、肾功能异常和发热。</p>',
  diagnosis:
    '<p>诊断结合血小板减少、裂红细胞和溶血指标、器官受累及 ADAMTS13 活性/抑制物检测；高度疑似时不应等待所有结果才治疗。</p>',
  treatment:
    '<p>获得性 TTP 需紧急血浆置换、糖皮质激素，并按病情使用 caplacizumab、利妥昔单抗等；先天性 TTP 需补充 ADAMTS13 功能。</p>',
  prognosis:
    '<p>及时治疗可显著降低死亡风险，但复发、神经心肾后遗症和妊娠相关风险需要长期血液科随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 433,
    name: 'thrombotic-thrombocytopenic-purpura-journey.png',
    url: '/images/diseases/thrombotic-thrombocytopenic-purpura-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

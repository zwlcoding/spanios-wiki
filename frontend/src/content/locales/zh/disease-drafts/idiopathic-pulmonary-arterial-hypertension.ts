import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicPulmonaryArterialHypertension: DiseaseDraft = {
  ...entity(5001, 'disease-idiopathic-pulmonary-arterial-hypertension'),
  name: '特发性肺动脉高压',
  nameEn: 'Idiopathic Pulmonary Arterial Hypertension',
  alias: 'IPAH、原发性肺动脉高压、第一批罕见病目录第 54 项',
  slug: 'idiopathic-pulmonary-arterial-hypertension',
  oneSentence:
    '特发性肺动脉高压是一种原因不明的肺血管疾病，肺动脉压力进行性升高导致右心衰竭，早期表现为活动后气短，需心内科或呼吸科专科评估。',
  plainName: '肺部血管压力异常升高、心脏负担加重的罕见病',
  prevalence:
    '年发病率约 0.9–10.7 例/百万人，患病率约 6–26 例/百万人；女性多见，男女比约 1:1.7–2.3。',
  searchIntents: [
    '特发性肺动脉高压 看什么科',
    '肺动脉高压 早期症状',
    'IPAH 治疗方案',
    '肺动脉高压 能活多久',
    '肺动脉高压 怀孕风险',
  ],
  quickLook: {
    whatItIs:
      '肺动脉压力异常升高的罕见血管病，肺血管阻力增加使右心室必须更用力泵血，长期可导致右心衰竭。',
    whoToSeeFirst:
      '出现不明原因活动后气短、乏力、胸痛或晕厥时，应到心血管内科或呼吸与危重症医学科就诊。',
    isGenetic:
      '部分患者与 BMPR2 等基因突变相关（遗传性肺动脉高压），但 IPAH 定义为散发、无家族史的类型。',
    hasTreatment:
      '有靶向药物治疗（内皮素受体拮抗剂、PDE5 抑制剂、前列环素类似物等），可延缓疾病进展；终末期可考虑肺移植。',
    commonDelayReason:
      '早期症状（气短、乏力）不特异，常被归因于体力差、贫血或焦虑；确诊常需数月至数年。',
  },
  patientJourney: {
    whenToSuspect: [
      '活动后气短逐渐加重，休息后可缓解。',
      '不明原因乏力、胸痛、心悸或晕厥。',
      '下肢水肿、腹胀（腹水）或颈静脉怒张等右心衰竭表现。',
      '有结缔组织病、HIV、肝硬化或先天性心脏病病史者出现上述症状。',
    ],
    commonWrongTurns: [
      '把气短归因于"缺乏锻炼"或"焦虑症"，未做心脏和肺部检查。',
      '在地方医院反复检查找不到原因，未及时转诊至肺血管病专科中心。',
      '自行服用减肥药或不明成分保健品（部分可诱发肺动脉高压）。',
    ],
    firstDepartments: [
      '心血管内科（肺血管病专病门诊）',
      '呼吸与危重症医学科',
      '右心导管检查室',
      '风湿免疫科（排查结缔组织病相关 PAH）',
    ],
    diagnosisChecklist: [
      '详细记录症状出现时间、加重因素和既往用药史。',
      '心电图、胸片、超声心动图筛查肺动脉高压迹象。',
      '肺功能检查、V/Q 扫描排除慢性血栓栓塞。',
      '右心导管检查（确诊金标准）：mPAP >20 mmHg，PCWP ≤15 mmHg，PVR >2 Wood units。',
      '急性肺血管扩张试验评估钙通道阻滞剂敏感性。',
    ],
    testsToAskAbout: [
      '超声心动图（估测肺动脉收缩压）。',
      '右心导管检查（确诊和评估血流动力学）。',
      'V/Q 扫描（排除慢性血栓栓塞性肺高压）。',
      '自身抗体谱、HIV、肝功能（排查继发因素）。',
      'BMPR2 等基因检测（如有家族史或年轻患者）。',
    ],
    questionsForDoctor: [
      '我的肺动脉高压属于哪一危险分层？',
      '是否需要终身服药？有哪些靶向药物可选？',
      '急性血管扩张试验结果如何？是否适合钙通道阻滞剂？',
      '日常活动和运动需要注意什么？',
      '怀孕对我的风险有多大？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>早期常无症状或仅有轻度活动后气短。随着肺血管阻力增加，可出现进行性呼吸困难、乏力、胸痛、心悸和晕厥。体征包括肺动脉瓣区第二心音亢进、三尖瓣反流杂音、右心室抬举感、颈静脉怒张、肝大、腹水和下肢水肿。晚期出现右心衰竭。部分患者可有雷诺现象或杵状指。</p>',
    diagnosis:
      '<p>诊断需满足血流动力学标准：右心导管显示平均肺动脉压（mPAP）>20 mmHg、肺毛细血管楔压（PCWP）≤15 mmHg、肺血管阻力（PVR）>2 Wood units，并排除所有继发因素。辅助检查包括超声心动图（筛查和估测肺动脉压）、肺功能检查、V/Q 扫描（排除慢性血栓栓塞）、高分辨率 CT、睡眠监测、自身抗体和感染筛查。急性肺血管扩张试验阳性者（mPAP 下降 ≥10 mmHg 且降至 ≤40 mmHg，心输出量不变或增加）可考虑高剂量钙通道阻滞剂治疗。</p>',
    treatment:
      '<p>治疗目标是降低肺血管阻力、改善心功能和延缓疾病进展。一般措施包括氧疗、利尿剂、抗凝（有争议）和康复训练。靶向药物包括：内皮素受体拮抗剂（波生坦、安立生坦、马西替坦）、PDE5 抑制剂（西地那非、他达拉非）、可溶性鸟苷酸环化酶刺激剂（利奥西呱）、前列环素受体激动剂（司来帕格）和前列环素类似物（依前列醇静脉输注、伊洛前列素吸入、曲前列尼尔皮下/静脉/吸入）。高危患者应尽早启动肠外前列环素治疗。终末期患者可考虑房间隔造口术或肺移植。</p>',
    longTermCare:
      '<p>需终身随访，每 3–6 个月评估症状、6 分钟步行距离、超声心动图和血流动力学指标。根据危险分层调整治疗方案。避免妊娠（高风险）、高海拔旅行和某些药物（如减肥药）。接种流感、肺炎球菌疫苗。心理支持对改善生活质量很重要。</p>',
    fertilityOrFamily:
      '<p>妊娠对 IPAH 患者极高风险，死亡率显著增加，应严格避孕。有 BMPR2 突变家族史者，亲属应接受遗传咨询和基因检测。确诊患者的生育计划应在肺血管病专科和产科共同管理下进行。</p>',
    emergencySigns:
      '<p>突发严重呼吸困难、晕厥、咯血、胸痛伴血压下降、意识改变或严重右心衰竭症状（腹水迅速增加、尿少、下肢水肿加重）应立即急诊。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Idiopathic Pulmonary Arterial Hypertension',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
    },
    {
      name: '2022 ESC/ERS Guidelines for Pulmonary Hypertension',
      type: 'clinical-guideline',
      url: 'https://eurheartj.oxfordjournals.org/content/early/2022/08/25/eurheartj.ehac237',
    },
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/yjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
  ],
  symptoms:
    '<p>早期活动后气短，进展为静息呼吸困难、乏力、胸痛、晕厥；晚期右心衰竭（颈静脉怒张、肝大、腹水、下肢水肿）。</p>',
  diagnosis:
    '<p>右心导管是金标准（mPAP >20 mmHg，PCWP ≤15 mmHg，PVR >2 WU）；超声心动图筛查；V/Q 扫描排除血栓栓塞。</p>',
  treatment:
    '<p>靶向药物（内皮素受体拮抗剂、PDE5 抑制剂、前列环素类似物等）；高危患者用肠外前列环素；终末期考虑肺移植。</p>',
  prognosis:
    '<p>未经治疗预后差；现代靶向药物可显著改善生存和生活质量；早期诊断和规范治疗是关键。</p>',
  sourceName: 'NCBI StatPearls: Idiopathic Pulmonary Arterial Hypertension',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5001,
    name: 'idiopathic-pulmonary-arterial-hypertension-journey.png',
    url: '/images/diseases/idiopathic-pulmonary-arterial-hypertension-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

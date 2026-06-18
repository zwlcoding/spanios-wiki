import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeuromyelitisOptica: DiseaseDraft = {
  ...entity(5027, 'disease-neuromyelitis-optica'),
  name: '视神经脊髓炎',
  nameEn: 'Neuromyelitis Optica',
  alias: 'NMO、视神经脊髓炎谱系疾病、Devic病',
  icd10Code: 'G36.0',
  slug: 'neuromyelitis-optica',
  oneSentence:
    '视神经脊髓炎谱系疾病（NMOSD）是一种自身免疫性中枢神经系统炎性脱髓鞘疾病，以抗水通道蛋白4抗体（AQP4-IgG）为标志，主要累及视神经和脊髓，表现为反复发作的视神经炎和长节段横贯性脊髓炎。',
  plainName: '免疫系统攻击视神经和脊髓导致反复失明和截瘫的罕见病',
  prevalence:
    '全球患病率约 0.5-4/100,000；亚洲和非洲人群相对多见，女性明显多于男性（约 4-9:1）。中国发病率逐年上升，随着AQP4抗体检测普及，误诊率逐步下降。',
  searchIntents: [
    '视神经脊髓炎 症状',
    'NMO 视神经炎',
    'AQP4抗体 阳性',
    '视神经脊髓炎 治疗药物',
    'NMOSD 与多发性硬化区别',
  ],
  quickLook: {
    whatItIs:
      '这是一种自身免疫性中枢神经系统疾病，患者体内产生抗水通道蛋白4（AQP4）抗体，攻击视神经和脊髓，导致反复发作的视力丧失和肢体瘫痪。与多发性硬化不同，NMOSD极少累及脑，且需要不同的治疗策略。',
    whoToSeeFirst:
      '神经内科（神经免疫专科）。出现急性视力下降、肢体无力、大小便障碍时应立即就诊。',
    isGenetic:
      '不是传统遗传病，但有一定遗传易感性（如HLA-DRB1*03:01等）。环境因素（如感染）可能触发发病。',
    hasTreatment:
      '急性期用大剂量激素冲击或血浆置换；缓解期需长期免疫抑制治疗（如利妥昔单抗、萨特利珠单抗、依库珠单抗等），可显著减少复发、保护神经功能。',
    commonDelayReason:
      '首次视神经炎被当作普通眼科疾病；脊髓炎被当作颈椎病或脑血管病；误诊为多发性硬化而使用干扰素β（可能加重NMOSD）；基层医院缺乏AQP4抗体检测条件。',
  },
  patientJourney: {
    whenToSuspect: [
      '急性单眼或双眼视力下降、眼痛，数小时至数天内迅速加重。',
      '急性肢体无力、感觉异常（麻木、束带感），常累及双下肢，伴排尿排便障碍。',
      '严重且持续呃逆、恶心呕吐（极后区综合征，提示延髓受累）。',
      '症状反复发作，每次发作后部分恢复但遗留累积性残疾。',
      '血液AQP4-IgG阳性或血清MOG-IgG阳性。',
    ],
    commonWrongTurns: [
      '视神经炎仅按眼科疾病处理，未做AQP4抗体和脊髓MRI。',
      '脊髓炎被误诊为颈椎病、椎间盘脱出或急性脊髓炎（非特异性）。',
      '误诊为多发性硬化，使用干扰素β或芬戈莫德（可能加重NMOSD）。',
      '急性期激素减量过快导致早期复发。',
      '缓解期未坚持免疫抑制治疗，导致频繁复发和残疾累积。',
    ],
    firstDepartments: [
      '神经内科（神经免疫专科）',
      '眼科（视神经炎首发时）',
      '康复医学科（恢复期）',
      '泌尿外科（排尿障碍严重时）',
    ],
    diagnosisChecklist: [
      '详细记录每次发作的时间、症状、部位和恢复情况。',
      '携带所有头颅、视神经和脊髓MRI片子及报告。',
      '携带AQP4-IgG和MOG-IgG检测结果。',
      '列出既往所有用药史，尤其免疫调节药物。',
      '询问医生是否符合2015年NMOSD国际共识诊断标准。',
    ],
    testsToAskAbout: [
      '血清AQP4-IgG抗体检测（核心诊断指标）。',
      '血清MOG-IgG抗体检测（排除MOG抗体相关疾病）。',
      '头颅MRI（排除MS典型脑室周围病灶）。',
      '视神经MRI（急性期视神经增粗、强化）。',
      '脊髓MRI（长节段横贯性脊髓炎，≥3个椎体节段）。',
      '脑脊液检查（细胞数升高、寡克隆带阳性率低于MS）。',
      '视觉诱发电位（VEP）。',
    ],
    questionsForDoctor: [
      '我的AQP4抗体是阳性还是MOG抗体阳性？这对治疗方案有什么影响？',
      '急性期应该选择激素冲击还是血浆置换？',
      '缓解期有哪些预防复发的药物？各自的利弊和费用如何？',
      'NMOSD会影响生育吗？怀孕和哺乳期如何调整用药？',
      '日常生活中有哪些感染预防建议？可以接种哪些疫苗？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NMOSD的核心临床综合征包括：视神经炎（急性单眼或双眼视力下降、视野缺损、色觉减退、眼球转动痛）；长节段横贯性脊髓炎（急性肢体无力、感觉障碍、排尿排便障碍，脊髓病灶≥3个椎体节段）；极后区综合征（顽固性呃逆、恶心呕吐）；脑干综合征（眩晕、复视、共济失调）；间脑综合征（嗜睡、低钠血症）。</p><p>女性多见，发病年龄多在30-40岁。每次发作可造成严重神经功能缺损，反复发作导致累积性残疾。部分患者可合并其他自身免疫病（如系统性红斑狼疮、干燥综合征、甲状腺疾病）。</p>',
    diagnosis:
      '<p>2015年国际共识诊断标准以AQP4-IgG为核心。AQP4-IgG阳性者，满足1项核心临床特征即可诊断；AQP4-IgG阴性者，需满足多项核心临床特征并排除其他诊断。</p><p>MRI特征：视神经MRI可见T2高信号和强化；脊髓MRI显示长节段病灶（≥3个椎体节段），急性期可有脊髓肿胀和强化。需与多发性硬化（MS病灶短、多发、脑室周围典型）、MOG抗体相关疾病、急性播散性脑脊髓炎、脊髓血管病等鉴别。血清MOG-IgG检测有助于排除MOG相关疾病。</p>',
    treatment:
      '<p>急性期：大剂量甲泼尼龙静脉冲击（通常500-1000mg/天，3-5天），无效或重症者行血浆置换或免疫吸附。极后区综合征可能需要积极血浆置换。</p><p>缓解期预防复发是管理关键。一线药物包括：利妥昔单抗（抗CD20单抗，最常用）、萨特利珠单抗（抗IL-6受体）、依库珠单抗（补体C5抑制剂，用于AQP4阳性难治性病例）、托珠单抗、吗替麦考酚酯、硫唑嘌呤等。药物选择需考虑疗效、可及性、费用和患者偏好。禁用干扰素β和芬戈莫德（可能加重NMOSD）。</p>',
    longTermCare:
      '<p>长期随访包括：定期评估神经功能（EDSS评分）、视力和视野检查、脊髓功能评估；监测免疫抑制剂的副作用（感染、肝功能、血常规）；预防感染（感染是常见复发诱因）；维持正常维生素D水平。</p><p>生活管理：避免过度劳累和高温环境；戒烟；规律作息；适度运动（在功能允许范围内）；预防感染（及时接种疫苗，但活疫苗在免疫抑制期间应避免）。携带疾病诊断卡，就医时主动告知医生NMOSD诊断和用药情况。</p>',
    fertilityOrFamily:
      '<p>NMOSD不是单基因遗传病，但有一定遗传易感性。疾病本身不影响生育能力。妊娠期间复发风险可能增加（尤其产后），部分药物在孕期相对安全（如硫唑嘌呤、泼尼松），而利妥昔单抗和依库珠单抗需谨慎评估。计划怀孕前应咨询神经科医生调整用药。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：急性单眼或双眼视力急剧下降、新发肢体无力或瘫痪、急性尿潴留、严重呃逆伴呕吐、呼吸困难或吞咽困难。这些是NMOSD急性发作的典型表现，需尽快启动激素冲击或血浆置换以减少永久性神经损伤。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Neuromyelitis Optica Spectrum Disorder',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK572108/',
    },
    {
      name: 'GeneReviews: Neuromyelitis Optica Spectrum Disorder',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1226/',
    },
    {
      name: 'Orphanet: Neuromyelitis optica spectrum disorder',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/635',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>反复发作的视神经炎（视力下降、眼痛）和长节段横贯性脊髓炎（肢体无力、感觉障碍、排尿排便障碍），可伴顽固性呃逆、恶心呕吐。</p>',
  diagnosis:
    '<p>血清AQP4-IgG阳性为核心指标，结合视神经和脊髓MRI典型表现，依据2015年国际共识标准诊断。需排除MS和MOG抗体相关疾病。</p>',
  treatment:
    '<p>急性期大剂量激素冲击或血浆置换；缓解期长期免疫抑制治疗（利妥昔单抗、萨特利珠单抗、依库珠单抗等）。禁用干扰素β。</p>',
  prognosis:
    '<p>未经治疗的NMOSD复发率高，每次发作可造成严重残疾。规范免疫抑制治疗可显著减少复发、保护神经功能。</p>',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK572108/',
  categorySlug: 'neurological',
  charityIds: [14, 15, 16, 17, 18, 59],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3527,
    name: 'neuromyelitis-optica-journey.png',
    url: '/images/diseases/neuromyelitis-optica-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'treatable'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMyotonicDystrophy: DiseaseDraft = {
  ...entity(5024, 'disease-myotonic-dystrophy'),
  name: '肌强直性营养不良',
  nameEn: 'Myotonic Dystrophy',
  alias: 'DM、强直性肌营养不良、Steinert病',
  icd10Code: 'G71.1',
  slug: 'myotonic-dystrophy',
  oneSentence:
    '肌强直性营养不良是一组常染色体显性遗传的多系统疾病，以肌强直、进行性肌无力和特征性前额秃发、白内障、心律失常、内分泌异常等多系统受累为特征，分为1型（DMPK基因CTG重复扩增）和2型（CNBP基因CCTG重复扩增）。',
  plainName: '肌肉僵直没力气，还影响心脏、眼睛和内分泌的遗传病',
  prevalence:
    'DM1 是全球最常见的成人肌营养不良，患病率约 5-20/100,000；DM2 患病率约 1-5/100,000。DM1 有先天性形式，可在出生时即表现严重症状。',
  searchIntents: [
    '肌强直性营养不良 症状',
    '肌强直 手打不开 怎么办',
    '肌强直性营养不良 心脏',
    'DM1 DM2 区别',
    '肌强直性营养不良 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是一组常染色体显性遗传病，以肌强直（肌肉收缩后不易放松）和进行性肌无力为核心，同时累及心脏（传导阻滞、心律失常）、眼睛（白内障）、内分泌（糖尿病、甲状腺功能异常）、胃肠道和中枢神经系统。',
    whoToSeeFirst:
      '神经内科（神经肌肉专科）；因多系统受累，还需定期心内科、眼科和内分泌科随访。出现心悸、晕厥或呼吸困难时应立即就诊。',
    isGenetic:
      "常染色体显性遗传。DM1 由 DMPK 基因 3'UTR 区 CTG 三核苷酸重复扩增导致；DM2 由 CNBP 基因内含子区 CCTG 四核苷酸重复扩增导致。重复次数越多，发病越早、病情越重。有遗传早现现象（anticipation）。",
    hasTreatment:
      '目前无法治愈，但肌强直症状可用药物缓解（如美西律），心脏问题可安装起搏器，白内障可手术。多学科综合管理可显著改善生活质量。',
    commonDelayReason:
      '肌强直被当作普通肌肉僵硬或关节炎；白内障被当作老年性白内障；心脏症状被当作普通心律失常；多系统症状分散在不同专科，缺乏综合评估。',
  },
  patientJourney: {
    whenToSuspect: [
      '握手后难以松开、眼睑闭合后不易睁开、打喷嚏或咳嗽后肌肉不易放松（肌强直）。',
      '面部和肢体远端肌无力（眼睑下垂、面部表情少、握力下降、足下垂）。',
      '早年出现白内障（30-50岁）、前额秃发（男性）、嗜睡或日间过度困倦。',
      '心悸、晕厥或心电图显示传导阻滞、房颤。',
      '家族中有多代成员出现肌无力、白内障或心脏问题（注意遗传早现现象）。',
    ],
    commonWrongTurns: [
      '肌强直被误认为关节炎、肌腱炎或习惯性动作。',
      '面部肌无力和表情淡漠被误认为抑郁症或性格问题。',
      '白内障被单纯当作老年性白内障手术，未进一步排查系统性病因。',
      '心脏传导阻滞未与肌病关联，延误安装起搏器的时机。',
      '未对家族成员进行筛查，导致隐性病例漏诊。',
    ],
    firstDepartments: [
      '神经内科（神经肌肉专科）',
      '心内科（心律失常评估）',
      '眼科（白内障评估）',
      '内分泌科（糖代谢和甲状腺功能）',
      '遗传咨询科',
    ],
    diagnosisChecklist: [
      '详细记录肌强直的表现（哪些动作诱发、持续时间）。',
      '整理既往心电图、超声心动图、眼科检查报告。',
      '绘制家族三代谱系图，注意是否有类似症状或早亡成员。',
      '询问医生是否需要进行 DMPK 或 CNBP 基因重复检测。',
    ],
    testsToAskAbout: [
      '肌电图（EMG，特征性肌强直放电）。',
      'DMPK 基因 CTG 重复扩增检测（DM1）。',
      'CNBP 基因 CCTG 重复扩增检测（DM2）。',
      '心电图和24小时动态心电图（评估传导阻滞和心律失常）。',
      '超声心动图（评估心肌功能和瓣膜情况）。',
      '眼科检查（裂隙灯检查白内障）。',
      '空腹血糖、糖化血红蛋白、甲状腺功能。',
      '肺功能测试（评估呼吸肌力量）。',
    ],
    questionsForDoctor: [
      '我是 DM1 还是 DM2？两者的预后有什么区别？',
      '我的心脏传导问题需要安装起搏器吗？什么时候是最佳时机？',
      '肌强直症状有什么药物可以缓解？',
      '家族成员（包括无症状者）是否需要进行基因检测？',
      '怀孕时疾病会加重吗？胎儿是否会受影响？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>DM1 和 DM2 均以肌强直和肌无力为主要特征，但受累肌群和严重程度有所不同。DM1 典型表现为面部、胸锁乳突肌和远端肌群无力（"斧头脸"、眼睑下垂、颈屈肌无力、足下垂），伴肌强直。DM2 以近端肌无力为主（髋部和肩部），肌强直可能较轻。</p><p>多系统受累包括：心脏（传导阻滞、房颤、扩张型心肌病）、眼睛（后囊下白内障）、内分泌（胰岛素抵抗、糖尿病、甲状腺功能减退、性腺功能减退）、胃肠道（吞咽困难、便秘、假性肠梗阻）、呼吸系统（呼吸肌无力、肺换气不足、睡眠呼吸暂停）、中枢神经系统（日间过度困倦、认知下降、抑郁）。先天性 DM1 可在出生时即表现严重肌张力低下、呼吸衰竭和喂养困难。</p>',
    diagnosis:
      '<p>临床诊断基于肌强直、特征性肌无力模式和多系统受累的证据。确诊依赖基因检测：DM1 为 DMPK 基因 CTG 重复扩增（正常5-34次，前突变35-49次，致病≥50次）；DM2 为 CNBP 基因 CCTG 重复扩增。</p><p>肌电图显示特征性肌强直放电（"俯冲轰炸机"样声音）。需与先天性肌强直（氯离子通道病）、其他肌营养不良、线粒体肌病鉴别。基因重复次数与发病年龄和严重程度相关，有遗传早现现象。</p>',
    treatment:
      '<p>肌强直：美西律（Mexiletine）是一线治疗药物，可显著改善肌强直症状。其他可选药物包括苯妥英钠、卡马西平。</p><p>心脏：定期监测心电图和动态心电图，出现严重传导阻滞时应及时植入起搏器或ICD。白内障可行手术摘除。内分泌异常对症处理。呼吸肌无力者需评估无创通气指征。</p><p>康复：物理治疗和作业治疗有助于维持肌力和功能。避免他汀类药物（可能加重肌病）。麻醉风险增加，术前应告知麻醉科医生病情。</p>',
    longTermCare:
      '<p>长期随访需要多学科团队：神经科（肌力和肌强直评估）、心内科（每年心电图/动态心电图，必要时超声心动图）、眼科（定期裂隙灯检查）、内分泌科（血糖和甲状腺功能）、呼吸科（肺功能监测）、消化科（吞咽和胃肠功能）。</p><p>日间过度困倦是常见问题，可影响工作和驾驶安全。建议定期评估认知功能和心理状态。家族筛查非常重要，建议所有一级亲属进行基因检测，即使无症状。</p>',
    fertilityOrFamily:
      '<p>DM1 和 DM2 均为常染色体显性遗传，子女有50%的遗传风险。DM1 有显著的遗传早现现象，母系遗传时 CTG 重复次数可能大幅增加，导致先天性 DM1。因此，女性 DM1 患者在怀孕前应进行遗传咨询和产前诊断（绒毛膜取样或羊水穿刺检测胎儿 CTG 重复次数）。</p><p>胚胎植入前遗传学检测（PGT）可降低传递风险。男性患者也可能有遗传早现，但程度通常较轻。DM2 的遗传早现现象不明显。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：晕厥或近似晕厥（提示严重心律失常）、急性呼吸困难或呼吸衰竭、严重吞咽困难导致窒息或脱水、突发腹痛伴腹胀（警惕假性肠梗阻）。心脏事件是 DM1 的主要死因，应高度重视心悸和晕厥症状。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Myotonic Dystrophy Type 1',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1166/',
    },
    {
      name: 'GeneReviews: Myotonic Dystrophy Type 2',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1466/',
    },
    {
      name: 'NORD: Myotonic Dystrophy',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/myotonic-dystrophy/',
    },
  ],
  symptoms:
    '<p>肌强直、进行性肌无力（DM1以远端为主，DM2以近端为主）、白内障、心律失常、前额秃发、日间嗜睡、内分泌异常和呼吸肌无力等。</p>',
  diagnosis:
    '<p>基因检测确诊：DM1为DMPK基因CTG重复扩增，DM2为CNBP基因CCTG重复扩增。肌电图显示特征性肌强直放电。</p>',
  treatment:
    '<p>美西律缓解肌强直；心脏传导阻滞需安装起搏器；白内障手术；多学科综合管理改善生活质量。</p>',
  prognosis:
    '<p>DM1进展较DM2更快，心脏并发症和呼吸衰竭是主要死因。早期心脏干预可延长生存期。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1166/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3524,
    name: 'myotonic-dystrophy-journey.png',
    url: '/images/diseases/myotonic-dystrophy-journey.png',
  },
  tagSlugs: ['neurological', 'genetic-counseling', 'cardiac'],
};

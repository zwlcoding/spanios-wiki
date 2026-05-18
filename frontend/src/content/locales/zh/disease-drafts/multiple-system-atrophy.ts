import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleSystemAtrophy: DiseaseDraft = {
  ...entity(5023, 'disease-multiple-system-atrophy'),
  name: '多系统萎缩',
  nameEn: 'Multiple System Atrophy',
  alias: 'MSA、Shy-Drager综合征',
  icd10Code: 'G90.3',
  slug: 'multiple-system-atrophy',
  oneSentence:
    '多系统萎缩是一种罕见的、散发性的进行性神经退行性疾病，以自主神经功能障碍、帕金森样症状和小脑共济失调的组合为特征，病理上以少突胶质细胞胞质内α-突触核蛋白包涵体为标志。',
  plainName: '同时影响自主神经、运动协调和肌肉僵硬的快速进展性神经退化病',
  prevalence:
    '患病率约 2-5/100,000；发病年龄多在 50-60 岁，男性略多于女性。进展较快，确诊后中位生存期约 6-10 年。',
  searchIntents: [
    '多系统萎缩 早期症状',
    'MSA 诊断标准',
    '多系统萎缩 与帕金森区别',
    '多系统萎缩 治疗',
    '多系统萎缩 预后 寿命',
  ],
  quickLook: {
    whatItIs:
      '这是一种散发的、快速进展的神经退行性疾病，主要累及自主神经系统（血压、排尿、排便、出汗）、锥体外系（运动迟缓、肌强直）和小脑系统（共济失调）。目前无根治方法。',
    whoToSeeFirst:
      '神经内科，尤其是运动障碍专科。若出现体位性低血压、排尿障碍、运动迟缓或小脑症状的组合，应尽早就诊。',
    isGenetic:
      '绝大多数为散发性，非传统遗传病。少数研究提示 COQ2 基因变异可能与东亚人群发病风险相关，SNCA 等基因多态性也可能有微弱影响。总体遗传风险较低。',
    hasTreatment:
      '目前无治愈或延缓疾病进展的方法。治疗以对症支持为主，包括体位性低血压管理、排尿障碍处理、帕金森样症状药物和运动康复。',
    commonDelayReason:
      '早期症状（体位性头晕、尿频、运动迟缓）分别被当作低血压、前列腺增生或帕金森病；自主神经症状和运动症状分散在不同专科就诊，未能综合判断；确诊常需数年。',
  },
  patientJourney: {
    whenToSuspect: [
      '站立时反复出现头晕、眼前发黑甚至晕厥（体位性低血压），而卧位血压正常或偏高。',
      '早期出现排尿障碍（尿频、尿急、尿失禁或尿潴留），尤其男性在排除前列腺增生后仍不缓解。',
      '运动迟缓、肌强直、震颤，但对左旋多巴治疗反应差或反应短暂。',
      '行走不稳、共济失调、言语含糊、吞咽困难。',
      '快速眼动睡眠行为障碍（RBD）可能是前驱症状之一。',
    ],
    commonWrongTurns: [
      '体位性低血压被当作普通低血压或贫血，未做卧立位血压监测。',
      '排尿障碍被单纯当作前列腺增生或泌尿系感染治疗。',
      '帕金森样症状被当作帕金森病，但左旋多巴疗效差且伴自主神经症状时未考虑MSA。',
      '共济失调被当作小脑卒中或颈椎病。',
      '未在有经验的运动障碍中心进行全面评估，延误确诊。',
    ],
    firstDepartments: [
      '神经内科（运动障碍专科）',
      '心血管内科（体位性低血压评估）',
      '泌尿外科（排尿障碍评估）',
      '康复医学科',
    ],
    diagnosisChecklist: [
      '记录体位性症状（站立多久出现头晕、是否晕厥）、排尿排便情况、睡眠情况（有无RBD）。',
      '携带既往血压记录（如有卧立位血压更佳）。',
      '携带所有MRI片子和报告。',
      '列出既往用药史（尤其左旋多巴的疗效和副作用）。',
      '询问医生是否符合2022年MDS诊断标准。',
    ],
    testsToAskAbout: [
      '卧立位血压和心率监测（体位性低血压是核心特征）。',
      '头颅MRI（脑桥"十字征"、小脑中脚高信号、壳核裂隙征等）。',
      '123I-MIBG心肌显像（心脏交感神经去支配，与帕金森病鉴别）。',
      '多导睡眠监测（评估RBD）。',
      '尿动力学检查（评估神经源性膀胱）。',
      '肛门括约肌EMG（评估自主神经病变）。',
    ],
    questionsForDoctor: [
      '我的症状更符合MSA-P型还是MSA-C型？',
      '目前有哪些对症治疗方法可以缓解体位性低血压和排尿障碍？',
      '左旋多巴是否值得尝试？预期效果如何？',
      '疾病大概会怎么进展？需要提前做好哪些准备？',
      '是否适合参加临床试验？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MSA 分为两种主要亚型：MSA-P（帕金森型）以运动迟缓、肌强直、姿势不稳为主，震颤较轻；MSA-C（小脑型）以共济失调、构音障碍、吞咽困难为主。两型均伴有显著的自主神经功能障碍。</p><p>自主神经症状包括：体位性低血压（站立时收缩压下降≥20mmHg或舒张压下降≥10mmHg）、神经源性膀胱（尿频、尿急、尿失禁或尿潴留）、便秘、出汗异常、勃起功能障碍。快速眼动睡眠行为障碍（RBD）和喘鸣（stridor）也是常见且重要的症状，喘鸣提示预后不良。</p>',
    diagnosis:
      '<p>2022年国际帕金森及运动障碍协会（MDS）更新了MSA诊断标准，分为神经病理确诊、临床确诊、临床很可能和可能的前驱期标准。核心特征是自主神经功能障碍与帕金森综合征或小脑综合征的组合。</p><p>MRI特征性表现包括脑桥"十字征"（hot cross bun sign）、小脑中脚高信号、壳核裂隙征和壳核低信号。123I-MIBG心肌显像显示心脏交感神经去支配，可与帕金森病鉴别（帕金森病早期MIBG摄取通常正常）。肛门括约肌EMG可显示神经源性改变。</p>',
    treatment:
      '<p>目前无疾病修饰治疗。对症处理包括：体位性低血压（弹力袜、高盐饮食、床头抬高、米多君或氟氢可的松）；神经源性膀胱（间歇导尿、抗胆碱药或β3受体激动剂）；帕金森样症状（左旋多巴可试用，但多数患者疗效有限且易出现异动症）；RBD（氯硝西泮或褪黑素）；喘鸣（CPAP或气管切开）。</p><p>康复训练（步态训练、吞咽训练、言语治疗）对维持功能非常重要。营养支持和心理支持也不可忽视。</p>',
    longTermCare:
      '<p>MSA进展较快，多数患者在数年内需要助行器或轮椅，后期可能出现严重吞咽困难和反复吸入性肺炎。长期护理重点包括：防跌倒、营养支持、预防吸入性肺炎、压疮预防、心理支持。</p><p>建议尽早与家属沟通疾病预后，做好长期护理计划，必要时考虑姑息治疗和临终关怀。参加患者支持组织和临床试验有助于获得最新信息和资源。</p>',
    fertilityOrFamily:
      '<p>MSA为散发性疾病，遗传风险极低。患者及其家属无需常规进行遗传咨询，但若家族中有类似病例，可咨询神经遗传专科。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：严重体位性低血压导致晕厥或跌倒 injury、急性尿潴留、喘鸣或呼吸困难、反复吸入性肺炎、严重吞咽困难导致脱水或营养不良。喘鸣是MSA的危急症状，可能需要紧急气管切开或无创通气。</p>',
  },
  sources: [
    {
      name: 'NINDS: Multiple System Atrophy',
      type: 'review',
      url: 'https://www.ninds.nih.gov/health-information/disorders/multiple-system-atrophy',
    },
    {
      name: 'NORD: Multiple System Atrophy',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/multiple-system-atrophy/',
    },
    {
      name: 'Orphanet: Multiple system atrophy',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/102',
    },
  ],
  symptoms:
    '<p>自主神经功能障碍（体位性低血压、排尿障碍、便秘）、帕金森样症状（运动迟缓、肌强直）或小脑共济失调。RBD和喘鸣也是常见表现。</p>',
  diagnosis:
    '<p>依据2022年MDS诊断标准，结合卧立位血压监测、头颅MRI特征、123I-MIBG心肌显像和肛门括约肌EMG综合判断。</p>',
  treatment:
    '<p>无根治方法，以对症支持为主：体位性低血压药物、间歇导尿、康复训练和营养支持。',
  prognosis:
    '<p>进展较快，确诊后中位生存期约6-10年。主要死因包括吸入性肺炎、呼吸困难（喘鸣）和猝死。</p>',
  sourceName: 'NINDS',
  sourceUrl:
    'https://www.ninds.nih.gov/health-information/disorders/multiple-system-atrophy',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3523,
    name: 'multiple-system-atrophy-journey.png',
    url: '/images/diseases/multiple-system-atrophy-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'palliative-care'],
};

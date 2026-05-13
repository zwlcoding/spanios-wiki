import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCardicIonChannelopathies: DiseaseDraft = {
  ...entity(17, 'disease-cardic-ion-channelopathies'),
  name: '心脏离子通道病',
  nameEn: 'Cardiac Ion Channelopathies',
  alias: '遗传性心律失常综合征、原发性心电疾病',
  slug: 'cardic-ion-channelopathies',
  oneSentence:
    '心脏离子通道病是一组影响心肌电活动的遗传性或获得性心律失常疾病，可能在心脏结构看似正常时造成晕厥、心律失常或猝死风险。',
  plainName: '心脏电信号通道异常相关的罕见心律失常',
  prevalence:
    '不同亚型差异很大。长 QT 综合征、Brugada 综合征、儿茶酚胺敏感性多形性室速等各有不同人群分布和诊断标准。',
  quickLook: {
    whatItIs:
      '心肌细胞依靠钠、钾、钙等离子通道产生和传导电信号。相关通道或调控蛋白异常时，心脏结构检查可能基本正常，但电活动更容易失控，形成危险心律失常。',
    whoToSeeFirst:
      '有不明原因晕厥、心悸、运动/情绪诱发晕厥、夜间猝死家族史或异常心电图时，建议到心血管内科的心律失常/电生理专科评估；心脏骤停、持续胸闷或意识丧失应急诊。',
    isGenetic:
      '许多亚型有遗传背景，常见模式包括常染色体显性和隐性遗传，也存在外显率不完全、同一家族表现差异大的情况。基因结果需要结合心电图和病史解释。',
    hasTreatment:
      '有风险分层和管理方案，包括避免触发因素、药物、植入设备、运动限制和家族筛查等。具体方案应由心律失常专科根据亚型和风险制定。',
    commonDelayReason:
      '晕厥或抽搐容易被当作神经系统问题；静息心电图有时正常；年轻人首次严重表现可能就是心脏骤停或猝死，因此家族史和诱发场景非常关键。',
  },
  patientJourney: {
    whenToSuspect: [
      '运动、游泳、情绪激动、惊吓、发热或睡眠中出现晕厥、抽搐样发作或心悸。',
      '心脏结构检查基本正常，但有反复不明原因晕厥或室性心律失常。',
      '家族中有年轻猝死、夜间猝死、溺水样意外、反复晕厥或已植入除颤器者。',
      '心电图提示 QT 间期异常、Brugada 样改变、短 QT 或运动诱发室性心律失常。',
      '既往被诊断癫痫但发作与运动、惊吓或情绪刺激高度相关，且脑电图或抗癫痫治疗解释不足。',
    ],
    commonWrongTurns: [
      '只按癫痫或普通晕厥处理，没有做心电图、动态心电图或运动诱发评估。',
      '静息心电图一次正常后就完全排除遗传性心律失常。',
      '没有追问三代家族中猝死、晕厥、溺水、交通事故或夜间死亡史。',
      '拿到基因检测结果后脱离临床表现解读，误把意义未明变异当成确诊或完全排除。',
      '未向医生确认哪些药物、发热或运动场景可能增加风险。',
    ],
    firstDepartments: [
      '心血管内科（心律失常/电生理专科）',
      '急诊科（意识丧失、心脏骤停、持续胸闷或严重心悸时）',
      '儿科心脏专科（儿童或青少年起病时）',
      '遗传咨询门诊（涉及家族筛查和生育计划时）',
    ],
    diagnosisChecklist: [
      '整理每次晕厥或心悸的时间、诱因、持续时间、是否抽搐、恢复过程和现场目击信息。',
      '收集家族中年轻猝死、晕厥、心律失常、溺水或不明原因事故史。',
      '带上 12 导联心电图、动态心电图、运动试验、心脏超声和既往急诊记录。',
      '向医生确认是否需要心律失常基因 panel，以及结果如何与临床风险结合。',
      '检查当前用药是否包括可能影响 QT 间期或诱发心律失常的药物。',
    ],
    testsToAskAbout: [
      '12 导联心电图，必要时重复检查或调整右胸导联位置。',
      '动态心电图或更长程心律监测。',
      '运动负荷试验或医生认为合适的诱发评估。',
      '心脏超声和必要时心脏 MRI，用于排除结构性心脏病。',
      '电解质、甲状腺功能、用药和其他获得性心律失常诱因评估。',
      '遗传性心律失常相关基因检测及家族级联筛查。',
    ],
    questionsForDoctor: [
      '我的晕厥更像心源性、神经反射性，还是癫痫？还需要哪些检查区分？',
      '目前怀疑的是哪一种心脏离子通道病？依据是心电图、诱发场景还是家族史？',
      '我需要避免哪些药物、发热状态、运动强度或突然刺激？',
      '家属是否需要做心电图、运动试验或基因检测？从谁开始最合适？',
      '什么情况需要急诊？是否需要学习心肺复苏或准备自动体外除颤器相关计划？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>心脏离子通道病包括长 QT 综合征、Brugada 综合征、儿茶酚胺敏感性多形性室性心动过速、短 QT 综合征等。症状可表现为心悸、头晕、晕厥、抽搐样发作、心脏骤停或猝死，也可能长期无症状。不同亚型有不同诱发场景，例如运动、情绪刺激、惊吓、睡眠或发热。</p>',
    diagnosis:
      '<p>诊断需要结合发作场景、家族史、心电图特征、动态心电图、运动试验、心脏结构评估和遗传检测。一次静息心电图正常不能完全排除某些亚型；基因检测发现意义未明变异也不能单独确诊。医生通常会同时排查药物、电解质异常、心肌病和其他结构性心脏病。</p>',
    treatment:
      '<p>治疗和预防策略因亚型和风险而异，可能包括避免触发因素、控制发热、调整药物、限制特定运动、长期心律随访、药物治疗、植入式除颤设备或其他专科干预。具体选择需由心律失常/电生理专科综合判断，患者不要自行停药或按网络资料调整治疗。</p>',
    longTermCare:
      '<p>长期管理重点是风险分层、复查心电图和心律监测、更新禁用药物清单、管理运动和发热场景，并让家属了解急救流程。已确诊或高度疑似者的一级亲属通常需要临床筛查，若家族致病变异明确，可进一步做级联遗传检测。</p>',
    fertilityOrFamily:
      '<p>许多心脏离子通道病有遗传背景，但外显率和严重程度可能差异很大。已知家族致病变异者，有生育计划时可通过遗传咨询了解伴侣检测、产前诊断或胚胎植入前遗传学检测等选择。未明确致病变异时，家族筛查仍可能依赖心电图和临床评估。</p>',
    emergencySigns:
      '<p>突发意识丧失、心脏骤停、运动或情绪诱发晕厥、反复严重心悸伴胸闷气促、发热时出现 Brugada 相关风险线索，或家族中发生年轻猝死后，应尽快急诊或心律失常专科评估。现场人员应立即呼叫急救并按当地急救培训流程处理。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Long QT Syndrome Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
    },
    {
      name: 'GeneReviews: Brugada Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1517/',
    },
    {
      name: 'GeneReviews: Catecholaminergic Polymorphic Ventricular Tachycardia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1289/',
    },
    {
      name: 'Heart: Cardiac channelopathies diagnosis and contemporary management',
      type: 'review',
      url: 'https://heart.bmj.com/content/107/13/1092',
    },
  ],
  symptoms:
    '<p>可表现为心悸、晕厥、抽搐样发作、心脏骤停或猝死风险，常与运动、情绪、睡眠、惊吓或发热等场景相关。</p>',
  diagnosis:
    '<p>评估通常包括心电图、动态心电图、运动试验、心脏结构检查、诱因排查和遗传性心律失常基因检测。</p>',
  treatment:
    '<p>管理需要心律失常专科进行风险分层，可能涉及避免触发因素、药物、植入设备、运动建议和家族筛查。</p>',
  prognosis:
    '<p>早期识别高风险个体、规范随访和家族筛查有助于降低严重心律事件风险，但不同亚型和个体差异很大。</p>',
  sourceName: 'GeneReviews: Long QT Syndrome Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 316,
    name: 'cardic-ion-channelopathies-journey.png',
    url: '/images/diseases/cardic-ion-channelopathies-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

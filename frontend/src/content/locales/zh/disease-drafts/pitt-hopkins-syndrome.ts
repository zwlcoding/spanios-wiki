import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePittHopkinsSyndrome: DiseaseDraft = {
  ...entity(6105, 'disease-pitt-hopkins-syndrome'),
  name: 'Pitt-Hopkins综合征',
  nameEn: 'Pitt-Hopkins syndrome',
  alias: '皮特霍普金斯综合征、PTHS、PHS、TCF4相关神经发育综合征',
  oneSentence:
    'Pitt-Hopkins综合征是一种多由TCF4基因变异导致的神经发育疾病，常表现为中重度发育迟缓和智力障碍、语言严重受限、癫痫、清醒时过度换气/呼吸暂停样发作、便秘和特征性面容。',
  plainName: '影响发育、语言、呼吸节律和癫痫风险的TCF4相关遗传病',
  prevalence: 'MedlinePlus Genetics 描述其非常罕见，全球约报告500名患者。',
  quickLook: {
    whatItIs:
      'TCF4基因影响神经系统发育和基因调控。PTHS孩子常有明显语言受限、发育迟缓、癫痫和清醒时呼吸节律异常。',
    whoToSeeFirst:
      '发育迟缓、几乎不会说话、癫痫、便秘和过度换气/呼吸暂停样发作，应到儿童神经科、发育行为儿科、医学遗传科和康复科。',
    isGenetic:
      '多为常染色体显性，通常由新发TCF4致病变异导致。父母多无症状，但仍需遗传咨询解释复发风险。',
    hasTreatment:
      '目前没有根治方法，重点是癫痫和呼吸安全管理、便秘和胃肠问题处理、康复、辅助沟通、行为睡眠支持和家庭照护。',
    commonDelayReason:
      '早期常被笼统诊断为脑瘫、孤独症、癫痫性脑病或全面发育迟缓；如果没有做神经发育基因检测，PTHS会被漏掉。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿期明显运动和语言发育迟缓，语言非常有限或不会说话。',
      '清醒时反复过度换气、屏气或呼吸暂停样发作，情绪激动或疲劳时更明显。',
      '儿童期癫痫、便秘、喂养/胃肠问题、睡眠和焦虑行为问题。',
      '面容有宽嘴、厚唇、鼻梁高、眼窝较深、牙间距宽等特征。',
    ],
    commonWrongTurns: [
      '只按孤独症或脑瘫康复，没有把呼吸节律异常作为关键线索。',
      '便秘和喂养问题被长期低估，影响睡眠、行为和生活质量。',
      '癫痫控制与发育、沟通和行为支持割裂管理。',
    ],
    firstDepartments: [
      '儿童神经科',
      '发育行为儿科',
      '医学遗传科',
      '康复医学科',
    ],
    diagnosisChecklist: [
      '整理发育里程碑、语言能力、呼吸发作视频、癫痫视频和脑电图。',
      '带胃肠/便秘、睡眠、喂养、行为和康复评估记录。',
      '记录家族史、既往基因检测、脑MRI和用药反应。',
    ],
    testsToAskAbout: [
      'TCF4基因测序和缺失/重复分析，或神经发育基因panel/外显子检测。',
      '脑电图和癫痫分型评估。',
      '呼吸发作、睡眠、胃肠便秘、眼科和骨科问题评估。',
    ],
    questionsForDoctor: [
      '基因结果是否能解释孩子表现？父母需要验证吗？',
      '呼吸发作什么情况下需要急诊？是否需要监测血氧？',
      '如何建立辅助沟通、康复和学校支持计划？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Pitt-Hopkins综合征常表现为中重度智力障碍和发育迟缓，语言发育尤其受影响，很多孩子没有功能性语言或只会少量词语。常见伴随问题包括癫痫、便秘、胃肠问题、睡眠问题、焦虑、孤独症谱系特征和特征性面容。</p><p>呼吸异常是重要线索，表现为清醒时过度换气后呼吸变慢或暂停，可导致嘴唇发紫或短暂意识改变，情绪激动、焦虑或疲劳时更容易出现。</p>',
    diagnosis:
      '<p>诊断依靠临床表现和TCF4基因检测，包括测序和缺失/重复分析。医生会与Angelman综合征、Rett综合征、Mowat-Wilson综合征、孤独症谱系障碍和其他发育性癫痫性脑病鉴别。</p>',
    treatment:
      '<p>治疗以支持为主，包括癫痫规范用药、便秘和胃食管反流处理、康复训练、言语和辅助沟通、行为和睡眠支持。呼吸发作通常需要识别诱因并制定安全计划，严重时由神经科和呼吸/睡眠团队评估。</p>',
    longTermCare:
      '<p>长期照护要围绕沟通、运动功能、癫痫、呼吸安全、便秘、营养、睡眠、行为和家庭压力持续调整。辅助沟通工具和学校适配对提升参与度很重要。</p>',
    fertilityOrFamily:
      '<p>多数为新发常染色体显性变异，复发风险通常低但不是零。遗传咨询可解释父母验证、嵌合风险和产前/胚胎植入前检测选择。</p>',
    emergencySigns:
      '<p>持续癫痫、发作后不清醒、呼吸暂停伴发绀或意识改变、严重便秘腹胀呕吐、脱水、误吸或严重行为安全风险，应及时就医。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Pitt-Hopkins syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/pitt-hopkins-syndrome/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>常见中重度发育迟缓和智力障碍、语言严重受限、癫痫、清醒时过度换气/呼吸暂停样发作、便秘、睡眠和行为问题。</p>',
  diagnosis:
    '<p>结合临床特征和TCF4基因测序、缺失/重复分析或神经发育基因检测诊断。</p>',
  treatment:
    '<p>以癫痫、呼吸安全、便秘胃肠问题、康复、辅助沟通、睡眠和行为支持为主。</p>',
  prognosis:
    '<p>多数患者需要长期支持；早期辅助沟通、康复和癫痫/胃肠/呼吸管理可改善生活质量。</p>',
  sourceName: 'MedlinePlus Genetics: Pitt-Hopkins syndrome',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/pitt-hopkins-syndrome/',
  slug: 'pitt-hopkins-syndrome',
  categorySlug: 'neurological',
  charityIds: [88],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

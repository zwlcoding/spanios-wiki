import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseWestSyndromeInfantileSpasmsSyndrome: DiseaseDraft = {
  ...entity(2086, 'disease-west-syndrome-infantile-spasms-syndrome'),
  name: 'West综合征/婴儿痉挛综合征',
  nameEn: 'West syndrome/Infantile spasms syndrome',
  alias: '婴儿癫痫痉挛综合征；IESS；第二批罕见病目录第 86 项',
  slug: 'west-syndrome-infantile-spasms-syndrome',
  oneSentence:
    'West 综合征/婴儿痉挛综合征是一种婴儿期严重癫痫综合征，常表现为成串点头、抱团或伸展样短促痉挛，脑电图异常，并可伴发育停滞或倒退。',
  plainName: '婴儿突然成串点头或抱团、需要尽快治疗的癫痫综合征',
  prevalence:
    '已纳入中国第二批罕见病目录；多在出生后第一年出现，是儿童神经科需要尽早识别和治疗的癫痫急症。',
  quickLook: {
    whatItIs:
      '痉挛发作常很短，容易被误认为惊跳、肠绞痛或“打哆嗦”。典型表现是睡醒前后成串点头、弯腰抱团、双臂前伸或身体突然伸展，每串可反复多次。',
    whoToSeeFirst:
      '家长看到婴儿成串点头、抱团、突然伸展，或发育突然停滞/倒退，应尽快到儿科神经专科或癫痫中心；频繁发作、意识异常或呼吸问题应急诊。',
    isGenetic:
      '病因很多，包括脑发育异常、围产期脑损伤、结节性硬化、代谢病或遗传性癫痫。是否需要基因检测取决于 MRI、病史和医生评估。',
    hasTreatment:
      '越早控制痉挛越有利。常用一线治疗包括 ACTH、口服糖皮质激素和氨己烯酸；若有局灶结构病因，还可能评估癫痫外科。',
    commonDelayReason:
      '发作动作短且像普通婴儿动作，家长视频未被重视或脑电图未包含睡眠，容易延误。发育倒退有时也被归因于“发育慢”。',
  },
  patientJourney: {
    whenToSuspect: [
      '3-12 月龄婴儿反复成串点头、弯腰抱团、双臂外展或突然伸展，常在睡醒前后发生。',
      '发作后哭闹、发育停滞或倒退，原本会笑、追视、翻身的能力变少。',
      '有结节性硬化、脑损伤、脑发育异常、代谢/遗传病或既往新生儿惊厥史。',
    ],
    commonWrongTurns: [
      '只处理一个器官或一次发作，没有把长期模式、家族史和既往检查串起来。',
      '检查异常被解释为常见病后长期观察，但没有转到对应专科或罕见病多学科门诊。',
      '没有保存影像、病理、基因、用药和随访记录，导致重复检查和判断延迟。',
    ],
    firstDepartments: [
      '儿科神经专科',
      '癫痫中心',
      '儿童急诊',
      '康复医学科/发育行为儿科',
    ],
    diagnosisChecklist: [
      '带清晰发作视频，记录每天发作次数、每串次数、睡眠关系和发作后状态。',
      '带脑电图，尤其是否做过睡眠期 EEG；带头颅 MRI、代谢和遗传检测结果。',
      '整理出生史、围产期缺氧感染、发育里程碑、用药和家族癫痫史。',
    ],
    testsToAskAbout: [
      '是否需要尽快做视频 EEG 或睡眠 EEG 来确认高峰失律或其他痉挛相关脑电异常。',
      '病因评估是否需要头颅 MRI、结节性硬化筛查、代谢筛查和癫痫基因 panel。',
      'ACTH、口服激素、氨己烯酸或联合治疗如何选择，多久判断无效并调整。',
    ],
    questionsForDoctor: [
      '治疗目标是不是完全停止痉挛并改善 EEG？多久复查脑电图？',
      '药物副作用、感染风险、血压血糖或视野/视网膜监测怎么做？',
      '什么时候评估癫痫外科、康复、吞咽营养和早期干预？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>婴儿痉挛通常表现为短促、突然、重复的屈曲、伸展或屈伸混合动作，可像点头、抱团、身体前屈、双臂外展或全身一抖。发作常成串出现，特别是在入睡或醒来前后。</p><p>许多患儿伴发育停滞或倒退、互动减少、喂养和睡眠问题。病因不同，后续癫痫类型、发育结局和合并问题差异很大。</p>',
    diagnosis:
      '<p>诊断依靠家长视频、发作描述和 EEG，尤其需要捕捉睡眠。脑电图可见高峰失律或其他支持婴儿痉挛的异常，但并非每次检查都典型。</p><p>病因评估通常包括头颅 MRI、结节性硬化和其他皮肤/眼部体征检查、代谢筛查、遗传检测以及既往脑损伤和感染评估。</p>',
    treatment:
      '<p>治疗应尽快启动，目标是在短时间内完全停止痉挛并改善 EEG。常用一线治疗包括 ACTH、口服糖皮质激素和氨己烯酸；结节性硬化相关痉挛常重点评估氨己烯酸。</p><p>若一线治疗无效，需要快速调整方案。局灶结构病因或药物难治者可评估癫痫外科。治疗同时要进行发育评估、康复、营养和家庭支持。</p>',
    longTermCare:
      '<p>长期管理包括复查 EEG、记录痉挛是否复发、监测其他癫痫发作、药物副作用、发育、视听、喂养、睡眠和康复进展。早期干预不应等癫痫完全稳定后才开始。</p><p>家长应保存发作视频和治疗时间线，任何疑似复发都应尽快联系癫痫团队。</p>',
    fertilityOrFamily:
      '<p>部分病例与遗传或代谢病有关。医生会根据 MRI、体征和病史决定基因检测和家系评估；再次妊娠前可咨询遗传风险。</p>',
    emergencySigns:
      '<p>频繁成串发作、持续抽搐、呼吸发紫、喂养困难脱水、明显嗜睡意识差、发热感染或激素治疗期间精神状态变差，应及时急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Institute of Neurological Disorders and Stroke: Infantile spasms',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/infantile-spasms',
    },
  ],
  symptoms:
    '<p>表现为婴儿短促成串的点头、抱团、屈曲或伸展样痉挛，常在睡醒前后发生，可伴发育停滞或倒退。</p>',
  diagnosis:
    '<p>诊断依靠发作视频、病史和视频/睡眠 EEG，并通过头颅 MRI、代谢筛查、结节性硬化评估和遗传检测寻找病因。</p>',
  treatment:
    '<p>需尽快治疗，常用 ACTH、口服糖皮质激素和氨己烯酸；无效时快速调整，局灶结构病因可评估癫痫外科和早期康复。</p>',
  prognosis:
    '<p>越早停止痉挛和改善 EEG 越有利；结局取决于病因、治疗反应和发育支持，需长期儿童神经科随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 440,
    name: 'west-syndrome-infantile-spasms-syndrome-journey.png',
    url: '/images/diseases/west-syndrome-infantile-spasms-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

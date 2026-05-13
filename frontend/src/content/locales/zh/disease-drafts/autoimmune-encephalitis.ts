import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAutoimmuneEncephalitis: DiseaseDraft = {
  ...entity(11, 'disease-autoimmune-encephalitis'),
  name: '自身免疫性脑炎',
  nameEn: 'Autoimmune Encephalitis',
  alias: 'AE、自免脑',
  slug: 'autoimmune-encephalitis',
  oneSentence:
    '自身免疫性脑炎是一组免疫系统攻击脑组织或神经细胞相关结构引起的脑炎，可出现精神行为改变、记忆下降、癫痫、意识改变和运动异常。',
  plainName: '免疫系统错误攻击大脑引起的脑炎',
  prevalence:
    '属于相对少见但越来越被识别的神经免疫疾病，具体患病率受抗体检测和诊断能力影响。',
  searchIntents: [
    '自身免疫性脑炎 早期症状',
    '突然精神异常 癫痫 记忆下降',
    '自免脑 看神经内科还是精神科',
    '自身免疫性脑炎 抗体检查',
    '自免脑 治疗后多久恢复',
  ],
  quickLook: {
    whatItIs:
      '自身免疫性脑炎不同于普通病毒或细菌感染性脑炎。它可能与自身抗体、肿瘤、感染后免疫反应或其他自身免疫背景有关，部分患者在及时治疗后可以明显恢复。',
    whoToSeeFirst:
      '急性精神行为异常、癫痫或意识改变时优先急诊或神经内科。精神症状明显时，精神科可参与评估，但不应忽略神经免疫和脑炎相关检查。',
    isGenetic:
      '通常不是典型遗传病。部分患者可能有自身免疫背景或肿瘤相关触发因素，需要按年龄、性别和抗体类型评估。',
    hasTreatment:
      '可治疗，但需要尽早识别。治疗可能包括免疫治疗、抗癫痫和重症支持，以及筛查并处理潜在肿瘤。具体方案由神经内科或神经免疫团队制定。',
    commonDelayReason:
      '早期可表现为焦虑、失眠、幻觉、胡言乱语、记忆下降或行为改变，容易只按精神心理问题处理，直到癫痫、意识改变或自主神经异常出现后才考虑脑炎。',
  },
  patientJourney: {
    whenToSuspect: [
      '数天到数周内出现明显性格、行为、记忆或精神状态改变。',
      '新发癫痫、抽搐，或既往癫痫突然明显加重。',
      '精神症状伴随发热后改变、意识波动、运动异常、口面部不自主动作或自主神经不稳。',
      '脑脊液、脑电图或 MRI 提示炎症、癫痫活动或边缘系统受累。',
      '青少年或年轻女性出现急性精神症状，同时有癫痫或不自主运动线索。',
    ],
    commonWrongTurns: [
      '只按精神疾病处理，没有评估新发癫痫、意识改变和神经系统体征。',
      '只查一次 MRI 正常就排除脑炎，没有结合脑脊液、脑电图和病程变化。',
      '抗体阴性后完全排除自身免疫性脑炎，忽略临床综合判断。',
      '急性期好转后缺少认知、睡眠、情绪和复发风险随访。',
    ],
    firstDepartments: [
      '急诊科',
      '神经内科',
      '神经免疫门诊',
      '精神科会诊',
      '肿瘤相关科室（按筛查结果）',
    ],
    diagnosisChecklist: [
      '记录精神行为、记忆、癫痫、发热、感染、用药和肿瘤相关病史的时间线。',
      '带上脑电图、脑脊液、MRI/CT、自身抗体、感染排查和肿瘤筛查资料。',
      '记录意识波动、睡眠、言语、运动异常、自主神经症状和安全风险。',
      '向医生确认是否需要复查脑脊液、脑电图、抗体谱或肿瘤筛查。',
    ],
    testsToAskAbout: [
      '脑脊液检查，包括细胞、蛋白、寡克隆带、感染排查和自身免疫抗体。',
      '脑电图，用于评估癫痫活动和脑功能异常。',
      '脑 MRI，必要时结合复查或其他影像。',
      '血清和脑脊液神经自身抗体检测。',
      '按年龄、性别和抗体类型进行肿瘤筛查。',
    ],
    questionsForDoctor: [
      '目前更像感染性脑炎、自身免疫性脑炎，还是其他原因？',
      '是否需要尽快启动免疫治疗，风险和观察指标是什么？',
      '癫痫、睡眠、精神行为和认知问题如何分别管理？',
      '是否需要肿瘤筛查，多久复查？',
      '出院后如何安排认知康复、复查和复发预警？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>自身免疫性脑炎可出现短期内进行性精神行为改变、记忆下降、意识波动、癫痫、不自主运动、语言障碍、睡眠紊乱、自主神经不稳或呼吸问题。不同抗体类型和年龄段表现差异很大。</p>',
    diagnosis:
      '<p>诊断通常结合病程、神经系统查体、脑脊液、脑电图、MRI、感染排查、神经自身抗体检测和肿瘤筛查。抗体结果有帮助，但医生仍需结合临床表现综合判断。</p>',
    treatment:
      '<p>治疗通常包括免疫治疗、抗癫痫和重症支持，并根据情况处理潜在肿瘤。常见免疫治疗路径可能涉及激素、免疫球蛋白、血浆置换或后续免疫抑制治疗，具体方案应由专科团队决定。</p>',
    longTermCare:
      '<p>恢复期需要关注记忆、注意力、睡眠、情绪、癫痫控制、复学复工和家庭照护。部分患者需要神经康复、心理支持和较长时间复查。</p>',
    fertilityOrFamily:
      '<p>自身免疫性脑炎通常不是典型遗传病。若与肿瘤、妊娠或其他自身免疫病有关，应由神经内科、妇产科、肿瘤科或相关专科共同评估后续计划。</p>',
    emergencySigns:
      '<p>新发或持续癫痫、意识下降、严重躁动并存在安全风险、呼吸异常、持续高热、自主神经不稳或快速进展的精神行为改变，应立即急诊就医。</p>',
  },
  sources: [
    {
      name: 'Mayo Clinic: Autoimmune encephalitis symptoms and causes',
      type: 'official',
      url: 'https://www.mayoclinic.org/diseases-conditions/autoimmune-encephalitis/symptoms-causes/syc-20576380',
    },
    {
      name: 'Mayo Clinic: Autoimmune encephalitis diagnosis and treatment',
      type: 'official',
      url: 'https://www.mayoclinic.org/diseases-conditions/autoimmune-encephalitis/diagnosis-treatment/drc-20576406',
    },
    {
      name: '中国自身免疫性脑炎诊治专家共识（2022年版）',
      type: 'clinical-guideline',
      url: 'https://www.wjdpn.cn/epilepsy/medical-file-download/download/57-neuromuscular-system-diseases/181-%E4%B8%AD%E5%9B%BD%E8%87%AA%E8%BA%AB%E5%85%8D%E7%96%AB%E6%80%A7%E8%84%91%E7%82%8E%E8%AF%8A%E6%B2%BB%E4%B8%93%E5%AE%B6%E5%85%B1%E8%AF%86.html',
    },
  ],
  symptoms:
    '<p>常见线索包括急性或亚急性精神行为改变、记忆下降、癫痫、意识波动、不自主运动和自主神经异常。</p>',
  diagnosis:
    '<p>评估通常包括脑脊液、脑电图、脑 MRI、感染排查、神经自身抗体检测和肿瘤筛查。</p>',
  treatment:
    '<p>治疗需要神经内科或神经免疫团队评估，重点是免疫治疗、癫痫和重症支持，以及潜在肿瘤处理。</p>',
  prognosis:
    '<p>不少患者在及时治疗和康复支持下可逐步恢复，但认知、情绪、癫痫和复发风险需要持续随访。</p>',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 309,
    name: 'autoimmune-encephalitis-journey.png',
    url: '/images/diseases/autoimmune-encephalitis-journey.png',
  },
  tagSlugs: [],
};

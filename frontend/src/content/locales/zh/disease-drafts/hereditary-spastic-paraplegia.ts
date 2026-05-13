import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditarySpasticParaplegia: DiseaseDraft = {
  ...entity(45, 'disease-hereditary-spastic-paraplegia'),
  name: '遗传性痉挛性截瘫',
  nameEn: 'Hereditary Spastic Paraplegia',
  alias: 'HSP、遗传性痉挛性下肢瘫、Strumpell-Lorrain 综合征',
  slug: 'hereditary-spastic-paraplegia',
  oneSentence:
    '遗传性痉挛性截瘫是一组以双下肢痉挛、僵硬和行走困难为核心表现的遗传性神经系统疾病。',
  plainName: '下肢越来越僵硬、走路容易绊倒的一组遗传性神经病',
  prevalence:
    '总体罕见，相关基因很多，起病年龄可从儿童到成人不等，进展速度差异很大。',
  quickLook: {
    whatItIs:
      'HSP 主要影响控制下肢运动的长神经通路。单纯型多以双下肢痉挛和行走困难为主，复杂型还可伴共济失调、周围神经病、认知、癫痫、视神经或其他系统表现。',
    whoToSeeFirst:
      '逐渐出现双腿僵硬、剪刀步、容易绊倒、足尖走路、肌张力高或腱反射亢进时，可到神经内科、神经遗传门诊或康复医学科评估。',
    isGenetic:
      '是，遗传方式可为常染色体显性、隐性、X 连锁或线粒体相关，需结合家族史和基因检测判断。',
    hasTreatment:
      '目前多数类型以症状管理、康复、步态辅助、痉挛管理和并发症处理为主；部分可治疗的遗传/代谢病需要在鉴别诊断中主动排查。',
    commonDelayReason:
      '儿童起病可能被当作脑瘫或姿势问题，成人起病可能被当作腰椎病、运动少或普通痉挛；如果家族中多人类似，应考虑 HSP。',
  },
  patientJourney: {
    whenToSuspect: [
      '双下肢逐渐僵硬、走路拖步、足尖着地、剪刀步或反复绊倒。',
      '神经查体提示下肢肌张力高、腱反射亢进、病理反射阳性。',
      '症状多年缓慢进展，或儿童期被诊断为痉挛型脑瘫但无明确围产期原因。',
      '伴尿急、轻度感觉异常，或复杂型相关的共济失调、认知、癫痫、视力听力问题。',
      '家族中多人有类似行走困难、拐杖/轮椅使用或早发下肢僵硬。',
    ],
    commonWrongTurns: [
      '只按腰椎间盘突出、骨科问题或脑瘫处理，没有神经系统定位和家族史评估。',
      '没有排查可治疗的遗传代谢病、维生素缺乏、炎症或脊髓病变。',
      '基因检测只看单个基因，未结合表型和家系解释结果。',
      '只关注诊断名称，忽视康复、痉挛管理、膀胱功能和跌倒预防。',
    ],
    firstDepartments: [
      '神经内科',
      '神经遗传门诊/医学遗传科',
      '康复医学科',
      '骨科或足踝门诊（畸形评估时）',
      '泌尿科（尿急或膀胱问题时）',
    ],
    diagnosisChecklist: [
      '记录起病年龄、进展速度、跌倒、运动能力和家族中类似症状。',
      '带上脑/脊髓 MRI、肌电图、诱发电位和既往神经查体资料。',
      '询问是否需要 HSP/运动神经通路相关基因 panel、外显子组或基因组检测。',
      '排查可治疗的鉴别诊断，如代谢、维生素、免疫、感染或结构性脊髓病变。',
      '评估步态、肌张力、关节活动度、足踝畸形、膀胱和跌倒风险。',
    ],
    testsToAskAbout: [
      '脑和脊髓 MRI。',
      'HSP 相关基因检测或综合基因组检测。',
      '肌电图、神经传导和诱发电位（医生认为需要时）。',
      '维生素、代谢、感染和免疫相关鉴别检查。',
      '步态和康复功能评估。',
    ],
    questionsForDoctor: [
      '我的表现更像单纯型还是复杂型 HSP？',
      '哪些可治疗的疾病需要先排除？',
      '基因检测结果会如何影响家属筛查和生育咨询？',
      '痉挛、疼痛、足踝问题和跌倒风险怎样管理？',
      '需要哪些康复训练和辅助器具评估？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>HSP 的核心表现是双下肢痉挛、僵硬、无力和行走困难，常伴腱反射亢进、病理反射阳性、足下垂或剪刀步。部分患者有尿急、轻度感觉异常。复杂型还可出现共济失调、周围神经病、癫痫、认知障碍、视神经或其他系统表现。</p>',
    diagnosis:
      '<p>诊断需要神经系统查体、脑脊髓影像、家族史、鉴别诊断筛查和遗传检测。HSP 相关基因很多，阴性结果不一定完全排除，阳性结果也需要结合症状、遗传方式和家系验证解释。</p>',
    treatment:
      '<p>治疗以功能管理为主，包括康复训练、拉伸和步态训练、痉挛和疼痛管理、辅助器具、跌倒预防、足踝畸形处理和膀胱症状管理。若鉴别出可治疗的代谢或营养相关疾病，应按对应疾病处理。</p>',
    longTermCare:
      '<p>长期照护关注步行能力、跌倒、关节挛缩、疼痛、膀胱功能、心理和工作生活支持。定期康复评估比单纯等待基因结果更能改善日常功能。</p>',
    fertilityOrFamily:
      '<p>HSP 遗传方式多样。明确致病基因后，家属可通过遗传咨询了解亲属筛查、预测检测、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>行走能力突然恶化、急性尿潴留、明显背痛伴神经功能变化、感染后快速加重或新发上肢/吞咽/呼吸问题，应尽快就医，避免把急性问题都归因于 HSP。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
    },
    {
      name: 'NINDS: Hereditary Spastic Paraplegia',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hereditary-spastic-paraplegia',
    },
  ],
  symptoms:
    '<p>主要表现为双下肢痉挛、僵硬、无力、剪刀步、容易绊倒，可伴尿急或复杂神经系统表现。</p>',
  diagnosis:
    '<p>评估包括神经查体、脑脊髓 MRI、可治疗病因排查、HSP 相关基因检测和康复功能评估。</p>',
  treatment:
    '<p>管理以康复训练、痉挛和疼痛管理、辅助器具、跌倒预防、膀胱和足踝问题处理为主。</p>',
  prognosis:
    '<p>多数单纯型进展缓慢且不明显缩短寿命，但功能影响差异大；复杂型取决于相关系统受累。</p>',
  sourceName:
    'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 344,
    name: 'hereditary-spastic-paraplegia-journey.png',
    url: '/images/diseases/hereditary-spastic-paraplegia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalMyasthenicSyndrome: DiseaseDraft = {
  ...entity(23, 'disease-congenital-myasthenic-syndrome'),
  name: '先天性肌无力综合征',
  nameEn: 'Congenital Myasthenic Syndrome',
  alias: 'CMS、先天性神经肌肉接头病',
  slug: 'congenital-myasthenic-syndrome',
  oneSentence:
    '先天性肌无力综合征是一组遗传性神经肌肉接头疾病，常表现为从婴幼儿期开始的波动性肌无力、易疲劳、眼睑下垂、吞咽或呼吸相关问题。',
  plainName: '神经和肌肉之间信号传递先天异常导致的肌无力',
  prevalence:
    '总体罕见，相关基因和亚型较多，不同亚型的起病年龄、严重程度和治疗反应差异明显。',
  quickLook: {
    whatItIs:
      '神经给肌肉发出“收缩”信号时，需要通过神经肌肉接头传递。CMS 的问题就在这个接头，导致肌肉容易疲劳或无力。',
    whoToSeeFirst:
      '婴幼儿吃奶无力、容易呛咳、眼睑下垂、反复呼吸问题或活动后明显疲劳时，可到儿神经科/神经肌肉病专科；呼吸困难或严重呛咳应急诊。',
    isGenetic:
      '是。多数亚型为常染色体隐性遗传，也有显性遗传或新发变异。基因分型会影响治疗选择，因此需要专业解释。',
    hasTreatment:
      '部分亚型有针对性治疗，但不同基因亚型对药物反应可能相反。治疗应由神经肌肉病专科根据分型制定。',
    commonDelayReason:
      '症状可与获得性重症肌无力、肌病、脑瘫或单纯发育迟缓相似；如果未做电生理和基因检测，容易长期无法分型。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿吃奶容易疲劳、吮吸弱、哭声低、眼睑下垂或眼球活动受限。',
      '儿童活动后明显无力，休息后缓解，下午或疲劳后症状更明显。',
      '反复呛咳、吞咽困难、呼吸肌无力或感染后呼吸问题加重。',
      '肌张力低、抬头或运动发育迟缓，但肌酸激酶不明显升高。',
      '家族中有类似肌无力、婴儿期呼吸问题或兄弟姐妹受累。',
    ],
    commonWrongTurns: [
      '只按获得性重症肌无力治疗，没有考虑先天性遗传亚型。',
      '把肌张力低或发育迟缓作为最终诊断，未继续做神经肌肉接头评估。',
      '未进行基因检测，导致治疗选择缺少分型依据。',
      '忽视吞咽和呼吸肌受累，直到感染或呛咳后才急诊。',
    ],
    firstDepartments: [
      '儿神经科',
      '神经内科（神经肌肉病专科）',
      '康复医学科',
      '呼吸科/重症医学科（呼吸受累时）',
      '医学遗传科/遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '记录症状是否随疲劳、运动、发热或一天中时间变化而波动。',
      '带上肌电图、重复神经刺激、单纤维肌电图、CK、抗体检查和基因检测资料。',
      '请医生区分先天性肌无力综合征、获得性重症肌无力、肌病和运动神经元/周围神经病。',
      '确认是否评估吞咽安全、肺功能和睡眠/夜间呼吸。',
      '询问基因结果如何影响治疗选择和禁忌。',
    ],
    testsToAskAbout: [
      '重复神经刺激和单纤维肌电图。',
      '神经肌肉接头相关基因 panel 或外显子组检测。',
      '获得性重症肌无力相关抗体，用于鉴别诊断。',
      '吞咽评估、肺功能和呼吸肌力量评估。',
      '康复和发育评估。',
    ],
    questionsForDoctor: [
      '目前证据更支持 CMS 还是获得性重症肌无力？',
      '基因分型是否已经明确？它会怎样影响用药选择？',
      '需要监测吞咽和呼吸功能吗？哪些情况需要急诊？',
      '康复训练和日常活动强度应该怎样安排？',
      '家属是否需要携带者检测或遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>CMS 常表现为波动性肌无力和易疲劳，可累及眼肌、面部、吞咽肌、呼吸肌和四肢近端肌肉。婴儿可出现吃奶无力、哭声弱、肌张力低、眼睑下垂或呼吸问题；儿童和成人可表现为活动后无力、上楼困难、眼睑下垂、复视或吞咽困难。不同基因亚型差异很大。</p>',
    diagnosis:
      '<p>诊断需要结合疲劳性症状、神经系统查体、电生理检查和基因检测。重复神经刺激、单纤维肌电图等可提示神经肌肉接头传递异常；基因检测有助于明确亚型并指导治疗。医生还会排除获得性重症肌无力、肌病、周围神经病和中枢神经系统疾病。</p>',
    treatment:
      '<p>治疗高度依赖亚型。某些药物对部分亚型有帮助，但也可能对另一些亚型无效或加重症状，因此不能照搬他人方案。管理还包括呼吸和吞咽评估、感染时风险预案、康复训练、营养支持和学校/生活适配。</p>',
    longTermCare:
      '<p>长期随访重点包括肌力、疲劳、吞咽安全、呼吸功能、睡眠呼吸、营养、生长发育和日常活动能力。家庭应保存基因报告、电生理报告、用药反应和急诊说明，并让学校或照护者了解疲劳和呼吸风险。</p>',
    fertilityOrFamily:
      '<p>多数 CMS 亚型为常染色体隐性遗传，少数为显性遗传。明确致病变异后，家属可通过遗传咨询了解携带者检测、复发风险、产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>呼吸困难、明显发绀、严重呛咳后呼吸急促、无法进食饮水、感染后肌无力快速加重、意识改变或反复误吸，应尽快急诊，并说明疑似或确诊先天性肌无力综合征。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
    },
    {
      name: 'MedlinePlus Genetics: Congenital myasthenic syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/congenital-myasthenic-syndrome/',
    },
    {
      name: 'Orphanet: Congenital myasthenic syndrome',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/590',
    },
  ],
  symptoms:
    '<p>可表现为眼睑下垂、复视、吃奶或吞咽困难、活动后无力、呼吸肌受累和易疲劳，常有波动性。</p>',
  diagnosis:
    '<p>评估通常包括神经系统查体、重复神经刺激、单纤维肌电图、相关抗体鉴别和基因检测。</p>',
  treatment:
    '<p>治疗需按基因亚型个体化选择，并配合呼吸/吞咽评估、康复训练和急性加重预案。</p>',
  prognosis:
    '<p>预后取决于亚型、呼吸和吞咽受累程度、治疗反应和感染时管理；明确分型有助于减少误治风险。</p>',
  sourceName: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 322,
    name: 'congenital-myasthenic-syndrome-journey.png',
    url: '/images/diseases/congenital-myasthenic-syndrome-journey.png',
  },
  tagSlugs: ['neuromuscular', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGalactosemia: DiseaseDraft = {
  ...entity(30, 'disease-galactosemia'),
  name: '半乳糖血症',
  nameEn: 'Galactosemia',
  alias: '经典型半乳糖血症、GALT 缺乏症、半乳糖-1-磷酸尿苷酰转移酶缺乏症',
  slug: 'galactosemia',
  oneSentence:
    '半乳糖血症是一组半乳糖代谢障碍，经典型可在新生儿摄入乳糖后迅速出现喂养困难、黄疸、肝损害、感染和出血风险。',
  plainName: '宝宝不能正常处理奶中半乳糖的遗传代谢病',
  prevalence:
    'MedlinePlus 描述经典型约每 3 万至 6 万名新生儿中 1 例，其他类型更少见。',
  quickLook: {
    whatItIs:
      '半乳糖来自乳糖。GALT 等酶缺陷会让半乳糖相关代谢物堆积，经典型新生儿若未及时识别，可出现严重肝脏和感染并发症。',
    whoToSeeFirst:
      '新生儿筛查异常，或出生后吃奶后出现拒奶、呕吐、黄疸、嗜睡、体重不增、出血或疑似败血症时，应立即儿科/新生儿科评估；确诊后由遗传代谢科长期管理。',
    isGenetic:
      '是，常见为常染色体隐性遗传。经典型多与 GALT 双等位致病变异相关。',
    hasTreatment:
      '有饮食和长期随访管理方案，但不同类型和变异严重程度不同，需由遗传代谢专科和营养师制定。',
    commonDelayReason:
      '早期症状像生理性黄疸、母乳性黄疸、喂养问题或感染；若新生儿筛查召回复查不及时，可能延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查提示半乳糖代谢异常或 GALT 活性异常。',
      '出生后摄入母乳或普通配方奶后出现拒奶、呕吐、腹泻、嗜睡或体重不增。',
      '黄疸加重、肝大、凝血异常、低血糖或疑似败血症。',
      '婴儿出现白内障或长期发育、语言、运动问题，并有新生儿期黄疸/肝病史。',
      '家族中有半乳糖血症患儿或新生儿早期不明原因死亡史。',
    ],
    commonWrongTurns: [
      '把黄疸只当作生理性或母乳性黄疸，没有结合喂养差和肝功能异常。',
      '筛查阳性后没有及时召回复查和改变喂养方案。',
      '只关注急性期肝病，忽略后续语言、运动、卵巢功能和学习发展随访。',
      '未区分经典型、临床变异型、Duarte 变异或其他半乳糖代谢病。',
    ],
    firstDepartments: [
      '新生儿科/儿科急诊',
      '遗传代谢科',
      '儿童消化肝病科',
      '营养科（在代谢专科指导下）',
      '眼科、康复和发育行为儿科（长期随访时）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查报告、复查通知、喂养史、黄疸/肝功能/凝血/感染检查。',
      '确认是否检测红细胞 GALT 活性、半乳糖-1-磷酸和 GALT 基因。',
      '记录开始限制乳糖/半乳糖饮食的时间和后续变化。',
      '长期评估白内障、语言、运动、学习和女性卵巢功能。',
      '家属有生育计划时准备基因报告用于遗传咨询。',
    ],
    testsToAskAbout: [
      '红细胞 GALT 酶活性。',
      '半乳糖-1-磷酸、血/尿半乳糖相关代谢物。',
      'GALT 基因检测，必要时评估 GALK1、GALE 等其他类型。',
      '肝功能、凝血功能、感染评估和血糖。',
      '眼科白内障评估、发育和语言评估。',
    ],
    questionsForDoctor: [
      '孩子属于经典型、临床变异型，还是其他半乳糖代谢异常？',
      '现在应该使用什么喂养方案？哪些食品或药品成分需要注意？',
      '急性期已经过去后，还需要长期关注哪些发育和内分泌问题？',
      '复查半乳糖-1-磷酸或其他指标的频率如何？',
      '家人是否需要携带者检测？再次怀孕如何早期筛查？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>经典型半乳糖血症可在新生儿摄入乳糖后数天内出现喂养困难、呕吐、嗜睡、体重不增、黄疸、肝损害、凝血异常、低血糖、白内障和严重感染风险。即使早期饮食管理充分，部分儿童仍可能有语言、运动、学习和女性卵巢功能方面的长期风险。</p>',
    diagnosis:
      '<p>诊断依赖新生儿筛查复查、红细胞 GALT 酶活性、半乳糖-1-磷酸水平和 GALT 基因检测。医生还需要鉴别胆道闭锁、败血症、其他肝病和 GALK1/GALE 相关半乳糖代谢异常。</p>',
    treatment:
      '<p>急性期需要儿科/新生儿科快速处理，并在遗传代谢专科指导下调整饮食。长期管理包括饮食限制、营养评估、发育和语言随访、眼科检查和生殖内分泌关注。具体食物清单和喂养方案应由代谢营养团队制定。</p>',
    longTermCare:
      '<p>长期随访重点是营养状态、半乳糖代谢指标、语言和运动发育、学习能力、眼部问题、骨健康和女性卵巢功能。家庭应保存筛查、基因、饮食方案和复查记录。</p>',
    fertilityOrFamily:
      '<p>经典型和临床变异型通常为常染色体隐性遗传。明确家族 GALT 变异后，父母、兄弟姐妹和有生育计划的亲属可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>新生儿拒奶、反复呕吐、嗜睡、黄疸加重、出血、发热或疑似败血症时应立即就医；已确诊儿童若误食后出现明显不适，也应联系代谢专科或急诊。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Classic Galactosemia and Clinical Variant Galactosemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
    },
    {
      name: 'MedlinePlus Genetics: Galactosemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/galactosemia/',
    },
  ],
  symptoms:
    '<p>新生儿可出现拒奶、呕吐、嗜睡、黄疸、肝损害、出血、低血糖、感染风险和白内障。</p>',
  diagnosis:
    '<p>评估包括新生儿筛查复查、GALT 酶活性、半乳糖-1-磷酸、GALT 基因检测和肝功能/感染鉴别。</p>',
  treatment:
    '<p>管理以遗传代谢专科指导下的饮食调整、急性期支持和长期发育/眼科/内分泌随访为核心。</p>',
  prognosis:
    '<p>早期识别可避免许多急性危重并发症，但语言、运动、学习和卵巢功能等长期问题仍需随访。</p>',
  sourceName: 'GeneReviews: Classic Galactosemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 329,
    name: 'galactosemia-journey.png',
    url: '/images/diseases/galactosemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCarnitineDeficiency: DiseaseDraft = {
  ...entity(16, 'disease-carnitine-deficiency'),
  name: '原发性肉碱缺乏症',
  nameEn: 'Primary Carnitine Deficiency',
  alias: 'PCD、原发性肉碱转运障碍、肉碱摄取障碍、OCTN2 缺陷',
  slug: 'carnitine-deficiency',
  oneSentence:
    '原发性肉碱缺乏症是一种与 SLC22A5 基因相关的遗传代谢病，可影响脂肪酸供能，可能累及低血糖、肝脏、心肌和骨骼肌。',
  plainName: '身体运输和利用肉碱能力不足的遗传代谢病',
  prevalence:
    '属于罕见病，不同地区新生儿筛查检出率差异较大；筛查结果还可能受母体肉碱状态等因素影响，需要复查确认。',
  quickLook: {
    whatItIs:
      '肉碱帮助长链脂肪酸进入线粒体供能。原发性肉碱缺乏症中，肉碱转运受影响，身体在空腹、感染或应激时更难利用脂肪供能，可能出现低酮性低血糖、肝脏异常、肌无力或心肌病。',
    whoToSeeFirst:
      '新生儿筛查低游离肉碱、儿童反复低血糖/肝肿大/肌无力，或心肌病伴疑似代谢病线索时，建议到遗传代谢科或儿科内分泌/代谢门诊评估；意识改变、抽搐或心律异常应急诊。',
    isGenetic:
      '是，通常为常染色体隐性遗传，与 SLC22A5 基因变异有关。筛查发现孩子低肉碱时，也要评估母亲是否存在原发性肉碱缺乏症。',
    hasTreatment:
      '有明确治疗和随访方案，核心是医生指导下补充左卡尼汀、避免过久空腹，并在生病或不能进食时及时处理。具体剂量和调整应由专科医生决定。',
    commonDelayReason:
      '低血糖、肝功能异常、肌无力、心肌病或疲乏都不特异，可能被当作肝炎、心肌炎、癫痫、普通低血糖或运动耐力差处理。新生儿筛查低肉碱还可能反映母亲情况，需要母婴一起评估。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查提示游离肉碱（C0）明显偏低，需要复查。',
      '婴幼儿在感染、禁食或胃肠炎后出现低血糖、嗜睡、抽搐或肝肿大。',
      '儿童出现不明原因扩张型或肥厚型心肌病、心律失常或心功能问题。',
      '有肌无力、肌痛、耐力下降或肌酸激酶升高，常规解释不充分。',
      '成人长期疲乏、运动耐量差，或因孩子筛查异常发现自己肉碱水平低。',
    ],
    commonWrongTurns: [
      '把低血糖和抽搐单独按神经系统问题处理，没有排查脂肪酸氧化和肉碱转运异常。',
      '把心肌病或心律失常只按心脏病处理，未结合代谢病线索。',
      '看到新生儿筛查低肉碱后只关注孩子，没有同步评估母亲。',
      '症状改善后自行停用补充治疗或随访中断。',
    ],
    firstDepartments: [
      '遗传代谢科',
      '儿科内分泌/代谢门诊',
      '心血管内科或儿童心脏专科',
      '急诊科（低血糖、意识改变、抽搐或心律异常时）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查和复查报告，尤其是游离肉碱及酰基肉碱谱。',
      '带上低血糖、肝功能、血氨、肌酸激酶、心电图和超声心动图资料。',
      '向医生确认是否需要 SLC22A5 基因检测，以及是否检测父母或兄弟姐妹。',
      '筛查低肉碱时，询问母亲是否也需要血肉碱和基因评估。',
      '确认是否已有生病、手术、禁食或不能进食时的应急方案。',
    ],
    testsToAskAbout: [
      '血游离肉碱、总肉碱和酰基肉碱谱。',
      'SLC22A5 基因检测及家系验证。',
      '血糖、血酮/尿酮、肝功能、血氨、电解质和肌酸激酶。',
      '心电图和超声心动图，必要时心脏专科随访。',
      '母亲及兄弟姐妹的肉碱水平或基因检测是否需要同步评估。',
    ],
    questionsForDoctor: [
      '筛查低肉碱是孩子本身的问题，还是可能来自母亲？需要怎么确认？',
      '日常需要避免多长时间空腹？发热、呕吐或手术前后该怎么处理？',
      '左卡尼汀补充需要如何监测效果和安全性？',
      '是否需要心脏超声、心电图或心肌相关指标长期随访？',
      '兄弟姐妹和未来生育需要做哪些遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>原发性肉碱缺乏症表现差异很大。婴幼儿可在感染、禁食或胃肠炎后出现低酮性低血糖、喂养差、嗜睡、肝肿大、肝酶升高或血氨升高；儿童可出现心肌病、心律失常、肌无力或运动耐量下降；成人可能表现为疲乏，也可能因孩子新生儿筛查异常而被发现。</p>',
    diagnosis:
      '<p>诊断通常从血游离肉碱明显降低和酰基肉碱谱异常开始，但低肉碱并不一定等于原发性肉碱缺乏症。医生需要排除继发性肉碱缺乏、早产、母体肉碱缺乏、药物或其他代谢病影响。SLC22A5 双等位基因致病变异可支持遗传学诊断，必要时还会评估肉碱转运功能。</p>',
    treatment:
      '<p>治疗核心是医生指导下长期补充左卡尼汀，并避免超过年龄和病情允许的空腹时间。感染、呕吐、手术、不能进食或其他应激情况下，可能需要提前联系代谢中心或住院补充能量和监测代谢指标。具体补充方案、复查频率和调整标准需要个体化。</p>',
    longTermCare:
      '<p>随访通常包括血肉碱水平、生长发育、肝功能、肌酸激酶、心电图和超声心动图。家庭应保存诊断资料、用药清单和急诊说明卡，并让学校或照护者了解不能长时间空腹和生病时需要及时处理。</p>',
    fertilityOrFamily:
      '<p>本病通常为常染色体隐性遗传。确诊后，父母、兄弟姐妹和有生育计划的患者可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测。女性患者妊娠期需要由代谢专科和产科共同管理。</p>',
    emergencySigns:
      '<p>低血糖伴抽搐或意识改变、明显嗜睡、反复呕吐不能进食、呼吸异常、心悸或疑似心律失常、感染后精神状态快速变差时，应尽快急诊就医，并主动告知医生疑似或确诊原发性肉碱缺乏症。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Primary Carnitine Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
    },
    {
      name: 'MedlinePlus Genetics: Primary carnitine deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/primary-carnitine-deficiency/',
    },
    {
      name: 'Orphanet: Primary carnitine deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/158',
    },
  ],
  symptoms:
    '<p>可表现为低酮性低血糖、肝肿大、肌无力、心肌病、心律失常或成人疲乏，也可能在筛查中发现。</p>',
  diagnosis:
    '<p>评估通常包括血肉碱和酰基肉碱谱、SLC22A5 基因检测，并排除母体或继发性低肉碱原因。</p>',
  treatment:
    '<p>治疗以医生指导下补充左卡尼汀、避免过久空腹和生病时及时补充能量/就医为核心。</p>',
  prognosis:
    '<p>早期识别和持续治疗通常有助于降低代谢危象和心脏风险；已经存在器官损害时需专科长期管理。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 315,
    name: 'carnitine-deficiency-journey.png',
    url: '/images/diseases/carnitine-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

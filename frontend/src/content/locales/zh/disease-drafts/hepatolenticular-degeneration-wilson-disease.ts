import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHepatolenticularDegenerationWilsonDisease: DiseaseDraft = {
  ...entity(39, 'disease-hepatolenticular-degeneration-wilson-disease'),
  name: '肝豆状核变性',
  nameEn: 'Hepatolenticular Degeneration (Wilson Disease)',
  alias: 'Wilson 病、威尔逊病、铜代谢障碍、ATP7B 相关铜蓄积病',
  slug: 'hepatolenticular-degeneration-wilson-disease',
  oneSentence:
    '肝豆状核变性是一种 ATP7B 相关铜代谢病，铜在肝脏、脑和其他组织蓄积后可造成肝病、运动障碍、精神行为变化或溶血等表现。',
  plainName: '身体排铜能力下降，铜逐渐伤害肝脏和神经系统的遗传病',
  prevalence:
    '总体罕见，常在儿童、青少年或青年期发现，但发病年龄范围较宽，年龄本身不能完全排除诊断。',
  quickLook: {
    whatItIs:
      '正常情况下多余的铜会经胆汁排出。ATP7B 功能异常会让铜排出受阻，先影响肝脏，也可能影响脑部、眼睛、血液和精神行为。',
    whoToSeeFirst:
      '原因不明肝功能异常、肝硬化、急性肝衰竭伴溶血，或出现震颤、动作变慢、说话吞咽困难、性格行为变化时，可到肝病科/消化科、神经内科或遗传代谢科评估。',
    isGenetic: '是，通常为常染色体隐性遗传，与 ATP7B 双等位致病变异有关。',
    hasTreatment:
      '有长期去铜和维持治疗方案，关键是早诊断、坚持随访和避免自行停药；急性或终末期肝衰竭可能需要肝移植评估。',
    commonDelayReason:
      '早期可像脂肪肝、病毒性肝炎、自身免疫性肝炎、精神心理问题或帕金森样运动障碍，若没有查铜代谢和眼部线索，容易绕路。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童或青年出现不明原因转氨酶升高、脂肪肝样改变、肝脾大或肝硬化。',
      '急性肝损伤或肝衰竭伴 Coombs 阴性溶血、黄疸或凝血异常。',
      '震颤、动作笨拙、肌张力障碍、说话不清、吞咽困难或步态异常。',
      '情绪、学习、行为或精神症状与肝功能异常并存。',
      '家族中有 Wilson 病、早发肝病、不明原因肝衰竭或兄弟姐妹类似表现。',
    ],
    commonWrongTurns: [
      '只按脂肪肝、病毒性肝炎或自身免疫性肝炎处理，未做铜代谢评估。',
      '运动或精神症状单独在神经/精神科处理，没有回头看肝功能和家族史。',
      '眼科未做裂隙灯检查或未寻找 Kayser-Fleischer 环线索。',
      '确诊后症状好转就自行停药，导致铜重新蓄积和复发风险。',
    ],
    firstDepartments: [
      '肝病科/消化内科',
      '神经内科（运动障碍方向）',
      '遗传代谢科/医学遗传科',
      '眼科（裂隙灯检查）',
      '肝移植中心（急性或终末期肝衰竭评估时）',
    ],
    diagnosisChecklist: [
      '保存肝功能、凝血、血常规、溶血指标、腹部影像和既往肝病检查。',
      '询问血清铜蓝蛋白、尿铜、眼科裂隙灯和肝铜相关评估。',
      '准备神经症状视频、学习/行为变化记录和脑 MRI 资料。',
      '询问 ATP7B 基因检测和兄弟姐妹筛查。',
      '确诊后建立长期用药、复查和不能自行停药的随访计划。',
    ],
    testsToAskAbout: [
      '血清铜蓝蛋白、血清铜和 24 小时尿铜。',
      '肝功能、凝血、血常规和溶血相关检查。',
      '眼科裂隙灯检查 Kayser-Fleischer 环。',
      'ATP7B 基因检测，必要时家系验证。',
      '腹部影像、脑 MRI 和医生认为必要的肝铜评估。',
    ],
    questionsForDoctor: [
      '我的表现更偏肝型、神经型，还是混合型？目前器官受累程度如何？',
      '诊断证据是否充分？还需要哪些铜代谢或基因检查？',
      '治疗目标、复查指标和复查频率是什么？',
      '哪些食物、药物或补充剂需要先问医生？',
      '兄弟姐妹和未来生育计划需要怎样筛查和咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Wilson 病表现多样，可有转氨酶升高、脂肪肝样改变、黄疸、肝脾大、肝硬化、急性肝衰竭、溶血，也可有震颤、肌张力障碍、动作变慢、说话吞咽困难、步态异常、学习或行为变化、抑郁焦虑等神经精神表现。经典的肝病、运动障碍和 Kayser-Fleischer 环三联征并不总是同时出现。</p>',
    diagnosis:
      '<p>诊断通常综合临床表现、血清铜蓝蛋白、尿铜、肝脏和神经系统评估、眼科裂隙灯检查以及 ATP7B 基因检测。医生会与病毒性肝炎、自身免疫性肝病、脂肪肝、其他代谢性肝病、帕金森样疾病和精神心理疾病鉴别。</p>',
    treatment:
      '<p>治疗以长期减少体内铜负荷和维持稳定为目标，包括去铜或阻铜相关药物、饮食和随访管理。具体药物选择、切换和监测应由肝病/神经/遗传代谢团队制定。急性肝衰竭或失代偿肝病需要及时评估肝移植可能性。</p>',
    longTermCare:
      '<p>长期照护重点是肝功能、铜代谢指标、神经精神状态、用药副作用、依从性和家族筛查。患者应保存诊断证明和治疗方案，避免自行停药或只根据症状好转减少随访。</p>',
    fertilityOrFamily:
      '<p>Wilson 病为常染色体隐性遗传。明确 ATP7B 变异后，兄弟姐妹需要评估；有生育计划的家庭可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>黄疸迅速加重、意识改变、出血倾向、腹水或严重乏力，急性精神/运动症状加重，或疑似急性肝衰竭表现时应立即就医，并说明 Wilson 病或疑似铜代谢病风险。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Wilson Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1512/',
    },
    {
      name: 'MedlinePlus Genetics: Wilson disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/wilson-disease/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>可表现为肝功能异常、肝硬化、急性肝衰竭、溶血、震颤、肌张力障碍、说话吞咽困难或精神行为变化。</p>',
  diagnosis:
    '<p>评估包括铜蓝蛋白、尿铜、肝功能和溶血检查、眼科裂隙灯、ATP7B 基因检测及肝脏/脑部评估。</p>',
  treatment:
    '<p>管理依赖长期去铜或阻铜治疗、饮食和随访管理，急性或终末期肝衰竭需肝移植评估。</p>',
  prognosis:
    '<p>早期诊断和持续治疗可显著改善预后；自行停药、急性肝衰竭或严重神经受累会增加风险。</p>',
  sourceName: 'GeneReviews: Wilson Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1512/',
  categorySlug: 'metabolic',
  charityIds: [32, 33],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 338,
    name: 'hepatolenticular-degeneration-wilson-disease-journey.png',
    url: '/images/diseases/hepatolenticular-degeneration-wilson-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

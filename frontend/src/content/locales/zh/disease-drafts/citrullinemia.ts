import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCitrullinemia: DiseaseDraft = {
  ...entity(19, 'disease-citrullinemia'),
  name: '瓜氨酸血症',
  nameEn: 'Citrullinemia',
  alias: 'CTLN1、瓜氨酸血症 I 型、希特林蛋白缺乏症相关瓜氨酸血症 II 型',
  slug: 'citrullinemia',
  oneSentence:
    '瓜氨酸血症是一组影响尿素循环或相关转运过程的遗传代谢病，可能导致血氨升高，并在新生儿、儿童或成人阶段出现急性神经系统症状。',
  plainName: '身体处理蛋白质代谢废物出问题，可能导致血氨升高的遗传代谢病',
  prevalence:
    'I 型和 II 型的地区分布不同。I 型属于尿素循环障碍，II 型与希特林蛋白缺乏症相关，在东亚人群中相对更常被报道。',
  quickLook: {
    whatItIs:
      '人体分解蛋白质时会产生含氮废物，通常通过尿素循环处理。瓜氨酸血症相关基因异常时，血氨等代谢物可能升高，影响大脑和肝脏功能。',
    whoToSeeFirst:
      '新生儿筛查提示瓜氨酸升高，或出现反复呕吐、嗜睡、意识改变、惊厥、胆汁淤积性黄疸时，应尽快联系遗传代谢专科/儿科；意识障碍或抽搐应急诊。',
    isGenetic:
      '是。I 型通常与 ASS1 相关，II 型与 SLC25A13 相关，常见遗传方式为常染色体隐性遗传。家族检测和生育咨询需要结合具体基因结果。',
    hasTreatment:
      '有代谢专科管理方案，包括饮食和营养管理、降氨相关治疗、急性发作处理和部分情况下的肝移植评估。具体方案应由遗传代谢专科制定。',
    commonDelayReason:
      '发作早期像感染、喂养困难、肠胃问题或精神状态不好；间歇期可能接近正常；成人 II 型有时先按精神、神经或肝病问题处理。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查提示瓜氨酸或相关氨基酸异常，需要召回复查。',
      '出生后不久出现喂养困难、反复呕吐、嗜睡、肌张力异常、呼吸异常或惊厥。',
      '儿童在感染、发热、长时间不进食或饮食改变后出现精神萎靡、呕吐、头痛、共济失调或意识改变。',
      '婴儿期出现胆汁淤积性黄疸、肝肿大、生长不良，并伴有代谢筛查异常。',
      '青少年或成人反复出现意识改变、行为异常、嗜睡或肝性脑病样发作，尤其与饮食、饮酒、手术或疾病压力相关。',
    ],
    commonWrongTurns: [
      '把新生儿嗜睡、呕吐或拒奶只当作普通感染或喂养问题。',
      '看到症状缓解后没有完成新生儿筛查复查或遗传代谢评估。',
      '成人发作时只按精神科、神经科或普通肝病处理，没有检查血氨和氨基酸谱。',
      '未区分 I 型瓜氨酸血症和希特林蛋白缺乏症相关 II 型，导致营养建议混淆。',
      '家庭没有急诊说明文件，急诊时医生无法快速了解既往代谢病史。',
    ],
    firstDepartments: [
      '遗传代谢科/医学遗传科',
      '儿科或新生儿科（新生儿筛查异常或婴儿起病时）',
      '急诊科（意识改变、惊厥、反复呕吐不能进食时）',
      '消化肝病科（胆汁淤积、肝功能异常或成人肝性脑病样发作时）',
      '营养科（在代谢专科指导下做饮食管理）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查报告、复查通知、血氨、血氨基酸谱、尿有机酸、肝功能和凝血功能结果。',
      '记录每次发作前是否有感染、发热、长时间禁食、饮食改变、饮酒、手术或药物变化。',
      '确认医生是否区分 I 型瓜氨酸血症、希特林蛋白缺乏症和其他尿素循环障碍。',
      '询问是否需要 ASS1、SLC25A13 或尿素循环/胆汁淤积相关基因检测。',
      '准备一份急诊说明，写明疑似或确诊诊断、主管专科、既往危象和正在执行的医嘱。',
    ],
    testsToAskAbout: [
      '血氨和血气/酸碱状态评估。',
      '血浆氨基酸谱，重点看瓜氨酸及相关氨基酸模式。',
      '尿有机酸、乳酸、酰基肉碱谱等鉴别代谢病检查。',
      '肝功能、胆汁淤积指标和凝血功能。',
      'ASS1、SLC25A13 或尿素循环障碍相关基因检测。',
      '家属携带者检测和新生儿早期检测方案。',
    ],
    questionsForDoctor: [
      '目前更像 I 型瓜氨酸血症、希特林蛋白缺乏症，还是其他尿素循环障碍？依据是什么？',
      '平时饮食、发热生病和不能进食时，应该按照哪份代谢专科方案处理？',
      '哪些情况需要直接急诊？急诊说明卡应该写哪些内容？',
      '我们需要定期复查哪些指标？复查频率由哪些因素决定？',
      '家属是否需要检测？下一胎或其他亲属的新生儿筛查需要特别提醒什么？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>瓜氨酸血症 I 型可表现为新生儿期喂养困难、呕吐、嗜睡、肌张力异常、惊厥、意识障碍，也可有较晚起病或症状较轻的形式。希特林蛋白缺乏症可在婴儿期表现为胆汁淤积、黄疸、肝肿大、生长问题，也可能在青少年或成人阶段出现反复高氨血症伴神经精神症状。不同类型、年龄和诱因会让表现差异很大。</p>',
    diagnosis:
      '<p>诊断需要结合新生儿筛查、血氨、血浆氨基酸谱、尿有机酸、肝功能和基因检测。I 型通常与 ASS1 双等位致病变异相关；希特林蛋白缺乏症与 SLC25A13 双等位致病变异相关。医生还需要鉴别其他尿素循环障碍、有机酸血症、肝病和感染等情况。</p>',
    treatment:
      '<p>治疗需要遗传代谢专科个体化制定。长期管理可能包括营养和蛋白摄入安排、预防分解代谢、规律监测、特定药物和部分情况下的肝移植评估；急性高氨血症属于急诊问题，需要在有经验的医疗团队中处理。患者和家属不要自行按网络资料限制饮食或调整药物。</p>',
    longTermCare:
      '<p>长期照护重点是减少代谢危象、保护神经系统和肝脏功能，并让学校、照护者和急诊医生能快速识别病情。建议保存诊断文件、基因报告、代谢专科方案、用药清单和急诊说明卡。儿童还需要关注生长发育、学习能力、营养状态和家庭照护压力。</p>',
    fertilityOrFamily:
      '<p>瓜氨酸血症相关疾病多为常染色体隐性遗传。明确家族致病变异后，父母、兄弟姐妹和有生育计划的患者可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测等选择。已知家族风险时，新生儿期应尽早告知产科和儿科团队。</p>',
    emergencySigns:
      '<p>反复呕吐不能进食、明显嗜睡或烦躁、意识改变、惊厥、呼吸异常、发热后精神状态快速变差、黄疸加深或成人突发行为/意识异常，都应尽快急诊，并主动说明疑似或确诊瓜氨酸血症/尿素循环障碍，携带既往检查和代谢专科方案。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Citrullinemia Type I',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
    },
    {
      name: 'GeneReviews: Citrin Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1181/',
    },
    {
      name: 'MedlinePlus Genetics: Citrullinemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/citrullinemia/',
    },
    {
      name: 'HRSA Newborn Screening: Citrullinemia',
      type: 'official',
      url: 'https://newbornscreening.hrsa.gov/conditions/citrullinemia',
    },
  ],
  symptoms:
    '<p>可表现为新生儿喂养困难、呕吐、嗜睡、惊厥、意识改变，也可有胆汁淤积、肝功能异常或成人神经精神发作。</p>',
  diagnosis:
    '<p>评估通常包括新生儿筛查复查、血氨、氨基酸谱、尿有机酸、肝功能、凝血功能和 ASS1/SLC25A13 等基因检测。</p>',
  treatment:
    '<p>管理需要遗传代谢专科制定营养、监测、降氨和急性发作方案；急性意识改变或惊厥应按代谢急症处理。</p>',
  prognosis:
    '<p>早期识别和规范管理可降低代谢危象和神经系统损伤风险，但预后受类型、起病年龄、危象严重程度和治疗可及性影响。</p>',
  sourceName: 'GeneReviews: Citrullinemia Type I',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 318,
    name: 'citrullinemia-journey.png',
    url: '/images/diseases/citrullinemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

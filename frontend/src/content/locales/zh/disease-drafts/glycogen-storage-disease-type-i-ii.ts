import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlycogenStorageDiseaseTypeIIi: DiseaseDraft = {
  ...entity(37, 'disease-glycogen-storage-disease-type-i-ii'),
  name: '糖原累积病（I 型、II 型）',
  nameEn: 'Glycogen Storage Disease (Type I, II)',
  alias: '糖原贮积病 I 型、GSD I、Pompe disease、庞贝病、GSD II',
  slug: 'glycogen-storage-disease-type-i-ii',
  oneSentence:
    '糖原累积病 I 型和 II 型都是遗传性糖原代谢病，但 I 型主要影响血糖和肝肾代谢，II 型（庞贝病）主要影响心肌、骨骼肌和呼吸肌。',
  plainName: '身体处理糖原出问题的一组遗传代谢病，I 型和 II 型就医路径不同',
  prevalence:
    '均属于罕见病。不同国家和筛查体系下发病率估计差异较大，部分地区已纳入新生儿筛查或高危筛查。',
  quickLook: {
    whatItIs:
      '目录把 I 型和 II 型放在同一项，但它们是两类机制不同的病。GSD I 影响维持血糖的代谢通路；GSD II 也叫庞贝病，是溶酶体内酸性 α-葡萄糖苷酶缺乏导致糖原在肌肉等组织堆积。',
    whoToSeeFirst:
      '反复低血糖、肝大、乳酸/尿酸/甘油三酯异常时看遗传代谢科、儿科内分泌或儿童消化肝病；婴儿心肌肥厚、肌无力、喂养差或成人近端肌无力、呼吸无力时看遗传代谢科、神经肌肉专科或儿科心脏/呼吸科。',
    isGenetic:
      '是，I 型和 II 型通常均为常染色体隐性遗传，但涉及基因和检测路径不同。',
    hasTreatment:
      '有专科管理方案。GSD I 重点是避免低血糖和代谢失衡；庞贝病可评估酶替代治疗、呼吸和肌力管理。具体方案应由专科制定。',
    commonDelayReason:
      'GSD I 可能被当作普通低血糖、肝病或营养问题；庞贝病可能被当作肌病、心肌病、发育迟缓或呼吸问题，若不做酶活和基因检测容易延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿禁食后低血糖、惊厥、肝大、腹部膨隆、生长迟缓或乳酸/尿酸/血脂异常，提示 GSD I 方向。',
      'GSD Ib 还可有反复感染、口腔或肠道溃疡、中性粒细胞减少等线索。',
      '婴儿肌张力低、喂养差、心肌肥厚、心大、呼吸困难或运动发育落后，提示婴儿型庞贝病方向。',
      '儿童或成人近端肌无力、上楼起立困难、疲劳、夜间通气不足或不明原因呼吸功能下降，提示迟发型庞贝病方向。',
      '新生儿筛查、酶活或家族基因结果提示糖原累积病风险。',
    ],
    commonWrongTurns: [
      '把 GSD I 的低血糖当作普通喂养间隔太长，没有同时看肝大和乳酸/尿酸/血脂。',
      '只按脂肪肝或肝大处理，没有追查糖原代谢病。',
      '把庞贝病婴儿的心肌肥厚和肌无力分散到心内、呼吸、康复就诊，没有统一到代谢肌病诊断。',
      '成人迟发型庞贝病长期按普通腰腿无力、肌炎或运动不足处理，未评估呼吸肌。',
    ],
    firstDepartments: [
      '遗传代谢科/医学遗传科',
      '儿科内分泌科或儿童消化肝病科（GSD I 方向）',
      '神经内科神经肌肉专科（庞贝病方向）',
      '儿科心脏科/心血管内科（心肌受累时）',
      '呼吸科和康复医学科',
    ],
    diagnosisChecklist: [
      '先请医生判断更像 GSD I、庞贝病，还是其他糖原累积病。',
      '保存低血糖发作时的血糖、乳酸、酮体、尿酸、血脂、肝功能和影像资料。',
      '疑似 GSD I 时询问 G6PC、SLC37A4 等基因检测。',
      '疑似庞贝病时询问 GAA 酶活、GAA 基因、CK、心脏和呼吸肌评估。',
      '准备禁食、感染、手术、麻醉或呼吸困难时的专科应急说明。',
    ],
    testsToAskAbout: [
      '低血糖相关代谢检查、乳酸、尿酸、甘油三酯、肝肾功能。',
      '腹部超声或肝肾影像，必要时肝腺瘤监测。',
      'GSD I 相关基因检测。',
      'GAA 酶活、GAA 基因检测、CK、尿 Hex4 等庞贝病相关评估。',
      '心电图、心脏超声、肺功能和睡眠呼吸评估。',
    ],
    questionsForDoctor: [
      '目前更符合 I 型、II 型，还是其他糖原累积病？依据是什么？',
      '家里需要怎样避免禁食或低血糖？生病时方案如何执行？',
      '如果是庞贝病，心脏、呼吸肌和运动功能现在受累到什么程度？',
      '是否需要特异性治疗评估？治疗目标和监测指标是什么？',
      '家属筛查和再次生育风险需要怎样安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GSD I 常见线索包括婴幼儿禁食不耐受、低血糖、肝大、腹部膨隆、生长迟缓、乳酸酸中毒、尿酸和血脂异常；GSD Ib 还可有中性粒细胞减少和反复感染。GSD II（庞贝病）婴儿型可有肌张力低、喂养困难、心肌肥厚、呼吸困难和运动发育落后；迟发型多表现为近端肌无力、疲劳和呼吸肌受累。</p>',
    diagnosis:
      '<p>诊断首先要明确是哪一型。GSD I 评估重点包括低血糖代谢谱、肝肾受累和 G6PC/SLC37A4 等基因检测。庞贝病评估重点包括 GAA 酶活、GAA 基因检测、肌酶、心脏和呼吸评估。医生还会鉴别其他糖原累积病、脂肪酸氧化障碍、线粒体病、肌营养不良和内分泌性低血糖。</p>',
    treatment:
      '<p>GSD I 管理以避免低血糖和代谢失衡、营养方案、肝肾和感染风险随访为核心。庞贝病管理包括酶替代治疗评估、心肺功能、运动和康复支持、呼吸管理和并发症监测。两类疾病都需要专科团队制定书面日常和应急方案。</p>',
    longTermCare:
      '<p>长期照护需要保存诊断、基因、酶活、营养方案、心肺评估和影像随访。GSD I 关注低血糖预防、肝肾并发症和代谢指标；庞贝病关注心脏、呼吸肌、运动功能、睡眠呼吸和治疗反应。</p>',
    fertilityOrFamily:
      '<p>GSD I 和庞贝病通常均为常染色体隐性遗传。明确致病变异后，父母、兄弟姐妹和有生育计划的亲属可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>GSD I 患者出现不能进食、反复呕吐、低血糖、嗜睡、抽搐或感染时应急诊。庞贝病患者出现呼吸困难、喂养明显变差、心衰线索、夜间低通气或感染后呼吸加重时应尽快就医，并说明具体糖原累积病类型。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Glycogen Storage Disease Type I',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
    },
    {
      name: 'GeneReviews: Pompe Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1261/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Glycogen Storage Disease Type II',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470558/',
    },
  ],
  symptoms:
    '<p>I 型主要表现为低血糖、肝大、乳酸/尿酸/血脂异常；II 型庞贝病主要表现为肌无力、心肌或呼吸肌受累。</p>',
  diagnosis:
    '<p>评估需先区分类型：I 型看代谢指标和 GSD I 相关基因；II 型看 GAA 酶活、GAA 基因、心肺和肌肉评估。</p>',
  treatment:
    '<p>管理包括代谢营养方案、应急计划、心肺和肌肉随访，以及庞贝病特异性治疗评估。</p>',
  prognosis:
    '<p>预后取决于具体类型、起病年龄、筛查和治疗时机、心肺或肝肾并发症及长期随访质量。</p>',
  sourceName: 'GeneReviews: Glycogen Storage Disease Type I',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 336,
    name: 'glycogen-storage-disease-type-i-ii-journey.png',
    url: '/images/diseases/glycogen-storage-disease-type-i-ii-journey.png',
  },
  tagSlugs: ['genetic-counseling', 'neuromuscular'],
};

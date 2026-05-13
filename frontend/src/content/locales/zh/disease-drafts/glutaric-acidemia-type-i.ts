import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGlutaricAcidemiaTypeI: DiseaseDraft = {
  ...entity(36, 'disease-glutaric-acidemia-type-i'),
  name: '戊二酸血症 I 型',
  nameEn: 'Glutaric Acidemia Type I',
  alias: 'GA-1、戊二酸尿症 I 型、GCDH 缺乏症、Glutaric aciduria type 1',
  slug: 'glutaric-acidemia-type-i',
  oneSentence:
    '戊二酸血症 I 型是一种有机酸代谢病，未及时识别时可在婴幼儿感染或禁食后发生急性脑损伤和运动障碍。',
  plainName: '某些氨基酸代谢异常，可能伤害基底节的遗传代谢病',
  prevalence:
    '总体罕见，不同地区和人群差异较大；许多地区可通过新生儿筛查发现线索。',
  quickLook: {
    whatItIs:
      'GCDH 酶功能不足会影响赖氨酸、羟赖氨酸和色氨酸代谢，相关代谢物积累后可增加脑部，尤其是基底节损伤风险。',
    whoToSeeFirst:
      '新生儿筛查阳性、婴儿头围偏大、发育倒退、肌张力异常，或感染/禁食后突然运动异常时，应尽快到遗传代谢科、儿科神经或新生儿/儿科急诊。',
    isGenetic: '是，通常为常染色体隐性遗传，与 GCDH 双等位致病变异有关。',
    hasTreatment:
      '有代谢专科管理方案，关键是早期识别、营养和代谢管理、感染或禁食时的应急方案，以及长期神经发育随访。',
    commonDelayReason:
      '早期可能只有大头围或轻微发育线索；急性发作常被当作普通感染、惊厥或脑炎，如果没有结合新生儿筛查和有机酸检查，容易错过窗口。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查提示 C5DC 或相关有机酸代谢异常。',
      '婴儿头围偏大或快速增长，尤其伴发育迟缓或肌张力异常。',
      '感染、发热、呕吐、禁食或手术后出现嗜睡、喂养差、发育倒退或异常运动。',
      '脑 MRI 提示基底节损伤、额颞部脑外间隙增宽或与 GA-1 相符的影像线索。',
      '家族中有 GA-1、婴幼儿急性脑病、运动障碍或近亲婚配史。',
    ],
    commonWrongTurns: [
      '筛查阳性后没有及时复查和转诊代谢专科。',
      '把大头围只当作家族性头大，没有结合代谢病和 MRI 线索。',
      '急性发作时只按感染或脑炎处理，没有启动代谢危象评估。',
      '确诊后缺少书面生病/禁食应急方案，反复在感染时出现风险。',
    ],
    firstDepartments: [
      '遗传代谢科/医学遗传科',
      '新生儿科/儿科急诊',
      '儿科神经内科',
      '营养科（在代谢专科指导下）',
      '康复医学科（运动障碍或发育问题时）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查、复查通知、血酰基肉碱、尿有机酸和基因报告。',
      '记录头围、发育里程碑、感染/禁食事件和是否出现运动倒退。',
      '询问是否需要 GCDH 基因检测或酶活检测确认。',
      '准备发热、呕吐、手术、不能进食时的书面急诊方案。',
      '安排神经发育、运动障碍、营养和肾功能长期随访。',
    ],
    testsToAskAbout: [
      '血酰基肉碱谱，尤其 C5DC。',
      '尿有机酸或定量戊二酸、3-羟基戊二酸。',
      'GCDH 基因检测，必要时酶活检测。',
      '脑 MRI 和神经发育评估。',
      '营养状态、氨基酸、肉碱和肾功能监测。',
    ],
    questionsForDoctor: [
      '孩子的结果是否已经能确认 GA-1？还缺哪些确认检查？',
      '日常饮食和营养随访应由谁负责？哪些情况不能在家观察？',
      '发热、呕吐、疫苗后不适或手术禁食时，应急方案怎么执行？',
      '是否已有脑部或运动系统受累？需要康复或神经科随访吗？',
      '兄弟姐妹和未来生育需要哪些遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GA-1 可在新生儿筛查阶段发现，也可表现为头围偏大、喂养问题、肌张力异常、发育迟缓或运动障碍。未及时管理的婴幼儿可在感染、禁食或其他应激后发生急性脑病样发作，随后出现肌张力障碍、舞蹈样动作、运动倒退等复杂运动问题。</p>',
    diagnosis:
      '<p>诊断通常结合新生儿筛查、血酰基肉碱、尿有机酸或定量代谢物、脑 MRI 和 GCDH 基因检测。若分子结果不明确，专科可能考虑酶活检测。医生还会与其他有机酸血症、脑炎、线粒体病和其他运动障碍鉴别。</p>',
    treatment:
      '<p>管理需要遗传代谢团队参与，包括个体化营养方案、肉碱和相关代谢管理、感染或禁食时的应急处理、发育和运动障碍随访。具体饮食、补充和急诊处理应按专科书面方案执行。</p>',
    longTermCare:
      '<p>长期照护重点是避免分解代谢状态、监测生长营养、发育和运动功能、肾功能，以及让家庭、学校和急诊医生都能看到清楚的应急说明。已出现运动障碍者需要康复、神经科和营养团队长期配合。</p>',
    fertilityOrFamily:
      '<p>GA-1 为常染色体隐性遗传。明确 GCDH 变异后，父母、兄弟姐妹和有生育计划的亲属可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>发热感染、反复呕吐、不能进食、嗜睡、肌张力突然改变、抽搐、发育倒退或异常运动，应尽快就医并说明 GA-1 或疑似有机酸代谢病风险，避免长时间禁食。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Glutaric Acidemia Type 1',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
    },
    {
      name: 'MedlinePlus Genetics: Glutaric acidemia type I',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/glutaric-acidemia-type-i/',
    },
  ],
  symptoms:
    '<p>可表现为筛查异常、大头围、发育迟缓、感染或禁食后急性脑病样发作、运动倒退和肌张力障碍。</p>',
  diagnosis:
    '<p>评估包括血酰基肉碱、尿有机酸或定量代谢物、GCDH 基因检测、必要时酶活检测和脑 MRI。</p>',
  treatment:
    '<p>管理依赖遗传代谢专科，包括营养和代谢管理、应急方案、发育/运动随访和家庭教育。</p>',
  prognosis:
    '<p>早期筛查和规范管理可显著降低急性脑损伤风险；已有神经受累者需要长期康复和随访。</p>',
  sourceName: 'GeneReviews: Glutaric Acidemia Type 1',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 335,
    name: 'glutaric-acidemia-type-i-journey.png',
    url: '/images/diseases/glutaric-acidemia-type-i-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

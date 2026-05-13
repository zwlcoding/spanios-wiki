import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseArginaseDeficiency: DiseaseDraft = {
  ...entity(8, 'disease-arginase-deficiency'),
  name: '精氨酸酶缺乏症',
  nameEn: 'Arginase Deficiency',
  alias: 'ARG1 缺乏症、高精氨酸血症、精氨酸血症',
  slug: 'arginase-deficiency',
  oneSentence:
    '精氨酸酶缺乏症是一种尿素循环相关遗传代谢病，常以儿童期逐渐出现的痉挛、发育停滞或倒退、癫痫和精氨酸升高为线索。',
  plainName: '精氨酸代谢异常导致的遗传代谢病',
  prevalence:
    '属于极罕见病，患病率估计低，且受新生儿筛查覆盖和诊断可及性影响。',
  quickLook: {
    whatItIs:
      'ARG1 基因相关的精氨酸酶功能不足会让精氨酸等代谢物异常升高。与一些尿素循环病不同，它常不是新生儿期严重高氨起病，而是在幼儿期逐渐出现运动和认知问题。',
    whoToSeeFirst:
      '儿童优先看儿科或儿童遗传代谢科；出现痉挛、癫痫或发育倒退时可联合小儿神经内科和康复科。',
    isGenetic:
      '通常为常染色体隐性遗传。父母多为携带者，再次生育风险需要结合基因检测和遗传咨询判断。',
    hasTreatment:
      '需要遗传代谢专科长期管理，通常围绕饮食、氨和氨基酸监测、药物评估、康复和急性代谢失衡处理。具体方案应由专科医生制定。',
    commonDelayReason:
      '孩子早期可能发育基本正常，随后才出现痉挛、走路异常或学习倒退，容易被当作脑瘫、遗传性痉挛性截瘫或癫痫单独处理。',
  },
  patientJourney: {
    whenToSuspect: [
      '1-3 岁后出现走路僵硬、剪刀步、踮脚或下肢痉挛逐渐加重。',
      '发育停滞或倒退，原本会的运动、语言或认知能力变差。',
      '癫痫、反复呕吐、嗜睡或不明原因精神状态改变。',
      '血氨、血浆氨基酸或新生儿筛查提示精氨酸异常升高。',
      '兄弟姐妹或家族中有类似代谢病、早夭或不明原因神经退行。',
    ],
    commonWrongTurns: [
      '长期按脑瘫或单纯康复治疗，没有做血氨和氨基酸分析。',
      '只处理癫痫，没有追查代谢原因。',
      '认为孩子“发育慢”，没有记录倒退和痉挛进展。',
      '饮食和药物调整没有由遗传代谢专科随访，导致营养或代谢风险增加。',
    ],
    firstDepartments: [
      '儿童遗传代谢科',
      '儿科',
      '小儿神经内科',
      '康复医学科',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '整理新生儿筛查、血氨、血浆氨基酸、尿有机酸、肝功能和营养指标。',
      '记录运动、语言、认知发育时间线，以及痉挛、癫痫和倒退出现时间。',
      '带上既往脑部影像、脑电图、康复评估和用药记录。',
      '向医生确认是否需要 ARG1 基因检测和父母携带者验证。',
    ],
    testsToAskAbout: [
      '血浆氨基酸分析，重点关注精氨酸水平。',
      '血氨、肝功能、营养和代谢稳定性评估。',
      '尿有机酸、乳酸、酰基肉碱等鉴别检查。',
      'ARG1 基因检测及家系验证。',
      '神经发育、肌张力、步态和康复评估。',
    ],
    questionsForDoctor: [
      '孩子的血氨和精氨酸控制目标是什么？多久复查？',
      '饮食限制如何兼顾代谢控制和生长发育？',
      '发热、呕吐、拒食时应如何联系医院或急诊？',
      '康复训练应重点改善哪些功能？',
      '家里其他孩子或未来生育是否需要检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>精氨酸酶缺乏症常在婴幼儿或儿童期表现为下肢痉挛、步态异常、发育停滞或倒退、学习困难、癫痫、身材增长受影响等。急性高氨可出现呕吐、嗜睡、意识改变或抽搐，但有些患者高氨并不典型。</p>',
    diagnosis:
      '<p>诊断通常基于血浆精氨酸升高、血氨和其他代谢检查、临床神经表现，并通过 ARG1 基因检测确认。医生会同时排除脑瘫、遗传性痉挛性截瘫、其他尿素循环病和神经退行性疾病。</p>',
    treatment:
      '<p>治疗需要遗传代谢专科管理，通常包括个体化饮食、氨和氨基酸监测、必要的氮清除相关治疗、癫痫和痉挛管理、康复训练及急性期处理方案。不要自行调整蛋白摄入或药物。</p>',
    longTermCare:
      '<p>长期随访重点包括代谢稳定性、生长营养、运动功能、认知语言、癫痫、肝功能和家庭急救计划。学校和康复资源应围绕实际运动和学习能力进行支持。</p>',
    fertilityOrFamily:
      '<p>本病通常为常染色体隐性遗传。确诊后建议父母和相关家属进行遗传咨询，讨论携带者检测、再次生育风险和产前/胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>出现嗜睡难以唤醒、反复呕吐、抽搐、意识改变、呼吸节律异常，或发热伴明显进食减少时，应尽快急诊并告知医生既往代谢病史，以便评估血氨和急性代谢失衡。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Arginase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1159/',
    },
    {
      name: 'Orphanet: Hyperargininemia',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/1897',
    },
    {
      name: 'NORD: Arginase Deficiency',
      type: 'patient-organization',
      url: 'https://rarediseases.org/rare-diseases/arginase-deficiency/',
    },
  ],
  symptoms:
    '<p>常见线索包括下肢痉挛、步态异常、发育停滞或倒退、癫痫和精氨酸升高。</p>',
  diagnosis:
    '<p>评估通常包括血浆氨基酸、血氨、肝功能、尿有机酸、神经发育评估和 ARG1 基因检测。</p>',
  treatment:
    '<p>管理重点是遗传代谢专科随访、饮食和代谢监测、急性期预案、癫痫痉挛处理和康复支持。</p>',
  prognosis:
    '<p>早期识别和持续代谢管理有助于减少可避免的神经功能损害，但个体差异较大，需要长期随访。</p>',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 304,
    name: 'arginase-deficiency-journey.png',
    url: '/images/diseases/arginase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

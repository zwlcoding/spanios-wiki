import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGangliosidosis: DiseaseDraft = {
  ...entity(2030, 'disease-gangliosidosis'),
  name: '神经节苷脂贮积症',
  nameEn: 'Gangliosidosis',
  alias:
    'GM1神经节苷脂贮积症、GM2神经节苷脂贮积症、Tay-Sachs病、Sandhoff病、第二批罕见病目录第 30 项',
  slug: 'gangliosidosis',
  oneSentence:
    '神经节苷脂贮积症是一组常染色体隐性遗传的溶酶体贮积病，酶缺陷使 GM1 或 GM2 等物质在神经系统和其他组织内累积，导致发育倒退、运动障碍、癫痫和多系统受累。',
  plainName: '神经系统里“清理酶”不足、脂类物质越积越多的遗传代谢病',
  prevalence:
    '已纳入国家第二批罕见病目录；GM1 神经节苷脂贮积症据 MedlinePlus Genetics 估计约每 100,000-200,000 名新生儿 1 例，GM2 类型在不同族群中差异明显。',
  quickLook: {
    whatItIs:
      '这不是单一疾病，而是一组疾病。GM1 多与 GLB1/β-半乳糖苷酶不足有关；GM2 可与 HEXA、HEXB、GM2A 等导致的 β-己糖胺酶通路问题有关。最突出的是进行性神经退行性改变。',
    whoToSeeFirst:
      '婴幼儿发育停滞或倒退、肌张力异常、惊跳反应、癫痫、眼底樱桃红斑，或伴肝脾大、骨骼异常，应先看儿童神经科和遗传代谢门诊。',
    isGenetic:
      '多为常染色体隐性遗传。父母通常为携带者，确诊后应进行遗传咨询、父母验证和兄弟姐妹风险评估。',
    hasTreatment:
      '目前多数类型以支持治疗为主，包括癫痫、吞咽营养、呼吸、康复、疼痛和舒缓照护。部分疾病有临床研究，是否可参与需由遗传代谢团队评估。',
    commonDelayReason:
      '早期常被当作脑瘫、癫痫、孤独症、普通发育迟缓或不明原因退行性脑病。发育倒退加眼底、肝脾、骨骼或酶学线索时要考虑溶酶体贮积病。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿原本会抬头、翻身、坐或说话，随后技能停滞或倒退。',
      '出现肌张力低下或增高、惊跳反应、癫痫、视力下降、吞咽困难或反复肺部感染。',
      '眼底检查提示樱桃红斑，或有粗面容、肝脾大、骨骼发育异常、心肌病等多系统表现。',
      '家族中有类似发育倒退、儿童期死亡、近亲婚配或已知 GLB1/HEXA/HEXB 等变异。',
    ],
    commonWrongTurns: [
      '只按脑瘫或癫痫长期治疗，没有追问“已经获得的能力是否丢失”。',
      '只做脑 MRI 或脑电图，没有做眼底、酶学和遗传代谢评估。',
      '把喂养困难和反复肺炎当作单独问题，没有评估吞咽和神经退行性进展。',
      '确诊后没有给父母和兄弟姐妹做携带者/家系风险咨询。',
    ],
    firstDepartments: ['儿童神经科', '遗传代谢门诊', '康复医学科', '儿童眼科'],
    diagnosisChecklist: [
      '按月龄列出发育里程碑、何时停滞或倒退、癫痫类型和用药反应。',
      '带脑 MRI、脑电图、眼底检查、听力、心脏、腹部超声、骨骼影像和代谢筛查结果。',
      '记录喂养、吞咽、呛咳、肺炎、睡眠、疼痛、肌张力和营养变化。',
      '整理家族中儿童发育倒退、早逝、近亲婚配或已知携带者信息。',
    ],
    testsToAskAbout: [
      '白细胞或成纤维细胞相关酶活性检测，如 β-半乳糖苷酶、β-己糖胺酶 A/B 等。',
      'GLB1、HEXA、HEXB、GM2A 等相关基因检测及父母验证。',
      '眼底检查樱桃红斑，脑 MRI、脑电图、听力、心脏、肝脾和骨骼评估。',
      '吞咽评估、营养评估、呼吸睡眠评估和癫痫治疗方案复核。',
    ],
    questionsForDoctor: [
      '属于 GM1、Tay-Sachs、Sandhoff 还是其他 GM2 相关类型？发病型别如何判断？',
      '目前最需要处理的是癫痫、吞咽营养、呼吸、疼痛还是康复？',
      '有没有适合的临床研究或专病中心？支持治疗目标如何设定？',
      '父母和兄弟姐妹需要做哪些检测？再次生育前有哪些选择？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>神经节苷脂贮积症常表现为进行性神经系统受累。婴儿型可出现发育停滞或倒退、肌张力异常、惊跳反应、癫痫、视力下降、喂养和吞咽困难、反复呼吸道感染。</p><p>部分患者有眼底樱桃红斑、肝脾大、粗面容、骨骼发育异常、心肌病或听力问题。晚发型可能表现为共济失调、肌张力障碍、语言和认知退行、精神行为问题或运动功能逐步下降。</p>',
    diagnosis:
      '<p>诊断要把临床进展、眼底和影像线索、酶活性检测和基因检测结合起来。GM1 通常检测 β-半乳糖苷酶和 GLB1；GM2 相关疾病需评估 β-己糖胺酶 A/B 及 HEXA、HEXB、GM2A 等基因。</p><p>鉴别诊断包括神经元蜡样质脂褐质沉积症、线粒体病、其他溶酶体贮积病、遗传性癫痫脑病、脑瘫和退行性白质脑病。</p>',
    treatment:
      '<p>多数类型目前以支持治疗为主，重点包括癫痫控制、营养和吞咽管理、反流和便秘处理、呼吸道感染预防、康复、疼痛和痉挛管理，以及家庭照护支持。</p><p>一些底物减少、酶替代、基因治疗或其他策略仍在研究或特定地区/试验中探索。是否适合参与临床研究，需要由遗传代谢团队结合类型、年龄和病程判断。</p>',
    longTermCare:
      '<p>长期管理应围绕功能、舒适和家庭目标制定，定期评估癫痫、吞咽、营养、呼吸、睡眠、疼痛、肌张力、视听功能和照护负担。进展期应提前讨论急救边界、舒缓照护和家庭支持。</p>',
    fertilityOrFamily:
      '<p>神经节苷脂贮积症多为常染色体隐性遗传。父母通常是携带者，每次妊娠的复发风险需按具体基因结果解释。</p><p>明确家族变异后，可为兄弟姐妹和高风险亲属提供携带者检测，并讨论产前诊断或胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>持续或成串抽搐、呼吸困难、明显呛咳窒息、反复发绀、严重脱水、感染伴精神反应差、喂养无法维持、疼痛难以控制或照护者无法安全照护时，应及时急诊或联系主管团队。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: GM1 gangliosidosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gm1-gangliosidosis/',
    },
    {
      name: 'MedlinePlus Genetics: HEXA gene',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/gene/hexa/',
    },
  ],
  symptoms:
    '<p>常见表现包括发育停滞或倒退、肌张力异常、惊跳反应、癫痫、视力下降、吞咽困难、反复肺部感染，以及眼底樱桃红斑、肝脾大、骨骼或心脏受累。</p>',
  diagnosis:
    '<p>诊断依靠临床进展、眼底和影像评估、相关酶活性检测，以及 GLB1、HEXA、HEXB、GM2A 等基因检测。</p>',
  treatment:
    '<p>多数类型以支持治疗为主，包括癫痫、吞咽营养、呼吸、康复、疼痛和舒缓照护；临床研究或实验性治疗需由遗传代谢团队评估。</p>',
  prognosis:
    '<p>预后取决于具体类型和发病年龄。早发型通常进展较快，晚发型可较慢；早期诊断有助于减少重复检查、优化支持照护并完成家族风险管理。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 384,
    name: 'gangliosidosis-journey.png',
    url: '/images/diseases/gangliosidosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

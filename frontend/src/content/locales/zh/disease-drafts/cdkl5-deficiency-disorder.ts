import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCdkl5DeficiencyDisorder: DiseaseDraft = {
  ...entity(2011, 'disease-cdkl5-deficiency-disorder'),
  name: 'CDKL5缺乏症',
  nameEn: 'CDKL5-deficiency disorder',
  alias:
    'CDD、CDKL5相关发育性癫痫性脑病、早发癫痫性脑病2型、第二批罕见病目录第 11 项',
  slug: 'cdkl5-deficiency-disorder',
  oneSentence:
    'CDKL5缺乏症是一种多在婴儿早期出现癫痫发作和发育迟缓的罕见 X 连锁显性遗传病，核心是 CDKL5 基因功能不足影响脑发育。',
  plainName: '婴儿早期癫痫和发育受影响的遗传性神经发育病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计发病率约为每 40,000-60,000 名新生儿 1 例，约 90% 已诊断患者为女孩。',
  quickLook: {
    whatItIs:
      'CDKL5 基因参与脑发育和神经细胞功能。致病变异会造成早发、常较难控制的癫痫，并伴随运动、语言、认知、视觉、喂养和睡眠等多方面发育问题。',
    whoToSeeFirst:
      '婴儿早期反复发作、发育明显落后或肌张力异常，应尽快看儿科神经/癫痫专科；同时需要康复、眼科、营养和遗传咨询共同管理。',
    isGenetic:
      '属于 X 连锁显性遗传病，多数为新发变异，家族中没有类似患者也可能发生。确诊后仍建议做遗传咨询，了解父母检测、再发风险和生育选择。',
    hasTreatment:
      '目前治疗重点是减少发作、保护发育功能和处理并发症。抗癫痫药、专科可及的新药、营养/喂养支持、康复训练、视觉支持和家庭照护计划都可能参与。',
    commonDelayReason:
      '早期可能被当作普通婴儿惊厥、难治性癫痫或 Rett 综合征样表现处理；如果没有把早发癫痫、发育迟缓和基因检测放在一起评估，确诊会延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生后数周到数月内出现反复抽搐、痉挛样发作、发作后反应差，或抗癫痫治疗效果不稳定。',
      '抬头、翻身、坐、站、走、抓握、眼神交流或语言发育明显落后。',
      '伴有肌张力低、手部刻板动作、睡眠紊乱、喂养困难、便秘、胃食管反流或视觉反应差。',
      '曾被怀疑 Rett 综合征、婴儿痉挛或其他发育性癫痫性脑病，但常规检查解释不充分。',
    ],
    commonWrongTurns: [
      '只反复更换抗癫痫药，没有尽早做癫痫基因检测。',
      '把发育迟缓归因于“癫痫控制不好”，没有同步启动康复和多学科评估。',
      '只看发作次数，没有记录发作视频、睡眠、喂养、呼吸、视觉和胃肠问题。',
      '确诊后没有让父母了解新发变异、低比例嵌合和再次生育风险。',
    ],
    firstDepartments: [
      '儿科神经科/癫痫中心',
      '医学遗传科',
      '儿童康复科',
      '儿童眼科/低视力门诊',
    ],
    diagnosisChecklist: [
      '整理出生史、首次发作年龄、发作视频、发作频率、诱因、用药剂量和疗效。',
      '带齐脑电图、头颅 MRI、代谢筛查、住院记录、急诊记录和既往基因检测报告。',
      '记录发育里程碑、喂养、睡眠、呼吸、便秘/反流、视觉反应和康复训练情况。',
      '准备父母和兄弟姐妹健康信息，便于医生判断是否需要家系验证。',
    ],
    testsToAskAbout: [
      '长程视频脑电图，用于区分发作类型和调整抗癫痫方案。',
      '癫痫/神经发育相关基因 panel、外显子组或针对 CDKL5 的变异验证。',
      '头颅 MRI、发育评估、吞咽/营养评估、眼科视觉评估和骨骼/脊柱随访。',
      '确诊后父母样本验证、遗传咨询和必要的复发风险评估。',
    ],
    questionsForDoctor: [
      '孩子的发作类型是什么？目前治疗目标是完全控制、减少发作，还是降低严重发作风险？',
      '是否已经覆盖 CDKL5 和其他发育性癫痫性脑病相关基因？结果如何解释？',
      '哪些药物、饮食治疗、神经调控或新药选择适合现在的阶段？',
      '康复、视觉、喂养、睡眠和骨骼问题应如何排期随访？',
      '父母是否需要检测？再次生育前可以做哪些咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>CDKL5缺乏症的典型线索是婴儿早期出现癫痫发作，常在出生后前几个月开始，发作类型可随年龄改变，并可能较难控制。很多孩子同时有明显发育迟缓或发育停滞，表现为运动、语言、认知、手部精细动作和眼神交流受影响。</p><p>其他常见问题包括肌张力低、手部刻板动作、睡眠紊乱、喂养困难、胃食管反流、便秘、视觉反应差或皮质视觉障碍。不同孩子严重程度差异较大，女孩更常见，男孩也可以患病。</p>',
    diagnosis:
      '<p>诊断需要把早发癫痫、神经发育评估、脑电图、影像和基因检测放在一起判断。发现 CDKL5 致病或可能致病变异，并且临床表现符合时，通常可支持诊断。</p><p>医生还会排除或区分 Rett 综合征、其他发育性癫痫性脑病、代谢病和结构性脑病。基因结果需要结合父母验证和变异解释，不能只看报告上的单个词语。</p>',
    treatment:
      '<p>治疗以多学科长期管理为主。癫痫控制可能需要多种抗癫痫药物组合，部分地区或患者可由专科评估是否适合特定新药、 ketogenic diet、迷走神经刺激等方案。任何调整都应由癫痫专科根据发作类型和安全性决定。</p><p>同样重要的是康复训练、姿势和吞咽管理、营养支持、睡眠处理、便秘/反流管理、视觉支持、骨密度和脊柱监测，以及给照护者建立急救计划。</p>',
    longTermCare:
      '<p>长期随访应记录发作频率、发作视频、急救药使用、药物副作用、发育目标、营养体重、睡眠、呼吸、胃肠和骨骼问题。照护目标通常是减少严重发作、保留功能、预防并发症和提高生活质量。</p><p>家庭需要知道何时急诊、如何使用急救药、如何与幼儿园/学校/康复机构共享照护计划，并定期复核药物和康复目标。</p>',
    fertilityOrFamily:
      '<p>多数病例来自新发 CDKL5 变异，但父母低比例嵌合仍可能影响再发风险。确诊后建议遗传咨询，讨论父母检测、兄弟姐妹风险和再次生育前的选择。</p><p>家族中有早发癫痫、发育迟缓或不明原因婴幼儿死亡史时，应主动告诉遗传医生。</p>',
    emergencySigns:
      '<p>持续发作超过医生设定的时间、连续发作不恢复、呼吸发紫、明显嗜睡或意识改变、严重脱水、反复呕吐不能进食、误吸或高热伴发作增加，应立即急诊。就诊时携带诊断名称、用药清单和急救方案。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: CDKL5 deficiency disorder',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/cdkl5-deficiency-disorder/',
    },
  ],
  symptoms:
    '<p>常见线索是出生后前几个月出现难治性癫痫发作，并伴运动、语言、认知、视觉、喂养、睡眠或胃肠发育问题。</p>',
  diagnosis:
    '<p>诊断依靠临床表现、脑电图和神经发育评估，并通过 CDKL5 相关基因检测及家系验证确认。</p>',
  treatment:
    '<p>治疗以癫痫专科用药和多学科支持为主，同时关注康复、营养喂养、视觉、睡眠、胃肠、骨骼和家庭急救计划。</p>',
  prognosis:
    '<p>多数患者需要长期照护，发作和发育问题可持续存在；早期识别、规范抗癫痫管理和持续康复可减少可避免风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 365,
    name: 'cdkl5-deficiency-disorder-journey.png',
    url: '/images/diseases/cdkl5-deficiency-disorder-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

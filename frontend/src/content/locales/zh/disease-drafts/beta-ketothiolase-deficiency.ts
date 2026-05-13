import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBetaKetothiolaseDeficiency: DiseaseDraft = {
  ...entity(14, 'disease-beta-ketothiolase-deficiency'),
  name: 'β-酮硫解酶缺乏症',
  nameEn: 'Beta-Ketothiolase Deficiency',
  alias:
    '3-酮硫解酶缺乏症、α-甲基乙酰乙酸尿症、T2 缺乏症、线粒体乙酰乙酰基辅酶 A 硫解酶缺乏症',
  slug: 'beta-ketothiolase-deficiency',
  oneSentence:
    'β-酮硫解酶缺乏症是一种罕见遗传代谢病，会影响异亮氨酸和酮体代谢，感染、禁食或应激时可能诱发酮症酸中毒。',
  plainName: '容易在感染或禁食时发生酮症酸中毒的遗传代谢病',
  prevalence:
    '非常罕见，公开医学文献中报告人数较少；不同地区的新生儿筛查覆盖和识别能力会影响发现率。',
  quickLook: {
    whatItIs:
      '这是一种与 ACAT1 基因相关的常染色体隐性遗传代谢病。相关酶功能不足时，身体处理异亮氨酸和酮体的能力受影响，某些代谢产物可在发热、感染、空腹或摄入较多蛋白后升高，引发急性代谢危象。',
    whoToSeeFirst:
      '儿童建议优先到遗传代谢科、儿科内分泌/代谢门诊评估；出现反复呕吐、嗜睡、呼吸急促、脱水或意识改变时应直接急诊。',
    isGenetic:
      '是，通常为常染色体隐性遗传。已确诊家庭建议进行遗传咨询，了解父母携带者检测和再次生育风险。',
    hasTreatment:
      '有管理方案，重点是避免长时间空腹、感染或呕吐时尽早处理、必要的饮食和营养管理，以及急性发作时的医院支持治疗。',
    commonDelayReason:
      '发作间期孩子可能看起来正常，急性期又容易被当作普通胃肠炎、脱水或糖尿病酮症酸中毒处理。如果没有做新生儿筛查复查、尿有机酸或酰基肉碱检查，诊断可能被延后。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿在感染、发热、长时间未进食后反复呕吐、精神差或嗜睡。',
      '出现不明原因酮症酸中毒，尤其血糖并不符合典型糖尿病酮症酸中毒时。',
      '呼吸变深变快、脱水、明显乏力或意识改变。',
      '新生儿筛查提示 C5-OH 等酰基肉碱异常，需要召回复查。',
      '家族中有类似代谢危象、婴幼儿期不明原因重症或夭折史。',
    ],
    commonWrongTurns: [
      '把反复呕吐和脱水反复当作普通胃肠炎处理，没有追查酮症酸中毒原因。',
      '只按糖尿病酮症酸中毒处理，没有进一步鉴别遗传代谢病。',
      '筛查阳性后没有及时复查，错过早期管理窗口。',
      '发作缓解后认为已经痊愈，没有建立发热、禁食或呕吐时的应急方案。',
    ],
    firstDepartments: [
      '遗传代谢科',
      '儿科内分泌/代谢门诊',
      '急诊科（出现代谢危象线索时）',
      '营养科（长期饮食和能量摄入管理）',
    ],
    diagnosisChecklist: [
      '整理每次发作的诱因、进食情况、呕吐、精神状态、呼吸变化和急诊检查结果。',
      '带上新生儿筛查报告、血气、电解质、血糖、尿酮、血酮、血氨和乳酸等资料。',
      '询问是否需要血酰基肉碱谱、尿有机酸分析和 ACAT1 基因检测。',
      '确认是否已有书面应急方案，特别是发热、呕吐、不能进食时该如何就医。',
    ],
    testsToAskAbout: [
      '血酰基肉碱谱，关注 C5-OH 等相关异常。',
      '尿有机酸分析，用于寻找有机酸代谢病线索。',
      '急性发作时的血气、电解质、血糖、血酮/尿酮、血氨和乳酸。',
      'ACAT1 基因检测及父母携带者检测。',
      '必要时评估神经系统受累情况和发育里程碑。',
    ],
    questionsForDoctor: [
      '这次发作更符合普通感染脱水，还是遗传代谢病相关酮症酸中毒？',
      '孩子是否需要长期避免长时间空腹？发热或呕吐时什么情况需要去急诊？',
      '日常饮食要注意哪些原则？是否需要营养科参与？',
      '我们是否需要携带急诊说明卡？说明卡上应该写哪些内容？',
      'ACAT1 检测结果对兄弟姐妹筛查和再次生育有什么意义？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>β-酮硫解酶缺乏症常在婴幼儿期出现急性酮症酸中毒发作。诱因可包括感染、发热、较长时间未进食或蛋白摄入变化。发作时可有反复呕吐、脱水、嗜睡、呼吸急促、惊厥或意识改变；发作间期可能没有明显症状。</p><p>严重或反复代谢危象可能影响神经系统发育，因此早期识别和建立应急处理路径很重要。</p>',
    diagnosis:
      '<p>诊断通常结合急性发作史、新生儿筛查、血酰基肉碱谱、尿有机酸分析和 ACAT1 基因检测。部分检测在发作期更容易显示异常，因此保存急诊时的血气、电解质、血糖、酮体、血氨和乳酸结果很有价值。</p>',
    treatment:
      '<p>长期管理重点是减少代谢危象诱因，例如避免长时间空腹、感染或呕吐时尽早补充能量并联系医生、根据专科意见进行饮食和营养管理。急性发作时通常需要医院内补液、纠正代谢紊乱和监测生命体征。具体饮食限制、补充剂和急诊处理应由遗传代谢专科个体化制定。</p>',
    longTermCare:
      '<p>家庭需要保存诊断报告、基因结果和急诊说明卡，并与主治医生确认发热、腹泻、呕吐、手术或不能进食时的处理流程。随访通常关注发作频率、生长发育、营养状态、代谢指标和神经发育。</p>',
    fertilityOrFamily:
      '<p>本病通常为常染色体隐性遗传。确诊后，父母、兄弟姐妹和未来生育计划可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>反复呕吐、不能进食、明显嗜睡、呼吸急促或深大呼吸、脱水、惊厥、意识改变，或感染发热后精神状态快速变差，都应尽快急诊就医，并主动告知医生已知或疑似 β-酮硫解酶缺乏症。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Beta-ketothiolase deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
    },
    {
      name: 'HRSA Newborn Screening: Beta-Ketothiolase Deficiency',
      type: 'official',
      url: 'https://newbornscreening.hrsa.gov/conditions/beta-ketothiolase-deficiency',
    },
    {
      name: 'Orphanet: Beta-ketothiolase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/134',
    },
  ],
  symptoms:
    '<p>典型线索是感染、禁食或应激后出现反复呕吐、脱水、嗜睡、呼吸急促和酮症酸中毒。</p>',
  diagnosis:
    '<p>评估通常包括新生儿筛查复核、血酰基肉碱谱、尿有机酸分析、急性期代谢指标和 ACAT1 基因检测。</p>',
  treatment:
    '<p>管理重点是避免长时间空腹、感染或呕吐时尽早处理、专科饮食营养管理，以及急性危象时医院支持治疗。</p>',
  prognosis:
    '<p>早期识别和规范应急处理有助于减少严重代谢危象和神经系统风险，但个体病程差异较大。</p>',
  sourceName: 'MedlinePlus Genetics',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 313,
    name: 'beta-ketothiolase-deficiency-journey.png',
    url: '/images/diseases/beta-ketothiolase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

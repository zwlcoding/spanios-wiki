import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseBiotinidaseDeficiency: DiseaseDraft = {
  ...entity(15, 'disease-biotinidase-deficiency'),
  name: '生物素酶缺乏症',
  nameEn: 'Biotinidase Deficiency',
  alias: 'BTD 缺乏症、迟发型多种羧化酶缺乏症',
  slug: 'biotinidase-deficiency',
  oneSentence:
    '生物素酶缺乏症是一种可通过新生儿筛查发现的遗传代谢病，及时补充生物素通常可以预防许多神经、皮肤和代谢问题。',
  plainName: '身体不能正常回收利用生物素的遗传病',
  prevalence:
    '属于罕见病，不同地区筛查数据差异较大。许多国家和地区已将其纳入新生儿筛查或遗传代谢病筛查范围。',
  searchIntents: [
    '生物素酶缺乏症 新生儿筛查阳性',
    'BTD 缺乏症 看什么科',
    '生物素酶活性低怎么复查',
    '生物素酶缺乏症 抽搐皮疹脱发',
    '生物素酶缺乏症 能不能停生物素',
  ],
  quickLook: {
    whatItIs:
      '生物素是一种维生素，参与多种代谢酶工作。生物素酶缺乏时，身体回收和利用生物素的能力下降，未治疗时可能影响神经系统、皮肤、头发、听力和视力。',
    whoToSeeFirst:
      '新生儿筛查异常或疑似症状时，建议优先到遗传代谢科、儿科内分泌/代谢门诊复查；抽搐、呼吸困难、意识改变时应急诊处理。',
    isGenetic:
      '是，通常为常染色体隐性遗传，与 BTD 基因变异有关。确诊家庭建议进行遗传咨询。',
    hasTreatment:
      '有明确管理方案，核心是医生指导下长期补充游离生物素，并进行发育、听力、视力和代谢随访。不要自行停用或更改补充方案。',
    commonDelayReason:
      '未纳入筛查或筛查后未及时复查时，症状可能被当作湿疹、癫痫、脑炎、发育迟缓或其他神经皮肤问题处理，导致诊断延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查提示生物素酶活性异常或需要召回复查。',
      '婴幼儿出现抽搐、肌张力低、喂养困难、发育落后，并伴有皮疹或脱发。',
      '反复湿疹样皮疹、脱发、真菌感染，同时有神经系统表现。',
      '出现不明原因听力下降、视神经问题或发育倒退。',
      '家族中已有生物素酶缺乏症或 BTD 致病变异携带者。',
    ],
    commonWrongTurns: [
      '把皮疹长期按普通湿疹处理，没有结合抽搐、脱发和发育线索。',
      '只按癫痫控制抽搐，没有排查可治疗的遗传代谢病。',
      '筛查异常后等待观察过久，没有按时完成复查。',
      '症状改善后自行停用生物素，导致复发风险增加。',
    ],
    firstDepartments: [
      '遗传代谢科',
      '儿科内分泌/代谢门诊',
      '急诊科（抽搐、呼吸困难或意识改变时）',
      '神经内科、皮肤科、耳鼻喉科或眼科（按受累系统协同评估）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查报告和复查通知。',
      '带上抽搐、皮疹、脱发、发育、听力和视力相关检查资料。',
      '确认是否做过血清生物素酶活性检测和 BTD 基因检测。',
      '向医生确认完全缺乏、部分缺乏或携带者状态，以及对应随访计划。',
    ],
    testsToAskAbout: [
      '血清生物素酶活性检测。',
      'BTD 基因检测及父母携带者检测。',
      '新生儿筛查复核和必要的代谢检测。',
      '有症状时评估听力、视力、神经发育和脑 MRI。',
      '抽搐或代谢危象时检查血气、电解质、血糖、乳酸、血氨和尿有机酸等。',
    ],
    questionsForDoctor: [
      '孩子属于完全缺乏还是部分缺乏？这会怎样影响长期随访？',
      '生物素需要长期补充到什么时候？哪些情况不能自行停用？',
      '已经出现的听力、视力或发育问题，有哪些康复和支持措施？',
      '发热、感染或不能进食时是否需要特殊处理？',
      '兄弟姐妹或未来生育需要做哪些遗传咨询和检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>未治疗的生物素酶缺乏症可出现抽搐、肌张力低、发育迟缓、皮疹、脱发、呼吸问题、喂养困难、听力下降或视神经受累。部分患者症状在感染、发热或其他应激后更明显。筛查和早期治疗可显著改变病程。</p>',
    diagnosis:
      '<p>诊断主要依据血清生物素酶活性检测，并可通过 BTD 基因检测确认分型和遗传风险。新生儿筛查异常并不等于已经确诊，但需要及时复查。已出现神经、皮肤、听力或视力问题时，还需要相应专科评估。</p>',
    treatment:
      '<p>治疗核心是医生指导下长期补充游离生物素。早期治疗通常可以预防许多症状；已经发生的听力或视力损害不一定完全恢复，因此越早识别越重要。具体补充剂量、复查频率和特殊情况处理需由遗传代谢专科制定。</p>',
    longTermCare:
      '<p>长期随访关注生长发育、神经系统、皮肤、听力、视力和依从性。家庭应保存诊断资料和用药说明，避免自行停用。进入幼儿园、学校或异地就医时，可准备简短病情说明，帮助照护者理解持续补充的重要性。</p>',
    fertilityOrFamily:
      '<p>本病通常为常染色体隐性遗传。确诊者家庭可通过遗传咨询了解父母携带者检测、兄弟姐妹筛查、再次生育风险、产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>抽搐持续、意识改变、呼吸困难、明显嗜睡、反复呕吐、低血糖或代谢性酸中毒线索，应尽快急诊就医，并主动告知医生疑似或确诊生物素酶缺乏症以及正在使用的补充方案。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Biotinidase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
    },
    {
      name: 'MedlinePlus Genetics: Biotinidase deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/biotinidase-deficiency/',
    },
    {
      name: 'HRSA Newborn Screening: Biotinidase Deficiency',
      type: 'official',
      url: 'https://newbornscreening.hrsa.gov/conditions/biotinidase-deficiency',
    },
  ],
  symptoms:
    '<p>未治疗时可出现抽搐、肌张力低、发育迟缓、皮疹、脱发、听力或视力问题。</p>',
  diagnosis:
    '<p>诊断主要依靠血清生物素酶活性检测，并可结合 BTD 基因检测确认遗传学结果。</p>',
  treatment:
    '<p>治疗核心是在医生指导下长期补充游离生物素，并持续关注发育、听力、视力和代谢安全。</p>',
  prognosis:
    '<p>早期筛查和持续治疗通常可以预防许多症状；已发生的听力或视力损害可能不完全可逆。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 314,
    name: 'biotinidase-deficiency-journey.png',
    url: '/images/diseases/biotinidase-deficiency-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

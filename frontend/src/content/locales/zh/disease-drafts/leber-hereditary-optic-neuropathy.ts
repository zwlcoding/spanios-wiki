import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLeberHereditaryOpticNeuropathy: DiseaseDraft = {
  ...entity(5008, 'disease-leber-hereditary-optic-neuropathy'),
  name: 'Leber遗传性视神经病变',
  nameEn: 'Leber Hereditary Optic Neuropathy',
  alias: 'LHON、Leber视神经萎缩、第一批罕见病目录第 62 项',
  slug: 'leber-hereditary-optic-neuropathy',
  oneSentence:
    'Leber遗传性视神经病变是一种母系遗传的线粒体疾病，因线粒体DNA突变导致视神经退行性变，表现为无痛性、亚急性中心视力丧失，多见于青年男性，目前尚无根治方法。',
  plainName: '一种从母亲遗传的导致视力突然下降的罕见眼病',
  prevalence:
    '患病率约 1/30,000–50,000；多见于 15–35 岁青年男性，男女比约 3:1–8:1。',
  searchIntents: [
    'Leber遗传性视神经病变 症状',
    'LHON 视力恢复',
    'Leber视神经萎缩 遗传',
    'LHON 治疗 艾地苯醌',
    'Leber 线粒体 基因',
  ],
  quickLook: {
    whatItIs:
      '线粒体 DNA（mtDNA）突变导致视网膜神经节细胞及其轴突变性，引起视神经萎缩和中心视力丧失。',
    whoToSeeFirst:
      '出现无痛性、进行性视力下降，尤其是中心视力模糊、色觉减退时，应到眼科神经眼科专科就诊。',
    isGenetic:
      '母系遗传（线粒体遗传），母亲的所有子女都可能携带突变，但男性更易发病；三种常见突变位点为 m.11778G>A、m.3460G>A、m.14484T>C。',
    hasTreatment:
      '目前无根治方法；艾地苯醌（idebenone）可能对部分急性期患者有帮助；基因治疗正在研究中；低视力辅助设备和康复训练可改善生活质量。',
    commonDelayReason:
      '早期症状（单眼视力轻度下降）常被误认为视疲劳或屈光不正；另一只眼尚未受累时容易漏诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '单眼无痛性、亚急性视力下降，中心视野出现暗点。',
      '色觉减退（尤其是红绿色觉）。',
      '数周至数月后另一只眼也出现类似症状。',
      '家族中有类似视力丧失病史（母系亲属）。',
    ],
    commonWrongTurns: [
      '当作普通视疲劳或近视加深，未做眼底和视野检查。',
      '误诊为视神经炎，给予大剂量激素治疗无效。',
      '未询问家族史，未考虑线粒体遗传病。',
      '延误转诊至神经眼科专科。',
    ],
    firstDepartments: ['眼科（神经眼科专科）', '医学遗传科', '低视力康复科'],
    diagnosisChecklist: [
      '详细记录视力下降的速度、程度和伴随症状。',
      '视力、色觉、视野检查（中心暗点是典型表现）。',
      '眼底检查：急性期可见视盘充血、血管迂曲；慢性期视盘苍白。',
      'OCT 检查视网膜神经纤维层变薄。',
      '线粒体 DNA 检测（三个常见突变位点）。',
      '询问母系家族史。',
    ],
    testsToAskAbout: [
      '视力、色觉、视野检查。',
      '眼底照相和 OCT。',
      '线粒体 DNA 突变检测。',
      'VEP（视觉诱发电位）。',
      '排除其他视神经病变（如视神经炎、缺血性视神经病变）。',
    ],
    questionsForDoctor: [
      '我的线粒体突变位点是哪个？对预后有什么影响？',
      '艾地苯醌对我有帮助吗？需要吃多久？',
      '另一只眼一定会发病吗？概率是多少？',
      '我的兄弟姐妹和后代需要筛查吗？',
      '有哪些低视力辅助设备可以帮助我？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>典型表现为单眼无痛性、亚急性中心视力下降，通常在数周至数月内进展。患者常描述中心视野有暗点（像一团云遮挡中心视力），辨色力减退（尤其是红绿色）。约 50% 的患者在首发眼发病后 6–8 周内另一只眼也受累。急性期眼底可见视盘充血、视网膜血管迂曲、视盘周围毛细血管扩张；慢性期视盘苍白萎缩。可伴有心脏传导异常（预激综合征）、骨骼肌病变或震颤等少见表现。</p>',
    diagnosis:
      '<p>诊断依据包括典型的临床表现（青年男性、无痛性亚急性双眼视力下降、中心暗点）、眼底检查和视野检查。OCT 显示视网膜神经纤维层（尤其是颞侧和上方）变薄。确诊需线粒体 DNA 检测，三种常见致病突变占 90% 以上：m.11778G>A（ND4 基因，预后最差）、m.3460G>A（ND1 基因）、m.14484T>C（ND6 基因，视力恢复可能性最大）。需与视神经炎、缺血性视神经病变、压迫性视神经病变等鉴别。</p>',
    treatment:
      '<p>目前尚无根治方法。艾地苯醌（idebenone）是一种线粒体辅酶 Q10 类似物，欧盟已批准用于 LHON 治疗，可能在急性期（发病 1 年内）对部分患者有一定帮助，但不能逆转已形成的视神经萎缩。避免吸烟和大量饮酒（已知诱因）。基因治疗（如 AAV2-ND4）正在临床试验中。低视力辅助设备（放大镜、电子助视器、屏幕阅读软件）和定向行走训练可显著改善生活质量。心理支持也很重要。</p>',
    longTermCare:
      '<p>定期眼科随访，监测视力变化和对侧眼情况。避免已知的诱发因素（吸烟、饮酒、某些药物如抗生素中的利奈唑胺和氨基糖苷类）。建议母系亲属进行基因筛查和遗传咨询。对于视力严重受损的患者，应尽早介入低视力康复服务，包括职业培训和心理支持。</p>',
    fertilityOrFamily:
      '<p>母系遗传。母亲的所有子女都会继承线粒体突变，但男性后代不会将突变传给下一代。女性携带者可将突变传给所有子女。遗传咨询非常重要：对于计划生育的女性携带者，可考虑卵子捐赠或线粒体替代治疗（在允许的国家/地区）。产前诊断和胚胎植入前遗传学检测对 LHON 的应用有限，因为突变携带者不一定发病。</p>',
    emergencySigns:
      '<p>突发单眼或双眼视力急剧下降、严重眼痛、头痛伴恶心呕吐（排除急性青光眼或视神经炎）需要立即就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Leber Hereditary Optic Neuropathy',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1174/',
    },
    {
      name: 'NORD: Leber Hereditary Optic Neuropathy',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/leber-hereditary-optic-neuropathy/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>单眼无痛性亚急性中心视力下降、色觉减退、中心暗点；数周至数月后累及另一只眼；慢性期视盘苍白萎缩。</p>',
  diagnosis:
    '<p>典型临床表现+视野检查+OCT；线粒体 DNA 突变检测确诊（m.11778G>A、m.3460G>A、m.14484T>C）。</p>',
  treatment:
    '<p>无根治方法；艾地苯醌可能对急性期有帮助；避免吸烟饮酒；基因治疗研究中；低视力康复和心理支持。</p>',
  prognosis:
    '<p>m.14484T>C 突变视力恢复可能性最大；m.11778G>A 预后最差；多数患者最终视力低于 0.1；早期干预可改善生活质量。</p>',
  sourceName: 'GeneReviews: Leber Hereditary Optic Neuropathy',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1174/',
  categorySlug: 'ophthalmologic',
  charityIds: [52],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5008,
    name: 'leber-hereditary-optic-neuropathy-journey.png',
    url: '/images/diseases/leber-hereditary-optic-neuropathy-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

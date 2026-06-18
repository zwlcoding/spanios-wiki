import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseProgressiveMuscularDystrophy: DiseaseDraft = {
  ...entity(1098, 'catalog-china-first-rare-disease-catalog-98'),
  name: '进行性肌营养不良',
  nameEn: 'Progressive Muscular Dystrophy',
  alias: '肌营养不良、DMD/BMD相关肌营养不良、第一批罕见病目录第 98 项',
  slug: 'progressive-muscular-dystrophy',
  oneSentence:
    '进行性肌营养不良是一组以肌肉逐渐无力和萎缩为主要表现的遗传性肌病，Duchenne/Becker型常与DMD基因异常有关，并需要持续关注运动、心脏和呼吸功能。',
  plainName: '以进行性肌无力为主、需要心肺骨骼长期管理的一组肌病',
  prevalence:
    '已纳入国家第一批罕见病目录；其中Duchenne型多见于男孩，国际资料常估计约每3,500-5,000名男性新生儿1例。',
  quickLook: {
    whatItIs:
      '这个目录名是一组疾病，不等同于单一分型。患者可能先表现为走路晚、跑跳差、频繁摔倒、爬楼困难或小腿假性肥大，随后需要围绕康复、心肺、骨骼和遗传诊断制定长期计划。',
    whoToSeeFirst:
      '儿童建议先看儿童神经科或神经肌肉专病门诊；同时需要康复、心内、呼吸、骨科、营养和遗传咨询参与。',
    isGenetic:
      'DMD/BMD多为X连锁遗传，其他肌营养不良分型遗传方式不同。明确基因和变异类型对治疗选择、家族筛查和生育咨询很重要。',
    hasTreatment:
      '治疗包括规范康复、牵伸和辅具，心脏和呼吸监测，营养骨骼管理，以及按分型评估糖皮质激素、基因相关治疗或临床研究可及性。',
    commonDelayReason:
      '早期常被认为是缺钙、懒动或发育慢；转氨酶升高也可能先被误认为肝病。肌酸激酶和基因检测常是关键转折。',
  },
  patientJourney: {
    whenToSuspect: [
      '男孩走路晚、跑跳差、经常摔倒、上楼困难或Gowers征。',
      '小腿明显粗大但力量下降，肌酸激酶显著升高。',
      '不明原因转氨酶升高，同时有运动发育落后。',
      '家族中有男性早发肌无力、轮椅使用或心肌病。',
    ],
    commonWrongTurns: [
      '只补钙或做普通康复，没有查CK和神经肌肉病因。',
      '把转氨酶高当肝病长期检查，未想到肌源性升高。',
      '确诊后只关注走路，忽视心肌病、呼吸和骨骼并发症。',
    ],
    firstDepartments: [
      '儿童神经科',
      '神经内科',
      '康复医学科',
      '心内科',
      '呼吸科',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '整理运动里程碑、摔倒频率、爬楼起立视频、CK和肝酶结果。',
      '带上肌电图、肌肉MRI/活检、基因检测、心电图/心超和肺功能结果。',
      '记录家族男性成员肌无力、早逝或心肌病情况。',
    ],
    testsToAskAbout: [
      '肌酸激酶、肌电图和肌肉影像。',
      'DMD基因缺失重复/测序，必要时扩大肌病基因检测。',
      '心电图、心脏超声/心脏MRI和肺功能。',
      '骨密度、脊柱侧弯和关节挛缩评估。',
    ],
    questionsForDoctor: [
      '目前更像哪一种肌营养不良？变异类型是否明确？',
      '是否适合分型相关药物、激素或临床研究？',
      '心脏和呼吸从什么时候开始定期监测？',
      '母亲和女性亲属是否需要携带者检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>这个目录名是一组疾病，不等同于单一分型。患者可能先表现为走路晚、跑跳差、频繁摔倒、爬楼困难或小腿假性肥大，随后需要围绕康复、心肺、骨骼和遗传诊断制定长期计划。</p><p>需要警惕的线索包括：男孩走路晚、跑跳差、经常摔倒、上楼困难或Gowers征；小腿明显粗大但力量下降，肌酸激酶显著升高；不明原因转氨酶升高，同时有运动发育落后；家族中有男性早发肌无力、轮椅使用或心肌病。表现会因年龄、分型和受累系统不同而变化。</p>',
    diagnosis:
      '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：肌酸激酶、肌电图和肌肉影像；DMD基因缺失重复/测序，必要时扩大肌病基因检测；心电图、心脏超声/心脏MRI和肺功能；骨密度、脊柱侧弯和关节挛缩评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
    treatment:
      '<p>治疗包括规范康复、牵伸和辅具，心脏和呼吸监测，营养骨骼管理，以及按分型评估糖皮质激素、基因相关治疗或临床研究可及性。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
    longTermCare:
      '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
    fertilityOrFamily:
      '<p>DMD/BMD多为X连锁遗传，其他肌营养不良分型遗传方式不同。明确基因和变异类型对治疗选择、家族筛查和生育咨询很重要。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
    emergencySigns:
      '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Duchenne and Becker muscular dystrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/duchenne-and-becker-muscular-dystrophy/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>进行性肌营养不良是一组以肌肉逐渐无力和萎缩为主要表现的遗传性肌病，Duchenne/Becker型常与DMD基因异常有关，并需要持续关注运动、心脏和呼吸功能；常见线索包括男孩走路晚、跑跳差、经常摔倒、上楼困难或Gowers征。、小腿明显粗大但力量下降，肌酸激酶显著升高等。</p>',
  diagnosis:
    '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
  treatment:
    '<p>治疗包括规范康复、牵伸和辅具，心脏和呼吸监测，营养骨骼管理，以及按分型评估糖皮质激素、基因相关治疗或临床研究可及性。</p>',
  prognosis:
    '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
  sourceName: '国家卫生健康委员会《第一批罕见病目录》',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'neurological',
  charityIds: [66, 67, 68, 69, 70, 71, 80],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSpinalMuscularAtrophy: DiseaseDraft = {
  ...entity(1110, 'catalog-china-first-rare-disease-catalog-110'),
  name: '脊髓性肌萎缩症',
  nameEn: 'Spinal Muscular Atrophy',
  alias: 'SMA、第一批罕见病目录第 110 项',
  slug: 'spinal-muscular-atrophy',
  oneSentence:
    '脊髓性肌萎缩症是一组多由SMN1基因异常导致的遗传性神经肌肉病，运动神经元受损后可出现进行性肌无力、运动发育受限、吞咽或呼吸问题。',
  plainName: '影响运动神经元、导致肌无力和运动发育受限的遗传病',
  prevalence:
    '已纳入国家第一批罕见病目录；国际资料常估计约每6,000-10,000名新生儿1例。',
  quickLook: {
    whatItIs:
      'SMA不是普通“没力气”或缺钙，而是运动神经元供应肌肉的信号不足。不同分型起病年龄和严重程度不同，越早发现越能尽早评估疾病修饰治疗、呼吸营养和康复支持。',
    whoToSeeFirst:
      '婴幼儿可先看儿童神经科或儿童康复科；疑似或确诊后需要神经肌肉专病团队、呼吸、营养、康复、骨科和遗传咨询共同管理。',
    isGenetic:
      '多数SMA为常染色体隐性遗传，与SMN1双等位异常有关，SMN2拷贝数会影响但不能完全决定严重程度。父母和计划生育家庭建议做携带者咨询。',
    hasTreatment:
      '目前已有疾病修饰治疗可选择，但疗效与起病、分型、治疗时机和可及性有关。照护还包括呼吸支持、营养吞咽、康复、脊柱和关节管理。',
    commonDelayReason:
      '早期常被当成发育慢、早产后肌张力低或普通肌病。若没有及时做SMN1检测，可能错过早期治疗窗口。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿明显软、抬头差、翻身坐立落后，哭声或咳嗽弱。',
      '近端肌无力明显，腿部无力比手部更突出，腱反射减弱。',
      '喂养费力、吞咽呛咳、反复呼吸道感染或夜间通气不足。',
      '家族中有SMA、婴儿期不明原因肌无力或携带者筛查阳性。',
    ],
    commonWrongTurns: [
      '按缺钙、发育慢观察太久，没有做基因检测。',
      '只做康复训练，忽略呼吸、营养和疾病修饰治疗评估。',
      '以为能坐能走就不需要长期随访，忽视脊柱、关节和呼吸变化。',
    ],
    firstDepartments: [
      '儿童神经科',
      '神经内科',
      '康复医学科',
      '呼吸科',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '整理运动里程碑、肌力变化、吞咽喂养、呼吸感染和睡眠情况。',
      '带上基因检测、肌电图、肺功能/睡眠监测、脊柱影像和用药记录。',
      '记录是否已接受疾病修饰治疗以及治疗时间点。',
    ],
    testsToAskAbout: [
      'SMN1缺失/变异检测及SMN2拷贝数评估。',
      '呼吸功能、睡眠通气、吞咽和营养评估。',
      '康复、关节挛缩、脊柱侧弯和骨密度评估。',
    ],
    questionsForDoctor: [
      '是否符合SMA分型？还需要排除哪些神经肌肉病？',
      '是否适合疾病修饰治疗？治疗前后怎样监测？',
      '呼吸、营养和康复计划应如何安排？',
      '父母和兄弟姐妹是否需要携带者检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>SMA不是普通“没力气”或缺钙，而是运动神经元供应肌肉的信号不足。不同分型起病年龄和严重程度不同，越早发现越能尽早评估疾病修饰治疗、呼吸营养和康复支持。</p><p>需要警惕的线索包括：婴儿明显软、抬头差、翻身坐立落后，哭声或咳嗽弱；近端肌无力明显，腿部无力比手部更突出，腱反射减弱；喂养费力、吞咽呛咳、反复呼吸道感染或夜间通气不足；家族中有SMA、婴儿期不明原因肌无力或携带者筛查阳性。表现会因年龄、分型和受累系统不同而变化。</p>',
    diagnosis:
      '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：SMN1缺失/变异检测及SMN2拷贝数评估；呼吸功能、睡眠通气、吞咽和营养评估；康复、关节挛缩、脊柱侧弯和骨密度评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
    treatment:
      '<p>目前已有疾病修饰治疗可选择，但疗效与起病、分型、治疗时机和可及性有关。照护还包括呼吸支持、营养吞咽、康复、脊柱和关节管理。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
    longTermCare:
      '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
    fertilityOrFamily:
      '<p>多数SMA为常染色体隐性遗传，与SMN1双等位异常有关，SMN2拷贝数会影响但不能完全决定严重程度。父母和计划生育家庭建议做携带者咨询。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
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
      name: 'MedlinePlus Genetics: Spinal muscular atrophy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/spinal-muscular-atrophy/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>脊髓性肌萎缩症是一组多由SMN1基因异常导致的遗传性神经肌肉病，运动神经元受损后可出现进行性肌无力、运动发育受限、吞咽或呼吸问题；常见线索包括婴儿明显软、抬头差、翻身坐立落后，哭声或咳嗽弱。、近端肌无力明显，腿部无力比手部更突出，腱反射减弱等。</p>',
  diagnosis:
    '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
  treatment:
    '<p>目前已有疾病修饰治疗可选择，但疗效与起病、分型、治疗时机和可及性有关。照护还包括呼吸支持、营养吞咽、康复、脊柱和关节管理。</p>',
  prognosis:
    '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
  sourceName: '国家卫生健康委员会《第一批罕见病目录》',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'neurological',
  charityIds: [65],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

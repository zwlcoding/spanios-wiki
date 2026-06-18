import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSystemicSclerosis: DiseaseDraft = {
  ...entity(1112, 'catalog-china-first-rare-disease-catalog-112'),
  name: '系统性硬化症',
  nameEn: 'Systemic Sclerosis',
  alias: '硬皮病、SSc、第一批罕见病目录第 112 项',
  slug: 'systemic-sclerosis',
  oneSentence:
    '系统性硬化症是一种自身免疫性结缔组织病，可引起皮肤增厚变硬、雷诺现象，并可能累及肺、消化道、肾脏和心脏。',
  plainName: '会造成皮肤变硬并可能累及血管和内脏的自身免疫病',
  prevalence:
    '已纳入国家第一批罕见病目录；发病率和患病率因地区、人群和诊断标准而不同。',
  quickLook: {
    whatItIs:
      'SSc不只是“皮肤硬”，它常从手指遇冷变白变紫、肿胀或皮肤紧绷开始，并可能逐步影响肺间质、肺动脉压力、胃食管反流和肾脏血压。',
    whoToSeeFirst:
      '疑似者建议先看风湿免疫科；有气短、吞咽反流、肾脏血压或心脏症状时，需要呼吸、消化、肾内和心内科共同评估。',
    isGenetic:
      'SSc通常不是单基因遗传病，可能与免疫、环境和遗传易感共同相关。家族聚集少见，但有自身免疫病家族史可告知医生。',
    hasTreatment:
      '目前没有单一根治方案，治疗按受累器官分层，包括雷诺和血管保护、免疫抑制、肺部监测、胃食管反流管理和肾危象预防。',
    commonDelayReason:
      '早期雷诺、手肿、胃反流或关节痛容易被分开处理；若没有查自身抗体和毛细血管镜，诊断会延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '手指遇冷变白、变紫或疼痛，反复指尖溃疡。',
      '手指肿胀、皮肤发紧变厚，戒指变紧或握拳困难。',
      '不明原因胃食管反流、吞咽困难、气短、干咳或运动耐量下降。',
      '自身抗体阳性或甲襞毛细血管异常。',
    ],
    commonWrongTurns: [
      '只按冻疮、皮炎或胃病处理，没有风湿免疫评估。',
      '只关注皮肤，忽略肺间质病变、肺动脉高压和肾危象风险。',
      '自行使用激素或偏方，未评估血压、肾功能和肺部情况。',
    ],
    firstDepartments: ['风湿免疫科', '呼吸科', '心内科', '肾内科', '消化科'],
    diagnosisChecklist: [
      '记录雷诺发作、皮肤变化、指尖溃疡、反流吞咽和气短时间线。',
      '带上自身抗体、肺功能、胸部HRCT、心超、尿检和肾功能结果。',
      '记录血压变化、用药和感染/咳嗽情况。',
    ],
    testsToAskAbout: [
      'ANA谱和SSc相关抗体，甲襞毛细血管镜。',
      '肺功能、弥散功能、胸部HRCT和心脏超声。',
      '血压、尿常规、肾功能、心电图和NT-proBNP等按需评估。',
    ],
    questionsForDoctor: [
      '属于局限型还是弥漫型？目前哪些器官受累？',
      '肺部和肺动脉高压多久筛查一次？',
      '雷诺和指尖溃疡怎样预防和处理？',
      '哪些药物可能增加肾危象风险？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>SSc不只是“皮肤硬”，它常从手指遇冷变白变紫、肿胀或皮肤紧绷开始，并可能逐步影响肺间质、肺动脉压力、胃食管反流和肾脏血压。</p><p>需要警惕的线索包括：手指遇冷变白、变紫或疼痛，反复指尖溃疡；手指肿胀、皮肤发紧变厚，戒指变紧或握拳困难；不明原因胃食管反流、吞咽困难、气短、干咳或运动耐量下降；自身抗体阳性或甲襞毛细血管异常。表现会因年龄、分型和受累系统不同而变化。</p>',
    diagnosis:
      '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：ANA谱和SSc相关抗体，甲襞毛细血管镜；肺功能、弥散功能、胸部HRCT和心脏超声；血压、尿常规、肾功能、心电图和NT-proBNP等按需评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
    treatment:
      '<p>目前没有单一根治方案，治疗按受累器官分层，包括雷诺和血管保护、免疫抑制、肺部监测、胃食管反流管理和肾危象预防。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
    longTermCare:
      '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
    fertilityOrFamily:
      '<p>SSc通常不是单基因遗传病，可能与免疫、环境和遗传易感共同相关。家族聚集少见，但有自身免疫病家族史可告知医生。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
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
      name: 'NIAMS: Scleroderma',
      type: 'official',
      url: 'https://www.niams.nih.gov/health-topics/scleroderma',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>系统性硬化症是一种自身免疫性结缔组织病，可引起皮肤增厚变硬、雷诺现象，并可能累及肺、消化道、肾脏和心脏；常见线索包括手指遇冷变白、变紫或疼痛，反复指尖溃疡。、手指肿胀、皮肤发紧变厚，戒指变紧或握拳困难等。</p>',
  diagnosis:
    '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
  treatment:
    '<p>目前没有单一根治方案，治疗按受累器官分层，包括雷诺和血管保护、免疫抑制、肺部监测、胃食管反流管理和肾危象预防。</p>',
  prognosis:
    '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
  sourceName: '国家卫生健康委员会《第一批罕见病目录》',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [64],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog'],
};

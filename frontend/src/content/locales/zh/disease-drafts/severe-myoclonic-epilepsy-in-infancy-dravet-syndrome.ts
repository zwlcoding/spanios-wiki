import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSevereMyoclonicEpilepsyInInfancyDravetSyndrome: DiseaseDraft =
  {
    ...entity(1105, 'catalog-china-first-rare-disease-catalog-105'),
    name: '婴儿严重肌阵挛性癫痫(Dravet综合征)',
    nameEn: 'Severe Myoclonic Epilepsy in Infancy (Dravet Syndrome)',
    alias: 'Dravet综合征、SMEI、第一批罕见病目录第 105 项',
    slug: 'severe-myoclonic-epilepsy-in-infancy-dravet-syndrome',
    oneSentence:
      'Dravet综合征是一种婴幼儿期起病的发育性癫痫性脑病，常与SCN1A基因变异有关，发热、热水、疫苗后发热或环境升温都可能诱发长时间癫痫发作。',
    plainName: '婴幼儿早期起病、常由发热诱发的遗传性癫痫综合征',
    prevalence:
      '已纳入国家第一批罕见病目录；不同研究估计差异较大，卓蔚宝贝支持中心OCR资料提到约1/15,700-1/40,900。',
    quickLook: {
      whatItIs:
        'Dravet不是普通热性惊厥。孩子早期发育可能看似正常，但一岁内出现反复、长时间、偏侧或多类型惊厥后，应尽快评估癫痫综合征和基因原因。',
      whoToSeeFirst:
        '首选儿童神经科或癫痫专病门诊；需要急救方案、发热管理、发育康复、睡眠和学校照护共同支持。',
      isGenetic:
        '许多患者与SCN1A新发变异有关，也可能涉及其他基因。明确基因有助于用药选择和家族咨询。',
      hasTreatment:
        '治疗重点是减少发作、避免诱因和准备急救药物。部分钠通道阻滞剂可能加重Dravet，具体用药必须由癫痫专科医生决定。',
      commonDelayReason:
        '早期常被当作普通热性惊厥；如果没有注意长时间、反复、偏侧、无热发作或发育变化，诊断会延迟。',
    },
    patientJourney: {
      whenToSuspect: [
        '一岁以内因发热或热水诱发长时间惊厥。',
        '惊厥可偏侧或交替，之后出现多种类型发作。',
        '发作后恢复慢，或发育、语言、步态逐渐落后。',
        '常规热性惊厥解释不了发作频率、持续时间或诱因。',
      ],
      commonWrongTurns: [
        '长期按普通热性惊厥处理，没有做癫痫综合征评估。',
        '未建立家庭急救方案，长时间发作处理延误。',
        '未向医生确认哪些抗癫痫药可能不适合Dravet。',
      ],
      firstDepartments: [
        '儿童神经科',
        '癫痫专病门诊',
        '急诊科',
        '康复医学科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '保存发作视频，记录年龄、体温、诱因、持续时间、偏侧性和恢复情况。',
        '带上脑电图、头颅MRI、基因检测和既往用药反应。',
        '列出发热、疫苗、洗澡、光刺激和睡眠不足等诱因。',
      ],
      testsToAskAbout: [
        '脑电图和癫痫综合征评估。',
        'SCN1A及癫痫基因检测。',
        '发育、语言、运动和行为评估。',
      ],
      questionsForDoctor: [
        '这些发作是否符合Dravet？是否需要SCN1A检测？',
        '家庭急救药物什么时候用、如何用、何时叫急救？',
        '哪些药物和诱因需要避免？',
        '疫苗、发热和洗澡如何制定安全计划？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Dravet不是普通热性惊厥。孩子早期发育可能看似正常，但一岁内出现反复、长时间、偏侧或多类型惊厥后，应尽快评估癫痫综合征和基因原因。</p><p>需要警惕的线索包括：一岁以内因发热或热水诱发长时间惊厥；惊厥可偏侧或交替，之后出现多种类型发作；发作后恢复慢，或发育、语言、步态逐渐落后；常规热性惊厥解释不了发作频率、持续时间或诱因。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：脑电图和癫痫综合征评估；SCN1A及癫痫基因检测；发育、语言、运动和行为评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>治疗重点是减少发作、避免诱因和准备急救药物。部分钠通道阻滞剂可能加重Dravet，具体用药必须由癫痫专科医生决定。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>许多患者与SCN1A新发变异有关，也可能涉及其他基因。明确基因有助于用药选择和家族咨询。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
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
        name: 'GARD: Dravet syndrome',
        type: 'official',
        url: 'https://rarediseases.info.nih.gov/diseases/10430/dravet-syndrome',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>Dravet综合征是一种婴幼儿期起病的发育性癫痫性脑病，常与SCN1A基因变异有关，发热、热水、疫苗后发热或环境升温都可能诱发长时间癫痫发作；常见线索包括一岁以内因发热或热水诱发长时间惊厥。、惊厥可偏侧或交替，之后出现多种类型发作等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>治疗重点是减少发作、避免诱因和准备急救药物。部分钠通道阻滞剂可能加重Dravet，具体用药必须由癫痫专科医生决定。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [72, 73],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  };

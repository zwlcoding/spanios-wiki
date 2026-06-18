import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseRetinitisPigmentosa: DiseaseDraft = {
  ...entity(1102, 'catalog-china-first-rare-disease-catalog-102'),
  name: '视网膜色素变性',
  nameEn: 'Retinitis Pigmentosa',
  alias: 'RP、第一批罕见病目录第 102 项',
  slug: 'retinitis-pigmentosa',
  oneSentence:
    '视网膜色素变性是一组遗传性视网膜退行性疾病，通常先出现夜盲和周边视野缩小，之后可能逐步影响中心视力。',
  plainName: '先影响夜间和周边视野的遗传性视网膜退行性疾病',
  prevalence:
    '已纳入国家第一批罕见病目录；国际资料常估计约每3,500-4,000人中1例。',
  quickLook: {
    whatItIs:
      'RP不是普通近视或用眼疲劳。患者常先在暗处看不清、夜间行动困难、容易撞到侧边物体，眼底、视野、ERG和基因检测能帮助明确诊断。',
    whoToSeeFirst:
      '建议先看眼底病/遗传性视网膜病专科；确诊后需要低视力康复、遗传咨询和并发白内障/黄斑水肿等管理。',
    isGenetic:
      'RP遗传方式多样，可常染色体显性、隐性或X连锁，也可作为综合征的一部分。基因检测对预后、家族筛查和治疗机会判断有帮助。',
    hasTreatment:
      '多数类型目前以随访、低视力支持、并发症处理和遗传咨询为主。少数特定基因相关疾病已有或正在研究靶向治疗，应由专科医生评估。',
    commonDelayReason:
      '早期视力表可能还不错，夜盲和视野缩小容易被忽略，直到出行受影响才就诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '夜间或暗处看不清，进出明暗环境适应很慢。',
      '走路容易撞到侧边物体，视野像逐渐变窄。',
      '家族中多人夜盲、视野缩小或年轻时视力下降。',
      '眼底提示骨细胞样色素、视网膜血管变细或视神经蜡黄。',
    ],
    commonWrongTurns: [
      '只按近视、散光或干眼处理，没有做视野和眼底电生理。',
      '视力表尚可就认为没问题，忽略周边视野和夜视功能。',
      '没有区分非综合征RP和可能合并听力、肾脏或神经问题的综合征。',
    ],
    firstDepartments: ['眼科', '眼底病专科', '医学遗传科', '低视力康复门诊'],
    diagnosisChecklist: [
      '记录夜盲、视野缩小、读写和出行困难的起始时间。',
      '带上眼底照片、OCT、视野、ERG、基因检测和家族眼病史。',
      '记录是否有听力下降、平衡问题、肾脏或神经症状。',
    ],
    testsToAskAbout: [
      '散瞳眼底检查、OCT、自发荧光、视野和ERG。',
      '遗传性视网膜病基因检测。',
      '按症状评估听力、肾脏或其他综合征线索。',
    ],
    questionsForDoctor: [
      '是否符合RP？是否可能是综合征型视网膜病？',
      '建议做哪类基因检测，结果会如何影响随访和家族筛查？',
      '是否有黄斑水肿、白内障等可处理问题？',
      '低视力辅助和出行训练可以从哪里开始？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>RP不是普通近视或用眼疲劳。患者常先在暗处看不清、夜间行动困难、容易撞到侧边物体，眼底、视野、ERG和基因检测能帮助明确诊断。</p><p>需要警惕的线索包括：夜间或暗处看不清，进出明暗环境适应很慢；走路容易撞到侧边物体，视野像逐渐变窄；家族中多人夜盲、视野缩小或年轻时视力下降；眼底提示骨细胞样色素、视网膜血管变细或视神经蜡黄。表现会因年龄、分型和受累系统不同而变化。</p>',
    diagnosis:
      '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：散瞳眼底检查、OCT、自发荧光、视野和ERG；遗传性视网膜病基因检测；按症状评估听力、肾脏或其他综合征线索。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
    treatment:
      '<p>多数类型目前以随访、低视力支持、并发症处理和遗传咨询为主。少数特定基因相关疾病已有或正在研究靶向治疗，应由专科医生评估。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
    longTermCare:
      '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
    fertilityOrFamily:
      '<p>RP遗传方式多样，可常染色体显性、隐性或X连锁，也可作为综合征的一部分。基因检测对预后、家族筛查和治疗机会判断有帮助。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
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
      name: 'MedlinePlus Genetics: Retinitis pigmentosa',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/retinitis-pigmentosa/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>视网膜色素变性是一组遗传性视网膜退行性疾病，通常先出现夜盲和周边视野缩小，之后可能逐步影响中心视力；常见线索包括夜间或暗处看不清，进出明暗环境适应很慢。、走路容易撞到侧边物体，视野像逐渐变窄等。</p>',
  diagnosis:
    '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
  treatment:
    '<p>多数类型目前以随访、低视力支持、并发症处理和遗传咨询为主。少数特定基因相关疾病已有或正在研究靶向治疗，应由专科医生评估。</p>',
  prognosis:
    '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
  sourceName: '国家卫生健康委员会《第一批罕见病目录》',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [74],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSpinocerebellarAtaxia: DiseaseDraft = {
  ...entity(1111, 'catalog-china-first-rare-disease-catalog-111'),
  name: '脊髓小脑性共济失调',
  nameEn: 'Spinocerebellar Ataxia',
  alias: 'SCA、小脑萎缩症、第一批罕见病目录第 111 项',
  slug: 'spinocerebellar-ataxia',
  oneSentence:
    '脊髓小脑性共济失调是一组遗传性神经退行性疾病，主要表现为走路不稳、动作协调差、说话含糊，并可伴眼动、吞咽、周围神经或认知情绪问题。',
  plainName: '以走路不稳、协调变差为主的一组遗传性共济失调',
  prevalence: '已纳入国家第一批罕见病目录；不同SCA分型和地区的频率差异很大。',
  quickLook: {
    whatItIs:
      'SCA不是单一疾病，常见分型包括SCA1、SCA2、SCA3等。家族史、起病年龄、眼动和周围神经表现、基因检测有助于分型，分型会影响遗传咨询和随访重点。',
    whoToSeeFirst:
      '建议看神经内科运动障碍或神经遗传门诊；确诊后需要康复、吞咽营养、心理和遗传咨询支持。',
    isGenetic:
      '许多SCA为常染色体显性遗传，部分与重复序列扩增有关。家族成员检测和生育选择需要遗传咨询，尤其要避免在未咨询前直接给未成年人预测性检测。',
    hasTreatment:
      '多数SCA目前以康复、预防跌倒、吞咽和营养管理、症状治疗和生活适配为主。分型清楚后可关注临床研究和特定并发症筛查。',
    commonDelayReason:
      '早期走路不稳、说话含糊可能被误认为颈椎病、酒精影响或心理问题；家族史不明显时更易延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '逐渐出现走路不稳、容易跌倒、动作笨拙或手抖。',
      '说话含糊、眼球震颤、复视或吞咽呛咳。',
      '家族中多人有“小脑萎缩”、走路不稳或不明原因轮椅使用。',
      '头颅影像提示小脑萎缩。',
    ],
    commonWrongTurns: [
      '长期按颈椎病、眩晕或焦虑处理，没有做神经系统定位。',
      '只看到影像“小脑萎缩”，未进一步分型和遗传咨询。',
      '忽视吞咽安全、跌倒预防和心理支持。',
    ],
    firstDepartments: [
      '神经内科',
      '运动障碍门诊',
      '医学遗传科',
      '康复医学科',
      '吞咽/营养门诊',
    ],
    diagnosisChecklist: [
      '整理起病年龄、进展速度、跌倒、说话吞咽和眼动症状。',
      '画出三代家系图，记录类似症状、诊断或早逝情况。',
      '带上头颅MRI、基因检测、康复评估和用药记录。',
    ],
    testsToAskAbout: [
      '头颅MRI和神经系统查体。',
      'SCA重复扩增和相关共济失调基因检测。',
      '吞咽、步态平衡、眼动和周围神经评估。',
    ],
    questionsForDoctor: [
      '最可能是哪一型SCA？基因检测应该如何分步做？',
      '家属预测性检测和生育咨询有哪些注意事项？',
      '怎样安排康复、辅具和跌倒预防？',
      '吞咽呛咳、体重下降或情绪问题应如何处理？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>SCA不是单一疾病，常见分型包括SCA1、SCA2、SCA3等。家族史、起病年龄、眼动和周围神经表现、基因检测有助于分型，分型会影响遗传咨询和随访重点。</p><p>需要警惕的线索包括：逐渐出现走路不稳、容易跌倒、动作笨拙或手抖；说话含糊、眼球震颤、复视或吞咽呛咳；家族中多人有“小脑萎缩”、走路不稳或不明原因轮椅使用；头颅影像提示小脑萎缩。表现会因年龄、分型和受累系统不同而变化。</p>',
    diagnosis:
      '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：头颅MRI和神经系统查体；SCA重复扩增和相关共济失调基因检测；吞咽、步态平衡、眼动和周围神经评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
    treatment:
      '<p>多数SCA目前以康复、预防跌倒、吞咽和营养管理、症状治疗和生活适配为主。分型清楚后可关注临床研究和特定并发症筛查。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
    longTermCare:
      '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
    fertilityOrFamily:
      '<p>许多SCA为常染色体显性遗传，部分与重复序列扩增有关。家族成员检测和生育选择需要遗传咨询，尤其要避免在未咨询前直接给未成年人预测性检测。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
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
      name: 'NORD: Spinocerebellar Ataxia',
      type: 'official',
      url: 'https://rarediseases.org/rare-diseases/spinocerebellar-ataxia/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>脊髓小脑性共济失调是一组遗传性神经退行性疾病，主要表现为走路不稳、动作协调差、说话含糊，并可伴眼动、吞咽、周围神经或认知情绪问题；常见线索包括逐渐出现走路不稳、容易跌倒、动作笨拙或手抖。、说话含糊、眼球震颤、复视或吞咽呛咳等。</p>',
  diagnosis:
    '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
  treatment:
    '<p>多数SCA目前以康复、预防跌倒、吞咽和营养管理、症状治疗和生活适配为主。分型清楚后可关注临床研究和特定并发症筛查。</p>',
  prognosis:
    '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
  sourceName: '国家卫生健康委员会《第一批罕见病目录》',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'neurological',
  charityIds: [77],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlstromSyndrome: DiseaseDraft = {
  ...entity(6101, 'disease-alstrom-syndrome'),
  name: 'Alström综合征',
  nameEn: 'Alström Syndrome',
  alias: 'Alstrom综合征、Alström-Hallgren综合征、ALMS、ALMS1相关纤毛病',
  oneSentence:
    'Alström综合征是一种ALMS1基因相关的常染色体隐性遗传性多系统疾病，常从婴幼儿期视力问题开始，随后可出现听力下降、肥胖、胰岛素抵抗或2型糖尿病、心肌病以及肝肾肺等器官受累。',
  plainName: '会同时影响视力、听力、代谢、心脏和多器官功能的遗传病',
  prevalence:
    'MedlinePlus Genetics 资料提到全球已报告超过900例；OCR来源也将其列为极罕见疾病。',
  quickLook: {
    whatItIs:
      '这是一种纤毛相关多系统遗传病。婴幼儿期常先表现为眼球震颤、畏光或视力下降，儿童期以后逐渐出现听力、体重、血糖、心脏、肝肾等问题。',
    whoToSeeFirst:
      '孩子有早发视网膜病变或眼球震颤，同时伴肥胖、听力下降、心肌病或血糖异常，应到医学遗传科、眼科、儿童内分泌科和心脏科联合评估。',
    isGenetic:
      '通常为常染色体隐性遗传，与ALMS1致病变异有关。父母多为携带者，确诊后应做遗传咨询和家系检测。',
    hasTreatment:
      '目前没有根治方法，重点是早诊断、视听支持、心肌病和代谢管理、肝肾肺随访以及康复和教育支持。',
    commonDelayReason:
      '早期可能被分散诊断为先天性视网膜病变、单纯肥胖、糖尿病或听力问题，若没有把多系统表现联系起来，会延迟基因诊断。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿期出现眼球震颤、畏光、视力下降或视锥-视杆细胞营养不良。',
      '儿童期出现肥胖、胰岛素抵抗、2型糖尿病或黑棘皮样改变。',
      '合并听力下降、扩张型心肌病、肝功能异常、肾功能下降或反复呼吸问题。',
      '兄弟姐妹有类似视听和代谢问题，或父母为近亲婚配。',
    ],
    commonWrongTurns: [
      '只按眼科病变处理，没有长期筛查心脏、代谢、听力和肾脏。',
      '把体重和糖尿病简单归因于生活方式，忽略遗传性饥饿/代谢调节异常。',
      '心肌病或肾功能异常出现后才回头追查综合征。',
    ],
    firstDepartments: [
      '医学遗传科',
      '眼科/视网膜专科',
      '儿童内分泌科',
      '心血管内科或儿童心脏科',
    ],
    diagnosisChecklist: [
      '整理眼科检查、视网膜电图、视力变化和眼底影像。',
      '带听力、心脏超声/心电图、血糖血脂、肝肾功能和尿检结果。',
      '记录体重增长、发育、运动耐力、呼吸和家族史。',
    ],
    testsToAskAbout: [
      'ALMS1基因检测或纤毛病相关基因panel/外显子检测。',
      '视网膜电图、眼底影像、听力评估。',
      '心脏超声/心电图、糖代谢、血脂、肝肾功能、尿蛋白和肺功能随访。',
    ],
    questionsForDoctor: [
      '目前哪些器官已经受累，哪些需要定期筛查？',
      '心肌病、血糖、听力和肾功能分别多久复查？',
      '家中其他孩子和父母是否需要携带者检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Alström综合征可从婴幼儿期眼球震颤、畏光、视力下降开始，随后出现进行性听力下降、儿童期肥胖、胰岛素抵抗或2型糖尿病。部分患者有扩张型心肌病、肝纤维化、肾功能下降、肺部问题、短身材或性腺发育问题。</p>',
    diagnosis:
      '<p>诊断依靠多系统表现、眼科和听力检查、心脏及代谢评估，并通过ALMS1基因检测确认。医生会与Bardet-Biedl综合征、其他遗传性视网膜变性、综合征性肥胖和线粒体/代谢病鉴别。</p>',
    treatment:
      '<p>目前没有根治治疗。管理包括低视力和听力支持、心肌病治疗、糖尿病和血脂管理、营养与运动支持、肝肾肺监测、康复和学校适配。任何减重或降糖方案都应由熟悉综合征性肥胖的团队评估。</p>',
    longTermCare:
      '<p>需要终身多学科随访，重点监测视听功能、心脏、血糖血脂、肝肾功能、肺功能、青春期发育、心理和教育需求。家庭应保存一份多系统随访清单。</p>',
    fertilityOrFamily:
      '<p>常染色体隐性遗传意味着同胞复发风险可达25%。确诊家庭可进行携带者检测、产前诊断或胚胎植入前遗传学检测咨询。</p>',
    emergencySigns:
      '<p>出现呼吸困难、胸痛或晕厥、心衰加重、严重低血糖/高血糖、明显少尿、水肿或急性视力变化，应尽快就医。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Alström syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/alstrom-syndrome/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>早发视力下降、听力下降、肥胖、胰岛素抵抗或糖尿病、心肌病，以及肝肾肺等多系统受累。</p>',
  diagnosis:
    '<p>结合眼科、听力、心脏、代谢和肝肾评估，并通过ALMS1基因检测确认。</p>',
  treatment:
    '<p>以多学科支持和并发症管理为主，包括视听辅助、心脏和代谢治疗、肝肾肺随访、康复与教育支持。</p>',
  prognosis:
    '<p>病程差异较大；早期识别并持续筛查心脏、代谢和肾脏风险，可降低可预防并发症。</p>',
  sourceName: 'MedlinePlus Genetics: Alström syndrome',
  sourceUrl: 'https://medlineplus.gov/genetics/condition/alstrom-syndrome/',
  slug: 'alstrom-syndrome',
  categorySlug: 'multisystem',
  charityIds: [84],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

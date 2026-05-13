import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTakayasuArteritis: DiseaseDraft = {
  ...entity(2076, 'disease-takayasu-arteritis'),
  name: '大动脉炎/多发性大动脉炎',
  nameEn: 'Takayasu arteritis',
  alias: 'TAK；Takayasu arteritis；第二批罕见病目录第 76 项',
  slug: 'takayasu-arteritis',
  oneSentence:
    '大动脉炎是一种主要累及主动脉及其主要分支的罕见大血管炎，可能造成血管狭窄、闭塞或动脉瘤，进而影响血压、四肢供血、心脏、脑和肾脏。',
  plainName: '大血管长期发炎、变窄或变弱的免疫性疾病',
  prevalence:
    '已纳入中国第二批罕见病目录；全球发病率较低，在亚洲等人群中相对更常见，多见于年轻女性，但任何性别和年龄都可能发生。',
  quickLook: {
    whatItIs:
      '免疫炎症攻击大血管壁，早期可像普通发热、乏力或关节痛，后期可能出现两侧上肢血压差、脉搏变弱、头晕、胸痛、高血压或肢体活动后疼痛。',
    whoToSeeFirst:
      '反复炎症指标升高、血压差明显、脉搏变弱、血管杂音、年轻人不明原因高血压或血管狭窄，应优先到风湿免疫科；有卒中样症状、胸痛或严重高血压应急诊。',
    isGenetic:
      '通常不是单基因遗传病，家属一般不需要按遗传病筛查；是否有自身免疫背景或其他血管炎需要医生判断。',
    hasTreatment:
      '治疗重点是控制血管炎症、保护器官供血和处理狭窄并发症。常用糖皮质激素、免疫抑制剂或生物制剂，必要时在炎症稳定后评估介入或外科重建。',
    commonDelayReason:
      '早期像感染、贫血、疲劳或普通关节痛，血管症状可能多年后才明显；如果没有测双上肢血压和做血管影像，容易漏诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '年轻或中年人反复低热、乏力、体重下降、肌肉关节痛，同时炎症指标升高。',
      '一侧手臂易酸痛、发凉、无力，双上肢血压差明显，脉搏变弱或医生听到血管杂音。',
      '不明原因高血压、头晕、视物模糊、晕厥、胸痛、气短，影像提示主动脉或大分支狭窄、闭塞或动脉瘤。',
    ],
    commonWrongTurns: [
      '长期按感染、贫血、颈椎病或焦虑处理，没有把全身炎症和血管表现放在一起看。',
      '只看单个狭窄血管，未评估全身大血管范围和疾病活动度。',
      '症状减轻后自行停药，或在炎症活跃期急于做血管重建，导致复发或再狭窄风险增加。',
    ],
    firstDepartments: [
      '风湿免疫科',
      '血管外科或血管内科',
      '心内科/肾内科（按高血压和受累血管）',
      '儿科风湿免疫科',
    ],
    diagnosisChecklist: [
      '记录发热、乏力、体重变化、肢体疼痛、头晕、胸痛、高血压和用药反应的时间线。',
      '带双上肢血压记录、血常规、ESR/CRP、肝肾功能、免疫相关检查和既往血管影像。',
      '整理 CTA、MRA、超声、PET-CT 或血管造影报告，注明是否有狭窄、闭塞、动脉瘤和受累范围。',
    ],
    testsToAskAbout: [
      '是否需要主动脉及主要分支的 CTA/MRA、血管超声或 PET-CT 来判断范围和活动度。',
      'ESR、CRP、血常规和血压监测能否作为治疗反应和复发线索。',
      '是否需要排除巨细胞动脉炎、动脉粥样硬化、感染性血管炎、IgG4 相关病或其他结缔组织病。',
    ],
    questionsForDoctor: [
      '目前是炎症活跃期还是血管损伤后遗期？治疗目标是缓解炎症、保护器官还是处理狭窄？',
      '我需要多久复查血管影像和炎症指标？哪些症状提示复发或供血不足？',
      '血压应该测哪一侧？是否需要抗血小板、降压或介入/手术评估？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>大动脉炎可先出现低热、盗汗、乏力、体重下降、肌肉关节痛和贫血样表现。随着血管壁炎症造成狭窄、闭塞或扩张，可出现手臂活动后酸痛无力、脉搏减弱、双上肢血压差、头晕、视物模糊、晕厥、胸痛、气短和高血压。</p><p>受累血管不同，风险也不同：颈动脉和锁骨下动脉受累可影响脑和上肢供血，肾动脉受累可导致顽固性高血压，主动脉瓣或冠脉受累可造成心脏问题。</p>',
    diagnosis:
      '<p>诊断依赖病史、体格检查、双侧血压和脉搏、炎症指标以及血管影像。CTA、MRA、超声、PET-CT 或血管造影可帮助确认主动脉及分支是否有壁增厚、狭窄、闭塞或动脉瘤。</p><p>医生还会评估疾病活动度和器官供血，并排除巨细胞动脉炎、动脉粥样硬化、感染性血管炎、先天或遗传性血管病、IgG4 相关病和其他结缔组织病。</p>',
    treatment:
      '<p>活动期治疗通常以糖皮质激素快速控制炎症，并根据复发风险和副作用加用甲氨蝶呤、硫唑嘌呤、吗替麦考酚酯、环磷酰胺或生物制剂等免疫治疗。具体选择取决于年龄、受累血管、器官风险和药物可及性。</p><p>高血压、心脏受累和血栓风险需要同步管理。严重狭窄、动脉瘤或器官缺血时可评估球囊扩张、支架、旁路或手术，但通常会尽量在炎症控制后进行。</p>',
    longTermCare:
      '<p>长期管理包括规律复查 ESR/CRP、血压、肾功能、心脏情况和血管影像，并记录肢体供血、头晕、胸痛和运动耐量变化。即使症状变轻，血管炎也可能复发或静默进展。</p><p>患者应避免自行停用激素或免疫药，准备疫苗、感染预防、骨质保护和妊娠/手术前用药计划。</p>',
    fertilityOrFamily:
      '<p>大动脉炎通常不是遗传病。计划妊娠前应在病情稳定期与风湿免疫科、产科和心血管/血管团队讨论血压、血管狭窄、药物安全性和随访频率。</p>',
    emergencySigns:
      '<p>突然胸背部撕裂样疼痛、卒中样表现、晕厥、持续胸痛气短、肢体突然冰冷疼痛无脉、严重高血压伴头痛视物异常，或发热伴免疫抑制用药，应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Mayo Clinic: Takayasu arteritis symptoms and causes',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/takayasus-arteritis/symptoms-causes/dxc-20196667',
    },
    {
      name: 'Mayo Clinic: Takayasu arteritis diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/takayasus-arteritis/diagnosis-treatment/drc-20351340',
    },
  ],
  symptoms:
    '<p>可有低热、乏力、体重下降、肌肉关节痛、手臂活动后疼痛无力、双上肢血压差、脉搏减弱、头晕、胸痛、高血压和器官缺血表现。</p>',
  diagnosis:
    '<p>诊断结合双侧血压和脉搏、炎症指标、CTA/MRA/血管超声/PET-CT 等血管影像，并排除其他大血管病和感染性或免疫性血管炎。</p>',
  treatment:
    '<p>活动期以糖皮质激素和免疫抑制或生物制剂控制炎症，同时管理血压和血栓风险；严重狭窄或动脉瘤可在合适时机评估介入或手术。</p>',
  prognosis:
    '<p>规范控制炎症和随访可降低并发症风险，但复发、血管再狭窄、高血压、卒中和心脏并发症仍需长期监测。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 430,
    name: 'takayasu-arteritis-journey.png',
    url: '/images/diseases/takayasu-arteritis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

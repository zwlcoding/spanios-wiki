import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFibrodysplasiaOssificansProgressiva: DiseaseDraft = {
  ...entity(2028, 'disease-fibrodysplasia-ossificans-progressiva'),
  name: '进行性骨化性纤维发育不良',
  nameEn: 'Fibrodysplasia ossificans progressiva',
  alias: 'FOP、进行性肌炎骨化症、ACVR1相关异位骨化、第二批罕见病目录第 28 项',
  slug: 'fibrodysplasia-ossificans-progressiva',
  oneSentence:
    '进行性骨化性纤维发育不良是一种 ACVR1 基因相关的罕见结缔组织病，软组织会在反复肿痛后逐渐变成骨样组织，导致关节活动受限和身体僵硬。',
  plainName: '软组织会逐渐长出“第二套骨骼”的遗传病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其约每 100 万人 1 例，全球仅报道数百例。',
  quickLook: {
    whatItIs:
      'FOP 的典型线索是出生时大脚趾畸形，儿童期开始出现颈肩背等部位反复疼痛肿胀，之后形成异位骨化。外伤、肌肉注射、手术活检和病毒感染都可能诱发发作。',
    whoToSeeFirst:
      '孩子有先天大脚趾异常并伴软组织反复肿块、活动受限，应先找熟悉 FOP 的骨科/儿科骨科/遗传门诊。疑似 FOP 时要避免不必要活检、手术和肌肉注射。',
    isGenetic:
      'FOP 多由 ACVR1 新发变异引起，属于常染色体显性机制；少数可家族遗传。确诊后仍建议遗传咨询。',
    hasTreatment:
      '管理重点是避免创伤、及时处理发作、维护功能和呼吸健康。部分国家/地区已有 palovarotene 等获批用于减少新异位骨化的药物，但适用年龄、风险和可及性需由专科判断。',
    commonDelayReason:
      '早期肿块常被误认为肿瘤、血管瘤、纤维瘤、皮肌炎或外伤后血肿，误做活检或手术可能导致更严重骨化。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生时或婴幼儿期发现大脚趾短、弯曲、外翻或形态异常。',
      '儿童期出现颈部、背部、肩部或四肢软组织反复疼痛肿胀，随后局部变硬、活动变差。',
      '轻微摔伤、肌肉注射、牙科操作或感染后出现异常骨化或关节僵硬加重。',
      '影像显示软组织异位骨化，且没有更合理的外伤、肿瘤或感染解释。',
    ],
    commonWrongTurns: [
      '把早期肿块当作肿瘤做活检或切除，反而诱发更多骨化。',
      '按普通肌炎、血肿或纤维瘤反复处理，没有检查大脚趾和 ACVR1。',
      '接受不必要的肌肉注射、深部按摩、强力牵拉或高风险手术。',
      '只关注骨化影像，没有提前规划气道、牙科、疫苗、跌倒预防和居家适配。',
    ],
    firstDepartments: ['骨科', '儿科骨科', '医学遗传科', '康复医学科'],
    diagnosisChecklist: [
      '拍照记录出生时大脚趾、拇指或其他骨骼异常，以及每次肿胀发作的位置和时间。',
      '带既往 X 线、CT、MRI、超声和手术/活检记录；疑似 FOP 时主动说明避免再活检。',
      '整理诱发因素：摔伤、注射、手术、牙科操作、病毒感染和疫苗接种方式。',
      '记录张口受限、吞咽、呼吸、睡眠、跌倒、疼痛和日常活动能力。',
    ],
    testsToAskAbout: [
      'ACVR1 基因检测，尤其是典型临床表现但仍需分子确认时。',
      '低创伤影像评估异位骨化范围；避免为了诊断而做不必要侵入性取样。',
      '肺功能、脊柱/胸廓活动、营养和牙科评估，尤其在张口或胸廓活动受限时。',
      '发作期处理方案、疼痛控制、疫苗接种方式和麻醉/气道风险预案。',
    ],
    questionsForDoctor: [
      '目前表现是否符合 FOP？还需要哪些检查可以避免创伤性操作？',
      '发作时如何用药、休息和观察？哪些操作必须避免？',
      'palovarotene 或临床研究是否适合我，风险和可及性如何？',
      '牙科、疫苗、跌倒预防、学校/工作适配和紧急气道预案怎么安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FOP 常从先天性大脚趾畸形开始。儿童期可出现颈、背、肩、躯干或四肢软组织疼痛、肿胀、发热样 flare-up，随后局部逐渐硬化并形成异位骨，限制关节活动。</p><p>随着病程进展，患者可能出现张口受限、进食和语言困难、脊柱和胸廓活动受限、跌倒风险增加、慢性疼痛和呼吸受限。创伤、手术、活检、肌肉注射和感染可诱发或加重发作。</p>',
    diagnosis:
      '<p>典型 FOP 可通过先天大脚趾畸形、进行性异位骨化和 ACVR1 致病变异来确认。很多情况下，临床线索已经很强，关键是避免为了“确诊”而进行活检或切除。</p><p>鉴别诊断包括肿瘤、侵袭性纤维瘤病、皮肌炎、外伤性骨化性肌炎、血肿和血管畸形。若疑似 FOP，应尽快转诊有经验的中心。</p>',
    treatment:
      '<p>管理首先是预防诱发因素：避免不必要手术、活检、肌肉注射、强力康复和高风险创伤。发作期可由医生短期使用抗炎、镇痛或其他方案，重点是减少疼痛和保护功能。</p><p>palovarotene 在美国获批用于特定年龄 FOP 患者减少新异位骨化体积，但有胚胎-胎儿毒性、儿童骨骺早闭等重要风险。是否使用需由熟悉 FOP 的专科团队评估。</p>',
    longTermCare:
      '<p>长期管理包括跌倒预防、低创伤运动和姿势保护、肺功能和胸廓活动监测、营养、牙科、疼痛、心理支持和居家/学校/工作适配。任何手术、麻醉或牙科操作前都应提前让团队制定创伤最小化方案。</p>',
    fertilityOrFamily:
      '<p>FOP 多为新发 ACVR1 变异，但遗传机制为常染色体显性。患者本人如有生育计划，应咨询遗传风险、妊娠风险、药物致畸风险和分娩/麻醉安排。</p>',
    emergencySigns:
      '<p>呼吸困难、严重胸廓或颈部受限、吞咽明显困难、跌倒后剧痛或功能快速下降、高热伴严重 flare-up、疑似气道问题或需要急诊手术/麻醉时，应立即就医并说明 FOP 诊断和避免创伤原则。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Fibrodysplasia ossificans progressiva',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/fibrodysplasia-ossificans-progressiva/',
    },
    {
      name: 'FDA: FDA approves first treatment for Fibrodysplasia Ossificans Progressiva',
      type: 'official',
      url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-fibrodysplasia-ossificans-progressiva',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>典型表现为先天大脚趾畸形，儿童期反复软组织疼痛肿胀并逐渐异位骨化，导致张口、肩颈、脊柱、胸廓和四肢活动受限。</p>',
  diagnosis:
    '<p>诊断依靠典型临床线索、影像显示异位骨化和 ACVR1 基因检测；疑似 FOP 时应避免活检、切除和其他不必要创伤性操作。</p>',
  treatment:
    '<p>管理以避免创伤和诱发因素、发作期抗炎镇痛、功能和呼吸维护为主；palovarotene 等药物是否适用需由熟悉 FOP 的专科团队评估。</p>',
  prognosis:
    '<p>FOP 通常逐渐进展，早期识别和避免创伤可减少可预防的骨化和功能损失；呼吸、营养、牙科和生活适配管理会影响长期生活质量。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [53],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 382,
    name: 'fibrodysplasia-ossificans-progressiva-journey.png',
    url: '/images/diseases/fibrodysplasia-ossificans-progressiva-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

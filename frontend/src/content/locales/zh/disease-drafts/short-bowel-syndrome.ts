import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseShortBowelSyndrome: DiseaseDraft = {
  ...entity(2073, 'disease-short-bowel-syndrome'),
  name: '短肠综合征',
  nameEn: 'Short bowel syndrome',
  alias: 'SBS；短肠综合征；第二批罕见病目录第 73 项',
  oneSentence:
    '短肠综合征是小肠过短或功能受损，无法吸收足够水分、电解质和营养的疾病，可导致腹泻、脱水、营养不良和长期静脉营养需求。',
  plainName: '肠道吸收面积不够，吃进去也吸收不够的疾病',
  prevalence:
    '已纳入中国第二批罕见病目录；慢性短肠综合征总体罕见，常见于肠切除术后、先天肠道异常、坏死性小肠结肠炎或克罗恩病等背景。',
  quickLook: {
    whatItIs:
      '小肠负责吸收大部分营养和水分。短肠综合征时，剩余肠道不够长或功能不足，身体可能需要肠内营养、口服补液或静脉营养来维持。',
    whoToSeeFirst:
      '肠切除后持续大量腹泻、体重下降、脱水、电解质紊乱，或儿童生长不良，应到胃肠/营养支持团队和肠康复门诊。',
    isGenetic:
      '多数不是遗传病。婴幼儿可由先天肠闭锁、腹裂、肠旋转不良等导致；成人常与手术、缺血、克罗恩病或放射损伤有关。',
    hasTreatment:
      '治疗包括个体化饮食、口服补液、肠内营养、静脉营养、止泻和抑酸药、GLP-2 类药物、肠道重建手术或少数肠移植评估。',
    commonDelayReason:
      '患者常只被看作普通腹泻或术后恢复慢，未系统评估剩余肠段、结肠是否保留、液体电解质和静脉营养并发症。',
  },
  patientJourney: {
    whenToSuspect: [
      '有小肠大段切除、坏死性小肠结肠炎、肠闭锁、腹裂、肠旋转不良、克罗恩病或肠缺血手术史。',
      '长期水样或脂肪泻、体重下降、脱水、尿量减少、低镁低钾或肾结石。',
      '儿童喂养困难、生长不良，或成人需要长期静脉营养/补液才能维持。',
    ],
    commonWrongTurns: [
      '只反复止泻，没有评估脱水、电解质、营养缺乏和肾肝并发症。',
      '随意多喝白水或含糖饮料，反而加重高输出和脱水。',
      '长期静脉营养但缺少导管感染、血栓和肝病监测。',
    ],
    firstDepartments: [
      '消化内科/小儿消化',
      '临床营养科',
      '肠康复/营养支持团队',
      '普外科或小儿外科',
    ],
    diagnosisChecklist: [
      '带手术记录，说明剩余小肠长度、是否保留回盲瓣和结肠。',
      '带体重、生长曲线、每日大便/造口量、尿量、饮食和补液记录。',
      '带电解质、肝肾功能、微量元素、维生素、骨密度、导管感染和血栓记录。',
    ],
    testsToAskAbout: [
      '是否处于急性期、适应期还是维持期，剩余肠道还有多少适应空间。',
      '口服补液盐、饮食结构、肠内营养和静脉营养比例如何调整。',
      '是否适合 teduglutide 等 GLP-2 类治疗、肠道重建或肠移植评估。',
    ],
    questionsForDoctor: [
      '我的高输出/腹泻主要来自哪些肠段缺失或功能问题？',
      '哪些饮料、食物和补充剂适合我，哪些会让脱水更重？',
      '怎样监测导管感染、肝病、肾结石、骨质疏松和微量营养素缺乏？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>短肠综合征的核心是吸收不足。常见表现包括腹泻或造口高输出、口渴、尿量减少、乏力、体重下降、营养不良、低钠低钾低镁、脂溶性维生素缺乏和儿童生长不良。</p><p>并发症包括脱水、肾结石、胆结石、骨量减少、肠道细菌过度生长、导管感染、血栓和肠衰竭相关肝病。症状取决于剩余小肠长度、是否保留结肠和回盲瓣、基础病因以及适应程度。</p>',
    diagnosis:
      '<p>诊断依靠手术和病史、剩余肠段情况、腹泻或造口量、营养状态和实验室检查。医生会评估液体、电解质、肝肾功能、微量元素、维生素、骨健康和静脉营养相关并发症。</p><p>影像和内镜用于了解剩余肠道、狭窄、炎症或细菌过度生长。儿童还要看生长曲线和喂养能力。</p>',
    treatment:
      '<p>治疗目标是维持水分和营养、促进肠道适应、减少静脉营养依赖并预防并发症。方案可包括个体化饮食、口服补液盐、肠内营养、静脉营养、止泻药、抑酸药、胆盐结合剂或抗生素。</p><p>部分慢性肠衰竭患者可评估 GLP-2 类药物以提高吸收。若存在可纠正的肠道结构问题，可考虑肠道重建；长期静脉营养出现危及生命并发症时，可能需要肠移植评估。</p>',
    longTermCare:
      '<p>长期管理需要消化、营养、外科、护理、药学和心理支持。家庭应记录体重、输入输出量、尿量、造口量、发热和导管情况，并按计划复查肝肾功能、电解质、微量元素、维生素和骨密度。</p><p>静脉营养患者需严格导管护理，出现发热寒战要按导管感染处理流程就医。</p>',
    fertilityOrFamily:
      '<p>短肠综合征多数不是遗传病。儿童病例若由先天畸形导致，未来妊娠可与产科和遗传/小儿外科团队讨论复发风险和产前超声线索。</p>',
    emergencySigns:
      '<p>尿量明显减少、头晕晕厥、持续呕吐、严重腹痛、发热寒战、导管红肿渗液、血便、意识改变或儿童无泪/嗜睡，应急诊评估脱水、感染或腹部急症。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Short Bowel Syndrome',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/short-bowel-syndrome',
    },
    {
      name: 'NIDDK: Treatment of Short Bowel Syndrome',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/short-bowel-syndrome/treatment',
    },
  ],
  symptoms:
    '<p>常见腹泻或造口高输出、脱水、体重下降、乏力、电解质紊乱、营养不良、维生素和微量元素缺乏，儿童可有生长不良。</p>',
  diagnosis:
    '<p>诊断结合肠切除或肠道疾病史、剩余肠段、输入输出量、营养状态、血液和粪便检查、影像及并发症评估。</p>',
  treatment:
    '<p>治疗包括个体化饮食、口服补液、肠内或静脉营养、药物减少高输出和促进吸收，必要时肠道重建或肠移植评估。</p>',
  prognosis:
    '<p>预后取决于剩余肠道长度和部位、结肠是否保留、肠道适应、静脉营养并发症和肠康复资源。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'short-bowel-syndrome',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 427,
    name: 'short-bowel-syndrome-journey.png',
    url: '/images/diseases/short-bowel-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

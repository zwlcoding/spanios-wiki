import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseErdheimChesterDisease: DiseaseDraft = {
  ...entity(26, 'disease-erdheim-chester-disease'),
  name: 'Erdheim-Chester病',
  nameEn: 'Erdheim-Chester Disease',
  alias: 'ECD、Erdheim-Chester disease、非朗格汉斯细胞组织细胞增生症',
  slug: 'erdheim-chester-disease',
  oneSentence:
    'Erdheim-Chester病是一种极罕见的组织细胞肿瘤/组织细胞增生症，可累及长骨、肾脏周围组织、心血管、肺、眼眶、脑和垂体等多个部位。',
  plainName: '组织细胞异常增多并浸润多个器官的罕见血液免疫相关疾病',
  prevalence:
    '全球病例数很少，主要见于成人，实际患患者数可能因误诊和漏诊而被低估。',
  quickLook: {
    whatItIs:
      '组织细胞是免疫系统中的一种细胞。ECD 中这些细胞异常增多并进入组织器官，造成炎症、纤维化或器官损伤；不少患者可检测到 BRAF 或 MAPK-ERK 通路相关体细胞变异。',
    whoToSeeFirst:
      '出现不明原因双侧长骨痛、眼球突出、尿崩症、肾周/腹膜后纤维化、心包或主动脉周围病变、肺或中枢神经受累时，可到血液科/组织细胞疾病专科或肿瘤内科评估。',
    isGenetic:
      '通常不是家族遗传病。相关突变多为后天获得的体细胞变异，不代表一定会遗传给子女。',
    hasTreatment:
      '有分子检测指导下的靶向治疗、免疫/抗炎治疗和器官支持治疗等方案，但需要由有经验的多学科团队根据累及器官和突变状态制定。',
    commonDelayReason:
      '症状分散在骨科、眼科、肾内、心血管、呼吸、神经和内分泌等多个专科，且影像表现容易被当作纤维化、炎症或其他肿瘤。',
  },
  patientJourney: {
    whenToSuspect: [
      '成年人出现长期双侧小腿或大腿骨痛，影像提示对称性长骨硬化。',
      '尿崩症、眼眶肿块或眼球突出与骨痛、腹膜后或心血管影像异常并存。',
      'CT/MRI 提示肾周包绕、腹膜后纤维化、主动脉周围包绕或右心房假性肿块。',
      '肺、心脏、肾脏、中枢神经或垂体多系统受累，普通诊断无法解释。',
      '活检提示非朗格汉斯细胞组织细胞增生，并需要进一步分子检测。',
    ],
    commonWrongTurns: [
      '只按骨关节炎、纤维化、IgG4 相关病、淋巴瘤或转移瘤处理，没有组织病理和分子检测。',
      '各器官问题分散就诊，没人把骨痛、尿崩症、眼眶和腹膜后影像联系起来。',
      '只有影像怀疑但没有取得合适组织活检，导致无法确认分型和突变状态。',
      '忽略心血管和中枢神经受累，这些部位会显著影响风险评估。',
    ],
    firstDepartments: [
      '血液科/组织细胞疾病专科',
      '肿瘤内科',
      '风湿免疫科（鉴别 IgG4 相关病、血管炎等）',
      '内分泌科（尿崩症或垂体受累时）',
      '心血管、肾内、呼吸、神经、眼科等受累器官专科',
    ],
    diagnosisChecklist: [
      '整理骨痛、尿量变化、眼部症状、胸闷气促、神经症状、肾脏或腹膜后影像资料。',
      '带上 PET-CT、骨扫描、CT/MRI、心脏影像和既往病理切片/蜡块信息。',
      '向医生确认是否需要病变组织活检，并进行 BRAF 和 MAPK-ERK 通路相关分子检测。',
      '评估心脏、中枢神经、肺、肾脏和内分泌受累范围。',
      '确认是否已鉴别 Langerhans 细胞组织细胞增生、Rosai-Dorfman 病、IgG4 相关病、淋巴瘤和感染。',
    ],
    testsToAskAbout: [
      '病变组织活检、免疫组化和血液病理/组织细胞病专家复核。',
      'BRAF V600E 及 MAPK-ERK 通路相关分子检测。',
      '全身 PET-CT、骨扫描或针对长骨的影像检查。',
      '心脏 MRI/超声、胸腹部 CT、脑和垂体 MRI。',
      '肾功能、炎症指标、内分泌功能和尿崩症相关评估。',
    ],
    questionsForDoctor: [
      '我的影像和病理是否符合 ECD？还需要复核哪些组织或影像？',
      '有没有 BRAF 或其他 MAPK 通路变异？这会怎样影响治疗选择？',
      '目前哪些器官受累最影响风险？需要哪些专科共同管理？',
      '治疗效果用什么指标判断？多久复查影像和器官功能？',
      '哪些症状提示心脏、中枢神经或肾脏问题需要急诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>ECD 可累及长骨、皮肤、肺、心脏、肾脏、腹膜后、眼眶、脑、垂体和其他组织。常见线索包括骨痛、乏力、发热、体重下降、眼球突出或眼眶肿块、尿崩症、肾周或腹膜后纤维化、肺部症状、心血管受累和神经系统症状。不同患者差异很大，也可能以单一器官问题起病。</p>',
    diagnosis:
      '<p>诊断需要结合典型影像、受累器官表现、病变组织活检、免疫组化和分子检测。国际共识强调，即使影像高度提示，也应尽量取得病变组织以确认诊断并检测 BRAF/MAPK-ERK 通路变异。医生还需要鉴别其他组织细胞病、IgG4 相关病、血管炎、淋巴瘤、感染和转移性肿瘤。</p>',
    treatment:
      '<p>治疗取决于症状严重程度、器官受累范围和分子检测结果，可能包括靶向治疗、免疫或抗炎治疗、局部/器官支持治疗和多学科随访。心脏、中枢神经、肺或肾脏受累者通常需要更严密管理。患者不要自行按肿瘤或炎症经验用药。</p>',
    longTermCare:
      '<p>长期照护重点是监测受累器官功能、治疗反应、影像变化和药物不良反应。建议保存病理报告、分子检测结果、PET-CT/CT/MRI 资料和关键实验室指标，复诊时帮助多学科团队判断进展。</p>',
    fertilityOrFamily:
      '<p>ECD 通常不是遗传性疾病，常见分子改变多为体细胞变异。有生育计划时，重点是与主诊团队讨论疾病活动度、器官受累和正在使用治疗对妊娠的影响。</p>',
    emergencySigns:
      '<p>突发胸痛、气促、晕厥、神经功能缺损、剧烈头痛、意识改变、尿量明显变化、肾功能快速恶化或眼眶症状快速加重时，应尽快急诊或联系主管团队。</p>',
  },
  sources: [
    {
      name: 'NCI Dictionary: Erdheim-Chester disease',
      type: 'official',
      url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/erdheim-chester-disease',
    },
    {
      name: 'GARD: Erdheim-Chester disease',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
    },
    {
      name: 'Blood: ECD consensus recommendations in the molecular era',
      type: 'clinical-guideline',
      url: 'https://ashpublications.org/blood/article/135/22/1929/452713/Erdheim-Chester-disease-consensus-recommendations',
    },
  ],
  symptoms:
    '<p>可表现为长骨痛、尿崩症、眼眶病变、腹膜后/肾周纤维化、肺、心脏或中枢神经受累，以及发热、乏力、体重下降。</p>',
  diagnosis:
    '<p>评估依赖影像、受累组织活检、免疫组化、BRAF/MAPK 通路分子检测和多系统受累评估。</p>',
  treatment:
    '<p>治疗需按突变状态和器官受累个体化制定，可能涉及靶向治疗、免疫/抗炎治疗和器官支持。</p>',
  prognosis:
    '<p>预后差异很大，取决于心脏、中枢神经、肺、肾等关键器官受累和治疗反应。</p>',
  sourceName: 'GARD: Erdheim-Chester disease',
  sourceUrl:
    'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 325,
    name: 'erdheim-chester-disease-journey.png',
    url: '/images/diseases/erdheim-chester-disease-journey.png',
  },
  tagSlugs: [],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePemphigus: DiseaseDraft = {
  ...entity(2058, 'disease-pemphigus'),
  name: '天疱疮',
  nameEn: 'Pemphigus',
  alias:
    '自身免疫性大疱病；寻常型天疱疮；落叶型天疱疮；第二批罕见病目录第 58 项',
  slug: 'pemphigus',
  oneSentence:
    '天疱疮是一组自身免疫性大疱病，免疫系统攻击皮肤和黏膜细胞之间的连接，导致反复水疱、糜烂和疼痛性口腔或皮肤破损。',
  plainName: '一种会让皮肤和口腔反复起疱、破溃的自身免疫病',
  prevalence:
    '已纳入中国第二批罕见病目录；总体罕见，寻常型天疱疮常累及口腔黏膜，落叶型更多累及浅表皮肤。',
  quickLook: {
    whatItIs:
      '天疱疮不是普通过敏或感染。体内抗体攻击桥粒蛋白，皮肤细胞之间连接变松，轻微摩擦也可能形成水疱或糜烂。',
    whoToSeeFirst:
      '反复口腔糜烂、皮肤松弛性水疱或大片破溃，应到皮肤科，最好是自身免疫大疱病或皮肤病理经验较多的团队。',
    isGenetic:
      '通常不是单基因遗传病，家族筛查不是常规。药物、免疫状态和个体易感可能影响发病。',
    hasTreatment:
      '治疗通常需要系统免疫治疗。糖皮质激素、利妥昔单抗和其他免疫抑制剂可控制病情，但也需要感染、骨质疏松、血糖和疫苗管理。',
    commonDelayReason:
      '早期口腔病变常被当作口腔溃疡、牙周病、念珠菌感染或湿疹；没有做活检和直接免疫荧光，容易反复误治。',
  },
  patientJourney: {
    whenToSuspect: [
      '口腔、咽喉、生殖器或皮肤反复糜烂，疼痛明显，几周不愈或反复复发。',
      '皮肤出现松弛水疱、破后变成糜烂面，轻微摩擦会扩大。',
      '外用药、抗感染或普通口腔溃疡治疗效果差，进食和体重受影响。',
      '有大片皮肤破损、渗液、发热或感染迹象。',
    ],
    commonWrongTurns: [
      '长期按口腔溃疡、湿疹、药疹或感染处理，没有做皮肤/黏膜活检。',
      '只做普通病理，没有在合适部位做直接免疫荧光。',
      '自行长期使用激素或免疫抑制药，没有监测感染、血糖、骨骼和肝肾功能。',
    ],
    firstDepartments: [
      '皮肤科',
      '口腔黏膜病门诊',
      '皮肤病理/免疫大疱病专病门诊',
      '急诊（大面积糜烂或感染时）',
    ],
    diagnosisChecklist: [
      '拍照记录水疱和糜烂部位、持续时间、疼痛、进食影响和用药反应。',
      '带既往口腔科、皮肤科病历、病理、免疫荧光和抗体检测报告。',
      '整理近期新药、感染、妊娠、疫苗、基础病和免疫抑制史。',
      '记录发热、渗液、体重下降、吞咽困难和眼/生殖器受累。',
    ],
    testsToAskAbout: [
      '皮肤或黏膜活检做常规病理，并在病灶旁正常外观皮肤/黏膜做直接免疫荧光。',
      '血清抗桥粒芯糖蛋白 1/3 抗体或间接免疫荧光。',
      '治疗前筛查乙肝、结核、肝肾功能、血糖、血脂、骨密度和疫苗状态。',
      '与大疱性类天疱疮、黏膜类天疱疮、重症药疹、感染和其他口腔黏膜病鉴别。',
    ],
    questionsForDoctor: [
      '我是寻常型、落叶型还是其他类型？黏膜受累范围有多大？',
      '是否适合利妥昔单抗？激素如何减量，复发时怎么处理？',
      '免疫治疗期间如何预防感染、骨质疏松、血糖升高和胃肠道副作用？',
      '哪些皮肤破损、发热或疼痛变化提示需要急诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>寻常型天疱疮常先出现疼痛性口腔糜烂，影响进食、刷牙和说话，也可累及咽喉、鼻腔、眼、生殖器和肛周。皮肤水疱通常较松弛，容易破裂，留下潮红糜烂面。</p><p>落叶型天疱疮多为浅表痂皮、鳞屑和糜烂，黏膜受累较少。大片皮肤破损会造成疼痛、渗液、感染、脱水和营养问题。</p>',
    diagnosis:
      '<p>诊断需要临床表现、病理和免疫学证据。医生通常从新鲜水疱边缘取材做常规病理，并从病灶旁外观相对正常皮肤或黏膜取材做直接免疫荧光。</p><p>血清抗 Dsg1、Dsg3 抗体和间接免疫荧光有助于分型和随访。需要与大疱性类天疱疮、黏膜类天疱疮、重症药疹、感染性水疱病、复发性口腔溃疡和其他免疫皮肤病鉴别。</p>',
    treatment:
      '<p>治疗目标是尽快停止新疱形成、促进糜烂愈合、减少激素暴露和预防感染。中重度患者常需系统糖皮质激素联合利妥昔单抗或其他免疫抑制剂；轻症可结合局部治疗和口腔护理。</p><p>免疫治疗期间要监测感染、血糖、血压、骨质疏松、胃肠道、肝肾功能和血细胞。伤口护理、止痛、营养、口腔清洁和避免摩擦同样重要。不要自行突然停用系统激素。</p>',
    longTermCare:
      '<p>天疱疮常需长期随访。医生会根据新疱数量、糜烂面积、抗体水平、药物副作用和感染情况调整治疗。患者应保存照片，记录复发诱因和用药变化。</p><p>长期激素或免疫抑制可能需要骨密度、眼科、血糖血脂、疫苗和感染预防计划。口腔疼痛明显时，营养支持和牙科/口腔黏膜团队参与很重要。</p>',
    fertilityOrFamily:
      '<p>天疱疮通常不是遗传病。育龄患者应在病情稳定时与医生讨论妊娠计划，因为部分免疫抑制药需提前停用或替换，孕期和哺乳期用药需要专科评估。</p>',
    emergencySigns:
      '<p>大面积皮肤剥脱、发热寒战、破损处红肿流脓、明显脱水、无法进食饮水、眼痛视力下降、呼吸或吞咽困难，或免疫治疗后严重感染表现，应急诊处理。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus: Pemphigus',
      type: 'official',
      url: 'https://medlineplus.gov/pemphigus.html',
    },
    {
      name: 'American Academy of Dermatology: Pemphigus',
      type: 'patient-organization',
      url: 'https://www.aad.org/public/diseases/a-z/pemphigus-overview',
    },
  ],
  symptoms:
    '<p>可出现反复口腔或黏膜糜烂、松弛性水疱、皮肤破溃、痂皮、疼痛、进食困难、渗液和继发感染。</p>',
  diagnosis:
    '<p>诊断依靠临床表现、皮肤/黏膜活检病理、直接免疫荧光，以及 Dsg1/Dsg3 抗体或间接免疫荧光检测。</p>',
  treatment:
    '<p>治疗包括系统或局部糖皮质激素、利妥昔单抗和其他免疫抑制剂、伤口和口腔护理、感染预防、营养与疼痛管理。</p>',
  prognosis:
    '<p>现代免疫治疗使多数患者可控制病情，但复发和药物副作用常见，需要长期随访和感染风险管理。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 412,
    name: 'pemphigus-journey.png',
    url: '/images/diseases/pemphigus-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

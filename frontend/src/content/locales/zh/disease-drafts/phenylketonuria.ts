import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePhenylketonuria: DiseaseDraft = {
  ...entity(500, 'disease-phenylketonuria'),
  name: '苯丙酮尿症',
  nameEn: 'Phenylketonuria',
  alias: 'PKU、苯丙氨酸羟化酶缺乏症、PAH deficiency、高苯丙氨酸血症',
  slug: 'phenylketonuria',
  oneSentence:
    '苯丙酮尿症是一种常染色体隐性遗传的氨基酸代谢病，因苯丙氨酸羟化酶缺乏导致苯丙氨酸在体内蓄积，新生儿筛查可早期发现，终身低苯丙氨酸饮食是主要治疗手段。',
  plainName: '不能吃普通含蛋白质食物的遗传性代谢病',
  prevalence:
    '全球发病率约 1/10,000–24,000 活产儿，中国约 1/15,924；不同地区和种族差异较大，北欧、土耳其及中国部分地区发病率相对较高。',
  searchIntents: [
    '苯丙酮尿症 新生儿筛查',
    'PKU 饮食管理',
    '苯丙酮尿症 能治愈吗',
    'PKU 怀孕 注意事项',
    '苯丙酮尿症 特殊奶粉',
  ],
  quickLook: {
    whatItIs:
      '苯丙酮尿症是由于 PAH 基因突变导致肝脏苯丙氨酸羟化酶缺乏或活性降低，使苯丙氨酸不能正常转化为酪氨酸，从而在体内蓄积，影响大脑发育。',
    whoToSeeFirst:
      '新生儿筛查阳性时应转诊至儿童内分泌遗传代谢科或新生儿科；已确诊患者需终身在遗传代谢专科随访，孕期需高危产科联合遗传代谢科管理。',
    isGenetic:
      '是常染色体隐性遗传病，父母各携带一个突变基因时，子女有 25% 概率患病。可通过基因检测和产前诊断进行家系筛查。',
    hasTreatment:
      '有明确治疗路径。新生儿期开始终身低苯丙氨酸饮食是基石；部分患者对沙丙蝶呤反应良好，可放宽饮食；成人难治性患者可考虑酶替代治疗。基因治疗尚在临床试验阶段。',
    commonDelayReason:
      '新生儿期无症状，部分家长对筛查阳性结果重视不足，未按时复查和确诊；年长儿或成人因饮食放松导致认知下降，常被误认为普通学习困难或情绪问题。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿足跟血筛查提示苯丙氨酸升高或筛查阳性。',
      '婴儿期出现发育迟缓、皮肤毛发颜色变浅、湿疹、尿液或体表有霉味/鼠尿味。',
      '未治疗儿童出现智力障碍、癫痫、行为异常、小头畸形。',
      '成人出现注意力不集中、情绪不稳、记忆力下降，既往有 PKU 病史但饮食控制不佳。',
      '孕期检查发现胎儿可能受累，或夫妻双方已知为携带者。',
    ],
    commonWrongTurns: [
      '认为新生儿筛查阳性是"假阳性"，未按时复查和确诊。',
      '婴幼儿期把发育迟缓归因于"说话晚"或"个体差异"，未追查代谢病因。',
      '年长儿饮食放松后成绩下降，被误认为懒惰或普通学习障碍。',
      '成人情绪不稳被单纯诊断为焦虑/抑郁，未考虑代谢控制情况。',
      '误以为"长大就不用控制饮食"，导致不可逆的神经认知损害。',
    ],
    firstDepartments: [
      '儿童内分泌遗传代谢科',
      '新生儿科（筛查阳性时）',
      '遗传咨询门诊',
      '高危产科/产前诊断中心（孕期管理）',
      '临床营养科（饮食方案制定）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查结果、足跟血苯丙氨酸数值和复查记录。',
      '完善血苯丙氨酸和酪氨酸浓度测定，明确分型（经典型、轻度 PKU、非 PKU 高苯丙氨酸血症）。',
      '进行 PAH 基因检测，明确突变位点，指导治疗和家系筛查。',
      '评估发育里程碑、智力水平、脑电图（如有癫痫或发育倒退）。',
      '有生育计划时进行配偶携带者筛查和产前咨询。',
    ],
    testsToAskAbout: [
      '血苯丙氨酸和酪氨酸浓度测定。',
      'PAH 基因突变检测。',
      'BH4 负荷试验（判断是否为 BH4 反应型）。',
      '发育评估和智力测试。',
      '脑电图、头颅 MRI（如有神经症状）。',
    ],
    questionsForDoctor: [
      '我的孩子属于经典型还是轻度型？血苯丙氨酸的目标范围是多少？',
      '饮食控制需要多严格？可以吃哪些食物？必须避免哪些食物？',
      '是否适合尝试沙丙蝶呤？需要做哪些检查来判断？',
      '成年后是否仍需严格控制饮食？对工作和社交有什么影响？',
      '计划生育时需要注意什么？如何降低下一代患病风险？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>新生儿期通常外观正常，无特异性表现。未经治疗者，3–6 个月起逐渐出现发育迟缓、对周围环境反应减弱；1 岁左右可见智力障碍、皮肤及毛发色素减少、湿疹、尿液和汗液有特殊的霉味或鼠尿味。部分患儿出现癫痫发作、肌张力异常、小头畸形及行为问题（多动、自伤、自闭症样表现）。成人患者若代谢控制不佳，可表现为执行功能下降、注意力不集中、情绪障碍和认知退化。孕期苯丙氨酸控制不良可导致胎儿先天性心脏病、小头畸形和智力障碍（母体 PKU 综合征）。</p>',
    diagnosis:
      '<p>诊断主要依靠新生儿筛查和血苯丙氨酸测定。所有新生儿应在出生后 24–72 小时采集足跟血进行筛查，若苯丙氨酸浓度升高需尽快复查确诊。经典型 PKU 血苯丙氨酸通常 >1200 μmol/L（20 mg/dL），轻度型和非 PKU 高苯丙氨酸血症血苯丙氨酸较低。PAH 基因检测可明确致病突变，指导分型和家系筛查。BH4 负荷试验用于鉴别 BH4 反应型患者，约 20–55% 患者对沙丙蝶呤有反应。</p>',
    treatment:
      '<p>治疗核心是终身维持血苯丙氨酸在安全范围（儿童目标 120–360 μmol/L）。低苯丙氨酸饮食是基石，需避免肉类、鱼类、蛋类、奶制品、坚果及含阿斯巴甜的食物，使用特殊配方奶粉提供无苯丙氨酸的蛋白质和营养。部分患者对沙丙蝶呤（BH4 类似物）反应良好，可放宽饮食限制。2025 年 FDA 批准 sepiapterin 用于 1 月龄以上患者，研究显示 84% 患者可达标。成人难治性患者可考虑 pegvaliase（聚乙二醇化苯丙氨酸氨裂解酶）皮下注射，但需警惕过敏反应。大中性氨基酸（LNAA）可作为辅助。基因治疗处于早期临床试验阶段。</p>',
    longTermCare:
      '<p>PKU 需要终身管理。婴幼儿期重点在生长发育监测和饮食教育；学龄期关注学业表现和社交适应；青春期和成年期饮食依从性常下降，需加强心理支持和同伴教育。女性患者在怀孕前及整个孕期需将血苯丙氨酸严格控制在 120–360 μmol/L，以防母体 PKU 综合征。定期监测血苯丙氨酸、发育/智力评估、营养状态（微量元素、维生素 B12、铁等）和骨密度。建立患者-家庭-医护团队-营养师的多学科协作模式。</p>',
    fertilityOrFamily:
      '<p>PKU 为常染色体隐性遗传，患者父母通常为无症状携带者。患者生育时，配偶应进行 PAH 基因携带者筛查；若配偶亦为携带者，子女有 25% 概率患病。可通过产前诊断（羊水穿刺或绒毛取样）或胚胎植入前遗传学检测（PGT）降低风险。女性患者孕前需优化代谢控制至少 3 个月，并在孕期持续监测和调整饮食。遗传咨询门诊可为患者家庭提供风险评估和生育规划指导。</p>',
    emergencySigns:
      '<p>PKU 本身通常不表现为急性危象，但以下情况应尽快就医：婴幼儿出现不明原因的抽搐或癫痫发作；严重呕吐、拒食导致脱水；已知 PKU 患者因感染、手术或高蛋白饮食后血苯丙氨酸急剧升高伴意识改变；孕期血苯丙氨酸控制不良伴胎儿生长受限或异常。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Phenylketonuria (PKU)',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK535378/',
    },
    {
      name: 'MedlinePlus Genetics: Phenylketonuria',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/phenylketonuria/',
    },
    {
      name: 'NICHD: Phenylketonuria (PKU)',
      type: 'official',
      url: 'https://www.nichd.nih.gov/health/topics/pku',
    },
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/yjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>新生儿期通常无症状，3–6 个月起出现发育迟缓、皮肤毛发变浅、湿疹、霉味尿；未治疗者可进展为智力障碍、癫痫、行为异常、小头畸形。成人控制不佳者可有认知下降和情绪障碍。</p>',
  diagnosis:
    '<p>新生儿足跟血筛查是主要发现途径，确诊依赖血苯丙氨酸测定和 PAH 基因检测。BH4 负荷试验用于判断药物反应型。</p>',
  treatment:
    '<p>终身低苯丙氨酸饮食是基础，部分患者可获益于沙丙蝶呤或 sepiapterin。成人难治者可考虑 pegvaliase 酶替代治疗。</p>',
  prognosis:
    '<p>新生儿筛查和早期饮食干预可使大多数患儿智力发育正常。终身管理对维持认知功能和生活质量至关重要。</p>',
  sourceName: 'NCBI StatPearls: Phenylketonuria (PKU)',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK535378/',
  categorySlug: 'metabolic',
  charityIds: [45],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 500,
    name: 'phenylketonuria-journey.png',
    url: '/images/diseases/phenylketonuria-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

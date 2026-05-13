import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePik3caRelatedOvergrowthSyndrome: DiseaseDraft = {
  ...entity(2061, 'disease-pik3ca-related-overgrowth-syndrome'),
  name: 'PIK3CA相关过度生长综合征',
  nameEn: 'PIK3CA-related overgrowth spectrum',
  alias: 'PROS；PIK3CA 相关过度生长谱系；第二批罕见病目录第 61 项',
  slug: 'pik3ca-related-overgrowth-syndrome',
  oneSentence:
    'PIK3CA相关过度生长综合征是一组由 PIK3CA 体细胞激活变异导致的疾病，可造成身体某些部位、血管、淋巴、脂肪、骨骼或脑组织不对称过度生长。',
  plainName: '一种身体局部组织过度生长、常伴血管或淋巴畸形的基因嵌合病',
  prevalence:
    '已纳入中国第二批罕见病目录；总体罕见，很多患者因表现分散在血管畸形、肢体肥大、脊柱或脑发育异常等不同专科而延迟识别。',
  quickLook: {
    whatItIs:
      'PROS 不是单一病名，而是一组谱系病，包括 CLOVES、巨脑-毛细血管畸形、纤维脂肪过度生长、部分肢体过度生长等。多数变异发生在胚胎发育早期，所以不是全身每个细胞都有。',
    whoToSeeFirst:
      '儿童或成人出现不对称肢体/躯干过度生长、复杂血管或淋巴畸形、反复血栓或疼痛时，建议到医学遗传科、血管畸形/介入团队和相关外科多学科门诊。',
    isGenetic:
      '这是 PIK3CA 相关的遗传机制疾病，但多数是体细胞嵌合，通常不是父母遗传给孩子。检测常需要病变组织，血液阴性不能排除。',
    hasTreatment:
      '治疗包括压迫、康复、疼痛和血栓管理、介入/手术，以及部分重症或需系统治疗患者可评估 PI3K 抑制剂 alpelisib 的可及性和风险。',
    commonDelayReason:
      '患者常分别被诊断为血管瘤、淋巴管畸形、脂肪瘤、肢体肥大或脊柱问题，没有把过度生长和 PIK3CA 嵌合联系起来。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生时或儿童早期出现一侧肢体、手脚、躯干、面部或局部软组织明显过度生长。',
      '合并毛细血管、静脉或淋巴畸形，局部反复肿胀、渗漏、感染、疼痛或活动受限。',
      '过度生长区域随年龄变化，伴脊柱侧弯、关节问题、脂肪增生或神经系统表现。',
      '有原因不明的血栓、凝血异常、局部出血或复杂手术/介入史。',
    ],
    commonWrongTurns: [
      '只把病灶当普通血管瘤，未区分血管畸形和过度生长谱系。',
      '只做血液基因检测，阴性后就排除 PROS，没有考虑病变组织低比例嵌合。',
      '反复做局部手术但没有整体评估血栓、功能、疼痛和生长变化。',
    ],
    firstDepartments: [
      '医学遗传科',
      '血管畸形多学科门诊',
      '骨科/整形外科',
      '介入科和康复医学科',
    ],
    diagnosisChecklist: [
      '准备从出生到现在的照片、身高体重和肢体围度/长度变化记录。',
      '带 MRI、超声、血管影像、骨骼影像、手术和介入记录。',
      '记录疼痛、感染、出血、血栓、活动受限和日常功能影响。',
      '如做过基因检测，说明样本来源是血液、唾液、皮肤还是病变组织。',
    ],
    testsToAskAbout: [
      '病变组织或受累皮肤/血管畸形样本的 PIK3CA 深度测序或数字 PCR。',
      'MRI/血管影像评估软组织、血管、淋巴和骨骼受累范围。',
      '凝血和血栓风险评估，尤其是大型静脉/淋巴畸形或手术前。',
      '是否符合 alpelisib 等系统治疗评估条件，以及血糖、口腔炎、腹泻等不良反应监测。',
    ],
    questionsForDoctor: [
      '我的表现属于 PROS 哪一类？检测样本是否足以排除低比例嵌合？',
      '哪些问题适合观察、压迫、介入、手术、康复或系统药物？',
      '手术或介入前需要怎样评估血栓、出血和麻醉风险？',
      '家属和未来生育是否需要检测？如果多数是体细胞嵌合，复发风险如何解释？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PROS 的表现取决于变异发生时间和受累组织。常见线索包括局部或不对称过度生长、脂肪或纤维脂肪增生、毛细血管/静脉/淋巴畸形、肢体长度或围度差异、脚趾或手指异常、脊柱侧弯和关节问题。</p><p>部分患者有巨脑、癫痫、发育迟缓或神经系统表现。大型血管或淋巴畸形可导致疼痛、感染、渗漏、出血、凝血异常和血栓风险。外观变化也会带来心理和社会压力。</p>',
    diagnosis:
      '<p>诊断需要把临床谱系和分子证据结合起来。PIK3CA 变异常为体细胞嵌合，血液样本可能检测不到；更有价值的样本常来自受累皮肤、过度生长组织或血管畸形组织，并需要足够灵敏的检测方法。</p><p>影像用于定义病变范围和治疗计划，如 MRI、超声、静脉/淋巴影像和骨骼评估。还需要与 Proteus 综合征、PTEN 相关疾病、Klippel-Trenaunay 综合征和其他血管畸形/过度生长综合征鉴别。</p>',
    treatment:
      '<p>治疗目标是改善功能、疼痛、感染、血栓和生活质量。轻症可观察、压迫治疗、物理康复、疼痛管理和定期影像。血管/淋巴畸形可由介入、硬化、激光或手术团队评估，但要避免没有整体计划的反复操作。</p><p>对严重、进展或危及功能的 PROS，PI3K 抑制剂 alpelisib 在部分国家获批用于 2 岁及以上、需系统治疗的重症患者。用药需确认 PIK3CA 变异并监测高血糖、口腔炎、腹泻、皮疹和感染等风险。</p>',
    longTermCare:
      '<p>长期照护通常需要遗传、骨科、血管畸形/介入、整形、康复、疼痛、血液和心理支持团队。随访重点包括生长变化、肢体长度差、脊柱、凝血、血栓、感染、疼痛和活动能力。</p><p>儿童还需要鞋垫/支具、学校活动安排和外观相关心理支持。手术、长途旅行、制动或妊娠等情况下，应提前讨论血栓预防。</p>',
    fertilityOrFamily:
      '<p>多数 PROS 是胚胎发育早期发生的体细胞嵌合变异，父母通常不是携带者，兄弟姐妹复发风险一般较低。但若检测结果或家族史不典型，应由遗传医生解释，并讨论生育咨询。</p>',
    emergencySigns:
      '<p>突发肢体明显肿痛、胸痛气短、咯血、神经功能异常、持续出血、高热伴局部红肿、严重疼痛或快速增大的病灶，应急诊评估血栓、感染、出血或压迫并发症。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: PIK3CA gene',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/gene/pik3ca/',
    },
    {
      name: 'U.S. FDA: FDA approves alpelisib for PIK3CA-related overgrowth spectrum',
      type: 'official',
      url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-alpelisib-pik3ca-related-overgrowth-spectrum',
    },
  ],
  symptoms:
    '<p>可表现为局部或不对称过度生长、血管/淋巴畸形、肢体长度或围度差异、疼痛、感染、出血、血栓、脊柱和关节问题，部分有神经系统表现。</p>',
  diagnosis:
    '<p>诊断结合临床谱系、影像范围和 PIK3CA 体细胞嵌合检测；血液阴性不能排除，常需病变组织高灵敏检测。</p>',
  treatment:
    '<p>治疗包括压迫、康复、疼痛和血栓管理、介入/手术，重症或进展病例可评估 alpelisib 等 PI3K 通路治疗。</p>',
  prognosis:
    '<p>预后差异很大，取决于受累组织、血管/淋巴畸形范围、血栓感染风险和治疗可及性；长期多学科管理能减少功能损害。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 415,
    name: 'pik3ca-related-overgrowth-syndrome-journey.png',
    url: '/images/diseases/pik3ca-related-overgrowth-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

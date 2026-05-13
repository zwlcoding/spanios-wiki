import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePheochromocytoma: DiseaseDraft = {
  ...entity(2060, 'disease-pheochromocytoma'),
  name: '嗜铬细胞瘤',
  nameEn: 'Pheochromocytoma',
  alias: 'PCC；嗜铬细胞瘤/副神经节瘤；PPGL；第二批罕见病目录第 60 项',
  slug: 'pheochromocytoma',
  oneSentence:
    '嗜铬细胞瘤是起源于肾上腺髓质嗜铬细胞的神经内分泌肿瘤，可分泌儿茶酚胺，导致阵发性或持续性高血压、心悸、头痛和出汗。',
  plainName: '一种会突然释放升压激素、引起高血压发作的内分泌肿瘤',
  prevalence:
    '已纳入中国第二批罕见病目录；在高血压人群中少见，但因可导致高血压危象、心律失常和手术麻醉风险，需要主动识别。',
  quickLook: {
    whatItIs:
      '嗜铬细胞瘤发生在肾上腺，肾上腺外类似肿瘤称副神经节瘤。两者常合称 PPGL，核心问题是儿茶酚胺分泌过多或肿瘤相关风险。',
    whoToSeeFirst:
      '阵发性高血压、头痛、心悸、大汗或发现肾上腺偶发瘤，应到内分泌科；确诊后需要内分泌、泌尿/普外、麻醉和遗传团队协作。',
    isGenetic:
      'PPGL 是遗传相关比例较高的肿瘤之一，可与 RET、VHL、NF1、SDHB、SDHD 等基因有关，很多患者都应讨论遗传检测。',
    hasTreatment:
      '可手术者通常以手术切除为核心，但术前必须充分α受体阻滞、补液和血压心率准备。转移或不能切除者可考虑核医学、靶向、化疗或临床试验。',
    commonDelayReason:
      '症状像焦虑、惊恐发作、甲亢、偏头痛或普通高血压；如果在未准备情况下手术或使用某些药物，可能诱发危象。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复发作头痛、心悸、大汗、面色苍白或发抖，伴血压突然升高。',
      '年轻人高血压、难治性高血压，或血压忽高忽低、体位性低血压。',
      '体检发现肾上腺肿块，尤其伴高血压、心律失常或糖代谢异常。',
      '家族中有嗜铬细胞瘤/副神经节瘤、甲状腺髓样癌、VHL、NF1 或 SDHx 相关肿瘤。',
    ],
    commonWrongTurns: [
      '长期按焦虑或普通高血压处理，没有测血或尿甲氧基肾上腺素类。',
      '未排除嗜铬细胞瘤就对肾上腺肿块穿刺或手术。',
      '只用β受体阻滞剂控制心悸，没有先做α受体阻滞，可能加重高血压危象。',
    ],
    firstDepartments: [
      '内分泌科',
      '泌尿外科或肾上腺外科',
      '遗传咨询门诊',
      '急诊科（高血压危象时）',
    ],
    diagnosisChecklist: [
      '记录发作时间、血压心率、头痛心悸出汗、诱因、持续多久和用药反应。',
      '带肾上腺 CT/MRI、超声、体检报告和所有降压药/抗抑郁药/兴奋剂清单。',
      '整理家族中 PPGL、甲状腺髓样癌、肾癌、血管母细胞瘤、NF1 皮肤表现等病史。',
      '如已做生化检查，确认采样姿势、药物干扰和参考范围。',
    ],
    testsToAskAbout: [
      '血浆游离甲氧基肾上腺素类或 24 小时尿分馏甲氧基肾上腺素类。',
      '肾上腺 CT/MRI，必要时功能影像如 MIBG、PET/CT，用于定位和分期。',
      '术前α受体阻滞、盐和液体准备、心脏评估和麻醉计划。',
      '遗传检测组合：RET、VHL、NF1、SDHB、SDHD、SDHC、SDHA、MAX、TMEM127 等。',
    ],
    questionsForDoctor: [
      '这是肾上腺嗜铬细胞瘤还是副神经节瘤？是否有转移风险线索？',
      '手术前α受体阻滞需要多久？我的血压、心率和容量准备是否达标？',
      '哪些药物、麻醉、检查或穿刺需要避免，直到准备充分？',
      '我是否需要遗传检测？家属是否需要筛查？术后多久复查甲氧基肾上腺素类和影像？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>典型发作包括头痛、心悸、大汗和血压升高，可伴面色苍白、发抖、焦虑感、胸痛、恶心、体重下降或血糖升高。血压可持续升高，也可阵发性升高。</p><p>发作可能被手术、麻醉、分娩、创伤、某些药物、运动或肿瘤受压诱发。严重时可发生高血压危象、心律失常、心肌病、脑卒中、肺水肿或休克。</p>',
    diagnosis:
      '<p>筛查首选血浆游离甲氧基肾上腺素类或 24 小时尿分馏甲氧基肾上腺素类。采血姿势、应激、药物和睡眠不足都可能影响结果，轻度升高需要由内分泌医生判断是否复查或做进一步试验。</p><p>生化证据支持后，再用 CT/MRI 定位。多灶、肾上腺外、复发、转移或遗传风险病例可用 MIBG、PET/CT 等功能影像。PPGL 不应在未排除和未准备时轻易穿刺。</p>',
    treatment:
      '<p>可切除肿瘤的核心治疗是手术，但术前准备决定安全性。通常需要先使用α受体阻滞剂，逐步控制血压并扩充容量；若仍有心动过速，才在α阻滞充分后考虑β受体阻滞剂。</p><p>手术需有经验的外科和麻醉团队。转移、复发或不可切除病例可按生长速度和受体表达考虑观察、放射性核素治疗、MIBG 治疗、靶向药、化疗、消融或临床试验。术后仍需长期随访，因为可复发或晚期转移。</p>',
    longTermCare:
      '<p>术后需要复查血压、症状和甲氧基肾上腺素类，确认生化缓解。遗传相关、肾上腺外、大肿瘤、SDHB 相关或曾转移者复发风险更高，随访时间通常较长。</p><p>患者应随身记录诊断和术前准备要求。未来手术、妊娠、分娩或使用影响儿茶酚胺的药物前，应主动告知 PPGL 病史。</p>',
    fertilityOrFamily:
      '<p>PPGL 遗传相关比例较高，确诊后建议与遗传门诊讨论检测。发现致病变异后，亲属可做针对性筛查，并按基因类型安排血压、生化、影像和相关综合征监测。备孕或妊娠期发现 PPGL 需要高危产科、内分泌、麻醉和外科共同管理。</p>',
    emergencySigns:
      '<p>血压极高伴剧烈头痛、胸痛、气短、神经功能异常、意识改变、严重心悸或晕厥，应急诊并说明疑似/确诊嗜铬细胞瘤。肾上腺肿块未排除 PPGL 前，不要自行安排穿刺或非必要刺激性操作。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Pheochromocytoma',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/pheochromocytoma',
    },
    {
      name: 'National Cancer Institute: Pheochromocytoma and Paraganglioma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/pheochromocytoma/patient/pheochromocytoma-treatment-pdq',
    },
  ],
  symptoms:
    '<p>可出现阵发性或持续性高血压、头痛、心悸、大汗、面色苍白、发抖、胸痛、焦虑感、体位性低血压、血糖升高或高血压危象。</p>',
  diagnosis:
    '<p>诊断先做血浆游离或 24 小时尿分馏甲氧基肾上腺素类，再用 CT/MRI 和必要的功能影像定位分期，并评估遗传风险。</p>',
  treatment:
    '<p>可切除者以手术为主，但需充分α受体阻滞和容量准备；转移或不可切除病例可考虑核医学治疗、靶向、化疗、消融、观察或临床试验。</p>',
  prognosis:
    '<p>多数局限性肿瘤术后可明显改善，但遗传相关、肾上腺外、大肿瘤、SDHB 相关或转移病例需要长期复发和转移监测。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 414,
    name: 'pheochromocytoma-journey.png',
    url: '/images/diseases/pheochromocytoma-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

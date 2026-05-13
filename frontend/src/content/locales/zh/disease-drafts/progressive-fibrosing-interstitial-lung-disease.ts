import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseProgressiveFibrosingInterstitialLungDisease: DiseaseDraft =
  {
    ...entity(2069, 'disease-progressive-fibrosing-interstitial-lung-disease'),
    name: '进行性纤维化性间质性肺疾病',
    nameEn: 'Progressive fibrosing interstitial lung disease',
    alias: 'PF-ILD；PPF；进行性肺纤维化；第二批罕见病目录第 69 项',
    oneSentence:
      '进行性纤维化性间质性肺疾病是多种间质性肺病出现持续纤维化进展的一种表现，患者会逐渐气短、干咳，肺功能或胸部 CT 在随访中恶化。',
    plainName: '肺里瘢痕样纤维化持续进展、呼吸越来越费力的一类病程表现',
    prevalence:
      '已纳入中国第二批罕见病目录；它不是单一病名，而是多种 ILD 的进展表型，罕见程度和病因构成因地区、人群、职业暴露和原发疾病不同而变化。',
    quickLook: {
      whatItIs:
        'PF-ILD/PPF 指除特发性肺纤维化外，其他间质性肺病也出现“越变越硬、越走越差”的纤维化进展，例如结缔组织病相关 ILD、过敏性肺炎或无法分类 ILD。',
      whoToSeeFirst:
        '活动后气短、干咳、低氧、杵状指，或胸部 CT 提示纤维化并在 6-12 个月内加重，应到呼吸与危重症医学科的间质性肺病门诊。',
      isGenetic:
        '多数不是典型遗传病，但家族性肺纤维化、早发灰发、骨髓/肝病等线索可能提示端粒相关或表面活性物质相关基因问题。',
      hasTreatment:
        '治疗包括查找和处理原发病、避免抗原/职业暴露、部分患者用免疫调节治疗，进展者可评估抗纤维化药物、氧疗、肺康复和肺移植。',
      commonDelayReason:
        '早期气短和咳嗽容易被当作年龄、体能差、哮喘、慢阻肺或反复感染；如果没有高分辨率 CT 和连续肺功能，很难确认“进展”。',
    },
    patientJourney: {
      whenToSuspect: [
        '活动后气短、干咳持续数月，走路爬楼能力下降，休息或活动时血氧降低。',
        '高分辨率 CT 有纤维化、网格影、牵拉性支气管扩张或蜂窝样改变，并在随访中加重。',
        '肺功能 FVC 或 DLCO 下降，或症状、CT、肺功能在一年内至少两项恶化且无其他解释。',
        '有结缔组织病、过敏性肺炎、职业/鸟类/霉菌暴露、药物或放疗史。',
      ],
      commonWrongTurns: [
        '长期按支气管炎、哮喘或焦虑处理，没有做高分辨率 CT 和弥散功能。',
        '只看一次 CT 结果，没有保存旧片比较，导致进展速度无法判断。',
        '只用止咳药或抗感染，未评估原发病、抗原暴露、免疫治疗和抗纤维化治疗时机。',
      ],
      firstDepartments: [
        '呼吸与危重症医学科',
        '间质性肺病/罕见肺病门诊',
        '风湿免疫科（疑似结缔组织病时）',
        '康复医学科和肺移植中心（进展或低氧时）',
      ],
      diagnosisChecklist: [
        '带所有胸部 CT 原片、报告和拍摄日期，最好能让医生直接比较影像。',
        '带肺功能、DLCO、6 分钟步行、血氧、血气、超声心动图和用氧记录。',
        '整理职业、家居霉菌、鸟类、羽绒、粉尘、药物、放疗和吸烟暴露史。',
        '记录自身免疫症状，如雷诺、关节痛、皮疹、口眼干、肌无力和反酸呛咳。',
      ],
      testsToAskAbout: [
        '高分辨率 CT 模式评估，以及是否需要 ILD 多学科讨论。',
        '肺功能趋势：FVC、DLCO、6 分钟步行和血氧下降是否符合 PPF/PF-ILD。',
        '自身抗体、肌炎抗体、过敏性肺炎暴露评估、支气管镜或肺活检是否必要。',
        '是否适合免疫调节、nintedanib 等抗纤维化治疗、氧疗、肺康复或肺移植评估。',
      ],
      questionsForDoctor: [
        '我的基础 ILD 可能是什么？目前证据是否已经符合进行性肺纤维化？',
        '哪些暴露或原发病可以处理？哪些治疗目标是减慢下降而不是逆转纤维化？',
        '多久复查肺功能、CT 和血氧？哪些变化说明需要升级治疗？',
        '我是否需要家庭氧疗、肺康复、疫苗、反流管理或肺移植中心评估？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>PF-ILD/PPF 的核心是纤维化进展。常见表现为活动后气短逐渐加重、持续干咳、容易疲劳、运动耐量下降、低氧和杵状指。急性加重时可突然气促、血氧下降和影像恶化。</p><p>具体伴随表现取决于基础病因。结缔组织病相关 ILD 可有关节痛、雷诺、皮疹或肌炎；过敏性肺炎可与鸟类、霉菌或职业暴露相关；药物、放疗和胃食管反流也可能参与。</p>',
      diagnosis:
        '<p>诊断首先要确认存在间质性肺病和肺纤维化，再判断是否在随访中进展。2022 年 ATS/ERS/JRS/ALAT 指南将 PPF 定义为除 IPF 外的纤维化 ILD，在过去一年内无其他解释地出现症状加重、生理进展或影像进展中的至少两项。</p><p>评估通常包括高分辨率 CT、肺功能 FVC 和 DLCO、6 分钟步行、血氧、暴露史、自身免疫检查和必要时支气管镜或肺活检。许多病例需要呼吸、影像、病理和风湿免疫多学科讨论。</p>',
      treatment:
        '<p>治疗先看基础病因：脱离致敏或职业暴露、治疗结缔组织病、避免相关药物或处理反流。炎症成分明显的 ILD 可能需要糖皮质激素或免疫抑制剂，但必须由专科权衡感染和副作用。</p><p>对符合进展标准的非 IPF 纤维化 ILD，国际指南对 nintedanib 给出有条件推荐；pirfenidone 仍需更多研究。支持治疗包括戒烟、疫苗、氧疗、肺康复、营养、姑息症状管理和合适时肺移植评估。</p>',
      longTermCare:
        '<p>长期随访重点是 FVC、DLCO、6 分钟步行、血氧、CT 变化、急性加重、肺动脉高压、感染和药物副作用。患者应保存旧 CT 原片，因为“是否进展”常依赖前后比较。</p><p>家庭可准备指夹血氧仪和活动量记录。若出现低氧、运动能力下降或日常活动受限，应尽早讨论家庭氧疗和肺康复，而不是等到非常严重才介入。</p>',
      fertilityOrFamily:
        '<p>多数 PF-ILD 不是单基因遗传病。若有家族性肺纤维化、早发白发、骨髓衰竭、肝病或多名亲属类似肺病，应与医生讨论端粒相关或其他遗传性肺纤维化评估。</p>',
      emergencySigns:
        '<p>静息气短、血氧持续低于医生设定阈值、咯血、胸痛、发热伴气促、意识模糊、嘴唇发紫或数天内呼吸明显恶化，应急诊并说明 ILD/PF-ILD 病史。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'ATS/ERS/JRS/ALAT Clinical Practice Guideline: Progressive Pulmonary Fibrosis in Adults',
        type: 'clinical-guideline',
        url: 'https://www.atsjournals.org/doi/10.1164/rccm.202202-0399ST',
      },
      {
        name: 'American Lung Association: Pulmonary Fibrosis Symptoms',
        type: 'patient-organization',
        url: 'https://www.lung.org/lung-health-diseases/lung-disease-lookup/pulmonary-fibrosis/introduction/symptoms',
      },
    ],
    symptoms:
      '<p>常见活动后气短、干咳、疲劳、运动耐量下降、低氧和杵状指；急性加重可表现为短期气促和血氧快速恶化。</p>',
    diagnosis:
      '<p>诊断需确认纤维化性 ILD，并通过症状、肺功能和高分辨率 CT 的随访变化判断是否符合进行性肺纤维化，同时寻找基础病因。</p>',
    treatment:
      '<p>治疗包括处理基础病因和暴露、必要时免疫调节，进展者评估抗纤维化治疗，并配合氧疗、肺康复、疫苗、症状管理和肺移植评估。</p>',
    prognosis:
      '<p>预后取决于基础 ILD、纤维化范围、肺功能下降速度、低氧、急性加重和治疗反应；连续监测比单次检查更能判断风险。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    slug: 'progressive-fibrosing-interstitial-lung-disease',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 423,
      name: 'progressive-fibrosing-interstitial-lung-disease-journey.png',
      url: '/images/diseases/progressive-fibrosing-interstitial-lung-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIgg4RelatedDisease: DiseaseDraft = {
  ...entity(5003, 'disease-igg4-related-disease'),
  name: 'IgG4 相关性疾病',
  nameEn: 'IgG4-Related Disease',
  alias: 'IgG4-RD、IgG4 相关系统性疾病、第一批罕见病目录第 56 项',
  slug: 'igg4-related-disease',
  oneSentence:
    'IgG4 相关性疾病是一种可累及多个器官的慢性自身免疫性疾病，以 IgG4 阳性浆细胞浸润和纤维化为特征，常表现为无痛性肿块或器官肿大，糖皮质激素治疗反应通常良好。',
  plainName: '免疫系统异常导致多个器官肿大或结疤的罕见病',
  prevalence:
    '患病率尚不明确；多见于中老年男性，平均发病年龄约 50–60 岁；近年随着认识提高，报告病例逐渐增多。',
  searchIntents: [
    'IgG4 相关性疾病 症状',
    'IgG4-RD 诊断标准',
    'IgG4 相关性疾病 治疗',
    'IgG4 相关胰腺炎 自身免疫性胰腺炎',
    'IgG4 血清升高 一定有病吗',
  ],
  quickLook: {
    whatItIs:
      '一种免疫系统异常激活的疾病，大量 IgG4 阳性浆细胞在多个器官浸润，引起炎症和纤维化，可模拟肿瘤。',
    whoToSeeFirst:
      '出现不明原因器官肿大、肿块或相关器官功能障碍时，应到风湿免疫科就诊；根据受累器官可能需消化科、泌尿科、眼科等联合评估。',
    isGenetic:
      '病因尚不完全清楚，可能与遗传易感性和环境因素共同作用有关；并非典型单基因遗传病。',
    hasTreatment:
      '糖皮质激素是首选治疗，多数患者反应良好；复发或激素依赖者可用利妥昔单抗等免疫抑制剂。',
    commonDelayReason:
      '症状因受累器官不同而多变，易被误诊为肿瘤、感染或其他独立器官疾病；确诊常需病理活检。',
  },
  patientJourney: {
    whenToSuspect: [
      '无痛性泪腺或唾液腺肿大（如 Mikulicz 病）。',
      '自身免疫性胰腺炎（AIP）伴胰腺肿块或梗阻性黄疸。',
      '腹膜后纤维化导致肾积水或腹痛。',
      '不明原因淋巴结肿大、眼眶肿块或垂体功能减退。',
      '多个器官先后或同时出现类似病变。',
    ],
    commonWrongTurns: [
      '把器官肿大当作肿瘤直接手术，未行病理检查排除 IgG4-RD。',
      '把自身免疫性胰腺炎当作胰腺癌行 Whipple 手术。',
      '仅因血清 IgG4 升高就确诊，未做组织病理学验证。',
      '把腹膜后纤维化单纯当作输尿管狭窄处理。',
    ],
    firstDepartments: [
      '风湿免疫科',
      '消化内科（胰腺/胆道受累）',
      '泌尿外科（腹膜后纤维化/肾积水）',
      '眼科（眼眶/泪腺受累）',
      '病理科（组织活检确诊）',
    ],
    diagnosisChecklist: [
      '详细记录各器官受累情况和症状演变时间线。',
      '血清 IgG4 检测（升高有提示意义，但非诊断必需）。',
      '影像学评估受累器官（CT/MRI/PET-CT）。',
      '组织活检：典型病理为淋巴浆细胞浸润、IgG4+ 浆细胞 >10/HPF、席纹状纤维化、闭塞性静脉炎。',
      '排除感染、肿瘤和其他自身免疫病。',
    ],
    testsToAskAbout: [
      '血清 IgG4 水平。',
      '受累器官影像学（CT/MRI）。',
      '组织活检及 IgG4 免疫组化。',
      '自身抗体谱、感染指标（排除其他疾病）。',
      'PET-CT（评估全身受累范围）。',
    ],
    questionsForDoctor: [
      '我的病变是 IgG4-RD 还是肿瘤？病理结果如何？',
      '需要激素治疗多久？复发率高吗？',
      '哪些器官需要长期监测？',
      '利妥昔单抗在什么情况下使用？',
      '日常饮食和生活需要注意什么？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>症状因受累器官而异，可累及几乎任何器官。常见表现包括：1 型自身免疫性胰腺炎（无痛性胰腺肿大、梗阻性黄疸）、泪腺和唾液腺对称性肿大（Mikulicz 病）、腹膜后纤维化（腰痛、肾积水）、眼眶病变（突眼、视力下降）、硬化性胆管炎（黄疸、瘙痒）、间质性肾炎（肾功能下降）、垂体炎（尿崩症、内分泌紊乱）、肺部受累（咳嗽、气短）和淋巴结肿大。全身症状如发热在 IgG4-RD 中相对少见，若出现应警惕合并感染或其他疾病。</p>',
    diagnosis:
      '<p>2019 年 ACR/EULAR 分类标准结合临床、影像、血清学和病理特征。组织病理学是诊断的核心：典型表现为 dense lymphoplasmacytic infiltrate rich in IgG4+ plasma cells（IgG4+ 浆细胞 >10 个/高倍视野且 IgG4/IgG 比值 >40%）、storiform fibrosis（席纹状纤维化）和 obliterative phlebitis（闭塞性静脉炎）。血清 IgG4 升高（>135 mg/dL）有提示意义，但约 30% 患者可正常，且其他疾病也可升高。需通过活检排除淋巴瘤、癌、感染（如结核）和其他自身免疫病（如结节病、干燥综合征）。</p>',
    treatment:
      '<p>糖皮质激素是诱导缓解的一线治疗，泼尼松 30–40 mg/天起始，数周至数月后逐渐减量。约 70–90% 患者对激素反应良好。对于复发、激素依赖或激素不耐受者，可使用利妥昔单抗（抗 CD20 单抗）或其他免疫抑制剂（硫唑嘌呤、霉酚酸酯、他克莫司）。治疗目标是诱导并维持缓解、防止器官损伤和纤维化进展。需定期监测血清 IgG4 和影像学评估复发。</p>',
    longTermCare:
      '<p>IgG4-RD 复发率较高（约 20–50%），需长期随访。随访内容包括症状评估、血清 IgG4、受累器官影像学。即使血清 IgG4 正常，也可能存在活动性病变，因此影像学很重要。注意药物副作用（激素相关的骨质疏松、血糖升高、感染风险；利妥昔单抗的感染风险）。患者教育包括识别复发征象和避免自行停药。</p>',
    fertilityOrFamily:
      '<p>IgG4-RD 不是典型遗传病，目前无明确单基因遗传模式。家族聚集性罕见。患者计划生育时应在疾病稳定期进行，并与风湿免疫科讨论药物安全性（如利妥昔单抗在孕期的使用）。</p>',
    emergencySigns:
      '<p>严重梗阻性黄疸伴发热（可能合并胆管炎）、急性肾衰竭、视力急剧下降、严重腹痛伴肠梗阻征象应立即急诊。</p>',
  },
  sources: [
    {
      name: 'Merck Manual: IgG4-Related Disease',
      type: 'review',
      url: 'https://www.merckmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/igg4-related-disease/igg4-related-disease',
    },
    {
      name: 'Penn Medicine: IgG4-Related Disease',
      type: 'review',
      url: 'https://www.pennmedicine.org/conditions/igg4-related-disease',
    },
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/yjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
  ],
  symptoms:
    '<p>因受累器官不同而异：胰腺肿大、泪腺/唾液腺肿大、腹膜后纤维化、眼眶肿块、黄疸、肾功能下降、垂体功能减退等。</p>',
  diagnosis:
    '<p>依靠组织病理学（IgG4+ 浆细胞浸润、席纹状纤维化、闭塞性静脉炎）；血清 IgG4 升高有提示意义；需排除肿瘤和感染。</p>',
  treatment:
    '<p>糖皮质激素是一线治疗；复发者可用利妥昔单抗；目标是诱导缓解、防止器官损伤。</p>',
  prognosis:
    '<p>多数患者对激素反应良好；复发率较高，需长期随访；及时诊断和治疗可改善器官功能和预后。</p>',
  sourceName: 'Merck Manual: IgG4-Related Disease',
  sourceUrl:
    'https://www.merckmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/igg4-related-disease/igg4-related-disease',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5003,
    name: 'igg4-related-disease-journey.png',
    url: '/images/diseases/igg4-related-disease-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

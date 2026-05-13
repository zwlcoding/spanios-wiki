import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseDermatofibrosarcomaProtuberans: DiseaseDraft = {
  ...entity(2022, 'disease-dermatofibrosarcoma-protuberans'),
  name: '隆突性皮肤纤维肉瘤',
  nameEn: 'Dermatofibrosarcoma protuberans',
  alias: 'DFSP、隆突性皮肤纤维肉瘤、第二批罕见病目录第 22 项',
  slug: 'dermatofibrosarcoma-protuberans',
  oneSentence:
    '隆突性皮肤纤维肉瘤是一种罕见、通常生长缓慢但局部侵袭性强的皮肤软组织肿瘤，容易向周围组织伸展并在切除不彻底时复发。',
  plainName: '长在皮肤深层、容易局部复发的罕见皮肤软组织肿瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；总体罕见，在皮肤肿瘤中占比很低，具体发生率因登记口径不同而变化。',
  quickLook: {
    whatItIs:
      'DFSP 多从真皮开始，像“根须”一样向皮下组织延伸。它通常远处转移少见，但局部复发风险高，因此手术边界和病理切缘非常重要。',
    whoToSeeFirst:
      '皮肤上长期存在、逐渐变硬变大、颜色偏红棕或像疤痕/硬斑的肿块，应看皮肤科或皮肤肿瘤外科，必要时转肉瘤中心。',
    isGenetic:
      'DFSP 通常不是家族遗传病。部分肿瘤有 COL1A1-PDGFB 融合，主要用于病理确认和靶向治疗判断，不代表家属要遗传筛查。',
    hasTreatment:
      '首选治疗是完整手术切除，Mohs 显微手术或带充分边界的扩大切除可降低复发。不能手术、复发或特定融合阳性病例可评估放疗或伊马替尼。',
    commonDelayReason:
      '早期常像疤痕、皮肤纤维瘤、粉瘤或普通硬斑，不痛不痒、长得慢，患者和医生都容易低估，需要活检确认。',
  },
  patientJourney: {
    whenToSuspect: [
      '躯干、肩背、腹部、大腿或头颈部出现长期不消退的硬斑、结节或隆起。',
      '皮损多年缓慢变大，颜色呈肤色、红棕、紫红或像疤痕，质地越来越硬。',
      '曾按疤痕、皮肤纤维瘤、粉瘤或良性肿物切除后又在原处复发。',
      '病理提示梭形细胞肿瘤、CD34 阳性或疑似 DFSP。',
    ],
    commonWrongTurns: [
      '没有活检就长期当作疤痕或良性皮肤结节观察。',
      '做了简单切除但没有足够边界，也没有病理切缘评估。',
      '复发后仍反复小范围切除，没有转皮肤肿瘤/肉瘤团队制定整体方案。',
      '忽视术后多年仍可能复发，没有长期皮肤和瘢痕周围复查。',
    ],
    firstDepartments: [
      '皮肤科',
      '皮肤肿瘤外科/Mohs门诊',
      '整形外科',
      '肉瘤/肿瘤科',
    ],
    diagnosisChecklist: [
      '记录皮损出现时间、增长速度、是否疼痛/破溃、既往外伤疤痕或手术史。',
      '带清晰照片、皮肤镜资料、超声/MRI 和既往手术记录。',
      '带病理报告、免疫组化、切缘结果和必要时分子检测报告。',
      '记录是否复发、复发次数和每次切除范围。',
    ],
    testsToAskAbout: [
      '皮肤或软组织活检，病理和免疫组化确认。',
      'MRI 或超声评估深度、筋膜/肌肉受累和手术边界。',
      '病理切缘评估，是否适合 Mohs 手术或扩大切除。',
      '复发、不可切除或疑难病例是否需要 COL1A1-PDGFB 等分子检测和肉瘤中心会诊。',
    ],
    questionsForDoctor: [
      '病理是否确认 DFSP？切缘是否干净？是否需要病理复核？',
      '我的肿瘤是否适合 Mohs 手术，还是需要扩大切除和重建？',
      '是否累及筋膜、肌肉或骨？需要 MRI 吗？',
      '复发风险多高？前 3 年和更长期怎么复查？',
      '如果不能完整切除，放疗或伊马替尼是否适合？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>DFSP 常表现为皮肤上缓慢增大的硬斑、结节或隆起，颜色可为肤色、红棕色或紫红色，常见于躯干和四肢近端。早期通常不痛不痒，容易被当作疤痕、皮肤纤维瘤或粉瘤。</p><p>随着生长，病灶可变成多个隆起结节，向皮下、筋膜或肌肉延伸。远处转移少见，但局部复发较常见，尤其切缘不足时。</p>',
    diagnosis:
      '<p>确诊依靠活检病理和免疫组化，常见 CD34 阳性等线索。由于 DFSP 与其他梭形细胞肿瘤可相似，疑难病例需要皮肤病理或肉瘤病理复核。</p><p>手术前可用超声或 MRI 评估深部范围。复发、不可切除或需要靶向治疗时，可讨论 COL1A1-PDGFB 融合等分子检测。</p>',
    treatment:
      '<p>治疗核心是完整切除并确认切缘。Mohs 显微手术或其他边缘控制手术可在保留正常组织的同时降低复发；如果不可行，可做扩大切除并根据切缘和部位安排重建。</p><p>切缘阳性但无法再切、不可切除、复发或转移病例可由肿瘤团队评估放疗或伊马替尼等靶向治疗。治疗选择应兼顾复发控制和功能/外观重建。</p>',
    longTermCare:
      '<p>术后需要长期随访，尤其前几年要定期检查手术瘢痕和周围皮肤，之后也要持续自查，因为 DFSP 可多年后复发。出现原处新硬结、隆起、颜色改变或疼痛，应及时复诊。</p>',
    fertilityOrFamily:
      '<p>DFSP 通常不是遗传性肿瘤综合征，家属一般不需要筛查。若需要靶向治疗、放疗或大范围手术且有生育计划，应提前与肿瘤科和相关专科讨论。</p>',
    emergencySigns:
      '<p>DFSP 多数不是急症；但若肿物快速增大、破溃出血、感染红肿热痛、术后伤口明显裂开或发热，应及时就医。治疗期间出现严重药物反应也需急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Mayo Clinic: Dermatofibrosarcoma protuberans diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/dermatofibrosarcoma-protuberans/diagnosis-treatment/drc-20576979',
    },
    {
      name: 'Cleveland Clinic: Dermatofibrosarcoma Protuberans',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/24068-dermatofibrosarcoma-protuberans',
    },
  ],
  symptoms:
    '<p>常表现为躯干或四肢近端缓慢增大的硬斑、结节或隆起，颜色可红棕或像疤痕，通常早期不痛不痒。</p>',
  diagnosis:
    '<p>诊断依靠皮肤/软组织活检、病理免疫组化和切缘评估，必要时用 MRI 评估深度或做分子检测。</p>',
  treatment:
    '<p>首选完整手术切除，优先考虑 Mohs 或边缘控制手术；不可切除、复发或切缘问题可评估放疗或伊马替尼。</p>',
  prognosis:
    '<p>总体远处转移少见，但局部复发风险取决于切缘和治疗方式；规范切除和长期随访非常重要。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 376,
    name: 'dermatofibrosarcoma-protuberans-journey.png',
    url: '/images/diseases/dermatofibrosarcoma-protuberans-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

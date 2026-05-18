import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleSclerosis: DiseaseDraft = {
  ...entity(5022, 'disease-multiple-sclerosis'),
  name: '多发性硬化',
  nameEn: 'Multiple Sclerosis',
  alias: 'MS、多发性硬化症',
  icd10Code: 'G35',
  slug: 'multiple-sclerosis',
  oneSentence:
    '多发性硬化是一种中枢神经系统自身免疫性脱髓鞘疾病，免疫系统错误攻击神经纤维的髓鞘，导致神经信号传导障碍，临床表现为反复发作的神经功能障碍，可累及视神经、脊髓和脑。',
  plainName: '免疫系统攻击神经保护层导致信号传递出错的慢性病',
  prevalence:
    '全球患病率约 30-100/100,000；北欧和北美发病率最高。中国属低发区，但随着诊断水平提高，检出率逐年上升，估计患病率约 2-5/100,000。',
  searchIntents: [
    '多发性硬化 早期症状',
    'MS 诊断标准',
    '多发性硬化 治疗药物',
    'MS 复发 怎么办',
    '多发性硬化 遗传 会传给下一代吗',
  ],
  quickLook: {
    whatItIs:
      '这是一种中枢神经系统的慢性炎症性自身免疫病，免疫系统攻击自身神经髓鞘，造成神经传导障碍。病程多呈复发-缓解型，部分患者后期进展为继发性进展型。',
    whoToSeeFirst:
      '神经内科，最好是具有神经免疫专长的医师。出现急性视力下降、肢体无力、感觉异常、大小便障碍时应尽快就诊。',
    isGenetic:
      '不是传统意义上的单基因遗传病，但有一定遗传易感性（尤其 HLA-DRB1*15:01）。一级亲属患病风险略高于普通人群，环境因素（如维生素D缺乏、EB病毒感染）也起重要作用。',
    hasTreatment:
      '目前无法根治，但有多种疾病修正治疗药物（DMT）可显著减少复发、延缓残疾进展。急性复发期可用大剂量激素冲击。早期规范治疗对预后至关重要。',
    commonDelayReason:
      '早期症状（视力模糊、肢体麻木、头晕）被误认为颈椎病、视疲劳或焦虑症；首次发作后症状自行缓解，患者未重视随访；基层医院缺乏磁共振和脑脊液检查条件。',
  },
  patientJourney: {
    whenToSuspect: [
      '年轻成人出现急性单眼视力下降（视神经炎）或双眼视物模糊。',
      '肢体麻木、无力、刺痛感，尤其单侧肢体，持续超过24小时。',
      '行走不稳、共济失调、眩晕，排除耳鼻喉疾病后仍不缓解。',
      '排尿困难、尿潴留或尿失禁，伴下肢感觉异常。',
      '症状在数天内达峰，持续数周后部分或完全缓解，提示复发-缓解病程。',
    ],
    commonWrongTurns: [
      '视神经炎被当作普通眼科疾病治疗，未做头颅MRI排查MS。',
      '肢体麻木无力被误诊为颈椎病、腰椎病或脑供血不足。',
      '头晕被当作耳石症或梅尼埃病，未做神经系统全面评估。',
      '首次发作后症状缓解，患者自行停药或中断随访。',
      '延误疾病修正治疗（DMT）的启动，错失早期治疗窗口。',
    ],
    firstDepartments: [
      '神经内科（神经免疫专科）',
      '眼科（视神经炎首发时）',
      '康复医学科（功能恢复期）',
      '泌尿外科（排尿障碍严重时）',
    ],
    diagnosisChecklist: [
      '详细记录每次发作的时间、症状、持续时间和恢复情况。',
      '携带既往所有头颅和脊髓MRI片子及报告。',
      '如有腰椎穿刺/脑脊液寡克隆带检查结果，请一并携带。',
      '列出既往所有用药史和过敏史。',
      '询问医生是否符合2017 McDonald诊断标准。',
    ],
    testsToAskAbout: [
      '头颅和脊髓MRI平扫+增强（寻找时间多发和空间多发证据）。',
      '脑脊液检查（寡克隆带、IgG指数）。',
      '视觉诱发电位（VEP，评估视神经传导）。',
      '血清AQP4-IgG和MOG-IgG（排除视神经脊髓炎谱系疾病）。',
      '血清维生素D水平。',
      '常规血液检查（排除感染、自身免疫病等）。',
    ],
    questionsForDoctor: [
      '我的MS属于哪种类型？复发-缓解型还是进展型？',
      '目前有哪些疾病修正治疗药物适合我？各自的疗效、副作用和费用如何？',
      '激素治疗后如何评估疗效？什么时候可以开始DMT？',
      '怀孕期间是否需要停药？有哪些药物相对安全？',
      '日常生活中应该注意什么？运动、饮食、疫苗接种有什么禁忌？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MS 症状因病变部位而异，常见表现包括：视神经炎（单眼视力急剧下降、眼痛）、肢体无力或麻木、感觉异常（针刺感、烧灼感）、共济失调、眩晕、疲劳、排尿排便障碍、认知功能下降、情绪障碍（抑郁、焦虑）等。</p><p>典型病程为复发-缓解型（RRMS），即急性发作后部分或完全恢复，反复发作。约50%的RRMS患者在10-20年后转为继发性进展型（SPMS），残疾逐渐累积。约10-15%患者为原发进展型（PPMS），从起病即持续进展。</p>',
    diagnosis:
      '<p>诊断基于2017年修订的McDonald标准，核心要求是证明中枢神经系统病变在时间和空间上的多发性。需结合临床表现、MRI（头颅和脊髓）、脑脊液检查和诱发电位。</p><p>MRI是诊断和随访的关键工具：典型病灶位于脑室周围、皮层下、幕下（脑干/小脑）和脊髓。脑脊液寡克隆带阳性支持诊断。需鉴别视神经脊髓炎谱系疾病（NMOSD）、MOG抗体相关疾病、急性播散性脑脊髓炎（ADEM）、脑血管病等。</p>',
    treatment:
      '<p>急性复发期：大剂量甲泼尼龙静脉冲击（通常500-1000mg/天，3-5天），必要时血浆置换。</p><p>疾病修正治疗（DMT）是MS管理的基石。一线药物包括干扰素β、醋酸格拉替雷、特立氟胺、芬戈莫德、富马酸二甲酯等；高效药物包括那他珠单抗、阿仑单抗、奥瑞珠单抗、克拉屈滨等。药物选择需综合考虑疾病活动度、安全性、患者意愿和可及性。</p><p>对症治疗包括：抗痉挛药、膀胱功能障碍药物、疲劳管理、疼痛控制、认知康复和心理支持。</p>',
    longTermCare:
      '<p>长期随访包括：定期MRI评估疾病活动、EDSS残疾评分、认知功能筛查、情绪评估、生活质量评估。监测DMT的安全性（感染风险、肝功能、血常规、心脏功能等）。</p><p>生活管理：适度运动（游泳、瑜伽等）有助于维持功能；戒烟（吸烟增加疾病活动）；维持正常维生素D水平；避免过度热暴露（热可暂时加重症状）；规律作息，管理疲劳。疫苗接种应在免疫抑制剂使用前完成，活疫苗在免疫抑制期间应避免。</p>',
    fertilityOrFamily:
      '<p>MS本身不影响生育能力，但部分DMT药物可能影响胎儿（如特立氟胺有致畸风险，需停药后洗脱）。妊娠期间复发风险可能降低，但产后3-6个月复发风险增加。</p><p>部分药物可在孕期和哺乳期安全使用（如干扰素β、醋酸格拉替雷）。计划怀孕前应咨询神经科医生调整用药。MS不是单基因遗传病，但子女患病风险略高于普通人群（约2-5%）。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：急性严重视力下降、新发严重肢体无力或瘫痪、急性尿潴留、严重吞咽困难伴呛咳、癫痫发作、高热伴意识改变。复发期间应避免自行使用免疫增强类药物或偏方。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Multiple Sclerosis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK499849/',
    },
    {
      name: 'NINDS: Multiple Sclerosis Information Page',
      type: 'review',
      url: 'https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis',
    },
    {
      name: 'National MS Society',
      type: 'patient-organization',
      url: 'https://www.nationalmssociety.org/',
    },
  ],
  symptoms:
    '<p>常见症状包括视神经炎、肢体麻木无力、感觉异常、共济失调、眩晕、疲劳、排尿障碍和认知下降。病程多为复发-缓解型。</p>',
  diagnosis:
    '<p>依据2017 McDonald标准，结合MRI、脑脊液寡克隆带和诱发电位，证明中枢神经系统病变的时间和空间多发性。</p>',
  treatment:
    '<p>急性期激素冲击；长期疾病修正治疗（DMT）减少复发和延缓进展；对症支持治疗改善生活质量。</p>',
  prognosis:
    '<p>早期规范DMT可显著改善预后。多数RRMS患者可维持较长时间的功能独立，但部分患者最终会进展为SPMS。</p>',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK499849/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3522,
    name: 'multiple-sclerosis-journey.png',
    url: '/images/diseases/multiple-sclerosis-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'treatable'],
};

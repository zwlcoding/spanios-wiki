import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeurotrophicKeratitis: DiseaseDraft = {
  ...entity(2056, 'disease-neurotrophic-keratitis'),
  name: '神经营养性角膜炎',
  nameEn: 'Neurotrophic keratitis',
  alias: '神经营养性角膜病变；NK；第二批罕见病目录第 56 项',
  slug: 'neurotrophic-keratitis',
  oneSentence:
    '神经营养性角膜炎是角膜感觉神经受损后发生的眼表疾病，眼睛可能不太痛，却会反复出现上皮缺损、溃疡甚至穿孔风险。',
  plainName: '一种“眼睛不够疼但角膜正在受伤”的角膜神经病',
  prevalence:
    '已纳入中国第二批罕见病目录；总体少见，常发生在带状疱疹、单纯疱疹、三叉神经损伤、眼部手术、糖尿病或长期眼表疾病之后。',
  quickLook: {
    whatItIs:
      '角膜需要感觉神经维持眨眼、泪液和修复能力。神经营养性角膜炎的危险之处在于角膜感觉下降，损伤加重时疼痛可能并不明显。',
    whoToSeeFirst:
      '反复角膜上皮缺损、久治不愈的角膜溃疡或眼部疱疹后视力下降，应尽快看角膜专科或眼表病门诊。',
    isGenetic:
      '多数不是遗传病，而是感染、手术、外伤、神经系统疾病、糖尿病或药物等导致角膜感觉下降。少数儿童或伴多系统表现时再评估遗传原因。',
    hasTreatment:
      '治疗按分期进行，包括停用损伤眼表的药物、防腐剂少的润滑、控制感染和炎症、治疗原发病、保护角膜，部分患者可使用重组神经生长因子或手术保护。',
    commonDelayReason:
      '早期常被当作普通干眼或角膜炎反复点药；因为疼痛不重，患者和医生都可能低估溃疡和穿孔风险。',
  },
  patientJourney: {
    whenToSuspect: [
      '角膜反复破皮、上皮缺损或溃疡，疼痛却比预期轻，眼科检查提示角膜知觉下降。',
      '有单纯疱疹或带状疱疹眼病、三叉神经手术/肿瘤/外伤、角膜手术、长期糖尿病或长期使用多种眼药史。',
      '干眼治疗效果不稳定，角膜染色、视力下降、畏光或异物感反复出现。',
      '出现白色角膜混浊、溃疡扩大、前房反应或疑似角膜变薄。',
    ],
    commonWrongTurns: [
      '长期按普通干眼治疗，没有测角膜知觉或寻找神经损伤原因。',
      '反复使用含防腐剂眼药、表面麻醉药或不合适的激素，进一步损伤眼表。',
      '症状不痛就延迟复诊，直到角膜溃疡、融解或穿孔才处理。',
    ],
    firstDepartments: [
      '眼科角膜专科',
      '眼表病门诊',
      '神经眼科',
      '急诊眼科（溃疡或视力快速下降时）',
    ],
    diagnosisChecklist: [
      '整理眼部疱疹、手术、外伤、隐形眼镜、糖尿病、三叉神经疾病和用药时间线。',
      '带既往裂隙灯照片、荧光素染色、角膜地形图、OCT、培养结果和用药清单。',
      '记录是否疼痛不明显、眨眼减少、干眼、复发频率和每次愈合时间。',
      '如有面部麻木、神经手术或肿瘤史，带神经科/影像资料。',
    ],
    testsToAskAbout: [
      '角膜知觉检查、泪膜和眼表染色评估。',
      '裂隙灯分期，必要时角膜 OCT 或共聚焦显微镜评估神经和角膜变薄。',
      '疑似感染时的角膜刮片、培养或病原检测。',
      '寻找原因：疱疹病史、糖尿病控制、三叉神经病变、药物毒性和眼睑闭合问题。',
    ],
    questionsForDoctor: [
      '我的角膜知觉下降到什么程度？现在属于哪一期？',
      '哪些眼药需要停用或换成不含防腐剂？是否需要保护性隐形眼镜、羊膜或眼睑缝合？',
      '我是否适合重组神经生长因子、血清泪液或其他促进愈合治疗？',
      '哪些变化提示溃疡加重或穿孔风险，需要当天复诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>神经营养性角膜炎的典型矛盾是“检查很重、疼痛不重”。患者可有视力下降、畏光、异物感、流泪、干涩或红眼，但角膜上皮缺损和溃疡的疼痛程度可能低于普通角膜病。</p><p>病情可从点状上皮病变发展到持续上皮缺损、基质溃疡、角膜融解、瘢痕和穿孔。因为角膜感觉下降，感染或穿孔前的主观警报可能不足。</p>',
    diagnosis:
      '<p>诊断依赖病史、裂隙灯检查和角膜知觉下降。医生会评估角膜上皮缺损范围、溃疡深度、泪膜、眼睑闭合、眨眼和是否合并感染。</p><p>检查可包括 Cochet-Bonnet 或棉絮法角膜知觉、荧光素染色、角膜 OCT、共聚焦显微镜、泪液评估和感染培养。还要寻找原因，如疱疹病毒、糖尿病、三叉神经病变、眼部手术、药物毒性、角膜接触镜或神经营养不足。</p>',
    treatment:
      '<p>治疗目标是保护角膜、促进上皮愈合、预防感染和穿孔。早期包括停用不必要或有毒性的眼药，使用不含防腐剂人工泪液和眼膏，处理睑裂闭合不全和干眼，避免揉眼和隐形眼镜自行使用。</p><p>持续上皮缺损或溃疡可能需要治疗性角膜接触镜、羊膜移植、自体血清泪液、抗感染治疗、眼睑缝合或结膜瓣等。重组人神经生长因子可用于部分患者促进角膜愈合。穿孔或即将穿孔时可能需要胶水、角膜移植或其他急诊手术。</p>',
    longTermCare:
      '<p>长期管理需要规律复查角膜表面、知觉、泪膜和原发病控制。患者应避免自行购买表麻药、随意停药或长期使用含防腐剂药物，并在复发早期就诊。</p><p>如果有糖尿病、疱疹复发、三叉神经疾病、眼睑闭合不全或严重干眼，需要与内分泌、神经科或眼整形等团队共同管理。</p>',
    fertilityOrFamily:
      '<p>神经营养性角膜炎多数不按遗传病处理。儿童起病、双眼严重、合并发育或神经系统异常时，可由医生判断是否需要遗传或代谢评估。</p>',
    emergencySigns:
      '<p>视力突然下降、角膜白斑或溃疡扩大、眼红明显加重、分泌物增多、眼球疼痛突然加重、角膜变薄或疑似穿孔，应当天看急诊眼科。不要自行使用表面麻醉药或激素。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'StatPearls: Neurotrophic Keratitis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK431106/',
    },
    {
      name: 'American Academy of Ophthalmology: Neurotrophic Keratitis',
      type: 'official',
      url: 'https://www.aao.org/eyenet/article/neurotrophic-keratitis',
    },
  ],
  symptoms:
    '<p>可表现为疼痛不明显的反复角膜上皮缺损、溃疡、视力下降、畏光、异物感、干涩、角膜混浊、变薄或穿孔风险。</p>',
  diagnosis:
    '<p>诊断结合危险因素、裂隙灯检查、角膜知觉下降、眼表染色、泪液/神经形态评估，必要时排查感染和三叉神经相关病因。</p>',
  treatment:
    '<p>治疗包括保护眼表、停用有毒性药物、不含防腐剂润滑、抗感染和原发病控制，必要时使用血清泪液、羊膜、眼睑缝合、重组神经生长因子或角膜手术。</p>',
  prognosis:
    '<p>早期发现通常更容易保住角膜透明和视力；持续上皮缺损、感染、角膜融解或穿孔会显著增加瘢痕和失明风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 410,
    name: 'neurotrophic-keratitis-journey.png',
    url: '/images/diseases/neurotrophic-keratitis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

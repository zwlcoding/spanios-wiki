import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLimbalStemCellDeficiency: DiseaseDraft = {
  ...entity(2045, 'disease-limbal-stem-cell-deficiency'),
  name: '角膜缘干细胞缺乏症',
  nameEn: 'Limbal stem cell deficiency',
  alias: 'LSCD、角膜缘干细胞功能不全、第二批罕见病目录第 45 项',
  slug: 'limbal-stem-cell-deficiency',
  oneSentence:
    '角膜缘干细胞缺乏症是角膜边缘维持透明角膜表面的干细胞数量或功能不足，导致反复眼红、疼痛、畏光、视力下降、角膜上皮不稳定和新生血管。',
  plainName: '角膜表面修复系统受损、让透明角膜被异常组织覆盖的眼表病',
  prevalence:
    '已纳入国家第二批罕见病目录；总体少见，可由化学伤、热伤、严重眼表炎症、先天疾病、长期接触镜损伤或多次眼部手术等导致。',
  quickLook: {
    whatItIs:
      '角膜缘位于黑眼珠和白眼球交界处，里面的干细胞负责不断更新角膜表面。LSCD 时，结膜样组织可长到角膜上，造成混浊、反复破皮和视力下降。',
    whoToSeeFirst:
      '反复眼红疼痛、畏光流泪、角膜上皮反复破损、视力波动或下降，尤其有化学伤、严重炎症、长期接触镜或多次眼手术史，应看角膜/眼表专科。',
    isGenetic:
      '多数 LSCD 是后天获得性，不是遗传病。少数与先天无虹膜、外胚层发育异常等遗传病有关，需要按病因决定是否遗传咨询。',
    hasTreatment:
      '先控制眼表炎症、干眼和眼睑问题，再按范围选择药物、保护性镜片、羊膜、角膜缘干细胞移植或培养上皮移植等。不能直接只做普通角膜移植。',
    commonDelayReason:
      '早期容易被当作普通干眼、角膜炎或结膜炎。若反复角膜上皮问题和新生血管持续存在，需要眼表专科判断是否 LSCD。',
  },
  patientJourney: {
    whenToSuspect: [
      '眼红、疼痛、异物感、畏光、流泪和视力波动反复发作。',
      '医生反复提到角膜上皮缺损、角膜新生血管、角膜结膜化或角膜表面不规则。',
      '有化学/热烧伤、Stevens-Johnson 综合征、眼瘢痕性类天疱疮、长期接触镜、眼表肿瘤切除或多次眼手术史。',
      '普通抗炎、抗感染或干眼治疗只能短期缓解，停药后反复。',
    ],
    commonWrongTurns: [
      '长期按干眼或结膜炎自行滴药，没有做角膜缘和眼表评估。',
      '在眼表炎症未控制时急于做角膜移植，导致失败风险高。',
      '忽视眼睑、睑缘炎、泪液、倒睫和全身免疫病对手术成功的影响。',
      '单眼和双眼 LSCD 治疗策略不同，但没有提前讨论供体来源和免疫抑制风险。',
    ],
    firstDepartments: [
      '角膜/眼表专科',
      '眼科',
      '免疫相关眼病门诊',
      '眼整形/眼睑专科',
    ],
    diagnosisChecklist: [
      '带既往眼外伤、化学伤、手术、接触镜使用和眼表炎症病史。',
      '带裂隙灯照片、角膜地形图、前节 OCT、共聚焦显微镜或印迹细胞学结果。',
      '记录所有滴眼液、激素/免疫抑制剂、人工泪液、绷带镜和手术效果。',
      '说明是单眼还是双眼受累，以及全身免疫病、皮肤黏膜病和药物过敏史。',
    ],
    testsToAskAbout: [
      '裂隙灯和荧光染色评估角膜上皮、结膜化、新生血管和受累范围。',
      '前节 OCT、角膜地形图、共聚焦显微镜或印迹细胞学用于辅助确认。',
      '干眼、睑缘炎、倒睫、眼睑闭合和泪液功能评估。',
      '若考虑移植，询问自体/异体角膜缘干细胞来源、免疫抑制和手术时机。',
    ],
    questionsForDoctor: [
      '我是部分还是全角膜缘缺乏？单眼还是双眼？这会怎样影响治疗选择？',
      '目前最需要先控制的是炎症、干眼、睑缘问题还是上皮缺损？',
      '我是否适合角膜缘干细胞移植？普通角膜移植为什么可能不够？',
      '术后需要多久复查？免疫抑制、感染和排斥风险怎么监测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>LSCD 可表现为反复眼红、疼痛、异物感、畏光、流泪、视力波动或下降。角膜表面可能反复上皮缺损、慢性炎症、新生血管、混浊和不规则散光。</p><p>病因包括化学/热烧伤、严重眼表炎症、Stevens-Johnson 综合征、眼瘢痕性类天疱疮、先天无虹膜、长期接触镜损伤、眼表肿瘤切除或多次眼部手术等。</p>',
    diagnosis:
      '<p>诊断依靠眼表专科检查，重点识别角膜结膜化、角膜缘结构破坏、上皮不稳定和新生血管。裂隙灯、荧光染色、前节 OCT、共聚焦显微镜、印迹细胞学等可辅助判断范围和严重程度。</p><p>需要与普通干眼、感染性角膜炎、复发性角膜上皮糜烂、神经营养性角膜病变、角膜内皮病和其他眼表瘢痕疾病鉴别。</p>',
    treatment:
      '<p>治疗第一步是改善眼表环境，包括控制炎症、治疗干眼和睑缘炎、处理倒睫或眼睑闭合不全、避免刺激因素和保护角膜上皮。轻中度患者可能通过药物和保护性治疗稳定。</p><p>重度或全角膜缘缺乏可能需要自体或异体角膜缘干细胞移植、培养上皮移植、羊膜等重建方案。若眼表干细胞系统未重建，单纯角膜移植往往难以长期成功。</p>',
    longTermCare:
      '<p>长期随访关注上皮稳定、新生血管、炎症、视力、眼压、感染和手术/免疫抑制副作用。双眼病变和自身免疫相关病变通常需要更复杂的长期管理。</p>',
    fertilityOrFamily:
      '<p>大多数 LSCD 不是遗传病。若与先天无虹膜、外胚层发育异常或其他遗传综合征有关，应转医学遗传科评估家属风险和生育咨询。</p>',
    emergencySigns:
      '<p>突然视力下降、剧烈眼痛、明显红眼畏光、角膜白斑或脓性分泌物、眼外伤、术后疼痛加重或怀疑感染/排斥，应尽快眼科急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'StatPearls: Limbal Stem Cell Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557444/',
    },
  ],
  symptoms:
    '<p>常见反复眼红、疼痛、异物感、畏光、流泪、视力波动或下降，检查可见角膜上皮不稳定、结膜化、新生血管和混浊。</p>',
  diagnosis:
    '<p>诊断由眼表专科结合裂隙灯、荧光染色、前节 OCT、共聚焦显微镜或印迹细胞学等评估角膜缘和角膜上皮状态。</p>',
  treatment:
    '<p>先控制炎症、干眼、睑缘和眼睑问题；重度患者可评估角膜缘干细胞移植、培养上皮移植、羊膜等眼表重建方案。</p>',
  prognosis:
    '<p>预后取决于病因、受累范围、炎症控制和是否能重建稳定眼表。早期转角膜/眼表专科可降低角膜混浊和手术失败风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'ophthalmologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 399,
    name: 'limbal-stem-cell-deficiency-journey.png',
    url: '/images/diseases/limbal-stem-cell-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

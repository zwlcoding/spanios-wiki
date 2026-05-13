import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFamilialAdenomatousPolyposis: DiseaseDraft = {
  ...entity(2027, 'disease-familial-adenomatous-polyposis'),
  name: '家族性腺瘤性息肉病',
  nameEn: 'Familial adenomatous polyposis',
  alias: 'FAP、APC相关腺瘤性息肉病、第二批罕见病目录第 27 项',
  slug: 'familial-adenomatous-polyposis',
  oneSentence:
    '家族性腺瘤性息肉病是一种 APC 基因相关的遗传性结直肠癌易感综合征，患者常从青少年期开始出现大量结肠腺瘤，如果没有规范监测和预防性处理，结直肠癌风险很高。',
  plainName: '会长出很多结肠息肉、需要终身防癌管理的遗传病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其发生率约为每 8,500 人 1 例，占所有结直肠癌约 0.5%。',
  quickLook: {
    whatItIs:
      'FAP 的核心问题是 APC 肿瘤抑制基因失去正常功能，结肠和直肠容易长出大量癌前腺瘤。经典型可在儿童或青少年期出现息肉，轻型 FAP 息肉数量较少、发病较晚。',
    whoToSeeFirst:
      '有家族性结直肠癌、年轻时多发息肉、便血、贫血或已发现多个腺瘤，应先看消化内科/结直肠外科；确诊后需要遗传咨询和眼科、甲状腺等相关筛查。',
    isGenetic:
      '多为常染色体显性遗传，患者每次生育有约 50% 概率把致病变异传给子女。也有部分患者为新发变异。',
    hasTreatment:
      '管理目标是尽早发现息肉并预防癌变。常用方式包括定期肠镜、息肉处理、合适时机的预防性结肠或结直肠切除，以及上消化道、甲状腺、硬纤维瘤等风险随访。',
    commonDelayReason:
      '早期可能没有明显症状，或只表现为便血、腹痛、腹泻、贫血，被当作普通息肉、痔疮或肠炎处理。家族史和肠镜发现的息肉数量非常关键。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童、青少年或年轻成人肠镜发现多个腺瘤性息肉，尤其数量逐渐增多。',
      '本人或家族中有早发结直肠癌、反复结肠息肉、十二指肠息肉、硬纤维瘤或甲状腺癌。',
      '长期便血、黏液便、腹痛、腹泻、缺铁性贫血或不明原因体重下降。',
      '体检或眼科检查提示 CHRPE，或有骨瘤、牙齿异常等 FAP 相关线索。',
    ],
    commonWrongTurns: [
      '只把单个息肉切掉，没有根据息肉数量和家族史考虑遗传性息肉病。',
      '年轻患者便血被长期按痔疮或肠炎处理，没有及时做肠镜。',
      '确诊后只关注结肠，没有安排十二指肠、胃、甲状腺和硬纤维瘤风险随访。',
      '没有让一线亲属接受遗传咨询或肠镜筛查。',
    ],
    firstDepartments: [
      '消化内科',
      '结直肠外科',
      '遗传咨询门诊',
      '肿瘤遗传门诊',
    ],
    diagnosisChecklist: [
      '整理本人所有肠镜报告、病理报告、息肉数量、部位、大小和切除记录。',
      '记录家族三代中结直肠癌、息肉、胃肠道肿瘤、甲状腺癌、硬纤维瘤和早逝情况。',
      '带既往腹部影像、手术记录、眼科检查、甲状腺超声和基因检测结果。',
      '如果已有癌变或计划手术，准备病理切片复核和多学科会诊资料。',
    ],
    testsToAskAbout: [
      '全结肠镜和必要时上消化道内镜，用于评估息肉负担和十二指肠/胃部风险。',
      'APC 基因检测；若 APC 阴性但表现相似，可询问 MUTYH 等其他息肉病基因检测。',
      '甲状腺超声、腹部影像、眼底检查以及硬纤维瘤风险评估。',
      '一线亲属的遗传咨询、靶向变异检测和合适年龄开始的肠镜筛查。',
    ],
    questionsForDoctor: [
      '我的息肉数量和基因结果更像经典型 FAP、轻型 FAP，还是其他息肉病？',
      '现在是继续肠镜随访，还是需要讨论预防性手术？手术方式如何影响排便和生活？',
      '上消化道、甲状腺、硬纤维瘤和其他肿瘤风险如何安排随访？',
      '家人应该从什么年龄开始筛查？已有致病变异时如何做家系检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FAP 早期可能没有症状，很多人是在家族筛查或肠镜中发现。随着息肉增多，可出现便血、黏液便、腹痛、腹泻、贫血或体重下降。</p><p>除结直肠外，部分患者还会有十二指肠或胃息肉、硬纤维瘤、骨瘤、牙齿异常、先天性视网膜色素上皮肥大、甲状腺癌或其他肿瘤风险。不同家庭的表现可因 APC 变异位置和修饰因素而不同。</p>',
    diagnosis:
      '<p>诊断主要依靠肠镜和病理显示多发腺瘤性息肉，并结合家族史和基因检测。经典型 FAP 往往有数百到数千枚腺瘤，轻型 FAP 数量可较少、出现更晚。</p><p>需要与 MUTYH 相关息肉病、其他遗传性息肉综合征、炎症性肠病相关假息肉和散发性多发息肉鉴别。基因检测有助于确定家族筛查方案，但阴性结果不能完全替代临床判断。</p>',
    treatment:
      '<p>治疗的核心是癌症预防。医生会根据年龄、息肉数量、病理级别、癌变风险和生活质量，安排定期肠镜、息肉处理或预防性结肠/结直肠切除。</p><p>手术后仍需要长期随访残余直肠、回肠储袋、上消化道和其他 FAP 相关肿瘤风险。药物可在部分场景帮助减少息肉负担，但不能替代必要的内镜或手术管理。</p>',
    longTermCare:
      '<p>FAP 是终身管理疾病。患者应保存肠镜、病理、手术和基因报告，按计划复查结直肠或储袋、胃十二指肠、甲状腺和腹部硬纤维瘤风险。</p><p>术后还要关注排便习惯、营养、贫血、肠梗阻症状和心理支持。换医院就诊时，带完整家族变异信息可以减少重复检查。</p>',
    fertilityOrFamily:
      '<p>FAP 多为常染色体显性遗传。已明确 APC 致病变异的家庭，可为父母、兄弟姐妹、子女和其他高风险亲属做遗传咨询和靶向检测。</p><p>有生育计划时，可讨论产前诊断或胚胎植入前遗传学检测，并结合家庭价值观和当地可及性决定。</p>',
    emergencySigns:
      '<p>大量便血、黑便伴头晕乏力、持续腹痛腹胀和呕吐、疑似肠梗阻、术后发热腹痛、快速加重的贫血或癌症相关急症，应及时急诊，并说明 FAP 诊断和既往手术方式。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Familial adenomatous polyposis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-adenomatous-polyposis/',
    },
  ],
  symptoms:
    '<p>常见线索是青少年或年轻成人多发结直肠腺瘤、便血、腹痛、腹泻、贫血，也可伴十二指肠息肉、硬纤维瘤、骨瘤、牙齿异常或甲状腺等肿瘤风险。</p>',
  diagnosis:
    '<p>诊断依靠肠镜和病理评估息肉数量与类型，并结合家族史、APC 基因检测和必要时其他息肉病基因检测。</p>',
  treatment:
    '<p>治疗以癌症预防为核心，包括规律肠镜、息肉处理、合适时机的预防性结肠或结直肠手术，以及上消化道、甲状腺和硬纤维瘤等长期随访。</p>',
  prognosis:
    '<p>若能通过家族筛查早期发现并规范内镜和手术管理，结直肠癌风险可显著降低；延迟诊断或中断随访会增加癌变和并发症风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 380,
    name: 'familial-adenomatous-polyposis-journey.png',
    url: '/images/diseases/familial-adenomatous-polyposis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

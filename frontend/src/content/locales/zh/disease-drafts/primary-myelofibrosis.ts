import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryMyelofibrosis: DiseaseDraft = {
  ...entity(2067, 'disease-primary-myelofibrosis'),
  name: '原发性骨髓纤维化',
  nameEn: 'Primary myelofibrosis',
  alias: 'PMF；原发性骨髓纤维化；第二批罕见病目录第 67 项',
  oneSentence:
    '原发性骨髓纤维化是一种罕见的骨髓增殖性肿瘤，骨髓逐渐被纤维组织替代，可能导致贫血、脾大、全身症状、出血或血栓风险。',
  plainName: '骨髓被瘢痕样纤维组织占据、造血变困难的慢性血液病',
  prevalence:
    '已纳入中国第二批罕见病目录；MedlinePlus Genetics 资料估计全球约每 50 万人 1 例，多在 50-80 岁诊断，但任何年龄都可能发生。',
  quickLook: {
    whatItIs:
      'PMF 属于骨髓增殖性肿瘤。骨髓纤维化让正常造血变差，身体可能转到脾脏和肝脏造血，导致脾大、腹胀和血细胞异常。',
    whoToSeeFirst:
      '贫血乏力、左上腹胀满、脾大、夜汗发热、体重下降、骨痛，或血常规长期异常，应到血液科评估。',
    isGenetic:
      '常见 JAK2、CALR、MPL 等获得性体细胞变异，通常不是父母遗传给孩子的单基因病；少数有家族聚集需专科解释。',
    hasTreatment:
      '无症状低危者可观察。治疗可包括输血和贫血治疗、JAK 抑制剂缓解脾大和症状、羟基脲等控制细胞数，少数适合者评估异基因造血干细胞移植。',
    commonDelayReason:
      '早期可能只有轻度贫血、血小板异常或脾大，被当作缺铁、慢性炎症、肝脾问题或其他血液病，未及时做骨髓和驱动基因评估。',
  },
  patientJourney: {
    whenToSuspect: [
      '血常规反复出现贫血、白细胞或血小板异常，外周血涂片有泪滴样红细胞或幼稚细胞。',
      '脾脏增大、左上腹胀痛、早饱、体重下降、夜汗、低热、骨痛或明显乏力。',
      '既往被诊断为真性红细胞增多症或原发性血小板增多症后，出现贫血、脾大或骨髓纤维化进展。',
      '有不明原因血栓、出血、反复感染或需要输血。',
    ],
    commonWrongTurns: [
      '只按缺铁性贫血或慢性病贫血处理，忽略脾大、涂片和血小板/白细胞异常。',
      '只做血常规复查，没有进行骨髓活检、BCR-ABL 排除和 JAK2/CALR/MPL 检测。',
      '只关注脾脏大小，没有评估症状负担、贫血、血栓出血和急性白血病转化风险。',
    ],
    firstDepartments: [
      '血液科',
      '骨髓增殖性肿瘤专病门诊',
      '输血或血栓门诊（按并发症）',
      '移植门诊（高危或年轻患者）',
    ],
    diagnosisChecklist: [
      '带连续血常规、网织红细胞、铁代谢、乳酸脱氢酶、尿酸、肝脾超声或 CT。',
      '带外周血涂片、骨髓穿刺/活检、网状纤维染色和病理会诊结果。',
      '整理 JAK2、CALR、MPL、BCR-ABL 和其他髓系基因检测报告。',
      '记录夜汗、发热、体重下降、骨痛、早饱、瘙痒、血栓、出血、输血和感染史。',
    ],
    testsToAskAbout: [
      '骨髓活检和纤维化分级，是否符合 WHO/ICC 对 PMF 或纤维化前期 PMF 的诊断。',
      'JAK2 V617F、CALR、MPL、BCR-ABL 和更广泛髓系 NGS，用于诊断和预后。',
      'DIPSS、MIPSS70 等风险分层，以及是否需要移植评估。',
      '贫血原因、铁负荷、脾大程度、血栓/出血风险和急性白血病转化监测。',
    ],
    questionsForDoctor: [
      '我属于纤维化前期还是明显纤维化期？是否排除了 CML、ET/PV 后纤维化和其他继发原因？',
      '我的风险分层是多少？现在适合观察、药物治疗还是移植评估？',
      '贫血、脾大和全身症状分别用什么目标来判断治疗是否有效？',
      '哪些变化提示骨髓衰竭或急性白血病转化，需要尽快复诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PMF 早期可没有明显症状，常在血常规或体检发现。进展后可出现贫血导致的乏力、气短、心悸，白细胞或血小板异常导致感染、出血或血栓风险。脾脏代偿造血可引起脾大、左上腹胀痛和早饱。</p><p>部分患者有全身症状，如夜汗、低热、体重下降、骨痛、皮肤瘙痒和明显疲劳。外周血涂片可见泪滴样红细胞、幼稚粒细胞或有核红细胞。</p>',
    diagnosis:
      '<p>诊断需要血常规、外周血涂片、骨髓穿刺和骨髓活检共同判断。骨髓活检用于观察巨核细胞形态、纤维化程度和排除其他骨髓疾病。</p><p>分子检测通常包括 JAK2、CALR、MPL，以及 BCR-ABL 以排除慢性髓性白血病；更广泛的髓系基因检测可帮助预后分层。还要区分纤维化前期 PMF、原发性血小板增多症、真性红细胞增多症后骨髓纤维化和反应性骨髓纤维化。</p>',
    treatment:
      '<p>治疗按症状和风险分层决定。无症状低危患者可严密观察。贫血可用输血、促红细胞生成素、雄激素类药物或免疫调节药等方案，由血液科根据情况选择。</p><p>脾大和全身症状明显者可评估 JAK 抑制剂，如 ruxolitinib 或其他可及药物；细胞数过高时可能用羟基脲等。异基因造血干细胞移植是少数患者的潜在根治选择，但风险较高，通常用于合适的中高危患者。</p>',
    longTermCare:
      '<p>长期随访包括血常规、脾脏大小、症状评分、铁负荷、血栓和出血事件、感染、药物副作用和生活质量。输血依赖患者需评估铁过载。</p><p>若贫血快速加重、外周血原始细胞升高、脾脏快速增大、发热夜汗体重下降明显或骨痛加重，应复查以评估疾病进展或急性白血病转化。</p>',
    fertilityOrFamily:
      '<p>PMF 的驱动变异多为后天获得性体细胞变异，家属通常不需要常规基因筛查。年轻患者、明显家族聚集或准备移植时，应由血液科和遗传/移植团队解释家属检测和供者选择。</p>',
    emergencySigns:
      '<p>突发一侧肢体无力、说话困难、胸痛、气短、单侧腿肿痛、出血不止、黑便/呕血、高热寒战、严重左上腹痛或极度乏力，应急诊并说明 PMF 病史和用药。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Primary myelofibrosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/primary-myelofibrosis',
    },
    {
      name: 'National Cancer Institute: Myeloproliferative Neoplasms Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/myeloproliferative/patient/chronic-treatment-pdq',
    },
  ],
  symptoms:
    '<p>可无症状，也可有贫血乏力、气短、脾大早饱、夜汗发热、体重下降、骨痛、感染、出血或血栓表现。</p>',
  diagnosis:
    '<p>诊断结合血常规、外周血涂片、骨髓活检和纤维化分级、JAK2/CALR/MPL 等驱动基因检测，并排除 BCR-ABL 阳性 CML 和继发原因。</p>',
  treatment:
    '<p>治疗按风险和症状分层，可观察、输血和贫血治疗、JAK 抑制剂、羟基脲等药物，少数中高危且适合者评估异基因造血干细胞移植。</p>',
  prognosis:
    '<p>预后差异很大，取决于年龄、血细胞计数、症状、基因风险、原始细胞比例和治疗选择；少数患者会进展为急性白血病。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'primary-myelofibrosis',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 421,
    name: 'primary-myelofibrosis-journey.png',
    url: '/images/diseases/primary-myelofibrosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

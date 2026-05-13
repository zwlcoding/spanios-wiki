import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSystemicJuvenileIdiopathicArthritis: DiseaseDraft = {
  ...entity(2074, 'disease-systemic-juvenile-idiopathic-arthritis'),
  name: '全身型幼年特发性关节炎',
  nameEn: 'Systemic juvenile idiopathic arthritis',
  alias: 'sJIA；全身型 JIA；Still 病相关；第二批罕见病目录第 74 项',
  oneSentence:
    '全身型幼年特发性关节炎是一种儿童起病的自身炎症性疾病，反复高热、皮疹和关节炎是典型线索，严重时可发生巨噬细胞活化综合征。',
  plainName: '孩子反复高热皮疹并伴关节炎的全身炎症病',
  prevalence:
    '已纳入中国第二批罕见病目录；JIA 是一组儿童关节炎疾病，全身型只是其中较少见的一型，患病率随地区和诊断标准不同而变化。',
  quickLook: {
    whatItIs:
      'sJIA 不只是关节炎，而是全身炎症病。发热常每天一次或两次高峰，退热时孩子可能明显好转，皮疹常随发热出现或消退。',
    whoToSeeFirst:
      '儿童持续或反复高热超过 2 周、皮疹、关节肿痛、淋巴结/肝脾大或炎症指标很高，应到儿科风湿免疫科评估。',
    isGenetic:
      '通常不是单基因遗传病，更多与免疫调节异常有关；有家族反复发热或单基因自炎症线索时才重点做遗传评估。',
    hasTreatment:
      '治疗目标是尽快控制炎症、保护关节和预防 MAS。可用 NSAID、糖皮质激素、甲氨蝶呤，以及 IL-1/IL-6 抑制剂等生物制剂。',
    commonDelayReason:
      '早期常被反复当作感染、药疹、过敏或不明原因发热；若退热时皮疹消失、培养阴性和炎症指标持续升高，应考虑风湿免疫病。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童每天高热，常伴一过性粉红色皮疹、乏力和炎症指标升高。',
      '关节肿痛、晨僵或活动受限，可在发热之后才逐渐明显。',
      '伴淋巴结、肝脾大、浆膜炎、胸痛气短或心包/胸腔积液。',
      '出现持续高热、血细胞下降、铁蛋白很高、肝功能异常或凝血异常，需警惕 MAS。',
    ],
    commonWrongTurns: [
      '反复按感染使用抗生素，但培养和病原学没有支持。',
      '只用退热药控制体温，没有追踪关节、铁蛋白、血细胞和肝凝血。',
      '发热皮疹缓解后停药过快，导致复燃或激素依赖。',
    ],
    firstDepartments: [
      '儿科风湿免疫科',
      '儿童感染科（排除感染）',
      '急诊/住院儿科（高热或疑似 MAS）',
      '康复医学科',
    ],
    diagnosisChecklist: [
      '记录每日体温曲线、皮疹照片、关节肿痛位置和退热/用药反应。',
      '带血常规、CRP/ESR、铁蛋白、肝功能、凝血、甘油三酯和病原学检查。',
      '带关节超声/MRI、心脏超声、胸腹影像和既往抗生素/激素使用记录。',
    ],
    testsToAskAbout: [
      '是否符合全身型 JIA，感染、恶性肿瘤和其他自炎症病如何排除。',
      '是否有 MAS 风险，需要怎样监测铁蛋白、血细胞、肝酶和凝血。',
      '是否适合 IL-1 或 IL-6 抑制剂，疫苗和感染筛查怎么安排。',
    ],
    questionsForDoctor: [
      '目前治疗目标是退热、停激素、保护关节，还是预防 MAS？',
      '哪些症状提示 MAS 或严重感染，需要立刻急诊？',
      '孩子运动、上学、疫苗和生长发育随访怎么安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>sJIA 常以反复高热起病，发热可每日出现高峰，伴随一过性粉红色皮疹、乏力、肌痛、淋巴结肿大、肝脾大或浆膜炎。关节炎可在早期不明显，也可随后出现关节肿痛、晨僵和活动受限。</p><p>最重要的急性并发症是巨噬细胞活化综合征，表现为持续高热、精神差、血细胞下降、铁蛋白显著升高、肝功能和凝血异常，可能危及生命。</p>',
    diagnosis:
      '<p>诊断依赖病程、发热模式、皮疹、关节表现和实验室炎症证据，同时排除感染、白血病/淋巴瘤、川崎病、单基因自炎症病和其他风湿病。</p><p>常用检查包括血常规、CRP/ESR、铁蛋白、肝功能、凝血、甘油三酯、病原学、关节影像和心脏超声。疾病活动度和 MAS 风险需要连续观察。</p>',
    treatment:
      '<p>治疗按炎症强度和器官受累决定。轻症可短期 NSAID，但多数需要糖皮质激素或更早使用靶向生物制剂。IL-1 和 IL-6 通路抑制剂可帮助控制发热、炎症和关节损害。</p><p>治疗前后需进行感染筛查、疫苗规划和药物副作用监测。疑似 MAS 时需要住院快速处理，可能用大剂量激素、环孢素或生物制剂等方案。</p>',
    longTermCare:
      '<p>长期随访关注发热复燃、关节活动度、炎症指标、铁蛋白、生长发育、骨密度、眼科筛查、药物副作用和感染风险。康复训练有助于保持关节功能。</p><p>家庭应学会识别 MAS 红旗，并保存体温、皮疹、用药和化验趋势。</p>',
    fertilityOrFamily:
      '<p>sJIA 通常不是单基因遗传病。若有家族性周期热、婴幼儿早发严重炎症或治疗反应异常，可与医生讨论自炎症基因检测。</p>',
    emergencySigns:
      '<p>持续高热不退、精神差、出血点/瘀斑、呼吸困难、胸痛、严重腹痛、黄疸、抽搐、尿量减少或医生提示铁蛋白/凝血/血细胞异常，应急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Juvenile idiopathic arthritis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/juvenile-idiopathic-arthritis',
    },
    {
      name: 'Cleveland Clinic: Juvenile Idiopathic Arthritis',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/10370-juvenile-idiopathic-arthritis',
    },
  ],
  symptoms:
    '<p>常见每日高热、一过性皮疹、关节肿痛晨僵、淋巴结/肝脾大、浆膜炎和炎症指标升高；严重时可发生 MAS。</p>',
  diagnosis:
    '<p>诊断结合儿童发热皮疹关节炎模式、炎症指标和影像，并排除感染、肿瘤、川崎病和其他自炎症/风湿病。</p>',
  treatment:
    '<p>治疗可用 NSAID、糖皮质激素、甲氨蝶呤和 IL-1/IL-6 抑制剂等，疑似 MAS 需快速住院处理。</p>',
  prognosis:
    '<p>早期控制炎症可减少关节损害和激素副作用；病程可单次缓解、反复发作或慢性关节炎，需要长期随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'systemic-juvenile-idiopathic-arthritis',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 428,
    name: 'systemic-juvenile-idiopathic-arthritis-journey.png',
    url: '/images/diseases/systemic-juvenile-idiopathic-arthritis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

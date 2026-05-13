import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAdultOnsetStillDisease: DiseaseDraft = {
  ...entity(2004, 'disease-adult-onset-still-disease'),
  name: '成人斯蒂尔病',
  nameEn: 'Adult-onset Still disease',
  alias: 'AOSD、成人Still病、成人发病Still病、第二批罕见病目录第 4 项',
  slug: 'adult-onset-still-disease',
  oneSentence:
    '成人斯蒂尔病是一种罕见的自身炎症性疾病，常以反复高热、关节痛或关节炎、随发热出现的淡红色皮疹和血清铁蛋白显著升高为线索。',
  plainName: '反复高热、皮疹和关节痛的自身炎症病',
  prevalence:
    '已纳入国家第二批罕见病目录；不同研究估计差异较大，总体属于罕见病。',
  quickLook: {
    whatItIs:
      '成人斯蒂尔病不是普通感冒或单纯关节炎，而是全身炎症反复被点燃。发热常每天出现，皮疹可随发热出现又消退，关节痛、咽痛、淋巴结或肝脾肿大也常见。',
    whoToSeeFirst:
      '反复不明原因高热、皮疹和关节痛应看风湿免疫科；高热伴呼吸困难、意识改变、出血、黄疸或血细胞明显异常时应急诊。',
    isGenetic: '通常不是典型遗传病，病因尚不完全明确，可能与免疫调控异常有关。',
    hasTreatment:
      '可以治疗。轻症可能短期抗炎治疗，更多患者需要糖皮质激素、改善病情抗风湿药或靶向白细胞介素通路的生物制剂，由风湿免疫科按病情分层。',
    commonDelayReason:
      '早期像感染、肿瘤或其他风湿病；如果每次发热都按感染用抗生素，而没有结合皮疹、关节、铁蛋白和炎症指标，容易延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '连续或反复高热，常在一天中固定时段升高，退热后人又相对好一些。',
      '发热时出现淡红色或鲑鱼色皮疹，退热后皮疹变淡或消失。',
      '咽痛、关节痛或关节肿胀，伴乏力、肌肉痛、淋巴结肿大或肝脾肿大。',
      '白细胞和中性粒细胞升高、CRP/ESR 升高、铁蛋白显著升高，但感染证据不足。',
      '多次抗感染治疗效果不稳定，且感染、肿瘤和其他自身免疫病排查后仍不能解释。',
    ],
    commonWrongTurns: [
      '长期只按感染处理，反复更换抗生素。',
      '看到皮疹短暂消退就忽略它与发热的同步关系。',
      '只按关节炎处理，没有评估全身炎症和巨噬细胞活化综合征风险。',
      '未排除感染或肿瘤前自行长期使用激素。',
    ],
    firstDepartments: ['风湿免疫科', '感染科', '血液科', '急诊科'],
    diagnosisChecklist: [
      '记录体温曲线、皮疹照片、关节痛部位和每天症状变化。',
      '带齐血常规、CRP、ESR、铁蛋白、肝功能、凝血、感染筛查、影像和住院记录。',
      '说明抗生素、退热药、激素或免疫药物使用后的反应。',
      '记录是否有胸痛、呼吸困难、腹痛、黄疸、出血点、意识改变或尿量减少。',
    ],
    testsToAskAbout: [
      '血常规分类、CRP、ESR、铁蛋白和糖化铁蛋白（如可及）。',
      '肝功能、肾功能、凝血、甘油三酯、纤维蛋白原，用于评估严重炎症或 MAS 风险。',
      '感染、肿瘤和其他风湿免疫病的排除性检查。',
      '关节超声或影像，胸腹部影像，必要时心脏超声。',
      '医生是否依据 Yamaguchi 或其他分类标准综合判断。',
    ],
    questionsForDoctor: [
      '现在更像成人斯蒂尔病，还是感染、肿瘤或其他风湿病？还缺哪些排除检查？',
      '我的病情属于全身型、关节为主型，还是已经有严重并发症风险？',
      '是否需要住院？哪些指标提示巨噬细胞活化综合征？',
      '治疗是短期抗炎、激素，还是需要甲氨蝶呤/生物制剂等长期方案？',
      '复查时重点看哪些指标，如何判断复发？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>成人斯蒂尔病常见三联线索是高热、皮疹和关节症状。发热可每天出现，皮疹多为淡红色或鲑鱼色，常在发热时出现，退热后减轻。患者还可有咽痛、肌肉痛、乏力、淋巴结肿大、肝脾肿大、胸膜或心包受累。</p><p>少数患者会出现严重全身炎症并发症，例如巨噬细胞活化综合征，表现为持续高热、血细胞下降、肝功能异常、凝血异常、铁蛋白极高、意识或多器官功能异常，需要紧急处理。</p>',
    diagnosis:
      '<p>成人斯蒂尔病没有一个单独检查可以确诊。医生通常根据发热模式、皮疹、关节症状、白细胞和中性粒细胞升高、炎症指标和铁蛋白升高来综合判断。</p><p>诊断前必须认真排除感染、恶性肿瘤和其他风湿免疫病。常用分类标准包括 Yamaguchi 标准等，但最终仍需结合临床过程和排除性检查。</p>',
    treatment:
      '<p>治疗按严重程度分层。轻症可短期使用非甾体抗炎药，但许多患者需要糖皮质激素控制炎症；反复发作、关节受累或激素依赖时，可能使用甲氨蝶呤等改善病情药物或针对 IL-1、IL-6 等通路的生物制剂。</p><p>治疗过程中要监测感染、肝功能、血细胞、血脂、骨质疏松和药物不良反应。不要在未排除感染的情况下自行长期使用激素。</p>',
    longTermCare:
      '<p>部分患者只有一次或少数几次发作，部分会反复发作或转为慢性关节炎。长期随访需要记录体温、皮疹、关节功能、炎症指标、铁蛋白和药物副作用。</p><p>患者应了解复发信号和急症信号，并在接种疫苗、备孕、手术或感染时提前与风湿免疫科沟通免疫治疗调整。</p>',
    fertilityOrFamily:
      '<p>成人斯蒂尔病通常不是遗传病。备孕、妊娠或哺乳期用药需要提前和风湿免疫科、产科共同规划，避免自行停药导致复发。</p>',
    emergencySigns:
      '<p>持续高热不退、呼吸困难、胸痛、意识改变、黄疸、明显出血点或瘀斑、尿量减少、严重腹痛，或化验提示血细胞下降、凝血异常、铁蛋白急剧升高，应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: "Cleveland Clinic: Adult-Onset Still's Disease",
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/adult-onset-stills-disease-aosd',
    },
    {
      name: 'Mayo Clinic: Adult Still disease diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/adult-stills-disease/diagnosis-treatment/drc-20351912',
    },
  ],
  symptoms:
    '<p>常见表现为反复高热、发热时出现淡红色皮疹、关节痛或关节炎、咽痛、肌肉痛、淋巴结或肝脾肿大，并常伴炎症指标和铁蛋白升高。</p>',
  diagnosis:
    '<p>诊断需要综合临床表现、血常规和炎症指标、铁蛋白等结果，并排除感染、肿瘤和其他风湿免疫病。</p>',
  treatment:
    '<p>治疗根据严重程度使用抗炎药、糖皮质激素、改善病情抗风湿药或 IL-1/IL-6 等靶向生物制剂，并监测感染和药物不良反应。</p>',
  prognosis:
    '<p>病程差异很大，可单次发作、反复发作或慢性关节受累；早期识别严重炎症并发症并规范随访很关键。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 358,
    name: 'adult-onset-still-disease-journey.png',
    url: '/images/diseases/adult-onset-still-disease-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

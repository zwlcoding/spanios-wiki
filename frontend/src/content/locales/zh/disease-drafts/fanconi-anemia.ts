import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFanconiAnemia: DiseaseDraft = {
  ...entity(29, 'disease-fanconi-anemia'),
  name: '范可尼贫血',
  nameEn: 'Fanconi Anemia',
  alias: 'Fanconi anemia、FA、范可尼全血细胞减少症',
  slug: 'fanconi-anemia',
  oneSentence:
    '范可尼贫血是一种遗传性 DNA 修复缺陷病，可导致先天异常、骨髓衰竭和白血病/实体瘤风险升高。',
  plainName: '会影响骨髓造血和 DNA 修复的遗传性骨髓衰竭综合征',
  prevalence:
    '总体罕见，不同人群携带率和发病率不同；部分患者出生时已有结构异常，也有人先以血细胞减少或肿瘤风险被发现。',
  quickLook: {
    whatItIs:
      'FA 相关基因参与 DNA 损伤修复。修复能力不足会让骨髓造血逐渐变差，也会增加某些癌症和治疗毒性风险。',
    whoToSeeFirst:
      '儿童或成人出现不明原因血小板/白细胞/红细胞减少，伴身材矮小、咖啡斑、拇指/桡骨异常、肾泌尿或生殖系统异常时，应到血液科或儿科血液科评估。',
    isGenetic:
      '是，多数为常染色体隐性遗传，也有 X 连锁或少数显性相关类型。基因检测和家系评估非常重要。',
    hasTreatment:
      '有长期血液科管理方案，包括监测骨髓衰竭、处理感染/出血/贫血、造血干细胞移植评估和肿瘤筛查。',
    commonDelayReason:
      '先天异常可能轻微，血细胞减少早期也不典型；若只按普通贫血、免疫性血小板减少或再障处理，可能漏掉染色体断裂试验和基因诊断。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童期逐渐出现血小板、白细胞或红细胞减少，尤其伴感染或出血倾向。',
      '身材矮小、皮肤色素异常、拇指/桡骨异常、肾脏或泌尿生殖异常与血液问题并存。',
      '年轻人出现再生障碍性贫血、MDS/AML 或头颈、皮肤、泌尿生殖相关肿瘤。',
      '化疗或放疗反应异常强烈，需要排查 DNA 修复缺陷。',
      '家族中有骨髓衰竭、早发肿瘤、兄弟姐妹类似异常或近亲婚配史。',
    ],
    commonWrongTurns: [
      '只按普通再障或免疫性血小板减少处理，没有做染色体断裂试验。',
      '只关注先天畸形，未定期监测血常规和骨髓风险。',
      '准备移植或肿瘤治疗前未识别 FA，导致治疗毒性风险评估不足。',
      '成年后才出现肿瘤时没有回头追问儿童期发育、皮肤和家族史。',
    ],
    firstDepartments: [
      '儿科血液科/血液科',
      '医学遗传科/遗传咨询门诊',
      '骨髓移植中心（需要评估时）',
      '耳鼻喉头颈、皮肤、妇科/泌尿等肿瘤筛查相关专科',
    ],
    diagnosisChecklist: [
      '保存历次血常规、网织红细胞、骨髓检查、染色体核型和肿瘤相关资料。',
      '记录出生缺陷、生长发育、皮肤色素、听力、肾脏/泌尿生殖异常和家族史。',
      '询问是否需要 DEB/MMC 染色体断裂试验及 FA 相关基因检测。',
      '若考虑移植，确认供者筛查和移植中心是否熟悉 FA。',
      '制定头颈、皮肤、妇科/泌尿等长期肿瘤筛查计划。',
    ],
    testsToAskAbout: [
      '血常规和骨髓检查。',
      'DEB/MMC 染色体断裂试验。',
      'FA 相关基因 panel 或外显子组/基因组检测。',
      '肾脏、心脏、听力、内分泌和生长发育评估。',
      'MDS/AML 风险相关细胞遗传学和分子检查。',
    ],
    questionsForDoctor: [
      '我的血细胞减少是否需要排查 FA？应该先做染色体断裂试验还是基因检测？',
      '目前骨髓功能处于什么阶段？多久复查血常规和骨髓？',
      '是否需要移植评估？供者需要怎样筛查？',
      '哪些癌症筛查需要从现在开始做？频率如何？',
      '家属和未来生育计划需要哪些遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FA 可表现为身材矮小、皮肤色素异常、拇指或桡骨异常、小头、肾泌尿生殖异常、眼耳问题、内分泌异常和发育问题。血液方面常见进行性骨髓衰竭，早期可能先出现血小板或白细胞减少，之后发展为全血细胞减少。患者还面临 MDS/AML 以及头颈、皮肤和泌尿生殖相关实体瘤风险。</p>',
    diagnosis:
      '<p>诊断通常依靠 DEB/MMC 染色体断裂试验和分子遗传学检测，并结合临床表现、血常规、骨髓检查和家族史。没有明显先天异常并不能排除 FA。治疗前识别 FA 很重要，因为患者对放疗、化疗等 DNA 损伤相关治疗可能更敏感。</p>',
    treatment:
      '<p>管理包括骨髓衰竭监测、感染和出血风险处理、输血和铁负荷管理、造血干细胞移植评估，以及内分泌、发育和肿瘤筛查。具体治疗需要由熟悉遗传性骨髓衰竭的团队制定。</p>',
    longTermCare:
      '<p>长期随访重点是血常规趋势、骨髓克隆演变、移植时机、肿瘤筛查、内分泌和生长发育、听力和生活质量。患者应保存基因报告、染色体断裂试验、骨髓报告和移植/输血记录。</p>',
    fertilityOrFamily:
      '<p>多数 FA 为常染色体隐性遗传，也有 X 连锁或少数显性相关类型。明确致病变异后，家属可进行携带者检测、亲属筛查、产前诊断或胚胎植入前遗传学检测咨询。</p>',
    emergencySigns:
      '<p>发热感染、出血不止、黑便/血尿、明显乏力气促、快速加重的血细胞减少，或肿块、口腔/咽喉溃疡长期不愈，应尽快就医并说明 FA 或遗传性骨髓衰竭风险。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Fanconi Anemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1401/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Fanconi Anemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK559133/',
    },
  ],
  symptoms:
    '<p>可有先天发育异常、皮肤色素改变、血细胞减少、骨髓衰竭、感染或出血倾向，并增加 MDS/AML 和实体瘤风险。</p>',
  diagnosis:
    '<p>评估包括血常规、骨髓检查、DEB/MMC 染色体断裂试验、FA 相关基因检测和多系统异常筛查。</p>',
  treatment:
    '<p>管理包括骨髓衰竭监测、支持治疗、移植评估、肿瘤筛查和遗传咨询。</p>',
  prognosis:
    '<p>预后受骨髓衰竭进展、移植时机、治疗毒性和肿瘤风险影响，需长期专科随访。</p>',
  sourceName: 'GeneReviews: Fanconi Anemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1401/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 328,
    name: 'fanconi-anemia-journey.png',
    url: '/images/diseases/fanconi-anemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

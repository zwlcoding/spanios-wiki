import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalHyperinsulinemicHypoglycemia: DiseaseDraft = {
  ...entity(22, 'disease-congenital-hyperinsulinemic-hypoglycemia'),
  name: '先天性高胰岛素性低血糖血症',
  nameEn: 'Congenital Hyperinsulinemic Hypoglycemia',
  alias: '先天性高胰岛素血症、遗传性高胰岛素性低血糖',
  slug: 'congenital-hyperinsulinemic-hypoglycemia',
  oneSentence:
    '先天性高胰岛素性低血糖血症是一组遗传性低血糖疾病，胰岛素分泌调控异常会让婴幼儿或儿童反复出现低血糖，严重时可影响大脑。',
  plainName: '胰岛素过多导致反复低血糖的罕见遗传病',
  prevalence:
    '总体罕见，严重程度从短暂新生儿期低血糖到持续性、难治性低血糖不等。',
  quickLook: {
    whatItIs:
      '胰岛素会降低血糖。患儿在不该分泌胰岛素的时候仍然分泌过多，导致血糖难以维持，尤其在禁食、吃奶少或生病时更危险。',
    whoToSeeFirst:
      '新生儿或儿童反复低血糖、抽搐、嗜睡、喂养困难或出汗发抖时，应急诊或儿科处理；稳定后需要儿科内分泌/遗传代谢专科随访。',
    isGenetic:
      '许多病例与 KATP 通道或其他胰岛素分泌相关基因有关，遗传方式可为隐性、显性或新发变异。部分病例需要区分弥漫型和局灶型。',
    hasTreatment:
      '有专科治疗方案，包括快速纠正低血糖、长期营养和药物管理、影像定位和部分情况下手术评估。所有方案都应由儿科内分泌团队制定。',
    commonDelayReason:
      '低血糖表现可像喂养差、感染、惊厥或新生儿适应问题；如果没有在发作时采集关键样本，病因容易不清。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿期反复低血糖、喂养困难、嗜睡、肌张力低或惊厥。',
      '低血糖发作时胰岛素不应升高却仍有胰岛素作用证据。',
      '吃奶少、禁食时间稍长或感染后容易低血糖。',
      '需要持续较高葡萄糖支持才能维持血糖。',
      '家族中有婴幼儿低血糖、抽搐或类似内分泌诊断。',
    ],
    commonWrongTurns: [
      '只纠正血糖，没有追查低血糖发生时的胰岛素和代谢指标。',
      '把抽搐只按神经系统疾病处理，忽略低血糖诱因。',
      '出院后缺少家庭监测、喂养和急诊计划，导致反复危象。',
      '未区分暂时性低血糖和持续性遗传性高胰岛素血症。',
    ],
    firstDepartments: [
      '急诊科/新生儿科（急性低血糖、抽搐或意识改变时）',
      '儿科内分泌科',
      '遗传代谢科/医学遗传科',
      '营养科（在专科方案下配合喂养管理）',
    ],
    diagnosisChecklist: [
      '保存每次低血糖发生时的血糖、胰岛素、酮体、游离脂肪酸、乳酸、皮质醇、生长激素等关键样本结果。',
      '记录发作时间、与进食/禁食/感染的关系、纠正方式和是否有抽搐或意识改变。',
      '询问是否需要高胰岛素血症相关基因检测。',
      '确认医生是否评估弥漫型、局灶型或综合征相关低血糖。',
      '准备家庭低血糖识别、监测和急诊就医计划。',
    ],
    testsToAskAbout: [
      '低血糖发作时的关键血样和尿样。',
      '胰岛素、C 肽、酮体、游离脂肪酸和代谢相关指标。',
      'ABCC8、KCNJ11 等高胰岛素血症相关基因检测。',
      '医生认为必要时的胰腺定位影像或专科中心评估。',
      '神经发育随访和脑部评估。',
    ],
    questionsForDoctor: [
      '孩子低血糖是否符合高胰岛素性低血糖？证据是什么？',
      '家庭需要怎样监测血糖？什么情况需要急诊？',
      '是否需要基因检测，结果会影响治疗选择吗？',
      '饮食、夜间喂养和生病时计划应该如何写成可执行文件？',
      '是否需要转诊到有先天性高胰岛素血症经验的中心？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>可表现为新生儿或婴幼儿反复低血糖、喂养困难、嗜睡、低体温、出汗、颤抖、抽搐、意识改变或发育风险。低血糖持续时间和严重程度差异很大，部分患者需要长期管理。</p>',
    diagnosis:
      '<p>诊断关键是在低血糖发生时采集样本，评估胰岛素作用是否不恰当升高，并结合酮体、游离脂肪酸、代谢指标和基因检测。医生还会鉴别内分泌缺陷、代谢病、暂时性新生儿低血糖和综合征相关低血糖。</p>',
    treatment:
      '<p>急性低血糖需要立即由医疗团队处理。长期管理可能包括个体化喂养方案、药物、血糖监测、基因结果指导下的进一步评估，以及部分局灶型或难治病例的手术讨论。家长不要自行改变喂养间隔或药物。</p>',
    longTermCare:
      '<p>长期照护重点是预防低血糖、保护神经发育、制定夜间和生病时计划、定期评估生长发育和治疗副作用。家庭、幼儿园或学校应了解低血糖表现和急诊联系路径。</p>',
    fertilityOrFamily:
      '<p>遗传方式因基因和分型而异。明确基因结果后，父母、兄弟姐妹和有生育计划的家庭可通过遗传咨询了解复发风险、携带者检测、产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>抽搐、意识改变、明显嗜睡、无法进食、反复呕吐、生病期间血糖难以维持，或家庭方案无法纠正低血糖时，应立即急诊，并告知医生疑似或确诊先天性高胰岛素性低血糖。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
    },
    {
      name: 'MedlinePlus Genetics: Congenital hyperinsulinism',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/congenital-hyperinsulinism/',
    },
    {
      name: 'Orphanet: Congenital isolated hyperinsulinism',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/657',
    },
  ],
  symptoms:
    '<p>可表现为新生儿或儿童低血糖、喂养困难、嗜睡、出汗、颤抖、抽搐或意识改变。</p>',
  diagnosis:
    '<p>评估重点是在低血糖发作时采集关键样本，并结合胰岛素作用指标、代谢检查和相关基因检测。</p>',
  treatment:
    '<p>管理需儿科内分泌团队制定，包括急性低血糖处理、长期喂养/药物方案、监测和部分病例的手术评估。</p>',
  prognosis:
    '<p>早期识别和避免反复严重低血糖可降低神经发育风险；预后受分型、治疗反应和随访质量影响。</p>',
  sourceName: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 321,
    name: 'congenital-hyperinsulinemic-hypoglycemia-journey.png',
    url: '/images/diseases/congenital-hyperinsulinemic-hypoglycemia-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
};

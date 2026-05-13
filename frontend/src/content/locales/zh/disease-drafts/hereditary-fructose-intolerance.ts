import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryFructoseIntolerance: DiseaseDraft = {
  ...entity(42, 'disease-hereditary-fructose-intolerance'),
  name: '遗传性果糖不耐受症',
  nameEn: 'Hereditary Fructose Intolerance',
  alias: 'HFI、ALDOB 相关果糖不耐受、遗传性果糖代谢障碍',
  slug: 'hereditary-fructose-intolerance',
  oneSentence:
    '遗传性果糖不耐受症是一种 ALDOB 相关果糖代谢病，摄入果糖、蔗糖或山梨醇后可出现呕吐、低血糖、肝肾损伤等风险。',
  plainName: '吃到某些含果糖的食物或成分后会严重不适的遗传代谢病',
  prevalence:
    'MedlinePlus Genetics 估计全球每年发病约 1/20,000-1/30,000；轻症或饮食自发回避者可能较晚识别。',
  quickLook: {
    whatItIs:
      'HFI 与醛缩酶 B 功能不足有关。果糖代谢中间产物在肝、肾和肠道积累，可导致低血糖、呕吐、肝功能异常和长期器官损伤。',
    whoToSeeFirst:
      '婴儿添加水果、果汁、含蔗糖食物或某些配方/药品后反复呕吐、出汗、嗜睡、低血糖或肝功能异常时，应到遗传代谢科、儿科消化肝病或急诊评估。',
    isGenetic: '是，通常为常染色体隐性遗传，与 ALDOB 双等位致病变异有关。',
    hasTreatment:
      '有明确的饮食回避和营养随访管理路径。疑似时不应做果糖负荷试验，应由代谢专科和营养师制定安全饮食方案。',
    commonDelayReason:
      '常被当作挑食、胃肠炎、食物过敏、乳糖不耐受或普通低血糖；孩子可能自然厌恶甜食和水果，反而掩盖线索。',
  },
  patientJourney: {
    whenToSuspect: [
      '添加水果、果汁、甜食、蔗糖或含山梨醇成分后出现呕吐、出汗、嗜睡或低血糖。',
      '婴儿喂养后反复腹痛、腹胀、拒食、体重增长差或肝大。',
      '不明原因肝功能异常、黄疸、凝血异常、低血糖或肾功能问题与饮食有关。',
      '儿童明显厌恶甜食、水果或含糖食物，且有吃后不适史。',
      '家族中有 HFI、婴幼儿低血糖、肝肾损伤或近亲婚配史。',
    ],
    commonWrongTurns: [
      '把症状当成普通胃肠炎或食物过敏，没有追问具体糖类成分。',
      '尝试反复“训练”孩子吃水果甜食，导致反复暴露。',
      '把果糖吸收不良和遗传性果糖不耐受混淆，低估低血糖和肝肾风险。',
      '使用含蔗糖、果糖或山梨醇的药品、补充剂或口服液前未核对成分。',
    ],
    firstDepartments: [
      '遗传代谢科/医学遗传科',
      '儿科消化肝病科',
      '儿科急诊（低血糖、嗜睡、抽搐或肝衰竭风险时）',
      '营养科（代谢营养方向）',
      '肾内科/肝病科（器官受累时）',
    ],
    diagnosisChecklist: [
      '整理每次发作前吃过的食物、配方、药品、补充剂和症状时间线。',
      '保存低血糖、乳酸、尿酸、肝肾功能、凝血和尿检结果。',
      '询问 ALDOB 基因检测，避免自行或非专科安排果糖负荷试验。',
      '请营养师帮助核对日常食物、药品辅料和学校/托育饮食。',
      '家属有生育计划时准备基因报告做遗传咨询。',
    ],
    testsToAskAbout: [
      'ALDOB 基因检测。',
      '低血糖发作时血糖、乳酸、电解质、尿酸和酸碱状态。',
      '肝功能、胆红素、凝血、白蛋白和腹部超声。',
      '肾功能、电解质和尿检。',
      '营养状态和微量营养素评估。',
    ],
    questionsForDoctor: [
      '孩子的症状是否符合 HFI？哪些成分需要马上回避？',
      '是否可以通过基因检测确认？为什么不建议果糖负荷试验？',
      '日常食品、药品、疫苗或口服液成分应该怎样核对？',
      '已经出现肝肾影响了吗？需要多久复查？',
      '家属筛查和未来生育需要哪些遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>HFI 常在婴儿接触果糖、蔗糖或山梨醇后出现恶心、呕吐、出汗、嗜睡、低血糖、腹痛、腹胀、拒食、体重增长差和肝大。反复暴露可能导致黄疸、肝功能异常、凝血问题、肾功能受累，严重时可有抽搐、昏迷或肝肾衰竭风险。</p>',
    diagnosis:
      '<p>诊断依赖饮食暴露后症状、代谢和肝肾检查，以及 ALDOB 基因检测。GeneReviews 明确提示果糖耐受/负荷试验有危险，不应作为常规诊断方式。医生还会鉴别果糖吸收不良、食物过敏、胃肠炎、糖原累积病、半乳糖血症和其他低血糖/肝病原因。</p>',
    treatment:
      '<p>管理核心是严格回避果糖、蔗糖、山梨醇等相关来源，并由代谢营养师确保营养均衡和微量营养素补充。急性低血糖或肝肾受累需要医院处理。所有饮食和药品辅料核对都应按专科方案执行。</p>',
    longTermCare:
      '<p>长期照护重点是食品和药品成分识别、学校托育沟通、营养状态、肝肾功能和低血糖预防。家庭可准备一份“禁用成分和急诊说明”，避免误食和医疗场景误用含果糖成分。</p>',
    fertilityOrFamily:
      '<p>HFI 为常染色体隐性遗传。明确 ALDOB 变异后，父母、兄弟姐妹和有生育计划的亲属可通过遗传咨询了解携带者检测、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>误食后反复呕吐、嗜睡、出汗、抽搐、低血糖、黄疸、出血倾向、尿量减少或精神状态改变，应立即急诊并说明疑似或确诊 HFI，避免继续摄入相关糖类来源。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Hereditary Fructose Intolerance',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
    },
    {
      name: 'MedlinePlus Genetics: Hereditary fructose intolerance',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hereditary-fructose-intolerance/',
    },
  ],
  symptoms:
    '<p>摄入果糖、蔗糖或山梨醇后可出现呕吐、出汗、低血糖、腹痛、拒食、肝大、黄疸或肝肾受累。</p>',
  diagnosis:
    '<p>评估包括饮食暴露史、低血糖和肝肾代谢检查、ALDOB 基因检测；应避免危险的果糖负荷试验。</p>',
  treatment:
    '<p>管理以严格回避相关糖类来源、营养师随访、药品辅料核对和急性低血糖/肝肾风险处理为核心。</p>',
  prognosis:
    '<p>早期识别并避免暴露后，多数患者可稳定生活；反复误食或延误识别会增加肝肾损伤风险。</p>',
  sourceName: 'GeneReviews: Hereditary Fructose Intolerance',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 341,
    name: 'hereditary-fructose-intolerance-journey.png',
    url: '/images/diseases/hereditary-fructose-intolerance-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGauchersDisease: DiseaseDraft = {
  ...entity(31, 'disease-gauchers-disease'),
  name: '戈谢病',
  nameEn: 'Gaucher’s Disease',
  alias: 'Gaucher disease、葡萄糖脑苷脂酶缺乏症、GBA1 相关戈谢病',
  slug: 'gauchers-disease',
  oneSentence:
    '戈谢病是一种溶酶体贮积病，可导致肝脾肿大、贫血、血小板减少、骨痛或骨危象，部分类型还会累及神经系统。',
  plainName: '脂质代谢物在肝脾、骨髓和骨骼等部位堆积的遗传代谢病',
  prevalence:
    '总体罕见，1 型在阿什肯纳兹犹太人群中更常见；不同类型的发病年龄和严重程度差异很大。',
  quickLook: {
    whatItIs:
      'GBA1 相关酶活性不足会让葡萄糖脑苷脂等物质在巨噬细胞中堆积，影响肝脾、骨髓、骨骼和部分患者的神经系统。',
    whoToSeeFirst:
      '不明原因脾大、肝大、贫血、血小板低、骨痛、骨折或骨危象时，可到血液科、遗传代谢科或儿科评估。',
    isGenetic:
      '是，常染色体隐性遗传。GBA1 基因检测和酶活检测有助于诊断和家族筛查。',
    hasTreatment:
      '有特异性治疗和支持管理方案，适合哪种治疗取决于类型、器官受累、年龄和可及性，需要专科团队制定。',
    commonDelayReason:
      '脾大和血小板低容易被当作血液肿瘤、免疫性血小板减少或肝病；骨痛也可能先按骨科问题处理。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童或成人不明原因脾大、肝大、贫血或血小板减少。',
      '反复骨痛、骨危象、骨密度低、病理性骨折或影像提示骨髓浸润。',
      '脾切除史后仍有贫血、骨痛或肝脾相关线索。',
      '婴幼儿出现肝脾肿大伴神经系统异常，需要排查神经型戈谢病。',
      '家族中有戈谢病、GBA1 变异或类似肝脾/血液/骨骼表现。',
    ],
    commonWrongTurns: [
      '只按 ITP、白血病、淋巴瘤或肝硬化方向检查，未做酶活和基因检测。',
      '脾切除后没有继续追查原发病，骨骼并发症逐渐加重。',
      '骨痛长期按生长痛或骨科疾病处理，未联系血小板低和脾大。',
      '确诊后只看血常规，忽视骨骼、肺和神经系统长期评估。',
    ],
    firstDepartments: [
      '血液科',
      '遗传代谢科/医学遗传科',
      '儿科',
      '骨科/康复科（骨骼并发症时）',
      '神经内科（疑似神经型时）',
    ],
    diagnosisChecklist: [
      '保存血常规、肝脾影像、骨骼影像、骨密度和既往骨痛/骨折记录。',
      '询问是否检测葡萄糖脑苷脂酶活性和 GBA1 基因。',
      '确认是否评估 1 型、2 型、3 型或其他罕见表现。',
      '评估肝脾体积、骨髓负荷、肺部和神经系统受累。',
      '家属有生育计划时准备基因报告做遗传咨询。',
    ],
    testsToAskAbout: [
      '葡萄糖脑苷脂酶活性检测。',
      'GBA1 基因检测。',
      '血常规、肝脾体积和生化指标。',
      '骨骼 MRI、X 线或骨密度评估。',
      '医生认为合适的生物标志物和肺/神经系统评估。',
    ],
    questionsForDoctor: [
      '我属于哪一型戈谢病？目前哪些器官受累？',
      '是否需要特异性治疗？治疗目标和监测指标是什么？',
      '骨痛和骨骼风险应该怎样长期随访？',
      '家人是否需要酶活或基因检测？',
      '哪些症状提示骨危象、感染或出血需要急诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>戈谢病常见表现包括脾大、肝大、贫血、血小板减少、疲乏、容易出血或瘀斑、骨痛、骨危象、骨密度下降和骨折。1 型通常不以原发神经系统受累为主；2 型和 3 型可有不同程度神经系统表现。个体差异很大。</p>',
    diagnosis:
      '<p>诊断通常依赖葡萄糖脑苷脂酶活性降低和 GBA1 基因检测，并结合血液、肝脾、骨骼和神经系统评估。医生还会鉴别血液肿瘤、免疫性血小板减少、肝病和其他溶酶体贮积病。</p>',
    treatment:
      '<p>治疗可能包括特异性治疗、贫血/出血支持、骨骼并发症管理、康复和遗传咨询。具体方案取决于疾病类型、年龄、妊娠计划、器官受累和药物可及性，应由专科团队制定。</p>',
    longTermCare:
      '<p>长期随访重点包括血常规、肝脾体积、骨骼疼痛和影像、骨密度、生长发育、肺部和神经系统评估，以及治疗反应和不良反应监测。</p>',
    fertilityOrFamily:
      '<p>戈谢病为常染色体隐性遗传。明确 GBA1 变异后，父母、兄弟姐妹和伴侣可通过遗传咨询了解携带者检测、复发风险、产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>剧烈骨痛、不能负重、发热伴骨痛、严重出血、感染后精神或全身状态明显变差、脾区剧痛或贫血快速加重时，应尽快就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Gaucher Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
    },
    {
      name: 'MedlinePlus Genetics: Gaucher disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gaucher-disease/',
    },
  ],
  symptoms:
    '<p>可表现为肝脾肿大、贫血、血小板减少、疲乏、出血倾向、骨痛、骨危象、骨折或神经系统表现。</p>',
  diagnosis:
    '<p>评估包括葡萄糖脑苷脂酶活性、GBA1 基因检测、血常规、肝脾影像和骨骼/神经系统受累评估。</p>',
  treatment:
    '<p>管理包括特异性治疗评估、血液和骨骼并发症管理、器官随访和遗传咨询。</p>',
  prognosis:
    '<p>预后取决于类型、神经系统受累、骨骼并发症和治疗可及性；规范随访可降低并发症影响。</p>',
  sourceName: 'GeneReviews: Gaucher Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 330,
    name: 'gauchers-disease-journey.png',
    url: '/images/diseases/gauchers-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

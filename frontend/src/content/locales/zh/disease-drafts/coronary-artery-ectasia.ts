import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCoronaryArteryEctasia: DiseaseDraft = {
  ...entity(34, 'disease-coronary-artery-ectasia'),
  name: '冠状动脉扩张病',
  nameEn: 'Coronary Artery Ectasia',
  alias: '冠状动脉扩张症、CAE、冠脉扩张',
  slug: 'coronary-artery-ectasia',
  oneSentence:
    '冠状动脉扩张病是冠状动脉局部或弥漫性异常扩张，可与动脉粥样硬化、川崎病、血管炎或结缔组织病等因素有关。',
  plainName: '给心肌供血的冠状动脉变宽、血流可能变慢的情况',
  prevalence:
    '在冠状动脉造影或冠脉 CTA 中偶然发现并不少见，但作为中国罕见病目录病种需要结合病因、范围和临床风险评估。',
  quickLook: {
    whatItIs:
      '冠状动脉扩张指冠脉管腔比邻近正常节段明显变宽。扩张段血流可能变慢，部分患者会出现血栓、远端栓塞、心绞痛或急性冠脉综合征风险。',
    whoToSeeFirst:
      '成人胸痛、心绞痛样不适或冠脉影像提示扩张时，应到心血管内科/冠脉专科评估；儿童或青少年若有川崎病史，应由儿科心血管和心血管内科长期随访。',
    isGenetic:
      '多数不是单一遗传病。成人常与动脉粥样硬化相关，儿童和青少年需重视川崎病，部分患者需排查血管炎、结缔组织病或先天性冠脉异常。',
    hasTreatment:
      '有风险分层和随访管理方案，但合适方案取决于是否合并狭窄、血栓、川崎病后遗症或全身性疾病，需要心血管专科个体化判断。',
    commonDelayReason:
      '许多患者没有特异症状，或胸痛表现与普通冠心病重叠；如果只关注狭窄而不记录扩张范围、病因和血流风险，后续随访容易断档。',
  },
  patientJourney: {
    whenToSuspect: [
      '冠脉造影或冠脉 CTA 报告提示冠状动脉扩张、冠脉瘤样改变或血流缓慢。',
      '胸痛、胸闷、运动后不适或急性冠脉综合征，但狭窄程度不能完全解释症状。',
      '儿童或青少年有川崎病史，心脏超声或 CTA 提示冠脉扩张、瘤样改变或血栓风险。',
      '年轻患者出现冠脉扩张，同时有发热、皮疹、关节痛、口腔溃疡、血管炎或结缔组织病线索。',
      '既往支架、介入治疗或冠脉异常后出现局部扩张或瘤样改变。',
    ],
    commonWrongTurns: [
      '只按普通冠心病狭窄处理，没有询问扩张范围、血流缓慢和血栓风险。',
      '发现无症状扩张后没有建立影像随访和危险因素管理计划。',
      '忽略儿童期川崎病史或系统性血管炎线索。',
      '把冠状动脉扩张、冠状动脉瘤和先天性冠脉异常混为一谈。',
      '自行长期使用或停用抗血小板、抗凝、降脂等药物，没有由心血管医生评估出血和缺血风险。',
    ],
    firstDepartments: [
      '心血管内科',
      '冠脉介入/冠心病专科',
      '儿科心血管专科（川崎病相关儿童）',
      '风湿免疫科（疑似血管炎或结缔组织病时）',
      '心外科（复杂冠脉病变需要联合评估时）',
    ],
    diagnosisChecklist: [
      '保存冠脉 CTA、冠脉造影、心脏超声、心电图和心肌损伤标志物资料。',
      '请医生说明扩张是局灶还是弥漫、涉及哪支血管、是否合并狭窄或血栓。',
      '梳理川崎病、血管炎、结缔组织病、感染、介入治疗和家族心血管病史。',
      '评估血压、血脂、血糖、吸烟、炎症指标和其他动脉粥样硬化危险因素。',
      '确认复查影像方式和间隔，以及胸痛急诊处理路径。',
    ],
    testsToAskAbout: [
      '冠状动脉 CTA 或冠状动脉造影。',
      '心电图、心肌酶/肌钙蛋白和心脏超声。',
      '必要时血管内超声、功能学评估或心脏 MRI/MRA。',
      '血脂、血糖、血压和动脉粥样硬化危险因素评估。',
      'CRP、ESR、自身抗体等血管炎或结缔组织病筛查（医生认为需要时）。',
    ],
    questionsForDoctor: [
      '我的扩张涉及哪些冠脉？是弥漫性扩张、局灶扩张，还是冠状动脉瘤？',
      '是否合并冠脉狭窄、血栓、血流缓慢或心肌缺血证据？',
      '最可能的病因是什么？需要排查川崎病后遗症、血管炎或结缔组织病吗？',
      '我是否需要抗血小板、抗凝、降脂或其他药物？出血风险如何评估？',
      '胸痛到什么程度需要急诊？复查影像和随访频率如何安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>冠状动脉扩张病可无明显症状，也可表现为胸痛、胸闷、运动耐量下降、心绞痛样不适、心悸或急性冠脉综合征。症状常与普通冠心病重叠，部分风险来自扩张段血流缓慢、血栓形成或远端栓塞。儿童和青少年需要特别追问川崎病史。</p>',
    diagnosis:
      '<p>诊断通常依赖冠状动脉造影或冠脉 CTA，医生会判断扩张范围、血管直径、是否合并狭窄、血栓或冠脉瘤样改变。还需要结合年龄、危险因素、川崎病史、炎症线索、结缔组织病线索和既往介入史寻找病因。</p>',
    treatment:
      '<p>目前缺乏适用于所有患者的单一治疗方案。管理重点包括控制动脉粥样硬化危险因素、评估缺血和血栓风险、处理合并狭窄或急性冠脉综合征，并在必要时由介入、心外科、儿科心血管或风湿免疫团队联合判断。抗血小板或抗凝等药物应由医生权衡获益和出血风险。</p>',
    longTermCare:
      '<p>长期随访应关注胸痛变化、心肌缺血风险、影像中扩张范围变化、血栓或狭窄进展，以及血压、血脂、血糖和吸烟等可干预因素。川崎病相关患者需要按儿科心血管随访路径长期监测。</p>',
    fertilityOrFamily:
      '<p>冠状动脉扩张病通常不是简单遗传病。育龄期患者计划妊娠前应与心血管专科和产科讨论心脏负荷、用药安全、缺血和血栓风险。若怀疑结缔组织病或家族性血管病，应进一步遗传或风湿免疫评估。</p>',
    emergencySigns:
      '<p>胸痛持续不缓解、伴大汗恶心或气短，突发晕厥、严重心悸、疑似急性心肌梗死表现，或儿童川崎病后出现胸痛、精神差、面色苍白，应立即急诊并说明冠状动脉扩张或川崎病相关冠脉病变史。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委员会：第一批罕见病目录',
      type: 'policy',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
    },
    {
      name: 'Coronary Artery Ectasia: Review of the Non-Atherosclerotic Molecular and Pathophysiologic Concepts',
      type: 'review',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9103542/',
    },
  ],
  symptoms:
    '<p>可没有症状，也可出现胸痛、胸闷、心绞痛样不适、心悸或急性冠脉综合征表现。</p>',
  diagnosis:
    '<p>评估依赖冠脉 CTA 或冠脉造影，并结合是否合并狭窄、血栓、川崎病史、血管炎或动脉粥样硬化风险。</p>',
  treatment:
    '<p>管理包括危险因素控制、缺血和血栓风险评估、必要时药物、介入或外科联合评估，具体方案需心血管专科制定。</p>',
  prognosis:
    '<p>预后取决于是否合并冠心病、血栓或急性冠脉事件，以及病因和随访管理质量。</p>',
  sourceName: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 333,
    name: 'coronary-artery-ectasia-journey.png',
    url: '/images/diseases/coronary-artery-ectasia-journey.png',
  },
  tagSlugs: [],
};

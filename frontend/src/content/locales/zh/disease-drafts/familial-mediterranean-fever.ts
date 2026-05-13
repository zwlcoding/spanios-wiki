import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFamilialMediterraneanFever: DiseaseDraft = {
  ...entity(28, 'disease-familial-mediterranean-fever'),
  name: '家族性地中海热',
  nameEn: 'Familial Mediterranean Fever',
  alias: 'FMF、复发性多浆膜炎、MEFV 相关自炎症病',
  slug: 'familial-mediterranean-fever',
  oneSentence:
    '家族性地中海热是一种遗传性自炎症病，表现为反复短暂发热，并可伴腹痛、胸痛、关节痛、皮疹或淀粉样变风险。',
  plainName: '反复发热和浆膜炎发作的遗传性自炎症病',
  prevalence:
    '在地中海沿岸相关族群中更常见，包括部分犹太、亚美尼亚、阿拉伯、土耳其和北非人群；其他人群也可发生。',
  quickLook: {
    whatItIs:
      'FMF 与先天免疫系统过度炎症反应有关。发作常突然开始，持续一两天左右后缓解，但反复发作和长期炎症可带来肾脏淀粉样变等风险。',
    whoToSeeFirst:
      '反复不明原因发热，伴腹痛、胸痛、单关节炎、腿部红斑样皮疹或家族史时，可到风湿免疫科/儿科风湿免疫科评估。',
    isGenetic:
      '通常与 MEFV 基因相关，多为常染色体隐性遗传，也有显性或单个变异即可发病的情况。基因结果需结合临床发作特点解释。',
    hasTreatment:
      '有长期预防和发作管理方案，可降低发作和淀粉样变风险。具体用药、监测和特殊情况处理需由风湿免疫专科制定。',
    commonDelayReason:
      '腹痛发作像急腹症，关节痛像感染或关节炎，儿童可能只有反复发热；发作间歇期正常，容易多年找不到原因。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复短暂高热，伴腹痛、胸痛、关节痛或皮疹，发作间歇期基本正常。',
      '多次因急腹症样腹痛就诊，但检查或手术不能解释反复发作。',
      '大关节反复红肿痛，尤其下肢关节，常伴发热。',
      '足踝或小腿出现丹毒样红斑，伴发热或关节痛。',
      '家族中有 FMF、反复发热腹痛、肾淀粉样变或不明原因肾衰。',
    ],
    commonWrongTurns: [
      '每次腹痛都按胃肠炎、阑尾炎或妇科急腹症处理，没有识别周期性发作模式。',
      '只看基因检测阳性或阴性，忽略临床诊断标准和发作特征。',
      '症状缓解后停止随访，未监测尿蛋白或炎症指标。',
      '把反复发热简单归为免疫力低或感染。',
    ],
    firstDepartments: [
      '风湿免疫科',
      '儿科风湿免疫科',
      '肾内科（蛋白尿或淀粉样变风险时）',
      '遗传咨询门诊',
      '急诊科（急腹症样发作或严重胸痛时）',
    ],
    diagnosisChecklist: [
      '记录每次发作的日期、持续时间、体温、腹痛/胸痛/关节痛/皮疹部位和是否自行缓解。',
      '整理族源背景、家族史、既往手术或反复急诊记录。',
      '带上发作期和间歇期的炎症指标、血常规、尿检和肾功能结果。',
      '询问是否符合 Tel Hashomer 等临床标准，是否需要 MEFV 基因检测。',
      '长期随访时关注尿蛋白、肾功能和淀粉样变风险。',
    ],
    testsToAskAbout: [
      '发作期 CRP/ESR、血常规、血清淀粉样蛋白 A（可及时）。',
      '尿常规、尿蛋白和肾功能。',
      'MEFV 基因检测及变异解释。',
      '腹痛、胸痛或关节痛发作时的必要影像和鉴别诊断。',
      '与其他周期性发热/自炎症综合征的鉴别。',
    ],
    questionsForDoctor: [
      '我的发作模式是否符合 FMF？还需要排除哪些疾病？',
      'MEFV 结果怎么解释？只有一个变异是否有意义？',
      '长期预防治疗的目标是什么？如何监测效果和副作用？',
      '什么时候需要急诊，而不是等发作自行缓解？',
      '家人是否需要检查？备孕前需要遗传咨询吗？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FMF 常表现为反复短暂发热，伴腹膜炎样腹痛、胸膜炎样胸痛、关节炎或关节痛、丹毒样红斑和肌痛。发作间歇期可能完全正常。未经充分控制的长期炎症可增加 AA 淀粉样变和肾脏受累风险。</p>',
    diagnosis:
      '<p>诊断主要依赖临床发作模式、家族和族源背景、炎症指标、治疗反应和 MEFV 基因检测。GeneReviews 指出，即使基因检测未发现双等位致病变异，也不能完全排除 FMF；医生需要与其他周期性发热综合征、感染、炎症性肠病和急腹症鉴别。</p>',
    treatment:
      '<p>长期管理目标是减少发作、控制炎症并预防淀粉样变。具体药物、剂量、妊娠期安排和耐药/不耐受处理需由风湿免疫专科制定，患者不要自行停药或调整。</p>',
    longTermCare:
      '<p>长期随访重点包括发作频率、炎症指标、尿蛋白、肾功能、治疗依从性和副作用监测。患者可保存发作日记和检查结果，帮助医生判断是否控制充分。</p>',
    fertilityOrFamily:
      '<p>FMF 多为常染色体隐性遗传，但也存在更复杂的遗传表现。明确 MEFV 变异后，患者和伴侣可通过遗传咨询了解复发风险、携带者检测和生育选择。</p>',
    emergencySigns:
      '<p>剧烈持续腹痛、胸痛、呼吸困难、意识改变、不能进食饮水、疑似感染或与既往发作模式明显不同的症状，应及时急诊，避免把所有腹痛都归因于 FMF。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Familial Mediterranean Fever',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
    },
    {
      name: 'MedlinePlus Genetics: Familial Mediterranean fever',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-mediterranean-fever/',
    },
    {
      name: 'Orphanet: Familial Mediterranean fever',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/342',
    },
  ],
  symptoms:
    '<p>反复短暂发热，可伴腹痛、胸痛、关节痛/关节炎、丹毒样红斑和肌痛，发作间歇期常较正常。</p>',
  diagnosis:
    '<p>评估包括临床发作模式、炎症指标、尿蛋白/肾功能、MEFV 基因检测和与其他周期性发热疾病鉴别。</p>',
  treatment:
    '<p>长期预防和炎症控制需风湿免疫专科制定，目标是减少发作并预防淀粉样变和肾损害。</p>',
  prognosis:
    '<p>规范管理通常可明显降低发作和淀粉样变风险；延误诊断或控制不足会增加肾脏并发症风险。</p>',
  sourceName: 'GeneReviews: Familial Mediterranean Fever',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 327,
    name: 'familial-mediterranean-fever-journey.png',
    url: '/images/diseases/familial-mediterranean-fever-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

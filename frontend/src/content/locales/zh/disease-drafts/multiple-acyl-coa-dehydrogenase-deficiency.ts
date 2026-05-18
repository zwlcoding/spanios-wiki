import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleAcylCoADehydrogenaseDeficiency: DiseaseDraft = {
  ...entity(5021, 'disease-multiple-acyl-coa-dehydrogenase-deficiency'),
  name: '多种酰基辅酶A脱氢酶缺乏症',
  nameEn: 'Multiple Acyl-CoA Dehydrogenase Deficiency',
  alias: 'MADD、GAII、戊二酸尿症II型',
  icd10Code: 'E71.3',
  slug: 'multiple-acyl-coa-dehydrogenase-deficiency',
  oneSentence:
    '多种酰基辅酶A脱氢酶缺乏症（MADD）是一组常染色体隐性遗传的脂肪酸氧化障碍，因电子转移黄素蛋白（ETF）或其脱氢酶（ETFDH）缺陷导致多种脂肪酸和氨基酸无法正常分解，临床表型从新生儿期致死到成人期肌病不等。',
  plainName: '身体没法同时“烧”脂肪和蛋白质的一种严重代谢病',
  prevalence:
    '新生儿型发病率约 1/100,000-1/250,000；晚发型更常见，尤其在中国和东亚人群中 ETFDH 相关晚发型 MADD 报道较多。',
  searchIntents: [
    'MADD 新生儿筛查',
    '多种酰基辅酶A脱氢酶缺乏症 症状',
    '戊二酸尿症II型 治疗',
    'MADD 核黄素 治疗',
    '脂肪酸氧化障碍 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是一组脂肪酸氧化障碍疾病，由于电子转移黄素蛋白（ETF）或其脱氢酶（ETFDH）功能缺陷，身体无法分解多种链长的脂肪酸和部分氨基酸，导致代谢危机。分为新生儿型（严重、常致死）和晚发型（以肌病为主）。',
    whoToSeeFirst:
      '新生儿筛查阳性或疑似病例应尽快就诊新生儿科或遗传代谢科；晚发型患者就诊神经内科或遗传代谢科。出现嗜睡、呕吐、呼吸困难、肌无力加重时应立即急诊。',
    isGenetic:
      '常染色体隐性遗传。致病基因为 ETFA、ETFB 或 ETFDH。父母通常为携带者，每次怀孕再发风险约25%。可进行产前诊断和携带者筛查。',
    hasTreatment:
      '新生儿型预后差，需要积极代谢支持；晚发型（尤其是 ETFDH 相关）对高剂量核黄素（维生素B2）反应良好，可显著改善症状。急性期需住院治疗，长期需饮食管理和避免代谢应激。',
    commonDelayReason:
      '新生儿型症状（嗜睡、呕吐、酸中毒）被误认为普通感染或败血症；晚发型肌无力、运动不耐受被误认为肌炎或心因性疾病；未及时做新生儿筛查或血尿代谢检查。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿期出现嗜睡、拒奶、呕吐、呼吸急促、代谢性酸中毒、低血糖、高氨血症。',
      '婴儿或儿童期反复出现 Reye 综合征样发作（呕吐、意识障碍、肝大）。',
      '儿童或成人出现进行性肌无力、运动不耐受、肌痛，尤其伴有血脂异常或肝功能异常。',
      '尿液有特殊气味或新生儿筛查发现多种酰基肉碱升高。',
      '兄弟姐妹中有类似代谢病史或不明原因新生儿死亡。',
    ],
    commonWrongTurns: [
      '新生儿期代谢危象被当作败血症或普通感染处理，未做血气分析和血尿代谢筛查。',
      '晚发型肌无力被误诊为炎性肌病、线粒体肌病或功能性肌无力。',
      '漏诊 ETFDH 相关可逆类型，未尝试核黄素治疗。',
      '家长自行限制饮食导致营养不良，未在专业营养师指导下调整。',
      '未告知急诊医生孩子的代谢病史，导致禁食时间过长或使用禁忌药物。',
    ],
    firstDepartments: [
      '新生儿科 / 儿科遗传代谢科',
      '神经内科（晚发型肌病为主）',
      '急诊科（急性代谢危象时）',
      '遗传咨询科',
      '营养科（饮食管理指导）',
    ],
    diagnosisChecklist: [
      '携带新生儿筛查报告（多种酰基肉碱升高）。',
      '记录发作时的症状、持续时间、诱因（感染、饥饿、手术）。',
      '整理既往血气、血糖、血氨、肝肾功能检查结果。',
      '询问医生是否需要做 ETFA、ETFB、ETFDH 基因检测。',
    ],
    testsToAskAbout: [
      '血液酰基肉碱谱（多种链长酰基肉碱升高，尤其是 C4-C18）。',
      '尿有机酸分析（戊二酸、乙基丙二酸、己二酸、辛二酸、癸二酸升高）。',
      '血气分析、血糖、血氨、肝功能、CK、肌红蛋白。',
      'ETFA、ETFB、ETFDH 基因检测。',
      '肌肉活检（部分晚发型患者可见脂质沉积）。',
      '核黄素反应性试验（在医生指导下进行）。',
    ],
    questionsForDoctor: [
      '我的孩子属于哪一型？是新生儿型还是晚发型？',
      '是否可能为 ETFDH 相关核黄素反应型？何时开始试治疗？',
      '急性代谢危象时应该如何紧急处理？家里需要准备什么？',
      '日常饮食中蛋白质和脂肪摄入量应该如何控制？',
      '以后怀孕前需要做哪些遗传咨询和产前诊断准备？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MADD 临床表现谱广泛。新生儿型（I/II 型）在生后数小时至数天内发病，表现为严重代谢性酸中毒、低血糖、高氨血症、肝大、肌张力低下，可伴先天畸形（多囊肾、尿道下裂、面部畸形、脑皮质异位）。多数新生儿型患儿在新生儿期死亡。</p><p>晚发型（III 型，最常见）可在婴儿期至成年期发病，主要表现近端肌无力、运动不耐受、肌痛，可伴横纹肌溶解和急性肾损伤。部分患者出现感觉神经病、脂肪肝、心律失常。中国人群晚发型 MADD 多与 ETFDH 基因突变相关，且对核黄素治疗反应良好。</p>',
    diagnosis:
      '<p>新生儿筛查通过串联质谱检测血酰基肉碱谱发现多种酰基肉碱升高。确诊依赖尿有机酸分析（戊二酸、乙基丙二酸、多种二羧酸升高）和 ETFA/ETFB/ETFDH 基因检测。</p><p>晚发型患者需与线粒体肌病、脂质沉积性肌病、其他脂肪酸氧化障碍鉴别。肌肉活检可见脂质沉积和线粒体异常。ETFDH 相关晚发型在中国和东亚人群中高发，基因检测时应优先考虑 ETFDH。</p>',
    treatment:
      '<p>新生儿型需要积极代谢支持：纠正酸中毒和低血糖、限制蛋白质摄入、提供高碳水化合物、静脉葡萄糖输注。部分患者需血液透析清除毒性代谢物。预后通常较差。</p><p>晚发型（尤其是 ETFDH 相关）应尽早试用高剂量核黄素（维生素B2，通常 100-400 mg/天），多数患者在数周至数月内症状明显改善。同时需避免饥饿、感染等代谢应激，适当限制脂肪和蛋白质摄入，补充肉碱（需医生指导）。急性发作期需住院治疗。</p>',
    longTermCare:
      '<p>长期随访包括：定期监测生长发育、营养状态、肝肾功能、心肌酶、CK；评估肌力和运动能力；监测心电图和超声心动图（排除心肌病）。</p><p>日常生活管理：避免长时间空腹（婴幼儿尤其注意夜间喂养），感染发热时增加碳水化合物摄入，避免剧烈运动诱发横纹肌溶解。携带急救卡和疾病说明，就医时主动告知医生代谢病史。遗传咨询和家系筛查非常重要。</p>',
    fertilityOrFamily:
      '<p>MADD 为常染色体隐性遗传。确诊后应对父母进行携带者检测，并对家族成员进行筛查。再次生育的再发风险为 25%。可通过产前基因检测（羊水或绒毛膜）或胚胎植入前遗传学检测（PGT）降低风险。</p>',
    emergencySigns:
      '<p>以下情况需立即急诊并告知医生 MADD 诊断：持续呕吐伴拒食、嗜睡或意识改变、呼吸急促或深大呼吸（酸中毒表现）、严重肌无力或肌肉疼痛伴尿色加深（横纹肌溶解）、抽搐或昏迷。</p><p>如患者清醒但无法进食，可先口服含糖饮料，同时尽快就医。急诊处理重点是纠正代谢紊乱、提供充足葡萄糖、避免长时间禁食。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Multiple Acyl-CoA Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK558236/',
    },
    {
      name: 'Orphanet: Multiple acyl-CoA dehydrogenase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/26791',
    },
    {
      name: 'NORD: Multiple Acyl-CoA Dehydrogenase Deficiency',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/multiple-acyl-coa-dehydrogenase-deficiency/',
    },
  ],
  symptoms:
    '<p>新生儿型表现为严重代谢性酸中毒、低血糖、高氨血症、肝大；晚发型以肌无力、运动不耐受、肌痛为主，可伴横纹肌溶解。</p>',
  diagnosis:
    '<p>血酰基肉碱谱和尿有机酸分析提示多种脂肪酸氧化障碍；ETFA、ETFB 或 ETFDH 基因检测确诊。</p>',
  treatment:
    '<p>新生儿型需积极代谢支持；晚发型（尤其 ETFDH 相关）对高剂量核黄素治疗反应良好，同时需避免代谢应激。</p>',
  prognosis:
    '<p>新生儿型预后差；晚发型经核黄素和饮食管理后多数可显著改善，但需终身随访。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK558236/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3521,
    name: 'multiple-acyl-coa-dehydrogenase-deficiency-journey.png',
    url: '/images/diseases/multiple-acyl-coa-dehydrogenase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

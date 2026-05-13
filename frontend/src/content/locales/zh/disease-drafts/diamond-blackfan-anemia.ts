import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseDiamondBlackfanAnemia: DiseaseDraft = {
  ...entity(25, 'disease-diamond-blackfan-anemia'),
  name: '先天性纯红细胞再生障碍性贫血',
  nameEn: 'Diamond-Blackfan Anemia',
  alias: 'Diamond-Blackfan 贫血、DBA、先天性红细胞生成不良性贫血',
  slug: 'diamond-blackfan-anemia',
  oneSentence:
    'Diamond-Blackfan 贫血是一种先天性骨髓红细胞生成障碍，常在婴儿期出现贫血，并可伴生长迟缓、先天畸形和肿瘤风险增加。',
  plainName: '骨髓从小不能充分制造红细胞的遗传性贫血',
  prevalence:
    'MedlinePlus 描述其约影响每百万新生儿 5 至 7 人，GeneReviews 也将其列为罕见的先天性红细胞生成障碍。',
  quickLook: {
    whatItIs:
      '骨髓负责制造血细胞。DBA 主要影响红细胞生成，导致婴儿或儿童出现贫血；部分患者还会有拇指、面部、心脏、肾脏或生长方面的异常。',
    whoToSeeFirst:
      '婴儿期出现面色苍白、乏力、喂养差、贫血且网织红细胞低时，应到儿科血液科/血液科评估；严重贫血、心率快或呼吸困难应及时急诊。',
    isGenetic:
      '多与核糖体蛋白相关基因或其他造血相关基因有关，常见为常染色体显性遗传，也有新发变异和少数其他遗传方式。',
    hasTreatment:
      '有长期血液专科管理方案，包括贫血支持、药物、输血、铁负荷管理和部分情况下的造血干细胞移植评估。具体方案需由血液科制定。',
    commonDelayReason:
      '婴儿贫血容易先被当作营养性贫血或感染后贫血；如果没有看网织红细胞、骨髓红系生成和先天异常线索，诊断会延后。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生后第一年内出现明显贫血、面色苍白、乏力、喂养差或生长缓慢。',
      '血红蛋白低且网织红细胞不高，提示骨髓红细胞生成不足。',
      '贫血伴拇指/上肢异常、颅面特征、心脏或肾脏结构异常、身材矮小。',
      '家族中有人有幼年贫血、输血史、骨髓衰竭或类似诊断。',
      '常规补铁或营养处理不能解释贫血程度。',
    ],
    commonWrongTurns: [
      '只按缺铁性贫血补铁，没有检查网织红细胞和红细胞生成情况。',
      '把先天畸形和贫血分开处理，未考虑同一综合征。',
      '长期输血后没有系统监测铁负荷和器官影响。',
      '忽略 DBA 患者长期肿瘤风险和骨髓衰竭风险随访。',
    ],
    firstDepartments: [
      '儿科血液科',
      '血液科',
      '医学遗传科/遗传咨询门诊',
      '心脏、肾脏、骨科或康复相关专科（根据伴随畸形转诊）',
    ],
    diagnosisChecklist: [
      '保存血常规、网织红细胞、红细胞指标、胎儿血红蛋白、红细胞 ADA、骨髓检查等资料。',
      '记录贫血发现年龄、输血次数、药物反应、感染史和生长发育情况。',
      '评估是否有拇指/上肢、颅面、心脏、肾脏、生殖泌尿或眼部异常。',
      '询问是否需要 DBA 相关基因 panel 或外显子组检测。',
      '长期随访时确认铁负荷、肿瘤风险和骨髓功能监测计划。',
    ],
    testsToAskAbout: [
      '血常规、网织红细胞和外周血涂片。',
      '红细胞 ADA、胎儿血红蛋白和贫血鉴别相关检查。',
      '骨髓检查，评估红系前体细胞情况。',
      'DBA 相关基因检测。',
      '心脏、肾脏、骨骼和生长发育评估。',
      '长期输血者的铁负荷和器官功能监测。',
    ],
    questionsForDoctor: [
      '贫血更像 DBA 还是其他骨髓衰竭/营养性贫血？还需要哪些检查？',
      '目前治疗目标是什么？怎样判断药物、输血或其他方案是否适合？',
      '如果需要长期输血，如何监测和处理铁负荷？',
      '需要筛查哪些先天结构异常和长期肿瘤风险？',
      '家属是否需要基因检测？未来生育计划应如何咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>DBA 通常在出生后第一年出现贫血，可表现为面色苍白、乏力、喂养差、心率快或生长缓慢。约一部分患者伴有先天异常，如拇指或上肢异常、颅面特征、心脏或肾脏结构异常、眼部问题或身材矮小。表现轻重差异很大，部分非经典患者症状较轻或较晚发现。</p>',
    diagnosis:
      '<p>诊断需要结合婴儿期起病的贫血、网织红细胞低、骨髓红系生成减少、红细胞 ADA 或胎儿血红蛋白等辅助线索，并排除感染、营养缺乏、其他骨髓衰竭综合征和获得性纯红细胞再障。基因检测有助于明确分型和家族风险，但阴性不一定完全排除。</p>',
    treatment:
      '<p>治疗由血液科根据贫血严重程度、年龄、药物反应、输血需求和并发症风险制定，可能包括药物治疗、红细胞输注、铁负荷管理和造血干细胞移植评估。不同方案收益和风险差异很大，不能自行按网络资料调整。</p>',
    longTermCare:
      '<p>长期随访重点包括血红蛋白、输血需求、铁负荷、肝心内分泌功能、生长发育、先天结构异常、骨髓功能和肿瘤风险。建议保存基因报告、输血记录、铁负荷检查和治疗反应记录，便于长期管理。</p>',
    fertilityOrFamily:
      '<p>DBA 常见常染色体显性遗传，也可由新发变异导致。明确致病变异后，患者和家属可通过遗传咨询了解亲属检测、复发风险、产前诊断或胚胎植入前遗传学检测等选择。有妊娠计划的患者还需要血液科和产科共同评估贫血和治疗安全。</p>',
    emergencySigns:
      '<p>明显气促、心悸、晕厥、精神差、严重感染发热、出血不止，或已知贫血快速加重时，应及时就医。长期输血患者若出现胸闷、心功能异常、腹痛或内分泌异常，也应尽快复诊评估铁负荷相关问题。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: DBA Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
    },
    {
      name: 'MedlinePlus Genetics: Diamond-Blackfan anemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/diamond-blackfan-anemia',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Diamond-Blackfan Anemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK545302/',
    },
  ],
  symptoms:
    '<p>常在婴儿期出现贫血、苍白、乏力、喂养差或生长缓慢，可伴拇指、颅面、心肾等先天异常。</p>',
  diagnosis:
    '<p>评估包括血常规、网织红细胞、骨髓红系生成、红细胞 ADA/胎儿血红蛋白、先天异常筛查和 DBA 相关基因检测。</p>',
  treatment:
    '<p>管理需血液科个体化制定，可能包括药物、输血、铁负荷管理和部分患者的造血干细胞移植评估。</p>',
  prognosis:
    '<p>预后取决于贫血控制、治疗并发症、铁负荷、先天异常和长期肿瘤/骨髓风险监测。</p>',
  sourceName: 'GeneReviews: DBA Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 324,
    name: 'diamond-blackfan-anemia-journey.png',
    url: '/images/diseases/diamond-blackfan-anemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

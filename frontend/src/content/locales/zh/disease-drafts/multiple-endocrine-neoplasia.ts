import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultipleEndocrineNeoplasia: DiseaseDraft = {
  ...entity(2051, 'disease-multiple-endocrine-neoplasia'),
  name: '多发性内分泌腺瘤病',
  nameEn: 'Multiple endocrine neoplasia',
  alias: 'MEN；多发性内分泌肿瘤综合征；第二批罕见病目录第 51 项',
  slug: 'multiple-endocrine-neoplasia',
  oneSentence:
    '多发性内分泌腺瘤病是一组遗传性内分泌肿瘤综合征，同一个人可先后或同时出现两个以上内分泌腺体肿瘤或增生。',
  plainName: '一种会让多个内分泌腺体反复长肿瘤的遗传病',
  prevalence:
    '已纳入中国第二批罕见病目录；MEN1 和 MEN2 国际估计均约数万分之一，MEN4 更少见。',
  quickLook: {
    whatItIs:
      'MEN 包括 MEN1、MEN2 和 MEN4 等类型。MEN1 常累及甲状旁腺、垂体、胰腺或胃肠神经内分泌肿瘤；MEN2 与甲状腺髓样癌、嗜铬细胞瘤和部分甲状旁腺问题相关。',
    whoToSeeFirst:
      '发现多个内分泌肿瘤、高钙血症、甲状腺髓样癌或嗜铬细胞瘤时，应到内分泌科、内分泌外科或遗传肿瘤门诊评估。',
    isGenetic:
      'MEN1 多与 MEN1 基因有关，MEN2 与 RET 基因有关，MEN4 与 CDKN1B 有关，通常按常染色体显性方式在家族中传递。',
    hasTreatment:
      '治疗不是一次手术就结束，而是按基因类型和受累腺体长期筛查、处理激素异常、手术或药物治疗肿瘤，并筛查亲属。',
    commonDelayReason:
      '患者常先因肾结石、胃溃疡、低血糖、甲状腺结节或高血压分别就诊，如果没有把多个内分泌问题联系起来，容易漏诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '本人在年轻年龄出现原发性甲状旁腺功能亢进、高钙血症、反复肾结石或骨质疏松。',
      '同时或先后出现垂体瘤、胰腺/胃肠神经内分泌肿瘤、甲状腺髓样癌、嗜铬细胞瘤或多发内分泌结节。',
      '家族中多人有甲状腺髓样癌、嗜铬细胞瘤、高钙血症、垂体瘤、胰腺神经内分泌肿瘤或早发内分泌手术史。',
      '儿童或青年发现 RET 相关甲状腺髓样癌家族史，应尽早遗传咨询。',
    ],
    commonWrongTurns: [
      '只治疗单个腺体肿瘤，没有追问家族史和其他内分泌腺体筛查。',
      '在嗜铬细胞瘤没有排除或控制前贸然安排其他手术，增加麻醉和血压风险。',
      '家族中已知致病变异，但亲属没有做针对性检测和年龄匹配筛查。',
    ],
    firstDepartments: [
      '内分泌科',
      '内分泌外科',
      '医学遗传科或遗传肿瘤门诊',
      '核医学/肿瘤多学科门诊',
    ],
    diagnosisChecklist: [
      '整理所有内分泌相关化验：血钙、甲状旁腺激素、降钙素、儿茶酚胺代谢物、泌乳素、胃泌素、胰岛素等。',
      '带齐甲状腺、甲状旁腺、垂体、胰腺、肾上腺和胃肠影像报告及病理结果。',
      '画出三代家系图，标注亲属的肿瘤、内分泌手术、肾结石、高血压危象和死亡年龄。',
      '如已做基因检测，带原始报告并确认变异分类。',
    ],
    testsToAskAbout: [
      'MEN1、RET、CDKN1B 等基因检测，并按结果制定亲属筛查。',
      'MEN1 相关的血钙/PTH、垂体激素、胰胃肠神经内分泌肿瘤标志物和影像随访。',
      'MEN2 相关的降钙素、CEA、甲状腺评估、嗜铬细胞瘤筛查和甲状旁腺评估。',
      '手术前是否必须先排查或控制嗜铬细胞瘤。',
    ],
    questionsForDoctor: [
      '我更符合 MEN1、MEN2 还是 MEN4？目前证据来自临床表现还是基因结果？',
      '哪些腺体已经受累，哪些需要从现在开始定期筛查？',
      '如果发现 RET 变异，甲状腺手术或亲属预防性处理的时间如何决定？',
      '家属应该从几岁开始检测和随访？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MEN 的表现取决于类型和受累腺体。MEN1 常见原发性甲状旁腺功能亢进，可导致高钙血症、肾结石、骨痛、骨质疏松、乏力、恶心或便秘；也可出现垂体瘤相关头痛、视野问题、月经或性功能变化，以及胰腺/胃肠神经内分泌肿瘤导致的低血糖、顽固胃溃疡或腹泻。</p><p>MEN2 的核心风险是甲状腺髓样癌，也可有嗜铬细胞瘤导致阵发性高血压、头痛、心悸和出汗，MEN2A 还可能有甲状旁腺问题。MEN2B 可有黏膜神经瘤、特殊体型和早发侵袭性甲状腺髓样癌。</p>',
    diagnosis:
      '<p>诊断需要把肿瘤组合、激素水平、影像、病理和家族史放在一起判断。一个人出现两个以上 MEN 相关内分泌肿瘤，或一个相关肿瘤加明确家族史，应主动考虑 MEN。</p><p>基因检测对分型和亲属筛查非常关键：MEN1、RET、CDKN1B 分别对应主要类型。RET 变异的具体位点会影响甲状腺髓样癌风险和手术时机。即使暂时没有症状，携带明确致病变异的人也需要按类型筛查。</p>',
    treatment:
      '<p>治疗按类型和风险排序。MEN2 中嗜铬细胞瘤需要在其他手术前识别并处理，以降低麻醉风险；RET 相关甲状腺髓样癌可能需要早期或预防性甲状腺手术。MEN1 的甲状旁腺、垂体和胰胃肠神经内分泌肿瘤治疗包括手术、药物、内镜/介入、核医学和肿瘤系统治疗等。</p><p>由于肿瘤可多灶、复发或多年后出现新病灶，治疗目标常是控制激素过多、降低恶性风险、保护器官功能和减少并发症，而不是一次性“治完”。</p>',
    longTermCare:
      '<p>长期随访应由内分泌、外科、遗传、肿瘤、影像、核医学等团队协作。复查项目取决于基因类型和既往病灶，通常包括激素和肿瘤标志物、颈部超声、垂体 MRI、胰腺/胃肠或肾上腺影像等。</p><p>患者应保存基因报告、手术记录、病理和每次激素结果。手术、妊娠或侵入性操作前，要主动告知 MEN 诊断和是否有嗜铬细胞瘤风险。</p>',
    fertilityOrFamily:
      '<p>MEN 多为常染色体显性遗传，携带者每次妊娠将致病变异传给子女的概率通常为 50%。确诊后建议一级亲属接受遗传咨询和针对性检测；儿童是否需要早筛，取决于基因类型和家族变异。</p>',
    emergencySigns:
      '<p>阵发性严重头痛、心悸、大汗、血压很高，需警惕嗜铬细胞瘤危象；严重低血糖、意识改变、持续呕吐脱水、严重高钙症状、术后手足抽搐或呼吸困难，应急诊处理并说明 MEN 背景。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Multiple endocrine neoplasia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/multiple-endocrine-neoplasia/',
    },
    {
      name: 'NIDDK: Multiple Endocrine Neoplasia Type 1',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/endocrine-diseases/multiple-endocrine-neoplasia-type-1',
    },
  ],
  symptoms:
    '<p>可表现为高钙血症、肾结石、垂体激素异常、胰胃肠神经内分泌肿瘤症状、甲状腺髓样癌、嗜铬细胞瘤相关高血压发作等。</p>',
  diagnosis:
    '<p>诊断结合多发内分泌肿瘤组合、激素和影像检查、病理、家族史，以及 MEN1、RET、CDKN1B 等基因检测。</p>',
  treatment:
    '<p>治疗包括长期筛查、手术、激素和肿瘤药物、核医学或系统治疗；MEN2 手术前尤其要先识别和处理嗜铬细胞瘤风险。</p>',
  prognosis:
    '<p>预后取决于 MEN 类型、肿瘤恶性风险、发现年龄和随访质量；基因分型和亲属筛查能显著降低可预防风险。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 405,
    name: 'multiple-endocrine-neoplasia-journey.png',
    url: '/images/diseases/multiple-endocrine-neoplasia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

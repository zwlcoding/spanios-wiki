import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGitelmanSyndrome: DiseaseDraft = {
  ...entity(35, 'disease-gitelman-syndrome'),
  name: 'Gitelman 综合征',
  nameEn: 'Gitelman Syndrome',
  alias: '吉特曼综合征、家族性低钾低镁血症、GS',
  slug: 'gitelman-syndrome',
  oneSentence:
    'Gitelman 综合征是一种遗传性肾小管盐丢失病，常表现为低钾、低镁、代谢性碱中毒、低尿钙和乏力或肌肉痉挛。',
  plainName: '肾脏留不住部分盐和电解质导致低钾低镁的遗传病',
  prevalence:
    'MedlinePlus Genetics 估计全球约每 40,000 人 1 例；症状差异很大，许多人在青少年或成年后因低钾被发现。',
  quickLook: {
    whatItIs:
      '肾小管负责回收钠、氯、钾、镁等电解质。Gitelman 综合征多与 SLC12A3 基因有关，会造成长期电解质失衡，症状可能轻微也可能明显影响生活。',
    whoToSeeFirst:
      '反复低钾、低镁、肌肉抽筋、乏力、心悸、手足麻木或低血压线索时，可到肾内科、儿科肾脏科或内分泌/电解质门诊评估。',
    isGenetic:
      '通常为常染色体隐性遗传，多与 SLC12A3 双等位致病变异有关，少数表型相近病例与其他盐丢失肾小管病重叠。',
    hasTreatment:
      '有长期电解质管理和随访方案。补钾、补镁或其他药物是否适合，需要医生根据化验、症状、心电图和肾功能判断。',
    commonDelayReason:
      '乏力、抽筋、头晕、心悸很容易被当作劳累、焦虑或缺钙；若只补一次钾而不追查尿钾、血镁和酸碱状态，容易反复。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复低钾，尤其伴低镁、代谢性碱中毒和尿钙偏低。',
      '长期乏力、肌肉痉挛、手足麻木、抽搐样发作、心悸或运动耐量差。',
      '血压偏低、盐 craving、夜尿或多尿，同时化验提示电解质异常。',
      '低钾原因不明，否认长期利尿剂、泻药或反复呕吐。',
      '家族中有低钾、低镁、类似肾小管病或近亲婚配史。',
    ],
    commonWrongTurns: [
      '只按普通低钾补一次，未检查尿钾、尿氯、血镁、血气或肾素醛固酮。',
      '把肌肉抽筋简单归因于缺钙，忽略低镁和低钾。',
      '长期按焦虑、疲劳或心律失常处理，没有追查电解质根因。',
      '未与 Bartter 综合征、利尿剂使用、呕吐、泻药或内分泌性低钾鉴别。',
    ],
    firstDepartments: [
      '肾内科',
      '儿科肾脏科',
      '内分泌科/电解质门诊',
      '心内科（心悸、心律风险评估时）',
      '医学遗传科/遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '保存多次血钾、血镁、血氯、碳酸氢根/血气、肌酐和尿电解质结果。',
      '记录发作时症状、诱因、补液或补电解质后变化。',
      '向医生说明是否使用利尿剂、泻药、甘草制品，是否反复呕吐或腹泻。',
      '询问是否需要 SLC12A3、CLCNKB 等基因检测。',
      '带上心电图、心悸发作记录和家族低钾史。',
    ],
    testsToAskAbout: [
      '血钾、血镁、血钙、血氯、碳酸氢根或血气分析。',
      '尿钾、尿氯、尿钙和尿镁等肾性丢失评估。',
      '肾素、醛固酮和血压评估。',
      '心电图和必要时动态心电图。',
      '盐丢失肾小管病相关基因检测。',
    ],
    questionsForDoctor: [
      '我的低钾低镁是否符合 Gitelman 综合征？还需要排除哪些原因？',
      '目标电解质范围和复查频率应如何设定？',
      '我适合哪些补充或药物方案？胃肠不耐受时怎么办？',
      '哪些症状提示心律风险或严重低钾，需要急诊？',
      '家属和未来生育计划是否需要遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Gitelman 综合征表现差异很大。常见线索包括乏力、肌肉痉挛、手足麻木或刺痛、头晕、低血压、盐 craving、心悸、运动耐量下降、夜尿或多尿。化验常提示低钾、低镁、代谢性碱中毒和低尿钙。少数患者可出现明显抽搐、低钾性麻痹或心律风险。</p>',
    diagnosis:
      '<p>诊断需要把血液电解质、酸碱状态、尿电解质、血压、肾素醛固酮和用药史放在一起判断。典型表现为肾性钾丢失、低镁、低尿钙和代谢性碱中毒。基因检测发现相关双等位致病变异可支持诊断，同时医生会排除 Bartter 综合征、利尿剂、呕吐、泻药和内分泌性低钾等原因。</p>',
    treatment:
      '<p>管理以长期补充和监测电解质、减少症状和心律风险为主。补钾、补镁、保钾相关药物或其他方案需要由医生根据化验、症状、血压、肾功能和耐受性调整，患者不应自行大剂量加药或停药。</p>',
    longTermCare:
      '<p>长期随访关注电解质稳定性、心电图变化、肾功能、血压、生活质量、妊娠计划和药物耐受性。患者可保存一份“低钾低镁病史摘要”，急诊或新增药物时主动告知医生。</p>',
    fertilityOrFamily:
      '<p>本病通常为常染色体隐性遗传。明确基因结果后，父母、兄弟姐妹和有生育计划的家庭可通过遗传咨询了解携带者检测、复发风险和产前/胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>严重乏力不能行走、呼吸费力、明显心悸或晕厥、抽搐、低钾快速下降、持续呕吐腹泻或无法口服补充时，应尽快急诊，并说明疑似或确诊 Gitelman 综合征。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Gitelman syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Gitelman Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459304/',
    },
    {
      name: 'Orphanet Journal of Rare Diseases: Gitelman syndrome',
      type: 'review',
      url: 'https://ojrd.biomedcentral.com/articles/10.1186/1750-1172-3-22',
    },
  ],
  symptoms:
    '<p>常见线索包括低钾、低镁、乏力、肌肉痉挛、手足麻木、心悸、低血压和盐 craving。</p>',
  diagnosis:
    '<p>评估包括血尿电解质、酸碱状态、肾素醛固酮、用药史、心电图和相关基因检测。</p>',
  treatment:
    '<p>管理以电解质补充、症状控制、心律风险评估和长期肾内科随访为核心，具体方案需个体化。</p>',
  prognosis:
    '<p>多数患者经长期管理可稳定生活，但症状、心律风险、妊娠和药物耐受性仍需随访。</p>',
  sourceName: 'MedlinePlus Genetics: Gitelman syndrome',
  sourceUrl: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 334,
    name: 'gitelman-syndrome-journey.png',
    url: '/images/diseases/gitelman-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

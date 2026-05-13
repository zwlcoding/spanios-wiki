import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryHypomagnesemia: DiseaseDraft = {
  ...entity(43, 'disease-hereditary-hypomagnesemia'),
  name: '遗传性低镁血症',
  nameEn: 'Hereditary Hypomagnesemia',
  alias: '家族性低镁血症、原发性低镁血症、遗传性镁代谢障碍',
  slug: 'hereditary-hypomagnesemia',
  oneSentence:
    '遗传性低镁血症是一组影响肠道吸收或肾脏保留镁的遗传病，可导致低镁、低钙、抽搐、心律风险或肾钙化等不同表现。',
  plainName: '身体吸收或保留镁的能力出问题，导致血镁长期偏低的一组遗传病',
  prevalence:
    '总体罕见，不同基因类型差异很大；有些婴儿期发病，有些在儿童或成人期因低镁、肾钙化或家族筛查发现。',
  quickLook: {
    whatItIs:
      '这不是一种单一疾病，而是一组遗传性镁转运障碍。问题可能发生在肠道吸收、肾小管重吸收，或同时影响钙、钾、肾脏和神经系统。',
    whoToSeeFirst:
      '反复低镁、低钙抽搐、手足搐搦、心律异常、肾结石/肾钙化或原因不明低钾低镁时，可到肾内科、儿科肾脏科、遗传代谢科或急诊评估。',
    isGenetic:
      '是，遗传方式因类型而异，可为常染色体隐性或显性。TRPM6、CLDN16、CLDN19、CNNM2 等都可能相关。',
    hasTreatment:
      '有长期补镁、处理相关电解质异常和肾脏/心电随访方案，但具体目标和药物形式需按类型和肾功能个体化。',
    commonDelayReason:
      '抽搐可能先按癫痫或缺钙处理，低镁只被短期纠正；若不查尿镁、肾钙化和家族史，容易漏掉遗传性原因。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿出现低镁伴低钙、抽搐、手足搐搦或喂养生长问题。',
      '反复低镁、低钾、心悸、QT 间期异常或肌肉痉挛。',
      '儿童或青年出现肾结石、肾钙化、肾功能异常并伴低镁。',
      '血镁长期低，补充后仍反复下降，尤其尿镁排泄不恰当升高。',
      '家族中有低镁、抽搐、肾钙化、早发肾病或近亲婚配史。',
    ],
    commonWrongTurns: [
      '只补钙或抗癫痫治疗，没有发现低镁是上游问题。',
      '把低镁归因于饮食差，未区分胃肠丢失和肾性丢失。',
      '没有做肾脏超声或尿钙尿镁评估，漏掉肾钙化相关类型。',
      '长期自行补充，未监测肾功能、电解质和心电图。',
    ],
    firstDepartments: [
      '肾内科',
      '儿科肾脏科',
      '遗传代谢科/医学遗传科',
      '急诊科（抽搐或心律风险时）',
      '心内科（心电异常时）',
    ],
    diagnosisChecklist: [
      '保存多次血镁、血钙、血钾、肌酐、甲状旁腺激素和尿电解质结果。',
      '记录抽搐、手足搐搦、心悸、肾结石、肾钙化和家族史。',
      '询问是否需要 24 小时尿镁或镁排泄分数评估。',
      '询问是否需要低镁相关基因 panel 或外显子组检测。',
      '确认长期补充、复查和急性低镁处理路径。',
    ],
    testsToAskAbout: [
      '血镁、血钙、血钾、磷、肌酐和酸碱状态。',
      '尿镁、尿钙、尿钾和肾性丢失评估。',
      '甲状旁腺激素和维生素 D 相关检查。',
      '心电图和必要时动态心电图。',
      '肾脏超声及相关基因检测。',
    ],
    questionsForDoctor: [
      '低镁更像肠道吸收问题还是肾脏丢失问题？',
      '是否需要排查特定遗传性低镁血症类型？',
      '我的补镁目标、复查频率和肾功能监测怎么安排？',
      '哪些症状提示抽搐或心律风险，需要急诊？',
      '家属是否需要筛查血镁、尿镁或基因？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>遗传性低镁血症可表现为婴儿期低钙抽搐、手足搐搦、肌肉痉挛、乏力、心悸或心电异常，也可出现低钾、肾结石、肾钙化、肾功能受损、生长发育问题或神经发育受累。不同基因类型的表现和风险不同。</p>',
    diagnosis:
      '<p>诊断需要确认低镁是否持续存在，并区分胃肠吸收不足和肾性镁丢失。评估通常包括血尿电解质、肾功能、尿钙尿镁、心电图、肾脏影像和遗传检测。医生还会排除药物、腹泻、营养不良、糖尿病和其他获得性低镁原因。</p>',
    treatment:
      '<p>管理包括纠正低镁和相关低钙/低钾、监测心律和肾功能、处理肾钙化或肾结石风险，并按具体类型制定长期补充方案。补充方式和剂量应由医生根据年龄、症状、肾功能和耐受性调整。</p>',
    longTermCare:
      '<p>长期照护重点是稳定电解质、保护肾功能、预防抽搐和心律风险，并保存基因和急诊说明。儿童还需要关注生长发育、神经发育和学校照护计划。</p>',
    fertilityOrFamily:
      '<p>遗传方式因基因而异。明确致病基因后，家属可通过遗传咨询了解携带者检测、亲属筛查、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>抽搐、意识改变、严重手足搐搦、明显心悸或晕厥、持续呕吐腹泻、低镁低钙快速加重时，应急诊并说明遗传性低镁血症风险。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Hypomagnesemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK500003/',
    },
    {
      name: 'Genetic causes of hypomagnesemia, a clinical overview',
      type: 'review',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5440500/',
    },
  ],
  symptoms:
    '<p>可表现为低镁、低钙抽搐、手足搐搦、低钾、心律异常、肾结石或肾钙化。</p>',
  diagnosis:
    '<p>评估包括血尿电解质、肾性镁丢失判断、心电图、肾脏影像、获得性原因排除和基因检测。</p>',
  treatment:
    '<p>管理以个体化补镁、相关电解质纠正、心电和肾功能随访、遗传咨询为核心。</p>',
  prognosis:
    '<p>预后取决于具体基因类型、低镁控制、肾脏受累和是否早期识别急性风险。</p>',
  sourceName:
    'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
  categorySlug: 'renal-urologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 342,
    name: 'hereditary-hypomagnesemia-journey.png',
    url: '/images/diseases/hereditary-hypomagnesemia-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

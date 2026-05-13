import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHutchinsonGilfordProgeriaSyndrome: DiseaseDraft = {
  ...entity(2041, 'disease-hutchinson-gilford-progeria-syndrome'),
  name: '早老症',
  nameEn: 'Hutchinson-Gilford progeria syndrome',
  alias:
    'HGPS、Hutchinson-Gilford 早老综合征、儿童早老症、第二批罕见病目录第 41 项',
  slug: 'hutchinson-gilford-progeria-syndrome',
  oneSentence:
    '早老症是一种极罕见的儿童早衰综合征，多由 LMNA 基因新发变异导致，孩子出生时常不明显异常，随后出现明显生长迟缓、脂肪减少、皮肤和毛发改变，并有很高的心脑血管风险。',
  plainName: '孩子身体过早出现衰老表现、尤其需要心血管监测的遗传病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其极为罕见，全球患儿数量很少，多数为新发变异而非家族遗传。',
  quickLook: {
    whatItIs:
      'HGPS 会让一种异常的 lamin A 蛋白影响细胞结构和血管健康。孩子智力通常不受影响，但身高体重增长、皮肤、骨骼、牙齿和心血管系统需要长期管理。',
    whoToSeeFirst:
      '婴幼儿严重生长迟缓、皮下脂肪减少、头面部特征变化、脱发、皮肤紧绷或关节活动受限，应到医学遗传科、儿科内分泌/生长发育门诊或罕见病多学科门诊。',
    isGenetic:
      '多数由 LMNA 新发致病变异引起，父母通常不是携带者，但确诊后仍建议遗传咨询，了解复发风险、产前选择和家属检测需求。',
    hasTreatment:
      '治疗以多学科支持和心血管风险管理为核心。部分国家/地区已使用法尼基转移酶抑制剂 lonafarnib，是否可及和适用需要专科判断。',
    commonDelayReason:
      '早期可能被认为是喂养差、矮小症、皮肤病或营养不良。智力发育相对正常但身体增长明显落后，是重要线索。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿期后身高体重增长明显落后，皮下脂肪逐渐减少，但认知和交流能力相对符合年龄。',
      '出现脱发、头皮静脉明显、皮肤紧绷或硬皮样改变、下颌小、牙齿萌出延迟。',
      '关节僵硬、髋关节问题、锁骨或指端骨发育异常，或影像提示早老症相关骨骼改变。',
      '儿童期出现高血压、动脉硬化、胸痛、短暂神经症状或脑血管异常。',
    ],
    commonWrongTurns: [
      '只按营养不良或生长激素问题处理，没有把皮肤、毛发、骨骼和血管线索合并考虑。',
      '只关注外貌变化，忽略心血管和脑血管风险的早期监测。',
      '没有尽早做 LMNA 基因检测，导致确诊和家庭咨询延迟。',
      '手术、麻醉或牙科治疗前未告知早老症和血管风险。',
    ],
    firstDepartments: [
      '医学遗传科',
      '儿科/儿童保健科',
      '儿童心血管科',
      '儿童神经科',
    ],
    diagnosisChecklist: [
      '带儿童生长曲线、身高体重头围记录、喂养记录和发育评估结果。',
      '整理皮肤、毛发、牙齿、关节活动、骨骼影像和既往心血管检查。',
      '记录家族史、父母年龄、孕产史和既往基因检测结果。',
      '准备询问是否需要 LMNA 检测、心脑血管基线评估和多学科随访计划。',
    ],
    testsToAskAbout: [
      'LMNA 基因检测，并在必要时做父母验证。',
      '心脏超声、心电图、血压、血脂、颈动脉/脑血管影像等心脑血管风险评估。',
      '骨骼 X 光、髋关节评估、牙科和听力/视力筛查。',
      '营养、运动、康复、疼痛和麻醉风险评估。',
    ],
    questionsForDoctor: [
      '孩子的心脑血管风险需要多久查一次？哪些症状要急诊？',
      '我们是否能接触到 lonafarnib 或相关临床项目？适合条件是什么？',
      '日常运动、饮食、牙科和麻醉需要哪些特别安排？',
      '未来再生育的复发风险怎样评估？是否需要产前或胚胎检测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>HGPS 患儿出生时常不明显异常，随后在婴幼儿期出现严重生长迟缓、体重增长差、皮下脂肪减少、脱发、头皮静脉明显、皮肤紧绷、下颌小、牙齿萌出延迟和关节活动受限。</p><p>智力通常相对保留。最需要警惕的是进行性动脉硬化带来的心肌梗死、卒中和短暂性脑缺血风险，骨骼、髋关节、牙齿、听力和视力也需要随访。</p>',
    diagnosis:
      '<p>诊断通常结合典型临床表现、生长曲线、骨骼和心血管评估，并通过 LMNA 基因检测确认。早期诊断有助于尽快建立心脑血管监测和家庭遗传咨询。</p><p>鉴别诊断包括 Werner 综合征、其他早衰样综合征、先天性脂肪营养不良、矮小症、营养不良、硬皮病样疾病和其他遗传发育综合征。</p>',
    treatment:
      '<p>管理需要儿科、医学遗传、心血管、神经、营养、康复、骨科、牙科和心理支持。重点是预防和监测心脑血管事件，优化营养、活动能力、关节和牙齿健康。</p><p>Lonafarnib 已在部分国家用于 HGPS 和相关早老样核纤层蛋白病，可延缓部分疾病进展并改善生存相关指标，但可及性、适应证和副作用需要专科评估。</p>',
    longTermCare:
      '<p>长期随访包括身高体重、血压、血脂、心脏和脑血管影像、关节活动、髋关节、牙齿、听力、视力、营养和疼痛。家庭应保存所有基因和影像资料。</p><p>学校和照护者需要了解孩子智力通常不受影响，但体力、关节、皮肤保护和急症识别需要支持。</p>',
    fertilityOrFamily:
      '<p>多数 HGPS 是新发变异，父母再生育复发风险通常较低但不是零。遗传咨询可解释父母检测、性腺嵌合可能性、产前诊断和胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>胸痛、气短、晕厥、突发肢体无力或说话困难、抽搐、意识改变、严重头痛、持续呕吐、明显脱水或术后异常情况，都应立即急诊并说明 HGPS 诊断和心脑血管风险。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Hutchinson-Gilford progeria syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hutchinson-gilford-progeria-syndrome/',
    },
    {
      name: 'FDA: First treatment for Hutchinson-Gilford progeria syndrome',
      type: 'official',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-hutchinson-gilford-progeria-syndrome-and-some-progeroid',
    },
  ],
  symptoms:
    '<p>常见婴幼儿期严重生长迟缓、皮下脂肪减少、脱发、皮肤紧绷、下颌小、牙齿萌出延迟、关节活动受限；智力通常相对保留，但心脑血管风险高。</p>',
  diagnosis:
    '<p>诊断结合典型表现、生长和骨骼/心血管评估，并通过 LMNA 基因检测确认，同时排除其他早衰样综合征和生长发育疾病。</p>',
  treatment:
    '<p>治疗以多学科支持、心脑血管监测、营养和康复为核心；部分患者可由专科讨论 lonafarnib 等特异性治疗的可及性和适用性。</p>',
  prognosis:
    '<p>预后主要受心脑血管并发症影响。早期确诊、规范监测、支持治疗和特异性药物可帮助降低风险并改善生活质量。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 395,
    name: 'hutchinson-gilford-progeria-syndrome-journey.png',
    url: '/images/diseases/hutchinson-gilford-progeria-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

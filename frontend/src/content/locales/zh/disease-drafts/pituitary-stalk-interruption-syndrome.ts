import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePituitaryStalkInterruptionSyndrome: DiseaseDraft = {
  ...entity(6103, 'disease-pituitary-stalk-interruption-syndrome'),
  name: '垂体柄阻断综合征',
  nameEn: 'Pituitary Stalk Interruption Syndrome',
  alias: 'PSIS、垂体柄中断综合征、异位垂体后叶、先天性垂体功能减退相关综合征',
  oneSentence:
    '垂体柄阻断综合征是一种先天性下丘脑-垂体发育异常，典型影像表现包括垂体柄缺如或变细、垂体后叶异位或缺如、垂体前叶发育不良，可导致生长激素和其他垂体激素缺乏。',
  plainName: '垂体连接结构发育异常导致孩子生长和多种激素不足的疾病',
  prevalence:
    '患病率不明，公开资料通常描述为罕见；GARD和综述资料将其列为罕见病。',
  quickLook: {
    whatItIs:
      '垂体柄是下丘脑和垂体之间的重要连接。发育异常会影响生长激素、甲状腺、肾上腺、性腺和水盐平衡等多条激素轴。',
    whoToSeeFirst:
      '新生儿低血糖、持久黄疸、男婴小阴茎/隐睾，或儿童明显矮小、青春期不来，应到儿童内分泌科和医学遗传科。',
    isGenetic:
      '多数病因未明，少数与HESX1、LHX4等发育相关基因有关。是否需要基因检测取决于是否合并其他畸形或家族史。',
    hasTreatment:
      '治疗以激素替代和长期监测为主，包括生长激素、甲状腺激素、氢化可的松、性激素或抗利尿激素等，顺序和剂量必须由内分泌专科管理。',
    commonDelayReason:
      '早期低血糖、黄疸或矮小可能被单独处理；如果没有做垂体MRI和完整激素轴评估，诊断会延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿反复低血糖、抽搐、持久黄疸、喂养差或体重增长差。',
      '男婴有小阴茎、隐睾，儿童期身高增长速度明显低于同龄人。',
      '青春期延迟、乏力、低血压、怕冷、多饮多尿或其他多垂体激素缺乏线索。',
      '垂体MRI提示垂体柄缺如/变细、垂体后叶异位或垂体前叶发育不良。',
    ],
    commonWrongTurns: [
      '只按营养不良或体质性矮小观察，没有评估生长激素和其他垂体激素。',
      '开始甲状腺激素前没有评估皮质醇，增加肾上腺危象风险。',
      '低血糖或抽搐反复发生后才想到垂体功能减退。',
    ],
    firstDepartments: [
      '儿童内分泌科',
      '医学遗传科',
      '儿科新生儿科',
      '眼科/神经影像相关门诊',
    ],
    diagnosisChecklist: [
      '整理出生史、低血糖和黄疸记录、身高体重曲线、骨龄片和青春期发育情况。',
      '带垂体MRI、甲状腺/肾上腺/性腺轴、生长激素激发试验、IGF-1和电解质结果。',
      '记录多饮多尿、低血压、乏力、怕冷、抽搐和家族史。',
    ],
    testsToAskAbout: [
      '鞍区/垂体MRI增强检查。',
      '生长激素-IGF-1轴、ACTH-皮质醇轴、TSH-FT4、LH/FSH-性激素、泌乳素和电解质评估。',
      '必要时尿量/尿渗透压和抗利尿激素相关评估，合并畸形或家族史时考虑基因检测。',
    ],
    questionsForDoctor: [
      '目前缺乏哪些激素？哪些必须先补？',
      '是否需要应急氢化可的松方案和疾病卡？',
      '生长激素治疗目标、监测频率和青春期管理如何安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>新生儿期可出现低血糖、抽搐、持久黄疸、喂养困难、体重增长差，男婴可有小阴茎或隐睾。儿童期常因身材矮小、生长速度慢、青春期延迟就诊。部分患者还可有中枢性甲状腺功能减退、继发性肾上腺皮质功能不全、性腺功能减退或尿崩症。</p>',
    diagnosis:
      '<p>诊断依靠垂体MRI三联征和激素轴评估。影像可见垂体柄缺如或明显变细、垂体后叶异位或缺如、垂体前叶发育不良。激素检查用于判断哪些轴受累以及补充顺序。</p>',
    treatment:
      '<p>治疗以替代缺乏激素为主。若有ACTH-皮质醇轴缺乏，通常需先处理肾上腺功能不足，再补甲状腺激素。生长激素、性激素诱导青春期、抗利尿激素等是否使用取决于具体缺乏情况。</p>',
    longTermCare:
      '<p>需要儿童内分泌长期随访，监测身高速度、骨龄、青春期、体重代谢、血压、电解质、肾上腺应激剂量教育和药物副作用。过渡到成人内分泌科时要重新评估激素轴。</p>',
    fertilityOrFamily:
      '<p>多数为散发，但合并其他中线发育异常、家族史或多系统异常时，可与遗传专科讨论基因检测和再生育风险。</p>',
    emergencySigns:
      '<p>低血糖、抽搐、严重呕吐腹泻、发热感染后精神差、低血压、意识改变或疑似肾上腺危象，应立即急诊，并告知医生可能存在垂体激素缺乏。</p>',
  },
  sources: [
    {
      name: 'GARD: Pituitary stalk interruption syndrome',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/12421/pituitary-stalk-interruption-syndrome',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>可表现为新生儿低血糖、黄疸、抽搐、喂养差、小阴茎/隐睾，儿童期矮小、青春期延迟和多种垂体激素缺乏。</p>',
  diagnosis:
    '<p>通过垂体MRI三联征和完整垂体激素轴评估诊断，必要时做基因检测和相关畸形筛查。</p>',
  treatment:
    '<p>以激素替代和长期内分泌随访为主，需注意肾上腺、甲状腺、生长、青春期和尿崩症管理顺序。</p>',
  prognosis:
    '<p>及时诊断和规范替代治疗通常可改善生长和代谢风险；延误可能造成低血糖、肾上腺危象或发育影响。</p>',
  sourceName: 'GARD: Pituitary stalk interruption syndrome',
  sourceUrl:
    'https://rarediseases.info.nih.gov/diseases/12421/pituitary-stalk-interruption-syndrome',
  slug: 'pituitary-stalk-interruption-syndrome',
  categorySlug: 'genetic-developmental',
  charityIds: [86],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['endocrine'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAlportSyndrome: DiseaseDraft = {
  ...entity(6, 'disease-alport-syndrome'),
  name: 'Alport 综合征',
  nameEn: 'Alport Syndrome',
  alias: '遗传性肾炎、眼-耳-肾综合征、家族性肾炎',
  slug: 'alport-syndrome',
  oneSentence:
    'Alport 综合征是一种与 IV 型胶原相关基因变异有关的遗传性肾脏疾病，常以持续血尿为线索，并可能伴随听力和眼部问题。',
  plainName: '可能影响肾脏、听力和眼睛的遗传性肾炎',
  prevalence:
    '属于罕见遗传性肾病，真实患病率受地区、筛查和基因检测可及性影响。',
  searchIntents: [
    'Alport 综合征 看什么科',
    '儿童长期血尿 听力下降',
    '遗传性肾炎 COL4A5 基因检测',
    'Alport 综合征 蛋白尿怎么办',
    'Alport 综合征 家族筛查',
  ],
  quickLook: {
    whatItIs:
      '这类疾病会影响肾小球基底膜等组织结构。很多患者先出现镜下血尿，随后可能出现蛋白尿、肾功能下降；部分患者还会有感音神经性听力下降或眼部改变。',
    whoToSeeFirst:
      '优先看肾内科，儿童可看儿科肾脏科。若有听力或视力线索，应同步评估耳鼻喉科和眼科；有家族史或生育计划时建议遗传咨询。',
    isGenetic:
      '是。常见相关基因包括 COL4A3、COL4A4、COL4A5，遗传方式可能是 X 连锁、常染色体隐性或常染色体显性。',
    hasTreatment:
      '目前管理重点是延缓肾脏损害进展、监测听力和眼部问题，并在需要时进行肾脏替代治疗评估。具体药物和目标值应由肾内科个体化制定。',
    commonDelayReason:
      '长期把镜下血尿当作普通尿路问题或“隐匿性肾炎”，没有追问家族史、听力变化和眼部表现，也没有及时做肾脏专科或遗传评估。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复或持续镜下血尿，尤其从儿童或青少年时期开始。',
      '血尿合并蛋白尿、血压升高或肾功能指标异常。',
      '家族中有人长期血尿、肾衰、透析、肾移植或较早出现听力下降。',
      '出现感音神经性听力下降，且同时有肾脏异常线索。',
      '眼科检查提示前圆锥晶状体、视网膜斑点样改变等相关表现。',
    ],
    commonWrongTurns: [
      '只按尿路感染、结石或普通肾炎反复处理，没有长期追踪尿蛋白和肾功能。',
      '只关注肾脏，没有做听力和眼科评估。',
      '家族里多人有血尿或肾衰，但没有把这些信息告诉医生。',
      '基因检测结果出来后，没有做遗传咨询和家系风险解释。',
    ],
    firstDepartments: [
      '肾内科',
      '儿科肾脏科',
      '耳鼻喉科',
      '眼科',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '整理历次尿常规、尿蛋白、尿白蛋白/肌酐比、肌酐、eGFR 和血压记录。',
      '记录家族中血尿、肾衰、透析、肾移植、听力下降或眼部异常情况。',
      '带上既往肾穿刺、听力检查、眼科检查和基因检测报告。',
      '向医生确认是否需要 COL4A3/COL4A4/COL4A5 等相关基因检测和家系验证。',
    ],
    testsToAskAbout: [
      '尿常规、尿蛋白定量或尿白蛋白/肌酐比。',
      '血肌酐、eGFR、电解质和血压评估。',
      '听力检查，尤其是感音神经性听力评估。',
      '眼科检查，包括晶状体、眼底和视网膜评估。',
      'Alport 相关基因检测，必要时结合肾穿刺或家系检测。',
    ],
    questionsForDoctor: [
      '我的表现更符合哪种遗传方式？家人是否需要检查？',
      '现在是否已有蛋白尿或肾功能下降，随访频率应该怎样安排？',
      '听力和眼科需要多久复查一次？',
      '哪些药物、感染或生活方式因素可能增加肾脏负担？',
      '如果未来需要肾脏替代治疗，应该提前了解哪些选择？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Alport 综合征常以持续镜下血尿为早期线索，可逐渐出现蛋白尿、高血压和肾功能下降。部分患者会出现感音神经性听力下降，通常在儿童后期、青春期或成年早期被发现。眼部可见前圆锥晶状体、视网膜改变或角膜相关问题。</p>',
    diagnosis:
      '<p>诊断通常结合尿检、肾功能、家族史、听力和眼科评估，并通过 COL4A3、COL4A4、COL4A5 等基因检测确认或辅助判断。部分情况下，医生会结合肾穿刺病理或 IV 型胶原相关检测。</p>',
    treatment:
      '<p>治疗目标是延缓肾脏损害、监测并处理听力和眼部问题。肾内科可能根据蛋白尿、血压和肾功能情况评估肾脏保护用药；具体药物、剂量和目标值需要个体化决定。</p>',
    longTermCare:
      '<p>长期随访通常包括尿蛋白、肾功能、血压、听力、眼科检查和生活方式管理。出现肾功能持续下降时，应较早了解肾脏替代治疗、肾移植评估和家庭支持安排。</p>',
    fertilityOrFamily:
      '<p>由于遗传方式多样，家族成员风险不能只凭性别或单个症状判断。建议携带基因报告进行遗传咨询，讨论家系检测、伴侣检测和生育相关选择。</p>',
    emergencySigns:
      '<p>若出现尿量明显减少、严重水肿、血压显著升高、呼吸困难、肉眼血尿持续不缓解，或已知肾功能异常者出现明显乏力、恶心、胸闷等情况，应尽快就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Alport Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1207/',
    },
    {
      name: 'MedlinePlus Genetics: Alport syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/alport-syndrome/',
    },
    {
      name: 'Orphanet: Alport syndrome',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/63',
    },
  ],
  symptoms:
    '<p>常见线索包括持续血尿、蛋白尿、肾功能下降、感音神经性听力下降和眼部异常。</p>',
  diagnosis:
    '<p>评估通常包括尿检、肾功能、血压、听力、眼科检查、家族史和 COL4A3/COL4A4/COL4A5 相关基因检测。</p>',
  treatment:
    '<p>管理重点是肾脏保护、血压和蛋白尿控制、听力眼科随访，以及必要时肾脏替代治疗评估。</p>',
  prognosis:
    '<p>病程与遗传方式、性别、蛋白尿和肾功能变化有关。规律随访有助于较早识别肾脏进展和听力眼部问题。</p>',
  categorySlug: 'renal-urologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 306,
    name: 'alport-syndrome-journey.png',
    url: '/images/diseases/alport-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

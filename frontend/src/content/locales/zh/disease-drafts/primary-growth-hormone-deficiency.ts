import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryGrowthHormoneDeficiency: DiseaseDraft = {
  ...entity(2064, 'disease-primary-growth-hormone-deficiency'),
  name: '原发性生长激素缺乏症',
  nameEn: 'Primary growth hormone deficiency',
  alias: 'GHD；原发性 GH 缺乏；第二批罕见病目录第 64 项',
  slug: 'primary-growth-hormone-deficiency',
  oneSentence:
    '原发性生长激素缺乏症是垂体或下丘脑相关原因导致生长激素分泌不足的疾病，儿童常表现为生长速度慢和身材明显矮小。',
  plainName: '一种孩子长得慢、需要内分泌评估的生长激素不足',
  prevalence:
    '已纳入中国第二批罕见病目录；儿童生长激素缺乏少见，但在生长曲线持续下移、年增长速度明显偏慢时需要评估。',
  quickLook: {
    whatItIs:
      '生长激素由垂体分泌，帮助儿童线性生长，也影响体成分和代谢。原发性缺乏可为先天性、遗传性、垂体发育异常或原因不明。',
    whoToSeeFirst:
      '孩子身高明显低于同龄人、每年长高速度慢、身高曲线跨越下降，应先看儿童内分泌科，而不是只等待“晚长”。',
    isGenetic:
      '部分与 GH1、GHRHR、POU1F1、PROP1、HESX1 等基因或垂体发育异常有关；是否检测取决于起病年龄、严重程度、伴随激素缺乏和家族史。',
    hasTreatment:
      '确诊后可使用重组人生长激素治疗，越早在骨骺闭合前规范治疗，越有机会改善成人身高；同时要监测其他垂体激素。',
    commonDelayReason:
      '家长可能以为只是遗传矮或晚发育；如果没有连续测量生长速度、骨龄和排除慢性疾病，容易错过治疗窗口。',
  },
  patientJourney: {
    whenToSuspect: [
      '孩子一年长高明显少于同龄预期，身高曲线持续下移或低于第 3 百分位。',
      '身材比例大致正常但显著矮小，体重相对不低，面容显幼或换牙、青春期延迟。',
      '新生儿期或婴幼儿期有低血糖、黄疸时间长、小阴茎、隐睾或中线面部畸形。',
      '有颅脑肿瘤、手术、放疗、严重头部外伤或垂体/下丘脑影像异常史。',
    ],
    commonWrongTurns: [
      '只看一次身高，不看连续生长速度和父母靶身高。',
      '未排除甲状腺功能减退、营养不良、慢性肠病、肾病、贫血和遗传综合征就直接谈用药。',
      '只查随机 GH 水平，因为生长激素脉冲分泌，随机值不能单独诊断。',
    ],
    firstDepartments: [
      '儿童内分泌科',
      '内分泌科',
      '医学遗传科（严重或家族性时）',
      '神经外科/眼科（垂体占位或视野问题时）',
    ],
    diagnosisChecklist: [
      '带至少 6-12 个月以上的身高体重记录、出生身长体重和父母身高。',
      '整理青春发育、营养、睡眠、运动、慢性病、药物和家族身高史。',
      '带骨龄片、IGF-1、IGFBP-3、甲状腺、肝肾功能、血常规、乳糜泻/炎症筛查等结果。',
      '如已做 GH 激发试验或垂体 MRI，带原始报告和试验用药方案。',
    ],
    testsToAskAbout: [
      '骨龄和生长速度评估，结合父母靶身高判断偏离程度。',
      'IGF-1、IGFBP-3 和其他慢性病/内分泌筛查。',
      '规范生长激素激发试验，必要时做两种刺激方案确认。',
      '垂体 MRI 和其他垂体激素评估，严重或家族性病例讨论基因检测。',
    ],
    questionsForDoctor: [
      '孩子是真的 GH 缺乏，还是体质性青春期延迟、家族性矮小或其他慢性病？',
      '治疗目标是改善生长速度还是成人身高？预计治疗多久，多久评估效果？',
      '用 GH 后如何监测 IGF-1、骨龄、甲状腺、血糖、颅高压或髋关节问题？',
      '是否合并其他垂体激素缺乏，需要肾上腺或甲状腺替代治疗？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>儿童 GHD 最常见线索是生长速度慢，而不是单次身高矮。孩子通常身材比例正常、体重相对保留，可有面容显幼、腹部脂肪偏多、牙齿萌出延迟或青春期延迟。</p><p>严重先天性或多垂体激素缺乏者可在新生儿期出现低血糖、持续黄疸、小阴茎、隐睾或中线面部异常。获得性病因可能伴头痛、视力/视野改变、尿崩或其他垂体激素缺乏。</p>',
    diagnosis:
      '<p>诊断从准确测量和生长曲线开始。医生会计算生长速度、身高 SDS、父母靶身高和骨龄，并排除营养不良、慢性疾病、甲状腺功能减退、Cushing 综合征、遗传综合征和青春期变异。</p><p>IGF-1 和 IGFBP-3 可提供线索，但确诊通常需要规范 GH 激发试验。垂体 MRI 用于寻找垂体柄中断、垂体发育异常或肿瘤等原因。若存在多激素缺乏或家族史，基因检测可能有帮助。</p>',
    treatment:
      '<p>确诊后常使用重组人生长激素皮下注射，通常需要长期规律治疗并根据体重、IGF-1、生长速度和副作用调整剂量。治疗越早开始、骨龄越有空间、依从性越好，身高获益通常越大。</p><p>治疗期间需监测甲状腺功能、肾上腺功能、血糖、IGF-1、骨龄、脊柱侧弯、颅内压增高和股骨头滑脱等少见风险。若有肿瘤史或垂体病变，需与相关专科共同制定安全随访。</p>',
    longTermCare:
      '<p>随访通常每 3-6 个月评估身高体重、生长速度、注射依从性和不良反应，并定期复查骨龄和实验室指标。青春期阶段需要特别评估骨龄进展和最终身高窗口。</p><p>达到成人身高后，有些儿童期 GHD 需要重新评估是否仍有成人期 GHD，尤其是有结构性垂体病变或多激素缺乏者。</p>',
    fertilityOrFamily:
      '<p>多数孤立性 GHD 原因不明，不一定遗传。若家族中多人矮小、近亲婚配、出生后早期严重低血糖或多垂体激素缺乏，应讨论遗传咨询和相关基因检测。青春期和生育相关激素也需随访。</p>',
    emergencySigns:
      '<p>治疗中出现严重头痛伴呕吐或视物模糊、跛行或髋膝痛、明显水肿、严重低血糖、肾上腺危象表现或垂体肿瘤相关视力变化，应及时就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Growth hormone deficiency - children',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001176.htm',
    },
    {
      name: 'Endocrine Society: Growth Hormone Deficiency',
      type: 'patient-organization',
      url: 'https://www.endocrine.org/patient-engagement/endocrine-library/growth-hormone-deficiency',
    },
  ],
  symptoms:
    '<p>主要表现为儿童生长速度慢、身高曲线下移、比例正常的矮小、面容显幼、骨龄延迟、青春期延迟，重症可有新生儿低血糖或多垂体激素缺乏。</p>',
  diagnosis:
    '<p>诊断结合连续生长曲线、骨龄、IGF-1/IGFBP-3、排除慢性病和其他内分泌病、规范 GH 激发试验、垂体 MRI 和必要的基因检测。</p>',
  treatment:
    '<p>确诊后可用重组人生长激素长期治疗，并监测生长速度、IGF-1、骨龄、甲状腺/肾上腺功能、血糖、颅高压和髋关节等风险。</p>',
  prognosis:
    '<p>越早在骨骺闭合前诊断和规范治疗，越有机会改善成人身高；合并垂体结构异常或多激素缺乏者需要更长期内分泌随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 418,
    name: 'primary-growth-hormone-deficiency-journey.png',
    url: '/images/diseases/primary-growth-hormone-deficiency-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine', 'genetic-counseling'],
};

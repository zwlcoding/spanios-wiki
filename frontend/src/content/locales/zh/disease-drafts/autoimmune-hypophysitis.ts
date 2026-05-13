import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAutoimmuneHypophysitis: DiseaseDraft = {
  ...entity(12, 'disease-autoimmune-hypophysitis'),
  name: '自身免疫性垂体炎',
  nameEn: 'Autoimmune Hypophysitis',
  alias: '淋巴细胞性垂体炎、IgG4 相关垂体炎',
  slug: 'autoimmune-hypophysitis',
  oneSentence:
    '自身免疫性垂体炎是一类由免疫炎症累及垂体的罕见疾病，可能造成头痛、视野改变、尿崩症或多种垂体激素不足。',
  plainName: '免疫炎症影响垂体功能的罕见病',
  prevalence:
    '总体很罕见，公开研究中的估计差异较大；部分类型更常见于妊娠期或产后女性，也可见于其他人群或免疫治疗相关场景。',
  quickLook: {
    whatItIs:
      '垂体是调节肾上腺、甲状腺、性腺、生长和水盐平衡的重要内分泌器官。自身免疫性垂体炎发生时，炎症可让垂体或垂体柄肿大，也可能让部分激素轴功能下降。',
    whoToSeeFirst:
      '建议优先到内分泌科评估；如果有视力、视野改变或影像提示鞍区占位，常需要神经外科和眼科共同判断。',
    isGenetic:
      '通常不是单基因遗传病。它更多与自身免疫状态、妊娠/产后免疫变化、IgG4 相关疾病或免疫检查点抑制剂等背景有关。',
    hasTreatment:
      '有治疗和随访方案，但要由内分泌专科根据激素缺乏、压迫症状、影像变化和病因综合决定。不要自行使用或调整激素药物。',
    commonDelayReason:
      '早期头痛、乏力、怕冷、月经变化或多饮多尿都不特异，容易被分别当作普通头痛、产后疲劳、甲状腺问题或泌尿问题处理；影像上也可能与垂体腺瘤混淆。',
  },
  patientJourney: {
    whenToSuspect: [
      '持续或反复头痛，尤其伴有视力下降、视野缺损或眼部压迫感。',
      '出现明显乏力、低血压、怕冷、月经紊乱、性欲下降、产后泌乳不足等垂体激素不足线索。',
      '多饮、多尿、夜尿明显增多，提示可能存在中枢性尿崩症。',
      '妊娠期或产后出现鞍区病变、头痛和内分泌异常。',
      '正在或曾经接受免疫检查点抑制剂治疗后出现新的内分泌症状。',
      '合并桥本甲状腺炎、系统性自身免疫病或 IgG4 相关疾病线索。',
    ],
    commonWrongTurns: [
      '只按普通头痛或偏头痛处理，没有同步评估垂体激素和鞍区影像。',
      '把产后乏力、无乳或月经异常当作恢复慢，忽略垂体功能减退。',
      '把多饮多尿当作单纯饮水习惯或泌尿系统问题，未排查尿崩症。',
      '看到垂体增大后直接按垂体瘤理解，没有结合炎症、免疫和激素轴信息。',
      '在没有医生指导的情况下自行停用或调整激素替代药物。',
    ],
    firstDepartments: [
      '内分泌科',
      '神经外科（存在压迫症状或需要鉴别鞍区占位时）',
      '眼科（视力、视野评估）',
      '风湿免疫科（怀疑 IgG4 相关疾病或其他系统性免疫病时）',
    ],
    diagnosisChecklist: [
      '整理头痛、视力视野变化、多饮多尿、月经/性功能、产后泌乳和既往免疫治疗史。',
      '带上垂体 MRI 平扫和增强、视野检查、既往激素检查和用药清单。',
      '向医生确认是否需要完整垂体激素轴评估，包括肾上腺、甲状腺、性腺、生长激素轴和泌乳素。',
      '记录是否合并自身免疫病、IgG4 相关疾病、感染、肿瘤治疗或其他鞍区疾病线索。',
    ],
    testsToAskAbout: [
      '垂体相关激素和靶腺激素评估，如 ACTH/皮质醇、TSH/游离 T4、LH/FSH、性激素、泌乳素和 IGF-1。',
      '鞍区 MRI 增强及随访影像，关注垂体大小、垂体柄和视交叉受压情况。',
      '视力、视野检查。',
      '多饮多尿时评估中枢性尿崩症。',
      '自身免疫、IgG4 相关疾病或感染/肉芽肿性疾病的鉴别检查。',
      '在诊断不清、病变进展或怀疑其他肿瘤/感染时，是否需要神经外科评估取样风险。',
    ],
    questionsForDoctor: [
      '我的情况更像自身免疫性垂体炎、IgG4 相关垂体炎、垂体瘤，还是其他鞍区疾病？',
      '目前哪些激素轴已经受影响？哪些需要先处理，哪些需要长期复查？',
      '是否存在视交叉压迫或尿崩症风险？需要多久复查影像和视野？',
      '治疗目标是缓解压迫、控制炎症，还是替代已经缺乏的激素？',
      '如果我正在接受肿瘤免疫治疗，内分泌处理需要如何与肿瘤科协调？',
      '哪些情况提示需要急诊处理或立即联系医生？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>自身免疫性垂体炎的表现来自两个方面：一是垂体或垂体柄炎症肿大造成的压迫症状，如头痛、视野缺损或视力下降；二是垂体激素分泌不足或后叶受累，如乏力、低血压、怕冷、月经或性功能改变、产后泌乳不足、多饮多尿等。不同亚型、病程阶段和诱因下表现差异很大。</p>',
    diagnosis:
      '<p>诊断通常结合临床表现、垂体激素轴检查、鞍区 MRI、视野检查以及自身免疫或 IgG4 相关疾病线索。垂体活检可提供病理依据，但有创，通常只在诊断不清、病变进展、怀疑肿瘤或感染等情况下由专科团队权衡。</p><p>医生需要排除垂体腺瘤、Rathke 囊肿、颅咽管瘤、感染、结节病、朗格汉斯细胞组织细胞增生症、IgG4 相关疾病和免疫治疗相关垂体炎等情况。</p>',
    treatment:
      '<p>治疗取决于是否存在压迫症状、激素缺乏、尿崩症、病变进展和潜在病因。管理可能包括激素替代、抗炎或免疫相关治疗、影像随访，以及少数情况下的神经外科评估。具体药物选择、先后顺序、疗程和减量应由医生根据检查结果制定。</p>',
    longTermCare:
      '<p>长期随访重点包括垂体激素轴、视力视野、鞍区 MRI 变化、尿量/口渴情况和复发线索。已确认激素缺乏者应保存诊断资料、用药清单和急诊说明，感染、手术、外伤或严重疾病等应激情况下需提前向主治医生确认处理方案。</p>',
    fertilityOrFamily:
      '<p>垂体功能受影响时，月经、排卵、性激素、泌乳和妊娠计划都可能受到影响。育龄期患者有备孕、妊娠或产后管理需求时，建议由内分泌科与妇产科共同评估。该病通常不是直接遗传病，家族风险更多与自身免疫背景相关。</p>',
    emergencySigns:
      '<p>如果出现突然加重的剧烈头痛、视力或视野快速下降、意识改变、严重低血压、反复呕吐、明显脱水，或已知垂体/肾上腺功能不足者在发热、手术、外伤后明显不适，应尽快急诊就医，并主动告知垂体炎或垂体功能减退病史。</p>',
  },
  sources: [
    {
      name: 'Japan Endocrine Society: Autoimmune and IgG4-related hypophysitis guideline',
      type: 'clinical-guideline',
      url: 'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
    },
    {
      name: 'Endotext: Hypophysitis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519842/',
    },
    {
      name: 'Hypophysitis: Evaluation and Management',
      type: 'review',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5471685/',
    },
  ],
  symptoms:
    '<p>常见线索包括头痛、视力或视野变化、多饮多尿，以及肾上腺、甲状腺、性腺等垂体激素轴功能不足。</p>',
  diagnosis:
    '<p>评估通常结合垂体激素检查、鞍区 MRI、视野检查和自身免疫/IgG4 相关疾病鉴别。</p>',
  treatment:
    '<p>治疗需由内分泌专科根据压迫症状、激素缺乏和病因制定，可能包括激素替代、抗炎免疫治疗和随访影像评估。</p>',
  prognosis:
    '<p>病程差异较大。及时识别激素缺乏、视路压迫和尿崩症，并规律随访，有助于降低急性风险和长期漏诊。</p>',
  sourceName: 'Japan Endocrine Society guideline',
  sourceUrl:
    'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 312,
    name: 'autoimmune-hypophysitis-journey.png',
    url: '/images/diseases/autoimmune-hypophysitis-journey.png',
  },
  tagSlugs: ['endocrine'],
};

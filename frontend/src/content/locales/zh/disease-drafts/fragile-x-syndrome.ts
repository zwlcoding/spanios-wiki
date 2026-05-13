import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFragileXSyndrome: DiseaseDraft = {
  ...entity(2029, 'disease-fragile-x-syndrome'),
  name: '脆性X综合征',
  nameEn: 'Fragile X syndrome',
  alias:
    'FXS、Martin-Bell 综合征、FMR1相关脆性X综合征、第二批罕见病目录第 29 项',
  slug: 'fragile-x-syndrome',
  oneSentence:
    '脆性 X 综合征是一种 FMR1 基因 CGG 重复扩增导致的 X 连锁遗传病，可引起语言和认知发育迟缓、学习困难、注意力/行为问题和孤独症谱系特征。',
  plainName: '影响发育、学习和行为的 FMR1 相关遗传病',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其约每 4,000 名男性 1 例、每 8,000 名女性 1 例。',
  quickLook: {
    whatItIs:
      'FMR1 基因 CGG 重复超过 200 次时通常会使基因沉默，FMRP 蛋白不足，影响神经突触发育和学习记忆。男孩常较女孩表现更重。',
    whoToSeeFirst:
      '孩子 2 岁左右仍明显语言迟缓、发育落后、注意力和行为问题明显，或有孤独症谱系特征，应先看发育行为儿科、儿童神经科、康复科和遗传咨询门诊。',
    isGenetic:
      '属于 X 连锁遗传。FMR1 前突变携带者本身可能没有 FXS，但与子代全突变风险、女性卵巢功能不全和成人震颤/共济失调风险有关。',
    hasTreatment:
      '目前没有根治 FXS 的药物。重点是早期干预、言语/作业/行为训练、特殊教育支持，并处理癫痫、焦虑、注意缺陷多动、睡眠和胃肠等共病。',
    commonDelayReason:
      '早期常被笼统归为语言晚、发育迟缓、孤独症或多动症。若伴家族中智力/发育问题、早发卵巢功能不全或老年震颤共济失调，要想到 FMR1 检测。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿或儿童语言发育明显落后，学习困难、智力发育落后或社交沟通困难。',
      '注意力不集中、多动、焦虑、感觉敏感、重复行为、手拍动或孤独症谱系特征。',
      '男孩出现长脸、大耳朵、关节松弛、扁平足，青春期后睾丸增大等特征。',
      '家族中有原因不明的智力障碍、发育迟缓、女性早发卵巢功能不全或中老年震颤/共济失调。',
    ],
    commonWrongTurns: [
      '只按孤独症、多动症或语言迟缓干预，没有寻找可解释家族风险的遗传原因。',
      '做常规染色体或外显子检测阴性后，就认为没有遗传病，忽略 FMR1 重复扩增检测。',
      '只关注孩子训练，未给母系亲属提供前突变相关风险咨询。',
      '等待“长大再看”，错过早期语言、行为和教育支持窗口。',
    ],
    firstDepartments: [
      '发育行为儿科',
      '儿童神经科',
      '康复医学科',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '整理语言、运动、社交、学习和行为发育里程碑，带幼儿园/学校评估和训练记录。',
      '记录癫痫、睡眠、焦虑、多动、胃肠、喂养和感觉敏感问题。',
      '整理母系和父系亲属中的发育迟缓、智力障碍、早发卵巢功能不全、震颤或共济失调。',
      '带既往智力/发育评估、脑电图、听力、视力和遗传检测报告。',
    ],
    testsToAskAbout: [
      'FMR1 CGG 重复扩增检测和甲基化状态评估，这是诊断 FXS 的核心。',
      '发育评估、智力/适应行为评估、语言评估、孤独症谱系和 ADHD 评估。',
      '癫痫可疑时脑电图；同时检查听力、视力、睡眠和胃肠问题。',
      '父母及高风险亲属的 FMR1 前突变/全突变检测和遗传咨询。',
    ],
    questionsForDoctor: [
      '孩子是全突变、前突变还是其他 FMR1 结果？这对症状和家族意味着什么？',
      '需要哪些早期干预、学校支持和行为治疗？目标如何评估？',
      '癫痫、焦虑、多动、睡眠或胃肠问题是否需要单独治疗？',
      '哪些亲属需要检测？女性前突变携带者和成年男性携带者要注意什么？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>FXS 常表现为语言和认知发育迟缓、学习困难、注意力不集中、多动、焦虑、感觉敏感和社交沟通困难。约一部分患者有孤独症谱系特征，少数有癫痫。</p><p>体貌特征可随年龄更明显，包括长脸、大耳朵、突出下颌/前额、关节松弛、扁平足，男性青春期后可有睾丸增大。女孩因有两条 X 染色体，表现可能较轻或更不典型。</p>',
    diagnosis:
      '<p>诊断依靠 FMR1 CGG 重复扩增检测和甲基化分析。全突变通常为 CGG 重复超过 200 次并导致 FMR1 沉默；前突变通常为 55-200 次重复，可能带来不同的携带者相关风险。</p><p>需要与其他发育迟缓、孤独症谱系障碍、智力障碍、癫痫综合征和染色体/单基因疾病鉴别。普通染色体检查或外显子测序不一定能发现 FMR1 重复扩增。</p>',
    treatment:
      '<p>目前治疗以支持和共病管理为主。早期语言治疗、作业治疗、行为干预、特殊教育和家庭训练可帮助沟通、学习和生活技能。</p><p>医生会按需要处理 ADHD、焦虑、睡眠障碍、癫痫、胃肠问题和情绪行为问题。治疗目标应结合孩子年龄、功能水平和家庭需求定期调整。</p>',
    longTermCare:
      '<p>长期照护包括发育和学习评估、学校支持计划、行为和心理支持、青春期过渡、职业和独立生活规划。家庭应保存遗传报告和评估记录，便于升学和跨科就诊。</p>',
    fertilityOrFamily:
      '<p>FMR1 遗传咨询非常重要。女性前突变携带者有生育时扩增为全突变的风险，也可能有脆性 X 相关卵巢功能不全；成人前突变携带者还需了解震颤/共济失调等相关风险。</p><p>有生育计划的家庭可讨论携带者检测、产前诊断或胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>首次抽搐、持续抽搐、意识改变、严重自伤或攻击风险、明显脱水、严重睡眠问题导致安全风险，或用药后出现严重不良反应时，应及时急诊或联系主管医生。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Fragile X syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/fragile-x-syndrome/',
    },
  ],
  symptoms:
    '<p>常见表现包括语言和认知发育迟缓、学习困难、注意力不集中、多动、焦虑、感觉敏感、孤独症谱系特征，部分患者有癫痫和典型体貌。</p>',
  diagnosis:
    '<p>诊断依靠 FMR1 CGG 重复扩增检测和甲基化分析，并结合发育、智力、语言、孤独症谱系和行为评估。</p>',
  treatment:
    '<p>目前没有根治药物，管理以早期干预、语言/作业/行为治疗、特殊教育和 ADHD、焦虑、癫痫、睡眠等共病处理为主。</p>',
  prognosis:
    '<p>个体差异很大。早期诊断、持续训练、学校支持和共病管理可改善沟通、学习和生活功能；家族遗传咨询可减少后续诊断延误。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 383,
    name: 'fragile-x-syndrome-journey.png',
    url: '/images/diseases/fragile-x-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

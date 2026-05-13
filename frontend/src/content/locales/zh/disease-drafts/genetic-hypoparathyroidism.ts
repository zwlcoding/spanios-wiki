import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGeneticHypoparathyroidism: DiseaseDraft = {
  ...entity(2034, 'disease-genetic-hypoparathyroidism'),
  name: '遗传性甲状旁腺功能减退症',
  nameEn: 'Genetic hypoparathyroidism',
  alias: '遗传性甲旁减、低甲状旁腺激素性低钙血症、第二批罕见病目录第 34 项',
  slug: 'genetic-hypoparathyroidism',
  oneSentence:
    '遗传性甲状旁腺功能减退症是一组因甲状旁腺发育、PTH 分泌或钙感受通路异常导致的低钙高磷疾病，可引起手足麻木、抽搐、癫痫和长期肾脏并发症风险。',
  plainName: '甲状旁腺激素不足或作用异常导致低钙的遗传病',
  prevalence:
    '已纳入国家第二批罕见病目录；总体罕见，不同遗传类型和诊断年龄差异明显。',
  quickLook: {
    whatItIs:
      '甲旁减的共同生化特征是血钙低、血磷高，PTH 不足或不合适地偏低。遗传性类型可与 CASR、GCM2、PTH、GATA3、TBX1 等基因或综合征相关。',
    whoToSeeFirst:
      '反复手足麻木、肌肉痉挛、抽搐、癫痫、低钙或儿童牙齿/发育异常，应先看内分泌科或儿科内分泌，并带既往钙磷镁和 PTH 结果。',
    isGenetic:
      '遗传方式因病因不同而不同，可为常染色体显性、隐性、X 连锁或综合征的一部分。确诊后建议遗传咨询。',
    hasTreatment:
      '常规治疗包括钙剂、活性维生素 D、镁纠正和饮食管理；目标不是把血钙拉到最高，而是在减少症状的同时避免尿钙过高和肾结石/肾钙化。',
    commonDelayReason:
      '症状可多年很轻，被当作焦虑、过度换气、癫痫、偏头痛或普通缺钙。只补钙不查 PTH、磷、镁和尿钙，容易漏诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复口唇、手指、脚趾麻木刺痛，手足抽搐、肌肉痉挛或喉痉挛。',
      '低钙伴血磷升高，PTH 低或不合适地正常/偏低。',
      '儿童期癫痫、牙釉质异常、白内障、基底节钙化、发育异常或反复低钙。',
      '家族中有低钙、癫痫、肾结石、听力问题、免疫问题或相关综合征线索。',
    ],
    commonWrongTurns: [
      '只按缺钙补钙，没有查 PTH、血磷、镁和尿钙。',
      '抽搐被长期当作单纯癫痫，没有复查电解质和心电图 QT 间期。',
      '治疗后只关注血钙，忽略尿钙、肾功能和肾脏影像。',
      '未区分术后甲旁减、自身免疫、遗传性和低镁等可逆原因。',
    ],
    firstDepartments: ['内分泌科', '儿科内分泌科', '遗传代谢门诊', '肾内科'],
    diagnosisChecklist: [
      '整理所有低钙发作、抽搐/癫痫、手足麻木、喉痉挛和用药反应。',
      '带血钙、白蛋白校正钙或离子钙、磷、镁、PTH、维生素 D、肾功能和尿钙报告。',
      '带心电图、脑 CT/MRI、肾脏超声、眼科、牙科和听力检查资料。',
      '记录颈部手术史、放疗史、自身免疫病、家族低钙或综合征表现。',
    ],
    testsToAskAbout: [
      '重复确认血钙/磷/镁/PTH，并测 24 小时尿钙或尿钙肌酐比。',
      '肾脏超声或其他评估肾结石、肾钙化和肾功能的检查。',
      '心电图 QT 间期、眼科白内障、牙齿和神经系统评估。',
      '遗传检测或综合征评估，如 CASR、GCM2、PTH、GATA3、TBX1 等。',
    ],
    questionsForDoctor: [
      '我的低钙属于遗传性甲旁减、术后甲旁减、低镁，还是假性甲旁减等其他情况？',
      '目标血钙范围是多少？如何避免尿钙过高和肾脏并发症？',
      '钙剂、骨化三醇/活性维生素 D、镁和饮食如何调整？',
      '家人是否需要检测？怀孕、手术或感染时剂量如何调整？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>低钙可引起口周和手足麻木、针刺感、肌肉痉挛、手足搐搦、喉痉挛、癫痫、心律异常、疲劳、焦虑样不适和认知困难。慢性病例可有白内障、牙齿异常、皮肤毛发指甲改变和脑内钙化。</p><p>有些患者症状轻微，只在体检或癫痫/心电图检查时发现低钙。儿童患者还要关注发育、牙齿、听力、免疫或综合征相关表现。</p>',
    diagnosis:
      '<p>诊断首先确认低钙、高磷和 PTH 不足或不合适偏低，同时检查镁、维生素 D、肾功能和尿钙。低镁可造成可逆性 PTH 分泌障碍，必须纠正。</p><p>遗传性甲旁减需要与术后甲旁减、自身免疫性甲旁减、假性甲旁减、维生素 D 缺乏、肾病和药物相关低钙鉴别。基因检测有助于解释家族风险和特殊管理要点。</p>',
    treatment:
      '<p>急性明显低钙、抽搐或心电图异常时可能需要静脉补钙并监测心律。长期治疗常用口服钙剂、骨化三醇或其他活性维生素 D，必要时补镁和调整饮食。</p><p>治疗目标是在缓解症状和避免低钙急症的同时，降低高尿钙、肾结石、肾钙化和肾功能下降风险。部分难治患者可由专科评估 PTH 替代相关方案。</p>',
    longTermCare:
      '<p>长期随访包括血钙、磷、镁、肌酐/eGFR、尿钙、肾脏影像、心电图、眼科和牙科。腹泻、感染、妊娠、哺乳、手术或用药变化时，钙和活性维生素 D 需求可能改变。</p>',
    fertilityOrFamily:
      '<p>遗传方式取决于具体基因。明确变异后，可为父母、兄弟姐妹和子女提供检测建议。备孕、妊娠和哺乳期需由内分泌和产科共同管理血钙目标。</p>',
    emergencySigns:
      '<p>抽搐、喉头紧缩或呼吸困难、晕厥、心悸胸痛、意识改变、严重手足搐搦、持续呕吐腹泻导致无法服药，应立即急诊并说明甲旁减和当前药物剂量。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Hypoparathyroidism',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/000385.htm',
    },
    {
      name: 'NICHD: How is hypoparathyroidism treated?',
      type: 'official',
      url: 'https://www.nichd.nih.gov/health/topics/hypopara/conditioninfo/treatment',
    },
  ],
  symptoms:
    '<p>低钙可导致口周和手足麻木、肌肉痉挛、手足搐搦、喉痉挛、癫痫、心律异常；慢性病例可有白内障、牙齿异常和脑内钙化。</p>',
  diagnosis:
    '<p>诊断依靠低钙、高磷、PTH 不足或不合适偏低，并评估镁、维生素 D、尿钙、肾功能及遗传病因。</p>',
  treatment:
    '<p>治疗包括急性期静脉补钙，长期口服钙剂、活性维生素 D、镁纠正和尿钙/肾脏监测；难治患者可由专科评估 PTH 相关方案。</p>',
  prognosis:
    '<p>规范监测和个体化补充治疗可减少症状和急症；长期风险主要来自低钙复发、高尿钙、肾结石、肾钙化和治疗过量。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 388,
    name: 'genetic-hypoparathyroidism-journey.png',
    url: '/images/diseases/genetic-hypoparathyroidism-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling', 'endocrine'],
};

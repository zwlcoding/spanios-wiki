import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMitochodrialEncephalomyopathy: DiseaseDraft = {
  ...entity(5018, 'disease-mitochodrial-encephalomyopathy'),
  name: '线粒体脑肌病',
  nameEn: 'Mitochondrial Encephalomyopathy',
  alias: 'MELAS、MERRF、线粒体脑肌病伴高乳酸血症和卒中样发作',
  icd10Code: 'G31.8',
  slug: 'mitochodrial-encephalomyopathy',
  oneSentence:
    '线粒体脑肌病是一组由线粒体DNA或核DNA变异导致能量代谢障碍的疾病，可影响神经、肌肉、心脏、内分泌等多个系统，常见类型包括 MELAS 和 MERRF。',
  plainName: '身体“发电厂”出问题的遗传病',
  prevalence:
    '线粒体病总体发病率约 1/5,000；其中 MELAS 是最常见的线粒体脑肌病类型，m.3243A>G 突变所致者约 1/200,000-1/400,000。',
  searchIntents: [
    '线粒体脑肌病 症状',
    'MELAS 诊断',
    'MERRF 遗传',
    '线粒体病 治疗',
    '线粒体病 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是线粒体功能障碍引起的一组疾病。线粒体是细胞的“能量工厂”，当它们无法正常工作时，高能量需求的器官（如大脑、肌肉、心脏）最容易受损。常见类型有 MELAS（伴卒中样发作）和 MERRF（伴肌阵挛癫痫）。',
    whoToSeeFirst:
      '出现不明原因的多系统症状（如癫痫、肌无力、听力下降、糖尿病）时，先看神经内科；确诊后常需多学科团队（神经科、心内科、内分泌科、遗传科）共同管理。',
    isGenetic:
      '主要由线粒体DNA突变引起，呈母系遗传；少数由核基因突变引起，呈常染色体隐性或显性遗传。遗传咨询复杂，因突变负荷在不同组织和家庭成员间差异很大。',
    hasTreatment:
      '目前无法治愈，治疗以对症支持和改善线粒体功能为主。部分患者对辅酶Q10、L-精氨酸等有一定反应，但疗效因人而异。',
    commonDelayReason:
      '症状涉及多个系统且差异大，容易被分别当作癫痫、糖尿病、耳聋、心肌病等独立疾病处理，未能识别为同一病因；确诊需要专门的基因检测和肌肉活检。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童或青少年出现不明原因的癫痫、卒中样发作、偏头痛样头痛、呕吐。',
      '运动不耐受、肌无力或肌病表现，尤其伴听力下降、身材矮小或糖尿病。',
      '血乳酸或脑脊液乳酸持续升高，尤其运动后有明显升高。',
      '母系家族中有类似多系统症状、不明原因癫痫、糖尿病或早年听力下降史。',
      '影像学显示不符合血管分布的皮质损伤（“卒中样”病灶）。',
    ],
    commonWrongTurns: [
      '把卒中样发作当作普通脑梗死处理，未考虑线粒体病可能。',
      '癫痫、糖尿病、耳聋等分别在不同专科就诊，未能识别为同一综合征。',
      '把肌无力误认为单纯的肌肉病或过度疲劳。',
      '乳酸升高被忽视或归因于采血技术问题，未进一步排查。',
      '未及时转诊至有神经肌肉病或线粒体病诊治经验的中心。',
    ],
    firstDepartments: [
      '神经内科',
      '儿科神经科（儿童患者）',
      '心内科（伴心脏受累时）',
      '内分泌科（伴糖尿病时）',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '整理症状出现的时间线，特别是神经系统、肌肉和代谢相关症状。',
      '携带既往血乳酸、脑脊液乳酸、肌酸激酶、心电图和心脏超声结果。',
      '带上头部MRI（注意有无不符合血管分布的病灶）和肌肉活检报告（如有）。',
      '详细记录母系家族史，包括不明原因癫痫、糖尿病、听力下降和早年去世史。',
      '向医生确认是否需要线粒体DNA和核基因 panel 检测。',
    ],
    testsToAskAbout: [
      '血乳酸和丙酮酸（静息和运动后），以及乳酸/丙酮酸比值。',
      '脑脊液乳酸。',
      '线粒体DNA检测（常见突变如 m.3243A>G  for MELAS，m.8344A>G for MERRF）。',
      '肌肉活检（组化染色可见破碎红纤维 RRF，COX 染色异常）。',
      '心电图、心脏超声（评估心脏受累）。',
      '听力检查和眼科检查。',
    ],
    questionsForDoctor: [
      '孩子的症状更符合 MELAS、MERRF 还是其他线粒体综合征？',
      '目前的突变负荷与症状严重程度相关吗？未来可能如何变化？',
      '辅酶Q10、L-精氨酸、左旋肉碱等“线粒体鸡尾酒”疗法有哪些证据支持？',
      '癫痫和卒中样发作的急性处理有什么特殊注意事项？',
      '母系家族成员应做哪些筛查和遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>线粒体脑肌病的临床表现高度异质性，因突变类型和突变负荷在不同组织中分布不同而有很大差异。</p><p><strong>MELAS（线粒体脑肌病伴高乳酸血症和卒中样发作）：</strong>典型特征包括：2-15岁起病的卒中样发作（表现为偏瘫、偏盲或皮质盲）、癫痫、复发性偏头痛样头痛、呕吐、身材矮小、听力下降和肌无力。认知功能通常逐渐下降。</p><p><strong>MERRF（肌阵挛癫痫伴破碎红纤维）：</strong>特征为肌阵挛癫痫、共济失调、肌无力、听力下降和痴呆。可伴有多发性脂肪瘤、心肌病和视神经萎缩。</p><p>共同表现还包括：运动不耐受、周围神经病、糖尿病、心肌病、胃肠道动力障碍和眼睑下垂等。</p>',
    diagnosis:
      '<p>诊断需要结合临床表现、生化检查、影像学、肌肉活检和基因检测。血乳酸升高是重要线索，尤其运动后乳酸/丙酮酸比值升高更具提示意义。脑脊液乳酸也常升高。</p><p>MELAS 的 MRI 特征为不符合血管分布的皮质病变，多累及枕叶或顶叶，急性期可见弥散受限。肌肉活检可见破碎红纤维（RRF）和细胞色素c氧化酶（COX）染色异常。</p><p>基因检测是确诊的关键：约 80% 的 MELAS 由 m.3243A>G 突变引起；约 80% 的 MERRF 由 m.8344A>G 突变引起。但突变负荷在不同组织间差异大，血液检测可能漏诊，必要时需检测尿液或肌肉组织。</p>',
    treatment:
      '<p>目前无治愈方法。治疗以对症支持为主，部分患者可能从“线粒体鸡尾酒”中获益，包括辅酶Q10、左旋肉碱、B族维生素、α-硫辛酸等，但证据等级有限。</p><p>L-精氨酸在 MELAS 的卒中样发作急性期和长期预防中有一定研究支持，可改善血流和减少卒中样发作频率。癫痫应按神经科医生建议使用抗癫痫药物，但丙戊酸需谨慎使用（可能加重线粒体功能障碍）。</p><p>心脏、内分泌、听力、视力等多系统并发症需要相应专科管理。避免过度劳累、感染、饥饿和某些可能加重线粒体功能障碍的药物（如丙戊酸、核苷类逆转录酶抑制剂）。</p>',
    longTermCare:
      '<p>长期管理需要多学科团队协作，定期评估：神经功能、认知状态、听力、视力、心脏功能、内分泌功能（尤其血糖）和肾脏功能。</p><p>患者和家属应了解疾病的波动性特点，学会识别急性加重的早期信号（如新发头痛、呕吐、意识改变）。保持健康的生活方式，避免过度疲劳、极端温度和感染。生育问题应提前与遗传咨询讨论。</p>',
    fertilityOrFamily:
      '<p>线粒体DNA突变呈母系遗传：母亲可将突变传递给所有子女，但仅女儿会继续传递给下一代；父亲不传播线粒体病。核基因突变则遵循孟德尔遗传规律。</p><p>由于异质性（突变负荷在不同组织间差异），遗传咨询具有挑战性。产前诊断（羊水或绒毛膜基因检测）和胚胎植入前遗传学诊断（PGD）是可选方案，但无法完全预测子代的临床表现严重程度。</p>',
    emergencySigns:
      '<p>卒中样发作（突发偏瘫、视力丧失、意识障碍）、癫痫持续状态、严重代谢性酸中毒或心力衰竭是急症。应立即急诊就医，并告知医生线粒体病诊断。</p><p>急性期处理包括：抗癫痫治疗（避免丙戊酸）、纠正酸中毒、维持血糖稳定、必要时给予L-精氨酸。卒中样发作不同于普通脑梗死，一般不推荐使用常规溶栓治疗。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-Like Episodes (MELAS)',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1233/',
    },
    {
      name: 'NCBI StatPearls: Melas Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532959/',
    },
    {
      name: 'Orphanet: MELAS',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/550',
    },
    {
      name: 'Orphanet: MERRF',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/551',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>多系统受累：癫痫、卒中样发作、肌无力、听力下降、糖尿病、心肌病、身材矮小等。表现因类型和突变负荷差异很大。</p>',
  diagnosis:
    '<p>结合血/脑脊液乳酸、MRI、肌肉活检（RRF、COX缺陷）和线粒体DNA/核基因检测确诊。</p>',
  treatment:
    '<p>对症治疗为主；部分患者可尝试辅酶Q10、L-精氨酸等；癫痫管理很重要，但需避免丙戊酸等可能加重病情的药物。</p>',
  prognosis:
    '<p>疾病通常进行性进展，早期诊断和多学科管理可改善生活质量；预后与突变类型、突变负荷和受累系统范围有关。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1233/',
  categorySlug: 'neurological',
  charityIds: [61],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3518,
    name: 'mitochodrial-encephalomyopathy-journey.png',
    url: '/images/diseases/mitochodrial-encephalomyopathy-journey.png',
  },
  tagSlugs: ['neurological', 'genetic-counseling', 'mitochondrial'],
};

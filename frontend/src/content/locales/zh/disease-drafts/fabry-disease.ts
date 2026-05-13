import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseFabryDisease: DiseaseDraft = {
  ...entity(27, 'disease-fabry-disease'),
  name: '法布雷病',
  nameEn: 'Fabry Disease',
  alias: 'Fabry病、Anderson-Fabry病、α-半乳糖苷酶A缺乏症',
  slug: 'fabry-disease',
  oneSentence:
    '法布雷病是一种 X 连锁溶酶体贮积病，可累及神经、皮肤、肾脏、心脏、脑血管、眼和胃肠道，常因多系统症状分散而延迟诊断。',
  plainName: '一种会让代谢物在多个器官中逐渐沉积的遗传代谢病',
  prevalence:
    '经典型罕见，晚发型可能更常见但容易漏诊；不同筛查人群的发现率差异很大。',
  searchIntents: [
    '法布雷病 看什么科',
    '手脚烧灼痛 少汗 蛋白尿',
    'Fabry 病 GLA 基因检测',
    '法布雷病 心肌肥厚 肾病',
    '法布雷病 女性会发病吗',
  ],
  quickLook: {
    whatItIs:
      'GLA 基因变异会导致 α-半乳糖苷酶 A 活性不足，使糖脂类物质在细胞内沉积，逐渐影响神经、肾脏、心脏和脑血管等系统。',
    whoToSeeFirst:
      '青少年或成人有肢端烧灼痛、少汗/无汗、血管角质瘤、角膜涡状混浊、原因不明蛋白尿、左心室肥厚或年轻卒中时，可从肾内科、心内科、神经内科或遗传代谢/罕见病门诊切入。',
    isGenetic:
      '是，X 连锁遗传。男性通常更早更重，女性也可能因 X 染色体失活差异出现明显症状。',
    hasTreatment:
      '有特异性治疗和器官保护管理方案，但是否适合、何时开始和如何监测需要专科团队结合基因、酶活、器官受累和当地可及性判断。',
    commonDelayReason:
      '疼痛、胃肠道、皮肤、心脏、肾脏和脑血管症状常分散到不同科室，女性或晚发型表现不典型，更容易多年后才被联系起来。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童或青少年起出现手脚烧灼痛、遇热/运动/发热后加重，伴少汗或无汗。',
      '皮肤有血管角质瘤，尤其在躯干、腹股沟、臀部或大腿根部。',
      '年轻人原因不明蛋白尿、肾功能下降、左心室肥厚、心律失常或卒中/TIA。',
      '眼科发现角膜涡状混浊，同时有疼痛、肾脏或心脏线索。',
      '家族中男性较早出现肾衰、心脏病、卒中，或有已知 GLA 变异。',
    ],
    commonWrongTurns: [
      '肢端疼痛长期按风湿、神经痛或生长痛处理。',
      '蛋白尿、心肌肥厚、卒中分别就诊，未追问皮肤、出汗、疼痛和家族史。',
      '女性酶活性不低后就完全排除法布雷病，没有结合基因检测和临床表现。',
      '只关注特异性治疗，忽略肾脏、心脏、脑血管和心理支持的长期管理。',
    ],
    firstDepartments: [
      '肾内科',
      '心内科',
      '神经内科',
      '皮肤科/眼科（识别线索时）',
      '遗传代谢科/医学遗传科/罕见病门诊',
    ],
    diagnosisChecklist: [
      '整理疼痛、出汗、皮疹、胃肠道、听力、眼部、肾脏、心脏和脑血管症状。',
      '收集尿蛋白、肾功能、心电图、心脏超声/MRI、脑 MRI、眼科和皮肤科资料。',
      '男性询问 α-Gal A 酶活检测；女性或疑难病例重点询问 GLA 基因检测。',
      '请医生解释 GLA 变异是否致病，以及是否需要家系筛查。',
      '确认肾、心、脑血管等器官受累基线和随访计划。',
    ],
    testsToAskAbout: [
      'α-半乳糖苷酶 A 活性检测。',
      'GLA 基因检测和家系级联检测。',
      'Lyso-Gb3/相关生物标志物（医生认为适合时）。',
      '尿蛋白、eGFR、肾脏评估。',
      '心电图、动态心电图、心脏超声或心脏 MRI。',
      '脑 MRI、眼科裂隙灯、听力和神经病理性疼痛评估。',
    ],
    questionsForDoctor: [
      '我的表现更像经典型还是晚发型法布雷病？证据是什么？',
      '我的 GLA 变异如何解释？家人从谁开始筛查？',
      '目前哪些器官已经受累？需要多久复查？',
      '特异性治疗是否适合我？治疗目标和监测指标是什么？',
      '疼痛、肾脏、心脏、卒中风险和心理压力分别怎么管理？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>法布雷病可表现为手脚烧灼痛、少汗或无汗、血管角质瘤、角膜涡状混浊、腹痛腹泻、听力下降、蛋白尿或肾功能下降、左心室肥厚、心律失常、胸痛、年轻卒中或白质病变。男性经典型通常较早出现，女性和晚发型可能更隐匿。</p>',
    diagnosis:
      '<p>诊断需要结合多系统线索、家族史、α-半乳糖苷酶 A 活性、GLA 基因检测和器官评估。男性酶活降低有重要提示意义；女性酶活可能正常，不能仅凭酶活排除。基因结果需要结合临床和数据库解释。</p>',
    treatment:
      '<p>治疗包括特异性治疗、肾脏和心血管保护、疼痛管理、卒中风险管理、胃肠道和心理支持。是否使用酶替代、药物伴侣或其他方案，需要由熟悉法布雷病的团队根据分型、器官受累和可及性决定。</p>',
    longTermCare:
      '<p>长期随访通常需要肾内科、心内科、神经内科、眼科、皮肤科和遗传咨询协作。重点监测尿蛋白/eGFR、心脏结构和节律、脑血管风险、疼痛、听力、生活质量和家族筛查进展。</p>',
    fertilityOrFamily:
      '<p>法布雷病为 X 连锁遗传。男性患者会把 GLA 变异传给所有女儿而不会传给儿子；女性患者每次妊娠将变异传给子女的概率通常为 50%。有生育计划时可通过遗传咨询了解产前诊断或胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>突发偏瘫、言语不清、剧烈胸痛、晕厥、严重心悸、急性呼吸困难、尿量明显减少或肾功能快速恶化，应立即急诊，并告知医生疑似或确诊法布雷病及既往心肾脑血管受累情况。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Fabry Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
    },
    {
      name: 'MedlinePlus Genetics: Fabry disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/fabry-disease/',
    },
  ],
  symptoms:
    '<p>可表现为肢端烧灼痛、少汗、血管角质瘤、角膜涡状混浊、蛋白尿、心肌肥厚、心律失常、胃肠道症状或年轻卒中。</p>',
  diagnosis:
    '<p>评估包括 α-Gal A 酶活、GLA 基因检测、Lyso-Gb3/相关指标和肾、心、脑、眼、皮肤等器官受累检查。</p>',
  treatment:
    '<p>管理包括特异性治疗评估、器官保护、疼痛和心肾脑血管风险管理，以及家系筛查。</p>',
  prognosis:
    '<p>早期识别和器官受累监测有助于减少不可逆损害；预后取决于分型、治疗时机和心肾脑血管受累程度。</p>',
  sourceName: 'GeneReviews: Fabry Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 326,
    name: 'fabry-disease-journey.png',
    url: '/images/diseases/fabry-disease-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicHypogonadotropicHypogonadism: DiseaseDraft = {
  ...entity(55, 'disease-idiopathic-hypogonadotropic-hypogonadism'),
  name: '特发性低促性腺激素性性腺功能减退症',
  nameEn: 'Idiopathic Hypogonadotropic Hypogonadism',
  alias:
    'IHH、先天性低促性腺激素性性腺功能减退症（CHH）、卡尔曼综合征（KS，伴嗅觉异常）、嗅觉正常的IHH（nIHH）',
  slug: 'idiopathic-hypogonadotropic-hypogonadism',
  oneSentence:
    '特发性低促性腺激素性性腺功能减退症是一种因先天性下丘脑促性腺激素释放激素（GnRH）神经元功能受损，导致促性腺激素分泌不足、进而引起性腺功能低下的罕见内分泌疾病。',
  plainName: '特发性低促性腺激素性性腺功能减退症',
  prevalence:
    'IHH总体发病率约1~10/100,000。卡尔曼综合征（KS）约占全部IHH 患者的40%~60%，在芬兰患病率约1/48,000，男性多于女性。部分KS 患者可出现自发缓解（约10%~20%）。',
  quickLook: {
    whatItIs:
      '特发性低促性腺激素性性腺功能减退症（idiopathic hypogonadotropic hypogonadism，IHH）是一种先天性下丘脑-垂体-性腺轴功能障碍性疾病。由于下丘脑促性腺激素释放激素（GnRH）神经元功能受损，GnRH合成、分泌或作用障碍，导致垂体促性腺激素（LH、FSH）分泌减少，进而引起性腺功能不足。根据是否伴嗅觉异常分为两类：伴有嗅觉减退或丧失的称为卡尔曼综合征（Kallmann syndrome，KS）；嗅觉正常者称为normosmic IHH（nIHH）。IHH是一种遗传异质性疾病，已发现超过30个相关基因。',
    whoToSeeFirst:
      '儿童期因身高落后或性发育延迟就诊时，建议在小儿内分泌科或小儿遗传代谢科评估。青春期无性征发育就诊时，建议就诊小儿内分泌科或生殖内分泌科。成年后因不育或性功能障碍就诊，可就诊男科/泌尿外科（男性）或生殖内分泌科（女性）。嗅觉异常者建议同时就诊耳鼻喉科。有家族史者可考虑遗传咨询。',
    isGenetic:
      '是，IHH是一种遗传异质性疾病，已发现多种基因突变可致病，包括GNRH1、GNRHR、KISS1、KISS1R、FGFR1、PROK2、PROKR2、CHD7、TAC3、TACR3等。大部分为常染色体显性或隐性遗传，少数为X连锁遗传（如ANOS1/KAL1基因突变导致的卡尔曼综合征）。约40%~50%的家族性患者和约17%的散发患者可检测到已知致病基因突变。',
    hasTreatment:
      '有青春期诱导、长期性激素替代和生育诱导治疗路径。治疗目标不同，方案也不同，需由内分泌或生殖内分泌专科制定。',
    commonDelayReason:
      'IHH起病隐匿，在青春期前难以识别。部分患者因症状不典型（如部分性性腺功能减退）而被漏诊。卡尔曼综合征的嗅觉减退有时被认为是鼻炎或感冒等而被忽视。基层医生对青春期发育延迟的病因鉴别经验不足，延误了针对性检查。部分女性患者因闭经就诊，但常被误认为功能性闭经或多囊卵巢综合征。',
  },
  patientJourney: {
    whenToSuspect: [
      '青春期无第二性征发育（男性无睾丸增大、阴茎发育，无阴毛腋毛生长；女性无乳房发育、无月经来潮）',
      '生长速度正常但青春期无发育，骨龄落后于实际年龄',
      '嗅觉减退或完全丧失（尤其在青春期前后出现）',
      '男性有小阴茎、隐睾病史',
      '原发性闭经（女性14岁后无月经来潮且无第二性征发育）',
      '有促性腺激素性性腺功能减退症家族史',
      '成年后出现性欲减退、勃起功能障碍、不孕',
    ],
    commonWrongTurns: [
      "将青春期发育延迟误认为体质性青春期发育延迟（'晚长'），未进行激素检查",
      '卡尔曼综合征的嗅觉减退被误认为鼻炎、感冒，延误诊断',
      '女性患者被误诊为多囊卵巢综合征或功能性闭经，未进行系统性激素评估',
      '仅关注性腺功能，忽视嗅觉筛查和垂体影像学检查',
      '对男性小阴茎、隐睾仅进行局部处理，未排查下丘脑-垂体-性腺轴问题',
    ],
    firstDepartments: [
      '小儿内分泌科或小儿遗传代谢科（儿童/青少年患者）',
      '生殖内分泌科（青春期及成年患者）',
      '男科/泌尿外科（男性患者）',
      '耳鼻喉科（存在嗅觉障碍时）',
      '医学遗传科或生殖医学科（遗传咨询和家系分析）',
    ],
    diagnosisChecklist: [
      '详细病史：生长发育史、性发育史、嗅觉史、家族史',
      '体格检查：身高、体重、身高增长速度、第二性征分期（Tanner分期）、嗅觉测试',
      '基础激素检测：LH、FSH、睾酮（男性）、雌二醇（女性）、抑制素B',
      'GnRH激发试验：评估垂体促性腺激素储备功能',
      '嗅觉测试和鼻窦CT/MRI：评估嗅觉功能和嗅球发育',
      '脑垂体MRI：排除颅内占位性病变或发育异常',
      '基因检测：靶向基因 panel 或全外显子测序（可明确遗传学诊断）',
      '骨龄评估',
      '睾丸/卵巢超声（必要时）',
    ],
    testsToAskAbout: [
      '性激素六项（LH、FSH、睾酮/雌二醇）',
      'GnRH激发试验',
      '嗅觉测试',
      '脑垂体MRI',
      '基因检测（IHH相关基因）',
      '骨龄X线片',
    ],
    questionsForDoctor: [
      '这更像体质性青春期延迟，还是低促性腺激素性性腺功能减退？依据是什么？',
      '是否伴嗅觉异常或其他综合征线索？需要做哪些影像、激素和基因检查？',
      '当前治疗目标是青春期诱导、长期替代，还是未来生育？',
      '治疗效果、副作用和骨健康如何监测？',
      '家属和未来生育计划需要哪些遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      'IHH临床表现取决于发病年龄和严重程度。婴儿期男性患儿可出现小阴茎、隐睾，女性患儿多无特异性表现。青春期主要表现为第二性征缺失：男性无睾丸增大、阴茎发育，无阴毛腋毛生长，音色不变粗；女性无乳房发育，无月经来潮。可伴嗅觉减退或丧失（卡尔曼综合征），也可出现其他非特异性表现如唇裂、腭裂、听力障碍、肾发育异常（部分综合征型）。骨龄常落后于实际年龄。成年患者表现为性腺功能低下相关症状：性欲减退、勃起功能障碍（男性）、闭经（女性）、不育、骨密度下降、肌肉量减少等。',
    diagnosis:
      'IHH诊断需综合临床表现、激素检测和影像学检查。激素特征性表现为促性腺激素（LH、FSH）和性激素（睾酮/雌二醇）水平均低。GnRH激发试验显示垂体对GnRH反应低下或正常。需排除其他原因导致的低促性腺激素性性腺功能减退症（如高泌乳素血症、下丘脑-垂体肿瘤、营养不良、慢性全身性疾病等）。脑垂体MRI排除结构性病变。嗅觉测试和/或嗅球MRI评估嗅觉功能。基因检测可明确遗传学诊断并指导家系筛查。GnRH基因及其受体基因突变检测对诊断有重要意义。',
    treatment:
      '治疗按目标分为青春期诱导、长期性激素替代和生育诱导。男性、女性和不同年龄阶段方案不同；是否使用促性腺激素、脉冲式 GnRH 或性激素替代，需要由内分泌/生殖内分泌团队结合骨龄、激素水平、性腺体积、生育计划和合并症决定。患者不应自行购买或调整激素。',
    longTermCare:
      'IHH 患者需要长期随访管理。治疗期间需定期监测激素水平、第二性征发育情况、生化指标和骨密度。促生育治疗患者需在生殖医学中心规律就诊，监测卵泡发育和精子生成。停止治疗后需每年监测性激素水平和睾丸/卵巢功能，警惕自发性逆转。长期性激素缺乏可导致骨质疏松，需补充钙剂和维生素D，适度负重运动。关注患者心理健康，部分患者因性发育问题和生育困难产生焦虑或抑郁。遗传咨询对计划生育有重要价值。',
    fertilityOrFamily:
      '大多数IHH 患者经治疗后可以生育亲生子女。男性患者接受hCG+/-FSH治疗后，约70%~90%可出现精子生成，其中部分可自然受孕，其余可借助辅助生殖技术。约10%~20%的患者在停止治疗后出现自发性逆转（恢复内源性GnRH分泌），可能与基因突变类型和既往治疗有关。遗传咨询建议已知基因突变携带者在计划妊娠前进行遗传咨询，了解遗传风险和产前诊断选项。',
    emergencySigns:
      'IHH通常为慢性疾病，很少出现需要紧急处理的情况。但出现以下情况建议及时就诊：突然出现剧烈头痛、视力改变或视野缺损（需排除垂体卒中或颅内肿瘤）；出现严重低血糖或电解质紊乱（垂体功能危象）；促生育治疗期间出现严重恶心呕吐、腹胀或OHSS（卵巢过度刺激综合征）表现；突然出现嗅觉丧失加重需排查鼻窦或颅内病变。',
  },
  sources: [
    {
      name: 'GeneReviews: Isolated Gonadotropin-Releasing Hormone Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1334/',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Hypogonadotropic hypogonadism',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/000390.htm',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  sourceName: 'GeneReviews: Isolated Gonadotropin-Releasing Hormone Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1334/',
  categorySlug: 'metabolic',
  charityIds: [7],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 354,
    name: 'idiopathic-hypogonadotropic-hypogonadism-journey.png',
    url: '/images/diseases/idiopathic-hypogonadotropic-hypogonadism-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
};

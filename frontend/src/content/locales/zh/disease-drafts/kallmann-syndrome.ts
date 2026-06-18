import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseKallmannSyndrome: DiseaseDraft = {
  ...entity(3, 'disease-kallmann-syndrome'),
  name: '卡尔曼综合征',
  nameEn: 'Kallmann Syndrome',
  alias: '低促性腺激素性性腺功能减退伴嗅觉减退',
  icd10Code: 'E23.0',
  slug: 'kallmann-syndrome',
  oneSentence:
    '卡尔曼综合征常表现为青春期迟迟不来、第二性征发育不足，并伴有嗅觉减退或缺失，确诊通常需要内分泌评估和遗传相关检查。',
  plainName: '青春期发育延迟伴嗅觉减退',
  prevalence:
    '估计男性约 1/30,000，女性约 1/120,000；实际诊断率可能受地区和就医路径影响。',
  searchIntents: [
    '卡尔曼综合征 看什么科',
    '青春期不发育 嗅觉差',
    '低促性腺激素性性腺功能减退怎么查',
    '卡尔曼综合征 能不能生育',
    '卡尔曼综合征 基因检测',
  ],
  quickLook: {
    whatItIs:
      '这是一类低促性腺激素性性腺功能减退，身体缺少启动青春期发育所需的激素信号，部分患者同时有嗅觉减退或没有嗅觉。',
    whoToSeeFirst:
      '优先看内分泌科；儿童或青少年可先看儿科内分泌，涉及生育时再联合生殖医学科或男科/妇科。',
    isGenetic:
      '可能与遗传有关，但不同患者的基因原因不完全一样，家族成员是否需要评估应由医生结合病史判断。',
    hasTreatment:
      '通常可以通过激素替代诱导青春期发育；有生育需求时，部分患者可在专科医生指导下进行促性腺激素或脉冲 GnRH 治疗。',
    commonDelayReason:
      '很多人会把它当作“发育晚”“体质问题”或单纯不孕处理，忽略了嗅觉、激素轴和垂体/下丘脑评估。',
  },
  patientJourney: {
    whenToSuspect: [
      '男孩到 14 岁、女孩到 13 岁仍缺少明显青春期发育迹象。',
      '青春期发育明显落后，同时从小嗅觉很差或闻不到气味。',
      '成年后因性腺功能低下、不孕或性激素水平异常才被发现。',
      '男婴曾有小阴茎、隐睾，或青春期后睾丸体积仍明显偏小。',
    ],
    commonWrongTurns: [
      '只反复补营养、等待自然发育，没有做性激素和促性腺激素检查。',
      '只看生殖问题，没有回头评估青春期发育史和嗅觉问题。',
      '把低睾酮或月经问题当成单一问题处理，没有进一步查下丘脑-垂体-性腺轴。',
      '知道自己闻不到气味，但没有把嗅觉问题和青春期延迟联系起来。',
    ],
    firstDepartments: ['内分泌科', '儿科内分泌', '生殖医学科'],
    diagnosisChecklist: [
      '整理青春期发育时间线、身高体重变化、嗅觉情况和家族史。',
      '准备既往性激素、促性腺激素、垂体相关激素、骨龄或影像检查结果。',
      '向医生确认是否需要垂体/下丘脑 MRI、嗅觉评估和基因检测。',
    ],
    testsToAskAbout: [
      'LH、FSH、睾酮或雌二醇等性腺轴激素。',
      '垂体和下丘脑影像检查。',
      '嗅觉评估、骨龄评估和相关基因检测。',
      '是否需要筛查肾脏发育、听力、唇腭裂、牙齿发育或镜像运动等伴随问题。',
    ],
    questionsForDoctor: [
      '我的情况更像体质性发育延迟，还是低促性腺激素性性腺功能减退？',
      '我现在的治疗目标是诱导青春期、长期替代，还是未来生育？',
      '治疗期间需要多久复查一次激素、骨密度或生育相关指标？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>常见线索包括青春期启动延迟、第二性征发育不足、性腺功能减退、不孕或生育困难，以及嗅觉减退或缺失。男性可表现为胡须少、声音不变粗、睾丸体积小；女性可表现为乳房发育不足或原发闭经。部分患者还可能合并单侧肾发育异常、唇腭裂、听力问题、牙齿发育异常或双手镜像运动。不同患者表现差异很大，不能只靠单个症状判断。</p>',
    diagnosis:
      '<p>评估通常包括青春期发育史、家族史、体格检查、LH/FSH 与睾酮或雌二醇等激素检测、嗅觉评估、骨龄、垂体/下丘脑及嗅球相关影像，以及必要时的染色体核型或基因检测。医生还会排除体质性发育延迟、垂体病变、营养不良和慢性疾病等原因。</p>',
    treatment:
      '<p>治疗以性激素替代、诱导青春期发育和生育相关治疗为主，需要内分泌专科长期管理。有生育需求时，治疗安排和随访周期通常与单纯激素替代不同。</p>',
    longTermCare:
      '<p>长期管理通常关注第二性征维持、骨密度、代谢状态、心理压力和生育计划。嗅觉缺失者还要特别注意燃气、烟雾和变质食物等安全风险。不要自行停药或更改剂量。</p>',
    fertilityOrFamily:
      '<p>部分患者可通过促性腺激素等治疗获得生育机会。若怀疑遗传因素，建议在医生指导下进行遗传咨询，而不是只依据单个基因结果做家庭决策。</p>',
    emergencySigns:
      '<p>如果青春期明显延迟并伴随嗅觉减退、隐睾/小阴茎病史、原发闭经、不孕，或检查发现性激素和促性腺激素均偏低，建议尽快到内分泌专科评估。若已经开始治疗但出现明显情绪困扰、骨痛骨折风险、严重乏力或生育治疗中的异常反应，也应及时复诊。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Kallmann syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/kallmann-syndrome/',
    },
    {
      name: 'NCBI Bookshelf: Kallmann Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538210/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>典型表现包括青春期发育延迟、性腺功能减退、不孕或生育困难，以及嗅觉减退或缺失。</p>',
  diagnosis:
    '<p>评估通常包括性激素和促性腺激素检测、嗅觉评估、垂体/下丘脑影像、骨龄和相关基因检测。</p>',
  treatment:
    '<p>治疗以性激素替代、诱导青春期发育和生育相关治疗为主，需要内分泌专科长期管理。</p>',
  prognosis:
    '<p>多数患者经规范治疗可获得良好第二性征发育，部分患者可通过促性腺激素治疗实现生育。</p>',
  categorySlug: 'genetic-developmental',
  charityIds: [7, 8],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 301,
    name: 'kallmann-syndrome-journey.png',
    url: '/images/diseases/kallmann-syndrome-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
};

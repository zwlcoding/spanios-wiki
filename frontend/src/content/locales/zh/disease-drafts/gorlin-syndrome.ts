import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGorlinSyndrome: DiseaseDraft = {
  ...entity(2039, 'disease-gorlin-syndrome'),
  name: '高林综合征',
  nameEn: 'Gorlin syndrome',
  alias:
    '痣样基底细胞癌综合征、NBCCS、基底细胞痣综合征、第二批罕见病目录第 39 项',
  slug: 'gorlin-syndrome',
  oneSentence:
    '高林综合征是一种遗传性肿瘤易感综合征，常见表现包括较年轻时反复出现基底细胞癌、颌骨角化囊肿、手掌脚掌小凹陷和骨骼发育特点，需要长期皮肤、口腔颌面和遗传随访。',
  plainName: '容易长基底细胞癌和颌骨囊肿的遗传性肿瘤易感综合征',
  prevalence:
    '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计约每 31,000 人 1 例，但轻症或家族内表现差异会影响识别。',
  quickLook: {
    whatItIs:
      '高林综合征也叫痣样基底细胞癌综合征，常与 PTCH1 或 SUFU 等基因有关。它不是单一皮肤病，而是皮肤、颌骨、骨骼、神经系统和生殖系统等多系统的肿瘤易感状态。',
    whoToSeeFirst:
      '年轻时多发基底细胞癌、反复颌骨囊肿、手掌脚掌小凹陷，或家族中多人有类似表现，应到皮肤科、口腔颌面外科、医学遗传科或肿瘤遗传门诊评估。',
    isGenetic:
      '多为常染色体显性遗传，也可能是新发变异。确诊后建议遗传咨询，以安排家属检测、儿童监测和婚育计划。',
    hasTreatment:
      '没有一次性治愈的方法，管理重点是防晒、减少不必要放射线暴露、早期发现和处理基底细胞癌、颌骨囊肿及其他相关肿瘤风险。',
    commonDelayReason:
      '常被分开看成普通皮肤肿物、牙源性囊肿或骨骼小问题。把“年轻、多发、反复、家族史”连在一起看，才更容易想到综合征。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童、青少年或年轻成人反复出现基底细胞癌，或病灶数量明显多于同龄人。',
      '反复颌骨角化囊肿、牙齿萌出异常、面部骨骼特点，合并皮肤肿瘤或掌跖小凹陷。',
      '家族中有人有多发基底细胞癌、颌骨囊肿、儿童期髓母细胞瘤或明确 PTCH1/SUFU 变异。',
      '影像提示颅内镰钙化、肋骨/脊柱异常，或同时有卵巢纤维瘤、心脏纤维瘤等线索。',
    ],
    commonWrongTurns: [
      '每次只切除单个皮肤肿瘤，没有追问年龄、数量、颌骨囊肿和家族史。',
      '颌骨囊肿反复处理，但没有转诊遗传或皮肤肿瘤团队。',
      '未意识到放疗和过度影像辐射可能增加皮肤肿瘤风险。',
      '确诊后没有为儿童、兄弟姐妹或子女制定家系检测和监测计划。',
    ],
    firstDepartments: ['皮肤科', '口腔颌面外科', '医学遗传科', '肿瘤遗传门诊'],
    diagnosisChecklist: [
      '列出所有基底细胞癌、可疑皮肤病灶、病理报告和治疗时间。',
      '带牙科全景片、颌骨 CT/MRI、颌骨囊肿病理和手术记录。',
      '记录掌跖小凹陷、头围、骨骼异常、儿童期肿瘤史和家族史。',
      '带既往基因检测结果；如没有，准备讨论 PTCH1、SUFU 等基因检测。',
    ],
    testsToAskAbout: [
      '皮肤全身检查和可疑病灶皮肤镜/活检。',
      '口腔颌面影像用于寻找或随访颌骨角化囊肿。',
      'PTCH1、SUFU 等基因检测及家系验证。',
      '按年龄和基因类型评估是否需要髓母细胞瘤、卵巢纤维瘤、心脏纤维瘤或骨骼相关筛查。',
    ],
    questionsForDoctor: [
      '我的表现更像 PTCH1 相关还是 SUFU 相关？监测重点有什么不同？',
      '我应该多久做一次皮肤和口腔颌面复查？哪些检查要避免不必要辐射？',
      '家属和孩子是否需要检测？阳性但没有症状时要怎么随访？',
      '基底细胞癌太多时，除了手术还有哪些局部或全身治疗选择？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>高林综合征的表现差异很大。常见线索包括年轻时出现多发或反复基底细胞癌、颌骨角化囊肿、手掌脚掌小凹陷、头围偏大、肋骨或脊柱发育异常、面部骨骼特点。</p><p>部分患者可有儿童期髓母细胞瘤风险，尤其需要结合基因类型评估；女性可出现卵巢纤维瘤，少数儿童可有心脏纤维瘤。不是每个人都会出现所有表现。</p>',
    diagnosis:
      '<p>诊断需要把皮肤病理、颌骨病变、体征、影像、家族史和基因检测综合判断。PTCH1 是最常见相关基因，SUFU 等基因也可导致类似综合征，但肿瘤风险谱可能不同。</p><p>医生会与普通散发基底细胞癌、其他颌骨囊肿综合征、Sotos 综合征、Bazex-Dupre-Christol 综合征等相似情况鉴别。明确基因结果有助于家系检测和个体化监测。</p>',
    treatment:
      '<p>治疗不是一次完成，而是长期监测和分阶段处理。皮肤管理包括严格防晒、定期全身皮肤检查、早期活检和局部治疗或手术；多发或难治基底细胞癌可由专科讨论 Hedgehog 通路抑制剂等方案。</p><p>颌骨囊肿需要口腔颌面外科随访和处理，目标是在降低复发的同时保护牙齿和颌骨发育。应尽量避免不必要的放射线暴露，特别是儿童和皮肤肿瘤多发者。</p>',
    longTermCare:
      '<p>随访通常涉及皮肤科、口腔颌面外科、医学遗传科、儿科、妇科或神经肿瘤团队。复查计划应按年龄、基因类型、既往肿瘤和家族史制定。</p><p>患者和家属需要学习识别新的皮肤病灶、坚持防晒、保存病理和影像资料，并在更换医生时主动说明高林综合征诊断。</p>',
    fertilityOrFamily:
      '<p>高林综合征多为常染色体显性遗传，患者每次妊娠将致病变异传给子女的概率通常为 50%。遗传咨询可讨论家属检测、儿童监测、产前诊断或胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>儿童出现持续头痛、呕吐、走路不稳、眼球异常运动或意识改变，应尽快急诊排查颅内问题。皮肤肿物快速增大、出血不止、感染，或颌面部肿胀疼痛明显，也应及时就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Gorlin syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/gorlin-syndrome/',
    },
  ],
  symptoms:
    '<p>常见年轻时多发或反复基底细胞癌、颌骨角化囊肿、掌跖小凹陷、头围偏大、骨骼发育特点；部分患者有儿童期髓母细胞瘤或卵巢纤维瘤风险。</p>',
  diagnosis:
    '<p>诊断综合皮肤和颌骨病史、病理、影像、体征、家族史和 PTCH1/SUFU 等基因检测，并按基因结果制定家系检测和监测方案。</p>',
  treatment:
    '<p>管理以长期监测为主，包括防晒、定期皮肤检查、处理基底细胞癌和颌骨囊肿，必要时讨论 Hedgehog 通路抑制剂，并尽量避免不必要放射线暴露。</p>',
  prognosis:
    '<p>通过早期识别和持续监测，许多风险可被及时处理；关键是长期皮肤和口腔颌面随访、家属检测及减少可避免的放射线暴露。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 393,
    name: 'gorlin-syndrome-journey.png',
    url: '/images/diseases/gorlin-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
};

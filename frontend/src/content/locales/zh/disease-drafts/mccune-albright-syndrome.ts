import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMccuneAlbrightSyndrome: DiseaseDraft = {
  ...entity(5015, 'disease-mccune-albright-syndrome'),
  name: 'McCune-Albright综合征',
  nameEn: 'McCune-Albright Syndrome',
  alias: 'MAS、多骨性纤维发育不良、第一批罕见病目录第 69 项',
  slug: 'mccune-albright-syndrome',
  oneSentence:
    'McCune-Albright综合征是一种罕见的体细胞嵌合性疾病，因 GNAS 基因突变导致骨纤维发育不良、皮肤咖啡牛奶斑和内分泌功能亢进（性早熟、甲亢等），需多学科综合管理。',
  plainName: '一种同时影响骨骼、皮肤和内分泌系统的罕见遗传病',
  prevalence:
    '患病率约 1/100,000–1,000,000；男女均可发病，但女性性早熟表现更突出；无种族差异。',
  searchIntents: [
    'McCune-Albright综合征 症状',
    'MAS 骨纤维发育不良',
    'McCune-Albright 性早熟',
    'MAS 咖啡牛奶斑',
    'McCune-Albright综合征 治疗',
  ],
  quickLook: {
    whatItIs:
      'GNAS 基因体细胞突变导致细胞信号通路持续激活，引起骨、皮肤、内分泌等多系统异常；属于嵌合性疾病，不是典型遗传病。',
    whoToSeeFirst:
      '儿童出现不规则边界的大片咖啡牛奶斑、骨痛或畸形、女孩过早乳房发育或月经来潮时，应到儿科内分泌科或遗传科就诊。',
    isGenetic:
      '体细胞嵌合突变（GNAS 基因），通常在胚胎早期发生；绝大多数病例为散发，不遗传给父母或后代；极少数家族性病例报道。',
    hasTreatment:
      '多学科综合管理：双膦酸盐治疗骨病；芳香化酶抑制剂延缓性早熟；手术矫形骨折或畸形；药物控制甲亢等。',
    commonDelayReason:
      '咖啡牛奶斑被误认为普通胎记；骨痛或骨折归因于外伤或缺钙；女孩性早熟未进一步检查骨龄和盆腔超声。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿或婴儿期出现不规则、边界不规则（"缅因州海岸"样）大片咖啡牛奶斑。',
      '儿童期反复骨折、骨痛或骨骼畸形，X 线显示骨纤维发育不良（磨玻璃样改变）。',
      '女孩 8 岁前出现乳房发育、阴毛生长或月经来潮（外周性性早熟）。',
      '甲状腺肿大伴功能亢进、生长激素分泌过多导致肢端肥大症。',
      '新生儿期出现库欣综合征表现（罕见但严重）。',
    ],
    commonWrongTurns: [
      '把大片咖啡牛奶斑当作普通胎记，未注意其不规则边界。',
      '把反复骨折当作单纯骨质疏松或外伤，未做骨活检或基因检测。',
      '把女孩性早熟当作中枢性性早熟，用 GnRH 激动剂治疗无效。',
      '骨纤维发育不良活检误诊为骨肿瘤而行不必要手术。',
    ],
    firstDepartments: [
      '儿科内分泌科',
      '骨科（骨病/骨折管理）',
      '皮肤科（咖啡牛奶斑评估）',
      '医学遗传科',
      '放射科（骨病影像学评估）',
    ],
    diagnosisChecklist: [
      '详细记录皮肤斑块出现时间、形态和分布。',
      '骨骼 X 线/CT：长骨磨玻璃样改变、骨膨胀变形、病理性骨折。',
      '骨活检：纤维骨组织替代正常骨组织（确诊骨纤维发育不良）。',
      '内分泌评估：性激素、甲状腺功能、生长激素、皮质醇、骨龄片。',
      '盆腔超声（女孩）：卵巢滤泡囊肿（提示外周性性早熟）。',
      'GNAS 基因突变检测（突变细胞比例影响检出率）。',
    ],
    testsToAskAbout: [
      '骨骼 X 线/CT/MRI。',
      '骨活检。',
      '内分泌全套（性激素、甲状腺、生长激素、皮质醇）。',
      '骨龄片。',
      '盆腔超声（女孩）。',
      'GNAS 基因检测。',
    ],
    questionsForDoctor: [
      '孩子的 GNAS 突变检出率是多少？',
      '骨纤维发育不良累及哪些骨骼？骨折风险有多大？',
      '性早熟需要药物治疗吗？用什么药？',
      '双膦酸盐治疗的疗程和副作用是什么？',
      '需要多久复查一次骨密度和内分泌指标？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>经典三联征包括：1）骨纤维发育不良（单骨或多骨性），表现为骨痛、病理性骨折、骨骼畸形（如股骨"牧羊杖"畸形、面骨不对称）；2）皮肤咖啡牛奶斑，特点是边界不规则、呈锯齿状（"缅因州海岸"样），通常位于病变骨骼同侧；3）内分泌功能亢进，最常见的是外周性性早熟（女孩 8 岁前乳房发育和月经来潮，由卵巢自主滤泡囊肿引起），其他包括甲状腺功能亢进、生长激素过多（肢端肥大症/巨人症）、库欣综合征、甲状旁腺功能亢进和磷酸盐尿性佝偻病。</p>',
    diagnosis:
      '<p>诊断依据典型的三联征（骨纤维发育不良+咖啡牛奶斑+内分泌亢进）。骨骼影像学（X 线或 CT）显示长骨膨胀性磨玻璃样病变伴皮质变薄。骨活检可见纤维组织替代正常骨小梁，无恶性特征。内分泌评估确定亢进类型：女孩盆腔超声常发现卵巢自主滤泡囊肿。GNAS 基因突变检测可支持诊断，但由于是体细胞嵌合突变，外周血检出率较低（约 20–50%），病变组织（骨、皮肤、卵巢）检出率更高。需与神经纤维瘤病 1 型（NF1，咖啡牛奶斑边界规则）、骨纤维发育不良单骨型、Albright 遗传性骨营养不良等鉴别。</p>',
    treatment:
      '<p>多学科综合管理。骨病：双膦酸盐（帕米膦酸二钠或唑来膦酸）可减轻骨痛、降低骨折风险；严重骨骼畸形或反复骨折需矫形手术。性早熟：芳香化酶抑制剂（如来曲唑）可延缓骨龄进展、改善最终身高；中枢性性早熟药物（GnRH 激动剂）对 MAS 外周性性早熟无效。甲状腺功能亢进：抗甲状腺药物或手术/放射性碘治疗。生长激素过多：生长抑素类似物或手术。库欣综合征：肾上腺切除术（新生儿型常需紧急手术）。磷酸盐尿性佝偻病：补充磷酸盐和活性维生素 D。定期监测骨密度和内分泌功能。</p>',
    longTermCare:
      '<p>需终身多学科随访，包括儿科内分泌科、骨科、皮肤科和放射科。监测骨病进展（每年骨骼影像学）、内分泌状态（每年全套激素检测）、骨密度和生长发育。注意恶性转化风险：骨纤维发育不良可恶变为骨肉瘤或纤维肉瘤（发生率约 0.5–4%），出现新发骨痛或影像学变化需警惕。患者教育包括避免外伤（易骨折部位）、坚持用药、定期复查和识别恶性转化征兆。</p>',
    fertilityOrFamily:
      '<p>绝大多数病例为散发的体细胞嵌合突变，不遗传给父母或后代。极少数家族性病例与种系 GNAS 突变有关。由于一般不累及生殖细胞，患者的后代通常不受影响。产前诊断应用有限，但若怀疑种系突变可考虑胚胎植入前遗传学检测。</p>',
    emergencySigns:
      '<p>病理性骨折、严重骨痛伴发热（怀疑恶性转化）、严重高血压（甲亢危象或库欣综合征）、新生儿严重低血糖/低血压（库欣综合征）需要立即就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: McCune-Albright Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK274564/',
    },
    {
      name: 'NORD: McCune-Albright Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/mccune-albright-syndrome/',
    },
  ],
  symptoms:
    '<p>骨纤维发育不良（骨痛、骨折、畸形）、不规则边界咖啡牛奶斑、外周性性早熟、甲亢、肢端肥大症、库欣综合征。</p>',
  diagnosis:
    '<p>典型三联征+骨骼磨玻璃样改变+骨活检；GNAS 基因突变检测支持诊断（病变组织检出率更高）。</p>',
  treatment:
    '<p>双膦酸盐治疗骨病；芳香化酶抑制剂控制性早熟；手术矫形和内分泌亢进对症处理；监测恶性转化。</p>',
  prognosis:
    '<p>早期多学科管理可改善生活质量；骨病在青春期后可能稳定；性早熟和内分泌亢进可控；恶性转化是长期风险。</p>',
  sourceName: 'GeneReviews: McCune-Albright Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK274564/',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5015,
    name: 'mccune-albright-syndrome-journey.png',
    url: '/images/diseases/mccune-albright-syndrome-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog'],
};

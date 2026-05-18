import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLysinuricProteinIntolerance: DiseaseDraft = {
  ...entity(5011, 'disease-lysinuric-protein-intolerance'),
  name: '赖氨酸尿蛋白不耐受症',
  nameEn: 'Lysinuric Protein Intolerance',
  alias: 'LPI、二碱基氨基酸尿症、第一批罕见病目录第 65 项',
  slug: 'lysinuric-protein-intolerance',
  oneSentence:
    '赖氨酸尿蛋白不耐受症是一种常染色体隐性遗传的氨基酸转运障碍，因 SLC7A7 基因突变导致肠道和肾脏对二碱基氨基酸吸收障碍，高蛋白饮食后出现呕吐、腹泻、昏迷等症状，低蛋白饮食和瓜氨酸补充是主要治疗手段。',
  plainName: '一种吃蛋白质后会出现呕吐腹泻甚至昏迷的遗传性代谢病',
  prevalence:
    '极罕见，患病率约 1/60,000–200,000；在芬兰人群中发病率最高（约 1/20,000），日本、意大利等地也有报道。',
  searchIntents: [
    '赖氨酸尿蛋白不耐受症 症状',
    'LPI 低蛋白饮食',
    '赖氨酸尿蛋白不耐受症 昏迷',
    'LPI 瓜氨酸 治疗',
    '赖氨酸尿蛋白不耐受症 遗传',
  ],
  quickLook: {
    whatItIs:
      'SLC7A7 基因突变导致肠道上皮和肾小管对赖氨酸、精氨酸、鸟氨酸等二碱基氨基酸的转运障碍，引起蛋白质吸收不良、尿素循环受阻和氨蓄积。',
    whoToSeeFirst:
      '婴儿期出现蛋白质不耐受、反复呕吐腹泻或发育迟缓时，应到儿童遗传代谢科或消化科就诊。',
    isGenetic:
      '常染色体隐性遗传，SLC7A7 基因突变所致；父母为无症状携带者，每胎患病风险 25%。',
    hasTreatment:
      '有明确治疗方案：严格低蛋白饮食、瓜氨酸补充、必要时苯丁酸钠；急性高氨血症需紧急处理。',
    commonDelayReason:
      '婴儿期呕吐腹泻被误认为食物过敏、乳糖不耐受或普通胃肠炎；发育迟缓归因于营养不良。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿断奶后引入高蛋白食物（如牛奶、鸡蛋、肉类）出现反复呕吐、腹泻、腹胀。',
      '进食蛋白质后出现嗜睡、意识模糊、抽搐或昏迷（高氨血症发作）。',
      '生长发育迟缓、低体重、肌张力低。',
      '肝脾肿大、骨质疏松、肺泡蛋白沉积症（年长儿或成人）。',
      '家族中有类似蛋白质不耐受病史或近亲婚配史。',
    ],
    commonWrongTurns: [
      '当作食物过敏或乳糖不耐受，长期回避乳制品但未见好转。',
      '当作普通胃肠炎反复输液治疗，未查找代谢病因。',
      '发育迟缓归因于单纯营养不良，未做代谢筛查。',
      '未在新生儿筛查异常时及时转诊遗传代谢专科。',
    ],
    firstDepartments: [
      '儿童遗传代谢科',
      '消化内科',
      '临床营养科',
      '急诊科（急性高氨血症）',
    ],
    diagnosisChecklist: [
      '详细记录饮食与症状的关联（尤其高蛋白饮食后）。',
      '血浆氨基酸分析：赖氨酸、精氨酸、鸟氨酸降低；氨升高。',
      '尿氨基酸分析：二碱基氨基酸（赖氨酸、精氨酸、鸟氨酸）大量排泄。',
      'SLC7A7 基因检测确诊。',
      '评估并发症：肝功能、骨密度、胸部 CT（肺泡蛋白沉积症）。',
    ],
    testsToAskAbout: [
      '血浆氨基酸谱。',
      '尿氨基酸谱。',
      '血氨。',
      'SLC7A7 基因检测。',
      '肝功能、骨密度、胸部 CT。',
    ],
    questionsForDoctor: [
      '孩子每天可以吃多少克蛋白质？',
      '瓜氨酸和苯丁酸钠的剂量是多少？',
      '如何判断高氨血症的早期表现？',
      '需要多久复查一次血氨和氨基酸？',
      '肺泡蛋白沉积症如何预防或早期发现？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>典型表现为断奶后引入高蛋白饮食时出现蛋白质不耐受：反复呕吐、腹泻、腹胀、拒食。严重时可因尿素循环受阻导致高氨血症，表现为嗜睡、意识模糊、共济失调、抽搐甚至昏迷。长期蛋白质缺乏导致生长发育迟缓、低体重、肌张力低下、肝脾肿大、骨质疏松。部分年长儿和成人可出现肺泡蛋白沉积症（表现为进行性呼吸困难）、肾功能损害、系统性红斑狼疮样表现和血小板减少。</p>',
    diagnosis:
      '<p>诊断依据包括典型的饮食相关症状、血浆氨基酸分析（赖氨酸、精氨酸、鸟氨酸降低，氨升高）和尿氨基酸分析（二碱基氨基酸大量排泄）。SLC7A7 基因检测发现致病突变可确诊。需与食物蛋白诱导性小肠结肠炎综合征、尿素循环障碍、乳糖不耐受等鉴别。确诊后应评估并发症，包括肝功能、骨密度、胸部影像学（排查肺泡蛋白沉积症）和肾功能。</p>',
    treatment:
      '<p>核心治疗是严格限制天然蛋白质摄入（通常 0.7–1.0 g/kg/天），以植物蛋白为主，使用特殊低蛋白食品补充热量。补充瓜氨酸（100–200 mg/kg/天）可替代尿素循环底物，促进氨的排泄。急性高氨血症时需立即停止蛋白质摄入，静脉输注葡萄糖和电解质，必要时使用苯丁酸钠或血液透析。对于肺泡蛋白沉积症，全肺灌洗可能有效。骨密度低者需补充钙和维生素 D。</p>',
    longTermCare:
      '<p>需终身低蛋白饮食管理和定期随访。监测指标包括生长发育、血氨、血浆氨基酸、肝功能、骨密度、肺功能和肾功能。注意预防感染和避免应激（均可诱发高氨血症）。患者教育包括识别高氨血症早期症状（呕吐、嗜睡、行为异常）、应急处理（立即口服葡萄糖水、停止蛋白质摄入、尽快就医）。携带急救卡注明诊断和紧急处理方案。</p>',
    fertilityOrFamily:
      '<p>常染色体隐性遗传。父母为无症状携带者。患者的生育力通常正常，但孕期需严格管理蛋白质摄入并监测血氨。有家族史的家庭可进行产前诊断（羊膜穿刺或绒毛取样检测基因突变）和胚胎植入前遗传学检测。遗传咨询有助于评估再发风险。</p>',
    emergencySigns:
      '<p>高蛋白饮食后呕吐伴嗜睡或意识障碍、抽搐、严重脱水、呼吸困难（肺泡蛋白沉积症加重）需要立即急救。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Lysinuric Protein Intolerance',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1361/',
    },
    {
      name: 'NORD: Lysinuric Protein Intolerance',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/lysinuric-protein-intolerance/',
    },
  ],
  symptoms:
    '<p>高蛋白饮食后呕吐腹泻、高氨血症（嗜睡、抽搐、昏迷）、发育迟缓、肝脾肿大、骨质疏松、肺泡蛋白沉积症。</p>',
  diagnosis:
    '<p>血浆二碱基氨基酸降低、尿中大量排泄；SLC7A7 基因检测确诊；评估肺、骨、肾并发症。</p>',
  treatment:
    '<p>严格低蛋白饮食、瓜氨酸补充；急性高氨血症时静脉葡萄糖、苯丁酸钠或透析；肺泡蛋白沉积症可行全肺灌洗。</p>',
  prognosis:
    '<p>早期诊断和低蛋白饮食管理可显著改善预后；未控制的高氨血症可致脑损伤和死亡；肺泡蛋白沉积症是成人期主要并发症。</p>',
  sourceName: 'GeneReviews: Lysinuric Protein Intolerance',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1361/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5011,
    name: 'lysinuric-protein-intolerance-journey.png',
    url: '/images/diseases/lysinuric-protein-intolerance-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

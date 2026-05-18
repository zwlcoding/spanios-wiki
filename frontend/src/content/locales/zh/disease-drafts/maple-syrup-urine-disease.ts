import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMapleSyrupUrineDisease: DiseaseDraft = {
  ...entity(5013, 'disease-maple-syrup-urine-disease'),
  name: '枫糖尿症',
  nameEn: 'Maple Syrup Urine Disease',
  alias: 'MSUD、支链酮酸尿症、枫糖尿病、第一批罕见病目录第 67 项',
  slug: 'maple-syrup-urine-disease',
  oneSentence:
    '枫糖尿症是一种常染色体隐性遗传的支链氨基酸代谢障碍，因 BCKDHA、BCKDHB 或 DBT 基因突变导致亮氨酸、异亮氨酸和缬氨酸无法有效代谢，引起神经系统损伤和特殊枫糖气味尿液，新生儿筛查和早期低支链氨基酸饮食管理是改善预后的关键。',
  plainName: '一种尿液有枫糖气味、不能吃太多蛋白质中三种氨基酸的遗传性代谢病',
  prevalence:
    '发病率约 1/185,000–300,000 活产儿；门诺派人群中发病率极高（约 1/380）。',
  searchIntents: [
    '枫糖尿症 新生儿筛查',
    'MSUD 饮食管理',
    '枫糖尿症 亮氨酸',
    '枫糖尿症 急性代谢危象',
    '枫糖尿症 肝移植 治愈',
  ],
  quickLook: {
    whatItIs:
      '支链α-酮酸脱氢酶复合体（BCKAD）缺乏导致亮氨酸、异亮氨酸和缬氨酸及其有毒代谢物在体内蓄积，损伤大脑和神经系统。',
    whoToSeeFirst:
      '新生儿筛查阳性、不明原因嗜睡抽搐伴特殊气味尿液，或已知 MSUD 患者出现感染后症状加重，应到儿童遗传代谢科就诊。',
    isGenetic:
      '常染色体隐性遗传，BCKDHA、BCKDHB 或 DBT 基因突变所致；父母为无症状携带者，每胎患病风险 25%。',
    hasTreatment:
      '低支链氨基酸饮食是终身治疗基础；急性代谢危象需紧急处理；肝移植可治愈经典型 MSUD。',
    commonDelayReason:
      '经典型在新生儿期发病，若未筛查可在数天内死亡；迟发型症状不特异，可误诊为脑炎或癫痫。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查支链氨基酸（亮氨酸、缬氨酸、异亮氨酸）升高。',
      '新生儿期拒奶、嗜睡、肌张力异常、抽搐，尿液或耳垢有特殊枫糖样甜味。',
      '感染或高蛋白饮食后诱发代谢危象：呕吐、意识障碍、昏迷、脑水肿。',
      '迟发型：不明原因发育迟缓、共济失调、癫痫发作或行为异常。',
    ],
    commonWrongTurns: [
      '把新生儿代谢危象当作败血症或颅内感染处理。',
      '把特殊气味归因于喂养问题或卫生问题。',
      '迟发型当作普通癫痫或脑炎，未做代谢筛查。',
      '感染期未调整饮食，诱发致命性脑水肿。',
    ],
    firstDepartments: [
      '儿童遗传代谢科',
      '新生儿科（急性期）',
      '急诊科（代谢危象时）',
      '临床营养科',
      '肝移植评估中心（难治性病例）',
    ],
    diagnosisChecklist: [
      '保留新生儿筛查结果。',
      '血浆氨基酸分析：亮氨酸、异亮氨酸、缬氨酸升高， allo-异亮氨酸阳性（特异性指标）。',
      '尿有机酸分析：支链α-酮酸升高。',
      'BCKDHA/BCKDHB/DBT 基因检测确诊分型。',
      '急性期：血氨、血糖、血气分析、电解质。',
    ],
    testsToAskAbout: [
      '血浆氨基酸谱（尤其支链氨基酸和 allo-异亮氨酸）。',
      '尿有机酸分析。',
      'BCKDHA/BCKDHB/DBT 基因检测。',
      '血氨、血糖、血气、电解质（急性期）。',
      '头颅 MRI（评估脑水肿和脱髓鞘）。',
    ],
    questionsForDoctor: [
      '孩子属于哪种类型（经典型、中间型、间歇型）？',
      '每天亮氨酸摄入量应控制在多少？',
      '代谢配方粉和普通食物如何搭配？',
      '感染期应急方案是什么？',
      '肝移植的适应证和时机是什么？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>经典型在出生后 4–7 天出现症状（当母乳或配方奶中蛋白质摄入增加时）：喂养困难、嗜睡、肌张力增高或减低、角弓反张、抽搐、昏迷。特征性表现是尿液、汗液和耳垢有枫糖样或焦糖样甜味。神经系统进行性恶化是由于亮氨酸及其代谢物蓄积导致脑水肿和脱髓鞘。未及时治疗的婴儿在 2–3 周内死亡。中间型和间歇型症状较轻，在感染、手术或高蛋白饮食后诱发代谢危象。迟发型可在儿童期或成年期出现发育迟缓、共济失调、癫痫或精神行为异常。</p>',
    diagnosis:
      '<p>新生儿筛查通过串联质谱检测血浆支链氨基酸（亮氨酸、异亮氨酸、缬氨酸）升高。血浆 allo-异亮氨酸升高是 MSUD 的特异性指标。尿有机酸分析显示支链α-酮酸排泄增加。BCKDHA、BCKDHB 或 DBT 基因检测可确诊并分型。急性期需监测血氨、血糖、血气和电解质。头颅 MRI 可显示脑水肿、髓鞘发育延迟或脱髓鞘改变。需与有机酸血症、高氨血症性脑病、新生儿败血症等鉴别。</p>',
    treatment:
      '<p>终身严格限制支链氨基酸（尤其是亮氨酸）摄入是核心治疗。使用不含亮氨酸、异亮氨酸和缬氨酸的特殊医学配方粉，配合少量天然蛋白质（如母乳或普通奶粉）提供必需氨基酸。亮氨酸每日允许量因年龄和病情而异（通常 300–1000 mg/天）。急性代谢危象时需立即停止天然蛋白摄入，静脉输注高浓度葡萄糖和电解质，必要时血液透析以快速清除有毒代谢物。异亮氨酸和缬氨酸缺乏时可适量补充。肝移植可纠正酶缺陷，是经典型 MSUD 的根治方法，术后可恢复正常饮食。</p>',
    longTermCare:
      '<p>需终身饮食管理和定期随访。监测指标包括生长发育、血浆支链氨基酸水平（亮氨酸应维持在 100–300 μmol/L）、神经系统发育和营养状态。每 3–6 个月复查血浆氨基酸谱。注意避免感染、发热、手术和创伤等应激因素（均可诱发代谢危象）。患者和家庭教育至关重要：建立“应急方案”，发热或呕吐时立即口服葡萄糖水、减少天然蛋白摄入并尽快就医。携带急救卡注明诊断和紧急处理方案。</p>',
    fertilityOrFamily:
      '<p>常染色体隐性遗传。父母为无症状携带者。有家族史的家庭可进行产前诊断（羊膜穿刺或绒毛取样检测氨基酸和基因突变）和胚胎植入前遗传学检测。经典型患者若接受肝移植并成功，后代遗传风险取决于配偶基因型。</p>',
    emergencySigns:
      '<p>高蛋白饮食或感染后呕吐伴嗜睡或意识障碍、抽搐、严重脑水肿（瞳孔不等大、呼吸异常）、脱水需要立即急救。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Maple Syrup Urine Disease',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1319/',
    },
    {
      name: 'NORD: Maple Syrup Urine Disease',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/maple-syrup-urine-disease/',
    },
  ],
  symptoms:
    '<p>新生儿期嗜睡、肌张力异常、抽搐、昏迷；尿液/耳垢有枫糖样甜味；迟发型表现为发育迟缓、共济失调、癫痫。</p>',
  diagnosis:
    '<p>新生儿筛查支链氨基酸升高；血浆 allo-异亮氨酸阳性；尿有机酸支链α-酮酸升高；BCKDHA/BCKDHB/DBT 基因检测确诊。</p>',
  treatment:
    '<p>终身低支链氨基酸饮食（特殊配方粉）；急性危象时静脉葡萄糖和透析；肝移植可根治经典型 MSUD。</p>',
  prognosis:
    '<p>新生儿筛查和早期饮食管理可使多数患儿正常发育；延误诊治可致严重脑损伤和死亡；肝移植术后预后良好。</p>',
  sourceName: 'GeneReviews: Maple Syrup Urine Disease',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1319/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5013,
    name: 'maple-syrup-urine-disease-journey.png',
    url: '/images/diseases/maple-syrup-urine-disease-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIsovalericAcidemia: DiseaseDraft = {
  ...entity(5005, 'disease-isovaleric-acidemia'),
  name: '异戊酸血症',
  nameEn: 'Isovaleric Acidemia',
  alias: 'IVA、异戊酰辅酶A脱氢酶缺乏症、第一批罕见病目录第 58 项',
  slug: 'isovaleric-acidemia',
  oneSentence:
    '异戊酸血症是一种常染色体隐性遗传的有机酸血症，因异戊酰辅酶A脱氢酶缺乏导致异戊酸蓄积，新生儿期可出现代谢危象，低亮氨酸饮食和左卡尼汀治疗可有效预防发作。',
  plainName: '不能吃太多含亮氨酸食物的遗传性代谢病',
  prevalence:
    '发病率约 1/62,000–250,000 活产儿；不同地区差异较大，德国人群发病率较高。',
  searchIntents: [
    '异戊酸血症 新生儿筛查',
    'IVA 汗脚味',
    '异戊酸血症 饮食管理',
    '异戊酸血症 代谢危象 处理',
    '异戊酸血症 能治愈吗',
  ],
  quickLook: {
    whatItIs:
      '亮氨酸代谢途径中异戊酰辅酶A脱氢酶缺乏，导致异戊酸等有毒代谢物在体内蓄积，引起代谢性酸中毒、高氨血症和神经系统损害。',
    whoToSeeFirst:
      '新生儿筛查阳性、不明原因呕吐嗜睡伴特殊体味，或已知 IVA 患者出现感染后症状加重，应到儿童遗传代谢科或新生儿科就诊。',
    isGenetic:
      '常染色体隐性遗传，IVD 基因突变所致；父母为无症状携带者，每胎患病风险 25%。',
    hasTreatment:
      '有明确治疗方案：低亮氨酸饮食、左卡尼汀和甘氨酸补充、感染期应急处理；多数患者预后良好。',
    commonDelayReason:
      '急性新生儿型可在出生后数天内死亡，若未进行新生儿筛查极易漏诊；迟发型症状不特异，可误诊为胃肠炎或脑炎。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿筛查 C5 酰基肉碱升高。',
      '新生儿期拒奶、呕吐、嗜睡、肌张力低、体温低，伴特殊"汗脚"或"臭袜子"气味。',
      '感染或高蛋白饮食后诱发代谢危象：呕吐、意识障碍、抽搐、昏迷。',
      '不明原因发育迟缓、慢性呕吐或反复代谢性酸中毒。',
    ],
    commonWrongTurns: [
      '把新生儿代谢危象当作普通感染或败血症处理，未查血氨和血气。',
      '把"汗脚味"当作卫生问题，未联想到代谢病。',
      '在地方医院反复住院查不出原因，未转诊遗传代谢专科。',
      '感染期未及时调整饮食和补充能量，诱发严重代谢危象。',
    ],
    firstDepartments: [
      '儿童遗传代谢科',
      '新生儿科（急性期）',
      '急诊科（代谢危象时）',
      '临床营养科（饮食管理）',
    ],
    diagnosisChecklist: [
      '保存新生儿筛查结果。',
      '血氨、血气分析、血糖、尿酮体检测（急性期）。',
      '尿有机酸分析：异戊酰甘氨酸和 3-羟基异戊酸升高。',
      '血浆酰基肉碱谱：C5（异戊酰肉碱）升高。',
      'IVD 基因检测确诊。',
    ],
    testsToAskAbout: [
      '血氨、血气分析。',
      '尿有机酸分析。',
      '血浆酰基肉碱谱。',
      'IVD 基因检测。',
      '血常规、凝血功能（急性期常伴血小板减少和中性粒细胞减少）。',
    ],
    questionsForDoctor: [
      '我的孩子属于急性型还是迟发型？',
      '每天可以吃多少蛋白质/亮氨酸？',
      '左卡尼汀和甘氨酸的剂量是多少？',
      '感染或发烧时应该怎么调整饮食和用药？',
      '紧急情况下应该先做什么？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>分为急性新生儿型和迟发型。急性型在出生后数小时至 2 周内发病，表现为拒奶、呕吐、嗜睡、肌张力低下、低体温、脱水，可迅速进展为代谢性酸中毒、高氨血症、抽搐、昏迷和死亡。特征性体味为"汗脚"或"臭袜子"味（异戊酸所致）。幸存者若未及时治疗可出现智力障碍和脑损伤。迟发型在婴儿期或儿童期发病，常由感染、高蛋白摄入或饥饿诱发代谢危象，症状类似但程度较轻。慢性非发作期可有发育迟缓、生长不良和慢性呕吐。</p>',
    diagnosis:
      '<p>新生儿筛查通过串联质谱检测血 C5 酰基肉碱升高。确诊依赖尿有机酸分析（异戊酰甘氨酸和 3-羟基异戊酸升高）和血浆酰基肉碱谱（C5 升高）。IVD 基因检测可明确突变。急性期实验室检查常显示代谢性酸中毒、高氨血症、酮症、低血糖、血小板减少和中性粒细胞减少。需与其他有机酸血症（如甲基丙二酸血症、丙酸血症）鉴别。</p>',
    treatment:
      '<p>急性代谢危象处理：立即停用天然蛋白质，静脉输注葡萄糖和电解质纠正脱水和酸中毒，必要时血液透析清除有毒代谢物。维持治疗包括：1）低亮氨酸饮食，限制天然蛋白质摄入，使用不含亮氨酸的特殊医学配方食品；2）左卡尼汀（促进异戊酸排泄）；3）甘氨酸（与异戊酸结合形成异戊酰甘氨酸，经尿排出）。感染等应激状态下需增加碳水化合物摄入、减少蛋白质并密切监测。随着年龄增长，急性发作频率通常降低。</p>',
    longTermCare:
      '<p>需终身饮食管理和定期随访。随访内容包括生长发育、智力发育、血常规、血气、血氨、尿酮体和营养指标。营养管理目标是提供足够热量和必需氨基酸的同时限制亮氨酸摄入。避免长时间空腹和感染。患者和家庭需接受遗传代谢病教育，掌握应急处理方案（如感染时增加碳水化合物、减少蛋白质、及时就医）。携带急救计划书（emergency letter）以备不时之需。</p>',
    fertilityOrFamily:
      '<p>常染色体隐性遗传。患者父母为无症状携带者。有家族史者可通过产前诊断（羊水或绒毛膜取样检测酰基肉碱和基因）或胚胎植入前遗传学检测预防再发。遗传咨询有助于家庭了解风险和生育选择。</p>',
    emergencySigns:
      '<p>呕吐伴嗜睡或意识改变、呼吸急促（酸中毒代偿）、抽搐、严重脱水、发热伴拒食应立即急诊。已知患者感染期症状加重也需紧急处理。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Classic Isovaleric Acidemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK601614/',
    },
    {
      name: 'NORD: Isovaleric Acidemia',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/acidemia-isovaleric/',
    },
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/yjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
  ],
  symptoms:
    '<p>新生儿期拒奶、呕吐、嗜睡、代谢性酸中毒、特殊"汗脚"味；可进展为抽搐、昏迷。迟发型由感染等诱因触发类似危象。</p>',
  diagnosis:
    '<p>新生儿筛查 C5 酰基肉碱升高；尿有机酸异戊酰甘氨酸升高；血浆 C5 升高；IVD 基因检测确诊。</p>',
  treatment:
    '<p>低亮氨酸饮食、左卡尼汀和甘氨酸补充；急性危象时静脉葡萄糖、纠正酸中毒和脱水；避免感染和空腹。</p>',
  prognosis:
    '<p>新生儿筛查和早期治疗可使大多数患儿正常发育；延误诊治可导致脑损伤和死亡；随年龄增长发作频率降低。</p>',
  sourceName: 'GeneReviews: Classic Isovaleric Acidemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK601614/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5005,
    name: 'isovaleric-acidemia-journey.png',
    url: '/images/diseases/isovaleric-acidemia-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

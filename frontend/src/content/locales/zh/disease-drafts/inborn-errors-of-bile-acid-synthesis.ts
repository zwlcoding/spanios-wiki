import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseInbornErrorsOfBileAcidSynthesis: DiseaseDraft = {
  ...entity(5004, 'disease-inborn-errors-of-bile-acid-synthesis'),
  name: '先天性胆汁酸合成障碍',
  nameEn: 'Inborn Errors of Bile Acid Synthesis',
  alias: 'IEBAS、胆汁酸合成缺陷、第一批罕见病目录第 57 项',
  slug: 'inborn-errors-of-bile-acid-synthesis',
  oneSentence:
    '先天性胆汁酸合成障碍是一组罕见的遗传性酶缺陷疾病，导致肝脏无法正常合成胆汁酸，引起胆汁淤积、脂肪吸收不良和脂溶性维生素缺乏，口服胆汁酸替代治疗对多数患者有效。',
  plainName: '肝脏不能合成正常胆汁酸的遗传性代谢病',
  prevalence:
    '总体患病率不明；各型均属极罕见病；3β-羟基-Δ5-C27-类固醇脱氢酶缺乏症是最常见的类型。',
  searchIntents: [
    '先天性胆汁酸合成障碍 新生儿黄疸',
    '胆汁酸合成缺陷 治疗 胆酸',
    'IEBAS 症状 脂肪泻',
    '先天性胆汁酸合成障碍 遗传咨询',
    '新生儿胆汁淤积 胆汁酸低',
  ],
  quickLook: {
    whatItIs:
      '肝脏合成胆汁酸过程中某种酶缺乏，导致有毒的异常胆汁酸中间产物蓄积，同时正常胆汁酸不足，引起胆汁淤积和脂肪吸收障碍。',
    whoToSeeFirst:
      '新生儿期出现黄疸、白陶土样大便或脂肪泻，应到儿童消化科、新生儿科或遗传代谢科就诊。',
    isGenetic:
      '是常染色体隐性遗传病，不同类型由不同基因突变引起；父母为无症状携带者。',
    hasTreatment:
      '大多数类型可通过口服初级胆汁酸（胆酸）替代治疗，可显著改善肝功能；少数类型需肝移植。',
    commonDelayReason:
      '新生儿胆汁淤积病因复杂，本病血清 GGT 常正常或仅轻度升高，易被忽视；需高度怀疑并行尿胆汁酸谱分析。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿期出现持续黄疸、白陶土样大便和深色尿。',
      '婴儿期脂肪泻、生长发育迟缓、出血倾向（维生素 K 缺乏）。',
      '佝偻病样表现（维生素 D 缺乏）。',
      '不明原因肝脾肿大或肝功能异常。',
    ],
    commonWrongTurns: [
      '把新生儿胆汁淤积单纯归因于母乳性黄疸或感染，未做深入检查。',
      '因血清 GGT 正常而排除胆汁淤积性肝病。',
      '误诊为胆道闭锁而手术，延误正确治疗。',
      '未行尿胆汁酸谱分析或基因检测，长期找不到病因。',
    ],
    firstDepartments: [
      '儿童消化科/肝病科',
      '新生儿科',
      '儿童遗传代谢科',
      '临床营养科',
    ],
    diagnosisChecklist: [
      '记录黄疸出现时间、大便颜色变化和生长发育情况。',
      '肝功能检查：注意血清总胆汁酸常正常或降低（与其他胆汁淤积病不同），GGT 正常或轻度升高。',
      '尿胆汁酸快速原子轰击质谱分析（FAB-MS）是诊断关键。',
      '基因检测明确酶缺陷类型。',
      '评估脂溶性维生素（A、D、E、K）水平。',
    ],
    testsToAskAbout: [
      '肝功能（ALT、AST、胆红素、GGT）。',
      '血清总胆汁酸（常正常或降低）。',
      '尿胆汁酸谱分析（FAB-MS）。',
      '相关酶基因检测。',
      '脂溶性维生素水平、凝血功能。',
    ],
    questionsForDoctor: [
      '我的孩子属于哪种酶缺陷类型？',
      '胆酸替代治疗的剂量和疗程是怎样的？',
      '需要补充哪些脂溶性维生素？',
      '治疗效果通常多久能看到？',
      '肝移植在什么情况下需要考虑？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>临床表现因酶缺陷类型和年龄而异。新生儿期最常见为胆汁淤积：黄疸持续不退、白陶土样大便、深色尿、肝脾肿大。由于胆汁酸缺乏导致脂肪吸收不良，出现脂肪泻、生长发育迟缓、脂溶性维生素缺乏（维生素 K 缺乏致出血、维生素 D 缺乏致佝偻病、维生素 E 缺乏致神经肌肉病变、维生素 A 缺乏致夜盲）。部分类型（如脑腱黄瘤病）以神经系统症状为主，儿童或成人期出现共济失调、痴呆、白内障和黄瘤。部分类型可进展为肝硬化和肝衰竭。</p>',
    diagnosis:
      '<p>诊断关键在于高度怀疑和尿胆汁酸谱分析。与其他胆汁淤积病不同，本病血清总胆汁酸常正常或降低，GGT 正常或仅轻度升高，这是重要提示。尿 FAB-MS 可检测到异常的胆汁酸中间产物和胆汁醇，具有诊断特异性。基因检测可明确致病突变和分型。肝活检可见巨细胞肝炎、胆汁淤积和纤维化，但非必需。需与胆道闭锁、Alagille 综合征、PFIC、Citrin 缺乏症等鉴别。</p>',
    treatment:
      '<p>口服初级胆汁酸替代治疗是大多数类型的首选。胆酸（cholic acid，Cholbam）于 2015 年获 FDA 批准，剂量 10–15 mg/kg/天，分 1–2 次服用。其作用机制是通过负反馈抑制 7α-羟化酶，减少异常有毒胆汁酸的产生，同时补充正常胆汁酸促进脂肪吸收。多数患者在治疗数周至数月内黄疸消退、肝功能改善。需同时补充脂溶性维生素和含中链甘油三酯的配方奶/饮食。胆酸对结合缺陷无效，后者可用甘氨胆酸。对胆酸无反应或已进展为终末期肝病者需肝移植。</p>',
    longTermCare:
      '<p>需终身随访，监测肝功能、生长发育、脂溶性维生素水平和骨密度。营养管理很重要，确保足够的热量和适量蛋白质摄入。定期眼科检查（排除白内障）。神经发育评估（尤其是脑腱黄瘤病类型）。患者教育包括识别感染等诱发因素和坚持服药。</p>',
    fertilityOrFamily:
      '<p>常染色体隐性遗传。患者父母通常为无症状携带者。有家族史或已知突变者，可通过产前诊断（羊水或绒毛膜取样）或胚胎植入前遗传学检测降低再发风险。遗传咨询有助于家庭了解风险和生育选择。</p>',
    emergencySigns:
      '<p>严重出血（维生素 K 缺乏）、肝功能急剧恶化、意识改变、严重脱水或电解质紊乱、抽搐应立即急诊。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Inborn Errors of Bile Acid Synthesis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
    },
    {
      name: 'NORD: Bile Acid Synthesis Disorders',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/bile-acid-synthesis-disorders/',
    },
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/yjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
  ],
  symptoms:
    '<p>新生儿胆汁淤积（黄疸、白陶土样大便）、脂肪泻、生长发育迟缓、脂溶性维生素缺乏、肝脾肿大；部分类型以神经系统症状为主。</p>',
  diagnosis:
    '<p>血清胆汁酸常正常或降低、GGT 正常或轻度升高；尿 FAB-MS 检测到异常胆汁酸代谢物；基因检测确诊分型。</p>',
  treatment:
    '<p>口服胆酸替代治疗是大多数类型的首选；补充脂溶性维生素；终末期肝病需肝移植。</p>',
  prognosis:
    '<p>早期诊断和胆酸替代治疗可显著改善预后；延误诊治可进展为肝硬化和肝衰竭。</p>',
  sourceName: 'GeneReviews: Inborn Errors of Bile Acid Synthesis',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5004,
    name: 'inborn-errors-of-bile-acid-synthesis-journey.png',
    url: '/images/diseases/inborn-errors-of-bile-acid-synthesis-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

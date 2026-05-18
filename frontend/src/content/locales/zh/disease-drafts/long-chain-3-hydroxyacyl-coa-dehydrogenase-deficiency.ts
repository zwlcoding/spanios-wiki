import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLongChain3HydroxyacylCoaDehydrogenaseDeficiency: DiseaseDraft =
  {
    ...entity(
      5009,
      'disease-long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency',
    ),
    name: '长链3-羟酰基辅酶A脱氢酶缺乏症',
    nameEn: 'Long Chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency',
    alias: 'LCHAD、脂肪酸氧化障碍、第一批罕见病目录第 63 项',
    slug: 'long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency',
    oneSentence:
      '长链3-羟酰基辅酶A脱氢酶缺乏症是一种常染色体隐性遗传的脂肪酸氧化障碍，因 HADHA 基因突变导致长链脂肪酸无法被有效利用，引起低血糖、心肌病和视网膜病变，饮食管理和避免空腹是防治关键。',
    plainName: '身体不能有效分解长链脂肪来获取能量的遗传性代谢病',
    prevalence:
      '极罕见，患病率约 1/100,000–200,000；在北欧部分地区（如爱沙尼亚、芬兰）发病率较高。',
    searchIntents: [
      'LCHAD 新生儿筛查',
      '长链脂肪酸氧化障碍 饮食',
      'LCHAD 心肌病 治疗',
      '长链3-羟酰基辅酶A脱氢酶缺乏症 遗传',
      'LCHAD 视网膜病变',
    ],
    quickLook: {
      whatItIs:
        'HADHA 基因突变导致线粒体脂肪酸β氧化途径中的关键酶缺乏，身体在空腹或应激时无法利用脂肪供能，导致能量危机和毒性代谢物蓄积。',
      whoToSeeFirst:
        '新生儿筛查阳性、不明原因低血糖、心肌病或肝大，应到儿童遗传代谢科或新生儿科就诊。',
      isGenetic:
        '常染色体隐性遗传，HADHA 基因突变所致；父母为无症状携带者，每胎患病风险 25%。',
      hasTreatment:
        '有明确治疗方案：避免空腹、低脂高碳水化合物饮食、中链甘油三酯（MCT）补充、左卡尼汀；急性期需静脉葡萄糖纠正代谢危象。',
      commonDelayReason:
        '新生儿期低血糖、嗜睡常被误认为败血症或普通感染；心肌病和肝大可能先被当作独立疾病处理。',
    },
    patientJourney: {
      whenToSuspect: [
        '新生儿筛查 C16-OH、C18:1-OH 等羟酰基肉碱升高。',
        '新生儿期或婴儿期出现空腹低血糖、嗜睡、肌无力、喂养困难。',
        '不明原因心肌病、心律失常、肝大或脂肪肝。',
        '视网膜病变（色素沉着性视网膜病变）导致夜盲或视力下降。',
        '母亲孕期发生急性脂肪肝（AFLP）或 HELLP 综合征（提示可能携带 LCHAD 胎儿）。',
      ],
      commonWrongTurns: [
        '把新生儿低血糖当作单纯败血症或喂养不足处理。',
        '把心肌病误诊为原发性心肌病，未做代谢筛查。',
        '未在新生儿筛查异常时及时转诊遗传代谢专科。',
        '急性感染期未增加碳水化合物摄入，诱发严重代谢危象。',
      ],
      firstDepartments: [
        '儿童遗传代谢科',
        '新生儿科（急性期）',
        '心内科（心肌病评估）',
        '眼科（视网膜病变评估）',
        '临床营养科',
      ],
      diagnosisChecklist: [
        '保留新生儿筛查结果。',
        '血氨、血糖、血气分析、肝功能和心肌酶谱（急性期）。',
        '血浆酰基肉碱谱：C16-OH、C18:1-OH、C18-OH 等羟酰基肉碱升高。',
        '尿有机酸分析：3-羟基二羧酸等异常。',
        'HADHA 基因突变分析确诊。',
        '心脏超声和眼底检查评估并发症。',
      ],
      testsToAskAbout: [
        '血浆酰基肉碱谱（串联质谱）。',
        '尿有机酸分析。',
        'HADHA 基因检测。',
        '血糖、血氨、血气、肝功能、心肌酶。',
        '心脏超声、心电图、眼底检查。',
      ],
      questionsForDoctor: [
        '孩子的基因突变类型是什么？预后如何？',
        '每天需要吃几餐？最长能空腹多久？',
        'MCT 油和左卡尼汀的剂量是多少？',
        '如何识别和处理代谢危象？',
        '视网膜病变和心肌病需要多久复查一次？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>临床表现差异大，从新生儿期急性代谢危象到成年期慢性症状不等。典型表现包括空腹诱导的低血糖、嗜睡、意识障碍、抽搐和昏迷。心肌病（扩张型或肥厚型）和心律失常是严重并发症。肝大、脂肪肝、转氨酶升高常见。视网膜病变（色素沉着性视网膜病变）可导致夜盲和进行性视力下降。周围神经病变和肌病在部分患者中出现。母亲在妊娠 LCHAD 胎儿时，孕期可能出现急性脂肪肝（AFLP）或 HELLP 综合征。</p>',
      diagnosis:
        '<p>新生儿筛查通过串联质谱检测血浆酰基肉碱谱发现 C16-OH、C18:1-OH 和 C18-OH 等羟酰基肉碱升高。尿有机酸分析可见 3-羟基二羧酸排泄增加。HADHA 基因突变分析可确诊并区分 LCHAD 和 MTP（线粒体三功能蛋白）缺乏症。需与 VLCAD、CPT-I/II 缺乏症等其他脂肪酸氧化障碍鉴别。确诊后应全面评估心脏、肝脏、视网膜和神经系统受累情况。</p>',
      treatment:
        '<p>核心管理策略是避免空腹和提供替代能源。婴幼儿需频繁喂养（每 3–4 小时一次，夜间也需喂食或胃管持续输注）。饮食以高碳水化合物、适量蛋白质、严格限制长链脂肪为主，补充中链甘油三酯（MCT）油作为替代脂肪来源。左卡尼汀有助于促进有毒代谢物排泄。急性代谢危象时，立即静脉输注高浓度葡萄糖（10% 葡萄糖+电解质），纠正酸中毒和低血压，禁用脂肪乳（除非特制 MCT 型）。心肌病和心律失常需心内科联合管理。</p>',
      longTermCare:
        '<p>需终身饮食管理和定期随访。监测指标包括生长发育、血糖、肝功能、心肌酶、心脏超声、心电图、眼底检查和神经肌肉功能。注意避免长时间运动、感染和发热时未补充足够碳水化合物。患者和家庭教育至关重要：建立“应急方案”，发热或呕吐时立即口服葡萄糖水或就医静脉补糖。携带急救卡注明诊断和紧急处理方案。</p>',
      fertilityOrFamily:
        '<p>常染色体隐性遗传。父母为无症状携带者。有家族史的家庭可进行产前诊断（羊膜穿刺或绒毛取样检测酰基肉碱和基因突变）和胚胎植入前遗传学检测。特别重要的是，携带 LCHAD 胎儿的母亲在孕期有发生急性脂肪肝和 HELLP 综合征的风险，需要产科密切监测。</p>',
      emergencySigns:
        '<p>低血糖伴嗜睡或意识障碍、呕吐伴脱水、抽搐、严重呼吸困难（心衰）、心律失常需要立即急救。</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Long-Chain 3-Hydroxyacyl-CoA Dehydrogenase Deficiency',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
      },
      {
        name: 'NORD: Long Chain 3-Hydroxyacyl-CoA Dehydrogenase Deficiency',
        type: 'review',
        url: 'https://rarediseases.org/rare-diseases/long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency/',
      },
    ],
    symptoms:
      '<p>空腹低血糖、嗜睡、心肌病、肝大、视网膜病变、周围神经病变；母亲孕期可出现急性脂肪肝。</p>',
    diagnosis:
      '<p>新生儿筛查酰基肉碱谱异常；尿有机酸分析；HADHA 基因检测确诊；需评估心脏、肝脏、视网膜。</p>',
    treatment:
      '<p>避免空腹、低脂高碳水饮食、MCT 油补充、左卡尼汀；急性危象时静脉葡萄糖；心内科联合管理。</p>',
    prognosis:
      '<p>早期诊断和饮食管理可显著改善预后；心肌病和视网膜病变是主要长期并发症；急性代谢危象可危及生命。</p>',
    sourceName:
      'GeneReviews: Long-Chain 3-Hydroxyacyl-CoA Dehydrogenase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5009,
      name: 'long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency-journey.png',
      url: '/images/diseases/long-chain-3-hydroxyacyl-coa-dehydrogenase-deficiency-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  };

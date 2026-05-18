import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLysosomalAcidLipaseDeficiency: DiseaseDraft = {
  ...entity(5012, 'disease-lysosomal-acid-lipase-deficiency'),
  name: '溶酶体酸性脂肪酶缺乏症',
  nameEn: 'Lysosomal Acid Lipase Deficiency',
  alias: 'LAL-D、沃尔曼病、胆固醇酯沉积病、第一批罕见病目录第 66 项',
  slug: 'lysosomal-acid-lipase-deficiency',
  oneSentence:
    '溶酶体酸性脂肪酶缺乏症是一种常染色体隐性遗传的溶酶体贮积病，因 LIPA 基因突变导致溶酶体内胆固醇酯和甘油三酯无法分解，引起肝脾肿大、高脂血症和动脉粥样硬化，酶替代治疗（sebelipase alfa）可显著改善预后。',
  plainName: '一种身体无法分解细胞内脂肪的遗传性代谢病',
  prevalence:
    '患病率约 1/40,000–300,000；严重型（沃尔曼病）极罕见，迟发型（胆固醇酯沉积病）相对多见但常被漏诊。',
  searchIntents: [
    '溶酶体酸性脂肪酶缺乏症 症状',
    'LAL-D 酶替代治疗',
    '沃尔曼病 婴儿',
    '溶酶体酸性脂肪酶缺乏症 肝脾肿大',
    'LAL-D 遗传 诊断',
  ],
  quickLook: {
    whatItIs:
      'LIPA 基因突变导致溶酶体酸性脂肪酶缺乏，细胞内胆固醇酯和甘油三酯在溶酶体内蓄积，主要损害肝脏、脾脏、肠道和心血管系统。',
    whoToSeeFirst:
      '婴儿期出现肝脾肿大、喂养困难或脂肪泻，或儿童/成人出现不明原因肝酶升高、高脂血症时，应到儿童消化科、肝病科或遗传代谢科就诊。',
    isGenetic:
      '常染色体隐性遗传，LIPA 基因突变所致；父母为无症状携带者，每胎患病风险 25%。',
    hasTreatment:
      '酶替代治疗（sebelipase alfa）是主要治疗手段，可显著改善肝功能和生存；造血干细胞移植是另一种选择；终末期肝病需肝移植。',
    commonDelayReason:
      '迟发型患者症状不特异（肝酶升高、高脂血症），常被误诊为非酒精性脂肪肝、高脂血症或原发性肝硬化。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿期（沃尔曼病）：出生后数周出现肝脾明显肿大、腹胀、脂肪泻、发育停滞、肾上腺钙化。',
      '儿童/成人期（胆固醇酯沉积病）：不明原因转氨酶升高、肝脾肿大、高脂血症（高胆固醇和高甘油三酯）、早发性动脉粥样硬化。',
      '超声发现肝脂肪变性或纤维化，但无肥胖、饮酒或病毒性肝炎等常见病因。',
    ],
    commonWrongTurns: [
      '把肝脂肪变性和转氨酶升高误诊为单纯非酒精性脂肪肝。',
      '把高脂血症当作普通高脂血症用他汀类治疗，效果不佳。',
      '未进一步查找婴幼儿严重肝脾肿大的代谢病因。',
      '反复查肝功能异常但长期未做酶活性检测或基因检查。',
    ],
    firstDepartments: [
      '儿童消化科/肝病科',
      '遗传代谢科',
      '心血管内科（早发冠心病评估）',
      '临床营养科',
    ],
    diagnosisChecklist: [
      '详细记录生长发育、喂养史和症状进展。',
      '肝功能检查：转氨酶持续升高，可进展至肝硬化。',
      '血脂检查：总胆固醇、LDL-C、甘油三酯升高，HDL-C 降低。',
      '腹部超声/CT：肝脾肿大、脂肪肝、肾上腺钙化（婴儿型）。',
      '白细胞或皮肤成纤维细胞酸性脂肪酶活性测定：显著降低。',
      'LIPA 基因检测确诊。',
    ],
    testsToAskAbout: [
      '肝功能全套。',
      '血脂全套。',
      '腹部超声/CT。',
      '白细胞酸性脂肪酶活性。',
      'LIPA 基因检测。',
    ],
    questionsForDoctor: [
      '孩子的 LAL 酶活性是多少？',
      '酶替代治疗的费用和给药方式是什么？',
      '肝纤维化程度如何？会进展为肝硬化吗？',
      '需要同时做造血干细胞移植评估吗？',
      '心血管疾病风险如何管理？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>临床谱系从严重婴儿型（沃尔曼病）到迟发型（胆固醇酯沉积病，CESD）。沃尔曼病在出生后数周至数月发病，表现为严重肝脾肿大、腹胀、脂肪泻、营养不良、发育停滞、贫血和血小板减少。腹部影像学可见肾上腺明显钙化（特征性表现）。未经治疗通常在婴儿期死亡。迟发型 CESD 表现更隐匿，儿童或成年期出现不明原因肝酶升高、肝脾肿大、高脂血症、肝脂肪变性和肝纤维化，可进展为肝硬化和肝衰竭。心血管并发症包括早发性动脉粥样硬化和冠心病。</p>',
    diagnosis:
      '<p>诊断依据包括肝脾肿大、持续性肝酶异常、高脂血症，结合酶学检测（白细胞或皮肤成纤维细胞酸性脂肪酶活性显著降低或缺失）和 LIPA 基因检测。婴儿型特征性肾上腺钙化对诊断有重要提示意义。需与非酒精性脂肪肝、家族性高胆固醇血症、其他溶酶体贮积病（如戈谢病、尼曼-匹克病）鉴别。</p>',
    treatment:
      '<p>酶替代治疗（ERT）使用 sebelipase alfa（Kanuma），每两周静脉输注一次，剂量为 1 mg/kg，可显著改善肝功能、降低血脂、缩小肝脾体积和改善生长发育。婴儿型需尽早开始 ERT。造血干细胞移植（HSCT）理论上可提供持久酶来源，但风险较高，通常用于 ERT 不可及或疗效不佳的患者。终末期肝硬化和肝衰竭需肝移植。心血管风险管理包括他汀类药物和抗血小板治疗。营养支持包括中链甘油三酯（MCT）补充和脂溶性维生素补充。</p>',
    longTermCare:
      '<p>需终身 ERT 和定期随访，监测肝功能、血脂、肝脾大小、生长发育和心血管状况。每 6–12 个月评估肝纤维化进展（肝脏弹性成像或活检）。注意输注反应（发热、皮疹、低血压）。患者教育包括坚持治疗、定期复查、心血管风险因素管理（戒烟、控制血压血脂）和接种推荐疫苗。</p>',
    fertilityOrFamily:
      '<p>常染色体隐性遗传。父母为无症状携带者。有家族史的家庭可进行产前诊断（羊膜穿刺或绒毛取样检测酶活性和基因突变）和胚胎植入前遗传学检测。迟发型患者生育力通常正常，但孕期需密切监测肝功能和血脂。</p>',
    emergencySigns:
      '<p>严重腹胀伴呼吸困难（巨脾或腹水）、消化道大出血（门脉高压）、意识障碍（肝衰竭）、严重脂泻伴脱水需要立即就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Lysosomal Acid Lipase Deficiency',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK305870/',
    },
    {
      name: 'NORD: Lysosomal Acid Lipase Deficiency',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/lysosomal-acid-lipase-deficiency/',
    },
  ],
  symptoms:
    '<p>婴儿型：严重肝脾肿大、脂肪泻、发育停滞、肾上腺钙化；迟发型：肝酶升高、高脂血症、肝纤维化、早发冠心病。</p>',
  diagnosis:
    '<p>白细胞或皮肤成纤维细胞酸性脂肪酶活性显著降低；LIPA 基因检测确诊；婴儿型特征性肾上腺钙化。</p>',
  treatment:
    '<p>酶替代治疗（sebelipase alfa）是首选；造血干细胞移植和肝移植是备选；心血管风险管理。</p>',
  prognosis:
    '<p>婴儿型未经治疗多在 1 岁内死亡；ERT 显著改善迟发型预后；早期诊断和治疗可延缓肝硬化和心血管疾病。</p>',
  sourceName: 'GeneReviews: Lysosomal Acid Lipase Deficiency',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK305870/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5012,
    name: 'lysosomal-acid-lipase-deficiency-journey.png',
    url: '/images/diseases/lysosomal-acid-lipase-deficiency-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

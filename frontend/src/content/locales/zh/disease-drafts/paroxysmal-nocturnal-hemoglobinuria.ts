import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseParoxysmalNocturnalHemoglobinuria: DiseaseDraft = {
  ...entity(5034, 'disease-paroxysmal-nocturnal-hemoglobinuria'),
  name: '阵发性睡眠性血红蛋白尿',
  nameEn: 'Paroxysmal Nocturnal Hemoglobinuria',
  alias: 'PNH、Marchiafava-Micheli综合征',
  icd10Code: 'D59.5',
  slug: 'paroxysmal-nocturnal-hemoglobinuria',
  oneSentence:
    '阵发性睡眠性血红蛋白尿是一种罕见的获得性造血干细胞克隆性疾病，因PIGA基因突变导致血细胞表面缺乏糖基磷脂酰肌醇（GPI）锚蛋白，补体系统异常激活引起血管内溶血、血栓形成和骨髓衰竭，依库珠单抗可显著改善预后。',
  plainName: '红细胞容易被自身免疫系统破坏导致贫血和血栓的罕见血液病',
  prevalence:
    '患病率约 1-1.5/100 万；发病高峰在30-40岁，男女均可发病。亚洲人群发病率可能略高。约10-15%的再生障碍性贫血患者可继发PNH。',
  searchIntents: [
    'PNH 症状',
    '阵发性睡眠性血红蛋白尿 贫血',
    'PNH 血栓',
    'PNH 依库珠单抗',
    '阵发性睡眠性血红蛋白尿 诊断',
  ],
  quickLook: {
    whatItIs:
      '这是一种获得性（非遗传性）造血干细胞克隆病，因PIGA基因突变导致红细胞、白细胞和血小板表面缺乏GPI锚蛋白（尤其是CD55和CD59），补体系统不断攻击红细胞，导致血管内溶血、血栓形成和骨髓造血功能衰竭。',
    whoToSeeFirst:
      '血液科。出现不明原因贫血、酱油色尿、反复血栓或血细胞减少时应尽快就诊。',
    isGenetic:
      '不是遗传病，而是获得性造血干细胞突变。PIGA基因突变发生在造血干细胞水平，导致该突变细胞的后代均缺乏GPI锚蛋白。不遗传给后代，但克隆可随时间扩大。',
    hasTreatment:
      '依库珠单抗（eculizumab）或ravulizumab（长效C5抑制剂）是标准治疗，可阻断补体激活、显著减少溶血和血栓风险，改善生存。造血干细胞移植是唯一根治方法。铁剂、叶酸、输血和对症治疗也很重要。',
    commonDelayReason:
      '酱油色尿仅在晨尿明显，白天可能被忽视；贫血被当作缺铁性贫血；腹痛被当作胆石症或胃肠疾病；血栓被当作普通静脉血栓而未查PNH；基层医院缺乏流式细胞术检测条件。',
  },
  patientJourney: {
    whenToSuspect: [
      '晨起尿液呈酱油色、浓茶色或红葡萄酒色（血红蛋白尿），白天可能减轻或消失。',
      '不明原因贫血（乏力、面色苍白、心悸），伴或不伴黄疸。',
      '反复腹痛（尤其右上腹）、吞咽困难或背痛（平滑肌痉挛相关）。',
      '不明原因血栓形成（尤其腹部静脉、脑静脉、门静脉等不常见部位）。',
      '全血细胞减少或既往诊断为再生障碍性贫血、骨髓增生异常综合征。',
    ],
    commonWrongTurns: [
      '酱油色尿被当作普通尿路感染或血尿，未做尿潜血和含铁血黄素检测。',
      '贫血被当作缺铁性贫血或营养性贫血，补铁治疗后反而加重（因铁利用障碍）。',
      '腹痛被当作普通胃肠炎、胆结石或消化性溃疡。',
      '血栓仅按普通血栓治疗，未排查PNH。',
      '延误流式细胞术检测和依库珠单抗治疗启动。',
    ],
    firstDepartments: [
      '血液科',
      '消化科（腹痛为主时）',
      '血管外科（血栓时）',
      '泌尿外科（血红蛋白尿为主时）',
    ],
    diagnosisChecklist: [
      '记录尿色变化规律（晨起是否加深）、贫血症状、腹痛和血栓史。',
      '整理既往血常规、网织红细胞、胆红素、乳酸脱氢酶（LDH）结果。',
      '询问医生是否需要做流式细胞术检测（FLAER、CD55、CD59）。',
      '了解是否有再生障碍性贫血或骨髓增生异常综合征病史。',
    ],
    testsToAskAbout: [
      '血常规（贫血程度、白细胞和血小板计数）。',
      '网织红细胞计数（溶血时升高）。',
      '血清LDH、间接胆红素、结合珠蛋白（溶血指标）。',
      '尿常规和尿含铁血黄素（Rous试验）。',
      '流式细胞术（FLAER、CD55、CD59检测PNH克隆，是金标准）。',
      '骨髓穿刺和活检（评估骨髓增生程度和排除再障/MDS）。',
      'Coombs试验（排除自身免疫性溶血性贫血）。',
      '腹部超声/CT（评估血栓和胆结石）。',
    ],
    questionsForDoctor: [
      '我的PNH克隆比例是多少？属于经典型、再障-PNH综合征还是亚临床型？',
      '是否适合依库珠单抗治疗？什么时候开始？费用和副作用如何？',
      '血栓风险有多高？是否需要长期抗凝？',
      '贫血需要输血吗？补铁是否安全？',
      '造血干细胞移植是否适合我？风险和时机如何？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PNH的典型三联征是：血管内溶血、血栓形成和骨髓衰竭。溶血表现包括：晨起酱油色或浓茶色尿（血红蛋白尿，因夜间呼吸性酸中毒加重补体激活）、乏力、面色苍白、黄疸、脾大。溶血可呈阵发性，也可持续存在。</p><p>平滑肌痉挛症状包括：腹痛（尤其右上腹）、吞咽困难、背痛和勃起功能障碍，与血浆游离血红蛋白消耗一氧化氮有关。血栓形成是PNH最严重的并发症，可发生于任何部位，但尤其好发于腹部静脉（门静脉、肠系膜静脉、脾静脉、肝静脉/Budd-Chiari综合征）、脑静脉窦和下肢深静脉。骨髓衰竭表现为全血细胞减少或单一系减少。</p>',
    diagnosis:
      '<p>诊断依赖流式细胞术检测外周血红细胞、粒细胞和单核细胞表面GPI锚蛋白缺失。FLAER（fluorescein-labeled proaerolysin）是目前最敏感的检测方法，可检测PNH克隆比例。CD55和CD59缺失也是特征性改变。</p><p>实验室检查显示：血管内溶血证据（LDH显著升高、间接胆红素升高、结合珠蛋白降低、血红蛋白尿、含铁血黄素尿）；贫血伴网织红细胞升高；骨髓象可显示增生减低（再障-PNH）或增生活跃。需与自身免疫性溶血性贫血、行军性血红蛋白尿、遗传性球形红细胞增多症等鉴别。再障或MDS患者出现不明原因溶血时应高度警惕PNH。</p>',
    treatment:
      '<p>补体抑制剂（依库珠单抗或ravulizumab）是标准治疗，可阻断C5补体、显著减少血管内溶血、降低血栓风险、改善生存质量。接种脑膜炎球菌疫苗后使用（因补体抑制增加脑膜炎球菌感染风险）。治疗费用较高，部分地区已纳入医保。</p><p>造血干细胞移植是唯一根治方法，适用于有严重骨髓衰竭、血栓反复发作或补体抑制剂疗效不佳的患者。对症支持包括：铁剂补充（因尿铁丢失）、叶酸、输血（严重贫血时）、抗凝（血栓高风险者）、预防感染。避免使用加重溶血的药物（如氧化应激药物）。</p>',
    longTermCare:
      '<p>长期随访包括：定期监测血常规、LDH、PNH克隆比例；评估血栓风险；监测肾功能（溶血可导致慢性肾病）；管理铁状态（铁缺乏常见但补铁需谨慎）；监测骨髓功能演变（部分患者可向再障或MDS转化）。</p><p>生活管理：避免感染（接种疫苗）；避免剧烈运动和脱水；避免氧化应激（某些药物和食物）；保持良好的个人卫生。心理支持和患者教育非常重要。携带疾病诊断卡，就医时告知医生PNH诊断。</p>',
    fertilityOrFamily:
      '<p>PNH是获得性疾病，不遗传给后代。但女性患者在妊娠期间血栓和溶血风险显著增加，需血液科和产科多学科管理。妊娠期使用依库珠单抗的经验逐渐积累，相对安全但需个体化评估。</p>',
    emergencySigns:
      '<p>需立即急诊的情况：急性腹痛伴腹胀和血便（警惕肠系膜静脉血栓）、急性胸痛和呼吸困难（肺栓塞或心肌梗死）、急性头痛伴呕吐和意识改变（脑静脉窦血栓）、严重贫血伴心悸和气短、持续酱油色尿伴少尿（急性肾损伤）。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Paroxysmal Nocturnal Hemoglobinuria',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538475/',
    },
    {
      name: 'NORD: Paroxysmal Nocturnal Hemoglobinuria',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/paroxysmal-nocturnal-hemoglobinuria/',
    },
    {
      name: 'Orphanet: Paroxysmal nocturnal hemoglobinuria',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/447',
    },
  ],
  symptoms:
    '<p>血管内溶血（酱油色尿、贫血、黄疸）、血栓形成（尤其腹部静脉和脑静脉）和骨髓衰竭（全血细胞减少）。平滑肌痉挛可导致腹痛和吞咽困难。</p>',
  diagnosis:
    '<p>流式细胞术检测FLAER和CD55/CD59缺失是金标准。LDH显著升高、间接胆红素升高、含铁血黄素尿支持诊断。</p>',
  treatment:
    '<p>依库珠单抗或ravulizumab（C5抑制剂）为标准治疗，显著减少溶血和血栓。造血干细胞移植可根治。对症支持包括铁剂、输血和抗凝。</p>',
  prognosis:
    '<p>依库珠单抗显著改善预后，10年生存率超过90%。未治疗者中位生存期约10-15年，主要死因是血栓和出血。</p>',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK538475/',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3534,
    name: 'paroxysmal-nocturnal-hemoglobinuria-journey.png',
    url: '/images/diseases/paroxysmal-nocturnal-hemoglobinuria-journey.png',
  },
  tagSlugs: ['hematologic', 'autoimmune', 'treatable'],
};

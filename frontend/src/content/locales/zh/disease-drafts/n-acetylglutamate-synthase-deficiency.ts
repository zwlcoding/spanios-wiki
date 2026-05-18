import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNAcetylglutamateSynthaseDeficiency: DiseaseDraft = {
  ...entity(5025, 'disease-n-acetylglutamate-synthase-deficiency'),
  name: 'N-乙酰谷氨酸合成酶缺乏症',
  nameEn: 'N-acetylglutamate Synthase Deficiency',
  alias: 'NAGS缺乏症、NAGS deficiency',
  icd10Code: 'E72.2',
  slug: 'n-acetylglutamate-synthase-deficiency',
  oneSentence:
    'N-乙酰谷氨酸合成酶缺乏症是尿素循环障碍中最罕见的类型，由 NAGS 基因变异导致体内无法合成 N-乙酰谷氨酸，从而不能激活氨基甲酰磷酸合成酶 I，引起氨解毒障碍和高氨血症，但可通过特异性替代药物卡巴谷氨酸有效治疗。',
  plainName: '身体没法把有毒的氨变成尿素排出去的一种罕见代谢病',
  prevalence:
    '极其罕见，全球仅报道数十例。是尿素循环障碍中发病率最低的类型，但临床表现可非常严重。中国也有少数病例报道。',
  searchIntents: [
    'NAGS缺乏症 新生儿筛查',
    'N-乙酰谷氨酸合成酶缺乏症 症状',
    '高氨血症 遗传代谢病',
    '卡巴谷氨酸 NAGS',
    '尿素循环障碍 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是尿素循环障碍中最罕见的一种，由于 NAGS 基因变异导致 N-乙酰谷氨酸合成酶缺乏。N-乙酰谷氨酸是激活氨基甲酰磷酸合成酶 I 的必需辅因子，缺乏后尿素循环第一步无法进行，导致血氨升高。特点是卡巴谷氨酸（carglumic acid）替代治疗效果极佳。',
    whoToSeeFirst:
      '新生儿筛查阳性或疑似病例应尽快就诊新生儿科或遗传代谢科。出现嗜睡、呕吐、意识改变、抽搐等提示高氨血症时应立即急诊。',
    isGenetic:
      '常染色体隐性遗传。父母通常为携带者，每次怀孕再发风险约25%。可进行产前诊断和携带者筛查。',
    hasTreatment:
      '有特效替代治疗药物卡巴谷氨酸（carglumic acid），可模拟 N-乙酰谷氨酸的功能，迅速激活尿素循环。急性高氨血症时需紧急降氨治疗（透析、苯甲酸钠/苯丁酸钠等）。',
    commonDelayReason:
      '新生儿期高氨血症症状（嗜睡、拒奶、呕吐、抽搐）被误认为败血症、颅内出血或缺氧缺血性脑病；因极为罕见，基层医生往往不认识此病；新生儿筛查普及不足或结果回报延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿期（生后24-72小时）出现嗜睡、拒奶、呕吐、肌张力低下、呼吸急促。',
      '快速进展的意识障碍、昏迷、抽搐，伴呼吸性碱中毒。',
      '血氨显著升高（常>200 μmol/L，甚至>1000 μmol/L），而肝功能正常或轻度异常。',
      '兄弟姐妹中有不明原因新生儿死亡或已知尿素循环障碍。',
      '部分晚发型患者可在感染、高蛋白饮食或应激后出现高氨血症脑病。',
    ],
    commonWrongTurns: [
      '新生儿期症状被当作败血症或缺氧缺血性脑病，未及时查血氨。',
      '因肝功能正常而排除代谢病，未想到尿素循环障碍。',
      '高氨血症时给予高蛋白营养支持，加重病情。',
      '未及时使用卡巴谷氨酸，延误了特异性治疗。',
      '未告知急诊医生孩子的代谢病史，导致使用禁忌药物（如丙戊酸）。',
    ],
    firstDepartments: [
      '新生儿科 / 儿科遗传代谢科',
      '急诊科（急性高氨血症时）',
      '遗传咨询科',
      '营养科（长期饮食管理）',
    ],
    diagnosisChecklist: [
      '携带新生儿筛查报告。',
      '记录症状出现时间、进展速度和诱发因素（感染、饥饿、手术）。',
      '整理血氨、血气、肝功能、血糖、尿有机酸、血氨基酸分析结果。',
      '询问医生是否需要做 NAGS 基因检测。',
    ],
    testsToAskAbout: [
      '血氨（最核心指标，需及时处理样本）。',
      '血气分析（常显示呼吸性碱中毒）。',
      '血浆氨基酸谱（谷氨酰胺升高，瓜氨酸和精氨酸降低）。',
      '尿有机酸分析（乳清酸正常或降低，可与OTC缺乏鉴别）。',
      'NAGS 基因检测。',
      '酶学检测（肝活检 NAGS 酶活性测定，极少开展）。',
    ],
    questionsForDoctor: [
      '我的孩子能否确诊 NAGS 缺乏症？还是其他尿素循环障碍？',
      '卡巴谷氨酸什么时候开始用？剂量如何调整？',
      '急性高氨血症的紧急处理流程是什么？家里需要准备什么？',
      '日常饮食中蛋白质摄入量应该控制在多少？',
      '以后怀孕前需要做哪些遗传咨询和产前诊断？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NAGS 缺乏症的临床表现与其他尿素循环障碍相似，但个体差异较大。新生儿型在生后数小时至数天内出现症状，表现为嗜睡、拒奶、呕吐、肌张力低下、呼吸急促、低体温，迅速进展为昏迷和抽搐。高氨血症可引起脑水肿和颅内压增高，导致不可逆的神经损伤。</p><p>晚发型（部分性酶缺乏）可在婴儿期、儿童期甚至成年期发病，常在感染、高蛋白饮食、禁食或手术等应激状态下诱发高氨血症脑病，表现为行为改变、意识模糊、共济失调、呕吐、嗜睡等。</p>',
    diagnosis:
      '<p>诊断依赖于高氨血症的识别和鉴别。新生儿筛查通过血氨基酸和酰基肉碱谱可提示尿素循环障碍，但 NAGS 缺乏症在新生儿筛查中可能漏检。确诊需要 NAGS 基因检测。</p><p>实验室特征：血氨显著升高，血气分析显示呼吸性碱中毒，血浆谷氨酰胺升高，瓜氨酸和精氨酸降低，尿乳清酸正常或降低（此点有助于与鸟氨酸氨甲酰基转移酶缺乏症鉴别，后者尿乳清酸升高）。肝活检酶活性测定可确诊但临床很少需要。</p>',
    treatment:
      '<p>卡巴谷氨酸（carglumic acid）是 NAGS 缺乏症的特异性替代治疗药物，可模拟内源性 N-乙酰谷氨酸的功能，激活 CPSI，恢复尿素循环。剂量通常为 100-250 mg/kg/天，分2-4次口服，急性期可鼻胃管给药。</p><p>急性高氨血症的紧急处理：立即停止蛋白质摄入，静脉输注高浓度葡萄糖和脂肪乳提供热量、抑制分解代谢；苯甲酸钠和苯丁酸钠促进氨的替代排泄途径；严重高氨血症（血氨>400-500 μmol/L或伴脑水肿）需血液透析。稳定后逐步恢复蛋白质摄入，通常需长期限制蛋白质并补充必需氨基酸。</p>',
    longTermCare:
      '<p>长期管理核心是预防高氨血症复发：终身服用卡巴谷氨酸；个体化蛋白质限制（通常 1.0-2.0 g/kg/天，儿童需保证生长发育所需）；避免长时间禁食；感染发热时增加热量摄入、减少蛋白质；定期监测血氨、血浆氨基酸和生长发育指标。</p><p>神经发育随访非常重要，新生儿期严重高氨血症可能导致智力障碍、脑瘫或癫痫。携带急救卡和疾病说明，就医时主动告知代谢病史。遗传咨询和家系筛查至关重要。</p>',
    fertilityOrFamily:
      '<p>NAGS 缺乏症为常染色体隐性遗传。确诊后应对父母进行携带者检测，并对家族成员进行筛查。再次生育的再发风险为 25%。可通过产前基因检测（羊水或绒毛膜）或胚胎植入前遗传学检测（PGT）降低风险。</p>',
    emergencySigns:
      '<p>以下情况需立即急诊并告知医生 NAGS 缺乏症/尿素循环障碍诊断：持续呕吐伴拒食、嗜睡或意识改变、呼吸急促或深大呼吸、抽搐或昏迷、行为异常或共济失调（晚发型）。</p><p>如患者清醒但无法进食，可先口服含糖饮料，同时尽快就医。急诊处理重点是停止蛋白质摄入、提供充足葡萄糖、尽快启动降氨治疗。卡巴谷氨酸应作为常备急救药物随身携带。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Urea Cycle Disorders Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
    },
    {
      name: 'Orphanet: N-acetylglutamate synthase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail:407',
    },
    {
      name: 'NORD: Urea Cycle Disorders',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/urea-cycle-disorders/',
    },
  ],
  symptoms:
    '<p>新生儿型表现为生后数小时至数天内嗜睡、拒奶、呕吐、肌张力低下、呼吸急促，迅速进展为昏迷和抽搐。晚发型在应激后出现高氨血症脑病。</p>',
  diagnosis:
    '<p>高氨血症伴呼吸性碱中毒，血浆谷氨酰胺升高、瓜氨酸和精氨酸降低，尿乳清酸正常或降低。NAGS基因检测确诊。</p>',
  treatment:
    '<p>卡巴谷氨酸是特异性替代治疗；急性高氨血症需紧急降氨（苯甲酸钠/苯丁酸钠、透析）；长期限制蛋白质摄入。</p>',
  prognosis:
    '<p>早期诊断和卡巴谷氨酸治疗可显著改善预后；新生儿期严重高氨血症可能导致不可逆神经损伤。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3525,
    name: 'n-acetylglutamate-synthase-deficiency-journey.png',
    url: '/images/diseases/n-acetylglutamate-synthase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseOrnithineTranscarbamylaseDeficiency: DiseaseDraft = {
  ...entity(5031, 'disease-ornithine-transcarbamylase-deficiency'),
  name: '鸟氨酸氨甲酰基转移酶缺乏症',
  nameEn: 'Ornithine Transcarbamylase Deficiency',
  alias: 'OTC缺乏症、OTC deficiency',
  icd10Code: 'E72.4',
  slug: 'ornithine-transcarbamylase-deficiency',
  oneSentence:
    '鸟氨酸氨甲酰基转移酶缺乏症是尿素循环障碍中最常见的类型，为X-连锁隐性遗传，由OTC基因突变导致肝脏无法将氨转化为尿素，引起高氨血症，新生儿期男性患者病情严重，女性杂合子可在儿童期或成年期出现迟发型症状。',
  plainName: '身体没法把有毒的氨变成尿素的遗传代谢病',
  prevalence:
    '发病率约 1/56,000-1/77,000 活产儿，是尿素循环障碍中最常见的类型。男性患者症状通常较女性严重，但女性携带者也可出现症状。',
  searchIntents: [
    'OTC缺乏症 新生儿',
    '鸟氨酸氨甲酰基转移酶缺乏症 症状',
    '高氨血症 尿素循环障碍',
    'OTC缺乏症 治疗',
    'OTC缺乏症 遗传 女性携带者',
  ],
  quickLook: {
    whatItIs:
      '这是尿素循环障碍中最常见的一种，因OTC基因突变导致鸟氨酸氨甲酰基转移酶缺乏，肝脏无法将氨转化为尿素，导致血氨升高。男性患者多为新生儿型，病情严重；女性杂合子可因X染色体失活偏斜而出现迟发型症状。',
    whoToSeeFirst:
      '新生儿科或儿科遗传代谢科。出现嗜睡、呕吐、意识改变、抽搐等提示高氨血症时应立即急诊。女性出现不明原因高氨血症脑病也应考虑此病。',
    isGenetic:
      'X-连锁隐性遗传。致病基因为OTC。男性患者一条X染色体即发病；女性携带者通常无症状，但因X染色体失活偏斜，约15-20%可出现症状。男性患者的女儿100%为携带者，儿子不患病。',
    hasTreatment:
      '目前无根治方法。急性高氨血症需紧急降氨（苯甲酸钠、苯丁酸钠、精氨酸、透析）；长期需限制蛋白质摄入、服用降氨药物、补充精氨酸。肝移植可根治。',
    commonDelayReason:
      '新生儿期症状被当作败血症或颅内出血；女性迟发型症状（头痛、呕吐、意识障碍）被当作偏头痛或精神疾病；未及时做血尿代谢检查和基因检测；高蛋白饮食或感染诱发急性发作后未追溯病因。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿期（生后24-72小时）出现嗜睡、拒奶、呕吐、呼吸急促、肌张力低下，迅速进展为昏迷。',
      '血氨显著升高，伴呼吸性碱中毒，尿乳清酸升高（特征性）。',
      '女性儿童或成人在高蛋白饮食、感染、手术或分娩后出现反复头痛、呕吐、意识模糊、共济失调或精神症状。',
      '家族中有男性新生儿不明原因死亡或已知OTC缺乏症。',
      '兄弟姐妹中有类似代谢病史。',
    ],
    commonWrongTurns: [
      '新生儿期高氨血症被当作败血症或缺氧缺血性脑病。',
      '女性患者的精神症状被当作精神分裂症或双相情感障碍。',
      '女性患者的反复呕吐和头痛被当作偏头痛或周期性呕吐综合征。',
      '未告知急诊医生代谢病史，导致禁食时间过长或高蛋白营养支持加重病情。',
      '未对家族成员（尤其女性）进行携带者筛查。',
    ],
    firstDepartments: [
      '新生儿科 / 儿科遗传代谢科',
      '急诊科（急性高氨血症时）',
      '神经内科（女性迟发型神经精神症状）',
      '遗传咨询科',
      '营养科',
    ],
    diagnosisChecklist: [
      '记录症状出现时间、进展速度、诱发因素（感染、手术、高蛋白饮食、分娩）。',
      '整理血氨、血气、肝功能、尿有机酸、血氨基酸结果。',
      '询问医生是否需要做OTC基因检测。',
      '绘制家族谱系图，尤其关注男性新生儿早亡史。',
    ],
    testsToAskAbout: [
      '血氨（最核心指标）。',
      '血气分析（呼吸性碱中毒）。',
      '血浆氨基酸谱（谷氨酰胺升高，瓜氨酸正常或降低，精氨酸降低）。',
      '尿有机酸分析（乳清酸升高，特征性改变）。',
      'OTC基因检测。',
      '肝活检OTC酶活性测定（极少需要）。',
      '女性携带者检测（X染色体失活分析辅助判断症状风险）。',
    ],
    questionsForDoctor: [
      '我的孩子/我是新生儿型还是迟发型？严重程度如何？',
      '急性高氨血症的紧急处理流程是什么？',
      '日常蛋白质摄入量应控制在多少？',
      '是否适合肝移植？什么时候评估？',
      '家族女性成员是否需要进行携带者筛查？以后怀孕有哪些产前诊断选项？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>OTC缺乏症的临床表现与年龄和性别有关。新生儿期男性（半合子）患者在生后数小时至数天内出现症状：嗜睡、拒奶、呕吐、呼吸急促、肌张力低下，迅速进展为昏迷和抽搐。高氨血症可导致脑水肿和不可逆神经损伤，如不及时处理，死亡率高。</p><p>女性杂合子因X染色体失活偏斜，约15-20%出现症状，表现从轻度蛋白不耐受到严重高氨血症脑病不等。迟发型可在儿童期、青春期或成年期发病，常由感染、高蛋白饮食、手术、分娩或某些药物（如丙戊酸）诱发。症状包括：反复头痛、呕吐、意识模糊、共济失调、精神症状（幻觉、妄想、行为异常）、癫痫发作，甚至昏迷。</p>',
    diagnosis:
      '<p>诊断依赖于高氨血症的识别和鉴别。新生儿筛查可提示尿素循环障碍。实验室特征：血氨升高，血气分析显示呼吸性碱中毒，血浆谷氨酰胺升高，瓜氨酸正常或轻度降低，精氨酸降低，尿乳清酸升高（这是OTC缺乏症的特征性改变，有助于与NAGS缺乏症和CPS1缺乏症鉴别，后两者尿乳清酸正常或降低）。</p><p>确诊依赖OTC基因检测。女性携带者检测也很重要，可通过基因检测明确。肝活检OTC酶活性测定可确诊但临床很少需要。产前诊断可通过绒毛膜取样或羊水穿刺进行基因检测。</p>',
    treatment:
      '<p>急性高氨血症的紧急处理：立即停止蛋白质摄入；静脉输注高浓度葡萄糖和脂肪乳提供热量、抑制分解代谢；苯甲酸钠和苯丁酸钠促进氨的替代排泄途径；精氨酸补充；严重高氨血症（血氨>400-500 μmol/L或伴脑水肿）需血液透析。</p><p>长期管理：限制蛋白质摄入（通常1.0-2.0 g/kg/天），使用苯甲酸钠、苯丁酸钠和精氨酸等降氨药物，避免代谢应激。肝移植是根治方法，可完全纠正代谢缺陷，适用于反复发作或饮食/药物控制不佳的患者。部分女性携带者在妊娠期症状加重，需多学科管理。</p>',
    longTermCare:
      '<p>长期随访包括：定期监测血氨、血浆氨基酸、生长发育（儿童）、肝肾功能；神经发育评估（尤其新生儿期严重高氨血症后）；营养状态评估；女性携带者需在妊娠前和妊娠期加强监测。</p><p>家庭管理：严格遵循蛋白质限制饮食；感染发热时增加热量摄入、减少蛋白质；避免丙戊酸等可诱发高氨血症的药物；携带急救卡和疾病说明；遗传咨询帮助家庭了解携带者筛查和产前诊断。</p>',
    fertilityOrFamily:
      '<p>OTC缺乏症为X-连锁隐性遗传。男性患者的女儿100%为携带者，儿子不患病。女性携带者的儿子有50%患病风险，女儿有50%为携带者。可通过产前基因检测（羊水或绒毛膜）或胚胎植入前遗传学检测（PGT）降低风险。女性携带者应在妊娠前接受遗传咨询。</p>',
    emergencySigns:
      '<p>需立即急诊并告知医生OTC缺乏症/尿素循环障碍诊断：持续呕吐伴拒食、嗜睡或意识改变、呼吸急促或深大呼吸、抽搐或昏迷、精神症状急性加重。如清醒但无法进食，先口服含糖饮料，同时尽快就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Urea Cycle Disorders Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
    },
    {
      name: 'NORD: Ornithine Transcarbamylase Deficiency',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/ornithine-transcarbamylase-deficiency/',
    },
    {
      name: 'Orphanet: Ornithine transcarbamylase deficiency',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/664',
    },
  ],
  symptoms:
    '<p>新生儿期男性患者表现为生后数天内嗜睡、呕吐、昏迷和抽搐；女性杂合子可因X染色体失活偏斜出现迟发型症状，如头痛、呕吐、意识障碍和精神症状。</p>',
  diagnosis:
    '<p>高氨血症伴呼吸性碱中毒，血浆谷氨酰胺升高、瓜氨酸正常或降低、尿乳清酸升高。OTC基因检测确诊。</p>',
  treatment:
    '<p>急性期紧急降氨（苯甲酸钠、苯丁酸钠、精氨酸、透析）；长期限制蛋白质、服用降氨药物；肝移植可根治。</p>',
  prognosis:
    '<p>新生儿期严重高氨血症可导致不可逆脑损伤或死亡；早期诊断和规范管理可改善预后；肝移植后预后良好。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1217/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3531,
    name: 'ornithine-transcarbamylase-deficiency-journey.png',
    url: '/images/diseases/ornithine-transcarbamylase-deficiency-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
};

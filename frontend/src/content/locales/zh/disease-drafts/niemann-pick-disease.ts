import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNiemannPickDisease: DiseaseDraft = {
  ...entity(5028, 'disease-niemann-pick-disease'),
  name: '尼曼匹克病',
  nameEn: 'Niemann-Pick Disease',
  alias: 'NPD、鞘磷脂贮积症、NPC',
  icd10Code: 'E75.2',
  slug: 'niemann-pick-disease',
  oneSentence:
    '尼曼匹克病是一组遗传性溶酶体贮积病，主要分为A/B型（酸性鞘磷脂酶缺乏）和C型（NPC1/NPC2基因突变导致细胞内胆固醇转运障碍），累及肝脏、脾脏、神经系统和肺部，目前有多种对症治疗及疾病修正治疗手段。',
  plainName: '细胞内胆固醇和脂肪"堵车"导致多器官受损的遗传病',
  prevalence:
    'A/B型总体发病率约 1/250,000；C型约 1/100,000-1/150,000。不同人群携带者频率差异较大，如西班牙裔人群中某些突变频率较高。',
  searchIntents: [
    '尼曼匹克病 症状',
    'NPC 垂直凝视麻痹',
    '尼曼匹克病 治疗 麦格司他',
    'Niemann-Pick 环糊精',
    '尼曼匹克病 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是一组溶酶体贮积病。A/B型因酸性鞘磷脂酶缺乏导致鞘磷脂蓄积；C型因NPC1或NPC2基因突变导致胆固醇和糖脂在溶酶体内异常蓄积。主要影响肝脏、脾脏、脑和肺。C型以神经系统症状为主，是更常见的类型。',
    whoToSeeFirst:
      '儿科或神经内科（神经遗传/代谢专科）。新生儿或婴儿期肝脾肿大者应尽早就诊。出现共济失调、垂直凝视麻痹等神经系统症状时应尽快神经科评估。',
    isGenetic:
      '常染色体隐性遗传。A/B型为SMPD1基因突变；C型为NPC1（约95%）或NPC2基因突变。父母为携带者，每次怀孕再发风险25%。可进行产前诊断和携带者筛查。',
    hasTreatment:
      'A/B型目前主要为对症支持，酶替代治疗在研究中；C型有口服药物麦格司他（miglustat）可延缓神经功能恶化，部分患者可接受鞘内环糊精（HPBCD）治疗。对症处理包括癫痫控制、营养支持和物理康复。',
    commonDelayReason:
      '新生儿肝脾肿大被误认为普通新生儿黄疸或感染；儿童期共济失调和垂直凝视麻痹被误认为脑瘫或小脑疾病；成人期精神症状被单纯当作精神疾病；延迟基因检测和溶酶体酶活性测定。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿或婴儿期出现肝脾肿大、黄疸持续不退、发育迟缓。',
      '婴幼儿出现肌张力低下、喂养困难、生长落后。',
      '儿童期出现进行性共济失调、垂直性核上性凝视麻痹（眼球上下活动受限）、构音障碍、学习困难。',
      '青少年或成人出现精神症状（幻觉、妄想、抑郁）、痴呆、共济失调、癫痫发作。',
      '兄弟姐妹中有类似症状或已知尼曼匹克病。',
    ],
    commonWrongTurns: [
      '新生儿肝脾肿大和黄疸当作普通新生儿肝炎或胆道闭锁。',
      '垂直凝视麻痹和共济失调当作脑瘫、小脑肿瘤或遗传性共济失调。',
      '成人精神症状仅按精神分裂症或双相情感障碍治疗，未排查代谢病因。',
      '未及时进行酸性鞘磷脂酶活性测定或NPC1/NPC2基因检测。',
      '延误麦格司他或环糊精治疗的启动时机。',
    ],
    firstDepartments: [
      '儿科 / 儿科遗传代谢科',
      '神经内科（神经遗传/代谢专科）',
      '消化科（肝脾肿大评估）',
      '遗传咨询科',
      '康复医学科',
      '精神科（成人精神症状为主时）',
    ],
    diagnosisChecklist: [
      '记录症状出现时间和进展速度，尤其是肝脾肿大、神经退行性变的顺序。',
      '携带既往肝功能、腹部超声或CT、头颅MRI报告。',
      '询问医生是否需要做酸性鞘磷脂酶活性测定（A/B型）或血浆氧固醇检测（C型）。',
      '询问NPC1/NPC2基因检测和家系筛查方案。',
    ],
    testsToAskAbout: [
      '白细胞或皮肤成纤维细胞酸性鞘磷脂酶活性（A/B型）。',
      '血浆7-酮胆固醇和总氧固醇（C型筛查，敏感性和特异性高）。',
      ' Filipin染色（皮肤成纤维细胞，显示胆固醇异常蓄积）。',
      'NPC1和NPC2基因检测。',
      'SMPD1基因检测（A/B型）。',
      '腹部超声/CT/MRI（评估肝脾大小和病变）。',
      '头颅MRI（评估小脑萎缩、白质病变）。',
      '骨髓穿刺（可见尼曼匹克细胞/泡沫细胞）。',
    ],
    questionsForDoctor: [
      '我的孩子属于A/B型还是C型？严重程度如何？',
      '是否适合麦格司他治疗？何时开始？有哪些副作用？',
      '是否可以获得环糊精（HPBCD）治疗？需要什么条件？',
      '如何管理癫痫、吞咽困难和营养不良？',
      '家族成员是否需要进行携带者筛查？以后怀孕有哪些产前诊断选项？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>NPC是最常见的尼曼匹克病类型，临床表现与发病年龄相关。新生儿期可有胆汁淤积性黄疸和肝脾肿大（新生儿型）。婴幼儿期表现为肌张力低下、发育迟缓、肝脾肿大。儿童期以进行性神经退行性变为特征：共济失调、垂直性核上性凝视麻痹（最具特征性的体征）、构音障碍、吞咽困难、学习困难、癫痫发作。</p><p>青少年和成人型主要表现为精神症状（精神病样症状、认知下降、痴呆）、共济失调、癫痫和核上性凝视麻痹。A型（急性神经型）病情最重，多在3岁前死亡；B型（慢性非神经型）以肝脾肿大和肺部受累为主，神经系统症状较轻或无。</p>',
    diagnosis:
      '<p>NPC的诊断依赖血浆氧固醇检测（7-酮胆固醇和3β,5α,6β-三羟胆烷酰甘氨酸升高）， Filipin染色（皮肤成纤维细胞胆固醇异常蓄积），以及NPC1/NPC2基因检测。骨髓检查可见特征性泡沫细胞（尼曼匹克细胞），但非特异性。</p><p>A/B型诊断依赖白细胞或皮肤成纤维细胞酸性鞘磷脂酶活性测定，以及SMPD1基因检测。需与戈谢病、酸性鞘磷脂酶缺乏症的其他类型、其他溶酶体贮积病鉴别。</p>',
    treatment:
      '<p>NPC的治疗包括：麦格司他（miglustat，底物减少疗法），口服后可减少糖脂合成，延缓神经功能恶化，是目前主要的治疗药物。鞘内注射2-羟丙基-β-环糊精（HPBCD）在部分国家已获批或作为试验性治疗，可清除脑内胆固醇蓄积，改善神经系统症状。</p><p>对症治疗：抗癫痫药物、胃管喂养或胃造瘘（吞咽困难时）、物理和作业治疗、言语治疗、心理支持。A/B型目前主要为对症支持治疗，酶替代疗法在临床试验中。</p>',
    longTermCare:
      '<p>长期随访需要多学科团队：神经科（运动、认知和癫痫评估）、消化科（肝脾功能和营养）、眼科（垂直凝视麻痹评估）、呼吸科（肺功能和睡眠呼吸监测）、康复科、营养科和精神科（成人患者）。</p><p>家庭护理重点：预防吸入性肺炎（调整食物质地、进食姿势）、预防跌倒、维持营养状态、心理支持。疾病进展通常不可逆，姑息治疗和临终关怀在晚期非常重要。</p>',
    fertilityOrFamily:
      '<p>尼曼匹克病为常染色体隐性遗传。确诊后应对父母进行携带者检测，并对家族成员进行筛查。再次生育的再发风险为25%。可通过产前基因检测（羊水或绒毛膜）或胚胎植入前遗传学检测（PGT）降低风险。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：癫痫持续状态、严重吞咽困难导致窒息或反复吸入性肺炎、急性呼吸困难（肺部受累）、意识改变或严重脱水。携带疾病诊断说明，就医时告知医生病情。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Niemann-Pick Disease Type C',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1296/',
    },
    {
      name: 'NORD: Niemann-Pick Disease',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/niemann-pick-disease/',
    },
    {
      name: 'Orphanet: Niemann-Pick disease type C',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/646',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>A/B型以肝脾肿大和肺受累为主；C型以神经系统症状为主，包括共济失调、垂直凝视麻痹、构音障碍、癫痫和精神症状。</p>',
  diagnosis:
    '<p>NPC依赖血浆氧固醇、Filipin染色和NPC1/NPC2基因检测；A/B型依赖酸性鞘磷脂酶活性和SMPD1基因检测。</p>',
  treatment:
    '<p>NPC可用麦格司他延缓进展，部分患者可接受鞘内环糊精治疗；A/B型主要为对症支持。酶替代疗法在研究中。</p>',
  prognosis:
    '<p>NPC进展通常不可逆，早期治疗可延缓神经功能恶化。A型预后最差，B型相对较好。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1296/',
  categorySlug: 'metabolic',
  charityIds: [39],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3528,
    name: 'niemann-pick-disease-journey.png',
    url: '/images/diseases/niemann-pick-disease-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric'],
};

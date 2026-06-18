import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePeutzJeghersSyndrome: DiseaseDraft = {
  ...entity(5035, 'disease-peutz-jeghers-syndrome'),
  name: '黑斑息肉综合征',
  nameEn: 'Peutz-Jeghers Syndrome',
  alias: 'PJS、Peutz-Jeghers综合征、色素沉着息肉综合征',
  icd10Code: 'Q85.8',
  slug: 'peutz-jeghers-syndrome',
  oneSentence:
    '黑斑息肉综合征是一种罕见的常染色体显性遗传病，因STK11/LKB1基因突变导致，以胃肠道错构瘤性息肉和口唇、口腔及指端皮肤黏膜黑色素沉着为特征，显著增加胃肠道癌和多种肠外癌（尤其乳腺癌、胰腺癌、卵巢癌）风险，需终身监测。',
  plainName: '嘴唇和手指长黑斑、肠道长息肉的遗传性癌综合征',
  prevalence:
    '患病率约 1/25,000-1/280,000；无性别和种族差异。由于症状不典型，实际患病率可能被低估。约50%的PJS患者有家族史，50%为新发突变。',
  searchIntents: [
    '黑斑息肉综合征 症状',
    'Peutz-Jeghers 息肉',
    'PJS 黑色素斑',
    '黑斑息肉综合征 癌症风险',
    'Peutz-Jeghers 筛查',
  ],
  quickLook: {
    whatItIs:
      '这是一种常染色体显性遗传的错构瘤性息肉病综合征，特征是胃肠道多发Peutz-Jeghers息肉（错构瘤性，可造成肠套叠和出血）和特征性皮肤黏膜黑色素斑。携带STK11/LKB1基因突变者一生中患癌风险高达90%。',
    whoToSeeFirst:
      '消化内科或遗传咨询科。儿童出现腹痛、便血或口唇黑斑应尽早评估；成人新发黑斑或息肉应排查。',
    isGenetic:
      '是常染色体显性遗传病，由STK11（又称LKB1）基因突变引起。患者子女有50%遗传风险。约50%病例为新发突变（父母无突变）。基因检测可明确诊断并指导家族筛查。',
    hasTreatment:
      '无特效药物治疗。主要管理包括：内镜下息肉切除（预防肠套叠和出血）、定期癌症筛查（上消化道内镜、结肠镜、乳腺MRI、妇科超声、胰腺MRI等）、肠套叠或梗阻时手术治疗。',
    commonDelayReason:
      '口唇黑斑被当作普通雀斑或色素痣；儿童腹痛被当作普通胃肠炎或肠系膜淋巴结炎；便血被当作痔疮或肛裂；基层医院不了解PJS的癌症风险；未做基因检测和家族筛查。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴幼儿或儿童期口唇、口腔黏膜、手指、足趾出现深褐色或黑色斑点（色素沉着）。',
      '反复腹痛、腹胀，尤其伴肠套叠症状（阵发性绞痛、呕吐、果酱样大便）。',
      '反复便血或黑便。',
      '家族史中有多人患PJS、胃肠道息肉或早发性胃肠道癌、乳腺癌、胰腺癌。',
      '内镜发现多发Peutz-Jeghers息肉（特征性的树枝状平滑肌核心）。',
    ],
    commonWrongTurns: [
      '口唇黑斑被当作普通雀斑、色素痣或化妆品过敏。',
      '儿童腹痛被当作普通胃肠炎、便秘或肠系膜淋巴结炎。',
      '便血被当作痔疮、肛裂或牛奶蛋白过敏（婴幼儿）。',
      '未及时进行基因检测和癌症筛查。',
      '息肉切除后未定期复查内镜。',
    ],
    firstDepartments: [
      '消化内科（成人）',
      '儿科消化科（儿童）',
      '遗传咨询科',
      '皮肤科（色素沉着为主时）',
      '胃肠外科（肠套叠或梗阻时）',
    ],
    diagnosisChecklist: [
      '记录黑斑出现时间、部位、变化和家族中类似情况。',
      '整理既往腹痛、便血、肠套叠和息肉病史。',
      '绘制家族谱系图，标注消化道肿瘤、乳腺癌、胰腺癌等。',
      '询问医生是否符合WHO诊断标准（组织学证实PJS息肉 + 特征性色素沉着 + 家族史）。',
      '了解是否需要做STK11/LKB1基因检测。',
    ],
    testsToAskAbout: [
      '全身体格检查（记录黑斑分布和特征）。',
      '上消化道内镜和结肠镜（评估息肉数量和大小）。',
      '胶囊内镜或小肠镜（评估小肠息肉，PJS息肉好发于小肠）。',
      '腹部CT或MRI（评估息肉大小、肠套叠和胰腺情况）。',
      'STK11/LKB1基因检测（明确诊断和指导家族筛查）。',
      '女性：乳腺MRI或钼靶、妇科超声（卵巢和子宫）、宫颈筛查。',
      '男性：睾丸超声（评估性索肿瘤伴环状小管）。',
    ],
    questionsForDoctor: [
      '我的黑斑和息肉是否符合PJS诊断标准？',
      'STK11基因检测是否阳性？突变类型是什么？',
      '息肉需要内镜切除还是手术？多久复查一次？',
      '我的癌症风险有多高？需要做哪些筛查？从什么时候开始？',
      '家族成员是否需要基因检测？如何安排？',
      '妊娠期息肉和癌症筛查如何管理？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>皮肤黏膜黑色素斑是PJS的特征性表现，通常在婴儿期或儿童早期出现，好发于口唇、口腔黏膜、手指、足趾、手掌、足底和肛周。斑点呈深褐色至黑色，直径1-5mm，边界清楚，不隆起。青春期后可能逐渐消退，但口腔黏膜斑点通常持续存在。</p><p>胃肠道Peutz-Jeghers息肉可发生于胃肠道任何部位，但好发于小肠（尤其空肠）。息肉为错构瘤性，可导致腹痛、腹胀、肠套叠、梗阻、便血和贫血。息肉数量从数个到数百个不等。肠外表现包括：性索肿瘤伴环状小管（SCTAT，女性，多为良性）、卵巢环状小管性索肿瘤、睾丸支持细胞肿瘤、宫颈腺癌（微偏腺癌/恶性腺瘤）和胰腺囊肿。</p>',
    diagnosis:
      '<p>WHO临床诊断标准（满足以下任一即可）：①组织学证实为PJS息肉 + 特征性皮肤黏膜色素沉着；②特征性色素沉着 + 家族史；③任何数量PJS息肉 + 特征性色素沉着。分子诊断：检出STK11/LKB1基因致病性突变可确诊。</p><p>影像学：上消化道内镜、结肠镜、胶囊内镜和小肠镜用于评估息肉。CT或MR小肠造影可评估息肉大小和肠套叠。组织病理学显示PJS息肉的特征性树枝状平滑肌核心。基因检测可明确诊断并指导家族筛查。需与家族性幼年性息肉病、Cowden综合征、Bannayan-Riley-Ruvalcaba综合征等鉴别。</p>',
    treatment:
      '<p>息肉管理：小息肉可内镜下切除；较大息肉或引起症状者需手术切除（尤其肠套叠时）。小肠息肉可通过双气囊小肠镜或外科手术处理。息肉切除术可预防肠套叠和出血，但可能无法降低癌变风险。</p><p>癌症筛查：终身监测至关重要。推荐筛查方案包括：2岁开始上消化道内镜和结肠镜（每2年）；8-10岁开始胶囊内镜/小肠镜（每2年）；25岁开始乳腺MRI或钼靶（每年）；18-20岁开始宫颈筛查（每年）；25岁开始胰腺MRI/MRCP（每1-2年）；睾丸超声（男性，青春期后每年）。具体方案需个体化调整。</p>',
    longTermCare:
      '<p>长期管理核心是定期癌症筛查和息肉监测。PJS患者一生中患癌风险约90%，常见癌种包括：结直肠癌（约39%）、胃癌（约29%）、小肠癌（约13%）、胰腺癌（约11-36%）、乳腺癌（约32-54%）、卵巢癌（约18-21%）、肺癌（约7-17%）和宫颈癌（约10%）。筛查应比普通人更早开始、更频繁。</p><p>遗传咨询：所有患者和家族成员应接受遗传咨询。STK11基因突变携带者需终身监测。产前诊断和PGT可用于高风险家庭。心理支持非常重要，患者和家属需了解癌症风险但避免过度焦虑。保持健康生活方式，戒烟限酒，均衡饮食。</p>',
    fertilityOrFamily:
      '<p>PJS为常染色体显性遗传，患者子女有50%遗传风险。所有患者应接受遗传咨询和STK11基因检测。已知突变的家庭可通过产前诊断（羊膜穿刺或绒毛取样）或胚胎植入前遗传学检测（PGT）降低后代风险。家族成员应进行级联基因检测，携带者需终身监测。</p><p>女性患者需特别注意妇科和乳腺筛查。部分女性患者可能有卵巢环状小管性索肿瘤，通常为良性但需监测。妊娠期间息肉可能增大或引起症状，需消化科和产科联合管理。</p>',
    emergencySigns:
      '<p>需立即急诊的情况：急性腹痛伴呕吐和停止排气排便（肠套叠或梗阻）；大量便血或黑便；急性贫血症状（严重乏力、心悸、晕厥）；腹部触及包块伴压痛。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Peutz-Jeghers Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1266/',
    },
    {
      name: 'NORD: Peutz-Jeghers Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/peutz-jeghers-syndrome/',
    },
    {
      name: 'Orphanet: Peutz-Jeghers syndrome',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/2869',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>特征性皮肤黏膜黑色素斑（口唇、口腔、指端）和胃肠道多发Peutz-Jeghers息肉。息肉可导致腹痛、肠套叠、便血和贫血。显著增加多种癌症风险。</p>',
  diagnosis:
    '<p>根据WHO临床诊断标准（息肉组织学+色素沉着+家族史）。STK11/LKB1基因检测可确诊。内镜检查评估息肉，影像学评估肠套叠和胰腺情况。</p>',
  treatment:
    '<p>内镜或手术切除息肉预防并发症。终身癌症筛查包括消化道内镜、乳腺MRI、胰腺MRI、妇科筛查等。尚无特效药物。</p>',
  prognosis:
    '<p>癌症风险显著升高（约90%），终身监测至关重要。及时筛查可早期发现癌前病变和癌症，改善预后。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1266/',
  categorySlug: 'digestive-hepatic',
  charityIds: [37],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3535,
    name: 'peutz-jeghers-syndrome-journey.png',
    url: '/images/diseases/peutz-jeghers-syndrome-journey.png',
  },
  tagSlugs: ['gastroenterology', 'genetic-counseling', 'cancer-surveillance'],
};

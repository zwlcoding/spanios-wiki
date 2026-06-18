import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const zhDiseaseSummaries: DiseaseDraft[] = [
  {
    ...entity(4, 'disease-21-hydroxylase-deficiency'),
    name: '21-羟化酶缺乏症',
    nameEn: '21-Hydroxylase Deficiency',
    alias: '21-OHD、先天性肾上腺皮质增生症（CAH）',
    icd10Code: 'E25.0',
    slug: '21-hydroxylase-deficiency',
    oneSentence:
      '21-羟化酶缺乏症是先天性肾上腺皮质增生症中最常见的类型，常与 CYP21A2 基因变异有关，可影响皮质醇、醛固酮和雄激素平衡。',
    plainName: '先天性肾上腺激素合成异常',
    prevalence:
      '经典型总体约每 12,000-15,000 名活产婴儿 1 例；中国报告发病率约为 1/20,000-1/10,000，实际识别率受筛查和就医路径影响。',
    searchIntents: [
      '21-羟化酶缺乏症 看什么科',
      '新生儿筛查 17-OHP 高怎么办',
      '先天性肾上腺皮质增生症 失盐危象',
      '21-OHD 基因检测 CYP21A2',
      '21-羟化酶缺乏症 生育遗传咨询',
    ],
    sourceName: '国家罕见病诊疗指南（2019年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/201902/073540e8f83b4a54a28684d23e2ae2f5/files/1732871139221_41526.pdf',
    categorySlug: 'metabolic',
    charityIds: [21, 22],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 302,
      name: '21-hydroxylase-deficiency-journey.png',
      url: '/images/diseases/21-hydroxylase-deficiency-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2001, 'disease-achondroplasia'),
    name: '软骨发育不全',
    nameEn: 'Achondroplasia',
    alias: 'ACH、软骨发育不全症、短肢型侏儒症、第二批罕见病目录第 1 项',
    slug: 'achondroplasia',
    oneSentence:
      '软骨发育不全是一种由 FGFR3 基因功能增强变异引起的骨骼发育疾病，主要表现为四肢近端短、头围偏大、身材矮小，并需要长期关注呼吸、脊柱、神经和耳鼻喉等并发症。',
    plainName: '四肢明显偏短的遗传性骨骼发育病',
    prevalence:
      '已纳入国家第二批罕见病目录；国际资料常估计约每 15,000-40,000 名新生儿 1 例。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [38],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 355,
      name: 'achondroplasia-journey.png',
      url: '/images/diseases/achondroplasia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2002, 'disease-acquired-hemophilia'),
    name: '获得性血友病',
    nameEn: 'Acquired hemophilia',
    alias:
      '获得性血友病A、AHA、凝血因子抑制物相关出血、第二批罕见病目录第 2 项',
    slug: 'acquired-hemophilia',
    oneSentence:
      '获得性血友病是一种后天出现的严重出血性疾病，常因自身抗体抑制凝血因子 VIII 导致凝血功能突然失衡，患者既往常没有出血病史。',
    plainName: '成年人突然出现大片瘀斑或深部出血的罕见凝血病',
    prevalence:
      '已纳入国家第二批罕见病目录；文献常报告发病率约每百万人每年 0.2-1.5 例，老年人和产后人群更常见。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 356,
      name: 'acquired-hemophilia-journey.png',
      url: '/images/diseases/acquired-hemophilia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2003, 'disease-acromegaly'),
    name: '肢端肥大症',
    nameEn: 'Acromegaly',
    alias:
      '肢端肥大症、肢大症、生长激素过多、GH/IGF-1 过多、第二批罕见病目录第 3 项',
    slug: 'acromegaly',
    oneSentence:
      '肢端肥大症是生长激素和 IGF-1 长期过多导致的慢性内分泌疾病，常因垂体腺瘤引起，会让手脚、面容、软组织和多个代谢系统缓慢改变。',
    plainName: '成年人手脚和面容逐渐变大的内分泌病',
    prevalence:
      '已纳入国家第二批罕见病目录；国际资料估计约每 100,000 人 3-14 例已诊断患者。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [40],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 357,
      name: 'acromegaly-journey.png',
      url: '/images/diseases/acromegaly-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'endocrine'],
  },
  {
    ...entity(2004, 'disease-adult-onset-still-disease'),
    name: '成人斯蒂尔病',
    nameEn: 'Adult-onset Still disease',
    alias: 'AOSD、成人Still病、成人发病Still病、第二批罕见病目录第 4 项',
    slug: 'adult-onset-still-disease',
    oneSentence:
      '成人斯蒂尔病是一种罕见的自身炎症性疾病，常以反复高热、关节痛或关节炎、随发热出现的淡红色皮疹和血清铁蛋白显著升高为线索。',
    plainName: '反复高热、皮疹和关节痛的自身炎症病',
    prevalence:
      '已纳入国家第二批罕见病目录；不同研究估计差异较大，总体属于罕见病。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 358,
      name: 'adult-onset-still-disease-journey.png',
      url: '/images/diseases/adult-onset-still-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2005, 'disease-alagille-syndrome'),
    name: 'Alagille综合征',
    nameEn: 'Alagille syndrome',
    alias: '阿拉杰里综合征、ALGS、动脉肝发育不良、第二批罕见病目录第 5 项',
    slug: 'alagille-syndrome',
    oneSentence:
      'Alagille 综合征是一种多系统遗传病，常由 JAG1 或 NOTCH2 相关变异引起，可影响肝内胆管、心脏、血管、眼、骨骼、肾脏和面部特征。',
    plainName: '婴幼儿胆汁淤积合并心脏或多系统表现的遗传病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计约每 70,000 名新生儿 1 例，但轻症可能被低估。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [50],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 359,
      name: 'alagille-syndrome-journey.png',
      url: '/images/diseases/alagille-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(5, 'disease-albinism'),
    name: '白化病',
    nameEn: 'Albinism',
    alias: '眼皮肤白化病、OCA、眼白化病、OA、先天性色素缺乏',
    slug: 'albinism',
    oneSentence:
      '白化病是一组与黑色素合成或分布异常有关的遗传性疾病，常影响皮肤、毛发和眼睛色素，并可能伴随视力发育问题和紫外线敏感。',
    plainName: '皮肤、毛发和眼睛色素减少的遗传病',
    prevalence:
      '眼皮肤白化病在不同人群中的患病率差异较大，常见估计约为每 12,000-20,000 人 1 例；眼白化病相对更少见。',
    categorySlug: 'dermatologic',
    charityIds: [9],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 303,
      name: 'albinism-journey.png',
      url: '/images/diseases/albinism-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2006, 'disease-alpha-1-antitrypsin-deficiency'),
    name: 'α1-抗胰蛋白酶缺乏症',
    nameEn: 'Alpha-1-antitrypsin deficiency',
    alias: 'AATD、AAT缺乏症、Alpha-1、遗传性肺气肿、第二批罕见病目录第 6 项',
    slug: 'alpha-1-antitrypsin-deficiency',
    oneSentence:
      'α1-抗胰蛋白酶缺乏症是一种由 SERPINA1 基因变异导致的遗传性疾病，可让肺更容易发生早发 COPD/肺气肿，也可造成婴儿、儿童或成人肝病。',
    plainName: '会同时影响肺和肝的遗传性蛋白缺乏病',
    prevalence:
      '已纳入国家第二批罕见病目录；在欧洲血统人群中较常见，MedlinePlus Genetics 估计约每 1,500-3,500 人 1 例，亚洲人群相对少见。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 360,
      name: 'alpha-1-antitrypsin-deficiency-journey.png',
      url: '/images/diseases/alpha-1-antitrypsin-deficiency-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(6, 'disease-alport-syndrome'),
    name: 'Alport 综合征',
    nameEn: 'Alport Syndrome',
    alias: '遗传性肾炎、眼-耳-肾综合征、家族性肾炎',
    slug: 'alport-syndrome',
    oneSentence:
      'Alport 综合征是一种与 IV 型胶原相关基因变异有关的遗传性肾脏疾病，常以持续血尿为线索，并可能伴随听力和眼部问题。',
    plainName: '可能影响肾脏、听力和眼睛的遗传性肾炎',
    prevalence:
      '属于罕见遗传性肾病，真实患病率受地区、筛查和基因检测可及性影响。',
    searchIntents: [
      'Alport 综合征 看什么科',
      '儿童长期血尿 听力下降',
      '遗传性肾炎 COL4A5 基因检测',
      'Alport 综合征 蛋白尿怎么办',
      'Alport 综合征 家族筛查',
    ],
    categorySlug: 'renal-urologic',
    charityIds: [13],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 306,
      name: 'alport-syndrome-journey.png',
      url: '/images/diseases/alport-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(1, 'disease-als'),
    name: '肌萎缩侧索硬化',
    nameEn: 'Amyotrophic Lateral Sclerosis',
    alias: '渐冻症、ALS、运动神经元病',
    icd10Code: 'G12.2',
    slug: 'amyotrophic-lateral-sclerosis',
    oneSentence:
      '肌萎缩侧索硬化是一种影响运动神经元的进行性神经系统疾病，可逐渐造成肌肉无力、萎缩、吞咽和呼吸功能受影响。',
    plainName: '逐渐加重的运动神经元病',
    prevalence:
      '全球估计约每 10 万人 2-5 例，具体患病率会随地区、年龄结构和登记方式不同而变化。',
    searchIntents: [
      '渐冻症 早期症状',
      'ALS 看什么科',
      '肌肉跳动无力是不是渐冻症',
      '运动神经元病 肌电图检查',
      '渐冻症 呼吸吞咽风险',
    ],
    categorySlug: 'neurological',
    charityIds: [34, 35],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 310,
      name: 'amyotrophic-lateral-sclerosis-journey.png',
      url: '/images/diseases/amyotrophic-lateral-sclerosis-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(2007, 'disease-anca-associated-vasculitis'),
    name: 'ANCA相关性血管炎',
    nameEn: 'ANCA-associated vasculitis',
    alias:
      'AAV、抗中性粒细胞胞浆抗体相关血管炎、GPA、MPA、EGPA、第二批罕见病目录第 7 项',
    slug: 'anca-associated-vasculitis',
    oneSentence:
      'ANCA 相关性血管炎是一组罕见自身免疫性小血管炎，包括 GPA、MPA 和 EGPA，可累及鼻窦、肺、肾、皮肤、神经等多个器官，严重时会迅速造成器官损伤。',
    plainName: '可能累及肾和肺的自身免疫性血管炎',
    prevalence:
      '已纳入国家第二批罕见病目录；总体属于罕见病，不同亚型和地区发病率差异较大。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 361,
      name: 'anca-associated-vasculitis-journey.png',
      url: '/images/diseases/anca-associated-vasculitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(7, 'disease-angelman-syndrome'),
    name: '天使综合征',
    nameEn: 'Angelman Syndrome',
    alias: '安格曼综合征、Angelman 综合征',
    slug: 'angelman-syndrome',
    oneSentence:
      '天使综合征是一种主要影响神经发育的遗传性疾病，常表现为发育迟缓、语言能力受限、运动协调困难、癫痫和睡眠问题。',
    plainName: '以发育、语言和癫痫问题为主的遗传性神经发育疾病',
    prevalence:
      '估计约每 12,000-20,000 名新生儿 1 例，不同资料和地区统计存在差异。',
    searchIntents: [
      '天使综合征 看什么科',
      '孩子发育迟缓 不会说话 癫痫',
      'Angelman 综合征 UBE3A 检测',
      '天使综合征 康复训练',
      '天使综合征 再生育风险',
    ],
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 307,
      name: 'angelman-syndrome-journey.png',
      url: '/images/diseases/angelman-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(8, 'disease-arginase-deficiency'),
    name: '精氨酸酶缺乏症',
    nameEn: 'Arginase Deficiency',
    alias: 'ARG1 缺乏症、高精氨酸血症、精氨酸血症',
    slug: 'arginase-deficiency',
    oneSentence:
      '精氨酸酶缺乏症是一种尿素循环相关遗传代谢病，常以儿童期逐渐出现的痉挛、发育停滞或倒退、癫痫和精氨酸升高为线索。',
    plainName: '精氨酸代谢异常导致的遗传代谢病',
    prevalence:
      '属于极罕见病，患病率估计低，且受新生儿筛查覆盖和诊断可及性影响。',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 304,
      name: 'arginase-deficiency-journey.png',
      url: '/images/diseases/arginase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(9, 'disease-asphyxiating-thoracic-dystrophy-jeune-syndrome'),
    name: '热纳综合征',
    nameEn: 'Asphyxiating Thoracic Dystrophy / Jeune Syndrome',
    alias: '窒息性胸腔失养症、Jeune 综合征、短肋胸廓发育不良相关疾病',
    slug: 'asphyxiating-thoracic-dystrophy-jeune-syndrome',
    oneSentence:
      '热纳综合征是一种遗传性骨骼纤毛病，常以狭小胸廓、短肋、短肢和婴幼儿呼吸问题为主要线索，并可能累及肾脏、肝脏或视网膜。',
    plainName: '胸廓狭小导致呼吸风险的遗传性骨骼发育病',
    prevalence:
      '估计约每 100,000-130,000 人 1 例，属于罕见遗传性骨骼发育异常。',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 305,
      name: 'asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
      url: '/images/diseases/asphyxiating-thoracic-dystrophy-jeune-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(10, 'disease-atypical-hemolytic-uremic-syndrome'),
    name: '非典型溶血性尿毒症综合征',
    nameEn: 'Atypical Hemolytic Uremic Syndrome',
    alias: 'aHUS、非典型溶血尿毒综合征、补体介导性 HUS',
    slug: 'atypical-hemolytic-uremic-syndrome',
    oneSentence:
      '非典型溶血性尿毒症综合征是一类以微血管血栓、溶血性贫血、血小板减少和肾损伤为主要表现的罕见疾病，常与补体调控异常有关。',
    plainName: '补体异常相关的血液和肾脏急症',
    prevalence:
      '属于罕见病，MedlinePlus 提到美国年发病率估计约每 500,000 人 1 例。',
    searchIntents: [
      'aHUS 看什么科',
      '血小板低 溶血 肾功能异常',
      '非典型溶血尿毒综合征 补体检查',
      'aHUS 和 HUS 区别',
      'aHUS 复发和遗传风险',
    ],
    categorySlug: 'renal-urologic',
    charityIds: [57],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 308,
      name: 'atypical-hemolytic-uremic-syndrome-journey.png',
      url: '/images/diseases/atypical-hemolytic-uremic-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(11, 'disease-autoimmune-encephalitis'),
    name: '自身免疫性脑炎',
    nameEn: 'Autoimmune Encephalitis',
    alias: 'AE、自免脑',
    slug: 'autoimmune-encephalitis',
    oneSentence:
      '自身免疫性脑炎是一组免疫系统攻击脑组织或神经细胞相关结构引起的脑炎，可出现精神行为改变、记忆下降、癫痫、意识改变和运动异常。',
    plainName: '免疫系统错误攻击大脑引起的脑炎',
    prevalence:
      '属于相对少见但越来越被识别的神经免疫疾病，具体患病率受抗体检测和诊断能力影响。',
    searchIntents: [
      '自身免疫性脑炎 早期症状',
      '突然精神异常 癫痫 记忆下降',
      '自免脑 看神经内科还是精神科',
      '自身免疫性脑炎 抗体检查',
      '自免脑 治疗后多久恢复',
    ],
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 309,
      name: 'autoimmune-encephalitis-journey.png',
      url: '/images/diseases/autoimmune-encephalitis-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(12, 'disease-autoimmune-hypophysitis'),
    name: '自身免疫性垂体炎',
    nameEn: 'Autoimmune Hypophysitis',
    alias: '淋巴细胞性垂体炎、IgG4 相关垂体炎',
    slug: 'autoimmune-hypophysitis',
    oneSentence:
      '自身免疫性垂体炎是一类由免疫炎症累及垂体的罕见疾病，可能造成头痛、视野改变、尿崩症或多种垂体激素不足。',
    plainName: '免疫炎症影响垂体功能的罕见病',
    prevalence:
      '总体很罕见，公开研究中的估计差异较大；部分类型更常见于妊娠期或产后女性，也可见于其他人群或免疫治疗相关场景。',
    sourceName: 'Japan Endocrine Society guideline',
    sourceUrl:
      'https://www.jstage.jst.go.jp/article/endocrj/67/4/67_EJ19-0569/_html/-char/en',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 312,
      name: 'autoimmune-hypophysitis-journey.png',
      url: '/images/diseases/autoimmune-hypophysitis-journey.png',
    },
    tagSlugs: ['endocrine'],
  },
  {
    ...entity(
      13,
      'disease-autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    ),
    name: '自身免疫性胰岛素受体病',
    nameEn: 'Autoimmune Insulin Receptopathy (Type B Insulin Resistance)',
    alias: 'B 型胰岛素抵抗综合征、B 型胰岛素抵抗、TBIR',
    slug: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance',
    oneSentence:
      '自身免疫性胰岛素受体病是一种由胰岛素受体自身抗体引起的极罕见自身免疫病，可导致严重胰岛素抵抗、高血糖，也可能出现低血糖。',
    plainName: '免疫抗体干扰胰岛素受体的罕见病',
    prevalence:
      '极罕见，确切患病率不明。公开文献多为病例报告和病例系列，常与系统性红斑狼疮等自身免疫病背景有关。',
    sourceName: 'Orphanet',
    sourceUrl: 'https://www.orpha.net/en/disease/detail/2298',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 311,
      name: 'autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
      url: '/images/diseases/autoimmune-insulin-receptopathy-type-b-insulin-resistance-journey.png',
    },
    tagSlugs: ['endocrine'],
  },
  {
    ...entity(2008, 'disease-bardet-biedl-syndrome'),
    name: 'Bardet-Biedl 综合征',
    nameEn: 'Bardet-Biedl syndrome',
    alias: 'BBS、性幼稚-肥胖-多趾综合征、纤毛病、第二批罕见病目录第 8 项',
    slug: 'bardet-biedl-syndrome',
    oneSentence:
      'Bardet-Biedl 综合征是一种罕见遗传性纤毛病，可影响视网膜、体重、肾脏、手足发育、性腺发育、学习发育和多个器官系统。',
    plainName: '儿童期出现视力下降、体重增加和多系统问题的遗传病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计北美和欧洲多数地区约每 140,000-160,000 名新生儿 1 例，某些人群更高。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 362,
      name: 'bardet-biedl-syndrome-journey.png',
      url: '/images/diseases/bardet-biedl-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2009, 'disease-behcets-disease'),
    name: '白塞病/贝赫切特综合征',
    nameEn: "Behçet's disease",
    alias:
      '白塞综合征、贝赫切特病、Behçet disease、丝绸之路病、第二批罕见病目录第 9 项',
    slug: 'behcets-disease',
    oneSentence:
      '白塞病是一种复发性全身血管炎，常见线索是反复口腔溃疡、生殖器溃疡、皮肤损害和眼部炎症，也可能累及关节、肠道、神经和大血管。',
    plainName: '反复口腔溃疡合并眼、皮肤或血管炎症的免疫病',
    prevalence:
      '已纳入国家第二批罕见病目录；在地中海、中东和亚洲部分地区更常见，在美国和北欧等地区较罕见，MedlinePlus Genetics 提到美国通常少于每 100,000 人 1 例。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'official',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'immunological-rheumatologic',
    charityIds: [78],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 363,
      name: 'behcets-disease-journey.png',
      url: '/images/diseases/behcets-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(14, 'disease-beta-ketothiolase-deficiency'),
    name: 'β-酮硫解酶缺乏症',
    nameEn: 'Beta-Ketothiolase Deficiency',
    alias:
      '3-酮硫解酶缺乏症、α-甲基乙酰乙酸尿症、T2 缺乏症、线粒体乙酰乙酰基辅酶 A 硫解酶缺乏症',
    slug: 'beta-ketothiolase-deficiency',
    oneSentence:
      'β-酮硫解酶缺乏症是一种罕见遗传代谢病，会影响异亮氨酸和酮体代谢，感染、禁食或应激时可能诱发酮症酸中毒。',
    plainName: '容易在感染或禁食时发生酮症酸中毒的遗传代谢病',
    prevalence:
      '非常罕见，公开医学文献中报告人数较少；不同地区的新生儿筛查覆盖和识别能力会影响发现率。',
    sourceName: 'MedlinePlus Genetics',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/beta-ketothiolase-deficiency/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 313,
      name: 'beta-ketothiolase-deficiency-journey.png',
      url: '/images/diseases/beta-ketothiolase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(15, 'disease-biotinidase-deficiency'),
    name: '生物素酶缺乏症',
    nameEn: 'Biotinidase Deficiency',
    alias: 'BTD 缺乏症、迟发型多种羧化酶缺乏症',
    slug: 'biotinidase-deficiency',
    oneSentence:
      '生物素酶缺乏症是一种可通过新生儿筛查发现的遗传代谢病，及时补充生物素通常可以预防许多神经、皮肤和代谢问题。',
    plainName: '身体不能正常回收利用生物素的遗传病',
    prevalence:
      '属于罕见病，不同地区筛查数据差异较大。许多国家和地区已将其纳入新生儿筛查或遗传代谢病筛查范围。',
    searchIntents: [
      '生物素酶缺乏症 新生儿筛查阳性',
      'BTD 缺乏症 看什么科',
      '生物素酶活性低怎么复查',
      '生物素酶缺乏症 抽搐皮疹脱发',
      '生物素酶缺乏症 能不能停生物素',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1322/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 314,
      name: 'biotinidase-deficiency-journey.png',
      url: '/images/diseases/biotinidase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2010, 'disease-blue-rubber-bleb-nevus'),
    name: '蓝色橡皮疱痣综合征',
    nameEn: 'Blue rubber bleb nevus syndrome',
    alias: 'BRBNS、Bean 综合征、蓝色橡皮样疱痣、第二批罕见病目录第 10 项',
    slug: 'blue-rubber-bleb-nevus',
    oneSentence:
      '蓝色橡皮疱痣综合征是一种罕见静脉畸形综合征，常在皮肤和消化道形成蓝紫色柔软疱样病灶，可导致慢性消化道出血和缺铁性贫血。',
    plainName: '皮肤蓝紫色疱样血管畸形合并肠道出血风险的疾病',
    prevalence:
      '已纳入国家第二批罕见病目录；总体非常罕见，公开资料多以病例和小系列报道为主。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'dermatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 364,
      name: 'blue-rubber-bleb-nevus-journey.png',
      url: '/images/diseases/blue-rubber-bleb-nevus-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(17, 'disease-cardic-ion-channelopathies'),
    name: '心脏离子通道病',
    nameEn: 'Cardiac Ion Channelopathies',
    alias: '遗传性心律失常综合征、原发性心电疾病',
    slug: 'cardic-ion-channelopathies',
    oneSentence:
      '心脏离子通道病是一组影响心肌电活动的遗传性或获得性心律失常疾病，可能在心脏结构看似正常时造成晕厥、心律失常或猝死风险。',
    plainName: '心脏电信号通道异常相关的罕见心律失常',
    prevalence:
      '不同亚型差异很大。长 QT 综合征、Brugada 综合征、儿茶酚胺敏感性多形性室速等各有不同人群分布和诊断标准。',
    sourceName: 'GeneReviews: Long QT Syndrome Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1129/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 316,
      name: 'cardic-ion-channelopathies-journey.png',
      url: '/images/diseases/cardic-ion-channelopathies-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(16, 'disease-carnitine-deficiency'),
    name: '原发性肉碱缺乏症',
    nameEn: 'Primary Carnitine Deficiency',
    alias: 'PCD、原发性肉碱转运障碍、肉碱摄取障碍、OCTN2 缺陷',
    slug: 'carnitine-deficiency',
    oneSentence:
      '原发性肉碱缺乏症是一种与 SLC22A5 基因相关的遗传代谢病，可影响脂肪酸供能，可能累及低血糖、肝脏、心肌和骨骼肌。',
    plainName: '身体运输和利用肉碱能力不足的遗传代谢病',
    prevalence:
      '属于罕见病，不同地区新生儿筛查检出率差异较大；筛查结果还可能受母体肉碱状态等因素影响，需要复查确认。',
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK84551/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 315,
      name: 'carnitine-deficiency-journey.png',
      url: '/images/diseases/carnitine-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(20, 'disease-castleman-disease'),
    name: 'Castleman病',
    nameEn: 'Castleman Disease',
    alias: '巨大淋巴结病、血管滤泡性淋巴结增生症',
    slug: 'castleman-disease',
    oneSentence:
      'Castleman病是一组罕见的淋巴结增生性疾病，可表现为单一区域淋巴结肿大，也可能累及多个淋巴结区域并伴发热、乏力、贫血或器官受累。',
    plainName: '淋巴结异常增生导致的罕见血液/免疫相关疾病',
    prevalence:
      '总体属于罕见病。不同研究对单中心型、多中心型和特发性多中心型的统计口径不同，个人风险需要结合病理和分型判断。',
    sourceName: 'NCI Dictionary: Castleman disease',
    sourceUrl:
      'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/castleman-disease',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 319,
      name: 'castleman-disease-journey.png',
      url: '/images/diseases/castleman-disease-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(2011, 'disease-cdkl5-deficiency-disorder'),
    name: 'CDKL5缺乏症',
    nameEn: 'CDKL5-deficiency disorder',
    alias:
      'CDD、CDKL5相关发育性癫痫性脑病、早发癫痫性脑病2型、第二批罕见病目录第 11 项',
    slug: 'cdkl5-deficiency-disorder',
    oneSentence:
      'CDKL5缺乏症是一种多在婴儿早期出现癫痫发作和发育迟缓的罕见 X 连锁显性遗传病，核心是 CDKL5 基因功能不足影响脑发育。',
    plainName: '婴儿早期癫痫和发育受影响的遗传性神经发育病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计发病率约为每 40,000-60,000 名新生儿 1 例，约 90% 已诊断患者为女孩。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 365,
      name: 'cdkl5-deficiency-disorder-journey.png',
      url: '/images/diseases/cdkl5-deficiency-disorder-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(18, 'disease-charcot-marie-tooth-disease'),
    name: '腓骨肌萎缩症',
    nameEn: 'Charcot-Marie-Tooth Disease',
    alias: 'CMT、遗传性运动感觉神经病、遗传性周围神经病',
    slug: 'charcot-marie-tooth-disease',
    oneSentence:
      '腓骨肌萎缩症是一组遗传性周围神经病，常表现为足部和小腿逐渐无力、足下垂、高弓足、感觉减退或容易绊倒。',
    plainName: '影响手脚周围神经的遗传性神经病',
    prevalence:
      'CMT 被认为是最常见的遗传性周围神经病之一，但不同国家和不同分型的统计差异较大。',
    sourceName:
      'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
    categorySlug: 'neurological',
    charityIds: [4],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 317,
      name: 'charcot-marie-tooth-disease-journey.png',
      url: '/images/diseases/charcot-marie-tooth-disease-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(2012, 'disease-choroideremia'),
    name: '无脉络膜症',
    nameEn: 'Choroideremia',
    alias:
      'CHM相关视网膜脉络膜变性、进行性脉络膜视网膜萎缩、第二批罕见病目录第 12 项',
    slug: 'choroideremia',
    oneSentence:
      '无脉络膜症是一种 CHM 基因相关的 X 连锁隐性遗传眼病，常从儿童期夜盲开始，随后视野逐渐变窄，晚期可严重影响中心视力。',
    plainName: '先从夜里看不清开始、逐渐缩小视野的遗传性眼底病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计患病率约为每 50,000-100,000 人 1 例，因容易与其他遗传性视网膜病混淆，可能存在漏诊。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 366,
      name: 'choroideremia-journey.png',
      url: '/images/diseases/choroideremia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(
      2013,
      'disease-chronic-inflammatory-demyelinating-polyneuropathy',
    ),
    name: '慢性炎性脱髓鞘性多发性神经根神经病',
    nameEn: 'Chronic inflammatory demyelinating polyneuropathy',
    alias: 'CIDP、慢性炎性脱髓鞘性多发神经病、第二批罕见病目录第 13 项',
    slug: 'chronic-inflammatory-demyelinating-polyneuropathy',
    oneSentence:
      '慢性炎性脱髓鞘性多发性神经根神经病是一种免疫介导的周围神经病，常表现为超过 8 周逐渐加重或反复的肢体无力、麻木和腱反射减弱。',
    plainName: '免疫系统攻击周围神经外层导致手脚无力麻木的疾病',
    prevalence:
      '已纳入国家第二批罕见病目录；不同研究估计差异较大，Cleveland Clinic 资料提到美国每 10 万人每年约 0.8-8.9 个新发病例。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 367,
      name: 'chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
      url: '/images/diseases/chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'neuromuscular'],
  },
  {
    ...entity(19, 'disease-citrullinemia'),
    name: '瓜氨酸血症',
    nameEn: 'Citrullinemia',
    alias: 'CTLN1、瓜氨酸血症 I 型、希特林蛋白缺乏症相关瓜氨酸血症 II 型',
    slug: 'citrullinemia',
    oneSentence:
      '瓜氨酸血症是一组影响尿素循环或相关转运过程的遗传代谢病，可能导致血氨升高，并在新生儿、儿童或成人阶段出现急性神经系统症状。',
    plainName: '身体处理蛋白质代谢废物出问题，可能导致血氨升高的遗传代谢病',
    prevalence:
      'I 型和 II 型的地区分布不同。I 型属于尿素循环障碍，II 型与希特林蛋白缺乏症相关，在东亚人群中相对更常被报道。',
    sourceName: 'GeneReviews: Citrullinemia Type I',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1458/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 318,
      name: 'citrullinemia-journey.png',
      url: '/images/diseases/citrullinemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2014, 'disease-clear-cell-sarcoma-of-kidney'),
    name: '肾透明细胞肉瘤',
    nameEn: 'Clear cell sarcoma of kidney',
    alias: 'CCSK、儿童肾透明细胞肉瘤、第二批罕见病目录第 14 项',
    slug: 'clear-cell-sarcoma-of-kidney',
    oneSentence:
      '肾透明细胞肉瘤是一种罕见儿童肾脏恶性肿瘤，常见于 3 岁以下儿童，需要依靠病理确诊，并由儿童肿瘤多学科团队治疗。',
    plainName: '儿童少见的肾脏恶性肿瘤，需要专门病理和肿瘤团队处理',
    prevalence:
      '已纳入国家第二批罕见病目录；NCI PDQ 资料显示其约占儿童原发肾脏恶性肿瘤的 5%，在美国每年约 20 例，多见于 3 岁前。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 368,
      name: 'clear-cell-sarcoma-of-kidney-journey.png',
      url: '/images/diseases/clear-cell-sarcoma-of-kidney-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2015, 'disease-cold-agglutinin-disease'),
    name: '冷凝集素病',
    nameEn: 'Cold agglutinin disease',
    alias: 'CAD、冷抗体型自身免疫性溶血性贫血、第二批罕见病目录第 15 项',
    slug: 'cold-agglutinin-disease',
    oneSentence:
      '冷凝集素病是一种罕见自身免疫性溶血性贫血，冷刺激可使异常抗体更容易破坏红细胞，导致贫血、乏力、黄疸、深色尿和手足遇冷变色等问题。',
    plainName: '遇冷后红细胞更容易被免疫系统破坏的罕见贫血',
    prevalence:
      '已纳入国家第二批罕见病目录；总体罕见，多见于成人和老年人，不同研究对原发性和继发性病例统计口径不同。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 369,
      name: 'cold-agglutinin-disease-journey.png',
      url: '/images/diseases/cold-agglutinin-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(21, 'disease-congenital-adrenal-hypoplasia'),
    name: '先天性肾上腺发育不良',
    nameEn: 'Congenital Adrenal Hypoplasia',
    alias: 'X 连锁先天性肾上腺发育不良、NR0B1 相关肾上腺发育不良',
    slug: 'congenital-adrenal-hypoplasia',
    oneSentence:
      '先天性肾上腺发育不良是一种遗传性肾上腺功能不全疾病，可在新生儿或儿童期出现低血糖、呕吐、脱水、低血压、色素沉着或盐丢失危象。',
    plainName: '肾上腺先天发育不足导致激素不足的罕见遗传病',
    prevalence:
      '总体罕见，X 连锁 NR0B1 相关类型主要影响男性，也可因家族变异和女性携带者表现而存在差异。',
    sourceName: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
    categorySlug: 'metabolic',
    charityIds: [21],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 320,
      name: 'congenital-adrenal-hypoplasia-journey.png',
      url: '/images/diseases/congenital-adrenal-hypoplasia-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2016, 'disease-congenital-biliary-atresia'),
    name: '先天性胆道闭锁',
    nameEn: 'Congenital biliary atresia',
    alias:
      '胆道闭锁、胆管闭锁、Kasai术相关胆汁淤积性肝病、第二批罕见病目录第 16 项',
    slug: 'congenital-biliary-atresia',
    oneSentence:
      '先天性胆道闭锁是一种婴儿期严重胆汁淤积性肝胆疾病，胆汁不能顺利从肝脏排入肠道，可造成持续黄疸、白陶土样大便和进展性肝损伤。',
    plainName: '婴儿胆汁排不出去、需要尽早手术评估的肝胆病',
    prevalence:
      '已纳入国家第二批罕见病目录；Mayo Clinic 资料提到约每 10,000-20,000 名活产儿 1 例，地区和筛查方式会影响统计。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 370,
      name: 'congenital-biliary-atresia-journey.png',
      url: '/images/diseases/congenital-biliary-atresia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2017, 'disease-congenital-factor-vii-deficiency'),
    name: '先天性凝血因子VII缺乏症',
    nameEn: 'Congenital factor VII deficiency',
    alias:
      'F7缺乏症、低凝血酶原转变加速因子血症、Alexander病、第二批罕见病目录第 17 项',
    slug: 'congenital-factor-vii-deficiency',
    oneSentence:
      '先天性凝血因子 VII 缺乏症是一种 F7 基因相关的罕见遗传性出血性疾病，可从无症状到鼻出血、月经过多、术后出血，少数出现危及生命的严重出血。',
    plainName: '身体缺少第七凝血因子、容易出血的遗传性凝血病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计约每 300,000-500,000 人 1 例，是罕见凝血因子缺乏中相对常见的一种。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 371,
      name: 'congenital-factor-vii-deficiency-journey.png',
      url: '/images/diseases/congenital-factor-vii-deficiency-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'coagulation-care',
      'genetic-counseling',
    ],
  },
  {
    ...entity(22, 'disease-congenital-hyperinsulinemic-hypoglycemia'),
    name: '先天性高胰岛素性低血糖血症',
    nameEn: 'Congenital Hyperinsulinemic Hypoglycemia',
    alias: '先天性高胰岛素血症、遗传性高胰岛素性低血糖',
    slug: 'congenital-hyperinsulinemic-hypoglycemia',
    oneSentence:
      '先天性高胰岛素性低血糖血症是一组遗传性低血糖疾病，胰岛素分泌调控异常会让婴幼儿或儿童反复出现低血糖，严重时可影响大脑。',
    plainName: '胰岛素过多导致反复低血糖的罕见遗传病',
    prevalence:
      '总体罕见，严重程度从短暂新生儿期低血糖到持续性、难治性低血糖不等。',
    sourceName: 'GeneReviews: Nonsyndromic Genetic Hyperinsulinism Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1375/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 321,
      name: 'congenital-hyperinsulinemic-hypoglycemia-journey.png',
      url: '/images/diseases/congenital-hyperinsulinemic-hypoglycemia-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(23, 'disease-congenital-myasthenic-syndrome'),
    name: '先天性肌无力综合征',
    nameEn: 'Congenital Myasthenic Syndrome',
    alias: 'CMS、先天性神经肌肉接头病',
    slug: 'congenital-myasthenic-syndrome',
    oneSentence:
      '先天性肌无力综合征是一组遗传性神经肌肉接头疾病，常表现为从婴幼儿期开始的波动性肌无力、易疲劳、眼睑下垂、吞咽或呼吸相关问题。',
    plainName: '神经和肌肉之间信号传递先天异常导致的肌无力',
    prevalence:
      '总体罕见，相关基因和亚型较多，不同亚型的起病年龄、严重程度和治疗反应差异明显。',
    sourceName: 'GeneReviews: Congenital Myasthenic Syndromes Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1168/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 322,
      name: 'congenital-myasthenic-syndrome-journey.png',
      url: '/images/diseases/congenital-myasthenic-syndrome-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(
      24,
      'disease-congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    ),
    name: '先天性肌强直',
    nameEn: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    alias: 'Myotonia congenita、Thomsen 病、Becker 病、CLCN1 相关肌强直',
    slug: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    oneSentence:
      '先天性肌强直是一种遗传性骨骼肌离子通道病，常从儿童期出现肌肉僵硬、起步困难和“活动几下后变松”的暖身现象。',
    plainName: '肌肉放松变慢、刚开始活动时特别僵硬的遗传性肌肉病',
    prevalence:
      '全球总体罕见。MedlinePlus 估计约每 10 万人中 1 人受影响，北欧部分地区报道更高。',
    sourceName: 'GeneReviews: Myotonia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 323,
      name: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
      url: '/images/diseases/congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  },
  {
    ...entity(33, 'disease-congenital-scoliosis'),
    name: '先天性脊柱侧弯',
    nameEn: 'Congenital Scoliosis',
    alias: '先天性脊柱侧凸、先天性脊椎侧弯、Congenital scoliosis',
    slug: 'congenital-scoliosis',
    oneSentence:
      '先天性脊柱侧弯是胚胎期椎体形成或分节异常造成的结构性脊柱弯曲，儿童生长期间可能逐渐进展。',
    plainName: '脊柱骨头在出生前发育异常导致的侧弯',
    prevalence:
      '总体罕见，严重程度差异很大；部分儿童出生后或体检时被发现，也有人因躯干不对称、合并畸形筛查或影像检查被识别。',
    sourceName: 'Orphanet: Congenital scoliosis',
    sourceUrl: 'https://www.orpha.net/en/disease/detail/139',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 332,
      name: 'congenital-scoliosis-journey.png',
      url: '/images/diseases/congenital-scoliosis-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(34, 'disease-coronary-artery-ectasia'),
    name: '冠状动脉扩张病',
    nameEn: 'Coronary Artery Ectasia',
    alias: '冠状动脉扩张症、CAE、冠脉扩张',
    slug: 'coronary-artery-ectasia',
    oneSentence:
      '冠状动脉扩张病是冠状动脉局部或弥漫性异常扩张，可与动脉粥样硬化、川崎病、血管炎或结缔组织病等因素有关。',
    plainName: '给心肌供血的冠状动脉变宽、血流可能变慢的情况',
    prevalence:
      '在冠状动脉造影或冠脉 CTA 中偶然发现并不少见，但作为中国罕见病目录病种需要结合病因、范围和临床风险评估。',
    sourceName: 'NCBI Bookshelf StatPearls: Coronary Ectasia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK541130/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 333,
      name: 'coronary-artery-ectasia-journey.png',
      url: '/images/diseases/coronary-artery-ectasia-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(
      2018,
      'disease-cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease',
    ),
    name: '冷吡啉（冷炎素）相关周期性综合征/NLRP3相关自身炎症性疾病',
    nameEn:
      'Cryopyrin-associated periodic syndrome/NLRP3-associated systemic autoinflammatory disease',
    alias:
      'CAPS、NLRP3-AID、家族性寒冷自身炎症综合征、Muckle-Wells综合征、NOMID/CINCA、第二批罕见病目录第 18 项',
    slug: 'cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease',
    oneSentence:
      'CAPS/NLRP3相关自身炎症性疾病是一组 NLRP3 基因相关的罕见自身炎症病，常从婴幼儿或儿童期开始反复发热、荨麻疹样皮疹、关节痛和眼耳等多系统炎症。',
    plainName: '免疫系统反复自己点火、可发热皮疹关节痛的遗传性炎症病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计 CAPS 总患病率约每百万人 2-5 例，实际可能因漏诊而偏低。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 372,
      name: 'cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease-journey.png',
      url: '/images/diseases/cryopyrin-associated-periodic-syndrome-nlrp3-associated-systemic-autoinflammatory-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(
      2019,
      'disease-cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    ),
    name: '皮肤神经内分泌癌（梅克尔细胞癌）',
    nameEn: 'Cutaneous neuroendocrine carcinoma (Merkel cell carcinoma)',
    alias:
      '梅克尔细胞癌、MCC、原发性皮肤神经内分泌癌、第二批罕见病目录第 19 项',
    slug: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma',
    oneSentence:
      '皮肤神经内分泌癌（梅克尔细胞癌）是一种罕见但侵袭性较强的皮肤癌，常表现为日晒部位快速长大的无痛结节，需要活检、分期和多学科治疗。',
    plainName: '一种生长快、需要尽快活检和分期的罕见皮肤癌',
    prevalence:
      '已纳入国家第二批罕见病目录；NCI 将其描述为非常罕见的皮肤癌，长期日晒和免疫功能低下会增加风险。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 373,
      name: 'cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
      url: '/images/diseases/cutaneous-neuroendocrine-carcinoma-merkel-cell-carcinoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2020, 'disease-cutaneous-t-cell-lymphomas'),
    name: '皮肤T细胞淋巴瘤',
    nameEn: 'Cutaneous T-cell lymphomas',
    alias: 'CTCL、蕈样肉芽肿、Sézary综合征、第二批罕见病目录第 20 项',
    slug: 'cutaneous-t-cell-lymphomas',
    oneSentence:
      '皮肤 T 细胞淋巴瘤是一组主要累及皮肤的非霍奇金淋巴瘤，常见亚型包括蕈样肉芽肿和 Sézary 综合征，可长期表现为反复不愈的瘙痒性斑片、斑块或肿物。',
    plainName: '主要发生在皮肤上的 T 细胞淋巴瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；总体罕见，不同亚型、分期和登记口径会影响统计。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 374,
      name: 'cutaneous-t-cell-lymphomas-journey.png',
      url: '/images/diseases/cutaneous-t-cell-lymphomas-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2021, 'disease-cystinosis'),
    name: '胱氨酸贮积症',
    nameEn: 'Cystinosis',
    alias:
      'CTNS相关胱氨酸贮积症、肾病型胱氨酸贮积症、眼型胱氨酸贮积症、第二批罕见病目录第 21 项',
    slug: 'cystinosis',
    oneSentence:
      '胱氨酸贮积症是一种 CTNS 基因相关的遗传性溶酶体贮积病，胱氨酸在细胞内累积后主要损伤肾脏和眼睛，也可影响甲状腺、肌肉、胰腺和生殖系统。',
    plainName: '胱氨酸在细胞里堆积、先伤肾和眼的遗传代谢病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计全球约每 100,000-200,000 名新生儿 1 例，地区间差异明显。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 375,
      name: 'cystinosis-journey.png',
      url: '/images/diseases/cystinosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2022, 'disease-dermatofibrosarcoma-protuberans'),
    name: '隆突性皮肤纤维肉瘤',
    nameEn: 'Dermatofibrosarcoma protuberans',
    alias: 'DFSP、隆突性皮肤纤维肉瘤、第二批罕见病目录第 22 项',
    slug: 'dermatofibrosarcoma-protuberans',
    oneSentence:
      '隆突性皮肤纤维肉瘤是一种罕见、通常生长缓慢但局部侵袭性强的皮肤软组织肿瘤，容易向周围组织伸展并在切除不彻底时复发。',
    plainName: '长在皮肤深层、容易局部复发的罕见皮肤软组织肿瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；总体罕见，在皮肤肿瘤中占比很低，具体发生率因登记口径不同而变化。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 376,
      name: 'dermatofibrosarcoma-protuberans-journey.png',
      url: '/images/diseases/dermatofibrosarcoma-protuberans-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(25, 'disease-diamond-blackfan-anemia'),
    name: '先天性纯红细胞再生障碍性贫血',
    nameEn: 'Diamond-Blackfan Anemia',
    alias: 'Diamond-Blackfan 贫血、DBA、先天性红细胞生成不良性贫血',
    slug: 'diamond-blackfan-anemia',
    oneSentence:
      'Diamond-Blackfan 贫血是一种先天性骨髓红细胞生成障碍，常在婴儿期出现贫血，并可伴生长迟缓、先天畸形和肿瘤风险增加。',
    plainName: '骨髓从小不能充分制造红细胞的遗传性贫血',
    prevalence:
      'MedlinePlus 描述其约影响每百万新生儿 5 至 7 人，GeneReviews 也将其列为罕见的先天性红细胞生成障碍。',
    sourceName: 'GeneReviews: DBA Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7047/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 324,
      name: 'diamond-blackfan-anemia-journey.png',
      url: '/images/diseases/diamond-blackfan-anemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2023, 'disease-eosinophilic-gastroenteritis'),
    name: '嗜酸性粒细胞性胃肠炎',
    nameEn: 'Eosinophilic gastroenteritis',
    alias: 'EoGE、非食管型嗜酸性胃肠道疾病、第二批罕见病目录第 23 项',
    slug: 'eosinophilic-gastroenteritis',
    oneSentence:
      '嗜酸性粒细胞性胃肠炎是一种罕见慢性胃肠道炎症病，胃、小肠或结肠等部位有过多嗜酸性粒细胞浸润，可导致反复腹痛、恶心、呕吐、腹泻、营养吸收差或腹水。',
    plainName: '嗜酸性白细胞跑进胃肠道引起反复消化道炎症的病',
    prevalence:
      '已纳入国家第二批罕见病目录；总体罕见，可发生于儿童或成人，真实患病率受诊断标准和活检取样影响。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 377,
      name: 'eosinophilic-gastroenteritis-journey.png',
      url: '/images/diseases/eosinophilic-gastroenteritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2024, 'disease-epithelioid-sarcoma'),
    name: '上皮样肉瘤',
    nameEn: 'Epithelioid sarcoma',
    alias:
      'ES、远端型上皮样肉瘤、近端型上皮样肉瘤、INI1/SMARCB1缺失相关软组织肉瘤、第二批罕见病目录第 24 项',
    slug: 'epithelioid-sarcoma',
    oneSentence:
      '上皮样肉瘤是一种罕见侵袭性软组织肉瘤，常见于青少年和年轻成人的手、前臂、足、膝或小腿，可表现为不痛的皮下结节或久不愈合的溃疡。',
    plainName: '常从手脚或肢体皮下小硬结开始的罕见软组织肉瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；属于罕见软组织肉瘤，常见于青少年到中青年，精确发生率因登记口径不同而变化。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 378,
      name: 'epithelioid-sarcoma-journey.png',
      url: '/images/diseases/epithelioid-sarcoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(26, 'disease-erdheim-chester-disease'),
    name: 'Erdheim-Chester病',
    nameEn: 'Erdheim-Chester Disease',
    alias: 'ECD、Erdheim-Chester disease、非朗格汉斯细胞组织细胞增生症',
    slug: 'erdheim-chester-disease',
    oneSentence:
      'Erdheim-Chester病是一种极罕见的组织细胞肿瘤/组织细胞增生症，可累及长骨、肾脏周围组织、心血管、肺、眼眶、脑和垂体等多个部位。',
    plainName: '组织细胞异常增多并浸润多个器官的罕见血液免疫相关疾病',
    prevalence:
      '全球病例数很少，主要见于成人，实际患患者数可能因误诊和漏诊而被低估。',
    sourceName: 'GARD: Erdheim-Chester disease',
    sourceUrl:
      'https://rarediseases.info.nih.gov/diseases/6369/erdheim-chester-disease/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 325,
      name: 'erdheim-chester-disease-journey.png',
      url: '/images/diseases/erdheim-chester-disease-journey.png',
    },
    tagSlugs: [],
  },
  {
    ...entity(27, 'disease-fabry-disease'),
    name: '法布雷病',
    nameEn: 'Fabry Disease',
    alias: 'Fabry病、Anderson-Fabry病、α-半乳糖苷酶A缺乏症',
    slug: 'fabry-disease',
    oneSentence:
      '法布雷病是一种 X 连锁溶酶体贮积病，可累及神经、皮肤、肾脏、心脏、脑血管、眼和胃肠道，常因多系统症状分散而延迟诊断。',
    plainName: '一种会让代谢物在多个器官中逐渐沉积的遗传代谢病',
    prevalence:
      '经典型罕见，晚发型可能更常见但容易漏诊；不同筛查人群的发现率差异很大。',
    searchIntents: [
      '法布雷病 看什么科',
      '手脚烧灼痛 少汗 蛋白尿',
      'Fabry 病 GLA 基因检测',
      '法布雷病 心肌肥厚 肾病',
      '法布雷病 女性会发病吗',
    ],
    sourceName: 'GeneReviews: Fabry Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1292/',
    categorySlug: 'metabolic',
    charityIds: [25],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 326,
      name: 'fabry-disease-journey.png',
      url: '/images/diseases/fabry-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2025, 'disease-facioscapulohumeral-muscular-dystrophy'),
    name: '面肩肱型肌营养不良症',
    nameEn: 'Facioscapulohumeral muscular dystrophy',
    alias: 'FSHD、面肩肱型肌营养不良、FSHD1、FSHD2、第二批罕见病目录第 25 项',
    slug: 'facioscapulohumeral-muscular-dystrophy',
    oneSentence:
      '面肩肱型肌营养不良症是一种遗传性肌病，主要导致面部、肩胛带和上臂肌肉逐渐无力，也可影响躯干、下肢、听力、视网膜或呼吸功能。',
    plainName: '先影响面部表情、肩胛和抬手能力的遗传性肌营养不良',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计患病率约每 20,000 人 1 例，其中约 95% 为 FSHD1。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [6],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 379,
      name: 'facioscapulohumeral-muscular-dystrophy-journey.png',
      url: '/images/diseases/facioscapulohumeral-muscular-dystrophy-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'neuromuscular',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2027, 'disease-familial-adenomatous-polyposis'),
    name: '家族性腺瘤性息肉病',
    nameEn: 'Familial adenomatous polyposis',
    alias: 'FAP、APC相关腺瘤性息肉病、第二批罕见病目录第 27 项',
    slug: 'familial-adenomatous-polyposis',
    oneSentence:
      '家族性腺瘤性息肉病是一种 APC 基因相关的遗传性结直肠癌易感综合征，患者常从青少年期开始出现大量结肠腺瘤，如果没有规范监测和预防性处理，结直肠癌风险很高。',
    plainName: '会长出很多结肠息肉、需要终身防癌管理的遗传病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其发生率约为每 8,500 人 1 例，占所有结直肠癌约 0.5%。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 380,
      name: 'familial-adenomatous-polyposis-journey.png',
      url: '/images/diseases/familial-adenomatous-polyposis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2026, 'disease-familial-hemophagocytic-lymphohistiocytosis'),
    name: '家族性噬血细胞淋巴组织细胞增生症',
    nameEn: 'Familial hemophagocytic lymphohistiocytosis',
    alias: 'FHL、家族性HLH、原发性噬血细胞综合征、第二批罕见病目录第 26 项',
    slug: 'familial-hemophagocytic-lymphohistiocytosis',
    oneSentence:
      '家族性噬血细胞淋巴组织细胞增生症是一类遗传性免疫调控缺陷，免疫细胞过度激活后可迅速造成持续高热、血细胞减少、肝脾肿大和多器官损害。',
    plainName: '免疫系统失控发炎、可快速危及生命的遗传性 HLH',
    prevalence:
      '已纳入国家第二批罕见病目录；总体非常罕见，很多患者在婴幼儿或儿童期发病，也可在较晚年龄出现。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 381,
      name: 'familial-hemophagocytic-lymphohistiocytosis-journey.png',
      url: '/images/diseases/familial-hemophagocytic-lymphohistiocytosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(28, 'disease-familial-mediterranean-fever'),
    name: '家族性地中海热',
    nameEn: 'Familial Mediterranean Fever',
    alias: 'FMF、复发性多浆膜炎、MEFV 相关自炎症病',
    slug: 'familial-mediterranean-fever',
    oneSentence:
      '家族性地中海热是一种遗传性自炎症病，表现为反复短暂发热，并可伴腹痛、胸痛、关节痛、皮疹或淀粉样变风险。',
    plainName: '反复发热和浆膜炎发作的遗传性自炎症病',
    prevalence:
      '在地中海沿岸相关族群中更常见，包括部分犹太、亚美尼亚、阿拉伯、土耳其和北非人群；其他人群也可发生。',
    sourceName: 'GeneReviews: Familial Mediterranean Fever',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1227/',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 327,
      name: 'familial-mediterranean-fever-journey.png',
      url: '/images/diseases/familial-mediterranean-fever-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(29, 'disease-fanconi-anemia'),
    name: '范可尼贫血',
    nameEn: 'Fanconi Anemia',
    alias: 'Fanconi anemia、FA、范可尼全血细胞减少症',
    slug: 'fanconi-anemia',
    oneSentence:
      '范可尼贫血是一种遗传性 DNA 修复缺陷病，可导致先天异常、骨髓衰竭和白血病/实体瘤风险升高。',
    plainName: '会影响骨髓造血和 DNA 修复的遗传性骨髓衰竭综合征',
    prevalence:
      '总体罕见，不同人群携带率和发病率不同；部分患者出生时已有结构异常，也有人先以血细胞减少或肿瘤风险被发现。',
    sourceName: 'GeneReviews: Fanconi Anemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1401/',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 328,
      name: 'fanconi-anemia-journey.png',
      url: '/images/diseases/fanconi-anemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2028, 'disease-fibrodysplasia-ossificans-progressiva'),
    name: '进行性骨化性纤维发育不良',
    nameEn: 'Fibrodysplasia ossificans progressiva',
    alias: 'FOP、进行性肌炎骨化症、ACVR1相关异位骨化、第二批罕见病目录第 28 项',
    slug: 'fibrodysplasia-ossificans-progressiva',
    oneSentence:
      '进行性骨化性纤维发育不良是一种 ACVR1 基因相关的罕见结缔组织病，软组织会在反复肿痛后逐渐变成骨样组织，导致关节活动受限和身体僵硬。',
    plainName: '软组织会逐渐长出“第二套骨骼”的遗传病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其约每 100 万人 1 例，全球仅报道数百例。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [53],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 382,
      name: 'fibrodysplasia-ossificans-progressiva-journey.png',
      url: '/images/diseases/fibrodysplasia-ossificans-progressiva-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2029, 'disease-fragile-x-syndrome'),
    name: '脆性X综合征',
    nameEn: 'Fragile X syndrome',
    alias:
      'FXS、Martin-Bell 综合征、FMR1相关脆性X综合征、第二批罕见病目录第 29 项',
    slug: 'fragile-x-syndrome',
    oneSentence:
      '脆性 X 综合征是一种 FMR1 基因 CGG 重复扩增导致的 X 连锁遗传病，可引起语言和认知发育迟缓、学习困难、注意力/行为问题和孤独症谱系特征。',
    plainName: '影响发育、学习和行为的 FMR1 相关遗传病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其约每 4,000 名男性 1 例、每 8,000 名女性 1 例。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 383,
      name: 'fragile-x-syndrome-journey.png',
      url: '/images/diseases/fragile-x-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(30, 'disease-galactosemia'),
    name: '半乳糖血症',
    nameEn: 'Galactosemia',
    alias: '经典型半乳糖血症、GALT 缺乏症、半乳糖-1-磷酸尿苷酰转移酶缺乏症',
    slug: 'galactosemia',
    oneSentence:
      '半乳糖血症是一组半乳糖代谢障碍，经典型可在新生儿摄入乳糖后迅速出现喂养困难、黄疸、肝损害、感染和出血风险。',
    plainName: '宝宝不能正常处理奶中半乳糖的遗传代谢病',
    prevalence:
      'MedlinePlus 描述经典型约每 3 万至 6 万名新生儿中 1 例，其他类型更少见。',
    sourceName: 'GeneReviews: Classic Galactosemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1518/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 329,
      name: 'galactosemia-journey.png',
      url: '/images/diseases/galactosemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2030, 'disease-gangliosidosis'),
    name: '神经节苷脂贮积症',
    nameEn: 'Gangliosidosis',
    alias:
      'GM1神经节苷脂贮积症、GM2神经节苷脂贮积症、Tay-Sachs病、Sandhoff病、第二批罕见病目录第 30 项',
    slug: 'gangliosidosis',
    oneSentence:
      '神经节苷脂贮积症是一组常染色体隐性遗传的溶酶体贮积病，酶缺陷使 GM1 或 GM2 等物质在神经系统和其他组织内累积，导致发育倒退、运动障碍、癫痫和多系统受累。',
    plainName: '神经系统里“清理酶”不足、脂类物质越积越多的遗传代谢病',
    prevalence:
      '已纳入国家第二批罕见病目录；GM1 神经节苷脂贮积症据 MedlinePlus Genetics 估计约每 100,000-200,000 名新生儿 1 例，GM2 类型在不同族群中差异明显。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 384,
      name: 'gangliosidosis-journey.png',
      url: '/images/diseases/gangliosidosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2031, 'disease-gastroenteropancreatic-neuroendocrine-neoplasm'),
    name: '胃肠胰神经内分泌肿瘤',
    nameEn: 'Gastroenteropancreatic neuroendocrine neoplasm',
    alias: 'GEP-NEN、GEP-NET、胃肠胰神经内分泌肿瘤、第二批罕见病目录第 31 项',
    slug: 'gastroenteropancreatic-neuroendocrine-neoplasm',
    oneSentence:
      '胃肠胰神经内分泌肿瘤是一类起源于消化道或胰腺神经内分泌细胞的罕见肿瘤，有的生长缓慢，有的会分泌激素并引起腹泻、潮红、低血糖或溃疡等症状。',
    plainName: '发生在胃肠道或胰腺、可能分泌激素的罕见肿瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；总体少见，不同部位、分级和登记方式会影响统计结果。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 385,
      name: 'gastroenteropancreatic-neuroendocrine-neoplasm-journey.png',
      url: '/images/diseases/gastroenteropancreatic-neuroendocrine-neoplasm-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2032, 'disease-gastrointestinal-stromal-tumor'),
    name: '胃肠间质瘤',
    nameEn: 'Gastrointestinal stromal tumor',
    alias: 'GIST、胃肠道间质瘤、第二批罕见病目录第 32 项',
    slug: 'gastrointestinal-stromal-tumor',
    oneSentence:
      '胃肠间质瘤是消化道最常见的间叶源性肿瘤，常与 KIT 或 PDGFRA 等驱动变异有关，治疗决策高度依赖病理、突变类型、肿瘤大小和部位。',
    plainName: '发生在胃肠道壁内、常能用靶向药管理的罕见肿瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；NCI PDQ 描述其占所有胃肠道肿瘤不到 1%，但是真正发病率会受小型惰性病灶漏报影响。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 386,
      name: 'gastrointestinal-stromal-tumor-journey.png',
      url: '/images/diseases/gastrointestinal-stromal-tumor-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(31, 'disease-gauchers-disease'),
    name: '戈谢病',
    nameEn: 'Gaucher’s Disease',
    alias: 'Gaucher disease、葡萄糖脑苷脂酶缺乏症、GBA1 相关戈谢病',
    slug: 'gauchers-disease',
    oneSentence:
      '戈谢病是一种溶酶体贮积病，可导致肝脾肿大、贫血、血小板减少、骨痛或骨危象，部分类型还会累及神经系统。',
    plainName: '脂质代谢物在肝脾、骨髓和骨骼等部位堆积的遗传代谢病',
    prevalence:
      '总体罕见，1 型在阿什肯纳兹犹太人群中更常见；不同类型的发病年龄和严重程度差异很大。',
    sourceName: 'GeneReviews: Gaucher Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1269/',
    categorySlug: 'metabolic',
    charityIds: [36],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 330,
      name: 'gauchers-disease-journey.png',
      url: '/images/diseases/gauchers-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(32, 'disease-generalized-myasthenia-gravis'),
    name: '全身型重症肌无力',
    nameEn: 'Generalized Myasthenia Gravis',
    alias: 'gMG、重症肌无力全身型、获得性自身免疫性重症肌无力',
    slug: 'generalized-myasthenia-gravis',
    oneSentence:
      '全身型重症肌无力是一种自身免疫性神经肌肉接头疾病，会导致眼、面部、吞咽、说话、四肢或呼吸相关肌肉波动性无力。',
    plainName: '活动后肌肉更无力、休息后好一些的自身免疫性肌无力',
    prevalence:
      '属于罕见神经免疫疾病，可发生于任何年龄，常见起患者群包括年轻女性和老年男性。',
    sourceName: 'NINDS: Myasthenia Gravis',
    sourceUrl: 'https://www.ninds.nih.gov/node/733',
    categorySlug: 'neurological',
    charityIds: [12],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 331,
      name: 'generalized-myasthenia-gravis-journey.png',
      url: '/images/diseases/generalized-myasthenia-gravis-journey.png',
    },
    tagSlugs: ['neuromuscular'],
  },
  {
    ...entity(2033, 'disease-generalized-pustular-psoriasis'),
    name: '泛发性脓疱型银屑病',
    nameEn: 'Generalized pustular psoriasis',
    alias: 'GPP、von Zumbusch 型脓疱型银屑病、第二批罕见病目录第 33 项',
    slug: 'generalized-pustular-psoriasis',
    oneSentence:
      '泛发性脓疱型银屑病是一种罕见但可很严重的系统性炎症性皮肤病，可突然出现大片红肿疼痛皮肤和无菌性脓疱，并伴发热、脱水和器官并发症风险。',
    plainName: '会突然全身发作、需要急诊识别的严重脓疱型银屑病',
    prevalence:
      '已纳入国家第二批罕见病目录；总体罕见，发作频率和严重程度个体差异很大。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 387,
      name: 'generalized-pustular-psoriasis-journey.png',
      url: '/images/diseases/generalized-pustular-psoriasis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2034, 'disease-genetic-hypoparathyroidism'),
    name: '遗传性甲状旁腺功能减退症',
    nameEn: 'Genetic hypoparathyroidism',
    alias: '遗传性甲旁减、低甲状旁腺激素性低钙血症、第二批罕见病目录第 34 项',
    slug: 'genetic-hypoparathyroidism',
    oneSentence:
      '遗传性甲状旁腺功能减退症是一组因甲状旁腺发育、PTH 分泌或钙感受通路异常导致的低钙高磷疾病，可引起手足麻木、抽搐、癫痫和长期肾脏并发症风险。',
    plainName: '甲状旁腺激素不足或作用异常导致低钙的遗传病',
    prevalence:
      '已纳入国家第二批罕见病目录；总体罕见，不同遗传类型和诊断年龄差异明显。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 388,
      name: 'genetic-hypoparathyroidism-journey.png',
      url: '/images/diseases/genetic-hypoparathyroidism-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'genetic-counseling',
      'endocrine',
    ],
  },
  {
    ...entity(2035, 'disease-giant-cell-arteritis'),
    name: '巨细胞动脉炎',
    nameEn: 'Giant cell arteritis',
    alias: 'GCA、颞动脉炎、大血管炎、第二批罕见病目录第 35 项',
    slug: 'giant-cell-arteritis',
    oneSentence:
      '巨细胞动脉炎是一种多见于 50 岁以上人群的大中血管炎，常引起新发头痛、头皮压痛、咀嚼时下颌痛和视力问题，延误治疗可能导致永久性失明。',
    plainName: '老年人新发头痛和视力风险很高的血管炎',
    prevalence:
      '已纳入国家第二批罕见病目录；主要发生在 50 岁以上人群，不同族群和地区发病率差异明显。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 389,
      name: 'giant-cell-arteritis-journey.png',
      url: '/images/diseases/giant-cell-arteritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2036, 'disease-giant-cell-tumor-of-bone'),
    name: '骨巨细胞瘤',
    nameEn: 'Giant cell tumor of bone',
    alias: 'GCTB、骨巨细胞瘤、骨巨细胞肿瘤、第二批罕见病目录第 36 项',
    slug: 'giant-cell-tumor-of-bone',
    oneSentence:
      '骨巨细胞瘤是一种少见的原发骨肿瘤，多数不是传统意义上的癌，但会在局部侵袭性生长，造成骨破坏、疼痛、肿胀和关节活动受限。',
    plainName: '常发生在关节附近、容易破坏骨头并复发的罕见骨肿瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；GARD 将其列为罕见病，常在成人期出现，真实发生率会受登记和诊断口径影响。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 390,
      name: 'giant-cell-tumor-of-bone-journey.png',
      url: '/images/diseases/giant-cell-tumor-of-bone-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(35, 'disease-gitelman-syndrome'),
    name: 'Gitelman 综合征',
    nameEn: 'Gitelman Syndrome',
    alias: '吉特曼综合征、家族性低钾低镁血症、GS',
    slug: 'gitelman-syndrome',
    oneSentence:
      'Gitelman 综合征是一种遗传性肾小管盐丢失病，常表现为低钾、低镁、代谢性碱中毒、低尿钙和乏力或肌肉痉挛。',
    plainName: '肾脏留不住部分盐和电解质导致低钾低镁的遗传病',
    prevalence:
      'MedlinePlus Genetics 估计全球约每 40,000 人 1 例；症状差异很大，许多人在青少年或成年后因低钾被发现。',
    sourceName: 'MedlinePlus Genetics: Gitelman syndrome',
    sourceUrl: 'https://medlineplus.gov/genetics/condition/gitelman-syndrome/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 334,
      name: 'gitelman-syndrome-journey.png',
      url: '/images/diseases/gitelman-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2037, 'disease-glanzmann-thrombasthenia'),
    name: '血小板无力症',
    nameEn: 'Glanzmann thrombasthenia',
    alias:
      'GT、Glanzmann 病、血小板整合素 αIIbβ3 缺陷、第二批罕见病目录第 37 项',
    slug: 'glanzmann-thrombasthenia',
    oneSentence:
      '血小板无力症是一种常染色体隐性遗传的血小板功能障碍，血小板数量常可正常，但不能有效聚集止血，导致反复鼻出血、牙龈出血、皮肤出血点、月经过多或手术后出血。',
    plainName: '血小板数量可能正常、但止血功能不好的遗传性出血病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计全球约每 100 万人 1 例，近亲婚配或部分族群中可更常见。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 391,
      name: 'glanzmann-thrombasthenia-journey.png',
      url: '/images/diseases/glanzmann-thrombasthenia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2038, 'disease-glioblastoma'),
    name: '胶质母细胞瘤',
    nameEn: 'Glioblastoma',
    alias: 'GBM、胶质母细胞瘤、成人弥漫性胶质瘤 4 级、第二批罕见病目录第 38 项',
    slug: 'glioblastoma',
    oneSentence:
      '胶质母细胞瘤是一种侵袭性很强的成人原发中枢神经系统肿瘤，常以新发或加重头痛、癫痫发作、肢体无力、语言或视力改变等神经症状出现，需要神经外科和神经肿瘤团队联合治疗。',
    plainName: '进展快、需要多学科治疗的恶性脑胶质瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；属于罕见中枢神经系统肿瘤，成人中相对常见但总体人群发生率仍低。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 392,
      name: 'glioblastoma-journey.png',
      url: '/images/diseases/glioblastoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(36, 'disease-glutaric-acidemia-type-i'),
    name: '戊二酸血症 I 型',
    nameEn: 'Glutaric Acidemia Type I',
    alias: 'GA-1、戊二酸尿症 I 型、GCDH 缺乏症、Glutaric aciduria type 1',
    slug: 'glutaric-acidemia-type-i',
    oneSentence:
      '戊二酸血症 I 型是一种有机酸代谢病，未及时识别时可在婴幼儿感染或禁食后发生急性脑损伤和运动障碍。',
    plainName: '某些氨基酸代谢异常，可能伤害基底节的遗传代谢病',
    prevalence:
      '总体罕见，不同地区和人群差异较大；许多地区可通过新生儿筛查发现线索。',
    sourceName: 'GeneReviews: Glutaric Acidemia Type 1',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK546575/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 335,
      name: 'glutaric-acidemia-type-i-journey.png',
      url: '/images/diseases/glutaric-acidemia-type-i-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(37, 'disease-glycogen-storage-disease-type-i-ii'),
    name: '糖原累积病（I 型、II 型）',
    nameEn: 'Glycogen Storage Disease (Type I, II)',
    alias: '糖原贮积病 I 型、GSD I、Pompe disease、庞贝病、GSD II',
    slug: 'glycogen-storage-disease-type-i-ii',
    oneSentence:
      '糖原累积病 I 型和 II 型都是遗传性糖原代谢病，但 I 型主要影响血糖和肝肾代谢，II 型（庞贝病）主要影响心肌、骨骼肌和呼吸肌。',
    plainName: '身体处理糖原出问题的一组遗传代谢病，I 型和 II 型就医路径不同',
    prevalence:
      '均属于罕见病。不同国家和筛查体系下发病率估计差异较大，部分地区已纳入新生儿筛查或高危筛查。',
    sourceName: 'GeneReviews: Glycogen Storage Disease Type I',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1312/',
    categorySlug: 'metabolic',
    charityIds: [26, 49],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 336,
      name: 'glycogen-storage-disease-type-i-ii-journey.png',
      url: '/images/diseases/glycogen-storage-disease-type-i-ii-journey.png',
    },
    tagSlugs: ['genetic-counseling', 'neuromuscular'],
  },
  {
    ...entity(2039, 'disease-gorlin-syndrome'),
    name: '高林综合征',
    nameEn: 'Gorlin syndrome',
    alias:
      '痣样基底细胞癌综合征、NBCCS、基底细胞痣综合征、第二批罕见病目录第 39 项',
    slug: 'gorlin-syndrome',
    oneSentence:
      '高林综合征是一种遗传性肿瘤易感综合征，常见表现包括较年轻时反复出现基底细胞癌、颌骨角化囊肿、手掌脚掌小凹陷和骨骼发育特点，需要长期皮肤、口腔颌面和遗传随访。',
    plainName: '容易长基底细胞癌和颌骨囊肿的遗传性肿瘤易感综合征',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 估计约每 31,000 人 1 例，但轻症或家族内表现差异会影响识别。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 393,
      name: 'gorlin-syndrome-journey.png',
      url: '/images/diseases/gorlin-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(38, 'disease-hemophilia'),
    name: '血友病',
    nameEn: 'Hemophilia',
    alias: 'Hemophilia A、Hemophilia B、凝血因子 VIII 缺乏、凝血因子 IX 缺乏',
    slug: 'hemophilia',
    oneSentence:
      '血友病是一类遗传性凝血因子缺乏导致的出血性疾病，常见 A 型和 B 型，可出现关节、肌肉、手术或外伤后持续出血。',
    plainName: '血液不容易正常凝住，容易反复出血的遗传病',
    prevalence:
      '血友病 A 较血友病 B 常见，严重程度与凝血因子活性水平有关；女性携带者也可能有出血表现。',
    searchIntents: [
      '血友病 看什么科',
      '血友病 A 和 B 区别',
      '关节反复出血 血友病',
      '血友病 抑制物检测',
      '血友病 女性携带者出血',
    ],
    sourceName: 'GeneReviews: Hemophilia A',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1404/',
    categorySlug: 'hematological',
    charityIds: [27, 28, 29],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 337,
      name: 'hemophilia-journey.png',
      url: '/images/diseases/hemophilia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(39, 'disease-hepatolenticular-degeneration-wilson-disease'),
    name: '肝豆状核变性',
    nameEn: 'Hepatolenticular Degeneration (Wilson Disease)',
    alias: 'Wilson 病、威尔逊病、铜代谢障碍、ATP7B 相关铜蓄积病',
    slug: 'hepatolenticular-degeneration-wilson-disease',
    oneSentence:
      '肝豆状核变性是一种 ATP7B 相关铜代谢病，铜在肝脏、脑和其他组织蓄积后可造成肝病、运动障碍、精神行为变化或溶血等表现。',
    plainName: '身体排铜能力下降，铜逐渐伤害肝脏和神经系统的遗传病',
    prevalence:
      '总体罕见，常在儿童、青少年或青年期发现，但发病年龄范围较宽，年龄本身不能完全排除诊断。',
    sourceName: 'GeneReviews: Wilson Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1512/',
    categorySlug: 'metabolic',
    charityIds: [32, 33],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 338,
      name: 'hepatolenticular-degeneration-wilson-disease-journey.png',
      url: '/images/diseases/hepatolenticular-degeneration-wilson-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(40, 'disease-hereditary-angioedema-hae'),
    name: '遗传性血管性水肿',
    nameEn: 'Hereditary Angioedema (HAE)',
    alias: 'HAE、遗传性血管神经性水肿、C1 抑制物缺乏相关血管性水肿',
    slug: 'hereditary-angioedema-hae',
    oneSentence:
      '遗传性血管性水肿是一类反复发作的深部肿胀疾病，可累及皮肤、胃肠道和上气道，上气道发作可能危及生命。',
    plainName: '反复突然肿胀、常不痒也不起风团的遗传性血管水肿',
    prevalence: '总体罕见，症状常从儿童或青春期开始，也可能成年后才被识别。',
    sourceName: 'MedlinePlus Genetics: Hereditary angioedema',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [51],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 339,
      name: 'hereditary-angioedema-hae-journey.png',
      url: '/images/diseases/hereditary-angioedema-hae-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(41, 'disease-hereditary-epidermolysis-bullosa'),
    name: '遗传性大疱性表皮松解症',
    nameEn: 'Hereditary Epidermolysis Bullosa',
    alias: '大疱性表皮松解症、EB、蝴蝶宝贝、遗传性皮肤脆弱症',
    slug: 'hereditary-epidermolysis-bullosa',
    oneSentence:
      '遗传性大疱性表皮松解症是一组皮肤和黏膜异常脆弱的遗传病，轻微摩擦即可出现水疱、糜烂、慢性伤口和疼痛。',
    plainName: '皮肤像很薄的保护层，轻微摩擦也容易起疱破损的遗传病',
    prevalence: '总体罕见，亚型很多，严重程度从局部水疱到多系统受累差异很大。',
    sourceName: 'NCBI Bookshelf StatPearls: Epidermolysis Bullosa',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK599531/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [11],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 340,
      name: 'hereditary-epidermolysis-bullosa-journey.png',
      url: '/images/diseases/hereditary-epidermolysis-bullosa-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(42, 'disease-hereditary-fructose-intolerance'),
    name: '遗传性果糖不耐受症',
    nameEn: 'Hereditary Fructose Intolerance',
    alias: 'HFI、ALDOB 相关果糖不耐受、遗传性果糖代谢障碍',
    slug: 'hereditary-fructose-intolerance',
    oneSentence:
      '遗传性果糖不耐受症是一种 ALDOB 相关果糖代谢病，摄入果糖、蔗糖或山梨醇后可出现呕吐、低血糖、肝肾损伤等风险。',
    plainName: '吃到某些含果糖的食物或成分后会严重不适的遗传代谢病',
    prevalence:
      'MedlinePlus Genetics 估计全球每年发病约 1/20,000-1/30,000；轻症或饮食自发回避者可能较晚识别。',
    sourceName: 'GeneReviews: Hereditary Fructose Intolerance',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK333439/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 341,
      name: 'hereditary-fructose-intolerance-journey.png',
      url: '/images/diseases/hereditary-fructose-intolerance-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(43, 'disease-hereditary-hypomagnesemia'),
    name: '遗传性低镁血症',
    nameEn: 'Hereditary Hypomagnesemia',
    alias: '家族性低镁血症、原发性低镁血症、遗传性镁代谢障碍',
    slug: 'hereditary-hypomagnesemia',
    oneSentence:
      '遗传性低镁血症是一组影响肠道吸收或肾脏保留镁的遗传病，可导致低镁、低钙、抽搐、心律风险或肾钙化等不同表现。',
    plainName: '身体吸收或保留镁的能力出问题，导致血镁长期偏低的一组遗传病',
    prevalence:
      '总体罕见，不同基因类型差异很大；有些婴儿期发病，有些在儿童或成人期因低镁、肾钙化或家族筛查发现。',
    sourceName:
      'MedlinePlus Genetics: Hypomagnesemia with secondary hypocalcemia',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/hypomagnesemia-with-secondary-hypocalcemia',
    categorySlug: 'renal-urologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 342,
      name: 'hereditary-hypomagnesemia-journey.png',
      url: '/images/diseases/hereditary-hypomagnesemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(44, 'disease-cadasil'),
    name: '遗传性多发脑梗死性痴呆',
    nameEn: 'CADASIL',
    alias:
      'CADASIL、伴皮质下梗死和白质脑病的常染色体显性脑动脉病、NOTCH3 相关脑小血管病',
    slug: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil',
    oneSentence:
      'CADASIL 是 NOTCH3 相关遗传性脑小血管病，可导致偏头痛先兆、反复腔隙性卒中、情绪变化、认知下降和脑白质改变。',
    plainName: '家族性脑小血管容易出问题，反复小中风和认知变化的遗传病',
    prevalence:
      '总体罕见，但 NOTCH3 相关表型范围较宽；有些家族表现典型，也有人症状较轻或较晚识别。',
    sourceName: 'GeneReviews: CADASIL',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 343,
      name: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
      url: '/images/diseases/hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(45, 'disease-hereditary-spastic-paraplegia'),
    name: '遗传性痉挛性截瘫',
    nameEn: 'Hereditary Spastic Paraplegia',
    alias: 'HSP、遗传性痉挛性下肢瘫、Strumpell-Lorrain 综合征',
    slug: 'hereditary-spastic-paraplegia',
    oneSentence:
      '遗传性痉挛性截瘫是一组以双下肢痉挛、僵硬和行走困难为核心表现的遗传性神经系统疾病。',
    plainName: '下肢越来越僵硬、走路容易绊倒的一组遗传性神经病',
    prevalence:
      '总体罕见，相关基因很多，起病年龄可从儿童到成人不等，进展速度差异很大。',
    sourceName:
      'GeneReviews: Uncomplicated Hereditary Spastic Paraplegia Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1509/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 344,
      name: 'hereditary-spastic-paraplegia-journey.png',
      url: '/images/diseases/hereditary-spastic-paraplegia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2040, 'disease-hidradenitis-suppurativa'),
    name: '化脓性汗腺炎',
    nameEn: 'Hidradenitis suppurativa',
    alias: 'HS、反常性痤疮、Acne inversa、第二批罕见病目录第 40 项',
    slug: 'hidradenitis-suppurativa',
    oneSentence:
      '化脓性汗腺炎是一种慢性、反复发作的炎症性皮肤病，常在腋下、腹股沟、臀部、乳房下等摩擦部位出现疼痛性结节、脓肿、窦道和瘢痕，并显著影响生活质量。',
    plainName: '反复在摩擦部位长疼痛结节和窦道的慢性炎症性皮肤病',
    prevalence:
      '已纳入国家第二批罕见病目录；不同研究的估计差异较大，漏诊和误诊会明显影响统计。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'dermatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 394,
      name: 'hidradenitis-suppurativa-journey.png',
      url: '/images/diseases/hidradenitis-suppurativa-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(46, 'disease-holocarboxylase-synthetase-deficiency'),
    name: '全羧化酶合成酶缺乏症',
    nameEn: 'Holocarboxylase Synthetase Deficiency',
    alias: 'HLCS 缺乏症、早发型多种羧化酶缺乏症、生物素反应性多羧化酶缺乏症',
    slug: 'holocarboxylase-synthetase-deficiency',
    oneSentence:
      '全羧化酶合成酶缺乏症是一种影响生物素利用的遗传代谢病，婴儿期可出现喂养困难、皮疹、脱发、呼吸问题、嗜睡、酸中毒或抽搐。',
    plainName: '身体不能有效使用生物素，导致多个代谢酶工作异常的遗传病',
    prevalence:
      'MedlinePlus Genetics 提到估计约每 87,000 人 1 例；实际识别受新生儿筛查和代谢检测可及性影响。',
    sourceName: 'MedlinePlus Genetics: Holocarboxylase synthetase deficiency',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/holocarboxylase-synthetase-deficiency/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 345,
      name: 'holocarboxylase-synthetase-deficiency-journey.png',
      url: '/images/diseases/holocarboxylase-synthetase-deficiency-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(47, 'disease-homocysteinemia'),
    name: '同型半胱氨酸血症',
    nameEn: 'Homocysteinemia',
    slug: 'homocysteinemia',
    oneSentence:
      '同型半胱氨酸血症是一类因氨基酸代谢异常导致血液中同型半胱氨酸升高的遗传代谢病，典型表现包括眼部异常、骨骼问题、智力障碍和血栓风险增加。',
    plainName: '同型半胱氨酸血症（胱硫醚β合成酶缺乏症）',
    prevalence:
      '经典型（胱硫醚β合成酶缺乏）全球患病率约为 1/200,000～1/350,000，不同地区差异较大。',
    sourceName:
      'GeneReviews: Homocystinuria due to Cystathionine Beta-Synthase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1524/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 346,
      name: 'homocysteinemia-journey.png',
      url: '/images/diseases/homocysteinemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(48, 'disease-homozygous-hypercholesterolemia'),
    name: '纯合子家族性高胆固醇血症',
    nameEn: 'Homozygous Familial Hypercholesterolemia',
    slug: 'homozygous-hypercholesterolemia',
    oneSentence:
      '纯合子家族性高胆固醇血症是一种严重遗传性脂代谢疾病，患者LDL-C水平极度升高，童年期即可出现皮肤黄色瘤和早发动脉粥样硬化。',
    plainName: '纯合子家族性高胆固醇血症',
    prevalence:
      '极为罕见，全球患病率约为 1/160,000～1/300,000，部分人群因奠基者效应而更高。',
    sourceName: 'GeneReviews: Familial Hypercholesterolemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
    sources: [
      {
        name: 'GeneReviews: Familial Hypercholesterolemia',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK174884/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'metabolic',
    charityIds: [82, 83],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 347,
      name: 'homozygous-hypercholesterolemia-journey.png',
      url: '/images/diseases/homozygous-hypercholesterolemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(49, 'disease-huntington-disease'),
    name: '亨廷顿舞蹈病',
    nameEn: 'Huntington Disease',
    slug: 'huntington-disease',
    oneSentence:
      '亨廷顿舞蹈病是一种罕见的常染色体显性遗传性神经退行性疾病，主要表现为不自主的舞蹈样动作、精神异常和进行性认知功能下降。',
    plainName: '亨廷顿舞蹈病',
    prevalence:
      '全球患病率约为 5～10/10万；欧洲和北美人群患病率较高，亚洲相对较低。',
    sourceName: 'GeneReviews: Huntington Disease',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1305/',
    categorySlug: 'neurological',
    charityIds: [5],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 348,
      name: 'huntington-disease-journey.png',
      url: '/images/diseases/huntington-disease-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(2041, 'disease-hutchinson-gilford-progeria-syndrome'),
    name: '早老症',
    nameEn: 'Hutchinson-Gilford progeria syndrome',
    alias:
      'HGPS、Hutchinson-Gilford 早老综合征、儿童早老症、第二批罕见病目录第 41 项',
    slug: 'hutchinson-gilford-progeria-syndrome',
    oneSentence:
      '早老症是一种极罕见的儿童早衰综合征，多由 LMNA 基因新发变异导致，孩子出生时常不明显异常，随后出现明显生长迟缓、脂肪减少、皮肤和毛发改变，并有很高的心脑血管风险。',
    plainName: '孩子身体过早出现衰老表现、尤其需要心血管监测的遗传病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述其极为罕见，全球患儿数量很少，多数为新发变异而非家族遗传。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 395,
      name: 'hutchinson-gilford-progeria-syndrome-journey.png',
      url: '/images/diseases/hutchinson-gilford-progeria-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(
      50,
      'disease-hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    ),
    name: 'HHH综合征',
    nameEn: 'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    alias: '高鸟氨酸血症-高氨血症-同型瓜氨酸尿症综合征、鸟氨酸转移酶缺乏症',
    slug: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    oneSentence:
      'HHH综合征是一种罕见的常染色体隐性遗传病，因SLC25A15基因突变导致线粒体鸟氨酸转运障碍，引起血氨、血鸟氨酸和同型瓜氨酸升高，累及神经系统和肝脏。',
    plainName: 'HHH综合征',
    prevalence: '极为罕见，全球报告少于100例，为尿素循环障碍中最罕见类型之一',
    sourceName:
      'GeneReviews: Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK97260/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 349,
      name: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
      url: '/images/diseases/hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(51, 'disease-hyperphenylalaninemia'),
    name: '高苯丙氨酸血症',
    nameEn: 'Hyperphenylalaninemia',
    alias:
      'HPA、高苯丙氨酸血症综合征、四氢生物蝶呤缺乏症、苯丙氨酸羟化酶缺乏症',
    slug: 'hyperphenylalaninemia',
    oneSentence:
      '高苯丙氨酸血症是一组因苯丙氨酸羟化酶（PAH）或其辅酶四氢生物蝶呤（BH4）缺乏，导致血苯丙氨酸升高的常见氨基酸代谢遗传病，包括苯丙酮尿症（PKU）及其他表型。',
    plainName: '高苯丙氨酸血症',
    prevalence:
      '中国1985~2011年新生儿发病率约1/10397；全球各地区发病率差异较大',
    sourceName: 'GeneReviews: Phenylalanine Hydroxylase Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1504/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 350,
      name: 'hyperphenylalaninemia-journey.png',
      url: '/images/diseases/hyperphenylalaninemia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(52, 'disease-hypophosphatasia'),
    name: '低碱性磷酸酶血症',
    nameEn: 'Hypophosphatasia',
    alias: '低磷酸酯酶症、HPP、遗传性低磷酸酯酶症',
    slug: 'hypophosphatasia',
    oneSentence:
      '低碱性磷酸酶血症是一种因ALPL基因突变导致碱性磷酸酶活性降低，引起骨骼和牙齿矿化障碍的罕见单基因遗传病，2018年列入国家《第一批罕见病目录》。',
    plainName: '低碱性磷酸酶血症',
    prevalence: '严重型发病率约1/100000，轻型发病率相对更高；我国属于罕见病',
    sourceName: 'GeneReviews: Hypophosphatasia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1150/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 351,
      name: 'hypophosphatasia-journey.png',
      url: '/images/diseases/hypophosphatasia-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(53, 'disease-hypophosphatemic-rickets'),
    name: '低磷性佝偻病',
    nameEn: 'Hypophosphatemic Rickets',
    alias: '低血磷性佝偻病、X连锁低磷血症（XLH）',
    slug: 'hypophosphatemic-rickets',
    oneSentence:
      '低磷性佝偻病是一组因肾脏排磷过多导致低磷血症，进而引起骨骼矿化障碍的遗传性或获得性疾病，儿童表现为佝偻病，成人表现为骨软化症。',
    plainName: '低磷性佝偻病',
    prevalence:
      '发病率约3.9/100,000，患病率约1/21,000；XLH占遗传性低磷性佝偻病的80%以上。',
    sourceName: 'GeneReviews: X-Linked Hypophosphatemia',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK83985/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [58],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 352,
      name: 'hypophosphatemic-rickets-journey.png',
      url: '/images/diseases/hypophosphatemic-rickets-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(54, 'disease-idiopathic-cardiomyopathy'),
    name: '特发性心肌病',
    nameEn: 'Idiopathic Cardiomyopathy',
    alias:
      '特发性扩张型心肌病（IDC）、家族性扩张型心肌病（FDCM）、致心律失常型右室发育不良/心肌病（ARVC）、左室致密化不全（LVNC）、遗传性转甲状腺素蛋白相关淀粉样变（hATTR）',
    slug: 'idiopathic-cardiomyopathy',
    oneSentence:
      '特发性心肌病是一组在排除明确继发原因后诊断的心肌疾病，可表现为心力衰竭、心律失常、传导异常或猝死风险，并可能具有遗传背景。',
    plainName: '特发性心肌病',
    prevalence:
      '特发性扩张型心肌病（DCM）患病率约36.5/100,000（约1/2,700），其中约20%~35%为家族性。致心律失常型右室心肌病（ARVC）患病率约1/2,000~1/1,000。限制型心肌病估计患病率约1/100,000~9/100,000。左室致密化不全通过超声心动图检出率约1.4/10,000。',
    sourceName: 'GeneReviews: Dilated Cardiomyopathy Overview',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 353,
      name: 'idiopathic-cardiomyopathy-journey.png',
      url: '/images/diseases/idiopathic-cardiomyopathy-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(55, 'disease-idiopathic-hypogonadotropic-hypogonadism'),
    name: '特发性低促性腺激素性性腺功能减退症',
    nameEn: 'Idiopathic Hypogonadotropic Hypogonadism',
    alias:
      'IHH、先天性低促性腺激素性性腺功能减退症（CHH）、卡尔曼综合征（KS，伴嗅觉异常）、嗅觉正常的IHH（nIHH）',
    slug: 'idiopathic-hypogonadotropic-hypogonadism',
    oneSentence:
      '特发性低促性腺激素性性腺功能减退症是一种因先天性下丘脑促性腺激素释放激素（GnRH）神经元功能受损，导致促性腺激素分泌不足、进而引起性腺功能低下的罕见内分泌疾病。',
    plainName: '特发性低促性腺激素性性腺功能减退症',
    prevalence:
      'IHH总体发病率约1~10/100,000。卡尔曼综合征（KS）约占全部IHH 患者的40%~60%，在芬兰患病率约1/48,000，男性多于女性。部分KS 患者可出现自发缓解（约10%~20%）。',
    sourceName:
      'GeneReviews: Isolated Gonadotropin-Releasing Hormone Deficiency',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1334/',
    categorySlug: 'metabolic',
    charityIds: [7],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 354,
      name: 'idiopathic-hypogonadotropic-hypogonadism-journey.png',
      url: '/images/diseases/idiopathic-hypogonadotropic-hypogonadism-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2042, 'disease-inflammatory-myofibroblastic-tumor'),
    name: '炎性肌纤维母细胞瘤',
    nameEn: 'Inflammatory myofibroblastic tumor',
    alias: 'IMT、炎性假瘤相关肿瘤、第二批罕见病目录第 42 项',
    slug: 'inflammatory-myofibroblastic-tumor',
    oneSentence:
      '炎性肌纤维母细胞瘤是一种少见的中间性软组织肿瘤，可发生在肺、腹腔、盆腔、膀胱、头颈部等多处，常需要病理和 ALK 等分子检测来区分炎症、感染和其他肿瘤。',
    plainName: '看起来像炎症、但需要肿瘤专科确认的罕见软组织肿瘤',
    prevalence:
      '已纳入国家第二批罕见病目录；GARD 将 inflammatory myofibroblastic tumor 列为罕见病，儿童、青少年和成人均可发生。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [24],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 396,
      name: 'inflammatory-myofibroblastic-tumor-journey.png',
      url: '/images/diseases/inflammatory-myofibroblastic-tumor-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(3, 'disease-kallmann-syndrome'),
    name: '卡尔曼综合征',
    nameEn: 'Kallmann Syndrome',
    alias: '低促性腺激素性性腺功能减退伴嗅觉减退',
    icd10Code: 'E23.0',
    slug: 'kallmann-syndrome',
    oneSentence:
      '卡尔曼综合征常表现为青春期迟迟不来、第二性征发育不足，并伴有嗅觉减退或缺失，确诊通常需要内分泌评估和遗传相关检查。',
    plainName: '青春期发育延迟伴嗅觉减退',
    prevalence:
      '估计男性约 1/30,000，女性约 1/120,000；实际诊断率可能受地区和就医路径影响。',
    searchIntents: [
      '卡尔曼综合征 看什么科',
      '青春期不发育 嗅觉差',
      '低促性腺激素性性腺功能减退怎么查',
      '卡尔曼综合征 能不能生育',
      '卡尔曼综合征 基因检测',
    ],
    categorySlug: 'genetic-developmental',
    charityIds: [7, 8],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 301,
      name: 'kallmann-syndrome-journey.png',
      url: '/images/diseases/kallmann-syndrome-journey.png',
    },
    tagSlugs: ['endocrine', 'genetic-counseling'],
  },
  {
    ...entity(2043, 'disease-leber-congenital-amaurosis'),
    name: 'Leber先天性黑矇',
    nameEn: 'Leber congenital amaurosis',
    alias:
      'LCA、Leber 先天性黑矇、早发严重视网膜营养不良、第二批罕见病目录第 43 项',
    slug: 'leber-congenital-amaurosis',
    oneSentence:
      'Leber 先天性黑矇是一组婴幼儿期起病的遗传性视网膜疾病，孩子很早出现严重视力低下、眼球震颤、畏光或夜盲，需要遗传眼病专科评估具体基因和低视力支持。',
    plainName: '婴幼儿很早出现严重视力问题的遗传性视网膜病',
    prevalence:
      '已纳入国家第二批罕见病目录；MedlinePlus Genetics 描述 LCA 约占所有视网膜变性的一小部分，整体罕见。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 397,
      name: 'leber-congenital-amaurosis-journey.png',
      url: '/images/diseases/leber-congenital-amaurosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2044, 'disease-lennox-gastaut-syndrome'),
    name: 'Lennox-Gastaut 综合征',
    nameEn: 'Lennox-Gastaut syndrome',
    alias:
      'LGS、Lennox-Gastaut综合征、儿童期发育性癫痫性脑病、第二批罕见病目录第 44 项',
    slug: 'lennox-gastaut-syndrome',
    oneSentence:
      'Lennox-Gastaut 综合征是一种儿童期起病的严重发育性癫痫性脑病，常有多种发作类型、跌倒发作、认知和行为问题，并且癫痫往往较难完全控制。',
    plainName: '儿童期多种癫痫发作反复出现、常伴发育和认知影响的综合征',
    prevalence:
      '已纳入国家第二批罕见病目录；Epilepsy Foundation 将其列为少见但严重的儿童期癫痫综合征。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 398,
      name: 'lennox-gastaut-syndrome-journey.png',
      url: '/images/diseases/lennox-gastaut-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2045, 'disease-limbal-stem-cell-deficiency'),
    name: '角膜缘干细胞缺乏症',
    nameEn: 'Limbal stem cell deficiency',
    alias: 'LSCD、角膜缘干细胞功能不全、第二批罕见病目录第 45 项',
    slug: 'limbal-stem-cell-deficiency',
    oneSentence:
      '角膜缘干细胞缺乏症是角膜边缘维持透明角膜表面的干细胞数量或功能不足，导致反复眼红、疼痛、畏光、视力下降、角膜上皮不稳定和新生血管。',
    plainName: '角膜表面修复系统受损、让透明角膜被异常组织覆盖的眼表病',
    prevalence:
      '已纳入国家第二批罕见病目录；总体少见，可由化学伤、热伤、严重眼表炎症、先天疾病、长期接触镜损伤或多次眼部手术等导致。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 399,
      name: 'limbal-stem-cell-deficiency-journey.png',
      url: '/images/diseases/limbal-stem-cell-deficiency-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2046, 'disease-malignant-hyperthermia'),
    name: '恶性高热',
    nameEn: 'Malignant hyperthermia',
    alias: 'MH；麻醉相关恶性高热；第二批罕见病目录第 46 项',
    slug: 'malignant-hyperthermia',
    oneSentence:
      '恶性高热是一种多与遗传易感有关的麻醉急症，平时可能完全没有症状，但接触特定吸入麻醉药或琥珀胆碱后可迅速出现危及生命的高代谢反应。',
    plainName: '遇到特定麻醉药可能突然发作的遗传性麻醉风险',
    prevalence:
      '已纳入中国第二批罕见病目录；真正易感人群常因没有接触诱发麻醉药而未被发现，发作多见于麻醉或围手术期场景。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 400,
      name: 'malignant-hyperthermia-journey.png',
      url: '/images/diseases/malignant-hyperthermia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2047, 'disease-malignant-pleural-mesothelioma'),
    name: '恶性胸膜间皮瘤',
    nameEn: 'Malignant pleural mesothelioma',
    alias: 'MPM；胸膜恶性间皮瘤；第二批罕见病目录第 47 项',
    slug: 'malignant-pleural-mesothelioma',
    oneSentence:
      '恶性胸膜间皮瘤是一种起源于胸膜间皮细胞的少见恶性肿瘤，常与石棉暴露有关，早期症状像普通胸水或胸痛，确诊通常需要胸膜活检和病理免疫组化。',
    plainName: '一种常表现为胸水、气短和胸痛的少见胸膜癌',
    prevalence:
      '已纳入中国第二批罕见病目录；总体少见，但在有长期石棉或相关职业暴露的人群中风险更高，暴露到发病可相隔多年。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 401,
      name: 'malignant-pleural-mesothelioma-journey.png',
      url: '/images/diseases/malignant-pleural-mesothelioma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2048, 'disease-melanoma'),
    name: '黑色素瘤',
    nameEn: 'Melanoma',
    alias: '恶性黑色素瘤；第二批罕见病目录第 48 项',
    slug: 'melanoma',
    oneSentence:
      '黑色素瘤是起源于黑色素细胞的恶性肿瘤，可发生在皮肤、甲、黏膜或眼部；在中国已纳入第二批罕见病目录，但不同国家和族群中的常见程度差异很大。',
    plainName: '一种需要尽早病理确认的黑色素细胞恶性肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；全球并非在所有地区都罕见，在白种人高发地区较常见，而亚洲人群中肢端和黏膜黑色素瘤相对更需要警惕。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 402,
      name: 'melanoma-journey.png',
      url: '/images/diseases/melanoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2049, 'disease-metachromatic-leukodystrophy'),
    name: '异染性脑白质营养不良',
    nameEn: 'Metachromatic leukodystrophy',
    alias: 'MLD；芳基硫酸酯酶A缺乏症；第二批罕见病目录第 49 项',
    slug: 'metachromatic-leukodystrophy',
    oneSentence:
      '异染性脑白质营养不良是一种多由 ARSA 酶缺乏引起的遗传性溶酶体贮积病，硫脂堆积会逐渐损伤中枢和外周神经髓鞘。',
    plainName: '一种会让神经髓鞘逐渐受损的遗传性白质病',
    prevalence:
      '已纳入中国第二批罕见病目录；国际资料估计约每 4 万至 16 万人中 1 人受累，部分遗传隔离人群发生率更高。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 403,
      name: 'metachromatic-leukodystrophy-journey.png',
      url: '/images/diseases/metachromatic-leukodystrophy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2050, 'disease-monogenic-non-syndromic-obesity'),
    name: '单基因非综合征性肥胖',
    nameEn: 'Monogenic non-syndromic obesity',
    alias: '单基因肥胖；非综合征性遗传性肥胖；第二批罕见病目录第 50 项',
    slug: 'monogenic-non-syndromic-obesity',
    oneSentence:
      '单基因非综合征性肥胖是由单个基因变异导致的早发重度肥胖，常影响饥饿感、饱腹感和能量调节，并不等同于普通生活方式问题。',
    plainName: '一种从很小年龄开始、常伴强烈饥饿感的遗传性肥胖',
    prevalence:
      '已纳入中国第二批罕见病目录；总体罕见，但在 5 岁前快速出现重度肥胖并伴持续饥饿感的人群中应主动考虑。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 404,
      name: 'monogenic-non-syndromic-obesity-journey.png',
      url: '/images/diseases/monogenic-non-syndromic-obesity-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2051, 'disease-multiple-endocrine-neoplasia'),
    name: '多发性内分泌腺瘤病',
    nameEn: 'Multiple endocrine neoplasia',
    alias: 'MEN；多发性内分泌肿瘤综合征；第二批罕见病目录第 51 项',
    slug: 'multiple-endocrine-neoplasia',
    oneSentence:
      '多发性内分泌腺瘤病是一组遗传性内分泌肿瘤综合征，同一个人可先后或同时出现两个以上内分泌腺体肿瘤或增生。',
    plainName: '一种会让多个内分泌腺体反复长肿瘤的遗传病',
    prevalence:
      '已纳入中国第二批罕见病目录；MEN1 和 MEN2 国际估计均约数万分之一，MEN4 更少见。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 405,
      name: 'multiple-endocrine-neoplasia-journey.png',
      url: '/images/diseases/multiple-endocrine-neoplasia-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2052, 'disease-narcolepsy'),
    name: '发作性睡病',
    nameEn: 'Narcolepsy',
    alias: '嗜睡症；Narcolepsy；第二批罕见病目录第 52 项',
    slug: 'narcolepsy',
    oneSentence:
      '发作性睡病是一种慢性睡眠-觉醒调控障碍，核心表现是白天不可控制的困倦，可伴猝倒、睡瘫、入睡或醒来时幻觉和夜间睡眠破碎。',
    plainName: '一种大脑睡醒调节出问题的睡眠病',
    prevalence:
      '已纳入中国第二批罕见病目录；国际资料显示患病率因地区差异明显，且轻症或儿童患者可能被漏诊。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [20],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 406,
      name: 'narcolepsy-journey.png',
      url: '/images/diseases/narcolepsy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2053, 'disease-neuroblastoma'),
    name: '神经母细胞瘤',
    nameEn: 'Neuroblastoma',
    alias: '儿童神经母细胞瘤；第二批罕见病目录第 53 项',
    slug: 'neuroblastoma',
    oneSentence:
      '神经母细胞瘤是一种多见于婴幼儿和儿童的交感神经系统恶性肿瘤，可起源于肾上腺、颈胸腹盆腔旁神经组织，表现和风险分层差异很大。',
    plainName: '一种儿童期更常见、需要按风险分层治疗的神经源性肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；总体属于少见儿童肿瘤，常在 5 岁前诊断，少数可在产前或婴儿期发现。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 407,
      name: 'neuroblastoma-journey.png',
      url: '/images/diseases/neuroblastoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2054, 'disease-neurofibromatosis'),
    name: '神经纤维瘤病',
    nameEn: 'Neurofibromatosis',
    alias: 'NF；NF1；NF2相关神经鞘瘤病；神经鞘瘤病；第二批罕见病目录第 54 项',
    slug: 'neurofibromatosis',
    oneSentence:
      '神经纤维瘤病是一组遗传性神经系统肿瘤易感疾病，可导致皮肤、周围神经、脑脊髓、眼、骨骼和听力等多系统问题。',
    plainName: '一种会让神经和皮肤等部位长肿瘤、需要长期筛查的遗传病',
    prevalence:
      '已纳入中国第二批罕见病目录；NF1 相对最常见，NF2 相关神经鞘瘤病和其他神经鞘瘤病更少见。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [31],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 408,
      name: 'neurofibromatosis-journey.png',
      url: '/images/diseases/neurofibromatosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2055, 'disease-neuronal-ceroid-lipofuscinosis'),
    name: '神经元蜡样脂褐质沉积症',
    nameEn: 'Neuronal ceroid lipofuscinosis',
    alias: 'NCL；Batten 病；CLN 相关疾病；第二批罕见病目录第 55 项',
    slug: 'neuronal-ceroid-lipofuscinosis',
    oneSentence:
      '神经元蜡样脂褐质沉积症是一组遗传性溶酶体神经退行性疾病，常表现为视力下降、癫痫、发育或认知退步、运动障碍和逐渐加重的照护需求。',
    plainName: '一组会逐渐影响视力、癫痫和发育能力的遗传性神经退行病',
    prevalence:
      '已纳入中国第二批罕见病目录；总体罕见，是儿童期遗传性神经退行性疾病的重要原因之一，不同 CLN 类型起病年龄和进展速度不同。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 409,
      name: 'neuronal-ceroid-lipofuscinosis-journey.png',
      url: '/images/diseases/neuronal-ceroid-lipofuscinosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2056, 'disease-neurotrophic-keratitis'),
    name: '神经营养性角膜炎',
    nameEn: 'Neurotrophic keratitis',
    alias: '神经营养性角膜病变；NK；第二批罕见病目录第 56 项',
    slug: 'neurotrophic-keratitis',
    oneSentence:
      '神经营养性角膜炎是角膜感觉神经受损后发生的眼表疾病，眼睛可能不太痛，却会反复出现上皮缺损、溃疡甚至穿孔风险。',
    plainName: '一种“眼睛不够疼但角膜正在受伤”的角膜神经病',
    prevalence:
      '已纳入中国第二批罕见病目录；总体少见，常发生在带状疱疹、单纯疱疹、三叉神经损伤、眼部手术、糖尿病或长期眼表疾病之后。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 410,
      name: 'neurotrophic-keratitis-journey.png',
      url: '/images/diseases/neurotrophic-keratitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2057, 'disease-osteosarcoma'),
    name: '骨肉瘤',
    nameEn: 'Osteosarcoma',
    alias: '成骨肉瘤；第二批罕见病目录第 57 项',
    slug: 'osteosarcoma',
    oneSentence:
      '骨肉瘤是一种产生异常骨样组织的恶性骨肿瘤，常见于青少年长骨，也可发生在成人，治疗通常需要化疗和手术的综合计划。',
    plainName: '一种常以持续骨痛和肿块起病的恶性骨肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；总体少见，青少年发病相对集中，膝关节周围长骨是常见部位。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 411,
      name: 'osteosarcoma-journey.png',
      url: '/images/diseases/osteosarcoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2058, 'disease-pemphigus'),
    name: '天疱疮',
    nameEn: 'Pemphigus',
    alias:
      '自身免疫性大疱病；寻常型天疱疮；落叶型天疱疮；第二批罕见病目录第 58 项',
    slug: 'pemphigus',
    oneSentence:
      '天疱疮是一组自身免疫性大疱病，免疫系统攻击皮肤和黏膜细胞之间的连接，导致反复水疱、糜烂和疼痛性口腔或皮肤破损。',
    plainName: '一种会让皮肤和口腔反复起疱、破溃的自身免疫病',
    prevalence:
      '已纳入中国第二批罕见病目录；总体罕见，寻常型天疱疮常累及口腔黏膜，落叶型更多累及浅表皮肤。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [54],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 412,
      name: 'pemphigus-journey.png',
      url: '/images/diseases/pemphigus-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2059, 'disease-persistent-pulmonary-hypertension-of-the-newborn'),
    name: '新生儿持续肺动脉高压',
    nameEn: 'Persistent pulmonary hypertension of the newborn',
    alias: 'PPHN；新生儿持续性肺高压；第二批罕见病目录第 59 项',
    slug: 'persistent-pulmonary-hypertension-of-the-newborn',
    oneSentence:
      '新生儿持续肺动脉高压是一种出生后肺血管阻力没有正常下降的危重新生儿疾病，会导致严重低氧，需要新生儿重症团队快速处理。',
    plainName: '一种宝宝出生后肺循环没有顺利切换导致缺氧的新生儿急症',
    prevalence:
      '已纳入中国第二批罕见病目录；多见于围产期缺氧、胎粪吸入、肺炎/败血症、肺发育异常或先天膈疝等背景下的新生儿。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 413,
      name: 'persistent-pulmonary-hypertension-of-the-newborn-journey.png',
      url: '/images/diseases/persistent-pulmonary-hypertension-of-the-newborn-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2060, 'disease-pheochromocytoma'),
    name: '嗜铬细胞瘤',
    nameEn: 'Pheochromocytoma',
    alias: 'PCC；嗜铬细胞瘤/副神经节瘤；PPGL；第二批罕见病目录第 60 项',
    slug: 'pheochromocytoma',
    oneSentence:
      '嗜铬细胞瘤是起源于肾上腺髓质嗜铬细胞的神经内分泌肿瘤，可分泌儿茶酚胺，导致阵发性或持续性高血压、心悸、头痛和出汗。',
    plainName: '一种会突然释放升压激素、引起高血压发作的内分泌肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；在高血压人群中少见，但因可导致高血压危象、心律失常和手术麻醉风险，需要主动识别。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 414,
      name: 'pheochromocytoma-journey.png',
      url: '/images/diseases/pheochromocytoma-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2061, 'disease-pik3ca-related-overgrowth-syndrome'),
    name: 'PIK3CA相关过度生长综合征',
    nameEn: 'PIK3CA-related overgrowth spectrum',
    alias: 'PROS；PIK3CA 相关过度生长谱系；第二批罕见病目录第 61 项',
    slug: 'pik3ca-related-overgrowth-syndrome',
    oneSentence:
      'PIK3CA相关过度生长综合征是一组由 PIK3CA 体细胞激活变异导致的疾病，可造成身体某些部位、血管、淋巴、脂肪、骨骼或脑组织不对称过度生长。',
    plainName: '一种身体局部组织过度生长、常伴血管或淋巴畸形的基因嵌合病',
    prevalence:
      '已纳入中国第二批罕见病目录；总体罕见，很多患者因表现分散在血管畸形、肢体肥大、脊柱或脑发育异常等不同专科而延迟识别。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 415,
      name: 'pik3ca-related-overgrowth-syndrome-journey.png',
      url: '/images/diseases/pik3ca-related-overgrowth-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2062, 'disease-polycythaemia-vera'),
    name: '真性红细胞增多症',
    nameEn: 'Polycythaemia vera',
    alias: 'PV；真性红细胞增多症；第二批罕见病目录第 62 项',
    slug: 'polycythaemia-vera',
    oneSentence:
      '真性红细胞增多症是一种骨髓增殖性肿瘤，骨髓制造过多红细胞，常伴白细胞或血小板增多，使血液变稠并增加血栓风险。',
    plainName: '一种血细胞过多、容易血栓的慢性骨髓疾病',
    prevalence:
      '已纳入中国第二批罕见病目录；多见于中老年人，但也可发生在年轻人，需要与缺氧、吸烟、肺病等继发性红细胞增多区分。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 416,
      name: 'polycythaemia-vera-journey.png',
      url: '/images/diseases/polycythaemia-vera-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2063, 'disease-primary-biliary-cholangitis'),
    name: '原发性胆汁性胆管炎',
    nameEn: 'Primary biliary cholangitis',
    alias: 'PBC；原发性胆汁性肝硬化（旧称）；第二批罕见病目录第 63 项',
    slug: 'primary-biliary-cholangitis',
    oneSentence:
      '原发性胆汁性胆管炎是一种慢性自身免疫性胆汁淤积性肝病，免疫系统逐渐损伤肝内小胆管，可导致瘙痒、疲劳、胆汁淤积和肝纤维化。',
    plainName: '一种免疫系统慢慢损伤肝内小胆管的慢性肝病',
    prevalence:
      '已纳入中国第二批罕见病目录；多见于中年女性，很多人在没有症状时因碱性磷酸酶升高和抗线粒体抗体阳性被发现。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 417,
      name: 'primary-biliary-cholangitis-journey.png',
      url: '/images/diseases/primary-biliary-cholangitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2064, 'disease-primary-growth-hormone-deficiency'),
    name: '原发性生长激素缺乏症',
    nameEn: 'Primary growth hormone deficiency',
    alias: 'GHD；原发性 GH 缺乏；第二批罕见病目录第 64 项',
    slug: 'primary-growth-hormone-deficiency',
    oneSentence:
      '原发性生长激素缺乏症是垂体或下丘脑相关原因导致生长激素分泌不足的疾病，儿童常表现为生长速度慢和身材明显矮小。',
    plainName: '一种孩子长得慢、需要内分泌评估的生长激素不足',
    prevalence:
      '已纳入中国第二批罕见病目录；儿童生长激素缺乏少见，但在生长曲线持续下移、年增长速度明显偏慢时需要评估。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 418,
      name: 'primary-growth-hormone-deficiency-journey.png',
      url: '/images/diseases/primary-growth-hormone-deficiency-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2065, 'disease-primary-igf1-deficiency'),
    name: '原发性胰岛素样生长因子-1缺乏症',
    nameEn: 'Primary IGF1 deficiency',
    alias:
      '原发性 IGF-1 缺乏；严重原发性 IGF-1 缺乏；Laron 综合征相关；第二批罕见病目录第 65 项',
    slug: 'primary-igf1-deficiency',
    oneSentence:
      '原发性胰岛素样生长因子-1缺乏症是身体不能产生足够 IGF-1 或不能响应生长激素的疾病，儿童常表现为出生后生长显著缓慢和严重矮小。',
    plainName: '一种生长激素有了但 IGF-1 不足、孩子仍长不高的罕见内分泌病',
    prevalence:
      '已纳入中国第二批罕见病目录；严重原发性 IGF-1 缺乏非常罕见，典型情况是身高和 IGF-1 都很低，但生长激素正常或升高。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 419,
      name: 'primary-igf1-deficiency-journey.png',
      url: '/images/diseases/primary-igf1-deficiency-journey.png',
    },
    tagSlugs: [
      'second-rare-disease-catalog',
      'endocrine',
      'genetic-counseling',
    ],
  },
  {
    ...entity(2066, 'disease-primary-immunodeficiency'),
    name: '原发性免疫缺陷病',
    nameEn: 'Primary immunodeficiency',
    alias: 'PID；PIDD；原发性免疫缺陷；第二批罕见病目录第 66 项',
    slug: 'primary-immunodeficiency',
    oneSentence:
      '原发性免疫缺陷病是一大类先天性免疫系统疾病，可让人更容易反复、严重或不寻常感染，也可能伴自身免疫、过敏、炎症或肿瘤风险。',
    plainName: '免疫系统先天“防御零件”不足或工作异常的一组罕见病',
    prevalence:
      '已纳入中国第二批罕见病目录；这是一个疾病群，具体频率随亚型差异很大，NIAID 资料提示已知类型超过 200 种，美国约 50 万人受影响。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [44],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 420,
      name: 'primary-immunodeficiency-journey.png',
      url: '/images/diseases/primary-immunodeficiency-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2067, 'disease-primary-myelofibrosis'),
    name: '原发性骨髓纤维化',
    nameEn: 'Primary myelofibrosis',
    alias: 'PMF；原发性骨髓纤维化；第二批罕见病目录第 67 项',
    slug: 'primary-myelofibrosis',
    oneSentence:
      '原发性骨髓纤维化是一种罕见的骨髓增殖性肿瘤，骨髓逐渐被纤维组织替代，可能导致贫血、脾大、全身症状、出血或血栓风险。',
    plainName: '骨髓被瘢痕样纤维组织占据、造血变困难的慢性血液病',
    prevalence:
      '已纳入中国第二批罕见病目录；MedlinePlus Genetics 资料估计全球约每 50 万人 1 例，多在 50-80 岁诊断，但任何年龄都可能发生。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 421,
      name: 'primary-myelofibrosis-journey.png',
      url: '/images/diseases/primary-myelofibrosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2068, 'disease-primary-sclerosing-cholangitis'),
    name: '原发性硬化性胆管炎',
    nameEn: 'Primary sclerosing cholangitis',
    alias: 'PSC；原发性硬化性胆管炎；第二批罕见病目录第 68 项',
    slug: 'primary-sclerosing-cholangitis',
    oneSentence:
      '原发性硬化性胆管炎是一种慢性胆管疾病，肝内外胆管反复炎症和瘢痕狭窄，导致胆汁淤积、肝损伤，并常与炎症性肠病有关。',
    plainName: '胆管慢慢变窄、胆汁排出受阻的慢性肝胆病',
    prevalence:
      '已纳入中国第二批罕见病目录；PSC 总体罕见，地区和人群差异明显，常见于合并溃疡性结肠炎等炎症性肠病的人群。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 422,
      name: 'primary-sclerosing-cholangitis-journey.png',
      url: '/images/diseases/primary-sclerosing-cholangitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2069, 'disease-progressive-fibrosing-interstitial-lung-disease'),
    name: '进行性纤维化性间质性肺疾病',
    nameEn: 'Progressive fibrosing interstitial lung disease',
    alias: 'PF-ILD；PPF；进行性肺纤维化；第二批罕见病目录第 69 项',
    slug: 'progressive-fibrosing-interstitial-lung-disease',
    oneSentence:
      '进行性纤维化性间质性肺疾病是多种间质性肺病出现持续纤维化进展的一种表现，患者会逐渐气短、干咳，肺功能或胸部 CT 在随访中恶化。',
    plainName: '肺里瘢痕样纤维化持续进展、呼吸越来越费力的一类病程表现',
    prevalence:
      '已纳入中国第二批罕见病目录；它不是单一病名，而是多种 ILD 的进展表型，罕见程度和病因构成因地区、人群、职业暴露和原发疾病不同而变化。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 423,
      name: 'progressive-fibrosing-interstitial-lung-disease-journey.png',
      url: '/images/diseases/progressive-fibrosing-interstitial-lung-disease-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2070, 'disease-recurrent-pericarditis'),
    name: '复发性心包炎',
    nameEn: 'Recurrent pericarditis',
    alias: 'RP；复发性心包炎；第二批罕见病目录第 70 项',
    slug: 'recurrent-pericarditis',
    oneSentence:
      '复发性心包炎是心包炎症在症状缓解至少数周后再次发作，常表现为反复胸痛、炎症指标升高，少数可出现心包积液或心脏压塞风险。',
    plainName: '包着心脏的膜反复发炎、胸痛反复来的疾病',
    prevalence:
      '已纳入中国第二批罕见病目录；美国心脏协会资料提示，急性心包炎治疗后约 15%-30% 可复发，使用秋水仙碱可降低复发风险。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'cardiovascular',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 424,
      name: 'recurrent-pericarditis-journey.png',
      url: '/images/diseases/recurrent-pericarditis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2071, 'disease-retinopathy-of-prematurity'),
    name: '早产儿视网膜病变',
    nameEn: 'Retinopathy of prematurity',
    alias: 'ROP；早产儿视网膜病；第二批罕见病目录第 71 项',
    slug: 'retinopathy-of-prematurity',
    oneSentence:
      '早产儿视网膜病变是早产或低出生体重婴儿视网膜血管发育异常的眼病，严重时可导致视网膜脱离和终身视力损害。',
    plainName: '早产宝宝视网膜血管还没长好、需要按时筛查的眼病',
    prevalence:
      '已纳入中国第二批罕见病目录；风险主要取决于早产程度、出生体重和新生儿期病情，越早产、越低体重风险越高。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 425,
      name: 'retinopathy-of-prematurity-journey.png',
      url: '/images/diseases/retinopathy-of-prematurity-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2072, 'disease-rett-syndrome'),
    name: 'Rett 综合征',
    nameEn: 'Rett syndrome',
    alias: 'RTT；Rett 综合征；第二批罕见病目录第 72 项',
    slug: 'rett-syndrome',
    oneSentence:
      'Rett 综合征是一种多由 MECP2 变异导致的神经发育疾病，儿童早期常在一段相对正常发育后出现语言和手部功能倒退、重复手动作、癫痫和呼吸运动问题。',
    plainName: '孩子早期发育后出现倒退和重复手动作的遗传性神经发育病',
    prevalence:
      '已纳入中国第二批罕见病目录；MedlinePlus Genetics 资料估计约每 9,000-10,000 名女性 1 例，男性受累少见且常更重。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'neurological',
    charityIds: [10, 81],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 426,
      name: 'rett-syndrome-journey.png',
      url: '/images/diseases/rett-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2073, 'disease-short-bowel-syndrome'),
    name: '短肠综合征',
    nameEn: 'Short bowel syndrome',
    alias: 'SBS；短肠综合征；第二批罕见病目录第 73 项',
    slug: 'short-bowel-syndrome',
    oneSentence:
      '短肠综合征是小肠过短或功能受损，无法吸收足够水分、电解质和营养的疾病，可导致腹泻、脱水、营养不良和长期静脉营养需求。',
    plainName: '肠道吸收面积不够，吃进去也吸收不够的疾病',
    prevalence:
      '已纳入中国第二批罕见病目录；慢性短肠综合征总体罕见，常见于肠切除术后、先天肠道异常、坏死性小肠结肠炎或克罗恩病等背景。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 427,
      name: 'short-bowel-syndrome-journey.png',
      url: '/images/diseases/short-bowel-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2074, 'disease-systemic-juvenile-idiopathic-arthritis'),
    name: '全身型幼年特发性关节炎',
    nameEn: 'Systemic juvenile idiopathic arthritis',
    alias: 'sJIA；全身型 JIA；Still 病相关；第二批罕见病目录第 74 项',
    slug: 'systemic-juvenile-idiopathic-arthritis',
    oneSentence:
      '全身型幼年特发性关节炎是一种儿童起病的自身炎症性疾病，反复高热、皮疹和关节炎是典型线索，严重时可发生巨噬细胞活化综合征。',
    plainName: '孩子反复高热皮疹并伴关节炎的全身炎症病',
    prevalence:
      '已纳入中国第二批罕见病目录；JIA 是一组儿童关节炎疾病，全身型只是其中较少见的一型，患病率随地区和诊断标准不同而变化。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 428,
      name: 'systemic-juvenile-idiopathic-arthritis-journey.png',
      url: '/images/diseases/systemic-juvenile-idiopathic-arthritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2075, 'disease-systemic-mastocytosis'),
    name: '系统性肥大细胞增多症',
    nameEn: 'Systemic mastocytosis',
    alias: 'SM；系统性肥大细胞增多症；第二批罕见病目录第 75 项',
    slug: 'systemic-mastocytosis',
    oneSentence:
      '系统性肥大细胞增多症是一种肥大细胞在骨髓和其他器官异常聚集的罕见血液病，可导致潮红、瘙痒、腹泻、骨痛、过敏反应或器官受损。',
    plainName: '肥大细胞过多聚集，身体反复出现过敏样发作的血液病',
    prevalence:
      '已纳入中国第二批罕见病目录；MedlinePlus Genetics 估计全球约每 10,000-20,000 人 1 例，多数成人病例与获得性 KIT 变异有关。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 429,
      name: 'systemic-mastocytosis-journey.png',
      url: '/images/diseases/systemic-mastocytosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2076, 'disease-takayasu-arteritis'),
    name: '大动脉炎/多发性大动脉炎',
    nameEn: 'Takayasu arteritis',
    alias: 'TAK；Takayasu arteritis；第二批罕见病目录第 76 项',
    slug: 'takayasu-arteritis',
    oneSentence:
      '大动脉炎是一种主要累及主动脉及其主要分支的罕见大血管炎，可能造成血管狭窄、闭塞或动脉瘤，进而影响血压、四肢供血、心脏、脑和肾脏。',
    plainName: '大血管长期发炎、变窄或变弱的免疫性疾病',
    prevalence:
      '已纳入中国第二批罕见病目录；全球发病率较低，在亚洲等人群中相对更常见，多见于年轻女性，但任何性别和年龄都可能发生。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 430,
      name: 'takayasu-arteritis-journey.png',
      url: '/images/diseases/takayasu-arteritis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(
      2077,
      'disease-tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    ),
    name: '腱鞘巨细胞瘤/色素沉着绒毛结节性滑膜炎',
    nameEn: 'Tenosynovial giant cell tumor/Pigmented villonodular synovitis',
    alias: 'TGCT；PVNS；第二批罕见病目录第 77 项',
    slug: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis',
    oneSentence:
      '腱鞘巨细胞瘤是一种发生在滑膜、腱鞘或滑囊的罕见局部侵袭性肿瘤，多数为良性但可反复肿胀、疼痛、卡顿并损伤关节功能。',
    plainName: '长在关节周围、会反复影响活动的良性但棘手肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；属于罕见软组织/关节周围肿瘤，局限型较常见，弥漫型更容易复发和影响功能。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 431,
      name: 'tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
      url: '/images/diseases/tenosynovial-giant-cell-tumor-pigmented-villonodular-synovitis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2078, 'disease-thalassemia-major'),
    name: '地中海贫血（重型）',
    nameEn: 'Thalassemia major',
    alias: '重型地贫；输血依赖型地中海贫血；第二批罕见病目录第 78 项',
    slug: 'thalassemia-major',
    oneSentence:
      '重型地中海贫血是一类遗传性珠蛋白生成障碍，婴幼儿期即可出现严重贫血，许多患者需要规律输血、祛铁和终身专科随访。',
    plainName: '从小出现严重贫血、常需要长期输血和祛铁的遗传性血液病',
    prevalence:
      '已纳入中国第二批罕见病目录；地中海贫血基因在人群中的分布差异很大，在地中海沿岸、中东、南亚、东南亚及中国南方部分地区更常见，但重型病例仍属于需要专科管理的罕见严重类型。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 432,
      name: 'thalassemia-major-journey.png',
      url: '/images/diseases/thalassemia-major-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2079, 'disease-thrombotic-thrombocytopenic-purpura'),
    name: '血栓性血小板减少性紫癜',
    nameEn: 'Thrombotic thrombocytopenic purpura',
    alias: 'TTP；第二批罕见病目录第 79 项',
    slug: 'thrombotic-thrombocytopenic-purpura',
    oneSentence:
      '血栓性血小板减少性紫癜是一种罕见但危急的血栓性微血管病，ADAMTS13 严重不足会让微小血栓堵塞器官血流，同时造成血小板减少和溶血性贫血。',
    plainName: '血小板在小血管里异常结块、需要立刻处理的血液急症',
    prevalence:
      '已纳入中国第二批罕见病目录；TTP 属罕见病，可分为获得性免疫介导型和先天性 ADAMTS13 缺乏型，发病突然且可危及生命。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 433,
      name: 'thrombotic-thrombocytopenic-purpura-journey.png',
      url: '/images/diseases/thrombotic-thrombocytopenic-purpura-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2080, 'disease-transthyretin-amyloidosis'),
    name: '转甲状腺素蛋白淀粉样变性',
    nameEn: 'Transthyretin amyloidosis',
    alias: 'ATTR；hATTR；ATTR-CM；ATTR-PN；第二批罕见病目录第 80 项',
    slug: 'transthyretin-amyloidosis',
    oneSentence:
      '转甲状腺素蛋白淀粉样变性是 TTR 蛋白错误折叠并沉积在神经、心脏等组织中的系统性疾病，可造成周围神经病、心肌病和自主神经/胃肠症状。',
    plainName: '异常蛋白沉积在神经和心脏等部位的系统性疾病',
    prevalence:
      '已纳入中国第二批罕见病目录；遗传型 ATTR 在不同家系和地区差异很大，野生型 ATTR 心肌病多见于老年人但常被低估。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'multisystem',
    charityIds: [41],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 434,
      name: 'transthyretin-amyloidosis-journey.png',
      url: '/images/diseases/transthyretin-amyloidosis-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2082, 'disease-tumor-induced-osteomalacia'),
    name: '肿瘤相关骨软化症',
    nameEn: 'Tumor-induced osteomalacia',
    alias: 'TIO；肿瘤性骨软化症；第二批罕见病目录第 82 项',
    slug: 'tumor-induced-osteomalacia',
    oneSentence:
      '肿瘤相关骨软化症是一种罕见的获得性低磷性骨软化病，通常由小而隐蔽的肿瘤分泌过多 FGF23，导致肾脏丢磷、骨痛、肌无力和反复骨折。',
    plainName: '一个隐蔽小肿瘤让身体长期丢磷、骨头变软的疾病',
    prevalence:
      '已纳入中国第二批罕见病目录；TIO 很罕见，致病肿瘤常小、位置隐蔽，确诊前可能经历多年骨痛和多次骨折。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 435,
      name: 'tumor-induced-osteomalacia-journey.png',
      url: '/images/diseases/tumor-induced-osteomalacia-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'endocrine'],
  },
  {
    ...entity(
      2081,
      'disease-tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    ),
    name: '肿瘤坏死因子受体相关周期性综合征',
    nameEn: 'Tumor necrosis factor receptor-associated periodic syndrome',
    alias: 'TRAPS；TNF受体相关周期性综合征；第二批罕见病目录第 81 项',
    slug: 'tumor-necrosis-factor-receptor-associated-periodic-syndrome',
    oneSentence:
      'TRAPS 是一种罕见自身炎症性遗传病，TNFRSF1A 基因变异会引起反复长时间发热、皮疹、肌痛、腹痛、眼周肿痛和炎症指标升高。',
    plainName: '身体反复自己发炎、一次发作可持续很多天的遗传性发热病',
    prevalence:
      '已纳入中国第二批罕见病目录；TRAPS 全球罕见，常在儿童期起病，但成人也可能首次被诊断。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 436,
      name: 'tumor-necrosis-factor-receptor-associated-periodic-syndrome-journey.png',
      url: '/images/diseases/tumor-necrosis-factor-receptor-associated-periodic-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2083, 'disease-von-hippel-lindau-syndrome'),
    name: 'Von Hippel-Lindau综合征',
    nameEn: 'Von Hippel-Lindau syndrome',
    alias: 'VHL综合征；希佩尔-林道综合征；第二批罕见病目录第 83 项',
    slug: 'von-hippel-lindau-syndrome',
    oneSentence:
      'VHL 综合征是一种常染色体显性遗传的肿瘤易感综合征，可能在视网膜、脑和脊髓、肾脏、肾上腺、胰腺、内耳等部位反复发生囊肿或肿瘤。',
    plainName: '一个基因变异让多个器官更容易长肿瘤的遗传综合征',
    prevalence:
      '已纳入中国第二批罕见病目录；NCI 资料常用约每 36,000 人 1 例的估计，家族内表现差异很大。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 437,
      name: 'von-hippel-lindau-syndrome-journey.png',
      url: '/images/diseases/von-hippel-lindau-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(2084, 'disease-von-willebrand-disease-type3'),
    name: '血管性血友病Ⅲ型',
    nameEn: 'Von Willebrand disease type 3',
    alias: '3型血管性血友病；VWD type 3；第二批罕见病目录第 84 项',
    slug: 'von-willebrand-disease-type3',
    oneSentence:
      '3 型血管性血友病是最严重、最罕见的 VWD 类型，体内几乎没有可用的 VWF，常伴凝血因子 VIII 降低，导致从小反复黏膜、软组织、关节或手术相关出血。',
    plainName: '从小容易反复出血、需要凝血专科管理的遗传性出血病',
    prevalence:
      '已纳入中国第二批罕见病目录；VWD 整体较常见，但 3 型很罕见，通常按常染色体隐性遗传。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 438,
      name: 'von-willebrand-disease-type3-journey.png',
      url: '/images/diseases/von-willebrand-disease-type3-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(
      2085,
      'disease-waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    ),
    name: '华氏巨球蛋白血症/淋巴浆细胞淋巴瘤',
    nameEn: 'Waldenström macroglobulinemia/Lymphoplasmacytic lymphoma',
    alias: 'WM；LPL；第二批罕见病目录第 85 项',
    slug: 'waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    oneSentence:
      '华氏巨球蛋白血症是一种少见的惰性 B 细胞淋巴瘤，骨髓中异常淋巴浆细胞产生过多 IgM，可导致贫血、感染、出血、神经病变或高黏滞综合征。',
    plainName: '一种进展较慢、会产生过多 IgM 的血液肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；属于少见非霍奇金淋巴瘤，常见于中老年人。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 439,
      name: 'waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma-journey.png',
      url: '/images/diseases/waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  },
  {
    ...entity(2086, 'disease-west-syndrome-infantile-spasms-syndrome'),
    name: 'West综合征/婴儿痉挛综合征',
    nameEn: 'West syndrome/Infantile spasms syndrome',
    alias: '婴儿癫痫痉挛综合征；IESS；第二批罕见病目录第 86 项',
    slug: 'west-syndrome-infantile-spasms-syndrome',
    oneSentence:
      'West 综合征/婴儿痉挛综合征是一种婴儿期严重癫痫综合征，常表现为成串点头、抱团或伸展样短促痉挛，脑电图异常，并可伴发育停滞或倒退。',
    plainName: '婴儿突然成串点头或抱团、需要尽快治疗的癫痫综合征',
    prevalence:
      '已纳入中国第二批罕见病目录；多在出生后第一年出现，是儿童神经科需要尽早识别和治疗的癫痫急症。',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [60],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 440,
      name: 'west-syndrome-infantile-spasms-syndrome-journey.png',
      url: '/images/diseases/west-syndrome-infantile-spasms-syndrome-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(5001, 'disease-idiopathic-pulmonary-arterial-hypertension'),
    name: '特发性肺动脉高压',
    nameEn: 'Idiopathic Pulmonary Arterial Hypertension',
    alias: 'IPAH、原发性肺动脉高压、第一批罕见病目录第 54 项',
    slug: 'idiopathic-pulmonary-arterial-hypertension',
    oneSentence:
      '特发性肺动脉高压是一种原因不明的肺血管疾病，肺动脉压力进行性升高导致右心衰竭，早期表现为活动后气短，需心内科或呼吸科专科评估。',
    plainName: '肺部血管压力异常升高、心脏负担加重的罕见病',
    prevalence:
      '年发病率约 0.9–10.7 例/百万人，患病率约 6–26 例/百万人；女性多见，男女比约 1:1.7–2.3。',
    searchIntents: [
      '特发性肺动脉高压 看什么科',
      '肺动脉高压 早期症状',
      'IPAH 治疗方案',
      '肺动脉高压 能活多久',
      '肺动脉高压 怀孕风险',
    ],
    sourceName: 'NCBI StatPearls: Idiopathic Pulmonary Arterial Hypertension',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK519041/',
    categorySlug: 'cardiovascular',
    charityIds: [46, 47, 48],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5001,
      name: 'idiopathic-pulmonary-arterial-hypertension-journey.png',
      url: '/images/diseases/idiopathic-pulmonary-arterial-hypertension-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(5002, 'disease-idiopathic-pulmonary-fibrosis'),
    name: '特发性肺纤维化',
    nameEn: 'Idiopathic Pulmonary Fibrosis',
    alias: 'IPF、寻常型间质性肺炎、第一批罕见病目录第 55 项',
    slug: 'idiopathic-pulmonary-fibrosis',
    oneSentence:
      '特发性肺纤维化是一种原因不明的进行性肺间质纤维化疾病，以活动后呼吸困难和干咳为主要表现，抗纤维化药物可延缓肺功能下降，肺移植是唯一的治愈手段。',
    plainName: '肺部逐渐变硬、结疤导致呼吸困难的罕见肺病',
    prevalence:
      '发病率约 0.09–1.30/万人，患病率约 0.33–4.51/万人；多见于 60 岁以上男性，诊断后中位生存期约 3–5 年。',
    searchIntents: [
      '特发性肺纤维化 早期症状',
      'IPF 治疗 吡非尼酮 尼达尼布',
      '肺纤维化 能活多久',
      '特发性肺纤维化 肺移植',
      '肺纤维化 干咳 呼吸困难',
    ],
    sourceName: 'NCBI StatPearls: Idiopathic Pulmonary Fibrosis',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK448162/',
    categorySlug: 'respiratory',
    charityIds: [56],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5002,
      name: 'idiopathic-pulmonary-fibrosis-journey.png',
      url: '/images/diseases/idiopathic-pulmonary-fibrosis-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(5003, 'disease-igg4-related-disease'),
    name: 'IgG4 相关性疾病',
    nameEn: 'IgG4-Related Disease',
    alias: 'IgG4-RD、IgG4 相关系统性疾病、第一批罕见病目录第 56 项',
    slug: 'igg4-related-disease',
    oneSentence:
      'IgG4 相关性疾病是一种可累及多个器官的慢性自身免疫性疾病，以 IgG4 阳性浆细胞浸润和纤维化为特征，常表现为无痛性肿块或器官肿大，糖皮质激素治疗反应通常良好。',
    plainName: '免疫系统异常导致多个器官肿大或结疤的罕见病',
    prevalence:
      '患病率尚不明确；多见于中老年男性，平均发病年龄约 50–60 岁；近年随着认识提高，报告病例逐渐增多。',
    searchIntents: [
      'IgG4 相关性疾病 症状',
      'IgG4-RD 诊断标准',
      'IgG4 相关性疾病 治疗',
      'IgG4 相关胰腺炎 自身免疫性胰腺炎',
      'IgG4 血清升高 一定有病吗',
    ],
    sourceName: 'Merck Manual: IgG4-Related Disease',
    sourceUrl:
      'https://www.merckmanuals.com/professional/musculoskeletal-and-connective-tissue-disorders/igg4-related-disease/igg4-related-disease',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5003,
      name: 'igg4-related-disease-journey.png',
      url: '/images/diseases/igg4-related-disease-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
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
  },
  {
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
  },
  {
    ...entity(5006, 'disease-langerhans-cell-histiocytosis'),
    name: '朗格汉斯组织细胞增生症',
    nameEn: 'Langerhans Cell Histiocytosis',
    alias: 'LCH、组织细胞增生症X、第一批罕见病目录第 60 项',
    slug: 'langerhans-cell-histiocytosis',
    oneSentence:
      '朗格汉斯组织细胞增生症是一种以朗格汉斯细胞异常增殖为特征的罕见病，可累及骨骼、皮肤、垂体等多个器官，临床表现差异大，根据受累范围采用分层治疗，多数单系统病变预后良好。',
    plainName: '一种免疫细胞异常增生可影响骨骼、皮肤和垂体的罕见病',
    prevalence:
      '年发病率约 0.5–5.4 例/百万人；儿童多见，高峰年龄 1–3 岁；成人发病相对少见，肺 LCH 多见于 20–40 岁吸烟者。',
    searchIntents: [
      '朗格汉斯组织细胞增生症 症状',
      'LCH 骨病变 治疗',
      '朗格汉斯细胞增生症 尿崩症',
      'LCH 儿童 预后',
      '朗格汉斯组织细胞增生症 化疗',
    ],
    sourceName: 'GeneReviews: Langerhans Cell Histiocytosis',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7037/',
    sources: [
      {
        name: 'GeneReviews: Langerhans Cell Histiocytosis',
        type: 'official',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK7037/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'oncology',
    charityIds: [79],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5006,
      name: 'langerhans-cell-histiocytosis-journey.png',
      url: '/images/diseases/langerhans-cell-histiocytosis-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(5007, 'disease-laron-syndrome'),
    name: '莱伦氏综合征',
    nameEn: 'Laron Syndrome',
    alias: 'Laron 型侏儒症、生长激素不敏感综合征、第一批罕见病目录第 61 项',
    slug: 'laron-syndrome',
    oneSentence:
      '莱伦氏综合征是一种常染色体隐性遗传病，因生长激素受体缺陷导致胰岛素样生长因子-1（IGF-1）合成不足，表现为严重生长迟缓但血清生长激素水平升高，重组人 IGF-1 替代治疗可有效促进生长。',
    plainName: '一种因生长激素不起作用而导致身材极度矮小的遗传病',
    prevalence:
      '极罕见，全球已报告约 250–300 例；以色列、地中海沿岸、厄瓜多尔等部分人群中发病率较高。',
    searchIntents: [
      '莱伦氏综合征 症状',
      'Laron syndrome IGF-1 治疗',
      '莱伦氏综合征 生长激素',
      'Laron 综合征 遗传',
      '莱伦氏综合征 身高',
    ],
    sourceName: 'GeneReviews: Laron Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7038/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5007,
      name: 'laron-syndrome-journey.png',
      url: '/images/diseases/laron-syndrome-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(5008, 'disease-leber-hereditary-optic-neuropathy'),
    name: 'Leber遗传性视神经病变',
    nameEn: 'Leber Hereditary Optic Neuropathy',
    alias: 'LHON、Leber视神经萎缩、第一批罕见病目录第 62 项',
    slug: 'leber-hereditary-optic-neuropathy',
    oneSentence:
      'Leber遗传性视神经病变是一种母系遗传的线粒体疾病，因线粒体DNA突变导致视神经退行性变，表现为无痛性、亚急性中心视力丧失，多见于青年男性，目前尚无根治方法。',
    plainName: '一种从母亲遗传的导致视力突然下降的罕见眼病',
    prevalence:
      '患病率约 1/30,000–50,000；多见于 15–35 岁青年男性，男女比约 3:1–8:1。',
    searchIntents: [
      'Leber遗传性视神经病变 症状',
      'LHON 视力恢复',
      'Leber视神经萎缩 遗传',
      'LHON 治疗 艾地苯醌',
      'Leber 线粒体 基因',
    ],
    sourceName: 'GeneReviews: Leber Hereditary Optic Neuropathy',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1174/',
    categorySlug: 'ophthalmologic',
    charityIds: [52],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5008,
      name: 'leber-hereditary-optic-neuropathy-journey.png',
      url: '/images/diseases/leber-hereditary-optic-neuropathy-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
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
  },
  {
    ...entity(5010, 'disease-lymphangioleiomyomatosis-lam'),
    name: '淋巴管肌瘤病',
    nameEn: 'Lymphangioleiomyomatosis (LAM)',
    alias: 'LAM、肺淋巴管肌瘤病、第一批罕见病目录第 64 项',
    slug: 'lymphangioleiomyomatosis-lam',
    oneSentence:
      '淋巴管肌瘤病是一种罕见的囊性肺疾病，主要影响女性，以肺部平滑肌样细胞异常增生导致囊性破坏为特征，可表现为气胸、乳糜胸和进行性呼吸困难，西罗莫司可有效延缓肺功能下降。',
    plainName: '一种主要影响女性的肺部逐渐形成气囊肿的罕见病',
    prevalence:
      '患病率约 1/400,000–1,000,000；几乎只见于女性，尤其是育龄期女性；散发型和结节性硬化症相关型（TSC-LAM）均可见。',
    searchIntents: [
      '淋巴管肌瘤病 症状',
      'LAM 气胸 乳糜胸',
      '淋巴管肌瘤病 治疗 西罗莫司',
      'LAM 女性 肺移植',
      '淋巴管肌瘤病 结节性硬化症',
    ],
    sourceName: 'NCBI StatPearls: Lymphangioleiomyomatosis',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK470348/',
    categorySlug: 'respiratory',
    charityIds: [3],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5010,
      name: 'lymphangioleiomyomatosis-lam-journey.png',
      url: '/images/diseases/lymphangioleiomyomatosis-lam-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(5011, 'disease-lysinuric-protein-intolerance'),
    name: '赖氨酸尿蛋白不耐受症',
    nameEn: 'Lysinuric Protein Intolerance',
    alias: 'LPI、二碱基氨基酸尿症、第一批罕见病目录第 65 项',
    slug: 'lysinuric-protein-intolerance',
    oneSentence:
      '赖氨酸尿蛋白不耐受症是一种常染色体隐性遗传的氨基酸转运障碍，因 SLC7A7 基因突变导致肠道和肾脏对二碱基氨基酸吸收障碍，高蛋白饮食后出现呕吐、腹泻、昏迷等症状，低蛋白饮食和瓜氨酸补充是主要治疗手段。',
    plainName: '一种吃蛋白质后会出现呕吐腹泻甚至昏迷的遗传性代谢病',
    prevalence:
      '极罕见，患病率约 1/60,000–200,000；在芬兰人群中发病率最高（约 1/20,000），日本、意大利等地也有报道。',
    searchIntents: [
      '赖氨酸尿蛋白不耐受症 症状',
      'LPI 低蛋白饮食',
      '赖氨酸尿蛋白不耐受症 昏迷',
      'LPI 瓜氨酸 治疗',
      '赖氨酸尿蛋白不耐受症 遗传',
    ],
    sourceName: 'GeneReviews: Lysinuric Protein Intolerance',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1361/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5011,
      name: 'lysinuric-protein-intolerance-journey.png',
      url: '/images/diseases/lysinuric-protein-intolerance-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
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
  },
  {
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
  },
  {
    ...entity(5014, 'disease-marfan-syndrome'),
    name: '马凡综合征',
    nameEn: 'Marfan Syndrome',
    alias: '马方综合征、蜘蛛指（趾）综合征、第一批罕见病目录第 68 项',
    slug: 'marfan-syndrome',
    oneSentence:
      '马凡综合征是一种常染色体显性遗传的结缔组织病，因 FBN1 基因突变导致原纤维蛋白-1缺陷，引起骨骼、眼睛和心血管系统异常，主动脉夹层是最危险的并发症，需终身随访和降压治疗。',
    plainName: '一种影响骨骼、眼睛和心脏血管的遗传性结缔组织病',
    prevalence:
      '患病率约 1/5,000–10,000；无性别和种族差异；约 75% 为家族遗传，25% 为新发突变。',
    searchIntents: [
      '马凡综合征 症状',
      '马凡综合征 主动脉夹层',
      'Marfan syndrome 身高 手指',
      '马凡综合征 晶状体脱位',
      '马凡综合征 治疗 降压',
    ],
    sourceName: 'GeneReviews: Marfan Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1335/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [23],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5014,
      name: 'marfan-syndrome-journey.png',
      url: '/images/diseases/marfan-syndrome-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(5015, 'disease-mccune-albright-syndrome'),
    name: 'McCune-Albright综合征',
    nameEn: 'McCune-Albright Syndrome',
    alias: 'MAS、多骨性纤维发育不良、第一批罕见病目录第 69 项',
    slug: 'mccune-albright-syndrome',
    oneSentence:
      'McCune-Albright综合征是一种罕见的体细胞嵌合性疾病，因 GNAS 基因突变导致骨纤维发育不良、皮肤咖啡牛奶斑和内分泌功能亢进（性早熟、甲亢等），需多学科综合管理。',
    plainName: '一种同时影响骨骼、皮肤和内分泌系统的罕见遗传病',
    prevalence:
      '患病率约 1/100,000–1,000,000；男女均可发病，但女性性早熟表现更突出；无种族差异。',
    searchIntents: [
      'McCune-Albright综合征 症状',
      'MAS 骨纤维发育不良',
      'McCune-Albright 性早熟',
      'MAS 咖啡牛奶斑',
      'McCune-Albright综合征 治疗',
    ],
    sourceName: 'GeneReviews: McCune-Albright Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK274564/',
    categorySlug: 'genetic-developmental',
    charityIds: [55],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5015,
      name: 'mccune-albright-syndrome-journey.png',
      url: '/images/diseases/mccune-albright-syndrome-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(5016, 'disease-medium-chain-acyl-coa-dehydrogenase-deficiency'),
    name: '中链酰基辅酶A脱氢酶缺乏症',
    nameEn: 'Medium-Chain Acyl-CoA Dehydrogenase Deficiency',
    alias: 'MCADD、MCAD 缺乏症',
    slug: 'medium-chain-acyl-coa-dehydrogenase-deficiency',
    oneSentence:
      'MCADD 是最常见的脂肪酸氧化障碍，由 ACADM 基因变异导致中链脂肪酸无法正常分解供能，常在饥饿或感染时诱发低酮性低血糖。',
    plainName: '身体在饿的时候没法用脂肪来"烧"的一种代谢病',
    prevalence:
      '全球发病率约 1/15,000；北欧人群更高（如荷兰约 1/8,500）。中国新生儿筛查已逐步覆盖，实际检出率与筛查普及程度相关。',
    searchIntents: [
      'MCADD 新生儿筛查阳性怎么办',
      '中链酰基辅酶A脱氢酶缺乏症 症状',
      'MCADD 不能饿多久',
      'MCADD 饮食注意',
      '脂肪酸氧化障碍 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1424/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5016,
      name: 'medium-chain-acyl-coa-dehydrogenase-deficiency-journey.png',
      url: '/images/diseases/medium-chain-acyl-coa-dehydrogenase-deficiency-journey.png',
    },
    tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
  },
  {
    ...entity(5017, 'disease-methylmalonic-academia'),
    name: '甲基丙二酸血症',
    nameEn: 'Methylmalonic Acidemia',
    alias: 'MMA、甲基丙二酸尿症',
    slug: 'methylmalonic-academia',
    oneSentence:
      '甲基丙二酸血症是一组常染色体隐性遗传的有机酸血症，由于甲基丙二酰辅酶A变位酶或其辅因子腺苷钴胺素缺陷，导致甲基丙二酸等有害物质蓄积，可损害神经、肾脏和造血系统。',
    plainName: '体内酸性代谢产物排不出去的遗传代谢病',
    prevalence:
      '全球发病率约 1/50,000-1/100,000；中国新生儿筛查已逐步推广，不同地区检出率差异较大。',
    searchIntents: [
      '甲基丙二酸血症 新生儿筛查',
      'MMA 早期症状',
      '甲基丙二酸血症 治疗',
      'MMA 饮食管理',
      '甲基丙二酸血症 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1231/',
    categorySlug: 'metabolic',
    charityIds: [42, 43],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5017,
      name: 'methylmalonic-academia-journey.png',
      url: '/images/diseases/methylmalonic-academia-journey.png',
    },
    tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
  },
  {
    ...entity(5018, 'disease-mitochodrial-encephalomyopathy'),
    name: '线粒体脑肌病',
    nameEn: 'Mitochondrial Encephalomyopathy',
    alias: 'MELAS、MERRF、线粒体脑肌病伴高乳酸血症和卒中样发作',
    slug: 'mitochodrial-encephalomyopathy',
    oneSentence:
      '线粒体脑肌病是一组由线粒体DNA或核DNA变异导致能量代谢障碍的疾病，可影响神经、肌肉、心脏、内分泌等多个系统，常见类型包括 MELAS 和 MERRF。',
    plainName: '身体"发电厂"出问题的遗传病',
    prevalence:
      '线粒体病总体发病率约 1/5,000；其中 MELAS 是最常见的线粒体脑肌病类型，m.3243A>G 突变所致者约 1/200,000-1/400,000。',
    searchIntents: [
      '线粒体脑肌病 症状',
      'MELAS 诊断',
      'MERRF 遗传',
      '线粒体病 治疗',
      '线粒体病 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1233/',
    categorySlug: 'neurological',
    charityIds: [61],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5018,
      name: 'mitochodrial-encephalomyopathy-journey.png',
      url: '/images/diseases/mitochodrial-encephalomyopathy-journey.png',
    },
    tagSlugs: ['neurological', 'genetic-counseling', 'mitochondrial'],
  },
  {
    ...entity(5019, 'disease-mucopolysaccharidosis'),
    name: '黏多糖贮积症',
    nameEn: 'Mucopolysaccharidosis',
    alias: 'MPS、黏多糖病',
    slug: 'mucopolysaccharidosis',
    oneSentence:
      '黏多糖贮积症是一组常染色体隐性或X-连锁隐性遗传的溶酶体贮积病，由于特定酶缺乏导致黏多糖（糖胺聚糖）在体内蓄积，可累及骨骼、神经、心脏、呼吸和视觉系统。',
    plainName: '身体里"垃圾"清理不掉的一种遗传病',
    prevalence:
      '各型发病率不同，总体约 1/25,000-1/100,000 活产儿；MPS II（亨特综合征）为X-连锁遗传，仅男性发病。中国已有新生儿筛查试点项目。',
    searchIntents: [
      '黏多糖贮积症 症状',
      'MPS 分型',
      '黏多糖贮积症 治疗',
      'MPS 酶替代治疗',
      '黏多糖贮积症 遗传',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1162/',
    categorySlug: 'metabolic',
    charityIds: [30],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5019,
      name: 'mucopolysaccharidosis-journey.png',
      url: '/images/diseases/mucopolysaccharidosis-journey.png',
    },
    tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric'],
  },
  {
    ...entity(5020, 'disease-multifocal-motor-neuropathy'),
    name: '多灶性运动神经病',
    nameEn: 'Multifocal Motor Neuropathy',
    alias: 'MMN、多灶性运动神经病伴传导阻滞',
    slug: 'multifocal-motor-neuropathy',
    oneSentence:
      '多灶性运动神经病是一种罕见的免疫介导性周围神经病，以不对称性、缓慢进展的肢体肌无力为特征，不伴明显感觉障碍，多数患者对静脉免疫球蛋白治疗反应良好。',
    plainName: '免疫系统"误伤"运动神经导致手脚没力气',
    prevalence:
      '患病率约 1-2/100,000；男性多于女性，发病高峰在 35-70 岁。属于可治性周围神经病，但早期识别率较低。',
    searchIntents: [
      '多灶性运动神经病 症状',
      'MMN 诊断标准',
      '多灶性运动神经病 治疗',
      'MMN 与ALS区别',
      '静脉免疫球蛋白 MMN',
    ],
    sourceName: 'NCBI StatPearls',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK554524/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 5020,
      name: 'multifocal-motor-neuropathy-journey.png',
      url: '/images/diseases/multifocal-motor-neuropathy-journey.png',
    },
    tagSlugs: ['neurological', 'autoimmune', 'immune-therapy'],
  },
  {
    ...entity(5021, 'disease-multiple-acyl-coa-dehydrogenase-deficiency'),
    name: '多种酰基辅酶A脱氢酶缺乏症',
    nameEn: 'Multiple Acyl-CoA Dehydrogenase Deficiency',
    alias: 'MADD、GAII、戊二酸尿症II型',
    slug: 'multiple-acyl-coa-dehydrogenase-deficiency',
    oneSentence:
      '多种酰基辅酶A脱氢酶缺乏症（MADD）是一组常染色体隐性遗传的脂肪酸氧化障碍，因电子转移黄素蛋白（ETF）或其脱氢酶（ETFDH）缺陷导致多种脂肪酸和氨基酸无法正常分解，临床表型从新生儿期致死到成人期肌病不等。',
    plainName: '身体没法同时"烧"脂肪和蛋白质的一种严重代谢病',
    prevalence:
      '新生儿型发病率约 1/100,000-1/250,000；晚发型更常见，尤其在中国和东亚人群中 ETFDH 相关晚发型 MADD 报道较多。',
    searchIntents: [
      'MADD 新生儿筛查',
      '多种酰基辅酶A脱氢酶缺乏症 症状',
      '戊二酸尿症II型 治疗',
      'MADD 核黄素 治疗',
      '脂肪酸氧化障碍 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK558236/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3521,
      name: 'multiple-acyl-coa-dehydrogenase-deficiency-journey.png',
      url: '/images/diseases/multiple-acyl-coa-dehydrogenase-deficiency-journey.png',
    },
    tagSlugs: ['metabolic', 'genetic-counseling', 'newborn-screening'],
  },
  {
    ...entity(5022, 'disease-multiple-sclerosis'),
    name: '多发性硬化',
    nameEn: 'Multiple Sclerosis',
    alias: 'MS、多发性硬化症',
    slug: 'multiple-sclerosis',
    oneSentence:
      '多发性硬化是一种中枢神经系统自身免疫性脱髓鞘疾病，免疫系统错误攻击神经纤维的髓鞘，导致神经信号传导障碍，临床表现为反复发作的神经功能障碍，可累及视神经、脊髓和脑。',
    plainName: '免疫系统攻击神经保护层导致信号传递出错的慢性病',
    prevalence:
      '全球患病率约 30-100/100,000；北欧和北美发病率最高。中国属低发区，但随着诊断水平提高，检出率逐年上升，估计患病率约 2-5/100,000。',
    searchIntents: [
      '多发性硬化 早期症状',
      'MS 诊断标准',
      '多发性硬化 治疗药物',
      'MS 复发 怎么办',
      '多发性硬化 遗传 会传给下一代吗',
    ],
    sourceName: 'NCBI StatPearls',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK499849/',
    categorySlug: 'neurological',
    charityIds: [14, 15, 59],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3522,
      name: 'multiple-sclerosis-journey.png',
      url: '/images/diseases/multiple-sclerosis-journey.png',
    },
    tagSlugs: ['neurological', 'autoimmune', 'treatable'],
  },
  {
    ...entity(5023, 'disease-multiple-system-atrophy'),
    name: '多系统萎缩',
    nameEn: 'Multiple System Atrophy',
    alias: 'MSA、Shy-Drager综合征',
    slug: 'multiple-system-atrophy',
    oneSentence:
      '多系统萎缩是一种罕见的、散发性的进行性神经退行性疾病，以自主神经功能障碍、帕金森样症状和小脑共济失调的组合为特征，病理上以少突胶质细胞胞质内α-突触核蛋白包涵体为标志。',
    plainName: '同时影响自主神经、运动协调和肌肉僵硬的快速进展性神经退化病',
    prevalence:
      '患病率约 2-5/100,000；发病年龄多在 50-60 岁，男性略多于女性。进展较快，确诊后中位生存期约 6-10 年。',
    searchIntents: [
      '多系统萎缩 早期症状',
      'MSA 诊断标准',
      '多系统萎缩 与帕金森区别',
      '多系统萎缩 治疗',
      '多系统萎缩 预后 寿命',
    ],
    sourceName: 'NINDS',
    sourceUrl:
      'https://www.ninds.nih.gov/health-information/disorders/multiple-system-atrophy',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3523,
      name: 'multiple-system-atrophy-journey.png',
      url: '/images/diseases/multiple-system-atrophy-journey.png',
    },
    tagSlugs: ['neurological', 'autoimmune', 'palliative-care'],
  },
  {
    ...entity(5024, 'disease-myotonic-dystrophy'),
    name: '肌强直性营养不良',
    nameEn: 'Myotonic Dystrophy',
    alias: 'DM、强直性肌营养不良、Steinert病',
    slug: 'myotonic-dystrophy',
    oneSentence:
      '肌强直性营养不良是一组常染色体显性遗传的多系统疾病，以肌强直、进行性肌无力和特征性前额秃发、白内障、心律失常、内分泌异常等多系统受累为特征，分为1型（DMPK基因CTG重复扩增）和2型（CNBP基因CCTG重复扩增）。',
    plainName: '肌肉僵直没力气，还影响心脏、眼睛和内分泌的遗传病',
    prevalence:
      'DM1 是全球最常见的成人肌营养不良，患病率约 5-20/100,000；DM2 患病率约 1-5/100,000。DM1 有先天性形式，可在出生时即表现严重症状。',
    searchIntents: [
      '肌强直性营养不良 症状',
      '肌强直 手打不开 怎么办',
      '肌强直性营养不良 心脏',
      'DM1 DM2 区别',
      '肌强直性营养不良 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1166/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3524,
      name: 'myotonic-dystrophy-journey.png',
      url: '/images/diseases/myotonic-dystrophy-journey.png',
    },
    tagSlugs: ['neurological', 'genetic-counseling', 'cardiac'],
  },
  {
    ...entity(5025, 'disease-n-acetylglutamate-synthase-deficiency'),
    name: 'N-乙酰谷氨酸合成酶缺乏症',
    nameEn: 'N-acetylglutamate Synthase Deficiency',
    alias: 'NAGS缺乏症、NAGS deficiency',
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
  },
  {
    ...entity(5026, 'disease-neonatal-diabetes-mellitus'),
    name: '新生儿糖尿病',
    nameEn: 'Neonatal Diabetes Mellitus',
    alias: 'NDM、新生儿期糖尿病、6月龄内糖尿病',
    slug: 'neonatal-diabetes-mellitus',
    oneSentence:
      '新生儿糖尿病是指在生后6个月内发生的单基因糖尿病，分为暂时性和永久性两类，约50%由KCNJ11或ABCC8基因突变引起，其中多数患者可由胰岛素注射转为磺脲类口服药物治疗。',
    plainName: '出生后半年内就出现的一种特殊糖尿病',
    prevalence:
      '发病率约 1/90,000-1/260,000 活产儿；占新生儿期高血糖病因的重要部分。随着基因检测普及，越来越多的病例被准确分型。',
    searchIntents: [
      '新生儿糖尿病 症状',
      '新生儿糖尿病 基因',
      'KCNJ11 磺脲类药物',
      '暂时性新生儿糖尿病',
      '新生儿糖尿病 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1447/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3526,
      name: 'neonatal-diabetes-mellitus-journey.png',
      url: '/images/diseases/neonatal-diabetes-mellitus-journey.png',
    },
    tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric', 'treatable'],
  },
  {
    ...entity(5027, 'disease-neuromyelitis-optica'),
    name: '视神经脊髓炎',
    nameEn: 'Neuromyelitis Optica',
    alias: 'NMO、视神经脊髓炎谱系疾病、Devic病',
    slug: 'neuromyelitis-optica',
    oneSentence:
      '视神经脊髓炎谱系疾病（NMOSD）是一种自身免疫性中枢神经系统炎性脱髓鞘疾病，以抗水通道蛋白4抗体（AQP4-IgG）为标志，主要累及视神经和脊髓，表现为反复发作的视神经炎和长节段横贯性脊髓炎。',
    plainName: '免疫系统攻击视神经和脊髓导致反复失明和截瘫的罕见病',
    prevalence:
      '全球患病率约 0.5-4/100,000；亚洲和非洲人群相对多见，女性明显多于男性（约 4-9:1）。中国发病率逐年上升，随着AQP4抗体检测普及，误诊率逐步下降。',
    searchIntents: [
      '视神经脊髓炎 症状',
      'NMO 视神经炎',
      'AQP4抗体 阳性',
      '视神经脊髓炎 治疗药物',
      'NMOSD 与多发性硬化区别',
    ],
    sourceName: 'NCBI StatPearls',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK572108/',
    categorySlug: 'neurological',
    charityIds: [14, 15, 16, 17, 18, 59],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3527,
      name: 'neuromyelitis-optica-journey.png',
      url: '/images/diseases/neuromyelitis-optica-journey.png',
    },
    tagSlugs: ['neurological', 'autoimmune', 'treatable'],
  },
  {
    ...entity(5028, 'disease-niemann-pick-disease'),
    name: '尼曼匹克病',
    nameEn: 'Niemann-Pick Disease',
    alias: 'NPD、鞘磷脂贮积症、NPC',
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
  },
  {
    ...entity(5029, 'disease-non-syndromic-deafness'),
    name: '非综合征性耳聋',
    nameEn: 'Non-Syndromic Deafness',
    alias: '遗传性非综合征型耳聋、NSHL、先天性耳聋',
    slug: 'non-syndromic-deafness',
    oneSentence:
      '非综合征性耳聋是指不伴其他系统异常的遗传性听力损失，其中约50%由GJB2基因突变导致，是最常见的先天性耳聋病因，多数为常染色体隐性遗传，可通过新生儿听力筛查和基因检测早期诊断，人工耳蜗植入可显著改善重度聋患儿言语发育。',
    plainName: '只有听力不好、身体其他部分都正常的遗传性耳聋',
    prevalence:
      '全球新生儿先天性耳聋发生率约 1-3/1,000，其中约50-60%为遗传性，而遗传性耳聋中约70%为非综合征性。中国新生儿听力筛查覆盖率已超过90%，GJB2突变是最常见病因。',
    searchIntents: [
      '先天性耳聋 原因',
      'GJB2 基因突变 耳聋',
      '非综合征性耳聋 人工耳蜗',
      '新生儿听力筛查 没通过',
      '遗传性耳聋 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1434/',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3529,
      name: 'non-syndromic-deafness-journey.png',
      url: '/images/diseases/non-syndromic-deafness-journey.png',
    },
    tagSlugs: ['genetic-counseling', 'pediatric', 'treatable'],
  },
  {
    ...entity(5030, 'disease-noonan-syndrome'),
    name: 'Noonan综合征',
    nameEn: 'Noonan Syndrome',
    alias: 'NS、努南综合征、假特纳综合征',
    slug: 'noonan-syndrome',
    oneSentence:
      'Noonan综合征是一组常染色体显性遗传的RAS/MAPK通路病（RASopathy），以特征性面容、矮小身材、先天性心脏病（尤其肺动脉瓣狭窄）和不同程度的发育迟缓为特征，由PTPN11、SOS1、RAF1等基因突变导致。',
    plainName: '面容特殊、个子矮小、常伴有先天性心脏病的一种遗传病',
    prevalence:
      '发病率约 1/1,000-1/2,500 活产儿，是常见的单基因遗传综合征之一。无种族差异，男女均可发病。',
    searchIntents: [
      'Noonan综合征 面容特征',
      'Noonan综合征 心脏',
      'Noonan综合征 矮小 生长激素',
      'Noonan综合征 基因 PTPN11',
      'Noonan综合征 遗传咨询',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1124/',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3530,
      name: 'noonan-syndrome-journey.png',
      url: '/images/diseases/noonan-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling', 'pediatric', 'cardiac'],
  },
  {
    ...entity(5031, 'disease-ornithine-transcarbamylase-deficiency'),
    name: '鸟氨酸氨甲酰基转移酶缺乏症',
    nameEn: 'Ornithine Transcarbamylase Deficiency',
    alias: 'OTC缺乏症、OTC-D、鸟氨酸氨甲酰转移酶缺乏症',
    slug: 'ornithine-transcarbamylase-deficiency',
    oneSentence:
      '鸟氨酸氨甲酰基转移酶缺乏症是最常见的尿素循环障碍，为X连锁遗传病，因OTC基因突变导致血氨升高，表现为新生儿期呕吐、嗜睡、昏迷，或迟发型的高氨血症发作，需终身低蛋白饮食和降血氨药物治疗，肝移植可根治。',
    plainName: '身体无法安全处理蛋白质代谢废物、导致有毒血氨升高的罕见代谢病',
    prevalence:
      '发病率约 1/56,000-1/77,000 活产儿，是最常见的尿素循环障碍。男性因X连锁遗传通常病情严重；女性携带者可表现从无症状到重症不等的症状。',
    searchIntents: [
      'OTC缺乏症 症状',
      '尿素循环障碍 高氨血症',
      'OTC缺乏症 治疗 苯丁酸钠',
      '鸟氨酸氨甲酰转移酶 肝移植',
      'OTC缺乏症 新生儿筛查',
    ],
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
  },
  {
    ...entity(5032, 'disease-osteogenesis-imperfecta-brittle-bone-disease'),
    name: '成骨不全症（脆骨病）',
    nameEn: 'Osteogenesis Imperfecta',
    alias: 'OI、脆骨病、Lobstein综合征、Vrolik病',
    slug: 'osteogenesis-imperfecta-brittle-bone-disease',
    oneSentence:
      '成骨不全症是一组因I型胶原缺陷（主要为COL1A1和COL1A2基因突变）导致的遗传性结缔组织病，以骨骼脆弱易骨折、身材矮小、骨骼畸形、蓝巩膜、听力下降和牙齿异常为特征，治疗包括双膦酸盐、骨科手术和康复训练。',
    plainName: '骨头非常脆弱、轻微碰撞就会骨折的遗传病',
    prevalence:
      '患病率约 6-7/100,000；无种族差异。约35%病例为新发突变，无家族史。',
    searchIntents: [
      '成骨不全症 症状',
      '脆骨病 骨折',
      'OI 治疗 双膦酸盐',
      '成骨不全症 分型',
      'OI COL1A1 COL1A2 基因',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1295/',
    categorySlug: 'skeletal-connective-tissue',
    charityIds: [1, 2],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3532,
      name: 'osteogenesis-imperfecta-brittle-bone-disease-journey.png',
      url: '/images/diseases/osteogenesis-imperfecta-brittle-bone-disease-journey.png',
    },
    tagSlugs: ['skeletal', 'genetic-counseling', 'multidisciplinary'],
  },
  {
    ...entity(5033, 'disease-parkinson-disease-young-onset-early-onset'),
    name: '帕金森病（青年型、早发型）',
    nameEn: 'Parkinson Disease (Young-onset, Early-onset)',
    alias: '早发型帕金森病、YOPD、EOPD',
    slug: 'parkinson-disease-young-onset-early-onset',
    oneSentence:
      '早发型帕金森病是指在50岁之前发病的帕金森病，约10-20%有遗传因素，常见致病基因包括LRRK2、PARK2、PINK1和SNCA等，临床表现为运动迟缓、肌强直、静止性震颤和姿势平衡障碍，左旋多巴治疗反应良好但易出现运动并发症。',
    plainName: '年轻时就出现的"手抖、动作慢、身体僵硬"的神经退行病',
    prevalence:
      '帕金森病总体患病率约 1-2/1,000；早发型（<50岁）约占所有帕金森病的5-10%。中国帕金森病患者超过300万，早发型患者因诊断延迟，实际数字可能被低估。',
    searchIntents: [
      '早发型帕金森病 症状',
      '青年帕金森 遗传',
      'YOPD 左旋多巴',
      '帕金森病 运动并发症',
      '早发型帕金森 脑起搏器',
    ],
    sourceName: 'GeneReviews',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1223/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3533,
      name: 'parkinson-disease-young-onset-early-onset-journey.png',
      url: '/images/diseases/parkinson-disease-young-onset-early-onset-journey.png',
    },
    tagSlugs: ['neurological', 'genetic-counseling', 'treatable'],
  },
  {
    ...entity(5034, 'disease-paroxysmal-nocturnal-hemoglobinuria'),
    name: '阵发性睡眠性血红蛋白尿',
    nameEn: 'Paroxysmal Nocturnal Hemoglobinuria',
    alias: 'PNH、Marchiafava-Micheli综合征',
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
    sourceName: 'NCBI StatPearls',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK538475/',
    categorySlug: 'hematological',
    charityIds: [19],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 3534,
      name: 'paroxysmal-nocturnal-hemoglobinuria-journey.png',
      url: '/images/diseases/paroxysmal-nocturnal-hemoglobinuria-journey.png',
    },
    tagSlugs: ['hematologic', 'autoimmune', 'treatable'],
  },
  {
    ...entity(5035, 'disease-peutz-jeghers-syndrome'),
    name: '黑斑息肉综合征',
    nameEn: 'Peutz-Jeghers Syndrome',
    alias: 'PJS、Peutz-Jeghers综合征、色素沉着息肉综合征',
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
  },
  {
    ...entity(500, 'disease-phenylketonuria'),
    name: '苯丙酮尿症',
    nameEn: 'Phenylketonuria',
    alias: 'PKU、苯丙氨酸羟化酶缺乏症、PAH deficiency、高苯丙氨酸血症',
    slug: 'phenylketonuria',
    oneSentence:
      '苯丙酮尿症是一种常染色体隐性遗传的氨基酸代谢病，因苯丙氨酸羟化酶缺乏导致苯丙氨酸在体内蓄积，新生儿筛查可早期发现，终身低苯丙氨酸饮食是主要治疗手段。',
    plainName: '不能吃普通含蛋白质食物的遗传性代谢病',
    prevalence:
      '全球发病率约 1/10,000–24,000 活产儿，中国约 1/15,924；不同地区和种族差异较大，北欧、土耳其及中国部分地区发病率相对较高。',
    searchIntents: [
      '苯丙酮尿症 新生儿筛查',
      'PKU 饮食管理',
      '苯丙酮尿症 能治愈吗',
      'PKU 怀孕 注意事项',
      '苯丙酮尿症 特殊奶粉',
    ],
    sourceName: 'NCBI StatPearls: Phenylketonuria (PKU)',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK535378/',
    categorySlug: 'metabolic',
    charityIds: [45],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 500,
      name: 'phenylketonuria-journey.png',
      url: '/images/diseases/phenylketonuria-journey.png',
    },
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1091, 'catalog-china-first-rare-disease-catalog-91'),
    name: 'POEMS综合征',
    nameEn: 'POEMS Syndrome',
    alias: '第一批罕见病目录第 91 项；POEMS Syndrome',
    slug: 'poems-syndrome',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1092, 'catalog-china-first-rare-disease-catalog-92'),
    name: '卟啉病',
    nameEn: 'Porphyria',
    alias: '第一批罕见病目录第 92 项；Porphyria',
    slug: 'porphyria',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
      {
        name: '维基百科中文条目',
        url: 'https://zh.wikipedia.org/wiki/%E7%B4%AB%E8%B3%AA%E7%97%87',
        type: 'wikipedia-entry',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1093, 'catalog-china-first-rare-disease-catalog-93'),
    name: 'Prader-Willi综合征',
    nameEn: 'Prader-Willi Syndrome',
    alias: 'PWS、小胖威利综合征、普拉德-威利综合征、第一批罕见病目录第 93 项',
    slug: 'prader-willi-syndrome',
    oneSentence:
      'Prader-Willi综合征是一种通常与15号染色体父源表达区域异常有关的遗传性神经发育疾病，常表现为婴儿期肌张力低下、喂养困难，随后出现持续饥饿感、体重管理困难和发育行为问题。',
    plainName: '影响饥饿感、发育和行为调节的遗传综合征',
    prevalence:
      '已纳入国家第一批罕见病目录；国际资料常估计约每10,000-30,000人中1例。',
    quickLook: {
      whatItIs:
        'PWS不是简单“吃得多”或家庭管理问题，而是大脑下丘脑相关调节、内分泌和发育受到遗传印记异常影响。早期可能先表现为太软、吃奶困难，儿童期后逐渐出现难以控制的饥饿感，需要结构化饮食、运动、行为和内分泌随访。',
      whoToSeeFirst:
        '婴儿期可先看儿童神经科、儿童内分泌科或医学遗传科；已确诊后通常需要营养、康复、睡眠、心理行为和遗传咨询共同管理。',
      isGenetic:
        '多数病例与15q11-q13区域父源表达缺失、母源单亲二体或印记中心异常有关。复发风险因机制不同差异很大，确诊后建议带检测报告做遗传咨询。',
      hasTreatment:
        '目前管理重点是早期康复、营养和体重管理、睡眠呼吸评估、内分泌治疗评估以及行为支持。生长激素等治疗是否适合，需要由熟悉PWS的专科团队评估。',
      commonDelayReason:
        '婴儿期常被当作早产、喂养差或肌张力低；儿童期又容易被误解为单纯肥胖或管教问题，若没有把肌张力低、发育、饥饿感和内分泌线索合在一起看，就容易延迟诊断。',
    },
    patientJourney: {
      whenToSuspect: [
        '新生儿或婴儿明显软、哭声弱、吸吮差、吃奶时间长或需要管饲。',
        '幼儿期后食欲显著增加、很难有饱腹感，体重快速上升。',
        '身高增长慢、性发育延迟、手脚相对小，或医生提示生长激素/性腺轴问题。',
        '伴有发育迟缓、学习困难、强迫样行为、情绪爆发或睡眠呼吸问题。',
      ],
      commonWrongTurns: [
        '只按营养不良、早产后遗症或普通肥胖处理，没有做遗传检测。',
        '把进食冲动归因于意志力或家长管教，忽略生物学饥饿调节障碍。',
        '只控制饮食，没有同步评估睡眠呼吸、内分泌、骨密度和行为支持。',
      ],
      firstDepartments: [
        '儿童内分泌科',
        '医学遗传科',
        '儿童神经科',
        '康复医学科',
        '营养科',
      ],
      diagnosisChecklist: [
        '整理出生史、喂养史、体重身高曲线、发育里程碑和行为变化时间线。',
        '带上既往基因/甲基化检测、内分泌检查、睡眠监测和康复评估。',
        '记录每日进食管理、睡眠打鼾、白天困倦、便秘、皮肤抓挠和情绪行为问题。',
      ],
      testsToAskAbout: [
        'PWS相关DNA甲基化检测，必要时做染色体微阵列、UPD或印记中心分析。',
        '生长激素轴、甲状腺、肾上腺和性腺功能评估。',
        '睡眠呼吸监测、营养评估、骨龄/骨密度和脊柱侧弯评估。',
      ],
      questionsForDoctor: [
        '目前检测能区分是哪一种遗传机制吗？家族复发风险如何评估？',
        '体重管理、运动、学校配合和食物安全需要怎样制定家庭计划？',
        '是否需要评估生长激素治疗？开始前要筛查哪些风险？',
        '睡眠、行为和内分泌问题分别多久复查？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>PWS常以两个阶段被发现：婴儿期肌张力低、吸吮差、喂养困难、体重增长慢；进入幼儿或儿童期后，饥饿感增强、体重快速增加，可能伴身材矮小、性发育延迟、手脚较小、斜视、睡眠呼吸问题和便秘。</p><p>部分孩子还会有发育迟缓、学习困难、固执或强迫样行为、情绪爆发、皮肤抓挠等表现。不同家庭的突出问题不同，需要把营养、内分泌、康复和行为支持放在同一个计划里。</p>',
      diagnosis:
        '<p>诊断以分子检测为核心。PWS相关甲基化检测通常用于确认15q11-q13区域父源表达异常；随后可进一步区分缺失、母源单亲二体或印记中心异常，以便评估复发风险和遗传咨询。</p><p>确诊后还需要系统评估身高体重、内分泌、睡眠呼吸、吞咽喂养、运动发育、脊柱和心理行为。不要只把诊断停留在“肥胖”或“发育迟缓”。</p>',
      treatment:
        '<p>治疗目标是降低体重和代谢并发症风险、支持发育并改善家庭生活。常见措施包括早期喂养和康复、结构化饮食环境、规律运动、睡眠呼吸处理、便秘和皮肤问题管理、心理行为支持以及学校适配。</p><p>生长激素、性激素替代或其他内分泌治疗需由专科医生评估适应证、禁忌证和监测方案。家庭不要自行使用减肥药、极端节食或未经验证的疗法。</p>',
      longTermCare:
        '<p>PWS需要跨年龄段管理。儿童期重点是生长、运动、语言、学习和行为；青少年和成人阶段要继续关注体重、糖脂代谢、睡眠、骨骼、心理健康、独立生活能力和照护安排。</p><p>建议家庭准备一份简短照护计划，写明诊断机制、食物环境管理原则、急诊注意事项、常用药和主要随访医生，便于学校、社区和急诊团队理解。</p>',
      fertilityOrFamily:
        '<p>PWS多数为新发事件，但不同遗传机制对应的复发风险不同。父母再次生育、患者成年后的生育咨询，都应基于具体分子诊断结果进行遗传咨询。</p>',
      emergencySigns:
        '<p>出现持续嗜睡、呼吸暂停或发绀、严重呕吐或腹胀、急性意识改变、高热后状态变差、疑似窒息或快速进展的行为/精神症状，应尽快就医。PWS患者疼痛表达可能不典型，腹部急症不要仅凭疼痛轻重判断。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Prader-Willi syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/prader-willi-syndrome/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>常见线索包括婴儿期肌张力低和喂养困难，随后出现持续饥饿感、体重管理困难、身材矮小、性发育延迟、发育行为问题和睡眠呼吸问题。</p>',
    diagnosis:
      '<p>诊断主要依靠PWS相关DNA甲基化检测，并进一步明确缺失、母源单亲二体或印记异常等机制。</p>',
    treatment:
      '<p>管理包括营养和体重计划、康复、睡眠呼吸和内分泌评估、行为支持；生长激素等治疗需专科评估。</p>',
    prognosis:
      '<p>早期诊断和结构化支持可明显改善发育、体重和家庭生活质量，但仍需长期跨学科随访。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [63],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1094, 'catalog-china-first-rare-disease-catalog-94'),
    name: '原发性联合免疫缺陷',
    nameEn: 'Primary Combined Immune Deficiency',
    alias: '第一批罕见病目录第 94 项；Primary Combined Immune Deficiency',
    slug: 'primary-combined-immune-deficiency',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1095, 'catalog-china-first-rare-disease-catalog-95'),
    name: '原发性遗传性肌张力不全',
    nameEn: 'Primary Hereditary Dystonia',
    alias: '第一批罕见病目录第 95 项；Primary Hereditary Dystonia',
    slug: 'primary-hereditary-dystonia',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1096, 'catalog-china-first-rare-disease-catalog-96'),
    name: '原发性轻链型淀粉样变',
    nameEn: 'Primary Light Chain Amyloidosis',
    alias: '第一批罕见病目录第 96 项；Primary Light Chain Amyloidosis',
    slug: 'primary-light-chain-amyloidosis',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1097, 'catalog-china-first-rare-disease-catalog-97'),
    name: '进行性家族性肝内胆汁淤积症',
    nameEn: 'Progressive Familial Intrahepatic Cholestasis',
    alias:
      '第一批罕见病目录第 97 项；Progressive Familial Intrahepatic Cholestasis',
    slug: 'progressive-familial-intrahepatic-cholestasis',
    categorySlug: 'digestive-hepatic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1098, 'catalog-china-first-rare-disease-catalog-98'),
    name: '进行性肌营养不良',
    nameEn: 'Progressive Muscular Dystrophy',
    alias: '肌营养不良、DMD/BMD相关肌营养不良、第一批罕见病目录第 98 项',
    slug: 'progressive-muscular-dystrophy',
    oneSentence:
      '进行性肌营养不良是一组以肌肉逐渐无力和萎缩为主要表现的遗传性肌病，Duchenne/Becker型常与DMD基因异常有关，并需要持续关注运动、心脏和呼吸功能。',
    plainName: '以进行性肌无力为主、需要心肺骨骼长期管理的一组肌病',
    prevalence:
      '已纳入国家第一批罕见病目录；其中Duchenne型多见于男孩，国际资料常估计约每3,500-5,000名男性新生儿1例。',
    quickLook: {
      whatItIs:
        '这个目录名是一组疾病，不等同于单一分型。患者可能先表现为走路晚、跑跳差、频繁摔倒、爬楼困难或小腿假性肥大，随后需要围绕康复、心肺、骨骼和遗传诊断制定长期计划。',
      whoToSeeFirst:
        '儿童建议先看儿童神经科或神经肌肉专病门诊；同时需要康复、心内、呼吸、骨科、营养和遗传咨询参与。',
      isGenetic:
        'DMD/BMD多为X连锁遗传，其他肌营养不良分型遗传方式不同。明确基因和变异类型对治疗选择、家族筛查和生育咨询很重要。',
      hasTreatment:
        '治疗包括规范康复、牵伸和辅具，心脏和呼吸监测，营养骨骼管理，以及按分型评估糖皮质激素、基因相关治疗或临床研究可及性。',
      commonDelayReason:
        '早期常被认为是缺钙、懒动或发育慢；转氨酶升高也可能先被误认为肝病。肌酸激酶和基因检测常是关键转折。',
    },
    patientJourney: {
      whenToSuspect: [
        '男孩走路晚、跑跳差、经常摔倒、上楼困难或Gowers征。',
        '小腿明显粗大但力量下降，肌酸激酶显著升高。',
        '不明原因转氨酶升高，同时有运动发育落后。',
        '家族中有男性早发肌无力、轮椅使用或心肌病。',
      ],
      commonWrongTurns: [
        '只补钙或做普通康复，没有查CK和神经肌肉病因。',
        '把转氨酶高当肝病长期检查，未想到肌源性升高。',
        '确诊后只关注走路，忽视心肌病、呼吸和骨骼并发症。',
      ],
      firstDepartments: [
        '儿童神经科',
        '神经内科',
        '康复医学科',
        '心内科',
        '呼吸科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '整理运动里程碑、摔倒频率、爬楼起立视频、CK和肝酶结果。',
        '带上肌电图、肌肉MRI/活检、基因检测、心电图/心超和肺功能结果。',
        '记录家族男性成员肌无力、早逝或心肌病情况。',
      ],
      testsToAskAbout: [
        '肌酸激酶、肌电图和肌肉影像。',
        'DMD基因缺失重复/测序，必要时扩大肌病基因检测。',
        '心电图、心脏超声/心脏MRI和肺功能。',
        '骨密度、脊柱侧弯和关节挛缩评估。',
      ],
      questionsForDoctor: [
        '目前更像哪一种肌营养不良？变异类型是否明确？',
        '是否适合分型相关药物、激素或临床研究？',
        '心脏和呼吸从什么时候开始定期监测？',
        '母亲和女性亲属是否需要携带者检测？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>这个目录名是一组疾病，不等同于单一分型。患者可能先表现为走路晚、跑跳差、频繁摔倒、爬楼困难或小腿假性肥大，随后需要围绕康复、心肺、骨骼和遗传诊断制定长期计划。</p><p>需要警惕的线索包括：男孩走路晚、跑跳差、经常摔倒、上楼困难或Gowers征；小腿明显粗大但力量下降，肌酸激酶显著升高；不明原因转氨酶升高，同时有运动发育落后；家族中有男性早发肌无力、轮椅使用或心肌病。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：肌酸激酶、肌电图和肌肉影像；DMD基因缺失重复/测序，必要时扩大肌病基因检测；心电图、心脏超声/心脏MRI和肺功能；骨密度、脊柱侧弯和关节挛缩评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>治疗包括规范康复、牵伸和辅具，心脏和呼吸监测，营养骨骼管理，以及按分型评估糖皮质激素、基因相关治疗或临床研究可及性。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>DMD/BMD多为X连锁遗传，其他肌营养不良分型遗传方式不同。明确基因和变异类型对治疗选择、家族筛查和生育咨询很重要。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Duchenne and Becker muscular dystrophy',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/duchenne-and-becker-muscular-dystrophy/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>进行性肌营养不良是一组以肌肉逐渐无力和萎缩为主要表现的遗传性肌病，Duchenne/Becker型常与DMD基因异常有关，并需要持续关注运动、心脏和呼吸功能；常见线索包括男孩走路晚、跑跳差、经常摔倒、上楼困难或Gowers征。、小腿明显粗大但力量下降，肌酸激酶显著升高等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>治疗包括规范康复、牵伸和辅具，心脏和呼吸监测，营养骨骼管理，以及按分型评估糖皮质激素、基因相关治疗或临床研究可及性。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [66, 67, 68, 69, 70, 71, 80],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1099, 'catalog-china-first-rare-disease-catalog-99'),
    name: '丙酸血症',
    nameEn: 'Propionic Acidemia',
    alias: '第一批罕见病目录第 99 项；Propionic Acidemia',
    slug: 'propionic-acidemia',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1100, 'catalog-china-first-rare-disease-catalog-100'),
    name: '肺泡蛋白沉积症',
    nameEn: 'Pulmonary Alveolar Proteinosis',
    alias: '第一批罕见病目录第 100 项；Pulmonary Alveolar Proteinosis',
    slug: 'pulmonary-alveolar-proteinosis',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
      {
        name: '维基百科中文条目',
        url: 'https://zh.wikipedia.org/wiki/%E8%82%BA%E6%B3%A1%E8%9B%8B%E7%99%BD%E6%B2%89%E7%9D%80%E7%97%87',
        type: 'wikipedia-entry',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1101, 'catalog-china-first-rare-disease-catalog-101'),
    name: '肺囊性纤维化',
    nameEn: 'Pulmonary Cystic Fibrosis',
    alias: '第一批罕见病目录第 101 项；Pulmonary Cystic Fibrosis',
    slug: 'pulmonary-cystic-fibrosis',
    categorySlug: 'respiratory',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1102, 'catalog-china-first-rare-disease-catalog-102'),
    name: '视网膜色素变性',
    nameEn: 'Retinitis Pigmentosa',
    alias: 'RP、第一批罕见病目录第 102 项',
    slug: 'retinitis-pigmentosa',
    oneSentence:
      '视网膜色素变性是一组遗传性视网膜退行性疾病，通常先出现夜盲和周边视野缩小，之后可能逐步影响中心视力。',
    plainName: '先影响夜间和周边视野的遗传性视网膜退行性疾病',
    prevalence:
      '已纳入国家第一批罕见病目录；国际资料常估计约每3,500-4,000人中1例。',
    quickLook: {
      whatItIs:
        'RP不是普通近视或用眼疲劳。患者常先在暗处看不清、夜间行动困难、容易撞到侧边物体，眼底、视野、ERG和基因检测能帮助明确诊断。',
      whoToSeeFirst:
        '建议先看眼底病/遗传性视网膜病专科；确诊后需要低视力康复、遗传咨询和并发白内障/黄斑水肿等管理。',
      isGenetic:
        'RP遗传方式多样，可常染色体显性、隐性或X连锁，也可作为综合征的一部分。基因检测对预后、家族筛查和治疗机会判断有帮助。',
      hasTreatment:
        '多数类型目前以随访、低视力支持、并发症处理和遗传咨询为主。少数特定基因相关疾病已有或正在研究靶向治疗，应由专科医生评估。',
      commonDelayReason:
        '早期视力表可能还不错，夜盲和视野缩小容易被忽略，直到出行受影响才就诊。',
    },
    patientJourney: {
      whenToSuspect: [
        '夜间或暗处看不清，进出明暗环境适应很慢。',
        '走路容易撞到侧边物体，视野像逐渐变窄。',
        '家族中多人夜盲、视野缩小或年轻时视力下降。',
        '眼底提示骨细胞样色素、视网膜血管变细或视神经蜡黄。',
      ],
      commonWrongTurns: [
        '只按近视、散光或干眼处理，没有做视野和眼底电生理。',
        '视力表尚可就认为没问题，忽略周边视野和夜视功能。',
        '没有区分非综合征RP和可能合并听力、肾脏或神经问题的综合征。',
      ],
      firstDepartments: ['眼科', '眼底病专科', '医学遗传科', '低视力康复门诊'],
      diagnosisChecklist: [
        '记录夜盲、视野缩小、读写和出行困难的起始时间。',
        '带上眼底照片、OCT、视野、ERG、基因检测和家族眼病史。',
        '记录是否有听力下降、平衡问题、肾脏或神经症状。',
      ],
      testsToAskAbout: [
        '散瞳眼底检查、OCT、自发荧光、视野和ERG。',
        '遗传性视网膜病基因检测。',
        '按症状评估听力、肾脏或其他综合征线索。',
      ],
      questionsForDoctor: [
        '是否符合RP？是否可能是综合征型视网膜病？',
        '建议做哪类基因检测，结果会如何影响随访和家族筛查？',
        '是否有黄斑水肿、白内障等可处理问题？',
        '低视力辅助和出行训练可以从哪里开始？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>RP不是普通近视或用眼疲劳。患者常先在暗处看不清、夜间行动困难、容易撞到侧边物体，眼底、视野、ERG和基因检测能帮助明确诊断。</p><p>需要警惕的线索包括：夜间或暗处看不清，进出明暗环境适应很慢；走路容易撞到侧边物体，视野像逐渐变窄；家族中多人夜盲、视野缩小或年轻时视力下降；眼底提示骨细胞样色素、视网膜血管变细或视神经蜡黄。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：散瞳眼底检查、OCT、自发荧光、视野和ERG；遗传性视网膜病基因检测；按症状评估听力、肾脏或其他综合征线索。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>多数类型目前以随访、低视力支持、并发症处理和遗传咨询为主。少数特定基因相关疾病已有或正在研究靶向治疗，应由专科医生评估。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>RP遗传方式多样，可常染色体显性、隐性或X连锁，也可作为综合征的一部分。基因检测对预后、家族筛查和治疗机会判断有帮助。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Retinitis pigmentosa',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/retinitis-pigmentosa/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>视网膜色素变性是一组遗传性视网膜退行性疾病，通常先出现夜盲和周边视野缩小，之后可能逐步影响中心视力；常见线索包括夜间或暗处看不清，进出明暗环境适应很慢。、走路容易撞到侧边物体，视野像逐渐变窄等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>多数类型目前以随访、低视力支持、并发症处理和遗传咨询为主。少数特定基因相关疾病已有或正在研究靶向治疗，应由专科医生评估。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'ophthalmologic',
    charityIds: [74],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1103, 'catalog-china-first-rare-disease-catalog-103'),
    name: '视网膜母细胞瘤',
    nameEn: 'Retinoblastoma',
    alias: 'RB、第一批罕见病目录第 103 项',
    slug: 'retinoblastoma',
    oneSentence:
      '视网膜母细胞瘤是儿童最常见的眼内恶性肿瘤，常与RB1基因改变有关，白瞳、斜视或视力异常需要尽快由眼肿瘤团队评估。',
    plainName: '儿童眼内恶性肿瘤，白瞳和斜视是重要警讯',
    prevalence:
      '已纳入国家第一批罕见病目录；国际资料常估计约每15,000-20,000名新生儿1例。',
    quickLook: {
      whatItIs:
        'RB不是普通拍照反光。白瞳、猫眼样反光、斜视、眼红痛或眼球突出都可能是警讯；越早规范治疗，越有机会兼顾生命安全、眼球保留和视功能。',
      whoToSeeFirst:
        '应尽快看儿童眼底病/眼肿瘤专科或儿童肿瘤团队；疑似时不要长时间观察或自行用眼药。',
      isGenetic:
        'RB可由体细胞或胚系RB1变异导致。双眼、多灶、早发或有家族史时更需遗传咨询；单眼病例也可能存在胚系风险。',
      hasTreatment:
        '治疗按分期、单眼/双眼和扩散风险决定，包括局部治疗、化疗、动脉介入、冷冻/激光、放疗或摘除眼球等。目标首先是保命，其次尽量保眼和保视力。',
      commonDelayReason:
        '白瞳可能被误认为拍照角度问题，斜视被当普通斜视；延误会增加眼外扩散风险。',
    },
    patientJourney: {
      whenToSuspect: [
        '照片中瞳孔反复发白或呈猫眼样反光。',
        '婴幼儿突然或持续斜视、眼球震颤、视物异常。',
        '眼红、眼痛、眼球突出或瞳孔异常。',
        '家族中有人患RB或儿童期眼内肿瘤。',
      ],
      commonWrongTurns: [
        '把白瞳当闪光灯反光，没有尽快散瞳眼底检查。',
        '只按斜视配镜或弱视训练处理，未排除眼底肿瘤。',
        '未做遗传咨询，忽略同胞或未来子女风险。',
      ],
      firstDepartments: [
        '眼科急诊',
        '儿童眼底病/眼肿瘤专科',
        '儿童肿瘤科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '准备出现白瞳或斜视的照片、起始时间和变化。',
        '带上眼底检查、眼部超声、MRI、治疗记录和家族肿瘤史。',
        '记录是否双眼受累、是否曾有眼红痛或全身症状。',
      ],
      testsToAskAbout: [
        '散瞳眼底检查和眼底照相。',
        '眼部超声、MRI等影像评估，避免不必要穿刺。',
        'RB1基因检测和家系遗传咨询。',
      ],
      questionsForDoctor: [
        '目前分期和扩散风险如何？治疗目标和顺序是什么？',
        '能否保眼、保视力？如果不能，摘除眼球的时机和后续支持是什么？',
        '是否需要RB1检测？兄弟姐妹怎样筛查？',
        '治疗后多久随访，需警惕哪些第二肿瘤或复发信号？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>RB不是普通拍照反光。白瞳、猫眼样反光、斜视、眼红痛或眼球突出都可能是警讯；越早规范治疗，越有机会兼顾生命安全、眼球保留和视功能。</p><p>需要警惕的线索包括：照片中瞳孔反复发白或呈猫眼样反光；婴幼儿突然或持续斜视、眼球震颤、视物异常；眼红、眼痛、眼球突出或瞳孔异常；家族中有人患RB或儿童期眼内肿瘤。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：散瞳眼底检查和眼底照相；眼部超声、MRI等影像评估，避免不必要穿刺；RB1基因检测和家系遗传咨询。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>治疗按分期、单眼/双眼和扩散风险决定，包括局部治疗、化疗、动脉介入、冷冻/激光、放疗或摘除眼球等。目标首先是保命，其次尽量保眼和保视力。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>RB可由体细胞或胚系RB1变异导致。双眼、多灶、早发或有家族史时更需遗传咨询；单眼病例也可能存在胚系风险。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Retinoblastoma',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/retinoblastoma/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>视网膜母细胞瘤是儿童最常见的眼内恶性肿瘤，常与RB1基因改变有关，白瞳、斜视或视力异常需要尽快由眼肿瘤团队评估；常见线索包括照片中瞳孔反复发白或呈猫眼样反光。、婴幼儿突然或持续斜视、眼球震颤、视物异常等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>治疗按分期、单眼/双眼和扩散风险决定，包括局部治疗、化疗、动脉介入、冷冻/激光、放疗或摘除眼球等。目标首先是保命，其次尽量保眼和保视力。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'oncology',
    charityIds: [75],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1104, 'catalog-china-first-rare-disease-catalog-104'),
    name: '重症先天性粒细胞缺乏症',
    nameEn: 'Severe Congenital Neutropenia',
    alias: '第一批罕见病目录第 104 项；Severe Congenital Neutropenia',
    slug: 'severe-congenital-neutropenia',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1105, 'catalog-china-first-rare-disease-catalog-105'),
    name: '婴儿严重肌阵挛性癫痫(Dravet综合征)',
    nameEn: 'Severe Myoclonic Epilepsy in Infancy (Dravet Syndrome)',
    alias: 'Dravet综合征、SMEI、第一批罕见病目录第 105 项',
    slug: 'severe-myoclonic-epilepsy-in-infancy-dravet-syndrome',
    oneSentence:
      'Dravet综合征是一种婴幼儿期起病的发育性癫痫性脑病，常与SCN1A基因变异有关，发热、热水、疫苗后发热或环境升温都可能诱发长时间癫痫发作。',
    plainName: '婴幼儿早期起病、常由发热诱发的遗传性癫痫综合征',
    prevalence:
      '已纳入国家第一批罕见病目录；不同研究估计差异较大，卓蔚宝贝支持中心OCR资料提到约1/15,700-1/40,900。',
    quickLook: {
      whatItIs:
        'Dravet不是普通热性惊厥。孩子早期发育可能看似正常，但一岁内出现反复、长时间、偏侧或多类型惊厥后，应尽快评估癫痫综合征和基因原因。',
      whoToSeeFirst:
        '首选儿童神经科或癫痫专病门诊；需要急救方案、发热管理、发育康复、睡眠和学校照护共同支持。',
      isGenetic:
        '许多患者与SCN1A新发变异有关，也可能涉及其他基因。明确基因有助于用药选择和家族咨询。',
      hasTreatment:
        '治疗重点是减少发作、避免诱因和准备急救药物。部分钠通道阻滞剂可能加重Dravet，具体用药必须由癫痫专科医生决定。',
      commonDelayReason:
        '早期常被当作普通热性惊厥；如果没有注意长时间、反复、偏侧、无热发作或发育变化，诊断会延迟。',
    },
    patientJourney: {
      whenToSuspect: [
        '一岁以内因发热或热水诱发长时间惊厥。',
        '惊厥可偏侧或交替，之后出现多种类型发作。',
        '发作后恢复慢，或发育、语言、步态逐渐落后。',
        '常规热性惊厥解释不了发作频率、持续时间或诱因。',
      ],
      commonWrongTurns: [
        '长期按普通热性惊厥处理，没有做癫痫综合征评估。',
        '未建立家庭急救方案，长时间发作处理延误。',
        '未向医生确认哪些抗癫痫药可能不适合Dravet。',
      ],
      firstDepartments: [
        '儿童神经科',
        '癫痫专病门诊',
        '急诊科',
        '康复医学科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '保存发作视频，记录年龄、体温、诱因、持续时间、偏侧性和恢复情况。',
        '带上脑电图、头颅MRI、基因检测和既往用药反应。',
        '列出发热、疫苗、洗澡、光刺激和睡眠不足等诱因。',
      ],
      testsToAskAbout: [
        '脑电图和癫痫综合征评估。',
        'SCN1A及癫痫基因检测。',
        '发育、语言、运动和行为评估。',
      ],
      questionsForDoctor: [
        '这些发作是否符合Dravet？是否需要SCN1A检测？',
        '家庭急救药物什么时候用、如何用、何时叫急救？',
        '哪些药物和诱因需要避免？',
        '疫苗、发热和洗澡如何制定安全计划？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>Dravet不是普通热性惊厥。孩子早期发育可能看似正常，但一岁内出现反复、长时间、偏侧或多类型惊厥后，应尽快评估癫痫综合征和基因原因。</p><p>需要警惕的线索包括：一岁以内因发热或热水诱发长时间惊厥；惊厥可偏侧或交替，之后出现多种类型发作；发作后恢复慢，或发育、语言、步态逐渐落后；常规热性惊厥解释不了发作频率、持续时间或诱因。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：脑电图和癫痫综合征评估；SCN1A及癫痫基因检测；发育、语言、运动和行为评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>治疗重点是减少发作、避免诱因和准备急救药物。部分钠通道阻滞剂可能加重Dravet，具体用药必须由癫痫专科医生决定。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>许多患者与SCN1A新发变异有关，也可能涉及其他基因。明确基因有助于用药选择和家族咨询。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'GARD: Dravet syndrome',
        type: 'official',
        url: 'https://rarediseases.info.nih.gov/diseases/10430/dravet-syndrome',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>Dravet综合征是一种婴幼儿期起病的发育性癫痫性脑病，常与SCN1A基因变异有关，发热、热水、疫苗后发热或环境升温都可能诱发长时间癫痫发作；常见线索包括一岁以内因发热或热水诱发长时间惊厥。、惊厥可偏侧或交替，之后出现多种类型发作等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>治疗重点是减少发作、避免诱因和准备急救药物。部分钠通道阻滞剂可能加重Dravet，具体用药必须由癫痫专科医生决定。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [72, 73],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1106, 'catalog-china-first-rare-disease-catalog-106'),
    name: '镰刀型细胞贫血病',
    nameEn: 'Sickle Cell Disease',
    alias: '第一批罕见病目录第 106 项；Sickle Cell Disease',
    slug: 'sickle-cell-disease',
    categorySlug: 'hematological',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
      {
        name: '维基百科中文条目',
        url: 'https://zh.wikipedia.org/wiki/%E9%90%AE%E5%88%80%E5%9E%8B%E7%B4%85%E8%A1%80%E7%90%83%E7%96%BE%E7%97%85',
        type: 'wikipedia-entry',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1107, 'catalog-china-first-rare-disease-catalog-107'),
    name: 'Silver-Russell综合征',
    nameEn: 'Silver-Russell Syndrome',
    alias: '第一批罕见病目录第 107 项；Silver-Russell Syndrome',
    slug: 'silver-russell-syndrome',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1108, 'catalog-china-first-rare-disease-catalog-108'),
    name: '谷固醇血症',
    nameEn: 'Sitosterolemia',
    alias: '第一批罕见病目录第 108 项；Sitosterolemia',
    slug: 'sitosterolemia',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1109, 'catalog-china-first-rare-disease-catalog-109'),
    name: '脊髓延髓肌萎缩症（肯尼迪病）',
    nameEn: 'Spinal and Bulbar Muscular Atrophy (Kennedy Disease)',
    alias: 'SBMA、Kennedy病、第一批罕见病目录第 109 项',
    slug: 'spinal-and-bulbar-muscular-atrophy-kennedy-disease',
    oneSentence:
      '脊髓延髓肌萎缩症（肯尼迪病）是一种由AR基因CAG重复扩增导致的X连锁神经肌肉病，常见成年男性逐渐出现肢体无力、肌束颤动、吞咽或构音困难，并可伴内分泌表现。',
    plainName: '成年男性多见、影响肢体和吞咽说话肌肉的X连锁神经肌肉病',
    prevalence:
      '已纳入国家第一批罕见病目录；患者组织OCR资料提到约1-2/10万人，具体人群估计可能不同。',
    quickLook: {
      whatItIs:
        '肯尼迪病进展通常较慢，容易被误认为运动神经元病、普通肌病或内分泌问题。与ALS不同，它常伴雄激素不敏感相关表现，如男性乳房发育、不育或睾丸萎缩。',
      whoToSeeFirst:
        '建议看神经肌肉专病门诊或神经内科，同时根据需要评估康复、吞咽营养、呼吸、内分泌和遗传咨询。',
      isGenetic:
        '本病为X连锁遗传，与AR基因CAG重复扩增有关。男性多发病，女性携带者通常症状轻或无症状，但家族生育需遗传咨询。',
      hasTreatment:
        '目前以支持治疗为主，包括康复、预防跌倒、吞咽和营养管理、呼吸评估、内分泌问题处理和遗传咨询。',
      commonDelayReason:
        '肌无力、手抖、肌束颤动和乳房发育可能分散就诊；如果未做AR基因检测，常与ALS或其他肌病混淆。',
    },
    patientJourney: {
      whenToSuspect: [
        '成年男性逐渐出现四肢近端无力、易跌倒、爬楼困难。',
        '舌肌或面肌颤动、说话含糊、吞咽呛咳。',
        '肌束颤动、手抖，同时伴男性乳房发育、不育或睾丸萎缩。',
        '家族中男性有类似缓慢进展肌无力。',
      ],
      commonWrongTurns: [
        '被误诊为ALS后产生过度恐慌，未做AR基因检测确认。',
        '只看内分泌或乳腺问题，没有追踪神经肌肉症状。',
        '忽视吞咽呛咳、跌倒和呼吸睡眠问题。',
      ],
      firstDepartments: [
        '神经内科',
        '神经肌肉专病门诊',
        '康复医学科',
        '内分泌科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '整理肌无力、跌倒、吞咽、说话和肌束颤动进展时间线。',
        '带上肌电图、CK、激素检查、家族史和既往诊断。',
        '记录呛咳、体重下降、睡眠呼吸和日常功能变化。',
      ],
      testsToAskAbout: [
        'AR基因CAG重复扩增检测。',
        '肌电图、神经传导、CK和内分泌评估。',
        '吞咽、营养、呼吸功能和康复评估。',
      ],
      questionsForDoctor: [
        '症状是否符合SBMA？如何与ALS和其他肌病区分？',
        'AR基因结果对家族成员意味着什么？',
        '吞咽、跌倒和呼吸风险怎样监测？',
        '运动训练强度和辅具如何选择？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>肯尼迪病进展通常较慢，容易被误认为运动神经元病、普通肌病或内分泌问题。与ALS不同，它常伴雄激素不敏感相关表现，如男性乳房发育、不育或睾丸萎缩。</p><p>需要警惕的线索包括：成年男性逐渐出现四肢近端无力、易跌倒、爬楼困难；舌肌或面肌颤动、说话含糊、吞咽呛咳；肌束颤动、手抖，同时伴男性乳房发育、不育或睾丸萎缩；家族中男性有类似缓慢进展肌无力。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：AR基因CAG重复扩增检测；肌电图、神经传导、CK和内分泌评估；吞咽、营养、呼吸功能和康复评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>目前以支持治疗为主，包括康复、预防跌倒、吞咽和营养管理、呼吸评估、内分泌问题处理和遗传咨询。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>本病为X连锁遗传，与AR基因CAG重复扩增有关。男性多发病，女性携带者通常症状轻或无症状，但家族生育需遗传咨询。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: "NINDS: Kennedy's Disease",
        type: 'official',
        url: 'https://www.ninds.nih.gov/health-information/disorders/kennedys-disease',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>脊髓延髓肌萎缩症（肯尼迪病）是一种由AR基因CAG重复扩增导致的X连锁神经肌肉病，常见成年男性逐渐出现肢体无力、肌束颤动、吞咽或构音困难，并可伴内分泌表现；常见线索包括成年男性逐渐出现四肢近端无力、易跌倒、爬楼困难。、舌肌或面肌颤动、说话含糊、吞咽呛咳等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>目前以支持治疗为主，包括康复、预防跌倒、吞咽和营养管理、呼吸评估、内分泌问题处理和遗传咨询。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [76],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1110, 'catalog-china-first-rare-disease-catalog-110'),
    name: '脊髓性肌萎缩症',
    nameEn: 'Spinal Muscular Atrophy',
    alias: 'SMA、第一批罕见病目录第 110 项',
    slug: 'spinal-muscular-atrophy',
    oneSentence:
      '脊髓性肌萎缩症是一组多由SMN1基因异常导致的遗传性神经肌肉病，运动神经元受损后可出现进行性肌无力、运动发育受限、吞咽或呼吸问题。',
    plainName: '影响运动神经元、导致肌无力和运动发育受限的遗传病',
    prevalence:
      '已纳入国家第一批罕见病目录；国际资料常估计约每6,000-10,000名新生儿1例。',
    quickLook: {
      whatItIs:
        'SMA不是普通“没力气”或缺钙，而是运动神经元供应肌肉的信号不足。不同分型起病年龄和严重程度不同，越早发现越能尽早评估疾病修饰治疗、呼吸营养和康复支持。',
      whoToSeeFirst:
        '婴幼儿可先看儿童神经科或儿童康复科；疑似或确诊后需要神经肌肉专病团队、呼吸、营养、康复、骨科和遗传咨询共同管理。',
      isGenetic:
        '多数SMA为常染色体隐性遗传，与SMN1双等位异常有关，SMN2拷贝数会影响但不能完全决定严重程度。父母和计划生育家庭建议做携带者咨询。',
      hasTreatment:
        '目前已有疾病修饰治疗可选择，但疗效与起病、分型、治疗时机和可及性有关。照护还包括呼吸支持、营养吞咽、康复、脊柱和关节管理。',
      commonDelayReason:
        '早期常被当成发育慢、早产后肌张力低或普通肌病。若没有及时做SMN1检测，可能错过早期治疗窗口。',
    },
    patientJourney: {
      whenToSuspect: [
        '婴儿明显软、抬头差、翻身坐立落后，哭声或咳嗽弱。',
        '近端肌无力明显，腿部无力比手部更突出，腱反射减弱。',
        '喂养费力、吞咽呛咳、反复呼吸道感染或夜间通气不足。',
        '家族中有SMA、婴儿期不明原因肌无力或携带者筛查阳性。',
      ],
      commonWrongTurns: [
        '按缺钙、发育慢观察太久，没有做基因检测。',
        '只做康复训练，忽略呼吸、营养和疾病修饰治疗评估。',
        '以为能坐能走就不需要长期随访，忽视脊柱、关节和呼吸变化。',
      ],
      firstDepartments: [
        '儿童神经科',
        '神经内科',
        '康复医学科',
        '呼吸科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '整理运动里程碑、肌力变化、吞咽喂养、呼吸感染和睡眠情况。',
        '带上基因检测、肌电图、肺功能/睡眠监测、脊柱影像和用药记录。',
        '记录是否已接受疾病修饰治疗以及治疗时间点。',
      ],
      testsToAskAbout: [
        'SMN1缺失/变异检测及SMN2拷贝数评估。',
        '呼吸功能、睡眠通气、吞咽和营养评估。',
        '康复、关节挛缩、脊柱侧弯和骨密度评估。',
      ],
      questionsForDoctor: [
        '是否符合SMA分型？还需要排除哪些神经肌肉病？',
        '是否适合疾病修饰治疗？治疗前后怎样监测？',
        '呼吸、营养和康复计划应如何安排？',
        '父母和兄弟姐妹是否需要携带者检测？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>SMA不是普通“没力气”或缺钙，而是运动神经元供应肌肉的信号不足。不同分型起病年龄和严重程度不同，越早发现越能尽早评估疾病修饰治疗、呼吸营养和康复支持。</p><p>需要警惕的线索包括：婴儿明显软、抬头差、翻身坐立落后，哭声或咳嗽弱；近端肌无力明显，腿部无力比手部更突出，腱反射减弱；喂养费力、吞咽呛咳、反复呼吸道感染或夜间通气不足；家族中有SMA、婴儿期不明原因肌无力或携带者筛查阳性。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：SMN1缺失/变异检测及SMN2拷贝数评估；呼吸功能、睡眠通气、吞咽和营养评估；康复、关节挛缩、脊柱侧弯和骨密度评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>目前已有疾病修饰治疗可选择，但疗效与起病、分型、治疗时机和可及性有关。照护还包括呼吸支持、营养吞咽、康复、脊柱和关节管理。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>多数SMA为常染色体隐性遗传，与SMN1双等位异常有关，SMN2拷贝数会影响但不能完全决定严重程度。父母和计划生育家庭建议做携带者咨询。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Spinal muscular atrophy',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/spinal-muscular-atrophy/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>脊髓性肌萎缩症是一组多由SMN1基因异常导致的遗传性神经肌肉病，运动神经元受损后可出现进行性肌无力、运动发育受限、吞咽或呼吸问题；常见线索包括婴儿明显软、抬头差、翻身坐立落后，哭声或咳嗽弱。、近端肌无力明显，腿部无力比手部更突出，腱反射减弱等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>目前已有疾病修饰治疗可选择，但疗效与起病、分型、治疗时机和可及性有关。照护还包括呼吸支持、营养吞咽、康复、脊柱和关节管理。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [65],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1111, 'catalog-china-first-rare-disease-catalog-111'),
    name: '脊髓小脑性共济失调',
    nameEn: 'Spinocerebellar Ataxia',
    alias: 'SCA、小脑萎缩症、第一批罕见病目录第 111 项',
    slug: 'spinocerebellar-ataxia',
    oneSentence:
      '脊髓小脑性共济失调是一组遗传性神经退行性疾病，主要表现为走路不稳、动作协调差、说话含糊，并可伴眼动、吞咽、周围神经或认知情绪问题。',
    plainName: '以走路不稳、协调变差为主的一组遗传性共济失调',
    prevalence: '已纳入国家第一批罕见病目录；不同SCA分型和地区的频率差异很大。',
    quickLook: {
      whatItIs:
        'SCA不是单一疾病，常见分型包括SCA1、SCA2、SCA3等。家族史、起病年龄、眼动和周围神经表现、基因检测有助于分型，分型会影响遗传咨询和随访重点。',
      whoToSeeFirst:
        '建议看神经内科运动障碍或神经遗传门诊；确诊后需要康复、吞咽营养、心理和遗传咨询支持。',
      isGenetic:
        '许多SCA为常染色体显性遗传，部分与重复序列扩增有关。家族成员检测和生育选择需要遗传咨询，尤其要避免在未咨询前直接给未成年人预测性检测。',
      hasTreatment:
        '多数SCA目前以康复、预防跌倒、吞咽和营养管理、症状治疗和生活适配为主。分型清楚后可关注临床研究和特定并发症筛查。',
      commonDelayReason:
        '早期走路不稳、说话含糊可能被误认为颈椎病、酒精影响或心理问题；家族史不明显时更易延迟。',
    },
    patientJourney: {
      whenToSuspect: [
        '逐渐出现走路不稳、容易跌倒、动作笨拙或手抖。',
        '说话含糊、眼球震颤、复视或吞咽呛咳。',
        '家族中多人有“小脑萎缩”、走路不稳或不明原因轮椅使用。',
        '头颅影像提示小脑萎缩。',
      ],
      commonWrongTurns: [
        '长期按颈椎病、眩晕或焦虑处理，没有做神经系统定位。',
        '只看到影像“小脑萎缩”，未进一步分型和遗传咨询。',
        '忽视吞咽安全、跌倒预防和心理支持。',
      ],
      firstDepartments: [
        '神经内科',
        '运动障碍门诊',
        '医学遗传科',
        '康复医学科',
        '吞咽/营养门诊',
      ],
      diagnosisChecklist: [
        '整理起病年龄、进展速度、跌倒、说话吞咽和眼动症状。',
        '画出三代家系图，记录类似症状、诊断或早逝情况。',
        '带上头颅MRI、基因检测、康复评估和用药记录。',
      ],
      testsToAskAbout: [
        '头颅MRI和神经系统查体。',
        'SCA重复扩增和相关共济失调基因检测。',
        '吞咽、步态平衡、眼动和周围神经评估。',
      ],
      questionsForDoctor: [
        '最可能是哪一型SCA？基因检测应该如何分步做？',
        '家属预测性检测和生育咨询有哪些注意事项？',
        '怎样安排康复、辅具和跌倒预防？',
        '吞咽呛咳、体重下降或情绪问题应如何处理？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>SCA不是单一疾病，常见分型包括SCA1、SCA2、SCA3等。家族史、起病年龄、眼动和周围神经表现、基因检测有助于分型，分型会影响遗传咨询和随访重点。</p><p>需要警惕的线索包括：逐渐出现走路不稳、容易跌倒、动作笨拙或手抖；说话含糊、眼球震颤、复视或吞咽呛咳；家族中多人有“小脑萎缩”、走路不稳或不明原因轮椅使用；头颅影像提示小脑萎缩。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：头颅MRI和神经系统查体；SCA重复扩增和相关共济失调基因检测；吞咽、步态平衡、眼动和周围神经评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>多数SCA目前以康复、预防跌倒、吞咽和营养管理、症状治疗和生活适配为主。分型清楚后可关注临床研究和特定并发症筛查。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>许多SCA为常染色体显性遗传，部分与重复序列扩增有关。家族成员检测和生育选择需要遗传咨询，尤其要避免在未咨询前直接给未成年人预测性检测。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'NORD: Spinocerebellar Ataxia',
        type: 'official',
        url: 'https://rarediseases.org/rare-diseases/spinocerebellar-ataxia/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>脊髓小脑性共济失调是一组遗传性神经退行性疾病，主要表现为走路不稳、动作协调差、说话含糊，并可伴眼动、吞咽、周围神经或认知情绪问题；常见线索包括逐渐出现走路不稳、容易跌倒、动作笨拙或手抖。、说话含糊、眼球震颤、复视或吞咽呛咳等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>多数SCA目前以康复、预防跌倒、吞咽和营养管理、症状治疗和生活适配为主。分型清楚后可关注临床研究和特定并发症筛查。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [77],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1112, 'catalog-china-first-rare-disease-catalog-112'),
    name: '系统性硬化症',
    nameEn: 'Systemic Sclerosis',
    alias: '硬皮病、SSc、第一批罕见病目录第 112 项',
    slug: 'systemic-sclerosis',
    oneSentence:
      '系统性硬化症是一种自身免疫性结缔组织病，可引起皮肤增厚变硬、雷诺现象，并可能累及肺、消化道、肾脏和心脏。',
    plainName: '会造成皮肤变硬并可能累及血管和内脏的自身免疫病',
    prevalence:
      '已纳入国家第一批罕见病目录；发病率和患病率因地区、人群和诊断标准而不同。',
    quickLook: {
      whatItIs:
        'SSc不只是“皮肤硬”，它常从手指遇冷变白变紫、肿胀或皮肤紧绷开始，并可能逐步影响肺间质、肺动脉压力、胃食管反流和肾脏血压。',
      whoToSeeFirst:
        '疑似者建议先看风湿免疫科；有气短、吞咽反流、肾脏血压或心脏症状时，需要呼吸、消化、肾内和心内科共同评估。',
      isGenetic:
        'SSc通常不是单基因遗传病，可能与免疫、环境和遗传易感共同相关。家族聚集少见，但有自身免疫病家族史可告知医生。',
      hasTreatment:
        '目前没有单一根治方案，治疗按受累器官分层，包括雷诺和血管保护、免疫抑制、肺部监测、胃食管反流管理和肾危象预防。',
      commonDelayReason:
        '早期雷诺、手肿、胃反流或关节痛容易被分开处理；若没有查自身抗体和毛细血管镜，诊断会延迟。',
    },
    patientJourney: {
      whenToSuspect: [
        '手指遇冷变白、变紫或疼痛，反复指尖溃疡。',
        '手指肿胀、皮肤发紧变厚，戒指变紧或握拳困难。',
        '不明原因胃食管反流、吞咽困难、气短、干咳或运动耐量下降。',
        '自身抗体阳性或甲襞毛细血管异常。',
      ],
      commonWrongTurns: [
        '只按冻疮、皮炎或胃病处理，没有风湿免疫评估。',
        '只关注皮肤，忽略肺间质病变、肺动脉高压和肾危象风险。',
        '自行使用激素或偏方，未评估血压、肾功能和肺部情况。',
      ],
      firstDepartments: ['风湿免疫科', '呼吸科', '心内科', '肾内科', '消化科'],
      diagnosisChecklist: [
        '记录雷诺发作、皮肤变化、指尖溃疡、反流吞咽和气短时间线。',
        '带上自身抗体、肺功能、胸部HRCT、心超、尿检和肾功能结果。',
        '记录血压变化、用药和感染/咳嗽情况。',
      ],
      testsToAskAbout: [
        'ANA谱和SSc相关抗体，甲襞毛细血管镜。',
        '肺功能、弥散功能、胸部HRCT和心脏超声。',
        '血压、尿常规、肾功能、心电图和NT-proBNP等按需评估。',
      ],
      questionsForDoctor: [
        '属于局限型还是弥漫型？目前哪些器官受累？',
        '肺部和肺动脉高压多久筛查一次？',
        '雷诺和指尖溃疡怎样预防和处理？',
        '哪些药物可能增加肾危象风险？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>SSc不只是“皮肤硬”，它常从手指遇冷变白变紫、肿胀或皮肤紧绷开始，并可能逐步影响肺间质、肺动脉压力、胃食管反流和肾脏血压。</p><p>需要警惕的线索包括：手指遇冷变白、变紫或疼痛，反复指尖溃疡；手指肿胀、皮肤发紧变厚，戒指变紧或握拳困难；不明原因胃食管反流、吞咽困难、气短、干咳或运动耐量下降；自身抗体阳性或甲襞毛细血管异常。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：ANA谱和SSc相关抗体，甲襞毛细血管镜；肺功能、弥散功能、胸部HRCT和心脏超声；血压、尿常规、肾功能、心电图和NT-proBNP等按需评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>目前没有单一根治方案，治疗按受累器官分层，包括雷诺和血管保护、免疫抑制、肺部监测、胃食管反流管理和肾危象预防。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>SSc通常不是单基因遗传病，可能与免疫、环境和遗传易感共同相关。家族聚集少见，但有自身免疫病家族史可告知医生。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'NIAMS: Scleroderma',
        type: 'official',
        url: 'https://www.niams.nih.gov/health-topics/scleroderma',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>系统性硬化症是一种自身免疫性结缔组织病，可引起皮肤增厚变硬、雷诺现象，并可能累及肺、消化道、肾脏和心脏；常见线索包括手指遇冷变白、变紫或疼痛，反复指尖溃疡。、手指肿胀、皮肤发紧变厚，戒指变紧或握拳困难等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>目前没有单一根治方案，治疗按受累器官分层，包括雷诺和血管保护、免疫抑制、肺部监测、胃食管反流管理和肾危象预防。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [64],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1113, 'catalog-china-first-rare-disease-catalog-113'),
    name: '四氢生物蝶呤缺乏症',
    nameEn: 'Tetrahydrobiopterin Deficiency',
    alias: '第一批罕见病目录第 113 项；Tetrahydrobiopterin Deficiency',
    slug: 'tetrahydrobiopterin-deficiency',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1114, 'catalog-china-first-rare-disease-catalog-114'),
    name: '结节性硬化症',
    nameEn: 'Tuberous Sclerosis Complex',
    alias: 'TSC、结节性硬化复合征、第一批罕见病目录第 114 项',
    slug: 'tuberous-sclerosis-complex',
    oneSentence:
      '结节性硬化症是一种多系统遗传性疾病，常由TSC1或TSC2基因变异引起，可在脑、皮肤、肾脏、心脏、肺和眼部形成错构瘤或相关病变。',
    plainName: '会影响脑、皮肤和多个器官的遗传性多系统疾病',
    prevalence: '已纳入国家第一批罕见病目录；国际资料常估计约每6,000人中1例。',
    quickLook: {
      whatItIs:
        'TSC的关键不是单一“结节”，而是多个器官可能随年龄出现不同问题。婴幼儿可先因癫痫或皮肤白斑就诊，成年后也可能因肾血管平滑肌脂肪瘤、肺部问题或皮肤改变被发现。',
      whoToSeeFirst:
        '儿童可先看儿童神经科、皮肤科或医学遗传科；成人可由神经内科、肾内科、皮肤科、呼吸科和遗传门诊共同评估。',
      isGenetic:
        'TSC多与TSC1或TSC2基因有关，常染色体显性遗传，很多患者为新发变异。确诊者及家属建议做遗传咨询和家系评估。',
      hasTreatment:
        '治疗取决于受累器官，包括癫痫控制、发育行为支持、皮肤和肾脏监测，部分病变可评估mTOR抑制剂、手术或介入方案。',
      commonDelayReason:
        '皮肤白斑、面部血管纤维瘤、癫痫、肾脏病变常被分散处理；如果没有把多器官线索连接起来，就容易漏诊。',
    },
    patientJourney: {
      whenToSuspect: [
        '婴儿痉挛、反复癫痫发作，或发育倒退/明显发育迟缓。',
        '皮肤出现白色叶形斑、面部红色丘疹、鲨革斑或甲周纤维瘤。',
        '影像提示脑室管膜下结节、皮质结节，或肾脏血管平滑肌脂肪瘤。',
        '家族中有人有TSC、癫痫、肾脏错构瘤或类似皮肤表现。',
      ],
      commonWrongTurns: [
        '只按普通癫痫治疗，没有查看皮肤、肾脏、眼底和家族史。',
        '把白斑当作普通色素减退，没有用伍德灯和系统评估。',
        '成年肾脏病变被单独处理，未追问儿童期癫痫或皮肤表现。',
      ],
      firstDepartments: [
        '儿童神经科',
        '神经内科',
        '皮肤科',
        '肾内科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '整理癫痫发作视频、脑电图、头颅MRI、肾脏超声/CT/MRI和皮肤照片。',
        '记录发育、学习、行为、睡眠和肾脏/肺部症状。',
        '带上家族成员类似表现、基因检测和既往用药反应。',
      ],
      testsToAskAbout: [
        '头颅MRI、脑电图和发育行为评估。',
        '皮肤科检查和伍德灯检查。',
        '肾脏影像、血压、肾功能和尿检。',
        'TSC1/TSC2基因检测，必要时做家属验证。',
        '按年龄和性别评估眼底、心脏和肺部受累。',
      ],
      questionsForDoctor: [
        '目前哪些器官已经受累？哪些需要定期筛查？',
        '癫痫是否需要调整方案，是否适合进一步评估手术或靶向药？',
        '肾脏病变大小和出血风险如何？多久复查影像？',
        '家属是否需要检查或遗传咨询？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>TSC可以影响脑、皮肤、肾脏、心脏、肺和眼睛。常见线索包括癫痫、婴儿痉挛、发育迟缓、学习或行为问题、皮肤白斑、面部血管纤维瘤、鲨革斑、甲周纤维瘤，以及肾脏血管平滑肌脂肪瘤。</p><p>表现随年龄变化。婴幼儿可能先因癫痫或心脏横纹肌瘤被发现；成人可能以肾脏或肺部问题就诊。即使症状较轻，也需要多器官随访。</p>',
      diagnosis:
        '<p>诊断通常结合临床标准、影像、皮肤检查和基因检测。头颅MRI、脑电图、肾脏影像和皮肤科评估有助于判断是否符合TSC以及当前受累范围。</p><p>TSC1/TSC2基因检测可帮助确认诊断、做家系评估和遗传咨询；检测阴性并不能完全排除，仍需由熟悉TSC的医生结合临床判断。</p>',
      treatment:
        '<p>治疗按器官和风险分层。癫痫需要尽早规范控制，婴儿痉挛尤其要及时处理；肾脏病变需定期影像监测，必要时评估药物、介入或手术；皮肤、行为、学习和睡眠问题也应纳入照护。</p><p>部分TSC相关病变可评估mTOR抑制剂。是否适合、如何监测副作用，应由专科团队决定。</p>',
      longTermCare:
        '<p>TSC是长期管理疾病。建议建立跨学科随访表，按年龄安排脑、肾、皮肤、眼、肺、心脏和心理行为评估，并保存关键影像和基因报告。</p>',
      fertilityOrFamily:
        '<p>TSC可常染色体显性遗传。患者生育前和家属筛查应基于基因结果、临床表现和家系情况进行遗传咨询。</p>',
      emergencySigns:
        '<p>长时间癫痫发作、连续发作不恢复、突发剧烈头痛呕吐、意识改变、急性肢体无力、肉眼血尿或腰腹痛提示肾脏出血风险时，应尽快急诊。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Tuberous sclerosis complex',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/tuberous-sclerosis-complex/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>常见表现包括癫痫、发育行为问题、皮肤白斑或面部丘疹、肾脏血管平滑肌脂肪瘤，以及不同年龄出现的多器官病变。</p>',
    diagnosis:
      '<p>诊断结合临床标准、头颅和肾脏影像、皮肤检查、脑电图和TSC1/TSC2基因检测。</p>',
    treatment:
      '<p>治疗按受累器官制定，包括癫痫控制、肾脏监测、皮肤和发育行为支持，部分患者可评估mTOR抑制剂或手术/介入。</p>',
    prognosis:
      '<p>预后差异很大；规范筛查和早期处理癫痫、肾脏及行为问题，可降低严重并发症风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'genetic-developmental',
    charityIds: [62],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  },
  {
    ...entity(1115, 'catalog-china-first-rare-disease-catalog-115'),
    name: '原发性酪氨酸血症',
    nameEn: 'Tyrosinemia',
    alias: '第一批罕见病目录第 115 项；Tyrosinemia',
    slug: 'tyrosinemia',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1116, 'catalog-china-first-rare-disease-catalog-116'),
    name: '极长链酰基辅酶A脱氢酶缺乏症',
    nameEn: 'Very Long Chain Acyl-CoA Dehydrogenase Deficiency',
    alias:
      '第一批罕见病目录第 116 项；Very Long Chain Acyl-CoA Dehydrogenase Deficiency',
    slug: 'very-long-chain-acyl-coa-dehydrogenase-deficiency',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1117, 'catalog-china-first-rare-disease-catalog-117'),
    name: '威廉姆斯综合征',
    nameEn: 'Williams Syndrome',
    alias: '第一批罕见病目录第 117 项；Williams Syndrome',
    slug: 'williams-syndrome',
    categorySlug: 'genetic-developmental',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
      {
        name: '维基百科中文条目',
        url: 'https://zh.wikipedia.org/wiki/%E5%A8%81%E5%BB%89%E5%A7%86%E6%96%AF%E7%BB%BC%E5%90%88%E5%BE%81',
        type: 'wikipedia-entry',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1118, 'catalog-china-first-rare-disease-catalog-118'),
    name: '湿疹血小板减少伴免疫缺陷综合征',
    nameEn: 'Wiskott-Aldrich Syndrome',
    alias: '第一批罕见病目录第 118 项；Wiskott-Aldrich Syndrome',
    slug: 'wiskott-aldrich-syndrome',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1119, 'catalog-china-first-rare-disease-catalog-119'),
    name: 'X-连锁无丙种球蛋白血症',
    nameEn: 'X-linked Agammaglobulinemia',
    alias: '第一批罕见病目录第 119 项；X-linked Agammaglobulinemia',
    slug: 'x-linked-agammaglobulinemia',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1120, 'catalog-china-first-rare-disease-catalog-120'),
    name: 'X-连锁肾上腺脑白质营养不良',
    nameEn: 'X-linked Adrenoleukodystrophy',
    alias: '第一批罕见病目录第 120 项；X-linked Adrenoleukodystrophy',
    slug: 'x-linked-adrenoleukodystrophy',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(1121, 'catalog-china-first-rare-disease-catalog-121'),
    name: 'X-连锁淋巴增生症',
    nameEn: 'X-linked Lymphoproliferative Disease',
    alias: '第一批罕见病目录第 121 项；X-linked Lymphoproliferative Disease',
    slug: 'x-linked-lymphoproliferative-disease',
    categorySlug: 'immunological-rheumatologic',
    charityIds: [],
    hospitalIds: [],
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
        type: 'official',
      },
      {
        name: '第一批罕见病目录维基百科模板',
        url: 'https://zh.wikipedia.org/wiki/Template:%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%AC%AC%E4%B8%80%E6%89%B9%E7%BD%95%E8%A7%81%E7%97%85%E7%9B%AE%E5%BD%95',
        type: 'wikipedia-template',
        license: 'CC BY-SA 4.0',
      },
      {
        name: '维基百科中文条目',
        url: 'https://zh.wikipedia.org/wiki/X%E8%BF%9E%E9%94%81%E6%B7%8B%E5%B7%B4%E7%BB%86%E8%83%9E%E5%A2%9E%E7%94%9F%E6%80%A7%E7%96%BE%E7%97%85',
        type: 'wikipedia-entry',
        license: 'CC BY-SA 4.0',
      },
    ],
    reviewStatus: 'draft',
    tagSlugs: ['first-rare-disease-catalog'],
  },
  {
    ...entity(6101, 'disease-alstrom-syndrome'),
    name: 'Alström综合征',
    nameEn: 'Alström Syndrome',
    alias: 'Alstrom综合征、Alström-Hallgren综合征、ALMS、ALMS1相关纤毛病',
    slug: 'alstrom-syndrome',
    oneSentence:
      'Alström综合征是一种ALMS1基因相关的常染色体隐性遗传性多系统疾病，常从婴幼儿期视力问题开始，随后可出现听力下降、肥胖、胰岛素抵抗或2型糖尿病、心肌病以及肝肾肺等器官受累。',
    plainName: '会同时影响视力、听力、代谢、心脏和多器官功能的遗传病',
    prevalence:
      'MedlinePlus Genetics 资料提到全球已报告超过900例；OCR来源也将其列为极罕见疾病。',
    sourceName: 'MedlinePlus Genetics: Alström syndrome',
    sourceUrl: 'https://medlineplus.gov/genetics/condition/alstrom-syndrome/',
    sources: [
      {
        name: 'MedlinePlus Genetics: Alström syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/alstrom-syndrome/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'multisystem',
    charityIds: [84],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(6102, 'disease-dup15q-syndrome'),
    name: '15q11-q13重复综合征（dup15q综合征）',
    nameEn: '15q11-q13 duplication syndrome',
    alias: 'dup15q综合征、15号染色体重复综合征、idic(15)、inv dup(15)',
    slug: 'dup15q-syndrome',
    oneSentence:
      'dup15q综合征是一种母源15q11.2-q13.1区域额外拷贝导致的神经发育障碍，可引起肌张力低、运动和语言发育迟缓、智力障碍、孤独症谱系特征和癫痫。',
    plainName: '15号染色体特定区域重复导致的发育和癫痫相关综合征',
    prevalence:
      'MedlinePlus Genetics 描述其患病率不明，可能在普通人群中高达约1/5,000，在孤独症或智力障碍人群中更常见。',
    sourceName: 'MedlinePlus Genetics: 15q11-q13 duplication syndrome',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/15q11-q13-duplication-syndrome/',
    sources: [
      {
        name: 'MedlinePlus Genetics: 15q11-q13 duplication syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/15q11-q13-duplication-syndrome/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'genetic-developmental',
    charityIds: [85],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(6103, 'disease-pituitary-stalk-interruption-syndrome'),
    name: '垂体柄阻断综合征',
    nameEn: 'Pituitary Stalk Interruption Syndrome',
    alias: 'PSIS、垂体柄中断综合征、异位垂体后叶、先天性垂体功能减退相关综合征',
    slug: 'pituitary-stalk-interruption-syndrome',
    oneSentence:
      '垂体柄阻断综合征是一种先天性下丘脑-垂体发育异常，典型影像表现包括垂体柄缺如或变细、垂体后叶异位或缺如、垂体前叶发育不良，可导致生长激素和其他垂体激素缺乏。',
    plainName: '垂体连接结构发育异常导致孩子生长和多种激素不足的疾病',
    prevalence:
      '患病率不明，公开资料通常描述为罕见；GARD和综述资料将其列为罕见病。',
    sourceName: 'GARD: Pituitary stalk interruption syndrome',
    sourceUrl:
      'https://rarediseases.info.nih.gov/diseases/12421/pituitary-stalk-interruption-syndrome',
    sources: [
      {
        name: 'GARD: Pituitary stalk interruption syndrome',
        type: 'official',
        url: 'https://rarediseases.info.nih.gov/diseases/12421/pituitary-stalk-interruption-syndrome',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'genetic-developmental',
    charityIds: [86],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['endocrine'],
  },
  {
    ...entity(6104, 'disease-joubert-syndrome'),
    name: 'Joubert综合征',
    nameEn: 'Joubert syndrome',
    alias: 'Joubert-Bolthauser综合征、JBTS、JSRD、磨牙征相关综合征',
    slug: 'joubert-syndrome',
    oneSentence:
      'Joubert综合征是一组以脑MRI“磨牙征”为核心特征的遗传性脑发育疾病，可导致婴儿肌张力低、呼吸节律异常、眼球运动异常、发育迟缓、共济失调，并可累及眼、肾、肝或骨骼。',
    plainName: '脑干和小脑发育异常导致运动、呼吸和多系统问题的遗传病',
    prevalence:
      'MedlinePlus Genetics 估计约每80,000到100,000名新生儿1例，但可能因漏诊而低估。',
    sourceName: 'MedlinePlus Genetics: Joubert syndrome',
    sourceUrl: 'https://medlineplus.gov/genetics/condition/joubert-syndrome/',
    sources: [
      {
        name: 'MedlinePlus Genetics: Joubert syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/joubert-syndrome/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'neurological',
    charityIds: [87],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['genetic-counseling'],
  },
  {
    ...entity(6105, 'disease-pitt-hopkins-syndrome'),
    name: 'Pitt-Hopkins综合征',
    nameEn: 'Pitt-Hopkins syndrome',
    alias: '皮特霍普金斯综合征、PTHS、PHS、TCF4相关神经发育综合征',
    slug: 'pitt-hopkins-syndrome',
    oneSentence:
      'Pitt-Hopkins综合征是一种多由TCF4基因变异导致的神经发育疾病，常表现为中重度发育迟缓和智力障碍、语言严重受限、癫痫、清醒时过度换气/呼吸暂停样发作、便秘和特征性面容。',
    plainName: '影响发育、语言、呼吸节律和癫痫风险的TCF4相关遗传病',
    prevalence: 'MedlinePlus Genetics 描述其非常罕见，全球约报告500名患者。',
    sourceName: 'MedlinePlus Genetics: Pitt-Hopkins syndrome',
    sourceUrl:
      'https://medlineplus.gov/genetics/condition/pitt-hopkins-syndrome/',
    sources: [
      {
        name: 'MedlinePlus Genetics: Pitt-Hopkins syndrome',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/pitt-hopkins-syndrome/',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    categorySlug: 'neurological',
    charityIds: [88],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['genetic-counseling'],
  },
];

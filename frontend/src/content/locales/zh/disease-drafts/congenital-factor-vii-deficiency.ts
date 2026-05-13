import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalFactorViiDeficiency: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      '凝血因子 VII 参与凝血级联反应。先天性缺乏时，外源性凝血通路受影响，常见实验室线索是 PT/INR 延长而 APTT 多正常。',
    whoToSeeFirst:
      '反复鼻出血、牙龈出血、易淤青、术后或拔牙后出血时间长、女性月经过多，应看血液科或凝血专病门诊；严重出血先急诊。',
    isGenetic:
      '通常为常染色体隐性遗传，与 F7 基因有关。父母可为无症状携带者，确诊后建议遗传咨询和家系评估。',
    hasTreatment:
      '轻症可能只需在手术、创伤、分娩或出血时处理；严重或频繁出血者可由血液科评估重组活化因子 VII、凝血酶原复合物、血浆、抗纤溶药或预防治疗。',
    commonDelayReason:
      '部分人平时没有明显出血，常在术前检查发现 PT 延长，或在拔牙、手术、月经/分娩后才被发现。PT 延长也容易先被归因于肝病、维生素 K 缺乏或抗凝药。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复鼻出血、牙龈出血、容易淤青，或轻微外伤后出血时间明显延长。',
      '拔牙、手术、包皮环切、分娩或产后出血明显。',
      '女性月经过多或经期很长，伴贫血或反复补铁。',
      '化验提示 PT/INR 延长，但 APTT 正常或基本正常，血小板通常不低。',
      '新生儿脐带出血、颅内出血、胃肠道出血或关节/肌肉出血需高度重视。',
    ],
    commonWrongTurns: [
      '只按鼻炎、牙龈炎或月经问题处理，没有做凝血筛查。',
      '看到 PT 延长就只补维生素 K，没有进一步测因子 VII 活性。',
      '手术、拔牙或分娩前没有制定凝血替代和止血预案。',
      '确诊后没有提醒避免随意使用阿司匹林、NSAIDs 或肌肉注射等增加出血风险的操作。',
    ],
    firstDepartments: [
      '血液科',
      '凝血/罕见出血病门诊',
      '儿科血液科',
      '妇产科高危门诊',
    ],
    diagnosisChecklist: [
      '记录所有出血事件：部位、持续时间、诱因、是否输血或用止血药。',
      '带齐 PT/INR、APTT、纤维蛋白原、血小板、肝功能、维生素 K 处理记录和因子活性结果。',
      '记录拔牙、手术、分娩、月经量、贫血治疗和家族出血史。',
      '准备正在使用的抗凝药、抗血小板药、止痛药和保健品清单。',
    ],
    testsToAskAbout: [
      '重复凝血筛查：PT/INR、APTT、纤维蛋白原、血小板。',
      '凝血因子 VII 活性检测，必要时同时评估其他凝血因子以排除共同通路问题。',
      'F7 基因检测和家系验证，用于遗传咨询和特殊情况判断。',
      '严重出血时根据部位选择头颅影像、关节/肌肉影像、胃肠道评估等。',
    ],
    questionsForDoctor: [
      '我的因子 VII 活性是多少？这和实际出血风险是否一致？',
      '日常需要治疗吗，还是只在出血、手术、拔牙或分娩前处理？',
      '哪些药物和操作应避免？疫苗或注射应注意什么？',
      '家人是否需要筛查？未来生育或孕期管理如何安排？',
      '发生鼻出血、头部外伤、黑便、血尿或关节肿痛时应该怎么做？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>先天性凝血因子 VII 缺乏症表现差异很大，约一部分患者终生没有明显出血。常见表现包括鼻出血、牙龈出血、容易淤青、外伤或手术后出血时间长、血尿、关节或肌肉出血，以及女性月经过多或产后出血。</p><p>严重患者可在婴儿期出现脐带出血、颅内出血或胃肠道出血。出血风险并不总是与因子 VII 活性完全一致，因此需要结合个人出血史判断。</p>',
    diagnosis:
      '<p>典型实验室线索是 PT/INR 延长，而 APTT 多正常。确诊需要测定凝血因子 VII 活性，并排除维生素 K 缺乏、肝病、华法林等抗凝药、获得性因子 VII 缺乏和其他凝血因子缺乏。</p><p>F7 基因检测可帮助确认先天性病因和家系风险，但治疗决策仍要结合出血史、因子活性、年龄、手术/妊娠计划和可用药物。</p>',
    treatment:
      '<p>治疗按出血风险和场景制定。轻症患者可只在手术、拔牙、创伤、分娩或明显出血时用药。常用方案包括重组活化因子 VII、凝血酶原复合物、血浆和抗纤溶药，具体选择取决于出血部位、严重程度和血栓风险。</p><p>严重或频繁出血者可能需要预防治疗。患者应避免自行使用增加出血风险的药物，并在任何侵入性操作前提前联系血液科。</p>',
    longTermCare:
      '<p>长期管理包括建立个人出血记录、急诊卡或诊断证明、手术和牙科预案、女性月经和妊娠管理、贫血监测，以及定期复核因子活性和治疗反应。</p><p>儿童应在凝血专病中心随访，学校和照护者需要知道哪些外伤或症状要及时就医。</p>',
    fertilityOrFamily:
      '<p>本病多为常染色体隐性遗传。患者父母常为携带者，兄弟姐妹和未来子女风险取决于伴侣和家族基因状态。确诊后建议遗传咨询和必要的亲属筛查。</p><p>女性患者备孕、妊娠、分娩和产后都需要血液科与产科共同制定止血方案。</p>',
    emergencySigns:
      '<p>头部外伤后头痛呕吐、意识改变、抽搐，黑便或呕血，血尿明显，关节或肌肉快速肿痛，持续鼻出血压迫无效，产后出血或任何不能控制的出血，都应立即急诊并说明因子 VII 缺乏。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Factor VII deficiency',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/factor-vii-deficiency/',
    },
    {
      name: 'Great Ormond Street Hospital: Factor VII deficiency',
      type: 'review',
      url: 'https://www.gosh.nhs.uk/conditions-and-treatments/conditions-we-treat/factor-vii-deficiency/',
    },
  ],
  symptoms:
    '<p>可无症状，也可有鼻出血、牙龈出血、易淤青、术后或外伤后出血、血尿、关节/肌肉出血、月经过多，少数有颅内或胃肠道严重出血。</p>',
  diagnosis:
    '<p>诊断依据出血史、PT/INR 延长且 APTT 多正常、凝血因子 VII 活性降低，并结合 F7 基因检测和排除获得性原因。</p>',
  treatment:
    '<p>按出血风险和场景使用重组活化因子 VII、凝血酶原复合物、血浆、抗纤溶药或预防治疗，并制定手术、牙科和分娩止血预案。</p>',
  prognosis:
    '<p>多数轻症患者可通过场景化止血管理生活；严重出血型需要凝血专科长期随访和急诊预案。</p>',
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
};

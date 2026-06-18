import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryEpidermolysisBullosa: DiseaseDraft = {
  ...entity(41, 'disease-hereditary-epidermolysis-bullosa'),
  name: '遗传性大疱性表皮松解症',
  nameEn: 'Hereditary Epidermolysis Bullosa',
  alias: '大疱性表皮松解症、EB、蝴蝶宝贝、遗传性皮肤脆弱症',
  slug: 'hereditary-epidermolysis-bullosa',
  oneSentence:
    '遗传性大疱性表皮松解症是一组皮肤和黏膜异常脆弱的遗传病，轻微摩擦即可出现水疱、糜烂、慢性伤口和疼痛。',
  plainName: '皮肤像很薄的保护层，轻微摩擦也容易起疱破损的遗传病',
  prevalence: '总体罕见，亚型很多，严重程度从局部水疱到多系统受累差异很大。',
  quickLook: {
    whatItIs:
      'EB 不是普通水疱病，而是皮肤结构蛋白异常导致皮肤层之间连接不牢。不同亚型的起疱层次、遗传方式、并发症和长期风险不同。',
    whoToSeeFirst:
      '新生儿或儿童反复水疱、皮肤破损、口腔糜烂、指趾甲异常或伤口难愈时，应到皮肤科，最好是熟悉遗传性皮肤病和创面护理的团队评估。',
    isGenetic:
      '是，可为常染色体显性或隐性遗传，也可能为新发变异。基因检测有助于明确亚型和家族风险。',
    hasTreatment:
      '目前管理重点是创面护理、疼痛控制、感染预防、营养支持、并发症监测和部分亚型的靶向/基因相关治疗评估。',
    commonDelayReason:
      '早期可能被当作感染、烫伤、湿疹或外伤；若没有认识到“轻微摩擦即起疱”和家族/新生儿线索，容易延误亚型诊断和护理教育。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生后或婴幼儿期轻微摩擦、贴胶布、抱扶或穿衣后出现水疱和糜烂。',
      '反复口腔、食管、眼部或外阴黏膜破损，伴进食困难或疼痛。',
      '伤口愈合慢、瘢痕、粟丘疹、指趾甲异常、手足粘连或活动受限。',
      '慢性贫血、营养不良、生长迟缓或反复感染与皮肤破损并存。',
      '家族中有人从小反复水疱、皮肤脆弱、瘢痕或类似诊断。',
    ],
    commonWrongTurns: [
      '按普通感染、湿疹、烫伤或虐待疑虑处理，没有评估遗传性皮肤脆弱。',
      '使用强粘性敷料或粗暴清创，加重皮肤损伤。',
      '只处理单个伤口，忽略营养、疼痛、贫血、牙科、眼科和手部功能。',
      '严重亚型未建立皮肤肿瘤和慢性伤口长期监测。',
    ],
    firstDepartments: [
      '皮肤科/儿童皮肤科',
      '医学遗传科/遗传咨询门诊',
      '伤口造口/创面护理门诊',
      '营养科、口腔科、眼科',
      '康复医学科/手外科（瘢痕挛缩或功能受限时）',
    ],
    diagnosisChecklist: [
      '记录起疱年龄、诱因、部位、瘢痕、指甲、口腔/眼部/食管等受累。',
      '拍照保存水疱和伤口变化，带上既往病理、免疫荧光或电镜报告。',
      '询问是否需要 EB 相关基因检测和亚型确认。',
      '评估营养、贫血、疼痛、感染、牙齿、眼部和手足功能。',
      '学习低损伤换药、敷料选择和急诊说明。',
    ],
    testsToAskAbout: [
      'EB 相关基因 panel 或外显子组检测。',
      '皮肤活检的免疫荧光抗原定位或电镜检查（医生认为需要时）。',
      '血常规、铁代谢、营养状态和炎症/感染评估。',
      '口腔、眼科、消化道和手足功能评估。',
      '长期慢性伤口或可疑皮损的皮肤肿瘤筛查。',
    ],
    questionsForDoctor: [
      '我/孩子属于哪一种 EB 亚型？这会影响护理和长期风险吗？',
      '哪些敷料、胶带、清洁和换药方式更安全？',
      '疼痛、瘙痒、营养和贫血应该怎样一起管理？',
      '哪些伤口变化提示感染或肿瘤风险，需要尽快复诊？',
      '家属筛查和再次生育需要哪些遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>EB 可表现为皮肤反复水疱、糜烂、慢性伤口、疼痛、瘙痒、瘢痕、粟丘疹和指趾甲异常。较重亚型可累及口腔、眼睛、食管、泌尿生殖道，造成进食困难、营养不良、贫血、感染、手足挛缩或活动受限。部分亚型长期慢性伤口有皮肤鳞状细胞癌风险。</p>',
    diagnosis:
      '<p>诊断通常结合出生和起疱史、皮损分布、家族史、皮肤活检相关检查和基因检测。明确亚型很重要，因为不同 EB 类型在遗传方式、预后、创面护理、并发症筛查和治疗可及性上差异明显。</p>',
    treatment:
      '<p>管理以减少摩擦、保护皮肤、规范创面护理、控制疼痛和瘙痒、预防感染、改善营养和监测并发症为核心。部分亚型可能有靶向或基因相关治疗评估机会，但是否适合需要专科团队判断。</p>',
    longTermCare:
      '<p>长期照护需要皮肤科、创面护理、营养、疼痛管理、口腔、眼科、康复和遗传咨询协作。家庭应建立低损伤换药流程、急诊说明和慢性伤口观察记录。</p>',
    fertilityOrFamily:
      '<p>EB 可为显性或隐性遗传，也可由新发变异导致。明确基因和亚型后，家属可通过遗传咨询了解携带者检测、复发风险、产前诊断或胚胎植入前遗传学检测选择。</p>',
    emergencySigns:
      '<p>发热、伤口红肿热痛或脓性渗出、快速扩大的皮肤破损、脱水、进食困难、呼吸或吞咽困难、眼痛畏光，或慢性伤口出现异常增生、出血、恶臭或疼痛改变时，应尽快就医。</p>',
  },
  sources: [
    {
      name: 'NCBI Bookshelf StatPearls: Epidermolysis Bullosa',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK599531/',
    },
    {
      name: 'GeneReviews: Dystrophic Epidermolysis Bullosa',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1304/',
    },
    {
      name: 'MedlinePlus Genetics: Epidermolysis bullosa',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/epidermolysis-bullosa/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>轻微摩擦后反复水疱、糜烂、慢性伤口、疼痛、瘢痕、指甲异常，也可累及口腔、眼部、食管和手足功能。</p>',
  diagnosis:
    '<p>评估包括皮损和家族史、皮肤活检相关检查、EB 相关基因检测，以及营养、感染和多系统并发症筛查。</p>',
  treatment:
    '<p>管理重点是低损伤创面护理、疼痛和瘙痒控制、感染预防、营养支持、康复和长期并发症监测。</p>',
  prognosis:
    '<p>预后高度取决于亚型和严重程度；重型患者需要长期多学科照护和慢性伤口/皮肤肿瘤风险监测。</p>',
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
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCryopyrinAssociatedPeriodicSyndromeNlrp3AssociatedSystemicAutoinflammatoryDisease: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        'NLRP3 基因变异会让炎症小体过度活跃，身体在没有感染时也反复释放炎症信号。CAPS 包括较轻的 FCAS、中等严重的 Muckle-Wells 综合征和较重的 NOMID/CINCA 谱系。',
      whoToSeeFirst:
        '反复无感染证据的发热、荨麻疹样皮疹、关节痛、眼红，尤其幼年起病或遇冷诱发，应看风湿免疫科/儿科风湿免疫科。',
      isGenetic:
        '多为常染色体显性遗传，也可新发或嵌合。确诊后建议遗传咨询，家族中类似发热、皮疹、听力下降或肾病线索都应告知医生。',
      hasTreatment:
        '很多患者可从 IL-1 通路靶向治疗和长期炎症控制中获益。治疗目标不是简单退烧，而是降低持续炎症、听力损害、眼部/神经系统问题和淀粉样变风险。',
      commonDelayReason:
        '常被当作反复感染、过敏、普通荨麻疹、幼年特发性关节炎或原因不明发热。发作模式、炎症指标和基因检测有助于缩短诊断路径。',
    },
    patientJourney: {
      whenToSuspect: [
        '从婴幼儿或儿童期开始反复发热，发作时或平时伴荨麻疹样皮疹、关节痛、肌肉痛或眼红。',
        '冷风、降温、疲劳或压力可诱发皮疹、发热或全身不适。',
        '有逐渐听力下降、头痛、无菌性脑膜炎样表现、眼部炎症、骨骼/关节异常或生长迟缓。',
        '炎症指标长期升高，但感染、普通过敏和常见自身免疫病解释不充分。',
      ],
      commonWrongTurns: [
        '反复使用抗生素治疗“感染”，但培养或感染证据不足。',
        '只把皮疹当作过敏，没有记录发热、关节、眼耳和炎症指标。',
        '只按单个科室问题处理听力、眼部或关节症状，没有考虑自身炎症病。',
        '基因检测阴性后完全排除 CAPS，忽略低比例嵌合或需要专科解释。',
      ],
      firstDepartments: [
        '风湿免疫科',
        '儿科风湿免疫科',
        '医学遗传科',
        '耳鼻喉科/眼科',
      ],
      diagnosisChecklist: [
        '记录每次发作时间、持续多久、体温、皮疹照片、诱因、关节和眼耳症状。',
        '带齐 CRP、ESR、血常规、SAA、尿蛋白、肝肾功能、免疫指标和感染排查结果。',
        '整理听力、眼科、神经系统、影像和既往基因检测报告。',
        '记录家族中反复发热、皮疹、听力下降、肾病、早发关节病或不明原因死亡史。',
      ],
      testsToAskAbout: [
        '发作期和间歇期的 CRP、ESR、SAA、血常规和尿蛋白监测。',
        'NLRP3 及自身炎症病相关基因检测，必要时讨论嵌合检测解释。',
        '听力检查、眼科检查、肾脏评估和神经系统评估。',
        '与 FMF、TRAPS、Mevalonate kinase deficiency、Still 病、感染和免疫缺陷的鉴别检查。',
      ],
      questionsForDoctor: [
        '我的表现属于 FCAS、Muckle-Wells、NOMID/CINCA 谱系，还是其他自身炎症病？',
        '炎症是否在发作间歇也持续存在？需要监测 SAA 和尿蛋白吗？',
        '是否适合 IL-1 靶向治疗？疗效和感染风险如何监测？',
        '听力、眼睛、肾脏、神经系统和生长发育应多久复查？',
        '家人需要检测吗？如果基因结果不明确，下一步如何判断？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CAPS/NLRP3-AID 常表现为反复发热、荨麻疹样皮疹、关节痛或关节肿、肌肉痛、乏力、眼红和头痛。较轻类型可被冷刺激诱发，发作持续数小时到数天；较重类型可从出生或婴儿期就持续炎症。</p><p>Muckle-Wells 综合征可出现进行性听力下降和淀粉样变肾损害风险；NOMID/CINCA 可累及中枢神经系统、眼睛、骨骼和生长发育。不同患者处在同一疾病谱的不同严重程度。</p>',
      diagnosis:
        '<p>诊断需要结合发作模式、体格检查、炎症指标、受累器官评估和遗传检测。发作期及间歇期 CRP、ESR、SAA、血常规、尿蛋白等可帮助判断炎症是否持续。</p><p>NLRP3 致病变异支持诊断，但部分患者可能存在嵌合或检测解释困难。医生还会排除感染、普通过敏、慢性荨麻疹、幼年特发性关节炎、家族性地中海热、TRAPS 和其他自身炎症病。</p>',
      treatment:
        '<p>治疗目标是长期控制 IL-1 相关炎症，减少发作和器官损害。IL-1 通路抑制剂是重要治疗方向，具体药物选择、剂量和可及性需由风湿免疫专科决定。</p><p>治疗期间需要监测感染风险、炎症指标、听力、眼部、肾脏、神经系统和生长发育。单纯反复退烧或长期抗生素通常不能解决核心炎症问题。</p>',
      longTermCare:
        '<p>长期管理包括规律记录发作、皮疹照片、炎症指标、尿蛋白/SAA、听力、眼科和肾功能。儿童还要关注身高体重、骨骼关节、学习和心理支持。</p><p>患者应保存基因报告和治疗反应记录，便于跨院评估和药物可及性申请。</p>',
      fertilityOrFamily:
        '<p>CAPS 多为常染色体显性遗传，也可为新发变异或嵌合。患者每次生育可能有遗传风险，具体概率取决于变异类型和是否嵌合。</p><p>有生育计划或家族成员有类似症状时，应做遗传咨询，讨论亲属检测、产前或胚胎植入前检测的适用性。</p>',
      emergencySigns:
        '<p>持续高热伴精神差、颈项强直或剧烈头痛、抽搐、视力突然变化、严重关节肿痛不能行走、明显脱水、疑似严重感染或免疫治疗期间发热，应及时急诊并说明 CAPS/NLRP3-AID 诊断和用药。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'MedlinePlus Genetics: Cryopyrin-associated periodic syndromes',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/cryopyrin-associated-periodic-syndromes/',
      },
      {
        name: 'GARD: Cryopyrin associated periodic syndrome',
        type: 'official',
        url: 'https://rarediseases.info.nih.gov/diseases/10927/cryopyrin-associated-periodic-syndrome',
      },
    ],
    symptoms:
      '<p>常见反复发热、荨麻疹样皮疹、关节痛、眼红、肌肉痛和乏力，部分有冷诱发、听力下降、肾脏、眼部、神经系统或骨骼受累。</p>',
    diagnosis:
      '<p>诊断结合发作模式、炎症指标、器官评估、NLRP3/自身炎症病基因检测，并排除感染、过敏、普通自身免疫病和其他周期热综合征。</p>',
    treatment:
      '<p>治疗以风湿免疫专科长期控制 IL-1 相关炎症为核心，同时监测感染风险、听力、眼睛、肾脏、神经系统和生长发育。</p>',
    prognosis:
      '<p>早期识别和持续控制炎症可减少听力损害、淀粉样变和多系统并发症；重症或治疗延迟者需要更密切随访。</p>',
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
  };

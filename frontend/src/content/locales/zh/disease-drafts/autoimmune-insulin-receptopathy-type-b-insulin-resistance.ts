import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAutoimmuneInsulinReceptopathyTypeBInsulinResistance: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        '这类疾病中，免疫系统产生针对胰岛素受体的抗体，干扰胰岛素信号。抗体作用方式不同，可表现为难以控制的高血糖、明显胰岛素抵抗，也可出现低血糖或血糖大幅波动。',
      whoToSeeFirst:
        '建议优先到内分泌科评估；如果合并系统性红斑狼疮、干燥综合征、皮肌炎等自身免疫病线索，通常需要风湿免疫科共同管理。',
      isGenetic:
        '通常不是遗传性胰岛素受体缺陷，而是自身免疫机制导致。家族中可有自身免疫病背景，但不能按单基因遗传病理解。',
      hasTreatment:
        '有治疗思路，但证据多来自病例系列和专家经验。治疗通常同时关注血糖安全、低血糖预防和免疫疾病控制，具体方案应由专科团队制定。',
      commonDelayReason:
        '因为非常罕见，常被当作普通 2 型糖尿病、严重胰岛素抵抗、多囊卵巢综合征、胰岛素瘤或其他低血糖原因处理，直到发现血糖异常程度和自身免疫背景不匹配。',
    },
    patientJourney: {
      whenToSuspect: [
        '血糖非常难控制，胰岛素需求或血糖波动明显超出常见糖尿病情况。',
        '既有高血糖又有反复低血糖，或在未使用降糖药的情况下出现原因不明低血糖。',
        '有明显黑棘皮征，同时体型、血脂或其他表现与常见代谢综合征不完全符合。',
        '合并系统性红斑狼疮、干燥综合征、皮肌炎、硬皮病或其他自身免疫病。',
        '女性出现高雄激素表现或多囊卵巢样表现，但胰岛素抵抗程度异常突出。',
        '常规糖尿病处理效果差，且医生提示需要排查罕见胰岛素抵抗综合征。',
      ],
      commonWrongTurns: [
        '只把它当作普通糖尿病加量处理，没有追问自身免疫病和黑棘皮征。',
        '低血糖时只排查胰岛素瘤，没有考虑胰岛素受体抗体相关低血糖。',
        '把高雄激素或月经问题单独按多囊卵巢综合征处理，忽略极端胰岛素抵抗。',
        '未意识到同一疾病可能在不同阶段出现高血糖和低血糖两种风险。',
        '自行根据血糖波动频繁调整药物，增加低血糖或高血糖风险。',
      ],
      firstDepartments: [
        '内分泌科',
        '风湿免疫科',
        '急诊科（严重低血糖、酮症酸中毒或意识改变时）',
        '妇科/生殖内分泌科（高雄激素或月经问题明显时）',
      ],
      diagnosisChecklist: [
        '整理血糖记录、连续血糖监测资料、用药和低血糖发作时间线。',
        '带上空腹/餐后血糖、HbA1c、胰岛素、C 肽、血脂和既往糖尿病治疗记录。',
        '记录黑棘皮征、高雄激素表现、体重变化和自身免疫病诊断史。',
        '向医生确认是否需要胰岛素受体自身抗体检测，或转诊到具备检测/会诊能力的中心。',
        '排除其他严重胰岛素抵抗综合征、胰岛素自身免疫综合征、胰岛素瘤和药物相关低血糖。',
      ],
      testsToAskAbout: [
        '血糖谱、HbA1c、胰岛素和 C 肽，用于判断血糖波动和胰岛素分泌背景。',
        '自身免疫抗体谱及风湿免疫评估。',
        '胰岛素受体自身抗体检测是否可及，以及结果如何解释。',
        '低血糖发作时同步采血评估，帮助区分不同低血糖原因。',
        '血脂、肝肾功能、尿酮/血酮等代谢安全指标。',
        '必要时排查胰腺占位、脂肪萎缩或其他罕见胰岛素抵抗综合征。',
      ],
      questionsForDoctor: [
        '我的血糖异常更像普通糖尿病，还是需要考虑 B 型胰岛素抵抗？',
        '目前最主要风险是高血糖、低血糖，还是两者交替？我该如何记录和应对？',
        '是否需要风湿免疫科评估潜在自身免疫病？',
        '是否有途径检测胰岛素受体自身抗体？如果检测不到，诊断依据是什么？',
        '治疗目标是短期保护血糖安全，还是长期控制自身免疫活动？',
        '哪些情况需要急诊处理，而不是在家观察？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>自身免疫性胰岛素受体病的表现可以很不稳定。常见线索包括难以控制的高血糖、明显口渴多尿、体重下降、黑棘皮征，也可出现自发性或反复低血糖。部分女性会有多毛、痤疮、月经稀发等高雄激素表现。许多患者同时存在系统性红斑狼疮或其他自身免疫病。</p>',
      diagnosis:
        '<p>诊断需要把临床表现、血糖资料、胰岛素/C 肽、血脂、低血糖发作时检查和自身免疫背景放在一起判断。胰岛素受体自身抗体阳性支持诊断，但该检测并非所有医院都能常规开展，因此有时需要由专科中心结合概率性证据判断。</p><p>鉴别诊断包括常见糖尿病、其他严重胰岛素抵抗综合征、脂肪萎缩、胰岛素自身免疫综合征、胰岛素瘤、药物相关低血糖和内分泌危象等。</p>',
      treatment:
        '<p>治疗通常分为两条线：一是保护血糖安全，预防严重高血糖、酮症酸中毒和低血糖；二是评估并控制自身免疫活动。免疫相关治疗、降糖治疗和低血糖处理都需要根据个体情况动态调整，不能照搬病例报道中的药物或剂量。</p>',
      longTermCare:
        '<p>长期管理需要规律记录血糖、低血糖事件、用药变化和自身免疫病活动度。病情缓解后仍需警惕复发或治疗减量后的血糖波动。患者应与医生确认低血糖处理方案、急诊就医标准和随访频率。</p>',
      fertilityOrFamily:
        '<p>本病通常不是遗传性胰岛素受体缺陷。育龄期女性若有月经、高雄激素或生育计划，需要由内分泌科、风湿免疫科和妇产/生殖医学团队共同评估。妊娠相关用药和血糖目标需要个体化制定。</p>',
      emergencySigns:
        '<p>反复或严重低血糖、意识模糊、抽搐、血糖极高伴脱水或酮症、恶心呕吐、腹痛、呼吸异常、感染后血糖失控，或自身免疫病明显加重时，应尽快急诊就医，并主动告知医生疑似或确诊 B 型胰岛素抵抗。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会：第一批罕见病目录',
        type: 'policy',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: 'Orphanet: Insulin-resistance syndrome type B',
        type: 'official',
        url: 'https://www.orpha.net/en/disease/detail/2298',
      },
      {
        name: 'Endocrine Society: Type B Insulin Resistance',
        type: 'official',
        url: 'https://www.endocrine.org/patient-engagement/endocrine-library/type-b-insulin-resistance',
      },
      {
        name: 'Type B insulin resistance syndrome: a systematic review',
        type: 'review',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32813762/',
      },
    ],
    symptoms:
      '<p>可表现为极端胰岛素抵抗、高血糖、黑棘皮征、反复低血糖和自身免疫病相关症状。</p>',
    diagnosis:
      '<p>评估通常包括血糖谱、胰岛素/C 肽、自身免疫评估、低血糖发作时同步检查，并在条件允许时检测胰岛素受体自身抗体。</p>',
    treatment:
      '<p>治疗需要内分泌科和风湿免疫科共同管理，重点是血糖安全、低血糖预防和自身免疫活动控制。</p>',
    prognosis:
      '<p>病程差异大，部分患者可缓解，也可能复发。持续随访和明确低血糖/高血糖急诊标准很重要。</p>',
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
  };

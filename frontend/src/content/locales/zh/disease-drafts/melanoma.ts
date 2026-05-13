import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMelanoma: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      '黑色素瘤不只长在普通“痣”上，也可能出现在脚底、手掌、指甲、口鼻腔、生殖道、肛周或眼部。可疑病灶应尽快由皮肤科或肿瘤团队评估。',
    whoToSeeFirst:
      '皮肤或甲部可疑病灶通常先看皮肤科；口鼻、生殖道、肛周或眼部病灶应到对应专科，并尽快取得病理诊断。',
    isGenetic:
      '多数不是遗传病；若家族中多例黑色素瘤、胰腺癌或很早发病，可咨询 CDKN2A 等遗传易感评估。',
    hasTreatment:
      '早期以完整切除为核心。高风险或晚期患者可能需要免疫治疗、靶向治疗、放疗、临床试验和长期随访。',
    commonDelayReason:
      '病灶可能被当作普通痣、灰指甲、外伤瘀斑、足底老茧或口腔溃疡；在没有病理前做激光、冷冻或美容祛痣可能延误诊断。',
  },
  patientJourney: {
    whenToSuspect: [
      '痣或色素斑出现不对称、边界不规则、颜色不均、直径增大或近期变化，也就是 ABCDE 线索。',
      '出现“和身上其他痣不一样”的孤立病灶，或短期内出血、破溃、瘙痒、疼痛、隆起。',
      '脚底、手掌、甲下黑线、甲周色素外溢，或口鼻腔、生殖道、肛周出现不明色素或肿块。',
      '既往切除过黑色素瘤，或家族中有黑色素瘤、胰腺癌等聚集。',
    ],
    commonWrongTurns: [
      '在病理诊断前先做激光、冷冻、点痣或腐蚀性外用药，导致组织无法准确评估。',
      '把甲下黑线长期当作灰指甲或外伤，不做皮肤镜和必要活检。',
      '只切掉表面可见病灶，没有报告 Breslow 厚度、溃疡、切缘和分期信息。',
    ],
    firstDepartments: [
      '皮肤科',
      '肿瘤外科或黑色素瘤专病门诊',
      '眼科',
      '耳鼻喉科、口腔科、妇科或肛肠科（按病灶部位）',
    ],
    diagnosisChecklist: [
      '拍照记录病灶大小、颜色、形状和变化时间，不要自行处理可疑病灶。',
      '带既往皮肤镜照片、活检或切除病理、免疫组化、分子检测和影像报告。',
      '整理日晒、晒伤、免疫抑制、家族肿瘤史和既往皮肤癌史。',
      '若是甲、足底或黏膜病灶，记录是否有外伤史、出血、疼痛和增长速度。',
    ],
    testsToAskAbout: [
      '皮肤镜检查和规范活检或切除活检，避免破坏性治疗替代病理。',
      '病理报告中的 Breslow 厚度、溃疡、切缘、分裂象和是否需要前哨淋巴结活检。',
      '分期所需的淋巴结评估、超声、CT、PET-CT 或脑 MRI。',
      '晚期或高风险病例的 BRAF、NRAS、KIT、NTRK 等分子检测，以指导靶向或临床试验选择。',
    ],
    questionsForDoctor: [
      '我的病灶属于原位、早期、区域淋巴结受累还是转移性黑色素瘤？',
      '切缘是否足够？是否需要扩大切除或前哨淋巴结活检？',
      '我是否需要免疫治疗、靶向治疗、放疗或辅助治疗？',
      '随访时我应该自己检查哪些部位，多久做皮肤、淋巴结和影像复查？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>皮肤黑色素瘤常表现为新出现或原有痣发生变化的色素性病灶。ABCDE 线索包括不对称、边界不规则、颜色不均、直径增大和持续变化；“丑小鸭征”也很有用，即某个痣明显不同于身上其他痣。</p><p>亚洲人群要特别留意足底、手掌、甲下和黏膜部位。甲下黑色素瘤可表现为逐渐变宽的黑线、甲变形、出血或色素越过甲皱襞。黏膜黑色素瘤可能表现为鼻出血、口腔色素斑、肛周出血或生殖道异常病灶。</p>',
    diagnosis:
      '<p>可疑病灶应优先保留组织做病理，不建议先激光、冷冻或腐蚀性去除。医生会根据部位选择切除活检或规范活检，病理报告应提供 Breslow 厚度、是否溃疡、切缘、分裂象和免疫组化等信息。</p><p>分期会评估局部病灶、淋巴结和远处转移风险。一定厚度或高风险病灶可能需要前哨淋巴结活检。晚期、复发或高风险病例常需 BRAF、NRAS、KIT、NTRK 等检测，以帮助选择靶向治疗或临床试验。</p>',
    treatment:
      '<p>早期黑色素瘤的基础治疗是按标准切缘完整切除。根据厚度、溃疡、淋巴结和分期，可能需要扩大切除、前哨淋巴结活检、辅助免疫治疗或靶向治疗。</p><p>晚期黑色素瘤治疗已从单纯化疗转向免疫检查点抑制剂、BRAF/MEK 靶向治疗、KIT 相关治疗、局部治疗、放疗和临床试验的综合策略。黏膜、肢端和眼部黑色素瘤的治疗路径可能不同，应由专病团队评估。</p>',
    longTermCare:
      '<p>随访包括皮肤和黏膜自查、淋巴结触诊、医生全身皮肤检查、影像或实验室检查。患者应学习记录新发或变化病灶，避免过度日晒，并告知医生免疫治疗可能出现的腹泻、皮疹、内分泌异常、咳嗽或肝功能异常等副作用。</p>',
    fertilityOrFamily:
      '<p>大多数黑色素瘤没有明确遗传原因。若个人或家族中多发黑色素瘤、黑色素瘤合并胰腺癌、很年轻发病或多原发肿瘤，可咨询遗传门诊评估 CDKN2A 等易感基因。育龄患者在系统治疗前应询问生育力保护和妊娠安排。</p>',
    emergencySigns:
      '<p>病灶快速出血不止、感染疼痛明显、突发神经症状、呼吸困难、剧烈头痛、骨痛或免疫治疗期间出现严重腹泻、黄疸、气促、意识改变，应及时急诊或联系肿瘤团队。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Melanoma Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/skin/patient/melanoma-treatment-pdq',
    },
    {
      name: 'MedlinePlus: Melanoma',
      type: 'official',
      url: 'https://medlineplus.gov/melanoma.html',
    },
  ],
  symptoms:
    '<p>可表现为新发或变化的色素病灶，符合 ABCDE 线索，或发生在脚底、手掌、甲下、黏膜和眼部的异常色素、肿块、出血或破溃。</p>',
  diagnosis:
    '<p>诊断依靠规范活检或切除后的病理，结合 Breslow 厚度、溃疡、切缘、前哨淋巴结和分子检测完成分期与治疗决策。</p>',
  treatment:
    '<p>早期以手术切除为主；高风险或晚期可使用免疫治疗、靶向治疗、放疗、局部治疗和临床试验等综合方案。</p>',
  prognosis:
    '<p>越早发现并完整切除，预后越好；厚度、溃疡、淋巴结、转移情况、部位和分子特征都会影响复发风险和治疗选择。</p>',
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
};

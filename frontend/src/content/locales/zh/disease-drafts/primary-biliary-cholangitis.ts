import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePrimaryBiliaryCholangitis: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      'PBC 不是酒精或病毒引起的肝病。小胆管受免疫攻击后，胆汁排出受阻，长期可发展为纤维化、肝硬化和门静脉高压。',
    whoToSeeFirst:
      '体检发现 ALP/GGT 持续升高、AMA 阳性、长期瘙痒或不明原因疲劳，应到肝病科或消化肝病门诊。',
    isGenetic:
      'PBC 有遗传易感和环境触发因素，但不是单基因遗传病。一级亲属风险略高，但是否筛查由医生结合症状和肝功决定。',
    hasTreatment:
      '熊去氧胆酸是基础治疗，早期应答好的人预后较好；应答不佳或不耐受时可评估二线药物、瘙痒治疗和肝移植时机。',
    commonDelayReason:
      '很多人早期无症状，或只被当作脂肪肝、皮肤瘙痒、过敏、疲劳综合征；如果没有查 ALP、GGT、AMA 和排除胆道梗阻，容易延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '碱性磷酸酶（ALP）和 GGT 持续升高，尤其伴抗线粒体抗体（AMA）阳性。',
      '长期皮肤瘙痒、疲劳、眼干口干、右上腹不适或高胆固醇。',
      '合并干燥综合征、甲状腺病、系统性硬化症等自身免疫病。',
      '出现黄疸、腹水、下肢水肿、呕血黑便或意识改变，提示晚期并发症。',
    ],
    commonWrongTurns: [
      '只按脂肪肝或胆囊问题观察，没有关注胆汁淤积型肝酶模式。',
      '瘙痒长期只看皮肤科，没有检查肝胆指标和 AMA。',
      '吃保肝药代替规范 UDCA，并且没有评估 6-12 个月生化应答。',
    ],
    firstDepartments: [
      '肝病科',
      '消化内科',
      '风湿免疫科（合并自身免疫病时）',
      '肝移植中心（晚期时）',
    ],
    diagnosisChecklist: [
      '带连续肝功：ALP、GGT、ALT/AST、胆红素、白蛋白、凝血和血小板。',
      '带 AMA、ANA、IgM、病毒性肝炎、自身免疫肝炎相关抗体结果。',
      '带肝胆超声、MRCP 或其他影像，以排除胆道梗阻和原发性硬化性胆管炎。',
      '记录瘙痒、疲劳、眼干口干、骨痛、骨折、月经/妊娠和用药补充剂史。',
    ],
    testsToAskAbout: [
      'AMA 或 PBC 特异性 ANA，IgM 和胆汁淤积型肝酶评估。',
      '肝脏弹性成像或无创纤维化评估，必要时肝活检。',
      'UDCA 治疗 6-12 个月后如何判断应答，是否需要二线治疗。',
      '骨密度、脂溶性维生素、甲状腺、干燥综合征和肝硬化并发症筛查。',
    ],
    questionsForDoctor: [
      '我的诊断是否符合 PBC？是否需要排除自身免疫肝炎重叠或胆道梗阻？',
      'UDCA 剂量是否按体重足量？多久复查 ALP、胆红素和风险评分？',
      '瘙痒和疲劳怎么处理？我是否需要二线药物或临床试验？',
      '我有没有肝硬化或门静脉高压？什么时候需要肝移植评估？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PBC 早期可以完全没有症状，只是在体检中发现 ALP、GGT 升高。常见症状是疲劳和皮肤瘙痒，瘙痒可夜间明显，影响睡眠和情绪。还可有眼干口干、右上腹不适、关节痛和高胆固醇。</p><p>进展后可出现皮肤色素加深、黄疸、脂肪泻、骨质疏松、腹水、下肢水肿、食管胃静脉曲张出血和肝性脑病等肝硬化表现。</p>',
    diagnosis:
      '<p>典型诊断基于胆汁淤积型肝酶升高、AMA 或 PBC 特异性自身抗体阳性，并排除胆道梗阻。腹部超声或 MRCP 可帮助排除结石、肿瘤、胆管狭窄和原发性硬化性胆管炎。</p><p>肝活检不是每个人都需要，但在 AMA 阴性、疑似自身免疫肝炎重叠、诊断不清或需要评估炎症和纤维化时有价值。风险评估通常结合 ALP、胆红素、白蛋白、血小板、肝硬度和治疗应答。</p>',
    treatment:
      '<p>熊去氧胆酸（UDCA）是基础治疗，应按体重足量、长期服用。治疗后 6-12 个月的 ALP 和胆红素应答能帮助判断长期风险。不要用普通“保肝药”替代 UDCA。</p><p>UDCA 应答不佳或不耐受时，可由肝病医生评估 obeticholic acid、贝特类或其他二线方案的适用性和禁忌。瘙痒可用胆汁酸螯合剂、利福平、阿片受体拮抗剂或其他方案。晚期肝病、难治性瘙痒或失代偿时需评估肝移植。</p>',
    longTermCare:
      '<p>长期随访包括肝功、胆红素、白蛋白、凝血、血小板、肝脏弹性、超声和肝硬化并发症筛查。已肝硬化者需监测肝癌和静脉曲张。</p><p>还要关注骨质疏松、脂溶性维生素缺乏、甲状腺病、干燥综合征、疲劳、瘙痒和心理压力。避免过量饮酒，接种合适的肝炎疫苗，并在用药前确认肝毒性风险。</p>',
    fertilityOrFamily:
      '<p>PBC 不是单基因遗传病。一级亲属若有瘙痒、疲劳或肝酶异常，可咨询是否查肝功和 AMA。妊娠前应与肝病和产科医生讨论病情稳定性、用药和胆汁淤积监测。</p>',
    emergencySigns:
      '<p>出现呕血黑便、腹水快速增多、黄疸明显加重、发热腹痛、意识改变、严重嗜睡、尿少或无法控制的瘙痒影响进食睡眠，应尽快就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Primary Biliary Cholangitis',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/primary-biliary-cholangitis',
    },
    {
      name: 'AASLD: Primary Biliary Cholangitis Practice Guidance',
      type: 'clinical-guideline',
      url: 'https://www.aasld.org/practice-guidelines/primary-biliary-cholangitis',
    },
  ],
  symptoms:
    '<p>早期可无症状，常见疲劳、皮肤瘙痒、眼干口干、右上腹不适、关节痛和胆汁淤积；晚期可出现黄疸、腹水、静脉曲张出血和肝性脑病。</p>',
  diagnosis:
    '<p>诊断结合 ALP/GGT 持续升高、AMA 或 PBC 特异性 ANA、IgM、影像排除胆道梗阻，必要时肝活检和纤维化评估。</p>',
  treatment:
    '<p>治疗以足量熊去氧胆酸为基础，并按 6-12 个月生化应答调整；应答不佳可评估二线药物、瘙痒治疗和晚期肝病移植时机。</p>',
  prognosis:
    '<p>早期诊断且 UDCA 应答好的患者预后较好；胆红素升高、ALP 持续高、肝硬化或失代偿提示更高风险。</p>',
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
};

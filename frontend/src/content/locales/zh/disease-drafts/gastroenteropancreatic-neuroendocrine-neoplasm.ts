import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGastroenteropancreaticNeuroendocrineNeoplasm: DiseaseDraft =
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
    quickLook: {
      whatItIs:
        'GEP-NEN 包括胃、肠、阑尾、直肠和胰腺来源的神经内分泌肿瘤。医生会看肿瘤部位、分化程度、Ki-67/核分裂指数、是否转移，以及是否有激素综合征来制定方案。',
      whoToSeeFirst:
        '内镜、影像或病理提示神经内分泌肿瘤，应尽快到肿瘤内科、胃肠外科/胰腺外科和病理科经验较多的中心做多学科评估。',
      isGenetic:
        '大多数为散发。若年轻发病、多灶胰腺 NET、甲旁亢/垂体瘤或家族史明显，需要评估 MEN1、VHL、NF1 等遗传综合征。',
      hasTreatment:
        '治疗可包括手术、内镜或消融、长效生长抑素类似物、靶向治疗、肽受体放射性核素治疗、化疗和肝转移局部治疗，取决于分级、范围和症状。',
      commonDelayReason:
        '无功能性肿瘤常早期无症状；功能性肿瘤可能被当作肠易激、胃溃疡、低血糖、围绝经期潮热或过敏反应。保存病理和影像原始资料很重要。',
    },
    patientJourney: {
      whenToSuspect: [
        '反复潮红、腹泻、喘鸣、低血糖发作、难治性胃溃疡或不明原因腹痛体重下降。',
        '内镜或影像发现胃肠道、胰腺、肝脏结节，病理提示 synaptophysin、chromogranin A 等神经内分泌标志物阳性。',
        '肿瘤病程看似慢，但反复转移、复发或激素相关症状影响生活。',
        '合并甲状旁腺、垂体、胰腺多发肿瘤或明确家族史。',
      ],
      commonWrongTurns: [
        '只按普通胃肠炎、肠易激或胃溃疡治疗，没有追踪反复激素样症状。',
        '只拿到“神经内分泌肿瘤”结论，没有确认分化、分级、Ki-67 和原发部位。',
        '转院时缺少病理切片、免疫组化、影像 DICOM 和手术记录，导致重复检查。',
        '把肝转移当成普通肝癌处理，未回看原发部位和神经内分泌标志物。',
      ],
      firstDepartments: [
        '肿瘤内科',
        '胃肠外科/胰腺外科',
        '消化内科',
        '病理科/分子诊断门诊',
      ],
      diagnosisChecklist: [
        '带齐内镜、增强 CT/MRI、PET 或生长抑素受体显像、病理和免疫组化报告。',
        '记录潮红、腹泻、低血糖、溃疡、喘鸣、体重变化和用药反应。',
        '整理 Ki-67、分化程度、核分裂数、肝转移情况和既往手术/治疗记录。',
        '如怀疑遗传综合征，整理家族中甲旁亢、垂体瘤、胰腺肿瘤和相关基因报告。',
      ],
      testsToAskAbout: [
        '病理复核：分化程度、NET/NEC 分类、Ki-67、核分裂数和免疫组化标志物。',
        '分期和受体评估：增强 CT/MRI、内镜超声、生长抑素受体 PET/CT 或其他核医学检查。',
        '按症状选择激素检查，如 5-HIAA、胃泌素、胰岛素/C 肽、胰高糖素等。',
        '是否需要 MEN1、VHL、NF1 等遗传综合征评估。',
      ],
      questionsForDoctor: [
        '这是 NET 还是 NEC？分级、Ki-67 和原发部位是什么？',
        '目前目标是根治、长期控制、缓解激素症状，还是减少肿瘤负荷？',
        '我是否适合手术、长效生长抑素类似物、PRRT、靶向治疗或化疗？',
        '复查用哪些影像和指标？多久评估一次进展？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>GEP-NEN 可无症状，也可因肿瘤位置造成腹痛、消化道出血、梗阻、黄疸或体重下降。功能性肿瘤可分泌激素，引起潮红、腹泻、低血糖、反复胃溃疡、皮疹、喘鸣或电解质异常。</p><p>部分患者首先因肝转移、偶然体检结节或内镜小病灶被发现。症状轻重与肿瘤大小、部位、分化程度、转移范围和激素分泌有关。</p>',
      diagnosis:
        '<p>确诊依赖病理和免疫组化，并需明确 NET/NEC、分化程度、Ki-67 指数和核分裂数。影像和内镜用于寻找原发灶、分期和判断能否局部治疗。</p><p>医生会与胃肠道腺癌、胰腺癌、肝癌、淋巴瘤、炎症性疾病和其他产生相似激素症状的疾病鉴别。疑似功能性肿瘤时，激素和代谢指标可帮助解释症状。</p>',
      treatment:
        '<p>局限病灶可考虑手术或内镜/局部治疗。进展性或转移性疾病可根据受体表达、分级和病程选择长效生长抑素类似物、靶向治疗、PRRT、化疗、肝转移局部治疗或临床研究。</p><p>功能性肿瘤还需要控制激素综合征，如腹泻、低血糖或胃酸过多。治疗计划通常需要肿瘤、外科、消化、影像、核医学和病理多学科共同决定。</p>',
      longTermCare:
        '<p>长期随访关注肿瘤进展、激素症状、营养、胆囊/血糖/肝功能、治疗副作用和心理支持。患者应保存病理切片信息、影像 DICOM、基因或分子检测结果和每次治疗时间线。</p>',
      fertilityOrFamily:
        '<p>多数 GEP-NEN 不是遗传病。若表现提示 MEN1、VHL、NF1 或其他综合征，应做遗传咨询；明确综合征后，亲属筛查和生育规划需要按具体基因结果讨论。</p>',
      emergencySigns:
        '<p>大量消化道出血、黑便伴头晕、肠梗阻样腹痛呕吐、严重低血糖、持续腹泻脱水、黄疸快速加重、感染发热或治疗后严重不良反应，应立即就医。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'NCI: Gastrointestinal Neuroendocrine Tumors Treatment (Patient Version)',
        type: 'official',
        url: 'https://www.cancer.gov/types/gi-neuroendocrine-tumors/patient/gi-neuroendocrine-treatment-pdq',
      },
      {
        name: 'NCI: Pancreatic Neuroendocrine Tumors Treatment (Patient Version)',
        type: 'official',
        url: 'https://www.cancer.gov/types/pancreatic/patient/pnet-treatment-pdq',
      },
    ],
    symptoms:
      '<p>可无症状，也可有腹痛、出血、梗阻、黄疸、体重下降；功能性肿瘤可引起潮红、腹泻、低血糖、难治性溃疡或喘鸣。</p>',
    diagnosis:
      '<p>诊断依赖组织病理、免疫组化、Ki-67/分级、影像分期和必要的激素检测；部分患者需评估 MEN1 等遗传综合征。</p>',
    treatment:
      '<p>治疗包括手术或内镜局部治疗、长效生长抑素类似物、靶向治疗、PRRT、化疗、肝转移局部治疗和激素症状控制。</p>',
    prognosis:
      '<p>预后差异很大，主要取决于原发部位、分化和分级、Ki-67、转移范围、是否有功能性症状以及可用治疗方案。</p>',
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
  };

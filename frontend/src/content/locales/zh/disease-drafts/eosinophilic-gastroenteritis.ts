import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseEosinophilicGastroenteritis: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      '这类疾病属于嗜酸性胃肠道疾病，问题不在食管而在胃、小肠、结肠或多部位。症状取决于受累部位和肠壁层次：黏膜型偏腹泻吸收不良，肌层型可梗阻，浆膜型可腹水。',
    whoToSeeFirst:
      '长期反复腹痛、腹泻、恶心呕吐、体重下降或低蛋白水肿，应看消化内科/儿科消化；有过敏病史或外周嗜酸细胞增多时更应提示医生。',
    isGenetic:
      '通常不是单基因遗传病。它可能与过敏体质、免疫反应、食物触发有关，但确诊前必须排除寄生虫、药物、炎症性肠病、肿瘤和高嗜酸综合征等继发原因。',
    hasTreatment:
      '治疗常包括营养和饮食管理、糖皮质激素，以及按病情选择抗过敏、免疫或生物制剂方案。需要通过症状、化验、内镜和活检共同评估疗效。',
    commonDelayReason:
      '症状像胃炎、肠易激、食物不耐受、炎症性肠病或寄生虫感染；如果内镜活检取样不足或没有排除继发原因，诊断会延迟。',
  },
  patientJourney: {
    whenToSuspect: [
      '腹痛、恶心、呕吐、腹泻、腹胀、早饱或体重下降反复出现，常规治疗后仍反复。',
      '有外周嗜酸细胞升高、IgE 升高、过敏性鼻炎、哮喘、湿疹或食物过敏史。',
      '出现低蛋白血症、水肿、贫血、营养不良，或影像提示肠壁增厚/腹水。',
      '胃肠镜活检提示嗜酸性粒细胞增多，但感染、药物和其他疾病解释不充分。',
    ],
    commonWrongTurns: [
      '只按普通胃炎、肠易激或食物不耐受处理，没有做多点活检。',
      '看到嗜酸细胞增多就直接下诊断，没有排除寄生虫、药物、肿瘤和系统性疾病。',
      '自行长期严格忌口，导致营养不良，却没有营养师和复查活检支持。',
      '症状缓解后不复查，忽略复发、激素副作用或营养问题。',
    ],
    firstDepartments: ['消化内科', '儿科消化科', '变态反应/免疫科', '营养科'],
    diagnosisChecklist: [
      '记录症状、饮食、过敏史、药物、旅行/寄生虫暴露和体重变化。',
      '带齐血常规嗜酸细胞、IgE、白蛋白、铁蛋白、粪便检查、炎症指标和影像资料。',
      '带胃肠镜报告、每个部位活检病理和既往治疗反应。',
      '记录是否有哮喘、鼻炎、湿疹、食物过敏或家族过敏史。',
    ],
    testsToAskAbout: [
      '胃镜/肠镜多部位活检，病理报告中注明嗜酸性粒细胞浸润部位和程度。',
      '血常规、嗜酸细胞计数、IgE、白蛋白、肝肾功能、铁和维生素营养评估。',
      '寄生虫、感染、药物反应、炎症性肠病、结缔组织病、肿瘤和高嗜酸综合征排查。',
      '必要时腹部超声/CT/MRI、腹水检查或过敏/营养评估。',
    ],
    questionsForDoctor: [
      '我的病变主要在胃、小肠还是结肠？属于黏膜、肌层还是浆膜受累？',
      '是否已经排除寄生虫、药物、IBD、肿瘤和高嗜酸综合征？',
      '饮食治疗需要排除哪些食物？怎么避免营养不良？',
      '是否需要激素或其他药物？疗效和副作用怎么监测？',
      '复发时如何判断，多久复查内镜或化验？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>EoGE 的表现取决于受累部位和深度。黏膜受累常见腹痛、恶心、呕吐、腹泻、便血、贫血、低蛋白血症和营养吸收差；肌层受累可出现肠壁增厚、梗阻样腹痛和呕吐；浆膜受累可出现腹水和腹胀。</p><p>不少患者有过敏性鼻炎、哮喘、湿疹或食物过敏史，也可能外周血嗜酸细胞升高。症状可反复发作，轻重波动。</p>',
    diagnosis:
      '<p>诊断需要三部分证据：持续或反复的胃肠道症状、胃肠道组织中嗜酸性粒细胞异常浸润，以及排除其他继发原因。内镜外观看起来可能不特异，因此多部位活检很重要。</p><p>必须排除寄生虫和其他感染、药物反应、炎症性肠病、乳糜泻、结缔组织病、血液肿瘤、淋巴瘤和高嗜酸综合征等。单纯外周血嗜酸细胞升高不能直接确诊。</p>',
    treatment:
      '<p>治疗目标是缓解症状、改善营养、降低组织炎症并减少复发。常用方案包括饮食管理、营养支持和糖皮质激素；部分患者可评估抗过敏药、白三烯受体拮抗剂、免疫调节或生物制剂。</p><p>饮食排除应在医生和营养师指导下进行，避免不必要的长期严格忌口。复查可包括症状、体重、血液指标、白蛋白、内镜和活检。</p>',
    longTermCare:
      '<p>长期管理关注复发、营养状态、儿童生长发育、激素副作用、贫血和低蛋白血症。患者可记录饮食、症状、用药和体重变化，帮助医生判断触发因素和疗效。</p>',
    fertilityOrFamily:
      '<p>EoGE 通常不是单基因遗传病，家属一般不需要遗传筛查。但过敏体质可能在家庭中聚集，儿童患者可与过敏/免疫专科共同管理。</p>',
    emergencySigns:
      '<p>严重腹痛伴持续呕吐、不能进食饮水、明显脱水、黑便或大量便血、腹胀进行性加重、疑似肠梗阻、发热伴腹膜刺激征或严重水肿气促，应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Eosinophilic gastroenteritis',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/9142/eosinophilic-gastroenteritis',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Eosinophilic Gastroenteritis',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK547729/',
    },
  ],
  symptoms:
    '<p>可有反复腹痛、恶心呕吐、腹泻、体重下降、贫血、低蛋白水肿、肠梗阻样表现或腹水，常伴过敏史或嗜酸细胞升高。</p>',
  diagnosis:
    '<p>诊断依靠胃肠道症状、多部位活检提示嗜酸性粒细胞浸润，并排除寄生虫、药物、IBD、肿瘤和高嗜酸综合征等继发原因。</p>',
  treatment:
    '<p>治疗包括营养和饮食管理、糖皮质激素，部分患者可用抗过敏、免疫调节或生物制剂，并通过症状、化验和内镜/活检评估疗效。</p>',
  prognosis:
    '<p>多数不是急性致命病，但容易复发和延迟诊断；规范排除继发原因、控制炎症和维护营养可改善长期生活质量。</p>',
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
};

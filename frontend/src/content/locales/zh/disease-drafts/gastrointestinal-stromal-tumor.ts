import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGastrointestinalStromalTumor: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      'GIST 多发生在胃和小肠，也可见于其他消化道部位。它不同于胃癌或肠癌，常需用 CD117/DOG1 免疫组化和 KIT/PDGFRA 分子检测来指导治疗。',
    whoToSeeFirst:
      '发现胃肠道黏膜下肿物、腹部包块、消化道出血或病理提示 GIST，应到胃肠外科、肿瘤内科和病理分子诊断团队评估。',
    isGenetic:
      '多数为散发，不是家族遗传病。年轻发病、多发 GIST、家族史或伴皮肤色素/副神经节瘤等线索时，要评估 SDH、NF1 或家族性 GIST。',
    hasTreatment:
      '局限可切除病灶以手术为主；高复发风险或转移/复发患者常用酪氨酸激酶抑制剂，如伊马替尼及后线药物。PDGFRA D842V 等突变会影响用药选择。',
    commonDelayReason:
      '早期无特异症状，常因体检、内镜或出血偶然发现；有时被误认为普通胃息肉、平滑肌瘤、胃癌或消化性溃疡出血。',
  },
  patientJourney: {
    whenToSuspect: [
      '胃镜或影像发现黏膜下肿物、胃肠道壁内肿块或腹腔包块。',
      '不明原因黑便、呕血、贫血、腹痛、早饱、腹部肿块或肠梗阻表现。',
      '病理提示梭形细胞/上皮样肿瘤，CD117、DOG1 或 CD34 阳性。',
      '既往 GIST 术后出现肝脏或腹膜结节，或靶向药期间影像变化。',
    ],
    commonWrongTurns: [
      '只按胃炎、胃溃疡或贫血处理，未追踪出血来源。',
      '手术前没有评估肿瘤位置、破裂风险和是否需要新辅助靶向治疗。',
      '确诊后没有做 KIT/PDGFRA 等突变检测，导致靶向药选择不精准。',
      '术后只看“切干净了”，没有按风险分层制定复查和辅助治疗计划。',
    ],
    firstDepartments: [
      '胃肠外科',
      '肿瘤内科',
      '消化内科',
      '病理科/分子诊断门诊',
    ],
    diagnosisChecklist: [
      '带胃肠镜、超声内镜、增强 CT/MRI、PET 如有、病理和免疫组化报告。',
      '记录出血、贫血、腹痛、早饱、体重下降、梗阻和用药史。',
      '整理肿瘤大小、部位、核分裂数、是否破裂、切缘、转移情况和手术记录。',
      '带 KIT、PDGFRA、SDH、NF1 或其他分子检测报告。',
    ],
    testsToAskAbout: [
      '病理复核和免疫组化：CD117、DOG1、CD34、SDHB 等。',
      'KIT/PDGFRA 突变检测；野生型或年轻/多发病例询问 SDH、NF1、BRAF 等评估。',
      '增强 CT/MRI 用于分期和随访，必要时超声内镜评估胃肠道壁内病灶。',
      '复发风险分层：肿瘤大小、部位、核分裂数和是否破裂。',
    ],
    questionsForDoctor: [
      '我的 GIST 是局限、复发还是转移？风险分层属于哪一类？',
      '是否需要先用伊马替尼缩小肿瘤再手术？术后需要辅助治疗多久？',
      '突变结果对伊马替尼、阿伐替尼或其他后线药物有什么影响？',
      '复查频率和影像方式如何安排？哪些副作用需要及时报告？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GIST 早期常没有特异症状。常见线索包括黑便、呕血、缺铁性贫血、腹痛、早饱、恶心、腹部包块、肠梗阻或体检影像偶然发现。</p><p>肿瘤可发生于胃、小肠、结直肠、食管或腹腔相关部位。是否有症状取决于大小、部位、生长方向、出血和是否转移。</p>',
    diagnosis:
      '<p>确诊依靠组织病理、免疫组化和分子检测。CD117 和 DOG1 常用于支持诊断，KIT/PDGFRA 等突变检测能指导靶向治疗和判断耐药风险。</p><p>医生还会与胃肠道腺癌、淋巴瘤、平滑肌瘤/肉瘤、神经鞘瘤和其他腹腔肿瘤鉴别。分期和风险评估要结合大小、部位、核分裂数、破裂和转移。</p>',
    treatment:
      '<p>局限且可安全切除的 GIST 通常以完整手术切除为核心，尽量避免肿瘤破裂。较大、位置复杂或需要保器官时，可能先用伊马替尼等新辅助治疗。</p><p>高复发风险、复发或转移性 GIST 常需靶向治疗。药物选择和顺序取决于 KIT/PDGFRA 突变、既往用药、耐药情况和副作用。</p>',
    longTermCare:
      '<p>GIST 需要长期影像随访，因为复发可发生在肝脏或腹膜。患者应保存手术、病理、核分裂数、突变检测和靶向药剂量调整记录。</p><p>靶向治疗期间要监测水肿、皮疹、腹泻、恶心、肝功能、血象、心功能风险和药物相互作用。</p>',
    fertilityOrFamily:
      '<p>多数 GIST 为散发。若年轻、多发、家族成员也有 GIST，或伴 NF1、SDH 缺陷相关线索，应做遗传咨询。靶向药可能影响妊娠计划，用药期间需提前与医生讨论避孕和生育。</p>',
    emergencySigns:
      '<p>呕血、黑便伴头晕心慌、剧烈腹痛、肠梗阻、肿瘤破裂疑似腹腔出血、发热感染或靶向药严重过敏/肝损伤表现，应立即就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NCI: Gastrointestinal Stromal Tumors Treatment (Patient Version)',
      type: 'official',
      url: 'https://www.cancer.gov/types/soft-tissue-sarcoma/patient/gist-treatment-pdq',
    },
  ],
  symptoms:
    '<p>常见线索包括黑便、呕血、贫血、腹痛、早饱、腹部包块、肠梗阻或体检发现胃肠道壁内肿块。</p>',
  diagnosis:
    '<p>诊断依靠病理、CD117/DOG1 等免疫组化、KIT/PDGFRA 等分子检测，以及增强 CT/MRI 分期和复发风险评估。</p>',
  treatment:
    '<p>局限病灶以手术切除为主；高风险、复发或转移病例常需伊马替尼等酪氨酸激酶抑制剂，并按突变和耐药情况调整。</p>',
  prognosis:
    '<p>预后取决于大小、部位、核分裂数、是否破裂、转移情况和突变类型；规范手术、分子检测和靶向治疗显著改变了许多患者的病程。</p>',
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
};

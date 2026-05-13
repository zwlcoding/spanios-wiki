import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCastlemanDisease: DiseaseDraft = {
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
  quickLook: {
    whatItIs:
      'Castleman病不是单一疾病，而是一组有相似淋巴结病理改变的疾病。医生通常先判断是单中心型还是多中心型，再进一步区分 HHV-8 相关、特发性或其他相关情况。',
    whoToSeeFirst:
      '持续或进行性淋巴结肿大，可先到血液内科、淋巴瘤/血液病专科或外科评估活检；伴持续发热、盗汗、体重下降、明显乏力或水肿时建议尽快血液内科评估。',
    isGenetic:
      '通常不被视为典型遗传病。部分多中心型与 HHV-8 感染或免疫状态相关，特发性多中心型则需要排除感染、恶性肿瘤和自身免疫病等相似疾病。',
    hasTreatment:
      '有分型后的治疗和随访方案。单中心型常以局部处理为主；多中心型需要血液内科根据 HHV-8 状态、严重程度和器官受累制定药物或综合治疗。',
    commonDelayReason:
      '淋巴结肿大很容易先被当作感染、炎症或淋巴瘤；多中心型症状分散，可能在风湿免疫、感染、肾脏或肝病方向反复就诊后才做完整活检和分型。',
  },
  patientJourney: {
    whenToSuspect: [
      '单个区域的淋巴结无痛性增大，尤其持续存在、逐渐增大或影像提示胸腔/腹腔淋巴结肿大。',
      '多个区域淋巴结肿大，并伴发热、盗汗、体重下降、乏力或食欲下降。',
      '淋巴结肿大同时出现贫血、炎症指标升高、白蛋白降低、免疫球蛋白异常或肝脾肿大。',
      '出现水肿、胸腹水、肾功能异常、皮疹样改变或周围神经症状等多系统线索。',
      '既往被怀疑感染、风湿免疫病或淋巴瘤，但常规治疗解释不足或反复复发。',
    ],
    commonWrongTurns: [
      '长期按普通淋巴结炎或反应性增生处理，没有取得足够组织做病理。',
      '只做穿刺或影像检查，没有与医生讨论是否需要完整淋巴结活检。',
      '病理提示 Castleman 样改变后，没有继续区分单中心型、多中心型和 HHV-8 状态。',
      '多中心型只按自身免疫病、感染或肿瘤单一路径处理，未完成鉴别诊断。',
      '忽略贫血、低白蛋白、肾脏受累、胸腹水等提示病情活动或严重程度的线索。',
    ],
    firstDepartments: [
      '血液内科/淋巴瘤专科',
      '普通外科或胸外/普外相关专科（需要淋巴结活检或切除评估时）',
      '感染科（HIV、HHV-8 或其他感染鉴别时）',
      '风湿免疫科（自身免疫病鉴别或合并免疫表现时）',
      '肾内科/呼吸科/消化肝病科（出现相应器官受累时）',
    ],
    diagnosisChecklist: [
      '整理淋巴结肿大的部位、出现时间、增长速度、是否疼痛，以及发热、盗汗、体重变化等全身症状。',
      '带上超声、CT、PET-CT 等影像资料，以及血常规、炎症指标、肝肾功能、白蛋白、免疫球蛋白等化验。',
      '向医生确认现有病理标本是否足够，是否需要完整淋巴结切除活检。',
      '确认是否已排除淋巴瘤、感染性疾病和自身免疫病等相似疾病。',
      '询问是否需要检测 HHV-8、HIV，并评估肝脾、肾脏、胸腹水和神经系统受累。',
    ],
    testsToAskAbout: [
      '淋巴结活检病理和免疫组化，必要时由血液病理专家复核。',
      '全身影像评估淋巴结分布，例如增强 CT 或医生认为合适的 PET-CT。',
      '血常规、CRP/ESR、白蛋白、肝肾功能、免疫球蛋白和尿检。',
      'HHV-8、HIV、EBV 等感染相关检查。',
      '淋巴瘤、自身免疫病、POEMS 综合征等鉴别诊断相关检查。',
    ],
    questionsForDoctor: [
      '我的情况更像单中心型还是多中心型？证据来自影像、病理还是全身症状？',
      '病理标本是否足够排除淋巴瘤？是否需要会诊或复核？',
      '是否需要检测 HHV-8/HIV，结果会怎样影响治疗选择？',
      '目前有没有器官受累或重症风险线索，需要多快开始治疗？',
      '治疗后如何判断有效？需要多久复查影像和血液指标？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>单中心型 Castleman病通常表现为一个区域的淋巴结肿大，可能没有明显全身症状，也可能因肿块位置造成压迫不适。多中心型可累及多个淋巴结区域，并出现发热、盗汗、体重下降、乏力、贫血、肝脾肿大、水肿、胸腹水、肾脏或神经系统受累等表现。症状和严重程度差异很大。</p>',
    diagnosis:
      '<p>诊断核心是淋巴结病理，并结合影像、实验室检查和鉴别诊断。特发性多中心型的诊断尤其需要排除感染、恶性肿瘤和自身免疫病等相似情况。病理报告出现 Castleman 样改变后，还需要医生结合淋巴结分布、全身症状、HHV-8/HIV 状态和器官受累来完成分型。</p>',
    treatment:
      '<p>治疗取决于分型和严重程度。单中心型常由外科评估能否完整切除或局部处理；多中心型通常由血液内科根据 HHV-8 状态、炎症活动、器官受累和既往治疗选择靶向免疫治疗、抗病毒/抗感染相关处理、糖皮质激素、化疗或其他方案。患者不要自行按“淋巴结炎”或“肿瘤”经验治疗。</p>',
    longTermCare:
      '<p>随访重点包括淋巴结大小、全身症状、血常规、炎症指标、肝肾功能、白蛋白、尿检和影像变化。多中心型患者还需要监测感染风险、治疗副作用、器官受累和复发信号。保存病理切片/蜡块信息、影像光盘和关键化验结果，有助于复诊和会诊。</p>',
    fertilityOrFamily:
      '<p>Castleman病通常不是典型遗传病。备孕或妊娠相关问题主要取决于疾病活动度、器官受累和正在使用的治疗方案。有生育计划时，应提前与血液内科和产科讨论病情稳定性、用药安全性和复查安排。</p>',
    emergencySigns:
      '<p>出现呼吸困难、胸闷或吞咽困难等压迫症状，持续高热伴明显虚弱，快速加重的水肿或尿量减少，意识改变，严重贫血相关心悸气促，或淋巴结短期快速增大时，应尽快就医或急诊评估。</p>',
  },
  sources: [
    {
      name: 'NCI Dictionary: Castleman disease',
      type: 'official',
      url: 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/castleman-disease',
    },
    {
      name: 'Blood: International consensus diagnostic criteria for idiopathic multicentric Castleman disease',
      type: 'clinical-guideline',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28087540/',
    },
    {
      name: 'Blood: International consensus treatment guidelines for idiopathic multicentric Castleman disease',
      type: 'clinical-guideline',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30181172/',
    },
    {
      name: 'Mayo Clinic: Castleman disease diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/castleman-disease/diagnosis-treatment/drc-20543055',
    },
  ],
  symptoms:
    '<p>可表现为单一区域或多区域淋巴结肿大；多中心型还可能伴发热、盗汗、体重下降、贫血、水肿、肝脾肿大或器官受累。</p>',
  diagnosis:
    '<p>诊断依赖淋巴结病理，并结合影像、实验室检查、HHV-8/HIV 状态和对淋巴瘤、感染、自身免疫病的排除。</p>',
  treatment:
    '<p>单中心型常评估局部切除；多中心型需要血液内科按分型和严重程度制定靶向免疫治疗、抗感染相关处理或综合方案。</p>',
  prognosis:
    '<p>预后取决于单中心或多中心分型、HHV-8 状态、器官受累和治疗反应。规范分型和随访是减少误诊和复发风险的关键。</p>',
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
};

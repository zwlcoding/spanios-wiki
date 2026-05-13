import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSystemicMastocytosis: DiseaseDraft = {
  ...entity(2075, 'disease-systemic-mastocytosis'),
  name: '系统性肥大细胞增多症',
  nameEn: 'Systemic mastocytosis',
  alias: 'SM；系统性肥大细胞增多症；第二批罕见病目录第 75 项',
  oneSentence:
    '系统性肥大细胞增多症是一种肥大细胞在骨髓和其他器官异常聚集的罕见血液病，可导致潮红、瘙痒、腹泻、骨痛、过敏反应或器官受损。',
  plainName: '肥大细胞过多聚集，身体反复出现过敏样发作的血液病',
  prevalence:
    '已纳入中国第二批罕见病目录；MedlinePlus Genetics 估计全球约每 10,000-20,000 人 1 例，多数成人病例与获得性 KIT 变异有关。',
  quickLook: {
    whatItIs:
      '肥大细胞会释放组胺等介质。SM 中肥大细胞过多且异常聚集，触发后可出现类似过敏的全身症状，严重者也可影响肝脾、骨骼或血液系统。',
    whoToSeeFirst:
      '反复不明原因潮红、晕厥、低血压、腹泻腹痛、骨痛、色素性皮疹或过敏性休克，应到血液科、过敏免疫科或肥大细胞病专科评估。',
    isGenetic:
      '多数是后天获得性 KIT 体细胞变异，不是通常意义上的家族遗传病；少数家族性或儿童皮肤型需专科判断。',
    hasTreatment:
      '治疗包括识别诱因、随身肾上腺素、H1/H2 抗组胺药、白三烯拮抗剂、肥大细胞稳定剂、骨保护，以及进展型疾病的 KIT 靶向或细胞减灭治疗。',
    commonDelayReason:
      '症状横跨皮肤、胃肠、神经和心血管系统，常被分别诊断为过敏、肠易激、焦虑、晕厥或皮肤病，未查基础血清类胰蛋白酶和骨髓。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复潮红、瘙痒、荨麻疹样或色素性皮疹，摩擦或温度变化后加重。',
      '不明原因过敏性休克、低血压、晕厥，尤其被蜂蜇、药物、酒精、运动或手术诱发。',
      '慢性腹痛、腹泻、反酸、恶心，伴骨痛、骨质疏松或病理骨折。',
      '血清类胰蛋白酶持续升高，或骨髓检查提示异常肥大细胞。',
    ],
    commonWrongTurns: [
      '只按普通过敏处理，没有评估类胰蛋白酶、KIT D816V 和骨髓受累。',
      '只关注皮肤症状，漏掉骨质疏松、肝脾淋巴结、血细胞异常和相关血液肿瘤。',
      '没有制定麻醉、手术、造影、蜂蜇和急救用药预案。',
    ],
    firstDepartments: [
      '血液科',
      '过敏免疫科',
      '皮肤科',
      '骨质疏松/内分泌或消化科（按受累）',
    ],
    diagnosisChecklist: [
      '记录潮红、晕厥、腹泻、皮疹、骨痛、诱因和过敏性休克经过。',
      '带基础和发作期血清类胰蛋白酶、血常规、肝脾影像、骨密度和皮肤/骨髓病理。',
      '整理 KIT D816V 或其他 KIT 检测、流式免疫表型和合并血液病检查。',
    ],
    testsToAskAbout: [
      '是否符合 WHO/ICC 系统性肥大细胞增多症标准，属于惰性、冒烟型还是进展型。',
      '基础血清类胰蛋白酶、KIT D816V、骨髓活检和 CD25/CD2/CD30 表达是否需要。',
      '是否需要骨密度、肝脾淋巴结、胃肠道和相关血液肿瘤评估。',
    ],
    questionsForDoctor: [
      '我需要随身携带肾上腺素自动注射器吗？哪些诱因和药物要避免？',
      '手术、牙科、麻醉、造影或疫苗接种前需要怎样预处理？',
      '我的类型是否需要靶向治疗或只是控制介质症状和监测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>SM 的症状来自肥大细胞聚集和介质释放。常见潮红、瘙痒、皮疹、头痛、心悸、低血压、晕厥、鼻塞、喘息、腹痛、腹泻、恶心、反酸、疲劳、脑雾、焦虑和骨痛。</p><p>诱因可包括蜂蜇、酒精、温度变化、摩擦、运动、感染、情绪压力、手术麻醉和某些药物。严重时可发生过敏性休克、骨质疏松骨折、肝脾淋巴结受累、腹水或合并血液肿瘤。</p>',
    diagnosis:
      '<p>诊断通常需要基础血清类胰蛋白酶、KIT 变异检测、骨髓活检和异常肥大细胞免疫表型。皮肤病变、肝脾淋巴结、骨密度和胃肠道症状也会帮助分型。</p><p>医生会区分皮肤肥大细胞增多症、系统性肥大细胞增多症、肥大细胞活化综合征和普通过敏病。分型决定是惰性、冒烟型、进展型，还是合并其他血液肿瘤。</p>',
    treatment:
      '<p>基础治疗是识别和避免个人诱因，准备急救方案，许多患者需要携带肾上腺素。介质症状可用 H1/H2 抗组胺药、白三烯拮抗剂、色甘酸、质子泵抑制剂或止泻药等。</p><p>骨质疏松需补充和骨保护治疗。进展型或合并血液肿瘤者可能需要 midostaurin、avapritinib 等 KIT 通路靶向药或其他血液科治疗，需由专科评估。</p>',
    longTermCare:
      '<p>长期随访包括症状和诱因日志、过敏性休克风险、血清类胰蛋白酶、血常规、肝脾、骨密度、胃肠症状、药物副作用和生活质量。</p><p>患者应准备书面急救和围手术期计划，告知麻醉、牙科、急诊和其他医生自己的 SM 诊断和触发药物。</p>',
    fertilityOrFamily:
      '<p>成人 SM 多为获得性体细胞 KIT 变异，通常不按遗传病筛查家属。妊娠、手术或麻醉前应提前与血液科、过敏免疫科和相关团队制定诱因预防和急救计划。</p>',
    emergencySigns:
      '<p>喉头紧、喘息、低血压、晕厥、全身荨麻疹伴呼吸困难、严重腹痛呕吐、意识改变或使用肾上腺素后症状未缓解，应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Systemic mastocytosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/systemic-mastocytosis',
    },
    {
      name: 'Mayo Clinic: Systemic mastocytosis diagnosis and treatment',
      type: 'review',
      url: 'https://www.mayoclinic.org/diseases-conditions/systemic-mastocytosis/diagnosis-treatment/drc-20450478',
    },
  ],
  symptoms:
    '<p>可有潮红、瘙痒、皮疹、晕厥、低血压、腹痛腹泻、反酸、喘息、骨痛、疲劳、脑雾和过敏性休克，严重者器官受损。</p>',
  diagnosis:
    '<p>诊断结合血清类胰蛋白酶、KIT 变异、骨髓活检、肥大细胞免疫表型和器官受累评估，并区分 MCAS 和普通过敏。</p>',
  treatment:
    '<p>治疗包括避免诱因、携带肾上腺素、抗组胺和其他介质控制药、骨保护；进展型可评估 KIT 靶向或血液科治疗。</p>',
  prognosis:
    '<p>惰性系统性肥大细胞增多症多可长期管理；进展型、肥大细胞白血病或合并血液肿瘤预后更严峻，需要专科治疗。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  slug: 'systemic-mastocytosis',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 429,
    name: 'systemic-mastocytosis-journey.png',
    url: '/images/diseases/systemic-mastocytosis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

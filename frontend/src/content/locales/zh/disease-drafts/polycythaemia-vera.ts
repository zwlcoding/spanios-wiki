import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseasePolycythaemiaVera: DiseaseDraft = {
  ...entity(2062, 'disease-polycythaemia-vera'),
  name: '真性红细胞增多症',
  nameEn: 'Polycythaemia vera',
  alias: 'PV；真性红细胞增多症；第二批罕见病目录第 62 项',
  slug: 'polycythaemia-vera',
  oneSentence:
    '真性红细胞增多症是一种骨髓增殖性肿瘤，骨髓制造过多红细胞，常伴白细胞或血小板增多，使血液变稠并增加血栓风险。',
  plainName: '一种血细胞过多、容易血栓的慢性骨髓疾病',
  prevalence:
    '已纳入中国第二批罕见病目录；多见于中老年人，但也可发生在年轻人，需要与缺氧、吸烟、肺病等继发性红细胞增多区分。',
  quickLook: {
    whatItIs:
      'PV 属于慢性骨髓增殖性肿瘤。多数患者有 JAK2 变异，骨髓不按身体需要过度造血，红细胞压积升高是血栓风险管理的核心指标。',
    whoToSeeFirst:
      '血常规反复提示血红蛋白、红细胞压积升高，或伴血小板/白细胞增多、脾大、血栓，应到血液科评估。',
    isGenetic:
      'JAK2 多为后天获得性体细胞变异，不是通常意义上的家族遗传病；家属一般不需要常规筛查，除非有明显家族聚集。',
    hasTreatment:
      '治疗目标是减少血栓和出血风险、控制症状。常用放血、低剂量阿司匹林、控制心血管危险因素，高危者可加用羟基脲、干扰素或 JAK 抑制剂等。',
    commonDelayReason:
      '有些人没有症状，只在体检发现血红蛋白高；也有人被误认为普通血稠或高原/吸烟影响，未查 EPO、JAK2 和骨髓。',
  },
  patientJourney: {
    whenToSuspect: [
      '血红蛋白或红细胞压积反复升高，伴白细胞或血小板增多。',
      '洗热水澡后瘙痒、头痛、头晕、面色潮红、视物模糊、耳鸣或乏力。',
      '手脚灼痛发红、脾大、早饱、左上腹不适，或发生静脉/动脉血栓。',
      '年轻人出现不寻常部位血栓，如腹腔静脉、门静脉或脑静脉血栓。',
    ],
    commonWrongTurns: [
      '只说“血稠”并吃保健品，没有明确是真性还是继发性红细胞增多。',
      '反复放血但没有把红细胞压积控制目标、铁缺乏和血栓风险一起管理。',
      '只关注红细胞，忽略白细胞、血小板、脾脏、出血风险和向骨髓纤维化转化。',
    ],
    firstDepartments: [
      '血液科',
      '血栓门诊',
      '心血管内科（并发症或危险因素管理）',
      '急诊（疑似血栓或出血时）',
    ],
    diagnosisChecklist: [
      '带连续血常规、红细胞压积、血红蛋白、白细胞、血小板和铁代谢结果。',
      '记录吸烟、睡眠呼吸暂停、肺病、高原居住、用药、睾酮/促红素使用和缺氧线索。',
      '带 EPO、JAK2 V617F/exon12、骨髓活检、脾脏超声或影像结果。',
      '整理既往血栓、出血、妊娠并发症和心血管危险因素。',
    ],
    testsToAskAbout: [
      'JAK2 V617F 和 exon 12 变异检测，血清促红细胞生成素（EPO）水平。',
      '骨髓活检是否需要，用于确认骨髓增殖性肿瘤并评估纤维化。',
      '血栓风险分层：年龄、既往血栓、JAK2、白细胞、心血管危险因素。',
      '治疗目标红细胞压积、是否需要低剂量阿司匹林、放血频率或细胞减灭治疗。',
    ],
    questionsForDoctor: [
      '我的红细胞增多是真性 PV 还是继发性？证据是什么？',
      '我的血栓风险属于低危还是高危？红细胞压积目标是多少？',
      '我适合单纯放血和阿司匹林，还是需要羟基脲、干扰素或 JAK 抑制剂？',
      '哪些症状提示血栓、出血、骨髓纤维化或急性白血病转化，需要马上就医？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>PV 可没有症状，也可出现头痛、头晕、乏力、面色潮红、视物模糊、耳鸣、夜汗、体重下降、热水浴后瘙痒和手脚灼痛发红。脾大可导致左上腹胀痛、早饱或腹部不适。</p><p>最需要警惕的是血栓和出血。血栓可发生在脑、心脏、下肢、肺、腹腔静脉或门静脉等部位；血小板功能异常或极高血小板也可能导致出血。</p>',
    diagnosis:
      '<p>诊断不能只看血红蛋白高。医生会排除继发性红细胞增多，如缺氧、睡眠呼吸暂停、肺病、吸烟、高原、肾脏肿瘤或外源性促红素/雄激素等。</p><p>PV 诊断通常结合红细胞压积/血红蛋白、JAK2 变异、低 EPO、骨髓活检和血细胞三系增殖情况。部分患者还需评估铁缺乏，因为缺铁可能掩盖红细胞增多程度。</p>',
    treatment:
      '<p>治疗核心是降低血栓风险。多数患者需要把红细胞压积控制在医生设定目标内，常用方法是治疗性放血；若无禁忌，低剂量阿司匹林常用于减少微血管症状和血栓风险评估中的用药选择。</p><p>年龄较大、既往血栓或症状/细胞数控制困难者，可能需要细胞减灭治疗，如羟基脲、干扰素或 ropeginterferon，以及羟基脲不耐受/无效时的 ruxolitinib。还要积极控制血压、血脂、糖尿病、吸烟和体重等危险因素。</p>',
    longTermCare:
      '<p>PV 是慢性病，需要长期血液科随访。复查内容包括血常规、红细胞压积、铁状态、脾脏、血栓和出血事件、药物副作用、瘙痒和生活质量。</p><p>少数患者会进展为骨髓纤维化或急性白血病。若出现贫血加重、脾脏明显增大、体重下降、发热夜汗、骨痛或外周血异常，应及时复诊。</p>',
    fertilityOrFamily:
      '<p>PV 的 JAK2 变异通常为后天获得，不按普通遗传病筛查家属。育龄女性和妊娠患者需要血液科与产科共同管理，因为血栓和流产风险可能增加，治疗策略也会调整。</p>',
    emergencySigns:
      '<p>突发一侧肢体无力或说话困难、胸痛、气短、咯血、单侧腿肿痛、剧烈头痛、视力突然变化、腹部剧痛、黑便/呕血或出血不止，应急诊并说明 PV 病史。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'National Cancer Institute: Myeloproliferative Neoplasms Treatment',
      type: 'official',
      url: 'https://www.cancer.gov/types/myeloproliferative/patient/chronic-treatment-pdq',
    },
    {
      name: 'Merck Manual Consumer Version: Polycythemia Vera',
      type: 'review',
      url: 'https://www.merckmanuals.com/home/blood-disorders/myeloproliferative-disorders/polycythemia-vera',
    },
  ],
  symptoms:
    '<p>可无症状，也可有头痛头晕、热水浴后瘙痒、面色潮红、视物模糊、手足灼痛、脾大、血栓或出血表现。</p>',
  diagnosis:
    '<p>诊断结合持续红细胞压积/血红蛋白升高、JAK2 变异、低 EPO、骨髓活检和继发性红细胞增多排除。</p>',
  treatment:
    '<p>治疗包括放血控制红细胞压积、低剂量阿司匹林、控制心血管危险因素，高危或控制不佳者可用羟基脲、干扰素或 JAK 抑制剂等。</p>',
  prognosis:
    '<p>多数患者可长期管理，关键是减少血栓和出血；少数会进展为骨髓纤维化或急性白血病，需要持续随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 416,
    name: 'polycythaemia-vera-journey.png',
    url: '/images/diseases/polycythaemia-vera-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGiantCellArteritis: DiseaseDraft = {
  ...entity(2035, 'disease-giant-cell-arteritis'),
  name: '巨细胞动脉炎',
  nameEn: 'Giant cell arteritis',
  alias: 'GCA、颞动脉炎、大血管炎、第二批罕见病目录第 35 项',
  slug: 'giant-cell-arteritis',
  oneSentence:
    '巨细胞动脉炎是一种多见于 50 岁以上人群的大中血管炎，常引起新发头痛、头皮压痛、咀嚼时下颌痛和视力问题，延误治疗可能导致永久性失明。',
  plainName: '老年人新发头痛和视力风险很高的血管炎',
  prevalence:
    '已纳入国家第二批罕见病目录；主要发生在 50 岁以上人群，不同族群和地区发病率差异明显。',
  quickLook: {
    whatItIs:
      'GCA 是血管壁炎症，常累及颞动脉，也可累及主动脉及其分支。它和风湿性多肌痛关系密切，可同时或先后出现。',
    whoToSeeFirst:
      '50 岁以上新发持续头痛、头皮痛、咀嚼下颌痛、复视或视力下降，应立即联系风湿免疫科、眼科或急诊；疑似时治疗不能等所有检查完成。',
    isGenetic: 'GCA 不是典型单基因遗传病，家属通常不需要常规遗传检测。',
    hasTreatment:
      '高剂量糖皮质激素是防止视力丧失的关键，部分患者可使用托珠单抗等减少激素暴露；需要长期监测复发和药物副作用。',
    commonDelayReason:
      '容易被当作偏头痛、鼻窦炎、牙病、颈椎病、普通眼病或老年疲劳。下颌跛行和视力症状是重要红旗。',
  },
  patientJourney: {
    whenToSuspect: [
      '50 岁以上出现新发或明显不同于以往的头痛，尤其伴颞部压痛或头皮碰痛。',
      '咀嚼时下颌酸痛无力、舌痛，或出现复视、一过性黑蒙、视力下降。',
      '伴发热、乏力、体重下降、ESR/CRP 升高，或肩髋晨僵疼痛提示风湿性多肌痛。',
      '上肢跛行、血压左右差、主动脉或大血管影像异常。',
    ],
    commonWrongTurns: [
      '只按偏头痛或颈椎病止痛，没有查炎症指标和血管炎线索。',
      '出现短暂视力症状仍等待门诊排队，错过防止永久失明的窗口。',
      '激素好转后自行快速减量，导致复发。',
      '长期用激素但没有骨质疏松、血糖、血压、感染和眼科副作用管理。',
    ],
    firstDepartments: ['风湿免疫科', '眼科', '神经内科', '急诊科'],
    diagnosisChecklist: [
      '记录头痛起病时间、位置、头皮痛、下颌跛行、视力变化和全身症状。',
      '带 ESR、CRP、血常规、肝肾功能、眼科检查和既往影像。',
      '记录肩髋晨僵、风湿性多肌痛症状、上肢乏力和血压左右差。',
      '如已做颞动脉超声、PET-CT、CTA/MRA 或颞动脉活检，带原始报告。',
    ],
    testsToAskAbout: [
      'ESR、CRP、血常规和感染/肿瘤等相似病因排查。',
      '颞动脉超声、颞动脉活检，或 CTA/MRA/PET-CT 评估大血管受累。',
      '眼科急诊评估视神经和视网膜供血。',
      '长期激素前后的骨密度、血糖、血压、血脂和感染风险管理。',
    ],
    questionsForDoctor: [
      '我的视力风险有多高？是否需要立即使用激素或住院？',
      '还需要活检或影像吗？已经用激素后检查还来得及吗？',
      '激素如何减量？什么症状提示复发？',
      '我是否适合托珠单抗等减少激素用量的治疗？副作用如何监测？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>GCA 常见新发头痛、颞部或头皮压痛、咀嚼时下颌痛、发热、乏力、食欲差和体重下降。眼部受累可出现复视、一过性视力丧失或突然永久性视力丧失。</p><p>约部分患者合并风湿性多肌痛，表现为肩颈、髋部晨僵和疼痛。大血管受累可导致上肢跛行、血压左右差、主动脉扩张或动脉狭窄。</p>',
    diagnosis:
      '<p>诊断需要把年龄、症状、体征、ESR/CRP 等炎症指标、眼科评估、颞动脉超声或活检以及大血管影像综合判断。疑似视力受累时，应先治疗再完善检查。</p><p>需要与偏头痛、紧张性头痛、鼻窦炎、牙颌疾病、颈椎病、感染、肿瘤、其他血管炎和缺血性眼病鉴别。</p>',
    treatment:
      '<p>疑似 GCA 且有视觉风险时，应尽快开始高剂量糖皮质激素，以降低失明风险。随后根据症状、炎症指标和影像逐步减量。</p><p>托珠单抗可用于部分患者减少激素暴露或控制复发。长期治疗必须同时管理骨质疏松、血糖、血压、感染、胃肠和眼科副作用。</p>',
    longTermCare:
      '<p>随访包括头痛、下颌痛、视力、风湿性多肌痛症状、ESR/CRP、药物副作用和大血管并发症。患者应知道复发信号，不要自行快速停减激素。</p>',
    fertilityOrFamily:
      '<p>GCA 多见于老年人，不按单基因遗传病管理。通常不需要家属遗传筛查，但家人可帮助识别视力变化、复发症状和激素副作用。</p>',
    emergencySigns:
      '<p>任何新发视力下降、复视、黑蒙、下颌跛行突然加重、剧烈新发头痛、卒中样症状、胸背痛或主动脉急症表现，都应立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'American College of Rheumatology: Giant Cell Arteritis',
      type: 'patient-organization',
      url: 'https://rheumatology.org/patients/giant-cell-arteritis',
    },
    {
      name: 'NIAMS: Polymyalgia Rheumatica and Giant Cell Arteritis',
      type: 'official',
      url: 'https://www.niams.nih.gov/health-topics/polymyalgia-rheumatica-giant-cell-arteritis/basics/diagnosis-treatment-and-steps-to-take',
    },
  ],
  symptoms:
    '<p>常见新发头痛、头皮压痛、咀嚼下颌痛、发热乏力、体重下降、肩髋晨僵；视力下降、复视或黑蒙是急症信号。</p>',
  diagnosis:
    '<p>诊断综合症状、ESR/CRP、眼科评估、颞动脉超声/活检和 CTA/MRA/PET-CT 等血管影像；视力风险高时不能等待所有检查才治疗。</p>',
  treatment:
    '<p>治疗以尽快使用糖皮质激素防止视力丧失为核心，随后逐步减量；部分患者可用托珠单抗等减少激素暴露并控制复发。</p>',
  prognosis:
    '<p>及时治疗通常能缓解症状并降低失明风险；延误治疗、复发和长期激素副作用是主要风险，需要规律随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 389,
    name: 'giant-cell-arteritis-journey.png',
    url: '/images/diseases/giant-cell-arteritis-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

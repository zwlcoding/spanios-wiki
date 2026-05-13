import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseWaldenstromMacroglobulinemiaLymphoplasmacyticLymphoma: DiseaseDraft =
  {
    ...entity(
      2085,
      'disease-waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    ),
    name: '华氏巨球蛋白血症/淋巴浆细胞淋巴瘤',
    nameEn: 'Waldenström macroglobulinemia/Lymphoplasmacytic lymphoma',
    alias: 'WM；LPL；第二批罕见病目录第 85 项',
    slug: 'waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma',
    oneSentence:
      '华氏巨球蛋白血症是一种少见的惰性 B 细胞淋巴瘤，骨髓中异常淋巴浆细胞产生过多 IgM，可导致贫血、感染、出血、神经病变或高黏滞综合征。',
    plainName: '一种进展较慢、会产生过多 IgM 的血液肿瘤',
    prevalence:
      '已纳入中国第二批罕见病目录；属于少见非霍奇金淋巴瘤，常见于中老年人。',
    quickLook: {
      whatItIs:
        'WM/LPL 常进展缓慢，部分人只是体检发现 IgM 单克隆蛋白并可观察随访。需要治疗的原因通常是贫血、症状性高黏滞、神经病变、淋巴结/脾大、肾脏或冷球蛋白相关问题。',
      whoToSeeFirst:
        'IgM 单克隆蛋白、原因不明贫血、血沉很高、反复感染、出血、视物模糊、头痛、手脚麻木或高黏滞症状，应到血液科/淋巴瘤专科。',
      isGenetic:
        '通常不是典型家族遗传病。少数家庭有淋巴浆细胞疾病聚集，但家属一般不按遗传病筛查。',
      hasTreatment:
        '无症状者不一定马上治疗。需要治疗时可用利妥昔单抗联合方案、BTK 抑制剂、蛋白酶体抑制剂等；高黏滞急症需先血浆置换快速降低 IgM。',
      commonDelayReason:
        '早期无症状或只有疲劳贫血，容易被当成缺铁、慢性炎症或 MGUS。若未做血清蛋白电泳、IgM 定量和骨髓检查，可能漏诊。',
    },
    patientJourney: {
      whenToSuspect: [
        '不明原因贫血、乏力、体重下降、夜汗、反复感染或淋巴结/脾大。',
        'IgM 单克隆蛋白、血清黏滞度高，或头痛、视物模糊、鼻牙龈出血、意识混乱。',
        '手脚麻木疼痛、冷刺激后肢端变色、肾脏异常或冷球蛋白/冷凝集相关表现。',
      ],
      commonWrongTurns: [
        '只处理一个器官或一次发作，没有把长期模式、家族史和既往检查串起来。',
        '检查异常被解释为常见病后长期观察，但没有转到对应专科或罕见病多学科门诊。',
        '没有保存影像、病理、基因、用药和随访记录，导致重复检查和判断延迟。',
      ],
      firstDepartments: [
        '血液科',
        '淋巴瘤/浆细胞疾病专科',
        '急诊科（高黏滞症状）',
        '神经内科/肾内科（按并发症）',
      ],
      diagnosisChecklist: [
        '带血常规、IgM 定量、血清蛋白电泳/免疫固定、游离轻链和血清黏滞度。',
        '带骨髓涂片/活检、流式、MYD88/CXCR4 检测、影像和既往感染出血记录。',
        '记录头痛视物模糊、出血、神经病变、B 症状和用药史。',
      ],
      testsToAskAbout: [
        '目前是 IgM MGUS、无症状 WM 还是需要治疗的 WM？',
        '是否需要检查 MYD88 L265P、CXCR4、β2 微球蛋白、血清黏滞度和器官受累。',
        '如果用利妥昔单抗，是否有 IgM flare 风险，是否先血浆置换。',
      ],
      questionsForDoctor: [
        '我现在需要治疗还是观察？启动治疗的具体指标是什么？',
        '最适合我的方案如何兼顾疗效、感染风险、神经病变和生活质量？',
        '哪些症状提示高黏滞，需要立刻急诊？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>WM 可长期无症状。出现症状时常见贫血相关乏力气短、反复感染、淋巴结或脾大、体重下降、夜汗、出血倾向，以及 IgM 造成的高黏滞综合征：头痛、头晕、视物模糊、鼻牙龈出血、意识改变。</p><p>IgM 还可引起周围神经病变、冷球蛋白血症、冷凝集素病、肾脏受累或淀粉样变相关问题。</p>',
      diagnosis:
        '<p>诊断需要证明 IgM 单克隆蛋白和骨髓淋巴浆细胞性浸润，并结合免疫表型、血清蛋白电泳/免疫固定、IgM 定量、骨髓活检、MYD88 L265P 和 CXCR4 等检测。</p><p>医生会与 IgM MGUS、多发性骨髓瘤、边缘区淋巴瘤、慢性淋巴细胞白血病和其他小 B 细胞淋巴瘤鉴别。</p>',
      treatment:
        '<p>无症状 WM 不需要因诊断本身立刻治疗，而是规律观察。治疗指征包括症状性贫血、高黏滞、器官受累、明显 B 症状、神经病变或冷球蛋白相关问题。</p><p>治疗可选择利妥昔单抗联合化疗/免疫治疗、BTK 抑制剂、蛋白酶体抑制剂等。高黏滞综合征是急症，通常先血浆置换，再进行抗肿瘤治疗。</p>',
      longTermCare:
        '<p>长期随访包括血常规、IgM、M 蛋白、肾功能、感染风险、疫苗计划、神经病变、血清黏滞度和治疗副作用。观察期也需要明确复诊频率和启动治疗标准。</p><p>患者应携带 WM 诊断信息，出现高黏滞症状时不要等门诊复查。</p>',
      fertilityOrFamily:
        '<p>WM 通常不是遗传病，常规不要求家属筛查。治疗前如涉及生育、长期靶向药或化疗，应讨论生育力保存、感染预防和疫苗。</p>',
      emergencySigns:
        '<p>视物模糊、严重头痛、意识改变、胸闷气短、鼻牙龈出血不止、黑便呕血、发热寒战或严重贫血症状，应及时急诊，尤其要提示可能存在高黏滞综合征。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'National Cancer Institute: Waldenström macroglobulinemia treatment',
        type: 'official',
        url: 'https://www.cancer.gov/types/lymphoma/patient/waldenstrom-treatment-pdq',
      },
    ],
    symptoms:
      '<p>可无症状；也可有贫血乏力、感染、出血、淋巴结/脾大、神经病变、冷球蛋白相关症状和高黏滞导致的头痛、视物模糊、意识改变。</p>',
    diagnosis:
      '<p>诊断结合 IgM 单克隆蛋白、骨髓淋巴浆细胞浸润、免疫表型、MYD88/CXCR4 等检测，并与 IgM MGUS 和其他小 B 细胞淋巴瘤鉴别。</p>',
    treatment:
      '<p>无症状可观察；有治疗指征时可用利妥昔单抗联合方案、BTK 抑制剂等，高黏滞急症需先血浆置换。</p>',
    prognosis:
      '<p>多数进展较慢，可长期管理；高黏滞、感染、贫血、神经病变和治疗副作用是随访重点。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'oncology',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 439,
      name: 'waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma-journey.png',
      url: '/images/diseases/waldenstrom-macroglobulinemia-lymphoplasmacytic-lymphoma-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog'],
  };

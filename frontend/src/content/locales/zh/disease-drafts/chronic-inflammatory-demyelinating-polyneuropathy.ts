import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseChronicInflammatoryDemyelinatingPolyneuropathy: DiseaseDraft =
  {
    ...entity(
      2013,
      'disease-chronic-inflammatory-demyelinating-polyneuropathy',
    ),
    name: '慢性炎性脱髓鞘性多发性神经根神经病',
    nameEn: 'Chronic inflammatory demyelinating polyneuropathy',
    alias: 'CIDP、慢性炎性脱髓鞘性多发神经病、第二批罕见病目录第 13 项',
    slug: 'chronic-inflammatory-demyelinating-polyneuropathy',
    oneSentence:
      '慢性炎性脱髓鞘性多发性神经根神经病是一种免疫介导的周围神经病，常表现为超过 8 周逐渐加重或反复的肢体无力、麻木和腱反射减弱。',
    plainName: '免疫系统攻击周围神经外层导致手脚无力麻木的疾病',
    prevalence:
      '已纳入国家第二批罕见病目录；不同研究估计差异较大，Cleveland Clinic 资料提到美国每 10 万人每年约 0.8-8.9 个新发病例。',
    quickLook: {
      whatItIs:
        'CIDP 的问题主要在周围神经髓鞘。髓鞘受免疫炎症影响后，神经传导变慢或受阻，患者会出现对称性无力、麻木、走路不稳、容易跌倒或手部动作变笨。',
      whoToSeeFirst:
        '成人或儿童出现持续进展超过 8 周的四肢无力、麻木、走路不稳，应看神经内科，最好是神经免疫或神经肌肉专科。',
      isGenetic:
        'CIDP 通常不是遗传病。诊断时有时需要排除遗传性周围神经病、糖尿病神经病、维生素缺乏、感染、血液系统疾病或 POEMS 等相似病因。',
      hasTreatment:
        'CIDP 是可治疗的罕见神经病。常用一线方案包括 IVIG、糖皮质激素和血浆置换，部分患者还需免疫调节药物、康复和长期复评。',
      commonDelayReason:
        'CIDP 进展较慢，容易被当作腰椎病、颈椎病、普通周围神经病、糖尿病神经病或急性格林-巴利综合征恢复不佳。电生理和病程时间线很关键。',
    },
    patientJourney: {
      whenToSuspect: [
        '双侧腿或手臂无力、麻木、针刺感、走路不稳持续加重超过 8 周。',
        '上楼、蹲起、抬手、握笔、扣扣子、拿筷子或走远路越来越困难。',
        '腱反射减弱或消失，伴肌肉萎缩、疲劳、神经痛或反复缓解又复发。',
        '被诊断为周围神经病但病因不清，或按腰椎/颈椎问题处理后解释不全。',
      ],
      commonWrongTurns: [
        '只做腰椎或颈椎影像，没有做神经传导和肌电图。',
        '把所有麻木归因于糖尿病或年龄，忽略近端和远端同时无力、腱反射消失。',
        '症状超过 8 周仍按急性格林-巴利综合征单次病程理解。',
        '治疗有效后自行停药或长期不复评，导致复发时延误处理。',
      ],
      firstDepartments: [
        '神经内科',
        '神经免疫专科',
        '神经肌肉病门诊',
        '康复医学科',
      ],
      diagnosisChecklist: [
        '整理无力和麻木开始时间、进展速度、是否复发缓解、跌倒和行走距离变化。',
        '带齐肌电图/神经传导、脑脊液、脊柱 MRI、血糖、甲状腺、维生素、免疫和感染筛查结果。',
        '记录既往感染、疫苗、肿瘤或血液病线索、用药史和家族周围神经病史。',
        '记录 IVIG、激素、血浆置换或其他治疗后的变化和副作用。',
      ],
      testsToAskAbout: [
        '神经传导和肌电图，重点看脱髓鞘改变、传导阻滞或传导速度变慢。',
        '脑脊液检查，常用于评估蛋白升高和排除其他炎症/感染原因。',
        '血液和尿液检查，用于排除糖尿病、维生素缺乏、甲状腺病、感染、单克隆免疫球蛋白或血液肿瘤线索。',
        '神经根或丛 MRI/超声、特异抗体检测，必要时少数患者考虑神经活检。',
      ],
      questionsForDoctor: [
        '我的表现符合典型 CIDP 还是某种变异型？还需要排除哪些疾病？',
        '电生理证据是否支持脱髓鞘？需要多久复查一次？',
        'IVIG、激素、血浆置换哪种更适合我？疗效多久评估？',
        '治疗有效后如何减量或维持？复发时应怎么处理？',
        '康复训练、跌倒预防、疼痛和疲劳管理怎么安排？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CIDP 常见表现是超过 8 周进展的肢体无力和感觉异常，典型患者可有双侧近端和远端无力，例如上楼、蹲起、抬臂、握物、走路变困难。麻木、针刺感、平衡差、神经痛、肌肉萎缩和腱反射减弱也常见。</p><p>病程可以持续进展，也可以缓解后复发。少数变异型可能以感觉症状、运动症状或不对称受累为主，因此需要神经肌肉专科结合检查判断。</p>',
      diagnosis:
        '<p>诊断的核心是病程、神经系统查体和电生理证据。神经传导/肌电图寻找脱髓鞘特征，例如传导速度变慢、传导阻滞或远端潜伏期延长。症状从发生到高峰超过 8 周有助于区别急性神经病。</p><p>脑脊液蛋白升高、神经根影像改变、治疗反应和排除其他原因都可提供支持。医生还会筛查糖尿病、维生素缺乏、甲状腺病、感染、遗传性神经病、单克隆免疫球蛋白相关病和 POEMS 等相似情况。</p>',
      treatment:
        '<p>CIDP 的一线治疗通常包括静脉或皮下免疫球蛋白、糖皮质激素和血浆置换。选择哪种方案取决于病情速度、合并症、用药风险、可及性和患者偏好。治疗后需要用力量、行走、感觉和电生理等指标评估疗效。</p><p>部分患者需要维持治疗或免疫调节药物。康复训练、力量和平衡训练、足踝支具、疼痛管理和跌倒预防对恢复功能同样重要。</p>',
      longTermCare:
        '<p>长期管理重点是确认是否真正有效、避免过度或不足治疗、监测药物副作用和复发。患者可记录步行距离、上下楼能力、手部功能、跌倒次数、疼痛和疲劳变化。</p><p>如果症状突然明显加重、治疗反应变差或出现新的系统性症状，应重新评估诊断和合并疾病。</p>',
      fertilityOrFamily:
        '<p>CIDP 通常不是遗传病，家属一般不需要按遗传病筛查。但如果家族中多人有高弓足、长期周围神经病、早发无力或类似表现，应告诉医生，以便排除遗传性神经病。</p><p>妊娠、备孕或长期用免疫治疗时，应提前与神经科和产科讨论药物安全性和复发风险管理。</p>',
      emergencySigns:
        '<p>若出现快速加重到不能行走、吞咽困难、呼吸困难、明显胸闷、意识改变、严重感染表现、血栓可疑症状，或血浆置换/免疫治疗后严重过敏，应立即急诊。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
        type: 'clinical-guideline',
        url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
      },
      {
        name: 'MedlinePlus Medical Encyclopedia: Chronic inflammatory demyelinating polyneuropathy',
        type: 'official',
        url: 'https://medlineplus.gov/ency/article/000777.htm',
      },
      {
        name: 'Johns Hopkins Medicine: Chronic Inflammatory Demyelinating Polyradiculoneuropathy',
        type: 'review',
        url: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/chronic-inflammatory-demyelinating-polyradiculoneuropathy',
      },
      {
        name: 'Cleveland Clinic: CIDP',
        type: 'review',
        url: 'https://my.clevelandclinic.org/health/diseases/cidp-chronic-inflammatory-demyelinating-polyneuropathy',
      },
    ],
    symptoms:
      '<p>常见表现是超过 8 周逐渐加重或反复的肢体无力、麻木、针刺感、走路不稳、腱反射减弱和疲劳。</p>',
    diagnosis:
      '<p>诊断依靠病程、神经查体、神经传导/肌电图脱髓鞘证据，并通过脑脊液、影像和实验室检查排除相似疾病。</p>',
    treatment:
      '<p>常用治疗包括 IVIG、糖皮质激素、血浆置换、必要时免疫调节药物，以及康复、疼痛管理和跌倒预防。</p>',
    prognosis:
      '<p>许多患者对免疫治疗有反应，但可复发或需要维持治疗；早诊断、定期评估疗效和康复可改善功能结局。</p>',
    sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
    sourceUrl:
      'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 367,
      name: 'chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
      url: '/images/diseases/chronic-inflammatory-demyelinating-polyneuropathy-journey.png',
    },
    tagSlugs: ['second-rare-disease-catalog', 'neuromuscular'],
  };

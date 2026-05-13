import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryMultiInfarctDementiaCerebralAutosomalDominantArteriopathyWithSubcorticalInfarctsAndLeukoencephalopathyCadasil: DiseaseDraft =
  {
    ...entity(44, 'disease-cadasil'),
    name: '遗传性多发脑梗死性痴呆',
    nameEn: 'CADASIL',
    alias:
      'CADASIL、伴皮质下梗死和白质脑病的常染色体显性脑动脉病、NOTCH3 相关脑小血管病',
    slug: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil',
    oneSentence:
      'CADASIL 是 NOTCH3 相关遗传性脑小血管病，可导致偏头痛先兆、反复腔隙性卒中、情绪变化、认知下降和脑白质改变。',
    plainName: '家族性脑小血管容易出问题，反复小中风和认知变化的遗传病',
    prevalence:
      '总体罕见，但 NOTCH3 相关表型范围较宽；有些家族表现典型，也有人症状较轻或较晚识别。',
    quickLook: {
      whatItIs:
        'CADASIL 会影响脑内小到中等动脉，造成白质病变和腔隙性缺血事件。它不同于单纯高血压或动脉粥样硬化导致的普通脑小血管病。',
      whoToSeeFirst:
        '年轻或中年反复短暂性脑缺血/脑梗死、偏头痛伴先兆、脑 MRI 白质改变明显或家族中多人早发卒中/痴呆时，可到神经内科脑血管病或遗传神经病门诊。',
      isGenetic: '是，通常为常染色体显性遗传，与 NOTCH3 致病变异有关。',
      hasTreatment:
        '目前以卒中风险管理、症状处理、康复和遗传咨询为主；没有适用于所有患者的根治方案。',
      commonDelayReason:
        '影像白质改变容易被归因于高血压、老化或普通偏头痛；如果发病年龄偏早、家族史明显或 MRI 分布典型，应考虑遗传性脑小血管病。',
    },
    patientJourney: {
      whenToSuspect: [
        '40-50 岁前后或更早出现反复腔隙性脑梗死或短暂性脑缺血。',
        '偏头痛伴先兆、情绪变化或认知下降与脑白质病变并存。',
        '脑 MRI 显示广泛白质高信号，尤其累及颞极或外囊等提示性部位。',
        '家族中多人早发卒中、步态问题、认知下降或精神行为变化。',
      ],
      commonWrongTurns: [
        '只按普通偏头痛处理，没有看脑 MRI 和家族史。',
        '年轻患者脑白质改变被简单解释为压力或老化。',
        '反复小中风只控制血压血脂，未评估遗传性脑小血管病。',
        '未进行遗传咨询就对无症状亲属做预测检测。',
      ],
      firstDepartments: [
        '神经内科脑血管病门诊',
        '遗传神经病门诊',
        '医学遗传科/遗传咨询门诊',
        '康复医学科',
        '精神心理科（情绪或行为问题时）',
      ],
      diagnosisChecklist: [
        '整理所有脑 MRI/CT、卒中病历、偏头痛和认知/情绪变化记录。',
        '画出家族中卒中、偏头痛、痴呆和精神症状谱系。',
        '询问 NOTCH3 基因检测及结果解释。',
        '讨论无症状亲属是否、何时、如何进行预测性检测。',
        '建立卒中预防、康复、认知和心理支持计划。',
      ],
      testsToAskAbout: [
        '脑 MRI 和脑血管评估。',
        'NOTCH3 基因检测。',
        '必要时皮肤活检电镜/免疫组化。',
        '血压、血脂、血糖和其他可干预卒中风险评估。',
        '认知、情绪和步态功能评估。',
      ],
      questionsForDoctor: [
        '我的 MRI 和病史是否符合 CADASIL？',
        'NOTCH3 变异是否足以确认诊断？',
        '哪些卒中风险因素需要积极管理？',
        '亲属检测需要怎样的遗传咨询流程？',
        '认知、情绪和工作生活支持如何安排？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>CADASIL 可表现为偏头痛伴先兆、短暂性脑缺血、反复腔隙性脑梗死、步态不稳、情绪障碍、淡漠、执行功能下降和逐渐认知受损。症状和发病年龄在家族内外都可有差异。</p>',
      diagnosis:
        '<p>诊断依赖临床表现、脑 MRI 特征、家族史和 NOTCH3 基因检测。基因结果不明确时，部分病例可能需要皮肤活检寻找特征性血管改变。医生还会鉴别高血压脑小血管病、多发性硬化、炎症性血管病和其他遗传性白质病。</p>',
      treatment:
        '<p>管理以降低可干预卒中风险、处理偏头痛和情绪认知问题、康复训练和家庭支持为主。抗栓、降压、降脂等策略需由神经内科根据个体情况决定，不能照搬普通卒中方案。</p>',
      longTermCare:
        '<p>长期随访关注卒中复发、步态、认知、情绪、工作能力、驾驶安全和照护安排。患者和家属应保存影像、基因报告和急诊说明。</p>',
      fertilityOrFamily:
        '<p>CADASIL 通常为常染色体显性遗传。一级亲属有风险，但无症状预测性检测应在充分遗传咨询后进行，特别要讨论心理影响、保险/职业影响和个人知情选择。</p>',
      emergencySigns:
        '<p>突发口角歪斜、肢体无力麻木、言语不清、视物异常、严重头痛或意识改变，应按卒中急症立即就医，并告知 CADASIL 或家族性脑小血管病风险。</p>',
    },
    sources: [
      {
        name: 'GeneReviews: CADASIL',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
      },
      {
        name: 'MedlinePlus Genetics: CADASIL',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/cadasil/',
      },
    ],
    symptoms:
      '<p>可表现为偏头痛伴先兆、反复短暂性脑缺血或腔隙性脑梗死、脑白质改变、情绪和认知下降。</p>',
    diagnosis:
      '<p>评估包括脑 MRI、家族史、NOTCH3 基因检测，必要时皮肤活检和卒中风险因素评估。</p>',
    treatment:
      '<p>管理以卒中风险控制、偏头痛和情绪认知处理、康复、遗传咨询和家庭支持为主。</p>',
    prognosis:
      '<p>病程差异较大，受卒中复发、认知变化、家族变异和可干预风险因素管理影响。</p>',
    sourceName: 'GeneReviews: CADASIL',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1500/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 343,
      name: 'hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
      url: '/images/diseases/hereditary-multi-infarct-dementia-cerebral-autosomal-dominant-arteriopathy-with-subcortical-infarcts-and-leukoencephalopathy-cadasil-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  };

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHypophosphatemicRickets: DiseaseDraft = {
  ...entity(53, 'disease-hypophosphatemic-rickets'),
  name: '低磷性佝偻病',
  nameEn: 'Hypophosphatemic Rickets',
  alias: '低血磷性佝偻病、X连锁低磷血症（XLH）',
  slug: 'hypophosphatemic-rickets',
  oneSentence:
    '低磷性佝偻病是一组因肾脏排磷过多导致低磷血症，进而引起骨骼矿化障碍的遗传性或获得性疾病，儿童表现为佝偻病，成人表现为骨软化症。',
  plainName: '低磷性佝偻病',
  prevalence:
    '发病率约3.9/100,000，患病率约1/21,000；XLH占遗传性低磷性佝偻病的80%以上。',
  quickLook: {
    whatItIs:
      '低磷性佝偻病（低血磷性佝偻病）是一组以低磷血症为特征的骨骼矿化障碍性疾病。由于PHEX、FGF23、DMP1等基因突变或获得性病因，导致体内调磷因子成纤维细胞生长因子23（FGF23）水平异常，肾脏对磷的重吸收减少，血磷降低，骨骼无法正常矿化。儿童期表现为佝偻病（方颅、鸡胸、O形或X形腿等），成人期表现为骨软化症（乏力、骨痛、多发骨折、身高变矮）。',
    whoToSeeFirst:
      '儿童患者建议首先就诊小儿内分泌科或小儿遗传代谢科；成人患者可就诊内分泌科、骨代谢专科或肾内科。有骨骼畸形或行动受限时，骨科可提供评估。部分患者可考虑多学科联合门诊（MDT）。',
    isGenetic:
      '是，遗传性低磷性佝偻病多为X连锁显性遗传（XLH，由PHEX基因突变所致），也有常染色体显性/隐性遗传类型。获得性低磷性骨软化症最常见于肿瘤相关（TIO）。',
    hasTreatment:
      '有长期管理方案，包括磷代谢监测、传统治疗或靶向治疗评估、骨科和口腔随访。是否适合具体治疗需由儿童/成人内分泌、肾内或骨代谢专科判断。',
    commonDelayReason:
      '低磷性佝偻病表现与营养性佝偻病相似，基层医生对遗传性佝偻病认识不足，易误诊为普通维生素D缺乏性佝偻病，导致延误对症治疗。部分患者因症状较轻，成年后才被诊断。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童期出现方颅、鸡胸、肋骨串珠、下肢弯曲（O形或X形腿）等骨骼畸形',
      '身高增长迟缓，长骨X线检查显示干骺端增宽、模糊、毛刷状钙化影',
      '血磷持续降低、血碱性磷酸酶显著升高，但血钙正常、维生素D和甲状旁腺激素水平正常',
      '有佝偻病或骨软化症家族史',
      '成人期出现乏力、骨痛、多发假性骨折，身高逐渐变矮',
      '常规补钙或维生素D治疗佝偻病效果不佳',
    ],
    commonWrongTurns: [
      '仅凭临床表现误诊为营养性维生素D缺乏性佝偻病，单纯补钙或普通维生素D治疗',
      '忽视家族史询问，未进行基因检测以明确病因',
      '对低磷血症病因未进行系统性鉴别，遗漏遗传性或肿瘤性可能',
      '获得性低磷性骨软化症未积极排查肿瘤相关线索，延误病因处理',
    ],
    firstDepartments: [
      '小儿内分泌科或小儿遗传代谢科（儿童患者）',
      '内分泌科或骨代谢科（成人患者）',
      '骨科（存在明显骨骼畸形或需手术评估时）',
      '肾内科（怀疑肾脏疾病导致磷代谢异常时）',
      '小儿泌尿外科/男科或生殖内分泌科（性腺功能相关评估）',
    ],
    diagnosisChecklist: [
      '详细病史采集：起病年龄、生长发育史、家族史',
      '血清生化检测：血磷、血钙、血碱性磷酸酶、血清FGF23、25-羟维生素D、甲状旁腺激素',
      '尿磷检测：计算肾小管磷重吸收率（TmP/GFR）',
      '影像学检查：长骨X线（评估佝偻病改变）、骨骼CT/MRI（必要时）',
      '基因检测：对疑似遗传性低磷性佝偻病者进行PHEX、FGF23、DMP1、ENPP1、SLC34A3等基因检测',
      '肿瘤排查：疑似TIO者进行影像学检查寻找致病肿瘤',
    ],
    testsToAskAbout: [
      '血清磷、钙、碱性磷酸酶',
      '25-羟维生素D和甲状旁腺激素',
      '尿磷和肾小管磷重吸收率',
      '血清FGF23水平',
      '长骨X线检查',
      '基因检测（PHEX等）',
    ],
    questionsForDoctor: [
      '孩子的骨骼畸形是低磷性佝偻病还是普通的营养性佝偻病？需要做哪些检查来确诊？',
      '孩子是否需要做基因检测？家里其他孩子需要检查吗？',
      '孩子的病情需要长期服用哪些药物？药物有什么副作用？',
      '孩子平时饮食需要注意什么？需要限制活动吗？',
      '成年后还需要继续治疗和随访吗？',
      '如果要生第二个孩子，需要做产前咨询吗？',
    ],
  },
  medicalSections: {
    symptoms:
      '儿童期主要表现为佝偻病体征：方颅、鸡胸、肋骨串珠、肋缘外翻、四肢弯曲（O形或X形腿）、生长迟缓、身材矮小。成人期表现为骨软化症：乏力、体型改变、身高变矮、多发骨痛、假性骨折、甚至活动受限。牙齿发育异常也较常见，包括牙质差、牙痛、牙齿易脱落。可出现继发性甲状旁腺功能亢进、骨关节炎、附着点病、椎管狭窄、听力损失等并发症。XLH 患者常出现自发性牙脓肿。',
    diagnosis:
      '诊断需综合临床表现、生化检查、影像学检查和基因检测。典型表现为低磷血症合并肾小管磷重吸收率降低、血碱性磷酸酶升高、血钙正常。X线显示佝偻病特征性改变。基因检测可明确具体类型和遗传方式，对家族遗传咨询有重要价值。获得性低磷性骨软化症需积极排查肿瘤。',
    treatment:
      '治疗目标是改善磷代谢、骨骼矿化、疼痛和功能，并预防长期并发症。管理可能包括传统磷酸盐/活性维生素 D 相关方案或 FGF23 靶向治疗评估，同时需要监测血磷、血钙、尿钙、甲状旁腺激素、肾脏和牙科问题。具体药物、剂量、适用人群和监测频率应由熟悉低磷性佝偻病的专科团队制定。',
    longTermCare:
      '低磷性佝偻病是慢性疾病，需长期乃至终身管理。儿童期需定期监测生长发育指标、血磷血钙、骨骼影像，及时调整药物。成年后仍需持续治疗和随访，关注骨骼并发症（如骨关节炎、骨折）、牙齿健康、听力变化等。避免剧烈冲撞性运动以降低骨折风险。遗传咨询和产前诊断对计划生育有重要帮助。定期评估心理健康，关注患者及家庭生活质量。',
    fertilityOrFamily:
      '大多数低磷性佝偻病患者可正常结婚生育。XLH为X连锁显性遗传，理论上男性患者会将变异传给所有女儿，不传给儿子；女性患者有50%概率将变异传给子女。接受治疗病情控制良好的患者，妊娠风险可控。计划妊娠前建议进行遗传咨询。成人期如存在生育困难，可咨询生殖内分泌科或泌尿外科，了解辅助生殖技术选项。',
    emergencySigns:
      '出现以下情况应尽快就医：不明原因多发骨折或假性骨折急性加重；严重骨痛影响日常活动；出现癫痫样发作（需警惕低钙血症等代谢危象）；出现听力和视力急剧变化；口服磷酸盐制剂后出现严重胃肠道不适或高钙血症表现。',
  },
  sources: [
    {
      name: 'GeneReviews: X-Linked Hypophosphatemia',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK83985/',
    },
    {
      name: 'MedlinePlus Genetics: X-linked hypophosphatemia',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/x-linked-hypophosphatemia/',
    },
  ],
  sourceName: 'GeneReviews: X-Linked Hypophosphatemia',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK83985/',
  categorySlug: 'skeletal-connective-tissue',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 352,
    name: 'hypophosphatemic-rickets-journey.png',
    url: '/images/diseases/hypophosphatemic-rickets-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

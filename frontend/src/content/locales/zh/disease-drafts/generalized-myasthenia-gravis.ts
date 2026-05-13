import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGeneralizedMyastheniaGravis: DiseaseDraft = {
  ...entity(32, 'disease-generalized-myasthenia-gravis'),
  name: '全身型重症肌无力',
  nameEn: 'Generalized Myasthenia Gravis',
  alias: 'gMG、重症肌无力全身型、获得性自身免疫性重症肌无力',
  slug: 'generalized-myasthenia-gravis',
  oneSentence:
    '全身型重症肌无力是一种自身免疫性神经肌肉接头疾病，会导致眼、面部、吞咽、说话、四肢或呼吸相关肌肉波动性无力。',
  plainName: '活动后肌肉更无力、休息后好一些的自身免疫性肌无力',
  prevalence:
    '属于罕见神经免疫疾病，可发生于任何年龄，常见起患者群包括年轻女性和老年男性。',
  quickLook: {
    whatItIs:
      '免疫系统产生的抗体干扰神经和肌肉之间的信号传递，使肌肉容易疲劳。全身型表示除眼肌外，还累及面咽、四肢、颈部或呼吸肌等多个肌群。',
    whoToSeeFirst:
      '出现眼睑下垂、复视、说话鼻音、咀嚼或吞咽困难、抬头困难、四肢无力且活动后加重时，可到神经内科神经免疫/神经肌肉专科；呼吸困难或吞咽明显受限应急诊。',
    isGenetic:
      '通常不是直接遗传病，而是获得性自身免疫病；少数家族中可能有自身免疫倾向。需要与先天性肌无力综合征区分。',
    hasTreatment:
      '有多种症状控制、免疫治疗、快速救治和胸腺相关治疗策略。具体选择取决于抗体、胸腺、严重程度、年龄和合并症。',
    commonDelayReason:
      '症状波动大，早期可能只表现为眼肌或疲劳；容易被当作眼科、脑血管、焦虑、咽喉或普通疲劳问题。',
  },
  patientJourney: {
    whenToSuspect: [
      '眼睑下垂或复视随一天中时间、疲劳或活动而波动。',
      '说话变鼻音、咀嚼无力、吞咽呛咳、抬头困难或表情减少。',
      '四肢近端无力，上楼、抬手、起立困难，休息后缓解。',
      '感染、手术、某些药物或压力后无力明显加重。',
      '呼吸费力、说话气短或不能平卧，提示可能存在危象风险。',
    ],
    commonWrongTurns: [
      '眼肌症状只按眼科问题处理，没有做神经肌肉接头评估。',
      '吞咽和说话困难被当作耳鼻喉或心理问题。',
      '症状波动导致检查当天正常，被误认为没有器质性问题。',
      '用药前没有告知 MG 病史，接触可能加重肌无力的药物。',
    ],
    firstDepartments: [
      '神经内科（神经免疫/神经肌肉方向）',
      '急诊科（呼吸困难、吞咽困难或快速加重时）',
      '胸外科（胸腺瘤或胸腺评估时）',
      '康复医学科（稳定期功能管理）',
    ],
    diagnosisChecklist: [
      '记录无力部位、是否活动后加重、休息后缓解、一天内波动和诱因。',
      '带上眼科、神经科、吞咽、胸部 CT/MRI、抗体和肌电图检查资料。',
      '询问 AChR、MuSK、LRP4 等抗体检测及重复神经刺激/单纤维肌电图。',
      '确认是否需要胸腺影像，评估胸腺增生或胸腺瘤。',
      '整理当前用药，向医生确认是否有可能加重 MG 的药物。',
    ],
    testsToAskAbout: [
      'AChR、MuSK、LRP4 等重症肌无力相关抗体。',
      '重复神经刺激和单纤维肌电图。',
      '冰袋试验或床旁疲劳试验（医生认为适合时）。',
      '胸部 CT/MRI 评估胸腺。',
      '肺功能、吞咽评估和感染诱因评估。',
    ],
    questionsForDoctor: [
      '我属于全身型还是眼肌型？目前严重程度如何？',
      '抗体和胸腺检查结果会怎样影响治疗选择？',
      '哪些症状提示肌无力危象，需要直接急诊？',
      '哪些药物、感染或手术情况可能加重病情？',
      '治疗目标、复查频率和药物副作用监测是什么？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>gMG 可表现为眼睑下垂、复视、面部表情减少、说话含糊或鼻音、咀嚼疲劳、吞咽困难、颈部无力、四肢近端无力和呼吸肌受累。典型特点是活动后加重、休息后改善，但严重时可出现吞咽或呼吸危象。</p>',
    diagnosis:
      '<p>诊断需要结合波动性肌无力表现、神经系统查体、抗体检测、电生理检查和胸腺影像。医生会鉴别脑卒中、运动神经元病、肌病、先天性肌无力综合征、Lambert-Eaton 综合征和甲状腺眼病等。</p>',
    treatment:
      '<p>治疗包括症状改善药物、免疫治疗、快速救治策略、胸腺相关评估和康复支持。方案需要根据抗体类型、胸腺情况、危象风险、合并症和妊娠计划等个体化制定，患者不要自行停药或加药。</p>',
    longTermCare:
      '<p>长期管理重点包括无力评分、吞咽和呼吸风险、感染预防、用药副作用、骨健康、血糖血压和生活质量。患者应保存诊断证明、用药清单和急诊说明，手术或新增药物前主动告知 MG 病史。</p>',
    fertilityOrFamily:
      '<p>MG 通常不是直接遗传病。妊娠计划需要提前与神经内科和产科讨论病情稳定、用药安全、分娩和新生儿短暂肌无力风险等问题。</p>',
    emergencySigns:
      '<p>呼吸困难、说话气短、吞咽明显困难、频繁呛咳、不能平卧、无力快速进展、感染后明显加重或意识改变，应立即急诊并说明重症肌无力病史。</p>',
  },
  sources: [
    {
      name: 'NINDS: Myasthenia Gravis',
      type: 'official',
      url: 'https://www.ninds.nih.gov/node/733',
    },
    {
      name: 'MedlinePlus: Myasthenia Gravis',
      type: 'official',
      url: 'https://medlineplus.gov/myastheniagravis.html',
    },
    {
      name: 'MedlinePlus Genetics: Myasthenia gravis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/myasthenia-gravis',
    },
  ],
  symptoms:
    '<p>可表现为眼睑下垂、复视、吞咽或说话困难、颈部和四肢无力、呼吸肌受累，常活动后加重、休息后改善。</p>',
  diagnosis:
    '<p>评估包括抗体检测、重复神经刺激/单纤维肌电图、胸腺影像、呼吸和吞咽风险评估。</p>',
  treatment:
    '<p>管理包括症状治疗、免疫治疗、危象快速救治、胸腺评估和长期随访，需神经内科个体化制定。</p>',
  prognosis:
    '<p>多数患者经规范治疗可显著改善，但危象、感染、药物和合并症管理决定长期风险。</p>',
  sourceName: 'NINDS: Myasthenia Gravis',
  sourceUrl: 'https://www.ninds.nih.gov/node/733',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 331,
    name: 'generalized-myasthenia-gravis-journey.png',
    url: '/images/diseases/generalized-myasthenia-gravis-journey.png',
  },
  tagSlugs: ['neuromuscular'],
};

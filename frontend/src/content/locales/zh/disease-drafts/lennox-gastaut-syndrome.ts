import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLennoxGastautSyndrome: DiseaseDraft = {
  ...entity(2044, 'disease-lennox-gastaut-syndrome'),
  name: 'Lennox-Gastaut 综合征',
  nameEn: 'Lennox-Gastaut syndrome',
  alias:
    'LGS、Lennox-Gastaut综合征、儿童期发育性癫痫性脑病、第二批罕见病目录第 44 项',
  slug: 'lennox-gastaut-syndrome',
  oneSentence:
    'Lennox-Gastaut 综合征是一种儿童期起病的严重发育性癫痫性脑病，常有多种发作类型、跌倒发作、认知和行为问题，并且癫痫往往较难完全控制。',
  plainName: '儿童期多种癫痫发作反复出现、常伴发育和认知影响的综合征',
  prevalence:
    '已纳入国家第二批罕见病目录；Epilepsy Foundation 将其列为少见但严重的儿童期癫痫综合征。',
  quickLook: {
    whatItIs:
      'LGS 通常包括多种癫痫发作、特征性脑电图改变和发育/认知行为影响。原因可能是脑结构损伤、遗传病、代谢病、既往婴儿痉挛，也可能原因不明。',
    whoToSeeFirst:
      '孩子有反复跌倒、睡眠中强直发作、失神样发作、肌阵挛、发作频繁或多药效果差，应到小儿神经科、癫痫中心或急诊评估。',
    isGenetic:
      'LGS 是综合征诊断，不等于单一遗传病。是否需要遗传、代谢或脑影像检查，要看起病年龄、发育史、影像和家族史。',
    hasTreatment:
      '治疗通常需要多药组合，并可讨论生酮饮食、迷走神经刺激、胼胝体切开等。目标常是减少发作、预防跌倒和改善生活功能，而不一定能完全无发作。',
    commonDelayReason:
      '发作类型多样，早期可能被当作普通癫痫、注意力问题、跌倒意外或发育迟缓。视频记录发作对诊断很有帮助。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童出现多种发作类型，尤其有睡眠中强直发作、失张力跌倒、不典型失神或发作成串。',
      '癫痫发作频繁、对常规抗癫痫药反应差，或多次急诊/住院。',
      '伴语言、认知、行为、运动发育停滞或倒退。',
      '脑电图提示慢棘慢波或睡眠中快节律活动。',
    ],
    commonWrongTurns: [
      '只描述“摔倒”或“发呆”，没有录视频给癫痫医生看。',
      '频繁换药但没有系统评估病因、脑电图、影像和非药物治疗选择。',
      '忽视防跌倒、头盔、睡眠安全、学校支持和照护者负担。',
      '在发作持续或成串时没有清晰的急救用药和急诊计划。',
    ],
    firstDepartments: ['小儿神经科', '癫痫中心', '神经内科', '急诊科'],
    diagnosisChecklist: [
      '带发作视频，记录发作时间、睡眠/清醒状态、持续多久、诱因和恢复情况。',
      '带既往 EEG、长程视频 EEG、脑 MRI、基因/代谢检查和用药反应记录。',
      '记录发育里程碑、学习行为变化、跌倒伤害和既往婴儿痉挛或脑损伤史。',
      '列出所有抗癫痫药剂量、疗效、副作用和停换药原因。',
    ],
    testsToAskAbout: [
      '长程视频 EEG，特别关注睡眠期发作和特征性脑电图。',
      '高质量脑 MRI，用于寻找结构性病因。',
      '按病史选择遗传检测、代谢筛查或其他病因学检查。',
      '是否适合生酮饮食、迷走神经刺激、胼胝体切开或其他癫痫外科评估。',
    ],
    questionsForDoctor: [
      '孩子目前有哪些发作类型？哪一种最危险、最需要优先控制？',
      '家庭急救方案是什么？什么时候用急救药、什么时候叫救护车？',
      '我们是否该评估生酮饮食、VNS 或胼胝体切开？',
      '学校、睡眠、运动和防跌倒需要哪些具体支持？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>LGS 常在儿童期起病，表现为多种癫痫发作。常见强直发作、失张力跌倒发作、不典型失神、肌阵挛、全面强直阵挛或非惊厥性癫痫持续状态。跌倒发作容易造成头面部和四肢外伤。</p><p>许多孩子伴认知、语言、行为、睡眠和运动发育问题，发作和药物副作用都会影响学习和家庭生活。</p>',
    diagnosis:
      '<p>诊断需要结合发作类型、发育史、长程视频 EEG 和脑 MRI。特征性脑电图包括慢棘慢波和睡眠期广泛性快节律活动，但不同阶段表现可变化。</p><p>医生会寻找潜在原因，如脑发育异常、缺氧缺血或感染后损伤、结节性硬化症、遗传/代谢病、既往婴儿痉挛综合征等，并与其他发育性癫痫性脑病鉴别。</p>',
    treatment:
      '<p>LGS 往往难以完全控制，治疗通常是多药组合并长期调整。常用方案可包括丙戊酸、拉莫三嗪、托吡酯、氯巴占、卢非酰胺、非氨酯、坎比二醇等，具体用药需由癫痫专科决定。</p><p>药物效果不足时，可评估生酮饮食、迷走神经刺激、胼胝体切开或其他癫痫外科策略。治疗目标包括减少跌倒和严重发作、降低急诊风险、改善发育和生活质量。</p>',
    longTermCare:
      '<p>长期管理包括发作日记、急救药计划、防跌倒和头部保护、睡眠管理、康复训练、语言和特殊教育支持，以及照护者心理和社会支持。</p>',
    fertilityOrFamily:
      '<p>LGS 的原因多样，不一定遗传。若怀疑遗传或代谢病，明确病因后再进行家属检测、复发风险评估和生育咨询。</p>',
    emergencySigns:
      '<p>发作超过 5 分钟、短时间内反复发作不恢复、呼吸发紫、严重跌倒外伤、发热伴发作明显增多、持续嗜睡或疑似癫痫持续状态，应按家庭急救计划处理并立即急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Epilepsy Foundation: Lennox-Gastaut Syndrome',
      type: 'patient-organization',
      url: 'https://www.epilepsy.com/what-is-epilepsy/syndromes/lennox-gastaut-syndrome',
    },
  ],
  symptoms:
    '<p>常见多种癫痫发作，尤其强直发作、失张力跌倒、不典型失神、肌阵挛和成串发作，并常伴认知、语言、行为和发育问题。</p>',
  diagnosis:
    '<p>诊断结合发作视频和病史、长程视频 EEG、脑 MRI 及病因学检查，重点识别特征性脑电图和潜在结构、遗传或代谢原因。</p>',
  treatment:
    '<p>治疗多为癫痫专科长期综合管理，包括多药组合、生酮饮食、迷走神经刺激、胼胝体切开等选择，并制定家庭急救和防跌倒计划。</p>',
  prognosis:
    '<p>LGS 通常长期存在且较难完全无发作，但系统治疗可减少严重发作和跌倒伤害，并改善学习、康复和家庭照护质量。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 398,
    name: 'lennox-gastaut-syndrome-journey.png',
    url: '/images/diseases/lennox-gastaut-syndrome-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

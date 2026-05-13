import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAngelmanSyndrome: DiseaseDraft = {
  ...entity(7, 'disease-angelman-syndrome'),
  name: '天使综合征',
  nameEn: 'Angelman Syndrome',
  alias: '安格曼综合征、Angelman 综合征',
  slug: 'angelman-syndrome',
  oneSentence:
    '天使综合征是一种主要影响神经发育的遗传性疾病，常表现为发育迟缓、语言能力受限、运动协调困难、癫痫和睡眠问题。',
  plainName: '以发育、语言和癫痫问题为主的遗传性神经发育疾病',
  prevalence:
    '估计约每 12,000-20,000 名新生儿 1 例，不同资料和地区统计存在差异。',
  searchIntents: [
    '天使综合征 看什么科',
    '孩子发育迟缓 不会说话 癫痫',
    'Angelman 综合征 UBE3A 检测',
    '天使综合征 康复训练',
    '天使综合征 再生育风险',
  ],
  quickLook: {
    whatItIs:
      '天使综合征多与 15 号染色体母源 UBE3A 功能缺失有关。孩子通常在婴幼儿期出现发育迟缓，随后表现出语言明显受限、共济失调、癫痫、睡眠问题和特征性行为。',
    whoToSeeFirst:
      '建议先看儿科或小儿神经内科；发育、运动和语言问题需要儿童康复科参与；确诊和家族风险解释需要遗传咨询。',
    isGenetic:
      '是，但多数病例并不是父母直接遗传而来。不同遗传机制对应的再次生育风险不同，需要结合分子检测结果解释。',
    hasTreatment:
      '目前没有根治方法，重点是癫痫管理、睡眠和行为支持、康复训练、沟通辅助、喂养和家庭照护支持。',
    commonDelayReason:
      '早期容易被笼统归为发育迟缓、自闭症谱系或脑瘫，未及时结合语言严重受限、运动协调、癫痫、睡眠和遗传检测线索。',
  },
  patientJourney: {
    whenToSuspect: [
      '6-12 个月后发育明显落后，坐、爬、走或语言发育迟缓。',
      '语言表达明显少于同龄儿童，理解和表达差距较大。',
      '走路不稳、动作不协调、手抖或兴奋时手部拍动。',
      '反复癫痫发作、异常脑电图或睡眠问题明显。',
      '同时有小头、喂养困难、便秘、容易兴奋或频繁笑等线索。',
    ],
    commonWrongTurns: [
      '只做普通康复训练，没有进一步寻找遗传原因。',
      '被当作自闭症或脑瘫处理，但没有评估癫痫、睡眠和 UBE3A 相关机制。',
      '只关注孩子“爱笑”，忽略发育、语言和运动协调障碍。',
      '基因检测结果不完整，未区分缺失、单亲二倍体、印记异常或 UBE3A 变异。',
    ],
    firstDepartments: ['儿科', '小儿神经内科', '儿童康复科', '遗传咨询门诊'],
    diagnosisChecklist: [
      '整理发育里程碑、语言能力、运动表现、睡眠、癫痫和喂养情况。',
      '带上脑电图、脑部影像、康复评估、遗传检测和既往诊断资料。',
      '记录家族中发育迟缓、癫痫、流产或类似遗传问题。',
      '向医生确认现有检测是否足以覆盖 Angelman 综合征的主要遗传机制。',
    ],
    testsToAskAbout: [
      '15q11-q13 甲基化相关检测。',
      '染色体微阵列、MLPA 或拷贝数变异检测。',
      'UBE3A 基因测序或相关神经发育基因检测。',
      '脑电图和癫痫类型评估。',
      '语言、吞咽、运动、认知和睡眠评估。',
    ],
    questionsForDoctor: [
      '孩子的检测结果提示哪一种遗传机制？再次生育风险怎样判断？',
      '癫痫、睡眠、喂养和便秘分别需要怎样管理？',
      '康复训练和沟通辅助应优先做哪些目标？',
      '哪些情况需要急诊或尽快复诊？',
      '学校和家庭环境可以做哪些支持调整？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>常见表现包括发育迟缓、智力发育障碍、语言表达明显受限、运动协调困难、步态不稳、手部拍动、癫痫、睡眠障碍和小头。部分儿童还会有喂养困难、胃食管反流、便秘、斜视或色素偏浅等问题。</p>',
    diagnosis:
      '<p>诊断通常结合发育和神经系统表现、脑电图、发育评估和分子遗传学检测。甲基化检测可发现多数病例，但不同机制需要不同检测组合才能解释复发风险。</p>',
    treatment:
      '<p>管理以长期支持为主，包括癫痫治疗、睡眠和行为管理、物理/作业/言语康复、替代沟通方式、营养和吞咽支持。治疗目标应围绕安全、沟通、功能参与和家庭照护可持续性。</p>',
    longTermCare:
      '<p>长期照护需要关注癫痫控制、睡眠、便秘、脊柱侧弯、运动能力、沟通能力、营养、青春期和家庭照护压力。成年后仍需要连续的医疗和生活支持。</p>',
    fertilityOrFamily:
      '<p>天使综合征的复发风险取决于具体遗传机制。建议在确认分子诊断后进行遗传咨询，讨论父母检测、再次生育风险和产前/胚胎植入前遗传学检测等选择。</p>',
    emergencySigns:
      '<p>癫痫持续发作、反复发作后意识不能恢复、明显呼吸异常、严重脱水、持续高热或精神状态明显改变时，应及时急诊就医，并携带既往诊断和用药信息。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Angelman syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/',
    },
    {
      name: 'GeneReviews: Angelman Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1144/',
    },
    {
      name: 'GARD: Angelman syndrome',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/5810/angelman-syndrome',
    },
  ],
  symptoms:
    '<p>常见表现包括发育迟缓、语言严重受限、运动协调困难、癫痫、睡眠问题和特征性行为。</p>',
  diagnosis:
    '<p>评估通常包括发育评估、脑电图和 15q11-q13/UBE3A 相关遗传检测。</p>',
  treatment:
    '<p>管理重点是癫痫控制、康复训练、沟通辅助、睡眠和行为支持，以及家庭照护支持。</p>',
  prognosis:
    '<p>多数患者需要终身支持。早期康复、沟通辅助和癫痫睡眠管理可改善参与度和家庭照护质量。</p>',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 307,
    name: 'angelman-syndrome-journey.png',
    url: '/images/diseases/angelman-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

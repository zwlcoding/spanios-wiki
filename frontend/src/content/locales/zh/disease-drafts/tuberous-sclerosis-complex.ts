import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTuberousSclerosisComplex: DiseaseDraft = {
  ...entity(1114, 'catalog-china-first-rare-disease-catalog-114'),
  name: '结节性硬化症',
  nameEn: 'Tuberous Sclerosis Complex',
  alias: 'TSC、结节性硬化复合征、第一批罕见病目录第 114 项',
  slug: 'tuberous-sclerosis-complex',
  oneSentence:
    '结节性硬化症是一种多系统遗传性疾病，常由TSC1或TSC2基因变异引起，可在脑、皮肤、肾脏、心脏、肺和眼部形成错构瘤或相关病变。',
  plainName: '会影响脑、皮肤和多个器官的遗传性多系统疾病',
  prevalence: '已纳入国家第一批罕见病目录；国际资料常估计约每6,000人中1例。',
  quickLook: {
    whatItIs:
      'TSC的关键不是单一“结节”，而是多个器官可能随年龄出现不同问题。婴幼儿可先因癫痫或皮肤白斑就诊，成年后也可能因肾血管平滑肌脂肪瘤、肺部问题或皮肤改变被发现。',
    whoToSeeFirst:
      '儿童可先看儿童神经科、皮肤科或医学遗传科；成人可由神经内科、肾内科、皮肤科、呼吸科和遗传门诊共同评估。',
    isGenetic:
      'TSC多与TSC1或TSC2基因有关，常染色体显性遗传，很多患者为新发变异。确诊者及家属建议做遗传咨询和家系评估。',
    hasTreatment:
      '治疗取决于受累器官，包括癫痫控制、发育行为支持、皮肤和肾脏监测，部分病变可评估mTOR抑制剂、手术或介入方案。',
    commonDelayReason:
      '皮肤白斑、面部血管纤维瘤、癫痫、肾脏病变常被分散处理；如果没有把多器官线索连接起来，就容易漏诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿痉挛、反复癫痫发作，或发育倒退/明显发育迟缓。',
      '皮肤出现白色叶形斑、面部红色丘疹、鲨革斑或甲周纤维瘤。',
      '影像提示脑室管膜下结节、皮质结节，或肾脏血管平滑肌脂肪瘤。',
      '家族中有人有TSC、癫痫、肾脏错构瘤或类似皮肤表现。',
    ],
    commonWrongTurns: [
      '只按普通癫痫治疗，没有查看皮肤、肾脏、眼底和家族史。',
      '把白斑当作普通色素减退，没有用伍德灯和系统评估。',
      '成年肾脏病变被单独处理，未追问儿童期癫痫或皮肤表现。',
    ],
    firstDepartments: [
      '儿童神经科',
      '神经内科',
      '皮肤科',
      '肾内科',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '整理癫痫发作视频、脑电图、头颅MRI、肾脏超声/CT/MRI和皮肤照片。',
      '记录发育、学习、行为、睡眠和肾脏/肺部症状。',
      '带上家族成员类似表现、基因检测和既往用药反应。',
    ],
    testsToAskAbout: [
      '头颅MRI、脑电图和发育行为评估。',
      '皮肤科检查和伍德灯检查。',
      '肾脏影像、血压、肾功能和尿检。',
      'TSC1/TSC2基因检测，必要时做家属验证。',
      '按年龄和性别评估眼底、心脏和肺部受累。',
    ],
    questionsForDoctor: [
      '目前哪些器官已经受累？哪些需要定期筛查？',
      '癫痫是否需要调整方案，是否适合进一步评估手术或靶向药？',
      '肾脏病变大小和出血风险如何？多久复查影像？',
      '家属是否需要检查或遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>TSC可以影响脑、皮肤、肾脏、心脏、肺和眼睛。常见线索包括癫痫、婴儿痉挛、发育迟缓、学习或行为问题、皮肤白斑、面部血管纤维瘤、鲨革斑、甲周纤维瘤，以及肾脏血管平滑肌脂肪瘤。</p><p>表现随年龄变化。婴幼儿可能先因癫痫或心脏横纹肌瘤被发现；成人可能以肾脏或肺部问题就诊。即使症状较轻，也需要多器官随访。</p>',
    diagnosis:
      '<p>诊断通常结合临床标准、影像、皮肤检查和基因检测。头颅MRI、脑电图、肾脏影像和皮肤科评估有助于判断是否符合TSC以及当前受累范围。</p><p>TSC1/TSC2基因检测可帮助确认诊断、做家系评估和遗传咨询；检测阴性并不能完全排除，仍需由熟悉TSC的医生结合临床判断。</p>',
    treatment:
      '<p>治疗按器官和风险分层。癫痫需要尽早规范控制，婴儿痉挛尤其要及时处理；肾脏病变需定期影像监测，必要时评估药物、介入或手术；皮肤、行为、学习和睡眠问题也应纳入照护。</p><p>部分TSC相关病变可评估mTOR抑制剂。是否适合、如何监测副作用，应由专科团队决定。</p>',
    longTermCare:
      '<p>TSC是长期管理疾病。建议建立跨学科随访表，按年龄安排脑、肾、皮肤、眼、肺、心脏和心理行为评估，并保存关键影像和基因报告。</p>',
    fertilityOrFamily:
      '<p>TSC可常染色体显性遗传。患者生育前和家属筛查应基于基因结果、临床表现和家系情况进行遗传咨询。</p>',
    emergencySigns:
      '<p>长时间癫痫发作、连续发作不恢复、突发剧烈头痛呕吐、意识改变、急性肢体无力、肉眼血尿或腰腹痛提示肾脏出血风险时，应尽快急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委员会《第一批罕见病目录》',
      type: 'official',
      url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    },
    {
      name: 'MedlinePlus Genetics: Tuberous sclerosis complex',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/tuberous-sclerosis-complex/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>常见表现包括癫痫、发育行为问题、皮肤白斑或面部丘疹、肾脏血管平滑肌脂肪瘤，以及不同年龄出现的多器官病变。</p>',
  diagnosis:
    '<p>诊断结合临床标准、头颅和肾脏影像、皮肤检查、脑电图和TSC1/TSC2基因检测。</p>',
  treatment:
    '<p>治疗按受累器官制定，包括癫痫控制、肾脏监测、皮肤和发育行为支持，部分患者可评估mTOR抑制剂或手术/介入。</p>',
  prognosis:
    '<p>预后差异很大；规范筛查和早期处理癫痫、肾脏及行为问题，可降低严重并发症风险。</p>',
  sourceName: '国家卫生健康委员会《第一批罕见病目录》',
  sourceUrl:
    'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
  categorySlug: 'genetic-developmental',
  charityIds: [62],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

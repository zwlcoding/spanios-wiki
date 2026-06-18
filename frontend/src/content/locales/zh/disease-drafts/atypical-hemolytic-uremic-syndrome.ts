import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAtypicalHemolyticUremicSyndrome: DiseaseDraft = {
  ...entity(10, 'disease-atypical-hemolytic-uremic-syndrome'),
  name: '非典型溶血性尿毒症综合征',
  nameEn: 'Atypical Hemolytic Uremic Syndrome',
  alias: 'aHUS、非典型溶血尿毒综合征、补体介导性 HUS',
  slug: 'atypical-hemolytic-uremic-syndrome',
  oneSentence:
    '非典型溶血性尿毒症综合征是一类以微血管血栓、溶血性贫血、血小板减少和肾损伤为主要表现的罕见疾病，常与补体调控异常有关。',
  plainName: '补体异常相关的血液和肾脏急症',
  prevalence:
    '属于罕见病，MedlinePlus 提到美国年发病率估计约每 500,000 人 1 例。',
  searchIntents: [
    'aHUS 看什么科',
    '血小板低 溶血 肾功能异常',
    '非典型溶血尿毒综合征 补体检查',
    'aHUS 和 HUS 区别',
    'aHUS 复发和遗传风险',
  ],
  quickLook: {
    whatItIs:
      'aHUS 会让小血管内形成异常血栓，红细胞被破坏、血小板下降，并造成急性肾损伤。它不同于常见感染相关典型 HUS，需要尽快由专科区分原因。',
    whoToSeeFirst:
      '急性期优先急诊、儿科、肾内科或血液科。儿童患者常先到儿科或儿科肾脏科；成人可由肾内科和血液科共同评估。',
    isGenetic:
      '一部分患者与补体相关基因易感有关，也可能由感染、妊娠、药物、移植或其他疾病触发。是否遗传和家族风险需要结合基因检测判断。',
    hasTreatment:
      '需要尽快识别并由肾内科/血液科处理。治疗可能涉及支持治疗、血浆治疗、补体相关治疗和透析等，具体取决于病因、严重程度和当地可及性。',
    commonDelayReason:
      '早期贫血、乏力、尿量减少、血小板低或肾功能异常可能被分散处理，未及时把溶血、血小板减少和肾损伤作为一个整体识别。',
  },
  patientJourney: {
    whenToSuspect: [
      '突然出现尿量减少、血尿或肾功能快速异常。',
      '贫血、黄疸、乏力，同时血小板下降。',
      '检查提示乳酸脱氢酶升高、裂红细胞或溶血证据。',
      '高血压、头痛、抽搐、意识改变等肾脏或神经系统受累。',
      '感染、妊娠、产后、移植或某些药物后出现血液和肾脏异常。',
    ],
    commonWrongTurns: [
      '只按普通肾炎或感染处理，没有同步评估溶血和血小板。',
      '把血小板低单独当作血液病，忽略肾损伤和补体相关可能。',
      '未及时排除典型 HUS、TTP、系统性自身免疫病等相似情况。',
      '急性期好转后停止随访，忽略复发和慢性肾损伤风险。',
    ],
    firstDepartments: [
      '急诊科',
      '肾内科',
      '儿科肾脏科',
      '血液科',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '整理血常规、血小板、肌酐、尿检、LDH、胆红素、结合珠蛋白、外周血涂片等结果。',
      '记录近期腹泻、感染、妊娠/产后、药物、移植、自身免疫病或家族史。',
      '带上血压、尿量、透析、输血、血浆治疗或补体治疗相关记录。',
      '向医生确认是否已排除 STEC-HUS、TTP 和其他血栓性微血管病。',
    ],
    testsToAskAbout: [
      '血常规、网织红细胞、外周血涂片、LDH、胆红素、结合珠蛋白。',
      '肌酐、尿检、尿蛋白、血压和肾脏影像。',
      'ADAMTS13 活性，用于区分 TTP。',
      '补体 C3/C4、补体调控相关抗体或基因检测。',
      '腹泻相关病原和 Shiga 毒素检测，视情况排除典型 HUS。',
    ],
    questionsForDoctor: [
      '目前更像 aHUS、典型 HUS、TTP，还是其他血栓性微血管病？',
      '现在肾脏损伤程度如何，是否需要透析或重症监护？',
      '是否需要补体相关治疗或基因检测？',
      '以后感染、妊娠、手术或用药时需要注意什么？',
      '家属是否需要筛查或遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>aHUS 常表现为溶血性贫血、血小板减少和急性肾损伤。患者可能出现乏力、面色苍白、黄疸、尿量减少、血尿、水肿、高血压、头痛、恶心呕吐、抽搐或意识改变。</p>',
    diagnosis:
      '<p>诊断需要识别血栓性微血管病，并排除典型 HUS、TTP、感染、药物、自身免疫病、妊娠相关疾病等原因。检查通常包括血液溶血指标、肾功能、尿检、ADAMTS13、补体评估和必要的遗传检测。</p>',
    treatment:
      '<p>急性期需要肾内科、血液科和重症团队快速处理。治疗可能包括液体和血压管理、输血、透析、血浆治疗或补体通路相关治疗，具体选择取决于诊断判断、严重程度和当地药物可及性。</p>',
    longTermCare:
      '<p>长期随访关注肾功能、血压、尿蛋白、血常规、复发风险和触发因素。儿童还要关注生长发育；育龄女性需在妊娠前进行专科评估。</p>',
    fertilityOrFamily:
      '<p>部分 aHUS 与补体相关基因易感有关，遗传方式可为常染色体显性、隐性或更复杂模式。确诊后可通过遗传咨询讨论家族成员筛查和生育风险。</p>',
    emergencySigns:
      '<p>尿量显著减少或无尿、严重乏力或面色苍白、黄疸加重、抽搐、意识改变、严重头痛视物模糊、血压明显升高或呼吸困难时，应立即就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Genetic Atypical Hemolytic-Uremic Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1367/',
    },
    {
      name: 'MedlinePlus Genetics: Atypical hemolytic-uremic syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/atypical-hemolytic-uremic-syndrome/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>常见线索包括溶血性贫血、血小板减少、尿量减少、肾功能异常、高血压和神经系统症状。</p>',
  diagnosis:
    '<p>评估通常包括溶血指标、血小板、肾功能、尿检、ADAMTS13、补体检查、感染排除和相关基因检测。</p>',
  treatment:
    '<p>急性期需要专科快速处理，可能涉及支持治疗、透析、血浆治疗或补体相关治疗评估。</p>',
  prognosis:
    '<p>病程和复发风险差异较大，早期识别、规范急性期处理和长期肾脏随访很重要。</p>',
  categorySlug: 'renal-urologic',
  charityIds: [57],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 308,
    name: 'atypical-hemolytic-uremic-syndrome-journey.png',
    url: '/images/diseases/atypical-hemolytic-uremic-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseJoubertSyndrome: DiseaseDraft = {
  ...entity(6104, 'disease-joubert-syndrome'),
  name: 'Joubert综合征',
  nameEn: 'Joubert syndrome',
  alias: 'Joubert-Bolthauser综合征、JBTS、JSRD、磨牙征相关综合征',
  oneSentence:
    'Joubert综合征是一组以脑MRI“磨牙征”为核心特征的遗传性脑发育疾病，可导致婴儿肌张力低、呼吸节律异常、眼球运动异常、发育迟缓、共济失调，并可累及眼、肾、肝或骨骼。',
  plainName: '脑干和小脑发育异常导致运动、呼吸和多系统问题的遗传病',
  prevalence:
    'MedlinePlus Genetics 估计约每80,000到100,000名新生儿1例，但可能因漏诊而低估。',
  quickLook: {
    whatItIs:
      '核心线索是MRI上脑干和小脑蚓部发育异常形成“磨牙征”。不同基因和亚型可造成从轻到重的神经发育和多器官表现。',
    whoToSeeFirst:
      '婴儿肌张力低、异常呼吸、眼球运动异常、发育迟缓或共济失调，应到儿童神经科、医学遗传科、康复科和眼科评估。',
    isGenetic:
      '多与纤毛功能相关基因有关，常见为常染色体隐性遗传，也有少数其他遗传方式。确诊后应做遗传咨询。',
    hasTreatment:
      '没有根治方法，治疗以呼吸安全、康复、发育支持、癫痫处理、眼肾肝等并发症筛查和家庭支持为主。',
    commonDelayReason:
      '早期容易被当作脑瘫、单纯发育迟缓或眼球运动问题；若没有做高质量脑MRI并识别磨牙征，会延迟诊断。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿肌张力低，抬头、坐、站、走明显延迟。',
      '出现呼吸过快/呼吸暂停样节律异常，尤其婴儿期明显。',
      '眼球震颤、眼球运动启动困难、斜视或视网膜问题。',
      '共济失调、走路不稳，或合并多指/趾、肾病、肝纤维化等表现。',
    ],
    commonWrongTurns: [
      '只按脑瘫康复，没有复核MRI后颅窝和脑干结构。',
      '只关注运动发育，未筛查视网膜、肾脏和肝脏并发症。',
      '基因检测阴性后停止随访，忽视仍需按临床综合征管理。',
    ],
    firstDepartments: ['儿童神经科', '医学遗传科', '康复医学科', '眼科'],
    diagnosisChecklist: [
      '带脑MRI原片和报告，尤其后颅窝、小脑蚓部和脑干影像。',
      '整理呼吸节律、发育里程碑、眼球运动、癫痫和喂养吞咽情况。',
      '带眼底/ERG、肾脏超声、肝功能、尿检和家族史资料。',
    ],
    testsToAskAbout: [
      '脑MRI确认磨牙征。',
      'Joubert/纤毛病相关基因panel或外显子/基因组检测。',
      '眼科、肾脏、肝脏、骨骼和内分泌并发症筛查。',
    ],
    questionsForDoctor: [
      'MRI是否明确磨牙征？还需要复核影像吗？',
      '孩子属于哪种遗传类型，家族复发风险如何？',
      '眼、肾、肝分别需要多久筛查一次？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Joubert综合征常在婴儿期表现为肌张力低、异常呼吸节律、眼球运动异常和运动发育迟缓。随着年龄增长，可表现为共济失调、语言和认知发育差异、癫痫、体温调节或行为问题。</p><p>部分患者合并视网膜营养不良、肾病、肝病、多指/趾、口面部或骨骼异常，表现差异很大。</p>',
    diagnosis:
      '<p>诊断核心是脑MRI“磨牙征”，即小脑蚓部和脑干发育异常形成的特征性影像。基因检测可帮助明确亚型和家族风险，但阴性结果不能完全排除临床诊断。</p>',
    treatment:
      '<p>治疗以支持为主，包括呼吸监测、康复训练、吞咽营养支持、癫痫处理、眼科和肾肝随访、学校支持和辅助沟通。具体方案取决于受累器官和功能水平。</p>',
    longTermCare:
      '<p>长期照护需定期评估运动、语言、学习、眼、肾、肝、骨骼和呼吸睡眠。很多风险会随年龄显现，因此即使早期较轻，也不能停止筛查。</p>',
    fertilityOrFamily:
      '<p>常见遗传方式为常染色体隐性，父母多为携带者；不同基因也可能有其他遗传模式。遗传咨询可解释复发风险、亲属检测和生育选择。</p>',
    emergencySigns:
      '<p>呼吸暂停或发绀、严重喂养呛咳、持续抽搐、意识改变、尿量明显减少、黄疸或腹胀加重、快速视力下降，应尽快就医。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Joubert syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/joubert-syndrome/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>婴儿肌张力低、异常呼吸、眼球运动异常、发育迟缓、共济失调，可伴癫痫及眼、肾、肝或骨骼受累。</p>',
  diagnosis:
    '<p>脑MRI磨牙征是核心诊断线索，结合临床表现、基因检测和多器官筛查。</p>',
  treatment:
    '<p>以康复、呼吸和吞咽安全、癫痫处理、眼肾肝监测、教育和家庭支持为主。</p>',
  prognosis:
    '<p>差异很大，取决于神经发育程度和眼、肾、肝等受累；持续筛查可减少可预防风险。</p>',
  sourceName: 'MedlinePlus Genetics: Joubert syndrome',
  sourceUrl: 'https://medlineplus.gov/genetics/condition/joubert-syndrome/',
  slug: 'joubert-syndrome',
  categorySlug: 'neurological',
  charityIds: [87],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

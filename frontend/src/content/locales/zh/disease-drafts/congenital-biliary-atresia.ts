import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalBiliaryAtresia: DiseaseDraft = {
  ...entity(2016, 'disease-congenital-biliary-atresia'),
  name: '先天性胆道闭锁',
  nameEn: 'Congenital biliary atresia',
  alias:
    '胆道闭锁、胆管闭锁、Kasai术相关胆汁淤积性肝病、第二批罕见病目录第 16 项',
  slug: 'congenital-biliary-atresia',
  oneSentence:
    '先天性胆道闭锁是一种婴儿期严重胆汁淤积性肝胆疾病，胆汁不能顺利从肝脏排入肠道，可造成持续黄疸、白陶土样大便和进展性肝损伤。',
  plainName: '婴儿胆汁排不出去、需要尽早手术评估的肝胆病',
  prevalence:
    '已纳入国家第二批罕见病目录；Mayo Clinic 资料提到约每 10,000-20,000 名活产儿 1 例，地区和筛查方式会影响统计。',
  quickLook: {
    whatItIs:
      '胆道闭锁发生在新生儿和小婴儿，肝内外胆管出现炎症、纤维化或堵塞。胆汁长期淤积会损伤肝脏，进展为肝硬化、门静脉高压或肝衰竭。',
    whoToSeeFirst:
      '宝宝出生 2-3 周后黄疸仍不退、尿色深或大便变浅，应尽快看儿科消化/肝病专科或儿童肝胆外科，而不是长期观察。',
    isGenetic:
      '大多数胆道闭锁不是典型遗传病，也不是父母孕期行为造成。少数可伴其他先天异常，是否需要遗传或综合征评估由儿科肝病团队判断。',
    hasTreatment:
      '关键是尽早评估是否适合 Kasai 手术。手术不能治愈所有孩子，但越早恢复胆汁引流，越可能延缓肝损伤；部分孩子仍需肝移植评估。',
    commonDelayReason:
      '早期容易被当作普通新生儿黄疸。真正要警惕的是黄疸持续、直接胆红素升高、白陶土样大便和深色尿，尤其超过 3 周仍未解释时。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生 2-3 周后皮肤或眼白仍明显发黄，或黄疸退后又加重。',
      '大便变成淡黄、灰白或白陶土样，尿色像浓茶。',
      '宝宝腹部胀、肝脾大、吃奶差、体重增长慢或容易烦躁。',
      '化验提示直接胆红素或结合胆红素升高，而不是单纯生理性黄疸。',
    ],
    commonWrongTurns: [
      '只按“母乳性黄疸”或“生理性黄疸”观察，没有查直接胆红素和大便颜色。',
      '只照蓝光或退黄处理，却没有寻找胆汁淤积原因。',
      '等到月龄较大、肝纤维化加重后才转儿童肝胆外科。',
      'Kasai 术后黄疸或发热复发时没有及时识别胆管炎和肝功能恶化。',
    ],
    firstDepartments: [
      '儿科消化/肝病专科',
      '儿童肝胆外科',
      '儿童肝移植中心',
      '营养科',
    ],
    diagnosisChecklist: [
      '记录黄疸出现和持续时间、尿色、大便颜色，并可带大便照片或使用大便比色卡记录。',
      '带齐总胆红素/直接胆红素、肝酶、凝血、腹部超声、HIDA 或其他影像资料。',
      '记录出生史、早产史、感染史、维生素 K 使用、喂养和体重增长情况。',
      '如已手术，带 Kasai 手术记录、病理、胆管造影、出院小结和术后复查结果。',
    ],
    testsToAskAbout: [
      '总胆红素和直接胆红素、肝功能、凝血功能、血常规和感染评估。',
      '腹部超声，必要时胆道显像、MRI/MRCP 或术中胆道造影。',
      '排除其他婴儿胆汁淤积病因的代谢、感染、遗传或内分泌相关检查。',
      '肝活检或手术探查是否必要，以及是否需尽早转儿童肝胆中心。',
    ],
    questionsForDoctor: [
      '宝宝是直接胆红素升高吗？现在是否已经需要按胆汁淤积紧急评估？',
      '目前证据是否支持胆道闭锁？还需要排除哪些疾病？',
      '是否适合 Kasai 手术？手术时机、目标和失败后预案是什么？',
      '术后如何监测胆管炎、营养、维生素缺乏、门静脉高压和肝移植时机？',
      '哪些发热、黄疸加重、便色变浅或出血情况需要马上急诊？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>胆道闭锁最重要的早期线索是婴儿黄疸持续不退，尤其出生 2-3 周后仍明显发黄，伴尿色加深和大便变浅、灰白或白陶土样。宝宝一开始可能吃奶和体重增长尚可，因此容易被误认为普通黄疸。</p><p>随着胆汁淤积加重，可出现肝脾大、腹胀、体重增长差、皮肤瘙痒、脂溶性维生素缺乏、凝血异常、门静脉高压和肝硬化表现。</p>',
    diagnosis:
      '<p>任何 3 周后仍有黄疸的婴儿都应评估胆道闭锁和其他胆汁淤积性肝病。检查通常包括总胆红素和直接胆红素、肝功能、凝血功能、腹部超声和针对感染、代谢、遗传、内分泌等病因的排查。</p><p>若高度怀疑胆道闭锁，医生可能安排胆道显像、肝活检、MRCP 或手术探查/胆道造影。确诊和治疗需要与儿童肝胆外科紧密衔接，因为手术时机会影响预后。</p>',
    treatment:
      '<p>Kasai 肝门空肠吻合术通常是首选治疗，用肠管为胆汁建立新的引流路径。它不能修复所有肝损伤，也不等于治愈，但成功时可减轻黄疸、延缓肝硬化和推迟或避免肝移植。</p><p>术后还需要营养支持、脂溶性维生素补充、胆管炎预防和处理、肝功能和凝血监测。若胆汁引流失败、反复胆管炎或出现肝衰竭/严重门静脉高压，应评估肝移植。</p>',
    longTermCare:
      '<p>长期管理包括肝功能、胆红素、凝血、营养、维生素水平、脾大、食管胃静脉曲张和生长发育监测。家长需要学会观察大便颜色、尿色、发热和黄疸变化。</p><p>即使 Kasai 术后效果较好，也可能在儿童期或成年后出现慢性肝病并发症，因此需要在儿童肝病或移植团队长期随访。</p>',
    fertilityOrFamily:
      '<p>胆道闭锁大多不是典型遗传病，家中其他孩子通常不需要常规遗传筛查。若伴多脾、心脏畸形、肠旋转异常或医生怀疑综合征性胆道闭锁，可进一步评估。</p>',
    emergencySigns:
      '<p>宝宝出现发热、黄疸突然加重、大便再次变浅、尿色明显加深、精神差、拒奶、呕血、黑便、腹胀明显、出血点或嗜睡，应立即急诊，并说明疑似或确诊胆道闭锁及是否做过 Kasai 手术。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'NIDDK: Biliary Atresia',
      type: 'official',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/biliary-atresia',
    },
    {
      name: 'MedlinePlus Medical Encyclopedia: Biliary atresia',
      type: 'official',
      url: 'https://medlineplus.gov/ency/article/001145.htm',
    },
  ],
  symptoms:
    '<p>主要表现为出生后数周黄疸持续、尿色深、大便淡黄灰白或白陶土样，随后可有肝脾大、营养不良和肝硬化并发症。</p>',
  diagnosis:
    '<p>诊断从直接胆红素升高和胆汁淤积评估开始，结合腹部超声、胆道显像/造影、肝活检或手术探查，并排除其他婴儿胆汁淤积病因。</p>',
  treatment:
    '<p>核心治疗是尽早评估 Kasai 肝门空肠吻合术，术后长期营养、维生素、胆管炎和肝病并发症管理，必要时肝移植。</p>',
  prognosis:
    '<p>预后与诊断和手术时机、术后胆汁引流效果、胆管炎和肝硬化进展有关；尽早转儿童肝胆中心非常关键。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'digestive-hepatic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 370,
    name: 'congenital-biliary-atresia-journey.png',
    url: '/images/diseases/congenital-biliary-atresia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

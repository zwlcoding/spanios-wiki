import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseIdiopathicCardiomyopathy: DiseaseDraft = {
  ...entity(54, 'disease-idiopathic-cardiomyopathy'),
  name: '特发性心肌病',
  nameEn: 'Idiopathic Cardiomyopathy',
  alias:
    '特发性扩张型心肌病（IDC）、家族性扩张型心肌病（FDCM）、致心律失常型右室发育不良/心肌病（ARVC）、左室致密化不全（LVNC）、遗传性转甲状腺素蛋白相关淀粉样变（hATTR）',
  slug: 'idiopathic-cardiomyopathy',
  oneSentence:
    '特发性心肌病是一组在排除明确继发原因后诊断的心肌疾病，可表现为心力衰竭、心律失常、传导异常或猝死风险，并可能具有遗传背景。',
  plainName: '特发性心肌病',
  prevalence:
    '特发性扩张型心肌病（DCM）患病率约36.5/100,000（约1/2,700），其中约20%~35%为家族性。致心律失常型右室心肌病（ARVC）患病率约1/2,000~1/1,000。限制型心肌病估计患病率约1/100,000~9/100,000。左室致密化不全通过超声心动图检出率约1.4/10,000。',
  quickLook: {
    whatItIs:
      '这是一组异质性心肌疾病，不是单一诊断。医生需要区分扩张型、肥厚型、限制型、致心律失常型、左室致密化不全等类型，并排除缺血、瓣膜、毒物、感染、炎症和内分泌等继发原因。',
    whoToSeeFirst:
      '出现心悸、胸闷、乏力、呼吸困难、下肢水肿等心衰表现时，建议首先就诊心血管内科或心力衰竭专科。有明确家族史或已知基因突变携带者，建议在心血管内科基础上进行遗传咨询和家系筛查。严重心衰或考虑心脏移植时，需就诊具备心脏移植资质的中心。',
    isGenetic:
      '是，多数特发性心肌病具有遗传背景。家族性扩张型心肌病多为常染色体显性遗传，已发现超过30个相关基因（如TTN、LMNA、MYH7等）。致心律失常型右室心肌病也以常染色体显性遗传为主。部分类型（如转甲状腺素蛋白相关淀粉样变）为常染色体显性遗传。',
    hasTreatment:
      '有针对心衰、心律失常、血栓、遗传风险和终末期心衰的管理路径，但治疗取决于具体心肌病类型、心功能、心律风险和基因结果。',
    commonDelayReason:
      '心衰早期症状不典型（乏力、活动耐力下降），易被误认为工作疲劳或年龄相关。部分患者以心律失常或猝死为首发表现，失去了早期干预机会。家族史收集不完整导致家系筛查遗漏，使得家族性病例未能及时识别。',
  },
  patientJourney: {
    whenToSuspect: [
      '出现无明显诱因的胸闷、心悸、乏力、活动耐力下降',
      '出现下肢水肿、夜间阵发性呼吸困难等心衰体征',
      '心电图或超声心动图发现心室扩大或收缩功能下降',
      '反复发作性心悸、晕厥或黑矇，疑似心律失常',
      '有不明原因心衰家族史，或直系亲属中有50岁前猝死病史',
      '青年患者出现不能用其他原因解释的心室扩大或心功能减低',
    ],
    commonWrongTurns: [
      '将早期心衰症状误认为工作疲劳或年龄增长，延误就医',
      '发现心室扩大后仅对症用药，未进行病因分析和基因检测',
      '忽视家族史询问，未对一级亲属进行临床筛查',
      '未能识别可逆性继发因素（如长期大量饮酒、某些化疗药物），错过针对性干预',
      '仅关注心脏功能，忽视心电传导异常和猝死风险评估',
    ],
    firstDepartments: [
      '心血管内科或心力衰竭/心肌病专科',
      '心脏电生理科（出现心律失常症状时）',
      '遗传咨询科或医学遗传科（需要进行基因检测和家系咨询时）',
      '心脏影像科（心脏磁共振评估）',
      '心脏外科（考虑器械治疗或移植评估时）',
    ],
    diagnosisChecklist: [
      '详细病史和家族史采集（至少追溯3代）',
      '体格检查：心率、血压、颈静脉怒张、肺部啰音、心脏杂音、肝肿大、下肢水肿等',
      '心电图（12导联）：评估心律、传导阻滞、ST-T改变、异常Q波等',
      '超声心动图：评估心腔大小、室壁厚度、左室射血分数（LVEF）、瓣膜功能等',
      '心脏磁共振（CMR）：精确评估心肌纤维化、存活心肌和形态学改变',
      '实验室检查：NT-proBNP/BNP、心肌酶、电解质、肝肾功能、甲状腺功能等',
      '基因检测：对疑似遗传性心肌病进行基因 panel 检测',
      '冠脉造影或冠脉CT：排除缺血性心肌病',
      '家系筛查：一级亲属进行临床评估和超声心动图筛查',
    ],
    testsToAskAbout: [
      '超声心动图（LVEF、心腔大小）',
      '心电图',
      'NT-proBNP或BNP',
      '心脏磁共振（CMR）',
      '基因检测（心肌病基因 panel）',
      '冠脉造影或冠脉CT',
    ],
    questionsForDoctor: [
      '我的心肌病是什么类型？有没有明确的基因突变？',
      '这个病会遗传吗？我的家人需要做哪些检查？',
      '我的病情严重吗？心功能处于哪个阶段？',
      '目前有哪些药物和治疗手段？需要装起搏器或ICD吗？',
      '日常生活需要注意什么？还能正常工作或运动吗？',
      '我还能怀孕生孩子吗？',
    ],
  },
  medicalSections: {
    symptoms:
      '特发性心肌病症状取决于具体类型和严重程度。扩张型心肌病早期可无症状，逐渐出现乏力、活动耐力下降、心悸、胸闷；严重时出现夜间阵发性呼吸困难、端坐呼吸、下肢水肿等心衰表现。致心律失常型右室心肌病以心悸、晕厥、黑矇、持续性室性心动过速为主要表现，可伴有大动脉栓塞事件。限制型心肌病以右心衰为主，表现为颈静脉怒张、腹水、下肢水肿，但左室收缩功能相对保留。左室致密化不全可出现心衰、心律失常和血栓栓塞。遗传性转甲状腺素蛋白相关淀粉样变以进行性心衰和周围神经病变为主要特征。',
    diagnosis:
      '特发性心肌病诊断首先需排除继发性病因（如缺血、高血压、瓣膜病、酒精性心肌病、化疗药物等），然后通过临床表现、影像学检查（超声心动图、心脏磁共振）、心电图、基因检测等综合判断。扩张型心肌病诊断标准包括左室扩大伴收缩功能障碍，且排除继发因素。家族性扩张型心肌病诊断需对3代以上家族史进行详细调查，并对一级亲属进行临床筛查。基因检测对明确诊断、家系管理和风险分层有重要价值。',
    treatment:
      '治疗需要先明确心肌病类型和风险分层。管理可能包括心衰药物、心律失常处理、抗凝评估、植入式器械、康复、家族筛查和终末期心衰治疗评估。具体药物、器械和是否转诊移植/辅助装置中心，需要心血管专科根据检查结果个体化判断。',
    longTermCare:
      '特发性心肌病通常需要长期随访。重点包括心功能、心律、用药耐受性、器械适应证、运动和妊娠风险、心理支持以及一级亲属筛查。体重、症状或运动耐量突然变化时，应按医生给出的心衰或心律失常计划处理。',
    fertilityOrFamily:
      '特发性心肌病女性患者妊娠需谨慎评估。妊娠会增加心血管负荷，心功能正常的轻度患者可在心脏科和产科严密监测下妊娠，但中重度心功能不全患者妊娠风险显著增加。遗传性心肌病患者的子女有遗传风险，建议进行遗传咨询。已知携带致病基因的家系成员应进行基因检测和定期心脏监测，以便早期识别和干预。',
    emergencySigns:
      '出现以下情况应立即就医：突发严重胸痛或胸闷（需排除急性冠脉事件）；突发心悸伴头晕、黑矇或意识丧失（疑似严重心律失常）；呼吸困难突然加重、不能平卧、咳粉红色泡沫痰（急性肺水肿）；下肢水肿急剧加重伴尿量减少（心衰加重）；突发单侧肢体无力或言语不清（需排除血栓栓塞事件）。',
  },
  sources: [
    {
      name: 'GeneReviews: Dilated Cardiomyopathy Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
    },
    {
      name: 'GeneReviews: LMNA-Related Dilated Cardiomyopathy',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1674/',
    },
    {
      name: 'MedlinePlus Genetics: Familial dilated cardiomyopathy',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/familial-dilated-cardiomyopathy/',
    },
  ],
  sourceName: 'GeneReviews: Dilated Cardiomyopathy Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1309/',
  categorySlug: 'cardiovascular',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 353,
    name: 'idiopathic-cardiomyopathy-journey.png',
    url: '/images/diseases/idiopathic-cardiomyopathy-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

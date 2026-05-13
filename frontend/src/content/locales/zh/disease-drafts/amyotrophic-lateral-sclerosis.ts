import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseAmyotrophicLateralSclerosis: DiseaseDraft = {
  ...entity(1, 'disease-als'),
  name: '肌萎缩侧索硬化',
  nameEn: 'Amyotrophic Lateral Sclerosis',
  alias: '渐冻症、ALS、运动神经元病',
  icd10Code: 'G12.2',
  slug: 'amyotrophic-lateral-sclerosis',
  oneSentence:
    '肌萎缩侧索硬化是一种影响运动神经元的进行性神经系统疾病，可逐渐造成肌肉无力、萎缩、吞咽和呼吸功能受影响。',
  plainName: '逐渐加重的运动神经元病',
  prevalence:
    '全球估计约每 10 万人 2-5 例，具体患病率会随地区、年龄结构和登记方式不同而变化。',
  searchIntents: [
    '渐冻症 早期症状',
    'ALS 看什么科',
    '肌肉跳动无力是不是渐冻症',
    '运动神经元病 肌电图检查',
    '渐冻症 呼吸吞咽风险',
  ],
  quickLook: {
    whatItIs:
      'ALS 主要影响控制随意运动的神经细胞。感觉、意识和眼球运动在不少患者中相对保留，但肢体、说话、吞咽和呼吸相关肌肉可能逐渐受累。',
    whoToSeeFirst:
      '优先到神经内科，最好是有神经肌肉病、运动神经元病或肌电图评估经验的门诊。出现呼吸费力、吞咽呛咳或明显体重下降时，应尽快评估呼吸和营养支持。',
    isGenetic:
      '多数 ALS 为散发病例；少数与家族遗传有关。若家族中有 ALS、额颞叶痴呆或较早发病病例，可向神经内科或遗传咨询门诊询问是否需要基因检测。',
    hasTreatment:
      '目前没有能逆转疾病的治疗。规范管理通常包括疾病修饰药物评估、呼吸与营养支持、康复、沟通辅助、症状控制和照护计划。具体用药和新药信息应以当地监管状态和主诊医生意见为准。',
    commonDelayReason:
      '早期无力、抽动、手笨拙或说话含糊容易被当作颈椎病、腰椎病、脑梗后遗症、焦虑或单纯肌肉劳损处理，导致肌电图和神经专科评估延后。',
  },
  patientJourney: {
    whenToSuspect: [
      '一侧手脚逐渐无力、变笨拙，且数周到数月持续进展。',
      '肌肉跳动、抽动或萎缩，伴随无力加重。',
      '说话含糊、吞咽呛咳、流口水或声音变弱。',
      '走路容易绊倒、抬脚困难、精细动作变差。',
      '没有明显感觉麻木，却出现进行性运动功能下降。',
    ],
    commonWrongTurns: [
      '长期按颈椎病、腰椎间盘突出或周围神经卡压治疗，却没有解释全身进展。',
      '只处理单个症状，没有追踪无力是否扩展到其他部位。',
      '等到吞咽、呼吸明显受影响后才做呼吸功能和营养评估。',
      '忽略情绪、沟通、照护安排和家庭支持，直到危机出现才临时处理。',
    ],
    firstDepartments: [
      '神经内科',
      '神经肌肉病门诊',
      '康复医学科',
      '呼吸科（出现呼吸相关症状时）',
    ],
    diagnosisChecklist: [
      '记录最早出现无力、肌肉跳动、吞咽或说话变化的时间和进展顺序。',
      '带上颈椎/腰椎影像、脑部影像、肌电图、神经传导、血液检查和既往诊断资料。',
      '列出体重变化、吞咽呛咳、夜间憋醒、晨起头痛、活动后气短等呼吸营养线索。',
      '整理家族中 ALS、运动神经元病、额颞叶痴呆或类似神经退行性疾病史。',
    ],
    testsToAskAbout: [
      '肌电图和神经传导检查。',
      '脑、颈髓或腰髓影像，用于排除相似疾病。',
      '呼吸功能评估，如肺活量、夜间通气或血气相关检查。',
      '吞咽和营养评估，必要时由言语治疗、营养和康复团队参与。',
      '有家族史或年轻发病时，询问是否需要 ALS 相关基因检测。',
    ],
    questionsForDoctor: [
      '目前证据是否支持 ALS？还需要排除哪些相似疾病？',
      '我现在的呼吸和吞咽风险处于什么阶段，需要多久复查？',
      '哪些药物或支持治疗适合我，预期目标是什么？',
      '什么时候需要考虑无创呼吸机、营养管、沟通辅助或居家照护调整？',
      '家属需要学习哪些紧急情况识别和日常照护技能？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>ALS 常表现为进行性肌无力、肌肉萎缩、肌束颤动、痉挛、走路绊倒、手部精细动作变差、说话含糊、吞咽困难或呼吸费力。症状可从肢体开始，也可从说话和吞咽相关肌肉开始。</p><p>不同患者进展速度差异较大。感觉麻木通常不是主要表现，如果以麻木、疼痛或单一神经根症状为主，医生会同时考虑其他疾病。</p>',
    diagnosis:
      '<p>诊断通常需要神经内科结合病史、神经系统查体、肌电图和神经传导检查，并通过影像、血液检查等排除颈髓病变、周围神经病、肌病、代谢或免疫相关疾病等相似情况。</p><p>少数患者有家族遗传背景，医生可能根据年龄、家族史和临床表现建议基因检测。基因结果需要专业解释，不能单独用于判断病程。</p>',
    treatment:
      '<p>治疗目标是尽量延缓功能下降、提前处理呼吸和营养风险、改善沟通和生活质量。可由神经内科评估疾病修饰药物是否适用，同时联合康复、呼吸、营养、言语治疗、心理和护理团队。</p><p>新药和临床试验信息变化较快，应以当地监管批准、医院可及性和主诊医生评估为准。不要自行购买或停用药物，也不要把单一药物宣传视为确定疗效。</p>',
    longTermCare:
      '<p>长期管理重点包括定期评估肌力、吞咽、体重、呼吸功能、沟通能力、睡眠、疼痛痉挛、情绪和照护负担。较早建立呼吸支持、营养支持、辅助器具和家庭照护计划，通常比危机时临时处理更稳妥。</p>',
    fertilityOrFamily:
      '<p>多数 ALS 没有明确家族遗传背景。若家族中有多人患 ALS、额颞叶痴呆或较年轻发病，建议在神经内科和遗传咨询指导下讨论基因检测、家族成员风险和生育相关问题。</p>',
    emergencySigns:
      '<p>如果出现明显气短、无法平卧、夜间憋醒、晨起头痛加重、吞咽频繁呛咳、体重快速下降、发热伴咳痰或疑似误吸，应尽快就医。已使用呼吸支持设备者如果设备异常或呼吸状态突然变差，也应及时联系医疗团队或急诊。</p>',
  },
  sources: [
    {
      name: 'National Institute of Neurological Disorders and Stroke: Amyotrophic Lateral Sclerosis',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/amyotrophic-lateral-sclerosis-als',
    },
    {
      name: 'MedlinePlus: Amyotrophic Lateral Sclerosis',
      type: 'official',
      url: 'https://medlineplus.gov/amyotrophiclateralsclerosis.html',
    },
    {
      name: 'MedlinePlus Genetics: Amyotrophic lateral sclerosis',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/amyotrophic-lateral-sclerosis/',
    },
  ],
  symptoms:
    '<p>常见表现包括进行性肌无力、肌肉萎缩、肌束震颤、吞咽或言语困难。多数患者意识和感觉功能相对保留。</p>',
  diagnosis:
    '<p>诊断通常结合神经系统查体、肌电图、神经传导检查、影像学排除和必要的遗传检测。</p>',
  treatment:
    '<p>治疗重点是疾病修饰药物评估、呼吸与营养支持、康复训练、症状管理和多学科随访。</p>',
  prognosis:
    '<p>病程差异很大。早期识别呼吸、吞咽和营养风险，并提前安排支持措施，有助于改善生活质量和照护连续性。</p>',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 310,
    name: 'amyotrophic-lateral-sclerosis-journey.png',
    url: '/images/diseases/amyotrophic-lateral-sclerosis-journey.png',
  },
  tagSlugs: ['neuromuscular', 'genetic-counseling'],
};

import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCharcotMarieToothDisease: DiseaseDraft = {
  ...entity(18, 'disease-charcot-marie-tooth-disease'),
  name: '腓骨肌萎缩症',
  nameEn: 'Charcot-Marie-Tooth Disease',
  alias: 'CMT、遗传性运动感觉神经病、遗传性周围神经病',
  slug: 'charcot-marie-tooth-disease',
  oneSentence:
    '腓骨肌萎缩症是一组遗传性周围神经病，常表现为足部和小腿逐渐无力、足下垂、高弓足、感觉减退或容易绊倒。',
  plainName: '影响手脚周围神经的遗传性神经病',
  prevalence:
    'CMT 被认为是最常见的遗传性周围神经病之一，但不同国家和不同分型的统计差异较大。',
  quickLook: {
    whatItIs:
      '周围神经像连接大脑、脊髓和四肢的电缆。CMT 会影响这些神经的轴突或髓鞘，使腿脚、手部的力量和感觉慢慢变差。',
    whoToSeeFirst:
      '反复绊倒、足下垂、高弓足、远端肌肉萎缩或家族中多人有类似表现时，可先到神经内科或神经肌肉专病门诊；儿童起病可咨询儿神经科。',
    isGenetic:
      '是。CMT 可呈常染色体显性、常染色体隐性或 X 连锁遗传，也可能没有明显家族史。基因检测结果需要结合神经电生理和临床表现解释。',
    hasTreatment:
      '目前多数类型没有根治性治疗。管理重点是康复、矫形器具、足踝/手功能保护、疼痛和并发症处理，以及遗传咨询。',
    commonDelayReason:
      '进展通常很慢，早期常被当作走路姿势、运动能力差、扁平或高弓足等骨科问题；如果没有追问家族史或做神经电生理检查，容易延迟诊断。',
  },
  patientJourney: {
    whenToSuspect: [
      '儿童、青少年或青年期开始经常绊倒、跑跳困难、脚尖容易拖地或出现足下垂。',
      '小腿远端变细、足弓明显升高、爪形趾、足踝不稳或需要踝足矫形器。',
      '手部精细动作变差，例如扣纽扣、写字、拧瓶盖比过去更困难。',
      '脚趾、足底、手指有麻木、刺痛、冷热感觉变差，或腱反射减弱。',
      '家族中多人有高弓足、步态异常、手脚无力、周围神经病或类似诊断。',
    ],
    commonWrongTurns: [
      '只按足部畸形或运动损伤处理，没有评估周围神经病。',
      '把缓慢进展的无力归因于缺乏锻炼、姿势问题或生长痛。',
      '只做影像检查而没有做神经传导、肌电图或遗传学评估。',
      '看到一个基因变异就直接下结论，忽略变异解释、家系验证和临床匹配。',
      '没有向医生确认康复强度、矫形器具和足部护理是否适合当前功能状态。',
    ],
    firstDepartments: [
      '神经内科（神经肌肉病或周围神经病方向）',
      '儿神经科（儿童或青少年起病时）',
      '康复医学科',
      '骨科/足踝外科（足部畸形、矫形器或手术评估时）',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '记录症状开始年龄、进展速度、先从脚还是手开始、是否疼痛或麻木。',
      '整理三代家族中高弓足、足下垂、手脚无力、周围神经病或类似诊断史。',
      '带上既往神经传导、肌电图、足踝/脊柱影像、康复评估和基因检测报告。',
      '请医生判断属于脱髓鞘型、轴突型还是中间型，以及是否需要进一步基因检测。',
      '列出现有药物和保健品，向医生或药师确认是否需要避开可能加重周围神经病的药物。',
    ],
    testsToAskAbout: [
      '神经传导速度检查和肌电图。',
      '针对 PMP22 重复/缺失及其他 CMT 相关基因的检测策略。',
      '足踝、脊柱、步态和手功能评估。',
      '需要时排查获得性周围神经病原因，例如糖尿病、维生素缺乏、甲状腺疾病或免疫性周围神经病。',
      '家属是否需要临床筛查或基因级联检测。',
    ],
    questionsForDoctor: [
      '我的表现更符合哪一类 CMT，还是需要先排除获得性周围神经病？',
      '神经传导和肌电图结果说明了什么？还需要做哪种基因检测？',
      '我现在适合怎样的康复训练、矫形器或步态辅助？',
      '足部疼痛、跌倒风险、皮肤破损和手功能下降应该怎样随访？',
      '家人是否需要检查？如果计划生育，遗传咨询可以回答哪些问题？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>CMT 常影响脚、腿、手和前臂的运动与感觉神经。常见表现包括足下垂、容易绊倒、高抬腿步态、高弓足或爪形趾、小腿远端变细、手部精细动作变差、麻木、刺痛、疼痛、感觉减退和腱反射减弱。不同分型的起病年龄和严重程度差异很大，同一家族成员也可能轻重不同。</p>',
    diagnosis:
      '<p>诊断通常从病史、家族史和神经系统查体开始，再结合神经传导速度、肌电图和遗传检测。医生会根据电生理结果判断更像脱髓鞘型、轴突型或中间型，并排查糖尿病、维生素缺乏、甲状腺疾病、免疫性周围神经病等获得性原因。基因结果需要由熟悉神经遗传的医生结合临床解释。</p>',
    treatment:
      '<p>多数 CMT 目前没有根治性治疗，管理目标是维持行动能力、减少跌倒和保护关节。常见措施包括物理治疗、作业治疗、拉伸和力量训练、踝足矫形器、鞋垫或其他辅助器具、疼痛管理，以及在足部畸形严重时评估骨科矫形。治疗计划应由神经科、康复科和骨科根据个人功能状态制定。</p>',
    longTermCare:
      '<p>长期随访重点包括步态和跌倒风险、足踝畸形、疼痛、皮肤破损、手功能、脊柱侧弯、听力或视力等少见相关问题。患者可保存电生理、基因报告、康复计划和矫形器记录，复诊时帮助医生判断进展。运动通常需要个体化安排，避免因过度疲劳或不合适训练造成损伤。</p>',
    fertilityOrFamily:
      '<p>CMT 遗传方式多样，包括常染色体显性、常染色体隐性和 X 连锁遗传，也可能出现新发变异。明确致病基因后，患者和家属可通过遗传咨询了解家族筛查、生育风险、产前诊断或胚胎植入前遗传学检测等选择。未明确致病基因时，家族成员仍可根据症状和电生理结果进行临床筛查。</p>',
    emergencySigns:
      '<p>CMT 多为慢性进展，但如果出现短时间内明显加重的无力或麻木、严重足部感染或溃疡、频繁跌倒受伤、呼吸困难，或症状进展速度明显不符合既往情况，应尽快就医，排查感染、获得性神经病、药物影响或其他急性问题。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
    },
    {
      name: 'MedlinePlus Genetics: Charcot-Marie-Tooth disease',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/charcot-marie-tooth-disease/',
    },
    {
      name: 'NINDS: Charcot-Marie-Tooth Disease',
      type: 'official',
      url: 'https://www.ninds.nih.gov/health-information/disorders/charcot-marie-tooth-disease',
    },
  ],
  symptoms:
    '<p>常见表现包括足下垂、容易绊倒、高弓足、远端肌肉萎缩、手脚麻木或感觉减退，进展通常较慢。</p>',
  diagnosis:
    '<p>评估通常包括神经系统查体、家族史、神经传导速度、肌电图、遗传检测，并排除获得性周围神经病原因。</p>',
  treatment:
    '<p>管理以康复训练、矫形器具、步态和足部护理、疼痛处理、骨科评估和遗传咨询为主，方案需个体化。</p>',
  prognosis:
    '<p>多数患者为慢性缓慢进展，严重程度差异很大；规范康复、辅助器具和并发症管理有助于维持功能和生活质量。</p>',
  sourceName: 'GeneReviews: Charcot-Marie-Tooth Hereditary Neuropathy Overview',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1358/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 317,
    name: 'charcot-marie-tooth-disease-journey.png',
    url: '/images/diseases/charcot-marie-tooth-disease-journey.png',
  },
  tagSlugs: ['neuromuscular', 'genetic-counseling'],
};

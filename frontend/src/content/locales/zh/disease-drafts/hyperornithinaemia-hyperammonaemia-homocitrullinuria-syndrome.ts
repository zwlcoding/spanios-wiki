import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHyperornithinaemiaHyperammonaemiaHomocitrullinuriaSyndrome: DiseaseDraft =
  {
    ...entity(
      50,
      'disease-hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    ),
    name: 'HHH综合征',
    nameEn: 'Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    alias: '高鸟氨酸血症-高氨血症-同型瓜氨酸尿症综合征、鸟氨酸转移酶缺乏症',
    slug: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome',
    oneSentence:
      'HHH综合征是一种罕见的常染色体隐性遗传病，因SLC25A15基因突变导致线粒体鸟氨酸转运障碍，引起血氨、血鸟氨酸和同型瓜氨酸升高，累及神经系统和肝脏。',
    plainName: 'HHH综合征',
    prevalence: '极为罕见，全球报告少于100例，为尿素循环障碍中最罕见类型之一',
    quickLook: {
      whatItIs:
        'HHH综合征即高鸟氨酸血症-高氨血症-同型瓜氨酸尿症综合征，是由于编码线粒体鸟氨酸转运蛋白1（ORNT1）的SLC25A15基因突变，导致鸟氨酸无法正常进入线粒体参与尿素循环，从而引起血氨蓄积、血鸟氨酸升高、同型瓜氨酸从尿中排出的罕见遗传代谢病。属常染色体隐性遗传，2018年列入国家《第一批罕见病目录》。',
      whoToSeeFirst:
        '新生儿或儿童出现高氨血症、嗜睡、呕吐、抽搐、发育迟缓、痉挛或不明原因肝功能异常时，应尽快到急诊/儿科、遗传代谢科或儿童神经内科评估。',
      isGenetic: '是，常染色体隐性遗传',
      hasTreatment:
        '有尿素循环障碍相关管理方案，包括急性高氨血症处理、蛋白摄入管理、氨清除相关药物和氨基酸补充评估，应由遗传代谢专科制定。',
      commonDelayReason:
        '症状与脑病、癫痫、肝病相似，易被误诊；发病年龄跨度大（从新生儿到成年），增加了识别难度',
    },
    patientJourney: {
      whenToSuspect: [
        '新生儿期出现嗜睡、拒食、呕吐、昏迷伴呼吸性碱中毒',
        '儿童期出现智力运动发育落后或倒退',
        '不明原因肝功能异常伴神经精神症状',
        '对高蛋白食物明显厌恶或耐受性差',
        '惊厥、共济失调或意识障碍反复发作',
      ],
      commonWrongTurns: [
        '仅按癫痫或脑性瘫痪治疗，忽视血氨检测',
        '将肝功能异常归因于病毒性肝炎或其他肝病',
        '未进行尿代谢筛查，错失关键诊断线索',
        '成人期发病易被误诊为精神障碍',
      ],
      firstDepartments: [
        '儿科或儿童神经内科（优先就诊）',
        '遗传代谢科',
        '肝病科或消化内科（辅助评估肝损害）',
        '急诊科（急性发作时）',
      ],
      diagnosisChecklist: [
        '血氨、血糖、肝肾功能',
        '血鸟氨酸浓度检测（持续升高是关键线索）',
        '尿同型瓜氨酸检测（尿液代谢筛查）',
        '血氨、鸟氨酸、同型瓜氨酸三者联合检测',
        'SLC25A15 基因分子检测（重要确诊依据）',
        '皮肤成纤维细胞ORNT1活性测定（辅助手段）',
        '头颅MRI或CT（评估神经系统并发症）',
        '脑电图（评估癫痫样活动）',
      ],
      testsToAskAbout: [
        '血氨检测（是否升高）',
        '血鸟氨酸浓度',
        '尿氨基酸分析（含同型瓜氨酸）',
        'SLC25A15基因检测',
        '肝脏功能及凝血功能',
      ],
      questionsForDoctor: [
        '血氨目前控制到什么水平？需要多久复查一次？',
        '孩子的饮食具体需要怎样调整？蛋白质摄入量如何控制？',
        '目前是否需要精氨酸、瓜氨酸或氨清除相关治疗？由谁制定方案，如何监测？',
        '孩子的发育水平需要多久评估一次？',
        '需要警惕哪些急性发作的诱因？',
        '父母若想再生育，需要做哪些遗传学准备？',
      ],
    },
    medicalSections: {
      symptoms:
        '新生儿期多在出生48小时后出现嗜睡、喂养困难、呕吐、昏迷及呼吸性碱中毒。婴儿及儿童期表现为急慢性脑病，出现智力运动发育迟缓或倒退、痉挛步态、肌阵挛、癫痫发作。部分患者有共济失调和认知障碍。肝功能损害表现为肝脏增大、肝功能异常、凝血障碍。成人期发病者症状相对轻，常因高蛋白饮食诱发出现精神行为异常或意识障碍。',
      diagnosis:
        '依据典型三联征（高鸟氨酸血症、高氨血症、同型瓜氨酸尿症）可临床诊断。确诊依赖SLC25A15基因分析或皮肤成纤维细胞ORNT1活性测定（正常活性的20%~25%即支持诊断）。新生儿筛查可通过检测血鸟氨酸浓度早期发现。头颅CT/MRI可见脑萎缩、白质改变或硬膜下出血等异常。',
      treatment:
        '急性高氨血症需要按代谢急症处理，避免长时间禁食，并由专科团队评估能量支持、暂停或调整蛋白摄入、氨清除治疗、氨基酸补充以及必要时透析。长期管理通常包括个体化蛋白摄入、代谢指标监测、发育和神经系统随访。所有方案都应写成可执行的生病/急诊计划。',
      longTermCare:
        '长期管理以饮食控制为核心，需在营养师指导下制定个性化低蛋白食谱，避免高蛋白食物诱发急性发作。定期监测血氨、肝功能、血鸟氨酸浓度。关注神经发育里程碑，及时进行康复训练。家长应学习高氨血症急性发作的早期识别和就医流程。成人患者需注意避免长期严格限制蛋白导致营养不良。复查血氨和相关代谢指标的频率应由遗传代谢专科根据病情制定。',
      fertilityOrFamily:
        '本病为常染色体隐性遗传，父母双方各为携带者时，每次妊娠有25%概率生出患儿。建议进行遗传咨询，明确SLC25A15基因突变位点后，可通过产前诊断或胚胎植入前遗传学检测（PGT）指导生育。新生儿出生后应尽快完善血鸟氨酸筛查。',
      emergencySigns:
        '出现嗜睡、烦躁、呕吐、抽搐或意识障碍等急性脑病表现，提示可能发生高氨血症危象，需立即就医。伴有凝血功能障碍（如皮肤瘀斑、出血难止）提示严重肝功能损害，需紧急处理。',
    },
    sources: [
      {
        name: 'GeneReviews: Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK97260/',
      },
      {
        name: 'NCBI GTR: Hyperornithinemia-hyperammonemia-homocitrullinuria syndrome',
        type: 'official',
        url: 'https://www.ncbi.nlm.nih.gov/gtr/conditions/C0268540/',
      },
    ],
    sourceName:
      'GeneReviews: Hyperornithinemia-Hyperammonemia-Homocitrullinuria Syndrome',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK97260/',
    categorySlug: 'metabolic',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 349,
      name: 'hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
      url: '/images/diseases/hyperornithinaemia-hyperammonaemia-homocitrullinuria-syndrome-journey.png',
    },
    tagSlugs: ['genetic-counseling'],
  };

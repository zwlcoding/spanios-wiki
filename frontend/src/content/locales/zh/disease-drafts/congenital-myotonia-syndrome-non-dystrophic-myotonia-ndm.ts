import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalMyotoniaSyndromeNonDystrophicMyotoniaNdm: DiseaseDraft =
  {
    ...entity(
      24,
      'disease-congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    ),
    name: '先天性肌强直',
    nameEn: 'Congenital Myotonia Syndrome (Non-Dystrophic Myotonia, NDM)',
    alias: 'Myotonia congenita、Thomsen 病、Becker 病、CLCN1 相关肌强直',
    slug: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm',
    oneSentence:
      '先天性肌强直是一种遗传性骨骼肌离子通道病，常从儿童期出现肌肉僵硬、起步困难和“活动几下后变松”的暖身现象。',
    plainName: '肌肉放松变慢、刚开始活动时特别僵硬的遗传性肌肉病',
    prevalence:
      '全球总体罕见。MedlinePlus 估计约每 10 万人中 1 人受影响，北欧部分地区报道更高。',
    quickLook: {
      whatItIs:
        '肌肉收缩后需要很快放松。CLCN1 等肌肉离子通道相关异常会让肌肉细胞更容易持续兴奋，表现为握拳、起身、跑步或受冷后肌肉放松慢。',
      whoToSeeFirst:
        '儿童或成人长期肌肉僵硬、刚开始走路/跑步困难、反复活动后缓解，或肌电图提示肌强直放电时，可到神经内科神经肌肉病专科；麻醉、手术前应主动告知病史。',
      isGenetic:
        '是。Thomsen 型多为常染色体显性遗传，Becker 型多为常染色体隐性遗传；同一基因变异的表现也可能存在差异。',
      hasTreatment:
        '多数患者以识别诱因、活动安排和专科随访为主；症状影响生活时可由神经肌肉病专科评估药物或康复策略。不要自行用药。',
      commonDelayReason:
        '肌肉僵硬可被误认为运动少、抽筋、心理紧张或普通肌肉病；如果没有追问暖身现象、家族史和做肌电图/基因检测，容易延迟诊断。',
    },
    patientJourney: {
      whenToSuspect: [
        '从儿童期开始，起身、起步、跑步、爬楼或握拳后松手变慢。',
        '肌肉刚开始活动时僵硬，重复动作几次后反而变轻，出现典型“暖身现象”。',
        '受冷、休息后突然活动、紧张或某些药物后肌强直加重。',
        '肌肉看起来较发达，但运动启动困难或偶尔短暂无力。',
        '家族中多人有类似肌肉僵硬、起步困难或已知 CLCN1 相关诊断。',
      ],
      commonWrongTurns: [
        '只按抽筋、缺钙或运动损伤处理，没有做神经肌肉评估。',
        '肌酸激酶轻度异常后被当作炎性肌病，忽略肌强直放电和暖身现象。',
        '没有在手术或麻醉前告知医生疑似肌强直病史。',
        '只做单基因或单次检查阴性就完全排除，未考虑 SCN4A 等其他非营养不良性肌强直。',
      ],
      firstDepartments: [
        '神经内科（神经肌肉病专科）',
        '儿神经科（儿童起病时）',
        '康复医学科',
        '医学遗传科/遗传咨询门诊',
        '麻醉科术前评估门诊（手术前）',
      ],
      diagnosisChecklist: [
        '记录僵硬出现的年龄、诱因、是否有暖身现象、是否受冷加重。',
        '整理家族中肌肉僵硬、肌肉发达、起步困难或类似诊断史。',
        '带上肌电图、肌酸激酶、甲状腺功能、基因检测和既往用药反应。',
        '向医生确认是否属于 CLCN1 相关 myotonia congenita，还是 SCN4A 相关肌强直或肌营养不良性肌强直。',
        '手术、麻醉或急诊时主动说明肌强直病史，并让医生评估用药和麻醉风险。',
      ],
      testsToAskAbout: [
        '针极肌电图，观察是否有肌强直放电。',
        'CLCN1 及非营养不良性肌强直相关基因检测。',
        '肌酸激酶和基础代谢/内分泌检查，用于鉴别其他肌病或诱因。',
        '神经肌肉专科对暖身现象、握拳放松、起立行走等功能测试。',
        '家属是否需要临床筛查或遗传咨询。',
      ],
      questionsForDoctor: [
        '我的表现更像 Thomsen 型、Becker 型，还是其他非营养不良性肌强直？',
        '基因检测结果怎样解释？是否需要检测其他相关基因？',
        '哪些药物、麻醉或环境因素可能让肌强直加重？',
        '我适合怎样的运动和康复安排？需要避免哪些突然启动或寒冷场景？',
        '家人是否需要检查？如果计划生育，遗传咨询能提供哪些信息？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>先天性肌强直常表现为肌肉僵硬、放松变慢、起步困难、握拳后松手慢、受冷或休息后突然活动时加重，并可有“暖身现象”：重复活动后僵硬减轻。部分患者肌肉较发达，Becker 型可出现短暂无力或远端轻度无力。通常不累及心肌或平滑肌，但个体表现差异很大。</p>',
      diagnosis:
        '<p>诊断需要结合典型病史、体格检查、肌电图和基因检测。CLCN1 致病变异支持 myotonia congenita 诊断；医生还需要鉴别 SCN4A 相关肌强直、肌营养不良性肌强直、代谢或内分泌相关肌肉症状。意义未明变异不能单独确诊或排除。</p>',
      treatment:
        '<p>管理重点是识别诱因、合理安排活动和术前/急诊风险提示。症状明显影响行走、工作或生活时，神经肌肉病专科可评估药物和康复策略；不同患者对治疗反应不同，应避免自行按网络资料用药或停药。</p>',
      longTermCare:
        '<p>长期随访重点包括僵硬程度、跌倒风险、运动能力、用药效果和麻醉/手术安全。患者可保存诊断证明、基因报告和需要提醒医生的药物/麻醉注意事项。学校、工作场所和家庭可适当允许热身时间，减少突然启动造成的摔倒风险。</p>',
      fertilityOrFamily:
        '<p>Thomsen 型多为常染色体显性遗传，Becker 型多为常染色体隐性遗传。明确致病变异后，家属可通过遗传咨询了解携带者检测、复发风险、产前诊断或胚胎植入前遗传学检测等选择。</p>',
      emergencySigns:
        '<p>先天性肌强直通常不是急性危重病，但若出现跌倒外伤、吞咽或呼吸相关异常、手术麻醉前评估、药物后症状明显加重，或肌无力进展速度与既往不符，应及时就医并说明疑似或确诊肌强直病史。</p>',
    },
    sources: [
      {
        name: 'GeneReviews: Myotonia Congenita',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
      },
      {
        name: 'MedlinePlus Genetics: Myotonia congenita',
        type: 'official',
        url: 'https://medlineplus.gov/genetics/condition/myotonia-congenita',
      },
      {
        name: 'NCBI Bookshelf StatPearls: Myotonia Congenita',
        type: 'review',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK562335/',
      },
    ],
    symptoms:
      '<p>常见肌肉僵硬、起步困难、握拳后松手慢、受冷或休息后活动加重，以及重复动作后缓解的暖身现象。</p>',
    diagnosis:
      '<p>评估通常包括病史、家族史、肌电图、肌酸激酶和 CLCN1/相关基因检测，并鉴别其他肌强直疾病。</p>',
    treatment:
      '<p>管理以避免诱因、活动安排、麻醉风险提示和神经肌肉专科个体化治疗为主。</p>',
    prognosis:
      '<p>多数患者为慢性稳定或缓慢变化过程，生活质量取决于僵硬程度、跌倒风险、诱因管理和治疗反应。</p>',
    sourceName: 'GeneReviews: Myotonia Congenita',
    sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1355/',
    categorySlug: 'neurological',
    charityIds: [],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    featuredImage: {
      id: 323,
      name: 'congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
      url: '/images/diseases/congenital-myotonia-syndrome-non-dystrophic-myotonia-ndm-journey.png',
    },
    tagSlugs: ['neuromuscular', 'genetic-counseling'],
  };

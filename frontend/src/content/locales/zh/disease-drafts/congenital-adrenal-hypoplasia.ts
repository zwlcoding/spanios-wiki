import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseCongenitalAdrenalHypoplasia: DiseaseDraft = {
  ...entity(21, 'disease-congenital-adrenal-hypoplasia'),
  name: '先天性肾上腺发育不良',
  nameEn: 'Congenital Adrenal Hypoplasia',
  alias: 'X 连锁先天性肾上腺发育不良、NR0B1 相关肾上腺发育不良',
  slug: 'congenital-adrenal-hypoplasia',
  oneSentence:
    '先天性肾上腺发育不良是一种遗传性肾上腺功能不全疾病，可在新生儿或儿童期出现低血糖、呕吐、脱水、低血压、色素沉着或盐丢失危象。',
  plainName: '肾上腺先天发育不足导致激素不足的罕见遗传病',
  prevalence:
    '总体罕见，X 连锁 NR0B1 相关类型主要影响男性，也可因家族变异和女性携带者表现而存在差异。',
  quickLook: {
    whatItIs:
      '肾上腺负责产生维持血压、血糖和盐水平衡的重要激素。相关基因异常时，肾上腺从出生起功能不足，身体在感染、发热或脱水时更容易发生危象。',
    whoToSeeFirst:
      '新生儿或儿童出现不明原因低血糖、反复呕吐、脱水、低钠高钾、低血压、皮肤色素加深或休克时应急诊；稳定后由儿科内分泌/内分泌科长期随访。',
    isGenetic:
      '是。经典 X 连锁类型与 NR0B1 相关，常影响男性；也存在其他遗传或发育相关原因。遗传咨询需要结合基因检测和家族史。',
    hasTreatment:
      '有长期激素替代和危象预防方案，但需要由内分泌专科个体化制定。患者和家属需要了解生病、发热、手术等应激场景下何时就医。',
    commonDelayReason:
      '早期表现像喂养困难、胃肠炎、感染或普通低血糖；若未及时检查电解质、皮质醇/ACTH 和家族史，容易延误。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿或婴儿反复呕吐、吃奶差、体重增长差、脱水或精神差。',
      '低血糖、低钠、高钾、低血压、休克或不明原因酸中毒。',
      '皮肤或黏膜色素加深，尤其伴肾上腺功能不全线索。',
      '男孩青春期延迟、性腺功能低下，且既往有肾上腺功能不全病史。',
      '家族中有男性新生儿夭折、肾上腺危象或类似内分泌诊断。',
    ],
    commonWrongTurns: [
      '把反复呕吐和脱水只当作胃肠炎处理，未检查电解质和肾上腺轴。',
      '低血糖反复发作但没有追问出生史、家族史和色素沉着。',
      '确诊后没有准备急诊说明和应激处理计划，导致发热或手术时风险增加。',
      '只关注肾上腺危象，忽略青春期发育、性腺功能和遗传咨询。',
    ],
    firstDepartments: [
      '急诊科（休克、意识改变、严重脱水或低血糖时）',
      '儿科内分泌科',
      '内分泌科',
      '医学遗传科/遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '保存低血糖、电解质、血气、皮质醇、ACTH、肾素-醛固酮等检查结果。',
      '记录发作诱因：感染、发热、呕吐、禁食、手术或漏服药物。',
      '询问是否需要 NR0B1 及肾上腺发育/功能不全相关基因检测。',
      '准备急诊说明卡，写明诊断、主管医生、用药和危象处理原则。',
      '青春期后关注性腺功能、身高增长、骨健康和生育相关问题。',
    ],
    testsToAskAbout: [
      '电解质、血糖、血气和肾功能。',
      '皮质醇、ACTH、肾素、醛固酮及相关内分泌评估。',
      '肾上腺影像和其他可能的发育异常评估。',
      'NR0B1 或肾上腺功能不全相关基因检测。',
      '家属携带者检测和生育风险评估。',
    ],
    questionsForDoctor: [
      '这次发作是否符合肾上腺危象？以后哪些情况需要直接急诊？',
      '日常激素替代和生病时的处理计划应该写成什么文件随身携带？',
      '需要做哪些基因检测？家属是否需要筛查？',
      '青春期、性腺功能和生育问题需要何时开始随访？',
      '学校或照护者需要知道哪些风险和联系信息？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>症状可从新生儿期或婴儿期开始，包括喂养困难、反复呕吐、脱水、低血糖、低血压、低钠高钾、休克和皮肤色素加深。部分患者在儿童或青春期后还会出现青春期延迟、性腺功能低下或生育相关问题。感染、发热、呕吐、禁食和手术可诱发危象。</p>',
    diagnosis:
      '<p>诊断需要结合急性发作时的血糖、电解质、皮质醇、ACTH、肾素-醛固酮轴、临床表现和家族史。NR0B1 等基因检测可帮助明确分型和家族风险。医生还需要排除其他原因导致的原发性肾上腺功能不全和先天性肾上腺皮质增生。</p>',
    treatment:
      '<p>长期管理通常包括内分泌专科指导下的激素替代、应激场景处理计划、急诊说明和定期监测。剂量和调整应由医生根据年龄、体重、生长、血压、电解质和临床状态决定，不能自行按网络信息加减药。</p>',
    longTermCare:
      '<p>随访重点包括生长发育、血压、电解质、肾上腺危象预防、青春期和性腺功能、骨健康及家庭应急能力。建议保存诊断书、用药清单、急诊说明卡和主管医生联系方式，并让学校或照护者了解何时需要急诊。</p>',
    fertilityOrFamily:
      '<p>X 连锁类型的家族成员可通过遗传咨询了解携带者检测、男性亲属筛查、产前诊断或胚胎植入前遗传学检测等选择。男性患者成年后可能需要评估性腺功能和生育相关问题。</p>',
    emergencySigns:
      '<p>严重呕吐不能进食、明显脱水、低血糖、意识改变、抽搐、低血压、休克、发热感染后精神状态变差，或疑似漏服关键药物后不适，应立即急诊，并主动说明疑似或确诊肾上腺功能不全。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
    },
    {
      name: 'MedlinePlus Genetics: X-linked adrenal hypoplasia congenita',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/x-linked-adrenal-hypoplasia-congenita/',
    },
    {
      name: 'Orphanet: X-linked adrenal hypoplasia congenita',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/95702',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>可表现为低血糖、呕吐、脱水、低血压、低钠高钾、皮肤色素加深、休克，以及青春期延迟或性腺功能低下。</p>',
  diagnosis:
    '<p>评估包括血糖、电解质、皮质醇、ACTH、肾素-醛固酮轴、家族史和 NR0B1 等基因检测。</p>',
  treatment:
    '<p>管理依赖内分泌专科长期激素替代、应激处理计划和危象预防，患者不应自行调整药物。</p>',
  prognosis:
    '<p>早期识别和规范替代治疗可显著降低危象风险；长期预后取决于危象预防、随访和青春期/性腺功能管理。</p>',
  sourceName: 'GeneReviews: NR0B1-Related Adrenal Hypoplasia Congenita',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1431/',
  categorySlug: 'metabolic',
  charityIds: [21],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 320,
    name: 'congenital-adrenal-hypoplasia-journey.png',
    url: '/images/diseases/congenital-adrenal-hypoplasia-journey.png',
  },
  tagSlugs: ['endocrine', 'genetic-counseling'],
};

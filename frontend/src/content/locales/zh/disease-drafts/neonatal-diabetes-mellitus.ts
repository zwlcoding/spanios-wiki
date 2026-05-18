import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNeonatalDiabetesMellitus: DiseaseDraft = {
  ...entity(5026, 'disease-neonatal-diabetes-mellitus'),
  name: '新生儿糖尿病',
  nameEn: 'Neonatal Diabetes Mellitus',
  alias: 'NDM、新生儿期糖尿病、6月龄内糖尿病',
  icd10Code: 'P70.2',
  slug: 'neonatal-diabetes-mellitus',
  oneSentence:
    '新生儿糖尿病是指在生后6个月内发生的单基因糖尿病，分为暂时性和永久性两类，约50%由KCNJ11或ABCC8基因突变引起，其中多数患者可由胰岛素注射转为磺脲类口服药物治疗。',
  plainName: '出生后半年内就出现的一种特殊糖尿病',
  prevalence:
    '发病率约 1/90,000-1/260,000 活产儿；占新生儿期高血糖病因的重要部分。随着基因检测普及，越来越多的病例被准确分型。',
  searchIntents: [
    '新生儿糖尿病 症状',
    '新生儿糖尿病 基因',
    'KCNJ11 磺脲类药物',
    '暂时性新生儿糖尿病',
    '新生儿糖尿病 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是一种在出生后6个月内发生的单基因糖尿病，不是1型也不是2型糖尿病。根据病程分为暂时性（TNDM，多在青春期前缓解）和永久性（PNDM，终身患病）。约50%由KCNJ11或ABCC8基因突变导致胰岛细胞钾通道异常。',
    whoToSeeFirst:
      '新生儿科或儿科内分泌科。确诊后需终身随访内分泌科。出现多饮多尿、体重不增、脱水时应立即就诊。',
    isGenetic:
      '绝大多数为单基因遗传病。常见致病基因包括KCNJ11、ABCC8、INS、6q24印记区异常、GCK等。部分类型为常染色体显性遗传，部分为新发突变。遗传方式因基因而异。',
    hasTreatment:
      'KCNJ11或ABCC8突变导致的患者，约90%可从胰岛素转为磺脲类口服药（如格列本脲），显著改善生活质量。其他类型多需胰岛素治疗。早期基因检测对选择治疗方案至关重要。',
    commonDelayReason:
      '新生儿高血糖被误认为应激性高血糖或感染所致；未能在6月龄内及时做基因检测；基层医院缺乏单基因糖尿病的诊断意识；误诊为1型糖尿病而长期使用胰岛素。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿或婴儿（<6月龄）出现多尿、多饮、体重不增或下降、脱水、喂养困难。',
      '血糖持续升高，尿糖阳性，对常规补液和胰岛素治疗有反应但病因不明。',
      '母亲妊娠期无妊娠糖尿病，或虽有妊娠糖尿病但婴儿高血糖持续不缓解。',
      '兄弟姐妹中有类似新生儿期糖尿病病史。',
      '伴有神经系统发育异常（如DEND综合征：发育迟缓、癫痫、新生儿糖尿病）。',
    ],
    commonWrongTurns: [
      '新生儿高血糖被当作应激性高血糖，未进一步排查单基因糖尿病。',
      '误诊为1型糖尿病，直接使用胰岛素而未尝试磺脲类药物。',
      '未及时做基因检测，延误了可能改变治疗方案的确诊时机。',
      '暂时性新生儿糖尿病缓解后未继续随访，导致复发时延误诊断。',
      '家长自行调整胰岛素剂量或停药，导致血糖波动。',
    ],
    firstDepartments: ['新生儿科 / 儿科内分泌科', '遗传咨询科', '营养科'],
    diagnosisChecklist: [
      '记录症状出现时间、血糖波动范围、体重变化。',
      '整理既往血糖、尿糖、胰岛素用量和C肽检查结果。',
      '询问医生是否需要做新生儿糖尿病基因检测（KCNJ11、ABCC8、INS等）。',
      '绘制家族谱系图，了解是否有糖尿病家族史。',
    ],
    testsToAskAbout: [
      '血糖和糖化血红蛋白监测。',
      'C肽水平（评估胰岛功能）。',
      '新生儿糖尿病基因panel（KCNJ11、ABCC8、INS、GCK、6q24等）。',
      '染色体分析或甲基化检测（排除6q24暂时性新生儿糖尿病）。',
      '胰岛自身抗体（排除1型糖尿病）。',
    ],
    questionsForDoctor: [
      '我的孩子属于暂时性还是永久性新生儿糖尿病？',
      '基因检测结果是KCNJ11/ABCC8突变吗？是否可以尝试磺脲类药物？',
      '磺脲类药物转换的时机和注意事项是什么？',
      '是否伴有其他器官受累（如神经系统、胰腺发育）？',
      '以后生育时如何降低再发风险？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>新生儿糖尿病在生后数天至6个月内发病。典型表现为多尿（尿布频繁湿透）、多饮、喂养困难、体重不增或下降、脱水、低血糖或高血糖交替。部分患儿可表现为酮症酸中毒，但较1型糖尿病少见。</p><p>KCNJ11或ABCC8突变部分患者可伴有神经系统症状，称为DEND综合征（发育迟缓、癫痫、新生儿糖尿病）或中间型（iDEND，仅轻度发育问题）。6q24相关的暂时性新生儿糖尿病患儿可能伴巨舌、脐疝、巨大儿等特征。</p>',
    diagnosis:
      '<p>诊断标准：生后6个月内发生的高血糖，需排除应激性高血糖、感染、母源性药物影响等。关键步骤是基因检测。</p><p>约50%的病例由KCNJ11或ABCC8基因激活突变引起，30-40%由染色体6q24印记区异常导致（暂时性），其余由INS、GCK、FOXP3等基因变异引起。胰岛自身抗体通常阴性，有助于与1型糖尿病鉴别。C肽水平可低可正常。</p>',
    treatment:
      '<p>KCNJ11或ABCC8突变患者应尽早尝试磺脲类口服药物（格列本脲/优降糖），约90%可成功从胰岛素转换，且能改善神经发育预后。转换需在医生指导下逐步进行，监测血糖避免低血糖。</p><p>6q24暂时性新生儿糖尿病通常在数月到数年后缓解，但青春期可能复发。INS基因突变患者需终身胰岛素治疗。GCK突变者通常仅需小剂量胰岛素或饮食管理。营养支持和对症治疗同样重要。</p>',
    longTermCare:
      '<p>长期随访包括：定期监测血糖、糖化血红蛋白、生长发育、神经发育评估；KCNJ11/ABCC8突变者需评估磺脲类药物长期疗效和剂量调整；暂时性NDM缓解者需在青春期前后加强监测以防复发。</p><p>家庭管理：学习血糖监测和低血糖处理；合理喂养避免血糖波动；携带疾病诊断说明，就医时告知医生病情；遗传咨询帮助家庭了解再发风险和产前诊断选项。</p>',
    fertilityOrFamily:
      '<p>遗传方式因致病基因而异。KCNJ11、ABCC8、INS等常染色体显性遗传，患者子女有50%遗传风险；6q24暂时性NDM为印记遗传，再发风险与亲本来源有关。新发突变占相当比例。</p><p>产前诊断可通过基因检测实现。胚胎植入前遗传学检测（PGT）也可用于高风险家庭。基因检测对先证者的父母再生育风险评估非常重要。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：严重脱水伴精神萎靡、呼吸深快（酮症酸中毒）、持续高血糖（>20 mmol/L）伴嗜睡、频繁低血糖发作、抽搐或意识改变。</p><p>低血糖时可先口服含糖液体，同时尽快就医。酮症酸中毒需急诊补液和胰岛素治疗。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Permanent Neonatal Diabetes Mellitus',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1447/',
    },
    {
      name: 'NCBI StatPearls: Neonatal Diabetes',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK570620/',
    },
    {
      name: 'DiabetesGenes.org (University of Exeter)',
      type: 'review',
      url: 'https://www.diabetesgenes.org/',
    },
  ],
  symptoms:
    '<p>生后6个月内出现多尿、多饮、体重不增或下降、脱水、喂养困难。部分伴神经系统发育异常。</p>',
  diagnosis:
    '<p>生后6个月内高血糖，基因检测确诊。常见致病基因包括KCNJ11、ABCC8、INS、6q24等。胰岛自身抗体通常阴性。</p>',
  treatment:
    '<p>KCNJ11/ABCC8突变者约90%可转为磺脲类口服药；其他类型多需胰岛素。暂时性NDM可能自行缓解。</p>',
  prognosis:
    '<p>KCNJ11/ABCC8相关者经磺脲类治疗后预后良好；暂时性NDM缓解后青春期可能复发。早期基因检测是关键。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1447/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3526,
    name: 'neonatal-diabetes-mellitus-journey.png',
    url: '/images/diseases/neonatal-diabetes-mellitus-journey.png',
  },
  tagSlugs: ['metabolic', 'genetic-counseling', 'pediatric', 'treatable'],
};

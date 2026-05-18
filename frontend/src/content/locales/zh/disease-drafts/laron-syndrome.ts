import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseLaronSyndrome: DiseaseDraft = {
  ...entity(5007, 'disease-laron-syndrome'),
  name: '莱伦氏综合征',
  nameEn: 'Laron Syndrome',
  alias: 'Laron 型侏儒症、生长激素不敏感综合征、第一批罕见病目录第 61 项',
  slug: 'laron-syndrome',
  oneSentence:
    '莱伦氏综合征是一种常染色体隐性遗传病，因生长激素受体缺陷导致胰岛素样生长因子-1（IGF-1）合成不足，表现为严重生长迟缓但血清生长激素水平升高，重组人 IGF-1 替代治疗可有效促进生长。',
  plainName: '一种因生长激素不起作用而导致身材极度矮小的遗传病',
  prevalence:
    '极罕见，全球已报告约 250–300 例；以色列、地中海沿岸、厄瓜多尔等部分人群中发病率较高。',
  searchIntents: [
    '莱伦氏综合征 症状',
    'Laron syndrome IGF-1 治疗',
    '莱伦氏综合征 生长激素',
    'Laron 综合征 遗传',
    '莱伦氏综合征 身高',
  ],
  quickLook: {
    whatItIs:
      '生长激素受体（GHR）基因突变导致靶器官对生长激素不敏感，肝脏无法产生足够的 IGF-1，从而引起生长障碍和代谢异常。',
    whoToSeeFirst:
      '儿童出现严重生长迟缓、面容幼稚、前额突出时应到儿科内分泌科或遗传代谢科就诊。',
    isGenetic:
      '常染色体隐性遗传，GHR 基因突变所致；父母为无症状携带者，每胎患病风险 25%。',
    hasTreatment:
      '重组人 IGF-1（mecasermin）替代治疗是主要手段，需每日皮下注射两次，可显著改善身高和代谢指标。',
    commonDelayReason:
      '在生长激素缺乏症筛查中，因血清 GH 水平不低甚至升高，常被误认为检测误差或误诊为特发性矮小症。',
  },
  patientJourney: {
    whenToSuspect: [
      '出生后身高增长明显落后，身高低于同年龄同性别第 3 百分位以下。',
      '面容幼稚（娃娃脸）、前额突出、蓝色巩膜、小下颌、高嗓音。',
      '空腹低血糖、高脂血症、高胆固醇血症。',
      '家族中有类似身材矮小的成员或近亲婚配史。',
    ],
    commonWrongTurns: [
      '误诊为单纯性生长激素缺乏症，给予 GH 治疗后无效。',
      '当作营养不良或特发性矮小症，未进一步做 GH-IGF-1 轴功能检测。',
      '因血清 GH 不低而排除生长激素相关疾病。',
      '未做基因检测，长期找不到病因。',
    ],
    firstDepartments: [
      '儿科内分泌科',
      '遗传代谢科',
      '临床营养科',
      '医学遗传科',
    ],
    diagnosisChecklist: [
      '详细记录生长曲线、喂养史和家族史。',
      '血清 GH 水平：通常正常或升高（与 GH 缺乏症不同）。',
      '血清 IGF-1 和 IGFBP-3 水平：明显降低。',
      'GH 激发试验后 IGF-1 不升高。',
      'GHR 基因检测确诊。',
    ],
    testsToAskAbout: [
      '血清 GH、IGF-1、IGFBP-3 水平。',
      'GH 激发试验。',
      '口服葡萄糖耐量试验（评估 GH 抑制反应）。',
      'GHR 基因测序。',
      '骨龄片、头颅 MRI（排除垂体病变）。',
    ],
    questionsForDoctor: [
      '孩子的 GH 和 IGF-1 水平分别是多少？',
      'IGF-1 替代治疗什么时候开始最好？',
      '每天需要注射几次？剂量如何调整？',
      '治疗期间可能出现哪些副作用？',
      '最终身高能达到多少？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>出生时身长和体重正常或略低，出生后不久即出现生长速度明显减慢，最终成人身高通常男性低于 130 cm，女性低于 120 cm。特征性面容包括娃娃脸、前额突出、蓝色巩膜、鞍鼻、小下颌、牙齿排列不齐。声音高而尖。代谢异常包括空腹低血糖、高胆固醇血症、高脂血症。部分患者有智力正常但头围相对较大。骨龄明显延迟。</p>',
    diagnosis:
      '<p>主要依据临床表现和实验室检查：血清 GH 水平正常或升高，但血清 IGF-1 和 IGFBP-3 明显降低，且对外源性 GH 治疗反应差（IGF-1 不升高）。GHR 基因检测发现致病突变可确诊。需与生长激素缺乏症、特发性矮小症、垂体功能减退症等鉴别。</p>',
    treatment:
      '<p>重组人 IGF-1（mecasermin，商品名 Increlex）是唯一获批的治疗药物，需每日两次皮下注射，剂量根据体重和 IGF-1 水平调整。治疗可显著促进线性生长、改善骨密度和代谢指标。治疗期间需监测低血糖（尤其注射后 2–3 小时内）、扁桃体增生、脊柱侧弯、胰岛素抵抗等副作用。营养支持和定期随访同样重要。</p>',
    longTermCare:
      '<p>需终身随访，监测生长发育、代谢指标（血糖、血脂）、骨密度、甲状腺功能等。成人期需关注心血管疾病风险（因长期高脂血症）、骨量减少和生殖系统功能。患者教育包括正确注射技术、低血糖识别与处理、营养管理和定期复查。</p>',
    fertilityOrFamily:
      '<p>常染色体隐性遗传。父母为无症状携带者。患者的生育力通常正常。有家族史的家庭可进行产前基因诊断和胚胎植入前遗传学检测。遗传咨询有助于评估再发风险。</p>',
    emergencySigns:
      '<p>严重低血糖（出汗、心悸、意识模糊、抽搐）、呼吸困难（扁桃体增生导致上气道梗阻）、严重感染或高热需要立即就医。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Laron Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK7038/',
    },
    {
      name: 'NORD: Laron Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/laron-syndrome/',
    },
  ],
  symptoms:
    '<p>严重生长迟缓、娃娃脸、前额突出、蓝色巩膜、小下颌、高嗓音、空腹低血糖、高脂血症。</p>',
  diagnosis:
    '<p>血清 GH 正常或升高，IGF-1 和 IGFBP-3 明显降低；GHR 基因检测确诊。</p>',
  treatment:
    '<p>重组人 IGF-1（mecasermin）每日两次皮下注射；营养支持和定期随访。</p>',
  prognosis:
    '<p>早期 IGF-1 替代治疗可显著改善身高和代谢；未经治疗成人身高极矮；整体智力通常正常。</p>',
  sourceName: 'GeneReviews: Laron Syndrome',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK7038/',
  categorySlug: 'metabolic',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 5007,
    name: 'laron-syndrome-journey.png',
    url: '/images/diseases/laron-syndrome-journey.png',
  },
  tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
};

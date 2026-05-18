import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNoonanSyndrome: DiseaseDraft = {
  ...entity(5030, 'disease-noonan-syndrome'),
  name: 'Noonan综合征',
  nameEn: 'Noonan Syndrome',
  alias: 'NS、努南综合征、假特纳综合征',
  icd10Code: 'Q87.1',
  slug: 'noonan-syndrome',
  oneSentence:
    'Noonan综合征是一组常染色体显性遗传的RAS/MAPK通路病（RASopathy），以特征性面容、矮小身材、先天性心脏病（尤其肺动脉瓣狭窄）和不同程度的发育迟缓为特征，由PTPN11、SOS1、RAF1等基因突变导致。',
  plainName: '面容特殊、个子矮小、常伴有先天性心脏病的一种遗传病',
  prevalence:
    '发病率约 1/1,000-1/2,500 活产儿，是常见的单基因遗传综合征之一。无种族差异，男女均可发病。',
  searchIntents: [
    'Noonan综合征 面容特征',
    'Noonan综合征 心脏',
    'Noonan综合征 矮小 生长激素',
    'Noonan综合征 基因 PTPN11',
    'Noonan综合征 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是一组RAS/MAPK信号通路异常导致的遗传综合征。典型特征包括：眼距宽、眼睑下垂、耳位低且后旋、颈蹼、矮小、胸廓畸形、先天性心脏病（肺动脉瓣狭窄最常见）、轻度智力障碍或学习困难，以及出血倾向。',
    whoToSeeFirst:
      '儿科遗传科或儿科内分泌科；确诊后需心内科定期随访。新生儿期出现特征性面容伴心脏杂音者应尽早就诊。',
    isGenetic:
      '常染色体显性遗传。约50%由PTPN11基因突变引起，其余由SOS1、RAF1、RIT1、KRAS、BRAF、MAP2K1、LZTR1等基因突变导致。约30-50%为散发病例（新发突变）。父母再生育风险需根据父母基因检测结果评估。',
    hasTreatment:
      '无根治方法，但可对症治疗。生长激素可改善矮小；心脏病变可手术或介入治疗；发育迟缓需早期干预和特殊教育。部分患者需关注出血倾向和肿瘤风险。',
    commonDelayReason:
      '新生儿期仅表现为心脏杂音或轻度面部特征，未引起家长或医生重视；矮小被误认为体质性生长延迟；学习困难被当作普通发育迟缓；未做基因检测明确诊断。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿或婴儿具有特征性面容：眼距宽、眼睑下垂、耳位低且后旋、鼻尖圆钝、上唇薄呈倒三角脸。',
      '伴有先天性心脏病（尤其肺动脉瓣狭窄、房间隔缺损、肥厚型心肌病）。',
      '生长迟缓，身高低于同龄同性别第3百分位，生长速度缓慢。',
      '颈蹼、胸廓畸形（漏斗胸或鸡胸）、肘外翻。',
      '发育里程碑延迟、轻度智力障碍或学习困难。',
      '易瘀青、鼻出血或拔牙后出血不止（出血倾向）。',
    ],
    commonWrongTurns: [
      '仅按先天性心脏病治疗，未进一步评估遗传综合征。',
      '矮小被当作体质性生长延迟或营养不良，未做遗传评估。',
      '学习困难仅按普通发育迟缓处理，未寻求遗传诊断。',
      '未做基因检测，无法明确致病基因和预后。',
      '未定期随访心脏功能和肿瘤筛查。',
    ],
    firstDepartments: [
      '儿科遗传科',
      '儿科内分泌科（矮小评估）',
      '心内科（先天性心脏病随访）',
      '儿童保健科（发育评估）',
      '遗传咨询科',
    ],
    diagnosisChecklist: [
      '记录面容特征、出生史、生长发育曲线、心脏病史。',
      '整理既往心脏超声、心电图报告。',
      '记录发育里程碑、学习表现和社交能力。',
      '询问医生是否需要进行Noonan综合征基因panel检测。',
      '绘制家族谱系图，了解是否有类似面容、矮小或心脏病家族史。',
    ],
    testsToAskAbout: [
      'Noonan综合征基因panel（PTPN11、SOS1、RAF1、RIT1、KRAS、BRAF、MAP2K1、LZTR1、SHOC2等）。',
      '心脏超声和心电图（评估肺动脉瓣狭窄、心肌肥厚、心律失常）。',
      '生长发育评估（骨龄、生长激素激发试验、IGF-1水平）。',
      '血常规和凝血功能（评估出血倾向和骨髓异常）。',
      '眼科检查（屈光不正、斜视、眼球震颤）。',
      '听力测试。',
      '肾脏超声（部分患者有肾脏畸形）。',
    ],
    questionsForDoctor: [
      '基因检测能否明确致病基因？不同基因的预后有什么区别？',
      '孩子是否适合生长激素治疗？什么时候开始？预期效果如何？',
      '心脏问题需要手术吗？什么时候是最佳时机？',
      '发育和学习方面需要做哪些早期干预？',
      '出血倾向和肿瘤风险如何监测？',
      '以后生育时，孩子遗传给下一代的风险有多大？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>Noonan综合征的临床表现多样，可累及多个系统。面容特征包括：眼距宽、眼睑下垂、耳位低且后旋、鼻尖圆钝饱满、上唇薄呈倒三角脸、前额高而宽、颈蹼。随着年龄增长，面容特征可变得不那么典型。</p><p>心血管异常见于约50-80%的患者，最常见肺动脉瓣狭窄（约20-50%），其次为房间隔缺损、肥厚型心肌病（尤其RAF1突变者）、动脉导管未闭。生长方面，出生时身长和体重多正常，但随后生长速度减慢，成年身高男性约160cm、女性约150cm，不经治疗多在正常低限以下。</p><p>其他表现包括：胸廓畸形（漏斗胸或鸡胸）、肘外翻、脊柱侧弯、 cryptorchidism（隐睾，男性约60-80%）、轻至中度智力障碍或学习困难（约25-30%）、语言发育延迟、出血倾向（血小板功能障碍或凝血因子缺乏）、淋巴水肿（尤其婴幼儿期手足背侧）、肾脏畸形、视力问题（屈光不正、斜视）和听力损失。</p>',
    diagnosis:
      '<p>临床诊断基于典型的面容特征、心脏异常、矮小和发育迟缓的组合，但确诊需要基因检测。PTPN11基因突变约占50%，SOS1约10-15%，RAF1约5-10%，RIT1约5%，其他基因（KRAS、BRAF、MAP2K1、LZTR1、SHOC2等）各占少数。</p><p>基因检测建议采用RASopathy基因panel，包含上述所有基因。需与其他RAS通路病鉴别，如Costello综合征、心面皮肤综合征（CFC）、LEOPARD综合征（PTPN11突变也可导致）等。产前诊断可通过绒毛膜取样或羊水穿刺进行基因检测，尤其当父母一方为已知患者时。</p>',
    treatment:
      '<p>生长激素治疗：可改善终身高，通常从4-5岁开始，剂量略高于特发性矮小患者。治疗前需排除肥厚型心肌病等禁忌证。心脏病变：肺动脉瓣狭窄轻中度可随访，重度需球囊扩张或手术；肥厚型心肌病需心内科专科管理。隐睾应在1-2岁前手术复位以保护生育功能。</p><p>发育和学习：早期干预（言语治疗、作业治疗、物理治疗）和特殊教育支持。出血倾向：术前需评估凝血功能，必要时输注血小板或新鲜冰冻血浆。眼科和听力问题对症处理。心理支持和社交技能训练对青少年患者非常重要。</p>',
    longTermCare:
      '<p>长期随访需要多学科团队：遗传科（基因诊断和咨询）、心内科（定期心脏超声和心电图，监测心肌肥厚和心律失常）、内分泌科（生长和青春期监测）、发育行为儿科（认知和学习评估）、眼科、耳鼻喉科、血液科（出血倾向监测）。</p><p>部分基因型（尤其PTPN11、SOS1、RIT1）可能有增加恶性肿瘤（尤其幼年型粒单核细胞白血病JMML）的风险，需警惕持续发热、肝脾肿大、血常规异常等症状。成年期需关注生育能力（女性通常可自然受孕，男性隐睾可能影响生育）、内分泌问题（甲状腺功能减退、胰岛素抵抗）和心理健康。</p>',
    fertilityOrFamily:
      '<p>Noonan综合征为常染色体显性遗传。如果父母一方患病，子女有50%遗传风险。约30-50%为散发病例（新发突变），此时父母再发风险低，但需注意生殖腺嵌合可能。可通过产前基因检测或胚胎植入前遗传学检测（PGT）降低再发风险。</p><p>女性患者通常有正常生育能力，但妊娠期心脏负荷增加，需心内科密切监测。男性患者因隐睾和可能的精子生成障碍，生育能力可能受损。遗传咨询对家系中所有成员都非常重要。</p>',
    emergencySigns:
      '<p>需立即就诊的情况：严重呼吸困难或紫绀（提示心脏病情加重）、不明原因持续发热伴肝脾肿大（警惕JMML等恶性肿瘤）、严重出血不止、抽搐或意识改变。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Noonan Syndrome',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1124/',
    },
    {
      name: 'NORD: Noonan Syndrome',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/noonan-syndrome/',
    },
    {
      name: 'Orphanet: Noonan syndrome',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/648',
    },
  ],
  symptoms:
    '<p>特征性面容、矮小、先天性心脏病（肺动脉瓣狭窄最常见）、胸廓畸形、发育迟缓、学习困难、出血倾向和隐睾等。</p>',
  diagnosis:
    '<p>临床诊断结合基因检测。PTPN11突变约占50%，其余由SOS1、RAF1、RIT1等基因突变导致。需与其他RASopathy鉴别。</p>',
  treatment:
    '<p>生长激素改善矮小；心脏病变手术或介入治疗；早期干预发育和学习问题；对症处理出血倾向和视力听力问题。</p>',
  prognosis:
    '<p>多数患者寿命正常，但严重心脏病和恶性肿瘤可影响预后。早期多学科管理显著改善生活质量。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1124/',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3530,
    name: 'noonan-syndrome-journey.png',
    url: '/images/diseases/noonan-syndrome-journey.png',
  },
  tagSlugs: ['genetic-counseling', 'pediatric', 'cardiac'],
};

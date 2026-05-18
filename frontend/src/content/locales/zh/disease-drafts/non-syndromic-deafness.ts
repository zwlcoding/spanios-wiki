import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseNonSyndromicDeafness: DiseaseDraft = {
  ...entity(5029, 'disease-non-syndromic-deafness'),
  name: '非综合征性耳聋',
  nameEn: 'Non-Syndromic Deafness',
  alias: '遗传性非综合征型耳聋、NSHL、先天性耳聋',
  icd10Code: 'H90.3',
  slug: 'non-syndromic-deafness',
  oneSentence:
    '非综合征性耳聋是指不伴其他系统异常的遗传性听力损失，其中约50%由GJB2基因突变导致，是最常见的先天性耳聋病因，多数为常染色体隐性遗传，可通过新生儿听力筛查和基因检测早期诊断，人工耳蜗植入可显著改善重度聋患儿言语发育。',
  plainName: '只有听力不好、身体其他部分都正常的遗传性耳聋',
  prevalence:
    '全球新生儿先天性耳聋发生率约 1-3/1,000，其中约50-60%为遗传性，而遗传性耳聋中约70%为非综合征性。中国新生儿听力筛查覆盖率已超过90%，GJB2突变是最常见病因。',
  searchIntents: [
    '先天性耳聋 原因',
    'GJB2 基因突变 耳聋',
    '非综合征性耳聋 人工耳蜗',
    '新生儿听力筛查 没通过',
    '遗传性耳聋 遗传咨询',
  ],
  quickLook: {
    whatItIs:
      '这是指听力损失是唯一临床表现、不伴其他器官异常的遗传性耳聋。最常见的原因是GJB2基因（编码连接蛋白26）突变，导致耳蜗内钾离子循环障碍。多数为先天性或语前聋，也有迟发性类型。',
    whoToSeeFirst:
      '耳鼻喉科（听力专科）或儿科听力中心。新生儿听力筛查未通过者应在3个月内完成确诊检查。重度聋患儿应尽早在6-12月龄评估人工耳蜗植入。',
    isGenetic:
      '绝大多数为遗传性。遗传模式多样：约80%为常染色体隐性遗传（如GJB2双等位基因突变），15-20%为常染色体显性，1-2%为X连锁或线粒体遗传。GJB2突变携带者在普通人群中约2-3%。',
    hasTreatment:
      '助听器对轻中度聋有效；重度或极重度聋患儿早期（通常6-12月龄）人工耳蜗植入效果极佳，可使患儿获得接近正常的言语发育。基因治疗尚处于临床试验阶段。',
    commonDelayReason:
      '新生儿听力筛查未通过但未按时复查；家长误认为孩子"说话晚"而延误诊断；基层缺乏听力诊断设备；未及时进行基因检测明确病因；对人工耳蜗植入时机认识不足。',
  },
  patientJourney: {
    whenToSuspect: [
      '新生儿听力筛查初筛或复筛未通过。',
      '婴儿对声音反应差、不追声、睡眠中不易被声音惊醒。',
      '6月龄后仍不会咿呀学语，对名字无反应。',
      '1-2岁后语言发育明显落后于同龄儿童。',
      '家族中有先天性耳聋或迟发性听力下降患者。',
    ],
    commonWrongTurns: [
      '新生儿听力筛查未通过，家长未按时带孩子复查。',
      '误将听力障碍当作"贵人语迟"，等待孩子自然开口。',
      '未做基因检测，无法明确是否为遗传性及指导家族筛查。',
      '重度聋患儿未及时评估人工耳蜗，错过最佳言语发育窗口。',
      '认为单耳听力正常就无需干预，忽视单耳聋对学习的影响。',
    ],
    firstDepartments: [
      '耳鼻喉科（听力专科）',
      '儿科听力中心',
      '康复科（听力语言康复）',
      '遗传咨询科',
    ],
    diagnosisChecklist: [
      '携带新生儿听力筛查报告。',
      '记录孩子对声音的反应情况（追声、对名字反应、语言发育里程碑）。',
      '询问医生是否需要做耳聋基因panel检测（GJB2、SLC26A4、MT-RNR1等）。',
      '了解家族史，尤其是近亲婚配史。',
    ],
    testsToAskAbout: [
      '听性脑干反应（ABR，确诊听力损失的金标准）。',
      '耳声发射（OAE，评估耳蜗外毛细胞功能）。',
      '声导抗测试（评估中耳功能）。',
      '耳聋基因panel检测（GJB2、SLC26A4、MT-RNR1、GJB3等常见基因）。',
      '颞骨CT或内耳MRI（排除大前庭导水管综合征等结构异常）。',
      '眼底检查、心电图、甲状腺功能（排除综合征性耳聋）。',
    ],
    questionsForDoctor: [
      '孩子的听力损失程度是多少？是传导性、感音神经性还是混合性？',
      '基因检测能否明确病因？是GJB2突变还是其他基因？',
      '是否需要佩戴助听器？什么时候评估人工耳蜗植入？',
      '单耳聋是否需要干预？',
      '家族成员（包括父母再生育）是否需要基因检测和遗传咨询？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>非综合征性耳聋的唯一临床表现是听力损失，可累及单耳或双耳。根据发病时间分为先天性（出生时即存在）和迟发性（儿童期、青少年期甚至成年期发病）。根据严重程度分为轻度（26-40 dB）、中度（41-60 dB）、重度（61-80 dB）和极重度（>80 dB）。</p><p>GJB2相关耳聋通常为双侧对称性、非进行性、感音神经性聋，程度可从轻度到极重度不等。SLC26A4（Pendred综合征基因，但可无甲状腺异常表现为非综合征性）相关耳聋常伴大前庭导水管综合征，可有波动性听力下降，头部外伤可诱发或加重听力损失。线粒体12S rRNA（MT-RNR1）突变者对某些氨基糖苷类抗生素（如庆大霉素、链霉素）极度敏感，接触后可导致永久性耳聋。</p>',
    diagnosis:
      '<p>新生儿听力筛查是早期发现的关键，采用耳声发射（OAE）和/或自动听性脑干反应（AABR）。筛查未通过者需在3月龄前完成诊断性ABR、声导抗和OAE检查。确诊听力损失后应进行基因检测。</p><p>中国常见耳聋基因突变热点：GJB2（c.235delC最常见）、SLC26A4（IVS7-2A>G最常见）、MT-RNR1（m.1555A>G和m.1494C>T）。基因检测可明确病因、指导预后评估和家族筛查。颞骨影像有助于发现内耳结构异常（如大前庭导水管、Mondini畸形）。</p>',
    treatment:
      '<p>听力干预遵循早期发现、早期诊断、早期干预原则。轻中度聋：佩戴助听器，配合听觉言语康复训练。重度或极重度聋：评估人工耳蜗植入指征，通常建议在6-12月龄完成植入以获得最佳言语发育效果。双侧植入优于单侧。</p><p>大前庭导水管综合征患儿应避免头部外伤和剧烈气压变化。携带MT-RNR1突变者及其母系家族成员应终身避免使用氨基糖苷类抗生素。基因治疗（如OTOF基因治疗）在临床试验中显示出前景。</p>',
    longTermCare:
      '<p>长期管理包括：定期听力监测（每3-6个月，尤其婴幼儿期）；助听器或人工耳蜗的调试和维护；持续的听觉言语康复训练；教育支持（融合教育或特教资源）；心理社会支持。</p><p>家长应学习与孩子交流的技巧（如面对面、语速放慢、视觉辅助）。人工耳蜗植入后需长期随访调机。对于迟发性耳聋，应教育患者避免耳毒性药物和噪声暴露。</p>',
    fertilityOrFamily:
      '<p>非综合征性耳聋的遗传模式多样。常染色体隐性遗传（如GJB2）时，父母为携带者，子女患病风险25%；常染色体显性遗传时，患者子女有50%遗传风险；X连锁遗传时，男性患者子女不患病但女儿为携带者，女性携带者儿子50%患病、女儿50%为携带者；线粒体遗传仅通过母系传递。</p><p>产前诊断和胚胎植入前遗传学检测（PGT）可用于高风险家庭。携带者筛查有助于发现听力正常但携带致病突变的父母。</p>',
    emergencySigns:
      '<p>非综合征性耳聋本身无急性危象。但以下情况需就诊：助听器或人工耳蜗故障导致交流突然中断；头部外伤后听力突然下降（尤其大前庭导水管综合征患儿）；突发单侧耳聋（需排除其他病因如病毒感染、内耳出血）。</p>',
  },
  sources: [
    {
      name: 'GeneReviews: Deafness and Hereditary Hearing Loss Overview',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1434/',
    },
    {
      name: 'NIDCD: Hearing Loss and Deafness',
      type: 'review',
      url: 'https://www.nidcd.nih.gov/health/hearing-loss-deafness',
    },
    {
      name: 'Orphanet: Nonsyndromic genetic deafness',
      type: 'review',
      url: 'https://www.orpha.net/en/disease/detail/87884',
    },
  ],
  symptoms:
    '<p>唯一临床表现为听力损失，可单侧或双侧，程度从轻度到极重度不等。GJB2相关者多为先天性双侧对称性感音神经性聋。</p>',
  diagnosis:
    '<p>新生儿听力筛查结合诊断性ABR、OAE、声导抗和基因检测。中国常见突变包括GJB2 c.235delC、SLC26A4 IVS7-2A>G和MT-RNR1 m.1555A>G。</p>',
  treatment:
    '<p>轻中度聋佩戴助听器；重度或极重度聋早期人工耳蜗植入（6-12月龄最佳）。配合听觉言语康复训练。避免耳毒性药物。</p>',
  prognosis:
    '<p>早期干预（尤其6月龄内）的聋儿可获得接近正常的言语和语言能力。人工耳蜗植入效果与植入年龄密切相关。</p>',
  sourceName: 'GeneReviews',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK1434/',
  categorySlug: 'genetic-developmental',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3529,
    name: 'non-syndromic-deafness-journey.png',
    url: '/images/diseases/non-syndromic-deafness-journey.png',
  },
  tagSlugs: ['genetic-counseling', 'pediatric', 'treatable'],
};

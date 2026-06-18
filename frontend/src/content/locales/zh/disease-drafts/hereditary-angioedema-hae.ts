import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseHereditaryAngioedemaHae: DiseaseDraft = {
  ...entity(40, 'disease-hereditary-angioedema-hae'),
  name: '遗传性血管性水肿',
  nameEn: 'Hereditary Angioedema (HAE)',
  alias: 'HAE、遗传性血管神经性水肿、C1 抑制物缺乏相关血管性水肿',
  slug: 'hereditary-angioedema-hae',
  oneSentence:
    '遗传性血管性水肿是一类反复发作的深部肿胀疾病，可累及皮肤、胃肠道和上气道，上气道发作可能危及生命。',
  plainName: '反复突然肿胀、常不痒也不起风团的遗传性血管水肿',
  prevalence: '总体罕见，症状常从儿童或青春期开始，也可能成年后才被识别。',
  quickLook: {
    whatItIs:
      'HAE 的肿胀通常不是普通过敏。常见类型与 C1 抑制物数量或功能不足有关，缓激肽通路异常使血管渗漏增加，导致皮肤、腹部或气道肿胀。',
    whoToSeeFirst:
      '反复面部、手脚、外生殖器肿胀，反复剧烈腹痛呕吐，或喉咙/舌头肿胀时，可到变态反应科/免疫科、急诊或皮肤科评估；气道症状应立即急诊。',
    isGenetic: '多为常染色体显性遗传，但也可出现新发变异。家族史阴性不能排除。',
    hasTreatment:
      '有急性发作处理、短期预防和长期预防策略，但普通抗过敏药通常不能可靠控制 HAE 发作，需专科制定方案。',
    commonDelayReason:
      '常被当作荨麻疹、食物过敏、胃肠炎、阑尾炎或焦虑；没有风团和瘙痒、抗组胺/激素反应差时应重新考虑 HAE。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复无明显风团或瘙痒的深部肿胀，常持续较久后自行缓解。',
      '反复剧烈腹痛、恶心、呕吐或腹胀，检查难以解释。',
      '牙科、手术、感染、压力、月经或外伤后出现肿胀发作。',
      '喉部、舌头或咽喉肿胀、声音变化、吞咽或呼吸困难。',
      '家族中有人反复水肿、腹痛或不明原因窒息死亡史。',
    ],
    commonWrongTurns: [
      '长期按过敏或荨麻疹处理，未查补体 C4 和 C1 抑制物。',
      '腹部发作反复被当作急腹症，甚至经历不必要手术。',
      '气道发作时没有说明 HAE 风险，延误专科急救路径。',
      '只在发作时就诊，缓解后没有建立长期预防和家庭应急计划。',
    ],
    firstDepartments: [
      '变态反应科/临床免疫科',
      '急诊科（气道或严重腹部发作时）',
      '皮肤科',
      '消化科（反复腹部发作时）',
      '遗传咨询门诊',
    ],
    diagnosisChecklist: [
      '记录每次肿胀部位、持续时间、诱因、有无风团瘙痒和抗过敏药反应。',
      '保存腹痛发作时影像、急诊记录和是否做过手术。',
      '询问补体 C4、C1 抑制物水平和功能检测。',
      '记录家族中反复肿胀、腹痛、窒息或类似诊断。',
      '确诊后准备急性发作、手术牙科前预防和旅行应急计划。',
    ],
    testsToAskAbout: [
      '补体 C4。',
      'C1 抑制物水平和功能。',
      '必要时 C1q 等用于鉴别获得性血管性水肿。',
      'HAE 相关基因检测（医生认为需要时）。',
      '腹部发作时影像和气道风险评估。',
    ],
    questionsForDoctor: [
      '我的表现更像 HAE 还是普通过敏性血管性水肿？',
      '我属于哪种类型？需要复查 C4/C1 抑制物吗？',
      '气道、腹部和皮肤发作分别应该怎么处理？',
      '牙科、手术、内镜或旅行前需要短期预防吗？',
      '家属需要筛查吗？哪些药物或诱因需要避免或提前告知医生？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>HAE 典型表现是反复发生的深部水肿，常不痒、没有典型风团，可累及手脚、面部、外生殖器、胃肠道和上气道。胃肠道发作可出现剧烈腹痛、呕吐、腹胀或腹泻；喉部或舌咽部水肿可导致呼吸道阻塞风险。</p>',
    diagnosis:
      '<p>诊断通常从补体 C4、C1 抑制物水平和功能检测开始，并结合发作特点、家族史和用药反应。医生还会鉴别普通过敏性血管性水肿、荨麻疹、获得性 C1 抑制物缺乏、药物相关血管性水肿和急腹症等。</p>',
    treatment:
      '<p>管理包括急性发作治疗、气道风险处理、手术牙科等诱发场景的短期预防，以及发作频繁或风险较高时的长期预防。具体药物和获取路径因地区而异，需要由熟悉 HAE 的专科医生制定。</p>',
    longTermCare:
      '<p>长期照护重点是识别诱因、准备急诊说明、评估发作频率和生活影响、规划手术和旅行、家属筛查及心理支持。患者应把 HAE 诊断和急救计划告知急诊、麻醉、牙科和产科团队。</p>',
    fertilityOrFamily:
      '<p>HAE 多为常染色体显性遗传。确诊后一级亲属应考虑筛查。妊娠、分娩、避孕和激素用药可能影响发作风险，需要变态反应/免疫科与妇产科共同评估。</p>',
    emergencySigns:
      '<p>舌头、喉咙、声音改变、吞咽困难、胸闷或呼吸困难，或腹痛剧烈伴脱水、低血压、反复呕吐时，应立即急诊并说明 HAE 风险。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: Hereditary angioedema',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
    },
    {
      name: 'NCBI Bookshelf StatPearls: Hereditary Angioedema',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK482266/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>反复深部肿胀、腹痛呕吐、面部或四肢水肿，严重时可有喉部水肿和呼吸道阻塞风险。</p>',
  diagnosis:
    '<p>评估包括补体 C4、C1 抑制物水平和功能、家族史、发作特点及过敏性血管性水肿鉴别。</p>',
  treatment:
    '<p>管理包括急性发作处理、气道风险预案、短期和长期预防策略，需由免疫/变态反应专科制定。</p>',
  prognosis:
    '<p>规范识别和预案可降低严重发作风险；喉部发作是最需要快速处理的风险点。</p>',
  sourceName: 'MedlinePlus Genetics: Hereditary angioedema',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/hereditary-angioedema/',
  categorySlug: 'immunological-rheumatologic',
  charityIds: [51],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 339,
    name: 'hereditary-angioedema-hae-journey.png',
    url: '/images/diseases/hereditary-angioedema-hae-journey.png',
  },
  tagSlugs: ['genetic-counseling'],
};

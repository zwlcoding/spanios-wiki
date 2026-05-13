import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseGiantCellTumorOfBone: DiseaseDraft = {
  ...entity(2036, 'disease-giant-cell-tumor-of-bone'),
  name: '骨巨细胞瘤',
  nameEn: 'Giant cell tumor of bone',
  alias: 'GCTB、骨巨细胞瘤、骨巨细胞肿瘤、第二批罕见病目录第 36 项',
  slug: 'giant-cell-tumor-of-bone',
  oneSentence:
    '骨巨细胞瘤是一种少见的原发骨肿瘤，多数不是传统意义上的癌，但会在局部侵袭性生长，造成骨破坏、疼痛、肿胀和关节活动受限。',
  plainName: '常发生在关节附近、容易破坏骨头并复发的罕见骨肿瘤',
  prevalence:
    '已纳入国家第二批罕见病目录；GARD 将其列为罕见病，常在成人期出现，真实发生率会受登记和诊断口径影响。',
  quickLook: {
    whatItIs:
      'GCTB 常发生在长骨末端、靠近膝关节等关节的位置。它通常不是转移性癌，但可快速破坏局部骨质，治疗后也有复发风险。',
    whoToSeeFirst:
      '持续骨痛、关节附近肿块、活动受限、影像提示骨端溶骨性病变，或无明显外伤却骨折，应尽快到骨肿瘤专科、骨科肿瘤门诊或肿瘤科评估。',
    isGenetic:
      '多数骨巨细胞瘤不是家族遗传病，家属通常不需要常规遗传筛查；少数多发骨病变需要医生排查其他骨代谢或肿瘤性疾病。',
    hasTreatment:
      '治疗以手术为主，包括刮除、局部辅助处理、植骨或重建。无法安全手术、复发或特殊部位病灶时，医生可能讨论地舒单抗、放疗或临床试验。',
    commonDelayReason:
      '早期常被当作运动损伤、关节炎、扭伤或普通骨囊肿处理。疼痛逐渐加重、夜间痛、肿胀或影像异常需要骨肿瘤专科复核。',
  },
  patientJourney: {
    whenToSuspect: [
      '膝、腕、髋、肩等关节附近持续疼痛或肿胀，休息后不完全缓解，并逐渐影响活动。',
      'X 光、CT 或 MRI 提示骨端溶骨性病变、骨皮质变薄或病理性骨折。',
      '已经做过普通止痛、理疗或关节炎治疗，但疼痛、肿块或活动受限继续进展。',
      '既往接受过骨巨细胞瘤治疗后，原部位疼痛、肿胀复发，或肺部影像出现需要解释的结节。',
    ],
    commonWrongTurns: [
      '只按关节炎、运动损伤或滑膜炎反复处理，没有复查影像。',
      '看到骨肿瘤就急于手术，但没有在骨肿瘤中心完成影像、病理和手术方案评估。',
      '没有保留术前影像、病理切片和手术记录，复发时难以判断病灶范围。',
      '术后症状改善就停止随访，忽视局部复发和少见肺部转移监测。',
    ],
    firstDepartments: ['骨科肿瘤专科', '骨科', '肿瘤科', '病理科/影像科会诊'],
    diagnosisChecklist: [
      '带上疼痛和肿胀开始时间、是否夜间痛、是否影响负重或关节活动的记录。',
      '带齐 X 光、CT、MRI、骨扫描或 PET-CT 的原始影像和报告。',
      '如已做穿刺、活检或手术，带病理报告、病理切片/蜡块信息和手术记录。',
      '记录既往骨病、甲状旁腺功能异常、放疗史、复发史和肺部影像结果。',
    ],
    testsToAskAbout: [
      '病灶部位的 X 光、CT 和 MRI，用于判断骨破坏范围、软组织受累和关节关系。',
      '穿刺或切开活检，并由骨肿瘤病理医生复核。',
      '胸部 CT 或其他检查，用于复发、高风险或医生认为需要时评估少见肺部转移。',
      '术前是否需要多学科讨论，是否适合刮除、整块切除、重建或地舒单抗等辅助治疗。',
    ],
    questionsForDoctor: [
      '我的病灶属于可刮除还是需要更大范围切除？对关节功能有什么影响？',
      '复发风险大概取决于哪些因素？术后多久复查影像？',
      '我是否需要地舒单抗？它的获益、停药计划和副作用如何监测？',
      '如果以后疼痛或肿胀回来，应该直接找哪个科室和带哪些资料？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>骨巨细胞瘤最常见表现是病灶附近逐渐加重的疼痛、肿胀和关节活动受限。因为它常位于长骨末端，患者可能先感觉膝、腕、髋或肩等关节附近不适，活动、负重或夜间时更明显。</p><p>肿瘤破坏骨质后可导致骨皮质变薄、局部包块、关节积液或病理性骨折。少数患者治疗后会局部复发，极少数可出现肺部转移样病灶，因此随访不能只看症状。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、X 光、CT、MRI 和病理。即使影像很像骨巨细胞瘤，确诊通常仍需要活检或手术标本病理，并建议由熟悉骨肿瘤的团队评估。</p><p>医生会与软骨母细胞瘤、动脉瘤样骨囊肿、棕色瘤、骨肉瘤、转移瘤等相似病变鉴别。治疗前明确病变范围和病理类型很重要，因为手术方式会影响复发风险和关节功能。</p>',
    treatment:
      '<p>主要治疗是手术。常见方案包括肿瘤刮除、局部辅助处理、骨水泥或植骨填充；病灶范围大、骨破坏重或软组织受累明显时，可能需要整块切除和重建。</p><p>对无法安全切除、复发、脊柱/骨盆等困难部位或需要缩小病灶的患者，医生可能讨论地舒单抗。放疗一般只在不能手术或特殊情况下考虑，因为需要权衡长期风险。</p>',
    longTermCare:
      '<p>随访重点是局部复发、关节功能、骨愈合、内固定或重建材料状态，以及少见肺部病灶。复查通常包括局部影像，部分患者需要胸部影像。</p><p>康复训练应在骨科指导下逐步恢复负重和关节活动，避免过早高强度运动造成骨折或内固定问题。</p>',
    fertilityOrFamily:
      '<p>骨巨细胞瘤多数不按遗传病管理，亲属一般不需要筛查。年轻患者如果需要长期药物、放疗或复杂手术，可提前询问对妊娠计划、哺乳和骨骼发育的影响。</p>',
    emergencySigns:
      '<p>病灶部位突然剧烈疼痛、不能负重、明显畸形或怀疑骨折，应立即急诊。术后出现发热、伤口明显红肿渗液、肢体麻木无力、胸痛或呼吸困难，也需要尽快就医。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Giant cell tumor of bone',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/13046/giant-cell-tumor-of-bone',
    },
    {
      name: 'NCI: Denosumab',
      type: 'official',
      url: 'https://www.cancer.gov/about-cancer/treatment/drugs/denosumab',
    },
  ],
  symptoms:
    '<p>常见逐渐加重的骨痛、关节附近肿胀、活动受限、局部包块，骨质破坏明显时可发生病理性骨折。</p>',
  diagnosis:
    '<p>诊断依靠骨肿瘤专科评估、X 光/CT/MRI 判断范围，并通过活检或手术标本病理确诊，同时排除相似骨病变。</p>',
  treatment:
    '<p>治疗以手术为主，包括刮除、局部辅助处理、植骨/骨水泥或重建；无法安全手术或复发时可讨论地舒单抗等方案。</p>',
  prognosis:
    '<p>多数患者经规范治疗可控制病灶，但局部复发并不少见，少数可累及肺部，需按计划长期影像随访和功能康复。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 390,
    name: 'giant-cell-tumor-of-bone-journey.png',
    url: '/images/diseases/giant-cell-tumor-of-bone-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

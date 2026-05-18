import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseMultifocalMotorNeuropathy: DiseaseDraft = {
  ...entity(5020, 'disease-multifocal-motor-neuropathy'),
  name: '多灶性运动神经病',
  nameEn: 'Multifocal Motor Neuropathy',
  alias: 'MMN、多灶性运动神经病伴传导阻滞',
  icd10Code: 'G61.8',
  slug: 'multifocal-motor-neuropathy',
  oneSentence:
    '多灶性运动神经病是一种罕见的免疫介导性周围神经病，以不对称性、缓慢进展的肢体肌无力为特征，不伴明显感觉障碍，多数患者对静脉免疫球蛋白治疗反应良好。',
  plainName: '免疫系统“误伤”运动神经导致手脚没力气',
  prevalence:
    '患病率约 1-2/100,000；男性多于女性，发病高峰在 35-70 岁。属于可治性周围神经病，但早期识别率较低。',
  searchIntents: [
    '多灶性运动神经病 症状',
    'MMN 诊断标准',
    '多灶性运动神经病 治疗',
    'MMN 与ALS区别',
    '静脉免疫球蛋白 MMN',
  ],
  quickLook: {
    whatItIs:
      '这是一种免疫系统异常攻击运动神经的疾病。运动神经负责把大脑的指令传给肌肉，当它们受损时，肌肉就会出现无力、萎缩。和渐冻症（ALS）不同，MMN不损害感觉神经，也不影响寿命，而且大多对免疫治疗有反应。',
    whoToSeeFirst:
      '出现不对称的手脚无力（如一侧手腕抬不起来、握力下降）时，先看神经内科；确诊后由神经肌肉病专科长期随访。',
    isGenetic:
      '不是遗传病，是后天获得的自身免疫性疾病。病因尚不完全清楚，可能与抗GM1神经节苷脂抗体有关。',
    hasTreatment:
      '有有效治疗方法。静脉免疫球蛋白（IVIg）是首选治疗，约80%患者有明显改善。少数对IVIg反应不佳者可能需要其他免疫抑制剂，但激素和血浆置换通常无效甚至可能加重。',
    commonDelayReason:
      '早期症状轻微且不对称，容易被误认为“干活累了”、腕管综合征或颈椎病；常被误诊为渐冻症（ALS），造成不必要的心理负担；基层医院对神经肌肉电生理检查经验不足。',
  },
  patientJourney: {
    whenToSuspect: [
      '一侧手部或前臂出现缓慢进展的无力，如握力下降、掉东西、拧不开瓶盖。',
      '手腕下垂（腕伸无力）或足下垂（足背伸无力），且不对称。',
      '伴有肌肉痉挛、肉跳（肌束震颤）或肌肉萎缩，但没有麻木、刺痛等感觉异常。',
      '症状在数月至数年间缓慢进展，呈“阶梯式”加重（即稳定一段时间后又出现新的无力区域）。',
      '血清抗GM1抗体阳性（虽然不是所有患者都阳性）。',
    ],
    commonWrongTurns: [
      '把早期手无力当作腕管综合征或颈椎病，做了不必要的手术。',
      '因有肉跳和肌萎缩而被误诊为渐冻症（ALS），造成巨大的心理压力。',
      '在基层医院未做神经传导检查就下结论，延误确诊。',
      '使用了糖皮质激素或血浆置换，不仅无效还可能使症状加重。',
      '确诊后未在有神经肌肉病专科经验的中心接受规范治疗。',
    ],
    firstDepartments: [
      '神经内科',
      '神经肌肉病专科',
      '康复医学科（辅助维持肌力和功能）',
    ],
    diagnosisChecklist: [
      '详细记录无力出现的部位、顺序、进展速度和是否对称。',
      '确认有无感觉症状（麻木、疼痛、刺痛）——MMN通常没有。',
      '带上神经传导检查和肌电图报告（重点关注有无运动神经传导阻滞）。',
      '如有血清抗GM1抗体检测结果，一并携带。',
      '向医生确认是否需要排除颈椎病、腕管综合征和渐冻症。',
    ],
    testsToAskAbout: [
      '神经传导检查（重点检测运动神经有无多灶性传导阻滞，这是诊断的核心依据）。',
      '肌电图（EMG，评估有无失神经改变和慢性神经源性损害）。',
      '血清抗GM1神经节苷脂IgM抗体。',
      '颈椎MRI（排除颈椎病导致的神经根压迫）。',
      '脑和脊髓MRI（排除中枢神经系统病变）。',
      '必要时进行腰椎穿刺（脑脊液检查，部分患者可有蛋白轻度升高）。',
    ],
    questionsForDoctor: [
      '我的症状更符合MMN还是渐冻症？如何区分？',
      '静脉免疫球蛋白的疗效预期是什么？多久需要输注一次？',
      '如果IVIg效果减退，还有哪些替代方案？',
      '需要做多长时间的随访？肌力能恢复到什么程度？',
      '日常生活中需要注意什么？可以做哪些康复锻炼？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>MMN的核心特征是缓慢进展、不对称的上肢或下肢肌无力。通常从一侧手部或前臂开始，表现为握力下降、手指精细动作困难、掉东西、拧不开瓶盖。部分患者早期出现腕下垂（伸腕无力），少数以下肢足下垂为首发。</p><p>肌无力呈多灶性分布，即沿着不同运动神经的支配区域逐步扩展，常见上肢重于下肢。可伴有肌肉痉挛、肌束震颤（肉跳）和受累肌肉的萎缩。与运动神经元病不同，MMN不伴明显的感觉障碍（如麻木、疼痛），上运动神经元体征（肌张力增高、腱反射亢进）也通常 absent。</p><p>颅神经一般不受累，呼吸肌通常不受影响，因此不影响寿命。但晚期可因长期肌无力造成功能障碍。</p>',
    diagnosis:
      '<p>MMN的诊断依赖于详细的病史、体格检查和电生理检查。核心诊断标准是：</p><p>1. <strong>临床标准：</strong>缓慢进展或阶梯式进展的局灶性、不对称性肢体肌无力，累及至少两根运动神经的支配区域，持续超过1个月；无或仅有轻微感觉异常。</p><p>2. <strong>电生理标准：</strong>神经传导检查显示多灶性运动神经传导阻滞，且不在常见神经嵌压部位。传导阻滞是指神经冲动在某一节段传导受阻，而近端和远端刺激均可正常传导。</p><p>3. <strong>实验室检查：</strong>约50-80%患者血清抗GM1神经节苷脂IgM抗体阳性，但阴性结果不能排除诊断。</p><p>鉴别诊断至关重要，需要排除：渐冻症（ALS）、颈椎病、腕管综合征、多灶性获得性脱髓鞘性感觉运动神经病（MADSAM）、慢性炎性脱髓鞘性多发性神经病（CIDP）等。</p>',
    treatment:
      '<p><strong>静脉免疫球蛋白（IVIg）：</strong>是MMN的一线治疗，约80%患者有显著疗效。标准方案为2 g/kg分2-5天输注，起效通常在治疗后1-2周内。疗效持续时间个体差异大，多数患者需要定期维持治疗（通常每2-6周0.4-1 g/kg）。皮下免疫球蛋白（SCIG）也是一种可行的替代给药途径。</p><p><strong>免疫抑制剂：</strong>对IVIg反应不佳或无法耐受者，可考虑环磷酰胺、利妥昔单抗等，但证据有限且需注意副作用。环磷酰胺口服在部分患者中可减少IVIg用量。</p><p><strong>激素和血浆置换：</strong>通常对MMN无效，甚至可能加重症状，应避免使用。</p><p><strong>康复治疗：</strong>物理治疗和作业治疗有助于维持肌力、改善功能和预防关节挛缩。辅助器具（如腕托、足托）可提高日常生活独立性。</p>',
    longTermCare:
      '<p>MMN需要长期随访以监测疾病进展和治疗反应。定期评估内容包括：肌力测试（尤其握力和腕伸力量）、神经传导检查（监测传导阻滞变化）、日常生活能力评估。</p><p>随着病程延长，部分患者可能出现继发性轴索损害，导致对IVIg反应减退，需要调整剂量或给药间隔。早期诊断和规范治疗对维持长期功能至关重要。</p><p>患者应学会识别症状加重的信号（如原有无力区域扩展或出现新的无力部位），及时联系主治医生调整治疗方案。</p>',
    fertilityOrFamily:
      '<p>MMN不是遗传病，不会影响子女的健康。患者可以放心生育。但怀孕期间可能需要调整IVIg剂量和给药频率，应在神经科医生和产科医生的共同指导下进行。</p><p>如果家族中有其他自身免疫性疾病史，可在孕前咨询中提及，但这与MMN本身无直接关联。</p>',
    emergencySigns:
      '<p>MMN本身通常不会引起急性生命危险。但如果出现以下情况应及时就医：肌无力在短时间内明显加重、出现新的无力区域影响行走或日常生活、出现呼吸困难（罕见但需警惕）。</p><p>如果正在使用IVIg，出现输液反应（发热、寒战、头痛、皮疹）应及时告知医护人员。少数患者可能出现血栓事件（如脑梗死、心肌梗死），有心血管危险因素者应特别注意。</p>',
  },
  sources: [
    {
      name: 'NCBI StatPearls: Multifocal Motor Neuropathy',
      type: 'review',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554524/',
    },
    {
      name: 'NORD: Multifocal Motor Neuropathy',
      type: 'review',
      url: 'https://rarediseases.org/rare-diseases/multifocal-motor-neuropathy/',
    },
    {
      name: 'EFNS/PNS Guideline: Multifocal Motor Neuropathy',
      type: 'clinical-guideline',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20439557/',
    },
  ],
  symptoms:
    '<p>不对称性、缓慢进展的肢体肌无力，常从手部开始，伴肌束震颤和肌肉萎缩；无感觉障碍；颅神经和呼吸肌通常不受累。</p>',
  diagnosis:
    '<p>神经传导检查显示多灶性运动神经传导阻滞是核心依据；血清抗GM1抗体可支持诊断；需排除ALS、颈椎病和CIDP。</p>',
  treatment:
    '<p>静脉免疫球蛋白（IVIg）是一线治疗，多数患者反应良好；需定期维持；激素和血浆置换通常无效。</p>',
  prognosis:
    '<p>早期诊断和IVIg治疗可显著改善肌力和生活质量；疾病通常缓慢进展但不影响寿命；晚期可能出现继发性轴索损害。',
  sourceName: 'NCBI StatPearls',
  sourceUrl: 'https://www.ncbi.nlm.nih.gov/books/NBK554524/',
  categorySlug: 'neurological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 3520,
    name: 'multifocal-motor-neuropathy-journey.png',
    url: '/images/diseases/multifocal-motor-neuropathy-journey.png',
  },
  tagSlugs: ['neurological', 'autoimmune', 'immune-therapy'],
};

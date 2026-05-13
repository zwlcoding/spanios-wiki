import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseTumorInducedOsteomalacia: DiseaseDraft = {
  ...entity(2082, 'disease-tumor-induced-osteomalacia'),
  name: '肿瘤相关骨软化症',
  nameEn: 'Tumor-induced osteomalacia',
  alias: 'TIO；肿瘤性骨软化症；第二批罕见病目录第 82 项',
  slug: 'tumor-induced-osteomalacia',
  oneSentence:
    '肿瘤相关骨软化症是一种罕见的获得性低磷性骨软化病，通常由小而隐蔽的肿瘤分泌过多 FGF23，导致肾脏丢磷、骨痛、肌无力和反复骨折。',
  plainName: '一个隐蔽小肿瘤让身体长期丢磷、骨头变软的疾病',
  prevalence:
    '已纳入中国第二批罕见病目录；TIO 很罕见，致病肿瘤常小、位置隐蔽，确诊前可能经历多年骨痛和多次骨折。',
  quickLook: {
    whatItIs:
      '过多 FGF23 会让肾脏把磷排掉，血磷长期偏低，骨骼矿化不足。患者常从腰背、肋骨或下肢疼痛开始，逐渐出现全身骨痛、肌无力、走路困难和假骨折。',
    whoToSeeFirst:
      '成人新发低磷血症、ALP 升高、骨痛或多发骨折，应到内分泌科/骨代谢专科；发现可疑肿瘤后需骨肿瘤、核医学、影像、外科和病理团队协作。',
    isGenetic:
      'TIO 通常不是遗传病，而是获得性副肿瘤综合征；家属一般不需要遗传筛查。',
    hasTreatment:
      '定位并完整切除致病肿瘤是最有效治疗。找不到、不能切除或复发时，可用磷剂、活性维生素 D 或按条件评估 burosumab 等治疗，并监测肾脏和钙磷代谢。',
    commonDelayReason:
      '骨痛常被当作骨质疏松、腰椎病、风湿痛或心理因素；如果没有查血磷、尿磷和 FGF23，也没有做功能影像寻找小肿瘤，容易长期漏诊。',
  },
  patientJourney: {
    whenToSuspect: [
      '成人逐渐出现全身骨痛、腰背或肋骨痛、走路困难、近端肌无力、身高变矮或多发低能量骨折。',
      '化验提示低血磷、尿磷丢失、ALP 升高，而血钙常正常或接近正常。',
      '骨显像、MRI、CT 或 PET/生长抑素受体显像发现小肿块，或切除后血磷迅速改善。',
    ],
    commonWrongTurns: [
      '长期只补钙或按普通骨质疏松治疗，没有评估低磷血症和肾磷丢失。',
      '反复看骨科、疼痛科和风湿科，但没有把血磷、尿磷、FGF23 与骨软化联系起来。',
      '找到可疑病灶后没有进行多学科定位和病理确认，导致手术范围或复发风险评估不足。',
    ],
    firstDepartments: [
      '内分泌科/骨代谢专科',
      '骨科或骨肿瘤专科',
      '核医学科/影像科',
      '罕见病多学科门诊',
    ],
    diagnosisChecklist: [
      '整理骨痛部位、骨折、身高变化、肌无力、走路能力和既往补钙/抗骨质疏松治疗反应。',
      '带血磷、钙、ALP、PTH、25(OH)D、1,25(OH)2D、肾功能、尿磷、TmP/GFR 和 FGF23 结果。',
      '带骨密度、X 线/CT/MRI、骨显像、PET 或生长抑素受体显像原片和报告。',
    ],
    testsToAskAbout: [
      '低磷是否来自肾磷丢失，TmP/GFR 和 FGF23 是否支持 TIO。',
      '下一步如何定位肿瘤：全身 MRI/CT、骨显像、PET-CT 或生长抑素受体显像如何选择。',
      '如果找不到或不能切除肿瘤，磷剂、活性维生素 D 或 burosumab 的目标和风险是什么。',
    ],
    questionsForDoctor: [
      '我是否已经符合 FGF23 介导的低磷性骨软化？还有哪些遗传性或药物性原因要排除？',
      '可疑肿瘤是否能完整切除？术后多久复查血磷和 FGF23？',
      '骨折、疼痛和肌无力恢复需要多久，康复和防跌倒怎么安排？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>TIO 常表现为逐渐加重的下肢、腰背、肋骨或全身骨痛，近端肌无力，起立和上下楼困难，步态不稳，身高下降，假骨折或多发低能量骨折。病程长时会明显影响活动能力和生活质量。</p><p>实验室常见低血磷、尿磷排泄增加、碱性磷酸酶升高，血钙多正常。致病肿瘤通常小、进展慢，可位于骨或软组织的隐蔽部位。</p>',
    diagnosis:
      '<p>诊断需要确认低磷血症是否来自肾磷丢失，并检测 FGF23、TmP/GFR、钙磷代谢、维生素 D、PTH 和肾功能。影像上可见骨软化、假骨折或多发骨代谢异常。</p><p>定位肿瘤常需全身 MRI/CT、骨显像、PET-CT 或生长抑素受体显像，最终依赖手术病理。医生还会排除遗传性低磷佝偻病、药物性低磷、Fanconi 综合征和其他骨代谢病。</p>',
    treatment:
      '<p>完整切除致病肿瘤是首选和最有效治疗，术后血磷和 FGF23 往往较快改善，但骨骼恢复需要时间。无法定位、不能切除或复发时，可用磷剂和活性维生素 D，并严密监测继发性甲旁亢、肾钙化和胃肠副作用。</p><p>部分不能手术或病灶无法控制的患者可评估抗 FGF23 治疗 burosumab，具体取决于诊断证据、适应证和可及性。</p>',
    longTermCare:
      '<p>长期随访包括血磷、尿磷、FGF23、ALP、PTH、维生素 D、肾功能、肾脏超声、骨折愈合和复发影像。术后也需警惕血磷再次下降提示残留或复发。</p><p>康复重点是疼痛控制、肌力训练、步态和防跌倒，骨折风险未恢复前应避免过度负重。</p>',
    fertilityOrFamily:
      '<p>TIO 通常不是遗传病。若发病年龄早、家族中有低磷或佝偻病表现，医生会考虑遗传性低磷疾病并建议遗传咨询。</p>',
    emergencySigns:
      '<p>突发不能站立或行走、疑似骨折、严重胸背痛、明显肌无力影响呼吸、术后发热伤口异常，或治疗期间抽搐/心律异常等电解质风险表现，应及时急诊。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'Cleveland Clinic: Tumor-induced osteomalacia',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/tumor-induced-osteomalacia',
    },
    {
      name: 'NIH GARD: Tumor-induced osteomalacia',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/12936/tumor-induced-osteomalacia',
    },
  ],
  symptoms:
    '<p>常见全身骨痛、腰背或肋骨痛、肌无力、走路困难、假骨折或多发低能量骨折，化验提示低血磷、尿磷丢失和 ALP 升高。</p>',
  diagnosis:
    '<p>诊断需确认 FGF23 介导的肾磷丢失，结合血尿磷、TmP/GFR、FGF23、骨代谢检查和全身功能影像定位小肿瘤，并排除遗传性低磷病。</p>',
  treatment:
    '<p>首选完整切除致病肿瘤；不能定位或不能切除时可用磷剂、活性维生素 D 或按条件评估 burosumab，并监测肾脏和钙磷代谢。</p>',
  prognosis:
    '<p>肿瘤完整切除后通常明显改善；若定位困难、切除不全或复发，骨痛、骨折和低磷可长期反复，需要持续随访。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'oncology',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 435,
    name: 'tumor-induced-osteomalacia-journey.png',
    url: '/images/diseases/tumor-induced-osteomalacia-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog', 'endocrine'],
};

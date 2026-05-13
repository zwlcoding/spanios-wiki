import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseColdAgglutininDisease: DiseaseDraft = {
  ...entity(2015, 'disease-cold-agglutinin-disease'),
  name: '冷凝集素病',
  nameEn: 'Cold agglutinin disease',
  alias: 'CAD、冷抗体型自身免疫性溶血性贫血、第二批罕见病目录第 15 项',
  slug: 'cold-agglutinin-disease',
  oneSentence:
    '冷凝集素病是一种罕见自身免疫性溶血性贫血，冷刺激可使异常抗体更容易破坏红细胞，导致贫血、乏力、黄疸、深色尿和手足遇冷变色等问题。',
  plainName: '遇冷后红细胞更容易被免疫系统破坏的罕见贫血',
  prevalence:
    '已纳入国家第二批罕见病目录；总体罕见，多见于成人和老年人，不同研究对原发性和继发性病例统计口径不同。',
  quickLook: {
    whatItIs:
      '冷凝集素是一类在较低温度下更容易结合红细胞的自身抗体，可激活补体并造成溶血。患者可能有贫血症状，也可能在冷环境中出现手指、脚趾、耳鼻颜色改变或疼痛。',
    whoToSeeFirst:
      '反复贫血、黄疸、深色尿，或遇冷后手足发紫/发白/疼痛，应先看血液科；严重气短、胸痛、意识改变或明显感染要急诊。',
    isGenetic:
      '通常不是遗传病。医生会判断是原发性 CAD，还是继发于感染、自身免疫病或淋巴增殖性疾病等情况。',
    hasTreatment:
      '轻症可能以保暖、避免冷暴露、感染预防和监测为主；有症状贫血、输血依赖或明显循环症状时，血液科可评估抗 B 细胞治疗、补体通路药物或其他方案。',
    commonDelayReason:
      '容易被当作普通贫血、雷诺现象、手脚冰凉或感染后乏力。关键是把贫血、溶血指标、直接抗人球蛋白试验和冷刺激相关症状联系起来。',
  },
  patientJourney: {
    whenToSuspect: [
      '反复乏力、头晕、心慌、气短，化验提示贫血且有胆红素或 LDH 升高、结合珠蛋白降低等溶血线索。',
      '遇冷后手指、脚趾、耳朵或鼻尖发紫、发白、疼痛或麻木。',
      '尿色变深、皮肤或眼睛发黄，症状在寒冷季节、冷饮、冷输液或感染后加重。',
      '血样凝集、血常规结果异常难解释，或直接抗人球蛋白试验提示补体相关阳性。',
    ],
    commonWrongTurns: [
      '只补铁或补维生素，没有确认是否为溶血性贫血。',
      '把遇冷变色单独当作雷诺现象，没有检查血红蛋白和溶血指标。',
      '输液、输血或采血过程没有注意保温，导致症状或检测误差。',
      '确诊后没有评估是否存在感染、免疫病或淋巴增殖性疾病等关联情况。',
    ],
    firstDepartments: ['血液科', '罕见血液病门诊', '风湿免疫科', '急诊科'],
    diagnosisChecklist: [
      '整理贫血发现时间、遇冷诱因、季节变化、尿色、黄疸、手足颜色变化和感染史。',
      '带齐血常规、网织红细胞、胆红素、LDH、结合珠蛋白、直接抗人球蛋白试验和冷凝集素滴度。',
      '记录输血史、药物、疫苗/感染、自身免疫病、淋巴结肿大、脾大和既往肿瘤或血液病。',
      '如有寒冷环境工作、冷库、冬季户外暴露或冷饮诱发，记录具体场景。',
    ],
    testsToAskAbout: [
      '血常规、网织红细胞、外周血涂片和溶血指标。',
      '直接抗人球蛋白试验，尤其关注补体 C3d 相关结果，以及冷凝集素滴度/热幅度。',
      '免疫球蛋白、血清蛋白电泳/免疫固定、补体和淋巴增殖性疾病筛查。',
      '根据病情评估感染、自身免疫病、骨髓或影像检查是否必要。',
    ],
    questionsForDoctor: [
      '我的贫血是否由冷凝集素导致？是原发性还是继发性？',
      '哪些温度、场景、输液或检查需要保暖措施？',
      '目前只需要观察和保暖，还是需要药物治疗或输血支持？',
      '如果要输血，血液和输注过程是否需要加温？',
      '需要筛查淋巴增殖性疾病、感染或自身免疫病吗？复查哪些指标？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>冷凝集素病可表现为贫血和冷相关循环症状。贫血可造成乏力、头晕、心悸、活动后气短、面色苍白；溶血可造成黄疸、深色尿、胆红素升高。症状可在寒冷季节、感染或冷暴露后加重。</p><p>部分患者遇冷后手指、脚趾、耳朵或鼻尖发紫、发白、疼痛或麻木。严重溶血、血栓风险或合并疾病需要血液科评估。</p>',
    diagnosis:
      '<p>诊断需要证明溶血性贫血，并发现冷凝集素相关证据。常用检查包括血常规、网织红细胞、胆红素、LDH、结合珠蛋白、外周血涂片、直接抗人球蛋白试验和冷凝集素滴度。</p><p>医生还会评估是否为原发性 CAD，或继发于感染、自身免疫病、淋巴增殖性疾病等。采血、标本运输和输注过程有时需要保温，以减少检测误差和症状诱发。</p>',
    treatment:
      '<p>轻症或无症状患者可能以避免寒冷、保暖、感染预防、监测血红蛋白和溶血指标为主。需要手术、输液或输血时，应提前告知医护，讨论保温和加温措施。</p><p>有症状贫血、输血依赖或明显冷相关循环症状时，血液科可根据病情选择抗 B 细胞治疗、补体通路药物或其他方案。普通激素对典型 CAD 往往效果有限，具体用药应由血液科决定。</p>',
    longTermCare:
      '<p>长期管理包括定期复查血常规、溶血指标、补体相关指标和潜在基础病线索。患者应学习保暖策略，例如避免冷饮、冷水浸泡、寒冷环境工作和未加温输液。</p><p>外出、旅行、手术、牙科或内镜检查前，应主动告知冷凝集素病诊断，便于医疗团队安排温度管理和输血预案。</p>',
    fertilityOrFamily:
      '<p>冷凝集素病通常不是遗传病，家属一般不需要遗传筛查。若合并自身免疫病、感染或淋巴增殖性疾病，应按对应疾病进行家族史和风险评估。</p><p>备孕或妊娠期间如果有活动性溶血或正在用免疫治疗，应由血液科和产科共同管理。</p>',
    emergencySigns:
      '<p>突然明显气短、胸痛、晕厥、意识改变、心跳很快、尿色明显加深伴乏力加重、发热寒战、肢体剧痛或疑似血栓表现，应立即急诊，并说明冷凝集素病和近期用药/输血情况。</p>',
  },
  sources: [
    {
      name: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
      type: 'clinical-guideline',
      url: 'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
    },
    {
      name: 'GARD: Cold agglutinin disease',
      type: 'official',
      url: 'https://rarediseases.info.nih.gov/diseases/6130/cold-agglutinin-disease',
    },
    {
      name: 'Cleveland Clinic: Cold Agglutinin Disease',
      type: 'review',
      url: 'https://my.clevelandclinic.org/health/diseases/23178-cold-agglutinin-disease',
    },
  ],
  symptoms:
    '<p>常见表现包括乏力、头晕、心慌、气短、黄疸、深色尿，以及遇冷后手足、耳鼻发紫、发白、疼痛或麻木。</p>',
  diagnosis:
    '<p>诊断依靠血常规和溶血指标、直接抗人球蛋白试验、冷凝集素滴度/热幅度，并评估感染、免疫病或淋巴增殖性疾病。</p>',
  treatment:
    '<p>轻症以保暖、避免冷暴露和监测为主；症状性贫血或明显循环症状可由血液科评估输血加温、抗 B 细胞治疗、补体药物或其他方案。</p>',
  prognosis:
    '<p>病程差异较大，很多患者可通过温度管理和血液科随访降低风险；严重溶血、输血依赖或基础病需要更积极治疗。</p>',
  sourceName: '国家卫生健康委办公厅：86个罕见病病种诊疗指南（2025年版）',
  sourceUrl:
    'https://www.nhc.gov.cn/yzygj/c100068/202507/5b3f41180a42465eb9eec34597bacaf2.shtml',
  categorySlug: 'hematological',
  charityIds: [],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  featuredImage: {
    id: 369,
    name: 'cold-agglutinin-disease-journey.png',
    url: '/images/diseases/cold-agglutinin-disease-journey.png',
  },
  tagSlugs: ['second-rare-disease-catalog'],
};

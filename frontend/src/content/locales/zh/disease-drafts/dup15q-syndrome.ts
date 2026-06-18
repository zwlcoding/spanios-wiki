import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseDup15qSyndrome: DiseaseDraft = {
  ...entity(6102, 'disease-dup15q-syndrome'),
  name: '15q11-q13重复综合征（dup15q综合征）',
  nameEn: '15q11-q13 duplication syndrome',
  alias: 'dup15q综合征、15号染色体重复综合征、idic(15)、inv dup(15)',
  oneSentence:
    'dup15q综合征是一种母源15q11.2-q13.1区域额外拷贝导致的神经发育障碍，可引起肌张力低、运动和语言发育迟缓、智力障碍、孤独症谱系特征和癫痫。',
  plainName: '15号染色体特定区域重复导致的发育和癫痫相关综合征',
  prevalence:
    'MedlinePlus Genetics 描述其患病率不明，可能在普通人群中高达约1/5,000，在孤独症或智力障碍人群中更常见。',
  quickLook: {
    whatItIs:
      '15号染色体15q11.2-q13.1区域来自母亲的额外拷贝会影响神经发育。等臂双着丝粒15号染色体通常更重，间插重复可能较轻。',
    whoToSeeFirst:
      '婴儿肌张力低、喂养困难、发育迟缓、孤独症谱系表现或癫痫，应到儿童神经科、发育行为儿科和医学遗传科。',
    isGenetic:
      '属于染色体拷贝数变异。多数idic(15)为新发，部分间插重复可由母亲遗传，需做父母检测和遗传咨询。',
    hasTreatment:
      '目前没有根治方法，重点是癫痫管理、康复训练、语言和行为干预、教育支持，以及听力、视力、脊柱和睡眠等并发问题管理。',
    commonDelayReason:
      '早期常被诊断为发育迟缓、脑瘫、孤独症或癫痫，若没有做染色体微阵列或相应检测，病因会延迟明确。',
  },
  patientJourney: {
    whenToSuspect: [
      '婴儿期肌张力低、吸吮吞咽困难、坐立行走明显延迟。',
      '语言发育严重受影响，伴孤独症谱系特征、重复行为或社交困难。',
      '6个月到儿童期出现反复癫痫、婴儿痉挛或难治性癫痫。',
      '合并斜视、听力问题、脊柱侧弯、反复呼吸感染或明显体重增加。',
    ],
    commonWrongTurns: [
      '只按孤独症或发育迟缓干预，没有寻找染色体拷贝数变异。',
      '癫痫反复但未把发育倒退和染色体病因联系起来。',
      '只做常规核型检查而未做能检出微重复的染色体微阵列。',
    ],
    firstDepartments: [
      '儿童神经科',
      '发育行为儿科',
      '医学遗传科',
      '康复医学科',
    ],
    diagnosisChecklist: [
      '带出生史、喂养、肌张力、运动语言发育和癫痫时间线。',
      '整理脑电图、脑MRI、康复评估、孤独症评估和用药反应。',
      '记录听力、眼科、脊柱、睡眠、呼吸感染和家族史。',
    ],
    testsToAskAbout: [
      '染色体微阵列或CNV检测确认15q11.2-q13.1重复。',
      '必要时FISH、核型分析或其他检测区分idic(15)和间插重复。',
      '父母检测确定是否遗传，癫痫者需脑电图随访。',
    ],
    questionsForDoctor: [
      '孩子属于idic(15)还是间插重复？母源还是父源？',
      '癫痫风险和SUDEP风险如何管理？是否需要急救药方案？',
      '康复、语言沟通和学校支持的优先级是什么？',
    ],
  },
  medicalSections: {
    symptoms:
      '<p>常见表现包括肌张力低、运动里程碑延迟、宽基步态或共济失调、语言发育严重受影响、智力障碍、孤独症谱系特征、焦虑或行为问题。超过半数患者可有癫痫，类型包括婴儿痉挛、局灶性发作、强直阵挛或其他复杂发作。</p>',
    diagnosis:
      '<p>诊断依靠能识别染色体拷贝数变异的检测，如染色体微阵列、CNV检测、FISH或核型分析，并结合发育和癫痫表现。还需要判断重复是否在母源15号染色体上，以及是idic(15)还是间插重复。</p>',
    treatment:
      '<p>治疗以支持为主，包括癫痫规范管理、早期康复、语言和替代沟通训练、行为干预、特殊教育支持，以及听力、视力、脊柱、睡眠和胃肠问题处理。难治性癫痫需儿童癫痫专科长期管理。</p>',
    longTermCare:
      '<p>长期随访应跟踪癫痫频率和脑电图、发育目标、沟通能力、行为和睡眠、营养体重、听力和眼科、脊柱侧弯及家庭照护压力。学校和康复目标需随年龄调整。</p>',
    fertilityOrFamily:
      '<p>遗传咨询需解释母源重复、父母携带情况和复发风险。idic(15)多为新发；间插重复有时可由母亲遗传，亲属检测应由遗传团队安排。</p>',
    emergencySigns:
      '<p>持续或成串癫痫、发作后长时间不清醒、呼吸暂停或发绀、明显发育倒退、严重呛咳或吸入、严重行为安全风险，应尽快就医。</p>',
  },
  sources: [
    {
      name: 'MedlinePlus Genetics: 15q11-q13 duplication syndrome',
      type: 'official',
      url: 'https://medlineplus.gov/genetics/condition/15q11-q13-duplication-syndrome/',
    },
    {
      name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
      type: 'patient-organization',
      url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
    },
  ],
  symptoms:
    '<p>可表现为肌张力低、运动和语言发育迟缓、智力障碍、孤独症谱系特征、行为问题和反复癫痫。</p>',
  diagnosis:
    '<p>诊断依靠染色体微阵列/CNV检测、FISH或核型分析，确认15q11.2-q13.1重复并判断遗传来源和结构类型。</p>',
  treatment:
    '<p>以癫痫管理、康复、语言/替代沟通、行为和教育支持及并发问题处理为主。</p>',
  prognosis:
    '<p>个体差异较大，idic(15)通常较重；早期诊断和持续癫痫、康复及教育支持可改善功能和家庭照护质量。</p>',
  sourceName: 'MedlinePlus Genetics: 15q11-q13 duplication syndrome',
  sourceUrl:
    'https://medlineplus.gov/genetics/condition/15q11-q13-duplication-syndrome/',
  slug: 'dup15q-syndrome',
  categorySlug: 'genetic-developmental',
  charityIds: [85],
  hospitalIds: [],
  reviewStatus: 'patient-reviewed',
  tagSlugs: ['genetic-counseling'],
};

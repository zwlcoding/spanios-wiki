import { entity } from '@/content/data/helpers';
import type { DiseaseDraft } from '@/content/data/types';

export const diseaseSpinalAndBulbarMuscularAtrophyKennedyDisease: DiseaseDraft =
  {
    ...entity(1109, 'catalog-china-first-rare-disease-catalog-109'),
    name: '脊髓延髓肌萎缩症（肯尼迪病）',
    nameEn: 'Spinal and Bulbar Muscular Atrophy (Kennedy Disease)',
    alias: 'SBMA、Kennedy病、第一批罕见病目录第 109 项',
    slug: 'spinal-and-bulbar-muscular-atrophy-kennedy-disease',
    oneSentence:
      '脊髓延髓肌萎缩症（肯尼迪病）是一种由AR基因CAG重复扩增导致的X连锁神经肌肉病，常见成年男性逐渐出现肢体无力、肌束颤动、吞咽或构音困难，并可伴内分泌表现。',
    plainName: '成年男性多见、影响肢体和吞咽说话肌肉的X连锁神经肌肉病',
    prevalence:
      '已纳入国家第一批罕见病目录；患者组织OCR资料提到约1-2/10万人，具体人群估计可能不同。',
    quickLook: {
      whatItIs:
        '肯尼迪病进展通常较慢，容易被误认为运动神经元病、普通肌病或内分泌问题。与ALS不同，它常伴雄激素不敏感相关表现，如男性乳房发育、不育或睾丸萎缩。',
      whoToSeeFirst:
        '建议看神经肌肉专病门诊或神经内科，同时根据需要评估康复、吞咽营养、呼吸、内分泌和遗传咨询。',
      isGenetic:
        '本病为X连锁遗传，与AR基因CAG重复扩增有关。男性多发病，女性携带者通常症状轻或无症状，但家族生育需遗传咨询。',
      hasTreatment:
        '目前以支持治疗为主，包括康复、预防跌倒、吞咽和营养管理、呼吸评估、内分泌问题处理和遗传咨询。',
      commonDelayReason:
        '肌无力、手抖、肌束颤动和乳房发育可能分散就诊；如果未做AR基因检测，常与ALS或其他肌病混淆。',
    },
    patientJourney: {
      whenToSuspect: [
        '成年男性逐渐出现四肢近端无力、易跌倒、爬楼困难。',
        '舌肌或面肌颤动、说话含糊、吞咽呛咳。',
        '肌束颤动、手抖，同时伴男性乳房发育、不育或睾丸萎缩。',
        '家族中男性有类似缓慢进展肌无力。',
      ],
      commonWrongTurns: [
        '被误诊为ALS后产生过度恐慌，未做AR基因检测确认。',
        '只看内分泌或乳腺问题，没有追踪神经肌肉症状。',
        '忽视吞咽呛咳、跌倒和呼吸睡眠问题。',
      ],
      firstDepartments: [
        '神经内科',
        '神经肌肉专病门诊',
        '康复医学科',
        '内分泌科',
        '医学遗传科',
      ],
      diagnosisChecklist: [
        '整理肌无力、跌倒、吞咽、说话和肌束颤动进展时间线。',
        '带上肌电图、CK、激素检查、家族史和既往诊断。',
        '记录呛咳、体重下降、睡眠呼吸和日常功能变化。',
      ],
      testsToAskAbout: [
        'AR基因CAG重复扩增检测。',
        '肌电图、神经传导、CK和内分泌评估。',
        '吞咽、营养、呼吸功能和康复评估。',
      ],
      questionsForDoctor: [
        '症状是否符合SBMA？如何与ALS和其他肌病区分？',
        'AR基因结果对家族成员意味着什么？',
        '吞咽、跌倒和呼吸风险怎样监测？',
        '运动训练强度和辅具如何选择？',
      ],
    },
    medicalSections: {
      symptoms:
        '<p>肯尼迪病进展通常较慢，容易被误认为运动神经元病、普通肌病或内分泌问题。与ALS不同，它常伴雄激素不敏感相关表现，如男性乳房发育、不育或睾丸萎缩。</p><p>需要警惕的线索包括：成年男性逐渐出现四肢近端无力、易跌倒、爬楼困难；舌肌或面肌颤动、说话含糊、吞咽呛咳；肌束颤动、手抖，同时伴男性乳房发育、不育或睾丸萎缩；家族中男性有类似缓慢进展肌无力。表现会因年龄、分型和受累系统不同而变化。</p>',
      diagnosis:
        '<p>诊断通常从详细病史、家族史和专科查体开始，再结合相关检查。常用检查包括：AR基因CAG重复扩增检测；肌电图、神经传导、CK和内分泌评估；吞咽、营养、呼吸功能和康复评估。</p><p>如果怀疑遗传因素，建议由遗传咨询或熟悉该病的专科团队解释检测结果，避免只凭单一异常自行判断。</p>',
      treatment:
        '<p>目前以支持治疗为主，包括康复、预防跌倒、吞咽和营养管理、呼吸评估、内分泌问题处理和遗传咨询。</p><p>治疗计划应同时覆盖日常功能、并发症筛查、心理支持和家庭照护。不要自行使用未经验证的药物、保健品或训练方案。</p>',
      longTermCare:
        '<p>长期管理建议保存一份病情摘要，包含诊断、关键检查、基因结果、用药、急症信号和主要随访医生。随着年龄、功能和家庭目标变化，康复、学校/工作适配和照护计划也需要定期更新。</p>',
      fertilityOrFamily:
        '<p>本病为X连锁遗传，与AR基因CAG重复扩增有关。男性多发病，女性携带者通常症状轻或无症状，但家族生育需遗传咨询。</p><p>计划生育、家属筛查或预测性检测前，建议先做遗传咨询，明确检测目的、局限和可能带来的心理及家庭影响。</p>',
      emergencySigns:
        '<p>出现呼吸困难、意识改变、持续抽搐、明显吞咽窒息、快速进展的无力或视力变化、严重感染或急性疼痛时，应及时急诊或联系主管专科。</p>',
    },
    sources: [
      {
        name: '国家卫生健康委员会《第一批罕见病目录》',
        type: 'official',
        url: 'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
      },
      {
        name: "NINDS: Kennedy's Disease",
        type: 'official',
        url: 'https://www.ninds.nih.gov/health-information/disorders/kennedys-disease',
      },
      {
        name: '基因江湖：《修订 | 中国罕见病患者组织名录(2023年)》',
        type: 'patient-organization',
        url: 'https://mp.weixin.qq.com/s/C-KAD5l2GUlNpwruGesRHQ',
      },
    ],
    symptoms:
      '<p>脊髓延髓肌萎缩症（肯尼迪病）是一种由AR基因CAG重复扩增导致的X连锁神经肌肉病，常见成年男性逐渐出现肢体无力、肌束颤动、吞咽或构音困难，并可伴内分泌表现；常见线索包括成年男性逐渐出现四肢近端无力、易跌倒、爬楼困难。、舌肌或面肌颤动、说话含糊、吞咽呛咳等。</p>',
    diagnosis:
      '<p>诊断需要结合病史、体格检查、专科评估和疾病相关基因/影像/功能检查，具体路径由专科医生按表现决定。</p>',
    treatment:
      '<p>目前以支持治疗为主，包括康复、预防跌倒、吞咽和营养管理、呼吸评估、内分泌问题处理和遗传咨询。</p>',
    prognosis:
      '<p>预后取决于分型、起病年龄、受累器官和治疗可及性。尽早确诊、规范随访和家庭支持可帮助减少可预防风险。</p>',
    sourceName: '国家卫生健康委员会《第一批罕见病目录》',
    sourceUrl:
      'https://www.nhc.gov.cn/wjw/c100175/201806/049e945e6c8044c5b4cb6b4aa19ad98e.shtml',
    categorySlug: 'neurological',
    charityIds: [76],
    hospitalIds: [],
    reviewStatus: 'patient-reviewed',
    tagSlugs: ['first-rare-disease-catalog', 'genetic-counseling'],
  };

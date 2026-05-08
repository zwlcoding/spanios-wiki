import type { LocalizedRecord } from '@/types/content';
import { entity } from './helpers';
import type { DiseaseDraft } from './types';

export const diseaseDraftsByLocale: LocalizedRecord<DiseaseDraft[]> = {
  zh: [
    {
      ...entity(4, 'disease-21-hydroxylase-deficiency'),
      name: '21-羟化酶缺乏症',
      nameEn: '21-Hydroxylase Deficiency',
      alias: '21-OHD、先天性肾上腺皮质增生症（CAH）',
      icd10Code: 'E25.0',
      slug: '21-hydroxylase-deficiency',
      oneSentence:
        '21-羟化酶缺乏症是先天性肾上腺皮质增生症中最常见的类型，常与 CYP21A2 基因变异有关，可影响皮质醇、醛固酮和雄激素平衡。',
      plainName: '先天性肾上腺激素合成异常',
      prevalence:
        '经典型总体约每 12,000-15,000 名活产婴儿 1 例；中国报告发病率约为 1/20,000-1/10,000，实际识别率受筛查和就医路径影响。',
      quickLook: {
        whatItIs:
          '这是一类常染色体隐性遗传的内分泌疾病。21-羟化酶功能不足会让肾上腺合成皮质醇和醛固酮受阻，同时雄激素偏高，表现可从新生儿期危象到青春期高雄激素问题不等。',
        whoToSeeFirst:
          '新生儿或儿童优先看儿科内分泌科；出现呕吐、脱水、低钠高钾或精神反应差时应立即去急诊。成人或生育相关问题可联合内分泌科、生殖医学科和遗传咨询。',
        isGenetic:
          '通常是常染色体隐性遗传。父母是否携带、再次生育风险和家族成员是否需要检查，应由遗传咨询或专科医生结合基因检测结果判断。',
        hasTreatment:
          '有规范治疗和随访方案，但需要长期由内分泌专科管理。药物种类、剂量和应激情况处理方案必须由医生个体化制定。',
        commonDelayReason:
          '女婴外生殖器异常、男婴早期失盐危象、儿童生长过快或青春期高雄激素表现，容易被分别当作泌尿外科、胃肠道、普通性早熟或多囊卵巢问题处理。',
      },
      patientJourney: {
        whenToSuspect: [
          '女婴出生时外生殖器外观不典型，如阴蒂增大或大阴唇融合。',
          '出生后数天至数周出现喂养差、反复呕吐、体重不增、脱水、低钠或高钾。',
          '儿童期身高增长过快、骨龄明显提前，或出现阴毛早发育、痤疮、体味加重等高雄激素线索。',
          '青春期或成年女性出现月经紊乱、多毛、痤疮，且常规多囊卵巢处理效果不理想。',
          '家族中有 21-羟化酶缺乏症、先天性肾上腺皮质增生症，或有婴儿期不明原因严重脱水/夭折史。',
        ],
        commonWrongTurns: [
          '把失盐型婴儿的呕吐、脱水当作普通胃肠炎，未及时检查电解质和肾上腺相关激素。',
          '只处理外生殖器外观问题，没有同步转诊儿科内分泌和遗传咨询。',
          '把儿童期生长过快或阴毛早发育当作单纯性早熟，忽略 17-OHP 和肾上腺来源雄激素检查。',
          '青春期后长期按多囊卵巢综合征或特发性多毛处理，没有追问儿童期线索和家族史。',
          '新生儿筛查阳性后未按要求复查，或复查前已经出现急性失盐风险。',
        ],
        firstDepartments: [
          '儿科内分泌科',
          '内分泌科',
          '急诊科（出现脱水、休克、电解质异常时）',
          '遗传咨询门诊',
          '生殖医学科（成年后有生育计划时）',
        ],
        diagnosisChecklist: [
          '整理出生记录、新生儿筛查结果、外生殖器评估、成长曲线和骨龄资料。',
          '带上既往电解质、血糖、17-OHP、ACTH、皮质醇、肾素/醛固酮和雄激素检查结果。',
          '记录呕吐、脱水、发热、应激事件、用药史和家族中类似病史。',
          '向医生确认是否需要 CYP21A2 基因检测、父母携带者检测或遗传咨询。',
        ],
        testsToAskAbout: [
          '血清 17-羟孕酮（17-OHP）和必要时 ACTH 兴奋试验。',
          '血钠、血钾、血糖、肾素/醛固酮等用于评估失盐风险的检查。',
          'ACTH、皮质醇、雄烯二酮、睾酮等肾上腺和性腺相关激素。',
          'CYP21A2 基因检测及家系验证。',
          '骨龄、身高增长速度、青春期发育评估，以及女性内生殖器超声等鉴别检查。',
        ],
        questionsForDoctor: [
          '目前更像失盐型、单纯男性化型，还是非经典型？依据是什么？',
          '哪些情况提示需要急诊处理？家里应如何识别早期危险信号？',
          '随访需要监测哪些指标，多久复查一次？',
          '发热、腹泻、外伤、手术等应激情况下，是否需要提前准备书面应急方案？',
          '孩子的生长、骨龄、青春期发育和成年身高需要怎样长期跟踪？',
          '未来生育和再次生育风险需要做哪些遗传咨询？',
        ],
      },
      medicalSections: {
        symptoms:
          '<p>21-羟化酶缺乏症的表现与分型有关。经典型包括失盐型和单纯男性化型；失盐型婴儿可出现喂养差、呕吐、体重不增、脱水、低钠血症和高钾血症，严重时可发生肾上腺危象。46,XX 女婴可因产前雄激素暴露出现不同程度外生殖器男性化。</p><p>单纯男性化型通常没有明显失盐表现，但儿童期可出现生长加速、骨龄提前、阴毛早发育、痤疮或性早熟样表现。非经典型往往较晚出现，可表现为多毛、痤疮、月经紊乱或生育困难，也可能症状较轻。</p>',
        diagnosis:
          '<p>诊断通常结合临床表现、新生儿筛查、血清 17-羟孕酮（17-OHP）、ACTH/皮质醇、电解质、肾素/醛固酮和肾上腺来源雄激素等检查。经典型患者 17-OHP 往往明显升高；非经典型可能需要清晨基础 17-OHP 或 ACTH 兴奋试验帮助判断。</p><p>CYP21A2 基因检测可用于明确遗传学诊断、分型参考和家族遗传咨询。医生还会根据年龄和表现鉴别其他性发育异常、性早熟、多囊卵巢综合征、肾上腺或垂体相关疾病。</p>',
        treatment:
          '<p>治疗目标是在专科医生指导下补充缺乏的激素、降低过量雄激素影响，并维持正常生长发育和代谢稳定。经典型患者通常需要长期糖皮质激素替代；失盐型还可能需要盐皮质激素相关治疗和电解质监测。具体药物、剂量和调整时机必须由医生根据年龄、体重、激素水平、生长速度和应激情况决定。</p><p>涉及外生殖器评估、青春期发育、生育计划或心理支持时，常需要儿科内分泌、泌尿/妇科、生殖医学、遗传咨询和心理支持等多学科共同参与。</p>',
        longTermCare:
          '<p>长期管理重点包括规律复诊、监测身高体重和骨龄、复查激素和电解质、评估青春期发育、骨健康、代谢风险和生活质量。家属和患者应保存诊断资料、用药清单和急诊就医说明，避免漏诊肾上腺危象风险。</p><p>发热、腹泻、外伤、手术等应激情况可能改变治疗需求，应提前向主治医生确认书面应急方案。不要自行停药、加药或按网络经验调整剂量。</p>',
        fertilityOrFamily:
          '<p>21-羟化酶缺乏症可能影响月经、排卵、精子生成和生育计划，影响程度与分型、治疗控制和个体情况有关。有生育计划时，建议提前由内分泌科、生殖医学科和遗传咨询共同评估。</p><p>由于本病多为常染色体隐性遗传，已确诊患者、携带者家庭或有相关家族史者，可通过遗传咨询了解复发风险、伴侣检测和产前/胚胎植入前遗传学检测等选择。</p>',
        emergencySigns:
          '<p>婴儿或已确诊患者如果出现反复呕吐、拒奶、明显脱水、精神反应差、嗜睡、低血压、休克表现，或检查提示低钠、高钾、低血糖，应立即急诊就医，并主动告知医生 21-羟化酶缺乏症或先天性肾上腺皮质增生症病史。</p><p>发热、严重腹泻、外伤、手术前后或无法口服药物时，也应尽快联系主治医生或急诊处理，避免自行等待或自行调整治疗。</p>',
      },
      sources: [
        {
          name: '国家罕见病诊疗指南（2019年版）：21-羟化酶缺乏症',
          type: 'clinical-guideline',
          url: 'https://www.nhc.gov.cn/yzygj/c100068/201902/073540e8f83b4a54a28684d23e2ae2f5/files/1732871139221_41526.pdf',
        },
        {
          name: 'GeneReviews: 21-Hydroxylase-Deficient Congenital Adrenal Hyperplasia',
          type: 'review',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK1171/',
        },
        {
          name: 'Endocrine Society: Congenital Adrenal Hyperplasia',
          type: 'official',
          url: 'https://www.endocrine.org/patient-engagement/endocrine-library/congenital-adrenal-hyperplasia',
        },
      ],
      symptoms:
        '<p>可表现为新生儿失盐危象、女婴外生殖器男性化、儿童生长加速或青春期/成年期高雄激素相关问题。</p>',
      diagnosis:
        '<p>评估通常包括 17-OHP、电解质、ACTH/皮质醇、肾素/醛固酮、雄激素水平和 CYP21A2 基因检测。</p>',
      treatment:
        '<p>治疗需要内分泌专科长期管理，重点是激素替代、应激情况处理、发育和生育相关随访。</p>',
      prognosis:
        '<p>早期识别、规范治疗和持续随访可降低肾上腺危象、生长发育异常和生育相关风险。</p>',
      sourceName: '国家罕见病诊疗指南（2019年版）',
      sourceUrl:
        'https://www.nhc.gov.cn/yzygj/c100068/201902/073540e8f83b4a54a28684d23e2ae2f5/files/1732871139221_41526.pdf',
      categorySlug: 'metabolic',
      charityIds: [],
      hospitalIds: [],
      reviewStatus: 'draft',
      featuredImage: {
        id: 302,
        name: '21-hydroxylase-deficiency-journey.png',
        url: '/images/diseases/21-hydroxylase-deficiency-journey.png',
      },
      tagSlugs: ['endocrine', 'genetic-counseling'],
    },
    {
      ...entity(1, 'disease-als'),
      name: '肌萎缩侧索硬化',
      nameEn: 'Amyotrophic Lateral Sclerosis',
      alias: '渐冻症、ALS',
      icd10Code: 'G12.2',
      slug: 'amyotrophic-lateral-sclerosis',
      prevalence: '约每 10 万人 3-8 例，随地区和年龄结构变化。',
      symptoms:
        '<p>常见表现包括进行性肌无力、肌肉萎缩、肌束震颤、吞咽或言语困难。多数患者意识和感觉功能相对保留。</p>',
      diagnosis:
        '<p>诊断通常结合神经系统查体、肌电图、神经传导检查、影像学排除和必要的遗传检测。</p>',
      treatment:
        '<p>治疗重点是延缓进展、呼吸与营养支持、康复训练、症状管理和多学科随访。</p>',
      prognosis:
        '<p>病程差异很大，早期识别呼吸和营养风险可以显著改善生活质量。</p>',
      categorySlug: 'neurological',
      charityIds: [],
      hospitalIds: [],
      tagSlugs: ['neuromuscular', 'genetic-counseling'],
    },
    {
      ...entity(2, 'disease-hemophilia-a'),
      name: '血友病 A',
      nameEn: 'Hemophilia A',
      alias: '第 VIII 因子缺乏症',
      icd10Code: 'D66',
      slug: 'hemophilia-a',
      prevalence: '男性新生儿约 1/5,000，重型病例需要长期规范管理。',
      symptoms:
        '<p>主要表现为外伤后出血时间延长、关节反复出血、肌肉血肿，严重时可出现颅内或消化道出血。</p>',
      diagnosis:
        '<p>常用凝血功能筛查、凝血因子活性测定和 F8 基因检测确认诊断与分型。</p>',
      treatment:
        '<p>治疗包括凝血因子替代、预防治疗、出血急救处理、关节保护和家庭注射教育。</p>',
      prognosis:
        '<p>规范预防治疗可以减少关节损伤和严重出血，儿童患者需要长期随访。</p>',
      categorySlug: 'hematological',
      charityIds: [],
      hospitalIds: [],
      tagSlugs: ['coagulation-care', 'genetic-counseling'],
    },
    {
      ...entity(3, 'disease-kallmann-syndrome'),
      name: '卡尔曼综合征',
      nameEn: 'Kallmann Syndrome',
      alias: '低促性腺激素性性腺功能减退伴嗅觉减退',
      icd10Code: 'E23.0',
      slug: 'kallmann-syndrome',
      oneSentence:
        '卡尔曼综合征常表现为青春期迟迟不来、第二性征发育不足，并伴有嗅觉减退或缺失，确诊通常需要内分泌评估和遗传相关检查。',
      plainName: '青春期发育延迟伴嗅觉减退',
      prevalence:
        '估计男性约 1/30,000，女性约 1/120,000；实际诊断率可能受地区和就医路径影响。',
      quickLook: {
        whatItIs:
          '这是一类低促性腺激素性性腺功能减退，身体缺少启动青春期发育所需的激素信号，部分患者同时有嗅觉减退或没有嗅觉。',
        whoToSeeFirst:
          '优先看内分泌科；儿童或青少年可先看儿科内分泌，涉及生育时再联合生殖医学科或男科/妇科。',
        isGenetic:
          '可能与遗传有关，但不同患者的基因原因不完全一样，家族成员是否需要评估应由医生结合病史判断。',
        hasTreatment:
          '通常可以通过激素替代诱导青春期发育；有生育需求时，部分患者可在专科医生指导下进行促性腺激素或脉冲 GnRH 治疗。',
        commonDelayReason:
          '很多人会把它当作“发育晚”“体质问题”或单纯不孕处理，忽略了嗅觉、激素轴和垂体/下丘脑评估。',
      },
      patientJourney: {
        whenToSuspect: [
          '男孩到 14 岁、女孩到 13 岁仍缺少明显青春期发育迹象。',
          '青春期发育明显落后，同时从小嗅觉很差或闻不到气味。',
          '成年后因性腺功能低下、不孕或性激素水平异常才被发现。',
          '男婴曾有小阴茎、隐睾，或青春期后睾丸体积仍明显偏小。',
        ],
        commonWrongTurns: [
          '只反复补营养、等待自然发育，没有做性激素和促性腺激素检查。',
          '只看生殖问题，没有回头评估青春期发育史和嗅觉问题。',
          '把低睾酮或月经问题当成单一问题处理，没有进一步查下丘脑-垂体-性腺轴。',
          '知道自己闻不到气味，但没有把嗅觉问题和青春期延迟联系起来。',
        ],
        firstDepartments: ['内分泌科', '儿科内分泌', '生殖医学科'],
        diagnosisChecklist: [
          '整理青春期发育时间线、身高体重变化、嗅觉情况和家族史。',
          '准备既往性激素、促性腺激素、垂体相关激素、骨龄或影像检查结果。',
          '向医生确认是否需要垂体/下丘脑 MRI、嗅觉评估和基因检测。',
        ],
        testsToAskAbout: [
          'LH、FSH、睾酮或雌二醇等性腺轴激素。',
          '垂体和下丘脑影像检查。',
          '嗅觉评估、骨龄评估和相关基因检测。',
          '是否需要筛查肾脏发育、听力、唇腭裂、牙齿发育或镜像运动等伴随问题。',
        ],
        questionsForDoctor: [
          '我的情况更像体质性发育延迟，还是低促性腺激素性性腺功能减退？',
          '我现在的治疗目标是诱导青春期、长期替代，还是未来生育？',
          '治疗期间需要多久复查一次激素、骨密度或生育相关指标？',
        ],
      },
      medicalSections: {
        symptoms:
          '<p>常见线索包括青春期启动延迟、第二性征发育不足、性腺功能减退、不孕或生育困难，以及嗅觉减退或缺失。男性可表现为胡须少、声音不变粗、睾丸体积小；女性可表现为乳房发育不足或原发闭经。部分患者还可能合并单侧肾发育异常、唇腭裂、听力问题、牙齿发育异常或双手镜像运动。不同患者表现差异很大，不能只靠单个症状判断。</p>',
        diagnosis:
          '<p>评估通常包括青春期发育史、家族史、体格检查、LH/FSH 与睾酮或雌二醇等激素检测、嗅觉评估、骨龄、垂体/下丘脑及嗅球相关影像，以及必要时的染色体核型或基因检测。医生还会排除体质性发育延迟、垂体病变、营养不良和慢性疾病等原因。</p>',
        treatment:
          '<p>治疗以性激素替代、诱导青春期发育和生育相关治疗为主，需要内分泌专科长期管理。有生育需求时，治疗安排和随访周期通常与单纯激素替代不同。</p>',
        longTermCare:
          '<p>长期管理通常关注第二性征维持、骨密度、代谢状态、心理压力和生育计划。嗅觉缺失者还要特别注意燃气、烟雾和变质食物等安全风险。不要自行停药或更改剂量。</p>',
        fertilityOrFamily:
          '<p>部分患者可通过促性腺激素等治疗获得生育机会。若怀疑遗传因素，建议在医生指导下进行遗传咨询，而不是只依据单个基因结果做家庭决策。</p>',
        emergencySigns:
          '<p>如果青春期明显延迟并伴随嗅觉减退、隐睾/小阴茎病史、原发闭经、不孕，或检查发现性激素和促性腺激素均偏低，建议尽快到内分泌专科评估。若已经开始治疗但出现明显情绪困扰、骨痛骨折风险、严重乏力或生育治疗中的异常反应，也应及时复诊。</p>',
      },
      sources: [
        {
          name: 'MedlinePlus Genetics: Kallmann syndrome',
          type: 'official',
          url: 'https://medlineplus.gov/genetics/condition/kallmann-syndrome/',
        },
        {
          name: 'NCBI Bookshelf: Kallmann Syndrome',
          type: 'review',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK538210/',
        },
      ],
      symptoms:
        '<p>典型表现包括青春期发育延迟、性腺功能减退、不孕或生育困难，以及嗅觉减退或缺失。</p>',
      diagnosis:
        '<p>评估通常包括性激素和促性腺激素检测、嗅觉评估、垂体/下丘脑影像、骨龄和相关基因检测。</p>',
      treatment:
        '<p>治疗以性激素替代、诱导青春期发育和生育相关治疗为主，需要内分泌专科长期管理。</p>',
      prognosis:
        '<p>多数患者经规范治疗可获得良好第二性征发育，部分患者可通过促性腺激素治疗实现生育。</p>',
      categorySlug: 'genetic-developmental',
      charityIds: [],
      hospitalIds: [],
      reviewStatus: 'draft',
      featuredImage: {
        id: 301,
        name: 'kallmann-syndrome-journey.png',
        url: '/images/diseases/kallmann-syndrome-journey.png',
      },
      tagSlugs: ['endocrine', 'genetic-counseling'],
    },
  ],
  en: [
    {
      ...entity(1, 'disease-als'),
      name: 'Amyotrophic Lateral Sclerosis',
      nameEn: 'Amyotrophic Lateral Sclerosis',
      alias: 'ALS, motor neuron disease',
      icd10Code: 'G12.2',
      slug: 'amyotrophic-lateral-sclerosis',
      prevalence:
        'About 3-8 per 100,000 people, varying by region and age structure.',
      symptoms:
        '<p>Common signs include progressive muscle weakness, muscle wasting, fasciculations, swallowing difficulty, and speech changes. Sensation and awareness are often relatively preserved.</p>',
      diagnosis:
        '<p>Diagnosis usually combines neurological examination, EMG, nerve conduction studies, imaging to rule out mimics, and genetic testing when indicated.</p>',
      treatment:
        '<p>Care focuses on slowing progression, respiratory and nutrition support, rehabilitation, symptom control, and multidisciplinary follow-up.</p>',
      prognosis:
        '<p>The disease course varies widely. Early attention to respiratory and nutrition risks can improve quality of life.</p>',
      categorySlug: 'neurological',
      charityIds: [],
      hospitalIds: [],
      tagSlugs: ['neuromuscular', 'genetic-counseling'],
    },
    {
      ...entity(2, 'disease-hemophilia-a'),
      name: 'Hemophilia A',
      nameEn: 'Hemophilia A',
      alias: 'Factor VIII deficiency',
      icd10Code: 'D66',
      slug: 'hemophilia-a',
      prevalence:
        'About 1 in 5,000 male births. Severe cases require long-term structured care.',
      symptoms:
        '<p>Key features include prolonged bleeding after injury, recurrent joint bleeds, muscle hematomas, and, in severe cases, intracranial or gastrointestinal bleeding.</p>',
      diagnosis:
        '<p>Evaluation includes coagulation screening, factor VIII activity testing, inhibitor assessment, and F8 genetic testing for confirmation and family planning.</p>',
      treatment:
        '<p>Care includes factor replacement, prophylaxis, emergency bleed management, joint protection, and home infusion education.</p>',
      prognosis:
        '<p>Regular prophylaxis can reduce joint damage and severe bleeding. Children need long-term monitoring.</p>',
      categorySlug: 'hematological',
      charityIds: [],
      hospitalIds: [],
      tagSlugs: ['coagulation-care', 'genetic-counseling'],
    },
    {
      ...entity(3, 'disease-kallmann-syndrome'),
      name: 'Kallmann Syndrome',
      nameEn: 'Kallmann Syndrome',
      alias: 'Hypogonadotropic hypogonadism with anosmia',
      icd10Code: 'E23.0',
      slug: 'kallmann-syndrome',
      oneSentence:
        'Kallmann syndrome often presents as delayed puberty or underdeveloped secondary sex characteristics with reduced or absent smell, and diagnosis usually requires endocrine evaluation.',
      plainName: 'Delayed puberty with reduced sense of smell',
      prevalence:
        'Estimated at about 1 in 30,000 males and 1 in 120,000 females; actual diagnosis rates may vary by care pathway.',
      quickLook: {
        whatItIs:
          'It is a form of hypogonadotropic hypogonadism where the body lacks the hormone signals needed to start puberty. Some people also have reduced or absent smell.',
        whoToSeeFirst:
          'Start with endocrinology. Children and teenagers may need pediatric endocrinology; fertility planning may involve reproductive medicine, andrology, or gynecology.',
        isGenetic:
          'It can be genetic, but the exact cause varies. Family testing should be discussed with a clinician or genetic counselor.',
        hasTreatment:
          'Hormone therapy can usually induce puberty. Some people with fertility goals may use gonadotropin or pulsatile GnRH treatment under specialist care.',
        commonDelayReason:
          'It may be dismissed as late development or investigated only as infertility, while smell, puberty history, and the pituitary-gonadal hormone axis are missed.',
      },
      patientJourney: {
        whenToSuspect: [
          'No clear signs of puberty by about age 14 in boys or 13 in girls.',
          'Markedly delayed puberty plus lifelong poor or absent sense of smell.',
          'Low sex hormones or infertility discovered in adulthood with a history of delayed puberty.',
          'A history of micropenis or undescended testes, or persistently small testes after the expected age of puberty.',
        ],
        commonWrongTurns: [
          'Waiting for natural development without checking sex hormones and gonadotropins.',
          'Treating fertility only, without reviewing puberty history and smell.',
          'Treating low testosterone or menstrual issues as isolated problems without evaluating the hypothalamic-pituitary-gonadal axis.',
          'Not connecting impaired smell with delayed puberty.',
        ],
        firstDepartments: [
          'Endocrinology',
          'Pediatric endocrinology',
          'Reproductive medicine',
        ],
        diagnosisChecklist: [
          'Write down puberty timeline, growth changes, smell history, and family history.',
          'Bring prior sex hormone, gonadotropin, pituitary hormone, bone age, or imaging results.',
          'Ask whether pituitary/hypothalamic MRI, smell testing, and genetic testing are appropriate.',
        ],
        testsToAskAbout: [
          'LH, FSH, testosterone or estradiol, and related pituitary hormones.',
          'Pituitary and hypothalamic imaging.',
          'Smell testing, bone age assessment, and targeted genetic testing.',
          'Whether to screen for associated findings such as kidney development, hearing, cleft lip or palate, dental development, or mirror movements.',
        ],
        questionsForDoctor: [
          'Does this look more like constitutional delay or hypogonadotropic hypogonadism?',
          'Is the current goal puberty induction, long-term replacement, or future fertility?',
          'How often should hormones, bone health, or fertility-related markers be monitored?',
        ],
      },
      medicalSections: {
        symptoms:
          '<p>Common clues include delayed puberty, underdeveloped secondary sex characteristics, hypogonadism, infertility or fertility difficulty, and reduced or absent smell. Males may have sparse facial hair, no voice deepening, small testes, micropenis, or undescended testes. Females may have absent breast development or primary amenorrhea. Some people may also have unilateral kidney agenesis, cleft lip or palate, hearing loss, dental differences, or bimanual synkinesis. Presentation varies, so a single symptom is not enough for diagnosis.</p>',
        diagnosis:
          '<p>Assessment may include puberty history, family history, physical examination, LH/FSH and testosterone or estradiol testing, smell testing, bone age, pituitary/hypothalamic and olfactory-bulb-related imaging, and chromosome or genetic testing when appropriate. Clinicians also rule out constitutional delay, pituitary lesions, nutrition issues, and chronic disease.</p>',
        treatment:
          '<p>Treatment centers on sex hormone replacement, puberty induction, and fertility therapy under long-term endocrinology care. Fertility treatment is usually different from simple hormone replacement.</p>',
        longTermCare:
          '<p>Long-term care often tracks secondary sex characteristics, bone density, metabolic health, psychological stress, and fertility planning. People with absent smell should also plan around safety risks such as gas leaks, smoke, and spoiled food. Medication changes should be guided by a clinician.</p>',
        fertilityOrFamily:
          '<p>Some people can achieve fertility with gonadotropin-based treatment. If a genetic cause is suspected, family decisions should be made with genetic counseling rather than a single result alone.</p>',
        emergencySigns:
          '<p>If delayed puberty is accompanied by reduced smell, a history of micropenis or undescended testes, primary amenorrhea, infertility, or low sex hormones with low gonadotropins, specialist endocrine assessment should not be delayed. People already in treatment should seek follow-up for significant psychological distress, bone pain or fracture risk, severe fatigue, or unusual reactions during fertility treatment.</p>',
      },
      sources: [
        {
          name: 'MedlinePlus Genetics: Kallmann syndrome',
          type: 'official',
          url: 'https://medlineplus.gov/genetics/condition/kallmann-syndrome/',
        },
        {
          name: 'NCBI Bookshelf: Kallmann Syndrome',
          type: 'review',
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK538210/',
        },
      ],
      symptoms:
        '<p>Typical signs include delayed puberty, hypogonadism, infertility or fertility difficulty, and reduced or absent sense of smell.</p>',
      diagnosis:
        '<p>Assessment may include sex hormone and gonadotropin testing, smell testing, pituitary/hypothalamic imaging, bone age, and targeted genetic testing.</p>',
      treatment:
        '<p>Treatment centers on sex hormone replacement, puberty induction, and fertility therapy under long-term endocrinology care.</p>',
      prognosis:
        '<p>Most patients can develop secondary sex characteristics with structured treatment, and some can achieve fertility with gonadotropin therapy.</p>',
      categorySlug: 'genetic-developmental',
      charityIds: [],
      hospitalIds: [],
      reviewStatus: 'draft',
      featuredImage: {
        id: 301,
        name: 'kallmann-syndrome-journey.png',
        url: '/images/diseases/kallmann-syndrome-journey.png',
      },
      tagSlugs: ['endocrine', 'genetic-counseling'],
    },
  ],
};

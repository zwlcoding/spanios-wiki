import type { LocalizedRecord } from '@/types/content';
import { entity } from './helpers';
import type { DiseaseDraft } from './types';

export const diseaseDraftsByLocale: LocalizedRecord<DiseaseDraft[]> = {
  zh: [
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
      charityIds: [1],
      hospitalIds: [1, 2],
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
      charityIds: [2],
      hospitalIds: [1, 3],
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
      prevalence: '男性约 1/30,000，女性更少见，实际诊断率可能偏低。',
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
        ],
        commonWrongTurns: [
          '只反复补营养、等待自然发育，没有做性激素和促性腺激素检查。',
          '只看生殖问题，没有回头评估青春期发育史和嗅觉问题。',
          '把低睾酮或月经问题当成单一问题处理，没有进一步查下丘脑-垂体-性腺轴。',
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
        ],
        questionsForDoctor: [
          '我的情况更像体质性发育延迟，还是低促性腺激素性性腺功能减退？',
          '我现在的治疗目标是诱导青春期、长期替代，还是未来生育？',
          '治疗期间需要多久复查一次激素、骨密度或生育相关指标？',
        ],
      },
      medicalSections: {
        symptoms:
          '<p>常见线索包括青春期启动延迟、第二性征发育不足、性腺功能减退、不孕或生育困难，以及嗅觉减退或缺失。不同患者表现差异很大，不能只靠单个症状判断。</p>',
        diagnosis:
          '<p>评估通常包括性激素和促性腺激素检测、嗅觉评估、垂体/下丘脑影像、骨龄和相关基因检测。医生还会排除体质性发育延迟、垂体病变、营养或慢性疾病等原因。</p>',
        treatment:
          '<p>治疗以性激素替代、诱导青春期发育和生育治疗为主，需要内分泌专科长期管理。有生育需求时，治疗方案和周期通常与单纯激素替代不同。</p>',
        longTermCare:
          '<p>长期管理通常关注第二性征维持、骨密度、代谢状态、心理压力和生育计划。不要自行停药或更改剂量。</p>',
        fertilityOrFamily:
          '<p>部分患者可通过促性腺激素等治疗获得生育机会。若怀疑遗传因素，建议在医生指导下进行遗传咨询，而不是只依据单个基因结果做家庭决策。</p>',
      },
      symptoms:
        '<p>典型表现包括青春期发育延迟、性腺功能减退、不孕或生育困难，以及嗅觉减退或缺失。</p>',
      diagnosis:
        '<p>评估通常包括性激素和促性腺激素检测、嗅觉评估、垂体/下丘脑影像、骨龄和相关基因检测。</p>',
      treatment:
        '<p>治疗以性激素替代、诱导青春期发育和生育治疗为主，需要内分泌专科长期管理。</p>',
      prognosis:
        '<p>多数患者经规范治疗可获得良好第二性征发育，部分患者可通过促性腺激素治疗实现生育。</p>',
      categorySlug: 'genetic-developmental',
      charityIds: [1],
      hospitalIds: [1, 2],
      reviewStatus: 'draft',
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
      charityIds: [1],
      hospitalIds: [1, 2],
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
      charityIds: [2],
      hospitalIds: [1, 3],
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
        'Roughly 1 in 30,000 males; it is less common in females and may be underdiagnosed.',
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
        ],
        commonWrongTurns: [
          'Waiting for natural development without checking sex hormones and gonadotropins.',
          'Treating fertility only, without reviewing puberty history and smell.',
          'Treating low testosterone or menstrual issues as isolated problems without evaluating the hypothalamic-pituitary-gonadal axis.',
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
        ],
        questionsForDoctor: [
          'Does this look more like constitutional delay or hypogonadotropic hypogonadism?',
          'Is the current goal puberty induction, long-term replacement, or future fertility?',
          'How often should hormones, bone health, or fertility-related markers be monitored?',
        ],
      },
      medicalSections: {
        symptoms:
          '<p>Common clues include delayed puberty, underdeveloped secondary sex characteristics, hypogonadism, infertility or fertility difficulty, and reduced or absent smell. Presentation varies, so a single symptom is not enough for diagnosis.</p>',
        diagnosis:
          '<p>Assessment may include sex hormone and gonadotropin testing, smell testing, pituitary/hypothalamic imaging, bone age, and targeted genetic testing. Clinicians also rule out constitutional delay, pituitary lesions, nutrition issues, and chronic disease.</p>',
        treatment:
          '<p>Treatment centers on sex hormone replacement, puberty induction, and fertility therapy under long-term endocrinology care. Fertility treatment is usually different from simple hormone replacement.</p>',
        longTermCare:
          '<p>Long-term care often tracks secondary sex characteristics, bone density, metabolic health, psychological stress, and fertility planning. Medication changes should be guided by a clinician.</p>',
        fertilityOrFamily:
          '<p>Some people can achieve fertility with gonadotropin-based treatment. If a genetic cause is suspected, family decisions should be made with genetic counseling rather than a single result alone.</p>',
      },
      symptoms:
        '<p>Typical signs include delayed puberty, hypogonadism, infertility or fertility difficulty, and reduced or absent sense of smell.</p>',
      diagnosis:
        '<p>Assessment may include sex hormone and gonadotropin testing, smell testing, pituitary/hypothalamic imaging, bone age, and targeted genetic testing.</p>',
      treatment:
        '<p>Treatment centers on sex hormone replacement, puberty induction, and fertility therapy under long-term endocrinology care.</p>',
      prognosis:
        '<p>Most patients can develop secondary sex characteristics with structured treatment, and some can achieve fertility with gonadotropin therapy.</p>',
      categorySlug: 'genetic-developmental',
      charityIds: [1],
      hospitalIds: [1, 2],
      reviewStatus: 'draft',
      tagSlugs: ['endocrine', 'genetic-counseling'],
    },
  ],
};

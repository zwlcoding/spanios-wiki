import type { DiseaseCategory, Locale } from '@/types/content';
import { category } from './helpers';

export type DiseaseCategorySlug =
  | 'cardiovascular'
  | 'dermatologic'
  | 'digestive-hepatic'
  | 'genetic-developmental'
  | 'hematological'
  | 'immunological-rheumatologic'
  | 'metabolic'
  | 'multisystem'
  | 'neurological'
  | 'oncology'
  | 'ophthalmologic'
  | 'renal-urologic'
  | 'respiratory'
  | 'skeletal-connective-tissue';

type CategoryTranslation = {
  description: string;
  name: string;
};

type CategoryDefinition = {
  icon: string;
  id: number;
  slug: DiseaseCategorySlug;
  translations: Partial<Record<Locale, CategoryTranslation>> & {
    zh: CategoryTranslation;
  };
};

export const diseaseCategoryDefinitions: CategoryDefinition[] = [
  {
    id: 1,
    slug: 'neurological',
    icon: 'brain',
    translations: {
      zh: {
        name: '神经系统疾病',
        description: '影响脑、脊髓、周围神经、肌肉控制或癫痫相关表现的罕见病。',
      },
      en: {
        name: 'Neurological Disorders',
        description:
          'Rare diseases affecting the brain, spinal cord, peripheral nerves, motor control, or epilepsy-related presentations.',
      },
    },
  },
  {
    id: 2,
    slug: 'metabolic',
    icon: 'flask',
    translations: {
      zh: {
        name: '代谢与内分泌疾病',
        description: '与酶缺陷、营养代谢、激素轴或内分泌异常相关的罕见病。',
      },
      en: {
        name: 'Metabolic and Endocrine Disorders',
        description:
          'Rare diseases related to enzyme defects, nutrient metabolism, hormone axes, or endocrine abnormalities.',
      },
    },
  },
  {
    id: 3,
    slug: 'hematological',
    icon: 'droplet',
    translations: {
      zh: {
        name: '血液系统疾病',
        description: '影响凝血、血细胞、骨髓或造血系统的罕见病。',
      },
      en: {
        name: 'Hematologic Disorders',
        description:
          'Rare diseases affecting clotting, blood cells, bone marrow, or the hematopoietic system.',
      },
    },
  },
  {
    id: 4,
    slug: 'genetic-developmental',
    icon: 'dna',
    translations: {
      zh: {
        name: '遗传与发育疾病',
        description:
          '以遗传综合征、发育异常、身高生长或多系统发育表现为主的罕见病。',
      },
      en: {
        name: 'Genetic and Developmental Disorders',
        description:
          'Rare genetic syndromes and developmental conditions involving growth, development, or multiple systems.',
      },
    },
  },
  {
    id: 5,
    slug: 'immunological-rheumatologic',
    icon: 'shield',
    translations: {
      zh: {
        name: '免疫与风湿疾病',
        description: '自身免疫、自炎症、免疫缺陷、血管炎和风湿免疫相关罕见病。',
      },
      en: {
        name: 'Immunologic and Rheumatologic Disorders',
        description:
          'Rare autoimmune, autoinflammatory, immune deficiency, vasculitis, and rheumatologic conditions.',
      },
    },
  },
  {
    id: 6,
    slug: 'cardiovascular',
    icon: 'heart-pulse',
    translations: {
      zh: {
        name: '心血管疾病',
        description: '影响心肌、心律、血管、心包或肺循环血流动力学的罕见病。',
      },
      en: {
        name: 'Cardiovascular Disorders',
        description:
          'Rare diseases affecting myocardium, rhythm, vessels, pericardium, or pulmonary circulation hemodynamics.',
      },
    },
  },
  {
    id: 7,
    slug: 'respiratory',
    icon: 'lungs',
    translations: {
      zh: {
        name: '呼吸系统疾病',
        description: '影响肺、气道、胸膜或间质结构的罕见病。',
      },
      en: {
        name: 'Respiratory Disorders',
        description:
          'Rare diseases affecting the lungs, airways, pleura, or interstitial structures.',
      },
    },
  },
  {
    id: 8,
    slug: 'renal-urologic',
    icon: 'kidney',
    translations: {
      zh: {
        name: '肾脏与泌尿疾病',
        description: '影响肾小球、肾小管、电解质平衡或泌尿系统的罕见病。',
      },
      en: {
        name: 'Renal and Urologic Disorders',
        description:
          'Rare diseases affecting glomeruli, renal tubules, electrolyte balance, or the urinary system.',
      },
    },
  },
  {
    id: 9,
    slug: 'digestive-hepatic',
    icon: 'stethoscope',
    translations: {
      zh: {
        name: '消化与肝胆疾病',
        description: '影响胃肠道、肝胆胰、胆汁代谢或营养吸收的罕见病。',
      },
      en: {
        name: 'Digestive and Hepatic Disorders',
        description:
          'Rare diseases affecting the gastrointestinal tract, hepatobiliary system, pancreas, bile metabolism, or absorption.',
      },
    },
  },
  {
    id: 10,
    slug: 'dermatologic',
    icon: 'sparkles',
    translations: {
      zh: {
        name: '皮肤疾病',
        description: '主要累及皮肤、毛囊、汗腺、色素或皮肤屏障的罕见病。',
      },
      en: {
        name: 'Dermatologic Disorders',
        description:
          'Rare diseases primarily involving skin, follicles, sweat glands, pigmentation, or the skin barrier.',
      },
    },
  },
  {
    id: 11,
    slug: 'ophthalmologic',
    icon: 'eye',
    translations: {
      zh: {
        name: '眼科疾病',
        description: '主要影响视网膜、视神经、角膜或视觉发育的罕见病。',
      },
      en: {
        name: 'Ophthalmologic Disorders',
        description:
          'Rare diseases primarily affecting the retina, optic nerve, cornea, or visual development.',
      },
    },
  },
  {
    id: 12,
    slug: 'skeletal-connective-tissue',
    icon: 'bone',
    translations: {
      zh: {
        name: '骨骼与结缔组织疾病',
        description: '主要累及骨、软骨、关节、脊柱或结缔组织结构的罕见病。',
      },
      en: {
        name: 'Skeletal and Connective Tissue Disorders',
        description:
          'Rare diseases primarily involving bone, cartilage, joints, spine, or connective tissue structures.',
      },
    },
  },
  {
    id: 13,
    slug: 'oncology',
    icon: 'activity',
    translations: {
      zh: {
        name: '罕见肿瘤',
        description: '罕见实体瘤、血液肿瘤、组织细胞病和肿瘤易感综合征。',
      },
      en: {
        name: 'Rare Tumors',
        description:
          'Rare solid tumors, hematologic malignancies, histiocytic disorders, and cancer predisposition syndromes.',
      },
    },
  },
  {
    id: 14,
    slug: 'multisystem',
    icon: 'network',
    translations: {
      zh: {
        name: '多系统疾病',
        description: '难以归入单一系统、或诊疗通常需要多学科共同管理的罕见病。',
      },
      en: {
        name: 'Multisystem Disorders',
        description:
          'Rare diseases that do not fit a single system or usually require multidisciplinary management.',
      },
    },
  },
];

export function getDiseaseCategories(locale: Locale): DiseaseCategory[] {
  return diseaseCategoryDefinitions.map((definition) => {
    const translation =
      definition.translations[locale] ?? definition.translations.zh;

    return category(
      definition.id,
      translation.name,
      definition.slug,
      translation.description,
      definition.icon,
    );
  });
}

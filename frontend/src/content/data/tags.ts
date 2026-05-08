import type { LocalizedRecord, Tag } from '@/types/content';
import { tag } from './helpers';

export const tagsByLocale: LocalizedRecord<Tag[]> = {
  zh: [
    tag(1, '神经肌肉', 'neuromuscular', 'organ_system'),
    tag(2, '遗传咨询', 'genetic-counseling', 'treatment'),
    tag(3, '凝血管理', 'coagulation-care', 'treatment'),
    tag(4, '内分泌', 'endocrine', 'organ_system'),
    tag(5, '第一批罕见病目录', 'first-rare-disease-catalog', 'other'),
    tag(6, '第二批罕见病目录', 'second-rare-disease-catalog', 'other'),
  ],
  en: [
    tag(1, 'Neuromuscular', 'neuromuscular', 'organ_system'),
    tag(2, 'Genetic Counseling', 'genetic-counseling', 'treatment'),
    tag(3, 'Coagulation Care', 'coagulation-care', 'treatment'),
    tag(4, 'Endocrinology', 'endocrine', 'organ_system'),
    tag(5, 'First Rare Disease Catalog', 'first-rare-disease-catalog', 'other'),
    tag(
      6,
      'Second Rare Disease Catalog',
      'second-rare-disease-catalog',
      'other',
    ),
  ],
};

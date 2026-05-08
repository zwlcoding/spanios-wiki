import type { LocalizedRecord } from '@/types/content';
import { entity } from './helpers';
import type { CharityDraft } from './types';

export const charityDraftsByLocale: LocalizedRecord<CharityDraft[]> = {
  zh: [
    {
      ...entity(1, 'charity-rare-disease-alliance'),
      name: '罕见病患者支持联盟',
      type: 'patient_org',
      description:
        '<p>面向罕见病患者和家庭的互助组织，提供疾病信息、就医导航和同伴支持。</p>',
      services: '患者社群、就医资料整理、专家讲座、家庭支持和政策信息更新。',
      contactPerson: '患者服务团队',
      email: 'support@spanios.wiki',
      website: 'https://spanios.wiki',
      wechat: 'SpaniosWiki',
      diseaseSlugs: ['amyotrophic-lateral-sclerosis', 'kallmann-syndrome'],
    },
    {
      ...entity(2, 'charity-hemophilia-care-foundation'),
      name: '血友病关爱基金',
      type: 'foundation',
      description:
        '<p>关注凝血障碍患者的公益基金，协助患者教育、治疗可及性和家庭管理能力提升。</p>',
      services: '凝血知识科普、家庭注射教育、儿童关节保护、公益援助信息对接。',
      contactPerson: '项目办公室',
      email: 'care@spanios.wiki',
      website: 'https://spanios.wiki/charity',
      diseaseSlugs: ['hemophilia-a'],
    },
  ],
  en: [
    {
      ...entity(1, 'charity-rare-disease-alliance'),
      name: 'Rare Disease Patient Support Alliance',
      type: 'patient_org',
      description:
        '<p>A peer-support organization for rare disease patients and families, focused on disease information, care navigation, and community support.</p>',
      services:
        'Patient community, care navigation materials, expert talks, family support, and policy updates.',
      contactPerson: 'Patient support team',
      email: 'support@spanios.wiki',
      website: 'https://spanios.wiki',
      wechat: 'SpaniosWiki',
      diseaseSlugs: ['amyotrophic-lateral-sclerosis', 'kallmann-syndrome'],
    },
    {
      ...entity(2, 'charity-hemophilia-care-foundation'),
      name: 'Hemophilia Care Foundation',
      type: 'foundation',
      description:
        '<p>A charitable program supporting people with bleeding disorders through education, treatment access, and family management resources.</p>',
      services:
        'Coagulation education, home infusion training, pediatric joint protection, and charity assistance information.',
      contactPerson: 'Program office',
      email: 'care@spanios.wiki',
      website: 'https://spanios.wiki/charity',
      diseaseSlugs: ['hemophilia-a'],
    },
  ],
};

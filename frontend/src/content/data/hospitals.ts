import type { LocalizedRecord } from '@/types/content';
import { department, entity } from './helpers';
import type { HospitalDraft } from './types';

export const hospitalDraftsByLocale: LocalizedRecord<HospitalDraft[]> = {
  zh: [
    {
      ...entity(1, 'hospital-pumch'),
      name: '北京协和医院',
      level: 'tertiary_a',
      province: '北京',
      city: '北京',
      address: '北京市东城区帅府园 1 号',
      phone: '010-69156114',
      website: 'https://www.pumch.cn',
      specialties: '内分泌、神经内科、血液科、遗传咨询与疑难罕见病多学科会诊。',
      location: { lat: 39.9139, lng: 116.4127 },
      departments: [
        department(
          101,
          '内分泌科',
          '负责性腺发育、垂体疾病和内分泌相关罕见病评估。',
          '内分泌遗传与生殖内分泌团队',
        ),
        department(
          102,
          '神经内科',
          '提供神经肌肉病诊断、肌电图评估和多学科随访。',
          '神经肌肉病团队',
        ),
      ],
      diseaseSlugs: [
        'amyotrophic-lateral-sclerosis',
        'hemophilia-a',
        'kallmann-syndrome',
      ],
    },
    {
      ...entity(2, 'hospital-shanghai-ruijin'),
      name: '上海交通大学医学院附属瑞金医院',
      level: 'tertiary_a',
      province: '上海',
      city: '上海',
      address: '上海市黄浦区瑞金二路 197 号',
      phone: '021-64370045',
      website: 'https://www.rjh.com.cn',
      specialties: '内分泌代谢病、神经肌肉病和疑难罕见病综合评估。',
      location: { lat: 31.2133, lng: 121.4665 },
      departments: [
        department(
          201,
          '内分泌代谢科',
          '开展内分泌代谢性罕见病筛查、诊断和长期管理。',
          '内分泌代谢病团队',
        ),
      ],
      diseaseSlugs: ['amyotrophic-lateral-sclerosis', 'kallmann-syndrome'],
    },
    {
      ...entity(3, 'hospital-southern'),
      name: '南方医科大学南方医院',
      level: 'tertiary_a',
      province: '广东',
      city: '广州',
      address: '广州市广州大道北 1838 号',
      phone: '020-61641888',
      website: 'https://www.nfyy.com',
      specialties: '血液病、凝血障碍、遗传咨询和儿童成人连续照护。',
      location: { lat: 23.1906, lng: 113.3292 },
      departments: [
        department(
          301,
          '血液科',
          '公开资料显示该科室涉及凝血因子检测、出血处理和长期随访管理。',
          '凝血与血栓团队',
        ),
      ],
      diseaseSlugs: ['hemophilia-a'],
    },
  ],
  en: [
    {
      ...entity(1, 'hospital-pumch'),
      name: 'Peking Union Medical College Hospital',
      level: 'tertiary_a',
      province: 'Beijing',
      city: 'Beijing',
      address: '1 Shuaifuyuan, Dongcheng District, Beijing',
      phone: '010-69156114',
      website: 'https://www.pumch.cn',
      specialties:
        'Endocrinology, neurology, hematology, genetic counseling, and multidisciplinary rare disease clinics.',
      location: { lat: 39.9139, lng: 116.4127 },
      departments: [
        department(
          101,
          'Endocrinology',
          'Assessment for gonadal development, pituitary disorders, and endocrine-related rare diseases.',
          'Endocrine genetics and reproductive endocrinology team',
        ),
        department(
          102,
          'Neurology',
          'Neuromuscular diagnosis, EMG evaluation, and multidisciplinary follow-up.',
          'Neuromuscular disease team',
        ),
      ],
      diseaseSlugs: [
        'amyotrophic-lateral-sclerosis',
        'hemophilia-a',
        'kallmann-syndrome',
      ],
    },
    {
      ...entity(2, 'hospital-shanghai-ruijin'),
      name: 'Ruijin Hospital, Shanghai Jiao Tong University School of Medicine',
      level: 'tertiary_a',
      province: 'Shanghai',
      city: 'Shanghai',
      address: '197 Ruijin 2nd Road, Huangpu District, Shanghai',
      phone: '021-64370045',
      website: 'https://www.rjh.com.cn',
      specialties:
        'Endocrine and metabolic disorders, neuromuscular disorders, and comprehensive rare disease evaluation.',
      location: { lat: 31.2133, lng: 121.4665 },
      departments: [
        department(
          201,
          'Endocrinology and Metabolism',
          'Screening, diagnosis, and long-term management for endocrine and metabolic rare diseases.',
          'Endocrine and metabolic disease team',
        ),
      ],
      diseaseSlugs: ['amyotrophic-lateral-sclerosis', 'kallmann-syndrome'],
    },
    {
      ...entity(3, 'hospital-southern'),
      name: 'Nanfang Hospital, Southern Medical University',
      level: 'tertiary_a',
      province: 'Guangdong',
      city: 'Guangzhou',
      address: '1838 Guangzhou Avenue North, Guangzhou',
      phone: '020-61641888',
      website: 'https://www.nfyy.com',
      specialties:
        'Hematology, coagulation disorders, genetic counseling, and continuity of care from childhood to adulthood.',
      location: { lat: 23.1906, lng: 113.3292 },
      departments: [
        department(
          301,
          'Hematology',
          'Factor testing, emergency bleed care, and prophylaxis planning.',
          'Coagulation and thrombosis team',
        ),
      ],
      diseaseSlugs: ['hemophilia-a'],
    },
  ],
};

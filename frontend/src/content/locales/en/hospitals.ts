import { department, entity } from '@/content/data/helpers';
import type { HospitalDraft, HospitalServiceDraft } from '@/content/data/types';

export const enHospitalDrafts: HospitalDraft[] = [
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
      'Public information can be used to verify endocrinology, neurology, hematology, genetic counseling, and difficult-disease related services; disease-specific routing should be confirmed through official appointment channels.',
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
      'Public information can be used to verify endocrine and metabolic services; disease-specific routing should be confirmed through official appointment channels.',
    location: { lat: 31.2133, lng: 121.4665 },
    departments: [
      department(
        201,
        'Endocrinology and Metabolism',
        'Screening, diagnosis, and long-term management for endocrine and metabolic rare diseases.',
        'Endocrine and metabolic disease team',
      ),
    ],
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
      'Public information can be used to verify hematology and coagulation-related services; disease-specific routing should be confirmed through official appointment channels.',
    location: { lat: 23.1906, lng: 113.3292 },
    departments: [
      department(
        301,
        'Hematology',
        'Factor testing, emergency bleed care, and prophylaxis planning.',
        'Coagulation and thrombosis team',
      ),
    ],
  },
];

export const enHospitalServiceDrafts: HospitalServiceDraft[] = [
  {
    id: 'pumch-endocrinology-kallmann-21ohd',
    hospitalId: 1,
    departmentId: 101,
    departmentName: 'Endocrinology',
    serviceName: 'Endocrine rare disease assessment',
    diseaseSlugs: ['kallmann-syndrome', '21-hydroxylase-deficiency'],
    stage: 'diagnosis',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.pumch.cn',
    evidenceUrl: 'https://www.pumch.cn',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher: 'Peking Union Medical College Hospital',
        title: 'PUMCH official website',
        url: 'https://www.pumch.cn',
        accessedAt: '2026-05-10',
        summary:
          'Used to verify the official hospital entry point and public department information.',
      },
    ],
    evidenceSummary:
      'Public hospital information shows endocrinology services; disease-specific routing should be confirmed through official appointment channels.',
    notes:
      'A neutral information reference for endocrine-related rare disease visits.',
    patientPrep: [
      'Bring prior hormone tests, imaging, genetic testing, and growth or development records.',
      'Before booking, confirm the clinic name, scope, and referral requirements through official channels.',
    ],
  },
  {
    id: 'pumch-neurology-als',
    hospitalId: 1,
    departmentId: 102,
    departmentName: 'Neurology',
    serviceName: 'Neuromuscular disease assessment',
    diseaseSlugs: ['amyotrophic-lateral-sclerosis'],
    stage: 'diagnosis',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.pumch.cn',
    evidenceUrl: 'https://www.pumch.cn',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher: 'Peking Union Medical College Hospital',
        title: 'PUMCH official website',
        url: 'https://www.pumch.cn',
        accessedAt: '2026-05-10',
        summary:
          'Used to verify the official hospital entry point and public department information.',
      },
    ],
    evidenceSummary:
      'Public hospital information shows neurology services; ALS-specific service availability should be confirmed through official appointment channels.',
    notes:
      'Check for neuromuscular disease, motor neuron disease, or EMG-related clinics before visiting.',
    patientPrep: [
      'Bring EMG, imaging, pulmonary function results, medication history, and a disease timeline.',
      'Confirm whether a neuromuscular or motor neuron disease clinic is the appropriate entry point.',
    ],
  },
  {
    id: 'ruijin-endocrine-metabolic-kallmann-21ohd',
    hospitalId: 2,
    departmentId: 201,
    departmentName: 'Endocrinology and Metabolism',
    serviceName: 'Endocrine and metabolic disease assessment',
    diseaseSlugs: ['kallmann-syndrome', '21-hydroxylase-deficiency'],
    stage: 'follow-up',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.rjh.com.cn',
    evidenceUrl: 'https://www.rjh.com.cn',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher:
          'Ruijin Hospital, Shanghai Jiao Tong University School of Medicine',
        title: 'Ruijin Hospital official website',
        url: 'https://www.rjh.com.cn',
        accessedAt: '2026-05-10',
        summary:
          'Used to verify the official hospital entry point and public department information.',
      },
    ],
    evidenceSummary:
      'Public hospital information shows endocrinology and metabolism services; disease-specific routing should be confirmed through official appointment channels.',
    notes:
      'A neutral information reference for endocrine and metabolic rare disease follow-up.',
    patientPrep: [
      'Organize follow-up indicators, hormone testing, prior treatment plans, and review timelines.',
      'Confirm the scope of endocrine and metabolic clinics before booking.',
    ],
  },
  {
    id: 'southern-hematology-hemophilia',
    hospitalId: 3,
    departmentId: 301,
    departmentName: 'Hematology',
    serviceName: 'Coagulation and bleeding disorder assessment',
    diseaseSlugs: ['hemophilia-a'],
    stage: 'treatment',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.nfyy.com',
    evidenceUrl: 'https://www.nfyy.com',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher: 'Nanfang Hospital, Southern Medical University',
        title: 'Nanfang Hospital official website',
        url: 'https://www.nfyy.com',
        accessedAt: '2026-05-10',
        summary:
          'Used to verify the official hospital entry point and public department information.',
      },
    ],
    evidenceSummary:
      'Public hospital information shows hematology services; hemophilia-specific service availability should be confirmed through official appointment channels.',
    notes:
      'Check for coagulation testing, bleeding care, and long-term follow-up services before visiting.',
    patientPrep: [
      'Bring factor level results, inhibitor testing, bleeding history, and prior treatment records.',
      'For acute bleeding or trauma, prioritize emergency care pathways.',
    ],
  },
];

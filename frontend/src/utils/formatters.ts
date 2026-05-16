import { uiText } from '@/utils/localeText';

export function formatHospitalServiceStage(stage?: string) {
  const labels: Record<string, string> = {
    diagnosis: uiText('诊断评估', 'Diagnosis Evaluation'),
    'follow-up': uiText('长期随访', 'Long-term Follow-up'),
    'genetic-counseling': uiText('遗传咨询', 'Genetic Counseling'),
    treatment: uiText('治疗管理', 'Treatment Management'),
  };

  return stage
    ? (labels[stage] ?? stage)
    : uiText('就医信息参考', 'Care Information Reference');
}

export function formatRelationKind(
  kind?: string,
  variant: 'disease' | 'hospital' = 'disease',
) {
  if (variant === 'hospital') {
    const labels: Record<string, string> = {
      'clinic-or-mdt': uiText('门诊/MDT 线索', 'Clinic/MDT Lead'),
      'department-service': uiText('科室服务线索', 'Department Service Lead'),
      'public-directory': uiText('公开目录线索', 'Public Directory Lead'),
      'rare-disease-network': uiText(
        '罕见病网络线索',
        'Rare Disease Network Lead',
      ),
    };

    return kind
      ? (labels[kind] ?? kind)
      : uiText('公开服务线索', 'Public Service Lead');
  }

  const labels: Record<string, string> = {
    'clinic-or-mdt': uiText('门诊/MDT', 'Clinic/MDT'),
    'department-service': uiText('科室服务', 'Department Service'),
    'public-directory': uiText('公开目录', 'Public Directory'),
    'rare-disease-network': uiText('罕见病网络', 'Rare Disease Network'),
  };

  return kind ? (labels[kind] ?? kind) : uiText('公开线索', 'Public Lead');
}

export function formatHospitalLevel(level: string) {
  const labels: Record<string, string> = {
    secondary_a: uiText('二甲医院', 'Secondary A Hospital'),
    secondary_b: uiText('二乙医院', 'Secondary B Hospital'),
    tertiary_a: uiText('三甲医院', 'Tertiary A Hospital'),
    tertiary_b: uiText('三乙医院', 'Tertiary B Hospital'),
  };

  return labels[level] ?? level;
}

export function formatConfidence(confidence?: string) {
  const labels: Record<string, string> = {
    high: uiText('高', 'High'),
    low: uiText('低', 'Low'),
    medium: uiText('中', 'Medium'),
  };

  return confidence
    ? (labels[confidence] ?? confidence)
    : uiText('待核对', 'To Verify');
}

export function formatEvidenceKind(kind?: string) {
  const labels: Record<string, string> = {
    'clinic-page': uiText('门诊页面', 'Clinic Page'),
    'department-page': uiText('科室页面', 'Department Page'),
    'hospital-directory': uiText('医院官网', 'Hospital Website'),
    'medical-team-page': uiText('团队页面', 'Medical Team Page'),
    'policy-or-network': uiText('政策/网络', 'Policy/Network'),
    'public-notice': uiText('公开通知', 'Public Notice'),
  };

  return kind ? (labels[kind] ?? kind) : uiText('公开来源', 'Public Source');
}

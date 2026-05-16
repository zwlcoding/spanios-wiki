import { describe, expect, it, vi } from 'vitest';

vi.mock('@/paraglide/runtime', () => ({
  getLocale: vi.fn(),
}));

import { getLocale } from '@/paraglide/runtime';
import {
  formatConfidence,
  formatEvidenceKind,
  formatHospitalLevel,
  formatHospitalServiceStage,
  formatRelationKind,
} from '../formatters';

const mockLocale = (locale: 'zh' | 'en') => {
  vi.mocked(getLocale).mockReturnValue(locale);
};

describe('formatHospitalServiceStage', () => {
  it('returns Chinese label for known stage', () => {
    mockLocale('zh');
    expect(formatHospitalServiceStage('diagnosis')).toBe('诊断评估');
    expect(formatHospitalServiceStage('treatment')).toBe('治疗管理');
  });

  it('returns English label for known stage', () => {
    mockLocale('en');
    expect(formatHospitalServiceStage('diagnosis')).toBe(
      'Diagnosis Evaluation',
    );
    expect(formatHospitalServiceStage('treatment')).toBe(
      'Treatment Management',
    );
  });

  it('returns fallback when stage is undefined', () => {
    mockLocale('zh');
    expect(formatHospitalServiceStage(undefined)).toBe('就医信息参考');
    mockLocale('en');
    expect(formatHospitalServiceStage(undefined)).toBe(
      'Care Information Reference',
    );
  });

  it('returns raw stage for unknown value', () => {
    mockLocale('zh');
    expect(formatHospitalServiceStage('unknown')).toBe('unknown');
  });
});

describe('formatRelationKind', () => {
  it('returns disease-variant Chinese labels', () => {
    mockLocale('zh');
    expect(formatRelationKind('clinic-or-mdt')).toBe('门诊/MDT');
    expect(formatRelationKind('public-directory')).toBe('公开目录');
  });

  it('returns disease-variant English labels', () => {
    mockLocale('en');
    expect(formatRelationKind('clinic-or-mdt')).toBe('Clinic/MDT');
    expect(formatRelationKind('public-directory')).toBe('Public Directory');
  });

  it('returns hospital-variant labels', () => {
    mockLocale('zh');
    expect(formatRelationKind('clinic-or-mdt', 'hospital')).toBe(
      '门诊/MDT 线索',
    );
    mockLocale('en');
    expect(formatRelationKind('clinic-or-mdt', 'hospital')).toBe(
      'Clinic/MDT Lead',
    );
  });

  it('returns fallback for undefined kind', () => {
    mockLocale('zh');
    expect(formatRelationKind(undefined)).toBe('公开线索');
    mockLocale('en');
    expect(formatRelationKind(undefined)).toBe('Public Lead');
  });
});

describe('formatHospitalLevel', () => {
  it('returns Chinese level labels', () => {
    mockLocale('zh');
    expect(formatHospitalLevel('tertiary_a')).toBe('三甲医院');
    expect(formatHospitalLevel('secondary_b')).toBe('二乙医院');
  });

  it('returns English level labels', () => {
    mockLocale('en');
    expect(formatHospitalLevel('tertiary_a')).toBe('Tertiary A Hospital');
    expect(formatHospitalLevel('secondary_b')).toBe('Secondary B Hospital');
  });

  it('returns raw value for unknown level', () => {
    mockLocale('zh');
    expect(formatHospitalLevel('primary')).toBe('primary');
  });
});

describe('formatConfidence', () => {
  it('returns Chinese labels', () => {
    mockLocale('zh');
    expect(formatConfidence('high')).toBe('高');
    expect(formatConfidence('medium')).toBe('中');
    expect(formatConfidence('low')).toBe('低');
  });

  it('returns English labels', () => {
    mockLocale('en');
    expect(formatConfidence('high')).toBe('High');
    expect(formatConfidence('medium')).toBe('Medium');
    expect(formatConfidence('low')).toBe('Low');
  });

  it('returns fallback for undefined', () => {
    mockLocale('zh');
    expect(formatConfidence(undefined)).toBe('待核对');
    mockLocale('en');
    expect(formatConfidence(undefined)).toBe('To Verify');
  });
});

describe('formatEvidenceKind', () => {
  it('returns Chinese labels', () => {
    mockLocale('zh');
    expect(formatEvidenceKind('clinic-page')).toBe('门诊页面');
    expect(formatEvidenceKind('public-notice')).toBe('公开通知');
  });

  it('returns English labels', () => {
    mockLocale('en');
    expect(formatEvidenceKind('clinic-page')).toBe('Clinic Page');
    expect(formatEvidenceKind('public-notice')).toBe('Public Notice');
  });

  it('returns fallback for undefined', () => {
    mockLocale('zh');
    expect(formatEvidenceKind(undefined)).toBe('公开来源');
    mockLocale('en');
    expect(formatEvidenceKind(undefined)).toBe('Public Source');
  });
});

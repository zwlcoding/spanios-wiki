import { describe, expect, it } from 'vitest';
import {
  diseaseMatchesSearch,
  normalizeSearchText,
  toSearchableText,
} from '../searchableText';
import type { Disease } from '@/types/content';

function makeDisease(partial: Partial<Disease> = {}): Disease {
  return {
    id: 1,
    slug: 'test-disease',
    name: '测试疾病',
    nameEn: 'Test Disease',
    categorySlug: 'metabolic',
    reviewStatus: 'patient-reviewed',
    ...partial,
  } as Disease;
}

describe('normalizeSearchText', () => {
  it('strips HTML tags', () => {
    expect(normalizeSearchText('<p>Hello</p>')).toBe('hello');
    expect(normalizeSearchText('<a href="x">Link</a>')).toBe('link');
  });

  it('lowercases and trims', () => {
    expect(normalizeSearchText('  HELLO  ')).toBe('hello');
    expect(normalizeSearchText('Mixed Case')).toBe('mixed case');
  });

  it('handles undefined', () => {
    expect(normalizeSearchText(undefined)).toBe('');
  });
});

describe('toSearchableText', () => {
  it('concatenates all text fields into a single normalized string', () => {
    const disease = makeDisease({
      name: '枫糖尿症',
      nameEn: 'Maple Syrup Urine Disease',
      alias: 'MSUD',
      oneSentence: '一种代谢病',
      plainName: '不能吃太多蛋白质',
      symptoms: '<p>呕吐、嗜睡</p>',
    });

    const text = toSearchableText(disease);
    expect(text).toContain('枫糖尿症');
    expect(text).toContain('maple syrup urine disease');
    expect(text).toContain('msud');
    expect(text).toContain('一种代谢病');
    expect(text).toContain('不能吃太多蛋白质');
    expect(text).toContain('呕吐、嗜睡');
    expect(text).not.toContain('<p>');
  });

  it('includes patient journey arrays when present', () => {
    const disease = makeDisease({
      patientJourney: {
        whenToSuspect: ['when a', 'when b'],
        commonWrongTurns: ['wrong a'],
        firstDepartments: ['dept a'],
        diagnosisChecklist: ['check a'],
        testsToAskAbout: ['test a'],
        questionsForDoctor: ['question a'],
      },
    });

    const text = toSearchableText(disease);
    expect(text).toContain('when a');
    expect(text).toContain('when b');
    expect(text).toContain('wrong a');
    expect(text).toContain('dept a');
  });

  it('includes catalog references when present', () => {
    const disease = makeDisease({
      catalogNumber: 42,
      catalogRefs: [
        { catalogId: 'first', catalogName: '第一批', itemNumber: 42, sourceUrl: '' },
      ],
    });

    const text = toSearchableText(disease);
    expect(text).toContain('目录第 42 项');
    expect(text).toContain('第一批 第 42 项');
  });

  it('includes tag names when present', () => {
    const disease = makeDisease({
      tags: [{ id: 1, documentId: 'tag-1', name: '遗传咨询', slug: 'genetic-counseling', createdAt: '', updatedAt: '' }],
    });

    const text = toSearchableText(disease);
    expect(text).toContain('遗传咨询');
  });

  it('handles minimal disease without throwing', () => {
    const disease = makeDisease();
    expect(() => toSearchableText(disease)).not.toThrow();
    expect(toSearchableText(disease)).toContain('test disease');
  });
});

describe('diseaseMatchesSearch', () => {
  it('returns true for empty query', () => {
    const disease = makeDisease({ name: '枫糖尿症' });
    expect(diseaseMatchesSearch(disease, '')).toBe(true);
    expect(diseaseMatchesSearch(disease, undefined)).toBe(true);
  });

  it('matches name substring', () => {
    const disease = makeDisease({ name: '枫糖尿症', nameEn: 'Maple Syrup' });
    expect(diseaseMatchesSearch(disease, '枫糖')).toBe(true);
    expect(diseaseMatchesSearch(disease, 'maple')).toBe(true);
  });

  it('is case-insensitive', () => {
    const disease = makeDisease({ nameEn: 'Maple Syrup' });
    expect(diseaseMatchesSearch(disease, 'MAPLE')).toBe(true);
    expect(diseaseMatchesSearch(disease, 'maple')).toBe(true);
  });

  it('strips HTML before matching', () => {
    const disease = makeDisease({ symptoms: '<p>枫糖气味</p>' });
    expect(diseaseMatchesSearch(disease, '枫糖气味')).toBe(true);
  });

  it('returns false for non-matching query', () => {
    const disease = makeDisease({ name: '马凡综合征' });
    expect(diseaseMatchesSearch(disease, '枫糖尿症')).toBe(false);
  });
});

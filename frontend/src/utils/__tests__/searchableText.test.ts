import { describe, expect, it } from 'vitest';
import type { Disease } from '@/types/content';
import {
  diseaseMatchesSearch,
  findBestDiseaseSearchMatch,
  normalizeSearchText,
} from '../searchableText';

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

  it('matches catalog references', () => {
    const disease = makeDisease({
      catalogNumber: 42,
      catalogRefs: [
        {
          catalogId: 'first',
          catalogName: '第一批',
          itemNumber: 42,
          sourceUrl: '',
        },
      ],
    });
    expect(diseaseMatchesSearch(disease, '目录第 42 项')).toBe(true);
    expect(diseaseMatchesSearch(disease, '第一批 第 42 项')).toBe(true);
  });

  it('matches tag names', () => {
    const disease = makeDisease({
      tags: [
        {
          id: 1,
          documentId: 'tag-1',
          name: '遗传咨询',
          slug: 'genetic-counseling',
          createdAt: '',
          updatedAt: '',
        },
      ],
    });
    expect(diseaseMatchesSearch(disease, '遗传咨询')).toBe(true);
  });
});

describe('findBestDiseaseSearchMatch', () => {
  it('prioritizes direct name matches over body matches', () => {
    const disease = makeDisease({
      name: '血友病 A',
      symptoms: '<p>血友病患者可能反复出血。</p>',
    });

    expect(findBestDiseaseSearchMatch(disease, '血友病')?.match).toMatchObject({
      field: 'name',
      kind: 'name',
    });
  });

  it('returns care intent matches from quick look and patient journey', () => {
    const disease = makeDisease({
      quickLook: {
        whatItIs: '一种遗传代谢病',
        whoToSeeFirst: '先看内分泌科',
      },
    });

    expect(findBestDiseaseSearchMatch(disease, '内分泌')?.match).toMatchObject({
      field: 'quick_look',
      kind: 'care',
    });
  });

  it('returns undefined when no candidate matches', () => {
    const disease = makeDisease({ name: '马凡综合征' });

    expect(findBestDiseaseSearchMatch(disease, '枫糖尿症')).toBeUndefined();
  });
});

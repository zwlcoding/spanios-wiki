import { describe, expect, it } from 'vitest';
import type { Disease } from '@/types/content';
import {
  buildDiseaseDescription,
  buildDiseaseSeo,
  buildDiseaseTitle,
  plainText,
} from '../seo';

describe('disease SEO helpers', () => {
  it('builds unique localized titles and descriptions from disease content', () => {
    const disease = makeDisease();

    expect(buildDiseaseTitle(disease, 'zh')).toBe(
      '肌萎缩侧索硬化（Amyotrophic Lateral Sclerosis） | Spanios 罕见病 Wiki',
    );
    expect(buildDiseaseTitle(disease, 'en')).toBe(
      'Amyotrophic Lateral Sclerosis | Spanios Rare Disease Wiki',
    );
    expect(buildDiseaseDescription(disease, 'zh')).toContain('影响运动神经元');
  });

  it('maps disease symptoms, treatments, sources, and hospitals into JSON-LD', () => {
    const seo = buildDiseaseSeo(makeDisease(), 'zh');

    expect(seo.jsonLd).toMatchObject({
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      code: {
        '@type': 'MedicalCode',
        codeValue: 'G12.2',
        codingSystem: 'ICD-10',
      },
      name: '肌萎缩侧索硬化',
    });
    expect(seo.jsonLd.signOrSymptom).toEqual([
      {
        '@type': 'MedicalSignOrSymptom',
        name: '进行性肌无力',
      },
    ]);
    expect(JSON.stringify(seo.jsonLd)).toContain('北京协和医院');
    expect(JSON.stringify(seo.jsonLd)).toContain('MedicalTherapy');
  });

  it('converts simple HTML to plain text', () => {
    expect(plainText('<p>ALS &amp; 呼吸支持</p>')).toBe('ALS & 呼吸支持');
  });
});

function makeDisease(): Disease {
  return {
    createdAt: '',
    documentId: 'disease-als',
    hospitals: [
      {
        address: '东城区',
        city: '北京',
        createdAt: '',
        documentId: 'hospital-1',
        id: 1,
        name: '北京协和医院',
        province: '北京',
        updatedAt: '',
      },
    ],
    icd10Code: 'G12.2',
    id: 1,
    alias: '渐冻症、ALS',
    medicalSections: {
      treatment: '<p>治疗重点是呼吸与营养支持、康复和症状管理。</p>',
    },
    name: '肌萎缩侧索硬化',
    nameEn: 'Amyotrophic Lateral Sclerosis',
    oneSentence: '肌萎缩侧索硬化是一种影响运动神经元的进行性神经系统疾病。',
    patientJourney: {
      whenToSuspect: ['进行性肌无力'],
    },
    reviewStatus: 'patient-reviewed',
    slug: 'amyotrophic-lateral-sclerosis',
    sources: [
      {
        name: 'NINDS ALS',
        type: 'official',
        url: 'https://example.test/als',
      },
    ],
    updatedAt: '',
  };
}

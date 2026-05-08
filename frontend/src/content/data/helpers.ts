import type { Department, DiseaseCategory, Tag } from '@/types/content';

const timestamp = '2026-05-01T00:00:00.000Z';

export function category(
  id: number,
  name: string,
  slug: string,
  description: string,
  icon: string,
): DiseaseCategory {
  return {
    ...entity(id, `category-${slug}`),
    description,
    icon,
    name,
    slug,
  };
}

export function tag(
  id: number,
  name: string,
  slug: string,
  type: Tag['type'],
): Tag {
  return {
    ...entity(id, `tag-${slug}`),
    name,
    slug,
    type,
  };
}

export function department(
  id: number,
  name: string,
  description: string,
  expertDoctors: string,
): Omit<Department, 'hospital'> {
  return {
    ...entity(id, `department-${id}`),
    description,
    expertDoctors,
    name,
  };
}

export function entity(id: number, documentId: string) {
  return {
    createdAt: timestamp,
    documentId,
    id,
    publishedAt: timestamp,
    updatedAt: timestamp,
  };
}

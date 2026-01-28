import { useQuery } from '@tanstack/react-query';
import { fetchDiseases, fetchDiseaseBySlug } from '@/lib/strapiClient';
import type { Disease } from '@/types/strapi';

export function useDiseases(filters?: { category?: string; search?: string }) {
  return useQuery({
    queryKey: ['diseases', filters],
    queryFn: () => fetchDiseases(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useDisease(slug: string) {
  return useQuery({
    queryKey: ['disease', slug],
    queryFn: () => fetchDiseaseBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

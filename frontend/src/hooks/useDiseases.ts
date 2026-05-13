import { useQuery } from '@tanstack/react-query';
import {
  fetchDiseaseBySlug,
  fetchDiseaseInventoryStats,
  fetchDiseases,
} from '@/lib/contentClient';

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

export function useDiseaseInventoryStats() {
  return useQuery({
    queryKey: ['diseaseInventoryStats'],
    queryFn: fetchDiseaseInventoryStats,
    staleTime: 5 * 60 * 1000,
  });
}

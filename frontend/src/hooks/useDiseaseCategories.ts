import { useQuery } from '@tanstack/react-query';
import { fetchDiseaseCategories } from '@/lib/strapiClient';
import type { DiseaseCategory } from '@/types/strapi';

export function useDiseaseCategories() {
  return useQuery({
    queryKey: ['diseaseCategories'],
    queryFn: fetchDiseaseCategories,
    staleTime: 10 * 60 * 1000,
  });
}

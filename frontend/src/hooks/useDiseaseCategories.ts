import { useQuery } from '@tanstack/react-query';
import { fetchDiseaseCategories } from '@/lib/contentClient';

export function useDiseaseCategories() {
  return useQuery({
    queryKey: ['diseaseCategories'],
    queryFn: fetchDiseaseCategories,
    staleTime: 10 * 60 * 1000,
  });
}

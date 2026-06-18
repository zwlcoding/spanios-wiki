import { useQuery } from '@tanstack/react-query';
import { globalSearch } from '@/lib/contentClient';

export function useGlobalSearch(query: string) {
  const normalizedQuery = query.trim();

  return useQuery({
    queryKey: ['globalSearch', normalizedQuery],
    queryFn: () => globalSearch(normalizedQuery),
    enabled: normalizedQuery.length > 0,
    staleTime: 2 * 60 * 1000,
  });
}

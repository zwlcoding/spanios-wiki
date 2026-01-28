import { useQuery } from '@tanstack/react-query';
import { globalSearch } from '@/lib/strapiClient';

export function useGlobalSearch(query: string) {
  return useQuery({
    queryKey: ['globalSearch', query],
    queryFn: () => globalSearch(query),
    enabled: !!query && query.length >= 2,
    staleTime: 2 * 60 * 1000,
  });
}

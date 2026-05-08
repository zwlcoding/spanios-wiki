import { useQuery } from '@tanstack/react-query';
import { fetchSiteSettings } from '@/lib/contentClient';

/**
 * Hook to fetch and manage site settings
 * Uses React Query so SSR-prefetched local content stays consistent.
 */
export function useSiteSettings() {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: fetchSiteSettings,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}

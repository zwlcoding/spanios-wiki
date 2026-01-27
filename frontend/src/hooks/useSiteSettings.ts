import { useQuery } from '@tanstack/react-query';
import { fetchSiteSettings } from '@/lib/strapiClient';

/**
 * Hook to fetch and manage site settings
 * Uses React Query for caching and automatic refetching
 */
export function useSiteSettings() {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: fetchSiteSettings,
    staleTime: 30000, // Consider data fresh for 30 seconds
    refetchInterval: 60000, // Refetch every 60 seconds to check for updates
    refetchOnWindowFocus: true, // Refetch when user returns to the tab
    retry: 3, // Retry failed requests 3 times
  });
}

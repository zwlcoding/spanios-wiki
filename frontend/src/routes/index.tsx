import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/HomePage';
import MaintenancePage from '@/components/MaintenancePage';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { fetchSiteSettings } from '@/lib/strapiClient';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    // Prefetch site settings on server side
    await context.queryClient.prefetchQuery({
      queryKey: ['site-settings'],
      queryFn: fetchSiteSettings,
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  // Use React Query to get site settings (will use SSR prefetched data)
  const { data: siteSettings, isLoading } = useSiteSettings();

  // Show loading state while fetching
  if (isLoading || !siteSettings) {
    return (
      <div className="flex grow items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Return maintenance page if maintenance mode is enabled
  if (siteSettings.maintenanceMode) {
    return <MaintenancePage message={siteSettings.maintenanceMessage} />;
  }

  // Return normal home page
  return <HomePage />;
}

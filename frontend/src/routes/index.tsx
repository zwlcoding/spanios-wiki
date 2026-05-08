import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/HomePage';
import MaintenancePage from '@/components/MaintenancePage';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import {
  fetchDiseaseCategories,
  fetchDiseases,
  fetchHospitals,
  fetchSiteSettings,
} from '@/lib/contentClient';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.prefetchQuery({
        queryKey: ['site-settings'],
        queryFn: fetchSiteSettings,
      }),
      context.queryClient.prefetchQuery({
        queryKey: ['diseaseCategories'],
        queryFn: fetchDiseaseCategories,
      }),
      context.queryClient.prefetchQuery({
        queryKey: ['diseases', undefined],
        queryFn: () => fetchDiseases(),
      }),
      context.queryClient.prefetchQuery({
        queryKey: ['hospitals', undefined],
        queryFn: () => fetchHospitals(),
      }),
    ]);
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

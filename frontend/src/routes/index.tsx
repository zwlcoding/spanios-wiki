import { createFileRoute } from '@tanstack/react-router';
import HomePage from '@/components/HomePage';
import MaintenancePage from '@/components/MaintenancePage';

// Check if maintenance mode is enabled
const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  // Return maintenance page if maintenance mode is enabled
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  // Return normal home page
  return <HomePage />;
}

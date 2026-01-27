import { strapi } from '@strapi/client';
import type { SiteSettings } from '@/types/strapi';

export const strapiClient = strapi({
  baseURL: import.meta.env.VITE_STRAPI_URL,
});

export const articles = strapiClient.collection('articles');

/**
 * Fetch site settings (maintenance mode, etc.)
 */
export async function fetchSiteSettings(): Promise<SiteSettings> {
  const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/site-setting`);
  if (!response.ok) {
    // Return default settings if API fails
    return {
      maintenanceMode: false,
      siteName: 'Spanios.wiki',
    };
  }
  const data = await response.json();
  return data as SiteSettings;
}

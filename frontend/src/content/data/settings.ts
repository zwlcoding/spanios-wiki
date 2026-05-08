import type { LocalizedRecord, SiteSettings } from '@/types/content';

export const siteSettingsByLocale: LocalizedRecord<SiteSettings> = {
  zh: {
    maintenanceMode: false,
    siteName: 'Spanios.wiki',
    announcement: '内容已切换为代码内维护，支持快速多语言编辑。',
  },
  en: {
    maintenanceMode: false,
    siteName: 'Spanios.wiki',
    announcement:
      'Content is now maintained in code for faster multilingual updates.',
  },
};

import { Globe, Navigation, Phone } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

interface HospitalQuickActionsProps {
  hospitalId: number;
  location?: { lat: number; lng: number };
  phone?: string;
  province: string;
  website?: string;
}

function mapUrl(location?: { lat: number; lng: number }): string {
  if (!location) {
    return '#';
  }

  return `https://maps.google.com/?q=${location.lat},${location.lng}`;
}

export function HospitalQuickActions({
  hospitalId,
  location,
  phone,
  province,
  website,
}: HospitalQuickActionsProps) {
  return (
    <div className="content-card p-5">
      <h3 className="mb-4 font-semibold">
        {uiText('快速操作', 'Quick Actions')}
      </h3>
      <div className="grid gap-3">
        {phone && (
          <a
            href={`tel:${phone}`}
            className="btn-primary-app"
            onClick={() =>
              trackEvent('hospital_phone_click', {
                hospital_id: hospitalId,
                province,
                source: 'quick_action',
              })
            }
          >
            <Phone className="h-4 w-4" />
            {uiText('联系电话', 'Call')}
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-subtle"
            onClick={() =>
              trackEvent('hospital_website_click', {
                hospital_id: hospitalId,
                province,
                source: 'quick_action',
              })
            }
          >
            <Globe className="h-4 w-4" />
            {uiText('打开官网核对', 'Open Official Website')}
          </a>
        )}
        {location && (
          <a
            href={mapUrl(location)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-subtle"
            onClick={() =>
              trackEvent('hospital_map_click', {
                hospital_id: hospitalId,
                province,
                source: 'quick_action',
              })
            }
          >
            <Navigation className="h-4 w-4" />
            {uiText('查看地图', 'View Map')}
          </a>
        )}
      </div>
    </div>
  );
}

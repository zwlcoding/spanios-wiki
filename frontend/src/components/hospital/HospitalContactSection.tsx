import { ExternalLink, Globe, MapPin, Navigation, Phone } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';

interface HospitalContactSectionProps {
  address: string;
  hospitalId: number;
  location?: { lat: number; lng: number };
  phone?: string;
  province: string;
  city: string;
  website?: string;
}

function mapUrl(location?: { lat: number; lng: number }): string {
  if (!location) {
    return '#';
  }

  return `https://maps.google.com/?q=${location.lat},${location.lng}`;
}

export function HospitalContactSection({
  address,
  hospitalId,
  location,
  phone,
  province,
  city,
  website,
}: HospitalContactSectionProps) {
  return (
    <div className="content-card mb-5 p-5">
      <h2 className="mb-4 font-semibold">
        {uiText('联系信息', 'Contact Information')}
      </h2>
      <div className="grid gap-3">
        <InfoRow icon={MapPin} label={uiText('地址', 'Address')}>
          <span>{address}</span>
          <span className="muted-text ml-2">
            ({province} {city})
          </span>
        </InfoRow>

        {phone && (
          <InfoRow icon={Phone} label={uiText('电话', 'Phone')}>
            <a
              href={`tel:${phone}`}
              className="text-amber-700"
              onClick={() =>
                trackEvent('hospital_phone_click', {
                  hospital_id: hospitalId,
                  province,
                  source: 'contact_info',
                })
              }
            >
              {phone}
            </a>
          </InfoRow>
        )}

        {website && (
          <InfoRow icon={Globe} label={uiText('网站', 'Website')}>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 break-all text-amber-700"
              onClick={() =>
                trackEvent('hospital_website_click', {
                  hospital_id: hospitalId,
                  province,
                  source: 'contact_info',
                })
              }
            >
              {website}
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            </a>
          </InfoRow>
        )}

        {location && (
          <InfoRow icon={Navigation} label={uiText('导航', 'Map')}>
            <a
              href={mapUrl(location)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-700"
              onClick={() =>
                trackEvent('hospital_map_click', {
                  hospital_id: hospitalId,
                  province,
                  source: 'contact_info',
                })
              }
            >
              {uiText('查看地图位置', 'View Map Location')}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </InfoRow>
        )}
      </div>
    </div>
  );
}

function InfoRow({
  children,
  icon: Icon,
  label,
}: {
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-md bg-stone-50 p-3 dark:bg-stone-900/30">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
      <div className="min-w-0 text-sm">
        <span className="font-semibold">{label}：</span>
        {children}
      </div>
    </div>
  );
}

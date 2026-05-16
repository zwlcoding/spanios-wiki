import { Link } from '@tanstack/react-router';
import { ExternalLink, Hospital } from 'lucide-react';
import type { HospitalService } from '@/types/content';
import { trackEvent } from '@/utils/analytics';
import {
  formatHospitalServiceStage,
  formatRelationKind,
} from '@/utils/formatters';
import { uiText } from '@/utils/localeText';

interface CareResourcesSectionProps {
  diseaseSlug: string;
  hospitalServices: HospitalService[];
}

export function CareResourcesSection({
  diseaseSlug,
  hospitalServices,
}: CareResourcesSectionProps) {
  if (!hospitalServices?.length) {
    return null;
  }

  return (
    <div className="content-card mb-5 p-5">
      <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
        <Hospital className="h-5 w-5 text-amber-700" />
        {uiText('就医资源', 'Care Resources')}
      </h3>
      <p className="-mt-2 mb-4 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
        {uiText(
          '以下为公开收录的科室、服务或 MDT 线索，不代表本站推荐或医疗背书。',
          'The following are publicly collected department, service, or MDT leads. They are not recommendations or medical endorsements.',
        )}
      </p>
      <div className="space-y-3">
        {hospitalServices.map((service) => (
          <div
            key={service.id}
            className="rounded-md border border-stone-200 bg-white p-3 dark:border-stone-700 dark:bg-stone-900/30"
          >
            {service.hospital && (
              <Link
                to="/hospitals/$id"
                params={{ id: service.hospital.id.toString() }}
                className="font-medium transition hover:text-amber-700"
                onClick={() =>
                  trackEvent('disease_related_hospital_click', {
                    disease_slug: diseaseSlug,
                    hospital_id: service.hospital?.id,
                    service_stage: service.stage,
                  })
                }
              >
                {service.hospital.name}
              </Link>
            )}
            <div className="mt-1 text-sm text-stone-600 dark:text-stone-400">
              {service.departmentName}
              {service.serviceName ? ` · ${service.serviceName}` : ''}
            </div>
            <div className="mt-1 text-xs text-stone-500">
              {formatHospitalServiceStage(service.stage)}
              {service.relationKind
                ? ` · ${formatRelationKind(service.relationKind)}`
                : ''}
              {service.hospital
                ? ` · ${service.hospital.province} ${service.hospital.city}`
                : ''}
            </div>
            {service.notes && (
              <p className="mt-2 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
                {service.notes}
              </p>
            )}
            {(service.evidenceUrl || service.sourceUrl) && (
              <a
                href={service.evidenceUrl ?? service.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-amber-700"
                onClick={() =>
                  trackEvent('disease_source_click', {
                    disease_slug: diseaseSlug,
                    service_id: service.id,
                    source_kind: 'hospital_service',
                  })
                }
              >
                {uiText('查看公开来源', 'View Public Source')}
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {service.lastVerifiedAt && (
              <div className="mt-1 text-xs text-stone-500">
                {uiText('核验于', 'Verified on')} {service.lastVerifiedAt}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

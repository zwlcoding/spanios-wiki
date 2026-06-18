import { Link } from '@tanstack/react-router';
import { ExternalLink, Hospital } from 'lucide-react';
import { useEffect } from 'react';
import type { HospitalService } from '@/types/content';
import { trackEvent } from '@/utils/analytics';
import {
  formatHospitalServiceStage,
  formatRelationKind,
} from '@/utils/formatters';
import { uiText } from '@/utils/localeText';

interface CareResourcesSectionProps {
  diseaseSlug: string;
  firstDepartments?: string[];
  hospitalServices: HospitalService[];
}

export function CareResourcesSection({
  diseaseSlug,
  firstDepartments,
  hospitalServices,
}: CareResourcesSectionProps) {
  useEffect(() => {
    trackEvent('care_resource_impression', {
      disease_slug: diseaseSlug,
      has_resources: hospitalServices.length > 0,
      resource_count: hospitalServices.length,
    });
  }, [diseaseSlug, hospitalServices.length]);

  if (!hospitalServices?.length) {
    return (
      <div className="content-card mb-5 p-5">
        <h3 className="mb-4 flex items-center gap-2 font-semibold text-stone-900 dark:text-stone-100">
          <Hospital className="h-5 w-5 text-amber-700" />
          {uiText('就医资源', 'Care Resources')}
        </h3>
        <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {uiText(
            '目前这个疾病还没有已核验的医院/科室线索。可先按下方首诊方向整理资料，具体挂号和转诊仍以医生与医院官方信息为准。',
            'No verified hospital or department leads are available for this disease yet. Use the starting departments below to prepare, and confirm registration or referral details with clinicians and official hospital channels.',
          )}
        </p>
        {firstDepartments?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {firstDepartments.slice(0, 4).map((department) => (
              <span className="badge-muted" key={department}>
                {department}
              </span>
            ))}
          </div>
        ) : null}
        <Link
          to="/hospitals"
          className="btn-subtle mt-4"
          onClick={() =>
            trackEvent('disease_care_resource_fallback_click', {
              disease_slug: diseaseSlug,
              target: '/hospitals',
            })
          }
        >
          {uiText('查看全部就医资源', 'View All Care Resources')}
        </Link>
      </div>
    );
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

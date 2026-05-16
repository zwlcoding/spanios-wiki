import { Link } from '@tanstack/react-router';
import { ExternalLink } from 'lucide-react';
import type { HospitalService } from '@/types/content';
import { trackEvent } from '@/utils/analytics';
import {
  formatConfidence,
  formatEvidenceKind,
  formatHospitalServiceStage,
  formatRelationKind,
} from '@/utils/formatters';
import { uiText } from '@/utils/localeText';

interface HospitalServicesSectionProps {
  diseaseSlug?: string;
  hospitalId: number;
  services: HospitalService[];
}

export function HospitalServicesSection({
  diseaseSlug,
  hospitalId,
  services,
}: HospitalServicesSectionProps) {
  if (!services?.length) {
    return null;
  }

  return (
    <div className="content-card p-5">
      <h2 className="mb-2 font-semibold">
        {uiText(
          '科室/服务证据与疾病关系',
          'Department/Service Evidence and Disease Links',
        )}
      </h2>
      <p className="muted-text mb-4 text-sm">
        {uiText(
          '每条关系都应落在某个科室、服务或 MDT 线索上，并尽量保留公开来源；不构成医院推荐或疗效背书。',
          'Each relationship should be tied to a department, service, or MDT lead with public sources where possible. This is not a hospital recommendation or outcome endorsement.',
        )}
      </p>
      <div className="grid gap-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-md border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-900/30"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold">{service.departmentName}</h3>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                {formatHospitalServiceStage(service.stage)}
              </span>
              <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                {formatRelationKind(service.relationKind, 'hospital')}
              </span>
              <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                {uiText('证据强度：', 'Evidence strength:')}
                {formatConfidence(service.confidence)}
              </span>
            </div>
            {service.serviceName && (
              <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
                {service.serviceName}
              </p>
            )}
            {service.diseases && service.diseases.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {service.diseases.map((disease) => (
                  <Link
                    key={disease.id}
                    to="/diseases/$slug"
                    params={{ slug: disease.slug }}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs transition hover:border-amber-300 hover:text-amber-700 dark:border-stone-700 dark:bg-stone-950"
                    onClick={() =>
                      trackEvent('related_disease_click', {
                        disease_slug: disease.slug,
                        source_id: hospitalId,
                        source_page: 'hospital_detail',
                      })
                    }
                  >
                    {disease.name}
                  </Link>
                ))}
              </div>
            )}
            {service.notes && (
              <p className="muted-text mt-3 text-sm">{service.notes}</p>
            )}
            {service.patientPrep && service.patientPrep.length > 0 && (
              <div className="mt-3 rounded-md bg-white p-3 text-sm dark:bg-stone-950/40">
                <div className="mb-2 font-medium">
                  {uiText('就诊前可准备', 'Before the Visit')}
                </div>
                <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                  {service.patientPrep.map((item) => (
                    <li
                      key={item}
                      className="before:mr-2 before:text-amber-700 before:content-['•']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {service.evidence && service.evidence.length > 0 ? (
              <div className="mt-3 grid gap-2">
                {service.evidence.map((evidence) => (
                  <a
                    key={`${service.id}-${evidence.url}`}
                    href={evidence.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-stone-200 bg-white p-3 text-sm transition hover:border-amber-300 dark:border-stone-700 dark:bg-stone-950/40"
                    onClick={() =>
                      trackEvent('hospital_evidence_click', {
                        confidence: service.confidence,
                        disease_slug: diseaseSlug,
                        evidence_kind: evidence.kind,
                        hospital_id: hospitalId,
                        service_stage: service.stage,
                      })
                    }
                  >
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-stone-900 dark:text-stone-100">
                        {evidence.title}
                      </span>
                      <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                        {formatEvidenceKind(evidence.kind)}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 text-amber-700" />
                    </span>
                    {(evidence.publisher || evidence.accessedAt) && (
                      <span className="muted-text mt-1 block text-xs">
                        {evidence.publisher}
                        {evidence.publisher && evidence.accessedAt ? ' · ' : ''}
                        {evidence.accessedAt
                          ? uiText(
                              `核验于 ${evidence.accessedAt}`,
                              `Verified on ${evidence.accessedAt}`,
                            )
                          : ''}
                      </span>
                    )}
                    {evidence.summary && (
                      <span className="muted-text mt-1 block text-xs leading-relaxed">
                        {evidence.summary}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            ) : (
              (service.evidenceUrl || service.sourceUrl) && (
                <a
                  href={service.evidenceUrl ?? service.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-amber-700"
                  onClick={() =>
                    trackEvent('hospital_evidence_click', {
                      confidence: service.confidence,
                      disease_slug: diseaseSlug,
                      evidence_kind: 'fallback_source',
                      hospital_id: hospitalId,
                      service_stage: service.stage,
                    })
                  }
                >
                  {uiText('查看公开来源', 'View Public Source')}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )
            )}
            {service.lastVerifiedAt && (
              <p className="muted-text mt-3 text-xs">
                {uiText('信息核验日期：', 'Information verified on:')}
                {service.lastVerifiedAt}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

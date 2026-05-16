import { Building } from 'lucide-react';
import type { HospitalLevel } from '@/types/content';
import { formatHospitalLevel } from '@/utils/formatters';
import { uiText } from '@/utils/localeText';

interface HospitalHeaderProps {
  name: string;
  province: string;
  city: string;
  level?: HospitalLevel;
}

export function HospitalHeader({
  name,
  province,
  city,
  level,
}: HospitalHeaderProps) {
  return (
    <div className="surface-card mb-8 p-6 sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="eyebrow mb-4">
            <Building className="h-4 w-4" />
            {uiText('公开就医资源', 'Public Care Resource')}
          </div>
          <h1 className="section-title text-3xl sm:text-4xl">{name}</h1>
          <p className="section-copy mt-2">
            {province} {city}
          </p>
        </div>
        {level && (
          <div className="badge-warm self-start">
            {formatHospitalLevel(level)}
          </div>
        )}
      </div>
    </div>
  );
}

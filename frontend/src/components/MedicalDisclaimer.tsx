import { AlertTriangle } from 'lucide-react';
import { uiText } from '@/utils/localeText';

export function MedicalDisclaimer() {
  return (
    <aside
      className="medical-disclaimer"
      aria-label={uiText('免责声明', 'Disclaimer')}
    >
      <div className="medical-disclaimer-inner">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          {uiText(
            '本站内容仅用于罕见病知识整理和就医信息导航，不构成诊断、治疗建议、医院推荐、公益援助承诺或保险报销承诺。具体诊疗、用药、检查、转诊和救助申请，请以医生、医疗机构、公益组织及官方渠道的最新信息为准。',
            'This site is for rare disease knowledge organization and care-resource navigation only. It is not a diagnosis, treatment recommendation, hospital endorsement, aid commitment, or insurance coverage promise. For diagnosis, medication, testing, referrals, emergency care, and aid applications, follow qualified clinicians, medical institutions, support organizations, and official sources.',
          )}
        </p>
      </div>
    </aside>
  );
}

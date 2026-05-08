import { AlertTriangle } from 'lucide-react';

export function MedicalDisclaimer() {
  return (
    <aside className="medical-disclaimer" aria-label="免责声明">
      <div className="medical-disclaimer-inner">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          本站内容仅用于罕见病知识整理和就医信息导航，不构成诊断、治疗建议、医院推荐、公益援助承诺或保险报销承诺。具体诊疗、用药、检查、转诊和救助申请，请以医生、医疗机构、公益组织及官方渠道的最新信息为准。
        </p>
      </div>
    </aside>
  );
}

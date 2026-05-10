import { department, entity } from '@/content/data/helpers';
import type { HospitalDraft, HospitalServiceDraft } from '@/content/data/types';

export const zhHospitalDrafts: HospitalDraft[] = [
  {
    ...entity(1, 'hospital-pumch'),
    name: '北京协和医院',
    level: 'tertiary_a',
    province: '北京',
    city: '北京',
    address: '北京市东城区帅府园 1 号',
    phone: '010-69156114',
    website: 'https://www.pumch.cn',
    specialties:
      '公开资料可核对到内分泌、神经内科、血液科、遗传咨询与疑难病相关服务；具体病种路径需以医院官方挂号和门诊安排为准。',
    location: { lat: 39.9139, lng: 116.4127 },
    departments: [
      department(
        101,
        '内分泌科',
        '负责性腺发育、垂体疾病和内分泌相关罕见病评估。',
        '内分泌遗传与生殖内分泌团队',
      ),
      department(
        102,
        '神经内科',
        '提供神经肌肉病诊断、肌电图评估和多学科随访。',
        '神经肌肉病团队',
      ),
    ],
  },
  {
    ...entity(2, 'hospital-shanghai-ruijin'),
    name: '上海交通大学医学院附属瑞金医院',
    level: 'tertiary_a',
    province: '上海',
    city: '上海',
    address: '上海市黄浦区瑞金二路 197 号',
    phone: '021-64370045',
    website: 'https://www.rjh.com.cn',
    specialties:
      '公开资料可核对到内分泌代谢等相关专科；具体病种路径需以医院官方挂号和门诊安排为准。',
    location: { lat: 31.2133, lng: 121.4665 },
    departments: [
      department(
        201,
        '内分泌代谢科',
        '开展内分泌代谢性罕见病筛查、诊断和长期管理。',
        '内分泌代谢病团队',
      ),
    ],
  },
  {
    ...entity(3, 'hospital-southern'),
    name: '南方医科大学南方医院',
    level: 'tertiary_a',
    province: '广东',
    city: '广州',
    address: '广州市广州大道北 1838 号',
    phone: '020-61641888',
    website: 'https://www.nfyy.com',
    specialties:
      '公开资料可核对到血液病、凝血障碍等相关专科；具体病种路径需以医院官方挂号和门诊安排为准。',
    location: { lat: 23.1906, lng: 113.3292 },
    departments: [
      department(
        301,
        '血液科',
        '公开资料显示该科室涉及凝血因子检测、出血处理和长期随访管理。',
        '凝血与血栓团队',
      ),
    ],
  },
];

export const zhHospitalServiceDrafts: HospitalServiceDraft[] = [
  {
    id: 'pumch-endocrinology-kallmann-21ohd',
    hospitalId: 1,
    departmentId: 101,
    departmentName: '内分泌科',
    serviceName: '内分泌相关罕见病评估',
    diseaseSlugs: ['kallmann-syndrome', '21-hydroxylase-deficiency'],
    stage: 'diagnosis',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.pumch.cn',
    evidenceUrl: 'https://www.pumch.cn',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher: '北京协和医院',
        title: '北京协和医院官方网站',
        url: 'https://www.pumch.cn',
        accessedAt: '2026-05-10',
        summary: '用于核对医院官方入口和科室公开信息。',
      },
    ],
    evidenceSummary:
      '公开医院信息显示该院设有内分泌相关专科；具体疾病就诊路径需以医院当日门诊和医生评估为准。',
    notes: '可作为内分泌相关罕见病初诊、复诊和遗传咨询前的信息参考。',
    patientPrep: [
      '携带既往激素、影像、基因检测和生长发育相关资料。',
      '挂号前核对当日门诊名称、接诊范围和是否需要转诊。',
    ],
  },
  {
    id: 'pumch-neurology-als',
    hospitalId: 1,
    departmentId: 102,
    departmentName: '神经内科',
    serviceName: '神经肌肉病评估',
    diseaseSlugs: ['amyotrophic-lateral-sclerosis'],
    stage: 'diagnosis',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.pumch.cn',
    evidenceUrl: 'https://www.pumch.cn',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher: '北京协和医院',
        title: '北京协和医院官方网站',
        url: 'https://www.pumch.cn',
        accessedAt: '2026-05-10',
        summary: '用于核对医院官方入口和科室公开信息。',
      },
    ],
    evidenceSummary:
      '公开医院信息显示该院设有神经内科；具体 ALS 或运动神经元病服务需以官方门诊信息为准。',
    notes: '适合在就诊前核对是否有神经肌肉病、运动神经元病或肌电图相关门诊。',
    patientPrep: [
      '携带肌电图、影像、肺功能、既往用药和病程记录。',
      '优先确认是否需要神经肌肉病或运动神经元病相关门诊。',
    ],
  },
  {
    id: 'ruijin-endocrine-metabolic-kallmann-21ohd',
    hospitalId: 2,
    departmentId: 201,
    departmentName: '内分泌代谢科',
    serviceName: '内分泌代谢病评估',
    diseaseSlugs: ['kallmann-syndrome', '21-hydroxylase-deficiency'],
    stage: 'follow-up',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.rjh.com.cn',
    evidenceUrl: 'https://www.rjh.com.cn',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher: '上海交通大学医学院附属瑞金医院',
        title: '瑞金医院官方网站',
        url: 'https://www.rjh.com.cn',
        accessedAt: '2026-05-10',
        summary: '用于核对医院官方入口和科室公开信息。',
      },
    ],
    evidenceSummary:
      '公开医院信息显示该院设有内分泌代谢相关专科；具体病种和门诊安排需以医院官方信息为准。',
    notes: '可作为内分泌代谢相关罕见病长期随访信息参考。',
    patientPrep: [
      '整理长期随访指标、激素检查、既往治疗方案和复查时间线。',
      '挂号前核对内分泌代谢相关门诊的接诊范围。',
    ],
  },
  {
    id: 'southern-hematology-hemophilia',
    hospitalId: 3,
    departmentId: 301,
    departmentName: '血液科',
    serviceName: '凝血与出血性疾病评估',
    diseaseSlugs: ['hemophilia'],
    stage: 'treatment',
    relationKind: 'department-service',
    serviceKind: 'department',
    confidence: 'medium',
    lastVerifiedAt: '2026-05-10',
    sourceUrl: 'https://www.nfyy.com',
    evidenceUrl: 'https://www.nfyy.com',
    evidence: [
      {
        kind: 'hospital-directory',
        publisher: '南方医科大学南方医院',
        title: '南方医院官方网站',
        url: 'https://www.nfyy.com',
        accessedAt: '2026-05-10',
        summary: '用于核对医院官方入口和科室公开信息。',
      },
    ],
    evidenceSummary:
      '公开医院信息显示该院设有血液科；具体血友病诊疗服务需以医院官方门诊信息为准。',
    notes: '适合就诊前核对凝血因子检测、出血处理和长期随访相关服务。',
    patientPrep: [
      '携带凝血因子水平、抑制物检测、出血记录和既往治疗记录。',
      '急性出血或创伤时应优先按急诊流程处理。',
    ],
  },
];

/**
 * Lucide React 图标懒加载工具
 * 减少初始包大小，按需加载图标
 */

import { lazy } from 'react';

// 常用图标的懒加载映射
export const lazyIcons = {
  Search: lazy(() => import('lucide-react').then(m => ({ default: m.Search }))),
  MapPin: lazy(() => import('lucide-react').then(m => ({ default: m.MapPin }))),
  Phone: lazy(() => import('lucide-react').then(m => ({ default: m.Phone }))),
  Globe: lazy(() => import('lucide-react').then(m => ({ default: m.Globe }))),
  Mail: lazy(() => import('lucide-react').then(m => ({ default: m.Mail }))),
  Users: lazy(() => import('lucide-react').then(m => ({ default: m.Users }))),
  Heart: lazy(() => import('lucide-react').then(m => ({ default: m.Heart }))),
  Building: lazy(() => import('lucide-react').then(m => ({ default: m.Building }))),
  Building2: lazy(() => import('lucide-react').then(m => ({ default: m.Building2 }))),
  Navigation: lazy(() => import('lucide-react').then(m => ({ default: m.Navigation }))),
  Calendar: lazy(() => import('lucide-react').then(m => ({ default: m.Calendar }))),
  Tag: lazy(() => import('lucide-react').then(m => ({ default: m.Tag }))),
  Hospital: lazy(() => import('lucide-react').then(m => ({ default: m.Hospital }))),
  ArrowLeft: lazy(() => import('lucide-react').then(m => ({ default: m.ArrowLeft }))),
  FileText: lazy(() => import('lucide-react').then(m => ({ default: m.FileText }))),
};

/**
 * 获取懒加载图标组件
 */
export function getLazyIcon(name: keyof typeof lazyIcons) {
  return lazyIcons[name];
}
/**
 * 优化图标导入工具
 * 使用动态导入按需加载图标，避免打包整个图标库
 */

import React from 'react';

// 图标名称到动态导入的映射
const iconImports: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  Search: () => import('lucide-react/dist/esm/icons/search').then(m => ({ default: m.Search })),
  MapPin: () => import('lucide-react/dist/esm/icons/map-pin').then(m => ({ default: m.MapPin })),
  Phone: () => import('lucide-react/dist/esm/icons/phone').then(m => ({ default: m.Phone })),
  Globe: () => import('lucide-react/dist/esm/icons/globe').then(m => ({ default: m.Globe })),
  Mail: () => import('lucide-react/dist/esm/icons/mail').then(m => ({ default: m.Mail })),
  Users: () => import('lucide-react/dist/esm/icons/users').then(m => ({ default: m.Users })),
  Heart: () => import('lucide-react/dist/esm/icons/heart').then(m => ({ default: m.Heart })),
  Building: () => import('lucide-react/dist/esm/icons/building').then(m => ({ default: m.Building })),
  Building2: () => import('lucide-react/dist/esm/icons/building-2').then(m => ({ default: m.Building2 })),
  Navigation: () => import('lucide-react/dist/esm/icons/navigation').then(m => ({ default: m.Navigation })),
  Calendar: () => import('lucide-react/dist/esm/icons/calendar').then(m => ({ default: m.Calendar })),
  Tag: () => import('lucide-react/dist/esm/icons/tag').then(m => ({ default: m.Tag })),
  Hospital: () => import('lucide-react/dist/esm/icons/hospital').then(m => ({ default: m.Hospital })),
  ArrowLeft: () => import('lucide-react/dist/esm/icons/arrow-left').then(m => ({ default: m.ArrowLeft })),
  FileText: () => import('lucide-react/dist/esm/icons/file-text').then(m => ({ default: m.FileText })),
};

// 缓存的图标组件
const iconCache: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {};

/**
 * 获取优化图标组件
 */
export function getOptimizedIcon(name: keyof typeof iconImports): React.LazyExoticComponent<React.ComponentType<any>> {
  if (!iconCache[name]) {
    iconCache[name] = React.lazy(iconImports[name]);
  }
  return iconCache[name];
}

/**
 * 图标组件的属性类型
 */
interface OptimizedIconProps extends React.ComponentProps<any> {
  name: keyof typeof iconImports;
  fallback?: React.ReactNode;
}

/**
 * 带 Suspense 的图标组件
 */
export const OptimizedIcon: React.FC<OptimizedIconProps> = ({ name, fallback, ...props }) => {
  const IconComponent = getOptimizedIcon(name);
  const defaultFallback = React.createElement('span', { className: 'inline-block h-5 w-5' });
  
  return React.createElement(
    React.Suspense,
    { fallback: fallback || defaultFallback },
    React.createElement(IconComponent, props)
  );
};
import React from 'react';

/**
 * 用于懒加载组件的工具函数
 * 支持 TypeScript 类型安全
 */
export function lazyImport<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return React.lazy(factory);
}
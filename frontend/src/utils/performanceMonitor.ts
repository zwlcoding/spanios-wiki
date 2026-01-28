/**
 * 性能监控工具
 * 用于测量和报告应用性能指标
 */

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    totalBlockingTime: 0,
  };

  private observer: PerformanceObserver | null = null;

  /**
   * 初始化性能监控
   */
  init() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    this.setupNavigationTiming();
    this.setupPaintTiming();
    this.setupLayoutShift();
    this.setupLongTasks();
  }

  /**
   * 设置导航计时监控
   */
  private setupNavigationTiming() {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      this.metrics.pageLoadTime = navigationEntry.loadEventEnd - navigationEntry.startTime;
    }
  }

  /**
   * 设置绘制计时监控
   */
  private setupPaintTiming() {
    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          } else if (entry.name === 'largest-contentful-paint') {
            this.metrics.largestContentfulPaint = entry.startTime;
          }
        }
      });

      this.observer.observe({ type: 'paint', buffered: true });
    } catch (e) {
      console.warn('Paint timing not supported:', e);
    }
  }

  /**
   * 设置布局偏移监控
   */
  private setupLayoutShift() {
    try {
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue;
      });

      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      console.warn('Layout shift not supported:', e);
    }
  }

  /**
   * 设置长任务监控
   */
  private setupLongTasks() {
    try {
      let totalBlockingTime = 0;

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          totalBlockingTime += entry.duration - 50;
        }
        this.metrics.totalBlockingTime = totalBlockingTime;
      });

      observer.observe({ type: 'longtask', buffered: true });
    } catch (e) {
      console.warn('Long tasks not supported:', e);
    }
  }

  /**
   * 获取性能指标
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * 报告性能指标
   */
  report() {
    const metrics = this.getMetrics();
    
    console.group('📊 Performance Metrics');
    console.log(`Page Load Time: ${metrics.pageLoadTime.toFixed(2)}ms`);
    console.log(`First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms`);
    console.log(`Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(2)}ms`);
    console.log(`Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(4)}`);
    console.log(`Total Blocking Time: ${metrics.totalBlockingTime.toFixed(2)}ms`);
    console.groupEnd();

    // 可以发送到分析服务
    this.sendToAnalytics(metrics);
  }

  /**
   * 发送指标到分析服务
   */
  private sendToAnalytics(metrics: PerformanceMetrics) {
    // 这里可以集成到你的分析服务
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('performance_metrics', metrics);
    }
  }

  /**
   * 测量函数执行时间
   */
  measure<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`);
    return result;
  }

  /**
   * 测量异步函数执行时间
   */
  async measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`);
    return result;
  }
}

// 创建单例实例
export const performanceMonitor = new PerformanceMonitor();

// 开发环境自动初始化
if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        performanceMonitor.init();
        performanceMonitor.report();
      }, 1000);
    });
  }
}
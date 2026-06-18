import { afterEach, describe, expect, it, vi } from 'vitest';
import { getSearchMeta, trackEvent, trackPageview } from '../analytics';

describe('analytics helpers', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    Reflect.deleteProperty(globalThis, 'window');
  });

  it('tracks a pageview with Umami when the tracker is ready', () => {
    const track = vi.fn();
    setWindow({ setTimeout, umami: { track } });

    trackPageview();

    expect(track).toHaveBeenCalledWith();
  });

  it('only sends the latest queued pageview when Umami loads late', () => {
    vi.useFakeTimers();
    const track = vi.fn();
    const testWindow = { setTimeout: globalThis.setTimeout };
    setWindow(testWindow);

    trackPageview();
    trackPageview();
    Object.assign(testWindow, { umami: { track } });

    vi.advanceTimersByTime(100);

    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith();
  });

  it('removes empty event data before tracking custom events', () => {
    const track = vi.fn();
    setWindow({ setTimeout, umami: { track } });

    trackEvent('search_results_view', {
      ignored: undefined,
      query_length: 3,
      search_term: '渐冻症',
      zero_result: false,
    });

    expect(track).toHaveBeenCalledWith('search_results_view', {
      query_length: 3,
      search_term: '渐冻症',
      zero_result: false,
    });
  });

  it('includes a bounded search term for zero-result exports', () => {
    expect(getSearchMeta('  渐冻症  ')).toEqual({
      has_query: true,
      query_length: 3,
      search_term: '渐冻症',
    });
    expect(getSearchMeta('x'.repeat(130)).search_term).toHaveLength(120);
  });
});

function setWindow(value: Record<string, unknown>) {
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value,
  });
}

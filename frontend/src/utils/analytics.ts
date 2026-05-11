type AnalyticsValue = boolean | number | string;
type AnalyticsEventData = Record<string, AnalyticsValue | null | undefined>;

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, AnalyticsValue>) => void;
    };
  }
}

export function trackEvent(eventName: string, data?: AnalyticsEventData) {
  if (typeof window === 'undefined') {
    return;
  }

  const cleanData = Object.fromEntries(
    Object.entries(data ?? {}).filter(([, value]) => value != null),
  ) as Record<string, AnalyticsValue>;

  window.umami?.track(eventName, cleanData);
}

export function getSearchMeta(query: string) {
  const trimmedQuery = query.trim();

  return {
    has_query: trimmedQuery.length > 0,
    query_length: trimmedQuery.length,
  };
}

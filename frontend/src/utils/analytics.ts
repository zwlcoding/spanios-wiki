type AnalyticsValue = boolean | number | string;
type AnalyticsEventData = Record<string, AnalyticsValue | null | undefined>;

declare global {
  interface Window {
    umami?: {
      track: {
        (): void;
        (eventName: string, data?: Record<string, AnalyticsValue>): void;
      };
    };
  }
}

let pageviewSequence = 0;

export function trackPageview(_href?: string) {
  if (typeof window === 'undefined') {
    return;
  }

  pageviewSequence += 1;
  const sequence = pageviewSequence;

  sendPageviewWhenReady(sequence);
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
    search_term: trimmedQuery.slice(0, 120),
  };
}

function sendPageviewWhenReady(sequence: number, attempt = 0) {
  if (sequence !== pageviewSequence) {
    return;
  }

  if (window.umami?.track) {
    window.umami.track();
    return;
  }

  if (attempt >= 20) {
    return;
  }

  window.setTimeout(() => sendPageviewWhenReady(sequence, attempt + 1), 100);
}

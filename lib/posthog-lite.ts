type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";
const distinctIdKey = "ai_source_lab_distinct_id";

function getDistinctId() {
  if (typeof window === "undefined") return "server";

  try {
    const existing = window.localStorage.getItem(distinctIdKey);
    if (existing) return existing;

    const created = window.crypto?.randomUUID?.() || `anon_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(distinctIdKey, created);
    return created;
  } catch {
    return "anonymous";
  }
}

function cleanPath(value: string | null | undefined) {
  if (!value) return undefined;

  try {
    const url = new URL(value, window.location.origin);
    return url.pathname;
  } catch {
    return undefined;
  }
}

function cleanHost(value: string | null | undefined) {
  if (!value) return undefined;

  try {
    const url = new URL(value, window.location.origin);
    return url.host;
  } catch {
    return undefined;
  }
}

export function captureEvent(event: string, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined" || !posthogKey) return;

  const payload = {
    api_key: posthogKey,
    event,
    distinct_id: getDistinctId(),
    properties: {
      page_path: window.location.pathname,
      referrer_host: cleanHost(document.referrer),
      ...properties,
    },
  };

  const endpoint = `${posthogHost.replace(/\/$/, "")}/capture/`;
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
    return;
  }

  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
}

export function analyticsLinkProperties(href: string | null | undefined) {
  return {
    link_host: cleanHost(href),
    link_path: cleanPath(href),
  };
}

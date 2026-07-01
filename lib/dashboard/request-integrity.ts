import "server-only";

import { hashDashboardIdentifier } from "./identity";

export type DashboardHeaders = Headers | Record<string, string | readonly string[] | undefined>;

const unavailableNetworkKey = "network:unavailable";

function readHeader(headers: DashboardHeaders, name: string): string | undefined {
  if (headers instanceof Headers) {
    return headers.get(name) ?? undefined;
  }

  const lowerName = name.toLowerCase();
  const entry = Object.entries(headers).find(([key]) => key.toLowerCase() === lowerName)?.[1];

  if (Array.isArray(entry)) return entry[0];
  return typeof entry === "string" ? entry : undefined;
}

function normalizeHost(value: string | undefined): string | undefined {
  return value?.trim().toLowerCase() || undefined;
}

export function isSameOriginRequest(headers: DashboardHeaders): boolean {
  const host = normalizeHost(readHeader(headers, "host") ?? readHeader(headers, "x-forwarded-host"));
  const origin = readHeader(headers, "origin")?.trim();

  if (!host || !origin) return false;

  try {
    return new URL(origin).host.toLowerCase() === host;
  } catch {
    return false;
  }
}

export function getTrustedNetworkKey(
  headers: DashboardHeaders,
  secret: string | undefined,
): string {
  const trustedRequestId =
    readHeader(headers, "x-vercel-id") ??
    readHeader(headers, "x-request-id");

  if (!trustedRequestId || !secret?.trim()) return unavailableNetworkKey;

  return `network:${hashDashboardIdentifier("network", trustedRequestId, secret)}`;
}

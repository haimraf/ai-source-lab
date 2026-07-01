import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export function normalizeDashboardEmail(value: string): string {
  return value.trim().toLowerCase();
}

function sha256Digest(value: string): Buffer {
  return createHash("sha256").update(value, "utf8").digest();
}

export function isDashboardEmailAllowed(supplied: string, configured: string): boolean {
  const suppliedDigest = sha256Digest(normalizeDashboardEmail(supplied));
  const configuredDigest = sha256Digest(normalizeDashboardEmail(configured));

  return timingSafeEqual(suppliedDigest, configuredDigest);
}

export function hashDashboardIdentifier(kind: string, value: string, secret: string): string {
  const normalizedKind = kind.trim().toLowerCase();
  const normalizedValue = normalizedKind === "email" ? normalizeDashboardEmail(value) : value.trim();
  const normalizedSecret = secret.trim();

  if (!normalizedKind) throw new Error("Dashboard identifier kind is required.");
  if (!normalizedValue) throw new Error("Dashboard identifier value is required.");
  if (!normalizedSecret) throw new Error("Dashboard identifier secret is required.");

  return createHmac("sha256", normalizedSecret)
    .update(`${normalizedKind}:${normalizedValue}`, "utf8")
    .digest("hex");
}

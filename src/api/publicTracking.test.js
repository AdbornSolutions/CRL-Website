import { afterEach, describe, expect, it, vi } from "vitest";
import { normalizeTracking, trackShipment, validateLR } from "./publicTracking";
import { formatTrackingDate, statuses, statusLabel } from "../Components/tracking/trackingUtils";

afterEach(() => { vi.unstubAllGlobals(); vi.useRealTimers(); });
describe("public tracking contract", () => {
  it.each(["", "   ", "1234", "x".repeat(51)])("rejects invalid LR %s without fetching", async value => {
    const fetcher = vi.fn(); vi.stubGlobal("fetch", fetcher);
    expect(validateLR(value)).not.toBe("");
    await expect(trackShipment(value)).rejects.toThrow("between 5 and 50");
    expect(fetcher).not.toHaveBeenCalled();
  });
  it("encodes and normalizes LR and sends no credentials", async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true, data: { lrNumber: "LR/A?1", status: "BOOKED" } }) });
    vi.stubGlobal("fetch", fetcher);
    await trackShipment(" lr/a?1 ");
    expect(fetcher).toHaveBeenCalledWith("/api/public/track/LR%2FA%3F1", expect.objectContaining({ credentials: "omit", cache: "no-store" }));
  });
  it("allows only safe fields and preserves backend event order", () => {
    const result = normalizeTracking({ success: true, data: { lrNumber: "CRL-123", status: "CANCELLED", customerId: "secret", trackingHistory: [{ id: "secret", status: "BOOKED", timestamp: "2026-09-05T04:00:00Z", remarks: "private" }, { status: "CANCELLED", timestamp: "2026-09-06T04:00:00Z" }] } });
    expect(JSON.stringify(result)).not.toMatch(/secret|private|remarks|customerId/);
    expect(result.trackingHistory.map(event => event.status)).toEqual(["BOOKED", "CANCELLED"]);
  });
  it.each([[400, "check the LR"], [404, "couldn't find tracking"], [429, "Too many"], [500, "temporarily unavailable"]])("handles HTTP %i", async (status, message) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status }));
    await expect(trackShipment("CRL-123")).rejects.toThrow(message);
  });
  it("handles network failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    await expect(trackShipment("CRL-123")).rejects.toThrow("Unable to connect");
  });
  it("times out after 12 seconds", async () => {
    vi.useFakeTimers();
    vi.stubGlobal("fetch", vi.fn((_url, { signal }) => new Promise((_resolve, reject) => signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError"))))));
    const assertion = expect(trackShipment("CRL-123")).rejects.toThrow("timed out");
    await vi.advanceTimersByTimeAsync(12000); await assertion;
  });
  it("rejects malformed successful responses", () => {
    expect(() => normalizeTracking({ success: true, data: {} })).toThrow("unexpected response");
  });
  it.each(Object.keys(statuses))("has readable label for %s", status => { expect(statusLabel(status)).not.toMatch(/_/); });
  it("formats dates consistently in India time and handles missing values", () => {
    expect(formatTrackingDate("invalid")).toBe("Not available");
    expect(formatTrackingDate(null)).toBe("Not available");
    expect(formatTrackingDate("2026-09-05T20:00:00Z", true)).toMatch(/06 Sept? 2026/);
  });
});

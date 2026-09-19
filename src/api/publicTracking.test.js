import { afterEach, describe, expect, it, vi } from "vitest";
import { normalizeTracking, trackShipment, validateLR } from "./publicTracking";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe("public tracking API", () => {
  it.each(["", "   ", "1234", "x".repeat(51), "CRL 123"])("rejects invalid LR %s", async (value) => {
    const fetcher = vi.fn();
    vi.stubGlobal("fetch", fetcher);
    expect(validateLR(value)).not.toBe("");
    await expect(trackShipment(value)).rejects.toBeTruthy();
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("uses the API proxy, encodes the LR and omits credentials", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, data: { lrNumber: "LR/A.1", status: "BOOKED" } }),
    });
    vi.stubGlobal("fetch", fetcher);
    await trackShipment(" lr/a.1 ");
    expect(fetcher).toHaveBeenCalledWith(
      "/api/public/track/LR%2FA.1",
      expect.objectContaining({ credentials: "omit", cache: "no-store" }),
    );
  });

  it("allows only public fields", () => {
    const result = normalizeTracking({
      success: true,
      data: {
        lrNumber: "CRL-123",
        status: "CLOSED",
        customerId: "secret",
        trackingHistory: [{ id: "secret", status: "BOOKED", remarks: "private" }],
      },
    });
    expect(JSON.stringify(result)).not.toMatch(/secret|private|remarks|customerId/);
  });

  it.each([
    [400, "check the LR"],
    [404, "couldn't find"],
    [429, "Too many"],
    [500, "temporarily unavailable"],
  ])("handles HTTP %i safely", async (status, message) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status }));
    await expect(trackShipment("CRL-123")).rejects.toThrow(message);
  });

  it("handles network and malformed-response failures", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValueOnce(new TypeError("Failed to fetch")));
    await expect(trackShipment("CRL-123")).rejects.toThrow("Unable to connect");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) }));
    await expect(trackShipment("CRL-123")).rejects.toThrow("unexpected response");
  });

  it("times out after 12 seconds", async () => {
    vi.useFakeTimers();
    vi.stubGlobal("fetch", vi.fn((_url, { signal }) => new Promise((_resolve, reject) => {
      signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
    })));
    const assertion = expect(trackShipment("CRL-123")).rejects.toThrow("timed out");
    await vi.advanceTimersByTimeAsync(12000);
    await assertion;
  });
});

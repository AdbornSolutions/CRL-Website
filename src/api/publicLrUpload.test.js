import { afterEach, expect, it, vi } from "vitest";
import {
  requestLrUploadSession,
  uploadLrDocument,
  validateCustomerCode,
  validateLrFile,
} from "./publicLrUpload";

afterEach(() => vi.unstubAllGlobals());

it("validates customer codes and upload files before network calls", async () => {
  expect(validateCustomerCode("90001")).toBe("");
  expect(validateCustomerCode("CRL01")).not.toBe("");
  expect(validateLrFile(new File(["x"], "lr.txt", { type: "text/plain" }))).not.toBe("");
  expect(validateLrFile(new File(["%PDF"], "lr.pdf", { type: "application/pdf" }))).toBe("");
});

it("requests a short-lived upload token without credentials", async () => {
  const token = "a".repeat(64);
  const fetcher = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ success: true, data: { accepted: true, uploadToken: token, expiresInMinutes: 20 } }),
  });
  vi.stubGlobal("fetch", fetcher);
  await expect(requestLrUploadSession("CRL-001", "90001")).resolves.toEqual({ token, expiresInMinutes: 20 });
  expect(fetcher).toHaveBeenCalledWith("/api/public/lr-upload/request", expect.objectContaining({
    method: "POST",
    credentials: "omit",
    body: JSON.stringify({ lrNumber: "CRL-001", customerCode: "90001" }),
  }));
});

it("does not expose whether an LR or customer code was wrong", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ success: true, data: { accepted: true } }),
  }));
  await expect(requestLrUploadSession("CRL-001", "90001")).rejects.toThrow("does not match");
});

it("uploads multipart data and handles a used token", async () => {
  const token = "b".repeat(64);
  const file = new File(["%PDF-1.7"], "lr.pdf", { type: "application/pdf" });
  const fetcher = vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ success: true, data: { id: "document-1" } }) })
    .mockResolvedValueOnce({ ok: false, status: 401 });
  vi.stubGlobal("fetch", fetcher);
  await expect(uploadLrDocument(token, file)).resolves.toEqual({ id: "document-1" });
  const options = fetcher.mock.calls[0][1];
  expect(options.body).toBeInstanceOf(FormData);
  expect(options.headers).toEqual({ Accept: "application/json" });
  await expect(uploadLrDocument(token, file)).rejects.toThrow("already used");
});

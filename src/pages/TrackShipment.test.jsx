import { StrictMode } from "react";
import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrackShipment from "./TrackShipment";

const shipment = {
  lrNumber: "CRL-NGP-2026-900001",
  origin: "Nagpur",
  destination: "Mumbai",
  status: "CLOSED",
  currentLocation: "Mumbai",
  bookingDate: "2026-09-18T09:08:43.987Z",
  trackingHistory: [{ status: "BOOKED", location: "Nagpur", timestamp: "2026-09-18T09:08:44.026Z" }],
};
const success = () => ({ ok: true, json: async () => ({ success: true, data: shipment }) });
const page = (url = "/track") => render(
  <StrictMode><MemoryRouter initialEntries={[url]}><TrackShipment /></MemoryRouter></StrictMode>,
);

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

it("loads the real tracking form without an automatic blank request", async () => {
  const fetcher = vi.fn();
  vi.stubGlobal("fetch", fetcher);
  page();
  expect(screen.getByRole("heading", { name: "Track your shipment." })).toBeTruthy();
  expect(screen.getByText(/No login needed/)).toBeTruthy();
  await waitFor(() => expect(screen.getByLabelText("LR number").value).toBe(""));
  expect(fetcher).not.toHaveBeenCalled();
});

it("tracks a shared URL once and renders the backend result", async () => {
  const fetcher = vi.fn().mockResolvedValue(success());
  vi.stubGlobal("fetch", fetcher);
  page("/track?lr=crl-ngp-2026-900001");
  expect(await screen.findByRole("heading", { name: shipment.lrNumber })).toBeTruthy();
  expect(screen.getAllByText("Mumbai")).toHaveLength(2);
  expect(fetcher).toHaveBeenCalledTimes(1);
});

it("validates locally and renders safe API errors", async () => {
  const fetcher = vi.fn().mockResolvedValue({ ok: false, status: 404 });
  vi.stubGlobal("fetch", fetcher);
  page();
  fireEvent.change(screen.getByLabelText("LR number"), { target: { value: "bad lr" } });
  fireEvent.submit(screen.getByLabelText("LR number").closest("form"));
  expect(await screen.findByRole("alert")).toBeTruthy();
  expect(fetcher).not.toHaveBeenCalled();

  fireEvent.change(screen.getByLabelText("LR number"), { target: { value: "CRL-UNKNOWN" } });
  fireEvent.submit(screen.getByLabelText("LR number").closest("form"));
  expect((await screen.findByRole("alert")).textContent).toContain("couldn't find");
  expect(fetcher).toHaveBeenCalledTimes(1);
});

it("refreshes a loaded shipment with one new request", async () => {
  const fetcher = vi.fn().mockResolvedValue(success());
  vi.stubGlobal("fetch", fetcher);
  page("/track?lr=CRL-NGP-2026-900001");
  await screen.findByRole("heading", { name: shipment.lrNumber });
  fireEvent.click(screen.getByRole("button", { name: "Refresh Status" }));
  await waitFor(() => expect(fetcher).toHaveBeenCalledTimes(2));
});

it("shows the one-time upload only while received and hides it after upload", async () => {
  const received = { ...shipment, status: "RECEIVED", lrUploadEligible: true };
  const uploaded = { ...shipment, status: "LR_IMAGE_UPLOADED", lrUploadEligible: false };
  const token = "a".repeat(64);
  const fetcher = vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ success: true, data: received }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ success: true, data: { accepted: true, uploadToken: token, expiresInMinutes: 20 } }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ success: true, data: { id: "document-1" } }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ success: true, data: uploaded }) });
  vi.stubGlobal("fetch", fetcher);
  page("/track?lr=CRL-NGP-2026-900001");

  expect(await screen.findByRole("heading", { name: "Upload LR document" })).toBeTruthy();
  fireEvent.change(screen.getByLabelText("5-digit customer code"), { target: { value: "90001" } });
  fireEvent.click(screen.getByRole("button", { name: "Open secure upload" }));
  expect(await screen.findByText(/valid for one successful upload only/i)).toBeTruthy();

  const file = new File(["%PDF-1.7"], "lr.pdf", { type: "application/pdf" });
  fireEvent.change(screen.getByLabelText("LR document"), { target: { files: [file] } });
  fireEvent.click(screen.getByRole("button", { name: "Upload LR document" }));

  await waitFor(() => expect(fetcher).toHaveBeenCalledTimes(4));
  await waitFor(() => expect(screen.queryByRole("heading", { name: "Upload LR document" })).toBeNull());
  expect(fetcher.mock.calls[1][0]).toBe("/api/public/lr-upload/request");
  expect(fetcher.mock.calls[2][0]).toBe(`/api/public/lr-upload/${token}`);
});

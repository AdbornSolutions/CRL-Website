import { StrictMode } from "react";
import { afterEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrackShipment from "./TrackShipment";
import TrackingTimeline from "../Components/tracking/TrackingTimeline";

const shipment = { lrNumber: "CRL-NGP-2026-000001", origin: "Nagpur", destination: "Mumbai", status: "IN_TRANSIT", currentLocation: "Nagpur Hub", bookingDate: "2026-09-05T04:00:00Z", trackingHistory: [{ status: "BOOKED", location: "Nagpur", timestamp: "2026-09-05T04:00:00Z" }, { status: "IN_TRANSIT", location: "Nagpur Hub", timestamp: "2026-09-05T08:00:00Z" }] };
const success = () => ({ ok: true, json: async () => ({ success: true, data: shipment }) });
function page(url = "/track") { return render(<StrictMode><MemoryRouter initialEntries={[url]}><TrackShipment /></MemoryRouter></StrictMode>); }
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

it("loads with shared header, footer, accessible form and no automatic search", async () => {
  const fetcher = vi.fn(); vi.stubGlobal("fetch", fetcher); page();
  expect(screen.getByRole("heading", { name: "Track your shipment." })).toBeTruthy();
  expect(screen.getByLabelText("LR number").maxLength).toBe(50);
  expect(screen.getByRole("link", { name: "Track Shipment" }).getAttribute("href")).toBe("/track");
  fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
  expect(screen.getByRole("button", { name: "Close navigation" }).getAttribute("aria-expanded")).toBe("true");
  expect(fetcher).not.toHaveBeenCalled();
});
it("rejects empty input and whitespace", async () => {
  const fetcher = vi.fn(); vi.stubGlobal("fetch", fetcher); page();
  await waitFor(() => expect(screen.getByLabelText("LR number").value).toBe(""));
  fireEvent.change(screen.getByLabelText("LR number"), { target: { value: "   " } });
  fireEvent.submit(screen.getByLabelText("LR number").closest("form"));
  expect(await screen.findByRole("alert")).toBeTruthy(); expect(fetcher).not.toHaveBeenCalled();
});
it("tracks a shared query only once in StrictMode and renders safe timeline", async () => {
  const fetcher = vi.fn().mockResolvedValue(success()); vi.stubGlobal("fetch", fetcher);
  page("/track?lr=crl-ngp-2026-000001");
  expect(await screen.findByRole("heading", { name: shipment.lrNumber })).toBeTruthy();
  expect(screen.getByRole("heading", { name: "Tracking history" })).toBeTruthy();
  expect(screen.getByText("Mumbai")).toBeTruthy();
  expect(screen.getByText("Expected delivery")).toBeTruthy();
  expect(fetcher).toHaveBeenCalledTimes(1);
});
it("manual form submission fetches once and refresh fetches again", async () => {
  const fetcher = vi.fn().mockResolvedValue(success()); vi.stubGlobal("fetch", fetcher); page();
  await new Promise(resolve => setTimeout(resolve, 10));
  fireEvent.change(screen.getByLabelText("LR number"), { target: { value: " crl-ngp-2026-000001 " } });
  fireEvent.submit(screen.getByLabelText("LR number").closest("form"));
  await screen.findByRole("heading", { name: shipment.lrNumber });
  expect(fetcher).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByRole("button", { name: "Refresh Status" }));
  await waitFor(() => expect(fetcher).toHaveBeenCalledTimes(2));
});
it("shows loading and blocks duplicate submissions", async () => {
  const fetcher = vi.fn(() => new Promise(() => {})); vi.stubGlobal("fetch", fetcher);
  page("/track?lr=CRL-12345");
  expect(await screen.findByText("Tracking your shipment…")).toBeTruthy();
  expect(screen.getByRole("button", { name: "Tracking…" }).disabled).toBe(true);
  fireEvent.submit(screen.getByLabelText("LR number").closest("form"));
  expect(fetcher).toHaveBeenCalledTimes(1);
});
it.each([[404, "couldn't find"], [429, "Too many"], [500, "temporarily unavailable"]])("renders safe HTTP %s errors", async (status, message) => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status })); page("/track?lr=CRL-12345");
  expect((await screen.findByRole("alert")).textContent).toContain(message);
});
it("shows connection failure", async () => {
  vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("private internal error"))); page("/track?lr=CRL-12345");
  expect((await screen.findByRole("alert")).textContent).toContain("Unable to connect");
  expect(screen.queryByText("private internal error")).toBeNull();
});
it("rejects oversized query without a request", async () => {
  const fetcher = vi.fn(); vi.stubGlobal("fetch", fetcher); page(`/track?lr=${"x".repeat(51)}`);
  await screen.findByRole("alert"); expect(fetcher).not.toHaveBeenCalled();
});
it("cancelled timeline includes only actual events", () => {
  render(<TrackingTimeline events={[{ status: "CANCELLED", timestamp: "2026-09-05T04:00:00Z" }]} status="CANCELLED" />);
  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  expect(screen.getByRole("listitem").getAttribute("aria-current")).toBe("step");
  expect(screen.queryByText("Delivery Completed")).toBeNull();
});

it("copies a tracking-only URL without unrelated query data", async () => {
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(success()));
  page("/track?lr=CRL-NGP-2026-000001&token=do-not-share");
  fireEvent.click(await screen.findByRole("button", { name: "Copy Tracking Link" }));
  await screen.findByText("Tracking link copied");
  expect(writeText).toHaveBeenCalledWith(`${window.location.origin}/track?lr=CRL-NGP-2026-000001`);
  fireEvent.click(screen.getByRole("button", { name: "Copy LR" }));
  await screen.findByText("LR number copied");
  expect(writeText).toHaveBeenLastCalledWith(shipment.lrNumber);
});

it("restores existing metadata after leaving tracking", () => {
  document.title = "Existing CRL page";
  const { unmount } = page();
  expect(document.title).toBe("Track Shipment | CRL Transport");
  unmount();
  expect(document.title).toBe("Existing CRL page");
});

import { StrictMode } from "react";
import { afterEach, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrackShipment from "./TrackShipment";

function page() { return render(<StrictMode><MemoryRouter><TrackShipment /></MemoryRouter></StrictMode>); }
afterEach(() => { cleanup(); });

it("renders local demo tracking without a network request", () => {
  page();
  fireEvent.change(screen.getByLabelText("LR number"), { target: { value: "CRL-NGP-2026-000001" } });
  fireEvent.submit(screen.getByLabelText("LR number").closest("form"));
  expect(screen.getByRole("heading", { name: "CRL-NGP-2026-000001" })).toBeTruthy();
  expect(screen.getAllByText("Nashik Transit Hub")).toHaveLength(2);
});

it("shows a helpful message for an unknown demo LR number", () => {
  page();
  fireEvent.change(screen.getByLabelText("LR number"), { target: { value: "CRL-UNKNOWN" } });
  fireEvent.submit(screen.getByLabelText("LR number").closest("form"));
  expect(screen.getByRole("alert").textContent).toContain("Demo shipment not found");
});

const demoShipments = {
  "CRL-NGP-2026-000001": {
    lrNumber: "CRL-NGP-2026-000001",
    origin: "Nagpur",
    destination: "Mumbai",
    status: "IN_TRANSIT",
    currentLocation: "Nashik Transit Hub",
    bookingDate: "2026-09-08T04:30:00Z",
    expectedDeliveryDate: "2026-09-11T12:00:00Z",
    trackingHistory: [
      { status: "BOOKED", location: "Nagpur", timestamp: "2026-09-08T04:30:00Z" },
      { status: "IN_TRANSIT", location: "Nashik Transit Hub", timestamp: "2026-09-09T07:15:00Z" },
    ],
  },
};

export function validateDemoLR(value) {
  const length = value.trim().length;
  return length < 5 || length > 50 ? "Please enter an LR number between 5 and 50 characters." : "";
}

export function getDemoShipment(lrNumber) {
  return demoShipments[lrNumber.trim().toUpperCase()] || null;
}

export const demoLRNumber = "CRL-NGP-2026-000001";

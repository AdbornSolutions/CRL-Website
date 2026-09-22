export const statuses = {
  BOOKED: ["Shipment Booked", "blue"], IN_TRANSIT: ["In Transit", "orange"],
  SEGREGATED: ["Shipment Segregated", "blue"], MANIFESTED: ["Added to Manifest", "blue"],
  PICKED_UP: ["Picked Up", "orange"], AT_HUB: ["At Hub", "blue"],
  DELIVERED: ["Delivered", "green"], EXCEPTION: ["Delivery Exception", "red"],
  MONEY_RECEIPT_CREATED: ["Payment Receipt Recorded", "blue"], TRIP_PLANNED: ["Trip Planned", "orange"],
  OUT_FOR_DELIVERY: ["Out for Delivery", "orange"], POD_UPLOADED: ["POD Uploaded", "green"],
  DRS_CLOSED: ["Delivery Run Closed", "green"],
  RECEIVED: ["Shipment Received", "blue"], LR_IMAGE_UPLOADED: ["Document Received", "blue"],
  LR_IMAGE_VERIFIED: ["Document Verified", "green"], COMPLETED: ["Delivery Completed", "green"],
  CLOSED: ["Shipment Closed", "green"], CANCELLED: ["Cancelled", "red"],
};
export const statusLabel = (status) => statuses[status]?.[0] || "Status update";
export function formatTrackingDate(value, includeTime = false) {
  if (!value || Number.isNaN(new Date(value).getTime())) return "Not available";
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata", day: "2-digit", month: "short", year: "numeric",
    ...(includeTime ? { hour: "2-digit", minute: "2-digit", hour12: true } : {}),
  }).format(new Date(value));
}

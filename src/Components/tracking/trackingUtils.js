export const statuses = {
  BOOKED: ["Shipment Booked", "blue"], IN_TRANSIT: ["In Transit", "orange"],
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

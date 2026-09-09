const baseUrl = (import.meta.env.VITE_API_BASE_URL || "/api").replace(/\/+$/, "");
const text = (value) => typeof value === "string" ? value : "";

export function validateLR(value) {
  const length = value.trim().length;
  return length < 5 || length > 50 ? "Please enter an LR number between 5 and 50 characters." : "";
}

export class TrackingError extends Error {
  constructor(message) { super(message); this.name = "TrackingError"; }
}

export function normalizeTracking(payload) {
  const data = payload?.data;
  if (payload?.success !== true || !data || !text(data.lrNumber) || !text(data.status)) {
    throw new TrackingError("Tracking service returned an unexpected response. Please try again.");
  }
  // Explicit allowlist: never forward IDs, documents, customer data or internal remarks.
  return {
    lrNumber: text(data.lrNumber), status: text(data.status),
    origin: text(data.origin), destination: text(data.destination),
    currentLocation: text(data.currentLocation), bookingDate: text(data.bookingDate),
    expectedDeliveryDate: text(data.expectedDeliveryDate),
    trackingHistory: Array.isArray(data.trackingHistory) ? data.trackingHistory.filter(event => event && text(event.status)).map(event => ({
      status: text(event.status), location: text(event.location), timestamp: text(event.timestamp),
    })) : [],
  };
}

export async function trackShipment(lrNumber, { signal } = {}) {
  const validation = validateLR(lrNumber);
  if (validation) throw new TrackingError(validation);
  const controller = new AbortController();
  let timedOut = false;
  const abort = () => controller.abort();
  signal?.addEventListener("abort", abort, { once: true });
  if (signal?.aborted) controller.abort();
  const timer = setTimeout(() => { timedOut = true; controller.abort(); }, 12000);
  try {
    const response = await fetch(`${baseUrl}/public/track/${encodeURIComponent(lrNumber.trim().toUpperCase())}`, {
      signal: controller.signal, credentials: "omit", cache: "no-store", headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      const messages = {
        400: "Please check the LR number and try again.",
        404: "We couldn't find tracking information for this LR number. Please check it and try again.",
        429: "Too many tracking requests. Please try again shortly.",
      };
      throw new TrackingError(messages[response.status] || "Tracking service is temporarily unavailable. Please try again later.");
    }
    return normalizeTracking(await response.json());
  } catch (error) {
    if (timedOut) throw new TrackingError("Tracking request timed out. Please try again.");
    if (controller.signal.aborted) throw error;
    if (error instanceof TrackingError) throw error;
    throw new TrackingError("Unable to connect to the tracking service. Please try again.");
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener("abort", abort);
  }
}

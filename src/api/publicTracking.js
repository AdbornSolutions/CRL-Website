const DEFAULT_API_BASE_URL = "/api";
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL?.trim() || DEFAULT_API_BASE_URL).replace(/\/+$/, "");
const text = (value) => typeof value === "string" ? value : "";

export function validateLR(value) {
  const normalized = String(value || "").trim().toUpperCase();
  if (normalized.length < 5 || normalized.length > 50) {
    return "Please enter an LR number between 5 and 50 characters.";
  }
  return /^[A-Z0-9][A-Z0-9/._-]*$/.test(normalized)
    ? ""
    : "Use only letters, numbers, /, ., _ or - in the LR number.";
}

export class TrackingError extends Error {
  constructor(message) {
    super(message);
    this.name = "TrackingError";
  }
}

export function normalizeTracking(payload) {
  const data = payload?.data;
  if (payload?.success !== true || !data || !text(data.lrNumber) || !text(data.status)) {
    throw new TrackingError("Tracking service returned an unexpected response. Please try again.");
  }
  return {
    lrNumber: text(data.lrNumber),
    status: text(data.status),
    lrUploadEligible: data.lrUploadEligible === true || data.status === "RECEIVED",
    origin: text(data.origin),
    destination: text(data.destination),
    currentLocation: text(data.currentLocation),
    bookingDate: text(data.bookingDate),
    expectedDeliveryDate: text(data.expectedDeliveryDate),
    trackingHistory: Array.isArray(data.trackingHistory)
      ? data.trackingHistory
          .filter((event) => event && text(event.status))
          .map((event) => ({
            status: text(event.status),
            location: text(event.location),
            timestamp: text(event.timestamp),
          }))
      : [],
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
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, 12000);

  try {
    const normalized = lrNumber.trim().toUpperCase();
    const response = await fetch(`${API_BASE_URL}/public/track/${encodeURIComponent(normalized)}`, {
      signal: controller.signal,
      credentials: "omit",
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      const messages = {
        400: "Please check the LR number and try again.",
        404: "We couldn't find tracking information for this LR number. Please check it and try again.",
        429: "Too many tracking requests. Please wait a moment and try again.",
      };
      throw new TrackingError(
        messages[response.status] || "Tracking service is temporarily unavailable. Please try again later.",
      );
    }

    let payload;
    try {
      payload = await response.json();
    } catch {
      throw new TrackingError("Tracking service returned an unexpected response. Please try again.");
    }
    return normalizeTracking(payload);
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

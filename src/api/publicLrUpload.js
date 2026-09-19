import { API_BASE_URL } from "./publicTracking";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const TOKEN_PATTERN = /^[a-f\d]{64}$/i;
const ALLOWED_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);
const ALLOWED_EXTENSIONS = /\.(?:jpe?g|png|webp|pdf)$/i;

export class PublicUploadError extends Error {
  constructor(message) {
    super(message);
    this.name = "PublicUploadError";
  }
}

const errorForStatus = (status, phase) => {
  if (status === 429) return "Too many upload attempts. Please wait and try again.";
  if (status === 401) return "This secure upload link has expired or was already used. Track the LR again to continue.";
  if (status === 409) return "This shipment is no longer available for customer LR upload.";
  if (status === 413) return "The selected file is too large. Maximum size is 10 MB.";
  if (status === 422) return phase === "request"
    ? "Enter a valid 5-digit customer code."
    : "Upload a valid JPG, PNG, WEBP, or PDF file up to 10 MB.";
  return phase === "request"
    ? "Unable to open secure upload right now. Please try again."
    : "Unable to upload the LR document right now. Please try again.";
};

const fetchWithTimeout = async (url, options, timeoutMs) => {
  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (timedOut) throw new PublicUploadError("The request timed out. Please try again.");
    if (error instanceof PublicUploadError) throw error;
    throw new PublicUploadError("Unable to connect to the upload service. Please try again.");
  } finally {
    clearTimeout(timer);
  }
};

export function validateCustomerCode(value) {
  return /^\d{5}$/.test(String(value || "").trim()) ? "" : "Enter your 5-digit customer code.";
}

export function validateLrFile(file) {
  if (!file) return "Select the LR document to upload.";
  if (file.size > MAX_FILE_SIZE) return "The selected file is too large. Maximum size is 10 MB.";
  if (!ALLOWED_EXTENSIONS.test(file.name) || (file.type && !ALLOWED_MIME_TYPES.has(file.type))) {
    return "Upload a JPG, PNG, WEBP, or PDF file.";
  }
  return "";
}

export async function requestLrUploadSession(lrNumber, customerCode) {
  const validation = validateCustomerCode(customerCode);
  if (validation) throw new PublicUploadError(validation);
  const response = await fetchWithTimeout(`${API_BASE_URL}/public/lr-upload/request`, {
    method: "POST",
    credentials: "omit",
    cache: "no-store",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ lrNumber, customerCode: customerCode.trim() }),
  }, 12000);
  if (!response.ok) throw new PublicUploadError(errorForStatus(response.status, "request"));

  const payload = await response.json().catch(() => null);
  const token = payload?.data?.uploadToken;
  if (!TOKEN_PATTERN.test(token || "")) {
    throw new PublicUploadError("Customer code does not match this LR. Please check it and try again.");
  }
  const expiresInMinutes = Number(payload.data.expiresInMinutes);
  return {
    token,
    expiresInMinutes: Number.isFinite(expiresInMinutes) && expiresInMinutes > 0 ? expiresInMinutes : 20,
  };
}

export async function uploadLrDocument(token, file) {
  if (!TOKEN_PATTERN.test(token || "")) throw new PublicUploadError("Secure upload link is invalid or expired.");
  const validation = validateLrFile(file);
  if (validation) throw new PublicUploadError(validation);

  const body = new FormData();
  body.append("lrImage", file, file.name);
  const response = await fetchWithTimeout(`${API_BASE_URL}/public/lr-upload/${token}`, {
    method: "POST",
    credentials: "omit",
    cache: "no-store",
    headers: { Accept: "application/json" },
    body,
  }, 60000);
  if (!response.ok) throw new PublicUploadError(errorForStatus(response.status, "upload"));
  const payload = await response.json().catch(() => null);
  if (payload?.success !== true) throw new PublicUploadError("Upload could not be confirmed. Please track the LR again.");
  return payload.data;
}

import { useEffect, useRef, useState } from "react";
import {
  requestLrUploadSession,
  uploadLrDocument,
  validateCustomerCode,
  validateLrFile,
} from "../../api/publicLrUpload";

export default function CustomerLrUpload({ lrNumber, onUploaded }) {
  const [customerCode, setCustomerCode] = useState("");
  const [session, setSession] = useState(null);
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const fileInput = useRef(null);

  useEffect(() => {
    if (!session) return undefined;
    const remaining = Math.max(0, session.expiresAt - Date.now());
    const timer = setTimeout(() => {
      setSession(null);
      setFile(null);
      setError("Secure upload link expired. Verify your customer code again.");
    }, remaining);
    return () => clearTimeout(timer);
  }, [session]);

  async function verify(event) {
    event.preventDefault();
    const validation = validateCustomerCode(customerCode);
    setError(validation);
    if (validation || busy) return;
    setBusy(true);
    try {
      const result = await requestLrUploadSession(lrNumber, customerCode);
      setSession({
        token: result.token,
        expiresInMinutes: result.expiresInMinutes,
        expiresAt: Date.now() + result.expiresInMinutes * 60000,
      });
      setCustomerCode("");
      setError("");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setBusy(false);
    }
  }

  async function upload(event) {
    event.preventDefault();
    const validation = validateLrFile(file);
    setError(validation);
    if (validation || busy || !session) return;
    if (Date.now() >= session.expiresAt) {
      setSession(null);
      setFile(null);
      setError("Secure upload link expired. Verify your customer code again.");
      return;
    }
    setBusy(true);
    try {
      await uploadLrDocument(session.token, file);
      setComplete(true);
      setSession(null);
      setFile(null);
      await onUploaded();
    } catch (uploadError) {
      setError(uploadError.message);
      if (/expired|already used|no longer available/i.test(uploadError.message)) {
        setSession(null);
        setFile(null);
      }
    } finally {
      setBusy(false);
    }
  }

  if (complete) {
    return <section className="tracking-panel tracking-upload tracking-no-print" aria-live="polite">
      <h2>LR document uploaded</h2>
      <p>Your one-time upload is complete. CRL will now verify the document.</p>
    </section>;
  }

  return <section className="tracking-panel tracking-upload tracking-no-print">
    <div className="tracking-panel-heading">
      <div>
        <p className="tracking-eyebrow">ACTION REQUIRED</p>
        <h2>Upload LR document</h2>
      </div>
      <span>Available only at Received status</span>
    </div>
    <p className="tracking-upload-copy">Verify the customer code to open a secure, one-time upload link.</p>

    {!session ? <form onSubmit={verify} noValidate>
      <label htmlFor="tracking-customer-code">5-digit customer code</label>
      <div className="tracking-upload-row">
        <input
          id="tracking-customer-code"
          inputMode="numeric"
          autoComplete="off"
          maxLength={5}
          pattern="[0-9]{5}"
          value={customerCode}
          disabled={busy}
          onChange={(event) => {
            setCustomerCode(event.target.value.replace(/\D/g, "").slice(0, 5));
            setError("");
          }}
        />
        <button className="tracking-primary" type="submit" disabled={busy}>
          {busy ? "Verifying…" : "Open secure upload"}
        </button>
      </div>
    </form> : <form onSubmit={upload} noValidate>
      <p className="tracking-upload-window">
        Secure link active for {session.expiresInMinutes} minutes and valid for one successful upload only.
      </p>
      <label htmlFor="tracking-lr-file">LR document</label>
      <input
        ref={fileInput}
        id="tracking-lr-file"
        type="file"
        accept=".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf"
        disabled={busy}
        onChange={(event) => {
          setFile(event.target.files?.[0] || null);
          setError("");
        }}
      />
      <small>JPG, PNG, WEBP or PDF · Maximum 10 MB</small>
      <button className="tracking-primary tracking-upload-submit" type="submit" disabled={busy || !file}>
        {busy ? "Uploading…" : "Upload LR document"}
      </button>
    </form>}
    {error && <p className="tracking-validation" role="alert">{error}</p>}
  </section>;
}

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TrackingSearch from "../Components/tracking/TrackingSearch";
import TrackingResult from "../Components/tracking/TrackingResult";
import TrackingSkeleton from "../Components/tracking/TrackingSkeleton";
import { statusLabel } from "../Components/tracking/trackingUtils";
import { trackShipment, validateLR } from "../api/publicTracking";
import "../Components/tracking/tracking.css";

export default function TrackShipment() {
  const [params, setParams] = useSearchParams();
  const query = params.get("lr") || "";
  const [value, setValue] = useState(query);
  const [validation, setValidation] = useState("");
  const [state, setState] = useState({ loading: false, error: "", shipment: null });
  const pending = useRef(null);

  const search = useCallback(async (lrNumber) => {
    const invalid = validateLR(lrNumber);
    setValidation(invalid);
    if (invalid) return;

    pending.current?.abort();
    const controller = new AbortController();
    pending.current = controller;
    setState({ loading: true, error: "", shipment: null });
    try {
      const shipment = await trackShipment(lrNumber, { signal: controller.signal });
      if (!controller.signal.aborted) setState({ loading: false, error: "", shipment });
    } catch (error) {
      if (!controller.signal.aborted) {
        setState({ loading: false, error: error.message, shipment: null });
      }
    } finally {
      if (pending.current === controller) pending.current = null;
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(query);
      setValidation("");
      setState({ loading: false, error: "", shipment: null });
      if (query) search(query);
    }, 0);
    return () => {
      clearTimeout(timer);
      pending.current?.abort();
    };
  }, [query, search]);

  useEffect(() => {
    const previousTitle = document.title;
    const metadata = [
      ["meta[name='description']", "Track your CRL Transport shipment using your LR number and view the latest delivery status."],
      ["meta[property='og:title']", "Track Shipment | CRL Transport"],
      ["meta[property='og:description']", "Track your CRL Transport shipment using your LR number."],
    ].map(([selector, content]) => {
      const element = document.querySelector(selector);
      const previous = element?.getAttribute("content");
      element?.setAttribute("content", content);
      return () => {
        if (!element) return;
        if (previous === null) element.removeAttribute("content");
        else element.setAttribute("content", previous);
      };
    });
    document.title = "Track Shipment | CRL Transport";
    return () => {
      document.title = previousTitle;
      metadata.forEach((restore) => restore());
    };
  }, []);

  function submit(event) {
    event.preventDefault();
    if (pending.current || state.loading) return;
    const lrNumber = value.trim().toUpperCase();
    const invalid = validateLR(lrNumber);
    setValidation(invalid);
    if (invalid) return;
    setValue(lrNumber);
    if (lrNumber === query) search(lrNumber);
    else setParams({ lr: lrNumber }, { replace: true });
  }

  function change(nextValue) {
    pending.current?.abort();
    pending.current = null;
    setValue(nextValue);
    setValidation("");
    setState({ loading: false, error: "", shipment: null });
  }

  return <div className="tracking-page">
    <Navbar />
    <main className="tracking-main">
      <div className="tracking-container">
        <header className="tracking-intro">
          <p className="tracking-eyebrow">CRL TRANSPORT · SHIPMENT TRACKING</p>
          <h1>Track your shipment.</h1>
          <p>Enter your LR number for the latest shipment status. No login needed.</p>
        </header>
        <div className="tracking-panel tracking-no-print">
          <TrackingSearch value={value} onChange={change} onSubmit={submit} loading={state.loading} error={validation} />
        </div>
        {state.loading && <TrackingSkeleton />}
        <p className="sr-only" role="status" aria-live="polite">
          {state.shipment ? `Shipment ${state.shipment.lrNumber}: ${statusLabel(state.shipment.status)}. Tracking details are available below.` : ""}
        </p>
        {state.error && <div className="tracking-panel tracking-error" role="alert">
          <h2>Unable to show tracking information</h2>
          <p>{state.error}</p>
          <button type="button" onClick={() => search(value)}>Try Again</button>
        </div>}
        {state.shipment && <TrackingResult
          key={state.shipment.lrNumber}
          shipment={state.shipment}
          onRefresh={() => { if (!pending.current) search(state.shipment.lrNumber); }}
          onUploadComplete={() => search(state.shipment.lrNumber)}
        />}
        {!state.loading && !state.error && !state.shipment && <div className="tracking-help">
          <h2>Where can I find my LR number?</h2>
          <p>Your LR number is provided on your CRL Transport booking / consignment receipt.</p>
          <a href="/contact">Need help? Contact CRL →</a>
        </div>}
      </div>
    </main>
    <Footer />
  </div>;
}

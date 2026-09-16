import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TrackingSearch from "../Components/tracking/TrackingSearch";
import TrackingResult from "../Components/tracking/TrackingResult";
import { demoLRNumber, getDemoShipment, validateDemoLR } from "../data/trackingDemo";
import "../Components/tracking/tracking.css";

export default function TrackShipment() {
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState("");
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Track Shipment | CRL Transport";
    return () => { document.title = previousTitle; };
  }, []);

  function submit(event) {
    event.preventDefault();
    const lrNumber = value.trim().toUpperCase();
    const invalid = validateDemoLR(lrNumber);
    setValidation(invalid);
    if (invalid) return;

    const result = getDemoShipment(lrNumber);
    setShipment(result);
    setValidation(result ? "" : `Demo shipment not found. Try ${demoLRNumber}.`);
  }

  return <div className="tracking-page">
    <Navbar />
    <main className="tracking-main">
      <div className="tracking-container">
        <header className="tracking-intro">
          <p className="tracking-eyebrow">CRL TRANSPORT · STATIC DEMO</p>
          <h1>Track your shipment.</h1>
          <p>This page uses local sample data only. Try LR number: <strong>{demoLRNumber}</strong></p>
        </header>
        <div className="tracking-panel tracking-no-print">
          <TrackingSearch value={value} onChange={next => { setValue(next); setValidation(""); setShipment(null); }} onSubmit={submit} loading={false} error={validation} />
        </div>
        {shipment && <TrackingResult key={shipment.lrNumber} shipment={shipment} onRefresh={() => setShipment(getDemoShipment(shipment.lrNumber))} />}
        {!shipment && !validation && <div className="tracking-help"><h2>Demo mode</h2><p>No shipment data is requested from a backend or external API.</p></div>}
      </div>
    </main>
    <Footer />
  </div>;
}

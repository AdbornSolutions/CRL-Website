import { useState } from "react";
import ShipmentStatusBadge from "./ShipmentStatusBadge";
import TrackingTimeline from "./TrackingTimeline";
import CustomerLrUpload from "./CustomerLrUpload";
import { formatTrackingDate } from "./trackingUtils";
import logo from "../../assets/images/crl-logo.png";

export default function TrackingResult({ shipment, onRefresh, onUploadComplete }) {
  const [feedback, setFeedback] = useState("");
  async function copy(link) {
    const url = new URL("/track", window.location.origin);
    url.searchParams.set("lr", shipment.lrNumber);
    try {
      await navigator.clipboard.writeText(link ? url.href : shipment.lrNumber);
      setFeedback(link ? "Tracking link copied" : "LR number copied");
    } catch { setFeedback("Copy unavailable. Please select the LR number or copy the page address manually."); }
  }
  return <div className="tracking-result">
    <div className="tracking-print-brand"><img src={logo} alt="CRL Transport" /><strong>Shipment tracking</strong></div>
    <div className="tracking-panel">
      <div className="tracking-summary-top"><div><p className="tracking-eyebrow">LR number</p><h2>{shipment.lrNumber}</h2><button className="tracking-text-button tracking-no-print" onClick={() => copy(false)}>Copy LR</button></div><ShipmentStatusBadge status={shipment.status} /></div>
      <div className="tracking-route"><div><span>Origin</span><strong>{shipment.origin || "Not available"}</strong></div><span className="tracking-route-line" aria-hidden="true">→</span><div><span>Destination</span><strong>{shipment.destination || "Not available"}</strong></div></div>
      <dl className="tracking-details"><div><dt>Current location</dt><dd>{shipment.currentLocation || "Not available"}</dd></div><div><dt>Booking date</dt><dd>{formatTrackingDate(shipment.bookingDate)}</dd></div><div><dt>Expected delivery</dt><dd>{formatTrackingDate(shipment.expectedDeliveryDate)}</dd></div></dl>
      <div className="tracking-actions tracking-no-print"><button onClick={onRefresh}>Refresh Status</button><button onClick={() => copy(true)}>Copy Tracking Link</button><button onClick={() => window.print()}>Print</button></div>
      <p role="status" className="tracking-feedback tracking-no-print">{feedback}</p>
    </div>
    {shipment.lrUploadEligible && <CustomerLrUpload lrNumber={shipment.lrNumber} onUploaded={onUploadComplete} />}
    <TrackingTimeline events={shipment.trackingHistory} status={shipment.status} />
  </div>;
}

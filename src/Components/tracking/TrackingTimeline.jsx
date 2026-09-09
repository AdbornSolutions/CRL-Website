import { formatTrackingDate, statusLabel } from "./trackingUtils";
export default function TrackingTimeline({ events, status }) {
  return <div className="tracking-panel">
    <div className="tracking-panel-heading"><h2>Tracking history</h2><span>All times in IST</span></div>
    {events.length ? <ol className="tracking-timeline">{events.map((event, index) => {
      const current = index === events.length - 1 && event.status === status;
      return <li key={`${event.timestamp}-${index}`} aria-current={current ? "step" : undefined}>
        <span className={`tracking-marker ${current ? "tracking-marker-current" : ""}`} aria-hidden="true" />
        <div><h3>{statusLabel(event.status)} {current && <small>Latest update</small>}</h3>
          {event.location && <p>{event.location}</p>}
          <p className="tracking-event-date">{formatTrackingDate(event.timestamp, true)}</p>
        </div>
      </li>;
    })}</ol> : <p>Tracking history is not available yet.</p>}
  </div>;
}

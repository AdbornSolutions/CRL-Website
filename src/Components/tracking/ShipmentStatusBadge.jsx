import { statuses, statusLabel } from "./trackingUtils";
export default function ShipmentStatusBadge({ status }) {
  return <span className={`tracking-badge tracking-badge-${statuses[status]?.[1] || "blue"}`}><span aria-hidden="true">●</span>{statusLabel(status)}</span>;
}

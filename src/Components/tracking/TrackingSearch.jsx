export default function TrackingSearch({ value, onChange, onSubmit, loading, error }) {
  return <form className="tracking-search" onSubmit={onSubmit} noValidate>
    <label htmlFor="tracking-lr">LR number</label>
    <div className="tracking-search-row">
      <input id="tracking-lr" name="lr" value={value} onChange={event => onChange(event.target.value)} maxLength={50} placeholder="CRL-NGP-2026-000001" autoComplete="off" autoCapitalize="characters" spellCheck={false} aria-invalid={Boolean(error)} aria-describedby={error ? "tracking-validation" : "tracking-hint"} />
      <button className="tracking-primary" type="submit" disabled={loading}>{loading ? "Tracking…" : "Track Shipment"}</button>
    </div>
    <p id="tracking-hint">Find your LR number on your CRL booking / consignment receipt.</p>
    {error && <p id="tracking-validation" role="alert" className="tracking-validation">{error}</p>}
  </form>;
}
